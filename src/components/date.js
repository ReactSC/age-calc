const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = date => {
  const d = date.getDate()
  return d + (d > 0 ? ['th', 'st', 'nd', 'rd'][(d > 3 && d < 21) || d % 10 > 3 ? 0 : d % 10] : '');
};
const day = date => days[date.getDay()];
const month = date => months[date.getMonth()];
const year = date => date.getFullYear();

export { date, day, month, year }