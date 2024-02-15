// partners.tsx
import React from 'react';
import Image from 'next/image';
import { icons } from '../data/partners';

const PartnersComp: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-[40px] max-verySmall:grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
      {icons.map((icon, index) => (
        <div key={index} className="flex items-center justify-center">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={100}
            height={100}
            className="object-cover  max-verySmall:w-150 max-verySmall:h-150 sm:w-100 sm:h-100 "
          />
        </div>
      ))}
    </div>
  );
};

export default PartnersComp;
