import { HeroSection, Features, Download, Footer } from "./components";
import assets from "./assets";

function App() {
  return (
    <>
      <HeroSection
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showButton
        image={assets.homeHero}
        banner="banner"
      />
      <HeroSection
        title="Smart User Interface Marketplace"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        image={assets.homeCards}
        reverse={true}
      />
      <Features />
      <HeroSection
        title="Deployment"
        description="ProNef is built using Expo. which runs natively  on all user's smartphone devices. Easily get your apps into people handss"
        image={assets.feature}
        reverse={true}
      />
      <HeroSection
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        image={assets.mockup}
        banner="banner02"
      />
      <Download />
      <Footer />
    </>
  );
}

export default App;
