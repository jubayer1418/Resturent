import Card from "../Home/Card";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-8 my-10">
      {items.map((item) => (
        <Card key={item._id} item={item}></Card>
      ))}
    </div>
  );
};

export default OrderTab;
