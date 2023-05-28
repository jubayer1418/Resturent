import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../Hook/useCart";
import { AuthContext } from "../../Providers/AuthProvider";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const handleAddToCard = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 h-40">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <button
          onClick={() => handleAddToCard(item)}
          className="btn btn-outline border-0 btn-warning border-b-4 my-20"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
