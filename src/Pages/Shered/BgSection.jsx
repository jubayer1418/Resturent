import { ParallaxBanner } from "react-scroll-parallax";
const BgSection = ({ Img, Header, Parag }) => {
  return (
    <ParallaxBanner
      layers={[{ image: `${Img}`, speed: -45 }]}
      className="aspect-[2/1]"
    >
      <div className="hero h-[700px] my-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl px-72 py-20   text-white p-10 bg-black bg-opacity-60">
            <h1 className="mb-5 text-5xl font-bold">{Header}</h1>
            <p className="mb-5">{Parag}</p>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default BgSection;
