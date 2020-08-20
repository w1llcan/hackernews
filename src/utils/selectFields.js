// the "} = {}" means that there are no empty fiels / not null
export const selectFields = ({ id, by, url, time, title } = {}) => ({
  id,
  by,
  url,
  time,
  title,
});
