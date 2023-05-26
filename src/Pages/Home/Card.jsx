import img1 from "../../assets/home/slide1.jpg";
const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-8 my-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-40">
          <img src={img1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <button className="btn btn-outline border-0 btn-warning border-b-4 my-20">
            View Full Menu
          </button>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-40">
          <img src={img1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <button className="btn btn-outline border-0 btn-warning border-b-4 my-20">
            View Full Menu
          </button>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-40">
          <img src={img1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <button className="btn btn-outline border-0 btn-warning border-b-4 my-20">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
