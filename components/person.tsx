import Image from "next/image";
import AnimatedStar from "./animatedstar";
import TitleBox from "./titlebox";

export default function Person() {
  return (
    <div className="relative w-full">
      <Image src="/neymarcrop.png" width={360} height={540} alt="me" className="w-full max-h-screen object-contain pt-[8vh]" />
      <AnimatedStar />
      <TitleBox />
    </div>
  );
}
