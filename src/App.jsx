import React, { useEffect, useState } from "react";
import { Skeleton, Post, postsFilter } from "@/components";
import { clsx } from "@/utils";
function App() {
  const [posts, setPosts] = useState();

  const POSTS_TO_SHOW = 6;
  const [maxDisplayLimit, setMaxDisplayLimit] = useState(POSTS_TO_SHOW);

  const [search, setSearch] = useState("");
  const { filteredPosts } = postsFilter(posts, search);
  useEffect(() => {
    async function fetchPosts() {
      await fetch("../posts.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setPosts(data);
        })
        .catch((err) => {
          console.error(
            "There has been a problem with your fetch operation:",
            err
          );
        });
    }
    fetchPosts();
  }, []);
  const handleClick = () => {
    setMaxDisplayLimit(() => maxDisplayLimit + POSTS_TO_SHOW);
  };
  return (
    <div className="m-5 lg:container lg:mx-auto xl:max-w-[80%] flex flex-col items-center my-12 gap-10">
      <h1 className="text-4xl lg:text-5xl font-black text-gray-700">
        Recent Blog Posts
      </h1>
      <label
        className="shadow-boxs-sm lg:text-xl py-5 px-7 bg-white rounded-2xl"
        htmlFor="search"
      >
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none"
          type="search"
          id="search"
          autoComplete="off"
          spellCheck="false"
          placeholder="Enter a search term"
        />
      </label>
      <div className="grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts ? (
          filteredPosts
            .slice(0, maxDisplayLimit)
            .map((post, i) => <Post key={i} post={post} />)
        ) : (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
      </div>
      <button
        onClick={handleClick}
        className={clsx(
          "self-start px-6 py-3 rounded-md  shadow-boxs-sm w-max",
          "bg-primary/50 text-accent2 text-xl tracking-widest",
          "hover:shadow-none hover:bg-primary transition-all "
        )}
      >
        View More Posts
      </button>
    </div>
  );
}

export default App;
