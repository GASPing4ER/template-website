import serviceImg1 from "@/public/imgs/service1.webp";
import serviceImg2 from "@/public/imgs/service2.webp";
import serviceImg3 from "@/public/imgs/service3.webp";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" max-w-[1024px] mx-auto">
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-24 border-b">
        <h1 className="text-4xl font-bold text-center">
          Website title goes here
        </h1>
        <p className="text-lg text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          beatae dolor vero, porro culpa animi omnis quos neque placeat esse
          molestias laborum.
        </p>
        <button className="px-4 py-2 bg-zinc-900 text-white rounded-md">
          Get Started
        </button>
      </div>
      <div className="max-h-screen flex items-center py-24 gap-10">
        <div className="flex flex-col items-center gap-6">
          <Image src={serviceImg1} alt="service image one" className="w-96" />
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-2xl font-light">BRANDING</h2>
            <p className="text-lg font-light">Branding & Packaging</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <Image src={serviceImg2} alt="service image two" className="w-96" />
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-2xl font-light">DIGITAL</h2>
            <p className="text-lg font-light">Digital Design & eCommerce</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <Image src={serviceImg3} alt="service image three" className="w-96" />
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-2xl font-light">PRODUCTION</h2>
            <p className="text-lg font-light">Photography & Videography</p>
          </div>
        </div>
      </div>
    </main>
  );
}
