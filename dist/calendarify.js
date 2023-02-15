var Qn = Object.defineProperty, Xn = Object.defineProperties;
var Kn = Object.getOwnPropertyDescriptors;
var yt = Object.getOwnPropertySymbols;
var Cs = Object.prototype.hasOwnProperty, As = Object.prototype.propertyIsEnumerable;
var qt = (e, t, s) => t in e ? Qn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, V = (e, t) => {
  for (var s in t || (t = {}))
    Cs.call(t, s) && qt(e, s, t[s]);
  if (yt)
    for (var s of yt(t))
      As.call(t, s) && qt(e, s, t[s]);
  return e;
}, Ne = (e, t) => Xn(e, Kn(t));
var Is = (e, t) => {
  var s = {};
  for (var n in e)
    Cs.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
  if (e != null && yt)
    for (var n of yt(e))
      t.indexOf(n) < 0 && As.call(e, n) && (s[n] = e[n]);
  return s;
};
var p = (e, t, s) => (qt(e, typeof t != "symbol" ? t + "" : t, s), s);
var Oe = (e, t, s) => new Promise((n, r) => {
  var a = (u) => {
    try {
      o(s.next(u));
    } catch (d) {
      r(d);
    }
  }, i = (u) => {
    try {
      o(s.throw(u));
    } catch (d) {
      r(d);
    }
  }, o = (u) => u.done ? n(u.value) : Promise.resolve(u.value).then(a, i);
  o((s = s.apply(e, t)).next());
});
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Qs;
function l() {
  return Qs.apply(null, arguments);
}
function er(e) {
  Qs = e;
}
function se(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ee(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function S(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function us(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (S(e, t))
      return !1;
  return !0;
}
function $(e) {
  return e === void 0;
}
function pe(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function ut(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Xs(e, t) {
  var s = [], n, r = e.length;
  for (n = 0; n < r; ++n)
    s.push(t(e[n], n));
  return s;
}
function De(e, t) {
  for (var s in t)
    S(t, s) && (e[s] = t[s]);
  return S(t, "toString") && (e.toString = t.toString), S(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function he(e, t, s, n) {
  return Mn(e, t, s, n, !0).utc();
}
function tr() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function g(e) {
  return e._pf == null && (e._pf = tr()), e._pf;
}
var Kt;
Array.prototype.some ? Kt = Array.prototype.some : Kt = function(e) {
  var t = Object(this), s = t.length >>> 0, n;
  for (n = 0; n < s; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function hs(e) {
  if (e._isValid == null) {
    var t = g(e), s = Kt.call(t.parsedDateParts, function(r) {
      return r != null;
    }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s);
    if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
  }
  return e._isValid;
}
function Et(e) {
  var t = he(NaN);
  return e != null ? De(g(t), e) : g(t).userInvalidated = !0, t;
}
var Hs = l.momentProperties = [], zt = !1;
function ds(e, t) {
  var s, n, r, a = Hs.length;
  if ($(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), $(t._i) || (e._i = t._i), $(t._f) || (e._f = t._f), $(t._l) || (e._l = t._l), $(t._strict) || (e._strict = t._strict), $(t._tzm) || (e._tzm = t._tzm), $(t._isUTC) || (e._isUTC = t._isUTC), $(t._offset) || (e._offset = t._offset), $(t._pf) || (e._pf = g(t)), $(t._locale) || (e._locale = t._locale), a > 0)
    for (s = 0; s < a; s++)
      n = Hs[s], r = t[n], $(r) || (e[n] = r);
  return e;
}
function ht(e) {
  ds(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), zt === !1 && (zt = !0, l.updateOffset(this), zt = !1);
}
function ne(e) {
  return e instanceof ht || e != null && e._isAMomentObject != null;
}
function Ks(e) {
  l.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + e);
}
function Q(e, t) {
  var s = !0;
  return De(function() {
    if (l.deprecationHandler != null && l.deprecationHandler(null, e), s) {
      var n = [], r, a, i, o = arguments.length;
      for (a = 0; a < o; a++) {
        if (r = "", typeof arguments[a] == "object") {
          r += `
[` + a + "] ";
          for (i in arguments[0])
            S(arguments[0], i) && (r += i + ": " + arguments[0][i] + ", ");
          r = r.slice(0, -2);
        } else
          r = arguments[a];
        n.push(r);
      }
      Ks(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Us = {};
function en(e, t) {
  l.deprecationHandler != null && l.deprecationHandler(e, t), Us[e] || (Ks(t), Us[e] = !0);
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;
function de(e) {
  return typeof Function != "undefined" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function sr(e) {
  var t, s;
  for (s in e)
    S(e, s) && (t = e[s], de(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function es(e, t) {
  var s = De({}, e), n;
  for (n in t)
    S(t, n) && (Ee(e[n]) && Ee(t[n]) ? (s[n] = {}, De(s[n], e[n]), De(s[n], t[n])) : t[n] != null ? s[n] = t[n] : delete s[n]);
  for (n in e)
    S(e, n) && !S(t, n) && Ee(e[n]) && (s[n] = De({}, s[n]));
  return s;
}
function cs(e) {
  e != null && this.set(e);
}
var ts;
Object.keys ? ts = Object.keys : ts = function(e) {
  var t, s = [];
  for (t in e)
    S(e, t) && s.push(t);
  return s;
};
var nr = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function rr(e, t, s) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return de(n) ? n.call(t, s) : n;
}
function ue(e, t, s) {
  var n = "" + Math.abs(e), r = t - n.length, a = e >= 0;
  return (a ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n;
}
var fs = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, pt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Zt = {}, He = {};
function y(e, t, s, n) {
  var r = n;
  typeof n == "string" && (r = function() {
    return this[n]();
  }), e && (He[e] = r), t && (He[t[0]] = function() {
    return ue(r.apply(this, arguments), t[1], t[2]);
  }), s && (He[s] = function() {
    return this.localeData().ordinal(
      r.apply(this, arguments),
      e
    );
  });
}
function ar(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ir(e) {
  var t = e.match(fs), s, n;
  for (s = 0, n = t.length; s < n; s++)
    He[t[s]] ? t[s] = He[t[s]] : t[s] = ar(t[s]);
  return function(r) {
    var a = "", i;
    for (i = 0; i < n; i++)
      a += de(t[i]) ? t[i].call(r, e) : t[i];
    return a;
  };
}
function vt(e, t) {
  return e.isValid() ? (t = tn(t, e.localeData()), Zt[t] = Zt[t] || ir(t), Zt[t](e)) : e.localeData().invalidDate();
}
function tn(e, t) {
  var s = 5;
  function n(r) {
    return t.longDateFormat(r) || r;
  }
  for (pt.lastIndex = 0; s >= 0 && pt.test(e); )
    e = e.replace(
      pt,
      n
    ), pt.lastIndex = 0, s -= 1;
  return e;
}
var or = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function lr(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(fs).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var ur = "Invalid date";
function hr() {
  return this._invalidDate;
}
var dr = "%d", cr = /\d{1,2}/;
function fr(e) {
  return this._ordinal.replace("%d", e);
}
var mr = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function _r(e, t, s, n) {
  var r = this._relativeTime[s];
  return de(r) ? r(e, t, s, n) : r.replace(/%d/i, e);
}
function yr(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return de(s) ? s(t) : s.replace(/%s/i, t);
}
var tt = {};
function A(e, t) {
  var s = e.toLowerCase();
  tt[s] = tt[s + "s"] = tt[t] = e;
}
function X(e) {
  return typeof e == "string" ? tt[e] || tt[e.toLowerCase()] : void 0;
}
function ms(e) {
  var t = {}, s, n;
  for (n in e)
    S(e, n) && (s = X(n), s && (t[s] = e[n]));
  return t;
}
var sn = {};
function I(e, t) {
  sn[e] = t;
}
function pr(e) {
  var t = [], s;
  for (s in e)
    S(e, s) && t.push({ unit: s, priority: sn[s] });
  return t.sort(function(n, r) {
    return n.priority - r.priority;
  }), t;
}
function Wt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function J(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function v(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = J(t)), s;
}
function je(e, t) {
  return function(s) {
    return s != null ? (nn(this, e, s), l.updateOffset(this, t), this) : Mt(this, e);
  };
}
function Mt(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function nn(e, t, s) {
  e.isValid() && !isNaN(s) && (t === "FullYear" && Wt(e.year()) && e.month() === 1 && e.date() === 29 ? (s = v(s), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    s,
    e.month(),
    At(s, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](s));
}
function wr(e) {
  return e = X(e), de(this[e]) ? this[e]() : this;
}
function gr(e, t) {
  if (typeof e == "object") {
    e = ms(e);
    var s = pr(e), n, r = s.length;
    for (n = 0; n < r; n++)
      this[s[n].unit](e[s[n].unit]);
  } else if (e = X(e), de(this[e]))
    return this[e](t);
  return this;
}
var rn = /\d/, B = /\d\d/, an = /\d{3}/, _s = /\d{4}/, Lt = /[+-]?\d{6}/, R = /\d\d?/, on = /\d\d\d\d?/, ln = /\d\d\d\d\d\d?/, Pt = /\d{1,3}/, ys = /\d{1,4}/, Ft = /[+-]?\d{1,6}/, Be = /\d+/, Nt = /[+-]?\d+/, vr = /Z|[+-]\d\d:?\d\d/gi, Ct = /Z|[+-]\d\d(?::?\d\d)?/gi, kr = /[+-]?\d+(\.\d{1,3})?/, dt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, St;
St = {};
function f(e, t, s) {
  St[e] = de(t) ? t : function(n, r) {
    return n && s ? s : t;
  };
}
function Dr(e, t) {
  return S(St, e) ? St[e](t._strict, t._locale) : new RegExp(Mr(e));
}
function Mr(e) {
  return G(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, n, r, a) {
        return s || n || r || a;
      }
    )
  );
}
function G(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var ss = {};
function x(e, t) {
  var s, n = t, r;
  for (typeof e == "string" && (e = [e]), pe(t) && (n = function(a, i) {
    i[t] = v(a);
  }), r = e.length, s = 0; s < r; s++)
    ss[e[s]] = n;
}
function ct(e, t) {
  x(e, function(s, n, r, a) {
    r._w = r._w || {}, t(s, r._w, r, a);
  });
}
function Sr(e, t, s) {
  t != null && S(ss, e) && ss[e](t, s._a, s, e);
}
var C = 0, me = 1, ie = 2, N = 3, ee = 4, _e = 5, Re = 6, Yr = 7, xr = 8;
function br(e, t) {
  return (e % t + t) % t;
}
var P;
Array.prototype.indexOf ? P = Array.prototype.indexOf : P = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function At(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = br(t, 12);
  return e += (t - s) / 12, s === 1 ? Wt(e) ? 29 : 28 : 31 - s % 7 % 2;
}
y("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
y("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
y("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
A("month", "M");
I("month", 8);
f("M", R);
f("MM", R, B);
f("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
f("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
x(["M", "MM"], function(e, t) {
  t[me] = v(e) - 1;
});
x(["MMM", "MMMM"], function(e, t, s, n) {
  var r = s._locale.monthsParse(e, n, s._strict);
  r != null ? t[me] = r : g(s).invalidMonth = e;
});
var Or = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), un = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), hn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Tr = dt, Rr = dt;
function Er(e, t) {
  return e ? se(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || hn).test(t) ? "format" : "standalone"][e.month()] : se(this._months) ? this._months : this._months.standalone;
}
function Wr(e, t) {
  return e ? se(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[hn.test(t) ? "format" : "standalone"][e.month()] : se(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Lr(e, t, s) {
  var n, r, a, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      a = he([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (r = P.call(this._shortMonthsParse, i), r !== -1 ? r : null) : (r = P.call(this._longMonthsParse, i), r !== -1 ? r : null) : t === "MMM" ? (r = P.call(this._shortMonthsParse, i), r !== -1 ? r : (r = P.call(this._longMonthsParse, i), r !== -1 ? r : null)) : (r = P.call(this._longMonthsParse, i), r !== -1 ? r : (r = P.call(this._shortMonthsParse, i), r !== -1 ? r : null));
}
function Pr(e, t, s) {
  var n, r, a;
  if (this._monthsParseExact)
    return Lr.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (r = he([2e3, n]), s && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(r, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(r, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[n] && (a = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(a.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (s && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!s && this._monthsParse[n].test(e))
      return n;
  }
}
function dn(e, t) {
  var s;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = v(t);
    else if (t = e.localeData().monthsParse(t), !pe(t))
      return e;
  }
  return s = Math.min(e.date(), At(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s), e;
}
function cn(e) {
  return e != null ? (dn(this, e), l.updateOffset(this, !0), this) : Mt(this, "Month");
}
function Fr() {
  return At(this.year(), this.month());
}
function Nr(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || fn.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (S(this, "_monthsShortRegex") || (this._monthsShortRegex = Tr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Cr(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || fn.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (S(this, "_monthsRegex") || (this._monthsRegex = Rr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function fn() {
  function e(i, o) {
    return o.length - i.length;
  }
  var t = [], s = [], n = [], r, a;
  for (r = 0; r < 12; r++)
    a = he([2e3, r]), t.push(this.monthsShort(a, "")), s.push(this.months(a, "")), n.push(this.months(a, "")), n.push(this.monthsShort(a, ""));
  for (t.sort(e), s.sort(e), n.sort(e), r = 0; r < 12; r++)
    t[r] = G(t[r]), s[r] = G(s[r]);
  for (r = 0; r < 24; r++)
    n[r] = G(n[r]);
  this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
y("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? ue(e, 4) : "+" + e;
});
y(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
y(0, ["YYYY", 4], 0, "year");
y(0, ["YYYYY", 5], 0, "year");
y(0, ["YYYYYY", 6, !0], 0, "year");
A("year", "y");
I("year", 1);
f("Y", Nt);
f("YY", R, B);
f("YYYY", ys, _s);
f("YYYYY", Ft, Lt);
f("YYYYYY", Ft, Lt);
x(["YYYYY", "YYYYYY"], C);
x("YYYY", function(e, t) {
  t[C] = e.length === 2 ? l.parseTwoDigitYear(e) : v(e);
});
x("YY", function(e, t) {
  t[C] = l.parseTwoDigitYear(e);
});
x("Y", function(e, t) {
  t[C] = parseInt(e, 10);
});
function st(e) {
  return Wt(e) ? 366 : 365;
}
l.parseTwoDigitYear = function(e) {
  return v(e) + (v(e) > 68 ? 1900 : 2e3);
};
var mn = je("FullYear", !0);
function Ar() {
  return Wt(this.year());
}
function Ir(e, t, s, n, r, a, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, s, n, r, a, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, s, n, r, a, i), o;
}
function at(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Yt(e, t, s) {
  var n = 7 + t - s, r = (7 + at(e, 0, n).getUTCDay() - t) % 7;
  return -r + n - 1;
}
function _n(e, t, s, n, r) {
  var a = (7 + s - n) % 7, i = Yt(e, n, r), o = 1 + 7 * (t - 1) + a + i, u, d;
  return o <= 0 ? (u = e - 1, d = st(u) + o) : o > st(e) ? (u = e + 1, d = o - st(e)) : (u = e, d = o), {
    year: u,
    dayOfYear: d
  };
}
function it(e, t, s) {
  var n = Yt(e.year(), t, s), r = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, a, i;
  return r < 1 ? (i = e.year() - 1, a = r + ye(i, t, s)) : r > ye(e.year(), t, s) ? (a = r - ye(e.year(), t, s), i = e.year() + 1) : (i = e.year(), a = r), {
    week: a,
    year: i
  };
}
function ye(e, t, s) {
  var n = Yt(e, t, s), r = Yt(e + 1, t, s);
  return (st(e) - n + r) / 7;
}
y("w", ["ww", 2], "wo", "week");
y("W", ["WW", 2], "Wo", "isoWeek");
A("week", "w");
A("isoWeek", "W");
I("week", 5);
I("isoWeek", 5);
f("w", R);
f("ww", R, B);
f("W", R);
f("WW", R, B);
ct(
  ["w", "ww", "W", "WW"],
  function(e, t, s, n) {
    t[n.substr(0, 1)] = v(e);
  }
);
function Hr(e) {
  return it(e, this._week.dow, this._week.doy).week;
}
var Ur = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function $r() {
  return this._week.dow;
}
function Vr() {
  return this._week.doy;
}
function Gr(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function jr(e) {
  var t = it(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
y("d", 0, "do", "day");
y("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
y("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
y("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
y("e", 0, 0, "weekday");
y("E", 0, 0, "isoWeekday");
A("day", "d");
A("weekday", "e");
A("isoWeekday", "E");
I("day", 11);
I("weekday", 11);
I("isoWeekday", 11);
f("d", R);
f("e", R);
f("E", R);
f("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
f("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
f("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
ct(["dd", "ddd", "dddd"], function(e, t, s, n) {
  var r = s._locale.weekdaysParse(e, n, s._strict);
  r != null ? t.d = r : g(s).invalidWeekday = e;
});
ct(["d", "e", "E"], function(e, t, s, n) {
  t[n] = v(e);
});
function Br(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function qr(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function ps(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var zr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), yn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Zr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Jr = dt, Qr = dt, Xr = dt;
function Kr(e, t) {
  var s = se(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? ps(s, this._week.dow) : e ? s[e.day()] : s;
}
function ea(e) {
  return e === !0 ? ps(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function ta(e) {
  return e === !0 ? ps(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function sa(e, t, s) {
  var n, r, a, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      a = he([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (r = P.call(this._weekdaysParse, i), r !== -1 ? r : null) : t === "ddd" ? (r = P.call(this._shortWeekdaysParse, i), r !== -1 ? r : null) : (r = P.call(this._minWeekdaysParse, i), r !== -1 ? r : null) : t === "dddd" ? (r = P.call(this._weekdaysParse, i), r !== -1 || (r = P.call(this._shortWeekdaysParse, i), r !== -1) ? r : (r = P.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : t === "ddd" ? (r = P.call(this._shortWeekdaysParse, i), r !== -1 || (r = P.call(this._weekdaysParse, i), r !== -1) ? r : (r = P.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : (r = P.call(this._minWeekdaysParse, i), r !== -1 || (r = P.call(this._weekdaysParse, i), r !== -1) ? r : (r = P.call(this._shortWeekdaysParse, i), r !== -1 ? r : null));
}
function na(e, t, s) {
  var n, r, a;
  if (this._weekdaysParseExact)
    return sa.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (r = he([2e3, 1]).day(n), s && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (a = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(a.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (s && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (s && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!s && this._weekdaysParse[n].test(e))
      return n;
  }
}
function ra(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Br(e, this.localeData()), this.add(e - t, "d")) : t;
}
function aa(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function ia(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = qr(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function oa(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || ws.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (S(this, "_weekdaysRegex") || (this._weekdaysRegex = Jr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function la(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || ws.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (S(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Qr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function ua(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || ws.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (S(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function ws() {
  function e(_, c) {
    return c.length - _.length;
  }
  var t = [], s = [], n = [], r = [], a, i, o, u, d;
  for (a = 0; a < 7; a++)
    i = he([2e3, 1]).day(a), o = G(this.weekdaysMin(i, "")), u = G(this.weekdaysShort(i, "")), d = G(this.weekdays(i, "")), t.push(o), s.push(u), n.push(d), r.push(o), r.push(u), r.push(d);
  t.sort(e), s.sort(e), n.sort(e), r.sort(e), this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function gs() {
  return this.hours() % 12 || 12;
}
function ha() {
  return this.hours() || 24;
}
y("H", ["HH", 2], 0, "hour");
y("h", ["hh", 2], 0, gs);
y("k", ["kk", 2], 0, ha);
y("hmm", 0, 0, function() {
  return "" + gs.apply(this) + ue(this.minutes(), 2);
});
y("hmmss", 0, 0, function() {
  return "" + gs.apply(this) + ue(this.minutes(), 2) + ue(this.seconds(), 2);
});
y("Hmm", 0, 0, function() {
  return "" + this.hours() + ue(this.minutes(), 2);
});
y("Hmmss", 0, 0, function() {
  return "" + this.hours() + ue(this.minutes(), 2) + ue(this.seconds(), 2);
});
function pn(e, t) {
  y(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
pn("a", !0);
pn("A", !1);
A("hour", "h");
I("hour", 13);
function wn(e, t) {
  return t._meridiemParse;
}
f("a", wn);
f("A", wn);
f("H", R);
f("h", R);
f("k", R);
f("HH", R, B);
f("hh", R, B);
f("kk", R, B);
f("hmm", on);
f("hmmss", ln);
f("Hmm", on);
f("Hmmss", ln);
x(["H", "HH"], N);
x(["k", "kk"], function(e, t, s) {
  var n = v(e);
  t[N] = n === 24 ? 0 : n;
});
x(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
x(["h", "hh"], function(e, t, s) {
  t[N] = v(e), g(s).bigHour = !0;
});
x("hmm", function(e, t, s) {
  var n = e.length - 2;
  t[N] = v(e.substr(0, n)), t[ee] = v(e.substr(n)), g(s).bigHour = !0;
});
x("hmmss", function(e, t, s) {
  var n = e.length - 4, r = e.length - 2;
  t[N] = v(e.substr(0, n)), t[ee] = v(e.substr(n, 2)), t[_e] = v(e.substr(r)), g(s).bigHour = !0;
});
x("Hmm", function(e, t, s) {
  var n = e.length - 2;
  t[N] = v(e.substr(0, n)), t[ee] = v(e.substr(n));
});
x("Hmmss", function(e, t, s) {
  var n = e.length - 4, r = e.length - 2;
  t[N] = v(e.substr(0, n)), t[ee] = v(e.substr(n, 2)), t[_e] = v(e.substr(r));
});
function da(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var ca = /[ap]\.?m?\.?/i, fa = je("Hours", !0);
function ma(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var gn = {
  calendar: nr,
  longDateFormat: or,
  invalidDate: ur,
  ordinal: dr,
  dayOfMonthOrdinalParse: cr,
  relativeTime: mr,
  months: Or,
  monthsShort: un,
  week: Ur,
  weekdays: zr,
  weekdaysMin: Zr,
  weekdaysShort: yn,
  meridiemParse: ca
}, E = {}, Ke = {}, ot;
function _a(e, t) {
  var s, n = Math.min(e.length, t.length);
  for (s = 0; s < n; s += 1)
    if (e[s] !== t[s])
      return s;
  return n;
}
function $s(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ya(e) {
  for (var t = 0, s, n, r, a; t < e.length; ) {
    for (a = $s(e[t]).split("-"), s = a.length, n = $s(e[t + 1]), n = n ? n.split("-") : null; s > 0; ) {
      if (r = It(a.slice(0, s).join("-")), r)
        return r;
      if (n && n.length >= s && _a(a, n) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return ot;
}
function pa(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function It(e) {
  var t = null, s;
  if (E[e] === void 0 && typeof module != "undefined" && module && module.exports && pa(e))
    try {
      t = ot._abbr, s = require, s("./locale/" + e), Se(t);
    } catch (n) {
      E[e] = null;
    }
  return E[e];
}
function Se(e, t) {
  var s;
  return e && ($(t) ? s = we(e) : s = vs(e, t), s ? ot = s : typeof console != "undefined" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ot._abbr;
}
function vs(e, t) {
  if (t !== null) {
    var s, n = gn;
    if (t.abbr = e, E[e] != null)
      en(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = E[e]._config;
    else if (t.parentLocale != null)
      if (E[t.parentLocale] != null)
        n = E[t.parentLocale]._config;
      else if (s = It(t.parentLocale), s != null)
        n = s._config;
      else
        return Ke[t.parentLocale] || (Ke[t.parentLocale] = []), Ke[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return E[e] = new cs(es(n, t)), Ke[e] && Ke[e].forEach(function(r) {
      vs(r.name, r.config);
    }), Se(e), E[e];
  } else
    return delete E[e], null;
}
function wa(e, t) {
  if (t != null) {
    var s, n, r = gn;
    E[e] != null && E[e].parentLocale != null ? E[e].set(es(E[e]._config, t)) : (n = It(e), n != null && (r = n._config), t = es(r, t), n == null && (t.abbr = e), s = new cs(t), s.parentLocale = E[e], E[e] = s), Se(e);
  } else
    E[e] != null && (E[e].parentLocale != null ? (E[e] = E[e].parentLocale, e === Se() && Se(e)) : E[e] != null && delete E[e]);
  return E[e];
}
function we(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ot;
  if (!se(e)) {
    if (t = It(e), t)
      return t;
    e = [e];
  }
  return ya(e);
}
function ga() {
  return ts(E);
}
function ks(e) {
  var t, s = e._a;
  return s && g(e).overflow === -2 && (t = s[me] < 0 || s[me] > 11 ? me : s[ie] < 1 || s[ie] > At(s[C], s[me]) ? ie : s[N] < 0 || s[N] > 24 || s[N] === 24 && (s[ee] !== 0 || s[_e] !== 0 || s[Re] !== 0) ? N : s[ee] < 0 || s[ee] > 59 ? ee : s[_e] < 0 || s[_e] > 59 ? _e : s[Re] < 0 || s[Re] > 999 ? Re : -1, g(e)._overflowDayOfYear && (t < C || t > ie) && (t = ie), g(e)._overflowWeeks && t === -1 && (t = Yr), g(e)._overflowWeekday && t === -1 && (t = xr), g(e).overflow = t), e;
}
var va = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ka = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Da = /Z|[+-]\d\d(?::?\d\d)?/, wt = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Jt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Ma = /^\/?Date\((-?\d+)/i, Sa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Ya = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function vn(e) {
  var t, s, n = e._i, r = va.exec(n) || ka.exec(n), a, i, o, u, d = wt.length, _ = Jt.length;
  if (r) {
    for (g(e).iso = !0, t = 0, s = d; t < s; t++)
      if (wt[t][1].exec(r[1])) {
        i = wt[t][0], a = wt[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (r[3]) {
      for (t = 0, s = _; t < s; t++)
        if (Jt[t][1].exec(r[3])) {
          o = (r[2] || " ") + Jt[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && o != null) {
      e._isValid = !1;
      return;
    }
    if (r[4])
      if (Da.exec(r[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (u || ""), Ms(e);
  } else
    e._isValid = !1;
}
function xa(e, t, s, n, r, a) {
  var i = [
    ba(e),
    un.indexOf(t),
    parseInt(s, 10),
    parseInt(n, 10),
    parseInt(r, 10)
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function ba(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Oa(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Ta(e, t, s) {
  if (e) {
    var n = yn.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== r)
      return g(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Ra(e, t, s) {
  if (e)
    return Ya[e];
  if (t)
    return 0;
  var n = parseInt(s, 10), r = n % 100, a = (n - r) / 100;
  return a * 60 + r;
}
function kn(e) {
  var t = Sa.exec(Oa(e._i)), s;
  if (t) {
    if (s = xa(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Ta(t[1], s, e))
      return;
    e._a = s, e._tzm = Ra(t[8], t[9], t[10]), e._d = at.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), g(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Ea(e) {
  var t = Ma.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (vn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (kn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : l.createFromInputFallback(e);
}
l.createFromInputFallback = Q(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Ae(e, t, s) {
  return e != null ? e : t != null ? t : s;
}
function Wa(e) {
  var t = new Date(l.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Ds(e) {
  var t, s, n = [], r, a, i;
  if (!e._d) {
    for (r = Wa(e), e._w && e._a[ie] == null && e._a[me] == null && La(e), e._dayOfYear != null && (i = Ae(e._a[C], r[C]), (e._dayOfYear > st(i) || e._dayOfYear === 0) && (g(e)._overflowDayOfYear = !0), s = at(i, 0, e._dayOfYear), e._a[me] = s.getUTCMonth(), e._a[ie] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[N] === 24 && e._a[ee] === 0 && e._a[_e] === 0 && e._a[Re] === 0 && (e._nextDay = !0, e._a[N] = 0), e._d = (e._useUTC ? at : Ir).apply(
      null,
      n
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[N] = 24), e._w && typeof e._w.d != "undefined" && e._w.d !== a && (g(e).weekdayMismatch = !0);
  }
}
function La(e) {
  var t, s, n, r, a, i, o, u, d;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, s = Ae(
    t.GG,
    e._a[C],
    it(T(), 1, 4).year
  ), n = Ae(t.W, 1), r = Ae(t.E, 1), (r < 1 || r > 7) && (u = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, d = it(T(), a, i), s = Ae(t.gg, e._a[C], d.year), n = Ae(t.w, d.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (u = !0)) : t.e != null ? (r = t.e + a, (t.e < 0 || t.e > 6) && (u = !0)) : r = a), n < 1 || n > ye(s, a, i) ? g(e)._overflowWeeks = !0 : u != null ? g(e)._overflowWeekday = !0 : (o = _n(s, n, r, a, i), e._a[C] = o.year, e._dayOfYear = o.dayOfYear);
}
l.ISO_8601 = function() {
};
l.RFC_2822 = function() {
};
function Ms(e) {
  if (e._f === l.ISO_8601) {
    vn(e);
    return;
  }
  if (e._f === l.RFC_2822) {
    kn(e);
    return;
  }
  e._a = [], g(e).empty = !0;
  var t = "" + e._i, s, n, r, a, i, o = t.length, u = 0, d, _;
  for (r = tn(e._f, e._locale).match(fs) || [], _ = r.length, s = 0; s < _; s++)
    a = r[s], n = (t.match(Dr(a, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && g(e).unusedInput.push(i), t = t.slice(
      t.indexOf(n) + n.length
    ), u += n.length), He[a] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(a), Sr(a, n, e)) : e._strict && !n && g(e).unusedTokens.push(a);
  g(e).charsLeftOver = o - u, t.length > 0 && g(e).unusedInput.push(t), e._a[N] <= 12 && g(e).bigHour === !0 && e._a[N] > 0 && (g(e).bigHour = void 0), g(e).parsedDateParts = e._a.slice(0), g(e).meridiem = e._meridiem, e._a[N] = Pa(
    e._locale,
    e._a[N],
    e._meridiem
  ), d = g(e).era, d !== null && (e._a[C] = e._locale.erasConvertYear(d, e._a[C])), Ds(e), ks(e);
}
function Pa(e, t, s) {
  var n;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (n = e.isPM(s), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function Fa(e) {
  var t, s, n, r, a, i, o = !1, u = e._f.length;
  if (u === 0) {
    g(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (r = 0; r < u; r++)
    a = 0, i = !1, t = ds({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], Ms(t), hs(t) && (i = !0), a += g(t).charsLeftOver, a += g(t).unusedTokens.length * 10, g(t).score = a, o ? a < n && (n = a, s = t) : (n == null || a < n || i) && (n = a, s = t, i && (o = !0));
  De(e, s || t);
}
function Na(e) {
  if (!e._d) {
    var t = ms(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Xs(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), Ds(e);
  }
}
function Ca(e) {
  var t = new ht(ks(Dn(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Dn(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || we(e._l), t === null || s === void 0 && t === "" ? Et({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ne(t) ? new ht(ks(t)) : (ut(t) ? e._d = t : se(s) ? Fa(e) : s ? Ms(e) : Aa(e), hs(e) || (e._d = null), e));
}
function Aa(e) {
  var t = e._i;
  $(t) ? e._d = new Date(l.now()) : ut(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Ea(e) : se(t) ? (e._a = Xs(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), Ds(e)) : Ee(t) ? Na(e) : pe(t) ? e._d = new Date(t) : l.createFromInputFallback(e);
}
function Mn(e, t, s, n, r) {
  var a = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (s === !0 || s === !1) && (n = s, s = void 0), (Ee(e) && us(e) || se(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = r, a._l = s, a._i = e, a._f = t, a._strict = n, Ca(a);
}
function T(e, t, s, n) {
  return Mn(e, t, s, n, !1);
}
var Ia = Q(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = T.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Et();
  }
), Ha = Q(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = T.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Et();
  }
);
function Sn(e, t) {
  var s, n;
  if (t.length === 1 && se(t[0]) && (t = t[0]), !t.length)
    return T();
  for (s = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](s)) && (s = t[n]);
  return s;
}
function Ua() {
  var e = [].slice.call(arguments, 0);
  return Sn("isBefore", e);
}
function $a() {
  var e = [].slice.call(arguments, 0);
  return Sn("isAfter", e);
}
var Va = function() {
  return Date.now ? Date.now() : +new Date();
}, et = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Ga(e) {
  var t, s = !1, n, r = et.length;
  for (t in e)
    if (S(e, t) && !(P.call(et, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < r; ++n)
    if (e[et[n]]) {
      if (s)
        return !1;
      parseFloat(e[et[n]]) !== v(e[et[n]]) && (s = !0);
    }
  return !0;
}
function ja() {
  return this._isValid;
}
function Ba() {
  return re(NaN);
}
function Ht(e) {
  var t = ms(e), s = t.year || 0, n = t.quarter || 0, r = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, u = t.minute || 0, d = t.second || 0, _ = t.millisecond || 0;
  this._isValid = Ga(t), this._milliseconds = +_ + d * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +r + n * 3 + s * 12, this._data = {}, this._locale = we(), this._bubble();
}
function kt(e) {
  return e instanceof Ht;
}
function ns(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function qa(e, t, s) {
  var n = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0, i;
  for (i = 0; i < n; i++)
    (s && e[i] !== t[i] || !s && v(e[i]) !== v(t[i])) && a++;
  return a + r;
}
function Yn(e, t) {
  y(e, 0, 0, function() {
    var s = this.utcOffset(), n = "+";
    return s < 0 && (s = -s, n = "-"), n + ue(~~(s / 60), 2) + t + ue(~~s % 60, 2);
  });
}
Yn("Z", ":");
Yn("ZZ", "");
f("Z", Ct);
f("ZZ", Ct);
x(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Ss(Ct, e);
});
var za = /([\+\-]|\d\d)/gi;
function Ss(e, t) {
  var s = (t || "").match(e), n, r, a;
  return s === null ? null : (n = s[s.length - 1] || [], r = (n + "").match(za) || ["-", 0, 0], a = +(r[1] * 60) + v(r[2]), a === 0 ? 0 : r[0] === "+" ? a : -a);
}
function Ys(e, t) {
  var s, n;
  return t._isUTC ? (s = t.clone(), n = (ne(e) || ut(e) ? e.valueOf() : T(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + n), l.updateOffset(s, !1), s) : T(e).local();
}
function rs(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
l.updateOffset = function() {
};
function Za(e, t, s) {
  var n = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ss(Ct, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (r = rs(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), n !== e && (!t || this._changeInProgress ? On(
      this,
      re(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : rs(this);
}
function Ja(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Qa(e) {
  return this.utcOffset(0, e);
}
function Xa(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(rs(this), "m")), this;
}
function Ka() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ss(vr, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function ei(e) {
  return this.isValid() ? (e = e ? T(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function ti() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function si() {
  if (!$(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return ds(e, this), e = Dn(e), e._a ? (t = e._isUTC ? he(e._a) : T(e._a), this._isDSTShifted = this.isValid() && qa(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function ni() {
  return this.isValid() ? !this._isUTC : !1;
}
function ri() {
  return this.isValid() ? this._isUTC : !1;
}
function xn() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var ai = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, ii = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function re(e, t) {
  var s = e, n = null, r, a, i;
  return kt(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : pe(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (n = ai.exec(e)) ? (r = n[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: v(n[ie]) * r,
    h: v(n[N]) * r,
    m: v(n[ee]) * r,
    s: v(n[_e]) * r,
    ms: v(ns(n[Re] * 1e3)) * r
    // the millisecond decimal point is included in the match
  }) : (n = ii.exec(e)) ? (r = n[1] === "-" ? -1 : 1, s = {
    y: Te(n[2], r),
    M: Te(n[3], r),
    w: Te(n[4], r),
    d: Te(n[5], r),
    h: Te(n[6], r),
    m: Te(n[7], r),
    s: Te(n[8], r)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = oi(
    T(s.from),
    T(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), a = new Ht(s), kt(e) && S(e, "_locale") && (a._locale = e._locale), kt(e) && S(e, "_isValid") && (a._isValid = e._isValid), a;
}
re.fn = Ht.prototype;
re.invalid = Ba;
function Te(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Vs(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function oi(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Ys(t, e), e.isBefore(t) ? s = Vs(e, t) : (s = Vs(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function bn(e, t) {
  return function(s, n) {
    var r, a;
    return n !== null && !isNaN(+n) && (en(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = s, s = n, n = a), r = re(s, n), On(this, r, e), this;
  };
}
function On(e, t, s, n) {
  var r = t._milliseconds, a = ns(t._days), i = ns(t._months);
  e.isValid() && (n = n == null ? !0 : n, i && dn(e, Mt(e, "Month") + i * s), a && nn(e, "Date", Mt(e, "Date") + a * s), r && e._d.setTime(e._d.valueOf() + r * s), n && l.updateOffset(e, a || i));
}
var li = bn(1, "add"), ui = bn(-1, "subtract");
function Tn(e) {
  return typeof e == "string" || e instanceof String;
}
function hi(e) {
  return ne(e) || ut(e) || Tn(e) || pe(e) || ci(e) || di(e) || e === null || e === void 0;
}
function di(e) {
  var t = Ee(e) && !us(e), s = !1, n = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], r, a, i = n.length;
  for (r = 0; r < i; r += 1)
    a = n[r], s = s || S(e, a);
  return t && s;
}
function ci(e) {
  var t = se(e), s = !1;
  return t && (s = e.filter(function(n) {
    return !pe(n) && Tn(e);
  }).length === 0), t && s;
}
function fi(e) {
  var t = Ee(e) && !us(e), s = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], r, a;
  for (r = 0; r < n.length; r += 1)
    a = n[r], s = s || S(e, a);
  return t && s;
}
function mi(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function _i(e, t) {
  arguments.length === 1 && (arguments[0] ? hi(arguments[0]) ? (e = arguments[0], t = void 0) : fi(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || T(), n = Ys(s, this).startOf("day"), r = l.calendarFormat(this, n) || "sameElse", a = t && (de(t[r]) ? t[r].call(this, s) : t[r]);
  return this.format(
    a || this.localeData().calendar(r, this, T(s))
  );
}
function yi() {
  return new ht(this);
}
function pi(e, t) {
  var s = ne(e) ? e : T(e);
  return this.isValid() && s.isValid() ? (t = X(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function wi(e, t) {
  var s = ne(e) ? e : T(e);
  return this.isValid() && s.isValid() ? (t = X(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function gi(e, t, s, n) {
  var r = ne(e) ? e : T(e), a = ne(t) ? t : T(t);
  return this.isValid() && r.isValid() && a.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(r, s) : !this.isBefore(r, s)) && (n[1] === ")" ? this.isBefore(a, s) : !this.isAfter(a, s))) : !1;
}
function vi(e, t) {
  var s = ne(e) ? e : T(e), n;
  return this.isValid() && s.isValid() ? (t = X(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function ki(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Di(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Mi(e, t, s) {
  var n, r, a;
  if (!this.isValid())
    return NaN;
  if (n = Ys(e, this), !n.isValid())
    return NaN;
  switch (r = (n.utcOffset() - this.utcOffset()) * 6e4, t = X(t), t) {
    case "year":
      a = Dt(this, n) / 12;
      break;
    case "month":
      a = Dt(this, n);
      break;
    case "quarter":
      a = Dt(this, n) / 3;
      break;
    case "second":
      a = (this - n) / 1e3;
      break;
    case "minute":
      a = (this - n) / 6e4;
      break;
    case "hour":
      a = (this - n) / 36e5;
      break;
    case "day":
      a = (this - n - r) / 864e5;
      break;
    case "week":
      a = (this - n - r) / 6048e5;
      break;
    default:
      a = this - n;
  }
  return s ? a : J(a);
}
function Dt(e, t) {
  if (e.date() < t.date())
    return -Dt(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(s, "months"), r, a;
  return t - n < 0 ? (r = e.clone().add(s - 1, "months"), a = (t - n) / (n - r)) : (r = e.clone().add(s + 1, "months"), a = (t - n) / (r - n)), -(s + a) || 0;
}
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Si() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Yi(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? vt(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : de(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", vt(s, "Z")) : vt(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function xi() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, n, r, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(s + n + r + a);
}
function bi(e) {
  e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
  var t = vt(this, e);
  return this.localeData().postformat(t);
}
function Oi(e, t) {
  return this.isValid() && (ne(e) && e.isValid() || T(e).isValid()) ? re({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Ti(e) {
  return this.from(T(), e);
}
function Ri(e, t) {
  return this.isValid() && (ne(e) && e.isValid() || T(e).isValid()) ? re({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Ei(e) {
  return this.to(T(), e);
}
function Rn(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = we(e), t != null && (this._locale = t), this);
}
var En = Q(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Wn() {
  return this._locale;
}
var xt = 1e3, Ue = 60 * xt, bt = 60 * Ue, Ln = (365 * 400 + 97) * 24 * bt;
function $e(e, t) {
  return (e % t + t) % t;
}
function Pn(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - Ln : new Date(e, t, s).valueOf();
}
function Fn(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - Ln : Date.UTC(e, t, s);
}
function Wi(e) {
  var t, s;
  if (e = X(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Fn : Pn, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= $e(
        t + (this._isUTC ? 0 : this.utcOffset() * Ue),
        bt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= $e(t, Ue);
      break;
    case "second":
      t = this._d.valueOf(), t -= $e(t, xt);
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function Li(e) {
  var t, s;
  if (e = X(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Fn : Pn, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += bt - $e(
        t + (this._isUTC ? 0 : this.utcOffset() * Ue),
        bt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Ue - $e(t, Ue) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += xt - $e(t, xt) - 1;
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function Pi() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Fi() {
  return Math.floor(this.valueOf() / 1e3);
}
function Ni() {
  return new Date(this.valueOf());
}
function Ci() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function Ai() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Ii() {
  return this.isValid() ? this.toISOString() : null;
}
function Hi() {
  return hs(this);
}
function Ui() {
  return De({}, g(this));
}
function $i() {
  return g(this).overflow;
}
function Vi() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
y("N", 0, 0, "eraAbbr");
y("NN", 0, 0, "eraAbbr");
y("NNN", 0, 0, "eraAbbr");
y("NNNN", 0, 0, "eraName");
y("NNNNN", 0, 0, "eraNarrow");
y("y", ["y", 1], "yo", "eraYear");
y("y", ["yy", 2], 0, "eraYear");
y("y", ["yyy", 3], 0, "eraYear");
y("y", ["yyyy", 4], 0, "eraYear");
f("N", xs);
f("NN", xs);
f("NNN", xs);
f("NNNN", eo);
f("NNNNN", to);
x(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, n) {
    var r = s._locale.erasParse(e, n, s._strict);
    r ? g(s).era = r : g(s).invalidEra = e;
  }
);
f("y", Be);
f("yy", Be);
f("yyy", Be);
f("yyyy", Be);
f("yo", so);
x(["y", "yy", "yyy", "yyyy"], C);
x(["yo"], function(e, t, s, n) {
  var r;
  s._locale._eraYearOrdinalRegex && (r = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[C] = s._locale.eraYearOrdinalParse(e, r) : t[C] = parseInt(e, 10);
});
function Gi(e, t) {
  var s, n, r, a = this._eras || we("en")._eras;
  for (s = 0, n = a.length; s < n; ++s) {
    switch (typeof a[s].since) {
      case "string":
        r = l(a[s].since).startOf("day"), a[s].since = r.valueOf();
        break;
    }
    switch (typeof a[s].until) {
      case "undefined":
        a[s].until = 1 / 0;
        break;
      case "string":
        r = l(a[s].until).startOf("day").valueOf(), a[s].until = r.valueOf();
        break;
    }
  }
  return a;
}
function ji(e, t, s) {
  var n, r, a = this.eras(), i, o, u;
  for (e = e.toUpperCase(), n = 0, r = a.length; n < r; ++n)
    if (i = a[n].name.toUpperCase(), o = a[n].abbr.toUpperCase(), u = a[n].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return a[n];
          break;
        case "NNNN":
          if (i === e)
            return a[n];
          break;
        case "NNNNN":
          if (u === e)
            return a[n];
          break;
      }
    else if ([i, o, u].indexOf(e) >= 0)
      return a[n];
}
function Bi(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * s;
}
function qi() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].name;
  return "";
}
function zi() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].narrow;
  return "";
}
function Zi() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].abbr;
  return "";
}
function Ji() {
  var e, t, s, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = r[e].since <= r[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return (this.year() - l(r[e].since).year()) * s + r[e].offset;
  return this.year();
}
function Qi(e) {
  return S(this, "_erasNameRegex") || bs.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Xi(e) {
  return S(this, "_erasAbbrRegex") || bs.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Ki(e) {
  return S(this, "_erasNarrowRegex") || bs.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function xs(e, t) {
  return t.erasAbbrRegex(e);
}
function eo(e, t) {
  return t.erasNameRegex(e);
}
function to(e, t) {
  return t.erasNarrowRegex(e);
}
function so(e, t) {
  return t._eraYearOrdinalRegex || Be;
}
function bs() {
  var e = [], t = [], s = [], n = [], r, a, i = this.eras();
  for (r = 0, a = i.length; r < a; ++r)
    t.push(G(i[r].name)), e.push(G(i[r].abbr)), s.push(G(i[r].narrow)), n.push(G(i[r].name)), n.push(G(i[r].abbr)), n.push(G(i[r].narrow));
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
y(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
y(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ut(e, t) {
  y(0, [e, e.length], 0, t);
}
Ut("gggg", "weekYear");
Ut("ggggg", "weekYear");
Ut("GGGG", "isoWeekYear");
Ut("GGGGG", "isoWeekYear");
A("weekYear", "gg");
A("isoWeekYear", "GG");
I("weekYear", 1);
I("isoWeekYear", 1);
f("G", Nt);
f("g", Nt);
f("GG", R, B);
f("gg", R, B);
f("GGGG", ys, _s);
f("gggg", ys, _s);
f("GGGGG", Ft, Lt);
f("ggggg", Ft, Lt);
ct(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, n) {
    t[n.substr(0, 2)] = v(e);
  }
);
ct(["gg", "GG"], function(e, t, s, n) {
  t[n] = l.parseTwoDigitYear(e);
});
function no(e) {
  return Nn.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function ro(e) {
  return Nn.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function ao() {
  return ye(this.year(), 1, 4);
}
function io() {
  return ye(this.isoWeekYear(), 1, 4);
}
function oo() {
  var e = this.localeData()._week;
  return ye(this.year(), e.dow, e.doy);
}
function lo() {
  var e = this.localeData()._week;
  return ye(this.weekYear(), e.dow, e.doy);
}
function Nn(e, t, s, n, r) {
  var a;
  return e == null ? it(this, n, r).year : (a = ye(e, n, r), t > a && (t = a), uo.call(this, e, t, s, n, r));
}
function uo(e, t, s, n, r) {
  var a = _n(e, t, s, n, r), i = at(a.year, 0, a.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
y("Q", 0, "Qo", "quarter");
A("quarter", "Q");
I("quarter", 7);
f("Q", rn);
x("Q", function(e, t) {
  t[me] = (v(e) - 1) * 3;
});
function ho(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
y("D", ["DD", 2], "Do", "date");
A("date", "D");
I("date", 9);
f("D", R);
f("DD", R, B);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
x(["D", "DD"], ie);
x("Do", function(e, t) {
  t[ie] = v(e.match(R)[0]);
});
var Cn = je("Date", !0);
y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
A("dayOfYear", "DDD");
I("dayOfYear", 4);
f("DDD", Pt);
f("DDDD", an);
x(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = v(e);
});
function co(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
y("m", ["mm", 2], 0, "minute");
A("minute", "m");
I("minute", 14);
f("m", R);
f("mm", R, B);
x(["m", "mm"], ee);
var fo = je("Minutes", !1);
y("s", ["ss", 2], 0, "second");
A("second", "s");
I("second", 15);
f("s", R);
f("ss", R, B);
x(["s", "ss"], _e);
var mo = je("Seconds", !1);
y("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
y(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
y(0, ["SSS", 3], 0, "millisecond");
y(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
y(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
y(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
y(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
y(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
y(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
A("millisecond", "ms");
I("millisecond", 16);
f("S", Pt, rn);
f("SS", Pt, B);
f("SSS", Pt, an);
var Me, An;
for (Me = "SSSS"; Me.length <= 9; Me += "S")
  f(Me, Be);
function _o(e, t) {
  t[Re] = v(("0." + e) * 1e3);
}
for (Me = "S"; Me.length <= 9; Me += "S")
  x(Me, _o);
An = je("Milliseconds", !1);
y("z", 0, 0, "zoneAbbr");
y("zz", 0, 0, "zoneName");
function yo() {
  return this._isUTC ? "UTC" : "";
}
function po() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var h = ht.prototype;
h.add = li;
h.calendar = _i;
h.clone = yi;
h.diff = Mi;
h.endOf = Li;
h.format = bi;
h.from = Oi;
h.fromNow = Ti;
h.to = Ri;
h.toNow = Ei;
h.get = wr;
h.invalidAt = $i;
h.isAfter = pi;
h.isBefore = wi;
h.isBetween = gi;
h.isSame = vi;
h.isSameOrAfter = ki;
h.isSameOrBefore = Di;
h.isValid = Hi;
h.lang = En;
h.locale = Rn;
h.localeData = Wn;
h.max = Ha;
h.min = Ia;
h.parsingFlags = Ui;
h.set = gr;
h.startOf = Wi;
h.subtract = ui;
h.toArray = Ci;
h.toObject = Ai;
h.toDate = Ni;
h.toISOString = Yi;
h.inspect = xi;
typeof Symbol != "undefined" && Symbol.for != null && (h[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
h.toJSON = Ii;
h.toString = Si;
h.unix = Fi;
h.valueOf = Pi;
h.creationData = Vi;
h.eraName = qi;
h.eraNarrow = zi;
h.eraAbbr = Zi;
h.eraYear = Ji;
h.year = mn;
h.isLeapYear = Ar;
h.weekYear = no;
h.isoWeekYear = ro;
h.quarter = h.quarters = ho;
h.month = cn;
h.daysInMonth = Fr;
h.week = h.weeks = Gr;
h.isoWeek = h.isoWeeks = jr;
h.weeksInYear = oo;
h.weeksInWeekYear = lo;
h.isoWeeksInYear = ao;
h.isoWeeksInISOWeekYear = io;
h.date = Cn;
h.day = h.days = ra;
h.weekday = aa;
h.isoWeekday = ia;
h.dayOfYear = co;
h.hour = h.hours = fa;
h.minute = h.minutes = fo;
h.second = h.seconds = mo;
h.millisecond = h.milliseconds = An;
h.utcOffset = Za;
h.utc = Qa;
h.local = Xa;
h.parseZone = Ka;
h.hasAlignedHourOffset = ei;
h.isDST = ti;
h.isLocal = ni;
h.isUtcOffset = ri;
h.isUtc = xn;
h.isUTC = xn;
h.zoneAbbr = yo;
h.zoneName = po;
h.dates = Q(
  "dates accessor is deprecated. Use date instead.",
  Cn
);
h.months = Q(
  "months accessor is deprecated. Use month instead",
  cn
);
h.years = Q(
  "years accessor is deprecated. Use year instead",
  mn
);
h.zone = Q(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Ja
);
h.isDSTShifted = Q(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  si
);
function wo(e) {
  return T(e * 1e3);
}
function go() {
  return T.apply(null, arguments).parseZone();
}
function In(e) {
  return e;
}
var Y = cs.prototype;
Y.calendar = rr;
Y.longDateFormat = lr;
Y.invalidDate = hr;
Y.ordinal = fr;
Y.preparse = In;
Y.postformat = In;
Y.relativeTime = _r;
Y.pastFuture = yr;
Y.set = sr;
Y.eras = Gi;
Y.erasParse = ji;
Y.erasConvertYear = Bi;
Y.erasAbbrRegex = Xi;
Y.erasNameRegex = Qi;
Y.erasNarrowRegex = Ki;
Y.months = Er;
Y.monthsShort = Wr;
Y.monthsParse = Pr;
Y.monthsRegex = Cr;
Y.monthsShortRegex = Nr;
Y.week = Hr;
Y.firstDayOfYear = Vr;
Y.firstDayOfWeek = $r;
Y.weekdays = Kr;
Y.weekdaysMin = ta;
Y.weekdaysShort = ea;
Y.weekdaysParse = na;
Y.weekdaysRegex = oa;
Y.weekdaysShortRegex = la;
Y.weekdaysMinRegex = ua;
Y.isPM = da;
Y.meridiem = ma;
function Ot(e, t, s, n) {
  var r = we(), a = he().set(n, t);
  return r[s](a, e);
}
function Hn(e, t, s) {
  if (pe(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ot(e, t, s, "month");
  var n, r = [];
  for (n = 0; n < 12; n++)
    r[n] = Ot(e, n, s, "month");
  return r;
}
function Os(e, t, s, n) {
  typeof e == "boolean" ? (pe(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, pe(t) && (s = t, t = void 0), t = t || "");
  var r = we(), a = e ? r._week.dow : 0, i, o = [];
  if (s != null)
    return Ot(t, (s + a) % 7, n, "day");
  for (i = 0; i < 7; i++)
    o[i] = Ot(t, (i + a) % 7, n, "day");
  return o;
}
function vo(e, t) {
  return Hn(e, t, "months");
}
function ko(e, t) {
  return Hn(e, t, "monthsShort");
}
function Do(e, t, s) {
  return Os(e, t, s, "weekdays");
}
function Mo(e, t, s) {
  return Os(e, t, s, "weekdaysShort");
}
function So(e, t, s) {
  return Os(e, t, s, "weekdaysMin");
}
Se("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, s = v(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
l.lang = Q(
  "moment.lang is deprecated. Use moment.locale instead.",
  Se
);
l.langData = Q(
  "moment.langData is deprecated. Use moment.localeData instead.",
  we
);
var ce = Math.abs;
function Yo() {
  var e = this._data;
  return this._milliseconds = ce(this._milliseconds), this._days = ce(this._days), this._months = ce(this._months), e.milliseconds = ce(e.milliseconds), e.seconds = ce(e.seconds), e.minutes = ce(e.minutes), e.hours = ce(e.hours), e.months = ce(e.months), e.years = ce(e.years), this;
}
function Un(e, t, s, n) {
  var r = re(t, s);
  return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble();
}
function xo(e, t) {
  return Un(this, e, t, 1);
}
function bo(e, t) {
  return Un(this, e, t, -1);
}
function Gs(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Oo() {
  var e = this._milliseconds, t = this._days, s = this._months, n = this._data, r, a, i, o, u;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Gs(as(s) + t) * 864e5, t = 0, s = 0), n.milliseconds = e % 1e3, r = J(e / 1e3), n.seconds = r % 60, a = J(r / 60), n.minutes = a % 60, i = J(a / 60), n.hours = i % 24, t += J(i / 24), u = J($n(t)), s += u, t -= Gs(as(u)), o = J(s / 12), s %= 12, n.days = t, n.months = s, n.years = o, this;
}
function $n(e) {
  return e * 4800 / 146097;
}
function as(e) {
  return e * 146097 / 4800;
}
function To(e) {
  if (!this.isValid())
    return NaN;
  var t, s, n = this._milliseconds;
  if (e = X(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, s = this._months + $n(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(as(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Ro() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + v(this._months / 12) * 31536e6 : NaN;
}
function ge(e) {
  return function() {
    return this.as(e);
  };
}
var Eo = ge("ms"), Wo = ge("s"), Lo = ge("m"), Po = ge("h"), Fo = ge("d"), No = ge("w"), Co = ge("M"), Ao = ge("Q"), Io = ge("y");
function Ho() {
  return re(this);
}
function Uo(e) {
  return e = X(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Le(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var $o = Le("milliseconds"), Vo = Le("seconds"), Go = Le("minutes"), jo = Le("hours"), Bo = Le("days"), qo = Le("months"), zo = Le("years");
function Zo() {
  return J(this.days() / 7);
}
var fe = Math.round, Ie = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Jo(e, t, s, n, r) {
  return r.relativeTime(t || 1, !!s, e, n);
}
function Qo(e, t, s, n) {
  var r = re(e).abs(), a = fe(r.as("s")), i = fe(r.as("m")), o = fe(r.as("h")), u = fe(r.as("d")), d = fe(r.as("M")), _ = fe(r.as("w")), c = fe(r.as("y")), m = a <= s.ss && ["s", a] || a < s.s && ["ss", a] || i <= 1 && ["m"] || i < s.m && ["mm", i] || o <= 1 && ["h"] || o < s.h && ["hh", o] || u <= 1 && ["d"] || u < s.d && ["dd", u];
  return s.w != null && (m = m || _ <= 1 && ["w"] || _ < s.w && ["ww", _]), m = m || d <= 1 && ["M"] || d < s.M && ["MM", d] || c <= 1 && ["y"] || ["yy", c], m[2] = t, m[3] = +e > 0, m[4] = n, Jo.apply(null, m);
}
function Xo(e) {
  return e === void 0 ? fe : typeof e == "function" ? (fe = e, !0) : !1;
}
function Ko(e, t) {
  return Ie[e] === void 0 ? !1 : t === void 0 ? Ie[e] : (Ie[e] = t, e === "s" && (Ie.ss = t - 1), !0);
}
function el(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, n = Ie, r, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (n = Object.assign({}, Ie, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), r = this.localeData(), a = Qo(this, !s, n, r), s && (a = r.pastFuture(+this, a)), r.postformat(a);
}
var Qt = Math.abs;
function Ce(e) {
  return (e > 0) - (e < 0) || +e;
}
function $t() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Qt(this._milliseconds) / 1e3, t = Qt(this._days), s = Qt(this._months), n, r, a, i, o = this.asSeconds(), u, d, _, c;
  return o ? (n = J(e / 60), r = J(n / 60), e %= 60, n %= 60, a = J(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", d = Ce(this._months) !== Ce(o) ? "-" : "", _ = Ce(this._days) !== Ce(o) ? "-" : "", c = Ce(this._milliseconds) !== Ce(o) ? "-" : "", u + "P" + (a ? d + a + "Y" : "") + (s ? d + s + "M" : "") + (t ? _ + t + "D" : "") + (r || n || e ? "T" : "") + (r ? c + r + "H" : "") + (n ? c + n + "M" : "") + (e ? c + i + "S" : "")) : "P0D";
}
var D = Ht.prototype;
D.isValid = ja;
D.abs = Yo;
D.add = xo;
D.subtract = bo;
D.as = To;
D.asMilliseconds = Eo;
D.asSeconds = Wo;
D.asMinutes = Lo;
D.asHours = Po;
D.asDays = Fo;
D.asWeeks = No;
D.asMonths = Co;
D.asQuarters = Ao;
D.asYears = Io;
D.valueOf = Ro;
D._bubble = Oo;
D.clone = Ho;
D.get = Uo;
D.milliseconds = $o;
D.seconds = Vo;
D.minutes = Go;
D.hours = jo;
D.days = Bo;
D.weeks = Zo;
D.months = qo;
D.years = zo;
D.humanize = el;
D.toISOString = $t;
D.toString = $t;
D.toJSON = $t;
D.locale = Rn;
D.localeData = Wn;
D.toIsoString = Q(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  $t
);
D.lang = En;
y("X", 0, 0, "unix");
y("x", 0, 0, "valueOf");
f("x", Nt);
f("X", kr);
x("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
x("x", function(e, t, s) {
  s._d = new Date(v(e));
});
//! moment.js
l.version = "2.29.4";
er(T);
l.fn = h;
l.min = Ua;
l.max = $a;
l.now = Va;
l.utc = he;
l.unix = wo;
l.months = vo;
l.isDate = ut;
l.locale = Se;
l.invalid = Et;
l.duration = re;
l.isMoment = ne;
l.weekdays = Do;
l.parseZone = go;
l.localeData = we;
l.isDuration = kt;
l.monthsShort = ko;
l.weekdaysMin = So;
l.defineLocale = vs;
l.updateLocale = wa;
l.locales = ga;
l.weekdaysShort = Mo;
l.normalizeUnits = X;
l.relativeTimeRounding = Xo;
l.relativeTimeThreshold = Ko;
l.calendarFormat = mi;
l.prototype = h;
l.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
function Vt(e) {
  return e.split("-")[1];
}
function Vn(e) {
  return e === "y" ? "height" : "width";
}
function Ve(e) {
  return e.split("-")[0];
}
function Ts(e) {
  return ["top", "bottom"].includes(Ve(e)) ? "x" : "y";
}
function js(e, t, s) {
  let { reference: n, floating: r } = e;
  const a = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, o = Ts(t), u = Vn(o), d = n[u] / 2 - r[u] / 2, _ = o === "x";
  let c;
  switch (Ve(t)) {
    case "top":
      c = { x: a, y: n.y - r.height };
      break;
    case "bottom":
      c = { x: a, y: n.y + n.height };
      break;
    case "right":
      c = { x: n.x + n.width, y: i };
      break;
    case "left":
      c = { x: n.x - r.width, y: i };
      break;
    default:
      c = { x: n.x, y: n.y };
  }
  switch (Vt(t)) {
    case "start":
      c[o] -= d * (s && _ ? -1 : 1);
      break;
    case "end":
      c[o] += d * (s && _ ? -1 : 1);
  }
  return c;
}
const tl = (e, t, s) => Oe(void 0, null, function* () {
  const { placement: n = "bottom", strategy: r = "absolute", middleware: a = [], platform: i } = s, o = a.filter(Boolean), u = yield i.isRTL == null ? void 0 : i.isRTL(t);
  let d = yield i.getElementRects({ reference: e, floating: t, strategy: r }), { x: _, y: c } = js(d, n, u), m = n, w = {}, k = 0;
  for (let M = 0; M < o.length; M++) {
    const { name: b, fn: O } = o[M], { x: W, y: L, data: F, reset: q } = yield O({ x: _, y: c, initialPlacement: n, placement: m, strategy: r, middlewareData: w, rects: d, platform: i, elements: { reference: e, floating: t } });
    _ = W != null ? W : _, c = L != null ? L : c, w = Ne(V({}, w), { [b]: V(V({}, w[b]), F) }), q && k <= 50 && (k++, typeof q == "object" && (q.placement && (m = q.placement), q.rects && (d = q.rects === !0 ? yield i.getElementRects({ reference: e, floating: t, strategy: r }) : q.rects), { x: _, y: c } = js(d, m, u)), M = -1);
  }
  return { x: _, y: c, placement: m, strategy: r, middlewareData: w };
});
function sl(e) {
  return typeof e != "number" ? function(t) {
    return V({ top: 0, right: 0, bottom: 0, left: 0 }, t);
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function is(e) {
  return Ne(V({}, e), { top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height });
}
function nl(e, t) {
  return Oe(this, null, function* () {
    var s;
    t === void 0 && (t = {});
    const { x: n, y: r, platform: a, rects: i, elements: o, strategy: u } = e, { boundary: d = "clippingAncestors", rootBoundary: _ = "viewport", elementContext: c = "floating", altBoundary: m = !1, padding: w = 0 } = t, k = sl(w), M = o[m ? c === "floating" ? "reference" : "floating" : c], b = is(yield a.getClippingRect({ element: (s = yield a.isElement == null ? void 0 : a.isElement(M)) == null || s ? M : M.contextElement || (yield a.getDocumentElement == null ? void 0 : a.getDocumentElement(o.floating)), boundary: d, rootBoundary: _, strategy: u })), O = c === "floating" ? Ne(V({}, i.floating), { x: n, y: r }) : i.reference, W = yield a.getOffsetParent == null ? void 0 : a.getOffsetParent(o.floating), L = (yield a.isElement == null ? void 0 : a.isElement(W)) && (yield a.getScale == null ? void 0 : a.getScale(W)) || { x: 1, y: 1 }, F = is(a.convertOffsetParentRelativeRectToViewportRelativeRect ? yield a.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: O, offsetParent: W, strategy: u }) : O);
    return { top: (b.top - F.top + k.top) / L.y, bottom: (F.bottom - b.bottom + k.bottom) / L.y, left: (b.left - F.left + k.left) / L.x, right: (F.right - b.right + k.right) / L.x };
  });
}
const rl = ["top", "right", "bottom", "left"];
rl.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const al = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Tt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => al[t]);
}
function il(e, t, s) {
  s === void 0 && (s = !1);
  const n = Vt(e), r = Ts(e), a = Vn(r);
  let i = r === "x" ? n === (s ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Tt(i)), { main: i, cross: Tt(i) };
}
const ol = { start: "end", end: "start" };
function Xt(e) {
  return e.replace(/start|end/g, (t) => ol[t]);
}
const ll = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, fn(s) {
    return Oe(this, null, function* () {
      var n;
      const { placement: r, middlewareData: a, rects: i, initialPlacement: o, platform: u, elements: d } = s, Je = e, { mainAxis: _ = !0, crossAxis: c = !0, fallbackPlacements: m, fallbackStrategy: w = "bestFit", fallbackAxisSideDirection: k = "none", flipAlignment: M = !0 } = Je, b = Is(Je, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]), O = Ve(r), W = Ve(o) === o, L = yield u.isRTL == null ? void 0 : u.isRTL(d.floating), F = m || (W || !M ? [Tt(o)] : function(H) {
        const z = Tt(H);
        return [Xt(H), z, Xt(z)];
      }(o));
      m || k === "none" || F.push(...function(H, z, ae, K) {
        const Z = Vt(H);
        let U = function(ke, Fe, ft) {
          const Qe = ["left", "right"], Xe = ["right", "left"], mt = ["top", "bottom"], _t = ["bottom", "top"];
          switch (ke) {
            case "top":
            case "bottom":
              return ft ? Fe ? Xe : Qe : Fe ? Qe : Xe;
            case "left":
            case "right":
              return Fe ? mt : _t;
            default:
              return [];
          }
        }(Ve(H), ae === "start", K);
        return Z && (U = U.map((ke) => ke + "-" + Z), z && (U = U.concat(U.map(Xt)))), U;
      }(o, M, k, L));
      const q = [o, ...F], Pe = yield nl(s, b), be = [];
      let ve = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (_ && be.push(Pe[O]), c) {
        const { main: H, cross: z } = il(r, i, L);
        be.push(Pe[H], Pe[z]);
      }
      if (ve = [...ve, { placement: r, overflows: be }], !be.every((H) => H <= 0)) {
        var qe, ze;
        const H = (((qe = a.flip) == null ? void 0 : qe.index) || 0) + 1, z = q[H];
        if (z)
          return { data: { index: H, overflows: ve }, reset: { placement: z } };
        let ae = (ze = ve.filter((K) => K.overflows[0] <= 0).sort((K, Z) => K.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : ze.placement;
        if (!ae)
          switch (w) {
            case "bestFit": {
              var Ze;
              const K = (Ze = ve.map((Z) => [Z.placement, Z.overflows.filter((U) => U > 0).reduce((U, ke) => U + ke, 0)]).sort((Z, U) => Z[1] - U[1])[0]) == null ? void 0 : Ze[0];
              K && (ae = K);
              break;
            }
            case "initialPlacement":
              ae = o;
          }
        if (r !== ae)
          return { reset: { placement: ae } };
      }
      return {};
    });
  } };
}, ul = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, fn(s) {
    return Oe(this, null, function* () {
      const { x: n, y: r } = s, a = yield function(i, o) {
        return Oe(this, null, function* () {
          const { placement: u, platform: d, elements: _ } = i, c = yield d.isRTL == null ? void 0 : d.isRTL(_.floating), m = Ve(u), w = Vt(u), k = Ts(u) === "x", M = ["left", "top"].includes(m) ? -1 : 1, b = c && k ? -1 : 1, O = typeof o == "function" ? o(i) : o;
          let { mainAxis: W, crossAxis: L, alignmentAxis: F } = typeof O == "number" ? { mainAxis: O, crossAxis: 0, alignmentAxis: null } : V({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, O);
          return w && typeof F == "number" && (L = w === "end" ? -1 * F : F), k ? { x: L * b, y: W * M } : { x: W * M, y: L * b };
        });
      }(s, e);
      return { x: n + a.x, y: r + a.y, data: a };
    });
  } };
};
function j(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function oe(e) {
  return j(e).getComputedStyle(e);
}
const Bs = Math.min, nt = Math.max, Rt = Math.round;
function Gn(e) {
  const t = oe(e);
  let s = parseFloat(t.width), n = parseFloat(t.height);
  const r = e.offsetWidth, a = e.offsetHeight, i = Rt(s) !== r || Rt(n) !== a;
  return i && (s = r, n = a), { width: s, height: n, fallback: i };
}
function xe(e) {
  return Bn(e) ? (e.nodeName || "").toLowerCase() : "";
}
let gt;
function jn() {
  if (gt)
    return gt;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (gt = e.brands.map((t) => t.brand + "/" + t.version).join(" "), gt) : navigator.userAgent;
}
function le(e) {
  return e instanceof j(e).HTMLElement;
}
function te(e) {
  return e instanceof j(e).Element;
}
function Bn(e) {
  return e instanceof j(e).Node;
}
function qs(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof j(e).ShadowRoot || e instanceof ShadowRoot;
}
function Gt(e) {
  const { overflow: t, overflowX: s, overflowY: n, display: r } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + s) && !["inline", "contents"].includes(r);
}
function hl(e) {
  return ["table", "td", "th"].includes(xe(e));
}
function os(e) {
  const t = /firefox/i.test(jn()), s = oe(e), n = s.backdropFilter || s.WebkitBackdropFilter;
  return s.transform !== "none" || s.perspective !== "none" || !!n && n !== "none" || t && s.willChange === "filter" || t && !!s.filter && s.filter !== "none" || ["transform", "perspective"].some((r) => s.willChange.includes(r)) || ["paint", "layout", "strict", "content"].some((r) => {
    const a = s.contain;
    return a != null && a.includes(r);
  });
}
function ls() {
  return /^((?!chrome|android).)*safari/i.test(jn());
}
function Rs(e) {
  return ["html", "body", "#document"].includes(xe(e));
}
function qn(e) {
  return te(e) ? e : e.contextElement;
}
const zn = { x: 1, y: 1 };
function Ge(e) {
  const t = qn(e);
  if (!le(t))
    return zn;
  const s = t.getBoundingClientRect(), { width: n, height: r, fallback: a } = Gn(t);
  let i = (a ? Rt(s.width) : s.width) / n, o = (a ? Rt(s.height) : s.height) / r;
  return i && Number.isFinite(i) || (i = 1), o && Number.isFinite(o) || (o = 1), { x: i, y: o };
}
function We(e, t, s, n) {
  var r, a;
  t === void 0 && (t = !1), s === void 0 && (s = !1);
  const i = e.getBoundingClientRect(), o = qn(e);
  let u = zn;
  t && (n ? te(n) && (u = Ge(n)) : u = Ge(e));
  const d = o ? j(o) : window, _ = ls() && s;
  let c = (i.left + (_ && ((r = d.visualViewport) == null ? void 0 : r.offsetLeft) || 0)) / u.x, m = (i.top + (_ && ((a = d.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / u.y, w = i.width / u.x, k = i.height / u.y;
  if (o) {
    const M = j(o), b = n && te(n) ? j(n) : n;
    let O = M.frameElement;
    for (; O && n && b !== M; ) {
      const W = Ge(O), L = O.getBoundingClientRect(), F = getComputedStyle(O);
      L.x += (O.clientLeft + parseFloat(F.paddingLeft)) * W.x, L.y += (O.clientTop + parseFloat(F.paddingTop)) * W.y, c *= W.x, m *= W.y, w *= W.x, k *= W.y, c += L.x, m += L.y, O = j(O).frameElement;
    }
  }
  return { width: w, height: k, top: m, right: c + w, bottom: m + k, left: c, x: c, y: m };
}
function Ye(e) {
  return ((Bn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function jt(e) {
  return te(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Zn(e) {
  return We(Ye(e)).left + jt(e).scrollLeft;
}
function lt(e) {
  if (xe(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || qs(e) && e.host || Ye(e);
  return qs(t) ? t.host : t;
}
function Jn(e) {
  const t = lt(e);
  return Rs(t) ? t.ownerDocument.body : le(t) && Gt(t) ? t : Jn(t);
}
function rt(e, t) {
  var s;
  t === void 0 && (t = []);
  const n = Jn(e), r = n === ((s = e.ownerDocument) == null ? void 0 : s.body), a = j(n);
  return r ? t.concat(a, a.visualViewport || [], Gt(n) ? n : []) : t.concat(n, rt(n));
}
function zs(e, t, s) {
  let n;
  if (t === "viewport")
    n = function(i, o) {
      const u = j(i), d = Ye(i), _ = u.visualViewport;
      let c = d.clientWidth, m = d.clientHeight, w = 0, k = 0;
      if (_) {
        c = _.width, m = _.height;
        const M = ls();
        (!M || M && o === "fixed") && (w = _.offsetLeft, k = _.offsetTop);
      }
      return { width: c, height: m, x: w, y: k };
    }(e, s);
  else if (t === "document")
    n = function(i) {
      const o = Ye(i), u = jt(i), d = i.ownerDocument.body, _ = nt(o.scrollWidth, o.clientWidth, d.scrollWidth, d.clientWidth), c = nt(o.scrollHeight, o.clientHeight, d.scrollHeight, d.clientHeight);
      let m = -u.scrollLeft + Zn(i);
      const w = -u.scrollTop;
      return oe(d).direction === "rtl" && (m += nt(o.clientWidth, d.clientWidth) - _), { width: _, height: c, x: m, y: w };
    }(Ye(e));
  else if (te(t))
    n = function(i, o) {
      const u = We(i, !0, o === "fixed"), d = u.top + i.clientTop, _ = u.left + i.clientLeft, c = le(i) ? Ge(i) : { x: 1, y: 1 };
      return { width: i.clientWidth * c.x, height: i.clientHeight * c.y, x: _ * c.x, y: d * c.y };
    }(t, s);
  else {
    const i = V({}, t);
    if (ls()) {
      var r, a;
      const o = j(e);
      i.x -= ((r = o.visualViewport) == null ? void 0 : r.offsetLeft) || 0, i.y -= ((a = o.visualViewport) == null ? void 0 : a.offsetTop) || 0;
    }
    n = i;
  }
  return is(n);
}
function Zs(e, t) {
  return le(e) && oe(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function Js(e, t) {
  const s = j(e);
  let n = Zs(e, t);
  for (; n && hl(n) && oe(n).position === "static"; )
    n = Zs(n, t);
  return n && (xe(n) === "html" || xe(n) === "body" && oe(n).position === "static" && !os(n)) ? s : n || function(r) {
    let a = lt(r);
    for (; le(a) && !Rs(a); ) {
      if (os(a))
        return a;
      a = lt(a);
    }
    return null;
  }(e) || s;
}
function dl(e, t, s) {
  const n = le(t), r = Ye(t), a = We(e, !0, s === "fixed", t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (n || !n && s !== "fixed")
    if ((xe(t) !== "body" || Gt(r)) && (i = jt(t)), le(t)) {
      const u = We(t, !0);
      o.x = u.x + t.clientLeft, o.y = u.y + t.clientTop;
    } else
      r && (o.x = Zn(r));
  return { x: a.left + i.scrollLeft - o.x, y: a.top + i.scrollTop - o.y, width: a.width, height: a.height };
}
const cl = { getClippingRect: function(e) {
  let { element: t, boundary: s, rootBoundary: n, strategy: r } = e;
  const a = s === "clippingAncestors" ? function(d, _) {
    const c = _.get(d);
    if (c)
      return c;
    let m = rt(d).filter((b) => te(b) && xe(b) !== "body"), w = null;
    const k = oe(d).position === "fixed";
    let M = k ? lt(d) : d;
    for (; te(M) && !Rs(M); ) {
      const b = oe(M), O = os(M);
      b.position === "fixed" ? w = null : (k ? O || w : O || b.position !== "static" || !w || !["absolute", "fixed"].includes(w.position)) ? w = b : m = m.filter((W) => W !== M), M = lt(M);
    }
    return _.set(d, m), m;
  }(t, this._c) : [].concat(s), i = [...a, n], o = i[0], u = i.reduce((d, _) => {
    const c = zs(t, _, r);
    return d.top = nt(c.top, d.top), d.right = Bs(c.right, d.right), d.bottom = Bs(c.bottom, d.bottom), d.left = nt(c.left, d.left), d;
  }, zs(t, o, r));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: s, strategy: n } = e;
  const r = le(s), a = Ye(s);
  if (s === a)
    return t;
  let i = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((r || !r && n !== "fixed") && ((xe(s) !== "body" || Gt(a)) && (i = jt(s)), le(s))) {
    const d = We(s);
    o = Ge(s), u.x = d.x + s.clientLeft, u.y = d.y + s.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - i.scrollLeft * o.x + u.x, y: t.y * o.y - i.scrollTop * o.y + u.y };
}, isElement: te, getDimensions: function(e) {
  return le(e) ? Gn(e) : e.getBoundingClientRect();
}, getOffsetParent: Js, getDocumentElement: Ye, getScale: Ge, getElementRects(e) {
  return Oe(this, null, function* () {
    let { reference: t, floating: s, strategy: n } = e;
    const r = this.getOffsetParent || Js, a = this.getDimensions;
    return { reference: dl(t, yield r(s), n), floating: V({ x: 0, y: 0 }, yield a(s)) };
  });
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => oe(e).direction === "rtl" };
function fl(e, t, s, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: r = !0, ancestorResize: a = !0, elementResize: i = !0, animationFrame: o = !1 } = n, u = r && !o, d = u || a ? [...te(e) ? rt(e) : e.contextElement ? rt(e.contextElement) : [], ...rt(t)] : [];
  d.forEach((w) => {
    u && w.addEventListener("scroll", s, { passive: !0 }), a && w.addEventListener("resize", s);
  });
  let _, c = null;
  if (i) {
    let w = !0;
    c = new ResizeObserver(() => {
      w || s(), w = !1;
    }), te(e) && !o && c.observe(e), te(e) || !e.contextElement || o || c.observe(e.contextElement), c.observe(t);
  }
  let m = o ? We(e) : null;
  return o && function w() {
    const k = We(e);
    !m || k.x === m.x && k.y === m.y && k.width === m.width && k.height === m.height || s(), m = k, _ = requestAnimationFrame(w);
  }(), s(), () => {
    var w;
    d.forEach((k) => {
      u && k.removeEventListener("scroll", s), a && k.removeEventListener("resize", s);
    }), (w = c) == null || w.disconnect(), c = null, o && cancelAnimationFrame(_);
  };
}
const ml = (e, t, s) => {
  const n = /* @__PURE__ */ new Map(), r = V({ platform: cl }, s), a = Ne(V({}, r.platform), { _c: n });
  return tl(e, t, Ne(V({}, r), { platform: a }));
};
class _l {
  constructor(t) {
    p(this, "options");
    p(this, "container");
    p(this, "dates");
    p(this, "months");
    p(this, "years");
    p(this, "nowDay");
    p(this, "nowMonth");
    p(this, "quickActions");
    p(this, "locale");
    this.options = Object.assign(this, t), this.container = this.options.container, this.dates = this.options.dates, this.months = this.options.months, this.years = this.options.years, this.nowDay = this.options.nowDay, this.nowMonth = this.options.nowMonth, this.quickActions = this.options.quickActions, this.locale = this.options.locale;
  }
  render() {
    var t, s, n, r, a, i, o, u, d, _, c;
    this.container.innerHTML += `<div class="calendarify">
    <div class="quick-actions ${this.quickActions ? "" : "d-none"}">
      <button data-action="today">${(n = (s = (t = this.locale.lang) == null ? void 0 : t.ui) == null ? void 0 : s.quickActions) == null ? void 0 : n.today}</button>
      <button data-action="tomorrow">${(i = (a = (r = this.locale.lang) == null ? void 0 : r.ui) == null ? void 0 : a.quickActions) == null ? void 0 : i.tomorrow}</button>
      <button data-action="in-2-days">${(d = (u = (o = this.locale.lang) == null ? void 0 : o.ui) == null ? void 0 : u.quickActions) == null ? void 0 : d.inTwoDays}</button>
    </div>
    <nav class="navigation">
      <ul>
        <li>
          <button data-action="prev" type="button"><i class="fas fa-fw fa-chevron-left"></i></button>
        </li>
        <li>
          <button data-action="expand" type="button">-</button>
          <button data-action="year-range" class="d-none" type="button">-</button>
        </li>
        <li>
          <button data-action="next" type="button"><i class="fas fa-fw fa-chevron-right"></i></button>
        </li>
      </ul>
    </nav>
    <div class="calendar">
      <ul class="days-wrapper wrapper">
      ${(c = (_ = this.locale.lang) == null ? void 0 : _.weekdays) == null ? void 0 : c.map((m) => `<li>${m.slice(0, 3)}</li>`).join("")}
      </ul>
      <ul class="dates-wrapper wrapper">
          ${this.dates.map((m) => `<li><button ${m.disabled ? "disabled" : ""} type="button" class="date-button ${this.getHolidayClass({ date: m.date, nowMonth: this.nowMonth })} ${this.nowDay == String(m.date) ? "active" : ""}">${m.date}</button></li>`).join("")}
      </ul>
      <ul class="months-wrapper wrapper d-none">
        ${this.months.map((m, w) => {
      var b;
      const k = (b = this.locale.lang) == null ? void 0 : b.months[w].slice(0, 3), M = l().format("M");
      return `<li><button class="${m == M ? "active" : ""}" data-date="${m}" type="button">${k}</button></li>`;
    }).join("")}
      </ul>
      <ul class="years-wrapper wrapper d-none">
        ${this.years.map((m) => `<li><button data-date="${m}" type="button">${m}</button></li>`).join("")}
      </ul>
    </div>
  </div>`;
  }
  getHolidayClass(t) {
    const { nowMonth: s, date: n } = t, r = new Date(`${s}-${n}`).getDay(), a = r === 0, i = r === 6;
    let o = "";
    return a ? o = "holiday" : i && (o = "pre-holiday"), o;
  }
}
class pl {
  constructor(t, s) {
    p(this, "options");
    p(this, "locale");
    p(this, "startDate");
    p(this, "accentColor", "#0090FC");
    p(this, "isDark", !1);
    p(this, "zIndex", 1e3);
    p(this, "customClass", []);
    p(this, "quickActions", !0);
    p(this, "onChange");
    p(this, "_container");
    p(this, "_calendarWrapper");
    p(this, "_datepickerInput");
    p(this, "_datesWrapperEl");
    p(this, "_monthsWrapperEl");
    p(this, "_yearsWrapperEl");
    p(this, "_months");
    p(this, "_dates");
    p(this, "_nowMonth");
    p(this, "_nowDay");
    p(this, "_nowYear");
    p(this, "_dateButtons");
    p(this, "_expandButton");
    p(this, "_prevButton");
    p(this, "_nextButton");
    p(this, "_date");
    p(this, "_isExpanded", !1);
    p(this, "_expandedMode", "months");
    p(this, "_outputDate");
    p(this, "_quickButtons");
    p(this, "_wrapperEls");
    p(this, "_yearRangeButton");
    p(this, "_systemFormat", "YYYY-MM-DD");
    p(this, "_helpers");
    p(this, "_inputSelector");
    p(this, "_wasExecuted", !1);
    p(this, "_isSetted", !1);
    var r, a, i, o, u, d, _, c, m, w, k, M, b, O, W, L, F, q, Pe, be, ve, qe, ze, Ze, Je, H, z, ae, K, Z, U, ke, Fe, ft, Qe, Xe, mt, _t, Es, Ws, Ls, Ps, Fs, Ns;
    const n = document.documentElement;
    this.options = Object.assign(this, s), n.style.setProperty("--accentColor", (r = this.options.accentColor) != null ? r : this.accentColor), this.onChange = this.options.onChange, this._inputSelector = t, this.locale = {
      format: (o = (i = (a = this.options) == null ? void 0 : a.locale) == null ? void 0 : i.format) != null ? o : this._systemFormat,
      lang: {
        code: (c = (_ = (d = (u = this.options) == null ? void 0 : u.locale) == null ? void 0 : d.lang) == null ? void 0 : _.code) != null ? c : "en",
        ui: {
          quickActions: {
            today: (O = (b = (M = (k = (w = (m = this.options) == null ? void 0 : m.locale) == null ? void 0 : w.lang) == null ? void 0 : k.ui) == null ? void 0 : M.quickActions) == null ? void 0 : b.today) != null ? O : "Today",
            tomorrow: (be = (Pe = (q = (F = (L = (W = this.options) == null ? void 0 : W.locale) == null ? void 0 : L.lang) == null ? void 0 : F.ui) == null ? void 0 : q.quickActions) == null ? void 0 : Pe.tomorrow) != null ? be : "Tomorrow",
            inTwoDays: (H = (Je = (Ze = (ze = (qe = (ve = this.options) == null ? void 0 : ve.locale) == null ? void 0 : qe.lang) == null ? void 0 : ze.ui) == null ? void 0 : Ze.quickActions) == null ? void 0 : Je.inTwoDays) != null ? H : "In 2 Days"
          }
        },
        months: (Z = (K = (ae = (z = this.options) == null ? void 0 : z.locale) == null ? void 0 : ae.lang) == null ? void 0 : K.months) != null ? Z : l.months(),
        weekdays: (ft = (Fe = (ke = (U = this.options) == null ? void 0 : U.locale) == null ? void 0 : ke.lang) == null ? void 0 : Fe.weekdays) != null ? ft : l.weekdays()
      }
    }, this.startDate = (Qe = this.options.startDate) != null ? Qe : l().format(this._systemFormat), this._date = (Xe = this.options.startDate) != null ? Xe : this.startDate, this._months = [];
    for (let Bt = 0; Bt < 12; Bt++)
      this._months.push(String(Bt + 1));
    this._nowMonth = l(this._date).format("YYYY-MM"), this._nowDay = l(this._date).format("D"), this._nowYear = l(this._date).format("YYYY"), this._outputDate = l(this._date).format(this.locale.format), this._dates = [], this.loopDaysMonths(), this._helpers = new _l({
      container: (mt = document.querySelector(t)) == null ? void 0 : mt.parentElement,
      dates: this._dates,
      months: this._months,
      years: this._years,
      nowMonth: this._nowMonth,
      nowDay: this._nowDay,
      quickActions: this.options.quickActions,
      locale: this.options.locale
    }), this._helpers.render(), l.updateLocale((Ws = (Es = (_t = this.options) == null ? void 0 : _t.locale) == null ? void 0 : Es.lang) == null ? void 0 : Ws.code, { months: (Ps = (Ls = this.options.locale) == null ? void 0 : Ls.lang) == null ? void 0 : Ps.months, weekdays: (Ns = (Fs = this.options.locale) == null ? void 0 : Fs.lang) == null ? void 0 : Ns.weekdays }), this._container = document.querySelector(".calendarify"), this._datepickerInput = document.querySelector(t), this._datesWrapperEl = this._container.querySelector(".dates-wrapper"), this._monthsWrapperEl = this._container.querySelector(".months-wrapper"), this._yearsWrapperEl = this._container.querySelector(".years-wrapper"), this._expandButton = this._container.querySelector('.navigation button[data-action="expand"]'), this._dateButtons = this._container.querySelectorAll(".date-button"), this._prevButton = this._container.querySelector('.navigation button[data-action="prev"]'), this._nextButton = this._container.querySelector('.navigation button[data-action="next"]'), this._calendarWrapper = this._container.querySelector(".calendar"), this._quickButtons = this._container.querySelectorAll(".quick-actions button"), this._wrapperEls = this._calendarWrapper.querySelectorAll(".wrapper:not(:last-child, :nth-child(3))"), this._yearRangeButton = this._container.querySelector('.navigation button[data-action="year-range"]');
  }
  init() {
    l.suppressDeprecationWarnings = !0, this.showValue(), this.changeState(), this._datepickerInput.spellcheck = !1, this._datepickerInput.addEventListener("input", (t) => {
      const s = t.target;
      s.value = this._outputDate;
    }), this.stylingContainer(), this._prevButton.addEventListener("click", this.prevMonth.bind(this)), this._nextButton.addEventListener("click", this.nextMonth.bind(this)), this._expandButton.addEventListener("click", this.expand.bind(this)), this._datepickerInput.addEventListener("focus", () => {
      this._wasExecuted = !0, this._container.classList.add("show");
    }), window.addEventListener("click", this.hideOnOutsideClick.bind(this)), this._quickButtons.forEach((t) => t.addEventListener("click", this.quickAction.bind(this)));
  }
  stylingContainer() {
    var n, r, a;
    (n = this.options) != null && n.isDark && this._container.setAttribute("data-theme", "dark"), (r = this.options) != null && r.zIndex && this._container.style.setProperty("--z-index", String(this.options.zIndex)), (a = this.options) != null && a.customClass && this.customClass.forEach((i) => this._container.classList.add(i));
    const { _datepickerInput: t, _container: s } = this;
    fl(t, s, () => {
      ml(t, s, {
        placement: "bottom-start",
        middleware: [ul(10), ll()]
      }).then(({ x: i, y: o }) => {
        Object.assign(this._container.style, { top: `${o}px`, left: `${i}px` });
      });
    });
  }
  get _years() {
    const t = [], s = l(this._date), n = l(this._date).add(11, "y");
    for (; n.diff(s, "years") >= 0; )
      t.push(s.format("YYYY")), s.add(1, "year");
    return t;
  }
  quickAction(t) {
    switch (t.target.getAttribute("data-action")) {
      case "today":
        this._date = this.startDate;
        break;
      case "tomorrow":
        this._date = l(this.startDate).add(1, "days").format(this._systemFormat);
        break;
      default:
        this._date = l(this.startDate).add(2, "days").format(this._systemFormat);
        break;
    }
    this.showValue(), this.changeState(), this.resetUI();
  }
  showValue() {
    this._outputDate = l(this._date).format(this.locale.format), this._datepickerInput.value = this._outputDate;
  }
  hideOnOutsideClick(t) {
    const s = t.target;
    !s.closest(this._inputSelector) && !s.closest(".calendarify") && (this._container.classList.remove("show"), this.doneState(), this._wasExecuted = !1);
  }
  expand() {
    this._isExpanded = !0, this._expandButton.textContent = l(this._date).format("YYYY"), this._wrapperEls.forEach((t) => t.classList.add("d-none")), this._monthsWrapperEl.classList.remove("d-none"), this.showMonths();
  }
  showMonths() {
    this._expandButton.classList.add("d-none"), this._yearRangeButton.classList.remove("d-none");
    const t = this._monthsWrapperEl.querySelectorAll("button");
    t.forEach((s) => s.addEventListener("click", (n) => this.changeMonth(n, t))), this._yearRangeButton.addEventListener("click", this.showYears.bind(this));
  }
  showYears() {
    this._expandedMode = "years", this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.remove("d-none"), this._yearsWrapperEl.innerHTML = `${this._years.map((s) => `<li><button class="${s == this._nowYear ? "active" : ""}" data-date="${s}" type="button">${s}</button></li>`).join("")}`, this._yearsWrapperEl.querySelectorAll("button").forEach((s) => s.addEventListener("click", this.changeYear.bind(this))), this.changeState();
  }
  changeYear(t) {
    const n = t.target.getAttribute("data-date"), r = l(this._nowMonth).format("MM");
    this._date = l(`${n}-${r}-${this._nowDay}`).format(this._systemFormat), this._nowYear = n, this._yearsWrapperEl.classList.add("d-none"), this._monthsWrapperEl.classList.remove("d-none"), this._expandedMode = "months", this.changeState();
  }
  changeMonth(t, s) {
    this._wrapperEls.forEach((o) => o.classList.remove("d-none")), s.forEach((o) => o.classList.remove("active"));
    const n = t.target, r = n.getAttribute("data-date"), a = l(this._date).format("YYYY"), i = l(new Date(`${a} ${r} ${this._nowDay}`));
    this._date = l(i).format(this._systemFormat), n.classList.add("active"), this._isExpanded = !1, this._expandedMode = "months", this.changeState(), this.resetUI();
  }
  doneState() {
    this._container.classList.remove("show");
    const t = {
      date: {
        default: l(this._outputDate).toDate(),
        iso: l(this._outputDate).toISOString()
      },
      formatted: {
        relative: l(this._outputDate).fromNow(),
        calendar: l(this._outputDate).calendar()
      },
      unix: {
        seconds: l(this._outputDate).unix(),
        milliseconds: +l(this._outputDate)
      },
      locale: this.locale,
      partials: {
        day: l(this._outputDate).format("DD"),
        month: l(this._outputDate).format("MM"),
        year: l(this._outputDate).format("YYYY")
      }
    };
    this.resetUI();
    const { onChange: s, _wasExecuted: n, _isSetted: r } = this;
    s && n && r && (s(t), this._isSetted = !1);
  }
  resetUI() {
    this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._wrapperEls.forEach((t) => t.classList.remove("d-none")), this._isExpanded = !1, this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._expandButton.classList.remove("d-none"), this._yearRangeButton.classList.add("d-none"), this.changeState();
  }
  changeState() {
    var n, r;
    this._dates = [], this._nowMonth = l(this._date).format("YYYY-MM"), this._nowDay = l(this._date).format("D"), this.loopDaysMonths();
    const t = l(this._nowMonth).format("M"), s = l(this._nowMonth).format("YYYY");
    switch (this._expandButton.textContent = `${(n = this.locale.lang) == null ? void 0 : n.months[+t - 1]} ${s}`, this._expandedMode) {
      case "years":
        this._yearRangeButton.textContent = `${this._years[0]} - ${this._years[this._years.length - 1]}`;
        break;
      default:
        this._yearRangeButton.textContent = l(this._date).format("YYYY");
        break;
    }
    if (this.renderDates(), this._dateButtons = this._datesWrapperEl.querySelectorAll(".date-button"), this._dateButtons.forEach((a) => a.addEventListener("click", this.setDate.bind(this))), this._expandedMode == "months" && this._dates.slice(0, 7).every((i) => i.disabled))
      for (let i = 0; i < 7; i++)
        (r = this._dateButtons[i].parentElement) == null || r.classList.add("d-none");
  }
  loopDaysMonths() {
    const t = l(this._date).daysInMonth(), s = l(new Date(this._nowMonth)).isoWeekday(), n = l(this._date).subtract(1, "months").daysInMonth();
    for (let r = 1; r <= s; r++)
      this._dates.unshift({ disabled: !0, date: String(n + 1 - r) });
    for (let r = 1; r <= t; r++)
      this._dates.push({ disabled: !1, date: String(r) });
  }
  renderDates() {
    this._datesWrapperEl.innerHTML = `${this._dates.map((t) => `<li><button ${t.disabled ? "disabled" : ""} type="button" class="date-button ${this._helpers.getHolidayClass({ date: t.date, nowMonth: this._nowMonth })} ${this._nowDay == String(t.date) ? "active" : ""}">${t.date}</button></li>`).join("")}`;
  }
  setDate(t) {
    this._isSetted = !0;
    const s = t.target;
    this._dateButtons.forEach((n) => n.classList.remove("active")), this._nowDay = String(s.textContent), this._date = `${l(`${this._nowMonth}-${this._nowDay}`).format(this._systemFormat)}`, this.showValue(), s.classList.add("active");
  }
  prevMonth() {
    if (this._isExpanded)
      switch (this._expandedMode) {
        case "months":
          this._date = l(`${this._nowMonth}-${this._nowDay}`).subtract(1, "years").format(this._systemFormat);
          break;
        default:
          this._date = l(`${this._nowMonth}-${this._nowDay}`).subtract(10, "years").format(this._systemFormat), this.showYears();
          break;
      }
    else
      this._date = l(`${this._nowMonth}-${this._nowDay}`).subtract(1, "months").format(this._systemFormat);
    this.changeState();
  }
  nextMonth() {
    if (this._isExpanded)
      switch (this._expandedMode) {
        case "months":
          this._date = l(`${this._nowMonth}-${this._nowDay}`).add(1, "years").format(this._systemFormat);
          break;
        default:
          this._date = l(`${this._nowMonth}-${this._nowDay}`).add(10, "years").format(this._systemFormat), this.showYears();
          break;
      }
    else
      this._date = l(`${this._nowMonth}-${this._nowDay}`).add(1, "months").format(this._systemFormat);
    this.changeState();
  }
}
export {
  pl as default
};
