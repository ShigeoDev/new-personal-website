import { div } from 'motion/react-client';
import TitleLine from './titleline';

export default function TitleBox() {
  return (

    <div className='absolute left-1/2 top-1/2 transform -translate-x-[160%] -translate-y-[120%] w-[min(30vw,30vh)] h-[min(30vw,30vh)]'>
      <div className="relative px-4 pt-6 w-full h-full">
        <p className="text-[min(6vw,6vh)] w-full h-full left-0 top-0 font-bold absolute z-0">HELLO</p>

        <TitleLine className="absolute bottom-0 left-0 w-full h-auto z-0" />
        <p className="text-[min(3vw,3vh)] w-[min(21vw,21vh)] h-full left-0 top-[min(7.5vw,7.5vh)] font-bold break-words absolute z-0">hello</p>
      </div>
    </div>
  );
}
