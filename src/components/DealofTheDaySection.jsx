import Timer from "./Timer";

const DealofTheDaySection = () => {
  return (
    <>
      <div className="bg-[url('/DealofTheDayaimage.png')] bg-center bg-cover object-center">
        <div className="container mx-auto px-4 py-24">
          <h4 className="text-2xl font-semibold">Deal of The Day</h4>
          <p className="text-base pt-5 pb-6">
            Preorder now to receive exclusive deals & gifts
          </p>
          <Timer duration={6 * 24 * 60 * 60 * 1000} />
          <div className="flex gap-9">
            <div>Days</div>
            <div>Hours</div>
            <div>Minutes</div>
            <div>Seconds</div>
          </div>
          <div className="flex gap-4 pt-6">
            <button className="hover:bg-primary px-4 py-2 rounded-full border hover:border-primary duration-300 border-black hover:text-white">Shop Now</button>
            <button className="hover:bg-primary px-4 py-2 rounded-full border hover:border-primary duration-300 border-black hover:text-white">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealofTheDaySection;
