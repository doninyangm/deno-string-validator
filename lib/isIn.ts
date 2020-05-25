import assertString from "./util/assertString.ts";
import toString from "./util/toString.ts";

export default function isIn(str: any, options: any) {
  assertString(str);
  let i: string | number;
  if (Object.prototype.toString.call(options) === "[object Array]") {
    const array = [];
    for (i in options) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = toString(options[i]);
      }
    }
    return array.indexOf(str) >= 0;
  } else if (typeof options === "object") {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === "function") {
    return options.indexOf(str) >= 0;
  }
  return false;
}
