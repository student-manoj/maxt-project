"use client";

import BrandsWeStockSection from "@/components/BrandsWeStockSection";
import DealofTheDaySection from "@/components/DealofTheDaySection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import FollowOnInstagramSection from "@/components/FollowOnInstagramSection";
import HeroSection from "@/components/HeroSection";
import LatestOurBlogSection from "@/components/LatestOurBlogSection";
import OurBestCategorigsSection from "@/components/OurBestCategorigsSection";
import OurBestProductsSection from "@/components/OurBestProductsSection";
import VideoSection from "@/components/VideoSection";

const Homepage = () => {


  return (
    <>
          <HeroSection />
          <OurBestCategorigsSection />
          <FeaturedProductsSection />
          <VideoSection />
          <OurBestProductsSection/>
          <LatestOurBlogSection />
          <DealofTheDaySection />
          <FollowOnInstagramSection />
          <BrandsWeStockSection />
    </>
  );
};

export default Homepage;
