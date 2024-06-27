import HeraderSection from "@/components/HeraderSection";
import ShopSection from "@/components/ShopSection";
import ShopTop from "@/components/ShopTop";
import ShopRightSideBar from "@/components/ShopRightSideBar";

const ProdustsLeftSideBarpage = () => {
  return (
    <>
      <HeraderSection tilte="Product" sTitle="Product" />
      <div className="container mx-auto px-4 grid lg:grid-cols-4 gap-6 xl:py-24 py-20">
        <div className="md:col-span-1">
          <ShopRightSideBar />
        </div>
        <div className="col-span-3">
          <ShopTop />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 pt-12">
            <ShopSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdustsLeftSideBarpage;
