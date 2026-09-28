import Image from "next/image";
import Link from "next/link";

import { Clock, MapPin, ArrowUpRight } from "lucide-react";

import { WA_ME } from "../constants/whatsapp";

function Callback() {
  return (
    <section id="callback" className="-mt-16 md:mt-0">
      <div className="md:container mx-auto">
        <div className="relative z-10 px-4 md:px-12 py-10 md:py-16 space-y-8 bg-[#123331] rounded-t-[24px] md:rounded-xl">
          <div className="space-y-4">
            <h2 className="text-white font-bold text-[28px] md:text-[40px] leading-[130%]">
              Siap kembali beraktivitas dengan lebih nyaman?
            </h2>

            <p className="text-white/75 text-base md:text-lg leading-[160%]">
              Konsultasikan keluhan dan kebutuhan{" "}
              <br className="hidden md:block" /> fisioterapi Anda bersama
              Amerta.
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
              Reservasi Fisioterapi
            </Link>
          </div>

          <div className="space-y-5">
            <div className="flex gap-2 items-center">
              <Clock size={18} className="text-white"></Clock>
              <p className="text-white/80 text-sm md:text-base leading-[160%] font-semibold">
                Senin - Minggu (Kamis libur) 10.00 - 19.00
              </p>
            </div>

            <a
              target="_blank"
              className="flex gap-2 items-start"
              href="https://maps.app.goo.gl/uFWeojaBcU7NezkX6"
            >
              <MapPin size={18} className="text-white mt-1"></MapPin>
              <p className="text-white/80 text-sm md:text-base leading-[160%] font-semibold">
                Jl. Moh. Toha Km 3.8, Kel. Periuk Jaya, <br />
                Kec. Periuk, Kota Tangerang <br />
                <span className="underline underline-offset-4 font-medium flex items-center gap-1">
                  <span>Open Google Map</span>
                  <ArrowUpRight
                    size={20}
                    className="size-4 md:size-5"
                  ></ArrowUpRight>
                </span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Callback;
