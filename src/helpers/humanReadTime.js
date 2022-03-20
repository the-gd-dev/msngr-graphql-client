export default function (date) {
  //helpers
  const getCurrentTimeInSeconds = () => Math.floor(new Date() / 1000);

  //variables
  var ct = getCurrentTimeInSeconds(); // in seconds
  let s = Math.floor(date / 1000);
  let seconds = Math.floor(ct - s);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(months / 12);
  let decades = Math.floor(years / 10);
  let centuries = Math.floor(decades / 10);

  //conditional calling of functions
  if (seconds < 60) return secondsHumanRead(seconds);
  else if (minutes < 60) return minutesHumanRead(minutes);
  else if (hours < 24) return hoursHumanRead(hours);
  else if (days < 30) return daysHumanRead(days);
  else if (months < 12) return monthsHumanRead(days);
  else if (years === 1) return years + "year ago";
  else return years + " Years ago.";
}
function monthsHumanRead(months) {
  if (months < 2) return "one months ago";
  else if (months < 3) return "two months ago";
  else if (months < 4) return "three months ago";
  else if (months < 12) return months + " months ago";
  else return "a year ago";
}
function daysHumanRead(days) {
  if (days < 2) return "one day ago";
  else if (days < 3) return "two days ago";
  else if (days < 4) return "three days ago";
  else if (days < 30) return days + " days ago";
  else return "about a month ago";
}
function hoursHumanRead(hours) {
  if (hours < 2) return "a hour ago";
  else if (hours < 5) return "few hours ago";
  else if (hours < 12) return hours + " hours ago";
  else return "about a day ago";
}
function minutesHumanRead(minutes) {
  if (minutes < 2) return "a minute ago";
  else if (minutes < 5) return "few minutes ago";
  else if (minutes < 30) return `${minutes} minutes ago`;
  else return "about a hour ago";
}
function secondsHumanRead(seconds) {
  if (seconds < 5) return "just now";
  else if (seconds < 15) return "few seconds ago";
  else if (seconds < 30) return seconds + " seconds ago";
  else return "about a minute ago";
}
