import TitleLine from './titleline';
import { Typewriter } from './typewriter';

export default function TitleBox() {
  return (

    <div className='absolute left-1/2 top-1/2 transform -translate-x-[150%] -translate-y-[110%] w-[min(30vw,30vh)] h-[min(30vw,30vh)]'>
      <div className="relative px-4 pt-6 w-full h-full">
        <Typewriter text="NIGEL" stagger={0.18} className="text-[min(6vw,6vh)] tracking-wide w-full h-full left-0 top-0 font-bold absolute z-0" />

        <TitleLine className="absolute bottom-0 left-0 w-full h-auto z-0" />
        <Typewriter text="Math + CS Double Major at UofT, from Vancouver, Canada. (Click Star)" stagger={0.05} className="text-[min(2vw,2vh)] w-[min(21.2vw,21.2vh)] h-full left-0 top-[min(7.5vw,7.5vh)] font-semibold break-words absolute z-0"/>
      </div>
    </div>
  );
}
