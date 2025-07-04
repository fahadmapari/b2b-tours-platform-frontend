import SearchBlock from "@/components/dashboard/SearchBlock";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center flex-1">
      <SearchBlock />
      <div className="fixed w-full h-full top-0 left-0 -z-10 ">
        <Image
          alt="bg"
          src="/images/background.jpg"
          layout="fill"
          loading="lazy"
        />
      </div>
    </div>
  );
}
