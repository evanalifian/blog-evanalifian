export function getSlug(text) {
  const chars = [
    "`",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    "'",
    '"',
    ",",
    ".",
    "<",
    ">",
    "/",
    "?",
    "\\",
    "|",
  ];
  let slug = text.trim().toLowerCase();

  chars.forEach((char) => {
    slug = slug.replaceAll(char, "");
  });

  return slug.replaceAll(" ", "-");
}
