import { Helmet } from "react-helmet";
import BgSection from "../Shered/BgSection";
import img from "./../../assets/home/chef-service.jpg";
import CallUs from "./CallUs";
import Card from "./Card";
import CarouselItem from "./CarouselItem";
import FoodItem from "./FoodItem";
import FromOurMenu from "./FromOurMenu";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss| Home</title>
      </Helmet>
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
      <CallUs></CallUs>
      <Card></Card>
      <FromOurMenu></FromOurMenu>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
