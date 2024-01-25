import { useState } from 'react';
import ColorPicker from '../components/ColorPicker';
import TechnologyCheckbox from '../components/TechnologyCheckbox';
import Banner from '../components/Banner';
import html2canvas from "html2canvas";

const Home: React.FC = () => {
  const [colors, setColors] = useState({
    color1: '#D8F5E9',
    color2: '#B97676',
    gradientAngle: 0,
    iconColor1: "blue",
    iconColor2: "gray",
    textColor: "black",
  });
  const [technologies, setTechnologies] = useState<{
    React: boolean;
    'Node.js': boolean;
    HTML5: boolean;
    CSS3: boolean;
    JavaScript: boolean;
    Angular: boolean;
    Microsoft: boolean;
    Android: boolean;
    AppStoreIos: boolean;
    Aws: boolean;
    DotNet: boolean;
    Java: boolean;
    MicrosoftSQLServer: boolean;
    AzureDevOps: boolean;
  }>({
    React: false,
    'Node.js': false,
    HTML5: false,
    CSS3: false,
    JavaScript: false,
    Angular: false,
    Microsoft: false,
    Android: false,
    AppStoreIos: false,
    Aws: false,
    DotNet: false,
    Java: false,
    MicrosoftSQLServer: false,
    AzureDevOps: false
  });
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('');

  const handleColorChange = (color: any, type: string) => {
    setColors((prevColors) => ({ ...prevColors, [type]: color.hex }));
  };

  const handleAngleChange = (angle: number, type: string) => {
    setColors((prevColors) => ({ ...prevColors, [type]: angle }));
  };

  const handleTechnologyChange = (technology: string, isChecked: boolean) => {
    setTechnologies((prevTechnologies) => ({ ...prevTechnologies, [technology]: isChecked }));
  };

  return (
    <div className='home_container'>
      <h1>LinkedIn Banner Generator</h1>
      <Banner
        colors={colors}
        technologies={technologies}
        fullName={fullName}
        role={role} />
      <ColorPicker
        label="Background Color Initial"
        color={colors.color1}
        onChange={(color) => handleColorChange(color, 'color1')} />
      <ColorPicker
        label="Background Color Finish"
        color={colors.color2}
        onChange={(color) => handleColorChange(color, 'color2')} />
      Gradient angle:
      <input
        type='number'
        defaultValue={0}
        min={0}
        max={360}
        step={1}
        onChange={(e) => {
          if (e.target.value)
            handleAngleChange(parseInt(e.target.value), 'gradientAngle')
        }}
      />
      <ColorPicker
        label="Icon Color 1"
        color={colors.iconColor1}
        onChange={(color) => handleColorChange(color, 'iconColor1')} />
      <ColorPicker
        label="Icon Color 2"
        color={colors.iconColor2}
        onChange={(color) => handleColorChange(color, 'iconColor2')} />
      <ColorPicker
        label="Text Color"
        color={colors.textColor}
        onChange={(color) => handleColorChange(color, 'textColor')} />

      <div>
        <h2>Technologies:</h2>
        {Object.keys(technologies).map((tech) => (
          <TechnologyCheckbox key={tech} technology={tech} onChange={handleTechnologyChange} />
        ))}
      </div>

      <div>
        <label>
          Title:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <br />
        <label>
          Subtitle:
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={() => downloadBanner()}>download</button>
      </div>
    </div>
  );

  async function downloadBanner() {
    const canvas = await html2canvas(document.getElementById('banner')!);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, "banner.png");
  }
  function downloadImage(blob: string, fileName: string) {
    const fakeLink = window.document.createElement("a");
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  };
};

export default Home;
