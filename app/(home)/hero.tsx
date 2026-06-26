import Link from "next/link";
import Image from "next/image";

import { Activity } from "lucide-react";

import { WA_ME } from "../constants/whatsapp";

function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto relative overflow-hidden md:rounded-xl">
        <picture className="block absolute top-0 left-0 w-full h-full z-0">
          <Image
            alt="amerta"
            src={"/image/hero/hero--mobile.jpg"}
            width={393 * 2}
            height={452 * 2}
            className="image--mobile w-full h-full object-cover md:hidden"
          ></Image>
          <Image
            alt="amerta"
            src={"/image/hero/hero--desktop.jpg"}
            width={640 * 2}
            height={548 * 2}
            className="image--desktop w-full h-full object-cover hidden md:block"
          ></Image>
        </picture>
        <div className="absolute top-0 left-0 w-full h-full bg-black/25 z-10"></div>

        <div className="relative z-10 md:px-12 pt-16 pb-32 md:py-16 md:rounded-xl space-y-8">
          <div className="space-y-4">
            <span className="rounded-full border border-[#0B6F68]/12 w-fit p-[10px] px-3 flex items-center justify-between gap-[6px] bg-[#E7F4F0] text-xs font-bold text-[#123331]">
              <Activity size={12}></Activity>{" "}
              <span>Fisioterapi & Rehabilitasi</span>
            </span>

            <h1 className="text-white font-bold text-[36px] md:text-[48px] leading-[130%]">
              Pulih lebih nyaman, bergerak lebih percaya diri.
            </h1>

            <p className="text-white text-base md:text-lg leading-[160%]">
              Pendampingan fisioterapi personal untuk membantu mengurangi nyeri,
              memulihkan gerak, dan mendukung <br className="hidden md:block" />{" "}
              aktivitas sehari-hari.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={WA_ME}
              target="_blank"
              className="flex items-center gap-2 bg-[#0B6F68] px-3 md:px-4 py-2 md:py-3 text-white font-semibold rounded-full text-sm md:text-base"
            >
              <Image
                src={"image/icon/icon-whatsapp.svg"}
                alt="amerta"
                width={20 * 2}
                height={20 * 2}
                className="size-4 md:size-5"
              ></Image>{" "}
              Buat Janji Konsultasi
            </Link>

            <Link
              href={"#services"}
              className="flex items-center gap-2 bg-white px-3 md:px-4 py-2 md:py-3 text-[#0B6F68] font-semibold rounded-full text-sm md:text-base"
            >
              Lihat Layanan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
