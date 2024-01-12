/**
 * this function assumes
 * all url protocols use
 * https therefore, prefixes
 * the urls it receives with 
 * https provided they already
 * don't have the prefix
 */
const prefixProtocol = (url: string) => {
  if (url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
};

export {
  prefixProtocol
};