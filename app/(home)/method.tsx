function Method() {
  return (
    <section id="method" className="-mt-16 md:mt-0">
      <div className="md:container mx-auto">
        <div className="relative z-10 px-4 md:px-12 pt-10 pb-25 md:py-16 space-y-8 bg-white rounded-t-[24px] md:rounded-xl">
          <div className="text-center">
            <span className="text-[#0B6F68] font-extrabold text-xs">
              PROSES FISIOTERAPI
            </span>

            <h2 className="text-[#123331] font-bold text-[28px] md:text-[40px] leading-[130%] mt-1">
              Bagaimana proses fisioterapi di Amerta?
            </h2>

            <p className="text-[#123331] text-base md:text-lg leading-[160%] mt-4">
              Pendekatan yang sederhana, terarah, <br />
              dan sesuai kebutuhan Anda.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {(
              [
                {
                  title: <>Reservasi</>,
                  description: (
                    <>Hubungi Amerta melalui WhatsApp dan tentukan jadwal.</>
                  ),
                },
                {
                  title: <>Assessment</>,
                  description: (
                    <>
                      Fisioterapis memahami keluhan dan melakukan pemeriksaan.
                    </>
                  ),
                },
                {
                  title: <>Treatment</>,
                  description: (
                    <>
                      Pendekatan terapi disesuaikan dengan kondisi dan kebutuhan
                      pasien.
                    </>
                  ),
                },
                {
                  title: <>Progress</>,
                  description: (
                    <>Perkembangan dievaluasi dan program disesuaikan.</>
                  ),
                },
              ] as Array<{
                title: React.ReactNode;
                description: React.ReactNode; /*  */
              }>
            ).map((item, index) => {
              const { title, description } = item;

              return (
                <div
                  key={index}
                  className="p-4 md:p-5 border border-[#0B6F68]/12 rounded-[24px] space-y-3"
                >
                  <span className="block text-base md:text-xl font-bold text-[#0B6F68]">
                    0{index + 1}
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

export default Method;
