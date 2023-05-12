

import Footer from "./scenes/Footer";
import HeroSection from "./scenes/HeroSection";
import WhatWeOfferSection from "./scenes/WhatWeOfferSection";
import WhereDoYouFallSection from "./scenes/WhereDoYouFall";



export default function Home() {
  return (
    <div className="max-w-[1750px] mx-auto">
      <HeroSection />
      <WhatWeOfferSection />
      <WhereDoYouFallSection />
      <Footer />
    </div>
  )
}
