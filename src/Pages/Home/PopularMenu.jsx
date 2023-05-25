import useMenu from "../../Hook/UseMenu";
import MenuItem from "../Shered/MenuItem";
import SectionTittle from "../Shered/SectionTittle";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section>
      <SectionTittle
        Header="From Our Menu"
        SubHeader="Popular Items"
      ></SectionTittle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 my-20">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
