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
  h = ''.split,
  p = i(function () {
    return !Object('z').propertyIsEnumerable(0)
  })
    ? function (e) {
        return 'String' == f(e) ? h.call(e, '') : Object(e)
      }
    : Object,
  g = function (e) {
    if (null == e) throw TypeError("Can't call method on " + e)
    return e
  },
  d = function (e) {
    return p(g(e))
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
  _ = Object.getOwnPropertyDescriptor,
  E = {
    f: o
      ? _
      : function (e, t) {
          if (((e = d(e)), (t = y(t, !0)), S))
            try {
              return _(e, t)
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
  z = r['__core-js_shared__'] || j('__core-js_shared__', {}),
  $ = Function.toString
'function' != typeof z.inspectSource &&
  (z.inspectSource = function (e) {
    return $.call(e)
  })
var P,
  I,
  C,
  L = z.inspectSource,
  M = r.WeakMap,
  N = 'function' == typeof M && /native code/.test(L(M)),
  q = t(function (e) {
    ;(e.exports = function (e, t) {
      return z[e] || (z[e] = void 0 !== t ? t : {})
    })('versions', []).push({
      version: '3.6.5',
      mode: 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
    })
  }),
  D = 0,
  U = Math.random(),
  Z = function (e) {
    return (
      'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++D + U).toString(36)
    )
  },
  F = q('keys'),
  G = function (e) {
    return F[e] || (F[e] = Z(e))
  },
  H = {},
  W = r.WeakMap
if (N) {
  var B = new W(),
    V = B.get,
    K = B.has,
    X = B.set
  ;(P = function (e, t) {
    return X.call(B, e, t), t
  }),
    (I = function (e) {
      return V.call(B, e) || {}
    }),
    (C = function (e) {
      return K.call(B, e)
    })
} else {
  var Y = G('state')
  ;(H[Y] = !0),
    (P = function (e, t) {
      return R(e, Y, t), t
    }),
    (I = function (e) {
      return m(e, Y) ? e[Y] : {}
    }),
    (C = function (e) {
      return m(e, Y)
    })
}
var J,
  Q,
  ee = {
    set: P,
    get: I,
    has: C,
    enforce: function (e) {
      return C(e) ? I(e) : P(e, {})
    },
    getterFor: function (e) {
      return function (t) {
        var n
        if (!v(t) || (n = I(t)).type !== e)
          throw TypeError('Incompatible receiver, ' + e + ' required')
        return n
      }
    },
  },
  te = t(function (e) {
    var t = ee.get,
      n = ee.enforce,
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
      return ('function' == typeof this && t(this).source) || L(this)
    })
  }),
  ne = r,
  re = function (e) {
    return 'function' == typeof e ? e : void 0
  },
  ie = function (e, t) {
    return arguments.length < 2
      ? re(ne[e]) || re(r[e])
      : (ne[e] && ne[e][t]) || (r[e] && r[e][t])
  },
  oe = Math.ceil,
  ae = Math.floor,
  le = function (e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? ae : oe)(e)
  },
  se = Math.min,
  ce = function (e) {
    return e > 0 ? se(le(e), 9007199254740991) : 0
  },
  ue = Math.max,
  fe = Math.min,
  he = function (e, t) {
    var n = le(e)
    return n < 0 ? ue(n + t, 0) : fe(n, t)
  },
  pe = function (e) {
    return function (t, n, r) {
      var i,
        o = d(t),
        a = ce(o.length),
        l = he(r, a)
      if (e && n != n) {
        for (; a > l; ) if ((i = o[l++]) != i) return !0
      } else
        for (; a > l; l++) if ((e || l in o) && o[l] === n) return e || l || 0
      return !e && -1
    }
  },
  ge = { includes: pe(!0), indexOf: pe(!1) },
  de = ge.indexOf,
  ve = function (e, t) {
    var n,
      r = d(e),
      i = 0,
      o = []
    for (n in r) !m(H, n) && m(r, n) && o.push(n)
    for (; t.length > i; ) m(r, (n = t[i++])) && (~de(o, n) || o.push(n))
    return o
  },
  ye = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ],
  be = ye.concat('length', 'prototype'),
  me = {
    f:
      Object.getOwnPropertyNames ||
      function (e) {
        return ve(e, be)
      },
  },
  ke = { f: Object.getOwnPropertySymbols },
  xe =
    ie('Reflect', 'ownKeys') ||
    function (e) {
      var t = me.f(A(e)),
        n = ke.f
      return n ? t.concat(n(e)) : t
    },
  we = function (e, t) {
    for (var n = xe(t), r = O.f, i = E.f, o = 0; o < n.length; o++) {
      var a = n[o]
      m(e, a) || r(e, a, i(t, a))
    }
  },
  Se = /#|\.prototype\./,
  _e = function (e, t) {
    var n = Ae[Ee(e)]
    return n == Oe || (n != Te && ('function' == typeof t ? i(t) : !!t))
  },
  Ee = (_e.normalize = function (e) {
    return String(e).replace(Se, '.').toLowerCase()
  }),
  Ae = (_e.data = {}),
  Te = (_e.NATIVE = 'N'),
  Oe = (_e.POLYFILL = 'P'),
  Re = _e,
  je = E.f,
  ze = function (e, t) {
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
          (o = e.noTargetGet ? (l = je(n, i)) && l.value : n[i]),
          !Re(c ? i : s + (u ? '.' : '#') + i, e.forced) && void 0 !== o)
        ) {
          if (typeof a == typeof o) continue
          we(a, o)
        }
        ;(e.sham || (o && o.sham)) && R(a, 'sham', !0), te(n, i, a, e)
      }
  },
  $e =
    Array.isArray ||
    function (e) {
      return 'Array' == f(e)
    },
  Pe = function (e) {
    return Object(g(e))
  },
  Ie = function (e, t, n) {
    var r = y(t)
    r in e ? O.f(e, r, c(0, n)) : (e[r] = n)
  },
  Ce =
    !!Object.getOwnPropertySymbols &&
    !i(function () {
      return !String(Symbol())
    }),
  Le = Ce && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  Me = q('wks'),
  Ne = r.Symbol,
  qe = Le ? Ne : (Ne && Ne.withoutSetter) || Z,
  De = function (e) {
    return (
      m(Me, e) ||
        (Ce && m(Ne, e) ? (Me[e] = Ne[e]) : (Me[e] = qe('Symbol.' + e))),
      Me[e]
    )
  },
  Ue = De('species'),
  Ze = function (e, t) {
    var n
    return (
      $e(e) &&
        ('function' != typeof (n = e.constructor) ||
        (n !== Array && !$e(n.prototype))
          ? v(n) && null === (n = n[Ue]) && (n = void 0)
          : (n = void 0)),
      new (void 0 === n ? Array : n)(0 === t ? 0 : t)
    )
  },
  Fe = ie('navigator', 'userAgent') || '',
  Ge = r.process,
  He = Ge && Ge.versions,
  We = He && He.v8
We
  ? (Q = (J = We.split('.'))[0] + J[1])
  : Fe &&
    (!(J = Fe.match(/Edge\/(\d+)/)) || J[1] >= 74) &&
    (J = Fe.match(/Chrome\/(\d+)/)) &&
    (Q = J[1])
var Be = Q && +Q,
  Ve = De('species'),
  Ke = function (e) {
    return (
      Be >= 51 ||
      !i(function () {
        var t = []
        return (
          ((t.constructor = {})[Ve] = function () {
            return { foo: 1 }
          }),
          1 !== t[e](Boolean).foo
        )
      })
    )
  },
  Xe = De('isConcatSpreadable'),
  Ye =
    Be >= 51 ||
    !i(function () {
      var e = []
      return (e[Xe] = !1), e.concat()[0] !== e
    }),
  Je = Ke('concat'),
  Qe = function (e) {
    if (!v(e)) return !1
    var t = e[Xe]
    return void 0 !== t ? !!t : $e(e)
  }
ze(
  { target: 'Array', proto: !0, forced: !Ye || !Je },
  {
    concat: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a = Pe(this),
        l = Ze(a, 0),
        s = 0
      for (t = -1, r = arguments.length; t < r; t++)
        if (Qe((o = -1 === t ? a : arguments[t]))) {
          if (s + (i = ce(o.length)) > 9007199254740991)
            throw TypeError('Maximum allowed index exceeded')
          for (n = 0; n < i; n++, s++) n in o && Ie(l, s, o[n])
        } else {
          if (s >= 9007199254740991)
            throw TypeError('Maximum allowed index exceeded')
          Ie(l, s++, o)
        }
      return (l.length = s), l
    },
  }
)
var et = function (e) {
    if ('function' != typeof e)
      throw TypeError(String(e) + ' is not a function')
    return e
  },
  tt = function (e, t, n) {
    if ((et(e), void 0 === t)) return e
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
  nt = [].push,
  rt = function (e) {
    var t = 1 == e,
      n = 2 == e,
      r = 3 == e,
      i = 4 == e,
      o = 6 == e,
      a = 5 == e || o
    return function (l, s, c, u) {
      for (
        var f,
          h,
          g = Pe(l),
          d = p(g),
          v = tt(s, c, 3),
          y = ce(d.length),
          b = 0,
          m = u || Ze,
          k = t ? m(l, y) : n ? m(l, 0) : void 0;
        y > b;
        b++
      )
        if ((a || b in d) && ((h = v((f = d[b]), b, g)), e))
          if (t) k[b] = h
          else if (h)
            switch (e) {
              case 3:
                return !0
              case 5:
                return f
              case 6:
                return b
              case 2:
                nt.call(k, f)
            }
          else if (i) return !1
      return o ? -1 : r || i ? i : k
    }
  },
  it = {
    forEach: rt(0),
    map: rt(1),
    filter: rt(2),
    some: rt(3),
    every: rt(4),
    find: rt(5),
    findIndex: rt(6),
  },
  ot = function (e, t) {
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
  at = Object.defineProperty,
  lt = {},
  st = function (e) {
    throw e
  },
  ct = function (e, t) {
    if (m(lt, e)) return lt[e]
    t || (t = {})
    var n = [][e],
      r = !!m(t, 'ACCESSORS') && t.ACCESSORS,
      a = m(t, 0) ? t[0] : st,
      l = m(t, 1) ? t[1] : void 0
    return (lt[e] =
      !!n &&
      !i(function () {
        if (r && !o) return !0
        var e = { length: -1 }
        r ? at(e, 1, { enumerable: !0, get: st }) : (e[1] = 1), n.call(e, a, l)
      }))
  },
  ut = it.forEach,
  ft = ot('forEach'),
  ht = ct('forEach'),
  pt =
    ft && ht
      ? [].forEach
      : function (e) {
          return ut(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
ze({ target: 'Array', proto: !0, forced: [].forEach != pt }, { forEach: pt })
var gt,
  dt =
    Object.keys ||
    function (e) {
      return ve(e, ye)
    },
  vt = o
    ? Object.defineProperties
    : function (e, t) {
        A(e)
        for (var n, r = dt(t), i = r.length, o = 0; i > o; )
          O.f(e, (n = r[o++]), t[n])
        return e
      },
  yt = ie('document', 'documentElement'),
  bt = G('IE_PROTO'),
  mt = function () {},
  kt = function (e) {
    return '<script>' + e + '</script>'
  },
  xt = function () {
    try {
      gt = document.domain && new ActiveXObject('htmlfile')
    } catch (e) {}
    var e, t
    xt = gt
      ? (function (e) {
          e.write(kt('')), e.close()
          var t = e.parentWindow.Object
          return (e = null), t
        })(gt)
      : (((t = w('iframe')).style.display = 'none'),
        yt.appendChild(t),
        (t.src = String('javascript:')),
        (e = t.contentWindow.document).open(),
        e.write(kt('document.F=Object')),
        e.close(),
        e.F)
    for (var n = ye.length; n--; ) delete xt.prototype[ye[n]]
    return xt()
  }
H[bt] = !0
var wt =
    Object.create ||
    function (e, t) {
      var n
      return (
        null !== e
          ? ((mt.prototype = A(e)),
            (n = new mt()),
            (mt.prototype = null),
            (n[bt] = e))
          : (n = xt()),
        void 0 === t ? n : vt(n, t)
      )
    },
  St = De('unscopables'),
  _t = Array.prototype
null == _t[St] && O.f(_t, St, { configurable: !0, value: wt(null) })
var Et,
  At,
  Tt,
  Ot = function (e) {
    _t[St][e] = !0
  },
  Rt = {},
  jt = !i(function () {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    )
  }),
  zt = G('IE_PROTO'),
  $t = Object.prototype,
  Pt = jt
    ? Object.getPrototypeOf
    : function (e) {
        return (
          (e = Pe(e)),
          m(e, zt)
            ? e[zt]
            : 'function' == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? $t
            : null
        )
      },
  It = De('iterator'),
  Ct = !1
;[].keys &&
  ('next' in (Tt = [].keys())
    ? (At = Pt(Pt(Tt))) !== Object.prototype && (Et = At)
    : (Ct = !0)),
  null == Et && (Et = {}),
  m(Et, It) ||
    R(Et, It, function () {
      return this
    })
var Lt = { IteratorPrototype: Et, BUGGY_SAFARI_ITERATORS: Ct },
  Mt = O.f,
  Nt = De('toStringTag'),
  qt = function (e, t, n) {
    e &&
      !m((e = n ? e : e.prototype), Nt) &&
      Mt(e, Nt, { configurable: !0, value: t })
  },
  Dt = Lt.IteratorPrototype,
  Ut = function () {
    return this
  },
  Zt =
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
                  throw TypeError("Can't set " + String(e) + ' as a prototype')
              })(r),
              t ? e.call(n, r) : (n.__proto__ = r),
              n
            )
          }
        })()
      : void 0),
  Ft = Lt.IteratorPrototype,
  Gt = Lt.BUGGY_SAFARI_ITERATORS,
  Ht = De('iterator'),
  Wt = function () {
    return this
  },
  Bt = function (e, t, n, r, i, o, a) {
    !(function (e, t, n) {
      var r = t + ' Iterator'
      ;(e.prototype = wt(Dt, { next: c(1, n) })), qt(e, r, !1), (Rt[r] = Ut)
    })(n, t, r)
    var l,
      s,
      u,
      f = function (e) {
        if (e === i && v) return v
        if (!Gt && e in g) return g[e]
        switch (e) {
          case 'keys':
          case 'values':
          case 'entries':
            return function () {
              return new n(this, e)
            }
        }
        return function () {
          return new n(this)
        }
      },
      h = t + ' Iterator',
      p = !1,
      g = e.prototype,
      d = g[Ht] || g['@@iterator'] || (i && g[i]),
      v = (!Gt && d) || f(i),
      y = ('Array' == t && g.entries) || d
    if (
      (y &&
        ((l = Pt(y.call(new e()))),
        Ft !== Object.prototype &&
          l.next &&
          (Pt(l) !== Ft &&
            (Zt ? Zt(l, Ft) : 'function' != typeof l[Ht] && R(l, Ht, Wt)),
          qt(l, h, !0))),
      'values' == i &&
        d &&
        'values' !== d.name &&
        ((p = !0),
        (v = function () {
          return d.call(this)
        })),
      g[Ht] !== v && R(g, Ht, v),
      (Rt[t] = v),
      i)
    )
      if (
        ((s = {
          values: f('values'),
          keys: o ? v : f('keys'),
          entries: f('entries'),
        }),
        a)
      )
        for (u in s) (Gt || p || !(u in g)) && te(g, u, s[u])
      else ze({ target: t, proto: !0, forced: Gt || p }, s)
    return s
  },
  Vt = ee.set,
  Kt = ee.getterFor('Array Iterator'),
  Xt = Bt(
    Array,
    'Array',
    function (e, t) {
      Vt(this, { type: 'Array Iterator', target: d(e), index: 0, kind: t })
    },
    function () {
      var e = Kt(this),
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
;(Rt.Arguments = Rt.Array), Ot('keys'), Ot('values'), Ot('entries')
var Yt = [].join,
  Jt = p != Object,
  Qt = ot('join', ',')
ze(
  { target: 'Array', proto: !0, forced: Jt || !Qt },
  {
    join: function (e) {
      return Yt.call(d(this), void 0 === e ? ',' : e)
    },
  }
)
var en = Ke('slice'),
  tn = ct('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
  nn = De('species'),
  rn = [].slice,
  on = Math.max
ze(
  { target: 'Array', proto: !0, forced: !en || !tn },
  {
    slice: function (e, t) {
      var n,
        r,
        i,
        o = d(this),
        a = ce(o.length),
        l = he(e, a),
        s = he(void 0 === t ? a : t, a)
      if (
        $e(o) &&
        ('function' != typeof (n = o.constructor) ||
        (n !== Array && !$e(n.prototype))
          ? v(n) && null === (n = n[nn]) && (n = void 0)
          : (n = void 0),
        n === Array || void 0 === n)
      )
        return rn.call(o, l, s)
      for (
        r = new (void 0 === n ? Array : n)(on(s - l, 0)), i = 0;
        l < s;
        l++, i++
      )
        l in o && Ie(r, i, o[l])
      return (r.length = i), r
    },
  }
)
var an = O.f,
  ln = Function.prototype,
  sn = ln.toString,
  cn = /^\s*function ([^ (]*)/
o &&
  !('name' in ln) &&
  an(ln, 'name', {
    configurable: !0,
    get: function () {
      try {
        return sn.call(this).match(cn)[1]
      } catch (e) {
        return ''
      }
    },
  })
var un = {}
un[De('toStringTag')] = 'z'
var fn = '[object z]' === String(un),
  hn = De('toStringTag'),
  pn =
    'Arguments' ==
    f(
      (function () {
        return arguments
      })()
    ),
  gn = fn
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
            })((t = Object(e)), hn))
          ? n
          : pn
          ? f(t)
          : 'Object' == (r = f(t)) && 'function' == typeof t.callee
          ? 'Arguments'
          : r
      },
  dn = fn
    ? {}.toString
    : function () {
        return '[object ' + gn(this) + ']'
      }
fn || te(Object.prototype, 'toString', dn, { unsafe: !0 })
var vn = r.Promise,
  yn = De('species'),
  bn = function (e) {
    var t = ie(e),
      n = O.f
    o &&
      t &&
      !t[yn] &&
      n(t, yn, {
        configurable: !0,
        get: function () {
          return this
        },
      })
  },
  mn = De('iterator'),
  kn = Array.prototype,
  xn = De('iterator'),
  wn = function (e, t, n, r) {
    try {
      return r ? t(A(n)[0], n[1]) : t(n)
    } catch (t) {
      var i = e.return
      throw (void 0 !== i && A(i.call(e)), t)
    }
  },
  Sn = t(function (e) {
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
        h,
        p,
        g = tt(n, r, i ? 2 : 1)
      if (o) a = e
      else {
        if (
          'function' !=
          typeof (l = (function (e) {
            if (null != e) return e[xn] || e['@@iterator'] || Rt[gn(e)]
          })(e))
        )
          throw TypeError('Target is not iterable')
        if (void 0 !== (p = l) && (Rt.Array === p || kn[mn] === p)) {
          for (s = 0, c = ce(e.length); c > s; s++)
            if ((u = i ? g(A((h = e[s]))[0], h[1]) : g(e[s])) && u instanceof t)
              return u
          return new t(!1)
        }
        a = l.call(e)
      }
      for (f = a.next; !(h = f.call(a)).done; )
        if (
          'object' == typeof (u = wn(a, g, h.value, i)) &&
          u &&
          u instanceof t
        )
          return u
      return new t(!1)
    }).stop = function (e) {
      return new t(!0, e)
    }
  }),
  _n = De('iterator'),
  En = !1
try {
  var An = 0,
    Tn = {
      next: function () {
        return { done: !!An++ }
      },
      return: function () {
        En = !0
      },
    }
  ;(Tn[_n] = function () {
    return this
  }),
    Array.from(Tn, function () {
      throw 2
    })
} catch (e) {}
var On,
  Rn,
  jn,
  zn = De('species'),
  $n = function (e, t) {
    var n,
      r = A(e).constructor
    return void 0 === r || null == (n = A(r)[zn]) ? t : et(n)
  },
  Pn = /(iphone|ipod|ipad).*applewebkit/i.test(Fe),
  In = r.location,
  Cn = r.setImmediate,
  Ln = r.clearImmediate,
  Mn = r.process,
  Nn = r.MessageChannel,
  qn = r.Dispatch,
  Dn = 0,
  Un = {},
  Zn = function (e) {
    if (Un.hasOwnProperty(e)) {
      var t = Un[e]
      delete Un[e], t()
    }
  },
  Fn = function (e) {
    return function () {
      Zn(e)
    }
  },
  Gn = function (e) {
    Zn(e.data)
  },
  Hn = function (e) {
    r.postMessage(e + '', In.protocol + '//' + In.host)
  }
;(Cn && Ln) ||
  ((Cn = function (e) {
    for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++])
    return (
      (Un[++Dn] = function () {
        ;('function' == typeof e ? e : Function(e)).apply(void 0, t)
      }),
      On(Dn),
      Dn
    )
  }),
  (Ln = function (e) {
    delete Un[e]
  }),
  'process' == f(Mn)
    ? (On = function (e) {
        Mn.nextTick(Fn(e))
      })
    : qn && qn.now
    ? (On = function (e) {
        qn.now(Fn(e))
      })
    : Nn && !Pn
    ? ((jn = (Rn = new Nn()).port2),
      (Rn.port1.onmessage = Gn),
      (On = tt(jn.postMessage, jn, 1)))
    : !r.addEventListener ||
      'function' != typeof postMessage ||
      r.importScripts ||
      i(Hn) ||
      'file:' === In.protocol
    ? (On =
        'onreadystatechange' in w('script')
          ? function (e) {
              yt.appendChild(w('script')).onreadystatechange = function () {
                yt.removeChild(this), Zn(e)
              }
            }
          : function (e) {
              setTimeout(Fn(e), 0)
            })
    : ((On = Hn), r.addEventListener('message', Gn, !1)))
var Wn,
  Bn,
  Vn,
  Kn,
  Xn,
  Yn,
  Jn,
  Qn,
  er = { set: Cn, clear: Ln },
  tr = E.f,
  nr = er.set,
  rr = r.MutationObserver || r.WebKitMutationObserver,
  ir = r.process,
  or = r.Promise,
  ar = 'process' == f(ir),
  lr = tr(r, 'queueMicrotask'),
  sr = lr && lr.value
sr ||
  ((Wn = function () {
    var e, t
    for (ar && (e = ir.domain) && e.exit(); Bn; ) {
      ;(t = Bn.fn), (Bn = Bn.next)
      try {
        t()
      } catch (e) {
        throw (Bn ? Kn() : (Vn = void 0), e)
      }
    }
    ;(Vn = void 0), e && e.enter()
  }),
  ar
    ? (Kn = function () {
        ir.nextTick(Wn)
      })
    : rr && !Pn
    ? ((Xn = !0),
      (Yn = document.createTextNode('')),
      new rr(Wn).observe(Yn, { characterData: !0 }),
      (Kn = function () {
        Yn.data = Xn = !Xn
      }))
    : or && or.resolve
    ? ((Jn = or.resolve(void 0)),
      (Qn = Jn.then),
      (Kn = function () {
        Qn.call(Jn, Wn)
      }))
    : (Kn = function () {
        nr.call(r, Wn)
      }))
var cr,
  ur,
  fr,
  hr,
  pr =
    sr ||
    function (e) {
      var t = { fn: e, next: void 0 }
      Vn && (Vn.next = t), Bn || ((Bn = t), Kn()), (Vn = t)
    },
  gr = function (e) {
    var t, n
    ;(this.promise = new e(function (e, r) {
      if (void 0 !== t || void 0 !== n)
        throw TypeError('Bad Promise constructor')
      ;(t = e), (n = r)
    })),
      (this.resolve = et(t)),
      (this.reject = et(n))
  },
  dr = {
    f: function (e) {
      return new gr(e)
    },
  },
  vr = function (e, t) {
    if ((A(e), v(t) && t.constructor === e)) return t
    var n = dr.f(e)
    return (0, n.resolve)(t), n.promise
  },
  yr = function (e) {
    try {
      return { error: !1, value: e() }
    } catch (e) {
      return { error: !0, value: e }
    }
  },
  br = er.set,
  mr = De('species'),
  kr = 'Promise',
  xr = ee.get,
  wr = ee.set,
  Sr = ee.getterFor(kr),
  _r = vn,
  Er = r.TypeError,
  Ar = r.document,
  Tr = r.process,
  Or = ie('fetch'),
  Rr = dr.f,
  jr = Rr,
  zr = 'process' == f(Tr),
  $r = !!(Ar && Ar.createEvent && r.dispatchEvent),
  Pr = Re(kr, function () {
    if (!(L(_r) !== String(_r))) {
      if (66 === Be) return !0
      if (!zr && 'function' != typeof PromiseRejectionEvent) return !0
    }
    if (Be >= 51 && /native code/.test(_r)) return !1
    var e = _r.resolve(1),
      t = function (e) {
        e(
          function () {},
          function () {}
        )
      }
    return (
      ((e.constructor = {})[mr] = t), !(e.then(function () {}) instanceof t)
    )
  }),
  Ir =
    Pr ||
    !(function (e, t) {
      if (!t && !En) return !1
      var n = !1
      try {
        var r = {}
        ;(r[_n] = function () {
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
      _r.all(e).catch(function () {})
    }),
  Cr = function (e) {
    var t
    return !(!v(e) || 'function' != typeof (t = e.then)) && t
  },
  Lr = function (e, t, n) {
    if (!t.notified) {
      t.notified = !0
      var r = t.reactions
      pr(function () {
        for (var i = t.value, o = 1 == t.state, a = 0; r.length > a; ) {
          var l,
            s,
            c,
            u = r[a++],
            f = o ? u.ok : u.fail,
            h = u.resolve,
            p = u.reject,
            g = u.domain
          try {
            f
              ? (o || (2 === t.rejection && Dr(e, t), (t.rejection = 1)),
                !0 === f
                  ? (l = i)
                  : (g && g.enter(), (l = f(i)), g && (g.exit(), (c = !0))),
                l === u.promise
                  ? p(Er('Promise-chain cycle'))
                  : (s = Cr(l))
                  ? s.call(l, h, p)
                  : h(l))
              : p(i)
          } catch (e) {
            g && !c && g.exit(), p(e)
          }
        }
        ;(t.reactions = []), (t.notified = !1), n && !t.rejection && Nr(e, t)
      })
    }
  },
  Mr = function (e, t, n) {
    var i, o
    $r
      ? (((i = Ar.createEvent('Event')).promise = t),
        (i.reason = n),
        i.initEvent(e, !1, !0),
        r.dispatchEvent(i))
      : (i = { promise: t, reason: n }),
      (o = r['on' + e])
        ? o(i)
        : 'unhandledrejection' === e &&
          (function (e, t) {
            var n = r.console
            n &&
              n.error &&
              (1 === arguments.length ? n.error(e) : n.error(e, t))
          })('Unhandled promise rejection', n)
  },
  Nr = function (e, t) {
    br.call(r, function () {
      var n,
        r = t.value
      if (
        qr(t) &&
        ((n = yr(function () {
          zr
            ? Tr.emit('unhandledRejection', r, e)
            : Mr('unhandledrejection', e, r)
        })),
        (t.rejection = zr || qr(t) ? 2 : 1),
        n.error)
      )
        throw n.value
    })
  },
  qr = function (e) {
    return 1 !== e.rejection && !e.parent
  },
  Dr = function (e, t) {
    br.call(r, function () {
      zr ? Tr.emit('rejectionHandled', e) : Mr('rejectionhandled', e, t.value)
    })
  },
  Ur = function (e, t, n, r) {
    return function (i) {
      e(t, n, i, r)
    }
  },
  Zr = function (e, t, n, r) {
    t.done ||
      ((t.done = !0), r && (t = r), (t.value = n), (t.state = 2), Lr(e, t, !0))
  },
  Fr = function (e, t, n, r) {
    if (!t.done) {
      ;(t.done = !0), r && (t = r)
      try {
        if (e === n) throw Er("Promise can't be resolved itself")
        var i = Cr(n)
        i
          ? pr(function () {
              var r = { done: !1 }
              try {
                i.call(n, Ur(Fr, e, r, t), Ur(Zr, e, r, t))
              } catch (n) {
                Zr(e, r, n, t)
              }
            })
          : ((t.value = n), (t.state = 1), Lr(e, t, !1))
      } catch (n) {
        Zr(e, { done: !1 }, n, t)
      }
    }
  }
Pr &&
  ((_r = function (e) {
    !(function (e, t, n) {
      if (!(e instanceof t))
        throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation')
    })(this, _r, kr),
      et(e),
      cr.call(this)
    var t = xr(this)
    try {
      e(Ur(Fr, this, t), Ur(Zr, this, t))
    } catch (e) {
      Zr(this, t, e)
    }
  }),
  ((cr = function (e) {
    wr(this, {
      type: kr,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0,
    })
  }).prototype = (function (e, t, n) {
    for (var r in t) te(e, r, t[r], n)
    return e
  })(_r.prototype, {
    then: function (e, t) {
      var n = Sr(this),
        r = Rr($n(this, _r))
      return (
        (r.ok = 'function' != typeof e || e),
        (r.fail = 'function' == typeof t && t),
        (r.domain = zr ? Tr.domain : void 0),
        (n.parent = !0),
        n.reactions.push(r),
        0 != n.state && Lr(this, n, !1),
        r.promise
      )
    },
    catch: function (e) {
      return this.then(void 0, e)
    },
  })),
  (ur = function () {
    var e = new cr(),
      t = xr(e)
    ;(this.promise = e),
      (this.resolve = Ur(Fr, e, t)),
      (this.reject = Ur(Zr, e, t))
  }),
  (dr.f = Rr =
    function (e) {
      return e === _r || e === fr ? new ur(e) : jr(e)
    }),
  'function' == typeof vn &&
    ((hr = vn.prototype.then),
    te(
      vn.prototype,
      'then',
      function (e, t) {
        var n = this
        return new _r(function (e, t) {
          hr.call(n, e, t)
        }).then(e, t)
      },
      { unsafe: !0 }
    ),
    'function' == typeof Or &&
      ze(
        { global: !0, enumerable: !0, forced: !0 },
        {
          fetch: function (e) {
            return vr(_r, Or.apply(r, arguments))
          },
        }
      ))),
  ze({ global: !0, wrap: !0, forced: Pr }, { Promise: _r }),
  qt(_r, kr, !1),
  bn(kr),
  (fr = ie(kr)),
  ze(
    { target: kr, stat: !0, forced: Pr },
    {
      reject: function (e) {
        var t = Rr(this)
        return t.reject.call(void 0, e), t.promise
      },
    }
  ),
  ze(
    { target: kr, stat: !0, forced: Pr },
    {
      resolve: function (e) {
        return vr(this, e)
      },
    }
  ),
  ze(
    { target: kr, stat: !0, forced: Ir },
    {
      all: function (e) {
        var t = this,
          n = Rr(t),
          r = n.resolve,
          i = n.reject,
          o = yr(function () {
            var n = et(t.resolve),
              o = [],
              a = 0,
              l = 1
            Sn(e, function (e) {
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
          n = Rr(t),
          r = n.reject,
          i = yr(function () {
            var i = et(t.resolve)
            Sn(e, function (e) {
              i.call(t, e).then(n.resolve, r)
            })
          })
        return i.error && r(i.value), n.promise
      },
    }
  )
var Gr = De('match'),
  Hr = function (e) {
    var t
    return v(e) && (void 0 !== (t = e[Gr]) ? !!t : 'RegExp' == f(e))
  },
  Wr = function () {
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
function Br(e, t) {
  return RegExp(e, t)
}
var Vr = {
    UNSUPPORTED_Y: i(function () {
      var e = Br('a', 'y')
      return (e.lastIndex = 2), null != e.exec('abcd')
    }),
    BROKEN_CARET: i(function () {
      var e = Br('^r', 'gy')
      return (e.lastIndex = 2), null != e.exec('str')
    }),
  },
  Kr = O.f,
  Xr = me.f,
  Yr = ee.set,
  Jr = De('match'),
  Qr = r.RegExp,
  ei = Qr.prototype,
  ti = /a/g,
  ni = /a/g,
  ri = new Qr(ti) !== ti,
  ii = Vr.UNSUPPORTED_Y
if (
  o &&
  Re(
    'RegExp',
    !ri ||
      ii ||
      i(function () {
        return (
          (ni[Jr] = !1), Qr(ti) != ti || Qr(ni) == ni || '/a/i' != Qr(ti, 'i')
        )
      })
  )
) {
  for (
    var oi = function (e, t) {
        var n,
          r = this instanceof oi,
          i = Hr(e),
          o = void 0 === t
        if (!r && i && e.constructor === oi && o) return e
        ri
          ? i && !o && (e = e.source)
          : e instanceof oi && (o && (t = Wr.call(e)), (e = e.source)),
          ii && (n = !!t && t.indexOf('y') > -1) && (t = t.replace(/y/g, ''))
        var a,
          l,
          s,
          c,
          u,
          f =
            ((a = ri ? new Qr(e, t) : Qr(e, t)),
            (l = r ? this : ei),
            (s = oi),
            Zt &&
              'function' == typeof (c = l.constructor) &&
              c !== s &&
              v((u = c.prototype)) &&
              u !== s.prototype &&
              Zt(a, u),
            a)
        return ii && n && Yr(f, { sticky: n }), f
      },
      ai = function (e) {
        ;(e in oi) ||
          Kr(oi, e, {
            configurable: !0,
            get: function () {
              return Qr[e]
            },
            set: function (t) {
              Qr[e] = t
            },
          })
      },
      li = Xr(Qr),
      si = 0;
    li.length > si;

  )
    ai(li[si++])
  ;(ei.constructor = oi), (oi.prototype = ei), te(r, 'RegExp', oi)
}
bn('RegExp')
var ci = RegExp.prototype.exec,
  ui = String.prototype.replace,
  fi = ci,
  hi = (function () {
    var e = /a/,
      t = /b*/g
    return (
      ci.call(e, 'a'), ci.call(t, 'a'), 0 !== e.lastIndex || 0 !== t.lastIndex
    )
  })(),
  pi = Vr.UNSUPPORTED_Y || Vr.BROKEN_CARET,
  gi = void 0 !== /()??/.exec('')[1]
;(hi || gi || pi) &&
  (fi = function (e) {
    var t,
      n,
      r,
      i,
      o = this,
      a = pi && o.sticky,
      l = Wr.call(o),
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
      gi && (n = new RegExp('^' + s + '$(?!\\s)', l)),
      hi && (t = o.lastIndex),
      (r = ci.call(a ? n : o, u)),
      a
        ? r
          ? ((r.input = r.input.slice(c)),
            (r[0] = r[0].slice(c)),
            (r.index = o.lastIndex),
            (o.lastIndex += r[0].length))
          : (o.lastIndex = 0)
        : hi && r && (o.lastIndex = o.global ? r.index + r[0].length : t),
      gi &&
        r &&
        r.length > 1 &&
        ui.call(r[0], n, function () {
          for (i = 1; i < arguments.length - 2; i++)
            void 0 === arguments[i] && (r[i] = void 0)
        }),
      r
    )
  })
var di = fi
ze({ target: 'RegExp', proto: !0, forced: /./.exec !== di }, { exec: di })
var vi = RegExp.prototype,
  yi = vi.toString,
  bi = i(function () {
    return '/a/b' != yi.call({ source: 'a', flags: 'b' })
  }),
  mi = 'toString' != yi.name
;(bi || mi) &&
  te(
    RegExp.prototype,
    'toString',
    function () {
      var e = A(this),
        t = String(e.source),
        n = e.flags
      return (
        '/' +
        t +
        '/' +
        String(
          void 0 === n && e instanceof RegExp && !('flags' in vi)
            ? Wr.call(e)
            : n
        )
      )
    },
    { unsafe: !0 }
  )
var ki = function (e) {
    return function (t, n) {
      var r,
        i,
        o = String(g(t)),
        a = le(n),
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
  xi = { codeAt: ki(!1), charAt: ki(!0) },
  wi = xi.charAt,
  Si = ee.set,
  _i = ee.getterFor('String Iterator')
Bt(
  String,
  'String',
  function (e) {
    Si(this, { type: 'String Iterator', string: String(e), index: 0 })
  },
  function () {
    var e,
      t = _i(this),
      n = t.string,
      r = t.index
    return r >= n.length
      ? { value: void 0, done: !0 }
      : ((e = wi(n, r)), (t.index += e.length), { value: e, done: !1 })
  }
)
var Ei = De('species'),
  Ai = !i(function () {
    var e = /./
    return (
      (e.exec = function () {
        var e = []
        return (e.groups = { a: '7' }), e
      }),
      '7' !== ''.replace(e, '$<a>')
    )
  }),
  Ti = '$0' === 'a'.replace(/./, '$0'),
  Oi = De('replace'),
  Ri = !!/./[Oi] && '' === /./[Oi]('a', '$0'),
  ji = !i(function () {
    var e = /(?:)/,
      t = e.exec
    e.exec = function () {
      return t.apply(this, arguments)
    }
    var n = 'ab'.split(e)
    return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1]
  }),
  zi = function (e, t, n, r) {
    var o = De(e),
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
              (n.constructor[Ei] = function () {
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
      ('replace' === e && (!Ai || !Ti || Ri)) ||
      ('split' === e && !ji)
    ) {
      var s = /./[o],
        c = n(
          o,
          ''[e],
          function (e, t, n, r, i) {
            return t.exec === di
              ? a && !i
                ? { done: !0, value: s.call(t, n, r) }
                : { done: !0, value: e.call(n, t, r) }
              : { done: !1 }
          },
          {
            REPLACE_KEEPS_$0: Ti,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Ri,
          }
        ),
        u = c[0],
        f = c[1]
      te(String.prototype, e, u),
        te(
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
  $i = xi.charAt,
  Pi = function (e, t, n) {
    return t + (n ? $i(e, t).length : 1)
  },
  Ii = function (e, t) {
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
    return di.call(e, t)
  }
zi('match', 1, function (e, t, n) {
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
      if (!i.global) return Ii(i, o)
      var a = i.unicode
      i.lastIndex = 0
      for (var l, s = [], c = 0; null !== (l = Ii(i, o)); ) {
        var u = String(l[0])
        ;(s[c] = u), '' === u && (i.lastIndex = Pi(o, ce(i.lastIndex), a)), c++
      }
      return 0 === c ? null : s
    },
  ]
})
var Ci = Math.max,
  Li = Math.min,
  Mi = Math.floor,
  Ni = /\$([$&'`]|\d\d?|<[^>]*>)/g,
  qi = /\$([$&'`]|\d\d?)/g
zi('replace', 2, function (e, t, n, r) {
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
      var h = c.global
      if (h) {
        var p = c.unicode
        c.lastIndex = 0
      }
      for (var g = []; ; ) {
        var d = Ii(c, u)
        if (null === d) break
        if ((g.push(d), !h)) break
        '' === String(d[0]) && (c.lastIndex = Pi(u, ce(c.lastIndex), p))
      }
      for (var v, y = '', b = 0, m = 0; m < g.length; m++) {
        d = g[m]
        for (
          var k = String(d[0]),
            x = Ci(Li(le(d.index), u.length), 0),
            w = [],
            S = 1;
          S < d.length;
          S++
        )
          w.push(void 0 === (v = d[S]) ? v : String(v))
        var _ = d.groups
        if (f) {
          var E = [k].concat(w, x, u)
          void 0 !== _ && E.push(_)
          var T = String(r.apply(void 0, E))
        } else T = l(k, u, x, w, _, r)
        x >= b && ((y += u.slice(b, x) + T), (b = x + k.length))
      }
      return y + u.slice(b)
    },
  ]
  function l(e, n, r, i, o, a) {
    var l = r + e.length,
      s = i.length,
      c = qi
    return (
      void 0 !== o && ((o = Pe(o)), (c = Ni)),
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
              var f = Mi(u / 10)
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
var Di = [].push,
  Ui = Math.min,
  Zi = !i(function () {
    return !RegExp(4294967295, 'y')
  })
zi(
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
                i = void 0 === n ? 4294967295 : n >>> 0
              if (0 === i) return []
              if (void 0 === e) return [r]
              if (!Hr(e)) return t.call(r, e, i)
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
                (o = di.call(f, r)) &&
                !(
                  (a = f.lastIndex) > u &&
                  (s.push(r.slice(u, o.index)),
                  o.length > 1 && o.index < r.length && Di.apply(s, o.slice(1)),
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
            s = $n(a, RegExp),
            c = a.unicode,
            u =
              (a.ignoreCase ? 'i' : '') +
              (a.multiline ? 'm' : '') +
              (a.unicode ? 'u' : '') +
              (Zi ? 'y' : 'g'),
            f = new s(Zi ? a : '^(?:' + a.source + ')', u),
            h = void 0 === i ? 4294967295 : i >>> 0
          if (0 === h) return []
          if (0 === l.length) return null === Ii(f, l) ? [l] : []
          for (var p = 0, g = 0, d = []; g < l.length; ) {
            f.lastIndex = Zi ? g : 0
            var v,
              y = Ii(f, Zi ? l : l.slice(g))
            if (
              null === y ||
              (v = Ui(ce(f.lastIndex + (Zi ? 0 : g)), l.length)) === p
            )
              g = Pi(l, g, c)
            else {
              if ((d.push(l.slice(p, g)), d.length === h)) return d
              for (var b = 1; b <= y.length - 1; b++)
                if ((d.push(y[b]), d.length === h)) return d
              g = p = v
            }
          }
          return d.push(l.slice(p)), d
        },
      ]
    )
  },
  !Zi
)
var Fi = '\t\n\v\f\r                　\u2028\u2029\ufeff',
  Gi = '[' + Fi + ']',
  Hi = RegExp('^' + Gi + Gi + '*'),
  Wi = RegExp(Gi + Gi + '*$'),
  Bi = function (e) {
    return function (t) {
      var n = String(g(t))
      return (
        1 & e && (n = n.replace(Hi, '')), 2 & e && (n = n.replace(Wi, '')), n
      )
    }
  },
  Vi = { start: Bi(1), end: Bi(2), trim: Bi(3) },
  Ki = function (e) {
    return i(function () {
      return !!Fi[e]() || '​᠎' != '​᠎'[e]() || Fi[e].name !== e
    })
  },
  Xi = Vi.trim
ze(
  { target: 'String', proto: !0, forced: Ki('trim') },
  {
    trim: function () {
      return Xi(this)
    },
  }
)
var Yi = {
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
for (var Ji in Yi) {
  var Qi = r[Ji],
    eo = Qi && Qi.prototype
  if (eo && eo.forEach !== pt)
    try {
      R(eo, 'forEach', pt)
    } catch (e) {
      eo.forEach = pt
    }
}
var to = De('iterator'),
  no = De('toStringTag'),
  ro = Xt.values
for (var io in Yi) {
  var oo = r[io],
    ao = oo && oo.prototype
  if (ao) {
    if (ao[to] !== ro)
      try {
        R(ao, to, ro)
      } catch (e) {
        ao[to] = ro
      }
    if ((ao[no] || R(ao, no, io), Yi[io]))
      for (var lo in Xt)
        if (ao[lo] !== Xt[lo])
          try {
            R(ao, lo, Xt[lo])
          } catch (e) {
            ao[lo] = Xt[lo]
          }
  }
}
function so(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function')
}
function co(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r)
  }
}
function uo(e, t, n) {
  return t && co(e.prototype, t), n && co(e, n), e
}
function fo(e, t, n) {
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
function ho(e, t) {
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
function po(e, t) {
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
          !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t);
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
    go(e, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    })()
  )
}
function go(e, t) {
  if (e) {
    if ('string' == typeof e) return vo(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? vo(e, t)
        : void 0
    )
  }
}
function vo(e, t) {
  ;(null == t || t > e.length) && (t = e.length)
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
  return r
}
function yo(e) {
  if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
    if (Array.isArray(e) || (e = go(e))) {
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
var bo = /"/g
ze(
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
          (o += ' ' + n + '="' + String(r).replace(bo, '&quot;') + '"'),
        o + '>' + i + '</' + t + '>'
      )
      var t, n, r, i, o
    },
  }
)
var mo = ge.indexOf,
  ko = [].indexOf,
  xo = !!ko && 1 / [1].indexOf(1, -0) < 0,
  wo = ot('indexOf'),
  So = ct('indexOf', { ACCESSORS: !0, 1: 0 })
ze(
  { target: 'Array', proto: !0, forced: xo || !wo || !So },
  {
    indexOf: function (e) {
      return xo
        ? ko.apply(this, arguments) || 0
        : mo(this, e, arguments.length > 1 ? arguments[1] : void 0)
    },
  }
)
var _o = it.map,
  Eo = Ke('map'),
  Ao = ct('map')
ze(
  { target: 'Array', proto: !0, forced: !Eo || !Ao },
  {
    map: function (e) {
      return _o(this, e, arguments.length > 1 ? arguments[1] : void 0)
    },
  }
)
var To,
  Oo = function (e) {
    if (Hr(e)) throw TypeError("The method doesn't accept regular expressions")
    return e
  },
  Ro = De('match'),
  jo = function (e) {
    var t = /./
    try {
      '/./'[e](t)
    } catch (n) {
      try {
        return (t[Ro] = !1), '/./'[e](t)
      } catch (e) {}
    }
    return !1
  },
  zo = E.f,
  $o = ''.endsWith,
  Po = Math.min,
  Io = jo('endsWith'),
  Co = !(Io || ((To = zo(String.prototype, 'endsWith')), !To || To.writable))
ze(
  { target: 'String', proto: !0, forced: !Co && !Io },
  {
    endsWith: function (e) {
      var t = String(g(this))
      Oo(e)
      var n = arguments.length > 1 ? arguments[1] : void 0,
        r = ce(t.length),
        i = void 0 === n ? r : Po(ce(n), r),
        o = String(e)
      return $o ? $o.call(t, o, i) : t.slice(i - o.length, i) === o
    },
  }
)
var Lo = E.f,
  Mo = ''.startsWith,
  No = Math.min,
  qo = jo('startsWith'),
  Do =
    !qo &&
    !!(function () {
      var e = Lo(String.prototype, 'startsWith')
      return e && !e.writable
    })()
ze(
  { target: 'String', proto: !0, forced: !Do && !qo },
  {
    startsWith: function (e) {
      var t = String(g(this))
      Oo(e)
      var n = ce(No(arguments.length > 1 ? arguments[1] : void 0, t.length)),
        r = String(e)
      return Mo ? Mo.call(t, r, n) : t.slice(n, n + r.length) === r
    },
  }
)
var Uo = Vi.end,
  Zo = Ki('trimEnd'),
  Fo = Zo
    ? function () {
        return Uo(this)
      }
    : ''.trimEnd
ze({ target: 'String', proto: !0, forced: Zo }, { trimEnd: Fo, trimRight: Fo })
var Go = t(function (e) {
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
  Ho = Ke('splice'),
  Wo = ct('splice', { ACCESSORS: !0, 0: 0, 1: 2 }),
  Bo = Math.max,
  Vo = Math.min
ze(
  { target: 'Array', proto: !0, forced: !Ho || !Wo },
  {
    splice: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        l,
        s = Pe(this),
        c = ce(s.length),
        u = he(e, c),
        f = arguments.length
      if (
        (0 === f
          ? (n = r = 0)
          : 1 === f
          ? ((n = 0), (r = c - u))
          : ((n = f - 2), (r = Vo(Bo(le(t), 0), c - u))),
        c + n - r > 9007199254740991)
      )
        throw TypeError('Maximum allowed length exceeded')
      for (i = Ze(s, r), o = 0; o < r; o++) (a = u + o) in s && Ie(i, o, s[a])
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
var Ko = /[&<>"']/,
  Xo = /[&<>"']/g,
  Yo = /[<>"']|&(?!#?\w+;)/,
  Jo = /[<>"']|&(?!#?\w+;)/g,
  Qo = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
  ea = function (e) {
    return Qo[e]
  }
var ta = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
function na(e) {
  return e.replace(ta, function (e, t) {
    return 'colon' === (t = t.toLowerCase())
      ? ':'
      : '#' === t.charAt(0)
      ? 'x' === t.charAt(1)
        ? String.fromCharCode(parseInt(t.substring(2), 16))
        : String.fromCharCode(+t.substring(1))
      : ''
  })
}
var ra = /(^|[^\[])\^/g
var ia = /[^\w:]/g,
  oa = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
var aa = {},
  la = /^[^:]+:\/*[^/]*$/,
  sa = /^([^:]+:)[\s\S]*$/,
  ca = /^([^:]+:\/*[^/]*)[\s\S]*$/
function ua(e, t) {
  aa[' ' + e] ||
    (la.test(e) ? (aa[' ' + e] = e + '/') : (aa[' ' + e] = fa(e, '/', !0)))
  var n = -1 === (e = aa[' ' + e]).indexOf(':')
  return '//' === t.substring(0, 2)
    ? n
      ? t
      : e.replace(sa, '$1') + t
    : '/' === t.charAt(0)
    ? n
      ? t
      : e.replace(ca, '$1') + t
    : e + t
}
function fa(e, t, n) {
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
var ha = function (e, t) {
    if (t) {
      if (Ko.test(e)) return e.replace(Xo, ea)
    } else if (Yo.test(e)) return e.replace(Jo, ea)
    return e
  },
  pa = na,
  ga = function (e, t) {
    ;(e = e.source || e), (t = t || '')
    var n = {
      replace: function (t, r) {
        return (
          (r = (r = r.source || r).replace(ra, '$1')), (e = e.replace(t, r)), n
        )
      },
      getRegex: function () {
        return new RegExp(e, t)
      },
    }
    return n
  },
  da = function (e, t, n) {
    if (e) {
      var r
      try {
        r = decodeURIComponent(na(n)).replace(ia, '').toLowerCase()
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
    t && !oa.test(n) && (n = ua(t, n))
    try {
      n = encodeURI(n).replace(/%25/g, '%')
    } catch (e) {
      return null
    }
    return n
  },
  va = { exec: function () {} },
  ya = function (e) {
    for (var t, n, r = 1; r < arguments.length; r++)
      for (n in (t = arguments[r]))
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
    return e
  },
  ba = function (e, t) {
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
  ma = fa,
  ka = function (e, t) {
    if (-1 === e.indexOf(t[1])) return -1
    for (var n = e.length, r = 0, i = 0; i < n; i++)
      if ('\\' === e[i]) i++
      else if (e[i] === t[0]) r++
      else if (e[i] === t[1] && --r < 0) return i
    return -1
  },
  xa = function (e) {
    e &&
      e.sanitize &&
      !e.silent &&
      console.warn(
        'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
      )
  },
  wa = Go.defaults,
  Sa = ma,
  _a = ba,
  Ea = ha,
  Aa = ka
function Ta(e, t, n) {
  var r = t.href,
    i = t.title ? Ea(t.title) : null
  return '!' !== e[0].charAt(0)
    ? { type: 'link', raw: n, href: r, title: i, text: e[1] }
    : { type: 'image', raw: n, text: Ea(e[1]), href: r, title: i }
}
var Oa = (function () {
    function e(t) {
      so(this, e), (this.options = t || wa)
    }
    return (
      uo(e, [
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
                text: this.options.pedantic ? i : Sa(i, '\n'),
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
                        : po(t, 1)[0].length >= r.length
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
                header: _a(t[1].replace(/^ *| *\| *$/g, '')),
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
                  n.cells[r] = _a(n.cells[r], n.header.length)
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
                  h = {
                    type: 'list',
                    raw: c,
                    ordered: f,
                    start: f ? +u : '',
                    loose: !1,
                    items: [],
                  },
                  p = t[0].match(this.rules.block.item),
                  g = !1,
                  d = p.length,
                  v = 0;
                v < d;
                v++
              )
                (c = n = p[v]),
                  (r = n.length),
                  ~(n = n.replace(/^ *([*+-]|\d+\.) */, '')).indexOf('\n ') &&
                    ((r -= n.length),
                    (n = this.options.pedantic
                      ? n.replace(/^ {1,4}/gm, '')
                      : n.replace(new RegExp('^ {1,' + r + '}', 'gm'), ''))),
                  v !== d - 1 &&
                    ((i = this.rules.block.bullet.exec(p[v + 1])[0]),
                    (u.length > 1
                      ? 1 === i.length
                      : i.length > 1 || (this.options.smartLists && i !== u)) &&
                      ((o = p.slice(v + 1).join('\n')),
                      (h.raw = h.raw.substring(0, h.raw.length - o.length)),
                      (v = d - 1))),
                  (a = g || /\n\n(?!\s*$)/.test(n)),
                  v !== d - 1 &&
                    ((g = '\n' === n.charAt(n.length - 1)), a || (a = g)),
                  a && (h.loose = !0),
                  (s = void 0),
                  (l = /^\[[ xX]\] /.test(n)) &&
                    ((s = ' ' !== n[1]), (n = n.replace(/^\[[ xX]\] +/, ''))),
                  h.items.push({
                    type: 'list_item',
                    raw: c,
                    task: l,
                    checked: s,
                    loose: a,
                    text: n,
                  })
              return h
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
                    : Ea(t[0])
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
                header: _a(t[1].replace(/^ *| *\| *$/g, '')),
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
                  n.cells[r] = _a(
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
            if (t) return { type: 'escape', raw: t[0], text: Ea(t[1]) }
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
                      : Ea(r[0])
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
              var n = Aa(t[2], '()')
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
              return Ta(
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
              return Ta(n, r, n[0])
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
                (n = Ea(n, !0)),
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
                    ? 'mailto:' + (n = Ea(this.options.mangle ? t(i[1]) : i[1]))
                    : (n = Ea(i[1]))),
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
                i = 'mailto:' + (r = Ea(this.options.mangle ? t(n[0]) : n[0]))
              else {
                var o
                do {
                  ;(o = n[0]),
                    (n[0] = this.rules.inline._backpedal.exec(n[0])[0])
                } while (o !== n[0])
                ;(r = Ea(n[0])), (i = 'www.' === n[1] ? 'http://' + r : r)
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
                      : Ea(i[0])
                    : i[0]
                  : Ea(this.options.smartypants ? n(i[0]) : i[0])),
                { type: 'text', raw: i[0], text: r }
              )
          },
        },
      ]),
      e
    )
  })(),
  Ra = va,
  ja = ga,
  za = ya,
  $a = {
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
    nptable: Ra,
    table: Ra,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph:
      /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
    text: /^[^\n]+/,
    _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
    _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
  }
;($a.def = ja($a.def)
  .replace('label', $a._label)
  .replace('title', $a._title)
  .getRegex()),
  ($a.bullet = /(?:[*+-]|\d{1,9}\.)/),
  ($a.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
  ($a.item = ja($a.item, 'gm').replace(/bull/g, $a.bullet).getRegex()),
  ($a.list = ja($a.list)
    .replace(/bull/g, $a.bullet)
    .replace(
      'hr',
      '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
    )
    .replace('def', '\\n+(?=' + $a.def.source + ')')
    .getRegex()),
  ($a._tag =
    'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
  ($a._comment = /<!--(?!-?>)[\s\S]*?-->/),
  ($a.html = ja($a.html, 'i')
    .replace('comment', $a._comment)
    .replace('tag', $a._tag)
    .replace(
      'attribute',
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
    )
    .getRegex()),
  ($a.paragraph = ja($a._paragraph)
    .replace('hr', $a.hr)
    .replace('heading', ' {0,3}#{1,6} ')
    .replace('|lheading', '')
    .replace('blockquote', ' {0,3}>')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
    .replace('tag', $a._tag)
    .getRegex()),
  ($a.blockquote = ja($a.blockquote)
    .replace('paragraph', $a.paragraph)
    .getRegex()),
  ($a.normal = za({}, $a)),
  ($a.gfm = za({}, $a.normal, {
    nptable:
      '^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    table:
      '^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
  })),
  ($a.gfm.nptable = ja($a.gfm.nptable)
    .replace('hr', $a.hr)
    .replace('heading', ' {0,3}#{1,6} ')
    .replace('blockquote', ' {0,3}>')
    .replace('code', ' {4}[^\\n]')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
    .replace('tag', $a._tag)
    .getRegex()),
  ($a.gfm.table = ja($a.gfm.table)
    .replace('hr', $a.hr)
    .replace('heading', ' {0,3}#{1,6} ')
    .replace('blockquote', ' {0,3}>')
    .replace('code', ' {4}[^\\n]')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
    .replace('tag', $a._tag)
    .getRegex()),
  ($a.pedantic = za({}, $a.normal, {
    html: ja(
      '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
    )
      .replace('comment', $a._comment)
      .replace(
        /tag/g,
        '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
    fences: Ra,
    paragraph: ja($a.normal._paragraph)
      .replace('hr', $a.hr)
      .replace('heading', ' *#{1,6} *[^\n]')
      .replace('lheading', $a.lheading)
      .replace('blockquote', ' {0,3}>')
      .replace('|fences', '')
      .replace('|list', '')
      .replace('|html', '')
      .getRegex(),
  }))
var Pa = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: Ra,
  tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  strong:
    /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
  em: /^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\s,punctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\s,punctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: Ra,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
  _punctuation: '!"#$%&\'()*+\\-./:;<=>?@\\[^_{|}~',
}
;(Pa.em = ja(Pa.em)
  .replace(/punctuation/g, Pa._punctuation)
  .getRegex()),
  (Pa._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
  (Pa._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
  (Pa._email =
    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
  (Pa.autolink = ja(Pa.autolink)
    .replace('scheme', Pa._scheme)
    .replace('email', Pa._email)
    .getRegex()),
  (Pa._attribute =
    /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
  (Pa.tag = ja(Pa.tag)
    .replace('comment', $a._comment)
    .replace('attribute', Pa._attribute)
    .getRegex()),
  (Pa._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
  (Pa._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/),
  (Pa._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
  (Pa.link = ja(Pa.link)
    .replace('label', Pa._label)
    .replace('href', Pa._href)
    .replace('title', Pa._title)
    .getRegex()),
  (Pa.reflink = ja(Pa.reflink).replace('label', Pa._label).getRegex()),
  (Pa.normal = za({}, Pa)),
  (Pa.pedantic = za({}, Pa.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
    link: ja(/^!?\[(label)\]\((.*?)\)/)
      .replace('label', Pa._label)
      .getRegex(),
    reflink: ja(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace('label', Pa._label)
      .getRegex(),
  })),
  (Pa.gfm = za({}, Pa.normal, {
    escape: ja(Pa.escape).replace('])', '~|])').getRegex(),
    _extended_email:
      /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal:
      /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^~+(?=\S)([\s\S]*?\S)~+/,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
  })),
  (Pa.gfm.url = ja(Pa.gfm.url, 'i')
    .replace('email', Pa.gfm._extended_email)
    .getRegex()),
  (Pa.breaks = za({}, Pa.gfm, {
    br: ja(Pa.br).replace('{2,}', '*').getRegex(),
    text: ja(Pa.gfm.text)
      .replace('\\b_', '\\b_| {2,}\\n')
      .replace(/\{2,\}/g, '*')
      .getRegex(),
  }))
var Ia = { block: $a, inline: Pa },
  Ca = Go.defaults,
  La = Ia.block,
  Ma = Ia.inline
function Na(e) {
  return e
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
    .replace(/'/g, '’')
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
    .replace(/"/g, '”')
    .replace(/\.{3}/g, '…')
}
function qa(e) {
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
var Da = (function () {
    function e(t) {
      so(this, e),
        (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = t || Ca),
        (this.options.tokenizer = this.options.tokenizer || new Oa()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options)
      var n = { block: La.normal, inline: Ma.normal }
      this.options.pedantic
        ? ((n.block = La.pedantic), (n.inline = Ma.pedantic))
        : this.options.gfm &&
          ((n.block = La.gfm),
          this.options.breaks ? (n.inline = Ma.breaks) : (n.inline = Ma.gfm)),
        (this.tokenizer.rules = n)
    }
    return (
      uo(
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
                else if ((t = this.tokenizer.autolink(e, qa)))
                  (e = e.substring(t.raw.length)), n.push(t)
                else if (r || !(t = this.tokenizer.url(e, qa))) {
                  if ((t = this.tokenizer.inlineText(e, i, Na)))
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
              return { block: La, inline: Ma }
            },
          },
        ]
      ),
      e
    )
  })(),
  Ua = Go.defaults,
  Za = da,
  Fa = ha,
  Ga = (function () {
    function e(t) {
      so(this, e), (this.options = t || Ua)
    }
    return (
      uo(e, [
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
                  Fa(r, !0) +
                  '">' +
                  (n ? e : Fa(e, !0)) +
                  '</code></pre>\n'
              : '<pre><code>' + (n ? e : Fa(e, !0)) + '</code></pre>\n'
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
              null === (e = Za(this.options.sanitize, this.options.baseUrl, e))
            )
              return n
            var r = '<a href="' + Fa(e) + '"'
            return t && (r += ' title="' + t + '"'), (r += '>' + n + '</a>')
          },
        },
        {
          key: 'image',
          value: function (e, t, n) {
            if (
              null === (e = Za(this.options.sanitize, this.options.baseUrl, e))
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
  Ha = (function () {
    function e() {
      so(this, e)
    }
    return (
      uo(e, [
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
  Wa = (function () {
    function e() {
      so(this, e), (this.seen = {})
    }
    return (
      uo(e, [
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
  Ba = Go.defaults,
  Va = pa,
  Ka = (function () {
    function e(t) {
      so(this, e),
        (this.options = t || Ba),
        (this.options.renderer = this.options.renderer || new Ga()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.textRenderer = new Ha()),
        (this.slugger = new Wa())
    }
    return (
      uo(
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
                h,
                p,
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
                      Va(this.parseInline(u.tokens, this.textRenderer)),
                      this.slugger
                    )
                    continue
                  case 'code':
                    k += this.renderer.code(u.text, u.lang, u.escaped)
                    continue
                  case 'table':
                    for (s = '', l = '', i = u.header.length, n = 0; n < i; n++)
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
                        h = u.start,
                        p = u.loose,
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
                          p
                            ? d.tokens.length > 0 && 'text' === d.tokens[0].type
                              ? ((d.tokens[0].text =
                                  b + ' ' + d.tokens[0].text),
                                d.tokens[0].tokens &&
                                  d.tokens[0].tokens.length > 0 &&
                                  'text' === d.tokens[0].tokens[0].type &&
                                  (d.tokens[0].tokens[0].text =
                                    b + ' ' + d.tokens[0].tokens[0].text))
                              : d.tokens.unshift({ type: 'text', text: b })
                            : (g += b)),
                        (g += this.parse(d.tokens, p)),
                        (c += this.renderer.listitem(g, y, v))
                    k += this.renderer.list(c, f, h)
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
                    i += t.link(r.href, r.title, this.parseInline(r.tokens, t))
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
  Xa = ya,
  Ya = xa,
  Ja = ha,
  Qa = Go.getDefaults,
  el = Go.changeDefaults,
  tl = Go.defaults
function nl(e, t, n) {
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
    (t = Xa({}, nl.defaults, t || {})),
    Ya(t),
    n)
  ) {
    var r,
      i = t.highlight
    try {
      r = Da.lex(e, t)
    } catch (e) {
      return n(e)
    }
    var o = function (e) {
      var o
      if (!e)
        try {
          o = Ka.parse(r, t)
        } catch (t) {
          e = t
        }
      return (t.highlight = i), e ? n(e) : n(null, o)
    }
    if (!i || i.length < 3) return o()
    if ((delete t.highlight, !r.length)) return o()
    var a = 0
    return (
      nl.walkTokens(r, function (e) {
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
    var l = Da.lex(e, t)
    return t.walkTokens && nl.walkTokens(l, t.walkTokens), Ka.parse(l, t)
  } catch (e) {
    if (
      ((e.message +=
        '\nPlease report this to https://github.com/markedjs/marked.'),
      t.silent)
    )
      return (
        '<p>An error occurred:</p><pre>' + Ja(e.message + '', !0) + '</pre>'
      )
    throw e
  }
}
;(nl.options = nl.setOptions =
  function (e) {
    return Xa(nl.defaults, e), el(nl.defaults), nl
  }),
  (nl.getDefaults = Qa),
  (nl.defaults = tl),
  (nl.use = function (e) {
    var t = Xa({}, e)
    if (
      (e.renderer &&
        (function () {
          var n = nl.defaults.renderer || new Ga(),
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
          var n = nl.defaults.tokenizer || new Oa(),
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
      var n = nl.defaults.walkTokens
      t.walkTokens = function (t) {
        e.walkTokens(t), n && n(t)
      }
    }
    nl.setOptions(t)
  }),
  (nl.walkTokens = function (e, t) {
    var n,
      r = yo(e)
    try {
      for (r.s(); !(n = r.n()).done; ) {
        var i = n.value
        switch ((t(i), i.type)) {
          case 'table':
            var o,
              a = yo(i.tokens.header)
            try {
              for (a.s(); !(o = a.n()).done; ) {
                var l = o.value
                nl.walkTokens(l, t)
              }
            } catch (e) {
              a.e(e)
            } finally {
              a.f()
            }
            var s,
              c = yo(i.tokens.cells)
            try {
              for (c.s(); !(s = c.n()).done; ) {
                var u,
                  f = yo(s.value)
                try {
                  for (f.s(); !(u = f.n()).done; ) {
                    var h = u.value
                    nl.walkTokens(h, t)
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
            nl.walkTokens(i.items, t)
            break
          default:
            i.tokens && nl.walkTokens(i.tokens, t)
        }
      }
    } catch (e) {
      r.e(e)
    } finally {
      r.f()
    }
  }),
  (nl.Parser = Ka),
  (nl.parser = Ka.parse),
  (nl.Renderer = Ga),
  (nl.TextRenderer = Ha),
  (nl.Lexer = Da),
  (nl.lexer = Da.lex),
  (nl.Tokenizer = Oa),
  (nl.Slugger = Wa),
  (nl.parse = nl)
var rl = nl,
  il = /\[([\s\d,|-]*)\]/,
  ol = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
export default function () {
  var e
  function t(e) {
    var t = (
        e.querySelector('[data-template]') ||
        e.querySelector('script') ||
        e
      ).textContent,
      n = (t = t.replace(new RegExp('__SCRIPT_END__', 'g'), '</script>')).match(
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
        (e = n[0] + '<aside class="notes">' + rl(n[1].trim()) + '</aside>'),
      '<script type="text/template">' +
        (e = e.replace(/<\/script>/g, '__SCRIPT_END__')) +
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
          t.separator + (t.verticalSeparator ? '|' + t.verticalSeparator : ''),
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
    for (var h = '', p = 0, g = f.length; p < g; p++)
      f[p] instanceof Array
        ? ((h += '<section ' + t.attributes + '>'),
          f[p].forEach(function (e) {
            h += '<section data-markdown>' + i(e, t) + '</section>'
          }),
          (h += '</section>'))
        : (h +=
            '<section ' +
            t.attributes +
            ' data-markdown>' +
            i(f[p], t) +
            '</section>')
    return h
  }
  function a(e) {
    return new Promise(function (r) {
      var a = []
      ;[].slice
        .call(e.querySelectorAll('[data-markdown]:not([data-markdown-parsed])'))
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
                          ((r.status >= 200 && r.status < 300) || 0 === r.status
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
        l = l.substring(0, r.index) + l.substring(o.lastIndex), e.nodeValue = l;
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
        ;(e.innerHTML = rl(r)),
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
                var h = t
                'section' == c.nodeName && ((h = c), (a = c)),
                  ('function' != typeof c.setAttribute &&
                    c.nodeType != Node.COMMENT_NODE) ||
                    e(h, c, a, i, o)
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
      var n = new rl.Renderer()
      return (
        (n.code = function (e, t) {
          var n = ''
          return (
            il.test(t) &&
              ((n = t.match(il)[1].trim()),
              (n = 'data-line-numbers="'.concat(n, '"')),
              (t = t.replace(il, '').trim())),
            (e = e.replace(/([&<>'"])/g, function (e) {
              return ol[e]
            })),
            '<pre><code '
              .concat(n, ' class="')
              .concat(t, '">')
              .concat(e, '</code></pre>')
          )
        }),
        rl.setOptions(
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? ho(Object(n), !0).forEach(function (t) {
                    fo(e, t, n[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : ho(Object(n)).forEach(function (t) {
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
    marked: rl,
  }
}