export default function relativeTimeFormat(publishedAt) {
  const rtf1 = new Intl.RelativeTimeFormat(navigator.language, {
    style: "short",
  });
  const diff = Date.now() - new Date(publishedAt);

  if (isLessThanDay(diff)) {
    return !isLessThanMinute(diff)
      ? rtf1.format(-hour(diff), "hour")
      : isLessThanMinute(diff)
      ? rtf1.format(-sec(diff), "second")
      : rtf1.format(-min(diff), "minute");
  }

  if (isLessThanMonth(diff)) {
    return rtf1.format(-day(diff), "day");
  }

  if (isLessThanYear(diff)) {
    return rtf1.format(-month(diff), "month");
  }

  return rtf1.format(-year(diff), "year");

  function sec(milisecond) {
    return Math.floor((milisecond / 1000) % (60 * 60));
  }

  function min(milisecond) {
    return Math.floor((milisecond / (1000 * 60)) % 60);
  }

  function hour(milisecond) {
    return Math.floor(milisecond / (1000 * 60 * 60));
  }

  function day(milisecond) {
    return Math.floor(hour(milisecond) / 24);
  }

  function month(milisecond) {
    const date = new Date();
    return Math.floor(
      day(milisecond) / getLastDayOfMonth(date.getFullYear(), date.getMonth())
    );
  }

  function year(milisecond) {
    return Math.floor(month(milisecond) / 12);
  }

  function isLessThanMinute(milisecond) {
    return sec(milisecond) < 60;
  }

  function isLessThanHour(milisecond) {
    return min(milisecond) < 60;
  }

  function isLessThanDay(milisecond) {
    return hour(milisecond) < 24;
  }

  function isLessThanMonth(milisecond) {
    const date = new Date();
    return (
      day(milisecond) < getLastDayOfMonth(date.getFullYear(), date.getMonth())
    );
  }

  function isLessThanYear(milisecond) {
    return month(milisecond) < 12;
  }

  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
}
