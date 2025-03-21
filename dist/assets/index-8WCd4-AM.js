var By = (t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports);
var X6 = By((Ot, Mt) => {
  (function () {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
      o(l);
    new MutationObserver((l) => {
      for (const f of l)
        if (f.type === "childList")
          for (const c of f.addedNodes)
            c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
    }).observe(document, { childList: !0, subtree: !0 });
    function i(l) {
      const f = {};
      return (
        l.integrity && (f.integrity = l.integrity),
        l.referrerPolicy && (f.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials"
          ? (f.credentials = "include")
          : l.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
        f
      );
    }
    function o(l) {
      if (l.ep) return;
      l.ep = !0;
      const f = i(l);
      fetch(l.href, f);
    }
  })();
  function wc(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  var vu = { exports: {} },
    ns = {},
    wu = { exports: {} },
    ge = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Yp;
  function Iy() {
    if (Yp) return ge;
    Yp = 1;
    var t = Symbol.for("react.element"),
      r = Symbol.for("react.portal"),
      i = Symbol.for("react.fragment"),
      o = Symbol.for("react.strict_mode"),
      l = Symbol.for("react.profiler"),
      f = Symbol.for("react.provider"),
      c = Symbol.for("react.context"),
      p = Symbol.for("react.forward_ref"),
      h = Symbol.for("react.suspense"),
      m = Symbol.for("react.memo"),
      y = Symbol.for("react.lazy"),
      v = Symbol.iterator;
    function w(E) {
      return E === null || typeof E != "object"
        ? null
        : ((E = (v && E[v]) || E["@@iterator"]),
          typeof E == "function" ? E : null);
    }
    var k = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      S = Object.assign,
      T = {};
    function P(E, F, ce) {
      (this.props = E),
        (this.context = F),
        (this.refs = T),
        (this.updater = ce || k);
    }
    (P.prototype.isReactComponent = {}),
      (P.prototype.setState = function (E, F) {
        if (typeof E != "object" && typeof E != "function" && E != null)
          throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, E, F, "setState");
      }),
      (P.prototype.forceUpdate = function (E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate");
      });
    function b() {}
    b.prototype = P.prototype;
    function I(E, F, ce) {
      (this.props = E),
        (this.context = F),
        (this.refs = T),
        (this.updater = ce || k);
    }
    var V = (I.prototype = new b());
    (V.constructor = I), S(V, P.prototype), (V.isPureReactComponent = !0);
    var J = Array.isArray,
      M = Object.prototype.hasOwnProperty,
      z = { current: null },
      Z = { key: !0, ref: !0, __self: !0, __source: !0 };
    function te(E, F, ce) {
      var de,
        me = {},
        ye = null,
        Se = null;
      if (F != null)
        for (de in (F.ref !== void 0 && (Se = F.ref),
        F.key !== void 0 && (ye = "" + F.key),
        F))
          M.call(F, de) && !Z.hasOwnProperty(de) && (me[de] = F[de]);
      var xe = arguments.length - 2;
      if (xe === 1) me.children = ce;
      else if (1 < xe) {
        for (var ke = Array(xe), st = 0; st < xe; st++)
          ke[st] = arguments[st + 2];
        me.children = ke;
      }
      if (E && E.defaultProps)
        for (de in ((xe = E.defaultProps), xe))
          me[de] === void 0 && (me[de] = xe[de]);
      return {
        $$typeof: t,
        type: E,
        key: ye,
        ref: Se,
        props: me,
        _owner: z.current,
      };
    }
    function Ae(E, F) {
      return {
        $$typeof: t,
        type: E.type,
        key: F,
        ref: E.ref,
        props: E.props,
        _owner: E._owner,
      };
    }
    function Me(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function et(E) {
      var F = { "=": "=0", ":": "=2" };
      return (
        "$" +
        E.replace(/[=:]/g, function (ce) {
          return F[ce];
        })
      );
    }
    var pt = /\/+/g;
    function Pe(E, F) {
      return typeof E == "object" && E !== null && E.key != null
        ? et("" + E.key)
        : F.toString(36);
    }
    function $e(E, F, ce, de, me) {
      var ye = typeof E;
      (ye === "undefined" || ye === "boolean") && (E = null);
      var Se = !1;
      if (E === null) Se = !0;
      else
        switch (ye) {
          case "string":
          case "number":
            Se = !0;
            break;
          case "object":
            switch (E.$$typeof) {
              case t:
              case r:
                Se = !0;
            }
        }
      if (Se)
        return (
          (Se = E),
          (me = me(Se)),
          (E = de === "" ? "." + Pe(Se, 0) : de),
          J(me)
            ? ((ce = ""),
              E != null && (ce = E.replace(pt, "$&/") + "/"),
              $e(me, F, ce, "", function (st) {
                return st;
              }))
            : me != null &&
              (Me(me) &&
                (me = Ae(
                  me,
                  ce +
                    (!me.key || (Se && Se.key === me.key)
                      ? ""
                      : ("" + me.key).replace(pt, "$&/") + "/") +
                    E
                )),
              F.push(me)),
          1
        );
      if (((Se = 0), (de = de === "" ? "." : de + ":"), J(E)))
        for (var xe = 0; xe < E.length; xe++) {
          ye = E[xe];
          var ke = de + Pe(ye, xe);
          Se += $e(ye, F, ce, ke, me);
        }
      else if (((ke = w(E)), typeof ke == "function"))
        for (E = ke.call(E), xe = 0; !(ye = E.next()).done; )
          (ye = ye.value),
            (ke = de + Pe(ye, xe++)),
            (Se += $e(ye, F, ce, ke, me));
      else if (ye === "object")
        throw (
          ((F = String(E)),
          Error(
            "Objects are not valid as a React child (found: " +
              (F === "[object Object]"
                ? "object with keys {" + Object.keys(E).join(", ") + "}"
                : F) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      return Se;
    }
    function yt(E, F, ce) {
      if (E == null) return E;
      var de = [],
        me = 0;
      return (
        $e(E, de, "", "", function (ye) {
          return F.call(ce, ye, me++);
        }),
        de
      );
    }
    function tt(E) {
      if (E._status === -1) {
        var F = E._result;
        (F = F()),
          F.then(
            function (ce) {
              (E._status === 0 || E._status === -1) &&
                ((E._status = 1), (E._result = ce));
            },
            function (ce) {
              (E._status === 0 || E._status === -1) &&
                ((E._status = 2), (E._result = ce));
            }
          ),
          E._status === -1 && ((E._status = 0), (E._result = F));
      }
      if (E._status === 1) return E._result.default;
      throw E._result;
    }
    var he = { current: null },
      $ = { transition: null },
      re = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: $,
        ReactCurrentOwner: z,
      };
    function W() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return (
      (ge.Children = {
        map: yt,
        forEach: function (E, F, ce) {
          yt(
            E,
            function () {
              F.apply(this, arguments);
            },
            ce
          );
        },
        count: function (E) {
          var F = 0;
          return (
            yt(E, function () {
              F++;
            }),
            F
          );
        },
        toArray: function (E) {
          return (
            yt(E, function (F) {
              return F;
            }) || []
          );
        },
        only: function (E) {
          if (!Me(E))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return E;
        },
      }),
      (ge.Component = P),
      (ge.Fragment = i),
      (ge.Profiler = l),
      (ge.PureComponent = I),
      (ge.StrictMode = o),
      (ge.Suspense = h),
      (ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re),
      (ge.act = W),
      (ge.cloneElement = function (E, F, ce) {
        if (E == null)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              E +
              "."
          );
        var de = S({}, E.props),
          me = E.key,
          ye = E.ref,
          Se = E._owner;
        if (F != null) {
          if (
            (F.ref !== void 0 && ((ye = F.ref), (Se = z.current)),
            F.key !== void 0 && (me = "" + F.key),
            E.type && E.type.defaultProps)
          )
            var xe = E.type.defaultProps;
          for (ke in F)
            M.call(F, ke) &&
              !Z.hasOwnProperty(ke) &&
              (de[ke] = F[ke] === void 0 && xe !== void 0 ? xe[ke] : F[ke]);
        }
        var ke = arguments.length - 2;
        if (ke === 1) de.children = ce;
        else if (1 < ke) {
          xe = Array(ke);
          for (var st = 0; st < ke; st++) xe[st] = arguments[st + 2];
          de.children = xe;
        }
        return {
          $$typeof: t,
          type: E.type,
          key: me,
          ref: ye,
          props: de,
          _owner: Se,
        };
      }),
      (ge.createContext = function (E) {
        return (
          (E = {
            $$typeof: c,
            _currentValue: E,
            _currentValue2: E,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }),
          (E.Provider = { $$typeof: f, _context: E }),
          (E.Consumer = E)
        );
      }),
      (ge.createElement = te),
      (ge.createFactory = function (E) {
        var F = te.bind(null, E);
        return (F.type = E), F;
      }),
      (ge.createRef = function () {
        return { current: null };
      }),
      (ge.forwardRef = function (E) {
        return { $$typeof: p, render: E };
      }),
      (ge.isValidElement = Me),
      (ge.lazy = function (E) {
        return {
          $$typeof: y,
          _payload: { _status: -1, _result: E },
          _init: tt,
        };
      }),
      (ge.memo = function (E, F) {
        return { $$typeof: m, type: E, compare: F === void 0 ? null : F };
      }),
      (ge.startTransition = function (E) {
        var F = $.transition;
        $.transition = {};
        try {
          E();
        } finally {
          $.transition = F;
        }
      }),
      (ge.unstable_act = W),
      (ge.useCallback = function (E, F) {
        return he.current.useCallback(E, F);
      }),
      (ge.useContext = function (E) {
        return he.current.useContext(E);
      }),
      (ge.useDebugValue = function () {}),
      (ge.useDeferredValue = function (E) {
        return he.current.useDeferredValue(E);
      }),
      (ge.useEffect = function (E, F) {
        return he.current.useEffect(E, F);
      }),
      (ge.useId = function () {
        return he.current.useId();
      }),
      (ge.useImperativeHandle = function (E, F, ce) {
        return he.current.useImperativeHandle(E, F, ce);
      }),
      (ge.useInsertionEffect = function (E, F) {
        return he.current.useInsertionEffect(E, F);
      }),
      (ge.useLayoutEffect = function (E, F) {
        return he.current.useLayoutEffect(E, F);
      }),
      (ge.useMemo = function (E, F) {
        return he.current.useMemo(E, F);
      }),
      (ge.useReducer = function (E, F, ce) {
        return he.current.useReducer(E, F, ce);
      }),
      (ge.useRef = function (E) {
        return he.current.useRef(E);
      }),
      (ge.useState = function (E) {
        return he.current.useState(E);
      }),
      (ge.useSyncExternalStore = function (E, F, ce) {
        return he.current.useSyncExternalStore(E, F, ce);
      }),
      (ge.useTransition = function () {
        return he.current.useTransition();
      }),
      (ge.version = "18.3.1"),
      ge
    );
  }
  var Xp;
  function xc() {
    return Xp || ((Xp = 1), (wu.exports = Iy())), wu.exports;
  }
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Jp;
  function Vy() {
    if (Jp) return ns;
    Jp = 1;
    var t = xc(),
      r = Symbol.for("react.element"),
      i = Symbol.for("react.fragment"),
      o = Object.prototype.hasOwnProperty,
      l =
        t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      f = { key: !0, ref: !0, __self: !0, __source: !0 };
    function c(p, h, m) {
      var y,
        v = {},
        w = null,
        k = null;
      m !== void 0 && (w = "" + m),
        h.key !== void 0 && (w = "" + h.key),
        h.ref !== void 0 && (k = h.ref);
      for (y in h) o.call(h, y) && !f.hasOwnProperty(y) && (v[y] = h[y]);
      if (p && p.defaultProps)
        for (y in ((h = p.defaultProps), h)) v[y] === void 0 && (v[y] = h[y]);
      return {
        $$typeof: r,
        type: p,
        key: w,
        ref: k,
        props: v,
        _owner: l.current,
      };
    }
    return (ns.Fragment = i), (ns.jsx = c), (ns.jsxs = c), ns;
  }
  var eh;
  function _y() {
    return eh || ((eh = 1), (vu.exports = Vy())), vu.exports;
  }
  var R = _y(),
    H = xc();
  const Uy = wc(H);
  var Wo = {},
    xu = { exports: {} },
    St = {},
    Cu = { exports: {} },
    Au = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var th;
  function zy() {
    return (
      th ||
        ((th = 1),
        (function (t) {
          function r($, re) {
            var W = $.length;
            $.push(re);
            e: for (; 0 < W; ) {
              var E = (W - 1) >>> 1,
                F = $[E];
              if (0 < l(F, re)) ($[E] = re), ($[W] = F), (W = E);
              else break e;
            }
          }
          function i($) {
            return $.length === 0 ? null : $[0];
          }
          function o($) {
            if ($.length === 0) return null;
            var re = $[0],
              W = $.pop();
            if (W !== re) {
              $[0] = W;
              e: for (var E = 0, F = $.length, ce = F >>> 1; E < ce; ) {
                var de = 2 * (E + 1) - 1,
                  me = $[de],
                  ye = de + 1,
                  Se = $[ye];
                if (0 > l(me, W))
                  ye < F && 0 > l(Se, me)
                    ? (($[E] = Se), ($[ye] = W), (E = ye))
                    : (($[E] = me), ($[de] = W), (E = de));
                else if (ye < F && 0 > l(Se, W))
                  ($[E] = Se), ($[ye] = W), (E = ye);
                else break e;
              }
            }
            return re;
          }
          function l($, re) {
            var W = $.sortIndex - re.sortIndex;
            return W !== 0 ? W : $.id - re.id;
          }
          if (
            typeof performance == "object" &&
            typeof performance.now == "function"
          ) {
            var f = performance;
            t.unstable_now = function () {
              return f.now();
            };
          } else {
            var c = Date,
              p = c.now();
            t.unstable_now = function () {
              return c.now() - p;
            };
          }
          var h = [],
            m = [],
            y = 1,
            v = null,
            w = 3,
            k = !1,
            S = !1,
            T = !1,
            P = typeof setTimeout == "function" ? setTimeout : null,
            b = typeof clearTimeout == "function" ? clearTimeout : null,
            I = typeof setImmediate < "u" ? setImmediate : null;
          typeof navigator < "u" &&
            navigator.scheduling !== void 0 &&
            navigator.scheduling.isInputPending !== void 0 &&
            navigator.scheduling.isInputPending.bind(navigator.scheduling);
          function V($) {
            for (var re = i(m); re !== null; ) {
              if (re.callback === null) o(m);
              else if (re.startTime <= $)
                o(m), (re.sortIndex = re.expirationTime), r(h, re);
              else break;
              re = i(m);
            }
          }
          function J($) {
            if (((T = !1), V($), !S))
              if (i(h) !== null) (S = !0), tt(M);
              else {
                var re = i(m);
                re !== null && he(J, re.startTime - $);
              }
          }
          function M($, re) {
            (S = !1), T && ((T = !1), b(te), (te = -1)), (k = !0);
            var W = w;
            try {
              for (
                V(re), v = i(h);
                v !== null && (!(v.expirationTime > re) || ($ && !et()));

              ) {
                var E = v.callback;
                if (typeof E == "function") {
                  (v.callback = null), (w = v.priorityLevel);
                  var F = E(v.expirationTime <= re);
                  (re = t.unstable_now()),
                    typeof F == "function"
                      ? (v.callback = F)
                      : v === i(h) && o(h),
                    V(re);
                } else o(h);
                v = i(h);
              }
              if (v !== null) var ce = !0;
              else {
                var de = i(m);
                de !== null && he(J, de.startTime - re), (ce = !1);
              }
              return ce;
            } finally {
              (v = null), (w = W), (k = !1);
            }
          }
          var z = !1,
            Z = null,
            te = -1,
            Ae = 5,
            Me = -1;
          function et() {
            return !(t.unstable_now() - Me < Ae);
          }
          function pt() {
            if (Z !== null) {
              var $ = t.unstable_now();
              Me = $;
              var re = !0;
              try {
                re = Z(!0, $);
              } finally {
                re ? Pe() : ((z = !1), (Z = null));
              }
            } else z = !1;
          }
          var Pe;
          if (typeof I == "function")
            Pe = function () {
              I(pt);
            };
          else if (typeof MessageChannel < "u") {
            var $e = new MessageChannel(),
              yt = $e.port2;
            ($e.port1.onmessage = pt),
              (Pe = function () {
                yt.postMessage(null);
              });
          } else
            Pe = function () {
              P(pt, 0);
            };
          function tt($) {
            (Z = $), z || ((z = !0), Pe());
          }
          function he($, re) {
            te = P(function () {
              $(t.unstable_now());
            }, re);
          }
          (t.unstable_IdlePriority = 5),
            (t.unstable_ImmediatePriority = 1),
            (t.unstable_LowPriority = 4),
            (t.unstable_NormalPriority = 3),
            (t.unstable_Profiling = null),
            (t.unstable_UserBlockingPriority = 2),
            (t.unstable_cancelCallback = function ($) {
              $.callback = null;
            }),
            (t.unstable_continueExecution = function () {
              S || k || ((S = !0), tt(M));
            }),
            (t.unstable_forceFrameRate = function ($) {
              0 > $ || 125 < $
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (Ae = 0 < $ ? Math.floor(1e3 / $) : 5);
            }),
            (t.unstable_getCurrentPriorityLevel = function () {
              return w;
            }),
            (t.unstable_getFirstCallbackNode = function () {
              return i(h);
            }),
            (t.unstable_next = function ($) {
              switch (w) {
                case 1:
                case 2:
                case 3:
                  var re = 3;
                  break;
                default:
                  re = w;
              }
              var W = w;
              w = re;
              try {
                return $();
              } finally {
                w = W;
              }
            }),
            (t.unstable_pauseExecution = function () {}),
            (t.unstable_requestPaint = function () {}),
            (t.unstable_runWithPriority = function ($, re) {
              switch ($) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  $ = 3;
              }
              var W = w;
              w = $;
              try {
                return re();
              } finally {
                w = W;
              }
            }),
            (t.unstable_scheduleCallback = function ($, re, W) {
              var E = t.unstable_now();
              switch (
                (typeof W == "object" && W !== null
                  ? ((W = W.delay),
                    (W = typeof W == "number" && 0 < W ? E + W : E))
                  : (W = E),
                $)
              ) {
                case 1:
                  var F = -1;
                  break;
                case 2:
                  F = 250;
                  break;
                case 5:
                  F = 1073741823;
                  break;
                case 4:
                  F = 1e4;
                  break;
                default:
                  F = 5e3;
              }
              return (
                (F = W + F),
                ($ = {
                  id: y++,
                  callback: re,
                  priorityLevel: $,
                  startTime: W,
                  expirationTime: F,
                  sortIndex: -1,
                }),
                W > E
                  ? (($.sortIndex = W),
                    r(m, $),
                    i(h) === null &&
                      $ === i(m) &&
                      (T ? (b(te), (te = -1)) : (T = !0), he(J, W - E)))
                  : (($.sortIndex = F), r(h, $), S || k || ((S = !0), tt(M))),
                $
              );
            }),
            (t.unstable_shouldYield = et),
            (t.unstable_wrapCallback = function ($) {
              var re = w;
              return function () {
                var W = w;
                w = re;
                try {
                  return $.apply(this, arguments);
                } finally {
                  w = W;
                }
              };
            });
        })(Au)),
      Au
    );
  }
  var nh;
  function Qy() {
    return nh || ((nh = 1), (Cu.exports = zy())), Cu.exports;
  }
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var rh;
  function Hy() {
    if (rh) return St;
    rh = 1;
    var t = xc(),
      r = Qy();
    function i(e) {
      for (
        var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          s = 1;
        s < arguments.length;
        s++
      )
        n += "&args[]=" + encodeURIComponent(arguments[s]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        n +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var o = new Set(),
      l = {};
    function f(e, n) {
      c(e, n), c(e + "Capture", n);
    }
    function c(e, n) {
      for (l[e] = n, e = 0; e < n.length; e++) o.add(n[e]);
    }
    var p = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      h = Object.prototype.hasOwnProperty,
      m =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      y = {},
      v = {};
    function w(e) {
      return h.call(v, e)
        ? !0
        : h.call(y, e)
        ? !1
        : m.test(e)
        ? (v[e] = !0)
        : ((y[e] = !0), !1);
    }
    function k(e, n, s, a) {
      if (s !== null && s.type === 0) return !1;
      switch (typeof n) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return a
            ? !1
            : s !== null
            ? !s.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
        default:
          return !1;
      }
    }
    function S(e, n, s, a) {
      if (n === null || typeof n > "u" || k(e, n, s, a)) return !0;
      if (a) return !1;
      if (s !== null)
        switch (s.type) {
          case 3:
            return !n;
          case 4:
            return n === !1;
          case 5:
            return isNaN(n);
          case 6:
            return isNaN(n) || 1 > n;
        }
      return !1;
    }
    function T(e, n, s, a, u, d, g) {
      (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
        (this.attributeName = a),
        (this.attributeNamespace = u),
        (this.mustUseProperty = s),
        (this.propertyName = e),
        (this.type = n),
        (this.sanitizeURL = d),
        (this.removeEmptyString = g);
    }
    var P = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        P[e] = new T(e, 0, !1, e, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (e) {
        var n = e[0];
        P[n] = new T(n, 1, !1, e[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
        e
      ) {
        P[e] = new T(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (e) {
        P[e] = new T(e, 2, !1, e, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (e) {
          P[e] = new T(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        P[e] = new T(e, 3, !0, e, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (e) {
        P[e] = new T(e, 4, !1, e, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (e) {
        P[e] = new T(e, 6, !1, e, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (e) {
        P[e] = new T(e, 5, !1, e.toLowerCase(), null, !1, !1);
      });
    var b = /[\-:]([a-z])/g;
    function I(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(b, I);
        P[n] = new T(n, 1, !1, e, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (e) {
          var n = e.replace(b, I);
          P[n] = new T(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var n = e.replace(b, I);
        P[n] = new T(
          n,
          1,
          !1,
          e,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        P[e] = new T(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (P.xlinkHref = new T(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        P[e] = new T(e, 1, !1, e.toLowerCase(), null, !0, !0);
      });
    function V(e, n, s, a) {
      var u = P.hasOwnProperty(n) ? P[n] : null;
      (u !== null
        ? u.type !== 0
        : a ||
          !(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
        (S(n, s, u, a) && (s = null),
        a || u === null
          ? w(n) &&
            (s === null ? e.removeAttribute(n) : e.setAttribute(n, "" + s))
          : u.mustUseProperty
          ? (e[u.propertyName] = s === null ? (u.type === 3 ? !1 : "") : s)
          : ((n = u.attributeName),
            (a = u.attributeNamespace),
            s === null
              ? e.removeAttribute(n)
              : ((u = u.type),
                (s = u === 3 || (u === 4 && s === !0) ? "" : "" + s),
                a ? e.setAttributeNS(a, n, s) : e.setAttribute(n, s))));
    }
    var J = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      M = Symbol.for("react.element"),
      z = Symbol.for("react.portal"),
      Z = Symbol.for("react.fragment"),
      te = Symbol.for("react.strict_mode"),
      Ae = Symbol.for("react.profiler"),
      Me = Symbol.for("react.provider"),
      et = Symbol.for("react.context"),
      pt = Symbol.for("react.forward_ref"),
      Pe = Symbol.for("react.suspense"),
      $e = Symbol.for("react.suspense_list"),
      yt = Symbol.for("react.memo"),
      tt = Symbol.for("react.lazy"),
      he = Symbol.for("react.offscreen"),
      $ = Symbol.iterator;
    function re(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = ($ && e[$]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var W = Object.assign,
      E;
    function F(e) {
      if (E === void 0)
        try {
          throw Error();
        } catch (s) {
          var n = s.stack.trim().match(/\n( *(at )?)/);
          E = (n && n[1]) || "";
        }
      return (
        `
` +
        E +
        e
      );
    }
    var ce = !1;
    function de(e, n) {
      if (!e || ce) return "";
      ce = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (n)
          if (
            ((n = function () {
              throw Error();
            }),
            Object.defineProperty(n.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(n, []);
            } catch (L) {
              var a = L;
            }
            Reflect.construct(e, [], n);
          } else {
            try {
              n.call();
            } catch (L) {
              a = L;
            }
            e.call(n.prototype);
          }
        else {
          try {
            throw Error();
          } catch (L) {
            a = L;
          }
          e();
        }
      } catch (L) {
        if (L && a && typeof L.stack == "string") {
          for (
            var u = L.stack.split(`
`),
              d = a.stack.split(`
`),
              g = u.length - 1,
              x = d.length - 1;
            1 <= g && 0 <= x && u[g] !== d[x];

          )
            x--;
          for (; 1 <= g && 0 <= x; g--, x--)
            if (u[g] !== d[x]) {
              if (g !== 1 || x !== 1)
                do
                  if ((g--, x--, 0 > x || u[g] !== d[x])) {
                    var C =
                      `
` + u[g].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        C.includes("<anonymous>") &&
                        (C = C.replace("<anonymous>", e.displayName)),
                      C
                    );
                  }
                while (1 <= g && 0 <= x);
              break;
            }
        }
      } finally {
        (ce = !1), (Error.prepareStackTrace = s);
      }
      return (e = e ? e.displayName || e.name : "") ? F(e) : "";
    }
    function me(e) {
      switch (e.tag) {
        case 5:
          return F(e.type);
        case 16:
          return F("Lazy");
        case 13:
          return F("Suspense");
        case 19:
          return F("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (e = de(e.type, !1)), e;
        case 11:
          return (e = de(e.type.render, !1)), e;
        case 1:
          return (e = de(e.type, !0)), e;
        default:
          return "";
      }
    }
    function ye(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Z:
          return "Fragment";
        case z:
          return "Portal";
        case Ae:
          return "Profiler";
        case te:
          return "StrictMode";
        case Pe:
          return "Suspense";
        case $e:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case et:
            return (e.displayName || "Context") + ".Consumer";
          case Me:
            return (e._context.displayName || "Context") + ".Provider";
          case pt:
            var n = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = n.displayName || n.name || ""),
                (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
              e
            );
          case yt:
            return (
              (n = e.displayName || null), n !== null ? n : ye(e.type) || "Memo"
            );
          case tt:
            (n = e._payload), (e = e._init);
            try {
              return ye(e(n));
            } catch {}
        }
      return null;
    }
    function Se(e) {
      var n = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (n.displayName || "Context") + ".Consumer";
        case 10:
          return (n._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (e = n.render),
            (e = e.displayName || e.name || ""),
            n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return n;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return ye(n);
        case 8:
          return n === te ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof n == "function") return n.displayName || n.name || null;
          if (typeof n == "string") return n;
      }
      return null;
    }
    function xe(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function ke(e) {
      var n = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (n === "checkbox" || n === "radio")
      );
    }
    function st(e) {
      var n = ke(e) ? "checked" : "value",
        s = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
        a = "" + e[n];
      if (
        !e.hasOwnProperty(n) &&
        typeof s < "u" &&
        typeof s.get == "function" &&
        typeof s.set == "function"
      ) {
        var u = s.get,
          d = s.set;
        return (
          Object.defineProperty(e, n, {
            configurable: !0,
            get: function () {
              return u.call(this);
            },
            set: function (g) {
              (a = "" + g), d.call(this, g);
            },
          }),
          Object.defineProperty(e, n, { enumerable: s.enumerable }),
          {
            getValue: function () {
              return a;
            },
            setValue: function (g) {
              a = "" + g;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[n];
            },
          }
        );
      }
    }
    function kn(e) {
      e._valueTracker || (e._valueTracker = st(e));
    }
    function Ds(e) {
      if (!e) return !1;
      var n = e._valueTracker;
      if (!n) return !0;
      var s = n.getValue(),
        a = "";
      return (
        e && (a = ke(e) ? (e.checked ? "true" : "false") : e.value),
        (e = a),
        e !== s ? (n.setValue(e), !0) : !1
      );
    }
    function er(e) {
      if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function yi(e, n) {
      var s = n.checked;
      return W({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: s ?? e._wrapperState.initialChecked,
      });
    }
    function Ns(e, n) {
      var s = n.defaultValue == null ? "" : n.defaultValue,
        a = n.checked != null ? n.checked : n.defaultChecked;
      (s = xe(n.value != null ? n.value : s)),
        (e._wrapperState = {
          initialChecked: a,
          initialValue: s,
          controlled:
            n.type === "checkbox" || n.type === "radio"
              ? n.checked != null
              : n.value != null,
        });
    }
    function bs(e, n) {
      (n = n.checked), n != null && V(e, "checked", n, !1);
    }
    function vi(e, n) {
      bs(e, n);
      var s = xe(n.value),
        a = n.type;
      if (s != null)
        a === "number"
          ? ((s === 0 && e.value === "") || e.value != s) && (e.value = "" + s)
          : e.value !== "" + s && (e.value = "" + s);
      else if (a === "submit" || a === "reset") {
        e.removeAttribute("value");
        return;
      }
      n.hasOwnProperty("value")
        ? tr(e, n.type, s)
        : n.hasOwnProperty("defaultValue") && tr(e, n.type, xe(n.defaultValue)),
        n.checked == null &&
          n.defaultChecked != null &&
          (e.defaultChecked = !!n.defaultChecked);
    }
    function Fs(e, n, s) {
      if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var a = n.type;
        if (
          !(
            (a !== "submit" && a !== "reset") ||
            (n.value !== void 0 && n.value !== null)
          )
        )
          return;
        (n = "" + e._wrapperState.initialValue),
          s || n === e.value || (e.value = n),
          (e.defaultValue = n);
      }
      (s = e.name),
        s !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        s !== "" && (e.name = s);
    }
    function tr(e, n, s) {
      (n !== "number" || er(e.ownerDocument) !== e) &&
        (s == null
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
    }
    var nr = Array.isArray;
    function Rn(e, n, s, a) {
      if (((e = e.options), n)) {
        n = {};
        for (var u = 0; u < s.length; u++) n["$" + s[u]] = !0;
        for (s = 0; s < e.length; s++)
          (u = n.hasOwnProperty("$" + e[s].value)),
            e[s].selected !== u && (e[s].selected = u),
            u && a && (e[s].defaultSelected = !0);
      } else {
        for (s = "" + xe(s), n = null, u = 0; u < e.length; u++) {
          if (e[u].value === s) {
            (e[u].selected = !0), a && (e[u].defaultSelected = !0);
            return;
          }
          n !== null || e[u].disabled || (n = e[u]);
        }
        n !== null && (n.selected = !0);
      }
    }
    function D(e, n) {
      if (n.dangerouslySetInnerHTML != null) throw Error(i(91));
      return W({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function G(e, n) {
      var s = n.value;
      if (s == null) {
        if (((s = n.children), (n = n.defaultValue), s != null)) {
          if (n != null) throw Error(i(92));
          if (nr(s)) {
            if (1 < s.length) throw Error(i(93));
            s = s[0];
          }
          n = s;
        }
        n == null && (n = ""), (s = n);
      }
      e._wrapperState = { initialValue: xe(s) };
    }
    function ne(e, n) {
      var s = xe(n.value),
        a = xe(n.defaultValue);
      s != null &&
        ((s = "" + s),
        s !== e.value && (e.value = s),
        n.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)),
        a != null && (e.defaultValue = "" + a);
    }
    function ie(e) {
      var n = e.textContent;
      n === e._wrapperState.initialValue &&
        n !== "" &&
        n !== null &&
        (e.value = n);
    }
    function pe(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function ve(e, n) {
      return e == null || e === "http://www.w3.org/1999/xhtml"
        ? pe(n)
        : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var We,
      Nt = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
          ? function (n, s, a, u) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(n, s, a, u);
              });
            }
          : e;
      })(function (e, n) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
          e.innerHTML = n;
        else {
          for (
            We = We || document.createElement("div"),
              We.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
              n = We.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; n.firstChild; ) e.appendChild(n.firstChild);
        }
      });
    function cn(e, n) {
      if (n) {
        var s = e.firstChild;
        if (s && s === e.lastChild && s.nodeType === 3) {
          s.nodeValue = n;
          return;
        }
      }
      e.textContent = n;
    }
    var fn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      ja = ["Webkit", "ms", "Moz", "O"];
    Object.keys(fn).forEach(function (e) {
      ja.forEach(function (n) {
        (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (fn[n] = fn[e]);
      });
    });
    function wi(e, n, s) {
      return n == null || typeof n == "boolean" || n === ""
        ? ""
        : s ||
          typeof n != "number" ||
          n === 0 ||
          (fn.hasOwnProperty(e) && fn[e])
        ? ("" + n).trim()
        : n + "px";
    }
    function Bs(e, n) {
      e = e.style;
      for (var s in n)
        if (n.hasOwnProperty(s)) {
          var a = s.indexOf("--") === 0,
            u = wi(s, n[s], a);
          s === "float" && (s = "cssFloat"),
            a ? e.setProperty(s, u) : (e[s] = u);
        }
    }
    var z1 = W(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function Oa(e, n) {
      if (n) {
        if (z1[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
          throw Error(i(137, e));
        if (n.dangerouslySetInnerHTML != null) {
          if (n.children != null) throw Error(i(60));
          if (
            typeof n.dangerouslySetInnerHTML != "object" ||
            !("__html" in n.dangerouslySetInnerHTML)
          )
            throw Error(i(61));
        }
        if (n.style != null && typeof n.style != "object") throw Error(i(62));
      }
    }
    function Ma(e, n) {
      if (e.indexOf("-") === -1) return typeof n.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var La = null;
    function Da(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Na = null,
      Lr = null,
      Dr = null;
    function hf(e) {
      if ((e = Ui(e))) {
        if (typeof Na != "function") throw Error(i(280));
        var n = e.stateNode;
        n && ((n = oo(n)), Na(e.stateNode, e.type, n));
      }
    }
    function mf(e) {
      Lr ? (Dr ? Dr.push(e) : (Dr = [e])) : (Lr = e);
    }
    function gf() {
      if (Lr) {
        var e = Lr,
          n = Dr;
        if (((Dr = Lr = null), hf(e), n))
          for (e = 0; e < n.length; e++) hf(n[e]);
      }
    }
    function yf(e, n) {
      return e(n);
    }
    function vf() {}
    var ba = !1;
    function wf(e, n, s) {
      if (ba) return e(n, s);
      ba = !0;
      try {
        return yf(e, n, s);
      } finally {
        (ba = !1), (Lr !== null || Dr !== null) && (vf(), gf());
      }
    }
    function xi(e, n) {
      var s = e.stateNode;
      if (s === null) return null;
      var a = oo(s);
      if (a === null) return null;
      s = a[n];
      e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) ||
            ((e = e.type),
            (a = !(
              e === "button" ||
              e === "input" ||
              e === "select" ||
              e === "textarea"
            ))),
            (e = !a);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (s && typeof s != "function") throw Error(i(231, n, typeof s));
      return s;
    }
    var Fa = !1;
    if (p)
      try {
        var Ci = {};
        Object.defineProperty(Ci, "passive", {
          get: function () {
            Fa = !0;
          },
        }),
          window.addEventListener("test", Ci, Ci),
          window.removeEventListener("test", Ci, Ci);
      } catch {
        Fa = !1;
      }
    function Q1(e, n, s, a, u, d, g, x, C) {
      var L = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(s, L);
      } catch (_) {
        this.onError(_);
      }
    }
    var Ai = !1,
      Is = null,
      Vs = !1,
      Ba = null,
      H1 = {
        onError: function (e) {
          (Ai = !0), (Is = e);
        },
      };
    function $1(e, n, s, a, u, d, g, x, C) {
      (Ai = !1), (Is = null), Q1.apply(H1, arguments);
    }
    function W1(e, n, s, a, u, d, g, x, C) {
      if (($1.apply(this, arguments), Ai)) {
        if (Ai) {
          var L = Is;
          (Ai = !1), (Is = null);
        } else throw Error(i(198));
        Vs || ((Vs = !0), (Ba = L));
      }
    }
    function rr(e) {
      var n = e,
        s = e;
      if (e.alternate) for (; n.return; ) n = n.return;
      else {
        e = n;
        do (n = e), (n.flags & 4098) !== 0 && (s = n.return), (e = n.return);
        while (e);
      }
      return n.tag === 3 ? s : null;
    }
    function xf(e) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          (n === null &&
            ((e = e.alternate), e !== null && (n = e.memoizedState)),
          n !== null)
        )
          return n.dehydrated;
      }
      return null;
    }
    function Cf(e) {
      if (rr(e) !== e) throw Error(i(188));
    }
    function Z1(e) {
      var n = e.alternate;
      if (!n) {
        if (((n = rr(e)), n === null)) throw Error(i(188));
        return n !== e ? null : e;
      }
      for (var s = e, a = n; ; ) {
        var u = s.return;
        if (u === null) break;
        var d = u.alternate;
        if (d === null) {
          if (((a = u.return), a !== null)) {
            s = a;
            continue;
          }
          break;
        }
        if (u.child === d.child) {
          for (d = u.child; d; ) {
            if (d === s) return Cf(u), e;
            if (d === a) return Cf(u), n;
            d = d.sibling;
          }
          throw Error(i(188));
        }
        if (s.return !== a.return) (s = u), (a = d);
        else {
          for (var g = !1, x = u.child; x; ) {
            if (x === s) {
              (g = !0), (s = u), (a = d);
              break;
            }
            if (x === a) {
              (g = !0), (a = u), (s = d);
              break;
            }
            x = x.sibling;
          }
          if (!g) {
            for (x = d.child; x; ) {
              if (x === s) {
                (g = !0), (s = d), (a = u);
                break;
              }
              if (x === a) {
                (g = !0), (a = d), (s = u);
                break;
              }
              x = x.sibling;
            }
            if (!g) throw Error(i(189));
          }
        }
        if (s.alternate !== a) throw Error(i(190));
      }
      if (s.tag !== 3) throw Error(i(188));
      return s.stateNode.current === s ? e : n;
    }
    function Af(e) {
      return (e = Z1(e)), e !== null ? Sf(e) : null;
    }
    function Sf(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var n = Sf(e);
        if (n !== null) return n;
        e = e.sibling;
      }
      return null;
    }
    var Ef = r.unstable_scheduleCallback,
      Tf = r.unstable_cancelCallback,
      K1 = r.unstable_shouldYield,
      G1 = r.unstable_requestPaint,
      Ue = r.unstable_now,
      q1 = r.unstable_getCurrentPriorityLevel,
      Ia = r.unstable_ImmediatePriority,
      Pf = r.unstable_UserBlockingPriority,
      _s = r.unstable_NormalPriority,
      Y1 = r.unstable_LowPriority,
      kf = r.unstable_IdlePriority,
      Us = null,
      en = null;
    function X1(e) {
      if (en && typeof en.onCommitFiberRoot == "function")
        try {
          en.onCommitFiberRoot(Us, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
    }
    var Ht = Math.clz32 ? Math.clz32 : tg,
      J1 = Math.log,
      eg = Math.LN2;
    function tg(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((J1(e) / eg) | 0)) | 0;
    }
    var zs = 64,
      Qs = 4194304;
    function Si(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Hs(e, n) {
      var s = e.pendingLanes;
      if (s === 0) return 0;
      var a = 0,
        u = e.suspendedLanes,
        d = e.pingedLanes,
        g = s & 268435455;
      if (g !== 0) {
        var x = g & ~u;
        x !== 0 ? (a = Si(x)) : ((d &= g), d !== 0 && (a = Si(d)));
      } else (g = s & ~u), g !== 0 ? (a = Si(g)) : d !== 0 && (a = Si(d));
      if (a === 0) return 0;
      if (
        n !== 0 &&
        n !== a &&
        (n & u) === 0 &&
        ((u = a & -a),
        (d = n & -n),
        u >= d || (u === 16 && (d & 4194240) !== 0))
      )
        return n;
      if (((a & 4) !== 0 && (a |= s & 16), (n = e.entangledLanes), n !== 0))
        for (e = e.entanglements, n &= a; 0 < n; )
          (s = 31 - Ht(n)), (u = 1 << s), (a |= e[s]), (n &= ~u);
      return a;
    }
    function ng(e, n) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return n + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function rg(e, n) {
      for (
        var s = e.suspendedLanes,
          a = e.pingedLanes,
          u = e.expirationTimes,
          d = e.pendingLanes;
        0 < d;

      ) {
        var g = 31 - Ht(d),
          x = 1 << g,
          C = u[g];
        C === -1
          ? ((x & s) === 0 || (x & a) !== 0) && (u[g] = ng(x, n))
          : C <= n && (e.expiredLanes |= x),
          (d &= ~x);
      }
    }
    function Va(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
      );
    }
    function Rf() {
      var e = zs;
      return (zs <<= 1), (zs & 4194240) === 0 && (zs = 64), e;
    }
    function _a(e) {
      for (var n = [], s = 0; 31 > s; s++) n.push(e);
      return n;
    }
    function Ei(e, n, s) {
      (e.pendingLanes |= n),
        n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (n = 31 - Ht(n)),
        (e[n] = s);
    }
    function ig(e, n) {
      var s = e.pendingLanes & ~n;
      (e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= n),
        (e.mutableReadLanes &= n),
        (e.entangledLanes &= n),
        (n = e.entanglements);
      var a = e.eventTimes;
      for (e = e.expirationTimes; 0 < s; ) {
        var u = 31 - Ht(s),
          d = 1 << u;
        (n[u] = 0), (a[u] = -1), (e[u] = -1), (s &= ~d);
      }
    }
    function Ua(e, n) {
      var s = (e.entangledLanes |= n);
      for (e = e.entanglements; s; ) {
        var a = 31 - Ht(s),
          u = 1 << a;
        (u & n) | (e[a] & n) && (e[a] |= n), (s &= ~u);
      }
    }
    var Te = 0;
    function jf(e) {
      return (
        (e &= -e),
        1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
      );
    }
    var Of,
      za,
      Mf,
      Lf,
      Df,
      Qa = !1,
      $s = [],
      jn = null,
      On = null,
      Mn = null,
      Ti = new Map(),
      Pi = new Map(),
      Ln = [],
      sg =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function Nf(e, n) {
      switch (e) {
        case "focusin":
        case "focusout":
          jn = null;
          break;
        case "dragenter":
        case "dragleave":
          On = null;
          break;
        case "mouseover":
        case "mouseout":
          Mn = null;
          break;
        case "pointerover":
        case "pointerout":
          Ti.delete(n.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pi.delete(n.pointerId);
      }
    }
    function ki(e, n, s, a, u, d) {
      return e === null || e.nativeEvent !== d
        ? ((e = {
            blockedOn: n,
            domEventName: s,
            eventSystemFlags: a,
            nativeEvent: d,
            targetContainers: [u],
          }),
          n !== null && ((n = Ui(n)), n !== null && za(n)),
          e)
        : ((e.eventSystemFlags |= a),
          (n = e.targetContainers),
          u !== null && n.indexOf(u) === -1 && n.push(u),
          e);
    }
    function og(e, n, s, a, u) {
      switch (n) {
        case "focusin":
          return (jn = ki(jn, e, n, s, a, u)), !0;
        case "dragenter":
          return (On = ki(On, e, n, s, a, u)), !0;
        case "mouseover":
          return (Mn = ki(Mn, e, n, s, a, u)), !0;
        case "pointerover":
          var d = u.pointerId;
          return Ti.set(d, ki(Ti.get(d) || null, e, n, s, a, u)), !0;
        case "gotpointercapture":
          return (
            (d = u.pointerId),
            Pi.set(d, ki(Pi.get(d) || null, e, n, s, a, u)),
            !0
          );
      }
      return !1;
    }
    function bf(e) {
      var n = ir(e.target);
      if (n !== null) {
        var s = rr(n);
        if (s !== null) {
          if (((n = s.tag), n === 13)) {
            if (((n = xf(s)), n !== null)) {
              (e.blockedOn = n),
                Df(e.priority, function () {
                  Mf(s);
                });
              return;
            }
          } else if (
            n === 3 &&
            s.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Ws(e) {
      if (e.blockedOn !== null) return !1;
      for (var n = e.targetContainers; 0 < n.length; ) {
        var s = $a(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (s === null) {
          s = e.nativeEvent;
          var a = new s.constructor(s.type, s);
          (La = a), s.target.dispatchEvent(a), (La = null);
        } else return (n = Ui(s)), n !== null && za(n), (e.blockedOn = s), !1;
        n.shift();
      }
      return !0;
    }
    function Ff(e, n, s) {
      Ws(e) && s.delete(n);
    }
    function ag() {
      (Qa = !1),
        jn !== null && Ws(jn) && (jn = null),
        On !== null && Ws(On) && (On = null),
        Mn !== null && Ws(Mn) && (Mn = null),
        Ti.forEach(Ff),
        Pi.forEach(Ff);
    }
    function Ri(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        Qa ||
          ((Qa = !0),
          r.unstable_scheduleCallback(r.unstable_NormalPriority, ag)));
    }
    function ji(e) {
      function n(u) {
        return Ri(u, e);
      }
      if (0 < $s.length) {
        Ri($s[0], e);
        for (var s = 1; s < $s.length; s++) {
          var a = $s[s];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      for (
        jn !== null && Ri(jn, e),
          On !== null && Ri(On, e),
          Mn !== null && Ri(Mn, e),
          Ti.forEach(n),
          Pi.forEach(n),
          s = 0;
        s < Ln.length;
        s++
      )
        (a = Ln[s]), a.blockedOn === e && (a.blockedOn = null);
      for (; 0 < Ln.length && ((s = Ln[0]), s.blockedOn === null); )
        bf(s), s.blockedOn === null && Ln.shift();
    }
    var Nr = J.ReactCurrentBatchConfig,
      Zs = !0;
    function lg(e, n, s, a) {
      var u = Te,
        d = Nr.transition;
      Nr.transition = null;
      try {
        (Te = 1), Ha(e, n, s, a);
      } finally {
        (Te = u), (Nr.transition = d);
      }
    }
    function ug(e, n, s, a) {
      var u = Te,
        d = Nr.transition;
      Nr.transition = null;
      try {
        (Te = 4), Ha(e, n, s, a);
      } finally {
        (Te = u), (Nr.transition = d);
      }
    }
    function Ha(e, n, s, a) {
      if (Zs) {
        var u = $a(e, n, s, a);
        if (u === null) ll(e, n, a, Ks, s), Nf(e, a);
        else if (og(u, e, n, s, a)) a.stopPropagation();
        else if ((Nf(e, a), n & 4 && -1 < sg.indexOf(e))) {
          for (; u !== null; ) {
            var d = Ui(u);
            if (
              (d !== null && Of(d),
              (d = $a(e, n, s, a)),
              d === null && ll(e, n, a, Ks, s),
              d === u)
            )
              break;
            u = d;
          }
          u !== null && a.stopPropagation();
        } else ll(e, n, a, null, s);
      }
    }
    var Ks = null;
    function $a(e, n, s, a) {
      if (((Ks = null), (e = Da(a)), (e = ir(e)), e !== null))
        if (((n = rr(e)), n === null)) e = null;
        else if (((s = n.tag), s === 13)) {
          if (((e = xf(n)), e !== null)) return e;
          e = null;
        } else if (s === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      return (Ks = e), null;
    }
    function Bf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (q1()) {
            case Ia:
              return 1;
            case Pf:
              return 4;
            case _s:
            case Y1:
              return 16;
            case kf:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Dn = null,
      Wa = null,
      Gs = null;
    function If() {
      if (Gs) return Gs;
      var e,
        n = Wa,
        s = n.length,
        a,
        u = "value" in Dn ? Dn.value : Dn.textContent,
        d = u.length;
      for (e = 0; e < s && n[e] === u[e]; e++);
      var g = s - e;
      for (a = 1; a <= g && n[s - a] === u[d - a]; a++);
      return (Gs = u.slice(e, 1 < a ? 1 - a : void 0));
    }
    function qs(e) {
      var n = e.keyCode;
      return (
        "charCode" in e
          ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
          : (e = n),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Ys() {
      return !0;
    }
    function Vf() {
      return !1;
    }
    function Tt(e) {
      function n(s, a, u, d, g) {
        (this._reactName = s),
          (this._targetInst = u),
          (this.type = a),
          (this.nativeEvent = d),
          (this.target = g),
          (this.currentTarget = null);
        for (var x in e)
          e.hasOwnProperty(x) && ((s = e[x]), (this[x] = s ? s(d) : d[x]));
        return (
          (this.isDefaultPrevented = (
            d.defaultPrevented != null
              ? d.defaultPrevented
              : d.returnValue === !1
          )
            ? Ys
            : Vf),
          (this.isPropagationStopped = Vf),
          this
        );
      }
      return (
        W(n.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var s = this.nativeEvent;
            s &&
              (s.preventDefault
                ? s.preventDefault()
                : typeof s.returnValue != "unknown" && (s.returnValue = !1),
              (this.isDefaultPrevented = Ys));
          },
          stopPropagation: function () {
            var s = this.nativeEvent;
            s &&
              (s.stopPropagation
                ? s.stopPropagation()
                : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
              (this.isPropagationStopped = Ys));
          },
          persist: function () {},
          isPersistent: Ys,
        }),
        n
      );
    }
    var br = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Za = Tt(br),
      Oi = W({}, br, { view: 0, detail: 0 }),
      cg = Tt(Oi),
      Ka,
      Ga,
      Mi,
      Xs = W({}, Oi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ya,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== Mi &&
                (Mi && e.type === "mousemove"
                  ? ((Ka = e.screenX - Mi.screenX),
                    (Ga = e.screenY - Mi.screenY))
                  : (Ga = Ka = 0),
                (Mi = e)),
              Ka);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : Ga;
        },
      }),
      _f = Tt(Xs),
      fg = W({}, Xs, { dataTransfer: 0 }),
      dg = Tt(fg),
      pg = W({}, Oi, { relatedTarget: 0 }),
      qa = Tt(pg),
      hg = W({}, br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      mg = Tt(hg),
      gg = W({}, br, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      yg = Tt(gg),
      vg = W({}, br, { data: 0 }),
      Uf = Tt(vg),
      wg = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      xg = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      Cg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function Ag(e) {
      var n = this.nativeEvent;
      return n.getModifierState
        ? n.getModifierState(e)
        : (e = Cg[e])
        ? !!n[e]
        : !1;
    }
    function Ya() {
      return Ag;
    }
    var Sg = W({}, Oi, {
        key: function (e) {
          if (e.key) {
            var n = wg[e.key] || e.key;
            if (n !== "Unidentified") return n;
          }
          return e.type === "keypress"
            ? ((e = qs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
            ? xg[e.keyCode] || "Unidentified"
            : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ya,
        charCode: function (e) {
          return e.type === "keypress" ? qs(e) : 0;
        },
        keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === "keypress"
            ? qs(e)
            : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
        },
      }),
      Eg = Tt(Sg),
      Tg = W({}, Xs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      zf = Tt(Tg),
      Pg = W({}, Oi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ya,
      }),
      kg = Tt(Pg),
      Rg = W({}, br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      jg = Tt(Rg),
      Og = W({}, Xs, {
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      Mg = Tt(Og),
      Lg = [9, 13, 27, 32],
      Xa = p && "CompositionEvent" in window,
      Li = null;
    p && "documentMode" in document && (Li = document.documentMode);
    var Dg = p && "TextEvent" in window && !Li,
      Qf = p && (!Xa || (Li && 8 < Li && 11 >= Li)),
      Hf = " ",
      $f = !1;
    function Wf(e, n) {
      switch (e) {
        case "keyup":
          return Lg.indexOf(n.keyCode) !== -1;
        case "keydown":
          return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Zf(e) {
      return (
        (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
      );
    }
    var Fr = !1;
    function Ng(e, n) {
      switch (e) {
        case "compositionend":
          return Zf(n);
        case "keypress":
          return n.which !== 32 ? null : (($f = !0), Hf);
        case "textInput":
          return (e = n.data), e === Hf && $f ? null : e;
        default:
          return null;
      }
    }
    function bg(e, n) {
      if (Fr)
        return e === "compositionend" || (!Xa && Wf(e, n))
          ? ((e = If()), (Gs = Wa = Dn = null), (Fr = !1), e)
          : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(n.ctrlKey || n.altKey || n.metaKey) ||
            (n.ctrlKey && n.altKey)
          ) {
            if (n.char && 1 < n.char.length) return n.char;
            if (n.which) return String.fromCharCode(n.which);
          }
          return null;
        case "compositionend":
          return Qf && n.locale !== "ko" ? null : n.data;
        default:
          return null;
      }
    }
    var Fg = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Kf(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return n === "input" ? !!Fg[e.type] : n === "textarea";
    }
    function Gf(e, n, s, a) {
      mf(a),
        (n = ro(n, "onChange")),
        0 < n.length &&
          ((s = new Za("onChange", "change", null, s, a)),
          e.push({ event: s, listeners: n }));
    }
    var Di = null,
      Ni = null;
    function Bg(e) {
      pd(e, 0);
    }
    function Js(e) {
      var n = Ur(e);
      if (Ds(n)) return e;
    }
    function Ig(e, n) {
      if (e === "change") return n;
    }
    var qf = !1;
    if (p) {
      var Ja;
      if (p) {
        var el = "oninput" in document;
        if (!el) {
          var Yf = document.createElement("div");
          Yf.setAttribute("oninput", "return;"),
            (el = typeof Yf.oninput == "function");
        }
        Ja = el;
      } else Ja = !1;
      qf = Ja && (!document.documentMode || 9 < document.documentMode);
    }
    function Xf() {
      Di && (Di.detachEvent("onpropertychange", Jf), (Ni = Di = null));
    }
    function Jf(e) {
      if (e.propertyName === "value" && Js(Ni)) {
        var n = [];
        Gf(n, Ni, e, Da(e)), wf(Bg, n);
      }
    }
    function Vg(e, n, s) {
      e === "focusin"
        ? (Xf(), (Di = n), (Ni = s), Di.attachEvent("onpropertychange", Jf))
        : e === "focusout" && Xf();
    }
    function _g(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Js(Ni);
    }
    function Ug(e, n) {
      if (e === "click") return Js(n);
    }
    function zg(e, n) {
      if (e === "input" || e === "change") return Js(n);
    }
    function Qg(e, n) {
      return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
    }
    var $t = typeof Object.is == "function" ? Object.is : Qg;
    function bi(e, n) {
      if ($t(e, n)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof n != "object" ||
        n === null
      )
        return !1;
      var s = Object.keys(e),
        a = Object.keys(n);
      if (s.length !== a.length) return !1;
      for (a = 0; a < s.length; a++) {
        var u = s[a];
        if (!h.call(n, u) || !$t(e[u], n[u])) return !1;
      }
      return !0;
    }
    function ed(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function td(e, n) {
      var s = ed(e);
      e = 0;
      for (var a; s; ) {
        if (s.nodeType === 3) {
          if (((a = e + s.textContent.length), e <= n && a >= n))
            return { node: s, offset: n - e };
          e = a;
        }
        e: {
          for (; s; ) {
            if (s.nextSibling) {
              s = s.nextSibling;
              break e;
            }
            s = s.parentNode;
          }
          s = void 0;
        }
        s = ed(s);
      }
    }
    function nd(e, n) {
      return e && n
        ? e === n
          ? !0
          : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
          ? nd(e, n.parentNode)
          : "contains" in e
          ? e.contains(n)
          : e.compareDocumentPosition
          ? !!(e.compareDocumentPosition(n) & 16)
          : !1
        : !1;
    }
    function rd() {
      for (var e = window, n = er(); n instanceof e.HTMLIFrameElement; ) {
        try {
          var s = typeof n.contentWindow.location.href == "string";
        } catch {
          s = !1;
        }
        if (s) e = n.contentWindow;
        else break;
        n = er(e.document);
      }
      return n;
    }
    function tl(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        n &&
        ((n === "input" &&
          (e.type === "text" ||
            e.type === "search" ||
            e.type === "tel" ||
            e.type === "url" ||
            e.type === "password")) ||
          n === "textarea" ||
          e.contentEditable === "true")
      );
    }
    function Hg(e) {
      var n = rd(),
        s = e.focusedElem,
        a = e.selectionRange;
      if (
        n !== s &&
        s &&
        s.ownerDocument &&
        nd(s.ownerDocument.documentElement, s)
      ) {
        if (a !== null && tl(s)) {
          if (
            ((n = a.start),
            (e = a.end),
            e === void 0 && (e = n),
            "selectionStart" in s)
          )
            (s.selectionStart = n),
              (s.selectionEnd = Math.min(e, s.value.length));
          else if (
            ((e =
              ((n = s.ownerDocument || document) && n.defaultView) || window),
            e.getSelection)
          ) {
            e = e.getSelection();
            var u = s.textContent.length,
              d = Math.min(a.start, u);
            (a = a.end === void 0 ? d : Math.min(a.end, u)),
              !e.extend && d > a && ((u = a), (a = d), (d = u)),
              (u = td(s, d));
            var g = td(s, a);
            u &&
              g &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== u.node ||
                e.anchorOffset !== u.offset ||
                e.focusNode !== g.node ||
                e.focusOffset !== g.offset) &&
              ((n = n.createRange()),
              n.setStart(u.node, u.offset),
              e.removeAllRanges(),
              d > a
                ? (e.addRange(n), e.extend(g.node, g.offset))
                : (n.setEnd(g.node, g.offset), e.addRange(n)));
          }
        }
        for (n = [], e = s; (e = e.parentNode); )
          e.nodeType === 1 &&
            n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
          typeof s.focus == "function" && s.focus(), s = 0;
          s < n.length;
          s++
        )
          (e = n[s]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top);
      }
    }
    var $g = p && "documentMode" in document && 11 >= document.documentMode,
      Br = null,
      nl = null,
      Fi = null,
      rl = !1;
    function id(e, n, s) {
      var a =
        s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
      rl ||
        Br == null ||
        Br !== er(a) ||
        ((a = Br),
        "selectionStart" in a && tl(a)
          ? (a = { start: a.selectionStart, end: a.selectionEnd })
          : ((a = (
              (a.ownerDocument && a.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (a = {
              anchorNode: a.anchorNode,
              anchorOffset: a.anchorOffset,
              focusNode: a.focusNode,
              focusOffset: a.focusOffset,
            })),
        (Fi && bi(Fi, a)) ||
          ((Fi = a),
          (a = ro(nl, "onSelect")),
          0 < a.length &&
            ((n = new Za("onSelect", "select", null, n, s)),
            e.push({ event: n, listeners: a }),
            (n.target = Br))));
    }
    function eo(e, n) {
      var s = {};
      return (
        (s[e.toLowerCase()] = n.toLowerCase()),
        (s["Webkit" + e] = "webkit" + n),
        (s["Moz" + e] = "moz" + n),
        s
      );
    }
    var Ir = {
        animationend: eo("Animation", "AnimationEnd"),
        animationiteration: eo("Animation", "AnimationIteration"),
        animationstart: eo("Animation", "AnimationStart"),
        transitionend: eo("Transition", "TransitionEnd"),
      },
      il = {},
      sd = {};
    p &&
      ((sd = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Ir.animationend.animation,
        delete Ir.animationiteration.animation,
        delete Ir.animationstart.animation),
      "TransitionEvent" in window || delete Ir.transitionend.transition);
    function to(e) {
      if (il[e]) return il[e];
      if (!Ir[e]) return e;
      var n = Ir[e],
        s;
      for (s in n) if (n.hasOwnProperty(s) && s in sd) return (il[e] = n[s]);
      return e;
    }
    var od = to("animationend"),
      ad = to("animationiteration"),
      ld = to("animationstart"),
      ud = to("transitionend"),
      cd = new Map(),
      fd =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function Nn(e, n) {
      cd.set(e, n), f(n, [e]);
    }
    for (var sl = 0; sl < fd.length; sl++) {
      var ol = fd[sl],
        Wg = ol.toLowerCase(),
        Zg = ol[0].toUpperCase() + ol.slice(1);
      Nn(Wg, "on" + Zg);
    }
    Nn(od, "onAnimationEnd"),
      Nn(ad, "onAnimationIteration"),
      Nn(ld, "onAnimationStart"),
      Nn("dblclick", "onDoubleClick"),
      Nn("focusin", "onFocus"),
      Nn("focusout", "onBlur"),
      Nn(ud, "onTransitionEnd"),
      c("onMouseEnter", ["mouseout", "mouseover"]),
      c("onMouseLeave", ["mouseout", "mouseover"]),
      c("onPointerEnter", ["pointerout", "pointerover"]),
      c("onPointerLeave", ["pointerout", "pointerover"]),
      f(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " "
        )
      ),
      f(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      ),
      f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      f(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" ")
      ),
      f(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      ),
      f(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      );
    var Bi =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      Kg = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Bi)
      );
    function dd(e, n, s) {
      var a = e.type || "unknown-event";
      (e.currentTarget = s), W1(a, n, void 0, e), (e.currentTarget = null);
    }
    function pd(e, n) {
      n = (n & 4) !== 0;
      for (var s = 0; s < e.length; s++) {
        var a = e[s],
          u = a.event;
        a = a.listeners;
        e: {
          var d = void 0;
          if (n)
            for (var g = a.length - 1; 0 <= g; g--) {
              var x = a[g],
                C = x.instance,
                L = x.currentTarget;
              if (((x = x.listener), C !== d && u.isPropagationStopped()))
                break e;
              dd(u, x, L), (d = C);
            }
          else
            for (g = 0; g < a.length; g++) {
              if (
                ((x = a[g]),
                (C = x.instance),
                (L = x.currentTarget),
                (x = x.listener),
                C !== d && u.isPropagationStopped())
              )
                break e;
              dd(u, x, L), (d = C);
            }
        }
      }
      if (Vs) throw ((e = Ba), (Vs = !1), (Ba = null), e);
    }
    function Le(e, n) {
      var s = n[hl];
      s === void 0 && (s = n[hl] = new Set());
      var a = e + "__bubble";
      s.has(a) || (hd(n, e, 2, !1), s.add(a));
    }
    function al(e, n, s) {
      var a = 0;
      n && (a |= 4), hd(s, e, a, n);
    }
    var no = "_reactListening" + Math.random().toString(36).slice(2);
    function Ii(e) {
      if (!e[no]) {
        (e[no] = !0),
          o.forEach(function (s) {
            s !== "selectionchange" &&
              (Kg.has(s) || al(s, !1, e), al(s, !0, e));
          });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[no] || ((n[no] = !0), al("selectionchange", !1, n));
      }
    }
    function hd(e, n, s, a) {
      switch (Bf(n)) {
        case 1:
          var u = lg;
          break;
        case 4:
          u = ug;
          break;
        default:
          u = Ha;
      }
      (s = u.bind(null, n, s, e)),
        (u = void 0),
        !Fa ||
          (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
          (u = !0),
        a
          ? u !== void 0
            ? e.addEventListener(n, s, { capture: !0, passive: u })
            : e.addEventListener(n, s, !0)
          : u !== void 0
          ? e.addEventListener(n, s, { passive: u })
          : e.addEventListener(n, s, !1);
    }
    function ll(e, n, s, a, u) {
      var d = a;
      if ((n & 1) === 0 && (n & 2) === 0 && a !== null)
        e: for (;;) {
          if (a === null) return;
          var g = a.tag;
          if (g === 3 || g === 4) {
            var x = a.stateNode.containerInfo;
            if (x === u || (x.nodeType === 8 && x.parentNode === u)) break;
            if (g === 4)
              for (g = a.return; g !== null; ) {
                var C = g.tag;
                if (
                  (C === 3 || C === 4) &&
                  ((C = g.stateNode.containerInfo),
                  C === u || (C.nodeType === 8 && C.parentNode === u))
                )
                  return;
                g = g.return;
              }
            for (; x !== null; ) {
              if (((g = ir(x)), g === null)) return;
              if (((C = g.tag), C === 5 || C === 6)) {
                a = d = g;
                continue e;
              }
              x = x.parentNode;
            }
          }
          a = a.return;
        }
      wf(function () {
        var L = d,
          _ = Da(s),
          U = [];
        e: {
          var B = cd.get(e);
          if (B !== void 0) {
            var K = Za,
              Y = e;
            switch (e) {
              case "keypress":
                if (qs(s) === 0) break e;
              case "keydown":
              case "keyup":
                K = Eg;
                break;
              case "focusin":
                (Y = "focus"), (K = qa);
                break;
              case "focusout":
                (Y = "blur"), (K = qa);
                break;
              case "beforeblur":
              case "afterblur":
                K = qa;
                break;
              case "click":
                if (s.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                K = _f;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                K = dg;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                K = kg;
                break;
              case od:
              case ad:
              case ld:
                K = mg;
                break;
              case ud:
                K = jg;
                break;
              case "scroll":
                K = cg;
                break;
              case "wheel":
                K = Mg;
                break;
              case "copy":
              case "cut":
              case "paste":
                K = yg;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                K = zf;
            }
            var X = (n & 4) !== 0,
              ze = !X && e === "scroll",
              j = X ? (B !== null ? B + "Capture" : null) : B;
            X = [];
            for (var A = L, O; A !== null; ) {
              O = A;
              var Q = O.stateNode;
              if (
                (O.tag === 5 &&
                  Q !== null &&
                  ((O = Q),
                  j !== null &&
                    ((Q = xi(A, j)), Q != null && X.push(Vi(A, Q, O)))),
                ze)
              )
                break;
              A = A.return;
            }
            0 < X.length &&
              ((B = new K(B, Y, null, s, _)),
              U.push({ event: B, listeners: X }));
          }
        }
        if ((n & 7) === 0) {
          e: {
            if (
              ((B = e === "mouseover" || e === "pointerover"),
              (K = e === "mouseout" || e === "pointerout"),
              B &&
                s !== La &&
                (Y = s.relatedTarget || s.fromElement) &&
                (ir(Y) || Y[dn]))
            )
              break e;
            if (
              (K || B) &&
              ((B =
                _.window === _
                  ? _
                  : (B = _.ownerDocument)
                  ? B.defaultView || B.parentWindow
                  : window),
              K
                ? ((Y = s.relatedTarget || s.toElement),
                  (K = L),
                  (Y = Y ? ir(Y) : null),
                  Y !== null &&
                    ((ze = rr(Y)), Y !== ze || (Y.tag !== 5 && Y.tag !== 6)) &&
                    (Y = null))
                : ((K = null), (Y = L)),
              K !== Y)
            ) {
              if (
                ((X = _f),
                (Q = "onMouseLeave"),
                (j = "onMouseEnter"),
                (A = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                  ((X = zf),
                  (Q = "onPointerLeave"),
                  (j = "onPointerEnter"),
                  (A = "pointer")),
                (ze = K == null ? B : Ur(K)),
                (O = Y == null ? B : Ur(Y)),
                (B = new X(Q, A + "leave", K, s, _)),
                (B.target = ze),
                (B.relatedTarget = O),
                (Q = null),
                ir(_) === L &&
                  ((X = new X(j, A + "enter", Y, s, _)),
                  (X.target = O),
                  (X.relatedTarget = ze),
                  (Q = X)),
                (ze = Q),
                K && Y)
              )
                t: {
                  for (X = K, j = Y, A = 0, O = X; O; O = Vr(O)) A++;
                  for (O = 0, Q = j; Q; Q = Vr(Q)) O++;
                  for (; 0 < A - O; ) (X = Vr(X)), A--;
                  for (; 0 < O - A; ) (j = Vr(j)), O--;
                  for (; A--; ) {
                    if (X === j || (j !== null && X === j.alternate)) break t;
                    (X = Vr(X)), (j = Vr(j));
                  }
                  X = null;
                }
              else X = null;
              K !== null && md(U, B, K, X, !1),
                Y !== null && ze !== null && md(U, ze, Y, X, !0);
            }
          }
          e: {
            if (
              ((B = L ? Ur(L) : window),
              (K = B.nodeName && B.nodeName.toLowerCase()),
              K === "select" || (K === "input" && B.type === "file"))
            )
              var ee = Ig;
            else if (Kf(B))
              if (qf) ee = zg;
              else {
                ee = _g;
                var se = Vg;
              }
            else
              (K = B.nodeName) &&
                K.toLowerCase() === "input" &&
                (B.type === "checkbox" || B.type === "radio") &&
                (ee = Ug);
            if (ee && (ee = ee(e, L))) {
              Gf(U, ee, s, _);
              break e;
            }
            se && se(e, B, L),
              e === "focusout" &&
                (se = B._wrapperState) &&
                se.controlled &&
                B.type === "number" &&
                tr(B, "number", B.value);
          }
          switch (((se = L ? Ur(L) : window), e)) {
            case "focusin":
              (Kf(se) || se.contentEditable === "true") &&
                ((Br = se), (nl = L), (Fi = null));
              break;
            case "focusout":
              Fi = nl = Br = null;
              break;
            case "mousedown":
              rl = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (rl = !1), id(U, s, _);
              break;
            case "selectionchange":
              if ($g) break;
            case "keydown":
            case "keyup":
              id(U, s, _);
          }
          var oe;
          if (Xa)
            e: {
              switch (e) {
                case "compositionstart":
                  var le = "onCompositionStart";
                  break e;
                case "compositionend":
                  le = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  le = "onCompositionUpdate";
                  break e;
              }
              le = void 0;
            }
          else
            Fr
              ? Wf(e, s) && (le = "onCompositionEnd")
              : e === "keydown" &&
                s.keyCode === 229 &&
                (le = "onCompositionStart");
          le &&
            (Qf &&
              s.locale !== "ko" &&
              (Fr || le !== "onCompositionStart"
                ? le === "onCompositionEnd" && Fr && (oe = If())
                : ((Dn = _),
                  (Wa = "value" in Dn ? Dn.value : Dn.textContent),
                  (Fr = !0))),
            (se = ro(L, le)),
            0 < se.length &&
              ((le = new Uf(le, e, null, s, _)),
              U.push({ event: le, listeners: se }),
              oe
                ? (le.data = oe)
                : ((oe = Zf(s)), oe !== null && (le.data = oe)))),
            (oe = Dg ? Ng(e, s) : bg(e, s)) &&
              ((L = ro(L, "onBeforeInput")),
              0 < L.length &&
                ((_ = new Uf("onBeforeInput", "beforeinput", null, s, _)),
                U.push({ event: _, listeners: L }),
                (_.data = oe)));
        }
        pd(U, n);
      });
    }
    function Vi(e, n, s) {
      return { instance: e, listener: n, currentTarget: s };
    }
    function ro(e, n) {
      for (var s = n + "Capture", a = []; e !== null; ) {
        var u = e,
          d = u.stateNode;
        u.tag === 5 &&
          d !== null &&
          ((u = d),
          (d = xi(e, s)),
          d != null && a.unshift(Vi(e, d, u)),
          (d = xi(e, n)),
          d != null && a.push(Vi(e, d, u))),
          (e = e.return);
      }
      return a;
    }
    function Vr(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function md(e, n, s, a, u) {
      for (var d = n._reactName, g = []; s !== null && s !== a; ) {
        var x = s,
          C = x.alternate,
          L = x.stateNode;
        if (C !== null && C === a) break;
        x.tag === 5 &&
          L !== null &&
          ((x = L),
          u
            ? ((C = xi(s, d)), C != null && g.unshift(Vi(s, C, x)))
            : u || ((C = xi(s, d)), C != null && g.push(Vi(s, C, x)))),
          (s = s.return);
      }
      g.length !== 0 && e.push({ event: n, listeners: g });
    }
    var Gg = /\r\n?/g,
      qg = /\u0000|\uFFFD/g;
    function gd(e) {
      return (typeof e == "string" ? e : "" + e)
        .replace(
          Gg,
          `
`
        )
        .replace(qg, "");
    }
    function io(e, n, s) {
      if (((n = gd(n)), gd(e) !== n && s)) throw Error(i(425));
    }
    function so() {}
    var ul = null,
      cl = null;
    function fl(e, n) {
      return (
        e === "textarea" ||
        e === "noscript" ||
        typeof n.children == "string" ||
        typeof n.children == "number" ||
        (typeof n.dangerouslySetInnerHTML == "object" &&
          n.dangerouslySetInnerHTML !== null &&
          n.dangerouslySetInnerHTML.__html != null)
      );
    }
    var dl = typeof setTimeout == "function" ? setTimeout : void 0,
      Yg = typeof clearTimeout == "function" ? clearTimeout : void 0,
      yd = typeof Promise == "function" ? Promise : void 0,
      Xg =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof yd < "u"
          ? function (e) {
              return yd.resolve(null).then(e).catch(Jg);
            }
          : dl;
    function Jg(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function pl(e, n) {
      var s = n,
        a = 0;
      do {
        var u = s.nextSibling;
        if ((e.removeChild(s), u && u.nodeType === 8))
          if (((s = u.data), s === "/$")) {
            if (a === 0) {
              e.removeChild(u), ji(n);
              return;
            }
            a--;
          } else (s !== "$" && s !== "$?" && s !== "$!") || a++;
        s = u;
      } while (s);
      ji(n);
    }
    function bn(e) {
      for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3) break;
        if (n === 8) {
          if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
          if (n === "/$") return null;
        }
      }
      return e;
    }
    function vd(e) {
      e = e.previousSibling;
      for (var n = 0; e; ) {
        if (e.nodeType === 8) {
          var s = e.data;
          if (s === "$" || s === "$!" || s === "$?") {
            if (n === 0) return e;
            n--;
          } else s === "/$" && n++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var _r = Math.random().toString(36).slice(2),
      tn = "__reactFiber$" + _r,
      _i = "__reactProps$" + _r,
      dn = "__reactContainer$" + _r,
      hl = "__reactEvents$" + _r,
      ey = "__reactListeners$" + _r,
      ty = "__reactHandles$" + _r;
    function ir(e) {
      var n = e[tn];
      if (n) return n;
      for (var s = e.parentNode; s; ) {
        if ((n = s[dn] || s[tn])) {
          if (
            ((s = n.alternate),
            n.child !== null || (s !== null && s.child !== null))
          )
            for (e = vd(e); e !== null; ) {
              if ((s = e[tn])) return s;
              e = vd(e);
            }
          return n;
        }
        (e = s), (s = e.parentNode);
      }
      return null;
    }
    function Ui(e) {
      return (
        (e = e[tn] || e[dn]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function Ur(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(i(33));
    }
    function oo(e) {
      return e[_i] || null;
    }
    var ml = [],
      zr = -1;
    function Fn(e) {
      return { current: e };
    }
    function De(e) {
      0 > zr || ((e.current = ml[zr]), (ml[zr] = null), zr--);
    }
    function Re(e, n) {
      zr++, (ml[zr] = e.current), (e.current = n);
    }
    var Bn = {},
      ot = Fn(Bn),
      vt = Fn(!1),
      sr = Bn;
    function Qr(e, n) {
      var s = e.type.contextTypes;
      if (!s) return Bn;
      var a = e.stateNode;
      if (a && a.__reactInternalMemoizedUnmaskedChildContext === n)
        return a.__reactInternalMemoizedMaskedChildContext;
      var u = {},
        d;
      for (d in s) u[d] = n[d];
      return (
        a &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = n),
          (e.__reactInternalMemoizedMaskedChildContext = u)),
        u
      );
    }
    function wt(e) {
      return (e = e.childContextTypes), e != null;
    }
    function ao() {
      De(vt), De(ot);
    }
    function wd(e, n, s) {
      if (ot.current !== Bn) throw Error(i(168));
      Re(ot, n), Re(vt, s);
    }
    function xd(e, n, s) {
      var a = e.stateNode;
      if (((n = n.childContextTypes), typeof a.getChildContext != "function"))
        return s;
      a = a.getChildContext();
      for (var u in a)
        if (!(u in n)) throw Error(i(108, Se(e) || "Unknown", u));
      return W({}, s, a);
    }
    function lo(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          Bn),
        (sr = ot.current),
        Re(ot, e),
        Re(vt, vt.current),
        !0
      );
    }
    function Cd(e, n, s) {
      var a = e.stateNode;
      if (!a) throw Error(i(169));
      s
        ? ((e = xd(e, n, sr)),
          (a.__reactInternalMemoizedMergedChildContext = e),
          De(vt),
          De(ot),
          Re(ot, e))
        : De(vt),
        Re(vt, s);
    }
    var pn = null,
      uo = !1,
      gl = !1;
    function Ad(e) {
      pn === null ? (pn = [e]) : pn.push(e);
    }
    function ny(e) {
      (uo = !0), Ad(e);
    }
    function In() {
      if (!gl && pn !== null) {
        gl = !0;
        var e = 0,
          n = Te;
        try {
          var s = pn;
          for (Te = 1; e < s.length; e++) {
            var a = s[e];
            do a = a(!0);
            while (a !== null);
          }
          (pn = null), (uo = !1);
        } catch (u) {
          throw (pn !== null && (pn = pn.slice(e + 1)), Ef(Ia, In), u);
        } finally {
          (Te = n), (gl = !1);
        }
      }
      return null;
    }
    var Hr = [],
      $r = 0,
      co = null,
      fo = 0,
      bt = [],
      Ft = 0,
      or = null,
      hn = 1,
      mn = "";
    function ar(e, n) {
      (Hr[$r++] = fo), (Hr[$r++] = co), (co = e), (fo = n);
    }
    function Sd(e, n, s) {
      (bt[Ft++] = hn), (bt[Ft++] = mn), (bt[Ft++] = or), (or = e);
      var a = hn;
      e = mn;
      var u = 32 - Ht(a) - 1;
      (a &= ~(1 << u)), (s += 1);
      var d = 32 - Ht(n) + u;
      if (30 < d) {
        var g = u - (u % 5);
        (d = (a & ((1 << g) - 1)).toString(32)),
          (a >>= g),
          (u -= g),
          (hn = (1 << (32 - Ht(n) + u)) | (s << u) | a),
          (mn = d + e);
      } else (hn = (1 << d) | (s << u) | a), (mn = e);
    }
    function yl(e) {
      e.return !== null && (ar(e, 1), Sd(e, 1, 0));
    }
    function vl(e) {
      for (; e === co; )
        (co = Hr[--$r]), (Hr[$r] = null), (fo = Hr[--$r]), (Hr[$r] = null);
      for (; e === or; )
        (or = bt[--Ft]),
          (bt[Ft] = null),
          (mn = bt[--Ft]),
          (bt[Ft] = null),
          (hn = bt[--Ft]),
          (bt[Ft] = null);
    }
    var Pt = null,
      kt = null,
      be = !1,
      Wt = null;
    function Ed(e, n) {
      var s = _t(5, null, null, 0);
      (s.elementType = "DELETED"),
        (s.stateNode = n),
        (s.return = e),
        (n = e.deletions),
        n === null ? ((e.deletions = [s]), (e.flags |= 16)) : n.push(s);
    }
    function Td(e, n) {
      switch (e.tag) {
        case 5:
          var s = e.type;
          return (
            (n =
              n.nodeType !== 1 || s.toLowerCase() !== n.nodeName.toLowerCase()
                ? null
                : n),
            n !== null
              ? ((e.stateNode = n), (Pt = e), (kt = bn(n.firstChild)), !0)
              : !1
          );
        case 6:
          return (
            (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
            n !== null ? ((e.stateNode = n), (Pt = e), (kt = null), !0) : !1
          );
        case 13:
          return (
            (n = n.nodeType !== 8 ? null : n),
            n !== null
              ? ((s = or !== null ? { id: hn, overflow: mn } : null),
                (e.memoizedState = {
                  dehydrated: n,
                  treeContext: s,
                  retryLane: 1073741824,
                }),
                (s = _t(18, null, null, 0)),
                (s.stateNode = n),
                (s.return = e),
                (e.child = s),
                (Pt = e),
                (kt = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function wl(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function xl(e) {
      if (be) {
        var n = kt;
        if (n) {
          var s = n;
          if (!Td(e, n)) {
            if (wl(e)) throw Error(i(418));
            n = bn(s.nextSibling);
            var a = Pt;
            n && Td(e, n)
              ? Ed(a, s)
              : ((e.flags = (e.flags & -4097) | 2), (be = !1), (Pt = e));
          }
        } else {
          if (wl(e)) throw Error(i(418));
          (e.flags = (e.flags & -4097) | 2), (be = !1), (Pt = e);
        }
      }
    }
    function Pd(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

      )
        e = e.return;
      Pt = e;
    }
    function po(e) {
      if (e !== Pt) return !1;
      if (!be) return Pd(e), (be = !0), !1;
      var n;
      if (
        ((n = e.tag !== 3) &&
          !(n = e.tag !== 5) &&
          ((n = e.type),
          (n = n !== "head" && n !== "body" && !fl(e.type, e.memoizedProps))),
        n && (n = kt))
      ) {
        if (wl(e)) throw (kd(), Error(i(418)));
        for (; n; ) Ed(e, n), (n = bn(n.nextSibling));
      }
      if ((Pd(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(i(317));
        e: {
          for (e = e.nextSibling, n = 0; e; ) {
            if (e.nodeType === 8) {
              var s = e.data;
              if (s === "/$") {
                if (n === 0) {
                  kt = bn(e.nextSibling);
                  break e;
                }
                n--;
              } else (s !== "$" && s !== "$!" && s !== "$?") || n++;
            }
            e = e.nextSibling;
          }
          kt = null;
        }
      } else kt = Pt ? bn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function kd() {
      for (var e = kt; e; ) e = bn(e.nextSibling);
    }
    function Wr() {
      (kt = Pt = null), (be = !1);
    }
    function Cl(e) {
      Wt === null ? (Wt = [e]) : Wt.push(e);
    }
    var ry = J.ReactCurrentBatchConfig;
    function zi(e, n, s) {
      if (
        ((e = s.ref),
        e !== null && typeof e != "function" && typeof e != "object")
      ) {
        if (s._owner) {
          if (((s = s._owner), s)) {
            if (s.tag !== 1) throw Error(i(309));
            var a = s.stateNode;
          }
          if (!a) throw Error(i(147, e));
          var u = a,
            d = "" + e;
          return n !== null &&
            n.ref !== null &&
            typeof n.ref == "function" &&
            n.ref._stringRef === d
            ? n.ref
            : ((n = function (g) {
                var x = u.refs;
                g === null ? delete x[d] : (x[d] = g);
              }),
              (n._stringRef = d),
              n);
        }
        if (typeof e != "string") throw Error(i(284));
        if (!s._owner) throw Error(i(290, e));
      }
      return e;
    }
    function ho(e, n) {
      throw (
        ((e = Object.prototype.toString.call(n)),
        Error(
          i(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e
          )
        ))
      );
    }
    function Rd(e) {
      var n = e._init;
      return n(e._payload);
    }
    function jd(e) {
      function n(j, A) {
        if (e) {
          var O = j.deletions;
          O === null ? ((j.deletions = [A]), (j.flags |= 16)) : O.push(A);
        }
      }
      function s(j, A) {
        if (!e) return null;
        for (; A !== null; ) n(j, A), (A = A.sibling);
        return null;
      }
      function a(j, A) {
        for (j = new Map(); A !== null; )
          A.key !== null ? j.set(A.key, A) : j.set(A.index, A), (A = A.sibling);
        return j;
      }
      function u(j, A) {
        return (j = Wn(j, A)), (j.index = 0), (j.sibling = null), j;
      }
      function d(j, A, O) {
        return (
          (j.index = O),
          e
            ? ((O = j.alternate),
              O !== null
                ? ((O = O.index), O < A ? ((j.flags |= 2), A) : O)
                : ((j.flags |= 2), A))
            : ((j.flags |= 1048576), A)
        );
      }
      function g(j) {
        return e && j.alternate === null && (j.flags |= 2), j;
      }
      function x(j, A, O, Q) {
        return A === null || A.tag !== 6
          ? ((A = du(O, j.mode, Q)), (A.return = j), A)
          : ((A = u(A, O)), (A.return = j), A);
      }
      function C(j, A, O, Q) {
        var ee = O.type;
        return ee === Z
          ? _(j, A, O.props.children, Q, O.key)
          : A !== null &&
            (A.elementType === ee ||
              (typeof ee == "object" &&
                ee !== null &&
                ee.$$typeof === tt &&
                Rd(ee) === A.type))
          ? ((Q = u(A, O.props)), (Q.ref = zi(j, A, O)), (Q.return = j), Q)
          : ((Q = Io(O.type, O.key, O.props, null, j.mode, Q)),
            (Q.ref = zi(j, A, O)),
            (Q.return = j),
            Q);
      }
      function L(j, A, O, Q) {
        return A === null ||
          A.tag !== 4 ||
          A.stateNode.containerInfo !== O.containerInfo ||
          A.stateNode.implementation !== O.implementation
          ? ((A = pu(O, j.mode, Q)), (A.return = j), A)
          : ((A = u(A, O.children || [])), (A.return = j), A);
      }
      function _(j, A, O, Q, ee) {
        return A === null || A.tag !== 7
          ? ((A = mr(O, j.mode, Q, ee)), (A.return = j), A)
          : ((A = u(A, O)), (A.return = j), A);
      }
      function U(j, A, O) {
        if ((typeof A == "string" && A !== "") || typeof A == "number")
          return (A = du("" + A, j.mode, O)), (A.return = j), A;
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case M:
              return (
                (O = Io(A.type, A.key, A.props, null, j.mode, O)),
                (O.ref = zi(j, null, A)),
                (O.return = j),
                O
              );
            case z:
              return (A = pu(A, j.mode, O)), (A.return = j), A;
            case tt:
              var Q = A._init;
              return U(j, Q(A._payload), O);
          }
          if (nr(A) || re(A))
            return (A = mr(A, j.mode, O, null)), (A.return = j), A;
          ho(j, A);
        }
        return null;
      }
      function B(j, A, O, Q) {
        var ee = A !== null ? A.key : null;
        if ((typeof O == "string" && O !== "") || typeof O == "number")
          return ee !== null ? null : x(j, A, "" + O, Q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case M:
              return O.key === ee ? C(j, A, O, Q) : null;
            case z:
              return O.key === ee ? L(j, A, O, Q) : null;
            case tt:
              return (ee = O._init), B(j, A, ee(O._payload), Q);
          }
          if (nr(O) || re(O)) return ee !== null ? null : _(j, A, O, Q, null);
          ho(j, O);
        }
        return null;
      }
      function K(j, A, O, Q, ee) {
        if ((typeof Q == "string" && Q !== "") || typeof Q == "number")
          return (j = j.get(O) || null), x(A, j, "" + Q, ee);
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case M:
              return (
                (j = j.get(Q.key === null ? O : Q.key) || null), C(A, j, Q, ee)
              );
            case z:
              return (
                (j = j.get(Q.key === null ? O : Q.key) || null), L(A, j, Q, ee)
              );
            case tt:
              var se = Q._init;
              return K(j, A, O, se(Q._payload), ee);
          }
          if (nr(Q) || re(Q))
            return (j = j.get(O) || null), _(A, j, Q, ee, null);
          ho(A, Q);
        }
        return null;
      }
      function Y(j, A, O, Q) {
        for (
          var ee = null, se = null, oe = A, le = (A = 0), Xe = null;
          oe !== null && le < O.length;
          le++
        ) {
          oe.index > le ? ((Xe = oe), (oe = null)) : (Xe = oe.sibling);
          var Ce = B(j, oe, O[le], Q);
          if (Ce === null) {
            oe === null && (oe = Xe);
            break;
          }
          e && oe && Ce.alternate === null && n(j, oe),
            (A = d(Ce, A, le)),
            se === null ? (ee = Ce) : (se.sibling = Ce),
            (se = Ce),
            (oe = Xe);
        }
        if (le === O.length) return s(j, oe), be && ar(j, le), ee;
        if (oe === null) {
          for (; le < O.length; le++)
            (oe = U(j, O[le], Q)),
              oe !== null &&
                ((A = d(oe, A, le)),
                se === null ? (ee = oe) : (se.sibling = oe),
                (se = oe));
          return be && ar(j, le), ee;
        }
        for (oe = a(j, oe); le < O.length; le++)
          (Xe = K(oe, j, le, O[le], Q)),
            Xe !== null &&
              (e &&
                Xe.alternate !== null &&
                oe.delete(Xe.key === null ? le : Xe.key),
              (A = d(Xe, A, le)),
              se === null ? (ee = Xe) : (se.sibling = Xe),
              (se = Xe));
        return (
          e &&
            oe.forEach(function (Zn) {
              return n(j, Zn);
            }),
          be && ar(j, le),
          ee
        );
      }
      function X(j, A, O, Q) {
        var ee = re(O);
        if (typeof ee != "function") throw Error(i(150));
        if (((O = ee.call(O)), O == null)) throw Error(i(151));
        for (
          var se = (ee = null), oe = A, le = (A = 0), Xe = null, Ce = O.next();
          oe !== null && !Ce.done;
          le++, Ce = O.next()
        ) {
          oe.index > le ? ((Xe = oe), (oe = null)) : (Xe = oe.sibling);
          var Zn = B(j, oe, Ce.value, Q);
          if (Zn === null) {
            oe === null && (oe = Xe);
            break;
          }
          e && oe && Zn.alternate === null && n(j, oe),
            (A = d(Zn, A, le)),
            se === null ? (ee = Zn) : (se.sibling = Zn),
            (se = Zn),
            (oe = Xe);
        }
        if (Ce.done) return s(j, oe), be && ar(j, le), ee;
        if (oe === null) {
          for (; !Ce.done; le++, Ce = O.next())
            (Ce = U(j, Ce.value, Q)),
              Ce !== null &&
                ((A = d(Ce, A, le)),
                se === null ? (ee = Ce) : (se.sibling = Ce),
                (se = Ce));
          return be && ar(j, le), ee;
        }
        for (oe = a(j, oe); !Ce.done; le++, Ce = O.next())
          (Ce = K(oe, j, le, Ce.value, Q)),
            Ce !== null &&
              (e &&
                Ce.alternate !== null &&
                oe.delete(Ce.key === null ? le : Ce.key),
              (A = d(Ce, A, le)),
              se === null ? (ee = Ce) : (se.sibling = Ce),
              (se = Ce));
        return (
          e &&
            oe.forEach(function (Fy) {
              return n(j, Fy);
            }),
          be && ar(j, le),
          ee
        );
      }
      function ze(j, A, O, Q) {
        if (
          (typeof O == "object" &&
            O !== null &&
            O.type === Z &&
            O.key === null &&
            (O = O.props.children),
          typeof O == "object" && O !== null)
        ) {
          switch (O.$$typeof) {
            case M:
              e: {
                for (var ee = O.key, se = A; se !== null; ) {
                  if (se.key === ee) {
                    if (((ee = O.type), ee === Z)) {
                      if (se.tag === 7) {
                        s(j, se.sibling),
                          (A = u(se, O.props.children)),
                          (A.return = j),
                          (j = A);
                        break e;
                      }
                    } else if (
                      se.elementType === ee ||
                      (typeof ee == "object" &&
                        ee !== null &&
                        ee.$$typeof === tt &&
                        Rd(ee) === se.type)
                    ) {
                      s(j, se.sibling),
                        (A = u(se, O.props)),
                        (A.ref = zi(j, se, O)),
                        (A.return = j),
                        (j = A);
                      break e;
                    }
                    s(j, se);
                    break;
                  } else n(j, se);
                  se = se.sibling;
                }
                O.type === Z
                  ? ((A = mr(O.props.children, j.mode, Q, O.key)),
                    (A.return = j),
                    (j = A))
                  : ((Q = Io(O.type, O.key, O.props, null, j.mode, Q)),
                    (Q.ref = zi(j, A, O)),
                    (Q.return = j),
                    (j = Q));
              }
              return g(j);
            case z:
              e: {
                for (se = O.key; A !== null; ) {
                  if (A.key === se)
                    if (
                      A.tag === 4 &&
                      A.stateNode.containerInfo === O.containerInfo &&
                      A.stateNode.implementation === O.implementation
                    ) {
                      s(j, A.sibling),
                        (A = u(A, O.children || [])),
                        (A.return = j),
                        (j = A);
                      break e;
                    } else {
                      s(j, A);
                      break;
                    }
                  else n(j, A);
                  A = A.sibling;
                }
                (A = pu(O, j.mode, Q)), (A.return = j), (j = A);
              }
              return g(j);
            case tt:
              return (se = O._init), ze(j, A, se(O._payload), Q);
          }
          if (nr(O)) return Y(j, A, O, Q);
          if (re(O)) return X(j, A, O, Q);
          ho(j, O);
        }
        return (typeof O == "string" && O !== "") || typeof O == "number"
          ? ((O = "" + O),
            A !== null && A.tag === 6
              ? (s(j, A.sibling), (A = u(A, O)), (A.return = j), (j = A))
              : (s(j, A), (A = du(O, j.mode, Q)), (A.return = j), (j = A)),
            g(j))
          : s(j, A);
      }
      return ze;
    }
    var Zr = jd(!0),
      Od = jd(!1),
      mo = Fn(null),
      go = null,
      Kr = null,
      Al = null;
    function Sl() {
      Al = Kr = go = null;
    }
    function El(e) {
      var n = mo.current;
      De(mo), (e._currentValue = n);
    }
    function Tl(e, n, s) {
      for (; e !== null; ) {
        var a = e.alternate;
        if (
          ((e.childLanes & n) !== n
            ? ((e.childLanes |= n), a !== null && (a.childLanes |= n))
            : a !== null && (a.childLanes & n) !== n && (a.childLanes |= n),
          e === s)
        )
          break;
        e = e.return;
      }
    }
    function Gr(e, n) {
      (go = e),
        (Al = Kr = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          ((e.lanes & n) !== 0 && (xt = !0), (e.firstContext = null));
    }
    function Bt(e) {
      var n = e._currentValue;
      if (Al !== e)
        if (((e = { context: e, memoizedValue: n, next: null }), Kr === null)) {
          if (go === null) throw Error(i(308));
          (Kr = e), (go.dependencies = { lanes: 0, firstContext: e });
        } else Kr = Kr.next = e;
      return n;
    }
    var lr = null;
    function Pl(e) {
      lr === null ? (lr = [e]) : lr.push(e);
    }
    function Md(e, n, s, a) {
      var u = n.interleaved;
      return (
        u === null ? ((s.next = s), Pl(n)) : ((s.next = u.next), (u.next = s)),
        (n.interleaved = s),
        gn(e, a)
      );
    }
    function gn(e, n) {
      e.lanes |= n;
      var s = e.alternate;
      for (s !== null && (s.lanes |= n), s = e, e = e.return; e !== null; )
        (e.childLanes |= n),
          (s = e.alternate),
          s !== null && (s.childLanes |= n),
          (s = e),
          (e = e.return);
      return s.tag === 3 ? s.stateNode : null;
    }
    var Vn = !1;
    function kl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function Ld(e, n) {
      (e = e.updateQueue),
        n.updateQueue === e &&
          (n.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function yn(e, n) {
      return {
        eventTime: e,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function _n(e, n, s) {
      var a = e.updateQueue;
      if (a === null) return null;
      if (((a = a.shared), (we & 2) !== 0)) {
        var u = a.pending;
        return (
          u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
          (a.pending = n),
          gn(e, s)
        );
      }
      return (
        (u = a.interleaved),
        u === null ? ((n.next = n), Pl(a)) : ((n.next = u.next), (u.next = n)),
        (a.interleaved = n),
        gn(e, s)
      );
    }
    function yo(e, n, s) {
      if (
        ((n = n.updateQueue),
        n !== null && ((n = n.shared), (s & 4194240) !== 0))
      ) {
        var a = n.lanes;
        (a &= e.pendingLanes), (s |= a), (n.lanes = s), Ua(e, s);
      }
    }
    function Dd(e, n) {
      var s = e.updateQueue,
        a = e.alternate;
      if (a !== null && ((a = a.updateQueue), s === a)) {
        var u = null,
          d = null;
        if (((s = s.firstBaseUpdate), s !== null)) {
          do {
            var g = {
              eventTime: s.eventTime,
              lane: s.lane,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            };
            d === null ? (u = d = g) : (d = d.next = g), (s = s.next);
          } while (s !== null);
          d === null ? (u = d = n) : (d = d.next = n);
        } else u = d = n;
        (s = {
          baseState: a.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: d,
          shared: a.shared,
          effects: a.effects,
        }),
          (e.updateQueue = s);
        return;
      }
      (e = s.lastBaseUpdate),
        e === null ? (s.firstBaseUpdate = n) : (e.next = n),
        (s.lastBaseUpdate = n);
    }
    function vo(e, n, s, a) {
      var u = e.updateQueue;
      Vn = !1;
      var d = u.firstBaseUpdate,
        g = u.lastBaseUpdate,
        x = u.shared.pending;
      if (x !== null) {
        u.shared.pending = null;
        var C = x,
          L = C.next;
        (C.next = null), g === null ? (d = L) : (g.next = L), (g = C);
        var _ = e.alternate;
        _ !== null &&
          ((_ = _.updateQueue),
          (x = _.lastBaseUpdate),
          x !== g &&
            (x === null ? (_.firstBaseUpdate = L) : (x.next = L),
            (_.lastBaseUpdate = C)));
      }
      if (d !== null) {
        var U = u.baseState;
        (g = 0), (_ = L = C = null), (x = d);
        do {
          var B = x.lane,
            K = x.eventTime;
          if ((a & B) === B) {
            _ !== null &&
              (_ = _.next =
                {
                  eventTime: K,
                  lane: 0,
                  tag: x.tag,
                  payload: x.payload,
                  callback: x.callback,
                  next: null,
                });
            e: {
              var Y = e,
                X = x;
              switch (((B = n), (K = s), X.tag)) {
                case 1:
                  if (((Y = X.payload), typeof Y == "function")) {
                    U = Y.call(K, U, B);
                    break e;
                  }
                  U = Y;
                  break e;
                case 3:
                  Y.flags = (Y.flags & -65537) | 128;
                case 0:
                  if (
                    ((Y = X.payload),
                    (B = typeof Y == "function" ? Y.call(K, U, B) : Y),
                    B == null)
                  )
                    break e;
                  U = W({}, U, B);
                  break e;
                case 2:
                  Vn = !0;
              }
            }
            x.callback !== null &&
              x.lane !== 0 &&
              ((e.flags |= 64),
              (B = u.effects),
              B === null ? (u.effects = [x]) : B.push(x));
          } else
            (K = {
              eventTime: K,
              lane: B,
              tag: x.tag,
              payload: x.payload,
              callback: x.callback,
              next: null,
            }),
              _ === null ? ((L = _ = K), (C = U)) : (_ = _.next = K),
              (g |= B);
          if (((x = x.next), x === null)) {
            if (((x = u.shared.pending), x === null)) break;
            (B = x),
              (x = B.next),
              (B.next = null),
              (u.lastBaseUpdate = B),
              (u.shared.pending = null);
          }
        } while (!0);
        if (
          (_ === null && (C = U),
          (u.baseState = C),
          (u.firstBaseUpdate = L),
          (u.lastBaseUpdate = _),
          (n = u.shared.interleaved),
          n !== null)
        ) {
          u = n;
          do (g |= u.lane), (u = u.next);
          while (u !== n);
        } else d === null && (u.shared.lanes = 0);
        (fr |= g), (e.lanes = g), (e.memoizedState = U);
      }
    }
    function Nd(e, n, s) {
      if (((e = n.effects), (n.effects = null), e !== null))
        for (n = 0; n < e.length; n++) {
          var a = e[n],
            u = a.callback;
          if (u !== null) {
            if (((a.callback = null), (a = s), typeof u != "function"))
              throw Error(i(191, u));
            u.call(a);
          }
        }
    }
    var Qi = {},
      nn = Fn(Qi),
      Hi = Fn(Qi),
      $i = Fn(Qi);
    function ur(e) {
      if (e === Qi) throw Error(i(174));
      return e;
    }
    function Rl(e, n) {
      switch ((Re($i, n), Re(Hi, e), Re(nn, Qi), (e = n.nodeType), e)) {
        case 9:
        case 11:
          n = (n = n.documentElement) ? n.namespaceURI : ve(null, "");
          break;
        default:
          (e = e === 8 ? n.parentNode : n),
            (n = e.namespaceURI || null),
            (e = e.tagName),
            (n = ve(n, e));
      }
      De(nn), Re(nn, n);
    }
    function qr() {
      De(nn), De(Hi), De($i);
    }
    function bd(e) {
      ur($i.current);
      var n = ur(nn.current),
        s = ve(n, e.type);
      n !== s && (Re(Hi, e), Re(nn, s));
    }
    function jl(e) {
      Hi.current === e && (De(nn), De(Hi));
    }
    var Fe = Fn(0);
    function wo(e) {
      for (var n = e; n !== null; ) {
        if (n.tag === 13) {
          var s = n.memoizedState;
          if (
            s !== null &&
            ((s = s.dehydrated),
            s === null || s.data === "$?" || s.data === "$!")
          )
            return n;
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
          if ((n.flags & 128) !== 0) return n;
        } else if (n.child !== null) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return null;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
      return null;
    }
    var Ol = [];
    function Ml() {
      for (var e = 0; e < Ol.length; e++)
        Ol[e]._workInProgressVersionPrimary = null;
      Ol.length = 0;
    }
    var xo = J.ReactCurrentDispatcher,
      Ll = J.ReactCurrentBatchConfig,
      cr = 0,
      Be = null,
      Ke = null,
      qe = null,
      Co = !1,
      Wi = !1,
      Zi = 0,
      iy = 0;
    function at() {
      throw Error(i(321));
    }
    function Dl(e, n) {
      if (n === null) return !1;
      for (var s = 0; s < n.length && s < e.length; s++)
        if (!$t(e[s], n[s])) return !1;
      return !0;
    }
    function Nl(e, n, s, a, u, d) {
      if (
        ((cr = d),
        (Be = n),
        (n.memoizedState = null),
        (n.updateQueue = null),
        (n.lanes = 0),
        (xo.current = e === null || e.memoizedState === null ? ly : uy),
        (e = s(a, u)),
        Wi)
      ) {
        d = 0;
        do {
          if (((Wi = !1), (Zi = 0), 25 <= d)) throw Error(i(301));
          (d += 1),
            (qe = Ke = null),
            (n.updateQueue = null),
            (xo.current = cy),
            (e = s(a, u));
        } while (Wi);
      }
      if (
        ((xo.current = Eo),
        (n = Ke !== null && Ke.next !== null),
        (cr = 0),
        (qe = Ke = Be = null),
        (Co = !1),
        n)
      )
        throw Error(i(300));
      return e;
    }
    function bl() {
      var e = Zi !== 0;
      return (Zi = 0), e;
    }
    function rn() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return qe === null ? (Be.memoizedState = qe = e) : (qe = qe.next = e), qe;
    }
    function It() {
      if (Ke === null) {
        var e = Be.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ke.next;
      var n = qe === null ? Be.memoizedState : qe.next;
      if (n !== null) (qe = n), (Ke = e);
      else {
        if (e === null) throw Error(i(310));
        (Ke = e),
          (e = {
            memoizedState: Ke.memoizedState,
            baseState: Ke.baseState,
            baseQueue: Ke.baseQueue,
            queue: Ke.queue,
            next: null,
          }),
          qe === null ? (Be.memoizedState = qe = e) : (qe = qe.next = e);
      }
      return qe;
    }
    function Ki(e, n) {
      return typeof n == "function" ? n(e) : n;
    }
    function Fl(e) {
      var n = It(),
        s = n.queue;
      if (s === null) throw Error(i(311));
      s.lastRenderedReducer = e;
      var a = Ke,
        u = a.baseQueue,
        d = s.pending;
      if (d !== null) {
        if (u !== null) {
          var g = u.next;
          (u.next = d.next), (d.next = g);
        }
        (a.baseQueue = u = d), (s.pending = null);
      }
      if (u !== null) {
        (d = u.next), (a = a.baseState);
        var x = (g = null),
          C = null,
          L = d;
        do {
          var _ = L.lane;
          if ((cr & _) === _)
            C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  action: L.action,
                  hasEagerState: L.hasEagerState,
                  eagerState: L.eagerState,
                  next: null,
                }),
              (a = L.hasEagerState ? L.eagerState : e(a, L.action));
          else {
            var U = {
              lane: _,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null,
            };
            C === null ? ((x = C = U), (g = a)) : (C = C.next = U),
              (Be.lanes |= _),
              (fr |= _);
          }
          L = L.next;
        } while (L !== null && L !== d);
        C === null ? (g = a) : (C.next = x),
          $t(a, n.memoizedState) || (xt = !0),
          (n.memoizedState = a),
          (n.baseState = g),
          (n.baseQueue = C),
          (s.lastRenderedState = a);
      }
      if (((e = s.interleaved), e !== null)) {
        u = e;
        do (d = u.lane), (Be.lanes |= d), (fr |= d), (u = u.next);
        while (u !== e);
      } else u === null && (s.lanes = 0);
      return [n.memoizedState, s.dispatch];
    }
    function Bl(e) {
      var n = It(),
        s = n.queue;
      if (s === null) throw Error(i(311));
      s.lastRenderedReducer = e;
      var a = s.dispatch,
        u = s.pending,
        d = n.memoizedState;
      if (u !== null) {
        s.pending = null;
        var g = (u = u.next);
        do (d = e(d, g.action)), (g = g.next);
        while (g !== u);
        $t(d, n.memoizedState) || (xt = !0),
          (n.memoizedState = d),
          n.baseQueue === null && (n.baseState = d),
          (s.lastRenderedState = d);
      }
      return [d, a];
    }
    function Fd() {}
    function Bd(e, n) {
      var s = Be,
        a = It(),
        u = n(),
        d = !$t(a.memoizedState, u);
      if (
        (d && ((a.memoizedState = u), (xt = !0)),
        (a = a.queue),
        Il(_d.bind(null, s, a, e), [e]),
        a.getSnapshot !== n || d || (qe !== null && qe.memoizedState.tag & 1))
      ) {
        if (
          ((s.flags |= 2048),
          Gi(9, Vd.bind(null, s, a, u, n), void 0, null),
          Ye === null)
        )
          throw Error(i(349));
        (cr & 30) !== 0 || Id(s, n, u);
      }
      return u;
    }
    function Id(e, n, s) {
      (e.flags |= 16384),
        (e = { getSnapshot: n, value: s }),
        (n = Be.updateQueue),
        n === null
          ? ((n = { lastEffect: null, stores: null }),
            (Be.updateQueue = n),
            (n.stores = [e]))
          : ((s = n.stores), s === null ? (n.stores = [e]) : s.push(e));
    }
    function Vd(e, n, s, a) {
      (n.value = s), (n.getSnapshot = a), Ud(n) && zd(e);
    }
    function _d(e, n, s) {
      return s(function () {
        Ud(n) && zd(e);
      });
    }
    function Ud(e) {
      var n = e.getSnapshot;
      e = e.value;
      try {
        var s = n();
        return !$t(e, s);
      } catch {
        return !0;
      }
    }
    function zd(e) {
      var n = gn(e, 1);
      n !== null && qt(n, e, 1, -1);
    }
    function Qd(e) {
      var n = rn();
      return (
        typeof e == "function" && (e = e()),
        (n.memoizedState = n.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ki,
          lastRenderedState: e,
        }),
        (n.queue = e),
        (e = e.dispatch = ay.bind(null, Be, e)),
        [n.memoizedState, e]
      );
    }
    function Gi(e, n, s, a) {
      return (
        (e = { tag: e, create: n, destroy: s, deps: a, next: null }),
        (n = Be.updateQueue),
        n === null
          ? ((n = { lastEffect: null, stores: null }),
            (Be.updateQueue = n),
            (n.lastEffect = e.next = e))
          : ((s = n.lastEffect),
            s === null
              ? (n.lastEffect = e.next = e)
              : ((a = s.next), (s.next = e), (e.next = a), (n.lastEffect = e))),
        e
      );
    }
    function Hd() {
      return It().memoizedState;
    }
    function Ao(e, n, s, a) {
      var u = rn();
      (Be.flags |= e),
        (u.memoizedState = Gi(1 | n, s, void 0, a === void 0 ? null : a));
    }
    function So(e, n, s, a) {
      var u = It();
      a = a === void 0 ? null : a;
      var d = void 0;
      if (Ke !== null) {
        var g = Ke.memoizedState;
        if (((d = g.destroy), a !== null && Dl(a, g.deps))) {
          u.memoizedState = Gi(n, s, d, a);
          return;
        }
      }
      (Be.flags |= e), (u.memoizedState = Gi(1 | n, s, d, a));
    }
    function $d(e, n) {
      return Ao(8390656, 8, e, n);
    }
    function Il(e, n) {
      return So(2048, 8, e, n);
    }
    function Wd(e, n) {
      return So(4, 2, e, n);
    }
    function Zd(e, n) {
      return So(4, 4, e, n);
    }
    function Kd(e, n) {
      if (typeof n == "function")
        return (
          (e = e()),
          n(e),
          function () {
            n(null);
          }
        );
      if (n != null)
        return (
          (e = e()),
          (n.current = e),
          function () {
            n.current = null;
          }
        );
    }
    function Gd(e, n, s) {
      return (
        (s = s != null ? s.concat([e]) : null), So(4, 4, Kd.bind(null, n, e), s)
      );
    }
    function Vl() {}
    function qd(e, n) {
      var s = It();
      n = n === void 0 ? null : n;
      var a = s.memoizedState;
      return a !== null && n !== null && Dl(n, a[1])
        ? a[0]
        : ((s.memoizedState = [e, n]), e);
    }
    function Yd(e, n) {
      var s = It();
      n = n === void 0 ? null : n;
      var a = s.memoizedState;
      return a !== null && n !== null && Dl(n, a[1])
        ? a[0]
        : ((e = e()), (s.memoizedState = [e, n]), e);
    }
    function Xd(e, n, s) {
      return (cr & 21) === 0
        ? (e.baseState && ((e.baseState = !1), (xt = !0)),
          (e.memoizedState = s))
        : ($t(s, n) ||
            ((s = Rf()), (Be.lanes |= s), (fr |= s), (e.baseState = !0)),
          n);
    }
    function sy(e, n) {
      var s = Te;
      (Te = s !== 0 && 4 > s ? s : 4), e(!0);
      var a = Ll.transition;
      Ll.transition = {};
      try {
        e(!1), n();
      } finally {
        (Te = s), (Ll.transition = a);
      }
    }
    function Jd() {
      return It().memoizedState;
    }
    function oy(e, n, s) {
      var a = Hn(e);
      if (
        ((s = {
          lane: a,
          action: s,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        ep(e))
      )
        tp(n, s);
      else if (((s = Md(e, n, s, a)), s !== null)) {
        var u = mt();
        qt(s, e, a, u), np(s, n, a);
      }
    }
    function ay(e, n, s) {
      var a = Hn(e),
        u = {
          lane: a,
          action: s,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (ep(e)) tp(n, u);
      else {
        var d = e.alternate;
        if (
          e.lanes === 0 &&
          (d === null || d.lanes === 0) &&
          ((d = n.lastRenderedReducer), d !== null)
        )
          try {
            var g = n.lastRenderedState,
              x = d(g, s);
            if (((u.hasEagerState = !0), (u.eagerState = x), $t(x, g))) {
              var C = n.interleaved;
              C === null
                ? ((u.next = u), Pl(n))
                : ((u.next = C.next), (C.next = u)),
                (n.interleaved = u);
              return;
            }
          } catch {
          } finally {
          }
        (s = Md(e, n, u, a)),
          s !== null && ((u = mt()), qt(s, e, a, u), np(s, n, a));
      }
    }
    function ep(e) {
      var n = e.alternate;
      return e === Be || (n !== null && n === Be);
    }
    function tp(e, n) {
      Wi = Co = !0;
      var s = e.pending;
      s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
        (e.pending = n);
    }
    function np(e, n, s) {
      if ((s & 4194240) !== 0) {
        var a = n.lanes;
        (a &= e.pendingLanes), (s |= a), (n.lanes = s), Ua(e, s);
      }
    }
    var Eo = {
        readContext: Bt,
        useCallback: at,
        useContext: at,
        useEffect: at,
        useImperativeHandle: at,
        useInsertionEffect: at,
        useLayoutEffect: at,
        useMemo: at,
        useReducer: at,
        useRef: at,
        useState: at,
        useDebugValue: at,
        useDeferredValue: at,
        useTransition: at,
        useMutableSource: at,
        useSyncExternalStore: at,
        useId: at,
        unstable_isNewReconciler: !1,
      },
      ly = {
        readContext: Bt,
        useCallback: function (e, n) {
          return (rn().memoizedState = [e, n === void 0 ? null : n]), e;
        },
        useContext: Bt,
        useEffect: $d,
        useImperativeHandle: function (e, n, s) {
          return (
            (s = s != null ? s.concat([e]) : null),
            Ao(4194308, 4, Kd.bind(null, n, e), s)
          );
        },
        useLayoutEffect: function (e, n) {
          return Ao(4194308, 4, e, n);
        },
        useInsertionEffect: function (e, n) {
          return Ao(4, 2, e, n);
        },
        useMemo: function (e, n) {
          var s = rn();
          return (
            (n = n === void 0 ? null : n),
            (e = e()),
            (s.memoizedState = [e, n]),
            e
          );
        },
        useReducer: function (e, n, s) {
          var a = rn();
          return (
            (n = s !== void 0 ? s(n) : n),
            (a.memoizedState = a.baseState = n),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: n,
            }),
            (a.queue = e),
            (e = e.dispatch = oy.bind(null, Be, e)),
            [a.memoizedState, e]
          );
        },
        useRef: function (e) {
          var n = rn();
          return (e = { current: e }), (n.memoizedState = e);
        },
        useState: Qd,
        useDebugValue: Vl,
        useDeferredValue: function (e) {
          return (rn().memoizedState = e);
        },
        useTransition: function () {
          var e = Qd(!1),
            n = e[0];
          return (e = sy.bind(null, e[1])), (rn().memoizedState = e), [n, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, n, s) {
          var a = Be,
            u = rn();
          if (be) {
            if (s === void 0) throw Error(i(407));
            s = s();
          } else {
            if (((s = n()), Ye === null)) throw Error(i(349));
            (cr & 30) !== 0 || Id(a, n, s);
          }
          u.memoizedState = s;
          var d = { value: s, getSnapshot: n };
          return (
            (u.queue = d),
            $d(_d.bind(null, a, d, e), [e]),
            (a.flags |= 2048),
            Gi(9, Vd.bind(null, a, d, s, n), void 0, null),
            s
          );
        },
        useId: function () {
          var e = rn(),
            n = Ye.identifierPrefix;
          if (be) {
            var s = mn,
              a = hn;
            (s = (a & ~(1 << (32 - Ht(a) - 1))).toString(32) + s),
              (n = ":" + n + "R" + s),
              (s = Zi++),
              0 < s && (n += "H" + s.toString(32)),
              (n += ":");
          } else (s = iy++), (n = ":" + n + "r" + s.toString(32) + ":");
          return (e.memoizedState = n);
        },
        unstable_isNewReconciler: !1,
      },
      uy = {
        readContext: Bt,
        useCallback: qd,
        useContext: Bt,
        useEffect: Il,
        useImperativeHandle: Gd,
        useInsertionEffect: Wd,
        useLayoutEffect: Zd,
        useMemo: Yd,
        useReducer: Fl,
        useRef: Hd,
        useState: function () {
          return Fl(Ki);
        },
        useDebugValue: Vl,
        useDeferredValue: function (e) {
          var n = It();
          return Xd(n, Ke.memoizedState, e);
        },
        useTransition: function () {
          var e = Fl(Ki)[0],
            n = It().memoizedState;
          return [e, n];
        },
        useMutableSource: Fd,
        useSyncExternalStore: Bd,
        useId: Jd,
        unstable_isNewReconciler: !1,
      },
      cy = {
        readContext: Bt,
        useCallback: qd,
        useContext: Bt,
        useEffect: Il,
        useImperativeHandle: Gd,
        useInsertionEffect: Wd,
        useLayoutEffect: Zd,
        useMemo: Yd,
        useReducer: Bl,
        useRef: Hd,
        useState: function () {
          return Bl(Ki);
        },
        useDebugValue: Vl,
        useDeferredValue: function (e) {
          var n = It();
          return Ke === null
            ? (n.memoizedState = e)
            : Xd(n, Ke.memoizedState, e);
        },
        useTransition: function () {
          var e = Bl(Ki)[0],
            n = It().memoizedState;
          return [e, n];
        },
        useMutableSource: Fd,
        useSyncExternalStore: Bd,
        useId: Jd,
        unstable_isNewReconciler: !1,
      };
    function Zt(e, n) {
      if (e && e.defaultProps) {
        (n = W({}, n)), (e = e.defaultProps);
        for (var s in e) n[s] === void 0 && (n[s] = e[s]);
        return n;
      }
      return n;
    }
    function _l(e, n, s, a) {
      (n = e.memoizedState),
        (s = s(a, n)),
        (s = s == null ? n : W({}, n, s)),
        (e.memoizedState = s),
        e.lanes === 0 && (e.updateQueue.baseState = s);
    }
    var To = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? rr(e) === e : !1;
      },
      enqueueSetState: function (e, n, s) {
        e = e._reactInternals;
        var a = mt(),
          u = Hn(e),
          d = yn(a, u);
        (d.payload = n),
          s != null && (d.callback = s),
          (n = _n(e, d, u)),
          n !== null && (qt(n, e, u, a), yo(n, e, u));
      },
      enqueueReplaceState: function (e, n, s) {
        e = e._reactInternals;
        var a = mt(),
          u = Hn(e),
          d = yn(a, u);
        (d.tag = 1),
          (d.payload = n),
          s != null && (d.callback = s),
          (n = _n(e, d, u)),
          n !== null && (qt(n, e, u, a), yo(n, e, u));
      },
      enqueueForceUpdate: function (e, n) {
        e = e._reactInternals;
        var s = mt(),
          a = Hn(e),
          u = yn(s, a);
        (u.tag = 2),
          n != null && (u.callback = n),
          (n = _n(e, u, a)),
          n !== null && (qt(n, e, a, s), yo(n, e, a));
      },
    };
    function rp(e, n, s, a, u, d, g) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
          ? e.shouldComponentUpdate(a, d, g)
          : n.prototype && n.prototype.isPureReactComponent
          ? !bi(s, a) || !bi(u, d)
          : !0
      );
    }
    function ip(e, n, s) {
      var a = !1,
        u = Bn,
        d = n.contextType;
      return (
        typeof d == "object" && d !== null
          ? (d = Bt(d))
          : ((u = wt(n) ? sr : ot.current),
            (a = n.contextTypes),
            (d = (a = a != null) ? Qr(e, u) : Bn)),
        (n = new n(s, d)),
        (e.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = To),
        (e.stateNode = n),
        (n._reactInternals = e),
        a &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = u),
          (e.__reactInternalMemoizedMaskedChildContext = d)),
        n
      );
    }
    function sp(e, n, s, a) {
      (e = n.state),
        typeof n.componentWillReceiveProps == "function" &&
          n.componentWillReceiveProps(s, a),
        typeof n.UNSAFE_componentWillReceiveProps == "function" &&
          n.UNSAFE_componentWillReceiveProps(s, a),
        n.state !== e && To.enqueueReplaceState(n, n.state, null);
    }
    function Ul(e, n, s, a) {
      var u = e.stateNode;
      (u.props = s), (u.state = e.memoizedState), (u.refs = {}), kl(e);
      var d = n.contextType;
      typeof d == "object" && d !== null
        ? (u.context = Bt(d))
        : ((d = wt(n) ? sr : ot.current), (u.context = Qr(e, d))),
        (u.state = e.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (_l(e, n, d, s), (u.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((n = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          n !== u.state && To.enqueueReplaceState(u, u.state, null),
          vo(e, s, u, a),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Yr(e, n) {
      try {
        var s = "",
          a = n;
        do (s += me(a)), (a = a.return);
        while (a);
        var u = s;
      } catch (d) {
        u =
          `
Error generating stack: ` +
          d.message +
          `
` +
          d.stack;
      }
      return { value: e, source: n, stack: u, digest: null };
    }
    function zl(e, n, s) {
      return { value: e, source: null, stack: s ?? null, digest: n ?? null };
    }
    function Ql(e, n) {
      try {
        console.error(n.value);
      } catch (s) {
        setTimeout(function () {
          throw s;
        });
      }
    }
    var fy = typeof WeakMap == "function" ? WeakMap : Map;
    function op(e, n, s) {
      (s = yn(-1, s)), (s.tag = 3), (s.payload = { element: null });
      var a = n.value;
      return (
        (s.callback = function () {
          Lo || ((Lo = !0), (iu = a)), Ql(e, n);
        }),
        s
      );
    }
    function ap(e, n, s) {
      (s = yn(-1, s)), (s.tag = 3);
      var a = e.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var u = n.value;
        (s.payload = function () {
          return a(u);
        }),
          (s.callback = function () {
            Ql(e, n);
          });
      }
      var d = e.stateNode;
      return (
        d !== null &&
          typeof d.componentDidCatch == "function" &&
          (s.callback = function () {
            Ql(e, n),
              typeof a != "function" &&
                (zn === null ? (zn = new Set([this])) : zn.add(this));
            var g = n.stack;
            this.componentDidCatch(n.value, {
              componentStack: g !== null ? g : "",
            });
          }),
        s
      );
    }
    function lp(e, n, s) {
      var a = e.pingCache;
      if (a === null) {
        a = e.pingCache = new fy();
        var u = new Set();
        a.set(n, u);
      } else (u = a.get(n)), u === void 0 && ((u = new Set()), a.set(n, u));
      u.has(s) || (u.add(s), (e = Ty.bind(null, e, n, s)), n.then(e, e));
    }
    function up(e) {
      do {
        var n;
        if (
          ((n = e.tag === 13) &&
            ((n = e.memoizedState),
            (n = n !== null ? n.dehydrated !== null : !0)),
          n)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function cp(e, n, s, a, u) {
      return (e.mode & 1) === 0
        ? (e === n
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (s.flags |= 131072),
              (s.flags &= -52805),
              s.tag === 1 &&
                (s.alternate === null
                  ? (s.tag = 17)
                  : ((n = yn(-1, 1)), (n.tag = 2), _n(s, n, 1))),
              (s.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = u), e);
    }
    var dy = J.ReactCurrentOwner,
      xt = !1;
    function ht(e, n, s, a) {
      n.child = e === null ? Od(n, null, s, a) : Zr(n, e.child, s, a);
    }
    function fp(e, n, s, a, u) {
      s = s.render;
      var d = n.ref;
      return (
        Gr(n, u),
        (a = Nl(e, n, s, a, d, u)),
        (s = bl()),
        e !== null && !xt
          ? ((n.updateQueue = e.updateQueue),
            (n.flags &= -2053),
            (e.lanes &= ~u),
            vn(e, n, u))
          : (be && s && yl(n), (n.flags |= 1), ht(e, n, a, u), n.child)
      );
    }
    function dp(e, n, s, a, u) {
      if (e === null) {
        var d = s.type;
        return typeof d == "function" &&
          !fu(d) &&
          d.defaultProps === void 0 &&
          s.compare === null &&
          s.defaultProps === void 0
          ? ((n.tag = 15), (n.type = d), pp(e, n, d, a, u))
          : ((e = Io(s.type, null, a, n, n.mode, u)),
            (e.ref = n.ref),
            (e.return = n),
            (n.child = e));
      }
      if (((d = e.child), (e.lanes & u) === 0)) {
        var g = d.memoizedProps;
        if (
          ((s = s.compare),
          (s = s !== null ? s : bi),
          s(g, a) && e.ref === n.ref)
        )
          return vn(e, n, u);
      }
      return (
        (n.flags |= 1),
        (e = Wn(d, a)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e)
      );
    }
    function pp(e, n, s, a, u) {
      if (e !== null) {
        var d = e.memoizedProps;
        if (bi(d, a) && e.ref === n.ref)
          if (((xt = !1), (n.pendingProps = a = d), (e.lanes & u) !== 0))
            (e.flags & 131072) !== 0 && (xt = !0);
          else return (n.lanes = e.lanes), vn(e, n, u);
      }
      return Hl(e, n, s, a, u);
    }
    function hp(e, n, s) {
      var a = n.pendingProps,
        u = a.children,
        d = e !== null ? e.memoizedState : null;
      if (a.mode === "hidden")
        if ((n.mode & 1) === 0)
          (n.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            Re(Jr, Rt),
            (Rt |= s);
        else {
          if ((s & 1073741824) === 0)
            return (
              (e = d !== null ? d.baseLanes | s : s),
              (n.lanes = n.childLanes = 1073741824),
              (n.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (n.updateQueue = null),
              Re(Jr, Rt),
              (Rt |= e),
              null
            );
          (n.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (a = d !== null ? d.baseLanes : s),
            Re(Jr, Rt),
            (Rt |= a);
        }
      else
        d !== null
          ? ((a = d.baseLanes | s), (n.memoizedState = null))
          : (a = s),
          Re(Jr, Rt),
          (Rt |= a);
      return ht(e, n, u, s), n.child;
    }
    function mp(e, n) {
      var s = n.ref;
      ((e === null && s !== null) || (e !== null && e.ref !== s)) &&
        ((n.flags |= 512), (n.flags |= 2097152));
    }
    function Hl(e, n, s, a, u) {
      var d = wt(s) ? sr : ot.current;
      return (
        (d = Qr(n, d)),
        Gr(n, u),
        (s = Nl(e, n, s, a, d, u)),
        (a = bl()),
        e !== null && !xt
          ? ((n.updateQueue = e.updateQueue),
            (n.flags &= -2053),
            (e.lanes &= ~u),
            vn(e, n, u))
          : (be && a && yl(n), (n.flags |= 1), ht(e, n, s, u), n.child)
      );
    }
    function gp(e, n, s, a, u) {
      if (wt(s)) {
        var d = !0;
        lo(n);
      } else d = !1;
      if ((Gr(n, u), n.stateNode === null))
        ko(e, n), ip(n, s, a), Ul(n, s, a, u), (a = !0);
      else if (e === null) {
        var g = n.stateNode,
          x = n.memoizedProps;
        g.props = x;
        var C = g.context,
          L = s.contextType;
        typeof L == "object" && L !== null
          ? (L = Bt(L))
          : ((L = wt(s) ? sr : ot.current), (L = Qr(n, L)));
        var _ = s.getDerivedStateFromProps,
          U =
            typeof _ == "function" ||
            typeof g.getSnapshotBeforeUpdate == "function";
        U ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((x !== a || C !== L) && sp(n, g, a, L)),
          (Vn = !1);
        var B = n.memoizedState;
        (g.state = B),
          vo(n, a, g, u),
          (C = n.memoizedState),
          x !== a || B !== C || vt.current || Vn
            ? (typeof _ == "function" &&
                (_l(n, s, _, a), (C = n.memoizedState)),
              (x = Vn || rp(n, s, x, a, B, C, L))
                ? (U ||
                    (typeof g.UNSAFE_componentWillMount != "function" &&
                      typeof g.componentWillMount != "function") ||
                    (typeof g.componentWillMount == "function" &&
                      g.componentWillMount(),
                    typeof g.UNSAFE_componentWillMount == "function" &&
                      g.UNSAFE_componentWillMount()),
                  typeof g.componentDidMount == "function" &&
                    (n.flags |= 4194308))
                : (typeof g.componentDidMount == "function" &&
                    (n.flags |= 4194308),
                  (n.memoizedProps = a),
                  (n.memoizedState = C)),
              (g.props = a),
              (g.state = C),
              (g.context = L),
              (a = x))
            : (typeof g.componentDidMount == "function" && (n.flags |= 4194308),
              (a = !1));
      } else {
        (g = n.stateNode),
          Ld(e, n),
          (x = n.memoizedProps),
          (L = n.type === n.elementType ? x : Zt(n.type, x)),
          (g.props = L),
          (U = n.pendingProps),
          (B = g.context),
          (C = s.contextType),
          typeof C == "object" && C !== null
            ? (C = Bt(C))
            : ((C = wt(s) ? sr : ot.current), (C = Qr(n, C)));
        var K = s.getDerivedStateFromProps;
        (_ =
          typeof K == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function") ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((x !== U || B !== C) && sp(n, g, a, C)),
          (Vn = !1),
          (B = n.memoizedState),
          (g.state = B),
          vo(n, a, g, u);
        var Y = n.memoizedState;
        x !== U || B !== Y || vt.current || Vn
          ? (typeof K == "function" && (_l(n, s, K, a), (Y = n.memoizedState)),
            (L = Vn || rp(n, s, L, a, B, Y, C) || !1)
              ? (_ ||
                  (typeof g.UNSAFE_componentWillUpdate != "function" &&
                    typeof g.componentWillUpdate != "function") ||
                  (typeof g.componentWillUpdate == "function" &&
                    g.componentWillUpdate(a, Y, C),
                  typeof g.UNSAFE_componentWillUpdate == "function" &&
                    g.UNSAFE_componentWillUpdate(a, Y, C)),
                typeof g.componentDidUpdate == "function" && (n.flags |= 4),
                typeof g.getSnapshotBeforeUpdate == "function" &&
                  (n.flags |= 1024))
              : (typeof g.componentDidUpdate != "function" ||
                  (x === e.memoizedProps && B === e.memoizedState) ||
                  (n.flags |= 4),
                typeof g.getSnapshotBeforeUpdate != "function" ||
                  (x === e.memoizedProps && B === e.memoizedState) ||
                  (n.flags |= 1024),
                (n.memoizedProps = a),
                (n.memoizedState = Y)),
            (g.props = a),
            (g.state = Y),
            (g.context = C),
            (a = L))
          : (typeof g.componentDidUpdate != "function" ||
              (x === e.memoizedProps && B === e.memoizedState) ||
              (n.flags |= 4),
            typeof g.getSnapshotBeforeUpdate != "function" ||
              (x === e.memoizedProps && B === e.memoizedState) ||
              (n.flags |= 1024),
            (a = !1));
      }
      return $l(e, n, s, a, d, u);
    }
    function $l(e, n, s, a, u, d) {
      mp(e, n);
      var g = (n.flags & 128) !== 0;
      if (!a && !g) return u && Cd(n, s, !1), vn(e, n, d);
      (a = n.stateNode), (dy.current = n);
      var x =
        g && typeof s.getDerivedStateFromError != "function"
          ? null
          : a.render();
      return (
        (n.flags |= 1),
        e !== null && g
          ? ((n.child = Zr(n, e.child, null, d)), (n.child = Zr(n, null, x, d)))
          : ht(e, n, x, d),
        (n.memoizedState = a.state),
        u && Cd(n, s, !0),
        n.child
      );
    }
    function yp(e) {
      var n = e.stateNode;
      n.pendingContext
        ? wd(e, n.pendingContext, n.pendingContext !== n.context)
        : n.context && wd(e, n.context, !1),
        Rl(e, n.containerInfo);
    }
    function vp(e, n, s, a, u) {
      return Wr(), Cl(u), (n.flags |= 256), ht(e, n, s, a), n.child;
    }
    var Wl = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Zl(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function wp(e, n, s) {
      var a = n.pendingProps,
        u = Fe.current,
        d = !1,
        g = (n.flags & 128) !== 0,
        x;
      if (
        ((x = g) ||
          (x = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
        x
          ? ((d = !0), (n.flags &= -129))
          : (e === null || e.memoizedState !== null) && (u |= 1),
        Re(Fe, u & 1),
        e === null)
      )
        return (
          xl(n),
          (e = n.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? ((n.mode & 1) === 0
                ? (n.lanes = 1)
                : e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824),
              null)
            : ((g = a.children),
              (e = a.fallback),
              d
                ? ((a = n.mode),
                  (d = n.child),
                  (g = { mode: "hidden", children: g }),
                  (a & 1) === 0 && d !== null
                    ? ((d.childLanes = 0), (d.pendingProps = g))
                    : (d = Vo(g, a, 0, null)),
                  (e = mr(e, a, s, null)),
                  (d.return = n),
                  (e.return = n),
                  (d.sibling = e),
                  (n.child = d),
                  (n.child.memoizedState = Zl(s)),
                  (n.memoizedState = Wl),
                  e)
                : Kl(n, g))
        );
      if (
        ((u = e.memoizedState), u !== null && ((x = u.dehydrated), x !== null))
      )
        return py(e, n, g, a, x, u, s);
      if (d) {
        (d = a.fallback), (g = n.mode), (u = e.child), (x = u.sibling);
        var C = { mode: "hidden", children: a.children };
        return (
          (g & 1) === 0 && n.child !== u
            ? ((a = n.child),
              (a.childLanes = 0),
              (a.pendingProps = C),
              (n.deletions = null))
            : ((a = Wn(u, C)), (a.subtreeFlags = u.subtreeFlags & 14680064)),
          x !== null
            ? (d = Wn(x, d))
            : ((d = mr(d, g, s, null)), (d.flags |= 2)),
          (d.return = n),
          (a.return = n),
          (a.sibling = d),
          (n.child = a),
          (a = d),
          (d = n.child),
          (g = e.child.memoizedState),
          (g =
            g === null
              ? Zl(s)
              : {
                  baseLanes: g.baseLanes | s,
                  cachePool: null,
                  transitions: g.transitions,
                }),
          (d.memoizedState = g),
          (d.childLanes = e.childLanes & ~s),
          (n.memoizedState = Wl),
          a
        );
      }
      return (
        (d = e.child),
        (e = d.sibling),
        (a = Wn(d, { mode: "visible", children: a.children })),
        (n.mode & 1) === 0 && (a.lanes = s),
        (a.return = n),
        (a.sibling = null),
        e !== null &&
          ((s = n.deletions),
          s === null ? ((n.deletions = [e]), (n.flags |= 16)) : s.push(e)),
        (n.child = a),
        (n.memoizedState = null),
        a
      );
    }
    function Kl(e, n) {
      return (
        (n = Vo({ mode: "visible", children: n }, e.mode, 0, null)),
        (n.return = e),
        (e.child = n)
      );
    }
    function Po(e, n, s, a) {
      return (
        a !== null && Cl(a),
        Zr(n, e.child, null, s),
        (e = Kl(n, n.pendingProps.children)),
        (e.flags |= 2),
        (n.memoizedState = null),
        e
      );
    }
    function py(e, n, s, a, u, d, g) {
      if (s)
        return n.flags & 256
          ? ((n.flags &= -257), (a = zl(Error(i(422)))), Po(e, n, g, a))
          : n.memoizedState !== null
          ? ((n.child = e.child), (n.flags |= 128), null)
          : ((d = a.fallback),
            (u = n.mode),
            (a = Vo({ mode: "visible", children: a.children }, u, 0, null)),
            (d = mr(d, u, g, null)),
            (d.flags |= 2),
            (a.return = n),
            (d.return = n),
            (a.sibling = d),
            (n.child = a),
            (n.mode & 1) !== 0 && Zr(n, e.child, null, g),
            (n.child.memoizedState = Zl(g)),
            (n.memoizedState = Wl),
            d);
      if ((n.mode & 1) === 0) return Po(e, n, g, null);
      if (u.data === "$!") {
        if (((a = u.nextSibling && u.nextSibling.dataset), a)) var x = a.dgst;
        return (
          (a = x), (d = Error(i(419))), (a = zl(d, a, void 0)), Po(e, n, g, a)
        );
      }
      if (((x = (g & e.childLanes) !== 0), xt || x)) {
        if (((a = Ye), a !== null)) {
          switch (g & -g) {
            case 4:
              u = 2;
              break;
            case 16:
              u = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              u = 32;
              break;
            case 536870912:
              u = 268435456;
              break;
            default:
              u = 0;
          }
          (u = (u & (a.suspendedLanes | g)) !== 0 ? 0 : u),
            u !== 0 &&
              u !== d.retryLane &&
              ((d.retryLane = u), gn(e, u), qt(a, e, u, -1));
        }
        return cu(), (a = zl(Error(i(421)))), Po(e, n, g, a);
      }
      return u.data === "$?"
        ? ((n.flags |= 128),
          (n.child = e.child),
          (n = Py.bind(null, e)),
          (u._reactRetry = n),
          null)
        : ((e = d.treeContext),
          (kt = bn(u.nextSibling)),
          (Pt = n),
          (be = !0),
          (Wt = null),
          e !== null &&
            ((bt[Ft++] = hn),
            (bt[Ft++] = mn),
            (bt[Ft++] = or),
            (hn = e.id),
            (mn = e.overflow),
            (or = n)),
          (n = Kl(n, a.children)),
          (n.flags |= 4096),
          n);
    }
    function xp(e, n, s) {
      e.lanes |= n;
      var a = e.alternate;
      a !== null && (a.lanes |= n), Tl(e.return, n, s);
    }
    function Gl(e, n, s, a, u) {
      var d = e.memoizedState;
      d === null
        ? (e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: s,
            tailMode: u,
          })
        : ((d.isBackwards = n),
          (d.rendering = null),
          (d.renderingStartTime = 0),
          (d.last = a),
          (d.tail = s),
          (d.tailMode = u));
    }
    function Cp(e, n, s) {
      var a = n.pendingProps,
        u = a.revealOrder,
        d = a.tail;
      if ((ht(e, n, a.children, s), (a = Fe.current), (a & 2) !== 0))
        (a = (a & 1) | 2), (n.flags |= 128);
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = n.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && xp(e, s, n);
            else if (e.tag === 19) xp(e, s, n);
            else if (e.child !== null) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === n) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === n) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        a &= 1;
      }
      if ((Re(Fe, a), (n.mode & 1) === 0)) n.memoizedState = null;
      else
        switch (u) {
          case "forwards":
            for (s = n.child, u = null; s !== null; )
              (e = s.alternate),
                e !== null && wo(e) === null && (u = s),
                (s = s.sibling);
            (s = u),
              s === null
                ? ((u = n.child), (n.child = null))
                : ((u = s.sibling), (s.sibling = null)),
              Gl(n, !1, u, s, d);
            break;
          case "backwards":
            for (s = null, u = n.child, n.child = null; u !== null; ) {
              if (((e = u.alternate), e !== null && wo(e) === null)) {
                n.child = u;
                break;
              }
              (e = u.sibling), (u.sibling = s), (s = u), (u = e);
            }
            Gl(n, !0, s, null, d);
            break;
          case "together":
            Gl(n, !1, null, null, void 0);
            break;
          default:
            n.memoizedState = null;
        }
      return n.child;
    }
    function ko(e, n) {
      (n.mode & 1) === 0 &&
        e !== null &&
        ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
    }
    function vn(e, n, s) {
      if (
        (e !== null && (n.dependencies = e.dependencies),
        (fr |= n.lanes),
        (s & n.childLanes) === 0)
      )
        return null;
      if (e !== null && n.child !== e.child) throw Error(i(153));
      if (n.child !== null) {
        for (
          e = n.child, s = Wn(e, e.pendingProps), n.child = s, s.return = n;
          e.sibling !== null;

        )
          (e = e.sibling),
            (s = s.sibling = Wn(e, e.pendingProps)),
            (s.return = n);
        s.sibling = null;
      }
      return n.child;
    }
    function hy(e, n, s) {
      switch (n.tag) {
        case 3:
          yp(n), Wr();
          break;
        case 5:
          bd(n);
          break;
        case 1:
          wt(n.type) && lo(n);
          break;
        case 4:
          Rl(n, n.stateNode.containerInfo);
          break;
        case 10:
          var a = n.type._context,
            u = n.memoizedProps.value;
          Re(mo, a._currentValue), (a._currentValue = u);
          break;
        case 13:
          if (((a = n.memoizedState), a !== null))
            return a.dehydrated !== null
              ? (Re(Fe, Fe.current & 1), (n.flags |= 128), null)
              : (s & n.child.childLanes) !== 0
              ? wp(e, n, s)
              : (Re(Fe, Fe.current & 1),
                (e = vn(e, n, s)),
                e !== null ? e.sibling : null);
          Re(Fe, Fe.current & 1);
          break;
        case 19:
          if (((a = (s & n.childLanes) !== 0), (e.flags & 128) !== 0)) {
            if (a) return Cp(e, n, s);
            n.flags |= 128;
          }
          if (
            ((u = n.memoizedState),
            u !== null &&
              ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
            Re(Fe, Fe.current),
            a)
          )
            break;
          return null;
        case 22:
        case 23:
          return (n.lanes = 0), hp(e, n, s);
      }
      return vn(e, n, s);
    }
    var Ap, ql, Sp, Ep;
    (Ap = function (e, n) {
      for (var s = n.child; s !== null; ) {
        if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
        else if (s.tag !== 4 && s.child !== null) {
          (s.child.return = s), (s = s.child);
          continue;
        }
        if (s === n) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === n) return;
          s = s.return;
        }
        (s.sibling.return = s.return), (s = s.sibling);
      }
    }),
      (ql = function () {}),
      (Sp = function (e, n, s, a) {
        var u = e.memoizedProps;
        if (u !== a) {
          (e = n.stateNode), ur(nn.current);
          var d = null;
          switch (s) {
            case "input":
              (u = yi(e, u)), (a = yi(e, a)), (d = []);
              break;
            case "select":
              (u = W({}, u, { value: void 0 })),
                (a = W({}, a, { value: void 0 })),
                (d = []);
              break;
            case "textarea":
              (u = D(e, u)), (a = D(e, a)), (d = []);
              break;
            default:
              typeof u.onClick != "function" &&
                typeof a.onClick == "function" &&
                (e.onclick = so);
          }
          Oa(s, a);
          var g;
          s = null;
          for (L in u)
            if (!a.hasOwnProperty(L) && u.hasOwnProperty(L) && u[L] != null)
              if (L === "style") {
                var x = u[L];
                for (g in x)
                  x.hasOwnProperty(g) && (s || (s = {}), (s[g] = ""));
              } else
                L !== "dangerouslySetInnerHTML" &&
                  L !== "children" &&
                  L !== "suppressContentEditableWarning" &&
                  L !== "suppressHydrationWarning" &&
                  L !== "autoFocus" &&
                  (l.hasOwnProperty(L)
                    ? d || (d = [])
                    : (d = d || []).push(L, null));
          for (L in a) {
            var C = a[L];
            if (
              ((x = u != null ? u[L] : void 0),
              a.hasOwnProperty(L) && C !== x && (C != null || x != null))
            )
              if (L === "style")
                if (x) {
                  for (g in x)
                    !x.hasOwnProperty(g) ||
                      (C && C.hasOwnProperty(g)) ||
                      (s || (s = {}), (s[g] = ""));
                  for (g in C)
                    C.hasOwnProperty(g) &&
                      x[g] !== C[g] &&
                      (s || (s = {}), (s[g] = C[g]));
                } else s || (d || (d = []), d.push(L, s)), (s = C);
              else
                L === "dangerouslySetInnerHTML"
                  ? ((C = C ? C.__html : void 0),
                    (x = x ? x.__html : void 0),
                    C != null && x !== C && (d = d || []).push(L, C))
                  : L === "children"
                  ? (typeof C != "string" && typeof C != "number") ||
                    (d = d || []).push(L, "" + C)
                  : L !== "suppressContentEditableWarning" &&
                    L !== "suppressHydrationWarning" &&
                    (l.hasOwnProperty(L)
                      ? (C != null && L === "onScroll" && Le("scroll", e),
                        d || x === C || (d = []))
                      : (d = d || []).push(L, C));
          }
          s && (d = d || []).push("style", s);
          var L = d;
          (n.updateQueue = L) && (n.flags |= 4);
        }
      }),
      (Ep = function (e, n, s, a) {
        s !== a && (n.flags |= 4);
      });
    function qi(e, n) {
      if (!be)
        switch (e.tailMode) {
          case "hidden":
            n = e.tail;
            for (var s = null; n !== null; )
              n.alternate !== null && (s = n), (n = n.sibling);
            s === null ? (e.tail = null) : (s.sibling = null);
            break;
          case "collapsed":
            s = e.tail;
            for (var a = null; s !== null; )
              s.alternate !== null && (a = s), (s = s.sibling);
            a === null
              ? n || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (a.sibling = null);
        }
    }
    function lt(e) {
      var n = e.alternate !== null && e.alternate.child === e.child,
        s = 0,
        a = 0;
      if (n)
        for (var u = e.child; u !== null; )
          (s |= u.lanes | u.childLanes),
            (a |= u.subtreeFlags & 14680064),
            (a |= u.flags & 14680064),
            (u.return = e),
            (u = u.sibling);
      else
        for (u = e.child; u !== null; )
          (s |= u.lanes | u.childLanes),
            (a |= u.subtreeFlags),
            (a |= u.flags),
            (u.return = e),
            (u = u.sibling);
      return (e.subtreeFlags |= a), (e.childLanes = s), n;
    }
    function my(e, n, s) {
      var a = n.pendingProps;
      switch ((vl(n), n.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return lt(n), null;
        case 1:
          return wt(n.type) && ao(), lt(n), null;
        case 3:
          return (
            (a = n.stateNode),
            qr(),
            De(vt),
            De(ot),
            Ml(),
            a.pendingContext &&
              ((a.context = a.pendingContext), (a.pendingContext = null)),
            (e === null || e.child === null) &&
              (po(n)
                ? (n.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                  ((n.flags |= 1024), Wt !== null && (au(Wt), (Wt = null)))),
            ql(e, n),
            lt(n),
            null
          );
        case 5:
          jl(n);
          var u = ur($i.current);
          if (((s = n.type), e !== null && n.stateNode != null))
            Sp(e, n, s, a, u),
              e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
          else {
            if (!a) {
              if (n.stateNode === null) throw Error(i(166));
              return lt(n), null;
            }
            if (((e = ur(nn.current)), po(n))) {
              (a = n.stateNode), (s = n.type);
              var d = n.memoizedProps;
              switch (((a[tn] = n), (a[_i] = d), (e = (n.mode & 1) !== 0), s)) {
                case "dialog":
                  Le("cancel", a), Le("close", a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Le("load", a);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Bi.length; u++) Le(Bi[u], a);
                  break;
                case "source":
                  Le("error", a);
                  break;
                case "img":
                case "image":
                case "link":
                  Le("error", a), Le("load", a);
                  break;
                case "details":
                  Le("toggle", a);
                  break;
                case "input":
                  Ns(a, d), Le("invalid", a);
                  break;
                case "select":
                  (a._wrapperState = { wasMultiple: !!d.multiple }),
                    Le("invalid", a);
                  break;
                case "textarea":
                  G(a, d), Le("invalid", a);
              }
              Oa(s, d), (u = null);
              for (var g in d)
                if (d.hasOwnProperty(g)) {
                  var x = d[g];
                  g === "children"
                    ? typeof x == "string"
                      ? a.textContent !== x &&
                        (d.suppressHydrationWarning !== !0 &&
                          io(a.textContent, x, e),
                        (u = ["children", x]))
                      : typeof x == "number" &&
                        a.textContent !== "" + x &&
                        (d.suppressHydrationWarning !== !0 &&
                          io(a.textContent, x, e),
                        (u = ["children", "" + x]))
                    : l.hasOwnProperty(g) &&
                      x != null &&
                      g === "onScroll" &&
                      Le("scroll", a);
                }
              switch (s) {
                case "input":
                  kn(a), Fs(a, d, !0);
                  break;
                case "textarea":
                  kn(a), ie(a);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof d.onClick == "function" && (a.onclick = so);
              }
              (a = u), (n.updateQueue = a), a !== null && (n.flags |= 4);
            } else {
              (g = u.nodeType === 9 ? u : u.ownerDocument),
                e === "http://www.w3.org/1999/xhtml" && (e = pe(s)),
                e === "http://www.w3.org/1999/xhtml"
                  ? s === "script"
                    ? ((e = g.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild)))
                    : typeof a.is == "string"
                    ? (e = g.createElement(s, { is: a.is }))
                    : ((e = g.createElement(s)),
                      s === "select" &&
                        ((g = e),
                        a.multiple
                          ? (g.multiple = !0)
                          : a.size && (g.size = a.size)))
                  : (e = g.createElementNS(e, s)),
                (e[tn] = n),
                (e[_i] = a),
                Ap(e, n, !1, !1),
                (n.stateNode = e);
              e: {
                switch (((g = Ma(s, a)), s)) {
                  case "dialog":
                    Le("cancel", e), Le("close", e), (u = a);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Le("load", e), (u = a);
                    break;
                  case "video":
                  case "audio":
                    for (u = 0; u < Bi.length; u++) Le(Bi[u], e);
                    u = a;
                    break;
                  case "source":
                    Le("error", e), (u = a);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Le("error", e), Le("load", e), (u = a);
                    break;
                  case "details":
                    Le("toggle", e), (u = a);
                    break;
                  case "input":
                    Ns(e, a), (u = yi(e, a)), Le("invalid", e);
                    break;
                  case "option":
                    u = a;
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!a.multiple }),
                      (u = W({}, a, { value: void 0 })),
                      Le("invalid", e);
                    break;
                  case "textarea":
                    G(e, a), (u = D(e, a)), Le("invalid", e);
                    break;
                  default:
                    u = a;
                }
                Oa(s, u), (x = u);
                for (d in x)
                  if (x.hasOwnProperty(d)) {
                    var C = x[d];
                    d === "style"
                      ? Bs(e, C)
                      : d === "dangerouslySetInnerHTML"
                      ? ((C = C ? C.__html : void 0), C != null && Nt(e, C))
                      : d === "children"
                      ? typeof C == "string"
                        ? (s !== "textarea" || C !== "") && cn(e, C)
                        : typeof C == "number" && cn(e, "" + C)
                      : d !== "suppressContentEditableWarning" &&
                        d !== "suppressHydrationWarning" &&
                        d !== "autoFocus" &&
                        (l.hasOwnProperty(d)
                          ? C != null && d === "onScroll" && Le("scroll", e)
                          : C != null && V(e, d, C, g));
                  }
                switch (s) {
                  case "input":
                    kn(e), Fs(e, a, !1);
                    break;
                  case "textarea":
                    kn(e), ie(e);
                    break;
                  case "option":
                    a.value != null &&
                      e.setAttribute("value", "" + xe(a.value));
                    break;
                  case "select":
                    (e.multiple = !!a.multiple),
                      (d = a.value),
                      d != null
                        ? Rn(e, !!a.multiple, d, !1)
                        : a.defaultValue != null &&
                          Rn(e, !!a.multiple, a.defaultValue, !0);
                    break;
                  default:
                    typeof u.onClick == "function" && (e.onclick = so);
                }
                switch (s) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a = !!a.autoFocus;
                    break e;
                  case "img":
                    a = !0;
                    break e;
                  default:
                    a = !1;
                }
              }
              a && (n.flags |= 4);
            }
            n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
          }
          return lt(n), null;
        case 6:
          if (e && n.stateNode != null) Ep(e, n, e.memoizedProps, a);
          else {
            if (typeof a != "string" && n.stateNode === null)
              throw Error(i(166));
            if (((s = ur($i.current)), ur(nn.current), po(n))) {
              if (
                ((a = n.stateNode),
                (s = n.memoizedProps),
                (a[tn] = n),
                (d = a.nodeValue !== s) && ((e = Pt), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    io(a.nodeValue, s, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                      io(a.nodeValue, s, (e.mode & 1) !== 0);
                }
              d && (n.flags |= 4);
            } else
              (a = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(a)),
                (a[tn] = n),
                (n.stateNode = a);
          }
          return lt(n), null;
        case 13:
          if (
            (De(Fe),
            (a = n.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (
              be &&
              kt !== null &&
              (n.mode & 1) !== 0 &&
              (n.flags & 128) === 0
            )
              kd(), Wr(), (n.flags |= 98560), (d = !1);
            else if (((d = po(n)), a !== null && a.dehydrated !== null)) {
              if (e === null) {
                if (!d) throw Error(i(318));
                if (
                  ((d = n.memoizedState),
                  (d = d !== null ? d.dehydrated : null),
                  !d)
                )
                  throw Error(i(317));
                d[tn] = n;
              } else
                Wr(),
                  (n.flags & 128) === 0 && (n.memoizedState = null),
                  (n.flags |= 4);
              lt(n), (d = !1);
            } else Wt !== null && (au(Wt), (Wt = null)), (d = !0);
            if (!d) return n.flags & 65536 ? n : null;
          }
          return (n.flags & 128) !== 0
            ? ((n.lanes = s), n)
            : ((a = a !== null),
              a !== (e !== null && e.memoizedState !== null) &&
                a &&
                ((n.child.flags |= 8192),
                (n.mode & 1) !== 0 &&
                  (e === null || (Fe.current & 1) !== 0
                    ? Ge === 0 && (Ge = 3)
                    : cu())),
              n.updateQueue !== null && (n.flags |= 4),
              lt(n),
              null);
        case 4:
          return (
            qr(),
            ql(e, n),
            e === null && Ii(n.stateNode.containerInfo),
            lt(n),
            null
          );
        case 10:
          return El(n.type._context), lt(n), null;
        case 17:
          return wt(n.type) && ao(), lt(n), null;
        case 19:
          if ((De(Fe), (d = n.memoizedState), d === null)) return lt(n), null;
          if (((a = (n.flags & 128) !== 0), (g = d.rendering), g === null))
            if (a) qi(d, !1);
            else {
              if (Ge !== 0 || (e !== null && (e.flags & 128) !== 0))
                for (e = n.child; e !== null; ) {
                  if (((g = wo(e)), g !== null)) {
                    for (
                      n.flags |= 128,
                        qi(d, !1),
                        a = g.updateQueue,
                        a !== null && ((n.updateQueue = a), (n.flags |= 4)),
                        n.subtreeFlags = 0,
                        a = s,
                        s = n.child;
                      s !== null;

                    )
                      (d = s),
                        (e = a),
                        (d.flags &= 14680066),
                        (g = d.alternate),
                        g === null
                          ? ((d.childLanes = 0),
                            (d.lanes = e),
                            (d.child = null),
                            (d.subtreeFlags = 0),
                            (d.memoizedProps = null),
                            (d.memoizedState = null),
                            (d.updateQueue = null),
                            (d.dependencies = null),
                            (d.stateNode = null))
                          : ((d.childLanes = g.childLanes),
                            (d.lanes = g.lanes),
                            (d.child = g.child),
                            (d.subtreeFlags = 0),
                            (d.deletions = null),
                            (d.memoizedProps = g.memoizedProps),
                            (d.memoizedState = g.memoizedState),
                            (d.updateQueue = g.updateQueue),
                            (d.type = g.type),
                            (e = g.dependencies),
                            (d.dependencies =
                              e === null
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (s = s.sibling);
                    return Re(Fe, (Fe.current & 1) | 2), n.child;
                  }
                  e = e.sibling;
                }
              d.tail !== null &&
                Ue() > ei &&
                ((n.flags |= 128), (a = !0), qi(d, !1), (n.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = wo(g)), e !== null)) {
                if (
                  ((n.flags |= 128),
                  (a = !0),
                  (s = e.updateQueue),
                  s !== null && ((n.updateQueue = s), (n.flags |= 4)),
                  qi(d, !0),
                  d.tail === null &&
                    d.tailMode === "hidden" &&
                    !g.alternate &&
                    !be)
                )
                  return lt(n), null;
              } else
                2 * Ue() - d.renderingStartTime > ei &&
                  s !== 1073741824 &&
                  ((n.flags |= 128), (a = !0), qi(d, !1), (n.lanes = 4194304));
            d.isBackwards
              ? ((g.sibling = n.child), (n.child = g))
              : ((s = d.last),
                s !== null ? (s.sibling = g) : (n.child = g),
                (d.last = g));
          }
          return d.tail !== null
            ? ((n = d.tail),
              (d.rendering = n),
              (d.tail = n.sibling),
              (d.renderingStartTime = Ue()),
              (n.sibling = null),
              (s = Fe.current),
              Re(Fe, a ? (s & 1) | 2 : s & 1),
              n)
            : (lt(n), null);
        case 22:
        case 23:
          return (
            uu(),
            (a = n.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== a && (n.flags |= 8192),
            a && (n.mode & 1) !== 0
              ? (Rt & 1073741824) !== 0 &&
                (lt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
              : lt(n),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(i(156, n.tag));
    }
    function gy(e, n) {
      switch ((vl(n), n.tag)) {
        case 1:
          return (
            wt(n.type) && ao(),
            (e = n.flags),
            e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
          );
        case 3:
          return (
            qr(),
            De(vt),
            De(ot),
            Ml(),
            (e = n.flags),
            (e & 65536) !== 0 && (e & 128) === 0
              ? ((n.flags = (e & -65537) | 128), n)
              : null
          );
        case 5:
          return jl(n), null;
        case 13:
          if (
            (De(Fe), (e = n.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (n.alternate === null) throw Error(i(340));
            Wr();
          }
          return (
            (e = n.flags),
            e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
          );
        case 19:
          return De(Fe), null;
        case 4:
          return qr(), null;
        case 10:
          return El(n.type._context), null;
        case 22:
        case 23:
          return uu(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Ro = !1,
      ut = !1,
      yy = typeof WeakSet == "function" ? WeakSet : Set,
      q = null;
    function Xr(e, n) {
      var s = e.ref;
      if (s !== null)
        if (typeof s == "function")
          try {
            s(null);
          } catch (a) {
            Ve(e, n, a);
          }
        else s.current = null;
    }
    function Yl(e, n, s) {
      try {
        s();
      } catch (a) {
        Ve(e, n, a);
      }
    }
    var Tp = !1;
    function vy(e, n) {
      if (((ul = Zs), (e = rd()), tl(e))) {
        if ("selectionStart" in e)
          var s = { start: e.selectionStart, end: e.selectionEnd };
        else
          e: {
            s = ((s = e.ownerDocument) && s.defaultView) || window;
            var a = s.getSelection && s.getSelection();
            if (a && a.rangeCount !== 0) {
              s = a.anchorNode;
              var u = a.anchorOffset,
                d = a.focusNode;
              a = a.focusOffset;
              try {
                s.nodeType, d.nodeType;
              } catch {
                s = null;
                break e;
              }
              var g = 0,
                x = -1,
                C = -1,
                L = 0,
                _ = 0,
                U = e,
                B = null;
              t: for (;;) {
                for (
                  var K;
                  U !== s || (u !== 0 && U.nodeType !== 3) || (x = g + u),
                    U !== d || (a !== 0 && U.nodeType !== 3) || (C = g + a),
                    U.nodeType === 3 && (g += U.nodeValue.length),
                    (K = U.firstChild) !== null;

                )
                  (B = U), (U = K);
                for (;;) {
                  if (U === e) break t;
                  if (
                    (B === s && ++L === u && (x = g),
                    B === d && ++_ === a && (C = g),
                    (K = U.nextSibling) !== null)
                  )
                    break;
                  (U = B), (B = U.parentNode);
                }
                U = K;
              }
              s = x === -1 || C === -1 ? null : { start: x, end: C };
            } else s = null;
          }
        s = s || { start: 0, end: 0 };
      } else s = null;
      for (
        cl = { focusedElem: e, selectionRange: s }, Zs = !1, q = n;
        q !== null;

      )
        if (
          ((n = q), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)
        )
          (e.return = n), (q = e);
        else
          for (; q !== null; ) {
            n = q;
            try {
              var Y = n.alternate;
              if ((n.flags & 1024) !== 0)
                switch (n.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (Y !== null) {
                      var X = Y.memoizedProps,
                        ze = Y.memoizedState,
                        j = n.stateNode,
                        A = j.getSnapshotBeforeUpdate(
                          n.elementType === n.type ? X : Zt(n.type, X),
                          ze
                        );
                      j.__reactInternalSnapshotBeforeUpdate = A;
                    }
                    break;
                  case 3:
                    var O = n.stateNode.containerInfo;
                    O.nodeType === 1
                      ? (O.textContent = "")
                      : O.nodeType === 9 &&
                        O.documentElement &&
                        O.removeChild(O.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(i(163));
                }
            } catch (Q) {
              Ve(n, n.return, Q);
            }
            if (((e = n.sibling), e !== null)) {
              (e.return = n.return), (q = e);
              break;
            }
            q = n.return;
          }
      return (Y = Tp), (Tp = !1), Y;
    }
    function Yi(e, n, s) {
      var a = n.updateQueue;
      if (((a = a !== null ? a.lastEffect : null), a !== null)) {
        var u = (a = a.next);
        do {
          if ((u.tag & e) === e) {
            var d = u.destroy;
            (u.destroy = void 0), d !== void 0 && Yl(n, s, d);
          }
          u = u.next;
        } while (u !== a);
      }
    }
    function jo(e, n) {
      if (
        ((n = n.updateQueue),
        (n = n !== null ? n.lastEffect : null),
        n !== null)
      ) {
        var s = (n = n.next);
        do {
          if ((s.tag & e) === e) {
            var a = s.create;
            s.destroy = a();
          }
          s = s.next;
        } while (s !== n);
      }
    }
    function Xl(e) {
      var n = e.ref;
      if (n !== null) {
        var s = e.stateNode;
        switch (e.tag) {
          case 5:
            e = s;
            break;
          default:
            e = s;
        }
        typeof n == "function" ? n(e) : (n.current = e);
      }
    }
    function Pp(e) {
      var n = e.alternate;
      n !== null && ((e.alternate = null), Pp(n)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((n = e.stateNode),
          n !== null &&
            (delete n[tn],
            delete n[_i],
            delete n[hl],
            delete n[ey],
            delete n[ty])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    function kp(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Rp(e) {
      e: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || kp(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Jl(e, n, s) {
      var a = e.tag;
      if (a === 5 || a === 6)
        (e = e.stateNode),
          n
            ? s.nodeType === 8
              ? s.parentNode.insertBefore(e, n)
              : s.insertBefore(e, n)
            : (s.nodeType === 8
                ? ((n = s.parentNode), n.insertBefore(e, s))
                : ((n = s), n.appendChild(e)),
              (s = s._reactRootContainer),
              s != null || n.onclick !== null || (n.onclick = so));
      else if (a !== 4 && ((e = e.child), e !== null))
        for (Jl(e, n, s), e = e.sibling; e !== null; )
          Jl(e, n, s), (e = e.sibling);
    }
    function eu(e, n, s) {
      var a = e.tag;
      if (a === 5 || a === 6)
        (e = e.stateNode), n ? s.insertBefore(e, n) : s.appendChild(e);
      else if (a !== 4 && ((e = e.child), e !== null))
        for (eu(e, n, s), e = e.sibling; e !== null; )
          eu(e, n, s), (e = e.sibling);
    }
    var nt = null,
      Kt = !1;
    function Un(e, n, s) {
      for (s = s.child; s !== null; ) jp(e, n, s), (s = s.sibling);
    }
    function jp(e, n, s) {
      if (en && typeof en.onCommitFiberUnmount == "function")
        try {
          en.onCommitFiberUnmount(Us, s);
        } catch {}
      switch (s.tag) {
        case 5:
          ut || Xr(s, n);
        case 6:
          var a = nt,
            u = Kt;
          (nt = null),
            Un(e, n, s),
            (nt = a),
            (Kt = u),
            nt !== null &&
              (Kt
                ? ((e = nt),
                  (s = s.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(s)
                    : e.removeChild(s))
                : nt.removeChild(s.stateNode));
          break;
        case 18:
          nt !== null &&
            (Kt
              ? ((e = nt),
                (s = s.stateNode),
                e.nodeType === 8
                  ? pl(e.parentNode, s)
                  : e.nodeType === 1 && pl(e, s),
                ji(e))
              : pl(nt, s.stateNode));
          break;
        case 4:
          (a = nt),
            (u = Kt),
            (nt = s.stateNode.containerInfo),
            (Kt = !0),
            Un(e, n, s),
            (nt = a),
            (Kt = u);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !ut &&
            ((a = s.updateQueue),
            a !== null && ((a = a.lastEffect), a !== null))
          ) {
            u = a = a.next;
            do {
              var d = u,
                g = d.destroy;
              (d = d.tag),
                g !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Yl(s, n, g),
                (u = u.next);
            } while (u !== a);
          }
          Un(e, n, s);
          break;
        case 1:
          if (
            !ut &&
            (Xr(s, n),
            (a = s.stateNode),
            typeof a.componentWillUnmount == "function")
          )
            try {
              (a.props = s.memoizedProps),
                (a.state = s.memoizedState),
                a.componentWillUnmount();
            } catch (x) {
              Ve(s, n, x);
            }
          Un(e, n, s);
          break;
        case 21:
          Un(e, n, s);
          break;
        case 22:
          s.mode & 1
            ? ((ut = (a = ut) || s.memoizedState !== null),
              Un(e, n, s),
              (ut = a))
            : Un(e, n, s);
          break;
        default:
          Un(e, n, s);
      }
    }
    function Op(e) {
      var n = e.updateQueue;
      if (n !== null) {
        e.updateQueue = null;
        var s = e.stateNode;
        s === null && (s = e.stateNode = new yy()),
          n.forEach(function (a) {
            var u = ky.bind(null, e, a);
            s.has(a) || (s.add(a), a.then(u, u));
          });
      }
    }
    function Gt(e, n) {
      var s = n.deletions;
      if (s !== null)
        for (var a = 0; a < s.length; a++) {
          var u = s[a];
          try {
            var d = e,
              g = n,
              x = g;
            e: for (; x !== null; ) {
              switch (x.tag) {
                case 5:
                  (nt = x.stateNode), (Kt = !1);
                  break e;
                case 3:
                  (nt = x.stateNode.containerInfo), (Kt = !0);
                  break e;
                case 4:
                  (nt = x.stateNode.containerInfo), (Kt = !0);
                  break e;
              }
              x = x.return;
            }
            if (nt === null) throw Error(i(160));
            jp(d, g, u), (nt = null), (Kt = !1);
            var C = u.alternate;
            C !== null && (C.return = null), (u.return = null);
          } catch (L) {
            Ve(u, n, L);
          }
        }
      if (n.subtreeFlags & 12854)
        for (n = n.child; n !== null; ) Mp(n, e), (n = n.sibling);
    }
    function Mp(e, n) {
      var s = e.alternate,
        a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((Gt(n, e), sn(e), a & 4)) {
            try {
              Yi(3, e, e.return), jo(3, e);
            } catch (X) {
              Ve(e, e.return, X);
            }
            try {
              Yi(5, e, e.return);
            } catch (X) {
              Ve(e, e.return, X);
            }
          }
          break;
        case 1:
          Gt(n, e), sn(e), a & 512 && s !== null && Xr(s, s.return);
          break;
        case 5:
          if (
            (Gt(n, e),
            sn(e),
            a & 512 && s !== null && Xr(s, s.return),
            e.flags & 32)
          ) {
            var u = e.stateNode;
            try {
              cn(u, "");
            } catch (X) {
              Ve(e, e.return, X);
            }
          }
          if (a & 4 && ((u = e.stateNode), u != null)) {
            var d = e.memoizedProps,
              g = s !== null ? s.memoizedProps : d,
              x = e.type,
              C = e.updateQueue;
            if (((e.updateQueue = null), C !== null))
              try {
                x === "input" &&
                  d.type === "radio" &&
                  d.name != null &&
                  bs(u, d),
                  Ma(x, g);
                var L = Ma(x, d);
                for (g = 0; g < C.length; g += 2) {
                  var _ = C[g],
                    U = C[g + 1];
                  _ === "style"
                    ? Bs(u, U)
                    : _ === "dangerouslySetInnerHTML"
                    ? Nt(u, U)
                    : _ === "children"
                    ? cn(u, U)
                    : V(u, _, U, L);
                }
                switch (x) {
                  case "input":
                    vi(u, d);
                    break;
                  case "textarea":
                    ne(u, d);
                    break;
                  case "select":
                    var B = u._wrapperState.wasMultiple;
                    u._wrapperState.wasMultiple = !!d.multiple;
                    var K = d.value;
                    K != null
                      ? Rn(u, !!d.multiple, K, !1)
                      : B !== !!d.multiple &&
                        (d.defaultValue != null
                          ? Rn(u, !!d.multiple, d.defaultValue, !0)
                          : Rn(u, !!d.multiple, d.multiple ? [] : "", !1));
                }
                u[_i] = d;
              } catch (X) {
                Ve(e, e.return, X);
              }
          }
          break;
        case 6:
          if ((Gt(n, e), sn(e), a & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            (u = e.stateNode), (d = e.memoizedProps);
            try {
              u.nodeValue = d;
            } catch (X) {
              Ve(e, e.return, X);
            }
          }
          break;
        case 3:
          if (
            (Gt(n, e),
            sn(e),
            a & 4 && s !== null && s.memoizedState.isDehydrated)
          )
            try {
              ji(n.containerInfo);
            } catch (X) {
              Ve(e, e.return, X);
            }
          break;
        case 4:
          Gt(n, e), sn(e);
          break;
        case 13:
          Gt(n, e),
            sn(e),
            (u = e.child),
            u.flags & 8192 &&
              ((d = u.memoizedState !== null),
              (u.stateNode.isHidden = d),
              !d ||
                (u.alternate !== null && u.alternate.memoizedState !== null) ||
                (ru = Ue())),
            a & 4 && Op(e);
          break;
        case 22:
          if (
            ((_ = s !== null && s.memoizedState !== null),
            e.mode & 1 ? ((ut = (L = ut) || _), Gt(n, e), (ut = L)) : Gt(n, e),
            sn(e),
            a & 8192)
          ) {
            if (
              ((L = e.memoizedState !== null),
              (e.stateNode.isHidden = L) && !_ && (e.mode & 1) !== 0)
            )
              for (q = e, _ = e.child; _ !== null; ) {
                for (U = q = _; q !== null; ) {
                  switch (((B = q), (K = B.child), B.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Yi(4, B, B.return);
                      break;
                    case 1:
                      Xr(B, B.return);
                      var Y = B.stateNode;
                      if (typeof Y.componentWillUnmount == "function") {
                        (a = B), (s = B.return);
                        try {
                          (n = a),
                            (Y.props = n.memoizedProps),
                            (Y.state = n.memoizedState),
                            Y.componentWillUnmount();
                        } catch (X) {
                          Ve(a, s, X);
                        }
                      }
                      break;
                    case 5:
                      Xr(B, B.return);
                      break;
                    case 22:
                      if (B.memoizedState !== null) {
                        Np(U);
                        continue;
                      }
                  }
                  K !== null ? ((K.return = B), (q = K)) : Np(U);
                }
                _ = _.sibling;
              }
            e: for (_ = null, U = e; ; ) {
              if (U.tag === 5) {
                if (_ === null) {
                  _ = U;
                  try {
                    (u = U.stateNode),
                      L
                        ? ((d = u.style),
                          typeof d.setProperty == "function"
                            ? d.setProperty("display", "none", "important")
                            : (d.display = "none"))
                        : ((x = U.stateNode),
                          (C = U.memoizedProps.style),
                          (g =
                            C != null && C.hasOwnProperty("display")
                              ? C.display
                              : null),
                          (x.style.display = wi("display", g)));
                  } catch (X) {
                    Ve(e, e.return, X);
                  }
                }
              } else if (U.tag === 6) {
                if (_ === null)
                  try {
                    U.stateNode.nodeValue = L ? "" : U.memoizedProps;
                  } catch (X) {
                    Ve(e, e.return, X);
                  }
              } else if (
                ((U.tag !== 22 && U.tag !== 23) ||
                  U.memoizedState === null ||
                  U === e) &&
                U.child !== null
              ) {
                (U.child.return = U), (U = U.child);
                continue;
              }
              if (U === e) break e;
              for (; U.sibling === null; ) {
                if (U.return === null || U.return === e) break e;
                _ === U && (_ = null), (U = U.return);
              }
              _ === U && (_ = null),
                (U.sibling.return = U.return),
                (U = U.sibling);
            }
          }
          break;
        case 19:
          Gt(n, e), sn(e), a & 4 && Op(e);
          break;
        case 21:
          break;
        default:
          Gt(n, e), sn(e);
      }
    }
    function sn(e) {
      var n = e.flags;
      if (n & 2) {
        try {
          e: {
            for (var s = e.return; s !== null; ) {
              if (kp(s)) {
                var a = s;
                break e;
              }
              s = s.return;
            }
            throw Error(i(160));
          }
          switch (a.tag) {
            case 5:
              var u = a.stateNode;
              a.flags & 32 && (cn(u, ""), (a.flags &= -33));
              var d = Rp(e);
              eu(e, d, u);
              break;
            case 3:
            case 4:
              var g = a.stateNode.containerInfo,
                x = Rp(e);
              Jl(e, x, g);
              break;
            default:
              throw Error(i(161));
          }
        } catch (C) {
          Ve(e, e.return, C);
        }
        e.flags &= -3;
      }
      n & 4096 && (e.flags &= -4097);
    }
    function wy(e, n, s) {
      (q = e), Lp(e);
    }
    function Lp(e, n, s) {
      for (var a = (e.mode & 1) !== 0; q !== null; ) {
        var u = q,
          d = u.child;
        if (u.tag === 22 && a) {
          var g = u.memoizedState !== null || Ro;
          if (!g) {
            var x = u.alternate,
              C = (x !== null && x.memoizedState !== null) || ut;
            x = Ro;
            var L = ut;
            if (((Ro = g), (ut = C) && !L))
              for (q = u; q !== null; )
                (g = q),
                  (C = g.child),
                  g.tag === 22 && g.memoizedState !== null
                    ? bp(u)
                    : C !== null
                    ? ((C.return = g), (q = C))
                    : bp(u);
            for (; d !== null; ) (q = d), Lp(d), (d = d.sibling);
            (q = u), (Ro = x), (ut = L);
          }
          Dp(e);
        } else
          (u.subtreeFlags & 8772) !== 0 && d !== null
            ? ((d.return = u), (q = d))
            : Dp(e);
      }
    }
    function Dp(e) {
      for (; q !== null; ) {
        var n = q;
        if ((n.flags & 8772) !== 0) {
          var s = n.alternate;
          try {
            if ((n.flags & 8772) !== 0)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  ut || jo(5, n);
                  break;
                case 1:
                  var a = n.stateNode;
                  if (n.flags & 4 && !ut)
                    if (s === null) a.componentDidMount();
                    else {
                      var u =
                        n.elementType === n.type
                          ? s.memoizedProps
                          : Zt(n.type, s.memoizedProps);
                      a.componentDidUpdate(
                        u,
                        s.memoizedState,
                        a.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var d = n.updateQueue;
                  d !== null && Nd(n, d, a);
                  break;
                case 3:
                  var g = n.updateQueue;
                  if (g !== null) {
                    if (((s = null), n.child !== null))
                      switch (n.child.tag) {
                        case 5:
                          s = n.child.stateNode;
                          break;
                        case 1:
                          s = n.child.stateNode;
                      }
                    Nd(n, g, s);
                  }
                  break;
                case 5:
                  var x = n.stateNode;
                  if (s === null && n.flags & 4) {
                    s = x;
                    var C = n.memoizedProps;
                    switch (n.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        C.autoFocus && s.focus();
                        break;
                      case "img":
                        C.src && (s.src = C.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (n.memoizedState === null) {
                    var L = n.alternate;
                    if (L !== null) {
                      var _ = L.memoizedState;
                      if (_ !== null) {
                        var U = _.dehydrated;
                        U !== null && ji(U);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(i(163));
              }
            ut || (n.flags & 512 && Xl(n));
          } catch (B) {
            Ve(n, n.return, B);
          }
        }
        if (n === e) {
          q = null;
          break;
        }
        if (((s = n.sibling), s !== null)) {
          (s.return = n.return), (q = s);
          break;
        }
        q = n.return;
      }
    }
    function Np(e) {
      for (; q !== null; ) {
        var n = q;
        if (n === e) {
          q = null;
          break;
        }
        var s = n.sibling;
        if (s !== null) {
          (s.return = n.return), (q = s);
          break;
        }
        q = n.return;
      }
    }
    function bp(e) {
      for (; q !== null; ) {
        var n = q;
        try {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              var s = n.return;
              try {
                jo(4, n);
              } catch (C) {
                Ve(n, s, C);
              }
              break;
            case 1:
              var a = n.stateNode;
              if (typeof a.componentDidMount == "function") {
                var u = n.return;
                try {
                  a.componentDidMount();
                } catch (C) {
                  Ve(n, u, C);
                }
              }
              var d = n.return;
              try {
                Xl(n);
              } catch (C) {
                Ve(n, d, C);
              }
              break;
            case 5:
              var g = n.return;
              try {
                Xl(n);
              } catch (C) {
                Ve(n, g, C);
              }
          }
        } catch (C) {
          Ve(n, n.return, C);
        }
        if (n === e) {
          q = null;
          break;
        }
        var x = n.sibling;
        if (x !== null) {
          (x.return = n.return), (q = x);
          break;
        }
        q = n.return;
      }
    }
    var xy = Math.ceil,
      Oo = J.ReactCurrentDispatcher,
      tu = J.ReactCurrentOwner,
      Vt = J.ReactCurrentBatchConfig,
      we = 0,
      Ye = null,
      Ze = null,
      rt = 0,
      Rt = 0,
      Jr = Fn(0),
      Ge = 0,
      Xi = null,
      fr = 0,
      Mo = 0,
      nu = 0,
      Ji = null,
      Ct = null,
      ru = 0,
      ei = 1 / 0,
      wn = null,
      Lo = !1,
      iu = null,
      zn = null,
      Do = !1,
      Qn = null,
      No = 0,
      es = 0,
      su = null,
      bo = -1,
      Fo = 0;
    function mt() {
      return (we & 6) !== 0 ? Ue() : bo !== -1 ? bo : (bo = Ue());
    }
    function Hn(e) {
      return (e.mode & 1) === 0
        ? 1
        : (we & 2) !== 0 && rt !== 0
        ? rt & -rt
        : ry.transition !== null
        ? (Fo === 0 && (Fo = Rf()), Fo)
        : ((e = Te),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bf(e.type))),
          e);
    }
    function qt(e, n, s, a) {
      if (50 < es) throw ((es = 0), (su = null), Error(i(185)));
      Ei(e, s, a),
        ((we & 2) === 0 || e !== Ye) &&
          (e === Ye && ((we & 2) === 0 && (Mo |= s), Ge === 4 && $n(e, rt)),
          At(e, a),
          s === 1 &&
            we === 0 &&
            (n.mode & 1) === 0 &&
            ((ei = Ue() + 500), uo && In()));
    }
    function At(e, n) {
      var s = e.callbackNode;
      rg(e, n);
      var a = Hs(e, e === Ye ? rt : 0);
      if (a === 0)
        s !== null && Tf(s), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((n = a & -a), e.callbackPriority !== n)) {
        if ((s != null && Tf(s), n === 1))
          e.tag === 0 ? ny(Bp.bind(null, e)) : Ad(Bp.bind(null, e)),
            Xg(function () {
              (we & 6) === 0 && In();
            }),
            (s = null);
        else {
          switch (jf(a)) {
            case 1:
              s = Ia;
              break;
            case 4:
              s = Pf;
              break;
            case 16:
              s = _s;
              break;
            case 536870912:
              s = kf;
              break;
            default:
              s = _s;
          }
          s = $p(s, Fp.bind(null, e));
        }
        (e.callbackPriority = n), (e.callbackNode = s);
      }
    }
    function Fp(e, n) {
      if (((bo = -1), (Fo = 0), (we & 6) !== 0)) throw Error(i(327));
      var s = e.callbackNode;
      if (ti() && e.callbackNode !== s) return null;
      var a = Hs(e, e === Ye ? rt : 0);
      if (a === 0) return null;
      if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || n) n = Bo(e, a);
      else {
        n = a;
        var u = we;
        we |= 2;
        var d = Vp();
        (Ye !== e || rt !== n) && ((wn = null), (ei = Ue() + 500), pr(e, n));
        do
          try {
            Sy();
            break;
          } catch (x) {
            Ip(e, x);
          }
        while (!0);
        Sl(),
          (Oo.current = d),
          (we = u),
          Ze !== null ? (n = 0) : ((Ye = null), (rt = 0), (n = Ge));
      }
      if (n !== 0) {
        if (
          (n === 2 && ((u = Va(e)), u !== 0 && ((a = u), (n = ou(e, u)))),
          n === 1)
        )
          throw ((s = Xi), pr(e, 0), $n(e, a), At(e, Ue()), s);
        if (n === 6) $n(e, a);
        else {
          if (
            ((u = e.current.alternate),
            (a & 30) === 0 &&
              !Cy(u) &&
              ((n = Bo(e, a)),
              n === 2 && ((d = Va(e)), d !== 0 && ((a = d), (n = ou(e, d)))),
              n === 1))
          )
            throw ((s = Xi), pr(e, 0), $n(e, a), At(e, Ue()), s);
          switch (((e.finishedWork = u), (e.finishedLanes = a), n)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 2:
              hr(e, Ct, wn);
              break;
            case 3:
              if (
                ($n(e, a),
                (a & 130023424) === a && ((n = ru + 500 - Ue()), 10 < n))
              ) {
                if (Hs(e, 0) !== 0) break;
                if (((u = e.suspendedLanes), (u & a) !== a)) {
                  mt(), (e.pingedLanes |= e.suspendedLanes & u);
                  break;
                }
                e.timeoutHandle = dl(hr.bind(null, e, Ct, wn), n);
                break;
              }
              hr(e, Ct, wn);
              break;
            case 4:
              if (($n(e, a), (a & 4194240) === a)) break;
              for (n = e.eventTimes, u = -1; 0 < a; ) {
                var g = 31 - Ht(a);
                (d = 1 << g), (g = n[g]), g > u && (u = g), (a &= ~d);
              }
              if (
                ((a = u),
                (a = Ue() - a),
                (a =
                  (120 > a
                    ? 120
                    : 480 > a
                    ? 480
                    : 1080 > a
                    ? 1080
                    : 1920 > a
                    ? 1920
                    : 3e3 > a
                    ? 3e3
                    : 4320 > a
                    ? 4320
                    : 1960 * xy(a / 1960)) - a),
                10 < a)
              ) {
                e.timeoutHandle = dl(hr.bind(null, e, Ct, wn), a);
                break;
              }
              hr(e, Ct, wn);
              break;
            case 5:
              hr(e, Ct, wn);
              break;
            default:
              throw Error(i(329));
          }
        }
      }
      return At(e, Ue()), e.callbackNode === s ? Fp.bind(null, e) : null;
    }
    function ou(e, n) {
      var s = Ji;
      return (
        e.current.memoizedState.isDehydrated && (pr(e, n).flags |= 256),
        (e = Bo(e, n)),
        e !== 2 && ((n = Ct), (Ct = s), n !== null && au(n)),
        e
      );
    }
    function au(e) {
      Ct === null ? (Ct = e) : Ct.push.apply(Ct, e);
    }
    function Cy(e) {
      for (var n = e; ; ) {
        if (n.flags & 16384) {
          var s = n.updateQueue;
          if (s !== null && ((s = s.stores), s !== null))
            for (var a = 0; a < s.length; a++) {
              var u = s[a],
                d = u.getSnapshot;
              u = u.value;
              try {
                if (!$t(d(), u)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((s = n.child), n.subtreeFlags & 16384 && s !== null))
          (s.return = n), (n = s);
        else {
          if (n === e) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return !0;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      return !0;
    }
    function $n(e, n) {
      for (
        n &= ~nu,
          n &= ~Mo,
          e.suspendedLanes |= n,
          e.pingedLanes &= ~n,
          e = e.expirationTimes;
        0 < n;

      ) {
        var s = 31 - Ht(n),
          a = 1 << s;
        (e[s] = -1), (n &= ~a);
      }
    }
    function Bp(e) {
      if ((we & 6) !== 0) throw Error(i(327));
      ti();
      var n = Hs(e, 0);
      if ((n & 1) === 0) return At(e, Ue()), null;
      var s = Bo(e, n);
      if (e.tag !== 0 && s === 2) {
        var a = Va(e);
        a !== 0 && ((n = a), (s = ou(e, a)));
      }
      if (s === 1) throw ((s = Xi), pr(e, 0), $n(e, n), At(e, Ue()), s);
      if (s === 6) throw Error(i(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = n),
        hr(e, Ct, wn),
        At(e, Ue()),
        null
      );
    }
    function lu(e, n) {
      var s = we;
      we |= 1;
      try {
        return e(n);
      } finally {
        (we = s), we === 0 && ((ei = Ue() + 500), uo && In());
      }
    }
    function dr(e) {
      Qn !== null && Qn.tag === 0 && (we & 6) === 0 && ti();
      var n = we;
      we |= 1;
      var s = Vt.transition,
        a = Te;
      try {
        if (((Vt.transition = null), (Te = 1), e)) return e();
      } finally {
        (Te = a), (Vt.transition = s), (we = n), (we & 6) === 0 && In();
      }
    }
    function uu() {
      (Rt = Jr.current), De(Jr);
    }
    function pr(e, n) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var s = e.timeoutHandle;
      if ((s !== -1 && ((e.timeoutHandle = -1), Yg(s)), Ze !== null))
        for (s = Ze.return; s !== null; ) {
          var a = s;
          switch ((vl(a), a.tag)) {
            case 1:
              (a = a.type.childContextTypes), a != null && ao();
              break;
            case 3:
              qr(), De(vt), De(ot), Ml();
              break;
            case 5:
              jl(a);
              break;
            case 4:
              qr();
              break;
            case 13:
              De(Fe);
              break;
            case 19:
              De(Fe);
              break;
            case 10:
              El(a.type._context);
              break;
            case 22:
            case 23:
              uu();
          }
          s = s.return;
        }
      if (
        ((Ye = e),
        (Ze = e = Wn(e.current, null)),
        (rt = Rt = n),
        (Ge = 0),
        (Xi = null),
        (nu = Mo = fr = 0),
        (Ct = Ji = null),
        lr !== null)
      ) {
        for (n = 0; n < lr.length; n++)
          if (((s = lr[n]), (a = s.interleaved), a !== null)) {
            s.interleaved = null;
            var u = a.next,
              d = s.pending;
            if (d !== null) {
              var g = d.next;
              (d.next = u), (a.next = g);
            }
            s.pending = a;
          }
        lr = null;
      }
      return e;
    }
    function Ip(e, n) {
      do {
        var s = Ze;
        try {
          if ((Sl(), (xo.current = Eo), Co)) {
            for (var a = Be.memoizedState; a !== null; ) {
              var u = a.queue;
              u !== null && (u.pending = null), (a = a.next);
            }
            Co = !1;
          }
          if (
            ((cr = 0),
            (qe = Ke = Be = null),
            (Wi = !1),
            (Zi = 0),
            (tu.current = null),
            s === null || s.return === null)
          ) {
            (Ge = 1), (Xi = n), (Ze = null);
            break;
          }
          e: {
            var d = e,
              g = s.return,
              x = s,
              C = n;
            if (
              ((n = rt),
              (x.flags |= 32768),
              C !== null && typeof C == "object" && typeof C.then == "function")
            ) {
              var L = C,
                _ = x,
                U = _.tag;
              if ((_.mode & 1) === 0 && (U === 0 || U === 11 || U === 15)) {
                var B = _.alternate;
                B
                  ? ((_.updateQueue = B.updateQueue),
                    (_.memoizedState = B.memoizedState),
                    (_.lanes = B.lanes))
                  : ((_.updateQueue = null), (_.memoizedState = null));
              }
              var K = up(g);
              if (K !== null) {
                (K.flags &= -257),
                  cp(K, g, x, d, n),
                  K.mode & 1 && lp(d, L, n),
                  (n = K),
                  (C = L);
                var Y = n.updateQueue;
                if (Y === null) {
                  var X = new Set();
                  X.add(C), (n.updateQueue = X);
                } else Y.add(C);
                break e;
              } else {
                if ((n & 1) === 0) {
                  lp(d, L, n), cu();
                  break e;
                }
                C = Error(i(426));
              }
            } else if (be && x.mode & 1) {
              var ze = up(g);
              if (ze !== null) {
                (ze.flags & 65536) === 0 && (ze.flags |= 256),
                  cp(ze, g, x, d, n),
                  Cl(Yr(C, x));
                break e;
              }
            }
            (d = C = Yr(C, x)),
              Ge !== 4 && (Ge = 2),
              Ji === null ? (Ji = [d]) : Ji.push(d),
              (d = g);
            do {
              switch (d.tag) {
                case 3:
                  (d.flags |= 65536), (n &= -n), (d.lanes |= n);
                  var j = op(d, C, n);
                  Dd(d, j);
                  break e;
                case 1:
                  x = C;
                  var A = d.type,
                    O = d.stateNode;
                  if (
                    (d.flags & 128) === 0 &&
                    (typeof A.getDerivedStateFromError == "function" ||
                      (O !== null &&
                        typeof O.componentDidCatch == "function" &&
                        (zn === null || !zn.has(O))))
                  ) {
                    (d.flags |= 65536), (n &= -n), (d.lanes |= n);
                    var Q = ap(d, x, n);
                    Dd(d, Q);
                    break e;
                  }
              }
              d = d.return;
            } while (d !== null);
          }
          Up(s);
        } catch (ee) {
          (n = ee), Ze === s && s !== null && (Ze = s = s.return);
          continue;
        }
        break;
      } while (!0);
    }
    function Vp() {
      var e = Oo.current;
      return (Oo.current = Eo), e === null ? Eo : e;
    }
    function cu() {
      (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4),
        Ye === null ||
          ((fr & 268435455) === 0 && (Mo & 268435455) === 0) ||
          $n(Ye, rt);
    }
    function Bo(e, n) {
      var s = we;
      we |= 2;
      var a = Vp();
      (Ye !== e || rt !== n) && ((wn = null), pr(e, n));
      do
        try {
          Ay();
          break;
        } catch (u) {
          Ip(e, u);
        }
      while (!0);
      if ((Sl(), (we = s), (Oo.current = a), Ze !== null)) throw Error(i(261));
      return (Ye = null), (rt = 0), Ge;
    }
    function Ay() {
      for (; Ze !== null; ) _p(Ze);
    }
    function Sy() {
      for (; Ze !== null && !K1(); ) _p(Ze);
    }
    function _p(e) {
      var n = Hp(e.alternate, e, Rt);
      (e.memoizedProps = e.pendingProps),
        n === null ? Up(e) : (Ze = n),
        (tu.current = null);
    }
    function Up(e) {
      var n = e;
      do {
        var s = n.alternate;
        if (((e = n.return), (n.flags & 32768) === 0)) {
          if (((s = my(s, n, Rt)), s !== null)) {
            Ze = s;
            return;
          }
        } else {
          if (((s = gy(s, n)), s !== null)) {
            (s.flags &= 32767), (Ze = s);
            return;
          }
          if (e !== null)
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          else {
            (Ge = 6), (Ze = null);
            return;
          }
        }
        if (((n = n.sibling), n !== null)) {
          Ze = n;
          return;
        }
        Ze = n = e;
      } while (n !== null);
      Ge === 0 && (Ge = 5);
    }
    function hr(e, n, s) {
      var a = Te,
        u = Vt.transition;
      try {
        (Vt.transition = null), (Te = 1), Ey(e, n, s, a);
      } finally {
        (Vt.transition = u), (Te = a);
      }
      return null;
    }
    function Ey(e, n, s, a) {
      do ti();
      while (Qn !== null);
      if ((we & 6) !== 0) throw Error(i(327));
      s = e.finishedWork;
      var u = e.finishedLanes;
      if (s === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), s === e.current))
        throw Error(i(177));
      (e.callbackNode = null), (e.callbackPriority = 0);
      var d = s.lanes | s.childLanes;
      if (
        (ig(e, d),
        e === Ye && ((Ze = Ye = null), (rt = 0)),
        ((s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0) ||
          Do ||
          ((Do = !0),
          $p(_s, function () {
            return ti(), null;
          })),
        (d = (s.flags & 15990) !== 0),
        (s.subtreeFlags & 15990) !== 0 || d)
      ) {
        (d = Vt.transition), (Vt.transition = null);
        var g = Te;
        Te = 1;
        var x = we;
        (we |= 4),
          (tu.current = null),
          vy(e, s),
          Mp(s, e),
          Hg(cl),
          (Zs = !!ul),
          (cl = ul = null),
          (e.current = s),
          wy(s),
          G1(),
          (we = x),
          (Te = g),
          (Vt.transition = d);
      } else e.current = s;
      if (
        (Do && ((Do = !1), (Qn = e), (No = u)),
        (d = e.pendingLanes),
        d === 0 && (zn = null),
        X1(s.stateNode),
        At(e, Ue()),
        n !== null)
      )
        for (a = e.onRecoverableError, s = 0; s < n.length; s++)
          (u = n[s]), a(u.value, { componentStack: u.stack, digest: u.digest });
      if (Lo) throw ((Lo = !1), (e = iu), (iu = null), e);
      return (
        (No & 1) !== 0 && e.tag !== 0 && ti(),
        (d = e.pendingLanes),
        (d & 1) !== 0 ? (e === su ? es++ : ((es = 0), (su = e))) : (es = 0),
        In(),
        null
      );
    }
    function ti() {
      if (Qn !== null) {
        var e = jf(No),
          n = Vt.transition,
          s = Te;
        try {
          if (((Vt.transition = null), (Te = 16 > e ? 16 : e), Qn === null))
            var a = !1;
          else {
            if (((e = Qn), (Qn = null), (No = 0), (we & 6) !== 0))
              throw Error(i(331));
            var u = we;
            for (we |= 4, q = e.current; q !== null; ) {
              var d = q,
                g = d.child;
              if ((q.flags & 16) !== 0) {
                var x = d.deletions;
                if (x !== null) {
                  for (var C = 0; C < x.length; C++) {
                    var L = x[C];
                    for (q = L; q !== null; ) {
                      var _ = q;
                      switch (_.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Yi(8, _, d);
                      }
                      var U = _.child;
                      if (U !== null) (U.return = _), (q = U);
                      else
                        for (; q !== null; ) {
                          _ = q;
                          var B = _.sibling,
                            K = _.return;
                          if ((Pp(_), _ === L)) {
                            q = null;
                            break;
                          }
                          if (B !== null) {
                            (B.return = K), (q = B);
                            break;
                          }
                          q = K;
                        }
                    }
                  }
                  var Y = d.alternate;
                  if (Y !== null) {
                    var X = Y.child;
                    if (X !== null) {
                      Y.child = null;
                      do {
                        var ze = X.sibling;
                        (X.sibling = null), (X = ze);
                      } while (X !== null);
                    }
                  }
                  q = d;
                }
              }
              if ((d.subtreeFlags & 2064) !== 0 && g !== null)
                (g.return = d), (q = g);
              else
                e: for (; q !== null; ) {
                  if (((d = q), (d.flags & 2048) !== 0))
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yi(9, d, d.return);
                    }
                  var j = d.sibling;
                  if (j !== null) {
                    (j.return = d.return), (q = j);
                    break e;
                  }
                  q = d.return;
                }
            }
            var A = e.current;
            for (q = A; q !== null; ) {
              g = q;
              var O = g.child;
              if ((g.subtreeFlags & 2064) !== 0 && O !== null)
                (O.return = g), (q = O);
              else
                e: for (g = A; q !== null; ) {
                  if (((x = q), (x.flags & 2048) !== 0))
                    try {
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          jo(9, x);
                      }
                    } catch (ee) {
                      Ve(x, x.return, ee);
                    }
                  if (x === g) {
                    q = null;
                    break e;
                  }
                  var Q = x.sibling;
                  if (Q !== null) {
                    (Q.return = x.return), (q = Q);
                    break e;
                  }
                  q = x.return;
                }
            }
            if (
              ((we = u),
              In(),
              en && typeof en.onPostCommitFiberRoot == "function")
            )
              try {
                en.onPostCommitFiberRoot(Us, e);
              } catch {}
            a = !0;
          }
          return a;
        } finally {
          (Te = s), (Vt.transition = n);
        }
      }
      return !1;
    }
    function zp(e, n, s) {
      (n = Yr(s, n)),
        (n = op(e, n, 1)),
        (e = _n(e, n, 1)),
        (n = mt()),
        e !== null && (Ei(e, 1, n), At(e, n));
    }
    function Ve(e, n, s) {
      if (e.tag === 3) zp(e, e, s);
      else
        for (; n !== null; ) {
          if (n.tag === 3) {
            zp(n, e, s);
            break;
          } else if (n.tag === 1) {
            var a = n.stateNode;
            if (
              typeof n.type.getDerivedStateFromError == "function" ||
              (typeof a.componentDidCatch == "function" &&
                (zn === null || !zn.has(a)))
            ) {
              (e = Yr(s, e)),
                (e = ap(n, e, 1)),
                (n = _n(n, e, 1)),
                (e = mt()),
                n !== null && (Ei(n, 1, e), At(n, e));
              break;
            }
          }
          n = n.return;
        }
    }
    function Ty(e, n, s) {
      var a = e.pingCache;
      a !== null && a.delete(n),
        (n = mt()),
        (e.pingedLanes |= e.suspendedLanes & s),
        Ye === e &&
          (rt & s) === s &&
          (Ge === 4 || (Ge === 3 && (rt & 130023424) === rt && 500 > Ue() - ru)
            ? pr(e, 0)
            : (nu |= s)),
        At(e, n);
    }
    function Qp(e, n) {
      n === 0 &&
        ((e.mode & 1) === 0
          ? (n = 1)
          : ((n = Qs), (Qs <<= 1), (Qs & 130023424) === 0 && (Qs = 4194304)));
      var s = mt();
      (e = gn(e, n)), e !== null && (Ei(e, n, s), At(e, s));
    }
    function Py(e) {
      var n = e.memoizedState,
        s = 0;
      n !== null && (s = n.retryLane), Qp(e, s);
    }
    function ky(e, n) {
      var s = 0;
      switch (e.tag) {
        case 13:
          var a = e.stateNode,
            u = e.memoizedState;
          u !== null && (s = u.retryLane);
          break;
        case 19:
          a = e.stateNode;
          break;
        default:
          throw Error(i(314));
      }
      a !== null && a.delete(n), Qp(e, s);
    }
    var Hp;
    Hp = function (e, n, s) {
      if (e !== null)
        if (e.memoizedProps !== n.pendingProps || vt.current) xt = !0;
        else {
          if ((e.lanes & s) === 0 && (n.flags & 128) === 0)
            return (xt = !1), hy(e, n, s);
          xt = (e.flags & 131072) !== 0;
        }
      else (xt = !1), be && (n.flags & 1048576) !== 0 && Sd(n, fo, n.index);
      switch (((n.lanes = 0), n.tag)) {
        case 2:
          var a = n.type;
          ko(e, n), (e = n.pendingProps);
          var u = Qr(n, ot.current);
          Gr(n, s), (u = Nl(null, n, a, e, u, s));
          var d = bl();
          return (
            (n.flags |= 1),
            typeof u == "object" &&
            u !== null &&
            typeof u.render == "function" &&
            u.$$typeof === void 0
              ? ((n.tag = 1),
                (n.memoizedState = null),
                (n.updateQueue = null),
                wt(a) ? ((d = !0), lo(n)) : (d = !1),
                (n.memoizedState =
                  u.state !== null && u.state !== void 0 ? u.state : null),
                kl(n),
                (u.updater = To),
                (n.stateNode = u),
                (u._reactInternals = n),
                Ul(n, a, e, s),
                (n = $l(null, n, a, !0, d, s)))
              : ((n.tag = 0),
                be && d && yl(n),
                ht(null, n, u, s),
                (n = n.child)),
            n
          );
        case 16:
          a = n.elementType;
          e: {
            switch (
              (ko(e, n),
              (e = n.pendingProps),
              (u = a._init),
              (a = u(a._payload)),
              (n.type = a),
              (u = n.tag = jy(a)),
              (e = Zt(a, e)),
              u)
            ) {
              case 0:
                n = Hl(null, n, a, e, s);
                break e;
              case 1:
                n = gp(null, n, a, e, s);
                break e;
              case 11:
                n = fp(null, n, a, e, s);
                break e;
              case 14:
                n = dp(null, n, a, Zt(a.type, e), s);
                break e;
            }
            throw Error(i(306, a, ""));
          }
          return n;
        case 0:
          return (
            (a = n.type),
            (u = n.pendingProps),
            (u = n.elementType === a ? u : Zt(a, u)),
            Hl(e, n, a, u, s)
          );
        case 1:
          return (
            (a = n.type),
            (u = n.pendingProps),
            (u = n.elementType === a ? u : Zt(a, u)),
            gp(e, n, a, u, s)
          );
        case 3:
          e: {
            if ((yp(n), e === null)) throw Error(i(387));
            (a = n.pendingProps),
              (d = n.memoizedState),
              (u = d.element),
              Ld(e, n),
              vo(n, a, null, s);
            var g = n.memoizedState;
            if (((a = g.element), d.isDehydrated))
              if (
                ((d = {
                  element: a,
                  isDehydrated: !1,
                  cache: g.cache,
                  pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                  transitions: g.transitions,
                }),
                (n.updateQueue.baseState = d),
                (n.memoizedState = d),
                n.flags & 256)
              ) {
                (u = Yr(Error(i(423)), n)), (n = vp(e, n, a, s, u));
                break e;
              } else if (a !== u) {
                (u = Yr(Error(i(424)), n)), (n = vp(e, n, a, s, u));
                break e;
              } else
                for (
                  kt = bn(n.stateNode.containerInfo.firstChild),
                    Pt = n,
                    be = !0,
                    Wt = null,
                    s = Od(n, null, a, s),
                    n.child = s;
                  s;

                )
                  (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
            else {
              if ((Wr(), a === u)) {
                n = vn(e, n, s);
                break e;
              }
              ht(e, n, a, s);
            }
            n = n.child;
          }
          return n;
        case 5:
          return (
            bd(n),
            e === null && xl(n),
            (a = n.type),
            (u = n.pendingProps),
            (d = e !== null ? e.memoizedProps : null),
            (g = u.children),
            fl(a, u) ? (g = null) : d !== null && fl(a, d) && (n.flags |= 32),
            mp(e, n),
            ht(e, n, g, s),
            n.child
          );
        case 6:
          return e === null && xl(n), null;
        case 13:
          return wp(e, n, s);
        case 4:
          return (
            Rl(n, n.stateNode.containerInfo),
            (a = n.pendingProps),
            e === null ? (n.child = Zr(n, null, a, s)) : ht(e, n, a, s),
            n.child
          );
        case 11:
          return (
            (a = n.type),
            (u = n.pendingProps),
            (u = n.elementType === a ? u : Zt(a, u)),
            fp(e, n, a, u, s)
          );
        case 7:
          return ht(e, n, n.pendingProps, s), n.child;
        case 8:
          return ht(e, n, n.pendingProps.children, s), n.child;
        case 12:
          return ht(e, n, n.pendingProps.children, s), n.child;
        case 10:
          e: {
            if (
              ((a = n.type._context),
              (u = n.pendingProps),
              (d = n.memoizedProps),
              (g = u.value),
              Re(mo, a._currentValue),
              (a._currentValue = g),
              d !== null)
            )
              if ($t(d.value, g)) {
                if (d.children === u.children && !vt.current) {
                  n = vn(e, n, s);
                  break e;
                }
              } else
                for (d = n.child, d !== null && (d.return = n); d !== null; ) {
                  var x = d.dependencies;
                  if (x !== null) {
                    g = d.child;
                    for (var C = x.firstContext; C !== null; ) {
                      if (C.context === a) {
                        if (d.tag === 1) {
                          (C = yn(-1, s & -s)), (C.tag = 2);
                          var L = d.updateQueue;
                          if (L !== null) {
                            L = L.shared;
                            var _ = L.pending;
                            _ === null
                              ? (C.next = C)
                              : ((C.next = _.next), (_.next = C)),
                              (L.pending = C);
                          }
                        }
                        (d.lanes |= s),
                          (C = d.alternate),
                          C !== null && (C.lanes |= s),
                          Tl(d.return, s, n),
                          (x.lanes |= s);
                        break;
                      }
                      C = C.next;
                    }
                  } else if (d.tag === 10)
                    g = d.type === n.type ? null : d.child;
                  else if (d.tag === 18) {
                    if (((g = d.return), g === null)) throw Error(i(341));
                    (g.lanes |= s),
                      (x = g.alternate),
                      x !== null && (x.lanes |= s),
                      Tl(g, s, n),
                      (g = d.sibling);
                  } else g = d.child;
                  if (g !== null) g.return = d;
                  else
                    for (g = d; g !== null; ) {
                      if (g === n) {
                        g = null;
                        break;
                      }
                      if (((d = g.sibling), d !== null)) {
                        (d.return = g.return), (g = d);
                        break;
                      }
                      g = g.return;
                    }
                  d = g;
                }
            ht(e, n, u.children, s), (n = n.child);
          }
          return n;
        case 9:
          return (
            (u = n.type),
            (a = n.pendingProps.children),
            Gr(n, s),
            (u = Bt(u)),
            (a = a(u)),
            (n.flags |= 1),
            ht(e, n, a, s),
            n.child
          );
        case 14:
          return (
            (a = n.type),
            (u = Zt(a, n.pendingProps)),
            (u = Zt(a.type, u)),
            dp(e, n, a, u, s)
          );
        case 15:
          return pp(e, n, n.type, n.pendingProps, s);
        case 17:
          return (
            (a = n.type),
            (u = n.pendingProps),
            (u = n.elementType === a ? u : Zt(a, u)),
            ko(e, n),
            (n.tag = 1),
            wt(a) ? ((e = !0), lo(n)) : (e = !1),
            Gr(n, s),
            ip(n, a, u),
            Ul(n, a, u, s),
            $l(null, n, a, !0, e, s)
          );
        case 19:
          return Cp(e, n, s);
        case 22:
          return hp(e, n, s);
      }
      throw Error(i(156, n.tag));
    };
    function $p(e, n) {
      return Ef(e, n);
    }
    function Ry(e, n, s, a) {
      (this.tag = e),
        (this.key = s),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = n),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = a),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function _t(e, n, s, a) {
      return new Ry(e, n, s, a);
    }
    function fu(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function jy(e) {
      if (typeof e == "function") return fu(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === pt)) return 11;
        if (e === yt) return 14;
      }
      return 2;
    }
    function Wn(e, n) {
      var s = e.alternate;
      return (
        s === null
          ? ((s = _t(e.tag, n, e.key, e.mode)),
            (s.elementType = e.elementType),
            (s.type = e.type),
            (s.stateNode = e.stateNode),
            (s.alternate = e),
            (e.alternate = s))
          : ((s.pendingProps = n),
            (s.type = e.type),
            (s.flags = 0),
            (s.subtreeFlags = 0),
            (s.deletions = null)),
        (s.flags = e.flags & 14680064),
        (s.childLanes = e.childLanes),
        (s.lanes = e.lanes),
        (s.child = e.child),
        (s.memoizedProps = e.memoizedProps),
        (s.memoizedState = e.memoizedState),
        (s.updateQueue = e.updateQueue),
        (n = e.dependencies),
        (s.dependencies =
          n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
        (s.sibling = e.sibling),
        (s.index = e.index),
        (s.ref = e.ref),
        s
      );
    }
    function Io(e, n, s, a, u, d) {
      var g = 2;
      if (((a = e), typeof e == "function")) fu(e) && (g = 1);
      else if (typeof e == "string") g = 5;
      else
        e: switch (e) {
          case Z:
            return mr(s.children, u, d, n);
          case te:
            (g = 8), (u |= 8);
            break;
          case Ae:
            return (
              (e = _t(12, s, n, u | 2)), (e.elementType = Ae), (e.lanes = d), e
            );
          case Pe:
            return (
              (e = _t(13, s, n, u)), (e.elementType = Pe), (e.lanes = d), e
            );
          case $e:
            return (
              (e = _t(19, s, n, u)), (e.elementType = $e), (e.lanes = d), e
            );
          case he:
            return Vo(s, u, d, n);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Me:
                  g = 10;
                  break e;
                case et:
                  g = 9;
                  break e;
                case pt:
                  g = 11;
                  break e;
                case yt:
                  g = 14;
                  break e;
                case tt:
                  (g = 16), (a = null);
                  break e;
              }
            throw Error(i(130, e == null ? e : typeof e, ""));
        }
      return (
        (n = _t(g, s, n, u)),
        (n.elementType = e),
        (n.type = a),
        (n.lanes = d),
        n
      );
    }
    function mr(e, n, s, a) {
      return (e = _t(7, e, a, n)), (e.lanes = s), e;
    }
    function Vo(e, n, s, a) {
      return (
        (e = _t(22, e, a, n)),
        (e.elementType = he),
        (e.lanes = s),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function du(e, n, s) {
      return (e = _t(6, e, null, n)), (e.lanes = s), e;
    }
    function pu(e, n, s) {
      return (
        (n = _t(4, e.children !== null ? e.children : [], e.key, n)),
        (n.lanes = s),
        (n.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        n
      );
    }
    function Oy(e, n, s, a, u) {
      (this.tag = n),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = _a(0)),
        (this.expirationTimes = _a(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = _a(0)),
        (this.identifierPrefix = a),
        (this.onRecoverableError = u),
        (this.mutableSourceEagerHydrationData = null);
    }
    function hu(e, n, s, a, u, d, g, x, C) {
      return (
        (e = new Oy(e, n, s, x, C)),
        n === 1 ? ((n = 1), d === !0 && (n |= 8)) : (n = 0),
        (d = _t(3, null, null, n)),
        (e.current = d),
        (d.stateNode = e),
        (d.memoizedState = {
          element: a,
          isDehydrated: s,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        kl(d),
        e
      );
    }
    function My(e, n, s) {
      var a =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: z,
        key: a == null ? null : "" + a,
        children: e,
        containerInfo: n,
        implementation: s,
      };
    }
    function Wp(e) {
      if (!e) return Bn;
      e = e._reactInternals;
      e: {
        if (rr(e) !== e || e.tag !== 1) throw Error(i(170));
        var n = e;
        do {
          switch (n.tag) {
            case 3:
              n = n.stateNode.context;
              break e;
            case 1:
              if (wt(n.type)) {
                n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          n = n.return;
        } while (n !== null);
        throw Error(i(171));
      }
      if (e.tag === 1) {
        var s = e.type;
        if (wt(s)) return xd(e, s, n);
      }
      return n;
    }
    function Zp(e, n, s, a, u, d, g, x, C) {
      return (
        (e = hu(s, a, !0, e, u, d, g, x, C)),
        (e.context = Wp(null)),
        (s = e.current),
        (a = mt()),
        (u = Hn(s)),
        (d = yn(a, u)),
        (d.callback = n ?? null),
        _n(s, d, u),
        (e.current.lanes = u),
        Ei(e, u, a),
        At(e, a),
        e
      );
    }
    function _o(e, n, s, a) {
      var u = n.current,
        d = mt(),
        g = Hn(u);
      return (
        (s = Wp(s)),
        n.context === null ? (n.context = s) : (n.pendingContext = s),
        (n = yn(d, g)),
        (n.payload = { element: e }),
        (a = a === void 0 ? null : a),
        a !== null && (n.callback = a),
        (e = _n(u, n, g)),
        e !== null && (qt(e, u, g, d), yo(e, u, g)),
        g
      );
    }
    function Uo(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function Kp(e, n) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var s = e.retryLane;
        e.retryLane = s !== 0 && s < n ? s : n;
      }
    }
    function mu(e, n) {
      Kp(e, n), (e = e.alternate) && Kp(e, n);
    }
    function Ly() {
      return null;
    }
    var Gp =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            console.error(e);
          };
    function gu(e) {
      this._internalRoot = e;
    }
    (zo.prototype.render = gu.prototype.render =
      function (e) {
        var n = this._internalRoot;
        if (n === null) throw Error(i(409));
        _o(e, n, null, null);
      }),
      (zo.prototype.unmount = gu.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var n = e.containerInfo;
            dr(function () {
              _o(null, e, null, null);
            }),
              (n[dn] = null);
          }
        });
    function zo(e) {
      this._internalRoot = e;
    }
    zo.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var n = Lf();
        e = { blockedOn: null, target: e, priority: n };
        for (var s = 0; s < Ln.length && n !== 0 && n < Ln[s].priority; s++);
        Ln.splice(s, 0, e), s === 0 && bf(e);
      }
    };
    function yu(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function Qo(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function qp() {}
    function Dy(e, n, s, a, u) {
      if (u) {
        if (typeof a == "function") {
          var d = a;
          a = function () {
            var L = Uo(g);
            d.call(L);
          };
        }
        var g = Zp(n, a, e, 0, null, !1, !1, "", qp);
        return (
          (e._reactRootContainer = g),
          (e[dn] = g.current),
          Ii(e.nodeType === 8 ? e.parentNode : e),
          dr(),
          g
        );
      }
      for (; (u = e.lastChild); ) e.removeChild(u);
      if (typeof a == "function") {
        var x = a;
        a = function () {
          var L = Uo(C);
          x.call(L);
        };
      }
      var C = hu(e, 0, !1, null, null, !1, !1, "", qp);
      return (
        (e._reactRootContainer = C),
        (e[dn] = C.current),
        Ii(e.nodeType === 8 ? e.parentNode : e),
        dr(function () {
          _o(n, C, s, a);
        }),
        C
      );
    }
    function Ho(e, n, s, a, u) {
      var d = s._reactRootContainer;
      if (d) {
        var g = d;
        if (typeof u == "function") {
          var x = u;
          u = function () {
            var C = Uo(g);
            x.call(C);
          };
        }
        _o(n, g, e, u);
      } else g = Dy(s, n, e, u, a);
      return Uo(g);
    }
    (Of = function (e) {
      switch (e.tag) {
        case 3:
          var n = e.stateNode;
          if (n.current.memoizedState.isDehydrated) {
            var s = Si(n.pendingLanes);
            s !== 0 &&
              (Ua(n, s | 1),
              At(n, Ue()),
              (we & 6) === 0 && ((ei = Ue() + 500), In()));
          }
          break;
        case 13:
          dr(function () {
            var a = gn(e, 1);
            if (a !== null) {
              var u = mt();
              qt(a, e, 1, u);
            }
          }),
            mu(e, 1);
      }
    }),
      (za = function (e) {
        if (e.tag === 13) {
          var n = gn(e, 134217728);
          if (n !== null) {
            var s = mt();
            qt(n, e, 134217728, s);
          }
          mu(e, 134217728);
        }
      }),
      (Mf = function (e) {
        if (e.tag === 13) {
          var n = Hn(e),
            s = gn(e, n);
          if (s !== null) {
            var a = mt();
            qt(s, e, n, a);
          }
          mu(e, n);
        }
      }),
      (Lf = function () {
        return Te;
      }),
      (Df = function (e, n) {
        var s = Te;
        try {
          return (Te = e), n();
        } finally {
          Te = s;
        }
      }),
      (Na = function (e, n, s) {
        switch (n) {
          case "input":
            if ((vi(e, s), (n = s.name), s.type === "radio" && n != null)) {
              for (s = e; s.parentNode; ) s = s.parentNode;
              for (
                s = s.querySelectorAll(
                  "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
                ),
                  n = 0;
                n < s.length;
                n++
              ) {
                var a = s[n];
                if (a !== e && a.form === e.form) {
                  var u = oo(a);
                  if (!u) throw Error(i(90));
                  Ds(a), vi(a, u);
                }
              }
            }
            break;
          case "textarea":
            ne(e, s);
            break;
          case "select":
            (n = s.value), n != null && Rn(e, !!s.multiple, n, !1);
        }
      }),
      (yf = lu),
      (vf = dr);
    var Ny = { usingClientEntryPoint: !1, Events: [Ui, Ur, oo, mf, gf, lu] },
      ts = {
        findFiberByHostInstance: ir,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
      },
      by = {
        bundleType: ts.bundleType,
        version: ts.version,
        rendererPackageName: ts.rendererPackageName,
        rendererConfig: ts.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: J.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return (e = Af(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: ts.findFiberByHostInstance || Ly,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
      };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!$o.isDisabled && $o.supportsFiber)
        try {
          (Us = $o.inject(by)), (en = $o);
        } catch {}
    }
    return (
      (St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ny),
      (St.createPortal = function (e, n) {
        var s =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!yu(n)) throw Error(i(200));
        return My(e, n, null, s);
      }),
      (St.createRoot = function (e, n) {
        if (!yu(e)) throw Error(i(299));
        var s = !1,
          a = "",
          u = Gp;
        return (
          n != null &&
            (n.unstable_strictMode === !0 && (s = !0),
            n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
          (n = hu(e, 1, !1, null, null, s, !1, a, u)),
          (e[dn] = n.current),
          Ii(e.nodeType === 8 ? e.parentNode : e),
          new gu(n)
        );
      }),
      (St.findDOMNode = function (e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var n = e._reactInternals;
        if (n === void 0)
          throw typeof e.render == "function"
            ? Error(i(188))
            : ((e = Object.keys(e).join(",")), Error(i(268, e)));
        return (e = Af(n)), (e = e === null ? null : e.stateNode), e;
      }),
      (St.flushSync = function (e) {
        return dr(e);
      }),
      (St.hydrate = function (e, n, s) {
        if (!Qo(n)) throw Error(i(200));
        return Ho(null, e, n, !0, s);
      }),
      (St.hydrateRoot = function (e, n, s) {
        if (!yu(e)) throw Error(i(405));
        var a = (s != null && s.hydratedSources) || null,
          u = !1,
          d = "",
          g = Gp;
        if (
          (s != null &&
            (s.unstable_strictMode === !0 && (u = !0),
            s.identifierPrefix !== void 0 && (d = s.identifierPrefix),
            s.onRecoverableError !== void 0 && (g = s.onRecoverableError)),
          (n = Zp(n, null, e, 1, s ?? null, u, !1, d, g)),
          (e[dn] = n.current),
          Ii(e),
          a)
        )
          for (e = 0; e < a.length; e++)
            (s = a[e]),
              (u = s._getVersion),
              (u = u(s._source)),
              n.mutableSourceEagerHydrationData == null
                ? (n.mutableSourceEagerHydrationData = [s, u])
                : n.mutableSourceEagerHydrationData.push(s, u);
        return new zo(n);
      }),
      (St.render = function (e, n, s) {
        if (!Qo(n)) throw Error(i(200));
        return Ho(null, e, n, !1, s);
      }),
      (St.unmountComponentAtNode = function (e) {
        if (!Qo(e)) throw Error(i(40));
        return e._reactRootContainer
          ? (dr(function () {
              Ho(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[dn] = null);
              });
            }),
            !0)
          : !1;
      }),
      (St.unstable_batchedUpdates = lu),
      (St.unstable_renderSubtreeIntoContainer = function (e, n, s, a) {
        if (!Qo(s)) throw Error(i(200));
        if (e == null || e._reactInternals === void 0) throw Error(i(38));
        return Ho(e, n, s, !1, a);
      }),
      (St.version = "18.3.1-next-f1338f8080-20240426"),
      St
    );
  }
  var ih;
  function $y() {
    if (ih) return xu.exports;
    ih = 1;
    function t() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
        } catch (r) {
          console.error(r);
        }
    }
    return t(), (xu.exports = Hy()), xu.exports;
  }
  var sh;
  function Wy() {
    if (sh) return Wo;
    sh = 1;
    var t = $y();
    return (Wo.createRoot = t.createRoot), (Wo.hydrateRoot = t.hydrateRoot), Wo;
  }
  var Zy = Wy();
  const Ky = wc(Zy),
    ue = {
      boxWidth: "xl:max-w-[1280px] w-full",
      heading2:
        "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
      paragraph:
        "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
      flexCenter: "flex justify-center items-center",
      flexStart: "flex justify-center items-start",
      paddingX: "sm:px-16 px-6",
      paddingY: "sm:py-16 py-6",
      padding: "sm:px-16 px-6 sm:py-12 py-4",
      marginY: "sm:my-16 my-6",
    },
    An = {
      section: `flex md:flex-row flex-col ${ue.paddingY}`,
      sectionReverse: `flex md:flex-row flex-col-reverse ${ue.paddingY}`,
      sectionImgReverse: `flex-1 flex ${ue.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
      sectionImg: `flex-1 flex ${ue.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
      sectionInfo: `flex-1 ${ue.flexStart} flex-col`,
    },
    Gy =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYIAAAB4CAMAAADIWgVwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAn1BMVEUAAABAQEBDQEZBQUdBQUdCQUdCQUZDQUdCQkdDQEZAQEhAQEhCQEdCQkdCQUdCQUdAQEVCQkdBQEdCQEhDQEdBQUdAQEhBQUZCQEhBQUZCQEVCQEdAQEhCQEdCQkZAQEdCQEZCQkZCQEZCQkZBQEZAQEdBQUZAQEZBQEZEQEdEQERAQEZBQEdBQUdCQkhCQUZCQEdBQEdBQUhCQUf///9vARxaAAAAM3RSTlMAEFCQv9/vv59fIECvj8/vMK+/YG/fYO+AoGBwX5+AcIB/f6+gT89Qz09AX5DPgM+PsKDqT1B8AAAAAWJLR0Q0qbHp/QAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAAd0SU1FB+cBDAQmFG4u6BcAAAsCSURBVHja7Z1tY6I4EMdBQLqJWqwiFXWXut3au7Pd2+P7f7fTWiEJk2SCgA/NvBR5ml/+eZhMguMYm9vz/CDP835494041jo3OujnjIXfrEs6BuDnogUWQpc2zCG7s9VRV0ZGOWyBZdARgSCX2X1k3XNeAjsGVgfdEwhsXdS1jRl/P0z2DnfpNC5/G1kXtWzT0tmeW/48KyEMrZParYaK8VhC+SOPBQNq3dSmzY9+jit1fsEgtG5q0VI5AYbBwjqqPSu6P0vo6DFoce9aT7UughV42E0+D3+3rmpbBLGk8//DyqArESxl//CtDDoSgfQf1MrgzCKwMji7CKwMzi8CK4Ozi8DK4PwiOJ8M3Im38gwyOWhWWkuPxNyhibiZixMBI4NuJw6e+obz1xkTdG/pmZg7NEF5jY6DHmVw16UEfOM5o6tDUMyV6cOgRxnkHcpgzs7bubeJYG0wGdC9DCg3d/r9JhEUIliZOKQzGfzkUwjcW0SwNvLqc9dzN0IaB71BBEYi2P294ylMIiBY3CCCtWHV0rEMRATZ7SEwFEHnMnAFBL9uD8HauH3tWAZCmje5OQQkNxRB5zKYcQRwj3lVCOY1Opkdy+DFWARXhaCGCDqXAWEyKme3F6CY1xppdd0pOjYHMZb5FSGoJYLuxwbOZvCaBw9T9DTFFSGY1ww3PF94euP1IKgpgjPI4GYRDGvH3C5cBleDwHhgfDUyuBoE6xMCz5ctg2tBcIIImHmD02RAp6vR/jGC0OudlJZBvVE/z/ujcQ9GQL3xx34Oo3FGcTcqtoDYn4JA4O5epX94FXSigVoE0dQbhztbTakydBOe4rZ+dXU5+bjrh33OkLlhaX8dfvq7/GXvcvepvFAIIGCP720M7CVQXvJjMRedc6cElcwBAYGwY0HwRE4UgeAc6JFPlgGwzUL+xE2SrYR2Z2fp4aeUmUbbXYldGAogmPYRGzqk7E3coXb7AQ4B8WttVyAXAW4PiuOfxqeNeMVltb4hglzYsKGK4A6+E5UiyCJw9TXvAxZB1Adv8VRXBDLnUJkM6swiT/uybRZeTBEIHq4guJOtZH+SIRj1EWewlUS/3p4RC4kH/+njHvmkZIphjjEcglyDQG4jAiOQ2xOIQLFfQU/lBYkI1ooL3jUlg7v8IhBwpRSFgGGAu4MqQzSF/bdWXu+uGRkgCbSPgM0MwyEoOx/5yQxgEXAEgsE22w5e2Z+GsAzMevTr/GIQMF3q1PAE7B2k+9fAImBeNnk8HiHM/gd5D5SBUaJ1ml8QgjInBvtY1BCBNAcTFkHZF3vkzish8MlsddYbQNvtJEEQnIggeV3tNesnMgTJq+/7SfX3SIogWWVZthXPCeUIgt0dXqs/D9UlkYI1RBxJ5w6Hp8pA7Awl280BYLSNayN4KIMOEYQgeaRHSfuSmkW85IpWCyBb3ERHP0w+D9DnGJMACKZSu4qVx24M1vvmMiCib1xQbUYI3qgqTCdsK+OQZ9BB/CUfIrAAMv/nL8JPqQrvEaJFkIra5FwHL743lsGce7iBgI681EDgqSOl1RnnH5CDVJckQOshZ1x5D0gG8HoCXxk4zcqYzCky4Or89+rxgTGCd02wGtB0lFQdpLzkc/WpNO8xVxeSFEwOJOqRVrEHBY80NpMBV9YGqtugERANAuj4rLpkQXlJWlWNJr3MfVFm5MMry3qa2YMMTG2emcngp7p4Olz+YjMIwOfYsh0ZxCUT8e/aKRuSKGoiCg/ctpq8WQojSoz2KUq048ZuELBiO1xBfcnfxgi4Z/AkLxnDP0eaqbo3+E4BhkDEisA5IwJOBqn+ks/cBAUKAZsS/iZxwxIGrWtJA0l5wuxq3dMn6HaEgIouRCPIsXPHfgWb2FbHKA9XLxlIXhczg5npFwp0hMAVC0PzCLayKxJZVVwXgaSrpH2q6KwI2N5x2A6CVPayMhHURmAig2e9a7pC4As1dfMIqKRLJBVBUSx0bcGbU18Gl4kgaB9BComAyLrsRNMjCp36MviyKvgFiOBfaT39S9OhXMmbNmqCwD0vgt+ttwU9uCJSpG+lmlBDKh+DPWNnMC+oOWbGZn/aQbCAX1aRvhVpqpO5vKijZzAX0HzVWRBE4ti1eQQ/QcmnqudO1H4MFIexMWuqiaJ3hyATC0PjCNgYyD1KBCW1VOm9UHVQF6zj1nGTcyIIxIq6cQTsBf/gRFDUEqGyHvKUjtPJ4Lc8JaZTBNNcLKJNI3ADsNJVZ7O7qhqdqFtRrAwy7ZxqJwhIv1JEm0YwBAWvS4ZWFeVUHd/EyoDqUi6jvGkEQAIDn8Xx61QE0E59XLLUW8VNoaa/AhXlQOPiGRwTVBVyiAGXo9wMgmqCM08gdk5FALzHGs6oI7ocO8X++Kk2fxQZs+Z3lLgXeqZ8wnVDCPIxUdzkOPF7CoL8nn9rITm9jETMNXVJOXKSz3X+0dbyuiiFkGQTfCvvJa5raApBHgyLP7lT4SZH/5yEYPfaZZ6huHionN3XioD5y3eZCOQhCGywjlZTELMepb2J16+XTYdAsL+JN51Mpp4vTbs9EcGO8zibTCbZqvIasYMXgfRrKQSzlSxWBoOGc0pxCGQWO00h0OdWF/3UJaaIDuHGZYkZdmlk4MYXhCAhrSN4r/YqXVSHBZxjiFGdHU83h59cDoKN0zaCN2RsourtEOKyRNXy2pSi2cUgeHfaRsCUeOyqpG11TJ2qst8gGWhTimbJZSBYOG0jeCPVEI9upX3RsSmGfOVARremjKJnz6L4AhAk1GkbwX8u0LHXTmwVaccjsRrytJ5NkKyqGeZl1dB0jCiQVXsPxGkIweJFwngBFdBY65xyN74h3xuK9VmjmUFy4yyGH7pxBLDkkqUitmyIIOVmA8usZQKGf/QlmRk7Ue79l/hT/zhOLQj7gpk1jMCDJDd6dJ3GEOw7tpV3SQZUMh2D2TBiy0Sfyqg3aruWxCC/dN8kbJmlWcn28HCbydE+H9adlPbpnIj5jAkkzqg44RA3II/MjYIt5AXC3KV6yU3lyyziM22YIWcCbaP3GxfHFMZOYRn1jlHru38i55CZm9FJlq2ybNL2Zvxkc7gPbe9TSHSabbfZVPIqBnmfbFXkm1RDjIAix5pkxIXc/OmHagyjstSgvvuiCDLk/31psM8i6AgBSSTBLGQVZhGcjECI6i8dq4KmEHjoMx7NGwJm+EGsy2U9IoO9GMtu7gh/0tag7/vVLDAbM/GZNgv0Wb5J3/eLmemYic/zWBqKzbMOl1fSizoE0Ax6miUKX9qo0fC4umcQjsHctsYKM1gWCe7ahGFActsUKMxgWWS5UWoyVaQFykWwtO5WlVC9DGjRF0oidqZdy2CjyHK1VvYXtV9tnvLJ5wyDsYurvlbW2ZqQw0jlSZfZQ3QmDpOV9NyRaUDp61kxGXYnZ8DsgV7kF8xyzCCt/Dr6u3W11ElF9HMkKafslvG7duBobNaP7FQyMo1rf+2qqLoL+6EV6EMp8Y6Q9QNuy8+ox1ZDKntUONJNA0kSmCPuElk5l10XsLBuRnXcPxzJ7n0srEr4T2wtCJ+RHjIfa3Enfq24tmVQLHvYr3voK5LAqgo61GWhl02zbDWqM8Vsu0WaTNQIbnARaaCWgGF7AOdBPkp7VDp8iW0HcKZOan5QdWjISw31WDMSwoMugDSLzdVjDSrNz9ASi2oiKmSbAQzAtW41HCmL2/gn+O85Vz8BYPAtaGusJzdb/zXZf0HjdTU1zHV1aTb4+P5jEgyOX4CwprT/ARbjRQpB1ucPAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTAxLTEyVDA0OjM2OjU2KzAwOjAwnXXiRAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wMS0xMlQwNDozNjo1NiswMDowMOwoWvgAAAAASUVORK5CYII=",
    qy = "/assets/bill-CUqmkJoE.png",
    Yy =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYEAAABOCAMAAADxTlrDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAllBMVEUAAABCQEZCQkZAQEBAQEhAQEhAQEVBQUdCQEdCQEZCQEhAQEZDQEZAQEhCQUdDQEZCQEVDQEdCQEdCQUZDQUdBQUdBQEZBQUdCQkdCQkdCQUdCQkdBQUZCQkZAQEdBQUdCQEdBQEZCQUdBQEdBQUZCQEhAQEhBQEdBQUZAQEdCQkhCQEdCQkZCQUZEQEdBQEdCQUf///9MzWqBAAAAMHRSTlMAf38QIEAw33CAYFBQX99fYG+f77+QoL+Pn++voIBwz6/Pz5DvgGCwz0+Aj6/PT79Ug7TiAAAAAWJLR0Qx2dsdcgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAAd0SU1FB+cBDAQlHTzfA3AAAAeQSURBVHja7dxbQ+I4FADgQJIWUGuBMqXoqiOojLO70///6/ZhbZvLOScXmM3DJo+mBJqP5iQnQcb8ymzOcklZZn2fCRIDZILkAJkgOUAmSA6QCZIDZILkAJkgOUAmSA6QCZIDZILkAJkgOUAmSA6QCZIDZILkAJkgOUAm0AoXUkpZ8N8JUJaRBIslVFYS/rQ3wwW3UBsL4BXF8Io79BNUX+Ueu6Ie2uBE+wus99ebauiTbbO7Nevlki6+AEJEElTYQ9TcC/vqb0PtBmwDeMt6bM/5CdAr2uGKPdF+Bb5UtuZ9bTv9vpaOwcQXgLFIgop48z0PFOhluEDdE682BPpFmIDd/33f971mECMAAsQSUAJ9JQIFDiJYQOkk9yVE+7YAf/CJkhECCEAkASlg3bFLwO5El4BQ3447kSruLVBQt/bA4wVQgDgCWsC8Y6eANVS7BB7Vd/vDKdB3vgJy23s93sECCxwAIri/UMDoFLdAfxskIPRHjjsFzFCACRSu6fpTrIDZyaWgap/5pQJ6p3gIGAOXQ6DW323hFjgUPgJi67ivXfwopHdyKahaN8DUey+bobx8V9uoAwX6Vx4gYHwBGreAMTDCAlxv9/txtVqtj0o7z3YkPrVgYTRBKahaD4CpC9SWxBvwZfEV0EMBLVCb3zjpFugf3AJ79fqNnO6rtPpt6VyOUASloGp9AGABxt7Hz/8RLNDfeQtY83WvqxYuATW6lBqqOJr9FiMwdjIEMNV6AWAC01034QJqKCAFxp56JSekLfGkgAItMQ4UZd8X7EKBr06GAYZaPwBU4HjBM6AO1aTAOBW9a6kJaevTfgU+AqXdC+K8YFECs87oZA1AOzstSgOgm8cL7CIElFBACYw9VTJJTUjt3EJDCihrDOH8CnoLzPTFiCh1AH3xJUodgFiaOUehHzEC01BNCdRKa2diQtoSaQVI4DRe9smuJjAz14NCmLUagQGAEyACMno9YMzaKQH1vamOgPJrEheQ0xjEriYwg5fkei3SyR1ZCwrw9Rb+FjkENvZQTQjcqlX8hE9IR4HlyYr2gMC0xtpcTWCGZUX02jkBgBGMvbdefZX18mGLRTKHQP1kzdoJgVabvR7B6b5+odp+gwq0znQ3KHBo7PLTTsZ1ZKpuTgAgBHRWogzLjdbsxQwFuIDQxwqJT0gngclpiPaAQEXvrmAC4DYVkA3tyFzpnACACUiB58D9gZpxZUle0AKPxgQUn5AqAvxs5AABASD1cJmAkY7uyGT1nAAACSiBTeguZc1YcdJDASrAzQi0QCekigATRiiwBXgftMZyC1jp6J9ksvqe3Eu4D3sGGhkswIyhGhWozaamWHxPCLAbPQdoC4igQOwhoD53oeloj2S1IzttbGt7CKjroTkhUFnhEp2VaAJGKKAEPq40CukEYelod7LatT+gbxX7CKihQKIC0p6zF9gcRhdQlwd3/0kc0AhC09HOZLVLQCfwEVCH6kpgAn8CidQWiXUt2v5BAAJj9eFaAgpBeDralay21wPmZkYTKqCFAkRgGiq21Vi2SCw2BJSJa18tbIG/ArJCikC5sct4XmsgiElHO5LVWF5IeXhkqIA6VJewwGPI7rQpwN6A9is7qYjt/MdkJf4liEtH07WYgDKc74IFzNmDfYOOwe9AC0CZogrYeKuuJ8D42UxHd97paKvWS4ABz7evgDpUgzdYu6LP37SAfShE+ZQcPbhxUXaan810dOedjjZqPQUKYHHvK6DO2qEbdMb/hhZQQ4H9PWnxA14XCDAuyGQ1mY4WnIULQIkabwE1FNg3KHtnkbSAGu0tgRsyj2b8J6C4XUo6Wd1FnZ3GT2QqVf4C7EwIPLoFdg4BNQdojfknIhHD9/ofowToZHUXd3ZaoHmbmFHIDgUNfJTB56QYKMBLXOAdPwBevGInd5sIAJDAlY72FCheoZ2mAAFzqGmAR6BcWQWaSYICag7QmveocyX1lyF8b3VNhACdrHamo31WZKudegsfcQLqrF2/wQo6WGT23cElYISCCtepdlIwJuS6BbpmWpH5/oaGTla709GhWQmtn4IE9Fk7cLzhAKxvJBCLEQE9nFSEDvUTgsvPTncEwBXOTuvb3WEC2qy9sbMGYPb4ZL8AE9BCgbH6enPd1mesgL3c7AiAy89O6/PCMAEtFDT2Hws6UyZdAlq0N9e/b34AEWenCYIIALfAJ4sXYE+AwCMd+rg9IW192rcyECTBgsUL4AQxAC6B0zu7RECZtTfWVBT5fWtrTUhxAWXhZ+eAbkp0YJXsEgGMIArAIfAr9KwEQ/N7g8DedZxKWhNSQmDqCyALJ74hqz3OLhOACeIAKIHTUYbv1KPZpca8GN3FPZsTUkJgCgVgHhQy2BT+OzToiReAIBKAtRVQvreb4wpKhe+HK3ZgGz+Alzx91b18DQ3jm6DbJ0/jJV999Y1qf2gQ+63me6uE69Ovtdkt64ouzJcgEuB/UYqb9XK5XK5uxBUbdRFkgN9eaIIMkJggAyQmyACJCTJAYoIMkJggAyQmyACJCTJAYoIMkJggAyQmyACJCTJAYoIMkJggAyQmyACpCTLAbyr/AHv9gMzaTsr7AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTAxLTEyVDA0OjM2OjU2KzAwOjAwnXXiRAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wMS0xMlQwNDozNjo1NiswMDowMOwoWvgAAAAASUVORK5CYII=",
    Xy = "/assets/card-CdEkRh-r.png",
    Jy =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAABTCAMAAABJaFfWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAolBMVEUAAABBQEZAQEhAQEBCQkZCQkdCQUdCQUdCQkdDQEZAQEhCQUdAQEVCQEZCQkZCQEVBQEdDQUdBQUdAQEhBQEdAQEdBQUdBQUdCQEdDQEdCQEhCQEZBQUdCQUZCQEdDQEZBQUZCQkdBQUZCQkhAQEZCQEdBQUZBQEZCQEhAQEZAQEhCQkZBQUhBQEdDQEhEQEdCQUZAQEdCQkVDQ0dCQUf///97M6vRAAAANHRSTlMAoEAQf6/fz59QIO8wf4BgkL/fX79wz5Cfb2CAv+9wX8+PoIBfr+/PgFBgr6CwX0/PT2BvUKdx2wAAAAFiS0dENd622WsAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnAQwEJjK8I23qAAAI90lEQVR42u2d63baOBCAjQQChFtsLwk2GGjaxVyy3W13/f7PtkBI0GUkjQzBaY/mV08rpNGn0W1m5EbRryqd+iIkChLYB/ZBAvvAPshRaLfH+oNhYH9/6Z5RMR7Y31kGb6xGcWB/V/kkwGI0sL+j8FqUz4H9HWUssWeBfUtnwoPQwL419jywv58kMvuw5txRiIQ+DezvKZnI/o/Avi3Dn4S71X3l4Y3VIw/s723552VnSqPA/v70kzwv6E2qCuw/xn0hsA/sA/sggX1gHySwD+x/AaHxbJqnJ8nnQ+stlM/mee+15NVxWMqHh/rOTR9qnBE0+4vOvWlBcJcIOixe+9mbF+4h5CIWRGcpKaZecHi3XMgOXzYghqpzraQxA4TmF1mCHKY9VuuSFtzNnnRL3M9E5adqc4t0ZRkzMsV39tRAoXBkrvSYcVlDwlZcH6MFWHIAd5pbXMh0lrPaLOnQzj6Hde6vLCDzBdzPrmHIxl/A4k+mEebTBYjRQn5hBLDoyri+mlmB9I3sebesXdLjNvZGMXUVBmn5DTer2IWmCu36qkT6to58E4sWC2unu2j24xIDsR6tmrCH87A4qz2VH9p62wdA2lp4gtA/WTXKcGbwqhBHsmc1UrqN2Ne1vrcQz6aiP+3DqzXwycFGmynUwVMINcUIYCy+MXsl1oVmr9sZ8RwvXvuxHzgNk/pNxLWAfoFaJciN2Y94M/b1wJt9LRkO82M/cFefeqEXkjpw6LWsy6vZyxp7sFfhE7+mPtVe7J98F0LqQjDFj5LBUK9nL91ffdgrCzjxa0rRsGJluamM7D/hNOL2wTo2UpYvLWfcDKuaJLODzNeVZhH0tuxTB/uKMVY5R01gX23yZH6Q9cZsa3IyY05eb2bzEmIfK/VMtjvOOdklmakrY53n7I12XJTCPqeO60S4vpOOZZtDsWd5MYs5ffER7NcWa1GaqvIiphd9rVZwZj8RnQh8L8MZvf3Ls3jWk5bR82+YeW+YCC2QDLQGdRmptupGbNrzM3VDzYz25mY/2qmHL94xLpMdUx9Pv0tU8/+ssNe6GNEE1pzZMhmP9Jlpxan2cuEtZPjKFXVtcWrIo/SXXnJrune42UPJyUSC+B1m/zdwf1JGbURF9hmYm5VAw0zFBQf40VZUW7LMjFvZUMiWlzZvj/mmC8NfXcle3hhHHj7krdHwY1NW3BeAc+xqh5eXP4tGXHH76C4Bs9/bPG0lvB+ZzSe9lr1cHffw3++Nhm90sAFTjHgkT9PKYcJigVQ3+2+2yqVdPKOYASLXsqfwnQcRO3mQOvYPwt1e6Sr6sB871qcomitzWFpHcmvl0gwxOqM5WGFT9tJQjr3iVqVhrzDKD10ZArbubo87jVfT0D60DNeXDjTXG7NPGrPnFbxXYOAxRNjBYnPf3QSNVupcD21B0hg8yDZlP27MXpziqKguwJ46XOMGRX+6zfLom8ab/dLgUrZOvum17Elz9hR7fjOzl0/VKcetyCOENShT2jGpnt2HHH2Q0hbZS0aQN2OvPFYaEMxu8R0xNxT1luityD6DY2CdbYX90u+dEcSe6AHpIXzCE28T3CD/SuwZfknEP9Ks9JKtsCeON700nhXTc47LQRZQ6QyKfgApB3HtJ15AOf7U8EM/k7fCnlpUtidHXJTZGXIH1NWHeLOneKCk2c5AWmQfmd6V0l2Jjoh8xeUcjL3Z89rZ+QbsOzqvdtgzmH3hjL0JylBzRgkjt2Kf4tnnvzL7uI+I9SPTCLrwZcKb/ePvx74C2BeoxB6bUxQMBs8/4Jrz84Os9yOviCqzxwMA+Mv33Gtj/BQpP8heC1jWsG7C/kg/sycdiOv9HCHKSYD/bmdMfapqaRYsL3bkfPP5YVdmB+M/uwuH6MM6uBv9jNA3Ju57C2v9XjsFDoxK2LZ0KsP3a53/Z1yE6wonjTxMY+zO8PhR/DlLPVCkvnAvUXsfUc1/pN3jljj2CX4l6WCHKQE82W2w55oPeWwNj5bYc8ceSvhgXr4jbe8haB+yNf7JABNog/1Ys6tna3gUzT7ia323ffZe8GmNPjpyOAPBHmOJW2Svx9nsWxaePeSeXhrygbC5BwS94PdxNWZRe+ylBeYP9RCQRlexj7VxjY25qKiVxPHV0DkqDjS+bay8MXv5OElVJfLr2APLO6t9V3wpq8T+G1ojhlbuMm+NvZxbnUe3Zv+s9WeOj+3CUbEBen0yzJH+bXOjmrKnfSCNlvuvOSvuZpFCVmyFT/8DtlDoqZQpPgCVpANDMuyd2XMZfQ74dyiK/dwEEQjPdmokfMIYHA62PQKVa9df8Rm6fHf2ymPVt+RIZshQt7GHgcRQLkblwHPuUSnkoFS1nT69ZPYpReWnwFR97szbYU/K2pDf29GPPm72EH0K+mJUPzLw0ph2mVT/XnfjDVbxK/eiFPbVB63gW8+1R+/S7eUd2ffEbxXQof6ie20ILnWx7LXvGshPkd/oUM3Zk64E3fhw2tc6m8DhYMaYRguIXqa9PM/7ehhuHd2H/VHVfnr6UkMfCgYKmfDKFGfTGMn+2EZvPjw+buHqyxahOzHw5mhx4pOnbAH6qC0hSfUa6y4KJyq/L3urHtx0RXkhk5/c6dO8z2ore6OIa9ceqZQYD84cZS+nAp416HKL7GU9aObJxs0+w4YXTbEZ7jLny7kfB1998tIWe1UPcnP2SgNbb/YRdfXmstfQtbvuCY0+BHv98dj+xuw1d+hD5R+TfHCUph5j+83qBL0b+wpyOu2qW7IHHupgFobHCB2MV/2i9uonJPoQ7Lew14N/8WAfW3tawc/TXLZZAZqREl18b9QJfkF5Y/a8KBv0z608oIyl8MT42ahOA81iOBY/AT4hvVtjbf4d2J/i1sa0jbqaOL55TTo2/JtkKBeufLp61m5jGC+bZiQp1SwKaqq/s5FLzoz1UnIR4UID/630w9lFdP/RLik3GvcE9Z3AuNC/o8A2eTKLKQRlU2O7epmbSlLDQbOdW7OYzE43jgJURGa6K3Al30/isw7z+WwW+/3HBvTw25dxPWbpOJo5t+LT1Vc8umb/A3YDUPDeN4NsAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTAxLTEyVDA0OjM2OjU3KzAwOjAwOwLp8AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wMS0xMlQwNDozNjo1NyswMDowMEpfUUwAAAAASUVORK5CYII=",
    ev =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYIAAABMCAMAAABXsUDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAolBMVEUAAABDQEdCQkdAQEhCQkdDQEZAQEVBQUdCQUdCQkZCQUZAQEBAQEhCQUdCQUdCQEdCQkdDQUdDQEZCQEhCQEZBQUZBQUZAQEZBQUdBQUdCQEVCQEdAQEdBQEZAQEhBQEdBQUdCQEhBQEdCQEdCQEdCQkZCQEZBQEdAQEdAQEhBQUZCQkhBQUhCQUZDQ0dCQkZAQEZEQEdCQEZBQEZCQUf////OrUE4AAAANHRSTlMAb58gr18wv99/7xBAz+9wj79QYIDP71DfkGCfcKBgkM+Av6+PgH+wT1+ggKDPb69fT6/PPhU+fgAAAAFiS0dENd622WsAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnAQwEJjUiR/hJAAAKFUlEQVR42u2da1viOhCAi8ESSADBbimwysUVXTx7rv3/v+1QaGkuM5MB8RFc8m2XENp5M5lraxTBo3EjIu4QzdvoOk484laeS65c2508PwDYdTCGaufbwZKr7m7nyqsinHBomZej1w/Suqvm5oOrIpxKBWqhFptbMGkVo32V3inGsJPbo82lFQZ2HRzfppV7Q2ourc24U1chvms0AKFiZhmidTXLJ/BEc65cEVr51T99vyfKkqtoEXOvivBeTxSRa98JxqjRvEhFiO+r8RkGzfNtIAiCSetS/dNkf/X6EzxRhlAruXJoXaZ/+okIRDNnjo1cteRObl8RsMe3nD3SUcafPPZ+aTL1R9IYxteD6HvKFaqKxANzbgbcB/bdTvNW/d4ImHIthfqYMWnxERQUPj+c+FQELLnuhSpmR6kAjeAMjMcnIwgqwty8LBEAtkCOlYez9qI+G8EmMiHkmrqFgwUhySUqydB5J+PfGwEhV0CoaIoiJco8QZPTi39zBJH4doBQYfOxpA6Th7OO6M4CASjXJ8U3H+mIXL3+Qip3w3OHB4cnV+L7RrIZ95rn2Ir73WwGAqWLlRs6sC/UcLvkqQIcV66ZPgDYOCCEeu2kNkGP9pFWpVlVGbr92CcS200p3S2q2ua3uzfe1Y7LZYbV/E4djAxpBJN66W4bpaDHZr5gcGtMbNQB6LPzLSM2jQNyDQl1waWFItgMK+Tulb8oqv8o01gt4JTQrWCmvJLP1AEAFARtBG4m5g6EMJFEXl8YOm4f5itDaqBezUBPFNGaLOSJhhFEyrRBfQdBcUfKSGPpQHrXNieViF6KJbtkLGIhWHHcNSRhtl9UGzvLvCphEBCUXNPFAemNJeccxBBYDAbOZb5uPjZlVyGI0YRhH0AgNytCX7iBEaygdX86t7MKOhUz2MhJfE3rgFkKvvlI+6yZKAJLZ2MbwWbpde4jiDusOFvW51kXrgdCCIbwuppHoGZgbq0+9MU3Qlr6xwE2fMqkhSMw7r+81j2CaTQB5CDIwl3fRyBWobn1JbxKhsu84jjXxtbaH0U6YAgqY97hp2w2URrTnScQKFdl9wheIukjEIGyhfYQ9NFwUHgI0Mp40zDE9AV0q2PaO4qUDBqCqOqlYKYLdr0UbfU+BFF92z0bgdSAdNdOPOIGGFK5CHp4a4KviNUqXtyyR+tqoXT3ROWGrl19u2MYgrqXgpFA3icqOH0TFAJjlwrba2j6UrCoLLcxmbLji2ff8hWoZiNRhCJP1v8qEMFu2diOffZGdW2tCkytnGuV2fo2oWpagKcVlKvpaIeBUQi0Y49rBB0fQQuMRh5TXwISzp5Yud5nAIGx7ALAJeCczALYBLEF0DhBMUPgOtukXB2/OAiMQmAYg4l7k8VOWyb3I10MZd2VdZwCsZB5hX8g+faej8BaduEbb0MJnpBQtdoEpjnoG19MEcn6faK4XIHQKKAIFIKIQpDacd/aObTqONs7MiTmfvhusIHAEY/v3tdfzhQ2dQKYuXbIEMAZ6K7gqED1G0cjkPZOEzkeQtZTp6hRL48MidHy3eAEdddV6miMRiVpTH2BaAcMAdonCshVNY9INzMRJC4C5zYFKlZTNhNnVTcHawhr6iDIiKhF2HudmNqDroo0BFSfqCfXBi82PQ2CuXtaop+YJ8TYWdVT/JmzTILqlinDV1vZxsRUAR1PuCGgu3qdBwfIrl7iiYQjEfTRjTYmfuLFWdULXCbOfk1sMSNk+/Y/NTHVWOZbIN0UcfpEDbMc6upFzfKRCDS6TJ8IL+b2qr7CGL/gIPBj0l/2xeEnoTl1Aht/cOvw+kRLueoup/Xx9h0IXI9IoTbX34P11pb2qgPKDRY2gtCVu/AYN/mdNgTcPtFCrsyuXlgRjnRKowMQaAzBC/WLByCYWtfWY9+kaQ5irm8DjMGQ3dULPTHLDM1ebQTyJAimH4JAUl0A5k1aecU7vPAV7Opd8PtPoSIOM0GhzxnBOIRgBt7kmig8kA1EQIMKs68XLOIw03TqHQiGpziIFJHHPc4WNJAEOdvLtIXK6euFS25HJat9BA+Qz+GRlCGPSDnQE5abk9Cugnkjfcj5wnt1gnI12omCioC1ExEIBFqyoRCMiWNg4NQLqKPPOcQnhLM/sfVHE7T2cYGSZH2bJ9cydyv+5ABDO18IBCu0cOkj6BOb6RcamulQCEFEx7Ejc+mlpKG9tP9FyIuMo8MUoRRqo1NFvgQwop2IKN933GiHQDDEzwEvppa4xvxySCZ+nhkwptuP/sI3wcS/OLDGKVV0gCKUQi0fDa8itOxAFSARdL2MEIFA5egmXLt7UKJyNc6hxM3FPaNhY+ZO1ejUub+9shHhmUaoXMt2ojomqyJfyI+ax0e1ct346RPK8ZOYPvvNCRK9Z+mKMUE9FuOUnLq/4+zmlZ+FsPLlRoQ2ZHQomr6NFUGXiuAFFKF2IgSBtXYWhREkSA7XjH+mftXMSuHekVUza9m/89w1sSnYDGY7nzHUNeSWkukORUOoblqiehZ/wfBEaQRCN1pgDpFCEJuX8g+cQY+B2nEbTglMgdqxwaANbJAELGlZYpp7hiBzFGhAddI5QgVeeyM9RWB01DGiuixiIIgsaoPbuGhxt1EOwA4KuW18Vnps3ZAAOyhuhqqYaqeFp745qqfaq/70FFO4ySJcYtWTHtmIitvaZksp8RjCQQjqEiWJIA4uJEAERT+G1/EzdXd2Gl4WaDpyD3DPz3jzulqoZ0m+Z5YnSpbStn5UxnowJYxARywEUeihzzfP6KZBse6lOmgFl7UECUanwjUEGbB/pKJadW1PFCmliTKgGPMecAlG1Y8RE0FEZ1Tmvt+DyvXN29hTjemocZsxna8ceUVjAdUObihxKU45s/RPuY/OBxBkccRGQO7CuQIQCFhmT76flSBKZhd8H8NaaBqCN3j/hAwoo5Zz0EPzNAJblQIIqMziUgHe/wCWmTE3MdJA0HOPqRPz4O/jqLS5iRTKoH5rbqsWu0R5OIKlxlINkhvCQJ6ZWbj8TnfzJIZBUi1aR3eX+C+dJl7lWI3ZuJIuIS92gYz/jlgUwdJ/SiqMAEyopDMRYQi8WDKDnzWLIcCguYPSatlPIEP9hpuyO1Rca345Ew21vSsGXoYzS+5jBR401ZgSXoPzuOayobBcxi5QMOcvnU6SUXVJe48EBWuc1Q//2TugppoYd+ldOPFZfQzNuAACDxt/9NCj3b3OGtCDx14HhdhNTzgvoIsbs93C5Cylt9OKNU/94Dqzpjw+67fDynA24KwHo6ac6fO+hUtHEK4pj8/9Bcn5pSMIlCjn8dlf/xdAQJQomQ8bXxF8mCIsL+JNpF8DAfgyuotQga+DAPBPny7l7xR8GQSOf3runujXRGAqwviC/lTHV0JQltJYLym6IvhI/5T5kqLziY6r8RR9jfH4dP0rKScf/wObO2Zcb2KHdQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMS0xMlQwNDozNjo1NyswMDowMDsC6fAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDEtMTJUMDQ6MzY6NTcrMDA6MDBKX1FMAAAAAElFTkSuQmCC",
    pm = "/assets/logo-DKFkkrla.svg",
    tv =
      "data:image/svg+xml,%3csvg%20width='43'%20height='28'%20viewBox='0%200%2043%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.7984%2027.6L18.9984%200H12.3984L0.398438%2027.6H11.7984ZM35.7984%2027.6L42.9984%200H36.3984L24.3984%2027.6H35.7984Z'%20fill='url(%23paint0_linear_310_509)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_310_509'%20x1='28.8615'%20y1='-24.7969'%20x2='41.7939'%20y2='24.1471'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.00887753'%20stop-color='%23DEF9FA'/%3e%3cstop%20offset='0.1723'%20stop-color='%23BEF3F5'/%3e%3cstop%20offset='0.4204'%20stop-color='%239DEDF0'/%3e%3cstop%20offset='0.5512'%20stop-color='%237DE7EB'/%3e%3cstop%20offset='0.7154'%20stop-color='%235CE1E6'/%3e%3cstop%20offset='1'%20stop-color='%2333BBCF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
    nv = "/assets/robot-CNny4SWc.png",
    rv =
      "data:image/svg+xml,%3csvg%20width='33'%20height='32'%20viewBox='0%200%2033%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.4966%200.931172C30.6963%200.109757%2029.5118%20-0.196261%2028.4074%200.125863L2.65282%207.61524C1.48754%207.93897%200.661604%208.8683%200.439113%2010.0489C0.21182%2011.2504%201.00574%2012.7757%202.04297%2013.4135L10.0959%2018.3629C10.9218%2018.8702%2011.9878%2018.743%2012.6713%2018.0537L21.8927%208.77488C22.3569%208.2917%2023.1252%208.2917%2023.5894%208.77488C24.0536%209.24196%2024.0536%209.99895%2023.5894%2010.4821L14.352%2019.7625C13.6669%2020.4503%2013.5389%2021.5213%2014.0431%2022.3524L18.9635%2030.486C19.5397%2031.4524%2020.5321%2032%2021.6206%2032C21.7486%2032%2021.8927%2032%2022.0207%2031.9839C23.2693%2031.8228%2024.2617%2030.9692%2024.6298%2029.7612L32.2649%204.03967C32.6011%202.94445%2032.297%201.75259%2031.4966%200.931172'%20fill='%2300F6FF'/%3e%3c/svg%3e",
    iv =
      "data:image/svg+xml,%3csvg%20width='28'%20height='32'%20viewBox='0%200%2028%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5649%2031.8619C13.7421%2031.9544%2013.9402%2032.0015%2014.1384%2031.9999C14.3365%2031.9984%2014.533%2031.9497%2014.7118%2031.8556L20.4204%2028.8039C22.0392%2027.941%2023.3069%2026.9761%2024.2959%2025.8527C26.4463%2023.4051%2027.6206%2020.2813%2027.5997%2017.0602L27.532%206.43517C27.5256%205.21138%2026.7218%204.11938%2025.533%203.72243L14.9131%200.159303C14.2737%20-0.0572148%2013.573%20-0.0525079%2012.9448%200.170286L2.36516%203.8605C1.18284%204.27314%200.393559%205.37298%200.400003%206.59834L0.467655%2017.2155C0.488595%2020.4413%201.70312%2023.551%203.88895%2025.9735C4.88764%2027.0812%206.1666%2028.032%207.80315%2028.8808L13.5649%2031.8619ZM12.0537%2019.3743C12.2921%2019.6034%2012.6014%2019.7163%2012.9106%2019.7132C13.2199%2019.7116%2013.5276%2019.5955%2013.7627%2019.3633L20.0013%2013.213C20.47%2012.7501%2020.4652%2012.0064%2019.9916%2011.5498C19.5164%2011.0933%2018.7513%2011.0964%2018.2826%2011.5593L12.8929%2016.8718L10.6861%2014.7505C10.211%2014.294%209.44745%2014.2987%208.9771%2014.7615C8.50837%2015.2244%208.5132%2015.9681%208.98838%2016.4246L12.0537%2019.3743Z'%20fill='%2300F6FF'/%3e%3c/svg%3e",
    sv =
      "data:image/svg+xml,%3csvg%20width='33'%20height='32'%20viewBox='0%200%2033%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.4696%2019.7122C25.0552%2020.1138%2024.8648%2020.6946%2024.9592%2021.2642L26.3816%2029.1362C26.5016%2029.8034%2026.22%2030.4786%2025.6616%2030.8642C25.1144%2031.2642%2024.3864%2031.3122%2023.7896%2030.9922L16.7032%2027.2962C16.4568%2027.165%2016.1832%2027.0946%2015.9032%2027.0866H15.4696C15.3192%2027.109%2015.172%2027.157%2015.0376%2027.2306L7.94959%2030.9442C7.59919%2031.1202%207.20239%2031.1826%206.81359%2031.1202C5.86639%2030.941%205.23439%2030.0386%205.38959%2029.0866L6.81359%2021.2146C6.90799%2020.6402%206.71759%2020.0562%206.30319%2019.6482L0.525591%2014.0482C0.042391%2013.5794%20-0.125609%2012.8754%200.095191%2012.2402C0.309591%2011.6066%200.856791%2011.1442%201.51759%2011.0402L9.46959%209.88663C10.0744%209.82423%2010.6056%209.45623%2010.8776%208.91223L14.3816%201.72823C14.4648%201.56823%2014.572%201.42103%2014.7016%201.29623L14.8456%201.18423C14.9208%201.10103%2015.0072%201.03223%2015.1032%200.976232L15.2776%200.912232L15.5496%200.800232H16.2232C16.8248%200.862632%2017.3544%201.22263%2017.6312%201.76023L21.1816%208.91223C21.4376%209.43543%2021.9352%209.79863%2022.5096%209.88663L30.4616%2011.0402C31.1336%2011.1362%2031.6952%2011.6002%2031.9176%2012.2402C32.1272%2012.8818%2031.9464%2013.5858%2031.4536%2014.0482L25.4696%2019.7122Z'%20fill='%2300F6FF'/%3e%3c/svg%3e",
    ov =
      "data:image/svg+xml,%3csvg%20width='20'%20height='12'%20viewBox='0%200%2020%2012'%20fill='%23FFF'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%202L19%202C19.2652%202%2019.5196%201.89464%2019.7071%201.70711C19.8946%201.51957%2020%201.26522%2020%201C20%200.734784%2019.8946%200.480429%2019.7071%200.292892C19.5196%200.105356%2019.2652%200%2019%200L9%200C8.73478%200%208.48043%200.105356%208.29289%200.292892C8.10536%200.480429%208%200.734784%208%201C8%201.26522%208.10536%201.51957%208.29289%201.70711C8.48043%201.89464%208.73478%202%209%202ZM19%2010L1%2010C0.734784%2010%200.480429%2010.1054%200.292892%2010.2929C0.105356%2010.4804%200%2010.7348%200%2011C0%2011.2652%200.105356%2011.5196%200.292892%2011.7071C0.480429%2011.8946%200.734784%2012%201%2012L19%2012C19.2652%2012%2019.5196%2011.8946%2019.7071%2011.7071C19.8946%2011.5196%2020%2011.2652%2020%2011C20%2010.7348%2019.8946%2010.4804%2019.7071%2010.2929C19.5196%2010.1054%2019.2652%2010%2019%2010V10ZM1%207L19%207C19.2652%207%2019.5196%206.89464%2019.7071%206.70711C19.8946%206.51957%2020%206.26522%2020%206C20%205.73478%2019.8946%205.48043%2019.7071%205.29289C19.5196%205.10536%2019.2652%205%2019%205L1%205C0.734784%205%200.480429%205.10536%200.292892%205.29289C0.105356%205.48043%200%205.73478%200%206C0%206.26522%200.105356%206.51957%200.292892%206.70711C0.480429%206.89464%200.734784%207%201%207Z'%20fill='%23FFFFFF'/%3e%3c/svg%3e",
    av =
      "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='%23FFF'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.4099%209L16.7099%202.71C16.8982%202.5217%2017.004%202.2663%2017.004%202C17.004%201.7337%2016.8982%201.47831%2016.7099%201.29C16.5216%201.1017%2016.2662%200.995911%2015.9999%200.995911C15.7336%200.995911%2015.4782%201.1017%2015.2899%201.29L8.99994%207.59L2.70994%201.29C2.52164%201.1017%202.26624%200.995911%201.99994%200.995911C1.73364%200.995911%201.47824%201.1017%201.28994%201.29C1.10164%201.47831%200.995847%201.7337%200.995847%202C0.995847%202.2663%201.10164%202.5217%201.28994%202.71L7.58994%209L1.28994%2015.29C1.19621%2015.383%201.12182%2015.4936%201.07105%2015.6154C1.02028%2015.7373%200.994141%2015.868%200.994141%2016C0.994141%2016.132%201.02028%2016.2627%201.07105%2016.3846C1.12182%2016.5064%201.19621%2016.617%201.28994%2016.71C1.3829%2016.8037%201.4935%2016.8781%201.61536%2016.9289C1.73722%2016.9797%201.86793%2017.0058%201.99994%2017.0058C2.13195%2017.0058%202.26266%2016.9797%202.38452%2016.9289C2.50638%2016.8781%202.61698%2016.8037%202.70994%2016.71L8.99994%2010.41L15.2899%2016.71C15.3829%2016.8037%2015.4935%2016.8781%2015.6154%2016.9289C15.7372%2016.9797%2015.8679%2017.0058%2015.9999%2017.0058C16.132%2017.0058%2016.2627%2016.9797%2016.3845%2016.9289C16.5064%2016.8781%2016.617%2016.8037%2016.7099%2016.71C16.8037%2016.617%2016.8781%2016.5064%2016.9288%2016.3846C16.9796%2016.2627%2017.0057%2016.132%2017.0057%2016C17.0057%2015.868%2016.9796%2015.7373%2016.9288%2015.6154C16.8781%2015.4936%2016.8037%2015.383%2016.7099%2015.29L10.4099%209Z'%20fill='%23FFFFFF'/%3e%3c/svg%3e",
    lv = "/assets/google-CfHiuw7M.svg",
    uv = "/assets/apple-CEYRg74y.svg",
    cv =
      "data:image/svg+xml,%3csvg%20width='22'%20height='21'%20viewBox='0%200%2022%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.98978%2015.2615C4.75588%2014.9828%204.76972%2014.5786%205.00787%2014.3167L5.07837%2014.2489L16.0903%205.00887C16.3943%204.75371%2016.8477%204.79338%2017.1029%205.09746C17.3367%205.37621%2017.3229%205.78038%2017.0848%206.04234L17.0143%206.11006L6.00238%2015.3501C5.69829%2015.6053%205.24494%2015.5656%204.98978%2015.2615Z'%20fill='white'/%3e%3cpath%20d='M8.33877%205.57975C7.94325%205.546%207.64998%205.19801%207.68372%204.8025C7.7144%204.44294%208.00478%204.16787%208.35448%204.14619L8.46097%204.14745L16.6132%204.843C16.9739%204.87377%2017.2493%205.16571%2017.2697%205.51648L17.268%205.62327L16.538%2013.7732C16.5026%2014.1686%2016.1534%2014.4604%2015.758%2014.425C15.3986%2014.3928%2015.1247%2014.1012%2015.1045%2013.7514L15.1062%2013.645L15.7714%206.21386L8.33877%205.57975Z'%20fill='white'/%3e%3c/svg%3e",
    fv =
      "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20d='M15.9988%2029.331C14.9735%2029.331%2013.9495%2028.9417%2013.1668%2028.1643L12.1935%2027.191C11.8161%2026.815%2011.3108%2026.607%2010.7748%2026.6057H9.40546C7.19212%2026.6057%205.39079%2024.8043%205.39079%2022.591V21.2203C5.38946%2020.6857%205.18146%2020.1803%204.80412%2019.8003L3.84679%2018.8443C2.27879%2017.2857%202.27212%2014.7377%203.83212%2013.1683L4.80546%2012.1937C5.18146%2011.8163%205.38946%2011.311%205.39079%2010.775V9.40699C5.39079%207.19232%207.19212%205.39099%209.40546%205.39099H10.7761C11.3108%205.39099%2011.8148%205.18299%2012.1948%204.80299L13.1535%203.84699C14.7121%202.27899%2017.2588%202.27099%2018.8295%203.83232L19.8028%204.80565C20.1815%205.18299%2020.6855%205.39099%2021.2201%205.39099H22.5908C24.8041%205.39099%2026.6055%207.19232%2026.6055%209.40699V10.7763C26.6068%2011.311%2026.8148%2011.8163%2027.1921%2012.1963L28.1495%2013.1537C28.9081%2013.9083%2029.3281%2014.9137%2029.3321%2015.987C29.3348%2017.0537%2028.9241%2018.0577%2028.1761%2018.8163C28.1628%2018.8297%2028.1508%2018.8443%2028.1375%2018.8563L27.1908%2019.803C26.8148%2020.1803%2026.6068%2020.6857%2026.6055%2021.2217V22.591C26.6055%2024.8043%2024.8041%2026.6057%2022.5908%2026.6057H21.2201C20.6855%2026.607%2020.1801%2026.815%2019.8015%2027.1923L18.8428%2028.1497C18.0615%2028.9363%2017.0295%2029.331%2015.9988%2029.331'%20fill='%23393939'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.3904%2013.4012C13.1704%2013.6212%2012.8851%2013.7399%2012.5691%2013.7399C12.2731%2013.7399%2011.9824%2013.6186%2011.7491%2013.3999C11.5277%2013.1799%2011.4024%2012.8786%2011.4024%2012.5732C11.4024%2012.2826%2011.5251%2011.9839%2011.7411%2011.7532C11.8597%2011.6332%2012.0011%2011.5426%2012.1424%2011.4946C12.5451%2011.3106%2013.0797%2011.4186%2013.3971%2011.7519C13.5104%2011.8652%2013.5971%2011.9892%2013.6544%2012.1186C13.7171%2012.2572%2013.7491%2012.4146%2013.7491%2012.5732C13.7491%2012.8906%2013.6224%2013.1852%2013.3904%2013.4012ZM20.254%2011.7464C19.7993%2011.2931%2019.0593%2011.2931%2018.6047%2011.7464L11.7513%2018.5998C11.2967%2019.0544%2011.2967%2019.7944%2011.7513%2020.2504C11.9727%2020.4704%2012.2647%2020.5918%2012.5767%2020.5918C12.8887%2020.5918%2013.1807%2020.4704%2013.4007%2020.2504L20.254%2013.3971C20.7087%2012.9411%2020.7087%2012.2024%2020.254%2011.7464ZM19.8744%2018.3519C19.4424%2018.1706%2018.9304%2018.2692%2018.5891%2018.6106C18.5184%2018.6932%2018.4184%2018.8212%2018.3504%2018.9719C18.2784%2019.1346%2018.2691%2019.3092%2018.2691%2019.4266C18.2691%2019.5439%2018.2784%2019.7172%2018.3504%2019.8799C18.4171%2020.0292%2018.4971%2020.1506%2018.6024%2020.2559C18.8437%2020.4799%2019.1237%2020.5932%2019.4357%2020.5932C19.7317%2020.5932%2020.0224%2020.4732%2020.2611%2020.2506C20.4731%2020.0386%2020.5891%2019.7452%2020.5891%2019.4266C20.5891%2019.1066%2020.4731%2018.8146%2020.2597%2018.6012C20.1424%2018.4852%2020.0011%2018.3946%2019.8744%2018.3519Z'%20fill='%2300F6FF'/%3e%3c/svg%3e",
    dv =
      "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.5001%200C4.7011%200%200%204.72075%200%2010.544C0%2015.7667%203.78548%2020.092%208.74886%2020.9296V12.7437H6.21594V9.79796H8.74886V7.62588C8.74886%205.10564%2010.2817%203.73225%2012.5209%203.73225C13.5934%203.73225%2014.515%203.8125%2014.7826%203.84784V6.48217L13.2295%206.48292C12.012%206.48292%2011.7773%207.06377%2011.7773%207.91643V9.79645H14.6824L14.3035%2012.7422H11.7773V21C16.9724%2020.3651%2021%2015.9296%2021%2010.5409C21%204.72075%2016.2989%200%2010.5001%200Z'%20fill='white'/%3e%3c/svg%3e",
    pv =
      "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.9466%206.17408C20.8974%205.05826%2020.7169%204.29115%2020.4584%203.62644C20.1917%202.92086%2019.7814%202.28916%2019.2438%201.76402C18.7186%201.23071%2018.0826%200.816309%2017.3851%200.553821C16.7164%200.295339%2015.9531%200.114899%2014.8371%200.0657021C13.7127%200.0123392%2013.3558%200%2010.5041%200C7.65239%200%207.29545%200.0123392%206.17525%200.0615356C5.05923%200.110732%204.29197%200.291333%203.62729%200.549654C2.92142%200.816309%202.28959%201.22655%201.76436%201.76402C1.23095%202.28916%200.816625%202.92503%200.553926%203.62243C0.295395%204.29115%200.114921%205.0541%200.0657146%206.16991C0.0123415%207.29406%200%207.65093%200%2010.5021C0%2013.3532%200.0123415%2013.7101%200.0615474%2014.8301C0.110753%2015.9459%200.291388%2016.713%200.549919%2017.3777C0.816625%2018.0833%201.23095%2018.715%201.76436%2019.2401C2.28959%2019.7735%202.92558%2020.1879%203.62312%2020.4503C4.29197%2020.7088%205.05506%2020.8893%206.17125%2020.9385C7.29128%2020.9878%207.64838%2021%2010.5001%2021C13.3518%2021%2013.7087%2020.9878%2014.8289%2020.9385C15.9449%2020.8893%2016.7122%2020.7088%2017.3769%2020.4503C18.7885%2019.9047%2019.9045%2018.7889%2020.4502%2017.3777C20.7086%2016.709%2020.8892%2015.9459%2020.9385%2014.8301C20.9877%2013.7101%2021%2013.3532%2021%2010.5021C21%207.65093%2020.9958%207.29406%2020.9466%206.17408ZM19.0552%2014.748C19.01%2015.7736%2018.8377%2016.3275%2018.6941%2016.6967C18.3411%2017.6115%2017.6149%2018.3376%2016.6999%2018.6905C16.3306%2018.8341%2015.7726%2019.0063%2014.7509%2019.0514C13.643%2019.1007%2013.3107%2019.1129%2010.5083%2019.1129C7.70576%2019.1129%207.36934%2019.1007%206.26549%2019.0514C5.2397%2019.0063%204.68578%2018.8341%204.31649%2018.6905C3.86114%2018.5222%203.44665%2018.2556%203.11023%2017.9069C2.76146%2017.5663%202.49475%2017.1561%202.32646%2016.7008C2.18285%2016.3316%202.01055%2015.7736%201.96551%2014.7522C1.91614%2013.6446%201.90396%2013.3122%201.90396%2010.5103C1.90396%207.7083%201.91614%207.37194%201.96551%206.26846C2.01055%205.24287%202.18285%204.68905%202.32646%204.31983C2.49475%203.86441%202.76146%203.45016%203.11439%203.11364C3.45483%202.76494%203.86514%202.49828%204.32066%202.33018C4.68994%202.1866%205.24804%202.01433%206.26966%201.96914C7.37751%201.91994%207.70993%201.9076%2010.5123%201.9076C13.3189%201.9076%2013.6512%201.91994%2014.755%201.96914C15.7808%202.01433%2016.3347%202.1866%2016.704%202.33018C17.1594%202.49828%2017.5739%202.76494%2017.9103%203.11364C18.2591%203.45417%2018.5258%203.86441%2018.6941%204.31983C18.8377%204.68905%2019.01%205.24687%2019.0552%206.26846C19.1044%207.3761%2019.1167%207.7083%2019.1167%2010.5103C19.1167%2013.3122%2019.1044%2013.6404%2019.0552%2014.748Z'%20fill='white'/%3e%3cpath%20d='M10.5%206C8.01567%206%206%208.01554%206%2010.5C6%2012.9845%208.01567%2015%2010.5%2015C12.9845%2015%2015%2012.9845%2015%2010.5C15%208.01554%2012.9845%206%2010.5%206ZM10.5%2013.419C8.88829%2013.419%207.58096%2012.1118%207.58096%2010.5C7.58096%208.88816%208.88829%207.58096%2010.5%207.58096C12.1118%207.58096%2013.419%208.88816%2013.419%2010.5C13.419%2012.1118%2012.1118%2013.419%2010.5%2013.419Z'%20fill='white'/%3e%3cpath%20d='M18%205.5C18%206.32835%2017.3284%207%2016.4999%207C15.6716%207%2015%206.32835%2015%205.5C15%204.67146%2015.6716%204%2016.4999%204C17.3284%204%2018%204.67146%2018%205.5Z'%20fill='white'/%3e%3c/svg%3e",
    hv =
      "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.4855%200H1.51453C0.67804%200%200%200.67804%200%201.51453V19.4855C0%2020.322%200.67804%2021%201.51453%2021H19.4855C20.322%2021%2021%2020.322%2021%2019.4855V1.51453C21%200.67804%2020.322%200%2019.4855%200V0ZM7.44882%2015.873H4.89159V8.17957H7.44882V15.873ZM6.17029%207.12903H6.15363C5.2955%207.12903%204.74051%206.53831%204.74051%205.80003C4.74051%205.04508%205.31248%204.4707%206.18727%204.4707C7.06206%204.4707%207.60039%205.04508%207.61705%205.80003C7.61705%206.53831%207.06206%207.12903%206.17029%207.12903ZM16.6696%2015.873H14.1127V11.7572C14.1127%2010.7229%2013.7425%2010.0174%2012.8172%2010.0174C12.1108%2010.0174%2011.6901%2010.4933%2011.5052%2010.9526C11.4376%2011.117%2011.4211%2011.3467%2011.4211%2011.5767V15.873H8.86402C8.86402%2015.873%208.89751%208.90135%208.86402%208.17957H11.4211V9.26889C11.7609%208.74466%2012.3689%207.99901%2013.7257%207.99901C15.4081%207.99901%2016.6696%209.09858%2016.6696%2011.4616V15.873Z'%20fill='white'/%3e%3c/svg%3e",
    mv =
      "data:image/svg+xml,%3csvg%20width='23'%20height='19'%20viewBox='0%200%2023%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23%202.24931C22.1447%202.63077%2021.2333%202.88362%2020.2831%203.00638C21.2606%202.413%2022.0067%201.48054%2022.3574%200.356615C21.4461%200.909077%2020.4398%201.29931%2019.3674%201.51708C18.5021%200.580231%2017.2687%200%2015.9232%200C13.3127%200%2011.2111%202.15431%2011.2111%204.79531C11.2111%205.17531%2011.2427%205.54069%2011.3203%205.88854C7.40025%205.69415%203.93156%203.78392%201.60137%200.874C1.19456%201.59162%200.955938%202.413%200.955938%203.29723C0.955938%204.95754%201.79688%206.42931%203.05037%207.28138C2.29281%207.26677%201.54962%207.04315%200.92%206.69092C0.92%206.70554%200.92%206.72454%200.92%206.74354C0.92%209.07323%202.55444%2011.0083%204.69775%2011.4541C4.31394%2011.5608%203.89562%2011.6119%203.4615%2011.6119C3.15963%2011.6119%202.85487%2011.5944%202.56881%2011.5301C3.17975%2013.4286%204.91338%2014.8244%206.97475%2014.8697C5.3705%2016.1456%203.33356%2016.9144%201.12844%2016.9144C0.74175%2016.9144%200.370875%2016.8968%200%2016.8486C2.08869%2018.2181%204.56406%2019%207.2335%2019C15.9102%2019%2020.654%2011.6923%2020.654%205.358C20.654%205.14608%2020.6468%204.94146%2020.6367%204.73831C21.5726%204.06308%2022.3589%203.21977%2023%202.24931Z'%20fill='white'/%3e%3c/svg%3e",
    gv = "/assets/people01-Cz9JsHBk.png",
    yv = "/assets/people02-DyptuazR.png",
    vv = "/assets/people03-DnvX2ZFr.png",
    Zo = [
      { id: "home", title: "Home" },
      { id: "features", title: "Features" },
      { id: "product", title: "Product" },
      { id: "clients", title: "Clients" },
      { id: "let's talk", title: "let's talk" },
    ],
    hm = [
      {
        id: "feature-1",
        icon: sv,
        title: "Rewards",
        content:
          "The best credit cards offer some tantalizing combinations of promotions and prizes",
      },
      {
        id: "feature-2",
        icon: iv,
        title: "100% Secured",
        content:
          "We take proactive steps make sure your information and transactions are secure.",
      },
      {
        id: "feature-3",
        icon: rv,
        title: "Balance Transfer",
        content:
          "A balance transfer credit card can save you a lot of money in interest charges.",
      },
    ],
    wv = [
      {
        id: "feedback-1",
        content:
          "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        img: gv,
      },
      {
        id: "feedback-2",
        content:
          "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        img: yv,
      },
      {
        id: "feedback-3",
        content:
          "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        img: vv,
      },
    ],
    xv = [
      { id: "stats-1", title: "User Active", value: "3800+" },
      { id: "stats-2", title: "Trusted by Company", value: "230+" },
      { id: "stats-3", title: "Transaction", value: "$230M+" },
    ],
    Cv = [
      {
        title: "Useful Links",
        links: [
          { name: "Content", link: "https://www.iwebdev.tech/" },
          { name: "How it Works", link: "https://www.iwebdev.tech/" },
          { name: "Create", link: "https://www.iwebdev.tech/" },
          { name: "Explore", link: "https://www.iwebdev.tech/" },
          { name: "Terms & Services", link: "https://www.iwebdev.tech/" },
        ],
      },
      {
        title: "Community",
        links: [
          { name: "Help Center", link: "https://bizz.iwebdev.tech/" },
          { name: "Partners", link: "https://bizz.iwebdev.tech/" },
          { name: "Suggestions", link: "https://bizz.iwebdev.tech/" },
          { name: "Blog", link: "https://bizz.iwebdev.tech/" },
          { name: "Newsletters", link: "https://bizz.iwebdev.tech/" },
        ],
      },
      {
        title: "Partner",
        links: [
          { name: "Our Partner", link: "https://lironabutbul.vercel.app" },
          { name: "Become a Partner", link: "https://lironabutbul.vercel.app" },
        ],
      },
    ],
    oh = [
      { id: "social-media-1", icon: pv, link: "https://www.instagram.com/" },
      { id: "social-media-2", icon: dv, link: "https://www.facebook.com/" },
      { id: "social-media-3", icon: mv, link: "https://www.twitter.com/" },
      { id: "social-media-4", icon: hv, link: "https://www.linkedin.com/" },
    ],
    Av = [
      { id: "client-1", logo: Gy },
      { id: "client-2", logo: Yy },
      { id: "client-3", logo: Jy },
      { id: "client-4", logo: ev },
    ],
    Sv = () => {
      const [t, r] = H.useState("Home"),
        [i, o] = H.useState(!1),
        [l, f] = H.useState(!1);
      return (
        H.useEffect(() => {
          const c = () => {
            f(window.scrollY > 50);
          };
          return (
            window.addEventListener("scroll", c),
            () => window.removeEventListener("scroll", c)
          );
        }, []),
        R.jsx("div", {
          className: `w-full fixed top-0 left-0 z-50 duration-300  ${
            l ? "backdrop-blur-lg bg-[#7de7eb18]" : "bg-transparent"
          }`,
          children: R.jsx("div", {
            className: "container mx-auto px-3 sm:px-0",
            children: R.jsxs("nav", {
              className:
                "w-full flex py-6 justify-between items-center navbar ",
              children: [
                R.jsx("img", {
                  src: pm,
                  alt: "hoobank",
                  className: "w-[124px] h-[32px]",
                }),
                R.jsx("ul", {
                  className:
                    "list-none sm:flex hidden justify-end items-center flex-1",
                  children: Zo.map((c, p) =>
                    R.jsx(
                      "li",
                      {
                        className: `font-poppins font-normal cursor-pointer text-[16px] ${
                          t === c.title ? "text-white" : "text-dimWhite"
                        } ${p === Zo.length - 1 ? "mr-0" : "mr-10"}`,
                        onClick: () => r(c.title),
                        children: R.jsx("a", {
                          href: `#${c.id}`,
                          children: c.title,
                        }),
                      },
                      c.id
                    )
                  ),
                }),
                R.jsxs("div", {
                  className: "sm:hidden flex flex-1 justify-end items-center",
                  children: [
                    R.jsx("img", {
                      src: i ? av : ov,
                      alt: "menu",
                      className: "w-[28px] h-[28px] object-contain",
                      onClick: () => o(!i),
                    }),
                    R.jsx("div", {
                      className: `${
                        i ? "flex" : "hidden"
                      } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`,
                      children: R.jsx("ul", {
                        className:
                          "list-none flex justify-center items-start flex-1 flex-col",
                        children: Zo.map((c, p) =>
                          R.jsx(
                            "li",
                            {
                              className: `font-poppins font-medium cursor-pointer text-[16px] ${
                                t === c.title ? "text-white" : "text-dimWhite"
                              } ${p === Zo.length - 1 ? "mb-0" : "mb-4"}`,
                              onClick: () => r(c.title),
                              children: R.jsx("a", {
                                href: `#${c.id}`,
                                children: c.title,
                              }),
                            },
                            c.id
                          )
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        })
      );
    },
    Ev = () =>
      R.jsxs("section", {
        id: "product",
        className: An.sectionReverse,
        children: [
          R.jsxs("div", {
            className: An.sectionImgReverse,
            children: [
              R.jsx("img", {
                src: qy,
                alt: "billing",
                className: "w-[100%] h-[100%] relative z-[5]",
              }),
              R.jsx("div", {
                className:
                  "absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient",
              }),
              R.jsx("div", {
                className:
                  "absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient",
              }),
            ],
          }),
          R.jsxs("div", {
            className: An.sectionInfo,
            children: [
              R.jsxs("h2", {
                className: ue.heading2,
                children: [
                  "Easily control your ",
                  R.jsx("br", { className: "sm:block hidden" }),
                  " billing & invoicing",
                ],
              }),
              R.jsx("p", {
                className: `${ue.paragraph} max-w-[470px] mt-5`,
                children:
                  "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.",
              }),
              R.jsxs("div", {
                className: "flex flex-row flex-wrap sm:mt-10 mt-6",
                children: [
                  R.jsx("img", {
                    src: uv,
                    alt: "google_play",
                    className:
                      "w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer",
                  }),
                  R.jsx("img", {
                    src: lv,
                    alt: "google_play",
                    className:
                      "w-[144.17px] h-[43.08px] object-contain cursor-pointer",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    Cc = ({ styles: t }) =>
      R.jsx("button", {
        type: "button",
        className: `py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${t}`,
        children: "Get Started",
      }),
    Tv = () =>
      R.jsxs("section", {
        className: An.section,
        children: [
          R.jsxs("div", {
            className: An.sectionInfo,
            children: [
              R.jsxs("h2", {
                className: ue.heading2,
                children: [
                  "Find a better card deal ",
                  R.jsx("br", { className: "sm:block hidden" }),
                  " in few easy steps.",
                ],
              }),
              R.jsx("p", {
                className: `${ue.paragraph} max-w-[470px] mt-5`,
                children:
                  "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.",
              }),
              R.jsx(Cc, { styles: "mt-10" }),
            ],
          }),
          R.jsx("div", {
            className: An.sectionImg,
            children: R.jsx("img", {
              src: Xy,
              alt: "billing",
              className: "w-[100%] h-[100%]",
            }),
          }),
        ],
      }),
    Pv = ({ icon: t, title: r, content: i, index: o }) =>
      R.jsxs("div", {
        className: `flex flex-row p-6 rounded-[20px] ${
          o !== hm.length - 1 ? "mb-6" : "mb-0"
        } feature-card`,
        children: [
          R.jsx("div", {
            className: `w-[64px] h-[64px] rounded-full ${ue.flexCenter} bg-dimBlue`,
            children: R.jsx("img", {
              src: t,
              alt: "star",
              className: "w-[50%] h-[50%] object-contain",
            }),
          }),
          R.jsxs("div", {
            className: "flex-1 flex flex-col ml-3",
            children: [
              R.jsx("h4", {
                className:
                  "font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1",
                children: r,
              }),
              R.jsx("p", {
                className:
                  "font-poppins font-normal text-dimWhite text-[16px] leading-[24px]",
                children: i,
              }),
            ],
          }),
        ],
      }),
    kv = () =>
      R.jsxs("section", {
        id: "features",
        className: An.section,
        children: [
          R.jsxs("div", {
            className: An.sectionInfo,
            children: [
              R.jsxs("h2", {
                className: ue.heading2,
                children: [
                  "You do the business, ",
                  R.jsx("br", { className: "sm:block hidden" }),
                  " we’ll handle the money.",
                ],
              }),
              R.jsx("p", {
                className: `${ue.paragraph} max-w-[470px] mt-5`,
                children:
                  "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.",
              }),
              R.jsx(Cc, { styles: "mt-10" }),
            ],
          }),
          R.jsx("div", {
            className: `${An.sectionImg} flex-col`,
            children: hm.map((t, r) => R.jsx(Pv, { ...t, index: r }, t.id)),
          }),
        ],
      }),
    Rv = () =>
      R.jsx("section", {
        className: `${ue.flexCenter} my-4`,
        children: R.jsx("div", {
          className: `${ue.flexCenter} flex-wrap w-full`,
          children: Av.map((t) =>
            R.jsx(
              "div",
              {
                className: `flex-1 ${ue.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`,
                children: R.jsx("img", {
                  src: t.logo,
                  alt: "client_logo",
                  className: "sm:w-[192px] w-[100px] object-contain",
                }),
              },
              t.id
            )
          ),
        }),
      }),
    jv = () =>
      R.jsxs("section", {
        className: `${ue.flexCenter} ${ue.marginY} ${ue.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`,
        children: [
          R.jsxs("div", {
            className: "flex-1 flex flex-col",
            children: [
              R.jsx("h2", {
                className: ue.heading2,
                children: "Let’s try our service now!",
              }),
              R.jsx("p", {
                className: `${ue.paragraph} max-w-[470px] mt-5`,
                children:
                  "Everything you need to accept card payments and grow your business anywhere on the planet.",
              }),
            ],
          }),
          R.jsx("div", {
            className: `${ue.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`,
            children: R.jsx(Cc, {}),
          }),
        ],
      }),
    Ov = () =>
      R.jsx("section", {
        className: `${ue.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`,
        children: xv.map((t) =>
          R.jsxs(
            "div",
            {
              className: "flex-1 flex justify-start items-center flex-row m-3",
              children: [
                R.jsx("h4", {
                  className:
                    "font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white",
                  children: t.value,
                }),
                R.jsx("p", {
                  className:
                    "font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3",
                  children: t.title,
                }),
              ],
            },
            t.id
          )
        ),
      }),
    Mv = () =>
      R.jsxs("section", {
        className: `${ue.flexCenter} ${ue.paddingY} flex-col`,
        children: [
          R.jsxs("div", {
            className: `${ue.flexStart} md:flex-row flex-col mb-8 w-full`,
            children: [
              R.jsxs("div", {
                className: "flex-[1] flex flex-col justify-start mr-10",
                children: [
                  R.jsx("img", {
                    src: pm,
                    alt: "hoobank",
                    className: "w-[266px] h-[72.14px] object-contain",
                  }),
                  R.jsx("p", {
                    className: `${ue.paragraph} mt-4 max-w-[312px]`,
                    children:
                      "A new way to make the payments easy, reliable and secure.",
                  }),
                ],
              }),
              R.jsx("div", {
                className:
                  "flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10",
                children: Cv.map((t) =>
                  R.jsxs(
                    "div",
                    {
                      className: "flex flex-col ss:my-0 my-4 min-w-[150px]",
                      children: [
                        R.jsx("h4", {
                          className:
                            "font-poppins font-medium text-[18px] leading-[27px] text-white",
                          children: t.title,
                        }),
                        R.jsx("ul", {
                          className: "list-none mt-4",
                          children: t.links.map((r, i) =>
                            R.jsx(
                              "li",
                              {
                                onClick: () => window.open(r.link),
                                className: `font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                                  i !== t.links.length - 1 ? "mb-4" : "mb-0"
                                }`,
                                children: r.name,
                              },
                              r.name
                            )
                          ),
                        }),
                      ],
                    },
                    t.title
                  )
                ),
              }),
            ],
          }),
          R.jsxs("div", {
            className:
              "w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]",
            children: [
              R.jsxs("p", {
                className:
                  "font-poppins font-normal text-center text-[18px] leading-[27px] text-white",
                children: [
                  "Copyright Ⓒ ",
                  new Date().getFullYear(),
                  " HooBank. All Rights Reserved.",
                ],
              }),
              R.jsx("div", {
                className: "flex flex-row md:mt-0 mt-6",
                children: oh.map((t, r) =>
                  R.jsx(
                    "img",
                    {
                      src: t.icon,
                      alt: t.id,
                      className: `w-[21px] h-[21px] object-contain cursor-pointer ${
                        r !== oh.length - 1 ? "mr-6" : "mr-0"
                      }`,
                      onClick: () => window.open(t.link),
                    },
                    t.id
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    Lv = ({ content: t, name: r, title: i, img: o }) =>
      R.jsxs("div", {
        className:
          "flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card",
        children: [
          R.jsx("img", {
            src: tv,
            alt: "double_quotes",
            className: "w-[42.6px] h-[27.6px] object-contain",
          }),
          R.jsx("p", {
            className:
              "font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10",
            children: t,
          }),
          R.jsxs("div", {
            className: "flex flex-row",
            children: [
              R.jsx("img", {
                src: o,
                alt: r,
                className: "w-[48px] h-[48px] rounded-full",
              }),
              R.jsxs("div", {
                className: "flex flex-col ml-4",
                children: [
                  R.jsx("h4", {
                    className:
                      "font-poppins font-semibold text-[20px] leading-[32px] text-white",
                    children: r,
                  }),
                  R.jsx("p", {
                    className:
                      "font-poppins font-normal text-[16px] leading-[24px] text-dimWhite",
                    children: i,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    Dv = () =>
      R.jsxs("section", {
        id: "clients",
        className: `${ue.paddingY} ${ue.flexCenter} flex-col relative `,
        children: [
          R.jsx("div", {
            className:
              "absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40",
          }),
          R.jsxs("div", {
            className:
              "w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]",
            children: [
              R.jsxs("h2", {
                className: ue.heading2,
                children: [
                  "What People are ",
                  R.jsx("br", { className: "sm:block hidden" }),
                  " saying about us",
                ],
              }),
              R.jsx("div", {
                className: "w-full md:mt-0 mt-6",
                children: R.jsx("p", {
                  className: `${ue.paragraph} text-left max-w-[450px]`,
                  children:
                    "Everything you need to accept card payments and grow your business anywhere on the planet.",
                }),
              }),
            ],
          }),
          R.jsx("div", {
            className:
              "flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]",
            children: wv.map((t) => R.jsx(Lv, { ...t }, t.id)),
          }),
        ],
      }),
    mm = H.createContext({});
  function Nv(t) {
    const r = H.useRef(null);
    return r.current === null && (r.current = t()), r.current;
  }
  const Ac = H.createContext(null),
    gm = H.createContext({
      transformPagePoint: (t) => t,
      isStatic: !1,
      reducedMotion: "never",
    });
  function bv(t = !0) {
    const r = H.useContext(Ac);
    if (r === null) return [!0, null];
    const { isPresent: i, onExitComplete: o, register: l } = r,
      f = H.useId();
    H.useEffect(() => {
      if (t) return l(f);
    }, [t]);
    const c = H.useCallback(() => t && o && o(f), [f, o, t]);
    return !i && o ? [!1, c] : [!0];
  }
  const Sc = typeof window < "u",
    Fv = Sc ? H.useLayoutEffect : H.useEffect,
    Lt = (t) => t;
  let ym = Lt;
  function Ec(t) {
    let r;
    return () => (r === void 0 && (r = t()), r);
  }
  const li = (t, r, i) => {
      const o = r - t;
      return o === 0 ? 1 : (i - t) / o;
    },
    Sn = (t) => t * 1e3,
    En = (t) => t / 1e3,
    Bv = { useManualTiming: !1 },
    Ko = [
      "read",
      "resolveKeyframes",
      "update",
      "preRender",
      "render",
      "postRender",
    ],
    ah = { value: null };
  function Iv(t, r) {
    let i = new Set(),
      o = new Set(),
      l = !1,
      f = !1;
    const c = new WeakSet();
    let p = { delta: 0, timestamp: 0, isProcessing: !1 },
      h = 0;
    function m(v) {
      c.has(v) && (y.schedule(v), t()), h++, v(p);
    }
    const y = {
      schedule: (v, w = !1, k = !1) => {
        const T = k && l ? i : o;
        return w && c.add(v), T.has(v) || T.add(v), v;
      },
      cancel: (v) => {
        o.delete(v), c.delete(v);
      },
      process: (v) => {
        if (((p = v), l)) {
          f = !0;
          return;
        }
        (l = !0),
          ([i, o] = [o, i]),
          i.forEach(m),
          r && ah.value && ah.value.frameloop[r].push(h),
          (h = 0),
          i.clear(),
          (l = !1),
          f && ((f = !1), y.process(v));
      },
    };
    return y;
  }
  const Vv = 40;
  function vm(t, r) {
    let i = !1,
      o = !0;
    const l = { delta: 0, timestamp: 0, isProcessing: !1 },
      f = () => (i = !0),
      c = Ko.reduce((b, I) => ((b[I] = Iv(f, r ? I : void 0)), b), {}),
      {
        read: p,
        resolveKeyframes: h,
        update: m,
        preRender: y,
        render: v,
        postRender: w,
      } = c,
      k = () => {
        const b = performance.now();
        (i = !1),
          (l.delta = o ? 1e3 / 60 : Math.max(Math.min(b - l.timestamp, Vv), 1)),
          (l.timestamp = b),
          (l.isProcessing = !0),
          p.process(l),
          h.process(l),
          m.process(l),
          y.process(l),
          v.process(l),
          w.process(l),
          (l.isProcessing = !1),
          i && r && ((o = !1), t(k));
      },
      S = () => {
        (i = !0), (o = !0), l.isProcessing || t(k);
      };
    return {
      schedule: Ko.reduce((b, I) => {
        const V = c[I];
        return (
          (b[I] = (J, M = !1, z = !1) => (i || S(), V.schedule(J, M, z))), b
        );
      }, {}),
      cancel: (b) => {
        for (let I = 0; I < Ko.length; I++) c[Ko[I]].cancel(b);
      },
      state: l,
      steps: c,
    };
  }
  const {
      schedule: Oe,
      cancel: Gn,
      state: it,
      steps: Su,
    } = vm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Lt, !0),
    wm = H.createContext({ strict: !1 }),
    lh = {
      animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
      ],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"],
    },
    ui = {};
  for (const t in lh) ui[t] = { isEnabled: (r) => lh[t].some((i) => !!r[i]) };
  function _v(t) {
    for (const r in t) ui[r] = { ...ui[r], ...t[r] };
  }
  const Uv = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
  function sa(t) {
    return (
      t.startsWith("while") ||
      (t.startsWith("drag") && t !== "draggable") ||
      t.startsWith("layout") ||
      t.startsWith("onTap") ||
      t.startsWith("onPan") ||
      t.startsWith("onLayout") ||
      Uv.has(t)
    );
  }
  let xm = (t) => !sa(t);
  function zv(t) {
    t && (xm = (r) => (r.startsWith("on") ? !sa(r) : t(r)));
  }
  try {
    zv(require("@emotion/is-prop-valid").default);
  } catch {}
  function Qv(t, r, i) {
    const o = {};
    for (const l in t)
      (l === "values" && typeof t.values == "object") ||
        ((xm(l) ||
          (i === !0 && sa(l)) ||
          (!r && !sa(l)) ||
          (t.draggable && l.startsWith("onDrag"))) &&
          (o[l] = t[l]));
    return o;
  }
  function Hv(t) {
    if (typeof Proxy > "u") return t;
    const r = new Map(),
      i = (...o) => t(...o);
    return new Proxy(i, {
      get: (o, l) =>
        l === "create" ? t : (r.has(l) || r.set(l, t(l)), r.get(l)),
    });
  }
  const ha = H.createContext({});
  function ma(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function";
  }
  function hs(t) {
    return typeof t == "string" || Array.isArray(t);
  }
  const Tc = [
      "animate",
      "whileInView",
      "whileFocus",
      "whileHover",
      "whileTap",
      "whileDrag",
      "exit",
    ],
    Pc = ["initial", ...Tc];
  function ga(t) {
    return ma(t.animate) || Pc.some((r) => hs(t[r]));
  }
  function Cm(t) {
    return !!(ga(t) || t.variants);
  }
  function $v(t, r) {
    if (ga(t)) {
      const { initial: i, animate: o } = t;
      return {
        initial: i === !1 || hs(i) ? i : void 0,
        animate: hs(o) ? o : void 0,
      };
    }
    return t.inherit !== !1 ? r : {};
  }
  function Wv(t) {
    const { initial: r, animate: i } = $v(t, H.useContext(ha));
    return H.useMemo(() => ({ initial: r, animate: i }), [uh(r), uh(i)]);
  }
  function uh(t) {
    return Array.isArray(t) ? t.join(" ") : t;
  }
  const Zv = Symbol.for("motionComponentSymbol");
  function ni(t) {
    return (
      t &&
      typeof t == "object" &&
      Object.prototype.hasOwnProperty.call(t, "current")
    );
  }
  function Kv(t, r, i) {
    return H.useCallback(
      (o) => {
        o && t.onMount && t.onMount(o),
          r && (o ? r.mount(o) : r.unmount()),
          i && (typeof i == "function" ? i(o) : ni(i) && (i.current = o));
      },
      [r]
    );
  }
  const kc = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    Gv = "framerAppearId",
    Am = "data-" + kc(Gv),
    { schedule: Rc } = vm(queueMicrotask, !1),
    Sm = H.createContext({});
  function qv(t, r, i, o, l) {
    var f, c;
    const { visualElement: p } = H.useContext(ha),
      h = H.useContext(wm),
      m = H.useContext(Ac),
      y = H.useContext(gm).reducedMotion,
      v = H.useRef(null);
    (o = o || h.renderer),
      !v.current &&
        o &&
        (v.current = o(t, {
          visualState: r,
          parent: p,
          props: i,
          presenceContext: m,
          blockInitialAnimation: m ? m.initial === !1 : !1,
          reducedMotionConfig: y,
        }));
    const w = v.current,
      k = H.useContext(Sm);
    w &&
      !w.projection &&
      l &&
      (w.type === "html" || w.type === "svg") &&
      Yv(v.current, i, l, k);
    const S = H.useRef(!1);
    H.useInsertionEffect(() => {
      w && S.current && w.update(i, m);
    });
    const T = i[Am],
      P = H.useRef(
        !!T &&
          !(
            !((f = window.MotionHandoffIsComplete) === null || f === void 0) &&
            f.call(window, T)
          ) &&
          ((c = window.MotionHasOptimisedAnimation) === null || c === void 0
            ? void 0
            : c.call(window, T))
      );
    return (
      Fv(() => {
        w &&
          ((S.current = !0),
          (window.MotionIsMounted = !0),
          w.updateFeatures(),
          Rc.render(w.render),
          P.current && w.animationState && w.animationState.animateChanges());
      }),
      H.useEffect(() => {
        w &&
          (!P.current && w.animationState && w.animationState.animateChanges(),
          P.current &&
            (queueMicrotask(() => {
              var b;
              (b = window.MotionHandoffMarkAsComplete) === null ||
                b === void 0 ||
                b.call(window, T);
            }),
            (P.current = !1)));
      }),
      w
    );
  }
  function Yv(t, r, i, o) {
    const {
      layoutId: l,
      layout: f,
      drag: c,
      dragConstraints: p,
      layoutScroll: h,
      layoutRoot: m,
    } = r;
    (t.projection = new i(
      t.latestValues,
      r["data-framer-portal-id"] ? void 0 : Em(t.parent)
    )),
      t.projection.setOptions({
        layoutId: l,
        layout: f,
        alwaysMeasureLayout: !!c || (p && ni(p)),
        visualElement: t,
        animationType: typeof f == "string" ? f : "both",
        initialPromotionConfig: o,
        layoutScroll: h,
        layoutRoot: m,
      });
  }
  function Em(t) {
    if (t)
      return t.options.allowProjection !== !1 ? t.projection : Em(t.parent);
  }
  function Xv({
    preloadedFeatures: t,
    createVisualElement: r,
    useRender: i,
    useVisualState: o,
    Component: l,
  }) {
    var f, c;
    t && _v(t);
    function p(m, y) {
      let v;
      const w = { ...H.useContext(gm), ...m, layoutId: Jv(m) },
        { isStatic: k } = w,
        S = Wv(m),
        T = o(m, k);
      if (!k && Sc) {
        ew();
        const P = tw(w);
        (v = P.MeasureLayout),
          (S.visualElement = qv(l, T, w, r, P.ProjectionNode));
      }
      return R.jsxs(ha.Provider, {
        value: S,
        children: [
          v && S.visualElement
            ? R.jsx(v, { visualElement: S.visualElement, ...w })
            : null,
          i(l, m, Kv(T, S.visualElement, y), T, k, S.visualElement),
        ],
      });
    }
    p.displayName = `motion.${
      typeof l == "string"
        ? l
        : `create(${
            (c = (f = l.displayName) !== null && f !== void 0 ? f : l.name) !==
              null && c !== void 0
              ? c
              : ""
          })`
    }`;
    const h = H.forwardRef(p);
    return (h[Zv] = l), h;
  }
  function Jv({ layoutId: t }) {
    const r = H.useContext(mm).id;
    return r && t !== void 0 ? r + "-" + t : t;
  }
  function ew(t, r) {
    H.useContext(wm).strict;
  }
  function tw(t) {
    const { drag: r, layout: i } = ui;
    if (!r && !i) return {};
    const o = { ...r, ...i };
    return {
      MeasureLayout:
        (r != null && r.isEnabled(t)) || (i != null && i.isEnabled(t))
          ? o.MeasureLayout
          : void 0,
      ProjectionNode: o.ProjectionNode,
    };
  }
  const Tm = (t) => (r) => typeof r == "string" && r.startsWith(t),
    jc = Tm("--"),
    nw = Tm("var(--"),
    Oc = (t) => (nw(t) ? rw.test(t.split("/*")[0].trim()) : !1),
    rw =
      /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    ms = {};
  function iw(t) {
    for (const r in t) (ms[r] = t[r]), jc(r) && (ms[r].isCSSVariable = !0);
  }
  const di = [
      "transformPerspective",
      "x",
      "y",
      "z",
      "translateX",
      "translateY",
      "translateZ",
      "scale",
      "scaleX",
      "scaleY",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "skew",
      "skewX",
      "skewY",
    ],
    kr = new Set(di);
  function Pm(t, { layout: r, layoutId: i }) {
    return (
      kr.has(t) ||
      t.startsWith("origin") ||
      ((r || i !== void 0) && (!!ms[t] || t === "opacity"))
    );
  }
  const dt = (t) => !!(t && t.getVelocity),
    km = (t, r) => (r && typeof t == "number" ? r.transform(t) : t),
    Tn = (t, r, i) => (i > r ? r : i < t ? t : i),
    pi = {
      test: (t) => typeof t == "number",
      parse: parseFloat,
      transform: (t) => t,
    },
    gs = { ...pi, transform: (t) => Tn(0, 1, t) },
    Go = { ...pi, default: 1 },
    Ts = (t) => ({
      test: (r) =>
        typeof r == "string" && r.endsWith(t) && r.split(" ").length === 1,
      parse: parseFloat,
      transform: (r) => `${r}${t}`,
    }),
    Kn = Ts("deg"),
    an = Ts("%"),
    ae = Ts("px"),
    sw = Ts("vh"),
    ow = Ts("vw"),
    ch = {
      ...an,
      parse: (t) => an.parse(t) / 100,
      transform: (t) => an.transform(t * 100),
    },
    aw = {
      borderWidth: ae,
      borderTopWidth: ae,
      borderRightWidth: ae,
      borderBottomWidth: ae,
      borderLeftWidth: ae,
      borderRadius: ae,
      radius: ae,
      borderTopLeftRadius: ae,
      borderTopRightRadius: ae,
      borderBottomRightRadius: ae,
      borderBottomLeftRadius: ae,
      width: ae,
      maxWidth: ae,
      height: ae,
      maxHeight: ae,
      top: ae,
      right: ae,
      bottom: ae,
      left: ae,
      padding: ae,
      paddingTop: ae,
      paddingRight: ae,
      paddingBottom: ae,
      paddingLeft: ae,
      margin: ae,
      marginTop: ae,
      marginRight: ae,
      marginBottom: ae,
      marginLeft: ae,
      backgroundPositionX: ae,
      backgroundPositionY: ae,
    },
    lw = {
      rotate: Kn,
      rotateX: Kn,
      rotateY: Kn,
      rotateZ: Kn,
      scale: Go,
      scaleX: Go,
      scaleY: Go,
      scaleZ: Go,
      skew: Kn,
      skewX: Kn,
      skewY: Kn,
      distance: ae,
      translateX: ae,
      translateY: ae,
      translateZ: ae,
      x: ae,
      y: ae,
      z: ae,
      perspective: ae,
      transformPerspective: ae,
      opacity: gs,
      originX: ch,
      originY: ch,
      originZ: ae,
    },
    fh = { ...pi, transform: Math.round },
    Mc = {
      ...aw,
      ...lw,
      zIndex: fh,
      size: ae,
      fillOpacity: gs,
      strokeOpacity: gs,
      numOctaves: fh,
    },
    uw = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
    },
    cw = di.length;
  function fw(t, r, i) {
    let o = "",
      l = !0;
    for (let f = 0; f < cw; f++) {
      const c = di[f],
        p = t[c];
      if (p === void 0) continue;
      let h = !0;
      if (
        (typeof p == "number"
          ? (h = p === (c.startsWith("scale") ? 1 : 0))
          : (h = parseFloat(p) === 0),
        !h || i)
      ) {
        const m = km(p, Mc[c]);
        if (!h) {
          l = !1;
          const y = uw[c] || c;
          o += `${y}(${m}) `;
        }
        i && (r[c] = m);
      }
    }
    return (o = o.trim()), i ? (o = i(r, l ? "" : o)) : l && (o = "none"), o;
  }
  function Lc(t, r, i) {
    const { style: o, vars: l, transformOrigin: f } = t;
    let c = !1,
      p = !1;
    for (const h in r) {
      const m = r[h];
      if (kr.has(h)) {
        c = !0;
        continue;
      } else if (jc(h)) {
        l[h] = m;
        continue;
      } else {
        const y = km(m, Mc[h]);
        h.startsWith("origin") ? ((p = !0), (f[h] = y)) : (o[h] = y);
      }
    }
    if (
      (r.transform ||
        (c || i
          ? (o.transform = fw(r, t.transform, i))
          : o.transform && (o.transform = "none")),
      p)
    ) {
      const { originX: h = "50%", originY: m = "50%", originZ: y = 0 } = f;
      o.transformOrigin = `${h} ${m} ${y}`;
    }
  }
  const Dc = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
  });
  function Rm(t, r, i) {
    for (const o in r) !dt(r[o]) && !Pm(o, i) && (t[o] = r[o]);
  }
  function dw({ transformTemplate: t }, r) {
    return H.useMemo(() => {
      const i = Dc();
      return Lc(i, r, t), Object.assign({}, i.vars, i.style);
    }, [r]);
  }
  function pw(t, r) {
    const i = t.style || {},
      o = {};
    return Rm(o, i, t), Object.assign(o, dw(t, r)), o;
  }
  function hw(t, r) {
    const i = {},
      o = pw(t, r);
    return (
      t.drag &&
        t.dragListener !== !1 &&
        ((i.draggable = !1),
        (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
        (o.touchAction =
          t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
      t.tabIndex === void 0 &&
        (t.onTap || t.onTapStart || t.whileTap) &&
        (i.tabIndex = 0),
      (i.style = o),
      i
    );
  }
  const mw = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
  function Nc(t) {
    return typeof t != "string" || t.includes("-")
      ? !1
      : !!(mw.indexOf(t) > -1 || /[A-Z]/u.test(t));
  }
  const gw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    yw = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function vw(t, r, i = 1, o = 0, l = !0) {
    t.pathLength = 1;
    const f = l ? gw : yw;
    t[f.offset] = ae.transform(-o);
    const c = ae.transform(r),
      p = ae.transform(i);
    t[f.array] = `${c} ${p}`;
  }
  function dh(t, r, i) {
    return typeof t == "string" ? t : ae.transform(r + i * t);
  }
  function ww(t, r, i) {
    const o = dh(r, t.x, t.width),
      l = dh(i, t.y, t.height);
    return `${o} ${l}`;
  }
  function bc(
    t,
    {
      attrX: r,
      attrY: i,
      attrScale: o,
      originX: l,
      originY: f,
      pathLength: c,
      pathSpacing: p = 1,
      pathOffset: h = 0,
      ...m
    },
    y,
    v
  ) {
    if ((Lc(t, m, v), y)) {
      t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
      return;
    }
    (t.attrs = t.style), (t.style = {});
    const { attrs: w, style: k, dimensions: S } = t;
    w.transform && (S && (k.transform = w.transform), delete w.transform),
      S &&
        (l !== void 0 || f !== void 0 || k.transform) &&
        (k.transformOrigin = ww(
          S,
          l !== void 0 ? l : 0.5,
          f !== void 0 ? f : 0.5
        )),
      r !== void 0 && (w.x = r),
      i !== void 0 && (w.y = i),
      o !== void 0 && (w.scale = o),
      c !== void 0 && vw(w, c, p, h, !1);
  }
  const jm = () => ({ ...Dc(), attrs: {} }),
    Fc = (t) => typeof t == "string" && t.toLowerCase() === "svg";
  function xw(t, r, i, o) {
    const l = H.useMemo(() => {
      const f = jm();
      return (
        bc(f, r, Fc(o), t.transformTemplate),
        { ...f.attrs, style: { ...f.style } }
      );
    }, [r]);
    if (t.style) {
      const f = {};
      Rm(f, t.style, t), (l.style = { ...f, ...l.style });
    }
    return l;
  }
  function Cw(t = !1) {
    return (i, o, l, { latestValues: f }, c) => {
      const h = (Nc(i) ? xw : hw)(o, f, c, i),
        m = Qv(o, typeof i == "string", t),
        y = i !== H.Fragment ? { ...m, ...h, ref: l } : {},
        { children: v } = o,
        w = H.useMemo(() => (dt(v) ? v.get() : v), [v]);
      return H.createElement(i, { ...y, children: w });
    };
  }
  function ph(t) {
    const r = [{}, {}];
    return (
      t == null ||
        t.values.forEach((i, o) => {
          (r[0][o] = i.get()), (r[1][o] = i.getVelocity());
        }),
      r
    );
  }
  function Bc(t, r, i, o) {
    if (typeof r == "function") {
      const [l, f] = ph(o);
      r = r(i !== void 0 ? i : t.custom, l, f);
    }
    if (
      (typeof r == "string" && (r = t.variants && t.variants[r]),
      typeof r == "function")
    ) {
      const [l, f] = ph(o);
      r = r(i !== void 0 ? i : t.custom, l, f);
    }
    return r;
  }
  const $u = (t) => Array.isArray(t),
    Aw = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
    Sw = (t) => ($u(t) ? t[t.length - 1] || 0 : t);
  function Jo(t) {
    const r = dt(t) ? t.get() : t;
    return Aw(r) ? r.toValue() : r;
  }
  function Ew(
    { scrapeMotionValuesFromProps: t, createRenderState: r, onUpdate: i },
    o,
    l,
    f
  ) {
    const c = { latestValues: Tw(o, l, f, t), renderState: r() };
    return (
      i &&
        ((c.onMount = (p) => i({ props: o, current: p, ...c })),
        (c.onUpdate = (p) => i(p))),
      c
    );
  }
  const Om = (t) => (r, i) => {
    const o = H.useContext(ha),
      l = H.useContext(Ac),
      f = () => Ew(t, r, o, l);
    return i ? f() : Nv(f);
  };
  function Tw(t, r, i, o) {
    const l = {},
      f = o(t, {});
    for (const w in f) l[w] = Jo(f[w]);
    let { initial: c, animate: p } = t;
    const h = ga(t),
      m = Cm(t);
    r &&
      m &&
      !h &&
      t.inherit !== !1 &&
      (c === void 0 && (c = r.initial), p === void 0 && (p = r.animate));
    let y = i ? i.initial === !1 : !1;
    y = y || c === !1;
    const v = y ? p : c;
    if (v && typeof v != "boolean" && !ma(v)) {
      const w = Array.isArray(v) ? v : [v];
      for (let k = 0; k < w.length; k++) {
        const S = Bc(t, w[k]);
        if (S) {
          const { transitionEnd: T, transition: P, ...b } = S;
          for (const I in b) {
            let V = b[I];
            if (Array.isArray(V)) {
              const J = y ? V.length - 1 : 0;
              V = V[J];
            }
            V !== null && (l[I] = V);
          }
          for (const I in T) l[I] = T[I];
        }
      }
    }
    return l;
  }
  function Ic(t, r, i) {
    var o;
    const { style: l } = t,
      f = {};
    for (const c in l)
      (dt(l[c]) ||
        (r.style && dt(r.style[c])) ||
        Pm(c, t) ||
        ((o = i == null ? void 0 : i.getValue(c)) === null || o === void 0
          ? void 0
          : o.liveStyle) !== void 0) &&
        (f[c] = l[c]);
    return f;
  }
  const Pw = {
    useVisualState: Om({
      scrapeMotionValuesFromProps: Ic,
      createRenderState: Dc,
    }),
  };
  function Mm(t, r) {
    try {
      r.dimensions =
        typeof t.getBBox == "function"
          ? t.getBBox()
          : t.getBoundingClientRect();
    } catch {
      r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
    }
  }
  function Lm(t, { style: r, vars: i }, o, l) {
    Object.assign(t.style, r, l && l.getProjectionStyles(o));
    for (const f in i) t.style.setProperty(f, i[f]);
  }
  const Dm = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]);
  function Nm(t, r, i, o) {
    Lm(t, r, void 0, o);
    for (const l in r.attrs) t.setAttribute(Dm.has(l) ? l : kc(l), r.attrs[l]);
  }
  function bm(t, r, i) {
    const o = Ic(t, r, i);
    for (const l in t)
      if (dt(t[l]) || dt(r[l])) {
        const f =
          di.indexOf(l) !== -1
            ? "attr" + l.charAt(0).toUpperCase() + l.substring(1)
            : l;
        o[f] = t[l];
      }
    return o;
  }
  const hh = ["x", "y", "width", "height", "cx", "cy", "r"],
    kw = {
      useVisualState: Om({
        scrapeMotionValuesFromProps: bm,
        createRenderState: jm,
        onUpdate: ({
          props: t,
          prevProps: r,
          current: i,
          renderState: o,
          latestValues: l,
        }) => {
          if (!i) return;
          let f = !!t.drag;
          if (!f) {
            for (const p in l)
              if (kr.has(p)) {
                f = !0;
                break;
              }
          }
          if (!f) return;
          let c = !r;
          if (r)
            for (let p = 0; p < hh.length; p++) {
              const h = hh[p];
              t[h] !== r[h] && (c = !0);
            }
          c &&
            Oe.read(() => {
              Mm(i, o),
                Oe.render(() => {
                  bc(o, l, Fc(i.tagName), t.transformTemplate), Nm(i, o);
                });
            });
        },
      }),
    };
  function Rw(t, r) {
    return function (
      o,
      { forwardMotionProps: l } = { forwardMotionProps: !1 }
    ) {
      const c = {
        ...(Nc(o) ? kw : Pw),
        preloadedFeatures: t,
        useRender: Cw(l),
        createVisualElement: r,
        Component: o,
      };
      return Xv(c);
    };
  }
  function ys(t, r, i) {
    const o = t.getProps();
    return Bc(o, r, i !== void 0 ? i : o.custom, t);
  }
  const jw = Ec(() => window.ScrollTimeline !== void 0);
  class Ow {
    constructor(r) {
      (this.stop = () => this.runAll("stop")),
        (this.animations = r.filter(Boolean));
    }
    get finished() {
      return Promise.all(
        this.animations.map((r) => ("finished" in r ? r.finished : r))
      );
    }
    getAll(r) {
      return this.animations[0][r];
    }
    setAll(r, i) {
      for (let o = 0; o < this.animations.length; o++)
        this.animations[o][r] = i;
    }
    attachTimeline(r, i) {
      const o = this.animations.map((l) => {
        if (jw() && l.attachTimeline) return l.attachTimeline(r);
        if (typeof i == "function") return i(l);
      });
      return () => {
        o.forEach((l, f) => {
          l && l(), this.animations[f].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(r) {
      this.setAll("time", r);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(r) {
      this.setAll("speed", r);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let r = 0;
      for (let i = 0; i < this.animations.length; i++)
        r = Math.max(r, this.animations[i].duration);
      return r;
    }
    runAll(r) {
      this.animations.forEach((i) => i[r]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  }
  class Mw extends Ow {
    then(r, i) {
      return Promise.all(this.animations).then(r).catch(i);
    }
  }
  function Vc(t, r) {
    return t ? t[r] || t.default || t : void 0;
  }
  const Wu = 2e4;
  function Fm(t) {
    let r = 0;
    const i = 50;
    let o = t.next(r);
    for (; !o.done && r < Wu; ) (r += i), (o = t.next(r));
    return r >= Wu ? 1 / 0 : r;
  }
  function _c(t) {
    return typeof t == "function";
  }
  function mh(t, r) {
    (t.timeline = r), (t.onfinish = null);
  }
  const Uc = (t) => Array.isArray(t) && typeof t[0] == "number",
    Lw = { linearEasing: void 0 };
  function Dw(t, r) {
    const i = Ec(t);
    return () => {
      var o;
      return (o = Lw[r]) !== null && o !== void 0 ? o : i();
    };
  }
  const oa = Dw(() => {
      try {
        document
          .createElement("div")
          .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch {
        return !1;
      }
      return !0;
    }, "linearEasing"),
    Bm = (t, r, i = 10) => {
      let o = "";
      const l = Math.max(Math.round(r / i), 2);
      for (let f = 0; f < l; f++) o += t(li(0, l - 1, f)) + ", ";
      return `linear(${o.substring(0, o.length - 2)})`;
    };
  function Im(t) {
    return !!(
      (typeof t == "function" && oa()) ||
      !t ||
      (typeof t == "string" && (t in Zu || oa())) ||
      Uc(t) ||
      (Array.isArray(t) && t.every(Im))
    );
  }
  const os = ([t, r, i, o]) => `cubic-bezier(${t}, ${r}, ${i}, ${o})`,
    Zu = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: os([0, 0.65, 0.55, 1]),
      circOut: os([0.55, 0, 1, 0.45]),
      backIn: os([0.31, 0.01, 0.66, -0.59]),
      backOut: os([0.33, 1.53, 0.69, 0.99]),
    };
  function Vm(t, r) {
    if (t)
      return typeof t == "function" && oa()
        ? Bm(t, r)
        : Uc(t)
        ? os(t)
        : Array.isArray(t)
        ? t.map((i) => Vm(i, r) || Zu.easeOut)
        : Zu[t];
  }
  const Xt = { x: !1, y: !1 };
  function _m() {
    return Xt.x || Xt.y;
  }
  function Nw(t, r, i) {
    var o;
    if (t instanceof EventTarget) return [t];
    if (typeof t == "string") {
      let l = document;
      const f =
        (o = void 0) !== null && o !== void 0 ? o : l.querySelectorAll(t);
      return f ? Array.from(f) : [];
    }
    return Array.from(t);
  }
  function Um(t, r) {
    const i = Nw(t),
      o = new AbortController(),
      l = { passive: !0, ...r, signal: o.signal };
    return [i, l, () => o.abort()];
  }
  function gh(t) {
    return !(t.pointerType === "touch" || _m());
  }
  function bw(t, r, i = {}) {
    const [o, l, f] = Um(t, i),
      c = (p) => {
        if (!gh(p)) return;
        const { target: h } = p,
          m = r(h, p);
        if (typeof m != "function" || !h) return;
        const y = (v) => {
          gh(v) && (m(v), h.removeEventListener("pointerleave", y));
        };
        h.addEventListener("pointerleave", y, l);
      };
    return (
      o.forEach((p) => {
        p.addEventListener("pointerenter", c, l);
      }),
      f
    );
  }
  function ls(t, r) {
    const i = `${r}PointerCapture`;
    if (t.target instanceof Element && i in t.target && t.pointerId !== void 0)
      try {
        t.target[i](t.pointerId);
      } catch {}
  }
  const zm = (t, r) => (r ? (t === r ? !0 : zm(t, r.parentElement)) : !1),
    zc = (t) =>
      t.pointerType === "mouse"
        ? typeof t.button != "number" || t.button <= 0
        : t.isPrimary !== !1,
    Fw = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
  function Bw(t) {
    return Fw.has(t.tagName) || t.tabIndex !== -1;
  }
  const as = new WeakSet();
  function yh(t) {
    return (r) => {
      r.key === "Enter" && t(r);
    };
  }
  function Eu(t, r) {
    t.dispatchEvent(
      new PointerEvent("pointer" + r, { isPrimary: !0, bubbles: !0 })
    );
  }
  const Iw = (t, r) => {
    const i = t.currentTarget;
    if (!i) return;
    const o = yh(() => {
      if (as.has(i)) return;
      Eu(i, "down");
      const l = yh(() => {
          Eu(i, "up");
        }),
        f = () => Eu(i, "cancel");
      i.addEventListener("keyup", l, r), i.addEventListener("blur", f, r);
    });
    i.addEventListener("keydown", o, r),
      i.addEventListener("blur", () => i.removeEventListener("keydown", o), r);
  };
  function vh(t) {
    return zc(t) && !_m();
  }
  function Vw(t, r, i = {}) {
    const [o, l, f] = Um(t, i),
      c = (p) => {
        const h = p.currentTarget;
        if (!h || !vh(p) || as.has(h)) return;
        as.add(h), ls(p, "set");
        const m = r(h, p),
          y = (k, S) => {
            h.removeEventListener("pointerup", v),
              h.removeEventListener("pointercancel", w),
              ls(k, "release"),
              !(!vh(k) || !as.has(h)) &&
                (as.delete(h), typeof m == "function" && m(k, { success: S }));
          },
          v = (k) => {
            (
              k.isTrusted
                ? _w(
                    k,
                    h instanceof Element
                      ? h.getBoundingClientRect()
                      : {
                          left: 0,
                          top: 0,
                          right: window.innerWidth,
                          bottom: window.innerHeight,
                        }
                  )
                : !1
            )
              ? y(k, !1)
              : y(k, !(h instanceof Element) || zm(h, k.target));
          },
          w = (k) => {
            y(k, !1);
          };
        h.addEventListener("pointerup", v, l),
          h.addEventListener("pointercancel", w, l),
          h.addEventListener("lostpointercapture", w, l);
      };
    return (
      o.forEach((p) => {
        p = i.useGlobalTarget ? window : p;
        let h = !1;
        p instanceof HTMLElement &&
          ((h = !0),
          !Bw(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0)),
          p.addEventListener("pointerdown", c, l),
          h && p.addEventListener("focus", (m) => Iw(m, l), l);
      }),
      f
    );
  }
  function _w(t, r) {
    return (
      t.clientX < r.left ||
      t.clientX > r.right ||
      t.clientY < r.top ||
      t.clientY > r.bottom
    );
  }
  function Uw(t) {
    return t === "x" || t === "y"
      ? Xt[t]
        ? null
        : ((Xt[t] = !0),
          () => {
            Xt[t] = !1;
          })
      : Xt.x || Xt.y
      ? null
      : ((Xt.x = Xt.y = !0),
        () => {
          Xt.x = Xt.y = !1;
        });
  }
  const Qm = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...di,
  ]);
  let ea;
  function zw() {
    ea = void 0;
  }
  const ln = {
    now: () => (
      ea === void 0 &&
        ln.set(
          it.isProcessing || Bv.useManualTiming
            ? it.timestamp
            : performance.now()
        ),
      ea
    ),
    set: (t) => {
      (ea = t), queueMicrotask(zw);
    },
  };
  function Qc(t, r) {
    t.indexOf(r) === -1 && t.push(r);
  }
  function Hc(t, r) {
    const i = t.indexOf(r);
    i > -1 && t.splice(i, 1);
  }
  class $c {
    constructor() {
      this.subscriptions = [];
    }
    add(r) {
      return Qc(this.subscriptions, r), () => Hc(this.subscriptions, r);
    }
    notify(r, i, o) {
      const l = this.subscriptions.length;
      if (l)
        if (l === 1) this.subscriptions[0](r, i, o);
        else
          for (let f = 0; f < l; f++) {
            const c = this.subscriptions[f];
            c && c(r, i, o);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  function Hm(t, r) {
    return r ? t * (1e3 / r) : 0;
  }
  const wh = 30,
    Qw = (t) => !isNaN(parseFloat(t));
  class Hw {
    constructor(r, i = {}) {
      (this.version = "12.4.10"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (o, l = !0) => {
          const f = ln.now();
          this.updatedAt !== f && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(o),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            l &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(r),
        (this.owner = i.owner);
    }
    setCurrent(r) {
      (this.current = r),
        (this.updatedAt = ln.now()),
        this.canTrackVelocity === null &&
          r !== void 0 &&
          (this.canTrackVelocity = Qw(this.current));
    }
    setPrevFrameValue(r = this.current) {
      (this.prevFrameValue = r), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(r) {
      return this.on("change", r);
    }
    on(r, i) {
      this.events[r] || (this.events[r] = new $c());
      const o = this.events[r].add(i);
      return r === "change"
        ? () => {
            o(),
              Oe.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : o;
    }
    clearListeners() {
      for (const r in this.events) this.events[r].clear();
    }
    attach(r, i) {
      (this.passiveEffect = r), (this.stopPassiveEffect = i);
    }
    set(r, i = !0) {
      !i || !this.passiveEffect
        ? this.updateAndNotify(r, i)
        : this.passiveEffect(r, this.updateAndNotify);
    }
    setWithVelocity(r, i, o) {
      this.set(i),
        (this.prev = void 0),
        (this.prevFrameValue = r),
        (this.prevUpdatedAt = this.updatedAt - o);
    }
    jump(r, i = !0) {
      this.updateAndNotify(r),
        (this.prev = r),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        i && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      const r = ln.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        r - this.updatedAt > wh
      )
        return 0;
      const i = Math.min(this.updatedAt - this.prevUpdatedAt, wh);
      return Hm(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
    }
    start(r) {
      return (
        this.stop(),
        new Promise((i) => {
          (this.hasAnimated = !0),
            (this.animation = r(i)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function vs(t, r) {
    return new Hw(t, r);
  }
  function $w(t, r, i) {
    t.hasValue(r) ? t.getValue(r).set(i) : t.addValue(r, vs(i));
  }
  function Ww(t, r) {
    const i = ys(t, r);
    let { transitionEnd: o = {}, transition: l = {}, ...f } = i || {};
    f = { ...f, ...o };
    for (const c in f) {
      const p = Sw(f[c]);
      $w(t, c, p);
    }
  }
  function Zw(t) {
    return !!(dt(t) && t.add);
  }
  function Ku(t, r) {
    const i = t.getValue("willChange");
    if (Zw(i)) return i.add(r);
  }
  function $m(t) {
    return t.props[Am];
  }
  const Wm = (t, r, i) =>
      (((1 - 3 * i + 3 * r) * t + (3 * i - 6 * r)) * t + 3 * r) * t,
    Kw = 1e-7,
    Gw = 12;
  function qw(t, r, i, o, l) {
    let f,
      c,
      p = 0;
    do (c = r + (i - r) / 2), (f = Wm(c, o, l) - t), f > 0 ? (i = c) : (r = c);
    while (Math.abs(f) > Kw && ++p < Gw);
    return c;
  }
  function Ps(t, r, i, o) {
    if (t === r && i === o) return Lt;
    const l = (f) => qw(f, 0, 1, t, i);
    return (f) => (f === 0 || f === 1 ? f : Wm(l(f), r, o));
  }
  const Zm = (t) => (r) => r <= 0.5 ? t(2 * r) / 2 : (2 - t(2 * (1 - r))) / 2,
    Km = (t) => (r) => 1 - t(1 - r),
    Gm = Ps(0.33, 1.53, 0.69, 0.99),
    Wc = Km(Gm),
    qm = Zm(Wc),
    Ym = (t) =>
      (t *= 2) < 1 ? 0.5 * Wc(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
    Zc = (t) => 1 - Math.sin(Math.acos(t)),
    Xm = Km(Zc),
    Jm = Zm(Zc),
    e2 = (t) => /^0[^.\s]+$/u.test(t);
  function Yw(t) {
    return typeof t == "number"
      ? t === 0
      : t !== null
      ? t === "none" || t === "0" || e2(t)
      : !0;
  }
  const us = (t) => Math.round(t * 1e5) / 1e5,
    Kc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function Xw(t) {
    return t == null;
  }
  const Jw =
      /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Gc = (t, r) => (i) =>
      !!(
        (typeof i == "string" && Jw.test(i) && i.startsWith(t)) ||
        (r && !Xw(i) && Object.prototype.hasOwnProperty.call(i, r))
      ),
    t2 = (t, r, i) => (o) => {
      if (typeof o != "string") return o;
      const [l, f, c, p] = o.match(Kc);
      return {
        [t]: parseFloat(l),
        [r]: parseFloat(f),
        [i]: parseFloat(c),
        alpha: p !== void 0 ? parseFloat(p) : 1,
      };
    },
    ex = (t) => Tn(0, 255, t),
    Tu = { ...pi, transform: (t) => Math.round(ex(t)) },
    xr = {
      test: Gc("rgb", "red"),
      parse: t2("red", "green", "blue"),
      transform: ({ red: t, green: r, blue: i, alpha: o = 1 }) =>
        "rgba(" +
        Tu.transform(t) +
        ", " +
        Tu.transform(r) +
        ", " +
        Tu.transform(i) +
        ", " +
        us(gs.transform(o)) +
        ")",
    };
  function tx(t) {
    let r = "",
      i = "",
      o = "",
      l = "";
    return (
      t.length > 5
        ? ((r = t.substring(1, 3)),
          (i = t.substring(3, 5)),
          (o = t.substring(5, 7)),
          (l = t.substring(7, 9)))
        : ((r = t.substring(1, 2)),
          (i = t.substring(2, 3)),
          (o = t.substring(3, 4)),
          (l = t.substring(4, 5)),
          (r += r),
          (i += i),
          (o += o),
          (l += l)),
      {
        red: parseInt(r, 16),
        green: parseInt(i, 16),
        blue: parseInt(o, 16),
        alpha: l ? parseInt(l, 16) / 255 : 1,
      }
    );
  }
  const Gu = { test: Gc("#"), parse: tx, transform: xr.transform },
    ri = {
      test: Gc("hsl", "hue"),
      parse: t2("hue", "saturation", "lightness"),
      transform: ({ hue: t, saturation: r, lightness: i, alpha: o = 1 }) =>
        "hsla(" +
        Math.round(t) +
        ", " +
        an.transform(us(r)) +
        ", " +
        an.transform(us(i)) +
        ", " +
        us(gs.transform(o)) +
        ")",
    },
    ct = {
      test: (t) => xr.test(t) || Gu.test(t) || ri.test(t),
      parse: (t) =>
        xr.test(t) ? xr.parse(t) : ri.test(t) ? ri.parse(t) : Gu.parse(t),
      transform: (t) =>
        typeof t == "string"
          ? t
          : t.hasOwnProperty("red")
          ? xr.transform(t)
          : ri.transform(t),
    },
    nx =
      /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function rx(t) {
    var r, i;
    return (
      isNaN(t) &&
      typeof t == "string" &&
      (((r = t.match(Kc)) === null || r === void 0 ? void 0 : r.length) || 0) +
        (((i = t.match(nx)) === null || i === void 0 ? void 0 : i.length) ||
          0) >
        0
    );
  }
  const n2 = "number",
    r2 = "color",
    ix = "var",
    sx = "var(",
    xh = "${}",
    ox =
      /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function ws(t) {
    const r = t.toString(),
      i = [],
      o = { color: [], number: [], var: [] },
      l = [];
    let f = 0;
    const p = r
      .replace(
        ox,
        (h) => (
          ct.test(h)
            ? (o.color.push(f), l.push(r2), i.push(ct.parse(h)))
            : h.startsWith(sx)
            ? (o.var.push(f), l.push(ix), i.push(h))
            : (o.number.push(f), l.push(n2), i.push(parseFloat(h))),
          ++f,
          xh
        )
      )
      .split(xh);
    return { values: i, split: p, indexes: o, types: l };
  }
  function i2(t) {
    return ws(t).values;
  }
  function s2(t) {
    const { split: r, types: i } = ws(t),
      o = r.length;
    return (l) => {
      let f = "";
      for (let c = 0; c < o; c++)
        if (((f += r[c]), l[c] !== void 0)) {
          const p = i[c];
          p === n2
            ? (f += us(l[c]))
            : p === r2
            ? (f += ct.transform(l[c]))
            : (f += l[c]);
        }
      return f;
    };
  }
  const ax = (t) => (typeof t == "number" ? 0 : t);
  function lx(t) {
    const r = i2(t);
    return s2(t)(r.map(ax));
  }
  const qn = {
      test: rx,
      parse: i2,
      createTransformer: s2,
      getAnimatableNone: lx,
    },
    ux = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function cx(t) {
    const [r, i] = t.slice(0, -1).split("(");
    if (r === "drop-shadow") return t;
    const [o] = i.match(Kc) || [];
    if (!o) return t;
    const l = i.replace(o, "");
    let f = ux.has(r) ? 1 : 0;
    return o !== i && (f *= 100), r + "(" + f + l + ")";
  }
  const fx = /\b([a-z-]*)\(.*?\)/gu,
    qu = {
      ...qn,
      getAnimatableNone: (t) => {
        const r = t.match(fx);
        return r ? r.map(cx).join(" ") : t;
      },
    },
    dx = {
      ...Mc,
      color: ct,
      backgroundColor: ct,
      outlineColor: ct,
      fill: ct,
      stroke: ct,
      borderColor: ct,
      borderTopColor: ct,
      borderRightColor: ct,
      borderBottomColor: ct,
      borderLeftColor: ct,
      filter: qu,
      WebkitFilter: qu,
    },
    qc = (t) => dx[t];
  function o2(t, r) {
    let i = qc(t);
    return (
      i !== qu && (i = qn),
      i.getAnimatableNone ? i.getAnimatableNone(r) : void 0
    );
  }
  const px = new Set(["auto", "none", "0"]);
  function hx(t, r, i) {
    let o = 0,
      l;
    for (; o < t.length && !l; ) {
      const f = t[o];
      typeof f == "string" && !px.has(f) && ws(f).values.length && (l = t[o]),
        o++;
    }
    if (l && i) for (const f of r) t[f] = o2(i, l);
  }
  const Ch = (t) => t === pi || t === ae,
    Ah = (t, r) => parseFloat(t.split(", ")[r]),
    Sh =
      (t, r) =>
      (i, { transform: o }) => {
        if (o === "none" || !o) return 0;
        const l = o.match(/^matrix3d\((.+)\)$/u);
        if (l) return Ah(l[1], r);
        {
          const f = o.match(/^matrix\((.+)\)$/u);
          return f ? Ah(f[1], t) : 0;
        }
      },
    mx = new Set(["x", "y", "z"]),
    gx = di.filter((t) => !mx.has(t));
  function yx(t) {
    const r = [];
    return (
      gx.forEach((i) => {
        const o = t.getValue(i);
        o !== void 0 &&
          (r.push([i, o.get()]), o.set(i.startsWith("scale") ? 1 : 0));
      }),
      r
    );
  }
  const ci = {
    width: ({ x: t }, { paddingLeft: r = "0", paddingRight: i = "0" }) =>
      t.max - t.min - parseFloat(r) - parseFloat(i),
    height: ({ y: t }, { paddingTop: r = "0", paddingBottom: i = "0" }) =>
      t.max - t.min - parseFloat(r) - parseFloat(i),
    top: (t, { top: r }) => parseFloat(r),
    left: (t, { left: r }) => parseFloat(r),
    bottom: ({ y: t }, { top: r }) => parseFloat(r) + (t.max - t.min),
    right: ({ x: t }, { left: r }) => parseFloat(r) + (t.max - t.min),
    x: Sh(4, 13),
    y: Sh(5, 14),
  };
  ci.translateX = ci.x;
  ci.translateY = ci.y;
  const Ar = new Set();
  let Yu = !1,
    Xu = !1;
  function a2() {
    if (Xu) {
      const t = Array.from(Ar).filter((o) => o.needsMeasurement),
        r = new Set(t.map((o) => o.element)),
        i = new Map();
      r.forEach((o) => {
        const l = yx(o);
        l.length && (i.set(o, l), o.render());
      }),
        t.forEach((o) => o.measureInitialState()),
        r.forEach((o) => {
          o.render();
          const l = i.get(o);
          l &&
            l.forEach(([f, c]) => {
              var p;
              (p = o.getValue(f)) === null || p === void 0 || p.set(c);
            });
        }),
        t.forEach((o) => o.measureEndState()),
        t.forEach((o) => {
          o.suspendedScrollY !== void 0 &&
            window.scrollTo(0, o.suspendedScrollY);
        });
    }
    (Xu = !1), (Yu = !1), Ar.forEach((t) => t.complete()), Ar.clear();
  }
  function l2() {
    Ar.forEach((t) => {
      t.readKeyframes(), t.needsMeasurement && (Xu = !0);
    });
  }
  function vx() {
    l2(), a2();
  }
  class Yc {
    constructor(r, i, o, l, f, c = !1) {
      (this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...r]),
        (this.onComplete = i),
        (this.name = o),
        (this.motionValue = l),
        (this.element = f),
        (this.isAsync = c);
    }
    scheduleResolve() {
      (this.isScheduled = !0),
        this.isAsync
          ? (Ar.add(this),
            Yu || ((Yu = !0), Oe.read(l2), Oe.resolveKeyframes(a2)))
          : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const {
        unresolvedKeyframes: r,
        name: i,
        element: o,
        motionValue: l,
      } = this;
      for (let f = 0; f < r.length; f++)
        if (r[f] === null)
          if (f === 0) {
            const c = l == null ? void 0 : l.get(),
              p = r[r.length - 1];
            if (c !== void 0) r[0] = c;
            else if (o && i) {
              const h = o.readValue(i, p);
              h != null && (r[0] = h);
            }
            r[0] === void 0 && (r[0] = p), l && c === void 0 && l.set(r[0]);
          } else r[f] = r[f - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      (this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        Ar.delete(this);
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), Ar.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  }
  const u2 = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
    wx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function xx(t) {
    const r = wx.exec(t);
    if (!r) return [,];
    const [, i, o, l] = r;
    return [`--${i ?? o}`, l];
  }
  function c2(t, r, i = 1) {
    const [o, l] = xx(t);
    if (!o) return;
    const f = window.getComputedStyle(r).getPropertyValue(o);
    if (f) {
      const c = f.trim();
      return u2(c) ? parseFloat(c) : c;
    }
    return Oc(l) ? c2(l, r, i + 1) : l;
  }
  const f2 = (t) => (r) => r.test(t),
    Cx = { test: (t) => t === "auto", parse: (t) => t },
    d2 = [pi, ae, an, Kn, ow, sw, Cx],
    Eh = (t) => d2.find(f2(t));
  class p2 extends Yc {
    constructor(r, i, o, l, f) {
      super(r, i, o, l, f, !0);
    }
    readKeyframes() {
      const { unresolvedKeyframes: r, element: i, name: o } = this;
      if (!i || !i.current) return;
      super.readKeyframes();
      for (let h = 0; h < r.length; h++) {
        let m = r[h];
        if (typeof m == "string" && ((m = m.trim()), Oc(m))) {
          const y = c2(m, i.current);
          y !== void 0 && (r[h] = y),
            h === r.length - 1 && (this.finalKeyframe = m);
        }
      }
      if ((this.resolveNoneKeyframes(), !Qm.has(o) || r.length !== 2)) return;
      const [l, f] = r,
        c = Eh(l),
        p = Eh(f);
      if (c !== p)
        if (Ch(c) && Ch(p))
          for (let h = 0; h < r.length; h++) {
            const m = r[h];
            typeof m == "string" && (r[h] = parseFloat(m));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: r, name: i } = this,
        o = [];
      for (let l = 0; l < r.length; l++) Yw(r[l]) && o.push(l);
      o.length && hx(r, o, i);
    }
    measureInitialState() {
      const { element: r, unresolvedKeyframes: i, name: o } = this;
      if (!r || !r.current) return;
      o === "height" && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = ci[o](
          r.measureViewportBox(),
          window.getComputedStyle(r.current)
        )),
        (i[0] = this.measuredOrigin);
      const l = i[i.length - 1];
      l !== void 0 && r.getValue(o, l).jump(l, !1);
    }
    measureEndState() {
      var r;
      const { element: i, name: o, unresolvedKeyframes: l } = this;
      if (!i || !i.current) return;
      const f = i.getValue(o);
      f && f.jump(this.measuredOrigin, !1);
      const c = l.length - 1,
        p = l[c];
      (l[c] = ci[o](
        i.measureViewportBox(),
        window.getComputedStyle(i.current)
      )),
        p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
        !((r = this.removedTransforms) === null || r === void 0) &&
          r.length &&
          this.removedTransforms.forEach(([h, m]) => {
            i.getValue(h).set(m);
          }),
        this.resolveNoneKeyframes();
    }
  }
  const Th = (t, r) =>
    r === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (qn.test(t) || t === "0") &&
            !t.startsWith("url("))
        );
  function Ax(t) {
    const r = t[0];
    if (t.length === 1) return !0;
    for (let i = 0; i < t.length; i++) if (t[i] !== r) return !0;
  }
  function Sx(t, r, i, o) {
    const l = t[0];
    if (l === null) return !1;
    if (r === "display" || r === "visibility") return !0;
    const f = t[t.length - 1],
      c = Th(l, r),
      p = Th(f, r);
    return !c || !p ? !1 : Ax(t) || ((i === "spring" || _c(i)) && o);
  }
  const Ex = (t) => t !== null;
  function ya(t, { repeat: r, repeatType: i = "loop" }, o) {
    const l = t.filter(Ex),
      f = r && i !== "loop" && r % 2 === 1 ? 0 : l.length - 1;
    return !f || o === void 0 ? l[f] : o;
  }
  const Tx = 40;
  class h2 {
    constructor({
      autoplay: r = !0,
      delay: i = 0,
      type: o = "keyframes",
      repeat: l = 0,
      repeatDelay: f = 0,
      repeatType: c = "loop",
      ...p
    }) {
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = ln.now()),
        (this.options = {
          autoplay: r,
          delay: i,
          type: o,
          repeat: l,
          repeatDelay: f,
          repeatType: c,
          ...p,
        }),
        this.updateFinishedPromise();
    }
    calcStartTime() {
      return this.resolvedAt
        ? this.resolvedAt - this.createdAt > Tx
          ? this.resolvedAt
          : this.createdAt
        : this.createdAt;
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && vx(), this._resolved
      );
    }
    onKeyframesResolved(r, i) {
      (this.resolvedAt = ln.now()), (this.hasAttemptedResolve = !0);
      const {
        name: o,
        type: l,
        velocity: f,
        delay: c,
        onComplete: p,
        onUpdate: h,
        isGenerator: m,
      } = this.options;
      if (!m && !Sx(r, o, l, f))
        if (c) this.options.duration = 0;
        else {
          h && h(ya(r, this.options, i)),
            p && p(),
            this.resolveFinishedPromise();
          return;
        }
      const y = this.initPlayback(r, i);
      y !== !1 &&
        ((this._resolved = { keyframes: r, finalKeyframe: i, ...y }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(r, i) {
      return this.currentFinishedPromise.then(r, i);
    }
    flatten() {
      (this.options.type = "keyframes"), (this.options.ease = "linear");
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((r) => {
        this.resolveFinishedPromise = r;
      });
    }
  }
  const Ie = (t, r, i) => t + (r - t) * i;
  function Pu(t, r, i) {
    return (
      i < 0 && (i += 1),
      i > 1 && (i -= 1),
      i < 1 / 6
        ? t + (r - t) * 6 * i
        : i < 1 / 2
        ? r
        : i < 2 / 3
        ? t + (r - t) * (2 / 3 - i) * 6
        : t
    );
  }
  function Px({ hue: t, saturation: r, lightness: i, alpha: o }) {
    (t /= 360), (r /= 100), (i /= 100);
    let l = 0,
      f = 0,
      c = 0;
    if (!r) l = f = c = i;
    else {
      const p = i < 0.5 ? i * (1 + r) : i + r - i * r,
        h = 2 * i - p;
      (l = Pu(h, p, t + 1 / 3)), (f = Pu(h, p, t)), (c = Pu(h, p, t - 1 / 3));
    }
    return {
      red: Math.round(l * 255),
      green: Math.round(f * 255),
      blue: Math.round(c * 255),
      alpha: o,
    };
  }
  function aa(t, r) {
    return (i) => (i > 0 ? r : t);
  }
  const ku = (t, r, i) => {
      const o = t * t,
        l = i * (r * r - o) + o;
      return l < 0 ? 0 : Math.sqrt(l);
    },
    kx = [Gu, xr, ri],
    Rx = (t) => kx.find((r) => r.test(t));
  function Ph(t) {
    const r = Rx(t);
    if (!r) return !1;
    let i = r.parse(t);
    return r === ri && (i = Px(i)), i;
  }
  const kh = (t, r) => {
      const i = Ph(t),
        o = Ph(r);
      if (!i || !o) return aa(t, r);
      const l = { ...i };
      return (f) => (
        (l.red = ku(i.red, o.red, f)),
        (l.green = ku(i.green, o.green, f)),
        (l.blue = ku(i.blue, o.blue, f)),
        (l.alpha = Ie(i.alpha, o.alpha, f)),
        xr.transform(l)
      );
    },
    jx = (t, r) => (i) => r(t(i)),
    ks = (...t) => t.reduce(jx),
    Ju = new Set(["none", "hidden"]);
  function Ox(t, r) {
    return Ju.has(t) ? (i) => (i <= 0 ? t : r) : (i) => (i >= 1 ? r : t);
  }
  function Mx(t, r) {
    return (i) => Ie(t, r, i);
  }
  function Xc(t) {
    return typeof t == "number"
      ? Mx
      : typeof t == "string"
      ? Oc(t)
        ? aa
        : ct.test(t)
        ? kh
        : Nx
      : Array.isArray(t)
      ? m2
      : typeof t == "object"
      ? ct.test(t)
        ? kh
        : Lx
      : aa;
  }
  function m2(t, r) {
    const i = [...t],
      o = i.length,
      l = t.map((f, c) => Xc(f)(f, r[c]));
    return (f) => {
      for (let c = 0; c < o; c++) i[c] = l[c](f);
      return i;
    };
  }
  function Lx(t, r) {
    const i = { ...t, ...r },
      o = {};
    for (const l in i)
      t[l] !== void 0 && r[l] !== void 0 && (o[l] = Xc(t[l])(t[l], r[l]));
    return (l) => {
      for (const f in o) i[f] = o[f](l);
      return i;
    };
  }
  function Dx(t, r) {
    var i;
    const o = [],
      l = { color: 0, var: 0, number: 0 };
    for (let f = 0; f < r.values.length; f++) {
      const c = r.types[f],
        p = t.indexes[c][l[c]],
        h = (i = t.values[p]) !== null && i !== void 0 ? i : 0;
      (o[f] = h), l[c]++;
    }
    return o;
  }
  const Nx = (t, r) => {
    const i = qn.createTransformer(r),
      o = ws(t),
      l = ws(r);
    return o.indexes.var.length === l.indexes.var.length &&
      o.indexes.color.length === l.indexes.color.length &&
      o.indexes.number.length >= l.indexes.number.length
      ? (Ju.has(t) && !l.values.length) || (Ju.has(r) && !o.values.length)
        ? Ox(t, r)
        : ks(m2(Dx(o, l), l.values), i)
      : aa(t, r);
  };
  function g2(t, r, i) {
    return typeof t == "number" && typeof r == "number" && typeof i == "number"
      ? Ie(t, r, i)
      : Xc(t)(t, r);
  }
  const bx = 5;
  function y2(t, r, i) {
    const o = Math.max(r - bx, 0);
    return Hm(i - t(o), r - o);
  }
  const _e = {
      stiffness: 100,
      damping: 10,
      mass: 1,
      velocity: 0,
      duration: 800,
      bounce: 0.3,
      visualDuration: 0.3,
      restSpeed: { granular: 0.01, default: 2 },
      restDelta: { granular: 0.005, default: 0.5 },
      minDuration: 0.01,
      maxDuration: 10,
      minDamping: 0.05,
      maxDamping: 1,
    },
    Rh = 0.001;
  function Fx({
    duration: t = _e.duration,
    bounce: r = _e.bounce,
    velocity: i = _e.velocity,
    mass: o = _e.mass,
  }) {
    let l,
      f,
      c = 1 - r;
    (c = Tn(_e.minDamping, _e.maxDamping, c)),
      (t = Tn(_e.minDuration, _e.maxDuration, En(t))),
      c < 1
        ? ((l = (m) => {
            const y = m * c,
              v = y * t,
              w = y - i,
              k = ec(m, c),
              S = Math.exp(-v);
            return Rh - (w / k) * S;
          }),
          (f = (m) => {
            const v = m * c * t,
              w = v * i + i,
              k = Math.pow(c, 2) * Math.pow(m, 2) * t,
              S = Math.exp(-v),
              T = ec(Math.pow(m, 2), c);
            return ((-l(m) + Rh > 0 ? -1 : 1) * ((w - k) * S)) / T;
          }))
        : ((l = (m) => {
            const y = Math.exp(-m * t),
              v = (m - i) * t + 1;
            return -0.001 + y * v;
          }),
          (f = (m) => {
            const y = Math.exp(-m * t),
              v = (i - m) * (t * t);
            return y * v;
          }));
    const p = 5 / t,
      h = Ix(l, f, p);
    if (((t = Sn(t)), isNaN(h)))
      return { stiffness: _e.stiffness, damping: _e.damping, duration: t };
    {
      const m = Math.pow(h, 2) * o;
      return { stiffness: m, damping: c * 2 * Math.sqrt(o * m), duration: t };
    }
  }
  const Bx = 12;
  function Ix(t, r, i) {
    let o = i;
    for (let l = 1; l < Bx; l++) o = o - t(o) / r(o);
    return o;
  }
  function ec(t, r) {
    return t * Math.sqrt(1 - r * r);
  }
  const Vx = ["duration", "bounce"],
    _x = ["stiffness", "damping", "mass"];
  function jh(t, r) {
    return r.some((i) => t[i] !== void 0);
  }
  function Ux(t) {
    let r = {
      velocity: _e.velocity,
      stiffness: _e.stiffness,
      damping: _e.damping,
      mass: _e.mass,
      isResolvedFromDuration: !1,
      ...t,
    };
    if (!jh(t, _x) && jh(t, Vx))
      if (t.visualDuration) {
        const i = t.visualDuration,
          o = (2 * Math.PI) / (i * 1.2),
          l = o * o,
          f = 2 * Tn(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(l);
        r = { ...r, mass: _e.mass, stiffness: l, damping: f };
      } else {
        const i = Fx(t);
        (r = { ...r, ...i, mass: _e.mass }), (r.isResolvedFromDuration = !0);
      }
    return r;
  }
  function v2(t = _e.visualDuration, r = _e.bounce) {
    const i =
      typeof t != "object"
        ? { visualDuration: t, keyframes: [0, 1], bounce: r }
        : t;
    let { restSpeed: o, restDelta: l } = i;
    const f = i.keyframes[0],
      c = i.keyframes[i.keyframes.length - 1],
      p = { done: !1, value: f },
      {
        stiffness: h,
        damping: m,
        mass: y,
        duration: v,
        velocity: w,
        isResolvedFromDuration: k,
      } = Ux({ ...i, velocity: -En(i.velocity || 0) }),
      S = w || 0,
      T = m / (2 * Math.sqrt(h * y)),
      P = c - f,
      b = En(Math.sqrt(h / y)),
      I = Math.abs(P) < 5;
    o || (o = I ? _e.restSpeed.granular : _e.restSpeed.default),
      l || (l = I ? _e.restDelta.granular : _e.restDelta.default);
    let V;
    if (T < 1) {
      const M = ec(b, T);
      V = (z) => {
        const Z = Math.exp(-T * b * z);
        return (
          c -
          Z * (((S + T * b * P) / M) * Math.sin(M * z) + P * Math.cos(M * z))
        );
      };
    } else if (T === 1) V = (M) => c - Math.exp(-b * M) * (P + (S + b * P) * M);
    else {
      const M = b * Math.sqrt(T * T - 1);
      V = (z) => {
        const Z = Math.exp(-T * b * z),
          te = Math.min(M * z, 300);
        return (
          c -
          (Z * ((S + T * b * P) * Math.sinh(te) + M * P * Math.cosh(te))) / M
        );
      };
    }
    const J = {
      calculatedDuration: (k && v) || null,
      next: (M) => {
        const z = V(M);
        if (k) p.done = M >= v;
        else {
          let Z = 0;
          T < 1 && (Z = M === 0 ? Sn(S) : y2(V, M, z));
          const te = Math.abs(Z) <= o,
            Ae = Math.abs(c - z) <= l;
          p.done = te && Ae;
        }
        return (p.value = p.done ? c : z), p;
      },
      toString: () => {
        const M = Math.min(Fm(J), Wu),
          z = Bm((Z) => J.next(M * Z).value, M, 30);
        return M + "ms " + z;
      },
    };
    return J;
  }
  function Oh({
    keyframes: t,
    velocity: r = 0,
    power: i = 0.8,
    timeConstant: o = 325,
    bounceDamping: l = 10,
    bounceStiffness: f = 500,
    modifyTarget: c,
    min: p,
    max: h,
    restDelta: m = 0.5,
    restSpeed: y,
  }) {
    const v = t[0],
      w = { done: !1, value: v },
      k = (te) => (p !== void 0 && te < p) || (h !== void 0 && te > h),
      S = (te) =>
        p === void 0
          ? h
          : h === void 0 || Math.abs(p - te) < Math.abs(h - te)
          ? p
          : h;
    let T = i * r;
    const P = v + T,
      b = c === void 0 ? P : c(P);
    b !== P && (T = b - v);
    const I = (te) => -T * Math.exp(-te / o),
      V = (te) => b + I(te),
      J = (te) => {
        const Ae = I(te),
          Me = V(te);
        (w.done = Math.abs(Ae) <= m), (w.value = w.done ? b : Me);
      };
    let M, z;
    const Z = (te) => {
      k(w.value) &&
        ((M = te),
        (z = v2({
          keyframes: [w.value, S(w.value)],
          velocity: y2(V, te, w.value),
          damping: l,
          stiffness: f,
          restDelta: m,
          restSpeed: y,
        })));
    };
    return (
      Z(0),
      {
        calculatedDuration: null,
        next: (te) => {
          let Ae = !1;
          return (
            !z && M === void 0 && ((Ae = !0), J(te), Z(te)),
            M !== void 0 && te >= M ? z.next(te - M) : (!Ae && J(te), w)
          );
        },
      }
    );
  }
  const zx = Ps(0.42, 0, 1, 1),
    Qx = Ps(0, 0, 0.58, 1),
    w2 = Ps(0.42, 0, 0.58, 1),
    Hx = (t) => Array.isArray(t) && typeof t[0] != "number",
    $x = {
      linear: Lt,
      easeIn: zx,
      easeInOut: w2,
      easeOut: Qx,
      circIn: Zc,
      circInOut: Jm,
      circOut: Xm,
      backIn: Wc,
      backInOut: qm,
      backOut: Gm,
      anticipate: Ym,
    },
    Mh = (t) => {
      if (Uc(t)) {
        ym(t.length === 4);
        const [r, i, o, l] = t;
        return Ps(r, i, o, l);
      } else if (typeof t == "string") return $x[t];
      return t;
    };
  function Wx(t, r, i) {
    const o = [],
      l = i || g2,
      f = t.length - 1;
    for (let c = 0; c < f; c++) {
      let p = l(t[c], t[c + 1]);
      if (r) {
        const h = Array.isArray(r) ? r[c] || Lt : r;
        p = ks(h, p);
      }
      o.push(p);
    }
    return o;
  }
  function Zx(t, r, { clamp: i = !0, ease: o, mixer: l } = {}) {
    const f = t.length;
    if ((ym(f === r.length), f === 1)) return () => r[0];
    if (f === 2 && r[0] === r[1]) return () => r[1];
    const c = t[0] === t[1];
    t[0] > t[f - 1] && ((t = [...t].reverse()), (r = [...r].reverse()));
    const p = Wx(r, o, l),
      h = p.length,
      m = (y) => {
        if (c && y < t[0]) return r[0];
        let v = 0;
        if (h > 1) for (; v < t.length - 2 && !(y < t[v + 1]); v++);
        const w = li(t[v], t[v + 1], y);
        return p[v](w);
      };
    return i ? (y) => m(Tn(t[0], t[f - 1], y)) : m;
  }
  function Kx(t, r) {
    const i = t[t.length - 1];
    for (let o = 1; o <= r; o++) {
      const l = li(0, r, o);
      t.push(Ie(i, 1, l));
    }
  }
  function Gx(t) {
    const r = [0];
    return Kx(r, t.length - 1), r;
  }
  function qx(t, r) {
    return t.map((i) => i * r);
  }
  function Yx(t, r) {
    return t.map(() => r || w2).splice(0, t.length - 1);
  }
  function la({
    duration: t = 300,
    keyframes: r,
    times: i,
    ease: o = "easeInOut",
  }) {
    const l = Hx(o) ? o.map(Mh) : Mh(o),
      f = { done: !1, value: r[0] },
      c = qx(i && i.length === r.length ? i : Gx(r), t),
      p = Zx(c, r, { ease: Array.isArray(l) ? l : Yx(r, l) });
    return {
      calculatedDuration: t,
      next: (h) => ((f.value = p(h)), (f.done = h >= t), f),
    };
  }
  const Xx = (t) => {
      const r = ({ timestamp: i }) => t(i);
      return {
        start: () => Oe.update(r, !0),
        stop: () => Gn(r),
        now: () => (it.isProcessing ? it.timestamp : ln.now()),
      };
    },
    Jx = { decay: Oh, inertia: Oh, tween: la, keyframes: la, spring: v2 },
    e3 = (t) => t / 100;
  class Jc extends h2 {
    constructor(r) {
      super(r),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.startTime = null),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
          )
            return;
          this.teardown();
          const { onStop: h } = this.options;
          h && h();
        });
      const {
          name: i,
          motionValue: o,
          element: l,
          keyframes: f,
        } = this.options,
        c = (l == null ? void 0 : l.KeyframeResolver) || Yc,
        p = (h, m) => this.onKeyframesResolved(h, m);
      (this.resolver = new c(f, p, i, o, l)), this.resolver.scheduleResolve();
    }
    flatten() {
      super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes)
          );
    }
    initPlayback(r) {
      const {
          type: i = "keyframes",
          repeat: o = 0,
          repeatDelay: l = 0,
          repeatType: f,
          velocity: c = 0,
        } = this.options,
        p = _c(i) ? i : Jx[i] || la;
      let h, m;
      p !== la &&
        typeof r[0] != "number" &&
        ((h = ks(e3, g2(r[0], r[1]))), (r = [0, 100]));
      const y = p({ ...this.options, keyframes: r });
      f === "mirror" &&
        (m = p({ ...this.options, keyframes: [...r].reverse(), velocity: -c })),
        y.calculatedDuration === null && (y.calculatedDuration = Fm(y));
      const { calculatedDuration: v } = y,
        w = v + l,
        k = w * (o + 1) - l;
      return {
        generator: y,
        mirroredGenerator: m,
        mapPercentToKeyframes: h,
        calculatedDuration: v,
        resolvedDuration: w,
        totalDuration: k,
      };
    }
    onPostResolved() {
      const { autoplay: r = !0 } = this.options;
      this.play(),
        this.pendingPlayState === "paused" || !r
          ? this.pause()
          : (this.state = this.pendingPlayState);
    }
    tick(r, i = !1) {
      const { resolved: o } = this;
      if (!o) {
        const { keyframes: te } = this.options;
        return { done: !0, value: te[te.length - 1] };
      }
      const {
        finalKeyframe: l,
        generator: f,
        mirroredGenerator: c,
        mapPercentToKeyframes: p,
        keyframes: h,
        calculatedDuration: m,
        totalDuration: y,
        resolvedDuration: v,
      } = o;
      if (this.startTime === null) return f.next(0);
      const {
        delay: w,
        repeat: k,
        repeatType: S,
        repeatDelay: T,
        onUpdate: P,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, r))
        : this.speed < 0 &&
          (this.startTime = Math.min(r - y / this.speed, this.startTime)),
        i
          ? (this.currentTime = r)
          : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(r - this.startTime) * this.speed);
      const b = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
        I = this.speed >= 0 ? b < 0 : b > y;
      (this.currentTime = Math.max(b, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = y);
      let V = this.currentTime,
        J = f;
      if (k) {
        const te = Math.min(this.currentTime, y) / v;
        let Ae = Math.floor(te),
          Me = te % 1;
        !Me && te >= 1 && (Me = 1),
          Me === 1 && Ae--,
          (Ae = Math.min(Ae, k + 1)),
          !!(Ae % 2) &&
            (S === "reverse"
              ? ((Me = 1 - Me), T && (Me -= T / v))
              : S === "mirror" && (J = c)),
          (V = Tn(0, 1, Me) * v);
      }
      const M = I ? { done: !1, value: h[0] } : J.next(V);
      p && (M.value = p(M.value));
      let { done: z } = M;
      !I &&
        m !== null &&
        (z = this.speed >= 0 ? this.currentTime >= y : this.currentTime <= 0);
      const Z =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && z));
      return (
        Z && l !== void 0 && (M.value = ya(h, this.options, l)),
        P && P(M.value),
        Z && this.finish(),
        M
      );
    }
    get duration() {
      const { resolved: r } = this;
      return r ? En(r.calculatedDuration) : 0;
    }
    get time() {
      return En(this.currentTime);
    }
    set time(r) {
      (r = Sn(r)),
        (this.currentTime = r),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = r)
          : this.driver &&
            (this.startTime = this.driver.now() - r / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(r) {
      const i = this.playbackSpeed !== r;
      (this.playbackSpeed = r), i && (this.time = En(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      const { driver: r = Xx, onPlay: i, startTime: o } = this.options;
      this.driver || (this.driver = r((f) => this.tick(f))), i && i();
      const l = this.driver.now();
      this.holdTime !== null
        ? (this.startTime = l - this.holdTime)
        : this.startTime
        ? this.state === "finished" && (this.startTime = l)
        : (this.startTime = o ?? this.calcStartTime()),
        this.state === "finished" && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      var r;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      (this.state = "paused"),
        (this.holdTime =
          (r = this.currentTime) !== null && r !== void 0 ? r : 0);
    }
    complete() {
      this.state !== "running" && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = "finished");
      const { onComplete: r } = this.options;
      r && r();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(r) {
      return (this.startTime = 0), this.tick(r, !0);
    }
  }
  const t3 = new Set(["opacity", "clipPath", "filter", "transform"]);
  function n3(
    t,
    r,
    i,
    {
      delay: o = 0,
      duration: l = 300,
      repeat: f = 0,
      repeatType: c = "loop",
      ease: p = "easeInOut",
      times: h,
    } = {}
  ) {
    const m = { [r]: i };
    h && (m.offset = h);
    const y = Vm(p, l);
    return (
      Array.isArray(y) && (m.easing = y),
      t.animate(m, {
        delay: o,
        duration: l,
        easing: Array.isArray(y) ? "linear" : y,
        fill: "both",
        iterations: f + 1,
        direction: c === "reverse" ? "alternate" : "normal",
      })
    );
  }
  const r3 = Ec(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    ua = 10,
    i3 = 2e4;
  function s3(t) {
    return _c(t.type) || t.type === "spring" || !Im(t.ease);
  }
  function o3(t, r) {
    const i = new Jc({
      ...r,
      keyframes: t,
      repeat: 0,
      delay: 0,
      isGenerator: !0,
    });
    let o = { done: !1, value: t[0] };
    const l = [];
    let f = 0;
    for (; !o.done && f < i3; ) (o = i.sample(f)), l.push(o.value), (f += ua);
    return { times: void 0, keyframes: l, duration: f - ua, ease: "linear" };
  }
  const x2 = { anticipate: Ym, backInOut: qm, circInOut: Jm };
  function a3(t) {
    return t in x2;
  }
  class Lh extends h2 {
    constructor(r) {
      super(r);
      const {
        name: i,
        motionValue: o,
        element: l,
        keyframes: f,
      } = this.options;
      (this.resolver = new p2(
        f,
        (c, p) => this.onKeyframesResolved(c, p),
        i,
        o,
        l
      )),
        this.resolver.scheduleResolve();
    }
    initPlayback(r, i) {
      let {
        duration: o = 300,
        times: l,
        ease: f,
        type: c,
        motionValue: p,
        name: h,
        startTime: m,
      } = this.options;
      if (!p.owner || !p.owner.current) return !1;
      if (
        (typeof f == "string" && oa() && a3(f) && (f = x2[f]), s3(this.options))
      ) {
        const {
            onComplete: v,
            onUpdate: w,
            motionValue: k,
            element: S,
            ...T
          } = this.options,
          P = o3(r, T);
        (r = P.keyframes),
          r.length === 1 && (r[1] = r[0]),
          (o = P.duration),
          (l = P.times),
          (f = P.ease),
          (c = "keyframes");
      }
      const y = n3(p.owner.current, h, r, {
        ...this.options,
        duration: o,
        times: l,
        ease: f,
      });
      return (
        (y.startTime = m ?? this.calcStartTime()),
        this.pendingTimeline
          ? (mh(y, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (y.onfinish = () => {
              const { onComplete: v } = this.options;
              p.set(ya(r, this.options, i)),
                v && v(),
                this.cancel(),
                this.resolveFinishedPromise();
            }),
        { animation: y, duration: o, times: l, type: c, ease: f, keyframes: r }
      );
    }
    get duration() {
      const { resolved: r } = this;
      if (!r) return 0;
      const { duration: i } = r;
      return En(i);
    }
    get time() {
      const { resolved: r } = this;
      if (!r) return 0;
      const { animation: i } = r;
      return En(i.currentTime || 0);
    }
    set time(r) {
      const { resolved: i } = this;
      if (!i) return;
      const { animation: o } = i;
      o.currentTime = Sn(r);
    }
    get speed() {
      const { resolved: r } = this;
      if (!r) return 1;
      const { animation: i } = r;
      return i.playbackRate;
    }
    set speed(r) {
      const { resolved: i } = this;
      if (!i) return;
      const { animation: o } = i;
      o.playbackRate = r;
    }
    get state() {
      const { resolved: r } = this;
      if (!r) return "idle";
      const { animation: i } = r;
      return i.playState;
    }
    get startTime() {
      const { resolved: r } = this;
      if (!r) return null;
      const { animation: i } = r;
      return i.startTime;
    }
    attachTimeline(r) {
      if (!this._resolved) this.pendingTimeline = r;
      else {
        const { resolved: i } = this;
        if (!i) return Lt;
        const { animation: o } = i;
        mh(o, r);
      }
      return Lt;
    }
    play() {
      if (this.isStopped) return;
      const { resolved: r } = this;
      if (!r) return;
      const { animation: i } = r;
      i.playState === "finished" && this.updateFinishedPromise(), i.play();
    }
    pause() {
      const { resolved: r } = this;
      if (!r) return;
      const { animation: i } = r;
      i.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
      )
        return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      const { resolved: r } = this;
      if (!r) return;
      const {
        animation: i,
        keyframes: o,
        duration: l,
        type: f,
        ease: c,
        times: p,
      } = r;
      if (i.playState === "idle" || i.playState === "finished") return;
      if (this.time) {
        const {
            motionValue: m,
            onUpdate: y,
            onComplete: v,
            element: w,
            ...k
          } = this.options,
          S = new Jc({
            ...k,
            keyframes: o,
            duration: l,
            type: f,
            ease: c,
            times: p,
            isGenerator: !0,
          }),
          T = Sn(this.time);
        m.setWithVelocity(S.sample(T - ua).value, S.sample(T).value, ua);
      }
      const { onStop: h } = this.options;
      h && h(), this.cancel();
    }
    complete() {
      const { resolved: r } = this;
      r && r.animation.finish();
    }
    cancel() {
      const { resolved: r } = this;
      r && r.animation.cancel();
    }
    static supports(r) {
      const {
        motionValue: i,
        name: o,
        repeatDelay: l,
        repeatType: f,
        damping: c,
        type: p,
      } = r;
      if (!i || !i.owner || !(i.owner.current instanceof HTMLElement))
        return !1;
      const { onUpdate: h, transformTemplate: m } = i.owner.getProps();
      return (
        r3() &&
        o &&
        t3.has(o) &&
        !h &&
        !m &&
        !l &&
        f !== "mirror" &&
        c !== 0 &&
        p !== "inertia"
      );
    }
  }
  const l3 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    u3 = (t) => ({
      type: "spring",
      stiffness: 550,
      damping: t === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10,
    }),
    c3 = { type: "keyframes", duration: 0.8 },
    f3 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    d3 = (t, { keyframes: r }) =>
      r.length > 2
        ? c3
        : kr.has(t)
        ? t.startsWith("scale")
          ? u3(r[1])
          : l3
        : f3;
  function p3({
    when: t,
    delay: r,
    delayChildren: i,
    staggerChildren: o,
    staggerDirection: l,
    repeat: f,
    repeatType: c,
    repeatDelay: p,
    from: h,
    elapsed: m,
    ...y
  }) {
    return !!Object.keys(y).length;
  }
  const ef =
    (t, r, i, o = {}, l, f) =>
    (c) => {
      const p = Vc(o, t) || {},
        h = p.delay || o.delay || 0;
      let { elapsed: m = 0 } = o;
      m = m - Sn(h);
      let y = {
        keyframes: Array.isArray(i) ? i : [null, i],
        ease: "easeOut",
        velocity: r.getVelocity(),
        ...p,
        delay: -m,
        onUpdate: (w) => {
          r.set(w), p.onUpdate && p.onUpdate(w);
        },
        onComplete: () => {
          c(), p.onComplete && p.onComplete();
        },
        name: t,
        motionValue: r,
        element: f ? void 0 : l,
      };
      p3(p) || (y = { ...y, ...d3(t, y) }),
        y.duration && (y.duration = Sn(y.duration)),
        y.repeatDelay && (y.repeatDelay = Sn(y.repeatDelay)),
        y.from !== void 0 && (y.keyframes[0] = y.from);
      let v = !1;
      if (
        ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
          ((y.duration = 0), y.delay === 0 && (v = !0)),
        v && !f && r.get() !== void 0)
      ) {
        const w = ya(y.keyframes, p);
        if (w !== void 0)
          return (
            Oe.update(() => {
              y.onUpdate(w), y.onComplete();
            }),
            new Mw([])
          );
      }
      return !f && Lh.supports(y) ? new Lh(y) : new Jc(y);
    };
  function h3({ protectedKeys: t, needsAnimating: r }, i) {
    const o = t.hasOwnProperty(i) && r[i] !== !0;
    return (r[i] = !1), o;
  }
  function C2(t, r, { delay: i = 0, transitionOverride: o, type: l } = {}) {
    var f;
    let {
      transition: c = t.getDefaultTransition(),
      transitionEnd: p,
      ...h
    } = r;
    o && (c = o);
    const m = [],
      y = l && t.animationState && t.animationState.getState()[l];
    for (const v in h) {
      const w = t.getValue(
          v,
          (f = t.latestValues[v]) !== null && f !== void 0 ? f : null
        ),
        k = h[v];
      if (k === void 0 || (y && h3(y, v))) continue;
      const S = { delay: i, ...Vc(c || {}, v) };
      let T = !1;
      if (window.MotionHandoffAnimation) {
        const b = $m(t);
        if (b) {
          const I = window.MotionHandoffAnimation(b, v, Oe);
          I !== null && ((S.startTime = I), (T = !0));
        }
      }
      Ku(t, v),
        w.start(
          ef(
            v,
            w,
            k,
            t.shouldReduceMotion && Qm.has(v) ? { type: !1 } : S,
            t,
            T
          )
        );
      const P = w.animation;
      P && m.push(P);
    }
    return (
      p &&
        Promise.all(m).then(() => {
          Oe.update(() => {
            p && Ww(t, p);
          });
        }),
      m
    );
  }
  function tc(t, r, i = {}) {
    var o;
    const l = ys(
      t,
      r,
      i.type === "exit"
        ? (o = t.presenceContext) === null || o === void 0
          ? void 0
          : o.custom
        : void 0
    );
    let { transition: f = t.getDefaultTransition() || {} } = l || {};
    i.transitionOverride && (f = i.transitionOverride);
    const c = l ? () => Promise.all(C2(t, l, i)) : () => Promise.resolve(),
      p =
        t.variantChildren && t.variantChildren.size
          ? (m = 0) => {
              const {
                delayChildren: y = 0,
                staggerChildren: v,
                staggerDirection: w,
              } = f;
              return m3(t, r, y + m, v, w, i);
            }
          : () => Promise.resolve(),
      { when: h } = f;
    if (h) {
      const [m, y] = h === "beforeChildren" ? [c, p] : [p, c];
      return m().then(() => y());
    } else return Promise.all([c(), p(i.delay)]);
  }
  function m3(t, r, i = 0, o = 0, l = 1, f) {
    const c = [],
      p = (t.variantChildren.size - 1) * o,
      h = l === 1 ? (m = 0) => m * o : (m = 0) => p - m * o;
    return (
      Array.from(t.variantChildren)
        .sort(g3)
        .forEach((m, y) => {
          m.notify("AnimationStart", r),
            c.push(
              tc(m, r, { ...f, delay: i + h(y) }).then(() =>
                m.notify("AnimationComplete", r)
              )
            );
        }),
      Promise.all(c)
    );
  }
  function g3(t, r) {
    return t.sortNodePosition(r);
  }
  function y3(t, r, i = {}) {
    t.notify("AnimationStart", r);
    let o;
    if (Array.isArray(r)) {
      const l = r.map((f) => tc(t, f, i));
      o = Promise.all(l);
    } else if (typeof r == "string") o = tc(t, r, i);
    else {
      const l = typeof r == "function" ? ys(t, r, i.custom) : r;
      o = Promise.all(C2(t, l, i));
    }
    return o.then(() => {
      t.notify("AnimationComplete", r);
    });
  }
  function A2(t, r) {
    if (!Array.isArray(r)) return !1;
    const i = r.length;
    if (i !== t.length) return !1;
    for (let o = 0; o < i; o++) if (r[o] !== t[o]) return !1;
    return !0;
  }
  const v3 = Pc.length;
  function S2(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
      const i = t.parent ? S2(t.parent) || {} : {};
      return t.props.initial !== void 0 && (i.initial = t.props.initial), i;
    }
    const r = {};
    for (let i = 0; i < v3; i++) {
      const o = Pc[i],
        l = t.props[o];
      (hs(l) || l === !1) && (r[o] = l);
    }
    return r;
  }
  const w3 = [...Tc].reverse(),
    x3 = Tc.length;
  function C3(t) {
    return (r) =>
      Promise.all(r.map(({ animation: i, options: o }) => y3(t, i, o)));
  }
  function A3(t) {
    let r = C3(t),
      i = Dh(),
      o = !0;
    const l = (h) => (m, y) => {
      var v;
      const w = ys(
        t,
        y,
        h === "exit"
          ? (v = t.presenceContext) === null || v === void 0
            ? void 0
            : v.custom
          : void 0
      );
      if (w) {
        const { transition: k, transitionEnd: S, ...T } = w;
        m = { ...m, ...T, ...S };
      }
      return m;
    };
    function f(h) {
      r = h(t);
    }
    function c(h) {
      const { props: m } = t,
        y = S2(t.parent) || {},
        v = [],
        w = new Set();
      let k = {},
        S = 1 / 0;
      for (let P = 0; P < x3; P++) {
        const b = w3[P],
          I = i[b],
          V = m[b] !== void 0 ? m[b] : y[b],
          J = hs(V),
          M = b === h ? I.isActive : null;
        M === !1 && (S = P);
        let z = V === y[b] && V !== m[b] && J;
        if (
          (z && o && t.manuallyAnimateOnMount && (z = !1),
          (I.protectedKeys = { ...k }),
          (!I.isActive && M === null) ||
            (!V && !I.prevProp) ||
            ma(V) ||
            typeof V == "boolean")
        )
          continue;
        const Z = S3(I.prevProp, V);
        let te = Z || (b === h && I.isActive && !z && J) || (P > S && J),
          Ae = !1;
        const Me = Array.isArray(V) ? V : [V];
        let et = Me.reduce(l(b), {});
        M === !1 && (et = {});
        const { prevResolvedValues: pt = {} } = I,
          Pe = { ...pt, ...et },
          $e = (he) => {
            (te = !0),
              w.has(he) && ((Ae = !0), w.delete(he)),
              (I.needsAnimating[he] = !0);
            const $ = t.getValue(he);
            $ && ($.liveStyle = !1);
          };
        for (const he in Pe) {
          const $ = et[he],
            re = pt[he];
          if (k.hasOwnProperty(he)) continue;
          let W = !1;
          $u($) && $u(re) ? (W = !A2($, re)) : (W = $ !== re),
            W
              ? $ != null
                ? $e(he)
                : w.add(he)
              : $ !== void 0 && w.has(he)
              ? $e(he)
              : (I.protectedKeys[he] = !0);
        }
        (I.prevProp = V),
          (I.prevResolvedValues = et),
          I.isActive && (k = { ...k, ...et }),
          o && t.blockInitialAnimation && (te = !1),
          te &&
            (!(z && Z) || Ae) &&
            v.push(
              ...Me.map((he) => ({ animation: he, options: { type: b } }))
            );
      }
      if (w.size) {
        const P = {};
        if (typeof m.initial != "boolean") {
          const b = ys(t, Array.isArray(m.initial) ? m.initial[0] : m.initial);
          b && b.transition && (P.transition = b.transition);
        }
        w.forEach((b) => {
          const I = t.getBaseTarget(b),
            V = t.getValue(b);
          V && (V.liveStyle = !0), (P[b] = I ?? null);
        }),
          v.push({ animation: P });
      }
      let T = !!v.length;
      return (
        o &&
          (m.initial === !1 || m.initial === m.animate) &&
          !t.manuallyAnimateOnMount &&
          (T = !1),
        (o = !1),
        T ? r(v) : Promise.resolve()
      );
    }
    function p(h, m) {
      var y;
      if (i[h].isActive === m) return Promise.resolve();
      (y = t.variantChildren) === null ||
        y === void 0 ||
        y.forEach((w) => {
          var k;
          return (k = w.animationState) === null || k === void 0
            ? void 0
            : k.setActive(h, m);
        }),
        (i[h].isActive = m);
      const v = c(h);
      for (const w in i) i[w].protectedKeys = {};
      return v;
    }
    return {
      animateChanges: c,
      setActive: p,
      setAnimateFunction: f,
      getState: () => i,
      reset: () => {
        (i = Dh()), (o = !0);
      },
    };
  }
  function S3(t, r) {
    return typeof r == "string" ? r !== t : Array.isArray(r) ? !A2(r, t) : !1;
  }
  function gr(t = !1) {
    return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function Dh() {
    return {
      animate: gr(!0),
      whileInView: gr(),
      whileHover: gr(),
      whileTap: gr(),
      whileDrag: gr(),
      whileFocus: gr(),
      exit: gr(),
    };
  }
  class Xn {
    constructor(r) {
      (this.isMounted = !1), (this.node = r);
    }
    update() {}
  }
  class E3 extends Xn {
    constructor(r) {
      super(r), r.animationState || (r.animationState = A3(r));
    }
    updateAnimationControlsSubscription() {
      const { animate: r } = this.node.getProps();
      ma(r) && (this.unmountControls = r.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate: r } = this.node.getProps(),
        { animate: i } = this.node.prevProps || {};
      r !== i && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var r;
      this.node.animationState.reset(),
        (r = this.unmountControls) === null || r === void 0 || r.call(this);
    }
  }
  let T3 = 0;
  class P3 extends Xn {
    constructor() {
      super(...arguments), (this.id = T3++);
    }
    update() {
      if (!this.node.presenceContext) return;
      const { isPresent: r, onExitComplete: i } = this.node.presenceContext,
        { isPresent: o } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || r === o) return;
      const l = this.node.animationState.setActive("exit", !r);
      i &&
        !r &&
        l.then(() => {
          i(this.id);
        });
    }
    mount() {
      const { register: r, onExitComplete: i } =
        this.node.presenceContext || {};
      i && i(this.id), r && (this.unmount = r(this.id));
    }
    unmount() {}
  }
  const k3 = { animation: { Feature: E3 }, exit: { Feature: P3 } };
  function xs(t, r, i, o = { passive: !0 }) {
    return t.addEventListener(r, i, o), () => t.removeEventListener(r, i);
  }
  function Rs(t) {
    return { point: { x: t.pageX, y: t.pageY } };
  }
  const R3 = (t) => (r) => zc(r) && t(r, Rs(r));
  function ii(t, r, i, o) {
    return xs(t, r, R3(i), o);
  }
  function E2({ top: t, left: r, right: i, bottom: o }) {
    return { x: { min: r, max: i }, y: { min: t, max: o } };
  }
  function j3({ x: t, y: r }) {
    return { top: r.min, right: t.max, bottom: r.max, left: t.min };
  }
  function O3(t, r) {
    if (!r) return t;
    const i = r({ x: t.left, y: t.top }),
      o = r({ x: t.right, y: t.bottom });
    return { top: i.y, left: i.x, bottom: o.y, right: o.x };
  }
  const T2 = 1e-4,
    M3 = 1 - T2,
    L3 = 1 + T2,
    P2 = 0.01,
    D3 = 0 - P2,
    N3 = 0 + P2;
  function gt(t) {
    return t.max - t.min;
  }
  function b3(t, r, i) {
    return Math.abs(t - r) <= i;
  }
  function Nh(t, r, i, o = 0.5) {
    (t.origin = o),
      (t.originPoint = Ie(r.min, r.max, t.origin)),
      (t.scale = gt(i) / gt(r)),
      (t.translate = Ie(i.min, i.max, t.origin) - t.originPoint),
      ((t.scale >= M3 && t.scale <= L3) || isNaN(t.scale)) && (t.scale = 1),
      ((t.translate >= D3 && t.translate <= N3) || isNaN(t.translate)) &&
        (t.translate = 0);
  }
  function cs(t, r, i, o) {
    Nh(t.x, r.x, i.x, o ? o.originX : void 0),
      Nh(t.y, r.y, i.y, o ? o.originY : void 0);
  }
  function bh(t, r, i) {
    (t.min = i.min + r.min), (t.max = t.min + gt(r));
  }
  function F3(t, r, i) {
    bh(t.x, r.x, i.x), bh(t.y, r.y, i.y);
  }
  function Fh(t, r, i) {
    (t.min = r.min - i.min), (t.max = t.min + gt(r));
  }
  function fs(t, r, i) {
    Fh(t.x, r.x, i.x), Fh(t.y, r.y, i.y);
  }
  const Bh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    si = () => ({ x: Bh(), y: Bh() }),
    Ih = () => ({ min: 0, max: 0 }),
    Qe = () => ({ x: Ih(), y: Ih() });
  function Qt(t) {
    return [t("x"), t("y")];
  }
  function Ru(t) {
    return t === void 0 || t === 1;
  }
  function nc({ scale: t, scaleX: r, scaleY: i }) {
    return !Ru(t) || !Ru(r) || !Ru(i);
  }
  function vr(t) {
    return (
      nc(t) ||
      k2(t) ||
      t.z ||
      t.rotate ||
      t.rotateX ||
      t.rotateY ||
      t.skewX ||
      t.skewY
    );
  }
  function k2(t) {
    return Vh(t.x) || Vh(t.y);
  }
  function Vh(t) {
    return t && t !== "0%";
  }
  function ca(t, r, i) {
    const o = t - i,
      l = r * o;
    return i + l;
  }
  function _h(t, r, i, o, l) {
    return l !== void 0 && (t = ca(t, l, o)), ca(t, i, o) + r;
  }
  function rc(t, r = 0, i = 1, o, l) {
    (t.min = _h(t.min, r, i, o, l)), (t.max = _h(t.max, r, i, o, l));
  }
  function R2(t, { x: r, y: i }) {
    rc(t.x, r.translate, r.scale, r.originPoint),
      rc(t.y, i.translate, i.scale, i.originPoint);
  }
  const Uh = 0.999999999999,
    zh = 1.0000000000001;
  function B3(t, r, i, o = !1) {
    const l = i.length;
    if (!l) return;
    r.x = r.y = 1;
    let f, c;
    for (let p = 0; p < l; p++) {
      (f = i[p]), (c = f.projectionDelta);
      const { visualElement: h } = f.options;
      (h && h.props.style && h.props.style.display === "contents") ||
        (o &&
          f.options.layoutScroll &&
          f.scroll &&
          f !== f.root &&
          ai(t, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
        c && ((r.x *= c.x.scale), (r.y *= c.y.scale), R2(t, c)),
        o && vr(f.latestValues) && ai(t, f.latestValues));
    }
    r.x < zh && r.x > Uh && (r.x = 1), r.y < zh && r.y > Uh && (r.y = 1);
  }
  function oi(t, r) {
    (t.min = t.min + r), (t.max = t.max + r);
  }
  function Qh(t, r, i, o, l = 0.5) {
    const f = Ie(t.min, t.max, l);
    rc(t, r, i, f, o);
  }
  function ai(t, r) {
    Qh(t.x, r.x, r.scaleX, r.scale, r.originX),
      Qh(t.y, r.y, r.scaleY, r.scale, r.originY);
  }
  function j2(t, r) {
    return E2(O3(t.getBoundingClientRect(), r));
  }
  function I3(t, r, i) {
    const o = j2(t, i),
      { scroll: l } = r;
    return l && (oi(o.x, l.offset.x), oi(o.y, l.offset.y)), o;
  }
  const Hh = (t, r) => Math.abs(t - r);
  function V3(t, r) {
    const i = Hh(t.x, r.x),
      o = Hh(t.y, r.y);
    return Math.sqrt(i ** 2 + o ** 2);
  }
  class O2 {
    constructor(
      r,
      i,
      { transformPagePoint: o, dragSnapToOrigin: l = !1 } = {}
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          const y = Ou(this.lastMoveEventInfo, this.history),
            v = this.startEvent !== null,
            w = V3(y.offset, { x: 0, y: 0 }) >= 3;
          if (!v && !w) return;
          const { point: k } = y,
            { timestamp: S } = it;
          this.history.push({ ...k, timestamp: S });
          const { onStart: T, onMove: P } = this.handlers;
          v ||
            (T && T(this.lastMoveEvent, y),
            (this.startEvent = this.lastMoveEvent)),
            P && P(this.lastMoveEvent, y);
        }),
        (this.handlePointerMove = (y, v) => {
          if (
            ((this.index = Wh(y.currentTarget)),
            y.target instanceof Element &&
              y.target.hasPointerCapture &&
              y.pointerId !== void 0)
          )
            try {
              if (!y.target.hasPointerCapture(y.pointerId)) return;
            } catch {}
          (this.lastMoveEvent = y),
            (this.lastMoveEventInfo = ju(v, this.transformPagePoint)),
            Oe.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (y, v) => {
          ls(y, "release"), this.end();
          const {
            onEnd: w,
            onSessionEnd: k,
            resumeAnimation: S,
          } = this.handlers;
          if (
            (this.dragSnapToOrigin && S && S(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          const T = Ou(
            y.type === "pointercancel" || y.type === "lostpointercapture"
              ? this.lastMoveEventInfo
              : ju(v, this.transformPagePoint),
            this.history
          );
          this.startEvent && w && w(y, T), k && k(y, T);
        }),
        !zc(r))
      )
        return;
      (this.dragSnapToOrigin = l),
        (this.handlers = i),
        (this.transformPagePoint = o);
      const f = Rs(r),
        c = ju(f, this.transformPagePoint),
        { point: p } = c,
        { timestamp: h } = it;
      this.history = [{ ...p, timestamp: h }];
      const { onSessionStart: m } = i;
      m && m(r, Ou(c, this.history)),
        ls(r, "set"),
        (this.removeListeners = ks(
          ii(r.currentTarget, "pointermove", this.handlePointerMove),
          ii(r.currentTarget, "pointerup", this.handlePointerUp),
          ii(r.currentTarget, "pointercancel", this.handlePointerUp),
          ii(r.currentTarget, "lostpointercapture", (y, v) => {
            Wh(y.currentTarget) !== this.index
              ? ls(y, "set")
              : this.handlePointerUp(y, v);
          })
        ));
    }
    updateHandlers(r) {
      this.handlers = r;
    }
    end() {
      this.removeListeners && this.removeListeners(), Gn(this.updatePoint);
    }
  }
  function ju(t, r) {
    return r ? { point: r(t.point) } : t;
  }
  function $h(t, r) {
    return { x: t.x - r.x, y: t.y - r.y };
  }
  function Ou({ point: t }, r) {
    return {
      point: t,
      delta: $h(t, M2(r)),
      offset: $h(t, _3(r)),
      velocity: U3(r, 0.1),
    };
  }
  function _3(t) {
    return t[0];
  }
  function M2(t) {
    return t[t.length - 1];
  }
  function U3(t, r) {
    if (t.length < 2) return { x: 0, y: 0 };
    let i = t.length - 1,
      o = null;
    const l = M2(t);
    for (; i >= 0 && ((o = t[i]), !(l.timestamp - o.timestamp > Sn(r))); ) i--;
    if (!o) return { x: 0, y: 0 };
    const f = En(l.timestamp - o.timestamp);
    if (f === 0) return { x: 0, y: 0 };
    const c = { x: (l.x - o.x) / f, y: (l.y - o.y) / f };
    return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c;
  }
  function Wh(t) {
    return t.parentNode ? Array.from(t.parentNode.children).indexOf(t) : -1;
  }
  function z3(t, { min: r, max: i }, o) {
    return (
      r !== void 0 && t < r
        ? (t = o ? Ie(r, t, o.min) : Math.max(t, r))
        : i !== void 0 && t > i && (t = o ? Ie(i, t, o.max) : Math.min(t, i)),
      t
    );
  }
  function Zh(t, r, i) {
    return {
      min: r !== void 0 ? t.min + r : void 0,
      max: i !== void 0 ? t.max + i - (t.max - t.min) : void 0,
    };
  }
  function Q3(t, { top: r, left: i, bottom: o, right: l }) {
    return { x: Zh(t.x, i, l), y: Zh(t.y, r, o) };
  }
  function Kh(t, r) {
    let i = r.min - t.min,
      o = r.max - t.max;
    return (
      r.max - r.min < t.max - t.min && ([i, o] = [o, i]), { min: i, max: o }
    );
  }
  function H3(t, r) {
    return { x: Kh(t.x, r.x), y: Kh(t.y, r.y) };
  }
  function $3(t, r) {
    let i = 0.5;
    const o = gt(t),
      l = gt(r);
    return (
      l > o
        ? (i = li(r.min, r.max - o, t.min))
        : o > l && (i = li(t.min, t.max - l, r.min)),
      Tn(0, 1, i)
    );
  }
  function W3(t, r) {
    const i = {};
    return (
      r.min !== void 0 && (i.min = r.min - t.min),
      r.max !== void 0 && (i.max = r.max - t.min),
      i
    );
  }
  const ic = 0.35;
  function Z3(t = ic) {
    return (
      t === !1 ? (t = 0) : t === !0 && (t = ic),
      { x: Gh(t, "left", "right"), y: Gh(t, "top", "bottom") }
    );
  }
  function Gh(t, r, i) {
    return { min: qh(t, r), max: qh(t, i) };
  }
  function qh(t, r) {
    return typeof t == "number" ? t : t[r] || 0;
  }
  const K3 = new WeakMap();
  class G3 {
    constructor(r) {
      (this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Qe()),
        (this.visualElement = r);
    }
    start(r, { snapToCursor: i = !1 } = {}) {
      const { presenceContext: o } = this.visualElement;
      if (o && o.isPresent === !1) return;
      const l = (y) => {
          const { dragSnapToOrigin: v } = this.getProps();
          v ? this.pauseAnimation() : this.stopAnimation(),
            i && this.snapToCursor(Rs(y).point);
        },
        f = (y, v) => {
          const {
            drag: w,
            dragPropagation: k,
            onDragStart: S,
          } = this.getProps();
          if (
            w &&
            !k &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = Uw(w)),
            !this.openDragLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Qt((P) => {
              let b = this.getAxisMotionValue(P).get() || 0;
              if (an.test(b)) {
                const { projection: I } = this.visualElement;
                if (I && I.layout) {
                  const V = I.layout.layoutBox[P];
                  V && (b = gt(V) * (parseFloat(b) / 100));
                }
              }
              this.originPoint[P] = b;
            }),
            S && Oe.postRender(() => S(y, v)),
            Ku(this.visualElement, "transform");
          const { animationState: T } = this.visualElement;
          T && T.setActive("whileDrag", !0);
        },
        c = (y, v) => {
          const {
            dragPropagation: w,
            dragDirectionLock: k,
            onDirectionLock: S,
            onDrag: T,
          } = this.getProps();
          if (!w && !this.openDragLock) return;
          const { offset: P } = v;
          if (k && this.currentDirection === null) {
            (this.currentDirection = q3(P)),
              this.currentDirection !== null && S && S(this.currentDirection);
            return;
          }
          this.updateAxis("x", v.point, P),
            this.updateAxis("y", v.point, P),
            this.visualElement.render(),
            T && T(y, v);
        },
        p = (y, v) => this.stop(y, v),
        h = () =>
          Qt((y) => {
            var v;
            return (
              this.getAnimationState(y) === "paused" &&
              ((v = this.getAxisMotionValue(y).animation) === null ||
              v === void 0
                ? void 0
                : v.play())
            );
          }),
        { dragSnapToOrigin: m } = this.getProps();
      this.panSession = new O2(
        r,
        {
          onSessionStart: l,
          onStart: f,
          onMove: c,
          onSessionEnd: p,
          resumeAnimation: h,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: m,
        }
      );
    }
    stop(r, i) {
      const o = this.isDragging;
      if ((this.cancel(), !o)) return;
      const { velocity: l } = i;
      this.startAnimation(l);
      const { onDragEnd: f } = this.getProps();
      f && Oe.postRender(() => f(r, i));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: r, animationState: i } = this.visualElement;
      r && (r.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      const { dragPropagation: o } = this.getProps();
      !o &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        i && i.setActive("whileDrag", !1);
    }
    updateAxis(r, i, o) {
      const { drag: l } = this.getProps();
      if (!o || !qo(r, l, this.currentDirection)) return;
      const f = this.getAxisMotionValue(r);
      let c = this.originPoint[r] + o[r];
      this.constraints &&
        this.constraints[r] &&
        (c = z3(c, this.constraints[r], this.elastic[r])),
        f.set(c);
    }
    resolveConstraints() {
      var r;
      const { dragConstraints: i, dragElastic: o } = this.getProps(),
        l =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (r = this.visualElement.projection) === null || r === void 0
            ? void 0
            : r.layout,
        f = this.constraints;
      i && ni(i)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : i && l
        ? (this.constraints = Q3(l.layoutBox, i))
        : (this.constraints = !1),
        (this.elastic = Z3(o)),
        f !== this.constraints &&
          l &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Qt((c) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(c) &&
              (this.constraints[c] = W3(l.layoutBox[c], this.constraints[c]));
          });
    }
    resolveRefConstraints() {
      const { dragConstraints: r, onMeasureDragConstraints: i } =
        this.getProps();
      if (!r || !ni(r)) return !1;
      const o = r.current,
        { projection: l } = this.visualElement;
      if (!l || !l.layout) return !1;
      const f = I3(o, l.root, this.visualElement.getTransformPagePoint());
      let c = H3(l.layout.layoutBox, f);
      if (i) {
        const p = i(j3(c));
        (this.hasMutatedConstraints = !!p), p && (c = E2(p));
      }
      return c;
    }
    startAnimation(r) {
      const {
          drag: i,
          dragMomentum: o,
          dragElastic: l,
          dragTransition: f,
          dragSnapToOrigin: c,
          onDragTransitionEnd: p,
        } = this.getProps(),
        h = this.constraints || {},
        m = Qt((y) => {
          if (!qo(y, i, this.currentDirection)) return;
          let v = (h && h[y]) || {};
          c && (v = { min: 0, max: 0 });
          const w = l ? 200 : 1e6,
            k = l ? 40 : 1e7,
            S = {
              type: "inertia",
              velocity: o ? r[y] : 0,
              bounceStiffness: w,
              bounceDamping: k,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...f,
              ...v,
            };
          return this.startAxisValueAnimation(y, S);
        });
      return Promise.all(m).then(p);
    }
    startAxisValueAnimation(r, i) {
      const o = this.getAxisMotionValue(r);
      return (
        Ku(this.visualElement, r),
        o.start(ef(r, o, 0, i, this.visualElement, !1))
      );
    }
    stopAnimation() {
      Qt((r) => this.getAxisMotionValue(r).stop());
    }
    pauseAnimation() {
      Qt((r) => {
        var i;
        return (i = this.getAxisMotionValue(r).animation) === null ||
          i === void 0
          ? void 0
          : i.pause();
      });
    }
    getAnimationState(r) {
      var i;
      return (i = this.getAxisMotionValue(r).animation) === null || i === void 0
        ? void 0
        : i.state;
    }
    getAxisMotionValue(r) {
      const i = `_drag${r.toUpperCase()}`,
        o = this.visualElement.getProps(),
        l = o[i];
      return (
        l ||
        this.visualElement.getValue(r, (o.initial ? o.initial[r] : void 0) || 0)
      );
    }
    snapToCursor(r) {
      Qt((i) => {
        const { drag: o } = this.getProps();
        if (!qo(i, o, this.currentDirection)) return;
        const { projection: l } = this.visualElement,
          f = this.getAxisMotionValue(i);
        if (l && l.layout) {
          const { min: c, max: p } = l.layout.layoutBox[i];
          f.set(r[i] - Ie(c, p, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: r, dragConstraints: i } = this.getProps(),
        { projection: o } = this.visualElement;
      if (!ni(i) || !o || !this.constraints) return;
      this.stopAnimation();
      const l = { x: 0, y: 0 };
      Qt((c) => {
        const p = this.getAxisMotionValue(c);
        if (p && this.constraints !== !1) {
          const h = p.get();
          l[c] = $3({ min: h, max: h }, this.constraints[c]);
        }
      });
      const { transformTemplate: f } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = f ? f({}, "") : "none"),
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.resolveConstraints(),
        Qt((c) => {
          if (!qo(c, r, null)) return;
          const p = this.getAxisMotionValue(c),
            { min: h, max: m } = this.constraints[c];
          p.set(Ie(h, m, l[c]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      K3.set(this.visualElement, this);
      const r = this.visualElement.current,
        i = ii(r, "pointerdown", (h) => {
          const { drag: m, dragListener: y = !0 } = this.getProps();
          m && y && this.start(h);
        }),
        o = () => {
          const { dragConstraints: h } = this.getProps();
          ni(h) &&
            h.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: l } = this.visualElement,
        f = l.addEventListener("measure", o);
      l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()),
        Oe.read(o);
      const c = xs(window, "resize", () =>
          this.scalePositionWithinConstraints()
        ),
        p = l.addEventListener(
          "didUpdate",
          ({ delta: h, hasLayoutChanged: m }) => {
            this.isDragging &&
              m &&
              (Qt((y) => {
                const v = this.getAxisMotionValue(y);
                v &&
                  ((this.originPoint[y] += h[y].translate),
                  v.set(v.get() + h[y].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        c(), i(), f(), p && p();
      };
    }
    getProps() {
      const r = this.visualElement.getProps(),
        {
          drag: i = !1,
          dragDirectionLock: o = !1,
          dragPropagation: l = !1,
          dragConstraints: f = !1,
          dragElastic: c = ic,
          dragMomentum: p = !0,
        } = r;
      return {
        ...r,
        drag: i,
        dragDirectionLock: o,
        dragPropagation: l,
        dragConstraints: f,
        dragElastic: c,
        dragMomentum: p,
      };
    }
  }
  function qo(t, r, i) {
    return (r === !0 || r === t) && (i === null || i === t);
  }
  function q3(t, r = 10) {
    let i = null;
    return Math.abs(t.y) > r ? (i = "y") : Math.abs(t.x) > r && (i = "x"), i;
  }
  class Y3 extends Xn {
    constructor(r) {
      super(r),
        (this.removeGroupControls = Lt),
        (this.removeListeners = Lt),
        (this.controls = new G3(r));
    }
    mount() {
      const { dragControls: r } = this.node.getProps();
      r && (this.removeGroupControls = r.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || Lt);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }
  const Yh = (t) => (r, i) => {
    t && Oe.postRender(() => t(r, i));
  };
  class X3 extends Xn {
    constructor() {
      super(...arguments), (this.removePointerDownListener = Lt);
    }
    onPointerDown(r) {
      this.session = new O2(r, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
      });
    }
    createPanHandlers() {
      const {
        onPanSessionStart: r,
        onPanStart: i,
        onPan: o,
        onPanEnd: l,
      } = this.node.getProps();
      return {
        onSessionStart: Yh(r),
        onStart: Yh(i),
        onMove: o,
        onEnd: (f, c) => {
          delete this.session, l && Oe.postRender(() => l(f, c));
        },
      };
    }
    mount() {
      this.removePointerDownListener = ii(
        this.node.current,
        "pointerdown",
        (r) => this.onPointerDown(r)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  const ta = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
  function Xh(t, r) {
    return r.max === r.min ? 0 : (t / (r.max - r.min)) * 100;
  }
  const rs = {
      correct: (t, r) => {
        if (!r.target) return t;
        if (typeof t == "string")
          if (ae.test(t)) t = parseFloat(t);
          else return t;
        const i = Xh(t, r.target.x),
          o = Xh(t, r.target.y);
        return `${i}% ${o}%`;
      },
    },
    J3 = {
      correct: (t, { treeScale: r, projectionDelta: i }) => {
        const o = t,
          l = qn.parse(t);
        if (l.length > 5) return o;
        const f = qn.createTransformer(t),
          c = typeof l[0] != "number" ? 1 : 0,
          p = i.x.scale * r.x,
          h = i.y.scale * r.y;
        (l[0 + c] /= p), (l[1 + c] /= h);
        const m = Ie(p, h, 0.5);
        return (
          typeof l[2 + c] == "number" && (l[2 + c] /= m),
          typeof l[3 + c] == "number" && (l[3 + c] /= m),
          f(l)
        );
      },
    };
  class eC extends H.Component {
    componentDidMount() {
      const {
          visualElement: r,
          layoutGroup: i,
          switchLayoutGroup: o,
          layoutId: l,
        } = this.props,
        { projection: f } = r;
      iw(tC),
        f &&
          (i.group && i.group.add(f),
          o && o.register && l && o.register(f),
          f.root.didUpdate(),
          f.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          f.setOptions({
            ...f.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (ta.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(r) {
      const {
          layoutDependency: i,
          visualElement: o,
          drag: l,
          isPresent: f,
        } = this.props,
        c = o.projection;
      return (
        c &&
          ((c.isPresent = f),
          l || r.layoutDependency !== i || i === void 0 || r.isPresent !== f
            ? c.willUpdate()
            : this.safeToRemove(),
          r.isPresent !== f &&
            (f
              ? c.promote()
              : c.relegate() ||
                Oe.postRender(() => {
                  const p = c.getStack();
                  (!p || !p.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      const { projection: r } = this.props.visualElement;
      r &&
        (r.root.didUpdate(),
        Rc.postRender(() => {
          !r.currentAnimation && r.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      const {
          visualElement: r,
          layoutGroup: i,
          switchLayoutGroup: o,
        } = this.props,
        { projection: l } = r;
      l &&
        (l.scheduleCheckAfterUnmount(),
        i && i.group && i.group.remove(l),
        o && o.deregister && o.deregister(l));
    }
    safeToRemove() {
      const { safeToRemove: r } = this.props;
      r && r();
    }
    render() {
      return null;
    }
  }
  function L2(t) {
    const [r, i] = bv(),
      o = H.useContext(mm);
    return R.jsx(eC, {
      ...t,
      layoutGroup: o,
      switchLayoutGroup: H.useContext(Sm),
      isPresent: r,
      safeToRemove: i,
    });
  }
  const tC = {
    borderRadius: {
      ...rs,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: rs,
    borderTopRightRadius: rs,
    borderBottomLeftRadius: rs,
    borderBottomRightRadius: rs,
    boxShadow: J3,
  };
  function nC(t, r, i) {
    const o = dt(t) ? t : vs(t);
    return o.start(ef("", o, r, i)), o.animation;
  }
  function rC(t) {
    return t instanceof SVGElement && t.tagName !== "svg";
  }
  const iC = (t, r) => t.depth - r.depth;
  class sC {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(r) {
      Qc(this.children, r), (this.isDirty = !0);
    }
    remove(r) {
      Hc(this.children, r), (this.isDirty = !0);
    }
    forEach(r) {
      this.isDirty && this.children.sort(iC),
        (this.isDirty = !1),
        this.children.forEach(r);
    }
  }
  function oC(t, r) {
    const i = ln.now(),
      o = ({ timestamp: l }) => {
        const f = l - i;
        f >= r && (Gn(o), t(f - r));
      };
    return Oe.read(o, !0), () => Gn(o);
  }
  const D2 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    aC = D2.length,
    Jh = (t) => (typeof t == "string" ? parseFloat(t) : t),
    e0 = (t) => typeof t == "number" || ae.test(t);
  function lC(t, r, i, o, l, f) {
    l
      ? ((t.opacity = Ie(0, i.opacity !== void 0 ? i.opacity : 1, uC(o))),
        (t.opacityExit = Ie(r.opacity !== void 0 ? r.opacity : 1, 0, cC(o))))
      : f &&
        (t.opacity = Ie(
          r.opacity !== void 0 ? r.opacity : 1,
          i.opacity !== void 0 ? i.opacity : 1,
          o
        ));
    for (let c = 0; c < aC; c++) {
      const p = `border${D2[c]}Radius`;
      let h = t0(r, p),
        m = t0(i, p);
      if (h === void 0 && m === void 0) continue;
      h || (h = 0),
        m || (m = 0),
        h === 0 || m === 0 || e0(h) === e0(m)
          ? ((t[p] = Math.max(Ie(Jh(h), Jh(m), o), 0)),
            (an.test(m) || an.test(h)) && (t[p] += "%"))
          : (t[p] = m);
    }
    (r.rotate || i.rotate) && (t.rotate = Ie(r.rotate || 0, i.rotate || 0, o));
  }
  function t0(t, r) {
    return t[r] !== void 0 ? t[r] : t.borderRadius;
  }
  const uC = N2(0, 0.5, Xm),
    cC = N2(0.5, 0.95, Lt);
  function N2(t, r, i) {
    return (o) => (o < t ? 0 : o > r ? 1 : i(li(t, r, o)));
  }
  function n0(t, r) {
    (t.min = r.min), (t.max = r.max);
  }
  function Ut(t, r) {
    n0(t.x, r.x), n0(t.y, r.y);
  }
  function r0(t, r) {
    (t.translate = r.translate),
      (t.scale = r.scale),
      (t.originPoint = r.originPoint),
      (t.origin = r.origin);
  }
  function i0(t, r, i, o, l) {
    return (
      (t -= r), (t = ca(t, 1 / i, o)), l !== void 0 && (t = ca(t, 1 / l, o)), t
    );
  }
  function fC(t, r = 0, i = 1, o = 0.5, l, f = t, c = t) {
    if (
      (an.test(r) &&
        ((r = parseFloat(r)), (r = Ie(c.min, c.max, r / 100) - c.min)),
      typeof r != "number")
    )
      return;
    let p = Ie(f.min, f.max, o);
    t === f && (p -= r),
      (t.min = i0(t.min, r, i, p, l)),
      (t.max = i0(t.max, r, i, p, l));
  }
  function s0(t, r, [i, o, l], f, c) {
    fC(t, r[i], r[o], r[l], r.scale, f, c);
  }
  const dC = ["x", "scaleX", "originX"],
    pC = ["y", "scaleY", "originY"];
  function o0(t, r, i, o) {
    s0(t.x, r, dC, i ? i.x : void 0, o ? o.x : void 0),
      s0(t.y, r, pC, i ? i.y : void 0, o ? o.y : void 0);
  }
  function a0(t) {
    return t.translate === 0 && t.scale === 1;
  }
  function b2(t) {
    return a0(t.x) && a0(t.y);
  }
  function l0(t, r) {
    return t.min === r.min && t.max === r.max;
  }
  function hC(t, r) {
    return l0(t.x, r.x) && l0(t.y, r.y);
  }
  function u0(t, r) {
    return (
      Math.round(t.min) === Math.round(r.min) &&
      Math.round(t.max) === Math.round(r.max)
    );
  }
  function F2(t, r) {
    return u0(t.x, r.x) && u0(t.y, r.y);
  }
  function c0(t) {
    return gt(t.x) / gt(t.y);
  }
  function f0(t, r) {
    return (
      t.translate === r.translate &&
      t.scale === r.scale &&
      t.originPoint === r.originPoint
    );
  }
  class mC {
    constructor() {
      this.members = [];
    }
    add(r) {
      Qc(this.members, r), r.scheduleRender();
    }
    remove(r) {
      if (
        (Hc(this.members, r),
        r === this.prevLead && (this.prevLead = void 0),
        r === this.lead)
      ) {
        const i = this.members[this.members.length - 1];
        i && this.promote(i);
      }
    }
    relegate(r) {
      const i = this.members.findIndex((l) => r === l);
      if (i === 0) return !1;
      let o;
      for (let l = i; l >= 0; l--) {
        const f = this.members[l];
        if (f.isPresent !== !1) {
          o = f;
          break;
        }
      }
      return o ? (this.promote(o), !0) : !1;
    }
    promote(r, i) {
      const o = this.lead;
      if (r !== o && ((this.prevLead = o), (this.lead = r), r.show(), o)) {
        o.instance && o.scheduleRender(),
          r.scheduleRender(),
          (r.resumeFrom = o),
          i && (r.resumeFrom.preserveOpacity = !0),
          o.snapshot &&
            ((r.snapshot = o.snapshot),
            (r.snapshot.latestValues = o.animationValues || o.latestValues)),
          r.root && r.root.isUpdating && (r.isLayoutDirty = !0);
        const { crossfade: l } = r.options;
        l === !1 && o.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((r) => {
        const { options: i, resumingFrom: o } = r;
        i.onExitComplete && i.onExitComplete(),
          o && o.options.onExitComplete && o.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((r) => {
        r.instance && r.scheduleRender(!1);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  function gC(t, r, i) {
    let o = "";
    const l = t.x.translate / r.x,
      f = t.y.translate / r.y,
      c = (i == null ? void 0 : i.z) || 0;
    if (
      ((l || f || c) && (o = `translate3d(${l}px, ${f}px, ${c}px) `),
      (r.x !== 1 || r.y !== 1) && (o += `scale(${1 / r.x}, ${1 / r.y}) `),
      i)
    ) {
      const {
        transformPerspective: m,
        rotate: y,
        rotateX: v,
        rotateY: w,
        skewX: k,
        skewY: S,
      } = i;
      m && (o = `perspective(${m}px) ${o}`),
        y && (o += `rotate(${y}deg) `),
        v && (o += `rotateX(${v}deg) `),
        w && (o += `rotateY(${w}deg) `),
        k && (o += `skewX(${k}deg) `),
        S && (o += `skewY(${S}deg) `);
    }
    const p = t.x.scale * r.x,
      h = t.y.scale * r.y;
    return (p !== 1 || h !== 1) && (o += `scale(${p}, ${h})`), o || "none";
  }
  const Mu = ["", "X", "Y", "Z"],
    yC = { visibility: "hidden" },
    d0 = 1e3;
  let vC = 0;
  function Lu(t, r, i, o) {
    const { latestValues: l } = r;
    l[t] && ((i[t] = l[t]), r.setStaticValue(t, 0), o && (o[t] = 0));
  }
  function B2(t) {
    if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
    const { visualElement: r } = t.options;
    if (!r) return;
    const i = $m(r);
    if (window.MotionHasOptimisedAnimation(i, "transform")) {
      const { layout: l, layoutId: f } = t.options;
      window.MotionCancelOptimisedAnimation(i, "transform", Oe, !(l || f));
    }
    const { parent: o } = t;
    o && !o.hasCheckedOptimisedAppear && B2(o);
  }
  function I2({
    attachResizeListener: t,
    defaultParent: r,
    measureScroll: i,
    checkIsScrollRoot: o,
    resetTransform: l,
  }) {
    return class {
      constructor(c = {}, p = r == null ? void 0 : r()) {
        (this.id = vC++),
          (this.animationId = 0),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.isProjectionDirty = !1),
          (this.isSharedProjectionDirty = !1),
          (this.isTransformDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.hasCheckedOptimisedAppear = !1),
          (this.treeScale = { x: 1, y: 1 }),
          (this.eventHandlers = new Map()),
          (this.hasTreeAnimated = !1),
          (this.updateScheduled = !1),
          (this.scheduleUpdate = () => this.update()),
          (this.projectionUpdateScheduled = !1),
          (this.checkUpdateFailed = () => {
            this.isUpdating &&
              ((this.isUpdating = !1), this.clearAllSnapshots());
          }),
          (this.updateProjection = () => {
            (this.projectionUpdateScheduled = !1),
              this.nodes.forEach(CC),
              this.nodes.forEach(PC),
              this.nodes.forEach(kC),
              this.nodes.forEach(AC);
          }),
          (this.resolvedRelativeTargetAt = 0),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.latestValues = c),
          (this.root = p ? p.root || p : this),
          (this.path = p ? [...p.path, p] : []),
          (this.parent = p),
          (this.depth = p ? p.depth + 1 : 0);
        for (let h = 0; h < this.path.length; h++)
          this.path[h].shouldResetTransform = !0;
        this.root === this && (this.nodes = new sC());
      }
      addEventListener(c, p) {
        return (
          this.eventHandlers.has(c) || this.eventHandlers.set(c, new $c()),
          this.eventHandlers.get(c).add(p)
        );
      }
      notifyListeners(c, ...p) {
        const h = this.eventHandlers.get(c);
        h && h.notify(...p);
      }
      hasListeners(c) {
        return this.eventHandlers.has(c);
      }
      mount(c, p = this.root.hasTreeAnimated) {
        if (this.instance) return;
        (this.isSVG = rC(c)), (this.instance = c);
        const { layoutId: h, layout: m, visualElement: y } = this.options;
        if (
          (y && !y.current && y.mount(c),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          p && (m || h) && (this.isLayoutDirty = !0),
          t)
        ) {
          let v;
          const w = () => (this.root.updateBlockedByResize = !1);
          t(c, () => {
            (this.root.updateBlockedByResize = !0),
              v && v(),
              (v = oC(w, 250)),
              ta.hasAnimatedSinceResize &&
                ((ta.hasAnimatedSinceResize = !1), this.nodes.forEach(h0));
          });
        }
        h && this.root.registerSharedNode(h, this),
          this.options.animate !== !1 &&
            y &&
            (h || m) &&
            this.addEventListener(
              "didUpdate",
              ({
                delta: v,
                hasLayoutChanged: w,
                hasRelativeLayoutChanged: k,
                layout: S,
              }) => {
                if (this.isTreeAnimationBlocked()) {
                  (this.target = void 0), (this.relativeTarget = void 0);
                  return;
                }
                const T =
                    this.options.transition || y.getDefaultTransition() || LC,
                  { onLayoutAnimationStart: P, onLayoutAnimationComplete: b } =
                    y.getProps(),
                  I = !this.targetLayout || !F2(this.targetLayout, S),
                  V = !w && k;
                if (
                  this.options.layoutRoot ||
                  this.resumeFrom ||
                  V ||
                  (w && (I || !this.currentAnimation))
                ) {
                  this.resumeFrom &&
                    ((this.resumingFrom = this.resumeFrom),
                    (this.resumingFrom.resumingFrom = void 0)),
                    this.setAnimationOrigin(v, V);
                  const J = { ...Vc(T, "layout"), onPlay: P, onComplete: b };
                  (y.shouldReduceMotion || this.options.layoutRoot) &&
                    ((J.delay = 0), (J.type = !1)),
                    this.startAnimation(J);
                } else
                  w || h0(this),
                    this.isLead() &&
                      this.options.onExitComplete &&
                      this.options.onExitComplete();
                this.targetLayout = S;
              }
            );
      }
      unmount() {
        this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this);
        const c = this.getStack();
        c && c.remove(this),
          this.parent && this.parent.children.delete(this),
          (this.instance = void 0),
          Gn(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return (
          this.isAnimationBlocked ||
          (this.parent && this.parent.isTreeAnimationBlocked()) ||
          !1
        );
      }
      startUpdate() {
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(RC),
          this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: c } = this.options;
        return c && c.getProps().transformTemplate;
      }
      willUpdate(c = !0) {
        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (
          (window.MotionCancelOptimisedAnimation &&
            !this.hasCheckedOptimisedAppear &&
            B2(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
        )
          return;
        this.isLayoutDirty = !0;
        for (let y = 0; y < this.path.length; y++) {
          const v = this.path[y];
          (v.shouldResetTransform = !0),
            v.updateScroll("snapshot"),
            v.options.layoutRoot && v.willUpdate(!1);
        }
        const { layoutId: p, layout: h } = this.options;
        if (p === void 0 && !h) return;
        const m = this.getTransformTemplate();
        (this.prevTransformTemplateValue = m
          ? m(this.latestValues, "")
          : void 0),
          this.updateSnapshot(),
          c && this.notifyListeners("willUpdate");
      }
      update() {
        if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
          this.unblockUpdate(),
            this.clearAllSnapshots(),
            this.nodes.forEach(p0);
          return;
        }
        this.isUpdating || this.nodes.forEach(EC),
          (this.isUpdating = !1),
          this.nodes.forEach(TC),
          this.nodes.forEach(wC),
          this.nodes.forEach(xC),
          this.clearAllSnapshots();
        const p = ln.now();
        (it.delta = Tn(0, 1e3 / 60, p - it.timestamp)),
          (it.timestamp = p),
          (it.isProcessing = !0),
          Su.update.process(it),
          Su.preRender.process(it),
          Su.render.process(it),
          (it.isProcessing = !1);
      }
      didUpdate() {
        this.updateScheduled ||
          ((this.updateScheduled = !0), Rc.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(SC), this.sharedNodes.forEach(jC);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled ||
          ((this.projectionUpdateScheduled = !0),
          Oe.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        Oe.postRender(() => {
          this.isLayoutDirty
            ? this.root.didUpdate()
            : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        this.snapshot ||
          !this.instance ||
          ((this.snapshot = this.measure()),
          this.snapshot &&
            !gt(this.snapshot.measuredBox.x) &&
            !gt(this.snapshot.measuredBox.y) &&
            (this.snapshot = void 0));
      }
      updateLayout() {
        if (
          !this.instance ||
          (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
            !this.isLayoutDirty)
        )
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let h = 0; h < this.path.length; h++)
            this.path[h].updateScroll();
        const c = this.layout;
        (this.layout = this.measure(!1)),
          (this.layoutCorrected = Qe()),
          (this.isLayoutDirty = !1),
          (this.projectionDelta = void 0),
          this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: p } = this.options;
        p &&
          p.notify(
            "LayoutMeasure",
            this.layout.layoutBox,
            c ? c.layoutBox : void 0
          );
      }
      updateScroll(c = "measure") {
        let p = !!(this.options.layoutScroll && this.instance);
        if (
          (this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === c &&
            (p = !1),
          p)
        ) {
          const h = o(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: c,
            isRoot: h,
            offset: i(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : h,
          };
        }
      }
      resetTransform() {
        if (!l) return;
        const c =
            this.isLayoutDirty ||
            this.shouldResetTransform ||
            this.options.alwaysMeasureLayout,
          p = this.projectionDelta && !b2(this.projectionDelta),
          h = this.getTransformTemplate(),
          m = h ? h(this.latestValues, "") : void 0,
          y = m !== this.prevTransformTemplateValue;
        c &&
          (p || vr(this.latestValues) || y) &&
          (l(this.instance, m),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure(c = !0) {
        const p = this.measurePageBox();
        let h = this.removeElementScroll(p);
        return (
          c && (h = this.removeTransform(h)),
          DC(h),
          {
            animationId: this.root.animationId,
            measuredBox: p,
            layoutBox: h,
            latestValues: {},
            source: this.id,
          }
        );
      }
      measurePageBox() {
        var c;
        const { visualElement: p } = this.options;
        if (!p) return Qe();
        const h = p.measureViewportBox();
        if (
          !(
            ((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) ||
            this.path.some(NC)
          )
        ) {
          const { scroll: y } = this.root;
          y && (oi(h.x, y.offset.x), oi(h.y, y.offset.y));
        }
        return h;
      }
      removeElementScroll(c) {
        var p;
        const h = Qe();
        if (
          (Ut(h, c), !((p = this.scroll) === null || p === void 0) && p.wasRoot)
        )
          return h;
        for (let m = 0; m < this.path.length; m++) {
          const y = this.path[m],
            { scroll: v, options: w } = y;
          y !== this.root &&
            v &&
            w.layoutScroll &&
            (v.wasRoot && Ut(h, c), oi(h.x, v.offset.x), oi(h.y, v.offset.y));
        }
        return h;
      }
      applyTransform(c, p = !1) {
        const h = Qe();
        Ut(h, c);
        for (let m = 0; m < this.path.length; m++) {
          const y = this.path[m];
          !p &&
            y.options.layoutScroll &&
            y.scroll &&
            y !== y.root &&
            ai(h, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
            vr(y.latestValues) && ai(h, y.latestValues);
        }
        return vr(this.latestValues) && ai(h, this.latestValues), h;
      }
      removeTransform(c) {
        const p = Qe();
        Ut(p, c);
        for (let h = 0; h < this.path.length; h++) {
          const m = this.path[h];
          if (!m.instance || !vr(m.latestValues)) continue;
          nc(m.latestValues) && m.updateSnapshot();
          const y = Qe(),
            v = m.measurePageBox();
          Ut(y, v),
            o0(
              p,
              m.latestValues,
              m.snapshot ? m.snapshot.layoutBox : void 0,
              y
            );
        }
        return vr(this.latestValues) && o0(p, this.latestValues), p;
      }
      setTargetDelta(c) {
        (this.targetDelta = c),
          this.root.scheduleUpdateProjection(),
          (this.isProjectionDirty = !0);
      }
      setOptions(c) {
        this.options = {
          ...this.options,
          ...c,
          crossfade: c.crossfade !== void 0 ? c.crossfade : !0,
        };
      }
      clearMeasurements() {
        (this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1);
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent &&
          this.relativeParent.resolvedRelativeTargetAt !== it.timestamp &&
          this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(c = !1) {
        var p;
        const h = this.getLead();
        this.isProjectionDirty ||
          (this.isProjectionDirty = h.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
          this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
        const m = !!this.resumingFrom || this !== h;
        if (
          !(
            c ||
            (m && this.isSharedProjectionDirty) ||
            this.isProjectionDirty ||
            (!((p = this.parent) === null || p === void 0) &&
              p.isProjectionDirty) ||
            this.attemptToResolveRelativeTarget ||
            this.root.updateBlockedByResize
          )
        )
          return;
        const { layout: v, layoutId: w } = this.options;
        if (!(!this.layout || !(v || w))) {
          if (
            ((this.resolvedRelativeTargetAt = it.timestamp),
            !this.targetDelta && !this.relativeTarget)
          ) {
            const k = this.getClosestProjectingParent();
            k && k.layout && this.animationProgress !== 1
              ? ((this.relativeParent = k),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Qe()),
                (this.relativeTargetOrigin = Qe()),
                fs(
                  this.relativeTargetOrigin,
                  this.layout.layoutBox,
                  k.layout.layoutBox
                ),
                Ut(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          if (
            !(!this.relativeTarget && !this.targetDelta) &&
            (this.target ||
              ((this.target = Qe()), (this.targetWithTransforms = Qe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                F3(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ut(this.target, this.layout.layoutBox),
                R2(this.target, this.targetDelta))
              : Ut(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const k = this.getClosestProjectingParent();
            k &&
            !!k.resumingFrom == !!this.resumingFrom &&
            !k.options.layoutScroll &&
            k.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = k),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Qe()),
                (this.relativeTargetOrigin = Qe()),
                fs(this.relativeTargetOrigin, this.target, k.target),
                Ut(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
        }
      }
      getClosestProjectingParent() {
        if (
          !(
            !this.parent ||
            nc(this.parent.latestValues) ||
            k2(this.parent.latestValues)
          )
        )
          return this.parent.isProjecting()
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!(
          (this.relativeTarget ||
            this.targetDelta ||
            this.options.layoutRoot) &&
          this.layout
        );
      }
      calcProjection() {
        var c;
        const p = this.getLead(),
          h = !!this.resumingFrom || this !== p;
        let m = !0;
        if (
          ((this.isProjectionDirty ||
            (!((c = this.parent) === null || c === void 0) &&
              c.isProjectionDirty)) &&
            (m = !1),
          h &&
            (this.isSharedProjectionDirty || this.isTransformDirty) &&
            (m = !1),
          this.resolvedRelativeTargetAt === it.timestamp && (m = !1),
          m)
        )
          return;
        const { layout: y, layoutId: v } = this.options;
        if (
          ((this.isTreeAnimating = !!(
            (this.parent && this.parent.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(y || v))
        )
          return;
        Ut(this.layoutCorrected, this.layout.layoutBox);
        const w = this.treeScale.x,
          k = this.treeScale.y;
        B3(this.layoutCorrected, this.treeScale, this.path, h),
          p.layout &&
            !p.target &&
            (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
            ((p.target = p.layout.layoutBox), (p.targetWithTransforms = Qe()));
        const { target: S } = p;
        if (!S) {
          this.prevProjectionDelta &&
            (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        !this.projectionDelta || !this.prevProjectionDelta
          ? this.createProjectionDeltas()
          : (r0(this.prevProjectionDelta.x, this.projectionDelta.x),
            r0(this.prevProjectionDelta.y, this.projectionDelta.y)),
          cs(this.projectionDelta, this.layoutCorrected, S, this.latestValues),
          (this.treeScale.x !== w ||
            this.treeScale.y !== k ||
            !f0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
            !f0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
            ((this.hasProjected = !0),
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", S));
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender(c = !0) {
        var p;
        if (
          ((p = this.options.visualElement) === null ||
            p === void 0 ||
            p.scheduleRender(),
          c)
        ) {
          const h = this.getStack();
          h && h.scheduleRender();
        }
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        (this.prevProjectionDelta = si()),
          (this.projectionDelta = si()),
          (this.projectionDeltaWithTransform = si());
      }
      setAnimationOrigin(c, p = !1) {
        const h = this.snapshot,
          m = h ? h.latestValues : {},
          y = { ...this.latestValues },
          v = si();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !p);
        const w = Qe(),
          k = h ? h.source : void 0,
          S = this.layout ? this.layout.source : void 0,
          T = k !== S,
          P = this.getStack(),
          b = !P || P.members.length <= 1,
          I = !!(
            T &&
            !b &&
            this.options.crossfade === !0 &&
            !this.path.some(MC)
          );
        this.animationProgress = 0;
        let V;
        (this.mixTargetDelta = (J) => {
          const M = J / 1e3;
          m0(v.x, c.x, M),
            m0(v.y, c.y, M),
            this.setTargetDelta(v),
            this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.layout &&
              this.relativeParent &&
              this.relativeParent.layout &&
              (fs(
                w,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox
              ),
              OC(this.relativeTarget, this.relativeTargetOrigin, w, M),
              V && hC(this.relativeTarget, V) && (this.isProjectionDirty = !1),
              V || (V = Qe()),
              Ut(V, this.relativeTarget)),
            T &&
              ((this.animationValues = y),
              lC(y, m, this.latestValues, M, I, b)),
            this.root.scheduleUpdateProjection(),
            this.scheduleRender(),
            (this.animationProgress = M);
        }),
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(c) {
        this.notifyListeners("animationStart"),
          this.currentAnimation && this.currentAnimation.stop(),
          this.resumingFrom &&
            this.resumingFrom.currentAnimation &&
            this.resumingFrom.currentAnimation.stop(),
          this.pendingAnimation &&
            (Gn(this.pendingAnimation), (this.pendingAnimation = void 0)),
          (this.pendingAnimation = Oe.update(() => {
            (ta.hasAnimatedSinceResize = !0),
              (this.currentAnimation = nC(0, d0, {
                ...c,
                onUpdate: (p) => {
                  this.mixTargetDelta(p), c.onUpdate && c.onUpdate(p);
                },
                onStop: () => {},
                onComplete: () => {
                  c.onComplete && c.onComplete(), this.completeAnimation();
                },
              })),
              this.resumingFrom &&
                (this.resumingFrom.currentAnimation = this.currentAnimation),
              (this.pendingAnimation = void 0);
          }));
      }
      completeAnimation() {
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
        const c = this.getStack();
        c && c.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation &&
          (this.mixTargetDelta && this.mixTargetDelta(d0),
          this.currentAnimation.stop()),
          this.completeAnimation();
      }
      applyTransformsToTarget() {
        const c = this.getLead();
        let {
          targetWithTransforms: p,
          target: h,
          layout: m,
          latestValues: y,
        } = c;
        if (!(!p || !h || !m)) {
          if (
            this !== c &&
            this.layout &&
            m &&
            V2(this.options.animationType, this.layout.layoutBox, m.layoutBox)
          ) {
            h = this.target || Qe();
            const v = gt(this.layout.layoutBox.x);
            (h.x.min = c.target.x.min), (h.x.max = h.x.min + v);
            const w = gt(this.layout.layoutBox.y);
            (h.y.min = c.target.y.min), (h.y.max = h.y.min + w);
          }
          Ut(p, h),
            ai(p, y),
            cs(this.projectionDeltaWithTransform, this.layoutCorrected, p, y);
        }
      }
      registerSharedNode(c, p) {
        this.sharedNodes.has(c) || this.sharedNodes.set(c, new mC()),
          this.sharedNodes.get(c).add(p);
        const m = p.options.initialPromotionConfig;
        p.promote({
          transition: m ? m.transition : void 0,
          preserveFollowOpacity:
            m && m.shouldPreserveFollowOpacity
              ? m.shouldPreserveFollowOpacity(p)
              : void 0,
        });
      }
      isLead() {
        const c = this.getStack();
        return c ? c.lead === this : !0;
      }
      getLead() {
        var c;
        const { layoutId: p } = this.options;
        return p
          ? ((c = this.getStack()) === null || c === void 0
              ? void 0
              : c.lead) || this
          : this;
      }
      getPrevLead() {
        var c;
        const { layoutId: p } = this.options;
        return p
          ? (c = this.getStack()) === null || c === void 0
            ? void 0
            : c.prevLead
          : void 0;
      }
      getStack() {
        const { layoutId: c } = this.options;
        if (c) return this.root.sharedNodes.get(c);
      }
      promote({ needsReset: c, transition: p, preserveFollowOpacity: h } = {}) {
        const m = this.getStack();
        m && m.promote(this, h),
          c && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          p && this.setOptions({ transition: p });
      }
      relegate() {
        const c = this.getStack();
        return c ? c.relegate(this) : !1;
      }
      resetSkewAndRotation() {
        const { visualElement: c } = this.options;
        if (!c) return;
        let p = !1;
        const { latestValues: h } = c;
        if (
          ((h.z ||
            h.rotate ||
            h.rotateX ||
            h.rotateY ||
            h.rotateZ ||
            h.skewX ||
            h.skewY) &&
            (p = !0),
          !p)
        )
          return;
        const m = {};
        h.z && Lu("z", c, m, this.animationValues);
        for (let y = 0; y < Mu.length; y++)
          Lu(`rotate${Mu[y]}`, c, m, this.animationValues),
            Lu(`skew${Mu[y]}`, c, m, this.animationValues);
        c.render();
        for (const y in m)
          c.setStaticValue(y, m[y]),
            this.animationValues && (this.animationValues[y] = m[y]);
        c.scheduleRender();
      }
      getProjectionStyles(c) {
        var p, h;
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return yC;
        const m = { visibility: "" },
          y = this.getTransformTemplate();
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (m.opacity = ""),
            (m.pointerEvents = Jo(c == null ? void 0 : c.pointerEvents) || ""),
            (m.transform = y ? y(this.latestValues, "") : "none"),
            m
          );
        const v = this.getLead();
        if (!this.projectionDelta || !this.layout || !v.target) {
          const T = {};
          return (
            this.options.layoutId &&
              ((T.opacity =
                this.latestValues.opacity !== void 0
                  ? this.latestValues.opacity
                  : 1),
              (T.pointerEvents =
                Jo(c == null ? void 0 : c.pointerEvents) || "")),
            this.hasProjected &&
              !vr(this.latestValues) &&
              ((T.transform = y ? y({}, "") : "none"),
              (this.hasProjected = !1)),
            T
          );
        }
        const w = v.animationValues || v.latestValues;
        this.applyTransformsToTarget(),
          (m.transform = gC(
            this.projectionDeltaWithTransform,
            this.treeScale,
            w
          )),
          y && (m.transform = y(w, m.transform));
        const { x: k, y: S } = this.projectionDelta;
        (m.transformOrigin = `${k.origin * 100}% ${S.origin * 100}% 0`),
          v.animationValues
            ? (m.opacity =
                v === this
                  ? (h =
                      (p = w.opacity) !== null && p !== void 0
                        ? p
                        : this.latestValues.opacity) !== null && h !== void 0
                    ? h
                    : 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : w.opacityExit)
            : (m.opacity =
                v === this
                  ? w.opacity !== void 0
                    ? w.opacity
                    : ""
                  : w.opacityExit !== void 0
                  ? w.opacityExit
                  : 0);
        for (const T in ms) {
          if (w[T] === void 0) continue;
          const { correct: P, applyTo: b, isCSSVariable: I } = ms[T],
            V = m.transform === "none" ? w[T] : P(w[T], v);
          if (b) {
            const J = b.length;
            for (let M = 0; M < J; M++) m[b[M]] = V;
          } else
            I
              ? (this.options.visualElement.renderState.vars[T] = V)
              : (m[T] = V);
        }
        return (
          this.options.layoutId &&
            (m.pointerEvents =
              v === this
                ? Jo(c == null ? void 0 : c.pointerEvents) || ""
                : "none"),
          m
        );
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((c) => {
          var p;
          return (p = c.currentAnimation) === null || p === void 0
            ? void 0
            : p.stop();
        }),
          this.root.nodes.forEach(p0),
          this.root.sharedNodes.clear();
      }
    };
  }
  function wC(t) {
    t.updateLayout();
  }
  function xC(t) {
    var r;
    const i =
      ((r = t.resumeFrom) === null || r === void 0 ? void 0 : r.snapshot) ||
      t.snapshot;
    if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
      const { layoutBox: o, measuredBox: l } = t.layout,
        { animationType: f } = t.options,
        c = i.source !== t.layout.source;
      f === "size"
        ? Qt((v) => {
            const w = c ? i.measuredBox[v] : i.layoutBox[v],
              k = gt(w);
            (w.min = o[v].min), (w.max = w.min + k);
          })
        : V2(f, i.layoutBox, o) &&
          Qt((v) => {
            const w = c ? i.measuredBox[v] : i.layoutBox[v],
              k = gt(o[v]);
            (w.max = w.min + k),
              t.relativeTarget &&
                !t.currentAnimation &&
                ((t.isProjectionDirty = !0),
                (t.relativeTarget[v].max = t.relativeTarget[v].min + k));
          });
      const p = si();
      cs(p, o, i.layoutBox);
      const h = si();
      c ? cs(h, t.applyTransform(l, !0), i.measuredBox) : cs(h, o, i.layoutBox);
      const m = !b2(p);
      let y = !1;
      if (!t.resumeFrom) {
        const v = t.getClosestProjectingParent();
        if (v && !v.resumeFrom) {
          const { snapshot: w, layout: k } = v;
          if (w && k) {
            const S = Qe();
            fs(S, i.layoutBox, w.layoutBox);
            const T = Qe();
            fs(T, o, k.layoutBox),
              F2(S, T) || (y = !0),
              v.options.layoutRoot &&
                ((t.relativeTarget = T),
                (t.relativeTargetOrigin = S),
                (t.relativeParent = v));
          }
        }
      }
      t.notifyListeners("didUpdate", {
        layout: o,
        snapshot: i,
        delta: h,
        layoutDelta: p,
        hasLayoutChanged: m,
        hasRelativeLayoutChanged: y,
      });
    } else if (t.isLead()) {
      const { onExitComplete: o } = t.options;
      o && o();
    }
    t.options.transition = void 0;
  }
  function CC(t) {
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
  }
  function AC(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
  }
  function SC(t) {
    t.clearSnapshot();
  }
  function p0(t) {
    t.clearMeasurements();
  }
  function EC(t) {
    t.isLayoutDirty = !1;
  }
  function TC(t) {
    const { visualElement: r } = t.options;
    r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"),
      t.resetTransform();
  }
  function h0(t) {
    t.finishAnimation(),
      (t.targetDelta = t.relativeTarget = t.target = void 0),
      (t.isProjectionDirty = !0);
  }
  function PC(t) {
    t.resolveTargetDelta();
  }
  function kC(t) {
    t.calcProjection();
  }
  function RC(t) {
    t.resetSkewAndRotation();
  }
  function jC(t) {
    t.removeLeadSnapshot();
  }
  function m0(t, r, i) {
    (t.translate = Ie(r.translate, 0, i)),
      (t.scale = Ie(r.scale, 1, i)),
      (t.origin = r.origin),
      (t.originPoint = r.originPoint);
  }
  function g0(t, r, i, o) {
    (t.min = Ie(r.min, i.min, o)), (t.max = Ie(r.max, i.max, o));
  }
  function OC(t, r, i, o) {
    g0(t.x, r.x, i.x, o), g0(t.y, r.y, i.y, o);
  }
  function MC(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0;
  }
  const LC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    y0 = (t) =>
      typeof navigator < "u" &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().includes(t),
    v0 = y0("applewebkit/") && !y0("chrome/") ? Math.round : Lt;
  function w0(t) {
    (t.min = v0(t.min)), (t.max = v0(t.max));
  }
  function DC(t) {
    w0(t.x), w0(t.y);
  }
  function V2(t, r, i) {
    return (
      t === "position" || (t === "preserve-aspect" && !b3(c0(r), c0(i), 0.2))
    );
  }
  function NC(t) {
    var r;
    return (
      t !== t.root &&
      ((r = t.scroll) === null || r === void 0 ? void 0 : r.wasRoot)
    );
  }
  const bC = I2({
      attachResizeListener: (t, r) => xs(t, "resize", r),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      }),
      checkIsScrollRoot: () => !0,
    }),
    Du = { current: void 0 },
    _2 = I2({
      measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
      defaultParent: () => {
        if (!Du.current) {
          const t = new bC({});
          t.mount(window), t.setOptions({ layoutScroll: !0 }), (Du.current = t);
        }
        return Du.current;
      },
      resetTransform: (t, r) => {
        t.style.transform = r !== void 0 ? r : "none";
      },
      checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
    }),
    FC = {
      pan: { Feature: X3 },
      drag: { Feature: Y3, ProjectionNode: _2, MeasureLayout: L2 },
    };
  function x0(t, r, i) {
    const { props: o } = t;
    t.animationState &&
      o.whileHover &&
      t.animationState.setActive("whileHover", i === "Start");
    const l = "onHover" + i,
      f = o[l];
    f && Oe.postRender(() => f(r, Rs(r)));
  }
  class BC extends Xn {
    mount() {
      const { current: r } = this.node;
      r &&
        (this.unmount = bw(
          r,
          (i, o) => (x0(this.node, o, "Start"), (l) => x0(this.node, l, "End"))
        ));
    }
    unmount() {}
  }
  class IC extends Xn {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let r = !1;
      try {
        r = this.node.current.matches(":focus-visible");
      } catch {
        r = !0;
      }
      !r ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = ks(
        xs(this.node.current, "focus", () => this.onFocus()),
        xs(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {}
  }
  function C0(t, r, i) {
    const { props: o } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
    t.animationState &&
      o.whileTap &&
      t.animationState.setActive("whileTap", i === "Start");
    const l = "onTap" + (i === "End" ? "" : i),
      f = o[l];
    f && Oe.postRender(() => f(r, Rs(r)));
  }
  class VC extends Xn {
    mount() {
      const { current: r } = this.node;
      r &&
        (this.unmount = Vw(
          r,
          (i, o) => (
            C0(this.node, o, "Start"),
            (l, { success: f }) => C0(this.node, l, f ? "End" : "Cancel")
          ),
          { useGlobalTarget: this.node.props.globalTapTarget }
        ));
    }
    unmount() {}
  }
  const sc = new WeakMap(),
    Nu = new WeakMap(),
    _C = (t) => {
      const r = sc.get(t.target);
      r && r(t);
    },
    UC = (t) => {
      t.forEach(_C);
    };
  function zC({ root: t, ...r }) {
    const i = t || document;
    Nu.has(i) || Nu.set(i, {});
    const o = Nu.get(i),
      l = JSON.stringify(r);
    return (
      o[l] || (o[l] = new IntersectionObserver(UC, { root: t, ...r })), o[l]
    );
  }
  function QC(t, r, i) {
    const o = zC(r);
    return (
      sc.set(t, i),
      o.observe(t),
      () => {
        sc.delete(t), o.unobserve(t);
      }
    );
  }
  const HC = { some: 0, all: 1 };
  class $C extends Xn {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      const { viewport: r = {} } = this.node.getProps(),
        { root: i, margin: o, amount: l = "some", once: f } = r,
        c = {
          root: i ? i.current : void 0,
          rootMargin: o,
          threshold: typeof l == "number" ? l : HC[l],
        },
        p = (h) => {
          const { isIntersecting: m } = h;
          if (
            this.isInView === m ||
            ((this.isInView = m), f && !m && this.hasEnteredView)
          )
            return;
          m && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", m);
          const { onViewportEnter: y, onViewportLeave: v } =
              this.node.getProps(),
            w = m ? y : v;
          w && w(h);
        };
      return QC(this.node.current, c, p);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      const { props: r, prevProps: i } = this.node;
      ["amount", "margin", "root"].some(WC(r, i)) && this.startObserver();
    }
    unmount() {}
  }
  function WC({ viewport: t = {} }, { viewport: r = {} } = {}) {
    return (i) => t[i] !== r[i];
  }
  const ZC = {
      inView: { Feature: $C },
      tap: { Feature: VC },
      focus: { Feature: IC },
      hover: { Feature: BC },
    },
    KC = { layout: { ProjectionNode: _2, MeasureLayout: L2 } },
    oc = { current: null },
    U2 = { current: !1 };
  function GC() {
    if (((U2.current = !0), !!Sc))
      if (window.matchMedia) {
        const t = window.matchMedia("(prefers-reduced-motion)"),
          r = () => (oc.current = t.matches);
        t.addListener(r), r();
      } else oc.current = !1;
  }
  const qC = [...d2, ct, qn],
    YC = (t) => qC.find(f2(t)),
    XC = new WeakMap();
  function JC(t, r, i) {
    for (const o in r) {
      const l = r[o],
        f = i[o];
      if (dt(l)) t.addValue(o, l);
      else if (dt(f)) t.addValue(o, vs(l, { owner: t }));
      else if (f !== l)
        if (t.hasValue(o)) {
          const c = t.getValue(o);
          c.liveStyle === !0 ? c.jump(l) : c.hasAnimated || c.set(l);
        } else {
          const c = t.getStaticValue(o);
          t.addValue(o, vs(c !== void 0 ? c : l, { owner: t }));
        }
    }
    for (const o in i) r[o] === void 0 && t.removeValue(o);
    return r;
  }
  const A0 = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
  class eA {
    scrapeMotionValuesFromProps(r, i, o) {
      return {};
    }
    constructor(
      {
        parent: r,
        props: i,
        presenceContext: o,
        reducedMotionConfig: l,
        blockInitialAnimation: f,
        visualState: c,
      },
      p = {}
    ) {
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Yc),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          const k = ln.now();
          this.renderScheduledAt < k &&
            ((this.renderScheduledAt = k), Oe.render(this.render, !1, !0));
        });
      const { latestValues: h, renderState: m, onUpdate: y } = c;
      (this.onUpdate = y),
        (this.latestValues = h),
        (this.baseTarget = { ...h }),
        (this.initialValues = i.initial ? { ...h } : {}),
        (this.renderState = m),
        (this.parent = r),
        (this.props = i),
        (this.presenceContext = o),
        (this.depth = r ? r.depth + 1 : 0),
        (this.reducedMotionConfig = l),
        (this.options = p),
        (this.blockInitialAnimation = !!f),
        (this.isControllingVariants = ga(i)),
        (this.isVariantNode = Cm(i)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(r && r.current));
      const { willChange: v, ...w } = this.scrapeMotionValuesFromProps(
        i,
        {},
        this
      );
      for (const k in w) {
        const S = w[k];
        h[k] !== void 0 && dt(S) && S.set(h[k], !1);
      }
    }
    mount(r) {
      (this.current = r),
        XC.set(r, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(r),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((i, o) => this.bindToMotionValue(o, i)),
        U2.current || GC(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
            ? !0
            : oc.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      this.projection && this.projection.unmount(),
        Gn(this.notifyUpdate),
        Gn(this.render),
        this.valueSubscriptions.forEach((r) => r()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (const r in this.events) this.events[r].clear();
      for (const r in this.features) {
        const i = this.features[r];
        i && (i.unmount(), (i.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(r, i) {
      this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)();
      const o = kr.has(r);
      o && this.onBindTransform && this.onBindTransform();
      const l = i.on("change", (p) => {
          (this.latestValues[r] = p),
            this.props.onUpdate && Oe.preRender(this.notifyUpdate),
            o && this.projection && (this.projection.isTransformDirty = !0);
        }),
        f = i.on("renderRequest", this.scheduleRender);
      let c;
      window.MotionCheckAppearSync &&
        (c = window.MotionCheckAppearSync(this, r, i)),
        this.valueSubscriptions.set(r, () => {
          l(), f(), c && c(), i.owner && i.stop();
        });
    }
    sortNodePosition(r) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== r.type
        ? 0
        : this.sortInstanceNodePosition(this.current, r.current);
    }
    updateFeatures() {
      let r = "animation";
      for (r in ui) {
        const i = ui[r];
        if (!i) continue;
        const { isEnabled: o, Feature: l } = i;
        if (
          (!this.features[r] &&
            l &&
            o(this.props) &&
            (this.features[r] = new l(this)),
          this.features[r])
        ) {
          const f = this.features[r];
          f.isMounted ? f.update() : (f.mount(), (f.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : Qe();
    }
    getStaticValue(r) {
      return this.latestValues[r];
    }
    setStaticValue(r, i) {
      this.latestValues[r] = i;
    }
    update(r, i) {
      (r.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = r),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = i);
      for (let o = 0; o < A0.length; o++) {
        const l = A0[o];
        this.propEventSubscriptions[l] &&
          (this.propEventSubscriptions[l](),
          delete this.propEventSubscriptions[l]);
        const f = "on" + l,
          c = r[f];
        c && (this.propEventSubscriptions[l] = this.on(l, c));
      }
      (this.prevMotionValues = JC(
        this,
        this.scrapeMotionValuesFromProps(r, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this);
    }
    getProps() {
      return this.props;
    }
    getVariant(r) {
      return this.props.variants ? this.props.variants[r] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    addVariantChild(r) {
      const i = this.getClosestVariantNode();
      if (i)
        return (
          i.variantChildren && i.variantChildren.add(r),
          () => i.variantChildren.delete(r)
        );
    }
    addValue(r, i) {
      const o = this.values.get(r);
      i !== o &&
        (o && this.removeValue(r),
        this.bindToMotionValue(r, i),
        this.values.set(r, i),
        (this.latestValues[r] = i.get()));
    }
    removeValue(r) {
      this.values.delete(r);
      const i = this.valueSubscriptions.get(r);
      i && (i(), this.valueSubscriptions.delete(r)),
        delete this.latestValues[r],
        this.removeValueFromRenderState(r, this.renderState);
    }
    hasValue(r) {
      return this.values.has(r);
    }
    getValue(r, i) {
      if (this.props.values && this.props.values[r])
        return this.props.values[r];
      let o = this.values.get(r);
      return (
        o === void 0 &&
          i !== void 0 &&
          ((o = vs(i === null ? void 0 : i, { owner: this })),
          this.addValue(r, o)),
        o
      );
    }
    readValue(r, i) {
      var o;
      let l =
        this.latestValues[r] !== void 0 || !this.current
          ? this.latestValues[r]
          : (o = this.getBaseTargetFromProps(this.props, r)) !== null &&
            o !== void 0
          ? o
          : this.readValueFromInstance(this.current, r, this.options);
      return (
        l != null &&
          (typeof l == "string" && (u2(l) || e2(l))
            ? (l = parseFloat(l))
            : !YC(l) && qn.test(i) && (l = o2(r, i)),
          this.setBaseTarget(r, dt(l) ? l.get() : l)),
        dt(l) ? l.get() : l
      );
    }
    setBaseTarget(r, i) {
      this.baseTarget[r] = i;
    }
    getBaseTarget(r) {
      var i;
      const { initial: o } = this.props;
      let l;
      if (typeof o == "string" || typeof o == "object") {
        const c = Bc(
          this.props,
          o,
          (i = this.presenceContext) === null || i === void 0
            ? void 0
            : i.custom
        );
        c && (l = c[r]);
      }
      if (o && l !== void 0) return l;
      const f = this.getBaseTargetFromProps(this.props, r);
      return f !== void 0 && !dt(f)
        ? f
        : this.initialValues[r] !== void 0 && l === void 0
        ? void 0
        : this.baseTarget[r];
    }
    on(r, i) {
      return (
        this.events[r] || (this.events[r] = new $c()), this.events[r].add(i)
      );
    }
    notify(r, ...i) {
      this.events[r] && this.events[r].notify(...i);
    }
  }
  class z2 extends eA {
    constructor() {
      super(...arguments), (this.KeyframeResolver = p2);
    }
    sortInstanceNodePosition(r, i) {
      return r.compareDocumentPosition(i) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(r, i) {
      return r.style ? r.style[i] : void 0;
    }
    removeValueFromRenderState(r, { vars: i, style: o }) {
      delete i[r], delete o[r];
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      const { children: r } = this.props;
      dt(r) &&
        (this.childSubscription = r.on("change", (i) => {
          this.current && (this.current.textContent = `${i}`);
        }));
    }
  }
  function tA(t) {
    return window.getComputedStyle(t);
  }
  class nA extends z2 {
    constructor() {
      super(...arguments), (this.type = "html"), (this.renderInstance = Lm);
    }
    readValueFromInstance(r, i) {
      if (kr.has(i)) {
        const o = qc(i);
        return (o && o.default) || 0;
      } else {
        const o = tA(r),
          l = (jc(i) ? o.getPropertyValue(i) : o[i]) || 0;
        return typeof l == "string" ? l.trim() : l;
      }
    }
    measureInstanceViewportBox(r, { transformPagePoint: i }) {
      return j2(r, i);
    }
    build(r, i, o) {
      Lc(r, i, o.transformTemplate);
    }
    scrapeMotionValuesFromProps(r, i, o) {
      return Ic(r, i, o);
    }
  }
  class rA extends z2 {
    constructor() {
      super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = Qe),
        (this.updateDimensions = () => {
          this.current &&
            !this.renderState.dimensions &&
            Mm(this.current, this.renderState);
        });
    }
    getBaseTargetFromProps(r, i) {
      return r[i];
    }
    readValueFromInstance(r, i) {
      if (kr.has(i)) {
        const o = qc(i);
        return (o && o.default) || 0;
      }
      return (i = Dm.has(i) ? i : kc(i)), r.getAttribute(i);
    }
    scrapeMotionValuesFromProps(r, i, o) {
      return bm(r, i, o);
    }
    onBindTransform() {
      this.current &&
        !this.renderState.dimensions &&
        Oe.postRender(this.updateDimensions);
    }
    build(r, i, o) {
      bc(r, i, this.isSVGTag, o.transformTemplate);
    }
    renderInstance(r, i, o, l) {
      Nm(r, i, o, l);
    }
    mount(r) {
      (this.isSVGTag = Fc(r.tagName)), super.mount(r);
    }
  }
  const iA = (t, r) =>
      Nc(t) ? new rA(r) : new nA(r, { allowProjection: t !== H.Fragment }),
    sA = Rw({ ...k3, ...ZC, ...FC, ...KC }, iA),
    Cn = Hv(sA),
    S0 = () =>
      R.jsxs(Cn.div, {
        className: `${ue.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer relative overflow-hidden`,
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        children: [
          R.jsxs(Cn.div, {
            className: `${ue.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full relative shadow-lg`,
            animate: { rotate: [0, 360] },
            transition: { duration: 8, repeat: 1 / 0, ease: "linear" },
            children: [
              R.jsxs("div", {
                className: `${ue.flexStart} flex-row gap-1`,
                children: [
                  R.jsx("p", {
                    className:
                      "font-poppins font-medium text-[18px] leading-[23.4px] text-gradient",
                    children: "Get",
                  }),
                  R.jsx(Cn.img, {
                    src: cv,
                    alt: "arrow-up",
                    className: "w-[23px] h-[23px] object-contain",
                    animate: { y: [0, -5, 0] },
                    transition: {
                      duration: 0.8,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                    },
                  }),
                ],
              }),
              R.jsx("p", {
                className:
                  "font-poppins font-medium text-[18px] leading-[23.4px] text-gradient",
                children: "Started",
              }),
            ],
          }),
          R.jsx(Cn.div, {
            className:
              "absolute w-[200%] h-[200%] bg-blue-400 opacity-10 rounded-full",
            animate: { scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] },
            transition: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
          }),
        ],
      }),
    oA = () =>
      R.jsxs("section", {
        id: "home",
        className: `flex md:flex-row flex-col ${ue.paddingY}`,
        children: [
          R.jsxs("div", {
            className: `flex-1 ${ue.flexStart} flex-col xl:px-0 sm:px-16 px-6`,
            children: [
              R.jsxs("div", {
                className:
                  "flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2",
                children: [
                  R.jsx("img", {
                    src: fv,
                    alt: "discount",
                    className: "w-[32px] h-[32px]",
                  }),
                  R.jsxs("p", {
                    className: `${ue.paragraph} ml-2`,
                    children: [
                      R.jsx("span", {
                        className: "text-white",
                        children: "20%",
                      }),
                      " Discount For",
                      " ",
                      R.jsx("span", {
                        className: "text-white",
                        children: "1 Month",
                      }),
                      " Account",
                    ],
                  }),
                ],
              }),
              R.jsxs("div", {
                className: "flex flex-row justify-between items-center w-full",
                children: [
                  R.jsxs("h1", {
                    className:
                      "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]",
                    children: [
                      "The Next ",
                      R.jsx("br", { className: "sm:block hidden" }),
                      " ",
                      R.jsx("span", {
                        className: "text-gradient",
                        children: "Generation",
                      }),
                      " ",
                    ],
                  }),
                  R.jsx("div", {
                    className: "ss:flex hidden md:mr-4 mr-0",
                    children: R.jsx(S0, {}),
                  }),
                ],
              }),
              R.jsx("h1", {
                className:
                  "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full",
                children: "Payment Method.",
              }),
              R.jsx("p", {
                className: `${ue.paragraph} max-w-[470px] mt-5`,
                children:
                  "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.",
              }),
            ],
          }),
          R.jsxs("div", {
            className: `flex-1 flex ${ue.flexCenter} md:my-0 my-10 relative`,
            children: [
              R.jsx("img", {
                src: nv,
                alt: "billing",
                className: "w-[100%] h-[100%] relative z-[5]",
              }),
              R.jsx("div", {
                className:
                  "absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient",
              }),
              R.jsx("div", {
                className:
                  "absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40",
              }),
              R.jsx("div", {
                className:
                  "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient",
              }),
            ],
          }),
          R.jsx("div", {
            className: `ss:hidden ${ue.flexCenter}`,
            children: R.jsx(S0, {}),
          }),
        ],
      });
  function Q2(t, r) {
    return function () {
      return t.apply(r, arguments);
    };
  }
  const { toString: aA } = Object.prototype,
    { getPrototypeOf: tf } = Object,
    va = ((t) => (r) => {
      const i = aA.call(r);
      return t[i] || (t[i] = i.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Jt = (t) => ((t = t.toLowerCase()), (r) => va(r) === t),
    wa = (t) => (r) => typeof r === t,
    { isArray: hi } = Array,
    Cs = wa("undefined");
  function lA(t) {
    return (
      t !== null &&
      !Cs(t) &&
      t.constructor !== null &&
      !Cs(t.constructor) &&
      Dt(t.constructor.isBuffer) &&
      t.constructor.isBuffer(t)
    );
  }
  const H2 = Jt("ArrayBuffer");
  function uA(t) {
    let r;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (r = ArrayBuffer.isView(t))
        : (r = t && t.buffer && H2(t.buffer)),
      r
    );
  }
  const cA = wa("string"),
    Dt = wa("function"),
    $2 = wa("number"),
    xa = (t) => t !== null && typeof t == "object",
    fA = (t) => t === !0 || t === !1,
    na = (t) => {
      if (va(t) !== "object") return !1;
      const r = tf(t);
      return (
        (r === null ||
          r === Object.prototype ||
          Object.getPrototypeOf(r) === null) &&
        !(Symbol.toStringTag in t) &&
        !(Symbol.iterator in t)
      );
    },
    dA = Jt("Date"),
    pA = Jt("File"),
    hA = Jt("Blob"),
    mA = Jt("FileList"),
    gA = (t) => xa(t) && Dt(t.pipe),
    yA = (t) => {
      let r;
      return (
        t &&
        ((typeof FormData == "function" && t instanceof FormData) ||
          (Dt(t.append) &&
            ((r = va(t)) === "formdata" ||
              (r === "object" &&
                Dt(t.toString) &&
                t.toString() === "[object FormData]"))))
      );
    },
    vA = Jt("URLSearchParams"),
    [wA, xA, CA, AA] = ["ReadableStream", "Request", "Response", "Headers"].map(
      Jt
    ),
    SA = (t) =>
      t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function js(t, r, { allOwnKeys: i = !1 } = {}) {
    if (t === null || typeof t > "u") return;
    let o, l;
    if ((typeof t != "object" && (t = [t]), hi(t)))
      for (o = 0, l = t.length; o < l; o++) r.call(null, t[o], o, t);
    else {
      const f = i ? Object.getOwnPropertyNames(t) : Object.keys(t),
        c = f.length;
      let p;
      for (o = 0; o < c; o++) (p = f[o]), r.call(null, t[p], p, t);
    }
  }
  function W2(t, r) {
    r = r.toLowerCase();
    const i = Object.keys(t);
    let o = i.length,
      l;
    for (; o-- > 0; ) if (((l = i[o]), r === l.toLowerCase())) return l;
    return null;
  }
  const Cr =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : global,
    Z2 = (t) => !Cs(t) && t !== Cr;
  function ac() {
    const { caseless: t } = (Z2(this) && this) || {},
      r = {},
      i = (o, l) => {
        const f = (t && W2(r, l)) || l;
        na(r[f]) && na(o)
          ? (r[f] = ac(r[f], o))
          : na(o)
          ? (r[f] = ac({}, o))
          : hi(o)
          ? (r[f] = o.slice())
          : (r[f] = o);
      };
    for (let o = 0, l = arguments.length; o < l; o++)
      arguments[o] && js(arguments[o], i);
    return r;
  }
  const EA = (t, r, i, { allOwnKeys: o } = {}) => (
      js(
        r,
        (l, f) => {
          i && Dt(l) ? (t[f] = Q2(l, i)) : (t[f] = l);
        },
        { allOwnKeys: o }
      ),
      t
    ),
    TA = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
    PA = (t, r, i, o) => {
      (t.prototype = Object.create(r.prototype, o)),
        (t.prototype.constructor = t),
        Object.defineProperty(t, "super", { value: r.prototype }),
        i && Object.assign(t.prototype, i);
    },
    kA = (t, r, i, o) => {
      let l, f, c;
      const p = {};
      if (((r = r || {}), t == null)) return r;
      do {
        for (l = Object.getOwnPropertyNames(t), f = l.length; f-- > 0; )
          (c = l[f]),
            (!o || o(c, t, r)) && !p[c] && ((r[c] = t[c]), (p[c] = !0));
        t = i !== !1 && tf(t);
      } while (t && (!i || i(t, r)) && t !== Object.prototype);
      return r;
    },
    RA = (t, r, i) => {
      (t = String(t)),
        (i === void 0 || i > t.length) && (i = t.length),
        (i -= r.length);
      const o = t.indexOf(r, i);
      return o !== -1 && o === i;
    },
    jA = (t) => {
      if (!t) return null;
      if (hi(t)) return t;
      let r = t.length;
      if (!$2(r)) return null;
      const i = new Array(r);
      for (; r-- > 0; ) i[r] = t[r];
      return i;
    },
    OA = (
      (t) => (r) =>
        t && r instanceof t
    )(typeof Uint8Array < "u" && tf(Uint8Array)),
    MA = (t, r) => {
      const o = (t && t[Symbol.iterator]).call(t);
      let l;
      for (; (l = o.next()) && !l.done; ) {
        const f = l.value;
        r.call(t, f[0], f[1]);
      }
    },
    LA = (t, r) => {
      let i;
      const o = [];
      for (; (i = t.exec(r)) !== null; ) o.push(i);
      return o;
    },
    DA = Jt("HTMLFormElement"),
    NA = (t) =>
      t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, o, l) {
        return o.toUpperCase() + l;
      }),
    E0 = (
      ({ hasOwnProperty: t }) =>
      (r, i) =>
        t.call(r, i)
    )(Object.prototype),
    bA = Jt("RegExp"),
    K2 = (t, r) => {
      const i = Object.getOwnPropertyDescriptors(t),
        o = {};
      js(i, (l, f) => {
        let c;
        (c = r(l, f, t)) !== !1 && (o[f] = c || l);
      }),
        Object.defineProperties(t, o);
    },
    FA = (t) => {
      K2(t, (r, i) => {
        if (Dt(t) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
          return !1;
        const o = t[i];
        if (Dt(o)) {
          if (((r.enumerable = !1), "writable" in r)) {
            r.writable = !1;
            return;
          }
          r.set ||
            (r.set = () => {
              throw Error("Can not rewrite read-only method '" + i + "'");
            });
        }
      });
    },
    BA = (t, r) => {
      const i = {},
        o = (l) => {
          l.forEach((f) => {
            i[f] = !0;
          });
        };
      return hi(t) ? o(t) : o(String(t).split(r)), i;
    },
    IA = () => {},
    VA = (t, r) => (t != null && Number.isFinite((t = +t)) ? t : r);
  function _A(t) {
    return !!(
      t &&
      Dt(t.append) &&
      t[Symbol.toStringTag] === "FormData" &&
      t[Symbol.iterator]
    );
  }
  const UA = (t) => {
      const r = new Array(10),
        i = (o, l) => {
          if (xa(o)) {
            if (r.indexOf(o) >= 0) return;
            if (!("toJSON" in o)) {
              r[l] = o;
              const f = hi(o) ? [] : {};
              return (
                js(o, (c, p) => {
                  const h = i(c, l + 1);
                  !Cs(h) && (f[p] = h);
                }),
                (r[l] = void 0),
                f
              );
            }
          }
          return o;
        };
      return i(t, 0);
    },
    zA = Jt("AsyncFunction"),
    QA = (t) => t && (xa(t) || Dt(t)) && Dt(t.then) && Dt(t.catch),
    G2 = ((t, r) =>
      t
        ? setImmediate
        : r
        ? ((i, o) => (
            Cr.addEventListener(
              "message",
              ({ source: l, data: f }) => {
                l === Cr && f === i && o.length && o.shift()();
              },
              !1
            ),
            (l) => {
              o.push(l), Cr.postMessage(i, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (i) => setTimeout(i))(
      typeof setImmediate == "function",
      Dt(Cr.postMessage)
    ),
    HA =
      typeof queueMicrotask < "u"
        ? queueMicrotask.bind(Cr)
        : (typeof process < "u" && process.nextTick) || G2,
    N = {
      isArray: hi,
      isArrayBuffer: H2,
      isBuffer: lA,
      isFormData: yA,
      isArrayBufferView: uA,
      isString: cA,
      isNumber: $2,
      isBoolean: fA,
      isObject: xa,
      isPlainObject: na,
      isReadableStream: wA,
      isRequest: xA,
      isResponse: CA,
      isHeaders: AA,
      isUndefined: Cs,
      isDate: dA,
      isFile: pA,
      isBlob: hA,
      isRegExp: bA,
      isFunction: Dt,
      isStream: gA,
      isURLSearchParams: vA,
      isTypedArray: OA,
      isFileList: mA,
      forEach: js,
      merge: ac,
      extend: EA,
      trim: SA,
      stripBOM: TA,
      inherits: PA,
      toFlatObject: kA,
      kindOf: va,
      kindOfTest: Jt,
      endsWith: RA,
      toArray: jA,
      forEachEntry: MA,
      matchAll: LA,
      isHTMLForm: DA,
      hasOwnProperty: E0,
      hasOwnProp: E0,
      reduceDescriptors: K2,
      freezeMethods: FA,
      toObjectSet: BA,
      toCamelCase: NA,
      noop: IA,
      toFiniteNumber: VA,
      findKey: W2,
      global: Cr,
      isContextDefined: Z2,
      isSpecCompliantForm: _A,
      toJSONObject: UA,
      isAsyncFn: zA,
      isThenable: QA,
      setImmediate: G2,
      asap: HA,
    };
  function fe(t, r, i, o, l) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = t),
      (this.name = "AxiosError"),
      r && (this.code = r),
      i && (this.config = i),
      o && (this.request = o),
      l && ((this.response = l), (this.status = l.status ? l.status : null));
  }
  N.inherits(fe, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: N.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const q2 = fe.prototype,
    Y2 = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((t) => {
    Y2[t] = { value: t };
  });
  Object.defineProperties(fe, Y2);
  Object.defineProperty(q2, "isAxiosError", { value: !0 });
  fe.from = (t, r, i, o, l, f) => {
    const c = Object.create(q2);
    return (
      N.toFlatObject(
        t,
        c,
        function (h) {
          return h !== Error.prototype;
        },
        (p) => p !== "isAxiosError"
      ),
      fe.call(c, t.message, r, i, o, l),
      (c.cause = t),
      (c.name = t.name),
      f && Object.assign(c, f),
      c
    );
  };
  const $A = null;
  function lc(t) {
    return N.isPlainObject(t) || N.isArray(t);
  }
  function X2(t) {
    return N.endsWith(t, "[]") ? t.slice(0, -2) : t;
  }
  function T0(t, r, i) {
    return t
      ? t
          .concat(r)
          .map(function (l, f) {
            return (l = X2(l)), !i && f ? "[" + l + "]" : l;
          })
          .join(i ? "." : "")
      : r;
  }
  function WA(t) {
    return N.isArray(t) && !t.some(lc);
  }
  const ZA = N.toFlatObject(N, {}, null, function (r) {
    return /^is[A-Z]/.test(r);
  });
  function Ca(t, r, i) {
    if (!N.isObject(t)) throw new TypeError("target must be an object");
    (r = r || new FormData()),
      (i = N.toFlatObject(
        i,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (T, P) {
          return !N.isUndefined(P[T]);
        }
      ));
    const o = i.metaTokens,
      l = i.visitor || y,
      f = i.dots,
      c = i.indexes,
      h = (i.Blob || (typeof Blob < "u" && Blob)) && N.isSpecCompliantForm(r);
    if (!N.isFunction(l)) throw new TypeError("visitor must be a function");
    function m(S) {
      if (S === null) return "";
      if (N.isDate(S)) return S.toISOString();
      if (!h && N.isBlob(S))
        throw new fe("Blob is not supported. Use a Buffer instead.");
      return N.isArrayBuffer(S) || N.isTypedArray(S)
        ? h && typeof Blob == "function"
          ? new Blob([S])
          : Buffer.from(S)
        : S;
    }
    function y(S, T, P) {
      let b = S;
      if (S && !P && typeof S == "object") {
        if (N.endsWith(T, "{}"))
          (T = o ? T : T.slice(0, -2)), (S = JSON.stringify(S));
        else if (
          (N.isArray(S) && WA(S)) ||
          ((N.isFileList(S) || N.endsWith(T, "[]")) && (b = N.toArray(S)))
        )
          return (
            (T = X2(T)),
            b.forEach(function (V, J) {
              !(N.isUndefined(V) || V === null) &&
                r.append(
                  c === !0 ? T0([T], J, f) : c === null ? T : T + "[]",
                  m(V)
                );
            }),
            !1
          );
      }
      return lc(S) ? !0 : (r.append(T0(P, T, f), m(S)), !1);
    }
    const v = [],
      w = Object.assign(ZA, {
        defaultVisitor: y,
        convertValue: m,
        isVisitable: lc,
      });
    function k(S, T) {
      if (!N.isUndefined(S)) {
        if (v.indexOf(S) !== -1)
          throw Error("Circular reference detected in " + T.join("."));
        v.push(S),
          N.forEach(S, function (b, I) {
            (!(N.isUndefined(b) || b === null) &&
              l.call(r, b, N.isString(I) ? I.trim() : I, T, w)) === !0 &&
              k(b, T ? T.concat(I) : [I]);
          }),
          v.pop();
      }
    }
    if (!N.isObject(t)) throw new TypeError("data must be an object");
    return k(t), r;
  }
  function P0(t) {
    const r = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (o) {
      return r[o];
    });
  }
  function nf(t, r) {
    (this._pairs = []), t && Ca(t, this, r);
  }
  const J2 = nf.prototype;
  J2.append = function (r, i) {
    this._pairs.push([r, i]);
  };
  J2.toString = function (r) {
    const i = r
      ? function (o) {
          return r.call(this, o, P0);
        }
      : P0;
    return this._pairs
      .map(function (l) {
        return i(l[0]) + "=" + i(l[1]);
      }, "")
      .join("&");
  };
  function KA(t) {
    return encodeURIComponent(t)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function e1(t, r, i) {
    if (!r) return t;
    const o = (i && i.encode) || KA;
    N.isFunction(i) && (i = { serialize: i });
    const l = i && i.serialize;
    let f;
    if (
      (l
        ? (f = l(r, i))
        : (f = N.isURLSearchParams(r)
            ? r.toString()
            : new nf(r, i).toString(o)),
      f)
    ) {
      const c = t.indexOf("#");
      c !== -1 && (t = t.slice(0, c)),
        (t += (t.indexOf("?") === -1 ? "?" : "&") + f);
    }
    return t;
  }
  class k0 {
    constructor() {
      this.handlers = [];
    }
    use(r, i, o) {
      return (
        this.handlers.push({
          fulfilled: r,
          rejected: i,
          synchronous: o ? o.synchronous : !1,
          runWhen: o ? o.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(r) {
      this.handlers[r] && (this.handlers[r] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(r) {
      N.forEach(this.handlers, function (o) {
        o !== null && r(o);
      });
    }
  }
  const t1 = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    GA = typeof URLSearchParams < "u" ? URLSearchParams : nf,
    qA = typeof FormData < "u" ? FormData : null,
    YA = typeof Blob < "u" ? Blob : null,
    XA = {
      isBrowser: !0,
      classes: { URLSearchParams: GA, FormData: qA, Blob: YA },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    rf = typeof window < "u" && typeof document < "u",
    uc = (typeof navigator == "object" && navigator) || void 0,
    JA =
      rf &&
      (!uc || ["ReactNative", "NativeScript", "NS"].indexOf(uc.product) < 0),
    eS =
      typeof WorkerGlobalScope < "u" &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == "function",
    tS = (rf && window.location.href) || "http://localhost",
    nS = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          hasBrowserEnv: rf,
          hasStandardBrowserEnv: JA,
          hasStandardBrowserWebWorkerEnv: eS,
          navigator: uc,
          origin: tS,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    ft = { ...nS, ...XA };
  function rS(t, r) {
    return Ca(
      t,
      new ft.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (i, o, l, f) {
            return ft.isNode && N.isBuffer(i)
              ? (this.append(o, i.toString("base64")), !1)
              : f.defaultVisitor.apply(this, arguments);
          },
        },
        r
      )
    );
  }
  function iS(t) {
    return N.matchAll(/\w+|\[(\w*)]/g, t).map((r) =>
      r[0] === "[]" ? "" : r[1] || r[0]
    );
  }
  function sS(t) {
    const r = {},
      i = Object.keys(t);
    let o;
    const l = i.length;
    let f;
    for (o = 0; o < l; o++) (f = i[o]), (r[f] = t[f]);
    return r;
  }
  function n1(t) {
    function r(i, o, l, f) {
      let c = i[f++];
      if (c === "__proto__") return !0;
      const p = Number.isFinite(+c),
        h = f >= i.length;
      return (
        (c = !c && N.isArray(l) ? l.length : c),
        h
          ? (N.hasOwnProp(l, c) ? (l[c] = [l[c], o]) : (l[c] = o), !p)
          : ((!l[c] || !N.isObject(l[c])) && (l[c] = []),
            r(i, o, l[c], f) && N.isArray(l[c]) && (l[c] = sS(l[c])),
            !p)
      );
    }
    if (N.isFormData(t) && N.isFunction(t.entries)) {
      const i = {};
      return (
        N.forEachEntry(t, (o, l) => {
          r(iS(o), l, i, 0);
        }),
        i
      );
    }
    return null;
  }
  function oS(t, r, i) {
    if (N.isString(t))
      try {
        return (r || JSON.parse)(t), N.trim(t);
      } catch (o) {
        if (o.name !== "SyntaxError") throw o;
      }
    return (i || JSON.stringify)(t);
  }
  const Os = {
    transitional: t1,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (r, i) {
        const o = i.getContentType() || "",
          l = o.indexOf("application/json") > -1,
          f = N.isObject(r);
        if ((f && N.isHTMLForm(r) && (r = new FormData(r)), N.isFormData(r)))
          return l ? JSON.stringify(n1(r)) : r;
        if (
          N.isArrayBuffer(r) ||
          N.isBuffer(r) ||
          N.isStream(r) ||
          N.isFile(r) ||
          N.isBlob(r) ||
          N.isReadableStream(r)
        )
          return r;
        if (N.isArrayBufferView(r)) return r.buffer;
        if (N.isURLSearchParams(r))
          return (
            i.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            r.toString()
          );
        let p;
        if (f) {
          if (o.indexOf("application/x-www-form-urlencoded") > -1)
            return rS(r, this.formSerializer).toString();
          if ((p = N.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
            const h = this.env && this.env.FormData;
            return Ca(
              p ? { "files[]": r } : r,
              h && new h(),
              this.formSerializer
            );
          }
        }
        return f || l ? (i.setContentType("application/json", !1), oS(r)) : r;
      },
    ],
    transformResponse: [
      function (r) {
        const i = this.transitional || Os.transitional,
          o = i && i.forcedJSONParsing,
          l = this.responseType === "json";
        if (N.isResponse(r) || N.isReadableStream(r)) return r;
        if (r && N.isString(r) && ((o && !this.responseType) || l)) {
          const c = !(i && i.silentJSONParsing) && l;
          try {
            return JSON.parse(r);
          } catch (p) {
            if (c)
              throw p.name === "SyntaxError"
                ? fe.from(p, fe.ERR_BAD_RESPONSE, this, null, this.response)
                : p;
          }
        }
        return r;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: ft.classes.FormData, Blob: ft.classes.Blob },
    validateStatus: function (r) {
      return r >= 200 && r < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  N.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
    Os.headers[t] = {};
  });
  const aS = N.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    lS = (t) => {
      const r = {};
      let i, o, l;
      return (
        t &&
          t
            .split(
              `
`
            )
            .forEach(function (c) {
              (l = c.indexOf(":")),
                (i = c.substring(0, l).trim().toLowerCase()),
                (o = c.substring(l + 1).trim()),
                !(!i || (r[i] && aS[i])) &&
                  (i === "set-cookie"
                    ? r[i]
                      ? r[i].push(o)
                      : (r[i] = [o])
                    : (r[i] = r[i] ? r[i] + ", " + o : o));
            }),
        r
      );
    },
    R0 = Symbol("internals");
  function is(t) {
    return t && String(t).trim().toLowerCase();
  }
  function ra(t) {
    return t === !1 || t == null ? t : N.isArray(t) ? t.map(ra) : String(t);
  }
  function uS(t) {
    const r = Object.create(null),
      i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let o;
    for (; (o = i.exec(t)); ) r[o[1]] = o[2];
    return r;
  }
  const cS = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
  function bu(t, r, i, o, l) {
    if (N.isFunction(o)) return o.call(this, r, i);
    if ((l && (r = i), !!N.isString(r))) {
      if (N.isString(o)) return r.indexOf(o) !== -1;
      if (N.isRegExp(o)) return o.test(r);
    }
  }
  function fS(t) {
    return t
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (r, i, o) => i.toUpperCase() + o);
  }
  function dS(t, r) {
    const i = N.toCamelCase(" " + r);
    ["get", "set", "has"].forEach((o) => {
      Object.defineProperty(t, o + i, {
        value: function (l, f, c) {
          return this[o].call(this, r, l, f, c);
        },
        configurable: !0,
      });
    });
  }
  let Et = class {
    constructor(r) {
      r && this.set(r);
    }
    set(r, i, o) {
      const l = this;
      function f(p, h, m) {
        const y = is(h);
        if (!y) throw new Error("header name must be a non-empty string");
        const v = N.findKey(l, y);
        (!v || l[v] === void 0 || m === !0 || (m === void 0 && l[v] !== !1)) &&
          (l[v || h] = ra(p));
      }
      const c = (p, h) => N.forEach(p, (m, y) => f(m, y, h));
      if (N.isPlainObject(r) || r instanceof this.constructor) c(r, i);
      else if (N.isString(r) && (r = r.trim()) && !cS(r)) c(lS(r), i);
      else if (N.isHeaders(r)) for (const [p, h] of r.entries()) f(h, p, o);
      else r != null && f(i, r, o);
      return this;
    }
    get(r, i) {
      if (((r = is(r)), r)) {
        const o = N.findKey(this, r);
        if (o) {
          const l = this[o];
          if (!i) return l;
          if (i === !0) return uS(l);
          if (N.isFunction(i)) return i.call(this, l, o);
          if (N.isRegExp(i)) return i.exec(l);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(r, i) {
      if (((r = is(r)), r)) {
        const o = N.findKey(this, r);
        return !!(o && this[o] !== void 0 && (!i || bu(this, this[o], o, i)));
      }
      return !1;
    }
    delete(r, i) {
      const o = this;
      let l = !1;
      function f(c) {
        if (((c = is(c)), c)) {
          const p = N.findKey(o, c);
          p && (!i || bu(o, o[p], p, i)) && (delete o[p], (l = !0));
        }
      }
      return N.isArray(r) ? r.forEach(f) : f(r), l;
    }
    clear(r) {
      const i = Object.keys(this);
      let o = i.length,
        l = !1;
      for (; o--; ) {
        const f = i[o];
        (!r || bu(this, this[f], f, r, !0)) && (delete this[f], (l = !0));
      }
      return l;
    }
    normalize(r) {
      const i = this,
        o = {};
      return (
        N.forEach(this, (l, f) => {
          const c = N.findKey(o, f);
          if (c) {
            (i[c] = ra(l)), delete i[f];
            return;
          }
          const p = r ? fS(f) : String(f).trim();
          p !== f && delete i[f], (i[p] = ra(l)), (o[p] = !0);
        }),
        this
      );
    }
    concat(...r) {
      return this.constructor.concat(this, ...r);
    }
    toJSON(r) {
      const i = Object.create(null);
      return (
        N.forEach(this, (o, l) => {
          o != null &&
            o !== !1 &&
            (i[l] = r && N.isArray(o) ? o.join(", ") : o);
        }),
        i
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([r, i]) => r + ": " + i).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(r) {
      return r instanceof this ? r : new this(r);
    }
    static concat(r, ...i) {
      const o = new this(r);
      return i.forEach((l) => o.set(l)), o;
    }
    static accessor(r) {
      const o = (this[R0] = this[R0] = { accessors: {} }).accessors,
        l = this.prototype;
      function f(c) {
        const p = is(c);
        o[p] || (dS(l, c), (o[p] = !0));
      }
      return N.isArray(r) ? r.forEach(f) : f(r), this;
    }
  };
  Et.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]);
  N.reduceDescriptors(Et.prototype, ({ value: t }, r) => {
    let i = r[0].toUpperCase() + r.slice(1);
    return {
      get: () => t,
      set(o) {
        this[i] = o;
      },
    };
  });
  N.freezeMethods(Et);
  function Fu(t, r) {
    const i = this || Os,
      o = r || i,
      l = Et.from(o.headers);
    let f = o.data;
    return (
      N.forEach(t, function (p) {
        f = p.call(i, f, l.normalize(), r ? r.status : void 0);
      }),
      l.normalize(),
      f
    );
  }
  function r1(t) {
    return !!(t && t.__CANCEL__);
  }
  function mi(t, r, i) {
    fe.call(this, t ?? "canceled", fe.ERR_CANCELED, r, i),
      (this.name = "CanceledError");
  }
  N.inherits(mi, fe, { __CANCEL__: !0 });
  function i1(t, r, i) {
    const o = i.config.validateStatus;
    !i.status || !o || o(i.status)
      ? t(i)
      : r(
          new fe(
            "Request failed with status code " + i.status,
            [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][
              Math.floor(i.status / 100) - 4
            ],
            i.config,
            i.request,
            i
          )
        );
  }
  function pS(t) {
    const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return (r && r[1]) || "";
  }
  function hS(t, r) {
    t = t || 10;
    const i = new Array(t),
      o = new Array(t);
    let l = 0,
      f = 0,
      c;
    return (
      (r = r !== void 0 ? r : 1e3),
      function (h) {
        const m = Date.now(),
          y = o[f];
        c || (c = m), (i[l] = h), (o[l] = m);
        let v = f,
          w = 0;
        for (; v !== l; ) (w += i[v++]), (v = v % t);
        if (((l = (l + 1) % t), l === f && (f = (f + 1) % t), m - c < r))
          return;
        const k = y && m - y;
        return k ? Math.round((w * 1e3) / k) : void 0;
      }
    );
  }
  function mS(t, r) {
    let i = 0,
      o = 1e3 / r,
      l,
      f;
    const c = (m, y = Date.now()) => {
      (i = y), (l = null), f && (clearTimeout(f), (f = null)), t.apply(null, m);
    };
    return [
      (...m) => {
        const y = Date.now(),
          v = y - i;
        v >= o
          ? c(m, y)
          : ((l = m),
            f ||
              (f = setTimeout(() => {
                (f = null), c(l);
              }, o - v)));
      },
      () => l && c(l),
    ];
  }
  const fa = (t, r, i = 3) => {
      let o = 0;
      const l = hS(50, 250);
      return mS((f) => {
        const c = f.loaded,
          p = f.lengthComputable ? f.total : void 0,
          h = c - o,
          m = l(h),
          y = c <= p;
        o = c;
        const v = {
          loaded: c,
          total: p,
          progress: p ? c / p : void 0,
          bytes: h,
          rate: m || void 0,
          estimated: m && p && y ? (p - c) / m : void 0,
          event: f,
          lengthComputable: p != null,
          [r ? "download" : "upload"]: !0,
        };
        t(v);
      }, i);
    },
    j0 = (t, r) => {
      const i = t != null;
      return [(o) => r[0]({ lengthComputable: i, total: t, loaded: o }), r[1]];
    },
    O0 =
      (t) =>
      (...r) =>
        N.asap(() => t(...r)),
    gS = ft.hasStandardBrowserEnv
      ? ((t, r) => (i) => (
          (i = new URL(i, ft.origin)),
          t.protocol === i.protocol &&
            t.host === i.host &&
            (r || t.port === i.port)
        ))(
          new URL(ft.origin),
          ft.navigator && /(msie|trident)/i.test(ft.navigator.userAgent)
        )
      : () => !0,
    yS = ft.hasStandardBrowserEnv
      ? {
          write(t, r, i, o, l, f) {
            const c = [t + "=" + encodeURIComponent(r)];
            N.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()),
              N.isString(o) && c.push("path=" + o),
              N.isString(l) && c.push("domain=" + l),
              f === !0 && c.push("secure"),
              (document.cookie = c.join("; "));
          },
          read(t) {
            const r = document.cookie.match(
              new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
            );
            return r ? decodeURIComponent(r[3]) : null;
          },
          remove(t) {
            this.write(t, "", Date.now() - 864e5);
          },
        }
      : {
          write() {},
          read() {
            return null;
          },
          remove() {},
        };
  function vS(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  }
  function wS(t, r) {
    return r ? t.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : t;
  }
  function s1(t, r, i) {
    let o = !vS(r);
    return (t && o) || i == !1 ? wS(t, r) : r;
  }
  const M0 = (t) => (t instanceof Et ? { ...t } : t);
  function Tr(t, r) {
    r = r || {};
    const i = {};
    function o(m, y, v, w) {
      return N.isPlainObject(m) && N.isPlainObject(y)
        ? N.merge.call({ caseless: w }, m, y)
        : N.isPlainObject(y)
        ? N.merge({}, y)
        : N.isArray(y)
        ? y.slice()
        : y;
    }
    function l(m, y, v, w) {
      if (N.isUndefined(y)) {
        if (!N.isUndefined(m)) return o(void 0, m, v, w);
      } else return o(m, y, v, w);
    }
    function f(m, y) {
      if (!N.isUndefined(y)) return o(void 0, y);
    }
    function c(m, y) {
      if (N.isUndefined(y)) {
        if (!N.isUndefined(m)) return o(void 0, m);
      } else return o(void 0, y);
    }
    function p(m, y, v) {
      if (v in r) return o(m, y);
      if (v in t) return o(void 0, m);
    }
    const h = {
      url: f,
      method: f,
      data: f,
      baseURL: c,
      transformRequest: c,
      transformResponse: c,
      paramsSerializer: c,
      timeout: c,
      timeoutMessage: c,
      withCredentials: c,
      withXSRFToken: c,
      adapter: c,
      responseType: c,
      xsrfCookieName: c,
      xsrfHeaderName: c,
      onUploadProgress: c,
      onDownloadProgress: c,
      decompress: c,
      maxContentLength: c,
      maxBodyLength: c,
      beforeRedirect: c,
      transport: c,
      httpAgent: c,
      httpsAgent: c,
      cancelToken: c,
      socketPath: c,
      responseEncoding: c,
      validateStatus: p,
      headers: (m, y, v) => l(M0(m), M0(y), v, !0),
    };
    return (
      N.forEach(Object.keys(Object.assign({}, t, r)), function (y) {
        const v = h[y] || l,
          w = v(t[y], r[y], y);
        (N.isUndefined(w) && v !== p) || (i[y] = w);
      }),
      i
    );
  }
  const o1 = (t) => {
      const r = Tr({}, t);
      let {
        data: i,
        withXSRFToken: o,
        xsrfHeaderName: l,
        xsrfCookieName: f,
        headers: c,
        auth: p,
      } = r;
      (r.headers = c = Et.from(c)),
        (r.url = e1(s1(r.baseURL, r.url), t.params, t.paramsSerializer)),
        p &&
          c.set(
            "Authorization",
            "Basic " +
              btoa(
                (p.username || "") +
                  ":" +
                  (p.password ? unescape(encodeURIComponent(p.password)) : "")
              )
          );
      let h;
      if (N.isFormData(i)) {
        if (ft.hasStandardBrowserEnv || ft.hasStandardBrowserWebWorkerEnv)
          c.setContentType(void 0);
        else if ((h = c.getContentType()) !== !1) {
          const [m, ...y] = h
            ? h
                .split(";")
                .map((v) => v.trim())
                .filter(Boolean)
            : [];
          c.setContentType([m || "multipart/form-data", ...y].join("; "));
        }
      }
      if (
        ft.hasStandardBrowserEnv &&
        (o && N.isFunction(o) && (o = o(r)), o || (o !== !1 && gS(r.url)))
      ) {
        const m = l && f && yS.read(f);
        m && c.set(l, m);
      }
      return r;
    },
    xS = typeof XMLHttpRequest < "u",
    CS =
      xS &&
      function (t) {
        return new Promise(function (i, o) {
          const l = o1(t);
          let f = l.data;
          const c = Et.from(l.headers).normalize();
          let {
              responseType: p,
              onUploadProgress: h,
              onDownloadProgress: m,
            } = l,
            y,
            v,
            w,
            k,
            S;
          function T() {
            k && k(),
              S && S(),
              l.cancelToken && l.cancelToken.unsubscribe(y),
              l.signal && l.signal.removeEventListener("abort", y);
          }
          let P = new XMLHttpRequest();
          P.open(l.method.toUpperCase(), l.url, !0), (P.timeout = l.timeout);
          function b() {
            if (!P) return;
            const V = Et.from(
                "getAllResponseHeaders" in P && P.getAllResponseHeaders()
              ),
              M = {
                data:
                  !p || p === "text" || p === "json"
                    ? P.responseText
                    : P.response,
                status: P.status,
                statusText: P.statusText,
                headers: V,
                config: t,
                request: P,
              };
            i1(
              function (Z) {
                i(Z), T();
              },
              function (Z) {
                o(Z), T();
              },
              M
            ),
              (P = null);
          }
          "onloadend" in P
            ? (P.onloadend = b)
            : (P.onreadystatechange = function () {
                !P ||
                  P.readyState !== 4 ||
                  (P.status === 0 &&
                    !(P.responseURL && P.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(b);
              }),
            (P.onabort = function () {
              P &&
                (o(new fe("Request aborted", fe.ECONNABORTED, t, P)),
                (P = null));
            }),
            (P.onerror = function () {
              o(new fe("Network Error", fe.ERR_NETWORK, t, P)), (P = null);
            }),
            (P.ontimeout = function () {
              let J = l.timeout
                ? "timeout of " + l.timeout + "ms exceeded"
                : "timeout exceeded";
              const M = l.transitional || t1;
              l.timeoutErrorMessage && (J = l.timeoutErrorMessage),
                o(
                  new fe(
                    J,
                    M.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
                    t,
                    P
                  )
                ),
                (P = null);
            }),
            f === void 0 && c.setContentType(null),
            "setRequestHeader" in P &&
              N.forEach(c.toJSON(), function (J, M) {
                P.setRequestHeader(M, J);
              }),
            N.isUndefined(l.withCredentials) ||
              (P.withCredentials = !!l.withCredentials),
            p && p !== "json" && (P.responseType = l.responseType),
            m && (([w, S] = fa(m, !0)), P.addEventListener("progress", w)),
            h &&
              P.upload &&
              (([v, k] = fa(h)),
              P.upload.addEventListener("progress", v),
              P.upload.addEventListener("loadend", k)),
            (l.cancelToken || l.signal) &&
              ((y = (V) => {
                P &&
                  (o(!V || V.type ? new mi(null, t, P) : V),
                  P.abort(),
                  (P = null));
              }),
              l.cancelToken && l.cancelToken.subscribe(y),
              l.signal &&
                (l.signal.aborted
                  ? y()
                  : l.signal.addEventListener("abort", y)));
          const I = pS(l.url);
          if (I && ft.protocols.indexOf(I) === -1) {
            o(new fe("Unsupported protocol " + I + ":", fe.ERR_BAD_REQUEST, t));
            return;
          }
          P.send(f || null);
        });
      },
    AS = (t, r) => {
      const { length: i } = (t = t ? t.filter(Boolean) : []);
      if (r || i) {
        let o = new AbortController(),
          l;
        const f = function (m) {
          if (!l) {
            (l = !0), p();
            const y = m instanceof Error ? m : this.reason;
            o.abort(
              y instanceof fe ? y : new mi(y instanceof Error ? y.message : y)
            );
          }
        };
        let c =
          r &&
          setTimeout(() => {
            (c = null), f(new fe(`timeout ${r} of ms exceeded`, fe.ETIMEDOUT));
          }, r);
        const p = () => {
          t &&
            (c && clearTimeout(c),
            (c = null),
            t.forEach((m) => {
              m.unsubscribe
                ? m.unsubscribe(f)
                : m.removeEventListener("abort", f);
            }),
            (t = null));
        };
        t.forEach((m) => m.addEventListener("abort", f));
        const { signal: h } = o;
        return (h.unsubscribe = () => N.asap(p)), h;
      }
    },
    SS = function* (t, r) {
      let i = t.byteLength;
      if (i < r) {
        yield t;
        return;
      }
      let o = 0,
        l;
      for (; o < i; ) (l = o + r), yield t.slice(o, l), (o = l);
    },
    ES = async function* (t, r) {
      for await (const i of TS(t)) yield* SS(i, r);
    },
    TS = async function* (t) {
      if (t[Symbol.asyncIterator]) {
        yield* t;
        return;
      }
      const r = t.getReader();
      try {
        for (;;) {
          const { done: i, value: o } = await r.read();
          if (i) break;
          yield o;
        }
      } finally {
        await r.cancel();
      }
    },
    L0 = (t, r, i, o) => {
      const l = ES(t, r);
      let f = 0,
        c,
        p = (h) => {
          c || ((c = !0), o && o(h));
        };
      return new ReadableStream(
        {
          async pull(h) {
            try {
              const { done: m, value: y } = await l.next();
              if (m) {
                p(), h.close();
                return;
              }
              let v = y.byteLength;
              if (i) {
                let w = (f += v);
                i(w);
              }
              h.enqueue(new Uint8Array(y));
            } catch (m) {
              throw (p(m), m);
            }
          },
          cancel(h) {
            return p(h), l.return();
          },
        },
        { highWaterMark: 2 }
      );
    },
    Aa =
      typeof fetch == "function" &&
      typeof Request == "function" &&
      typeof Response == "function",
    a1 = Aa && typeof ReadableStream == "function",
    PS =
      Aa &&
      (typeof TextEncoder == "function"
        ? (
            (t) => (r) =>
              t.encode(r)
          )(new TextEncoder())
        : async (t) => new Uint8Array(await new Response(t).arrayBuffer())),
    l1 = (t, ...r) => {
      try {
        return !!t(...r);
      } catch {
        return !1;
      }
    },
    kS =
      a1 &&
      l1(() => {
        let t = !1;
        const r = new Request(ft.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (t = !0), "half";
          },
        }).headers.has("Content-Type");
        return t && !r;
      }),
    D0 = 64 * 1024,
    cc = a1 && l1(() => N.isReadableStream(new Response("").body)),
    da = { stream: cc && ((t) => t.body) };
  Aa &&
    ((t) => {
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
        !da[r] &&
          (da[r] = N.isFunction(t[r])
            ? (i) => i[r]()
            : (i, o) => {
                throw new fe(
                  `Response type '${r}' is not supported`,
                  fe.ERR_NOT_SUPPORT,
                  o
                );
              });
      });
    })(new Response());
  const RS = async (t) => {
      if (t == null) return 0;
      if (N.isBlob(t)) return t.size;
      if (N.isSpecCompliantForm(t))
        return (
          await new Request(ft.origin, {
            method: "POST",
            body: t,
          }).arrayBuffer()
        ).byteLength;
      if (N.isArrayBufferView(t) || N.isArrayBuffer(t)) return t.byteLength;
      if ((N.isURLSearchParams(t) && (t = t + ""), N.isString(t)))
        return (await PS(t)).byteLength;
    },
    jS = async (t, r) => {
      const i = N.toFiniteNumber(t.getContentLength());
      return i ?? RS(r);
    },
    OS =
      Aa &&
      (async (t) => {
        let {
          url: r,
          method: i,
          data: o,
          signal: l,
          cancelToken: f,
          timeout: c,
          onDownloadProgress: p,
          onUploadProgress: h,
          responseType: m,
          headers: y,
          withCredentials: v = "same-origin",
          fetchOptions: w,
        } = o1(t);
        m = m ? (m + "").toLowerCase() : "text";
        let k = AS([l, f && f.toAbortSignal()], c),
          S;
        const T =
          k &&
          k.unsubscribe &&
          (() => {
            k.unsubscribe();
          });
        let P;
        try {
          if (
            h &&
            kS &&
            i !== "get" &&
            i !== "head" &&
            (P = await jS(y, o)) !== 0
          ) {
            let M = new Request(r, { method: "POST", body: o, duplex: "half" }),
              z;
            if (
              (N.isFormData(o) &&
                (z = M.headers.get("content-type")) &&
                y.setContentType(z),
              M.body)
            ) {
              const [Z, te] = j0(P, fa(O0(h)));
              o = L0(M.body, D0, Z, te);
            }
          }
          N.isString(v) || (v = v ? "include" : "omit");
          const b = "credentials" in Request.prototype;
          S = new Request(r, {
            ...w,
            signal: k,
            method: i.toUpperCase(),
            headers: y.normalize().toJSON(),
            body: o,
            duplex: "half",
            credentials: b ? v : void 0,
          });
          let I = await fetch(S);
          const V = cc && (m === "stream" || m === "response");
          if (cc && (p || (V && T))) {
            const M = {};
            ["status", "statusText", "headers"].forEach((Ae) => {
              M[Ae] = I[Ae];
            });
            const z = N.toFiniteNumber(I.headers.get("content-length")),
              [Z, te] = (p && j0(z, fa(O0(p), !0))) || [];
            I = new Response(
              L0(I.body, D0, Z, () => {
                te && te(), T && T();
              }),
              M
            );
          }
          m = m || "text";
          let J = await da[N.findKey(da, m) || "text"](I, t);
          return (
            !V && T && T(),
            await new Promise((M, z) => {
              i1(M, z, {
                data: J,
                headers: Et.from(I.headers),
                status: I.status,
                statusText: I.statusText,
                config: t,
                request: S,
              });
            })
          );
        } catch (b) {
          throw (
            (T && T(),
            b && b.name === "TypeError" && /fetch/i.test(b.message)
              ? Object.assign(new fe("Network Error", fe.ERR_NETWORK, t, S), {
                  cause: b.cause || b,
                })
              : fe.from(b, b && b.code, t, S))
          );
        }
      }),
    fc = { http: $A, xhr: CS, fetch: OS };
  N.forEach(fc, (t, r) => {
    if (t) {
      try {
        Object.defineProperty(t, "name", { value: r });
      } catch {}
      Object.defineProperty(t, "adapterName", { value: r });
    }
  });
  const N0 = (t) => `- ${t}`,
    MS = (t) => N.isFunction(t) || t === null || t === !1,
    u1 = {
      getAdapter: (t) => {
        t = N.isArray(t) ? t : [t];
        const { length: r } = t;
        let i, o;
        const l = {};
        for (let f = 0; f < r; f++) {
          i = t[f];
          let c;
          if (
            ((o = i),
            !MS(i) && ((o = fc[(c = String(i)).toLowerCase()]), o === void 0))
          )
            throw new fe(`Unknown adapter '${c}'`);
          if (o) break;
          l[c || "#" + f] = o;
        }
        if (!o) {
          const f = Object.entries(l).map(
            ([p, h]) =>
              `adapter ${p} ` +
              (h === !1
                ? "is not supported by the environment"
                : "is not available in the build")
          );
          let c = r
            ? f.length > 1
              ? `since :
` +
                f.map(N0).join(`
`)
              : " " + N0(f[0])
            : "as no adapter specified";
          throw new fe(
            "There is no suitable adapter to dispatch the request " + c,
            "ERR_NOT_SUPPORT"
          );
        }
        return o;
      },
      adapters: fc,
    };
  function Bu(t) {
    if (
      (t.cancelToken && t.cancelToken.throwIfRequested(),
      t.signal && t.signal.aborted)
    )
      throw new mi(null, t);
  }
  function b0(t) {
    return (
      Bu(t),
      (t.headers = Et.from(t.headers)),
      (t.data = Fu.call(t, t.transformRequest)),
      ["post", "put", "patch"].indexOf(t.method) !== -1 &&
        t.headers.setContentType("application/x-www-form-urlencoded", !1),
      u1
        .getAdapter(t.adapter || Os.adapter)(t)
        .then(
          function (o) {
            return (
              Bu(t),
              (o.data = Fu.call(t, t.transformResponse, o)),
              (o.headers = Et.from(o.headers)),
              o
            );
          },
          function (o) {
            return (
              r1(o) ||
                (Bu(t),
                o &&
                  o.response &&
                  ((o.response.data = Fu.call(
                    t,
                    t.transformResponse,
                    o.response
                  )),
                  (o.response.headers = Et.from(o.response.headers)))),
              Promise.reject(o)
            );
          }
        )
    );
  }
  const c1 = "1.8.2",
    Sa = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (t, r) => {
      Sa[t] = function (o) {
        return typeof o === t || "a" + (r < 1 ? "n " : " ") + t;
      };
    }
  );
  const F0 = {};
  Sa.transitional = function (r, i, o) {
    function l(f, c) {
      return (
        "[Axios v" +
        c1 +
        "] Transitional option '" +
        f +
        "'" +
        c +
        (o ? ". " + o : "")
      );
    }
    return (f, c, p) => {
      if (r === !1)
        throw new fe(
          l(c, " has been removed" + (i ? " in " + i : "")),
          fe.ERR_DEPRECATED
        );
      return (
        i &&
          !F0[c] &&
          ((F0[c] = !0),
          console.warn(
            l(
              c,
              " has been deprecated since v" +
                i +
                " and will be removed in the near future"
            )
          )),
        r ? r(f, c, p) : !0
      );
    };
  };
  Sa.spelling = function (r) {
    return (i, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
  };
  function LS(t, r, i) {
    if (typeof t != "object")
      throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
    const o = Object.keys(t);
    let l = o.length;
    for (; l-- > 0; ) {
      const f = o[l],
        c = r[f];
      if (c) {
        const p = t[f],
          h = p === void 0 || c(p, f, t);
        if (h !== !0)
          throw new fe(
            "option " + f + " must be " + h,
            fe.ERR_BAD_OPTION_VALUE
          );
        continue;
      }
      if (i !== !0) throw new fe("Unknown option " + f, fe.ERR_BAD_OPTION);
    }
  }
  const ia = { assertOptions: LS, validators: Sa },
    on = ia.validators;
  let Sr = class {
    constructor(r) {
      (this.defaults = r),
        (this.interceptors = { request: new k0(), response: new k0() });
    }
    async request(r, i) {
      try {
        return await this._request(r, i);
      } catch (o) {
        if (o instanceof Error) {
          let l = {};
          Error.captureStackTrace
            ? Error.captureStackTrace(l)
            : (l = new Error());
          const f = l.stack ? l.stack.replace(/^.+\n/, "") : "";
          try {
            o.stack
              ? f &&
                !String(o.stack).endsWith(f.replace(/^.+\n.+\n/, "")) &&
                (o.stack +=
                  `
` + f)
              : (o.stack = f);
          } catch {}
        }
        throw o;
      }
    }
    _request(r, i) {
      typeof r == "string" ? ((i = i || {}), (i.url = r)) : (i = r || {}),
        (i = Tr(this.defaults, i));
      const { transitional: o, paramsSerializer: l, headers: f } = i;
      o !== void 0 &&
        ia.assertOptions(
          o,
          {
            silentJSONParsing: on.transitional(on.boolean),
            forcedJSONParsing: on.transitional(on.boolean),
            clarifyTimeoutError: on.transitional(on.boolean),
          },
          !1
        ),
        l != null &&
          (N.isFunction(l)
            ? (i.paramsSerializer = { serialize: l })
            : ia.assertOptions(
                l,
                { encode: on.function, serialize: on.function },
                !0
              )),
        i.allowAbsoluteUrls !== void 0 ||
          (this.defaults.allowAbsoluteUrls !== void 0
            ? (i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
            : (i.allowAbsoluteUrls = !0)),
        ia.assertOptions(
          i,
          {
            baseUrl: on.spelling("baseURL"),
            withXsrfToken: on.spelling("withXSRFToken"),
          },
          !0
        ),
        (i.method = (i.method || this.defaults.method || "get").toLowerCase());
      let c = f && N.merge(f.common, f[i.method]);
      f &&
        N.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (S) => {
            delete f[S];
          }
        ),
        (i.headers = Et.concat(c, f));
      const p = [];
      let h = !0;
      this.interceptors.request.forEach(function (T) {
        (typeof T.runWhen == "function" && T.runWhen(i) === !1) ||
          ((h = h && T.synchronous), p.unshift(T.fulfilled, T.rejected));
      });
      const m = [];
      this.interceptors.response.forEach(function (T) {
        m.push(T.fulfilled, T.rejected);
      });
      let y,
        v = 0,
        w;
      if (!h) {
        const S = [b0.bind(this), void 0];
        for (
          S.unshift.apply(S, p),
            S.push.apply(S, m),
            w = S.length,
            y = Promise.resolve(i);
          v < w;

        )
          y = y.then(S[v++], S[v++]);
        return y;
      }
      w = p.length;
      let k = i;
      for (v = 0; v < w; ) {
        const S = p[v++],
          T = p[v++];
        try {
          k = S(k);
        } catch (P) {
          T.call(this, P);
          break;
        }
      }
      try {
        y = b0.call(this, k);
      } catch (S) {
        return Promise.reject(S);
      }
      for (v = 0, w = m.length; v < w; ) y = y.then(m[v++], m[v++]);
      return y;
    }
    getUri(r) {
      r = Tr(this.defaults, r);
      const i = s1(r.baseURL, r.url, r.allowAbsoluteUrls);
      return e1(i, r.params, r.paramsSerializer);
    }
  };
  N.forEach(["delete", "get", "head", "options"], function (r) {
    Sr.prototype[r] = function (i, o) {
      return this.request(
        Tr(o || {}, { method: r, url: i, data: (o || {}).data })
      );
    };
  });
  N.forEach(["post", "put", "patch"], function (r) {
    function i(o) {
      return function (f, c, p) {
        return this.request(
          Tr(p || {}, {
            method: r,
            headers: o ? { "Content-Type": "multipart/form-data" } : {},
            url: f,
            data: c,
          })
        );
      };
    }
    (Sr.prototype[r] = i()), (Sr.prototype[r + "Form"] = i(!0));
  });
  let DS = class f1 {
    constructor(r) {
      if (typeof r != "function")
        throw new TypeError("executor must be a function.");
      let i;
      this.promise = new Promise(function (f) {
        i = f;
      });
      const o = this;
      this.promise.then((l) => {
        if (!o._listeners) return;
        let f = o._listeners.length;
        for (; f-- > 0; ) o._listeners[f](l);
        o._listeners = null;
      }),
        (this.promise.then = (l) => {
          let f;
          const c = new Promise((p) => {
            o.subscribe(p), (f = p);
          }).then(l);
          return (
            (c.cancel = function () {
              o.unsubscribe(f);
            }),
            c
          );
        }),
        r(function (f, c, p) {
          o.reason || ((o.reason = new mi(f, c, p)), i(o.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(r) {
      if (this.reason) {
        r(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
    }
    unsubscribe(r) {
      if (!this._listeners) return;
      const i = this._listeners.indexOf(r);
      i !== -1 && this._listeners.splice(i, 1);
    }
    toAbortSignal() {
      const r = new AbortController(),
        i = (o) => {
          r.abort(o);
        };
      return (
        this.subscribe(i),
        (r.signal.unsubscribe = () => this.unsubscribe(i)),
        r.signal
      );
    }
    static source() {
      let r;
      return {
        token: new f1(function (l) {
          r = l;
        }),
        cancel: r,
      };
    }
  };
  function NS(t) {
    return function (i) {
      return t.apply(null, i);
    };
  }
  function bS(t) {
    return N.isObject(t) && t.isAxiosError === !0;
  }
  const dc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(dc).forEach(([t, r]) => {
    dc[r] = t;
  });
  function d1(t) {
    const r = new Sr(t),
      i = Q2(Sr.prototype.request, r);
    return (
      N.extend(i, Sr.prototype, r, { allOwnKeys: !0 }),
      N.extend(i, r, null, { allOwnKeys: !0 }),
      (i.create = function (l) {
        return d1(Tr(t, l));
      }),
      i
    );
  }
  const He = d1(Os);
  He.Axios = Sr;
  He.CanceledError = mi;
  He.CancelToken = DS;
  He.isCancel = r1;
  He.VERSION = c1;
  He.toFormData = Ca;
  He.AxiosError = fe;
  He.Cancel = He.CanceledError;
  He.all = function (r) {
    return Promise.all(r);
  };
  He.spread = NS;
  He.isAxiosError = bS;
  He.mergeConfig = Tr;
  He.AxiosHeaders = Et;
  He.formToJSON = (t) => n1(N.isHTMLForm(t) ? new FormData(t) : t);
  He.getAdapter = u1.getAdapter;
  He.HttpStatusCode = dc;
  He.default = He;
  const {
    Axios: r5,
    AxiosError: i5,
    CanceledError: s5,
    isCancel: o5,
    CancelToken: a5,
    VERSION: l5,
    all: u5,
    Cancel: c5,
    isAxiosError: f5,
    spread: d5,
    toFormData: p5,
    AxiosHeaders: h5,
    HttpStatusCode: m5,
    formToJSON: g5,
    getAdapter: y5,
    mergeConfig: v5,
  } = He;
  var FS = function (r) {
    return BS(r) && !IS(r);
  };
  function BS(t) {
    return !!t && typeof t == "object";
  }
  function IS(t) {
    var r = Object.prototype.toString.call(t);
    return r === "[object RegExp]" || r === "[object Date]" || US(t);
  }
  var VS = typeof Symbol == "function" && Symbol.for,
    _S = VS ? Symbol.for("react.element") : 60103;
  function US(t) {
    return t.$$typeof === _S;
  }
  function zS(t) {
    return Array.isArray(t) ? [] : {};
  }
  function pa(t, r) {
    return r.clone !== !1 && r.isMergeableObject(t) ? As(zS(t), t, r) : t;
  }
  function QS(t, r, i) {
    return t.concat(r).map(function (o) {
      return pa(o, i);
    });
  }
  function HS(t, r, i) {
    var o = {};
    return (
      i.isMergeableObject(t) &&
        Object.keys(t).forEach(function (l) {
          o[l] = pa(t[l], i);
        }),
      Object.keys(r).forEach(function (l) {
        !i.isMergeableObject(r[l]) || !t[l]
          ? (o[l] = pa(r[l], i))
          : (o[l] = As(t[l], r[l], i));
      }),
      o
    );
  }
  function As(t, r, i) {
    (i = i || {}),
      (i.arrayMerge = i.arrayMerge || QS),
      (i.isMergeableObject = i.isMergeableObject || FS);
    var o = Array.isArray(r),
      l = Array.isArray(t),
      f = o === l;
    return f ? (o ? i.arrayMerge(t, r, i) : HS(t, r, i)) : pa(r, i);
  }
  As.all = function (r, i) {
    if (!Array.isArray(r)) throw new Error("first argument should be an array");
    return r.reduce(function (o, l) {
      return As(o, l, i);
    }, {});
  };
  var pc = As,
    p1 =
      typeof global == "object" && global && global.Object === Object && global,
    $S = typeof self == "object" && self && self.Object === Object && self,
    un = p1 || $S || Function("return this")(),
    Yn = un.Symbol,
    h1 = Object.prototype,
    WS = h1.hasOwnProperty,
    ZS = h1.toString,
    ss = Yn ? Yn.toStringTag : void 0;
  function KS(t) {
    var r = WS.call(t, ss),
      i = t[ss];
    try {
      t[ss] = void 0;
      var o = !0;
    } catch {}
    var l = ZS.call(t);
    return o && (r ? (t[ss] = i) : delete t[ss]), l;
  }
  var GS = Object.prototype,
    qS = GS.toString;
  function YS(t) {
    return qS.call(t);
  }
  var XS = "[object Null]",
    JS = "[object Undefined]",
    B0 = Yn ? Yn.toStringTag : void 0;
  function Rr(t) {
    return t == null
      ? t === void 0
        ? JS
        : XS
      : B0 && B0 in Object(t)
      ? KS(t)
      : YS(t);
  }
  function m1(t, r) {
    return function (i) {
      return t(r(i));
    };
  }
  var sf = m1(Object.getPrototypeOf, Object);
  function jr(t) {
    return t != null && typeof t == "object";
  }
  var e4 = "[object Object]",
    t4 = Function.prototype,
    n4 = Object.prototype,
    g1 = t4.toString,
    r4 = n4.hasOwnProperty,
    i4 = g1.call(Object);
  function I0(t) {
    if (!jr(t) || Rr(t) != e4) return !1;
    var r = sf(t);
    if (r === null) return !0;
    var i = r4.call(r, "constructor") && r.constructor;
    return typeof i == "function" && i instanceof i && g1.call(i) == i4;
  }
  function s4() {
    (this.__data__ = []), (this.size = 0);
  }
  function y1(t, r) {
    return t === r || (t !== t && r !== r);
  }
  function Ea(t, r) {
    for (var i = t.length; i--; ) if (y1(t[i][0], r)) return i;
    return -1;
  }
  var o4 = Array.prototype,
    a4 = o4.splice;
  function l4(t) {
    var r = this.__data__,
      i = Ea(r, t);
    if (i < 0) return !1;
    var o = r.length - 1;
    return i == o ? r.pop() : a4.call(r, i, 1), --this.size, !0;
  }
  function u4(t) {
    var r = this.__data__,
      i = Ea(r, t);
    return i < 0 ? void 0 : r[i][1];
  }
  function c4(t) {
    return Ea(this.__data__, t) > -1;
  }
  function f4(t, r) {
    var i = this.__data__,
      o = Ea(i, t);
    return o < 0 ? (++this.size, i.push([t, r])) : (i[o][1] = r), this;
  }
  function Pn(t) {
    var r = -1,
      i = t == null ? 0 : t.length;
    for (this.clear(); ++r < i; ) {
      var o = t[r];
      this.set(o[0], o[1]);
    }
  }
  Pn.prototype.clear = s4;
  Pn.prototype.delete = l4;
  Pn.prototype.get = u4;
  Pn.prototype.has = c4;
  Pn.prototype.set = f4;
  function d4() {
    (this.__data__ = new Pn()), (this.size = 0);
  }
  function p4(t) {
    var r = this.__data__,
      i = r.delete(t);
    return (this.size = r.size), i;
  }
  function h4(t) {
    return this.__data__.get(t);
  }
  function m4(t) {
    return this.__data__.has(t);
  }
  function Ms(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  var g4 = "[object AsyncFunction]",
    y4 = "[object Function]",
    v4 = "[object GeneratorFunction]",
    w4 = "[object Proxy]";
  function v1(t) {
    if (!Ms(t)) return !1;
    var r = Rr(t);
    return r == y4 || r == v4 || r == g4 || r == w4;
  }
  var Iu = un["__core-js_shared__"],
    V0 = (function () {
      var t = /[^.]+$/.exec((Iu && Iu.keys && Iu.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })();
  function x4(t) {
    return !!V0 && V0 in t;
  }
  var C4 = Function.prototype,
    A4 = C4.toString;
  function Or(t) {
    if (t != null) {
      try {
        return A4.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var S4 = /[\\^$.*+?()[\]{}|]/g,
    E4 = /^\[object .+?Constructor\]$/,
    T4 = Function.prototype,
    P4 = Object.prototype,
    k4 = T4.toString,
    R4 = P4.hasOwnProperty,
    j4 = RegExp(
      "^" +
        k4
          .call(R4)
          .replace(S4, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function O4(t) {
    if (!Ms(t) || x4(t)) return !1;
    var r = v1(t) ? j4 : E4;
    return r.test(Or(t));
  }
  function M4(t, r) {
    return t == null ? void 0 : t[r];
  }
  function Mr(t, r) {
    var i = M4(t, r);
    return O4(i) ? i : void 0;
  }
  var Ss = Mr(un, "Map"),
    Es = Mr(Object, "create");
  function L4() {
    (this.__data__ = Es ? Es(null) : {}), (this.size = 0);
  }
  function D4(t) {
    var r = this.has(t) && delete this.__data__[t];
    return (this.size -= r ? 1 : 0), r;
  }
  var N4 = "__lodash_hash_undefined__",
    b4 = Object.prototype,
    F4 = b4.hasOwnProperty;
  function B4(t) {
    var r = this.__data__;
    if (Es) {
      var i = r[t];
      return i === N4 ? void 0 : i;
    }
    return F4.call(r, t) ? r[t] : void 0;
  }
  var I4 = Object.prototype,
    V4 = I4.hasOwnProperty;
  function _4(t) {
    var r = this.__data__;
    return Es ? r[t] !== void 0 : V4.call(r, t);
  }
  var U4 = "__lodash_hash_undefined__";
  function z4(t, r) {
    var i = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (i[t] = Es && r === void 0 ? U4 : r),
      this
    );
  }
  function Pr(t) {
    var r = -1,
      i = t == null ? 0 : t.length;
    for (this.clear(); ++r < i; ) {
      var o = t[r];
      this.set(o[0], o[1]);
    }
  }
  Pr.prototype.clear = L4;
  Pr.prototype.delete = D4;
  Pr.prototype.get = B4;
  Pr.prototype.has = _4;
  Pr.prototype.set = z4;
  function Q4() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Pr(),
        map: new (Ss || Pn)(),
        string: new Pr(),
      });
  }
  function H4(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean"
      ? t !== "__proto__"
      : t === null;
  }
  function Ta(t, r) {
    var i = t.__data__;
    return H4(r) ? i[typeof r == "string" ? "string" : "hash"] : i.map;
  }
  function $4(t) {
    var r = Ta(this, t).delete(t);
    return (this.size -= r ? 1 : 0), r;
  }
  function W4(t) {
    return Ta(this, t).get(t);
  }
  function Z4(t) {
    return Ta(this, t).has(t);
  }
  function K4(t, r) {
    var i = Ta(this, t),
      o = i.size;
    return i.set(t, r), (this.size += i.size == o ? 0 : 1), this;
  }
  function Jn(t) {
    var r = -1,
      i = t == null ? 0 : t.length;
    for (this.clear(); ++r < i; ) {
      var o = t[r];
      this.set(o[0], o[1]);
    }
  }
  Jn.prototype.clear = Q4;
  Jn.prototype.delete = $4;
  Jn.prototype.get = W4;
  Jn.prototype.has = Z4;
  Jn.prototype.set = K4;
  var G4 = 200;
  function q4(t, r) {
    var i = this.__data__;
    if (i instanceof Pn) {
      var o = i.__data__;
      if (!Ss || o.length < G4 - 1)
        return o.push([t, r]), (this.size = ++i.size), this;
      i = this.__data__ = new Jn(o);
    }
    return i.set(t, r), (this.size = i.size), this;
  }
  function gi(t) {
    var r = (this.__data__ = new Pn(t));
    this.size = r.size;
  }
  gi.prototype.clear = d4;
  gi.prototype.delete = p4;
  gi.prototype.get = h4;
  gi.prototype.has = m4;
  gi.prototype.set = q4;
  function Y4(t, r) {
    for (
      var i = -1, o = t == null ? 0 : t.length;
      ++i < o && r(t[i], i, t) !== !1;

    );
    return t;
  }
  var _0 = (function () {
    try {
      var t = Mr(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {}
  })();
  function w1(t, r, i) {
    r == "__proto__" && _0
      ? _0(t, r, { configurable: !0, enumerable: !0, value: i, writable: !0 })
      : (t[r] = i);
  }
  var X4 = Object.prototype,
    J4 = X4.hasOwnProperty;
  function x1(t, r, i) {
    var o = t[r];
    (!(J4.call(t, r) && y1(o, i)) || (i === void 0 && !(r in t))) &&
      w1(t, r, i);
  }
  function Pa(t, r, i, o) {
    var l = !i;
    i || (i = {});
    for (var f = -1, c = r.length; ++f < c; ) {
      var p = r[f],
        h = void 0;
      h === void 0 && (h = t[p]), l ? w1(i, p, h) : x1(i, p, h);
    }
    return i;
  }
  function eE(t, r) {
    for (var i = -1, o = Array(t); ++i < t; ) o[i] = r(i);
    return o;
  }
  var tE = "[object Arguments]";
  function U0(t) {
    return jr(t) && Rr(t) == tE;
  }
  var C1 = Object.prototype,
    nE = C1.hasOwnProperty,
    rE = C1.propertyIsEnumerable,
    iE = U0(
      (function () {
        return arguments;
      })()
    )
      ? U0
      : function (t) {
          return jr(t) && nE.call(t, "callee") && !rE.call(t, "callee");
        },
    Ls = Array.isArray;
  function sE() {
    return !1;
  }
  var A1 = typeof Ot == "object" && Ot && !Ot.nodeType && Ot,
    z0 = A1 && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
    oE = z0 && z0.exports === A1,
    Q0 = oE ? un.Buffer : void 0,
    aE = Q0 ? Q0.isBuffer : void 0,
    S1 = aE || sE,
    lE = 9007199254740991,
    uE = /^(?:0|[1-9]\d*)$/;
  function cE(t, r) {
    var i = typeof t;
    return (
      (r = r ?? lE),
      !!r &&
        (i == "number" || (i != "symbol" && uE.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < r
    );
  }
  var fE = 9007199254740991;
  function E1(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= fE;
  }
  var dE = "[object Arguments]",
    pE = "[object Array]",
    hE = "[object Boolean]",
    mE = "[object Date]",
    gE = "[object Error]",
    yE = "[object Function]",
    vE = "[object Map]",
    wE = "[object Number]",
    xE = "[object Object]",
    CE = "[object RegExp]",
    AE = "[object Set]",
    SE = "[object String]",
    EE = "[object WeakMap]",
    TE = "[object ArrayBuffer]",
    PE = "[object DataView]",
    kE = "[object Float32Array]",
    RE = "[object Float64Array]",
    jE = "[object Int8Array]",
    OE = "[object Int16Array]",
    ME = "[object Int32Array]",
    LE = "[object Uint8Array]",
    DE = "[object Uint8ClampedArray]",
    NE = "[object Uint16Array]",
    bE = "[object Uint32Array]",
    Ne = {};
  Ne[kE] =
    Ne[RE] =
    Ne[jE] =
    Ne[OE] =
    Ne[ME] =
    Ne[LE] =
    Ne[DE] =
    Ne[NE] =
    Ne[bE] =
      !0;
  Ne[dE] =
    Ne[pE] =
    Ne[TE] =
    Ne[hE] =
    Ne[PE] =
    Ne[mE] =
    Ne[gE] =
    Ne[yE] =
    Ne[vE] =
    Ne[wE] =
    Ne[xE] =
    Ne[CE] =
    Ne[AE] =
    Ne[SE] =
    Ne[EE] =
      !1;
  function FE(t) {
    return jr(t) && E1(t.length) && !!Ne[Rr(t)];
  }
  function of(t) {
    return function (r) {
      return t(r);
    };
  }
  var T1 = typeof Ot == "object" && Ot && !Ot.nodeType && Ot,
    ds = T1 && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
    BE = ds && ds.exports === T1,
    Vu = BE && p1.process,
    fi = (function () {
      try {
        var t = ds && ds.require && ds.require("util").types;
        return t || (Vu && Vu.binding && Vu.binding("util"));
      } catch {}
    })(),
    H0 = fi && fi.isTypedArray,
    IE = H0 ? of(H0) : FE,
    VE = Object.prototype,
    _E = VE.hasOwnProperty;
  function P1(t, r) {
    var i = Ls(t),
      o = !i && iE(t),
      l = !i && !o && S1(t),
      f = !i && !o && !l && IE(t),
      c = i || o || l || f,
      p = c ? eE(t.length, String) : [],
      h = p.length;
    for (var m in t)
      (r || _E.call(t, m)) &&
        !(
          c &&
          (m == "length" ||
            (l && (m == "offset" || m == "parent")) ||
            (f && (m == "buffer" || m == "byteLength" || m == "byteOffset")) ||
            cE(m, h))
        ) &&
        p.push(m);
    return p;
  }
  var UE = Object.prototype;
  function af(t) {
    var r = t && t.constructor,
      i = (typeof r == "function" && r.prototype) || UE;
    return t === i;
  }
  var zE = m1(Object.keys, Object),
    QE = Object.prototype,
    HE = QE.hasOwnProperty;
  function $E(t) {
    if (!af(t)) return zE(t);
    var r = [];
    for (var i in Object(t)) HE.call(t, i) && i != "constructor" && r.push(i);
    return r;
  }
  function k1(t) {
    return t != null && E1(t.length) && !v1(t);
  }
  function lf(t) {
    return k1(t) ? P1(t) : $E(t);
  }
  function WE(t, r) {
    return t && Pa(r, lf(r), t);
  }
  function ZE(t) {
    var r = [];
    if (t != null) for (var i in Object(t)) r.push(i);
    return r;
  }
  var KE = Object.prototype,
    GE = KE.hasOwnProperty;
  function qE(t) {
    if (!Ms(t)) return ZE(t);
    var r = af(t),
      i = [];
    for (var o in t) (o == "constructor" && (r || !GE.call(t, o))) || i.push(o);
    return i;
  }
  function uf(t) {
    return k1(t) ? P1(t, !0) : qE(t);
  }
  function YE(t, r) {
    return t && Pa(r, uf(r), t);
  }
  var R1 = typeof Ot == "object" && Ot && !Ot.nodeType && Ot,
    $0 = R1 && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
    XE = $0 && $0.exports === R1,
    W0 = XE ? un.Buffer : void 0,
    Z0 = W0 ? W0.allocUnsafe : void 0;
  function JE(t, r) {
    if (r) return t.slice();
    var i = t.length,
      o = Z0 ? Z0(i) : new t.constructor(i);
    return t.copy(o), o;
  }
  function j1(t, r) {
    var i = -1,
      o = t.length;
    for (r || (r = Array(o)); ++i < o; ) r[i] = t[i];
    return r;
  }
  function e9(t, r) {
    for (var i = -1, o = t == null ? 0 : t.length, l = 0, f = []; ++i < o; ) {
      var c = t[i];
      r(c, i, t) && (f[l++] = c);
    }
    return f;
  }
  function O1() {
    return [];
  }
  var t9 = Object.prototype,
    n9 = t9.propertyIsEnumerable,
    K0 = Object.getOwnPropertySymbols,
    cf = K0
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              e9(K0(t), function (r) {
                return n9.call(t, r);
              }));
        }
      : O1;
  function r9(t, r) {
    return Pa(t, cf(t), r);
  }
  function M1(t, r) {
    for (var i = -1, o = r.length, l = t.length; ++i < o; ) t[l + i] = r[i];
    return t;
  }
  var i9 = Object.getOwnPropertySymbols,
    L1 = i9
      ? function (t) {
          for (var r = []; t; ) M1(r, cf(t)), (t = sf(t));
          return r;
        }
      : O1;
  function s9(t, r) {
    return Pa(t, L1(t), r);
  }
  function D1(t, r, i) {
    var o = r(t);
    return Ls(t) ? o : M1(o, i(t));
  }
  function o9(t) {
    return D1(t, lf, cf);
  }
  function a9(t) {
    return D1(t, uf, L1);
  }
  var hc = Mr(un, "DataView"),
    mc = Mr(un, "Promise"),
    gc = Mr(un, "Set"),
    yc = Mr(un, "WeakMap"),
    G0 = "[object Map]",
    l9 = "[object Object]",
    q0 = "[object Promise]",
    Y0 = "[object Set]",
    X0 = "[object WeakMap]",
    J0 = "[object DataView]",
    u9 = Or(hc),
    c9 = Or(Ss),
    f9 = Or(mc),
    d9 = Or(gc),
    p9 = Or(yc),
    xn = Rr;
  ((hc && xn(new hc(new ArrayBuffer(1))) != J0) ||
    (Ss && xn(new Ss()) != G0) ||
    (mc && xn(mc.resolve()) != q0) ||
    (gc && xn(new gc()) != Y0) ||
    (yc && xn(new yc()) != X0)) &&
    (xn = function (t) {
      var r = Rr(t),
        i = r == l9 ? t.constructor : void 0,
        o = i ? Or(i) : "";
      if (o)
        switch (o) {
          case u9:
            return J0;
          case c9:
            return G0;
          case f9:
            return q0;
          case d9:
            return Y0;
          case p9:
            return X0;
        }
      return r;
    });
  var h9 = Object.prototype,
    m9 = h9.hasOwnProperty;
  function g9(t) {
    var r = t.length,
      i = new t.constructor(r);
    return (
      r &&
        typeof t[0] == "string" &&
        m9.call(t, "index") &&
        ((i.index = t.index), (i.input = t.input)),
      i
    );
  }
  var em = un.Uint8Array;
  function ff(t) {
    var r = new t.constructor(t.byteLength);
    return new em(r).set(new em(t)), r;
  }
  function y9(t, r) {
    var i = r ? ff(t.buffer) : t.buffer;
    return new t.constructor(i, t.byteOffset, t.byteLength);
  }
  var v9 = /\w*$/;
  function w9(t) {
    var r = new t.constructor(t.source, v9.exec(t));
    return (r.lastIndex = t.lastIndex), r;
  }
  var tm = Yn ? Yn.prototype : void 0,
    nm = tm ? tm.valueOf : void 0;
  function x9(t) {
    return nm ? Object(nm.call(t)) : {};
  }
  function C9(t, r) {
    var i = r ? ff(t.buffer) : t.buffer;
    return new t.constructor(i, t.byteOffset, t.length);
  }
  var A9 = "[object Boolean]",
    S9 = "[object Date]",
    E9 = "[object Map]",
    T9 = "[object Number]",
    P9 = "[object RegExp]",
    k9 = "[object Set]",
    R9 = "[object String]",
    j9 = "[object Symbol]",
    O9 = "[object ArrayBuffer]",
    M9 = "[object DataView]",
    L9 = "[object Float32Array]",
    D9 = "[object Float64Array]",
    N9 = "[object Int8Array]",
    b9 = "[object Int16Array]",
    F9 = "[object Int32Array]",
    B9 = "[object Uint8Array]",
    I9 = "[object Uint8ClampedArray]",
    V9 = "[object Uint16Array]",
    _9 = "[object Uint32Array]";
  function U9(t, r, i) {
    var o = t.constructor;
    switch (r) {
      case O9:
        return ff(t);
      case A9:
      case S9:
        return new o(+t);
      case M9:
        return y9(t, i);
      case L9:
      case D9:
      case N9:
      case b9:
      case F9:
      case B9:
      case I9:
      case V9:
      case _9:
        return C9(t, i);
      case E9:
        return new o();
      case T9:
      case R9:
        return new o(t);
      case P9:
        return w9(t);
      case k9:
        return new o();
      case j9:
        return x9(t);
    }
  }
  var rm = Object.create,
    z9 = (function () {
      function t() {}
      return function (r) {
        if (!Ms(r)) return {};
        if (rm) return rm(r);
        t.prototype = r;
        var i = new t();
        return (t.prototype = void 0), i;
      };
    })();
  function Q9(t) {
    return typeof t.constructor == "function" && !af(t) ? z9(sf(t)) : {};
  }
  var H9 = "[object Map]";
  function $9(t) {
    return jr(t) && xn(t) == H9;
  }
  var im = fi && fi.isMap,
    W9 = im ? of(im) : $9,
    Z9 = "[object Set]";
  function K9(t) {
    return jr(t) && xn(t) == Z9;
  }
  var sm = fi && fi.isSet,
    G9 = sm ? of(sm) : K9,
    q9 = 1,
    Y9 = 2,
    X9 = 4,
    N1 = "[object Arguments]",
    J9 = "[object Array]",
    e6 = "[object Boolean]",
    t6 = "[object Date]",
    n6 = "[object Error]",
    b1 = "[object Function]",
    r6 = "[object GeneratorFunction]",
    i6 = "[object Map]",
    s6 = "[object Number]",
    F1 = "[object Object]",
    o6 = "[object RegExp]",
    a6 = "[object Set]",
    l6 = "[object String]",
    u6 = "[object Symbol]",
    c6 = "[object WeakMap]",
    f6 = "[object ArrayBuffer]",
    d6 = "[object DataView]",
    p6 = "[object Float32Array]",
    h6 = "[object Float64Array]",
    m6 = "[object Int8Array]",
    g6 = "[object Int16Array]",
    y6 = "[object Int32Array]",
    v6 = "[object Uint8Array]",
    w6 = "[object Uint8ClampedArray]",
    x6 = "[object Uint16Array]",
    C6 = "[object Uint32Array]",
    je = {};
  je[N1] =
    je[J9] =
    je[f6] =
    je[d6] =
    je[e6] =
    je[t6] =
    je[p6] =
    je[h6] =
    je[m6] =
    je[g6] =
    je[y6] =
    je[i6] =
    je[s6] =
    je[F1] =
    je[o6] =
    je[a6] =
    je[l6] =
    je[u6] =
    je[v6] =
    je[w6] =
    je[x6] =
    je[C6] =
      !0;
  je[n6] = je[b1] = je[c6] = !1;
  function ps(t, r, i, o, l, f) {
    var c,
      p = r & q9,
      h = r & Y9,
      m = r & X9;
    if (c !== void 0) return c;
    if (!Ms(t)) return t;
    var y = Ls(t);
    if (y) {
      if (((c = g9(t)), !p)) return j1(t, c);
    } else {
      var v = xn(t),
        w = v == b1 || v == r6;
      if (S1(t)) return JE(t, p);
      if (v == F1 || v == N1 || (w && !l)) {
        if (((c = h || w ? {} : Q9(t)), !p))
          return h ? s9(t, YE(c, t)) : r9(t, WE(c, t));
      } else {
        if (!je[v]) return l ? t : {};
        c = U9(t, v, p);
      }
    }
    f || (f = new gi());
    var k = f.get(t);
    if (k) return k;
    f.set(t, c),
      G9(t)
        ? t.forEach(function (P) {
            c.add(ps(P, r, i, P, t, f));
          })
        : W9(t) &&
          t.forEach(function (P, b) {
            c.set(b, ps(P, r, i, b, t, f));
          });
    var S = m ? (h ? a9 : o9) : h ? uf : lf,
      T = y ? void 0 : S(t);
    return (
      Y4(T || t, function (P, b) {
        T && ((b = P), (P = t[b])), x1(c, b, ps(P, r, i, b, t, f));
      }),
      c
    );
  }
  var A6 = 1,
    S6 = 4;
  function Yo(t) {
    return ps(t, A6 | S6);
  }
  var _u, om;
  function E6() {
    if (om) return _u;
    om = 1;
    var t = Array.isArray,
      r = Object.keys,
      i = Object.prototype.hasOwnProperty,
      o = typeof Element < "u";
    function l(f, c) {
      if (f === c) return !0;
      if (f && c && typeof f == "object" && typeof c == "object") {
        var p = t(f),
          h = t(c),
          m,
          y,
          v;
        if (p && h) {
          if (((y = f.length), y != c.length)) return !1;
          for (m = y; m-- !== 0; ) if (!l(f[m], c[m])) return !1;
          return !0;
        }
        if (p != h) return !1;
        var w = f instanceof Date,
          k = c instanceof Date;
        if (w != k) return !1;
        if (w && k) return f.getTime() == c.getTime();
        var S = f instanceof RegExp,
          T = c instanceof RegExp;
        if (S != T) return !1;
        if (S && T) return f.toString() == c.toString();
        var P = r(f);
        if (((y = P.length), y !== r(c).length)) return !1;
        for (m = y; m-- !== 0; ) if (!i.call(c, P[m])) return !1;
        if (o && f instanceof Element && c instanceof Element) return f === c;
        for (m = y; m-- !== 0; )
          if (((v = P[m]), !(v === "_owner" && f.$$typeof) && !l(f[v], c[v])))
            return !1;
        return !0;
      }
      return f !== f && c !== c;
    }
    return (
      (_u = function (c, p) {
        try {
          return l(c, p);
        } catch (h) {
          if (
            (h.message && h.message.match(/stack|recursion/i)) ||
            h.number === -2146828260
          )
            return (
              console.warn(
                "Warning: react-fast-compare does not handle circular references.",
                h.name,
                h.message
              ),
              !1
            );
          throw h;
        }
      }),
      _u
    );
  }
  var T6 = E6();
  const wr = wc(T6);
  var P6 = 4;
  function am(t) {
    return ps(t, P6);
  }
  function B1(t, r) {
    for (var i = -1, o = t == null ? 0 : t.length, l = Array(o); ++i < o; )
      l[i] = r(t[i], i, t);
    return l;
  }
  var k6 = "[object Symbol]";
  function df(t) {
    return typeof t == "symbol" || (jr(t) && Rr(t) == k6);
  }
  var R6 = "Expected a function";
  function pf(t, r) {
    if (typeof t != "function" || (r != null && typeof r != "function"))
      throw new TypeError(R6);
    var i = function () {
      var o = arguments,
        l = r ? r.apply(this, o) : o[0],
        f = i.cache;
      if (f.has(l)) return f.get(l);
      var c = t.apply(this, o);
      return (i.cache = f.set(l, c) || f), c;
    };
    return (i.cache = new (pf.Cache || Jn)()), i;
  }
  pf.Cache = Jn;
  var j6 = 500;
  function O6(t) {
    var r = pf(t, function (o) {
        return i.size === j6 && i.clear(), o;
      }),
      i = r.cache;
    return r;
  }
  var M6 =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    L6 = /\\(\\)?/g,
    D6 = O6(function (t) {
      var r = [];
      return (
        t.charCodeAt(0) === 46 && r.push(""),
        t.replace(M6, function (i, o, l, f) {
          r.push(l ? f.replace(L6, "$1") : o || i);
        }),
        r
      );
    });
  function N6(t) {
    if (typeof t == "string" || df(t)) return t;
    var r = t + "";
    return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
  }
  var lm = Yn ? Yn.prototype : void 0,
    um = lm ? lm.toString : void 0;
  function I1(t) {
    if (typeof t == "string") return t;
    if (Ls(t)) return B1(t, I1) + "";
    if (df(t)) return um ? um.call(t) : "";
    var r = t + "";
    return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
  }
  function b6(t) {
    return t == null ? "" : I1(t);
  }
  function V1(t) {
    return Ls(t) ? B1(t, N6) : df(t) ? [t] : j1(D6(b6(t)));
  }
  var Uu = { exports: {} },
    Ee = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var cm;
  function F6() {
    if (cm) return Ee;
    cm = 1;
    var t = typeof Symbol == "function" && Symbol.for,
      r = t ? Symbol.for("react.element") : 60103,
      i = t ? Symbol.for("react.portal") : 60106,
      o = t ? Symbol.for("react.fragment") : 60107,
      l = t ? Symbol.for("react.strict_mode") : 60108,
      f = t ? Symbol.for("react.profiler") : 60114,
      c = t ? Symbol.for("react.provider") : 60109,
      p = t ? Symbol.for("react.context") : 60110,
      h = t ? Symbol.for("react.async_mode") : 60111,
      m = t ? Symbol.for("react.concurrent_mode") : 60111,
      y = t ? Symbol.for("react.forward_ref") : 60112,
      v = t ? Symbol.for("react.suspense") : 60113,
      w = t ? Symbol.for("react.suspense_list") : 60120,
      k = t ? Symbol.for("react.memo") : 60115,
      S = t ? Symbol.for("react.lazy") : 60116,
      T = t ? Symbol.for("react.block") : 60121,
      P = t ? Symbol.for("react.fundamental") : 60117,
      b = t ? Symbol.for("react.responder") : 60118,
      I = t ? Symbol.for("react.scope") : 60119;
    function V(M) {
      if (typeof M == "object" && M !== null) {
        var z = M.$$typeof;
        switch (z) {
          case r:
            switch (((M = M.type), M)) {
              case h:
              case m:
              case o:
              case f:
              case l:
              case v:
                return M;
              default:
                switch (((M = M && M.$$typeof), M)) {
                  case p:
                  case y:
                  case S:
                  case k:
                  case c:
                    return M;
                  default:
                    return z;
                }
            }
          case i:
            return z;
        }
      }
    }
    function J(M) {
      return V(M) === m;
    }
    return (
      (Ee.AsyncMode = h),
      (Ee.ConcurrentMode = m),
      (Ee.ContextConsumer = p),
      (Ee.ContextProvider = c),
      (Ee.Element = r),
      (Ee.ForwardRef = y),
      (Ee.Fragment = o),
      (Ee.Lazy = S),
      (Ee.Memo = k),
      (Ee.Portal = i),
      (Ee.Profiler = f),
      (Ee.StrictMode = l),
      (Ee.Suspense = v),
      (Ee.isAsyncMode = function (M) {
        return J(M) || V(M) === h;
      }),
      (Ee.isConcurrentMode = J),
      (Ee.isContextConsumer = function (M) {
        return V(M) === p;
      }),
      (Ee.isContextProvider = function (M) {
        return V(M) === c;
      }),
      (Ee.isElement = function (M) {
        return typeof M == "object" && M !== null && M.$$typeof === r;
      }),
      (Ee.isForwardRef = function (M) {
        return V(M) === y;
      }),
      (Ee.isFragment = function (M) {
        return V(M) === o;
      }),
      (Ee.isLazy = function (M) {
        return V(M) === S;
      }),
      (Ee.isMemo = function (M) {
        return V(M) === k;
      }),
      (Ee.isPortal = function (M) {
        return V(M) === i;
      }),
      (Ee.isProfiler = function (M) {
        return V(M) === f;
      }),
      (Ee.isStrictMode = function (M) {
        return V(M) === l;
      }),
      (Ee.isSuspense = function (M) {
        return V(M) === v;
      }),
      (Ee.isValidElementType = function (M) {
        return (
          typeof M == "string" ||
          typeof M == "function" ||
          M === o ||
          M === m ||
          M === f ||
          M === l ||
          M === v ||
          M === w ||
          (typeof M == "object" &&
            M !== null &&
            (M.$$typeof === S ||
              M.$$typeof === k ||
              M.$$typeof === c ||
              M.$$typeof === p ||
              M.$$typeof === y ||
              M.$$typeof === P ||
              M.$$typeof === b ||
              M.$$typeof === I ||
              M.$$typeof === T))
        );
      }),
      (Ee.typeOf = V),
      Ee
    );
  }
  var fm;
  function B6() {
    return fm || ((fm = 1), (Uu.exports = F6())), Uu.exports;
  }
  var zu, dm;
  function I6() {
    if (dm) return zu;
    dm = 1;
    var t = B6(),
      r = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      i = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      o = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      },
      l = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      f = {};
    (f[t.ForwardRef] = o), (f[t.Memo] = l);
    function c(S) {
      return t.isMemo(S) ? l : f[S.$$typeof] || r;
    }
    var p = Object.defineProperty,
      h = Object.getOwnPropertyNames,
      m = Object.getOwnPropertySymbols,
      y = Object.getOwnPropertyDescriptor,
      v = Object.getPrototypeOf,
      w = Object.prototype;
    function k(S, T, P) {
      if (typeof T != "string") {
        if (w) {
          var b = v(T);
          b && b !== w && k(S, b, P);
        }
        var I = h(T);
        m && (I = I.concat(m(T)));
        for (var V = c(S), J = c(T), M = 0; M < I.length; ++M) {
          var z = I[M];
          if (!i[z] && !(P && P[z]) && !(J && J[z]) && !(V && V[z])) {
            var Z = y(T, z);
            try {
              p(S, z, Z);
            } catch {}
          }
        }
      }
      return S;
    }
    return (zu = k), zu;
  }
  I6();
  function Je() {
    return (
      (Je =
        Object.assign ||
        function (t) {
          for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var o in i)
              Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
          }
          return t;
        }),
      Je.apply(this, arguments)
    );
  }
  function _1(t, r) {
    if (t == null) return {};
    var i = {},
      o = Object.keys(t),
      l,
      f;
    for (f = 0; f < o.length; f++)
      (l = o[f]), !(r.indexOf(l) >= 0) && (i[l] = t[l]);
    return i;
  }
  var ka = H.createContext(void 0);
  ka.displayName = "FormikContext";
  ka.Provider;
  ka.Consumer;
  function V6() {
    var t = H.useContext(ka);
    return t;
  }
  var Yt = function (r) {
      return typeof r == "function";
    },
    Ra = function (r) {
      return r !== null && typeof r == "object";
    },
    _6 = function (r) {
      return String(Math.floor(Number(r))) === r;
    },
    Qu = function (r) {
      return Object.prototype.toString.call(r) === "[object String]";
    },
    Hu = function (r) {
      return Ra(r) && Yt(r.then);
    };
  function jt(t, r, i, o) {
    o === void 0 && (o = 0);
    for (var l = V1(r); t && o < l.length; ) t = t[l[o++]];
    return (o !== l.length && !t) || t === void 0 ? i : t;
  }
  function Er(t, r, i) {
    for (var o = am(t), l = o, f = 0, c = V1(r); f < c.length - 1; f++) {
      var p = c[f],
        h = jt(t, c.slice(0, f + 1));
      if (h && (Ra(h) || Array.isArray(h))) l = l[p] = am(h);
      else {
        var m = c[f + 1];
        l = l[p] = _6(m) && Number(m) >= 0 ? [] : {};
      }
    }
    return (f === 0 ? t : l)[c[f]] === i
      ? t
      : (i === void 0 ? delete l[c[f]] : (l[c[f]] = i),
        f === 0 && i === void 0 && delete o[c[f]],
        o);
  }
  function U1(t, r, i, o) {
    i === void 0 && (i = new WeakMap()), o === void 0 && (o = {});
    for (var l = 0, f = Object.keys(t); l < f.length; l++) {
      var c = f[l],
        p = t[c];
      Ra(p)
        ? i.get(p) ||
          (i.set(p, !0), (o[c] = Array.isArray(p) ? [] : {}), U1(p, r, i, o[c]))
        : (o[c] = r);
    }
    return o;
  }
  function U6(t, r) {
    switch (r.type) {
      case "SET_VALUES":
        return Je({}, t, { values: r.payload });
      case "SET_TOUCHED":
        return Je({}, t, { touched: r.payload });
      case "SET_ERRORS":
        return wr(t.errors, r.payload) ? t : Je({}, t, { errors: r.payload });
      case "SET_STATUS":
        return Je({}, t, { status: r.payload });
      case "SET_ISSUBMITTING":
        return Je({}, t, { isSubmitting: r.payload });
      case "SET_ISVALIDATING":
        return Je({}, t, { isValidating: r.payload });
      case "SET_FIELD_VALUE":
        return Je({}, t, {
          values: Er(t.values, r.payload.field, r.payload.value),
        });
      case "SET_FIELD_TOUCHED":
        return Je({}, t, {
          touched: Er(t.touched, r.payload.field, r.payload.value),
        });
      case "SET_FIELD_ERROR":
        return Je({}, t, {
          errors: Er(t.errors, r.payload.field, r.payload.value),
        });
      case "RESET_FORM":
        return Je({}, t, r.payload);
      case "SET_FORMIK_STATE":
        return r.payload(t);
      case "SUBMIT_ATTEMPT":
        return Je({}, t, {
          touched: U1(t.values, !0),
          isSubmitting: !0,
          submitCount: t.submitCount + 1,
        });
      case "SUBMIT_FAILURE":
        return Je({}, t, { isSubmitting: !1 });
      case "SUBMIT_SUCCESS":
        return Je({}, t, { isSubmitting: !1 });
      default:
        return t;
    }
  }
  var yr = {},
    Xo = {};
  function z6(t) {
    var r = t.validateOnChange,
      i = r === void 0 ? !0 : r,
      o = t.validateOnBlur,
      l = o === void 0 ? !0 : o,
      f = t.validateOnMount,
      c = f === void 0 ? !1 : f,
      p = t.isInitialValid,
      h = t.enableReinitialize,
      m = h === void 0 ? !1 : h,
      y = t.onSubmit,
      v = _1(t, [
        "validateOnChange",
        "validateOnBlur",
        "validateOnMount",
        "isInitialValid",
        "enableReinitialize",
        "onSubmit",
      ]),
      w = Je(
        {
          validateOnChange: i,
          validateOnBlur: l,
          validateOnMount: c,
          onSubmit: y,
        },
        v
      ),
      k = H.useRef(w.initialValues),
      S = H.useRef(w.initialErrors || yr),
      T = H.useRef(w.initialTouched || Xo),
      P = H.useRef(w.initialStatus),
      b = H.useRef(!1),
      I = H.useRef({});
    H.useEffect(function () {
      return (
        (b.current = !0),
        function () {
          b.current = !1;
        }
      );
    }, []);
    var V = H.useState(0),
      J = V[1],
      M = H.useRef({
        values: Yo(w.initialValues),
        errors: Yo(w.initialErrors) || yr,
        touched: Yo(w.initialTouched) || Xo,
        status: Yo(w.initialStatus),
        isSubmitting: !1,
        isValidating: !1,
        submitCount: 0,
      }),
      z = M.current,
      Z = H.useCallback(function (D) {
        var G = M.current;
        (M.current = U6(G, D)),
          G !== M.current &&
            J(function (ne) {
              return ne + 1;
            });
      }, []),
      te = H.useCallback(
        function (D, G) {
          return new Promise(function (ne, ie) {
            var pe = w.validate(D, G);
            pe == null
              ? ne(yr)
              : Hu(pe)
              ? pe.then(
                  function (ve) {
                    ne(ve || yr);
                  },
                  function (ve) {
                    ie(ve);
                  }
                )
              : ne(pe);
          });
        },
        [w.validate]
      ),
      Ae = H.useCallback(
        function (D, G) {
          var ne = w.validationSchema,
            ie = Yt(ne) ? ne(G) : ne,
            pe = G && ie.validateAt ? ie.validateAt(G, D) : H6(D, ie);
          return new Promise(function (ve, We) {
            pe.then(
              function () {
                ve(yr);
              },
              function (Nt) {
                Nt.name === "ValidationError" ? ve(Q6(Nt)) : We(Nt);
              }
            );
          });
        },
        [w.validationSchema]
      ),
      Me = H.useCallback(function (D, G) {
        return new Promise(function (ne) {
          return ne(I.current[D].validate(G));
        });
      }, []),
      et = H.useCallback(
        function (D) {
          var G = Object.keys(I.current).filter(function (ie) {
              return Yt(I.current[ie].validate);
            }),
            ne =
              G.length > 0
                ? G.map(function (ie) {
                    return Me(ie, jt(D, ie));
                  })
                : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
          return Promise.all(ne).then(function (ie) {
            return ie.reduce(function (pe, ve, We) {
              return (
                ve === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" ||
                  (ve && (pe = Er(pe, G[We], ve))),
                pe
              );
            }, {});
          });
        },
        [Me]
      ),
      pt = H.useCallback(
        function (D) {
          return Promise.all([
            et(D),
            w.validationSchema ? Ae(D) : {},
            w.validate ? te(D) : {},
          ]).then(function (G) {
            var ne = G[0],
              ie = G[1],
              pe = G[2],
              ve = pc.all([ne, ie, pe], { arrayMerge: $6 });
            return ve;
          });
        },
        [w.validate, w.validationSchema, et, te, Ae]
      ),
      Pe = zt(function (D) {
        return (
          D === void 0 && (D = z.values),
          Z({ type: "SET_ISVALIDATING", payload: !0 }),
          pt(D).then(function (G) {
            return (
              b.current &&
                (Z({ type: "SET_ISVALIDATING", payload: !1 }),
                Z({ type: "SET_ERRORS", payload: G })),
              G
            );
          })
        );
      });
    H.useEffect(
      function () {
        c &&
          b.current === !0 &&
          wr(k.current, w.initialValues) &&
          Pe(k.current);
      },
      [c, Pe]
    );
    var $e = H.useCallback(
      function (D) {
        var G = D && D.values ? D.values : k.current,
          ne =
            D && D.errors
              ? D.errors
              : S.current
              ? S.current
              : w.initialErrors || {},
          ie =
            D && D.touched
              ? D.touched
              : T.current
              ? T.current
              : w.initialTouched || {},
          pe =
            D && D.status ? D.status : P.current ? P.current : w.initialStatus;
        (k.current = G), (S.current = ne), (T.current = ie), (P.current = pe);
        var ve = function () {
          Z({
            type: "RESET_FORM",
            payload: {
              isSubmitting: !!D && !!D.isSubmitting,
              errors: ne,
              touched: ie,
              status: pe,
              values: G,
              isValidating: !!D && !!D.isValidating,
              submitCount:
                D && D.submitCount && typeof D.submitCount == "number"
                  ? D.submitCount
                  : 0,
            },
          });
        };
        if (w.onReset) {
          var We = w.onReset(z.values, er);
          Hu(We) ? We.then(ve) : ve();
        } else ve();
      },
      [w.initialErrors, w.initialStatus, w.initialTouched, w.onReset]
    );
    H.useEffect(
      function () {
        b.current === !0 &&
          !wr(k.current, w.initialValues) &&
          m &&
          ((k.current = w.initialValues), $e(), c && Pe(k.current));
      },
      [m, w.initialValues, $e, c, Pe]
    ),
      H.useEffect(
        function () {
          m &&
            b.current === !0 &&
            !wr(S.current, w.initialErrors) &&
            ((S.current = w.initialErrors || yr),
            Z({ type: "SET_ERRORS", payload: w.initialErrors || yr }));
        },
        [m, w.initialErrors]
      ),
      H.useEffect(
        function () {
          m &&
            b.current === !0 &&
            !wr(T.current, w.initialTouched) &&
            ((T.current = w.initialTouched || Xo),
            Z({ type: "SET_TOUCHED", payload: w.initialTouched || Xo }));
        },
        [m, w.initialTouched]
      ),
      H.useEffect(
        function () {
          m &&
            b.current === !0 &&
            !wr(P.current, w.initialStatus) &&
            ((P.current = w.initialStatus),
            Z({ type: "SET_STATUS", payload: w.initialStatus }));
        },
        [m, w.initialStatus, w.initialTouched]
      );
    var yt = zt(function (D) {
        if (I.current[D] && Yt(I.current[D].validate)) {
          var G = jt(z.values, D),
            ne = I.current[D].validate(G);
          return Hu(ne)
            ? (Z({ type: "SET_ISVALIDATING", payload: !0 }),
              ne
                .then(function (ie) {
                  return ie;
                })
                .then(function (ie) {
                  Z({
                    type: "SET_FIELD_ERROR",
                    payload: { field: D, value: ie },
                  }),
                    Z({ type: "SET_ISVALIDATING", payload: !1 });
                }))
            : (Z({ type: "SET_FIELD_ERROR", payload: { field: D, value: ne } }),
              Promise.resolve(ne));
        } else if (w.validationSchema)
          return (
            Z({ type: "SET_ISVALIDATING", payload: !0 }),
            Ae(z.values, D)
              .then(function (ie) {
                return ie;
              })
              .then(function (ie) {
                Z({
                  type: "SET_FIELD_ERROR",
                  payload: { field: D, value: jt(ie, D) },
                }),
                  Z({ type: "SET_ISVALIDATING", payload: !1 });
              })
          );
        return Promise.resolve();
      }),
      tt = H.useCallback(function (D, G) {
        var ne = G.validate;
        I.current[D] = { validate: ne };
      }, []),
      he = H.useCallback(function (D) {
        delete I.current[D];
      }, []),
      $ = zt(function (D, G) {
        Z({ type: "SET_TOUCHED", payload: D });
        var ne = G === void 0 ? l : G;
        return ne ? Pe(z.values) : Promise.resolve();
      }),
      re = H.useCallback(function (D) {
        Z({ type: "SET_ERRORS", payload: D });
      }, []),
      W = zt(function (D, G) {
        var ne = Yt(D) ? D(z.values) : D;
        Z({ type: "SET_VALUES", payload: ne });
        var ie = G === void 0 ? i : G;
        return ie ? Pe(ne) : Promise.resolve();
      }),
      E = H.useCallback(function (D, G) {
        Z({ type: "SET_FIELD_ERROR", payload: { field: D, value: G } });
      }, []),
      F = zt(function (D, G, ne) {
        Z({ type: "SET_FIELD_VALUE", payload: { field: D, value: G } });
        var ie = ne === void 0 ? i : ne;
        return ie ? Pe(Er(z.values, D, G)) : Promise.resolve();
      }),
      ce = H.useCallback(
        function (D, G) {
          var ne = G,
            ie = D,
            pe;
          if (!Qu(D)) {
            D.persist && D.persist();
            var ve = D.target ? D.target : D.currentTarget,
              We = ve.type,
              Nt = ve.name,
              cn = ve.id,
              fn = ve.value,
              ja = ve.checked;
            ve.outerHTML;
            var wi = ve.options,
              Bs = ve.multiple;
            (ne = G || Nt || cn),
              (ie = /number|range/.test(We)
                ? ((pe = parseFloat(fn)), isNaN(pe) ? "" : pe)
                : /checkbox/.test(We)
                ? Z6(jt(z.values, ne), ja, fn)
                : wi && Bs
                ? W6(wi)
                : fn);
          }
          ne && F(ne, ie);
        },
        [F, z.values]
      ),
      de = zt(function (D) {
        if (Qu(D))
          return function (G) {
            return ce(G, D);
          };
        ce(D);
      }),
      me = zt(function (D, G, ne) {
        G === void 0 && (G = !0),
          Z({ type: "SET_FIELD_TOUCHED", payload: { field: D, value: G } });
        var ie = ne === void 0 ? l : ne;
        return ie ? Pe(z.values) : Promise.resolve();
      }),
      ye = H.useCallback(
        function (D, G) {
          D.persist && D.persist();
          var ne = D.target,
            ie = ne.name,
            pe = ne.id;
          ne.outerHTML;
          var ve = G || ie || pe;
          me(ve, !0);
        },
        [me]
      ),
      Se = zt(function (D) {
        if (Qu(D))
          return function (G) {
            return ye(G, D);
          };
        ye(D);
      }),
      xe = H.useCallback(function (D) {
        Yt(D)
          ? Z({ type: "SET_FORMIK_STATE", payload: D })
          : Z({
              type: "SET_FORMIK_STATE",
              payload: function () {
                return D;
              },
            });
      }, []),
      ke = H.useCallback(function (D) {
        Z({ type: "SET_STATUS", payload: D });
      }, []),
      st = H.useCallback(function (D) {
        Z({ type: "SET_ISSUBMITTING", payload: D });
      }, []),
      kn = zt(function () {
        return (
          Z({ type: "SUBMIT_ATTEMPT" }),
          Pe().then(function (D) {
            var G = D instanceof Error,
              ne = !G && Object.keys(D).length === 0;
            if (ne) {
              var ie;
              try {
                if (((ie = yi()), ie === void 0)) return;
              } catch (pe) {
                throw pe;
              }
              return Promise.resolve(ie)
                .then(function (pe) {
                  return b.current && Z({ type: "SUBMIT_SUCCESS" }), pe;
                })
                .catch(function (pe) {
                  if (b.current) throw (Z({ type: "SUBMIT_FAILURE" }), pe);
                });
            } else if (b.current && (Z({ type: "SUBMIT_FAILURE" }), G)) throw D;
          })
        );
      }),
      Ds = zt(function (D) {
        D && D.preventDefault && Yt(D.preventDefault) && D.preventDefault(),
          D &&
            D.stopPropagation &&
            Yt(D.stopPropagation) &&
            D.stopPropagation(),
          kn().catch(function (G) {
            console.warn(
              "Warning: An unhandled error was caught from submitForm()",
              G
            );
          });
      }),
      er = {
        resetForm: $e,
        validateForm: Pe,
        validateField: yt,
        setErrors: re,
        setFieldError: E,
        setFieldTouched: me,
        setFieldValue: F,
        setStatus: ke,
        setSubmitting: st,
        setTouched: $,
        setValues: W,
        setFormikState: xe,
        submitForm: kn,
      },
      yi = zt(function () {
        return y(z.values, er);
      }),
      Ns = zt(function (D) {
        D && D.preventDefault && Yt(D.preventDefault) && D.preventDefault(),
          D &&
            D.stopPropagation &&
            Yt(D.stopPropagation) &&
            D.stopPropagation(),
          $e();
      }),
      bs = H.useCallback(
        function (D) {
          return {
            value: jt(z.values, D),
            error: jt(z.errors, D),
            touched: !!jt(z.touched, D),
            initialValue: jt(k.current, D),
            initialTouched: !!jt(T.current, D),
            initialError: jt(S.current, D),
          };
        },
        [z.errors, z.touched, z.values]
      ),
      vi = H.useCallback(
        function (D) {
          return {
            setValue: function (ne, ie) {
              return F(D, ne, ie);
            },
            setTouched: function (ne, ie) {
              return me(D, ne, ie);
            },
            setError: function (ne) {
              return E(D, ne);
            },
          };
        },
        [F, me, E]
      ),
      Fs = H.useCallback(
        function (D) {
          var G = Ra(D),
            ne = G ? D.name : D,
            ie = jt(z.values, ne),
            pe = { name: ne, value: ie, onChange: de, onBlur: Se };
          if (G) {
            var ve = D.type,
              We = D.value,
              Nt = D.as,
              cn = D.multiple;
            ve === "checkbox"
              ? We === void 0
                ? (pe.checked = !!ie)
                : ((pe.checked = !!(Array.isArray(ie) && ~ie.indexOf(We))),
                  (pe.value = We))
              : ve === "radio"
              ? ((pe.checked = ie === We), (pe.value = We))
              : Nt === "select" &&
                cn &&
                ((pe.value = pe.value || []), (pe.multiple = !0));
          }
          return pe;
        },
        [Se, de, z.values]
      ),
      tr = H.useMemo(
        function () {
          return !wr(k.current, z.values);
        },
        [k.current, z.values]
      ),
      nr = H.useMemo(
        function () {
          return typeof p < "u"
            ? tr
              ? z.errors && Object.keys(z.errors).length === 0
              : p !== !1 && Yt(p)
              ? p(w)
              : p
            : z.errors && Object.keys(z.errors).length === 0;
        },
        [p, tr, z.errors, w]
      ),
      Rn = Je({}, z, {
        initialValues: k.current,
        initialErrors: S.current,
        initialTouched: T.current,
        initialStatus: P.current,
        handleBlur: Se,
        handleChange: de,
        handleReset: Ns,
        handleSubmit: Ds,
        resetForm: $e,
        setErrors: re,
        setFormikState: xe,
        setFieldTouched: me,
        setFieldValue: F,
        setFieldError: E,
        setStatus: ke,
        setSubmitting: st,
        setTouched: $,
        setValues: W,
        submitForm: kn,
        validateForm: Pe,
        validateField: yt,
        isValid: nr,
        dirty: tr,
        unregisterField: he,
        registerField: tt,
        getFieldProps: Fs,
        getFieldMeta: bs,
        getFieldHelpers: vi,
        validateOnBlur: l,
        validateOnChange: i,
        validateOnMount: c,
      });
    return Rn;
  }
  function Q6(t) {
    var r = {};
    if (t.inner) {
      if (t.inner.length === 0) return Er(r, t.path, t.message);
      for (
        var l = t.inner,
          i = Array.isArray(l),
          o = 0,
          l = i ? l : l[Symbol.iterator]();
        ;

      ) {
        var f;
        if (i) {
          if (o >= l.length) break;
          f = l[o++];
        } else {
          if (((o = l.next()), o.done)) break;
          f = o.value;
        }
        var c = f;
        jt(r, c.path) || (r = Er(r, c.path, c.message));
      }
    }
    return r;
  }
  function H6(t, r, i, o) {
    i === void 0 && (i = !1);
    var l = vc(t);
    return r[i ? "validateSync" : "validate"](l, {
      abortEarly: !1,
      context: l,
    });
  }
  function vc(t) {
    var r = Array.isArray(t) ? [] : {};
    for (var i in t)
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        var o = String(i);
        Array.isArray(t[o]) === !0
          ? (r[o] = t[o].map(function (l) {
              return Array.isArray(l) === !0 || I0(l)
                ? vc(l)
                : l !== ""
                ? l
                : void 0;
            }))
          : I0(t[o])
          ? (r[o] = vc(t[o]))
          : (r[o] = t[o] !== "" ? t[o] : void 0);
      }
    return r;
  }
  function $6(t, r, i) {
    var o = t.slice();
    return (
      r.forEach(function (f, c) {
        if (typeof o[c] > "u") {
          var p = i.clone !== !1,
            h = p && i.isMergeableObject(f);
          o[c] = h ? pc(Array.isArray(f) ? [] : {}, f, i) : f;
        } else i.isMergeableObject(f) ? (o[c] = pc(t[c], f, i)) : t.indexOf(f) === -1 && o.push(f);
      }),
      o
    );
  }
  function W6(t) {
    return Array.from(t)
      .filter(function (r) {
        return r.selected;
      })
      .map(function (r) {
        return r.value;
      });
  }
  function Z6(t, r, i) {
    if (typeof t == "boolean") return !!r;
    var o = [],
      l = !1,
      f = -1;
    if (Array.isArray(t)) (o = t), (f = t.indexOf(i)), (l = f >= 0);
    else if (!i || i == "true" || i == "false") return !!r;
    return r && i && !l
      ? o.concat(i)
      : l
      ? o.slice(0, f).concat(o.slice(f + 1))
      : o;
  }
  var K6 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? H.useLayoutEffect
      : H.useEffect;
  function zt(t) {
    var r = H.useRef(t);
    return (
      K6(function () {
        r.current = t;
      }),
      H.useCallback(function () {
        for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++)
          o[l] = arguments[l];
        return r.current.apply(void 0, o);
      }, [])
    );
  }
  var G6 = H.forwardRef(function (t, r) {
    var i = t.action,
      o = _1(t, ["action"]),
      l = i ?? "#",
      f = V6(),
      c = f.handleReset,
      p = f.handleSubmit;
    return H.createElement(
      "form",
      Je({ onSubmit: p, ref: r, onReset: c, action: l }, o)
    );
  });
  G6.displayName = "Form";
  const q6 = () => {
      const t = z6({
        initialValues: {
          need: "",
          refered: "",
          stage: "",
          fullname: "",
          email: "",
          location: "",
          company: "",
          textarey: "",
        },
        onSubmit: async (r, { resetForm: i }) => {
          try {
            let o = await He.post(
              "https://riya-art-infotech.onrender.com/mainform/create",
              r
            );
          } catch (o) {
            console.log(o);
          }
          i();
        },
      });
      return R.jsx("section", {
        id: "let's talk",
        className: " flex items-center justify-center bg-black text-white ",
        children: R.jsxs(Cn.div, {
          className:
            "w-full max-w-6xl bg-gray-900 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row lg:flex-row lg:gap-6",
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: [
            R.jsxs("div", {
              className: "w-full md:w-1/3 p-4",
              children: [
                R.jsx("h2", {
                  className: "text-2xl font-bold mb-4 text-center md:text-left",
                  children: "Let's Talk",
                }),
                R.jsx("form", {
                  onSubmit: t.handleSubmit,
                  className: "space-y-4",
                  children: [
                    {
                      id: "need",
                      label: "Need",
                      type: "select",
                      options: ["all", "brand", "website", "mobile"],
                    },
                    {
                      id: "refered",
                      label: "Referred",
                      type: "select",
                      options: ["yes", "no"],
                    },
                    {
                      id: "stage",
                      label: "Stage",
                      type: "select",
                      options: ["startup", "early stage", "established"],
                    },
                  ].map(({ id: r, label: i, type: o, options: l }) =>
                    R.jsxs(
                      Cn.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.5, delay: 0.1 },
                        children: [
                          R.jsx("label", {
                            htmlFor: r,
                            className: "block text-sm font-medium mb-1",
                            children: i,
                          }),
                          R.jsx("select", {
                            id: r,
                            name: r,
                            onChange: t.handleChange,
                            value: t.values[r],
                            className:
                              "w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                            required: !0,
                            children: l.map((f) =>
                              R.jsx("option", { value: f, children: f }, f)
                            ),
                          }),
                        ],
                      },
                      r
                    )
                  ),
                }),
              ],
            }),
            R.jsx("div", {
              className: "w-full md:w-1/3 p-4",
              children: R.jsx("form", {
                onSubmit: t.handleSubmit,
                className: "space-y-4",
                children: [
                  { id: "email", label: "Email Address", type: "email" },
                  { id: "fullname", label: "Full Name", type: "text" },
                  { id: "location", label: "Location", type: "text" },
                ].map(({ id: r, label: i, type: o }) =>
                  R.jsxs(
                    Cn.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.5, delay: 0.1 },
                      children: [
                        R.jsx("label", {
                          htmlFor: r,
                          className: "block text-sm font-medium mb-1",
                          children: i,
                        }),
                        R.jsx("input", {
                          id: r,
                          name: r,
                          type: o,
                          onChange: t.handleChange,
                          value: t.values[r],
                          className:
                            "w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                          required: !0,
                        }),
                      ],
                    },
                    r
                  )
                ),
              }),
            }),
            R.jsx("div", {
              className: "w-full md:w-1/3 p-4",
              children: R.jsxs("form", {
                onSubmit: t.handleSubmit,
                className: "space-y-4",
                children: [
                  [
                    { id: "company", label: "Company", type: "text" },
                    { id: "textarey", label: "Message", type: "textarea" },
                  ].map(({ id: r, label: i, type: o }) =>
                    R.jsxs(
                      Cn.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.5, delay: 0.1 },
                        children: [
                          R.jsx("label", {
                            htmlFor: r,
                            className: "block text-sm font-medium mb-1",
                            children: i,
                          }),
                          o === "textarea"
                            ? R.jsx("textarea", {
                                id: r,
                                name: r,
                                rows: 4,
                                onChange: t.handleChange,
                                value: t.values[r],
                                className:
                                  "w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                required: !0,
                              })
                            : R.jsx("input", {
                                id: r,
                                name: r,
                                type: o,
                                onChange: t.handleChange,
                                value: t.values[r],
                                className:
                                  "w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                required: !0,
                              }),
                        ],
                      },
                      r
                    )
                  ),
                  R.jsx(Cn.button, {
                    type: "submit",
                    className:
                      "w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-lg text-white font-semibold transition-all",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: "Submit",
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    },
    Y6 = () =>
      R.jsxs("div", {
        className: "bg-primary w-full overflow-hidden",
        children: [
          R.jsx("div", {
            className: `${ue.paddingX} ${ue.flexCenter}`,
            children: R.jsx("div", {
              className: `${ue.boxWidth}`,
              children: R.jsx(Sv, {}),
            }),
          }),
          R.jsx("div", {
            className: `bg-primary ${ue.flexStart}`,
            children: R.jsx("div", {
              className: `${ue.boxWidth}`,
              children: R.jsx(oA, {}),
            }),
          }),
          R.jsx("div", {
            className: `bg-primary ${ue.paddingX} ${ue.flexCenter}`,
            children: R.jsxs("div", {
              className: `${ue.boxWidth}`,
              children: [
                R.jsx(Ov, {}),
                R.jsx(kv, {}),
                R.jsx(Ev, {}),
                R.jsx(Tv, {}),
                R.jsx(Dv, {}),
                R.jsx(Rv, {}),
                R.jsx(jv, {}),
                R.jsx(q6, {}),
                R.jsx(Mv, {}),
              ],
            }),
          }),
        ],
      });
  Ky.createRoot(document.getElementById("root")).render(
    R.jsx(Uy.StrictMode, { children: R.jsx(Y6, {}) })
  );
});
export default X6();
