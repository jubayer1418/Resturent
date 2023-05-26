import { ParallaxBanner } from "react-scroll-parallax";
import featuredImg from "./../../assets/home/featured.jpg";

const FromOurMenu = () => {
  return (
    <ParallaxBanner
      layers={[{ image: `${featuredImg}`, speed: -35 }]}
      className="aspect-[2/1] "
    >
      <div className="hero h-full">
        <div className="hero-content text-center text-neutral-content bg-slate-500 bg-opacity-60 h-full ">
          <div className="hero ">
            <div className="hero-content flex-col w-[80%] lg:flex-row ">
              <div>
                <img
                  src={featuredImg}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
              <div className="">
                <p className="">
                  March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Error voluptate facere,
                  deserunt dolores maiores quod nobis quas quasi. Eaque repellat
                  recusandae ad laudantium tempore consequatur consequuntur
                  omnis ullam maxime tenetur.
                </p>
                <button className="btn btn-outline border-0 border-b-4 ">
                  View Full Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default FromOurMenu;
