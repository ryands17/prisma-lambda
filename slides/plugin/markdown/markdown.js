!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e =
        'undefined' != typeof globalThis
          ? globalThis
          : e || self).RevealMarkdown = t())
})(this, function () {
  'use strict'
  var e =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {}
  function t(e, t, n) {
    return (
      e(
        (n = {
          path: t,
          exports: {},
          require: function (e, t) {
            return (function () {
              throw new Error(
                'Dynamic requires are not currently supported by @rollup/plugin-commonjs'
              )
            })(null == t && n.path)
          },
        }),
        n.exports
      ),
      n.exports
    )
  }
  var n = function (e) {
      return e && e.Math == Math && e
    },
    r =
      n('object' == typeof globalThis && globalThis) ||
      n('object' == typeof window && window) ||
      n('object' == typeof self && self) ||
      n('object' == typeof e && e) ||
      Function('return this')(),
    i = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    },
    o = !i(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7
          },
        })[1]
      )
    }),
    a = {}.propertyIsEnumerable,
    l = Object.getOwnPropertyDescriptor,
    s = {
      f:
        l && !a.call({ 1: 2 }, 1)
          ? function (e) {
              var t = l(this, e)
              return !!t && t.enumerable
            }
          : a,
    },
    c = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      }
    },
    u = {}.toString,
    f = function (e) {
      return u.call(e).slice(8, -1)
    },
    p = ''.split,
    h = i(function () {
      return !Object('z').propertyIsEnumerable(0)
    })
      ? function (e) {
          return 'String' == f(e) ? p.call(e, '') : Object(e)
        }
      : Object,
    g = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e)
      return e
    },
    d = function (e) {
      return h(g(e))
    },
    v = function (e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e
    },
    y = function (e, t) {
      if (!v(e)) return e
      var n, r
      if (t && 'function' == typeof (n = e.toString) && !v((r = n.call(e))))
        return r
      if ('function' == typeof (n = e.valueOf) && !v((r = n.call(e)))) return r
      if (!t && 'function' == typeof (n = e.toString) && !v((r = n.call(e))))
        return r
      throw TypeError("Can't convert object to primitive value")
    },
    b = {}.hasOwnProperty,
    m = function (e, t) {
      return b.call(e, t)
    },
    k = r.document,
    x = v(k) && v(k.createElement),
    w = function (e) {
      return x ? k.createElement(e) : {}
    },
    S =
      !o &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(w('div'), 'a', {
            get: function () {
              return 7
            },
          }).a
        )
      }),
    E = Object.getOwnPropertyDescriptor,
    _ = {
      f: o
        ? E
        : function (e, t) {
            if (((e = d(e)), (t = y(t, !0)), S))
              try {
                return E(e, t)
              } catch (e) {}
            if (m(e, t)) return c(!s.f.call(e, t), e[t])
          },
    },
    A = function (e) {
      if (!v(e)) throw TypeError(String(e) + ' is not an object')
      return e
    },
    T = Object.defineProperty,
    O = {
      f: o
        ? T
        : function (e, t, n) {
            if ((A(e), (t = y(t, !0)), A(n), S))
              try {
                return T(e, t, n)
              } catch (e) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported')
            return 'value' in n && (e[t] = n.value), e
          },
    },
    R = o
      ? function (e, t, n) {
          return O.f(e, t, c(1, n))
        }
      : function (e, t, n) {
          return (e[t] = n), e
        },
    j = function (e, t) {
      try {
        R(r, e, t)
      } catch (n) {
        r[e] = t
      }
      return t
    },
    z = '__core-js_shared__',
    $ = r[z] || j(z, {}),
    P = Function.toString
  'function' != typeof $.inspectSource &&
    ($.inspectSource = function (e) {
      return P.call(e)
    })
  var I,
    C,
    L,
    M = $.inspectSource,
    N = r.WeakMap,
    q = 'function' == typeof N && /native code/.test(M(N)),
    D = t(function (e) {
      ;(e.exports = function (e, t) {
        return $[e] || ($[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: '3.6.5',
        mode: 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
      })
    }),
    U = 0,
    Z = Math.random(),
    F = function (e) {
      return (
        'Symbol(' +
        String(void 0 === e ? '' : e) +
        ')_' +
        (++U + Z).toString(36)
      )
    },
    G = D('keys'),
    H = function (e) {
      return G[e] || (G[e] = F(e))
    },
    W = {},
    B = r.WeakMap
  if (q) {
    var V = new B(),
      K = V.get,
      X = V.has,
      Y = V.set
    ;(I = function (e, t) {
      return Y.call(V, e, t), t
    }),
      (C = function (e) {
        return K.call(V, e) || {}
      }),
      (L = function (e) {
        return X.call(V, e)
      })
  } else {
    var J = H('state')
    ;(W[J] = !0),
      (I = function (e, t) {
        return R(e, J, t), t
      }),
      (C = function (e) {
        return m(e, J) ? e[J] : {}
      }),
      (L = function (e) {
        return m(e, J)
      })
  }
  var Q,
    ee,
    te = {
      set: I,
      get: C,
      has: L,
      enforce: function (e) {
        return L(e) ? C(e) : I(e, {})
      },
      getterFor: function (e) {
        return function (t) {
          var n
          if (!v(t) || (n = C(t)).type !== e)
            throw TypeError('Incompatible receiver, ' + e + ' required')
          return n
        }
      },
    },
    ne = t(function (e) {
      var t = te.get,
        n = te.enforce,
        i = String(String).split('String')
      ;(e.exports = function (e, t, o, a) {
        var l = !!a && !!a.unsafe,
          s = !!a && !!a.enumerable,
          c = !!a && !!a.noTargetGet
        'function' == typeof o &&
          ('string' != typeof t || m(o, 'name') || R(o, 'name', t),
          (n(o).source = i.join('string' == typeof t ? t : ''))),
          e !== r
            ? (l ? !c && e[t] && (s = !0) : delete e[t],
              s ? (e[t] = o) : R(e, t, o))
            : s
            ? (e[t] = o)
            : j(t, o)
      })(Function.prototype, 'toString', function () {
        return ('function' == typeof this && t(this).source) || M(this)
      })
    }),
    re = r,
    ie = function (e) {
      return 'function' == typeof e ? e : void 0
    },
    oe = function (e, t) {
      return arguments.length < 2
        ? ie(re[e]) || ie(r[e])
        : (re[e] && re[e][t]) || (r[e] && r[e][t])
    },
    ae = Math.ceil,
    le = Math.floor,
    se = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? le : ae)(e)
    },
    ce = Math.min,
    ue = function (e) {
      return e > 0 ? ce(se(e), 9007199254740991) : 0
    },
    fe = Math.max,
    pe = Math.min,
    he = function (e, t) {
      var n = se(e)
      return n < 0 ? fe(n + t, 0) : pe(n, t)
    },
    ge = function (e) {
      return function (t, n, r) {
        var i,
          o = d(t),
          a = ue(o.length),
          l = he(r, a)
        if (e && n != n) {
          for (; a > l; ) if ((i = o[l++]) != i) return !0
        } else
          for (; a > l; l++) if ((e || l in o) && o[l] === n) return e || l || 0
        return !e && -1
      }
    },
    de = { includes: ge(!0), indexOf: ge(!1) },
    ve = de.indexOf,
    ye = function (e, t) {
      var n,
        r = d(e),
        i = 0,
        o = []
      for (n in r) !m(W, n) && m(r, n) && o.push(n)
      for (; t.length > i; ) m(r, (n = t[i++])) && (~ve(o, n) || o.push(n))
      return o
    },
    be = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ],
    me = be.concat('length', 'prototype'),
    ke = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return ye(e, me)
        },
    },
    xe = { f: Object.getOwnPropertySymbols },
    we =
      oe('Reflect', 'ownKeys') ||
      function (e) {
        var t = ke.f(A(e)),
          n = xe.f
        return n ? t.concat(n(e)) : t
      },
    Se = function (e, t) {
      for (var n = we(t), r = O.f, i = _.f, o = 0; o < n.length; o++) {
        var a = n[o]
        m(e, a) || r(e, a, i(t, a))
      }
    },
    Ee = /#|\.prototype\./,
    _e = function (e, t) {
      var n = Te[Ae(e)]
      return n == Re || (n != Oe && ('function' == typeof t ? i(t) : !!t))
    },
    Ae = (_e.normalize = function (e) {
      return String(e).replace(Ee, '.').toLowerCase()
    }),
    Te = (_e.data = {}),
    Oe = (_e.NATIVE = 'N'),
    Re = (_e.POLYFILL = 'P'),
    je = _e,
    ze = _.f,
    $e = function (e, t) {
      var n,
        i,
        o,
        a,
        l,
        s = e.target,
        c = e.global,
        u = e.stat
      if ((n = c ? r : u ? r[s] || j(s, {}) : (r[s] || {}).prototype))
        for (i in t) {
          if (
            ((a = t[i]),
            (o = e.noTargetGet ? (l = ze(n, i)) && l.value : n[i]),
            !je(c ? i : s + (u ? '.' : '#') + i, e.forced) && void 0 !== o)
          ) {
            if (typeof a == typeof o) continue
            Se(a, o)
          }
          ;(e.sham || (o && o.sham)) && R(a, 'sham', !0), ne(n, i, a, e)
        }
    },
    Pe =
      Array.isArray ||
      function (e) {
        return 'Array' == f(e)
      },
    Ie = function (e) {
      return Object(g(e))
    },
    Ce = function (e, t, n) {
      var r = y(t)
      r in e ? O.f(e, r, c(0, n)) : (e[r] = n)
    },
    Le =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        return !String(Symbol())
      }),
    Me = Le && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    Ne = D('wks'),
    qe = r.Symbol,
    De = Me ? qe : (qe && qe.withoutSetter) || F,
    Ue = function (e) {
      return (
        m(Ne, e) ||
          (Le && m(qe, e) ? (Ne[e] = qe[e]) : (Ne[e] = De('Symbol.' + e))),
        Ne[e]
      )
    },
    Ze = Ue('species'),
    Fe = function (e, t) {
      var n
      return (
        Pe(e) &&
          ('function' != typeof (n = e.constructor) ||
          (n !== Array && !Pe(n.prototype))
            ? v(n) && null === (n = n[Ze]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      )
    },
    Ge = oe('navigator', 'userAgent') || '',
    He = r.process,
    We = He && He.versions,
    Be = We && We.v8
  Be
    ? (ee = (Q = Be.split('.'))[0] + Q[1])
    : Ge &&
      (!(Q = Ge.match(/Edge\/(\d+)/)) || Q[1] >= 74) &&
      (Q = Ge.match(/Chrome\/(\d+)/)) &&
      (ee = Q[1])
  var Ve = ee && +ee,
    Ke = Ue('species'),
    Xe = function (e) {
      return (
        Ve >= 51 ||
        !i(function () {
          var t = []
          return (
            ((t.constructor = {})[Ke] = function () {
              return { foo: 1 }
            }),
            1 !== t[e](Boolean).foo
          )
        })
      )
    },
    Ye = Ue('isConcatSpreadable'),
    Je = 9007199254740991,
    Qe = 'Maximum allowed index exceeded',
    et =
      Ve >= 51 ||
      !i(function () {
        var e = []
        return (e[Ye] = !1), e.concat()[0] !== e
      }),
    tt = Xe('concat'),
    nt = function (e) {
      if (!v(e)) return !1
      var t = e[Ye]
      return void 0 !== t ? !!t : Pe(e)
    }
  $e(
    { target: 'Array', proto: !0, forced: !et || !tt },
    {
      concat: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a = Ie(this),
          l = Fe(a, 0),
          s = 0
        for (t = -1, r = arguments.length; t < r; t++)
          if (nt((o = -1 === t ? a : arguments[t]))) {
            if (s + (i = ue(o.length)) > Je) throw TypeError(Qe)
            for (n = 0; n < i; n++, s++) n in o && Ce(l, s, o[n])
          } else {
            if (s >= Je) throw TypeError(Qe)
            Ce(l, s++, o)
          }
        return (l.length = s), l
      },
    }
  )
  var rt = function (e) {
      if ('function' != typeof e)
        throw TypeError(String(e) + ' is not a function')
      return e
    },
    it = function (e, t, n) {
      if ((rt(e), void 0 === t)) return e
      switch (n) {
        case 0:
          return function () {
            return e.call(t)
          }
        case 1:
          return function (n) {
            return e.call(t, n)
          }
        case 2:
          return function (n, r) {
            return e.call(t, n, r)
          }
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    },
    ot = [].push,
    at = function (e) {
      var t = 1 == e,
        n = 2 == e,
        r = 3 == e,
        i = 4 == e,
        o = 6 == e,
        a = 5 == e || o
      return function (l, s, c, u) {
        for (
          var f,
            p,
            g = Ie(l),
            d = h(g),
            v = it(s, c, 3),
            y = ue(d.length),
            b = 0,
            m = u || Fe,
            k = t ? m(l, y) : n ? m(l, 0) : void 0;
          y > b;
          b++
        )
          if ((a || b in d) && ((p = v((f = d[b]), b, g)), e))
            if (t) k[b] = p
            else if (p)
              switch (e) {
                case 3:
                  return !0
                case 5:
                  return f
                case 6:
                  return b
                case 2:
                  ot.call(k, f)
              }
            else if (i) return !1
        return o ? -1 : r || i ? i : k
      }
    },
    lt = {
      forEach: at(0),
      map: at(1),
      filter: at(2),
      some: at(3),
      every: at(4),
      find: at(5),
      findIndex: at(6),
    },
    st = function (e, t) {
      var n = [][e]
      return (
        !!n &&
        i(function () {
          n.call(
            null,
            t ||
              function () {
                throw 1
              },
            1
          )
        })
      )
    },
    ct = Object.defineProperty,
    ut = {},
    ft = function (e) {
      throw e
    },
    pt = function (e, t) {
      if (m(ut, e)) return ut[e]
      t || (t = {})
      var n = [][e],
        r = !!m(t, 'ACCESSORS') && t.ACCESSORS,
        a = m(t, 0) ? t[0] : ft,
        l = m(t, 1) ? t[1] : void 0
      return (ut[e] =
        !!n &&
        !i(function () {
          if (r && !o) return !0
          var e = { length: -1 }
          r ? ct(e, 1, { enumerable: !0, get: ft }) : (e[1] = 1),
            n.call(e, a, l)
        }))
    },
    ht = lt.forEach,
    gt = st('forEach'),
    dt = pt('forEach'),
    vt =
      gt && dt
        ? [].forEach
        : function (e) {
            return ht(this, e, arguments.length > 1 ? arguments[1] : void 0)
          }
  $e({ target: 'Array', proto: !0, forced: [].forEach != vt }, { forEach: vt })
  var yt,
    bt =
      Object.keys ||
      function (e) {
        return ye(e, be)
      },
    mt = o
      ? Object.defineProperties
      : function (e, t) {
          A(e)
          for (var n, r = bt(t), i = r.length, o = 0; i > o; )
            O.f(e, (n = r[o++]), t[n])
          return e
        },
    kt = oe('document', 'documentElement'),
    xt = H('IE_PROTO'),
    wt = function () {},
    St = function (e) {
      return '<script>' + e + '</' + 'script>'
    },
    Et = function () {
      try {
        yt = document.domain && new ActiveXObject('htmlfile')
      } catch (e) {}
      var e, t
      Et = yt
        ? (function (e) {
            e.write(St('')), e.close()
            var t = e.parentWindow.Object
            return (e = null), t
          })(yt)
        : (((t = w('iframe')).style.display = 'none'),
          kt.appendChild(t),
          (t.src = String('javascript:')),
          (e = t.contentWindow.document).open(),
          e.write(St('document.F=Object')),
          e.close(),
          e.F)
      for (var n = be.length; n--; ) delete Et.prototype[be[n]]
      return Et()
    }
  W[xt] = !0
  var _t =
      Object.create ||
      function (e, t) {
        var n
        return (
          null !== e
            ? ((wt.prototype = A(e)),
              (n = new wt()),
              (wt.prototype = null),
              (n[xt] = e))
            : (n = Et()),
          void 0 === t ? n : mt(n, t)
        )
      },
    At = Ue('unscopables'),
    Tt = Array.prototype
  null == Tt[At] && O.f(Tt, At, { configurable: !0, value: _t(null) })
  var Ot,
    Rt,
    jt,
    zt = function (e) {
      Tt[At][e] = !0
    },
    $t = {},
    Pt = !i(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      )
    }),
    It = H('IE_PROTO'),
    Ct = Object.prototype,
    Lt = Pt
      ? Object.getPrototypeOf
      : function (e) {
          return (
            (e = Ie(e)),
            m(e, It)
              ? e[It]
              : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? Ct
              : null
          )
        },
    Mt = Ue('iterator'),
    Nt = !1
  ;[].keys &&
    ('next' in (jt = [].keys())
      ? (Rt = Lt(Lt(jt))) !== Object.prototype && (Ot = Rt)
      : (Nt = !0)),
    null == Ot && (Ot = {}),
    m(Ot, Mt) ||
      R(Ot, Mt, function () {
        return this
      })
  var qt = { IteratorPrototype: Ot, BUGGY_SAFARI_ITERATORS: Nt },
    Dt = O.f,
    Ut = Ue('toStringTag'),
    Zt = function (e, t, n) {
      e &&
        !m((e = n ? e : e.prototype), Ut) &&
        Dt(e, Ut, { configurable: !0, value: t })
    },
    Ft = qt.IteratorPrototype,
    Gt = function () {
      return this
    },
    Ht =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var e,
              t = !1,
              n = {}
            try {
              ;(e = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__'
              ).set).call(n, []),
                (t = n instanceof Array)
            } catch (e) {}
            return function (n, r) {
              return (
                A(n),
                (function (e) {
                  if (!v(e) && null !== e)
                    throw TypeError(
                      "Can't set " + String(e) + ' as a prototype'
                    )
                })(r),
                t ? e.call(n, r) : (n.__proto__ = r),
                n
              )
            }
          })()
        : void 0),
    Wt = qt.IteratorPrototype,
    Bt = qt.BUGGY_SAFARI_ITERATORS,
    Vt = Ue('iterator'),
    Kt = 'keys',
    Xt = 'values',
    Yt = 'entries',
    Jt = function () {
      return this
    },
    Qt = function (e, t, n, r, i, o, a) {
      !(function (e, t, n) {
        var r = t + ' Iterator'
        ;(e.prototype = _t(Ft, { next: c(1, n) })), Zt(e, r, !1), ($t[r] = Gt)
      })(n, t, r)
      var l,
        s,
        u,
        f = function (e) {
          if (e === i && v) return v
          if (!Bt && e in g) return g[e]
          switch (e) {
            case Kt:
            case Xt:
            case Yt:
              return function () {
                return new n(this, e)
              }
          }
          return function () {
            return new n(this)
          }
        },
        p = t + ' Iterator',
        h = !1,
        g = e.prototype,
        d = g[Vt] || g['@@iterator'] || (i && g[i]),
        v = (!Bt && d) || f(i),
        y = ('Array' == t && g.entries) || d
      if (
        (y &&
          ((l = Lt(y.call(new e()))),
          Wt !== Object.prototype &&
            l.next &&
            (Lt(l) !== Wt &&
              (Ht ? Ht(l, Wt) : 'function' != typeof l[Vt] && R(l, Vt, Jt)),
            Zt(l, p, !0))),
        i == Xt &&
          d &&
          d.name !== Xt &&
          ((h = !0),
          (v = function () {
            return d.call(this)
          })),
        g[Vt] !== v && R(g, Vt, v),
        ($t[t] = v),
        i)
      )
        if (((s = { values: f(Xt), keys: o ? v : f(Kt), entries: f(Yt) }), a))
          for (u in s) (Bt || h || !(u in g)) && ne(g, u, s[u])
        else $e({ target: t, proto: !0, forced: Bt || h }, s)
      return s
    },
    en = 'Array Iterator',
    tn = te.set,
    nn = te.getterFor(en),
    rn = Qt(
      Array,
      'Array',
      function (e, t) {
        tn(this, { type: en, target: d(e), index: 0, kind: t })
      },
      function () {
        var e = nn(this),
          t = e.target,
          n = e.kind,
          r = e.index++
        return !t || r >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : 'keys' == n
          ? { value: r, done: !1 }
          : 'values' == n
          ? { value: t[r], done: !1 }
          : { value: [r, t[r]], done: !1 }
      },
      'values'
    )
  ;($t.Arguments = $t.Array), zt('keys'), zt('values'), zt('entries')
  var on = [].join,
    an = h != Object,
    ln = st('join', ',')
  $e(
    { target: 'Array', proto: !0, forced: an || !ln },
    {
      join: function (e) {
        return on.call(d(this), void 0 === e ? ',' : e)
      },
    }
  )
  var sn = Xe('slice'),
    cn = pt('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
    un = Ue('species'),
    fn = [].slice,
    pn = Math.max
  $e(
    { target: 'Array', proto: !0, forced: !sn || !cn },
    {
      slice: function (e, t) {
        var n,
          r,
          i,
          o = d(this),
          a = ue(o.length),
          l = he(e, a),
          s = he(void 0 === t ? a : t, a)
        if (
          Pe(o) &&
          ('function' != typeof (n = o.constructor) ||
          (n !== Array && !Pe(n.prototype))
            ? v(n) && null === (n = n[un]) && (n = void 0)
            : (n = void 0),
          n === Array || void 0 === n)
        )
          return fn.call(o, l, s)
        for (
          r = new (void 0 === n ? Array : n)(pn(s - l, 0)), i = 0;
          l < s;
          l++, i++
        )
          l in o && Ce(r, i, o[l])
        return (r.length = i), r
      },
    }
  )
  var hn = O.f,
    gn = Function.prototype,
    dn = gn.toString,
    vn = /^\s*function ([^ (]*)/,
    yn = 'name'
  o &&
    !(yn in gn) &&
    hn(gn, yn, {
      configurable: !0,
      get: function () {
        try {
          return dn.call(this).match(vn)[1]
        } catch (e) {
          return ''
        }
      },
    })
  var bn = {}
  bn[Ue('toStringTag')] = 'z'
  var mn = '[object z]' === String(bn),
    kn = Ue('toStringTag'),
    xn =
      'Arguments' ==
      f(
        (function () {
          return arguments
        })()
      ),
    wn = mn
      ? f
      : function (e) {
          var t, n, r
          return void 0 === e
            ? 'Undefined'
            : null === e
            ? 'Null'
            : 'string' ==
              typeof (n = (function (e, t) {
                try {
                  return e[t]
                } catch (e) {}
              })((t = Object(e)), kn))
            ? n
            : xn
            ? f(t)
            : 'Object' == (r = f(t)) && 'function' == typeof t.callee
            ? 'Arguments'
            : r
        },
    Sn = mn
      ? {}.toString
      : function () {
          return '[object ' + wn(this) + ']'
        }
  mn || ne(Object.prototype, 'toString', Sn, { unsafe: !0 })
  var En = r.Promise,
    _n = Ue('species'),
    An = function (e) {
      var t = oe(e),
        n = O.f
      o &&
        t &&
        !t[_n] &&
        n(t, _n, {
          configurable: !0,
          get: function () {
            return this
          },
        })
    },
    Tn = Ue('iterator'),
    On = Array.prototype,
    Rn = Ue('iterator'),
    jn = function (e, t, n, r) {
      try {
        return r ? t(A(n)[0], n[1]) : t(n)
      } catch (t) {
        var i = e.return
        throw (void 0 !== i && A(i.call(e)), t)
      }
    },
    zn = t(function (e) {
      var t = function (e, t) {
        ;(this.stopped = e), (this.result = t)
      }
      ;(e.exports = function (e, n, r, i, o) {
        var a,
          l,
          s,
          c,
          u,
          f,
          p,
          h,
          g = it(n, r, i ? 2 : 1)
        if (o) a = e
        else {
          if (
            'function' !=
            typeof (l = (function (e) {
              if (null != e) return e[Rn] || e['@@iterator'] || $t[wn(e)]
            })(e))
          )
            throw TypeError('Target is not iterable')
          if (void 0 !== (h = l) && ($t.Array === h || On[Tn] === h)) {
            for (s = 0, c = ue(e.length); c > s; s++)
              if (
                (u = i ? g(A((p = e[s]))[0], p[1]) : g(e[s])) &&
                u instanceof t
              )
                return u
            return new t(!1)
          }
          a = l.call(e)
        }
        for (f = a.next; !(p = f.call(a)).done; )
          if (
            'object' == typeof (u = jn(a, g, p.value, i)) &&
            u &&
            u instanceof t
          )
            return u
        return new t(!1)
      }).stop = function (e) {
        return new t(!0, e)
      }
    }),
    $n = Ue('iterator'),
    Pn = !1
  try {
    var In = 0,
      Cn = {
        next: function () {
          return { done: !!In++ }
        },
        return: function () {
          Pn = !0
        },
      }
    ;(Cn[$n] = function () {
      return this
    }),
      Array.from(Cn, function () {
        throw 2
      })
  } catch (e) {}
  var Ln,
    Mn,
    Nn,
    qn = Ue('species'),
    Dn = function (e, t) {
      var n,
        r = A(e).constructor
      return void 0 === r || null == (n = A(r)[qn]) ? t : rt(n)
    },
    Un = /(iphone|ipod|ipad).*applewebkit/i.test(Ge),
    Zn = r.location,
    Fn = r.setImmediate,
    Gn = r.clearImmediate,
    Hn = r.process,
    Wn = r.MessageChannel,
    Bn = r.Dispatch,
    Vn = 0,
    Kn = {},
    Xn = 'onreadystatechange',
    Yn = function (e) {
      if (Kn.hasOwnProperty(e)) {
        var t = Kn[e]
        delete Kn[e], t()
      }
    },
    Jn = function (e) {
      return function () {
        Yn(e)
      }
    },
    Qn = function (e) {
      Yn(e.data)
    },
    er = function (e) {
      r.postMessage(e + '', Zn.protocol + '//' + Zn.host)
    }
  ;(Fn && Gn) ||
    ((Fn = function (e) {
      for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++])
      return (
        (Kn[++Vn] = function () {
          ;('function' == typeof e ? e : Function(e)).apply(void 0, t)
        }),
        Ln(Vn),
        Vn
      )
    }),
    (Gn = function (e) {
      delete Kn[e]
    }),
    'process' == f(Hn)
      ? (Ln = function (e) {
          Hn.nextTick(Jn(e))
        })
      : Bn && Bn.now
      ? (Ln = function (e) {
          Bn.now(Jn(e))
        })
      : Wn && !Un
      ? ((Nn = (Mn = new Wn()).port2),
        (Mn.port1.onmessage = Qn),
        (Ln = it(Nn.postMessage, Nn, 1)))
      : !r.addEventListener ||
        'function' != typeof postMessage ||
        r.importScripts ||
        i(er) ||
        'file:' === Zn.protocol
      ? (Ln =
          Xn in w('script')
            ? function (e) {
                kt.appendChild(w('script')).onreadystatechange = function () {
                  kt.removeChild(this), Yn(e)
                }
              }
            : function (e) {
                setTimeout(Jn(e), 0)
              })
      : ((Ln = er), r.addEventListener('message', Qn, !1)))
  var tr,
    nr,
    rr,
    ir,
    or,
    ar,
    lr,
    sr,
    cr = { set: Fn, clear: Gn },
    ur = _.f,
    fr = cr.set,
    pr = r.MutationObserver || r.WebKitMutationObserver,
    hr = r.process,
    gr = r.Promise,
    dr = 'process' == f(hr),
    vr = ur(r, 'queueMicrotask'),
    yr = vr && vr.value
  yr ||
    ((tr = function () {
      var e, t
      for (dr && (e = hr.domain) && e.exit(); nr; ) {
        ;(t = nr.fn), (nr = nr.next)
        try {
          t()
        } catch (e) {
          throw (nr ? ir() : (rr = void 0), e)
        }
      }
      ;(rr = void 0), e && e.enter()
    }),
    dr
      ? (ir = function () {
          hr.nextTick(tr)
        })
      : pr && !Un
      ? ((or = !0),
        (ar = document.createTextNode('')),
        new pr(tr).observe(ar, { characterData: !0 }),
        (ir = function () {
          ar.data = or = !or
        }))
      : gr && gr.resolve
      ? ((lr = gr.resolve(void 0)),
        (sr = lr.then),
        (ir = function () {
          sr.call(lr, tr)
        }))
      : (ir = function () {
          fr.call(r, tr)
        }))
  var br,
    mr,
    kr,
    xr,
    wr =
      yr ||
      function (e) {
        var t = { fn: e, next: void 0 }
        rr && (rr.next = t), nr || ((nr = t), ir()), (rr = t)
      },
    Sr = function (e) {
      var t, n
      ;(this.promise = new e(function (e, r) {
        if (void 0 !== t || void 0 !== n)
          throw TypeError('Bad Promise constructor')
        ;(t = e), (n = r)
      })),
        (this.resolve = rt(t)),
        (this.reject = rt(n))
    },
    Er = {
      f: function (e) {
        return new Sr(e)
      },
    },
    _r = function (e, t) {
      if ((A(e), v(t) && t.constructor === e)) return t
      var n = Er.f(e)
      return (0, n.resolve)(t), n.promise
    },
    Ar = function (e) {
      try {
        return { error: !1, value: e() }
      } catch (e) {
        return { error: !0, value: e }
      }
    },
    Tr = cr.set,
    Or = Ue('species'),
    Rr = 'Promise',
    jr = te.get,
    zr = te.set,
    $r = te.getterFor(Rr),
    Pr = En,
    Ir = r.TypeError,
    Cr = r.document,
    Lr = r.process,
    Mr = oe('fetch'),
    Nr = Er.f,
    qr = Nr,
    Dr = 'process' == f(Lr),
    Ur = !!(Cr && Cr.createEvent && r.dispatchEvent),
    Zr = 'unhandledrejection',
    Fr = je(Rr, function () {
      if (!(M(Pr) !== String(Pr))) {
        if (66 === Ve) return !0
        if (!Dr && 'function' != typeof PromiseRejectionEvent) return !0
      }
      if (Ve >= 51 && /native code/.test(Pr)) return !1
      var e = Pr.resolve(1),
        t = function (e) {
          e(
            function () {},
            function () {}
          )
        }
      return (
        ((e.constructor = {})[Or] = t), !(e.then(function () {}) instanceof t)
      )
    }),
    Gr =
      Fr ||
      !(function (e, t) {
        if (!t && !Pn) return !1
        var n = !1
        try {
          var r = {}
          ;(r[$n] = function () {
            return {
              next: function () {
                return { done: (n = !0) }
              },
            }
          }),
            e(r)
        } catch (e) {}
        return n
      })(function (e) {
        Pr.all(e).catch(function () {})
      }),
    Hr = function (e) {
      var t
      return !(!v(e) || 'function' != typeof (t = e.then)) && t
    },
    Wr = function (e, t, n) {
      if (!t.notified) {
        t.notified = !0
        var r = t.reactions
        wr(function () {
          for (var i = t.value, o = 1 == t.state, a = 0; r.length > a; ) {
            var l,
              s,
              c,
              u = r[a++],
              f = o ? u.ok : u.fail,
              p = u.resolve,
              h = u.reject,
              g = u.domain
            try {
              f
                ? (o || (2 === t.rejection && Xr(e, t), (t.rejection = 1)),
                  !0 === f
                    ? (l = i)
                    : (g && g.enter(), (l = f(i)), g && (g.exit(), (c = !0))),
                  l === u.promise
                    ? h(Ir('Promise-chain cycle'))
                    : (s = Hr(l))
                    ? s.call(l, p, h)
                    : p(l))
                : h(i)
            } catch (e) {
              g && !c && g.exit(), h(e)
            }
          }
          ;(t.reactions = []), (t.notified = !1), n && !t.rejection && Vr(e, t)
        })
      }
    },
    Br = function (e, t, n) {
      var i, o
      Ur
        ? (((i = Cr.createEvent('Event')).promise = t),
          (i.reason = n),
          i.initEvent(e, !1, !0),
          r.dispatchEvent(i))
        : (i = { promise: t, reason: n }),
        (o = r['on' + e])
          ? o(i)
          : e === Zr &&
            (function (e, t) {
              var n = r.console
              n &&
                n.error &&
                (1 === arguments.length ? n.error(e) : n.error(e, t))
            })('Unhandled promise rejection', n)
    },
    Vr = function (e, t) {
      Tr.call(r, function () {
        var n,
          r = t.value
        if (
          Kr(t) &&
          ((n = Ar(function () {
            Dr ? Lr.emit('unhandledRejection', r, e) : Br(Zr, e, r)
          })),
          (t.rejection = Dr || Kr(t) ? 2 : 1),
          n.error)
        )
          throw n.value
      })
    },
    Kr = function (e) {
      return 1 !== e.rejection && !e.parent
    },
    Xr = function (e, t) {
      Tr.call(r, function () {
        Dr ? Lr.emit('rejectionHandled', e) : Br('rejectionhandled', e, t.value)
      })
    },
    Yr = function (e, t, n, r) {
      return function (i) {
        e(t, n, i, r)
      }
    },
    Jr = function (e, t, n, r) {
      t.done ||
        ((t.done = !0),
        r && (t = r),
        (t.value = n),
        (t.state = 2),
        Wr(e, t, !0))
    },
    Qr = function (e, t, n, r) {
      if (!t.done) {
        ;(t.done = !0), r && (t = r)
        try {
          if (e === n) throw Ir("Promise can't be resolved itself")
          var i = Hr(n)
          i
            ? wr(function () {
                var r = { done: !1 }
                try {
                  i.call(n, Yr(Qr, e, r, t), Yr(Jr, e, r, t))
                } catch (n) {
                  Jr(e, r, n, t)
                }
              })
            : ((t.value = n), (t.state = 1), Wr(e, t, !1))
        } catch (n) {
          Jr(e, { done: !1 }, n, t)
        }
      }
    }
  Fr &&
    ((Pr = function (e) {
      !(function (e, t, n) {
        if (!(e instanceof t))
          throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation')
      })(this, Pr, Rr),
        rt(e),
        br.call(this)
      var t = jr(this)
      try {
        e(Yr(Qr, this, t), Yr(Jr, this, t))
      } catch (e) {
        Jr(this, t, e)
      }
    }),
    ((br = function (e) {
      zr(this, {
        type: Rr,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0,
      })
    }).prototype = (function (e, t, n) {
      for (var r in t) ne(e, r, t[r], n)
      return e
    })(Pr.prototype, {
      then: function (e, t) {
        var n = $r(this),
          r = Nr(Dn(this, Pr))
        return (
          (r.ok = 'function' != typeof e || e),
          (r.fail = 'function' == typeof t && t),
          (r.domain = Dr ? Lr.domain : void 0),
          (n.parent = !0),
          n.reactions.push(r),
          0 != n.state && Wr(this, n, !1),
          r.promise
        )
      },
      catch: function (e) {
        return this.then(void 0, e)
      },
    })),
    (mr = function () {
      var e = new br(),
        t = jr(e)
      ;(this.promise = e),
        (this.resolve = Yr(Qr, e, t)),
        (this.reject = Yr(Jr, e, t))
    }),
    (Er.f = Nr =
      function (e) {
        return e === Pr || e === kr ? new mr(e) : qr(e)
      }),
    'function' == typeof En &&
      ((xr = En.prototype.then),
      ne(
        En.prototype,
        'then',
        function (e, t) {
          var n = this
          return new Pr(function (e, t) {
            xr.call(n, e, t)
          }).then(e, t)
        },
        { unsafe: !0 }
      ),
      'function' == typeof Mr &&
        $e(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (e) {
              return _r(Pr, Mr.apply(r, arguments))
            },
          }
        ))),
    $e({ global: !0, wrap: !0, forced: Fr }, { Promise: Pr }),
    Zt(Pr, Rr, !1),
    An(Rr),
    (kr = oe(Rr)),
    $e(
      { target: Rr, stat: !0, forced: Fr },
      {
        reject: function (e) {
          var t = Nr(this)
          return t.reject.call(void 0, e), t.promise
        },
      }
    ),
    $e(
      { target: Rr, stat: !0, forced: Fr },
      {
        resolve: function (e) {
          return _r(this, e)
        },
      }
    ),
    $e(
      { target: Rr, stat: !0, forced: Gr },
      {
        all: function (e) {
          var t = this,
            n = Nr(t),
            r = n.resolve,
            i = n.reject,
            o = Ar(function () {
              var n = rt(t.resolve),
                o = [],
                a = 0,
                l = 1
              zn(e, function (e) {
                var s = a++,
                  c = !1
                o.push(void 0),
                  l++,
                  n.call(t, e).then(function (e) {
                    c || ((c = !0), (o[s] = e), --l || r(o))
                  }, i)
              }),
                --l || r(o)
            })
          return o.error && i(o.value), n.promise
        },
        race: function (e) {
          var t = this,
            n = Nr(t),
            r = n.reject,
            i = Ar(function () {
              var i = rt(t.resolve)
              zn(e, function (e) {
                i.call(t, e).then(n.resolve, r)
              })
            })
          return i.error && r(i.value), n.promise
        },
      }
    )
  var ei = Ue('match'),
    ti = function (e) {
      var t
      return v(e) && (void 0 !== (t = e[ei]) ? !!t : 'RegExp' == f(e))
    },
    ni = function () {
      var e = A(this),
        t = ''
      return (
        e.global && (t += 'g'),
        e.ignoreCase && (t += 'i'),
        e.multiline && (t += 'm'),
        e.dotAll && (t += 's'),
        e.unicode && (t += 'u'),
        e.sticky && (t += 'y'),
        t
      )
    }
  function ri(e, t) {
    return RegExp(e, t)
  }
  var ii = {
      UNSUPPORTED_Y: i(function () {
        var e = ri('a', 'y')
        return (e.lastIndex = 2), null != e.exec('abcd')
      }),
      BROKEN_CARET: i(function () {
        var e = ri('^r', 'gy')
        return (e.lastIndex = 2), null != e.exec('str')
      }),
    },
    oi = O.f,
    ai = ke.f,
    li = te.set,
    si = Ue('match'),
    ci = r.RegExp,
    ui = ci.prototype,
    fi = /a/g,
    pi = /a/g,
    hi = new ci(fi) !== fi,
    gi = ii.UNSUPPORTED_Y
  if (
    o &&
    je(
      'RegExp',
      !hi ||
        gi ||
        i(function () {
          return (
            (pi[si] = !1), ci(fi) != fi || ci(pi) == pi || '/a/i' != ci(fi, 'i')
          )
        })
    )
  ) {
    for (
      var di = function (e, t) {
          var n,
            r = this instanceof di,
            i = ti(e),
            o = void 0 === t
          if (!r && i && e.constructor === di && o) return e
          hi
            ? i && !o && (e = e.source)
            : e instanceof di && (o && (t = ni.call(e)), (e = e.source)),
            gi && (n = !!t && t.indexOf('y') > -1) && (t = t.replace(/y/g, ''))
          var a,
            l,
            s,
            c,
            u,
            f =
              ((a = hi ? new ci(e, t) : ci(e, t)),
              (l = r ? this : ui),
              (s = di),
              Ht &&
                'function' == typeof (c = l.constructor) &&
                c !== s &&
                v((u = c.prototype)) &&
                u !== s.prototype &&
                Ht(a, u),
              a)
          return gi && n && li(f, { sticky: n }), f
        },
        vi = function (e) {
          ;(e in di) ||
            oi(di, e, {
              configurable: !0,
              get: function () {
                return ci[e]
              },
              set: function (t) {
                ci[e] = t
              },
            })
        },
        yi = ai(ci),
        bi = 0;
      yi.length > bi;

    )
      vi(yi[bi++])
    ;(ui.constructor = di), (di.prototype = ui), ne(r, 'RegExp', di)
  }
  An('RegExp')
  var mi = RegExp.prototype.exec,
    ki = String.prototype.replace,
    xi = mi,
    wi = (function () {
      var e = /a/,
        t = /b*/g
      return (
        mi.call(e, 'a'), mi.call(t, 'a'), 0 !== e.lastIndex || 0 !== t.lastIndex
      )
    })(),
    Si = ii.UNSUPPORTED_Y || ii.BROKEN_CARET,
    Ei = void 0 !== /()??/.exec('')[1]
  ;(wi || Ei || Si) &&
    (xi = function (e) {
      var t,
        n,
        r,
        i,
        o = this,
        a = Si && o.sticky,
        l = ni.call(o),
        s = o.source,
        c = 0,
        u = e
      return (
        a &&
          (-1 === (l = l.replace('y', '')).indexOf('g') && (l += 'g'),
          (u = String(e).slice(o.lastIndex)),
          o.lastIndex > 0 &&
            (!o.multiline || (o.multiline && '\n' !== e[o.lastIndex - 1])) &&
            ((s = '(?: ' + s + ')'), (u = ' ' + u), c++),
          (n = new RegExp('^(?:' + s + ')', l))),
        Ei && (n = new RegExp('^' + s + '$(?!\\s)', l)),
        wi && (t = o.lastIndex),
        (r = mi.call(a ? n : o, u)),
        a
          ? r
            ? ((r.input = r.input.slice(c)),
              (r[0] = r[0].slice(c)),
              (r.index = o.lastIndex),
              (o.lastIndex += r[0].length))
            : (o.lastIndex = 0)
          : wi && r && (o.lastIndex = o.global ? r.index + r[0].length : t),
        Ei &&
          r &&
          r.length > 1 &&
          ki.call(r[0], n, function () {
            for (i = 1; i < arguments.length - 2; i++)
              void 0 === arguments[i] && (r[i] = void 0)
          }),
        r
      )
    })
  var _i = xi
  $e({ target: 'RegExp', proto: !0, forced: /./.exec !== _i }, { exec: _i })
  var Ai = 'toString',
    Ti = RegExp.prototype,
    Oi = Ti.toString,
    Ri = i(function () {
      return '/a/b' != Oi.call({ source: 'a', flags: 'b' })
    }),
    ji = Oi.name != Ai
  ;(Ri || ji) &&
    ne(
      RegExp.prototype,
      Ai,
      function () {
        var e = A(this),
          t = String(e.source),
          n = e.flags
        return (
          '/' +
          t +
          '/' +
          String(
            void 0 === n && e instanceof RegExp && !('flags' in Ti)
              ? ni.call(e)
              : n
          )
        )
      },
      { unsafe: !0 }
    )
  var zi = function (e) {
      return function (t, n) {
        var r,
          i,
          o = String(g(t)),
          a = se(n),
          l = o.length
        return a < 0 || a >= l
          ? e
            ? ''
            : void 0
          : (r = o.charCodeAt(a)) < 55296 ||
            r > 56319 ||
            a + 1 === l ||
            (i = o.charCodeAt(a + 1)) < 56320 ||
            i > 57343
          ? e
            ? o.charAt(a)
            : r
          : e
          ? o.slice(a, a + 2)
          : i - 56320 + ((r - 55296) << 10) + 65536
      }
    },
    $i = { codeAt: zi(!1), charAt: zi(!0) },
    Pi = $i.charAt,
    Ii = 'String Iterator',
    Ci = te.set,
    Li = te.getterFor(Ii)
  Qt(
    String,
    'String',
    function (e) {
      Ci(this, { type: Ii, string: String(e), index: 0 })
    },
    function () {
      var e,
        t = Li(this),
        n = t.string,
        r = t.index
      return r >= n.length
        ? { value: void 0, done: !0 }
        : ((e = Pi(n, r)), (t.index += e.length), { value: e, done: !1 })
    }
  )
  var Mi = Ue('species'),
    Ni = !i(function () {
      var e = /./
      return (
        (e.exec = function () {
          var e = []
          return (e.groups = { a: '7' }), e
        }),
        '7' !== ''.replace(e, '$<a>')
      )
    }),
    qi = '$0' === 'a'.replace(/./, '$0'),
    Di = Ue('replace'),
    Ui = !!/./[Di] && '' === /./[Di]('a', '$0'),
    Zi = !i(function () {
      var e = /(?:)/,
        t = e.exec
      e.exec = function () {
        return t.apply(this, arguments)
      }
      var n = 'ab'.split(e)
      return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1]
    }),
    Fi = function (e, t, n, r) {
      var o = Ue(e),
        a = !i(function () {
          var t = {}
          return (
            (t[o] = function () {
              return 7
            }),
            7 != ''[e](t)
          )
        }),
        l =
          a &&
          !i(function () {
            var t = !1,
              n = /a/
            return (
              'split' === e &&
                (((n = {}).constructor = {}),
                (n.constructor[Mi] = function () {
                  return n
                }),
                (n.flags = ''),
                (n[o] = /./[o])),
              (n.exec = function () {
                return (t = !0), null
              }),
              n[o](''),
              !t
            )
          })
      if (
        !a ||
        !l ||
        ('replace' === e && (!Ni || !qi || Ui)) ||
        ('split' === e && !Zi)
      ) {
        var s = /./[o],
          c = n(
            o,
            ''[e],
            function (e, t, n, r, i) {
              return t.exec === _i
                ? a && !i
                  ? { done: !0, value: s.call(t, n, r) }
                  : { done: !0, value: e.call(n, t, r) }
                : { done: !1 }
            },
            {
              REPLACE_KEEPS_$0: qi,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Ui,
            }
          ),
          u = c[0],
          f = c[1]
        ne(String.prototype, e, u),
          ne(
            RegExp.prototype,
            o,
            2 == t
              ? function (e, t) {
                  return f.call(e, this, t)
                }
              : function (e) {
                  return f.call(e, this)
                }
          )
      }
      r && R(RegExp.prototype[o], 'sham', !0)
    },
    Gi = $i.charAt,
    Hi = function (e, t, n) {
      return t + (n ? Gi(e, t).length : 1)
    },
    Wi = function (e, t) {
      var n = e.exec
      if ('function' == typeof n) {
        var r = n.call(e, t)
        if ('object' != typeof r)
          throw TypeError(
            'RegExp exec method returned something other than an Object or null'
          )
        return r
      }
      if ('RegExp' !== f(e))
        throw TypeError('RegExp#exec called on incompatible receiver')
      return _i.call(e, t)
    }
  Fi('match', 1, function (e, t, n) {
    return [
      function (t) {
        var n = g(this),
          r = null == t ? void 0 : t[e]
        return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
      },
      function (e) {
        var r = n(t, e, this)
        if (r.done) return r.value
        var i = A(e),
          o = String(this)
        if (!i.global) return Wi(i, o)
        var a = i.unicode
        i.lastIndex = 0
        for (var l, s = [], c = 0; null !== (l = Wi(i, o)); ) {
          var u = String(l[0])
          ;(s[c] = u),
            '' === u && (i.lastIndex = Hi(o, ue(i.lastIndex), a)),
            c++
        }
        return 0 === c ? null : s
      },
    ]
  })
  var Bi = Math.max,
    Vi = Math.min,
    Ki = Math.floor,
    Xi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    Yi = /\$([$&'`]|\d\d?)/g
  Fi('replace', 2, function (e, t, n, r) {
    var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
      o = r.REPLACE_KEEPS_$0,
      a = i ? '$' : '$0'
    return [
      function (n, r) {
        var i = g(this),
          o = null == n ? void 0 : n[e]
        return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
      },
      function (e, r) {
        if ((!i && o) || ('string' == typeof r && -1 === r.indexOf(a))) {
          var s = n(t, e, this, r)
          if (s.done) return s.value
        }
        var c = A(e),
          u = String(this),
          f = 'function' == typeof r
        f || (r = String(r))
        var p = c.global
        if (p) {
          var h = c.unicode
          c.lastIndex = 0
        }
        for (var g = []; ; ) {
          var d = Wi(c, u)
          if (null === d) break
          if ((g.push(d), !p)) break
          '' === String(d[0]) && (c.lastIndex = Hi(u, ue(c.lastIndex), h))
        }
        for (var v, y = '', b = 0, m = 0; m < g.length; m++) {
          d = g[m]
          for (
            var k = String(d[0]),
              x = Bi(Vi(se(d.index), u.length), 0),
              w = [],
              S = 1;
            S < d.length;
            S++
          )
            w.push(void 0 === (v = d[S]) ? v : String(v))
          var E = d.groups
          if (f) {
            var _ = [k].concat(w, x, u)
            void 0 !== E && _.push(E)
            var T = String(r.apply(void 0, _))
          } else T = l(k, u, x, w, E, r)
          x >= b && ((y += u.slice(b, x) + T), (b = x + k.length))
        }
        return y + u.slice(b)
      },
    ]
    function l(e, n, r, i, o, a) {
      var l = r + e.length,
        s = i.length,
        c = Yi
      return (
        void 0 !== o && ((o = Ie(o)), (c = Xi)),
        t.call(a, c, function (t, a) {
          var c
          switch (a.charAt(0)) {
            case '$':
              return '$'
            case '&':
              return e
            case '`':
              return n.slice(0, r)
            case "'":
              return n.slice(l)
            case '<':
              c = o[a.slice(1, -1)]
              break
            default:
              var u = +a
              if (0 === u) return t
              if (u > s) {
                var f = Ki(u / 10)
                return 0 === f
                  ? t
                  : f <= s
                  ? void 0 === i[f - 1]
                    ? a.charAt(1)
                    : i[f - 1] + a.charAt(1)
                  : t
              }
              c = i[u - 1]
          }
          return void 0 === c ? '' : c
        })
      )
    }
  })
  var Ji = [].push,
    Qi = Math.min,
    eo = 4294967295,
    to = !i(function () {
      return !RegExp(eo, 'y')
    })
  Fi(
    'split',
    2,
    function (e, t, n) {
      var r
      return (
        (r =
          'c' == 'abbc'.split(/(b)*/)[1] ||
          4 != 'test'.split(/(?:)/, -1).length ||
          2 != 'ab'.split(/(?:ab)*/).length ||
          4 != '.'.split(/(.?)(.?)/).length ||
          '.'.split(/()()/).length > 1 ||
          ''.split(/.?/).length
            ? function (e, n) {
                var r = String(g(this)),
                  i = void 0 === n ? eo : n >>> 0
                if (0 === i) return []
                if (void 0 === e) return [r]
                if (!ti(e)) return t.call(r, e, i)
                for (
                  var o,
                    a,
                    l,
                    s = [],
                    c =
                      (e.ignoreCase ? 'i' : '') +
                      (e.multiline ? 'm' : '') +
                      (e.unicode ? 'u' : '') +
                      (e.sticky ? 'y' : ''),
                    u = 0,
                    f = new RegExp(e.source, c + 'g');
                  (o = _i.call(f, r)) &&
                  !(
                    (a = f.lastIndex) > u &&
                    (s.push(r.slice(u, o.index)),
                    o.length > 1 &&
                      o.index < r.length &&
                      Ji.apply(s, o.slice(1)),
                    (l = o[0].length),
                    (u = a),
                    s.length >= i)
                  );

                )
                  f.lastIndex === o.index && f.lastIndex++
                return (
                  u === r.length
                    ? (!l && f.test('')) || s.push('')
                    : s.push(r.slice(u)),
                  s.length > i ? s.slice(0, i) : s
                )
              }
            : '0'.split(void 0, 0).length
            ? function (e, n) {
                return void 0 === e && 0 === n ? [] : t.call(this, e, n)
              }
            : t),
        [
          function (t, n) {
            var i = g(this),
              o = null == t ? void 0 : t[e]
            return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
          },
          function (e, i) {
            var o = n(r, e, this, i, r !== t)
            if (o.done) return o.value
            var a = A(e),
              l = String(this),
              s = Dn(a, RegExp),
              c = a.unicode,
              u =
                (a.ignoreCase ? 'i' : '') +
                (a.multiline ? 'm' : '') +
                (a.unicode ? 'u' : '') +
                (to ? 'y' : 'g'),
              f = new s(to ? a : '^(?:' + a.source + ')', u),
              p = void 0 === i ? eo : i >>> 0
            if (0 === p) return []
            if (0 === l.length) return null === Wi(f, l) ? [l] : []
            for (var h = 0, g = 0, d = []; g < l.length; ) {
              f.lastIndex = to ? g : 0
              var v,
                y = Wi(f, to ? l : l.slice(g))
              if (
                null === y ||
                (v = Qi(ue(f.lastIndex + (to ? 0 : g)), l.length)) === h
              )
                g = Hi(l, g, c)
              else {
                if ((d.push(l.slice(h, g)), d.length === p)) return d
                for (var b = 1; b <= y.length - 1; b++)
                  if ((d.push(y[b]), d.length === p)) return d
                g = h = v
              }
            }
            return d.push(l.slice(h)), d
          },
        ]
      )
    },
    !to
  )
  var no = '\t\n\v\f\r                　\u2028\u2029\ufeff',
    ro = '[' + no + ']',
    io = RegExp('^' + ro + ro + '*'),
    oo = RegExp(ro + ro + '*$'),
    ao = function (e) {
      return function (t) {
        var n = String(g(t))
        return (
          1 & e && (n = n.replace(io, '')), 2 & e && (n = n.replace(oo, '')), n
        )
      }
    },
    lo = { start: ao(1), end: ao(2), trim: ao(3) },
    so = function (e) {
      return i(function () {
        return !!no[e]() || '​᠎' != '​᠎'[e]() || no[e].name !== e
      })
    },
    co = lo.trim
  $e(
    { target: 'String', proto: !0, forced: so('trim') },
    {
      trim: function () {
        return co(this)
      },
    }
  )
  var uo = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  }
  for (var fo in uo) {
    var po = r[fo],
      ho = po && po.prototype
    if (ho && ho.forEach !== vt)
      try {
        R(ho, 'forEach', vt)
      } catch (e) {
        ho.forEach = vt
      }
  }
  var go = Ue('iterator'),
    vo = Ue('toStringTag'),
    yo = rn.values
  for (var bo in uo) {
    var mo = r[bo],
      ko = mo && mo.prototype
    if (ko) {
      if (ko[go] !== yo)
        try {
          R(ko, go, yo)
        } catch (e) {
          ko[go] = yo
        }
      if ((ko[vo] || R(ko, vo, bo), uo[bo]))
        for (var xo in rn)
          if (ko[xo] !== rn[xo])
            try {
              R(ko, xo, rn[xo])
            } catch (e) {
              ko[xo] = rn[xo]
            }
    }
  }
  function wo(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function')
  }
  function So(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      ;(r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
  }
  function Eo(e, t, n) {
    return t && So(e.prototype, t), n && So(e, n), e
  }
  function _o(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    )
  }
  function Ao(e, t) {
    var n = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e)
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
  }
  function To(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e
      })(e) ||
      (function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return
        var n = [],
          r = !0,
          i = !1,
          o = void 0
        try {
          for (
            var a, l = e[Symbol.iterator]();
            !(r = (a = l.next()).done) &&
            (n.push(a.value), !t || n.length !== t);
            r = !0
          );
        } catch (e) {
          ;(i = !0), (o = e)
        } finally {
          try {
            r || null == l.return || l.return()
          } finally {
            if (i) throw o
          }
        }
        return n
      })(e, t) ||
      Oo(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function Oo(e, t) {
    if (e) {
      if ('string' == typeof e) return Ro(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      return (
        'Object' === n && e.constructor && (n = e.constructor.name),
        'Map' === n || 'Set' === n
          ? Array.from(e)
          : 'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Ro(e, t)
          : void 0
      )
    }
  }
  function Ro(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }
  function jo(e) {
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
      if (Array.isArray(e) || (e = Oo(e))) {
        var t = 0,
          n = function () {}
        return {
          s: n,
          n: function () {
            return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] }
          },
          e: function (e) {
            throw e
          },
          f: n,
        }
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }
    var r,
      i,
      o = !0,
      a = !1
    return {
      s: function () {
        r = e[Symbol.iterator]()
      },
      n: function () {
        var e = r.next()
        return (o = e.done), e
      },
      e: function (e) {
        ;(a = !0), (i = e)
      },
      f: function () {
        try {
          o || null == r.return || r.return()
        } finally {
          if (a) throw i
        }
      },
    }
  }
  var zo = /"/g
  $e(
    {
      target: 'String',
      proto: !0,
      forced: (function (e) {
        return i(function () {
          var t = ''[e]('"')
          return t !== t.toLowerCase() || t.split('"').length > 3
        })
      })('link'),
    },
    {
      link: function (e) {
        return (
          (t = 'a'),
          (n = 'href'),
          (r = e),
          (i = String(g(this))),
          (o = '<' + t),
          '' !== n &&
            (o += ' ' + n + '="' + String(r).replace(zo, '&quot;') + '"'),
          o + '>' + i + '</' + t + '>'
        )
        var t, n, r, i, o
      },
    }
  )
  var $o = de.indexOf,
    Po = [].indexOf,
    Io = !!Po && 1 / [1].indexOf(1, -0) < 0,
    Co = st('indexOf'),
    Lo = pt('indexOf', { ACCESSORS: !0, 1: 0 })
  $e(
    { target: 'Array', proto: !0, forced: Io || !Co || !Lo },
    {
      indexOf: function (e) {
        return Io
          ? Po.apply(this, arguments) || 0
          : $o(this, e, arguments.length > 1 ? arguments[1] : void 0)
      },
    }
  )
  var Mo = lt.map,
    No = Xe('map'),
    qo = pt('map')
  $e(
    { target: 'Array', proto: !0, forced: !No || !qo },
    {
      map: function (e) {
        return Mo(this, e, arguments.length > 1 ? arguments[1] : void 0)
      },
    }
  )
  var Do,
    Uo = function (e) {
      if (ti(e))
        throw TypeError("The method doesn't accept regular expressions")
      return e
    },
    Zo = Ue('match'),
    Fo = function (e) {
      var t = /./
      try {
        '/./'[e](t)
      } catch (n) {
        try {
          return (t[Zo] = !1), '/./'[e](t)
        } catch (e) {}
      }
      return !1
    },
    Go = _.f,
    Ho = ''.endsWith,
    Wo = Math.min,
    Bo = Fo('endsWith'),
    Vo = !(Bo || ((Do = Go(String.prototype, 'endsWith')), !Do || Do.writable))
  $e(
    { target: 'String', proto: !0, forced: !Vo && !Bo },
    {
      endsWith: function (e) {
        var t = String(g(this))
        Uo(e)
        var n = arguments.length > 1 ? arguments[1] : void 0,
          r = ue(t.length),
          i = void 0 === n ? r : Wo(ue(n), r),
          o = String(e)
        return Ho ? Ho.call(t, o, i) : t.slice(i - o.length, i) === o
      },
    }
  )
  var Ko = _.f,
    Xo = ''.startsWith,
    Yo = Math.min,
    Jo = Fo('startsWith'),
    Qo =
      !Jo &&
      !!(function () {
        var e = Ko(String.prototype, 'startsWith')
        return e && !e.writable
      })()
  $e(
    { target: 'String', proto: !0, forced: !Qo && !Jo },
    {
      startsWith: function (e) {
        var t = String(g(this))
        Uo(e)
        var n = ue(Yo(arguments.length > 1 ? arguments[1] : void 0, t.length)),
          r = String(e)
        return Xo ? Xo.call(t, r, n) : t.slice(n, n + r.length) === r
      },
    }
  )
  var ea = lo.end,
    ta = so('trimEnd'),
    na = ta
      ? function () {
          return ea(this)
        }
      : ''.trimEnd
  $e(
    { target: 'String', proto: !0, forced: ta },
    { trimEnd: na, trimRight: na }
  )
  var ra = t(function (e) {
      function t() {
        return {
          baseUrl: null,
          breaks: !1,
          gfm: !0,
          headerIds: !0,
          headerPrefix: '',
          highlight: null,
          langPrefix: 'language-',
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1,
        }
      }
      e.exports = {
        defaults: {
          baseUrl: null,
          breaks: !1,
          gfm: !0,
          headerIds: !0,
          headerPrefix: '',
          highlight: null,
          langPrefix: 'language-',
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1,
        },
        getDefaults: t,
        changeDefaults: function (t) {
          e.exports.defaults = t
        },
      }
    }),
    ia = Xe('splice'),
    oa = pt('splice', { ACCESSORS: !0, 0: 0, 1: 2 }),
    aa = Math.max,
    la = Math.min,
    sa = 9007199254740991,
    ca = 'Maximum allowed length exceeded'
  $e(
    { target: 'Array', proto: !0, forced: !ia || !oa },
    {
      splice: function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          l,
          s = Ie(this),
          c = ue(s.length),
          u = he(e, c),
          f = arguments.length
        if (
          (0 === f
            ? (n = r = 0)
            : 1 === f
            ? ((n = 0), (r = c - u))
            : ((n = f - 2), (r = la(aa(se(t), 0), c - u))),
          c + n - r > sa)
        )
          throw TypeError(ca)
        for (i = Fe(s, r), o = 0; o < r; o++) (a = u + o) in s && Ce(i, o, s[a])
        if (((i.length = r), n < r)) {
          for (o = u; o < c - r; o++)
            (l = o + n), (a = o + r) in s ? (s[l] = s[a]) : delete s[l]
          for (o = c; o > c - r + n; o--) delete s[o - 1]
        } else if (n > r)
          for (o = c - r; o > u; o--)
            (l = o + n - 1), (a = o + r - 1) in s ? (s[l] = s[a]) : delete s[l]
        for (o = 0; o < n; o++) s[o + u] = arguments[o + 2]
        return (s.length = c - r + n), i
      },
    }
  )
  var ua = /[&<>"']/,
    fa = /[&<>"']/g,
    pa = /[<>"']|&(?!#?\w+;)/,
    ha = /[<>"']|&(?!#?\w+;)/g,
    ga = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    },
    da = function (e) {
      return ga[e]
    }
  var va = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
  function ya(e) {
    return e.replace(va, function (e, t) {
      return 'colon' === (t = t.toLowerCase())
        ? ':'
        : '#' === t.charAt(0)
        ? 'x' === t.charAt(1)
          ? String.fromCharCode(parseInt(t.substring(2), 16))
          : String.fromCharCode(+t.substring(1))
        : ''
    })
  }
  var ba = /(^|[^\[])\^/g
  var ma = /[^\w:]/g,
    ka = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
  var xa = {},
    wa = /^[^:]+:\/*[^/]*$/,
    Sa = /^([^:]+:)[\s\S]*$/,
    Ea = /^([^:]+:\/*[^/]*)[\s\S]*$/
  function _a(e, t) {
    xa[' ' + e] ||
      (wa.test(e) ? (xa[' ' + e] = e + '/') : (xa[' ' + e] = Aa(e, '/', !0)))
    var n = -1 === (e = xa[' ' + e]).indexOf(':')
    return '//' === t.substring(0, 2)
      ? n
        ? t
        : e.replace(Sa, '$1') + t
      : '/' === t.charAt(0)
      ? n
        ? t
        : e.replace(Ea, '$1') + t
      : e + t
  }
  function Aa(e, t, n) {
    var r = e.length
    if (0 === r) return ''
    for (var i = 0; i < r; ) {
      var o = e.charAt(r - i - 1)
      if (o !== t || n) {
        if (o === t || !n) break
        i++
      } else i++
    }
    return e.substr(0, r - i)
  }
  var Ta = function (e, t) {
      if (t) {
        if (ua.test(e)) return e.replace(fa, da)
      } else if (pa.test(e)) return e.replace(ha, da)
      return e
    },
    Oa = ya,
    Ra = function (e, t) {
      ;(e = e.source || e), (t = t || '')
      var n = {
        replace: function (t, r) {
          return (
            (r = (r = r.source || r).replace(ba, '$1')),
            (e = e.replace(t, r)),
            n
          )
        },
        getRegex: function () {
          return new RegExp(e, t)
        },
      }
      return n
    },
    ja = function (e, t, n) {
      if (e) {
        var r
        try {
          r = decodeURIComponent(ya(n)).replace(ma, '').toLowerCase()
        } catch (e) {
          return null
        }
        if (
          0 === r.indexOf('javascript:') ||
          0 === r.indexOf('vbscript:') ||
          0 === r.indexOf('data:')
        )
          return null
      }
      t && !ka.test(n) && (n = _a(t, n))
      try {
        n = encodeURI(n).replace(/%25/g, '%')
      } catch (e) {
        return null
      }
      return n
    },
    za = { exec: function () {} },
    $a = function (e) {
      for (var t, n, r = 1; r < arguments.length; r++)
        for (n in (t = arguments[r]))
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      return e
    },
    Pa = function (e, t) {
      var n = e
          .replace(/\|/g, function (e, t, n) {
            for (var r = !1, i = t; --i >= 0 && '\\' === n[i]; ) r = !r
            return r ? '|' : ' |'
          })
          .split(/ \|/),
        r = 0
      if (n.length > t) n.splice(t)
      else for (; n.length < t; ) n.push('')
      for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, '|')
      return n
    },
    Ia = Aa,
    Ca = function (e, t) {
      if (-1 === e.indexOf(t[1])) return -1
      for (var n = e.length, r = 0, i = 0; i < n; i++)
        if ('\\' === e[i]) i++
        else if (e[i] === t[0]) r++
        else if (e[i] === t[1] && --r < 0) return i
      return -1
    },
    La = function (e) {
      e &&
        e.sanitize &&
        !e.silent &&
        console.warn(
          'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
        )
    },
    Ma = ra.defaults,
    Na = Ia,
    qa = Pa,
    Da = Ta,
    Ua = Ca
  function Za(e, t, n) {
    var r = t.href,
      i = t.title ? Da(t.title) : null
    return '!' !== e[0].charAt(0)
      ? { type: 'link', raw: n, href: r, title: i, text: e[1] }
      : { type: 'image', raw: n, text: Da(e[1]), href: r, title: i }
  }
  var Fa = (function () {
      function e(t) {
        wo(this, e), (this.options = t || Ma)
      }
      return (
        Eo(e, [
          {
            key: 'space',
            value: function (e) {
              var t = this.rules.block.newline.exec(e)
              if (t)
                return t[0].length > 1
                  ? { type: 'space', raw: t[0] }
                  : { raw: '\n' }
            },
          },
          {
            key: 'code',
            value: function (e, t) {
              var n = this.rules.block.code.exec(e)
              if (n) {
                var r = t[t.length - 1]
                if (r && 'paragraph' === r.type)
                  return { raw: n[0], text: n[0].trimRight() }
                var i = n[0].replace(/^ {4}/gm, '')
                return {
                  type: 'code',
                  raw: n[0],
                  codeBlockStyle: 'indented',
                  text: this.options.pedantic ? i : Na(i, '\n'),
                }
              }
            },
          },
          {
            key: 'fences',
            value: function (e) {
              var t = this.rules.block.fences.exec(e)
              if (t) {
                var n = t[0],
                  r = (function (e, t) {
                    var n = e.match(/^(\s+)(?:```)/)
                    if (null === n) return t
                    var r = n[1]
                    return t
                      .split('\n')
                      .map(function (e) {
                        var t = e.match(/^\s+/)
                        return null === t
                          ? e
                          : To(t, 1)[0].length >= r.length
                          ? e.slice(r.length)
                          : e
                      })
                      .join('\n')
                  })(n, t[3] || '')
                return {
                  type: 'code',
                  raw: n,
                  lang: t[2] ? t[2].trim() : t[2],
                  text: r,
                }
              }
            },
          },
          {
            key: 'heading',
            value: function (e) {
              var t = this.rules.block.heading.exec(e)
              if (t)
                return {
                  type: 'heading',
                  raw: t[0],
                  depth: t[1].length,
                  text: t[2],
                }
            },
          },
          {
            key: 'nptable',
            value: function (e) {
              var t = this.rules.block.nptable.exec(e)
              if (t) {
                var n = {
                  type: 'table',
                  header: qa(t[1].replace(/^ *| *\| *$/g, '')),
                  align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : [],
                  raw: t[0],
                }
                if (n.header.length === n.align.length) {
                  var r,
                    i = n.align.length
                  for (r = 0; r < i; r++)
                    /^ *-+: *$/.test(n.align[r])
                      ? (n.align[r] = 'right')
                      : /^ *:-+: *$/.test(n.align[r])
                      ? (n.align[r] = 'center')
                      : /^ *:-+ *$/.test(n.align[r])
                      ? (n.align[r] = 'left')
                      : (n.align[r] = null)
                  for (i = n.cells.length, r = 0; r < i; r++)
                    n.cells[r] = qa(n.cells[r], n.header.length)
                  return n
                }
              }
            },
          },
          {
            key: 'hr',
            value: function (e) {
              var t = this.rules.block.hr.exec(e)
              if (t) return { type: 'hr', raw: t[0] }
            },
          },
          {
            key: 'blockquote',
            value: function (e) {
              var t = this.rules.block.blockquote.exec(e)
              if (t) {
                var n = t[0].replace(/^ *> ?/gm, '')
                return { type: 'blockquote', raw: t[0], text: n }
              }
            },
          },
          {
            key: 'list',
            value: function (e) {
              var t = this.rules.block.list.exec(e)
              if (t) {
                for (
                  var n,
                    r,
                    i,
                    o,
                    a,
                    l,
                    s,
                    c = t[0],
                    u = t[2],
                    f = u.length > 1,
                    p = {
                      type: 'list',
                      raw: c,
                      ordered: f,
                      start: f ? +u : '',
                      loose: !1,
                      items: [],
                    },
                    h = t[0].match(this.rules.block.item),
                    g = !1,
                    d = h.length,
                    v = 0;
                  v < d;
                  v++
                )
                  (c = n = h[v]),
                    (r = n.length),
                    ~(n = n.replace(/^ *([*+-]|\d+\.) */, '')).indexOf('\n ') &&
                      ((r -= n.length),
                      (n = this.options.pedantic
                        ? n.replace(/^ {1,4}/gm, '')
                        : n.replace(new RegExp('^ {1,' + r + '}', 'gm'), ''))),
                    v !== d - 1 &&
                      ((i = this.rules.block.bullet.exec(h[v + 1])[0]),
                      (u.length > 1
                        ? 1 === i.length
                        : i.length > 1 ||
                          (this.options.smartLists && i !== u)) &&
                        ((o = h.slice(v + 1).join('\n')),
                        (p.raw = p.raw.substring(0, p.raw.length - o.length)),
                        (v = d - 1))),
                    (a = g || /\n\n(?!\s*$)/.test(n)),
                    v !== d - 1 &&
                      ((g = '\n' === n.charAt(n.length - 1)), a || (a = g)),
                    a && (p.loose = !0),
                    (s = void 0),
                    (l = /^\[[ xX]\] /.test(n)) &&
                      ((s = ' ' !== n[1]), (n = n.replace(/^\[[ xX]\] +/, ''))),
                    p.items.push({
                      type: 'list_item',
                      raw: c,
                      task: l,
                      checked: s,
                      loose: a,
                      text: n,
                    })
                return p
              }
            },
          },
          {
            key: 'html',
            value: function (e) {
              var t = this.rules.block.html.exec(e)
              if (t)
                return {
                  type: this.options.sanitize ? 'paragraph' : 'html',
                  raw: t[0],
                  pre:
                    !this.options.sanitizer &&
                    ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
                  text: this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(t[0])
                      : Da(t[0])
                    : t[0],
                }
            },
          },
          {
            key: 'def',
            value: function (e) {
              var t = this.rules.block.def.exec(e)
              if (t)
                return (
                  t[3] && (t[3] = t[3].substring(1, t[3].length - 1)),
                  {
                    tag: t[1].toLowerCase().replace(/\s+/g, ' '),
                    raw: t[0],
                    href: t[2],
                    title: t[3],
                  }
                )
            },
          },
          {
            key: 'table',
            value: function (e) {
              var t = this.rules.block.table.exec(e)
              if (t) {
                var n = {
                  type: 'table',
                  header: qa(t[1].replace(/^ *| *\| *$/g, '')),
                  align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : [],
                }
                if (n.header.length === n.align.length) {
                  n.raw = t[0]
                  var r,
                    i = n.align.length
                  for (r = 0; r < i; r++)
                    /^ *-+: *$/.test(n.align[r])
                      ? (n.align[r] = 'right')
                      : /^ *:-+: *$/.test(n.align[r])
                      ? (n.align[r] = 'center')
                      : /^ *:-+ *$/.test(n.align[r])
                      ? (n.align[r] = 'left')
                      : (n.align[r] = null)
                  for (i = n.cells.length, r = 0; r < i; r++)
                    n.cells[r] = qa(
                      n.cells[r].replace(/^ *\| *| *\| *$/g, ''),
                      n.header.length
                    )
                  return n
                }
              }
            },
          },
          {
            key: 'lheading',
            value: function (e) {
              var t = this.rules.block.lheading.exec(e)
              if (t)
                return {
                  type: 'heading',
                  raw: t[0],
                  depth: '=' === t[2].charAt(0) ? 1 : 2,
                  text: t[1],
                }
            },
          },
          {
            key: 'paragraph',
            value: function (e) {
              var t = this.rules.block.paragraph.exec(e)
              if (t)
                return {
                  type: 'paragraph',
                  raw: t[0],
                  text:
                    '\n' === t[1].charAt(t[1].length - 1)
                      ? t[1].slice(0, -1)
                      : t[1],
                }
            },
          },
          {
            key: 'text',
            value: function (e, t) {
              var n = this.rules.block.text.exec(e)
              if (n) {
                var r = t[t.length - 1]
                return r && 'text' === r.type
                  ? { raw: n[0], text: n[0] }
                  : { type: 'text', raw: n[0], text: n[0] }
              }
            },
          },
          {
            key: 'escape',
            value: function (e) {
              var t = this.rules.inline.escape.exec(e)
              if (t) return { type: 'escape', raw: t[0], text: Da(t[1]) }
            },
          },
          {
            key: 'tag',
            value: function (e, t, n) {
              var r = this.rules.inline.tag.exec(e)
              if (r)
                return (
                  !t && /^<a /i.test(r[0])
                    ? (t = !0)
                    : t && /^<\/a>/i.test(r[0]) && (t = !1),
                  !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0])
                    ? (n = !0)
                    : n &&
                      /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) &&
                      (n = !1),
                  {
                    type: this.options.sanitize ? 'text' : 'html',
                    raw: r[0],
                    inLink: t,
                    inRawBlock: n,
                    text: this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(r[0])
                        : Da(r[0])
                      : r[0],
                  }
                )
            },
          },
          {
            key: 'link',
            value: function (e) {
              var t = this.rules.inline.link.exec(e)
              if (t) {
                var n = Ua(t[2], '()')
                if (n > -1) {
                  var r = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + n
                  ;(t[2] = t[2].substring(0, n)),
                    (t[0] = t[0].substring(0, r).trim()),
                    (t[3] = '')
                }
                var i = t[2],
                  o = ''
                if (this.options.pedantic) {
                  var a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i)
                  a ? ((i = a[1]), (o = a[3])) : (o = '')
                } else o = t[3] ? t[3].slice(1, -1) : ''
                return Za(
                  t,
                  {
                    href: (i = i.trim().replace(/^<([\s\S]*)>$/, '$1'))
                      ? i.replace(this.rules.inline._escapes, '$1')
                      : i,
                    title: o ? o.replace(this.rules.inline._escapes, '$1') : o,
                  },
                  t[0]
                )
              }
            },
          },
          {
            key: 'reflink',
            value: function (e, t) {
              var n
              if (
                (n = this.rules.inline.reflink.exec(e)) ||
                (n = this.rules.inline.nolink.exec(e))
              ) {
                var r = (n[2] || n[1]).replace(/\s+/g, ' ')
                if (!(r = t[r.toLowerCase()]) || !r.href) {
                  var i = n[0].charAt(0)
                  return { type: 'text', raw: i, text: i }
                }
                return Za(n, r, n[0])
              }
            },
          },
          {
            key: 'strong',
            value: function (e) {
              var t = this.rules.inline.strong.exec(e)
              if (t)
                return {
                  type: 'strong',
                  raw: t[0],
                  text: t[4] || t[3] || t[2] || t[1],
                }
            },
          },
          {
            key: 'em',
            value: function (e) {
              var t = this.rules.inline.em.exec(e)
              if (t)
                return {
                  type: 'em',
                  raw: t[0],
                  text: t[6] || t[5] || t[4] || t[3] || t[2] || t[1],
                }
            },
          },
          {
            key: 'codespan',
            value: function (e) {
              var t = this.rules.inline.code.exec(e)
              if (t) {
                var n = t[2].replace(/\n/g, ' '),
                  r = /[^ ]/.test(n),
                  i = n.startsWith(' ') && n.endsWith(' ')
                return (
                  r && i && (n = n.substring(1, n.length - 1)),
                  (n = Da(n, !0)),
                  { type: 'codespan', raw: t[0], text: n }
                )
              }
            },
          },
          {
            key: 'br',
            value: function (e) {
              var t = this.rules.inline.br.exec(e)
              if (t) return { type: 'br', raw: t[0] }
            },
          },
          {
            key: 'del',
            value: function (e) {
              var t = this.rules.inline.del.exec(e)
              if (t) return { type: 'del', raw: t[0], text: t[1] }
            },
          },
          {
            key: 'autolink',
            value: function (e, t) {
              var n,
                r,
                i = this.rules.inline.autolink.exec(e)
              if (i)
                return (
                  (r =
                    '@' === i[2]
                      ? 'mailto:' +
                        (n = Da(this.options.mangle ? t(i[1]) : i[1]))
                      : (n = Da(i[1]))),
                  {
                    type: 'link',
                    raw: i[0],
                    text: n,
                    href: r,
                    tokens: [{ type: 'text', raw: n, text: n }],
                  }
                )
            },
          },
          {
            key: 'url',
            value: function (e, t) {
              var n
              if ((n = this.rules.inline.url.exec(e))) {
                var r, i
                if ('@' === n[2])
                  i = 'mailto:' + (r = Da(this.options.mangle ? t(n[0]) : n[0]))
                else {
                  var o
                  do {
                    ;(o = n[0]),
                      (n[0] = this.rules.inline._backpedal.exec(n[0])[0])
                  } while (o !== n[0])
                  ;(r = Da(n[0])), (i = 'www.' === n[1] ? 'http://' + r : r)
                }
                return {
                  type: 'link',
                  raw: n[0],
                  text: r,
                  href: i,
                  tokens: [{ type: 'text', raw: r, text: r }],
                }
              }
            },
          },
          {
            key: 'inlineText',
            value: function (e, t, n) {
              var r,
                i = this.rules.inline.text.exec(e)
              if (i)
                return (
                  (r = t
                    ? this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(i[0])
                        : Da(i[0])
                      : i[0]
                    : Da(this.options.smartypants ? n(i[0]) : i[0])),
                  { type: 'text', raw: i[0], text: r }
                )
            },
          },
        ]),
        e
      )
    })(),
    Ga = za,
    Ha = Ra,
    Wa = $a,
    Ba = {
      newline: /^\n+/,
      code: /^( {4}[^\n]+\n*)+/,
      fences:
        /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
      hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
      html: '^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))',
      def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
      nptable: Ga,
      table: Ga,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph:
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
      text: /^[^\n]+/,
      _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
      _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    }
  ;(Ba.def = Ha(Ba.def)
    .replace('label', Ba._label)
    .replace('title', Ba._title)
    .getRegex()),
    (Ba.bullet = /(?:[*+-]|\d{1,9}\.)/),
    (Ba.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
    (Ba.item = Ha(Ba.item, 'gm').replace(/bull/g, Ba.bullet).getRegex()),
    (Ba.list = Ha(Ba.list)
      .replace(/bull/g, Ba.bullet)
      .replace(
        'hr',
        '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
      )
      .replace('def', '\\n+(?=' + Ba.def.source + ')')
      .getRegex()),
    (Ba._tag =
      'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
    (Ba._comment = /<!--(?!-?>)[\s\S]*?-->/),
    (Ba.html = Ha(Ba.html, 'i')
      .replace('comment', Ba._comment)
      .replace('tag', Ba._tag)
      .replace(
        'attribute',
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
      )
      .getRegex()),
    (Ba.paragraph = Ha(Ba._paragraph)
      .replace('hr', Ba.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('|lheading', '')
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', Ba._tag)
      .getRegex()),
    (Ba.blockquote = Ha(Ba.blockquote)
      .replace('paragraph', Ba.paragraph)
      .getRegex()),
    (Ba.normal = Wa({}, Ba)),
    (Ba.gfm = Wa({}, Ba.normal, {
      nptable:
        '^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
      table:
        '^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    })),
    (Ba.gfm.nptable = Ha(Ba.gfm.nptable)
      .replace('hr', Ba.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', Ba._tag)
      .getRegex()),
    (Ba.gfm.table = Ha(Ba.gfm.table)
      .replace('hr', Ba.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', Ba._tag)
      .getRegex()),
    (Ba.pedantic = Wa({}, Ba.normal, {
      html: Ha(
        '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
      )
        .replace('comment', Ba._comment)
        .replace(
          /tag/g,
          '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
      fences: Ga,
      paragraph: Ha(Ba.normal._paragraph)
        .replace('hr', Ba.hr)
        .replace('heading', ' *#{1,6} *[^\n]')
        .replace('lheading', Ba.lheading)
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .getRegex(),
    }))
  var Va = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: Ga,
    tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    strong:
      /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
    em: /^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\s,punctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\s,punctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: Ga,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
    _punctuation: '!"#$%&\'()*+\\-./:;<=>?@\\[^_{|}~',
  }
  ;(Va.em = Ha(Va.em)
    .replace(/punctuation/g, Va._punctuation)
    .getRegex()),
    (Va._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
    (Va._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    (Va._email =
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    (Va.autolink = Ha(Va.autolink)
      .replace('scheme', Va._scheme)
      .replace('email', Va._email)
      .getRegex()),
    (Va._attribute =
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    (Va.tag = Ha(Va.tag)
      .replace('comment', Ba._comment)
      .replace('attribute', Va._attribute)
      .getRegex()),
    (Va._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    (Va._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/),
    (Va._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    (Va.link = Ha(Va.link)
      .replace('label', Va._label)
      .replace('href', Va._href)
      .replace('title', Va._title)
      .getRegex()),
    (Va.reflink = Ha(Va.reflink).replace('label', Va._label).getRegex()),
    (Va.normal = Wa({}, Va)),
    (Va.pedantic = Wa({}, Va.normal, {
      strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
      link: Ha(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', Va._label)
        .getRegex(),
      reflink: Ha(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', Va._label)
        .getRegex(),
    })),
    (Va.gfm = Wa({}, Va.normal, {
      escape: Ha(Va.escape).replace('])', '~|])').getRegex(),
      _extended_email:
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal:
        /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^~+(?=\S)([\s\S]*?\S)~+/,
      text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
    })),
    (Va.gfm.url = Ha(Va.gfm.url, 'i')
      .replace('email', Va.gfm._extended_email)
      .getRegex()),
    (Va.breaks = Wa({}, Va.gfm, {
      br: Ha(Va.br).replace('{2,}', '*').getRegex(),
      text: Ha(Va.gfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex(),
    }))
  var Ka = { block: Ba, inline: Va },
    Xa = ra.defaults,
    Ya = Ka.block,
    Ja = Ka.inline
  function Qa(e) {
    return e
      .replace(/---/g, '—')
      .replace(/--/g, '–')
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
      .replace(/'/g, '’')
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
      .replace(/"/g, '”')
      .replace(/\.{3}/g, '…')
  }
  function el(e) {
    var t,
      n,
      r = '',
      i = e.length
    for (t = 0; t < i; t++)
      (n = e.charCodeAt(t)),
        Math.random() > 0.5 && (n = 'x' + n.toString(16)),
        (r += '&#' + n + ';')
    return r
  }
  var tl = (function () {
      function e(t) {
        wo(this, e),
          (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = t || Xa),
          (this.options.tokenizer = this.options.tokenizer || new Fa()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options)
        var n = { block: Ya.normal, inline: Ja.normal }
        this.options.pedantic
          ? ((n.block = Ya.pedantic), (n.inline = Ja.pedantic))
          : this.options.gfm &&
            ((n.block = Ya.gfm),
            this.options.breaks ? (n.inline = Ja.breaks) : (n.inline = Ja.gfm)),
          (this.tokenizer.rules = n)
      }
      return (
        Eo(
          e,
          [
            {
              key: 'lex',
              value: function (e) {
                return (
                  (e = e.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ')),
                  this.blockTokens(e, this.tokens, !0),
                  this.inline(this.tokens),
                  this.tokens
                )
              },
            },
            {
              key: 'blockTokens',
              value: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  a =
                    !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2]
                for (e = e.replace(/^ +$/gm, ''); e; )
                  if ((t = this.tokenizer.space(e)))
                    (e = e.substring(t.raw.length)), t.type && o.push(t)
                  else if ((t = this.tokenizer.code(e, o)))
                    (e = e.substring(t.raw.length)),
                      t.type
                        ? o.push(t)
                        : (((i = o[o.length - 1]).raw += '\n' + t.raw),
                          (i.text += '\n' + t.text))
                  else if ((t = this.tokenizer.fences(e)))
                    (e = e.substring(t.raw.length)), o.push(t)
                  else if ((t = this.tokenizer.heading(e)))
                    (e = e.substring(t.raw.length)), o.push(t)
                  else if ((t = this.tokenizer.nptable(e)))
                    (e = e.substring(t.raw.length)), o.push(t)
                  else if ((t = this.tokenizer.hr(e)))
                    (e = e.substring(t.raw.length)), o.push(t)
                  else if ((t = this.tokenizer.blockquote(e)))
                    (e = e.substring(t.raw.length)),
                      (t.tokens = this.blockTokens(t.text, [], a)),
                      o.push(t)
                  else if ((t = this.tokenizer.list(e))) {
                    for (
                      e = e.substring(t.raw.length), r = t.items.length, n = 0;
                      n < r;
                      n++
                    )
                      t.items[n].tokens = this.blockTokens(
                        t.items[n].text,
                        [],
                        !1
                      )
                    o.push(t)
                  } else if ((t = this.tokenizer.html(e)))
                    (e = e.substring(t.raw.length)), o.push(t)
                  else if (a && (t = this.tokenizer.def(e)))
                    (e = e.substring(t.raw.length)),
                      this.tokens.links[t.tag] ||
                        (this.tokens.links[t.tag] = {
                          href: t.href,
                          title: t.title,
                        })
                  else if ((t = this.tokenizer.table(e)))
                    (e = e.substring(t.raw.length)), o.push(t)
                  else if ((t = this.tokenizer.lheading(e)))
                    (e = e.substring(t.raw.length)), o.push(t)
                  else if (a && (t = this.tokenizer.paragraph(e)))
                    (e = e.substring(t.raw.length)), o.push(t)
                  else if ((t = this.tokenizer.text(e, o)))
                    (e = e.substring(t.raw.length)),
                      t.type
                        ? o.push(t)
                        : (((i = o[o.length - 1]).raw += '\n' + t.raw),
                          (i.text += '\n' + t.text))
                  else if (e) {
                    var l = 'Infinite loop on byte: ' + e.charCodeAt(0)
                    if (this.options.silent) {
                      console.error(l)
                      break
                    }
                    throw new Error(l)
                  }
                return o
              },
            },
            {
              key: 'inline',
              value: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  l = e.length
                for (t = 0; t < l; t++)
                  switch ((a = e[t]).type) {
                    case 'paragraph':
                    case 'text':
                    case 'heading':
                      ;(a.tokens = []), this.inlineTokens(a.text, a.tokens)
                      break
                    case 'table':
                      for (
                        a.tokens = { header: [], cells: [] },
                          i = a.header.length,
                          n = 0;
                        n < i;
                        n++
                      )
                        (a.tokens.header[n] = []),
                          this.inlineTokens(a.header[n], a.tokens.header[n])
                      for (i = a.cells.length, n = 0; n < i; n++)
                        for (
                          o = a.cells[n], a.tokens.cells[n] = [], r = 0;
                          r < o.length;
                          r++
                        )
                          (a.tokens.cells[n][r] = []),
                            this.inlineTokens(o[r], a.tokens.cells[n][r])
                      break
                    case 'blockquote':
                      this.inline(a.tokens)
                      break
                    case 'list':
                      for (i = a.items.length, n = 0; n < i; n++)
                        this.inline(a.items[n].tokens)
                  }
                return e
              },
            },
            {
              key: 'inlineTokens',
              value: function (e) {
                for (
                  var t,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                  e;

                )
                  if ((t = this.tokenizer.escape(e)))
                    (e = e.substring(t.raw.length)), n.push(t)
                  else if ((t = this.tokenizer.tag(e, r, i)))
                    (e = e.substring(t.raw.length)),
                      (r = t.inLink),
                      (i = t.inRawBlock),
                      n.push(t)
                  else if ((t = this.tokenizer.link(e)))
                    (e = e.substring(t.raw.length)),
                      'link' === t.type &&
                        (t.tokens = this.inlineTokens(t.text, [], !0, i)),
                      n.push(t)
                  else if ((t = this.tokenizer.reflink(e, this.tokens.links)))
                    (e = e.substring(t.raw.length)),
                      'link' === t.type &&
                        (t.tokens = this.inlineTokens(t.text, [], !0, i)),
                      n.push(t)
                  else if ((t = this.tokenizer.strong(e)))
                    (e = e.substring(t.raw.length)),
                      (t.tokens = this.inlineTokens(t.text, [], r, i)),
                      n.push(t)
                  else if ((t = this.tokenizer.em(e)))
                    (e = e.substring(t.raw.length)),
                      (t.tokens = this.inlineTokens(t.text, [], r, i)),
                      n.push(t)
                  else if ((t = this.tokenizer.codespan(e)))
                    (e = e.substring(t.raw.length)), n.push(t)
                  else if ((t = this.tokenizer.br(e)))
                    (e = e.substring(t.raw.length)), n.push(t)
                  else if ((t = this.tokenizer.del(e)))
                    (e = e.substring(t.raw.length)),
                      (t.tokens = this.inlineTokens(t.text, [], r, i)),
                      n.push(t)
                  else if ((t = this.tokenizer.autolink(e, el)))
                    (e = e.substring(t.raw.length)), n.push(t)
                  else if (r || !(t = this.tokenizer.url(e, el))) {
                    if ((t = this.tokenizer.inlineText(e, i, Qa)))
                      (e = e.substring(t.raw.length)), n.push(t)
                    else if (e) {
                      var o = 'Infinite loop on byte: ' + e.charCodeAt(0)
                      if (this.options.silent) {
                        console.error(o)
                        break
                      }
                      throw new Error(o)
                    }
                  } else (e = e.substring(t.raw.length)), n.push(t)
                return n
              },
            },
          ],
          [
            {
              key: 'lex',
              value: function (t, n) {
                return new e(n).lex(t)
              },
            },
            {
              key: 'rules',
              get: function () {
                return { block: Ya, inline: Ja }
              },
            },
          ]
        ),
        e
      )
    })(),
    nl = ra.defaults,
    rl = ja,
    il = Ta,
    ol = (function () {
      function e(t) {
        wo(this, e), (this.options = t || nl)
      }
      return (
        Eo(e, [
          {
            key: 'code',
            value: function (e, t, n) {
              var r = (t || '').match(/\S*/)[0]
              if (this.options.highlight) {
                var i = this.options.highlight(e, r)
                null != i && i !== e && ((n = !0), (e = i))
              }
              return r
                ? '<pre><code class="' +
                    this.options.langPrefix +
                    il(r, !0) +
                    '">' +
                    (n ? e : il(e, !0)) +
                    '</code></pre>\n'
                : '<pre><code>' + (n ? e : il(e, !0)) + '</code></pre>\n'
            },
          },
          {
            key: 'blockquote',
            value: function (e) {
              return '<blockquote>\n' + e + '</blockquote>\n'
            },
          },
          {
            key: 'html',
            value: function (e) {
              return e
            },
          },
          {
            key: 'heading',
            value: function (e, t, n, r) {
              return this.options.headerIds
                ? '<h' +
                    t +
                    ' id="' +
                    this.options.headerPrefix +
                    r.slug(n) +
                    '">' +
                    e +
                    '</h' +
                    t +
                    '>\n'
                : '<h' + t + '>' + e + '</h' + t + '>\n'
            },
          },
          {
            key: 'hr',
            value: function () {
              return this.options.xhtml ? '<hr/>\n' : '<hr>\n'
            },
          },
          {
            key: 'list',
            value: function (e, t, n) {
              var r = t ? 'ol' : 'ul'
              return (
                '<' +
                r +
                (t && 1 !== n ? ' start="' + n + '"' : '') +
                '>\n' +
                e +
                '</' +
                r +
                '>\n'
              )
            },
          },
          {
            key: 'listitem',
            value: function (e) {
              return '<li>' + e + '</li>\n'
            },
          },
          {
            key: 'checkbox',
            value: function (e) {
              return (
                '<input ' +
                (e ? 'checked="" ' : '') +
                'disabled="" type="checkbox"' +
                (this.options.xhtml ? ' /' : '') +
                '> '
              )
            },
          },
          {
            key: 'paragraph',
            value: function (e) {
              return '<p>' + e + '</p>\n'
            },
          },
          {
            key: 'table',
            value: function (e, t) {
              return (
                t && (t = '<tbody>' + t + '</tbody>'),
                '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
              )
            },
          },
          {
            key: 'tablerow',
            value: function (e) {
              return '<tr>\n' + e + '</tr>\n'
            },
          },
          {
            key: 'tablecell',
            value: function (e, t) {
              var n = t.header ? 'th' : 'td'
              return (
                (t.align
                  ? '<' + n + ' align="' + t.align + '">'
                  : '<' + n + '>') +
                e +
                '</' +
                n +
                '>\n'
              )
            },
          },
          {
            key: 'strong',
            value: function (e) {
              return '<strong>' + e + '</strong>'
            },
          },
          {
            key: 'em',
            value: function (e) {
              return '<em>' + e + '</em>'
            },
          },
          {
            key: 'codespan',
            value: function (e) {
              return '<code>' + e + '</code>'
            },
          },
          {
            key: 'br',
            value: function () {
              return this.options.xhtml ? '<br/>' : '<br>'
            },
          },
          {
            key: 'del',
            value: function (e) {
              return '<del>' + e + '</del>'
            },
          },
          {
            key: 'link',
            value: function (e, t, n) {
              if (
                null ===
                (e = rl(this.options.sanitize, this.options.baseUrl, e))
              )
                return n
              var r = '<a href="' + il(e) + '"'
              return t && (r += ' title="' + t + '"'), (r += '>' + n + '</a>')
            },
          },
          {
            key: 'image',
            value: function (e, t, n) {
              if (
                null ===
                (e = rl(this.options.sanitize, this.options.baseUrl, e))
              )
                return n
              var r = '<img src="' + e + '" alt="' + n + '"'
              return (
                t && (r += ' title="' + t + '"'),
                (r += this.options.xhtml ? '/>' : '>')
              )
            },
          },
          {
            key: 'text',
            value: function (e) {
              return e
            },
          },
        ]),
        e
      )
    })(),
    al = (function () {
      function e() {
        wo(this, e)
      }
      return (
        Eo(e, [
          {
            key: 'strong',
            value: function (e) {
              return e
            },
          },
          {
            key: 'em',
            value: function (e) {
              return e
            },
          },
          {
            key: 'codespan',
            value: function (e) {
              return e
            },
          },
          {
            key: 'del',
            value: function (e) {
              return e
            },
          },
          {
            key: 'html',
            value: function (e) {
              return e
            },
          },
          {
            key: 'text',
            value: function (e) {
              return e
            },
          },
          {
            key: 'link',
            value: function (e, t, n) {
              return '' + n
            },
          },
          {
            key: 'image',
            value: function (e, t, n) {
              return '' + n
            },
          },
          {
            key: 'br',
            value: function () {
              return ''
            },
          },
        ]),
        e
      )
    })(),
    ll = (function () {
      function e() {
        wo(this, e), (this.seen = {})
      }
      return (
        Eo(e, [
          {
            key: 'slug',
            value: function (e) {
              var t = e
                .toLowerCase()
                .trim()
                .replace(/<[!\/a-z].*?>/gi, '')
                .replace(
                  /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                  ''
                )
                .replace(/\s/g, '-')
              if (this.seen.hasOwnProperty(t)) {
                var n = t
                do {
                  this.seen[n]++, (t = n + '-' + this.seen[n])
                } while (this.seen.hasOwnProperty(t))
              }
              return (this.seen[t] = 0), t
            },
          },
        ]),
        e
      )
    })(),
    sl = ra.defaults,
    cl = Oa,
    ul = (function () {
      function e(t) {
        wo(this, e),
          (this.options = t || sl),
          (this.options.renderer = this.options.renderer || new ol()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new al()),
          (this.slugger = new ll())
      }
      return (
        Eo(
          e,
          [
            {
              key: 'parse',
              value: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  l,
                  s,
                  c,
                  u,
                  f,
                  p,
                  h,
                  g,
                  d,
                  v,
                  y,
                  b,
                  m =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  k = '',
                  x = e.length
                for (t = 0; t < x; t++)
                  switch ((u = e[t]).type) {
                    case 'space':
                      continue
                    case 'hr':
                      k += this.renderer.hr()
                      continue
                    case 'heading':
                      k += this.renderer.heading(
                        this.parseInline(u.tokens),
                        u.depth,
                        cl(this.parseInline(u.tokens, this.textRenderer)),
                        this.slugger
                      )
                      continue
                    case 'code':
                      k += this.renderer.code(u.text, u.lang, u.escaped)
                      continue
                    case 'table':
                      for (
                        s = '', l = '', i = u.header.length, n = 0;
                        n < i;
                        n++
                      )
                        l += this.renderer.tablecell(
                          this.parseInline(u.tokens.header[n]),
                          { header: !0, align: u.align[n] }
                        )
                      for (
                        s += this.renderer.tablerow(l),
                          c = '',
                          i = u.cells.length,
                          n = 0;
                        n < i;
                        n++
                      ) {
                        for (
                          l = '', o = (a = u.tokens.cells[n]).length, r = 0;
                          r < o;
                          r++
                        )
                          l += this.renderer.tablecell(this.parseInline(a[r]), {
                            header: !1,
                            align: u.align[r],
                          })
                        c += this.renderer.tablerow(l)
                      }
                      k += this.renderer.table(s, c)
                      continue
                    case 'blockquote':
                      ;(c = this.parse(u.tokens)),
                        (k += this.renderer.blockquote(c))
                      continue
                    case 'list':
                      for (
                        f = u.ordered,
                          p = u.start,
                          h = u.loose,
                          i = u.items.length,
                          c = '',
                          n = 0;
                        n < i;
                        n++
                      )
                        (v = (d = u.items[n]).checked),
                          (y = d.task),
                          (g = ''),
                          d.task &&
                            ((b = this.renderer.checkbox(v)),
                            h
                              ? d.tokens.length > 0 &&
                                'text' === d.tokens[0].type
                                ? ((d.tokens[0].text =
                                    b + ' ' + d.tokens[0].text),
                                  d.tokens[0].tokens &&
                                    d.tokens[0].tokens.length > 0 &&
                                    'text' === d.tokens[0].tokens[0].type &&
                                    (d.tokens[0].tokens[0].text =
                                      b + ' ' + d.tokens[0].tokens[0].text))
                                : d.tokens.unshift({ type: 'text', text: b })
                              : (g += b)),
                          (g += this.parse(d.tokens, h)),
                          (c += this.renderer.listitem(g, y, v))
                      k += this.renderer.list(c, f, p)
                      continue
                    case 'html':
                      k += this.renderer.html(u.text)
                      continue
                    case 'paragraph':
                      k += this.renderer.paragraph(this.parseInline(u.tokens))
                      continue
                    case 'text':
                      for (
                        c = u.tokens ? this.parseInline(u.tokens) : u.text;
                        t + 1 < x && 'text' === e[t + 1].type;

                      )
                        c +=
                          '\n' +
                          ((u = e[++t]).tokens
                            ? this.parseInline(u.tokens)
                            : u.text)
                      k += m ? this.renderer.paragraph(c) : c
                      continue
                    default:
                      var w = 'Token with "' + u.type + '" type was not found.'
                      if (this.options.silent) return void console.error(w)
                      throw new Error(w)
                  }
                return k
              },
            },
            {
              key: 'parseInline',
              value: function (e, t) {
                t = t || this.renderer
                var n,
                  r,
                  i = '',
                  o = e.length
                for (n = 0; n < o; n++)
                  switch ((r = e[n]).type) {
                    case 'escape':
                      i += t.text(r.text)
                      break
                    case 'html':
                      i += t.html(r.text)
                      break
                    case 'link':
                      i += t.link(
                        r.href,
                        r.title,
                        this.parseInline(r.tokens, t)
                      )
                      break
                    case 'image':
                      i += t.image(r.href, r.title, r.text)
                      break
                    case 'strong':
                      i += t.strong(this.parseInline(r.tokens, t))
                      break
                    case 'em':
                      i += t.em(this.parseInline(r.tokens, t))
                      break
                    case 'codespan':
                      i += t.codespan(r.text)
                      break
                    case 'br':
                      i += t.br()
                      break
                    case 'del':
                      i += t.del(this.parseInline(r.tokens, t))
                      break
                    case 'text':
                      i += t.text(r.text)
                      break
                    default:
                      var a = 'Token with "' + r.type + '" type was not found.'
                      if (this.options.silent) return void console.error(a)
                      throw new Error(a)
                  }
                return i
              },
            },
          ],
          [
            {
              key: 'parse',
              value: function (t, n) {
                return new e(n).parse(t)
              },
            },
          ]
        ),
        e
      )
    })(),
    fl = $a,
    pl = La,
    hl = Ta,
    gl = ra.getDefaults,
    dl = ra.changeDefaults,
    vl = ra.defaults
  function yl(e, t, n) {
    if (null == e)
      throw new Error('marked(): input parameter is undefined or null')
    if ('string' != typeof e)
      throw new Error(
        'marked(): input parameter is of type ' +
          Object.prototype.toString.call(e) +
          ', string expected'
      )
    if (
      ('function' == typeof t && ((n = t), (t = null)),
      (t = fl({}, yl.defaults, t || {})),
      pl(t),
      n)
    ) {
      var r,
        i = t.highlight
      try {
        r = tl.lex(e, t)
      } catch (e) {
        return n(e)
      }
      var o = function (e) {
        var o
        if (!e)
          try {
            o = ul.parse(r, t)
          } catch (t) {
            e = t
          }
        return (t.highlight = i), e ? n(e) : n(null, o)
      }
      if (!i || i.length < 3) return o()
      if ((delete t.highlight, !r.length)) return o()
      var a = 0
      return (
        yl.walkTokens(r, function (e) {
          'code' === e.type &&
            (a++,
            i(e.text, e.lang, function (t, n) {
              if (t) return o(t)
              null != n && n !== e.text && ((e.text = n), (e.escaped = !0)),
                0 === --a && o()
            }))
        }),
        void (0 === a && o())
      )
    }
    try {
      var l = tl.lex(e, t)
      return t.walkTokens && yl.walkTokens(l, t.walkTokens), ul.parse(l, t)
    } catch (e) {
      if (
        ((e.message +=
          '\nPlease report this to https://github.com/markedjs/marked.'),
        t.silent)
      )
        return (
          '<p>An error occurred:</p><pre>' + hl(e.message + '', !0) + '</pre>'
        )
      throw e
    }
  }
  ;(yl.options = yl.setOptions =
    function (e) {
      return fl(yl.defaults, e), dl(yl.defaults), yl
    }),
    (yl.getDefaults = gl),
    (yl.defaults = vl),
    (yl.use = function (e) {
      var t = fl({}, e)
      if (
        (e.renderer &&
          (function () {
            var n = yl.defaults.renderer || new ol(),
              r = function (t) {
                var r = n[t]
                n[t] = function () {
                  for (
                    var i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a]
                  var l = e.renderer[t].apply(n, o)
                  return !1 === l && (l = r.apply(n, o)), l
                }
              }
            for (var i in e.renderer) r(i)
            t.renderer = n
          })(),
        e.tokenizer &&
          (function () {
            var n = yl.defaults.tokenizer || new Fa(),
              r = function (t) {
                var r = n[t]
                n[t] = function () {
                  for (
                    var i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a]
                  var l = e.tokenizer[t].apply(n, o)
                  return !1 === l && (l = r.apply(n, o)), l
                }
              }
            for (var i in e.tokenizer) r(i)
            t.tokenizer = n
          })(),
        e.walkTokens)
      ) {
        var n = yl.defaults.walkTokens
        t.walkTokens = function (t) {
          e.walkTokens(t), n && n(t)
        }
      }
      yl.setOptions(t)
    }),
    (yl.walkTokens = function (e, t) {
      var n,
        r = jo(e)
      try {
        for (r.s(); !(n = r.n()).done; ) {
          var i = n.value
          switch ((t(i), i.type)) {
            case 'table':
              var o,
                a = jo(i.tokens.header)
              try {
                for (a.s(); !(o = a.n()).done; ) {
                  var l = o.value
                  yl.walkTokens(l, t)
                }
              } catch (e) {
                a.e(e)
              } finally {
                a.f()
              }
              var s,
                c = jo(i.tokens.cells)
              try {
                for (c.s(); !(s = c.n()).done; ) {
                  var u,
                    f = jo(s.value)
                  try {
                    for (f.s(); !(u = f.n()).done; ) {
                      var p = u.value
                      yl.walkTokens(p, t)
                    }
                  } catch (e) {
                    f.e(e)
                  } finally {
                    f.f()
                  }
                }
              } catch (e) {
                c.e(e)
              } finally {
                c.f()
              }
              break
            case 'list':
              yl.walkTokens(i.items, t)
              break
            default:
              i.tokens && yl.walkTokens(i.tokens, t)
          }
        }
      } catch (e) {
        r.e(e)
      } finally {
        r.f()
      }
    }),
    (yl.Parser = ul),
    (yl.parser = ul.parse),
    (yl.Renderer = ol),
    (yl.TextRenderer = al),
    (yl.Lexer = tl),
    (yl.lexer = tl.lex),
    (yl.Tokenizer = Fa),
    (yl.Slugger = ll),
    (yl.parse = yl)
  var bl = yl,
    ml = '__SCRIPT_END__',
    kl = /\[([\s\d,|-]*)\]/,
    xl = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
  return function () {
    var e
    function t(e) {
      var t = (
          e.querySelector('[data-template]') ||
          e.querySelector('script') ||
          e
        ).textContent,
        n = (t = t.replace(new RegExp(ml, 'g'), '</script>')).match(
          /^\n?(\s*)/
        )[1].length,
        r = t.match(/^\n?(\t*)/)[1].length
      return (
        r > 0
          ? (t = t.replace(new RegExp('\\n?\\t{' + r + '}', 'g'), '\n'))
          : n > 1 && (t = t.replace(new RegExp('\\n? {' + n + '}', 'g'), '\n')),
        t
      )
    }
    function n(e) {
      for (var t = e.attributes, n = [], r = 0, i = t.length; r < i; r++) {
        var o = t[r].name,
          a = t[r].value
        ;/data\-(markdown|separator|vertical|notes)/gi.test(o) ||
          (a ? n.push(o + '="' + a + '"') : n.push(o))
      }
      return n.join(' ')
    }
    function r(e) {
      return (
        ((e = e || {}).separator = e.separator || '^\r?\n---\r?\n$'),
        (e.notesSeparator = e.notesSeparator || 'notes?:'),
        (e.attributes = e.attributes || ''),
        e
      )
    }
    function i(e, t) {
      t = r(t)
      var n = e.split(new RegExp(t.notesSeparator, 'mgi'))
      return (
        2 === n.length &&
          (e = n[0] + '<aside class="notes">' + bl(n[1].trim()) + '</aside>'),
        '<script type="text/template">' +
          (e = e.replace(/<\/script>/g, ml)) +
          '</script>'
      )
    }
    function o(e, t) {
      t = r(t)
      for (
        var n,
          o,
          a,
          l = new RegExp(
            t.separator +
              (t.verticalSeparator ? '|' + t.verticalSeparator : ''),
            'mg'
          ),
          s = new RegExp(t.separator),
          c = 0,
          u = !0,
          f = [];
        (n = l.exec(e));

      )
        !(o = s.test(n[0])) && u && f.push([]),
          (a = e.substring(c, n.index)),
          o && u ? f.push(a) : f[f.length - 1].push(a),
          (c = l.lastIndex),
          (u = o)
      ;(u ? f : f[f.length - 1]).push(e.substring(c))
      for (var p = '', h = 0, g = f.length; h < g; h++)
        f[h] instanceof Array
          ? ((p += '<section ' + t.attributes + '>'),
            f[h].forEach(function (e) {
              p += '<section data-markdown>' + i(e, t) + '</section>'
            }),
            (p += '</section>'))
          : (p +=
              '<section ' +
              t.attributes +
              ' data-markdown>' +
              i(f[h], t) +
              '</section>')
      return p
    }
    function a(e) {
      return new Promise(function (r) {
        var a = []
        ;[].slice
          .call(
            e.querySelectorAll('[data-markdown]:not([data-markdown-parsed])')
          )
          .forEach(function (e, r) {
            e.getAttribute('data-markdown').length
              ? a.push(
                  (function (e) {
                    return new Promise(function (t, n) {
                      var r = new XMLHttpRequest(),
                        i = e.getAttribute('data-markdown'),
                        o = e.getAttribute('data-charset')
                      null != o &&
                        '' != o &&
                        r.overrideMimeType('text/html; charset=' + o),
                        (r.onreadystatechange = function (e, r) {
                          4 === r.readyState &&
                            ((r.status >= 200 && r.status < 300) ||
                            0 === r.status
                              ? t(r, i)
                              : n(r, i))
                        }.bind(this, e, r)),
                        r.open('GET', i, !0)
                      try {
                        r.send()
                      } catch (e) {
                        console.warn(
                          'Failed to get the Markdown file ' +
                            i +
                            '. Make sure that the presentation and the file are served by a HTTP server and the file can be found there. ' +
                            e
                        ),
                          t(r, i)
                      }
                    })
                  })(e).then(
                    function (t, r) {
                      e.outerHTML = o(t.responseText, {
                        separator: e.getAttribute('data-separator'),
                        verticalSeparator: e.getAttribute(
                          'data-separator-vertical'
                        ),
                        notesSeparator: e.getAttribute('data-separator-notes'),
                        attributes: n(e),
                      })
                    },
                    function (t, n) {
                      e.outerHTML =
                        '<section data-state="alert">ERROR: The attempt to fetch ' +
                        n +
                        ' failed with HTTP status ' +
                        t.status +
                        ".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"
                    }
                  )
                )
              : e.getAttribute('data-separator') ||
                e.getAttribute('data-separator-vertical') ||
                e.getAttribute('data-separator-notes')
              ? (e.outerHTML = o(t(e), {
                  separator: e.getAttribute('data-separator'),
                  verticalSeparator: e.getAttribute('data-separator-vertical'),
                  notesSeparator: e.getAttribute('data-separator-notes'),
                  attributes: n(e),
                }))
              : (e.innerHTML = i(t(e)))
          }),
          Promise.all(a).then(r)
      })
    }
    function l(e, t, n) {
      var r,
        i,
        o = new RegExp(n, 'mg'),
        a = new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])', 'mg'),
        l = e.nodeValue
      if ((r = o.exec(l))) {
        var s = r[1]
        for (
          l = l.substring(0, r.index) + l.substring(o.lastIndex),
            e.nodeValue = l;
          (i = a.exec(s));

        )
          i[2] ? t.setAttribute(i[1], i[2]) : t.setAttribute(i[3], '')
        return !0
      }
      return !1
    }
    function s() {
      var n = e
        .getRevealElement()
        .querySelectorAll('[data-markdown]:not([data-markdown-parsed])')
      return (
        [].slice.call(n).forEach(function (e) {
          e.setAttribute('data-markdown-parsed', !0)
          var n = e.querySelector('aside.notes'),
            r = t(e)
          ;(e.innerHTML = bl(r)),
            (function e(t, n, r, i, o) {
              if (null != n && null != n.childNodes && n.childNodes.length > 0)
                for (var a = n, s = 0; s < n.childNodes.length; s++) {
                  var c = n.childNodes[s]
                  if (s > 0)
                    for (var u = s - 1; u >= 0; ) {
                      var f = n.childNodes[u]
                      if (
                        'function' == typeof f.setAttribute &&
                        'BR' != f.tagName
                      ) {
                        a = f
                        break
                      }
                      u -= 1
                    }
                  var p = t
                  'section' == c.nodeName && ((p = c), (a = c)),
                    ('function' != typeof c.setAttribute &&
                      c.nodeType != Node.COMMENT_NODE) ||
                      e(p, c, a, i, o)
                }
              n.nodeType == Node.COMMENT_NODE && 0 == l(n, r, i) && l(n, t, o)
            })(
              e,
              e,
              null,
              e.getAttribute('data-element-attributes') ||
                e.parentNode.getAttribute('data-element-attributes') ||
                '\\.element\\s*?(.+?)$',
              e.getAttribute('data-attributes') ||
                e.parentNode.getAttribute('data-attributes') ||
                '\\.slide:\\s*?(\\S.+?)$'
            ),
            n && e.appendChild(n)
        }),
        Promise.resolve()
      )
    }
    return {
      id: 'markdown',
      init: function (t) {
        e = t
        var n = new bl.Renderer()
        return (
          (n.code = function (e, t) {
            var n = ''
            return (
              kl.test(t) &&
                ((n = t.match(kl)[1].trim()),
                (n = 'data-line-numbers="'.concat(n, '"')),
                (t = t.replace(kl, '').trim())),
              (e = e.replace(/([&<>'"])/g, function (e) {
                return xl[e]
              })),
              '<pre><code '
                .concat(n, ' class="')
                .concat(t, '">')
                .concat(e, '</code></pre>')
            )
          }),
          bl.setOptions(
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? Ao(Object(n), !0).forEach(function (t) {
                      _o(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Ao(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      )
                    })
              }
              return e
            })({ renderer: n }, e.getConfig().markdown)
          ),
          a(e.getRevealElement()).then(s)
        )
      },
      processSlides: a,
      convertSlides: s,
      slidify: o,
      marked: bl,
    }
  }
})
