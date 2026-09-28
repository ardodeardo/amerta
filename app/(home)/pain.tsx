import Link from "next/link";
import Image from "next/image";

import { WA_ME } from "../constants/whatsapp";
import { slugify } from "../helper/text";

function Pain() {
  return (
    <section id="pains" className="-mt-16 md:mt-0">
      <div className="md:container mx-auto">
        <div className="relative z-10 px-4 md:px-12 pt-10 pb-25 md:py-16 space-y-8 bg-[#EAF5F1] rounded-t-[24px] rounded-b-none md:rounded-xl border-x border-t md:border border-[#123331]/12">
          <div className="text-center">
            <span className="text-[#0B6F68] font-extrabold text-xs">
              KELUHAN YANG DAPAT KAMI BANTU
            </span>

            <h2 className="text-[#123331] font-bold text-[28px] md:text-[40px] leading-[130%] mt-1">
              Berbagai keluhan yang dapat ditangani melalui pendekatan
              fisioterapi sesuai kondisi dan kebutuhan Anda.
            </h2>

            {/* <p className="text-[#123331] text-base md:text-lg leading-[160%] mt-4">
              Membantu mengurangi nyeri, memulihkan gerak,{" "}
              <br className="hidden md:block" />
              dan mendukung aktivitas sehari-hari.
            </p> */}
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {(
              [
                "Nyeri Leher",
                "Nyeri Bahu",
                "Nyeri Punggung & Pinggang",
                "Nyeri Lutut",
                "Nyeri Otot & Sendi",
                "Saraf Kejepit",
                "Cedera Olahraga",
                "Gangguan Mobilitas",
              ] as Array<string>
            ).map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-4 md:p-5 rounded-[24px] space-y-3 bg-white grid place-content-center border border-[#0B6F68]/12"
                >
                  <Image
                    alt={item}
                    src={`/image/pain/${slugify(item)}.svg`}
                    width={100}
                    height={100}
                    className="mx-auto"
                  ></Image>

                  <h3 className="text-[#123331] text-base md:text-xl font-bold text-center">
                    {item}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="space-y-3">
            <p className="text-[#123331] text-base md:text-lg leading-[160%] text-center">
              Konsultasikan keluhan Anda
            </p>

            <Link
              href={WA_ME}
              target="_blank"
              className="flex items-center gap-2 bg-[#0B6F68] px-3 md:px-4 py-2 md:py-3 text-white font-semibold rounded-full text-base w-fit mx-auto"
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
        </div>
      </div>
    </section>
  );
}

export default Pain;
