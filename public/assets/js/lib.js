var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }t.head.appendChild(o).parentNode.removeChild(o);
  }function x(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? l[c.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }return a;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      m(e);
    }, each: function each(e, t) {
      var n,
          r = 0;if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }return e.length = i, e;
    }, grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }return a.apply([], s);
    }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = { apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
        } };
    }function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }return u(e.replace(B, "$1"), t, r, i);
    }function ae() {
      var e = [];function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }return t;
    }function se(e) {
      return e[b] = !0, e;
    }function ue(e) {
      var t = d.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function le(e, t) {
      var n = e.split("|"),
          i = n.length;while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }return r;
        }return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) {
          a.unshift(n);
        }n = t;while (n = n.parentNode) {
          s.unshift(n);
        }while (a[r] === s[r]) {
          r++;
        }return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }while (i--) {
          e.splice(r[i], 1);
        }
      }return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }return n;
    }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;if (y) {
              if (o) {
                while (g) {
                  p = t;while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        } }, pseudos: { not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }), lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === h;
        }, focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !r.pseudos.empty(e);
        }, header: function header(e) {
          return Y.test(e.nodeName);
        }, input: function input(e) {
          return G.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: he(function () {
          return [0];
        }), last: he(function (e, t) {
          return [t - 1];
        }), eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }return e;
        }), gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }return e;
        }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      r.pseudos[t] = fe(t);
    }for (t in { submit: !0, reset: !0 }) {
      r.pseudos[t] = pe(t);
    }function ye() {}ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, u = [], l = r.preFilter;while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length));for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));
        }if (!n) break;
      }return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }return r;
    }function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }return !1;
      };
    }function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) {
          if (!e[i](t, n, r)) return !1;
        }return !0;
      } : e[0];
    }function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }return n;
    }function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }return a;
    }function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }i(null, v = [], l, u);
            }c = v.length;while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }p.push(n);
        }
      }return xe(p);
    }function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);break;
              }
            }c && (T = E);
          }n && ((f = !y && f) && v--, _o && x.push(f));
        }if (v += m, n && m !== v) {
          h = 0;while (y = t[h++]) {
            y(x, b, a, s);
          }if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }b = we(b);
          }L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }return c && (T = E, l = w), x;
      };return n ? se(o) : o;
    }return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];if (!o) {
        t || (t = a(e)), n = t.length;while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }(o = S(e, Ee(i, r))).selector = e;
      }return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }o = V.needsContext.test(e) ? 0 : u.length;while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;break;
          }
        }
      }return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;r.push(e);
      }
    }return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      D = w.expr.match.needsContext;function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }w.filter = function (e, t, n) {
    var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }return r > 1 ? w.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    }, is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    } });var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var i, o;if (!e) return this;if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }return this;
      }return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);var H = /^(?:parents|prev(?:Until|All))/,
      O = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function has(e) {
      var t = w(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } });function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {}return e;
  }w.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return k(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    }, next: function next(e) {
      return P(e, "nextSibling");
    }, prev: function prev(e) {
      return P(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return S(e.firstChild);
    }, contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });var M = /[^\x20\t\r\n\f]+/g;function R(e) {
    var t = {};return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = { add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return i = a = [], o = n = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      }, locked: function locked() {
        return !!i;
      }, fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      }, fire: function fire() {
        return l.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!r;
      } };return l;
  };function I(e) {
    return e;
  }function W(e) {
    throw e;
  }function $(e, t, n, r) {
    var i;try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = { state: function state() {
          return r;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, "catch": function _catch(e) {
          return i.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
                var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, r, i) {
          var o = 0;function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        } },
          o = {};return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) {
        $(i[n], s(n), a.reject);
      }return a.promise();
    } });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var F = w.Deferred();w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    } }), w.ready.then = F.then;function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;if ("object" === x(n)) {
      i = !0;for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function Q() {
    this.expando = w.expando + Q.uid++;
  }Q.uid = 1, Q.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var r,
          i = this.cache(e);if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }return i;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          r = e[this.expando];if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;while (n--) {
            delete r[t[n]];
          }
        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }function ne(e, t, n) {
    var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}K.set(e, t, n);
    } else n = void 0;return n;
  }w.extend({ hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    }, data: function data(e, t, n) {
      return K.access(e, t, n);
    }, removeData: function removeData(e, t) {
      K.remove(e, t);
    }, _data: function _data(e, t, n) {
      return J.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      J.remove(e, t);
    } }), w.fn.extend({ data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }J.set(o, "hasDataAttrs", !0);
        }return i;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    } }), w.extend({ queue: function queue(e, t, n) {
      var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        }) });
    } }), w.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }return s(), i.promise(t);
    } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }i = n.apply(e, r || []);for (o in t) {
      e.style[o] = a[o];
    }return i;
  };function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }c *= 2, w.style(e, t, c + l), n = n || [];
    }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }var le = {};function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }return e;
  }w.fn.extend({ show: function show() {
      return fe(this, !0);
    }, hide: function hide() {
      return fe(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    } });var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ye(e, t) {
    var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];while (c--) {
          a = a.lastChild;
        }w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }f.textContent = "", d = 0;while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }return f;
  }!function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;function Ee() {
    return !0;
  }function ke() {
    return !1;
  }function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }function De(e, t, n, r, i, o) {
    var a, s;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      "string" != typeof n && (r = r || n, n = void 0);for (s in t) {
        De(e, s, n, r, t[s], o);
      }return e;
    }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }w.event = { global: {}, add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    }, remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }o.length && s.push({ elem: l, handlers: o });
        }
      }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return N(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    }, one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    }, off: function off(e, t, n) {
      var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (i in e) {
          this.off(i, t, e[i]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    } });var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Pe(e, t) {
    var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }function Me(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function Re(e, t, n, r) {
    t = a.apply([], t);var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }return e;
  }function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    }, cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }n[J.expando] = void 0;
          }n[K.expando] && (n[K.expando] = void 0);
        }
      }
    } }), w.fn.extend({ detach: function detach(e) {
      return Ie(this, e, !0);
    }, remove: function remove(e) {
      return Ie(this, e);
    }, text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    }, html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return Re(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }return this.pushStack(r);
    };
  });var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");!function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      }, pixelPosition: function pixelPosition() {
        return t(), i;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      }, scrollboxSize: function scrollboxSize() {
        return t(), a;
      } }));
  }();function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }function _e(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;function Qe(e) {
    if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }function Je(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }function Ke(e, t, n) {
    var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;if (We.test(i)) {
      if (!n) return i;i = "auto";
    }return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    }, css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      }, set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      } };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }return i;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({ css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }return o;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } });function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }w.Tween = tt, tt.prototype = { constructor: tt, init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, w.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }function ut(e, t) {
    var n,
        r = 0,
        i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }return t && (i.opacity = i.width = e), i;
  }function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
        }d[r] = y && y[r] || w.style(e, r);
      }
    }if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }function ft(e, t) {
    var n, r, i, o, a;for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
      }, stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      } }),
        c = l.props;for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
  }w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return ue(n.elem, e, ie.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    }, prefilters: [ct], prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    } }), w.speed = function (e, t, n) {
    var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
      };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    }, stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }!t && n || w.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }delete n.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();var dt,
      ht = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    } }), dt = { set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;w.fn.extend({ prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });function vt(e) {
    return (e.match(M) || []).join(" ");
  }function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }w.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;if (r) {
          i = 0, o = w(this), a = xt(e);while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;t = " " + e + " ";while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var bt = /\r/g;w.fn.extend({ val: function val(e) {
      var t,
          n,
          r,
          i = this[0];{
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : vt(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;s.push(t);
            }
          }return s;
        }, set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }a = 0;while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
    } }), w.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
    } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      }, teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      } };
  });var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;w.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
    var i;if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }return r.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(Dt, "\r\n") };
        }) : { name: t.name, value: n.replace(Dt, "\r\n") };
      }).get();
    } });var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");Bt.href = Ct.href;function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;function a(s) {
      var u;return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }return a(t.dataTypes[0]) || !i["*"] && a("*");
  }function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }return r && w.extend(!0, e, r), e;
  }function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);break;
      }
    }if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;break;
        }a || (a = i);
      }o = o || a;
    }if (o) return o !== u[0] && u.unshift(o), n[o];
  }function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }o = c.shift();while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
          }
        }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
        }
      }
    }return { state: "success", data: t };
  }w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (c) {
            if (!s) {
              s = {};while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }t = s[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || C;return i && i.abort(t), k(0, t), this;
        } };if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;k(-1, e);
        }
      } else k(-1, "No Transport");function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }return E;
    }, getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, w.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;while (e.firstElementChild) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = g(e);return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    } }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Vt = { 0: 200, 1223: 204 },
      Gt = w.ajaxSettings.xhr();h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n2, r;if (h.cors || Gt && !t.crossDomain) return { send: function send(i, o) {
        var a,
            s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) {
          s.setRequestHeader(a, i[a]);
        }_n2 = function n(e) {
          return function () {
            _n2 && (_n2 = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n2(), r = s.onerror = s.ontimeout = _n2("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n2 && r();
          });
        }, _n2 = _n2("abort");try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n2) throw e;
        }
      }, abort: function abort() {
        _n2 && _n2();
      } };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return w.globalEval(e), e;
      } } }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n3;return { send: function send(i, o) {
          t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n3 = function n(e) {
            t.remove(), _n3 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        }, abort: function abort() {
          _n3 && _n3();
        } };
    }
  });var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = { setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    } }, w.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          n,
          r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");return z(this, function (t, n, i) {
          var o;return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), w.proxy = function (e, t) {
    var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });var Jt = e.jQuery,
      Kt = e.$;return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});
/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper);
}(this, function (t, e, h) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }function l(r) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(o);"function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) {
        return Object.getOwnPropertyDescriptor(o, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i;
      });
    }return r;
  }e = e && e.hasOwnProperty("default") ? e.default : e, h = h && h.hasOwnProperty("default") ? h.default : h;var r,
      n,
      o,
      a,
      c,
      u,
      f,
      d,
      g,
      _,
      m,
      p,
      v,
      y,
      E,
      C,
      T,
      b,
      S,
      I,
      A,
      D,
      w,
      N,
      O,
      k,
      P,
      j,
      H,
      L,
      R,
      x,
      W,
      U,
      q,
      F,
      K,
      M,
      Q,
      B,
      V,
      Y,
      z,
      J,
      Z,
      G,
      $,
      X,
      tt,
      et,
      nt,
      it,
      rt,
      ot,
      st,
      at,
      lt,
      ct,
      ht,
      ut,
      ft,
      dt,
      gt,
      _t,
      mt,
      pt,
      vt,
      yt,
      Et,
      Ct,
      Tt,
      bt,
      St,
      It,
      At,
      Dt,
      wt,
      Nt,
      Ot,
      kt,
      Pt,
      jt,
      Ht,
      Lt,
      Rt,
      xt,
      Wt,
      Ut,
      qt,
      Ft,
      Kt,
      Mt,
      Qt,
      Bt,
      Vt,
      Yt,
      zt,
      Jt,
      Zt,
      Gt,
      $t,
      Xt,
      te,
      ee,
      ne,
      ie,
      re,
      oe,
      se,
      ae,
      le,
      ce,
      he,
      ue,
      fe,
      de,
      ge,
      _e,
      me,
      pe,
      ve,
      ye,
      Ee,
      Ce,
      Te,
      be,
      Se,
      Ie,
      Ae,
      De,
      we,
      Ne,
      Oe,
      ke,
      Pe,
      je,
      He,
      Le,
      Re,
      xe,
      We,
      Ue,
      qe,
      Fe,
      Ke,
      Me,
      Qe,
      Be,
      Ve,
      Ye,
      ze,
      Je,
      Ze,
      Ge,
      $e,
      Xe,
      tn,
      en,
      nn,
      rn,
      on,
      sn,
      an,
      ln,
      cn,
      hn,
      un,
      fn,
      dn,
      gn,
      _n,
      mn,
      pn,
      vn,
      yn,
      En,
      Cn,
      Tn,
      bn,
      Sn,
      In,
      An,
      Dn,
      wn,
      Nn,
      On,
      kn,
      Pn,
      jn,
      Hn,
      Ln,
      Rn,
      xn,
      Wn,
      Un,
      qn,
      Fn = function (i) {
    var e = "transitionend";function t(t) {
      var e = this,
          n = !1;return i(this).one(l.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t), this;
    }var l = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {}return t;
      }, getSelectorFromElement: function getSelectorFromElement(t) {
        var e = t.getAttribute("data-target");e && "#" !== e || (e = t.getAttribute("href") || "");try {
          return document.querySelector(e) ? e : null;
        } catch (t) {
          return null;
        }
      }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;var e = i(t).css("transition-duration");return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0;
      }, reflow: function reflow(t) {
        return t.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(t) {
        i(t).trigger(e);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      }, isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      }, typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
                o = e[i],
                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".');
          }
        }var a;
      } };return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = { bindType: e, delegateType: e, handle: function handle(t) {
        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      } }, l;
  }(e),
      Kn = (n = "alert", a = "." + (o = "bs.alert"), c = (r = e).fn[n], u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", d = "fade", g = "show", _ = function () {
    function i(t) {
      this._element = t;
    }var t = i.prototype;return t.close = function (t) {
      var e = this._element;t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      r.removeData(this._element, o), this._element = null;
    }, t._getRootElement = function (t) {
      var e = Fn.getSelectorFromElement(t),
          n = !1;return e && (n = document.querySelector(e)), n || (n = r(t).closest("." + f)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = r.Event(u.CLOSE);return r(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;if (r(e).removeClass(g), r(e).hasClass(d)) {
        var t = Fn.getTransitionDurationFromElement(e);r(e).one(Fn.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      r(t).detach().trigger(u.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = r(this),
            e = t.data(o);e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.3";
      } }]), i;
  }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _())), r.fn[n] = _._jQueryInterface, r.fn[n].Constructor = _, r.fn[n].noConflict = function () {
    return r.fn[n] = c, _._jQueryInterface;
  }, _),
      Mn = (p = "button", y = "." + (v = "bs.button"), E = ".data-api", C = (m = e).fn[p], T = "active", b = "btn", I = '[data-toggle^="button"]', A = '[data-toggle="buttons"]', D = "input", w = ".active", N = ".btn", O = { CLICK_DATA_API: "click" + y + E, FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E }, k = function () {
    function n(t) {
      this._element = t;
    }var t = n.prototype;return t.toggle = function () {
      var t = !0,
          e = !0,
          n = m(this._element).closest(A)[0];if (n) {
        var i = this._element.querySelector(D);if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(T)) t = !1;else {
            var r = n.querySelector(w);r && m(r).removeClass(T);
          }if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;i.checked = !this._element.classList.contains(T), m(i).trigger("change");
          }i.focus(), e = !1;
        }
      }e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), t && m(this._element).toggleClass(T);
    }, t.dispose = function () {
      m.removeData(this._element, v), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = m(this).data(v);t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{ key: "VERSION", get: function get() {
        return "4.1.3";
      } }]), n;
  }(), m(document).on(O.CLICK_DATA_API, I, function (t) {
    t.preventDefault();var e = t.target;m(e).hasClass(b) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, I, function (t) {
    var e = m(t.target).closest(N)[0];m(e).toggleClass(S, /^focus(in)?$/.test(t.type));
  }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function () {
    return m.fn[p] = C, k._jQueryInterface;
  }, k),
      Qn = (j = "carousel", L = "." + (H = "bs.carousel"), R = ".data-api", x = (P = e).fn[j], W = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, q = "next", F = "prev", K = "left", M = "right", Q = { SLIDE: "slide" + L, SLID: "slid" + L, KEYDOWN: "keydown" + L, MOUSEENTER: "mouseenter" + L, MOUSELEAVE: "mouseleave" + L, TOUCHEND: "touchend" + L, LOAD_DATA_API: "load" + L + R, CLICK_DATA_API: "click" + L + R }, B = "carousel", V = "active", Y = "slide", z = "carousel-item-right", J = "carousel-item-left", Z = "carousel-item-next", G = "carousel-item-prev", $ = ".active", X = ".active.carousel-item", tt = ".carousel-item", et = ".carousel-item-next, .carousel-item-prev", nt = ".carousel-indicators", it = "[data-slide], [data-slide-to]", rt = '[data-ride="carousel"]', ot = function () {
    function o(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = this._element.querySelector(nt), this._addEventListeners();
    }var t = o.prototype;return t.next = function () {
      this._isSliding || this._slide(q);
    }, t.nextWhenVisible = function () {
      !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(F);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(et) && (Fn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;this._activeElement = this._element.querySelector(X);var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();var i = n < t ? q : F;this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      P(this._element).off(L), P.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = l({}, W, t), Fn.typeCheckConfig(j, t, U), t;
    }, t._addEventListeners = function () {
      var e = this;this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Q.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () {
        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
          return e.cycle(t);
        }, 500 + e._config.interval);
      }));
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
          t.preventDefault(), this.prev();break;case 39:
          t.preventDefault(), this.next();}
    }, t._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === q,
          i = t === F,
          r = this._getItemIndex(e),
          o = this._items.length - 1;if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;var s = (r + (t === F ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(X)),
          r = P.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });return P(this._element).trigger(r), r;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll($));P(e).removeClass(V);var n = this._indicatorsElement.children[this._getItemIndex(t)];n && P(n).addClass(V);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          r,
          o = this,
          s = this._element.querySelector(X),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);if (t === q ? (n = J, i = Z, r = K) : (n = z, i = G, r = M), l && P(l).hasClass(V)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);var u = P.Event(Q.SLID, { relatedTarget: l, direction: r, from: a, to: c });if (P(this._element).hasClass(Y)) {
          P(l).addClass(i), Fn.reflow(l), P(s).addClass(n), P(l).addClass(n);var f = Fn.getTransitionDurationFromElement(s);P(s).one(Fn.TRANSITION_END, function () {
            P(l).removeClass(n + " " + i).addClass(V), P(s).removeClass(V + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
              return P(o._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(f);
        } else P(s).removeClass(V), P(l).addClass(V), this._isSliding = !1, P(this._element).trigger(u);h && this.cycle();
      }
    }, o._jQueryInterface = function (i) {
      return this.each(function () {
        var t = P(this).data(H),
            e = l({}, W, P(this).data());"object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && (e = l({}, e, i));var n = "string" == typeof i ? i : e.slide;if (t || (t = new o(this, e), P(this).data(H, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        } else e.interval && (t.pause(), t.cycle());
      });
    }, o._dataApiClickHandler = function (t) {
      var e = Fn.getSelectorFromElement(this);if (e) {
        var n = P(e)[0];if (n && P(n).hasClass(B)) {
          var i = l({}, P(n).data(), P(this).data()),
              r = this.getAttribute("data-slide-to");r && (i.interval = !1), o._jQueryInterface.call(P(n), i), r && P(n).data(H).to(r), t.preventDefault();
        }
      }
    }, s(o, null, [{ key: "VERSION", get: function get() {
        return "4.1.3";
      } }, { key: "Default", get: function get() {
        return W;
      } }]), o;
  }(), P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
      var i = P(t[e]);ot._jQueryInterface.call(i, i.data());
    }
  }), P.fn[j] = ot._jQueryInterface, P.fn[j].Constructor = ot, P.fn[j].noConflict = function () {
    return P.fn[j] = x, ot._jQueryInterface;
  }, ot),
      Bn = (at = "collapse", ct = "." + (lt = "bs.collapse"), ht = (st = e).fn[at], ut = { toggle: !0, parent: "" }, ft = { toggle: "boolean", parent: "(string|element)" }, dt = { SHOW: "show" + ct, SHOWN: "shown" + ct, HIDE: "hide" + ct, HIDDEN: "hidden" + ct, CLICK_DATA_API: "click" + ct + ".data-api" }, gt = "show", _t = "collapse", mt = "collapsing", pt = "collapsed", vt = "width", yt = "height", Et = ".show, .collapsing", Ct = '[data-toggle="collapse"]', Tt = function () {
    function a(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var n = [].slice.call(document.querySelectorAll(Ct)), i = 0, r = n.length; i < r; i++) {
        var o = n[i],
            s = Fn.getSelectorFromElement(o),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o));
      }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }var t = a.prototype;return t.toggle = function () {
      st(this._element).hasClass(gt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;if (!this._isTransitioning && !st(this._element).hasClass(gt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Et)).filter(function (t) {
        return t.getAttribute("data-parent") === n._config.parent;
      })).length && (t = null), !(t && (e = st(t).not(this._selector).data(lt)) && e._isTransitioning))) {
        var i = st.Event(dt.SHOW);if (st(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(st(t).not(this._selector), "hide"), e || st(t).data(lt, null));var r = this._getDimension();st(this._element).removeClass(_t).addClass(mt), this._element.style[r] = 0, this._triggerArray.length && st(this._triggerArray).removeClass(pt).attr("aria-expanded", !0), this.setTransitioning(!0);var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              s = Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END, function () {
            st(n._element).removeClass(mt).addClass(_t).addClass(gt), n._element.style[r] = "", n.setTransitioning(!1), st(n._element).trigger(dt.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;if (!this._isTransitioning && st(this._element).hasClass(gt)) {
        var e = st.Event(dt.HIDE);if (st(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Fn.reflow(this._element), st(this._element).addClass(mt).removeClass(_t).removeClass(gt);var i = this._triggerArray.length;if (0 < i) for (var r = 0; r < i; r++) {
            var o = this._triggerArray[r],
                s = Fn.getSelectorFromElement(o);if (null !== s) st([].slice.call(document.querySelectorAll(s))).hasClass(gt) || st(o).addClass(pt).attr("aria-expanded", !1);
          }this.setTransitioning(!0);this._element.style[n] = "";var a = Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END, function () {
            t.setTransitioning(!1), st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      st.removeData(this._element, lt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = l({}, ut, t)).toggle = Boolean(t.toggle), Fn.typeCheckConfig(at, t, ft), t;
    }, t._getDimension = function () {
      return st(this._element).hasClass(vt) ? vt : yt;
    }, t._getParent = function () {
      var n = this,
          t = null;Fn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(t.querySelectorAll(e));return st(i).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      if (t) {
        var n = st(t).hasClass(gt);e.length && st(e).toggleClass(pt, !n).attr("aria-expanded", n);
      }
    }, a._getTargetFromElement = function (t) {
      var e = Fn.getSelectorFromElement(t);return e ? document.querySelector(e) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = st(this),
            e = t.data(lt),
            n = l({}, ut, t.data(), "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i ? i : {});if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(lt, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');e[i]();
        }
      });
    }, s(a, null, [{ key: "VERSION", get: function get() {
        return "4.1.3";
      } }, { key: "Default", get: function get() {
        return ut;
      } }]), a;
  }(), st(document).on(dt.CLICK_DATA_API, Ct, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();var n = st(this),
        e = Fn.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));st(i).each(function () {
      var t = st(this),
          e = t.data(lt) ? "toggle" : n.data();Tt._jQueryInterface.call(t, e);
    });
  }), st.fn[at] = Tt._jQueryInterface, st.fn[at].Constructor = Tt, st.fn[at].noConflict = function () {
    return st.fn[at] = ht, Tt._jQueryInterface;
  }, Tt),
      Vn = (St = "dropdown", At = "." + (It = "bs.dropdown"), Dt = ".data-api", wt = (bt = e).fn[St], Nt = new RegExp("38|40|27"), Ot = { HIDE: "hide" + At, HIDDEN: "hidden" + At, SHOW: "show" + At, SHOWN: "shown" + At, CLICK: "click" + At, CLICK_DATA_API: "click" + At + Dt, KEYDOWN_DATA_API: "keydown" + At + Dt, KEYUP_DATA_API: "keyup" + At + Dt }, kt = "disabled", Pt = "show", jt = "dropup", Ht = "dropright", Lt = "dropleft", Rt = "dropdown-menu-right", xt = "position-static", Wt = '[data-toggle="dropdown"]', Ut = ".dropdown form", qt = ".dropdown-menu", Ft = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Mt = "top-start", Qt = "top-end", Bt = "bottom-start", Vt = "bottom-end", Yt = "right-start", zt = "left-start", Jt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Zt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Gt = function () {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }var t = c.prototype;return t.toggle = function () {
      if (!this._element.disabled && !bt(this._element).hasClass(kt)) {
        var t = c._getParentFromElement(this._element),
            e = bt(this._menu).hasClass(Pt);if (c._clearMenus(), !e) {
          var n = { relatedTarget: this._element },
              i = bt.Event(Ot.SHOW, n);if (bt(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof h) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r = this._element;"parent" === this._config.reference ? r = t : Fn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && bt(t).addClass(xt), this._popper = new h(r, this._menu, this._getPopperConfig());
            }"ontouchstart" in document.documentElement && 0 === bt(t).closest(Ft).length && bt(document.body).children().on("mouseover", null, bt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), bt(this._menu).toggleClass(Pt), bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n));
          }
        }
      }
    }, t.dispose = function () {
      bt.removeData(this._element, It), bt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;bt(this._element).on(Ot.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = l({}, this.constructor.Default, bt(this._element).data(), t), Fn.typeCheckConfig(St, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);t && (this._menu = t.querySelector(qt));
      }return this._menu;
    }, t._getPlacement = function () {
      var t = bt(this._element.parentNode),
          e = Bt;return t.hasClass(jt) ? (e = Mt, bt(this._menu).hasClass(Rt) && (e = Qt)) : t.hasClass(Ht) ? e = Yt : t.hasClass(Lt) ? e = zt : bt(this._menu).hasClass(Rt) && (e = Vt), e;
    }, t._detectNavbar = function () {
      return 0 < bt(this._element).closest(".navbar").length;
    }, t._getPopperConfig = function () {
      var e = this,
          t = {};"function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}), t;
      } : t.offset = this._config.offset;var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
    }, c._jQueryInterface = function (e) {
      return this.each(function () {
        var t = bt(this).data(It);if (t || (t = new c(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null), bt(this).data(It, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, c._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = e.length; n < i; n++) {
        var r = c._getParentFromElement(e[n]),
            o = bt(e[n]).data(It),
            s = { relatedTarget: e[n] };if (t && "click" === t.type && (s.clickEvent = t), o) {
          var a = o._menu;if (bt(r).hasClass(Pt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && bt.contains(r, t.target))) {
            var l = bt.Event(Ot.HIDE, s);bt(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && bt(document.body).children().off("mouseover", null, bt.noop), e[n].setAttribute("aria-expanded", "false"), bt(a).removeClass(Pt), bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (t) {
      var e,
          n = Fn.getSelectorFromElement(t);return n && (e = document.querySelector(n)), e || t.parentNode;
    }, c._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || bt(t.target).closest(qt).length)) : Nt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !bt(this).hasClass(kt))) {
        var e = c._getParentFromElement(this),
            n = bt(e).hasClass(Pt);if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = [].slice.call(e.querySelectorAll(Kt));if (0 !== i.length) {
            var r = i.indexOf(t.target);38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
          }
        } else {
          if (27 === t.which) {
            var o = e.querySelector(Wt);bt(o).trigger("focus");
          }bt(this).trigger("click");
        }
      }
    }, s(c, null, [{ key: "VERSION", get: function get() {
        return "4.1.3";
      } }, { key: "Default", get: function get() {
        return Jt;
      } }, { key: "DefaultType", get: function get() {
        return Zt;
      } }]), c;
  }(), bt(document).on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus).on(Ot.CLICK_DATA_API, Wt, function (t) {
    t.preventDefault(), t.stopPropagation(), Gt._jQueryInterface.call(bt(this), "toggle");
  }).on(Ot.CLICK_DATA_API, Ut, function (t) {
    t.stopPropagation();
  }), bt.fn[St] = Gt._jQueryInterface, bt.fn[St].Constructor = Gt, bt.fn[St].noConflict = function () {
    return bt.fn[St] = wt, Gt._jQueryInterface;
  }, Gt),
      Yn = (Xt = "modal", ee = "." + (te = "bs.modal"), ne = ($t = e).fn[Xt], ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, re = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, oe = { HIDE: "hide" + ee, HIDDEN: "hidden" + ee, SHOW: "show" + ee, SHOWN: "shown" + ee, FOCUSIN: "focusin" + ee, RESIZE: "resize" + ee, CLICK_DISMISS: "click.dismiss" + ee, KEYDOWN_DISMISS: "keydown.dismiss" + ee, MOUSEUP_DISMISS: "mouseup.dismiss" + ee, MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee, CLICK_DATA_API: "click" + ee + ".data-api" }, se = "modal-scrollbar-measure", ae = "modal-backdrop", le = "modal-open", ce = "fade", he = "show", ue = ".modal-dialog", fe = '[data-toggle="modal"]', de = '[data-dismiss="modal"]', ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _e = ".sticky-top", me = function () {
    function r(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(ue), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
    }var t = r.prototype;return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;if (!this._isTransitioning && !this._isShown) {
        $t(this._element).hasClass(ce) && (this._isTransitioning = !0);var n = $t.Event(oe.SHOW, { relatedTarget: t });$t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(le), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(oe.CLICK_DISMISS, de, function (t) {
          return e.hide(t);
        }), $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function () {
          $t(e._element).one(oe.MOUSEUP_DISMISS, function (t) {
            $t(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
        var n = $t.Event(oe.HIDE);if ($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;var i = $t(this._element).hasClass(ce);if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(oe.FOCUSIN), $t(this._element).removeClass(he), $t(this._element).off(oe.CLICK_DISMISS), $t(this._dialog).off(oe.MOUSEDOWN_DISMISS), i) {
            var r = Fn.getTransitionDurationFromElement(this._element);$t(this._element).one(Fn.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      $t.removeData(this._element, te), $t(window, document, this._element, this._backdrop).off(ee), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = l({}, ie, t), Fn.typeCheckConfig(Xt, t, re), t;
    }, t._showElement = function (t) {
      var e = this,
          n = $t(this._element).hasClass(ce);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Fn.reflow(this._element), $t(this._element).addClass(he), this._config.focus && this._enforceFocus();var i = $t.Event(oe.SHOWN, { relatedTarget: t }),
          r = function r() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, $t(e._element).trigger(i);
      };if (n) {
        var o = Fn.getTransitionDurationFromElement(this._element);$t(this._dialog).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o);
      } else r();
    }, t._enforceFocus = function () {
      var e = this;$t(document).off(oe.FOCUSIN).on(oe.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === $t(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;this._isShown && this._config.keyboard ? $t(this._element).on(oe.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;this._isShown ? $t(window).on(oe.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : $t(window).off(oe.RESIZE);
    }, t._hideModal = function () {
      var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        $t(document.body).removeClass(le), t._resetAdjustments(), t._resetScrollbar(), $t(t._element).trigger(oe.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = $t(this._element).hasClass(ce) ? ce : "";if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = ae, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(oe.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && Fn.reflow(this._backdrop), $t(this._backdrop).addClass(he), !t) return;if (!n) return void t();var i = Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        $t(this._backdrop).removeClass(he);var r = function r() {
          e._removeBackdrop(), t && t();
        };if ($t(this._element).hasClass(ce)) {
          var o = Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var r = this;if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(ge)),
            e = [].slice.call(document.querySelectorAll(_e));$t(t).each(function (t, e) {
          var n = e.style.paddingRight,
              i = $t(e).css("padding-right");$t(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
        }), $t(e).each(function (t, e) {
          var n = e.style.marginRight,
              i = $t(e).css("margin-right");$t(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
        });var n = document.body.style.paddingRight,
            i = $t(document.body).css("padding-right");$t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }
    }, t._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(ge));$t(t).each(function (t, e) {
        var n = $t(e).data("padding-right");$t(e).removeData("padding-right"), e.style.paddingRight = n || "";
      });var e = [].slice.call(document.querySelectorAll("" + _e));$t(e).each(function (t, e) {
        var n = $t(e).data("margin-right");"undefined" != typeof n && $t(e).css("margin-right", n).removeData("margin-right");
      });var n = $t(document.body).data("padding-right");$t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");t.className = se, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
    }, r._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = $t(this).data(te),
            e = l({}, ie, $t(this).data(), "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? n : {});if (t || (t = new r(this, e), $t(this).data(te, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n](i);
        } else e.show && t.show(i);
      });
    }, s(r, null, [{ key: "VERSION", get: function get() {
        return "4.1.3";
      } }, { key: "Default", get: function get() {
        return ie;
      } }]), r;
  }(), $t(document).on(oe.CLICK_DATA_API, fe, function (t) {
    var e,
        n = this,
        i = Fn.getSelectorFromElement(this);i && (e = document.querySelector(i));var r = $t(e).data(te) ? "toggle" : l({}, $t(e).data(), $t(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var o = $t(e).one(oe.SHOW, function (t) {
      t.isDefaultPrevented() || o.one(oe.HIDDEN, function () {
        $t(n).is(":visible") && n.focus();
      });
    });me._jQueryInterface.call($t(e), r, this);
  }), $t.fn[Xt] = me._jQueryInterface, $t.fn[Xt].Constructor = me, $t.fn[Xt].noConflict = function () {
    return $t.fn[Xt] = ne, me._jQueryInterface;
  }, me),
      zn = (ve = "tooltip", Ee = "." + (ye = "bs.tooltip"), Ce = (pe = e).fn[ve], Te = "bs-tooltip", be = new RegExp("(^|\\s)" + Te + "\\S+", "g"), Ae = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(Ie = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(Se = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, we = "out", Ne = { HIDE: "hide" + Ee, HIDDEN: "hidden" + Ee, SHOW: (De = "show") + Ee, SHOWN: "shown" + Ee, INSERTED: "inserted" + Ee, CLICK: "click" + Ee, FOCUSIN: "focusin" + Ee, FOCUSOUT: "focusout" + Ee, MOUSEENTER: "mouseenter" + Ee, MOUSELEAVE: "mouseleave" + Ee }, Oe = "fade", ke = "show", Pe = ".tooltip-inner", je = ".arrow", He = "hover", Le = "focus", Re = "click", xe = "manual", We = function () {
    function i(t, e) {
      if ("undefined" == typeof h) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }var t = i.prototype;return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = pe(t.currentTarget).data(e);n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (pe(this.getTipElement()).hasClass(ke)) return void this._leave(null, this);this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), pe.removeData(this.element, this.constructor.DATA_KEY), pe(this.element).off(this.constructor.EVENT_KEY), pe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && pe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;if ("none" === pe(this.element).css("display")) throw new Error("Please use show on visible elements");var t = pe.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
        pe(this.element).trigger(t);var n = pe.contains(this.element.ownerDocument.documentElement, this.element);if (t.isDefaultPrevented() || !n) return;var i = this.getTipElement(),
            r = Fn.getUID(this.constructor.NAME);i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && pe(i).addClass(Oe);var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            s = this._getAttachment(o);this.addAttachmentClass(s);var a = !1 === this.config.container ? document.body : pe(document).find(this.config.container);pe(i).data(this.constructor.DATA_KEY, this), pe.contains(this.element.ownerDocument.documentElement, this.tip) || pe(i).appendTo(a), pe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new h(this.element, i, { placement: s, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: je }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          }, onUpdate: function onUpdate(t) {
            e._handlePopperPlacementChange(t);
          } }), pe(i).addClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().on("mouseover", null, pe.noop);var l = function l() {
          e.config.animation && e._fixTransition();var t = e._hoverState;e._hoverState = null, pe(e.element).trigger(e.constructor.Event.SHOWN), t === we && e._leave(null, e);
        };if (pe(this.tip).hasClass(Oe)) {
          var c = Fn.getTransitionDurationFromElement(this.tip);pe(this.tip).one(Fn.TRANSITION_END, l).emulateTransitionEnd(c);
        } else l();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = pe.Event(this.constructor.Event.HIDE),
          r = function r() {
        e._hoverState !== De && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), pe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };if (pe(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (pe(n).removeClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().off("mouseover", null, pe.noop), this._activeTrigger[Re] = !1, this._activeTrigger[Le] = !1, this._activeTrigger[He] = !1, pe(this.tip).hasClass(Oe)) {
          var o = Fn.getTransitionDurationFromElement(n);pe(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      pe(this.getTipElement()).addClass(Te + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || pe(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = this.getTipElement();this.setElementContent(pe(t.querySelectorAll(Pe)), this.getTitle()), pe(t).removeClass(Oe + " " + ke);
    }, t.setElementContent = function (t, e) {
      var n = this.config.html;"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e.nodeType || e.jquery) ? n ? pe(e).parent().is(t) || t.empty().append(e) : t.text(pe(e).text()) : t[n ? "html" : "text"](e);
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getAttachment = function (t) {
      return Ie[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) pe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== xe) {
          var e = t === He ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === He ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;pe(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }pe(i.element).closest(".modal").on("hide.bs.modal", function () {
          return i.hide();
        });
      }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Le : He] = !0), pe(e.getTipElement()).hasClass(ke) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout), e._hoverState = De, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === De && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Le : He] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = we, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === we && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }return !1;
    }, t._getConfig = function (t) {
      return "number" == typeof (t = l({}, this.constructor.Default, pe(this.element).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Fn.typeCheckConfig(ve, t, this.constructor.DefaultType), t;
    }, t._getDelegateConfig = function () {
      var t = {};if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }return t;
    }, t._cleanTipClass = function () {
      var t = pe(this.getTipElement()),
          e = t.attr("class").match(be);null !== e && e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      var e = t.instance;this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;null === t.getAttribute("x-placement") && (pe(t).removeClass(Oe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = pe(this).data(ye),
            e = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n;if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), pe(this).data(ye, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.3";
      } }, { key: "Default", get: function get() {
        return Ae;
      } }, { key: "NAME", get: function get() {
        return ve;
      } }, { key: "DATA_KEY", get: function get() {
        return ye;
      } }, { key: "Event", get: function get() {
        return Ne;
      } }, { key: "EVENT_KEY", get: function get() {
        return Ee;
      } }, { key: "DefaultType", get: function get() {
        return Se;
      } }]), i;
  }(), pe.fn[ve] = We._jQueryInterface, pe.fn[ve].Constructor = We, pe.fn[ve].noConflict = function () {
    return pe.fn[ve] = Ce, We._jQueryInterface;
  }, We),
      Jn = (qe = "popover", Ke = "." + (Fe = "bs.popover"), Me = (Ue = e).fn[qe], Qe = "bs-popover", Be = new RegExp("(^|\\s)" + Qe + "\\S+", "g"), Ve = l({}, zn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Ye = l({}, zn.DefaultType, { content: "(string|element|function)" }), ze = "fade", Ze = ".popover-header", Ge = ".popover-body", $e = { HIDE: "hide" + Ke, HIDDEN: "hidden" + Ke, SHOW: (Je = "show") + Ke, SHOWN: "shown" + Ke, INSERTED: "inserted" + Ke, CLICK: "click" + Ke, FOCUSIN: "focusin" + Ke, FOCUSOUT: "focusout" + Ke, MOUSEENTER: "mouseenter" + Ke, MOUSELEAVE: "mouseleave" + Ke }, Xe = function (t) {
    var e, n;function i() {
      return t.apply(this, arguments) || this;
    }n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;var r = i.prototype;return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.addAttachmentClass = function (t) {
      Ue(this.getTipElement()).addClass(Qe + "-" + t);
    }, r.getTipElement = function () {
      return this.tip = this.tip || Ue(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var t = Ue(this.getTipElement());this.setElementContent(t.find(Ze), this.getTitle());var e = this._getContent();"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ge), e), t.removeClass(ze + " " + Je);
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var t = Ue(this.getTipElement()),
          e = t.attr("class").match(Be);null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = Ue(this).data(Fe),
            e = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? n : null;if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), Ue(this).data(Fe, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.3";
      } }, { key: "Default", get: function get() {
        return Ve;
      } }, { key: "NAME", get: function get() {
        return qe;
      } }, { key: "DATA_KEY", get: function get() {
        return Fe;
      } }, { key: "Event", get: function get() {
        return $e;
      } }, { key: "EVENT_KEY", get: function get() {
        return Ke;
      } }, { key: "DefaultType", get: function get() {
        return Ye;
      } }]), i;
  }(zn), Ue.fn[qe] = Xe._jQueryInterface, Ue.fn[qe].Constructor = Xe, Ue.fn[qe].noConflict = function () {
    return Ue.fn[qe] = Me, Xe._jQueryInterface;
  }, Xe),
      Zn = (en = "scrollspy", rn = "." + (nn = "bs.scrollspy"), on = (tn = e).fn[en], sn = { offset: 10, method: "auto", target: "" }, an = { offset: "number", method: "string", target: "(string|element)" }, ln = { ACTIVATE: "activate" + rn, SCROLL: "scroll" + rn, LOAD_DATA_API: "load" + rn + ".data-api" }, cn = "dropdown-item", hn = "active", un = '[data-spy="scroll"]', fn = ".active", dn = ".nav, .list-group", gn = ".nav-link", _n = ".nav-item", mn = ".list-group-item", pn = ".dropdown", vn = ".dropdown-item", yn = ".dropdown-toggle", En = "offset", Cn = "position", Tn = function () {
    function n(t, e) {
      var n = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + gn + "," + this._config.target + " " + mn + "," + this._config.target + " " + vn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, tn(this._scrollElement).on(ln.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }var t = n.prototype;return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? En : Cn,
          r = "auto" === this._config.method ? t : this._config.method,
          o = r === Cn ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            n = Fn.getSelectorFromElement(t);if (n && (e = document.querySelector(n)), e) {
          var i = e.getBoundingClientRect();if (i.width || i.height) return [tn(e)[r]().top + o, n];
        }return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      tn.removeData(this._element, nn), tn(this._scrollElement).off(rn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = l({}, sn, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {})).target) {
        var e = tn(t.target).attr("id");e || (e = Fn.getUID(en), tn(t.target).attr("id", e)), t.target = "#" + e;
      }return Fn.typeCheckConfig(en, t, an), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();var t = this._selector.split(",");t = t.map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      });var n = tn([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(cn) ? (n.closest(pn).find(yn).addClass(hn), n.addClass(hn)) : (n.addClass(hn), n.parents(dn).prev(gn + ", " + mn).addClass(hn), n.parents(dn).prev(_n).children(gn).addClass(hn)), tn(this._scrollElement).trigger(ln.ACTIVATE, { relatedTarget: e });
    }, t._clear = function () {
      var t = [].slice.call(document.querySelectorAll(this._selector));tn(t).filter(fn).removeClass(hn);
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = tn(this).data(nn);if (t || (t = new n(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e), tn(this).data(nn, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, s(n, null, [{ key: "VERSION", get: function get() {
        return "4.1.3";
      } }, { key: "Default", get: function get() {
        return sn;
      } }]), n;
  }(), tn(window).on(ln.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(un)), e = t.length; e--;) {
      var n = tn(t[e]);Tn._jQueryInterface.call(n, n.data());
    }
  }), tn.fn[en] = Tn._jQueryInterface, tn.fn[en].Constructor = Tn, tn.fn[en].noConflict = function () {
    return tn.fn[en] = on, Tn._jQueryInterface;
  }, Tn),
      Gn = (In = "." + (Sn = "bs.tab"), An = (bn = e).fn.tab, Dn = { HIDE: "hide" + In, HIDDEN: "hidden" + In, SHOW: "show" + In, SHOWN: "shown" + In, CLICK_DATA_API: "click" + In + ".data-api" }, wn = "dropdown-menu", Nn = "active", On = "disabled", kn = "fade", Pn = "show", jn = ".dropdown", Hn = ".nav, .list-group", Ln = ".active", Rn = "> li > .active", xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wn = ".dropdown-toggle", Un = "> .dropdown-menu .active", qn = function () {
    function i(t) {
      this._element = t;
    }var t = i.prototype;return t.show = function () {
      var n = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && bn(this._element).hasClass(Nn) || bn(this._element).hasClass(On))) {
        var t,
            i,
            e = bn(this._element).closest(Hn)[0],
            r = Fn.getSelectorFromElement(this._element);if (e) {
          var o = "UL" === e.nodeName ? Rn : Ln;i = (i = bn.makeArray(bn(e).find(o)))[i.length - 1];
        }var s = bn.Event(Dn.HIDE, { relatedTarget: this._element }),
            a = bn.Event(Dn.SHOW, { relatedTarget: i });if (i && bn(i).trigger(s), bn(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          r && (t = document.querySelector(r)), this._activate(this._element, e);var l = function l() {
            var t = bn.Event(Dn.HIDDEN, { relatedTarget: n._element }),
                e = bn.Event(Dn.SHOWN, { relatedTarget: i });bn(i).trigger(t), bn(n._element).trigger(e);
          };t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      bn.removeData(this._element, Sn), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          r = ("UL" === e.nodeName ? bn(e).find(Rn) : bn(e).children(Ln))[0],
          o = n && r && bn(r).hasClass(kn),
          s = function s() {
        return i._transitionComplete(t, r, n);
      };if (r && o) {
        var a = Fn.getTransitionDurationFromElement(r);bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        bn(e).removeClass(Pn + " " + Nn);var i = bn(e.parentNode).find(Un)[0];i && bn(i).removeClass(Nn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }if (bn(t).addClass(Nn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Fn.reflow(t), bn(t).addClass(Pn), t.parentNode && bn(t.parentNode).hasClass(wn)) {
        var r = bn(t).closest(jn)[0];if (r) {
          var o = [].slice.call(r.querySelectorAll(Wn));bn(o).addClass(Nn);
        }t.setAttribute("aria-expanded", !0);
      }n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = bn(this),
            e = t.data(Sn);if (e || (e = new i(this), t.data(Sn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');e[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.3";
      } }]), i;
  }(), bn(document).on(Dn.CLICK_DATA_API, xn, function (t) {
    t.preventDefault(), qn._jQueryInterface.call(bn(this), "show");
  }), bn.fn.tab = qn._jQueryInterface, bn.fn.tab.Constructor = qn, bn.fn.tab.noConflict = function () {
    return bn.fn.tab = An, qn._jQueryInterface;
  }, qn);!function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e = t.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = Fn, t.Alert = Kn, t.Button = Mn, t.Carousel = Qn, t.Collapse = Bn, t.Dropdown = Vn, t.Modal = Yn, t.Popover = Jn, t.Scrollspy = Zn, t.Tab = Gn, t.Tooltip = zn, Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map
!function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t(require("jquery")) : t(jQuery);
}(function (jt, Et) {
  "use strict";
  var Dt = { beforeShow: t, move: t, change: t, show: t, hide: t, color: !1, flat: !1, showInput: !1, allowEmpty: !1, showButtons: !0, clickoutFiresChange: !0, showInitial: !1, showPalette: !1, showPaletteOnly: !1, hideAfterPaletteSelect: !1, togglePaletteOnly: !1, showSelectionPalette: !0, localStorageKey: !1, appendTo: "body", maxSelectionSize: 7, cancelText: "cancel", chooseText: "choose", togglePaletteMoreText: "more", togglePaletteLessText: "less", clearText: "Clear Color Selection", noColorSelectedText: "No Color Selected", preferredFormat: !1, className: "", containerClassName: "", replacerClassName: "", showAlpha: !1, theme: "sp-light", palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]], selectionPalette: [], disabled: !1, offset: null },
      It = [],
      zt = !!/msie/i.exec(window.navigator.userAgent),
      Bt = function () {
    function t(t, e) {
      return !!~("" + t).indexOf(e);
    }var e = document.createElement("div").style;return e.cssText = "background-color:rgba(0,0,0,.5)", t(e.backgroundColor, "rgba") || t(e.backgroundColor, "hsla");
  }(),
      Lt = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner'></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(""),
      Kt = function () {
    var t = "";if (zt) for (var e = 1; e <= 6; e++) {
      t += "<div class='sp-" + e + "'></div>";
    }return ["<div class='sp-container sp-hidden'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'></div>", "<div class='sp-palette-button-container sp-cf'>", "<button type='button' class='sp-palette-toggle'></button>", "</div>", "</div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'></div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'></div>", "</div>", "</div>", "</div>", "<div class='sp-clear sp-clear-display'>", "</div>", "<div class='sp-hue'>", "<div class='sp-slider'></div>", t, "</div>", "</div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>", "</div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input' type='text' spellcheck='false'  />", "</div>", "<div class='sp-initial sp-thumb sp-cf'></div>", "<div class='sp-button-container sp-cf'>", "<a class='sp-cancel' href='#'></a>", "<button type='button' class='sp-choose'></button>", "</div>", "</div>", "</div>"].join("");
  }();function Vt(t, e, r, a) {
    for (var n = [], i = 0; i < t.length; i++) {
      var s = t[i];if (s) {
        var o = tinycolor(s),
            l = o.toHsl().l < .5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";l += tinycolor.equals(e, s) ? " sp-thumb-active" : "";var c = o.toString(a.preferredFormat || "rgb"),
            f = Bt ? "background-color:" + o.toRgbString() : "filter:" + o.toFilter();n.push('<span title="' + c + '" data-color="' + o.toRgbString() + '" class="' + l + '"><span class="sp-thumb-inner" style="' + f + ';" /></span>');
      } else {
        n.push(jt("<div />").append(jt('<span data-color="" style="background-color:transparent;" class="sp-clear-display"></span>').attr("title", a.noColorSelectedText)).html());
      }
    }return "<div class='sp-cf " + r + "'>" + n.join("") + "</div>";
  }function e(t, e) {
    var r,
        a,
        n,
        i,
        s,
        o,
        l,
        f = (s = e, o = t, (l = jt.extend({}, Dt, s)).callbacks = { move: Wt(l.move, o), change: Wt(l.change, o), show: Wt(l.show, o), hide: Wt(l.hide, o), beforeShow: Wt(l.beforeShow, o) }, l),
        u = f.flat,
        c = f.showSelectionPalette,
        h = f.localStorageKey,
        d = f.theme,
        p = f.callbacks,
        g = (r = Ot, a = 10, function () {
      var t = this,
          e = arguments;n && clearTimeout(i), !n && i || (i = setTimeout(function () {
        i = null, r.apply(t, e);
      }, a));
    }),
        b = !1,
        v = !1,
        m = 0,
        y = 0,
        w = 0,
        _ = 0,
        x = 0,
        k = 0,
        S = 0,
        C = 0,
        P = 0,
        A = 0,
        M = 1,
        R = [],
        H = [],
        F = {},
        T = f.selectionPalette.slice(0),
        O = f.maxSelectionSize,
        q = "sp-dragging",
        N = null,
        j = t.ownerDocument,
        E = (j.body, jt(t)),
        D = !1,
        I = jt(Kt, j).addClass(d),
        z = I.find(".sp-picker-container"),
        B = I.find(".sp-color"),
        L = I.find(".sp-dragger"),
        K = I.find(".sp-hue"),
        V = I.find(".sp-slider"),
        $ = I.find(".sp-alpha-inner"),
        W = I.find(".sp-alpha"),
        X = I.find(".sp-alpha-handle"),
        Y = I.find(".sp-input"),
        G = I.find(".sp-palette"),
        Q = I.find(".sp-initial"),
        J = I.find(".sp-cancel"),
        U = I.find(".sp-clear"),
        Z = I.find(".sp-choose"),
        tt = I.find(".sp-palette-toggle"),
        et = E.is("input"),
        rt = et && "color" === E.attr("type") && Yt(),
        at = et && !u,
        nt = at ? jt(Lt).addClass(d).addClass(f.className).addClass(f.replacerClassName) : jt([]),
        it = at ? nt : E,
        st = nt.find(".sp-preview-inner"),
        ot = f.color || et && E.val(),
        lt = !1,
        ct = f.preferredFormat,
        ft = !f.showButtons || f.clickoutFiresChange,
        ut = !ot,
        ht = f.allowEmpty && !rt;function dt() {
      if (f.showPaletteOnly && (f.showPalette = !0), tt.text(f.showPaletteOnly ? f.togglePaletteMoreText : f.togglePaletteLessText), f.palette) {
        R = f.palette.slice(0), H = jt.isArray(R[0]) ? R : [R], F = {};for (var t = 0; t < H.length; t++) {
          for (var e = 0; e < H[t].length; e++) {
            var r = tinycolor(H[t][e]).toRgbString();F[r] = !0;
          }
        }
      }I.toggleClass("sp-flat", u), I.toggleClass("sp-input-disabled", !f.showInput), I.toggleClass("sp-alpha-enabled", f.showAlpha), I.toggleClass("sp-clear-enabled", ht), I.toggleClass("sp-buttons-disabled", !f.showButtons), I.toggleClass("sp-palette-buttons-disabled", !f.togglePaletteOnly), I.toggleClass("sp-palette-disabled", !f.showPalette), I.toggleClass("sp-palette-only", f.showPaletteOnly), I.toggleClass("sp-initial-disabled", !f.showInitial), I.addClass(f.className).addClass(f.containerClassName), Ot();
    }function pt() {
      if (h && window.localStorage) {
        try {
          var t = window.localStorage[h].split(",#");1 < t.length && (delete window.localStorage[h], jt.each(t, function (t, e) {
            gt(e);
          }));
        } catch (t) {}try {
          T = window.localStorage[h].split(";");
        } catch (t) {}
      }
    }function gt(t) {
      if (c) {
        var e = tinycolor(t).toRgbString();if (!F[e] && -1 === jt.inArray(e, T)) for (T.push(e); T.length > O;) {
          T.shift();
        }if (h && window.localStorage) try {
          window.localStorage[h] = T.join(";");
        } catch (t) {}
      }
    }function bt() {
      var r = Mt(),
          t = jt.map(H, function (t, e) {
        return Vt(t, r, "sp-palette-row sp-palette-row-" + e, f);
      });pt(), T && t.push(Vt(function () {
        var t = [];if (f.showPalette) for (var e = 0; e < T.length; e++) {
          var r = tinycolor(T[e]).toRgbString();F[r] || t.push(T[e]);
        }return t.reverse().slice(0, f.maxSelectionSize);
      }(), r, "sp-palette-row sp-palette-row-selection", f)), G.html(t.join(""));
    }function vt() {
      if (f.showInitial) {
        var t = lt,
            e = Mt();Q.html(Vt([t, e], e, "sp-palette-row-initial", f));
      }
    }function mt() {
      (y <= 0 || m <= 0 || _ <= 0) && Ot(), v = !0, I.addClass(q), N = null, E.trigger("dragstart.spectrum", [Mt()]);
    }function yt() {
      v = !1, I.removeClass(q), E.trigger("dragstop.spectrum", [Mt()]);
    }function wt() {
      var t = Y.val();if (null !== t && "" !== t || !ht) {
        var e = tinycolor(t);e.isValid() ? (At(e), Tt(!0)) : Y.addClass("sp-validation-error");
      } else At(null), Tt(!0);
    }function _t() {
      b ? Ct() : xt();
    }function xt() {
      var t = jt.Event("beforeShow.spectrum");b ? Ot() : (E.trigger(t, [Mt()]), !1 === p.beforeShow(Mt()) || t.isDefaultPrevented() || (!function () {
        for (var t = 0; t < It.length; t++) {
          It[t] && It[t].hide();
        }
      }(), b = !0, jt(j).bind("keydown.spectrum", kt), jt(j).bind("click.spectrum", St), jt(window).bind("resize.spectrum", g), nt.addClass("sp-active"), I.removeClass("sp-hidden"), Ot(), Ht(), lt = Mt(), vt(), p.show(lt), E.trigger("show.spectrum", [lt])));
    }function kt(t) {
      27 === t.keyCode && Ct();
    }function St(t) {
      2 != t.button && (v || (ft ? Tt(!0) : Pt(), Ct()));
    }function Ct() {
      b && !u && (b = !1, jt(j).unbind("keydown.spectrum", kt), jt(j).unbind("click.spectrum", St), jt(window).unbind("resize.spectrum", g), nt.removeClass("sp-active"), I.addClass("sp-hidden"), p.hide(Mt()), E.trigger("hide.spectrum", [Mt()]));
    }function Pt() {
      At(lt, !0);
    }function At(t, e) {
      var r, a;tinycolor.equals(t, Mt()) ? Ht() : (!t && ht ? ut = !0 : (ut = !1, a = (r = tinycolor(t)).toHsv(), C = a.h % 360 / 360, P = a.s, A = a.v, M = a.a), Ht(), r && r.isValid() && !e && (ct = f.preferredFormat || r.getFormat()));
    }function Mt(t) {
      return t = t || {}, ht && ut ? null : tinycolor.fromRatio({ h: C, s: P, v: A, a: Math.round(100 * M) / 100 }, { format: t.format || ct });
    }function Rt() {
      Ht(), p.move(Mt()), E.trigger("move.spectrum", [Mt()]);
    }function Ht() {
      Y.removeClass("sp-validation-error"), Ft();var t = tinycolor.fromRatio({ h: C, s: 1, v: 1 });B.css("background-color", t.toHexString());var e = ct;M < 1 && (0 !== M || "name" !== e) && ("hex" !== e && "hex3" !== e && "hex6" !== e && "name" !== e || (e = "rgb"));var r = Mt({ format: e }),
          a = "";if (st.removeClass("sp-clear-display"), st.css("background-color", "transparent"), !r && ht) st.addClass("sp-clear-display");else {
        var n = r.toHexString(),
            i = r.toRgbString();if (Bt || 1 === r.alpha ? st.css("background-color", i) : (st.css("background-color", "transparent"), st.css("filter", r.toFilter())), f.showAlpha) {
          var s = r.toRgb();s.a = 0;var o = tinycolor(s).toRgbString(),
              l = "linear-gradient(left, " + o + ", " + n + ")";zt ? $.css("filter", tinycolor(o).toFilter({ gradientType: 1 }, n)) : ($.css("background", "-webkit-" + l), $.css("background", "-moz-" + l), $.css("background", "-ms-" + l), $.css("background", "linear-gradient(to right, " + o + ", " + n + ")"));
        }a = r.toString(e);
      }f.showInput && Y.val(a), f.showPalette && bt(), vt();
    }function Ft() {
      var t = P,
          e = A;if (ht && ut) X.hide(), V.hide(), L.hide();else {
        X.show(), V.show(), L.show();var r = t * m,
            a = y - e * y;r = Math.max(-w, Math.min(m - w, r - w)), a = Math.max(-w, Math.min(y - w, a - w)), L.css({ top: a + "px", left: r + "px" });var n = M * x;X.css({ left: n - k / 2 + "px" });var i = C * _;V.css({ top: i - S + "px" });
      }
    }function Tt(t) {
      var e = Mt(),
          r = "",
          a = !tinycolor.equals(e, lt);e && (r = e.toString(ct), gt(e)), et && E.val(r), t && a && (p.change(e), E.trigger("change", [e]));
    }function Ot() {
      var t, e, r, a, n, i, s, o, l, c;b && (m = B.width(), y = B.height(), w = L.height(), K.width(), _ = K.height(), S = V.height(), x = W.width(), k = X.width(), u || (I.css("position", "absolute"), f.offset ? I.offset(f.offset) : I.offset((e = it, r = (t = I).outerWidth(), a = t.outerHeight(), n = e.outerHeight(), i = t[0].ownerDocument, s = i.documentElement, o = s.clientWidth + jt(i).scrollLeft(), l = s.clientHeight + jt(i).scrollTop(), (c = e.offset()).top += n, c.left -= Math.min(c.left, c.left + r > o && r < o ? Math.abs(c.left + r - o) : 0), c.top -= Math.min(c.top, c.top + a > l && a < l ? Math.abs(a + n - 0) : 0), c))), Ft(), f.showPalette && bt(), E.trigger("reflow.spectrum"));
    }function qt() {
      Ct(), D = !0, E.attr("disabled", !0), it.addClass("sp-disabled");
    }!function () {
      if (zt && I.find("*:not(input)").attr("unselectable", "on"), dt(), at && E.after(nt).hide(), ht || U.hide(), u) E.after(I).hide();else {
        var t = "parent" === f.appendTo ? E.parent() : jt(f.appendTo);1 !== t.length && (t = jt("body")), t.append(I);
      }function e(t) {
        return t.data && t.data.ignore ? (At(jt(t.target).closest(".sp-thumb-el").data("color")), Rt()) : (At(jt(t.target).closest(".sp-thumb-el").data("color")), Rt(), Tt(!0), f.hideAfterPaletteSelect && Ct()), !1;
      }pt(), it.bind("click.spectrum touchstart.spectrum", function (t) {
        D || _t(), t.stopPropagation(), jt(t.target).is("input") || t.preventDefault();
      }), (E.is(":disabled") || !0 === f.disabled) && qt(), I.click($t), Y.change(wt), Y.bind("paste", function () {
        setTimeout(wt, 1);
      }), Y.keydown(function (t) {
        13 == t.keyCode && wt();
      }), J.text(f.cancelText), J.bind("click.spectrum", function (t) {
        t.stopPropagation(), t.preventDefault(), Pt(), Ct();
      }), U.attr("title", f.clearText), U.bind("click.spectrum", function (t) {
        t.stopPropagation(), t.preventDefault(), ut = !0, Rt(), u && Tt(!0);
      }), Z.text(f.chooseText), Z.bind("click.spectrum", function (t) {
        t.stopPropagation(), t.preventDefault(), zt && Y.is(":focus") && Y.trigger("change"), Y.hasClass("sp-validation-error") || (Tt(!0), Ct());
      }), tt.text(f.showPaletteOnly ? f.togglePaletteMoreText : f.togglePaletteLessText), tt.bind("click.spectrum", function (t) {
        t.stopPropagation(), t.preventDefault(), f.showPaletteOnly = !f.showPaletteOnly, f.showPaletteOnly || u || I.css("left", "-=" + (z.outerWidth(!0) + 5)), dt();
      }), Xt(W, function (t, e, r) {
        M = t / x, ut = !1, r.shiftKey && (M = Math.round(10 * M) / 10), Rt();
      }, mt, yt), Xt(K, function (t, e) {
        C = parseFloat(e / _), ut = !1, f.showAlpha || (M = 1), Rt();
      }, mt, yt), Xt(B, function (t, e, r) {
        if (r.shiftKey) {
          if (!N) {
            var a = P * m,
                n = y - A * y,
                i = Math.abs(t - a) > Math.abs(e - n);N = i ? "x" : "y";
          }
        } else N = null;var s = !N || "y" === N;(!N || "x" === N) && (P = parseFloat(t / m)), s && (A = parseFloat((y - e) / y)), ut = !1, f.showAlpha || (M = 1), Rt();
      }, mt, yt), ot ? (At(ot), Ht(), ct = f.preferredFormat || tinycolor(ot).format, gt(ot)) : Ht(), u && xt();var r = zt ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";G.delegate(".sp-thumb-el", r, e), Q.delegate(".sp-thumb-el:nth-child(1)", r, { ignore: !0 }, e);
    }();var Nt = { show: xt, hide: Ct, toggle: _t, reflow: Ot, option: function option(t, e) {
        return t === Et ? jt.extend({}, f) : e === Et ? f[t] : (f[t] = e, "preferredFormat" === t && (ct = f.preferredFormat), void dt());
      }, enable: function enable() {
        D = !1, E.attr("disabled", !1), it.removeClass("sp-disabled");
      }, disable: qt, offset: function offset(t) {
        f.offset = t, Ot();
      }, set: function set(t) {
        At(t), Tt();
      }, get: Mt, destroy: function destroy() {
        E.show(), it.unbind("click.spectrum touchstart.spectrum"), I.remove(), nt.remove(), It[Nt.id] = null;
      }, container: I };return Nt.id = It.push(Nt) - 1, Nt;
  }function t() {}function $t(t) {
    t.stopPropagation();
  }function Wt(t, e) {
    var r = Array.prototype.slice,
        a = r.call(arguments, 2);return function () {
      return t.apply(e, a.concat(r.call(arguments)));
    };
  }function Xt(s, o, e, t) {
    o = o || function () {}, e = e || function () {}, t = t || function () {};var l = document,
        c = !1,
        f = {},
        u = 0,
        h = 0,
        d = "ontouchstart" in window,
        r = {};function p(t) {
      t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), t.returnValue = !1;
    }function a(t) {
      if (c) {
        if (zt && l.documentMode < 9 && !t.button) return g();var e = t.originalEvent && t.originalEvent.touches && t.originalEvent.touches[0],
            r = e && e.pageX || t.pageX,
            a = e && e.pageY || t.pageY,
            n = Math.max(0, Math.min(r - f.left, h)),
            i = Math.max(0, Math.min(a - f.top, u));d && p(t), o.apply(s, [n, i, t]);
      }
    }function g() {
      c && (jt(l).unbind(r), jt(l.body).removeClass("sp-dragging"), setTimeout(function () {
        t.apply(s, arguments);
      }, 0)), c = !1;
    }r.selectstart = p, r.dragstart = p, r["touchmove mousemove"] = a, r["touchend mouseup"] = g, jt(s).bind("touchstart mousedown", function (t) {
      (t.which ? 3 == t.which : 2 == t.button) || c || !1 !== e.apply(s, arguments) && (c = !0, u = jt(s).height(), h = jt(s).width(), f = jt(s).offset(), jt(l).bind(r), jt(l.body).addClass("sp-dragging"), a(t), p(t));
    });
  }function Yt() {
    return jt.fn.spectrum.inputTypeColorSupport();
  }var i = "spectrum.id";jt.fn.spectrum = function (r, t) {
    if ("string" == typeof r) {
      var a = this,
          n = Array.prototype.slice.call(arguments, 1);return this.each(function () {
        var t = It[jt(this).data(i)];if (t) {
          var e = t[r];if (!e) throw new Error("Spectrum: no such method: '" + r + "'");"get" == r ? a = t.get() : "container" == r ? a = t.container : "option" == r ? a = t.option.apply(t, n) : "destroy" == r ? (t.destroy(), jt(this).removeData(i)) : e.apply(t, n);
        }
      }), a;
    }return this.spectrum("destroy").each(function () {
      var t = e(this, jt.extend({}, r, jt(this).data()));jt(this).data(i, t.id);
    });
  }, jt.fn.spectrum.load = !0, jt.fn.spectrum.loadOpts = {}, jt.fn.spectrum.draggable = Xt, jt.fn.spectrum.defaults = Dt, jt.fn.spectrum.inputTypeColorSupport = function t() {
    if (void 0 === t._cachedResult) {
      var e = jt("<input type='color'/>")[0];t._cachedResult = "color" === e.type && "" !== e.value;
    }return t._cachedResult;
  }, jt.spectrum = {}, jt.spectrum.localization = {}, jt.spectrum.palettes = {}, jt.fn.spectrum.processNativeColorInputs = function () {
    var t = jt("input[type=color]");t.length && !Yt() && t.spectrum({ preferredFormat: "hex6" });
  }, function () {
    var l = /^[\s,#]+/,
        c = /\s+$/,
        a = 0,
        f = Math,
        i = f.round,
        u = f.min,
        h = f.max,
        t = f.random,
        d = function d(t, e) {
      if (e = e || {}, (t = t || "") instanceof d) return t;if (!(this instanceof d)) return new d(t, e);var r = function (t) {
        var e = { r: 0, g: 0, b: 0 },
            r = 1,
            a = !1,
            n = !1;"string" == typeof t && (t = function (t) {
          t = t.replace(l, "").replace(c, "").toLowerCase();var e,
              r = !1;if (P[t]) t = P[t], r = !0;else if ("transparent" == t) return { r: 0, g: 0, b: 0, a: 0, format: "name" };if (e = E.rgb.exec(t)) return { r: e[1], g: e[2], b: e[3] };if (e = E.rgba.exec(t)) return { r: e[1], g: e[2], b: e[3], a: e[4] };if (e = E.hsl.exec(t)) return { h: e[1], s: e[2], l: e[3] };if (e = E.hsla.exec(t)) return { h: e[1], s: e[2], l: e[3], a: e[4] };if (e = E.hsv.exec(t)) return { h: e[1], s: e[2], v: e[3] };if (e = E.hsva.exec(t)) return { h: e[1], s: e[2], v: e[3], a: e[4] };if (e = E.hex8.exec(t)) return { a: (a = e[1], F(a) / 255), r: F(e[2]), g: F(e[3]), b: F(e[4]), format: r ? "name" : "hex8" };var a;if (e = E.hex6.exec(t)) return { r: F(e[1]), g: F(e[2]), b: F(e[3]), format: r ? "name" : "hex" };if (e = E.hex3.exec(t)) return { r: F(e[1] + "" + e[1]), g: F(e[2] + "" + e[2]), b: F(e[3] + "" + e[3]), format: r ? "name" : "hex" };return !1;
        }(t));"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (t.hasOwnProperty("r") && t.hasOwnProperty("g") && t.hasOwnProperty("b") ? (i = t.r, s = t.g, o = t.b, e = { r: 255 * R(i, 255), g: 255 * R(s, 255), b: 255 * R(o, 255) }, a = !0, n = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("v") ? (t.s = O(t.s), t.v = O(t.v), e = function (t, e, r) {
          t = 6 * R(t, 360), e = R(e, 100), r = R(r, 100);var a = f.floor(t),
              n = t - a,
              i = r * (1 - e),
              s = r * (1 - n * e),
              o = r * (1 - (1 - n) * e),
              l = a % 6;return { r: 255 * [r, s, i, i, o, r][l], g: 255 * [o, r, r, s, i, i][l], b: 255 * [i, i, o, r, r, s][l] };
        }(t.h, t.s, t.v), a = !0, n = "hsv") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("l") && (t.s = O(t.s), t.l = O(t.l), e = function (t, e, r) {
          var a, n, i;function s(t, e, r) {
            return r < 0 && (r += 1), 1 < r && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
          }if (t = R(t, 360), e = R(e, 100), r = R(r, 100), 0 === e) a = n = i = r;else {
            var o = r < .5 ? r * (1 + e) : r + e - r * e,
                l = 2 * r - o;a = s(l, o, t + 1 / 3), n = s(l, o, t), i = s(l, o, t - 1 / 3);
          }return { r: 255 * a, g: 255 * n, b: 255 * i };
        }(t.h, t.s, t.l), a = !0, n = "hsl"), t.hasOwnProperty("a") && (r = t.a));var i, s, o;return r = M(r), { ok: a, format: t.format || n, r: u(255, h(e.r, 0)), g: u(255, h(e.g, 0)), b: u(255, h(e.b, 0)), a: r };
      }(t);this._originalInput = t, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = i(100 * this._a) / 100, this._format = e.format || r.format, this._gradientType = e.gradientType, this._r < 1 && (this._r = i(this._r)), this._g < 1 && (this._g = i(this._g)), this._b < 1 && (this._b = i(this._b)), this._ok = r.ok, this._tc_id = a++;
    };function n(t, e, r) {
      t = R(t, 255), e = R(e, 255), r = R(r, 255);var a,
          n,
          i = h(t, e, r),
          s = u(t, e, r),
          o = (i + s) / 2;if (i == s) a = n = 0;else {
        var l = i - s;switch (n = .5 < o ? l / (2 - i - s) : l / (i + s), i) {case t:
            a = (e - r) / l + (e < r ? 6 : 0);break;case e:
            a = (r - t) / l + 2;break;case r:
            a = (t - e) / l + 4;}a /= 6;
      }return { h: a, s: n, l: o };
    }function s(t, e, r) {
      t = R(t, 255), e = R(e, 255), r = R(r, 255);var a,
          n,
          i = h(t, e, r),
          s = u(t, e, r),
          o = i,
          l = i - s;if (n = 0 === i ? 0 : l / i, i == s) a = 0;else {
        switch (i) {case t:
            a = (e - r) / l + (e < r ? 6 : 0);break;case e:
            a = (r - t) / l + 2;break;case r:
            a = (t - e) / l + 4;}a /= 6;
      }return { h: a, s: n, v: o };
    }function e(t, e, r, a) {
      var n = [T(i(t).toString(16)), T(i(e).toString(16)), T(i(r).toString(16))];return a && n[0].charAt(0) == n[0].charAt(1) && n[1].charAt(0) == n[1].charAt(1) && n[2].charAt(0) == n[2].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) : n.join("");
    }function o(t, e, r, a) {
      var n;return [T((n = a, Math.round(255 * parseFloat(n)).toString(16))), T(i(t).toString(16)), T(i(e).toString(16)), T(i(r).toString(16))].join("");
    }function r(t, e) {
      e = 0 === e ? 0 : e || 10;var r = d(t).toHsl();return r.s -= e / 100, r.s = H(r.s), d(r);
    }function p(t, e) {
      e = 0 === e ? 0 : e || 10;var r = d(t).toHsl();return r.s += e / 100, r.s = H(r.s), d(r);
    }function g(t) {
      return d(t).desaturate(100);
    }function b(t, e) {
      e = 0 === e ? 0 : e || 10;var r = d(t).toHsl();return r.l += e / 100, r.l = H(r.l), d(r);
    }function v(t, e) {
      e = 0 === e ? 0 : e || 10;var r = d(t).toRgb();return r.r = h(0, u(255, r.r - i(-e / 100 * 255))), r.g = h(0, u(255, r.g - i(-e / 100 * 255))), r.b = h(0, u(255, r.b - i(-e / 100 * 255))), d(r);
    }function m(t, e) {
      e = 0 === e ? 0 : e || 10;var r = d(t).toHsl();return r.l -= e / 100, r.l = H(r.l), d(r);
    }function y(t, e) {
      var r = d(t).toHsl(),
          a = (i(r.h) + e) % 360;return r.h = a < 0 ? 360 + a : a, d(r);
    }function w(t) {
      var e = d(t).toHsl();return e.h = (e.h + 180) % 360, d(e);
    }function _(t) {
      var e = d(t).toHsl(),
          r = e.h;return [d(t), d({ h: (r + 120) % 360, s: e.s, l: e.l }), d({ h: (r + 240) % 360, s: e.s, l: e.l })];
    }function x(t) {
      var e = d(t).toHsl(),
          r = e.h;return [d(t), d({ h: (r + 90) % 360, s: e.s, l: e.l }), d({ h: (r + 180) % 360, s: e.s, l: e.l }), d({ h: (r + 270) % 360, s: e.s, l: e.l })];
    }function k(t) {
      var e = d(t).toHsl(),
          r = e.h;return [d(t), d({ h: (r + 72) % 360, s: e.s, l: e.l }), d({ h: (r + 216) % 360, s: e.s, l: e.l })];
    }function S(t, e, r) {
      e = e || 6, r = r || 30;var a = d(t).toHsl(),
          n = 360 / r,
          i = [d(t)];for (a.h = (a.h - (n * e >> 1) + 720) % 360; --e;) {
        a.h = (a.h + n) % 360, i.push(d(a));
      }return i;
    }function C(t, e) {
      e = e || 6;for (var r = d(t).toHsv(), a = r.h, n = r.s, i = r.v, s = [], o = 1 / e; e--;) {
        s.push(d({ h: a, s: n, v: i })), i = (i + o) % 1;
      }return s;
    }d.prototype = { isDark: function isDark() {
        return this.getBrightness() < 128;
      }, isLight: function isLight() {
        return !this.isDark();
      }, isValid: function isValid() {
        return this._ok;
      }, getOriginalInput: function getOriginalInput() {
        return this._originalInput;
      }, getFormat: function getFormat() {
        return this._format;
      }, getAlpha: function getAlpha() {
        return this._a;
      }, getBrightness: function getBrightness() {
        var t = this.toRgb();return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
      }, setAlpha: function setAlpha(t) {
        return this._a = M(t), this._roundA = i(100 * this._a) / 100, this;
      }, toHsv: function toHsv() {
        var t = s(this._r, this._g, this._b);return { h: 360 * t.h, s: t.s, v: t.v, a: this._a };
      }, toHsvString: function toHsvString() {
        var t = s(this._r, this._g, this._b),
            e = i(360 * t.h),
            r = i(100 * t.s),
            a = i(100 * t.v);return 1 == this._a ? "hsv(" + e + ", " + r + "%, " + a + "%)" : "hsva(" + e + ", " + r + "%, " + a + "%, " + this._roundA + ")";
      }, toHsl: function toHsl() {
        var t = n(this._r, this._g, this._b);return { h: 360 * t.h, s: t.s, l: t.l, a: this._a };
      }, toHslString: function toHslString() {
        var t = n(this._r, this._g, this._b),
            e = i(360 * t.h),
            r = i(100 * t.s),
            a = i(100 * t.l);return 1 == this._a ? "hsl(" + e + ", " + r + "%, " + a + "%)" : "hsla(" + e + ", " + r + "%, " + a + "%, " + this._roundA + ")";
      }, toHex: function toHex(t) {
        return e(this._r, this._g, this._b, t);
      }, toHexString: function toHexString(t) {
        return "#" + this.toHex(t);
      }, toHex8: function toHex8() {
        return o(this._r, this._g, this._b, this._a);
      }, toHex8String: function toHex8String() {
        return "#" + this.toHex8();
      }, toRgb: function toRgb() {
        return { r: i(this._r), g: i(this._g), b: i(this._b), a: this._a };
      }, toRgbString: function toRgbString() {
        return 1 == this._a ? "rgb(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ")" : "rgba(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ", " + this._roundA + ")";
      }, toPercentageRgb: function toPercentageRgb() {
        return { r: i(100 * R(this._r, 255)) + "%", g: i(100 * R(this._g, 255)) + "%", b: i(100 * R(this._b, 255)) + "%", a: this._a };
      }, toPercentageRgbString: function toPercentageRgbString() {
        return 1 == this._a ? "rgb(" + i(100 * R(this._r, 255)) + "%, " + i(100 * R(this._g, 255)) + "%, " + i(100 * R(this._b, 255)) + "%)" : "rgba(" + i(100 * R(this._r, 255)) + "%, " + i(100 * R(this._g, 255)) + "%, " + i(100 * R(this._b, 255)) + "%, " + this._roundA + ")";
      }, toName: function toName() {
        return 0 === this._a ? "transparent" : !(this._a < 1) && (A[e(this._r, this._g, this._b, !0)] || !1);
      }, toFilter: function toFilter(t) {
        var e = "#" + o(this._r, this._g, this._b, this._a),
            r = e,
            a = this._gradientType ? "GradientType = 1, " : "";t && (r = d(t).toHex8String());return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + e + ",endColorstr=" + r + ")";
      }, toString: function toString(t) {
        var e = !!t;t = t || this._format;var r = !1,
            a = this._a < 1 && 0 <= this._a;return e || !a || "hex" !== t && "hex6" !== t && "hex3" !== t && "name" !== t ? ("rgb" === t && (r = this.toRgbString()), "prgb" === t && (r = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (r = this.toHexString()), "hex3" === t && (r = this.toHexString(!0)), "hex8" === t && (r = this.toHex8String()), "name" === t && (r = this.toName()), "hsl" === t && (r = this.toHslString()), "hsv" === t && (r = this.toHsvString()), r || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString();
      }, _applyModification: function _applyModification(t, e) {
        var r = t.apply(null, [this].concat([].slice.call(e)));return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this;
      }, lighten: function lighten() {
        return this._applyModification(b, arguments);
      }, brighten: function brighten() {
        return this._applyModification(v, arguments);
      }, darken: function darken() {
        return this._applyModification(m, arguments);
      }, desaturate: function desaturate() {
        return this._applyModification(r, arguments);
      }, saturate: function saturate() {
        return this._applyModification(p, arguments);
      }, greyscale: function greyscale() {
        return this._applyModification(g, arguments);
      }, spin: function spin() {
        return this._applyModification(y, arguments);
      }, _applyCombination: function _applyCombination(t, e) {
        return t.apply(null, [this].concat([].slice.call(e)));
      }, analogous: function analogous() {
        return this._applyCombination(S, arguments);
      }, complement: function complement() {
        return this._applyCombination(w, arguments);
      }, monochromatic: function monochromatic() {
        return this._applyCombination(C, arguments);
      }, splitcomplement: function splitcomplement() {
        return this._applyCombination(k, arguments);
      }, triad: function triad() {
        return this._applyCombination(_, arguments);
      }, tetrad: function tetrad() {
        return this._applyCombination(x, arguments);
      } }, d.fromRatio = function (t, e) {
      if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        var r = {};for (var a in t) {
          t.hasOwnProperty(a) && (r[a] = "a" === a ? t[a] : O(t[a]));
        }t = r;
      }return d(t, e);
    }, d.equals = function (t, e) {
      return !(!t || !e) && d(t).toRgbString() == d(e).toRgbString();
    }, d.random = function () {
      return d.fromRatio({ r: t(), g: t(), b: t() });
    }, d.mix = function (t, e, r) {
      r = 0 === r ? 0 : r || 50;var a,
          n = d(t).toRgb(),
          i = d(e).toRgb(),
          s = r / 100,
          o = 2 * s - 1,
          l = i.a - n.a,
          c = 1 - (a = ((a = o * l == -1 ? o : (o + l) / (1 + o * l)) + 1) / 2),
          f = { r: i.r * a + n.r * c, g: i.g * a + n.g * c, b: i.b * a + n.b * c, a: i.a * s + n.a * (1 - s) };return d(f);
    }, d.readability = function (t, e) {
      var r = d(t),
          a = d(e),
          n = r.toRgb(),
          i = a.toRgb(),
          s = r.getBrightness(),
          o = a.getBrightness(),
          l = Math.max(n.r, i.r) - Math.min(n.r, i.r) + Math.max(n.g, i.g) - Math.min(n.g, i.g) + Math.max(n.b, i.b) - Math.min(n.b, i.b);return { brightness: Math.abs(s - o), color: l };
    }, d.isReadable = function (t, e) {
      var r = d.readability(t, e);return 125 < r.brightness && 500 < r.color;
    }, d.mostReadable = function (t, e) {
      for (var r = null, a = 0, n = !1, i = 0; i < e.length; i++) {
        var s = d.readability(t, e[i]),
            o = 125 < s.brightness && 500 < s.color,
            l = s.brightness / 125 * 3 + s.color / 500;(o && !n || o && n && a < l || !o && !n && a < l) && (n = o, a = l, r = d(e[i]));
      }return r;
    };var P = d.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" },
        A = d.hexNames = function (t) {
      var e = {};for (var r in t) {
        t.hasOwnProperty(r) && (e[t[r]] = r);
      }return e;
    }(P);function M(t) {
      return t = parseFloat(t), (isNaN(t) || t < 0 || 1 < t) && (t = 1), t;
    }function R(t, e) {
      var r;"string" == typeof (r = t) && -1 != r.indexOf(".") && 1 === parseFloat(r) && (t = "100%");var a,
          n = "string" == typeof (a = t) && -1 != a.indexOf("%");return t = u(e, h(0, parseFloat(t))), n && (t = parseInt(t * e, 10) / 100), f.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e);
    }function H(t) {
      return u(1, h(0, t));
    }function F(t) {
      return parseInt(t, 16);
    }function T(t) {
      return 1 == t.length ? "0" + t : "" + t;
    }function O(t) {
      return t <= 1 && (t = 100 * t + "%"), t;
    }var q,
        N,
        j,
        E = (N = "[\\s|\\(]+(" + (q = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + q + ")[,|\\s]+(" + q + ")\\s*\\)?", j = "[\\s|\\(]+(" + q + ")[,|\\s]+(" + q + ")[,|\\s]+(" + q + ")[,|\\s]+(" + q + ")\\s*\\)?", { rgb: new RegExp("rgb" + N), rgba: new RegExp("rgba" + j), hsl: new RegExp("hsl" + N), hsla: new RegExp("hsla" + j), hsv: new RegExp("hsv" + N), hsva: new RegExp("hsva" + j), hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ });window.tinycolor = d;
  }(), jt(function () {
    jt.fn.spectrum.load && jt.fn.spectrum.processNativeColorInputs();
  });
});
/*!
 * Quill Editor v1.3.6
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Quill = e() : t.Quill = e();
}("undefined" != typeof self ? self : this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;var o = n[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
    }var n = {};return e.m = t, e.c = n, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 45);
  }([function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(17),
        o = n(18),
        i = n(19),
        l = n(48),
        a = n(49),
        s = n(50),
        u = n(51),
        c = n(52),
        f = n(11),
        h = n(29),
        p = n(30),
        d = n(28),
        y = n(1),
        v = { Scope: y.Scope, create: y.create, find: y.find, query: y.query, register: y.register, Container: r.default, Format: o.default, Leaf: i.default, Embed: u.default, Scroll: l.default, Block: s.default, Inline: a.default, Text: c.default, Attributor: { Attribute: f.default, Class: h.default, Style: p.default, Store: d.default } };e.default = v;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = i(t);if (null == n) throw new s("Unable to create " + t + " blot");var r = n;return new r(t instanceof Node || t.nodeType === Node.TEXT_NODE ? t : r.create(e), e);
    }function o(t, n) {
      return void 0 === n && (n = !1), null == t ? null : null != t[e.DATA_KEY] ? t[e.DATA_KEY].blot : n ? o(t.parentNode, n) : null;
    }function i(t, e) {
      void 0 === e && (e = p.ANY);var n;if ("string" == typeof t) n = h[t] || u[t];else if (t instanceof Text || t.nodeType === Node.TEXT_NODE) n = h.text;else if ("number" == typeof t) t & p.LEVEL & p.BLOCK ? n = h.block : t & p.LEVEL & p.INLINE && (n = h.inline);else if (t instanceof HTMLElement) {
        var r = (t.getAttribute("class") || "").split(/\s+/);for (var o in r) {
          if (n = c[r[o]]) break;
        }n = n || f[t.tagName];
      }return null == n ? null : e & p.LEVEL & n.scope && e & p.TYPE & n.scope ? n : null;
    }function l() {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }if (t.length > 1) return t.map(function (t) {
        return l(t);
      });var n = t[0];if ("string" != typeof n.blotName && "string" != typeof n.attrName) throw new s("Invalid definition");if ("abstract" === n.blotName) throw new s("Cannot register abstract class");if (h[n.blotName || n.attrName] = n, "string" == typeof n.keyName) u[n.keyName] = n;else if (null != n.className && (c[n.className] = n), null != n.tagName) {
        Array.isArray(n.tagName) ? n.tagName = n.tagName.map(function (t) {
          return t.toUpperCase();
        }) : n.tagName = n.tagName.toUpperCase();var r = Array.isArray(n.tagName) ? n.tagName : [n.tagName];r.forEach(function (t) {
          null != f[t] && null != n.className || (f[t] = n);
        });
      }return n;
    }var a = this && this.__extends || function () {
      var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      };return function (e, n) {
        function r() {
          this.constructor = e;
        }t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      };
    }();Object.defineProperty(e, "__esModule", { value: !0 });var s = function (t) {
      function e(e) {
        var n = this;return e = "[Parchment] " + e, n = t.call(this, e) || this, n.message = e, n.name = n.constructor.name, n;
      }return a(e, t), e;
    }(Error);e.ParchmentError = s;var u = {},
        c = {},
        f = {},
        h = {};e.DATA_KEY = "__blot";var p;!function (t) {
      t[t.TYPE = 3] = "TYPE", t[t.LEVEL = 12] = "LEVEL", t[t.ATTRIBUTE = 13] = "ATTRIBUTE", t[t.BLOT = 14] = "BLOT", t[t.INLINE = 7] = "INLINE", t[t.BLOCK = 11] = "BLOCK", t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT", t[t.INLINE_BLOT = 6] = "INLINE_BLOT", t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t[t.ANY = 15] = "ANY";
    }(p = e.Scope || (e.Scope = {})), e.create = r, e.find = o, e.query = i, e.register = l;
  }, function (t, e) {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
        r = Object.prototype.toString,
        o = function o(t) {
      return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === r.call(t);
    },
        i = function i(t) {
      if (!t || "[object Object]" !== r.call(t)) return !1;var e = n.call(t, "constructor"),
          o = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");if (t.constructor && !e && !o) return !1;var i;for (i in t) {}return void 0 === i || n.call(t, i);
    };t.exports = function t() {
      var e,
          n,
          r,
          l,
          a,
          s,
          u = arguments[0],
          c = 1,
          f = arguments.length,
          h = !1;for ("boolean" == typeof u && (h = u, u = arguments[1] || {}, c = 2), (null == u || "object" != (typeof u === "undefined" ? "undefined" : _typeof(u)) && "function" != typeof u) && (u = {}); c < f; ++c) {
        if (null != (e = arguments[c])) for (n in e) {
          r = u[n], l = e[n], u !== l && (h && l && (i(l) || (a = o(l))) ? (a ? (a = !1, s = r && o(r) ? r : []) : s = r && i(r) ? r : {}, u[n] = t(h, s, l)) : void 0 !== l && (u[n] = l));
        }
      }return u;
    };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }function a(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};return null == t ? e : ("function" == typeof t.formats && (e = (0, f.default)(e, t.formats())), null == t.parent || "scroll" == t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : a(t.parent, e));
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.BlockEmbed = e.bubbleFormats = void 0;var s = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        u = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        c = n(2),
        f = r(c),
        h = n(4),
        p = r(h),
        d = n(0),
        y = r(d),
        v = n(14),
        b = r(v),
        g = n(5),
        m = r(g),
        _ = n(8),
        O = r(_),
        w = function (t) {
      function e() {
        return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return l(e, t), s(e, [{ key: "attach", value: function value() {
          u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attach", this).call(this), this.attributes = new y.default.Attributor.Store(this.domNode);
        } }, { key: "delta", value: function value() {
          return new p.default().insert(this.value(), (0, f.default)(this.formats(), this.attributes.values()));
        } }, { key: "format", value: function value(t, e) {
          var n = y.default.query(t, y.default.Scope.BLOCK_ATTRIBUTE);null != n && this.attributes.attribute(n, e);
        } }, { key: "formatAt", value: function value(t, e, n, r) {
          this.format(n, r);
        } }, { key: "insertAt", value: function value(t, n, r) {
          if ("string" == typeof n && n.endsWith("\n")) {
            var o = y.default.create(x.blotName);this.parent.insertBefore(o, 0 === t ? this : this.next), o.insertAt(0, n.slice(0, -1));
          } else u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
        } }]), e;
    }(y.default.Embed);w.scope = y.default.Scope.BLOCK_BLOT;var x = function (t) {
      function e(t) {
        o(this, e);var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));return n.cache = {}, n;
      }return l(e, t), s(e, [{ key: "delta", value: function value() {
          return null == this.cache.delta && (this.cache.delta = this.descendants(y.default.Leaf).reduce(function (t, e) {
            return 0 === e.length() ? t : t.insert(e.value(), a(e));
          }, new p.default()).insert("\n", a(this))), this.cache.delta;
        } }, { key: "deleteAt", value: function value(t, n) {
          u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), this.cache = {};
        } }, { key: "formatAt", value: function value(t, n, r, o) {
          n <= 0 || (y.default.query(r, y.default.Scope.BLOCK) ? t + n === this.length() && this.format(r, o) : u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, Math.min(n, this.length() - t - 1), r, o), this.cache = {});
        } }, { key: "insertAt", value: function value(t, n, r) {
          if (null != r) return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);if (0 !== n.length) {
            var o = n.split("\n"),
                i = o.shift();i.length > 0 && (t < this.length() - 1 || null == this.children.tail ? u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, Math.min(t, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});var l = this;o.reduce(function (t, e) {
              return l = l.split(t, !0), l.insertAt(0, e), e.length;
            }, t + i.length);
          }
        } }, { key: "insertBefore", value: function value(t, n) {
          var r = this.children.head;u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n), r instanceof b.default && r.remove(), this.cache = {};
        } }, { key: "length", value: function value() {
          return null == this.cache.length && (this.cache.length = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "length", this).call(this) + 1), this.cache.length;
        } }, { key: "moveChildren", value: function value(t, n) {
          u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveChildren", this).call(this, t, n), this.cache = {};
        } }, { key: "optimize", value: function value(t) {
          u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.cache = {};
        } }, { key: "path", value: function value(t) {
          return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t, !0);
        } }, { key: "removeChild", value: function value(t) {
          u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeChild", this).call(this, t), this.cache = {};
        } }, { key: "split", value: function value(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (n && (0 === t || t >= this.length() - 1)) {
            var r = this.clone();return 0 === t ? (this.parent.insertBefore(r, this), this) : (this.parent.insertBefore(r, this.next), r);
          }var o = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "split", this).call(this, t, n);return this.cache = {}, o;
        } }]), e;
    }(y.default.Block);x.blotName = "block", x.tagName = "P", x.defaultChild = "break", x.allowedChildren = [m.default, y.default.Embed, O.default], e.bubbleFormats = a, e.BlockEmbed = w, e.default = x;
  }, function (t, e, n) {
    var r = n(54),
        o = n(12),
        i = n(2),
        l = n(20),
        a = String.fromCharCode(0),
        s = function s(t) {
      Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = [];
    };s.prototype.insert = function (t, e) {
      var n = {};return 0 === t.length ? this : (n.insert = t, null != e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && Object.keys(e).length > 0 && (n.attributes = e), this.push(n));
    }, s.prototype.delete = function (t) {
      return t <= 0 ? this : this.push({ delete: t });
    }, s.prototype.retain = function (t, e) {
      if (t <= 0) return this;var n = { retain: t };return null != e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && Object.keys(e).length > 0 && (n.attributes = e), this.push(n);
    }, s.prototype.push = function (t) {
      var e = this.ops.length,
          n = this.ops[e - 1];if (t = i(!0, {}, t), "object" == (typeof n === "undefined" ? "undefined" : _typeof(n))) {
        if ("number" == typeof t.delete && "number" == typeof n.delete) return this.ops[e - 1] = { delete: n.delete + t.delete }, this;if ("number" == typeof n.delete && null != t.insert && (e -= 1, "object" != _typeof(n = this.ops[e - 1]))) return this.ops.unshift(t), this;if (o(t.attributes, n.attributes)) {
          if ("string" == typeof t.insert && "string" == typeof n.insert) return this.ops[e - 1] = { insert: n.insert + t.insert }, "object" == _typeof(t.attributes) && (this.ops[e - 1].attributes = t.attributes), this;if ("number" == typeof t.retain && "number" == typeof n.retain) return this.ops[e - 1] = { retain: n.retain + t.retain }, "object" == _typeof(t.attributes) && (this.ops[e - 1].attributes = t.attributes), this;
        }
      }return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this;
    }, s.prototype.chop = function () {
      var t = this.ops[this.ops.length - 1];return t && t.retain && !t.attributes && this.ops.pop(), this;
    }, s.prototype.filter = function (t) {
      return this.ops.filter(t);
    }, s.prototype.forEach = function (t) {
      this.ops.forEach(t);
    }, s.prototype.map = function (t) {
      return this.ops.map(t);
    }, s.prototype.partition = function (t) {
      var e = [],
          n = [];return this.forEach(function (r) {
        (t(r) ? e : n).push(r);
      }), [e, n];
    }, s.prototype.reduce = function (t, e) {
      return this.ops.reduce(t, e);
    }, s.prototype.changeLength = function () {
      return this.reduce(function (t, e) {
        return e.insert ? t + l.length(e) : e.delete ? t - e.delete : t;
      }, 0);
    }, s.prototype.length = function () {
      return this.reduce(function (t, e) {
        return t + l.length(e);
      }, 0);
    }, s.prototype.slice = function (t, e) {
      t = t || 0, "number" != typeof e && (e = 1 / 0);for (var n = [], r = l.iterator(this.ops), o = 0; o < e && r.hasNext();) {
        var i;o < t ? i = r.next(t - o) : (i = r.next(e - o), n.push(i)), o += l.length(i);
      }return new s(n);
    }, s.prototype.compose = function (t) {
      for (var e = l.iterator(this.ops), n = l.iterator(t.ops), r = new s(); e.hasNext() || n.hasNext();) {
        if ("insert" === n.peekType()) r.push(n.next());else if ("delete" === e.peekType()) r.push(e.next());else {
          var o = Math.min(e.peekLength(), n.peekLength()),
              i = e.next(o),
              a = n.next(o);if ("number" == typeof a.retain) {
            var u = {};"number" == typeof i.retain ? u.retain = o : u.insert = i.insert;var c = l.attributes.compose(i.attributes, a.attributes, "number" == typeof i.retain);c && (u.attributes = c), r.push(u);
          } else "number" == typeof a.delete && "number" == typeof i.retain && r.push(a);
        }
      }return r.chop();
    }, s.prototype.concat = function (t) {
      var e = new s(this.ops.slice());return t.ops.length > 0 && (e.push(t.ops[0]), e.ops = e.ops.concat(t.ops.slice(1))), e;
    }, s.prototype.diff = function (t, e) {
      if (this.ops === t.ops) return new s();var n = [this, t].map(function (e) {
        return e.map(function (n) {
          if (null != n.insert) return "string" == typeof n.insert ? n.insert : a;var r = e === t ? "on" : "with";throw new Error("diff() called " + r + " non-document");
        }).join("");
      }),
          i = new s(),
          u = r(n[0], n[1], e),
          c = l.iterator(this.ops),
          f = l.iterator(t.ops);return u.forEach(function (t) {
        for (var e = t[1].length; e > 0;) {
          var n = 0;switch (t[0]) {case r.INSERT:
              n = Math.min(f.peekLength(), e), i.push(f.next(n));break;case r.DELETE:
              n = Math.min(e, c.peekLength()), c.next(n), i.delete(n);break;case r.EQUAL:
              n = Math.min(c.peekLength(), f.peekLength(), e);var a = c.next(n),
                  s = f.next(n);o(a.insert, s.insert) ? i.retain(n, l.attributes.diff(a.attributes, s.attributes)) : i.push(s).delete(n);}e -= n;
        }
      }), i.chop();
    }, s.prototype.eachLine = function (t, e) {
      e = e || "\n";for (var n = l.iterator(this.ops), r = new s(), o = 0; n.hasNext();) {
        if ("insert" !== n.peekType()) return;var i = n.peek(),
            a = l.length(i) - n.peekLength(),
            u = "string" == typeof i.insert ? i.insert.indexOf(e, a) - a : -1;if (u < 0) r.push(n.next());else if (u > 0) r.push(n.next(u));else {
          if (!1 === t(r, n.next(1).attributes || {}, o)) return;o += 1, r = new s();
        }
      }r.length() > 0 && t(r, {}, o);
    }, s.prototype.transform = function (t, e) {
      if (e = !!e, "number" == typeof t) return this.transformPosition(t, e);for (var n = l.iterator(this.ops), r = l.iterator(t.ops), o = new s(); n.hasNext() || r.hasNext();) {
        if ("insert" !== n.peekType() || !e && "insert" === r.peekType()) {
          if ("insert" === r.peekType()) o.push(r.next());else {
            var i = Math.min(n.peekLength(), r.peekLength()),
                a = n.next(i),
                u = r.next(i);if (a.delete) continue;u.delete ? o.push(u) : o.retain(i, l.attributes.transform(a.attributes, u.attributes, e));
          }
        } else o.retain(l.length(n.next()));
      }return o.chop();
    }, s.prototype.transformPosition = function (t, e) {
      e = !!e;for (var n = l.iterator(this.ops), r = 0; n.hasNext() && r <= t;) {
        var o = n.peekLength(),
            i = n.peekType();n.next(), "delete" !== i ? ("insert" === i && (r < t || !e) && (t += o), r += o) : t -= Math.min(o, t - r);
      }return t;
    }, t.exports = s;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var a = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        s = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        u = n(8),
        c = r(u),
        f = n(0),
        h = r(f),
        p = function (t) {
      function e() {
        return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return l(e, t), a(e, [{ key: "formatAt", value: function value(t, n, r, o) {
          if (e.compare(this.statics.blotName, r) < 0 && h.default.query(r, h.default.Scope.BLOT)) {
            var i = this.isolate(t, n);o && i.wrap(r, o);
          } else s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, o);
        } }, { key: "optimize", value: function value(t) {
          if (s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.parent instanceof e && e.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
            var n = this.parent.isolate(this.offset(), this.length());this.moveChildren(n), n.wrap(this);
          }
        } }], [{ key: "compare", value: function value(t, n) {
          var r = e.order.indexOf(t),
              o = e.order.indexOf(n);return r >= 0 || o >= 0 ? r - o : t === n ? 0 : t < n ? -1 : 1;
        } }]), e;
    }(h.default.Inline);p.allowedChildren = [p, h.default.Embed, c.default], p.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], e.default = p;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    }function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function l(t, e) {
      if (e = (0, N.default)(!0, { container: t, modules: { clipboard: !0, keyboard: !0, history: !0 } }, e), e.theme && e.theme !== S.DEFAULTS.theme) {
        if (e.theme = S.import("themes/" + e.theme), null == e.theme) throw new Error("Invalid theme " + e.theme + ". Did you register it?");
      } else e.theme = T.default;var n = (0, N.default)(!0, {}, e.theme.DEFAULTS);[n, e].forEach(function (t) {
        t.modules = t.modules || {}, Object.keys(t.modules).forEach(function (e) {
          !0 === t.modules[e] && (t.modules[e] = {});
        });
      });var r = Object.keys(n.modules).concat(Object.keys(e.modules)),
          o = r.reduce(function (t, e) {
        var n = S.import("modules/" + e);return null == n ? P.error("Cannot load " + e + " module. Are you sure you registered it?") : t[e] = n.DEFAULTS || {}, t;
      }, {});return null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = { container: e.modules.toolbar }), e = (0, N.default)(!0, {}, S.DEFAULTS, { modules: o }, n, e), ["bounds", "container", "scrollingContainer"].forEach(function (t) {
        "string" == typeof e[t] && (e[t] = document.querySelector(e[t]));
      }), e.modules = Object.keys(e.modules).reduce(function (t, n) {
        return e.modules[n] && (t[n] = e.modules[n]), t;
      }, {}), e;
    }function a(t, e, n, r) {
      if (this.options.strict && !this.isEnabled() && e === g.default.sources.USER) return new d.default();var o = null == n ? null : this.getSelection(),
          i = this.editor.delta,
          l = t();if (null != o && (!0 === n && (n = o.index), null == r ? o = u(o, l, e) : 0 !== r && (o = u(o, n, r, e)), this.setSelection(o, g.default.sources.SILENT)), l.length() > 0) {
        var a,
            s = [g.default.events.TEXT_CHANGE, l, i, e];if ((a = this.emitter).emit.apply(a, [g.default.events.EDITOR_CHANGE].concat(s)), e !== g.default.sources.SILENT) {
          var c;(c = this.emitter).emit.apply(c, s);
        }
      }return l;
    }function s(t, e, n, r, o) {
      var i = {};return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (o = r, r = n, n = e, e = t.length, t = t.index) : (e = t.length, t = t.index) : "number" != typeof e && (o = r, r = n, n = e, e = 0), "object" === (void 0 === n ? "undefined" : c(n)) ? (i = n, o = r) : "string" == typeof n && (null != r ? i[n] = r : o = n), o = o || g.default.sources.API, [t, e, i, o];
    }function u(t, e, n, r) {
      if (null == t) return null;var o = void 0,
          i = void 0;if (e instanceof d.default) {
        var l = [t.index, t.index + t.length].map(function (t) {
          return e.transformPosition(t, r !== g.default.sources.USER);
        }),
            a = f(l, 2);o = a[0], i = a[1];
      } else {
        var s = [t.index, t.index + t.length].map(function (t) {
          return t < e || t === e && r === g.default.sources.USER ? t : n >= 0 ? t + n : Math.max(e, t + n);
        }),
            u = f(s, 2);o = u[0], i = u[1];
      }return new x.Range(o, i - o);
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.overload = e.expandConfig = void 0;var c = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        f = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;try {
          for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          o = !0, i = t;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        h = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();n(53);var p = n(4),
        d = r(p),
        y = n(57),
        v = r(y),
        b = n(9),
        g = r(b),
        m = n(7),
        _ = r(m),
        O = n(0),
        w = r(O),
        x = n(22),
        k = r(x),
        E = n(2),
        N = r(E),
        j = n(10),
        A = r(j),
        q = n(32),
        T = r(q),
        P = (0, A.default)("quill"),
        S = function () {
      function t(e) {
        var n = this,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};if (i(this, t), this.options = l(e, r), this.container = this.options.container, null == this.container) return P.error("Invalid Quill container", e);this.options.debug && t.debug(this.options.debug);var o = this.container.innerHTML.trim();this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new g.default(), this.scroll = w.default.create(this.root, { emitter: this.emitter, whitelist: this.options.formats }), this.editor = new v.default(this.scroll), this.selection = new k.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(g.default.events.EDITOR_CHANGE, function (t) {
          t === g.default.events.TEXT_CHANGE && n.root.classList.toggle("ql-blank", n.editor.isBlank());
        }), this.emitter.on(g.default.events.SCROLL_UPDATE, function (t, e) {
          var r = n.selection.lastRange,
              o = r && 0 === r.length ? r.index : void 0;a.call(n, function () {
            return n.editor.update(null, e, o);
          }, t);
        });var s = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + o + "<p><br></p></div>");this.setContents(s), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
      }return h(t, null, [{ key: "debug", value: function value(t) {
          !0 === t && (t = "log"), A.default.level(t);
        } }, { key: "find", value: function value(t) {
          return t.__quill || w.default.find(t);
        } }, { key: "import", value: function value(t) {
          return null == this.imports[t] && P.error("Cannot import " + t + ". Are you sure it was registered?"), this.imports[t];
        } }, { key: "register", value: function value(t, e) {
          var n = this,
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];if ("string" != typeof t) {
            var o = t.attrName || t.blotName;"string" == typeof o ? this.register("formats/" + o, t, e) : Object.keys(t).forEach(function (r) {
              n.register(r, t[r], e);
            });
          } else null == this.imports[t] || r || P.warn("Overwriting " + t + " with", e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName ? w.default.register(e) : t.startsWith("modules") && "function" == typeof e.register && e.register();
        } }]), h(t, [{ key: "addContainer", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;if ("string" == typeof t) {
            var n = t;t = document.createElement("div"), t.classList.add(n);
          }return this.container.insertBefore(t, e), t;
        } }, { key: "blur", value: function value() {
          this.selection.setRange(null);
        } }, { key: "deleteText", value: function value(t, e, n) {
          var r = this,
              o = s(t, e, n),
              i = f(o, 4);return t = i[0], e = i[1], n = i[3], a.call(this, function () {
            return r.editor.deleteText(t, e);
          }, n, t, -1 * e);
        } }, { key: "disable", value: function value() {
          this.enable(!1);
        } }, { key: "enable", value: function value() {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t);
        } }, { key: "focus", value: function value() {
          var t = this.scrollingContainer.scrollTop;this.selection.focus(), this.scrollingContainer.scrollTop = t, this.scrollIntoView();
        } }, { key: "format", value: function value(t, e) {
          var n = this,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.default.sources.API;return a.call(this, function () {
            var r = n.getSelection(!0),
                i = new d.default();if (null == r) return i;if (w.default.query(t, w.default.Scope.BLOCK)) i = n.editor.formatLine(r.index, r.length, o({}, t, e));else {
              if (0 === r.length) return n.selection.format(t, e), i;i = n.editor.formatText(r.index, r.length, o({}, t, e));
            }return n.setSelection(r, g.default.sources.SILENT), i;
          }, r);
        } }, { key: "formatLine", value: function value(t, e, n, r, o) {
          var i = this,
              l = void 0,
              u = s(t, e, n, r, o),
              c = f(u, 4);return t = c[0], e = c[1], l = c[2], o = c[3], a.call(this, function () {
            return i.editor.formatLine(t, e, l);
          }, o, t, 0);
        } }, { key: "formatText", value: function value(t, e, n, r, o) {
          var i = this,
              l = void 0,
              u = s(t, e, n, r, o),
              c = f(u, 4);return t = c[0], e = c[1], l = c[2], o = c[3], a.call(this, function () {
            return i.editor.formatText(t, e, l);
          }, o, t, 0);
        } }, { key: "getBounds", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = void 0;n = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length);var r = this.container.getBoundingClientRect();return { bottom: n.bottom - r.top, height: n.height, left: n.left - r.left, right: n.right - r.left, top: n.top - r.top, width: n.width };
        } }, { key: "getContents", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
              n = s(t, e),
              r = f(n, 2);return t = r[0], e = r[1], this.editor.getContents(t, e);
        } }, { key: "getFormat", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0),
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length);
        } }, { key: "getIndex", value: function value(t) {
          return t.offset(this.scroll);
        } }, { key: "getLength", value: function value() {
          return this.scroll.length();
        } }, { key: "getLeaf", value: function value(t) {
          return this.scroll.leaf(t);
        } }, { key: "getLine", value: function value(t) {
          return this.scroll.line(t);
        } }, { key: "getLines", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e);
        } }, { key: "getModule", value: function value(t) {
          return this.theme.modules[t];
        } }, { key: "getSelection", value: function value() {
          return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0];
        } }, { key: "getText", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
              n = s(t, e),
              r = f(n, 2);return t = r[0], e = r[1], this.editor.getText(t, e);
        } }, { key: "hasFocus", value: function value() {
          return this.selection.hasFocus();
        } }, { key: "insertEmbed", value: function value(e, n, r) {
          var o = this,
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.sources.API;return a.call(this, function () {
            return o.editor.insertEmbed(e, n, r);
          }, i, e);
        } }, { key: "insertText", value: function value(t, e, n, r, o) {
          var i = this,
              l = void 0,
              u = s(t, 0, n, r, o),
              c = f(u, 4);return t = c[0], l = c[2], o = c[3], a.call(this, function () {
            return i.editor.insertText(t, e, l);
          }, o, t, e.length);
        } }, { key: "isEnabled", value: function value() {
          return !this.container.classList.contains("ql-disabled");
        } }, { key: "off", value: function value() {
          return this.emitter.off.apply(this.emitter, arguments);
        } }, { key: "on", value: function value() {
          return this.emitter.on.apply(this.emitter, arguments);
        } }, { key: "once", value: function value() {
          return this.emitter.once.apply(this.emitter, arguments);
        } }, { key: "pasteHTML", value: function value(t, e, n) {
          this.clipboard.dangerouslyPasteHTML(t, e, n);
        } }, { key: "removeFormat", value: function value(t, e, n) {
          var r = this,
              o = s(t, e, n),
              i = f(o, 4);return t = i[0], e = i[1], n = i[3], a.call(this, function () {
            return r.editor.removeFormat(t, e);
          }, n, t);
        } }, { key: "scrollIntoView", value: function value() {
          this.selection.scrollIntoView(this.scrollingContainer);
        } }, { key: "setContents", value: function value(t) {
          var e = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API;return a.call(this, function () {
            t = new d.default(t);var n = e.getLength(),
                r = e.editor.deleteText(0, n),
                o = e.editor.applyDelta(t),
                i = o.ops[o.ops.length - 1];return null != i && "string" == typeof i.insert && "\n" === i.insert[i.insert.length - 1] && (e.editor.deleteText(e.getLength() - 1, 1), o.delete(1)), r.compose(o);
          }, n);
        } }, { key: "setSelection", value: function value(e, n, r) {
          if (null == e) this.selection.setRange(null, n || t.sources.API);else {
            var o = s(e, n, r),
                i = f(o, 4);e = i[0], n = i[1], r = i[3], this.selection.setRange(new x.Range(e, n), r), r !== g.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
          }
        } }, { key: "setText", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API,
              n = new d.default().insert(t);return this.setContents(n, e);
        } }, { key: "update", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.default.sources.USER,
              e = this.scroll.update(t);return this.selection.update(t), e;
        } }, { key: "updateContents", value: function value(t) {
          var e = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API;return a.call(this, function () {
            return t = new d.default(t), e.editor.applyDelta(t, n);
          }, n, !0);
        } }]), t;
    }();S.DEFAULTS = { bounds: null, formats: null, modules: {}, placeholder: "", readOnly: !1, scrollingContainer: null, strict: !0, theme: "default" }, S.events = g.default.events, S.sources = g.default.sources, S.version = "1.3.6", S.imports = { delta: d.default, parchment: w.default, "core/module": _.default, "core/theme": T.default }, e.expandConfig = l, e.overload = s, e.default = S;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = function t(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};r(this, t), this.quill = e, this.options = n;
    };o.DEFAULTS = {}, e.default = o;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = n(0),
        a = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(l),
        s = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), e;
    }(a.default.Text);e.default = s;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var a = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        s = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        u = n(58),
        c = r(u),
        f = n(10),
        h = r(f),
        p = (0, h.default)("quill:events");["selectionchange", "mousedown", "mouseup", "click"].forEach(function (t) {
      document.addEventListener(t, function () {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
          e[n] = arguments[n];
        }[].slice.call(document.querySelectorAll(".ql-container")).forEach(function (t) {
          if (t.__quill && t.__quill.emitter) {
            var n;(n = t.__quill.emitter).handleDOM.apply(n, e);
          }
        });
      });
    });var d = function (t) {
      function e() {
        o(this, e);var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));return t.listeners = {}, t.on("error", p.error), t;
      }return l(e, t), a(e, [{ key: "emit", value: function value() {
          p.log.apply(p, arguments), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).apply(this, arguments);
        } }, { key: "handleDOM", value: function value(t) {
          for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {
            n[r - 1] = arguments[r];
          }(this.listeners[t.type] || []).forEach(function (e) {
            var r = e.node,
                o = e.handler;(t.target === r || r.contains(t.target)) && o.apply(void 0, [t].concat(n));
          });
        } }, { key: "listenDOM", value: function value(t, e, n) {
          this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({ node: e, handler: n });
        } }]), e;
    }(c.default);d.events = { EDITOR_CHANGE: "editor-change", SCROLL_BEFORE_UPDATE: "scroll-before-update", SCROLL_OPTIMIZE: "scroll-optimize", SCROLL_UPDATE: "scroll-update", SELECTION_CHANGE: "selection-change", TEXT_CHANGE: "text-change" }, d.sources = { API: "api", SILENT: "silent", USER: "user" }, e.default = d;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      if (i.indexOf(t) <= i.indexOf(l)) {
        for (var e, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) {
          r[o - 1] = arguments[o];
        }(e = console)[t].apply(e, r);
      }
    }function o(t) {
      return i.reduce(function (e, n) {
        return e[n] = r.bind(console, n, t), e;
      }, {});
    }Object.defineProperty(e, "__esModule", { value: !0 });var i = ["error", "warn", "log", "info"],
        l = "warn";r.level = o.level = function (t) {
      l = t;
    }, e.default = o;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(1),
        o = function () {
      function t(t, e, n) {
        void 0 === n && (n = {}), this.attrName = t, this.keyName = e;var o = r.Scope.TYPE & r.Scope.ATTRIBUTE;null != n.scope ? this.scope = n.scope & r.Scope.LEVEL | o : this.scope = r.Scope.ATTRIBUTE, null != n.whitelist && (this.whitelist = n.whitelist);
      }return t.keys = function (t) {
        return [].map.call(t.attributes, function (t) {
          return t.name;
        });
      }, t.prototype.add = function (t, e) {
        return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0);
      }, t.prototype.canAdd = function (t, e) {
        return null != r.query(t, r.Scope.BLOT & (this.scope | r.Scope.TYPE)) && (null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1));
      }, t.prototype.remove = function (t) {
        t.removeAttribute(this.keyName);
      }, t.prototype.value = function (t) {
        var e = t.getAttribute(this.keyName);return this.canAdd(t, e) && e ? e : "";
      }, t;
    }();e.default = o;
  }, function (t, e, n) {
    function r(t) {
      return null === t || void 0 === t;
    }function o(t) {
      return !(!t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) || "number" != typeof t.length) && "function" == typeof t.copy && "function" == typeof t.slice && !(t.length > 0 && "number" != typeof t[0]);
    }function i(t, e, n) {
      var i, c;if (r(t) || r(e)) return !1;if (t.prototype !== e.prototype) return !1;if (s(t)) return !!s(e) && (t = l.call(t), e = l.call(e), u(t, e, n));if (o(t)) {
        if (!o(e)) return !1;if (t.length !== e.length) return !1;for (i = 0; i < t.length; i++) {
          if (t[i] !== e[i]) return !1;
        }return !0;
      }try {
        var f = a(t),
            h = a(e);
      } catch (t) {
        return !1;
      }if (f.length != h.length) return !1;for (f.sort(), h.sort(), i = f.length - 1; i >= 0; i--) {
        if (f[i] != h[i]) return !1;
      }for (i = f.length - 1; i >= 0; i--) {
        if (c = f[i], !u(t[c], e[c], n)) return !1;
      }return (typeof t === "undefined" ? "undefined" : _typeof(t)) == (typeof e === "undefined" ? "undefined" : _typeof(e));
    }var l = Array.prototype.slice,
        a = n(55),
        s = n(56),
        u = t.exports = function (t, e, n) {
      return n || (n = {}), t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) ? n.strict ? t === e : t == e : i(t, e, n));
    };
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.Code = void 0;var a = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;try {
          for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          o = !0, i = t;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        s = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        u = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        c = n(4),
        f = r(c),
        h = n(0),
        p = r(h),
        d = n(3),
        y = r(d),
        v = n(5),
        b = r(v),
        g = n(8),
        m = r(g),
        _ = function (t) {
      function e() {
        return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return l(e, t), e;
    }(b.default);_.blotName = "code", _.tagName = "CODE";var O = function (t) {
      function e() {
        return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return l(e, t), s(e, [{ key: "delta", value: function value() {
          var t = this,
              e = this.domNode.textContent;return e.endsWith("\n") && (e = e.slice(0, -1)), e.split("\n").reduce(function (e, n) {
            return e.insert(n).insert("\n", t.formats());
          }, new f.default());
        } }, { key: "format", value: function value(t, n) {
          if (t !== this.statics.blotName || !n) {
            var r = this.descendant(m.default, this.length() - 1),
                o = a(r, 1),
                i = o[0];null != i && i.deleteAt(i.length() - 1, 1), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
          }
        } }, { key: "formatAt", value: function value(t, n, r, o) {
          if (0 !== n && null != p.default.query(r, p.default.Scope.BLOCK) && (r !== this.statics.blotName || o !== this.statics.formats(this.domNode))) {
            var i = this.newlineIndex(t);if (!(i < 0 || i >= t + n)) {
              var l = this.newlineIndex(t, !0) + 1,
                  a = i - l + 1,
                  s = this.isolate(l, a),
                  u = s.next;s.format(r, o), u instanceof e && u.formatAt(0, t - l + n - a, r, o);
            }
          }
        } }, { key: "insertAt", value: function value(t, e, n) {
          if (null == n) {
            var r = this.descendant(m.default, t),
                o = a(r, 2),
                i = o[0],
                l = o[1];i.insertAt(l, e);
          }
        } }, { key: "length", value: function value() {
          var t = this.domNode.textContent.length;return this.domNode.textContent.endsWith("\n") ? t : t + 1;
        } }, { key: "newlineIndex", value: function value(t) {
          if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return this.domNode.textContent.slice(0, t).lastIndexOf("\n");var e = this.domNode.textContent.slice(t).indexOf("\n");return e > -1 ? t + e : -1;
        } }, { key: "optimize", value: function value(t) {
          this.domNode.textContent.endsWith("\n") || this.appendChild(p.default.create("text", "\n")), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);var n = this.next;null != n && n.prev === this && n.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === n.statics.formats(n.domNode) && (n.optimize(t), n.moveChildren(this), n.remove());
        } }, { key: "replace", value: function value(t) {
          u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function (t) {
            var e = p.default.find(t);null == e ? t.parentNode.removeChild(t) : e instanceof p.default.Embed ? e.remove() : e.unwrap();
          });
        } }], [{ key: "create", value: function value(t) {
          var n = u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);return n.setAttribute("spellcheck", !1), n;
        } }, { key: "formats", value: function value() {
          return !0;
        } }]), e;
    }(y.default);O.blotName = "code-block", O.tagName = "PRE", O.TAB = "  ", e.Code = _, e.default = O;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        a = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        s = n(0),
        u = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(s),
        c = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), l(e, [{ key: "insertInto", value: function value(t, n) {
          0 === t.children.length ? a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertInto", this).call(this, t, n) : this.remove();
        } }, { key: "length", value: function value() {
          return 0;
        } }, { key: "value", value: function value() {
          return "";
        } }], [{ key: "value", value: function value() {} }]), e;
    }(u.default.Embed);c.blotName = "break", c.tagName = "BR", e.default = c;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }function l(t, e) {
      var n = document.createElement("a");n.href = t;var r = n.href.slice(0, n.href.indexOf(":"));return e.indexOf(r) > -1;
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.sanitize = e.default = void 0;var a = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        s = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        u = n(5),
        c = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(u),
        f = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), a(e, [{ key: "format", value: function value(t, n) {
          if (t !== this.statics.blotName || !n) return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);n = this.constructor.sanitize(n), this.domNode.setAttribute("href", n);
        } }], [{ key: "create", value: function value(t) {
          var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);return t = this.sanitize(t), n.setAttribute("href", t), n.setAttribute("target", "_blank"), n;
        } }, { key: "formats", value: function value(t) {
          return t.getAttribute("href");
        } }, { key: "sanitize", value: function value(t) {
          return l(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
        } }]), e;
    }(c.default);f.blotName = "link", f.tagName = "A", f.SANITIZED_URL = "about:blank", f.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"], e.default = f, e.sanitize = l;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      t.setAttribute(e, !("true" === t.getAttribute(e)));
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        a = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        s = n(25),
        u = r(s),
        c = n(106),
        f = r(c),
        h = 0,
        p = function () {
      function t(e) {
        var n = this;o(this, t), this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function () {
          n.togglePicker();
        }), this.label.addEventListener("keydown", function (t) {
          switch (t.keyCode) {case u.default.keys.ENTER:
              n.togglePicker();break;case u.default.keys.ESCAPE:
              n.escape(), t.preventDefault();}
        }), this.select.addEventListener("change", this.update.bind(this));
      }return a(t, [{ key: "togglePicker", value: function value() {
          this.container.classList.toggle("ql-expanded"), i(this.label, "aria-expanded"), i(this.options, "aria-hidden");
        } }, { key: "buildItem", value: function value(t) {
          var e = this,
              n = document.createElement("span");return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), t.hasAttribute("value") && n.setAttribute("data-value", t.getAttribute("value")), t.textContent && n.setAttribute("data-label", t.textContent), n.addEventListener("click", function () {
            e.selectItem(n, !0);
          }), n.addEventListener("keydown", function (t) {
            switch (t.keyCode) {case u.default.keys.ENTER:
                e.selectItem(n, !0), t.preventDefault();break;case u.default.keys.ESCAPE:
                e.escape(), t.preventDefault();}
          }), n;
        } }, { key: "buildLabel", value: function value() {
          var t = document.createElement("span");return t.classList.add("ql-picker-label"), t.innerHTML = f.default, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t;
        } }, { key: "buildOptions", value: function value() {
          var t = this,
              e = document.createElement("span");e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e.id = "ql-picker-options-" + h, h += 1, this.label.setAttribute("aria-controls", e.id), this.options = e, [].slice.call(this.select.options).forEach(function (n) {
            var r = t.buildItem(n);e.appendChild(r), !0 === n.selected && t.selectItem(r);
          }), this.container.appendChild(e);
        } }, { key: "buildPicker", value: function value() {
          var t = this;[].slice.call(this.select.attributes).forEach(function (e) {
            t.container.setAttribute(e.name, e.value);
          }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
        } }, { key: "escape", value: function value() {
          var t = this;this.close(), setTimeout(function () {
            return t.label.focus();
          }, 1);
        } }, { key: "close", value: function value() {
          this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
        } }, { key: "selectItem", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = this.container.querySelector(".ql-selected");if (t !== n && (null != n && n.classList.remove("ql-selected"), null != t && (t.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(t.parentNode.children, t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e))) {
            if ("function" == typeof Event) this.select.dispatchEvent(new Event("change"));else if ("object" === ("undefined" == typeof Event ? "undefined" : l(Event))) {
              var r = document.createEvent("Event");r.initEvent("change", !0, !0), this.select.dispatchEvent(r);
            }this.close();
          }
        } }, { key: "update", value: function value() {
          var t = void 0;if (this.select.selectedIndex > -1) {
            var e = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];t = this.select.options[this.select.selectedIndex], this.selectItem(e);
          } else this.selectItem(null);var n = null != t && t !== this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active", n);
        } }]), t;
    }();e.default = p;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      var e = a.find(t);if (null == e) try {
        e = a.create(t);
      } catch (n) {
        e = a.create(a.Scope.INLINE), [].slice.call(t.childNodes).forEach(function (t) {
          e.domNode.appendChild(t);
        }), t.parentNode && t.parentNode.replaceChild(e.domNode, t), e.attach();
      }return e;
    }var o = this && this.__extends || function () {
      var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      };return function (e, n) {
        function r() {
          this.constructor = e;
        }t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      };
    }();Object.defineProperty(e, "__esModule", { value: !0 });var i = n(47),
        l = n(27),
        a = n(1),
        s = function (t) {
      function e(e) {
        var n = t.call(this, e) || this;return n.build(), n;
      }return o(e, t), e.prototype.appendChild = function (t) {
        this.insertBefore(t);
      }, e.prototype.attach = function () {
        t.prototype.attach.call(this), this.children.forEach(function (t) {
          t.attach();
        });
      }, e.prototype.build = function () {
        var t = this;this.children = new i.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function (e) {
          try {
            var n = r(e);t.insertBefore(n, t.children.head || void 0);
          } catch (t) {
            if (t instanceof a.ParchmentError) return;throw t;
          }
        });
      }, e.prototype.deleteAt = function (t, e) {
        if (0 === t && e === this.length()) return this.remove();this.children.forEachAt(t, e, function (t, e, n) {
          t.deleteAt(e, n);
        });
      }, e.prototype.descendant = function (t, n) {
        var r = this.children.find(n),
            o = r[0],
            i = r[1];return null == t.blotName && t(o) || null != t.blotName && o instanceof t ? [o, i] : o instanceof e ? o.descendant(t, i) : [null, -1];
      }, e.prototype.descendants = function (t, n, r) {
        void 0 === n && (n = 0), void 0 === r && (r = Number.MAX_VALUE);var o = [],
            i = r;return this.children.forEachAt(n, r, function (n, r, l) {
          (null == t.blotName && t(n) || null != t.blotName && n instanceof t) && o.push(n), n instanceof e && (o = o.concat(n.descendants(t, r, i))), i -= l;
        }), o;
      }, e.prototype.detach = function () {
        this.children.forEach(function (t) {
          t.detach();
        }), t.prototype.detach.call(this);
      }, e.prototype.formatAt = function (t, e, n, r) {
        this.children.forEachAt(t, e, function (t, e, o) {
          t.formatAt(e, o, n, r);
        });
      }, e.prototype.insertAt = function (t, e, n) {
        var r = this.children.find(t),
            o = r[0],
            i = r[1];if (o) o.insertAt(i, e, n);else {
          var l = null == n ? a.create("text", e) : a.create(e, n);this.appendChild(l);
        }
      }, e.prototype.insertBefore = function (t, e) {
        if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function (e) {
          return t instanceof e;
        })) throw new a.ParchmentError("Cannot insert " + t.statics.blotName + " into " + this.statics.blotName);t.insertInto(this, e);
      }, e.prototype.length = function () {
        return this.children.reduce(function (t, e) {
          return t + e.length();
        }, 0);
      }, e.prototype.moveChildren = function (t, e) {
        this.children.forEach(function (n) {
          t.insertBefore(n, e);
        });
      }, e.prototype.optimize = function (e) {
        if (t.prototype.optimize.call(this, e), 0 === this.children.length) if (null != this.statics.defaultChild) {
          var n = a.create(this.statics.defaultChild);this.appendChild(n), n.optimize(e);
        } else this.remove();
      }, e.prototype.path = function (t, n) {
        void 0 === n && (n = !1);var r = this.children.find(t, n),
            o = r[0],
            i = r[1],
            l = [[this, t]];return o instanceof e ? l.concat(o.path(i, n)) : (null != o && l.push([o, i]), l);
      }, e.prototype.removeChild = function (t) {
        this.children.remove(t);
      }, e.prototype.replace = function (n) {
        n instanceof e && n.moveChildren(this), t.prototype.replace.call(this, n);
      }, e.prototype.split = function (t, e) {
        if (void 0 === e && (e = !1), !e) {
          if (0 === t) return this;if (t === this.length()) return this.next;
        }var n = this.clone();return this.parent.insertBefore(n, this.next), this.children.forEachAt(t, this.length(), function (t, r, o) {
          t = t.split(r, e), n.appendChild(t);
        }), n;
      }, e.prototype.unwrap = function () {
        this.moveChildren(this.parent, this.next), this.remove();
      }, e.prototype.update = function (t, e) {
        var n = this,
            o = [],
            i = [];t.forEach(function (t) {
          t.target === n.domNode && "childList" === t.type && (o.push.apply(o, t.addedNodes), i.push.apply(i, t.removedNodes));
        }), i.forEach(function (t) {
          if (!(null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
            var e = a.find(t);null != e && (null != e.domNode.parentNode && e.domNode.parentNode !== n.domNode || e.detach());
          }
        }), o.filter(function (t) {
          return t.parentNode == n.domNode;
        }).sort(function (t, e) {
          return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
        }).forEach(function (t) {
          var e = null;null != t.nextSibling && (e = a.find(t.nextSibling));var o = r(t);o.next == e && null != o.next || (null != o.parent && o.parent.removeChild(n), n.insertBefore(o, e || void 0));
        });
      }, e;
    }(l.default);e.default = s;
  }, function (t, e, n) {
    "use strict";
    var r = this && this.__extends || function () {
      var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      };return function (e, n) {
        function r() {
          this.constructor = e;
        }t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      };
    }();Object.defineProperty(e, "__esModule", { value: !0 });var o = n(11),
        i = n(28),
        l = n(17),
        a = n(1),
        s = function (t) {
      function e(e) {
        var n = t.call(this, e) || this;return n.attributes = new i.default(n.domNode), n;
      }return r(e, t), e.formats = function (t) {
        return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0);
      }, e.prototype.format = function (t, e) {
        var n = a.query(t);n instanceof o.default ? this.attributes.attribute(n, e) : e && (null == n || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e));
      }, e.prototype.formats = function () {
        var t = this.attributes.values(),
            e = this.statics.formats(this.domNode);return null != e && (t[this.statics.blotName] = e), t;
      }, e.prototype.replaceWith = function (e, n) {
        var r = t.prototype.replaceWith.call(this, e, n);return this.attributes.copy(r), r;
      }, e.prototype.update = function (e, n) {
        var r = this;t.prototype.update.call(this, e, n), e.some(function (t) {
          return t.target === r.domNode && "attributes" === t.type;
        }) && this.attributes.build();
      }, e.prototype.wrap = function (n, r) {
        var o = t.prototype.wrap.call(this, n, r);return o instanceof e && o.statics.scope === this.statics.scope && this.attributes.move(o), o;
      }, e;
    }(l.default);e.default = s;
  }, function (t, e, n) {
    "use strict";
    var r = this && this.__extends || function () {
      var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      };return function (e, n) {
        function r() {
          this.constructor = e;
        }t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      };
    }();Object.defineProperty(e, "__esModule", { value: !0 });var o = n(27),
        i = n(1),
        l = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return r(e, t), e.value = function (t) {
        return !0;
      }, e.prototype.index = function (t, e) {
        return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1;
      }, e.prototype.position = function (t, e) {
        var n = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);return t > 0 && (n += 1), [this.parent.domNode, n];
      }, e.prototype.value = function () {
        return t = {}, t[this.statics.blotName] = this.statics.value(this.domNode) || !0, t;var t;
      }, e.scope = i.Scope.INLINE_BLOT, e;
    }(o.default);e.default = l;
  }, function (t, e, n) {
    function r(t) {
      this.ops = t, this.index = 0, this.offset = 0;
    }var o = n(12),
        i = n(2),
        l = { attributes: { compose: function compose(t, e, n) {
          "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && (t = {}), "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e = {});var r = i(!0, {}, e);n || (r = Object.keys(r).reduce(function (t, e) {
            return null != r[e] && (t[e] = r[e]), t;
          }, {}));for (var o in t) {
            void 0 !== t[o] && void 0 === e[o] && (r[o] = t[o]);
          }return Object.keys(r).length > 0 ? r : void 0;
        }, diff: function diff(t, e) {
          "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && (t = {}), "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e = {});var n = Object.keys(t).concat(Object.keys(e)).reduce(function (n, r) {
            return o(t[r], e[r]) || (n[r] = void 0 === e[r] ? null : e[r]), n;
          }, {});return Object.keys(n).length > 0 ? n : void 0;
        }, transform: function transform(t, e, n) {
          if ("object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return e;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
            if (!n) return e;var r = Object.keys(e).reduce(function (n, r) {
              return void 0 === t[r] && (n[r] = e[r]), n;
            }, {});return Object.keys(r).length > 0 ? r : void 0;
          }
        } }, iterator: function iterator(t) {
        return new r(t);
      }, length: function length(t) {
        return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1;
      } };r.prototype.hasNext = function () {
      return this.peekLength() < 1 / 0;
    }, r.prototype.next = function (t) {
      t || (t = 1 / 0);var e = this.ops[this.index];if (e) {
        var n = this.offset,
            r = l.length(e);if (t >= r - n ? (t = r - n, this.index += 1, this.offset = 0) : this.offset += t, "number" == typeof e.delete) return { delete: t };var o = {};return e.attributes && (o.attributes = e.attributes), "number" == typeof e.retain ? o.retain = t : "string" == typeof e.insert ? o.insert = e.insert.substr(n, t) : o.insert = e.insert, o;
      }return { retain: 1 / 0 };
    }, r.prototype.peek = function () {
      return this.ops[this.index];
    }, r.prototype.peekLength = function () {
      return this.ops[this.index] ? l.length(this.ops[this.index]) - this.offset : 1 / 0;
    }, r.prototype.peekType = function () {
      return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain";
    }, t.exports = l;
  }, function (t, e) {
    var n = function () {
      "use strict";
      function t(t, e) {
        return null != e && t instanceof e;
      }function e(n, r, o, i, c) {
        function f(n, o) {
          if (null === n) return null;if (0 === o) return n;var y, v;if ("object" != (typeof n === "undefined" ? "undefined" : _typeof(n))) return n;if (t(n, a)) y = new a();else if (t(n, s)) y = new s();else if (t(n, u)) y = new u(function (t, e) {
            n.then(function (e) {
              t(f(e, o - 1));
            }, function (t) {
              e(f(t, o - 1));
            });
          });else if (e.__isArray(n)) y = [];else if (e.__isRegExp(n)) y = new RegExp(n.source, l(n)), n.lastIndex && (y.lastIndex = n.lastIndex);else if (e.__isDate(n)) y = new Date(n.getTime());else {
            if (d && Buffer.isBuffer(n)) return y = new Buffer(n.length), n.copy(y), y;t(n, Error) ? y = Object.create(n) : void 0 === i ? (v = Object.getPrototypeOf(n), y = Object.create(v)) : (y = Object.create(i), v = i);
          }if (r) {
            var b = h.indexOf(n);if (-1 != b) return p[b];h.push(n), p.push(y);
          }t(n, a) && n.forEach(function (t, e) {
            var n = f(e, o - 1),
                r = f(t, o - 1);y.set(n, r);
          }), t(n, s) && n.forEach(function (t) {
            var e = f(t, o - 1);y.add(e);
          });for (var g in n) {
            var m;v && (m = Object.getOwnPropertyDescriptor(v, g)), m && null == m.set || (y[g] = f(n[g], o - 1));
          }if (Object.getOwnPropertySymbols) for (var _ = Object.getOwnPropertySymbols(n), g = 0; g < _.length; g++) {
            var O = _[g],
                w = Object.getOwnPropertyDescriptor(n, O);(!w || w.enumerable || c) && (y[O] = f(n[O], o - 1), w.enumerable || Object.defineProperty(y, O, { enumerable: !1 }));
          }if (c) for (var x = Object.getOwnPropertyNames(n), g = 0; g < x.length; g++) {
            var k = x[g],
                w = Object.getOwnPropertyDescriptor(n, k);w && w.enumerable || (y[k] = f(n[k], o - 1), Object.defineProperty(y, k, { enumerable: !1 }));
          }return y;
        }"object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && (o = r.depth, i = r.prototype, c = r.includeNonEnumerable, r = r.circular);var h = [],
            p = [],
            d = "undefined" != typeof Buffer;return void 0 === r && (r = !0), void 0 === o && (o = 1 / 0), f(n, o);
      }function n(t) {
        return Object.prototype.toString.call(t);
      }function r(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "[object Date]" === n(t);
      }function o(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "[object Array]" === n(t);
      }function i(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "[object RegExp]" === n(t);
      }function l(t) {
        var e = "";return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e;
      }var a;try {
        a = Map;
      } catch (t) {
        a = function a() {};
      }var s;try {
        s = Set;
      } catch (t) {
        s = function s() {};
      }var u;try {
        u = Promise;
      } catch (t) {
        u = function u() {};
      }return e.clonePrototype = function (t) {
        if (null === t) return null;var e = function e() {};return e.prototype = t, new e();
      }, e.__objToStr = n, e.__isDate = r, e.__isArray = o, e.__isRegExp = i, e.__getRegExpFlags = l, e;
    }();"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.exports && (t.exports = n);
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++) {
          n[e] = t[e];
        }return n;
      }return Array.from(t);
    }function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function l(t, e) {
      try {
        e.parentNode;
      } catch (t) {
        return !1;
      }return e instanceof Text && (e = e.parentNode), t.contains(e);
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.Range = void 0;var a = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;try {
          for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          o = !0, i = t;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        s = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        u = n(0),
        c = r(u),
        f = n(21),
        h = r(f),
        p = n(12),
        d = r(p),
        y = n(9),
        v = r(y),
        b = n(10),
        g = r(b),
        m = (0, g.default)("quill:selection"),
        _ = function t(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;i(this, t), this.index = e, this.length = n;
    },
        O = function () {
      function t(e, n) {
        var r = this;i(this, t), this.emitter = n, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = c.default.create("cursor", this), this.lastRange = this.savedRange = new _(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function () {
          r.mouseDown || setTimeout(r.update.bind(r, v.default.sources.USER), 1);
        }), this.emitter.on(v.default.events.EDITOR_CHANGE, function (t, e) {
          t === v.default.events.TEXT_CHANGE && e.length() > 0 && r.update(v.default.sources.SILENT);
        }), this.emitter.on(v.default.events.SCROLL_BEFORE_UPDATE, function () {
          if (r.hasFocus()) {
            var t = r.getNativeRange();null != t && t.start.node !== r.cursor.textNode && r.emitter.once(v.default.events.SCROLL_UPDATE, function () {
              try {
                r.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset);
              } catch (t) {}
            });
          }
        }), this.emitter.on(v.default.events.SCROLL_OPTIMIZE, function (t, e) {
          if (e.range) {
            var n = e.range,
                o = n.startNode,
                i = n.startOffset,
                l = n.endNode,
                a = n.endOffset;r.setNativeRange(o, i, l, a);
          }
        }), this.update(v.default.sources.SILENT);
      }return s(t, [{ key: "handleComposition", value: function value() {
          var t = this;this.root.addEventListener("compositionstart", function () {
            t.composing = !0;
          }), this.root.addEventListener("compositionend", function () {
            if (t.composing = !1, t.cursor.parent) {
              var e = t.cursor.restore();if (!e) return;setTimeout(function () {
                t.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset);
              }, 1);
            }
          });
        } }, { key: "handleDragging", value: function value() {
          var t = this;this.emitter.listenDOM("mousedown", document.body, function () {
            t.mouseDown = !0;
          }), this.emitter.listenDOM("mouseup", document.body, function () {
            t.mouseDown = !1, t.update(v.default.sources.USER);
          });
        } }, { key: "focus", value: function value() {
          this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
        } }, { key: "format", value: function value(t, e) {
          if (null == this.scroll.whitelist || this.scroll.whitelist[t]) {
            this.scroll.update();var n = this.getNativeRange();if (null != n && n.native.collapsed && !c.default.query(t, c.default.Scope.BLOCK)) {
              if (n.start.node !== this.cursor.textNode) {
                var r = c.default.find(n.start.node, !1);if (null == r) return;if (r instanceof c.default.Leaf) {
                  var o = r.split(n.start.offset);r.parent.insertBefore(this.cursor, o);
                } else r.insertBefore(this.cursor, n.start.node);this.cursor.attach();
              }this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
            }
          }
        } }, { key: "getBounds", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = this.scroll.length();t = Math.min(t, n - 1), e = Math.min(t + e, n - 1) - t;var r = void 0,
              o = this.scroll.leaf(t),
              i = a(o, 2),
              l = i[0],
              s = i[1];if (null == l) return null;var u = l.position(s, !0),
              c = a(u, 2);r = c[0], s = c[1];var f = document.createRange();if (e > 0) {
            f.setStart(r, s);var h = this.scroll.leaf(t + e),
                p = a(h, 2);if (l = p[0], s = p[1], null == l) return null;var d = l.position(s, !0),
                y = a(d, 2);return r = y[0], s = y[1], f.setEnd(r, s), f.getBoundingClientRect();
          }var v = "left",
              b = void 0;return r instanceof Text ? (s < r.data.length ? (f.setStart(r, s), f.setEnd(r, s + 1)) : (f.setStart(r, s - 1), f.setEnd(r, s), v = "right"), b = f.getBoundingClientRect()) : (b = l.domNode.getBoundingClientRect(), s > 0 && (v = "right")), { bottom: b.top + b.height, height: b.height, left: b[v], right: b[v], top: b.top, width: 0 };
        } }, { key: "getNativeRange", value: function value() {
          var t = document.getSelection();if (null == t || t.rangeCount <= 0) return null;var e = t.getRangeAt(0);if (null == e) return null;var n = this.normalizeNative(e);return m.info("getNativeRange", n), n;
        } }, { key: "getRange", value: function value() {
          var t = this.getNativeRange();return null == t ? [null, null] : [this.normalizedToRange(t), t];
        } }, { key: "hasFocus", value: function value() {
          return document.activeElement === this.root;
        } }, { key: "normalizedToRange", value: function value(t) {
          var e = this,
              n = [[t.start.node, t.start.offset]];t.native.collapsed || n.push([t.end.node, t.end.offset]);var r = n.map(function (t) {
            var n = a(t, 2),
                r = n[0],
                o = n[1],
                i = c.default.find(r, !0),
                l = i.offset(e.scroll);return 0 === o ? l : i instanceof c.default.Container ? l + i.length() : l + i.index(r, o);
          }),
              i = Math.min(Math.max.apply(Math, o(r)), this.scroll.length() - 1),
              l = Math.min.apply(Math, [i].concat(o(r)));return new _(l, i - l);
        } }, { key: "normalizeNative", value: function value(t) {
          if (!l(this.root, t.startContainer) || !t.collapsed && !l(this.root, t.endContainer)) return null;var e = { start: { node: t.startContainer, offset: t.startOffset }, end: { node: t.endContainer, offset: t.endOffset }, native: t };return [e.start, e.end].forEach(function (t) {
            for (var e = t.node, n = t.offset; !(e instanceof Text) && e.childNodes.length > 0;) {
              if (e.childNodes.length > n) e = e.childNodes[n], n = 0;else {
                if (e.childNodes.length !== n) break;e = e.lastChild, n = e instanceof Text ? e.data.length : e.childNodes.length + 1;
              }
            }t.node = e, t.offset = n;
          }), e;
        } }, { key: "rangeToNative", value: function value(t) {
          var e = this,
              n = t.collapsed ? [t.index] : [t.index, t.index + t.length],
              r = [],
              o = this.scroll.length();return n.forEach(function (t, n) {
            t = Math.min(o - 1, t);var i = void 0,
                l = e.scroll.leaf(t),
                s = a(l, 2),
                u = s[0],
                c = s[1],
                f = u.position(c, 0 !== n),
                h = a(f, 2);i = h[0], c = h[1], r.push(i, c);
          }), r.length < 2 && (r = r.concat(r)), r;
        } }, { key: "scrollIntoView", value: function value(t) {
          var e = this.lastRange;if (null != e) {
            var n = this.getBounds(e.index, e.length);if (null != n) {
              var r = this.scroll.length() - 1,
                  o = this.scroll.line(Math.min(e.index, r)),
                  i = a(o, 1),
                  l = i[0],
                  s = l;if (e.length > 0) {
                var u = this.scroll.line(Math.min(e.index + e.length, r));s = a(u, 1)[0];
              }if (null != l && null != s) {
                var c = t.getBoundingClientRect();n.top < c.top ? t.scrollTop -= c.top - n.top : n.bottom > c.bottom && (t.scrollTop += n.bottom - c.bottom);
              }
            }
          }
        } }, { key: "setNativeRange", value: function value(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e,
              o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];if (m.info("setNativeRange", t, e, n, r), null == t || null != this.root.parentNode && null != t.parentNode && null != n.parentNode) {
            var i = document.getSelection();if (null != i) if (null != t) {
              this.hasFocus() || this.root.focus();var l = (this.getNativeRange() || {}).native;if (null == l || o || t !== l.startContainer || e !== l.startOffset || n !== l.endContainer || r !== l.endOffset) {
                "BR" == t.tagName && (e = [].indexOf.call(t.parentNode.childNodes, t), t = t.parentNode), "BR" == n.tagName && (r = [].indexOf.call(n.parentNode.childNodes, n), n = n.parentNode);var a = document.createRange();a.setStart(t, e), a.setEnd(n, r), i.removeAllRanges(), i.addRange(a);
              }
            } else i.removeAllRanges(), this.root.blur(), document.body.focus();
          }
        } }, { key: "setRange", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.default.sources.API;if ("string" == typeof e && (n = e, e = !1), m.info("setRange", t), null != t) {
            var r = this.rangeToNative(t);this.setNativeRange.apply(this, o(r).concat([e]));
          } else this.setNativeRange(null);this.update(n);
        } }, { key: "update", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.default.sources.USER,
              e = this.lastRange,
              n = this.getRange(),
              r = a(n, 2),
              o = r[0],
              i = r[1];if (this.lastRange = o, null != this.lastRange && (this.savedRange = this.lastRange), !(0, d.default)(e, this.lastRange)) {
            var l;!this.composing && null != i && i.native.collapsed && i.start.node !== this.cursor.textNode && this.cursor.restore();var s = [v.default.events.SELECTION_CHANGE, (0, h.default)(this.lastRange), (0, h.default)(e), t];if ((l = this.emitter).emit.apply(l, [v.default.events.EDITOR_CHANGE].concat(s)), t !== v.default.sources.SILENT) {
              var u;(u = this.emitter).emit.apply(u, s);
            }
          }
        } }]), t;
    }();e.Range = _, e.default = O;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var a = n(0),
        s = r(a),
        u = n(3),
        c = r(u),
        f = function (t) {
      function e() {
        return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return l(e, t), e;
    }(s.default.Container);f.allowedChildren = [c.default, u.BlockEmbed, f], e.default = f;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0;var l = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        a = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        s = n(0),
        u = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(s),
        c = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), l(e, [{ key: "value", value: function value(t) {
          var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t);return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function (t) {
            return ("00" + parseInt(t).toString(16)).slice(-2);
          }).join("")) : n;
        } }]), e;
    }(u.default.Attributor.Style),
        f = new u.default.Attributor.Class("color", "ql-color", { scope: u.default.Scope.INLINE }),
        h = new c("color", "color", { scope: u.default.Scope.INLINE });e.ColorAttributor = c, e.ColorClass = f, e.ColorStyle = h;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    }function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function l(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }function s(t, e) {
      var n,
          r = t === D.keys.LEFT ? "prefix" : "suffix";return n = { key: t, shiftKey: e, altKey: null }, o(n, r, /^$/), o(n, "handler", function (n) {
        var r = n.index;t === D.keys.RIGHT && (r += n.length + 1);var o = this.quill.getLeaf(r);return !(b(o, 1)[0] instanceof T.default.Embed) || (t === D.keys.LEFT ? e ? this.quill.setSelection(n.index - 1, n.length + 1, S.default.sources.USER) : this.quill.setSelection(n.index - 1, S.default.sources.USER) : e ? this.quill.setSelection(n.index, n.length + 1, S.default.sources.USER) : this.quill.setSelection(n.index + n.length + 1, S.default.sources.USER), !1);
      }), n;
    }function u(t, e) {
      if (!(0 === t.index || this.quill.getLength() <= 1)) {
        var n = this.quill.getLine(t.index),
            r = b(n, 1),
            o = r[0],
            i = {};if (0 === e.offset) {
          var l = this.quill.getLine(t.index - 1),
              a = b(l, 1),
              s = a[0];if (null != s && s.length() > 1) {
            var u = o.formats(),
                c = this.quill.getFormat(t.index - 1, 1);i = A.default.attributes.diff(u, c) || {};
          }
        }var f = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;this.quill.deleteText(t.index - f, f, S.default.sources.USER), Object.keys(i).length > 0 && this.quill.formatLine(t.index - f, f, i, S.default.sources.USER), this.quill.focus();
      }
    }function c(t, e) {
      var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;if (!(t.index >= this.quill.getLength() - n)) {
        var r = {},
            o = 0,
            i = this.quill.getLine(t.index),
            l = b(i, 1),
            a = l[0];if (e.offset >= a.length() - 1) {
          var s = this.quill.getLine(t.index + 1),
              u = b(s, 1),
              c = u[0];if (c) {
            var f = a.formats(),
                h = this.quill.getFormat(t.index, 1);r = A.default.attributes.diff(f, h) || {}, o = c.length();
          }
        }this.quill.deleteText(t.index, n, S.default.sources.USER), Object.keys(r).length > 0 && this.quill.formatLine(t.index + o - 1, n, r, S.default.sources.USER);
      }
    }function f(t) {
      var e = this.quill.getLines(t),
          n = {};if (e.length > 1) {
        var r = e[0].formats(),
            o = e[e.length - 1].formats();n = A.default.attributes.diff(o, r) || {};
      }this.quill.deleteText(t, S.default.sources.USER), Object.keys(n).length > 0 && this.quill.formatLine(t.index, 1, n, S.default.sources.USER), this.quill.setSelection(t.index, S.default.sources.SILENT), this.quill.focus();
    }function h(t, e) {
      var n = this;t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);var r = Object.keys(e.format).reduce(function (t, n) {
        return T.default.query(n, T.default.Scope.BLOCK) && !Array.isArray(e.format[n]) && (t[n] = e.format[n]), t;
      }, {});this.quill.insertText(t.index, "\n", r, S.default.sources.USER), this.quill.setSelection(t.index + 1, S.default.sources.SILENT), this.quill.focus(), Object.keys(e.format).forEach(function (t) {
        null == r[t] && (Array.isArray(e.format[t]) || "link" !== t && n.quill.format(t, e.format[t], S.default.sources.USER));
      });
    }function p(t) {
      return { key: D.keys.TAB, shiftKey: !t, format: { "code-block": !0 }, handler: function handler(e) {
          var n = T.default.query("code-block"),
              r = e.index,
              o = e.length,
              i = this.quill.scroll.descendant(n, r),
              l = b(i, 2),
              a = l[0],
              s = l[1];if (null != a) {
            var u = this.quill.getIndex(a),
                c = a.newlineIndex(s, !0) + 1,
                f = a.newlineIndex(u + s + o),
                h = a.domNode.textContent.slice(c, f).split("\n");s = 0, h.forEach(function (e, i) {
              t ? (a.insertAt(c + s, n.TAB), s += n.TAB.length, 0 === i ? r += n.TAB.length : o += n.TAB.length) : e.startsWith(n.TAB) && (a.deleteAt(c + s, n.TAB.length), s -= n.TAB.length, 0 === i ? r -= n.TAB.length : o -= n.TAB.length), s += e.length + 1;
            }), this.quill.update(S.default.sources.USER), this.quill.setSelection(r, o, S.default.sources.SILENT);
          }
        } };
    }function d(t) {
      return { key: t[0].toUpperCase(), shortKey: !0, handler: function handler(e, n) {
          this.quill.format(t, !n.format[t], S.default.sources.USER);
        } };
    }function y(t) {
      if ("string" == typeof t || "number" == typeof t) return y({ key: t });if ("object" === (void 0 === t ? "undefined" : v(t)) && (t = (0, _.default)(t, !1)), "string" == typeof t.key) if (null != D.keys[t.key.toUpperCase()]) t.key = D.keys[t.key.toUpperCase()];else {
        if (1 !== t.key.length) return null;t.key = t.key.toUpperCase().charCodeAt(0);
      }return t.shortKey && (t[B] = t.shortKey, delete t.shortKey), t;
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.SHORTKEY = e.default = void 0;var v = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        b = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;try {
          for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          o = !0, i = t;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        g = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        m = n(21),
        _ = r(m),
        O = n(12),
        w = r(O),
        x = n(2),
        k = r(x),
        E = n(4),
        N = r(E),
        j = n(20),
        A = r(j),
        q = n(0),
        T = r(q),
        P = n(6),
        S = r(P),
        C = n(10),
        L = r(C),
        M = n(7),
        R = r(M),
        I = (0, L.default)("quill:keyboard"),
        B = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
        D = function (t) {
      function e(t, n) {
        i(this, e);var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));return r.bindings = {}, Object.keys(r.options.bindings).forEach(function (e) {
          ("list autofill" !== e || null == t.scroll.whitelist || t.scroll.whitelist.list) && r.options.bindings[e] && r.addBinding(r.options.bindings[e]);
        }), r.addBinding({ key: e.keys.ENTER, shiftKey: null }, h), r.addBinding({ key: e.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () {}), /Firefox/i.test(navigator.userAgent) ? (r.addBinding({ key: e.keys.BACKSPACE }, { collapsed: !0 }, u), r.addBinding({ key: e.keys.DELETE }, { collapsed: !0 }, c)) : (r.addBinding({ key: e.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, u), r.addBinding({ key: e.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, c)), r.addBinding({ key: e.keys.BACKSPACE }, { collapsed: !1 }, f), r.addBinding({ key: e.keys.DELETE }, { collapsed: !1 }, f), r.addBinding({ key: e.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, u), r.listen(), r;
      }return a(e, t), g(e, null, [{ key: "match", value: function value(t, e) {
          return e = y(e), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function (n) {
            return !!e[n] !== t[n] && null !== e[n];
          }) && e.key === (t.which || t.keyCode);
        } }]), g(e, [{ key: "addBinding", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = y(t);if (null == r || null == r.key) return I.warn("Attempted to add invalid keyboard binding", r);"function" == typeof e && (e = { handler: e }), "function" == typeof n && (n = { handler: n }), r = (0, k.default)(r, e, n), this.bindings[r.key] = this.bindings[r.key] || [], this.bindings[r.key].push(r);
        } }, { key: "listen", value: function value() {
          var t = this;this.quill.root.addEventListener("keydown", function (n) {
            if (!n.defaultPrevented) {
              var r = n.which || n.keyCode,
                  o = (t.bindings[r] || []).filter(function (t) {
                return e.match(n, t);
              });if (0 !== o.length) {
                var i = t.quill.getSelection();if (null != i && t.quill.hasFocus()) {
                  var l = t.quill.getLine(i.index),
                      a = b(l, 2),
                      s = a[0],
                      u = a[1],
                      c = t.quill.getLeaf(i.index),
                      f = b(c, 2),
                      h = f[0],
                      p = f[1],
                      d = 0 === i.length ? [h, p] : t.quill.getLeaf(i.index + i.length),
                      y = b(d, 2),
                      g = y[0],
                      m = y[1],
                      _ = h instanceof T.default.Text ? h.value().slice(0, p) : "",
                      O = g instanceof T.default.Text ? g.value().slice(m) : "",
                      x = { collapsed: 0 === i.length, empty: 0 === i.length && s.length() <= 1, format: t.quill.getFormat(i), offset: u, prefix: _, suffix: O };o.some(function (e) {
                    if (null != e.collapsed && e.collapsed !== x.collapsed) return !1;if (null != e.empty && e.empty !== x.empty) return !1;if (null != e.offset && e.offset !== x.offset) return !1;if (Array.isArray(e.format)) {
                      if (e.format.every(function (t) {
                        return null == x.format[t];
                      })) return !1;
                    } else if ("object" === v(e.format) && !Object.keys(e.format).every(function (t) {
                      return !0 === e.format[t] ? null != x.format[t] : !1 === e.format[t] ? null == x.format[t] : (0, w.default)(e.format[t], x.format[t]);
                    })) return !1;return !(null != e.prefix && !e.prefix.test(x.prefix)) && !(null != e.suffix && !e.suffix.test(x.suffix)) && !0 !== e.handler.call(t, i, x);
                  }) && n.preventDefault();
                }
              }
            }
          });
        } }]), e;
    }(R.default);D.keys = { BACKSPACE: 8, TAB: 9, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 }, D.DEFAULTS = { bindings: { bold: d("bold"), italic: d("italic"), underline: d("underline"), indent: { key: D.keys.TAB, format: ["blockquote", "indent", "list"], handler: function handler(t, e) {
            if (e.collapsed && 0 !== e.offset) return !0;this.quill.format("indent", "+1", S.default.sources.USER);
          } }, outdent: { key: D.keys.TAB, shiftKey: !0, format: ["blockquote", "indent", "list"], handler: function handler(t, e) {
            if (e.collapsed && 0 !== e.offset) return !0;this.quill.format("indent", "-1", S.default.sources.USER);
          } }, "outdent backspace": { key: D.keys.BACKSPACE, collapsed: !0, shiftKey: null, metaKey: null, ctrlKey: null, altKey: null, format: ["indent", "list"], offset: 0, handler: function handler(t, e) {
            null != e.format.indent ? this.quill.format("indent", "-1", S.default.sources.USER) : null != e.format.list && this.quill.format("list", !1, S.default.sources.USER);
          } }, "indent code-block": p(!0), "outdent code-block": p(!1), "remove tab": { key: D.keys.TAB, shiftKey: !0, collapsed: !0, prefix: /\t$/, handler: function handler(t) {
            this.quill.deleteText(t.index - 1, 1, S.default.sources.USER);
          } }, tab: { key: D.keys.TAB, handler: function handler(t) {
            this.quill.history.cutoff();var e = new N.default().retain(t.index).delete(t.length).insert("\t");this.quill.updateContents(e, S.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index + 1, S.default.sources.SILENT);
          } }, "list empty enter": { key: D.keys.ENTER, collapsed: !0, format: ["list"], empty: !0, handler: function handler(t, e) {
            this.quill.format("list", !1, S.default.sources.USER), e.format.indent && this.quill.format("indent", !1, S.default.sources.USER);
          } }, "checklist enter": { key: D.keys.ENTER, collapsed: !0, format: { list: "checked" }, handler: function handler(t) {
            var e = this.quill.getLine(t.index),
                n = b(e, 2),
                r = n[0],
                o = n[1],
                i = (0, k.default)({}, r.formats(), { list: "checked" }),
                l = new N.default().retain(t.index).insert("\n", i).retain(r.length() - o - 1).retain(1, { list: "unchecked" });this.quill.updateContents(l, S.default.sources.USER), this.quill.setSelection(t.index + 1, S.default.sources.SILENT), this.quill.scrollIntoView();
          } }, "header enter": { key: D.keys.ENTER, collapsed: !0, format: ["header"], suffix: /^$/, handler: function handler(t, e) {
            var n = this.quill.getLine(t.index),
                r = b(n, 2),
                o = r[0],
                i = r[1],
                l = new N.default().retain(t.index).insert("\n", e.format).retain(o.length() - i - 1).retain(1, { header: null });this.quill.updateContents(l, S.default.sources.USER), this.quill.setSelection(t.index + 1, S.default.sources.SILENT), this.quill.scrollIntoView();
          } }, "list autofill": { key: " ", collapsed: !0, format: { list: !1 }, prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/, handler: function handler(t, e) {
            var n = e.prefix.length,
                r = this.quill.getLine(t.index),
                o = b(r, 2),
                i = o[0],
                l = o[1];if (l > n) return !0;var a = void 0;switch (e.prefix.trim()) {case "[]":case "[ ]":
                a = "unchecked";break;case "[x]":
                a = "checked";break;case "-":case "*":
                a = "bullet";break;default:
                a = "ordered";}this.quill.insertText(t.index, " ", S.default.sources.USER), this.quill.history.cutoff();var s = new N.default().retain(t.index - l).delete(n + 1).retain(i.length() - 2 - l).retain(1, { list: a });this.quill.updateContents(s, S.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index - n, S.default.sources.SILENT);
          } }, "code exit": { key: D.keys.ENTER, collapsed: !0, format: ["code-block"], prefix: /\n\n$/, suffix: /^\s+$/, handler: function handler(t) {
            var e = this.quill.getLine(t.index),
                n = b(e, 2),
                r = n[0],
                o = n[1],
                i = new N.default().retain(t.index + r.length() - o - 2).retain(1, { "code-block": null }).delete(1);this.quill.updateContents(i, S.default.sources.USER);
          } }, "embed left": s(D.keys.LEFT, !1), "embed left shift": s(D.keys.LEFT, !0), "embed right": s(D.keys.RIGHT, !1), "embed right shift": s(D.keys.RIGHT, !0) } }, e.default = D, e.SHORTKEY = B;
  }, function (t, e, n) {
    "use strict";
    t.exports = { align: { "": n(75), center: n(76), right: n(77), justify: n(78) }, background: n(79), blockquote: n(80), bold: n(81), clean: n(82), code: n(40), "code-block": n(40), color: n(83), direction: { "": n(84), rtl: n(85) }, float: { center: n(86), full: n(87), left: n(88), right: n(89) }, formula: n(90), header: { 1: n(91), 2: n(92) }, italic: n(93), image: n(94), indent: { "+1": n(95), "-1": n(96) }, link: n(97), list: { ordered: n(98), bullet: n(99), check: n(100) }, script: { sub: n(101), super: n(102) }, strike: n(103), underline: n(104), video: n(105) };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(1),
        o = function () {
      function t(t) {
        this.domNode = t, this.domNode[r.DATA_KEY] = { blot: this };
      }return Object.defineProperty(t.prototype, "statics", { get: function get() {
          return this.constructor;
        }, enumerable: !0, configurable: !0 }), t.create = function (t) {
        if (null == this.tagName) throw new r.ParchmentError("Blot definition missing tagName");var e;return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(), parseInt(t).toString() === t && (t = parseInt(t))), e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) : this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e;
      }, t.prototype.attach = function () {
        null != this.parent && (this.scroll = this.parent.scroll);
      }, t.prototype.clone = function () {
        var t = this.domNode.cloneNode(!1);return r.create(t);
      }, t.prototype.detach = function () {
        null != this.parent && this.parent.removeChild(this), delete this.domNode[r.DATA_KEY];
      }, t.prototype.deleteAt = function (t, e) {
        this.isolate(t, e).remove();
      }, t.prototype.formatAt = function (t, e, n, o) {
        var i = this.isolate(t, e);if (null != r.query(n, r.Scope.BLOT) && o) i.wrap(n, o);else if (null != r.query(n, r.Scope.ATTRIBUTE)) {
          var l = r.create(this.statics.scope);i.wrap(l), l.format(n, o);
        }
      }, t.prototype.insertAt = function (t, e, n) {
        var o = null == n ? r.create("text", e) : r.create(e, n),
            i = this.split(t);this.parent.insertBefore(o, i);
      }, t.prototype.insertInto = function (t, e) {
        void 0 === e && (e = null), null != this.parent && this.parent.children.remove(this);var n = null;t.children.insertBefore(this, e), null != e && (n = e.domNode), this.domNode.parentNode == t.domNode && this.domNode.nextSibling == n || t.domNode.insertBefore(this.domNode, n), this.parent = t, this.attach();
      }, t.prototype.isolate = function (t, e) {
        var n = this.split(t);return n.split(e), n;
      }, t.prototype.length = function () {
        return 1;
      }, t.prototype.offset = function (t) {
        return void 0 === t && (t = this.parent), null == this.parent || this == t ? 0 : this.parent.children.offset(this) + this.parent.offset(t);
      }, t.prototype.optimize = function (t) {
        null != this.domNode[r.DATA_KEY] && delete this.domNode[r.DATA_KEY].mutations;
      }, t.prototype.remove = function () {
        null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach();
      }, t.prototype.replace = function (t) {
        null != t.parent && (t.parent.insertBefore(this, t.next), t.remove());
      }, t.prototype.replaceWith = function (t, e) {
        var n = "string" == typeof t ? r.create(t, e) : t;return n.replace(this), n;
      }, t.prototype.split = function (t, e) {
        return 0 === t ? this : this.next;
      }, t.prototype.update = function (t, e) {}, t.prototype.wrap = function (t, e) {
        var n = "string" == typeof t ? r.create(t, e) : t;return null != this.parent && this.parent.insertBefore(n, this.next), n.appendChild(this), n;
      }, t.blotName = "abstract", t;
    }();e.default = o;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = n(11),
        o = n(29),
        i = n(30),
        l = n(1),
        a = function () {
      function t(t) {
        this.attributes = {}, this.domNode = t, this.build();
      }return t.prototype.attribute = function (t, e) {
        e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
      }, t.prototype.build = function () {
        var t = this;this.attributes = {};var e = r.default.keys(this.domNode),
            n = o.default.keys(this.domNode),
            a = i.default.keys(this.domNode);e.concat(n).concat(a).forEach(function (e) {
          var n = l.query(e, l.Scope.ATTRIBUTE);n instanceof r.default && (t.attributes[n.attrName] = n);
        });
      }, t.prototype.copy = function (t) {
        var e = this;Object.keys(this.attributes).forEach(function (n) {
          var r = e.attributes[n].value(e.domNode);t.format(n, r);
        });
      }, t.prototype.move = function (t) {
        var e = this;this.copy(t), Object.keys(this.attributes).forEach(function (t) {
          e.attributes[t].remove(e.domNode);
        }), this.attributes = {};
      }, t.prototype.values = function () {
        var t = this;return Object.keys(this.attributes).reduce(function (e, n) {
          return e[n] = t.attributes[n].value(t.domNode), e;
        }, {});
      }, t;
    }();e.default = a;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      return (t.getAttribute("class") || "").split(/\s+/).filter(function (t) {
        return 0 === t.indexOf(e + "-");
      });
    }var o = this && this.__extends || function () {
      var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      };return function (e, n) {
        function r() {
          this.constructor = e;
        }t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      };
    }();Object.defineProperty(e, "__esModule", { value: !0 });var i = n(11),
        l = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return o(e, t), e.keys = function (t) {
        return (t.getAttribute("class") || "").split(/\s+/).map(function (t) {
          return t.split("-").slice(0, -1).join("-");
        });
      }, e.prototype.add = function (t, e) {
        return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(this.keyName + "-" + e), !0);
      }, e.prototype.remove = function (t) {
        r(t, this.keyName).forEach(function (e) {
          t.classList.remove(e);
        }), 0 === t.classList.length && t.removeAttribute("class");
      }, e.prototype.value = function (t) {
        var e = r(t, this.keyName)[0] || "",
            n = e.slice(this.keyName.length + 1);return this.canAdd(t, n) ? n : "";
      }, e;
    }(i.default);e.default = l;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      var e = t.split("-"),
          n = e.slice(1).map(function (t) {
        return t[0].toUpperCase() + t.slice(1);
      }).join("");return e[0] + n;
    }var o = this && this.__extends || function () {
      var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      };return function (e, n) {
        function r() {
          this.constructor = e;
        }t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      };
    }();Object.defineProperty(e, "__esModule", { value: !0 });var i = n(11),
        l = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return o(e, t), e.keys = function (t) {
        return (t.getAttribute("style") || "").split(";").map(function (t) {
          return t.split(":")[0].trim();
        });
      }, e.prototype.add = function (t, e) {
        return !!this.canAdd(t, e) && (t.style[r(this.keyName)] = e, !0);
      }, e.prototype.remove = function (t) {
        t.style[r(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style");
      }, e.prototype.value = function (t) {
        var e = t.style[r(this.keyName)];return this.canAdd(t, e) ? e : "";
      }, e;
    }(i.default);e.default = l;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var a = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;try {
          for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          o = !0, i = t;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        s = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        u = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        c = n(0),
        f = r(c),
        h = n(8),
        p = r(h),
        d = function (t) {
      function e(t, n) {
        o(this, e);var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));return r.selection = n, r.textNode = document.createTextNode(e.CONTENTS), r.domNode.appendChild(r.textNode), r._length = 0, r;
      }return l(e, t), u(e, null, [{ key: "value", value: function value() {} }]), u(e, [{ key: "detach", value: function value() {
          null != this.parent && this.parent.removeChild(this);
        } }, { key: "format", value: function value(t, n) {
          if (0 !== this._length) return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);for (var r = this, o = 0; null != r && r.statics.scope !== f.default.Scope.BLOCK_BLOT;) {
            o += r.offset(r.parent), r = r.parent;
          }null != r && (this._length = e.CONTENTS.length, r.optimize(), r.formatAt(o, e.CONTENTS.length, t, n), this._length = 0);
        } }, { key: "index", value: function value(t, n) {
          return t === this.textNode ? 0 : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n);
        } }, { key: "length", value: function value() {
          return this._length;
        } }, { key: "position", value: function value() {
          return [this.textNode, this.textNode.data.length];
        } }, { key: "remove", value: function value() {
          s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this), this.parent = null;
        } }, { key: "restore", value: function value() {
          if (!this.selection.composing && null != this.parent) {
            var t = this.textNode,
                n = this.selection.getNativeRange(),
                r = void 0,
                o = void 0,
                i = void 0;if (null != n && n.start.node === t && n.end.node === t) {
              var l = [t, n.start.offset, n.end.offset];r = l[0], o = l[1], i = l[2];
            }for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) {
              this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
            }if (this.textNode.data !== e.CONTENTS) {
              var s = this.textNode.data.split(e.CONTENTS).join("");this.next instanceof p.default ? (r = this.next.domNode, this.next.insertAt(0, s), this.textNode.data = e.CONTENTS) : (this.textNode.data = s, this.parent.insertBefore(f.default.create(this.textNode), this), this.textNode = document.createTextNode(e.CONTENTS), this.domNode.appendChild(this.textNode));
            }if (this.remove(), null != o) {
              var u = [o, i].map(function (t) {
                return Math.max(0, Math.min(r.data.length, t - 1));
              }),
                  c = a(u, 2);return o = c[0], i = c[1], { startNode: r, startOffset: o, endNode: r, endOffset: i };
            }
          }
        } }, { key: "update", value: function value(t, e) {
          var n = this;if (t.some(function (t) {
            return "characterData" === t.type && t.target === n.textNode;
          })) {
            var r = this.restore();r && (e.range = r);
          }
        } }, { key: "value", value: function value() {
          return "";
        } }]), e;
    }(f.default.Embed);d.blotName = "cursor", d.className = "ql-cursor", d.tagName = "span", d.CONTENTS = "\uFEFF", e.default = d;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        i = function () {
      function t(e, n) {
        r(this, t), this.quill = e, this.options = n, this.modules = {};
      }return o(t, [{ key: "init", value: function value() {
          var t = this;Object.keys(this.options.modules).forEach(function (e) {
            null == t.modules[e] && t.addModule(e);
          });
        } }, { key: "addModule", value: function value(t) {
          var e = this.quill.constructor.import("modules/" + t);return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t];
        } }]), t;
    }();i.DEFAULTS = { modules: {} }, i.themes = { default: i }, e.default = i;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var a = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        s = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        u = n(0),
        c = r(u),
        f = n(8),
        h = r(f),
        p = "\uFEFF",
        d = function (t) {
      function e(t) {
        o(this, e);var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), [].slice.call(n.domNode.childNodes).forEach(function (t) {
          n.contentNode.appendChild(t);
        }), n.leftGuard = document.createTextNode(p), n.rightGuard = document.createTextNode(p), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n;
      }return l(e, t), a(e, [{ key: "index", value: function value(t, n) {
          return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n);
        } }, { key: "restore", value: function value(t) {
          var e = void 0,
              n = void 0,
              r = t.data.split(p).join("");if (t === this.leftGuard) {
            if (this.prev instanceof h.default) {
              var o = this.prev.length();this.prev.insertAt(o, r), e = { startNode: this.prev.domNode, startOffset: o + r.length };
            } else n = document.createTextNode(r), this.parent.insertBefore(c.default.create(n), this), e = { startNode: n, startOffset: r.length };
          } else t === this.rightGuard && (this.next instanceof h.default ? (this.next.insertAt(0, r), e = { startNode: this.next.domNode, startOffset: r.length }) : (n = document.createTextNode(r), this.parent.insertBefore(c.default.create(n), this.next), e = { startNode: n, startOffset: r.length }));return t.data = p, e;
        } }, { key: "update", value: function value(t, e) {
          var n = this;t.forEach(function (t) {
            if ("characterData" === t.type && (t.target === n.leftGuard || t.target === n.rightGuard)) {
              var r = n.restore(t.target);r && (e.range = r);
            }
          });
        } }]), e;
    }(c.default.Embed);e.default = d;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0;var r = n(0),
        o = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r),
        i = { scope: o.default.Scope.BLOCK, whitelist: ["right", "center", "justify"] },
        l = new o.default.Attributor.Attribute("align", "align", i),
        a = new o.default.Attributor.Class("align", "ql-align", i),
        s = new o.default.Attributor.Style("align", "text-align", i);e.AlignAttribute = l, e.AlignClass = a, e.AlignStyle = s;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BackgroundStyle = e.BackgroundClass = void 0;var r = n(0),
        o = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r),
        i = n(24),
        l = new o.default.Attributor.Class("background", "ql-bg", { scope: o.default.Scope.INLINE }),
        a = new i.ColorAttributor("background", "background-color", { scope: o.default.Scope.INLINE });e.BackgroundClass = l, e.BackgroundStyle = a;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DirectionStyle = e.DirectionClass = e.DirectionAttribute = void 0;var r = n(0),
        o = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r),
        i = { scope: o.default.Scope.BLOCK, whitelist: ["rtl"] },
        l = new o.default.Attributor.Attribute("direction", "dir", i),
        a = new o.default.Attributor.Class("direction", "ql-direction", i),
        s = new o.default.Attributor.Style("direction", "direction", i);e.DirectionAttribute = l, e.DirectionClass = a, e.DirectionStyle = s;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.FontClass = e.FontStyle = void 0;var l = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        a = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        s = n(0),
        u = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(s),
        c = { scope: u.default.Scope.INLINE, whitelist: ["serif", "monospace"] },
        f = new u.default.Attributor.Class("font", "ql-font", c),
        h = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), l(e, [{ key: "value", value: function value(t) {
          return a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t).replace(/["']/g, "");
        } }]), e;
    }(u.default.Attributor.Style),
        p = new h("font", "font-family", c);e.FontStyle = p, e.FontClass = f;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.SizeStyle = e.SizeClass = void 0;var r = n(0),
        o = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r),
        i = new o.default.Attributor.Class("size", "ql-size", { scope: o.default.Scope.INLINE, whitelist: ["small", "large", "huge"] }),
        l = new o.default.Attributor.Style("size", "font-size", { scope: o.default.Scope.INLINE, whitelist: ["10px", "18px", "32px"] });e.SizeClass = i, e.SizeStyle = l;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        a = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        s = n(5),
        u = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(s),
        c = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), l(e, [{ key: "optimize", value: function value(t) {
          a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
        } }], [{ key: "create", value: function value() {
          return a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this);
        } }, { key: "formats", value: function value() {
          return !0;
        } }]), e;
    }(u.default);c.blotName = "bold", c.tagName = ["STRONG", "B"], e.default = c;
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        a = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        s = n(16),
        u = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(s),
        c = function (t) {
      function e(t, n) {
        r(this, e);var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));return i.label.innerHTML = n, i.container.classList.add("ql-color-picker"), [].slice.call(i.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function (t) {
          t.classList.add("ql-primary");
        }), i;
      }return i(e, t), l(e, [{ key: "buildItem", value: function value(t) {
          var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "buildItem", this).call(this, t);return n.style.backgroundColor = t.getAttribute("value") || "", n;
        } }, { key: "selectItem", value: function value(t, n) {
          a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n);var r = this.label.querySelector(".ql-color-label"),
              o = t ? t.getAttribute("data-value") || "" : "";r && ("line" === r.tagName ? r.style.stroke = o : r.style.fill = o);
        } }]), e;
    }(u.default);e.default = c;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        a = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        s = n(16),
        u = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(s),
        c = function (t) {
      function e(t, n) {
        r(this, e);var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));return i.container.classList.add("ql-icon-picker"), [].forEach.call(i.container.querySelectorAll(".ql-picker-item"), function (t) {
          t.innerHTML = n[t.getAttribute("data-value") || ""];
        }), i.defaultItem = i.container.querySelector(".ql-selected"), i.selectItem(i.defaultItem), i;
      }return i(e, t), l(e, [{ key: "selectItem", value: function value(t, n) {
          a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n), t = t || this.defaultItem, this.label.innerHTML = t.innerHTML;
        } }]), e;
    }(u.default);e.default = c;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        i = function () {
      function t(e, n) {
        var o = this;r(this, t), this.quill = e, this.boundsContainer = n || document.body, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function () {
          o.root.style.marginTop = -1 * o.quill.root.scrollTop + "px";
        }), this.hide();
      }return o(t, [{ key: "hide", value: function value() {
          this.root.classList.add("ql-hidden");
        } }, { key: "position", value: function value(t) {
          var e = t.left + t.width / 2 - this.root.offsetWidth / 2,
              n = t.bottom + this.quill.root.scrollTop;this.root.style.left = e + "px", this.root.style.top = n + "px", this.root.classList.remove("ql-flip");var r = this.boundsContainer.getBoundingClientRect(),
              o = this.root.getBoundingClientRect(),
              i = 0;if (o.right > r.right && (i = r.right - o.right, this.root.style.left = e + i + "px"), o.left < r.left && (i = r.left - o.left, this.root.style.left = e + i + "px"), o.bottom > r.bottom) {
            var l = o.bottom - o.top,
                a = t.bottom - t.top + l;this.root.style.top = n - a + "px", this.root.classList.add("ql-flip");
          }return i;
        } }, { key: "show", value: function value() {
          this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
        } }]), t;
    }();e.default = i;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }function a(t) {
      var e = t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);return e ? (e[1] || "https") + "://www.youtube.com/embed/" + e[2] + "?showinfo=0" : (e = t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (e[1] || "https") + "://player.vimeo.com/video/" + e[2] + "/" : t;
    }function s(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];e.forEach(function (e) {
        var r = document.createElement("option");e === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", e), t.appendChild(r);
      });
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.BaseTooltip = void 0;var u = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        c = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        f = n(2),
        h = r(f),
        p = n(4),
        d = r(p),
        y = n(9),
        v = r(y),
        b = n(25),
        g = r(b),
        m = n(32),
        _ = r(m),
        O = n(41),
        w = r(O),
        x = n(42),
        k = r(x),
        E = n(16),
        N = r(E),
        j = n(43),
        A = r(j),
        q = [!1, "center", "right", "justify"],
        T = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"],
        P = [!1, "serif", "monospace"],
        S = ["1", "2", "3", !1],
        C = ["small", !1, "large", "huge"],
        L = function (t) {
      function e(t, n) {
        o(this, e);var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
            l = function e(n) {
          if (!document.body.contains(t.root)) return document.body.removeEventListener("click", e);null == r.tooltip || r.tooltip.root.contains(n.target) || document.activeElement === r.tooltip.textbox || r.quill.hasFocus() || r.tooltip.hide(), null != r.pickers && r.pickers.forEach(function (t) {
            t.container.contains(n.target) || t.close();
          });
        };return t.emitter.listenDOM("click", document.body, l), r;
      }return l(e, t), u(e, [{ key: "addModule", value: function value(t) {
          var n = c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "addModule", this).call(this, t);return "toolbar" === t && this.extendToolbar(n), n;
        } }, { key: "buildButtons", value: function value(t, e) {
          t.forEach(function (t) {
            (t.getAttribute("class") || "").split(/\s+/).forEach(function (n) {
              if (n.startsWith("ql-") && (n = n.slice("ql-".length), null != e[n])) if ("direction" === n) t.innerHTML = e[n][""] + e[n].rtl;else if ("string" == typeof e[n]) t.innerHTML = e[n];else {
                var r = t.value || "";null != r && e[n][r] && (t.innerHTML = e[n][r]);
              }
            });
          });
        } }, { key: "buildPickers", value: function value(t, e) {
          var n = this;this.pickers = t.map(function (t) {
            if (t.classList.contains("ql-align")) return null == t.querySelector("option") && s(t, q), new k.default(t, e.align);if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
              var n = t.classList.contains("ql-background") ? "background" : "color";return null == t.querySelector("option") && s(t, T, "background" === n ? "#ffffff" : "#000000"), new w.default(t, e[n]);
            }return null == t.querySelector("option") && (t.classList.contains("ql-font") ? s(t, P) : t.classList.contains("ql-header") ? s(t, S) : t.classList.contains("ql-size") && s(t, C)), new N.default(t);
          });var r = function r() {
            n.pickers.forEach(function (t) {
              t.update();
            });
          };this.quill.on(v.default.events.EDITOR_CHANGE, r);
        } }]), e;
    }(_.default);L.DEFAULTS = (0, h.default)(!0, {}, _.default.DEFAULTS, { modules: { toolbar: { handlers: { formula: function formula() {
              this.quill.theme.tooltip.edit("formula");
            }, image: function image() {
              var t = this,
                  e = this.container.querySelector("input.ql-image[type=file]");null == e && (e = document.createElement("input"), e.setAttribute("type", "file"), e.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), e.classList.add("ql-image"), e.addEventListener("change", function () {
                if (null != e.files && null != e.files[0]) {
                  var n = new FileReader();n.onload = function (n) {
                    var r = t.quill.getSelection(!0);t.quill.updateContents(new d.default().retain(r.index).delete(r.length).insert({ image: n.target.result }), v.default.sources.USER), t.quill.setSelection(r.index + 1, v.default.sources.SILENT), e.value = "";
                  }, n.readAsDataURL(e.files[0]);
                }
              }), this.container.appendChild(e)), e.click();
            }, video: function video() {
              this.quill.theme.tooltip.edit("video");
            } } } } });var M = function (t) {
      function e(t, n) {
        o(this, e);var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));return r.textbox = r.root.querySelector('input[type="text"]'), r.listen(), r;
      }return l(e, t), u(e, [{ key: "listen", value: function value() {
          var t = this;this.textbox.addEventListener("keydown", function (e) {
            g.default.match(e, "enter") ? (t.save(), e.preventDefault()) : g.default.match(e, "escape") && (t.cancel(), e.preventDefault());
          });
        } }, { key: "cancel", value: function value() {
          this.hide();
        } }, { key: "edit", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link",
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != e ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + t) || ""), this.root.setAttribute("data-mode", t);
        } }, { key: "restoreFocus", value: function value() {
          var t = this.quill.scrollingContainer.scrollTop;this.quill.focus(), this.quill.scrollingContainer.scrollTop = t;
        } }, { key: "save", value: function value() {
          var t = this.textbox.value;switch (this.root.getAttribute("data-mode")) {case "link":
              var e = this.quill.root.scrollTop;this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, v.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, v.default.sources.USER)), this.quill.root.scrollTop = e;break;case "video":
              t = a(t);case "formula":
              if (!t) break;var n = this.quill.getSelection(!0);if (null != n) {
                var r = n.index + n.length;this.quill.insertEmbed(r, this.root.getAttribute("data-mode"), t, v.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(r + 1, " ", v.default.sources.USER), this.quill.setSelection(r + 2, v.default.sources.USER);
              }}this.textbox.value = "", this.hide();
        } }]), e;
    }(A.default);e.BaseTooltip = M, e.default = L;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(46),
        i = r(o),
        l = n(34),
        a = n(36),
        s = n(62),
        u = n(63),
        c = r(u),
        f = n(64),
        h = r(f),
        p = n(65),
        d = r(p),
        y = n(35),
        v = n(24),
        b = n(37),
        g = n(38),
        m = n(39),
        _ = r(m),
        O = n(66),
        w = r(O),
        x = n(15),
        k = r(x),
        E = n(67),
        N = r(E),
        j = n(68),
        A = r(j),
        q = n(69),
        T = r(q),
        P = n(70),
        S = r(P),
        C = n(71),
        L = r(C),
        M = n(13),
        R = r(M),
        I = n(72),
        B = r(I),
        D = n(73),
        U = r(D),
        F = n(74),
        H = r(F),
        K = n(26),
        z = r(K),
        Z = n(16),
        V = r(Z),
        W = n(41),
        G = r(W),
        Y = n(42),
        X = r(Y),
        $ = n(43),
        Q = r($),
        J = n(107),
        tt = r(J),
        et = n(108),
        nt = r(et);i.default.register({ "attributors/attribute/direction": a.DirectionAttribute, "attributors/class/align": l.AlignClass, "attributors/class/background": y.BackgroundClass, "attributors/class/color": v.ColorClass, "attributors/class/direction": a.DirectionClass, "attributors/class/font": b.FontClass, "attributors/class/size": g.SizeClass, "attributors/style/align": l.AlignStyle, "attributors/style/background": y.BackgroundStyle, "attributors/style/color": v.ColorStyle, "attributors/style/direction": a.DirectionStyle, "attributors/style/font": b.FontStyle, "attributors/style/size": g.SizeStyle }, !0), i.default.register({ "formats/align": l.AlignClass, "formats/direction": a.DirectionClass, "formats/indent": s.IndentClass, "formats/background": y.BackgroundStyle, "formats/color": v.ColorStyle, "formats/font": b.FontClass, "formats/size": g.SizeClass, "formats/blockquote": c.default, "formats/code-block": R.default, "formats/header": h.default, "formats/list": d.default, "formats/bold": _.default, "formats/code": M.Code, "formats/italic": w.default, "formats/link": k.default, "formats/script": N.default, "formats/strike": A.default, "formats/underline": T.default, "formats/image": S.default, "formats/video": L.default, "formats/list/item": p.ListItem, "modules/formula": B.default, "modules/syntax": U.default, "modules/toolbar": H.default, "themes/bubble": tt.default, "themes/snow": nt.default, "ui/icons": z.default, "ui/picker": V.default, "ui/icon-picker": X.default, "ui/color-picker": G.default, "ui/tooltip": Q.default }, !0), e.default = i.default;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
        i = r(o),
        l = n(6),
        a = r(l),
        s = n(3),
        u = r(s),
        c = n(14),
        f = r(c),
        h = n(23),
        p = r(h),
        d = n(31),
        y = r(d),
        v = n(33),
        b = r(v),
        g = n(5),
        m = r(g),
        _ = n(59),
        O = r(_),
        w = n(8),
        x = r(w),
        k = n(60),
        E = r(k),
        N = n(61),
        j = r(N),
        A = n(25),
        q = r(A);a.default.register({ "blots/block": u.default, "blots/block/embed": s.BlockEmbed, "blots/break": f.default, "blots/container": p.default, "blots/cursor": y.default, "blots/embed": b.default, "blots/inline": m.default, "blots/scroll": O.default, "blots/text": x.default, "modules/clipboard": E.default, "modules/history": j.default, "modules/keyboard": q.default }), i.default.register(u.default, f.default, y.default, m.default, O.default, x.default), e.default = a.default;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
      function t() {
        this.head = this.tail = null, this.length = 0;
      }return t.prototype.append = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }this.insertBefore(t[0], null), t.length > 1 && this.append.apply(this, t.slice(1));
      }, t.prototype.contains = function (t) {
        for (var e, n = this.iterator(); e = n();) {
          if (e === t) return !0;
        }return !1;
      }, t.prototype.insertBefore = function (t, e) {
        t && (t.next = e, null != e ? (t.prev = e.prev, null != e.prev && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1);
      }, t.prototype.offset = function (t) {
        for (var e = 0, n = this.head; null != n;) {
          if (n === t) return e;e += n.length(), n = n.next;
        }return -1;
      }, t.prototype.remove = function (t) {
        this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1);
      }, t.prototype.iterator = function (t) {
        return void 0 === t && (t = this.head), function () {
          var e = t;return null != t && (t = t.next), e;
        };
      }, t.prototype.find = function (t, e) {
        void 0 === e && (e = !1);for (var n, r = this.iterator(); n = r();) {
          var o = n.length();if (t < o || e && t === o && (null == n.next || 0 !== n.next.length())) return [n, t];t -= o;
        }return [null, 0];
      }, t.prototype.forEach = function (t) {
        for (var e, n = this.iterator(); e = n();) {
          t(e);
        }
      }, t.prototype.forEachAt = function (t, e, n) {
        if (!(e <= 0)) for (var r, o = this.find(t), i = o[0], l = o[1], a = t - l, s = this.iterator(i); (r = s()) && a < t + e;) {
          var u = r.length();t > a ? n(r, t - a, Math.min(e, a + u - t)) : n(r, 0, Math.min(u, t + e - a)), a += u;
        }
      }, t.prototype.map = function (t) {
        return this.reduce(function (e, n) {
          return e.push(t(n)), e;
        }, []);
      }, t.prototype.reduce = function (t, e) {
        for (var n, r = this.iterator(); n = r();) {
          e = t(e, n);
        }return e;
      }, t;
    }();e.default = r;
  }, function (t, e, n) {
    "use strict";
    var r = this && this.__extends || function () {
      var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      };return function (e, n) {
        function r() {
          this.constructor = e;
        }t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      };
    }();Object.defineProperty(e, "__esModule", { value: !0 });var o = n(17),
        i = n(1),
        l = { attributes: !0, characterData: !0, characterDataOldValue: !0, childList: !0, subtree: !0 },
        a = function (t) {
      function e(e) {
        var n = t.call(this, e) || this;return n.scroll = n, n.observer = new MutationObserver(function (t) {
          n.update(t);
        }), n.observer.observe(n.domNode, l), n.attach(), n;
      }return r(e, t), e.prototype.detach = function () {
        t.prototype.detach.call(this), this.observer.disconnect();
      }, e.prototype.deleteAt = function (e, n) {
        this.update(), 0 === e && n === this.length() ? this.children.forEach(function (t) {
          t.remove();
        }) : t.prototype.deleteAt.call(this, e, n);
      }, e.prototype.formatAt = function (e, n, r, o) {
        this.update(), t.prototype.formatAt.call(this, e, n, r, o);
      }, e.prototype.insertAt = function (e, n, r) {
        this.update(), t.prototype.insertAt.call(this, e, n, r);
      }, e.prototype.optimize = function (e, n) {
        var r = this;void 0 === e && (e = []), void 0 === n && (n = {}), t.prototype.optimize.call(this, n);for (var l = [].slice.call(this.observer.takeRecords()); l.length > 0;) {
          e.push(l.pop());
        }for (var a = function a(t, e) {
          void 0 === e && (e = !0), null != t && t !== r && null != t.domNode.parentNode && (null == t.domNode[i.DATA_KEY].mutations && (t.domNode[i.DATA_KEY].mutations = []), e && a(t.parent));
        }, s = function s(t) {
          null != t.domNode[i.DATA_KEY] && null != t.domNode[i.DATA_KEY].mutations && (t instanceof o.default && t.children.forEach(s), t.optimize(n));
        }, u = e, c = 0; u.length > 0; c += 1) {
          if (c >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");for (u.forEach(function (t) {
            var e = i.find(t.target, !0);null != e && (e.domNode === t.target && ("childList" === t.type ? (a(i.find(t.previousSibling, !1)), [].forEach.call(t.addedNodes, function (t) {
              var e = i.find(t, !1);a(e, !1), e instanceof o.default && e.children.forEach(function (t) {
                a(t, !1);
              });
            })) : "attributes" === t.type && a(e.prev)), a(e));
          }), this.children.forEach(s), u = [].slice.call(this.observer.takeRecords()), l = u.slice(); l.length > 0;) {
            e.push(l.pop());
          }
        }
      }, e.prototype.update = function (e, n) {
        var r = this;void 0 === n && (n = {}), e = e || this.observer.takeRecords(), e.map(function (t) {
          var e = i.find(t.target, !0);return null == e ? null : null == e.domNode[i.DATA_KEY].mutations ? (e.domNode[i.DATA_KEY].mutations = [t], e) : (e.domNode[i.DATA_KEY].mutations.push(t), null);
        }).forEach(function (t) {
          null != t && t !== r && null != t.domNode[i.DATA_KEY] && t.update(t.domNode[i.DATA_KEY].mutations || [], n);
        }), null != this.domNode[i.DATA_KEY].mutations && t.prototype.update.call(this, this.domNode[i.DATA_KEY].mutations, n), this.optimize(e, n);
      }, e.blotName = "scroll", e.defaultChild = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "DIV", e;
    }(o.default);e.default = a;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (Object.keys(t).length !== Object.keys(e).length) return !1;for (var n in t) {
        if (t[n] !== e[n]) return !1;
      }return !0;
    }var o = this && this.__extends || function () {
      var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      };return function (e, n) {
        function r() {
          this.constructor = e;
        }t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      };
    }();Object.defineProperty(e, "__esModule", { value: !0 });var i = n(18),
        l = n(1),
        a = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return o(e, t), e.formats = function (n) {
        if (n.tagName !== e.tagName) return t.formats.call(this, n);
      }, e.prototype.format = function (n, r) {
        var o = this;n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : (this.children.forEach(function (t) {
          t instanceof i.default || (t = t.wrap(e.blotName, !0)), o.attributes.copy(t);
        }), this.unwrap());
      }, e.prototype.formatAt = function (e, n, r, o) {
        if (null != this.formats()[r] || l.query(r, l.Scope.ATTRIBUTE)) {
          this.isolate(e, n).format(r, o);
        } else t.prototype.formatAt.call(this, e, n, r, o);
      }, e.prototype.optimize = function (n) {
        t.prototype.optimize.call(this, n);var o = this.formats();if (0 === Object.keys(o).length) return this.unwrap();var i = this.next;i instanceof e && i.prev === this && r(o, i.formats()) && (i.moveChildren(this), i.remove());
      }, e.blotName = "inline", e.scope = l.Scope.INLINE_BLOT, e.tagName = "SPAN", e;
    }(i.default);e.default = a;
  }, function (t, e, n) {
    "use strict";
    var r = this && this.__extends || function () {
      var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      };return function (e, n) {
        function r() {
          this.constructor = e;
        }t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      };
    }();Object.defineProperty(e, "__esModule", { value: !0 });var o = n(18),
        i = n(1),
        l = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return r(e, t), e.formats = function (n) {
        var r = i.query(e.blotName).tagName;if (n.tagName !== r) return t.formats.call(this, n);
      }, e.prototype.format = function (n, r) {
        null != i.query(n, i.Scope.BLOCK) && (n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : this.replaceWith(e.blotName));
      }, e.prototype.formatAt = function (e, n, r, o) {
        null != i.query(r, i.Scope.BLOCK) ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o);
      }, e.prototype.insertAt = function (e, n, r) {
        if (null == r || null != i.query(n, i.Scope.INLINE)) t.prototype.insertAt.call(this, e, n, r);else {
          var o = this.split(e),
              l = i.create(n, r);o.parent.insertBefore(l, o);
        }
      }, e.prototype.update = function (e, n) {
        navigator.userAgent.match(/Trident/) ? this.build() : t.prototype.update.call(this, e, n);
      }, e.blotName = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "P", e;
    }(o.default);e.default = l;
  }, function (t, e, n) {
    "use strict";
    var r = this && this.__extends || function () {
      var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      };return function (e, n) {
        function r() {
          this.constructor = e;
        }t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      };
    }();Object.defineProperty(e, "__esModule", { value: !0 });var o = n(19),
        i = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return r(e, t), e.formats = function (t) {}, e.prototype.format = function (e, n) {
        t.prototype.formatAt.call(this, 0, this.length(), e, n);
      }, e.prototype.formatAt = function (e, n, r, o) {
        0 === e && n === this.length() ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o);
      }, e.prototype.formats = function () {
        return this.statics.formats(this.domNode);
      }, e;
    }(o.default);e.default = i;
  }, function (t, e, n) {
    "use strict";
    var r = this && this.__extends || function () {
      var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      };return function (e, n) {
        function r() {
          this.constructor = e;
        }t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      };
    }();Object.defineProperty(e, "__esModule", { value: !0 });var o = n(19),
        i = n(1),
        l = function (t) {
      function e(e) {
        var n = t.call(this, e) || this;return n.text = n.statics.value(n.domNode), n;
      }return r(e, t), e.create = function (t) {
        return document.createTextNode(t);
      }, e.value = function (t) {
        var e = t.data;return e.normalize && (e = e.normalize()), e;
      }, e.prototype.deleteAt = function (t, e) {
        this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e);
      }, e.prototype.index = function (t, e) {
        return this.domNode === t ? e : -1;
      }, e.prototype.insertAt = function (e, n, r) {
        null == r ? (this.text = this.text.slice(0, e) + n + this.text.slice(e), this.domNode.data = this.text) : t.prototype.insertAt.call(this, e, n, r);
      }, e.prototype.length = function () {
        return this.text.length;
      }, e.prototype.optimize = function (n) {
        t.prototype.optimize.call(this, n), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
      }, e.prototype.position = function (t, e) {
        return void 0 === e && (e = !1), [this.domNode, t];
      }, e.prototype.split = function (t, e) {
        if (void 0 === e && (e = !1), !e) {
          if (0 === t) return this;if (t === this.length()) return this.next;
        }var n = i.create(this.domNode.splitText(t));return this.parent.insertBefore(n, this.next), this.text = this.statics.value(this.domNode), n;
      }, e.prototype.update = function (t, e) {
        var n = this;t.some(function (t) {
          return "characterData" === t.type && t.target === n.domNode;
        }) && (this.text = this.statics.value(this.domNode));
      }, e.prototype.value = function () {
        return this.text;
      }, e.blotName = "text", e.scope = i.Scope.INLINE_BLOT, e;
    }(o.default);e.default = l;
  }, function (t, e, n) {
    "use strict";
    var r = document.createElement("div");if (r.classList.toggle("test-class", !1), r.classList.contains("test-class")) {
      var o = DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle = function (t, e) {
        return arguments.length > 1 && !this.contains(t) == !e ? e : o.call(this, t);
      };
    }String.prototype.startsWith || (String.prototype.startsWith = function (t, e) {
      return e = e || 0, this.substr(e, t.length) === t;
    }), String.prototype.endsWith || (String.prototype.endsWith = function (t, e) {
      var n = this.toString();("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length), e -= t.length;var r = n.indexOf(t, e);return -1 !== r && r === e;
    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function value(t) {
        if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");if ("function" != typeof t) throw new TypeError("predicate must be a function");for (var e, n = Object(this), r = n.length >>> 0, o = arguments[1], i = 0; i < r; i++) {
          if (e = n[i], t.call(o, e, i, n)) return e;
        }
      } }), document.addEventListener("DOMContentLoaded", function () {
      document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1);
    });
  }, function (t, e) {
    function n(t, e, n) {
      if (t == e) return t ? [[v, t]] : [];(n < 0 || t.length < n) && (n = null);var o = l(t, e),
          i = t.substring(0, o);t = t.substring(o), e = e.substring(o), o = a(t, e);var s = t.substring(t.length - o);t = t.substring(0, t.length - o), e = e.substring(0, e.length - o);var c = r(t, e);return i && c.unshift([v, i]), s && c.push([v, s]), u(c), null != n && (c = f(c, n)), c = h(c);
    }function r(t, e) {
      var r;if (!t) return [[y, e]];if (!e) return [[d, t]];var i = t.length > e.length ? t : e,
          l = t.length > e.length ? e : t,
          a = i.indexOf(l);if (-1 != a) return r = [[y, i.substring(0, a)], [v, l], [y, i.substring(a + l.length)]], t.length > e.length && (r[0][0] = r[2][0] = d), r;if (1 == l.length) return [[d, t], [y, e]];var u = s(t, e);if (u) {
        var c = u[0],
            f = u[1],
            h = u[2],
            p = u[3],
            b = u[4],
            g = n(c, h),
            m = n(f, p);return g.concat([[v, b]], m);
      }return o(t, e);
    }function o(t, e) {
      for (var n = t.length, r = e.length, o = Math.ceil((n + r) / 2), l = o, a = 2 * o, s = new Array(a), u = new Array(a), c = 0; c < a; c++) {
        s[c] = -1, u[c] = -1;
      }s[l + 1] = 0, u[l + 1] = 0;for (var f = n - r, h = f % 2 != 0, p = 0, v = 0, b = 0, g = 0, m = 0; m < o; m++) {
        for (var _ = -m + p; _ <= m - v; _ += 2) {
          var O,
              w = l + _;O = _ == -m || _ != m && s[w - 1] < s[w + 1] ? s[w + 1] : s[w - 1] + 1;for (var x = O - _; O < n && x < r && t.charAt(O) == e.charAt(x);) {
            O++, x++;
          }if (s[w] = O, O > n) v += 2;else if (x > r) p += 2;else if (h) {
            var k = l + f - _;if (k >= 0 && k < a && -1 != u[k]) {
              var E = n - u[k];if (O >= E) return i(t, e, O, x);
            }
          }
        }for (var N = -m + b; N <= m - g; N += 2) {
          var E,
              k = l + N;E = N == -m || N != m && u[k - 1] < u[k + 1] ? u[k + 1] : u[k - 1] + 1;for (var j = E - N; E < n && j < r && t.charAt(n - E - 1) == e.charAt(r - j - 1);) {
            E++, j++;
          }if (u[k] = E, E > n) g += 2;else if (j > r) b += 2;else if (!h) {
            var w = l + f - N;if (w >= 0 && w < a && -1 != s[w]) {
              var O = s[w],
                  x = l + O - w;if (E = n - E, O >= E) return i(t, e, O, x);
            }
          }
        }
      }return [[d, t], [y, e]];
    }function i(t, e, r, o) {
      var i = t.substring(0, r),
          l = e.substring(0, o),
          a = t.substring(r),
          s = e.substring(o),
          u = n(i, l),
          c = n(a, s);return u.concat(c);
    }function l(t, e) {
      if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) {
        t.substring(i, o) == e.substring(i, o) ? (n = o, i = n) : r = o, o = Math.floor((r - n) / 2 + n);
      }return o;
    }function a(t, e) {
      if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) {
        t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i) ? (n = o, i = n) : r = o, o = Math.floor((r - n) / 2 + n);
      }return o;
    }function s(t, e) {
      function n(t, e, n) {
        for (var r, o, i, s, u = t.substring(n, n + Math.floor(t.length / 4)), c = -1, f = ""; -1 != (c = e.indexOf(u, c + 1));) {
          var h = l(t.substring(n), e.substring(c)),
              p = a(t.substring(0, n), e.substring(0, c));f.length < p + h && (f = e.substring(c - p, c) + e.substring(c, c + h), r = t.substring(0, n - p), o = t.substring(n + h), i = e.substring(0, c - p), s = e.substring(c + h));
        }return 2 * f.length >= t.length ? [r, o, i, s, f] : null;
      }var r = t.length > e.length ? t : e,
          o = t.length > e.length ? e : t;if (r.length < 4 || 2 * o.length < r.length) return null;var i,
          s = n(r, o, Math.ceil(r.length / 4)),
          u = n(r, o, Math.ceil(r.length / 2));if (!s && !u) return null;i = u ? s && s[4].length > u[4].length ? s : u : s;var c, f, h, p;return t.length > e.length ? (c = i[0], f = i[1], h = i[2], p = i[3]) : (h = i[0], p = i[1], c = i[2], f = i[3]), [c, f, h, p, i[4]];
    }function u(t) {
      t.push([v, ""]);for (var e, n = 0, r = 0, o = 0, i = "", s = ""; n < t.length;) {
        switch (t[n][0]) {case y:
            o++, s += t[n][1], n++;break;case d:
            r++, i += t[n][1], n++;break;case v:
            r + o > 1 ? (0 !== r && 0 !== o && (e = l(s, i), 0 !== e && (n - r - o > 0 && t[n - r - o - 1][0] == v ? t[n - r - o - 1][1] += s.substring(0, e) : (t.splice(0, 0, [v, s.substring(0, e)]), n++), s = s.substring(e), i = i.substring(e)), 0 !== (e = a(s, i)) && (t[n][1] = s.substring(s.length - e) + t[n][1], s = s.substring(0, s.length - e), i = i.substring(0, i.length - e))), 0 === r ? t.splice(n - o, r + o, [y, s]) : 0 === o ? t.splice(n - r, r + o, [d, i]) : t.splice(n - r - o, r + o, [d, i], [y, s]), n = n - r - o + (r ? 1 : 0) + (o ? 1 : 0) + 1) : 0 !== n && t[n - 1][0] == v ? (t[n - 1][1] += t[n][1], t.splice(n, 1)) : n++, o = 0, r = 0, i = "", s = "";}
      }"" === t[t.length - 1][1] && t.pop();var c = !1;for (n = 1; n < t.length - 1;) {
        t[n - 1][0] == v && t[n + 1][0] == v && (t[n][1].substring(t[n][1].length - t[n - 1][1].length) == t[n - 1][1] ? (t[n][1] = t[n - 1][1] + t[n][1].substring(0, t[n][1].length - t[n - 1][1].length), t[n + 1][1] = t[n - 1][1] + t[n + 1][1], t.splice(n - 1, 1), c = !0) : t[n][1].substring(0, t[n + 1][1].length) == t[n + 1][1] && (t[n - 1][1] += t[n + 1][1], t[n][1] = t[n][1].substring(t[n + 1][1].length) + t[n + 1][1], t.splice(n + 1, 1), c = !0)), n++;
      }c && u(t);
    }function c(t, e) {
      if (0 === e) return [v, t];for (var n = 0, r = 0; r < t.length; r++) {
        var o = t[r];if (o[0] === d || o[0] === v) {
          var i = n + o[1].length;if (e === i) return [r + 1, t];if (e < i) {
            t = t.slice();var l = e - n,
                a = [o[0], o[1].slice(0, l)],
                s = [o[0], o[1].slice(l)];return t.splice(r, 1, a, s), [r + 1, t];
          }n = i;
        }
      }throw new Error("cursor_pos is out of bounds!");
    }function f(t, e) {
      var n = c(t, e),
          r = n[1],
          o = n[0],
          i = r[o],
          l = r[o + 1];if (null == i) return t;if (i[0] !== v) return t;if (null != l && i[1] + l[1] === l[1] + i[1]) return r.splice(o, 2, l, i), p(r, o, 2);if (null != l && 0 === l[1].indexOf(i[1])) {
        r.splice(o, 2, [l[0], i[1]], [0, i[1]]);var a = l[1].slice(i[1].length);return a.length > 0 && r.splice(o + 2, 0, [l[0], a]), p(r, o, 3);
      }return t;
    }function h(t) {
      for (var e = !1, n = function n(t) {
        return t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343;
      }, r = 2; r < t.length; r += 1) {
        t[r - 2][0] === v && function (t) {
          return t.charCodeAt(t.length - 1) >= 55296 && t.charCodeAt(t.length - 1) <= 56319;
        }(t[r - 2][1]) && t[r - 1][0] === d && n(t[r - 1][1]) && t[r][0] === y && n(t[r][1]) && (e = !0, t[r - 1][1] = t[r - 2][1].slice(-1) + t[r - 1][1], t[r][1] = t[r - 2][1].slice(-1) + t[r][1], t[r - 2][1] = t[r - 2][1].slice(0, -1));
      }if (!e) return t;for (var o = [], r = 0; r < t.length; r += 1) {
        t[r][1].length > 0 && o.push(t[r]);
      }return o;
    }function p(t, e, n) {
      for (var r = e + n - 1; r >= 0 && r >= e - 1; r--) {
        if (r + 1 < t.length) {
          var o = t[r],
              i = t[r + 1];o[0] === i[1] && t.splice(r, 2, [o[0], o[1] + i[1]]);
        }
      }return t;
    }var d = -1,
        y = 1,
        v = 0,
        b = n;b.INSERT = y, b.DELETE = d, b.EQUAL = v, t.exports = b;
  }, function (t, e) {
    function n(t) {
      var e = [];for (var n in t) {
        e.push(n);
      }return e;
    }e = t.exports = "function" == typeof Object.keys ? Object.keys : n, e.shim = n;
  }, function (t, e) {
    function n(t) {
      return "[object Arguments]" == Object.prototype.toString.call(t);
    }function r(t) {
      return t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1;
    }var o = "[object Arguments]" == function () {
      return Object.prototype.toString.call(arguments);
    }();e = t.exports = o ? n : r, e.supported = n, e.unsupported = r;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    }function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function l(t, e) {
      return Object.keys(e).reduce(function (n, r) {
        return null == t[r] ? n : (e[r] === t[r] ? n[r] = e[r] : Array.isArray(e[r]) ? e[r].indexOf(t[r]) < 0 && (n[r] = e[r].concat([t[r]])) : n[r] = [e[r], t[r]], n);
      }, {});
    }function a(t) {
      return t.reduce(function (t, e) {
        if (1 === e.insert) {
          var n = (0, N.default)(e.attributes);return delete n.image, t.insert({ image: e.attributes.image }, n);
        }if (null == e.attributes || !0 !== e.attributes.list && !0 !== e.attributes.bullet || (e = (0, N.default)(e), e.attributes.list ? e.attributes.list = "ordered" : (e.attributes.list = "bullet", delete e.attributes.bullet)), "string" == typeof e.insert) {
          var r = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");return t.insert(r, e.attributes);
        }return t.push(e);
      }, new h.default());
    }Object.defineProperty(e, "__esModule", { value: !0 });var s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        u = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;try {
          for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          o = !0, i = t;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        c = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        f = n(4),
        h = r(f),
        p = n(20),
        d = r(p),
        y = n(0),
        v = r(y),
        b = n(13),
        g = r(b),
        m = n(31),
        _ = r(m),
        O = n(3),
        w = r(O),
        x = n(14),
        k = r(x),
        E = n(21),
        N = r(E),
        j = n(12),
        A = r(j),
        q = n(2),
        T = r(q),
        P = /^[ -~]*$/,
        S = function () {
      function t(e) {
        i(this, t), this.scroll = e, this.delta = this.getDelta();
      }return c(t, [{ key: "applyDelta", value: function value(t) {
          var e = this,
              n = !1;this.scroll.update();var r = this.scroll.length();return this.scroll.batchStart(), t = a(t), t.reduce(function (t, o) {
            var i = o.retain || o.delete || o.insert.length || 1,
                l = o.attributes || {};if (null != o.insert) {
              if ("string" == typeof o.insert) {
                var a = o.insert;a.endsWith("\n") && n && (n = !1, a = a.slice(0, -1)), t >= r && !a.endsWith("\n") && (n = !0), e.scroll.insertAt(t, a);var c = e.scroll.line(t),
                    f = u(c, 2),
                    h = f[0],
                    p = f[1],
                    y = (0, T.default)({}, (0, O.bubbleFormats)(h));if (h instanceof w.default) {
                  var b = h.descendant(v.default.Leaf, p),
                      g = u(b, 1),
                      m = g[0];y = (0, T.default)(y, (0, O.bubbleFormats)(m));
                }l = d.default.attributes.diff(y, l) || {};
              } else if ("object" === s(o.insert)) {
                var _ = Object.keys(o.insert)[0];if (null == _) return t;e.scroll.insertAt(t, _, o.insert[_]);
              }r += i;
            }return Object.keys(l).forEach(function (n) {
              e.scroll.formatAt(t, i, n, l[n]);
            }), t + i;
          }, 0), t.reduce(function (t, n) {
            return "number" == typeof n.delete ? (e.scroll.deleteAt(t, n.delete), t) : t + (n.retain || n.insert.length || 1);
          }, 0), this.scroll.batchEnd(), this.update(t);
        } }, { key: "deleteText", value: function value(t, e) {
          return this.scroll.deleteAt(t, e), this.update(new h.default().retain(t).delete(e));
        } }, { key: "formatLine", value: function value(t, e) {
          var n = this,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};return this.scroll.update(), Object.keys(r).forEach(function (o) {
            if (null == n.scroll.whitelist || n.scroll.whitelist[o]) {
              var i = n.scroll.lines(t, Math.max(e, 1)),
                  l = e;i.forEach(function (e) {
                var i = e.length();if (e instanceof g.default) {
                  var a = t - e.offset(n.scroll),
                      s = e.newlineIndex(a + l) - a + 1;e.formatAt(a, s, o, r[o]);
                } else e.format(o, r[o]);l -= i;
              });
            }
          }), this.scroll.optimize(), this.update(new h.default().retain(t).retain(e, (0, N.default)(r)));
        } }, { key: "formatText", value: function value(t, e) {
          var n = this,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};return Object.keys(r).forEach(function (o) {
            n.scroll.formatAt(t, e, o, r[o]);
          }), this.update(new h.default().retain(t).retain(e, (0, N.default)(r)));
        } }, { key: "getContents", value: function value(t, e) {
          return this.delta.slice(t, t + e);
        } }, { key: "getDelta", value: function value() {
          return this.scroll.lines().reduce(function (t, e) {
            return t.concat(e.delta());
          }, new h.default());
        } }, { key: "getFormat", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = [],
              r = [];0 === e ? this.scroll.path(t).forEach(function (t) {
            var e = u(t, 1),
                o = e[0];o instanceof w.default ? n.push(o) : o instanceof v.default.Leaf && r.push(o);
          }) : (n = this.scroll.lines(t, e), r = this.scroll.descendants(v.default.Leaf, t, e));var o = [n, r].map(function (t) {
            if (0 === t.length) return {};for (var e = (0, O.bubbleFormats)(t.shift()); Object.keys(e).length > 0;) {
              var n = t.shift();if (null == n) return e;e = l((0, O.bubbleFormats)(n), e);
            }return e;
          });return T.default.apply(T.default, o);
        } }, { key: "getText", value: function value(t, e) {
          return this.getContents(t, e).filter(function (t) {
            return "string" == typeof t.insert;
          }).map(function (t) {
            return t.insert;
          }).join("");
        } }, { key: "insertEmbed", value: function value(t, e, n) {
          return this.scroll.insertAt(t, e, n), this.update(new h.default().retain(t).insert(o({}, e, n)));
        } }, { key: "insertText", value: function value(t, e) {
          var n = this,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(r).forEach(function (o) {
            n.scroll.formatAt(t, e.length, o, r[o]);
          }), this.update(new h.default().retain(t).insert(e, (0, N.default)(r)));
        } }, { key: "isBlank", value: function value() {
          if (0 == this.scroll.children.length) return !0;if (this.scroll.children.length > 1) return !1;var t = this.scroll.children.head;return t.statics.blotName === w.default.blotName && !(t.children.length > 1) && t.children.head instanceof k.default;
        } }, { key: "removeFormat", value: function value(t, e) {
          var n = this.getText(t, e),
              r = this.scroll.line(t + e),
              o = u(r, 2),
              i = o[0],
              l = o[1],
              a = 0,
              s = new h.default();null != i && (a = i instanceof g.default ? i.newlineIndex(l) - l + 1 : i.length() - l, s = i.delta().slice(l, l + a - 1).insert("\n"));var c = this.getContents(t, e + a),
              f = c.diff(new h.default().insert(n).concat(s)),
              p = new h.default().retain(t).concat(f);return this.applyDelta(p);
        } }, { key: "update", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
              r = this.delta;if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(P) && v.default.find(e[0].target)) {
            var o = v.default.find(e[0].target),
                i = (0, O.bubbleFormats)(o),
                l = o.offset(this.scroll),
                a = e[0].oldValue.replace(_.default.CONTENTS, ""),
                s = new h.default().insert(a),
                u = new h.default().insert(o.value());t = new h.default().retain(l).concat(s.diff(u, n)).reduce(function (t, e) {
              return e.insert ? t.insert(e.insert, i) : t.push(e);
            }, new h.default()), this.delta = r.compose(t);
          } else this.delta = this.getDelta(), t && (0, A.default)(r.compose(t), this.delta) || (t = r.diff(this.delta, n));return t;
        } }]), t;
    }();e.default = S;
  }, function (t, e) {
    "use strict";
    function n() {}function r(t, e, n) {
      this.fn = t, this.context = e, this.once = n || !1;
    }function o() {
      this._events = new n(), this._eventsCount = 0;
    }var i = Object.prototype.hasOwnProperty,
        l = "~";Object.create && (n.prototype = Object.create(null), new n().__proto__ || (l = !1)), o.prototype.eventNames = function () {
      var t,
          e,
          n = [];if (0 === this._eventsCount) return n;for (e in t = this._events) {
        i.call(t, e) && n.push(l ? e.slice(1) : e);
      }return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n;
    }, o.prototype.listeners = function (t, e) {
      var n = l ? l + t : t,
          r = this._events[n];if (e) return !!r;if (!r) return [];if (r.fn) return [r.fn];for (var o = 0, i = r.length, a = new Array(i); o < i; o++) {
        a[o] = r[o].fn;
      }return a;
    }, o.prototype.emit = function (t, e, n, r, o, i) {
      var a = l ? l + t : t;if (!this._events[a]) return !1;var s,
          u,
          c = this._events[a],
          f = arguments.length;if (c.fn) {
        switch (c.once && this.removeListener(t, c.fn, void 0, !0), f) {case 1:
            return c.fn.call(c.context), !0;case 2:
            return c.fn.call(c.context, e), !0;case 3:
            return c.fn.call(c.context, e, n), !0;case 4:
            return c.fn.call(c.context, e, n, r), !0;case 5:
            return c.fn.call(c.context, e, n, r, o), !0;case 6:
            return c.fn.call(c.context, e, n, r, o, i), !0;}for (u = 1, s = new Array(f - 1); u < f; u++) {
          s[u - 1] = arguments[u];
        }c.fn.apply(c.context, s);
      } else {
        var h,
            p = c.length;for (u = 0; u < p; u++) {
          switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), f) {case 1:
              c[u].fn.call(c[u].context);break;case 2:
              c[u].fn.call(c[u].context, e);break;case 3:
              c[u].fn.call(c[u].context, e, n);break;case 4:
              c[u].fn.call(c[u].context, e, n, r);break;default:
              if (!s) for (h = 1, s = new Array(f - 1); h < f; h++) {
                s[h - 1] = arguments[h];
              }c[u].fn.apply(c[u].context, s);}
        }
      }return !0;
    }, o.prototype.on = function (t, e, n) {
      var o = new r(e, n || this),
          i = l ? l + t : t;return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], o] : this._events[i].push(o) : (this._events[i] = o, this._eventsCount++), this;
    }, o.prototype.once = function (t, e, n) {
      var o = new r(e, n || this, !0),
          i = l ? l + t : t;return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], o] : this._events[i].push(o) : (this._events[i] = o, this._eventsCount++), this;
    }, o.prototype.removeListener = function (t, e, r, o) {
      var i = l ? l + t : t;if (!this._events[i]) return this;if (!e) return 0 == --this._eventsCount ? this._events = new n() : delete this._events[i], this;var a = this._events[i];if (a.fn) a.fn !== e || o && !a.once || r && a.context !== r || (0 == --this._eventsCount ? this._events = new n() : delete this._events[i]);else {
        for (var s = 0, u = [], c = a.length; s < c; s++) {
          (a[s].fn !== e || o && !a[s].once || r && a[s].context !== r) && u.push(a[s]);
        }u.length ? this._events[i] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new n() : delete this._events[i];
      }return this;
    }, o.prototype.removeAllListeners = function (t) {
      var e;return t ? (e = l ? l + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new n() : delete this._events[e])) : (this._events = new n(), this._eventsCount = 0), this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function () {
      return this;
    }, o.prefixed = l, o.EventEmitter = o, void 0 !== t && (t.exports = o);
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }function a(t) {
      return t instanceof v.default || t instanceof y.BlockEmbed;
    }Object.defineProperty(e, "__esModule", { value: !0 });var s = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;try {
          for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          o = !0, i = t;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        u = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        c = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        f = n(0),
        h = r(f),
        p = n(9),
        d = r(p),
        y = n(3),
        v = r(y),
        b = n(14),
        g = r(b),
        m = n(13),
        _ = r(m),
        O = n(23),
        w = r(O),
        x = function (t) {
      function e(t, n) {
        o(this, e);var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));return r.emitter = n.emitter, Array.isArray(n.whitelist) && (r.whitelist = n.whitelist.reduce(function (t, e) {
          return t[e] = !0, t;
        }, {})), r.domNode.addEventListener("DOMNodeInserted", function () {}), r.optimize(), r.enable(), r;
      }return l(e, t), u(e, [{ key: "batchStart", value: function value() {
          this.batch = !0;
        } }, { key: "batchEnd", value: function value() {
          this.batch = !1, this.optimize();
        } }, { key: "deleteAt", value: function value(t, n) {
          var r = this.line(t),
              o = s(r, 2),
              i = o[0],
              l = o[1],
              a = this.line(t + n),
              u = s(a, 1),
              f = u[0];if (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), null != f && i !== f && l > 0) {
            if (i instanceof y.BlockEmbed || f instanceof y.BlockEmbed) return void this.optimize();if (i instanceof _.default) {
              var h = i.newlineIndex(i.length(), !0);if (h > -1 && (i = i.split(h + 1)) === f) return void this.optimize();
            } else if (f instanceof _.default) {
              var p = f.newlineIndex(0);p > -1 && f.split(p + 1);
            }var d = f.children.head instanceof g.default ? null : f.children.head;i.moveChildren(f, d), i.remove();
          }this.optimize();
        } }, { key: "enable", value: function value() {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];this.domNode.setAttribute("contenteditable", t);
        } }, { key: "formatAt", value: function value(t, n, r, o) {
          (null == this.whitelist || this.whitelist[r]) && (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, o), this.optimize());
        } }, { key: "insertAt", value: function value(t, n, r) {
          if (null == r || null == this.whitelist || this.whitelist[n]) {
            if (t >= this.length()) {
              if (null == r || null == h.default.query(n, h.default.Scope.BLOCK)) {
                var o = h.default.create(this.statics.defaultChild);this.appendChild(o), null == r && n.endsWith("\n") && (n = n.slice(0, -1)), o.insertAt(0, n, r);
              } else {
                var i = h.default.create(n, r);this.appendChild(i);
              }
            } else c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);this.optimize();
          }
        } }, { key: "insertBefore", value: function value(t, n) {
          if (t.statics.scope === h.default.Scope.INLINE_BLOT) {
            var r = h.default.create(this.statics.defaultChild);r.appendChild(t), t = r;
          }c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n);
        } }, { key: "leaf", value: function value(t) {
          return this.path(t).pop() || [null, -1];
        } }, { key: "line", value: function value(t) {
          return t === this.length() ? this.line(t - 1) : this.descendant(a, t);
        } }, { key: "lines", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;return function t(e, n, r) {
            var o = [],
                i = r;return e.children.forEachAt(n, r, function (e, n, r) {
              a(e) ? o.push(e) : e instanceof h.default.Container && (o = o.concat(t(e, n, i))), i -= r;
            }), o;
          }(this, t, e);
        } }, { key: "optimize", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};!0 !== this.batch && (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t, n), t.length > 0 && this.emitter.emit(d.default.events.SCROLL_OPTIMIZE, t, n));
        } }, { key: "path", value: function value(t) {
          return c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t).slice(1);
        } }, { key: "update", value: function value(t) {
          if (!0 !== this.batch) {
            var n = d.default.sources.USER;"string" == typeof t && (n = t), Array.isArray(t) || (t = this.observer.takeRecords()), t.length > 0 && this.emitter.emit(d.default.events.SCROLL_BEFORE_UPDATE, n, t), c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this, t.concat([])), t.length > 0 && this.emitter.emit(d.default.events.SCROLL_UPDATE, n, t);
          }
        } }]), e;
    }(h.default.Scroll);x.blotName = "scroll", x.className = "ql-editor", x.tagName = "DIV", x.defaultChild = "block", x.allowedChildren = [v.default, y.BlockEmbed, w.default], e.default = x;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    }function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function l(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }function s(t, e, n) {
      return "object" === (void 0 === e ? "undefined" : x(e)) ? Object.keys(e).reduce(function (t, n) {
        return s(t, n, e[n]);
      }, t) : t.reduce(function (t, r) {
        return r.attributes && r.attributes[e] ? t.push(r) : t.insert(r.insert, (0, j.default)({}, o({}, e, n), r.attributes));
      }, new q.default());
    }function u(t) {
      if (t.nodeType !== Node.ELEMENT_NODE) return {};return t["__ql-computed-style"] || (t["__ql-computed-style"] = window.getComputedStyle(t));
    }function c(t, e) {
      for (var n = "", r = t.ops.length - 1; r >= 0 && n.length < e.length; --r) {
        var o = t.ops[r];if ("string" != typeof o.insert) break;n = o.insert + n;
      }return n.slice(-1 * e.length) === e;
    }function f(t) {
      return 0 !== t.childNodes.length && ["block", "list-item"].indexOf(u(t).display) > -1;
    }function h(t, e, n) {
      return t.nodeType === t.TEXT_NODE ? n.reduce(function (e, n) {
        return n(t, e);
      }, new q.default()) : t.nodeType === t.ELEMENT_NODE ? [].reduce.call(t.childNodes || [], function (r, o) {
        var i = h(o, e, n);return o.nodeType === t.ELEMENT_NODE && (i = e.reduce(function (t, e) {
          return e(o, t);
        }, i), i = (o[W] || []).reduce(function (t, e) {
          return e(o, t);
        }, i)), r.concat(i);
      }, new q.default()) : new q.default();
    }function p(t, e, n) {
      return s(n, t, !0);
    }function d(t, e) {
      var n = P.default.Attributor.Attribute.keys(t),
          r = P.default.Attributor.Class.keys(t),
          o = P.default.Attributor.Style.keys(t),
          i = {};return n.concat(r).concat(o).forEach(function (e) {
        var n = P.default.query(e, P.default.Scope.ATTRIBUTE);null != n && (i[n.attrName] = n.value(t), i[n.attrName]) || (n = Y[e], null == n || n.attrName !== e && n.keyName !== e || (i[n.attrName] = n.value(t) || void 0), null == (n = X[e]) || n.attrName !== e && n.keyName !== e || (n = X[e], i[n.attrName] = n.value(t) || void 0));
      }), Object.keys(i).length > 0 && (e = s(e, i)), e;
    }function y(t, e) {
      var n = P.default.query(t);if (null == n) return e;if (n.prototype instanceof P.default.Embed) {
        var r = {},
            o = n.value(t);null != o && (r[n.blotName] = o, e = new q.default().insert(r, n.formats(t)));
      } else "function" == typeof n.formats && (e = s(e, n.blotName, n.formats(t)));return e;
    }function v(t, e) {
      return c(e, "\n") || e.insert("\n"), e;
    }function b() {
      return new q.default();
    }function g(t, e) {
      var n = P.default.query(t);if (null == n || "list-item" !== n.blotName || !c(e, "\n")) return e;for (var r = -1, o = t.parentNode; !o.classList.contains("ql-clipboard");) {
        "list" === (P.default.query(o) || {}).blotName && (r += 1), o = o.parentNode;
      }return r <= 0 ? e : e.compose(new q.default().retain(e.length() - 1).retain(1, { indent: r }));
    }function m(t, e) {
      return c(e, "\n") || (f(t) || e.length() > 0 && t.nextSibling && f(t.nextSibling)) && e.insert("\n"), e;
    }function _(t, e) {
      if (f(t) && null != t.nextElementSibling && !c(e, "\n\n")) {
        var n = t.offsetHeight + parseFloat(u(t).marginTop) + parseFloat(u(t).marginBottom);t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n && e.insert("\n");
      }return e;
    }function O(t, e) {
      var n = {},
          r = t.style || {};return r.fontStyle && "italic" === u(t).fontStyle && (n.italic = !0), r.fontWeight && (u(t).fontWeight.startsWith("bold") || parseInt(u(t).fontWeight) >= 700) && (n.bold = !0), Object.keys(n).length > 0 && (e = s(e, n)), parseFloat(r.textIndent || 0) > 0 && (e = new q.default().insert("\t").concat(e)), e;
    }function w(t, e) {
      var n = t.data;if ("O:P" === t.parentNode.tagName) return e.insert(n.trim());if (0 === n.trim().length && t.parentNode.classList.contains("ql-clipboard")) return e;if (!u(t.parentNode).whiteSpace.startsWith("pre")) {
        var r = function r(t, e) {
          return e = e.replace(/[^\u00a0]/g, ""), e.length < 1 && t ? " " : e;
        };n = n.replace(/\r\n/g, " ").replace(/\n/g, " "), n = n.replace(/\s\s+/g, r.bind(r, !0)), (null == t.previousSibling && f(t.parentNode) || null != t.previousSibling && f(t.previousSibling)) && (n = n.replace(/^\s+/, r.bind(r, !1))), (null == t.nextSibling && f(t.parentNode) || null != t.nextSibling && f(t.nextSibling)) && (n = n.replace(/\s+$/, r.bind(r, !1)));
      }return e.insert(n);
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.matchText = e.matchSpacing = e.matchNewline = e.matchBlot = e.matchAttributor = e.default = void 0;var x = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        k = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;try {
          for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          o = !0, i = t;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        E = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        N = n(2),
        j = r(N),
        A = n(4),
        q = r(A),
        T = n(0),
        P = r(T),
        S = n(6),
        C = r(S),
        L = n(10),
        M = r(L),
        R = n(7),
        I = r(R),
        B = n(34),
        D = n(35),
        U = n(13),
        F = r(U),
        H = n(24),
        K = n(36),
        z = n(37),
        Z = n(38),
        V = (0, M.default)("quill:clipboard"),
        W = "__ql-matcher",
        G = [[Node.TEXT_NODE, w], [Node.TEXT_NODE, m], ["br", v], [Node.ELEMENT_NODE, m], [Node.ELEMENT_NODE, y], [Node.ELEMENT_NODE, _], [Node.ELEMENT_NODE, d], [Node.ELEMENT_NODE, O], ["li", g], ["b", p.bind(p, "bold")], ["i", p.bind(p, "italic")], ["style", b]],
        Y = [B.AlignAttribute, K.DirectionAttribute].reduce(function (t, e) {
      return t[e.keyName] = e, t;
    }, {}),
        X = [B.AlignStyle, D.BackgroundStyle, H.ColorStyle, K.DirectionStyle, z.FontStyle, Z.SizeStyle].reduce(function (t, e) {
      return t[e.keyName] = e, t;
    }, {}),
        $ = function (t) {
      function e(t, n) {
        i(this, e);var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));return r.quill.root.addEventListener("paste", r.onPaste.bind(r)), r.container = r.quill.addContainer("ql-clipboard"), r.container.setAttribute("contenteditable", !0), r.container.setAttribute("tabindex", -1), r.matchers = [], G.concat(r.options.matchers).forEach(function (t) {
          var e = k(t, 2),
              o = e[0],
              i = e[1];(n.matchVisual || i !== _) && r.addMatcher(o, i);
        }), r;
      }return a(e, t), E(e, [{ key: "addMatcher", value: function value(t, e) {
          this.matchers.push([t, e]);
        } }, { key: "convert", value: function value(t) {
          if ("string" == typeof t) return this.container.innerHTML = t.replace(/\>\r?\n +\</g, "><"), this.convert();var e = this.quill.getFormat(this.quill.selection.savedRange.index);if (e[F.default.blotName]) {
            var n = this.container.innerText;return this.container.innerHTML = "", new q.default().insert(n, o({}, F.default.blotName, e[F.default.blotName]));
          }var r = this.prepareMatching(),
              i = k(r, 2),
              l = i[0],
              a = i[1],
              s = h(this.container, l, a);return c(s, "\n") && null == s.ops[s.ops.length - 1].attributes && (s = s.compose(new q.default().retain(s.length() - 1).delete(1))), V.log("convert", this.container.innerHTML, s), this.container.innerHTML = "", s;
        } }, { key: "dangerouslyPasteHTML", value: function value(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.default.sources.API;if ("string" == typeof t) this.quill.setContents(this.convert(t), e), this.quill.setSelection(0, C.default.sources.SILENT);else {
            var r = this.convert(e);this.quill.updateContents(new q.default().retain(t).concat(r), n), this.quill.setSelection(t + r.length(), C.default.sources.SILENT);
          }
        } }, { key: "onPaste", value: function value(t) {
          var e = this;if (!t.defaultPrevented && this.quill.isEnabled()) {
            var n = this.quill.getSelection(),
                r = new q.default().retain(n.index),
                o = this.quill.scrollingContainer.scrollTop;this.container.focus(), this.quill.selection.update(C.default.sources.SILENT), setTimeout(function () {
              r = r.concat(e.convert()).delete(n.length), e.quill.updateContents(r, C.default.sources.USER), e.quill.setSelection(r.length() - n.length, C.default.sources.SILENT), e.quill.scrollingContainer.scrollTop = o, e.quill.focus();
            }, 1);
          }
        } }, { key: "prepareMatching", value: function value() {
          var t = this,
              e = [],
              n = [];return this.matchers.forEach(function (r) {
            var o = k(r, 2),
                i = o[0],
                l = o[1];switch (i) {case Node.TEXT_NODE:
                n.push(l);break;case Node.ELEMENT_NODE:
                e.push(l);break;default:
                [].forEach.call(t.container.querySelectorAll(i), function (t) {
                  t[W] = t[W] || [], t[W].push(l);
                });}
          }), [e, n];
        } }]), e;
    }(I.default);$.DEFAULTS = { matchers: [], matchVisual: !0 }, e.default = $, e.matchAttributor = d, e.matchBlot = y, e.matchNewline = m, e.matchSpacing = _, e.matchText = w;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }function a(t) {
      var e = t.ops[t.ops.length - 1];return null != e && (null != e.insert ? "string" == typeof e.insert && e.insert.endsWith("\n") : null != e.attributes && Object.keys(e.attributes).some(function (t) {
        return null != f.default.query(t, f.default.Scope.BLOCK);
      }));
    }function s(t) {
      var e = t.reduce(function (t, e) {
        return t += e.delete || 0;
      }, 0),
          n = t.length() - e;return a(t) && (n -= 1), n;
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.getLastChangeIndex = e.default = void 0;var u = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        c = n(0),
        f = r(c),
        h = n(6),
        p = r(h),
        d = n(7),
        y = r(d),
        v = function (t) {
      function e(t, n) {
        o(this, e);var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));return r.lastRecorded = 0, r.ignoreChange = !1, r.clear(), r.quill.on(p.default.events.EDITOR_CHANGE, function (t, e, n, o) {
          t !== p.default.events.TEXT_CHANGE || r.ignoreChange || (r.options.userOnly && o !== p.default.sources.USER ? r.transform(e) : r.record(e, n));
        }), r.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, r.undo.bind(r)), r.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, r.redo.bind(r)), /Win/i.test(navigator.platform) && r.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, r.redo.bind(r)), r;
      }return l(e, t), u(e, [{ key: "change", value: function value(t, e) {
          if (0 !== this.stack[t].length) {
            var n = this.stack[t].pop();this.stack[e].push(n), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n[t], p.default.sources.USER), this.ignoreChange = !1;var r = s(n[t]);this.quill.setSelection(r);
          }
        } }, { key: "clear", value: function value() {
          this.stack = { undo: [], redo: [] };
        } }, { key: "cutoff", value: function value() {
          this.lastRecorded = 0;
        } }, { key: "record", value: function value(t, e) {
          if (0 !== t.ops.length) {
            this.stack.redo = [];var n = this.quill.getContents().diff(e),
                r = Date.now();if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
              var o = this.stack.undo.pop();n = n.compose(o.undo), t = o.redo.compose(t);
            } else this.lastRecorded = r;this.stack.undo.push({ redo: t, undo: n }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
          }
        } }, { key: "redo", value: function value() {
          this.change("redo", "undo");
        } }, { key: "transform", value: function value(t) {
          this.stack.undo.forEach(function (e) {
            e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0);
          }), this.stack.redo.forEach(function (e) {
            e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0);
          });
        } }, { key: "undo", value: function value() {
          this.change("undo", "redo");
        } }]), e;
    }(y.default);v.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 }, e.default = v, e.getLastChangeIndex = s;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.IndentClass = void 0;var l = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        a = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        s = n(0),
        u = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(s),
        c = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), l(e, [{ key: "add", value: function value(t, n) {
          if ("+1" === n || "-1" === n) {
            var r = this.value(t) || 0;n = "+1" === n ? r + 1 : r - 1;
          }return 0 === n ? (this.remove(t), !0) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "add", this).call(this, t, n);
        } }, { key: "canAdd", value: function value(t, n) {
          return a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, n) || a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, parseInt(n));
        } }, { key: "value", value: function value(t) {
          return parseInt(a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t)) || void 0;
        } }]), e;
    }(u.default.Attributor.Class),
        f = new c("indent", "ql-indent", { scope: u.default.Scope.BLOCK, whitelist: [1, 2, 3, 4, 5, 6, 7, 8] });e.IndentClass = f;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = n(3),
        a = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(l),
        s = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), e;
    }(a.default);s.blotName = "blockquote", s.tagName = "blockquote", e.default = s;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        a = n(3),
        s = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(a),
        u = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), l(e, null, [{ key: "formats", value: function value(t) {
          return this.tagName.indexOf(t.tagName) + 1;
        } }]), e;
    }(s.default);u.blotName = "header", u.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], e.default = u;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    }function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function l(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.ListItem = void 0;var s = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        u = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        c = n(0),
        f = r(c),
        h = n(3),
        p = r(h),
        d = n(23),
        y = r(d),
        v = function (t) {
      function e() {
        return i(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return a(e, t), s(e, [{ key: "format", value: function value(t, n) {
          t !== b.blotName || n ? u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n) : this.replaceWith(f.default.create(this.statics.scope));
        } }, { key: "remove", value: function value() {
          null == this.prev && null == this.next ? this.parent.remove() : u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this);
        } }, { key: "replaceWith", value: function value(t, n) {
          return this.parent.isolate(this.offset(this.parent), this.length()), t === this.parent.statics.blotName ? (this.parent.replaceWith(t, n), this) : (this.parent.unwrap(), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t, n));
        } }], [{ key: "formats", value: function value(t) {
          return t.tagName === this.tagName ? void 0 : u(e.__proto__ || Object.getPrototypeOf(e), "formats", this).call(this, t);
        } }]), e;
    }(p.default);v.blotName = "list-item", v.tagName = "LI";var b = function (t) {
      function e(t) {
        i(this, e);var n = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
            r = function r(e) {
          if (e.target.parentNode === t) {
            var r = n.statics.formats(t),
                o = f.default.find(e.target);"checked" === r ? o.format("list", "unchecked") : "unchecked" === r && o.format("list", "checked");
          }
        };return t.addEventListener("touchstart", r), t.addEventListener("mousedown", r), n;
      }return a(e, t), s(e, null, [{ key: "create", value: function value(t) {
          var n = "ordered" === t ? "OL" : "UL",
              r = u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, n);return "checked" !== t && "unchecked" !== t || r.setAttribute("data-checked", "checked" === t), r;
        } }, { key: "formats", value: function value(t) {
          return "OL" === t.tagName ? "ordered" : "UL" === t.tagName ? t.hasAttribute("data-checked") ? "true" === t.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0;
        } }]), s(e, [{ key: "format", value: function value(t, e) {
          this.children.length > 0 && this.children.tail.format(t, e);
        } }, { key: "formats", value: function value() {
          return o({}, this.statics.blotName, this.statics.formats(this.domNode));
        } }, { key: "insertBefore", value: function value(t, n) {
          if (t instanceof v) u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n);else {
            var r = null == n ? this.length() : n.offset(this),
                o = this.split(r);o.parent.insertBefore(t, o);
          }
        } }, { key: "optimize", value: function value(t) {
          u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);var n = this.next;null != n && n.prev === this && n.statics.blotName === this.statics.blotName && n.domNode.tagName === this.domNode.tagName && n.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (n.moveChildren(this), n.remove());
        } }, { key: "replace", value: function value(t) {
          if (t.statics.blotName !== this.statics.blotName) {
            var n = f.default.create(this.statics.defaultChild);t.moveChildren(n), this.appendChild(n);
          }u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t);
        } }]), e;
    }(y.default);b.blotName = "list", b.scope = f.default.Scope.BLOCK_BLOT, b.tagName = ["OL", "UL"], b.defaultChild = "list-item", b.allowedChildren = [v], e.ListItem = v, e.default = b;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = n(39),
        a = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(l),
        s = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), e;
    }(a.default);s.blotName = "italic", s.tagName = ["EM", "I"], e.default = s;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        a = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        s = n(5),
        u = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(s),
        c = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), l(e, null, [{ key: "create", value: function value(t) {
          return "super" === t ? document.createElement("sup") : "sub" === t ? document.createElement("sub") : a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
        } }, { key: "formats", value: function value(t) {
          return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0;
        } }]), e;
    }(u.default);c.blotName = "script", c.tagName = ["SUB", "SUP"], e.default = c;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = n(5),
        a = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(l),
        s = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), e;
    }(a.default);s.blotName = "strike", s.tagName = "S", e.default = s;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = n(5),
        a = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(l),
        s = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), e;
    }(a.default);s.blotName = "underline", s.tagName = "U", e.default = s;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        a = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        s = n(0),
        u = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(s),
        c = n(15),
        f = ["alt", "height", "width"],
        h = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), l(e, [{ key: "format", value: function value(t, n) {
          f.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
        } }], [{ key: "create", value: function value(t) {
          var n = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);return "string" == typeof t && n.setAttribute("src", this.sanitize(t)), n;
        } }, { key: "formats", value: function value(t) {
          return f.reduce(function (e, n) {
            return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e;
          }, {});
        } }, { key: "match", value: function value(t) {
          return (/\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t)
          );
        } }, { key: "sanitize", value: function value(t) {
          return (0, c.sanitize)(t, ["http", "https", "data"]) ? t : "//:0";
        } }, { key: "value", value: function value(t) {
          return t.getAttribute("src");
        } }]), e;
    }(u.default.Embed);h.blotName = "image", h.tagName = "IMG", e.default = h;
  }, function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        a = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        s = n(3),
        u = n(15),
        c = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(u),
        f = ["height", "width"],
        h = function (t) {
      function e() {
        return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return i(e, t), l(e, [{ key: "format", value: function value(t, n) {
          f.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
        } }], [{ key: "create", value: function value(t) {
          var n = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(t)), n;
        } }, { key: "formats", value: function value(t) {
          return f.reduce(function (e, n) {
            return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e;
          }, {});
        } }, { key: "sanitize", value: function value(t) {
          return c.default.sanitize(t);
        } }, { key: "value", value: function value(t) {
          return t.getAttribute("src");
        } }]), e;
    }(s.BlockEmbed);h.blotName = "video", h.className = "ql-video", h.tagName = "IFRAME", e.default = h;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.FormulaBlot = void 0;var a = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        s = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        u = n(33),
        c = r(u),
        f = n(6),
        h = r(f),
        p = n(7),
        d = r(p),
        y = function (t) {
      function e() {
        return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return l(e, t), a(e, null, [{ key: "create", value: function value(t) {
          var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);return "string" == typeof t && (window.katex.render(t, n, { throwOnError: !1, errorColor: "#f00" }), n.setAttribute("data-value", t)), n;
        } }, { key: "value", value: function value(t) {
          return t.getAttribute("data-value");
        } }]), e;
    }(c.default);y.blotName = "formula", y.className = "ql-formula", y.tagName = "SPAN";var v = function (t) {
      function e() {
        o(this, e);var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));if (null == window.katex) throw new Error("Formula module requires KaTeX.");return t;
      }return l(e, t), a(e, null, [{ key: "register", value: function value() {
          h.default.register(y, !0);
        } }]), e;
    }(d.default);e.FormulaBlot = y, e.default = v;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.CodeToken = e.CodeBlock = void 0;var a = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        s = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        u = n(0),
        c = r(u),
        f = n(6),
        h = r(f),
        p = n(7),
        d = r(p),
        y = n(13),
        v = r(y),
        b = function (t) {
      function e() {
        return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return l(e, t), a(e, [{ key: "replaceWith", value: function value(t) {
          this.domNode.textContent = this.domNode.textContent, this.attach(), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t);
        } }, { key: "highlight", value: function value(t) {
          var e = this.domNode.textContent;this.cachedText !== e && ((e.trim().length > 0 || null == this.cachedText) && (this.domNode.innerHTML = t(e), this.domNode.normalize(), this.attach()), this.cachedText = e);
        } }]), e;
    }(v.default);b.className = "ql-syntax";var g = new c.default.Attributor.Class("token", "hljs", { scope: c.default.Scope.INLINE }),
        m = function (t) {
      function e(t, n) {
        o(this, e);var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));if ("function" != typeof r.options.highlight) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var l = null;return r.quill.on(h.default.events.SCROLL_OPTIMIZE, function () {
          clearTimeout(l), l = setTimeout(function () {
            r.highlight(), l = null;
          }, r.options.interval);
        }), r.highlight(), r;
      }return l(e, t), a(e, null, [{ key: "register", value: function value() {
          h.default.register(g, !0), h.default.register(b, !0);
        } }]), a(e, [{ key: "highlight", value: function value() {
          var t = this;if (!this.quill.selection.composing) {
            this.quill.update(h.default.sources.USER);var e = this.quill.getSelection();this.quill.scroll.descendants(b).forEach(function (e) {
              e.highlight(t.options.highlight);
            }), this.quill.update(h.default.sources.SILENT), null != e && this.quill.setSelection(e, h.default.sources.SILENT);
          }
        } }]), e;
    }(d.default);m.DEFAULTS = { highlight: function () {
        return null == window.hljs ? null : function (t) {
          return window.hljs.highlightAuto(t).value;
        };
      }(), interval: 1e3 }, e.CodeBlock = b, e.CodeToken = g, e.default = m;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    }function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function l(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }function s(t, e, n) {
      var r = document.createElement("button");r.setAttribute("type", "button"), r.classList.add("ql-" + e), null != n && (r.value = n), t.appendChild(r);
    }function u(t, e) {
      Array.isArray(e[0]) || (e = [e]), e.forEach(function (e) {
        var n = document.createElement("span");n.classList.add("ql-formats"), e.forEach(function (t) {
          if ("string" == typeof t) s(n, t);else {
            var e = Object.keys(t)[0],
                r = t[e];Array.isArray(r) ? c(n, e, r) : s(n, e, r);
          }
        }), t.appendChild(n);
      });
    }function c(t, e, n) {
      var r = document.createElement("select");r.classList.add("ql-" + e), n.forEach(function (t) {
        var e = document.createElement("option");!1 !== t ? e.setAttribute("value", t) : e.setAttribute("selected", "selected"), r.appendChild(e);
      }), t.appendChild(r);
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.addControls = e.default = void 0;var f = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;try {
          for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          o = !0, i = t;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        h = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        p = n(4),
        d = r(p),
        y = n(0),
        v = r(y),
        b = n(6),
        g = r(b),
        m = n(10),
        _ = r(m),
        O = n(7),
        w = r(O),
        x = (0, _.default)("quill:toolbar"),
        k = function (t) {
      function e(t, n) {
        i(this, e);var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));if (Array.isArray(r.options.container)) {
          var o = document.createElement("div");u(o, r.options.container), t.container.parentNode.insertBefore(o, t.container), r.container = o;
        } else "string" == typeof r.options.container ? r.container = document.querySelector(r.options.container) : r.container = r.options.container;if (!(r.container instanceof HTMLElement)) {
          var a;return a = x.error("Container required for toolbar", r.options), l(r, a);
        }return r.container.classList.add("ql-toolbar"), r.controls = [], r.handlers = {}, Object.keys(r.options.handlers).forEach(function (t) {
          r.addHandler(t, r.options.handlers[t]);
        }), [].forEach.call(r.container.querySelectorAll("button, select"), function (t) {
          r.attach(t);
        }), r.quill.on(g.default.events.EDITOR_CHANGE, function (t, e) {
          t === g.default.events.SELECTION_CHANGE && r.update(e);
        }), r.quill.on(g.default.events.SCROLL_OPTIMIZE, function () {
          var t = r.quill.selection.getRange(),
              e = f(t, 1),
              n = e[0];r.update(n);
        }), r;
      }return a(e, t), h(e, [{ key: "addHandler", value: function value(t, e) {
          this.handlers[t] = e;
        } }, { key: "attach", value: function value(t) {
          var e = this,
              n = [].find.call(t.classList, function (t) {
            return 0 === t.indexOf("ql-");
          });if (n) {
            if (n = n.slice("ql-".length), "BUTTON" === t.tagName && t.setAttribute("type", "button"), null == this.handlers[n]) {
              if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n]) return void x.warn("ignoring attaching to disabled format", n, t);if (null == v.default.query(n)) return void x.warn("ignoring attaching to nonexistent format", n, t);
            }var r = "SELECT" === t.tagName ? "change" : "click";t.addEventListener(r, function (r) {
              var i = void 0;if ("SELECT" === t.tagName) {
                if (t.selectedIndex < 0) return;var l = t.options[t.selectedIndex];i = !l.hasAttribute("selected") && (l.value || !1);
              } else i = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value")), r.preventDefault();e.quill.focus();var a = e.quill.selection.getRange(),
                  s = f(a, 1),
                  u = s[0];if (null != e.handlers[n]) e.handlers[n].call(e, i);else if (v.default.query(n).prototype instanceof v.default.Embed) {
                if (!(i = prompt("Enter " + n))) return;e.quill.updateContents(new d.default().retain(u.index).delete(u.length).insert(o({}, n, i)), g.default.sources.USER);
              } else e.quill.format(n, i, g.default.sources.USER);e.update(u);
            }), this.controls.push([n, t]);
          }
        } }, { key: "update", value: function value(t) {
          var e = null == t ? {} : this.quill.getFormat(t);this.controls.forEach(function (n) {
            var r = f(n, 2),
                o = r[0],
                i = r[1];if ("SELECT" === i.tagName) {
              var l = void 0;if (null == t) l = null;else if (null == e[o]) l = i.querySelector("option[selected]");else if (!Array.isArray(e[o])) {
                var a = e[o];"string" == typeof a && (a = a.replace(/\"/g, '\\"')), l = i.querySelector('option[value="' + a + '"]');
              }null == l ? (i.value = "", i.selectedIndex = -1) : l.selected = !0;
            } else if (null == t) i.classList.remove("ql-active");else if (i.hasAttribute("value")) {
              var s = e[o] === i.getAttribute("value") || null != e[o] && e[o].toString() === i.getAttribute("value") || null == e[o] && !i.getAttribute("value");i.classList.toggle("ql-active", s);
            } else i.classList.toggle("ql-active", null != e[o]);
          });
        } }]), e;
    }(w.default);k.DEFAULTS = {}, k.DEFAULTS = { container: null, handlers: { clean: function clean() {
          var t = this,
              e = this.quill.getSelection();if (null != e) if (0 == e.length) {
            var n = this.quill.getFormat();Object.keys(n).forEach(function (e) {
              null != v.default.query(e, v.default.Scope.INLINE) && t.quill.format(e, !1);
            });
          } else this.quill.removeFormat(e, g.default.sources.USER);
        }, direction: function direction(t) {
          var e = this.quill.getFormat().align;"rtl" === t && null == e ? this.quill.format("align", "right", g.default.sources.USER) : t || "right" !== e || this.quill.format("align", !1, g.default.sources.USER), this.quill.format("direction", t, g.default.sources.USER);
        }, indent: function indent(t) {
          var e = this.quill.getSelection(),
              n = this.quill.getFormat(e),
              r = parseInt(n.indent || 0);if ("+1" === t || "-1" === t) {
            var o = "+1" === t ? 1 : -1;"rtl" === n.direction && (o *= -1), this.quill.format("indent", r + o, g.default.sources.USER);
          }
        }, link: function link(t) {
          !0 === t && (t = prompt("Enter link URL:")), this.quill.format("link", t, g.default.sources.USER);
        }, list: function list(t) {
          var e = this.quill.getSelection(),
              n = this.quill.getFormat(e);"check" === t ? "checked" === n.list || "unchecked" === n.list ? this.quill.format("list", !1, g.default.sources.USER) : this.quill.format("list", "unchecked", g.default.sources.USER) : this.quill.format("list", t, g.default.sources.USER);
        } } }, e.default = k, e.addControls = u;
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
  }, function (t, e) {
    t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
  }, function (t, e) {
    t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
  }, function (t, e) {
    t.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.BubbleTooltip = void 0;var a = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        s = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        u = n(2),
        c = r(u),
        f = n(9),
        h = r(f),
        p = n(44),
        d = r(p),
        y = n(22),
        v = n(26),
        b = r(v),
        g = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]],
        m = function (t) {
      function e(t, n) {
        o(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = g);var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));return r.quill.container.classList.add("ql-bubble"), r;
      }return l(e, t), s(e, [{ key: "extendToolbar", value: function value(t) {
          this.tooltip = new _(this.quill, this.options.bounds), this.tooltip.root.appendChild(t.container), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), b.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), b.default);
        } }]), e;
    }(d.default);m.DEFAULTS = (0, c.default)(!0, {}, d.default.DEFAULTS, { modules: { toolbar: { handlers: { link: function link(t) {
              t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1);
            } } } } });var _ = function (t) {
      function e(t, n) {
        o(this, e);var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));return r.quill.on(h.default.events.EDITOR_CHANGE, function (t, e, n, o) {
          if (t === h.default.events.SELECTION_CHANGE) if (null != e && e.length > 0 && o === h.default.sources.USER) {
            r.show(), r.root.style.left = "0px", r.root.style.width = "", r.root.style.width = r.root.offsetWidth + "px";var i = r.quill.getLines(e.index, e.length);if (1 === i.length) r.position(r.quill.getBounds(e));else {
              var l = i[i.length - 1],
                  a = r.quill.getIndex(l),
                  s = Math.min(l.length() - 1, e.index + e.length - a),
                  u = r.quill.getBounds(new y.Range(a, s));r.position(u);
            }
          } else document.activeElement !== r.textbox && r.quill.hasFocus() && r.hide();
        }), r;
      }return l(e, t), s(e, [{ key: "listen", value: function value() {
          var t = this;a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function () {
            t.root.classList.remove("ql-editing");
          }), this.quill.on(h.default.events.SCROLL_OPTIMIZE, function () {
            setTimeout(function () {
              if (!t.root.classList.contains("ql-hidden")) {
                var e = t.quill.getSelection();null != e && t.position(t.quill.getBounds(e));
              }
            }, 1);
          });
        } }, { key: "cancel", value: function value() {
          this.show();
        } }, { key: "position", value: function value(t) {
          var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "position", this).call(this, t),
              r = this.root.querySelector(".ql-tooltip-arrow");if (r.style.marginLeft = "", 0 === n) return n;r.style.marginLeft = -1 * n - r.offsetWidth / 2 + "px";
        } }]), e;
    }(p.BaseTooltip);_.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), e.BubbleTooltip = _, e.default = m;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function i(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }Object.defineProperty(e, "__esModule", { value: !0 });var a = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;try {
          for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          o = !0, i = t;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        s = function t(e, n, r) {
      null === e && (e = Function.prototype);var o = Object.getOwnPropertyDescriptor(e, n);if (void 0 === o) {
        var i = Object.getPrototypeOf(e);return null === i ? void 0 : t(i, n, r);
      }if ("value" in o) return o.value;var l = o.get;if (void 0 !== l) return l.call(r);
    },
        u = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        c = n(2),
        f = r(c),
        h = n(9),
        p = r(h),
        d = n(44),
        y = r(d),
        v = n(15),
        b = r(v),
        g = n(22),
        m = n(26),
        _ = r(m),
        O = [[{ header: ["1", "2", "3", !1] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]],
        w = function (t) {
      function e(t, n) {
        o(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = O);var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));return r.quill.container.classList.add("ql-snow"), r;
      }return l(e, t), u(e, [{ key: "extendToolbar", value: function value(t) {
          t.container.classList.add("ql-snow"), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), _.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), _.default), this.tooltip = new x(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function (e, n) {
            t.handlers.link.call(t, !n.format.link);
          });
        } }]), e;
    }(y.default);w.DEFAULTS = (0, f.default)(!0, {}, y.default.DEFAULTS, { modules: { toolbar: { handlers: { link: function link(t) {
              if (t) {
                var e = this.quill.getSelection();if (null == e || 0 == e.length) return;var n = this.quill.getText(e);/^\S+@\S+\.\S+$/.test(n) && 0 !== n.indexOf("mailto:") && (n = "mailto:" + n);this.quill.theme.tooltip.edit("link", n);
              } else this.quill.format("link", !1);
            } } } } });var x = function (t) {
      function e(t, n) {
        o(this, e);var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));return r.preview = r.root.querySelector("a.ql-preview"), r;
      }return l(e, t), u(e, [{ key: "listen", value: function value() {
          var t = this;s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function (e) {
            t.root.classList.contains("ql-editing") ? t.save() : t.edit("link", t.preview.textContent), e.preventDefault();
          }), this.root.querySelector("a.ql-remove").addEventListener("click", function (e) {
            if (null != t.linkRange) {
              var n = t.linkRange;t.restoreFocus(), t.quill.formatText(n, "link", !1, p.default.sources.USER), delete t.linkRange;
            }e.preventDefault(), t.hide();
          }), this.quill.on(p.default.events.SELECTION_CHANGE, function (e, n, r) {
            if (null != e) {
              if (0 === e.length && r === p.default.sources.USER) {
                var o = t.quill.scroll.descendant(b.default, e.index),
                    i = a(o, 2),
                    l = i[0],
                    s = i[1];if (null != l) {
                  t.linkRange = new g.Range(e.index - s, l.length());var u = b.default.formats(l.domNode);return t.preview.textContent = u, t.preview.setAttribute("href", u), t.show(), void t.position(t.quill.getBounds(t.linkRange));
                }
              } else delete t.linkRange;t.hide();
            }
          });
        } }, { key: "show", value: function value() {
          s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
        } }]), e;
    }(d.BaseTooltip);x.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), e.default = w;
  }]).default;
});
//# sourceMappingURL=quill.min.js.map
(function (t, e) {
  'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && 'undefined' != typeof module ? module.exports = e() : 'function' == typeof define && define.amd ? define(e) : t.tippy = e();
})(this, function () {
  'use strict';
  function t(t) {
    return '[object Object]' === {}.toString.call(t);
  }function a(t) {
    return [].slice.call(t);
  }function o(e) {
    if (e instanceof Element || t(e)) return [e];if (e instanceof NodeList) return a(e);if (Array.isArray(e)) return e;try {
      return a(document.querySelectorAll(e));
    } catch (t) {
      return [];
    }
  }function r(t) {
    t.refObj = !0, t.attributes = t.attributes || {}, t.setAttribute = function (e, a) {
      t.attributes[e] = a;
    }, t.getAttribute = function (e) {
      return t.attributes[e];
    }, t.removeAttribute = function (e) {
      delete t.attributes[e];
    }, t.hasAttribute = function (e) {
      return e in t.attributes;
    }, t.addEventListener = function () {}, t.removeEventListener = function () {}, t.classList = { classNames: {}, add: function add(e) {
        return t.classList.classNames[e] = !0;
      }, remove: function remove(e) {
        return delete t.classList.classNames[e], !0;
      }, contains: function contains(e) {
        return e in t.classList.classNames;
      } };
  }function p(t) {
    for (var e = ['', 'webkit'], a = t.charAt(0).toUpperCase() + t.slice(1), o = 0; o < e.length; o++) {
      var i = e[o],
          r = i ? i + a : t;if ('undefined' != typeof document.body.style[r]) return r;
    }return null;
  }function n() {
    return document.createElement('div');
  }function s(t, e, a) {
    var i = n();i.setAttribute('class', 'tippy-popper'), i.setAttribute('role', 'tooltip'), i.setAttribute('id', 'tippy-' + t), i.style.zIndex = a.zIndex, i.style.maxWidth = a.maxWidth;var o = n();o.setAttribute('class', 'tippy-tooltip'), o.setAttribute('data-size', a.size), o.setAttribute('data-animation', a.animation), o.setAttribute('data-state', 'hidden'), a.theme.split(' ').forEach(function (e) {
      o.classList.add(e + '-theme');
    });var r = n();if (r.setAttribute('class', 'tippy-content'), a.arrow) {
      var s = n();s.style[p('transform')] = a.arrowTransform, 'round' === a.arrowType ? (s.classList.add('tippy-roundarrow'), s.innerHTML = '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>') : s.classList.add('tippy-arrow'), o.appendChild(s);
    }if (a.animateFill) {
      o.setAttribute('data-animatefill', '');var l = n();l.classList.add('tippy-backdrop'), l.setAttribute('data-state', 'hidden'), o.appendChild(l);
    }a.inertia && o.setAttribute('data-inertia', ''), a.interactive && o.setAttribute('data-interactive', '');var d = a.html;if (d) {
      var c;d instanceof Element ? (r.appendChild(d), c = '#' + (d.id || 'tippy-html-template')) : (r.innerHTML = document.querySelector(d).innerHTML, c = d), i.setAttribute('data-html', ''), o.setAttribute('data-template-id', c), a.interactive && i.setAttribute('tabindex', '-1');
    } else r[a.allowTitleHTML ? 'innerHTML' : 'textContent'] = e;return o.appendChild(r), i.appendChild(o), i;
  }function l(t, e, a, i) {
    var o = a.onTrigger,
        r = a.onMouseLeave,
        p = a.onBlur,
        n = a.onDelegateShow,
        s = a.onDelegateHide,
        l = [];if ('manual' === t) return l;var d = function d(t, a) {
      e.addEventListener(t, a), l.push({ event: t, handler: a });
    };return i.target ? (Ft.supportsTouch && i.touchHold && (d('touchstart', n), d('touchend', s)), 'mouseenter' === t && (d('mouseover', n), d('mouseout', s)), 'focus' === t && (d('focusin', n), d('focusout', s)), 'click' === t && d('click', n)) : (d(t, o), Ft.supportsTouch && i.touchHold && (d('touchstart', o), d('touchend', r)), 'mouseenter' === t && d('mouseleave', r), 'focus' === t && d(zt ? 'focusout' : 'blur', p)), l;
  }function d(t, e) {
    var a = Kt.reduce(function (a, i) {
      var o = t.getAttribute('data-tippy-' + i.toLowerCase()) || e[i];return 'false' === o && (o = !1), 'true' === o && (o = !0), isFinite(o) && !isNaN(parseFloat(o)) && (o = parseFloat(o)), 'target' !== i && 'string' == typeof o && '[' === o.trim().charAt(0) && (o = JSON.parse(o)), a[i] = o, a;
    }, {});return Qt({}, e, a);
  }function c(t, e) {
    return e.arrow && (e.animateFill = !1), e.appendTo && 'function' == typeof e.appendTo && (e.appendTo = e.appendTo()), 'function' == typeof e.html && (e.html = e.html(t)), e;
  }function m(t) {
    var e = function e(_e2) {
      return t.querySelector(_e2);
    };return { tooltip: e(qt.TOOLTIP), backdrop: e(qt.BACKDROP), content: e(qt.CONTENT), arrow: e(qt.ARROW) || e(qt.ROUND_ARROW) };
  }function f(t) {
    var e = t.getAttribute('title');e && t.setAttribute('data-original-title', e), t.removeAttribute('title');
  }function h(t) {
    return t && '[object Function]' === {}.toString.call(t);
  }function b(t, e) {
    if (1 !== t.nodeType) return [];var a = getComputedStyle(t, null);return e ? a[e] : a;
  }function u(t) {
    return 'HTML' === t.nodeName ? t : t.parentNode || t.host;
  }function y(t) {
    if (!t) return document.body;switch (t.nodeName) {case 'HTML':case 'BODY':
        return t.ownerDocument.body;case '#document':
        return t.body;}var e = b(t),
        a = e.overflow,
        i = e.overflowX,
        o = e.overflowY;return (/(auto|scroll|overlay)/.test(a + o + i) ? t : y(u(t))
    );
  }function g(t) {
    return 11 === t ? ae : 10 === t ? ie : ae || ie;
  }function w(t) {
    if (!t) return document.documentElement;for (var e = g(10) ? document.body : null, a = t.offsetParent; a === e && t.nextElementSibling;) {
      a = (t = t.nextElementSibling).offsetParent;
    }var i = a && a.nodeName;return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(a.nodeName) && 'static' === b(a, 'position') ? w(a) : a : t ? t.ownerDocument.documentElement : document.documentElement;
  }function x(t) {
    var e = t.nodeName;return 'BODY' !== e && ('HTML' === e || w(t.firstElementChild) === t);
  }function v(t) {
    return null === t.parentNode ? t : v(t.parentNode);
  }function k(t, e) {
    if (!t || !t.nodeType || !e || !e.nodeType) return document.documentElement;var a = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = a ? t : e,
        o = a ? e : t,
        r = document.createRange();r.setStart(i, 0), r.setEnd(o, 0);var p = r.commonAncestorContainer;if (t !== p && e !== p || i.contains(o)) return x(p) ? p : w(p);var n = v(t);return n.host ? k(n.host, e) : k(t, v(e).host);
  }function E(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        a = 'top' === e ? 'scrollTop' : 'scrollLeft',
        i = t.nodeName;if ('BODY' === i || 'HTML' === i) {
      var o = t.ownerDocument.documentElement,
          r = t.ownerDocument.scrollingElement || o;return r[a];
    }return t[a];
  }function T(t, e) {
    var a = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
        i = E(e, 'top'),
        o = E(e, 'left'),
        r = a ? -1 : 1;return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t;
  }function L(t, e) {
    var a = 'x' === e ? 'Left' : 'Top',
        i = 'Left' === a ? 'Right' : 'Bottom';return parseFloat(t['border' + a + 'Width'], 10) + parseFloat(t['border' + i + 'Width'], 10);
  }function O(t, e, a, i) {
    return Bt(e['offset' + t], e['scroll' + t], a['client' + t], a['offset' + t], a['scroll' + t], g(10) ? parseInt(a['offset' + t]) + parseInt(i['margin' + ('Height' === t ? 'Top' : 'Left')]) + parseInt(i['margin' + ('Height' === t ? 'Bottom' : 'Right')]) : 0);
  }function A(t) {
    var e = t.body,
        a = t.documentElement,
        i = g(10) && getComputedStyle(a);return { height: O('Height', e, a, i), width: O('Width', e, a, i) };
  }function C(t) {
    return ne({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }function S(t) {
    var e = {};try {
      if (g(10)) {
        e = t.getBoundingClientRect();var a = E(t, 'top'),
            i = E(t, 'left');e.top += a, e.left += i, e.bottom += a, e.right += i;
      } else e = t.getBoundingClientRect();
    } catch (t) {}var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
        r = 'HTML' === t.nodeName ? A(t.ownerDocument) : {},
        p = r.width || t.clientWidth || o.right - o.left,
        n = r.height || t.clientHeight || o.bottom - o.top,
        s = t.offsetWidth - p,
        l = t.offsetHeight - n;if (s || l) {
      var d = b(t);s -= L(d, 'x'), l -= L(d, 'y'), o.width -= s, o.height -= l;
    }return C(o);
  }function Y(t, e) {
    var a = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
        i = g(10),
        o = 'HTML' === e.nodeName,
        r = S(t),
        p = S(e),
        n = y(t),
        s = b(e),
        l = parseFloat(s.borderTopWidth, 10),
        d = parseFloat(s.borderLeftWidth, 10);a && o && (p.top = Bt(p.top, 0), p.left = Bt(p.left, 0));var c = C({ top: r.top - p.top - l, left: r.left - p.left - d, width: r.width, height: r.height });if (c.marginTop = 0, c.marginLeft = 0, !i && o) {
      var m = parseFloat(s.marginTop, 10),
          f = parseFloat(s.marginLeft, 10);c.top -= l - m, c.bottom -= l - m, c.left -= d - f, c.right -= d - f, c.marginTop = m, c.marginLeft = f;
    }return (i && !a ? e.contains(n) : e === n && 'BODY' !== n.nodeName) && (c = T(c, e)), c;
  }function P(t) {
    var e = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
        a = t.ownerDocument.documentElement,
        i = Y(t, a),
        o = Bt(a.clientWidth, window.innerWidth || 0),
        r = Bt(a.clientHeight, window.innerHeight || 0),
        p = e ? 0 : E(a),
        n = e ? 0 : E(a, 'left'),
        s = { top: p - i.top + i.marginTop, left: n - i.left + i.marginLeft, width: o, height: r };return C(s);
  }function X(t) {
    var e = t.nodeName;return 'BODY' !== e && 'HTML' !== e && ('fixed' === b(t, 'position') || X(u(t)));
  }function D(t) {
    if (!t || !t.parentElement || g()) return document.documentElement;for (var e = t.parentElement; e && 'none' === b(e, 'transform');) {
      e = e.parentElement;
    }return e || document.documentElement;
  }function I(t, e, a, i) {
    var o = !!(4 < arguments.length && void 0 !== arguments[4]) && arguments[4],
        r = { top: 0, left: 0 },
        p = o ? D(t) : k(t, e);if ('viewport' === i) r = P(p, o);else {
      var n;'scrollParent' === i ? (n = y(u(e)), 'BODY' === n.nodeName && (n = t.ownerDocument.documentElement)) : 'window' === i ? n = t.ownerDocument.documentElement : n = i;var s = Y(n, p, o);if ('HTML' === n.nodeName && !X(p)) {
        var l = A(t.ownerDocument),
            d = l.height,
            c = l.width;r.top += s.top - s.marginTop, r.bottom = d + s.top, r.left += s.left - s.marginLeft, r.right = c + s.left;
      } else r = s;
    }a = a || 0;var m = 'number' == typeof a;return r.left += m ? a : a.left || 0, r.top += m ? a : a.top || 0, r.right -= m ? a : a.right || 0, r.bottom -= m ? a : a.bottom || 0, r;
  }function R(t) {
    var e = t.width,
        a = t.height;return e * a;
  }function H(t, e, a, i, o) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === t.indexOf('auto')) return t;var p = I(a, i, r, o),
        n = { top: { width: p.width, height: e.top - p.top }, right: { width: p.right - e.right, height: p.height }, bottom: { width: p.width, height: p.bottom - e.bottom }, left: { width: e.left - p.left, height: p.height } },
        s = Object.keys(n).map(function (t) {
      return ne({ key: t }, n[t], { area: R(n[t]) });
    }).sort(function (t, e) {
      return e.area - t.area;
    }),
        l = s.filter(function (t) {
      var e = t.width,
          i = t.height;return e >= a.clientWidth && i >= a.clientHeight;
    }),
        d = 0 < l.length ? l[0].key : s[0].key,
        c = t.split('-')[1];return d + (c ? '-' + c : '');
  }function _(t, e, a) {
    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        o = i ? D(e) : k(e, a);return Y(a, o, i);
  }function N(t) {
    var e = getComputedStyle(t),
        a = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        i = parseFloat(e.marginLeft) + parseFloat(e.marginRight),
        o = { width: t.offsetWidth + i, height: t.offsetHeight + a };return o;
  }function M(t) {
    var e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }function W(t, e, a) {
    a = a.split('-')[0];var i = N(t),
        o = { width: i.width, height: i.height },
        r = -1 !== ['right', 'left'].indexOf(a),
        p = r ? 'top' : 'left',
        n = r ? 'left' : 'top',
        s = r ? 'height' : 'width',
        l = r ? 'width' : 'height';return o[p] = e[p] + e[s] / 2 - i[s] / 2, o[n] = a === n ? e[n] - i[l] : e[M(n)], o;
  }function B(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }function U(t, e, a) {
    if (Array.prototype.findIndex) return t.findIndex(function (t) {
      return t[e] === a;
    });var i = B(t, function (t) {
      return t[e] === a;
    });return t.indexOf(i);
  }function z(t, e, a) {
    var i = void 0 === a ? t : t.slice(0, U(t, 'name', a));return i.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var a = t['function'] || t.fn;t.enabled && h(a) && (e.offsets.popper = C(e.offsets.popper), e.offsets.reference = C(e.offsets.reference), e = a(e, t));
    }), e;
  }function F() {
    if (!this.state.isDestroyed) {
      var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };t.offsets.reference = _(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = H(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = W(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', t = z(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
    }
  }function q(t, e) {
    return t.some(function (t) {
      var a = t.name,
          i = t.enabled;return i && a === e;
    });
  }function j(t) {
    for (var e = [!1, 'ms', 'Webkit', 'Moz', 'O'], a = t.charAt(0).toUpperCase() + t.slice(1), o = 0; o < e.length; o++) {
      var i = e[o],
          r = i ? '' + i + a : t;if ('undefined' != typeof document.body.style[r]) return r;
    }return null;
  }function K() {
    return this.state.isDestroyed = !0, q(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[j('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }function V(t) {
    var e = t.ownerDocument;return e ? e.defaultView : window;
  }function G(t, e, a, i) {
    var o = 'BODY' === t.nodeName,
        r = o ? t.ownerDocument.defaultView : t;r.addEventListener(e, a, { passive: !0 }), o || G(y(r.parentNode), e, a, i), i.push(r);
  }function Q(t, e, a, i) {
    a.updateBound = i, V(t).addEventListener('resize', a.updateBound, { passive: !0 });var o = y(t);return G(o, 'scroll', a.updateBound, a.scrollParents), a.scrollElement = o, a.eventsEnabled = !0, a;
  }function Z() {
    this.state.eventsEnabled || (this.state = Q(this.reference, this.options, this.state, this.scheduleUpdate));
  }function $(t, e) {
    return V(t).removeEventListener('resize', e.updateBound), e.scrollParents.forEach(function (t) {
      t.removeEventListener('scroll', e.updateBound);
    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e;
  }function J() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = $(this.reference, this.state));
  }function tt(t) {
    return '' !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }function et(t, e) {
    Object.keys(e).forEach(function (a) {
      var i = '';-1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(a) && tt(e[a]) && (i = 'px'), t.style[a] = e[a] + i;
    });
  }function at(t, e) {
    Object.keys(e).forEach(function (a) {
      var i = e[a];!1 === i ? t.removeAttribute(a) : t.setAttribute(a, e[a]);
    });
  }function it(t, e, a) {
    var i = B(t, function (t) {
      var a = t.name;return a === e;
    }),
        o = !!i && t.some(function (t) {
      return t.name === a && t.enabled && t.order < i.order;
    });if (!o) {
      var r = '`' + e + '`';console.warn('`' + a + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }return o;
  }function ot(t) {
    return 'end' === t ? 'start' : 'start' === t ? 'end' : t;
  }function rt(t) {
    var e = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
        a = le.indexOf(t),
        i = le.slice(a + 1).concat(le.slice(0, a));return e ? i.reverse() : i;
  }function pt(t, e, a, i) {
    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +o[1],
        p = o[2];if (!r) return t;if (0 === p.indexOf('%')) {
      var n;switch (p) {case '%p':
          n = a;break;case '%':case '%r':default:
          n = i;}var s = C(n);return s[e] / 100 * r;
    }if ('vh' === p || 'vw' === p) {
      var l;return l = 'vh' === p ? Bt(document.documentElement.clientHeight, window.innerHeight || 0) : Bt(document.documentElement.clientWidth, window.innerWidth || 0), l / 100 * r;
    }return r;
  }function nt(t, e, a, i) {
    var o = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(i),
        p = t.split(/(\+|\-)/).map(function (t) {
      return t.trim();
    }),
        n = p.indexOf(B(p, function (t) {
      return -1 !== t.search(/,|\s/);
    }));p[n] && -1 === p[n].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var s = /\s*,\s*|\s+/,
        l = -1 === n ? [p] : [p.slice(0, n).concat([p[n].split(s)[0]]), [p[n].split(s)[1]].concat(p.slice(n + 1))];return l = l.map(function (t, i) {
      var o = (1 === i ? !r : r) ? 'height' : 'width',
          p = !1;return t.reduce(function (t, e) {
        return '' === t[t.length - 1] && -1 !== ['+', '-'].indexOf(e) ? (t[t.length - 1] = e, p = !0, t) : p ? (t[t.length - 1] += e, p = !1, t) : t.concat(e);
      }, []).map(function (t) {
        return pt(t, o, e, a);
      });
    }), l.forEach(function (t, e) {
      t.forEach(function (a, i) {
        tt(a) && (o[e] += a * ('-' === t[i - 1] ? -1 : 1));
      });
    }), o;
  }function st(t, e) {
    var a = e.offset,
        i = t.placement,
        o = t.offsets,
        r = o.popper,
        p = o.reference,
        n = i.split('-')[0],
        s = void 0;return s = tt(+a) ? [+a, 0] : nt(a, r, p, n), 'left' === n ? (r.top += s[0], r.left -= s[1]) : 'right' === n ? (r.top += s[0], r.left += s[1]) : 'top' === n ? (r.left += s[0], r.top -= s[1]) : 'bottom' === n && (r.left += s[0], r.top += s[1]), t.popper = r, t;
  }function lt(t) {
    void t.offsetHeight;
  }function dt(t, e, a) {
    var i = t.popper,
        o = t.options,
        r = o.onCreate,
        p = o.onUpdate;o.onCreate = o.onUpdate = function () {
      lt(i), e && e(), p(), o.onCreate = r, o.onUpdate = p;
    }, a || t.scheduleUpdate();
  }function ct(t) {
    return t.getAttribute('x-placement').replace(/-.+/, '');
  }function mt(t, e, a) {
    if (!e.getAttribute('x-placement')) return !0;var i = t.clientX,
        o = t.clientY,
        r = a.interactiveBorder,
        p = a.distance,
        n = e.getBoundingClientRect(),
        s = ct(e),
        l = r + p,
        d = { top: n.top - o > r, bottom: o - n.bottom > r, left: n.left - i > r, right: i - n.right > r };return 'top' === s ? d.top = n.top - o > l : 'bottom' === s ? d.bottom = o - n.bottom > l : 'left' === s ? d.left = n.left - i > l : 'right' === s ? d.right = i - n.right > l : void 0, d.top || d.bottom || d.left || d.right;
  }function ft(t, e, a, i) {
    if (!e.length) return '';var o = { scale: function () {
        return 1 === e.length ? '' + e[0] : a ? e[0] + ', ' + e[1] : e[1] + ', ' + e[0];
      }(), translate: function () {
        return 1 === e.length ? i ? -e[0] + 'px' : e[0] + 'px' : a ? i ? e[0] + 'px, ' + -e[1] + 'px' : e[0] + 'px, ' + e[1] + 'px' : i ? -e[1] + 'px, ' + e[0] + 'px' : e[1] + 'px, ' + e[0] + 'px';
      }() };return o[t];
  }function ht(t, e) {
    if (!t) return '';return e ? t : { X: 'Y', Y: 'X' }[t];
  }function bt(t, e, a) {
    var i = ct(t),
        o = 'top' === i || 'bottom' === i,
        r = 'right' === i || 'bottom' === i,
        n = function n(t) {
      var e = a.match(t);return e ? e[1] : '';
    },
        s = function s(t) {
      var e = a.match(t);return e ? e[1].split(',').map(parseFloat) : [];
    },
        l = { translate: /translateX?Y?\(([^)]+)\)/, scale: /scaleX?Y?\(([^)]+)\)/ },
        d = { translate: { axis: n(/translate([XY])/), numbers: s(l.translate) }, scale: { axis: n(/scale([XY])/), numbers: s(l.scale) } },
        c = a.replace(l.translate, 'translate' + ht(d.translate.axis, o) + '(' + ft('translate', d.translate.numbers, o, r) + ')').replace(l.scale, 'scale' + ht(d.scale.axis, o) + '(' + ft('scale', d.scale.numbers, o, r) + ')');e.style[p('transform')] = c;
  }function ut(t) {
    return -(t - jt.distance) + 'px';
  }function yt(t, a) {
    var i = Element.prototype.closest || function (t) {
      for (var a = this; a;) {
        if (e.call(a, t)) return a;a = a.parentElement;
      }
    };return i.call(t, a);
  }function gt(t, e) {
    return Array.isArray(t) ? t[e] : t;
  }function wt(t, e) {
    t.forEach(function (t) {
      t && t.setAttribute('data-state', e);
    });
  }function xt(t, e) {
    t.filter(Boolean).forEach(function (t) {
      t.style[p('transitionDuration')] = e + 'ms';
    });
  }function vt(t) {
    var e = window.scrollX || window.pageXOffset,
        a = window.scrollY || window.pageYOffset;t.focus(), scroll(e, a);
  }function kt() {
    var t = this._(he).lastTriggerEvent;return this.options.followCursor && !Ft.usingTouch && t && 'focus' !== t.type;
  }function Et(t) {
    var e = yt(t.target, this.options.target);if (e && !e._tippy) {
      var a = e.getAttribute('title') || this.title;a && (e.setAttribute('title', a), _t(e, Qt({}, this.options, { target: null })), Tt.call(e._tippy, t));
    }
  }function Tt(t) {
    var e = this,
        a = this.options;if (St.call(this), !this.state.visible) {
      if (a.target) return void Et.call(this, t);if (this._(he).isPreparingToShow = !0, a.wait) return void a.wait.call(this.popper, this.show.bind(this), t);if (kt.call(this)) {
        this._(he).followCursorListener || Yt.call(this);var i = m(this.popper),
            o = i.arrow;o && (o.style.margin = '0'), document.addEventListener('mousemove', this._(he).followCursorListener);
      }var r = gt(a.delay, 0);r ? this._(he).showTimeout = setTimeout(function () {
        e.show();
      }, r) : this.show();
    }
  }function Lt() {
    var t = this;if (St.call(this), !!this.state.visible) {
      this._(he).isPreparingToShow = !1;var e = gt(this.options.delay, 1);e ? this._(he).hideTimeout = setTimeout(function () {
        t.state.visible && t.hide();
      }, e) : this.hide();
    }
  }function Ot() {
    var t = this;return { onTrigger: function onTrigger(e) {
        if (t.state.enabled) {
          var a = Ft.supportsTouch && Ft.usingTouch && -1 < ['mouseenter', 'mouseover', 'focus'].indexOf(e.type);a && t.options.touchHold || (t._(he).lastTriggerEvent = e, 'click' === e.type && 'persistent' !== t.options.hideOnClick && t.state.visible ? Lt.call(t) : Tt.call(t, e));
        }
      }, onMouseLeave: function onMouseLeave(e) {
        if (!(-1 < ['mouseleave', 'mouseout'].indexOf(e.type) && Ft.supportsTouch && Ft.usingTouch && t.options.touchHold)) {
          if (t.options.interactive) {
            var a = Lt.bind(t),
                i = function e(i) {
              var o = yt(i.target, qt.REFERENCE),
                  r = yt(i.target, qt.POPPER) === t.popper,
                  p = o === t.reference;r || p || mt(i, t.popper, t.options) && (document.body.removeEventListener('mouseleave', a), document.removeEventListener('mousemove', e), Lt.call(t, e));
            };return document.body.addEventListener('mouseleave', a), void document.addEventListener('mousemove', i);
          }Lt.call(t);
        }
      }, onBlur: function onBlur(e) {
        if (!(e.target !== t.reference || Ft.usingTouch)) {
          if (t.options.interactive) {
            if (!e.relatedTarget) return;if (yt(e.relatedTarget, qt.POPPER)) return;
          }Lt.call(t);
        }
      }, onDelegateShow: function onDelegateShow(e) {
        yt(e.target, t.options.target) && Tt.call(t, e);
      }, onDelegateHide: function onDelegateHide(e) {
        yt(e.target, t.options.target) && Lt.call(t);
      } };
  }function At() {
    var t = this,
        e = this.popper,
        a = this.reference,
        i = this.options,
        o = m(e),
        r = o.tooltip,
        p = i.popperOptions,
        n = 'round' === i.arrowType ? qt.ROUND_ARROW : qt.ARROW,
        s = r.querySelector(n),
        l = Qt({ placement: i.placement }, p || {}, { modifiers: Qt({}, p ? p.modifiers : {}, { arrow: Qt({ element: n }, p && p.modifiers ? p.modifiers.arrow : {}), flip: Qt({ enabled: i.flip, padding: i.distance + 5, behavior: i.flipBehavior }, p && p.modifiers ? p.modifiers.flip : {}), offset: Qt({ offset: i.offset }, p && p.modifiers ? p.modifiers.offset : {}) }), onCreate: function onCreate() {
        r.style[ct(e)] = ut(i.distance), s && i.arrowTransform && bt(e, s, i.arrowTransform);
      }, onUpdate: function onUpdate() {
        var t = r.style;t.top = '', t.bottom = '', t.left = '', t.right = '', t[ct(e)] = ut(i.distance), s && i.arrowTransform && bt(e, s, i.arrowTransform);
      } });return Xt.call(this, { target: e, callback: function callback() {
        t.popperInstance.update();
      }, options: { childList: !0, subtree: !0, characterData: !0 } }), new ce(a, e, l);
  }function Ct(t) {
    var e = this.options;if (this.popperInstance ? (this.popperInstance.scheduleUpdate(), e.livePlacement && !kt.call(this) && this.popperInstance.enableEventListeners()) : (this.popperInstance = At.call(this), !e.livePlacement && this.popperInstance.disableEventListeners()), !kt.call(this)) {
      var a = m(this.popper),
          i = a.arrow;i && (i.style.margin = ''), this.popperInstance.reference = this.reference;
    }dt(this.popperInstance, t, !0), e.appendTo.contains(this.popper) || e.appendTo.appendChild(this.popper);
  }function St() {
    var t = this._(he),
        e = t.showTimeout,
        a = t.hideTimeout;clearTimeout(e), clearTimeout(a);
  }function Yt() {
    var t = this;this._(he).followCursorListener = function (e) {
      var a = t._(he).lastMouseMoveEvent = e,
          i = a.clientX,
          o = a.clientY;t.popperInstance && (t.popperInstance.reference = { getBoundingClientRect: function getBoundingClientRect() {
          return { width: 0, height: 0, top: o, left: i, right: i, bottom: o };
        }, clientWidth: 0, clientHeight: 0 }, t.popperInstance.scheduleUpdate());
    };
  }function Pt() {
    var t = this,
        e = function e() {
      t.popper.style[p('transitionDuration')] = t.options.updateDuration + 'ms';
    },
        a = function a() {
      t.popper.style[p('transitionDuration')] = '';
    };(function i() {
      t.popperInstance && t.popperInstance.update(), e(), t.state.visible ? requestAnimationFrame(i) : a();
    })();
  }function Xt(t) {
    var e = t.target,
        a = t.callback,
        i = t.options;if (window.MutationObserver) {
      var o = new MutationObserver(a);o.observe(e, i), this._(he).mutationObservers.push(o);
    }
  }function Dt(t, a) {
    if (!t) return a();var e = m(this.popper),
        i = e.tooltip,
        o = function o(t, e) {
      e && i[t + 'EventListener']('transition' in document.body.style ? 'transitionend' : 'webkitTransitionEnd', e);
    },
        r = function t(r) {
      r.target === i && (o('remove', t), a());
    };o('remove', this._(he).transitionendListener), o('add', r), this._(he).transitionendListener = r;
  }function It(t, e) {
    return t.reduce(function (t, a) {
      var i = ye,
          o = c(a, e.performance ? e : d(a, e)),
          r = a.getAttribute('title');if (!r && !o.target && !o.html && !o.dynamicTitle) return t;a.setAttribute(o.target ? 'data-tippy-delegate' : 'data-tippy', ''), f(a);var p = s(i, r, o),
          n = new ue({ id: i, reference: a, popper: p, options: o, title: r, popperInstance: null });o.createPopperInstanceOnInit && (n.popperInstance = At.call(n), n.popperInstance.disableEventListeners());var h = Ot.call(n);return n.listeners = o.trigger.trim().split(' ').reduce(function (t, e) {
        return t.concat(l(e, a, h, o));
      }, []), o.dynamicTitle && Xt.call(n, { target: a, callback: function callback() {
          var t = m(p),
              e = t.content,
              i = a.getAttribute('title');i && (e[o.allowTitleHTML ? 'innerHTML' : 'textContent'] = n.title = i, f(a));
        }, options: { attributes: !0 } }), a._tippy = n, p._tippy = n, p._reference = a, t.push(n), ye++, t;
    }, []);
  }function Rt(t) {
    var e = a(document.querySelectorAll(qt.POPPER));e.forEach(function (e) {
      var a = e._tippy;if (a) {
        var i = a.options;(!0 === i.hideOnClick || -1 < i.trigger.indexOf('focus')) && (!t || e !== t.popper) && a.hide();
      }
    });
  }function Ht(t) {
    var i = function i() {
      Ft.usingTouch || (Ft.usingTouch = !0, Ft.iOS && document.body.classList.add('tippy-touch'), Ft.dynamicInputDetection && window.performance && document.addEventListener('mousemove', o), Ft.onUserInputChange('touch'));
    },
        o = function () {
      var t;return function () {
        var e = performance.now();20 > e - t && (Ft.usingTouch = !1, document.removeEventListener('mousemove', o), !Ft.iOS && document.body.classList.remove('tippy-touch'), Ft.onUserInputChange('mouse')), t = e;
      };
    }();document.addEventListener('click', function (t) {
      if (!(t.target instanceof Element)) return Rt();var e = yt(t.target, qt.REFERENCE),
          a = yt(t.target, qt.POPPER);if (!(a && a._tippy && a._tippy.options.interactive)) {
        if (e && e._tippy) {
          var i = e._tippy.options,
              o = -1 < i.trigger.indexOf('click'),
              r = i.multiple;if (!r && Ft.usingTouch || !r && o) return Rt(e._tippy);if (!0 !== i.hideOnClick || o) return;
        }Rt();
      }
    }, t), document.addEventListener('touchstart', i), window.addEventListener('blur', function () {
      var t = document,
          a = t.activeElement;a && a.blur && e.call(a, qt.REFERENCE) && a.blur();
    }), window.addEventListener('resize', function () {
      a(document.querySelectorAll(qt.POPPER)).forEach(function (t) {
        var e = t._tippy;e && !e.options.livePlacement && e.popperInstance.scheduleUpdate();
      });
    }), !Ft.supportsTouch && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) && document.addEventListener('pointerdown', i);
  }function _t(e, a, i) {
    Ft.supported && !ge && (Ht(we), ge = !0), t(e) && r(e), a = Qt({}, jt, a);var p = o(e),
        n = p[0];return { selector: e, options: a, tooltips: Ft.supported ? It(i && n ? [n] : p, a) : [], destroyAll: function destroyAll() {
        this.tooltips.forEach(function (t) {
          return t.destroy();
        }), this.tooltips = [];
      } };
  }var Nt = Math.min,
      Mt = Math.round,
      Wt = Math.floor,
      Bt = Math.max,
      Ut = 'undefined' != typeof window,
      zt = Ut && /MSIE |Trident\//.test(navigator.userAgent),
      Ft = {};Ut && (Ft.supported = 'requestAnimationFrame' in window, Ft.supportsTouch = 'ontouchstart' in window, Ft.usingTouch = !1, Ft.dynamicInputDetection = !0, Ft.iOS = /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream, Ft.onUserInputChange = function () {});for (var qt = { POPPER: '.tippy-popper', TOOLTIP: '.tippy-tooltip', CONTENT: '.tippy-content', BACKDROP: '.tippy-backdrop', ARROW: '.tippy-arrow', ROUND_ARROW: '.tippy-roundarrow', REFERENCE: '[data-tippy]' }, jt = { placement: 'top', livePlacement: !0, trigger: 'mouseenter focus', animation: 'shift-away', html: !1, animateFill: !0, arrow: !1, delay: [0, 20], duration: [350, 300], interactive: !1, interactiveBorder: 2, theme: 'dark', size: 'regular', distance: 10, offset: 0, hideOnClick: !0, multiple: !1, followCursor: !1, inertia: !1, updateDuration: 350, sticky: !1, appendTo: function appendTo() {
      return document.body;
    }, zIndex: 9999, touchHold: !1, performance: !1, dynamicTitle: !1, flip: !0, flipBehavior: 'flip', arrowType: 'sharp', arrowTransform: '', maxWidth: '', target: null, allowTitleHTML: !0, popperOptions: {}, createPopperInstanceOnInit: !1, onShow: function onShow() {}, onShown: function onShown() {}, onHide: function onHide() {}, onHidden: function onHidden() {} }, Kt = Ft.supported && Object.keys(jt), Vt = function Vt(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
  }, Gt = function () {
    function t(t, e) {
      for (var a, o = 0; o < e.length; o++) {
        a = e[o], a.enumerable = a.enumerable || !1, a.configurable = !0, ('value' in a) && (a.writable = !0), Object.defineProperty(t, a.key, a);
      }
    }return function (e, a, i) {
      return a && t(e.prototype, a), i && t(e, i), e;
    };
  }(), Qt = Object.assign || function (t) {
    for (var e, a = 1; a < arguments.length; a++) {
      for (var i in e = arguments[a], e) {
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      }
    }return t;
  }, Zt = 'undefined' != typeof window && 'undefined' != typeof document, $t = ['Edge', 'Trident', 'Firefox'], Jt = 0, te = 0; te < $t.length; te += 1) {
    if (Zt && 0 <= navigator.userAgent.indexOf($t[te])) {
      Jt = 1;break;
    }
  }var i = Zt && window.Promise,
      ee = i ? function (t) {
    var e = !1;return function () {
      e || (e = !0, window.Promise.resolve().then(function () {
        e = !1, t();
      }));
    };
  } : function (t) {
    var e = !1;return function () {
      e || (e = !0, setTimeout(function () {
        e = !1, t();
      }, Jt));
    };
  },
      ae = Zt && !!(window.MSInputMethodContext && document.documentMode),
      ie = Zt && /MSIE 10/.test(navigator.userAgent),
      oe = function oe(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
  },
      re = function () {
    function t(t, e) {
      for (var a, o = 0; o < e.length; o++) {
        a = e[o], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
      }
    }return function (e, a, i) {
      return a && t(e.prototype, a), i && t(e, i), e;
    };
  }(),
      pe = function pe(t, e, a) {
    return e in t ? Object.defineProperty(t, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = a, t;
  },
      ne = Object.assign || function (t) {
    for (var e, a = 1; a < arguments.length; a++) {
      for (var i in e = arguments[a], e) {
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      }
    }return t;
  },
      se = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      le = se.slice(3),
      de = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
      ce = function () {
    function t(e, a) {
      var i = this,
          o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};oe(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = ee(this.update.bind(this)), this.options = ne({}, t.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = a && a.jquery ? a[0] : a, this.options.modifiers = {}, Object.keys(ne({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = ne({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
        return ne({ name: t }, i.options.modifiers[t]);
      }).sort(function (t, e) {
        return t.order - e.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && h(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();var r = this.options.eventsEnabled;r && this.enableEventListeners(), this.state.eventsEnabled = r;
    }return re(t, [{ key: 'update', value: function value() {
        return F.call(this);
      } }, { key: 'destroy', value: function value() {
        return K.call(this);
      } }, { key: 'enableEventListeners', value: function value() {
        return Z.call(this);
      } }, { key: 'disableEventListeners', value: function value() {
        return J.call(this);
      } }]), t;
  }();ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ce.placements = se, ce.Defaults = { placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(t) {
          var e = t.placement,
              a = e.split('-')[0],
              i = e.split('-')[1];if (i) {
            var o = t.offsets,
                r = o.reference,
                p = o.popper,
                n = -1 !== ['bottom', 'top'].indexOf(a),
                s = n ? 'left' : 'top',
                l = n ? 'width' : 'height',
                d = { start: pe({}, s, r[s]), end: pe({}, s, r[s] + r[l] - p[l]) };t.offsets.popper = ne({}, p, d[i]);
          }return t;
        } }, offset: { order: 200, enabled: !0, fn: st, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(t, e) {
          var a = e.boundariesElement || w(t.instance.popper);t.instance.reference === a && (a = w(a));var i = j('transform'),
              o = t.instance.popper.style,
              r = o.top,
              p = o.left,
              n = o[i];o.top = '', o.left = '', o[i] = '';var s = I(t.instance.popper, t.instance.reference, e.padding, a, t.positionFixed);o.top = r, o.left = p, o[i] = n, e.boundaries = s;var l = e.priority,
              d = t.offsets.popper,
              c = { primary: function primary(t) {
              var a = d[t];return d[t] < s[t] && !e.escapeWithReference && (a = Bt(d[t], s[t])), pe({}, t, a);
            }, secondary: function secondary(t) {
              var a = 'right' === t ? 'left' : 'top',
                  i = d[a];return d[t] > s[t] && !e.escapeWithReference && (i = Nt(d[a], s[t] - ('right' === t ? d.width : d.height))), pe({}, a, i);
            } };return l.forEach(function (t) {
            var e = -1 === ['left', 'top'].indexOf(t) ? 'secondary' : 'primary';d = ne({}, d, c[e](t));
          }), t.offsets.popper = d, t;
        }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function fn(t) {
          var e = t.offsets,
              a = e.popper,
              i = e.reference,
              o = t.placement.split('-')[0],
              r = Wt,
              p = -1 !== ['top', 'bottom'].indexOf(o),
              n = p ? 'right' : 'bottom',
              s = p ? 'left' : 'top',
              l = p ? 'width' : 'height';return a[n] < r(i[s]) && (t.offsets.popper[s] = r(i[s]) - a[l]), a[s] > r(i[n]) && (t.offsets.popper[s] = r(i[n])), t;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(t, e) {
          var a;if (!it(t.instance.modifiers, 'arrow', 'keepTogether')) return t;var i = e.element;if ('string' == typeof i) {
            if (i = t.instance.popper.querySelector(i), !i) return t;
          } else if (!t.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), t;var o = t.placement.split('-')[0],
              r = t.offsets,
              p = r.popper,
              n = r.reference,
              s = -1 !== ['left', 'right'].indexOf(o),
              l = s ? 'height' : 'width',
              d = s ? 'Top' : 'Left',
              c = d.toLowerCase(),
              m = s ? 'left' : 'top',
              f = s ? 'bottom' : 'right',
              h = N(i)[l];n[f] - h < p[c] && (t.offsets.popper[c] -= p[c] - (n[f] - h)), n[c] + h > p[f] && (t.offsets.popper[c] += n[c] + h - p[f]), t.offsets.popper = C(t.offsets.popper);var u = n[c] + n[l] / 2 - h / 2,
              y = b(t.instance.popper),
              g = parseFloat(y['margin' + d], 10),
              w = parseFloat(y['border' + d + 'Width'], 10),
              x = u - t.offsets.popper[c] - g - w;return x = Bt(Nt(p[l] - h, x), 0), t.arrowElement = i, t.offsets.arrow = (a = {}, pe(a, c, Mt(x)), pe(a, m, ''), a), t;
        }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function fn(t, e) {
          if (q(t.instance.modifiers, 'inner')) return t;if (t.flipped && t.placement === t.originalPlacement) return t;var a = I(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
              i = t.placement.split('-')[0],
              o = M(i),
              r = t.placement.split('-')[1] || '',
              p = [];switch (e.behavior) {case de.FLIP:
              p = [i, o];break;case de.CLOCKWISE:
              p = rt(i);break;case de.COUNTERCLOCKWISE:
              p = rt(i, !0);break;default:
              p = e.behavior;}return p.forEach(function (n, s) {
            if (i !== n || p.length === s + 1) return t;i = t.placement.split('-')[0], o = M(i);var l = t.offsets.popper,
                d = t.offsets.reference,
                c = Wt,
                m = 'left' === i && c(l.right) > c(d.left) || 'right' === i && c(l.left) < c(d.right) || 'top' === i && c(l.bottom) > c(d.top) || 'bottom' === i && c(l.top) < c(d.bottom),
                f = c(l.left) < c(a.left),
                h = c(l.right) > c(a.right),
                b = c(l.top) < c(a.top),
                u = c(l.bottom) > c(a.bottom),
                y = 'left' === i && f || 'right' === i && h || 'top' === i && b || 'bottom' === i && u,
                g = -1 !== ['top', 'bottom'].indexOf(i),
                w = !!e.flipVariations && (g && 'start' === r && f || g && 'end' === r && h || !g && 'start' === r && b || !g && 'end' === r && u);(m || y || w) && (t.flipped = !0, (m || y) && (i = p[s + 1]), w && (r = ot(r)), t.placement = i + (r ? '-' + r : ''), t.offsets.popper = ne({}, t.offsets.popper, W(t.instance.popper, t.offsets.reference, t.placement)), t = z(t.instance.modifiers, t, 'flip'));
          }), t;
        }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function fn(t) {
          var e = t.placement,
              a = e.split('-')[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              p = -1 !== ['left', 'right'].indexOf(a),
              n = -1 === ['top', 'left'].indexOf(a);return o[p ? 'left' : 'top'] = r[a] - (n ? o[p ? 'width' : 'height'] : 0), t.placement = M(e), t.offsets.popper = C(o), t;
        } }, hide: { order: 800, enabled: !0, fn: function fn(t) {
          if (!it(t.instance.modifiers, 'hide', 'preventOverflow')) return t;var e = t.offsets.reference,
              a = B(t.instance.modifiers, function (t) {
            return 'preventOverflow' === t.name;
          }).boundaries;if (e.bottom < a.top || e.left > a.right || e.top > a.bottom || e.right < a.left) {
            if (!0 === t.hide) return t;t.hide = !0, t.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === t.hide) return t;t.hide = !1, t.attributes['x-out-of-boundaries'] = !1;
          }return t;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(t, e) {
          var a = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = B(t.instance.modifiers, function (t) {
            return 'applyStyle' === t.name;
          }).gpuAcceleration;void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var p = void 0 === r ? e.gpuAcceleration : r,
              n = w(t.instance.popper),
              s = S(n),
              l = { position: o.position },
              d = { left: Wt(o.left), top: Mt(o.top), bottom: Mt(o.bottom), right: Wt(o.right) },
              c = 'bottom' === a ? 'top' : 'bottom',
              m = 'right' === i ? 'left' : 'right',
              f = j('transform'),
              h = void 0,
              b = void 0;if (b = 'bottom' == c ? 'HTML' === n.nodeName ? -n.clientHeight + d.bottom : -s.height + d.bottom : d.top, h = 'right' == m ? 'HTML' === n.nodeName ? -n.clientWidth + d.right : -s.width + d.right : d.left, p && f) l[f] = 'translate3d(' + h + 'px, ' + b + 'px, 0)', l[c] = 0, l[m] = 0, l.willChange = 'transform';else {
            var u = 'bottom' == c ? -1 : 1,
                y = 'right' == m ? -1 : 1;l[c] = b * u, l[m] = h * y, l.willChange = c + ', ' + m;
          }var g = { "x-placement": t.placement };return t.attributes = ne({}, g, t.attributes), t.styles = ne({}, l, t.styles), t.arrowStyles = ne({}, t.offsets.arrow, t.arrowStyles), t;
        }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function fn(t) {
          return et(t.instance.popper, t.styles), at(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && et(t.arrowElement, t.arrowStyles), t;
        }, onLoad: function onLoad(t, e, a, i, o) {
          var r = _(o, e, t, a.positionFixed),
              p = H(a.placement, r, e, t, a.modifiers.flip.boundariesElement, a.modifiers.flip.padding);return e.setAttribute('x-placement', p), et(e, { position: a.positionFixed ? 'fixed' : 'absolute' }), a;
        }, gpuAcceleration: void 0 } } };var me = {};if (Ut) {
    var fe = Element.prototype;me = fe.matches || fe.matchesSelector || fe.webkitMatchesSelector || fe.mozMatchesSelector || fe.msMatchesSelector || function (t) {
      for (var e = (this.document || this.ownerDocument).querySelectorAll(t), a = e.length; 0 <= --a && e.item(a) !== this;) {}return -1 < a;
    };
  }var e = me,
      he = {},
      be = function be(t) {
    return function (e) {
      return e === he && t;
    };
  },
      ue = function () {
    function t(e) {
      for (var a in Vt(this, t), e) {
        this[a] = e[a];
      }this.state = { destroyed: !1, visible: !1, enabled: !0 }, this._ = be({ mutationObservers: [] });
    }return Gt(t, [{ key: 'enable', value: function value() {
        this.state.enabled = !0;
      } }, { key: 'disable', value: function value() {
        this.state.enabled = !1;
      } }, { key: 'show', value: function value(t) {
        var e = this;if (!this.state.destroyed && this.state.enabled) {
          var a = this.popper,
              i = this.reference,
              o = this.options,
              r = m(a),
              n = r.tooltip,
              s = r.backdrop,
              l = r.content;return o.dynamicTitle && !i.getAttribute('data-original-title') || i.hasAttribute('disabled') ? void 0 : i.refObj || document.documentElement.contains(i) ? void (o.onShow.call(a, this), t = gt(void 0 === t ? o.duration : t, 0), xt([a, n, s], 0), a.style.visibility = 'visible', this.state.visible = !0, Ct.call(this, function () {
            if (e.state.visible) {
              if (kt.call(e) || e.popperInstance.scheduleUpdate(), kt.call(e)) {
                e.popperInstance.disableEventListeners();var r = gt(o.delay, 0),
                    d = e._(he).lastTriggerEvent;d && e._(he).followCursorListener(r && e._(he).lastMouseMoveEvent ? e._(he).lastMouseMoveEvent : d);
              }xt([n, s, s ? l : null], t), s && getComputedStyle(s)[p('transform')], o.interactive && i.classList.add('tippy-active'), o.sticky && Pt.call(e), wt([n, s], 'visible'), Dt.call(e, t, function () {
                o.updateDuration || n.classList.add('tippy-notransition'), o.interactive && vt(a), i.setAttribute('aria-describedby', 'tippy-' + e.id), o.onShown.call(a, e);
              });
            }
          })) : void this.destroy();
        }
      } }, { key: 'hide', value: function value(t) {
        var e = this;if (!this.state.destroyed && this.state.enabled) {
          var a = this.popper,
              i = this.reference,
              o = this.options,
              r = m(a),
              p = r.tooltip,
              n = r.backdrop,
              s = r.content;o.onHide.call(a, this), t = gt(void 0 === t ? o.duration : t, 1), o.updateDuration || p.classList.remove('tippy-notransition'), o.interactive && i.classList.remove('tippy-active'), a.style.visibility = 'hidden', this.state.visible = !1, xt([p, n, n ? s : null], t), wt([p, n], 'hidden'), o.interactive && -1 < o.trigger.indexOf('click') && vt(i), Dt.call(this, t, function () {
            e.state.visible || !o.appendTo.contains(a) || (!e._(he).isPreparingToShow && (document.removeEventListener('mousemove', e._(he).followCursorListener), e._(he).lastMouseMoveEvent = null), e.popperInstance && e.popperInstance.disableEventListeners(), i.removeAttribute('aria-describedby'), o.appendTo.removeChild(a), o.onHidden.call(a, e));
          });
        }
      } }, { key: 'destroy', value: function value() {
        var t = this,
            e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];if (!this.state.destroyed) {
          this.state.visible && this.hide(0), this.listeners.forEach(function (e) {
            t.reference.removeEventListener(e.event, e.handler);
          }), this.title && this.reference.setAttribute('title', this.title), delete this.reference._tippy;['data-original-title', 'data-tippy', 'data-tippy-delegate'].forEach(function (e) {
            t.reference.removeAttribute(e);
          }), this.options.target && e && a(this.reference.querySelectorAll(this.options.target)).forEach(function (t) {
            return t._tippy && t._tippy.destroy();
          }), this.popperInstance && this.popperInstance.destroy(), this._(he).mutationObservers.forEach(function (t) {
            t.disconnect();
          }), this.state.destroyed = !0;
        }
      } }]), t;
  }(),
      ye = 1,
      ge = !1,
      we = !1;return _t.version = '2.6.0', _t.browser = Ft, _t.defaults = jt, _t.one = function (t, e) {
    return _t(t, e, !0).tooltips[0];
  }, _t.disableAnimations = function () {
    jt.updateDuration = jt.duration = 0, jt.animateFill = !1;
  }, _t.useCapture = function () {
    we = !0;
  }, function () {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : '';if (Ut && Ft.supported) {
      var e = document.head || document.querySelector('head'),
          a = document.createElement('style');a.type = 'text/css', e.insertBefore(a, e.firstChild), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t));
    }
  }('.tippy-touch{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{max-width:350px;-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4}.tippy-popper[data-html]{max-width:96%;max-width:calc(100% - 20px)}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 90%;transform-origin:0 90%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,25%);transform:scale(6) translate(-50%,25%);opacity:1}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,25%);transform:scale(1) translate(-50%,25%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(90deg);transform:translateY(0) rotateX(90deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -90%;transform-origin:0 -90%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,-125%);transform:scale(6) translate(-50%,-125%);opacity:1}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,-125%);transform:scale(1) translate(-50%,-125%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-90deg);transform:translateY(0) rotateX(-90deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:100% 0;transform-origin:100% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(40%,-50%);transform:scale(6) translate(40%,-50%);opacity:1}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(40%,-50%);transform:scale(1.5) translate(40%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-90deg);transform:translateX(0) rotateY(-90deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-100% 0;transform-origin:-100% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-140%,-50%);transform:scale(6) translate(-140%,-50%);opacity:1}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(-140%,-50%);transform:scale(1.5) translate(-140%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(90deg);transform:translateX(0) rotateY(90deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-animatefill] .tippy-content{transition:-webkit-clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98),-webkit-clip-path cubic-bezier(.46,.1,.52,.98)}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:26%;left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(100% 100% at 50% 50%);clip-path:ellipse(100% 100% at 50% 50%)}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(5% 50% at 50% 50%);clip-path:ellipse(5% 50% at 50% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 0 50%);clip-path:ellipse(135% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 0 50%);clip-path:ellipse(40% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 100% 50%);clip-path:ellipse(135% 100% at 100% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 100% 50%);clip-path:ellipse(40% 100% at 100% 50%)}@media (max-width:360px){.tippy-popper{max-width:96%;max-width:calc(100% - 20px)}}'), _t;
});
