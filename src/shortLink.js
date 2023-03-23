import shortid from 'shortid';

export function createShortLink() {
  const shortLink = shortid.generate();
  return shortLink;
}