import Card from "./Card";

import Desert1 from "../assets/desert-1.png";
import Desert2 from "../assets/desert-2.png";
import Desert3 from "../assets/desert-3.png";
import Desert4 from "../assets/desert-4.png";
import Desert5 from "../assets/desert-5.png";
import Desert6 from "../assets/desert-6.png";
import Desert7 from "../assets/desert-7.png";
import Desert8 from "../assets/desert-8.png";

const Inspiration = () => {
  const IMAGES = [
    Desert1,
    Desert2,
    Desert3,
    Desert4,
    Desert5,
    Desert6,
    Desert7,
    Desert8,
  ];

  return (
    <section className="w-full relative flex justify-center items-center flex-col py-3">
      <h1 className="text-black text-[40px] font-[700px] text-center">
        Inspiration for your next adventure
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        {IMAGES.map((img, _idx) => (
          <Card Image={img} key={_idx} />
        ))}
      </div>
    </section>
  );
};

export default Inspiration;
