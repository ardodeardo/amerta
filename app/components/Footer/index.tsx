import Image from "next/image";

function Footer() {
  return (
    <footer
      id="c-header"
      className="sticky top-0 md:top-2 left-0 z-50 md:mb-4 bg-white p-4 md:py-5 md:px-12 md:rounded-xl w-full md:max-w-[640px] mx-auto shadow-sm"
    >
      <div className="md:container mx-auto">
        <picture className="block w-fit mx-auto">
          <Image
            alt="amerta"
            src={"/image/common/amerta.png"}
            width={150 * 2}
            height={50 * 2}
            className="h-10 md:h-[50px] w-auto"
          ></Image>
        </picture>

        <p className="text-center text-[#123331]/50 text-[10px] leading-[160%] mt-4">
          Copyright © 2026. <br /> Amerta Fisioterapi & Wellness. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
