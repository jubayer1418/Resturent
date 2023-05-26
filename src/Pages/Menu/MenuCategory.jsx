import { Link } from "react-router-dom";
import BgSection from "../Shered/BgSection";
import MenuItem from "../Shered/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <BgSection Img={img} Header={title}></BgSection>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
