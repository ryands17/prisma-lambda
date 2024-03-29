var t =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {}
function e(t, e, n) {
  return (
    t(
      (n = {
        path: e,
        exports: {},
        require: function (t, e) {
          return (function () {
            throw new Error(
              'Dynamic requires are not currently supported by @rollup/plugin-commonjs'
            )
          })(null == e && n.path)
        },
      }),
      n.exports
    ),
    n.exports
  )
}
var n = function (t) {
    return t && t.Math == Math && t
  },
  r =
    n('object' == typeof globalThis && globalThis) ||
    n('object' == typeof window && window) ||
    n('object' == typeof self && self) ||
    n('object' == typeof t && t) ||
    Function('return this')(),
  o = function (t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  },
  i = !o(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7
        },
      })[1]
    )
  }),
  c = function (t) {
    return 'object' == typeof t ? null !== t : 'function' == typeof t
  },
  u = r.document,
  a = c(u) && c(u.createElement),
  l =
    !i &&
    !o(function () {
      return (
        7 !=
        Object.defineProperty(((t = 'div'), a ? u.createElement(t) : {}), 'a', {
          get: function () {
            return 7
          },
        }).a
      )
      var t
    }),
  f = function (t) {
    if (!c(t)) throw TypeError(String(t) + ' is not an object')
    return t
  },
  s = function (t, e) {
    if (!c(t)) return t
    var n, r
    if (e && 'function' == typeof (n = t.toString) && !c((r = n.call(t))))
      return r
    if ('function' == typeof (n = t.valueOf) && !c((r = n.call(t)))) return r
    if (!e && 'function' == typeof (n = t.toString) && !c((r = n.call(t))))
      return r
    throw TypeError("Can't convert object to primitive value")
  },
  p = Object.defineProperty,
  g = {
    f: i
      ? p
      : function (t, e, n) {
          if ((f(t), (e = s(e, !0)), f(n), l))
            try {
              return p(t, e, n)
            } catch (t) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported')
          return 'value' in n && (t[e] = n.value), t
        },
  },
  d = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e,
    }
  },
  h = i
    ? function (t, e, n) {
        return g.f(t, e, d(1, n))
      }
    : function (t, e, n) {
        return (t[e] = n), t
      },
  y = function (t, e) {
    try {
      h(r, t, e)
    } catch (n) {
      r[t] = e
    }
    return e
  },
  v = r['__core-js_shared__'] || y('__core-js_shared__', {}),
  b = e(function (t) {
    ;(t.exports = function (t, e) {
      return v[t] || (v[t] = void 0 !== e ? e : {})
    })('versions', []).push({
      version: '3.6.5',
      mode: 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
    })
  }),
  x = {}.hasOwnProperty,
  E = function (t, e) {
    return x.call(t, e)
  },
  m = 0,
  S = Math.random(),
  w = function (t) {
    return (
      'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++m + S).toString(36)
    )
  },
  O =
    !!Object.getOwnPropertySymbols &&
    !o(function () {
      return !String(Symbol())
    }),
  R = O && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  _ = b('wks'),
  T = r.Symbol,
  j = R ? T : (T && T.withoutSetter) || w,
  P = function (t) {
    return (
      E(_, t) || (O && E(T, t) ? (_[t] = T[t]) : (_[t] = j('Symbol.' + t))),
      _[t]
    )
  },
  I = {}
I[P('toStringTag')] = 'z'
var C = '[object z]' === String(I),
  N = Function.toString
'function' != typeof v.inspectSource &&
  (v.inspectSource = function (t) {
    return N.call(t)
  })
var A,
  k,
  $,
  L,
  M = v.inspectSource,
  U = r.WeakMap,
  D = 'function' == typeof U && /native code/.test(M(U)),
  F = b('keys'),
  K = {},
  z = r.WeakMap
if (D) {
  var B = new z(),
    W = B.get,
    q = B.has,
    G = B.set
  ;(A = function (t, e) {
    return G.call(B, t, e), e
  }),
    (k = function (t) {
      return W.call(B, t) || {}
    }),
    ($ = function (t) {
      return q.call(B, t)
    })
} else {
  var V = F[(L = 'state')] || (F[L] = w(L))
  ;(K[V] = !0),
    (A = function (t, e) {
      return h(t, V, e), e
    }),
    (k = function (t) {
      return E(t, V) ? t[V] : {}
    }),
    ($ = function (t) {
      return E(t, V)
    })
}
var Y = {
    set: A,
    get: k,
    has: $,
    enforce: function (t) {
      return $(t) ? k(t) : A(t, {})
    },
    getterFor: function (t) {
      return function (e) {
        var n
        if (!c(e) || (n = k(e)).type !== t)
          throw TypeError('Incompatible receiver, ' + t + ' required')
        return n
      }
    },
  },
  X = e(function (t) {
    var e = Y.get,
      n = Y.enforce,
      o = String(String).split('String')
    ;(t.exports = function (t, e, i, c) {
      var u = !!c && !!c.unsafe,
        a = !!c && !!c.enumerable,
        l = !!c && !!c.noTargetGet
      'function' == typeof i &&
        ('string' != typeof e || E(i, 'name') || h(i, 'name', e),
        (n(i).source = o.join('string' == typeof e ? e : ''))),
        t !== r
          ? (u ? !l && t[e] && (a = !0) : delete t[e],
            a ? (t[e] = i) : h(t, e, i))
          : a
          ? (t[e] = i)
          : y(e, i)
    })(Function.prototype, 'toString', function () {
      return ('function' == typeof this && e(this).source) || M(this)
    })
  }),
  H = {}.toString,
  J = function (t) {
    return H.call(t).slice(8, -1)
  },
  Q = P('toStringTag'),
  Z =
    'Arguments' ==
    J(
      (function () {
        return arguments
      })()
    ),
  tt = C
    ? J
    : function (t) {
        var e, n, r
        return void 0 === t
          ? 'Undefined'
          : null === t
          ? 'Null'
          : 'string' ==
            typeof (n = (function (t, e) {
              try {
                return t[e]
              } catch (t) {}
            })((e = Object(t)), Q))
          ? n
          : Z
          ? J(e)
          : 'Object' == (r = J(e)) && 'function' == typeof e.callee
          ? 'Arguments'
          : r
      },
  et = C
    ? {}.toString
    : function () {
        return '[object ' + tt(this) + ']'
      }
C || X(Object.prototype, 'toString', et, { unsafe: !0 })
var nt = /#|\.prototype\./,
  rt = function (t, e) {
    var n = it[ot(t)]
    return n == ut || (n != ct && ('function' == typeof e ? o(e) : !!e))
  },
  ot = (rt.normalize = function (t) {
    return String(t).replace(nt, '.').toLowerCase()
  }),
  it = (rt.data = {}),
  ct = (rt.NATIVE = 'N'),
  ut = (rt.POLYFILL = 'P'),
  at = rt,
  lt =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var t,
            e = !1,
            n = {}
          try {
            ;(t = Object.getOwnPropertyDescriptor(
              Object.prototype,
              '__proto__'
            ).set).call(n, []),
              (e = n instanceof Array)
          } catch (t) {}
          return function (n, r) {
            return (
              f(n),
              (function (t) {
                if (!c(t) && null !== t)
                  throw TypeError("Can't set " + String(t) + ' as a prototype')
              })(r),
              e ? t.call(n, r) : (n.__proto__ = r),
              n
            )
          }
        })()
      : void 0),
  ft = ''.split,
  st = o(function () {
    return !Object('z').propertyIsEnumerable(0)
  })
    ? function (t) {
        return 'String' == J(t) ? ft.call(t, '') : Object(t)
      }
    : Object,
  pt = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t)
    return t
  },
  gt = function (t) {
    return st(pt(t))
  },
  dt = Math.ceil,
  ht = Math.floor,
  yt = function (t) {
    return isNaN((t = +t)) ? 0 : (t > 0 ? ht : dt)(t)
  },
  vt = Math.min,
  bt = function (t) {
    return t > 0 ? vt(yt(t), 9007199254740991) : 0
  },
  xt = Math.max,
  Et = Math.min,
  mt = function (t) {
    return function (e, n, r) {
      var o,
        i = gt(e),
        c = bt(i.length),
        u = (function (t, e) {
          var n = yt(t)
          return n < 0 ? xt(n + e, 0) : Et(n, e)
        })(r, c)
      if (t && n != n) {
        for (; c > u; ) if ((o = i[u++]) != o) return !0
      } else
        for (; c > u; u++) if ((t || u in i) && i[u] === n) return t || u || 0
      return !t && -1
    }
  },
  St = { includes: mt(!0), indexOf: mt(!1) }.indexOf,
  wt = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ].concat('length', 'prototype'),
  Ot = {
    f:
      Object.getOwnPropertyNames ||
      function (t) {
        return (function (t, e) {
          var n,
            r = gt(t),
            o = 0,
            i = []
          for (n in r) !E(K, n) && E(r, n) && i.push(n)
          for (; e.length > o; ) E(r, (n = e[o++])) && (~St(i, n) || i.push(n))
          return i
        })(t, wt)
      },
  },
  Rt = P('match'),
  _t = function () {
    var t = f(this),
      e = ''
    return (
      t.global && (e += 'g'),
      t.ignoreCase && (e += 'i'),
      t.multiline && (e += 'm'),
      t.dotAll && (e += 's'),
      t.unicode && (e += 'u'),
      t.sticky && (e += 'y'),
      e
    )
  }
function Tt(t, e) {
  return RegExp(t, e)
}
var jt = {
    UNSUPPORTED_Y: o(function () {
      var t = Tt('a', 'y')
      return (t.lastIndex = 2), null != t.exec('abcd')
    }),
    BROKEN_CARET: o(function () {
      var t = Tt('^r', 'gy')
      return (t.lastIndex = 2), null != t.exec('str')
    }),
  },
  Pt = r,
  It = function (t) {
    return 'function' == typeof t ? t : void 0
  },
  Ct = function (t, e) {
    return arguments.length < 2
      ? It(Pt[t]) || It(r[t])
      : (Pt[t] && Pt[t][e]) || (r[t] && r[t][e])
  },
  Nt = P('species'),
  At = g.f,
  kt = Ot.f,
  $t = Y.set,
  Lt = P('match'),
  Mt = r.RegExp,
  Ut = Mt.prototype,
  Dt = /a/g,
  Ft = /a/g,
  Kt = new Mt(Dt) !== Dt,
  zt = jt.UNSUPPORTED_Y
if (
  i &&
  at(
    'RegExp',
    !Kt ||
      zt ||
      o(function () {
        return (
          (Ft[Lt] = !1), Mt(Dt) != Dt || Mt(Ft) == Ft || '/a/i' != Mt(Dt, 'i')
        )
      })
  )
) {
  for (
    var Bt = function (t, e) {
        var n,
          r,
          o,
          i = this instanceof Bt,
          u = c((n = t)) && (void 0 !== (r = n[Rt]) ? !!r : 'RegExp' == J(n)),
          a = void 0 === e
        if (!i && u && t.constructor === Bt && a) return t
        Kt
          ? u && !a && (t = t.source)
          : t instanceof Bt && (a && (e = _t.call(t)), (t = t.source)),
          zt && (o = !!e && e.indexOf('y') > -1) && (e = e.replace(/y/g, ''))
        var l,
          f,
          s,
          p,
          g,
          d =
            ((l = Kt ? new Mt(t, e) : Mt(t, e)),
            (f = i ? this : Ut),
            (s = Bt),
            lt &&
              'function' == typeof (p = f.constructor) &&
              p !== s &&
              c((g = p.prototype)) &&
              g !== s.prototype &&
              lt(l, g),
            l)
        return zt && o && $t(d, { sticky: o }), d
      },
      Wt = function (t) {
        ;(t in Bt) ||
          At(Bt, t, {
            configurable: !0,
            get: function () {
              return Mt[t]
            },
            set: function (e) {
              Mt[t] = e
            },
          })
      },
      qt = kt(Mt),
      Gt = 0;
    qt.length > Gt;

  )
    Wt(qt[Gt++])
  ;(Ut.constructor = Bt), (Bt.prototype = Ut), X(r, 'RegExp', Bt)
}
!(function (t) {
  var e = Ct(t),
    n = g.f
  i &&
    e &&
    !e[Nt] &&
    n(e, Nt, {
      configurable: !0,
      get: function () {
        return this
      },
    })
})('RegExp')
var Vt = {}.propertyIsEnumerable,
  Yt = Object.getOwnPropertyDescriptor,
  Xt = {
    f:
      Yt && !Vt.call({ 1: 2 }, 1)
        ? function (t) {
            var e = Yt(this, t)
            return !!e && e.enumerable
          }
        : Vt,
  },
  Ht = Object.getOwnPropertyDescriptor,
  Jt = {
    f: i
      ? Ht
      : function (t, e) {
          if (((t = gt(t)), (e = s(e, !0)), l))
            try {
              return Ht(t, e)
            } catch (t) {}
          if (E(t, e)) return d(!Xt.f.call(t, e), t[e])
        },
  },
  Qt = { f: Object.getOwnPropertySymbols },
  Zt =
    Ct('Reflect', 'ownKeys') ||
    function (t) {
      var e = Ot.f(f(t)),
        n = Qt.f
      return n ? e.concat(n(t)) : e
    },
  te = function (t, e) {
    for (var n = Zt(e), r = g.f, o = Jt.f, i = 0; i < n.length; i++) {
      var c = n[i]
      E(t, c) || r(t, c, o(e, c))
    }
  },
  ee = Jt.f,
  ne = RegExp.prototype.exec,
  re = String.prototype.replace,
  oe = ne,
  ie = (function () {
    var t = /a/,
      e = /b*/g
    return (
      ne.call(t, 'a'), ne.call(e, 'a'), 0 !== t.lastIndex || 0 !== e.lastIndex
    )
  })(),
  ce = jt.UNSUPPORTED_Y || jt.BROKEN_CARET,
  ue = void 0 !== /()??/.exec('')[1]
;(ie || ue || ce) &&
  (oe = function (t) {
    var e,
      n,
      r,
      o,
      i = this,
      c = ce && i.sticky,
      u = _t.call(i),
      a = i.source,
      l = 0,
      f = t
    return (
      c &&
        (-1 === (u = u.replace('y', '')).indexOf('g') && (u += 'g'),
        (f = String(t).slice(i.lastIndex)),
        i.lastIndex > 0 &&
          (!i.multiline || (i.multiline && '\n' !== t[i.lastIndex - 1])) &&
          ((a = '(?: ' + a + ')'), (f = ' ' + f), l++),
        (n = new RegExp('^(?:' + a + ')', u))),
      ue && (n = new RegExp('^' + a + '$(?!\\s)', u)),
      ie && (e = i.lastIndex),
      (r = ne.call(c ? n : i, f)),
      c
        ? r
          ? ((r.input = r.input.slice(l)),
            (r[0] = r[0].slice(l)),
            (r.index = i.lastIndex),
            (i.lastIndex += r[0].length))
          : (i.lastIndex = 0)
        : ie && r && (i.lastIndex = i.global ? r.index + r[0].length : e),
      ue &&
        r &&
        r.length > 1 &&
        re.call(r[0], n, function () {
          for (o = 1; o < arguments.length - 2; o++)
            void 0 === arguments[o] && (r[o] = void 0)
        }),
      r
    )
  })
var ae = oe
!(function (t, e) {
  var n,
    o,
    i,
    c,
    u,
    a = t.target,
    l = t.global,
    f = t.stat
  if ((n = l ? r : f ? r[a] || y(a, {}) : (r[a] || {}).prototype))
    for (o in e) {
      if (
        ((c = e[o]),
        (i = t.noTargetGet ? (u = ee(n, o)) && u.value : n[o]),
        !at(l ? o : a + (f ? '.' : '#') + o, t.forced) && void 0 !== i)
      ) {
        if (typeof c == typeof i) continue
        te(c, i)
      }
      ;(t.sham || (i && i.sham)) && h(c, 'sham', !0), X(n, o, c, t)
    }
})({ target: 'RegExp', proto: !0, forced: /./.exec !== ae }, { exec: ae })
var le = RegExp.prototype,
  fe = le.toString,
  se = o(function () {
    return '/a/b' != fe.call({ source: 'a', flags: 'b' })
  }),
  pe = 'toString' != fe.name
;(se || pe) &&
  X(
    RegExp.prototype,
    'toString',
    function () {
      var t = f(this),
        e = String(t.source),
        n = t.flags
      return (
        '/' +
        e +
        '/' +
        String(
          void 0 === n && t instanceof RegExp && !('flags' in le)
            ? _t.call(t)
            : n
        )
      )
    },
    { unsafe: !0 }
  )
var ge = P('species'),
  de = !o(function () {
    var t = /./
    return (
      (t.exec = function () {
        var t = []
        return (t.groups = { a: '7' }), t
      }),
      '7' !== ''.replace(t, '$<a>')
    )
  }),
  he = '$0' === 'a'.replace(/./, '$0'),
  ye = P('replace'),
  ve = !!/./[ye] && '' === /./[ye]('a', '$0'),
  be = !o(function () {
    var t = /(?:)/,
      e = t.exec
    t.exec = function () {
      return e.apply(this, arguments)
    }
    var n = 'ab'.split(t)
    return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1]
  }),
  xe = function (t) {
    return function (e, n) {
      var r,
        o,
        i = String(pt(e)),
        c = yt(n),
        u = i.length
      return c < 0 || c >= u
        ? t
          ? ''
          : void 0
        : (r = i.charCodeAt(c)) < 55296 ||
          r > 56319 ||
          c + 1 === u ||
          (o = i.charCodeAt(c + 1)) < 56320 ||
          o > 57343
        ? t
          ? i.charAt(c)
          : r
        : t
        ? i.slice(c, c + 2)
        : o - 56320 + ((r - 55296) << 10) + 65536
    }
  },
  Ee = { codeAt: xe(!1), charAt: xe(!0) }.charAt,
  me = function (t, e, n) {
    return e + (n ? Ee(t, e).length : 1)
  },
  Se = function (t, e) {
    var n = t.exec
    if ('function' == typeof n) {
      var r = n.call(t, e)
      if ('object' != typeof r)
        throw TypeError(
          'RegExp exec method returned something other than an Object or null'
        )
      return r
    }
    if ('RegExp' !== J(t))
      throw TypeError('RegExp#exec called on incompatible receiver')
    return ae.call(t, e)
  },
  we = Math.max,
  Oe = Math.min,
  Re = Math.floor,
  _e = /\$([$&'`]|\d\d?|<[^>]*>)/g,
  Te = /\$([$&'`]|\d\d?)/g
!(function (t, e, n, r) {
  var i = P(t),
    c = !o(function () {
      var e = {}
      return (
        (e[i] = function () {
          return 7
        }),
        7 != ''[t](e)
      )
    }),
    u =
      c &&
      !o(function () {
        var e = !1,
          n = /a/
        return (
          'split' === t &&
            (((n = {}).constructor = {}),
            (n.constructor[ge] = function () {
              return n
            }),
            (n.flags = ''),
            (n[i] = /./[i])),
          (n.exec = function () {
            return (e = !0), null
          }),
          n[i](''),
          !e
        )
      })
  if (
    !c ||
    !u ||
    ('replace' === t && (!de || !he || ve)) ||
    ('split' === t && !be)
  ) {
    var a = /./[i],
      l = n(
        i,
        ''[t],
        function (t, e, n, r, o) {
          return e.exec === ae
            ? c && !o
              ? { done: !0, value: a.call(e, n, r) }
              : { done: !0, value: t.call(n, e, r) }
            : { done: !1 }
        },
        {
          REPLACE_KEEPS_$0: he,
          REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: ve,
        }
      ),
      f = l[0],
      s = l[1]
    X(String.prototype, t, f),
      X(
        RegExp.prototype,
        i,
        2 == e
          ? function (t, e) {
              return s.call(t, this, e)
            }
          : function (t) {
              return s.call(t, this)
            }
      )
  }
  r && h(RegExp.prototype[i], 'sham', !0)
})('replace', 2, function (t, e, n, r) {
  var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
    i = r.REPLACE_KEEPS_$0,
    c = o ? '$' : '$0'
  return [
    function (n, r) {
      var o = pt(this),
        i = null == n ? void 0 : n[t]
      return void 0 !== i ? i.call(n, o, r) : e.call(String(o), n, r)
    },
    function (t, r) {
      if ((!o && i) || ('string' == typeof r && -1 === r.indexOf(c))) {
        var a = n(e, t, this, r)
        if (a.done) return a.value
      }
      var l = f(t),
        s = String(this),
        p = 'function' == typeof r
      p || (r = String(r))
      var g = l.global
      if (g) {
        var d = l.unicode
        l.lastIndex = 0
      }
      for (var h = []; ; ) {
        var y = Se(l, s)
        if (null === y) break
        if ((h.push(y), !g)) break
        '' === String(y[0]) && (l.lastIndex = me(s, bt(l.lastIndex), d))
      }
      for (var v, b = '', x = 0, E = 0; E < h.length; E++) {
        y = h[E]
        for (
          var m = String(y[0]),
            S = we(Oe(yt(y.index), s.length), 0),
            w = [],
            O = 1;
          O < y.length;
          O++
        )
          w.push(void 0 === (v = y[O]) ? v : String(v))
        var R = y.groups
        if (p) {
          var _ = [m].concat(w, S, s)
          void 0 !== R && _.push(R)
          var T = String(r.apply(void 0, _))
        } else T = u(m, s, S, w, R, r)
        S >= x && ((b += s.slice(x, S) + T), (x = S + m.length))
      }
      return b + s.slice(x)
    },
  ]
  function u(t, n, r, o, i, c) {
    var u = r + t.length,
      a = o.length,
      l = Te
    return (
      void 0 !== i && ((i = Object(pt(i))), (l = _e)),
      e.call(c, l, function (e, c) {
        var l
        switch (c.charAt(0)) {
          case '$':
            return '$'
          case '&':
            return t
          case '`':
            return n.slice(0, r)
          case "'":
            return n.slice(u)
          case '<':
            l = i[c.slice(1, -1)]
            break
          default:
            var f = +c
            if (0 === f) return e
            if (f > a) {
              var s = Re(f / 10)
              return 0 === s
                ? e
                : s <= a
                ? void 0 === o[s - 1]
                  ? c.charAt(1)
                  : o[s - 1] + c.charAt(1)
                : e
            }
            l = o[f - 1]
        }
        return void 0 === l ? '' : l
      })
    )
  }
})
export default function () {
  var t, e, n, r, o, i, c
  function u() {
    ;(e = document.createElement('div')).classList.add('searchbox'),
      (e.style.position = 'absolute'),
      (e.style.top = '10px'),
      (e.style.right = '10px'),
      (e.style.zIndex = 10),
      (e.innerHTML =
        '<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n\t\t</span>'),
      ((n = e.querySelector('.searchinput')).style.width = '240px'),
      (n.style.fontSize = '14px'),
      (n.style.padding = '4px 6px'),
      (n.style.color = '#000'),
      (n.style.background = '#fff'),
      (n.style.borderRadius = '2px'),
      (n.style.border = '0'),
      (n.style.outline = '0'),
      (n.style.boxShadow = '0 2px 18px rgba(0, 0, 0, 0.2)'),
      (n.style['-webkit-appearance'] = 'none'),
      t.getRevealElement().appendChild(e),
      n.addEventListener(
        'keyup',
        function (e) {
          switch (e.keyCode) {
            case 13:
              e.preventDefault(),
                (function () {
                  if (i) {
                    var e = n.value
                    '' === e
                      ? (c && c.remove(), (r = null))
                      : ((c = new f('slidecontent')), (r = c.apply(e)), (o = 0))
                  }
                  r &&
                    (r.length && r.length <= o && (o = 0),
                    r.length > o && (t.slide(r[o].h, r[o].v), o++))
                })(),
                (i = !1)
              break
            default:
              i = !0
          }
        },
        !1
      ),
      l()
  }
  function a() {
    e || u(), (e.style.display = 'inline'), n.focus(), n.select()
  }
  function l() {
    e || u(), (e.style.display = 'none'), c && c.remove()
  }
  function f(e, n) {
    var r = document.getElementById(e) || document.body,
      o = n || 'EM',
      i = new RegExp('^(?:' + o + '|SCRIPT|FORM)$'),
      c = ['#ff6', '#a0ffff', '#9f9', '#f99', '#f6f'],
      u = [],
      a = 0,
      l = '',
      f = []
    ;(this.setRegex = function (t) {
      ;(t = t.replace(/^[^\w]+|[^\w]+$/g, '').replace(/[^\w'-]+/g, '|')),
        (l = new RegExp('(' + t + ')', 'i'))
    }),
      (this.getRegex = function () {
        return l
          .toString()
          .replace(/^\/\\b\(|\)\\b\/i$/g, '')
          .replace(/\|/g, ' ')
      }),
      (this.hiliteWords = function (e) {
        if (null != e && e && l && !i.test(e.nodeName)) {
          if (e.hasChildNodes())
            for (var n = 0; n < e.childNodes.length; n++)
              this.hiliteWords(e.childNodes[n])
          var r, s
          if (3 == e.nodeType)
            if ((r = e.nodeValue) && (s = l.exec(r))) {
              for (var p = e; null != p && 'SECTION' != p.nodeName; )
                p = p.parentNode
              var g = t.getIndices(p),
                d = f.length,
                h = !1
              for (n = 0; n < d; n++)
                f[n].h === g.h && f[n].v === g.v && (h = !0)
              h || f.push(g),
                u[s[0].toLowerCase()] ||
                  (u[s[0].toLowerCase()] = c[a++ % c.length])
              var y = document.createElement(o)
              y.appendChild(document.createTextNode(s[0])),
                (y.style.backgroundColor = u[s[0].toLowerCase()]),
                (y.style.fontStyle = 'inherit'),
                (y.style.color = '#000')
              var v = e.splitText(s.index)
              ;(v.nodeValue = v.nodeValue.substring(s[0].length)),
                e.parentNode.insertBefore(y, v)
            }
        }
      }),
      (this.remove = function () {
        for (
          var t, e = document.getElementsByTagName(o);
          e.length && (t = e[0]);

        )
          t.parentNode.replaceChild(t.firstChild, t)
      }),
      (this.apply = function (t) {
        if (null != t && t)
          return this.remove(), this.setRegex(t), this.hiliteWords(r), f
      })
  }
  return {
    id: 'search',
    init: function (n) {
      ;(t = n).registerKeyboardShortcut('CTRL + Shift + F', 'Search'),
        document.addEventListener(
          'keydown',
          function (t) {
            'F' == t.key &&
              (t.ctrlKey || t.metaKey) &&
              (t.preventDefault(),
              e || u(),
              'inline' !== e.style.display ? a() : l())
          },
          !1
        )
    },
    open: a,
  }
}
