export default function relativeTimeFormat(publishedAt, clock) {
  const rtf1 = new Intl.RelativeTimeFormat(navigator.language, {
    style: "short",
  });

  if (isLessThanDay(diff(publishedAt))) {
    return !isLessThanMinute(diff(publishedAt))
      ? rtf1.format(-hour(diff(publishedAt)), "hour")
      : isLessThanMinute(diff(publishedAt))
      ? rtf1.format(-sec(diff(publishedAt)), "second")
      : rtf1.format(-min(diff(publishedAt)), "minute");
  }

  if (isLessThanMonth(diff(publishedAt))) {
    return rtf1.format(-day(diff(publishedAt)), "day");
  }

  if (isLessThanYear(diff(publishedAt))) {
    return rtf1.format(-month(diff(publishedAt)), "month");
  }

  return rtf1.format(-year(diff(publishedAt)), "year");

  function diff(publishedAt) {
    return clock.today - new Date(publishedAt);
  }

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
    const date = clock.today;
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

  function isLessThanDay(milisecond) {
    return hour(milisecond) < 24;
  }

  function isLessThanMonth(milisecond) {
    const date = clock.today;
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
