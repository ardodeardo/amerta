import React from "react";

import { HandHeart, House, SportShoe, Baby } from "lucide-react";

function Service() {
  return (
    <section id="services" className="-mt-16 md:mt-0">
      <div className="md:container mx-auto">
        <div className="relative z-10 px-4 md:px-12 pt-10 pb-25 md:py-16 space-y-8 bg-[#EAF5F1] rounded-t-[24px] rounded-b-none md:rounded-xl border-x border-t md:border border-[#123331]/12">
          <div className="text-center">
            <span className="text-[#0B6F68] font-extrabold text-xs">
              LAYANAN FISIOTERAPI
            </span>

            <h2 className="text-[#123331] font-bold text-[28px] md:text-[40px] leading-[130%] mt-1">
              Pilih layanan yang <br />
              disesuaikan dengan <br />
              kebutuhan Anda.
            </h2>

            <p className="text-[#123331] text-base md:text-lg leading-[160%] mt-4">
              Membantu mengurangi nyeri, memulihkan gerak,{" "}
              <br className="hidden md:block" />
              dan mendukung aktivitas sehari-hari.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {(
              [
                {
                  icon: (
                    <>
                      <HandHeart size={24}></HandHeart>
                    </>
                  ),
                  title: <>Fisioterapi</>,
                  description: (
                    <>Penanganan nyeri, cedera, dan keterbatasan gerak.</>
                  ),
                },
                {
                  icon: (
                    <>
                      <House size={24}></House>
                    </>
                  ),
                  title: <>Home Treatment</>,
                  description: (
                    <>
                      Perawatan fisioterapi profesional tanpa perlu keluar
                      rumah.
                    </>
                  ),
                },
                {
                  icon: (
                    <>
                      <SportShoe size={24}></SportShoe>
                    </>
                  ),
                  title: <>Sport Massage</>,
                  description: (
                    <>Membantu pemulihan otot dan menjaga performa aktivitas.</>
                  ),
                },
                {
                  icon: (
                    <>
                      <Baby size={24}></Baby>
                    </>
                  ),
                  title: <>Baby & Kids Treatment</>,
                  description: (
                    <>Terapi yang mendukung perkembangan motorik anak.</>
                  ),
                },
              ] as Array<{
                icon: React.ReactNode;
                title: React.ReactNode;
                description: React.ReactNode; /*  */
              }>
            ).map((item, index) => {
              const { icon, title, description } = item;

              return (
                <div
                  key={index}
                  className="p-4 md:p-5 rounded-[24px] space-y-3 bg-white"
                >
                  <span className="grid place-content-center bg-[#E7F4F0] size-10 rounded-lg">
                    {icon}
                  </span>

                  <div className="space-y-1">
                    <h3 className="text-[#123331] text-base md:text-lg font-bold">
                      {title}
                    </h3>
                    <p className="text-[#123331] text-sm md:text-base leading-[160%]">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
