import Hero from "./hero";
import Method from "./method";
import About from "./about";
import Service from "./service";
import Testimony from "./testimony";
import Callback from "./callback";
import Pain from "./pain";
import HomeCare from "./home-care";
import Gallery from "./gallery";
import FAQ from "./faq";

function Page() {
  return (
    <>
      <Hero></Hero>
      <Service></Service>
      <Pain></Pain>
      <About></About>
      <Method></Method>
      <HomeCare></HomeCare>
      <Gallery
        subtitle={<>GALERI AMERTA</>}
        title={<>Ruang nyaman untuk pemulihan</>}
        images={["Ruang Terapi", "Ruang Latihan", "Front Desk", "Front Clinic"]}
      ></Gallery>
      <Gallery
        subtitle={<>GALERI AMERTA</>}
        title={<>Penanganan Professional</>}
        images={[
          "Sports Recovery",
          "Senior Mobility",
          "Senior Mobility",
          "Ultra Sound",
          "Manual Terapi",
          "Stretching",
          "Tens",
          "Dry Needling",
          "Infrared Light",
        ]}
      ></Gallery>
      <FAQ></FAQ>
      <Testimony></Testimony>
      <Callback></Callback>
    </>
  );
}

export default Page;
