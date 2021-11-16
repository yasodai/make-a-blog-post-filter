import React from "react";

export function Skeleton() {
  return (
    <article className="bg-white py-7 lg:py-9 flex flex-col gap-4 lg:gap-7">
      <div className="space-y-2 px-7 lg:px-9">
        <div className="flex flex-wrap gap-1.5">
          <span className="skeleton h-5 w-16"></span>
          <span className="skeleton h-5 w-16"></span>
        </div>
        <p className="skeleton h-6 w-36"></p>
      </div>
      <h3 className="skeleton rounded-none min-h-[65px] min-w-[400px] sm:min-w-[650px] lg:w-full">
        <a href="#"></a>
      </h3>
      <div className="flex gap-8 px-7 lg:px-9">
        <div className="skeleton !rounded-full w-14"></div>
        <div>
          <p className="skeleton h-6 w-36 mb-2.5"></p>
          <p className="skeleton h-5 w-16"></p>
        </div>
      </div>
      <div className="px-7 lg:px-9 space-y-2.5">
        <p className="skeleton min-h-[18px]"></p>
        <p className="skeleton min-h-[18px]"></p>
        <p className="skeleton min-h-[18px]"></p>
        <p className="skeleton min-h-[18px]"></p>
        <p className="skeleton min-h-[18px] w-[60%]"></p>
      </div>
      <a
        href="#"
        className="skeleton mx-7 lg:mx-9 tracking-widest text-base lg:text-xl  rounded-md bg-accent1/20 text-accent2 px-6  py-1.5 lg:py-2.5 shadow-boxs-sm w-max hover:shadow-none hover:bg-primary transition-all "
      ></a>
    </article>
  );
}
