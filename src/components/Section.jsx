import React from 'react';

const Section = ({ title, subtitle, linkText, linkUrl, buyLinkText, buyLinkUrl, bgImage }) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-white">
        <h2 className="text-4xl md:text-6xl font-semibold">{title}</h2>
        <p className="text-lg mt-2">{subtitle}</p>
        <div className="mt-4 flex gap-6 justify-center">
          <a href={linkUrl} className="underline hover:text-gray-300 transition">
            {linkText}
          </a>
          {buyLinkUrl && (
            <a href={buyLinkUrl} className="underline hover:text-gray-300 transition">
              {buyLinkText || 'Buy'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;