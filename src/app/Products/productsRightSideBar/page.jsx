import HeraderSection from "@/components/HeraderSection";
import ShopRightSideBar from "@/components/ShopRightSideBar";
import ShopSection from "@/components/ShopSection";
import ShopTop from "@/components/ShopTop";

const ProductsRightSideBarPage = () => {
  return (
    <>
      <HeraderSection tilte="Product" sTitle="Product" />
      <div className="container mx-auto px-4 grid lg:grid-cols-4 gap-6 xl:py-24 py-20">
        <div className="col-span-3">
          <ShopTop />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 pt-12">
            <ShopSection />
          </div>
        </div>
        <div className="col-span-1">
          <ShopRightSideBar />
        </div>
      </div>
    </>
  );
};

export default ProductsRightSideBarPage;
