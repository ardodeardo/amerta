import Link from "next/link";
import Image from "next/image";

import { WA_ME } from "@/app/constants/whatsapp";

function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 md:top-2 left-0 z-50 md:mt-4 bg-white p-4 md:py-5 md:px-12 md:rounded-xl w-full md:max-w-[640px] mx-auto shadow-sm"
    >
      <div className="md:container mx-auto">
        <div className="flex justify-between items-center">
          <picture className="block">
            <Image
              alt="amerta"
              src={"/image/common/amerta.png"}
              width={150 * 2}
              height={50 * 2}
              className="h-10 md:h-[50px] w-auto"
            ></Image>
          </picture>

          <Link
            href={WA_ME}
            target="_blank"
            className="flex items-center gap-2 bg-[#0B6F68] px-3 md:px-4 py-2 md:py-3 text-white font-semibold rounded-full text-sm"
          >
            <Image
              src={"image/icon/icon-whatsapp.svg"}
              alt="amerta"
              width={20 * 2}
              height={20 * 2}
              className="size-4 md:size-5"
            ></Image>{" "}
            Buat Janji Konsultasi
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
