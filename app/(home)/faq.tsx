import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  return (
    <section id="faq" className="-mt-16 md:mt-0">
      <div className="md:container mx-auto">
        <div className="relative z-10 px-4 md:px-12 py-10 pb-25 md:py-16 space-y-8 bg-[#123331] rounded-t-[24px] md:rounded-xl">
          <div className="space-y-4">
            <h2 className="text-white font-bold text-[28px] md:text-[40px] leading-[130%] text-center">
              FAQ
            </h2>

            <Accordion defaultValue={["item-1"]}>
              {[
                {
                  value: "item-1",
                  trigger: "Apakah harus reservasi terlebih dahulu?",
                  content:
                    "Ya. Untuk memastikan ketersediaan jadwal fisioterapis, pasien disarankan melakukan reservasi terlebih dahulu melalui WhatsApp. Reservasi dikonfirmasi setelah pembayaran DP sebesar Rp100.000.",
                },
                {
                  value: "item-2",
                  trigger: "Berapa lama satu sesi fisioterapi?",
                  content:
                    "Durasi satu sesi fisioterapi di Amerta sekitar 45-60 menit, disesuaikan dengan kondisi, kebutuhan, dan program terapi setiap pasien.",
                },
                {
                  value: "item-3",
                  trigger: "Keluhan apa saja yang dapat ditangani di Amerta?",
                  content:
                    "Amerta melayani berbagai keluhan yang berkaitan dengan nyeri, keterbatasan gerak, cedera, dan kebutuhan rehabilitasi, termasuk nyeri leher, bahu, punggung, pinggang, lutut, nyeri otot & sendi, saraf terjepit, cedera olahraga, serta gangguan mobilitas.",
                },
                {
                  value: "item-4",
                  trigger: "Apakah Amerta menerima pasien lansia?",
                  content:
                    "Ya. Amerta memiliki layanan Senior Mobility untuk membantu lansia meningkatkan kekuatan, keseimbangan, mobilitas, dan kemampuan melakukan aktivitas sehari-hari.",
                },
                {
                  value: "item-5",
                  trigger: "Apakah tersedia Home Care?",
                  content:
                    "Ya. Amerta menyediakan Home Care Fisioterapi, yaitu layanan fisioterapi yang dilakukan langsung di rumah bagi pasien yang membutuhkan karena keterbatasan mobilitas atau kondisi tertentu.",
                },
                {
                  value: "item-6",
                  trigger: "Bagaimana cara melakukan reservasi?",
                  content:
                    "Reservasi dapat dilakukan melalui WhatsApp Amerta. Sampaikan nama, keluhan, serta pilihan waktu yang diinginkan. Admin akan membantu memberikan informasi jadwal yang tersedia dan proses reservasi.",
                },
                {
                  value: "item-7",
                  trigger: "Apakah bisa langsung datang tanpa reservasi?",
                  content:
                    "Sebaiknya melakukan reservasi terlebih dahulu agar jadwal fisioterapis dapat dipastikan. Ketersediaan layanan untuk pasien tanpa reservasi bergantung pada jadwal yang tersedia.",
                },
                {
                  value: "item-8",
                  trigger: "Apakah fisioterapi hanya menggunakan alat?",
                  content:
                    "Tidak. Program fisioterapi disesuaikan dengan kondisi dan kebutuhan pasien, dan dapat mencakup Assessment, Terapi Menggunakan Alat Modalitas/Manual Terapi/Dry Needling, Latihan Teraupeutik Terarah, Serta Edukasi Atau Home Program sesuai hasil pemeriksaan.",
                },
              ].map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="text-white/85 text-base">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/75 text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
