export function postsFilter(posts, search) {
  const searchFilter = (post) =>
    [
      post.title,
      post.summary,
      post.user.name[0].firstName,
      post.user.name[1].lastName,
      post.meta.tags.map((t) => t).join(""),
    ]
      .join("")
      .toLowerCase()
      .indexOf(search.toLowerCase()) !== -1;

  const filteredPosts = posts?.filter(searchFilter);

  return { filteredPosts };
}
