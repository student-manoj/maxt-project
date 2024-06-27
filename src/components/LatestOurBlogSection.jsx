import { LatestOurBlogData } from "@/utils/LatestOurBlogData";
import Heading from "./Heading";
import LatestOurBlogCard from "./LatestOurBlogCard";

const LatestOurBlogSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 xl:py-24 py-20">
        <Heading
          title="Latest Our Blog"
          description="Preorder now to receive exclusive deals & gifts"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 pt-12">
          {LatestOurBlogData.map((value) => (
            <LatestOurBlogCard key={value.id} {...value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestOurBlogSection;
