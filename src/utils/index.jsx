export const returnPostDate = (date) =>
  `${
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

export function clsx(...str) {
  return str.filter(Boolean).join(" ");
}
