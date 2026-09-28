import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

import { slugify } from "../helper/text";

type Props = {
  subtitle: React.ReactNode;
  title: React.ReactNode;
  images: Array<string>;
};

function Gallery({ subtitle, title, images }: Props) {
  return (
    <section className="-mt-16 md:mt-0">
      <div className="md:container mx-auto">
        <div className="relative z-10 px-4 md:px-12 pt-10 pb-25 md:py-16 space-y-8 bg-white rounded-t-[24px] md:rounded-xl">
          <div className="text-center">
            <span className="text-[#0B6F68] font-extrabold text-xs">
              {subtitle}
            </span>

            <h2 className="text-[#123331] font-bold text-[28px] md:text-[40px] leading-[130%] mt-1">
              {title}
            </h2>

            {/* <p className="text-[#123331] text-base md:text-lg leading-[160%] mt-4">
              Kisah pemulihan dari para pasien kami.
            </p> */}
          </div>

          <div className="flex overflow-x-auto pb-4">
            {images.map((item, index) => {
              let img = slugify(item);

              if (index > 0) {
                if (images[index - 1] === item) {
                  img = `${img}-${index}`;
                }
              }

              return (
                <Fragment key={index}>
                  <div className="bg-[#F6FAF8] border border-[#154E48]/4 rounded-[24px] space-y-3 min-w-[300px] w-[300px] relative overflow-hidden">
                    <span className="rounded-full border border-[#0B6F68]/12 w-fit p-[10px] px-3 flex items-center justify-between gap-[6px] bg-[#E7F4F0]/75 backdrop-blur-sm text-sm font-bold text-[#123331] absolute top-4 left-4 z-10">
                      {item}
                    </span>

                    <Image
                      src={`/image/gallery/${img}.jpg`}
                      alt="amerta"
                      width={300 * 2}
                      height={300 * 2}
                      className="size-[102%] object-cover"
                    ></Image>
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

export default Gallery;
