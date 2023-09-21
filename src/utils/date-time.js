export const getDate = (date) => {
  const newDate = new Date(parseInt(date)).toDateString().split(' ');
  return {
    day: newDate[2],
    month: newDate[1],
    date: `${newDate[2]}, ${newDate[1]}`,
  };
};

export const getTime = (time) => {
  const tArr = time.split(':');
  const isPM = +tArr[0] > 12;
  return (isPM ? +tArr[0] % 12 : +tArr[0]).toString() + ':' + tArr[1] + (isPM ? 'PM' : 'AM');
};

export const diffTime = (start, end) => {
  return (+end.split(':')[0] - +start.split(':')[0]).toString() + 'h';
};
