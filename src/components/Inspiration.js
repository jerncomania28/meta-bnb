import { IMAGES } from "../Images";
import Card from "./Card";

const Inspiration = () => {
  return (
    <section className="w-full relative flex justify-center items-center flex-col py-3">
      <h1 className="text-black text-[40px] font-[700px] text-center">
        Inspiration for your next adventure
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        {IMAGES.slice(0, 8).map((img, _idx) => (
          <Card Image={img} key={_idx} />
        ))}
      </div>
    </section>
  );
};

export default Inspiration;
