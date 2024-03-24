export function textShortener(text: string, length: number) {
  const shortenedText = text.split(" ").slice(0, length).join(" ");
  return shortenedText + (text.split(" ").length > length ? " ..." : "");
}
