const Heading = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <h4 className="text-2xl font-semibold">{props.title}</h4>
        <p className="text-base text-center">{props.description}</p>
      </div>
    </>
  );
};

export default Heading;
