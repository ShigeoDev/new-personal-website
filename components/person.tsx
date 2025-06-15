import Image from "next/image";
import AnimatedStar from "./animatedstar";

export default function Person() {
  return (
    <div className="relative w-full">
      <Image src="/pic2.png" width={360} height={540} alt="me" className="w-full max-h-screen object-contain" />
      <AnimatedStar />
    </div>
  );
}
