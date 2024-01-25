import React from 'react';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaAngular,
  FaMicrosoft, FaAndroid, FaAws, FaJava
} from 'react-icons/fa';
import { SiDotnet, SiMicrosoftsqlserver, SiAzuredevops, SiApple } from "react-icons/si";

interface BannerProps {
  colors: {
    color1: string;
    color2: string;
    iconColor1: string;
    iconColor2: string;
    textColor: string;
  };
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
    Java: <FaJava />
    // Add more icons for other technologies as needed
  };

  const selectedTechnologies = Object.keys(technologies).filter((tech) => technologies[tech]);

  return (
    <div
      className='banner-container' id="banner">
      <div
        className='banner'
        style={{
          background: `linear-gradient(${colors.color1}, ${colors.color2})`,
          color: `${colors.iconColor1}`,
          padding: '20px'
        }}>
        <div className='technologies-displayer'>
          {selectedTechnologies.map((tech, index) => (
            <div key={index}
              className="technology-logo-item"
              style={{
                filter: `drop-shadow(0 0 3px #${colors.iconColor2})`
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
    </div>
  );
};

export default Banner;
