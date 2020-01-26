export const CREATE_NEW_CARD = "CREATE_NEW_CARD";
export const createNewCard = (url, start, end, nickname) => ({
  type: CREATE_NEW_CARD,
  url,
  start,
  end,
  nickname
});
