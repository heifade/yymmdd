function p2(value: number) {
  return `${value < 10 ? "0" + value : value}`;
}

function getDate(dt?: Date) {
  const date = dt || new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return {
    year: `${year}`,
    month: `${p2(month)}`,
    date: `${p2(day)}`,
    hours: `${p2(hours)}`,
    minutes: `${p2(minutes)}`,
    seconds: `${p2(seconds)}`
  };
}

/**
 * 输出今天，格式为：yyyyMMdd
 * @param dt 日期 (new Date())
 */
export function yyyymmdd(dt?: Date) {
  const { year, month, date } = getDate(dt);
  return `${year}${month}${date}`;
}

/**
 * 输出今天，格式为：yyyyMMddHHmmss
 * @param dt 日期 (new Date())
 */
export function yyyymmddhhmmss(dt?: Date) {
  const { year, month, date, hours, minutes, seconds } = getDate(dt);
  return `${year}${month}${date}${hours}${minutes}${seconds}`;
}

/**
 * 输出今天，格式为：yyyy-MM-dd
 * @param dt 日期 (new Date())
 */
export function yyyy_mm_dd(dt?: Date) {
  const { year, month, date } = getDate(dt);
  return `${year}-${month}-${date}`;
}

/**
 * 输出今天，格式为：yyyy-MM-dd HH:mm:ss
 * @param dt 日期 (new Date())
 */
export function yyyy_mm_dd_hh_mm_ss(dt?: Date) {
  const { year, month, date, hours, minutes, seconds } = getDate(dt);
  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}
