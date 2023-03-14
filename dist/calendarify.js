var ta = Object.defineProperty, sa = Object.defineProperties;
var na = Object.getOwnPropertyDescriptors;
var yt = Object.getOwnPropertySymbols;
var Us = Object.prototype.hasOwnProperty, $s = Object.prototype.propertyIsEnumerable;
var zt = (e, t, s) => t in e ? ta(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, V = (e, t) => {
  for (var s in t || (t = {}))
    Us.call(t, s) && zt(e, s, t[s]);
  if (yt)
    for (var s of yt(t))
      $s.call(t, s) && zt(e, s, t[s]);
  return e;
}, Ne = (e, t) => sa(e, na(t));
var Vs = (e, t) => {
  var s = {};
  for (var n in e)
    Us.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
  if (e != null && yt)
    for (var n of yt(e))
      t.indexOf(n) < 0 && $s.call(e, n) && (s[n] = e[n]);
  return s;
};
var p = (e, t, s) => (zt(e, typeof t != "symbol" ? t + "" : t, s), s);
var Oe = (e, t, s) => new Promise((n, a) => {
  var r = (u) => {
    try {
      o(s.next(u));
    } catch (d) {
      a(d);
    }
  }, i = (u) => {
    try {
      o(s.throw(u));
    } catch (d) {
      a(d);
    }
  }, o = (u) => u.done ? n(u.value) : Promise.resolve(u.value).then(r, i);
  o((s = s.apply(e, t)).next());
});
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var tn;
function l() {
  return tn.apply(null, arguments);
}
function aa(e) {
  tn = e;
}
function se(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Re(e) {
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
function sn(e, t) {
  var s = [], n, a = e.length;
  for (n = 0; n < a; ++n)
    s.push(t(e[n], n));
  return s;
}
function De(e, t) {
  for (var s in t)
    S(t, s) && (e[s] = t[s]);
  return S(t, "toString") && (e.toString = t.toString), S(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function he(e, t, s, n) {
  return bn(e, t, s, n, !0).utc();
}
function ra() {
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
  return e._pf == null && (e._pf = ra()), e._pf;
}
var es;
Array.prototype.some ? es = Array.prototype.some : es = function(e) {
  var t = Object(this), s = t.length >>> 0, n;
  for (n = 0; n < s; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function hs(e) {
  if (e._isValid == null) {
    var t = g(e), s = es.call(t.parsedDateParts, function(a) {
      return a != null;
    }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s);
    if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
  }
  return e._isValid;
}
function Wt(e) {
  var t = he(NaN);
  return e != null ? De(g(t), e) : g(t).userInvalidated = !0, t;
}
var Gs = l.momentProperties = [], Zt = !1;
function ds(e, t) {
  var s, n, a, r = Gs.length;
  if ($(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), $(t._i) || (e._i = t._i), $(t._f) || (e._f = t._f), $(t._l) || (e._l = t._l), $(t._strict) || (e._strict = t._strict), $(t._tzm) || (e._tzm = t._tzm), $(t._isUTC) || (e._isUTC = t._isUTC), $(t._offset) || (e._offset = t._offset), $(t._pf) || (e._pf = g(t)), $(t._locale) || (e._locale = t._locale), r > 0)
    for (s = 0; s < r; s++)
      n = Gs[s], a = t[n], $(a) || (e[n] = a);
  return e;
}
function ht(e) {
  ds(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Zt === !1 && (Zt = !0, l.updateOffset(this), Zt = !1);
}
function ne(e) {
  return e instanceof ht || e != null && e._isAMomentObject != null;
}
function nn(e) {
  l.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + e);
}
function Q(e, t) {
  var s = !0;
  return De(function() {
    if (l.deprecationHandler != null && l.deprecationHandler(null, e), s) {
      var n = [], a, r, i, o = arguments.length;
      for (r = 0; r < o; r++) {
        if (a = "", typeof arguments[r] == "object") {
          a += `
[` + r + "] ";
          for (i in arguments[0])
            S(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[r];
        n.push(a);
      }
      nn(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var js = {};
function an(e, t) {
  l.deprecationHandler != null && l.deprecationHandler(e, t), js[e] || (nn(t), js[e] = !0);
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;
function de(e) {
  return typeof Function != "undefined" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function ia(e) {
  var t, s;
  for (s in e)
    S(e, s) && (t = e[s], de(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function ts(e, t) {
  var s = De({}, e), n;
  for (n in t)
    S(t, n) && (Re(e[n]) && Re(t[n]) ? (s[n] = {}, De(s[n], e[n]), De(s[n], t[n])) : t[n] != null ? s[n] = t[n] : delete s[n]);
  for (n in e)
    S(e, n) && !S(t, n) && Re(e[n]) && (s[n] = De({}, s[n]));
  return s;
}
function cs(e) {
  e != null && this.set(e);
}
var ss;
Object.keys ? ss = Object.keys : ss = function(e) {
  var t, s = [];
  for (t in e)
    S(e, t) && s.push(t);
  return s;
};
var oa = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function la(e, t, s) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return de(n) ? n.call(t, s) : n;
}
function ue(e, t, s) {
  var n = "" + Math.abs(e), a = t - n.length, r = e >= 0;
  return (r ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + n;
}
var fs = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, pt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Jt = {}, He = {};
function y(e, t, s, n) {
  var a = n;
  typeof n == "string" && (a = function() {
    return this[n]();
  }), e && (He[e] = a), t && (He[t[0]] = function() {
    return ue(a.apply(this, arguments), t[1], t[2]);
  }), s && (He[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function ua(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ha(e) {
  var t = e.match(fs), s, n;
  for (s = 0, n = t.length; s < n; s++)
    He[t[s]] ? t[s] = He[t[s]] : t[s] = ua(t[s]);
  return function(a) {
    var r = "", i;
    for (i = 0; i < n; i++)
      r += de(t[i]) ? t[i].call(a, e) : t[i];
    return r;
  };
}
function vt(e, t) {
  return e.isValid() ? (t = rn(t, e.localeData()), Jt[t] = Jt[t] || ha(t), Jt[t](e)) : e.localeData().invalidDate();
}
function rn(e, t) {
  var s = 5;
  function n(a) {
    return t.longDateFormat(a) || a;
  }
  for (pt.lastIndex = 0; s >= 0 && pt.test(e); )
    e = e.replace(
      pt,
      n
    ), pt.lastIndex = 0, s -= 1;
  return e;
}
var da = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function ca(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(fs).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var fa = "Invalid date";
function ma() {
  return this._invalidDate;
}
var _a = "%d", ya = /\d{1,2}/;
function pa(e) {
  return this._ordinal.replace("%d", e);
}
var wa = {
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
function ga(e, t, s, n) {
  var a = this._relativeTime[s];
  return de(a) ? a(e, t, s, n) : a.replace(/%d/i, e);
}
function va(e, t) {
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
var on = {};
function I(e, t) {
  on[e] = t;
}
function ka(e) {
  var t = [], s;
  for (s in e)
    S(e, s) && t.push({ unit: s, priority: on[s] });
  return t.sort(function(n, a) {
    return n.priority - a.priority;
  }), t;
}
function Lt(e) {
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
    return s != null ? (ln(this, e, s), l.updateOffset(this, t), this) : Mt(this, e);
  };
}
function Mt(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function ln(e, t, s) {
  e.isValid() && !isNaN(s) && (t === "FullYear" && Lt(e.year()) && e.month() === 1 && e.date() === 29 ? (s = v(s), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    s,
    e.month(),
    It(s, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](s));
}
function Da(e) {
  return e = X(e), de(this[e]) ? this[e]() : this;
}
function Ma(e, t) {
  if (typeof e == "object") {
    e = ms(e);
    var s = ka(e), n, a = s.length;
    for (n = 0; n < a; n++)
      this[s[n].unit](e[s[n].unit]);
  } else if (e = X(e), de(this[e]))
    return this[e](t);
  return this;
}
var un = /\d/, B = /\d\d/, hn = /\d{3}/, _s = /\d{4}/, Pt = /[+-]?\d{6}/, R = /\d\d?/, dn = /\d\d\d\d?/, cn = /\d\d\d\d\d\d?/, Ft = /\d{1,3}/, ys = /\d{1,4}/, Nt = /[+-]?\d{1,6}/, Be = /\d+/, Ct = /[+-]?\d+/, Sa = /Z|[+-]\d\d:?\d\d/gi, At = /Z|[+-]\d\d(?::?\d\d)?/gi, Ya = /[+-]?\d+(\.\d{1,3})?/, dt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, St;
St = {};
function f(e, t, s) {
  St[e] = de(t) ? t : function(n, a) {
    return n && s ? s : t;
  };
}
function xa(e, t) {
  return S(St, e) ? St[e](t._strict, t._locale) : new RegExp(ba(e));
}
function ba(e) {
  return G(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, n, a, r) {
        return s || n || a || r;
      }
    )
  );
}
function G(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var ns = {};
function b(e, t) {
  var s, n = t, a;
  for (typeof e == "string" && (e = [e]), pe(t) && (n = function(r, i) {
    i[t] = v(r);
  }), a = e.length, s = 0; s < a; s++)
    ns[e[s]] = n;
}
function ct(e, t) {
  b(e, function(s, n, a, r) {
    a._w = a._w || {}, t(s, a._w, a, r);
  });
}
function Oa(e, t, s) {
  t != null && S(ns, e) && ns[e](t, s._a, s, e);
}
var C = 0, me = 1, oe = 2, N = 3, ee = 4, _e = 5, Ee = 6, Ta = 7, Ea = 8;
function Ra(e, t) {
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
function It(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = Ra(t, 12);
  return e += (t - s) / 12, s === 1 ? Lt(e) ? 29 : 28 : 31 - s % 7 % 2;
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
b(["M", "MM"], function(e, t) {
  t[me] = v(e) - 1;
});
b(["MMM", "MMMM"], function(e, t, s, n) {
  var a = s._locale.monthsParse(e, n, s._strict);
  a != null ? t[me] = a : g(s).invalidMonth = e;
});
var Wa = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), fn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), mn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, La = dt, Pa = dt;
function Fa(e, t) {
  return e ? se(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || mn).test(t) ? "format" : "standalone"][e.month()] : se(this._months) ? this._months : this._months.standalone;
}
function Na(e, t) {
  return e ? se(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[mn.test(t) ? "format" : "standalone"][e.month()] : se(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Ca(e, t, s) {
  var n, a, r, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      r = he([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        r,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = P.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = P.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = P.call(this._shortMonthsParse, i), a !== -1 ? a : (a = P.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = P.call(this._longMonthsParse, i), a !== -1 ? a : (a = P.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function Aa(e, t, s) {
  var n, a, r;
  if (this._monthsParseExact)
    return Ca.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (a = he([2e3, n]), s && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[n] && (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (s && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!s && this._monthsParse[n].test(e))
      return n;
  }
}
function _n(e, t) {
  var s;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = v(t);
    else if (t = e.localeData().monthsParse(t), !pe(t))
      return e;
  }
  return s = Math.min(e.date(), It(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s), e;
}
function yn(e) {
  return e != null ? (_n(this, e), l.updateOffset(this, !0), this) : Mt(this, "Month");
}
function Ia() {
  return It(this.year(), this.month());
}
function Ha(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || pn.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (S(this, "_monthsShortRegex") || (this._monthsShortRegex = La), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Ua(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || pn.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (S(this, "_monthsRegex") || (this._monthsRegex = Pa), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function pn() {
  function e(i, o) {
    return o.length - i.length;
  }
  var t = [], s = [], n = [], a, r;
  for (a = 0; a < 12; a++)
    r = he([2e3, a]), t.push(this.monthsShort(r, "")), s.push(this.months(r, "")), n.push(this.months(r, "")), n.push(this.monthsShort(r, ""));
  for (t.sort(e), s.sort(e), n.sort(e), a = 0; a < 12; a++)
    t[a] = G(t[a]), s[a] = G(s[a]);
  for (a = 0; a < 24; a++)
    n[a] = G(n[a]);
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
f("Y", Ct);
f("YY", R, B);
f("YYYY", ys, _s);
f("YYYYY", Nt, Pt);
f("YYYYYY", Nt, Pt);
b(["YYYYY", "YYYYYY"], C);
b("YYYY", function(e, t) {
  t[C] = e.length === 2 ? l.parseTwoDigitYear(e) : v(e);
});
b("YY", function(e, t) {
  t[C] = l.parseTwoDigitYear(e);
});
b("Y", function(e, t) {
  t[C] = parseInt(e, 10);
});
function st(e) {
  return Lt(e) ? 366 : 365;
}
l.parseTwoDigitYear = function(e) {
  return v(e) + (v(e) > 68 ? 1900 : 2e3);
};
var wn = je("FullYear", !0);
function $a() {
  return Lt(this.year());
}
function Va(e, t, s, n, a, r, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, s, n, a, r, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, s, n, a, r, i), o;
}
function rt(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Yt(e, t, s) {
  var n = 7 + t - s, a = (7 + rt(e, 0, n).getUTCDay() - t) % 7;
  return -a + n - 1;
}
function gn(e, t, s, n, a) {
  var r = (7 + s - n) % 7, i = Yt(e, n, a), o = 1 + 7 * (t - 1) + r + i, u, d;
  return o <= 0 ? (u = e - 1, d = st(u) + o) : o > st(e) ? (u = e + 1, d = o - st(e)) : (u = e, d = o), {
    year: u,
    dayOfYear: d
  };
}
function it(e, t, s) {
  var n = Yt(e.year(), t, s), a = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, r, i;
  return a < 1 ? (i = e.year() - 1, r = a + ye(i, t, s)) : a > ye(e.year(), t, s) ? (r = a - ye(e.year(), t, s), i = e.year() + 1) : (i = e.year(), r = a), {
    week: r,
    year: i
  };
}
function ye(e, t, s) {
  var n = Yt(e, t, s), a = Yt(e + 1, t, s);
  return (st(e) - n + a) / 7;
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
function Ga(e) {
  return it(e, this._week.dow, this._week.doy).week;
}
var ja = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Ba() {
  return this._week.dow;
}
function qa() {
  return this._week.doy;
}
function za(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Za(e) {
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
  var a = s._locale.weekdaysParse(e, n, s._strict);
  a != null ? t.d = a : g(s).invalidWeekday = e;
});
ct(["d", "e", "E"], function(e, t, s, n) {
  t[n] = v(e);
});
function Ja(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Qa(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function ps(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Xa = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), vn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ka = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), er = dt, tr = dt, sr = dt;
function nr(e, t) {
  var s = se(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? ps(s, this._week.dow) : e ? s[e.day()] : s;
}
function ar(e) {
  return e === !0 ? ps(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function rr(e) {
  return e === !0 ? ps(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function ir(e, t, s) {
  var n, a, r, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      r = he([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        r,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        r,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (a = P.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = P.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = P.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = P.call(this._weekdaysParse, i), a !== -1 || (a = P.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = P.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = P.call(this._shortWeekdaysParse, i), a !== -1 || (a = P.call(this._weekdaysParse, i), a !== -1) ? a : (a = P.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = P.call(this._minWeekdaysParse, i), a !== -1 || (a = P.call(this._weekdaysParse, i), a !== -1) ? a : (a = P.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function or(e, t, s) {
  var n, a, r;
  if (this._weekdaysParseExact)
    return ir.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (a = he([2e3, 1]).day(n), s && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (r = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (s && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (s && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!s && this._weekdaysParse[n].test(e))
      return n;
  }
}
function lr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Ja(e, this.localeData()), this.add(e - t, "d")) : t;
}
function ur(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function hr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Qa(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function dr(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || ws.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (S(this, "_weekdaysRegex") || (this._weekdaysRegex = er), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function cr(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || ws.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (S(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = tr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function fr(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || ws.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (S(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = sr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function ws() {
  function e(m, c) {
    return c.length - m.length;
  }
  var t = [], s = [], n = [], a = [], r, i, o, u, d;
  for (r = 0; r < 7; r++)
    i = he([2e3, 1]).day(r), o = G(this.weekdaysMin(i, "")), u = G(this.weekdaysShort(i, "")), d = G(this.weekdays(i, "")), t.push(o), s.push(u), n.push(d), a.push(o), a.push(u), a.push(d);
  t.sort(e), s.sort(e), n.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
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
function mr() {
  return this.hours() || 24;
}
y("H", ["HH", 2], 0, "hour");
y("h", ["hh", 2], 0, gs);
y("k", ["kk", 2], 0, mr);
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
function kn(e, t) {
  y(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
kn("a", !0);
kn("A", !1);
A("hour", "h");
I("hour", 13);
function Dn(e, t) {
  return t._meridiemParse;
}
f("a", Dn);
f("A", Dn);
f("H", R);
f("h", R);
f("k", R);
f("HH", R, B);
f("hh", R, B);
f("kk", R, B);
f("hmm", dn);
f("hmmss", cn);
f("Hmm", dn);
f("Hmmss", cn);
b(["H", "HH"], N);
b(["k", "kk"], function(e, t, s) {
  var n = v(e);
  t[N] = n === 24 ? 0 : n;
});
b(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
b(["h", "hh"], function(e, t, s) {
  t[N] = v(e), g(s).bigHour = !0;
});
b("hmm", function(e, t, s) {
  var n = e.length - 2;
  t[N] = v(e.substr(0, n)), t[ee] = v(e.substr(n)), g(s).bigHour = !0;
});
b("hmmss", function(e, t, s) {
  var n = e.length - 4, a = e.length - 2;
  t[N] = v(e.substr(0, n)), t[ee] = v(e.substr(n, 2)), t[_e] = v(e.substr(a)), g(s).bigHour = !0;
});
b("Hmm", function(e, t, s) {
  var n = e.length - 2;
  t[N] = v(e.substr(0, n)), t[ee] = v(e.substr(n));
});
b("Hmmss", function(e, t, s) {
  var n = e.length - 4, a = e.length - 2;
  t[N] = v(e.substr(0, n)), t[ee] = v(e.substr(n, 2)), t[_e] = v(e.substr(a));
});
function _r(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var yr = /[ap]\.?m?\.?/i, pr = je("Hours", !0);
function wr(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var Mn = {
  calendar: oa,
  longDateFormat: da,
  invalidDate: fa,
  ordinal: _a,
  dayOfMonthOrdinalParse: ya,
  relativeTime: wa,
  months: Wa,
  monthsShort: fn,
  week: ja,
  weekdays: Xa,
  weekdaysMin: Ka,
  weekdaysShort: vn,
  meridiemParse: yr
}, W = {}, Ke = {}, ot;
function gr(e, t) {
  var s, n = Math.min(e.length, t.length);
  for (s = 0; s < n; s += 1)
    if (e[s] !== t[s])
      return s;
  return n;
}
function Bs(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function vr(e) {
  for (var t = 0, s, n, a, r; t < e.length; ) {
    for (r = Bs(e[t]).split("-"), s = r.length, n = Bs(e[t + 1]), n = n ? n.split("-") : null; s > 0; ) {
      if (a = Ht(r.slice(0, s).join("-")), a)
        return a;
      if (n && n.length >= s && gr(r, n) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return ot;
}
function kr(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Ht(e) {
  var t = null, s;
  if (W[e] === void 0 && typeof module != "undefined" && module && module.exports && kr(e))
    try {
      t = ot._abbr, s = require, s("./locale/" + e), Se(t);
    } catch (n) {
      W[e] = null;
    }
  return W[e];
}
function Se(e, t) {
  var s;
  return e && ($(t) ? s = we(e) : s = vs(e, t), s ? ot = s : typeof console != "undefined" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ot._abbr;
}
function vs(e, t) {
  if (t !== null) {
    var s, n = Mn;
    if (t.abbr = e, W[e] != null)
      an(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = W[e]._config;
    else if (t.parentLocale != null)
      if (W[t.parentLocale] != null)
        n = W[t.parentLocale]._config;
      else if (s = Ht(t.parentLocale), s != null)
        n = s._config;
      else
        return Ke[t.parentLocale] || (Ke[t.parentLocale] = []), Ke[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return W[e] = new cs(ts(n, t)), Ke[e] && Ke[e].forEach(function(a) {
      vs(a.name, a.config);
    }), Se(e), W[e];
  } else
    return delete W[e], null;
}
function Dr(e, t) {
  if (t != null) {
    var s, n, a = Mn;
    W[e] != null && W[e].parentLocale != null ? W[e].set(ts(W[e]._config, t)) : (n = Ht(e), n != null && (a = n._config), t = ts(a, t), n == null && (t.abbr = e), s = new cs(t), s.parentLocale = W[e], W[e] = s), Se(e);
  } else
    W[e] != null && (W[e].parentLocale != null ? (W[e] = W[e].parentLocale, e === Se() && Se(e)) : W[e] != null && delete W[e]);
  return W[e];
}
function we(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ot;
  if (!se(e)) {
    if (t = Ht(e), t)
      return t;
    e = [e];
  }
  return vr(e);
}
function Mr() {
  return ss(W);
}
function ks(e) {
  var t, s = e._a;
  return s && g(e).overflow === -2 && (t = s[me] < 0 || s[me] > 11 ? me : s[oe] < 1 || s[oe] > It(s[C], s[me]) ? oe : s[N] < 0 || s[N] > 24 || s[N] === 24 && (s[ee] !== 0 || s[_e] !== 0 || s[Ee] !== 0) ? N : s[ee] < 0 || s[ee] > 59 ? ee : s[_e] < 0 || s[_e] > 59 ? _e : s[Ee] < 0 || s[Ee] > 999 ? Ee : -1, g(e)._overflowDayOfYear && (t < C || t > oe) && (t = oe), g(e)._overflowWeeks && t === -1 && (t = Ta), g(e)._overflowWeekday && t === -1 && (t = Ea), g(e).overflow = t), e;
}
var Sr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Yr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, xr = /Z|[+-]\d\d(?::?\d\d)?/, wt = [
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
], Qt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], br = /^\/?Date\((-?\d+)/i, Or = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Tr = {
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
function Sn(e) {
  var t, s, n = e._i, a = Sr.exec(n) || Yr.exec(n), r, i, o, u, d = wt.length, m = Qt.length;
  if (a) {
    for (g(e).iso = !0, t = 0, s = d; t < s; t++)
      if (wt[t][1].exec(a[1])) {
        i = wt[t][0], r = wt[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = m; t < s; t++)
        if (Qt[t][1].exec(a[3])) {
          o = (a[2] || " ") + Qt[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!r && o != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (xr.exec(a[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (u || ""), Ms(e);
  } else
    e._isValid = !1;
}
function Er(e, t, s, n, a, r) {
  var i = [
    Rr(e),
    fn.indexOf(t),
    parseInt(s, 10),
    parseInt(n, 10),
    parseInt(a, 10)
  ];
  return r && i.push(parseInt(r, 10)), i;
}
function Rr(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Wr(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Lr(e, t, s) {
  if (e) {
    var n = vn.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== a)
      return g(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Pr(e, t, s) {
  if (e)
    return Tr[e];
  if (t)
    return 0;
  var n = parseInt(s, 10), a = n % 100, r = (n - a) / 100;
  return r * 60 + a;
}
function Yn(e) {
  var t = Or.exec(Wr(e._i)), s;
  if (t) {
    if (s = Er(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Lr(t[1], s, e))
      return;
    e._a = s, e._tzm = Pr(t[8], t[9], t[10]), e._d = rt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), g(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Fr(e) {
  var t = br.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (Sn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Yn(e), e._isValid === !1)
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
function Nr(e) {
  var t = new Date(l.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Ds(e) {
  var t, s, n = [], a, r, i;
  if (!e._d) {
    for (a = Nr(e), e._w && e._a[oe] == null && e._a[me] == null && Cr(e), e._dayOfYear != null && (i = Ae(e._a[C], a[C]), (e._dayOfYear > st(i) || e._dayOfYear === 0) && (g(e)._overflowDayOfYear = !0), s = rt(i, 0, e._dayOfYear), e._a[me] = s.getUTCMonth(), e._a[oe] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[N] === 24 && e._a[ee] === 0 && e._a[_e] === 0 && e._a[Ee] === 0 && (e._nextDay = !0, e._a[N] = 0), e._d = (e._useUTC ? rt : Va).apply(
      null,
      n
    ), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[N] = 24), e._w && typeof e._w.d != "undefined" && e._w.d !== r && (g(e).weekdayMismatch = !0);
  }
}
function Cr(e) {
  var t, s, n, a, r, i, o, u, d;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (r = 1, i = 4, s = Ae(
    t.GG,
    e._a[C],
    it(E(), 1, 4).year
  ), n = Ae(t.W, 1), a = Ae(t.E, 1), (a < 1 || a > 7) && (u = !0)) : (r = e._locale._week.dow, i = e._locale._week.doy, d = it(E(), r, i), s = Ae(t.gg, e._a[C], d.year), n = Ae(t.w, d.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (u = !0)) : t.e != null ? (a = t.e + r, (t.e < 0 || t.e > 6) && (u = !0)) : a = r), n < 1 || n > ye(s, r, i) ? g(e)._overflowWeeks = !0 : u != null ? g(e)._overflowWeekday = !0 : (o = gn(s, n, a, r, i), e._a[C] = o.year, e._dayOfYear = o.dayOfYear);
}
l.ISO_8601 = function() {
};
l.RFC_2822 = function() {
};
function Ms(e) {
  if (e._f === l.ISO_8601) {
    Sn(e);
    return;
  }
  if (e._f === l.RFC_2822) {
    Yn(e);
    return;
  }
  e._a = [], g(e).empty = !0;
  var t = "" + e._i, s, n, a, r, i, o = t.length, u = 0, d, m;
  for (a = rn(e._f, e._locale).match(fs) || [], m = a.length, s = 0; s < m; s++)
    r = a[s], n = (t.match(xa(r, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && g(e).unusedInput.push(i), t = t.slice(
      t.indexOf(n) + n.length
    ), u += n.length), He[r] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(r), Oa(r, n, e)) : e._strict && !n && g(e).unusedTokens.push(r);
  g(e).charsLeftOver = o - u, t.length > 0 && g(e).unusedInput.push(t), e._a[N] <= 12 && g(e).bigHour === !0 && e._a[N] > 0 && (g(e).bigHour = void 0), g(e).parsedDateParts = e._a.slice(0), g(e).meridiem = e._meridiem, e._a[N] = Ar(
    e._locale,
    e._a[N],
    e._meridiem
  ), d = g(e).era, d !== null && (e._a[C] = e._locale.erasConvertYear(d, e._a[C])), Ds(e), ks(e);
}
function Ar(e, t, s) {
  var n;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (n = e.isPM(s), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function Ir(e) {
  var t, s, n, a, r, i, o = !1, u = e._f.length;
  if (u === 0) {
    g(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (a = 0; a < u; a++)
    r = 0, i = !1, t = ds({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Ms(t), hs(t) && (i = !0), r += g(t).charsLeftOver, r += g(t).unusedTokens.length * 10, g(t).score = r, o ? r < n && (n = r, s = t) : (n == null || r < n || i) && (n = r, s = t, i && (o = !0));
  De(e, s || t);
}
function Hr(e) {
  if (!e._d) {
    var t = ms(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = sn(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), Ds(e);
  }
}
function Ur(e) {
  var t = new ht(ks(xn(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function xn(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || we(e._l), t === null || s === void 0 && t === "" ? Wt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ne(t) ? new ht(ks(t)) : (ut(t) ? e._d = t : se(s) ? Ir(e) : s ? Ms(e) : $r(e), hs(e) || (e._d = null), e));
}
function $r(e) {
  var t = e._i;
  $(t) ? e._d = new Date(l.now()) : ut(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Fr(e) : se(t) ? (e._a = sn(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), Ds(e)) : Re(t) ? Hr(e) : pe(t) ? e._d = new Date(t) : l.createFromInputFallback(e);
}
function bn(e, t, s, n, a) {
  var r = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (s === !0 || s === !1) && (n = s, s = void 0), (Re(e) && us(e) || se(e) && e.length === 0) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = a, r._l = s, r._i = e, r._f = t, r._strict = n, Ur(r);
}
function E(e, t, s, n) {
  return bn(e, t, s, n, !1);
}
var Vr = Q(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = E.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Wt();
  }
), Gr = Q(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = E.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Wt();
  }
);
function On(e, t) {
  var s, n;
  if (t.length === 1 && se(t[0]) && (t = t[0]), !t.length)
    return E();
  for (s = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](s)) && (s = t[n]);
  return s;
}
function jr() {
  var e = [].slice.call(arguments, 0);
  return On("isBefore", e);
}
function Br() {
  var e = [].slice.call(arguments, 0);
  return On("isAfter", e);
}
var qr = function() {
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
function zr(e) {
  var t, s = !1, n, a = et.length;
  for (t in e)
    if (S(e, t) && !(P.call(et, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < a; ++n)
    if (e[et[n]]) {
      if (s)
        return !1;
      parseFloat(e[et[n]]) !== v(e[et[n]]) && (s = !0);
    }
  return !0;
}
function Zr() {
  return this._isValid;
}
function Jr() {
  return re(NaN);
}
function Ut(e) {
  var t = ms(e), s = t.year || 0, n = t.quarter || 0, a = t.month || 0, r = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, u = t.minute || 0, d = t.second || 0, m = t.millisecond || 0;
  this._isValid = zr(t), this._milliseconds = +m + d * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + r * 7, this._months = +a + n * 3 + s * 12, this._data = {}, this._locale = we(), this._bubble();
}
function kt(e) {
  return e instanceof Ut;
}
function as(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Qr(e, t, s) {
  var n = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), r = 0, i;
  for (i = 0; i < n; i++)
    (s && e[i] !== t[i] || !s && v(e[i]) !== v(t[i])) && r++;
  return r + a;
}
function Tn(e, t) {
  y(e, 0, 0, function() {
    var s = this.utcOffset(), n = "+";
    return s < 0 && (s = -s, n = "-"), n + ue(~~(s / 60), 2) + t + ue(~~s % 60, 2);
  });
}
Tn("Z", ":");
Tn("ZZ", "");
f("Z", At);
f("ZZ", At);
b(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Ss(At, e);
});
var Xr = /([\+\-]|\d\d)/gi;
function Ss(e, t) {
  var s = (t || "").match(e), n, a, r;
  return s === null ? null : (n = s[s.length - 1] || [], a = (n + "").match(Xr) || ["-", 0, 0], r = +(a[1] * 60) + v(a[2]), r === 0 ? 0 : a[0] === "+" ? r : -r);
}
function Ys(e, t) {
  var s, n;
  return t._isUTC ? (s = t.clone(), n = (ne(e) || ut(e) ? e.valueOf() : E(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + n), l.updateOffset(s, !1), s) : E(e).local();
}
function rs(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
l.updateOffset = function() {
};
function Kr(e, t, s) {
  var n = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ss(At, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = rs(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), n !== e && (!t || this._changeInProgress ? Wn(
      this,
      re(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : rs(this);
}
function ei(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function ti(e) {
  return this.utcOffset(0, e);
}
function si(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(rs(this), "m")), this;
}
function ni() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ss(Sa, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function ai(e) {
  return this.isValid() ? (e = e ? E(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function ri() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function ii() {
  if (!$(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return ds(e, this), e = xn(e), e._a ? (t = e._isUTC ? he(e._a) : E(e._a), this._isDSTShifted = this.isValid() && Qr(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function oi() {
  return this.isValid() ? !this._isUTC : !1;
}
function li() {
  return this.isValid() ? this._isUTC : !1;
}
function En() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var ui = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, hi = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function re(e, t) {
  var s = e, n = null, a, r, i;
  return kt(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : pe(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (n = ui.exec(e)) ? (a = n[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: v(n[oe]) * a,
    h: v(n[N]) * a,
    m: v(n[ee]) * a,
    s: v(n[_e]) * a,
    ms: v(as(n[Ee] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (n = hi.exec(e)) ? (a = n[1] === "-" ? -1 : 1, s = {
    y: Te(n[2], a),
    M: Te(n[3], a),
    w: Te(n[4], a),
    d: Te(n[5], a),
    h: Te(n[6], a),
    m: Te(n[7], a),
    s: Te(n[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = di(
    E(s.from),
    E(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), r = new Ut(s), kt(e) && S(e, "_locale") && (r._locale = e._locale), kt(e) && S(e, "_isValid") && (r._isValid = e._isValid), r;
}
re.fn = Ut.prototype;
re.invalid = Jr;
function Te(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function qs(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function di(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Ys(t, e), e.isBefore(t) ? s = qs(e, t) : (s = qs(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function Rn(e, t) {
  return function(s, n) {
    var a, r;
    return n !== null && !isNaN(+n) && (an(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), r = s, s = n, n = r), a = re(s, n), Wn(this, a, e), this;
  };
}
function Wn(e, t, s, n) {
  var a = t._milliseconds, r = as(t._days), i = as(t._months);
  e.isValid() && (n = n == null ? !0 : n, i && _n(e, Mt(e, "Month") + i * s), r && ln(e, "Date", Mt(e, "Date") + r * s), a && e._d.setTime(e._d.valueOf() + a * s), n && l.updateOffset(e, r || i));
}
var ci = Rn(1, "add"), fi = Rn(-1, "subtract");
function Ln(e) {
  return typeof e == "string" || e instanceof String;
}
function mi(e) {
  return ne(e) || ut(e) || Ln(e) || pe(e) || yi(e) || _i(e) || e === null || e === void 0;
}
function _i(e) {
  var t = Re(e) && !us(e), s = !1, n = [
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
  ], a, r, i = n.length;
  for (a = 0; a < i; a += 1)
    r = n[a], s = s || S(e, r);
  return t && s;
}
function yi(e) {
  var t = se(e), s = !1;
  return t && (s = e.filter(function(n) {
    return !pe(n) && Ln(e);
  }).length === 0), t && s;
}
function pi(e) {
  var t = Re(e) && !us(e), s = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, r;
  for (a = 0; a < n.length; a += 1)
    r = n[a], s = s || S(e, r);
  return t && s;
}
function wi(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function gi(e, t) {
  arguments.length === 1 && (arguments[0] ? mi(arguments[0]) ? (e = arguments[0], t = void 0) : pi(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || E(), n = Ys(s, this).startOf("day"), a = l.calendarFormat(this, n) || "sameElse", r = t && (de(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    r || this.localeData().calendar(a, this, E(s))
  );
}
function vi() {
  return new ht(this);
}
function ki(e, t) {
  var s = ne(e) ? e : E(e);
  return this.isValid() && s.isValid() ? (t = X(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Di(e, t) {
  var s = ne(e) ? e : E(e);
  return this.isValid() && s.isValid() ? (t = X(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function Mi(e, t, s, n) {
  var a = ne(e) ? e : E(e), r = ne(t) ? t : E(t);
  return this.isValid() && a.isValid() && r.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (n[1] === ")" ? this.isBefore(r, s) : !this.isAfter(r, s))) : !1;
}
function Si(e, t) {
  var s = ne(e) ? e : E(e), n;
  return this.isValid() && s.isValid() ? (t = X(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function Yi(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function xi(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function bi(e, t, s) {
  var n, a, r;
  if (!this.isValid())
    return NaN;
  if (n = Ys(e, this), !n.isValid())
    return NaN;
  switch (a = (n.utcOffset() - this.utcOffset()) * 6e4, t = X(t), t) {
    case "year":
      r = Dt(this, n) / 12;
      break;
    case "month":
      r = Dt(this, n);
      break;
    case "quarter":
      r = Dt(this, n) / 3;
      break;
    case "second":
      r = (this - n) / 1e3;
      break;
    case "minute":
      r = (this - n) / 6e4;
      break;
    case "hour":
      r = (this - n) / 36e5;
      break;
    case "day":
      r = (this - n - a) / 864e5;
      break;
    case "week":
      r = (this - n - a) / 6048e5;
      break;
    default:
      r = this - n;
  }
  return s ? r : J(r);
}
function Dt(e, t) {
  if (e.date() < t.date())
    return -Dt(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(s, "months"), a, r;
  return t - n < 0 ? (a = e.clone().add(s - 1, "months"), r = (t - n) / (n - a)) : (a = e.clone().add(s + 1, "months"), r = (t - n) / (a - n)), -(s + r) || 0;
}
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Oi() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Ti(e) {
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
function Ei() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, n, a, r;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", r = t + '[")]', this.format(s + n + a + r);
}
function Ri(e) {
  e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
  var t = vt(this, e);
  return this.localeData().postformat(t);
}
function Wi(e, t) {
  return this.isValid() && (ne(e) && e.isValid() || E(e).isValid()) ? re({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Li(e) {
  return this.from(E(), e);
}
function Pi(e, t) {
  return this.isValid() && (ne(e) && e.isValid() || E(e).isValid()) ? re({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Fi(e) {
  return this.to(E(), e);
}
function Pn(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = we(e), t != null && (this._locale = t), this);
}
var Fn = Q(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Nn() {
  return this._locale;
}
var xt = 1e3, Ue = 60 * xt, bt = 60 * Ue, Cn = (365 * 400 + 97) * 24 * bt;
function $e(e, t) {
  return (e % t + t) % t;
}
function An(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - Cn : new Date(e, t, s).valueOf();
}
function In(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - Cn : Date.UTC(e, t, s);
}
function Ni(e) {
  var t, s;
  if (e = X(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? In : An, e) {
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
function Ci(e) {
  var t, s;
  if (e = X(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? In : An, e) {
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
function Ai() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Ii() {
  return Math.floor(this.valueOf() / 1e3);
}
function Hi() {
  return new Date(this.valueOf());
}
function Ui() {
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
function $i() {
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
function Vi() {
  return this.isValid() ? this.toISOString() : null;
}
function Gi() {
  return hs(this);
}
function ji() {
  return De({}, g(this));
}
function Bi() {
  return g(this).overflow;
}
function qi() {
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
f("NNNN", ao);
f("NNNNN", ro);
b(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, n) {
    var a = s._locale.erasParse(e, n, s._strict);
    a ? g(s).era = a : g(s).invalidEra = e;
  }
);
f("y", Be);
f("yy", Be);
f("yyy", Be);
f("yyyy", Be);
f("yo", io);
b(["y", "yy", "yyy", "yyyy"], C);
b(["yo"], function(e, t, s, n) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[C] = s._locale.eraYearOrdinalParse(e, a) : t[C] = parseInt(e, 10);
});
function zi(e, t) {
  var s, n, a, r = this._eras || we("en")._eras;
  for (s = 0, n = r.length; s < n; ++s) {
    switch (typeof r[s].since) {
      case "string":
        a = l(r[s].since).startOf("day"), r[s].since = a.valueOf();
        break;
    }
    switch (typeof r[s].until) {
      case "undefined":
        r[s].until = 1 / 0;
        break;
      case "string":
        a = l(r[s].until).startOf("day").valueOf(), r[s].until = a.valueOf();
        break;
    }
  }
  return r;
}
function Zi(e, t, s) {
  var n, a, r = this.eras(), i, o, u;
  for (e = e.toUpperCase(), n = 0, a = r.length; n < a; ++n)
    if (i = r[n].name.toUpperCase(), o = r[n].abbr.toUpperCase(), u = r[n].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return r[n];
          break;
        case "NNNN":
          if (i === e)
            return r[n];
          break;
        case "NNNNN":
          if (u === e)
            return r[n];
          break;
      }
    else if ([i, o, u].indexOf(e) >= 0)
      return r[n];
}
function Ji(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * s;
}
function Qi() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].name;
  return "";
}
function Xi() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].narrow;
  return "";
}
function Ki() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].abbr;
  return "";
}
function eo() {
  var e, t, s, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return (this.year() - l(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function to(e) {
  return S(this, "_erasNameRegex") || bs.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function so(e) {
  return S(this, "_erasAbbrRegex") || bs.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function no(e) {
  return S(this, "_erasNarrowRegex") || bs.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function xs(e, t) {
  return t.erasAbbrRegex(e);
}
function ao(e, t) {
  return t.erasNameRegex(e);
}
function ro(e, t) {
  return t.erasNarrowRegex(e);
}
function io(e, t) {
  return t._eraYearOrdinalRegex || Be;
}
function bs() {
  var e = [], t = [], s = [], n = [], a, r, i = this.eras();
  for (a = 0, r = i.length; a < r; ++a)
    t.push(G(i[a].name)), e.push(G(i[a].abbr)), s.push(G(i[a].narrow)), n.push(G(i[a].name)), n.push(G(i[a].abbr)), n.push(G(i[a].narrow));
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
function $t(e, t) {
  y(0, [e, e.length], 0, t);
}
$t("gggg", "weekYear");
$t("ggggg", "weekYear");
$t("GGGG", "isoWeekYear");
$t("GGGGG", "isoWeekYear");
A("weekYear", "gg");
A("isoWeekYear", "GG");
I("weekYear", 1);
I("isoWeekYear", 1);
f("G", Ct);
f("g", Ct);
f("GG", R, B);
f("gg", R, B);
f("GGGG", ys, _s);
f("gggg", ys, _s);
f("GGGGG", Nt, Pt);
f("ggggg", Nt, Pt);
ct(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, n) {
    t[n.substr(0, 2)] = v(e);
  }
);
ct(["gg", "GG"], function(e, t, s, n) {
  t[n] = l.parseTwoDigitYear(e);
});
function oo(e) {
  return Hn.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function lo(e) {
  return Hn.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function uo() {
  return ye(this.year(), 1, 4);
}
function ho() {
  return ye(this.isoWeekYear(), 1, 4);
}
function co() {
  var e = this.localeData()._week;
  return ye(this.year(), e.dow, e.doy);
}
function fo() {
  var e = this.localeData()._week;
  return ye(this.weekYear(), e.dow, e.doy);
}
function Hn(e, t, s, n, a) {
  var r;
  return e == null ? it(this, n, a).year : (r = ye(e, n, a), t > r && (t = r), mo.call(this, e, t, s, n, a));
}
function mo(e, t, s, n, a) {
  var r = gn(e, t, s, n, a), i = rt(r.year, 0, r.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
y("Q", 0, "Qo", "quarter");
A("quarter", "Q");
I("quarter", 7);
f("Q", un);
b("Q", function(e, t) {
  t[me] = (v(e) - 1) * 3;
});
function _o(e) {
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
b(["D", "DD"], oe);
b("Do", function(e, t) {
  t[oe] = v(e.match(R)[0]);
});
var Un = je("Date", !0);
y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
A("dayOfYear", "DDD");
I("dayOfYear", 4);
f("DDD", Ft);
f("DDDD", hn);
b(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = v(e);
});
function yo(e) {
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
b(["m", "mm"], ee);
var po = je("Minutes", !1);
y("s", ["ss", 2], 0, "second");
A("second", "s");
I("second", 15);
f("s", R);
f("ss", R, B);
b(["s", "ss"], _e);
var wo = je("Seconds", !1);
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
f("S", Ft, un);
f("SS", Ft, B);
f("SSS", Ft, hn);
var Me, $n;
for (Me = "SSSS"; Me.length <= 9; Me += "S")
  f(Me, Be);
function go(e, t) {
  t[Ee] = v(("0." + e) * 1e3);
}
for (Me = "S"; Me.length <= 9; Me += "S")
  b(Me, go);
$n = je("Milliseconds", !1);
y("z", 0, 0, "zoneAbbr");
y("zz", 0, 0, "zoneName");
function vo() {
  return this._isUTC ? "UTC" : "";
}
function ko() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var h = ht.prototype;
h.add = ci;
h.calendar = gi;
h.clone = vi;
h.diff = bi;
h.endOf = Ci;
h.format = Ri;
h.from = Wi;
h.fromNow = Li;
h.to = Pi;
h.toNow = Fi;
h.get = Da;
h.invalidAt = Bi;
h.isAfter = ki;
h.isBefore = Di;
h.isBetween = Mi;
h.isSame = Si;
h.isSameOrAfter = Yi;
h.isSameOrBefore = xi;
h.isValid = Gi;
h.lang = Fn;
h.locale = Pn;
h.localeData = Nn;
h.max = Gr;
h.min = Vr;
h.parsingFlags = ji;
h.set = Ma;
h.startOf = Ni;
h.subtract = fi;
h.toArray = Ui;
h.toObject = $i;
h.toDate = Hi;
h.toISOString = Ti;
h.inspect = Ei;
typeof Symbol != "undefined" && Symbol.for != null && (h[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
h.toJSON = Vi;
h.toString = Oi;
h.unix = Ii;
h.valueOf = Ai;
h.creationData = qi;
h.eraName = Qi;
h.eraNarrow = Xi;
h.eraAbbr = Ki;
h.eraYear = eo;
h.year = wn;
h.isLeapYear = $a;
h.weekYear = oo;
h.isoWeekYear = lo;
h.quarter = h.quarters = _o;
h.month = yn;
h.daysInMonth = Ia;
h.week = h.weeks = za;
h.isoWeek = h.isoWeeks = Za;
h.weeksInYear = co;
h.weeksInWeekYear = fo;
h.isoWeeksInYear = uo;
h.isoWeeksInISOWeekYear = ho;
h.date = Un;
h.day = h.days = lr;
h.weekday = ur;
h.isoWeekday = hr;
h.dayOfYear = yo;
h.hour = h.hours = pr;
h.minute = h.minutes = po;
h.second = h.seconds = wo;
h.millisecond = h.milliseconds = $n;
h.utcOffset = Kr;
h.utc = ti;
h.local = si;
h.parseZone = ni;
h.hasAlignedHourOffset = ai;
h.isDST = ri;
h.isLocal = oi;
h.isUtcOffset = li;
h.isUtc = En;
h.isUTC = En;
h.zoneAbbr = vo;
h.zoneName = ko;
h.dates = Q(
  "dates accessor is deprecated. Use date instead.",
  Un
);
h.months = Q(
  "months accessor is deprecated. Use month instead",
  yn
);
h.years = Q(
  "years accessor is deprecated. Use year instead",
  wn
);
h.zone = Q(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  ei
);
h.isDSTShifted = Q(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  ii
);
function Do(e) {
  return E(e * 1e3);
}
function Mo() {
  return E.apply(null, arguments).parseZone();
}
function Vn(e) {
  return e;
}
var Y = cs.prototype;
Y.calendar = la;
Y.longDateFormat = ca;
Y.invalidDate = ma;
Y.ordinal = pa;
Y.preparse = Vn;
Y.postformat = Vn;
Y.relativeTime = ga;
Y.pastFuture = va;
Y.set = ia;
Y.eras = zi;
Y.erasParse = Zi;
Y.erasConvertYear = Ji;
Y.erasAbbrRegex = so;
Y.erasNameRegex = to;
Y.erasNarrowRegex = no;
Y.months = Fa;
Y.monthsShort = Na;
Y.monthsParse = Aa;
Y.monthsRegex = Ua;
Y.monthsShortRegex = Ha;
Y.week = Ga;
Y.firstDayOfYear = qa;
Y.firstDayOfWeek = Ba;
Y.weekdays = nr;
Y.weekdaysMin = rr;
Y.weekdaysShort = ar;
Y.weekdaysParse = or;
Y.weekdaysRegex = dr;
Y.weekdaysShortRegex = cr;
Y.weekdaysMinRegex = fr;
Y.isPM = _r;
Y.meridiem = wr;
function Ot(e, t, s, n) {
  var a = we(), r = he().set(n, t);
  return a[s](r, e);
}
function Gn(e, t, s) {
  if (pe(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ot(e, t, s, "month");
  var n, a = [];
  for (n = 0; n < 12; n++)
    a[n] = Ot(e, n, s, "month");
  return a;
}
function Os(e, t, s, n) {
  typeof e == "boolean" ? (pe(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, pe(t) && (s = t, t = void 0), t = t || "");
  var a = we(), r = e ? a._week.dow : 0, i, o = [];
  if (s != null)
    return Ot(t, (s + r) % 7, n, "day");
  for (i = 0; i < 7; i++)
    o[i] = Ot(t, (i + r) % 7, n, "day");
  return o;
}
function So(e, t) {
  return Gn(e, t, "months");
}
function Yo(e, t) {
  return Gn(e, t, "monthsShort");
}
function xo(e, t, s) {
  return Os(e, t, s, "weekdays");
}
function bo(e, t, s) {
  return Os(e, t, s, "weekdaysShort");
}
function Oo(e, t, s) {
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
function To() {
  var e = this._data;
  return this._milliseconds = ce(this._milliseconds), this._days = ce(this._days), this._months = ce(this._months), e.milliseconds = ce(e.milliseconds), e.seconds = ce(e.seconds), e.minutes = ce(e.minutes), e.hours = ce(e.hours), e.months = ce(e.months), e.years = ce(e.years), this;
}
function jn(e, t, s, n) {
  var a = re(t, s);
  return e._milliseconds += n * a._milliseconds, e._days += n * a._days, e._months += n * a._months, e._bubble();
}
function Eo(e, t) {
  return jn(this, e, t, 1);
}
function Ro(e, t) {
  return jn(this, e, t, -1);
}
function zs(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Wo() {
  var e = this._milliseconds, t = this._days, s = this._months, n = this._data, a, r, i, o, u;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += zs(is(s) + t) * 864e5, t = 0, s = 0), n.milliseconds = e % 1e3, a = J(e / 1e3), n.seconds = a % 60, r = J(a / 60), n.minutes = r % 60, i = J(r / 60), n.hours = i % 24, t += J(i / 24), u = J(Bn(t)), s += u, t -= zs(is(u)), o = J(s / 12), s %= 12, n.days = t, n.months = s, n.years = o, this;
}
function Bn(e) {
  return e * 4800 / 146097;
}
function is(e) {
  return e * 146097 / 4800;
}
function Lo(e) {
  if (!this.isValid())
    return NaN;
  var t, s, n = this._milliseconds;
  if (e = X(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, s = this._months + Bn(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(is(this._months)), e) {
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
function Po() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + v(this._months / 12) * 31536e6 : NaN;
}
function ge(e) {
  return function() {
    return this.as(e);
  };
}
var Fo = ge("ms"), No = ge("s"), Co = ge("m"), Ao = ge("h"), Io = ge("d"), Ho = ge("w"), Uo = ge("M"), $o = ge("Q"), Vo = ge("y");
function Go() {
  return re(this);
}
function jo(e) {
  return e = X(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Le(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Bo = Le("milliseconds"), qo = Le("seconds"), zo = Le("minutes"), Zo = Le("hours"), Jo = Le("days"), Qo = Le("months"), Xo = Le("years");
function Ko() {
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
function el(e, t, s, n, a) {
  return a.relativeTime(t || 1, !!s, e, n);
}
function tl(e, t, s, n) {
  var a = re(e).abs(), r = fe(a.as("s")), i = fe(a.as("m")), o = fe(a.as("h")), u = fe(a.as("d")), d = fe(a.as("M")), m = fe(a.as("w")), c = fe(a.as("y")), _ = r <= s.ss && ["s", r] || r < s.s && ["ss", r] || i <= 1 && ["m"] || i < s.m && ["mm", i] || o <= 1 && ["h"] || o < s.h && ["hh", o] || u <= 1 && ["d"] || u < s.d && ["dd", u];
  return s.w != null && (_ = _ || m <= 1 && ["w"] || m < s.w && ["ww", m]), _ = _ || d <= 1 && ["M"] || d < s.M && ["MM", d] || c <= 1 && ["y"] || ["yy", c], _[2] = t, _[3] = +e > 0, _[4] = n, el.apply(null, _);
}
function sl(e) {
  return e === void 0 ? fe : typeof e == "function" ? (fe = e, !0) : !1;
}
function nl(e, t) {
  return Ie[e] === void 0 ? !1 : t === void 0 ? Ie[e] : (Ie[e] = t, e === "s" && (Ie.ss = t - 1), !0);
}
function al(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, n = Ie, a, r;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (n = Object.assign({}, Ie, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), a = this.localeData(), r = tl(this, !s, n, a), s && (r = a.pastFuture(+this, r)), a.postformat(r);
}
var Xt = Math.abs;
function Ce(e) {
  return (e > 0) - (e < 0) || +e;
}
function Vt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Xt(this._milliseconds) / 1e3, t = Xt(this._days), s = Xt(this._months), n, a, r, i, o = this.asSeconds(), u, d, m, c;
  return o ? (n = J(e / 60), a = J(n / 60), e %= 60, n %= 60, r = J(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", d = Ce(this._months) !== Ce(o) ? "-" : "", m = Ce(this._days) !== Ce(o) ? "-" : "", c = Ce(this._milliseconds) !== Ce(o) ? "-" : "", u + "P" + (r ? d + r + "Y" : "") + (s ? d + s + "M" : "") + (t ? m + t + "D" : "") + (a || n || e ? "T" : "") + (a ? c + a + "H" : "") + (n ? c + n + "M" : "") + (e ? c + i + "S" : "")) : "P0D";
}
var D = Ut.prototype;
D.isValid = Zr;
D.abs = To;
D.add = Eo;
D.subtract = Ro;
D.as = Lo;
D.asMilliseconds = Fo;
D.asSeconds = No;
D.asMinutes = Co;
D.asHours = Ao;
D.asDays = Io;
D.asWeeks = Ho;
D.asMonths = Uo;
D.asQuarters = $o;
D.asYears = Vo;
D.valueOf = Po;
D._bubble = Wo;
D.clone = Go;
D.get = jo;
D.milliseconds = Bo;
D.seconds = qo;
D.minutes = zo;
D.hours = Zo;
D.days = Jo;
D.weeks = Ko;
D.months = Qo;
D.years = Xo;
D.humanize = al;
D.toISOString = Vt;
D.toString = Vt;
D.toJSON = Vt;
D.locale = Pn;
D.localeData = Nn;
D.toIsoString = Q(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Vt
);
D.lang = Fn;
y("X", 0, 0, "unix");
y("x", 0, 0, "valueOf");
f("x", Ct);
f("X", Ya);
b("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
b("x", function(e, t, s) {
  s._d = new Date(v(e));
});
//! moment.js
l.version = "2.29.4";
aa(E);
l.fn = h;
l.min = jr;
l.max = Br;
l.now = qr;
l.utc = he;
l.unix = Do;
l.months = So;
l.isDate = ut;
l.locale = Se;
l.invalid = Wt;
l.duration = re;
l.isMoment = ne;
l.weekdays = xo;
l.parseZone = Mo;
l.localeData = we;
l.isDuration = kt;
l.monthsShort = Yo;
l.weekdaysMin = Oo;
l.defineLocale = vs;
l.updateLocale = Dr;
l.locales = Mr;
l.weekdaysShort = bo;
l.normalizeUnits = X;
l.relativeTimeRounding = sl;
l.relativeTimeThreshold = nl;
l.calendarFormat = wi;
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
function Gt(e) {
  return e.split("-")[1];
}
function qn(e) {
  return e === "y" ? "height" : "width";
}
function Ve(e) {
  return e.split("-")[0];
}
function Ts(e) {
  return ["top", "bottom"].includes(Ve(e)) ? "x" : "y";
}
function Zs(e, t, s) {
  let { reference: n, floating: a } = e;
  const r = n.x + n.width / 2 - a.width / 2, i = n.y + n.height / 2 - a.height / 2, o = Ts(t), u = qn(o), d = n[u] / 2 - a[u] / 2, m = o === "x";
  let c;
  switch (Ve(t)) {
    case "top":
      c = { x: r, y: n.y - a.height };
      break;
    case "bottom":
      c = { x: r, y: n.y + n.height };
      break;
    case "right":
      c = { x: n.x + n.width, y: i };
      break;
    case "left":
      c = { x: n.x - a.width, y: i };
      break;
    default:
      c = { x: n.x, y: n.y };
  }
  switch (Gt(t)) {
    case "start":
      c[o] -= d * (s && m ? -1 : 1);
      break;
    case "end":
      c[o] += d * (s && m ? -1 : 1);
  }
  return c;
}
const rl = (e, t, s) => Oe(void 0, null, function* () {
  const { placement: n = "bottom", strategy: a = "absolute", middleware: r = [], platform: i } = s, o = r.filter(Boolean), u = yield i.isRTL == null ? void 0 : i.isRTL(t);
  let d = yield i.getElementRects({ reference: e, floating: t, strategy: a }), { x: m, y: c } = Zs(d, n, u), _ = n, w = {}, k = 0;
  for (let M = 0; M < o.length; M++) {
    const { name: O, fn: x } = o[M], { x: T, y: L, data: F, reset: q } = yield x({ x: m, y: c, initialPlacement: n, placement: _, strategy: a, middlewareData: w, rects: d, platform: i, elements: { reference: e, floating: t } });
    m = T != null ? T : m, c = L != null ? L : c, w = Ne(V({}, w), { [O]: V(V({}, w[O]), F) }), q && k <= 50 && (k++, typeof q == "object" && (q.placement && (_ = q.placement), q.rects && (d = q.rects === !0 ? yield i.getElementRects({ reference: e, floating: t, strategy: a }) : q.rects), { x: m, y: c } = Zs(d, _, u)), M = -1);
  }
  return { x: m, y: c, placement: _, strategy: a, middlewareData: w };
});
function il(e) {
  return typeof e != "number" ? function(t) {
    return V({ top: 0, right: 0, bottom: 0, left: 0 }, t);
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Tt(e) {
  return Ne(V({}, e), { top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height });
}
function ol(e, t) {
  return Oe(this, null, function* () {
    var s;
    t === void 0 && (t = {});
    const { x: n, y: a, platform: r, rects: i, elements: o, strategy: u } = e, { boundary: d = "clippingAncestors", rootBoundary: m = "viewport", elementContext: c = "floating", altBoundary: _ = !1, padding: w = 0 } = t, k = il(w), M = o[_ ? c === "floating" ? "reference" : "floating" : c], O = Tt(yield r.getClippingRect({ element: (s = yield r.isElement == null ? void 0 : r.isElement(M)) == null || s ? M : M.contextElement || (yield r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)), boundary: d, rootBoundary: m, strategy: u })), x = c === "floating" ? Ne(V({}, i.floating), { x: n, y: a }) : i.reference, T = yield r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating), L = (yield r.isElement == null ? void 0 : r.isElement(T)) && (yield r.getScale == null ? void 0 : r.getScale(T)) || { x: 1, y: 1 }, F = Tt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? yield r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: x, offsetParent: T, strategy: u }) : x);
    return { top: (O.top - F.top + k.top) / L.y, bottom: (F.bottom - O.bottom + k.bottom) / L.y, left: (O.left - F.left + k.left) / L.x, right: (F.right - O.right + k.right) / L.x };
  });
}
const ll = ["top", "right", "bottom", "left"];
ll.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const ul = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Et(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ul[t]);
}
function hl(e, t, s) {
  s === void 0 && (s = !1);
  const n = Gt(e), a = Ts(e), r = qn(a);
  let i = a === "x" ? n === (s ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (i = Et(i)), { main: i, cross: Et(i) };
}
const dl = { start: "end", end: "start" };
function Kt(e) {
  return e.replace(/start|end/g, (t) => dl[t]);
}
const cl = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, fn(s) {
    return Oe(this, null, function* () {
      var n;
      const { placement: a, middlewareData: r, rects: i, initialPlacement: o, platform: u, elements: d } = s, Je = e, { mainAxis: m = !0, crossAxis: c = !0, fallbackPlacements: _, fallbackStrategy: w = "bestFit", fallbackAxisSideDirection: k = "none", flipAlignment: M = !0 } = Je, O = Vs(Je, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]), x = Ve(a), T = Ve(o) === o, L = yield u.isRTL == null ? void 0 : u.isRTL(d.floating), F = _ || (T || !M ? [Et(o)] : function(H) {
        const z = Et(H);
        return [Kt(H), z, Kt(z)];
      }(o));
      _ || k === "none" || F.push(...function(H, z, ie, K) {
        const Z = Gt(H);
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
        }(Ve(H), ie === "start", K);
        return Z && (U = U.map((ke) => ke + "-" + Z), z && (U = U.concat(U.map(Kt)))), U;
      }(o, M, k, L));
      const q = [o, ...F], Pe = yield ol(s, O), be = [];
      let ve = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (m && be.push(Pe[x]), c) {
        const { main: H, cross: z } = hl(a, i, L);
        be.push(Pe[H], Pe[z]);
      }
      if (ve = [...ve, { placement: a, overflows: be }], !be.every((H) => H <= 0)) {
        var qe, ze;
        const H = (((qe = r.flip) == null ? void 0 : qe.index) || 0) + 1, z = q[H];
        if (z)
          return { data: { index: H, overflows: ve }, reset: { placement: z } };
        let ie = (ze = ve.filter((K) => K.overflows[0] <= 0).sort((K, Z) => K.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : ze.placement;
        if (!ie)
          switch (w) {
            case "bestFit": {
              var Ze;
              const K = (Ze = ve.map((Z) => [Z.placement, Z.overflows.filter((U) => U > 0).reduce((U, ke) => U + ke, 0)]).sort((Z, U) => Z[1] - U[1])[0]) == null ? void 0 : Ze[0];
              K && (ie = K);
              break;
            }
            case "initialPlacement":
              ie = o;
          }
        if (a !== ie)
          return { reset: { placement: ie } };
      }
      return {};
    });
  } };
}, fl = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, fn(s) {
    return Oe(this, null, function* () {
      const { x: n, y: a } = s, r = yield function(i, o) {
        return Oe(this, null, function* () {
          const { placement: u, platform: d, elements: m } = i, c = yield d.isRTL == null ? void 0 : d.isRTL(m.floating), _ = Ve(u), w = Gt(u), k = Ts(u) === "x", M = ["left", "top"].includes(_) ? -1 : 1, O = c && k ? -1 : 1, x = typeof o == "function" ? o(i) : o;
          let { mainAxis: T, crossAxis: L, alignmentAxis: F } = typeof x == "number" ? { mainAxis: x, crossAxis: 0, alignmentAxis: null } : V({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, x);
          return w && typeof F == "number" && (L = w === "end" ? -1 * F : F), k ? { x: L * O, y: T * M } : { x: T * M, y: L * O };
        });
      }(s, e);
      return { x: n + r.x, y: a + r.y, data: r };
    });
  } };
};
function j(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function le(e) {
  return j(e).getComputedStyle(e);
}
function zn(e) {
  return e instanceof j(e).Node;
}
function xe(e) {
  return zn(e) ? (e.nodeName || "").toLowerCase() : "";
}
let gt;
function Zn() {
  if (gt)
    return gt;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (gt = e.brands.map((t) => t.brand + "/" + t.version).join(" "), gt) : navigator.userAgent;
}
function ae(e) {
  return e instanceof j(e).HTMLElement;
}
function te(e) {
  return e instanceof j(e).Element;
}
function Js(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof j(e).ShadowRoot || e instanceof ShadowRoot;
}
function jt(e) {
  const { overflow: t, overflowX: s, overflowY: n, display: a } = le(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + s) && !["inline", "contents"].includes(a);
}
function ml(e) {
  return ["table", "td", "th"].includes(xe(e));
}
function os(e) {
  const t = /firefox/i.test(Zn()), s = le(e), n = s.backdropFilter || s.WebkitBackdropFilter;
  return s.transform !== "none" || s.perspective !== "none" || !!n && n !== "none" || t && s.willChange === "filter" || t && !!s.filter && s.filter !== "none" || ["transform", "perspective"].some((a) => s.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some((a) => {
    const r = s.contain;
    return r != null && r.includes(a);
  });
}
function ls() {
  return /^((?!chrome|android).)*safari/i.test(Zn());
}
function Es(e) {
  return ["html", "body", "#document"].includes(xe(e));
}
const Qs = Math.min, nt = Math.max, Rt = Math.round;
function Jn(e) {
  const t = le(e);
  let s = parseFloat(t.width), n = parseFloat(t.height);
  const a = ae(e), r = a ? e.offsetWidth : s, i = a ? e.offsetHeight : n, o = Rt(s) !== r || Rt(n) !== i;
  return o && (s = r, n = i), { width: s, height: n, fallback: o };
}
function Qn(e) {
  return te(e) ? e : e.contextElement;
}
const Xn = { x: 1, y: 1 };
function Ge(e) {
  const t = Qn(e);
  if (!ae(t))
    return Xn;
  const s = t.getBoundingClientRect(), { width: n, height: a, fallback: r } = Jn(t);
  let i = (r ? Rt(s.width) : s.width) / n, o = (r ? Rt(s.height) : s.height) / a;
  return i && Number.isFinite(i) || (i = 1), o && Number.isFinite(o) || (o = 1), { x: i, y: o };
}
function We(e, t, s, n) {
  var a, r;
  t === void 0 && (t = !1), s === void 0 && (s = !1);
  const i = e.getBoundingClientRect(), o = Qn(e);
  let u = Xn;
  t && (n ? te(n) && (u = Ge(n)) : u = Ge(e));
  const d = o ? j(o) : window, m = ls() && s;
  let c = (i.left + (m && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / u.x, _ = (i.top + (m && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / u.y, w = i.width / u.x, k = i.height / u.y;
  if (o) {
    const M = j(o), O = n && te(n) ? j(n) : n;
    let x = M.frameElement;
    for (; x && n && O !== M; ) {
      const T = Ge(x), L = x.getBoundingClientRect(), F = getComputedStyle(x);
      L.x += (x.clientLeft + parseFloat(F.paddingLeft)) * T.x, L.y += (x.clientTop + parseFloat(F.paddingTop)) * T.y, c *= T.x, _ *= T.y, w *= T.x, k *= T.y, c += L.x, _ += L.y, x = j(x).frameElement;
    }
  }
  return Tt({ width: w, height: k, x: c, y: _ });
}
function Ye(e) {
  return ((zn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Bt(e) {
  return te(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Kn(e) {
  return We(Ye(e)).left + Bt(e).scrollLeft;
}
function lt(e) {
  if (xe(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Js(e) && e.host || Ye(e);
  return Js(t) ? t.host : t;
}
function ea(e) {
  const t = lt(e);
  return Es(t) ? t.ownerDocument.body : ae(t) && jt(t) ? t : ea(t);
}
function at(e, t) {
  var s;
  t === void 0 && (t = []);
  const n = ea(e), a = n === ((s = e.ownerDocument) == null ? void 0 : s.body), r = j(n);
  return a ? t.concat(r, r.visualViewport || [], jt(n) ? n : []) : t.concat(n, at(n));
}
function Xs(e, t, s) {
  let n;
  if (t === "viewport")
    n = function(i, o) {
      const u = j(i), d = Ye(i), m = u.visualViewport;
      let c = d.clientWidth, _ = d.clientHeight, w = 0, k = 0;
      if (m) {
        c = m.width, _ = m.height;
        const M = ls();
        (!M || M && o === "fixed") && (w = m.offsetLeft, k = m.offsetTop);
      }
      return { width: c, height: _, x: w, y: k };
    }(e, s);
  else if (t === "document")
    n = function(i) {
      const o = Ye(i), u = Bt(i), d = i.ownerDocument.body, m = nt(o.scrollWidth, o.clientWidth, d.scrollWidth, d.clientWidth), c = nt(o.scrollHeight, o.clientHeight, d.scrollHeight, d.clientHeight);
      let _ = -u.scrollLeft + Kn(i);
      const w = -u.scrollTop;
      return le(d).direction === "rtl" && (_ += nt(o.clientWidth, d.clientWidth) - m), { width: m, height: c, x: _, y: w };
    }(Ye(e));
  else if (te(t))
    n = function(i, o) {
      const u = We(i, !0, o === "fixed"), d = u.top + i.clientTop, m = u.left + i.clientLeft, c = ae(i) ? Ge(i) : { x: 1, y: 1 };
      return { width: i.clientWidth * c.x, height: i.clientHeight * c.y, x: m * c.x, y: d * c.y };
    }(t, s);
  else {
    const i = V({}, t);
    if (ls()) {
      var a, r;
      const o = j(e);
      i.x -= ((a = o.visualViewport) == null ? void 0 : a.offsetLeft) || 0, i.y -= ((r = o.visualViewport) == null ? void 0 : r.offsetTop) || 0;
    }
    n = i;
  }
  return Tt(n);
}
function Ks(e, t) {
  return ae(e) && le(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function en(e, t) {
  const s = j(e);
  if (!ae(e))
    return s;
  let n = Ks(e, t);
  for (; n && ml(n) && le(n).position === "static"; )
    n = Ks(n, t);
  return n && (xe(n) === "html" || xe(n) === "body" && le(n).position === "static" && !os(n)) ? s : n || function(a) {
    let r = lt(a);
    for (; ae(r) && !Es(r); ) {
      if (os(r))
        return r;
      r = lt(r);
    }
    return null;
  }(e) || s;
}
function _l(e, t, s) {
  const n = ae(t), a = Ye(t), r = We(e, !0, s === "fixed", t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (n || !n && s !== "fixed")
    if ((xe(t) !== "body" || jt(a)) && (i = Bt(t)), ae(t)) {
      const u = We(t, !0);
      o.x = u.x + t.clientLeft, o.y = u.y + t.clientTop;
    } else
      a && (o.x = Kn(a));
  return { x: r.left + i.scrollLeft - o.x, y: r.top + i.scrollTop - o.y, width: r.width, height: r.height };
}
const yl = { getClippingRect: function(e) {
  let { element: t, boundary: s, rootBoundary: n, strategy: a } = e;
  const r = s === "clippingAncestors" ? function(d, m) {
    const c = m.get(d);
    if (c)
      return c;
    let _ = at(d).filter((O) => te(O) && xe(O) !== "body"), w = null;
    const k = le(d).position === "fixed";
    let M = k ? lt(d) : d;
    for (; te(M) && !Es(M); ) {
      const O = le(M), x = os(M);
      O.position === "fixed" ? w = null : (k ? x || w : x || O.position !== "static" || !w || !["absolute", "fixed"].includes(w.position)) ? w = O : _ = _.filter((T) => T !== M), M = lt(M);
    }
    return m.set(d, _), _;
  }(t, this._c) : [].concat(s), i = [...r, n], o = i[0], u = i.reduce((d, m) => {
    const c = Xs(t, m, a);
    return d.top = nt(c.top, d.top), d.right = Qs(c.right, d.right), d.bottom = Qs(c.bottom, d.bottom), d.left = nt(c.left, d.left), d;
  }, Xs(t, o, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: s, strategy: n } = e;
  const a = ae(s), r = Ye(s);
  if (s === r)
    return t;
  let i = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((xe(s) !== "body" || jt(r)) && (i = Bt(s)), ae(s))) {
    const d = We(s);
    o = Ge(s), u.x = d.x + s.clientLeft, u.y = d.y + s.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - i.scrollLeft * o.x + u.x, y: t.y * o.y - i.scrollTop * o.y + u.y };
}, isElement: te, getDimensions: function(e) {
  return Jn(e);
}, getOffsetParent: en, getDocumentElement: Ye, getScale: Ge, getElementRects(e) {
  return Oe(this, null, function* () {
    let { reference: t, floating: s, strategy: n } = e;
    const a = this.getOffsetParent || en, r = this.getDimensions;
    return { reference: _l(t, yield a(s), n), floating: V({ x: 0, y: 0 }, yield r(s)) };
  });
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => le(e).direction === "rtl" };
function pl(e, t, s, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: a = !0, ancestorResize: r = !0, elementResize: i = !0, animationFrame: o = !1 } = n, u = a && !o, d = u || r ? [...te(e) ? at(e) : e.contextElement ? at(e.contextElement) : [], ...at(t)] : [];
  d.forEach((w) => {
    u && w.addEventListener("scroll", s, { passive: !0 }), r && w.addEventListener("resize", s);
  });
  let m, c = null;
  if (i) {
    let w = !0;
    c = new ResizeObserver(() => {
      w || s(), w = !1;
    }), te(e) && !o && c.observe(e), te(e) || !e.contextElement || o || c.observe(e.contextElement), c.observe(t);
  }
  let _ = o ? We(e) : null;
  return o && function w() {
    const k = We(e);
    !_ || k.x === _.x && k.y === _.y && k.width === _.width && k.height === _.height || s(), _ = k, m = requestAnimationFrame(w);
  }(), s(), () => {
    var w;
    d.forEach((k) => {
      u && k.removeEventListener("scroll", s), r && k.removeEventListener("resize", s);
    }), (w = c) == null || w.disconnect(), c = null, o && cancelAnimationFrame(m);
  };
}
const wl = (e, t, s) => {
  const n = /* @__PURE__ */ new Map(), a = V({ platform: yl }, s), r = Ne(V({}, a.platform), { _c: n });
  return rl(e, t, Ne(V({}, a), { platform: r }));
};
class gl {
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
    var t, s, n, a, r, i, o, u, d, m, c;
    this.container.innerHTML += `<div class="calendarify">
    <div class="calendarify__quick-actions ${this.quickActions ? "" : "d-none"}">
      <button data-action="today">${(n = (s = (t = this.locale.lang) == null ? void 0 : t.ui) == null ? void 0 : s.quickActions) == null ? void 0 : n.today}</button>
      <button data-action="tomorrow">${(i = (r = (a = this.locale.lang) == null ? void 0 : a.ui) == null ? void 0 : r.quickActions) == null ? void 0 : i.tomorrow}</button>
      <button data-action="in-2-days">${(d = (u = (o = this.locale.lang) == null ? void 0 : o.ui) == null ? void 0 : u.quickActions) == null ? void 0 : d.inTwoDays}</button>
    </div>
    <nav class="calendarify__navigations">
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
    <div class="calendarify__calendar">
      <ul class="days-wrapper">
      ${(c = (m = this.locale.lang) == null ? void 0 : m.weekdays) == null ? void 0 : c.map((_) => `<li>${_.slice(0, 3)}</li>`).join("")}
      </ul>
      <ul class="dates-wrapper">
          ${this.dates.map((_) => `<li><button ${_.disabled ? "disabled" : ""} type="button" class="date-button ${this.getHolidayClass({
      date: _.date,
      nowMonth: this.nowMonth
    })} ${this.nowDay == String(_.date) ? "active" : ""}">${_.date}</button></li>`).join("")}
      </ul>
      <ul class="months-wrapper d-none">
        ${this.months.map((_, w) => {
      var O, x, T;
      const k = ((O = this.locale.lang) == null ? void 0 : O.shortMonths) == null ? (x = this.locale.lang) == null ? void 0 : x.months[w].slice(0, 3) : (T = this.locale.lang) == null ? void 0 : T.shortMonths[w], M = l().format("M");
      return `<li><button class="${_ == M ? "active" : ""}" data-date="${_}" type="button">${k}</button></li>`;
    }).join("")}
      </ul>
      <ul class="years-wrapper d-none">
        ${this.years.map((_) => `<li><button data-date="${_}" type="button">${_}</button></li>`).join("")}
      </ul>
    </div>
  </div>`;
  }
  getHolidayClass(t) {
    const { nowMonth: s, date: n } = t, a = new Date(`${s}-${n}`).getDay(), r = a === 0, i = a === 6;
    let o = "";
    return r ? o = "holiday" : i && (o = "pre-holiday"), o;
  }
}
class kl {
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
    p(this, "yearOffset", 0);
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
    var a, r, i, o, u, d, m, c, _, w, k, M, O, x, T, L, F, q, Pe, be, ve, qe, ze, Ze, Je, H, z, ie, K, Z, U, ke, Fe, ft, Qe, Xe, mt, _t, Rs, Ws, Ls, Ps, Fs, Ns, Cs, As, Is, Hs;
    const n = document.documentElement;
    this.options = Object.assign(this, s), n.style.setProperty(
      "--accentColor",
      (a = this.options.accentColor) != null ? a : this.accentColor
    ), this.onChange = this.options.onChange, this._inputSelector = t, this.yearOffset = (r = this.options.yearOffset) != null ? r : 0, this.locale = {
      format: (u = (o = (i = this.options) == null ? void 0 : i.locale) == null ? void 0 : o.format) != null ? u : this._systemFormat,
      lang: {
        code: (_ = (c = (m = (d = this.options) == null ? void 0 : d.locale) == null ? void 0 : m.lang) == null ? void 0 : c.code) != null ? _ : "en",
        ui: {
          quickActions: {
            today: (T = (x = (O = (M = (k = (w = this.options) == null ? void 0 : w.locale) == null ? void 0 : k.lang) == null ? void 0 : M.ui) == null ? void 0 : O.quickActions) == null ? void 0 : x.today) != null ? T : "Today",
            tomorrow: (ve = (be = (Pe = (q = (F = (L = this.options) == null ? void 0 : L.locale) == null ? void 0 : F.lang) == null ? void 0 : q.ui) == null ? void 0 : Pe.quickActions) == null ? void 0 : be.tomorrow) != null ? ve : "Tomorrow",
            inTwoDays: (z = (H = (Je = (Ze = (ze = (qe = this.options) == null ? void 0 : qe.locale) == null ? void 0 : ze.lang) == null ? void 0 : Ze.ui) == null ? void 0 : Je.quickActions) == null ? void 0 : H.inTwoDays) != null ? z : "In 2 Days"
          }
        },
        months: (U = (Z = (K = (ie = this.options) == null ? void 0 : ie.locale) == null ? void 0 : K.lang) == null ? void 0 : Z.months) != null ? U : l.months(),
        shortMonths: (ft = (Fe = (ke = this.options) == null ? void 0 : ke.locale) == null ? void 0 : Fe.lang) == null ? void 0 : ft.shortMonths,
        weekdays: (_t = (mt = (Xe = (Qe = this.options) == null ? void 0 : Qe.locale) == null ? void 0 : Xe.lang) == null ? void 0 : mt.weekdays) != null ? _t : l.weekdays()
      }
    }, this.startDate = (Rs = this.options.startDate) != null ? Rs : l().format(this._systemFormat), this._date = (Ws = this.options.startDate) != null ? Ws : this.startDate, this._months = [];
    for (let qt = 0; qt < 12; qt++)
      this._months.push(String(qt + 1));
    this._nowMonth = l(this._date).format("YYYY-MM"), this._nowDay = l(this._date).format("D"), this._nowYear = l(this._date).format("YYYY"), this._outputDate = l(this._date).format(this.locale.format), this._dates = [], this.loopDaysMonths(), this._helpers = new gl({
      container: (Ls = document.querySelector(t)) == null ? void 0 : Ls.parentElement,
      dates: this._dates,
      months: this._months,
      years: this._years,
      nowMonth: this._nowMonth,
      nowDay: this._nowDay,
      quickActions: this.options.quickActions,
      locale: this.options.locale
    }), this._helpers.render(), l.updateLocale((Ns = (Fs = (Ps = this.options) == null ? void 0 : Ps.locale) == null ? void 0 : Fs.lang) == null ? void 0 : Ns.code, {
      months: (As = (Cs = this.options.locale) == null ? void 0 : Cs.lang) == null ? void 0 : As.months,
      weekdays: (Hs = (Is = this.options.locale) == null ? void 0 : Is.lang) == null ? void 0 : Hs.weekdays
    }), this._container = document.querySelector(".calendarify"), this._datepickerInput = document.querySelector(
      t
    ), this._datesWrapperEl = this._container.querySelector(
      ".dates-wrapper"
    ), this._monthsWrapperEl = this._container.querySelector(
      ".months-wrapper"
    ), this._yearsWrapperEl = this._container.querySelector(
      ".years-wrapper"
    ), this._expandButton = this._container.querySelector(
      '.calendarify__navigations button[data-action="expand"]'
    ), this._dateButtons = this._container.querySelectorAll(
      ".date-button"
    ), this._prevButton = this._container.querySelector(
      '.calendarify__navigations button[data-action="prev"]'
    ), this._nextButton = this._container.querySelector(
      '.calendarify__navigations button[data-action="next"]'
    ), this._calendarWrapper = this._container.querySelector(
      ".calendarify__calendar"
    ), this._quickButtons = this._container.querySelectorAll(
      ".quick-actions button"
    ), this._wrapperEls = this._calendarWrapper.querySelectorAll(
      ".wrapper:not(:last-child, :nth-child(3))"
    ), this._yearRangeButton = this._container.querySelector(
      '.calendarify__navigations button[data-action="year-range"]'
    );
  }
  init() {
    l.suppressDeprecationWarnings = !0, this.showValue(), this.changeState(), this._datepickerInput.spellcheck = !1, this._datepickerInput.addEventListener("input", (t) => {
      const s = t.target;
      s.value = this._outputDate;
    }), this.stylingContainer(), this._prevButton.addEventListener("click", this.prevMonth.bind(this)), this._nextButton.addEventListener("click", this.nextMonth.bind(this)), this._expandButton.addEventListener("click", this.expand.bind(this)), this._datepickerInput.addEventListener("focus", () => {
      this._wasExecuted = !0, this._container.classList.add("show");
    }), window.addEventListener("click", this.hideOnOutsideClick.bind(this)), this._quickButtons.forEach(
      (t) => t.addEventListener("click", this.quickAction.bind(this))
    );
  }
  stylingContainer() {
    var n, a, r;
    (n = this.options) != null && n.isDark && this._container.setAttribute("data-theme", "dark"), (a = this.options) != null && a.zIndex && this._container.style.setProperty(
      "--z-index",
      String(this.options.zIndex)
    ), (r = this.options) != null && r.customClass && this.customClass.forEach(
      (i) => this._container.classList.add(i)
    );
    const { _datepickerInput: t, _container: s } = this;
    pl(t, s, () => {
      wl(t, s, {
        placement: "bottom-start",
        middleware: [fl(10), cl()]
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
    const t = this._monthsWrapperEl.querySelectorAll(
      "button"
    );
    t.forEach(
      (s) => s.addEventListener(
        "click",
        (n) => this.changeMonth(n, t)
      )
    ), this._yearRangeButton.addEventListener("click", this.showYears.bind(this));
  }
  showYears() {
    this._expandedMode = "years", this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.remove("d-none"), this._yearsWrapperEl.innerHTML = `${this._years.map((s) => `<li><button class="${s == this._nowYear ? "active" : ""}" data-date="${s}" type="button">${parseInt(s) + this.yearOffset}</button></li>`).join("")}`, this._yearsWrapperEl.querySelectorAll(
      "button"
    ).forEach(
      (s) => s.addEventListener("click", this.changeYear.bind(this))
    ), this.changeState();
  }
  changeYear(t) {
    const n = t.target.getAttribute("data-date"), a = l(this._nowMonth).format("MM");
    this._date = l(`${n}-${a}-${this._nowDay}`).format(
      this._systemFormat
    ), this._nowYear = n, this._yearsWrapperEl.classList.add("d-none"), this._monthsWrapperEl.classList.remove("d-none"), this._expandedMode = "months", this.changeState();
  }
  changeMonth(t, s) {
    this._wrapperEls.forEach((o) => o.classList.remove("d-none")), s.forEach((o) => o.classList.remove("active"));
    const n = t.target, a = n.getAttribute("data-date"), r = l(this._date).format("YYYY"), i = l(new Date(`${r} ${a} ${this._nowDay}`));
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
    const { onChange: s, _wasExecuted: n, _isSetted: a } = this;
    s && n && a && (s(t), this._isSetted = !1);
  }
  resetUI() {
    this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._wrapperEls.forEach((t) => t.classList.remove("d-none")), this._isExpanded = !1, this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._expandButton.classList.remove("d-none"), this._yearRangeButton.classList.add("d-none"), this.changeState();
  }
  changeState() {
    var n, a;
    this._dates = [], this._nowMonth = l(this._date).format("YYYY-MM"), this._nowDay = l(this._date).format("D"), this.loopDaysMonths();
    const t = l(this._nowMonth).format("M"), s = parseInt(l(this._nowMonth).format("YYYY")) + this.yearOffset;
    switch (this._expandButton.textContent = `${(n = this.locale.lang) == null ? void 0 : n.months[+t - 1]} ${s}`, this._expandedMode) {
      case "years":
        this._yearRangeButton.textContent = `${parseInt(this._years[0]) + this.yearOffset} - ${parseInt(this._years[this._years.length - 1]) + this.yearOffset}`;
        break;
      default:
        this._yearRangeButton.textContent = (parseInt(l(this._date).format("YYYY")) + this.yearOffset).toString();
        break;
    }
    if (this.renderDates(), this._dateButtons = this._datesWrapperEl.querySelectorAll(
      ".date-button"
    ), this._dateButtons.forEach(
      (r) => r.addEventListener("click", this.setDate.bind(this))
    ), this._expandedMode == "months" && this._dates.slice(0, 7).every((i) => i.disabled))
      for (let i = 0; i < 7; i++)
        (a = this._dateButtons[i].parentElement) == null || a.classList.add("d-none");
  }
  loopDaysMonths() {
    const t = l(this._date).daysInMonth(), s = l(
      new Date(this._nowMonth)
    ).isoWeekday(), n = l(this._date).subtract(1, "months").daysInMonth();
    for (let a = 1; a <= s; a++)
      this._dates.unshift({
        disabled: !0,
        date: String(n + 1 - a)
      });
    for (let a = 1; a <= t; a++)
      this._dates.push({ disabled: !1, date: String(a) });
  }
  renderDates() {
    this._datesWrapperEl.innerHTML = `${this._dates.map((t) => `<li><button ${t.disabled ? "disabled" : ""} type="button" class="date-button ${this._helpers.getHolidayClass({
      date: t.date,
      nowMonth: this._nowMonth
    })} ${this._nowDay == String(t.date) ? "active" : ""}">${t.date}</button></li>`).join("")}`;
  }
  setDate(t) {
    this._isSetted = !0;
    const s = t.target;
    this._dateButtons.forEach((n) => n.classList.remove("active")), this._nowDay = String(s.textContent), this._date = `${l(`${this._nowMonth}-${this._nowDay}`).format(
      this._systemFormat
    )}`, this.showValue(), s.classList.add("active");
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
  kl as default
};
