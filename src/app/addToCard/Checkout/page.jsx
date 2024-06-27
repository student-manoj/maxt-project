import HeraderSection from "@/components/HeraderSection";
import { OrderItems } from "@/utils/FollowOnInstagramData";
import Image from "next/image";
import Link from "next/link";
import paymentlogos from "../../../../public/paymentlogos .png";

const Checkoutpage = () => {
  return (
    <>
      <HeraderSection tilte="Checkout" sTitle="Checkout" />
      <div className="container mx-auto px-4 xl:py-24 py-20">
        <div className="flex flex-col gap-10">
          <div className="bg-primary/40 py-7 px-7 border-r-[20px] border-l-[20px] border-primary">
            Returning customer?
            <Link href="/contact/singUp" className="font-medium underline">Click here to login</Link>
          </div>
          <div className="bg-primary/40 py-7 px-7 border-r-[20px] border-l-[20px] border-primary">
            Have a coupon?
            <Link href="#" className="font-medium underline">Click here to enter your code</Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-6 pt-12">
          <div className="col-span-3">
            <h3 className="text-2xl font-medium">Billing details</h3>
            <form className="pt-10 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="" for="username">First Name <span className="text-red-600">*</span></label>
                <input required className="h-14 w-full focus:outline-none border px-4 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="" for="username"> Last Name <span className="text-red-600">*</span></label>
                <input required  className="h-14 w-full focus:outline-none border px-4 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="" for="username"> Company name (optional) </label>
                <input required  className="h-14 w-full focus:outline-none border px-4 rounded"/>
              </div>
              <div className="flex flex-col gap-2">
                <label for="username"> Country / Region <span className="text-red-600">*</span> </label>
                <input required placeholder="United States (US)" className="h-14 w-full focus:outline-none border px-4 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label for="username"> Street address <span className="text-red-600">*</span></label>
                <input required placeholder="House Number & Street Name" className="h-14 w-full focus:outline-none border px-4 rounded"/>
              </div>
              <div className="flex flex-col gap-2">
                <input placeholder="Apartment, suite, unit, etc. (optional)" className="h-14 w-full focus:outline-none border px-4 rounded"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="" for="username">Town / City <span className="text-red-600">*</span></label>
                <input required className="h-14 w-full focus:outline-none border px-4 rounded"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="" for="username">County (optional)</label>
                <input className="h-14 w-full focus:outline-none border px-4 rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="" for="username">Postcode <span className="text-red-600">*</span></label>
                <input required className="h-14 w-full focus:outline-none border px-4 rounded"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="" for="username">Phone <span className="text-red-600">*</span></label>
                <input required className="h-14 w-full focus:outline-none border px-4 rounded"/>
              </div>
              <div className="flex flex-col gap-2">
                <label for="username"> Email address <span className="text-red-600">*</span></label>
                <input required className="h-14 w-full focus:outline-none border px-4 rounded"/>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" />
                <label for="vehicle1">Create an account?</label>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="rounded-full" />
                <label for="vehicle1">Ship to a different address?</label>
              </div>
              <div className="flex flex-col gap-2">
                <label className="" for="username">Order notes (optional)</label>
                <input placeholder="Notes about your order, e.g. special notes for delivery" className="h-14 w-full focus:outline-none border px-4 rounded"/>
              </div>
            </form>
          </div>
          <div className="col-span-1">
            <div className="bg-[#FAFAFA] pt-11 px-7">
              <h3 className="text-2xl font-medium text-center pb-10">Your Order</h3>
              <div className="grid grid-cols-1 divide-y">
                <hr />
                {OrderItems.map((vlaue) => (
                  <div key={vlaue.id} className="grid grid-cols-4 gap-4 py-3">
                    <div className="col-span-1"><Image src={vlaue.img} alt="Image" /></div>
                    <div className="col-span-2 text-sm flex flex-col">{vlaue.title}
                      <span className="text-sm font-medium">Quality:{vlaue.quality}</span>
                    </div>
                    <div className="col-span-1 font-medium">${vlaue.price}.00</div>
                  </div>
                ))}
                <hr />
                <div className="flex justify-between py-3"><p>Subtotal</p><div className="font-medium">$586.00</div></div>
                <hr />
                <div className="flex justify-between items-center py-3 ">
                  <div className="">Shipping</div>
                  <div className="flex flex-col items-end text-sm">
                    <div className="flex gap-2">
                      <div className="">Flat Rate: $20.00</div>
                      <input type="checkbox" />
                    </div>
                    <div className="flex gap-2">
                      <div className="">Free Shipping</div>
                      <input type="checkbox" />
                    </div>
                    <div className="flex gap-2">
                      <div className="">Local Pickup: $25.00</div>
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between py-3">
                  <p className="text-lg font-semibold">Total</p>
                  <div className="font-semibold text-xl text-primary">$586.00</div>
                </div>
                <div className="bg-white p-4 flex flex-col gap-3">
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <div className="text-base font-medium">Direct Bank Transfer</div>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <div className="text-base font-medium">Check paymentsr</div>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <div className="text-base font-medium"> Cash on delivery</div>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <div className="text-base font-medium flex items-center gap-2">
                      PayPal
                      <span>
                        <Image src={paymentlogos} alt="image" />
                      </span>
                    </div>
                  </div>
                  <div className="underline text-center text pt-2 ">What is PayPal?</div>
                </div>
                <div className="py-4 flex flex-col gap-3">
                  <hr />
                  <div className="text-base">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </div>
                  <hr />
                  <div className="flex gap-2 pb-4">
                    <input type="checkbox" />
                    <div className="text-[8px] font-semibold">I have read and agree to the website terms and conditions* </div>
                  </div>
                  <button className="bg-primary py-3 rounded-lg text-white">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkoutpage;
