import { BiSliderAlt } from "react-icons/bi";
import { FaList } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";

const ShopTop = () => {
  return (
    <>
      <div className="md:flex md:flex-row flex flex-col gap-4 justify-between items-center">
        <div className="flex gap-4">
          <BiSliderAlt className="border p-3 h-10 w-10" />
          <FaList className="border p-3 h-10 w-10" />
          <BsFillGridFill className="border p-3 h-10 w-10" />
        </div>
        <div>Showing 1–32 of 250 results</div>
        <div>
          <form>
            <select className="border px-4 py-1 flex gap-4 focus:outline-none rounded-md">
              <option>Default Sorting</option>
              <option>price(Lowest)</option>
              <option>price(highest)</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShopTop;
