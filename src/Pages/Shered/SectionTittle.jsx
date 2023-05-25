const SectionTittle = ({ SubHeader, Header }) => {
  return (
    <div className="w-96 mx-auto space-y-5 my-10">
      <p className="text-center text-yellow-500 ">-------{Header}-------</p>
      <h1 className=" text-center text-black border-y-2 text-4xl py-5">
        {SubHeader}
      </h1>
    </div>
  );
};

export default SectionTittle;
