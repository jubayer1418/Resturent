import { ParallaxBanner } from "react-scroll-parallax";
const BgSection = ({ Img, Header, Parag }) => {
  return (
    <ParallaxBanner
      layers={[{ image: `${Img}`, speed: -35 }]}
      className="aspect-[2/1]"
    >
      <div className="hero h-[600px] my-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl   bg-white text-black p-10 ">
            <h1 className="mb-5 text-5xl font-bold">{Header}</h1>
            <p className="mb-5">{Parag}</p>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default BgSection;
