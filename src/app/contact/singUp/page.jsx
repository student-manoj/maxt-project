import HeraderSection from "@/components/HeraderSection";
import Link from "next/link";

const Singpage = () => {
  return (
    <>
      <HeraderSection tilte="My Account" sTitle="My Account" />
      <div className="bg-[url('/contactPageImage.png')] bg-cover object-center">
        <div className="container mx-auto px-4 xl:pt-24 py-20 flex lg:justify-end justify-center">
          <div className="bg-white px-7 py-14">
            <h3 className="text-3xl font-semibold">Sing In</h3>
            <form className="pt-10 flex flex-col gap-7">
              <input placeholder="Enter Email :" className="border focus:outline-none h-12 md:w-[480px] px-4"/>
              <input placeholder="Enter Password :" className="border focus:outline-none h-12 md:w-[480px] px-4"/>
              <div className="flex md:flex-row flex-col gap-4 justify-between items-center">
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <label for="vehicle3">I Agree Terms and Conditions.</label>
                </div>
                <Link href="/contact/forgetPassword" className="text-primary ">Forget Password?</Link>
              </div>
              <div className="flex md:flex-row flex-col gap-4 justify-between items-center">
                <button className="text-white bg-primary px-4 py-2 rounded-md">Sing Up</button>
                <p> You have an account? Please,
                  <Link href="/contact/singUp" className="text-primary"> Sign In</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="py-10"></div>
    </>
  );
};

export default Singpage;
