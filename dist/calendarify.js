var Ws = Object.defineProperty;
var Rs = (e, t, s) => t in e ? Ws(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var g = (e, t, s) => (Rs(e, typeof t != "symbol" ? t + "" : t, s), s);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ft;
function o() {
  return Ft.apply(null, arguments);
}
function Es(e) {
  Ft = e;
}
function U(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ie(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function w(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function dt(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (w(e, t))
      return !1;
  return !0;
}
function E(e) {
  return e === void 0;
}
function X(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Oe(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Lt(e, t) {
  var s = [], a, r = e.length;
  for (a = 0; a < r; ++a)
    s.push(t(e[a], a));
  return s;
}
function te(e, t) {
  for (var s in t)
    w(t, s) && (e[s] = t[s]);
  return w(t, "toString") && (e.toString = t.toString), w(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function j(e, t, s, a) {
  return is(e, t, s, a, !0).utc();
}
function Ps() {
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
function f(e) {
  return e._pf == null && (e._pf = Ps()), e._pf;
}
var at;
Array.prototype.some ? at = Array.prototype.some : at = function(e) {
  var t = Object(this), s = t.length >>> 0, a;
  for (a = 0; a < s; a++)
    if (a in t && e.call(this, t[a], a, t))
      return !0;
  return !1;
};
function ht(e) {
  if (e._isValid == null) {
    var t = f(e), s = at.call(t.parsedDateParts, function(r) {
      return r != null;
    }), a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s);
    if (e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = a;
    else
      return a;
  }
  return e._isValid;
}
function He(e) {
  var t = j(NaN);
  return e != null ? te(f(t), e) : f(t).userInvalidated = !0, t;
}
var Wt = o.momentProperties = [], Ke = !1;
function ct(e, t) {
  var s, a, r, n = Wt.length;
  if (E(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), E(t._i) || (e._i = t._i), E(t._f) || (e._f = t._f), E(t._l) || (e._l = t._l), E(t._strict) || (e._strict = t._strict), E(t._tzm) || (e._tzm = t._tzm), E(t._isUTC) || (e._isUTC = t._isUTC), E(t._offset) || (e._offset = t._offset), E(t._pf) || (e._pf = f(t)), E(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      a = Wt[s], r = t[a], E(r) || (e[a] = r);
  return e;
}
function be(e) {
  ct(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Ke === !1 && (Ke = !0, o.updateOffset(this), Ke = !1);
}
function H(e) {
  return e instanceof be || e != null && e._isAMomentObject != null;
}
function Ct(e) {
  o.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function C(e, t) {
  var s = !0;
  return te(function() {
    if (o.deprecationHandler != null && o.deprecationHandler(null, e), s) {
      var a = [], r, n, i, d = arguments.length;
      for (n = 0; n < d; n++) {
        if (r = "", typeof arguments[n] == "object") {
          r += `
[` + n + "] ";
          for (i in arguments[0])
            w(arguments[0], i) && (r += i + ": " + arguments[0][i] + ", ");
          r = r.slice(0, -2);
        } else
          r = arguments[n];
        a.push(r);
      }
      Ct(
        e + `
Arguments: ` + Array.prototype.slice.call(a).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Rt = {};
function It(e, t) {
  o.deprecationHandler != null && o.deprecationHandler(e, t), Rt[e] || (Ct(t), Rt[e] = !0);
}
o.suppressDeprecationWarnings = !1;
o.deprecationHandler = null;
function q(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Ns(e) {
  var t, s;
  for (s in e)
    w(e, s) && (t = e[s], q(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function rt(e, t) {
  var s = te({}, e), a;
  for (a in t)
    w(t, a) && (ie(e[a]) && ie(t[a]) ? (s[a] = {}, te(s[a], e[a]), te(s[a], t[a])) : t[a] != null ? s[a] = t[a] : delete s[a]);
  for (a in e)
    w(e, a) && !w(t, a) && ie(e[a]) && (s[a] = te({}, s[a]));
  return s;
}
function ft(e) {
  e != null && this.set(e);
}
var nt;
Object.keys ? nt = Object.keys : nt = function(e) {
  var t, s = [];
  for (t in e)
    w(e, t) && s.push(t);
  return s;
};
var Fs = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Ls(e, t, s) {
  var a = this._calendar[e] || this._calendar.sameElse;
  return q(a) ? a.call(t, s) : a;
}
function G(e, t, s) {
  var a = "" + Math.abs(e), r = t - a.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a;
}
var _t = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, We = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, et = {}, ce = {};
function h(e, t, s, a) {
  var r = a;
  typeof a == "string" && (r = function() {
    return this[a]();
  }), e && (ce[e] = r), t && (ce[t[0]] = function() {
    return G(r.apply(this, arguments), t[1], t[2]);
  }), s && (ce[s] = function() {
    return this.localeData().ordinal(
      r.apply(this, arguments),
      e
    );
  });
}
function Cs(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Is(e) {
  var t = e.match(_t), s, a;
  for (s = 0, a = t.length; s < a; s++)
    ce[t[s]] ? t[s] = ce[t[s]] : t[s] = Cs(t[s]);
  return function(r) {
    var n = "", i;
    for (i = 0; i < a; i++)
      n += q(t[i]) ? t[i].call(r, e) : t[i];
    return n;
  };
}
function Ee(e, t) {
  return e.isValid() ? (t = At(t, e.localeData()), et[t] = et[t] || Is(t), et[t](e)) : e.localeData().invalidDate();
}
function At(e, t) {
  var s = 5;
  function a(r) {
    return t.longDateFormat(r) || r;
  }
  for (We.lastIndex = 0; s >= 0 && We.test(e); )
    e = e.replace(
      We,
      a
    ), We.lastIndex = 0, s -= 1;
  return e;
}
var As = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Us(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(_t).map(function(a) {
    return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a;
  }).join(""), this._longDateFormat[e]);
}
var Hs = "Invalid date";
function $s() {
  return this._invalidDate;
}
var Vs = "%d", Gs = /\d{1,2}/;
function js(e) {
  return this._ordinal.replace("%d", e);
}
var qs = {
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
function Bs(e, t, s, a) {
  var r = this._relativeTime[s];
  return q(r) ? r(e, t, s, a) : r.replace(/%d/i, e);
}
function zs(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return q(s) ? s(t) : s.replace(/%s/i, t);
}
var Me = {};
function x(e, t) {
  var s = e.toLowerCase();
  Me[s] = Me[s + "s"] = Me[t] = e;
}
function I(e) {
  return typeof e == "string" ? Me[e] || Me[e.toLowerCase()] : void 0;
}
function mt(e) {
  var t = {}, s, a;
  for (a in e)
    w(e, a) && (s = I(a), s && (t[s] = e[a]));
  return t;
}
var Ut = {};
function T(e, t) {
  Ut[e] = t;
}
function Zs(e) {
  var t = [], s;
  for (s in e)
    w(e, s) && t.push({ unit: s, priority: Ut[s] });
  return t.sort(function(a, r) {
    return a.priority - r.priority;
  }), t;
}
function $e(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function L(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function _(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = L(t)), s;
}
function me(e, t) {
  return function(s) {
    return s != null ? (Ht(this, e, s), o.updateOffset(this, t), this) : Fe(this, e);
  };
}
function Fe(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Ht(e, t, s) {
  e.isValid() && !isNaN(s) && (t === "FullYear" && $e(e.year()) && e.month() === 1 && e.date() === 29 ? (s = _(s), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    s,
    e.month(),
    ze(s, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](s));
}
function Js(e) {
  return e = I(e), q(this[e]) ? this[e]() : this;
}
function Qs(e, t) {
  if (typeof e == "object") {
    e = mt(e);
    var s = Zs(e), a, r = s.length;
    for (a = 0; a < r; a++)
      this[s[a].unit](e[s[a].unit]);
  } else if (e = I(e), q(this[e]))
    return this[e](t);
  return this;
}
var $t = /\d/, N = /\d\d/, Vt = /\d{3}/, yt = /\d{4}/, Ve = /[+-]?\d{6}/, D = /\d\d?/, Gt = /\d\d\d\d?/, jt = /\d\d\d\d\d\d?/, Ge = /\d{1,3}/, wt = /\d{1,4}/, je = /[+-]?\d{1,6}/, ye = /\d+/, qe = /[+-]?\d+/, Xs = /Z|[+-]\d\d:?\d\d/gi, Be = /Z|[+-]\d\d(?::?\d\d)?/gi, Ks = /[+-]?\d+(\.\d{1,3})?/, xe = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Le;
Le = {};
function u(e, t, s) {
  Le[e] = q(t) ? t : function(a, r) {
    return a && s ? s : t;
  };
}
function ea(e, t) {
  return w(Le, e) ? Le[e](t._strict, t._locale) : new RegExp(ta(e));
}
function ta(e) {
  return P(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, a, r, n) {
        return s || a || r || n;
      }
    )
  );
}
function P(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var it = {};
function k(e, t) {
  var s, a = t, r;
  for (typeof e == "string" && (e = [e]), X(t) && (a = function(n, i) {
    i[t] = _(n);
  }), r = e.length, s = 0; s < r; s++)
    it[e[s]] = a;
}
function Te(e, t) {
  k(e, function(s, a, r, n) {
    r._w = r._w || {}, t(s, r._w, r, n);
  });
}
function sa(e, t, s) {
  t != null && w(it, e) && it[e](t, s._a, s, e);
}
var b = 0, Z = 1, V = 2, O = 3, A = 4, J = 5, ne = 6, aa = 7, ra = 8;
function na(e, t) {
  return (e % t + t) % t;
}
var Y;
Array.prototype.indexOf ? Y = Array.prototype.indexOf : Y = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function ze(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = na(t, 12);
  return e += (t - s) / 12, s === 1 ? $e(e) ? 29 : 28 : 31 - s % 7 % 2;
}
h("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
h("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
h("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
x("month", "M");
T("month", 8);
u("M", D);
u("MM", D, N);
u("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
u("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
k(["M", "MM"], function(e, t) {
  t[Z] = _(e) - 1;
});
k(["MMM", "MMMM"], function(e, t, s, a) {
  var r = s._locale.monthsParse(e, a, s._strict);
  r != null ? t[Z] = r : f(s).invalidMonth = e;
});
var ia = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), qt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Bt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, oa = xe, la = xe;
function ua(e, t) {
  return e ? U(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Bt).test(t) ? "format" : "standalone"][e.month()] : U(this._months) ? this._months : this._months.standalone;
}
function da(e, t) {
  return e ? U(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Bt.test(t) ? "format" : "standalone"][e.month()] : U(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function ha(e, t, s) {
  var a, r, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a)
      n = j([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[a] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (r = Y.call(this._shortMonthsParse, i), r !== -1 ? r : null) : (r = Y.call(this._longMonthsParse, i), r !== -1 ? r : null) : t === "MMM" ? (r = Y.call(this._shortMonthsParse, i), r !== -1 ? r : (r = Y.call(this._longMonthsParse, i), r !== -1 ? r : null)) : (r = Y.call(this._longMonthsParse, i), r !== -1 ? r : (r = Y.call(this._shortMonthsParse, i), r !== -1 ? r : null));
}
function ca(e, t, s) {
  var a, r, n;
  if (this._monthsParseExact)
    return ha.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
    if (r = j([2e3, a]), s && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp(
      "^" + this.months(r, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[a] = new RegExp(
      "^" + this.monthsShort(r, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[a] && (n = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(n.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[a].test(e))
      return a;
    if (s && t === "MMM" && this._shortMonthsParse[a].test(e))
      return a;
    if (!s && this._monthsParse[a].test(e))
      return a;
  }
}
function zt(e, t) {
  var s;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = _(t);
    else if (t = e.localeData().monthsParse(t), !X(t))
      return e;
  }
  return s = Math.min(e.date(), ze(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s), e;
}
function Zt(e) {
  return e != null ? (zt(this, e), o.updateOffset(this, !0), this) : Fe(this, "Month");
}
function fa() {
  return ze(this.year(), this.month());
}
function _a(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || Jt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (w(this, "_monthsShortRegex") || (this._monthsShortRegex = oa), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function ma(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || Jt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (w(this, "_monthsRegex") || (this._monthsRegex = la), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Jt() {
  function e(i, d) {
    return d.length - i.length;
  }
  var t = [], s = [], a = [], r, n;
  for (r = 0; r < 12; r++)
    n = j([2e3, r]), t.push(this.monthsShort(n, "")), s.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
  for (t.sort(e), s.sort(e), a.sort(e), r = 0; r < 12; r++)
    t[r] = P(t[r]), s[r] = P(s[r]);
  for (r = 0; r < 24; r++)
    a[r] = P(a[r]);
  this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
h("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? G(e, 4) : "+" + e;
});
h(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
h(0, ["YYYY", 4], 0, "year");
h(0, ["YYYYY", 5], 0, "year");
h(0, ["YYYYYY", 6, !0], 0, "year");
x("year", "y");
T("year", 1);
u("Y", qe);
u("YY", D, N);
u("YYYY", wt, yt);
u("YYYYY", je, Ve);
u("YYYYYY", je, Ve);
k(["YYYYY", "YYYYYY"], b);
k("YYYY", function(e, t) {
  t[b] = e.length === 2 ? o.parseTwoDigitYear(e) : _(e);
});
k("YY", function(e, t) {
  t[b] = o.parseTwoDigitYear(e);
});
k("Y", function(e, t) {
  t[b] = parseInt(e, 10);
});
function De(e) {
  return $e(e) ? 366 : 365;
}
o.parseTwoDigitYear = function(e) {
  return _(e) + (_(e) > 68 ? 1900 : 2e3);
};
var Qt = me("FullYear", !0);
function ya() {
  return $e(this.year());
}
function wa(e, t, s, a, r, n, i) {
  var d;
  return e < 100 && e >= 0 ? (d = new Date(e + 400, t, s, a, r, n, i), isFinite(d.getFullYear()) && d.setFullYear(e)) : d = new Date(e, t, s, a, r, n, i), d;
}
function Se(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Ce(e, t, s) {
  var a = 7 + t - s, r = (7 + Se(e, 0, a).getUTCDay() - t) % 7;
  return -r + a - 1;
}
function Xt(e, t, s, a, r) {
  var n = (7 + s - a) % 7, i = Ce(e, a, r), d = 1 + 7 * (t - 1) + n + i, c, m;
  return d <= 0 ? (c = e - 1, m = De(c) + d) : d > De(e) ? (c = e + 1, m = d - De(e)) : (c = e, m = d), {
    year: c,
    dayOfYear: m
  };
}
function ve(e, t, s) {
  var a = Ce(e.year(), t, s), r = Math.floor((e.dayOfYear() - a - 1) / 7) + 1, n, i;
  return r < 1 ? (i = e.year() - 1, n = r + Q(i, t, s)) : r > Q(e.year(), t, s) ? (n = r - Q(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = r), {
    week: n,
    year: i
  };
}
function Q(e, t, s) {
  var a = Ce(e, t, s), r = Ce(e + 1, t, s);
  return (De(e) - a + r) / 7;
}
h("w", ["ww", 2], "wo", "week");
h("W", ["WW", 2], "Wo", "isoWeek");
x("week", "w");
x("isoWeek", "W");
T("week", 5);
T("isoWeek", 5);
u("w", D);
u("ww", D, N);
u("W", D);
u("WW", D, N);
Te(
  ["w", "ww", "W", "WW"],
  function(e, t, s, a) {
    t[a.substr(0, 1)] = _(e);
  }
);
function pa(e) {
  return ve(e, this._week.dow, this._week.doy).week;
}
var ga = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function ka() {
  return this._week.dow;
}
function Ma() {
  return this._week.doy;
}
function Da(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Sa(e) {
  var t = ve(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
h("d", 0, "do", "day");
h("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
h("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
h("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
h("e", 0, 0, "weekday");
h("E", 0, 0, "isoWeekday");
x("day", "d");
x("weekday", "e");
x("isoWeekday", "E");
T("day", 11);
T("weekday", 11);
T("isoWeekday", 11);
u("d", D);
u("e", D);
u("E", D);
u("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
u("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
u("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Te(["dd", "ddd", "dddd"], function(e, t, s, a) {
  var r = s._locale.weekdaysParse(e, a, s._strict);
  r != null ? t.d = r : f(s).invalidWeekday = e;
});
Te(["d", "e", "E"], function(e, t, s, a) {
  t[a] = _(e);
});
function va(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Ya(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function pt(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Oa = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Kt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), ba = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), xa = xe, Ta = xe, Wa = xe;
function Ra(e, t) {
  var s = U(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? pt(s, this._week.dow) : e ? s[e.day()] : s;
}
function Ea(e) {
  return e === !0 ? pt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Pa(e) {
  return e === !0 ? pt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Na(e, t, s) {
  var a, r, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a)
      n = j([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(n, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (r = Y.call(this._weekdaysParse, i), r !== -1 ? r : null) : t === "ddd" ? (r = Y.call(this._shortWeekdaysParse, i), r !== -1 ? r : null) : (r = Y.call(this._minWeekdaysParse, i), r !== -1 ? r : null) : t === "dddd" ? (r = Y.call(this._weekdaysParse, i), r !== -1 || (r = Y.call(this._shortWeekdaysParse, i), r !== -1) ? r : (r = Y.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : t === "ddd" ? (r = Y.call(this._shortWeekdaysParse, i), r !== -1 || (r = Y.call(this._weekdaysParse, i), r !== -1) ? r : (r = Y.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : (r = Y.call(this._minWeekdaysParse, i), r !== -1 || (r = Y.call(this._weekdaysParse, i), r !== -1) ? r : (r = Y.call(this._shortWeekdaysParse, i), r !== -1 ? r : null));
}
function Fa(e, t, s) {
  var a, r, n;
  if (this._weekdaysParseExact)
    return Na.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
    if (r = j([2e3, 1]).day(a), s && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp(
      "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[a] || (n = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(n.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[a].test(e))
      return a;
    if (s && t === "ddd" && this._shortWeekdaysParse[a].test(e))
      return a;
    if (s && t === "dd" && this._minWeekdaysParse[a].test(e))
      return a;
    if (!s && this._weekdaysParse[a].test(e))
      return a;
  }
}
function La(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = va(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Ca(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Ia(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Ya(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Aa(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || gt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (w(this, "_weekdaysRegex") || (this._weekdaysRegex = xa), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Ua(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || gt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (w(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ta), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Ha(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || gt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (w(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Wa), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function gt() {
  function e(v, W) {
    return W.length - v.length;
  }
  var t = [], s = [], a = [], r = [], n, i, d, c, m;
  for (n = 0; n < 7; n++)
    i = j([2e3, 1]).day(n), d = P(this.weekdaysMin(i, "")), c = P(this.weekdaysShort(i, "")), m = P(this.weekdays(i, "")), t.push(d), s.push(c), a.push(m), r.push(d), r.push(c), r.push(m);
  t.sort(e), s.sort(e), a.sort(e), r.sort(e), this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function kt() {
  return this.hours() % 12 || 12;
}
function $a() {
  return this.hours() || 24;
}
h("H", ["HH", 2], 0, "hour");
h("h", ["hh", 2], 0, kt);
h("k", ["kk", 2], 0, $a);
h("hmm", 0, 0, function() {
  return "" + kt.apply(this) + G(this.minutes(), 2);
});
h("hmmss", 0, 0, function() {
  return "" + kt.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2);
});
h("Hmm", 0, 0, function() {
  return "" + this.hours() + G(this.minutes(), 2);
});
h("Hmmss", 0, 0, function() {
  return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2);
});
function es(e, t) {
  h(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
es("a", !0);
es("A", !1);
x("hour", "h");
T("hour", 13);
function ts(e, t) {
  return t._meridiemParse;
}
u("a", ts);
u("A", ts);
u("H", D);
u("h", D);
u("k", D);
u("HH", D, N);
u("hh", D, N);
u("kk", D, N);
u("hmm", Gt);
u("hmmss", jt);
u("Hmm", Gt);
u("Hmmss", jt);
k(["H", "HH"], O);
k(["k", "kk"], function(e, t, s) {
  var a = _(e);
  t[O] = a === 24 ? 0 : a;
});
k(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
k(["h", "hh"], function(e, t, s) {
  t[O] = _(e), f(s).bigHour = !0;
});
k("hmm", function(e, t, s) {
  var a = e.length - 2;
  t[O] = _(e.substr(0, a)), t[A] = _(e.substr(a)), f(s).bigHour = !0;
});
k("hmmss", function(e, t, s) {
  var a = e.length - 4, r = e.length - 2;
  t[O] = _(e.substr(0, a)), t[A] = _(e.substr(a, 2)), t[J] = _(e.substr(r)), f(s).bigHour = !0;
});
k("Hmm", function(e, t, s) {
  var a = e.length - 2;
  t[O] = _(e.substr(0, a)), t[A] = _(e.substr(a));
});
k("Hmmss", function(e, t, s) {
  var a = e.length - 4, r = e.length - 2;
  t[O] = _(e.substr(0, a)), t[A] = _(e.substr(a, 2)), t[J] = _(e.substr(r));
});
function Va(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Ga = /[ap]\.?m?\.?/i, ja = me("Hours", !0);
function qa(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var ss = {
  calendar: Fs,
  longDateFormat: As,
  invalidDate: Hs,
  ordinal: Vs,
  dayOfMonthOrdinalParse: Gs,
  relativeTime: qs,
  months: ia,
  monthsShort: qt,
  week: ga,
  weekdays: Oa,
  weekdaysMin: ba,
  weekdaysShort: Kt,
  meridiemParse: Ga
}, S = {}, ge = {}, Ye;
function Ba(e, t) {
  var s, a = Math.min(e.length, t.length);
  for (s = 0; s < a; s += 1)
    if (e[s] !== t[s])
      return s;
  return a;
}
function Et(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function za(e) {
  for (var t = 0, s, a, r, n; t < e.length; ) {
    for (n = Et(e[t]).split("-"), s = n.length, a = Et(e[t + 1]), a = a ? a.split("-") : null; s > 0; ) {
      if (r = Ze(n.slice(0, s).join("-")), r)
        return r;
      if (a && a.length >= s && Ba(n, a) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Ye;
}
function Za(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Ze(e) {
  var t = null, s;
  if (S[e] === void 0 && typeof module < "u" && module && module.exports && Za(e))
    try {
      t = Ye._abbr, s = require, s("./locale/" + e), ae(t);
    } catch {
      S[e] = null;
    }
  return S[e];
}
function ae(e, t) {
  var s;
  return e && (E(t) ? s = K(e) : s = Mt(e, t), s ? Ye = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Ye._abbr;
}
function Mt(e, t) {
  if (t !== null) {
    var s, a = ss;
    if (t.abbr = e, S[e] != null)
      It(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), a = S[e]._config;
    else if (t.parentLocale != null)
      if (S[t.parentLocale] != null)
        a = S[t.parentLocale]._config;
      else if (s = Ze(t.parentLocale), s != null)
        a = s._config;
      else
        return ge[t.parentLocale] || (ge[t.parentLocale] = []), ge[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return S[e] = new ft(rt(a, t)), ge[e] && ge[e].forEach(function(r) {
      Mt(r.name, r.config);
    }), ae(e), S[e];
  } else
    return delete S[e], null;
}
function Ja(e, t) {
  if (t != null) {
    var s, a, r = ss;
    S[e] != null && S[e].parentLocale != null ? S[e].set(rt(S[e]._config, t)) : (a = Ze(e), a != null && (r = a._config), t = rt(r, t), a == null && (t.abbr = e), s = new ft(t), s.parentLocale = S[e], S[e] = s), ae(e);
  } else
    S[e] != null && (S[e].parentLocale != null ? (S[e] = S[e].parentLocale, e === ae() && ae(e)) : S[e] != null && delete S[e]);
  return S[e];
}
function K(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Ye;
  if (!U(e)) {
    if (t = Ze(e), t)
      return t;
    e = [e];
  }
  return za(e);
}
function Qa() {
  return nt(S);
}
function Dt(e) {
  var t, s = e._a;
  return s && f(e).overflow === -2 && (t = s[Z] < 0 || s[Z] > 11 ? Z : s[V] < 1 || s[V] > ze(s[b], s[Z]) ? V : s[O] < 0 || s[O] > 24 || s[O] === 24 && (s[A] !== 0 || s[J] !== 0 || s[ne] !== 0) ? O : s[A] < 0 || s[A] > 59 ? A : s[J] < 0 || s[J] > 59 ? J : s[ne] < 0 || s[ne] > 999 ? ne : -1, f(e)._overflowDayOfYear && (t < b || t > V) && (t = V), f(e)._overflowWeeks && t === -1 && (t = aa), f(e)._overflowWeekday && t === -1 && (t = ra), f(e).overflow = t), e;
}
var Xa = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ka = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, er = /Z|[+-]\d\d(?::?\d\d)?/, Re = [
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
], tt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], tr = /^\/?Date\((-?\d+)/i, sr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, ar = {
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
function as(e) {
  var t, s, a = e._i, r = Xa.exec(a) || Ka.exec(a), n, i, d, c, m = Re.length, v = tt.length;
  if (r) {
    for (f(e).iso = !0, t = 0, s = m; t < s; t++)
      if (Re[t][1].exec(r[1])) {
        i = Re[t][0], n = Re[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (r[3]) {
      for (t = 0, s = v; t < s; t++)
        if (tt[t][1].exec(r[3])) {
          d = (r[2] || " ") + tt[t][0];
          break;
        }
      if (d == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && d != null) {
      e._isValid = !1;
      return;
    }
    if (r[4])
      if (er.exec(r[4]))
        c = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (d || "") + (c || ""), vt(e);
  } else
    e._isValid = !1;
}
function rr(e, t, s, a, r, n) {
  var i = [
    nr(e),
    qt.indexOf(t),
    parseInt(s, 10),
    parseInt(a, 10),
    parseInt(r, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function nr(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function ir(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function or(e, t, s) {
  if (e) {
    var a = Kt.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (a !== r)
      return f(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function lr(e, t, s) {
  if (e)
    return ar[e];
  if (t)
    return 0;
  var a = parseInt(s, 10), r = a % 100, n = (a - r) / 100;
  return n * 60 + r;
}
function rs(e) {
  var t = sr.exec(ir(e._i)), s;
  if (t) {
    if (s = rr(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !or(t[1], s, e))
      return;
    e._a = s, e._tzm = lr(t[8], t[9], t[10]), e._d = Se.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ur(e) {
  var t = tr.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (as(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (rs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : o.createFromInputFallback(e);
}
o.createFromInputFallback = C(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function de(e, t, s) {
  return e ?? t ?? s;
}
function dr(e) {
  var t = new Date(o.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function St(e) {
  var t, s, a = [], r, n, i;
  if (!e._d) {
    for (r = dr(e), e._w && e._a[V] == null && e._a[Z] == null && hr(e), e._dayOfYear != null && (i = de(e._a[b], r[b]), (e._dayOfYear > De(i) || e._dayOfYear === 0) && (f(e)._overflowDayOfYear = !0), s = Se(i, 0, e._dayOfYear), e._a[Z] = s.getUTCMonth(), e._a[V] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = a[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[O] === 24 && e._a[A] === 0 && e._a[J] === 0 && e._a[ne] === 0 && (e._nextDay = !0, e._a[O] = 0), e._d = (e._useUTC ? Se : wa).apply(
      null,
      a
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[O] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (f(e).weekdayMismatch = !0);
  }
}
function hr(e) {
  var t, s, a, r, n, i, d, c, m;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = de(
    t.GG,
    e._a[b],
    ve(M(), 1, 4).year
  ), a = de(t.W, 1), r = de(t.E, 1), (r < 1 || r > 7) && (c = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, m = ve(M(), n, i), s = de(t.gg, e._a[b], m.year), a = de(t.w, m.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (c = !0)) : t.e != null ? (r = t.e + n, (t.e < 0 || t.e > 6) && (c = !0)) : r = n), a < 1 || a > Q(s, n, i) ? f(e)._overflowWeeks = !0 : c != null ? f(e)._overflowWeekday = !0 : (d = Xt(s, a, r, n, i), e._a[b] = d.year, e._dayOfYear = d.dayOfYear);
}
o.ISO_8601 = function() {
};
o.RFC_2822 = function() {
};
function vt(e) {
  if (e._f === o.ISO_8601) {
    as(e);
    return;
  }
  if (e._f === o.RFC_2822) {
    rs(e);
    return;
  }
  e._a = [], f(e).empty = !0;
  var t = "" + e._i, s, a, r, n, i, d = t.length, c = 0, m, v;
  for (r = At(e._f, e._locale).match(_t) || [], v = r.length, s = 0; s < v; s++)
    n = r[s], a = (t.match(ea(n, e)) || [])[0], a && (i = t.substr(0, t.indexOf(a)), i.length > 0 && f(e).unusedInput.push(i), t = t.slice(
      t.indexOf(a) + a.length
    ), c += a.length), ce[n] ? (a ? f(e).empty = !1 : f(e).unusedTokens.push(n), sa(n, a, e)) : e._strict && !a && f(e).unusedTokens.push(n);
  f(e).charsLeftOver = d - c, t.length > 0 && f(e).unusedInput.push(t), e._a[O] <= 12 && f(e).bigHour === !0 && e._a[O] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[O] = cr(
    e._locale,
    e._a[O],
    e._meridiem
  ), m = f(e).era, m !== null && (e._a[b] = e._locale.erasConvertYear(m, e._a[b])), St(e), Dt(e);
}
function cr(e, t, s) {
  var a;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (a = e.isPM(s), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t);
}
function fr(e) {
  var t, s, a, r, n, i, d = !1, c = e._f.length;
  if (c === 0) {
    f(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (r = 0; r < c; r++)
    n = 0, i = !1, t = ct({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], vt(t), ht(t) && (i = !0), n += f(t).charsLeftOver, n += f(t).unusedTokens.length * 10, f(t).score = n, d ? n < a && (a = n, s = t) : (a == null || n < a || i) && (a = n, s = t, i && (d = !0));
  te(e, s || t);
}
function _r(e) {
  if (!e._d) {
    var t = mt(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Lt(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(a) {
        return a && parseInt(a, 10);
      }
    ), St(e);
  }
}
function mr(e) {
  var t = new be(Dt(ns(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ns(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || K(e._l), t === null || s === void 0 && t === "" ? He({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), H(t) ? new be(Dt(t)) : (Oe(t) ? e._d = t : U(s) ? fr(e) : s ? vt(e) : yr(e), ht(e) || (e._d = null), e));
}
function yr(e) {
  var t = e._i;
  E(t) ? e._d = new Date(o.now()) : Oe(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ur(e) : U(t) ? (e._a = Lt(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), St(e)) : ie(t) ? _r(e) : X(t) ? e._d = new Date(t) : o.createFromInputFallback(e);
}
function is(e, t, s, a, r) {
  var n = {};
  return (t === !0 || t === !1) && (a = t, t = void 0), (s === !0 || s === !1) && (a = s, s = void 0), (ie(e) && dt(e) || U(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = r, n._l = s, n._i = e, n._f = t, n._strict = a, mr(n);
}
function M(e, t, s, a) {
  return is(e, t, s, a, !1);
}
var wr = C(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = M.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : He();
  }
), pr = C(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = M.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : He();
  }
);
function os(e, t) {
  var s, a;
  if (t.length === 1 && U(t[0]) && (t = t[0]), !t.length)
    return M();
  for (s = t[0], a = 1; a < t.length; ++a)
    (!t[a].isValid() || t[a][e](s)) && (s = t[a]);
  return s;
}
function gr() {
  var e = [].slice.call(arguments, 0);
  return os("isBefore", e);
}
function kr() {
  var e = [].slice.call(arguments, 0);
  return os("isAfter", e);
}
var Mr = function() {
  return Date.now ? Date.now() : +new Date();
}, ke = [
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
function Dr(e) {
  var t, s = !1, a, r = ke.length;
  for (t in e)
    if (w(e, t) && !(Y.call(ke, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (a = 0; a < r; ++a)
    if (e[ke[a]]) {
      if (s)
        return !1;
      parseFloat(e[ke[a]]) !== _(e[ke[a]]) && (s = !0);
    }
  return !0;
}
function Sr() {
  return this._isValid;
}
function vr() {
  return $(NaN);
}
function Je(e) {
  var t = mt(e), s = t.year || 0, a = t.quarter || 0, r = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, d = t.hour || 0, c = t.minute || 0, m = t.second || 0, v = t.millisecond || 0;
  this._isValid = Dr(t), this._milliseconds = +v + m * 1e3 + // 1000
  c * 6e4 + // 1000 * 60
  d * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +r + a * 3 + s * 12, this._data = {}, this._locale = K(), this._bubble();
}
function Pe(e) {
  return e instanceof Je;
}
function ot(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Yr(e, t, s) {
  var a = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < a; i++)
    (s && e[i] !== t[i] || !s && _(e[i]) !== _(t[i])) && n++;
  return n + r;
}
function ls(e, t) {
  h(e, 0, 0, function() {
    var s = this.utcOffset(), a = "+";
    return s < 0 && (s = -s, a = "-"), a + G(~~(s / 60), 2) + t + G(~~s % 60, 2);
  });
}
ls("Z", ":");
ls("ZZ", "");
u("Z", Be);
u("ZZ", Be);
k(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Yt(Be, e);
});
var Or = /([\+\-]|\d\d)/gi;
function Yt(e, t) {
  var s = (t || "").match(e), a, r, n;
  return s === null ? null : (a = s[s.length - 1] || [], r = (a + "").match(Or) || ["-", 0, 0], n = +(r[1] * 60) + _(r[2]), n === 0 ? 0 : r[0] === "+" ? n : -n);
}
function Ot(e, t) {
  var s, a;
  return t._isUTC ? (s = t.clone(), a = (H(e) || Oe(e) ? e.valueOf() : M(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + a), o.updateOffset(s, !1), s) : M(e).local();
}
function lt(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
o.updateOffset = function() {
};
function br(e, t, s) {
  var a = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Yt(Be, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (r = lt(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), a !== e && (!t || this._changeInProgress ? hs(
      this,
      $(e - a, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, o.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? a : lt(this);
}
function xr(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Tr(e) {
  return this.utcOffset(0, e);
}
function Wr(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(lt(this), "m")), this;
}
function Rr() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Yt(Xs, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Er(e) {
  return this.isValid() ? (e = e ? M(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Pr() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Nr() {
  if (!E(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return ct(e, this), e = ns(e), e._a ? (t = e._isUTC ? j(e._a) : M(e._a), this._isDSTShifted = this.isValid() && Yr(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Fr() {
  return this.isValid() ? !this._isUTC : !1;
}
function Lr() {
  return this.isValid() ? this._isUTC : !1;
}
function us() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Cr = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Ir = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function $(e, t) {
  var s = e, a = null, r, n, i;
  return Pe(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : X(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (a = Cr.exec(e)) ? (r = a[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: _(a[V]) * r,
    h: _(a[O]) * r,
    m: _(a[A]) * r,
    s: _(a[J]) * r,
    ms: _(ot(a[ne] * 1e3)) * r
    // the millisecond decimal point is included in the match
  }) : (a = Ir.exec(e)) ? (r = a[1] === "-" ? -1 : 1, s = {
    y: re(a[2], r),
    M: re(a[3], r),
    w: re(a[4], r),
    d: re(a[5], r),
    h: re(a[6], r),
    m: re(a[7], r),
    s: re(a[8], r)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = Ar(
    M(s.from),
    M(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new Je(s), Pe(e) && w(e, "_locale") && (n._locale = e._locale), Pe(e) && w(e, "_isValid") && (n._isValid = e._isValid), n;
}
$.fn = Je.prototype;
$.invalid = vr;
function re(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Pt(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function Ar(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Ot(t, e), e.isBefore(t) ? s = Pt(e, t) : (s = Pt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function ds(e, t) {
  return function(s, a) {
    var r, n;
    return a !== null && !isNaN(+a) && (It(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = a, a = n), r = $(s, a), hs(this, r, e), this;
  };
}
function hs(e, t, s, a) {
  var r = t._milliseconds, n = ot(t._days), i = ot(t._months);
  e.isValid() && (a = a ?? !0, i && zt(e, Fe(e, "Month") + i * s), n && Ht(e, "Date", Fe(e, "Date") + n * s), r && e._d.setTime(e._d.valueOf() + r * s), a && o.updateOffset(e, n || i));
}
var Ur = ds(1, "add"), Hr = ds(-1, "subtract");
function cs(e) {
  return typeof e == "string" || e instanceof String;
}
function $r(e) {
  return H(e) || Oe(e) || cs(e) || X(e) || Gr(e) || Vr(e) || e === null || e === void 0;
}
function Vr(e) {
  var t = ie(e) && !dt(e), s = !1, a = [
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
  ], r, n, i = a.length;
  for (r = 0; r < i; r += 1)
    n = a[r], s = s || w(e, n);
  return t && s;
}
function Gr(e) {
  var t = U(e), s = !1;
  return t && (s = e.filter(function(a) {
    return !X(a) && cs(e);
  }).length === 0), t && s;
}
function jr(e) {
  var t = ie(e) && !dt(e), s = !1, a = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], r, n;
  for (r = 0; r < a.length; r += 1)
    n = a[r], s = s || w(e, n);
  return t && s;
}
function qr(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function Br(e, t) {
  arguments.length === 1 && (arguments[0] ? $r(arguments[0]) ? (e = arguments[0], t = void 0) : jr(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || M(), a = Ot(s, this).startOf("day"), r = o.calendarFormat(this, a) || "sameElse", n = t && (q(t[r]) ? t[r].call(this, s) : t[r]);
  return this.format(
    n || this.localeData().calendar(r, this, M(s))
  );
}
function zr() {
  return new be(this);
}
function Zr(e, t) {
  var s = H(e) ? e : M(e);
  return this.isValid() && s.isValid() ? (t = I(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Jr(e, t) {
  var s = H(e) ? e : M(e);
  return this.isValid() && s.isValid() ? (t = I(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function Qr(e, t, s, a) {
  var r = H(e) ? e : M(e), n = H(t) ? t : M(t);
  return this.isValid() && r.isValid() && n.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(r, s) : !this.isBefore(r, s)) && (a[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function Xr(e, t) {
  var s = H(e) ? e : M(e), a;
  return this.isValid() && s.isValid() ? (t = I(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (a = s.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1;
}
function Kr(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function en(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function tn(e, t, s) {
  var a, r, n;
  if (!this.isValid())
    return NaN;
  if (a = Ot(e, this), !a.isValid())
    return NaN;
  switch (r = (a.utcOffset() - this.utcOffset()) * 6e4, t = I(t), t) {
    case "year":
      n = Ne(this, a) / 12;
      break;
    case "month":
      n = Ne(this, a);
      break;
    case "quarter":
      n = Ne(this, a) / 3;
      break;
    case "second":
      n = (this - a) / 1e3;
      break;
    case "minute":
      n = (this - a) / 6e4;
      break;
    case "hour":
      n = (this - a) / 36e5;
      break;
    case "day":
      n = (this - a - r) / 864e5;
      break;
    case "week":
      n = (this - a - r) / 6048e5;
      break;
    default:
      n = this - a;
  }
  return s ? n : L(n);
}
function Ne(e, t) {
  if (e.date() < t.date())
    return -Ne(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), a = e.clone().add(s, "months"), r, n;
  return t - a < 0 ? (r = e.clone().add(s - 1, "months"), n = (t - a) / (a - r)) : (r = e.clone().add(s + 1, "months"), n = (t - a) / (r - a)), -(s + n) || 0;
}
o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function sn() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function an(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? Ee(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : q(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ee(s, "Z")) : Ee(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function rn() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, a, r, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + a + r + n);
}
function nn(e) {
  e || (e = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat);
  var t = Ee(this, e);
  return this.localeData().postformat(t);
}
function on(e, t) {
  return this.isValid() && (H(e) && e.isValid() || M(e).isValid()) ? $({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ln(e) {
  return this.from(M(), e);
}
function un(e, t) {
  return this.isValid() && (H(e) && e.isValid() || M(e).isValid()) ? $({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function dn(e) {
  return this.to(M(), e);
}
function fs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = K(e), t != null && (this._locale = t), this);
}
var _s = C(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function ms() {
  return this._locale;
}
var Ie = 1e3, fe = 60 * Ie, Ae = 60 * fe, ys = (365 * 400 + 97) * 24 * Ae;
function _e(e, t) {
  return (e % t + t) % t;
}
function ws(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - ys : new Date(e, t, s).valueOf();
}
function ps(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - ys : Date.UTC(e, t, s);
}
function hn(e) {
  var t, s;
  if (e = I(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? ps : ws, e) {
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
      t = this._d.valueOf(), t -= _e(
        t + (this._isUTC ? 0 : this.utcOffset() * fe),
        Ae
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= _e(t, fe);
      break;
    case "second":
      t = this._d.valueOf(), t -= _e(t, Ie);
      break;
  }
  return this._d.setTime(t), o.updateOffset(this, !0), this;
}
function cn(e) {
  var t, s;
  if (e = I(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? ps : ws, e) {
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
      t = this._d.valueOf(), t += Ae - _e(
        t + (this._isUTC ? 0 : this.utcOffset() * fe),
        Ae
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += fe - _e(t, fe) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Ie - _e(t, Ie) - 1;
      break;
  }
  return this._d.setTime(t), o.updateOffset(this, !0), this;
}
function fn() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function _n() {
  return Math.floor(this.valueOf() / 1e3);
}
function mn() {
  return new Date(this.valueOf());
}
function yn() {
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
function wn() {
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
function pn() {
  return this.isValid() ? this.toISOString() : null;
}
function gn() {
  return ht(this);
}
function kn() {
  return te({}, f(this));
}
function Mn() {
  return f(this).overflow;
}
function Dn() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
h("N", 0, 0, "eraAbbr");
h("NN", 0, 0, "eraAbbr");
h("NNN", 0, 0, "eraAbbr");
h("NNNN", 0, 0, "eraName");
h("NNNNN", 0, 0, "eraNarrow");
h("y", ["y", 1], "yo", "eraYear");
h("y", ["yy", 2], 0, "eraYear");
h("y", ["yyy", 3], 0, "eraYear");
h("y", ["yyyy", 4], 0, "eraYear");
u("N", bt);
u("NN", bt);
u("NNN", bt);
u("NNNN", Pn);
u("NNNNN", Nn);
k(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, a) {
    var r = s._locale.erasParse(e, a, s._strict);
    r ? f(s).era = r : f(s).invalidEra = e;
  }
);
u("y", ye);
u("yy", ye);
u("yyy", ye);
u("yyyy", ye);
u("yo", Fn);
k(["y", "yy", "yyy", "yyyy"], b);
k(["yo"], function(e, t, s, a) {
  var r;
  s._locale._eraYearOrdinalRegex && (r = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[b] = s._locale.eraYearOrdinalParse(e, r) : t[b] = parseInt(e, 10);
});
function Sn(e, t) {
  var s, a, r, n = this._eras || K("en")._eras;
  for (s = 0, a = n.length; s < a; ++s) {
    switch (typeof n[s].since) {
      case "string":
        r = o(n[s].since).startOf("day"), n[s].since = r.valueOf();
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        r = o(n[s].until).startOf("day").valueOf(), n[s].until = r.valueOf();
        break;
    }
  }
  return n;
}
function vn(e, t, s) {
  var a, r, n = this.eras(), i, d, c;
  for (e = e.toUpperCase(), a = 0, r = n.length; a < r; ++a)
    if (i = n[a].name.toUpperCase(), d = n[a].abbr.toUpperCase(), c = n[a].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (d === e)
            return n[a];
          break;
        case "NNNN":
          if (i === e)
            return n[a];
          break;
        case "NNNNN":
          if (c === e)
            return n[a];
          break;
      }
    else if ([i, d, c].indexOf(e) >= 0)
      return n[a];
}
function Yn(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? o(e.since).year() : o(e.since).year() + (t - e.offset) * s;
}
function On() {
  var e, t, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return a[e].name;
  return "";
}
function bn() {
  var e, t, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return a[e].narrow;
  return "";
}
function xn() {
  var e, t, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return a[e].abbr;
  return "";
}
function Tn() {
  var e, t, s, a, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = r[e].since <= r[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), r[e].since <= a && a <= r[e].until || r[e].until <= a && a <= r[e].since)
      return (this.year() - o(r[e].since).year()) * s + r[e].offset;
  return this.year();
}
function Wn(e) {
  return w(this, "_erasNameRegex") || xt.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Rn(e) {
  return w(this, "_erasAbbrRegex") || xt.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function En(e) {
  return w(this, "_erasNarrowRegex") || xt.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function bt(e, t) {
  return t.erasAbbrRegex(e);
}
function Pn(e, t) {
  return t.erasNameRegex(e);
}
function Nn(e, t) {
  return t.erasNarrowRegex(e);
}
function Fn(e, t) {
  return t._eraYearOrdinalRegex || ye;
}
function xt() {
  var e = [], t = [], s = [], a = [], r, n, i = this.eras();
  for (r = 0, n = i.length; r < n; ++r)
    t.push(P(i[r].name)), e.push(P(i[r].abbr)), s.push(P(i[r].narrow)), a.push(P(i[r].name)), a.push(P(i[r].abbr)), a.push(P(i[r].narrow));
  this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
h(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
h(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Qe(e, t) {
  h(0, [e, e.length], 0, t);
}
Qe("gggg", "weekYear");
Qe("ggggg", "weekYear");
Qe("GGGG", "isoWeekYear");
Qe("GGGGG", "isoWeekYear");
x("weekYear", "gg");
x("isoWeekYear", "GG");
T("weekYear", 1);
T("isoWeekYear", 1);
u("G", qe);
u("g", qe);
u("GG", D, N);
u("gg", D, N);
u("GGGG", wt, yt);
u("gggg", wt, yt);
u("GGGGG", je, Ve);
u("ggggg", je, Ve);
Te(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, a) {
    t[a.substr(0, 2)] = _(e);
  }
);
Te(["gg", "GG"], function(e, t, s, a) {
  t[a] = o.parseTwoDigitYear(e);
});
function Ln(e) {
  return gs.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Cn(e) {
  return gs.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function In() {
  return Q(this.year(), 1, 4);
}
function An() {
  return Q(this.isoWeekYear(), 1, 4);
}
function Un() {
  var e = this.localeData()._week;
  return Q(this.year(), e.dow, e.doy);
}
function Hn() {
  var e = this.localeData()._week;
  return Q(this.weekYear(), e.dow, e.doy);
}
function gs(e, t, s, a, r) {
  var n;
  return e == null ? ve(this, a, r).year : (n = Q(e, a, r), t > n && (t = n), $n.call(this, e, t, s, a, r));
}
function $n(e, t, s, a, r) {
  var n = Xt(e, t, s, a, r), i = Se(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
h("Q", 0, "Qo", "quarter");
x("quarter", "Q");
T("quarter", 7);
u("Q", $t);
k("Q", function(e, t) {
  t[Z] = (_(e) - 1) * 3;
});
function Vn(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
h("D", ["DD", 2], "Do", "date");
x("date", "D");
T("date", 9);
u("D", D);
u("DD", D, N);
u("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
k(["D", "DD"], V);
k("Do", function(e, t) {
  t[V] = _(e.match(D)[0]);
});
var ks = me("Date", !0);
h("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
x("dayOfYear", "DDD");
T("dayOfYear", 4);
u("DDD", Ge);
u("DDDD", Vt);
k(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = _(e);
});
function Gn(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
h("m", ["mm", 2], 0, "minute");
x("minute", "m");
T("minute", 14);
u("m", D);
u("mm", D, N);
k(["m", "mm"], A);
var jn = me("Minutes", !1);
h("s", ["ss", 2], 0, "second");
x("second", "s");
T("second", 15);
u("s", D);
u("ss", D, N);
k(["s", "ss"], J);
var qn = me("Seconds", !1);
h("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
h(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
h(0, ["SSS", 3], 0, "millisecond");
h(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
h(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
h(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
h(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
h(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
h(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
x("millisecond", "ms");
T("millisecond", 16);
u("S", Ge, $t);
u("SS", Ge, N);
u("SSS", Ge, Vt);
var se, Ms;
for (se = "SSSS"; se.length <= 9; se += "S")
  u(se, ye);
function Bn(e, t) {
  t[ne] = _(("0." + e) * 1e3);
}
for (se = "S"; se.length <= 9; se += "S")
  k(se, Bn);
Ms = me("Milliseconds", !1);
h("z", 0, 0, "zoneAbbr");
h("zz", 0, 0, "zoneName");
function zn() {
  return this._isUTC ? "UTC" : "";
}
function Zn() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = be.prototype;
l.add = Ur;
l.calendar = Br;
l.clone = zr;
l.diff = tn;
l.endOf = cn;
l.format = nn;
l.from = on;
l.fromNow = ln;
l.to = un;
l.toNow = dn;
l.get = Js;
l.invalidAt = Mn;
l.isAfter = Zr;
l.isBefore = Jr;
l.isBetween = Qr;
l.isSame = Xr;
l.isSameOrAfter = Kr;
l.isSameOrBefore = en;
l.isValid = gn;
l.lang = _s;
l.locale = fs;
l.localeData = ms;
l.max = pr;
l.min = wr;
l.parsingFlags = kn;
l.set = Qs;
l.startOf = hn;
l.subtract = Hr;
l.toArray = yn;
l.toObject = wn;
l.toDate = mn;
l.toISOString = an;
l.inspect = rn;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = pn;
l.toString = sn;
l.unix = _n;
l.valueOf = fn;
l.creationData = Dn;
l.eraName = On;
l.eraNarrow = bn;
l.eraAbbr = xn;
l.eraYear = Tn;
l.year = Qt;
l.isLeapYear = ya;
l.weekYear = Ln;
l.isoWeekYear = Cn;
l.quarter = l.quarters = Vn;
l.month = Zt;
l.daysInMonth = fa;
l.week = l.weeks = Da;
l.isoWeek = l.isoWeeks = Sa;
l.weeksInYear = Un;
l.weeksInWeekYear = Hn;
l.isoWeeksInYear = In;
l.isoWeeksInISOWeekYear = An;
l.date = ks;
l.day = l.days = La;
l.weekday = Ca;
l.isoWeekday = Ia;
l.dayOfYear = Gn;
l.hour = l.hours = ja;
l.minute = l.minutes = jn;
l.second = l.seconds = qn;
l.millisecond = l.milliseconds = Ms;
l.utcOffset = br;
l.utc = Tr;
l.local = Wr;
l.parseZone = Rr;
l.hasAlignedHourOffset = Er;
l.isDST = Pr;
l.isLocal = Fr;
l.isUtcOffset = Lr;
l.isUtc = us;
l.isUTC = us;
l.zoneAbbr = zn;
l.zoneName = Zn;
l.dates = C(
  "dates accessor is deprecated. Use date instead.",
  ks
);
l.months = C(
  "months accessor is deprecated. Use month instead",
  Zt
);
l.years = C(
  "years accessor is deprecated. Use year instead",
  Qt
);
l.zone = C(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  xr
);
l.isDSTShifted = C(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Nr
);
function Jn(e) {
  return M(e * 1e3);
}
function Qn() {
  return M.apply(null, arguments).parseZone();
}
function Ds(e) {
  return e;
}
var p = ft.prototype;
p.calendar = Ls;
p.longDateFormat = Us;
p.invalidDate = $s;
p.ordinal = js;
p.preparse = Ds;
p.postformat = Ds;
p.relativeTime = Bs;
p.pastFuture = zs;
p.set = Ns;
p.eras = Sn;
p.erasParse = vn;
p.erasConvertYear = Yn;
p.erasAbbrRegex = Rn;
p.erasNameRegex = Wn;
p.erasNarrowRegex = En;
p.months = ua;
p.monthsShort = da;
p.monthsParse = ca;
p.monthsRegex = ma;
p.monthsShortRegex = _a;
p.week = pa;
p.firstDayOfYear = Ma;
p.firstDayOfWeek = ka;
p.weekdays = Ra;
p.weekdaysMin = Pa;
p.weekdaysShort = Ea;
p.weekdaysParse = Fa;
p.weekdaysRegex = Aa;
p.weekdaysShortRegex = Ua;
p.weekdaysMinRegex = Ha;
p.isPM = Va;
p.meridiem = qa;
function Ue(e, t, s, a) {
  var r = K(), n = j().set(a, t);
  return r[s](n, e);
}
function Ss(e, t, s) {
  if (X(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ue(e, t, s, "month");
  var a, r = [];
  for (a = 0; a < 12; a++)
    r[a] = Ue(e, a, s, "month");
  return r;
}
function Tt(e, t, s, a) {
  typeof e == "boolean" ? (X(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, X(t) && (s = t, t = void 0), t = t || "");
  var r = K(), n = e ? r._week.dow : 0, i, d = [];
  if (s != null)
    return Ue(t, (s + n) % 7, a, "day");
  for (i = 0; i < 7; i++)
    d[i] = Ue(t, (i + n) % 7, a, "day");
  return d;
}
function Xn(e, t) {
  return Ss(e, t, "months");
}
function Kn(e, t) {
  return Ss(e, t, "monthsShort");
}
function ei(e, t, s) {
  return Tt(e, t, s, "weekdays");
}
function ti(e, t, s) {
  return Tt(e, t, s, "weekdaysShort");
}
function si(e, t, s) {
  return Tt(e, t, s, "weekdaysMin");
}
ae("en", {
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
    var t = e % 10, s = _(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
o.lang = C(
  "moment.lang is deprecated. Use moment.locale instead.",
  ae
);
o.langData = C(
  "moment.langData is deprecated. Use moment.localeData instead.",
  K
);
var B = Math.abs;
function ai() {
  var e = this._data;
  return this._milliseconds = B(this._milliseconds), this._days = B(this._days), this._months = B(this._months), e.milliseconds = B(e.milliseconds), e.seconds = B(e.seconds), e.minutes = B(e.minutes), e.hours = B(e.hours), e.months = B(e.months), e.years = B(e.years), this;
}
function vs(e, t, s, a) {
  var r = $(t, s);
  return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble();
}
function ri(e, t) {
  return vs(this, e, t, 1);
}
function ni(e, t) {
  return vs(this, e, t, -1);
}
function Nt(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function ii() {
  var e = this._milliseconds, t = this._days, s = this._months, a = this._data, r, n, i, d, c;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Nt(ut(s) + t) * 864e5, t = 0, s = 0), a.milliseconds = e % 1e3, r = L(e / 1e3), a.seconds = r % 60, n = L(r / 60), a.minutes = n % 60, i = L(n / 60), a.hours = i % 24, t += L(i / 24), c = L(Ys(t)), s += c, t -= Nt(ut(c)), d = L(s / 12), s %= 12, a.days = t, a.months = s, a.years = d, this;
}
function Ys(e) {
  return e * 4800 / 146097;
}
function ut(e) {
  return e * 146097 / 4800;
}
function oi(e) {
  if (!this.isValid())
    return NaN;
  var t, s, a = this._milliseconds;
  if (e = I(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + a / 864e5, s = this._months + Ys(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(ut(this._months)), e) {
      case "week":
        return t / 7 + a / 6048e5;
      case "day":
        return t + a / 864e5;
      case "hour":
        return t * 24 + a / 36e5;
      case "minute":
        return t * 1440 + a / 6e4;
      case "second":
        return t * 86400 + a / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + a;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function li() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + _(this._months / 12) * 31536e6 : NaN;
}
function ee(e) {
  return function() {
    return this.as(e);
  };
}
var ui = ee("ms"), di = ee("s"), hi = ee("m"), ci = ee("h"), fi = ee("d"), _i = ee("w"), mi = ee("M"), yi = ee("Q"), wi = ee("y");
function pi() {
  return $(this);
}
function gi(e) {
  return e = I(e), this.isValid() ? this[e + "s"]() : NaN;
}
function oe(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var ki = oe("milliseconds"), Mi = oe("seconds"), Di = oe("minutes"), Si = oe("hours"), vi = oe("days"), Yi = oe("months"), Oi = oe("years");
function bi() {
  return L(this.days() / 7);
}
var z = Math.round, he = {
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
function xi(e, t, s, a, r) {
  return r.relativeTime(t || 1, !!s, e, a);
}
function Ti(e, t, s, a) {
  var r = $(e).abs(), n = z(r.as("s")), i = z(r.as("m")), d = z(r.as("h")), c = z(r.as("d")), m = z(r.as("M")), v = z(r.as("w")), W = z(r.as("y")), R = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || d <= 1 && ["h"] || d < s.h && ["hh", d] || c <= 1 && ["d"] || c < s.d && ["dd", c];
  return s.w != null && (R = R || v <= 1 && ["w"] || v < s.w && ["ww", v]), R = R || m <= 1 && ["M"] || m < s.M && ["MM", m] || W <= 1 && ["y"] || ["yy", W], R[2] = t, R[3] = +e > 0, R[4] = a, xi.apply(null, R);
}
function Wi(e) {
  return e === void 0 ? z : typeof e == "function" ? (z = e, !0) : !1;
}
function Ri(e, t) {
  return he[e] === void 0 ? !1 : t === void 0 ? he[e] : (he[e] = t, e === "s" && (he.ss = t - 1), !0);
}
function Ei(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, a = he, r, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (a = Object.assign({}, he, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), r = this.localeData(), n = Ti(this, !s, a, r), s && (n = r.pastFuture(+this, n)), r.postformat(n);
}
var st = Math.abs;
function ue(e) {
  return (e > 0) - (e < 0) || +e;
}
function Xe() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = st(this._milliseconds) / 1e3, t = st(this._days), s = st(this._months), a, r, n, i, d = this.asSeconds(), c, m, v, W;
  return d ? (a = L(e / 60), r = L(a / 60), e %= 60, a %= 60, n = L(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = d < 0 ? "-" : "", m = ue(this._months) !== ue(d) ? "-" : "", v = ue(this._days) !== ue(d) ? "-" : "", W = ue(this._milliseconds) !== ue(d) ? "-" : "", c + "P" + (n ? m + n + "Y" : "") + (s ? m + s + "M" : "") + (t ? v + t + "D" : "") + (r || a || e ? "T" : "") + (r ? W + r + "H" : "") + (a ? W + a + "M" : "") + (e ? W + i + "S" : "")) : "P0D";
}
var y = Je.prototype;
y.isValid = Sr;
y.abs = ai;
y.add = ri;
y.subtract = ni;
y.as = oi;
y.asMilliseconds = ui;
y.asSeconds = di;
y.asMinutes = hi;
y.asHours = ci;
y.asDays = fi;
y.asWeeks = _i;
y.asMonths = mi;
y.asQuarters = yi;
y.asYears = wi;
y.valueOf = li;
y._bubble = ii;
y.clone = pi;
y.get = gi;
y.milliseconds = ki;
y.seconds = Mi;
y.minutes = Di;
y.hours = Si;
y.days = vi;
y.weeks = bi;
y.months = Yi;
y.years = Oi;
y.humanize = Ei;
y.toISOString = Xe;
y.toString = Xe;
y.toJSON = Xe;
y.locale = fs;
y.localeData = ms;
y.toIsoString = C(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Xe
);
y.lang = _s;
h("X", 0, 0, "unix");
h("x", 0, 0, "valueOf");
u("x", qe);
u("X", Ks);
k("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
k("x", function(e, t, s) {
  s._d = new Date(_(e));
});
//! moment.js
o.version = "2.29.4";
Es(M);
o.fn = l;
o.min = gr;
o.max = kr;
o.now = Mr;
o.utc = j;
o.unix = Jn;
o.months = Xn;
o.isDate = Oe;
o.locale = ae;
o.invalid = He;
o.duration = $;
o.isMoment = H;
o.weekdays = ei;
o.parseZone = Qn;
o.localeData = K;
o.isDuration = Pe;
o.monthsShort = Kn;
o.weekdaysMin = si;
o.defineLocale = Mt;
o.updateLocale = Ja;
o.locales = Qa;
o.weekdaysShort = ti;
o.normalizeUnits = I;
o.relativeTimeRounding = Wi;
o.relativeTimeThreshold = Ri;
o.calendarFormat = qr;
o.prototype = l;
o.HTML5_FMT = {
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
const Pi = (e) => {
  var m, v, W, R, we, pe, le;
  const { container: t, dates: s, months: a, years: r, nowDay: n, nowMonth: i, quickActions: d, locale: c } = e;
  t.innerHTML += `<div class="calendarify">
    <div class="quick-actions ${d ? "" : "d-none"}">
      <button data-action="today">${(v = (m = c.lang.ui) == null ? void 0 : m.quickActions) == null ? void 0 : v.today}</button>
      <button data-action="tomorrow">${(R = (W = c.lang.ui) == null ? void 0 : W.quickActions) == null ? void 0 : R.tomorrow}</button>
      <button data-action="in-2-days">${(pe = (we = c.lang.ui) == null ? void 0 : we.quickActions) == null ? void 0 : pe.inTwoDays}</button>
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
      ${(le = c.lang.weekdays) == null ? void 0 : le.map((F) => `<li>${F.slice(0, 3)}</li>`).join("")}
      </ul>
      <ul class="dates-wrapper wrapper">
          ${s.map((F) => `<li><button ${F.disabled ? "disabled" : ""} type="button" class="date-button ${Os({ date: F.date, nowMonth: i })} ${n == String(F.date) ? "active" : ""}">${F.date}</button></li>`).join("")}
      </ul>
      <ul class="months-wrapper wrapper d-none">
        ${a.map((F, bs) => {
    const xs = c.lang.months[bs].slice(0, 3), Ts = o().format("M");
    return `<li><button class="${F == Ts ? "active" : ""}" data-date="${F}" type="button">${xs}</button></li>`;
  }).join("")}
      </ul>
      <ul class="years-wrapper wrapper d-none">
        ${r.map((F) => `<li><button data-date="${F}" type="button">${F}</button></li>`).join("")}
      </ul>
    </div>
  </div>`;
}, Os = (e) => {
  const { nowMonth: t, date: s } = e, a = new Date(`${t}-${s}`).getDay(), r = a === 0, n = a === 6;
  let i = "";
  return r ? i = "holiday" : n && (i = "pre-holiday"), i;
};
class Fi {
  constructor(t, s) {
    g(this, "options");
    g(this, "locale");
    g(this, "rootContainer");
    g(this, "startDate");
    g(this, "accentColor", "#0090FC");
    g(this, "quickActions", !0);
    g(this, "onTrigger");
    g(this, "_container");
    g(this, "_calendarWrapper");
    g(this, "_datepickerInput");
    g(this, "_datesWrapperEl");
    g(this, "_monthsWrapperEl");
    g(this, "_yearsWrapperEl");
    g(this, "_months");
    g(this, "_dates");
    g(this, "_nowMonth");
    g(this, "_nowDay");
    g(this, "_nowYear");
    g(this, "_dateButtons");
    g(this, "_expandButton");
    g(this, "_prevButton");
    g(this, "_nextButton");
    g(this, "_date");
    g(this, "_isExpanded", !1);
    g(this, "_expandedMode", "months");
    g(this, "_outputDate");
    g(this, "_quickButtons");
    g(this, "_wrapperEls");
    g(this, "_yearRangeButton");
    g(this, "_systemFormat", "YYYY-MM-DD");
    var d, c, m, v, W, R, we, pe;
    const a = document.documentElement;
    this.options = Object.assign(this, s), a.style.setProperty("--accentColor", this.options.accentColor), this.rootContainer = s.rootContainer, this.onTrigger = this.options.onTrigger;
    const r = {
      format: this._systemFormat,
      lang: {
        code: "en",
        ui: {
          quickActions: {
            today: "Today",
            tomorrow: "Tomorrow",
            inTwoDays: "In 2 Days"
          }
        },
        months: o.months(),
        weekdays: o.weekdays()
      }
    };
    this.locale = {
      format: ((d = s.locale) == null ? void 0 : d.format) || r.format,
      lang: {
        code: ((m = (c = s.locale) == null ? void 0 : c.lang) == null ? void 0 : m.code) || r.lang.code,
        ui: { quickActions: ((W = (v = s.locale) == null ? void 0 : v.lang.ui) == null ? void 0 : W.quickActions) || ((R = r.lang.ui) == null ? void 0 : R.quickActions) },
        months: ((we = s.locale) == null ? void 0 : we.lang.months) || r.lang.months,
        weekdays: ((pe = s.locale) == null ? void 0 : pe.lang.weekdays) || r.lang.weekdays
      }
    }, this.startDate = this.options.startDate || o().format(this._systemFormat), this._date = this.options.startDate, this._months = [];
    for (let le = 0; le < 12; le++)
      this._months.push(String(le + 1));
    this._nowMonth = o(this._date).format("YYYY-MM"), this._nowDay = o(this._date).format("D"), this._nowYear = o(this._date).format("YYYY"), this._outputDate = o(this._date).format(this.locale.format), this._dates = [], this.loopDaysMonths(), Pi({
      container: this.rootContainer,
      dates: this._dates,
      months: this._months,
      years: this._years,
      nowMonth: this._nowMonth,
      nowDay: this._nowDay,
      quickActions: this.options.quickActions,
      locale: this.options.locale
    });
    const { months: n, weekdays: i } = this.options.locale.lang;
    o.updateLocale(this.options.locale.lang.code, { months: n, weekdays: i }), this._container = document.querySelector(".calendarify"), this._datepickerInput = document.querySelector(t), this._datesWrapperEl = this._container.querySelector(".dates-wrapper"), this._monthsWrapperEl = this._container.querySelector(".months-wrapper"), this._yearsWrapperEl = this._container.querySelector(".years-wrapper"), this._expandButton = this._container.querySelector('.navigation button[data-action="expand"]'), this._dateButtons = this._container.querySelectorAll(".date-button"), this._prevButton = this._container.querySelector('.navigation button[data-action="prev"]'), this._nextButton = this._container.querySelector('.navigation button[data-action="next"]'), this._calendarWrapper = this._container.querySelector(".calendar"), this._quickButtons = this._container.querySelectorAll(".quick-actions button"), this._wrapperEls = this._calendarWrapper.querySelectorAll(".wrapper:not(:last-child, :nth-child(3))"), this._yearRangeButton = this._container.querySelector('.navigation button[data-action="year-range"]');
  }
  init() {
    this.showValue(), this.changeState(), this._datepickerInput.spellcheck = !1, this._datepickerInput.addEventListener("input", (t) => {
      const s = t.target;
      s.value = this._outputDate;
    }), this._prevButton.addEventListener("click", this.prevMonth.bind(this)), this._nextButton.addEventListener("click", this.nextMonth.bind(this)), this._expandButton.addEventListener("click", this.expand.bind(this)), this._datepickerInput.addEventListener("focus", () => this._container.classList.add("show")), window.addEventListener("click", this.hideOnOutsideClick.bind(this)), this._quickButtons.forEach((t) => t.addEventListener("click", this.quickAction.bind(this)));
  }
  get _years() {
    const t = [], s = o(this._date), a = o(this._date).add(11, "y");
    for (; a.diff(s, "years") >= 0; )
      t.push(s.format("YYYY")), s.add(1, "year");
    return t;
  }
  quickAction(t) {
    switch (t.target.getAttribute("data-action")) {
      case "today":
        this._date = o().format(this._systemFormat);
        break;
      case "tomorrow":
        this._date = o().add(1, "days").format(this._systemFormat);
        break;
      default:
        this._date = o().add(2, "days").format(this._systemFormat);
        break;
    }
    this.showValue(), this.changeState(), this.resetUI();
  }
  showValue() {
    this._outputDate = o(this._date).format(this.locale.format), this._datepickerInput.value = this._outputDate;
  }
  hideOnOutsideClick(t) {
    const s = t.target;
    !s.closest(".calendarify-input") && !s.closest(".calendarify") && (this._container.classList.remove("show"), this.doneState());
  }
  expand() {
    this._isExpanded = !0, this._expandButton.textContent = o(this._date).format("YYYY"), this._wrapperEls.forEach((t) => t.classList.add("d-none")), this._monthsWrapperEl.classList.remove("d-none"), this.showMonths();
  }
  showMonths() {
    this._expandButton.classList.add("d-none"), this._yearRangeButton.classList.remove("d-none");
    const t = this._monthsWrapperEl.querySelectorAll("button");
    t.forEach((s) => s.addEventListener("click", (a) => this.changeMonth(a, t))), this._yearRangeButton.addEventListener("click", this.showYears.bind(this));
  }
  showYears() {
    this._expandedMode = "years", this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.remove("d-none"), this._yearsWrapperEl.innerHTML = `${this._years.map((s) => `<li><button class="${s == this._nowYear ? "active" : ""}" data-date="${s}" type="button">${s}</button></li>`).join("")}`, this._yearsWrapperEl.querySelectorAll("button").forEach((s) => s.addEventListener("click", this.changeYear.bind(this))), this.changeState();
  }
  changeYear(t) {
    const a = t.target.getAttribute("data-date"), r = o(this._nowMonth).format("MM");
    this._date = o(`${a}-${r}-${this._nowDay}`).format(this._systemFormat), this._nowYear = a, this._yearsWrapperEl.classList.add("d-none"), this._monthsWrapperEl.classList.remove("d-none"), this._expandedMode = "months", this.changeState();
  }
  changeMonth(t, s) {
    this._wrapperEls.forEach((d) => d.classList.remove("d-none")), s.forEach((d) => d.classList.remove("active"));
    const a = t.target, r = a.getAttribute("data-date"), n = o(this._date).format("YYYY"), i = o(new Date(`${n} ${r} ${this._nowDay}`));
    this._date = o(i).format(this._systemFormat), a.classList.add("active"), this._isExpanded = !1, this._expandedMode = "months", this.changeState(), this.resetUI();
  }
  doneState() {
    this._container.classList.remove("show");
    const t = {
      date: {
        default: o(this._outputDate).toDate(),
        iso: o(this._outputDate).toISOString()
      },
      formatted: {
        relative: o(this._outputDate).fromNow(),
        calendar: o(this._outputDate).calendar()
      },
      unix: {
        seconds: o(this._outputDate).unix(),
        milliseconds: +o(this._outputDate)
      },
      locale: this.locale,
      partials: {
        day: o(this._outputDate).format("DD"),
        month: o(this._outputDate).format("MM"),
        year: o(this._outputDate).format("YYYY")
      }
    };
    this.resetUI(), this.onTrigger(t);
  }
  resetUI() {
    this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._wrapperEls.forEach((t) => t.classList.remove("d-none")), this._isExpanded = !1, this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._expandButton.classList.remove("d-none"), this._yearRangeButton.classList.add("d-none"), this.changeState();
  }
  changeState() {
    var a;
    this._dates = [], this._nowMonth = o(this._date).format("YYYY-MM"), this._nowDay = o(this._date).format("D"), this.loopDaysMonths();
    const t = o(this._nowMonth).format("M"), s = o(this._nowMonth).format("YYYY");
    switch (this._expandButton.textContent = `${this.locale.lang.months[+t - 1]} ${s}`, this._expandedMode) {
      case "years":
        this._yearRangeButton.textContent = `${this._years[0]} - ${this._years[this._years.length - 1]}`;
        break;
      default:
        this._yearRangeButton.textContent = o(this._date).format("YYYY");
        break;
    }
    if (this.renderDates(), this._dateButtons = this._datesWrapperEl.querySelectorAll(".date-button"), this._dateButtons.forEach((r) => r.addEventListener("click", this.setDate.bind(this))), this._expandedMode == "months" && this._dates.slice(0, 7).every((n) => n.disabled))
      for (let n = 0; n < 7; n++)
        (a = this._dateButtons[n].parentElement) == null || a.classList.add("d-none");
  }
  loopDaysMonths() {
    const t = o(this._date).daysInMonth(), s = o(new Date(this._nowMonth)).isoWeekday(), a = o(this._date).subtract(1, "months").daysInMonth();
    for (let r = 1; r <= s; r++)
      this._dates.unshift({ disabled: !0, date: String(a + 1 - r) });
    for (let r = 1; r <= t; r++)
      this._dates.push({ disabled: !1, date: String(r) });
  }
  renderDates() {
    this._datesWrapperEl.innerHTML = `${this._dates.map((t) => `<li><button ${t.disabled ? "disabled" : ""} type="button" class="date-button ${Os({ date: t.date, nowMonth: this._nowMonth })} ${this._nowDay == String(t.date) ? "active" : ""}">${t.date}</button></li>`).join("")}`;
  }
  setDate(t) {
    const s = t.target;
    this._dateButtons.forEach((a) => a.classList.remove("active")), this._nowDay = String(s.textContent), this._date = `${o(`${this._nowMonth}-${this._nowDay}`).format(this._systemFormat)}`, this.showValue(), s.classList.add("active");
  }
  prevMonth() {
    if (this._isExpanded)
      switch (this._expandedMode) {
        case "months":
          this._date = o(`${this._nowMonth}-${this._nowDay}`).subtract(1, "years").format(this._systemFormat);
          break;
        default:
          this._date = o(`${this._nowMonth}-${this._nowDay}`).subtract(10, "years").format(this._systemFormat), this.showYears();
          break;
      }
    else
      this._date = o(`${this._nowMonth}-${this._nowDay}`).subtract(1, "months").format(this._systemFormat);
    this.changeState();
  }
  nextMonth() {
    if (this._isExpanded)
      switch (this._expandedMode) {
        case "months":
          this._date = o(`${this._nowMonth}-${this._nowDay}`).add(1, "years").format(this._systemFormat);
          break;
        default:
          this._date = o(`${this._nowMonth}-${this._nowDay}`).add(10, "years").format(this._systemFormat), this.showYears();
          break;
      }
    else
      this._date = o(`${this._nowMonth}-${this._nowDay}`).add(1, "months").format(this._systemFormat);
    this.changeState();
  }
}
export {
  Fi as Calendarify
};
