import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaTwitter,} from "react-icons/fa6";

const HeaderBar = () => {
  return (
    <>
      <div className="bg-[#F1F1F1] md:flex hidden">
        <div className="container mx-auto px-4 flex justify-between items-center py-5">
          <div className="lg:flex gap-5">
            <div className="flex items-center gap-2">
              <FaLocationDot className="hover:text-primary duration-300" />
              <span className="text-xs">12 Arlington Street, New York</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="hover:text-primary duration-300" />
              <span className="text-xs">+99 0123 456 0470</span>
            </div>
          </div>
          <div className="lg:pr-52 text-xs">
            Today Discount Sale, <span className="text-primary">Off 40%</span>
          </div>
          <div className="flex gap-4">
            <FaFacebookF className="hover:text-primary duration-300" />
            <FaTwitter className="hover:text-primary duration-300" />
            <FaInstagram className="hover:text-primary duration-300" />
            <FaLinkedinIn className="hover:text-primary duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
