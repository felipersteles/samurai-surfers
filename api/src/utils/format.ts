export const formatDate = (date: Date) => {
  // 2023-09-02T00:00:00+00:00

  const aux = new Date(date);

  return `${aux.getFullYear()}-${aux.getMonth() + 1}-${aux.getDate()}`;
};
