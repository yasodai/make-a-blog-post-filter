import React from "react";
import { returnPostDate } from "@/utils";
export function Post({ post }) {
  return (
    <article className="shadow-boxs-lg rounded-2xl bg-white py-7 lg:py-9 flex flex-col gap-4 lg:gap-7">
      <div className="space-y-2 px-7 lg:px-9">
        <div className="flex flex-wrap gap-1.5">
          {post?.meta?.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary text-bkg px-1.5 py-1 rounded-md font-extralight text-xs lg:text-[15px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="uppercase text-sm lg:text-[15px] font-medium">
          {returnPostDate(new Date(post?.meta?.date))}
        </p>
      </div>
      <h3 className="text-lg lg:text-2xl leading-tight bg-accent2 px-7 lg:px-9 py-5 lg:py-7 text-text font-bold">
        <a href={post?.meta.url}>{post?.title}</a>
      </h3>
      <div className="flex gap-8 px-7 lg:px-9">
        <img
          className="rounded-full shadow-boxs-sm"
          width="55"
          src={post?.user.avatar}
          alt={`${post?.user.name[0].firstName} ${post?.user.name[1].lastName}`}
        />
        <div>
          <p className="font-bold text-lg text-text">{`${post?.user.name[0].firstName} ${post?.user.name[1].lastName}`}</p>
          <p className="text-accent1  ">
            <small>{post?.user.jobTitle}</small>
          </p>
        </div>
      </div>
      <p className="px-7 lg:px-9 text-sm lg:text-lg  text-text">
        {post?.summary.substring(0, 200)}...
      </p>
      <a
        href={post?.meta.url}
        className=" mx-7 lg:mx-9 tracking-widest text-base lg:text-xl  rounded-md bg-primary/90 text-accent2 px-6  py-1.5 lg:py-2.5 shadow-boxs-sm w-max hover:shadow-none hover:bg-primary transition-all "
      >
        Read Post
      </a>
    </article>
  );
}
