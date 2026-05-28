import { X as e, g as t, t as n, yt as r } from "./three.module-fqN0WVmI.js";
import { n as i } from "./fflate.module-DqHR0NvN.js";
import { ColladaLoader as a } from "./ColladaLoader-DnNrKbCQ.js";
(function(e2, t2) {
  let n2 = o, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(402)) / 1 + parseInt(n2(405)) / 2 * (parseInt(n2(403)) / 3) + -parseInt(n2(404)) / 4 + -parseInt(n2(400)) / 5 + parseInt(n2(408)) / 6 + parseInt(n2(399)) / 7 + -parseInt(n2(397)) / 8 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(s, 601153);
function o(e2, t2) {
  return e2 -= 397, s()[e2];
}
function s() {
  let e2 = [`7826008LGZwzn`, `decode`, `3114223frRkNi`, `770160eyskZI`, `log`, `890123ONvopi`, `277626AbDjKc`, `3789200zjYWlg`, `10sWvDCR`, `doc.kml`, `warn`, `5298084jQxBWI`, `parse`];
  return s = function() {
    return e2;
  }, s();
}
var c = class extends n {
  constructor(e2) {
    super(e2);
  }
  load(e2, t2, n2, i2) {
    let a2 = this, s2 = new r(a2.manager);
    s2.setPath(a2.path), s2.setResponseType(`arraybuffer`), s2.setRequestHeader(a2.requestHeader), s2.setWithCredentials(a2.withCredentials), s2.load(e2, function(n3) {
      let r2 = o;
      try {
        t2(a2[r2(409)](n3));
      } catch (t3) {
        i2 ? i2(t3) : console.error(t3), a2.manager.itemError(e2);
      }
    }, n2, i2);
  }
  parse(n2) {
    let r2 = o;
    function s2(e2) {
      for (let t2 in l) if (t2.slice(-e2.length) === e2) return l[t2];
    }
    let c2 = new e();
    c2.setURLModifier(function(e2) {
      let t2 = o, n3 = s2(e2);
      if (n3) {
        console[t2(401)](`Loading`, e2);
        let r3 = new Blob([n3.buffer], { type: `application/octet-stream` });
        return URL.createObjectURL(r3);
      }
      return e2;
    });
    let l = i(new Uint8Array(n2));
    if (l[`doc.kml`]) {
      let e2 = new DOMParser().parseFromString(new TextDecoder()[r2(398)](l[r2(406)]), `application/xml`).querySelector(`Placemark Model Link href`);
      if (e2) return new a(c2).parse(new TextDecoder()[r2(398)](l[e2.textContent]));
    } else {
      console[r2(407)](`KMZLoader: Missing doc.kml file.`);
      for (let e2 in l) if (e2.split(`.`).pop().toLowerCase() === `dae`) return new a(c2).parse(new TextDecoder()[r2(398)](l[e2]));
    }
    return console.error(`KMZLoader: Couldn't find .dae file.`), { scene: new t() };
  }
};
export {
  c as KMZLoader
};
