import React from 'react';
import Reactdom from 'react-dom/client'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sf bg-black text-white">
      <Header />
      <HeroSection />
      <Section
        title="iPhone 15 Pro"
        subtitle="Titanium. So strong. So light. So Pro."
        linkText="Learn more"
        linkUrl="#"
        buyLinkText="Buy"
        buyLinkUrl="#"
        bgImage="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
      />
      <Section
        title="iPhone 15"
        subtitle="New camera. New design. Newphoria."
        linkText="Learn more"
        linkUrl="#"
        buyLinkText="Buy"
        buyLinkUrl="#"
        bgImage="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-storage-select-202309-6-1inch-black?wid=5120&hei=2880&fmt=webp&qlt=90&.v=R2l3NVFXaFQ5YlNudWlaUC8zZGNic3JzREtGdURCckdCS1pSL0k4eU9YTGZKQXB5Q29VS1NZbGZTQWVvQWtRSjBoUVhuTWlrY2hIK090ZGZZbk9HeEJWb1BiTjRORlc1Y1lKU3JWempySkp5RzdnYndhRTBFd2JJUFBqcG4rTXRmbW94YnYxc1YvNXZ4emJGL0IxNFp3&traceId=1"
      />
      <Section
        title="Macbook Pro"
        subtitle="A work of smart."
        linkText="Learn more"
        linkUrl="#"
        buyLinkText="Buy"
        buyLinkUrl="#"
        bgImage="https://www.apple.com/v/macbook-pro/ar/images/meta/macbook-pro__catc3my4a336_og.png"
      />
      <Section
        title="iPad Pro"
        subtitle="Unbelievably thin. Incredibly powerful."
        linkText="Learn more"
        linkUrl="#"
        buyLinkText="Buy"
        buyLinkUrl="#"
        bgImage="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-1-202405_GEO_EMEA_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=YXpaUEtKWGhlNnNrVGZkTEo4T0xsN2dzSmpObkZCM3MrNmJ5SkhESlNDZ3B5czEvSzhrR3NhUU5qR1JaMS9OYytPZEo4N1VRRWxvaDh0eHhOVmNKTVpEVHFLamY1QnZ3MzdXcjF6dVRnQVpuNDBzcjA0aG5jQUJ1UTI2VzJJR1k4Y3BvMVMzZ2xmUi9OK1FkVitUVlJR&traceId=1"
      />
      <Section
        title="Watch Series 10"
        subtitle="Thinstant classic."
        linkText="Learn more"
        linkUrl="#"
        buyLinkText="Buy"
        buyLinkUrl="#"
        bgImage="https://www.apple.com/in/apple-watch-series-10/images/meta/apple-watch-series-10__esijfewqry82_og.png"
      />
      <Footer />
    </div>
  );
}

export default App;