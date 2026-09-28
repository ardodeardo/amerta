"use client";

import Image from "next/image";

import { useState } from "react";

import { ArrowDown, ArrowUp } from "lucide-react";

function About() {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <section id="about" className="-mt-16 md:mt-0">
      <div className="md:container mx-auto">
        <div className="relative z-10 px-4 md:px-12 pt-10 pb-25 md:py-16 rounded-t-[24px] rounded-b-none md:rounded-xl space-y-8 bg-gradient-to-b from-[#F3F8F6] to-[#EAF5F1] border-x border-t md:border border-[#123331]/12">
          <div className="text-center">
            <span className="text-[#0B6F68] font-extrabold text-xs">
              TENTANG FISIOTERAPIS
            </span>

            <h2 className="text-[#123331] font-bold text-[28px] md:text-[40px] leading-[130%] mt-1">
              Fisioterapis <br />
              yang mendampingi <br />
              pemulihan Anda.
            </h2>
          </div>

          <div className="space-y-4">
            <picture className="block size-75 mx-auto bg-[#ebebeb] rounded-xl overflow-hidden shadow-md">
              <Image
                alt="amerta"
                src={"/image/about/about--desktop.jpg"}
                width={300 * 2}
                height={300 * 2}
                className="image--desktop size-full object-cover rounded-xl"
              ></Image>
            </picture>

            <div className="space-y-4">
              <p className="text-[#123331] text-base md:text-lg leading-[160%] text-justify">
                <strong>Amelia Hesti Cahyani, S.Ft., Ftr.</strong> merupakan
                fisioterapis yang telah menjalankan praktik sejak 2020, dengan
                pengalaman klinis di{" "}
                <strong>beberapa rumah sakit dan klinik fisioterapi</strong>.
                Amelia memiliki pengalaman dalam menangani berbagai kondisi
                muskuloskeletal, cedera olahraga, geriatri, serta rehabilitasi
                pascaoperasi maupun nonoperasi.
              </p>

              {!expand && (
                <button
                  type="button"
                  onClick={() => setExpand(true)}
                  className="flex gap-1 items-center justify-center text-base font-semibold underline underline-offset-4 w-fit mx-auto"
                >
                  Baca Lebih Lanjut <ArrowDown size={24}></ArrowDown>
                </button>
              )}

              {expand && (
                <div className="space-y-4">
                  <p className="text-[#123331] text-base md:text-lg leading-[160%] text-justify">
                    Amelia mendampingi pasien dalam proses pemulihan dari
                    berbagai keluhan nyeri, cedera, keterbatasan gerak, dan
                    kebutuhan rehabilitasi.
                  </p>
                  <p className="text-[#123331] text-base md:text-lg leading-[160%] text-justify">
                    Dalam praktiknya, Amelia terus mengembangkan kompetensi
                    melalui berbagai pelatihan dan sertifikasi, termasuk
                    <strong>
                      Advanced Dry Needling, Upper & Lower Limb Manual Therapy,
                      Geriatric Physiotherapy, Advanced Post-Operative
                      Rehabilitation, Non-Operative Rehabilitation, dan Sports
                      Injury Rehabilitation. Amelia juga memiliki pengalaman
                      sebagai Fisioterapis Tim Soft Tennis pada tahun 2023.
                    </strong>
                  </p>
                  <p className="text-[#123331] text-base md:text-lg leading-[160%] text-justify">
                    Setiap program fisioterapi disesuaikan dengan kondisi,
                    kebutuhan, dan tujuan aktivitas masing-masing pasien, dengan
                    fokus membantu pasien pulih secara bertahap dan kembali
                    beraktivitas dengan lebih nyaman.
                  </p>
                </div>
              )}

              {expand && (
                <button
                  type="button"
                  onClick={() => setExpand(false)}
                  className="flex gap-1 items-center justify-center text-base font-semibold underline-offset-4 w-fit mx-auto"
                >
                  Tampilkan lebih sedikit <ArrowUp size={24}></ArrowUp>
                </button>
              )}
            </div>
          </div>

          <div className="border border-[#0B6F68]/24 bg-white rounded-xl py-4 px-3 space-y-3">
            <p className="text-[#123331] text-base font-bold leading-[160%] text-center">
              Kompetensi & Pendekatan
            </p>

            <div className="h-px border-b border-[#0B6F68]/24"></div>

            <p className="text-[#123331] text-base font-normal leading-[160%] text-center">
              • Clinical Assessment • Manual Therapy • Exercise-Based
              Rehabilitation • Dry Needling • Movement Rehabilitation •
              Individualized Care
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
