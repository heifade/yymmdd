import { expect } from "chai";
import "mocha";
import { yyyymmdd, yyyymmddhhmmss, yyyy_mm_dd, yyyy_mm_dd_hh_mm_ss } from "../src/index";
import { padStart } from "lodash";

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
    month: `${padStart(month.toString(), 2, "0")}`,
    date: `${padStart(day.toString(), 2, "0")}`,
    hours: `${padStart(hours.toString(), 2, "0")}`,
    minutes: `${padStart(minutes.toString(), 2, "0")}`,
    seconds: `${padStart(seconds.toString(), 2, "0")}`
  };
}

describe("index", function() {
  before(() => {
    // clearTestFiles();
    // initTestFiles();
  });

  after(() => {
    // clearTestFiles();
  });

  it("yyyymmdd ", () => {
    let dt = new Date(1900, 0, 1, 0, 0, 0);
    for (let i = 0; i < 1000; i++) {
      const { year, month, date } = getDate(dt);
      expect(yyyymmdd(dt)).to.equal(`${year}${month}${date}`);
      dt.setDate(dt.getDate() + 1);
    }

    const { year, month, date } = getDate();
    expect(yyyymmdd()).to.equal(`${year}${month}${date}`);
  });
  it("yyyymmddhhmmss", () => {
    let dt = new Date(1900, 0, 1, 0, 0, 0);
    for (let i = 0; i < 1000; i++) {
      const { year, month, date, hours, minutes, seconds } = getDate(dt);
      expect(yyyymmddhhmmss(dt)).to.equal(`${year}${month}${date}${hours}${minutes}${seconds}`);
      dt.setDate(dt.getDate() + 1);
    }
  });
  it("yyyy_mm_dd ", () => {
    let dt = new Date(1900, 0, 1, 0, 0, 0);
    for (let i = 0; i < 1000; i++) {
      const { year, month, date } = getDate(dt);
      expect(yyyy_mm_dd(dt)).to.equal(`${year}-${month}-${date}`);
      dt.setDate(dt.getDate() + 1);
    }
  });
  it("yyyy_mm_dd hh:mm:ss", () => {
    let dt = new Date(1900, 0, 1, 0, 0, 0);
    for (let i = 0; i < 1000; i++) {
      const { year, month, date, hours, minutes, seconds } = getDate(dt);
      expect(yyyy_mm_dd_hh_mm_ss(dt)).to.equal(`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`);
      dt.setDate(dt.getDate() + 1);
    }
  });
});
