export const dateFormatUTCToString = (date: Date) => {
  const aux = new Date(date);

  return aux.getHours() + "h";
};
