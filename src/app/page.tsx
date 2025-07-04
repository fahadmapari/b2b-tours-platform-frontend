import SearchBlock from "@/components/dashboard/SearchBlock";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center flex-1">
      <span className="text-6xl p-4 font-bold text-white/80 animate-pulse">
        LIVE . TRAVEL . EXPLORE
      </span>
      <div className="p-6 bg-white/20 backdrop-blur-xs rounded-3xl border border-gray-400/30">
        <SearchBlock />
      </div>
      {/* TODO: MAKE IMAGE BETTER LATER */}
      {/* <div className="fixed w-full h-full top-0 left-0 -z-10 ">
        <Image
          alt="bg"
          src="/images/background.jpg"
          layout="fill"
          loading="lazy"
        />
      </div> */}
      <div className="fixed -bottom-28 -right-12 -z-10">
        <Image
          alt="bg"
          src="/images/mountain.png"
          className="opacity-10 -scale-x-100 filter select-none pointer-events-none"
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
}
