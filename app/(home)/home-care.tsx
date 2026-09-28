import Link from "next/link";
import Image from "next/image";

import { Activity } from "lucide-react";

import { WA_ME } from "../constants/whatsapp";

function HomeCare() {
  return (
    <section id="home-care">
      <div className="container mx-auto relative overflow-hidden md:rounded-xl">
        <picture className="block absolute top-0 left-0 w-full h-full z-0">
          <Image
            alt="amerta"
            src={"/image/home-care/home-care--mobile.jpg"}
            width={393 * 2}
            height={452 * 2}
            className="image--mobile w-full h-full object-cover md:hidden"
          ></Image>
          <Image
            alt="amerta"
            src={"/image/home-care/home-care--desktop.jpg"}
            width={640 * 2}
            height={548 * 2}
            className="image--desktop w-full h-full object-cover hidden md:block"
          ></Image>
        </picture>
        <div className="absolute top-0 left-0 w-full h-full bg-black/45 z-10"></div>

        <div className="relative z-10 md:px-12 pt-16 pb-32 md:py-16 md:rounded-xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-white font-normal text-[28px] md:text-[40px] leading-[130%]">
              Tidak bisa datang ke klinik?
            </h2>
            <h2 className="text-white font-bold text-[28px] md:text-[40px] leading-[130%]">
              Fisioterapi langsung di rumah Anda
            </h2>

            <p className="text-white/75 text-base md:text-lg leading-[160%]">
              Amerta Home Care memberikan pendampingan fisioterapi secara
              langsung di rumah bagi pasien yang membutuhkan karena keterbatasan
              mobilitas atau kondisi tertentu.
            </p>

            <Link
              href={WA_ME}
              target="_blank"
              className="flex items-center gap-2 bg-[#0B6F68] px-3 md:px-4 py-2 md:py-3 text-white font-semibold rounded-full text-sm md:text-base w-fit"
            >
              <Image
                src={"image/icon/icon-whatsapp.svg"}
                alt="amerta"
                width={20 * 2}
                height={20 * 2}
                className="size-4 md:size-5"
              ></Image>{" "}
              Reservasi Home Care
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCare;
