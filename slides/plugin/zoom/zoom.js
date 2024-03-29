!(function (e, o) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = o())
    : 'function' == typeof define && define.amd
    ? define(o)
    : ((e =
        'undefined' != typeof globalThis ? globalThis : e || self).RevealZoom =
        o())
})(this, function () {
  'use strict'
  /*!
   * reveal.js Zoom plugin
   */ var e = {
      id: 'zoom',
      init: function (e) {
        e.getRevealElement().addEventListener('mousedown', function (t) {
          var n = /Linux/.test(window.navigator.platform) ? 'ctrl' : 'alt',
            i = (e.getConfig().zoomKey ? e.getConfig().zoomKey : n) + 'Key',
            d = e.getConfig().zoomLevel ? e.getConfig().zoomLevel : 2
          t[i] &&
            !e.isOverview() &&
            (t.preventDefault(),
            o.to({ x: t.clientX, y: t.clientY, scale: d, pan: !1 }))
        })
      },
    },
    o = (function () {
      var e = 1,
        t = 0,
        n = 0,
        i = -1,
        d = -1,
        s =
          'WebkitTransform' in document.body.style ||
          'MozTransform' in document.body.style ||
          'msTransform' in document.body.style ||
          'OTransform' in document.body.style ||
          'transform' in document.body.style
      function r(o, t) {
        var n = l()
        if (
          ((o.width = o.width || 1),
          (o.height = o.height || 1),
          (o.x -= (window.innerWidth - o.width * t) / 2),
          (o.y -= (window.innerHeight - o.height * t) / 2),
          s)
        )
          if (1 === t)
            (document.body.style.transform = ''),
              (document.body.style.OTransform = ''),
              (document.body.style.msTransform = ''),
              (document.body.style.MozTransform = ''),
              (document.body.style.WebkitTransform = '')
          else {
            var i = n.x + 'px ' + n.y + 'px',
              d = 'translate(' + -o.x + 'px,' + -o.y + 'px) scale(' + t + ')'
            ;(document.body.style.transformOrigin = i),
              (document.body.style.OTransformOrigin = i),
              (document.body.style.msTransformOrigin = i),
              (document.body.style.MozTransformOrigin = i),
              (document.body.style.WebkitTransformOrigin = i),
              (document.body.style.transform = d),
              (document.body.style.OTransform = d),
              (document.body.style.msTransform = d),
              (document.body.style.MozTransform = d),
              (document.body.style.WebkitTransform = d)
          }
        else
          1 === t
            ? ((document.body.style.position = ''),
              (document.body.style.left = ''),
              (document.body.style.top = ''),
              (document.body.style.width = ''),
              (document.body.style.height = ''),
              (document.body.style.zoom = ''))
            : ((document.body.style.position = 'relative'),
              (document.body.style.left = -(n.x + o.x) / t + 'px'),
              (document.body.style.top = -(n.y + o.y) / t + 'px'),
              (document.body.style.width = 100 * t + '%'),
              (document.body.style.height = 100 * t + '%'),
              (document.body.style.zoom = t))
        ;(e = t),
          document.documentElement.classList &&
            (1 !== e
              ? document.documentElement.classList.add('zoomed')
              : document.documentElement.classList.remove('zoomed'))
      }
      function m() {
        var o = 0.12 * window.innerWidth,
          i = 0.12 * window.innerHeight,
          d = l()
        n < i
          ? window.scroll(d.x, d.y - (14 / e) * (1 - n / i))
          : n > window.innerHeight - i &&
            window.scroll(
              d.x,
              d.y + (1 - (window.innerHeight - n) / i) * (14 / e)
            ),
          t < o
            ? window.scroll(d.x - (14 / e) * (1 - t / o), d.y)
            : t > window.innerWidth - o &&
              window.scroll(
                d.x + (1 - (window.innerWidth - t) / o) * (14 / e),
                d.y
              )
      }
      function l() {
        return {
          x: void 0 !== window.scrollX ? window.scrollX : window.pageXOffset,
          y: void 0 !== window.scrollY ? window.scrollY : window.pageYOffset,
        }
      }
      return (
        s &&
          ((document.body.style.transition = 'transform 0.8s ease'),
          (document.body.style.OTransition = '-o-transform 0.8s ease'),
          (document.body.style.msTransition = '-ms-transform 0.8s ease'),
          (document.body.style.MozTransition = '-moz-transform 0.8s ease'),
          (document.body.style.WebkitTransition =
            '-webkit-transform 0.8s ease')),
        document.addEventListener('keyup', function (t) {
          1 !== e && 27 === t.keyCode && o.out()
        }),
        document.addEventListener('mousemove', function (o) {
          1 !== e && ((t = o.clientX), (n = o.clientY))
        }),
        {
          to: function (t) {
            if (1 !== e) o.out()
            else {
              if (((t.x = t.x || 0), (t.y = t.y || 0), t.element)) {
                var n = t.element.getBoundingClientRect()
                ;(t.x = n.left - 20),
                  (t.y = n.top - 20),
                  (t.width = n.width + 40),
                  (t.height = n.height + 40)
              }
              void 0 !== t.width &&
                void 0 !== t.height &&
                (t.scale = Math.max(
                  Math.min(
                    window.innerWidth / t.width,
                    window.innerHeight / t.height
                  ),
                  1
                )),
                t.scale > 1 &&
                  ((t.x *= t.scale),
                  (t.y *= t.scale),
                  r(t, t.scale),
                  !1 !== t.pan &&
                    (i = setTimeout(function () {
                      d = setInterval(m, 1e3 / 60)
                    }, 800)))
            }
          },
          out: function () {
            clearTimeout(i), clearInterval(d), r({ x: 0, y: 0 }, 1), (e = 1)
          },
          magnify: function (e) {
            this.to(e)
          },
          reset: function () {
            this.out()
          },
          zoomLevel: function () {
            return e
          },
        }
      )
    })()
  return function () {
    return e
  }
})
