import Image from "next/image";
import Link from "next/link";

import { Clock, MapPin } from "lucide-react";

import { WA_ME } from "../constants/whatsapp";

function Callback() {
  return (
    <section id="callback" className="-mt-16 md:mt-0">
      <div className="md:container mx-auto">
        <div className="relative z-10 px-4 md:px-12 py-10 md:py-16 space-y-8 bg-[#123331] rounded-t-[24px] md:rounded-xl">
          <div className="space-y-4">
            <h2 className="text-white font-bold text-[28px] md:text-[40px] leading-[130%]">
              Siap untuk bergerak <br />
              lebih nyaman?
            </h2>

            <p className="text-white/75 text-base md:text-lg leading-[160%]">
              Mulai dengan sesi konsultasi dan temukan <br />
              penanganan yang tepat untuk Anda.
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
              Buat Janji Sekarang
            </Link>
          </div>

          <div className="space-y-5">
            <div className="flex gap-2 items-center">
              <Clock size={18} className="text-white"></Clock>
              <p className="text-white/80 text-sm md:text-base leading-[160%] font-semibold">
                Senin - Jumat, 08:00 - 17:00
              </p>
            </div>

            <Link
              target="_blank"
              href="https://maps.app.goo.gl/v3VfJCFmvsL9fnNU6"
              className="flex gap-2 items-start"
            >
              <MapPin size={18} className="text-white mt-1"></MapPin>
              <p className="text-white/80 text-sm md:text-base leading-[160%] font-semibold">
                Jl. Makmur Jl. Bahagia 1 No.2 Blok B10,
                <br /> RT.006/RW.003, Gebang Raya, Kec. Periuk,
                <br /> Kota Tangerang, Banten 15132
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Callback;
