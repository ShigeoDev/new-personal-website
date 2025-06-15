import Link from "next/link";

export default function Star({className, width = 100, height = 100}: {className?: string, width?: number, height?: number}) {


  return (
    <svg className={className} width={width + "%"} height={height + "%"} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <Link href="/test">
      <path d="
        M50,5
        C55,45 55,45 95,50
        C55,55 55,55 50,95
        C45,55 45,55 5,50
        C45,45 45,45 50,5
      
        Z"
        fill="white" stroke="white" strokeWidth="0" className="pointer-events-auto" />
        </Link>
    </svg>
  );

}
