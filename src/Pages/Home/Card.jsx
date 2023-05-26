const Card = ({ item }) => {
  const { name, image, price, recipe } = item;
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
        <button className="btn btn-outline border-0 btn-warning border-b-4 my-20">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
