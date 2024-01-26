import React from 'react';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaAngular,
  FaMicrosoft, FaAndroid, FaAws, FaJava
} from 'react-icons/fa';
import { SiDotnet, SiMicrosoftsqlserver, SiAzuredevops, SiApple } from "react-icons/si";
import { Button } from './ui/button'
import html2canvas from "html2canvas";
import { Colors } from './GeneratorForm';

interface BannerProps {
  colors: Colors,
  technologies: { [key: string]: boolean };
  fullName: string;
  role: string;
}

const Banner: React.FC<BannerProps> = ({ colors, technologies, fullName, role }) => {
  const proficiencyIcons: { [key: string]: React.ReactNode } = {
    React: <FaReact />,
    'Node.js': <FaNodeJs />,
    HTML5: <FaHtml5 />,
    CSS3: <FaCss3 />,
    JavaScript: <FaJs />,
    Angular: <FaAngular />,
    Microsoft: <FaMicrosoft />,
    Android: <FaAndroid />,
    Apple: <SiApple />,
    Aws: <FaAws />,
    DotNet: <SiDotnet />,
    Java: <FaJava />,
    MicrosoftSQLServer: <SiMicrosoftsqlserver />,
    AzureDevOps: <SiAzuredevops />
  };

  const selectedTechnologies = Object.keys(technologies).filter((tech) => technologies[tech]);

  return (<>

    <div className="w-full lg:w-[1584px]">
      <h2 className="text-3xl font-bold mb-4">Preview</h2>
      <div
        id='banner'
        className="w-full h-[396px] rounded-lg flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(${colors.gradientAngle}deg, ${colors.color1}, ${colors.color2})`,
          padding: '20px'
        }}>
        <div className='flex flex-row flex-wrap justify-center items-center m-w-[700px] m-10'>
          {selectedTechnologies.map((tech, index) => (
            <div key={index}
              className="my-6 text-8xl antialiased"
              style={{
                color: `${colors.iconColor1}`,
                filter: `drop-shadow(2px 2px 2px ${colors.iconColor2})`
              }}>
              {proficiencyIcons[tech]}
            </div>
          ))}
        </div>
        <div
          className='block float-right w-full size-10 text-right m-10'
          style={{
            color: `${colors.textColor}`
          }}>
          <h3 className="text-2xl font-bold">{fullName}</h3>
          <p className="text-lg">{role}</p>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button
          className="bg-green-500 text-white rounded-md py-2 px-4 text-center"
          onClick={() => downloadBanner()} >
          Download
        </Button>
      </div>
    </div >


    {/* <div
      className='banner-container' id="banner">
      <div
        className='banner'
        style={{
          background: `linear-gradient(${colors.gradientAngle}deg, ${colors.color1}, ${colors.color2})`,
          padding: '20px'
        }}>
        <div className='technologies-displayer'>
          {selectedTechnologies.map((tech, index) => (
            <div key={index}
              className="technology-logo-item"
              style={{
                filter: `drop-shadow(2px 2px 2px ${colors.iconColor2})`
              }}>
              {proficiencyIcons[tech]}
            </div>
          ))}
        </div>
      </div>
      <div className='bottom-text'>
        <p style={{ color: colors.textColor }}><strong>{fullName}</strong></p>
        <p style={{ color: colors.textColor }}>{role}</p>
      </div>
    </div> */}
  </>);

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

export default Banner;
