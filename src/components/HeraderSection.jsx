import Link from "next/link";

const HeraderSection = (props) => {
  return (
    <>
      <div className="bg-[url('/HearderSectionImage.png')] bg-cover bg-center flex flex-col items-center">
        <div className="py-32">
          <h2 className="text-5xl font-bold text-center">{props.tilte}</h2>
          <h2 className="pt-4">
            <Link href="/" className="text-2xl font-semibold flex gap-4 items-center" >
              Home
              <span> <li className="text-primary text-2xl font-semibold">{props.sTitle}</li></span>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default HeraderSection;
