import BgSection from "../Shered/BgSection";
import img from "./../../assets/home/chef-service.jpg";
import CarouselItem from "./CarouselItem";
import FoodItem from "./FoodItem";
import PopularMenu from "./PopularMenu";
const Home = () => {
  return (
    <div>
      <CarouselItem></CarouselItem>
      <FoodItem></FoodItem>
      <BgSection
        Img={img}
        Header={"Bistro Boss"}
        Parag={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
      ></BgSection>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
