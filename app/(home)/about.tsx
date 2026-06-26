import Image from "next/image";

function About() {
  return (
    <section id="about" className="-mt-16 md:mt-0">
      <div className="md:container mx-auto">
        <div className="relative z-10 px-12 md:px-12 pt-10 pb-25 md:py-16 rounded-t-[24px] rounded-b-none md:rounded-xl space-y-8 bg-gradient-to-b from-[#F3F8F6] to-[#EAF5F1] border-x border-t md:border border-[#123331]/12">
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

          <div className="grid md:grid-cols-[240px_1fr] gap-4 items-center">
            <picture className="block md:w-[240] h-auto bg-[#ebebeb] rounded-xl overflow-hidden">
              <Image
                alt="amerta"
                src={"/image/about/about--mobile.jpg"}
                width={280 * 2}
                height={280 * 2}
                className="image--mobile w-full h-full object-cover md:hidden rounded-xl"
              ></Image>
              <Image
                alt="amerta"
                src={"/image/about/about--desktop.jpg"}
                width={240 * 2}
                height={320 * 2}
                className="image--desktop w-full h-full object-cover hidden md:block rounded-xl"
              ></Image>
            </picture>

            <div>
              <p className="text-[#123331] text-base md:text-lg leading-[160%]">
                Berpengalaman lebih dari 5 tahun di bidang fisioterapi, Amelia
                Hesti Cahyani memberikan penanganan yang personal sesuai
                kebutuhan setiap pasien.
                <br />
                <br />
                Didukung kompetensi Dry Needling, Manual Therapy, dan
                Electrotherapy untuk membantu proses pemulihan yang optimal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
