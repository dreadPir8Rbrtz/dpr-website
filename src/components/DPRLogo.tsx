import React from 'react';

const DPRLogo: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <img 
        src="https://i.imgur.com/PujXJsf.png" 
        alt="DPR Logo"
        className="w-full h-full object-cover scale-150"
      />
    </div>
  );
};

export default DPRLogo;