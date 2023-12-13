// components/Footer.tsx
import React from 'react';

interface FooterProps {
  // Define any props your Footer may receive
}

const Footer: React.FC<FooterProps> = ({ /* destructure props here if needed */ }) => {
  return (
    <div>
      <p>Footer</p>
    </div>
  );
};

export default Footer;
