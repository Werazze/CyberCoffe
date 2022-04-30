! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new
        Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (h, e) {
    function t(e, t) {
        return t.toUpperCase()
    }
    var n = [],
        u = n.slice,
        m = n.concat,
        s = n.push,
        o = n.indexOf,
        i = {},
        r = i.toString,
        g = i.hasOwnProperty,
        v = {},
        y = h.document,
        a = "2.1.1",
        S = function (e, t) {
            return new S.fn.init(e, t)
        },
        l = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        c = /^-ms-/,
        d = /-([\da-z])/gi;

    function p(e) {
        var t = e.length,
            n = S.type(e);
        return "function" !== n && !S.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }
    S.fn = S.prototype = {
        jquery: a,
        constructor: S,
        selector: "",
        length: 0,
        toArray: function () {
            return u.call(this)
        },
        get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
        },
        pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return S.each(this, e, t)
        },
        map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(u.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, S.extend = S.fn.extend = function () {
        var e, t, n, i, o, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || S.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (i = e[t]) && (c && i && (S.isPlainObject(i) || (o = S.isArray(i))) ? (r = o ? (o = !1, n && S.isArray(n) ? n : []) : n && S.isPlainObject(n) ? n : {}, a[t] = S.extend(c, r, i)) : void 0 !== i && (a[t] = i));
        return a
    }, S.extend({
        expando: "jQuery" + (a + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {

        },
        isFunction: function (e) {
            return "function" === S.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            return !S.isArray(e) && 0 <= e - parseFloat(e)
        },
        isPlainObject: function (e) {
            return "object" === S.type(e) && !e.nodeType && !S.isWindow(e) && !(e.constructor && !g.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            var t, n = eval;
            (e = S.trim(e)) && (1 === e.indexOf("use strict") ? ((t = y.createElement("script")).text = e, y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(c, "ms-").replace(d, t)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var i = 0,
                o = e.length,
                r = p(e);
            if (n) {
                if (r)
                    for (; i < o && !1 !== t.apply(e[i], n); i++);
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], n)) break
            } else if (r)
                for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(l, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) != a && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var i, o = 0,
                r = e.length,
                a = [];
            if (p(e))
                for (; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return m.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), S.isFunction(e) ? (i = u.call(arguments, 2), (o = function () {
                return e.apply(t || this, i.concat(u.call(arguments)))
            }).guid = e.guid = e.guid || S.guid++, o) : void 0
        },
        now: Date.now,
        support: v
    }), S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var f = function (n) {
        function d(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }
        var e, h, x, r, i, m, p, g, k, c, u, v, w, o, y, b, a, s, S, T = "sizzle" + -new Date,
            C = n.document,
            E = 0,
            f = 0,
            l = oe(),
            P = oe(),
            A = oe(),
            $ = function (e, t) {
                return e === t && (u = !0), 0
            },
            O = "undefined",
            L = {}.hasOwnProperty,
            t = [],
            M = t.pop,
            j = t.push,
            D = t.push,
            N = t.slice,
            R = t.indexOf || function (e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            B = H.replace("w", "w#"),
            _ = "\\[" + F + "*(" + H + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + F + "*\\]",
            z = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _ + ")*)|.*)\\)|)",
            q = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
            W = new RegExp("^" + F + "*," + F + "*"),
            U = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            X = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
            G = new RegExp(z),
            Y = new RegExp("^" + B + "$"),
            V = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + _),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
            },
            K = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig");
        try {
            D.apply(t = N.call(C.childNodes), C.childNodes), t[C.childNodes.length].nodeType
        } catch (e) {
            D = {
                apply: t.length ? function (e, t) {
                    j.apply(e, N.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, n, i) {
            var o, r, a, s, l, c, u, d, p, f;
            if ((t ? t.ownerDocument || t : C) !== w && v(t), n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = (t = t || w).nodeType) && 9 !== s) return [];
            if (y && !i) {
                if (o = J.exec(e))
                    if (a = o[1]) {
                        if (9 === s) {
                            if (!(r = t.getElementById(a)) || !r.parentNode) return n;
                            if (r.id === a) return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && S(t, r) && r.id === a) return n.push(r), n
                    } else {
                        if (o[2]) return D.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = o[3]) && h.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(a)), n
                    } if (h.qsa && (!b || !b.test(e))) {
                    if (d = u = T, p = t, f = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = m(e), (u = t.getAttribute("id")) ? d = u.replace(te, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + pe(c[l]);
                        p = ee.test(e) && ue(t.parentNode) || t, f = c.join(",")
                    }
                    if (f) try {
                        return D.apply(n, p.querySelectorAll(f)), n
                    } catch (e) {} finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(q, "$1"), t, n, i)
        }

        function oe() {
            var n = [];

            function i(e, t) {
                return n.push(e + " ") > x.cacheLength && delete i[n.shift()], i[e + " "] = t
            }
            return i
        }

        function re(e) {
            return e[T] = !0, e
        }

        function ae(e) {
            var t = w.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function se(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t
        }

        function le(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(a) {
            return re(function (r) {
                return r = +r, re(function (e, t) {
                    for (var n, i = a([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ue(e) {
            return e && typeof e.getElementsByTagName !== O && e
        }
        for (e in h = ie.support = {}, i = ie.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, v = ie.setDocument = function (e) {
                var t, l = e ? e.ownerDocument || e : C,
                    n = l.defaultView;
                return l !== w && 9 === l.nodeType && l.documentElement ? (o = (w = l).documentElement, y = !i(l), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function () {
                    v()
                }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
                    v()
                })), h.attributes = ae(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = ae(function (e) {
                    return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = Z.test(l.getElementsByClassName) && ae(function (e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), h.getById = ae(function (e) {
                    return o.appendChild(e).id = T, !l.getElementsByName || !l.getElementsByName(T).length
                }), h.getById ? (x.find.ID = function (e, t) {
                    if (typeof t.getElementById !== O && y) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, x.filter.ID = function (e) {
                    var t = e.replace(ne, d);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete x.find.ID, x.filter.ID = function (e) {
                    var n = e.replace(ne, d);
                    return function (e) {
                        var t = typeof e.getAttributeNode !== O && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), x.find.TAG = h.getElementsByTagName ? function (e, t) {
                    return typeof t.getElementsByTagName !== O ? t.getElementsByTagName(e) : void 0
                } : function (e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }, x.find.CLASS = h.getElementsByClassName && function (e, t) {
                    return typeof t.getElementsByClassName !== O && y ? t.getElementsByClassName(e) : void 0
                }, a = [], b = [], (h.qsa = Z.test(l.querySelectorAll)) && (ae(function (e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && b.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || b.push("\\[" + F + "*(?:value|" + I + ")"), e.querySelectorAll(":checked").length || b.push(":checked")
                }), ae(function (e) {
                    var t = l.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && b.push("name" + F + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || b.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), b.push(",.*:")
                })), (h.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ae(function (e) {
                    h.disconnectedMatch = s.call(e, "div"), s.call(e, "[s!='']:x"), a.push("!=", z)
                }), b = b.length && new RegExp(b.join("|")), a = a.length && new RegExp(a.join("|")), t = Z.test(o.compareDocumentPosition), S = t || Z.test(o.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, $ = t ? function (e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === C && S(C, e) ? -1 : t === l || t.ownerDocument === C && S(C, t) ? 1 : c ? R.call(c, e) - R.call(c, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!o || !r) return e === l ? -1 : t === l ? 1 : o ? -1 : r ? 1 : c ? R.call(c, e) - R.call(c, t) : 0;
                    if (o === r) return le(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[i] === s[i];) i++;
                    return i ? le(a[i], s[i]) : a[i] === C ? -1 : s[i] === C ? 1 : 0
                }, l) : w
            }, ie.matches = function (e, t) {
                return ie(e, null, null, t)
            }, ie.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== w && v(e), t = t.replace(X, "='$1']"), !(!h.matchesSelector || !y || a && a.test(t) || b && b.test(t))) try {
                    var n = s.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < ie(t, w, null, [e]).length
            }, ie.contains = function (e, t) {
                return (e.ownerDocument || e) !== w && v(e), S(e, t)
            }, ie.attr = function (e, t) {
                (e.ownerDocument || e) !== w && v(e);
                var n = x.attrHandle[t.toLowerCase()],
                    i = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0;
                return void 0 !== i ? i : h.attributes || !y ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, ie.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ie.uniqueSort = function (e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (u = !h.detectDuplicates, c = !h.sortStable && e.slice(0), e.sort($), u) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return c = null, e
            }, r = ie.getText = function (e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (x = ie.selectors = {
                cacheLength: 50,
                createPseudo: re,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(ne, d), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ne, d).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = l[e + " "];
                        return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && l(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== O && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, i, o) {
                        return function (e) {
                            var t = ie.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function (f, e, t, h, m) {
                        var g = "nth" !== f.slice(0, 3),
                            v = "last" !== f.slice(-4),
                            y = "of-type" === e;
                        return 1 === h && 0 === m ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var i, o, r, a, s, l, c = g != v ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = y && e.nodeName.toLowerCase(),
                                p = !n && !y;
                            if (u) {
                                if (g) {
                                    for (; c;) {
                                        for (r = e; r = r[c];)
                                            if (y ? r.nodeName.toLowerCase() === d : 1 === r.nodeType) return !1;
                                        l = c = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [v ? u.firstChild : u.lastChild], v && p) {
                                    for (s = (i = (o = u[T] || (u[T] = {}))[f] || [])[0] === E && i[1], a = i[0] === E && i[2], r = s && u.childNodes[s]; r = ++s && r && r[c] || (a = s = 0) || l.pop();)
                                        if (1 === r.nodeType && ++a && r === e) {
                                            o[f] = [E, s, a];
                                            break
                                        }
                                } else if (p && (i = (e[T] || (e[T] = {}))[f]) && i[0] === E) a = i[1];
                                else
                                    for (;
                                        (r = ++s && r && r[c] || (a = s = 0) || l.pop()) && ((y ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++a || (p && ((r[T] || (r[T] = {}))[f] = [E, a]), r !== e)););
                                return (a -= m) === h || a % h == 0 && 0 <= a / h
                            }
                        }
                    },
                    PSEUDO: function (e, r) {
                        var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return a[T] ? a(r) : 1 < a.length ? (t = [e, e, "", r], x.setFilters.hasOwnProperty(e.toLowerCase()) ? re(function (e, t) {
                            for (var n, i = a(e, r), o = i.length; o--;) e[n = R.call(e, i[o])] = !(t[n] = i[o])
                        }) : function (e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: re(function (e) {
                        var i = [],
                            o = [],
                            s = p(e.replace(q, "$1"));
                        return s[T] ? re(function (e, t, n, i) {
                            for (var o, r = s(e, null, i, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
                        }) : function (e, t, n) {
                            return i[0] = e, s(i, null, n, o), !o.pop()
                        }
                    }),
                    has: re(function (t) {
                        return function (e) {
                            return 0 < ie(t, e).length
                        }
                    }),
                    contains: re(function (t) {
                        return function (e) {
                            return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
                        }
                    }),
                    lang: re(function (n) {
                        return Y.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(ne, d).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === o
                    },
                    focus: function (e) {
                        return e === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return !1 === e.disabled
                    },
                    disabled: function (e) {
                        return !0 === e.disabled
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function (e) {
                        return Q.test(e.nodeName)
                    },
                    input: function (e) {
                        return K.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ce(function () {
                        return [0]
                    }),
                    last: ce(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ce(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ce(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ce(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ce(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: ce(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[e] = function (t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(e);
        for (e in {
                submit: !0,
                reset: !0
            }) x.pseudos[e] = function (n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }(e);

        function de() {}

        function pe(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function fe(a, e, t) {
            var s = e.dir,
                l = t && "parentNode" === s,
                c = f++;
            return e.first ? function (e, t, n) {
                for (; e = e[s];)
                    if (1 === e.nodeType || l) return a(e, t, n)
            } : function (e, t, n) {
                var i, o, r = [E, c];
                if (n) {
                    for (; e = e[s];)
                        if ((1 === e.nodeType || l) && a(e, t, n)) return !0
                } else
                    for (; e = e[s];)
                        if (1 === e.nodeType || l) {
                            if ((i = (o = e[T] || (e[T] = {}))[s]) && i[0] === E && i[1] === c) return r[2] = i[2];
                            if ((o[s] = r)[2] = a(e, t, n)) return !0
                        }
            }
        }

        function he(o) {
            return 1 < o.length ? function (e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function me(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++) !(r = e[s]) || n && !n(r, i, o) || (a.push(r), c && t.push(s));
            return a
        }

        function ge(f, h, m, g, v, e) {
            return g && !g[T] && (g = ge(g)), v && !v[T] && (v = ge(v, e)), re(function (e, t, n, i) {
                var o, r, a, s = [],
                    l = [],
                    c = t.length,
                    u = e || function (e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) ie(e, t[i], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    d = !f || !e && h ? u : me(u, s, f, n, i),
                    p = m ? v || (e ? f : c || g) ? [] : t : d;
                if (m && m(d, p, n, i), g)
                    for (o = me(p, l), g(o, [], n, i), r = o.length; r--;)(a = o[r]) && (p[l[r]] = !(d[l[r]] = a));
                if (e) {
                    if (v || f) {
                        if (v) {
                            for (o = [], r = p.length; r--;)(a = p[r]) && o.push(d[r] = a);
                            v(null, p = [], o, i)
                        }
                        for (r = p.length; r--;)(a = p[r]) && -1 < (o = v ? R.call(e, a) : s[r]) && (e[o] = !(t[o] = a))
                    }
                } else p = me(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, i) : D.apply(t, p)
            })
        }

        function ve(g, v) {
            function e(e, t, n, i, o) {
                var r, a, s, l = 0,
                    c = "0",
                    u = e && [],
                    d = [],
                    p = k,
                    f = e || b && x.find.TAG("*", o),
                    h = E += null == p ? 1 : Math.random() || .1,
                    m = f.length;
                for (o && (k = t !== w && t); c !== m && null != (r = f[c]); c++) {
                    if (b && r) {
                        for (a = 0; s = g[a++];)
                            if (s(r, t, n)) {
                                i.push(r);
                                break
                            } o && (E = h)
                    }
                    y && ((r = !s && r) && l--, e && u.push(r))
                }
                if (l += c, y && c !== l) {
                    for (a = 0; s = v[a++];) s(u, d, t, n);
                    if (e) {
                        if (0 < l)
                            for (; c--;) u[c] || d[c] || (d[c] = M.call(i));
                        d = me(d)
                    }
                    D.apply(i, d), o && !e && 0 < d.length && 1 < l + v.length && ie.uniqueSort(i)
                }
                return o && (E = h, k = p), u
            }
            var y = 0 < v.length,
                b = 0 < g.length;
            return y ? re(e) : e
        }
        return de.prototype = x.filters = x.pseudos, x.setFilters = new de, m = ie.tokenize = function (e, t) {
            var n, i, o, r, a, s, l, c = P[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, s = [], l = x.preFilter; a;) {
                for (r in n && !(i = W.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(o = [])), n = !1, (i = U.exec(a)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(q, " ")
                    }), a = a.slice(n.length)), x.filter) !(i = V[r].exec(a)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ie.error(e) : P(e, s).slice(0)
        }, p = ie.compile = function (e, t) {
            var n, i = [],
                o = [],
                r = A[e + " "];
            if (!r) {
                for (n = (t = t || m(e)).length; n--;)(r = function e(t) {
                    for (var i, n, o, r = t.length, a = x.relative[t[0].type], s = a || x.relative[" "], l = a ? 1 : 0, c = fe(function (e) {
                            return e === i
                        }, s, !0), u = fe(function (e) {
                            return -1 < R.call(i, e)
                        }, s, !0), d = [function (e, t, n) {
                            return !a && (n || t !== k) || ((i = t).nodeType ? c : u)(e, t, n)
                        }]; l < r; l++)
                        if (n = x.relative[t[l].type]) d = [fe(he(d), n)];
                        else {
                            if ((n = x.filter[t[l].type].apply(null, t[l].matches))[T]) {
                                for (o = ++l; o < r && !x.relative[t[o].type]; o++);
                                return ge(1 < l && he(d), 1 < l && pe(t.slice(0, l - 1).concat({
                                    value: " " === t[l - 2].type ? "*" : ""
                                })).replace(q, "$1"), n, l < o && e(t.slice(l, o)), o < r && e(t = t.slice(o)), o < r && pe(t))
                            }
                            d.push(n)
                        } return he(d)
                }(t[n]))[T] ? i.push(r) : o.push(r);
                (r = A(e, ve(o, i))).selector = e
            }
            return r
        }, g = ie.select = function (e, t, n, i) {
            var o, r, a, s, l, c = "function" == typeof e && e,
                u = !i && m(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (a = r[0]).type && h.getById && 9 === t.nodeType && y && x.relative[r[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(ne, d), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !x.relative[s = a.type]);)
                    if ((l = x.find[s]) && (i = l(a.matches[0].replace(ne, d), ee.test(r[0].type) && ue(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && pe(r))) return D.apply(n, i), n;
                        break
                    }
            }
            return (c || p(e, u))(i, t, !y, n, ee.test(e) && ue(t.parentNode) || t), n
        }, h.sortStable = T.split("").sort($).join("") === T, h.detectDuplicates = !!u, v(), h.sortDetached = ae(function (e) {
            return 1 & e.compareDocumentPosition(w.createElement("div"))
        }), ae(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || se("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && ae(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || se("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ae(function (e) {
            return null == e.getAttribute("disabled")
        }) || se(I, function (e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ie
    }(h);
    S.find = f, S.expr = f.selectors, S.expr[":"] = S.expr.pseudos, S.unique = f.uniqueSort, S.text = f.getText, S.isXMLDoc = f.isXML, S.contains = f.contains;
    var b = S.expr.match.needsContext,
        x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        k = /^.[^:#\[\.,]*$/;

    function w(e, n, i) {
        if (S.isFunction(n)) return S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return S.grep(e, function (e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (k.test(n)) return S.filter(n, e, i);
            n = S.filter(n, e)
        }
        return S.grep(e, function (e) {
            return 0 <= o.call(n, e) !== i
        })
    }
    S.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function (e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
                for (t = 0; t < n; t++)
                    if (S.contains(o[t], this)) return !0
            }));
            for (t = 0; t < n; t++) S.find(e, o[t], i);
            return (i = this.pushStack(1 < n ? S.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function (e) {
            return this.pushStack(w(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(w(this, e || [], !0))
        },
        is: function (e) {
            return !!w(this, "string" == typeof e && b.test(e) ? S(e) : e || [], !1).length
        }
    });
    var T, C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (S.fn.init = function (e, t) {
        var n, i;
        if (!e) return this;
        if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : S.isFunction(e) ? void 0 !== T.ready ? T.ready(e) : e(S) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), S.makeArray(e, this));
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : C.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), x.test(n[1]) && S.isPlainObject(t))
                for (n in t) S.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        return (i = y.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = y, this.selector = e, this
    }).prototype = S.fn, T = S(y);
    var E = /^(?:parents|prev(?:Until|All))/,
        P = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    S.extend({
        dir: function (e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && S(e).is(n)) break;
                    i.push(e)
                } return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, o = this.length, r = [], a = b.test(e) || "string" != typeof e ? S(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    } return this.pushStack(1 < r.length ? S.unique(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? o.call(S(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(S.unique(S.merge(this.get(), S(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return S.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return S.dir(e, "parentNode", n)
        },
        next: function (e) {
            return A(e, "nextSibling")
        },
        prev: function (e) {
            return A(e, "previousSibling")
        },
        nextAll: function (e) {
            return S.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return S.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return S.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return S.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return S.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return S.sibling(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || S.merge([], e.childNodes)
        }
    }, function (i, o) {
        S.fn[i] = function (e, t) {
            var n = S.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (P[i] || S.unique(n), E.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var $, O = /\S+/g,
        L = {};

    function M() {
        y.removeEventListener("DOMContentLoaded", M, !1), h.removeEventListener("load", M, !1), S.ready()
    }
    S.Callbacks = function (o) {
        var e, n;
        o = "string" == typeof o ? L[o] || (n = L[e = o] = {}, S.each(e.match(O) || [], function (e, t) {
            n[t] = !0
        }), n) : S.extend({}, o);
        var t, i, r, a, s, l, c = [],
            u = !o.once && [],
            d = function (e) {
                for (t = o.memory && e, i = !0, l = a || 0, a = 0, s = c.length, r = !0; c && l < s; l++)
                    if (!1 === c[l].apply(e[0], e[1]) && o.stopOnFalse) {
                        t = !1;
                        break
                    } r = !1, c && (u ? u.length && d(u.shift()) : t ? c = [] : p.disable())
            },
            p = {
                add: function () {
                    var e;
                    return c && (e = c.length, function i(e) {
                        S.each(e, function (e, t) {
                            var n = S.type(t);
                            "function" === n ? o.unique && p.has(t) || c.push(t) : t && t.length && "string" !== n && i(t)
                        })
                    }(arguments), r ? s = c.length : t && (a = e, d(t))), this
                },
                remove: function () {
                    return c && S.each(arguments, function (e, t) {
                        for (var n; - 1 < (n = S.inArray(t, c, n));) c.splice(n, 1), r && (n <= s && s--, n <= l && l--)
                    }), this
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, c) : !(!c || !c.length)
                },
                empty: function () {
                    return c = [], s = 0, this
                },
                disable: function () {
                    return c = u = t = void 0, this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    return u = void 0, t || p.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (e, t) {
                    return !c || i && !u || (t = [e, (t = t || []).slice ? t.slice() : t], r ? u.push(t) : d(t)), this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return p
    }, S.extend({
        Deferred: function (e) {
            var r = [
                    ["resolve", "done", S.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", S.Callbacks("memory")]
                ],
                o = "pending",
                a = {
                    state: function () {
                        return o
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var o = arguments;
                        return S.Deferred(function (i) {
                            S.each(r, function (e, t) {
                                var n = S.isFunction(o[e]) && o[e];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && S.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return a.pipe = a.then, S.each(r, function (e, t) {
                var n = t[2],
                    i = t[3];
                a[t[1]] = n.add, i && n.add(function () {
                    o = i
                }, r[1 ^ e][2].disable, r[2][2].lock), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? a : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function (e) {
            function t(t, n, i) {
                return function (e) {
                    n[t] = this, i[t] = 1 < arguments.length ? u.call(arguments) : e, i === o ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                }
            }
            var o, n, i, r = 0,
                a = u.call(arguments),
                s = a.length,
                l = 1 !== s || e && S.isFunction(e.promise) ? s : 0,
                c = 1 === l ? e : S.Deferred();
            if (1 < s)
                for (o = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) a[r] && S.isFunction(a[r].promise) ? a[r].promise().done(t(r, i, a)).fail(c.reject).progress(t(r, n, o)) : --l;
            return l || c.resolveWith(i, a), c.promise()
        }
    }), S.fn.ready = function (e) {
        return S.ready.promise().done(e), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? S.readyWait++ : S.ready(!0)
        },
        ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait || ($.resolveWith(y, [S]), S.fn.triggerHandler && (S(y).triggerHandler("ready"), S(y).off("ready"))))
        }
    }), S.ready.promise = function (e) {
        return $ || ($ = S.Deferred(), "complete" === y.readyState ? setTimeout(S.ready) : (y.addEventListener("DOMContentLoaded", M, !1), h.addEventListener("load", M, !1))), $.promise(e)
    }, S.ready.promise();
    var j = S.access = function (e, t, n, i, o, r, a) {
        var s = 0,
            l = e.length,
            c = null == n;
        if ("object" === S.type(n))
            for (s in o = !0, n) S.access(e, t, s, n[s], !0, r, a);
        else if (void 0 !== i && (o = !0, S.isFunction(i) || (a = !0), c && (t = a ? (t.call(e, i), null) : (c = t, function (e, t, n) {
                return c.call(S(e), n)
            })), t))
            for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    };

    function D() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = S.expando + Math.random()
    }
    S.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, D.uid = 1, D.accepts = S.acceptData, D.prototype = {
        key: function (t) {
            if (!D.accepts(t)) return 0;
            var n = {},
                i = t[this.expando];
            if (!i) {
                i = D.uid++;
                try {
                    n[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, n)
                } catch (e) {
                    n[this.expando] = i, S.extend(t, n)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function (e, t, n) {
            var i, o = this.key(e),
                r = this.cache[o];
            if ("string" == typeof t) r[t] = n;
            else if (S.isEmptyObject(r)) S.extend(this.cache[o], t);
            else
                for (i in t) r[i] = t[i];
            return r
        },
        get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, S.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i, o, r = this.key(e),
                a = this.cache[r];
            if (void 0 === t) this.cache[r] = {};
            else {
                n = (i = S.isArray(t) ? t.concat(t.map(S.camelCase)) : (o = S.camelCase(t), t in a ? [t, o] : (i = o) in a ? [i] : i.match(O) || [])).length;
                for (; n--;) delete a[i[n]]
            }
        },
        hasData: function (e) {
            return !S.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var N = new D,
        R = new D,
        I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        F = /([A-Z])/g;

    function H(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(F, "-$1").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : I.test(n) ? S.parseJSON(n) : n)
                } catch (e) {}
                R.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function (e) {
            return R.hasData(e) || N.hasData(e)
        },
        data: function (e, t, n) {
            return R.access(e, t, n)
        },
        removeData: function (e, t) {
            R.remove(e, t)
        },
        _data: function (e, t, n) {
            return N.access(e, t, n)
        },
        _removeData: function (e, t) {
            N.remove(e, t)
        }
    }), S.fn.extend({
        data: function (i, e) {
            var t, n, o, r = this[0],
                a = r && r.attributes;
            if (void 0 !== i) return "object" == typeof i ? this.each(function () {
                R.set(this, i)
            }) : j(this, function (t) {
                var e, n = S.camelCase(i);
                if (r && void 0 === t) {
                    if (void 0 !== (e = R.get(r, i))) return e;
                    if (void 0 !== (e = R.get(r, n))) return e;
                    if (void 0 !== (e = H(r, n, void 0))) return e
                } else this.each(function () {
                    var e = R.get(this, n);
                    R.set(this, n, t), -1 !== i.indexOf("-") && void 0 !== e && R.set(this, i, t)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = R.get(r), 1 === r.nodeType && !N.get(r, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && (0 === (n = a[t].name).indexOf("data-") && (n = S.camelCase(n.slice(5)), H(r, n, o[n])));
                N.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function (e) {
            return this.each(function () {
                R.remove(this, e)
            })
        }
    }), S.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = N.get(e, t), n && (!i || S.isArray(n) ? i = N.access(e, t, S.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = S._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
                S.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return N.get(e, n) || N.access(e, n, {
                empty: S.Callbacks("once memory").add(function () {
                    N.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                S.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            function n() {
                --o || r.resolveWith(a, [a])
            }
            var i, o = 1,
                r = S.Deferred(),
                a = this,
                s = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = N.get(a[s], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
            return n(), r.promise(t)
        }
    });

    function B(e, t) {
        return e = t || e, "none" === S.css(e, "display") || !S.contains(e.ownerDocument, e)
    }
    var _, z, q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        W = ["Top", "Right", "Bottom", "Left"],
        U = /^(?:checkbox|radio)$/i;
    _ = y.createDocumentFragment().appendChild(y.createElement("div")), (z = y.createElement("input")).setAttribute("type", "radio"), z.setAttribute("checked", "checked"), z.setAttribute("name", "t"), _.appendChild(z), v.checkClone = _.cloneNode(!0).cloneNode(!0).lastChild.checked, _.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!_.cloneNode(!0).lastChild.defaultValue;
    var X = "undefined";
    v.focusinBubbles = "onfocusin" in h;
    var G = /^key/,
        Y = /^(?:mouse|pointer|contextmenu)|click/,
        V = /^(?:focusinfocus|focusoutblur)$/,
        K = /^([^.]*)(?:\.(.+)|)$/;

    function Q() {
        return !0
    }

    function Z() {
        return !1
    }

    function J() {
        try {
            return y.activeElement
        } catch (e) {}
    }
    S.event = {
        global: {},
        add: function (t, e, n, i, o) {
            var r, a, s, l, c, u, d, p, f, h, m, g = N.get(t);
            if (g)
                for (n.handler && (n = (r = n).handler, o = r.selector), n.guid || (n.guid = S.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (e) {
                        return typeof S != X && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(O) || [""]).length; c--;) f = m = (s = K.exec(e[c]) || [])[1], h = (s[2] || "").split(".").sort(), f && (d = S.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = S.event.special[f] || {}, u = S.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && S.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, h, a) || t.addEventListener && t.addEventListener(f, a, !1)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), S.event.global[f] = !0)
        },
        remove: function (e, t, n, i, o) {
            var r, a, s, l, c, u, d, p, f, h, m, g = N.hasData(e) && N.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(O) || [""]).length; c--;)
                    if (f = m = (s = K.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), f) {
                        for (d = S.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = p.length; r--;) u = p[r], !o && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || S.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) S.event.remove(e, f + t[c], n, i, !0);
                S.isEmptyObject(l) && (delete g.handle, N.remove(e, "events"))
            }
        },
        trigger: function (e, t, n, i) {
            var o, r, a, s, l, c, u = [n || y],
                d = g.call(e, "type") ? e.type : e,
                p = g.call(e, "namespace") ? e.namespace.split(".") : [],
                f = r = n = n || y;
            if (3 !== n.nodeType && 8 !== n.nodeType && !V.test(d + S.event.triggered) && (0 <= d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), s = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !S.isWindow(n)) {
                    for (a = c.delegateType || d, V.test(a + d) || (f = f.parentNode); f; f = f.parentNode) u.push(f), r = f;
                    r === (n.ownerDocument || y) && u.push(r.defaultView || r.parentWindow || h)
                }
                for (o = 0;
                    (f = u[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? a : c.bindType || d, (l = (N.get(f, "events") || {})[e.type] && N.get(f, "handle")) && l.apply(f, t), (l = s && f[s]) && l.apply && S.acceptData(f) && (e.result = l.apply(f, t), !1 === e.result && e.preventDefault());
                return e.type = d, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), t) || !S.acceptData(n) || s && S.isFunction(n[d]) && !S.isWindow(n) && ((r = n[s]) && (n[s] = null), n[S.event.triggered = d](), S.event.triggered = void 0, r && (n[s] = r)), e.result
            }
        },
        dispatch: function (e) {
            e = S.event.fix(e);
            var t, n, i, o, r, a = [],
                s = u.call(arguments),
                l = (N.get(this, "events") || {})[e.type] || [],
                c = S.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = S.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (i = ((S.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, o, r, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== e.type) {
                        for (i = [], n = 0; n < s; n++) void 0 === i[o = (r = t[n]).selector + " "] && (i[o] = r.needsContext ? 0 <= S(o, this).index(l) : S.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, o, r = t.button;
                return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || y).documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[S.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Y.test(o) ? this.mouseHooks : G.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new S.Event(r), t = i.length; t--;) e[n = i[t]] = r[n];
            return e.target || (e.target = y), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== J() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === J() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && S.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return S.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var o = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? S.event.trigger(o, null, t) : S.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, S.Event = function (e, t) {
        return this instanceof S.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Q : Z) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || S.now(), void(this[S.expando] = !0)) : new S.Event(e, t)
    }, S.Event.prototype = {
        isDefaultPrevented: Z,
        isPropagationStopped: Z,
        isImmediatePropagationStopped: Z,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Q, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Q, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Q, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, o) {
        S.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), v.focusinBubbles || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, i) {
        function o(e) {
            S.event.simulate(i, e.target, S.event.fix(e), !0)
        }
        S.event.special[i] = {
            setup: function () {
                var e = this.ownerDocument || this,
                    t = N.access(e, i);
                t || e.addEventListener(n, o, !0), N.access(e, i, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this,
                    t = N.access(e, i) - 1;
                t ? N.access(e, i, t) : (e.removeEventListener(n, o, !0), N.remove(e, i))
            }
        }
    }), S.fn.extend({
        on: function (e, t, n, i, o) {
            var r, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof t && (n = n || t, t = void 0), e) this.on(a, t, n, e[a], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = Z;
            else if (!i) return this;
            return 1 === o && (r = i, (i = function (e) {
                return S().off(e), r.apply(this, arguments)
            }).guid = r.guid || (r.guid = S.guid++)), this.each(function () {
                S.event.add(this, e, i, n, t)
            })
        },
        one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Z), this.each(function () {
                S.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        },
        trigger: function (e, t) {
            return this.each(function () {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? S.event.trigger(e, t, n, !0) : void 0
        }
    });
    var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        te = /<([\w:]+)/,
        ne = /<|&#?\w+;/,
        ie = /<(?:script|style|link)/i,
        oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        re = /^$|\/(?:java|ecma)script/i,
        ae = /^true\/(.*)/,
        se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ce(e, t) {
        return S.nodeName(e, "table") && S.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ue(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function de(e) {
        var t = ae.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) N.set(e[n], "globalEval", !t || N.get(t[n], "globalEval"))
    }

    function fe(e, t) {
        var n, i, o, r, a, s, l, c;
        if (1 === t.nodeType) {
            if (N.hasData(e) && (r = N.access(e), a = N.set(t, r), c = r.events))
                for (o in delete a.handle, a.events = {}, c)
                    for (n = 0, i = c[o].length; n < i; n++) S.event.add(t, o, c[o][n]);
            R.hasData(e) && (s = R.access(e), l = S.extend({}, s), R.set(t, l))
        }
    }

    function he(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && S.nodeName(e, t) ? S.merge([e], n) : n
    }
    le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td, S.extend({
        clone: function (e, t, n) {
            var i, o, r, a, s, l, c, u = e.cloneNode(!0),
                d = S.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = he(u), i = 0, o = (r = he(e)).length; i < o; i++) s = r[i], l = a[i], "input" === (c = l.nodeName.toLowerCase()) && U.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (r = r || he(e), a = a || he(u), i = 0, o = r.length; i < o; i++) fe(r[i], a[i]);
                else fe(e, u);
            return 0 < (a = he(u, "script")).length && pe(a, !d && he(e, "script")), u
        },
        buildFragment: function (e, t, n, i) {
            for (var o, r, a, s, l, c, u = t.createDocumentFragment(), d = [], p = 0, f = e.length; p < f; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === S.type(o)) S.merge(d, o.nodeType ? [o] : o);
                    else if (ne.test(o)) {
                for (r = r || u.appendChild(t.createElement("div")), a = (te.exec(o) || ["", ""])[1].toLowerCase(), s = le[a] || le._default, r.innerHTML = s[1] + o.replace(ee, "<$1></$2>") + s[2], c = s[0]; c--;) r = r.lastChild;
                S.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
            } else d.push(t.createTextNode(o));
            for (u.textContent = "", p = 0; o = d[p++];)
                if ((!i || -1 === S.inArray(o, i)) && (l = S.contains(o.ownerDocument, o), r = he(u.appendChild(o), "script"), l && pe(r), n))
                    for (c = 0; o = r[c++];) re.test(o.type || "") && n.push(o);
            return u
        },
        cleanData: function (e) {
            for (var t, n, i, o, r = S.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (S.acceptData(n) && ((o = n[N.expando]) && (t = N.cache[o]))) {
                    if (t.events)
                        for (i in t.events) r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                    N.cache[o] && delete N.cache[o]
                }
                delete R.cache[n[R.expando]]
            }
        }
    }), S.fn.extend({
        text: function (e) {
            return j(this, function (e) {
                return void 0 === e ? S.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ce(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = ce(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, i = e ? S.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || S.cleanData(he(n)), n.parentNode && (t && S.contains(n.ownerDocument, n) && pe(he(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(he(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return S.clone(this, e, t)
            })
        },
        html: function (e) {
            return j(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ie.test(e) && !le[(te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ee, "<$1></$2>");
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(he(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, S.cleanData(he(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (n, i) {
            n = m.apply([], n);
            var e, t, o, r, a, s, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                p = n[0],
                f = S.isFunction(p);
            if (f || 1 < c && "string" == typeof p && !v.checkClone && oe.test(p)) return this.each(function (e) {
                var t = u.eq(e);
                f && (n[0] = p.call(this, e, t.html())), t.domManip(n, i)
            });
            if (c && (t = (e = S.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === e.childNodes.length && (e = t), t)) {
                for (r = (o = S.map(he(e, "script"), ue)).length; l < c; l++) a = e, l !== d && (a = S.clone(a, !0, !0), r && S.merge(o, he(a, "script"))), i.call(this[l], a, l);
                if (r)
                    for (s = o[o.length - 1].ownerDocument, S.map(o, de), l = 0; l < r; l++) a = o[l], re.test(a.type || "") && !N.access(a, "globalEval") && S.contains(s, a) && (a.src ? S._evalUrl && S._evalUrl(a.src) : S.globalEval(a.textContent.replace(se, "")))
            }
            return this
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        S.fn[e] = function (e) {
            for (var t, n = [], i = S(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), S(i[r])[a](t), s.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var me, ge = {};

    function ve(e, t) {
        var n, i = S(t.createElement(e)).appendTo(t.body),
            o = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(i[0])) ? n.display : S.css(i[0], "display");
        return i.detach(), o
    }

    function ye(e) {
        var t = y,
            n = ge[e];
        return n || ("none" !== (n = ve(e, t)) && n || ((t = (me = (me || S("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = ve(e, t), me.detach()), ge[e] = n), n
    }
    var be, xe, ke, we, Se, Te = /^margin/,
        Ce = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
        Ee = function (e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };

    function Pe(e, t, n) {
        var i, o, r, a, s = e.style;
        return (n = n || Ee(e)) && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || S.contains(e.ownerDocument, e) || (a = S.style(e, t)), Ce.test(a) && Te.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function Ae(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function $e() {
        Se.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", Se.innerHTML = "", ke.appendChild(we);
        var e = h.getComputedStyle(Se, null);
        be = "1%" !== e.top, xe = "4px" === e.width, ke.removeChild(we)
    }
    ke = y.documentElement, we = y.createElement("div"), (Se = y.createElement("div")).style && (Se.style.backgroundClip = "content-box", Se.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === Se.style.backgroundClip, we.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", we.appendChild(Se), h.getComputedStyle && S.extend(v, {
        pixelPosition: function () {
            return $e(), be
        },
        boxSizingReliable: function () {
            return null == xe && $e(), xe
        },
        reliableMarginRight: function () {
            var e, t = Se.appendChild(y.createElement("div"));
            return t.style.cssText = Se.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", Se.style.width = "1px", ke.appendChild(we), e = !parseFloat(h.getComputedStyle(t, null).marginRight), ke.removeChild(we), e
        }
    })), S.swap = function (e, t, n, i) {
        var o, r, a = {};
        for (r in t) a[r] = e.style[r], e.style[r] = t[r];
        for (r in o = n.apply(e, i || []), t) e.style[r] = a[r];
        return o
    };
    var Oe = /^(none|table(?!-c[ea]).+)/,
        Le = new RegExp("^(" + q + ")(.*)$", "i"),
        Me = new RegExp("^([+-])=(" + q + ")", "i"),
        je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        De = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ne = ["Webkit", "O", "Moz", "ms"];

    function Re(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Ne.length; o--;)
            if ((t = Ne[o] + n) in e) return t;
        return i
    }

    function Ie(e, t, n) {
        var i = Le.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function Fe(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2) "margin" === n && (a += S.css(e, n + W[r], !0, o)), i ? ("content" === n && (a -= S.css(e, "padding" + W[r], !0, o)), "margin" !== n && (a -= S.css(e, "border" + W[r] + "Width", !0, o))) : (a += S.css(e, "padding" + W[r], !0, o), "padding" !== n && (a += S.css(e, "border" + W[r] + "Width", !0, o)));
        return a
    }

    function He(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = Ee(e),
            a = "border-box" === S.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (((o = Pe(e, t, r)) < 0 || null == o) && (o = e.style[t]), Ce.test(o)) return o;
            i = a && (v.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + Fe(e, t, n || (a ? "border" : "content"), i, r) + "px"
    }

    function Be(e, t) {
        for (var n, i, o, r = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (r[a] = N.get(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && B(i) && (r[a] = N.access(i, "olddisplay", ye(i.nodeName)))) : (o = B(i), "none" === n && o || N.set(i, "olddisplay", o ? n : S.css(i, "display"))));
        for (a = 0; a < s; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
        return e
    }

    function _e(e, t, n, i, o) {
        return new _e.prototype.init(e, t, n, i, o)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Pe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = S.camelCase(t),
                    l = e.style;
                return t = S.cssProps[s] || (S.cssProps[s] = Re(l, s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t] : ("string" === (r = typeof n) && (o = Me.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(S.css(e, t)), r = "number"), void(null != n && n == n && ("number" !== r || S.cssNumber[s] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var o, r, a, s = S.camelCase(t);
            return t = S.cssProps[s] || (S.cssProps[s] = Re(e.style, s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Pe(e, t, i)), "normal" === o && t in De && (o = De[t]), "" === n || n ? (r = parseFloat(o), !0 === n || S.isNumeric(r) ? r || 0 : o) : o
        }
    }), S.each(["height", "width"], function (e, o) {
        S.cssHooks[o] = {
            get: function (e, t, n) {
                return t ? Oe.test(S.css(e, "display")) && 0 === e.offsetWidth ? S.swap(e, je, function () {
                    return He(e, o, n)
                }) : He(e, o, n) : void 0
            },
            set: function (e, t, n) {
                var i = n && Ee(e);
                return Ie(0, t, n ? Fe(e, o, n, "border-box" === S.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), S.cssHooks.marginRight = Ae(v.reliableMarginRight, function (e, t) {
        return t ? S.swap(e, {
            display: "inline-block"
        }, Pe, [e, "marginRight"]) : void 0
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (o, r) {
        S.cssHooks[o + r] = {
            expand: function (e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + W[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, Te.test(o) || (S.cssHooks[o + r].set = Ie)
    }), S.fn.extend({
        css: function (e, t) {
            return j(this, function (e, t, n) {
                var i, o, r = {},
                    a = 0;
                if (S.isArray(t)) {
                    for (i = Ee(e), o = t.length; a < o; a++) r[t[a]] = S.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function () {
            return Be(this, !0)
        },
        hide: function () {
            return Be(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                B(this) ? S(this).show() : S(this).hide()
            })
        }
    }), (S.Tween = _e).prototype = {
        constructor: _e,
        init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (S.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = _e.propHooks[this.prop];
            return e && e.get ? e.get(this) : _e.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = _e.propHooks[this.prop];
            return this.pos = t = this.options.duration ? S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _e.propHooks._default.set(this), this
        }
    }, _e.prototype.init.prototype = _e.prototype, _e.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function (e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[S.cssProps[e.prop]] || S.cssHooks[e.prop]) ? S.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, _e.propHooks.scrollTop = _e.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, S.fx = _e.prototype.init, S.fx.step = {};
    var ze, qe, We, Ue, Xe, Ge = /^(?:toggle|show|hide)$/,
        Ye = new RegExp("^(?:([+-])=|)(" + q + ")([a-z%]*)$", "i"),
        Ve = /queueHooks$/,
        Ke = [function (t, e, n) {
            var i, o, r, a, s, l, c, u = this,
                d = {},
                p = t.style,
                f = t.nodeType && B(t),
                h = N.get(t, "fxshow");
            for (i in n.queue || (null == (s = S._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || l()
                }), s.unqueued++, u.always(function () {
                    u.always(function () {
                        s.unqueued--, S.queue(t, "fx").length || s.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = S.css(t, "display"), "inline" === ("none" === c ? N.get(t, "olddisplay") || ye(t.nodeName) : c) && "none" === S.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", u.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), e)
                if (o = e[i], Ge.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !h || void 0 === h[i]) continue;
                        f = !0
                    }
                    d[i] = h && h[i] || S.style(t, i)
                } else c = void 0;
            if (S.isEmptyObject(d)) "inline" === ("none" === c ? ye(t.nodeName) : c) && (p.display = c);
            else
                for (i in h ? "hidden" in h && (f = h.hidden) : h = N.access(t, "fxshow", {}), r && (h.hidden = !f), f ? S(t).show() : u.done(function () {
                        S(t).hide()
                    }), u.done(function () {
                        var e;
                        for (e in N.remove(t, "fxshow"), d) S.style(t, e, d[e])
                    }), d) a = et(f ? h[i] : 0, i, u), i in h || (h[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }],
        Qe = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = Ye.exec(t),
                    r = o && o[3] || (S.cssNumber[e] ? "" : "px"),
                    a = (S.cssNumber[e] || "px" !== r && +i) && Ye.exec(S.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== r)
                    for (r = r || a[3], o = o || [], a = +i || 1; a /= s = s || ".5", S.style(n.elem, e, a + r), s !== (s = n.cur() / i) && 1 !== s && --l;);
                return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };

    function Ze() {
        return setTimeout(function () {
            ze = void 0
        }), ze = S.now()
    }

    function Je(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = W[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function et(e, t, n) {
        for (var i, o = (Qe[t] || []).concat(Qe["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function tt(r, e, t) {
        var n, a, i = 0,
            o = Ke.length,
            s = S.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (a) return !1;
                for (var e = ze || Ze(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
                return s.notifyWith(r, [c, n, t]), n < 1 && o ? t : (s.resolveWith(r, [c]), !1)
            },
            c = s.promise({
                elem: r,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ze || Ze(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = S.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? s.resolveWith(r, [c, e]) : s.rejectWith(r, [c, e]), this
                }
            }),
            u = c.props;
        for (function (e, t) {
                var n, i, o, r, a;
                for (n in e)
                    if (o = t[i = S.camelCase(n)], r = e[n], S.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = S.cssHooks[i]) && "expand" in a)
                        for (n in r = a.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(u, c.opts.specialEasing); i < o; i++)
            if (n = Ke[i].call(c, r, u, c.opts)) return n;
        return S.map(u, et, c), S.isFunction(c.opts.start) && c.opts.start.call(r, c), S.fx.timer(S.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    S.Animation = S.extend(tt, {
        tweener: function (e, t) {
            for (var n, i = 0, o = (e = S.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; i < o; i++) n = e[i], Qe[n] = Qe[n] || [], Qe[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Ke.unshift(e) : Ke.push(e)
        }
    }), S.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || S.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !S.isFunction(t) && t
        };
        return i.duration = S.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in S.fx.speeds ? S.fx.speeds[i.duration] : S.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            S.isFunction(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue)
        }, i
    }, S.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(B).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (t, e, n, i) {
            function o() {
                var e = tt(this, S.extend({}, t), a);
                (r || N.get(this, "finish")) && e.stop(!0)
            }
            var r = S.isEmptyObject(t),
                a = S.speed(e, n, i);
            return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function (o, e, r) {
            function a(e) {
                var t = e.stop;
                delete e.stop, t(r)
            }
            return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = S.timers,
                    i = N.get(this);
                if (t) i[t] && i[t].stop && a(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && Ve.test(t) && a(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                !e && r || S.dequeue(this, o)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = N.get(this),
                    n = t[a + "queue"],
                    i = t[a + "queueHooks"],
                    o = S.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (e, i) {
        var o = S.fn[i];
        S.fn[i] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(Je(i, !0), e, t, n)
        }
    }), S.each({
        slideDown: Je("show"),
        slideUp: Je("hide"),
        slideToggle: Je("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, i) {
        S.fn[e] = function (e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function () {
        var e, t = 0,
            n = S.timers;
        for (ze = S.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), ze = void 0
    }, S.fx.timer = function (e) {
        S.timers.push(e), e() ? S.fx.start() : S.timers.pop()
    }, S.fx.interval = 13, S.fx.start = function () {
        qe = qe || setInterval(S.fx.tick, S.fx.interval)
    }, S.fx.stop = function () {
        clearInterval(qe), qe = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function (i, e) {
        return i = S.fx && S.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
            var n = setTimeout(e, i);
            t.stop = function () {
                clearTimeout(n)
            }
        })
    }, We = y.createElement("input"), Ue = y.createElement("select"), Xe = Ue.appendChild(y.createElement("option")), We.type = "checkbox", v.checkOn = "" !== We.value, v.optSelected = Xe.selected, Ue.disabled = !0, v.optDisabled = !Xe.disabled, (We = y.createElement("input")).value = "t", We.type = "radio", v.radioValue = "t" === We.value;
    var nt, it = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return j(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute == X ? S.prop(e, t, n) : (1 === r && S.isXMLDoc(e) || (t = t.toLowerCase(), i = S.attrHooks[t] || (S.expr.match.bool.test(t) ? nt : void 0)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : null == (o = S.find.attr(e, t)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void S.removeAttr(e, t))
        },
        removeAttr: function (e, t) {
            var n, i, o = 0,
                r = t && t.match(O);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = S.propFix[n] || n, S.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!v.radioValue && "radio" === t && S.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), nt = {
        set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var r = it[t] || S.find.attr;
        it[t] = function (e, t, n) {
            var i, o;
            return n || (o = it[t], it[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, it[t] = o), i
        }
    });
    var ot = /^(?:input|select|textarea|button)$/i;
    S.fn.extend({
        prop: function (e, t) {
            return j(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !S.isXMLDoc(e)) && (t = S.propFix[t] || t, o = S.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || ot.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), v.optSelected || (S.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    });
    var rt = /[\t\r\n\f]/g;
    S.fn.extend({
        addClass: function (t) {
            var e, n, i, o, r, a, s = "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (S.isFunction(t)) return this.each(function (e) {
                S(this).addClass(t.call(this, e, this.className))
            });
            if (s)
                for (e = (t || "").match(O) || []; l < c; l++)
                    if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(rt, " ") : " ")) {
                        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = S.trim(i), n.className !== a && (n.className = a)
                    } return this
        },
        removeClass: function (t) {
            var e, n, i, o, r, a, s = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (S.isFunction(t)) return this.each(function (e) {
                S(this).removeClass(t.call(this, e, this.className))
            });
            if (s)
                for (e = (t || "").match(O) || []; l < c; l++)
                    if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(rt, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; 0 <= i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        a = t ? S.trim(i) : "", n.className !== a && (n.className = a)
                    } return this
        },
        toggleClass: function (o, t) {
            var r = typeof o;
            return "boolean" == typeof t && "string" == r ? t ? this.addClass(o) : this.removeClass(o) : this.each(S.isFunction(o) ? function (e) {
                S(this).toggleClass(o.call(this, e, this.className, t), t)
            } : function () {
                if ("string" == r)
                    for (var e, t = 0, n = S(this), i = o.match(O) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else r != X && "boolean" != r || (this.className && N.set(this, "__className__", this.className), this.className = !this.className && !1 !== o && N.get(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(rt, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var at = /\r/g;
    S.fn.extend({
        val: function (n) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = S.isFunction(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : S.isArray(t) && (t = S.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (i = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(at, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : S.trim(S.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++)
                        if (!(!(n = i[l]).selected && l !== o || (v.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && S.nodeName(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), r) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, r = S.makeArray(t), a = o.length; a--;)((i = o[a]).selected = 0 <= S.inArray(i.value, r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
            set: function (e, t) {
                return S.isArray(t) ? e.checked = 0 <= S.inArray(S(e).val(), t) : void 0
            }
        }, v.checkOn || (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), S.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
        S.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), S.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var st = S.now(),
        lt = /\?/;
    S.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, S.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var ct, ut, dt = /#.*$/,
        pt = /([?&])_=[^&]*/,
        ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ht = /^(?:GET|HEAD)$/,
        mt = /^\/\//,
        gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        vt = {},
        yt = {},
        bt = "*/".concat("*");
    try {
        ut = location.href
    } catch (e) {
        (ut = y.createElement("a")).href = "", ut = ut.href
    }

    function xt(r) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(O) || [];
            if (S.isFunction(t))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function kt(t, o, r, a) {
        var s = {},
            l = t === yt;

        function c(e) {
            var i;
            return s[e] = !0, S.each(t[e] || [], function (e, t) {
                var n = t(o, r, a);
                return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), c(n), !1)
            }), i
        }
        return c(o.dataTypes[0]) || !s["*"] && c("*")
    }

    function wt(e, t) {
        var n, i, o = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
        return i && S.extend(!0, e, i), e
    }
    ct = gt.exec(ut.toLowerCase()) || [], S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ut,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": S.parseJSON,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? wt(wt(e, S.ajaxSettings), t) : wt(S.ajaxSettings, e)
        },
        ajaxPrefilter: xt(vt),
        ajaxTransport: xt(yt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, d, p, n, f, i, h, o, m = S.ajaxSetup({}, t),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? S(g) : S.event,
                y = S.Deferred(),
                b = S.Callbacks("once memory"),
                x = m.statusCode || {},
                r = {},
                a = {},
                k = 0,
                s = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === k) {
                            if (!n)
                                for (n = {}; t = ft.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === k ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return k || (e = a[n] = a[n] || e, r[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return k || (m.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (k < 2)
                                for (t in e) x[t] = [x[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || s;
                        return u && u.abort(t), l(0, t), this
                    }
                };
            if (y.promise(w).complete = b.add, w.success = w.done, w.error = w.fail, m.url = ((e || m.url || ut) + "").replace(dt, "").replace(mt, ct[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = S.trim(m.dataType || "*").toLowerCase().match(O) || [""], null == m.crossDomain && (i = gt.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === ct[1] && i[2] === ct[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (ct[3] || ("http:" === ct[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = S.param(m.data, m.traditional)), kt(vt, m, t, w), 2 === k) return w;
            for (o in (h = m.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !ht.test(m.type), d = m.url, m.hasContent || (m.data && (d = m.url += (lt.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = pt.test(d) ? d.replace(pt, "$1_=" + st++) : d + (lt.test(d) ? "&" : "?") + "_=" + st++)), m.ifModified && (S.lastModified[d] && w.setRequestHeader("If-Modified-Since", S.lastModified[d]), S.etag[d] && w.setRequestHeader("If-None-Match", S.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : m.accepts["*"]), m.headers) w.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, w, m) || 2 === k)) return w.abort();
            for (o in s = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[o](m[o]);
            if (u = kt(yt, m, t, w)) {
                w.readyState = 1, h && v.trigger("ajaxSend", [w, m]), m.async && 0 < m.timeout && (f = setTimeout(function () {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    k = 1, u.send(r, l)
                } catch (e) {
                    if (!(k < 2)) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, i) {
                var o, r, a, s, l, c = t;
                2 !== k && (k = 2, f && clearTimeout(f), u = void 0, p = i || "", w.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    for (var i, o, r, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in s)
                            if (s[o] && s[o].test(i)) {
                                l.unshift(o);
                                break
                            } if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            a = a || o
                        }
                        r = r || a
                    }
                    return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                }(m, w, n)), s = function (e, t, n, i) {
                    var o, r, a, s, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (r = u.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(a = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, s, w, o), o ? (m.ifModified && ((l = w.getResponseHeader("Last-Modified")) && (S.lastModified[d] = l), (l = w.getResponseHeader("etag")) && (S.etag[d] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state, r = s.data, o = !(a = s.error))) : (a = c, !e && c || (c = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || c) + "", o ? y.resolveWith(g, [r, c, w]) : y.rejectWith(g, [w, c, a]), w.statusCode(x), x = void 0, h && v.trigger(o ? "ajaxSuccess" : "ajaxError", [w, m, o ? r : a]), b.fireWith(g, [w, c]), h && (v.trigger("ajaxComplete", [w, m]), --S.active || S.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function (e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function (e, o) {
        S[o] = function (e, t, n, i) {
            return S.isFunction(t) && (i = i || n, n = t, t = void 0), S.ajax({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            })
        }
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        S.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), S._evalUrl = function (e) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, S.fn.extend({
        wrapAll: function (t) {
            var e;
            return S.isFunction(t) ? this.each(function (e) {
                S(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = S(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (n) {
            return this.each(S.isFunction(n) ? function (e) {
                S(this).wrapInner(n.call(this, e))
            } : function () {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = S.isFunction(t);
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                S.nodeName(this, "body") || S(this).replaceWith(this.childNodes)
            }).end()
        }
    }), S.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, S.expr.filters.visible = function (e) {
        return !S.expr.filters.hidden(e)
    };
    var St = /%20/g,
        Tt = /\[\]$/,
        Ct = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;
    S.param = function (e, t) {
        function n(e, t) {
            t = S.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var i, o = [];
        if (void 0 === t && (t = S.ajaxSettings && S.ajaxSettings.traditional), S.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
            n(this.name, this.value)
        });
        else
            for (i in e) ! function n(i, e, o, r) {
                var t;
                if (S.isArray(e)) S.each(e, function (e, t) {
                    o || Tt.test(i) ? r(i, t) : n(i + "[" + ("object" == typeof t ? e : "") + "]", t, o, r)
                });
                else if (o || "object" !== S.type(e)) r(i, e);
                else
                    for (t in e) n(i + "[" + t + "]", e[t], o, r)
            }(i, e[i], t, n);
        return o.join("&").replace(St, "+")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Pt.test(this.nodeName) && !Et.test(e) && (this.checked || !U.test(e))
            }).map(function (e, t) {
                var n = S(this).val();
                return null == n ? null : S.isArray(n) ? S.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                }
            }).get()
        }
    }), S.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var At = 0,
        $t = {},
        Ot = {
            0: 200,
            1223: 204
        },
        Lt = S.ajaxSettings.xhr();
    h.ActiveXObject && S(h).on("unload", function () {
        for (var e in $t) $t[e]()
    }), v.cors = !!Lt && "withCredentials" in Lt, v.ajax = Lt = !!Lt, S.ajaxTransport(function (r) {
        var a;
        return v.cors || Lt && !r.crossDomain ? {
            send: function (e, t) {
                var n, i = r.xhr(),
                    o = ++At;
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                a = function (e) {
                    return function () {
                        a && (delete $t[o], a = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? t(i.status, i.statusText) : t(Ot[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
                            text: i.responseText
                        } : void 0, i.getAllResponseHeaders()))
                    }
                }, i.onload = a(), i.onerror = a("error"), a = $t[o] = a("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (a) throw e
                }
            },
            abort: function () {
                a && a()
            }
        } : void 0
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function (n) {
        var i, o;
        if (n.crossDomain) return {
            send: function (e, t) {
                i = S("<script>").prop({
                    async: !0,
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function (e) {
                    i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), y.head.appendChild(i[0])
            },
            abort: function () {
                o && o()
            }
        }
    });
    var Mt = [],
        jt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Mt.pop() || S.expando + "_" + st++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i, o, r, a = !1 !== e.jsonp && (jt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = S.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(jt, "$1" + i) : !1 !== e.jsonp && (e.url += (lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return r || S.error(i + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = h[i], h[i] = function () {
            r = arguments
        }, n.always(function () {
            h[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Mt.push(i)), r && S.isFunction(o) && o(r[0]), r = o = void 0
        }), "script") : void 0
    }), S.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || y;
        var i = x.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = S.buildFragment([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))
    };
    var Dt = S.fn.load;
    S.fn.load = function (e, t, n) {
        if ("string" != typeof e && Dt) return Dt.apply(this, arguments);
        var i, o, r, a = this,
            s = e.indexOf(" ");
        return 0 <= s && (i = S.trim(e.slice(s)), e = e.slice(0, s)), S.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, a.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
            a.each(n, r || [e.responseText, t, e])
        }), this
    }, S.expr.filters.animated = function (t) {
        return S.grep(S.timers, function (e) {
            return t === e.elem
        }).length
    };
    var Nt = h.document.documentElement;

    function Rt(e) {
        return S.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    S.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, a, s, l, c = S.css(e, "position"),
                u = S(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), r = S.css(e, "top"), l = S.css(e, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (a = (i = u.position()).top, i.left) : (a = parseFloat(r) || 0, parseFloat(l) || 0), S.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, S.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = i && i.ownerDocument;
            return r ? (e = r.documentElement, S.contains(e, i) ? (typeof i.getBoundingClientRect != X && (o = i.getBoundingClientRect()), n = Rt(r), {
                top: o.top + n.pageYOffset - e.clientTop,
                left: o.left + n.pageXOffset - e.clientLeft
            }) : o) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === S.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), S.nodeName(e[0], "html") || (i = e.offset()), i.top += S.css(e[0], "borderTopWidth", !0), i.left += S.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - S.css(n, "marginTop", !0),
                    left: t.left - i.left - S.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Nt; e && !S.nodeName(e, "html") && "static" === S.css(e, "position");) e = e.offsetParent;
                return e || Nt
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, o) {
        var r = "pageYOffset" === o;
        S.fn[t] = function (e) {
            return j(this, function (e, t, n) {
                var i = Rt(e);
                return void 0 === n ? i ? i[o] : e[t] : void(i ? i.scrollTo(r ? h.pageXOffset : n, r ? n : h.pageYOffset) : e[t] = n)
            }, t, e, arguments.length, null)
        }
    }), S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = Ae(v.pixelPosition, function (e, t) {
            return t ? (t = Pe(e, n), Ce.test(t) ? S(e).position()[n] + "px" : t) : void 0
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function (r, a) {
        S.each({
            padding: "inner" + r,
            content: a,
            "": "outer" + r
        }, function (i, e) {
            S.fn[e] = function (e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return j(this, function (e, t, n) {
                    var i;
                    return S.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + r], i["scroll" + r], e.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? S.css(e, t, o) : S.style(e, t, n, o)
                }, a, n ? e : void 0, n, null)
            }
        })
    }), S.fn.size = function () {
        return this.length
    }, S.fn.andSelf = S.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return S
    });
    var It = h.jQuery,
        Ft = h.$;
    return S.noConflict = function (e) {
        return h.$ === S && (h.$ = Ft), e && h.jQuery === S && (h.jQuery = It), S
    }, typeof e == X && (h.jQuery = h.$ = S), S
}),
function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}(function (h) {
    var i = /\+/g;

    function m(e) {
        return v.raw ? e : encodeURIComponent(e)
    }

    function g(e, t) {
        var n = v.raw ? e : function (e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(i, " ")), v.json ? JSON.parse(e) : e
            } catch (e) {}
        }(e);
        return h.isFunction(t) ? t(n) : n
    }
    var v = h.cookie = function (e, t, n) {
        var i, o, r;
        if (void 0 !== t && !h.isFunction(t)) return "number" == typeof (n = h.extend({}, v.defaults, n)).expires && (i = n.expires, (o = n.expires = new Date).setTime(+o + 864e5 * i)), document.cookie = [m(e), "=", (r = t, m(v.json ? JSON.stringify(r) : String(r))), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("");
        for (var a, s = e ? void 0 : {}, l = document.cookie ? document.cookie.split("; ") : [], c = 0, u = l.length; c < u; c++) {
            var d = l[c].split("="),
                p = (a = d.shift(), v.raw ? a : decodeURIComponent(a)),
                f = d.join("=");
            if (e && e === p) {
                s = g(f, t);
                break
            }
            e || void 0 === (f = g(f)) || (s[p] = f)
        }
        return s
    };
    v.defaults = {}, h.removeCookie = function (e, t) {
        return void 0 !== h.cookie(e) && (h.cookie(e, "", h.extend({}, t, {
            expires: -1
        })), !h.cookie(e))
    }
}),
function (c, r, m, g) {
    "use strict";

    function n(e) {
        var t = e.currentTarget,
            n = e.data ? e.data.options : {},
            i = e.data ? e.data.items : [],
            o = m(t).attr("data-fancybox") || "",
            r = 0;
        e.preventDefault(), e.stopPropagation(), o ? (r = (i = i.length ? i.filter('[data-fancybox="' + o + '"]') : m('[data-fancybox="' + o + '"]')).index(t)) < 0 && (r = 0) : i = [t], m.fancybox.open(i, n, r)
    }
    if (m) {
        if (m.fn.fancybox) return m.error("fancyBox already initialized");
        var o = {
                loop: !1,
                margin: [44, 0],
                gutter: 50,
                keyboard: !0,
                arrows: !0,
                infobar: !1,
                toolbar: !0,
                buttons: ["slideShow", "fullScreen", "thumbs", "close"],
                idleTime: 4,
                smallBtn: "auto",
                protect: !1,
                modal: !1,
                image: {
                    preload: "auto"
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev  class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev  class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                btnTpl: {
                    slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
                    fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
                    thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close"></button>',
                    smallBtn: '<button data-fancybox-close class="fancybox-close-small"></button>'
                },
                parentEl: "body",
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 4e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0
                },
                onInit: m.noop,
                beforeLoad: m.noop,
                afterLoad: m.noop,
                beforeShow: m.noop,
                afterShow: m.noop,
                beforeClose: m.noop,
                afterClose: m.noop,
                onActivate: m.noop,
                onDeactivate: m.noop,
                clickContent: function (e, t) {
                    return "image" === e.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    clickContent: function (e, t) {
                        return "image" === e.type && "toggleControls"
                    },
                    clickSlide: function (e, t) {
                        return "image" === e.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function (e, t) {
                        return "image" === e.type && "zoom"
                    },
                    dblclickSlide: function (e, t) {
                        return "image" === e.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Закрыть",
                        NEXT: "Вперёд",
                        PREV: "Назад",
                        ERROR: "Ошибка. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails"
                    },
                    de: {
                        CLOSE: "Schliessen",
                        NEXT: "Weiter",
                        PREV: "Zurück",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder"
                    }
                }
            },
            u = m(c),
            a = m(r),
            s = 0,
            d = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || function (e) {
                return c.setTimeout(e, 1e3 / 60)
            },
            p = function () {
                var e, t = r.createElement("fakeelement"),
                    n = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (e in n)
                    if (t.style[e] !== g) return n[e]
            }(),
            f = function (e) {
                return e && e.length && e[0].offsetHeight
            },
            i = function (e, t, n) {
                var i = this;
                i.opts = m.extend(!0, {
                    index: n
                }, o, t || {}), t && m.isArray(t.buttons) && (i.opts.buttons = t.buttons), i.id = i.opts.id || ++s, i.group = [], i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = null, i.createGroup(e), i.group.length && (i.$lastFocus = m(r.activeElement).blur(), i.slides = {}, i.init(e))
            };
        m.extend(i.prototype, {
            init: function () {
                var e, t, n, i = this,
                    o = i.group[i.currIndex].opts;
                i.scrollTop = a.scrollTop(), i.scrollLeft = a.scrollLeft(), m.fancybox.getInstance() || m.fancybox.isMobile || "hidden" === m("body").css("overflow") || (e = m("body").width(), m("html").addClass("fancybox-enabled"), 1 < (e = m("body").width() - e) && m("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + e + "px; }</style>")), n = "", m.each(o.buttons, function (e, t) {
                    n += o.btnTpl[t] || ""
                }), t = m(i.translate(i, o.baseTpl.replace("{{BUTTONS}}", n))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + i.id).addClass(o.baseClass).data("FancyBox", i).prependTo(o.parentEl), i.$refs = {
                    container: t
                }, ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function (e) {
                    i.$refs[e] = t.find(".fancybox-" + e)
                }), (!o.arrows || i.group.length < 2) && t.find(".fancybox-navigation").remove(), o.infobar || i.$refs.infobar.remove(), o.toolbar || i.$refs.toolbar.remove(), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex)
            },
            translate: function (e, t) {
                var i = e.opts.i18n[e.opts.lang];
                return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
                    var n = i[t];
                    return n === g ? e : n
                })
            },
            createGroup: function (e) {
                var c = this,
                    t = m.makeArray(e);
                m.each(t, function (e, t) {
                    var n, i, o, r, a = {},
                        s = {},
                        l = [];
                    m.isPlainObject(t) ? s = (a = t).opts || t : "object" === m.type(t) && m(t).length ? (n = m(t), l = n.data(), s = "options" in l ? l.options : {}, s = "object" === m.type(s) ? s : {}, a.src = "src" in l ? l.src : s.src || n.attr("href"), ["width", "height", "thumb", "type", "filter"].forEach(function (e) {
                        e in l && (s[e] = l[e])
                    }), "srcset" in l && (s.image = {
                        srcset: l.srcset
                    }), s.$orig = n, a.type || a.src || (a.type = "inline", a.src = t)) : a = {
                        type: "html",
                        src: t + ""
                    }, a.opts = m.extend(!0, {}, c.opts, s), m.fancybox.isMobile && (a.opts = m.extend(!0, {}, a.opts, a.opts.mobile)), i = a.type || a.opts.type, o = a.src || "", !i && o && (o.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : o.match(/\.(pdf)((\?|#).*)?$/i) ? i = "pdf" : "#" === o.charAt(0) && (i = "inline")), a.type = i, a.index = c.group.length, a.opts.$orig && !a.opts.$orig.length && delete a.opts.$orig, !a.opts.$thumb && a.opts.$orig && (a.opts.$thumb = a.opts.$orig.find("img:first")), a.opts.$thumb && !a.opts.$thumb.length && delete a.opts.$thumb, "function" === m.type(a.opts.caption) ? a.opts.caption = a.opts.caption.apply(t, [c, a]) : "caption" in l && (a.opts.caption = l.caption), a.opts.caption = a.opts.caption === g ? "" : a.opts.caption + "", "ajax" !== i || 1 < (r = o.split(/\s+/, 2)).length && (a.src = r.shift(), a.opts.filter = r.shift()), "auto" == a.opts.smallBtn && (-1 < m.inArray(i, ["html", "inline", "ajax"]) ? (a.opts.toolbar = !1, a.opts.smallBtn = !0) : a.opts.smallBtn = !1), "pdf" === i && (a.type = "iframe", a.opts.iframe.preload = !1), a.opts.modal && (a.opts = m.extend(!0, a.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), c.group.push(a)
                })
            },
            addEvents: function () {
                var i = this;
                i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (e) {
                    e.stopPropagation(), e.preventDefault(), i.close(e)
                }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function (e) {
                    e.stopPropagation(), e.preventDefault(), i.previous()
                }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function (e) {
                    e.stopPropagation(), e.preventDefault(), i.next()
                }), u.on("orientationchange.fb resize.fb", function (e) {
                    e && e.originalEvent && "resize" === e.originalEvent.type ? d(function () {
                        i.update()
                    }) : (i.$refs.stage.hide(), setTimeout(function () {
                        i.$refs.stage.show(), i.update()
                    }, 500))
                }), a.on("focusin.fb", function (e) {
                    var t = m.fancybox ? m.fancybox.getInstance() : null;
                    t.isClosing || !t.current || !t.current.opts.trapFocus || m(e.target).hasClass("fancybox-container") || m(e.target).is(r) || t && "fixed" !== m(e.target).css("position") && !t.$refs.container.has(e.target).length && (e.stopPropagation(), t.focus(), u.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))
                }), a.on("keydown.fb", function (e) {
                    var t = i.current,
                        n = e.keyCode || e.which;
                    if (t && t.opts.keyboard && !m(e.target).is("input") && !m(e.target).is("textarea")) return 8 === n || 27 === n ? (e.preventDefault(), void i.close(e)) : 37 === n || 38 === n ? (e.preventDefault(), void i.previous()) : 39 === n || 40 === n ? (e.preventDefault(), void i.next()) : void i.trigger("afterKeydown", e, n)
                }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function () {
                    i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
                }), i.idleInterval = c.setInterval(function () {
                    i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
                }, 1e3))
            },
            removeEvents: function () {
                u.off("orientationchange.fb resize.fb"), a.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (c.clearInterval(this.idleInterval), this.idleInterval = null)
            },
            previous: function (e) {
                return this.jumpTo(this.currPos - 1, e)
            },
            next: function (e) {
                return this.jumpTo(this.currPos + 1, e)
            },
            jumpTo: function (e, i, t) {
                var n, o, r, a, s, l, c, u = this,
                    d = u.group.length;
                if (!(u.isSliding || u.isClosing || u.isAnimating && u.firstRun)) {
                    if (e = parseInt(e, 10), !(o = u.current ? u.current.opts.loop : u.opts.loop) && (e < 0 || d <= e)) return !1;
                    if (n = u.firstRun = null === u.firstRun, !(d < 2 && !n && u.isSliding)) {
                        if (a = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, r = u.createSlide(e), 1 < d && ((o || 0 < r.index) && u.createSlide(e - 1), (o || r.index < d - 1) && u.createSlide(e + 1)), u.current = r, u.currIndex = r.index, u.currPos = r.pos, u.trigger("beforeShow", n), u.updateControls(), l = m.fancybox.getTranslate(r.$slide), r.isMoved = (0 !== l.left || 0 !== l.top) && !r.$slide.hasClass("fancybox-animated"), r.forcedDuration = g, m.isNumeric(i) ? r.forcedDuration = i : i = r.opts[n ? "animationDuration" : "transitionDuration"], i = parseInt(i, 10), n) return r.opts.animationEffect && i && u.$refs.container.css("transition-duration", i + "ms"), u.$refs.container.removeClass("fancybox-is-hidden"), f(u.$refs.container), u.$refs.container.addClass("fancybox-is-open"), r.$slide.addClass("fancybox-slide--current"), u.loadSlide(r), void u.preload();
                        m.each(u.slides, function (e, t) {
                            m.fancybox.stop(t.$slide)
                        }), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), r.isMoved ? (s = Math.round(r.$slide.width()), m.each(u.slides, function (e, t) {
                            var n = t.pos - r.pos;
                            m.fancybox.animate(t.$slide, {
                                top: 0,
                                left: n * s + n * t.opts.gutter
                            }, i, function () {
                                t.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), t.pos === u.currPos && (r.isMoved = !1, u.complete())
                            })
                        })) : u.$refs.stage.children().removeAttr("style"), r.isLoaded ? u.revealContent(r) : u.loadSlide(r), u.preload(), a.pos !== r.pos && (c = "fancybox-slide--" + (a.pos > r.pos ? "next" : "previous"), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), a.isComplete = !1, i && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? a.$slide.addClass(c) : (c = "fancybox-animated " + c + " fancybox-fx-" + r.opts.transitionEffect, m.fancybox.animate(a.$slide, c, i, function () {
                            a.$slide.removeClass(c).removeAttr("style")
                        }))))
                    }
                }
            },
            createSlide: function (e) {
                var t, n = this,
                    i = e % n.group.length;
                return i = i < 0 ? n.group.length + i : i, !n.slides[e] && n.group[i] && (t = m('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage), n.slides[e] = m.extend(!0, {}, n.group[i], {
                    pos: e,
                    $slide: t,
                    isLoaded: !1
                }), n.updateSlide(n.slides[e])), n.slides[e]
            },
            scaleToActual: function (e, t, n) {
                var i, o, r, a, s, l = this,
                    c = l.current,
                    u = c.$content,
                    d = parseInt(c.$slide.width(), 10),
                    p = parseInt(c.$slide.height(), 10),
                    f = c.width,
                    h = c.height;
                "image" != c.type || c.hasError || !u || l.isAnimating || (m.fancybox.stop(u), l.isAnimating = !0, e = e === g ? .5 * d : e, t = t === g ? .5 * p : t, a = f / (i = m.fancybox.getTranslate(u)).width, s = h / i.height, o = .5 * d - .5 * f, r = .5 * p - .5 * h, d < f && (0 < (o = i.left * a - (e * a - e)) && (o = 0), o < d - f && (o = d - f)), p < h && (0 < (r = i.top * s - (t * s - t)) && (r = 0), r < p - h && (r = p - h)), l.updateCursor(f, h), m.fancybox.animate(u, {
                    top: r,
                    left: o,
                    scaleX: a,
                    scaleY: s
                }, n || 330, function () {
                    l.isAnimating = !1
                }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
            },
            scaleToFit: function (e) {
                var t, n = this,
                    i = n.current,
                    o = i.$content;
                "image" != i.type || i.hasError || !o || n.isAnimating || (m.fancybox.stop(o), n.isAnimating = !0, t = n.getFitPos(i), n.updateCursor(t.width, t.height), m.fancybox.animate(o, {
                    top: t.top,
                    left: t.left,
                    scaleX: t.width / o.width(),
                    scaleY: t.height / o.height()
                }, e || 330, function () {
                    n.isAnimating = !1
                }))
            },
            getFitPos: function (e) {
                var t, n, i, o, r, a = e.$content,
                    s = e.width,
                    l = e.height,
                    c = e.opts.margin;
                return !(!a || !a.length || !s && !l) && ("number" === m.type(c) && (c = [c, c]), 2 == c.length && (c = [c[0], c[1], c[0], c[1]]), u.width() < 800 && (c = [0, 0, 0, 0]), t = parseInt(this.$refs.stage.width(), 10) - (c[1] + c[3]), n = parseInt(this.$refs.stage.height(), 10) - (c[0] + c[2]), i = Math.min(1, t / s, n / l), o = Math.floor(i * s), r = Math.floor(i * l), {
                    top: Math.floor(.5 * (n - r)) + c[0],
                    left: Math.floor(.5 * (t - o)) + c[3],
                    width: o,
                    height: r
                })
            },
            update: function () {
                var n = this;
                m.each(n.slides, function (e, t) {
                    n.updateSlide(t)
                })
            },
            updateSlide: function (e) {
                var t = e.$content;
                t && (e.width || e.height) && (m.fancybox.stop(t), m.fancybox.setTranslate(t, this.getFitPos(e)), e.pos === this.currPos && this.updateCursor()), e.$slide.trigger("refresh"), this.trigger("onUpdate", e)
            },
            updateCursor: function (e, t) {
                var n = this,
                    i = n.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                n.current && !n.isClosing && (n.isZoomable() ? (i.addClass("fancybox-is-zoomable"), (e !== g && t !== g ? e < n.current.width && t < n.current.height : n.isScaledDown()) ? i.addClass("fancybox-can-zoomIn") : n.current.opts.touch ? i.addClass("fancybox-can-drag") : i.addClass("fancybox-can-zoomOut")) : n.current.opts.touch && i.addClass("fancybox-can-drag"))
            },
            isZoomable: function () {
                var e, t = this.current;
                if (t && !this.isClosing) return !!("image" === t.type && t.isLoaded && !t.hasError && ("zoom" === t.opts.clickContent || m.isFunction(t.opts.clickContent) && "zoom" === t.opts.clickContent(t)) && (e = this.getFitPos(t), t.width > e.width || t.height > e.height))
            },
            isScaledDown: function () {
                var e = this.current,
                    t = e.$content,
                    n = !1;
                return t && (n = (n = m.fancybox.getTranslate(t)).width < e.width || n.height < e.height), n
            },
            canPan: function () {
                var e = this.current,
                    t = e.$content,
                    n = !1;
                return t && (n = this.getFitPos(e), n = 1 < Math.abs(t.width() - n.width) || 1 < Math.abs(t.height() - n.height)), n
            },
            loadSlide: function (n) {
                var e, t, i, o = this;
                if (!n.isLoading && !n.isLoaded) {
                    switch (n.isLoading = !0, o.trigger("beforeLoad", n), e = n.type, (t = n.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(n.opts.slideClass), e) {
                        case "image":
                            o.setImage(n);
                            break;
                        case "iframe":
                            o.setIframe(n);
                            break;
                        case "html":
                            o.setContent(n, n.src || n.content);
                            break;
                        case "inline":
                            m(n.src).length ? o.setContent(n, m(n.src)) : o.setError(n);
                            break;
                        case "ajax":
                            o.showLoading(n), i = m.ajax(m.extend({}, n.opts.ajax.settings, {
                                url: n.src,
                                success: function (e, t) {
                                    "success" === t && o.setContent(n, e)
                                },
                                error: function (e, t) {
                                    e && "abort" !== t && o.setError(n)
                                }
                            })), t.one("onReset", function () {
                                i.abort()
                            });
                            break;
                        default:
                            o.setError(n)
                    }
                    return !0
                }
            },
            setImage: function (e) {
                var t, n, i, o, r = this,
                    a = e.opts.image.srcset;
                if (a) {
                    i = c.devicePixelRatio || 1, o = c.innerWidth * i, (n = a.split(",").map(function (e) {
                        var i = {};
                        return e.trim().split(/\s+/).forEach(function (e, t) {
                            var n = parseInt(e.substring(0, e.length - 1), 10);
                            return 0 === t ? i.url = e : void(n && (i.value = n, i.postfix = e[e.length - 1]))
                        }), i
                    })).sort(function (e, t) {
                        return e.value - t.value
                    });
                    for (var s = 0; s < n.length; s++) {
                        var l = n[s];
                        if ("w" === l.postfix && l.value >= o || "x" === l.postfix && l.value >= i) {
                            t = l;
                            break
                        }
                    }!t && n.length && (t = n[n.length - 1]), t && (e.src = t.url, e.width && e.height && "w" == t.postfix && (e.height = e.width / e.height * t.value, e.width = t.value))
                }
                e.$content = m('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide), !1 !== e.opts.preload && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = m("<img />").one("error", function () {
                    m(this).remove(), e.$ghost = null, r.setBigImage(e)
                }).one("load", function () {
                    r.afterLoad(e), r.setBigImage(e)
                }).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : r.setBigImage(e)
            },
            setBigImage: function (e) {
                var t = this,
                    n = m("<img />");
                e.$image = n.one("error", function () {
                    t.setError(e)
                }).one("load", function () {
                    clearTimeout(e.timouts), e.timouts = null, t.isClosing || (e.width = this.naturalWidth, e.height = this.naturalHeight, e.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", e.opts.image.srcset), t.hideLoading(e), e.$ghost ? e.timouts = setTimeout(function () {
                        e.timouts = null, e.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, e.height / 1600))) : t.afterLoad(e))
                }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), n[0].complete ? n.trigger("load") : n[0].error ? n.trigger("error") : e.timouts = setTimeout(function () {
                    n[0].complete || e.hasError || t.showLoading(e)
                }, 100)
            },
            setIframe: function (r) {
                var a, t = this,
                    s = r.opts.iframe,
                    e = r.$slide;
                r.$content = m('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(e), a = m(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(s.attr).appendTo(r.$content), s.preload ? (t.showLoading(r), a.on("load.fb error.fb", function (e) {
                    this.isReady = 1, r.$slide.trigger("refresh"), t.afterLoad(r)
                }), e.on("refresh.fb", function () {
                    var e, t, n, i, o = r.$content;
                    if (1 === a[0].isReady) {
                        try {
                            e = a.contents().find("body")
                        } catch (e) {}
                        e && e.length && (s.css.width === g || s.css.height === g) && (t = a[0].contentWindow.document.documentElement.scrollWidth, n = Math.ceil(e.outerWidth(!0) + (o.width() - t)), i = Math.ceil(e.outerHeight(!0)), o.css({
                            width: s.css.width === g ? n + (o.outerWidth() - o.innerWidth()) : s.css.width,
                            height: s.css.height === g ? i + (o.outerHeight() - o.innerHeight()) : s.css.height
                        })), o.removeClass("fancybox-is-hidden")
                    }
                })) : this.afterLoad(r), a.attr("src", r.src), !0 === r.opts.smallBtn && r.$content.prepend(t.translate(r, r.opts.btnTpl.smallBtn)), e.one("onReset", function () {
                    try {
                        m(this).find("iframe").hide().attr("src", "//about:blank")
                    } catch (e) {}
                    m(this).empty(), r.isLoaded = !1
                })
            },
            setContent: function (e, t) {
                var n;
                this.isClosing || (this.hideLoading(e), e.$slide.empty(), (n = t) && n.hasOwnProperty && n instanceof m && t.parent().length ? (t.parent(".fancybox-slide--inline").trigger("onReset"), e.$placeholder = m("<div></div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" !== m.type(t) || 3 === (t = m("<div>").append(m.trim(t)).contents())[0].nodeType && (t = m("<div>").html(t)), e.opts.filter && (t = m("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function () {
                    e.$placeholder && (e.$placeholder.after(t.hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (m(this).empty(), e.isLoaded = !1)
                }), e.$content = m(t).appendTo(e.$slide), e.opts.smallBtn && !e.$smallBtn && (e.$smallBtn = m(this.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)), this.afterLoad(e))
            },
            setError: function (e) {
                e.hasError = !0, e.$slide.removeClass("fancybox-slide--" + e.type), this.setContent(e, this.translate(e, e.opts.errorTpl))
            },
            showLoading: function (e) {
                (e = e || this.current) && !e.$spinner && (e.$spinner = m(this.opts.spinnerTpl).appendTo(e.$slide))
            },
            hideLoading: function (e) {
                (e = e || this.current) && e.$spinner && (e.$spinner.remove(), delete e.$spinner)
            },
            afterLoad: function (e) {
                this.isClosing || (e.isLoading = !1, e.isLoaded = !0, this.trigger("afterLoad", e), this.hideLoading(e), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function (e) {
                    return 2 == e.button && e.preventDefault(), !0
                }), "image" === e.type && m('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), this.revealContent(e))
            },
            revealContent: function (t) {
                var n, e, i, o = this,
                    r = t.$slide,
                    a = !1,
                    s = t.opts[o.firstRun ? "animationEffect" : "transitionEffect"],
                    l = t.opts[o.firstRun ? "animationDuration" : "transitionDuration"];
                return l = parseInt(t.forcedDuration === g ? l : t.forcedDuration, 10), !t.isMoved && t.pos === o.currPos && l || (s = !1), "zoom" !== s || t.pos === o.currPos && l && "image" === t.type && !t.hasError && (a = o.getThumbPos(t)) || (s = "fade"), "zoom" === s ? ((i = o.getFitPos(t)).scaleX = Math.round(i.width / a.width * 100) / 100, i.scaleY = Math.round(i.height / a.height * 100) / 100, delete i.width, delete i.height, "auto" == (e = t.opts.zoomOpacity) && (e = .1 < Math.abs(t.width / t.height - a.width / a.height)), e && (a.opacity = .1, i.opacity = 1), m.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), a), f(t.$content), void m.fancybox.animate(t.$content, i, l, function () {
                    o.complete()
                })) : (o.updateSlide(t), s ? (m.fancybox.stop(r), n = "fancybox-animated fancybox-slide--" + (t.pos > o.prevPos ? "next" : "previous") + " fancybox-fx-" + s, r.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(n), t.$content.removeClass("fancybox-is-hidden"), f(r), void m.fancybox.animate(r, "fancybox-slide--current", l, function (e) {
                    r.removeClass(n).removeAttr("style"), t.pos === o.currPos && o.complete()
                }, !0)) : (f(r), t.$content.removeClass("fancybox-is-hidden"), void(t.pos === o.currPos && o.complete())))
            },
            getThumbPos: function (e) {
                var t, n = !1,
                    i = e.opts.$thumb,
                    o = i ? i.offset() : 0;
                return o && i[0].ownerDocument === r && function (e) {
                    for (var t = e[0], i = t.getBoundingClientRect(), n = []; null !== t.parentElement;) "hidden" !== m(t.parentElement).css("overflow") && "auto" !== m(t.parentElement).css("overflow") || n.push(t.parentElement.getBoundingClientRect()), t = t.parentElement;
                    return n.every(function (e) {
                        var t = Math.min(i.right, e.right) - Math.max(i.left, e.left),
                            n = Math.min(i.bottom, e.bottom) - Math.max(i.top, e.top);
                        return 0 < t && 0 < n
                    }) && 0 < i.bottom && 0 < i.right && i.left < m(c).width() && i.top < m(c).height()
                }(i) && (t = this.$refs.stage.offset(), n = {
                    top: o.top - t.top + parseFloat(i.css("border-top-width") || 0),
                    left: o.left - t.left + parseFloat(i.css("border-left-width") || 0),
                    width: i.width(),
                    height: i.height(),
                    scaleX: 1,
                    scaleY: 1
                }), n
            },
            complete: function () {
                var n = this,
                    e = n.current,
                    i = {};
                e.isMoved || !e.isLoaded || e.isComplete || (e.isComplete = !0, e.$slide.siblings().trigger("onReset"), f(e.$slide), e.$slide.addClass("fancybox-slide--complete"), m.each(n.slides, function (e, t) {
                    t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1 ? i[t.pos] = t : t && (m.fancybox.stop(t.$slide), t.$slide.unbind().remove())
                }), n.slides = i, n.updateCursor(), n.trigger("afterShow"), (m(r.activeElement).is("[disabled]") || e.opts.autoFocus && "image" != e.type && "iframe" !== e.type) && n.focus())
            },
            preload: function () {
                var e, t, n = this;
                n.group.length < 2 || (e = n.slides[n.currPos + 1], t = n.slides[n.currPos - 1], e && "image" === e.type && n.loadSlide(e), t && "image" === t.type && n.loadSlide(t))
            },
            focus: function () {
                var e, t = this.current;
                this.isClosing || (e = (e = t && t.isComplete ? t.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first") : null) && e.length ? e : this.$refs.container).focus()
            },
            activate: function () {
                var t = this;
                m(".fancybox-container").each(function () {
                    var e = m(this).data("FancyBox");
                    e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")
                }), t.current && (0 < t.$refs.container.index() && t.$refs.container.prependTo(r.body), t.updateControls()), t.trigger("onActivate"), t.addEvents()
            },
            close: function (e, t) {
                function n() {
                    c.cleanUp(e)
                }
                var i, o, r, a, s, l, c = this,
                    u = c.current;
                return !c.isClosing && (!(c.isClosing = !0) === c.trigger("beforeClose", e) ? (c.isClosing = !1, d(function () {
                    c.update()
                }), !1) : (c.removeEvents(), u.timouts && clearTimeout(u.timouts), r = u.$content, i = u.opts.animationEffect, o = m.isNumeric(t) ? t : i ? u.opts.animationDuration : 0, u.$slide.off(p).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), u.$slide.siblings().trigger("onReset").remove(), o && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), c.hideLoading(u), c.hideControls(), c.updateCursor(), "zoom" !== i || !0 !== e && r && o && "image" === u.type && !u.hasError && (l = c.getThumbPos(u)) || (i = "fade"), "zoom" === i ? (m.fancybox.stop(r), (s = m.fancybox.getTranslate(r)).width = s.width * s.scaleX, s.height = s.height * s.scaleY, "auto" == (a = u.opts.zoomOpacity) && (a = .1 < Math.abs(u.width / u.height - l.width / l.height)), a && (l.opacity = 0), s.scaleX = s.width / l.width, s.scaleY = s.height / l.height, s.width = l.width, s.height = l.height, m.fancybox.setTranslate(u.$content, s), m.fancybox.animate(u.$content, l, o, n)) : i && o ? !0 === e ? setTimeout(n, o) : m.fancybox.animate(u.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, o, n) : n(), !0))
            },
            cleanUp: function (e) {
                var t, n = this;
                n.current.$slide.trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", e), n.$lastFocus && !n.current.focusBack && n.$lastFocus.focus(), n.current = null, (t = m.fancybox.getInstance()) ? t.activate() : (u.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft), m("html").removeClass("fancybox-enabled"), m("#fancybox-style-noscroll").remove())
            },
            trigger: function (e, t) {
                var n, i = Array.prototype.slice.call(arguments, 1),
                    o = t && t.opts ? t : this.current;
                return o ? i.unshift(o) : o = this, i.unshift(this), m.isFunction(o.opts[e]) && (n = o.opts[e].apply(o, i)), !1 === n ? n : void("afterClose" === e ? a.trigger(e + ".fb", i) : this.$refs.container.trigger(e + ".fb", i))
            },
            updateControls: function (e) {
                var t = this,
                    n = t.current,
                    i = n.index,
                    o = n.opts,
                    r = o.caption,
                    a = t.$refs.caption;
                n.$slide.trigger("refresh"), t.$caption = r && r.length ? a.html(r) : null, t.isHiddenControls || t.showControls(), m("[data-fancybox-count]").html(t.group.length), m("[data-fancybox-index]").html(i + 1), m("[data-fancybox-prev]").prop("disabled", !o.loop && i <= 0), m("[data-fancybox-next]").prop("disabled", !o.loop && i >= t.group.length - 1)
            },
            hideControls: function () {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            },
            showControls: function () {
                var e = this,
                    t = e.current ? e.current.opts : e.opts,
                    n = e.$refs.container;
                e.isHiddenControls = !1, e.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && 1 < e.group.length)).toggleClass("fancybox-show-nav", !!(t.arrows && 1 < e.group.length)).toggleClass("fancybox-is-modal", !!t.modal), e.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
            },
            toggleControls: function () {
                this.isHiddenControls ? this.showControls() : this.hideControls()
            }
        }), m.fancybox = {
            version: "3.1.20",
            defaults: o,
            getInstance: function (e) {
                var t = m('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),
                    n = Array.prototype.slice.call(arguments, 1);
                return t instanceof i && ("string" === m.type(e) ? t[e].apply(t, n) : "function" === m.type(e) && e.apply(t, n), t)
            },
            open: function (e, t, n) {
                return new i(e, t, n)
            },
            close: function (e) {
                var t = this.getInstance();
                t && (t.close(), !0 === e && this.close())
            },
            destroy: function () {
                this.close(!0), a.off("click.fb-start")
            },
            isMobile: r.createTouch !== g && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
            use3d: (e = r.createElement("div"), c.getComputedStyle && c.getComputedStyle(e).getPropertyValue("transform") && !(r.documentMode && r.documentMode < 11)),
            getTranslate: function (e) {
                var t, n;
                return !(!e || !e.length) && ((t = (t = e.eq(0).css("transform")) && -1 !== t.indexOf("matrix") ? (t = (t = t.split("(")[1]).split(")")[0]).split(",") : []).length ? t = (t = 10 < t.length ? [t[13], t[12], t[0], t[5]] : [t[5], t[4], t[0], t[3]]).map(parseFloat) : (t = [0, 0, 1, 1], (n = /\.*translate\((.*)px,(.*)px\)/i.exec(e.eq(0).attr("style"))) && (t[0] = parseFloat(n[2]), t[1] = parseFloat(n[1]))), {
                    top: t[0],
                    left: t[1],
                    scaleX: t[2],
                    scaleY: t[3],
                    opacity: parseFloat(e.css("opacity")),
                    width: e.width(),
                    height: e.height()
                })
            },
            setTranslate: function (e, t) {
                var n = "",
                    i = {};
                if (e && t) return t.left === g && t.top === g || (n = (t.left === g ? e.position().left : t.left) + "px, " + (t.top === g ? e.position().top : t.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), t.scaleX !== g && t.scaleY !== g && (n = (n.length ? n + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"), n.length && (i.transform = n), t.opacity !== g && (i.opacity = t.opacity), t.width !== g && (i.width = t.width), t.height !== g && (i.height = t.height), e.css(i)
            },
            animate: function (t, n, e, i, o) {
                var r = p || "transitionend";
                m.isFunction(e) && (i = e, e = null), m.isPlainObject(n) || t.removeAttr("style"), t.on(r, function (e) {
                    e && e.originalEvent && (!t.is(e.originalEvent.target) || "z-index" == e.originalEvent.propertyName) || (t.off(r), m.isPlainObject(n) ? n.scaleX !== g && n.scaleY !== g && (t.css("transition-duration", "0ms"), n.width = t.width() * n.scaleX, n.height = t.height() * n.scaleY, n.scaleX = 1, n.scaleY = 1, m.fancybox.setTranslate(t, n)) : !0 !== o && t.removeClass(n), m.isFunction(i) && i(e))
                }), m.isNumeric(e) && t.css("transition-duration", e + "ms"), m.isPlainObject(n) ? m.fancybox.setTranslate(t, n) : t.addClass(n), t.data("timer", setTimeout(function () {
                    t.trigger("transitionend")
                }, e + 16))
            },
            stop: function (e) {
                clearTimeout(e.data("timer")), e.off(p)
            }
        }, m.fn.fancybox = function (e) {
            var t;
            return (t = (e = e || {}).selector || !1) ? m("body").off("click.fb-start", t).on("click.fb-start", t, {
                items: m(t),
                options: e
            }, n) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: e
            }, n), this
        }, a.on("click.fb-start", "[data-fancybox]", n)
    }
    var e
}(window, document, window.jQuery),
function (f) {
    "use strict";

    function h(n, e, t) {
        if (n) return t = t || "", "object" === f.type(t) && (t = f.param(t, !0)), f.each(e, function (e, t) {
            n = n.replace("$" + e, t || "")
        }), t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t), n
    }
    var n = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
                api: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        metacafe: {
            matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
            type: "iframe",
            url: "//www.metacafe.com/embed/$1/?ap=1"
        },
        dailymotion: {
            matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
            params: {
                additionalInfos: 0,
                autoStart: 1
            },
            type: "iframe",
            url: "//www.dailymotion.com/embed/video/$1"
        },
        vine: {
            matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
            type: "iframe",
            url: "//vine.co/v/$1/embed/simple"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        google_maps: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (e) {
                return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12]) + "&output=" + (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
            }
        }
    };
    f(document).on("onInit.fb", function (e, t) {
        f.each(t.group, function (e, o) {
            var t, r, a, s, l, c, u, d = o.src || "",
                p = !1;
            o.type || (t = f.extend(!0, {}, n, o.opts.media), f.each(t, function (e, t) {
                if (a = d.match(t.matcher), c = {}, u = e, a) {
                    if (p = t.type, t.paramPlace && a[t.paramPlace]) {
                        "?" == (l = a[t.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
                        for (var n = 0; n < l.length; ++n) {
                            var i = l[n].split("=", 2);
                            2 == i.length && (c[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")))
                        }
                    }
                    return s = f.extend(!0, {}, t.params, o.opts[e], c), d = "function" === f.type(t.url) ? t.url.call(this, a, s, o) : h(t.url, a, s), r = "function" === f.type(t.thumb) ? t.thumb.call(this, a, s, o) : h(t.thumb, a), "vimeo" === u && (d = d.replace("&%23", "#")), !1
                }
            }), p ? (o.src = d, o.type = p, o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r), "iframe" === p && (f.extend(!0, o.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            }), o.contentProvider = u, o.opts.slideClass += " fancybox-slide--" + ("google_maps" == u ? "map" : "video"))) : o.type = "image")
        })
    })
}(window.jQuery),
function (h, s, m) {
    "use strict";

    function u(e) {
        var t = [];
        for (var n in e = (e = e.originalEvent || e || h.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[n].pageX ? t.push({
            x: e[n].pageX,
            y: e[n].pageY
        }) : e[n].clientX && t.push({
            x: e[n].clientX,
            y: e[n].clientY
        });
        return t
    }

    function g(e, t, n) {
        return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
    }

    function l(e) {
        if (e.is("a,button,input,select,textarea") || m.isFunction(e.get(0).onclick)) return 1;
        for (var t = 0, n = e[0].attributes, i = n.length; t < i; t++)
            if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return 1
    }

    function c(e) {
        for (var t, n, i, o, r, a = !1;
            (t = e.get(0), 0, n = h.getComputedStyle(t)["overflow-y"], i = h.getComputedStyle(t)["overflow-x"], o = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight, r = ("scroll" === i || "auto" === i) && t.scrollWidth > t.clientWidth, !(a = o || r)) && ((e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body")););
        return a
    }

    function n(e) {
        var t = this;
        t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", m.proxy(t, "ontouchstart"))
    }
    var v = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || function (e) {
            return h.setTimeout(e, 1e3 / 60)
        },
        y = h.cancelAnimationFrame || h.webkitCancelAnimationFrame || h.mozCancelAnimationFrame || h.oCancelAnimationFrame || function (e) {
            h.clearTimeout(e)
        };
    n.prototype.destroy = function () {
        this.$container.off(".fb.touch")
    }, n.prototype.ontouchstart = function (e) {
        var t = this,
            n = m(e.target),
            i = t.instance,
            o = i.current,
            r = o.$content,
            a = "touchstart" == e.type;
        if (a && t.$container.off("mousedown.fb.touch"), !o || t.instance.isAnimating || t.instance.isClosing) return e.stopPropagation(), void e.preventDefault();
        if ((!e.originalEvent || 2 != e.originalEvent.button) && n.length && !l(n) && !l(n.parent()) && !(e.originalEvent.clientX > n[0].clientWidth + n.offset().left) && (t.startPoints = u(e), t.startPoints && !(1 < t.startPoints.length && i.isSliding))) {
            if (t.$target = n, t.$content = r, t.canTap = !0, m(s).off(".fb.touch"), m(s).on(a ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", m.proxy(t, "ontouchend")), m(s).on(a ? "touchmove.fb.touch" : "mousemove.fb.touch", m.proxy(t, "ontouchmove")), e.stopPropagation(), !i.current.opts.touch && !i.canPan() || !n.is(t.$stage) && !t.$stage.find(n).length) return void(n.is("img") && e.preventDefault());
            m.fancybox.isMobile && (c(t.$target) || c(t.$target.parent())) || e.preventDefault(), t.canvasWidth = Math.round(o.$slide[0].clientWidth), t.canvasHeight = Math.round(o.$slide[0].clientHeight), t.startTime = (new Date).getTime(), t.distanceX = t.distanceY = t.distance = 0, t.isPanning = !1, t.isSwiping = !1, t.isZooming = !1, t.sliderStartPos = t.sliderLastPos || {
                top: 0,
                left: 0
            }, t.contentStartPos = m.fancybox.getTranslate(t.$content), t.contentLastPos = null, 1 !== t.startPoints.length || t.isZooming || (t.canTap = !i.isSliding, "image" === o.type && (t.contentStartPos.width > t.canvasWidth + 1 || t.contentStartPos.height > t.canvasHeight + 1) ? (m.fancybox.stop(t.$content), t.$content.css("transition-duration", "0ms"), t.isPanning = !0) : t.isSwiping = !0, t.$container.addClass("fancybox-controls--isGrabbing")), 2 !== t.startPoints.length || i.isAnimating || o.hasError || "image" !== o.type || !o.isLoaded && !o.$ghost || (t.isZooming = !0, t.isSwiping = !1, t.isPanning = !1, m.fancybox.stop(t.$content), t.$content.css("transition-duration", "0ms"), t.centerPointStartX = .5 * (t.startPoints[0].x + t.startPoints[1].x) - m(h).scrollLeft(), t.centerPointStartY = .5 * (t.startPoints[0].y + t.startPoints[1].y) - m(h).scrollTop(), t.percentageOfImageAtPinchPointX = (t.centerPointStartX - t.contentStartPos.left) / t.contentStartPos.width, t.percentageOfImageAtPinchPointY = (t.centerPointStartY - t.contentStartPos.top) / t.contentStartPos.height, t.startDistanceBetweenFingers = g(t.startPoints[0], t.startPoints[1]))
        }
    }, n.prototype.ontouchmove = function (e) {
        var t = this;
        if (t.newPoints = u(e), m.fancybox.isMobile && (c(t.$target) || c(t.$target.parent()))) return e.stopPropagation(), void(t.canTap = !1);
        if ((t.instance.current.opts.touch || t.instance.canPan()) && t.newPoints && t.newPoints.length && (t.distanceX = g(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = g(t.newPoints[0], t.startPoints[0], "y"), t.distance = g(t.newPoints[0], t.startPoints[0]), 0 < t.distance)) {
            if (!t.$target.is(t.$stage) && !t.$stage.find(t.$target).length) return;
            e.stopPropagation(), e.preventDefault(), t.isSwiping ? t.onSwipe() : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()
        }
    }, n.prototype.onSwipe = function () {
        var e, i = this,
            t = i.isSwiping,
            n = i.sliderStartPos.left || 0;
        !0 === t ? 10 < Math.abs(i.distance) && (i.canTap = !1, i.instance.group.length < 2 && i.instance.opts.touch.vertical ? i.isSwiping = "y" : i.instance.isSliding || !1 === i.instance.opts.touch.vertical || "auto" === i.instance.opts.touch.vertical && 800 < m(h).width() ? i.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(i.distanceY, i.distanceX) / Math.PI), i.isSwiping = 45 < e && e < 135 ? "y" : "x"), i.instance.isSliding = i.isSwiping, i.startPoints = i.newPoints, m.each(i.instance.slides, function (e, t) {
            m.fancybox.stop(t.$slide), t.$slide.css("transition-duration", "0ms"), t.inTransition = !1, t.pos === i.instance.current.pos && (i.sliderStartPos.left = m.fancybox.getTranslate(t.$slide).left)
        }), i.instance.SlideShow && i.instance.SlideShow.isActive && i.instance.SlideShow.stop()) : ("x" == t && (0 < i.distanceX && (i.instance.group.length < 2 || 0 === i.instance.current.index && !i.instance.current.opts.loop) ? n += Math.pow(i.distanceX, .8) : i.distanceX < 0 && (i.instance.group.length < 2 || i.instance.current.index === i.instance.group.length - 1 && !i.instance.current.opts.loop) ? n -= Math.pow(-i.distanceX, .8) : n += i.distanceX), i.sliderLastPos = {
            top: "x" == t ? 0 : i.sliderStartPos.top + i.distanceY,
            left: n
        }, i.requestId && (y(i.requestId), i.requestId = null), i.requestId = v(function () {
            i.sliderLastPos && (m.each(i.instance.slides, function (e, t) {
                var n = t.pos - i.instance.currPos;
                m.fancybox.setTranslate(t.$slide, {
                    top: i.sliderLastPos.top,
                    left: i.sliderLastPos.left + n * i.canvasWidth + n * t.opts.gutter
                })
            }), i.$container.addClass("fancybox-is-sliding"))
        }))
    }, n.prototype.onPan = function () {
        var e, t, n, i = this;
        i.canTap = !1, e = i.contentStartPos.width > i.canvasWidth ? i.contentStartPos.left + i.distanceX : i.contentStartPos.left, t = i.contentStartPos.top + i.distanceY, (n = i.limitMovement(e, t, i.contentStartPos.width, i.contentStartPos.height)).scaleX = i.contentStartPos.scaleX, n.scaleY = i.contentStartPos.scaleY, i.contentLastPos = n, i.requestId && (y(i.requestId), i.requestId = null), i.requestId = v(function () {
            m.fancybox.setTranslate(i.$content, i.contentLastPos)
        })
    }, n.prototype.limitMovement = function (e, t, n, i) {
        var o = this,
            r = o.canvasWidth,
            a = o.canvasHeight,
            s = o.contentStartPos.left,
            l = o.contentStartPos.top,
            c = o.distanceX,
            u = o.distanceY,
            d = Math.max(0, .5 * r - .5 * n),
            p = Math.max(0, .5 * a - .5 * i),
            f = Math.min(r - n, .5 * r - .5 * n),
            h = Math.min(a - i, .5 * a - .5 * i);
        return r < n && (0 < c && d < e && (e = d - 1 + Math.pow(-d + s + c, .8) || 0), c < 0 && e < f && (e = f + 1 - Math.pow(f - s - c, .8) || 0)), a < i && (0 < u && p < t && (t = p - 1 + Math.pow(-p + l + u, .8) || 0), u < 0 && t < h && (t = h + 1 - Math.pow(h - l - u, .8) || 0)), {
            top: t,
            left: e
        }
    }, n.prototype.limitPosition = function (e, t, n, i) {
        var o = this.canvasWidth,
            r = this.canvasHeight;
        return e = o < n ? (e = 0 < e ? 0 : e) < o - n ? o - n : e : Math.max(0, o / 2 - n / 2), {
            top: t = r < i ? (t = 0 < t ? 0 : t) < r - i ? r - i : t : Math.max(0, r / 2 - i / 2),
            left: e
        }
    }, n.prototype.onZoom = function () {
        var e = this,
            t = e.contentStartPos.width,
            n = e.contentStartPos.height,
            i = e.contentStartPos.left,
            o = e.contentStartPos.top,
            r = g(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            a = Math.floor(t * r),
            s = Math.floor(n * r),
            l = (t - a) * e.percentageOfImageAtPinchPointX,
            c = (n - s) * e.percentageOfImageAtPinchPointY,
            u = (e.newPoints[0].x + e.newPoints[1].x) / 2 - m(h).scrollLeft(),
            d = (e.newPoints[0].y + e.newPoints[1].y) / 2 - m(h).scrollTop(),
            p = u - e.centerPointStartX,
            f = {
                top: o + (c + (d - e.centerPointStartY)),
                left: i + (l + p),
                scaleX: e.contentStartPos.scaleX * r,
                scaleY: e.contentStartPos.scaleY * r
            };
        e.canTap = !1, e.newWidth = a, e.newHeight = s, e.contentLastPos = f, e.requestId && (y(e.requestId), e.requestId = null), e.requestId = v(function () {
            m.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, n.prototype.ontouchend = function (e) {
        var t = this,
            n = Math.max((new Date).getTime() - t.startTime, 1),
            i = t.isSwiping,
            o = t.isPanning,
            r = t.isZooming;
        return t.endPoints = u(e), t.$container.removeClass("fancybox-controls--isGrabbing"), m(s).off(".fb.touch"), t.requestId && (y(t.requestId), t.requestId = null), t.isSwiping = !1, t.isPanning = !1, t.isZooming = !1, t.canTap ? t.onTap(e) : (t.speed = 366, t.velocityX = t.distanceX / n * .5, t.velocityY = t.distanceY / n * .5, t.speedX = Math.max(.5 * t.speed, Math.min(1.5 * t.speed, 1 / Math.abs(t.velocityX) * t.speed)), void(o ? t.endPanning() : r ? t.endZooming() : t.endSwiping(i)))
    }, n.prototype.endSwiping = function (e) {
        var t = this,
            n = !1;
        t.instance.isSliding = !1, t.sliderLastPos = null, "y" == e && 50 < Math.abs(t.distanceY) ? (m.fancybox.animate(t.instance.current.$slide, {
            top: t.sliderStartPos.top + t.distanceY + 150 * t.velocityY,
            opacity: 0
        }, 150), n = t.instance.close(!0, 300)) : "x" == e && 50 < t.distanceX && 1 < t.instance.group.length ? n = t.instance.previous(t.speedX) : "x" == e && t.distanceX < -50 && 1 < t.instance.group.length && (n = t.instance.next(t.speedX)), !1 !== n || "x" != e && "y" != e || t.instance.jumpTo(t.instance.current.index, 150), t.$container.removeClass("fancybox-is-sliding")
    }, n.prototype.endPanning = function () {
        var e, t, n, i = this;
        i.contentLastPos && (t = !1 === i.instance.current.opts.touch.momentum ? (e = i.contentLastPos.left, i.contentLastPos.top) : (e = i.contentLastPos.left + i.velocityX * i.speed, i.contentLastPos.top + i.velocityY * i.speed), (n = i.limitPosition(e, t, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width, n.height = i.contentStartPos.height, m.fancybox.animate(i.$content, n, 330))
    }, n.prototype.endZooming = function () {
        var e, t, n, i, o = this,
            r = o.instance.current,
            a = o.newWidth,
            s = o.newHeight;
        o.contentLastPos && (e = o.contentLastPos.left, i = {
            top: t = o.contentLastPos.top,
            left: e,
            width: a,
            height: s,
            scaleX: 1,
            scaleY: 1
        }, m.fancybox.setTranslate(o.$content, i), a < o.canvasWidth && s < o.canvasHeight ? o.instance.scaleToFit(150) : a > r.width || s > r.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (n = o.limitPosition(e, t, a, s), m.fancybox.setTranslate(o.content, m.fancybox.getTranslate(o.$content)), m.fancybox.animate(o.$content, n, 150)))
    }, n.prototype.onTap = function (n) {
        function e(e) {
            var t = a.opts[e];
            if (m.isFunction(t) && (t = t.apply(r, [a, n])), t) switch (t) {
                case "close":
                    r.close(i.startEvent);
                    break;
                case "toggleControls":
                    r.toggleControls(!0);
                    break;
                case "next":
                    r.next();
                    break;
                case "nextOrClose":
                    1 < r.group.length ? r.next() : r.close(i.startEvent);
                    break;
                case "zoom":
                    "image" == a.type && (a.isLoaded || a.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(l, c) : r.group.length < 2 && r.close(i.startEvent))
            }
        }
        var t, i = this,
            o = m(n.target),
            r = i.instance,
            a = r.current,
            s = n && u(n) || i.startPoints,
            l = s[0] ? s[0].x - i.$stage.offset().left : 0,
            c = s[0] ? s[0].y - i.$stage.offset().top : 0;
        if (!(n.originalEvent && 2 == n.originalEvent.button || r.isSliding || l > o[0].clientWidth + o.offset().left)) {
            if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside";
            else if (o.is(".fancybox-slide")) t = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.has(n.target).length) return;
                t = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, 50 < Math.abs(l - i.tapX) || 50 < Math.abs(c - i.tapY) || r.isSliding) return this;
                e("dblclick" + t)
            } else i.tapX = l, i.tapY = c, a.opts["dblclick" + t] && a.opts["dblclick" + t] !== a.opts["click" + t] ? i.tapped = setTimeout(function () {
                i.tapped = null, e("click" + t)
            }, 300) : e("click" + t);
            return this
        }
    }, m(s).on("onActivate.fb", function (e, t) {
        t && !t.Guestures && (t.Guestures = new n(t))
    }), m(s).on("beforeClose.fb", function (e, t) {
        t && t.Guestures && t.Guestures.destroy()
    })
}(window, document, window.jQuery),
function (a, s) {
    "use strict";

    function n(e) {
        this.instance = e, this.init()
    }
    s.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        speed: 3e3,
        init: function () {
            var e = this;
            e.$button = e.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                e.toggle()
            }), (e.instance.group.length < 2 || !e.instance.group[e.instance.currIndex].opts.slideShow) && e.$button.hide()
        },
        set: function () {
            var e = this;
            e.instance && e.instance.current && (e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function () {
                e.instance.next()
            }, e.instance.current.opts.slideShow.speed || e.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
        },
        clear: function () {
            clearTimeout(this.timer), this.timer = null
        },
        start: function () {
            var e = this,
                t = e.instance.current;
            e.instance && t && (t.opts.loop || t.index < e.instance.group.length - 1) && (e.isActive = !0, e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), t.isComplete && e.set())
        },
        stop: function () {
            var e = this.instance.current;
            this.clear(), this.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), this.isActive = !1
        },
        toggle: function () {
            this.isActive ? this.stop() : this.start()
        }
    }), s(a).on({
        "onInit.fb": function (e, t) {
            t && !t.SlideShow && (t.SlideShow = new n(t))
        },
        "beforeShow.fb": function (e, t, n, i) {
            var o = t && t.SlideShow;
            i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        },
        "afterShow.fb": function (e, t, n) {
            var i = t && t.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function (e, t, n, i, o) {
            var r = t && t.SlideShow;
            !r || !n.opts.slideShow || 80 !== o && 32 !== o || s(a.activeElement).is("button,a,input") || (i.preventDefault(), r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function (e, t) {
            var n = t && t.SlideShow;
            n && n.stop()
        }
    }), s(a).on("visibilitychange", function () {
        var e = s.fancybox.getInstance(),
            t = e && e.SlideShow;
        t && t.isActive && (a.hidden ? t.clear() : t.set())
    })
}(document, window.jQuery),
function (r, t) {
    "use strict";
    var n = function () {
        for (var e, t, n = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], i = {}, o = 0; o < n.length; o++)
            if ((e = n[o]) && e[1] in r) {
                for (t = 0; t < e.length; t++) i[n[0][t]] = e[t];
                return i
            } return !1
    }();
    if (!n) return t.fancybox.defaults.btnTpl.fullScreen = !1;
    var o = {
        request: function (e) {
            (e = e || r.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
        },
        exit: function () {
            r[n.exitFullscreen]()
        },
        toggle: function (e) {
            e = e || r.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
        },
        isFullscreen: function () {
            return Boolean(r[n.fullscreenElement])
        },
        enabled: function () {
            return Boolean(r[n.fullscreenEnabled])
        }
    };
    t(r).on({
        "onInit.fb": function (e, t) {
            var n, i = t.$refs.toolbar.find("[data-fancybox-fullscreen]");
            t && !t.FullScreen && t.group[t.currIndex].opts.fullScreen ? ((n = t.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
                e.stopPropagation(), e.preventDefault(), o.toggle(n[0])
            }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && o.request(n[0]), t.FullScreen = o) : i.hide()
        },
        "afterKeydown.fb": function (e, t, n, i, o) {
            t && t.FullScreen && 70 === o && (i.preventDefault(), t.FullScreen.toggle(t.$refs.container[0]))
        },
        "beforeClose.fb": function (e) {
            e && e.FullScreen && o.exit()
        }
    }), t(r).on(n.fullscreenchange, function () {
        var e = t.fancybox.getInstance();
        e.current && "image" === e.current.type && e.isAnimating && (e.current.$content.css("transition", "none"), e.isAnimating = !1, e.update(!0, !0, 0))
    })
}(document, window.jQuery),
function (e, s) {
    "use strict";

    function n(e) {
        this.instance = e, this.init()
    }
    s.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        init: function () {
            var e = this,
                t = e.instance.group[0],
                n = e.instance.group[1];
            e.$button = e.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), 1 < e.instance.group.length && e.instance.group[e.instance.currIndex].opts.thumbs && ("image" == t.type || t.opts.thumb || t.opts.$thumb) && ("image" == n.type || n.opts.thumb || n.opts.$thumb) ? (e.$button.on("click", function () {
                e.toggle()
            }), e.isActive = !0) : (e.$button.hide(), e.isActive = !1)
        },
        create: function () {
            var n, i, e = this.instance;
            this.$grid = s('<div class="fancybox-thumbs"></div>').appendTo(e.$refs.container), n = "<ul>", s.each(e.group, function (e, t) {
                (i = t.opts.thumb || (t.opts.$thumb ? t.opts.$thumb.attr("src") : null)) || "image" !== t.type || (i = t.src), i && i.length && (n += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>')
            }), n += "</ul>", this.$list = s(n).appendTo(this.$grid).on("click", "li", function () {
                e.jumpTo(s(this).data("index"))
            }), this.$list.find("img").hide().one("load", function () {
                var e = s(this).parent().removeClass("fancybox-thumbs-loading"),
                    t = e.outerWidth(),
                    n = e.outerHeight(),
                    i = this.naturalWidth || this.width,
                    o = this.naturalHeight || this.height,
                    r = i / t,
                    a = o / n;
                1 <= r && 1 <= a && (a < r ? (i /= a, o = n) : (i = t, o /= r)), s(this).css({
                    width: Math.floor(i),
                    height: Math.floor(o),
                    "margin-top": Math.min(0, Math.floor(.3 * n - .3 * o)),
                    "margin-left": Math.min(0, Math.floor(.5 * t - .5 * i))
                }).show()
            }).each(function () {
                this.src = s(this).data("src")
            })
        },
        focus: function () {
            this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
        },
        close: function () {
            this.$grid.hide()
        },
        update: function () {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
        },
        hide: function () {
            this.isVisible = !1, this.update()
        },
        show: function () {
            this.isVisible = !0, this.update()
        },
        toggle: function () {
            this.isVisible = !this.isVisible, this.update()
        }
    }), s(e).on({
        "onInit.fb": function (e, t) {
            t && !t.Thumbs && (t.Thumbs = new n(t))
        },
        "beforeShow.fb": function (e, t, n, i) {
            var o = t && t.Thumbs;
            if (o && o.isActive) {
                if (n.modal) return o.$button.hide(), void o.hide();
                i && !0 === t.opts.thumbs.autoStart && o.show(), o.isVisible && o.focus()
            }
        },
        "afterKeydown.fb": function (e, t, n, i, o) {
            var r = t && t.Thumbs;
            r && r.isActive && 71 === o && (i.preventDefault(), r.toggle())
        },
        "beforeClose.fb": function (e, t) {
            var n = t && t.Thumbs;
            n && n.isVisible && !1 !== t.opts.thumbs.hideOnClose && n.close()
        }
    })
}(document, window.jQuery),
function (r, a, s) {
    "use strict";

    function o() {
        var e = a.location.hash.substr(1),
            t = e.split("-"),
            n = 1 < t.length && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10) || 1;
        return n < 1 && (n = 1), {
            hash: e,
            index: n,
            gallery: t.join("-")
        }
    }

    function t(e) {
        var t;
        "" !== e.gallery && ((t = s("[data-fancybox='" + s.escapeSelector(e.gallery) + "']").eq(e.index - 1)).length ? t.trigger("click") : s("#" + s.escapeSelector(e.gallery)).trigger("click"))
    }

    function l(e) {
        var t;
        return !!e && ((t = e.current ? e.current.opts : e.opts).$orig ? t.$orig.data("fancybox") : t.hash || "")
    }
    s.escapeSelector || (s.escapeSelector = function (e) {
        return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        })
    });
    var c = null,
        u = null;
    s(function () {
        setTimeout(function () {
            !1 !== s.fancybox.defaults.hash && (s(r).on({
                "onInit.fb": function (e, t) {
                    var n, i;
                    !1 !== t.group[t.currIndex].opts.hash && (n = o(), (i = l(t)) && n.gallery && i == n.gallery && (t.currIndex = n.index - 1))
                },
                "beforeShow.fb": function (e, t, n, i) {
                    var o;
                    !1 === n.opts.hash || (o = l(t)) && "" !== o && (a.location.hash.indexOf(o) < 0 && (t.opts.origHash = a.location.hash), c = o + (1 < t.group.length ? "-" + (n.index + 1) : ""), "replaceState" in a.history ? (u && clearTimeout(u), u = setTimeout(function () {
                        a.history[i ? "pushState" : "replaceState"]({}, r.title, a.location.pathname + a.location.search + "#" + c), u = null
                    }, 300)) : a.location.hash = c)
                },
                "beforeClose.fb": function (e, t, n) {
                    var i, o;
                    u && clearTimeout(u), !1 !== n.opts.hash && (i = l(t), o = t && t.opts.origHash ? t.opts.origHash : "", i && "" !== i && ("replaceState" in history ? a.history.replaceState({}, r.title, a.location.pathname + a.location.search + o) : (a.location.hash = o, s(a).scrollTop(t.scrollTop).scrollLeft(t.scrollLeft))), c = null)
                }
            }), s(a).on("hashchange.fb", function () {
                var e = o();
                s.fancybox.getInstance() ? !c || c === e.gallery + "-" + e.index || 1 === e.index && c == e.gallery || (c = null, s.fancybox.close()) : "" !== e.gallery && t(e)
            }), s(a).one("unload.fb popstate.fb", function () {
                s.fancybox.getInstance("close", !0, 0)
            }), t(o()))
        }, 50)
    })
}(document, window, window.jQuery),
function (n) {
    function i(e) {
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    var o = {};
    i.m = n, i.c = o, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 3)
}([function (e, t, n) {
    "use strict";
    var i, o, r;
    o = [n(2)], void 0 !== (r = "function" == typeof (i = function (e) {
        return e
    }) ? i.apply(t, o) : i) && (e.exports = r)
}, function (e, t, n) {
    "use strict";
    var i, o, r, le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    o = [n(0), n(10), n(11)], void 0 !== (r = "function" == typeof (i = function (Z, J, ee, te) {
        function ne(e, t, n) {
            if (!(this instanceof ne)) return new ne(e, t, n);
            this.el = te, this.events = {}, this.maskset = te, this.refreshValue = !1, !0 !== n && (Z.isPlainObject(e) ? t = e : (t = t || {}).alias = e, this.opts = Z.extend(!0, {}, this.defaults, t), this.noMasksCache = t && t.definitions !== te, this.userOptions = t || {}, this.isRTL = this.opts.numericInput, u(this.opts.alias, t, this.opts))
        }

        function u(e, t, n) {
            var i = ne.prototype.aliases[e];
            return i ? (i.alias && u(i.alias, te, n), Z.extend(!0, n, i), Z.extend(!0, n, t), !0) : (null === n.mask && (n.mask = e), !1)
        }

        function a(n, s) {
            function e(e, t, n) {
                var i = !1;
                if (null !== e && "" !== e || ((i = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (i = !0, e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
                    var o = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                    e = n.groupmarker.start + e + n.groupmarker.end + n.quantifiermarker.start + o + "," + n.repeat + n.quantifiermarker.end
                }
                var r, a = i ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e;
                return ne.prototype.masksCache[a] === te || !0 === s ? (r = {
                    mask: e,
                    maskToken: ne.prototype.analyseMask(e, i, n),
                    validPositions: {},
                    _buffer: te,
                    buffer: te,
                    tests: {},
                    metadata: t,
                    maskLength: te
                }, !0 !== s && (ne.prototype.masksCache[a] = r, r = Z.extend(!0, {}, ne.prototype.masksCache[a]))) : r = Z.extend(!0, {}, ne.prototype.masksCache[a]), r
            }
            if (Z.isFunction(n.mask) && (n.mask = n.mask(n)), Z.isArray(n.mask)) {
                if (n.mask.length > 1) {
                    n.keepStatic = null === n.keepStatic || n.keepStatic;
                    var i = n.groupmarker.start;
                    return Z.each(n.numericInput ? n.mask.reverse() : n.mask, function (e, t) {
                        i.length > 1 && (i += n.groupmarker.end + n.alternatormarker + n.groupmarker.start), t.mask === te || Z.isFunction(t.mask) ? i += t : i += t.mask
                    }), i += n.groupmarker.end, e(i, n.mask, n)
                }
                n.mask = n.mask.pop()
            }
            return n.mask && n.mask.mask !== te && !Z.isFunction(n.mask.mask) ? e(n.mask.mask, n.mask, n) : e(n.mask, n.mask, n)
        }

        function ie(e, t, R) {
            function o(e, t, n) {
                t = t || 0;
                var i, o, r, a = [],
                    s = 0,
                    l = T();
                do {
                    !0 === e && I().validPositions[s] ? (o = (r = I().validPositions[s]).match, i = r.locator.slice(), a.push(!0 === n ? r.input : !1 === n ? o.nativeDef : j(s, o))) : (o = (r = b(s, i, s - 1)).match, i = r.locator.slice(), (!1 === R.jitMasking || s < l || "number" == typeof R.jitMasking && isFinite(R.jitMasking) && R.jitMasking > s) && a.push(!1 === n ? o.nativeDef : j(s, o))), s++
                } while ((F === te || s < F) && (null !== o.fn || "" !== o.def) || t > s);
                return "" === a[a.length - 1] && a.pop(), I().maskLength = s + 1, a
            }

            function I() {
                return t
            }

            function S(e) {
                var t = I();
                t.buffer = te, !0 !== e && (t.validPositions = {}, t.p = 0)
            }

            function T(e, t, n) {
                var i = -1,
                    o = -1,
                    r = n || I().validPositions;
                e === te && (e = -1);
                for (var a in r) {
                    var s = parseInt(a);
                    r[s] && (t || !0 !== r[s].generatedInput) && (s <= e && (i = s), s >= e && (o = s))
                }
                return -1 !== i && e - i > 1 || o < e ? i : o
            }

            function y(e, t, n, i) {
                var o, r = e,
                    a = Z.extend(!0, {}, I().validPositions),
                    s = !1;
                for (I().p = e, o = t - 1; o >= r; o--) I().validPositions[o] !== te && (!0 !== n && (!I().validPositions[o].match.optionality && function (e) {
                    var t = I().validPositions[e];
                    if (t !== te && null === t.match.fn) {
                        var n = I().validPositions[e - 1],
                            i = I().validPositions[e + 1];
                        return n !== te && i !== te
                    }
                    return !1
                }(o) || !1 === R.canClearPosition(I(), o, T(), i, R)) || delete I().validPositions[o]);
                for (S(!0), o = r + 1; o <= T();) {
                    for (; I().validPositions[r] !== te;) r++;
                    if (o < r && (o = r + 1), I().validPositions[o] === te && O(o)) o++;
                    else {
                        var l = b(o);
                        !1 === s && a[r] && a[r].match.def === l.match.def ? (I().validPositions[r] = Z.extend(!0, {}, a[r]), I().validPositions[r].input = l.input, delete I().validPositions[o], o++) : x(r, l.match.def) ? !1 !== $(r, l.input || j(o), !0) && (delete I().validPositions[o], o++, s = !0) : O(o) || (o++, r--), r++
                    }
                }
                S(!0)
            }

            function f(e, t) {
                for (var n, i = e, o = T(), r = I().validPositions[o] || C(0)[0], a = r.alternation !== te ? r.locator[r.alternation].toString().split(",") : [], s = 0; s < i.length && (!((n = i[s]).match && (R.greedy && !0 !== n.match.optionalQuantifier || (!1 === n.match.optionality || !1 === n.match.newBlockMarker) && !0 !== n.match.optionalQuantifier) && (r.alternation === te || r.alternation !== n.alternation || n.locator[r.alternation] !== te && A(n.locator[r.alternation].toString().split(","), a))) || !0 === t && (null !== n.match.fn || /[0-9a-bA-Z]/.test(n.match.def))); s++);
                return n
            }

            function b(e, t, n) {
                return I().validPositions[e] || f(C(e, t ? t.slice() : t, n))
            }

            function s(e) {
                return I().validPositions[e] ? I().validPositions[e] : C(e)[0]
            }

            function x(e, t) {
                for (var n = !1, i = C(e), o = 0; o < i.length; o++)
                    if (i[o].match && i[o].match.def === t) {
                        n = !0;
                        break
                    } return n
            }

            function C($, e, t) {
                function O(E, P, e, t) {
                    function A(e, n, t) {
                        function r(n, i) {
                            var o = 0 === Z.inArray(n, i.matches);
                            return o || Z.each(i.matches, function (e, t) {
                                if (!0 === t.isQuantifier && (o = r(n, i.matches[e - 1]))) return !1
                            }), o
                        }

                        function l(e, o, r) {
                            var a, s;
                            if (I().validPositions[e - 1] && r && I().tests[e])
                                for (var t = I().validPositions[e - 1].locator, n = I().tests[e][0].locator, i = 0; i < r; i++)
                                    if (t[i] !== n[i]) return t.slice(r + 1);
                            return (I().tests[e] || I().validPositions[e]) && Z.each(I().tests[e] || [I().validPositions[e]], function (e, t) {
                                var n = r !== te ? r : t.alternation,
                                    i = t.locator[n] !== te ? t.locator[n].toString().indexOf(o) : -1;
                                (s === te || i < s) && -1 !== i && (a = t, s = i)
                            }), a ? a.locator.slice((r !== te ? r : a.alternation) + 1) : r !== te ? l(e, o) : te
                        }
                        if (M > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + I().mask;
                        if (M === $ && e.matches === te) return j.push({
                            match: e,
                            locator: n.reverse(),
                            cd: N
                        }), !0;
                        if (e.matches !== te) {
                            if (e.isGroup && t !== e) {
                                if (e = A(E.matches[Z.inArray(e, E.matches) + 1], n)) return !0
                            } else if (e.isOptional) {
                                var i = e;
                                if (e = O(e, P, n, t)) {
                                    if (L = j[j.length - 1].match, !r(L, i)) return !0;
                                    D = !0, M = $
                                }
                            } else if (e.isAlternator) {
                                var o, a = e,
                                    s = [],
                                    c = j.slice(),
                                    u = n.length,
                                    d = P.length > 0 ? P.shift() : -1;
                                if (-1 === d || "string" == typeof d) {
                                    var p, f = M,
                                        h = P.slice(),
                                        m = [];
                                    if ("string" == typeof d) m = d.split(",");
                                    else
                                        for (p = 0; p < a.matches.length; p++) m.push(p);
                                    for (var g = 0; g < m.length; g++) {
                                        if (p = parseInt(m[g]), j = [], P = l(M, p, u) || h.slice(), !0 !== (e = A(a.matches[p] || E.matches[p], [p].concat(n), t) || e) && e !== te && m[m.length - 1] < a.matches.length) {
                                            var v = Z.inArray(e, E.matches) + 1;
                                            E.matches.length > v && (e = A(E.matches[v], [v].concat(n.slice(1, n.length)), t)) && (m.push(v.toString()), Z.each(j, function (e, t) {
                                                t.alternation = n.length - 1
                                            }))
                                        }
                                        o = j.slice(), M = f, j = [];
                                        for (var y = 0; y < o.length; y++) {
                                            var b = o[y],
                                                x = !1;
                                            b.alternation = b.alternation || u;
                                            for (var k = 0; k < s.length; k++) {
                                                var w = s[k];
                                                if ("string" != typeof d || -1 !== Z.inArray(b.locator[b.alternation].toString(), m)) {
                                                    if (function (e, t) {
                                                            return e.match.nativeDef === t.match.nativeDef || e.match.def === t.match.nativeDef || e.match.nativeDef === t.match.def
                                                        }(b, w)) {
                                                        x = !0, b.alternation === w.alternation && -1 === w.locator[w.alternation].toString().indexOf(b.locator[b.alternation]) && (w.locator[w.alternation] = w.locator[w.alternation] + "," + b.locator[b.alternation], w.alternation = b.alternation), b.match.nativeDef === w.match.def && (b.locator[b.alternation] = w.locator[w.alternation], s.splice(s.indexOf(w), 1, b));
                                                        break
                                                    }
                                                    if (b.match.def === w.match.def) {
                                                        x = !1;
                                                        break
                                                    }
                                                    if (function (e, t) {
                                                            return null === e.match.fn && null !== t.match.fn && t.match.fn.test(e.match.def, I(), $, !1, R, !1)
                                                        }(b, w) || function (e, t) {
                                                            return null !== e.match.fn && null !== t.match.fn && t.match.fn.test(e.match.def.replace(/[\[\]]/g, ""), I(), $, !1, R, !1)
                                                        }(b, w)) {
                                                        b.alternation === w.alternation && -1 === b.locator[b.alternation].toString().indexOf(w.locator[w.alternation].toString().split("")[0]) && (b.na = b.na || b.locator[b.alternation].toString(), -1 === b.na.indexOf(b.locator[b.alternation].toString().split("")[0]) && (b.na = b.na + "," + b.locator[w.alternation].toString().split("")[0]), x = !0, b.locator[b.alternation] = w.locator[w.alternation].toString().split("")[0] + "," + b.locator[b.alternation], s.splice(s.indexOf(w), 0, b));
                                                        break
                                                    }
                                                }
                                            }
                                            x || s.push(b)
                                        }
                                    }
                                    "string" == typeof d && (s = Z.map(s, function (e, t) {
                                        if (isFinite(t)) {
                                            var n = e.alternation,
                                                i = e.locator[n].toString().split(",");
                                            e.locator[n] = te, e.alternation = te;
                                            for (var o = 0; o < i.length; o++) - 1 !== Z.inArray(i[o], m) && (e.locator[n] !== te ? (e.locator[n] += ",", e.locator[n] += i[o]) : e.locator[n] = parseInt(i[o]), e.alternation = n);
                                            if (e.locator[n] !== te) return e
                                        }
                                    })), j = c.concat(s), M = $, D = j.length > 0, e = s.length > 0, P = h.slice()
                                } else e = A(a.matches[d] || E.matches[d], [d].concat(n), t);
                                if (e) return !0
                            } else if (e.isQuantifier && t !== E.matches[Z.inArray(e, E.matches) - 1])
                                for (var S = e, T = P.length > 0 ? P.shift() : 0; T < (isNaN(S.quantifier.max) ? T + 1 : S.quantifier.max) && M <= $; T++) {
                                    var C = E.matches[Z.inArray(S, E.matches) - 1];
                                    if (e = A(C, [T].concat(n), C)) {
                                        if (L = j[j.length - 1].match, L.optionalQuantifier = T > S.quantifier.min - 1, r(L, C)) {
                                            if (T > S.quantifier.min - 1) {
                                                D = !0, M = $;
                                                break
                                            }
                                            return !0
                                        }
                                        return !0
                                    }
                                } else if (e = O(e, P, n, t)) return !0
                        } else M++
                    }
                    for (var n = P.length > 0 ? P.shift() : 0; n < E.matches.length; n++)
                        if (!0 !== E.matches[n].isQuantifier) {
                            var i = A(E.matches[n], [n].concat(e), t);
                            if (i && M === $) return i;
                            if (M > $) break
                        }
                }

                function n(e) {
                    if (R.keepStatic && $ > 0 && e.length > 1 + ("" === e[e.length - 1].match.def ? 1 : 0) && !0 !== e[0].match.optionality && !0 !== e[0].match.optionalQuantifier && null === e[0].match.fn && !/[0-9a-bA-Z]/.test(e[0].match.def)) {
                        if (I().validPositions[$ - 1] === te) return [f(e)];
                        if (I().validPositions[$ - 1].alternation === e[0].alternation) return [f(e)];
                        if (I().validPositions[$ - 1]) return [f(e)]
                    }
                    return e
                }
                var L, i = I().maskToken,
                    M = e ? t : 0,
                    o = e ? e.slice() : [0],
                    j = [],
                    D = !1,
                    N = e ? e.join("") : "";
                if ($ > -1) {
                    if (e === te) {
                        for (var r, a = $ - 1;
                            (r = I().validPositions[a] || I().tests[a]) === te && a > -1;) a--;
                        r !== te && a > -1 && (o = function (e) {
                            var i = [];
                            return Z.isArray(e) || (e = [e]), e.length > 0 && (e[0].alternation === te ? 0 === (i = f(e.slice()).locator.slice()).length && (i = e[0].locator.slice()) : Z.each(e, function (e, t) {
                                if ("" !== t.def)
                                    if (0 === i.length) i = t.locator.slice();
                                    else
                                        for (var n = 0; n < i.length; n++) t.locator[n] && -1 === i[n].toString().indexOf(t.locator[n]) && (i[n] += "," + t.locator[n])
                            })), i
                        }(r), N = o.join(""), M = a)
                    }
                    if (I().tests[$] && I().tests[$][0].cd === N) return n(I().tests[$]);
                    for (var s = o.shift(); s < i.length && !(O(i[s], o, [s]) && M === $ || M > $); s++);
                }
                return (0 === j.length || D) && j.push({
                    match: {
                        fn: null,
                        cardinality: 0,
                        optionality: !0,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    cd: N
                }), e !== te && I().tests[$] ? n(Z.extend(!0, [], j)) : (I().tests[$] = Z.extend(!0, [], j), n(I().tests[$]))
            }

            function g() {
                return I()._buffer === te && (I()._buffer = o(!1, 1), I().buffer === te && (I().buffer = I()._buffer.slice())), I()._buffer
            }

            function k(e) {
                return I().buffer !== te && !0 !== e || (I().buffer = o(!0, T(), !0)), I().buffer
            }

            function E(e, t, n) {
                var i, o;
                if (!0 === e) S(), e = 0, t = n.length;
                else
                    for (i = e; i < t; i++) delete I().validPositions[i];
                for (o = e, i = e; i < t; i++)
                    if (S(!0), n[i] !== R.skipOptionalPartCharacter) {
                        var r = $(o, n[i], !0, !0);
                        !1 !== r && (S(!0), o = r.caret !== te ? r.caret : r.pos + 1)
                    }
            }

            function P(e, t, n) {
                switch (R.casing || t.casing) {
                    case "upper":
                        e = e.toUpperCase();
                        break;
                    case "lower":
                        e = e.toLowerCase();
                        break;
                    case "title":
                        var i = I().validPositions[n - 1];
                        e = 0 === n || i && i.input === String.fromCharCode(ne.keyCode.SPACE) ? e.toUpperCase() : e.toLowerCase();
                        break;
                    default:
                        if (Z.isFunction(R.casing)) {
                            var o = Array.prototype.slice.call(arguments);
                            o.push(I().validPositions), e = R.casing.apply(this, o)
                        }
                }
                return e
            }

            function A(e, t, n) {
                for (var i, o = R.greedy ? t : t.slice(0, 1), r = !1, a = n !== te ? n.split(",") : [], s = 0; s < a.length; s++) - 1 !== (i = e.indexOf(a[s])) && e.splice(i, 1);
                for (var l = 0; l < e.length; l++)
                    if (-1 !== Z.inArray(e[l], o)) {
                        r = !0;
                        break
                    } return r
            }

            function $(h, e, t, w, n, i) {
                function m(e) {
                    var t = _ ? e.begin - e.end > 1 || e.begin - e.end == 1 : e.end - e.begin > 1 || e.end - e.begin == 1;
                    return t && 0 === e.begin && e.end === I().maskLength ? "full" : t
                }

                function r(u, d, p) {
                    var f = !1;
                    return Z.each(C(u), function (e, t) {
                        for (var n = t.match, i = d ? 1 : 0, o = "", r = n.cardinality; r > i; r--) o += M(u - (r - 1));
                        if (d && (o += d), k(!0), !1 !== (f = null != n.fn ? n.fn.test(o, I(), u, p, R, m(h)) : (d === n.def || d === R.skipOptionalPartCharacter) && "" !== n.def && {
                                c: j(u, n, !0) || n.def,
                                pos: u
                            })) {
                            var a = f.c !== te ? f.c : d;
                            a = a === R.skipOptionalPartCharacter && null === n.fn ? j(u, n, !0) || n.def : a;
                            var s = u,
                                l = k();
                            if (f.remove !== te && (Z.isArray(f.remove) || (f.remove = [f.remove]), Z.each(f.remove.sort(function (e, t) {
                                    return t - e
                                }), function (e, t) {
                                    y(t, t + 1, !0)
                                })), f.insert !== te && (Z.isArray(f.insert) || (f.insert = [f.insert]), Z.each(f.insert.sort(function (e, t) {
                                    return e - t
                                }), function (e, t) {
                                    $(t.pos, t.c, !0, w)
                                })), f.refreshFromBuffer) {
                                var c = f.refreshFromBuffer;
                                if (E(!0 === c ? c : c.start, c.end, l), f.pos === te && f.c === te) return f.pos = T(), !1;
                                if ((s = f.pos !== te ? f.pos : u) !== u) return f = Z.extend(f, $(s, a, !0, w)), !1
                            } else if (!0 !== f && f.pos !== te && f.pos !== u && (s = f.pos, E(u, s, k().slice()), s !== u)) return f = Z.extend(f, $(s, a, !0)), !1;
                            return (!0 === f || f.pos !== te || f.c !== te) && (e > 0 && S(!0), g(s, Z.extend({}, t, {
                                input: P(a, n, s)
                            }), w, m(h)) || (f = !1), !1)
                        }
                    }), f
                }

                function g(e, t, n, i) {
                    if (i || R.insertMode && I().validPositions[e] !== te && n === te) {
                        var o, r = Z.extend(!0, {}, I().validPositions),
                            a = T(te, !0);
                        for (o = e; o <= a; o++) delete I().validPositions[o];
                        I().validPositions[e] = Z.extend(!0, {}, t);
                        var s, l = !0,
                            c = I().validPositions,
                            u = !1,
                            d = I().maskLength;
                        for (o = s = e; o <= a; o++) {
                            var p = r[o];
                            if (p !== te)
                                for (var f = s; f < I().maskLength && (null === p.match.fn && c[o] && (!0 === c[o].match.optionalQuantifier || !0 === c[o].match.optionality) || null != p.match.fn);) {
                                    if (f++, !1 === u && r[f] && r[f].match.def === p.match.def) I().validPositions[f] = Z.extend(!0, {}, r[f]), I().validPositions[f].input = p.input, v(f), s = f, l = !0;
                                    else if (x(f, p.match.def)) {
                                        var h = $(f, p.input, !0, !0);
                                        l = !1 !== h, s = h.caret || h.insert ? T() : f, u = !0
                                    } else if (!(l = !0 === p.generatedInput) && f >= I().maskLength - 1) break;
                                    if (I().maskLength < d && (I().maskLength = d), l) break
                                }
                            if (!l) break
                        }
                        if (!l) return I().validPositions = Z.extend(!0, {}, r), S(!0), !1
                    } else I().validPositions[e] = Z.extend(!0, {}, t);
                    return S(!0), !0
                }

                function v(e) {
                    for (var t = e - 1; t > -1 && !I().validPositions[t]; t--);
                    var n, i;
                    for (t++; t < e; t++) I().validPositions[t] === te && (!1 === R.jitMasking || R.jitMasking > t) && ("" === (i = C(t, b(t - 1).locator, t - 1).slice())[i.length - 1].match.def && i.pop(), (n = f(i)) && (n.match.def === R.radixPointDefinitionSymbol || !O(t, !0) || Z.inArray(R.radixPoint, k()) < t && n.match.fn && n.match.fn.test(j(t), I(), t, !1, R)) && !1 !== (a = r(t, j(t, n.match, !0) || (null == n.match.fn ? n.match.def : "" !== j(t) ? j(t) : k()[t]), !0)) && (I().validPositions[a.pos || t].generatedInput = !0))
                }
                t = !0 === t;
                var o = h;
                h.begin !== te && (o = _ && !m(h) ? h.end : h.begin);
                var a = !0,
                    s = Z.extend(!0, {}, I().validPositions);
                if (Z.isFunction(R.preValidation) && !t && !0 !== w && !0 !== i && (a = R.preValidation(k(), o, e, m(h), R)), !0 === a) {
                    if (v(o), m(h) && (D(te, ne.keyCode.DELETE, h, !0, !0), o = I().p), o < I().maskLength && (F === te || o < F) && (a = r(o, e, t), (!t || !0 === w) && !1 === a && !0 !== i)) {
                        var l = I().validPositions[o];
                        if (!l || null !== l.match.fn || l.match.def !== e && e !== R.skipOptionalPartCharacter) {
                            if ((R.insertMode || I().validPositions[L(o)] === te) && !O(o, !0))
                                for (var c = o + 1, u = L(o); c <= u; c++)
                                    if (!1 !== (a = r(c, e, t))) {
                                        ! function (e, t) {
                                            var n = I().validPositions[t];
                                            if (n)
                                                for (var a = n.locator, s = a.length, i = e; i < t; i++)
                                                    if (I().validPositions[i] === te && !O(i, !0)) {
                                                        var o = C(i).slice(),
                                                            l = f(o, !0),
                                                            c = -1;
                                                        "" === o[o.length - 1].match.def && o.pop(), Z.each(o, function (e, t) {
                                                            for (var n = 0; n < s; n++) {
                                                                if (t.locator[n] === te || !A(t.locator[n].toString().split(","), a[n].toString().split(","), t.na)) {
                                                                    var i = a[n],
                                                                        o = l.locator[n],
                                                                        r = t.locator[n];
                                                                    i - o > Math.abs(i - r) && (l = t);
                                                                    break
                                                                }
                                                                c < n && (c = n, l = t)
                                                            }
                                                        }), (l = Z.extend({}, l, {
                                                            input: j(i, l.match, !0) || l.match.def
                                                        })).generatedInput = !0, g(i, l, !0), I().validPositions[t] = te, r(t, n.input, !0)
                                                    }
                                        }(o, a.pos !== te ? a.pos : c), o = c;
                                        break
                                    }
                        } else a = {
                            caret: L(o)
                        }
                    }!1 === a && R.keepStatic && !t && !0 !== n && (a = function (u, d, p) {
                        var e, f, t, n, h, m, g, v, y = Z.extend(!0, {}, I().validPositions),
                            b = !1,
                            i = T();
                        for (n = I().validPositions[i]; i >= 0; i--)
                            if ((t = I().validPositions[i]) && t.alternation !== te) {
                                if (e = i, f = I().validPositions[e].alternation, n.locator[t.alternation] !== t.locator[t.alternation]) break;
                                n = t
                            } if (f !== te) {
                            v = parseInt(e);
                            var x = n.locator[n.alternation || f] !== te ? n.locator[n.alternation || f] : g[0];
                            x.length > 0 && (x = x.split(",")[0]);
                            var k = I().validPositions[v],
                                o = I().validPositions[v - 1];
                            Z.each(C(v, o ? o.locator : te, v - 1), function (e, t) {
                                g = t.locator[f] ? t.locator[f].toString().split(",") : [];
                                for (var n = 0; n < g.length; n++) {
                                    var i = [],
                                        o = 0,
                                        r = 0,
                                        a = !1;
                                    if (x < g[n] && (t.na === te || -1 === Z.inArray(g[n], t.na.split(",")) || -1 === Z.inArray(x.toString(), g))) {
                                        I().validPositions[v] = Z.extend(!0, {}, t);
                                        var s = I().validPositions[v].locator;
                                        for (I().validPositions[v].locator[f] = parseInt(g[n]), null == t.match.fn ? (k.input !== t.match.def && (a = !0, !0 !== k.generatedInput && i.push(k.input)), r++, I().validPositions[v].generatedInput = !/[0-9a-bA-Z]/.test(t.match.def), I().validPositions[v].input = t.match.def) : I().validPositions[v].input = k.input, h = v + 1; h < T(te, !0) + 1; h++)(m = I().validPositions[h]) && !0 !== m.generatedInput && /[0-9a-bA-Z]/.test(m.input) ? i.push(m.input) : h < u && o++, delete I().validPositions[h];
                                        for (a && i[0] === t.match.def && i.shift(), S(!0), b = !0; i.length > 0;) {
                                            var l = i.shift();
                                            if (l !== R.skipOptionalPartCharacter && !(b = $(T(te, !0) + 1, l, !1, w, !0))) break
                                        }
                                        if (b) {
                                            I().validPositions[v].locator = s;
                                            var c = T(u) + 1;
                                            for (h = v + 1; h < T() + 1; h++)((m = I().validPositions[h]) === te || null == m.match.fn) && h < u + (r - o) && r++;
                                            b = $((u += r - o) > c ? c : u, d, p, w, !0)
                                        }
                                        if (b) return !1;
                                        S(), I().validPositions = Z.extend(!0, {}, y)
                                    }
                                }
                            })
                        }
                        return b
                    }(o, e, t)), !0 === a && (a = {
                        pos: o
                    })
                }
                if (Z.isFunction(R.postValidation) && !1 !== a && !t && !0 !== w && !0 !== i) {
                    var d = R.postValidation(k(!0), a, R);
                    if (d.refreshFromBuffer && d.buffer) {
                        var p = d.refreshFromBuffer;
                        E(!0 === p ? p : p.start, p.end, d.buffer)
                    }
                    a = !0 === d ? a : d
                }
                return a && a.pos === te && (a.pos = o), !1 !== a && !0 !== i || (S(!0), I().validPositions = Z.extend(!0, {}, s)), a
            }

            function O(e, t) {
                var n = b(e).match;
                if ("" === n.def && (n = s(e).match), null != n.fn) return n.fn;
                if (!0 !== t && e > -1) {
                    var i = C(e);
                    return i.length > 1 + ("" === i[i.length - 1].match.def ? 1 : 0)
                }
                return !1
            }

            function L(e, t) {
                var n = I().maskLength;
                if (e >= n) return n;
                var i = e;
                for (C(n + 1).length > 1 && (o(!0, n + 1, !0), n = I().maskLength); ++i < n && (!0 === t && (!0 !== s(i).match.newBlockMarker || !O(i)) || !0 !== t && !O(i)););
                return i
            }

            function v(e, t) {
                var n, i = e;
                if (i <= 0) return 0;
                for (; --i > 0 && (!0 === t && !0 !== s(i).match.newBlockMarker || !0 !== t && !O(i) && ((n = C(i)).length < 2 || 2 === n.length && "" === n[1].match.def)););
                return i
            }

            function M(e) {
                return I().validPositions[e] === te ? j(e) : I().validPositions[e].input
            }

            function w(e, t, n, i, o) {
                if (i && Z.isFunction(R.onBeforeWrite)) {
                    var r = R.onBeforeWrite.call(B, i, t, n, R);
                    if (r) {
                        if (r.refreshFromBuffer) {
                            var a = r.refreshFromBuffer;
                            E(!0 === a ? a : a.start, a.end, r.buffer || t), t = k(!0)
                        }
                        n !== te && (n = r.caret !== te ? r.caret : n)
                    }
                }
                e !== te && (e.inputmask._valueSet(t.join("")), n === te || i !== te && "blur" === i.type ? d(e, n, 0 === t.length) : se && i && "input" === i.type ? setTimeout(function () {
                    h(e, n)
                }, 0) : h(e, n), !0 === o && (q = !0, Z(e).trigger("input")))
            }

            function j(e, t, n) {
                if ((t = t || s(e).match).placeholder !== te || !0 === n) return Z.isFunction(t.placeholder) ? t.placeholder(R) : t.placeholder;
                if (null === t.fn) {
                    if (e > -1 && I().validPositions[e] === te) {
                        var i, o = C(e),
                            r = [];
                        if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0))
                            for (var a = 0; a < o.length; a++)
                                if (!0 !== o[a].match.optionality && !0 !== o[a].match.optionalQuantifier && (null === o[a].match.fn || i === te || !1 !== o[a].match.fn.test(i.match.def, I(), e, !0, R)) && (r.push(o[a]), null === o[a].match.fn && (i = o[a]), r.length > 1 && /[0-9a-bA-Z]/.test(r[0].match.def))) return R.placeholder.charAt(e % R.placeholder.length)
                    }
                    return t.def
                }
                return R.placeholder.charAt(e % R.placeholder.length)
            }

            function u(c, e, u, t, n) {
                function d(e, t) {
                    return -1 !== g().slice(e, L(e)).join("").indexOf(t) && !O(e) && s(e).match.nativeDef === t.charAt(t.length - 1)
                }
                var p = t.slice(),
                    f = "",
                    h = -1,
                    m = te;
                if (S(), u || !0 === R.autoUnmask) h = L(h);
                else {
                    var i = g().slice(0, L(-1)).join(""),
                        o = p.join("").match(new RegExp("^" + ne.escapeRegex(i), "g"));
                    o && o.length > 0 && (p.splice(0, o.length * i.length), h = L(h))
                }
                if (-1 === h ? (I().p = L(h), h = 0) : I().p = h, Z.each(p, function (e, t) {
                        if (t !== te)
                            if (I().validPositions[e] === te && p[e] === j(e) && O(e, !0) && !1 === $(e, p[e], !0, te, te, !0)) I().p++;
                            else {
                                var n = new Z.Event("_checkval");
                                n.which = t.charCodeAt(0), f += t;
                                var i = T(te, !0),
                                    o = I().validPositions[i],
                                    r = b(i + 1, o ? o.locator.slice() : te, i);
                                if (!d(h, f) || u || R.autoUnmask) {
                                    var a = u ? e : null == r.match.fn && r.match.optionality && i + 1 < I().p ? i + 1 : I().p;
                                    m = G.keypressEvent.call(c, n, !0, !1, u, a), h = a + 1, f = ""
                                } else m = G.keypressEvent.call(c, n, !0, !1, !0, i + 1);
                                if (!1 !== m && !u && Z.isFunction(R.onBeforeWrite)) {
                                    var s = m;
                                    if (m = R.onBeforeWrite.call(B, n, k(), m.forwardPosition, R), (m = Z.extend(s, m)) && m.refreshFromBuffer) {
                                        var l = m.refreshFromBuffer;
                                        E(!0 === l ? l : l.start, l.end, m.buffer), S(!0), m.caret && (I().p = m.caret, m.forwardPosition = m.caret)
                                    }
                                }
                            }
                    }), e) {
                    var r = te;
                    ee.activeElement === c && m && (r = R.numericInput ? v(m.forwardPosition) : m.forwardPosition), w(c, k(), r, n || new Z.Event("checkval"), n && "input" === n.type)
                }
            }

            function n(e) {
                if (e) {
                    if (e.inputmask === te) return e.value;
                    e.inputmask && e.inputmask.refreshValue && G.setValueEvent.call(e)
                }
                var t = [],
                    n = I().validPositions;
                for (var i in n) n[i].match && null != n[i].match.fn && t.push(n[i].input);
                var o = 0 === t.length ? "" : (_ ? t.reverse() : t).join("");
                if (Z.isFunction(R.onUnMask)) {
                    var r = (_ ? k().slice().reverse() : k()).join("");
                    o = R.onUnMask.call(B, r, o, R)
                }
                return o
            }

            function h(e, t, n, i) {
                function o(e) {
                    return !0 === i || !_ || "number" != typeof e || R.greedy && "" === R.placeholder || (e = k().join("").length - e), e
                }
                var r;
                if (t === te) return e.setSelectionRange ? (t = e.selectionStart, n = e.selectionEnd) : J.getSelection ? (r = J.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, n = r.endOffset) : ee.selection && ee.selection.createRange && (n = (t = 0 - (r = ee.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + r.text.length), {
                    begin: o(t),
                    end: o(n)
                };
                if (t.begin !== te && (n = t.end, t = t.begin), "number" == typeof t) {
                    t = o(t), n = "number" == typeof (n = o(n)) ? n : t;
                    var a = parseInt(((e.ownerDocument.defaultView || J).getComputedStyle ? (e.ownerDocument.defaultView || J).getComputedStyle(e, null) : e.currentStyle).fontSize) * n;
                    if (e.scrollLeft = a > e.scrollWidth ? a : 0, oe || !1 !== R.insertMode || t !== n || n++, e.setSelectionRange) e.selectionStart = t, e.selectionEnd = n;
                    else if (J.getSelection) {
                        if (r = ee.createRange(), e.firstChild === te || null === e.firstChild) {
                            var s = ee.createTextNode("");
                            e.appendChild(s)
                        }
                        r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), r.setEnd(e.firstChild, n < e.inputmask._valueGet().length ? n : e.inputmask._valueGet().length), r.collapse(!0);
                        var l = J.getSelection();
                        l.removeAllRanges(), l.addRange(r)
                    } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r.select());
                    d(e, {
                        begin: t,
                        end: n
                    })
                }
            }

            function a(e) {
                var t, n, i = k(),
                    o = i.length,
                    r = T(),
                    a = {},
                    s = I().validPositions[r],
                    l = s !== te ? s.locator.slice() : te;
                for (t = r + 1; t < i.length; t++) l = (n = b(t, l, t - 1)).locator.slice(), a[t] = Z.extend(!0, {}, n);
                var c = s && s.alternation !== te ? s.locator[s.alternation] : te;
                for (t = o - 1; t > r && (((n = a[t]).match.optionality || n.match.optionalQuantifier && n.match.newBlockMarker || c && (c !== a[t].locator[s.alternation] && null != n.match.fn || null === n.match.fn && n.locator[s.alternation] && A(n.locator[s.alternation].toString().split(","), c.toString().split(",")) && "" !== C(t)[0].def)) && i[t] === j(t, n.match)); t--) o--;
                return e ? {
                    l: o,
                    def: a[o] ? a[o].match : te
                } : o
            }

            function l(e) {
                for (var t, n = a(), i = e.length, o = I().validPositions[T()]; n < i && !O(n, !0) && (t = o !== te ? b(n, o.locator.slice(""), o) : s(n)) && !0 !== t.match.optionality && (!0 !== t.match.optionalQuantifier && !0 !== t.match.newBlockMarker || n + 1 === i && "" === (o !== te ? b(n + 1, o.locator.slice(""), o) : s(n + 1)).match.def);) n++;
                for (;
                    (t = I().validPositions[n - 1]) && t && t.match.optionality && t.input === R.skipOptionalPartCharacter;) n--;
                return e.splice(n), e
            }

            function m(e) {
                if (Z.isFunction(R.isComplete)) return R.isComplete(e, R);
                if ("*" === R.repeat) return te;
                var t = !1,
                    n = a(!0),
                    i = v(n.l);
                if (n.def === te || n.def.newBlockMarker || n.def.optionality || n.def.optionalQuantifier) {
                    t = !0;
                    for (var o = 0; o <= i; o++) {
                        var r = b(o).match;
                        if (null !== r.fn && I().validPositions[o] === te && !0 !== r.optionality && !0 !== r.optionalQuantifier || null === r.fn && e[o] !== j(o, r)) {
                            t = !1;
                            break
                        }
                    }
                }
                return t
            }

            function D(a, e, t, n, i) {
                if ((R.numericInput || _) && (e === ne.keyCode.BACKSPACE ? e = ne.keyCode.DELETE : e === ne.keyCode.DELETE && (e = ne.keyCode.BACKSPACE), _)) {
                    var o = t.end;
                    t.end = t.begin, t.begin = o
                }
                e === ne.keyCode.BACKSPACE && (t.end - t.begin < 1 || !1 === R.insertMode) ? (t.begin = v(t.begin), I().validPositions[t.begin] !== te && I().validPositions[t.begin].input === R.groupSeparator && t.begin--) : e === ne.keyCode.DELETE && t.begin === t.end && (t.end = O(t.end, !0) && I().validPositions[t.end] && I().validPositions[t.end].input !== R.radixPoint ? t.end + 1 : L(t.end) + 1, I().validPositions[t.begin] !== te && I().validPositions[t.begin].input === R.groupSeparator && t.end++), y(t.begin, t.end, !1, n), !0 !== n && function () {
                    if (R.keepStatic) {
                        for (var e = [], t = T(-1, !0), n = Z.extend(!0, {}, I().validPositions), i = I().validPositions[t]; t >= 0; t--) {
                            var o = I().validPositions[t];
                            if (o) {
                                if (!0 !== o.generatedInput && /[0-9a-bA-Z]/.test(o.input) && e.push(o.input), delete I().validPositions[t], o.alternation !== te && o.locator[o.alternation] !== i.locator[o.alternation]) break;
                                i = o
                            }
                        }
                        if (t > -1)
                            for (I().p = L(T(-1, !0)); e.length > 0;) {
                                var r = new Z.Event("keypress");
                                r.which = e.pop().charCodeAt(0), G.keypressEvent.call(a, r, !0, !1, !1, I().p)
                            } else I().validPositions = Z.extend(!0, {}, n)
                    }
                }();
                var r = T(t.begin, !0);
                if (r < t.begin) I().p = L(r);
                else if (!0 !== n && (I().p = t.begin, !0 !== i))
                    for (; I().p < r && I().validPositions[I().p] === te;) I().p++
            }

            function r(c) {
                function t(e) {
                    var t, n = ee.createElement("span");
                    for (var i in u) isNaN(i) && -1 !== i.indexOf("font") && (n.style[i] = u[i]);
                    n.style.textTransform = u.textTransform, n.style.letterSpacing = u.letterSpacing, n.style.position = "absolute", n.style.height = "auto", n.style.width = "auto", n.style.visibility = "hidden", n.style.whiteSpace = "nowrap", ee.body.appendChild(n);
                    var o, r = c.inputmask._valueGet(),
                        a = 0;
                    for (t = 0, o = r.length; t <= o; t++) {
                        if (n.innerHTML += r.charAt(t) || "_", n.offsetWidth >= e) {
                            var s = e - a,
                                l = n.offsetWidth - e;
                            n.innerHTML = r.charAt(t), t = (s -= n.offsetWidth / 3) < l ? t - 1 : t;
                            break
                        }
                        a = n.offsetWidth
                    }
                    return ee.body.removeChild(n), t
                }
                var u = (c.ownerDocument.defaultView || J).getComputedStyle(c, null),
                    e = ee.createElement("div");
                e.style.width = u.width, e.style.textAlign = u.textAlign, (H = ee.createElement("div")).className = "im-colormask", c.parentNode.insertBefore(H, c), c.parentNode.removeChild(c), H.appendChild(e), H.appendChild(c), c.style.left = e.offsetLeft + "px", Z(c).on("click", function (e) {
                    return h(c, t(e.clientX)), G.clickEvent.call(c, [e])
                }), Z(c).on("keydown", function (e) {
                    e.shiftKey || !1 === R.insertMode || setTimeout(function () {
                        d(c)
                    }, 0)
                })
            }

            function d(t, n, e) {
                function i() {
                    c || null !== r.fn && a.input !== te ? c && (null !== r.fn && a.input !== te || "" === r.def) && (c = !1, l += "</span>") : (c = !0, l += "<span class='im-static'>")
                }

                function o(e) {
                    !0 !== e && u !== n.begin || ee.activeElement !== t || (l += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>")
                }
                var r, a, s, l = "",
                    c = !1,
                    u = 0;
                if (H !== te) {
                    var d = k();
                    if (n === te ? n = h(t) : n.begin === te && (n = {
                            begin: n,
                            end: n
                        }), !0 !== e) {
                        var p = T();
                        do {
                            o(), I().validPositions[u] ? (a = I().validPositions[u], r = a.match, s = a.locator.slice(), i(), l += d[u]) : (a = b(u, s, u - 1), r = a.match, s = a.locator.slice(), (!1 === R.jitMasking || u < p || "number" == typeof R.jitMasking && isFinite(R.jitMasking) && R.jitMasking > u) && (i(), l += j(u, r))), u++
                        } while ((F === te || u < F) && (null !== r.fn || "" !== r.def) || p > u || c); - 1 === l.indexOf("im-caret") && o(!0), c && i()
                    }
                    var f = H.getElementsByTagName("div")[0];
                    f.innerHTML = l, t.inputmask.positionColorMask(t, f)
                }
            }
            t = t || this.maskset, R = R || this.opts;
            var N, c, F, H, B = this,
                p = this.el,
                _ = this.isRTL,
                z = !1,
                q = !1,
                W = !1,
                U = !1,
                X = {
                    on: function (e, t, r) {
                        var n = function (e) {
                            if (this.inputmask === te && "FORM" !== this.nodeName) {
                                var t = Z.data(this, "_inputmask_opts");
                                t ? new ne(t).mask(this) : X.off(this)
                            } else {
                                if ("setvalue" === e.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === R.tabThrough && e.keyCode === ne.keyCode.TAB))) {
                                    switch (e.type) {
                                        case "input":
                                            if (!0 === q) return q = !1, e.preventDefault();
                                            break;
                                        case "keydown":
                                            z = !1, q = !1;
                                            break;
                                        case "keypress":
                                            if (!0 === z) return e.preventDefault();
                                            z = !0;
                                            break;
                                        case "click":
                                            if (re || ae) {
                                                var n = this,
                                                    i = arguments;
                                                return setTimeout(function () {
                                                    r.apply(n, i)
                                                }, 0), !1
                                            }
                                    }
                                    var o = r.apply(this, arguments);
                                    return !1 === o && (e.preventDefault(), e.stopPropagation()), o
                                }
                                e.preventDefault()
                            }
                        };
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(n), -1 !== Z.inArray(t, ["submit", "reset"]) ? null !== e.form && Z(e.form).on(t, n) : Z(e).on(t, n)
                    },
                    off: function (i, e) {
                        if (i.inputmask && i.inputmask.events) {
                            var t;
                            e ? (t = [])[e] = i.inputmask.events[e] : t = i.inputmask.events, Z.each(t, function (e, t) {
                                for (; t.length > 0;) {
                                    var n = t.pop(); - 1 !== Z.inArray(e, ["submit", "reset"]) ? null !== i.form && Z(i.form).off(e, n) : Z(i).off(e, n)
                                }
                                delete i.inputmask.events[e]
                            })
                        }
                    }
                },
                G = {
                    keydownEvent: function (e) {
                        var t = this,
                            n = Z(t),
                            i = e.keyCode,
                            o = h(t);
                        if (i === ne.keyCode.BACKSPACE || i === ne.keyCode.DELETE || ae && i === ne.keyCode.BACKSPACE_SAFARI || e.ctrlKey && i === ne.keyCode.X && ! function (e) {
                                var t = ee.createElement("input"),
                                    n = "on" + e,
                                    i = n in t;
                                return i || (t.setAttribute(n, "return;"), i = "function" == typeof t[n]), t = null, i
                            }("cut")) e.preventDefault(), D(t, i, o), w(t, k(!0), I().p, e, t.inputmask._valueGet() !== k().join("")), t.inputmask._valueGet() === g().join("") ? n.trigger("cleared") : !0 === m(k()) && n.trigger("complete");
                        else if (i === ne.keyCode.END || i === ne.keyCode.PAGE_DOWN) {
                            e.preventDefault();
                            var r = L(T());
                            R.insertMode || r !== I().maskLength || e.shiftKey || r--, h(t, e.shiftKey ? o.begin : r, r, !0)
                        } else i === ne.keyCode.HOME && !e.shiftKey || i === ne.keyCode.PAGE_UP ? (e.preventDefault(), h(t, 0, e.shiftKey ? o.begin : 0, !0)) : (R.undoOnEscape && i === ne.keyCode.ESCAPE || 90 === i && e.ctrlKey) && !0 !== e.altKey ? (u(t, !0, !1, N.split("")), n.trigger("click")) : i !== ne.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === R.tabThrough && i === ne.keyCode.TAB ? (!0 === e.shiftKey ? (null === s(o.begin).match.fn && (o.begin = L(o.begin)), o.end = v(o.begin, !0), o.begin = v(o.end, !0)) : (o.begin = L(o.begin, !0), o.end = L(o.begin, !0), o.end < I().maskLength && o.end--), o.begin < I().maskLength && (e.preventDefault(), h(t, o.begin, o.end))) : e.shiftKey || !1 === R.insertMode && (i === ne.keyCode.RIGHT ? setTimeout(function () {
                            var e = h(t);
                            h(t, e.begin)
                        }, 0) : i === ne.keyCode.LEFT && setTimeout(function () {
                            var e = h(t);
                            h(t, _ ? e.begin + 1 : e.begin - 1)
                        }, 0)) : (R.insertMode = !R.insertMode, h(t, R.insertMode || o.begin !== I().maskLength ? o.begin : o.begin - 1));
                        R.onKeyDown.call(this, e, k(), h(t).begin, R), W = -1 !== Z.inArray(i, R.ignorables)
                    },
                    keypressEvent: function (e, t, n, i, o) {
                        var r = this,
                            a = Z(r),
                            s = e.which || e.charCode || e.keyCode;
                        if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || W)) return s === ne.keyCode.ENTER && N !== k().join("") && (N = k().join(""), setTimeout(function () {
                            a.trigger("change")
                        }, 0)), !0;
                        if (s) {
                            46 === s && !1 === e.shiftKey && "" !== R.radixPoint && (s = R.radixPoint.charCodeAt(0));
                            var l, c = t ? {
                                    begin: o,
                                    end: o
                                } : h(r),
                                u = String.fromCharCode(s);
                            I().writeOutBuffer = !0;
                            var d = $(c, u, i);
                            if (!1 !== d && (S(!0), l = d.caret !== te ? d.caret : t ? d.pos + 1 : L(d.pos), I().p = l), !1 !== n && (setTimeout(function () {
                                    R.onKeyValidation.call(r, s, d, R)
                                }, 0), I().writeOutBuffer && !1 !== d)) {
                                var p = k();
                                w(r, p, R.numericInput && d.caret === te ? v(l) : l, e, !0 !== t), !0 !== t && setTimeout(function () {
                                    !0 === m(p) && a.trigger("complete")
                                }, 0)
                            }
                            if (e.preventDefault(), t) return !1 !== d && (d.forwardPosition = l), d
                        }
                    },
                    pasteEvent: function (e) {
                        var t, n = this,
                            i = e.originalEvent || e,
                            o = Z(n),
                            r = n.inputmask._valueGet(!0),
                            a = h(n);
                        _ && (t = a.end, a.end = a.begin, a.begin = t);
                        var s = r.substr(0, a.begin),
                            l = r.substr(a.end, r.length);
                        if (s === (_ ? g().reverse() : g()).slice(0, a.begin).join("") && (s = ""), l === (_ ? g().reverse() : g()).slice(a.end).join("") && (l = ""), _ && (t = s, s = l, l = t), J.clipboardData && J.clipboardData.getData) r = s + J.clipboardData.getData("Text") + l;
                        else {
                            if (!i.clipboardData || !i.clipboardData.getData) return !0;
                            r = s + i.clipboardData.getData("text/plain") + l
                        }
                        var c = r;
                        if (Z.isFunction(R.onBeforePaste)) {
                            if (!1 === (c = R.onBeforePaste.call(B, r, R))) return e.preventDefault();
                            c || (c = r)
                        }
                        return u(n, !1, !1, _ ? c.split("").reverse() : c.toString().split("")), w(n, k(), L(T()), e, N !== k().join("")), !0 === m(k()) && o.trigger("complete"), e.preventDefault()
                    },
                    inputFallBackEvent: function (e) {
                        var i = this,
                            t = i.inputmask._valueGet();
                        if (k().join("") !== t) {
                            var n = h(i);
                            if (!1 === function (e, t, n) {
                                    if ("." === t.charAt(n.begin - 1) && "" !== R.radixPoint && ((t = t.split(""))[n.begin - 1] = R.radixPoint.charAt(0), t = t.join("")), t.charAt(n.begin - 1) === R.radixPoint && t.length > k().length) {
                                        var i = new Z.Event("keypress");
                                        return i.which = R.radixPoint.charCodeAt(0), G.keypressEvent.call(e, i, !0, !0, !1, n.begin - 1), !1
                                    }
                                }(i, t, n)) return !1;
                            if (t = t.replace(new RegExp("(" + ne.escapeRegex(g().join("")) + ")*"), ""), !1 === function (e, t, n) {
                                    if (re) {
                                        var i = t.replace(k().join(""), "");
                                        if (1 === i.length) {
                                            var o = new Z.Event("keypress");
                                            return o.which = i.charCodeAt(0), G.keypressEvent.call(e, o, !0, !0, !1, I().validPositions[n.begin - 1] ? n.begin : n.begin - 1), !1
                                        }
                                    }
                                }(i, t, n)) return !1;
                            n.begin > t.length && (h(i, t.length), n = h(i));
                            var o = k().join(""),
                                r = t.substr(0, n.begin),
                                a = t.substr(n.begin),
                                s = o.substr(0, n.begin),
                                l = o.substr(n.begin),
                                c = n,
                                u = "",
                                d = !1;
                            if (r !== s) {
                                c.begin = 0;
                                for (var p = (d = r.length >= s.length) ? r.length : s.length, f = 0; r.charAt(f) === s.charAt(f) && f < p; f++) c.begin++;
                                d && (u += r.slice(c.begin, c.end))
                            }
                            a !== l && (a.length > l.length ? d && (c.end = c.begin) : a.length < l.length ? c.end += l.length - a.length : a.charAt(0) !== l.charAt(0) && c.end++), w(i, k(), c), u.length > 0 ? Z.each(u.split(""), function (e, t) {
                                var n = new Z.Event("keypress");
                                n.which = t.charCodeAt(0), W = !1, G.keypressEvent.call(i, n)
                            }) : (c.begin === c.end - 1 && h(i, v(c.begin + 1), c.end), e.keyCode = ne.keyCode.DELETE, G.keydownEvent.call(i, e)), e.preventDefault()
                        }
                    },
                    setValueEvent: function (e) {
                        this.inputmask.refreshValue = !1;
                        var t = this,
                            n = t.inputmask._valueGet(!0);
                        Z.isFunction(R.onBeforeMask) && (n = R.onBeforeMask.call(B, n, R) || n), n = n.split(""), u(t, !0, !1, _ ? n.reverse() : n), N = k().join(""), (R.clearMaskOnLostFocus || R.clearIncomplete) && t.inputmask._valueGet() === g().join("") && t.inputmask._valueSet("")
                    },
                    focusEvent: function (e) {
                        var t = this,
                            n = t.inputmask._valueGet();
                        R.showMaskOnFocus && (!R.showMaskOnHover || R.showMaskOnHover && "" === n) && (t.inputmask._valueGet() !== k().join("") ? w(t, k(), L(T())) : !1 === U && h(t, L(T()))), !0 === R.positionCaretOnTab && !1 === U && "" !== n && (w(t, k(), h(t)), G.clickEvent.apply(t, [e, !0])), N = k().join("")
                    },
                    mouseleaveEvent: function (e) {
                        var t = this;
                        if (U = !1, R.clearMaskOnLostFocus && ee.activeElement !== t) {
                            var n = k().slice(),
                                i = t.inputmask._valueGet();
                            i !== t.getAttribute("placeholder") && "" !== i && (-1 === T() && i === g().join("") ? n = [] : l(n), w(t, n))
                        }
                    },
                    clickEvent: function (e, c) {
                        function u(e) {
                            if ("" !== R.radixPoint) {
                                var t = I().validPositions;
                                if (t[e] === te || t[e].input === j(e)) {
                                    if (e < L(-1)) return !0;
                                    var n = Z.inArray(R.radixPoint, k());
                                    if (-1 !== n) {
                                        for (var i in t)
                                            if (n < i && t[i].input !== j(i)) return !1;
                                        return !0
                                    }
                                }
                            }
                            return !1
                        }
                        var d = this;
                        setTimeout(function () {
                            if (ee.activeElement === d) {
                                var e = h(d);
                                if (c && (_ ? e.end = e.begin : e.begin = e.end), e.begin === e.end) switch (R.positionCaretOnClick) {
                                    case "none":
                                        break;
                                    case "radixFocus":
                                        if (u(e.begin)) {
                                            var t = k().join("").indexOf(R.radixPoint);
                                            h(d, R.numericInput ? L(t) : t);
                                            break
                                        }
                                        default:
                                            var n = e.begin,
                                                i = T(n, !0),
                                                o = L(i);
                                            if (n < o) h(d, O(n, !0) || O(n - 1, !0) ? n : L(n));
                                            else {
                                                var r = I().validPositions[i],
                                                    a = b(o, r ? r.match.locator : te, r),
                                                    s = j(o, a.match);
                                                if ("" !== s && k()[o] !== s && !0 !== a.match.optionalQuantifier && !0 !== a.match.newBlockMarker || !O(o, !0) && a.match.def === s) {
                                                    var l = L(o);
                                                    (n >= l || n === o) && (o = l)
                                                }
                                                h(d, o)
                                            }
                                }
                            }
                        }, 0)
                    },
                    dblclickEvent: function (e) {
                        var t = this;
                        setTimeout(function () {
                            h(t, 0, L(T()))
                        }, 0)
                    },
                    cutEvent: function (e) {
                        var t = this,
                            n = Z(t),
                            i = h(t),
                            o = e.originalEvent || e,
                            r = J.clipboardData || o.clipboardData,
                            a = _ ? k().slice(i.end, i.begin) : k().slice(i.begin, i.end);
                        r.setData("text", _ ? a.reverse().join("") : a.join("")), ee.execCommand && ee.execCommand("copy"), D(t, ne.keyCode.DELETE, i), w(t, k(), I().p, e, N !== k().join("")), t.inputmask._valueGet() === g().join("") && n.trigger("cleared")
                    },
                    blurEvent: function (e) {
                        var t = Z(this),
                            n = this;
                        if (n.inputmask) {
                            var i = n.inputmask._valueGet(),
                                o = k().slice();
                            "" !== i && (R.clearMaskOnLostFocus && (-1 === T() && i === g().join("") ? o = [] : l(o)), !1 === m(o) && (setTimeout(function () {
                                t.trigger("incomplete")
                            }, 0), R.clearIncomplete && (S(), o = R.clearMaskOnLostFocus ? [] : g().slice())), w(n, o, te, e)), N !== k().join("") && (N = o.join(""), t.trigger("change"))
                        }
                    },
                    mouseenterEvent: function (e) {
                        var t = this;
                        U = !0, ee.activeElement !== t && R.showMaskOnHover && t.inputmask._valueGet() !== k().join("") && w(t, k())
                    },
                    submitEvent: function (e) {
                        N !== k().join("") && c.trigger("change"), R.clearMaskOnLostFocus && -1 === T() && p.inputmask._valueGet && p.inputmask._valueGet() === g().join("") && p.inputmask._valueSet(""), R.removeMaskOnSubmit && (p.inputmask._valueSet(p.inputmask.unmaskedvalue(), !0), setTimeout(function () {
                            w(p, k())
                        }, 0))
                    },
                    resetEvent: function (e) {
                        p.inputmask.refreshValue = !0, setTimeout(function () {
                            c.trigger("setvalue")
                        }, 0)
                    }
                };
            ne.prototype.positionColorMask = function (e, t) {
                e.style.left = t.offsetLeft + "px"
            };
            var i;
            if (e !== te) switch (e.action) {
                case "isComplete":
                    return p = e.el, m(k());
                case "unmaskedvalue":
                    return p !== te && e.value === te || (i = e.value, i = (Z.isFunction(R.onBeforeMask) ? R.onBeforeMask.call(B, i, R) || i : i).split(""), u(te, !1, !1, _ ? i.reverse() : i), Z.isFunction(R.onBeforeWrite) && R.onBeforeWrite.call(B, te, k(), 0, R)), n(p);
                case "mask":
                    ! function (e) {
                        X.off(e);
                        var t = function (e, a) {
                            var t = e.getAttribute("type"),
                                n = "INPUT" === e.tagName && -1 !== Z.inArray(t, a.supportsInputType) || e.isContentEditable || "TEXTAREA" === e.tagName;
                            if (!n)
                                if ("INPUT" === e.tagName) {
                                    var i = ee.createElement("input");
                                    i.setAttribute("type", t), n = "text" === i.type, i = null
                                } else n = "partial";
                            return !1 !== n ? function (e) {
                                function t() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== T() || !0 !== a.nullable ? ee.activeElement === this && a.clearMaskOnLostFocus ? (_ ? l(k().slice()).reverse() : l(k().slice())).join("") : i.call(this) : "" : i.call(this)
                                }

                                function n(e) {
                                    o.call(this, e), this.inputmask && Z(this).trigger("setvalue")
                                }
                                var i, o;
                                if (!e.inputmask.__valueGet) {
                                    if (!0 !== a.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === le("test".__proto__) ? function (e) {
                                                return e.__proto__
                                            } : function (e) {
                                                return e.constructor.prototype
                                            });
                                            var r = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : te;
                                            r && r.get && r.set ? (i = r.get, o = r.set, Object.defineProperty(e, "value", {
                                                get: t,
                                                set: n,
                                                configurable: !0
                                            })) : "INPUT" !== e.tagName && (i = function () {
                                                return this.textContent
                                            }, o = function (e) {
                                                this.textContent = e
                                            }, Object.defineProperty(e, "value", {
                                                get: t,
                                                set: n,
                                                configurable: !0
                                            }))
                                        } else ee.__lookupGetter__ && e.__lookupGetter__("value") && (i = e.__lookupGetter__("value"), o = e.__lookupSetter__("value"), e.__defineGetter__("value", t), e.__defineSetter__("value", n));
                                        e.inputmask.__valueGet = i, e.inputmask.__valueSet = o
                                    }
                                    e.inputmask._valueGet = function (e) {
                                        return _ && !0 !== e ? i.call(this.el).split("").reverse().join("") : i.call(this.el)
                                    }, e.inputmask._valueSet = function (e, t) {
                                        o.call(this.el, null === e || e === te ? "" : !0 !== t && _ ? e.split("").reverse().join("") : e)
                                    }, i === te && (i = function () {
                                        return this.value
                                    }, o = function (e) {
                                        this.value = e
                                    }, function (e) {
                                        if (Z.valHooks && (Z.valHooks[e] === te || !0 !== Z.valHooks[e].inputmaskpatch)) {
                                            var n = Z.valHooks[e] && Z.valHooks[e].get ? Z.valHooks[e].get : function (e) {
                                                    return e.value
                                                },
                                                o = Z.valHooks[e] && Z.valHooks[e].set ? Z.valHooks[e].set : function (e, t) {
                                                    return e.value = t, e
                                                };
                                            Z.valHooks[e] = {
                                                get: function (e) {
                                                    if (e.inputmask) {
                                                        if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                                        var t = n(e);
                                                        return -1 !== T(te, te, e.inputmask.maskset.validPositions) || !0 !== a.nullable ? t : ""
                                                    }
                                                    return n(e)
                                                },
                                                set: function (e, t) {
                                                    var n, i = Z(e);
                                                    return n = o(e, t), e.inputmask && i.trigger("setvalue"), n
                                                },
                                                inputmaskpatch: !0
                                            }
                                        }
                                    }(e.type), function (e) {
                                        X.on(e, "mouseenter", function (e) {
                                            var t = Z(this);
                                            this.inputmask._valueGet() !== k().join("") && t.trigger("setvalue")
                                        })
                                    }(e))
                                }
                            }(e) : e.inputmask = te, n
                        }(e, R);
                        if (!1 !== t && (p = e, c = Z(p), -1 === (F = p !== te ? p.maxLength : te) && (F = te), !0 === R.colorMask && r(p), se && (p.hasOwnProperty("inputmode") && (p.inputmode = R.inputmode, p.setAttribute("inputmode", R.inputmode)), "rtfm" === R.androidHack && (!0 !== R.colorMask && r(p), p.type = "password")), !0 === t && (X.on(p, "submit", G.submitEvent), X.on(p, "reset", G.resetEvent), X.on(p, "mouseenter", G.mouseenterEvent), X.on(p, "blur", G.blurEvent), X.on(p, "focus", G.focusEvent), X.on(p, "mouseleave", G.mouseleaveEvent), !0 !== R.colorMask && X.on(p, "click", G.clickEvent), X.on(p, "dblclick", G.dblclickEvent), X.on(p, "paste", G.pasteEvent), X.on(p, "dragdrop", G.pasteEvent), X.on(p, "drop", G.pasteEvent), X.on(p, "cut", G.cutEvent), X.on(p, "complete", R.oncomplete), X.on(p, "incomplete", R.onincomplete), X.on(p, "cleared", R.oncleared), se || !0 === R.inputEventOnly ? p.removeAttribute("maxLength") : (X.on(p, "keydown", G.keydownEvent), X.on(p, "keypress", G.keypressEvent)), X.on(p, "compositionstart", Z.noop), X.on(p, "compositionupdate", Z.noop), X.on(p, "compositionend", Z.noop), X.on(p, "keyup", Z.noop), X.on(p, "input", G.inputFallBackEvent), X.on(p, "beforeinput", Z.noop)), X.on(p, "setvalue", G.setValueEvent), N = g().join(""), "" !== p.inputmask._valueGet(!0) || !1 === R.clearMaskOnLostFocus || ee.activeElement === p)) {
                            var n = Z.isFunction(R.onBeforeMask) ? R.onBeforeMask.call(B, p.inputmask._valueGet(!0), R) || p.inputmask._valueGet(!0) : p.inputmask._valueGet(!0);
                            "" !== n && u(p, !0, !1, _ ? n.split("").reverse() : n.split(""));
                            var i = k().slice();
                            N = i.join(""), !1 === m(i) && R.clearIncomplete && S(), R.clearMaskOnLostFocus && ee.activeElement !== p && (-1 === T() ? i = [] : l(i)), w(p, i), ee.activeElement === p && h(p, L(T()))
                        }
                    }(p);
                    break;
                case "format":
                    return i = (Z.isFunction(R.onBeforeMask) ? R.onBeforeMask.call(B, e.value, R) || e.value : e.value).split(""), u(te, !0, !1, _ ? i.reverse() : i), e.metadata ? {
                        value: _ ? k().slice().reverse().join("") : k().join(""),
                        metadata: ie.call(this, {
                            action: "getmetadata"
                        }, t, R)
                    } : _ ? k().slice().reverse().join("") : k().join("");
                case "isValid":
                    e.value ? (i = e.value.split(""), u(te, !0, !0, _ ? i.reverse() : i)) : e.value = k().join("");
                    for (var Y = k(), V = a(), K = Y.length - 1; K > V && !O(K); K--);
                    return Y.splice(V, K + 1 - V), m(Y) && e.value === k().join("");
                case "getemptymask":
                    return g().join("");
                case "remove":
                    if (p && p.inputmask) {
                        c = Z(p), p.inputmask._valueSet(R.autoUnmask ? n(p) : p.inputmask._valueGet(!0)), X.off(p);
                        Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(p), "value") && p.inputmask.__valueGet && Object.defineProperty(p, "value", {
                            get: p.inputmask.__valueGet,
                            set: p.inputmask.__valueSet,
                            configurable: !0
                        }) : ee.__lookupGetter__ && p.__lookupGetter__("value") && p.inputmask.__valueGet && (p.__defineGetter__("value", p.inputmask.__valueGet), p.__defineSetter__("value", p.inputmask.__valueSet)), p.inputmask = te
                    }
                    return p;
                case "getmetadata":
                    if (Z.isArray(t.metadata)) {
                        var Q = o(!0, 0, !1).join("");
                        return Z.each(t.metadata, function (e, t) {
                            if (t.mask === Q) return Q = t, !1
                        }), Q
                    }
                    return t.metadata
            }
        }
        var e = navigator.userAgent,
            oe = /mobile/i.test(e),
            re = /iemobile/i.test(e),
            ae = /iphone/i.test(e) && !re,
            se = /android/i.test(e) && !re;
        return ne.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: {
                    start: "[",
                    end: "]"
                },
                quantifiermarker: {
                    start: "{",
                    end: "}"
                },
                groupmarker: {
                    start: "(",
                    end: ")"
                },
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: Z.noop,
                onincomplete: Z.noop,
                oncleared: Z.noop,
                repeat: 0,
                greedy: !0,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: Z.noop,
                onBeforeMask: null,
                onBeforePaste: function (e, t) {
                    return Z.isFunction(t.onBeforeMask) ? t.onBeforeMask.call(this, e, t) : e
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: Z.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                radixPointDefinitionSymbol: te,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: ["text", "tel", "password"],
                ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                isComplete: null,
                canClearPosition: Z.noop,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: te,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                colorMask: !1,
                androidHack: !1,
                importDataAttributes: !0
            },
            definitions: {
                9: {
                    validator: "[0-9１-９]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]",
                    cardinality: 1
                }
            },
            aliases: {},
            masksCache: {},
            mask: function (e) {
                function o(n, e, i, o) {
                    if (!0 === e.importDataAttributes) {
                        var t, r, a, s, l = function (e, t) {
                                null !== (t = t !== te ? t : n.getAttribute(o + "-" + e)) && ("string" == typeof t && (0 === e.indexOf("on") ? t = J[t] : "false" === t ? t = !1 : "true" === t && (t = !0)), i[e] = t)
                            },
                            c = n.getAttribute(o);
                        if (c && "" !== c && (c = c.replace(new RegExp("'", "g"), '"'), r = JSON.parse("{" + c + "}")), r) {
                            a = te;
                            for (s in r)
                                if ("alias" === s.toLowerCase()) {
                                    a = r[s];
                                    break
                                }
                        }
                        l("alias", a), i.alias && u(i.alias, i, e);
                        for (t in e) {
                            if (r) {
                                a = te;
                                for (s in r)
                                    if (s.toLowerCase() === t.toLowerCase()) {
                                        a = r[s];
                                        break
                                    }
                            }
                            l(t, a)
                        }
                    }
                    return Z.extend(!0, e, i), ("rtl" === n.dir || e.rightAlign) && (n.style.textAlign = "right"), ("rtl" === n.dir || e.numericInput) && (n.dir = "ltr", n.removeAttribute("dir"), e.isRTL = !0), e
                }
                var r = this;
                return "string" == typeof e && (e = ee.getElementById(e) || ee.querySelectorAll(e)), e = e.nodeName ? [e] : e, Z.each(e, function (e, t) {
                    var n = Z.extend(!0, {}, r.opts);
                    o(t, n, Z.extend(!0, {}, r.userOptions), r.dataAttribute);
                    var i = a(n, r.noMasksCache);
                    i !== te && (t.inputmask !== te && (t.inputmask.opts.autoUnmask = !0, t.inputmask.remove()), t.inputmask = new ne(te, te, !0), t.inputmask.opts = n, t.inputmask.noMasksCache = r.noMasksCache, t.inputmask.userOptions = Z.extend(!0, {}, r.userOptions), t.inputmask.isRTL = n.isRTL || n.numericInput, t.inputmask.el = t, t.inputmask.maskset = i, Z.data(t, "_inputmask_opts", n), ie.call(t.inputmask, {
                        action: "mask"
                    }))
                }), e && e[0] ? e[0].inputmask || this : this
            },
            option: function (e, t) {
                return "string" == typeof e ? this.opts[e] : "object" === (void 0 === e ? "undefined" : le(e)) ? (Z.extend(this.userOptions, e), this.el && !0 !== t && this.mask(this.el), this) : void 0
            },
            unmaskedvalue: function (e) {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache), ie.call(this, {
                    action: "unmaskedvalue",
                    value: e
                })
            },
            remove: function () {
                return ie.call(this, {
                    action: "remove"
                })
            },
            getemptymask: function () {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache), ie.call(this, {
                    action: "getemptymask"
                })
            },
            hasMaskedValue: function () {
                return !this.opts.autoUnmask
            },
            isComplete: function () {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache), ie.call(this, {
                    action: "isComplete"
                })
            },
            getmetadata: function () {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache), ie.call(this, {
                    action: "getmetadata"
                })
            },
            isValid: function (e) {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache), ie.call(this, {
                    action: "isValid",
                    value: e
                })
            },
            format: function (e, t) {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache), ie.call(this, {
                    action: "format",
                    value: e,
                    metadata: t
                })
            },
            analyseMask: function (e, d, p) {
                function t(e, t, n, i) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1, this.quantifier = {
                        min: 1,
                        max: 1
                    }
                }

                function o(n, e, i) {
                    i = i !== te ? i : n.matches.length;
                    var o = n.matches[i - 1];
                    if (d) 0 === e.indexOf("[") || v && /\\d|\\s|\\w]/i.test(e) || "." === e ? n.matches.splice(i++, 0, {
                        fn: new RegExp(e, p.casing ? "i" : ""),
                        cardinality: 1,
                        optionality: n.isOptional,
                        newBlockMarker: o === te || o.def !== e,
                        casing: null,
                        def: e,
                        placeholder: te,
                        nativeDef: e
                    }) : (v && (e = e[e.length - 1]), Z.each(e.split(""), function (e, t) {
                        o = n.matches[i - 1], n.matches.splice(i++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: n.isOptional,
                            newBlockMarker: o === te || o.def !== t && null !== o.fn,
                            casing: null,
                            def: p.staticDefinitionSymbol || t,
                            placeholder: p.staticDefinitionSymbol !== te ? t : te,
                            nativeDef: t
                        })
                    })), v = !1;
                    else {
                        var t = (p.definitions ? p.definitions[e] : te) || ne.prototype.definitions[e];
                        if (t && !v) {
                            for (var r = t.prevalidator, a = r ? r.length : 0, s = 1; s < t.cardinality; s++) {
                                var l = a >= s ? r[s - 1] : [],
                                    c = l.validator,
                                    u = l.cardinality;
                                n.matches.splice(i++, 0, {
                                    fn: c ? "string" == typeof c ? new RegExp(c, p.casing ? "i" : "") : new function () {
                                        this.test = c
                                    } : new RegExp("."),
                                    cardinality: u || 1,
                                    optionality: n.isOptional,
                                    newBlockMarker: o === te || o.def !== (t.definitionSymbol || e),
                                    casing: t.casing,
                                    def: t.definitionSymbol || e,
                                    placeholder: t.placeholder,
                                    nativeDef: e
                                }), o = n.matches[i - 1]
                            }
                            n.matches.splice(i++, 0, {
                                fn: t.validator ? "string" == typeof t.validator ? new RegExp(t.validator, p.casing ? "i" : "") : new function () {
                                    this.test = t.validator
                                } : new RegExp("."),
                                cardinality: t.cardinality,
                                optionality: n.isOptional,
                                newBlockMarker: o === te || o.def !== (t.definitionSymbol || e),
                                casing: t.casing,
                                def: t.definitionSymbol || e,
                                placeholder: t.placeholder,
                                nativeDef: e
                            })
                        } else n.matches.splice(i++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: n.isOptional,
                            newBlockMarker: o === te || o.def !== e && null !== o.fn,
                            casing: null,
                            def: p.staticDefinitionSymbol || e,
                            placeholder: p.staticDefinitionSymbol !== te ? e : te,
                            nativeDef: e
                        }), v = !1
                    }
                }

                function r(i) {
                    i && i.matches && Z.each(i.matches, function (e, t) {
                        var n = i.matches[e + 1];
                        (n === te || n.matches === te || !1 === n.isQuantifier) && t && t.isGroup && (t.isGroup = !1, d || (o(t, p.groupmarker.start, 0), !0 !== t.openGroup && o(t, p.groupmarker.end))), r(t)
                    })
                }

                function n() {
                    if (b.length > 0) {
                        if (c = b[b.length - 1], o(c, s), c.isAlternator) {
                            u = b.pop();
                            for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup = !1;
                            b.length > 0 ? (c = b[b.length - 1]).matches.push(u) : y.matches.push(u)
                        }
                    } else o(y, s)
                }

                function a(e) {
                    e.matches = e.matches.reverse();
                    for (var t in e.matches)
                        if (e.matches.hasOwnProperty(t)) {
                            var n = parseInt(t);
                            if (e.matches[t].isQuantifier && e.matches[n + 1] && e.matches[n + 1].isGroup) {
                                var i = e.matches[t];
                                e.matches.splice(t, 1), e.matches.splice(n + 1, 0, i)
                            }
                            e.matches[t].matches !== te ? e.matches[t] = a(e.matches[t]) : e.matches[t] = function (e) {
                                return e === p.optionalmarker.start ? e = p.optionalmarker.end : e === p.optionalmarker.end ? e = p.optionalmarker.start : e === p.groupmarker.start ? e = p.groupmarker.end : e === p.groupmarker.end && (e = p.groupmarker.start), e
                            }(e.matches[t])
                        } return e
                }
                var i, s, l, c, u, f, h, m = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                    g = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                    v = !1,
                    y = new t,
                    b = [],
                    x = [];
                for (d && (p.optionalmarker.start = te, p.optionalmarker.end = te); i = d ? g.exec(e) : m.exec(e);) {
                    if (s = i[0], d) switch (s.charAt(0)) {
                        case "?":
                            s = "{0,1}";
                            break;
                        case "+":
                        case "*":
                            s = "{" + s + "}"
                    }
                    if (v) n();
                    else switch (s.charAt(0)) {
                        case p.escapeChar:
                            v = !0, d && n();
                            break;
                        case p.optionalmarker.end:
                        case p.groupmarker.end:
                            if (l = b.pop(), l.openGroup = !1, l !== te)
                                if (b.length > 0) {
                                    if ((c = b[b.length - 1]).matches.push(l), c.isAlternator) {
                                        u = b.pop();
                                        for (var k = 0; k < u.matches.length; k++) u.matches[k].isGroup = !1, u.matches[k].alternatorGroup = !1;
                                        b.length > 0 ? (c = b[b.length - 1]).matches.push(u) : y.matches.push(u)
                                    }
                                } else y.matches.push(l);
                            else n();
                            break;
                        case p.optionalmarker.start:
                            b.push(new t(!1, !0));
                            break;
                        case p.groupmarker.start:
                            b.push(new t(!0));
                            break;
                        case p.quantifiermarker.start:
                            var w = new t(!1, !1, !0),
                                S = (s = s.replace(/[{}]/g, "")).split(","),
                                T = isNaN(S[0]) ? S[0] : parseInt(S[0]),
                                C = 1 === S.length ? T : isNaN(S[1]) ? S[1] : parseInt(S[1]);
                            if ("*" !== C && "+" !== C || (T = "*" === C ? 0 : 1), w.quantifier = {
                                    min: T,
                                    max: C
                                }, b.length > 0) {
                                var E = b[b.length - 1].matches;
                                (i = E.pop()).isGroup || ((h = new t(!0)).matches.push(i), i = h), E.push(i), E.push(w)
                            } else(i = y.matches.pop()).isGroup || (d && null === i.fn && "." === i.def && (i.fn = new RegExp(i.def, p.casing ? "i" : "")), (h = new t(!0)).matches.push(i), i = h), y.matches.push(i), y.matches.push(w);
                            break;
                        case p.alternatormarker:
                            if (b.length > 0) {
                                var P = (c = b[b.length - 1]).matches[c.matches.length - 1];
                                f = c.openGroup && (P.matches === te || !1 === P.isGroup && !1 === P.isAlternator) ? b.pop() : c.matches.pop()
                            } else f = y.matches.pop();
                            if (f.isAlternator) b.push(f);
                            else if (f.alternatorGroup ? (u = b.pop(), f.alternatorGroup = !1) : u = new t(!1, !1, !1, !0), u.matches.push(f), b.push(u), f.openGroup) {
                                f.openGroup = !1;
                                var A = new t(!0);
                                A.alternatorGroup = !0, b.push(A)
                            }
                            break;
                        default:
                            n()
                    }
                }
                for (; b.length > 0;) l = b.pop(), y.matches.push(l);
                return y.matches.length > 0 && (r(y), x.push(y)), (p.numericInput || p.isRTL) && a(x[0]), x
            }
        }, ne.extendDefaults = function (e) {
            Z.extend(!0, ne.prototype.defaults, e)
        }, ne.extendDefinitions = function (e) {
            Z.extend(!0, ne.prototype.definitions, e)
        }, ne.extendAliases = function (e) {
            Z.extend(!0, ne.prototype.aliases, e)
        }, ne.format = function (e, t, n) {
            return ne(t).format(e, n)
        }, ne.unmask = function (e, t) {
            return ne(t).unmaskedvalue(e)
        }, ne.isValid = function (e, t) {
            return ne(t).isValid(e)
        }, ne.remove = function (e) {
            Z.each(e, function (e, t) {
                t.inputmask && t.inputmask.remove()
            })
        }, ne.escapeRegex = function (e) {
            var t = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
            return e.replace(new RegExp("(\\" + t.join("|\\") + ")", "gim"), "\\$1")
        }, ne.keyCode = {
            ALT: 18,
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91,
            X: 88
        }, ne
    }) ? i.apply(t, o) : i) && (e.exports = r)
}, function (e, t) {
    e.exports = jQuery
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    n(4), n(9), n(12), n(13), n(14), n(15);
    var o = i(n(1)),
        r = i(n(0)),
        a = i(n(2));
    r.default === a.default && n(16), window.Inputmask = o.default
}, function (e, t, n) {
    var i = n(5);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0
    };
    n(7)(i, o), i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    (e.exports = n(6)(void 0)).push([e.i, "span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > input::selection{\r\n    background: none;\r\n}\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}", ""])
}, function (e, t) {
    function i(e, t) {
        var n, i = e[1] || "",
            o = e[3];
        if (!o) return i;
        if (t && "function" == typeof btoa) {
            var r = (n = o, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                a = o.sources.map(function (e) {
                    return "/*# sourceURL=" + o.sourceRoot + e + " */"
                });
            return [i].concat(a).concat([r]).join("\n")
        }
        return [i].join("\n")
    }
    e.exports = function (n) {
        var a = [];
        return a.toString = function () {
            return this.map(function (e) {
                var t = i(e, n);
                return e[2] ? "@media " + e[2] + "{" + t + "}" : t
            }).join("")
        }, a.i = function (e, t) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var n = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (n[o] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var r = e[i];
                "number" == typeof r[0] && n[r[0]] || (t && !r[2] ? r[2] = t : t && (r[2] = "(" + r[2] + ") and (" + t + ")"), a.push(r))
            }
        }, a
    }
}, function (e, t, n) {
    function l(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n],
                o = m[i.id];
            if (o) {
                for (o.refs++, a = 0; a < o.parts.length; a++) o.parts[a](i.parts[a]);
                for (; a < i.parts.length; a++) o.parts.push(s(i.parts[a], t))
            } else {
                for (var r = [], a = 0; a < i.parts.length; a++) r.push(s(i.parts[a], t));
                m[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: r
                }
            }
        }
    }

    function c(e, t) {
        for (var n = [], i = {}, o = 0; o < e.length; o++) {
            var r = e[o],
                a = t.base ? r[0] + t.base : r[0],
                s = {
                    css: r[1],
                    media: r[2],
                    sourceMap: r[3]
                };
            i[a] ? i[a].parts.push(s) : n.push(i[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }

    function u(e, t) {
        var n = a(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = y[y.length - 1];
        if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), y.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = a(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, o)
        }
    }

    function d(e) {
        var t;
        null !== e.parentNode && (e.parentNode.removeChild(e), 0 <= (t = y.indexOf(e)) && y.splice(t, 1))
    }

    function p(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", f(t, e.attrs), u(e, t), t
    }

    function f(t, n) {
        Object.keys(n).forEach(function (e) {
            t.setAttribute(e, n[e])
        })
    }

    function s(t, e) {
        var n, i, o, r, a, s, l;
        if (e.transform && t.css) {
            if (!(n = e.transform(t.css))) return function () {};
            t.css = n
        }
        return a = e.singleton ? (i = v++, o = g = g || p(e), r = h.bind(null, o, i, !1), h.bind(null, o, i, !0)) : t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (s = e, l = document.createElement("link"), s.attrs.type = "text/css", s.attrs.rel = "stylesheet", f(l, s.attrs), u(s, l), r = function (e, t, n) {
                var i = n.css,
                    o = n.sourceMap,
                    r = void 0 === t.convertToAbsoluteUrls && o;
                (t.convertToAbsoluteUrls || r) && (i = b(i)), o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var a = new Blob([i], {
                        type: "text/css"
                    }),
                    s = e.href;
                e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
            }.bind(null, o = l, e), function () {
                d(o), o.href && URL.revokeObjectURL(o.href)
            }) : (o = p(e), r = function (e, t) {
                var n = t.css,
                    i = t.media;
                if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }.bind(null, o), function () {
                d(o)
            }), r(t),
            function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    r(t = e)
                } else a()
            }
    }

    function h(e, t, n, i) {
        var o, r, a = n ? "" : i.css;
        e.styleSheet ? e.styleSheet.cssText = k(t, a) : (o = document.createTextNode(a), (r = e.childNodes)[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o))
    }
    var i, o, m = {},
        r = function () {
            return void 0 === o && (o = function () {
                return window && document && document.all && !window.atob
            }.apply(this, arguments)), o
        },
        a = (i = {}, function (e) {
            if (void 0 === i[e]) {
                var t = function (e) {
                    return document.querySelector(e)
                }.call(this, e);
                if (t instanceof window.HTMLIFrameElement) try {
                    t = t.contentDocument.head
                } catch (e) {
                    t = null
                }
                i[e] = t
            }
            return i[e]
        }),
        g = null,
        v = 0,
        y = [],
        b = n(8);
    e.exports = function (e, a) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (a = a || {}).attrs = "object" == typeof a.attrs ? a.attrs : {}, a.singleton || (a.singleton = r()), a.insertInto || (a.insertInto = "head"), a.insertAt || (a.insertAt = "bottom");
        var s = c(e, a);
        return l(s, a),
            function (e) {
                for (var t = [], n = 0; n < s.length; n++) {
                    var i = s[n];
                    (o = m[i.id]).refs--, t.push(o)
                }
                for (e && l(c(e, a), a), n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (0 === o.refs) {
                        for (var r = 0; r < o.parts.length; r++) o.parts[r]();
                        delete m[o.id]
                    }
                }
            }
    };
    var x, k = (x = [], function (e, t) {
        return x[e] = t, x.filter(Boolean).join("\n")
    })
}, function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var o = t.protocol + "//" + t.host,
            r = o + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var n, i = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i) ? e : (n = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? o + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
        })
    }
}, function (e, t, n) {
    "use strict";
    var i, o, r;
    o = [n(0), n(1)], void 0 !== (r = "function" == typeof (i = function (a, s) {
        function l(e) {
            return isNaN(e) || 29 === new Date(e, 2, 0).getDate()
        }
        return s.extendAliases({
            "dd/mm/yyyy": {
                mask: "1/2/y",
                placeholder: "dd/mm/yyyy",
                regex: {
                    val1pre: new RegExp("[0-3]"),
                    val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                    val2pre: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|[12][0-9]|3[01])" + t + "[01])")
                    },
                    val2: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|[12][0-9])" + t + "(0[1-9]|1[012]))|(30" + t + "(0[13-9]|1[012]))|(31" + t + "(0[13578]|1[02]))")
                    }
                },
                leapday: "29/02/",
                separator: "/",
                yearrange: {
                    minyear: 1900,
                    maxyear: 2099
                },
                isInYearRange: function (e, t, n) {
                    if (isNaN(e)) return !1;
                    var i = parseInt(e.concat(t.toString().slice(e.length))),
                        o = parseInt(e.concat(n.toString().slice(e.length)));
                    return !isNaN(i) && (t <= i && i <= n) || !isNaN(o) && (t <= o && o <= n)
                },
                determinebaseyear: function (e, t, n) {
                    var i = (new Date).getFullYear();
                    if (e > i) return e;
                    if (t < i) {
                        for (var o = t.toString().slice(0, 2), r = t.toString().slice(2, 4); t < o + n;) o--;
                        var a = o + r;
                        return e > a ? e : a
                    }
                    if (e <= i && i <= t) {
                        for (var s = i.toString().slice(0, 2); t < s + n;) s--;
                        var l = s + n;
                        return l < e ? e : l
                    }
                    return i
                },
                onKeyDown: function (e, t, n, i) {
                    var o = a(this);
                    if (e.ctrlKey && e.keyCode === s.keyCode.RIGHT) {
                        var r = new Date;
                        o.val(r.getDate().toString() + (r.getMonth() + 1).toString() + r.getFullYear().toString()), o.trigger("setvalue")
                    }
                },
                getFrontValue: function (e, t, n) {
                    for (var i = 0, o = 0, r = 0; r < e.length && "2" !== e.charAt(r); r++) {
                        var a = n.definitions[e.charAt(r)];
                        a ? (i += o, o = a.cardinality) : o++
                    }
                    return t.join("").substr(i, o)
                },
                postValidation: function (e, t, n) {
                    var i, o, r = e.join("");
                    return 0 === n.mask.indexOf("y") ? (o = r.substr(0, 4), i = r.substring(4, 10)) : (o = r.substring(6, 10), i = r.substr(0, 6)), t && (i !== n.leapday || l(o))
                },
                definitions: {
                    1: {
                        validator: function (e, t, n, i, o) {
                            var r = o.regex.val1.test(e);
                            return i || r || e.charAt(1) !== o.separator && -1 === "-./".indexOf(e.charAt(1)) || !(r = o.regex.val1.test("0" + e.charAt(0))) ? r : (t.buffer[n - 1] = "0", {
                                refreshFromBuffer: {
                                    start: n - 1,
                                    end: n
                                },
                                pos: n,
                                c: e.charAt(0)
                            })
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function (e, t, n, i, o) {
                                var r = e;
                                isNaN(t.buffer[n + 1]) || (r += t.buffer[n + 1]);
                                var a = 1 === r.length ? o.regex.val1pre.test(r) : o.regex.val1.test(r);
                                if (a && t.validPositions[n] && (o.regex.val2(o.separator).test(e + t.validPositions[n].input) || (t.validPositions[n].input = "0" === e ? "1" : "0")), !i && !a) {
                                    if (a = o.regex.val1.test(e + "0")) return t.buffer[n] = e, t.buffer[++n] = "0", {
                                        pos: n,
                                        c: "0"
                                    };
                                    if (a = o.regex.val1.test("0" + e)) return t.buffer[n] = "0", n++, {
                                        pos: n
                                    }
                                }
                                return a
                            },
                            cardinality: 1
                        }]
                    },
                    2: {
                        validator: function (e, t, n, i, o) {
                            var r = o.getFrontValue(t.mask, t.buffer, o); - 1 !== r.indexOf(o.placeholder[0]) && (r = "01" + o.separator);
                            var a = o.regex.val2(o.separator).test(r + e);
                            return i || a || e.charAt(1) !== o.separator && -1 === "-./".indexOf(e.charAt(1)) || !(a = o.regex.val2(o.separator).test(r + "0" + e.charAt(0))) ? a : (t.buffer[n - 1] = "0", {
                                refreshFromBuffer: {
                                    start: n - 1,
                                    end: n
                                },
                                pos: n,
                                c: e.charAt(0)
                            })
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function (e, t, n, i, o) {
                                isNaN(t.buffer[n + 1]) || (e += t.buffer[n + 1]);
                                var r = o.getFrontValue(t.mask, t.buffer, o); - 1 !== r.indexOf(o.placeholder[0]) && (r = "01" + o.separator);
                                var a = 1 === e.length ? o.regex.val2pre(o.separator).test(r + e) : o.regex.val2(o.separator).test(r + e);
                                return a && t.validPositions[n] && (o.regex.val2(o.separator).test(e + t.validPositions[n].input) || (t.validPositions[n].input = "0" === e ? "1" : "0")), i || a || !(a = o.regex.val2(o.separator).test(r + "0" + e)) ? a : (t.buffer[n] = "0", n++, {
                                    pos: n
                                })
                            },
                            cardinality: 1
                        }]
                    },
                    y: {
                        validator: function (e, t, n, i, o) {
                            return o.isInYearRange(e, o.yearrange.minyear, o.yearrange.maxyear)
                        },
                        cardinality: 4,
                        prevalidator: [{
                            validator: function (e, t, n, i, o) {
                                var r = o.isInYearRange(e, o.yearrange.minyear, o.yearrange.maxyear);
                                if (!i && !r) {
                                    var a = o.determinebaseyear(o.yearrange.minyear, o.yearrange.maxyear, e + "0").toString().slice(0, 1);
                                    if (r = o.isInYearRange(a + e, o.yearrange.minyear, o.yearrange.maxyear)) return t.buffer[n++] = a.charAt(0), {
                                        pos: n
                                    };
                                    if (a = o.determinebaseyear(o.yearrange.minyear, o.yearrange.maxyear, e + "0").toString().slice(0, 2), r = o.isInYearRange(a + e, o.yearrange.minyear, o.yearrange.maxyear)) return t.buffer[n++] = a.charAt(0), t.buffer[n++] = a.charAt(1), {
                                        pos: n
                                    }
                                }
                                return r
                            },
                            cardinality: 1
                        }, {
                            validator: function (e, t, n, i, o) {
                                var r = o.isInYearRange(e, o.yearrange.minyear, o.yearrange.maxyear);
                                if (!i && !r) {
                                    var a = o.determinebaseyear(o.yearrange.minyear, o.yearrange.maxyear, e).toString().slice(0, 2);
                                    if (r = o.isInYearRange(e[0] + a[1] + e[1], o.yearrange.minyear, o.yearrange.maxyear)) return t.buffer[n++] = a.charAt(1), {
                                        pos: n
                                    };
                                    if (a = o.determinebaseyear(o.yearrange.minyear, o.yearrange.maxyear, e).toString().slice(0, 2), r = o.isInYearRange(a + e, o.yearrange.minyear, o.yearrange.maxyear)) return t.buffer[n - 1] = a.charAt(0), t.buffer[n++] = a.charAt(1), t.buffer[n++] = e.charAt(0), {
                                        refreshFromBuffer: {
                                            start: n - 3,
                                            end: n
                                        },
                                        pos: n
                                    }
                                }
                                return r
                            },
                            cardinality: 2
                        }, {
                            validator: function (e, t, n, i, o) {
                                return o.isInYearRange(e, o.yearrange.minyear, o.yearrange.maxyear)
                            },
                            cardinality: 3
                        }]
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            "mm/dd/yyyy": {
                placeholder: "mm/dd/yyyy",
                alias: "dd/mm/yyyy",
                regex: {
                    val2pre: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[13-9]|1[012])" + t + "[0-3])|(02" + t + "[0-2])")
                    },
                    val2: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + t + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + t + "30)|((0[13578]|1[02])" + t + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyDown: function (e, t, n, i) {
                    var o = a(this);
                    if (e.ctrlKey && e.keyCode === s.keyCode.RIGHT) {
                        var r = new Date;
                        o.val((r.getMonth() + 1).toString() + r.getDate().toString() + r.getFullYear().toString()), o.trigger("setvalue")
                    }
                }
            },
            "yyyy/mm/dd": {
                mask: "y/1/2",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                leapday: "/02/29",
                onKeyDown: function (e, t, n, i) {
                    var o = a(this);
                    if (e.ctrlKey && e.keyCode === s.keyCode.RIGHT) {
                        var r = new Date;
                        o.val(r.getFullYear().toString() + (r.getMonth() + 1).toString() + r.getDate().toString()), o.trigger("setvalue")
                    }
                }
            },
            "dd.mm.yyyy": {
                mask: "1.2.y",
                placeholder: "dd.mm.yyyy",
                leapday: "29.02.",
                separator: ".",
                alias: "dd/mm/yyyy"
            },
            "dd-mm-yyyy": {
                mask: "1-2-y",
                placeholder: "dd-mm-yyyy",
                leapday: "29-02-",
                separator: "-",
                alias: "dd/mm/yyyy"
            },
            "mm.dd.yyyy": {
                mask: "1.2.y",
                placeholder: "mm.dd.yyyy",
                leapday: "02.29.",
                separator: ".",
                alias: "mm/dd/yyyy"
            },
            "mm-dd-yyyy": {
                mask: "1-2-y",
                placeholder: "mm-dd-yyyy",
                leapday: "02-29-",
                separator: "-",
                alias: "mm/dd/yyyy"
            },
            "yyyy.mm.dd": {
                mask: "y.1.2",
                placeholder: "yyyy.mm.dd",
                leapday: ".02.29",
                separator: ".",
                alias: "yyyy/mm/dd"
            },
            "yyyy-mm-dd": {
                mask: "y-1-2",
                placeholder: "yyyy-mm-dd",
                leapday: "-02-29",
                separator: "-",
                alias: "yyyy/mm/dd"
            },
            datetime: {
                mask: "1/2/y h:s",
                placeholder: "dd/mm/yyyy hh:mm",
                alias: "dd/mm/yyyy",
                regex: {
                    hrspre: new RegExp("[012]"),
                    hrs24: new RegExp("2[0-4]|1[3-9]"),
                    hrs: new RegExp("[01][0-9]|2[0-4]"),
                    ampm: new RegExp("^[a|p|A|P][m|M]"),
                    mspre: new RegExp("[0-5]"),
                    ms: new RegExp("[0-5][0-9]")
                },
                timeseparator: ":",
                hourFormat: "24",
                definitions: {
                    h: {
                        validator: function (e, t, n, i, o) {
                            if ("24" === o.hourFormat && 24 === parseInt(e, 10)) return t.buffer[n - 1] = "0", t.buffer[n] = "0", {
                                refreshFromBuffer: {
                                    start: n - 1,
                                    end: n
                                },
                                c: "0"
                            };
                            var r = o.regex.hrs.test(e);
                            if (!i && !r && (e.charAt(1) === o.timeseparator || -1 !== "-.:".indexOf(e.charAt(1))) && (r = o.regex.hrs.test("0" + e.charAt(0)))) return t.buffer[n - 1] = "0", t.buffer[n] = e.charAt(0), n++, {
                                refreshFromBuffer: {
                                    start: n - 2,
                                    end: n
                                },
                                pos: n,
                                c: o.timeseparator
                            };
                            if (r && "24" !== o.hourFormat && o.regex.hrs24.test(e)) {
                                var a = parseInt(e, 10);
                                return 24 === a ? (t.buffer[n + 5] = "a", t.buffer[n + 6] = "m") : (t.buffer[n + 5] = "p", t.buffer[n + 6] = "m"), (a -= 12) < 10 ? (t.buffer[n] = a.toString(), t.buffer[n - 1] = "0") : (t.buffer[n] = a.toString().charAt(1), t.buffer[n - 1] = a.toString().charAt(0)), {
                                    refreshFromBuffer: {
                                        start: n - 1,
                                        end: n + 6
                                    },
                                    c: t.buffer[n]
                                }
                            }
                            return r
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function (e, t, n, i, o) {
                                var r = o.regex.hrspre.test(e);
                                return i || r || !(r = o.regex.hrs.test("0" + e)) ? r : (t.buffer[n] = "0", n++, {
                                    pos: n
                                })
                            },
                            cardinality: 1
                        }]
                    },
                    s: {
                        validator: "[0-5][0-9]",
                        cardinality: 2,
                        prevalidator: [{
                            validator: function (e, t, n, i, o) {
                                var r = o.regex.mspre.test(e);
                                return i || r || !(r = o.regex.ms.test("0" + e)) ? r : (t.buffer[n] = "0", n++, {
                                    pos: n
                                })
                            },
                            cardinality: 1
                        }]
                    },
                    t: {
                        validator: function (e, t, n, i, o) {
                            return o.regex.ampm.test(e + "m")
                        },
                        casing: "lower",
                        cardinality: 1
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            datetime12: {
                mask: "1/2/y h:s t\\m",
                placeholder: "dd/mm/yyyy hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "mm/dd/yyyy hh:mm xm": {
                mask: "1/2/y h:s t\\m",
                placeholder: "mm/dd/yyyy hh:mm xm",
                alias: "datetime12",
                regex: {
                    val2pre: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[13-9]|1[012])" + t + "[0-3])|(02" + t + "[0-2])")
                    },
                    val2: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + t + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + t + "30)|((0[13578]|1[02])" + t + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyDown: function (e, t, n, i) {
                    var o = a(this);
                    if (e.ctrlKey && e.keyCode === s.keyCode.RIGHT) {
                        var r = new Date;
                        o.val((r.getMonth() + 1).toString() + r.getDate().toString() + r.getFullYear().toString()), o.trigger("setvalue")
                    }
                }
            },
            "hh:mm t": {
                mask: "h:s t\\m",
                placeholder: "hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "h:s t": {
                mask: "h:s t\\m",
                placeholder: "hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "hh:mm:ss": {
                mask: "h:s:s",
                placeholder: "hh:mm:ss",
                alias: "datetime",
                autoUnmask: !1
            },
            "hh:mm": {
                mask: "h:s",
                placeholder: "hh:mm",
                alias: "datetime",
                autoUnmask: !1
            },
            date: {
                alias: "dd/mm/yyyy"
            },
            "mm/yyyy": {
                mask: "1/y",
                placeholder: "mm/yyyy",
                leapday: "donotuse",
                separator: "/",
                alias: "mm/dd/yyyy"
            },
            shamsi: {
                regex: {
                    val2pre: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + t + "[0-3])")
                    },
                    val2: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + t + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + t + "30)|((0[1-6])" + t + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                yearrange: {
                    minyear: 1300,
                    maxyear: 1499
                },
                mask: "y/1/2",
                leapday: "/12/30",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                clearIncomplete: !0
            },
            "yyyy-mm-dd hh:mm:ss": {
                mask: "y-1-2 h:s:s",
                placeholder: "yyyy-mm-dd hh:mm:ss",
                alias: "datetime",
                separator: "-",
                leapday: "-02-29",
                regex: {
                    val2pre: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[13-9]|1[012])" + t + "[0-3])|(02" + t + "[0-2])")
                    },
                    val2: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + t + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + t + "30)|((0[13578]|1[02])" + t + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                onKeyDown: function (e, t, n, i) {}
            }
        }), s
    }) ? i.apply(t, o) : i) && (e.exports = r)
}, function (e, t, n) {
    "use strict";
    var i;
    void 0 !== (i = function () {
        return window
    }.call(t, n, t, e)) && (e.exports = i)
}, function (e, t, n) {
    "use strict";
    var i;
    void 0 !== (i = function () {
        return document
    }.call(t, n, t, e)) && (e.exports = i)
}, function (e, t, n) {
    "use strict";
    var i, o, r;
    o = [n(0), n(1)], void 0 !== (r = "function" == typeof (i = function (e, t) {
        return t.extendDefinitions({
            A: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                cardinality: 1,
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                cardinality: 1,
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                cardinality: 1,
                casing: "upper"
            }
        }), t.extendAliases({
            url: {
                definitions: {
                    i: {
                        validator: ".",
                        cardinality: 1
                    }
                },
                mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
                insertMode: !1,
                autoUnmask: !1,
                inputmode: "url"
            },
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                definitions: {
                    i: {
                        validator: function (e, t, n, i, o) {
                            return n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)
                        },
                        cardinality: 1
                    }
                },
                onUnMask: function (e, t, n) {
                    return e
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                onBeforePaste: function (e, t) {
                    return (e = e.toLowerCase()).replace("mailto:", "")
                },
                definitions: {
                    "*": {
                        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                        cardinality: 1,
                        casing: "lower"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]",
                        cardinality: 1,
                        casing: "lower"
                    }
                },
                onUnMask: function (e, t, n) {
                    return e
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        cardinality: 1,
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            }
        }), t
    }) ? i.apply(t, o) : i) && (e.exports = r)
}, function (e, t, n) {
    "use strict";
    var i, o, r;
    o = [n(0), n(1)], void 0 !== (r = "function" == typeof (i = function (m, g, v) {
        function r(e, t) {
            for (var n = "", i = 0; i < e.length; i++) g.prototype.definitions[e.charAt(i)] || t.definitions[e.charAt(i)] || t.optionalmarker.start === e.charAt(i) || t.optionalmarker.end === e.charAt(i) || t.quantifiermarker.start === e.charAt(i) || t.quantifiermarker.end === e.charAt(i) || t.groupmarker.start === e.charAt(i) || t.groupmarker.end === e.charAt(i) || t.alternatormarker === e.charAt(i) ? n += "\\" + e.charAt(i) : n += e.charAt(i);
            return n
        }
        return g.extendAliases({
            numeric: {
                mask: function (e) {
                    if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, e.groupSeparator === e.radixPoint && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = v), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), isFinite(e.integerDigits))) {
                        var t = Math.floor(e.integerDigits / e.groupSize),
                            n = e.integerDigits % e.groupSize;
                        e.integerDigits = parseInt(e.integerDigits) + (0 === n ? t - 1 : t), e.integerDigits < 1 && (e.integerDigits = "*")
                    }
                    e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && !1 === e.integerOptional && (e.positionCaretOnClick = "lvp"), e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~", !0 === e.numericInput && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
                    var i = "[+]";
                    if (i += r(e.prefix, e), !0 === e.integerOptional ? i += "~{1," + e.integerDigits + "}" : i += "~{" + e.integerDigits + "}", e.digits !== v) {
                        e.radixPointDefinitionSymbol = e.decimalProtect ? ":" : e.radixPoint;
                        var o = e.digits.toString().split(",");
                        isFinite(o[0] && o[1] && isFinite(o[1])) ? i += e.radixPointDefinitionSymbol + ";{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional ? i += "[" + e.radixPointDefinitionSymbol + ";{1," + e.digits + "}]" : i += e.radixPointDefinitionSymbol + ";{" + e.digits + "}")
                    }
                    return i += r(e.suffix, e), i += "[-]", e.greedy = !1, i
                },
                placeholder: "",
                greedy: !1,
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: !1,
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                integerDigits: "+",
                integerOptional: !0,
                prefix: "",
                suffix: "",
                rightAlign: !0,
                decimalProtect: !0,
                min: null,
                max: null,
                step: 1,
                insertMode: !0,
                autoUnmask: !1,
                unmaskAsNumber: !1,
                inputmode: "numeric",
                preValidation: function (e, t, n, i, o) {
                    if ("-" === n || n === o.negationSymbol.front) return !0 === o.allowMinus && (o.isNegative = o.isNegative === v || !o.isNegative, "" === e.join("") || {
                        caret: t,
                        dopost: !0
                    });
                    if (!1 === i && n === o.radixPoint && o.digits !== v && (isNaN(o.digits) || parseInt(o.digits) > 0)) {
                        var r = m.inArray(o.radixPoint, e);
                        if (-1 !== r) return !0 === o.numericInput ? t === r : {
                            caret: r + 1
                        }
                    }
                    return !0
                },
                postValidation: function (e, t, n) {
                    var i = n.suffix.split(""),
                        o = n.prefix.split("");
                    if (t.pos === v && t.caret !== v && !0 !== t.dopost) return t;
                    var r = t.caret !== v ? t.caret : t.pos,
                        a = e.slice();
                    n.numericInput && (r = a.length - r - 1, a = a.reverse());
                    var s = a[r];
                    if (s === n.groupSeparator && (s = a[r += 1]), r === a.length - n.suffix.length - 1 && s === n.radixPoint) return t;
                    s !== v && s !== n.radixPoint && s !== n.negationSymbol.front && s !== n.negationSymbol.back && (a[r] = "?", n.prefix.length > 0 && r >= (!1 === n.isNegative ? 1 : 0) && r < n.prefix.length - 1 + (!1 === n.isNegative ? 1 : 0) ? o[r - (!1 === n.isNegative ? 1 : 0)] = "?" : n.suffix.length > 0 && r >= a.length - n.suffix.length - (!1 === n.isNegative ? 1 : 0) && (i[r - (a.length - n.suffix.length - (!1 === n.isNegative ? 1 : 0))] = "?")), o = o.join(""), i = i.join("");
                    var l = a.join("").replace(o, "");
                    if (l = l.replace(i, ""), l = l.replace(new RegExp(g.escapeRegex(n.groupSeparator), "g"), ""), l = l.replace(new RegExp("[-" + g.escapeRegex(n.negationSymbol.front) + "]", "g"), ""), l = l.replace(new RegExp(g.escapeRegex(n.negationSymbol.back) + "$"), ""), isNaN(n.placeholder) && (l = l.replace(new RegExp(g.escapeRegex(n.placeholder), "g"), "")), l.length > 1 && 1 !== l.indexOf(n.radixPoint) && ("0" === s && (l = l.replace(/^\?/g, "")), l = l.replace(/^0/g, "")), l.charAt(0) === n.radixPoint && "" !== n.radixPoint && !0 !== n.numericInput && (l = "0" + l), "" !== l) {
                        if (l = l.split(""), (!n.digitsOptional || n.enforceDigitsOnBlur && "blur" === t.event) && isFinite(n.digits)) {
                            var c = m.inArray(n.radixPoint, l),
                                u = m.inArray(n.radixPoint, a); - 1 === c && (l.push(n.radixPoint), c = l.length - 1);
                            for (var d = 1; d <= n.digits; d++) n.digitsOptional && (!n.enforceDigitsOnBlur || "blur" !== t.event) || l[c + d] !== v && l[c + d] !== n.placeholder.charAt(0) ? -1 !== u && a[u + d] !== v && (l[c + d] = l[c + d] || a[u + d]) : l[c + d] = t.placeholder || n.placeholder.charAt(0)
                        }
                        if (!0 !== n.autoGroup || "" === n.groupSeparator || s === n.radixPoint && t.pos === v && !t.dopost) l = l.join("");
                        else {
                            var p = l[l.length - 1] === n.radixPoint && t.c === n.radixPoint;
                            l = g(function (e, t) {
                                var n = "";
                                if (n += "(" + t.groupSeparator + "*{" + t.groupSize + "}){*}", "" !== t.radixPoint) {
                                    var i = e.join("").split(t.radixPoint);
                                    i[1] && (n += t.radixPoint + "*{" + i[1].match(/^\d*\??\d*/)[0].length + "}")
                                }
                                return n
                            }(l, n), {
                                numericInput: !0,
                                jitMasking: !0,
                                definitions: {
                                    "*": {
                                        validator: "[0-9?]",
                                        cardinality: 1
                                    }
                                }
                            }).format(l.join("")), p && (l += n.radixPoint), l.charAt(0) === n.groupSeparator && l.substr(1)
                        }
                    }
                    if (n.isNegative && "blur" === t.event && (n.isNegative = "0" !== l), l = o + l, l += i, n.isNegative && (l = n.negationSymbol.front + l, l += n.negationSymbol.back), l = l.split(""), s !== v)
                        if (s !== n.radixPoint && s !== n.negationSymbol.front && s !== n.negationSymbol.back)(r = m.inArray("?", l)) > -1 ? l[r] = s : r = t.caret || 0;
                        else if (s === n.radixPoint || s === n.negationSymbol.front || s === n.negationSymbol.back) {
                        var f = m.inArray(s, l); - 1 !== f && (r = f)
                    }
                    n.numericInput && (r = l.length - r - 1, l = l.reverse());
                    var h = {
                        caret: s === v || t.pos !== v ? r + (n.numericInput ? -1 : 1) : r,
                        buffer: l,
                        refreshFromBuffer: t.dopost || e.join("") !== l.join("")
                    };
                    return h.refreshFromBuffer ? h : t
                },
                onBeforeWrite: function (e, t, n, i) {
                    if (e) switch (e.type) {
                        case "keydown":
                            return i.postValidation(t, {
                                caret: n,
                                dopost: !0
                            }, i);
                        case "blur":
                        case "checkval":
                            var o;
                            if (function (e) {
                                    e.parseMinMaxOptions === v && (null !== e.min && (e.min = e.min.toString().replace(new RegExp(g.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp(g.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done")
                                }(i), null !== i.min || null !== i.max) {
                                if (o = i.onUnMask(t.join(""), v, m.extend({}, i, {
                                        unmaskAsNumber: !0
                                    })), null !== i.min && o < i.min) return i.isNegative = i.min < 0, i.postValidation(i.min.toString().replace(".", i.radixPoint).split(""), {
                                    caret: n,
                                    dopost: !0,
                                    placeholder: "0"
                                }, i);
                                if (null !== i.max && o > i.max) return i.isNegative = i.max < 0, i.postValidation(i.max.toString().replace(".", i.radixPoint).split(""), {
                                    caret: n,
                                    dopost: !0,
                                    placeholder: "0"
                                }, i)
                            }
                            return i.postValidation(t, {
                                caret: n,
                                placeholder: "0",
                                event: "blur"
                            }, i);
                        case "_checkval":
                            return {
                                caret: n
                            }
                    }
                },
                regex: {
                    integerPart: function (e, t) {
                        return t ? new RegExp("[" + g.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + g.escapeRegex(e.negationSymbol.front) + "+]?\\d+")
                    },
                    integerNPart: function (e) {
                        return new RegExp("[\\d" + g.escapeRegex(e.groupSeparator) + g.escapeRegex(e.placeholder.charAt(0)) + "]+")
                    }
                },
                definitions: {
                    "~": {
                        validator: function (e, t, n, i, o, r) {
                            var a = i ? new RegExp("[0-9" + g.escapeRegex(o.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e);
                            if (!0 === a) {
                                if (!0 !== o.numericInput && t.validPositions[n] !== v && "~" === t.validPositions[n].match.def && !r) {
                                    var s = t.buffer.join(""),
                                        l = (s = (s = s.replace(new RegExp("[-" + g.escapeRegex(o.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(g.escapeRegex(o.negationSymbol.back) + "$"), "")).split(o.radixPoint);
                                    l.length > 1 && (l[1] = l[1].replace(/0/g, o.placeholder.charAt(0))), "0" === l[0] && (l[0] = l[0].replace(/0/g, o.placeholder.charAt(0))), s = l[0] + o.radixPoint + l[1] || "";
                                    var c = t._buffer.join("");
                                    for (s === o.radixPoint && (s = c); null === s.match(g.escapeRegex(c) + "$");) c = c.slice(1);
                                    a = (s = (s = s.replace(c, "")).split(""))[n] === v ? {
                                        pos: n,
                                        remove: n
                                    } : {
                                        pos: n
                                    }
                                }
                            } else i || e !== o.radixPoint || t.validPositions[n - 1] !== v || (t.buffer[n] = "0", a = {
                                pos: n + 1
                            });
                            return a
                        },
                        cardinality: 1
                    },
                    "+": {
                        validator: function (e, t, n, i, o) {
                            return o.allowMinus && ("-" === e || e === o.negationSymbol.front)
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    "-": {
                        validator: function (e, t, n, i, o) {
                            return o.allowMinus && e === o.negationSymbol.back
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    ":": {
                        validator: function (e, t, n, i, o) {
                            var r = "[" + g.escapeRegex(o.radixPoint) + "]",
                                a = new RegExp(r).test(e);
                            return a && t.validPositions[n] && t.validPositions[n].match.placeholder === o.radixPoint && (a = {
                                caret: n + 1
                            }), a
                        },
                        cardinality: 1,
                        placeholder: function (e) {
                            return e.radixPoint
                        }
                    }
                },
                onUnMask: function (e, t, n) {
                    if ("" === t && !0 === n.nullable) return t;
                    var i = e.replace(n.prefix, "");
                    return i = i.replace(n.suffix, ""), i = i.replace(new RegExp(g.escapeRegex(n.groupSeparator), "g"), ""), "" !== n.placeholder.charAt(0) && (i = i.replace(new RegExp(n.placeholder.charAt(0), "g"), "0")), n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== i.indexOf(n.radixPoint) && (i = i.replace(g.escapeRegex.call(this, n.radixPoint), ".")), i = i.replace(new RegExp("^" + g.escapeRegex(n.negationSymbol.front)), "-"), i = i.replace(new RegExp(g.escapeRegex(n.negationSymbol.back) + "$"), ""), Number(i)) : i
                },
                isComplete: function (e, t) {
                    var n = e.join("");
                    if (e.slice().join("") !== n) return !1;
                    var i = n.replace(t.prefix, "");
                    return i = i.replace(t.suffix, ""), i = i.replace(new RegExp(g.escapeRegex(t.groupSeparator), "g"), ""), "," === t.radixPoint && (i = i.replace(g.escapeRegex(t.radixPoint), ".")), isFinite(i)
                },
                onBeforeMask: function (e, t) {
                    if (t.isNegative = v, e = e.toString().charAt(e.length - 1) === t.radixPoint ? e.toString().substr(0, e.length - 1) : e.toString(), "" !== t.radixPoint && isFinite(e)) {
                        var n = e.split("."),
                            i = "" !== t.groupSeparator ? parseInt(t.groupSize) : 0;
                        2 === n.length && (n[0].length > i || n[1].length > i || n[0].length <= i && n[1].length < i) && (e = e.replace(".", t.radixPoint))
                    }
                    var o = e.match(/,/g),
                        r = e.match(/\./g);
                    if (e = r && o ? r.length > o.length ? (e = e.replace(/\./g, "")).replace(",", t.radixPoint) : o.length > r.length ? (e = e.replace(/,/g, "")).replace(".", t.radixPoint) : e.indexOf(".") < e.indexOf(",") ? e.replace(/\./g, "") : e.replace(/,/g, "") : e.replace(new RegExp(g.escapeRegex(t.groupSeparator), "g"), ""), 0 === t.digits && (-1 !== e.indexOf(".") ? e = e.substring(0, e.indexOf(".")) : -1 !== e.indexOf(",") && (e = e.substring(0, e.indexOf(",")))), "" !== t.radixPoint && isFinite(t.digits) && -1 !== e.indexOf(t.radixPoint)) {
                        var a = e.split(t.radixPoint)[1].match(new RegExp("\\d*"))[0];
                        if (parseInt(t.digits) < a.toString().length) {
                            var s = Math.pow(10, parseInt(t.digits));
                            e = e.replace(g.escapeRegex(t.radixPoint), "."), e = (e = Math.round(parseFloat(e) * s) / s).toString().replace(".", t.radixPoint)
                        }
                    }
                    return e
                },
                canClearPosition: function (e, t, n, i, o) {
                    var r = e.validPositions[t],
                        a = r.input !== o.radixPoint || null !== e.validPositions[t].match.fn && !1 === o.decimalProtect || r.input === o.radixPoint && e.validPositions[t + 1] && null === e.validPositions[t + 1].match.fn || isFinite(r.input) || t === n || r.input === o.groupSeparator || r.input === o.negationSymbol.front || r.input === o.negationSymbol.back;
                    return !a || "+" !== r.match.nativeDef && "-" !== r.match.nativeDef || (o.isNegative = !1), a
                },
                onKeyDown: function (e, t, n, i) {
                    var o = m(this);
                    if (e.ctrlKey) switch (e.keyCode) {
                        case g.keyCode.UP:
                            o.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)), o.trigger("setvalue");
                            break;
                        case g.keyCode.DOWN:
                            o.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)), o.trigger("setvalue")
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: !0,
                digits: 2,
                digitsOptional: !1,
                clearMaskOnLostFocus: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0,
                radixPoint: ""
            },
            percentage: {
                alias: "numeric",
                digits: 2,
                digitsOptional: !0,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: !1,
                min: 0,
                max: 100,
                suffix: " %",
                allowMinus: !1
            }
        }), g
    }) ? i.apply(t, o) : i) && (e.exports = r)
}, function (e, t, n) {
    "use strict";
    var i, o, r;
    o = [n(0), n(1)], void 0 !== (r = "function" == typeof (i = function (a, t) {
        function n(e, t) {
            var n = (e.mask || e).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
                i = (t.mask || t).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
                o = (e.mask || e).split("#")[0],
                r = (t.mask || t).split("#")[0];
            return 0 === r.indexOf(o) ? -1 : 0 === o.indexOf(r) ? 1 : n.localeCompare(i)
        }
        var i = t.prototype.analyseMask;
        return t.prototype.analyseMask = function (s, e, o) {
            function l(e, t, n) {
                t = t || "", n = n || c, "" !== t && (n[t] = {});
                for (var i = "", o = n[t] || n, r = e.length - 1; r >= 0; r--) o[i = (s = e[r].mask || e[r]).substr(0, 1)] = o[i] || [], o[i].unshift(s.substr(1)), e.splice(r, 1);
                for (var a in o) o[a].length > 500 && l(o[a].slice(), a, o)
            }

            function r(e) {
                var t = "",
                    n = [];
                for (var i in e) a.isArray(e[i]) ? 1 === e[i].length ? n.push(i + e[i]) : n.push(i + o.groupmarker.start + e[i].join(o.groupmarker.end + o.alternatormarker + o.groupmarker.start) + o.groupmarker.end) : n.push(i + r(e[i]));
                return 1 === n.length ? t += n[0] : t += o.groupmarker.start + n.join(o.groupmarker.end + o.alternatormarker + o.groupmarker.start) + o.groupmarker.end, t
            }
            var c = {};
            return o.phoneCodes && (o.phoneCodes && o.phoneCodes.length > 1e3 && (l((s = s.substr(1, s.length - 2)).split(o.groupmarker.end + o.alternatormarker + o.groupmarker.start)), s = r(c)), s = s.replace(/9/g, "\\9")), i.call(this, s, e, o)
        }, t.extendAliases({
            abstractphone: {
                groupmarker: {
                    start: "<",
                    end: ">"
                },
                countrycode: "",
                phoneCodes: [],
                mask: function (e) {
                    return e.definitions = {
                        "#": t.prototype.definitions[9]
                    }, e.phoneCodes.sort(n)
                },
                keepStatic: !0,
                onBeforeMask: function (e, t) {
                    var n = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                    return (n.indexOf(t.countrycode) > 1 || -1 === n.indexOf(t.countrycode)) && (n = "+" + t.countrycode + n), n
                },
                onUnMask: function (e, t, n) {
                    return e.replace(/[()#-]/g, "")
                },
                inputmode: "tel"
            }
        }), t
    }) ? i.apply(t, o) : i) && (e.exports = r)
}, function (e, t, n) {
    "use strict";
    var i, o, r;
    o = [n(0), n(1)], void 0 !== (r = "function" == typeof (i = function (k, e) {
        return e.extendAliases({
            Regex: {
                mask: "r",
                greedy: !1,
                repeat: "*",
                regex: null,
                regexTokens: null,
                tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                quantifierFilter: /[0-9]+[^,]/,
                isComplete: function (e, t) {
                    return new RegExp(t.regex, t.casing ? "i" : "").test(e.join(""))
                },
                definitions: {
                    r: {
                        validator: function (e, t, n, i, g) {
                            function c(e, t) {
                                this.matches = [], this.isGroup = e || !1, this.isQuantifier = t || !1, this.quantifier = {
                                    min: 1,
                                    max: 1
                                }, this.repeaterPart = void 0
                            }

                            function v(e, t) {
                                var n = !1;
                                t && (b += "(", x++);
                                for (var i = 0; i < e.matches.length; i++) {
                                    var o = e.matches[i];
                                    if (!0 === o.isGroup) n = v(o, !0);
                                    else if (!0 === o.isQuantifier) {
                                        var r = k.inArray(o, e.matches),
                                            a = e.matches[r - 1],
                                            s = b;
                                        if (isNaN(o.quantifier.max)) {
                                            for (; o.repeaterPart && o.repeaterPart !== b && o.repeaterPart.length > b.length && !(n = v(a, !0)););
                                            (n = n || v(a, !0)) && (o.repeaterPart = b), b = s + o.quantifier.max
                                        } else {
                                            for (var l = 0, c = o.quantifier.max - 1; l < c && !(n = v(a, !0)); l++);
                                            b = s + "{" + o.quantifier.min + "," + o.quantifier.max + "}"
                                        }
                                    } else if (void 0 !== o.matches)
                                        for (var u = 0; u < o.length && !(n = v(o[u], t)); u++);
                                    else {
                                        var d;
                                        if ("[" == o.charAt(0)) {
                                            d = b, d += o;
                                            for (h = 0; h < x; h++) d += ")";
                                            n = (m = new RegExp("^(" + d + ")$", g.casing ? "i" : "")).test(y)
                                        } else
                                            for (var p = 0, f = o.length; p < f; p++)
                                                if ("\\" !== o.charAt(p)) {
                                                    d = b, d = (d += o.substr(0, p + 1)).replace(/\|$/, "");
                                                    for (var h = 0; h < x; h++) d += ")";
                                                    var m = new RegExp("^(" + d + ")$", g.casing ? "i" : "");
                                                    if (n = m.test(y)) break
                                                } b += o
                                    }
                                    if (n) break
                                }
                                return t && (b += ")", x--), n
                            }
                            var y, u, o = t.buffer.slice(),
                                b = "",
                                r = !1,
                                x = 0;
                            null === g.regexTokens && function () {
                                var e, t, n = new c,
                                    i = [];
                                for (g.regexTokens = []; e = g.tokenizer.exec(g.regex);) switch ((t = e[0]).charAt(0)) {
                                    case "(":
                                        i.push(new c(!0));
                                        break;
                                    case ")":
                                        u = i.pop(), i.length > 0 ? i[i.length - 1].matches.push(u) : n.matches.push(u);
                                        break;
                                    case "{":
                                    case "+":
                                    case "*":
                                        var o = new c(!1, !0),
                                            r = (t = t.replace(/[{}]/g, "")).split(","),
                                            a = isNaN(r[0]) ? r[0] : parseInt(r[0]),
                                            s = 1 === r.length ? a : isNaN(r[1]) ? r[1] : parseInt(r[1]);
                                        if (o.quantifier = {
                                                min: a,
                                                max: s
                                            }, i.length > 0) {
                                            var l = i[i.length - 1].matches;
                                            (e = l.pop()).isGroup || ((u = new c(!0)).matches.push(e), e = u), l.push(e), l.push(o)
                                        } else(e = n.matches.pop()).isGroup || ((u = new c(!0)).matches.push(e), e = u), n.matches.push(e), n.matches.push(o);
                                        break;
                                    default:
                                        i.length > 0 ? i[i.length - 1].matches.push(t) : n.matches.push(t)
                                }
                                n.matches.length > 0 && g.regexTokens.push(n)
                            }(), o.splice(n, 0, e), y = o.join("");
                            for (var a = 0; a < g.regexTokens.length; a++) {
                                var s = g.regexTokens[a];
                                if (r = v(s, s.isGroup)) break
                            }
                            return r
                        },
                        cardinality: 1
                    }
                }
            }
        }), e
    }) ? i.apply(t, o) : i) && (e.exports = r)
}, function (e, t, n) {
    "use strict";
    var i, o, r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    o = [n(2), n(1)], void 0 !== (r = "function" == typeof (i = function (o, r) {
        return void 0 === o.fn.inputmask && (o.fn.inputmask = function (e, t) {
            var n, i = this[0];
            if (void 0 === t && (t = {}), "string" == typeof e) switch (e) {
                case "unmaskedvalue":
                    return i && i.inputmask ? i.inputmask.unmaskedvalue() : o(i).val();
                case "remove":
                    return this.each(function () {
                        this.inputmask && this.inputmask.remove()
                    });
                case "getemptymask":
                    return i && i.inputmask ? i.inputmask.getemptymask() : "";
                case "hasMaskedValue":
                    return !(!i || !i.inputmask) && i.inputmask.hasMaskedValue();
                case "isComplete":
                    return !i || !i.inputmask || i.inputmask.isComplete();
                case "getmetadata":
                    return i && i.inputmask ? i.inputmask.getmetadata() : void 0;
                case "setvalue":
                    o(i).val(t), i && void 0 === i.inputmask && o(i).triggerHandler("setvalue");
                    break;
                case "option":
                    if ("string" != typeof t) return this.each(function () {
                        if (void 0 !== this.inputmask) return this.inputmask.option(t)
                    });
                    if (i && void 0 !== i.inputmask) return i.inputmask.option(t);
                    break;
                default:
                    return t.alias = e, n = new r(t), this.each(function () {
                        n.mask(this)
                    })
            } else {
                if ("object" == (void 0 === e ? "undefined" : a(e))) return n = new r(e), void 0 === e.mask && void 0 === e.alias ? this.each(function () {
                    if (void 0 !== this.inputmask) return this.inputmask.option(e);
                    n.mask(this)
                }) : this.each(function () {
                    n.mask(this)
                });
                if (void 0 === e) return this.each(function () {
                    (n = new r(t)).mask(this)
                })
            }
        }), o.fn.inputmask
    }) ? i.apply(t, o) : i) && (e.exports = r)
}]),
function (e, t, n, i) {
    "function" == typeof define && define.amd ? define(function () {
        return e.fullpage = i(t, n), e.fullpage
    }) : "object" == typeof exports ? module.exports = i(t, n) : t.fullpage = i(t, n)
}(this, window, document, function (Lt, Mt) {
    "use strict";
    var jt = "fullpage-wrapper",
        Dt = "." + jt,
        Nt = "fp-responsive",
        Rt = "fp-notransition",
        It = "fp-destroyed",
        Ft = "fp-enabled",
        Ht = "fp-viewing",
        Bt = "active",
        _t = "." + Bt,
        zt = "fp-completely",
        qt = "fp-section",
        Wt = "." + qt,
        Ut = Wt + _t,
        Xt = "fp-tableCell",
        Gt = "." + Xt,
        Yt = "fp-auto-height",
        Vt = "fp-normal-scroll",
        Kt = "#fp-nav",
        Qt = "fp-tooltip",
        Zt = "fp-slide",
        Jt = "." + Zt,
        en = Jt + _t,
        tn = "fp-slides",
        nn = "." + tn,
        on = "fp-slidesContainer",
        rn = "." + on,
        an = "fp-table",
        sn = "fp-slidesNav",
        ln = "." + sn,
        cn = ln + " a",
        e = "fp-controlArrow",
        un = "." + e,
        dn = "fp-prev",
        pn = un + ".fp-prev",
        fn = un + ".fp-next";

    function hn(e, t) {
        Lt.console && Lt.console[e] && Lt.console[e]("fullPage: " + t)
    }

    function mn(e, t) {
        return (t = 1 < arguments.length ? t : Mt) ? t.querySelectorAll(e) : null
    }

    function gn(e) {
        e = e || {};
        for (var t = 1, n = arguments.length; t < n; ++t) {
            var i = arguments[t];
            if (i)
                for (var o in i) i.hasOwnProperty(o) && ("[object Object]" !== Object.prototype.toString.call(i[o]) ? e[o] = i[o] : e[o] = gn(e[o], i[o]))
        }
        return e
    }

    function vn(e, t) {
        return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className))
    }

    function yn() {
        return "innerHeight" in Lt ? Lt.innerHeight : Mt.documentElement.offsetHeight
    }

    function bn() {
        return Lt.innerWidth
    }

    function xn(e, t) {
        var n;
        for (n in e = a(e), t)
            if (t.hasOwnProperty(n) && null !== n)
                for (var i = 0; i < e.length; i++) {
                    e[i].style[n] = t[n]
                }
        return e
    }

    function n(e, t, n) {
        for (var i = e[n]; i && !qn(i, t);) i = i[n];
        return i
    }

    function kn(e, t) {
        return n(e, t, "previousElementSibling")
    }

    function wn(e, t) {
        return n(e, t, "nextElementSibling")
    }

    function Sn(e) {
        return e.previousElementSibling
    }

    function Tn(e) {
        return e.nextElementSibling
    }

    function Cn(e) {
        return e[e.length - 1]
    }

    function En(e, t) {
        e = r(e) ? e[0] : e;
        for (var n = null != t ? mn(t, e.parentNode) : e.parentNode.childNodes, i = 0, o = 0; o < n.length; o++) {
            if (n[o] == e) return i;
            1 == n[o].nodeType && i++
        }
        return -1
    }

    function a(e) {
        return r(e) ? e : [e]
    }

    function Pn(e) {
        e = a(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "none";
        return e
    }

    function An(e) {
        e = a(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "block";
        return e
    }

    function r(e) {
        return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e)
    }

    function $n(e, t) {
        e = a(e);
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.classList ? i.classList.add(t) : i.className += " " + t
        }
        return e
    }

    function On(e, t) {
        e = a(e);
        for (var n = t.split(" "), i = 0; i < n.length; i++) {
            t = n[i];
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.classList ? r.classList.remove(t) : r.className = r.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
            }
        }
        return e
    }

    function Ln(e, t) {
        t.appendChild(e)
    }

    function i(e, t, n) {
        var i;
        t = t || Mt.createElement("div");
        for (var o = 0; o < e.length; o++) {
            var r = e[o];
            (!n || o) && n || (i = t.cloneNode(!0), r.parentNode.insertBefore(i, r)), i.appendChild(r)
        }
        return e
    }

    function Mn(e, t) {
        i(e, t, !0)
    }

    function jn(e, t) {
        for ("string" == typeof t && (t = Un(t)), e.appendChild(t); e.firstChild !== t;) t.appendChild(e.firstChild)
    }

    function Dn(e) {
        for (var t = Mt.createDocumentFragment(); e.firstChild;) t.appendChild(e.firstChild);
        e.parentNode.replaceChild(t, e)
    }

    function Nn(e, t) {
        return e && 1 === e.nodeType ? qn(e, t) ? e : Nn(e.parentNode, t) : null
    }

    function Rn(e, t) {
        o(e, e.nextSibling, t)
    }

    function In(e, t) {
        o(e, e, t)
    }

    function o(e, t, n) {
        r(n) || ("string" == typeof n && (n = Un(n)), n = [n]);
        for (var i = 0; i < n.length; i++) e.parentNode.insertBefore(n[i], t)
    }

    function Fn() {
        var e = Mt.documentElement;
        return (Lt.pageYOffset || e.scrollTop) - (e.clientTop || 0)
    }

    function Hn(t) {
        return Array.prototype.filter.call(t.parentNode.children, function (e) {
            return e !== t
        })
    }

    function Bn(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }

    function _n(e) {
        if ("function" == typeof e) return !0;
        var t = Object.prototype.toString(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
    }

    function zn(e, t, n) {
        var i;
        n = void 0 === n ? {} : n, "function" == typeof Lt.CustomEvent ? i = new CustomEvent(t, {
            detail: n
        }) : (i = Mt.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(i)
    }

    function qn(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t)
    }

    function Wn(e, t) {
        if ("boolean" == typeof t)
            for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none";
        return e
    }

    function Un(e) {
        var t = Mt.createElement("div");
        return t.innerHTML = e.trim(), t.firstChild
    }

    function Xn(e) {
        e = a(e);
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n)
        }
    }

    function s(e, t, n) {
        for (var i = e[n], o = []; i;) !qn(i, t) && null != t || o.push(i), i = i[n];
        return o
    }

    function Gn(e, t) {
        return s(e, t, "nextElementSibling")
    }

    function Yn(e, t) {
        return s(e, t, "previousElementSibling")
    }
    return Lt.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) {
            t = t || Lt;
            for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this)
        }), Lt.fp_utils = {
            $: mn,
            deepExtend: gn,
            hasClass: vn,
            getWindowHeight: yn,
            css: xn,
            until: n,
            prevUntil: kn,
            nextUntil: wn,
            prev: Sn,
            next: Tn,
            last: Cn,
            index: En,
            getList: a,
            hide: Pn,
            show: An,
            isArrayOrList: r,
            addClass: $n,
            removeClass: On,
            appendTo: Ln,
            wrap: i,
            wrapAll: Mn,
            wrapInner: jn,
            unwrap: Dn,
            closest: Nn,
            after: Rn,
            before: In,
            insertBefore: o,
            getScrollTop: Fn,
            siblings: Hn,
            preventDefault: Bn,
            isFunction: _n,
            trigger: zn,
            matches: qn,
            toggle: Wn,
            createElementFromHTML: Un,
            remove: Xn,
            filter: function (e, t) {
                Array.prototype.filter.call(e, t)
            },
            untilAll: s,
            nextAll: Gn,
            prevAll: Yn,
            showError: hn
        },
        function (e, w) {
            var o = mn("html, body"),
                a = mn("html")[0],
                S = mn("body")[0],
                h = {};
            w = gn({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: Lt.fp_scrolloverflow ? Lt.fp_scrolloverflow.iscrollHandler : null,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                touchWrapper: "string" == typeof e ? mn(e)[0] : e,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {
                    type: "reveal",
                    percentage: 62,
                    property: "translate"
                },
                cards: !1,
                cardsOptions: {
                    perspective: 100,
                    fadeContent: !0,
                    fadeBackground: !0
                },
                sectionSelector: ".section",
                slideSelector: ".slide",
                v2compatible: !1,
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0
            }, w);
            var T, r, c, s, l = !1,
                n = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                i = "ontouchstart" in Lt || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                u = "string" == typeof e ? mn(e)[0] : e,
                C = yn(),
                d = bn(),
                m = !1,
                t = !0,
                E = !0,
                p = [],
                f = {
                    m: {
                        up: !0,
                        down: !0,
                        left: !0,
                        right: !0
                    }
                };
            f.k = gn({}, f.m);
            var g, v, y, b, x, P, A, k, $, O = function () {
                    var e;
                    e = Lt.PointerEvent ? {
                        down: "pointerdown",
                        move: "pointermove"
                    } : {
                        down: "MSPointerDown",
                        move: "MSPointerMove"
                    };
                    return e
                }(),
                L = {
                    touchmove: "ontouchmove" in Lt ? "touchmove" : O.move,
                    touchstart: "ontouchstart" in Lt ? "touchstart" : O.down
                },
                M = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                j = !1;
            try {
                var D = Object.defineProperty({}, "passive", {
                    get: function () {
                        j = !0
                    }
                });
                Lt.addEventListener("testPassive", null, D), Lt.removeEventListener("testPassive", null, D)
            } catch (e) {}
            var N, R, I = gn({}, w),
                F = !1,
                H = !0,
                B = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards"];

            function _(e, t) {
                e || wt(0), Ct("autoScrolling", e, t);
                var n, i = mn(Ut)[0];
                w.autoScrolling && !w.scrollBar ? (xn(o, {
                    overflow: "hidden",
                    height: "100%"
                }), z(I.recordHistory, "internal"), xn(u, {
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                }), null != i && wt(i.offsetTop)) : (xn(o, {
                    overflow: "visible",
                    height: "initial"
                }), z(!!w.autoScrolling && I.recordHistory, "internal"), xn(u, {
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), null != i && (n = je(i.offsetTop)).element.scrollTo(0, n.options))
            }

            function z(e, t) {
                Ct("recordHistory", e, t)
            }

            function q(e, t) {
                Ct("scrollingSpeed", e, t)
            }

            function W(e, t) {
                Ct("fitToSection", e, t)
            }

            function U(e) {
                e ? (function () {
                    var e, t = "";
                    Lt.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on");
                    var n = "onwheel" in Mt.createElement("div") ? "wheel" : void 0 !== Mt.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                        i = !!j && {
                            passive: !1
                        };
                    "DOMMouseScroll" == n ? Mt[e](t + "MozMousePixelScroll", Ce, i) : Mt[e](t + n, Ce, i)
                }(), u.addEventListener("mousedown", Ye), u.addEventListener("mouseup", Ve)) : (Mt.addEventListener ? (Mt.removeEventListener("mousewheel", Ce, !1), Mt.removeEventListener("wheel", Ce, !1), Mt.removeEventListener("MozMousePixelScroll", Ce, !1)) : Mt.detachEvent("onmousewheel", Ce), u.removeEventListener("mousedown", Ye), u.removeEventListener("mouseup", Ve))
            }

            function X(t, e) {
                void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                    Tt(t, e, "m")
                }) : Tt(t, "all", "m")
            }

            function G(e) {
                e ? (U(!0), function () {
                    {
                        var e;
                        (n || i) && (w.autoScrolling && (S.removeEventListener(L.touchmove, me, {
                            passive: !1
                        }), S.addEventListener(L.touchmove, me, {
                            passive: !1
                        })), (e = w.touchWrapper).removeEventListener(L.touchstart, we), e.removeEventListener(L.touchmove, xe, {
                            passive: !1
                        }), e.addEventListener(L.touchstart, we), e.addEventListener(L.touchmove, xe, {
                            passive: !1
                        }))
                    }
                }()) : (U(!1), function () {
                    {
                        var e;
                        (n || i) && (w.autoScrolling && (S.removeEventListener(L.touchmove, xe, {
                            passive: !1
                        }), S.removeEventListener(L.touchmove, me, {
                            passive: !1
                        })), (e = w.touchWrapper).removeEventListener(L.touchstart, we), e.removeEventListener(L.touchmove, xe, {
                            passive: !1
                        }))
                    }
                }())
            }

            function Y(t, e) {
                void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                    Tt(t, e, "k")
                }) : (Tt(t, "all", "k"), w.keyboardScrolling = t)
            }

            function V() {
                var e = kn(mn(Ut)[0], Wt);
                e || !w.loopTop && !w.continuousVertical || (e = Cn(mn(Wt))), null != e && $e(e, null, !0)
            }

            function K() {
                var e = wn(mn(Ut)[0], Wt);
                e || !w.loopBottom && !w.continuousVertical || (e = mn(Wt)[0]), null != e && $e(e, null, !1)
            }

            function Q(e, t) {
                q(0, "internal"), Z(e, t), q(I.scrollingSpeed, "internal")
            }

            function Z(e, t) {
                var n = ft(e);
                void 0 !== t ? ht(e, t) : null != n && $e(n)
            }

            function J(e) {
                Ee("right", e)
            }

            function ee(e) {
                Ee("left", e)
            }

            function te(e) {
                if (!vn(u, It)) {
                    m = !0, C = yn(), d = bn();
                    for (var t = mn(Wt), n = 0; n < t.length; ++n) {
                        var i = t[n],
                            o = mn(nn, i)[0],
                            r = mn(Jt, i);
                        w.verticalCentered && xn(mn(Gt, i), {
                            height: dt(i) + "px"
                        }), xn(i, {
                            height: C + "px"
                        }), 1 < r.length && et(o, mn(en, o)[0])
                    }
                    w.scrollOverflow && g.createScrollBarForAll();
                    var a = En(mn(Ut)[0], Wt);
                    a && Q(a + 1), m = !1, _n(w.afterResize) && e && w.afterResize.call(u, Lt.innerWidth, Lt.innerHeight), _n(w.afterReBuild) && !e && w.afterReBuild.call(u)
                }
            }

            function ne() {
                return vn(S, Nt)
            }

            function ie(e) {
                var t = ne();
                e ? t || (_(!1, "internal"), W(!1, "internal"), Pn(mn(Kt)), $n(S, Nt), _n(w.afterResponsive) && w.afterResponsive.call(u, e), w.scrollOverflow && g.createScrollBarForAll()) : t && (_(I.autoScrolling, "internal"), W(I.autoScrolling, "internal"), An(mn(Kt)), On(S, Nt), _n(w.afterResponsive) && w.afterResponsive.call(u, e))
            }

            function oe(e) {
                var t = e.target;
                t && Nn(t, Kt + " a") ? function (e) {
                    Bn(e);
                    var t = En(Nn(this, Kt + " li"));
                    $e(mn(Wt)[t])
                }.call(t, e) : qn(t, ".fp-tooltip") ? function () {
                    zn(Sn(this), "click")
                }.call(t) : qn(t, un) ? function () {
                    var e = Nn(this, Wt);
                    vn(this, dn) ? f.m.left && ee(e) : f.m.right && J(e)
                }.call(t, e) : qn(t, cn) || null != Nn(t, cn) ? function (e) {
                    Bn(e);
                    var t = mn(nn, Nn(this, Wt))[0],
                        n = mn(Jt, t)[En(Nn(this, "li"))];
                    et(t, n)
                }.call(t, e) : Nn(t, w.menu + " [data-menuanchor]") && function (e) {
                    !mn(w.menu)[0] || !w.lockAnchors && w.anchors.length || (Bn(e), Z(this.getAttribute("data-menuanchor")))
                }.call(t, e)
            }

            function re(e, t) {
                Mt["fp_" + e] = t, Mt.addEventListener(e, ae, !0)
            }

            function ae(e) {
                var t = e.type,
                    i = !1,
                    o = w.scrollOverflow,
                    r = "mouseleave" === t ? e.toElement || e.relatedTarget : e.target;
                if (r == Mt || !r) return G(!0), void(o && w.scrollOverflowHandler.setIscroll(r, !0));
                "touchend" === t && (H = !1, setTimeout(function () {
                    H = !0
                }, 800)), "mouseenter" === t && !H || (w.normalScrollElements.split(",").forEach(function (e) {
                    var t, n;
                    i || (t = qn(r, e), n = Nn(r, e), (t || n) && (h.shared.isNormalScrollElement || (G(!1), o && w.scrollOverflowHandler.setIscroll(r, !1)), h.shared.isNormalScrollElement = !0, i = !0))
                }), !i && h.shared.isNormalScrollElement && (G(!0), o && w.scrollOverflowHandler.setIscroll(r, !0), h.shared.isNormalScrollElement = !1))
            }

            function se() {
                var e = yn(),
                    t = bn();
                C === e && d === t || (C = e, d = t, te(!0))
            }

            function le(e, t) {
                return w.navigationTooltips[e] || w.anchors[e] || t + " " + (e + 1)
            }

            function ce() {
                var e, t, n = mn(Ut)[0];
                $n(n, zt), Ie(n), Re(), He(n), w.scrollOverflow && w.scrollOverflowHandler.afterLoad(), e = Ue(), t = ft(e.section), e.section && t && (void 0 === t || En(t) !== En(s)) || !_n(w.afterLoad) || Oe("afterLoad", {
                    activeSection: n,
                    element: n,
                    direction: null,
                    anchorLink: n.getAttribute("data-anchor"),
                    sectionIndex: En(n, Wt)
                }), _n(w.afterRender) && Oe("afterRender")
            }! function () {
                w.licenseKey;
                if (vn(a, Ft)) return hn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!");
                w.continuousVertical && (w.loopTop || w.loopBottom) && (w.continuousVertical = !1, hn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));
                !w.scrollOverflow || !w.scrollBar && w.autoScrolling || hn("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox");
                !w.continuousVertical || !w.scrollBar && w.autoScrolling || (w.continuousVertical = !1, hn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));
                w.scrollOverflow && null == w.scrollOverflowHandler && (w.scrollOverflow = !1, hn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js."));
                B.forEach(function (e) {
                    w[e] && hn("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e)
                }), w.anchors.forEach(function (t) {
                    var e, n = [].slice.call(mn("[name]")).filter(function (e) {
                            return e.getAttribute("name") && e.getAttribute("name").toLowerCase() == t.toLowerCase()
                        }),
                        i = [].slice.call(mn("[id]")).filter(function (e) {
                            return e.getAttribute("id") && e.getAttribute("id").toLowerCase() == t.toLowerCase()
                        });
                    (i.length || n.length) && (hn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), e = i.length ? "id" : "name", (i.length || n.length) && hn("error", '"' + t + '" is is being used by another element `' + e + "` property"))
                })
            }(), Lt.fp_easings = gn(Lt.fp_easings, {
                easeInOutCubic: function (e, t, n, i) {
                    return (e /= i / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                }
            }), u && (h.version = "3.0.8", h.setAutoScrolling = _, h.setRecordHistory = z, h.setScrollingSpeed = q, h.setFitToSection = W, h.setLockAnchors = function (e) {
                w.lockAnchors = e
            }, h.setMouseWheelScrolling = U, h.setAllowScrolling = X, h.setKeyboardScrolling = Y, h.moveSectionUp = V, h.moveSectionDown = K, h.silentMoveTo = Q, h.moveTo = Z, h.moveSlideRight = J, h.moveSlideLeft = ee, h.fitToSection = fe, h.reBuild = te, h.setResponsive = ie, h.getFullpageData = function () {
                return w
            }, h.destroy = function (e) {
                _(!1, "internal"), X(!0), G(!1), Y(!1), $n(u, It), [x, b, v, P, A, $, y].forEach(function (e) {
                    clearTimeout(e)
                }), Lt.removeEventListener("scroll", pe), Lt.removeEventListener("hashchange", We), Lt.removeEventListener("resize", it), Mt.removeEventListener("keydown", Xe), Mt.removeEventListener("keyup", Ge), ["click", "touchstart"].forEach(function (e) {
                    Mt.removeEventListener(e, oe)
                }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (e) {
                    Mt.removeEventListener(e, ae, !0)
                }), e && (wt(0), mn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", u).forEach(function (e) {
                    Ne(e, "src")
                }), mn("img[data-srcset]").forEach(function (e) {
                    Ne(e, "srcset")
                }), Xn(mn(Kt + ", " + ln + ", " + un)), xn(mn(Wt), {
                    height: "",
                    "background-color": "",
                    padding: ""
                }), xn(mn(Jt), {
                    width: ""
                }), xn(u, {
                    height: "",
                    position: "",
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), xn(o, {
                    overflow: "",
                    height: ""
                }), On(a, Ft), On(S, Nt), S.className.split(/\s+/).forEach(function (e) {
                    0 === e.indexOf(Ht) && On(S, e)
                }), mn(Wt + ", " + Jt).forEach(function (e) {
                    w.scrollOverflowHandler && w.scrollOverflow && w.scrollOverflowHandler.remove(e), On(e, an + " " + Bt + " " + zt), e.getAttribute("data-fp-styles") && e.setAttribute("style", e.getAttribute("data-fp-styles")), vn(e, qt) && !F && e.removeAttribute("data-anchor")
                }), st(u), [Gt, rn, nn].forEach(function (e) {
                    mn(e, u).forEach(function (e) {
                        Dn(e)
                    })
                }), xn(u, {
                    "-webkit-transition": "none",
                    transition: "none"
                }), Lt.scrollTo(0, 0), [qt, Zt, on].forEach(function (e) {
                    On(mn("." + e), e)
                }))
            }, h.getActiveSection = function () {
                return new $t(mn(Ut)[0])
            }, h.getActiveSlide = function () {
                return Me(mn(en, mn(Ut)[0])[0])
            }, h.test = {
                top: "0px",
                translate3d: "translate3d(0px, 0px, 0px)",
                translate3dH: function () {
                    for (var e = [], t = 0; t < mn(w.sectionSelector, u).length; t++) e.push("translate3d(0px, 0px, 0px)");
                    return e
                }(),
                left: function () {
                    for (var e = [], t = 0; t < mn(w.sectionSelector, u).length; t++) e.push(0);
                    return e
                }(),
                options: w,
                setAutoScrolling: _
            }, h.shared = {
                afterRenderActions: ce,
                isNormalScrollElement: !1
            }, Lt.fullpage_api = h, w.$ && Object.keys(h).forEach(function (e) {
                w.$.fn.fullpage[e] = h[e]
            }), function () {
                w.css3 && (w.css3 = function () {
                    var e, t = Mt.createElement("p"),
                        n = {
                            webkitTransform: "-webkit-transform",
                            OTransform: "-o-transform",
                            msTransform: "-ms-transform",
                            MozTransform: "-moz-transform",
                            transform: "transform"
                        };
                    for (var i in t.style.display = "block", Mt.body.insertBefore(t, null), n) void 0 !== t.style[i] && (t.style[i] = "translate3d(1px,1px,1px)", e = Lt.getComputedStyle(t).getPropertyValue(n[i]));
                    return Mt.body.removeChild(t), void 0 !== e && 0 < e.length && "none" !== e
                }());
                w.scrollBar = w.scrollBar || w.hybrid,
                    function () {
                        {
                            var e, t;
                            w.anchors.length || (e = "[data-anchor]", (t = mn(w.sectionSelector.split(",").join(e + ",") + e, u)).length && (F = !0, t.forEach(function (e) {
                                w.anchors.push(e.getAttribute("data-anchor").toString())
                            })))
                        } {
                            var n, i;
                            w.navigationTooltips.length || (n = "[data-tooltip]", (i = mn(w.sectionSelector.split(",").join(n + ",") + n, u)).length && i.forEach(function (e) {
                                w.navigationTooltips.push(e.getAttribute("data-tooltip").toString())
                            }))
                        }
                    }(),
                    function () {
                        xn(u, {
                            height: "100%",
                            position: "relative"
                        }), $n(u, jt), $n(a, Ft), C = yn(), On(u, It), $n(mn(w.sectionSelector, u), qt), $n(mn(w.slideSelector, u), Zt);
                        for (var e = mn(Wt), t = 0; t < e.length; t++) {
                            var n = t,
                                i = e[t],
                                o = mn(Jt, i),
                                r = o.length;
                            i.setAttribute("data-fp-styles", i.getAttribute("style")),
                                function (e, t) {
                                    t || null != mn(Ut)[0] || $n(e, Bt);
                                    s = mn(Ut)[0], xn(e, {
                                        height: C + "px"
                                    }), w.paddingTop && xn(e, {
                                        "padding-top": w.paddingTop
                                    });
                                    w.paddingBottom && xn(e, {
                                        "padding-bottom": w.paddingBottom
                                    });
                                    void 0 !== w.sectionsColor[t] && xn(e, {
                                        "background-color": w.sectionsColor[t]
                                    });
                                    void 0 !== w.anchors[t] && e.setAttribute("data-anchor", w.anchors[t])
                                }(i, n),
                                function (e, t) {
                                    void 0 !== w.anchors[t] && vn(e, Bt) && lt(w.anchors[t], t);
                                    w.menu && w.css3 && null != Nn(mn(w.menu)[0], Dt) && mn(w.menu).forEach(function (e) {
                                        S.appendChild(e)
                                    })
                                }(i, n), 0 < r ? function (e, t, n) {
                                    var i = 100 * n,
                                        o = 100 / n,
                                        r = Mt.createElement("div");
                                    r.className = tn, Mn(t, r);
                                    var a = Mt.createElement("div");
                                    a.className = on, Mn(t, a), xn(mn(rn, e), {
                                        width: i + "%"
                                    }), 1 < n && (w.controlArrows && function (e) {
                                        var t = [Un('<div class="fp-controlArrow fp-prev"></div>'), Un('<div class="fp-controlArrow fp-next"></div>')];
                                        Rn(mn(nn, e)[0], t), "#fff" !== w.controlArrowColor && (xn(mn(fn, e), {
                                            "border-color": "transparent transparent transparent " + w.controlArrowColor
                                        }), xn(mn(pn, e), {
                                            "border-color": "transparent " + w.controlArrowColor + " transparent transparent"
                                        }));
                                        w.loopHorizontal || Pn(mn(pn, e))
                                    }(e), w.slidesNavigation && function (e, t) {
                                        Ln(Un('<div class="' + sn + '"><ul></ul></div>'), e);
                                        var n = mn(ln, e)[0];
                                        $n(n, "fp-" + w.slidesNavPosition);
                                        for (var i = 0; i < t; i++) Ln(Un('<li><a href="#"><span class="fp-sr-only">' + le(i, "Slide") + "</span><span></span></a></li>"), mn("ul", n)[0]);
                                        xn(n, {
                                            "margin-left": "-" + n.innerWidth / 2 + "px"
                                        }), $n(mn("a", mn("li", n)[0]), Bt)
                                    }(e, n));
                                    t.forEach(function (e) {
                                        xn(e, {
                                            width: o + "%"
                                        }), w.verticalCentered && ut(e)
                                    });
                                    var s = mn(en, e)[0];
                                    null != s && (0 !== En(mn(Ut), Wt) || 0 === En(mn(Ut), Wt) && 0 !== En(s)) ? kt(s, "internal") : $n(t[0], Bt)
                                }(i, o, r) : w.verticalCentered && ut(i)
                        }
                        w.fixedElements && w.css3 && mn(w.fixedElements).forEach(function (e) {
                            S.appendChild(e)
                        });
                        w.navigation && function () {
                            var e = Mt.createElement("div");
                            e.setAttribute("id", "fp-nav");
                            var t = Mt.createElement("ul");
                            e.appendChild(t), Ln(e, S);
                            var n = mn(Kt)[0];
                            $n(n, "fp-" + w.navigationPosition), w.showActiveTooltip && $n(n, "fp-show-active");
                            for (var i = "", o = 0; o < mn(Wt).length; o++) {
                                var r = "";
                                w.anchors.length && (r = w.anchors[o]), i += '<li><a href="#' + r + '"><span class="fp-sr-only">' + le(o, "Section") + "</span><span></span></a>";
                                var a = w.navigationTooltips[o];
                                void 0 !== a && "" !== a && (i += '<div class="' + Qt + " fp-" + w.navigationPosition + '">' + a + "</div>"), i += "</li>"
                            }
                            mn("ul", n)[0].innerHTML = i, xn(mn(Kt), {
                                "margin-top": "-" + mn(Kt)[0].offsetHeight / 2 + "px"
                            });
                            var s = mn("li", mn(Kt)[0])[En(mn(Ut)[0], Wt)];
                            $n(mn("a", s), Bt)
                        }();
                        mn('iframe[src*="youtube.com/embed/"]', u).forEach(function (e) {
                            var t, n, i;
                            n = "enablejsapi=1", i = (t = e).getAttribute("src"), t.setAttribute("src", i + function (e) {
                                return /\?/.test(e) ? "&" : "?"
                            }(i) + n)
                        }), w.scrollOverflow && (g = w.scrollOverflowHandler.init(w))
                    }(), X(!0), G(!0), _(w.autoScrolling, "internal"), rt(), bt(), "complete" === Mt.readyState && qe();
                Lt.addEventListener("load", qe), w.scrollOverflow || ce();
                ! function () {
                    for (var e = 1; e < 4; e++) $ = setTimeout(se, 350 * e)
                }()
            }(), Lt.addEventListener("scroll", pe), Lt.addEventListener("hashchange", We), Lt.addEventListener("blur", Qe), Lt.addEventListener("resize", it), Mt.addEventListener("keydown", Xe), Mt.addEventListener("keyup", Ge), ["click", "touchstart"].forEach(function (e) {
                Mt.addEventListener(e, oe)
            }), w.normalScrollElements && (["mouseenter", "touchstart"].forEach(function (e) {
                re(e, !1)
            }), ["mouseleave", "touchend"].forEach(function (e) {
                re(e, !0)
            })));
            var ue = !1,
                de = 0;

            function pe() {
                var e, t, n, i, o, r;
                if (!w.autoScrolling || w.scrollBar) {
                    var a, s, l, c, u, d, p, f, h, m = Fn(),
                        g = (r = de < (o = m) ? "down" : "up", Ae = de = o, r),
                        v = 0,
                        y = m + yn() / 2,
                        b = S.offsetHeight - yn() === m,
                        x = mn(Wt);
                    if (b) v = x.length - 1;
                    else if (m)
                        for (var k = 0; k < x.length; ++k) {
                            x[k].offsetTop <= y && (v = k)
                        } else v = 0;
                    t = g, n = mn(Ut)[0].offsetTop, i = n + yn(), ("up" != t ? n <= Fn() : i >= Fn() + yn()) && (vn(mn(Ut)[0], zt) || ($n(mn(Ut)[0], zt), On(Hn(mn(Ut)[0]), zt))), vn(e = x[v], Bt) || (ue = !0, s = En(a = mn(Ut)[0], Wt) + 1, l = ct(e), c = e.getAttribute("data-anchor"), h = {
                        activeSection: a,
                        sectionIndex: (u = En(e, Wt) + 1) - 1,
                        anchorLink: c,
                        element: e,
                        leavingSection: s,
                        direction: l
                    }, (d = mn(en, e)[0]) && (f = d.getAttribute("data-anchor"), p = En(d)), E && ($n(e, Bt), On(Hn(e), Bt), _n(w.onLeave) && Oe("onLeave", h), _n(w.afterLoad) && Oe("afterLoad", h), _e(a), Ie(e), He(e), lt(c, u - 1), w.anchors.length && (T = c), gt(p, f, c)), clearTimeout(P), P = setTimeout(function () {
                        ue = !1
                    }, 100)), w.fitToSection && (clearTimeout(A), A = setTimeout(function () {
                        w.fitToSection && mn(Ut)[0].offsetHeight <= C && fe()
                    }, w.fitToSectionDelay))
                }
            }

            function fe() {
                E && (m = !0, $e(mn(Ut)[0]), m = !1)
            }

            function he(e) {
                if (f.m[e]) {
                    var t = "down" === e ? K : V;
                    if (w.scrollOverflow) {
                        var n = w.scrollOverflowHandler.scrollable(mn(Ut)[0]),
                            i = "down" === e ? "bottom" : "top";
                        if (null != n) {
                            if (!w.scrollOverflowHandler.isScrolled(i, n)) return 1;
                            t()
                        } else t()
                    } else t()
                }
            }

            function me(e) {
                w.autoScrolling && ke(e) && f.m.up && Bn(e)
            }
            var ge = 0,
                ve = 0,
                ye = 0,
                be = 0;

            function xe(e) {
                var t, n = Nn(e.target, Wt) || mn(Ut)[0];
                ke(e) && (w.autoScrolling && Bn(e), t = xt(e), ye = t.y, be = t.x, mn(nn, n).length && Math.abs(ve - be) > Math.abs(ge - ye) ? !l && Math.abs(ve - be) > bn() / 100 * w.touchSensitivity && (be < ve ? f.m.right && J(n) : f.m.left && ee(n)) : w.autoScrolling && E && Math.abs(ge - ye) > Lt.innerHeight / 100 * w.touchSensitivity && (ye < ge ? he("down") : ge < ye && he("up")))
            }

            function ke(e) {
                return void 0 === e.pointerType || "mouse" != e.pointerType
            }

            function we(e) {
                var t;
                w.fitToSection && (N = !1), ke(e) && (t = xt(e), ge = t.y, ve = t.x)
            }

            function Se(e, t) {
                for (var n = 0, i = e.slice(Math.max(e.length - t, 1)), o = 0; o < i.length; o++) n += i[o];
                return Math.ceil(n / t)
            }
            var Te = (new Date).getTime();

            function Ce(e) {
                var t = (new Date).getTime(),
                    n = vn(mn(".fp-completely")[0], Vt);
                if (!f.m.down && !f.m.up) return Bn(e), !1;
                if (w.autoScrolling && !c && !n) {
                    var i = (e = e || Lt.event).wheelDelta || -e.deltaY || -e.detail,
                        o = Math.max(-1, Math.min(1, i)),
                        r = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
                        a = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !r;
                    149 < p.length && p.shift(), p.push(Math.abs(i)), w.scrollBar && Bn(e);
                    var s, l = t - Te;
                    return Te = t, 200 < l && (p = []), E && (s = Se(p, 10), Se(p, 70) <= s && a && he(o < 0 ? "down" : "up")), !1
                }
                w.fitToSection && (N = !1)
            }

            function Ee(e, t) {
                var n = null == t ? mn(Ut)[0] : t,
                    i = mn(nn, n)[0];
                if (!(null == i || l || mn(Jt, i).length < 2)) {
                    var o = mn(en, i)[0],
                        r = null;
                    if (null == (r = ("left" === e ? kn : wn)(o, Jt))) {
                        if (!w.loopHorizontal) return;
                        var a = Hn(o),
                            r = "left" === e ? a[a.length - 1] : a[0]
                    }
                    l = !h.test.isTesting, et(i, r, e)
                }
            }

            function Pe() {
                for (var e = mn(en), t = 0; t < e.length; t++) kt(e[t], "internal")
            }
            var Ae = 0;

            function $e(e, t, n) {
                if (null != e) {
                    var i, o, r, a, s, l, c, u, d, p = {
                        element: e,
                        callback: t,
                        isMovementUp: n,
                        dtop: (o = (i = e).offsetHeight, r = i.offsetTop, s = Ae < (a = r), l = a - C + o, c = w.bigSectionsDestination, C < o ? (s || c) && "bottom" !== c || (a = l) : (s || m && null == Tn(i)) && (a = l), Ae = a),
                        yMovement: ct(e),
                        anchorLink: e.getAttribute("data-anchor"),
                        sectionIndex: En(e, Wt),
                        activeSlide: mn(en, e)[0],
                        activeSection: mn(Ut)[0],
                        leavingSection: En(mn(Ut), Wt) + 1,
                        localIsResizing: m
                    };
                    if (!(p.activeSection == e && !m || w.scrollBar && Fn() === p.dtop && !vn(e, Yt))) {
                        if (null != p.activeSlide && (u = p.activeSlide.getAttribute("data-anchor"), d = En(p.activeSlide)), !p.localIsResizing) {
                            var f = p.yMovement;
                            if (void 0 !== n && (f = n ? "up" : "down"), p.direction = f, _n(w.onLeave) && !1 === Oe("onLeave", p)) return
                        }
                        w.autoScrolling && w.continuousVertical && void 0 !== p.isMovementUp && (!p.isMovementUp && "up" == p.yMovement || p.isMovementUp && "down" == p.yMovement) && (p = function (e) {
                                e.isMovementUp ? In(mn(Ut)[0], Gn(e.activeSection, Wt)) : Rn(mn(Ut)[0], Yn(e.activeSection, Wt).reverse());
                                return wt(mn(Ut)[0].offsetTop), Pe(), e.wrapAroundElements = e.activeSection, e.dtop = e.element.offsetTop, e.yMovement = ct(e.element), e
                            }(p)), p.localIsResizing || _e(p.activeSection), w.scrollOverflow && w.scrollOverflowHandler.beforeLeave(), $n(e, Bt), On(Hn(e), Bt), Ie(e), w.scrollOverflow && w.scrollOverflowHandler.onLeave(), E = h.test.isTesting, gt(d, u, p.anchorLink, p.sectionIndex),
                            function (e) {
                                {
                                    var t;
                                    w.css3 && w.autoScrolling && !w.scrollBar ? (pt("translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)", !0), w.scrollingSpeed ? (clearTimeout(b), b = setTimeout(function () {
                                        De(e)
                                    }, w.scrollingSpeed)) : De(e)) : (t = je(e.dtop), h.test.top = -e.dtop + "px", Et(t.element, t.options, w.scrollingSpeed, function () {
                                        w.scrollBar ? setTimeout(function () {
                                            De(e)
                                        }, 30) : De(e)
                                    }))
                                }
                            }(p), T = p.anchorLink, lt(p.anchorLink, p.sectionIndex)
                    }
                }
            }

            function Oe(e, t) {
                var n, i = function (e, t) {
                    var n;
                    n = w.v2compatible ? {
                        afterRender: function () {
                            return [u]
                        },
                        onLeave: function () {
                            return [t.activeSection, t.leavingSection, t.sectionIndex + 1, t.direction]
                        },
                        afterLoad: function () {
                            return [t.element, t.anchorLink, t.sectionIndex + 1]
                        },
                        afterSlideLoad: function () {
                            return [t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex]
                        },
                        onSlideLeave: function () {
                            return [t.prevSlide, t.anchorLink, t.sectionIndex + 1, t.prevSlideIndex, t.direction, t.slideIndex]
                        }
                    } : {
                        afterRender: function () {
                            return {
                                section: Le(mn(Ut)[0]),
                                slide: Me(mn(en, mn(Ut)[0])[0])
                            }
                        },
                        onLeave: function () {
                            return {
                                origin: Le(t.activeSection),
                                destination: Le(t.element),
                                direction: t.direction
                            }
                        },
                        afterLoad: function () {
                            return n.onLeave()
                        },
                        afterSlideLoad: function () {
                            return {
                                section: Le(t.section),
                                origin: Me(t.prevSlide),
                                destination: Me(t.destiny),
                                direction: t.direction
                            }
                        },
                        onSlideLeave: function () {
                            return n.afterSlideLoad()
                        }
                    };
                    return n[e]()
                }(e, t);
                if (w.v2compatible) {
                    if (!1 === w[e].apply(i[0], i.slice(1))) return !1
                } else if (zn(u, e, i), !1 === w[e].apply(i[Object.keys(i)[0]], (n = i, Object.keys(n).map(function (e) {
                        return n[e]
                    })))) return !1;
                return !0
            }

            function Le(e) {
                return e ? new $t(e) : null
            }

            function Me(e) {
                return e ? new Ot(e) : null
            }

            function je(e) {
                var t = {};
                return w.autoScrolling && !w.scrollBar ? (t.options = -e, t.element = mn(Dt)[0]) : (t.options = e, t.element = Lt), t
            }

            function De(e) {
                var t;
                null != (t = e).wrapAroundElements && (t.isMovementUp ? In(mn(Wt)[0], t.wrapAroundElements) : Rn(mn(Wt)[mn(Wt).length - 1], t.wrapAroundElements), wt(mn(Ut)[0].offsetTop), Pe()), _n(w.afterLoad) && !e.localIsResizing && Oe("afterLoad", e), w.scrollOverflow && w.scrollOverflowHandler.afterLoad(), e.localIsResizing || He(e.element), $n(e.element, zt), On(Hn(e.element), zt), Re(), E = !0, _n(e.callback) && e.callback()
            }

            function Ne(e, t) {
                e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t)
            }

            function Re() {
                var e = mn(".fp-auto-height")[0] || ne() && mn(".fp-auto-height-responsive")[0];
                w.lazyLoading && e && mn(Wt + ":not(" + _t + ")").forEach(function (e) {
                    var t, n, i;
                    t = e.getBoundingClientRect(), n = t.top, i = t.bottom, (n + 2 < C && 0 < n || 2 < i && i < C) && Ie(e)
                })
            }

            function Ie(i) {
                w.lazyLoading && mn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", ze(i)).forEach(function (n) {
                    var e;
                    ["src", "srcset"].forEach(function (e) {
                        var t = n.getAttribute("data-" + e);
                        null != t && t && (Ne(n, e), n.addEventListener("load", function () {
                            Fe(i)
                        }))
                    }), !qn(n, "source") || (e = Nn(n, "video, audio")) && (e.load(), e.onloadeddata = function () {
                        Fe(i)
                    })
                })
            }

            function Fe(e) {
                w.scrollOverflow && (clearTimeout(R), R = setTimeout(function () {
                    g.createScrollBar(e)
                }, 200))
            }

            function He(e) {
                var t = ze(e);
                mn("video, audio", t).forEach(function (e) {
                    e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
                }), mn('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                    e.hasAttribute("data-autoplay") && Be(e), e.onload = function () {
                        e.hasAttribute("data-autoplay") && Be(e)
                    }
                })
            }

            function Be(e) {
                e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
            }

            function _e(e) {
                var t = ze(e);
                mn("video, audio", t).forEach(function (e) {
                    e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
                }), mn('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                    /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                })
            }

            function ze(e) {
                var t = mn(en, e);
                return t.length && (e = t[0]), e
            }

            function qe() {
                var e = Ue(),
                    t = e.section,
                    n = e.slide;
                t && (w.animateAnchor ? ht : Q)(t, n)
            }

            function We() {
                var e, t, n, i, o;
                ue || w.lockAnchors || (t = (e = Ue()).section, n = e.slide, o = (i = void 0 === T) && void 0 === n && !l, t && t.length && (t && t !== T && !i || o || !l && r != n) && ht(t, n))
            }

            function Ue() {
                var e, t, n, i, o, r = Lt.location.hash;
                return r.length && (t = r.replace("#", "").split("/"), i = (n = -1 < r.indexOf("#/")) ? "/" + t[1] : decodeURIComponent(t[0]), (o = n ? t[2] : t[1]) && o.length && (e = decodeURIComponent(o))), {
                    section: i,
                    slide: e
                }
            }

            function Xe(e) {
                clearTimeout(k);
                var t = Mt.activeElement,
                    n = e.keyCode;
                9 === n ? function (e) {
                    var t = e.shiftKey,
                        n = Mt.activeElement,
                        i = Ke(ze(mn(Ut)[0]));

                    function o(e) {
                        return Bn(e), i[0] ? i[0].focus() : null
                    }
                    if (function (e) {
                            var t = Ke(Mt),
                                n = t.indexOf(Mt.activeElement),
                                i = e.shiftKey ? n - 1 : n + 1,
                                o = t[i],
                                r = Me(Nn(o, Jt)),
                                a = Le(Nn(o, Wt));
                            return !r && !a
                        }(e)) return;
                    n ? null == Nn(n, Ut + "," + Ut + " " + en) && (n = o(e)) : o(e);
                    (!t && n == i[i.length - 1] || t && n == i[0]) && Bn(e)
                }(e) : qn(t, "textarea") || qn(t, "input") || qn(t, "select") || "true" === t.getAttribute("contentEditable") || "" === t.getAttribute("contentEditable") || !w.keyboardScrolling || !w.autoScrolling || (-1 < [40, 38, 32, 33, 34].indexOf(n) && Bn(e), c = e.ctrlKey, k = setTimeout(function () {
                    ! function (e) {
                        var t = e.shiftKey,
                            n = Mt.activeElement,
                            i = qn(n, "video") || qn(n, "audio");
                        if (!E && [37, 39].indexOf(e.keyCode) < 0) return;
                        switch (e.keyCode) {
                            case 38:
                            case 33:
                                f.k.up && V();
                                break;
                            case 32:
                                if (t && f.k.up && !i) {
                                    V();
                                    break
                                }
                                case 40:
                                case 34:
                                    f.k.down && (32 === e.keyCode && i || K());
                                    break;
                                case 36:
                                    f.k.up && Z(1);
                                    break;
                                case 35:
                                    f.k.down && Z(mn(Wt).length);
                                    break;
                                case 37:
                                    f.k.left && ee();
                                    break;
                                case 39:
                                    f.k.right && J();
                                    break;
                                default:
                                    ;
                        }
                    }(e)
                }, 150))
            }

            function Ge(e) {
                t && (c = e.ctrlKey)
            }

            function Ye(e) {
                2 == e.which && (Ze = e.pageY, u.addEventListener("mousemove", Je))
            }

            function Ve(e) {
                2 == e.which && u.removeEventListener("mousemove", Je)
            }

            function Ke(e) {
                return [].slice.call(mn(M, e)).filter(function (e) {
                    return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent
                })
            }

            function Qe() {
                c = t = !1
            }
            var Ze = 0;

            function Je(e) {
                w.autoScrolling && (E && (e.pageY < Ze && f.m.up ? V() : e.pageY > Ze && f.m.down && K()), Ze = e.pageY)
            }

            function et(e, t, n) {
                var i = Nn(e, Wt),
                    o = {
                        slides: e,
                        destiny: t,
                        direction: n,
                        destinyPos: {
                            left: t.offsetLeft
                        },
                        slideIndex: En(t),
                        section: i,
                        sectionIndex: En(i, Wt),
                        anchorLink: i.getAttribute("data-anchor"),
                        slidesNav: mn(ln, i)[0],
                        slideAnchor: yt(t),
                        prevSlide: mn(en, i)[0],
                        prevSlideIndex: En(mn(en, i)[0]),
                        localIsResizing: m
                    };
                o.xMovement = function (e, t) {
                    if (e == t) return "none";
                    if (t < e) return "left";
                    return "right"
                }(o.prevSlideIndex, o.slideIndex), o.direction = o.direction ? o.direction : o.xMovement, o.localIsResizing || (E = !1), w.onSlideLeave && !o.localIsResizing && "none" !== o.xMovement && _n(w.onSlideLeave) && !1 === Oe("onSlideLeave", o) ? l = !1 : ($n(t, Bt), On(Hn(t), Bt), o.localIsResizing || (_e(o.prevSlide), Ie(t)), !w.loopHorizontal && w.controlArrows && (Wn(mn(pn, i), 0 !== o.slideIndex), Wn(mn(fn, i), null != Tn(t))), vn(i, Bt) && !o.localIsResizing && gt(o.slideIndex, o.slideAnchor, o.anchorLink, o.sectionIndex), function (e, t, n) {
                    var i = t.destinyPos; {
                        var o;
                        w.css3 ? (o = "translate3d(-" + Math.round(i.left) + "px, 0px, 0px)", h.test.translate3dH[t.sectionIndex] = o, xn(at(mn(rn, e)), St(o)), x = setTimeout(function () {
                            n && tt(t)
                        }, w.scrollingSpeed)) : (h.test.left[t.sectionIndex] = Math.round(i.left), Et(e, Math.round(i.left), w.scrollingSpeed, function () {
                            n && tt(t)
                        }))
                    }
                }(e, o, !0))
            }

            function tt(e) {
                var t, n;
                t = e.slidesNav, n = e.slideIndex, w.slidesNavigation && null != t && (On(mn(_t, t), Bt), $n(mn("a", mn("li", t)[n]), Bt)), e.localIsResizing || (_n(w.afterSlideLoad) && Oe("afterSlideLoad", e), E = !0, He(e.destiny)), l = !1
            }
            var nt = C;

            function it() {
                clearTimeout(v), v = setTimeout(function () {
                    for (var e = 0; e < 4; e++) y = setTimeout(ot, 200 * e)
                }, 200)
            }

            function ot() {
                var e, t;
                rt(), n ? qn(e = Mt.activeElement, "textarea") || qn(e, "input") || qn(e, "select") || (t = yn(), Math.abs(t - nt) > 20 * Math.max(nt, t) / 100 && (te(!0), nt = t)) : se()
            }

            function rt() {
                var e = w.responsive || w.responsiveWidth,
                    t = w.responsiveHeight,
                    n = e && Lt.innerWidth < e,
                    i = t && Lt.innerHeight < t;
                e && t ? ie(n || i) : e ? ie(n) : t && ie(i)
            }

            function at(e) {
                var t = "all " + w.scrollingSpeed + "ms " + w.easingcss3;
                return On(e, Rt), xn(e, {
                    "-webkit-transition": t,
                    transition: t
                })
            }

            function st(e) {
                return $n(e, Rt)
            }

            function lt(e, t) {
                var n, i, o;
                n = e, mn(w.menu).forEach(function (e) {
                    w.menu && null != e && (On(mn(_t, e), Bt), $n(mn('[data-menuanchor="' + n + '"]', e), Bt))
                }), i = e, o = t, w.navigation && null != mn(Kt)[0] && (On(mn(_t, mn(Kt)[0]), Bt), $n(i ? mn('a[href="#' + i + '"]', mn(Kt)[0]) : mn("a", mn("li", mn(Kt)[0])[o]), Bt))
            }

            function ct(e) {
                var t = En(mn(Ut)[0], Wt),
                    n = En(e, Wt);
                return t == n ? "none" : n < t ? "up" : "down"
            }

            function ut(e) {
                var t;
                vn(e, an) || ((t = Mt.createElement("div")).className = Xt, t.style.height = dt(e) + "px", $n(e, an), jn(e, t))
            }

            function dt(e) {
                var t, n, i = C;
                return (w.paddingTop || w.paddingBottom) && (vn(t = e, qt) || (t = Nn(e, Wt)), n = parseInt(getComputedStyle(t)["padding-top"]) + parseInt(getComputedStyle(t)["padding-bottom"]), i = C - n), i
            }

            function pt(e, t) {
                (t ? at : st)(u), xn(u, St(e)), h.test.translate3d = e, setTimeout(function () {
                    On(u, Rt)
                }, 10)
            }

            function ft(e) {
                var t, n = mn(Wt + '[data-anchor="' + e + '"]', u)[0];
                return n || (t = void 0 !== e ? e - 1 : 0, n = mn(Wt)[t]), n
            }

            function ht(e, t) {
                var n, i, o, r, a = ft(e);
                null != a && (null == (r = mn(Jt + '[data-anchor="' + (i = t) + '"]', o = a)[0]) && (i = void 0 !== i ? i : 0, r = mn(Jt, o)[i]), n = r, yt(a) === T || vn(a, Bt) ? mt(n) : $e(a, function () {
                    mt(n)
                }))
            }

            function mt(e) {
                null != e && et(Nn(e, nn), e)
            }

            function gt(e, t, n) {
                var i = "";
                w.anchors.length && !w.lockAnchors && (e ? (null != n && (i = n), null == t && (t = e), vt(i + "/" + (r = t))) : (null != e && (r = t), vt(n))), bt()
            }

            function vt(e) {
                var t;
                w.recordHistory ? location.hash = e : n || i ? Lt.history.replaceState(void 0, void 0, "#" + e) : (t = Lt.location.href.split("#")[0], Lt.location.replace(t + "#" + e))
            }

            function yt(e) {
                if (!e) return null;
                var t = e.getAttribute("data-anchor"),
                    n = En(e);
                return null == t && (t = n), t
            }

            function bt() {
                var e = mn(Ut)[0],
                    t = mn(en, e)[0],
                    n = yt(e),
                    i = yt(t),
                    o = String(n);
                t && (o = o + "-" + i), o = o.replace("/", "-").replace("#", "");
                var r = new RegExp("\\b\\s?" + Ht + "-[^\\s]+\\b", "g");
                S.className = S.className.replace(r, ""), $n(S, Ht + "-" + o)
            }

            function xt(e) {
                var t = [];
                return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, i && ke(e) && w.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
            }

            function kt(e, t) {
                q(0, "internal"), void 0 !== t && (m = !0), et(Nn(e, nn), e), void 0 !== t && (m = !1), q(I.scrollingSpeed, "internal")
            }

            function wt(e) {
                var t, n = Math.round(e);
                w.css3 && w.autoScrolling && !w.scrollBar ? pt("translate3d(0px, -" + n + "px, 0px)", !1) : w.autoScrolling && !w.scrollBar ? (xn(u, {
                    top: -n + "px"
                }), h.test.top = -n + "px") : Pt((t = je(n)).element, t.options)
            }

            function St(e) {
                return {
                    "-webkit-transform": e,
                    "-moz-transform": e,
                    "-ms-transform": e,
                    transform: e
                }
            }

            function Tt(t, e, n) {
                "all" !== e ? f[n][e] = t : Object.keys(f[n]).forEach(function (e) {
                    f[n][e] = t
                })
            }

            function Ct(e, t, n) {
                w[e] = t, "internal" !== n && (I[e] = t)
            }

            function Et(t, n, i, o) {
                var e, r = (e = t).self != Lt && vn(e, tn) ? e.scrollLeft : !w.autoScrolling || w.scrollBar ? Fn() : e.offsetTop,
                    a = n - r,
                    s = 0;
                N = !0;
                var l = function () {
                    var e;
                    N ? (e = n, s += 20, i && (e = Lt.fp_easings[w.easing](s, r, a, i)), Pt(t, e), s < i ? setTimeout(l, 20) : void 0 !== o && o()) : s < i && o()
                };
                l()
            }

            function Pt(e, t) {
                !w.autoScrolling || w.scrollBar || e.self != Lt && vn(e, tn) ? e.self != Lt && vn(e, tn) ? e.scrollLeft = t : e.scrollTo(0, t) : e.style.top = t + "px"
            }

            function At(e, t) {
                this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = En(e, t), this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1, this.isFirst = !this.index
            }

            function $t(e) {
                At.call(this, e, Wt)
            }

            function Ot(e) {
                At.call(this, e, Jt)
            }
            return h
        }
}), window.jQuery && window.fullpage && function (t, n) {
        "use strict";
        t && n ? t.fn.fullpage = function (e) {
            e = t.extend({}, e, {
                $: t
            });
            new n(this[0], e)
        } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!")
    }(window.jQuery, window.fullpage),
    function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function (c) {
        "use strict";
        var o, r = window.Slick || {};
        o = 0, (r = function (e, t) {
            var n, i = this;
            i.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: c(e),
                appendDots: c(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><span></span></button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><span></span></button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, i.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, c.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.focussed = !1, i.interrupted = !1, i.hidden = "hidden", i.paused = !0, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = c(e), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, n = c(e).data("slick") || {}, i.options = c.extend({}, i.defaults, t, n), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, void 0 !== document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = c.proxy(i.autoPlay, i), i.autoPlayClear = c.proxy(i.autoPlayClear, i), i.autoPlayIterator = c.proxy(i.autoPlayIterator, i), i.changeSlide = c.proxy(i.changeSlide, i), i.clickHandler = c.proxy(i.clickHandler, i), i.selectHandler = c.proxy(i.selectHandler, i), i.setPosition = c.proxy(i.setPosition, i), i.swipeHandler = c.proxy(i.swipeHandler, i), i.dragHandler = c.proxy(i.dragHandler, i), i.keyHandler = c.proxy(i.keyHandler, i), i.instanceUid = o++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0)
        }).prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, r.prototype.addSlide = r.prototype.slickAdd = function (e, t, n) {
            var i = this;
            if ("boolean" == typeof t) n = t, t = null;
            else if (t < 0 || t >= i.slideCount) return !1;
            i.unload(), "number" == typeof t ? 0 === t && 0 === i.$slides.length ? c(e).appendTo(i.$slideTrack) : n ? c(e).insertBefore(i.$slides.eq(t)) : c(e).insertAfter(i.$slides.eq(t)) : !0 === n ? c(e).prependTo(i.$slideTrack) : c(e).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function (e, t) {
                c(t).attr("data-slick-index", e)
            }), i.$slidesCache = i.$slides, i.reinit()
        }, r.prototype.animateHeight = function () {
            var e;
            1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical && (e = this.$slides.eq(this.currentSlide).outerHeight(!0), this.$list.animate({
                height: e
            }, this.options.speed))
        }, r.prototype.animateSlide = function (e, t) {
            var n = {},
                i = this;
            i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (e = -e), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
                left: e
            }, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
                top: e
            }, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
                animStart: i.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: i.options.speed,
                easing: i.options.easing,
                step: function (e) {
                    e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(n)
                },
                complete: function () {
                    t && t.call()
                }
            })) : (i.applyTransition(), e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(n), t && setTimeout(function () {
                i.disableTransition(), t.call()
            }, i.options.speed))
        }, r.prototype.getNavTarget = function () {
            var e = this.options.asNavFor;
            return e && null !== e && (e = c(e).not(this.$slider)), e
        }, r.prototype.asNavFor = function (t) {
            var e = this.getNavTarget();
            null !== e && "object" == typeof e && e.each(function () {
                var e = c(this).slick("getSlick");
                e.unslicked || e.slideHandler(t, !0)
            })
        }, r.prototype.applyTransition = function (e) {
            var t = this,
                n = {};
            !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, r.prototype.autoPlay = function () {
            this.autoPlayClear(), this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed))
        }, r.prototype.autoPlayClear = function () {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, r.prototype.autoPlayIterator = function () {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, r.prototype.buildArrows = function () {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, r.prototype.buildDots = function () {
            var e, t, n = this;
            if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(c("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = t.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, r.prototype.buildOut = function () {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
                c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, r.prototype.buildRows = function () {
            var e, t, n, i = this,
                o = document.createDocumentFragment(),
                r = i.$slider.children();
            if (1 < i.options.rows) {
                for (n = i.options.slidesPerRow * i.options.rows, t = Math.ceil(r.length / n), e = 0; e < t; e++) {
                    for (var a = document.createElement("div"), s = 0; s < i.options.rows; s++) {
                        for (var l = document.createElement("div"), c = 0; c < i.options.slidesPerRow; c++) {
                            var u = e * n + (s * i.options.slidesPerRow + c);
                            r.get(u) && l.appendChild(r.get(u))
                        }
                        a.appendChild(l)
                    }
                    o.appendChild(a)
                }
                i.$slider.empty().append(o), i.$slider.children().children().children().css({
                    width: 100 / i.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, r.prototype.checkResponsive = function (e, t) {
            var n, i, o, r = this,
                a = !1,
                s = r.$slider.width(),
                l = window.innerWidth || c(window).width();
            if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = s : "min" === r.respondTo && (o = Math.min(l, s)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                for (n in i = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
                null !== i ? null !== r.activeBreakpoint && i === r.activeBreakpoint && !t || (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = i), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
            }
        }, r.prototype.changeSlide = function (e, t) {
            var n, i, o = this,
                r = c(e.currentTarget);
            switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                case "previous":
                    i = 0 == n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, t);
                    break;
                case "next":
                    i = 0 == n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, t);
                    break;
                case "index":
                    var a = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(a), !1, t), r.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, r.prototype.checkNavigable = function (e) {
            var t = this.getNavigableIndexes(),
                n = 0;
            if (e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var i in t) {
                    if (e < t[i]) {
                        e = n;
                        break
                    }
                    n = t[i]
                }
            return e
        }, r.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots && null !== e.$dots && c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, r.prototype.cleanUpSlideEvents = function () {
            this.$list.off("mouseenter.slick", c.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", c.proxy(this.interrupt, this, !1))
        }, r.prototype.cleanUpRows = function () {
            var e;
            1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
        }, r.prototype.clickHandler = function (e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, r.prototype.destroy = function (e) {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                c(this).attr("style", c(this).data("originalStyling"))
            }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
        }, r.prototype.disableTransition = function (e) {
            var t = {};
            t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
        }, r.prototype.fadeSlide = function (e, t) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(e).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), t && setTimeout(function () {
                n.disableTransition(e), t.call()
            }, n.options.speed))
        }, r.prototype.fadeSlideOut = function (e) {
            !1 === this.cssTransitions ? this.$slides.eq(e).animate({
                opacity: 0,
                zIndex: this.options.zIndex - 2
            }, this.options.speed, this.options.easing) : (this.applyTransition(e), this.$slides.eq(e).css({
                opacity: 0,
                zIndex: this.options.zIndex - 2
            }))
        }, r.prototype.filterSlides = r.prototype.slickFilter = function (e) {
            null !== e && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(e).appendTo(this.$slideTrack), this.reinit())
        }, r.prototype.focusHandler = function () {
            var n = this;
            n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (e) {
                e.stopImmediatePropagation();
                var t = c(this);
                setTimeout(function () {
                    n.options.pauseOnFocus && (n.focussed = t.is(":focus"), n.autoPlay())
                }, 0)
            })
        }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function () {
            return this.currentSlide
        }, r.prototype.getDotCount = function () {
            var e = this,
                t = 0,
                n = 0,
                i = 0;
            if (!0 === e.options.infinite)
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) i = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return i - 1
        }, r.prototype.getLeft = function (e) {
            var t, n, i, o = this,
                r = 0;
            return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (r = e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (r = o.slideOffset = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + r, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
        }, r.prototype.getOption = r.prototype.slickGetOption = function (e) {
            return this.options[e]
        }, r.prototype.getNavigableIndexes = function () {
            for (var e = this, t = 0, n = 0, i = [], o = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, 2 * e.slideCount); t < o;) i.push(t), t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return i
        }, r.prototype.getSlick = function () {
            return this
        }, r.prototype.getSlideCount = function () {
            var n, i = this,
                o = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0;
            return !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (e, t) {
                return t.offsetLeft - o + c(t).outerWidth() / 2 > -1 * i.swipeLeft ? (n = t, !1) : void 0
            }), Math.abs(c(n).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, r.prototype.goTo = r.prototype.slickGoTo = function (e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, r.prototype.init = function (e) {
            var t = this;
            c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
        }, r.prototype.initADA = function () {
            var t = this;
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (e) {
                c(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + t.instanceUid + e
                })
            }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (e) {
                c(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + t.instanceUid + e,
                    id: "slick-slide" + t.instanceUid + e
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
        }, r.prototype.initArrowEvents = function () {
            !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, this.changeSlide), this.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, this.changeSlide))
        }, r.prototype.initDotEvents = function () {
            var e = this;
            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
        }, r.prototype.initSlideEvents = function () {
            this.options.pauseOnHover && (this.$list.on("mouseenter.slick", c.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", c.proxy(this.interrupt, this, !1)))
        }, r.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, r.prototype.initUI = function () {
            !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
        }, r.prototype.keyHandler = function (e) {
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === this.options.accessibility ? this.changeSlide({
                data: {
                    message: !0 === this.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === this.options.accessibility && this.changeSlide({
                data: {
                    message: !0 === this.options.rtl ? "previous" : "next"
                }
            }))
        }, r.prototype.lazyLoad = function () {
            function e(e) {
                c("img[data-lazy]", e).each(function () {
                    var e = c(this),
                        t = c(this).attr("data-lazy"),
                        n = document.createElement("img");
                    n.onload = function () {
                        e.animate({
                            opacity: 0
                        }, 100, function () {
                            e.attr("src", t).animate({
                                opacity: 1
                            }, 200, function () {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), i.$slider.trigger("lazyLoaded", [i, e, t])
                        })
                    }, n.onerror = function () {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, e, t])
                    }, n.src = t
                })
            }
            var t, n, i = this;
            !0 === i.options.centerMode ? n = !0 === i.options.infinite ? (t = i.currentSlide + (i.options.slidesToShow / 2 + 1)) + i.options.slidesToShow + 2 : (t = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1)), i.options.slidesToShow / 2 + 1 + 2 + i.currentSlide) : (t = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide, n = Math.ceil(t + i.options.slidesToShow), !0 === i.options.fade && (0 < t && t--, n <= i.slideCount && n++)), e(i.$slider.find(".slick-slide").slice(t, n)), i.slideCount <= i.options.slidesToShow ? e(i.$slider.find(".slick-slide")) : i.currentSlide >= i.slideCount - i.options.slidesToShow ? e(i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow)) : 0 === i.currentSlide && e(i.$slider.find(".slick-cloned").slice(-1 * i.options.slidesToShow))
        }, r.prototype.loadSlider = function () {
            this.setPosition(), this.$slideTrack.css({
                opacity: 1
            }), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
        }, r.prototype.next = r.prototype.slickNext = function () {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, r.prototype.orientationChange = function () {
            this.checkResponsive(), this.setPosition()
        }, r.prototype.pause = r.prototype.slickPause = function () {
            this.autoPlayClear(), this.paused = !0
        }, r.prototype.play = r.prototype.slickPlay = function () {
            this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1
        }, r.prototype.postSlide = function (e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
        }, r.prototype.prev = r.prototype.slickPrev = function () {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, r.prototype.preventDefault = function (e) {
            e.preventDefault()
        }, r.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var t, n, i, o = this,
                r = c("img[data-lazy]", o.$slider);
            r.length ? (t = r.first(), n = t.attr("data-lazy"), (i = document.createElement("img")).onload = function () {
                t.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, t, n]), o.progressiveLazyLoad()
            }, i.onerror = function () {
                e < 3 ? setTimeout(function () {
                    o.progressiveLazyLoad(e + 1)
                }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, n]), o.progressiveLazyLoad())
            }, i.src = n) : o.$slider.trigger("allImagesLoaded", [o])
        }, r.prototype.refresh = function (e) {
            var t, n = this,
                i = n.slideCount - n.options.slidesToShow;
            !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
                currentSlide: t
            }), n.init(), e || n.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1)
        }, r.prototype.registerBreakpoints = function () {
            var e, t, n, i = this,
                o = i.options.responsive || null;
            if ("array" === c.type(o) && o.length) {
                for (e in i.respondTo = i.options.respondTo || "window", o)
                    if (n = i.breakpoints.length - 1, t = o[e].breakpoint, o.hasOwnProperty(e)) {
                        for (; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
                        i.breakpoints.push(t), i.breakpointSettings[t] = o[e].settings
                    } i.breakpoints.sort(function (e, t) {
                    return i.options.mobileFirst ? e - t : t - e
                })
            }
        }, r.prototype.reinit = function () {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, r.prototype.resize = function () {
            var e = this;
            c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
                e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, r.prototype.removeSlide = r.prototype.slickRemove = function (e, t, n) {
            var i = this;
            return e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, !(i.slideCount < 1 || e < 0 || e > i.slideCount - 1) && (i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
        }, r.prototype.setCSS = function (e) {
            var t, n, i = this,
                o = {};
            !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)
        }, r.prototype.setDimensions = function () {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, r.prototype.setFade = function () {
            var n, i = this;
            i.$slides.each(function (e, t) {
                n = i.slideWidth * e * -1, !0 === i.options.rtl ? c(t).css({
                    position: "relative",
                    right: n,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : c(t).css({
                    position: "relative",
                    left: n,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, r.prototype.setHeight = function () {
            var e;
            1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical && (e = this.$slides.eq(this.currentSlide).outerHeight(!0), this.$list.css("height", e))
        }, r.prototype.setOption = r.prototype.slickSetOption = function () {
            var e, t, n, i, o, r = this,
                a = !1;
            if ("object" === c.type(arguments[0]) ? (n = arguments[0], a = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[1], a = arguments[2], "responsive" === (n = arguments[0]) && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[n] = i;
            else if ("multiple" === o) c.each(n, function (e, t) {
                r.options[e] = t
            });
            else if ("responsive" === o)
                for (t in i)
                    if ("array" !== c.type(r.options.responsive)) r.options.responsive = [i[t]];
                    else {
                        for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(i[t])
                    } a && (r.unload(), r.reinit())
        }, r.prototype.setPosition = function () {
            this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this])
        }, r.prototype.setProps = function () {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 !== e.options.useCSS || (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, r.prototype.setSlideClasses = function (e) {
            var t, n, i, o = this,
                r = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
            o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode ? (t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t <= e && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + e, r.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? r.eq(r.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && r.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : r.length <= o.options.slidesToShow ? r.addClass("slick-active").attr("aria-hidden", "false") : (i = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? r.slice(n - (o.options.slidesToShow - i), n + i).addClass("slick-active").attr("aria-hidden", "false") : r.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
        }, r.prototype.setupInfinite = function () {
            var e, t, n, i = this;
            if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (t = null, i.slideCount > i.options.slidesToShow)) {
                for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; --e) t = e - 1, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < n; e += 1) t = e, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
                i.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    c(this).attr("id", "")
                })
            }
        }, r.prototype.interrupt = function (e) {
            e || this.autoPlay(), this.interrupted = e
        }, r.prototype.selectHandler = function (e) {
            var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
                n = (n = parseInt(t.attr("data-slick-index"))) || 0;
            return this.slideCount <= this.options.slidesToShow ? (this.setSlideClasses(n), void this.asNavFor(n)) : void this.slideHandler(n)
        }, r.prototype.slideHandler = function (e, t, n) {
            var i, o, r, a, s, l = null,
                c = this;
            return t = t || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), a = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) || !1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(a, function () {
                c.postSlide(i)
            }) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && ((s = (s = c.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight()) : void(!0 !== n ? c.animateSlide(l, function () {
                c.postSlide(o)
            }) : c.postSlide(o))))
        }, r.prototype.startLoad = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, r.prototype.swipeDirection = function () {
            var e = this.touchObject.startX - this.touchObject.curX,
                t = this.touchObject.startY - this.touchObject.curY,
                n = Math.atan2(t, e),
                i = Math.round(180 * n / Math.PI);
            return i < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i || i <= 360 && 315 <= i ? !1 === this.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= i && i <= 135 ? "down" : "up" : "vertical"
        }, r.prototype.swipeEnd = function (e) {
            var t, n, i = this;
            if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
            if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, r.prototype.swipeHandler = function (e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, r.prototype.swipeMove = function (e) {
            var t, n, i, o, r = this,
                a = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
            return !(!r.dragging || a && 1 !== a.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== a ? a[0].pageX : e.clientX, r.touchObject.curY = void 0 !== a ? a[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), "vertical" !== (n = r.swipeDirection()) ? (void 0 !== e.originalEvent && 4 < r.touchObject.swipeLength && e.preventDefault(), o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), i = r.touchObject.swipeLength, (r.touchObject.edgeHit = !1) === r.options.infinite && (0 === r.currentSlide && "right" === n || r.currentSlide >= r.getDotCount() && "left" === n) && (i = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = t + i * o : r.swipeLeft = t + i * (r.$list.height() / r.listWidth) * o, !0 === r.options.verticalSwiping && (r.swipeLeft = t + i * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
        }, r.prototype.swipeStart = function (e) {
            var t, n = this;
            return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? !(n.touchObject = {}) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
        }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function () {
            null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
        }, r.prototype.unload = function () {
            var e = this;
            c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, r.prototype.unslick = function (e) {
            this.$slider.trigger("unslick", [this, e]), this.destroy()
        }, r.prototype.updateArrows = function () {
            var e = this;
            Math.floor(e.options.slidesToShow / 2);
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, r.prototype.updateDots = function () {
            null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, r.prototype.visibility = function () {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, c.fn.slick = function () {
            for (var e, t = arguments[0], n = Array.prototype.slice.call(arguments, 1), i = this.length, o = 0; o < i; o++)
                if ("object" == typeof t || void 0 === t ? this[o].slick = new r(this[o], t) : e = this[o].slick[t].apply(this[o].slick, n), void 0 !== e) return e;
            return this
        }
    }), $(document).ready(function () {
        $("[data-fancybox]").fancybox({
            thumbs: !1,
            fullScreen: !1,
            slideShow: !1,
            gutter: 0,
            closeClickOutside: !0,
            autoFocus: !1,
            animationEffect: "fade",
            beforeLoad: function (e, t) {
                $(".fixed").css("padding-right", function () {
                    var e = $("<div>").css({
                            height: "50px",
                            width: "50px"
                        }),
                        t = $("<div>").css({
                            height: "200px"
                        });
                    $("body").append(e.append(t));
                    var n = $("div", e).innerWidth();
                    e.css("overflow-y", "scroll");
                    var i = $("div", e).innerWidth();
                    return $(e).remove(), n - i
                }())
            },
            afterShow: function (e, t) {
                $(".popup").addClass("show"), $(".form_success").each(function () {
                    var e = $(this).closest(".form").find("form").outerHeight();
                    $(this).css("height", e)
                })
            },
            beforeClose: function (e, t) {
                $(".popup").removeClass("show")
            },
            afterClose: function (e, t) {
                $(".fixed").removeAttr("style")
            }
        }), $(".sidebar_mobile__btn").find(".btn").on("click", function () {
            $(".sidebar").hasClass("sidebar_open") ? ($(this).removeClass("open"), $(".sidebar").removeClass("sidebar_open")) : ($(this).addClass("open"), $(".sidebar").addClass("sidebar_open"))
        }), $(".sidebar_nav ul.nav li").on("click", function () {
            $(".sidebar").removeClass("sidebar_open"), $(".sidebar_mobile__btn").find(".btn").removeClass("open")
        }), $(".map_nav li").on("click", function () {
            $(this).siblings("li").removeClass("active"), $(this).addClass("active")
        }), $(".gallery_slider").each(function () {
            var e = $(this).data("countslides");
            $(this).slick({
                slidesToShow: e,
                slidesToScroll: 1,
                arrows: !0,
                fade: !1,
                infinite: !0,
                dots: !1,
                speed: 500,
                autoplay: !0,
                autoplaySpeed: 1e3,
                draggable: !0,
                centerMode: !1,
                appendArrows: $(this).closest(".slider_block").find(".slider_arrows"),
                prevArrow: '<span class="arrow arrow_prev"><span class="icon icon-arrow_left"></span></span>',
                nextArrow: '<span class="arrow arrow_next"><span class="icon icon-arrow_right"></span></span>',
                responsive: [{
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        })
    }), $(document).ready(function () {
        $('input[name="phone"]').inputmask("+7 (999) 999-99-99", {
            showMaskOnHover: !1
        }), $(".form_success").each(function () {
            var e = $(this).closest(".form").find("form").outerHeight();
            $(this).css("height", e)
        })
    }), $(document).on("change", "input.form_input", function () {
        "" !== $(this).val() ? ($(this).addClass("active"), $(this).parent(".form_row").find("label").addClass("active")) : ($(this).removeClass("active"), $(this).parent(".form_row").find("label").removeClass("active"))
    }), $(document).on("change", 'input[name="politic"]', function () {
        $(this).is(":checked") ? $(this).closest(".form").find(".button").removeClass("disabled") : $(this).closest(".form").find(".button").addClass("disabled")
    }), $.ajaxSetup({
        complete: function () {
            $('input[name="phone"]').inputmask("+7 (999) 999-99-99", {
                showMaskOnHover: !1
            })
        }
    });

