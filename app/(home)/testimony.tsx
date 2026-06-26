import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

import { MessageCircleHeart } from "lucide-react";

function Testimony() {
  return (
    <section id="method" className="-mt-16 md:mt-0">
      <div className="md:container mx-auto">
        <div className="relative z-10 px-4 md:px-12 pt-10 pb-25 md:py-16 space-y-8 bg-white rounded-t-[24px] md:rounded-xl">
          <div className="text-center">
            <span className="text-[#0B6F68] font-extrabold text-xs">
              CERITA PASIEN
            </span>

            <h2 className="text-[#123331] font-bold text-[28px] md:text-[40px] leading-[130%] mt-1">
              Setiap langkah <br />
              pemulihan memiliki <br />
              ceritanya.
            </h2>

            <p className="text-[#123331] text-base md:text-lg leading-[160%] mt-4">
              Kisah pemulihan dari para pasien kami.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-4">
            {(
              [
                {
                  title: <>Farah Azzahra</>,
                  description: (
                    <>
                      Best banget untuk terapi dan pelayanannya! ambil recovery
                      program untuk ankle dan lutut, alhamdulillah day by day
                      ada progress dan semakin membaik. Kakak fisioterapisnya
                      sangat komunikatif, penjelasan dan arahannya mudah untuk
                      dimengerti. Recommend buat yang pengen fisioterapi tapi
                      mau di rumah aja. Bintang 5 buat Amerta Fisioterapi😄🫶🏻
                    </>
                  ),
                },
                {
                  title: <>Jessica Vanessa</>,
                  description: (
                    <>
                      berawal dari cari fisio yg bisa datang ke rumah di daerah
                      Tangerang, ketemulah dengan Amerta Fisioterapi, papa saya
                      dibantu terapi oleh kak Lia yang berpengalaman, sabar, dan
                      sangat memberikan support, sudah 4x terapi dan saat ini
                      papa saya banyak perkembangannya untuk bisa berdiri dan
                      jalan kembali, terima kasih Amerta dan Kak Lia, semoga
                      sukses selalu... top banget Amerta Fisioterapi ...
                    </>
                  ),
                },
                {
                  title: <>Salwa Kamilah</>,
                  description: (
                    <>
                      Sangat membantu keluhan sakit pinggang saya yang sudah
                      lama sekitar 9 tahun dirasakan. Terapisnya baik, tepat
                      waktu dan komunikatif. Pertama cuman pesan yang 1x visit
                      karena mau cobain dulu, tapi akhirnya ambil yang paket 5x
                      visit. Selama 3 minggu terapi, sakit pinggang nya
                      berangsur membaik. Badan lebih terasa nyaman. Sangat
                      rekomen 🙌🏻❤️
                    </>
                  ),
                },
                {
                  title: <>Santri Supriani</>,
                  description: (
                    <>
                      Makasih banyak kak lia🤍🤍🤍 Baru pertama mama bilang
                      enak, dan ramahhh, amanah, untuk yang susah buat pergi2
                      ini rekomend banget karena kakanya bisa kerumah buat bantu
                      fisioterapi. Next time kita jadwalin lagi ya 🤍
                    </>
                  ),
                },
                {
                  title: <>Lina Apriani</>,
                  description: (
                    <>
                      Terima kasih Mba Lia sudah membantu kami untuk proses
                      penyembuhan ibu kami yang sedang stroke, Alhamdulillah ada
                      kemajuan dan Mba Lia pun orangnya sangat ramah, sehat
                      selalu untuk Mba Lia dan team Amerta Fisioterapi 😊🙏
                    </>
                  ),
                },
                {
                  title: <>Wiwin Windayanti</>,
                  description: (
                    <>
                      Sudah 4 x melakukan fisioterapi untuk orang tua saya pasca
                      stroke, alhamdulillah orang tua saya membaik dr awal tidak
                      bisa bangun dr tempat tidur sekarang sudah bisa bangun dan
                      beraktifitas seperti biasa walaupun sisa sisa stroke masih
                      ada. Tapi dari awal keluhan BAB tidak lancar pun langsung
                      lancar. Semoga dengan latihan dan saran yang di terapkan,
                      orang tua saya bisa pulih. AMIN Terima kasih kak lia yang
                      sudah membantu orang tua saya.
                    </>
                  ),
                },
                {
                  title: <>Risky Aprilia</>,
                  description: (
                    <>
                      pertama kali mamaku fisio sama mba lia, treatmentnya bagus
                      banget, alatnya mendukung, mbanya juga ramah.. pilih paket
                      3x visit supaya mama ku cpt sehat.. terimakasih mba lia..
                    </>
                  ),
                },
              ] as Array<{
                title: React.ReactNode;
                description: React.ReactNode; /*  */
              }>
            ).map((item, index) => {
              const { title, description } = item;

              return (
                <Fragment key={index}>
                  <div className="p-4 md:p-5 bg-[#F6FAF8] border border-[#154E48]/12 rounded-[24px] space-y-3 min-w-[300px] w-[300px]">
                    <span className="grid place-content-center bg-[#E7F4F0] size-10 rounded-lg">
                      <MessageCircleHeart></MessageCircleHeart>
                    </span>

                    <div className="space-y-1">
                      <h3 className="text-[#123331] text-base md:text-lg font-bold">
                        {title}
                      </h3>
                      <p className="text-[#123331] text-sm md:text-base leading-[160%]">
                        {description}
                      </p>
                    </div>

                    <div>
                      <Image
                        src={"image/icon/icon-stars.svg"}
                        alt="amerta"
                        width={116 * 2}
                        height={20 * 2}
                        className="h-5 md:h-6 w-auto"
                      ></Image>
                    </div>
                  </div>

                  <div className="min-w-3 w-3 md: md:min-w-4 md:w-4"></div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
