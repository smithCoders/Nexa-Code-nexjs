// partners.tsx
import React from 'react';
import Image from 'next/image';
import { icons } from '../data/partners';

const PartnersComp: React.FC = () => {
  return (
    <div className="grid grid-cols-5 gap-[7.8rem] max-largeMedium:grid-cols-2 max-small:grid-cols-1 max-small:gap-y-65">
      {icons.map((icon, index) => (
        <div key={index} className="flex items-center justify-center">
          <Image src={icon.src} alt={icon.alt} width={60} height={60} />
        </div>
      ))}
    </div>
  );
};

export default PartnersComp;
