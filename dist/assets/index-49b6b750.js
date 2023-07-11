function e_() {
  import.meta.url, import("_").catch(() => 1);
  async function* e() {}
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
var In =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function jo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var tv = { exports: {} },
  za = {},
  nv = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zo = Symbol.for("react.element"),
  L1 = Symbol.for("react.portal"),
  _1 = Symbol.for("react.fragment"),
  M1 = Symbol.for("react.strict_mode"),
  B1 = Symbol.for("react.profiler"),
  D1 = Symbol.for("react.provider"),
  j1 = Symbol.for("react.context"),
  z1 = Symbol.for("react.forward_ref"),
  F1 = Symbol.for("react.suspense"),
  N1 = Symbol.for("react.memo"),
  H1 = Symbol.for("react.lazy"),
  jh = Symbol.iterator;
function U1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (jh && e[jh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var iv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  rv = Object.assign,
  ov = {};
function $r(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ov),
    (this.updater = n || iv);
}
$r.prototype.isReactComponent = {};
$r.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
$r.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sv() {}
sv.prototype = $r.prototype;
function _d(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ov),
    (this.updater = n || iv);
}
var Md = (_d.prototype = new sv());
Md.constructor = _d;
rv(Md, $r.prototype);
Md.isPureReactComponent = !0;
var zh = Array.isArray,
  av = Object.prototype.hasOwnProperty,
  Bd = { current: null },
  lv = { key: !0, ref: !0, __self: !0, __source: !0 };
function cv(e, t, n) {
  var i,
    r = {},
    o = null,
    s = null;
  if (t != null)
    for (i in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      av.call(t, i) && !lv.hasOwnProperty(i) && (r[i] = t[i]);
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  if (e && e.defaultProps)
    for (i in ((a = e.defaultProps), a)) r[i] === void 0 && (r[i] = a[i]);
  return {
    $$typeof: zo,
    type: e,
    key: o,
    ref: s,
    props: r,
    _owner: Bd.current,
  };
}
function V1(e, t) {
  return {
    $$typeof: zo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Dd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zo;
}
function q1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fh = /\/+/g;
function Yl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? q1("" + e.key)
    : t.toString(36);
}
function Ps(e, t, n, i, r) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case zo:
          case L1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (r = r(s)),
      (e = i === "" ? "." + Yl(s, 0) : i),
      zh(r)
        ? ((n = ""),
          e != null && (n = e.replace(Fh, "$&/") + "/"),
          Ps(r, t, n, "", function (c) {
            return c;
          }))
        : r != null &&
          (Dd(r) &&
            (r = V1(
              r,
              n +
                (!r.key || (s && s.key === r.key)
                  ? ""
                  : ("" + r.key).replace(Fh, "$&/") + "/") +
                e
            )),
          t.push(r)),
      1
    );
  if (((s = 0), (i = i === "" ? "." : i + ":"), zh(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = i + Yl(o, a);
      s += Ps(o, t, n, l, r);
    }
  else if (((l = U1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = i + Yl(o, a++)), (s += Ps(o, t, n, l, r));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function es(e, t, n) {
  if (e == null) return e;
  var i = [],
    r = 0;
  return (
    Ps(e, i, "", "", function (o) {
      return t.call(n, o, r++);
    }),
    i
  );
}
function W1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var et = { current: null },
  Ts = { transition: null },
  Y1 = {
    ReactCurrentDispatcher: et,
    ReactCurrentBatchConfig: Ts,
    ReactCurrentOwner: Bd,
  };
G.Children = {
  map: es,
  forEach: function (e, t, n) {
    es(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      es(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      es(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Dd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = $r;
G.Fragment = _1;
G.Profiler = B1;
G.PureComponent = _d;
G.StrictMode = M1;
G.Suspense = F1;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y1;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var i = rv({}, e.props),
    r = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Bd.current)),
      t.key !== void 0 && (r = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      av.call(t, l) &&
        !lv.hasOwnProperty(l) &&
        (i[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    i.children = a;
  }
  return { $$typeof: zo, type: e.type, key: r, ref: o, props: i, _owner: s };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: j1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: D1, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = cv;
G.createFactory = function (e) {
  var t = cv.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: z1, render: e };
};
G.isValidElement = Dd;
G.lazy = function (e) {
  return { $$typeof: H1, _payload: { _status: -1, _result: e }, _init: W1 };
};
G.memo = function (e, t) {
  return { $$typeof: N1, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = Ts.transition;
  Ts.transition = {};
  try {
    e();
  } finally {
    Ts.transition = t;
  }
};
G.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
G.useCallback = function (e, t) {
  return et.current.useCallback(e, t);
};
G.useContext = function (e) {
  return et.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return et.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return et.current.useEffect(e, t);
};
G.useId = function () {
  return et.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return et.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return et.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return et.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return et.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return et.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return et.current.useRef(e);
};
G.useState = function (e) {
  return et.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return et.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return et.current.useTransition();
};
G.version = "18.2.0";
nv.exports = G;
var H = nv.exports;
const S = jo(H);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var G1 = H,
  X1 = Symbol.for("react.element"),
  K1 = Symbol.for("react.fragment"),
  Q1 = Object.prototype.hasOwnProperty,
  Z1 = G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  J1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function uv(e, t, n) {
  var i,
    r = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (i in t) Q1.call(t, i) && !J1.hasOwnProperty(i) && (r[i] = t[i]);
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) r[i] === void 0 && (r[i] = t[i]);
  return {
    $$typeof: X1,
    type: e,
    key: o,
    ref: s,
    props: r,
    _owner: Z1.current,
  };
}
za.Fragment = K1;
za.jsx = uv;
za.jsxs = uv;
tv.exports = za;
var jd = tv.exports;
const zd = jd.Fragment,
  C = jd.jsx,
  ne = jd.jsxs;
var dv = { exports: {} },
  kt = {},
  fv = { exports: {} },
  hv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, O) {
    var $ = L.length;
    L.push(O);
    e: for (; 0 < $; ) {
      var B = ($ - 1) >>> 1,
        D = L[B];
      if (0 < r(D, O)) (L[B] = O), (L[$] = D), ($ = B);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function i(L) {
    if (L.length === 0) return null;
    var O = L[0],
      $ = L.pop();
    if ($ !== O) {
      L[0] = $;
      e: for (var B = 0, D = L.length, N = D >>> 1; B < N; ) {
        var V = 2 * (B + 1) - 1,
          U = L[V],
          te = V + 1,
          J = L[te];
        if (0 > r(U, $))
          te < D && 0 > r(J, U)
            ? ((L[B] = J), (L[te] = $), (B = te))
            : ((L[B] = U), (L[V] = $), (B = V));
        else if (te < D && 0 > r(J, $)) (L[B] = J), (L[te] = $), (B = te);
        else break e;
      }
    }
    return O;
  }
  function r(L, O) {
    var $ = L.sortIndex - O.sortIndex;
    return $ !== 0 ? $ : L.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    f = 3,
    h = !1,
    m = !1,
    b = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(L) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null) i(c);
      else if (O.startTime <= L)
        i(c), (O.sortIndex = O.expirationTime), t(l, O);
      else break;
      O = n(c);
    }
  }
  function y(L) {
    if (((b = !1), v(L), !m))
      if (n(l) !== null) (m = !0), X(E);
      else {
        var O = n(c);
        O !== null && Z(y, O.startTime - L);
      }
  }
  function E(L, O) {
    (m = !1), b && ((b = !1), g(P), (P = -1)), (h = !0);
    var $ = f;
    try {
      for (
        v(O), d = n(l);
        d !== null && (!(d.expirationTime > O) || (L && !I()));

      ) {
        var B = d.callback;
        if (typeof B == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var D = B(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof D == "function" ? (d.callback = D) : d === n(l) && i(l),
            v(O);
        } else i(l);
        d = n(l);
      }
      if (d !== null) var N = !0;
      else {
        var V = n(c);
        V !== null && Z(y, V.startTime - O), (N = !1);
      }
      return N;
    } finally {
      (d = null), (f = $), (h = !1);
    }
  }
  var T = !1,
    w = null,
    P = -1,
    F = 5,
    _ = -1;
  function I() {
    return !(e.unstable_now() - _ < F);
  }
  function q() {
    if (w !== null) {
      var L = e.unstable_now();
      _ = L;
      var O = !0;
      try {
        O = w(!0, L);
      } finally {
        O ? ye() : ((T = !1), (w = null));
      }
    } else T = !1;
  }
  var ye;
  if (typeof p == "function")
    ye = function () {
      p(q);
    };
  else if (typeof MessageChannel < "u") {
    var se = new MessageChannel(),
      ae = se.port2;
    (se.port1.onmessage = q),
      (ye = function () {
        ae.postMessage(null);
      });
  } else
    ye = function () {
      k(q, 0);
    };
  function X(L) {
    (w = L), T || ((T = !0), ye());
  }
  function Z(L, O) {
    P = k(function () {
      L(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || h || ((m = !0), X(E));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (L) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = f;
      }
      var $ = f;
      f = O;
      try {
        return L();
      } finally {
        f = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, O) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var $ = f;
      f = L;
      try {
        return O();
      } finally {
        f = $;
      }
    }),
    (e.unstable_scheduleCallback = function (L, O, $) {
      var B = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? B + $ : B))
          : ($ = B),
        L)
      ) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return (
        (D = $ + D),
        (L = {
          id: u++,
          callback: O,
          priorityLevel: L,
          startTime: $,
          expirationTime: D,
          sortIndex: -1,
        }),
        $ > B
          ? ((L.sortIndex = $),
            t(c, L),
            n(l) === null &&
              L === n(c) &&
              (b ? (g(P), (P = -1)) : (b = !0), Z(y, $ - B)))
          : ((L.sortIndex = D), t(l, L), m || h || ((m = !0), X(E))),
        L
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (L) {
      var O = f;
      return function () {
        var $ = f;
        f = O;
        try {
          return L.apply(this, arguments);
        } finally {
          f = $;
        }
      };
    });
})(hv);
fv.exports = hv;
var ex = fv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pv = H,
  xt = ex;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var mv = new Set(),
  go = {};
function Si(e, t) {
  hr(e, t), hr(e + "Capture", t);
}
function hr(e, t) {
  for (go[e] = t, e = 0; e < t.length; e++) mv.add(t[e]);
}
var yn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  su = Object.prototype.hasOwnProperty,
  tx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Nh = {},
  Hh = {};
function nx(e) {
  return su.call(Hh, e)
    ? !0
    : su.call(Nh, e)
    ? !1
    : tx.test(e)
    ? (Hh[e] = !0)
    : ((Nh[e] = !0), !1);
}
function ix(e, t, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function rx(e, t, n, i) {
  if (t === null || typeof t > "u" || ix(e, t, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function tt(e, t, n, i, r, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ve[e] = new tt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ve[t] = new tt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ve[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ve[e] = new tt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ve[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ve[e] = new tt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ve[e] = new tt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ve[e] = new tt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ve[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fd = /[\-:]([a-z])/g;
function Nd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fd, Nd);
    Ve[t] = new tt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fd, Nd);
    Ve[t] = new tt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Fd, Nd);
  Ve[t] = new tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ve[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ve.xlinkHref = new tt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ve[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hd(e, t, n, i) {
  var r = Ve.hasOwnProperty(t) ? Ve[t] : null;
  (r !== null
    ? r.type !== 0
    : i ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (rx(t, n, r, i) && (n = null),
    i || r === null
      ? nx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : r.mustUseProperty
      ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
      : ((t = r.attributeName),
        (i = r.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((r = r.type),
            (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
}
var En = pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ts = Symbol.for("react.element"),
  Vi = Symbol.for("react.portal"),
  qi = Symbol.for("react.fragment"),
  Ud = Symbol.for("react.strict_mode"),
  au = Symbol.for("react.profiler"),
  gv = Symbol.for("react.provider"),
  vv = Symbol.for("react.context"),
  Vd = Symbol.for("react.forward_ref"),
  lu = Symbol.for("react.suspense"),
  cu = Symbol.for("react.suspense_list"),
  qd = Symbol.for("react.memo"),
  Pn = Symbol.for("react.lazy"),
  bv = Symbol.for("react.offscreen"),
  Uh = Symbol.iterator;
function Br(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Uh && e[Uh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var be = Object.assign,
  Gl;
function Xr(e) {
  if (Gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gl = (t && t[1]) || "";
    }
  return (
    `
` +
    Gl +
    e
  );
}
var Xl = !1;
function Kl(e, t) {
  if (!e || Xl) return "";
  Xl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var i = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          i = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        i = c;
      }
      e();
    }
  } catch (c) {
    if (c && i && typeof c.stack == "string") {
      for (
        var r = c.stack.split(`
`),
          o = i.stack.split(`
`),
          s = r.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && r[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (r[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || r[s] !== o[a])) {
                var l =
                  `
` + r[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Xl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Xr(e) : "";
}
function ox(e) {
  switch (e.tag) {
    case 5:
      return Xr(e.type);
    case 16:
      return Xr("Lazy");
    case 13:
      return Xr("Suspense");
    case 19:
      return Xr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Kl(e.type, !1)), e;
    case 11:
      return (e = Kl(e.type.render, !1)), e;
    case 1:
      return (e = Kl(e.type, !0)), e;
    default:
      return "";
  }
}
function uu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qi:
      return "Fragment";
    case Vi:
      return "Portal";
    case au:
      return "Profiler";
    case Ud:
      return "StrictMode";
    case lu:
      return "Suspense";
    case cu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vv:
        return (e.displayName || "Context") + ".Consumer";
      case gv:
        return (e._context.displayName || "Context") + ".Provider";
      case Vd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qd:
        return (
          (t = e.displayName || null), t !== null ? t : uu(e.type) || "Memo"
        );
      case Pn:
        (t = e._payload), (e = e._init);
        try {
          return uu(e(t));
        } catch (n) {}
    }
  return null;
}
function sx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return uu(t);
    case 8:
      return t === Ud ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Vn(e) {
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
function yv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ax(e) {
  var t = yv(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (s) {
          (i = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (s) {
          i = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ns(e) {
  e._valueTracker || (e._valueTracker = ax(e));
}
function wv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    i = "";
  return (
    e && (i = yv(e) ? (e.checked ? "true" : "false") : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Gs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function du(e, t) {
  var n = t.checked;
  return be({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Vh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked;
  (n = Vn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xv(e, t) {
  (t = t.checked), t != null && Hd(e, "checked", t, !1);
}
function fu(e, t) {
  xv(e, t);
  var n = Vn(t.value),
    i = t.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (i === "submit" || i === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? hu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && hu(e, t.type, Vn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function qh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var i = t.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function hu(e, t, n) {
  (t !== "number" || Gs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Kr = Array.isArray;
function ir(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++)
      (r = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== r && (e[n].selected = r),
        r && i && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Vn(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        (e[r].selected = !0), i && (e[r].defaultSelected = !0);
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function pu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return be({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Wh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Kr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Vn(n) };
}
function kv(e, t) {
  var n = Vn(t.value),
    i = Vn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = "" + i);
}
function Yh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ev(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ev(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var is,
  Sv = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, r);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        is = is || document.createElement("div"),
          is.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = is.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function vo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var no = {
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
  lx = ["Webkit", "ms", "Moz", "O"];
Object.keys(no).forEach(function (e) {
  lx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (no[t] = no[e]);
  });
});
function Cv(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (no.hasOwnProperty(e) && no[e])
    ? ("" + t).trim()
    : t + "px";
}
function $v(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = Cv(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, r) : (e[n] = r);
    }
}
var cx = be(
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
function gu(e, t) {
  if (t) {
    if (cx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function vu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var bu = null;
function Wd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yu = null,
  rr = null,
  or = null;
function Gh(e) {
  if ((e = Ho(e))) {
    if (typeof yu != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Va(t)), yu(e.stateNode, e.type, t));
  }
}
function Pv(e) {
  rr ? (or ? or.push(e) : (or = [e])) : (rr = e);
}
function Tv() {
  if (rr) {
    var e = rr,
      t = or;
    if (((or = rr = null), Gh(e), t)) for (e = 0; e < t.length; e++) Gh(t[e]);
  }
}
function Av(e, t) {
  return e(t);
}
function Ov() {}
var Ql = !1;
function Rv(e, t, n) {
  if (Ql) return e(t, n);
  Ql = !0;
  try {
    return Av(e, t, n);
  } finally {
    (Ql = !1), (rr !== null || or !== null) && (Ov(), Tv());
  }
}
function bo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var i = Va(n);
  if (i === null) return null;
  n = i[t];
  e: switch (t) {
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
      (i = !i.disabled) ||
        ((e = e.type),
        (i = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !i);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var wu = !1;
if (yn)
  try {
    var Dr = {};
    Object.defineProperty(Dr, "passive", {
      get: function () {
        wu = !0;
      },
    }),
      window.addEventListener("test", Dr, Dr),
      window.removeEventListener("test", Dr, Dr);
  } catch (e) {
    wu = !1;
  }
function ux(e, t, n, i, r, o, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var io = !1,
  Xs = null,
  Ks = !1,
  xu = null,
  dx = {
    onError: function (e) {
      (io = !0), (Xs = e);
    },
  };
function fx(e, t, n, i, r, o, s, a, l) {
  (io = !1), (Xs = null), ux.apply(dx, arguments);
}
function hx(e, t, n, i, r, o, s, a, l) {
  if ((fx.apply(this, arguments), io)) {
    if (io) {
      var c = Xs;
      (io = !1), (Xs = null);
    } else throw Error(R(198));
    Ks || ((Ks = !0), (xu = c));
  }
}
function Ci(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Iv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Xh(e) {
  if (Ci(e) !== e) throw Error(R(188));
}
function px(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ci(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, i = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var o = r.alternate;
    if (o === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === o.child) {
      for (o = r.child; o; ) {
        if (o === n) return Xh(r), e;
        if (o === i) return Xh(r), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== i.return) (n = r), (i = o);
    else {
      for (var s = !1, a = r.child; a; ) {
        if (a === n) {
          (s = !0), (n = r), (i = o);
          break;
        }
        if (a === i) {
          (s = !0), (i = r), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (i = r);
            break;
          }
          if (a === i) {
            (s = !0), (i = o), (n = r);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== i) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Lv(e) {
  return (e = px(e)), e !== null ? _v(e) : null;
}
function _v(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _v(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mv = xt.unstable_scheduleCallback,
  Kh = xt.unstable_cancelCallback,
  mx = xt.unstable_shouldYield,
  gx = xt.unstable_requestPaint,
  ke = xt.unstable_now,
  vx = xt.unstable_getCurrentPriorityLevel,
  Yd = xt.unstable_ImmediatePriority,
  Bv = xt.unstable_UserBlockingPriority,
  Qs = xt.unstable_NormalPriority,
  bx = xt.unstable_LowPriority,
  Dv = xt.unstable_IdlePriority,
  Fa = null,
  on = null;
function yx(e) {
  if (on && typeof on.onCommitFiberRoot == "function")
    try {
      on.onCommitFiberRoot(Fa, e, void 0, (e.current.flags & 128) === 128);
    } catch (t) {}
}
var Vt = Math.clz32 ? Math.clz32 : kx,
  wx = Math.log,
  xx = Math.LN2;
function kx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wx(e) / xx) | 0)) | 0;
}
var rs = 64,
  os = 4194304;
function Qr(e) {
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
function Zs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~r;
    a !== 0 ? (i = Qr(a)) : ((o &= s), o !== 0 && (i = Qr(o)));
  } else (s = n & ~r), s !== 0 ? (i = Qr(s)) : o !== 0 && (i = Qr(o));
  if (i === 0) return 0;
  if (
    t !== 0 &&
    t !== i &&
    !(t & r) &&
    ((r = i & -i), (o = t & -t), r >= o || (r === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      (n = 31 - Vt(t)), (r = 1 << n), (i |= e[n]), (t &= ~r);
  return i;
}
function Ex(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Sx(e, t) {
  for (
    var n = e.suspendedLanes,
      i = e.pingedLanes,
      r = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Vt(o),
      a = 1 << s,
      l = r[s];
    l === -1
      ? (!(a & n) || a & i) && (r[s] = Ex(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function ku(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function jv() {
  var e = rs;
  return (rs <<= 1), !(rs & 4194240) && (rs = 64), e;
}
function Zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Vt(t)),
    (e[t] = n);
}
function Cx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var i = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - Vt(n),
      o = 1 << r;
    (t[r] = 0), (i[r] = -1), (e[r] = -1), (n &= ~o);
  }
}
function Gd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var i = 31 - Vt(n),
      r = 1 << i;
    (r & t) | (e[i] & t) && (e[i] |= t), (n &= ~r);
  }
}
var re = 0;
function zv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Fv,
  Xd,
  Nv,
  Hv,
  Uv,
  Eu = !1,
  ss = [],
  Bn = null,
  Dn = null,
  jn = null,
  yo = new Map(),
  wo = new Map(),
  On = [],
  $x =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Qh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Bn = null;
      break;
    case "dragenter":
    case "dragleave":
      Dn = null;
      break;
    case "mouseover":
    case "mouseout":
      jn = null;
      break;
    case "pointerover":
    case "pointerout":
      yo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wo.delete(t.pointerId);
  }
}
function jr(e, t, n, i, r, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: o,
        targetContainers: [r],
      }),
      t !== null && ((t = Ho(t)), t !== null && Xd(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      r !== null && t.indexOf(r) === -1 && t.push(r),
      e);
}
function Px(e, t, n, i, r) {
  switch (t) {
    case "focusin":
      return (Bn = jr(Bn, e, t, n, i, r)), !0;
    case "dragenter":
      return (Dn = jr(Dn, e, t, n, i, r)), !0;
    case "mouseover":
      return (jn = jr(jn, e, t, n, i, r)), !0;
    case "pointerover":
      var o = r.pointerId;
      return yo.set(o, jr(yo.get(o) || null, e, t, n, i, r)), !0;
    case "gotpointercapture":
      return (
        (o = r.pointerId), wo.set(o, jr(wo.get(o) || null, e, t, n, i, r)), !0
      );
  }
  return !1;
}
function Vv(e) {
  var t = ni(e.target);
  if (t !== null) {
    var n = Ci(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Iv(n)), t !== null)) {
          (e.blockedOn = t),
            Uv(e.priority, function () {
              Nv(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function As(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Su(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var i = new n.constructor(n.type, n);
      (bu = i), n.target.dispatchEvent(i), (bu = null);
    } else return (t = Ho(n)), t !== null && Xd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zh(e, t, n) {
  As(e) && n.delete(t);
}
function Tx() {
  (Eu = !1),
    Bn !== null && As(Bn) && (Bn = null),
    Dn !== null && As(Dn) && (Dn = null),
    jn !== null && As(jn) && (jn = null),
    yo.forEach(Zh),
    wo.forEach(Zh);
}
function zr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Eu ||
      ((Eu = !0),
      xt.unstable_scheduleCallback(xt.unstable_NormalPriority, Tx)));
}
function xo(e) {
  function t(r) {
    return zr(r, e);
  }
  if (0 < ss.length) {
    zr(ss[0], e);
    for (var n = 1; n < ss.length; n++) {
      var i = ss[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
  }
  for (
    Bn !== null && zr(Bn, e),
      Dn !== null && zr(Dn, e),
      jn !== null && zr(jn, e),
      yo.forEach(t),
      wo.forEach(t),
      n = 0;
    n < On.length;
    n++
  )
    (i = On[n]), i.blockedOn === e && (i.blockedOn = null);
  for (; 0 < On.length && ((n = On[0]), n.blockedOn === null); )
    Vv(n), n.blockedOn === null && On.shift();
}
var sr = En.ReactCurrentBatchConfig,
  Js = !0;
function Ax(e, t, n, i) {
  var r = re,
    o = sr.transition;
  sr.transition = null;
  try {
    (re = 1), Kd(e, t, n, i);
  } finally {
    (re = r), (sr.transition = o);
  }
}
function Ox(e, t, n, i) {
  var r = re,
    o = sr.transition;
  sr.transition = null;
  try {
    (re = 4), Kd(e, t, n, i);
  } finally {
    (re = r), (sr.transition = o);
  }
}
function Kd(e, t, n, i) {
  if (Js) {
    var r = Su(e, t, n, i);
    if (r === null) lc(e, t, i, ea, n), Qh(e, i);
    else if (Px(r, e, t, n, i)) i.stopPropagation();
    else if ((Qh(e, i), t & 4 && -1 < $x.indexOf(e))) {
      for (; r !== null; ) {
        var o = Ho(r);
        if (
          (o !== null && Fv(o),
          (o = Su(e, t, n, i)),
          o === null && lc(e, t, i, ea, n),
          o === r)
        )
          break;
        r = o;
      }
      r !== null && i.stopPropagation();
    } else lc(e, t, i, null, n);
  }
}
var ea = null;
function Su(e, t, n, i) {
  if (((ea = null), (e = Wd(i)), (e = ni(e)), e !== null))
    if (((t = Ci(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Iv(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ea = e), null;
}
function qv(e) {
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
      switch (vx()) {
        case Yd:
          return 1;
        case Bv:
          return 4;
        case Qs:
        case bx:
          return 16;
        case Dv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ln = null,
  Qd = null,
  Os = null;
function Wv() {
  if (Os) return Os;
  var e,
    t = Qd,
    n = t.length,
    i,
    r = "value" in Ln ? Ln.value : Ln.textContent,
    o = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++);
  var s = n - e;
  for (i = 1; i <= s && t[n - i] === r[o - i]; i++);
  return (Os = r.slice(e, 1 < i ? 1 - i : void 0));
}
function Rs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function as() {
  return !0;
}
function Jh() {
  return !1;
}
function Et(e) {
  function t(n, i, r, o, s) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? as
        : Jh),
      (this.isPropagationStopped = Jh),
      this
    );
  }
  return (
    be(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = as));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = as));
      },
      persist: function () {},
      isPersistent: as,
    }),
    t
  );
}
var Pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zd = Et(Pr),
  No = be({}, Pr, { view: 0, detail: 0 }),
  Rx = Et(No),
  Jl,
  ec,
  Fr,
  Na = be({}, No, {
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
    getModifierState: Jd,
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
        : (e !== Fr &&
            (Fr && e.type === "mousemove"
              ? ((Jl = e.screenX - Fr.screenX), (ec = e.screenY - Fr.screenY))
              : (ec = Jl = 0),
            (Fr = e)),
          Jl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ec;
    },
  }),
  ep = Et(Na),
  Ix = be({}, Na, { dataTransfer: 0 }),
  Lx = Et(Ix),
  _x = be({}, No, { relatedTarget: 0 }),
  tc = Et(_x),
  Mx = be({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bx = Et(Mx),
  Dx = be({}, Pr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  jx = Et(Dx),
  zx = be({}, Pr, { data: 0 }),
  tp = Et(zx),
  Fx = {
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
  Nx = {
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
  Hx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ux(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hx[e]) ? !!t[e] : !1;
}
function Jd() {
  return Ux;
}
var Vx = be({}, No, {
    key: function (e) {
      if (e.key) {
        var t = Fx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Rs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nx[e.keyCode] || "Unidentified"
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
    getModifierState: Jd,
    charCode: function (e) {
      return e.type === "keypress" ? Rs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Rs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  qx = Et(Vx),
  Wx = be({}, Na, {
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
  np = Et(Wx),
  Yx = be({}, No, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jd,
  }),
  Gx = Et(Yx),
  Xx = be({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kx = Et(Xx),
  Qx = be({}, Na, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  Zx = Et(Qx),
  Jx = [9, 13, 27, 32],
  ef = yn && "CompositionEvent" in window,
  ro = null;
yn && "documentMode" in document && (ro = document.documentMode);
var ek = yn && "TextEvent" in window && !ro,
  Yv = yn && (!ef || (ro && 8 < ro && 11 >= ro)),
  ip = String.fromCharCode(32),
  rp = !1;
function Gv(e, t) {
  switch (e) {
    case "keyup":
      return Jx.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wi = !1;
function tk(e, t) {
  switch (e) {
    case "compositionend":
      return Xv(t);
    case "keypress":
      return t.which !== 32 ? null : ((rp = !0), ip);
    case "textInput":
      return (e = t.data), e === ip && rp ? null : e;
    default:
      return null;
  }
}
function nk(e, t) {
  if (Wi)
    return e === "compositionend" || (!ef && Gv(e, t))
      ? ((e = Wv()), (Os = Qd = Ln = null), (Wi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Yv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ik = {
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
function op(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ik[e.type] : t === "textarea";
}
function Kv(e, t, n, i) {
  Pv(i),
    (t = ta(t, "onChange")),
    0 < t.length &&
      ((n = new Zd("onChange", "change", null, n, i)),
      e.push({ event: n, listeners: t }));
}
var oo = null,
  ko = null;
function rk(e) {
  ab(e, 0);
}
function Ha(e) {
  var t = Xi(e);
  if (wv(t)) return e;
}
function ok(e, t) {
  if (e === "change") return t;
}
var Qv = !1;
if (yn) {
  var nc;
  if (yn) {
    var ic = "oninput" in document;
    if (!ic) {
      var sp = document.createElement("div");
      sp.setAttribute("oninput", "return;"),
        (ic = typeof sp.oninput == "function");
    }
    nc = ic;
  } else nc = !1;
  Qv = nc && (!document.documentMode || 9 < document.documentMode);
}
function ap() {
  oo && (oo.detachEvent("onpropertychange", Zv), (ko = oo = null));
}
function Zv(e) {
  if (e.propertyName === "value" && Ha(ko)) {
    var t = [];
    Kv(t, ko, e, Wd(e)), Rv(rk, t);
  }
}
function sk(e, t, n) {
  e === "focusin"
    ? (ap(), (oo = t), (ko = n), oo.attachEvent("onpropertychange", Zv))
    : e === "focusout" && ap();
}
function ak(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ha(ko);
}
function lk(e, t) {
  if (e === "click") return Ha(t);
}
function ck(e, t) {
  if (e === "input" || e === "change") return Ha(t);
}
function uk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xt = typeof Object.is == "function" ? Object.is : uk;
function Eo(e, t) {
  if (Xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    i = Object.keys(t);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!su.call(t, r) || !Xt(e[r], t[r])) return !1;
  }
  return !0;
}
function lp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cp(e, t) {
  var n = lp(e);
  e = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = e + n.textContent.length), e <= t && i >= t))
        return { node: n, offset: t - e };
      e = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = lp(n);
  }
}
function Jv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Jv(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function eb() {
  for (var e = window, t = Gs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch (i) {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gs(e.document);
  }
  return t;
}
function tf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function dk(e) {
  var t = eb(),
    n = e.focusedElem,
    i = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Jv(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && tf(n)) {
      if (
        ((t = i.start),
        (e = i.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var r = n.textContent.length,
          o = Math.min(i.start, r);
        (i = i.end === void 0 ? o : Math.min(i.end, r)),
          !e.extend && o > i && ((r = i), (i = o), (o = r)),
          (r = cp(n, o));
        var s = cp(n, i);
        r &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          o > i
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fk = yn && "documentMode" in document && 11 >= document.documentMode,
  Yi = null,
  Cu = null,
  so = null,
  $u = !1;
function up(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $u ||
    Yi == null ||
    Yi !== Gs(i) ||
    ((i = Yi),
    "selectionStart" in i && tf(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (so && Eo(so, i)) ||
      ((so = i),
      (i = ta(Cu, "onSelect")),
      0 < i.length &&
        ((t = new Zd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = Yi))));
}
function ls(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Gi = {
    animationend: ls("Animation", "AnimationEnd"),
    animationiteration: ls("Animation", "AnimationIteration"),
    animationstart: ls("Animation", "AnimationStart"),
    transitionend: ls("Transition", "TransitionEnd"),
  },
  rc = {},
  tb = {};
yn &&
  ((tb = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gi.animationend.animation,
    delete Gi.animationiteration.animation,
    delete Gi.animationstart.animation),
  "TransitionEvent" in window || delete Gi.transitionend.transition);
function Ua(e) {
  if (rc[e]) return rc[e];
  if (!Gi[e]) return e;
  var t = Gi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in tb) return (rc[e] = t[n]);
  return e;
}
var nb = Ua("animationend"),
  ib = Ua("animationiteration"),
  rb = Ua("animationstart"),
  ob = Ua("transitionend"),
  sb = new Map(),
  dp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Xn(e, t) {
  sb.set(e, t), Si(t, [e]);
}
for (var oc = 0; oc < dp.length; oc++) {
  var sc = dp[oc],
    hk = sc.toLowerCase(),
    pk = sc[0].toUpperCase() + sc.slice(1);
  Xn(hk, "on" + pk);
}
Xn(nb, "onAnimationEnd");
Xn(ib, "onAnimationIteration");
Xn(rb, "onAnimationStart");
Xn("dblclick", "onDoubleClick");
Xn("focusin", "onFocus");
Xn("focusout", "onBlur");
Xn(ob, "onTransitionEnd");
hr("onMouseEnter", ["mouseout", "mouseover"]);
hr("onMouseLeave", ["mouseout", "mouseover"]);
hr("onPointerEnter", ["pointerout", "pointerover"]);
hr("onPointerLeave", ["pointerout", "pointerover"]);
Si(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Si(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Si("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Si(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Si(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Si(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Zr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  mk = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));
function fp(e, t, n) {
  var i = e.type || "unknown-event";
  (e.currentTarget = n), hx(i, t, void 0, e), (e.currentTarget = null);
}
function ab(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      r = i.event;
    i = i.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = i.length - 1; 0 <= s; s--) {
          var a = i[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== o && r.isPropagationStopped())) break e;
          fp(r, a, c), (o = l);
        }
      else
        for (s = 0; s < i.length; s++) {
          if (
            ((a = i[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== o && r.isPropagationStopped())
          )
            break e;
          fp(r, a, c), (o = l);
        }
    }
  }
  if (Ks) throw ((e = xu), (Ks = !1), (xu = null), e);
}
function ue(e, t) {
  var n = t[Ru];
  n === void 0 && (n = t[Ru] = new Set());
  var i = e + "__bubble";
  n.has(i) || (lb(t, e, 2, !1), n.add(i));
}
function ac(e, t, n) {
  var i = 0;
  t && (i |= 4), lb(n, e, i, t);
}
var cs = "_reactListening" + Math.random().toString(36).slice(2);
function So(e) {
  if (!e[cs]) {
    (e[cs] = !0),
      mv.forEach(function (n) {
        n !== "selectionchange" && (mk.has(n) || ac(n, !1, e), ac(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cs] || ((t[cs] = !0), ac("selectionchange", !1, t));
  }
}
function lb(e, t, n, i) {
  switch (qv(t)) {
    case 1:
      var r = Ax;
      break;
    case 4:
      r = Ox;
      break;
    default:
      r = Kd;
  }
  (n = r.bind(null, t, n, e)),
    (r = void 0),
    !wu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (r = !0),
    i
      ? r !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: r })
        : e.addEventListener(t, n, !0)
      : r !== void 0
      ? e.addEventListener(t, n, { passive: r })
      : e.addEventListener(t, n, !1);
}
function lc(e, t, n, i, r) {
  var o = i;
  if (!(t & 1) && !(t & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var s = i.tag;
      if (s === 3 || s === 4) {
        var a = i.stateNode.containerInfo;
        if (a === r || (a.nodeType === 8 && a.parentNode === r)) break;
        if (s === 4)
          for (s = i.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === r || (l.nodeType === 8 && l.parentNode === r))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = ni(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            i = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      i = i.return;
    }
  Rv(function () {
    var c = o,
      u = Wd(n),
      d = [];
    e: {
      var f = sb.get(e);
      if (f !== void 0) {
        var h = Zd,
          m = e;
        switch (e) {
          case "keypress":
            if (Rs(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = qx;
            break;
          case "focusin":
            (m = "focus"), (h = tc);
            break;
          case "focusout":
            (m = "blur"), (h = tc);
            break;
          case "beforeblur":
          case "afterblur":
            h = tc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = ep;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Lx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Gx;
            break;
          case nb:
          case ib:
          case rb:
            h = Bx;
            break;
          case ob:
            h = Kx;
            break;
          case "scroll":
            h = Rx;
            break;
          case "wheel":
            h = Zx;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = jx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = np;
        }
        var b = (t & 4) !== 0,
          k = !b && e === "scroll",
          g = b ? (f !== null ? f + "Capture" : null) : f;
        b = [];
        for (var p = c, v; p !== null; ) {
          v = p;
          var y = v.stateNode;
          if (
            (v.tag === 5 &&
              y !== null &&
              ((v = y),
              g !== null && ((y = bo(p, g)), y != null && b.push(Co(p, y, v)))),
            k)
          )
            break;
          p = p.return;
        }
        0 < b.length &&
          ((f = new h(f, m, null, n, u)), d.push({ event: f, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== bu &&
            (m = n.relatedTarget || n.fromElement) &&
            (ni(m) || m[wn]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            u.window === u
              ? u
              : (f = u.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((m = n.relatedTarget || n.toElement),
              (h = c),
              (m = m ? ni(m) : null),
              m !== null &&
                ((k = Ci(m)), m !== k || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((h = null), (m = c)),
          h !== m)
        ) {
          if (
            ((b = ep),
            (y = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((b = np),
              (y = "onPointerLeave"),
              (g = "onPointerEnter"),
              (p = "pointer")),
            (k = h == null ? f : Xi(h)),
            (v = m == null ? f : Xi(m)),
            (f = new b(y, p + "leave", h, n, u)),
            (f.target = k),
            (f.relatedTarget = v),
            (y = null),
            ni(u) === c &&
              ((b = new b(g, p + "enter", m, n, u)),
              (b.target = v),
              (b.relatedTarget = k),
              (y = b)),
            (k = y),
            h && m)
          )
            t: {
              for (b = h, g = m, p = 0, v = b; v; v = Ii(v)) p++;
              for (v = 0, y = g; y; y = Ii(y)) v++;
              for (; 0 < p - v; ) (b = Ii(b)), p--;
              for (; 0 < v - p; ) (g = Ii(g)), v--;
              for (; p--; ) {
                if (b === g || (g !== null && b === g.alternate)) break t;
                (b = Ii(b)), (g = Ii(g));
              }
              b = null;
            }
          else b = null;
          h !== null && hp(d, f, h, b, !1),
            m !== null && k !== null && hp(d, k, m, b, !0);
        }
      }
      e: {
        if (
          ((f = c ? Xi(c) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var E = ok;
        else if (op(f))
          if (Qv) E = ck;
          else {
            E = ak;
            var T = sk;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (E = lk);
        if (E && (E = E(e, c))) {
          Kv(d, E, n, u);
          break e;
        }
        T && T(e, f, c),
          e === "focusout" &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === "number" &&
            hu(f, "number", f.value);
      }
      switch (((T = c ? Xi(c) : window), e)) {
        case "focusin":
          (op(T) || T.contentEditable === "true") &&
            ((Yi = T), (Cu = c), (so = null));
          break;
        case "focusout":
          so = Cu = Yi = null;
          break;
        case "mousedown":
          $u = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ($u = !1), up(d, n, u);
          break;
        case "selectionchange":
          if (fk) break;
        case "keydown":
        case "keyup":
          up(d, n, u);
      }
      var w;
      if (ef)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Wi
          ? Gv(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Yv &&
          n.locale !== "ko" &&
          (Wi || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Wi && (w = Wv())
            : ((Ln = u),
              (Qd = "value" in Ln ? Ln.value : Ln.textContent),
              (Wi = !0))),
        (T = ta(c, P)),
        0 < T.length &&
          ((P = new tp(P, e, null, n, u)),
          d.push({ event: P, listeners: T }),
          w ? (P.data = w) : ((w = Xv(n)), w !== null && (P.data = w)))),
        (w = ek ? tk(e, n) : nk(e, n)) &&
          ((c = ta(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new tp("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = w)));
    }
    ab(d, t);
  });
}
function Co(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ta(e, t) {
  for (var n = t + "Capture", i = []; e !== null; ) {
    var r = e,
      o = r.stateNode;
    r.tag === 5 &&
      o !== null &&
      ((r = o),
      (o = bo(e, n)),
      o != null && i.unshift(Co(e, o, r)),
      (o = bo(e, t)),
      o != null && i.push(Co(e, o, r))),
      (e = e.return);
  }
  return i;
}
function Ii(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hp(e, t, n, i, r) {
  for (var o = t._reactName, s = []; n !== null && n !== i; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === i) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      r
        ? ((l = bo(n, o)), l != null && s.unshift(Co(n, l, a)))
        : r || ((l = bo(n, o)), l != null && s.push(Co(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var gk = /\r\n?/g,
  vk = /\u0000|\uFFFD/g;
function pp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      gk,
      `
`
    )
    .replace(vk, "");
}
function us(e, t, n) {
  if (((t = pp(t)), pp(e) !== t && n)) throw Error(R(425));
}
function na() {}
var Pu = null,
  Tu = null;
function Au(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ou = typeof setTimeout == "function" ? setTimeout : void 0,
  bk = typeof clearTimeout == "function" ? clearTimeout : void 0,
  mp = typeof Promise == "function" ? Promise : void 0,
  yk =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof mp < "u"
      ? function (e) {
          return mp.resolve(null).then(e).catch(wk);
        }
      : Ou;
function wk(e) {
  setTimeout(function () {
    throw e;
  });
}
function cc(e, t) {
  var n = t,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          e.removeChild(r), xo(t);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  xo(t);
}
function zn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function gp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Tr = Math.random().toString(36).slice(2),
  nn = "__reactFiber$" + Tr,
  $o = "__reactProps$" + Tr,
  wn = "__reactContainer$" + Tr,
  Ru = "__reactEvents$" + Tr,
  xk = "__reactListeners$" + Tr,
  kk = "__reactHandles$" + Tr;
function ni(e) {
  var t = e[nn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[wn] || n[nn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = gp(e); e !== null; ) {
          if ((n = e[nn])) return n;
          e = gp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ho(e) {
  return (
    (e = e[nn] || e[wn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Va(e) {
  return e[$o] || null;
}
var Iu = [],
  Ki = -1;
function Kn(e) {
  return { current: e };
}
function he(e) {
  0 > Ki || ((e.current = Iu[Ki]), (Iu[Ki] = null), Ki--);
}
function ce(e, t) {
  Ki++, (Iu[Ki] = e.current), (e.current = t);
}
var qn = {},
  Xe = Kn(qn),
  ct = Kn(!1),
  fi = qn;
function pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qn;
  var i = e.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    o;
  for (o in n) r[o] = t[o];
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function ut(e) {
  return (e = e.childContextTypes), e != null;
}
function ia() {
  he(ct), he(Xe);
}
function vp(e, t, n) {
  if (Xe.current !== qn) throw Error(R(168));
  ce(Xe, t), ce(ct, n);
}
function cb(e, t, n) {
  var i = e.stateNode;
  if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in t)) throw Error(R(108, sx(e) || "Unknown", r));
  return be({}, n, i);
}
function ra(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || qn),
    (fi = Xe.current),
    ce(Xe, e),
    ce(ct, ct.current),
    !0
  );
}
function bp(e, t, n) {
  var i = e.stateNode;
  if (!i) throw Error(R(169));
  n
    ? ((e = cb(e, t, fi)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      he(ct),
      he(Xe),
      ce(Xe, e))
    : he(ct),
    ce(ct, n);
}
var pn = null,
  qa = !1,
  uc = !1;
function ub(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function Ek(e) {
  (qa = !0), ub(e);
}
function Qn() {
  if (!uc && pn !== null) {
    uc = !0;
    var e = 0,
      t = re;
    try {
      var n = pn;
      for (re = 1; e < n.length; e++) {
        var i = n[e];
        do i = i(!0);
        while (i !== null);
      }
      (pn = null), (qa = !1);
    } catch (r) {
      throw (pn !== null && (pn = pn.slice(e + 1)), Mv(Yd, Qn), r);
    } finally {
      (re = t), (uc = !1);
    }
  }
  return null;
}
var Qi = [],
  Zi = 0,
  oa = null,
  sa = 0,
  At = [],
  Ot = 0,
  hi = null,
  gn = 1,
  vn = "";
function ei(e, t) {
  (Qi[Zi++] = sa), (Qi[Zi++] = oa), (oa = e), (sa = t);
}
function db(e, t, n) {
  (At[Ot++] = gn), (At[Ot++] = vn), (At[Ot++] = hi), (hi = e);
  var i = gn;
  e = vn;
  var r = 32 - Vt(i) - 1;
  (i &= ~(1 << r)), (n += 1);
  var o = 32 - Vt(t) + r;
  if (30 < o) {
    var s = r - (r % 5);
    (o = (i & ((1 << s) - 1)).toString(32)),
      (i >>= s),
      (r -= s),
      (gn = (1 << (32 - Vt(t) + r)) | (n << r) | i),
      (vn = o + e);
  } else (gn = (1 << o) | (n << r) | i), (vn = e);
}
function nf(e) {
  e.return !== null && (ei(e, 1), db(e, 1, 0));
}
function rf(e) {
  for (; e === oa; )
    (oa = Qi[--Zi]), (Qi[Zi] = null), (sa = Qi[--Zi]), (Qi[Zi] = null);
  for (; e === hi; )
    (hi = At[--Ot]),
      (At[Ot] = null),
      (vn = At[--Ot]),
      (At[Ot] = null),
      (gn = At[--Ot]),
      (At[Ot] = null);
}
var wt = null,
  yt = null,
  me = !1,
  Nt = null;
function fb(e, t) {
  var n = Rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function yp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (wt = e), (yt = zn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (wt = e), (yt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hi !== null ? { id: gn, overflow: vn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (wt = e),
            (yt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Lu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _u(e) {
  if (me) {
    var t = yt;
    if (t) {
      var n = t;
      if (!yp(e, t)) {
        if (Lu(e)) throw Error(R(418));
        t = zn(n.nextSibling);
        var i = wt;
        t && yp(e, t)
          ? fb(i, n)
          : ((e.flags = (e.flags & -4097) | 2), (me = !1), (wt = e));
      }
    } else {
      if (Lu(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (me = !1), (wt = e);
    }
  }
}
function wp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  wt = e;
}
function ds(e) {
  if (e !== wt) return !1;
  if (!me) return wp(e), (me = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Au(e.type, e.memoizedProps))),
    t && (t = yt))
  ) {
    if (Lu(e)) throw (hb(), Error(R(418)));
    for (; t; ) fb(e, t), (t = zn(t.nextSibling));
  }
  if ((wp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              yt = zn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      yt = null;
    }
  } else yt = wt ? zn(e.stateNode.nextSibling) : null;
  return !0;
}
function hb() {
  for (var e = yt; e; ) e = zn(e.nextSibling);
}
function mr() {
  (yt = wt = null), (me = !1);
}
function of(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
var Sk = En.ReactCurrentBatchConfig;
function zt(e, t) {
  if (e && e.defaultProps) {
    (t = be({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var aa = Kn(null),
  la = null,
  Ji = null,
  sf = null;
function af() {
  sf = Ji = la = null;
}
function lf(e) {
  var t = aa.current;
  he(aa), (e._currentValue = t);
}
function Mu(e, t, n) {
  for (; e !== null; ) {
    var i = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
        : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ar(e, t) {
  (la = e),
    (sf = Ji = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (st = !0), (e.firstContext = null));
}
function Lt(e) {
  var t = e._currentValue;
  if (sf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ji === null)) {
      if (la === null) throw Error(R(308));
      (Ji = e), (la.dependencies = { lanes: 0, firstContext: e });
    } else Ji = Ji.next = e;
  return t;
}
var ii = null;
function cf(e) {
  ii === null ? (ii = [e]) : ii.push(e);
}
function pb(e, t, n, i) {
  var r = t.interleaved;
  return (
    r === null ? ((n.next = n), cf(t)) : ((n.next = r.next), (r.next = n)),
    (t.interleaved = n),
    xn(e, i)
  );
}
function xn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Tn = !1;
function uf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function mb(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function bn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Fn(e, t, n) {
  var i = e.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), ee & 2)) {
    var r = i.pending;
    return (
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (i.pending = t),
      xn(e, n)
    );
  }
  return (
    (r = i.interleaved),
    r === null ? ((t.next = t), cf(i)) : ((t.next = r.next), (r.next = t)),
    (i.interleaved = t),
    xn(e, n)
  );
}
function Is(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var i = t.lanes;
    (i &= e.pendingLanes), (n |= i), (t.lanes = n), Gd(e, n);
  }
}
function xp(e, t) {
  var n = e.updateQueue,
    i = e.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (r = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (r = o = t) : (o = o.next = t);
    } else r = o = t;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: o,
      shared: i.shared,
      effects: i.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ca(e, t, n, i) {
  var r = e.updateQueue;
  Tn = !1;
  var o = r.firstBaseUpdate,
    s = r.lastBaseUpdate,
    a = r.shared.pending;
  if (a !== null) {
    r.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (o = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== s &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = r.baseState;
    (s = 0), (u = c = l = null), (a = o);
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((i & f) === f) {
        u !== null &&
          (u = u.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var m = e,
            b = a;
          switch (((f = t), (h = n), b.tag)) {
            case 1:
              if (((m = b.payload), typeof m == "function")) {
                d = m.call(h, d, f);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = b.payload),
                (f = typeof m == "function" ? m.call(h, d, f) : m),
                f == null)
              )
                break e;
              d = be({}, d, f);
              break e;
            case 2:
              Tn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = r.effects),
          f === null ? (r.effects = [a]) : f.push(a));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = h), (l = d)) : (u = u.next = h),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = r.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (r.lastBaseUpdate = f),
          (r.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (l = d),
      (r.baseState = l),
      (r.firstBaseUpdate = c),
      (r.lastBaseUpdate = u),
      (t = r.shared.interleaved),
      t !== null)
    ) {
      r = t;
      do (s |= r.lane), (r = r.next);
      while (r !== t);
    } else o === null && (r.shared.lanes = 0);
    (mi |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function kp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function"))
          throw Error(R(191, r));
        r.call(i);
      }
    }
}
var gb = new pv.Component().refs;
function Bu(e, t, n, i) {
  (t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : be({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ci(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var i = Je(),
      r = Hn(e),
      o = bn(i, r);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Fn(e, o, r)),
      t !== null && (qt(t, e, r, i), Is(t, e, r));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var i = Je(),
      r = Hn(e),
      o = bn(i, r);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Fn(e, o, r)),
      t !== null && (qt(t, e, r, i), Is(t, e, r));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Je(),
      i = Hn(e),
      r = bn(n, i);
    (r.tag = 2),
      t != null && (r.callback = t),
      (t = Fn(e, r, i)),
      t !== null && (qt(t, e, i, n), Is(t, e, i));
  },
};
function Ep(e, t, n, i, r, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(i, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Eo(n, i) || !Eo(r, o)
      : !0
  );
}
function vb(e, t, n) {
  var i = !1,
    r = qn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Lt(o))
      : ((r = ut(t) ? fi : Xe.current),
        (i = t.contextTypes),
        (o = (i = i != null) ? pr(e, r) : qn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Wa),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Sp(e, t, n, i) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && Wa.enqueueReplaceState(t, t.state, null);
}
function Du(e, t, n, i) {
  var r = e.stateNode;
  (r.props = n), (r.state = e.memoizedState), (r.refs = gb), uf(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (r.context = Lt(o))
    : ((o = ut(t) ? fi : Xe.current), (r.context = pr(e, o))),
    (r.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Bu(e, t, o, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      t !== r.state && Wa.enqueueReplaceState(r, r.state, null),
      ca(e, n, r, i),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(R(147, e));
      var r = i,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = r.refs;
            a === gb && (a = r.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function fs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Cp(e) {
  var t = e._init;
  return t(e._payload);
}
function bb(e) {
  function t(g, p) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [p]), (g.flags |= 16)) : v.push(p);
    }
  }
  function n(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), (p = p.sibling);
    return null;
  }
  function i(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function r(g, p) {
    return (g = Un(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, p, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((g.flags |= 2), p) : v)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, p, v, y) {
    return p === null || p.tag !== 6
      ? ((p = vc(v, g.mode, y)), (p.return = g), p)
      : ((p = r(p, v)), (p.return = g), p);
  }
  function l(g, p, v, y) {
    var E = v.type;
    return E === qi
      ? u(g, p, v.props.children, y, v.key)
      : p !== null &&
        (p.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Pn &&
            Cp(E) === p.type))
      ? ((y = r(p, v.props)), (y.ref = Nr(g, p, v)), (y.return = g), y)
      : ((y = js(v.type, v.key, v.props, null, g.mode, y)),
        (y.ref = Nr(g, p, v)),
        (y.return = g),
        y);
  }
  function c(g, p, v, y) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = bc(v, g.mode, y)), (p.return = g), p)
      : ((p = r(p, v.children || [])), (p.return = g), p);
  }
  function u(g, p, v, y, E) {
    return p === null || p.tag !== 7
      ? ((p = ci(v, g.mode, y, E)), (p.return = g), p)
      : ((p = r(p, v)), (p.return = g), p);
  }
  function d(g, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = vc("" + p, g.mode, v)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ts:
          return (
            (v = js(p.type, p.key, p.props, null, g.mode, v)),
            (v.ref = Nr(g, null, p)),
            (v.return = g),
            v
          );
        case Vi:
          return (p = bc(p, g.mode, v)), (p.return = g), p;
        case Pn:
          var y = p._init;
          return d(g, y(p._payload), v);
      }
      if (Kr(p) || Br(p))
        return (p = ci(p, g.mode, v, null)), (p.return = g), p;
      fs(g, p);
    }
    return null;
  }
  function f(g, p, v, y) {
    var E = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return E !== null ? null : a(g, p, "" + v, y);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ts:
          return v.key === E ? l(g, p, v, y) : null;
        case Vi:
          return v.key === E ? c(g, p, v, y) : null;
        case Pn:
          return (E = v._init), f(g, p, E(v._payload), y);
      }
      if (Kr(v) || Br(v)) return E !== null ? null : u(g, p, v, y, null);
      fs(g, v);
    }
    return null;
  }
  function h(g, p, v, y, E) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (g = g.get(v) || null), a(p, g, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ts:
          return (g = g.get(y.key === null ? v : y.key) || null), l(p, g, y, E);
        case Vi:
          return (g = g.get(y.key === null ? v : y.key) || null), c(p, g, y, E);
        case Pn:
          var T = y._init;
          return h(g, p, v, T(y._payload), E);
      }
      if (Kr(y) || Br(y)) return (g = g.get(v) || null), u(p, g, y, E, null);
      fs(p, y);
    }
    return null;
  }
  function m(g, p, v, y) {
    for (
      var E = null, T = null, w = p, P = (p = 0), F = null;
      w !== null && P < v.length;
      P++
    ) {
      w.index > P ? ((F = w), (w = null)) : (F = w.sibling);
      var _ = f(g, w, v[P], y);
      if (_ === null) {
        w === null && (w = F);
        break;
      }
      e && w && _.alternate === null && t(g, w),
        (p = o(_, p, P)),
        T === null ? (E = _) : (T.sibling = _),
        (T = _),
        (w = F);
    }
    if (P === v.length) return n(g, w), me && ei(g, P), E;
    if (w === null) {
      for (; P < v.length; P++)
        (w = d(g, v[P], y)),
          w !== null &&
            ((p = o(w, p, P)), T === null ? (E = w) : (T.sibling = w), (T = w));
      return me && ei(g, P), E;
    }
    for (w = i(g, w); P < v.length; P++)
      (F = h(w, g, P, v[P], y)),
        F !== null &&
          (e && F.alternate !== null && w.delete(F.key === null ? P : F.key),
          (p = o(F, p, P)),
          T === null ? (E = F) : (T.sibling = F),
          (T = F));
    return (
      e &&
        w.forEach(function (I) {
          return t(g, I);
        }),
      me && ei(g, P),
      E
    );
  }
  function b(g, p, v, y) {
    var E = Br(v);
    if (typeof E != "function") throw Error(R(150));
    if (((v = E.call(v)), v == null)) throw Error(R(151));
    for (
      var T = (E = null), w = p, P = (p = 0), F = null, _ = v.next();
      w !== null && !_.done;
      P++, _ = v.next()
    ) {
      w.index > P ? ((F = w), (w = null)) : (F = w.sibling);
      var I = f(g, w, _.value, y);
      if (I === null) {
        w === null && (w = F);
        break;
      }
      e && w && I.alternate === null && t(g, w),
        (p = o(I, p, P)),
        T === null ? (E = I) : (T.sibling = I),
        (T = I),
        (w = F);
    }
    if (_.done) return n(g, w), me && ei(g, P), E;
    if (w === null) {
      for (; !_.done; P++, _ = v.next())
        (_ = d(g, _.value, y)),
          _ !== null &&
            ((p = o(_, p, P)), T === null ? (E = _) : (T.sibling = _), (T = _));
      return me && ei(g, P), E;
    }
    for (w = i(g, w); !_.done; P++, _ = v.next())
      (_ = h(w, g, P, _.value, y)),
        _ !== null &&
          (e && _.alternate !== null && w.delete(_.key === null ? P : _.key),
          (p = o(_, p, P)),
          T === null ? (E = _) : (T.sibling = _),
          (T = _));
    return (
      e &&
        w.forEach(function (q) {
          return t(g, q);
        }),
      me && ei(g, P),
      E
    );
  }
  function k(g, p, v, y) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === qi &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case ts:
          e: {
            for (var E = v.key, T = p; T !== null; ) {
              if (T.key === E) {
                if (((E = v.type), E === qi)) {
                  if (T.tag === 7) {
                    n(g, T.sibling),
                      (p = r(T, v.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  T.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Pn &&
                    Cp(E) === T.type)
                ) {
                  n(g, T.sibling),
                    (p = r(T, v.props)),
                    (p.ref = Nr(g, T, v)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                n(g, T);
                break;
              } else t(g, T);
              T = T.sibling;
            }
            v.type === qi
              ? ((p = ci(v.props.children, g.mode, y, v.key)),
                (p.return = g),
                (g = p))
              : ((y = js(v.type, v.key, v.props, null, g.mode, y)),
                (y.ref = Nr(g, p, v)),
                (y.return = g),
                (g = y));
          }
          return s(g);
        case Vi:
          e: {
            for (T = v.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(g, p.sibling),
                    (p = r(p, v.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              else t(g, p);
              p = p.sibling;
            }
            (p = bc(v, g.mode, y)), (p.return = g), (g = p);
          }
          return s(g);
        case Pn:
          return (T = v._init), k(g, p, T(v._payload), y);
      }
      if (Kr(v)) return m(g, p, v, y);
      if (Br(v)) return b(g, p, v, y);
      fs(g, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(g, p.sibling), (p = r(p, v)), (p.return = g), (g = p))
          : (n(g, p), (p = vc(v, g.mode, y)), (p.return = g), (g = p)),
        s(g))
      : n(g, p);
  }
  return k;
}
var gr = bb(!0),
  yb = bb(!1),
  Uo = {},
  sn = Kn(Uo),
  Po = Kn(Uo),
  To = Kn(Uo);
function ri(e) {
  if (e === Uo) throw Error(R(174));
  return e;
}
function df(e, t) {
  switch ((ce(To, t), ce(Po, e), ce(sn, Uo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : mu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = mu(t, e));
  }
  he(sn), ce(sn, t);
}
function vr() {
  he(sn), he(Po), he(To);
}
function wb(e) {
  ri(To.current);
  var t = ri(sn.current),
    n = mu(t, e.type);
  t !== n && (ce(Po, e), ce(sn, n));
}
function ff(e) {
  Po.current === e && (he(sn), he(Po));
}
var ge = Kn(0);
function ua(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var dc = [];
function hf() {
  for (var e = 0; e < dc.length; e++)
    dc[e]._workInProgressVersionPrimary = null;
  dc.length = 0;
}
var Ls = En.ReactCurrentDispatcher,
  fc = En.ReactCurrentBatchConfig,
  pi = 0,
  ve = null,
  Oe = null,
  Ie = null,
  da = !1,
  ao = !1,
  Ao = 0,
  Ck = 0;
function We() {
  throw Error(R(321));
}
function pf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xt(e[n], t[n])) return !1;
  return !0;
}
function mf(e, t, n, i, r, o) {
  if (
    ((pi = o),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ls.current = e === null || e.memoizedState === null ? Ak : Ok),
    (e = n(i, r)),
    ao)
  ) {
    o = 0;
    do {
      if (((ao = !1), (Ao = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (Ie = Oe = null),
        (t.updateQueue = null),
        (Ls.current = Rk),
        (e = n(i, r));
    } while (ao);
  }
  if (
    ((Ls.current = fa),
    (t = Oe !== null && Oe.next !== null),
    (pi = 0),
    (Ie = Oe = ve = null),
    (da = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function gf() {
  var e = Ao !== 0;
  return (Ao = 0), e;
}
function Jt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ie === null ? (ve.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie;
}
function _t() {
  if (Oe === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Oe.next;
  var t = Ie === null ? ve.memoizedState : Ie.next;
  if (t !== null) (Ie = t), (Oe = e);
  else {
    if (e === null) throw Error(R(310));
    (Oe = e),
      (e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null,
      }),
      Ie === null ? (ve.memoizedState = Ie = e) : (Ie = Ie.next = e);
  }
  return Ie;
}
function Oo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hc(e) {
  var t = _t(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var i = Oe,
    r = i.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (r !== null) {
      var s = r.next;
      (r.next = o.next), (o.next = s);
    }
    (i.baseQueue = r = o), (n.pending = null);
  }
  if (r !== null) {
    (o = r.next), (i = i.baseState);
    var a = (s = null),
      l = null,
      c = o;
    do {
      var u = c.lane;
      if ((pi & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (i = c.hasEagerState ? c.eagerState : e(i, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = i)) : (l = l.next = d),
          (ve.lanes |= u),
          (mi |= u);
      }
      c = c.next;
    } while (c !== null && c !== o);
    l === null ? (s = i) : (l.next = a),
      Xt(i, t.memoizedState) || (st = !0),
      (t.memoizedState = i),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = i);
  }
  if (((e = n.interleaved), e !== null)) {
    r = e;
    do (o = r.lane), (ve.lanes |= o), (mi |= o), (r = r.next);
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pc(e) {
  var t = _t(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var i = n.dispatch,
    r = n.pending,
    o = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var s = (r = r.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== r);
    Xt(o, t.memoizedState) || (st = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, i];
}
function xb() {}
function kb(e, t) {
  var n = ve,
    i = _t(),
    r = t(),
    o = !Xt(i.memoizedState, r);
  if (
    (o && ((i.memoizedState = r), (st = !0)),
    (i = i.queue),
    vf(Cb.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || o || (Ie !== null && Ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ro(9, Sb.bind(null, n, i, r, t), void 0, null),
      Be === null)
    )
      throw Error(R(349));
    pi & 30 || Eb(n, t, r);
  }
  return r;
}
function Eb(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Sb(e, t, n, i) {
  (t.value = n), (t.getSnapshot = i), $b(t) && Pb(e);
}
function Cb(e, t, n) {
  return n(function () {
    $b(t) && Pb(e);
  });
}
function $b(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xt(e, n);
  } catch (i) {
    return !0;
  }
}
function Pb(e) {
  var t = xn(e, 1);
  t !== null && qt(t, e, 1, -1);
}
function $p(e) {
  var t = Jt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Oo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Tk.bind(null, ve, e)),
    [t.memoizedState, e]
  );
}
function Ro(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  );
}
function Tb() {
  return _t().memoizedState;
}
function _s(e, t, n, i) {
  var r = Jt();
  (ve.flags |= e),
    (r.memoizedState = Ro(1 | t, n, void 0, i === void 0 ? null : i));
}
function Ya(e, t, n, i) {
  var r = _t();
  i = i === void 0 ? null : i;
  var o = void 0;
  if (Oe !== null) {
    var s = Oe.memoizedState;
    if (((o = s.destroy), i !== null && pf(i, s.deps))) {
      r.memoizedState = Ro(t, n, o, i);
      return;
    }
  }
  (ve.flags |= e), (r.memoizedState = Ro(1 | t, n, o, i));
}
function Pp(e, t) {
  return _s(8390656, 8, e, t);
}
function vf(e, t) {
  return Ya(2048, 8, e, t);
}
function Ab(e, t) {
  return Ya(4, 2, e, t);
}
function Ob(e, t) {
  return Ya(4, 4, e, t);
}
function Rb(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ib(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ya(4, 4, Rb.bind(null, t, e), n)
  );
}
function bf() {}
function Lb(e, t) {
  var n = _t();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && pf(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e);
}
function _b(e, t) {
  var n = _t();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && pf(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Mb(e, t, n) {
  return pi & 21
    ? (Xt(n, t) || ((n = jv()), (ve.lanes |= n), (mi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = n));
}
function $k(e, t) {
  var n = re;
  (re = n !== 0 && 4 > n ? n : 4), e(!0);
  var i = fc.transition;
  fc.transition = {};
  try {
    e(!1), t();
  } finally {
    (re = n), (fc.transition = i);
  }
}
function Bb() {
  return _t().memoizedState;
}
function Pk(e, t, n) {
  var i = Hn(e);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Db(e))
  )
    jb(t, n);
  else if (((n = pb(e, t, n, i)), n !== null)) {
    var r = Je();
    qt(n, e, i, r), zb(n, t, i);
  }
}
function Tk(e, t, n) {
  var i = Hn(e),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Db(e)) jb(t, r);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((r.hasEagerState = !0), (r.eagerState = a), Xt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((r.next = r), cf(t))
            : ((r.next = l.next), (l.next = r)),
            (t.interleaved = r);
          return;
        }
      } catch (c) {
      } finally {
      }
    (n = pb(e, t, r, i)),
      n !== null && ((r = Je()), qt(n, e, i, r), zb(n, t, i));
  }
}
function Db(e) {
  var t = e.alternate;
  return e === ve || (t !== null && t === ve);
}
function jb(e, t) {
  ao = da = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zb(e, t, n) {
  if (n & 4194240) {
    var i = t.lanes;
    (i &= e.pendingLanes), (n |= i), (t.lanes = n), Gd(e, n);
  }
}
var fa = {
    readContext: Lt,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1,
  },
  Ak = {
    readContext: Lt,
    useCallback: function (e, t) {
      return (Jt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Lt,
    useEffect: Pp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _s(4194308, 4, Rb.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _s(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _s(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Jt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var i = Jt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (i.memoizedState = i.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (i.queue = e),
        (e = e.dispatch = Pk.bind(null, ve, e)),
        [i.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Jt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $p,
    useDebugValue: bf,
    useDeferredValue: function (e) {
      return (Jt().memoizedState = e);
    },
    useTransition: function () {
      var e = $p(!1),
        t = e[0];
      return (e = $k.bind(null, e[1])), (Jt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = ve,
        r = Jt();
      if (me) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Be === null)) throw Error(R(349));
        pi & 30 || Eb(i, t, n);
      }
      r.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (r.queue = o),
        Pp(Cb.bind(null, i, o, e), [e]),
        (i.flags |= 2048),
        Ro(9, Sb.bind(null, i, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Jt(),
        t = Be.identifierPrefix;
      if (me) {
        var n = vn,
          i = gn;
        (n = (i & ~(1 << (32 - Vt(i) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ao++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ck++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ok = {
    readContext: Lt,
    useCallback: Lb,
    useContext: Lt,
    useEffect: vf,
    useImperativeHandle: Ib,
    useInsertionEffect: Ab,
    useLayoutEffect: Ob,
    useMemo: _b,
    useReducer: hc,
    useRef: Tb,
    useState: function () {
      return hc(Oo);
    },
    useDebugValue: bf,
    useDeferredValue: function (e) {
      var t = _t();
      return Mb(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = hc(Oo)[0],
        t = _t().memoizedState;
      return [e, t];
    },
    useMutableSource: xb,
    useSyncExternalStore: kb,
    useId: Bb,
    unstable_isNewReconciler: !1,
  },
  Rk = {
    readContext: Lt,
    useCallback: Lb,
    useContext: Lt,
    useEffect: vf,
    useImperativeHandle: Ib,
    useInsertionEffect: Ab,
    useLayoutEffect: Ob,
    useMemo: _b,
    useReducer: pc,
    useRef: Tb,
    useState: function () {
      return pc(Oo);
    },
    useDebugValue: bf,
    useDeferredValue: function (e) {
      var t = _t();
      return Oe === null ? (t.memoizedState = e) : Mb(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = pc(Oo)[0],
        t = _t().memoizedState;
      return [e, t];
    },
    useMutableSource: xb,
    useSyncExternalStore: kb,
    useId: Bb,
    unstable_isNewReconciler: !1,
  };
function br(e, t) {
  try {
    var n = "",
      i = t;
    do (n += ox(i)), (i = i.return);
    while (i);
    var r = n;
  } catch (o) {
    r =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: r, digest: null };
}
function mc(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function ju(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ik = typeof WeakMap == "function" ? WeakMap : Map;
function Fb(e, t, n) {
  (n = bn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = t.value;
  return (
    (n.callback = function () {
      pa || ((pa = !0), (Gu = i)), ju(e, t);
    }),
    n
  );
}
function Nb(e, t, n) {
  (n = bn(-1, n)), (n.tag = 3);
  var i = e.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = t.value;
    (n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        ju(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ju(e, t),
          typeof i != "function" &&
            (Nn === null ? (Nn = new Set([this])) : Nn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Tp(e, t, n) {
  var i = e.pingCache;
  if (i === null) {
    i = e.pingCache = new Ik();
    var r = new Set();
    i.set(t, r);
  } else (r = i.get(t)), r === void 0 && ((r = new Set()), i.set(t, r));
  r.has(n) || (r.add(n), (e = Wk.bind(null, e, t, n)), t.then(e, e));
}
function Ap(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Op(e, t, n, i, r) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = r), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = bn(-1, 1)), (t.tag = 2), Fn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Lk = En.ReactCurrentOwner,
  st = !1;
function Ze(e, t, n, i) {
  t.child = e === null ? yb(t, null, n, i) : gr(t, e.child, n, i);
}
function Rp(e, t, n, i, r) {
  n = n.render;
  var o = t.ref;
  return (
    ar(t, r),
    (i = mf(e, t, n, i, o, r)),
    (n = gf()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        kn(e, t, r))
      : (me && n && nf(t), (t.flags |= 1), Ze(e, t, i, r), t.child)
  );
}
function Ip(e, t, n, i, r) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !$f(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Hb(e, t, o, i, r))
      : ((e = js(n.type, null, i, t, t.mode, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & r))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Eo), n(s, i) && e.ref === t.ref)
    )
      return kn(e, t, r);
  }
  return (
    (t.flags |= 1),
    (e = Un(o, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Hb(e, t, n, i, r) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Eo(o, i) && e.ref === t.ref)
      if (((st = !1), (t.pendingProps = i = o), (e.lanes & r) !== 0))
        e.flags & 131072 && (st = !0);
      else return (t.lanes = e.lanes), kn(e, t, r);
  }
  return zu(e, t, n, i, r);
}
function Ub(e, t, n) {
  var i = t.pendingProps,
    r = i.children,
    o = e !== null ? e.memoizedState : null;
  if (i.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(tr, gt),
        (gt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ce(tr, gt),
          (gt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = o !== null ? o.baseLanes : n),
        ce(tr, gt),
        (gt |= i);
    }
  else
    o !== null ? ((i = o.baseLanes | n), (t.memoizedState = null)) : (i = n),
      ce(tr, gt),
      (gt |= i);
  return Ze(e, t, r, n), t.child;
}
function Vb(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function zu(e, t, n, i, r) {
  var o = ut(n) ? fi : Xe.current;
  return (
    (o = pr(t, o)),
    ar(t, r),
    (n = mf(e, t, n, i, o, r)),
    (i = gf()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        kn(e, t, r))
      : (me && i && nf(t), (t.flags |= 1), Ze(e, t, n, r), t.child)
  );
}
function Lp(e, t, n, i, r) {
  if (ut(n)) {
    var o = !0;
    ra(t);
  } else o = !1;
  if ((ar(t, r), t.stateNode === null))
    Ms(e, t), vb(t, n, i), Du(t, n, i, r), (i = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Lt(c))
      : ((c = ut(n) ? fi : Xe.current), (c = pr(t, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== i || l !== c) && Sp(t, s, i, c)),
      (Tn = !1);
    var f = t.memoizedState;
    (s.state = f),
      ca(t, i, s, r),
      (l = t.memoizedState),
      a !== i || f !== l || ct.current || Tn
        ? (typeof u == "function" && (Bu(t, n, u, i), (l = t.memoizedState)),
          (a = Tn || Ep(t, n, a, i, f, l, c))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = i),
              (t.memoizedState = l)),
          (s.props = i),
          (s.state = l),
          (s.context = c),
          (i = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (i = !1));
  } else {
    (s = t.stateNode),
      mb(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : zt(t.type, a)),
      (s.props = c),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Lt(l))
        : ((l = ut(n) ? fi : Xe.current), (l = pr(t, l)));
    var h = n.getDerivedStateFromProps;
    (u =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Sp(t, s, i, l)),
      (Tn = !1),
      (f = t.memoizedState),
      (s.state = f),
      ca(t, i, s, r);
    var m = t.memoizedState;
    a !== d || f !== m || ct.current || Tn
      ? (typeof h == "function" && (Bu(t, n, h, i), (m = t.memoizedState)),
        (c = Tn || Ep(t, n, c, i, f, m, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(i, m, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(i, m, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = m)),
        (s.props = i),
        (s.state = m),
        (s.context = l),
        (i = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1));
  }
  return Fu(e, t, n, i, o, r);
}
function Fu(e, t, n, i, r, o) {
  Vb(e, t);
  var s = (t.flags & 128) !== 0;
  if (!i && !s) return r && bp(t, n, !1), kn(e, t, o);
  (i = t.stateNode), (Lk.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = gr(t, e.child, null, o)), (t.child = gr(t, null, a, o)))
      : Ze(e, t, a, o),
    (t.memoizedState = i.state),
    r && bp(t, n, !0),
    t.child
  );
}
function qb(e) {
  var t = e.stateNode;
  t.pendingContext
    ? vp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vp(e, t.context, !1),
    df(e, t.containerInfo);
}
function _p(e, t, n, i, r) {
  return mr(), of(r), (t.flags |= 256), Ze(e, t, n, i), t.child;
}
var Nu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Hu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wb(e, t, n) {
  var i = t.pendingProps,
    r = ge.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (r |= 1),
    ce(ge, r & 1),
    e === null)
  )
    return (
      _u(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = i.children),
          (e = i.fallback),
          o
            ? ((i = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(i & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Ka(s, i, 0, null)),
              (e = ci(e, i, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Hu(n)),
              (t.memoizedState = Nu),
              e)
            : yf(t, s))
    );
  if (((r = e.memoizedState), r !== null && ((a = r.dehydrated), a !== null)))
    return _k(e, t, s, i, a, r, n);
  if (o) {
    (o = i.fallback), (s = t.mode), (r = e.child), (a = r.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(s & 1) && t.child !== r
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null))
        : ((i = Un(r, l)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      a !== null ? (o = Un(a, o)) : ((o = ci(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (i.return = t),
      (i.sibling = o),
      (t.child = i),
      (i = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Hu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Nu),
      i
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (i = Un(o, { mode: "visible", children: i.children })),
    !(t.mode & 1) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function yf(e, t) {
  return (
    (t = Ka({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hs(e, t, n, i) {
  return (
    i !== null && of(i),
    gr(t, e.child, null, n),
    (e = yf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _k(e, t, n, i, r, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = mc(Error(R(422)))), hs(e, t, s, i))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = i.fallback),
        (r = t.mode),
        (i = Ka({ mode: "visible", children: i.children }, r, 0, null)),
        (o = ci(o, r, s, null)),
        (o.flags |= 2),
        (i.return = t),
        (o.return = t),
        (i.sibling = o),
        (t.child = i),
        t.mode & 1 && gr(t, e.child, null, s),
        (t.child.memoizedState = Hu(s)),
        (t.memoizedState = Nu),
        o);
  if (!(t.mode & 1)) return hs(e, t, s, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var a = i.dgst;
    return (i = a), (o = Error(R(419))), (i = mc(o, i, void 0)), hs(e, t, s, i);
  }
  if (((a = (s & e.childLanes) !== 0), st || a)) {
    if (((i = Be), i !== null)) {
      switch (s & -s) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
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
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (i.suspendedLanes | s) ? 0 : r),
        r !== 0 &&
          r !== o.retryLane &&
          ((o.retryLane = r), xn(e, r), qt(i, e, r, -1));
    }
    return Cf(), (i = mc(Error(R(421)))), hs(e, t, s, i);
  }
  return r.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Yk.bind(null, e)),
      (r._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (yt = zn(r.nextSibling)),
      (wt = t),
      (me = !0),
      (Nt = null),
      e !== null &&
        ((At[Ot++] = gn),
        (At[Ot++] = vn),
        (At[Ot++] = hi),
        (gn = e.id),
        (vn = e.overflow),
        (hi = t)),
      (t = yf(t, i.children)),
      (t.flags |= 4096),
      t);
}
function Mp(e, t, n) {
  e.lanes |= t;
  var i = e.alternate;
  i !== null && (i.lanes |= t), Mu(e.return, t, n);
}
function gc(e, t, n, i, r) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = i),
      (o.tail = n),
      (o.tailMode = r));
}
function Yb(e, t, n) {
  var i = t.pendingProps,
    r = i.revealOrder,
    o = i.tail;
  if ((Ze(e, t, i.children, n), (i = ge.current), i & 2))
    (i = (i & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mp(e, n, t);
        else if (e.tag === 19) Mp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    i &= 1;
  }
  if ((ce(ge, i), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; )
          (e = n.alternate),
            e !== null && ua(e) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          gc(t, !1, r, n, o);
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && ua(e) === null)) {
            t.child = r;
            break;
          }
          (e = r.sibling), (r.sibling = n), (n = r), (r = e);
        }
        gc(t, !0, n, null, o);
        break;
      case "together":
        gc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ms(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (mi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Un(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Un(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Mk(e, t, n) {
  switch (t.tag) {
    case 3:
      qb(t), mr();
      break;
    case 5:
      wb(t);
      break;
    case 1:
      ut(t.type) && ra(t);
      break;
    case 4:
      df(t, t.stateNode.containerInfo);
      break;
    case 10:
      var i = t.type._context,
        r = t.memoizedProps.value;
      ce(aa, i._currentValue), (i._currentValue = r);
      break;
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (ce(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Wb(e, t, n)
          : (ce(ge, ge.current & 1),
            (e = kn(e, t, n)),
            e !== null ? e.sibling : null);
      ce(ge, ge.current & 1);
      break;
    case 19:
      if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (i) return Yb(e, t, n);
        t.flags |= 128;
      }
      if (
        ((r = t.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        ce(ge, ge.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ub(e, t, n);
  }
  return kn(e, t, n);
}
var Gb, Uu, Xb, Kb;
Gb = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Uu = function () {};
Xb = function (e, t, n, i) {
  var r = e.memoizedProps;
  if (r !== i) {
    (e = t.stateNode), ri(sn.current);
    var o = null;
    switch (n) {
      case "input":
        (r = du(e, r)), (i = du(e, i)), (o = []);
        break;
      case "select":
        (r = be({}, r, { value: void 0 })),
          (i = be({}, i, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (r = pu(e, r)), (i = pu(e, i)), (o = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (e.onclick = na);
    }
    gu(n, i);
    var s;
    n = null;
    for (c in r)
      if (!i.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null)
        if (c === "style") {
          var a = r[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (go.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in i) {
      var l = i[c];
      if (
        ((a = r != null ? r[c] : void 0),
        i.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (go.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && ue("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(c, l));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Kb = function (e, t, n, i) {
  n !== i && (t.flags |= 4);
};
function Hr(e, t) {
  if (!me)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (i.sibling = null);
    }
}
function Ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    i = 0;
  if (t)
    for (var r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling);
  else
    for (r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = e),
        (r = r.sibling);
  return (e.subtreeFlags |= i), (e.childLanes = n), t;
}
function Bk(e, t, n) {
  var i = t.pendingProps;
  switch ((rf(t), t.tag)) {
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
      return Ye(t), null;
    case 1:
      return ut(t.type) && ia(), Ye(t), null;
    case 3:
      return (
        (i = t.stateNode),
        vr(),
        he(ct),
        he(Xe),
        hf(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (ds(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Nt !== null && (Qu(Nt), (Nt = null)))),
        Uu(e, t),
        Ye(t),
        null
      );
    case 5:
      ff(t);
      var r = ri(To.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Xb(e, t, n, i, r),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(R(166));
          return Ye(t), null;
        }
        if (((e = ri(sn.current)), ds(t))) {
          (i = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((i[nn] = t), (i[$o] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ue("cancel", i), ue("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Zr.length; r++) ue(Zr[r], i);
              break;
            case "source":
              ue("error", i);
              break;
            case "img":
            case "image":
            case "link":
              ue("error", i), ue("load", i);
              break;
            case "details":
              ue("toggle", i);
              break;
            case "input":
              Vh(i, o), ue("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!o.multiple }),
                ue("invalid", i);
              break;
            case "textarea":
              Wh(i, o), ue("invalid", i);
          }
          gu(n, o), (r = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? i.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      us(i.textContent, a, e),
                    (r = ["children", a]))
                  : typeof a == "number" &&
                    i.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      us(i.textContent, a, e),
                    (r = ["children", "" + a]))
                : go.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  ue("scroll", i);
            }
          switch (n) {
            case "input":
              ns(i), qh(i, o, !0);
              break;
            case "textarea":
              ns(i), Yh(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (i.onclick = na);
          }
          (i = r), (t.updateQueue = i), i !== null && (t.flags |= 4);
        } else {
          (s = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ev(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof i.is == "string"
                ? (e = s.createElement(n, { is: i.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    i.multiple
                      ? (s.multiple = !0)
                      : i.size && (s.size = i.size)))
              : (e = s.createElementNS(e, n)),
            (e[nn] = t),
            (e[$o] = i),
            Gb(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = vu(n, i)), n)) {
              case "dialog":
                ue("cancel", e), ue("close", e), (r = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), (r = i);
                break;
              case "video":
              case "audio":
                for (r = 0; r < Zr.length; r++) ue(Zr[r], e);
                r = i;
                break;
              case "source":
                ue("error", e), (r = i);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", e), ue("load", e), (r = i);
                break;
              case "details":
                ue("toggle", e), (r = i);
                break;
              case "input":
                Vh(e, i), (r = du(e, i)), ue("invalid", e);
                break;
              case "option":
                r = i;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = be({}, i, { value: void 0 })),
                  ue("invalid", e);
                break;
              case "textarea":
                Wh(e, i), (r = pu(e, i)), ue("invalid", e);
                break;
              default:
                r = i;
            }
            gu(n, r), (a = r);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? $v(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Sv(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && vo(e, l)
                    : typeof l == "number" && vo(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (go.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && ue("scroll", e)
                      : l != null && Hd(e, o, l, s));
              }
            switch (n) {
              case "input":
                ns(e), qh(e, i, !1);
                break;
              case "textarea":
                ns(e), Yh(e);
                break;
              case "option":
                i.value != null && e.setAttribute("value", "" + Vn(i.value));
                break;
              case "select":
                (e.multiple = !!i.multiple),
                  (o = i.value),
                  o != null
                    ? ir(e, !!i.multiple, o, !1)
                    : i.defaultValue != null &&
                      ir(e, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = na);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ye(t), null;
    case 6:
      if (e && t.stateNode != null) Kb(e, t, e.memoizedProps, i);
      else {
        if (typeof i != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = ri(To.current)), ri(sn.current), ds(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[nn] = t),
            (o = i.nodeValue !== n) && ((e = wt), e !== null))
          )
            switch (e.tag) {
              case 3:
                us(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  us(i.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[nn] = t),
            (t.stateNode = i);
      }
      return Ye(t), null;
    case 13:
      if (
        (he(ge),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (me && yt !== null && t.mode & 1 && !(t.flags & 128))
          hb(), mr(), (t.flags |= 98560), (o = !1);
        else if (((o = ds(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[nn] = t;
          } else
            mr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ye(t), (o = !1);
        } else Nt !== null && (Qu(Nt), (Nt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? Re === 0 && (Re = 3) : Cf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ye(t),
          null);
    case 4:
      return (
        vr(), Uu(e, t), e === null && So(t.stateNode.containerInfo), Ye(t), null
      );
    case 10:
      return lf(t.type._context), Ye(t), null;
    case 17:
      return ut(t.type) && ia(), Ye(t), null;
    case 19:
      if ((he(ge), (o = t.memoizedState), o === null)) return Ye(t), null;
      if (((i = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (i) Hr(o, !1);
        else {
          if (Re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ua(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Hr(o, !1),
                    i = s.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    i = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = i),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ce(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ke() > yr &&
            ((t.flags |= 128), (i = !0), Hr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!i)
          if (((e = ua(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !me)
            )
              return Ye(t), null;
          } else
            2 * ke() - o.renderingStartTime > yr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), Hr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ke()),
          (t.sibling = null),
          (n = ge.current),
          ce(ge, i ? (n & 1) | 2 : n & 1),
          t)
        : (Ye(t), null);
    case 22:
    case 23:
      return (
        Sf(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && t.mode & 1
          ? gt & 1073741824 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Dk(e, t) {
  switch ((rf(t), t.tag)) {
    case 1:
      return (
        ut(t.type) && ia(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vr(),
        he(ct),
        he(Xe),
        hf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ff(t), null;
    case 13:
      if (
        (he(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        mr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return he(ge), null;
    case 4:
      return vr(), null;
    case 10:
      return lf(t.type._context), null;
    case 22:
    case 23:
      return Sf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ps = !1,
  Ge = !1,
  jk = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function er(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        xe(e, t, i);
      }
    else n.current = null;
}
function Vu(e, t, n) {
  try {
    n();
  } catch (i) {
    xe(e, t, i);
  }
}
var Bp = !1;
function zk(e, t) {
  if (((Pu = Js), (e = eb()), tf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            o = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch (y) {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                d !== o || (i !== 0 && d.nodeType !== 3) || (l = s + i),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++c === r && (a = s),
                f === o && ++u === i && (l = s),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Tu = { focusedElem: e, selectionRange: n }, Js = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var b = m.memoizedProps,
                    k = m.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : zt(t.type, b),
                      k
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (y) {
          xe(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (m = Bp), (Bp = !1), m;
}
function lo(e, t, n) {
  var i = t.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & e) === e) {
        var o = r.destroy;
        (r.destroy = void 0), o !== void 0 && Vu(t, n, o);
      }
      r = r.next;
    } while (r !== i);
  }
}
function Ga(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== t);
  }
}
function qu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Qb(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Qb(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nn], delete t[$o], delete t[Ru], delete t[xk], delete t[kk])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Zb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Dp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zb(e.return)) return null;
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
function Wu(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = na));
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Wu(e, t, n), e = e.sibling; e !== null; ) Wu(e, t, n), (e = e.sibling);
}
function Yu(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Yu(e, t, n), e = e.sibling; e !== null; ) Yu(e, t, n), (e = e.sibling);
}
var Ne = null,
  Ft = !1;
function Cn(e, t, n) {
  for (n = n.child; n !== null; ) Jb(e, t, n), (n = n.sibling);
}
function Jb(e, t, n) {
  if (on && typeof on.onCommitFiberUnmount == "function")
    try {
      on.onCommitFiberUnmount(Fa, n);
    } catch (a) {}
  switch (n.tag) {
    case 5:
      Ge || er(n, t);
    case 6:
      var i = Ne,
        r = Ft;
      (Ne = null),
        Cn(e, t, n),
        (Ne = i),
        (Ft = r),
        Ne !== null &&
          (Ft
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (Ft
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? cc(e.parentNode, n)
              : e.nodeType === 1 && cc(e, n),
            xo(e))
          : cc(Ne, n.stateNode));
      break;
    case 4:
      (i = Ne),
        (r = Ft),
        (Ne = n.stateNode.containerInfo),
        (Ft = !0),
        Cn(e, t, n),
        (Ne = i),
        (Ft = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ge &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        r = i = i.next;
        do {
          var o = r,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Vu(n, t, s),
            (r = r.next);
        } while (r !== i);
      }
      Cn(e, t, n);
      break;
    case 1:
      if (
        !Ge &&
        (er(n, t),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          (i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount();
        } catch (a) {
          xe(n, t, a);
        }
      Cn(e, t, n);
      break;
    case 21:
      Cn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ge = (i = Ge) || n.memoizedState !== null), Cn(e, t, n), (Ge = i))
        : Cn(e, t, n);
      break;
    default:
      Cn(e, t, n);
  }
}
function jp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jk()),
      t.forEach(function (i) {
        var r = Gk.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(r, r));
      });
  }
}
function Dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ne = a.stateNode), (Ft = !1);
              break e;
            case 3:
              (Ne = a.stateNode.containerInfo), (Ft = !0);
              break e;
            case 4:
              (Ne = a.stateNode.containerInfo), (Ft = !0);
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(R(160));
        Jb(o, s, r), (Ne = null), (Ft = !1);
        var l = r.alternate;
        l !== null && (l.return = null), (r.return = null);
      } catch (c) {
        xe(r, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) e0(t, e), (t = t.sibling);
}
function e0(e, t) {
  var n = e.alternate,
    i = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Dt(t, e), Zt(e), i & 4)) {
        try {
          lo(3, e, e.return), Ga(3, e);
        } catch (b) {
          xe(e, e.return, b);
        }
        try {
          lo(5, e, e.return);
        } catch (b) {
          xe(e, e.return, b);
        }
      }
      break;
    case 1:
      Dt(t, e), Zt(e), i & 512 && n !== null && er(n, n.return);
      break;
    case 5:
      if (
        (Dt(t, e),
        Zt(e),
        i & 512 && n !== null && er(n, n.return),
        e.flags & 32)
      ) {
        var r = e.stateNode;
        try {
          vo(r, "");
        } catch (b) {
          xe(e, e.return, b);
        }
      }
      if (i & 4 && ((r = e.stateNode), r != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && xv(r, o),
              vu(a, s);
            var c = vu(a, o);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                d = l[s + 1];
              u === "style"
                ? $v(r, d)
                : u === "dangerouslySetInnerHTML"
                ? Sv(r, d)
                : u === "children"
                ? vo(r, d)
                : Hd(r, u, d, c);
            }
            switch (a) {
              case "input":
                fu(r, o);
                break;
              case "textarea":
                kv(r, o);
                break;
              case "select":
                var f = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? ir(r, !!o.multiple, h, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ir(r, !!o.multiple, o.defaultValue, !0)
                      : ir(r, !!o.multiple, o.multiple ? [] : "", !1));
            }
            r[$o] = o;
          } catch (b) {
            xe(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((Dt(t, e), Zt(e), i & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (r = e.stateNode), (o = e.memoizedProps);
        try {
          r.nodeValue = o;
        } catch (b) {
          xe(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        (Dt(t, e), Zt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          xo(t.containerInfo);
        } catch (b) {
          xe(e, e.return, b);
        }
      break;
    case 4:
      Dt(t, e), Zt(e);
      break;
    case 13:
      Dt(t, e),
        Zt(e),
        (r = e.child),
        r.flags & 8192 &&
          ((o = r.memoizedState !== null),
          (r.stateNode.isHidden = o),
          !o ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (kf = ke())),
        i & 4 && jp(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ge = (c = Ge) || u), Dt(t, e), (Ge = c)) : Dt(t, e),
        Zt(e),
        i & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (j = e, u = e.child; u !== null; ) {
            for (d = j = u; j !== null; ) {
              switch (((f = j), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  lo(4, f, f.return);
                  break;
                case 1:
                  er(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (i = f), (n = f.return);
                    try {
                      (t = i),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (b) {
                      xe(i, n, b);
                    }
                  }
                  break;
                case 5:
                  er(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Fp(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (j = h)) : Fp(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (r = d.stateNode),
                  c
                    ? ((o = r.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Cv("display", s)));
              } catch (b) {
                xe(e, e.return, b);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (b) {
                xe(e, e.return, b);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Dt(t, e), Zt(e), i & 4 && jp(e);
      break;
    case 21:
      break;
    default:
      Dt(t, e), Zt(e);
  }
}
function Zt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zb(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (vo(r, ""), (i.flags &= -33));
          var o = Dp(e);
          Yu(e, o, r);
          break;
        case 3:
        case 4:
          var s = i.stateNode.containerInfo,
            a = Dp(e);
          Wu(e, a, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      xe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Fk(e, t, n) {
  (j = e), t0(e);
}
function t0(e, t, n) {
  for (var i = (e.mode & 1) !== 0; j !== null; ) {
    var r = j,
      o = r.child;
    if (r.tag === 22 && i) {
      var s = r.memoizedState !== null || ps;
      if (!s) {
        var a = r.alternate,
          l = (a !== null && a.memoizedState !== null) || Ge;
        a = ps;
        var c = Ge;
        if (((ps = s), (Ge = l) && !c))
          for (j = r; j !== null; )
            (s = j),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Np(r)
                : l !== null
                ? ((l.return = s), (j = l))
                : Np(r);
        for (; o !== null; ) (j = o), t0(o), (o = o.sibling);
        (j = r), (ps = a), (Ge = c);
      }
      zp(e);
    } else
      r.subtreeFlags & 8772 && o !== null ? ((o.return = r), (j = o)) : zp(e);
  }
}
function zp(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || Ga(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Ge)
                if (n === null) i.componentDidMount();
                else {
                  var r =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : zt(t.type, n.memoizedProps);
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && kp(t, o, i);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                kp(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && xo(d);
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
              throw Error(R(163));
          }
        Ge || (t.flags & 512 && qu(t));
      } catch (f) {
        xe(t, t.return, f);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Fp(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Np(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ga(4, t);
          } catch (l) {
            xe(t, n, l);
          }
          break;
        case 1:
          var i = t.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = t.return;
            try {
              i.componentDidMount();
            } catch (l) {
              xe(t, r, l);
            }
          }
          var o = t.return;
          try {
            qu(t);
          } catch (l) {
            xe(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            qu(t);
          } catch (l) {
            xe(t, s, l);
          }
      }
    } catch (l) {
      xe(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var Nk = Math.ceil,
  ha = En.ReactCurrentDispatcher,
  wf = En.ReactCurrentOwner,
  It = En.ReactCurrentBatchConfig,
  ee = 0,
  Be = null,
  Pe = null,
  Ue = 0,
  gt = 0,
  tr = Kn(0),
  Re = 0,
  Io = null,
  mi = 0,
  Xa = 0,
  xf = 0,
  co = null,
  rt = null,
  kf = 0,
  yr = 1 / 0,
  fn = null,
  pa = !1,
  Gu = null,
  Nn = null,
  ms = !1,
  _n = null,
  ma = 0,
  uo = 0,
  Xu = null,
  Bs = -1,
  Ds = 0;
function Je() {
  return ee & 6 ? ke() : Bs !== -1 ? Bs : (Bs = ke());
}
function Hn(e) {
  return e.mode & 1
    ? ee & 2 && Ue !== 0
      ? Ue & -Ue
      : Sk.transition !== null
      ? (Ds === 0 && (Ds = jv()), Ds)
      : ((e = re),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qv(e.type))),
        e)
    : 1;
}
function qt(e, t, n, i) {
  if (50 < uo) throw ((uo = 0), (Xu = null), Error(R(185)));
  Fo(e, n, i),
    (!(ee & 2) || e !== Be) &&
      (e === Be && (!(ee & 2) && (Xa |= n), Re === 4 && Rn(e, Ue)),
      dt(e, i),
      n === 1 && ee === 0 && !(t.mode & 1) && ((yr = ke() + 500), qa && Qn()));
}
function dt(e, t) {
  var n = e.callbackNode;
  Sx(e, t);
  var i = Zs(e, e === Be ? Ue : 0);
  if (i === 0)
    n !== null && Kh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && Kh(n), t === 1))
      e.tag === 0 ? Ek(Hp.bind(null, e)) : ub(Hp.bind(null, e)),
        yk(function () {
          !(ee & 6) && Qn();
        }),
        (n = null);
    else {
      switch (zv(i)) {
        case 1:
          n = Yd;
          break;
        case 4:
          n = Bv;
          break;
        case 16:
          n = Qs;
          break;
        case 536870912:
          n = Dv;
          break;
        default:
          n = Qs;
      }
      n = c0(n, n0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function n0(e, t) {
  if (((Bs = -1), (Ds = 0), ee & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (lr() && e.callbackNode !== n) return null;
  var i = Zs(e, e === Be ? Ue : 0);
  if (i === 0) return null;
  if (i & 30 || i & e.expiredLanes || t) t = ga(e, i);
  else {
    t = i;
    var r = ee;
    ee |= 2;
    var o = r0();
    (Be !== e || Ue !== t) && ((fn = null), (yr = ke() + 500), li(e, t));
    do
      try {
        Vk();
        break;
      } catch (a) {
        i0(e, a);
      }
    while (1);
    af(),
      (ha.current = o),
      (ee = r),
      Pe !== null ? (t = 0) : ((Be = null), (Ue = 0), (t = Re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((r = ku(e)), r !== 0 && ((i = r), (t = Ku(e, r)))), t === 1)
    )
      throw ((n = Io), li(e, 0), Rn(e, i), dt(e, ke()), n);
    if (t === 6) Rn(e, i);
    else {
      if (
        ((r = e.current.alternate),
        !(i & 30) &&
          !Hk(r) &&
          ((t = ga(e, i)),
          t === 2 && ((o = ku(e)), o !== 0 && ((i = o), (t = Ku(e, o)))),
          t === 1))
      )
        throw ((n = Io), li(e, 0), Rn(e, i), dt(e, ke()), n);
      switch (((e.finishedWork = r), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          ti(e, rt, fn);
          break;
        case 3:
          if (
            (Rn(e, i), (i & 130023424) === i && ((t = kf + 500 - ke()), 10 < t))
          ) {
            if (Zs(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & i) !== i)) {
              Je(), (e.pingedLanes |= e.suspendedLanes & r);
              break;
            }
            e.timeoutHandle = Ou(ti.bind(null, e, rt, fn), t);
            break;
          }
          ti(e, rt, fn);
          break;
        case 4:
          if ((Rn(e, i), (i & 4194240) === i)) break;
          for (t = e.eventTimes, r = -1; 0 < i; ) {
            var s = 31 - Vt(i);
            (o = 1 << s), (s = t[s]), s > r && (r = s), (i &= ~o);
          }
          if (
            ((i = r),
            (i = ke() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * Nk(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = Ou(ti.bind(null, e, rt, fn), i);
            break;
          }
          ti(e, rt, fn);
          break;
        case 5:
          ti(e, rt, fn);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return dt(e, ke()), e.callbackNode === n ? n0.bind(null, e) : null;
}
function Ku(e, t) {
  var n = co;
  return (
    e.current.memoizedState.isDehydrated && (li(e, t).flags |= 256),
    (e = ga(e, t)),
    e !== 2 && ((t = rt), (rt = n), t !== null && Qu(t)),
    e
  );
}
function Qu(e) {
  rt === null ? (rt = e) : rt.push.apply(rt, e);
}
function Hk(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            o = r.getSnapshot;
          r = r.value;
          try {
            if (!Xt(o(), r)) return !1;
          } catch (s) {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Rn(e, t) {
  for (
    t &= ~xf,
      t &= ~Xa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Vt(t),
      i = 1 << n;
    (e[n] = -1), (t &= ~i);
  }
}
function Hp(e) {
  if (ee & 6) throw Error(R(327));
  lr();
  var t = Zs(e, 0);
  if (!(t & 1)) return dt(e, ke()), null;
  var n = ga(e, t);
  if (e.tag !== 0 && n === 2) {
    var i = ku(e);
    i !== 0 && ((t = i), (n = Ku(e, i)));
  }
  if (n === 1) throw ((n = Io), li(e, 0), Rn(e, t), dt(e, ke()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ti(e, rt, fn),
    dt(e, ke()),
    null
  );
}
function Ef(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = n), ee === 0 && ((yr = ke() + 500), qa && Qn());
  }
}
function gi(e) {
  _n !== null && _n.tag === 0 && !(ee & 6) && lr();
  var t = ee;
  ee |= 1;
  var n = It.transition,
    i = re;
  try {
    if (((It.transition = null), (re = 1), e)) return e();
  } finally {
    (re = i), (It.transition = n), (ee = t), !(ee & 6) && Qn();
  }
}
function Sf() {
  (gt = tr.current), he(tr);
}
function li(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), bk(n)), Pe !== null))
    for (n = Pe.return; n !== null; ) {
      var i = n;
      switch ((rf(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && ia();
          break;
        case 3:
          vr(), he(ct), he(Xe), hf();
          break;
        case 5:
          ff(i);
          break;
        case 4:
          vr();
          break;
        case 13:
          he(ge);
          break;
        case 19:
          he(ge);
          break;
        case 10:
          lf(i.type._context);
          break;
        case 22:
        case 23:
          Sf();
      }
      n = n.return;
    }
  if (
    ((Be = e),
    (Pe = e = Un(e.current, null)),
    (Ue = gt = t),
    (Re = 0),
    (Io = null),
    (xf = Xa = mi = 0),
    (rt = co = null),
    ii !== null)
  ) {
    for (t = 0; t < ii.length; t++)
      if (((n = ii[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = r), (i.next = s);
        }
        n.pending = i;
      }
    ii = null;
  }
  return e;
}
function i0(e, t) {
  do {
    var n = Pe;
    try {
      if ((af(), (Ls.current = fa), da)) {
        for (var i = ve.memoizedState; i !== null; ) {
          var r = i.queue;
          r !== null && (r.pending = null), (i = i.next);
        }
        da = !1;
      }
      if (
        ((pi = 0),
        (Ie = Oe = ve = null),
        (ao = !1),
        (Ao = 0),
        (wf.current = null),
        n === null || n.return === null)
      ) {
        (Re = 1), (Io = t), (Pe = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Ue),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var h = Ap(s);
          if (h !== null) {
            (h.flags &= -257),
              Op(h, s, a, o, t),
              h.mode & 1 && Tp(o, c, t),
              (t = h),
              (l = c);
            var m = t.updateQueue;
            if (m === null) {
              var b = new Set();
              b.add(l), (t.updateQueue = b);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Tp(o, c, t), Cf();
              break e;
            }
            l = Error(R(426));
          }
        } else if (me && a.mode & 1) {
          var k = Ap(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Op(k, s, a, o, t),
              of(br(l, a));
            break e;
          }
        }
        (o = l = br(l, a)),
          Re !== 4 && (Re = 2),
          co === null ? (co = [o]) : co.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = Fb(o, l, t);
              xp(o, g);
              break e;
            case 1:
              a = l;
              var p = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Nn === null || !Nn.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = Nb(o, a, t);
                xp(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      s0(n);
    } catch (E) {
      (t = E), Pe === n && n !== null && (Pe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function r0() {
  var e = ha.current;
  return (ha.current = fa), e === null ? fa : e;
}
function Cf() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
    Be === null || (!(mi & 268435455) && !(Xa & 268435455)) || Rn(Be, Ue);
}
function ga(e, t) {
  var n = ee;
  ee |= 2;
  var i = r0();
  (Be !== e || Ue !== t) && ((fn = null), li(e, t));
  do
    try {
      Uk();
      break;
    } catch (r) {
      i0(e, r);
    }
  while (1);
  if ((af(), (ee = n), (ha.current = i), Pe !== null)) throw Error(R(261));
  return (Be = null), (Ue = 0), Re;
}
function Uk() {
  for (; Pe !== null; ) o0(Pe);
}
function Vk() {
  for (; Pe !== null && !mx(); ) o0(Pe);
}
function o0(e) {
  var t = l0(e.alternate, e, gt);
  (e.memoizedProps = e.pendingProps),
    t === null ? s0(e) : (Pe = t),
    (wf.current = null);
}
function s0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Dk(n, t)), n !== null)) {
        (n.flags &= 32767), (Pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Re = 6), (Pe = null);
        return;
      }
    } else if (((n = Bk(n, t, gt)), n !== null)) {
      Pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Pe = t;
      return;
    }
    Pe = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function ti(e, t, n) {
  var i = re,
    r = It.transition;
  try {
    (It.transition = null), (re = 1), qk(e, t, n, i);
  } finally {
    (It.transition = r), (re = i);
  }
  return null;
}
function qk(e, t, n, i) {
  do lr();
  while (_n !== null);
  if (ee & 6) throw Error(R(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Cx(e, o),
    e === Be && ((Pe = Be = null), (Ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ms ||
      ((ms = !0),
      c0(Qs, function () {
        return lr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = It.transition), (It.transition = null);
    var s = re;
    re = 1;
    var a = ee;
    (ee |= 4),
      (wf.current = null),
      zk(e, n),
      e0(n, e),
      dk(Tu),
      (Js = !!Pu),
      (Tu = Pu = null),
      (e.current = n),
      Fk(n),
      gx(),
      (ee = a),
      (re = s),
      (It.transition = o);
  } else e.current = n;
  if (
    (ms && ((ms = !1), (_n = e), (ma = r)),
    (o = e.pendingLanes),
    o === 0 && (Nn = null),
    yx(n.stateNode),
    dt(e, ke()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      (r = t[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
  if (pa) throw ((pa = !1), (e = Gu), (Gu = null), e);
  return (
    ma & 1 && e.tag !== 0 && lr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Xu ? uo++ : ((uo = 0), (Xu = e))) : (uo = 0),
    Qn(),
    null
  );
}
function lr() {
  if (_n !== null) {
    var e = zv(ma),
      t = It.transition,
      n = re;
    try {
      if (((It.transition = null), (re = 16 > e ? 16 : e), _n === null))
        var i = !1;
      else {
        if (((e = _n), (_n = null), (ma = 0), ee & 6)) throw Error(R(331));
        var r = ee;
        for (ee |= 4, j = e.current; j !== null; ) {
          var o = j,
            s = o.child;
          if (j.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (j = c; j !== null; ) {
                  var u = j;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lo(8, u, o);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (j = d);
                  else
                    for (; j !== null; ) {
                      u = j;
                      var f = u.sibling,
                        h = u.return;
                      if ((Qb(u), u === c)) {
                        j = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (j = f);
                        break;
                      }
                      j = h;
                    }
                }
              }
              var m = o.alternate;
              if (m !== null) {
                var b = m.child;
                if (b !== null) {
                  m.child = null;
                  do {
                    var k = b.sibling;
                    (b.sibling = null), (b = k);
                  } while (b !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (j = s);
          else
            e: for (; j !== null; ) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    lo(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (j = g);
                break e;
              }
              j = o.return;
            }
        }
        var p = e.current;
        for (j = p; j !== null; ) {
          s = j;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (j = v);
          else
            e: for (s = p; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ga(9, a);
                  }
                } catch (E) {
                  xe(a, a.return, E);
                }
              if (a === s) {
                j = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                (y.return = a.return), (j = y);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((ee = r), Qn(), on && typeof on.onPostCommitFiberRoot == "function")
        )
          try {
            on.onPostCommitFiberRoot(Fa, e);
          } catch (E) {}
        i = !0;
      }
      return i;
    } finally {
      (re = n), (It.transition = t);
    }
  }
  return !1;
}
function Up(e, t, n) {
  (t = br(n, t)),
    (t = Fb(e, t, 1)),
    (e = Fn(e, t, 1)),
    (t = Je()),
    e !== null && (Fo(e, 1, t), dt(e, t));
}
function xe(e, t, n) {
  if (e.tag === 3) Up(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Up(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (Nn === null || !Nn.has(i)))
        ) {
          (e = br(n, e)),
            (e = Nb(t, e, 1)),
            (t = Fn(t, e, 1)),
            (e = Je()),
            t !== null && (Fo(t, 1, e), dt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Wk(e, t, n) {
  var i = e.pingCache;
  i !== null && i.delete(t),
    (t = Je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Be === e &&
      (Ue & n) === n &&
      (Re === 4 || (Re === 3 && (Ue & 130023424) === Ue && 500 > ke() - kf)
        ? li(e, 0)
        : (xf |= n)),
    dt(e, t);
}
function a0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = os), (os <<= 1), !(os & 130023424) && (os = 4194304))
      : (t = 1));
  var n = Je();
  (e = xn(e, t)), e !== null && (Fo(e, t, n), dt(e, n));
}
function Yk(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), a0(e, n);
}
function Gk(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var i = e.stateNode,
        r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  i !== null && i.delete(t), a0(e, n);
}
var l0;
l0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ct.current) st = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (st = !1), Mk(e, t, n);
      st = !!(e.flags & 131072);
    }
  else (st = !1), me && t.flags & 1048576 && db(t, sa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type;
      Ms(e, t), (e = t.pendingProps);
      var r = pr(t, Xe.current);
      ar(t, n), (r = mf(null, t, i, e, r, n));
      var o = gf();
      return (
        (t.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ut(i) ? ((o = !0), ra(t)) : (o = !1),
            (t.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            uf(t),
            (r.updater = Wa),
            (t.stateNode = r),
            (r._reactInternals = t),
            Du(t, i, e, n),
            (t = Fu(null, t, i, !0, o, n)))
          : ((t.tag = 0), me && o && nf(t), Ze(null, t, r, n), (t = t.child)),
        t
      );
    case 16:
      i = t.elementType;
      e: {
        switch (
          (Ms(e, t),
          (e = t.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (t.type = i),
          (r = t.tag = Kk(i)),
          (e = zt(i, e)),
          r)
        ) {
          case 0:
            t = zu(null, t, i, e, n);
            break e;
          case 1:
            t = Lp(null, t, i, e, n);
            break e;
          case 11:
            t = Rp(null, t, i, e, n);
            break e;
          case 14:
            t = Ip(null, t, i, zt(i.type, e), n);
            break e;
        }
        throw Error(R(306, i, ""));
      }
      return t;
    case 0:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : zt(i, r)),
        zu(e, t, i, r, n)
      );
    case 1:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : zt(i, r)),
        Lp(e, t, i, r, n)
      );
    case 3:
      e: {
        if ((qb(t), e === null)) throw Error(R(387));
        (i = t.pendingProps),
          (o = t.memoizedState),
          (r = o.element),
          mb(e, t),
          ca(t, i, null, n);
        var s = t.memoizedState;
        if (((i = s.element), o.isDehydrated))
          if (
            ((o = {
              element: i,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (r = br(Error(R(423)), t)), (t = _p(e, t, i, n, r));
            break e;
          } else if (i !== r) {
            (r = br(Error(R(424)), t)), (t = _p(e, t, i, n, r));
            break e;
          } else
            for (
              yt = zn(t.stateNode.containerInfo.firstChild),
                wt = t,
                me = !0,
                Nt = null,
                n = yb(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((mr(), i === r)) {
            t = kn(e, t, n);
            break e;
          }
          Ze(e, t, i, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wb(t),
        e === null && _u(t),
        (i = t.type),
        (r = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = r.children),
        Au(i, r) ? (s = null) : o !== null && Au(i, o) && (t.flags |= 32),
        Vb(e, t),
        Ze(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && _u(t), null;
    case 13:
      return Wb(e, t, n);
    case 4:
      return (
        df(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = gr(t, null, i, n)) : Ze(e, t, i, n),
        t.child
      );
    case 11:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : zt(i, r)),
        Rp(e, t, i, r, n)
      );
    case 7:
      return Ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((i = t.type._context),
          (r = t.pendingProps),
          (o = t.memoizedProps),
          (s = r.value),
          ce(aa, i._currentValue),
          (i._currentValue = s),
          o !== null)
        )
          if (Xt(o.value, s)) {
            if (o.children === r.children && !ct.current) {
              t = kn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === i) {
                    if (o.tag === 1) {
                      (l = bn(-1, n & -n)), (l.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Mu(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Mu(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ze(e, t, r.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (r = t.type),
        (i = t.pendingProps.children),
        ar(t, n),
        (r = Lt(r)),
        (i = i(r)),
        (t.flags |= 1),
        Ze(e, t, i, n),
        t.child
      );
    case 14:
      return (
        (i = t.type),
        (r = zt(i, t.pendingProps)),
        (r = zt(i.type, r)),
        Ip(e, t, i, r, n)
      );
    case 15:
      return Hb(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : zt(i, r)),
        Ms(e, t),
        (t.tag = 1),
        ut(i) ? ((e = !0), ra(t)) : (e = !1),
        ar(t, n),
        vb(t, i, r),
        Du(t, i, r, n),
        Fu(null, t, i, !0, e, n)
      );
    case 19:
      return Yb(e, t, n);
    case 22:
      return Ub(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function c0(e, t) {
  return Mv(e, t);
}
function Xk(e, t, n, i) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Rt(e, t, n, i) {
  return new Xk(e, t, n, i);
}
function $f(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Kk(e) {
  if (typeof e == "function") return $f(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vd)) return 11;
    if (e === qd) return 14;
  }
  return 2;
}
function Un(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function js(e, t, n, i, r, o) {
  var s = 2;
  if (((i = e), typeof e == "function")) $f(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case qi:
        return ci(n.children, r, o, t);
      case Ud:
        (s = 8), (r |= 8);
        break;
      case au:
        return (
          (e = Rt(12, n, t, r | 2)), (e.elementType = au), (e.lanes = o), e
        );
      case lu:
        return (e = Rt(13, n, t, r)), (e.elementType = lu), (e.lanes = o), e;
      case cu:
        return (e = Rt(19, n, t, r)), (e.elementType = cu), (e.lanes = o), e;
      case bv:
        return Ka(n, r, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case gv:
              s = 10;
              break e;
            case vv:
              s = 9;
              break e;
            case Vd:
              s = 11;
              break e;
            case qd:
              s = 14;
              break e;
            case Pn:
              (s = 16), (i = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Rt(s, n, t, r)), (t.elementType = e), (t.type = i), (t.lanes = o), t
  );
}
function ci(e, t, n, i) {
  return (e = Rt(7, e, i, t)), (e.lanes = n), e;
}
function Ka(e, t, n, i) {
  return (
    (e = Rt(22, e, i, t)),
    (e.elementType = bv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function vc(e, t, n) {
  return (e = Rt(6, e, null, t)), (e.lanes = n), e;
}
function bc(e, t, n) {
  return (
    (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Qk(e, t, n, i, r) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zl(0)),
    (this.expirationTimes = Zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zl(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Pf(e, t, n, i, r, o, s, a, l) {
  return (
    (e = new Qk(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Rt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uf(o),
    e
  );
}
function Zk(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vi,
    key: i == null ? null : "" + i,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function u0(e) {
  if (!e) return qn;
  e = e._reactInternals;
  e: {
    if (Ci(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ut(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ut(n)) return cb(e, n, t);
  }
  return t;
}
function d0(e, t, n, i, r, o, s, a, l) {
  return (
    (e = Pf(n, i, !0, e, r, o, s, a, l)),
    (e.context = u0(null)),
    (n = e.current),
    (i = Je()),
    (r = Hn(n)),
    (o = bn(i, r)),
    (o.callback = t != null ? t : null),
    Fn(n, o, r),
    (e.current.lanes = r),
    Fo(e, r, i),
    dt(e, i),
    e
  );
}
function Qa(e, t, n, i) {
  var r = t.current,
    o = Je(),
    s = Hn(r);
  return (
    (n = u0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bn(o, s)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = Fn(r, t, s)),
    e !== null && (qt(e, r, s, o), Is(e, r, s)),
    s
  );
}
function va(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Tf(e, t) {
  Vp(e, t), (e = e.alternate) && Vp(e, t);
}
function Jk() {
  return null;
}
var f0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Af(e) {
  this._internalRoot = e;
}
Za.prototype.render = Af.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Qa(e, t, null, null);
};
Za.prototype.unmount = Af.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gi(function () {
      Qa(null, e, null, null);
    }),
      (t[wn] = null);
  }
};
function Za(e) {
  this._internalRoot = e;
}
Za.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Hv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < On.length && t !== 0 && t < On[n].priority; n++);
    On.splice(n, 0, e), n === 0 && Vv(e);
  }
};
function Of(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ja(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function qp() {}
function eE(e, t, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var o = i;
      i = function () {
        var c = va(s);
        o.call(c);
      };
    }
    var s = d0(t, i, e, 0, null, !1, !1, "", qp);
    return (
      (e._reactRootContainer = s),
      (e[wn] = s.current),
      So(e.nodeType === 8 ? e.parentNode : e),
      gi(),
      s
    );
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof i == "function") {
    var a = i;
    i = function () {
      var c = va(l);
      a.call(c);
    };
  }
  var l = Pf(e, 0, !1, null, null, !1, !1, "", qp);
  return (
    (e._reactRootContainer = l),
    (e[wn] = l.current),
    So(e.nodeType === 8 ? e.parentNode : e),
    gi(function () {
      Qa(t, l, n, i);
    }),
    l
  );
}
function el(e, t, n, i, r) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var l = va(s);
        a.call(l);
      };
    }
    Qa(t, s, e, r);
  } else s = eE(n, t, e, r, i);
  return va(s);
}
Fv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qr(t.pendingLanes);
        n !== 0 &&
          (Gd(t, n | 1), dt(t, ke()), !(ee & 6) && ((yr = ke() + 500), Qn()));
      }
      break;
    case 13:
      gi(function () {
        var i = xn(e, 1);
        if (i !== null) {
          var r = Je();
          qt(i, e, 1, r);
        }
      }),
        Tf(e, 1);
  }
};
Xd = function (e) {
  if (e.tag === 13) {
    var t = xn(e, 134217728);
    if (t !== null) {
      var n = Je();
      qt(t, e, 134217728, n);
    }
    Tf(e, 134217728);
  }
};
Nv = function (e) {
  if (e.tag === 13) {
    var t = Hn(e),
      n = xn(e, t);
    if (n !== null) {
      var i = Je();
      qt(n, e, t, i);
    }
    Tf(e, t);
  }
};
Hv = function () {
  return re;
};
Uv = function (e, t) {
  var n = re;
  try {
    return (re = e), t();
  } finally {
    re = n;
  }
};
yu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((fu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var i = n[t];
          if (i !== e && i.form === e.form) {
            var r = Va(i);
            if (!r) throw Error(R(90));
            wv(i), fu(i, r);
          }
        }
      }
      break;
    case "textarea":
      kv(e, n);
      break;
    case "select":
      (t = n.value), t != null && ir(e, !!n.multiple, t, !1);
  }
};
Av = Ef;
Ov = gi;
var tE = { usingClientEntryPoint: !1, Events: [Ho, Xi, Va, Pv, Tv, Ef] },
  Ur = {
    findFiberByHostInstance: ni,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  nE = {
    bundleType: Ur.bundleType,
    version: Ur.version,
    rendererPackageName: Ur.rendererPackageName,
    rendererConfig: Ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: En.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ur.findFiberByHostInstance || Jk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gs.isDisabled && gs.supportsFiber)
    try {
      (Fa = gs.inject(nE)), (on = gs);
    } catch (e) {}
}
kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tE;
kt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Of(t)) throw Error(R(200));
  return Zk(e, t, null, n);
};
kt.createRoot = function (e, t) {
  if (!Of(e)) throw Error(R(299));
  var n = !1,
    i = "",
    r = f0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = Pf(e, 1, !1, null, null, n, !1, i, r)),
    (e[wn] = t.current),
    So(e.nodeType === 8 ? e.parentNode : e),
    new Af(t)
  );
};
kt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = Lv(t)), (e = e === null ? null : e.stateNode), e;
};
kt.flushSync = function (e) {
  return gi(e);
};
kt.hydrate = function (e, t, n) {
  if (!Ja(t)) throw Error(R(200));
  return el(null, e, t, !0, n);
};
kt.hydrateRoot = function (e, t, n) {
  if (!Of(e)) throw Error(R(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    o = "",
    s = f0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = d0(t, null, e, 1, n != null ? n : null, r, !1, o, s)),
    (e[wn] = t.current),
    So(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      (n = i[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r);
  return new Za(t);
};
kt.render = function (e, t, n) {
  if (!Ja(t)) throw Error(R(200));
  return el(null, e, t, !1, n);
};
kt.unmountComponentAtNode = function (e) {
  if (!Ja(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (gi(function () {
        el(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[wn] = null);
        });
      }),
      !0)
    : !1;
};
kt.unstable_batchedUpdates = Ef;
kt.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!Ja(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return el(e, t, n, !1, i);
};
kt.version = "18.2.0-next-9e3b772b8-20220608";
function h0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h0);
    } catch (e) {
      console.error(e);
    }
}
h0(), (dv.exports = kt);
var Rf = dv.exports;
const iE = jo(Rf);
var p0,
  Wp = Rf;
(p0 = Wp.createRoot), Wp.hydrateRoot;
function Zu(e, t) {
  return (
    (Zu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, r) {
          return (i.__proto__ = r), i;
        }),
    Zu(e, t)
  );
}
function Wn(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Zu(e, t);
}
var m0 = { exports: {} },
  rE = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  oE = rE,
  sE = oE;
function g0() {}
function v0() {}
v0.resetWarningCache = g0;
var aE = function () {
  function e(i, r, o, s, a, l) {
    if (l !== sE) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: v0,
    resetWarningCache: g0,
  };
  return (n.PropTypes = n), n;
};
m0.exports = aE();
var lE = m0.exports;
const Yp = jo(lE);
function ft() {
  return (
    (ft = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    ft.apply(this, arguments)
  );
}
function vs(e) {
  return e.charAt(0) === "/";
}
function yc(e, t) {
  for (var n = t, i = n + 1, r = e.length; i < r; n += 1, i += 1) e[n] = e[i];
  e.pop();
}
function cE(e, t) {
  t === void 0 && (t = "");
  var n = (e && e.split("/")) || [],
    i = (t && t.split("/")) || [],
    r = e && vs(e),
    o = t && vs(t),
    s = r || o;
  if (
    (e && vs(e) ? (i = n) : n.length && (i.pop(), (i = i.concat(n))), !i.length)
  )
    return "/";
  var a;
  if (i.length) {
    var l = i[i.length - 1];
    a = l === "." || l === ".." || l === "";
  } else a = !1;
  for (var c = 0, u = i.length; u >= 0; u--) {
    var d = i[u];
    d === "." ? yc(i, u) : d === ".." ? (yc(i, u), c++) : c && (yc(i, u), c--);
  }
  if (!s) for (; c--; c) i.unshift("..");
  s && i[0] !== "" && (!i[0] || !vs(i[0])) && i.unshift("");
  var f = i.join("/");
  return a && f.substr(-1) !== "/" && (f += "/"), f;
}
function Gp(e) {
  return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function zs(e, t) {
  if (e === t) return !0;
  if (e == null || t == null) return !1;
  if (Array.isArray(e))
    return (
      Array.isArray(t) &&
      e.length === t.length &&
      e.every(function (r, o) {
        return zs(r, t[o]);
      })
    );
  if (typeof e == "object" || typeof t == "object") {
    var n = Gp(e),
      i = Gp(t);
    return n !== e || i !== t
      ? zs(n, i)
      : Object.keys(Object.assign({}, e, t)).every(function (r) {
          return zs(e[r], t[r]);
        });
  }
  return !1;
}
var uE = !0,
  wc = "Invariant failed";
function $i(e, t) {
  if (!e) {
    if (uE) throw new Error(wc);
    var n = typeof t == "function" ? t() : t,
      i = n ? "".concat(wc, ": ").concat(n) : wc;
    throw new Error(i);
  }
}
function fo(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function Xp(e) {
  return e.charAt(0) === "/" ? e.substr(1) : e;
}
function dE(e, t) {
  return (
    e.toLowerCase().indexOf(t.toLowerCase()) === 0 &&
    "/?#".indexOf(e.charAt(t.length)) !== -1
  );
}
function b0(e, t) {
  return dE(e, t) ? e.substr(t.length) : e;
}
function y0(e) {
  return e.charAt(e.length - 1) === "/" ? e.slice(0, -1) : e;
}
function fE(e) {
  var t = e || "/",
    n = "",
    i = "",
    r = t.indexOf("#");
  r !== -1 && ((i = t.substr(r)), (t = t.substr(0, r)));
  var o = t.indexOf("?");
  return (
    o !== -1 && ((n = t.substr(o)), (t = t.substr(0, o))),
    { pathname: t, search: n === "?" ? "" : n, hash: i === "#" ? "" : i }
  );
}
function Tt(e) {
  var t = e.pathname,
    n = e.search,
    i = e.hash,
    r = t || "/";
  return (
    n && n !== "?" && (r += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i),
    r
  );
}
function at(e, t, n, i) {
  var r;
  typeof e == "string"
    ? ((r = fE(e)), (r.state = t))
    : ((r = ft({}, e)),
      r.pathname === void 0 && (r.pathname = ""),
      r.search
        ? r.search.charAt(0) !== "?" && (r.search = "?" + r.search)
        : (r.search = ""),
      r.hash
        ? r.hash.charAt(0) !== "#" && (r.hash = "#" + r.hash)
        : (r.hash = ""),
      t !== void 0 && r.state === void 0 && (r.state = t));
  try {
    r.pathname = decodeURI(r.pathname);
  } catch (o) {
    throw o instanceof URIError
      ? new URIError(
          'Pathname "' +
            r.pathname +
            '" could not be decoded. This is likely caused by an invalid percent-encoding.'
        )
      : o;
  }
  return (
    n && (r.key = n),
    i
      ? r.pathname
        ? r.pathname.charAt(0) !== "/" &&
          (r.pathname = cE(r.pathname, i.pathname))
        : (r.pathname = i.pathname)
      : r.pathname || (r.pathname = "/"),
    r
  );
}
function hE(e, t) {
  return (
    e.pathname === t.pathname &&
    e.search === t.search &&
    e.hash === t.hash &&
    e.key === t.key &&
    zs(e.state, t.state)
  );
}
function If() {
  var e = null;
  function t(s) {
    return (
      (e = s),
      function () {
        e === s && (e = null);
      }
    );
  }
  function n(s, a, l, c) {
    if (e != null) {
      var u = typeof e == "function" ? e(s, a) : e;
      typeof u == "string"
        ? typeof l == "function"
          ? l(u, c)
          : c(!0)
        : c(u !== !1);
    } else c(!0);
  }
  var i = [];
  function r(s) {
    var a = !0;
    function l() {
      a && s.apply(void 0, arguments);
    }
    return (
      i.push(l),
      function () {
        (a = !1),
          (i = i.filter(function (c) {
            return c !== l;
          }));
      }
    );
  }
  function o() {
    for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++)
      a[l] = arguments[l];
    i.forEach(function (c) {
      return c.apply(void 0, a);
    });
  }
  return {
    setPrompt: t,
    confirmTransitionTo: n,
    appendListener: r,
    notifyListeners: o,
  };
}
var w0 = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function x0(e, t) {
  t(window.confirm(e));
}
function pE() {
  var e = window.navigator.userAgent;
  return (e.indexOf("Android 2.") !== -1 || e.indexOf("Android 4.0") !== -1) &&
    e.indexOf("Mobile Safari") !== -1 &&
    e.indexOf("Chrome") === -1 &&
    e.indexOf("Windows Phone") === -1
    ? !1
    : window.history && "pushState" in window.history;
}
function mE() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function gE() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function vE(e) {
  return e.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var Kp = "popstate",
  Qp = "hashchange";
function Zp() {
  try {
    return window.history.state || {};
  } catch (e) {
    return {};
  }
}
function bE(e) {
  e === void 0 && (e = {}), w0 || $i(!1);
  var t = window.history,
    n = pE(),
    i = !mE(),
    r = e,
    o = r.forceRefresh,
    s = o === void 0 ? !1 : o,
    a = r.getUserConfirmation,
    l = a === void 0 ? x0 : a,
    c = r.keyLength,
    u = c === void 0 ? 6 : c,
    d = e.basename ? y0(fo(e.basename)) : "";
  function f(O) {
    var $ = O || {},
      B = $.key,
      D = $.state,
      N = window.location,
      V = N.pathname,
      U = N.search,
      te = N.hash,
      J = V + U + te;
    return d && (J = b0(J, d)), at(J, D, B);
  }
  function h() {
    return Math.random().toString(36).substr(2, u);
  }
  var m = If();
  function b(O) {
    ft(L, O), (L.length = t.length), m.notifyListeners(L.location, L.action);
  }
  function k(O) {
    vE(O) || v(f(O.state));
  }
  function g() {
    v(f(Zp()));
  }
  var p = !1;
  function v(O) {
    if (p) (p = !1), b();
    else {
      var $ = "POP";
      m.confirmTransitionTo(O, $, l, function (B) {
        B ? b({ action: $, location: O }) : y(O);
      });
    }
  }
  function y(O) {
    var $ = L.location,
      B = T.indexOf($.key);
    B === -1 && (B = 0);
    var D = T.indexOf(O.key);
    D === -1 && (D = 0);
    var N = B - D;
    N && ((p = !0), _(N));
  }
  var E = f(Zp()),
    T = [E.key];
  function w(O) {
    return d + Tt(O);
  }
  function P(O, $) {
    var B = "PUSH",
      D = at(O, $, h(), L.location);
    m.confirmTransitionTo(D, B, l, function (N) {
      if (N) {
        var V = w(D),
          U = D.key,
          te = D.state;
        if (n)
          if ((t.pushState({ key: U, state: te }, null, V), s))
            window.location.href = V;
          else {
            var J = T.indexOf(L.location.key),
              pt = T.slice(0, J + 1);
            pt.push(D.key), (T = pt), b({ action: B, location: D });
          }
        else window.location.href = V;
      }
    });
  }
  function F(O, $) {
    var B = "REPLACE",
      D = at(O, $, h(), L.location);
    m.confirmTransitionTo(D, B, l, function (N) {
      if (N) {
        var V = w(D),
          U = D.key,
          te = D.state;
        if (n)
          if ((t.replaceState({ key: U, state: te }, null, V), s))
            window.location.replace(V);
          else {
            var J = T.indexOf(L.location.key);
            J !== -1 && (T[J] = D.key), b({ action: B, location: D });
          }
        else window.location.replace(V);
      }
    });
  }
  function _(O) {
    t.go(O);
  }
  function I() {
    _(-1);
  }
  function q() {
    _(1);
  }
  var ye = 0;
  function se(O) {
    (ye += O),
      ye === 1 && O === 1
        ? (window.addEventListener(Kp, k), i && window.addEventListener(Qp, g))
        : ye === 0 &&
          (window.removeEventListener(Kp, k),
          i && window.removeEventListener(Qp, g));
  }
  var ae = !1;
  function X(O) {
    O === void 0 && (O = !1);
    var $ = m.setPrompt(O);
    return (
      ae || (se(1), (ae = !0)),
      function () {
        return ae && ((ae = !1), se(-1)), $();
      }
    );
  }
  function Z(O) {
    var $ = m.appendListener(O);
    return (
      se(1),
      function () {
        se(-1), $();
      }
    );
  }
  var L = {
    length: t.length,
    action: "POP",
    location: E,
    createHref: w,
    push: P,
    replace: F,
    go: _,
    goBack: I,
    goForward: q,
    block: X,
    listen: Z,
  };
  return L;
}
var Jp = "hashchange",
  yE = {
    hashbang: {
      encodePath: function (t) {
        return t.charAt(0) === "!" ? t : "!/" + Xp(t);
      },
      decodePath: function (t) {
        return t.charAt(0) === "!" ? t.substr(1) : t;
      },
    },
    noslash: { encodePath: Xp, decodePath: fo },
    slash: { encodePath: fo, decodePath: fo },
  };
function k0(e) {
  var t = e.indexOf("#");
  return t === -1 ? e : e.slice(0, t);
}
function Vr() {
  var e = window.location.href,
    t = e.indexOf("#");
  return t === -1 ? "" : e.substring(t + 1);
}
function wE(e) {
  window.location.hash = e;
}
function xc(e) {
  window.location.replace(k0(window.location.href) + "#" + e);
}
function xE(e) {
  e === void 0 && (e = {}), w0 || $i(!1);
  var t = window.history;
  gE();
  var n = e,
    i = n.getUserConfirmation,
    r = i === void 0 ? x0 : i,
    o = n.hashType,
    s = o === void 0 ? "slash" : o,
    a = e.basename ? y0(fo(e.basename)) : "",
    l = yE[s],
    c = l.encodePath,
    u = l.decodePath;
  function d() {
    var $ = u(Vr());
    return a && ($ = b0($, a)), at($);
  }
  var f = If();
  function h($) {
    ft(O, $), (O.length = t.length), f.notifyListeners(O.location, O.action);
  }
  var m = !1,
    b = null;
  function k($, B) {
    return (
      $.pathname === B.pathname && $.search === B.search && $.hash === B.hash
    );
  }
  function g() {
    var $ = Vr(),
      B = c($);
    if ($ !== B) xc(B);
    else {
      var D = d(),
        N = O.location;
      if ((!m && k(N, D)) || b === Tt(D)) return;
      (b = null), p(D);
    }
  }
  function p($) {
    if (m) (m = !1), h();
    else {
      var B = "POP";
      f.confirmTransitionTo($, B, r, function (D) {
        D ? h({ action: B, location: $ }) : v($);
      });
    }
  }
  function v($) {
    var B = O.location,
      D = w.lastIndexOf(Tt(B));
    D === -1 && (D = 0);
    var N = w.lastIndexOf(Tt($));
    N === -1 && (N = 0);
    var V = D - N;
    V && ((m = !0), I(V));
  }
  var y = Vr(),
    E = c(y);
  y !== E && xc(E);
  var T = d(),
    w = [Tt(T)];
  function P($) {
    var B = document.querySelector("base"),
      D = "";
    return (
      B && B.getAttribute("href") && (D = k0(window.location.href)),
      D + "#" + c(a + Tt($))
    );
  }
  function F($, B) {
    var D = "PUSH",
      N = at($, void 0, void 0, O.location);
    f.confirmTransitionTo(N, D, r, function (V) {
      if (V) {
        var U = Tt(N),
          te = c(a + U),
          J = Vr() !== te;
        if (J) {
          (b = U), wE(te);
          var pt = w.lastIndexOf(Tt(O.location)),
            un = w.slice(0, pt + 1);
          un.push(U), (w = un), h({ action: D, location: N });
        } else h();
      }
    });
  }
  function _($, B) {
    var D = "REPLACE",
      N = at($, void 0, void 0, O.location);
    f.confirmTransitionTo(N, D, r, function (V) {
      if (V) {
        var U = Tt(N),
          te = c(a + U),
          J = Vr() !== te;
        J && ((b = U), xc(te));
        var pt = w.indexOf(Tt(O.location));
        pt !== -1 && (w[pt] = U), h({ action: D, location: N });
      }
    });
  }
  function I($) {
    t.go($);
  }
  function q() {
    I(-1);
  }
  function ye() {
    I(1);
  }
  var se = 0;
  function ae($) {
    (se += $),
      se === 1 && $ === 1
        ? window.addEventListener(Jp, g)
        : se === 0 && window.removeEventListener(Jp, g);
  }
  var X = !1;
  function Z($) {
    $ === void 0 && ($ = !1);
    var B = f.setPrompt($);
    return (
      X || (ae(1), (X = !0)),
      function () {
        return X && ((X = !1), ae(-1)), B();
      }
    );
  }
  function L($) {
    var B = f.appendListener($);
    return (
      ae(1),
      function () {
        ae(-1), B();
      }
    );
  }
  var O = {
    length: t.length,
    action: "POP",
    location: T,
    createHref: P,
    push: F,
    replace: _,
    go: I,
    goBack: q,
    goForward: ye,
    block: Z,
    listen: L,
  };
  return O;
}
function em(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function kE(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.getUserConfirmation,
    i = t.initialEntries,
    r = i === void 0 ? ["/"] : i,
    o = t.initialIndex,
    s = o === void 0 ? 0 : o,
    a = t.keyLength,
    l = a === void 0 ? 6 : a,
    c = If();
  function u(P) {
    ft(w, P),
      (w.length = w.entries.length),
      c.notifyListeners(w.location, w.action);
  }
  function d() {
    return Math.random().toString(36).substr(2, l);
  }
  var f = em(s, 0, r.length - 1),
    h = r.map(function (P) {
      return typeof P == "string"
        ? at(P, void 0, d())
        : at(P, void 0, P.key || d());
    }),
    m = Tt;
  function b(P, F) {
    var _ = "PUSH",
      I = at(P, F, d(), w.location);
    c.confirmTransitionTo(I, _, n, function (q) {
      if (q) {
        var ye = w.index,
          se = ye + 1,
          ae = w.entries.slice(0);
        ae.length > se ? ae.splice(se, ae.length - se, I) : ae.push(I),
          u({ action: _, location: I, index: se, entries: ae });
      }
    });
  }
  function k(P, F) {
    var _ = "REPLACE",
      I = at(P, F, d(), w.location);
    c.confirmTransitionTo(I, _, n, function (q) {
      q && ((w.entries[w.index] = I), u({ action: _, location: I }));
    });
  }
  function g(P) {
    var F = em(w.index + P, 0, w.entries.length - 1),
      _ = "POP",
      I = w.entries[F];
    c.confirmTransitionTo(I, _, n, function (q) {
      q ? u({ action: _, location: I, index: F }) : u();
    });
  }
  function p() {
    g(-1);
  }
  function v() {
    g(1);
  }
  function y(P) {
    var F = w.index + P;
    return F >= 0 && F < w.entries.length;
  }
  function E(P) {
    return P === void 0 && (P = !1), c.setPrompt(P);
  }
  function T(P) {
    return c.appendListener(P);
  }
  var w = {
    length: h.length,
    action: "POP",
    location: h[f],
    index: f,
    entries: h,
    createHref: m,
    push: b,
    replace: k,
    go: g,
    goBack: p,
    goForward: v,
    canGo: y,
    block: E,
    listen: T,
  };
  return w;
}
var Ar = { exports: {} },
  EE =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == "[object Array]";
    },
  ba = EE;
Ar.exports = C0;
Ar.exports.parse = Lf;
Ar.exports.compile = CE;
Ar.exports.tokensToFunction = E0;
Ar.exports.tokensToRegExp = S0;
var SE = new RegExp(
  [
    "(\\\\.)",
    "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
  ].join("|"),
  "g"
);
function Lf(e, t) {
  for (
    var n = [], i = 0, r = 0, o = "", s = (t && t.delimiter) || "/", a;
    (a = SE.exec(e)) != null;

  ) {
    var l = a[0],
      c = a[1],
      u = a.index;
    if (((o += e.slice(r, u)), (r = u + l.length), c)) {
      o += c[1];
      continue;
    }
    var d = e[r],
      f = a[2],
      h = a[3],
      m = a[4],
      b = a[5],
      k = a[6],
      g = a[7];
    o && (n.push(o), (o = ""));
    var p = f != null && d != null && d !== f,
      v = k === "+" || k === "*",
      y = k === "?" || k === "*",
      E = a[2] || s,
      T = m || b;
    n.push({
      name: h || i++,
      prefix: f || "",
      delimiter: E,
      optional: y,
      repeat: v,
      partial: p,
      asterisk: !!g,
      pattern: T ? TE(T) : g ? ".*" : "[^" + Fs(E) + "]+?",
    });
  }
  return r < e.length && (o += e.substr(r)), o && n.push(o), n;
}
function CE(e, t) {
  return E0(Lf(e, t), t);
}
function $E(e) {
  return encodeURI(e).replace(/[\/?#]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function PE(e) {
  return encodeURI(e).replace(/[?#]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function E0(e, t) {
  for (var n = new Array(e.length), i = 0; i < e.length; i++)
    typeof e[i] == "object" &&
      (n[i] = new RegExp("^(?:" + e[i].pattern + ")$", Mf(t)));
  return function (r, o) {
    for (
      var s = "",
        a = r || {},
        l = o || {},
        c = l.pretty ? $E : encodeURIComponent,
        u = 0;
      u < e.length;
      u++
    ) {
      var d = e[u];
      if (typeof d == "string") {
        s += d;
        continue;
      }
      var f = a[d.name],
        h;
      if (f == null)
        if (d.optional) {
          d.partial && (s += d.prefix);
          continue;
        } else throw new TypeError('Expected "' + d.name + '" to be defined');
      if (ba(f)) {
        if (!d.repeat)
          throw new TypeError(
            'Expected "' +
              d.name +
              '" to not repeat, but received `' +
              JSON.stringify(f) +
              "`"
          );
        if (f.length === 0) {
          if (d.optional) continue;
          throw new TypeError('Expected "' + d.name + '" to not be empty');
        }
        for (var m = 0; m < f.length; m++) {
          if (((h = c(f[m])), !n[u].test(h)))
            throw new TypeError(
              'Expected all "' +
                d.name +
                '" to match "' +
                d.pattern +
                '", but received `' +
                JSON.stringify(h) +
                "`"
            );
          s += (m === 0 ? d.prefix : d.delimiter) + h;
        }
        continue;
      }
      if (((h = d.asterisk ? PE(f) : c(f)), !n[u].test(h)))
        throw new TypeError(
          'Expected "' +
            d.name +
            '" to match "' +
            d.pattern +
            '", but received "' +
            h +
            '"'
        );
      s += d.prefix + h;
    }
    return s;
  };
}
function Fs(e) {
  return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function TE(e) {
  return e.replace(/([=!:$\/()])/g, "\\$1");
}
function _f(e, t) {
  return (e.keys = t), e;
}
function Mf(e) {
  return e && e.sensitive ? "" : "i";
}
function AE(e, t) {
  var n = e.source.match(/\((?!\?)/g);
  if (n)
    for (var i = 0; i < n.length; i++)
      t.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: !1,
        repeat: !1,
        partial: !1,
        asterisk: !1,
        pattern: null,
      });
  return _f(e, t);
}
function OE(e, t, n) {
  for (var i = [], r = 0; r < e.length; r++) i.push(C0(e[r], t, n).source);
  var o = new RegExp("(?:" + i.join("|") + ")", Mf(n));
  return _f(o, t);
}
function RE(e, t, n) {
  return S0(Lf(e, n), t, n);
}
function S0(e, t, n) {
  ba(t) || ((n = t || n), (t = [])), (n = n || {});
  for (var i = n.strict, r = n.end !== !1, o = "", s = 0; s < e.length; s++) {
    var a = e[s];
    if (typeof a == "string") o += Fs(a);
    else {
      var l = Fs(a.prefix),
        c = "(?:" + a.pattern + ")";
      t.push(a),
        a.repeat && (c += "(?:" + l + c + ")*"),
        a.optional
          ? a.partial
            ? (c = l + "(" + c + ")?")
            : (c = "(?:" + l + "(" + c + "))?")
          : (c = l + "(" + c + ")"),
        (o += c);
    }
  }
  var u = Fs(n.delimiter || "/"),
    d = o.slice(-u.length) === u;
  return (
    i || (o = (d ? o.slice(0, -u.length) : o) + "(?:" + u + "(?=$))?"),
    r ? (o += "$") : (o += i && d ? "" : "(?=" + u + "|$)"),
    _f(new RegExp("^" + o, Mf(n)), t)
  );
}
function C0(e, t, n) {
  return (
    ba(t) || ((n = t || n), (t = [])),
    (n = n || {}),
    e instanceof RegExp ? AE(e, t) : ba(e) ? OE(e, t, n) : RE(e, t, n)
  );
}
var IE = Ar.exports;
const $0 = jo(IE);
var le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var je = typeof Symbol == "function" && Symbol.for,
  Bf = je ? Symbol.for("react.element") : 60103,
  Df = je ? Symbol.for("react.portal") : 60106,
  tl = je ? Symbol.for("react.fragment") : 60107,
  nl = je ? Symbol.for("react.strict_mode") : 60108,
  il = je ? Symbol.for("react.profiler") : 60114,
  rl = je ? Symbol.for("react.provider") : 60109,
  ol = je ? Symbol.for("react.context") : 60110,
  jf = je ? Symbol.for("react.async_mode") : 60111,
  sl = je ? Symbol.for("react.concurrent_mode") : 60111,
  al = je ? Symbol.for("react.forward_ref") : 60112,
  ll = je ? Symbol.for("react.suspense") : 60113,
  LE = je ? Symbol.for("react.suspense_list") : 60120,
  cl = je ? Symbol.for("react.memo") : 60115,
  ul = je ? Symbol.for("react.lazy") : 60116,
  _E = je ? Symbol.for("react.block") : 60121,
  ME = je ? Symbol.for("react.fundamental") : 60117,
  BE = je ? Symbol.for("react.responder") : 60118,
  DE = je ? Symbol.for("react.scope") : 60119;
function St(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Bf:
        switch (((e = e.type), e)) {
          case jf:
          case sl:
          case tl:
          case il:
          case nl:
          case ll:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ol:
              case al:
              case ul:
              case cl:
              case rl:
                return e;
              default:
                return t;
            }
        }
      case Df:
        return t;
    }
  }
}
function P0(e) {
  return St(e) === sl;
}
le.AsyncMode = jf;
le.ConcurrentMode = sl;
le.ContextConsumer = ol;
le.ContextProvider = rl;
le.Element = Bf;
le.ForwardRef = al;
le.Fragment = tl;
le.Lazy = ul;
le.Memo = cl;
le.Portal = Df;
le.Profiler = il;
le.StrictMode = nl;
le.Suspense = ll;
le.isAsyncMode = function (e) {
  return P0(e) || St(e) === jf;
};
le.isConcurrentMode = P0;
le.isContextConsumer = function (e) {
  return St(e) === ol;
};
le.isContextProvider = function (e) {
  return St(e) === rl;
};
le.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bf;
};
le.isForwardRef = function (e) {
  return St(e) === al;
};
le.isFragment = function (e) {
  return St(e) === tl;
};
le.isLazy = function (e) {
  return St(e) === ul;
};
le.isMemo = function (e) {
  return St(e) === cl;
};
le.isPortal = function (e) {
  return St(e) === Df;
};
le.isProfiler = function (e) {
  return St(e) === il;
};
le.isStrictMode = function (e) {
  return St(e) === nl;
};
le.isSuspense = function (e) {
  return St(e) === ll;
};
le.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === tl ||
    e === sl ||
    e === il ||
    e === nl ||
    e === ll ||
    e === LE ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ul ||
        e.$$typeof === cl ||
        e.$$typeof === rl ||
        e.$$typeof === ol ||
        e.$$typeof === al ||
        e.$$typeof === ME ||
        e.$$typeof === BE ||
        e.$$typeof === DE ||
        e.$$typeof === _E))
  );
};
le.typeOf = St;
function T0(e, t) {
  if (e == null) return {};
  var n = {},
    i = Object.keys(e),
    r,
    o;
  for (o = 0; o < i.length; o++)
    (r = i[o]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var A0 = { exports: {} },
  oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ze = typeof Symbol == "function" && Symbol.for,
  zf = ze ? Symbol.for("react.element") : 60103,
  Ff = ze ? Symbol.for("react.portal") : 60106,
  dl = ze ? Symbol.for("react.fragment") : 60107,
  fl = ze ? Symbol.for("react.strict_mode") : 60108,
  hl = ze ? Symbol.for("react.profiler") : 60114,
  pl = ze ? Symbol.for("react.provider") : 60109,
  ml = ze ? Symbol.for("react.context") : 60110,
  Nf = ze ? Symbol.for("react.async_mode") : 60111,
  gl = ze ? Symbol.for("react.concurrent_mode") : 60111,
  vl = ze ? Symbol.for("react.forward_ref") : 60112,
  bl = ze ? Symbol.for("react.suspense") : 60113,
  jE = ze ? Symbol.for("react.suspense_list") : 60120,
  yl = ze ? Symbol.for("react.memo") : 60115,
  wl = ze ? Symbol.for("react.lazy") : 60116,
  zE = ze ? Symbol.for("react.block") : 60121,
  FE = ze ? Symbol.for("react.fundamental") : 60117,
  NE = ze ? Symbol.for("react.responder") : 60118,
  HE = ze ? Symbol.for("react.scope") : 60119;
function Ct(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case zf:
        switch (((e = e.type), e)) {
          case Nf:
          case gl:
          case dl:
          case hl:
          case fl:
          case bl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ml:
              case vl:
              case wl:
              case yl:
              case pl:
                return e;
              default:
                return t;
            }
        }
      case Ff:
        return t;
    }
  }
}
function O0(e) {
  return Ct(e) === gl;
}
oe.AsyncMode = Nf;
oe.ConcurrentMode = gl;
oe.ContextConsumer = ml;
oe.ContextProvider = pl;
oe.Element = zf;
oe.ForwardRef = vl;
oe.Fragment = dl;
oe.Lazy = wl;
oe.Memo = yl;
oe.Portal = Ff;
oe.Profiler = hl;
oe.StrictMode = fl;
oe.Suspense = bl;
oe.isAsyncMode = function (e) {
  return O0(e) || Ct(e) === Nf;
};
oe.isConcurrentMode = O0;
oe.isContextConsumer = function (e) {
  return Ct(e) === ml;
};
oe.isContextProvider = function (e) {
  return Ct(e) === pl;
};
oe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === zf;
};
oe.isForwardRef = function (e) {
  return Ct(e) === vl;
};
oe.isFragment = function (e) {
  return Ct(e) === dl;
};
oe.isLazy = function (e) {
  return Ct(e) === wl;
};
oe.isMemo = function (e) {
  return Ct(e) === yl;
};
oe.isPortal = function (e) {
  return Ct(e) === Ff;
};
oe.isProfiler = function (e) {
  return Ct(e) === hl;
};
oe.isStrictMode = function (e) {
  return Ct(e) === fl;
};
oe.isSuspense = function (e) {
  return Ct(e) === bl;
};
oe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === dl ||
    e === gl ||
    e === hl ||
    e === fl ||
    e === bl ||
    e === jE ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === wl ||
        e.$$typeof === yl ||
        e.$$typeof === pl ||
        e.$$typeof === ml ||
        e.$$typeof === vl ||
        e.$$typeof === FE ||
        e.$$typeof === NE ||
        e.$$typeof === HE ||
        e.$$typeof === zE))
  );
};
oe.typeOf = Ct;
A0.exports = oe;
var UE = A0.exports,
  Hf = UE,
  VE = {
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
  qE = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  WE = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  R0 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Uf = {};
Uf[Hf.ForwardRef] = WE;
Uf[Hf.Memo] = R0;
function tm(e) {
  return Hf.isMemo(e) ? R0 : Uf[e.$$typeof] || VE;
}
var YE = Object.defineProperty,
  GE = Object.getOwnPropertyNames,
  nm = Object.getOwnPropertySymbols,
  XE = Object.getOwnPropertyDescriptor,
  KE = Object.getPrototypeOf,
  im = Object.prototype;
function I0(e, t, n) {
  if (typeof t != "string") {
    if (im) {
      var i = KE(t);
      i && i !== im && I0(e, i, n);
    }
    var r = GE(t);
    nm && (r = r.concat(nm(t)));
    for (var o = tm(e), s = tm(t), a = 0; a < r.length; ++a) {
      var l = r[a];
      if (!qE[l] && !(n && n[l]) && !(s && s[l]) && !(o && o[l])) {
        var c = XE(t, l);
        try {
          YE(e, l, c);
        } catch (u) {}
      }
    }
  }
  return e;
}
var QE = I0;
const ZE = jo(QE);
var kc = 1073741823,
  rm =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {};
function JE() {
  var e = "__global_unique_id__";
  return (rm[e] = (rm[e] || 0) + 1);
}
function eS(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function tS(e) {
  var t = [];
  return {
    on: function (i) {
      t.push(i);
    },
    off: function (i) {
      t = t.filter(function (r) {
        return r !== i;
      });
    },
    get: function () {
      return e;
    },
    set: function (i, r) {
      (e = i),
        t.forEach(function (o) {
          return o(e, r);
        });
    },
  };
}
function nS(e) {
  return Array.isArray(e) ? e[0] : e;
}
function iS(e, t) {
  var n,
    i,
    r = "__create-react-context-" + JE() + "__",
    o = (function (a) {
      Wn(l, a);
      function l() {
        for (var u, d = arguments.length, f = new Array(d), h = 0; h < d; h++)
          f[h] = arguments[h];
        return (
          (u = a.call.apply(a, [this].concat(f)) || this),
          (u.emitter = tS(u.props.value)),
          u
        );
      }
      var c = l.prototype;
      return (
        (c.getChildContext = function () {
          var d;
          return (d = {}), (d[r] = this.emitter), d;
        }),
        (c.componentWillReceiveProps = function (d) {
          if (this.props.value !== d.value) {
            var f = this.props.value,
              h = d.value,
              m;
            eS(f, h)
              ? (m = 0)
              : ((m = typeof t == "function" ? t(f, h) : kc),
                (m |= 0),
                m !== 0 && this.emitter.set(d.value, m));
          }
        }),
        (c.render = function () {
          return this.props.children;
        }),
        l
      );
    })(S.Component);
  o.childContextTypes = ((n = {}), (n[r] = Yp.object.isRequired), n);
  var s = (function (a) {
    Wn(l, a);
    function l() {
      for (var u, d = arguments.length, f = new Array(d), h = 0; h < d; h++)
        f[h] = arguments[h];
      return (
        (u = a.call.apply(a, [this].concat(f)) || this),
        (u.observedBits = void 0),
        (u.state = { value: u.getValue() }),
        (u.onUpdate = function (m, b) {
          var k = u.observedBits | 0;
          k & b && u.setState({ value: u.getValue() });
        }),
        u
      );
    }
    var c = l.prototype;
    return (
      (c.componentWillReceiveProps = function (d) {
        var f = d.observedBits;
        this.observedBits = f == null ? kc : f;
      }),
      (c.componentDidMount = function () {
        this.context[r] && this.context[r].on(this.onUpdate);
        var d = this.props.observedBits;
        this.observedBits = d == null ? kc : d;
      }),
      (c.componentWillUnmount = function () {
        this.context[r] && this.context[r].off(this.onUpdate);
      }),
      (c.getValue = function () {
        return this.context[r] ? this.context[r].get() : e;
      }),
      (c.render = function () {
        return nS(this.props.children)(this.state.value);
      }),
      l
    );
  })(S.Component);
  return (
    (s.contextTypes = ((i = {}), (i[r] = Yp.object), i)),
    { Provider: o, Consumer: s }
  );
}
var rS = S.createContext || iS,
  L0 = function (t) {
    var n = rS();
    return (n.displayName = t), n;
  },
  _0 = L0("Router-History"),
  Yn = L0("Router"),
  Vo = (function (e) {
    Wn(t, e),
      (t.computeRootMatch = function (r) {
        return { path: "/", url: "/", params: {}, isExact: r === "/" };
      });
    function t(i) {
      var r;
      return (
        (r = e.call(this, i) || this),
        (r.state = { location: i.history.location }),
        (r._isMounted = !1),
        (r._pendingLocation = null),
        i.staticContext ||
          (r.unlisten = i.history.listen(function (o) {
            r._pendingLocation = o;
          })),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        var r = this;
        (this._isMounted = !0),
          this.unlisten && this.unlisten(),
          this.props.staticContext ||
            (this.unlisten = this.props.history.listen(function (o) {
              r._isMounted && r.setState({ location: o });
            })),
          this._pendingLocation &&
            this.setState({ location: this._pendingLocation });
      }),
      (n.componentWillUnmount = function () {
        this.unlisten &&
          (this.unlisten(),
          (this._isMounted = !1),
          (this._pendingLocation = null));
      }),
      (n.render = function () {
        return S.createElement(
          Yn.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          S.createElement(_0.Provider, {
            children: this.props.children || null,
            value: this.props.history,
          })
        );
      }),
      t
    );
  })(S.Component);
S.Component;
var oS = (function (e) {
    Wn(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.props.onMount && this.props.onMount.call(this, this);
      }),
      (n.componentDidUpdate = function (r) {
        this.props.onUpdate && this.props.onUpdate.call(this, this, r);
      }),
      (n.componentWillUnmount = function () {
        this.props.onUnmount && this.props.onUnmount.call(this, this);
      }),
      (n.render = function () {
        return null;
      }),
      t
    );
  })(S.Component),
  Ec = {},
  sS = 1e4,
  om = 0;
function aS(e) {
  if (Ec[e]) return Ec[e];
  var t = $0.compile(e);
  return om < sS && ((Ec[e] = t), om++), t;
}
function sm(e, t) {
  return (
    e === void 0 && (e = "/"),
    t === void 0 && (t = {}),
    e === "/" ? e : aS(e)(t, { pretty: !0 })
  );
}
function lS(e) {
  var t = e.computedMatch,
    n = e.to,
    i = e.push,
    r = i === void 0 ? !1 : i;
  return S.createElement(Yn.Consumer, null, function (o) {
    o || $i(!1);
    var s = o.history,
      a = o.staticContext,
      l = r ? s.push : s.replace,
      c = at(
        t
          ? typeof n == "string"
            ? sm(n, t.params)
            : ft({}, n, { pathname: sm(n.pathname, t.params) })
          : n
      );
    return a
      ? (l(c), null)
      : S.createElement(oS, {
          onMount: function () {
            l(c);
          },
          onUpdate: function (d, f) {
            var h = at(f.to);
            hE(h, ft({}, c, { key: h.key })) || l(c);
          },
          to: n,
        });
  });
}
var am = {},
  cS = 1e4,
  lm = 0;
function uS(e, t) {
  var n = "" + t.end + t.strict + t.sensitive,
    i = am[n] || (am[n] = {});
  if (i[e]) return i[e];
  var r = [],
    o = $0(e, r, t),
    s = { regexp: o, keys: r };
  return lm < cS && ((i[e] = s), lm++), s;
}
function vi(e, t) {
  t === void 0 && (t = {}),
    (typeof t == "string" || Array.isArray(t)) && (t = { path: t });
  var n = t,
    i = n.path,
    r = n.exact,
    o = r === void 0 ? !1 : r,
    s = n.strict,
    a = s === void 0 ? !1 : s,
    l = n.sensitive,
    c = l === void 0 ? !1 : l,
    u = [].concat(i);
  return u.reduce(function (d, f) {
    if (!f && f !== "") return null;
    if (d) return d;
    var h = uS(f, { end: o, strict: a, sensitive: c }),
      m = h.regexp,
      b = h.keys,
      k = m.exec(e);
    if (!k) return null;
    var g = k[0],
      p = k.slice(1),
      v = e === g;
    return o && !v
      ? null
      : {
          path: f,
          url: f === "/" && g === "" ? "/" : g,
          isExact: v,
          params: b.reduce(function (y, E, T) {
            return (y[E.name] = p[T]), y;
          }, {}),
        };
  }, null);
}
function dS(e) {
  return S.Children.count(e) === 0;
}
var dn = (function (e) {
  Wn(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return (
    (n.render = function () {
      var r = this;
      return S.createElement(Yn.Consumer, null, function (o) {
        o || $i(!1);
        var s = r.props.location || o.location,
          a = r.props.computedMatch
            ? r.props.computedMatch
            : r.props.path
            ? vi(s.pathname, r.props)
            : o.match,
          l = ft({}, o, { location: s, match: a }),
          c = r.props,
          u = c.children,
          d = c.component,
          f = c.render;
        return (
          Array.isArray(u) && dS(u) && (u = null),
          S.createElement(
            Yn.Provider,
            { value: l },
            l.match
              ? u
                ? typeof u == "function"
                  ? u(l)
                  : u
                : d
                ? S.createElement(d, l)
                : f
                ? f(l)
                : null
              : typeof u == "function"
              ? u(l)
              : null
          )
        );
      });
    }),
    t
  );
})(S.Component);
function Vf(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function fS(e, t) {
  return e ? ft({}, t, { pathname: Vf(e) + t.pathname }) : t;
}
function hS(e, t) {
  if (!e) return t;
  var n = Vf(e);
  return t.pathname.indexOf(n) !== 0
    ? t
    : ft({}, t, { pathname: t.pathname.substr(n.length) });
}
function cm(e) {
  return typeof e == "string" ? e : Tt(e);
}
function Sc(e) {
  return function () {
    $i(!1);
  };
}
function um() {}
S.Component;
S.Component;
function pS(e) {
  var t = "withRouter(" + (e.displayName || e.name) + ")",
    n = function (r) {
      var o = r.wrappedComponentRef,
        s = T0(r, ["wrappedComponentRef"]);
      return S.createElement(Yn.Consumer, null, function (a) {
        return a || $i(!1), S.createElement(e, ft({}, s, a, { ref: o }));
      });
    };
  return (n.displayName = t), (n.WrappedComponent = e), ZE(n, e);
}
var qf = S.useContext;
function qo() {
  return qf(_0);
}
function mS() {
  return qf(Yn).location;
}
function gS() {
  var e = qf(Yn).match;
  return e ? e.params : {};
}
const vS = "modulepreload",
  bS = function (e) {
    return "/" + e;
  },
  dm = {},
  ot = function (t, n, i) {
    if (!n || n.length === 0) return t();
    const r = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = bS(o)), o in dm)) return;
        dm[o] = !0;
        const s = o.endsWith(".css"),
          a = s ? '[rel="stylesheet"]' : "";
        if (!!i)
          for (let u = r.length - 1; u >= 0; u--) {
            const d = r[u];
            if (d.href === o && (!s || d.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${a}`)) return;
        const c = document.createElement("link");
        if (
          ((c.rel = s ? "stylesheet" : vS),
          s || ((c.as = "script"), (c.crossOrigin = "")),
          (c.href = o),
          document.head.appendChild(c),
          s)
        )
          return new Promise((u, d) => {
            c.addEventListener("load", u),
              c.addEventListener("error", () =>
                d(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    ).then(() => t());
  },
  Di = {
    allRenderFn: !1,
    cmpDidLoad: !0,
    cmpDidUnload: !1,
    cmpDidUpdate: !0,
    cmpDidRender: !0,
    cmpWillLoad: !0,
    cmpWillUpdate: !0,
    cmpWillRender: !0,
    connectedCallback: !0,
    disconnectedCallback: !0,
    element: !0,
    event: !0,
    hasRenderFn: !0,
    lifecycle: !0,
    hostListener: !0,
    hostListenerTargetWindow: !0,
    hostListenerTargetDocument: !0,
    hostListenerTargetBody: !0,
    hostListenerTargetParent: !1,
    hostListenerTarget: !0,
    member: !0,
    method: !0,
    mode: !0,
    observeAttribute: !0,
    prop: !0,
    propMutable: !0,
    reflect: !0,
    scoped: !0,
    shadowDom: !0,
    slot: !0,
    cssAnnotations: !0,
    state: !0,
    style: !0,
    svg: !0,
    updatable: !0,
    vdomAttribute: !0,
    vdomXlink: !0,
    vdomClass: !0,
    vdomFunctional: !0,
    vdomKey: !0,
    vdomListener: !0,
    vdomRef: !0,
    vdomPropOrAttr: !0,
    vdomRender: !0,
    vdomStyle: !0,
    vdomText: !0,
    watchCallback: !0,
    taskQueue: !0,
    hotModuleReplacement: !1,
    isDebug: !1,
    isDev: !1,
    isTesting: !1,
    hydrateServerSide: !1,
    hydrateClientSide: !1,
    lifecycleDOMEvents: !1,
    lazyLoad: !1,
    profile: !1,
    slotRelocation: !0,
    appendChildSlotFix: !1,
    cloneNodeFix: !1,
    hydratedAttribute: !1,
    hydratedClass: !0,
    safari10: !1,
    scriptDataOpts: !1,
    scopedSlotTextContentFix: !1,
    shadowDomShim: !1,
    slotChildNodesFix: !1,
    invisiblePrehydration: !0,
    propBoolean: !0,
    propNumber: !0,
    propString: !0,
    cssVarShim: !1,
    constructableCSS: !0,
    cmpShouldUpdate: !0,
    devTools: !1,
    dynamicImportShim: !1,
    shadowDelegatesFocus: !0,
    initializeNextTick: !1,
    asyncLoading: !1,
    asyncQueue: !1,
    transformTagName: !1,
    attachStyles: !0,
  };
let ji,
  M0,
  xl,
  B0 = !1,
  ya = !1,
  Wf = !1,
  vt = !1,
  fm = null,
  Ju = !1;
const yS = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 },
  wS = (e) => {
    const t = new URL(e, De.$resourcesUrl$);
    return t.origin !== Yo.location.origin ? t.href : t.pathname;
  },
  bi =
    (e, t = "") =>
    () => {},
  hm = "http://www.w3.org/1999/xlink",
  pm = {},
  xS = "http://www.w3.org/2000/svg",
  kS = "http://www.w3.org/1999/xhtml",
  ES = (e) => e != null,
  Yf = (e) => ((e = typeof e), e === "object" || e === "function");
function SS(e) {
  var t, n, i;
  return (i =
    (n =
      (t = e.head) === null || t === void 0
        ? void 0
        : t.querySelector('meta[name="csp-nonce"]')) === null || n === void 0
      ? void 0
      : n.getAttribute("content")) !== null && i !== void 0
    ? i
    : void 0;
}
const A = (e, t, ...n) => {
    let i = null,
      r = null,
      o = null,
      s = !1,
      a = !1;
    const l = [],
      c = (d) => {
        for (let f = 0; f < d.length; f++)
          (i = d[f]),
            Array.isArray(i)
              ? c(i)
              : i != null &&
                typeof i != "boolean" &&
                ((s = typeof e != "function" && !Yf(i)) && (i = String(i)),
                s && a
                  ? (l[l.length - 1].$text$ += i)
                  : l.push(s ? wa(null, i) : i),
                (a = s));
      };
    if ((c(n), t)) {
      t.key && (r = t.key), t.name && (o = t.name);
      {
        const d = t.className || t.class;
        d &&
          (t.class =
            typeof d != "object"
              ? d
              : Object.keys(d)
                  .filter((f) => d[f])
                  .join(" "));
      }
    }
    if (typeof e == "function") return e(t === null ? {} : t, l, $S);
    const u = wa(e, null);
    return (
      (u.$attrs$ = t),
      l.length > 0 && (u.$children$ = l),
      (u.$key$ = r),
      (u.$name$ = o),
      u
    );
  },
  wa = (e, t) => {
    const n = {
      $flags$: 0,
      $tag$: e,
      $text$: t,
      $elm$: null,
      $children$: null,
    };
    return (n.$attrs$ = null), (n.$key$ = null), (n.$name$ = null), n;
  },
  Te = {},
  CS = (e) => e && e.$tag$ === Te,
  $S = {
    forEach: (e, t) => e.map(mm).forEach(t),
    map: (e, t) => e.map(mm).map(t).map(PS),
  },
  mm = (e) => ({
    vattrs: e.$attrs$,
    vchildren: e.$children$,
    vkey: e.$key$,
    vname: e.$name$,
    vtag: e.$tag$,
    vtext: e.$text$,
  }),
  PS = (e) => {
    if (typeof e.vtag == "function") {
      const n = Object.assign({}, e.vattrs);
      return (
        e.vkey && (n.key = e.vkey),
        e.vname && (n.name = e.vname),
        A(e.vtag, n, ...(e.vchildren || []))
      );
    }
    const t = wa(e.vtag, e.vtext);
    return (
      (t.$attrs$ = e.vattrs),
      (t.$children$ = e.vchildren),
      (t.$key$ = e.vkey),
      (t.$name$ = e.vname),
      t
    );
  },
  TS = (e) => Y0.map((t) => t(e)).find((t) => !!t),
  AS = (e) => Y0.push(e),
  OS = (e) => Or(e).$modeName$,
  RS = (e, t) =>
    e != null && !Yf(e)
      ? t & 4
        ? e === "false"
          ? !1
          : e === "" || !!e
        : t & 2
        ? parseFloat(e)
        : t & 1
        ? String(e)
        : e
      : e,
  IS = (e) => e,
  fe = (e, t, n) => {
    const i = IS(e);
    return {
      emit: (r) =>
        LS(i, t, {
          bubbles: !!(n & 4),
          composed: !!(n & 2),
          cancelable: !!(n & 1),
          detail: r,
        }),
    };
  },
  LS = (e, t, n) => {
    const i = De.ce(t, n);
    return e.dispatchEvent(i), i;
  },
  gm = new WeakMap(),
  _S = (e, t, n) => {
    let i = Ea.get(e);
    aC && n
      ? ((i = i || new CSSStyleSheet()),
        typeof i == "string" ? (i = t) : i.replaceSync(t))
      : (i = t),
      Ea.set(e, i);
  },
  MS = (e, t, n, i) => {
    var r;
    let o = D0(t, n);
    const s = Ea.get(o);
    if (((e = e.nodeType === 11 ? e : Wt), s))
      if (typeof s == "string") {
        e = e.head || e;
        let a = gm.get(e),
          l;
        if ((a || gm.set(e, (a = new Set())), !a.has(o))) {
          {
            (l = Wt.createElement("style")), (l.innerHTML = s);
            const c = (r = De.$nonce$) !== null && r !== void 0 ? r : SS(Wt);
            c != null && l.setAttribute("nonce", c),
              e.insertBefore(l, e.querySelector("link"));
          }
          a && a.add(o);
        }
      } else
        e.adoptedStyleSheets.includes(s) ||
          (e.adoptedStyleSheets = [...e.adoptedStyleSheets, s]);
    return o;
  },
  BS = (e) => {
    const t = e.$cmpMeta$,
      n = e.$hostElement$,
      i = t.$flags$,
      r = bi("attachStyles", t.$tagName$),
      o = MS(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
    i & 10 &&
      ((n["s-sc"] = o),
      n.classList.add(o + "-h"),
      i & 2 && n.classList.add(o + "-s")),
      r();
  },
  D0 = (e, t) =>
    "sc-" + (t && e.$flags$ & 32 ? e.$tagName$ + "-" + t : e.$tagName$),
  vm = (e, t, n, i, r, o) => {
    if (n !== i) {
      let s = xm(e, t),
        a = t.toLowerCase();
      if (t === "class") {
        const l = e.classList,
          c = bm(n),
          u = bm(i);
        l.remove(...c.filter((d) => d && !u.includes(d))),
          l.add(...u.filter((d) => d && !c.includes(d)));
      } else if (t === "style") {
        for (const l in n)
          (!i || i[l] == null) &&
            (l.includes("-") ? e.style.removeProperty(l) : (e.style[l] = ""));
        for (const l in i)
          (!n || i[l] !== n[l]) &&
            (l.includes("-")
              ? e.style.setProperty(l, i[l])
              : (e.style[l] = i[l]));
      } else if (t !== "key")
        if (t === "ref") i && i(e);
        else if (!e.__lookupSetter__(t) && t[0] === "o" && t[1] === "n")
          t[2] === "-"
            ? (t = t.slice(3))
            : xm(Yo, a)
            ? (t = a.slice(2))
            : (t = a[2] + t.slice(3)),
            n && De.rel(e, t, n, !1),
            i && De.ael(e, t, i, !1);
        else {
          const l = Yf(i);
          if ((s || (l && i !== null)) && !r)
            try {
              if (e.tagName.includes("-")) e[t] = i;
              else {
                const u = i == null ? "" : i;
                t === "list"
                  ? (s = !1)
                  : (n == null || e[t] != u) && (e[t] = u);
              }
            } catch (u) {}
          let c = !1;
          a !== (a = a.replace(/^xlink\:?/, "")) && ((t = a), (c = !0)),
            i == null || i === !1
              ? (i !== !1 || e.getAttribute(t) === "") &&
                (c ? e.removeAttributeNS(hm, t) : e.removeAttribute(t))
              : (!s || o & 4 || r) &&
                !l &&
                ((i = i === !0 ? "" : i),
                c ? e.setAttributeNS(hm, t, i) : e.setAttribute(t, i));
        }
    }
  },
  DS = /\s/,
  bm = (e) => (e ? e.split(DS) : []),
  j0 = (e, t, n, i) => {
    const r = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
      o = (e && e.$attrs$) || pm,
      s = t.$attrs$ || pm;
    for (i in o) i in s || vm(r, i, o[i], void 0, n, t.$flags$);
    for (i in s) vm(r, i, o[i], s[i], n, t.$flags$);
  },
  xa = (e, t, n, i) => {
    const r = t.$children$[n];
    let o = 0,
      s,
      a,
      l;
    if (
      (B0 ||
        ((Wf = !0),
        r.$tag$ === "slot" &&
          (ji && i.classList.add(ji + "-s"),
          (r.$flags$ |= r.$children$ ? 2 : 1))),
      r.$text$ !== null)
    )
      s = r.$elm$ = Wt.createTextNode(r.$text$);
    else if (r.$flags$ & 1) s = r.$elm$ = Wt.createTextNode("");
    else {
      if (
        (vt || (vt = r.$tag$ === "svg"),
        (s = r.$elm$ =
          Wt.createElementNS(
            vt ? xS : kS,
            r.$flags$ & 2 ? "slot-fb" : r.$tag$
          )),
        vt && r.$tag$ === "foreignObject" && (vt = !1),
        j0(null, r, vt),
        ES(ji) && s["s-si"] !== ji && s.classList.add((s["s-si"] = ji)),
        r.$children$)
      )
        for (o = 0; o < r.$children$.length; ++o)
          (a = xa(e, r, o, s)), a && s.appendChild(a);
      r.$tag$ === "svg"
        ? (vt = !1)
        : s.tagName === "foreignObject" && (vt = !0);
    }
    return (
      (s["s-hn"] = xl),
      r.$flags$ & 3 &&
        ((s["s-sr"] = !0),
        (s["s-cr"] = M0),
        (s["s-sn"] = r.$name$ || ""),
        (l = e && e.$children$ && e.$children$[n]),
        l && l.$tag$ === r.$tag$ && e.$elm$ && Lo(e.$elm$, !1)),
      s
    );
  },
  Lo = (e, t) => {
    De.$flags$ |= 1;
    const n = e.childNodes;
    for (let i = n.length - 1; i >= 0; i--) {
      const r = n[i];
      r["s-hn"] !== xl &&
        r["s-ol"] &&
        (N0(r).insertBefore(r, Gf(r)),
        r["s-ol"].remove(),
        (r["s-ol"] = void 0),
        (Wf = !0)),
        t && Lo(r, t);
    }
    De.$flags$ &= -2;
  },
  z0 = (e, t, n, i, r, o) => {
    let s = (e["s-cr"] && e["s-cr"].parentNode) || e,
      a;
    for (s.shadowRoot && s.tagName === xl && (s = s.shadowRoot); r <= o; ++r)
      i[r] &&
        ((a = xa(null, n, r, e)),
        a && ((i[r].$elm$ = a), s.insertBefore(a, Gf(t))));
  },
  F0 = (e, t, n) => {
    for (let i = t; i <= n; ++i) {
      const r = e[i];
      if (r) {
        const o = r.$elm$;
        V0(r),
          o &&
            ((ya = !0), o["s-ol"] ? o["s-ol"].remove() : Lo(o, !0), o.remove());
      }
    }
  },
  jS = (e, t, n, i) => {
    let r = 0,
      o = 0,
      s = 0,
      a = 0,
      l = t.length - 1,
      c = t[0],
      u = t[l],
      d = i.length - 1,
      f = i[0],
      h = i[d],
      m,
      b;
    for (; r <= l && o <= d; )
      if (c == null) c = t[++r];
      else if (u == null) u = t[--l];
      else if (f == null) f = i[++o];
      else if (h == null) h = i[--d];
      else if (bs(c, f)) zi(c, f), (c = t[++r]), (f = i[++o]);
      else if (bs(u, h)) zi(u, h), (u = t[--l]), (h = i[--d]);
      else if (bs(c, h))
        (c.$tag$ === "slot" || h.$tag$ === "slot") &&
          Lo(c.$elm$.parentNode, !1),
          zi(c, h),
          e.insertBefore(c.$elm$, u.$elm$.nextSibling),
          (c = t[++r]),
          (h = i[--d]);
      else if (bs(u, f))
        (c.$tag$ === "slot" || h.$tag$ === "slot") &&
          Lo(u.$elm$.parentNode, !1),
          zi(u, f),
          e.insertBefore(u.$elm$, c.$elm$),
          (u = t[--l]),
          (f = i[++o]);
      else {
        for (s = -1, a = r; a <= l; ++a)
          if (t[a] && t[a].$key$ !== null && t[a].$key$ === f.$key$) {
            s = a;
            break;
          }
        s >= 0
          ? ((b = t[s]),
            b.$tag$ !== f.$tag$
              ? (m = xa(t && t[o], n, s, e))
              : (zi(b, f), (t[s] = void 0), (m = b.$elm$)),
            (f = i[++o]))
          : ((m = xa(t && t[o], n, o, e)), (f = i[++o])),
          m && N0(c.$elm$).insertBefore(m, Gf(c.$elm$));
      }
    r > l
      ? z0(e, i[d + 1] == null ? null : i[d + 1].$elm$, n, i, o, d)
      : o > d && F0(t, r, l);
  },
  bs = (e, t) =>
    e.$tag$ === t.$tag$
      ? e.$tag$ === "slot"
        ? e.$name$ === t.$name$
        : e.$key$ === t.$key$
      : !1,
  Gf = (e) => (e && e["s-ol"]) || e,
  N0 = (e) => (e["s-ol"] ? e["s-ol"] : e).parentNode,
  zi = (e, t) => {
    const n = (t.$elm$ = e.$elm$),
      i = e.$children$,
      r = t.$children$,
      o = t.$tag$,
      s = t.$text$;
    let a;
    s === null
      ? ((vt = o === "svg" ? !0 : o === "foreignObject" ? !1 : vt),
        o === "slot" || j0(e, t, vt),
        i !== null && r !== null
          ? jS(n, i, t, r)
          : r !== null
          ? (e.$text$ !== null && (n.textContent = ""),
            z0(n, null, t, r, 0, r.length - 1))
          : i !== null && F0(i, 0, i.length - 1),
        vt && o === "svg" && (vt = !1))
      : (a = n["s-cr"])
      ? (a.parentNode.textContent = s)
      : e.$text$ !== s && (n.data = s);
  },
  H0 = (e) => {
    const t = e.childNodes;
    let n, i, r, o, s, a;
    for (i = 0, r = t.length; i < r; i++)
      if (((n = t[i]), n.nodeType === 1)) {
        if (n["s-sr"]) {
          for (s = n["s-sn"], n.hidden = !1, o = 0; o < r; o++)
            if (((a = t[o].nodeType), t[o]["s-hn"] !== n["s-hn"] || s !== "")) {
              if (a === 1 && s === t[o].getAttribute("slot")) {
                n.hidden = !0;
                break;
              }
            } else if (a === 1 || (a === 3 && t[o].textContent.trim() !== "")) {
              n.hidden = !0;
              break;
            }
        }
        H0(n);
      }
  },
  Ht = [],
  U0 = (e) => {
    let t,
      n,
      i,
      r,
      o,
      s,
      a = 0;
    const l = e.childNodes,
      c = l.length;
    for (; a < c; a++) {
      if (((t = l[a]), t["s-sr"] && (n = t["s-cr"]) && n.parentNode))
        for (
          i = n.parentNode.childNodes, r = t["s-sn"], s = i.length - 1;
          s >= 0;
          s--
        )
          (n = i[s]),
            !n["s-cn"] &&
              !n["s-nr"] &&
              n["s-hn"] !== t["s-hn"] &&
              (ym(n, r)
                ? ((o = Ht.find((u) => u.$nodeToRelocate$ === n)),
                  (ya = !0),
                  (n["s-sn"] = n["s-sn"] || r),
                  o
                    ? (o.$slotRefNode$ = t)
                    : Ht.push({ $slotRefNode$: t, $nodeToRelocate$: n }),
                  n["s-sr"] &&
                    Ht.map((u) => {
                      ym(u.$nodeToRelocate$, n["s-sn"]) &&
                        ((o = Ht.find((d) => d.$nodeToRelocate$ === n)),
                        o &&
                          !u.$slotRefNode$ &&
                          (u.$slotRefNode$ = o.$slotRefNode$));
                    }))
                : Ht.some((u) => u.$nodeToRelocate$ === n) ||
                  Ht.push({ $nodeToRelocate$: n }));
      t.nodeType === 1 && U0(t);
    }
  },
  ym = (e, t) =>
    e.nodeType === 1
      ? (e.getAttribute("slot") === null && t === "") ||
        e.getAttribute("slot") === t
      : e["s-sn"] === t
      ? !0
      : t === "",
  V0 = (e) => {
    e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null),
      e.$children$ && e.$children$.map(V0);
  },
  zS = (e, t) => {
    const n = e.$hostElement$,
      i = e.$cmpMeta$,
      r = e.$vnode$ || wa(null, null),
      o = CS(t) ? t : A(null, null, t);
    (xl = n.tagName),
      i.$attrsToReflect$ &&
        ((o.$attrs$ = o.$attrs$ || {}),
        i.$attrsToReflect$.map(([s, a]) => (o.$attrs$[a] = n[s]))),
      (o.$tag$ = null),
      (o.$flags$ |= 4),
      (e.$vnode$ = o),
      (o.$elm$ = r.$elm$ = n.shadowRoot || n),
      (ji = n["s-sc"]),
      (M0 = n["s-cr"]),
      (B0 = (i.$flags$ & 1) !== 0),
      (ya = !1),
      zi(r, o);
    {
      if (((De.$flags$ |= 1), Wf)) {
        U0(o.$elm$);
        let s,
          a,
          l,
          c,
          u,
          d,
          f = 0;
        for (; f < Ht.length; f++)
          (s = Ht[f]),
            (a = s.$nodeToRelocate$),
            a["s-ol"] ||
              ((l = Wt.createTextNode("")),
              (l["s-nr"] = a),
              a.parentNode.insertBefore((a["s-ol"] = l), a));
        for (f = 0; f < Ht.length; f++)
          if (((s = Ht[f]), (a = s.$nodeToRelocate$), s.$slotRefNode$)) {
            for (
              c = s.$slotRefNode$.parentNode,
                u = s.$slotRefNode$.nextSibling,
                l = a["s-ol"];
              (l = l.previousSibling);

            )
              if (
                ((d = l["s-nr"]),
                d &&
                  d["s-sn"] === a["s-sn"] &&
                  c === d.parentNode &&
                  ((d = d.nextSibling), !d || !d["s-nr"]))
              ) {
                u = d;
                break;
              }
            ((!u && c !== a.parentNode) || a.nextSibling !== u) &&
              a !== u &&
              (!a["s-hn"] &&
                a["s-ol"] &&
                (a["s-hn"] = a["s-ol"].parentNode.nodeName),
              c.insertBefore(a, u));
          } else a.nodeType === 1 && (a.hidden = !0);
      }
      ya && H0(o.$elm$), (De.$flags$ &= -2), (Ht.length = 0);
    }
  },
  FS = (e, t) => {},
  Xf = (e, t) => (
    (e.$flags$ |= 16), FS(e, e.$ancestorComponent$), _e(() => NS(e, t))
  ),
  NS = (e, t) => {
    const n = e.$hostElement$,
      i = bi("scheduleUpdate", e.$cmpMeta$.$tagName$),
      r = n;
    let o;
    return (
      t ? (o = cr(r, "componentWillLoad")) : (o = cr(r, "componentWillUpdate")),
      (o = wm(o, () => cr(r, "componentWillRender"))),
      i(),
      wm(o, () => US(e, r, t))
    );
  },
  wm = (e, t) => (HS(e) ? e.then(t) : t()),
  HS = (e) =>
    e instanceof Promise || (e && e.then && typeof e.then == "function"),
  US = async (e, t, n) => {
    const i = e.$hostElement$,
      r = bi("update", e.$cmpMeta$.$tagName$);
    i["s-rc"], n && BS(e);
    const o = bi("render", e.$cmpMeta$.$tagName$);
    VS(e, t, i), o(), r(), qS(e);
  },
  VS = (e, t, n) => {
    try {
      (fm = t),
        (t = t.render && t.render()),
        (e.$flags$ &= -17),
        (e.$flags$ |= 2),
        (Di.hasRenderFn || Di.reflect) &&
          (Di.vdomRender || Di.reflect) &&
          (Di.hydrateServerSide || zS(e, t));
    } catch (a) {
      Wo(a, e.$hostElement$);
    }
    return (fm = null), null;
  },
  qS = (e) => {
    const t = e.$cmpMeta$.$tagName$,
      n = e.$hostElement$,
      i = bi("postUpdate", t),
      r = n;
    e.$ancestorComponent$,
      cr(r, "componentDidRender"),
      e.$flags$ & 64
        ? (cr(r, "componentDidUpdate"), i())
        : ((e.$flags$ |= 64), cr(r, "componentDidLoad"), i());
  },
  ka = (e) => {
    {
      const t = Or(e),
        n = t.$hostElement$.isConnected;
      return n && (t.$flags$ & 18) === 2 && Xf(t, !1), n;
    }
  },
  cr = (e, t, n) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (i) {
        Wo(i);
      }
  },
  WS = (e, t) => Or(e).$instanceValues$.get(t),
  YS = (e, t, n, i) => {
    const r = Or(e),
      o = e,
      s = r.$instanceValues$.get(t),
      a = r.$flags$,
      l = o;
    n = RS(n, i.$members$[t][0]);
    const c = Number.isNaN(s) && Number.isNaN(n);
    if (n !== s && !c) {
      r.$instanceValues$.set(t, n);
      {
        if (i.$watchers$ && a & 128) {
          const d = i.$watchers$[t];
          d &&
            d.map((f) => {
              try {
                l[f](n, s, t);
              } catch (h) {
                Wo(h, o);
              }
            });
        }
        if ((a & 18) === 2) {
          if (
            l.componentShouldUpdate &&
            l.componentShouldUpdate(n, s, t) === !1
          )
            return;
          Xf(r, !1);
        }
      }
    }
  },
  GS = (e, t, n) => {
    if (t.$members$) {
      e.watchers && (t.$watchers$ = e.watchers);
      const i = Object.entries(t.$members$),
        r = e.prototype;
      i.map(([o, [s]]) => {
        (s & 31 || s & 32) &&
          Object.defineProperty(r, o, {
            get() {
              return WS(this, o);
            },
            set(a) {
              YS(this, o, a, t);
            },
            configurable: !0,
            enumerable: !0,
          });
      });
      {
        const o = new Map();
        (r.attributeChangedCallback = function (s, a, l) {
          De.jmp(() => {
            const c = o.get(s);
            if (this.hasOwnProperty(c)) (l = this[c]), delete this[c];
            else if (
              r.hasOwnProperty(c) &&
              typeof this[c] == "number" &&
              this[c] == l
            )
              return;
            this[c] = l === null && typeof this[c] == "boolean" ? !1 : l;
          });
        }),
          (e.observedAttributes = i
            .filter(([s, a]) => a[0] & 15)
            .map(([s, a]) => {
              const l = a[1] || s;
              return (
                o.set(l, s), a[0] & 512 && t.$attrsToReflect$.push([s, l]), l
              );
            }));
      }
    }
    return e;
  },
  XS = async (e, t, n, i, r) => {
    if (
      !(t.$flags$ & 32) &&
      ((t.$flags$ |= 32),
      (r = e.constructor),
      customElements.whenDefined(n.$tagName$).then(() => (t.$flags$ |= 128)),
      r.style)
    ) {
      let s = r.style;
      typeof s != "string" && (s = s[(t.$modeName$ = TS(e))]);
      const a = D0(n, t.$modeName$);
      if (!Ea.has(a)) {
        const l = bi("registerStyles", n.$tagName$);
        _S(a, s, !!(n.$flags$ & 1)), l();
      }
    }
    t.$ancestorComponent$, (() => Xf(t, !0))();
  },
  KS = (e) => {},
  QS = (e) => {
    if (!(De.$flags$ & 1)) {
      const t = Or(e),
        n = t.$cmpMeta$,
        i = bi("connectedCallback", n.$tagName$);
      t.$flags$ & 1
        ? (q0(e, t, n.$listeners$), KS(t.$lazyInstance$))
        : ((t.$flags$ |= 1),
          n.$flags$ & 12 && ZS(e),
          n.$members$ &&
            Object.entries(n.$members$).map(([r, [o]]) => {
              if (o & 31 && e.hasOwnProperty(r)) {
                const s = e[r];
                delete e[r], (e[r] = s);
              }
            }),
          XS(e, t, n)),
        i();
    }
  },
  ZS = (e) => {
    const t = (e["s-cr"] = Wt.createComment(""));
    (t["s-cn"] = !0), e.insertBefore(t, e.firstChild);
  },
  JS = (e) => {
    if (!(De.$flags$ & 1)) {
      const t = Or(e);
      t.$rmListeners$ &&
        (t.$rmListeners$.map((n) => n()), (t.$rmListeners$ = void 0));
    }
  },
  Ee = (e, t) => {
    const n = { $flags$: t[0], $tagName$: t[1] };
    (n.$members$ = t[2]),
      (n.$listeners$ = t[3]),
      (n.$watchers$ = e.$watchers$),
      (n.$attrsToReflect$ = []);
    const i = e.prototype.connectedCallback,
      r = e.prototype.disconnectedCallback;
    return (
      Object.assign(e.prototype, {
        __registerHost() {
          iC(this, n);
        },
        connectedCallback() {
          QS(this), i && i.call(this);
        },
        disconnectedCallback() {
          JS(this), r && r.call(this);
        },
        __attachShadow() {
          this.attachShadow({
            mode: "open",
            delegatesFocus: !!(n.$flags$ & 16),
          });
        },
      }),
      (e.is = n.$tagName$),
      GS(e, n)
    );
  },
  q0 = (e, t, n, i) => {
    n &&
      n.map(([r, o, s]) => {
        const a = tC(e, r),
          l = eC(t, s),
          c = nC(r);
        De.ael(a, o, l, c),
          (t.$rmListeners$ = t.$rmListeners$ || []).push(() =>
            De.rel(a, o, l, c)
          );
      });
  },
  eC = (e, t) => (n) => {
    try {
      Di.lazyLoad || e.$hostElement$[t](n);
    } catch (i) {
      Wo(i);
    }
  },
  tC = (e, t) => (t & 4 ? Wt : t & 8 ? Yo : t & 16 ? Wt.body : e),
  nC = (e) =>
    oC ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0,
  W0 = new WeakMap(),
  Or = (e) => W0.get(e),
  iC = (e, t) => {
    const n = {
      $flags$: 0,
      $hostElement$: e,
      $cmpMeta$: t,
      $instanceValues$: new Map(),
    };
    return q0(e, n, t.$listeners$), W0.set(e, n);
  },
  xm = (e, t) => t in e,
  Wo = (e, t) => (0, console.error)(e, t),
  Ea = new Map(),
  Y0 = [],
  Yo = typeof window < "u" ? window : {},
  Wt = Yo.document || { head: {} },
  Se = Yo.HTMLElement || class {},
  De = {
    $flags$: 0,
    $resourcesUrl$: "",
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, i) => e.addEventListener(t, n, i),
    rel: (e, t, n, i) => e.removeEventListener(t, n, i),
    ce: (e, t) => new CustomEvent(e, t),
  },
  rC = (e) => {
    Object.assign(De, e);
  },
  oC = (() => {
    let e = !1;
    try {
      Wt.addEventListener(
        "e",
        null,
        Object.defineProperty({}, "passive", {
          get() {
            e = !0;
          },
        })
      );
    } catch (t) {}
    return e;
  })(),
  sC = (e) => Promise.resolve(e),
  aC = (() => {
    try {
      return (
        new CSSStyleSheet(),
        typeof new CSSStyleSheet().replaceSync == "function"
      );
    } catch (e) {}
    return !1;
  })(),
  ed = [],
  G0 = [],
  X0 = (e, t) => (n) => {
    e.push(n), Ju || ((Ju = !0), t && De.$flags$ & 4 ? lC(td) : De.raf(td));
  },
  km = (e) => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (n) {
        Wo(n);
      }
    e.length = 0;
  },
  td = () => {
    km(ed), km(G0), (Ju = ed.length > 0) && De.raf(td);
  },
  lC = (e) => sC().then(e),
  yi = X0(ed, !1),
  _e = X0(G0, !0);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Ce = typeof window < "u" ? window : void 0,
  Cc = typeof document < "u" ? document : void 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const K0 = (e, t = 0) =>
    new Promise((n) => {
      cC(e, t, n);
    }),
  cC = (e, t = 0, n) => {
    let i, r;
    const o = { passive: !0 },
      s = 500,
      a = () => {
        i && i();
      },
      l = (c) => {
        (c === void 0 || e === c.target) && (a(), n(c));
      };
    return (
      e &&
        (e.addEventListener("webkitTransitionEnd", l, o),
        e.addEventListener("transitionend", l, o),
        (r = setTimeout(l, t + s)),
        (i = () => {
          r && (clearTimeout(r), (r = void 0)),
            e.removeEventListener("webkitTransitionEnd", l, o),
            e.removeEventListener("transitionend", l, o);
        })),
      a
    );
  },
  Gn = (e, t) => {
    e.componentOnReady
      ? e.componentOnReady().then((n) => t(n))
      : it(() => t(e));
  },
  uC = (e) => e.componentOnReady !== void 0,
  Kf = (e, t = []) => {
    const n = {};
    return (
      t.forEach((i) => {
        e.hasAttribute(i) &&
          (e.getAttribute(i) !== null && (n[i] = e.getAttribute(i)),
          e.removeAttribute(i));
      }),
      n
    );
  },
  dC = [
    "role",
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-braillelabel",
    "aria-brailleroledescription",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colindextext",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-description",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowindextext",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
  ],
  Q0 = (e, t) => {
    let n = dC;
    return t && t.length > 0 && (n = n.filter((i) => !t.includes(i))), Kf(e, n);
  },
  fC = (e, t, n, i) => {
    var r;
    if (typeof window < "u") {
      const o = window,
        s =
          (r = o == null ? void 0 : o.Ionic) === null || r === void 0
            ? void 0
            : r.config;
      if (s) {
        const a = s.get("_ael");
        if (a) return a(e, t, n, i);
        if (s._ael) return s._ael(e, t, n, i);
      }
    }
    return e.addEventListener(t, n, i);
  },
  hC = (e, t, n, i) => {
    var r;
    if (typeof window < "u") {
      const o = window,
        s =
          (r = o == null ? void 0 : o.Ionic) === null || r === void 0
            ? void 0
            : r.config;
      if (s) {
        const a = s.get("_rel");
        if (a) return a(e, t, n, i);
        if (s._rel) return s._rel(e, t, n, i);
      }
    }
    return e.removeEventListener(t, n, i);
  },
  wi = (e, t = e) => e.shadowRoot || t,
  it = (e) =>
    typeof __zone_symbol__requestAnimationFrame == "function"
      ? __zone_symbol__requestAnimationFrame(e)
      : typeof requestAnimationFrame == "function"
      ? requestAnimationFrame(e)
      : setTimeout(e),
  pC = (e) => {
    if ((e.focus(), e.classList.contains("ion-focusable"))) {
      const t = e.closest("ion-app");
      t && t.setFocus([e]);
    }
  },
  ur = (e, t, n) => Math.max(e, Math.min(t, n)),
  nt = (e, t) => {
    if (!e) {
      const n = "ASSERT: " + t;
      console.error(n);
      debugger;
      throw new Error(n);
    }
  },
  t_ = (e) => e.timeStamp || Date.now(),
  n_ = (e) => {
    if (e) {
      const t = e.changedTouches;
      if (t && t.length > 0) {
        const n = t[0];
        return { x: n.clientX, y: n.clientY };
      }
      if (e.pageX !== void 0) return { x: e.pageX, y: e.pageY };
    }
    return { x: 0, y: 0 };
  },
  Z0 = (e, t) => {
    if ((e != null || (e = {}), t != null || (t = {}), e === t)) return !0;
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (const i of n) if (!(i in t) || e[i] !== t[i]) return !1;
    return !0;
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ let $c;
const mC = (e) => (
    e.forEach((t) => {
      for (const n in t)
        if (t.hasOwnProperty(n)) {
          const i = t[n];
          if (n === "easing") {
            const r = "animation-timing-function";
            (t[r] = i), delete t[n];
          } else {
            const r = gC(n);
            r !== n && ((t[r] = i), delete t[n]);
          }
        }
    }),
    e
  ),
  gC = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Qf = (e) => {
    if ($c === void 0) {
      const t = e.style.animationName !== void 0,
        n = e.style.webkitAnimationName !== void 0;
      $c = !t && n ? "-webkit-" : "";
    }
    return $c;
  },
  pe = (e, t, n) => {
    const i = t.startsWith("animation") ? Qf(e) : "";
    e.style.setProperty(i + t, n);
  },
  jt = (e, t) => {
    const n = t.startsWith("animation") ? Qf(e) : "";
    e.style.removeProperty(n + t);
  },
  vC = (e, t) => {
    let n;
    const i = { passive: !0 },
      r = () => {
        n && n();
      },
      o = (s) => {
        e === s.target && (r(), t(s));
      };
    return (
      e &&
        (e.addEventListener("webkitAnimationEnd", o, i),
        e.addEventListener("animationend", o, i),
        (n = () => {
          e.removeEventListener("webkitAnimationEnd", o, i),
            e.removeEventListener("animationend", o, i);
        })),
      r
    );
  },
  bC = (e = []) =>
    e
      .map((t) => {
        const n = t.offset,
          i = [];
        for (const r in t)
          t.hasOwnProperty(r) && r !== "offset" && i.push(`${r}: ${t[r]};`);
        return `${n * 100}% { ${i.join(" ")} }`;
      })
      .join(" "),
  Em = [],
  yC = (e) => {
    let t = Em.indexOf(e);
    return t < 0 && (t = Em.push(e) - 1), `ion-animation-${t}`;
  },
  wC = (e) => {
    const t = e.getRootNode !== void 0 ? e.getRootNode() : e;
    return t.head || t;
  },
  xC = (e, t, n) => {
    var i;
    const r = wC(n),
      o = Qf(n),
      s = r.querySelector("#" + e);
    if (s) return s;
    const a = (
      (i = n.ownerDocument) !== null && i !== void 0 ? i : document
    ).createElement("style");
    return (
      (a.id = e),
      (a.textContent = `@${o}keyframes ${e} { ${t} } @${o}keyframes ${e}-alt { ${t} }`),
      r.appendChild(a),
      a
    );
  },
  ys = (e = [], t) => {
    if (t !== void 0) {
      const n = Array.isArray(t) ? t : [t];
      return [...e, ...n];
    }
    return e;
  },
  Me = (e) => {
    let t,
      n,
      i,
      r,
      o,
      s,
      a = [],
      l = [],
      c = [],
      u = !1,
      d,
      f = {},
      h = [],
      m = [],
      b = {},
      k = 0,
      g = !1,
      p = !1,
      v,
      y,
      E,
      T,
      w = !0,
      P = !1,
      F = !0,
      _,
      I,
      q = !1;
    const ye = e,
      se = [],
      ae = [],
      X = [],
      Z = [],
      L = [],
      O = [],
      $ = [],
      B = [],
      D = [],
      N = [],
      V =
        typeof AnimationEffect == "function" ||
        (Ce !== void 0 && typeof Ce.AnimationEffect == "function"),
      U =
        typeof Element == "function" &&
        typeof Element.prototype.animate == "function" &&
        V,
      te = 100,
      J = () => N,
      pt = (x) => (
        Z.forEach((M) => {
          M.destroy(x);
        }),
        un(x),
        (X.length = 0),
        (Z.length = 0),
        (a.length = 0),
        Xw(),
        (u = !1),
        (F = !0),
        I
      ),
      un = (x) => {
        Ah(), x && Oh();
      },
      Qt = () => {
        (g = !1),
          (p = !1),
          (F = !0),
          (y = void 0),
          (E = void 0),
          (T = void 0),
          (k = 0),
          (P = !1),
          (w = !0),
          (q = !1);
      },
      Gw = () => k !== 0 && !q,
      Jo = (x, M) => (
        (M != null && M.oneTimeCallback ? ae : se).push({ c: x, o: M }), I
      ),
      Xw = () => ((se.length = 0), (ae.length = 0), I),
      Ah = () => {
        if (U)
          N.forEach((x) => {
            x.cancel();
          }),
            (N.length = 0);
        else {
          const x = X.slice();
          it(() => {
            x.forEach((M) => {
              jt(M, "animation-name"),
                jt(M, "animation-duration"),
                jt(M, "animation-timing-function"),
                jt(M, "animation-iteration-count"),
                jt(M, "animation-delay"),
                jt(M, "animation-play-state"),
                jt(M, "animation-fill-mode"),
                jt(M, "animation-direction");
            });
          });
        }
      },
      Oh = () => {
        L.forEach((x) => {
          x != null && x.parentNode && x.parentNode.removeChild(x);
        }),
          (L.length = 0);
      },
      Kw = (x) => (O.push(x), I),
      Qw = (x) => ($.push(x), I),
      Zw = (x) => (B.push(x), I),
      Jw = (x) => (D.push(x), I),
      e1 = (x) => ((l = ys(l, x)), I),
      t1 = (x) => ((c = ys(c, x)), I),
      n1 = (x = {}) => ((f = x), I),
      i1 = (x = []) => {
        for (const M of x) f[M] = "";
        return I;
      },
      r1 = (x) => ((h = ys(h, x)), I),
      o1 = (x) => ((m = ys(m, x)), I),
      s1 = (x = {}) => ((b = x), I),
      a1 = (x = []) => {
        for (const M of x) b[M] = "";
        return I;
      },
      Lr = () => (o !== void 0 ? o : d ? d.getFill() : "both"),
      Ai = () =>
        y !== void 0 ? y : s !== void 0 ? s : d ? d.getDirection() : "normal",
      _r = () =>
        g ? "linear" : i !== void 0 ? i : d ? d.getEasing() : "linear",
      Bt = () =>
        p ? 0 : E !== void 0 ? E : n !== void 0 ? n : d ? d.getDuration() : 0,
      Sn = () => (r !== void 0 ? r : d ? d.getIterations() : 1),
      Oi = () => (T !== void 0 ? T : t !== void 0 ? t : d ? d.getDelay() : 0),
      l1 = () => a,
      c1 = (x) => ((s = x), $t(!0), I),
      u1 = (x) => ((o = x), $t(!0), I),
      d1 = (x) => ((t = x), $t(!0), I),
      f1 = (x) => ((i = x), $t(!0), I),
      h1 = (x) => (!U && x === 0 && (x = 1), (n = x), $t(!0), I),
      p1 = (x) => ((r = x), $t(!0), I),
      m1 = (x) => ((d = x), I),
      g1 = (x) => {
        if (x != null)
          if (x.nodeType === 1) X.push(x);
          else if (x.length >= 0)
            for (let M = 0; M < x.length; M++) X.push(x[M]);
          else console.error("Invalid addElement value");
        return I;
      },
      v1 = (x) => {
        if (x != null)
          if (Array.isArray(x)) for (const M of x) M.parent(I), Z.push(M);
          else x.parent(I), Z.push(x);
        return I;
      },
      b1 = (x) => {
        const M = a !== x;
        return (a = x), M && y1(a), I;
      },
      y1 = (x) => {
        U
          ? J().forEach((M) => {
              if (M.effect.setKeyframes) M.effect.setKeyframes(x);
              else {
                const z = new KeyframeEffect(
                  M.effect.target,
                  x,
                  M.effect.getTiming()
                );
                M.effect = z;
              }
            })
          : Rh();
      },
      w1 = () => {
        O.forEach((Ae) => Ae()), $.forEach((Ae) => Ae());
        const x = l,
          M = c,
          z = f;
        X.forEach((Ae) => {
          const Fe = Ae.classList;
          x.forEach((Pt) => Fe.add(Pt)), M.forEach((Pt) => Fe.remove(Pt));
          for (const Pt in z) z.hasOwnProperty(Pt) && pe(Ae, Pt, z[Pt]);
        });
      },
      x1 = () => {
        Wl(), B.forEach((Fe) => Fe()), D.forEach((Fe) => Fe());
        const x = w ? 1 : 0,
          M = h,
          z = m,
          Ae = b;
        X.forEach((Fe) => {
          const Pt = Fe.classList;
          M.forEach((Jn) => Pt.add(Jn)), z.forEach((Jn) => Pt.remove(Jn));
          for (const Jn in Ae) Ae.hasOwnProperty(Jn) && pe(Fe, Jn, Ae[Jn]);
        }),
          se.forEach((Fe) => Fe.c(x, I)),
          ae.forEach((Fe) => Fe.c(x, I)),
          (ae.length = 0),
          (F = !0),
          w && (P = !0),
          (w = !0);
      },
      Ri = () => {
        k !== 0 && (k--, k === 0 && (x1(), d && d.animationFinish()));
      },
      Rh = (x = !0) => {
        Oh();
        const M = mC(a);
        X.forEach((z) => {
          if (M.length > 0) {
            const Ae = bC(M);
            _ = e !== void 0 ? e : yC(Ae);
            const Fe = xC(_, Ae, z);
            L.push(Fe),
              pe(z, "animation-duration", `${Bt()}ms`),
              pe(z, "animation-timing-function", _r()),
              pe(z, "animation-delay", `${Oi()}ms`),
              pe(z, "animation-fill-mode", Lr()),
              pe(z, "animation-direction", Ai());
            const Pt = Sn() === 1 / 0 ? "infinite" : Sn().toString();
            pe(z, "animation-iteration-count", Pt),
              pe(z, "animation-play-state", "paused"),
              x && pe(z, "animation-name", `${Fe.id}-alt`),
              it(() => {
                pe(z, "animation-name", Fe.id || null);
              });
          }
        });
      },
      k1 = () => {
        X.forEach((x) => {
          const M = x.animate(a, {
            id: ye,
            delay: Oi(),
            duration: Bt(),
            easing: _r(),
            iterations: Sn(),
            fill: Lr(),
            direction: Ai(),
          });
          M.pause(), N.push(M);
        }),
          N.length > 0 &&
            (N[0].onfinish = () => {
              Ri();
            });
      },
      Ih = (x = !0) => {
        w1(), a.length > 0 && (U ? k1() : Rh(x)), (u = !0);
      },
      Mr = (x) => {
        if (((x = Math.min(Math.max(x, 0), 0.9999)), U))
          N.forEach((M) => {
            (M.currentTime = M.effect.getComputedTiming().delay + Bt() * x),
              M.pause();
          });
        else {
          const M = `-${Bt() * x}ms`;
          X.forEach((z) => {
            a.length > 0 &&
              (pe(z, "animation-delay", M),
              pe(z, "animation-play-state", "paused"));
          });
        }
      },
      Lh = (x) => {
        N.forEach((M) => {
          M.effect.updateTiming({
            delay: Oi(),
            duration: Bt(),
            easing: _r(),
            iterations: Sn(),
            fill: Lr(),
            direction: Ai(),
          });
        }),
          x !== void 0 && Mr(x);
      },
      _h = (x = !0, M) => {
        it(() => {
          X.forEach((z) => {
            pe(z, "animation-name", _ || null),
              pe(z, "animation-duration", `${Bt()}ms`),
              pe(z, "animation-timing-function", _r()),
              pe(
                z,
                "animation-delay",
                M !== void 0 ? `-${M * Bt()}ms` : `${Oi()}ms`
              ),
              pe(z, "animation-fill-mode", Lr() || null),
              pe(z, "animation-direction", Ai() || null);
            const Ae = Sn() === 1 / 0 ? "infinite" : Sn().toString();
            pe(z, "animation-iteration-count", Ae),
              x && pe(z, "animation-name", `${_}-alt`),
              it(() => {
                pe(z, "animation-name", _ || null);
              });
          });
        });
      },
      $t = (x = !1, M = !0, z) => (
        x &&
          Z.forEach((Ae) => {
            Ae.update(x, M, z);
          }),
        U ? Lh(z) : _h(M, z),
        I
      ),
      E1 = (x = !1, M) => (
        Z.forEach((z) => {
          z.progressStart(x, M);
        }),
        Mh(),
        (g = x),
        u || Ih(),
        $t(!1, !0, M),
        I
      ),
      S1 = (x) => (
        Z.forEach((M) => {
          M.progressStep(x);
        }),
        Mr(x),
        I
      ),
      C1 = (x, M, z) => (
        (g = !1),
        Z.forEach((Ae) => {
          Ae.progressEnd(x, M, z);
        }),
        z !== void 0 && (E = z),
        (P = !1),
        (w = !0),
        x === 0
          ? ((y = Ai() === "reverse" ? "normal" : "reverse"),
            y === "reverse" && (w = !1),
            U ? ($t(), Mr(1 - M)) : ((T = (1 - M) * Bt() * -1), $t(!1, !1)))
          : x === 1 && (U ? ($t(), Mr(M)) : ((T = M * Bt() * -1), $t(!1, !1))),
        x !== void 0 &&
          (Jo(
            () => {
              (E = void 0), (y = void 0), (T = void 0);
            },
            { oneTimeCallback: !0 }
          ),
          d || Bh()),
        I
      ),
      Mh = () => {
        u &&
          (U
            ? N.forEach((x) => {
                x.pause();
              })
            : X.forEach((x) => {
                pe(x, "animation-play-state", "paused");
              }),
          (q = !0));
      },
      $1 = () => (
        Z.forEach((x) => {
          x.pause();
        }),
        Mh(),
        I
      ),
      P1 = () => {
        (v = void 0), Ri();
      },
      Wl = () => {
        v && clearTimeout(v);
      },
      T1 = () => {
        if (
          (Wl(),
          it(() => {
            X.forEach((x) => {
              a.length > 0 && pe(x, "animation-play-state", "running");
            });
          }),
          a.length === 0 || X.length === 0)
        )
          Ri();
        else {
          const x = Oi() || 0,
            M = Bt() || 0,
            z = Sn() || 1;
          isFinite(z) && (v = setTimeout(P1, x + M * z + te)),
            vC(X[0], () => {
              Wl(),
                it(() => {
                  A1(), it(Ri);
                });
            });
        }
      },
      A1 = () => {
        X.forEach((x) => {
          jt(x, "animation-duration"),
            jt(x, "animation-delay"),
            jt(x, "animation-play-state");
        });
      },
      O1 = () => {
        N.forEach((x) => {
          x.play();
        }),
          (a.length === 0 || X.length === 0) && Ri();
      },
      R1 = () => {
        U ? (Mr(0), Lh()) : _h();
      },
      Bh = (x) =>
        new Promise((M) => {
          x != null &&
            x.sync &&
            ((p = !0), Jo(() => (p = !1), { oneTimeCallback: !0 })),
            u || Ih(),
            P && (R1(), (P = !1)),
            F && ((k = Z.length + 1), (F = !1)),
            Jo(() => M(), { oneTimeCallback: !0 }),
            Z.forEach((z) => {
              z.play();
            }),
            U ? O1() : T1(),
            (q = !1);
        }),
      I1 = () => {
        Z.forEach((x) => {
          x.stop();
        }),
          u && (Ah(), (u = !1)),
          Qt();
      },
      Dh = (x, M) => {
        const z = a[0];
        return (
          z !== void 0 && (z.offset === void 0 || z.offset === 0)
            ? (z[x] = M)
            : (a = [{ offset: 0, [x]: M }, ...a]),
          I
        );
      };
    return (I = {
      parentAnimation: d,
      elements: X,
      childAnimations: Z,
      id: ye,
      animationFinish: Ri,
      from: Dh,
      to: (x, M) => {
        const z = a[a.length - 1];
        return (
          z !== void 0 && (z.offset === void 0 || z.offset === 1)
            ? (z[x] = M)
            : (a = [...a, { offset: 1, [x]: M }]),
          I
        );
      },
      fromTo: (x, M, z) => Dh(x, M).to(x, z),
      parent: m1,
      play: Bh,
      pause: $1,
      stop: I1,
      destroy: pt,
      keyframes: b1,
      addAnimation: v1,
      addElement: g1,
      update: $t,
      fill: u1,
      direction: c1,
      iterations: p1,
      duration: h1,
      easing: f1,
      delay: d1,
      getWebAnimations: J,
      getKeyframes: l1,
      getFill: Lr,
      getDirection: Ai,
      getDelay: Oi,
      getIterations: Sn,
      getEasing: _r,
      getDuration: Bt,
      afterAddRead: Zw,
      afterAddWrite: Jw,
      afterClearStyles: a1,
      afterStyles: s1,
      afterRemoveClass: o1,
      afterAddClass: r1,
      beforeAddRead: Kw,
      beforeAddWrite: Qw,
      beforeClearStyles: i1,
      beforeStyles: n1,
      beforeRemoveClass: t1,
      beforeAddClass: e1,
      onFinish: Jo,
      isRunning: Gw,
      progressStart: E1,
      progressStep: S1,
      progressEnd: C1,
    });
  },
  kC = "ionViewWillEnter",
  EC = "ionViewDidEnter",
  J0 = "ionViewWillLeave",
  ey = "ionViewDidLeave",
  Pc = "ionViewWillUnload",
  SC = () => ot(() => import("./ios.transition-3ce39380.js"), []),
  CC = () => ot(() => import("./md.transition-42c45171.js"), []),
  ty = (e) =>
    new Promise((t, n) => {
      _e(() => {
        $C(e),
          PC(e).then(
            (i) => {
              i.animation && i.animation.destroy(), Sm(e), t(i);
            },
            (i) => {
              Sm(e), n(i);
            }
          );
      });
    }),
  $C = (e) => {
    const t = e.enteringEl,
      n = e.leavingEl;
    LC(t, n, e.direction),
      e.showGoBack
        ? t.classList.add("can-go-back")
        : t.classList.remove("can-go-back"),
      id(t, !1),
      t.style.setProperty("pointer-events", "none"),
      n && (id(n, !1), n.style.setProperty("pointer-events", "none"));
  },
  PC = async (e) => {
    const t = await TC(e);
    return t && yS.isBrowser ? AC(t, e) : OC(e);
  },
  Sm = (e) => {
    const t = e.enteringEl,
      n = e.leavingEl;
    t.classList.remove("ion-page-invisible"),
      t.style.removeProperty("pointer-events"),
      n !== void 0 &&
        (n.classList.remove("ion-page-invisible"),
        n.style.removeProperty("pointer-events"));
  },
  TC = async (e) =>
    !e.leavingEl || !e.animated || e.duration === 0
      ? void 0
      : e.animationBuilder
      ? e.animationBuilder
      : e.mode === "ios"
      ? (await SC()).iosTransitionAnimation
      : (await CC()).mdTransitionAnimation,
  AC = async (e, t) => {
    await ny(t, !0);
    const n = e(t.baseEl, t);
    iy(t.enteringEl, t.leavingEl);
    const i = await IC(n, t);
    return (
      t.progressCallback && t.progressCallback(void 0),
      i && ry(t.enteringEl, t.leavingEl),
      { hasCompleted: i, animation: n }
    );
  },
  OC = async (e) => {
    const t = e.enteringEl,
      n = e.leavingEl;
    return await ny(e, !1), iy(t, n), ry(t, n), { hasCompleted: !0 };
  },
  ny = async (e, t) => {
    (e.deepWait !== void 0 ? e.deepWait : t) &&
      (await Promise.all([nd(e.enteringEl), nd(e.leavingEl)])),
      await RC(e.viewIsReady, e.enteringEl);
  },
  RC = async (e, t) => {
    e && (await e(t));
  },
  IC = (e, t) => {
    const n = t.progressCallback,
      i = new Promise((r) => {
        e.onFinish((o) => r(o === 1));
      });
    return n ? (e.progressStart(!0), n(e)) : e.play(), i;
  },
  iy = (e, t) => {
    mn(t, J0), mn(e, kC);
  },
  ry = (e, t) => {
    mn(e, EC), mn(t, ey);
  },
  mn = (e, t) => {
    if (e) {
      const n = new CustomEvent(t, { bubbles: !1, cancelable: !1 });
      e.dispatchEvent(n);
    }
  },
  nd = async (e) => {
    const t = e;
    if (t) {
      if (t.componentOnReady != null) {
        if ((await t.componentOnReady()) != null) return;
      } else if (t.__registerHost != null) {
        await new Promise((i) => it(i));
        return;
      }
      await Promise.all(Array.from(t.children).map(nd));
    }
  },
  id = (e, t) => {
    t
      ? (e.setAttribute("aria-hidden", "true"),
        e.classList.add("ion-page-hidden"))
      : ((e.hidden = !1),
        e.removeAttribute("aria-hidden"),
        e.classList.remove("ion-page-hidden"));
  },
  LC = (e, t, n) => {
    e !== void 0 && (e.style.zIndex = n === "back" ? "99" : "101"),
      t !== void 0 && (t.style.zIndex = "100");
  },
  i_ = (e) => {
    if (e.classList.contains("ion-page")) return e;
    const t = e.querySelector(
      ":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"
    );
    return t || e;
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const _o = (e, t, n, i, r) =>
    MC(e[1], t[1], n[1], i[1], r).map((o) => _C(e[0], t[0], n[0], i[0], o)),
  _C = (e, t, n, i, r) => {
    const o = 3 * t * Math.pow(r - 1, 2),
      s = -3 * n * r + 3 * n + i * r,
      a = e * Math.pow(r - 1, 3);
    return r * (o + r * s) - a;
  },
  MC = (e, t, n, i, r) => (
    (e -= r),
    (t -= r),
    (n -= r),
    (i -= r),
    DC(i - 3 * n + 3 * t - e, 3 * n - 6 * t + 3 * e, 3 * t - 3 * e, e).filter(
      (s) => s >= 0 && s <= 1
    )
  ),
  BC = (e, t, n) => {
    const i = t * t - 4 * e * n;
    return i < 0
      ? []
      : [(-t + Math.sqrt(i)) / (2 * e), (-t - Math.sqrt(i)) / (2 * e)];
  },
  DC = (e, t, n, i) => {
    if (e === 0) return BC(t, n, i);
    (t /= e), (n /= e), (i /= e);
    const r = (3 * n - t * t) / 3,
      o = (2 * t * t * t - 9 * t * n + 27 * i) / 27;
    if (r === 0) return [Math.pow(-o, 1 / 3)];
    if (o === 0) return [Math.sqrt(-r), -Math.sqrt(-r)];
    const s = Math.pow(o / 2, 2) + Math.pow(r / 3, 3);
    if (s === 0) return [Math.pow(o / 2, 1 / 2) - t / 3];
    if (s > 0)
      return [
        Math.pow(-(o / 2) + Math.sqrt(s), 1 / 3) -
          Math.pow(o / 2 + Math.sqrt(s), 1 / 3) -
          t / 3,
      ];
    const a = Math.sqrt(Math.pow(-(r / 3), 3)),
      l = Math.acos(-(o / (2 * Math.sqrt(Math.pow(-(r / 3), 3))))),
      c = 2 * Math.pow(a, 1 / 3);
    return [
      c * Math.cos(l / 3) - t / 3,
      c * Math.cos((l + 2 * Math.PI) / 3) - t / 3,
      c * Math.cos((l + 4 * Math.PI) / 3) - t / 3,
    ];
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ class jC {
  constructor() {
    this.m = new Map();
  }
  reset(t) {
    this.m = new Map(Object.entries(t));
  }
  get(t, n) {
    const i = this.m.get(t);
    return i !== void 0 ? i : n;
  }
  getBoolean(t, n = !1) {
    const i = this.m.get(t);
    return i === void 0 ? n : typeof i == "string" ? i === "true" : !!i;
  }
  getNumber(t, n) {
    const i = parseFloat(this.m.get(t));
    return isNaN(i) ? (n !== void 0 ? n : NaN) : i;
  }
  set(t, n) {
    this.m.set(t, n);
  }
}
const Y = new jC(),
  zC = (e) => {
    try {
      const t = e.sessionStorage.getItem(oy);
      return t !== null ? JSON.parse(t) : {};
    } catch (t) {
      return {};
    }
  },
  FC = (e, t) => {
    try {
      e.sessionStorage.setItem(oy, JSON.stringify(t));
    } catch (n) {
      return;
    }
  },
  NC = (e) => {
    const t = {};
    return (
      e.location.search
        .slice(1)
        .split("&")
        .map((n) => n.split("="))
        .map(([n, i]) => [decodeURIComponent(n), decodeURIComponent(i)])
        .filter(([n]) => HC(n, Cm))
        .map(([n, i]) => [n.slice(Cm.length), i])
        .forEach(([n, i]) => {
          t[n] = i;
        }),
      t
    );
  },
  HC = (e, t) => e.substr(0, t.length) === t,
  Cm = "ionic:",
  oy = "ionic-persist-config",
  UC = (e) => sy(e),
  rn = (e, t) => (
    typeof e == "string" && ((t = e), (e = void 0)), UC(e).includes(t)
  ),
  sy = (e = window) => {
    if (typeof e > "u") return [];
    e.Ionic = e.Ionic || {};
    let t = e.Ionic.platforms;
    return (
      t == null &&
        ((t = e.Ionic.platforms = VC(e)),
        t.forEach((n) => e.document.documentElement.classList.add(`plt-${n}`))),
      t
    );
  },
  VC = (e) => {
    const t = Y.get("platform");
    return Object.keys($m).filter((n) => {
      const i = t == null ? void 0 : t[n];
      return typeof i == "function" ? i(e) : $m[n](e);
    });
  },
  qC = (e) => kl(e) && !ly(e),
  Zf = (e) => !!(xi(e, /iPad/i) || (xi(e, /Macintosh/i) && kl(e))),
  WC = (e) => xi(e, /iPhone/i),
  YC = (e) => xi(e, /iPhone|iPod/i) || Zf(e),
  ay = (e) => xi(e, /android|sink/i),
  GC = (e) => ay(e) && !xi(e, /mobile/i),
  XC = (e) => {
    const t = e.innerWidth,
      n = e.innerHeight,
      i = Math.min(t, n),
      r = Math.max(t, n);
    return i > 390 && i < 520 && r > 620 && r < 800;
  },
  KC = (e) => {
    const t = e.innerWidth,
      n = e.innerHeight,
      i = Math.min(t, n),
      r = Math.max(t, n);
    return Zf(e) || GC(e) || (i > 460 && i < 820 && r > 780 && r < 1400);
  },
  kl = (e) => e$(e, "(any-pointer:coarse)"),
  QC = (e) => !kl(e),
  ly = (e) => cy(e) || uy(e),
  cy = (e) => !!(e.cordova || e.phonegap || e.PhoneGap),
  uy = (e) => {
    const t = e.Capacitor;
    return !!(t != null && t.isNative);
  },
  ZC = (e) => xi(e, /electron/i),
  JC = (e) => {
    var t;
    return !!(
      (!((t = e.matchMedia) === null || t === void 0) &&
        t.call(e, "(display-mode: standalone)").matches) ||
      e.navigator.standalone
    );
  },
  xi = (e, t) => t.test(e.navigator.userAgent),
  e$ = (e, t) => {
    var n;
    return (n = e.matchMedia) === null || n === void 0
      ? void 0
      : n.call(e, t).matches;
  },
  $m = {
    ipad: Zf,
    iphone: WC,
    ios: YC,
    android: ay,
    phablet: XC,
    tablet: KC,
    cordova: cy,
    capacitor: uy,
    electron: ZC,
    pwa: JC,
    mobile: kl,
    mobileweb: qC,
    desktop: QC,
    hybrid: ly,
  };
let Fi;
const Q = (e) => (e && OS(e)) || Fi,
  t$ = (e = {}) => {
    if (typeof window > "u") return;
    const t = window.document,
      n = window,
      i = (n.Ionic = n.Ionic || {}),
      r = {};
    e._ael && (r.ael = e._ael),
      e._rel && (r.rel = e._rel),
      e._ce && (r.ce = e._ce),
      rC(r);
    const o = Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, zC(n)), { persistConfig: !1 }),
          i.config
        ),
        NC(n)
      ),
      e
    );
    Y.reset(o),
      Y.getBoolean("persistConfig") && FC(n, o),
      sy(n),
      (i.config = Y),
      (i.mode = Fi =
        Y.get(
          "mode",
          t.documentElement.getAttribute("mode") ||
            (rn(n, "ios") ? "ios" : "md")
        )),
      Y.set("mode", Fi),
      t.documentElement.setAttribute("mode", Fi),
      t.documentElement.classList.add(Fi),
      Y.getBoolean("_testing") && Y.set("animated", !1);
    const s = (l) => {
        var c;
        return (c = l.tagName) === null || c === void 0
          ? void 0
          : c.startsWith("ION-");
      },
      a = (l) => ["ios", "md"].includes(l);
    AS((l) => {
      for (; l; ) {
        const c = l.mode || l.getAttribute("mode");
        if (c) {
          if (a(c)) return c;
          s(l) &&
            console.warn(
              'Invalid ionic mode: "' + c + '", expected: "ios" or "md"'
            );
        }
        l = l.parentElement;
      }
      return Fi;
    });
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const rd = (e) => {
    try {
      if (e instanceof o$) return e.value;
      if (!n$() || typeof e != "string" || e === "") return e;
      if (e.includes("onload=")) return "";
      const t = document.createDocumentFragment(),
        n = document.createElement("div");
      t.appendChild(n),
        (n.innerHTML = e),
        r$.forEach((s) => {
          const a = t.querySelectorAll(s);
          for (let l = a.length - 1; l >= 0; l--) {
            const c = a[l];
            c.parentNode ? c.parentNode.removeChild(c) : t.removeChild(c);
            const u = sd(c);
            for (let d = 0; d < u.length; d++) od(u[d]);
          }
        });
      const i = sd(t);
      for (let s = 0; s < i.length; s++) od(i[s]);
      const r = document.createElement("div");
      r.appendChild(t);
      const o = r.querySelector("div");
      return o !== null ? o.innerHTML : r.innerHTML;
    } catch (t) {
      return console.error(t), "";
    }
  },
  od = (e) => {
    if (e.nodeType && e.nodeType !== 1) return;
    if (typeof NamedNodeMap < "u" && !(e.attributes instanceof NamedNodeMap)) {
      e.remove();
      return;
    }
    for (let n = e.attributes.length - 1; n >= 0; n--) {
      const i = e.attributes.item(n),
        r = i.name;
      if (!i$.includes(r.toLowerCase())) {
        e.removeAttribute(r);
        continue;
      }
      const o = i.value,
        s = e[r];
      ((o != null && o.toLowerCase().includes("javascript:")) ||
        (s != null && s.toLowerCase().includes("javascript:"))) &&
        e.removeAttribute(r);
    }
    const t = sd(e);
    for (let n = 0; n < t.length; n++) od(t[n]);
  },
  sd = (e) => (e.children != null ? e.children : e.childNodes),
  n$ = () => {
    var e;
    const t = window,
      n =
        (e = t == null ? void 0 : t.Ionic) === null || e === void 0
          ? void 0
          : e.config;
    return n
      ? n.get
        ? n.get("sanitizerEnabled", !0)
        : n.sanitizerEnabled === !0 || n.sanitizerEnabled === void 0
      : !0;
  },
  i$ = ["class", "id", "href", "src", "name", "slot"],
  r$ = ["script", "style", "iframe", "meta", "link", "object", "embed"];
class o$ {
  constructor(t) {
    this.value = t;
  }
}
const dy = !1;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const s$ = () => {
    document.addEventListener("backbutton", () => {});
  },
  a$ = () => {
    const e = document;
    let t = !1;
    e.addEventListener("backbutton", () => {
      if (t) return;
      let n = 0,
        i = [];
      const r = new CustomEvent("ionBackButton", {
        bubbles: !1,
        detail: {
          register(a, l) {
            i.push({ priority: a, handler: l, id: n++ });
          },
        },
      });
      e.dispatchEvent(r);
      const o = async (a) => {
          try {
            if (a != null && a.handler) {
              const l = a.handler(s);
              l != null && (await l);
            }
          } catch (l) {
            console.error(l);
          }
        },
        s = () => {
          if (i.length > 0) {
            let a = {
              priority: Number.MIN_SAFE_INTEGER,
              handler: () => {},
              id: -1,
            };
            i.forEach((l) => {
              l.priority >= a.priority && (a = l);
            }),
              (t = !0),
              (i = i.filter((l) => l.id !== a.id)),
              o(a).then(() => (t = !1));
          }
        };
      s();
    });
  },
  fy = 100,
  l$ = 99,
  c$ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        MENU_BACK_BUTTON_PRIORITY: l$,
        OVERLAY_BACK_BUTTON_PRIORITY: fy,
        blockHardwareBackButton: s$,
        startHardwareBackButton: a$,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const hy = async (e, t, n, i, r, o) => {
    var s;
    if (e) return e.attachViewToDom(t, n, r, i);
    if (!o && typeof n != "string" && !(n instanceof HTMLElement))
      throw new Error("framework delegate is missing");
    const a =
      typeof n == "string"
        ? (s = t.ownerDocument) === null || s === void 0
          ? void 0
          : s.createElement(n)
        : n;
    return (
      i && i.forEach((l) => a.classList.add(l)),
      r && Object.assign(a, r),
      t.appendChild(a),
      await new Promise((l) => Gn(a, l)),
      a
    );
  },
  u$ = (e, t) => {
    if (t) {
      if (e) {
        const n = t.parentElement;
        return e.removeViewFromDom(n, t);
      }
      t.remove();
    }
    return Promise.resolve();
  },
  d$ = () => {
    let e, t;
    return {
      attachViewToDom: async (r, o, s = {}, a = []) => {
        var l, c;
        if (((e = r), o)) {
          const d =
            typeof o == "string"
              ? (l = e.ownerDocument) === null || l === void 0
                ? void 0
                : l.createElement(o)
              : o;
          a.forEach((f) => d.classList.add(f)),
            Object.assign(d, s),
            e.appendChild(d),
            await new Promise((f) => Gn(d, f));
        } else if (
          e.children.length > 0 &&
          (e.tagName === "ION-MODAL" || e.tagName === "ION-POPOVER") &&
          !e.children[0].classList.contains("ion-delegate-host")
        ) {
          const f =
            (c = e.ownerDocument) === null || c === void 0
              ? void 0
              : c.createElement("div");
          f.classList.add("ion-delegate-host"),
            a.forEach((h) => f.classList.add(h)),
            f.append(...e.children),
            e.appendChild(f);
        }
        const u = document.querySelector("ion-app") || document.body;
        return (
          (t = document.createComment("ionic teleport")),
          e.parentNode.insertBefore(t, e),
          u.appendChild(e),
          e
        );
      },
      removeViewFromDom: () => (
        e && t && (t.parentNode.insertBefore(e, t), t.remove()),
        Promise.resolve()
      ),
    };
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const An = (e, ...t) => console.warn(`[Ionic Warning]: ${e}`, ...t),
  f$ = (e, ...t) => console.error(`[Ionic Error]: ${e}`, ...t),
  h$ = (e, ...t) =>
    console.error(
      `<${e.tagName.toLowerCase()}> must be used inside ${t.join(" or ")}.`
    );
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ let ad = 0,
  p$ = 0;
const ld = new WeakMap(),
  m$ = (e) => {
    typeof document < "u" && y$(document);
    const t = ad++;
    e.overlayIndex = t;
  },
  g$ = (e) => (e.hasAttribute("id") || (e.id = `ion-overlay-${++p$}`), e.id),
  Mo =
    '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
  Pm = (e, t) => {
    let n = e.querySelector(Mo);
    const i = n == null ? void 0 : n.shadowRoot;
    i && (n = i.querySelector(Mo) || n), n ? pC(n) : t.focus();
  },
  v$ = (e) => e.classList.contains("overlay-hidden"),
  Tm = (e, t) => {
    const n = Array.from(e.querySelectorAll(Mo));
    let i = n.length > 0 ? n[n.length - 1] : null;
    const r = i == null ? void 0 : i.shadowRoot;
    r && (i = r.querySelector(Mo) || i), i ? i.focus() : t.focus();
  },
  b$ = (e, t) => {
    const n = cd(
        t,
        "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover"
      ),
      i = e.target;
    if (!n || !i || n.classList.contains("ion-disable-focus-trap")) return;
    const r = () => {
        if (n === i) n.lastFocus = void 0;
        else {
          const s = wi(n);
          if (!s.contains(i)) return;
          const a = s.querySelector(".ion-overlay-wrapper");
          if (!a) return;
          if (a.contains(i)) n.lastFocus = i;
          else {
            const l = n.lastFocus;
            Pm(a, n),
              l === t.activeElement && Tm(a, n),
              (n.lastFocus = t.activeElement);
          }
        }
      },
      o = () => {
        if (n.contains(i)) n.lastFocus = i;
        else {
          const s = n.lastFocus;
          Pm(n, n),
            s === t.activeElement && Tm(n, n),
            (n.lastFocus = t.activeElement);
        }
      };
    n.shadowRoot ? o() : r();
  },
  y$ = (e) => {
    ad === 0 &&
      ((ad = 1),
      e.addEventListener(
        "focus",
        (t) => {
          b$(t, e);
        },
        !0
      ),
      e.addEventListener("ionBackButton", (t) => {
        const n = cd(e);
        n != null &&
          n.backdropDismiss &&
          t.detail.register(fy, () => n.dismiss(void 0, ud));
      }),
      e.addEventListener("keydown", (t) => {
        if (t.key === "Escape") {
          const n = cd(e);
          n != null && n.backdropDismiss && n.dismiss(void 0, ud);
        }
      }));
  },
  w$ = (e, t) => (
    t === void 0 &&
      (t =
        "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),
    Array.from(e.querySelectorAll(t)).filter((n) => n.overlayIndex > 0)
  ),
  cd = (e, t, n) => {
    const i = w$(e, t).filter((r) => !v$(r));
    return n === void 0 ? i[i.length - 1] : i.find((r) => r.id === n);
  },
  py = (e = !1) => {
    const n = S$(document).querySelector(
      "ion-router-outlet, ion-nav, #ion-view-container-root"
    );
    n &&
      (e
        ? n.setAttribute("aria-hidden", "true")
        : n.removeAttribute("aria-hidden"));
  },
  x$ = async (e, t, n, i, r) => {
    var o, s;
    if (e.presented) return;
    py(!0),
      (e.presented = !0),
      e.willPresent.emit(),
      (o = e.willPresentShorthand) === null || o === void 0 || o.emit();
    const a = Q(e),
      l = e.enterAnimation ? e.enterAnimation : Y.get(t, a === "ios" ? n : i);
    (await my(e, l, e.el, r)) &&
      (e.didPresent.emit(),
      (s = e.didPresentShorthand) === null || s === void 0 || s.emit()),
      e.el.tagName !== "ION-TOAST" && k$(e.el),
      e.keyboardClose &&
        (document.activeElement === null ||
          !e.el.contains(document.activeElement)) &&
        e.el.focus();
  },
  k$ = async (e) => {
    let t = document.activeElement;
    if (!t) return;
    const n = t == null ? void 0 : t.shadowRoot;
    n && (t = n.querySelector(Mo) || t), await e.onDidDismiss(), t.focus();
  },
  E$ = async (e, t, n, i, r, o, s) => {
    var a, l;
    if (!e.presented) return !1;
    py(!1), (e.presented = !1);
    try {
      e.el.style.setProperty("pointer-events", "none"),
        e.willDismiss.emit({ data: t, role: n }),
        (a = e.willDismissShorthand) === null ||
          a === void 0 ||
          a.emit({ data: t, role: n });
      const c = Q(e),
        u = e.leaveAnimation ? e.leaveAnimation : Y.get(i, c === "ios" ? r : o);
      n !== T$ && (await my(e, u, e.el, s)),
        e.didDismiss.emit({ data: t, role: n }),
        (l = e.didDismissShorthand) === null ||
          l === void 0 ||
          l.emit({ data: t, role: n }),
        ld.delete(e),
        e.el.classList.add("overlay-hidden"),
        e.el.style.removeProperty("pointer-events"),
        e.el.lastFocus !== void 0 && (e.el.lastFocus = void 0);
    } catch (c) {
      console.error(c);
    }
    return e.el.remove(), !0;
  },
  S$ = (e) => e.querySelector("ion-app") || e.body,
  my = async (e, t, n, i) => {
    n.classList.remove("overlay-hidden");
    const r = e.el,
      o = t(r, i);
    (!e.animated || !Y.getBoolean("animated", !0)) && o.duration(0),
      e.keyboardClose &&
        o.beforeAddWrite(() => {
          const a = n.ownerDocument.activeElement;
          a != null && a.matches("input,ion-input, ion-textarea") && a.blur();
        });
    const s = ld.get(e) || [];
    return ld.set(e, [...s, o]), await o.play(), !0;
  },
  Am = (e, t) => {
    let n;
    const i = new Promise((r) => (n = r));
    return (
      C$(e, t, (r) => {
        n(r.detail);
      }),
      i
    );
  },
  C$ = (e, t, n) => {
    const i = (r) => {
      hC(e, t, i), n(r);
    };
    fC(e, t, i);
  },
  Om = (e) => e === "cancel" || e === ud,
  $$ = (e) => e(),
  P$ = (e, t) => {
    if (typeof e == "function")
      return Y.get(
        "_zoneGate",
        $$
      )(() => {
        try {
          return e(t);
        } catch (i) {
          throw i;
        }
      });
  },
  ud = "backdrop",
  T$ = "gesture",
  A$ = (e) => {
    let t = !1,
      n;
    const i = d$(),
      r = (a = !1) => {
        if (n && !a) return { delegate: n, inline: t };
        const { el: l, hasController: c, delegate: u } = e;
        return (
          (t = l.parentNode !== null && !c),
          (n = t ? u || i : u),
          { inline: t, delegate: n }
        );
      };
    return {
      attachViewToDom: async (a) => {
        const { delegate: l } = r(!0);
        if (l) return await l.attachViewToDom(e.el, a);
        const { hasController: c } = e;
        if (c && a !== void 0) throw new Error("framework delegate is missing");
        return null;
      },
      removeViewFromDom: () => {
        const { delegate: a } = r();
        a && e.el !== void 0 && a.removeViewFromDom(e.el.parentElement, e.el);
      },
    };
  },
  O$ = () => {
    let e;
    const t = () => {
      e && (e(), (e = void 0));
    };
    return {
      addClickListener: (i, r) => {
        t();
        const o = r !== void 0 ? document.getElementById(r) : null;
        if (!o) {
          An(
            `A trigger element with the ID "${r}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,
            i
          );
          return;
        }
        e = ((a, l) => {
          const c = () => {
            l.present();
          };
          return (
            a.addEventListener("click", c),
            () => {
              a.removeEventListener("click", c);
            }
          );
        })(o, i);
      },
      removeClickListener: t,
    };
  };
var lt = function () {
  return (
    (lt =
      Object.assign ||
      function (t) {
        for (var n, i = 1, r = arguments.length; i < r; i++) {
          n = arguments[i];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    lt.apply(this, arguments)
  );
};
function Ke(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
      t.indexOf(i[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
        (n[i[r]] = e[i[r]]);
  return n;
}
function Sa(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = t.length, o; i < r; i++)
      (o || !(i in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, i)), (o[i] = t[i]));
  return e.concat(o || Array.prototype.slice.call(t));
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const R$ =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",
  I$ =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",
  L$ =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",
  _$ =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",
  Rm =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ let Tc;
const M$ = () => {
    if (typeof window > "u") return new Map();
    if (!Tc) {
      const e = window;
      (e.Ionicons = e.Ionicons || {}),
        (Tc = e.Ionicons.map = e.Ionicons.map || new Map());
    }
    return Tc;
  },
  B$ = (e) => {
    let t = Ac(e.src);
    return (
      t ||
      ((t = gy(e.name, e.icon, e.mode, e.ios, e.md)),
      t
        ? D$(t)
        : e.icon && ((t = Ac(e.icon)), t || ((t = Ac(e.icon[e.mode])), t))
        ? t
        : null)
    );
  },
  D$ = (e) => {
    const t = M$().get(e);
    return t || wS(`svg/${e}.svg`);
  },
  gy = (e, t, n, i, r) => (
    (n = (n && ws(n)) === "ios" ? "ios" : "md"),
    i && n === "ios"
      ? (e = ws(i))
      : r && n === "md"
      ? (e = ws(r))
      : (!e && t && !vy(t) && (e = t), Ca(e) && (e = ws(e))),
    !Ca(e) || e.trim() === "" || e.replace(/[a-z]|-|\d/gi, "") !== "" ? null : e
  ),
  Ac = (e) => (Ca(e) && ((e = e.trim()), vy(e)) ? e : null),
  vy = (e) => e.length > 0 && /(\/|\.)/.test(e),
  Ca = (e) => typeof e == "string",
  ws = (e) => e.toLowerCase(),
  j$ = (e, t = []) => {
    const n = {};
    return (
      t.forEach((i) => {
        e.hasAttribute(i) &&
          (e.getAttribute(i) !== null && (n[i] = e.getAttribute(i)),
          e.removeAttribute(i));
      }),
      n
    );
  },
  z$ = (e) =>
    e && e.dir !== ""
      ? e.dir.toLowerCase() === "rtl"
      : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl",
  F$ = (e) => {
    const t = document.createElement("div");
    t.innerHTML = e;
    for (let i = t.childNodes.length - 1; i >= 0; i--)
      t.childNodes[i].nodeName.toLowerCase() !== "svg" &&
        t.removeChild(t.childNodes[i]);
    const n = t.firstElementChild;
    if (n && n.nodeName.toLowerCase() === "svg") {
      const i = n.getAttribute("class") || "";
      if ((n.setAttribute("class", (i + " s-ion-icon").trim()), by(n)))
        return t.innerHTML;
    }
    return "";
  },
  by = (e) => {
    if (e.nodeType === 1) {
      if (e.nodeName.toLowerCase() === "script") return !1;
      for (let t = 0; t < e.attributes.length; t++) {
        const n = e.attributes[t].name;
        if (Ca(n) && n.toLowerCase().indexOf("on") === 0) return !1;
      }
      for (let t = 0; t < e.childNodes.length; t++)
        if (!by(e.childNodes[t])) return !1;
    }
    return !0;
  },
  N$ = (e) => e.startsWith("data:image/svg+xml"),
  H$ = (e) => e.indexOf(";utf8,") !== -1,
  oi = new Map(),
  Im = new Map();
let Oc;
const U$ = (e, t) => {
    let n = Im.get(e);
    if (!n)
      if (typeof fetch < "u" && typeof document < "u")
        if (N$(e) && H$(e)) {
          Oc || (Oc = new DOMParser());
          const r = Oc.parseFromString(e, "text/html").querySelector("svg");
          return r && oi.set(e, r.outerHTML), Promise.resolve();
        } else
          (n = fetch(e).then((i) => {
            if (i.ok)
              return i.text().then((r) => {
                r && t !== !1 && (r = F$(r)), oi.set(e, r || "");
              });
            oi.set(e, "");
          })),
            Im.set(e, n);
      else return oi.set(e, ""), Promise.resolve();
    return n;
  },
  V$ =
    ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",
  q$ = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.iconName = null),
          (this.inheritedAttributes = {}),
          (this.isVisible = !1),
          (this.mode = W$()),
          (this.lazy = !1),
          (this.sanitize = !0);
      }
      componentWillLoad() {
        this.inheritedAttributes = j$(this.el, ["aria-label"]);
      }
      connectedCallback() {
        this.waitUntilVisible(this.el, "50px", () => {
          (this.isVisible = !0), this.loadIcon();
        });
      }
      disconnectedCallback() {
        this.io && (this.io.disconnect(), (this.io = void 0));
      }
      waitUntilVisible(t, n, i) {
        if (this.lazy && typeof window < "u" && window.IntersectionObserver) {
          const r = (this.io = new window.IntersectionObserver(
            (o) => {
              o[0].isIntersecting && (r.disconnect(), (this.io = void 0), i());
            },
            { rootMargin: n }
          ));
          r.observe(t);
        } else i();
      }
      loadIcon() {
        if (this.isVisible) {
          const t = B$(this);
          t &&
            (oi.has(t)
              ? (this.svgContent = oi.get(t))
              : U$(t, this.sanitize).then(() => (this.svgContent = oi.get(t))));
        }
        this.iconName = gy(this.name, this.icon, this.mode, this.ios, this.md);
      }
      render() {
        const { iconName: t, el: n, inheritedAttributes: i } = this,
          r = this.mode || "md",
          o =
            this.flipRtl ||
            (t &&
              (t.indexOf("arrow") > -1 || t.indexOf("chevron") > -1) &&
              this.flipRtl !== !1);
        return A(
          Te,
          Object.assign(
            {
              role: "img",
              class: Object.assign(Object.assign({ [r]: !0 }, Y$(this.color)), {
                [`icon-${this.size}`]: !!this.size,
                "flip-rtl": !!o && z$(n),
              }),
            },
            i
          ),
          this.svgContent
            ? A("div", { class: "icon-inner", innerHTML: this.svgContent })
            : A("div", { class: "icon-inner" })
        );
      }
      static get assetsDirs() {
        return ["svg"];
      }
      get el() {
        return this;
      }
      static get watchers() {
        return {
          name: ["loadIcon"],
          src: ["loadIcon"],
          icon: ["loadIcon"],
          ios: ["loadIcon"],
          md: ["loadIcon"],
        };
      }
      static get style() {
        return V$;
      }
    },
    [
      1,
      "ion-icon",
      {
        mode: [1025],
        color: [1],
        ios: [1],
        md: [1],
        flipRtl: [4, "flip-rtl"],
        name: [513],
        src: [1],
        icon: [8],
        size: [1],
        lazy: [4],
        sanitize: [4],
        svgContent: [32],
        isVisible: [32],
      },
    ]
  ),
  W$ = () =>
    (typeof document < "u" && document.documentElement.getAttribute("mode")) ||
    "md",
  Y$ = (e) => (e ? { "ion-color": !0, [`ion-color-${e}`]: !0 } : null);
function Jf() {
  if (typeof customElements > "u") return;
  ["ion-icon"].forEach((t) => {
    switch (t) {
      case "ion-icon":
        customElements.get(t) || customElements.define(t, q$);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const ki = (e, t) => t.closest(e) !== null,
  an = (e, t) =>
    typeof e == "string" && e.length > 0
      ? Object.assign({ "ion-color": !0, [`ion-color-${e}`]: !0 }, t)
      : t,
  G$ = (e) =>
    e !== void 0
      ? (Array.isArray(e) ? e : e.split(" "))
          .filter((n) => n != null)
          .map((n) => n.trim())
          .filter((n) => n !== "")
      : [],
  yy = (e) => {
    const t = {};
    return G$(e).forEach((n) => (t[n] = !0)), t;
  },
  X$ = /^[a-z][a-z0-9+\-.]*:/,
  wy = async (e, t, n, i) => {
    if (e != null && e[0] !== "#" && !X$.test(e)) {
      const r = document.querySelector("ion-router");
      if (r) return t != null && t.preventDefault(), r.push(e, n, i);
    }
    return !1;
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const K$ =
    ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-start:5px;--padding-end:5px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;height:32px}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:24px;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:24px;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:28px;line-height:0.67}",
  Q$ =
    ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;height:32px}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}",
  Z$ = Ee(
    class extends Se {
      constructor() {
        super(), this.__registerHost(), (this.collapse = !1);
      }
      render() {
        const t = Q(this);
        return A(Te, {
          class: { [t]: !0, ["buttons-collapse"]: this.collapse },
        });
      }
      static get style() {
        return { ios: K$, md: Q$ };
      }
    },
    [34, "ion-buttons", { collapse: [4] }]
  );
function J$() {
  if (typeof customElements > "u") return;
  ["ion-buttons"].forEach((t) => {
    switch (t) {
      case "ion-buttons":
        customElements.get(t) || customElements.define(t, Z$);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const eP = J$;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const tP =
    ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}",
  nP = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.type = "bounded");
      }
      async addRipple(t, n) {
        return new Promise((i) => {
          yi(() => {
            const r = this.el.getBoundingClientRect(),
              o = r.width,
              s = r.height,
              a = Math.sqrt(o * o + s * s),
              l = Math.max(s, o),
              c = this.unbounded ? l : a + rP,
              u = Math.floor(l * oP),
              d = c / u;
            let f = t - r.left,
              h = n - r.top;
            this.unbounded && ((f = o * 0.5), (h = s * 0.5));
            const m = f - u * 0.5,
              b = h - u * 0.5,
              k = o * 0.5 - f,
              g = s * 0.5 - h;
            _e(() => {
              const p = document.createElement("div");
              p.classList.add("ripple-effect");
              const v = p.style;
              (v.top = b + "px"),
                (v.left = m + "px"),
                (v.width = v.height = u + "px"),
                v.setProperty("--final-scale", `${d}`),
                v.setProperty("--translate-end", `${k}px, ${g}px`),
                (this.el.shadowRoot || this.el).appendChild(p),
                setTimeout(() => {
                  i(() => {
                    iP(p);
                  });
                }, 225 + 100);
            });
          });
        });
      }
      get unbounded() {
        return this.type === "unbounded";
      }
      render() {
        const t = Q(this);
        return A(Te, {
          role: "presentation",
          class: { [t]: !0, unbounded: this.unbounded },
        });
      }
      get el() {
        return this;
      }
      static get style() {
        return tP;
      }
    },
    [1, "ion-ripple-effect", { type: [1], addRipple: [64] }]
  ),
  iP = (e) => {
    e.classList.add("fade-out"),
      setTimeout(() => {
        e.remove();
      }, 200);
  },
  rP = 10,
  oP = 0.5;
function eh() {
  if (typeof customElements > "u") return;
  ["ion-ripple-effect"].forEach((t) => {
    switch (t) {
      case "ion-ripple-effect":
        customElements.get(t) || customElements.define(t, nP);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const xs = typeof window < "u" ? window : void 0;
xs && xs.CSS && xs.CSS.supports && xs.CSS.supports("--a: 0");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const sP = (e) =>
  e && e.dir !== ""
    ? e.dir.toLowerCase() === "rtl"
    : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const aP =
    ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}',
  lP = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionScrollStart = fe(this, "ionScrollStart", 7)),
          (this.ionScroll = fe(this, "ionScroll", 7)),
          (this.ionScrollEnd = fe(this, "ionScrollEnd", 7)),
          (this.watchDog = null),
          (this.isScrolling = !1),
          (this.lastScroll = 0),
          (this.queued = !1),
          (this.cTop = -1),
          (this.cBottom = -1),
          (this.isMainContent = !0),
          (this.resizeTimeout = null),
          (this.detail = {
            scrollTop: 0,
            scrollLeft: 0,
            type: "scroll",
            event: void 0,
            startX: 0,
            startY: 0,
            startTime: 0,
            currentX: 0,
            currentY: 0,
            velocityX: 0,
            velocityY: 0,
            deltaX: 0,
            deltaY: 0,
            currentTime: 0,
            data: void 0,
            isScrolling: !0,
          }),
          (this.color = void 0),
          (this.fullscreen = !1),
          (this.forceOverscroll = void 0),
          (this.scrollX = !1),
          (this.scrollY = !0),
          (this.scrollEvents = !1);
      }
      connectedCallback() {
        this.isMainContent =
          this.el.closest("ion-menu, ion-popover, ion-modal") === null;
      }
      disconnectedCallback() {
        this.onScrollEnd();
      }
      onAppLoad() {
        this.resize();
      }
      onResize() {
        this.resizeTimeout &&
          (clearTimeout(this.resizeTimeout), (this.resizeTimeout = null)),
          (this.resizeTimeout = setTimeout(() => {
            this.el.offsetParent !== null && this.resize();
          }, 100));
      }
      shouldForceOverscroll() {
        const { forceOverscroll: t } = this,
          n = Q(this);
        return t === void 0 ? n === "ios" && rn("ios") : t;
      }
      resize() {
        this.fullscreen
          ? yi(() => this.readDimensions())
          : (this.cTop !== 0 || this.cBottom !== 0) &&
            ((this.cTop = this.cBottom = 0), ka(this));
      }
      readDimensions() {
        const t = uP(this.el),
          n = Math.max(this.el.offsetTop, 0),
          i = Math.max(t.offsetHeight - n - this.el.offsetHeight, 0);
        (n !== this.cTop || i !== this.cBottom) &&
          ((this.cTop = n), (this.cBottom = i), ka(this));
      }
      onScroll(t) {
        const n = Date.now(),
          i = !this.isScrolling;
        (this.lastScroll = n),
          i && this.onScrollStart(),
          !this.queued &&
            this.scrollEvents &&
            ((this.queued = !0),
            yi((r) => {
              (this.queued = !1),
                (this.detail.event = t),
                dP(this.detail, this.scrollEl, r, i),
                this.ionScroll.emit(this.detail);
            }));
      }
      async getScrollElement() {
        return (
          this.scrollEl || (await new Promise((t) => Gn(this.el, t))),
          Promise.resolve(this.scrollEl)
        );
      }
      async getBackgroundElement() {
        return (
          this.backgroundContentEl ||
            (await new Promise((t) => Gn(this.el, t))),
          Promise.resolve(this.backgroundContentEl)
        );
      }
      scrollToTop(t = 0) {
        return this.scrollToPoint(void 0, 0, t);
      }
      async scrollToBottom(t = 0) {
        const n = await this.getScrollElement(),
          i = n.scrollHeight - n.clientHeight;
        return this.scrollToPoint(void 0, i, t);
      }
      async scrollByPoint(t, n, i) {
        const r = await this.getScrollElement();
        return this.scrollToPoint(t + r.scrollLeft, n + r.scrollTop, i);
      }
      async scrollToPoint(t, n, i = 0) {
        const r = await this.getScrollElement();
        if (i < 32) {
          n != null && (r.scrollTop = n), t != null && (r.scrollLeft = t);
          return;
        }
        let o,
          s = 0;
        const a = new Promise((h) => (o = h)),
          l = r.scrollTop,
          c = r.scrollLeft,
          u = n != null ? n - l : 0,
          d = t != null ? t - c : 0,
          f = (h) => {
            const m = Math.min(1, (h - s) / i) - 1,
              b = Math.pow(m, 3) + 1;
            u !== 0 && (r.scrollTop = Math.floor(b * u + l)),
              d !== 0 && (r.scrollLeft = Math.floor(b * d + c)),
              b < 1 ? requestAnimationFrame(f) : o();
          };
        return (
          requestAnimationFrame((h) => {
            (s = h), f(h);
          }),
          a
        );
      }
      onScrollStart() {
        (this.isScrolling = !0),
          this.ionScrollStart.emit({ isScrolling: !0 }),
          this.watchDog && clearInterval(this.watchDog),
          (this.watchDog = setInterval(() => {
            this.lastScroll < Date.now() - 120 && this.onScrollEnd();
          }, 100));
      }
      onScrollEnd() {
        this.watchDog && clearInterval(this.watchDog),
          (this.watchDog = null),
          this.isScrolling &&
            ((this.isScrolling = !1),
            this.ionScrollEnd.emit({ isScrolling: !1 }));
      }
      render() {
        const { isMainContent: t, scrollX: n, scrollY: i, el: r } = this,
          o = sP(r) ? "rtl" : "ltr",
          s = Q(this),
          a = this.shouldForceOverscroll(),
          l = s === "ios",
          c = t ? "main" : "div";
        return (
          this.resize(),
          A(
            Te,
            {
              class: an(this.color, {
                [s]: !0,
                "content-sizing": ki("ion-popover", this.el),
                overscroll: a,
                [`content-${o}`]: !0,
              }),
              style: {
                "--offset-top": `${this.cTop}px`,
                "--offset-bottom": `${this.cBottom}px`,
              },
            },
            A("div", {
              ref: (u) => (this.backgroundContentEl = u),
              id: "background-content",
              part: "background",
            }),
            A(
              c,
              {
                class: {
                  "inner-scroll": !0,
                  "scroll-x": n,
                  "scroll-y": i,
                  overscroll: (n || i) && a,
                },
                ref: (u) => (this.scrollEl = u),
                onScroll: this.scrollEvents ? (u) => this.onScroll(u) : void 0,
                part: "scroll",
              },
              A("slot", null)
            ),
            l
              ? A(
                  "div",
                  { class: "transition-effect" },
                  A("div", { class: "transition-cover" }),
                  A("div", { class: "transition-shadow" })
                )
              : null,
            A("slot", { name: "fixed" })
          )
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return aP;
      }
    },
    [
      1,
      "ion-content",
      {
        color: [513],
        fullscreen: [4],
        forceOverscroll: [1028, "force-overscroll"],
        scrollX: [4, "scroll-x"],
        scrollY: [4, "scroll-y"],
        scrollEvents: [4, "scroll-events"],
        getScrollElement: [64],
        getBackgroundElement: [64],
        scrollToTop: [64],
        scrollToBottom: [64],
        scrollByPoint: [64],
        scrollToPoint: [64],
      },
      [
        [8, "appload", "onAppLoad"],
        [9, "resize", "onResize"],
      ],
    ]
  ),
  cP = (e) => {
    var t;
    return e.parentElement
      ? e.parentElement
      : !((t = e.parentNode) === null || t === void 0) && t.host
      ? e.parentNode.host
      : null;
  },
  uP = (e) => {
    const t = e.closest("ion-tabs");
    if (t) return t;
    const n = e.closest(
      "ion-app, ion-page, .ion-page, page-inner, .popover-content"
    );
    return n || cP(e);
  },
  dP = (e, t, n, i) => {
    const r = e.currentX,
      o = e.currentY,
      s = e.currentTime,
      a = t.scrollLeft,
      l = t.scrollTop,
      c = n - s;
    if (
      (i &&
        ((e.startTime = n),
        (e.startX = a),
        (e.startY = l),
        (e.velocityX = e.velocityY = 0)),
      (e.currentTime = n),
      (e.currentX = e.scrollLeft = a),
      (e.currentY = e.scrollTop = l),
      (e.deltaX = a - e.startX),
      (e.deltaY = l - e.startY),
      c > 0 && c < 100)
    ) {
      const u = (a - r) / c,
        d = (l - o) / c;
      (e.velocityX = u * 0.7 + e.velocityX * 0.3),
        (e.velocityY = d * 0.7 + e.velocityY * 0.3);
    }
  };
function fP() {
  if (typeof customElements > "u") return;
  ["ion-content"].forEach((t) => {
    switch (t) {
      case "ion-content":
        customElements.get(t) || customElements.define(t, lP);
        break;
    }
  });
}
const hP = fP;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const pP =
    ":host{color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-350, #a6a6a6)}",
  mP =
    ":host{color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);font-size:14px}",
  gP = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.color = void 0);
      }
      render() {
        const t = Q(this);
        return A(Te, { class: an(this.color, { [t]: !0 }) }, A("slot", null));
      }
      static get style() {
        return { ios: pP, md: mP };
      }
    },
    [33, "ion-note", { color: [513] }]
  );
function vP() {
  if (typeof customElements > "u") return;
  ["ion-note"].forEach((t) => {
    switch (t) {
      case "ion-note":
        customElements.get(t) || customElements.define(t, gP);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const bP =
    ':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native,:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.item-bottom{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--inner-padding-end);padding-inline-end:var(--inner-padding-end);padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.item-detail-icon{-webkit-margin-start:calc(var(--inner-padding-end) / 2);margin-inline-start:calc(var(--inner-padding-end) / 2);-webkit-margin-end:-6px;margin-inline-end:-6px;color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){-ms-flex:1;flex:1}:host(.item-input){-ms-flex-align:center;align-items:center}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;top:0;bottom:0;border-radius:inherit;position:absolute;width:100%;height:100%;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:transform 200ms, border-bottom-width 200ms;transition:transform 200ms, border-bottom-width 200ms, -webkit-transform 200ms;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.ion-focused) .item-highlight,:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-highlight,:host(.item-has-focus) .item-inner-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.ion-focused) .item-highlight,:host(.item-has-focus) .item-highlight{border-width:var(--full-highlight-height);opacity:var(--show-full-highlight)}:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-inner-highlight{border-bottom-width:var(--inset-highlight-height);opacity:var(--show-inset-highlight)}:host(.ion-focused.item-fill-solid) .item-highlight,:host(.item-has-focus.item-fill-solid) .item-highlight{border-width:calc(var(--full-highlight-height) - 1px)}:host(.ion-focused) .item-inner-highlight,:host(.ion-focused:not(.item-fill-outline)) .item-highlight,:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus:not(.item-fill-outline)) .item-highlight{border-top:none;border-right:none;border-left:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=helper]){display:none}::slotted([slot=error]){display:none;color:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=error]){display:block}:host(:not(.item-label)) ::slotted(ion-select.legacy-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select.legacy-select),:host(.item-label-floating) ::slotted(ion-select.legacy-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select.legacy-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted([slot=helper]),::slotted([slot=error]),.item-counter{padding-top:5px;font-size:12px;z-index:1}.item-counter{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}@media (prefers-reduced-motion: reduce){.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}}:host{--min-height:44px;--transition:background-color 200ms linear, opacity 200ms linear;--padding-start:16px;--inner-padding-end:16px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:var(--ion-text-color, #000);--background-focused:var(--ion-text-color, #000);--background-hover:currentColor;--background-activated-opacity:.12;--background-focused-opacity:.15;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--color:var(--ion-item-color, var(--ion-text-color, #000));--highlight-height:0px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--bottom-padding-start:0px;font-size:16px}:host(.ion-activated){--transition:none}:host(.ion-color.ion-focused) .item-native::after{background:#000;opacity:0.15}:host(.ion-color.ion-activated) .item-native::after{background:#000;opacity:0.12}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0px;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0px;--show-inset-highlight:0}.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus) .item-highlight{border-top:none;border-right:none;border-left:none}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:2px;margin-bottom:2px}::slotted(ion-icon[slot=start]),::slotted(ion-icon[slot=end]){margin-top:7px;margin-bottom:7px}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:0px;--padding-bottom:0px;--padding-start:.5em;--padding-end:.5em;height:24px;font-size:13px}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){--size:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px;margin-bottom:8px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){-webkit-margin-start:0px;margin-inline-start:0px}::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:10px;margin-bottom:10px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:68px}:host(.item-label-stacked) ::slotted(ion-select.legacy-select),:host(.item-label-floating) ::slotted(ion-select.legacy-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0px}:host(.item-label-fixed) ::slotted(ion-select.legacy-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:0}',
  yP =
    ':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native,:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.item-bottom{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--inner-padding-end);padding-inline-end:var(--inner-padding-end);padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.item-detail-icon{-webkit-margin-start:calc(var(--inner-padding-end) / 2);margin-inline-start:calc(var(--inner-padding-end) / 2);-webkit-margin-end:-6px;margin-inline-end:-6px;color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){-ms-flex:1;flex:1}:host(.item-input){-ms-flex-align:center;align-items:center}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;top:0;bottom:0;border-radius:inherit;position:absolute;width:100%;height:100%;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:transform 200ms, border-bottom-width 200ms;transition:transform 200ms, border-bottom-width 200ms, -webkit-transform 200ms;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.ion-focused) .item-highlight,:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-highlight,:host(.item-has-focus) .item-inner-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.ion-focused) .item-highlight,:host(.item-has-focus) .item-highlight{border-width:var(--full-highlight-height);opacity:var(--show-full-highlight)}:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-inner-highlight{border-bottom-width:var(--inset-highlight-height);opacity:var(--show-inset-highlight)}:host(.ion-focused.item-fill-solid) .item-highlight,:host(.item-has-focus.item-fill-solid) .item-highlight{border-width:calc(var(--full-highlight-height) - 1px)}:host(.ion-focused) .item-inner-highlight,:host(.ion-focused:not(.item-fill-outline)) .item-highlight,:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus:not(.item-fill-outline)) .item-highlight{border-top:none;border-right:none;border-left:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=helper]){display:none}::slotted([slot=error]){display:none;color:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=error]){display:block}:host(:not(.item-label)) ::slotted(ion-select.legacy-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select.legacy-select),:host(.item-label-floating) ::slotted(ion-select.legacy-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select.legacy-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted([slot=helper]),::slotted([slot=error]),.item-counter{padding-top:5px;font-size:12px;z-index:1}.item-counter{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}@media (prefers-reduced-motion: reduce){.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}}:host{--min-height:48px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--color:var(--ion-item-color, var(--ion-text-color, #000));--transition:opacity 15ms linear, background-color 15ms linear;--padding-start:16px;--inner-padding-end:16px;--inner-border-width:0 0 1px 0;--highlight-height:1px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);font-size:16px;font-weight:normal;text-transform:none}:host(.item-fill-outline){--highlight-height:2px}:host(.item-fill-none.item-interactive.ion-focus) .item-highlight,:host(.item-fill-none.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-none.item-interactive.ion-touched.ion-invalid) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-width:0 0 var(--full-highlight-height) 0;border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-none.item-interactive.ion-focus) .item-native,:host(.item-fill-none.item-interactive.item-has-focus) .item-native,:host(.item-fill-none.item-interactive.ion-touched.ion-invalid) .item-native{border-bottom-color:var(--highlight-background)}:host(.item-fill-outline.item-interactive.ion-focus) .item-highlight,:host(.item-fill-outline.item-interactive.item-has-focus) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1)}:host(.item-fill-outline.item-interactive.ion-focus) .item-highlight,:host(.item-fill-outline.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-outline.item-interactive.ion-touched.ion-invalid) .item-highlight{border-width:var(--full-highlight-height);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-outline.item-interactive.ion-touched.ion-invalid) .item-native{border-color:var(--highlight-background)}:host(.item-fill-solid.item-interactive.ion-focus) .item-highlight,:host(.item-fill-solid.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-solid.item-interactive.ion-touched.ion-invalid) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-width:0 0 var(--full-highlight-height) 0;border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-solid.item-interactive.ion-focus) .item-native,:host(.item-fill-solid.item-interactive.item-has-focus) .item-native,:host(.item-fill-solid.item-interactive.ion-touched.ion-invalid) .item-native{border-bottom-color:var(--highlight-background)}:host(.ion-color.ion-activated) .item-native::after{background:transparent}:host(.item-has-focus) .item-native{caret-color:var(--highlight-background)}:host(.item-interactive){--border-width:0 0 1px 0;--inner-border-width:0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-full){--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}:host(.item-fill-outline) .item-highlight{--position-offset:calc(-1 * var(--border-width));top:var(--position-offset);width:calc(100% + 2 * var(--border-width));height:calc(100% + 2 * var(--border-width));-webkit-transition:none;transition:none}@supports (inset-inline-start: 0){:host(.item-fill-outline) .item-highlight{inset-inline-start:var(--position-offset)}}@supports not (inset-inline-start: 0){:host(.item-fill-outline) .item-highlight{left:var(--position-offset)}:host-context([dir=rtl]):host(.item-fill-outline) .item-highlight,:host-context([dir=rtl]).item-fill-outline .item-highlight{left:unset;right:unset;right:var(--position-offset)}@supports selector(:dir(rtl)){:host(.item-fill-outline) .item-highlight:dir(rtl){left:unset;right:unset;right:var(--position-offset)}}}:host(.item-fill-outline.ion-focused) .item-native,:host(.item-fill-outline.item-has-focus) .item-native{border-color:transparent}:host(.item-multi-line) ::slotted([slot=start]),:host(.item-multi-line) ::slotted([slot=end]){margin-top:16px;margin-bottom:16px;-ms-flex-item-align:start;align-self:flex-start}::slotted([slot=start]){-webkit-margin-end:32px;margin-inline-end:32px}::slotted([slot=end]){-webkit-margin-start:32px;margin-inline-start:32px}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);font-size:24px}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) ::slotted(ion-icon){color:var(--ion-color-contrast)}::slotted(ion-icon[slot]){margin-top:12px;margin-bottom:12px}::slotted(ion-icon[slot=start]){-webkit-margin-end:32px;margin-inline-end:32px}::slotted(ion-icon[slot=end]){-webkit-margin-start:16px;margin-inline-start:16px}:host(.item-fill-solid) ::slotted(ion-icon[slot=start]),:host(.item-fill-outline) ::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}::slotted(ion-note){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-ms-flex-item-align:start;align-self:flex-start;font-size:11px}::slotted(ion-note[slot]:not([slot=helper]):not([slot=error])){padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}::slotted(ion-note[slot=start]){-webkit-padding-end:16px;padding-inline-end:16px}::slotted(ion-note[slot=end]){-webkit-padding-start:16px;padding-inline-start:16px}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){--size:56px}::slotted(ion-avatar),::slotted(ion-thumbnail){margin-top:8px;margin-bottom:8px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){-webkit-margin-end:16px;margin-inline-end:16px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){-webkit-margin-start:16px;margin-inline-start:16px}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:10px;margin-bottom:10px}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-label-fixed) ::slotted(ion-select.legacy-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:8px}:host(.item-toggle) ::slotted(ion-label),:host(.item-radio) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;height:25px;font-size:12px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:55px}:host(.item-label-stacked) ::slotted(ion-select.legacy-select),:host(.item-label-floating) ::slotted(ion-select.legacy-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(.ion-focused:not(.ion-color)) ::slotted(.label-stacked),:host(.ion-focused:not(.ion-color)) ::slotted(.label-floating),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating){color:var(--ion-color-primary, #3880ff)}:host(.ion-color){--highlight-color-focused:var(--ion-color-contrast)}:host(.item-label-color){--highlight-color-focused:var(--ion-color-base)}:host(.item-fill-solid.ion-color),:host(.item-fill-outline.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.item-fill-solid){--background:var(--ion-color-step-50, #f2f2f2);--background-hover:var(--ion-color-step-100, #e6e6e6);--background-focused:var(--ion-color-step-150, #d9d9d9);--border-width:0 0 1px 0;--inner-border-width:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.item-fill-solid),:host-context([dir=rtl]).item-fill-solid{border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.item-fill-solid):dir(rtl){border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.item-fill-solid) .item-native{--border-color:var(--ion-color-step-500, gray)}:host(.item-fill-solid.ion-focused) .item-native,:host(.item-fill-solid.item-has-focus) .item-native{--background:var(--background-focused)}:host(.item-fill-solid.item-shape-round){border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.item-fill-solid.item-shape-round),:host-context([dir=rtl]).item-fill-solid.item-shape-round{border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.item-fill-solid.item-shape-round):dir(rtl){border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}}@media (any-hover: hover){:host(.item-fill-solid:hover) .item-native{--background:var(--background-hover);--border-color:var(--ion-color-step-750, #404040)}}:host(.item-fill-outline){--ripple-color:transparent;--background-focused:transparent;--background-hover:transparent;--border-color:var(--ion-color-step-500, gray);--border-width:1px;border:none;overflow:visible}:host(.item-fill-outline) .item-native{--native-padding-left:16px;border-radius:4px}:host(.item-fill-outline.item-shape-round) .item-native{--inner-padding-start:16px;border-radius:28px}:host(.item-fill-outline.item-shape-round) .item-bottom{-webkit-padding-start:32px;padding-inline-start:32px}:host(.item-fill-outline.item-label-floating.ion-focused) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.ion-focused) .item-native ::slotted(ion-textarea:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-focus) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-focus) .item-native ::slotted(ion-textarea:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-value) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-value) .item-native ::slotted(ion-textarea:not(:first-child)){-webkit-transform:translateY(-14px);transform:translateY(-14px)}@media (any-hover: hover){:host(.item-fill-outline:hover) .item-native{--border-color:var(--ion-color-step-750, #404040)}}.item-counter{letter-spacing:0.0333333333em}',
  wP = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.labelColorStyles = {}),
          (this.itemStyles = new Map()),
          (this.inheritedAriaAttributes = {}),
          (this.multipleInputs = !1),
          (this.focusable = !0),
          (this.color = void 0),
          (this.button = !1),
          (this.detail = void 0),
          (this.detailIcon = Rm),
          (this.disabled = !1),
          (this.download = void 0),
          (this.fill = void 0),
          (this.shape = void 0),
          (this.href = void 0),
          (this.rel = void 0),
          (this.lines = void 0),
          (this.counter = !1),
          (this.routerAnimation = void 0),
          (this.routerDirection = "forward"),
          (this.target = void 0),
          (this.type = "button"),
          (this.counterFormatter = void 0),
          (this.counterString = void 0);
      }
      counterFormatterChanged() {
        this.updateCounterOutput(this.getFirstInput());
      }
      handleIonInput(t) {
        this.counter &&
          t.target === this.getFirstInput() &&
          this.updateCounterOutput(t.target);
      }
      labelColorChanged(t) {
        const { color: n } = this;
        n === void 0 && (this.labelColorStyles = t.detail);
      }
      itemStyle(t) {
        t.stopPropagation();
        const n = t.target.tagName,
          i = t.detail,
          r = {},
          o = this.itemStyles.get(n) || {};
        let s = !1;
        Object.keys(i).forEach((a) => {
          if (i[a]) {
            const l = `item-${a}`;
            o[l] || (s = !0), (r[l] = !0);
          }
        }),
          !s && Object.keys(r).length !== Object.keys(o).length && (s = !0),
          s && (this.itemStyles.set(n, r), ka(this));
      }
      connectedCallback() {
        this.counter && this.updateCounterOutput(this.getFirstInput()),
          this.hasStartEl();
      }
      componentWillLoad() {
        this.inheritedAriaAttributes = Kf(this.el, ["aria-label"]);
      }
      componentDidLoad() {
        const {
          el: t,
          counter: n,
          counterFormatter: i,
          fill: r,
          shape: o,
        } = this;
        t.querySelector('[slot="helper"]') !== null &&
          An(
            'The "helper" slot has been deprecated in favor of using the "helperText" property on ion-input or ion-textarea.',
            t
          ),
          t.querySelector('[slot="error"]') !== null &&
            An(
              'The "error" slot has been deprecated in favor of using the "errorText" property on ion-input or ion-textarea.',
              t
            ),
          n === !0 &&
            An(
              'The "counter" property has been deprecated in favor of using the "counter" property on ion-input or ion-textarea.',
              t
            ),
          i !== void 0 &&
            An(
              'The "counterFormatter" property has been deprecated in favor of using the "counterFormatter" property on ion-input or ion-textarea.',
              t
            ),
          r !== void 0 &&
            An(
              'The "fill" property has been deprecated in favor of using the "fill" property on ion-input or ion-textarea.',
              t
            ),
          o !== void 0 &&
            An(
              'The "shape" property has been deprecated in favor of using the "shape" property on ion-input or ion-textarea.',
              t
            ),
          it(() => {
            this.setMultipleInputs(), (this.focusable = this.isFocusable());
          });
      }
      setMultipleInputs() {
        const t = this.el.querySelectorAll(
            "ion-checkbox, ion-datetime, ion-select, ion-radio"
          ),
          n = this.el.querySelectorAll(
            "ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle"
          ),
          i = this.el.querySelectorAll("ion-anchor, ion-button, a, button");
        this.multipleInputs =
          t.length + n.length > 1 ||
          t.length + i.length > 1 ||
          (t.length > 0 && this.isClickable());
      }
      hasCover() {
        return (
          this.el.querySelectorAll(
            "ion-checkbox, ion-datetime, ion-select, ion-radio"
          ).length === 1 && !this.multipleInputs
        );
      }
      isClickable() {
        return this.href !== void 0 || this.button;
      }
      canActivate() {
        return this.isClickable() || this.hasCover();
      }
      isFocusable() {
        const t = this.el.querySelector(".ion-focusable");
        return this.canActivate() || t !== null;
      }
      getFirstInput() {
        return this.el.querySelectorAll("ion-input, ion-textarea")[0];
      }
      updateCounterOutput(t) {
        var n, i;
        const {
          counter: r,
          counterFormatter: o,
          defaultCounterFormatter: s,
        } = this;
        if (
          r &&
          !this.multipleInputs &&
          (t == null ? void 0 : t.maxlength) !== void 0
        ) {
          const a =
            (i =
              (n = t == null ? void 0 : t.value) === null || n === void 0
                ? void 0
                : n.toString().length) !== null && i !== void 0
              ? i
              : 0;
          if (o === void 0) this.counterString = s(a, t.maxlength);
          else
            try {
              this.counterString = o(a, t.maxlength);
            } catch (l) {
              f$("Exception in provided `counterFormatter`.", l),
                (this.counterString = s(a, t.maxlength));
            }
        }
      }
      defaultCounterFormatter(t, n) {
        return `${t} / ${n}`;
      }
      hasStartEl() {
        this.el.querySelector('[slot="start"]') !== null &&
          this.el.classList.add("item-has-start-slot");
      }
      render() {
        const {
            counterString: t,
            detail: n,
            detailIcon: i,
            download: r,
            fill: o,
            labelColorStyles: s,
            lines: a,
            disabled: l,
            href: c,
            rel: u,
            shape: d,
            target: f,
            routerAnimation: h,
            routerDirection: m,
            inheritedAriaAttributes: b,
          } = this,
          k = {},
          g = Q(this),
          p = this.isClickable(),
          v = this.canActivate(),
          y = p ? (c === void 0 ? "button" : "a") : "div",
          E =
            y === "button"
              ? { type: this.type }
              : { download: r, href: c, rel: u, target: f },
          T = p
            ? {
                onClick: (I) => {
                  wy(c, I, m, h);
                },
              }
            : {},
          w = n !== void 0 ? n : g === "ios" && p;
        this.itemStyles.forEach((I) => {
          Object.assign(k, I);
        });
        const P = l || k["item-interactive-disabled"] ? "true" : null,
          F = o || "none",
          _ = ki("ion-list", this.el);
        return A(
          Te,
          {
            "aria-disabled": P,
            class: Object.assign(
              Object.assign(Object.assign({}, k), s),
              an(this.color, {
                item: !0,
                [g]: !0,
                "item-lines-default": a === void 0,
                [`item-lines-${a}`]: a !== void 0,
                [`item-fill-${F}`]: !0,
                [`item-shape-${d}`]: d !== void 0,
                "item-disabled": l,
                "in-list": _,
                "item-multiple-inputs": this.multipleInputs,
                "ion-activatable": v,
                "ion-focusable": this.focusable,
                "item-rtl": document.dir === "rtl",
              })
            ),
            role: _ ? "listitem" : null,
          },
          A(
            y,
            Object.assign(
              {},
              E,
              b,
              { class: "item-native", part: "native", disabled: l },
              T
            ),
            A("slot", { name: "start" }),
            A(
              "div",
              { class: "item-inner" },
              A("div", { class: "input-wrapper" }, A("slot", null)),
              A("slot", { name: "end" }),
              w &&
                A("ion-icon", {
                  icon: i,
                  lazy: !1,
                  class: "item-detail-icon",
                  part: "detail-icon",
                  "aria-hidden": "true",
                  "flip-rtl": i === Rm,
                }),
              A("div", { class: "item-inner-highlight" })
            ),
            v && g === "md" && A("ion-ripple-effect", null),
            A("div", { class: "item-highlight" })
          ),
          A(
            "div",
            { class: "item-bottom" },
            A("slot", { name: "error" }),
            A("slot", { name: "helper" }),
            t && A("ion-note", { class: "item-counter" }, t)
          )
        );
      }
      static get delegatesFocus() {
        return !0;
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { counterFormatter: ["counterFormatterChanged"] };
      }
      static get style() {
        return { ios: bP, md: yP };
      }
    },
    [
      49,
      "ion-item",
      {
        color: [513],
        button: [4],
        detail: [4],
        detailIcon: [1, "detail-icon"],
        disabled: [4],
        download: [1],
        fill: [1],
        shape: [1],
        href: [1],
        rel: [1],
        lines: [1],
        counter: [4],
        routerAnimation: [16],
        routerDirection: [1, "router-direction"],
        target: [1],
        type: [1],
        counterFormatter: [16],
        multipleInputs: [32],
        focusable: [32],
        counterString: [32],
      },
      [
        [0, "ionInput", "handleIonInput"],
        [0, "ionColor", "labelColorChanged"],
        [0, "ionStyle", "itemStyle"],
      ],
    ]
  );
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const xP =
    ".item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{font-size:14px;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:14px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate(0, 29px);transform:translate(0, 29px);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.label-floating.sc-ion-label-ios-h:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.item-textarea.label-floating.sc-ion-label-ios-h,.item-textarea .label-floating.sc-ion-label-ios-h{-webkit-transform:translate(0, 28px);transform:translate(0, 28px)}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-placeholder.sc-ion-label-ios-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{-webkit-transform:scale(0.82);transform:scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:22px;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:17px;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4)}.sc-ion-label-ios-h.in-item-color.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}",
  kP =
    '.item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:top left;transform-origin:top left}.label-stacked.label-rtl.sc-ion-label-md-h,.label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform-origin:top right;transform-origin:top right}.label-stacked.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.label-floating.sc-ion-label-md-h{-webkit-transform:translateY(96%);transform:translateY(96%);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.ion-focused.label-floating.sc-ion-label-md-h,.ion-focused .label-floating.sc-ion-label-md-h,.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(-6px) scale(0.75);transform:translateY(-6px) scale(0.75);position:relative;max-width:-webkit-min-content;max-width:-moz-min-content;max-width:min-content;background-color:var(--ion-item-background, var(--ion-background-color, #fff));overflow:visible;z-index:3}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{position:absolute;width:4px;height:100%;background-color:var(--ion-item-background, var(--ion-background-color, #fff));content:""}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before{left:calc(-1 * 4px)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{right:calc(-1 * 4px)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.sc-ion-label-md-h{-webkit-transform:translateX(-32px) translateY(-6px) scale(0.75);transform:translateX(-32px) translateY(-6px) scale(0.75)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating.label-rtl,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75);transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75)}.ion-focused.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #3880ff)}.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.item-fill-solid.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-base)}.ion-invalid.ion-touched.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--highlight-color-invalid)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:20px;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, #666666)}.sc-ion-label-md-h.in-item-color.sc-ion-label-md-s>p{color:inherit}',
  EP = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          (this.ionColor = fe(this, "ionColor", 7)),
          (this.ionStyle = fe(this, "ionStyle", 7)),
          (this.inRange = !1),
          (this.color = void 0),
          (this.position = void 0),
          (this.noAnimate = !1);
      }
      componentWillLoad() {
        (this.inRange = !!this.el.closest("ion-range")),
          (this.noAnimate = this.position === "floating"),
          this.emitStyle(),
          this.emitColor();
      }
      componentDidLoad() {
        this.noAnimate &&
          setTimeout(() => {
            this.noAnimate = !1;
          }, 1e3);
      }
      colorChanged() {
        this.emitColor();
      }
      positionChanged() {
        this.emitStyle();
      }
      emitColor() {
        const { color: t } = this;
        this.ionColor.emit({
          "item-label-color": t !== void 0,
          [`ion-color-${t}`]: t !== void 0,
        });
      }
      emitStyle() {
        const { inRange: t, position: n } = this;
        t || this.ionStyle.emit({ label: !0, [`label-${n}`]: n !== void 0 });
      }
      render() {
        const t = this.position,
          n = Q(this);
        return A(Te, {
          class: an(this.color, {
            [n]: !0,
            "in-item-color": ki("ion-item.ion-color", this.el),
            [`label-${t}`]: t !== void 0,
            ["label-no-animate"]: this.noAnimate,
            "label-rtl": document.dir === "rtl",
          }),
        });
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { color: ["colorChanged"], position: ["positionChanged"] };
      }
      static get style() {
        return { ios: xP, md: kP };
      }
    },
    [34, "ion-label", { color: [513], position: [1], noAnimate: [32] }]
  );
function SP() {
  if (typeof customElements > "u") return;
  ["ion-label"].forEach((t) => {
    switch (t) {
      case "ion-label":
        customElements.get(t) || customElements.define(t, EP);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const xy = {
    getEngine() {
      var e;
      const t = window;
      return (
        t.TapticEngine ||
        (((e = t.Capacitor) === null || e === void 0
          ? void 0
          : e.isPluginAvailable("Haptics")) &&
          t.Capacitor.Plugins.Haptics)
      );
    },
    available() {
      var e;
      const t = window;
      return this.getEngine()
        ? ((e = t.Capacitor) === null || e === void 0
            ? void 0
            : e.getPlatform()) === "web"
          ? typeof navigator < "u" && navigator.vibrate !== void 0
          : !0
        : !1;
    },
    isCordova() {
      return !!window.TapticEngine;
    },
    isCapacitor() {
      return !!window.Capacitor;
    },
    impact(e) {
      const t = this.getEngine();
      if (!t) return;
      const n = this.isCapacitor() ? e.style.toUpperCase() : e.style;
      t.impact({ style: n });
    },
    notification(e) {
      const t = this.getEngine();
      if (!t) return;
      const n = this.isCapacitor() ? e.style.toUpperCase() : e.style;
      t.notification({ style: n });
    },
    selection() {
      this.impact({ style: "light" });
    },
    selectionStart() {
      const e = this.getEngine();
      e &&
        (this.isCapacitor() ? e.selectionStart() : e.gestureSelectionStart());
    },
    selectionChanged() {
      const e = this.getEngine();
      e &&
        (this.isCapacitor()
          ? e.selectionChanged()
          : e.gestureSelectionChanged());
    },
    selectionEnd() {
      const e = this.getEngine();
      e && (this.isCapacitor() ? e.selectionEnd() : e.gestureSelectionEnd());
    },
  },
  CP = () => xy.available(),
  $P = (e) => {
    CP() && xy.impact(e);
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const PP = "ION-CONTENT",
  th = "ion-content",
  ho = ".ion-content-scroll-host",
  ky = `${th}, ${ho}`,
  nh = (e) => e.tagName === PP,
  dd = async (e) =>
    nh(e) ? (await new Promise((t) => Gn(e, t)), e.getScrollElement()) : e,
  Lm = (e) => {
    const t = e.querySelector(ho);
    return t || e.querySelector(ky);
  },
  d_ = (e) => e.closest(ky),
  f_ = (e, t) =>
    nh(e)
      ? e.scrollToTop(t)
      : Promise.resolve(
          e.scrollTo({ top: 0, left: 0, behavior: t > 0 ? "smooth" : "auto" })
        ),
  h_ = (e, t, n, i) =>
    nh(e)
      ? e.scrollByPoint(t, n, i)
      : Promise.resolve(
          e.scrollBy({ top: n, left: t, behavior: i > 0 ? "smooth" : "auto" })
        ),
  fd = (e) => h$(e, th);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ var hd;
(function (e) {
  (e.Body = "body"),
    (e.Ionic = "ionic"),
    (e.Native = "native"),
    (e.None = "none");
})(hd || (hd = {}));
const TP = {
  getEngine() {
    var e;
    return (
      ((e = Ce == null ? void 0 : Ce.Capacitor) === null || e === void 0
        ? void 0
        : e.isPluginAvailable("Keyboard")) &&
      (Ce == null ? void 0 : Ce.Capacitor.Plugins.Keyboard)
    );
  },
  getResizeMode() {
    const e = this.getEngine();
    return e != null && e.getResizeMode
      ? e.getResizeMode().catch((t) => {
          if (t.code !== "UNIMPLEMENTED") throw t;
        })
      : Promise.resolve(void 0);
  },
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Ey = (e) => {
    if (Cc === void 0 || e === hd.None || e === void 0) return null;
    const t = Cc.querySelector("ion-app");
    return t != null ? t : Cc.body;
  },
  _m = (e) => {
    const t = Ey(e);
    return t === null ? 0 : t.clientHeight;
  },
  AP = async (e) => {
    let t, n, i, r;
    const o = async () => {
        const u = await TP.getResizeMode(),
          d = u === void 0 ? void 0 : u.mode;
        (t = () => {
          r === void 0 && (r = _m(d)), (i = !0), s(i, d);
        }),
          (n = () => {
            (i = !1), s(i, d);
          }),
          Ce == null || Ce.addEventListener("keyboardWillShow", t),
          Ce == null || Ce.addEventListener("keyboardWillHide", n);
      },
      s = (u, d) => {
        e && e(u, a(d));
      },
      a = (u) => {
        if (r === 0 || r === _m(u)) return;
        const d = Ey(u);
        if (d !== null)
          return new Promise((f) => {
            const h = () => {
                d.clientHeight === r && (m.disconnect(), f());
              },
              m = new ResizeObserver(h);
            m.observe(d);
          });
      },
      l = () => {
        Ce == null || Ce.removeEventListener("keyboardWillShow", t),
          Ce == null || Ce.removeEventListener("keyboardWillHide", n),
          (t = n = void 0);
      },
      c = () => i;
    return await o(), { init: o, destroy: l, isKeyboardVisible: c };
  };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const OP = "all 0.2s ease-in-out",
  Mm = (e) => {
    const t = document.querySelector(`${e}.ion-cloned-element`);
    if (t !== null) return t;
    const n = document.createElement(e);
    return (
      n.classList.add("ion-cloned-element"),
      n.style.setProperty("display", "none"),
      document.body.appendChild(n),
      n
    );
  },
  Bm = (e) => {
    if (!e) return;
    const t = e.querySelectorAll("ion-toolbar");
    return {
      el: e,
      toolbars: Array.from(t).map((n) => {
        const i = n.querySelector("ion-title");
        return {
          el: n,
          background: n.shadowRoot.querySelector(".toolbar-background"),
          ionTitleEl: i,
          innerTitleEl: i ? i.shadowRoot.querySelector(".toolbar-title") : null,
          ionButtonsEl: Array.from(n.querySelectorAll("ion-buttons")),
        };
      }),
    };
  },
  RP = (e, t, n) => {
    yi(() => {
      const i = e.scrollTop,
        r = ur(1, 1 + -i / 500, 1.1);
      n.querySelector("ion-refresher.refresher-native") === null &&
        _e(() => {
          _P(t.toolbars, r);
        });
    });
  },
  ih = (e, t) => {
    e.collapse !== "fade" &&
      (t === void 0
        ? e.style.removeProperty("--opacity-scale")
        : e.style.setProperty("--opacity-scale", t.toString()));
  },
  IP = (e, t, n) => {
    if (!e[0].isIntersecting) return;
    const i =
      e[0].intersectionRatio > 0.9 || n <= 0
        ? 0
        : ((1 - e[0].intersectionRatio) * 100) / 75;
    ih(t.el, i === 1 ? void 0 : i);
  },
  LP = (e, t, n, i) => {
    _e(() => {
      const r = i.scrollTop;
      IP(e, t, r);
      const o = e[0],
        s = o.intersectionRect,
        a = s.width * s.height,
        l = o.rootBounds.width * o.rootBounds.height,
        c = a === 0 && l === 0,
        u = Math.abs(s.left - o.boundingClientRect.left),
        d = Math.abs(s.right - o.boundingClientRect.right),
        f = a > 0 && (u >= 5 || d >= 5);
      c ||
        f ||
        (o.isIntersecting
          ? (Jr(t, !1), Jr(n))
          : ((s.x === 0 && s.y === 0) || (s.width !== 0 && s.height !== 0)) &&
            r > 0 &&
            (Jr(t), Jr(n, !1), ih(t.el)));
    });
  },
  Jr = (e, t = !0) => {
    const n = e.el;
    t
      ? (n.classList.remove("header-collapse-condense-inactive"),
        n.removeAttribute("aria-hidden"))
      : (n.classList.add("header-collapse-condense-inactive"),
        n.setAttribute("aria-hidden", "true"));
  },
  _P = (e = [], t = 1, n = !1) => {
    e.forEach((i) => {
      const r = i.ionTitleEl,
        o = i.innerTitleEl;
      !r ||
        r.size !== "large" ||
        ((o.style.transition = n ? OP : ""),
        (o.style.transform = `scale3d(${t}, ${t}, 1)`));
    });
  },
  Dm = (e, t, n) => {
    yi(() => {
      const i = e.scrollTop,
        r = t.clientHeight,
        o = n ? n.clientHeight : 0;
      if (n !== null && i < o) {
        t.style.setProperty("--opacity-scale", "0"),
          e.style.setProperty("clip-path", `inset(${r}px 0px 0px 0px)`);
        return;
      }
      const s = i - o,
        l = ur(0, s / 10, 1);
      _e(() => {
        e.style.removeProperty("clip-path"),
          t.style.setProperty("--opacity-scale", l.toString());
      });
    });
  },
  MP =
    "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}",
  BP =
    "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}",
  DP = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          (this.inheritedAttributes = {}),
          (this.setupFadeHeader = async (t, n) => {
            const i = (this.scrollEl = await dd(t));
            (this.contentScrollCallback = () => {
              Dm(this.scrollEl, this.el, n);
            }),
              i.addEventListener("scroll", this.contentScrollCallback),
              Dm(this.scrollEl, this.el, n);
          }),
          (this.collapse = void 0),
          (this.translucent = !1);
      }
      componentWillLoad() {
        this.inheritedAttributes = Q0(this.el);
      }
      componentDidLoad() {
        this.checkCollapsibleHeader();
      }
      componentDidUpdate() {
        this.checkCollapsibleHeader();
      }
      disconnectedCallback() {
        this.destroyCollapsibleHeader();
      }
      async checkCollapsibleHeader() {
        if (Q(this) !== "ios") return;
        const { collapse: n } = this,
          i = n === "condense",
          r = n === "fade";
        if ((this.destroyCollapsibleHeader(), i)) {
          const o = this.el.closest("ion-app,ion-page,.ion-page,page-inner"),
            s = o ? Lm(o) : null;
          _e(() => {
            const a = Mm("ion-title");
            (a.size = "large"), Mm("ion-back-button");
          }),
            await this.setupCondenseHeader(s, o);
        } else if (r) {
          const o = this.el.closest("ion-app,ion-page,.ion-page,page-inner"),
            s = o ? Lm(o) : null;
          if (!s) {
            fd(this.el);
            return;
          }
          const a = s.querySelector('ion-header[collapse="condense"]');
          await this.setupFadeHeader(s, a);
        }
      }
      destroyCollapsibleHeader() {
        this.intersectionObserver &&
          (this.intersectionObserver.disconnect(),
          (this.intersectionObserver = void 0)),
          this.scrollEl &&
            this.contentScrollCallback &&
            (this.scrollEl.removeEventListener(
              "scroll",
              this.contentScrollCallback
            ),
            (this.contentScrollCallback = void 0)),
          this.collapsibleMainHeader &&
            (this.collapsibleMainHeader.classList.remove(
              "header-collapse-main"
            ),
            (this.collapsibleMainHeader = void 0));
      }
      async setupCondenseHeader(t, n) {
        if (!t || !n) {
          fd(this.el);
          return;
        }
        if (typeof IntersectionObserver > "u") return;
        this.scrollEl = await dd(t);
        const i = n.querySelectorAll("ion-header");
        if (
          ((this.collapsibleMainHeader = Array.from(i).find(
            (a) => a.collapse !== "condense"
          )),
          !this.collapsibleMainHeader)
        )
          return;
        const r = Bm(this.collapsibleMainHeader),
          o = Bm(this.el);
        if (!r || !o) return;
        Jr(r, !1), ih(r.el, 0);
        const s = (a) => {
          LP(a, r, o, this.scrollEl);
        };
        (this.intersectionObserver = new IntersectionObserver(s, {
          root: t,
          threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        })),
          this.intersectionObserver.observe(
            o.toolbars[o.toolbars.length - 1].el
          ),
          (this.contentScrollCallback = () => {
            RP(this.scrollEl, o, t);
          }),
          this.scrollEl.addEventListener("scroll", this.contentScrollCallback),
          _e(() => {
            this.collapsibleMainHeader !== void 0 &&
              this.collapsibleMainHeader.classList.add("header-collapse-main");
          });
      }
      render() {
        const { translucent: t, inheritedAttributes: n } = this,
          i = Q(this),
          r = this.collapse || "none",
          o = ki("ion-menu", this.el) ? "none" : "banner";
        return A(
          Te,
          Object.assign(
            {
              role: o,
              class: {
                [i]: !0,
                [`header-${i}`]: !0,
                ["header-translucent"]: this.translucent,
                [`header-collapse-${r}`]: !0,
                [`header-translucent-${i}`]: this.translucent,
              },
            },
            n
          ),
          i === "ios" && t && A("div", { class: "header-background" }),
          A("slot", null)
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return { ios: MP, md: BP };
      }
    },
    [36, "ion-header", { collapse: [1], translucent: [4] }]
  );
function jP() {
  if (typeof customElements > "u") return;
  ["ion-header"].forEach((t) => {
    switch (t) {
      case "ion-header":
        customElements.get(t) || customElements.define(t, DP);
        break;
    }
  });
}
const zP = jP;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const FP = {
    bubbles: {
      dur: 1e3,
      circles: 9,
      fn: (e, t, n) => {
        const i = `${(e * t) / n - e}ms`,
          r = (2 * Math.PI * t) / n;
        return {
          r: 5,
          style: {
            top: `${32 * Math.sin(r)}%`,
            left: `${32 * Math.cos(r)}%`,
            "animation-delay": i,
          },
        };
      },
    },
    circles: {
      dur: 1e3,
      circles: 8,
      fn: (e, t, n) => {
        const i = t / n,
          r = `${e * i - e}ms`,
          o = 2 * Math.PI * i;
        return {
          r: 5,
          style: {
            top: `${32 * Math.sin(o)}%`,
            left: `${32 * Math.cos(o)}%`,
            "animation-delay": r,
          },
        };
      },
    },
    circular: {
      dur: 1400,
      elmDuration: !0,
      circles: 1,
      fn: () => ({
        r: 20,
        cx: 48,
        cy: 48,
        fill: "none",
        viewBox: "24 24 48 48",
        transform: "translate(0,0)",
        style: {},
      }),
    },
    crescent: { dur: 750, circles: 1, fn: () => ({ r: 26, style: {} }) },
    dots: {
      dur: 750,
      circles: 3,
      fn: (e, t) => {
        const n = -(110 * t) + "ms";
        return {
          r: 6,
          style: { left: `${32 - 32 * t}%`, "animation-delay": n },
        };
      },
    },
    lines: {
      dur: 1e3,
      lines: 8,
      fn: (e, t, n) => {
        const i = `rotate(${(360 / n) * t + (t < n / 2 ? 180 : -180)}deg)`,
          r = `${(e * t) / n - e}ms`;
        return {
          y1: 14,
          y2: 26,
          style: { transform: i, "animation-delay": r },
        };
      },
    },
    "lines-small": {
      dur: 1e3,
      lines: 8,
      fn: (e, t, n) => {
        const i = `rotate(${(360 / n) * t + (t < n / 2 ? 180 : -180)}deg)`,
          r = `${(e * t) / n - e}ms`;
        return {
          y1: 12,
          y2: 20,
          style: { transform: i, "animation-delay": r },
        };
      },
    },
    "lines-sharp": {
      dur: 1e3,
      lines: 12,
      fn: (e, t, n) => {
        const i = `rotate(${30 * t + (t < 6 ? 180 : -180)}deg)`,
          r = `${(e * t) / n - e}ms`;
        return {
          y1: 17,
          y2: 29,
          style: { transform: i, "animation-delay": r },
        };
      },
    },
    "lines-sharp-small": {
      dur: 1e3,
      lines: 12,
      fn: (e, t, n) => {
        const i = `rotate(${30 * t + (t < 6 ? 180 : -180)}deg)`,
          r = `${(e * t) / n - e}ms`;
        return {
          y1: 12,
          y2: 20,
          style: { transform: i, "animation-delay": r },
        };
      },
    },
  },
  pd = FP,
  NP =
    ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}",
  HP = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.color = void 0),
          (this.duration = void 0),
          (this.name = void 0),
          (this.paused = !1);
      }
      getName() {
        const t = this.name || Y.get("spinner"),
          n = Q(this);
        return t || (n === "ios" ? "lines" : "circular");
      }
      render() {
        var t;
        const n = this,
          i = Q(n),
          r = n.getName(),
          o = (t = pd[r]) !== null && t !== void 0 ? t : pd.lines,
          s =
            typeof n.duration == "number" && n.duration > 10
              ? n.duration
              : o.dur,
          a = [];
        if (o.circles !== void 0)
          for (let l = 0; l < o.circles; l++) a.push(UP(o, s, l, o.circles));
        else if (o.lines !== void 0)
          for (let l = 0; l < o.lines; l++) a.push(VP(o, s, l, o.lines));
        return A(
          Te,
          {
            class: an(n.color, {
              [i]: !0,
              [`spinner-${r}`]: !0,
              "spinner-paused": n.paused || Y.getBoolean("_testing"),
            }),
            role: "progressbar",
            style: o.elmDuration ? { animationDuration: s + "ms" } : {},
          },
          a
        );
      }
      static get style() {
        return NP;
      }
    },
    [1, "ion-spinner", { color: [513], duration: [2], name: [1], paused: [4] }]
  ),
  UP = (e, t, n, i) => {
    const r = e.fn(t, n, i);
    return (
      (r.style["animation-duration"] = t + "ms"),
      A(
        "svg",
        { viewBox: r.viewBox || "0 0 64 64", style: r.style },
        A("circle", {
          transform: r.transform || "translate(32,32)",
          cx: r.cx,
          cy: r.cy,
          r: r.r,
          style: e.elmDuration ? { animationDuration: t + "ms" } : {},
        })
      )
    );
  },
  VP = (e, t, n, i) => {
    const r = e.fn(t, n, i);
    return (
      (r.style["animation-duration"] = t + "ms"),
      A(
        "svg",
        { viewBox: r.viewBox || "0 0 64 64", style: r.style },
        A("line", { transform: "translate(32,32)", y1: r.y1, y2: r.y2 })
      )
    );
  };
function qP() {
  if (typeof customElements > "u") return;
  ["ion-spinner"].forEach((t) => {
    switch (t) {
      case "ion-spinner":
        customElements.get(t) || customElements.define(t, HP);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const WP = SP;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const YP =
    "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-ios{background:var(--ion-item-background, var(--ion-background-color, #fff))}.list-ios.list-inset{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px;border-radius:10px}.list-ios.list-inset ion-item:last-child{--border-width:0;--inner-border-width:0}.list-ios.list-inset+ion-list.list-inset{margin-top:0}.list-ios-lines-none .item-lines-default{--inner-border-width:0px;--border-width:0px}.list-ios-lines-full .item-lines-default{--inner-border-width:0px;--border-width:0 0 0.55px 0}.list-ios-lines-inset .item-lines-default{--inner-border-width:0 0 0.55px 0;--border-width:0px}ion-card .list-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",
  GP =
    "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;background:var(--ion-item-background, var(--ion-background-color, #fff))}@supports (inset-inline-start: 0){.list-md>.input:last-child::after{inset-inline-start:0}}@supports not (inset-inline-start: 0){.list-md>.input:last-child::after{left:0}:host-context([dir=rtl]) .list-md>.input:last-child::after{left:unset;right:unset;right:0}[dir=rtl] .list-md>.input:last-child::after{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.list-md>.input:last-child::after:dir(rtl){left:unset;right:unset;right:0}}}.list-md.list-inset{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px;border-radius:2px}.list-md.list-inset ion-item:first-child{--border-radius:2px 2px 0 0}.list-md.list-inset ion-item:last-child{--border-radius:0 0 2px, 2px;--border-width:0;--inner-border-width:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item-lines-default{--inner-border-width:0px;--border-width:0px}.list-md-lines-full .item-lines-default{--inner-border-width:0px;--border-width:0 0 1px 0}.list-md-lines-inset .item-lines-default{--inner-border-width:0 0 1px 0;--border-width:0px}ion-card .list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",
  XP = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          (this.lines = void 0),
          (this.inset = !1);
      }
      async closeSlidingItems() {
        const t = this.el.querySelector("ion-item-sliding");
        return t != null && t.closeOpened ? t.closeOpened() : !1;
      }
      render() {
        const t = Q(this),
          { lines: n, inset: i } = this;
        return A(Te, {
          role: "list",
          class: {
            [t]: !0,
            [`list-${t}`]: !0,
            "list-inset": i,
            [`list-lines-${n}`]: n !== void 0,
            [`list-${t}-lines-${n}`]: n !== void 0,
          },
        });
      }
      get el() {
        return this;
      }
      static get style() {
        return { ios: YP, md: GP };
      }
    },
    [32, "ion-list", { lines: [1], inset: [4], closeSlidingItems: [64] }]
  );
function KP() {
  if (typeof customElements > "u") return;
  ["ion-list"].forEach((t) => {
    switch (t) {
      case "ion-list":
        customElements.get(t) || customElements.define(t, XP);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const QP = KP,
  Sy = 1,
  Cy = 2,
  $a = 3;
class md {
  constructor(t, n) {
    (this.component = t), (this.params = n), (this.state = Sy);
  }
  async init(t) {
    if (((this.state = Cy), !this.element)) {
      const n = this.component;
      this.element = await hy(
        this.delegate,
        t,
        n,
        ["ion-page", "ion-page-invisible"],
        this.params
      );
    }
  }
  _destroy() {
    nt(this.state !== $a, "view state must be ATTACHED");
    const t = this.element;
    t &&
      (this.delegate
        ? this.delegate.removeViewFromDom(t.parentElement, t)
        : t.remove()),
      (this.nav = void 0),
      (this.state = $a);
  }
}
const jm = (e, t, n) => (!e || e.component !== t ? !1 : Z0(e.params, n)),
  zm = (e, t) => (e ? (e instanceof md ? e : new md(e, t)) : null),
  ZP = (e) =>
    e
      .map((t) =>
        t instanceof md
          ? t
          : "component" in t
          ? zm(
              t.component,
              t.componentProps === null ? void 0 : t.componentProps
            )
          : zm(t, void 0)
      )
      .filter((t) => t !== null),
  JP =
    ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}",
  eT = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionNavWillLoad = fe(this, "ionNavWillLoad", 7)),
          (this.ionNavWillChange = fe(this, "ionNavWillChange", 3)),
          (this.ionNavDidChange = fe(this, "ionNavDidChange", 3)),
          (this.transInstr = []),
          (this.animationEnabled = !0),
          (this.useRouter = !1),
          (this.isTransitioning = !1),
          (this.destroyed = !1),
          (this.views = []),
          (this.delegate = void 0),
          (this.swipeGesture = void 0),
          (this.animated = !0),
          (this.animation = void 0),
          (this.rootParams = void 0),
          (this.root = void 0);
      }
      swipeGestureChanged() {
        this.gesture && this.gesture.enable(this.swipeGesture === !0);
      }
      rootChanged() {
        this.root !== void 0 &&
          (this.useRouter || this.setRoot(this.root, this.rootParams));
      }
      componentWillLoad() {
        if (
          ((this.useRouter =
            document.querySelector("ion-router") !== null &&
            this.el.closest("[no-router]") === null),
          this.swipeGesture === void 0)
        ) {
          const t = Q(this);
          this.swipeGesture = Y.getBoolean("swipeBackEnabled", t === "ios");
        }
        this.ionNavWillLoad.emit();
      }
      async componentDidLoad() {
        this.rootChanged(),
          (this.gesture = (
            await ot(
              () => import("./swipe-back-58838942.js"),
              ["assets/swipe-back-58838942.js", "assets/index2-aa4949dd.js"]
            )
          ).createSwipeBackGesture(
            this.el,
            this.canStart.bind(this),
            this.onStart.bind(this),
            this.onMove.bind(this),
            this.onEnd.bind(this)
          )),
          this.swipeGestureChanged();
      }
      connectedCallback() {
        this.destroyed = !1;
      }
      disconnectedCallback() {
        for (const t of this.views) mn(t.element, Pc), t._destroy();
        this.gesture && (this.gesture.destroy(), (this.gesture = void 0)),
          (this.transInstr.length = 0),
          (this.views.length = 0),
          (this.destroyed = !0);
      }
      push(t, n, i, r) {
        return this.insert(-1, t, n, i, r);
      }
      insert(t, n, i, r, o) {
        return this.insertPages(t, [{ component: n, componentProps: i }], r, o);
      }
      insertPages(t, n, i, r) {
        return this.queueTrns({ insertStart: t, insertViews: n, opts: i }, r);
      }
      pop(t, n) {
        return this.removeIndex(-1, 1, t, n);
      }
      popTo(t, n, i) {
        const r = { removeStart: -1, removeCount: -1, opts: n };
        return (
          typeof t == "object" && t.component
            ? ((r.removeView = t), (r.removeStart = 1))
            : typeof t == "number" && (r.removeStart = t + 1),
          this.queueTrns(r, i)
        );
      }
      popToRoot(t, n) {
        return this.removeIndex(1, -1, t, n);
      }
      removeIndex(t, n = 1, i, r) {
        return this.queueTrns({ removeStart: t, removeCount: n, opts: i }, r);
      }
      setRoot(t, n, i, r) {
        return this.setPages([{ component: t, componentProps: n }], i, r);
      }
      setPages(t, n, i) {
        return (
          n != null || (n = {}),
          n.animated !== !0 && (n.animated = !1),
          this.queueTrns(
            {
              insertStart: 0,
              insertViews: t,
              removeStart: 0,
              removeCount: -1,
              opts: n,
            },
            i
          )
        );
      }
      setRouteId(t, n, i, r) {
        const o = this.getActiveSync();
        if (jm(o, t, n))
          return Promise.resolve({ changed: !1, element: o.element });
        let s;
        const a = new Promise((u) => (s = u));
        let l;
        const c = {
          updateURL: !1,
          viewIsReady: (u) => {
            let d;
            const f = new Promise((h) => (d = h));
            return (
              s({
                changed: !0,
                element: u,
                markVisible: async () => {
                  d(), await l;
                },
              }),
              f
            );
          },
        };
        if (i === "root") l = this.setRoot(t, n, c);
        else {
          const u = this.views.find((d) => jm(d, t, n));
          u
            ? (l = this.popTo(
                u,
                Object.assign(Object.assign({}, c), {
                  direction: "back",
                  animationBuilder: r,
                })
              ))
            : i === "forward"
            ? (l = this.push(
                t,
                n,
                Object.assign(Object.assign({}, c), { animationBuilder: r })
              ))
            : i === "back" &&
              (l = this.setRoot(
                t,
                n,
                Object.assign(Object.assign({}, c), {
                  direction: "back",
                  animated: !0,
                  animationBuilder: r,
                })
              ));
        }
        return a;
      }
      async getRouteId() {
        const t = this.getActiveSync();
        if (t)
          return {
            id: t.element.tagName,
            params: t.params,
            element: t.element,
          };
      }
      async getActive() {
        return this.getActiveSync();
      }
      async getByIndex(t) {
        return this.views[t];
      }
      async canGoBack(t) {
        return this.canGoBackSync(t);
      }
      async getPrevious(t) {
        return this.getPreviousSync(t);
      }
      getLength() {
        return this.views.length;
      }
      getActiveSync() {
        return this.views[this.views.length - 1];
      }
      canGoBackSync(t = this.getActiveSync()) {
        return !!(t && this.getPreviousSync(t));
      }
      getPreviousSync(t = this.getActiveSync()) {
        if (!t) return;
        const n = this.views,
          i = n.indexOf(t);
        return i > 0 ? n[i - 1] : void 0;
      }
      async queueTrns(t, n) {
        var i, r;
        if (
          this.isTransitioning &&
          !((i = t.opts) === null || i === void 0) &&
          i.skipIfBusy
        )
          return !1;
        const o = new Promise((s, a) => {
          (t.resolve = s), (t.reject = a);
        });
        if (
          ((t.done = n), t.opts && t.opts.updateURL !== !1 && this.useRouter)
        ) {
          const s = document.querySelector("ion-router");
          if (s) {
            const a = await s.canTransition();
            if (a === !1) return !1;
            if (typeof a == "string")
              return s.push(a, t.opts.direction || "back"), !1;
          }
        }
        return (
          ((r = t.insertViews) === null || r === void 0 ? void 0 : r.length) ===
            0 && (t.insertViews = void 0),
          this.transInstr.push(t),
          this.nextTrns(),
          o
        );
      }
      success(t, n) {
        if (this.destroyed) {
          this.fireError("nav controller was destroyed", n);
          return;
        }
        if (
          (n.done &&
            n.done(
              t.hasCompleted,
              t.requiresTransition,
              t.enteringView,
              t.leavingView,
              t.direction
            ),
          n.resolve(t.hasCompleted),
          n.opts.updateURL !== !1 && this.useRouter)
        ) {
          const i = document.querySelector("ion-router");
          if (i) {
            const r = t.direction === "back" ? "back" : "forward";
            i.navChanged(r);
          }
        }
      }
      failed(t, n) {
        if (this.destroyed) {
          this.fireError("nav controller was destroyed", n);
          return;
        }
        (this.transInstr.length = 0), this.fireError(t, n);
      }
      fireError(t, n) {
        n.done && n.done(!1, !1, t),
          n.reject && !this.destroyed ? n.reject(t) : n.resolve(!1);
      }
      nextTrns() {
        if (this.isTransitioning) return !1;
        const t = this.transInstr.shift();
        return t ? (this.runTransition(t), !0) : !1;
      }
      async runTransition(t) {
        try {
          this.ionNavWillChange.emit(),
            (this.isTransitioning = !0),
            this.prepareTI(t);
          const n = this.getActiveSync(),
            i = this.getEnteringView(t, n);
          if (!n && !i) throw new Error("no views in the stack to be removed");
          i && i.state === Sy && (await i.init(this.el)),
            this.postViewInit(i, n, t);
          const r =
            (t.enteringRequiresTransition || t.leavingRequiresTransition) &&
            i !== n;
          r &&
            t.opts &&
            n &&
            (t.opts.direction === "back" &&
              (t.opts.animationBuilder =
                t.opts.animationBuilder ||
                (i == null ? void 0 : i.animationBuilder)),
            (n.animationBuilder = t.opts.animationBuilder));
          let o;
          r
            ? (o = await this.transition(i, n, t))
            : (o = { hasCompleted: !0, requiresTransition: !1 }),
            this.success(o, t),
            this.ionNavDidChange.emit();
        } catch (n) {
          this.failed(n, t);
        }
        (this.isTransitioning = !1), this.nextTrns();
      }
      prepareTI(t) {
        var n, i, r;
        const o = this.views.length;
        if (
          (((n = t.opts) !== null && n !== void 0) || (t.opts = {}),
          ((i = (r = t.opts).delegate) !== null && i !== void 0) ||
            (r.delegate = this.delegate),
          t.removeView !== void 0)
        ) {
          nt(t.removeStart !== void 0, "removeView needs removeStart"),
            nt(t.removeCount !== void 0, "removeView needs removeCount");
          const l = this.views.indexOf(t.removeView);
          if (l < 0) throw new Error("removeView was not found");
          t.removeStart += l;
        }
        t.removeStart !== void 0 &&
          (t.removeStart < 0 && (t.removeStart = o - 1),
          t.removeCount < 0 && (t.removeCount = o - t.removeStart),
          (t.leavingRequiresTransition =
            t.removeCount > 0 && t.removeStart + t.removeCount === o)),
          t.insertViews &&
            ((t.insertStart < 0 || t.insertStart > o) && (t.insertStart = o),
            (t.enteringRequiresTransition = t.insertStart === o));
        const s = t.insertViews;
        if (!s) return;
        nt(s.length > 0, "length can not be zero");
        const a = ZP(s);
        if (a.length === 0) throw new Error("invalid views to insert");
        for (const l of a) {
          l.delegate = t.opts.delegate;
          const c = l.nav;
          if (c && c !== this)
            throw new Error("inserted view was already inserted");
          if (l.state === $a)
            throw new Error("inserted view was already destroyed");
        }
        t.insertViews = a;
      }
      getEnteringView(t, n) {
        const i = t.insertViews;
        if (i !== void 0) return i[i.length - 1];
        const r = t.removeStart;
        if (r !== void 0) {
          const o = this.views,
            s = r + t.removeCount;
          for (let a = o.length - 1; a >= 0; a--) {
            const l = o[a];
            if ((a < r || a >= s) && l !== n) return l;
          }
        }
      }
      postViewInit(t, n, i) {
        var r, o, s;
        nt(n || t, "Both leavingView and enteringView are null"),
          nt(i.resolve, "resolve must be valid"),
          nt(i.reject, "reject must be valid");
        const a = i.opts,
          { insertViews: l, removeStart: c, removeCount: u } = i;
        let d;
        if (c !== void 0 && u !== void 0) {
          nt(c >= 0, "removeStart can not be negative"),
            nt(u >= 0, "removeCount can not be negative"),
            (d = []);
          for (let h = c; h < c + u; h++) {
            const m = this.views[h];
            m !== void 0 && m !== t && m !== n && d.push(m);
          }
          ((r = a.direction) !== null && r !== void 0) ||
            (a.direction = "back");
        }
        const f =
          this.views.length +
          ((o = l == null ? void 0 : l.length) !== null && o !== void 0
            ? o
            : 0) -
          (u != null ? u : 0);
        if ((nt(f >= 0, "final balance can not be negative"), f === 0))
          throw (
            (console.warn(
              "You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",
              this,
              this.el
            ),
            new Error("navigation stack needs at least one root page"))
          );
        if (l) {
          let h = i.insertStart;
          for (const m of l) this.insertViewAt(m, h), h++;
          i.enteringRequiresTransition &&
            (((s = a.direction) !== null && s !== void 0) ||
              (a.direction = "forward"));
        }
        if (d && d.length > 0) {
          for (const h of d)
            mn(h.element, J0), mn(h.element, ey), mn(h.element, Pc);
          for (const h of d) this.destroyView(h);
        }
      }
      async transition(t, n, i) {
        const r = i.opts,
          o = r.progressAnimation ? (d) => (this.sbAni = d) : void 0,
          s = Q(this),
          a = t.element,
          l = n && n.element,
          c = Object.assign(
            Object.assign(
              {
                mode: s,
                showGoBack: this.canGoBackSync(t),
                baseEl: this.el,
                progressCallback: o,
                animated: this.animated && Y.getBoolean("animated", !0),
                enteringEl: a,
                leavingEl: l,
              },
              r
            ),
            {
              animationBuilder:
                r.animationBuilder || this.animation || Y.get("navAnimation"),
            }
          ),
          { hasCompleted: u } = await ty(c);
        return this.transitionFinish(u, t, n, r);
      }
      transitionFinish(t, n, i, r) {
        const o = t ? n : i;
        return (
          o && this.unmountInactiveViews(o),
          {
            hasCompleted: t,
            requiresTransition: !0,
            enteringView: n,
            leavingView: i,
            direction: r.direction,
          }
        );
      }
      insertViewAt(t, n) {
        const i = this.views,
          r = i.indexOf(t);
        r > -1
          ? (nt(t.nav === this, "view is not part of the nav"),
            i.splice(r, 1),
            i.splice(n, 0, t))
          : (nt(!t.nav, "nav is used"), (t.nav = this), i.splice(n, 0, t));
      }
      removeView(t) {
        nt(
          t.state === Cy || t.state === $a,
          "view state should be loaded or destroyed"
        );
        const n = this.views,
          i = n.indexOf(t);
        nt(i > -1, "view must be part of the stack"), i >= 0 && n.splice(i, 1);
      }
      destroyView(t) {
        t._destroy(), this.removeView(t);
      }
      unmountInactiveViews(t) {
        if (this.destroyed) return;
        const n = this.views,
          i = n.indexOf(t);
        for (let r = n.length - 1; r >= 0; r--) {
          const o = n[r],
            s = o.element;
          s && (r > i ? (mn(s, Pc), this.destroyView(o)) : r < i && id(s, !0));
        }
      }
      canStart() {
        return (
          !!this.swipeGesture &&
          !this.isTransitioning &&
          this.transInstr.length === 0 &&
          this.animationEnabled &&
          this.canGoBackSync()
        );
      }
      onStart() {
        this.pop({ direction: "back", progressAnimation: !0 });
      }
      onMove(t) {
        this.sbAni && this.sbAni.progressStep(t);
      }
      onEnd(t, n, i) {
        if (this.sbAni) {
          (this.animationEnabled = !1),
            this.sbAni.onFinish(
              () => {
                this.animationEnabled = !0;
              },
              { oneTimeCallback: !0 }
            );
          let r = t ? -0.001 : 0.001;
          t
            ? (r += _o([0, 0], [0.32, 0.72], [0, 1], [1, 1], n)[0])
            : (this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),
              (r += _o([0, 0], [1, 0], [0.68, 0.28], [1, 1], n)[0])),
            this.sbAni.progressEnd(t ? 1 : 0, r, i);
        }
      }
      render() {
        return A("slot", null);
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { swipeGesture: ["swipeGestureChanged"], root: ["rootChanged"] };
      }
      static get style() {
        return JP;
      }
    },
    [
      1,
      "ion-nav",
      {
        delegate: [16],
        swipeGesture: [1028, "swipe-gesture"],
        animated: [4],
        animation: [16],
        rootParams: [16],
        root: [1],
        push: [64],
        insert: [64],
        insertPages: [64],
        pop: [64],
        popTo: [64],
        popToRoot: [64],
        removeIndex: [64],
        setRoot: [64],
        setPages: [64],
        setRouteId: [64],
        getRouteId: [64],
        getActive: [64],
        getByIndex: [64],
        canGoBack: [64],
        getPrevious: [64],
      },
    ]
  );
function tT() {
  if (typeof customElements > "u") return;
  ["ion-nav"].forEach((t) => {
    switch (t) {
      case "ion-nav":
        customElements.get(t) || customElements.define(t, eT);
        break;
    }
  });
}
const nT = tT;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const iT = vP,
  rT = (e) => {
    const t = e.previousElementSibling;
    return t !== null && t.tagName === "ION-HEADER" ? "translate" : "scale";
  },
  oT = (e, t, n) => (e === "scale" ? sT(t, n) : aT(t, n)),
  $y = (e) => {
    const t = e.querySelector("ion-spinner"),
      n = t.shadowRoot.querySelector("circle"),
      i = e.querySelector(".spinner-arrow-container"),
      r = e.querySelector(".arrow-container"),
      o = r ? r.querySelector("ion-icon") : null,
      s = Me().duration(1e3).easing("ease-out"),
      a = Me()
        .addElement(i)
        .keyframes([
          { offset: 0, opacity: "0.3" },
          { offset: 0.45, opacity: "0.3" },
          { offset: 0.55, opacity: "1" },
          { offset: 1, opacity: "1" },
        ]),
      l = Me()
        .addElement(n)
        .keyframes([
          { offset: 0, strokeDasharray: "1px, 200px" },
          { offset: 0.2, strokeDasharray: "1px, 200px" },
          { offset: 0.55, strokeDasharray: "100px, 200px" },
          { offset: 1, strokeDasharray: "100px, 200px" },
        ]),
      c = Me()
        .addElement(t)
        .keyframes([
          { offset: 0, transform: "rotate(-90deg)" },
          { offset: 1, transform: "rotate(210deg)" },
        ]);
    if (r && o) {
      const u = Me()
          .addElement(r)
          .keyframes([
            { offset: 0, transform: "rotate(0deg)" },
            { offset: 0.3, transform: "rotate(0deg)" },
            { offset: 0.55, transform: "rotate(280deg)" },
            { offset: 1, transform: "rotate(400deg)" },
          ]),
        d = Me()
          .addElement(o)
          .keyframes([
            { offset: 0, transform: "translateX(2px) scale(0)" },
            { offset: 0.3, transform: "translateX(2px) scale(0)" },
            { offset: 0.55, transform: "translateX(-1.5px) scale(1)" },
            { offset: 1, transform: "translateX(-1.5px) scale(1)" },
          ]);
      s.addAnimation([u, d]);
    }
    return s.addAnimation([a, l, c]);
  },
  sT = (e, t) => {
    const n = t.clientHeight,
      i = Me()
        .addElement(e)
        .keyframes([
          { offset: 0, transform: `scale(0) translateY(-${n}px)` },
          { offset: 1, transform: "scale(1) translateY(100px)" },
        ]);
    return $y(e).addAnimation([i]);
  },
  aT = (e, t) => {
    const n = t.clientHeight,
      i = Me()
        .addElement(e)
        .keyframes([
          { offset: 0, transform: `translateY(-${n}px)` },
          { offset: 1, transform: "translateY(100px)" },
        ]);
    return $y(e).addAnimation([i]);
  },
  lT = (e) =>
    Me()
      .duration(125)
      .addElement(e)
      .fromTo(
        "transform",
        "translateY(var(--ion-pulling-refresher-translate, 100px))",
        "translateY(0px)"
      ),
  cT = (e, t) => {
    e.style.setProperty("opacity", t.toString());
  },
  uT = (e, t, n) => {
    _e(() => {
      e.forEach((r, o) => {
        const s = o * (1 / t),
          a = 1 - s,
          l = n - s,
          c = ur(0, l / a, 1);
        r.style.setProperty("opacity", c.toString());
      });
    });
  },
  dT = (e, t) => {
    _e(() => {
      e.style.setProperty(
        "--refreshing-rotation-duration",
        t >= 1 ? "0.5s" : "2s"
      ),
        e.style.setProperty("opacity", "1");
    });
  },
  ks = (e, t, n = 200) => {
    if (!e) return Promise.resolve();
    const i = K0(e, n);
    return (
      _e(() => {
        e.style.setProperty("transition", `${n}ms all ease-out`),
          t === void 0
            ? e.style.removeProperty("transform")
            : e.style.setProperty("transform", `translate3d(0px, ${t}, 0px)`);
      }),
      i
    );
  },
  Fm = async (e, t) => {
    const n = e.querySelector("ion-refresher-content");
    if (!n) return Promise.resolve(!1);
    await new Promise((o) => Gn(n, o));
    const i = e.querySelector(
        "ion-refresher-content .refresher-pulling ion-spinner"
      ),
      r = e.querySelector(
        "ion-refresher-content .refresher-refreshing ion-spinner"
      );
    return (
      i !== null &&
      r !== null &&
      ((t === "ios" &&
        rn("mobile") &&
        e.style.webkitOverflowScrolling !== void 0) ||
        t === "md")
    );
  },
  fT =
    "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}@supports (inset-inline-start: 0){ion-refresher{inset-inline-start:0}}@supports not (inset-inline-start: 0){ion-refresher{left:0}:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}[dir=rtl] ion-refresher{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){ion-refresher:dir(rtl){left:unset;right:unset;right:0}}}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, #747577)}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",
  hT =
    "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}@supports (inset-inline-start: 0){ion-refresher{inset-inline-start:0}}@supports not (inset-inline-start: 0){ion-refresher{left:0}:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}[dir=rtl] ion-refresher{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){ion-refresher:dir(rtl){left:unset;right:unset;right:0}}}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;border-radius:100%;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}",
  pT = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          (this.ionRefresh = fe(this, "ionRefresh", 7)),
          (this.ionPull = fe(this, "ionPull", 7)),
          (this.ionStart = fe(this, "ionStart", 7)),
          (this.appliedStyles = !1),
          (this.didStart = !1),
          (this.progress = 0),
          (this.pointerDown = !1),
          (this.needsCompletion = !1),
          (this.didRefresh = !1),
          (this.lastVelocityY = 0),
          (this.animations = []),
          (this.nativeRefresher = !1),
          (this.state = 1),
          (this.pullMin = 60),
          (this.pullMax = this.pullMin + 60),
          (this.closeDuration = "280ms"),
          (this.snapbackDuration = "280ms"),
          (this.pullFactor = 1),
          (this.disabled = !1);
      }
      disabledChanged() {
        this.gesture && this.gesture.enable(!this.disabled);
      }
      async checkNativeRefresher() {
        const t = await Fm(this.el, Q(this));
        if (t && !this.nativeRefresher) {
          const n = this.el.closest("ion-content");
          this.setupNativeRefresher(n);
        } else t || this.destroyNativeRefresher();
      }
      destroyNativeRefresher() {
        this.scrollEl &&
          this.scrollListenerCallback &&
          (this.scrollEl.removeEventListener(
            "scroll",
            this.scrollListenerCallback
          ),
          (this.scrollListenerCallback = void 0)),
          (this.nativeRefresher = !1);
      }
      async resetNativeRefresher(t, n) {
        (this.state = n),
          Q(this) === "ios"
            ? await ks(t, void 0, 300)
            : await K0(
                this.el.querySelector(".refresher-refreshing-icon"),
                200
              ),
          (this.didRefresh = !1),
          (this.needsCompletion = !1),
          (this.pointerDown = !1),
          this.animations.forEach((i) => i.destroy()),
          (this.animations = []),
          (this.progress = 0),
          (this.state = 1);
      }
      async setupiOSNativeRefresher(t, n) {
        this.elementToTransform = this.scrollEl;
        const i = t.shadowRoot.querySelectorAll("svg");
        let r = this.scrollEl.clientHeight * 0.16;
        const o = i.length;
        _e(() => i.forEach((s) => s.style.setProperty("animation", "none"))),
          (this.scrollListenerCallback = () => {
            (!this.pointerDown && this.state === 1) ||
              yi(() => {
                const s = this.scrollEl.scrollTop,
                  a = this.el.clientHeight;
                if (s > 0) {
                  if (this.state === 8) {
                    const d = ur(0, s / (a * 0.5), 1);
                    _e(() => cT(n, 1 - d));
                    return;
                  }
                  return;
                }
                this.pointerDown &&
                  (this.didStart ||
                    ((this.didStart = !0), this.ionStart.emit()),
                  this.pointerDown && this.ionPull.emit());
                const l = this.didStart ? 30 : 0,
                  c = (this.progress = ur(0, (Math.abs(s) - l) / r, 1));
                this.state === 8 || c === 1
                  ? (this.pointerDown && dT(n, this.lastVelocityY),
                    this.didRefresh ||
                      (this.beginRefresh(),
                      (this.didRefresh = !0),
                      $P({ style: "light" }),
                      this.pointerDown ||
                        ks(this.elementToTransform, `${a}px`)))
                  : ((this.state = 2), uT(i, o, c));
              });
          }),
          this.scrollEl.addEventListener("scroll", this.scrollListenerCallback),
          (this.gesture = (
            await ot(() => import("./index2-aa4949dd.js"), [])
          ).createGesture({
            el: this.scrollEl,
            gestureName: "refresher",
            gesturePriority: 31,
            direction: "y",
            threshold: 5,
            onStart: () => {
              (this.pointerDown = !0),
                this.didRefresh || ks(this.elementToTransform, "0px"),
                r === 0 && (r = this.scrollEl.clientHeight * 0.16);
            },
            onMove: (s) => {
              this.lastVelocityY = s.velocityY;
            },
            onEnd: () => {
              (this.pointerDown = !1),
                (this.didStart = !1),
                this.needsCompletion
                  ? (this.resetNativeRefresher(this.elementToTransform, 32),
                    (this.needsCompletion = !1))
                  : this.didRefresh &&
                    yi(() =>
                      ks(this.elementToTransform, `${this.el.clientHeight}px`)
                    );
            },
          })),
          this.disabledChanged();
      }
      async setupMDNativeRefresher(t, n, i) {
        const r = wi(n).querySelector("circle"),
          o = this.el.querySelector(
            "ion-refresher-content .refresher-pulling-icon"
          ),
          s = wi(i).querySelector("circle");
        r !== null &&
          s !== null &&
          _e(() => {
            r.style.setProperty("animation", "none"),
              i.style.setProperty("animation-delay", "-655ms"),
              s.style.setProperty("animation-delay", "-655ms");
          }),
          (this.gesture = (
            await ot(() => import("./index2-aa4949dd.js"), [])
          ).createGesture({
            el: this.scrollEl,
            gestureName: "refresher",
            gesturePriority: 31,
            direction: "y",
            threshold: 5,
            canStart: () =>
              this.state !== 8 &&
              this.state !== 32 &&
              this.scrollEl.scrollTop === 0,
            onStart: (a) => {
              (this.progress = 0),
                (a.data = { animation: void 0, didStart: !1, cancelled: !1 });
            },
            onMove: (a) => {
              if (
                (a.velocityY < 0 && this.progress === 0 && !a.data.didStart) ||
                a.data.cancelled
              ) {
                a.data.cancelled = !0;
                return;
              }
              if (!a.data.didStart) {
                (a.data.didStart = !0), (this.state = 2);
                const { scrollEl: l } = this,
                  c = l.matches(ho) ? "overflow" : "--overflow";
                _e(() => l.style.setProperty(c, "hidden"));
                const u = rT(t),
                  d = oT(u, o, this.el);
                (a.data.animation = d),
                  d.progressStart(!1, 0),
                  this.ionStart.emit(),
                  this.animations.push(d);
                return;
              }
              (this.progress = ur(0, (a.deltaY / 180) * 0.5, 1)),
                a.data.animation.progressStep(this.progress),
                this.ionPull.emit();
            },
            onEnd: (a) => {
              if (!a.data.didStart) return;
              this.gesture.enable(!1);
              const { scrollEl: l } = this,
                c = l.matches(ho) ? "overflow" : "--overflow";
              if ((_e(() => l.style.removeProperty(c)), this.progress <= 0.4)) {
                a.data.animation
                  .progressEnd(0, this.progress, 500)
                  .onFinish(() => {
                    this.animations.forEach((f) => f.destroy()),
                      (this.animations = []),
                      this.gesture.enable(!0),
                      (this.state = 1);
                  });
                return;
              }
              const u = _o([0, 0], [0, 0], [1, 1], [1, 1], this.progress)[0],
                d = lT(o);
              this.animations.push(d),
                _e(async () => {
                  o.style.setProperty(
                    "--ion-pulling-refresher-translate",
                    `${u * 100}px`
                  ),
                    a.data.animation.progressEnd(),
                    await d.play(),
                    this.beginRefresh(),
                    a.data.animation.destroy(),
                    this.gesture.enable(!0);
                });
            },
          })),
          this.disabledChanged();
      }
      async setupNativeRefresher(t) {
        if (
          this.scrollListenerCallback ||
          !t ||
          this.nativeRefresher ||
          !this.scrollEl
        )
          return;
        this.setCss(0, "", !1, ""), (this.nativeRefresher = !0);
        const n = this.el.querySelector(
            "ion-refresher-content .refresher-pulling ion-spinner"
          ),
          i = this.el.querySelector(
            "ion-refresher-content .refresher-refreshing ion-spinner"
          );
        Q(this) === "ios"
          ? this.setupiOSNativeRefresher(n, i)
          : this.setupMDNativeRefresher(t, n, i);
      }
      componentDidUpdate() {
        this.checkNativeRefresher();
      }
      async connectedCallback() {
        if (this.el.getAttribute("slot") !== "fixed") {
          console.error('Make sure you use: <ion-refresher slot="fixed">');
          return;
        }
        const t = this.el.closest(th);
        if (!t) {
          fd(this.el);
          return;
        }
        Gn(t, async () => {
          const n = t.querySelector(ho);
          (this.scrollEl = await dd(n != null ? n : t)),
            (this.backgroundContentEl = await t.getBackgroundElement()),
            (await Fm(this.el, Q(this)))
              ? this.setupNativeRefresher(t)
              : ((this.gesture = (
                  await ot(() => import("./index2-aa4949dd.js"), [])
                ).createGesture({
                  el: t,
                  gestureName: "refresher",
                  gesturePriority: 31,
                  direction: "y",
                  threshold: 20,
                  passive: !1,
                  canStart: () => this.canStart(),
                  onStart: () => this.onStart(),
                  onMove: (i) => this.onMove(i),
                  onEnd: () => this.onEnd(),
                })),
                this.disabledChanged());
        });
      }
      disconnectedCallback() {
        this.destroyNativeRefresher(),
          (this.scrollEl = void 0),
          this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
      }
      async complete() {
        this.nativeRefresher
          ? ((this.needsCompletion = !0),
            this.pointerDown ||
              it(() =>
                it(() => this.resetNativeRefresher(this.elementToTransform, 32))
              ))
          : this.close(32, "120ms");
      }
      async cancel() {
        this.nativeRefresher
          ? this.pointerDown ||
            it(() =>
              it(() => this.resetNativeRefresher(this.elementToTransform, 16))
            )
          : this.close(16, "");
      }
      getProgress() {
        return Promise.resolve(this.progress);
      }
      canStart() {
        return !(
          !this.scrollEl ||
          this.state !== 1 ||
          this.scrollEl.scrollTop > 0
        );
      }
      onStart() {
        (this.progress = 0), (this.state = 1), this.memoizeOverflowStyle();
      }
      onMove(t) {
        if (!this.scrollEl) return;
        const n = t.event;
        if ((n.touches !== void 0 && n.touches.length > 1) || this.state & 56)
          return;
        const i =
            Number.isNaN(this.pullFactor) || this.pullFactor < 0
              ? 1
              : this.pullFactor,
          r = t.deltaY * i;
        if (r <= 0) {
          if (((this.progress = 0), (this.state = 1), this.appliedStyles)) {
            this.setCss(0, "", !1, "");
            return;
          }
          return;
        }
        if (this.state === 1) {
          if (this.scrollEl.scrollTop > 0) {
            this.progress = 0;
            return;
          }
          this.state = 2;
        }
        if (
          (n.cancelable && n.preventDefault(),
          this.setCss(r, "0ms", !0, ""),
          r === 0)
        ) {
          this.progress = 0;
          return;
        }
        const o = this.pullMin;
        if (
          ((this.progress = r / o),
          this.didStart || ((this.didStart = !0), this.ionStart.emit()),
          this.ionPull.emit(),
          r < o)
        ) {
          this.state = 2;
          return;
        }
        if (r > this.pullMax) {
          this.beginRefresh();
          return;
        }
        this.state = 4;
      }
      onEnd() {
        this.state === 4
          ? this.beginRefresh()
          : this.state === 2
          ? this.cancel()
          : this.state === 1 && this.restoreOverflowStyle();
      }
      beginRefresh() {
        (this.state = 8),
          this.setCss(this.pullMin, this.snapbackDuration, !0, ""),
          this.ionRefresh.emit({ complete: this.complete.bind(this) });
      }
      close(t, n) {
        setTimeout(() => {
          (this.state = 1),
            (this.progress = 0),
            (this.didStart = !1),
            this.setCss(0, "0ms", !1, "", !0);
        }, 600),
          (this.state = t),
          this.setCss(0, this.closeDuration, !0, n);
      }
      setCss(t, n, i, r, o = !1) {
        this.nativeRefresher ||
          ((this.appliedStyles = t > 0),
          _e(() => {
            if (this.scrollEl && this.backgroundContentEl) {
              const s = this.scrollEl.style,
                a = this.backgroundContentEl.style;
              (s.transform = a.transform =
                t > 0 ? `translateY(${t}px) translateZ(0px)` : ""),
                (s.transitionDuration = a.transitionDuration = n),
                (s.transitionDelay = a.transitionDelay = r),
                (s.overflow = i ? "hidden" : "");
            }
            o && this.restoreOverflowStyle();
          }));
      }
      memoizeOverflowStyle() {
        if (this.scrollEl) {
          const {
            overflow: t,
            overflowX: n,
            overflowY: i,
          } = this.scrollEl.style;
          this.overflowStyles = {
            overflow: t != null ? t : "",
            overflowX: n != null ? n : "",
            overflowY: i != null ? i : "",
          };
        }
      }
      restoreOverflowStyle() {
        if (this.overflowStyles !== void 0 && this.scrollEl !== void 0) {
          const {
            overflow: t,
            overflowX: n,
            overflowY: i,
          } = this.overflowStyles;
          (this.scrollEl.style.overflow = t),
            (this.scrollEl.style.overflowX = n),
            (this.scrollEl.style.overflowY = i),
            (this.overflowStyles = void 0);
        }
      }
      render() {
        const t = Q(this);
        return A(Te, {
          slot: "fixed",
          class: {
            [t]: !0,
            [`refresher-${t}`]: !0,
            "refresher-native": this.nativeRefresher,
            "refresher-active": this.state !== 1,
            "refresher-pulling": this.state === 2,
            "refresher-ready": this.state === 4,
            "refresher-refreshing": this.state === 8,
            "refresher-cancelling": this.state === 16,
            "refresher-completing": this.state === 32,
          },
        });
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { disabled: ["disabledChanged"] };
      }
      static get style() {
        return { ios: fT, md: hT };
      }
    },
    [
      32,
      "ion-refresher",
      {
        pullMin: [2, "pull-min"],
        pullMax: [2, "pull-max"],
        closeDuration: [1, "close-duration"],
        snapbackDuration: [1, "snapback-duration"],
        pullFactor: [2, "pull-factor"],
        disabled: [4],
        nativeRefresher: [32],
        state: [32],
        complete: [64],
        cancel: [64],
        getProgress: [64],
      },
    ]
  );
function mT() {
  if (typeof customElements > "u") return;
  ["ion-refresher"].forEach((t) => {
    switch (t) {
      case "ion-refresher":
        customElements.get(t) || customElements.define(t, pT);
        break;
    }
  });
}
const gT = mT;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const vT = Ee(
  class extends Se {
    constructor() {
      super(),
        this.__registerHost(),
        (this.customHTMLEnabled = Y.get("innerHTMLTemplatesEnabled", dy)),
        (this.pullingIcon = void 0),
        (this.pullingText = void 0),
        (this.refreshingSpinner = void 0),
        (this.refreshingText = void 0);
    }
    componentWillLoad() {
      if (this.pullingIcon === void 0) {
        const t = Q(this),
          n = this.el.style.webkitOverflowScrolling !== void 0 ? "lines" : I$;
        this.pullingIcon = Y.get(
          "refreshingIcon",
          t === "ios" && rn("mobile") ? Y.get("spinner", n) : "circular"
        );
      }
      if (this.refreshingSpinner === void 0) {
        const t = Q(this);
        this.refreshingSpinner = Y.get(
          "refreshingSpinner",
          Y.get("spinner", t === "ios" ? "lines" : "circular")
        );
      }
    }
    renderPullingText() {
      const { customHTMLEnabled: t, pullingText: n } = this;
      return t
        ? A("div", { class: "refresher-pulling-text", innerHTML: rd(n) })
        : A("div", { class: "refresher-pulling-text" }, n);
    }
    renderRefreshingText() {
      const { customHTMLEnabled: t, refreshingText: n } = this;
      return t
        ? A("div", { class: "refresher-refreshing-text", innerHTML: rd(n) })
        : A("div", { class: "refresher-refreshing-text" }, n);
    }
    render() {
      const t = this.pullingIcon,
        n = t != null && pd[t] !== void 0,
        i = Q(this);
      return A(
        Te,
        { class: i },
        A(
          "div",
          { class: "refresher-pulling" },
          this.pullingIcon &&
            n &&
            A(
              "div",
              { class: "refresher-pulling-icon" },
              A(
                "div",
                { class: "spinner-arrow-container" },
                A("ion-spinner", { name: this.pullingIcon, paused: !0 }),
                i === "md" &&
                  this.pullingIcon === "circular" &&
                  A(
                    "div",
                    { class: "arrow-container" },
                    A("ion-icon", { icon: L$, "aria-hidden": "true" })
                  )
              )
            ),
          this.pullingIcon &&
            !n &&
            A(
              "div",
              { class: "refresher-pulling-icon" },
              A("ion-icon", {
                icon: this.pullingIcon,
                lazy: !1,
                "aria-hidden": "true",
              })
            ),
          this.pullingText !== void 0 && this.renderPullingText()
        ),
        A(
          "div",
          { class: "refresher-refreshing" },
          this.refreshingSpinner &&
            A(
              "div",
              { class: "refresher-refreshing-icon" },
              A("ion-spinner", { name: this.refreshingSpinner })
            ),
          this.refreshingText !== void 0 && this.renderRefreshingText()
        )
      );
    }
    get el() {
      return this;
    }
  },
  [
    0,
    "ion-refresher-content",
    {
      pullingIcon: [1025, "pulling-icon"],
      pullingText: [1, "pulling-text"],
      refreshingSpinner: [1025, "refreshing-spinner"],
      refreshingText: [1, "refreshing-text"],
    },
  ]
);
function bT() {
  if (typeof customElements > "u") return;
  ["ion-refresher-content", "ion-icon", "ion-spinner"].forEach((t) => {
    switch (t) {
      case "ion-refresher-content":
        customElements.get(t) || customElements.define(t, vT);
        break;
      case "ion-icon":
        customElements.get(t) || Jf();
        break;
      case "ion-spinner":
        customElements.get(t) || qP();
        break;
    }
  });
}
const yT = bT;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const wT =
    ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}:host(.title-large){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-webkit-transform-origin:left center;transform-origin:left center;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large) .toolbar-title:dir(rtl){-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}",
  xT =
    ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}",
  kT = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionStyle = fe(this, "ionStyle", 7)),
          (this.color = void 0),
          (this.size = void 0);
      }
      sizeChanged() {
        this.emitStyle();
      }
      connectedCallback() {
        this.emitStyle();
      }
      emitStyle() {
        const t = this.getSize();
        this.ionStyle.emit({ [`title-${t}`]: !0 });
      }
      getSize() {
        return this.size !== void 0 ? this.size : "default";
      }
      render() {
        const t = Q(this),
          n = this.getSize();
        return A(
          Te,
          {
            class: an(this.color, {
              [t]: !0,
              [`title-${n}`]: !0,
              "title-rtl": document.dir === "rtl",
            }),
          },
          A("div", { class: "toolbar-title" }, A("slot", null))
        );
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { size: ["sizeChanged"] };
      }
      static get style() {
        return { ios: wT, md: xT };
      }
    },
    [33, "ion-title", { color: [513], size: [1] }]
  );
function ET() {
  if (typeof customElements > "u") return;
  ["ion-title"].forEach((t) => {
    switch (t) {
      case "ion-title":
        customElements.get(t) || customElements.define(t, kT);
        break;
    }
  });
}
const ST = ET;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const CT =
    ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}",
  $T =
    ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}",
  PT = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.childrenStyles = new Map()),
          (this.color = void 0);
      }
      componentWillLoad() {
        const t = Array.from(this.el.querySelectorAll("ion-buttons")),
          n = t.find((o) => o.slot === "start");
        n && n.classList.add("buttons-first-slot");
        const i = t.reverse(),
          r =
            i.find((o) => o.slot === "end") ||
            i.find((o) => o.slot === "primary") ||
            i.find((o) => o.slot === "secondary");
        r && r.classList.add("buttons-last-slot");
      }
      childrenStyle(t) {
        t.stopPropagation();
        const n = t.target.tagName,
          i = t.detail,
          r = {},
          o = this.childrenStyles.get(n) || {};
        let s = !1;
        Object.keys(i).forEach((a) => {
          const l = `toolbar-${a}`,
            c = i[a];
          c !== o[l] && (s = !0), c && (r[l] = !0);
        }),
          s && (this.childrenStyles.set(n, r), ka(this));
      }
      render() {
        const t = Q(this),
          n = {};
        return (
          this.childrenStyles.forEach((i) => {
            Object.assign(n, i);
          }),
          A(
            Te,
            {
              class: Object.assign(
                Object.assign({}, n),
                an(this.color, {
                  [t]: !0,
                  "in-toolbar": ki("ion-toolbar", this.el),
                })
              ),
            },
            A("div", { class: "toolbar-background" }),
            A(
              "div",
              { class: "toolbar-container" },
              A("slot", { name: "start" }),
              A("slot", { name: "secondary" }),
              A("div", { class: "toolbar-content" }, A("slot", null)),
              A("slot", { name: "primary" }),
              A("slot", { name: "end" })
            )
          )
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return { ios: CT, md: $T };
      }
    },
    [33, "ion-toolbar", { color: [513] }, [[0, "ionStyle", "childrenStyle"]]]
  );
function TT() {
  if (typeof customElements > "u") return;
  ["ion-toolbar"].forEach((t) => {
    switch (t) {
      case "ion-toolbar":
        customElements.get(t) || customElements.define(t, PT);
        break;
    }
  });
}
const AT = TT;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const OT = wP;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const RT = (e, t) => {
    const n = Me(),
      i = Me(),
      o = wi(e).querySelector(".toast-wrapper"),
      s = "calc(-10px - var(--ion-safe-area-bottom, 0px))",
      a = "calc(10px + var(--ion-safe-area-top, 0px))";
    switch ((i.addElement(o), t)) {
      case "top":
        i.fromTo("transform", "translateY(-100%)", `translateY(${a})`);
        break;
      case "middle":
        const l = Math.floor(e.clientHeight / 2 - o.clientHeight / 2);
        (o.style.top = `${l}px`), i.fromTo("opacity", 0.01, 1);
        break;
      default:
        i.fromTo("transform", "translateY(100%)", `translateY(${s})`);
        break;
    }
    return n
      .easing("cubic-bezier(.155,1.105,.295,1.12)")
      .duration(400)
      .addAnimation(i);
  },
  IT = (e, t) => {
    const n = Me(),
      i = Me(),
      o = wi(e).querySelector(".toast-wrapper"),
      s = "calc(-10px - var(--ion-safe-area-bottom, 0px))",
      a = "calc(10px + var(--ion-safe-area-top, 0px))";
    switch ((i.addElement(o), t)) {
      case "top":
        i.fromTo("transform", `translateY(${a})`, "translateY(-100%)");
        break;
      case "middle":
        i.fromTo("opacity", 0.99, 0);
        break;
      default:
        i.fromTo("transform", `translateY(${s})`, "translateY(100%)");
        break;
    }
    return n
      .easing("cubic-bezier(.36,.66,.04,1)")
      .duration(300)
      .addAnimation(i);
  },
  LT = (e, t) => {
    const n = Me(),
      i = Me(),
      o = wi(e).querySelector(".toast-wrapper"),
      s = "calc(8px + var(--ion-safe-area-bottom, 0px))",
      a = "calc(8px + var(--ion-safe-area-top, 0px))";
    switch ((i.addElement(o), t)) {
      case "top":
        (o.style.top = a), i.fromTo("opacity", 0.01, 1);
        break;
      case "middle":
        const l = Math.floor(e.clientHeight / 2 - o.clientHeight / 2);
        (o.style.top = `${l}px`), i.fromTo("opacity", 0.01, 1);
        break;
      default:
        (o.style.bottom = s), i.fromTo("opacity", 0.01, 1);
        break;
    }
    return n
      .easing("cubic-bezier(.36,.66,.04,1)")
      .duration(400)
      .addAnimation(i);
  },
  _T = (e) => {
    const t = Me(),
      n = Me(),
      r = wi(e).querySelector(".toast-wrapper");
    return (
      n.addElement(r).fromTo("opacity", 0.99, 0),
      t.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)
    );
  },
  MT =
    ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",
  BT =
    ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}",
  DT = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.didPresent = fe(this, "ionToastDidPresent", 7)),
          (this.willPresent = fe(this, "ionToastWillPresent", 7)),
          (this.willDismiss = fe(this, "ionToastWillDismiss", 7)),
          (this.didDismiss = fe(this, "ionToastDidDismiss", 7)),
          (this.didPresentShorthand = fe(this, "didPresent", 7)),
          (this.willPresentShorthand = fe(this, "willPresent", 7)),
          (this.willDismissShorthand = fe(this, "willDismiss", 7)),
          (this.didDismissShorthand = fe(this, "didDismiss", 7)),
          (this.delegateController = A$(this)),
          (this.triggerController = O$()),
          (this.customHTMLEnabled = Y.get("innerHTMLTemplatesEnabled", dy)),
          (this.presented = !1),
          (this.dispatchCancelHandler = (t) => {
            const n = t.detail.role;
            if (Om(n)) {
              const i = this.getButtons().find((r) => r.role === "cancel");
              this.callButtonHandler(i);
            }
          }),
          (this.revealContentToScreenReader = !1),
          (this.overlayIndex = void 0),
          (this.delegate = void 0),
          (this.hasController = !1),
          (this.color = void 0),
          (this.enterAnimation = void 0),
          (this.leaveAnimation = void 0),
          (this.cssClass = void 0),
          (this.duration = Y.getNumber("toastDuration", 0)),
          (this.header = void 0),
          (this.layout = "baseline"),
          (this.message = void 0),
          (this.keyboardClose = !1),
          (this.position = "bottom"),
          (this.buttons = void 0),
          (this.translucent = !1),
          (this.animated = !0),
          (this.icon = void 0),
          (this.htmlAttributes = void 0),
          (this.isOpen = !1),
          (this.trigger = void 0);
      }
      onIsOpenChange(t, n) {
        t === !0 && n === !1
          ? this.present()
          : t === !1 && n === !0 && this.dismiss();
      }
      triggerChanged() {
        const { trigger: t, el: n, triggerController: i } = this;
        t && i.addClickListener(n, t);
      }
      connectedCallback() {
        m$(this.el), this.triggerChanged();
      }
      disconnectedCallback() {
        this.triggerController.removeClickListener();
      }
      componentWillLoad() {
        g$(this.el);
      }
      async present() {
        this.currentTransition !== void 0 && (await this.currentTransition),
          await this.delegateController.attachViewToDom(),
          (this.currentTransition = x$(
            this,
            "toastEnter",
            RT,
            LT,
            this.position
          )),
          await this.currentTransition,
          (this.revealContentToScreenReader = !0),
          (this.currentTransition = void 0),
          this.duration > 0 &&
            (this.durationTimeout = setTimeout(
              () => this.dismiss(void 0, "timeout"),
              this.duration
            ));
      }
      async dismiss(t, n) {
        this.durationTimeout && clearTimeout(this.durationTimeout),
          (this.currentTransition = E$(
            this,
            t,
            n,
            "toastLeave",
            IT,
            _T,
            this.position
          ));
        const i = await this.currentTransition;
        return (
          i &&
            (this.delegateController.removeViewFromDom(),
            (this.revealContentToScreenReader = !1)),
          i
        );
      }
      onDidDismiss() {
        return Am(this.el, "ionToastDidDismiss");
      }
      onWillDismiss() {
        return Am(this.el, "ionToastWillDismiss");
      }
      getButtons() {
        return this.buttons
          ? this.buttons.map((n) => (typeof n == "string" ? { text: n } : n))
          : [];
      }
      async buttonClick(t) {
        const n = t.role;
        return Om(n)
          ? this.dismiss(void 0, n)
          : (await this.callButtonHandler(t))
          ? this.dismiss(void 0, n)
          : Promise.resolve();
      }
      async callButtonHandler(t) {
        if (t != null && t.handler)
          try {
            if ((await P$(t.handler)) === !1) return !1;
          } catch (n) {
            console.error(n);
          }
        return !0;
      }
      renderButtons(t, n) {
        if (t.length === 0) return;
        const i = Q(this),
          r = { "toast-button-group": !0, [`toast-button-group-${n}`]: !0 };
        return A(
          "div",
          { class: r },
          t.map((o) =>
            A(
              "button",
              {
                type: "button",
                class: jT(o),
                tabIndex: 0,
                onClick: () => this.buttonClick(o),
                part: "button",
              },
              A(
                "div",
                { class: "toast-button-inner" },
                o.icon &&
                  A("ion-icon", {
                    "aria-hidden": "true",
                    icon: o.icon,
                    slot: o.text === void 0 ? "icon-only" : void 0,
                    class: "toast-button-icon",
                  }),
                o.text
              ),
              i === "md" &&
                A("ion-ripple-effect", {
                  type:
                    o.icon !== void 0 && o.text === void 0
                      ? "unbounded"
                      : "bounded",
                })
            )
          )
        );
      }
      renderToastMessage(t, n = null) {
        const { customHTMLEnabled: i, message: r } = this;
        return i
          ? A("div", {
              key: t,
              "aria-hidden": n,
              class: "toast-message",
              part: "message",
              innerHTML: rd(r),
            })
          : A(
              "div",
              {
                key: t,
                "aria-hidden": n,
                class: "toast-message",
                part: "message",
              },
              r
            );
      }
      renderHeader(t, n = null) {
        return A(
          "div",
          { key: t, class: "toast-header", "aria-hidden": n, part: "header" },
          this.header
        );
      }
      render() {
        const {
            layout: t,
            el: n,
            revealContentToScreenReader: i,
            header: r,
            message: o,
          } = this,
          s = this.getButtons(),
          a = s.filter((d) => d.side === "start"),
          l = s.filter((d) => d.side !== "start"),
          c = Q(this),
          u = {
            "toast-wrapper": !0,
            [`toast-${this.position}`]: !0,
            [`toast-layout-${t}`]: !0,
          };
        return (
          t === "stacked" &&
            a.length > 0 &&
            l.length > 0 &&
            An(
              "This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",
              n
            ),
          A(
            Te,
            Object.assign({ tabindex: "-1" }, this.htmlAttributes, {
              style: { zIndex: `${6e4 + this.overlayIndex}` },
              class: an(
                this.color,
                Object.assign(Object.assign({ [c]: !0 }, yy(this.cssClass)), {
                  "overlay-hidden": !0,
                  "toast-translucent": this.translucent,
                })
              ),
              onIonToastWillDismiss: this.dispatchCancelHandler,
            }),
            A(
              "div",
              { class: u },
              A(
                "div",
                { class: "toast-container", part: "container" },
                this.renderButtons(a, "start"),
                this.icon !== void 0 &&
                  A("ion-icon", {
                    class: "toast-icon",
                    part: "icon",
                    icon: this.icon,
                    lazy: !1,
                    "aria-hidden": "true",
                  }),
                A(
                  "div",
                  {
                    class: "toast-content",
                    role: "status",
                    "aria-atomic": "true",
                    "aria-live": "polite",
                  },
                  !i && r !== void 0 && this.renderHeader("oldHeader", "true"),
                  !i &&
                    o !== void 0 &&
                    this.renderToastMessage("oldMessage", "true"),
                  i && r !== void 0 && this.renderHeader("header"),
                  i && o !== void 0 && this.renderToastMessage("header")
                ),
                this.renderButtons(l, "end")
              )
            )
          )
        );
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { isOpen: ["onIsOpenChange"], trigger: ["triggerChanged"] };
      }
      static get style() {
        return { ios: MT, md: BT };
      }
    },
    [
      33,
      "ion-toast",
      {
        overlayIndex: [2, "overlay-index"],
        delegate: [16],
        hasController: [4, "has-controller"],
        color: [513],
        enterAnimation: [16],
        leaveAnimation: [16],
        cssClass: [1, "css-class"],
        duration: [2],
        header: [1],
        layout: [1],
        message: [1],
        keyboardClose: [4, "keyboard-close"],
        position: [1],
        buttons: [16],
        translucent: [4],
        animated: [4],
        icon: [1],
        htmlAttributes: [16],
        isOpen: [4, "is-open"],
        trigger: [1],
        revealContentToScreenReader: [32],
        present: [64],
        dismiss: [64],
        onDidDismiss: [64],
        onWillDismiss: [64],
      },
    ]
  ),
  jT = (e) =>
    Object.assign(
      {
        "toast-button": !0,
        "toast-button-icon-only": e.icon !== void 0 && e.text === void 0,
        [`toast-button-${e.role}`]: e.role !== void 0,
        "ion-focusable": !0,
        "ion-activatable": !0,
      },
      yy(e.cssClass)
    );
function zT() {
  if (typeof customElements > "u") return;
  ["ion-toast", "ion-icon", "ion-ripple-effect"].forEach((t) => {
    switch (t) {
      case "ion-toast":
        customElements.get(t) || customElements.define(t, DT);
        break;
      case "ion-icon":
        customElements.get(t) || Jf();
        break;
      case "ion-ripple-effect":
        customElements.get(t) || eh();
        break;
    }
  });
}
const FT = zT;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ var Nm;
(function (e) {
  (e.Dark = "DARK"), (e.Light = "LIGHT"), (e.Default = "DEFAULT");
})(Nm || (Nm = {}));
const NT =
    "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}",
  HT = Ee(
    class extends Se {
      constructor() {
        super(), this.__registerHost();
      }
      componentDidLoad() {
        VT(async () => {
          const t = rn(window, "hybrid");
          if (
            (Y.getBoolean("_testing") ||
              ot(() => import("./index9-d26307a5.js"), []).then((i) =>
                i.startTapClick(Y)
              ),
            Y.getBoolean("statusTap", t) &&
              ot(() => import("./status-tap-5ef79428.js"), []).then((i) =>
                i.startStatusTap()
              ),
            Y.getBoolean("inputShims", UT()))
          ) {
            const i = rn(window, "ios") ? "ios" : "android";
            ot(() => import("./input-shims-365d24c1.js"), []).then((r) =>
              r.startInputShims(Y, i)
            );
          }
          const n = await ot(() => Promise.resolve().then(() => c$), void 0);
          Y.getBoolean("hardwareBackButton", t)
            ? n.startHardwareBackButton()
            : n.blockHardwareBackButton(),
            typeof window < "u" &&
              ot(() => import("./keyboard2-ef4faf1f.js"), []).then((i) =>
                i.startKeyboardAssist(window)
              ),
            ot(() => import("./focus-visible-9c13edeb.js"), []).then(
              (i) => (this.focusVisible = i.startFocusVisible())
            );
        });
      }
      async setFocus(t) {
        this.focusVisible && this.focusVisible.setFocus(t);
      }
      render() {
        const t = Q(this);
        return A(Te, {
          class: {
            [t]: !0,
            "ion-page": !0,
            "force-statusbar-padding": Y.getBoolean("_forceStatusbarPadding"),
          },
        });
      }
      get el() {
        return this;
      }
      static get style() {
        return NT;
      }
    },
    [0, "ion-app", { setFocus: [64] }]
  ),
  UT = () =>
    !!(
      (rn(window, "ios") && rn(window, "mobile")) ||
      (rn(window, "android") && rn(window, "mobileweb"))
    ),
  VT = (e) => {
    "requestIdleCallback" in window
      ? window.requestIdleCallback(e)
      : setTimeout(e, 32);
  };
function qT() {
  if (typeof customElements > "u") return;
  ["ion-app"].forEach((t) => {
    switch (t) {
      case "ion-app":
        customElements.get(t) || customElements.define(t, HT);
        break;
    }
  });
}
const WT = qT;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const YT =
    ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--icon-margin-end:1px;--icon-margin-start:-4px;--icon-font-size:1.6em;--min-height:32px;font-size:17px}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}',
  GT =
    ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:24px;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:14px;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;height:48px}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0}ion-icon{line-height:0.67;text-align:start}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}',
  XT = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.inheritedAttributes = {}),
          (this.onClick = async (t) => {
            const n = this.el.closest("ion-nav");
            return (
              t.preventDefault(),
              n && (await n.canGoBack())
                ? n.pop({
                    animationBuilder: this.routerAnimation,
                    skipIfBusy: !0,
                  })
                : wy(this.defaultHref, t, "back", this.routerAnimation)
            );
          }),
          (this.color = void 0),
          (this.defaultHref = void 0),
          (this.disabled = !1),
          (this.icon = void 0),
          (this.text = void 0),
          (this.type = "button"),
          (this.routerAnimation = void 0);
      }
      componentWillLoad() {
        (this.inheritedAttributes = Q0(this.el)),
          this.defaultHref === void 0 &&
            (this.defaultHref = Y.get("backButtonDefaultHref"));
      }
      get backButtonIcon() {
        const t = this.icon;
        return t != null
          ? t
          : Q(this) === "ios"
          ? Y.get("backButtonIcon", _$)
          : Y.get("backButtonIcon", R$);
      }
      get backButtonText() {
        const t = Q(this) === "ios" ? "Back" : null;
        return this.text != null ? this.text : Y.get("backButtonText", t);
      }
      get hasIconOnly() {
        return this.backButtonIcon && !this.backButtonText;
      }
      get rippleType() {
        return this.hasIconOnly ? "unbounded" : "bounded";
      }
      render() {
        const {
            color: t,
            defaultHref: n,
            disabled: i,
            type: r,
            hasIconOnly: o,
            backButtonIcon: s,
            backButtonText: a,
            icon: l,
            inheritedAttributes: c,
          } = this,
          u = n !== void 0,
          d = Q(this),
          f = c["aria-label"] || a || "back";
        return A(
          Te,
          {
            onClick: this.onClick,
            class: an(t, {
              [d]: !0,
              button: !0,
              "back-button-disabled": i,
              "back-button-has-icon-only": o,
              "in-toolbar": ki("ion-toolbar", this.el),
              "in-toolbar-color": ki("ion-toolbar[color]", this.el),
              "ion-activatable": !0,
              "ion-focusable": !0,
              "show-back-button": u,
            }),
          },
          A(
            "button",
            {
              type: r,
              disabled: i,
              class: "button-native",
              part: "native",
              "aria-label": f,
            },
            A(
              "span",
              { class: "button-inner" },
              s &&
                A("ion-icon", {
                  part: "icon",
                  icon: s,
                  "aria-hidden": "true",
                  lazy: !1,
                  "flip-rtl": l === void 0,
                }),
              a &&
                A(
                  "span",
                  { part: "text", "aria-hidden": "true", class: "button-text" },
                  a
                )
            ),
            d === "md" && A("ion-ripple-effect", { type: this.rippleType })
          )
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return { ios: YT, md: GT };
      }
    },
    [
      33,
      "ion-back-button",
      {
        color: [513],
        defaultHref: [1025, "default-href"],
        disabled: [516],
        icon: [1],
        text: [1],
        type: [1],
        routerAnimation: [16],
      },
    ]
  );
function KT() {
  if (typeof customElements > "u") return;
  ["ion-back-button", "ion-icon", "ion-ripple-effect"].forEach((t) => {
    switch (t) {
      case "ion-back-button":
        customElements.get(t) || customElements.define(t, XT);
        break;
      case "ion-icon":
        customElements.get(t) || Jf();
        break;
      case "ion-ripple-effect":
        customElements.get(t) || eh();
        break;
    }
  });
}
const QT = KT,
  ZT =
    ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}",
  JT = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionNavWillLoad = fe(this, "ionNavWillLoad", 7)),
          (this.ionNavWillChange = fe(this, "ionNavWillChange", 3)),
          (this.ionNavDidChange = fe(this, "ionNavDidChange", 3)),
          (this.gestureOrAnimationInProgress = !1),
          (this.mode = Q(this)),
          (this.delegate = void 0),
          (this.animated = !0),
          (this.animation = void 0),
          (this.swipeHandler = void 0);
      }
      swipeHandlerChanged() {
        this.gesture && this.gesture.enable(this.swipeHandler !== void 0);
      }
      async connectedCallback() {
        const t = () => {
          (this.gestureOrAnimationInProgress = !0),
            this.swipeHandler && this.swipeHandler.onStart();
        };
        (this.gesture = (
          await ot(
            () => import("./swipe-back-58838942.js"),
            ["assets/swipe-back-58838942.js", "assets/index2-aa4949dd.js"]
          )
        ).createSwipeBackGesture(
          this.el,
          () =>
            !this.gestureOrAnimationInProgress &&
            !!this.swipeHandler &&
            this.swipeHandler.canStart(),
          () => t(),
          (n) => {
            var i;
            return (i = this.ani) === null || i === void 0
              ? void 0
              : i.progressStep(n);
          },
          (n, i, r) => {
            if (this.ani) {
              this.ani.onFinish(
                () => {
                  (this.gestureOrAnimationInProgress = !1),
                    this.swipeHandler && this.swipeHandler.onEnd(n);
                },
                { oneTimeCallback: !0 }
              );
              let o = n ? -0.001 : 0.001;
              n
                ? (o += _o([0, 0], [0.32, 0.72], [0, 1], [1, 1], i)[0])
                : (this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),
                  (o += _o([0, 0], [1, 0], [0.68, 0.28], [1, 1], i)[0])),
                this.ani.progressEnd(n ? 1 : 0, o, r);
            } else this.gestureOrAnimationInProgress = !1;
          }
        )),
          this.swipeHandlerChanged();
      }
      componentWillLoad() {
        this.ionNavWillLoad.emit();
      }
      disconnectedCallback() {
        this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
      }
      async commit(t, n, i) {
        const r = await this.lock();
        let o = !1;
        try {
          o = await this.transition(t, n, i);
        } catch (s) {
          console.error(s);
        }
        return r(), o;
      }
      async setRouteId(t, n, i, r) {
        return {
          changed: await this.setRoot(t, n, {
            duration: i === "root" ? 0 : void 0,
            direction: i === "back" ? "back" : "forward",
            animationBuilder: r,
          }),
          element: this.activeEl,
        };
      }
      async getRouteId() {
        const t = this.activeEl;
        return t
          ? { id: t.tagName, element: t, params: this.activeParams }
          : void 0;
      }
      async setRoot(t, n, i) {
        if (this.activeComponent === t && Z0(n, this.activeParams)) return !1;
        const r = this.activeEl,
          o = await hy(
            this.delegate,
            this.el,
            t,
            ["ion-page", "ion-page-invisible"],
            n
          );
        return (
          (this.activeComponent = t),
          (this.activeEl = o),
          (this.activeParams = n),
          await this.commit(o, r, i),
          await u$(this.delegate, r),
          !0
        );
      }
      async transition(t, n, i = {}) {
        if (n === t) return !1;
        this.ionNavWillChange.emit();
        const { el: r, mode: o } = this,
          s = this.animated && Y.getBoolean("animated", !0),
          a = i.animationBuilder || this.animation || Y.get("navAnimation");
        return (
          await ty(
            Object.assign(
              Object.assign(
                {
                  mode: o,
                  animated: s,
                  enteringEl: t,
                  leavingEl: n,
                  baseEl: r,
                  deepWait: uC(r),
                  progressCallback: i.progressAnimation
                    ? (l) => {
                        l !== void 0 && !this.gestureOrAnimationInProgress
                          ? ((this.gestureOrAnimationInProgress = !0),
                            l.onFinish(
                              () => {
                                (this.gestureOrAnimationInProgress = !1),
                                  this.swipeHandler &&
                                    this.swipeHandler.onEnd(!1);
                              },
                              { oneTimeCallback: !0 }
                            ),
                            l.progressEnd(0, 0, 0))
                          : (this.ani = l);
                      }
                    : void 0,
                },
                i
              ),
              { animationBuilder: a }
            )
          ),
          this.ionNavDidChange.emit(),
          !0
        );
      }
      async lock() {
        const t = this.waitPromise;
        let n;
        return (
          (this.waitPromise = new Promise((i) => (n = i))),
          t !== void 0 && (await t),
          n
        );
      }
      render() {
        return A("slot", null);
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { swipeHandler: ["swipeHandlerChanged"] };
      }
      static get style() {
        return ZT;
      }
    },
    [
      1,
      "ion-router-outlet",
      {
        mode: [1025],
        delegate: [16],
        animated: [4],
        animation: [16],
        swipeHandler: [16],
        commit: [64],
        setRouteId: [64],
        getRouteId: [64],
      },
    ]
  );
function eA() {
  if (typeof customElements > "u") return;
  ["ion-router-outlet"].forEach((t) => {
    switch (t) {
      case "ion-router-outlet":
        customElements.get(t) || customElements.define(t, JT);
        break;
    }
  });
}
const tA = eA;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const nA =
    ":host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}",
  iA =
    ":host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, #595959));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}",
  rA = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionTabBarChanged = fe(this, "ionTabBarChanged", 7)),
          (this.keyboardCtrl = null),
          (this.keyboardVisible = !1),
          (this.color = void 0),
          (this.selectedTab = void 0),
          (this.translucent = !1);
      }
      selectedTabChanged() {
        this.selectedTab !== void 0 &&
          this.ionTabBarChanged.emit({ tab: this.selectedTab });
      }
      componentWillLoad() {
        this.selectedTabChanged();
      }
      async connectedCallback() {
        this.keyboardCtrl = await AP(async (t, n) => {
          t === !1 && n !== void 0 && (await n), (this.keyboardVisible = t);
        });
      }
      disconnectedCallback() {
        this.keyboardCtrl && this.keyboardCtrl.destroy();
      }
      render() {
        const { color: t, translucent: n, keyboardVisible: i } = this,
          r = Q(this),
          o = i && this.el.getAttribute("slot") !== "top";
        return A(
          Te,
          {
            role: "tablist",
            "aria-hidden": o ? "true" : null,
            class: an(t, {
              [r]: !0,
              "tab-bar-translucent": n,
              "tab-bar-hidden": o,
            }),
          },
          A("slot", null)
        );
      }
      get el() {
        return this;
      }
      static get watchers() {
        return { selectedTab: ["selectedTabChanged"] };
      }
      static get style() {
        return { ios: nA, md: iA };
      }
    },
    [
      33,
      "ion-tab-bar",
      {
        color: [513],
        selectedTab: [1, "selected-tab"],
        translucent: [4],
        keyboardVisible: [32],
      },
    ]
  );
function oA() {
  if (typeof customElements > "u") return;
  ["ion-tab-bar"].forEach((t) => {
    switch (t) {
      case "ion-tab-bar":
        customElements.get(t) || customElements.define(t, rA);
        break;
    }
  });
}
const sA = oA;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const aA =
    ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:30px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 12px)}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:calc(50% + 35px)}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start) ::slotted(ion-badge):dir(rtl),:host(.tab-layout-icon-end) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 35px)}}}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:calc(50% + 30px)}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide) ::slotted(ion-badge):dir(rtl),:host(.tab-has-label-only) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 30px)}}}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}',
  lA =
    ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:80%}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:80%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start) ::slotted(ion-badge):dir(rtl),:host(.tab-layout-icon-end) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:80%}}}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide) ::slotted(ion-badge):dir(rtl),:host(.tab-has-label-only) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}',
  cA = Ee(
    class extends Se {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.ionTabButtonClick = fe(this, "ionTabButtonClick", 7)),
          (this.inheritedAttributes = {}),
          (this.onKeyUp = (t) => {
            (t.key === "Enter" || t.key === " ") && this.selectTab(t);
          }),
          (this.onClick = (t) => {
            this.selectTab(t);
          }),
          (this.disabled = !1),
          (this.download = void 0),
          (this.href = void 0),
          (this.rel = void 0),
          (this.layout = void 0),
          (this.selected = !1),
          (this.tab = void 0),
          (this.target = void 0);
      }
      onTabBarChanged(t) {
        const n = t.target,
          i = this.el.parentElement;
        (t.composedPath().includes(i) || (n != null && n.contains(this.el))) &&
          (this.selected = this.tab === t.detail.tab);
      }
      componentWillLoad() {
        (this.inheritedAttributes = Object.assign(
          {},
          Kf(this.el, ["aria-label"])
        )),
          this.layout === void 0 &&
            (this.layout = Y.get("tabButtonLayout", "icon-top"));
      }
      selectTab(t) {
        this.tab !== void 0 &&
          (this.disabled ||
            this.ionTabButtonClick.emit({
              tab: this.tab,
              href: this.href,
              selected: this.selected,
            }),
          t.preventDefault());
      }
      get hasLabel() {
        return !!this.el.querySelector("ion-label");
      }
      get hasIcon() {
        return !!this.el.querySelector("ion-icon");
      }
      render() {
        const {
            disabled: t,
            hasIcon: n,
            hasLabel: i,
            href: r,
            rel: o,
            target: s,
            layout: a,
            selected: l,
            tab: c,
            inheritedAttributes: u,
          } = this,
          d = Q(this),
          f = { download: this.download, href: r, rel: o, target: s };
        return A(
          Te,
          {
            onClick: this.onClick,
            onKeyup: this.onKeyUp,
            id: c !== void 0 ? `tab-button-${c}` : null,
            class: {
              [d]: !0,
              "tab-selected": l,
              "tab-disabled": t,
              "tab-has-label": i,
              "tab-has-icon": n,
              "tab-has-label-only": i && !n,
              "tab-has-icon-only": n && !i,
              [`tab-layout-${a}`]: !0,
              "ion-activatable": !0,
              "ion-selectable": !0,
              "ion-focusable": !0,
            },
          },
          A(
            "a",
            Object.assign(
              {},
              f,
              {
                class: "button-native",
                part: "native",
                role: "tab",
                "aria-selected": l ? "true" : null,
                "aria-disabled": t ? "true" : null,
                tabindex: t ? "-1" : void 0,
              },
              u
            ),
            A("span", { class: "button-inner" }, A("slot", null)),
            d === "md" && A("ion-ripple-effect", { type: "unbounded" })
          )
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return { ios: aA, md: lA };
      }
    },
    [
      33,
      "ion-tab-button",
      {
        disabled: [4],
        download: [1],
        href: [1],
        rel: [1],
        layout: [1025],
        selected: [1028],
        tab: [1],
        target: [1],
      },
      [[8, "ionTabBarChanged", "onTabBarChanged"]],
    ]
  );
function uA() {
  if (typeof customElements > "u") return;
  ["ion-tab-button", "ion-ripple-effect"].forEach((t) => {
    switch (t) {
      case "ion-tab-button":
        customElements.get(t) || customElements.define(t, cA);
        break;
      case "ion-ripple-effect":
        customElements.get(t) || eh();
        break;
    }
  });
}
const dA = uA,
  Ni = {
    allRenderFn: !1,
    cmpDidLoad: !0,
    cmpDidUnload: !1,
    cmpDidUpdate: !0,
    cmpDidRender: !0,
    cmpWillLoad: !0,
    cmpWillUpdate: !0,
    cmpWillRender: !0,
    connectedCallback: !0,
    disconnectedCallback: !0,
    element: !0,
    event: !0,
    hasRenderFn: !0,
    lifecycle: !0,
    hostListener: !0,
    hostListenerTargetWindow: !0,
    hostListenerTargetDocument: !0,
    hostListenerTargetBody: !0,
    hostListenerTargetParent: !1,
    hostListenerTarget: !0,
    member: !0,
    method: !0,
    mode: !0,
    observeAttribute: !0,
    prop: !0,
    propMutable: !0,
    reflect: !0,
    scoped: !0,
    shadowDom: !0,
    slot: !0,
    cssAnnotations: !0,
    state: !0,
    style: !0,
    svg: !0,
    updatable: !0,
    vdomAttribute: !0,
    vdomXlink: !0,
    vdomClass: !0,
    vdomFunctional: !0,
    vdomKey: !0,
    vdomListener: !0,
    vdomRef: !0,
    vdomPropOrAttr: !0,
    vdomRender: !0,
    vdomStyle: !0,
    vdomText: !0,
    watchCallback: !0,
    taskQueue: !0,
    hotModuleReplacement: !1,
    isDebug: !1,
    isDev: !1,
    isTesting: !1,
    hydrateServerSide: !1,
    hydrateClientSide: !1,
    lifecycleDOMEvents: !1,
    lazyLoad: !1,
    profile: !1,
    slotRelocation: !0,
    appendChildSlotFix: !1,
    cloneNodeFix: !1,
    hydratedAttribute: !1,
    hydratedClass: !0,
    safari10: !1,
    scriptDataOpts: !1,
    scopedSlotTextContentFix: !1,
    shadowDomShim: !1,
    slotChildNodesFix: !1,
    invisiblePrehydration: !0,
    propBoolean: !0,
    propNumber: !0,
    propString: !0,
    cssVarShim: !1,
    constructableCSS: !0,
    cmpShouldUpdate: !0,
    devTools: !1,
    dynamicImportShim: !1,
    shadowDelegatesFocus: !0,
    initializeNextTick: !1,
    asyncLoading: !1,
    asyncQueue: !1,
    transformTagName: !1,
    attachStyles: !0,
  };
let Hi,
  Py,
  El,
  Ty = !1,
  Pa = !1,
  rh = !1,
  bt = !1,
  Hm = null,
  gd = !1;
const fA = (e) => {
    const t = new URL(e, Qe.$resourcesUrl$);
    return t.origin !== Xo.location.origin ? t.href : t.pathname;
  },
  Ei =
    (e, t = "") =>
    () => {},
  Um = "http://www.w3.org/1999/xlink",
  Vm = {},
  hA = "http://www.w3.org/2000/svg",
  pA = "http://www.w3.org/1999/xhtml",
  mA = (e) => e != null,
  oh = (e) => ((e = typeof e), e === "object" || e === "function");
function gA(e) {
  var t, n, i;
  return (i =
    (n =
      (t = e.head) === null || t === void 0
        ? void 0
        : t.querySelector('meta[name="csp-nonce"]')) === null || n === void 0
      ? void 0
      : n.getAttribute("content")) !== null && i !== void 0
    ? i
    : void 0;
}
const po = (e, t, ...n) => {
    let i = null,
      r = null,
      o = null,
      s = !1,
      a = !1;
    const l = [],
      c = (d) => {
        for (let f = 0; f < d.length; f++)
          (i = d[f]),
            Array.isArray(i)
              ? c(i)
              : i != null &&
                typeof i != "boolean" &&
                ((s = typeof e != "function" && !oh(i)) && (i = String(i)),
                s && a
                  ? (l[l.length - 1].$text$ += i)
                  : l.push(s ? Ta(null, i) : i),
                (a = s));
      };
    if ((c(n), t)) {
      t.key && (r = t.key), t.name && (o = t.name);
      {
        const d = t.className || t.class;
        d &&
          (t.class =
            typeof d != "object"
              ? d
              : Object.keys(d)
                  .filter((f) => d[f])
                  .join(" "));
      }
    }
    if (typeof e == "function") return e(t === null ? {} : t, l, bA);
    const u = Ta(e, null);
    return (
      (u.$attrs$ = t),
      l.length > 0 && (u.$children$ = l),
      (u.$key$ = r),
      (u.$name$ = o),
      u
    );
  },
  Ta = (e, t) => {
    const n = {
      $flags$: 0,
      $tag$: e,
      $text$: t,
      $elm$: null,
      $children$: null,
    };
    return (n.$attrs$ = null), (n.$key$ = null), (n.$name$ = null), n;
  },
  Ay = {},
  vA = (e) => e && e.$tag$ === Ay,
  bA = {
    forEach: (e, t) => e.map(qm).forEach(t),
    map: (e, t) => e.map(qm).map(t).map(yA),
  },
  qm = (e) => ({
    vattrs: e.$attrs$,
    vchildren: e.$children$,
    vkey: e.$key$,
    vname: e.$name$,
    vtag: e.$tag$,
    vtext: e.$text$,
  }),
  yA = (e) => {
    if (typeof e.vtag == "function") {
      const n = Object.assign({}, e.vattrs);
      return (
        e.vkey && (n.key = e.vkey),
        e.vname && (n.name = e.vname),
        po(e.vtag, n, ...(e.vchildren || []))
      );
    }
    const t = Ta(e.vtag, e.vtext);
    return (
      (t.$attrs$ = e.vattrs),
      (t.$children$ = e.vchildren),
      (t.$key$ = e.vkey),
      (t.$name$ = e.vname),
      t
    );
  },
  wA = (e) => WA.map((t) => t(e)).find((t) => !!t),
  xA = (e, t) =>
    e != null && !oh(e)
      ? t & 4
        ? e === "false"
          ? !1
          : e === "" || !!e
        : t & 2
        ? parseFloat(e)
        : t & 1
        ? String(e)
        : e
      : e,
  Wm = new WeakMap(),
  kA = (e, t, n) => {
    let i = Oa.get(e);
    KA && n
      ? ((i = i || new CSSStyleSheet()),
        typeof i == "string" ? (i = t) : i.replaceSync(t))
      : (i = t),
      Oa.set(e, i);
  },
  EA = (e, t, n, i) => {
    var r;
    let o = Oy(t, n);
    const s = Oa.get(o);
    if (((e = e.nodeType === 11 ? e : Yt), s))
      if (typeof s == "string") {
        e = e.head || e;
        let a = Wm.get(e),
          l;
        if ((a || Wm.set(e, (a = new Set())), !a.has(o))) {
          {
            (l = Yt.createElement("style")), (l.innerHTML = s);
            const c = (r = Qe.$nonce$) !== null && r !== void 0 ? r : gA(Yt);
            c != null && l.setAttribute("nonce", c),
              e.insertBefore(l, e.querySelector("link"));
          }
          a && a.add(o);
        }
      } else
        e.adoptedStyleSheets.includes(s) ||
          (e.adoptedStyleSheets = [...e.adoptedStyleSheets, s]);
    return o;
  },
  SA = (e) => {
    const t = e.$cmpMeta$,
      n = e.$hostElement$,
      i = t.$flags$,
      r = Ei("attachStyles", t.$tagName$),
      o = EA(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
    i & 10 &&
      ((n["s-sc"] = o),
      n.classList.add(o + "-h"),
      i & 2 && n.classList.add(o + "-s")),
      r();
  },
  Oy = (e, t) =>
    "sc-" + (t && e.$flags$ & 32 ? e.$tagName$ + "-" + t : e.$tagName$),
  Ym = (e, t, n, i, r, o) => {
    if (n !== i) {
      let s = Qm(e, t),
        a = t.toLowerCase();
      if (t === "class") {
        const l = e.classList,
          c = Gm(n),
          u = Gm(i);
        l.remove(...c.filter((d) => d && !u.includes(d))),
          l.add(...u.filter((d) => d && !c.includes(d)));
      } else if (t === "style") {
        for (const l in n)
          (!i || i[l] == null) &&
            (l.includes("-") ? e.style.removeProperty(l) : (e.style[l] = ""));
        for (const l in i)
          (!n || i[l] !== n[l]) &&
            (l.includes("-")
              ? e.style.setProperty(l, i[l])
              : (e.style[l] = i[l]));
      } else if (t !== "key")
        if (t === "ref") i && i(e);
        else if (!e.__lookupSetter__(t) && t[0] === "o" && t[1] === "n")
          t[2] === "-"
            ? (t = t.slice(3))
            : Qm(Xo, a)
            ? (t = a.slice(2))
            : (t = a[2] + t.slice(3)),
            n && Qe.rel(e, t, n, !1),
            i && Qe.ael(e, t, i, !1);
        else {
          const l = oh(i);
          if ((s || (l && i !== null)) && !r)
            try {
              if (e.tagName.includes("-")) e[t] = i;
              else {
                const u = i == null ? "" : i;
                t === "list"
                  ? (s = !1)
                  : (n == null || e[t] != u) && (e[t] = u);
              }
            } catch (u) {}
          let c = !1;
          a !== (a = a.replace(/^xlink\:?/, "")) && ((t = a), (c = !0)),
            i == null || i === !1
              ? (i !== !1 || e.getAttribute(t) === "") &&
                (c ? e.removeAttributeNS(Um, t) : e.removeAttribute(t))
              : (!s || o & 4 || r) &&
                !l &&
                ((i = i === !0 ? "" : i),
                c ? e.setAttributeNS(Um, t, i) : e.setAttribute(t, i));
        }
    }
  },
  CA = /\s/,
  Gm = (e) => (e ? e.split(CA) : []),
  Ry = (e, t, n, i) => {
    const r = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
      o = (e && e.$attrs$) || Vm,
      s = t.$attrs$ || Vm;
    for (i in o) i in s || Ym(r, i, o[i], void 0, n, t.$flags$);
    for (i in s) Ym(r, i, o[i], s[i], n, t.$flags$);
  },
  Aa = (e, t, n, i) => {
    const r = t.$children$[n];
    let o = 0,
      s,
      a,
      l;
    if (
      (Ty ||
        ((rh = !0),
        r.$tag$ === "slot" &&
          (Hi && i.classList.add(Hi + "-s"),
          (r.$flags$ |= r.$children$ ? 2 : 1))),
      r.$text$ !== null)
    )
      s = r.$elm$ = Yt.createTextNode(r.$text$);
    else if (r.$flags$ & 1) s = r.$elm$ = Yt.createTextNode("");
    else {
      if (
        (bt || (bt = r.$tag$ === "svg"),
        (s = r.$elm$ =
          Yt.createElementNS(
            bt ? hA : pA,
            r.$flags$ & 2 ? "slot-fb" : r.$tag$
          )),
        bt && r.$tag$ === "foreignObject" && (bt = !1),
        Ry(null, r, bt),
        mA(Hi) && s["s-si"] !== Hi && s.classList.add((s["s-si"] = Hi)),
        r.$children$)
      )
        for (o = 0; o < r.$children$.length; ++o)
          (a = Aa(e, r, o, s)), a && s.appendChild(a);
      r.$tag$ === "svg"
        ? (bt = !1)
        : s.tagName === "foreignObject" && (bt = !0);
    }
    return (
      (s["s-hn"] = El),
      r.$flags$ & 3 &&
        ((s["s-sr"] = !0),
        (s["s-cr"] = Py),
        (s["s-sn"] = r.$name$ || ""),
        (l = e && e.$children$ && e.$children$[n]),
        l && l.$tag$ === r.$tag$ && e.$elm$ && Bo(e.$elm$, !1)),
      s
    );
  },
  Bo = (e, t) => {
    Qe.$flags$ |= 1;
    const n = e.childNodes;
    for (let i = n.length - 1; i >= 0; i--) {
      const r = n[i];
      r["s-hn"] !== El &&
        r["s-ol"] &&
        (_y(r).insertBefore(r, sh(r)),
        r["s-ol"].remove(),
        (r["s-ol"] = void 0),
        (rh = !0)),
        t && Bo(r, t);
    }
    Qe.$flags$ &= -2;
  },
  Iy = (e, t, n, i, r, o) => {
    let s = (e["s-cr"] && e["s-cr"].parentNode) || e,
      a;
    for (s.shadowRoot && s.tagName === El && (s = s.shadowRoot); r <= o; ++r)
      i[r] &&
        ((a = Aa(null, n, r, e)),
        a && ((i[r].$elm$ = a), s.insertBefore(a, sh(t))));
  },
  Ly = (e, t, n, i, r) => {
    for (; t <= n; ++t)
      (i = e[t]) &&
        ((r = i.$elm$),
        Dy(i),
        (Pa = !0),
        r["s-ol"] ? r["s-ol"].remove() : Bo(r, !0),
        r.remove());
  },
  $A = (e, t, n, i) => {
    let r = 0,
      o = 0,
      s = 0,
      a = 0,
      l = t.length - 1,
      c = t[0],
      u = t[l],
      d = i.length - 1,
      f = i[0],
      h = i[d],
      m,
      b;
    for (; r <= l && o <= d; )
      if (c == null) c = t[++r];
      else if (u == null) u = t[--l];
      else if (f == null) f = i[++o];
      else if (h == null) h = i[--d];
      else if (Es(c, f)) Ui(c, f), (c = t[++r]), (f = i[++o]);
      else if (Es(u, h)) Ui(u, h), (u = t[--l]), (h = i[--d]);
      else if (Es(c, h))
        (c.$tag$ === "slot" || h.$tag$ === "slot") &&
          Bo(c.$elm$.parentNode, !1),
          Ui(c, h),
          e.insertBefore(c.$elm$, u.$elm$.nextSibling),
          (c = t[++r]),
          (h = i[--d]);
      else if (Es(u, f))
        (c.$tag$ === "slot" || h.$tag$ === "slot") &&
          Bo(u.$elm$.parentNode, !1),
          Ui(u, f),
          e.insertBefore(u.$elm$, c.$elm$),
          (u = t[--l]),
          (f = i[++o]);
      else {
        for (s = -1, a = r; a <= l; ++a)
          if (t[a] && t[a].$key$ !== null && t[a].$key$ === f.$key$) {
            s = a;
            break;
          }
        s >= 0
          ? ((b = t[s]),
            b.$tag$ !== f.$tag$
              ? (m = Aa(t && t[o], n, s, e))
              : (Ui(b, f), (t[s] = void 0), (m = b.$elm$)),
            (f = i[++o]))
          : ((m = Aa(t && t[o], n, o, e)), (f = i[++o])),
          m && _y(c.$elm$).insertBefore(m, sh(c.$elm$));
      }
    r > l
      ? Iy(e, i[d + 1] == null ? null : i[d + 1].$elm$, n, i, o, d)
      : o > d && Ly(t, r, l);
  },
  Es = (e, t) =>
    e.$tag$ === t.$tag$
      ? e.$tag$ === "slot"
        ? e.$name$ === t.$name$
        : e.$key$ === t.$key$
      : !1,
  sh = (e) => (e && e["s-ol"]) || e,
  _y = (e) => (e["s-ol"] ? e["s-ol"] : e).parentNode,
  Ui = (e, t) => {
    const n = (t.$elm$ = e.$elm$),
      i = e.$children$,
      r = t.$children$,
      o = t.$tag$,
      s = t.$text$;
    let a;
    s === null
      ? ((bt = o === "svg" ? !0 : o === "foreignObject" ? !1 : bt),
        o === "slot" || Ry(e, t, bt),
        i !== null && r !== null
          ? $A(n, i, t, r)
          : r !== null
          ? (e.$text$ !== null && (n.textContent = ""),
            Iy(n, null, t, r, 0, r.length - 1))
          : i !== null && Ly(i, 0, i.length - 1),
        bt && o === "svg" && (bt = !1))
      : (a = n["s-cr"])
      ? (a.parentNode.textContent = s)
      : e.$text$ !== s && (n.data = s);
  },
  My = (e) => {
    const t = e.childNodes;
    let n, i, r, o, s, a;
    for (i = 0, r = t.length; i < r; i++)
      if (((n = t[i]), n.nodeType === 1)) {
        if (n["s-sr"]) {
          for (s = n["s-sn"], n.hidden = !1, o = 0; o < r; o++)
            if (((a = t[o].nodeType), t[o]["s-hn"] !== n["s-hn"] || s !== "")) {
              if (a === 1 && s === t[o].getAttribute("slot")) {
                n.hidden = !0;
                break;
              }
            } else if (a === 1 || (a === 3 && t[o].textContent.trim() !== "")) {
              n.hidden = !0;
              break;
            }
        }
        My(n);
      }
  },
  Ut = [],
  By = (e) => {
    let t,
      n,
      i,
      r,
      o,
      s,
      a = 0;
    const l = e.childNodes,
      c = l.length;
    for (; a < c; a++) {
      if (((t = l[a]), t["s-sr"] && (n = t["s-cr"]) && n.parentNode))
        for (
          i = n.parentNode.childNodes, r = t["s-sn"], s = i.length - 1;
          s >= 0;
          s--
        )
          (n = i[s]),
            !n["s-cn"] &&
              !n["s-nr"] &&
              n["s-hn"] !== t["s-hn"] &&
              (Xm(n, r)
                ? ((o = Ut.find((u) => u.$nodeToRelocate$ === n)),
                  (Pa = !0),
                  (n["s-sn"] = n["s-sn"] || r),
                  o
                    ? (o.$slotRefNode$ = t)
                    : Ut.push({ $slotRefNode$: t, $nodeToRelocate$: n }),
                  n["s-sr"] &&
                    Ut.map((u) => {
                      Xm(u.$nodeToRelocate$, n["s-sn"]) &&
                        ((o = Ut.find((d) => d.$nodeToRelocate$ === n)),
                        o &&
                          !u.$slotRefNode$ &&
                          (u.$slotRefNode$ = o.$slotRefNode$));
                    }))
                : Ut.some((u) => u.$nodeToRelocate$ === n) ||
                  Ut.push({ $nodeToRelocate$: n }));
      t.nodeType === 1 && By(t);
    }
  },
  Xm = (e, t) =>
    e.nodeType === 1
      ? (e.getAttribute("slot") === null && t === "") ||
        e.getAttribute("slot") === t
      : e["s-sn"] === t
      ? !0
      : t === "",
  Dy = (e) => {
    e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null),
      e.$children$ && e.$children$.map(Dy);
  },
  PA = (e, t) => {
    const n = e.$hostElement$,
      i = e.$cmpMeta$,
      r = e.$vnode$ || Ta(null, null),
      o = vA(t) ? t : po(null, null, t);
    (El = n.tagName),
      i.$attrsToReflect$ &&
        ((o.$attrs$ = o.$attrs$ || {}),
        i.$attrsToReflect$.map(([s, a]) => (o.$attrs$[a] = n[s]))),
      (o.$tag$ = null),
      (o.$flags$ |= 4),
      (e.$vnode$ = o),
      (o.$elm$ = r.$elm$ = n.shadowRoot || n),
      (Hi = n["s-sc"]),
      (Py = n["s-cr"]),
      (Ty = (i.$flags$ & 1) !== 0),
      (Pa = !1),
      Ui(r, o);
    {
      if (((Qe.$flags$ |= 1), rh)) {
        By(o.$elm$);
        let s,
          a,
          l,
          c,
          u,
          d,
          f = 0;
        for (; f < Ut.length; f++)
          (s = Ut[f]),
            (a = s.$nodeToRelocate$),
            a["s-ol"] ||
              ((l = Yt.createTextNode("")),
              (l["s-nr"] = a),
              a.parentNode.insertBefore((a["s-ol"] = l), a));
        for (f = 0; f < Ut.length; f++)
          if (((s = Ut[f]), (a = s.$nodeToRelocate$), s.$slotRefNode$)) {
            for (
              c = s.$slotRefNode$.parentNode,
                u = s.$slotRefNode$.nextSibling,
                l = a["s-ol"];
              (l = l.previousSibling);

            )
              if (
                ((d = l["s-nr"]),
                d &&
                  d["s-sn"] === a["s-sn"] &&
                  c === d.parentNode &&
                  ((d = d.nextSibling), !d || !d["s-nr"]))
              ) {
                u = d;
                break;
              }
            ((!u && c !== a.parentNode) || a.nextSibling !== u) &&
              a !== u &&
              (!a["s-hn"] &&
                a["s-ol"] &&
                (a["s-hn"] = a["s-ol"].parentNode.nodeName),
              c.insertBefore(a, u));
          } else a.nodeType === 1 && (a.hidden = !0);
      }
      Pa && My(o.$elm$), (Qe.$flags$ &= -2), (Ut.length = 0);
    }
  },
  TA = (e, t) => {},
  jy = (e, t) => (
    (e.$flags$ |= 16), TA(e, e.$ancestorComponent$), JA(() => AA(e, t))
  ),
  AA = (e, t) => {
    const n = e.$hostElement$,
      i = Ei("scheduleUpdate", e.$cmpMeta$.$tagName$),
      r = n;
    let o;
    return (
      t ? (o = dr(r, "componentWillLoad")) : (o = dr(r, "componentWillUpdate")),
      (o = Km(o, () => dr(r, "componentWillRender"))),
      i(),
      Km(o, () => OA(e, r, t))
    );
  },
  OA = async (e, t, n) => {
    const i = e.$hostElement$,
      r = Ei("update", e.$cmpMeta$.$tagName$);
    i["s-rc"], n && SA(e);
    const o = Ei("render", e.$cmpMeta$.$tagName$);
    RA(e, t, i), o(), r(), IA(e);
  },
  RA = (e, t, n) => {
    try {
      (Hm = t),
        (t = t.render && t.render()),
        (e.$flags$ &= -17),
        (e.$flags$ |= 2),
        (Ni.hasRenderFn || Ni.reflect) &&
          (Ni.vdomRender || Ni.reflect) &&
          (Ni.hydrateServerSide || PA(e, t));
    } catch (a) {
      Go(a, e.$hostElement$);
    }
    return (Hm = null), null;
  },
  IA = (e) => {
    const t = e.$cmpMeta$.$tagName$,
      n = e.$hostElement$,
      i = Ei("postUpdate", t),
      r = n;
    e.$ancestorComponent$,
      dr(r, "componentDidRender"),
      e.$flags$ & 64
        ? (dr(r, "componentDidUpdate"), i())
        : ((e.$flags$ |= 64), dr(r, "componentDidLoad"), i());
  },
  dr = (e, t, n) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (i) {
        Go(i);
      }
  },
  Km = (e, t) => (e && e.then ? e.then(t) : t()),
  LA = (e, t) => Sl(e).$instanceValues$.get(t),
  _A = (e, t, n, i) => {
    const r = Sl(e),
      o = e,
      s = r.$instanceValues$.get(t),
      a = r.$flags$,
      l = o;
    n = xA(n, i.$members$[t][0]);
    const c = Number.isNaN(s) && Number.isNaN(n);
    if (n !== s && !c) {
      r.$instanceValues$.set(t, n);
      {
        if (i.$watchers$ && a & 128) {
          const d = i.$watchers$[t];
          d &&
            d.map((f) => {
              try {
                l[f](n, s, t);
              } catch (h) {
                Go(h, o);
              }
            });
        }
        if ((a & 18) === 2) {
          if (
            l.componentShouldUpdate &&
            l.componentShouldUpdate(n, s, t) === !1
          )
            return;
          jy(r, !1);
        }
      }
    }
  },
  MA = (e, t, n) => {
    if (t.$members$) {
      e.watchers && (t.$watchers$ = e.watchers);
      const i = Object.entries(t.$members$),
        r = e.prototype;
      i.map(([o, [s]]) => {
        (s & 31 || s & 32) &&
          Object.defineProperty(r, o, {
            get() {
              return LA(this, o);
            },
            set(a) {
              _A(this, o, a, t);
            },
            configurable: !0,
            enumerable: !0,
          });
      });
      {
        const o = new Map();
        (r.attributeChangedCallback = function (s, a, l) {
          Qe.jmp(() => {
            const c = o.get(s);
            if (this.hasOwnProperty(c)) (l = this[c]), delete this[c];
            else if (
              r.hasOwnProperty(c) &&
              typeof this[c] == "number" &&
              this[c] == l
            )
              return;
            this[c] = l === null && typeof this[c] == "boolean" ? !1 : l;
          });
        }),
          (e.observedAttributes = i
            .filter(([s, a]) => a[0] & 15)
            .map(([s, a]) => {
              const l = a[1] || s;
              return (
                o.set(l, s), a[0] & 512 && t.$attrsToReflect$.push([s, l]), l
              );
            }));
      }
    }
    return e;
  },
  BA = async (e, t, n, i, r) => {
    if (
      !(t.$flags$ & 32) &&
      ((r = e.constructor),
      (t.$flags$ |= 32),
      customElements.whenDefined(n.$tagName$).then(() => (t.$flags$ |= 128)),
      r.style)
    ) {
      let s = r.style;
      typeof s != "string" && (s = s[(t.$modeName$ = wA(e))]);
      const a = Oy(n, t.$modeName$);
      if (!Oa.has(a)) {
        const l = Ei("registerStyles", n.$tagName$);
        kA(a, s, !!(n.$flags$ & 1)), l();
      }
    }
    t.$ancestorComponent$, (() => jy(t, !0))();
  },
  DA = (e) => {},
  jA = (e) => {
    if (!(Qe.$flags$ & 1)) {
      const t = Sl(e),
        n = t.$cmpMeta$,
        i = Ei("connectedCallback", n.$tagName$);
      t.$flags$ & 1
        ? (zy(e, t, n.$listeners$), DA(t.$lazyInstance$))
        : ((t.$flags$ |= 1),
          n.$flags$ & 12 && zA(e),
          n.$members$ &&
            Object.entries(n.$members$).map(([r, [o]]) => {
              if (o & 31 && e.hasOwnProperty(r)) {
                const s = e[r];
                delete e[r], (e[r] = s);
              }
            }),
          BA(e, t, n)),
        i();
    }
  },
  zA = (e) => {
    const t = (e["s-cr"] = Yt.createComment(""));
    (t["s-cn"] = !0), e.insertBefore(t, e.firstChild);
  },
  FA = (e) => {
    if (!(Qe.$flags$ & 1)) {
      const t = Sl(e);
      t.$rmListeners$ &&
        (t.$rmListeners$.map((n) => n()), (t.$rmListeners$ = void 0));
    }
  },
  NA = (e, t) => {
    const n = { $flags$: t[0], $tagName$: t[1] };
    (n.$members$ = t[2]),
      (n.$listeners$ = t[3]),
      (n.$watchers$ = e.$watchers$),
      (n.$attrsToReflect$ = []);
    const i = e.prototype.connectedCallback,
      r = e.prototype.disconnectedCallback;
    return (
      Object.assign(e.prototype, {
        __registerHost() {
          qA(this, n);
        },
        connectedCallback() {
          jA(this), i && i.call(this);
        },
        disconnectedCallback() {
          FA(this), r && r.call(this);
        },
        __attachShadow() {
          this.attachShadow({
            mode: "open",
            delegatesFocus: !!(n.$flags$ & 16),
          });
        },
      }),
      (e.is = n.$tagName$),
      MA(e, n)
    );
  },
  zy = (e, t, n, i) => {
    n &&
      n.map(([r, o, s]) => {
        const a = UA(e, r),
          l = HA(t, s),
          c = VA(r);
        Qe.ael(a, o, l, c),
          (t.$rmListeners$ = t.$rmListeners$ || []).push(() =>
            Qe.rel(a, o, l, c)
          );
      });
  },
  HA = (e, t) => (n) => {
    try {
      Ni.lazyLoad || e.$hostElement$[t](n);
    } catch (i) {
      Go(i);
    }
  },
  UA = (e, t) => (t & 4 ? Yt : t & 8 ? Xo : t & 16 ? Yt.body : e),
  VA = (e) =>
    GA ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0,
  Fy = new WeakMap(),
  Sl = (e) => Fy.get(e),
  qA = (e, t) => {
    const n = {
      $flags$: 0,
      $hostElement$: e,
      $cmpMeta$: t,
      $instanceValues$: new Map(),
    };
    return zy(e, n, t.$listeners$), Fy.set(e, n);
  },
  Qm = (e, t) => t in e,
  Go = (e, t) => (0, console.error)(e, t),
  Oa = new Map(),
  WA = [],
  Xo = typeof window < "u" ? window : {},
  Yt = Xo.document || { head: {} },
  YA = Xo.HTMLElement || class {},
  Qe = {
    $flags$: 0,
    $resourcesUrl$: "",
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, i) => e.addEventListener(t, n, i),
    rel: (e, t, n, i) => e.removeEventListener(t, n, i),
    ce: (e, t) => new CustomEvent(e, t),
  },
  GA = (() => {
    let e = !1;
    try {
      Yt.addEventListener(
        "e",
        null,
        Object.defineProperty({}, "passive", {
          get() {
            e = !0;
          },
        })
      );
    } catch (t) {}
    return e;
  })(),
  XA = (e) => Promise.resolve(e),
  KA = (() => {
    try {
      return (
        new CSSStyleSheet(),
        typeof new CSSStyleSheet().replaceSync == "function"
      );
    } catch (e) {}
    return !1;
  })(),
  Zm = [],
  Ny = [],
  QA = (e, t) => (n) => {
    e.push(n), gd || ((gd = !0), t && Qe.$flags$ & 4 ? ZA(vd) : Qe.raf(vd));
  },
  Jm = (e) => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (n) {
        Go(n);
      }
    e.length = 0;
  },
  vd = () => {
    Jm(Zm), Jm(Ny), (gd = Zm.length > 0) && Qe.raf(vd);
  },
  ZA = (e) => XA().then(e),
  JA = QA(Ny, !0);
let Rc;
const eO = () => {
    if (typeof window > "u") return new Map();
    if (!Rc) {
      const e = window;
      (e.Ionicons = e.Ionicons || {}),
        (Rc = e.Ionicons.map = e.Ionicons.map || new Map());
    }
    return Rc;
  },
  tO = (e) => {
    let t = Ic(e.src);
    return (
      t ||
      ((t = Hy(e.name, e.icon, e.mode, e.ios, e.md)),
      t
        ? nO(t)
        : e.icon && ((t = Ic(e.icon)), t || ((t = Ic(e.icon[e.mode])), t))
        ? t
        : null)
    );
  },
  nO = (e) => {
    const t = eO().get(e);
    return t || fA(`svg/${e}.svg`);
  },
  Hy = (e, t, n, i, r) => (
    (n = (n && Ss(n)) === "ios" ? "ios" : "md"),
    i && n === "ios"
      ? (e = Ss(i))
      : r && n === "md"
      ? (e = Ss(r))
      : (!e && t && !Uy(t) && (e = t), Ra(e) && (e = Ss(e))),
    !Ra(e) || e.trim() === "" || e.replace(/[a-z]|-|\d/gi, "") !== "" ? null : e
  ),
  Ic = (e) => (Ra(e) && ((e = e.trim()), Uy(e)) ? e : null),
  Uy = (e) => e.length > 0 && /(\/|\.)/.test(e),
  Ra = (e) => typeof e == "string",
  Ss = (e) => e.toLowerCase(),
  iO = (e, t = []) => {
    const n = {};
    return (
      t.forEach((i) => {
        e.hasAttribute(i) &&
          (e.getAttribute(i) !== null && (n[i] = e.getAttribute(i)),
          e.removeAttribute(i));
      }),
      n
    );
  },
  rO = (e) =>
    e && e.dir !== ""
      ? e.dir.toLowerCase() === "rtl"
      : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl",
  oO = (e) => {
    const t = document.createElement("div");
    t.innerHTML = e;
    for (let i = t.childNodes.length - 1; i >= 0; i--)
      t.childNodes[i].nodeName.toLowerCase() !== "svg" &&
        t.removeChild(t.childNodes[i]);
    const n = t.firstElementChild;
    if (n && n.nodeName.toLowerCase() === "svg") {
      const i = n.getAttribute("class") || "";
      if ((n.setAttribute("class", (i + " s-ion-icon").trim()), Vy(n)))
        return t.innerHTML;
    }
    return "";
  },
  Vy = (e) => {
    if (e.nodeType === 1) {
      if (e.nodeName.toLowerCase() === "script") return !1;
      for (let t = 0; t < e.attributes.length; t++) {
        const n = e.attributes[t].name;
        if (Ra(n) && n.toLowerCase().indexOf("on") === 0) return !1;
      }
      for (let t = 0; t < e.childNodes.length; t++)
        if (!Vy(e.childNodes[t])) return !1;
    }
    return !0;
  },
  sO = (e) => e.startsWith("data:image/svg+xml"),
  aO = (e) => e.indexOf(";utf8,") !== -1,
  si = new Map(),
  eg = new Map();
let Lc;
const lO = (e, t) => {
    let n = eg.get(e);
    if (!n)
      if (typeof fetch < "u" && typeof document < "u")
        if (sO(e) && aO(e)) {
          Lc || (Lc = new DOMParser());
          const r = Lc.parseFromString(e, "text/html").querySelector("svg");
          return r && si.set(e, r.outerHTML), Promise.resolve();
        } else
          (n = fetch(e).then((i) => {
            if (i.ok)
              return i.text().then((r) => {
                r && t !== !1 && (r = oO(r)), si.set(e, r || "");
              });
            si.set(e, "");
          })),
            eg.set(e, n);
      else return si.set(e, ""), Promise.resolve();
    return n;
  },
  cO =
    ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",
  uO = NA(
    class extends YA {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.iconName = null),
          (this.inheritedAttributes = {}),
          (this.isVisible = !1),
          (this.mode = dO()),
          (this.lazy = !1),
          (this.sanitize = !0);
      }
      componentWillLoad() {
        this.inheritedAttributes = iO(this.el, ["aria-label"]);
      }
      connectedCallback() {
        this.waitUntilVisible(this.el, "50px", () => {
          (this.isVisible = !0), this.loadIcon();
        });
      }
      disconnectedCallback() {
        this.io && (this.io.disconnect(), (this.io = void 0));
      }
      waitUntilVisible(e, t, n) {
        if (this.lazy && typeof window < "u" && window.IntersectionObserver) {
          const i = (this.io = new window.IntersectionObserver(
            (r) => {
              r[0].isIntersecting && (i.disconnect(), (this.io = void 0), n());
            },
            { rootMargin: t }
          ));
          i.observe(e);
        } else n();
      }
      loadIcon() {
        if (this.isVisible) {
          const e = tO(this);
          e &&
            (si.has(e)
              ? (this.svgContent = si.get(e))
              : lO(e, this.sanitize).then(() => (this.svgContent = si.get(e))));
        }
        this.iconName = Hy(this.name, this.icon, this.mode, this.ios, this.md);
      }
      render() {
        const { flipRtl: e, iconName: t, inheritedAttributes: n, el: i } = this,
          r = this.mode || "md",
          o = t
            ? (t.includes("arrow") || t.includes("chevron")) && e !== !1
            : !1,
          s = e || o;
        return po(
          Ay,
          Object.assign(
            {
              role: "img",
              class: Object.assign(Object.assign({ [r]: !0 }, fO(this.color)), {
                [`icon-${this.size}`]: !!this.size,
                "flip-rtl": s,
                "icon-rtl": s && rO(i),
              }),
            },
            n
          ),
          this.svgContent
            ? po("div", { class: "icon-inner", innerHTML: this.svgContent })
            : po("div", { class: "icon-inner" })
        );
      }
      static get assetsDirs() {
        return ["svg"];
      }
      get el() {
        return this;
      }
      static get watchers() {
        return {
          name: ["loadIcon"],
          src: ["loadIcon"],
          icon: ["loadIcon"],
          ios: ["loadIcon"],
          md: ["loadIcon"],
        };
      }
      static get style() {
        return cO;
      }
    },
    [
      1,
      "ion-icon",
      {
        mode: [1025],
        color: [1],
        ios: [1],
        md: [1],
        flipRtl: [4, "flip-rtl"],
        name: [513],
        src: [1],
        icon: [8],
        size: [1],
        lazy: [4],
        sanitize: [4],
        svgContent: [32],
        isVisible: [32],
      },
    ]
  ),
  dO = () =>
    (typeof document < "u" && document.documentElement.getAttribute("mode")) ||
    "md",
  fO = (e) => (e ? { "ion-color": !0, [`ion-color-${e}`]: !0 } : null);
function hO() {
  if (typeof customElements > "u") return;
  ["ion-icon"].forEach((t) => {
    switch (t) {
      case "ion-icon":
        customElements.get(t) || customElements.define(t, uO);
        break;
    }
  });
}
const pO = hO,
  Cl = S.createContext({
    onIonViewWillEnter: () => {},
    ionViewWillEnter: () => {},
    onIonViewDidEnter: () => {},
    ionViewDidEnter: () => {},
    onIonViewWillLeave: () => {},
    ionViewWillLeave: () => {},
    onIonViewDidLeave: () => {},
    ionViewDidLeave: () => {},
  }),
  mO = class {
    constructor() {
      (this.ionViewWillEnterCallbacks = []),
        (this.ionViewDidEnterCallbacks = []),
        (this.ionViewWillLeaveCallbacks = []),
        (this.ionViewDidLeaveCallbacks = []);
    }
    onIonViewWillEnter(e) {
      if (e.id) {
        const t = this.ionViewWillEnterCallbacks.findIndex(
          (n) => n.id === e.id
        );
        t > -1
          ? (this.ionViewWillEnterCallbacks[t] = e)
          : this.ionViewWillEnterCallbacks.push(e);
      } else this.ionViewWillEnterCallbacks.push(e);
    }
    ionViewWillEnter() {
      this.ionViewWillEnterCallbacks.forEach((e) => e());
    }
    onIonViewDidEnter(e) {
      if (e.id) {
        const t = this.ionViewDidEnterCallbacks.findIndex((n) => n.id === e.id);
        t > -1
          ? (this.ionViewDidEnterCallbacks[t] = e)
          : this.ionViewDidEnterCallbacks.push(e);
      } else this.ionViewDidEnterCallbacks.push(e);
    }
    ionViewDidEnter() {
      this.ionViewDidEnterCallbacks.forEach((e) => e());
    }
    onIonViewWillLeave(e) {
      if (e.id) {
        const t = this.ionViewWillLeaveCallbacks.findIndex(
          (n) => n.id === e.id
        );
        t > -1
          ? (this.ionViewWillLeaveCallbacks[t] = e)
          : this.ionViewWillLeaveCallbacks.push(e);
      } else this.ionViewWillLeaveCallbacks.push(e);
    }
    ionViewWillLeave() {
      this.ionViewWillLeaveCallbacks.forEach((e) => e());
    }
    onIonViewDidLeave(e) {
      if (e.id) {
        const t = this.ionViewDidLeaveCallbacks.findIndex((n) => n.id === e.id);
        t > -1
          ? (this.ionViewDidLeaveCallbacks[t] = e)
          : this.ionViewDidLeaveCallbacks.push(e);
      } else this.ionViewDidLeaveCallbacks.push(e);
    }
    ionViewDidLeave() {
      this.ionViewDidLeaveCallbacks.forEach((e) => e()),
        this.componentCanBeDestroyed();
    }
    onComponentCanBeDestroyed(e) {
      this.componentCanBeDestroyedCallback = e;
    }
    componentCanBeDestroyed() {
      this.componentCanBeDestroyedCallback &&
        this.componentCanBeDestroyedCallback();
    }
  },
  qy = (e, t = []) => {
    const n = H.useContext(Cl),
      i = H.useRef();
    (i.current = i.current || Math.floor(Math.random() * 1e6)),
      H.useEffect(() => {
        (e.id = i.current), n.onIonViewWillEnter(e);
      }, t);
  },
  ln = S.createContext({
    getIonRedirect: () => {},
    getIonRoute: () => {},
    getPageManager: () => {},
    getStackManager: () => {},
    goBack: (e) => {
      typeof window < "u" &&
        (typeof e == "string"
          ? (window.location.pathname = e)
          : window.history.back());
    },
    navigate: (e) => {
      typeof window < "u" && (window.location.pathname = e);
    },
    hasIonicRouter: () => !1,
    routeInfo: void 0,
    setCurrentTab: () => {},
    changeTab: (e, t) => {
      typeof window < "u" && (window.location.pathname = t);
    },
    resetTab: (e, t) => {
      typeof window < "u" && (window.location.pathname = t);
    },
  }),
  ah = (e) =>
    e
      .toLowerCase()
      .split("-")
      .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
      .join(""),
  $l = (e) => e.replace(/([A-Z])/g, (t) => `-${t[0].toLowerCase()}`),
  lh = (e, t, n = {}) => {
    if (e instanceof Element) {
      const i = gO(e.classList, t, n);
      i !== "" && (e.className = i),
        Object.keys(t).forEach((r) => {
          if (
            !(
              r === "children" ||
              r === "style" ||
              r === "ref" ||
              r === "class" ||
              r === "className" ||
              r === "forwardedRef"
            )
          )
            if (r.indexOf("on") === 0 && r[2] === r[2].toUpperCase()) {
              const o = r.substring(2),
                s = o[0].toLowerCase() + o.substring(1);
              Ko(s) || bO(e, s, t[r]);
            } else
              (e[r] = t[r]),
                typeof t[r] === "string" && e.setAttribute($l(r), t[r]);
        });
    }
  },
  gO = (e, t, n) => {
    const i = t.className || t.class,
      r = n.className || n.class,
      o = _c(e),
      s = _c(i ? i.split(" ") : []),
      a = _c(r ? r.split(" ") : []),
      l = [];
    return (
      o.forEach((c) => {
        s.has(c) ? (l.push(c), s.delete(c)) : a.has(c) || l.push(c);
      }),
      s.forEach((c) => l.push(c)),
      l.join(" ")
    );
  },
  vO = (e) => {
    switch (e) {
      case "doubleclick":
        return "dblclick";
    }
    return e;
  };
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ const Ko = (e) => {
    if (typeof document > "u") return !0;
    {
      const t = "on" + vO(e);
      let n = t in document;
      if (!n) {
        const i = document.createElement("div");
        i.setAttribute(t, "return;"), (n = typeof i[t] == "function");
      }
      return n;
    }
  },
  bO = (e, t, n) => {
    const i = e.__events || (e.__events = {}),
      r = i[t];
    r && e.removeEventListener(t, r),
      e.addEventListener(
        t,
        (i[t] = function (s) {
          n && n.call(this, s);
        })
      );
  },
  _c = (e) => {
    const t = new Map();
    return e.forEach((n) => t.set(n, n)), t;
  },
  yO = (e, t) => {
    typeof e == "function" ? e(t) : e != null && (e.current = t);
  },
  Pl =
    (...e) =>
    (t) => {
      e.forEach((n) => {
        yO(n, t);
      });
    },
  wO = (e, t) => {
    const n = (i, r) =>
      S.createElement(e, Object.assign({}, i, { forwardedRef: r }));
    return (n.displayName = t), S.forwardRef(n);
  },
  xO = (e, t) => {
    t !== void 0 &&
      typeof customElements < "u" &&
      !customElements.get(e) &&
      customElements.define(e, t);
  },
  qe = (e, t, n, i) => {
    i !== void 0 && i();
    const r = ah(e),
      o = class extends S.Component {
        constructor(s) {
          super(s),
            (this.setComponentElRef = (a) => {
              this.componentEl = a;
            });
        }
        componentDidMount() {
          this.componentDidUpdate(this.props);
        }
        componentDidUpdate(s) {
          lh(this.componentEl, this.props, s);
        }
        render() {
          const s = this.props,
            {
              children: a,
              forwardedRef: l,
              style: c,
              className: u,
              ref: d,
            } = s,
            f = Ke(s, [
              "children",
              "forwardedRef",
              "style",
              "className",
              "ref",
            ]);
          let h = Object.keys(f).reduce((b, k) => {
            const g = f[k];
            if (k.indexOf("on") === 0 && k[2] === k[2].toUpperCase()) {
              const p = k.substring(2).toLowerCase();
              typeof document < "u" && Ko(p) && (b[k] = g);
            } else {
              const p = typeof g;
              (p === "string" || p === "boolean" || p === "number") &&
                (b[$l(k)] = g);
            }
            return b;
          }, {});
          n && (h = n(this.props, h));
          const m = Object.assign(Object.assign({}, h), {
            ref: Pl(l, this.setComponentElRef),
            style: c,
          });
          return H.createElement(e, m, a);
        }
        static get displayName() {
          return r;
        }
      };
    return t && (o.contextType = t), wO(o, r);
  },
  kO = qe("ion-buttons", void 0, void 0, eP),
  ch = qe("ion-content", void 0, void 0, hP),
  bd = qe("ion-header", void 0, void 0, zP),
  Wy = qe("ion-label", void 0, void 0, WP),
  EO = qe("ion-list", void 0, void 0, QP),
  yd = qe("ion-note", void 0, void 0, iT),
  SO = qe("ion-refresher", void 0, void 0, gT),
  CO = qe("ion-refresher-content", void 0, void 0, yT),
  tg = qe("ion-title", void 0, void 0, ST),
  wd = qe("ion-toolbar", void 0, void 0, AT),
  Pi = (e, t) => {
    const n = (i, r) =>
      S.createElement(e, Object.assign({}, i, { forwardedRef: r }));
    return (n.displayName = t), S.forwardRef(n);
  },
  uh = () => {
    if (typeof window < "u") {
      const e = window.Ionic;
      if (e && e.config) return e.config;
    }
    return null;
  },
  $O = (e, t) => {
    xO(e, t);
    const n = ah(e),
      i = class extends S.Component {
        constructor(r) {
          super(r),
            (this.handleClick = (o) => {
              const {
                routerLink: s,
                routerDirection: a,
                routerOptions: l,
                routerAnimation: c,
              } = this.props;
              s !== void 0 &&
                (o.preventDefault(), this.context.navigate(s, a, void 0, c, l));
            }),
            (this.ref = S.createRef()),
            (this.stableMergedRefs = Pl(this.ref, this.props.forwardedRef));
        }
        componentDidMount() {
          this.componentDidUpdate(this.props);
        }
        componentDidUpdate(r) {
          const o = this.ref.current;
          lh(o, this.props, r);
        }
        render() {
          const r = this.props,
            {
              children: o,
              forwardedRef: s,
              style: a,
              className: l,
              ref: c,
            } = r,
            u = Ke(r, [
              "children",
              "forwardedRef",
              "style",
              "className",
              "ref",
            ]),
            d = Object.keys(u).reduce((h, m) => {
              if (m.indexOf("on") === 0 && m[2] === m[2].toUpperCase()) {
                const b = m.substring(2).toLowerCase();
                Ko(b) && (h[m] = u[m]);
              } else
                ["string", "boolean", "number"].includes(typeof u[m]) &&
                  (h[$l(m)] = u[m]);
              return h;
            }, {}),
            f = Object.assign(Object.assign({}, d), {
              ref: this.stableMergedRefs,
              style: a,
            });
          if (
            (this.props.routerLink &&
              !this.props.href &&
              (f.href = this.props.routerLink),
            f.onClick)
          ) {
            const h = f.onClick;
            f.onClick = (m) => {
              h(m), m.defaultPrevented || this.handleClick(m);
            };
          } else f.onClick = this.handleClick;
          return H.createElement(e, f, o);
        }
        static get displayName() {
          return n;
        }
        static get contextType() {
          return ln;
        }
      };
    return Pi(i, n);
  },
  Yy = $O("ion-item", OT),
  PO = (e, t) => {
    e instanceof Element &&
      Object.keys(t).forEach((n) => {
        if (n.indexOf("on") === 0 && n[2] === n[2].toUpperCase()) {
          const i = n.substring(2),
            r = i[0].toLowerCase() + i.substring(1);
          Ko(r) || TO(e, r);
        }
      });
  },
  TO = (e, t) => {
    const n = e.__events || (e.__events = {}),
      i = n[t];
    i && (e.removeEventListener(t, i), (n[t] = void 0));
  },
  AO = (e, t, n) => {
    t && t();
    const i = ah(e),
      r = class extends S.Component {
        constructor(o) {
          super(o),
            (this.handleIonMount = () => {
              this.setState({ isOpen: !0 });
            }),
            (this.handleWillPresent = (s) => {
              this.setState({ isOpen: !0 }),
                this.props.onWillPresent && this.props.onWillPresent(s);
            }),
            (this.handleDidDismiss = (s) => {
              const a = this.wrapperRef.current,
                l = this.ref.current;
              a && l && (l.append(a), this.setState({ isOpen: !1 })),
                this.props.onDidDismiss && this.props.onDidDismiss(s);
            }),
            (this.ref = S.createRef()),
            (this.stableMergedRefs = Pl(this.ref, this.props.forwardedRef)),
            (this.state = { isOpen: !1 }),
            (this.wrapperRef = S.createRef());
        }
        componentDidMount() {
          var o, s, a;
          this.componentDidUpdate(this.props),
            (o = this.ref.current) === null ||
              o === void 0 ||
              o.addEventListener("ionMount", this.handleIonMount),
            (s = this.ref.current) === null ||
              s === void 0 ||
              s.addEventListener("willPresent", this.handleWillPresent),
            (a = this.ref.current) === null ||
              a === void 0 ||
              a.addEventListener("didDismiss", this.handleDidDismiss);
        }
        componentDidUpdate(o) {
          const s = this.ref.current;
          lh(s, this.props, o);
        }
        componentWillUnmount() {
          const o = this.ref.current;
          o &&
            this.state.isOpen &&
            (o.removeEventListener("didDismiss", this.handleDidDismiss),
            o.remove(),
            PO(o, this.props));
        }
        render() {
          const o = this.props,
            {
              children: s,
              forwardedRef: a,
              style: l,
              className: c,
              ref: u,
            } = o,
            d = Ke(o, [
              "children",
              "forwardedRef",
              "style",
              "className",
              "ref",
            ]),
            f = Object.keys(d).reduce((b, k) => {
              if (k.indexOf("on") === 0 && k[2] === k[2].toUpperCase()) {
                const g = k.substring(2).toLowerCase();
                Ko(g) && (b[k] = d[k]);
              } else
                ["string", "boolean", "number"].includes(typeof d[k]) &&
                  (b[$l(k)] = d[k]);
              return b;
            }, {}),
            h = Object.assign(Object.assign({}, f), {
              ref: this.stableMergedRefs,
              style: l,
            }),
            m = () => (n ? `${ng} ion-page` : ng);
          return H.createElement(
            "template",
            {},
            H.createElement(
              e,
              h,
              this.state.isOpen || this.props.keepContentsMounted
                ? H.createElement(
                    "div",
                    { ref: this.wrapperRef, className: m() },
                    s
                  )
                : null
            )
          );
        }
        static get displayName() {
          return i;
        }
      };
    return Pi(r, i);
  },
  ng = "ion-delegate-host",
  dh = AO("ion-toast", FT),
  OO = S.createContext({ addOverlay: () => {}, removeOverlay: () => {} }),
  RO = ({ onAddOverlay: e, onRemoveOverlay: t }) => {
    const [n, i] = H.useState({}),
      r = H.useRef({});
    (r.current = n),
      H.useEffect(() => {
        e(o), t(s);
      }, []);
    const o = (l, c, u) => {
        const d = Object.assign({}, r.current);
        (d[l] = { component: c, containerElement: u }), i(d);
      },
      s = (l) => {
        const c = Object.assign({}, r.current);
        delete c[l], i(c);
      },
      a = Object.keys(n);
    return S.createElement(
      S.Fragment,
      null,
      a.map((l) => {
        const c = n[l];
        return iE.createPortal(c.component, c.containerElement, `overlay-${l}`);
      })
    );
  },
  IO = qe("ion-tab-button", void 0, void 0, dA),
  LO = qe("ion-tab-bar", void 0, void 0, sA),
  _O = qe("ion-back-button", void 0, void 0, QT),
  xd = qe("ion-router-outlet", void 0, void 0, tA),
  MO = qe("ion-app", void 0, void 0, WT),
  BO = qe("ion-icon", void 0, void 0, pO),
  DO = (() =>
    class extends S.Component {
      constructor(e) {
        super(e),
          (this.ionContext = {
            addOverlay: (t, n, i) => {
              this.addOverlayCallback && this.addOverlayCallback(t, n, i);
            },
            removeOverlay: (t) => {
              this.removeOverlayCallback && this.removeOverlayCallback(t);
            },
          });
      }
      render() {
        return S.createElement(
          OO.Provider,
          { value: this.ionContext },
          S.createElement(
            MO,
            Object.assign({}, this.props),
            this.props.children
          ),
          S.createElement(RO, {
            onAddOverlay: (e) => {
              this.addOverlayCallback = e;
            },
            onRemoveOverlay: (e) => {
              this.removeOverlayCallback = e;
            },
          })
        );
      }
      static get displayName() {
        return "IonApp";
      }
    })(),
  fh = S.createContext({ registerIonPage: () => {}, isInOutlet: () => !1 });
class Gy extends S.PureComponent {
  constructor(t) {
    super(t),
      (this.ionPageElementRef = S.createRef()),
      (this.stableMergedRefs = Pl(
        this.ionPageElementRef,
        this.props.forwardedRef
      ));
  }
  componentDidMount() {
    this.ionPageElementRef.current &&
      (this.context.isInOutlet() &&
        this.ionPageElementRef.current.classList.add("ion-page-invisible"),
      this.context.registerIonPage(
        this.ionPageElementRef.current,
        this.props.routeInfo
      ),
      this.ionPageElementRef.current.addEventListener(
        "ionViewWillEnter",
        this.ionViewWillEnterHandler.bind(this)
      ),
      this.ionPageElementRef.current.addEventListener(
        "ionViewDidEnter",
        this.ionViewDidEnterHandler.bind(this)
      ),
      this.ionPageElementRef.current.addEventListener(
        "ionViewWillLeave",
        this.ionViewWillLeaveHandler.bind(this)
      ),
      this.ionPageElementRef.current.addEventListener(
        "ionViewDidLeave",
        this.ionViewDidLeaveHandler.bind(this)
      ));
  }
  componentWillUnmount() {
    this.ionPageElementRef.current &&
      (this.ionPageElementRef.current.removeEventListener(
        "ionViewWillEnter",
        this.ionViewWillEnterHandler.bind(this)
      ),
      this.ionPageElementRef.current.removeEventListener(
        "ionViewDidEnter",
        this.ionViewDidEnterHandler.bind(this)
      ),
      this.ionPageElementRef.current.removeEventListener(
        "ionViewWillLeave",
        this.ionViewWillLeaveHandler.bind(this)
      ),
      this.ionPageElementRef.current.removeEventListener(
        "ionViewDidLeave",
        this.ionViewDidLeaveHandler.bind(this)
      ));
  }
  ionViewWillEnterHandler() {
    this.ionLifeCycleContext.ionViewWillEnter();
  }
  ionViewDidEnterHandler() {
    this.ionLifeCycleContext.ionViewDidEnter();
  }
  ionViewWillLeaveHandler() {
    this.ionLifeCycleContext.ionViewWillLeave();
  }
  ionViewDidLeaveHandler() {
    this.ionLifeCycleContext.ionViewDidLeave();
  }
  render() {
    const t = this.props,
      { className: n, children: i, routeInfo: r, forwardedRef: o } = t,
      s = Ke(t, ["className", "children", "routeInfo", "forwardedRef"]);
    return S.createElement(
      Cl.Consumer,
      null,
      (a) => (
        (this.ionLifeCycleContext = a),
        S.createElement(
          "div",
          Object.assign(
            {
              className: n ? `${n} ion-page` : "ion-page",
              ref: this.stableMergedRefs,
            },
            s
          ),
          i
        )
      )
    );
  }
  static get contextType() {
    return fh;
  }
}
class jO extends S.Component {
  constructor(t) {
    super(t);
  }
  render() {
    const t = this.props,
      { className: n, children: i, forwardedRef: r } = t,
      o = Ke(t, ["className", "children", "forwardedRef"]);
    return this.context.hasIonicRouter()
      ? S.createElement(
          Gy,
          Object.assign(
            {
              className: n ? `${n}` : "",
              routeInfo: this.context.routeInfo,
              forwardedRef: r,
            },
            o
          ),
          i
        )
      : S.createElement(
          "div",
          Object.assign(
            { className: n ? `ion-page ${n}` : "ion-page", ref: r },
            o
          ),
          i
        );
  }
  static get displayName() {
    return "IonPage";
  }
  static get contextType() {
    return ln;
  }
}
const Ti = Pi(jO, "IonPage"),
  zO = (e, t) => {
    const n = new WeakMap();
    return {
      attachViewToDom: async (o, s, a, l) => {
        const c = document.createElement("div");
        l && c.classList.add(...l), o.appendChild(c);
        const u = s(a),
          d = Rf.createPortal(u, c);
        return n.set(c, d), e(d), Promise.resolve(c);
      },
      removeViewFromDom: (o, s) => {
        const a = n.get(s);
        return a && t(a), s.remove(), Promise.resolve();
      },
    };
  },
  FO = qe("ion-nav", void 0, void 0, nT),
  NO = (e) => {
    var { children: t, forwardedRef: n } = e,
      i = Ke(e, ["children", "forwardedRef"]);
    const [r, o] = H.useState([]),
      s = (c) => o((u) => [...u, c]),
      a = (c) => o((u) => u.filter((d) => d !== c)),
      l = H.useMemo(() => zO(s, a), []);
    return S.createElement(FO, Object.assign({ delegate: l, ref: n }, i), r);
  };
Pi(NO, "IonNav");
S.createContext({ activeTab: void 0, selectTab: () => !1 });
const HO = typeof HTMLElement < "u" ? HTMLElement : class {};
class UO extends S.Component {
  constructor(t) {
    super(t), (this.outletIsReady = !1);
  }
  componentDidMount() {
    this.ionRouterOutlet &&
      (this.outletIsReady ||
        Gn(this.ionRouterOutlet, () => {
          (this.outletIsReady = !0),
            this.context.registerIonPage(
              this.ionRouterOutlet,
              this.props.routeInfo
            );
        }),
      this.ionRouterOutlet.addEventListener(
        "ionViewWillEnter",
        this.ionViewWillEnterHandler.bind(this)
      ),
      this.ionRouterOutlet.addEventListener(
        "ionViewDidEnter",
        this.ionViewDidEnterHandler.bind(this)
      ),
      this.ionRouterOutlet.addEventListener(
        "ionViewWillLeave",
        this.ionViewWillLeaveHandler.bind(this)
      ),
      this.ionRouterOutlet.addEventListener(
        "ionViewDidLeave",
        this.ionViewDidLeaveHandler.bind(this)
      ));
  }
  componentWillUnmount() {
    this.ionRouterOutlet &&
      (this.ionRouterOutlet.removeEventListener(
        "ionViewWillEnter",
        this.ionViewWillEnterHandler.bind(this)
      ),
      this.ionRouterOutlet.removeEventListener(
        "ionViewDidEnter",
        this.ionViewDidEnterHandler.bind(this)
      ),
      this.ionRouterOutlet.removeEventListener(
        "ionViewWillLeave",
        this.ionViewWillLeaveHandler.bind(this)
      ),
      this.ionRouterOutlet.removeEventListener(
        "ionViewDidLeave",
        this.ionViewDidLeaveHandler.bind(this)
      ));
  }
  ionViewWillEnterHandler() {
    this.ionLifeCycleContext.ionViewWillEnter();
  }
  ionViewDidEnterHandler() {
    this.ionLifeCycleContext.ionViewDidEnter();
  }
  ionViewWillLeaveHandler() {
    this.ionLifeCycleContext.ionViewWillLeave();
  }
  ionViewDidLeaveHandler() {
    this.ionLifeCycleContext.ionViewDidLeave();
  }
  render() {
    const t = this.props,
      { StackManager: n, children: i, routeInfo: r } = t,
      o = Ke(t, ["StackManager", "children", "routeInfo"]);
    return S.createElement(
      Cl.Consumer,
      null,
      (s) => (
        (this.ionLifeCycleContext = s),
        S.createElement(
          n,
          { routeInfo: r },
          S.createElement(
            xd,
            Object.assign({ setRef: (a) => (this.ionRouterOutlet = a) }, o),
            i
          )
        )
      )
    );
  }
  static get contextType() {
    return fh;
  }
}
class VO extends S.Component {
  constructor(t) {
    super(t);
  }
  render() {
    const t = this.context.getStackManager(),
      n = this.props,
      { children: i, forwardedRef: r } = n,
      o = Ke(n, ["children", "forwardedRef"]);
    return this.context.hasIonicRouter()
      ? o.ionPage
        ? S.createElement(
            UO,
            Object.assign(
              { StackManager: t, routeInfo: this.context.routeInfo },
              o
            ),
            i
          )
        : S.createElement(
            t,
            { routeInfo: this.context.routeInfo },
            S.createElement(xd, Object.assign({}, o, { forwardedRef: r }), i)
          )
      : S.createElement(
          xd,
          Object.assign({ ref: r }, this.props),
          this.props.children
        );
  }
  static get contextType() {
    return ln;
  }
}
const qO = Pi(VO, "IonRouterOutlet"),
  Mc = (() =>
    class extends S.Component {
      constructor(e) {
        super(e),
          (this.handleIonTabButtonClick =
            this.handleIonTabButtonClick.bind(this));
      }
      handleIonTabButtonClick() {
        this.props.onClick &&
          this.props.onClick(
            new CustomEvent("ionTabButtonClick", {
              detail: {
                tab: this.props.tab,
                href: this.props.href,
                routeOptions: this.props.routerOptions,
              },
            })
          );
      }
      render() {
        const e = this.props,
          t = Ke(e, ["onClick"]);
        return S.createElement(
          IO,
          Object.assign(
            { onIonTabButtonClick: this.handleIonTabButtonClick },
            t
          )
        );
      }
      static get displayName() {
        return "IonTabButton";
      }
    })();
class WO extends S.PureComponent {
  constructor(t) {
    super(t), (this.setActiveTabOnContext = (i) => {});
    const n = {};
    S.Children.forEach(t.children, (i) => {
      var r, o, s, a;
      i != null &&
        typeof i == "object" &&
        i.props &&
        (i.type === Mc || i.type.isTabButton) &&
        (n[i.props.tab] = {
          originalHref: i.props.href,
          currentHref: i.props.href,
          originalRouteOptions:
            i.props.href ===
            ((r = t.routeInfo) === null || r === void 0 ? void 0 : r.pathname)
              ? (o = t.routeInfo) === null || o === void 0
                ? void 0
                : o.routeOptions
              : void 0,
          currentRouteOptions:
            i.props.href ===
            ((s = t.routeInfo) === null || s === void 0 ? void 0 : s.pathname)
              ? (a = t.routeInfo) === null || a === void 0
                ? void 0
                : a.routeOptions
              : void 0,
        });
    }),
      (this.state = { tabs: n }),
      (this.onTabButtonClick = this.onTabButtonClick.bind(this)),
      (this.renderTabButton = this.renderTabButton.bind(this)),
      (this.setActiveTabOnContext = this.setActiveTabOnContext.bind(this)),
      (this.selectTab = this.selectTab.bind(this));
  }
  componentDidMount() {
    const t = this.state.tabs,
      i = Object.keys(t).find((r) => {
        const o = t[r].originalHref;
        return this.props.routeInfo.pathname.startsWith(o);
      });
    i && this.setState({ activeTab: i });
  }
  componentDidUpdate() {
    this.state.activeTab && this.setActiveTabOnContext(this.state.activeTab);
  }
  selectTab(t) {
    const n = this.state.tabs[t];
    return n
      ? (this.onTabButtonClick(
          new CustomEvent("ionTabButtonClick", {
            detail: {
              href: n.currentHref,
              tab: t,
              selected: t === this.state.activeTab,
              routeOptions: void 0,
            },
          })
        ),
        !0)
      : !1;
  }
  static getDerivedStateFromProps(t, n) {
    var i, r, o;
    const s = Object.assign({}, n.tabs),
      l = Object.keys(n.tabs).find((u) => {
        const d = n.tabs[u].originalHref;
        return t.routeInfo.pathname.startsWith(d);
      });
    S.Children.forEach(t.children, (u) => {
      if (
        u != null &&
        typeof u == "object" &&
        u.props &&
        (u.type === Mc || u.type.isTabButton)
      ) {
        const d = s[u.props.tab];
        (!d || d.originalHref !== u.props.href) &&
          (s[u.props.tab] = {
            originalHref: u.props.href,
            currentHref: u.props.href,
            originalRouteOptions: u.props.routeOptions,
            currentRouteOptions: u.props.routeOptions,
          });
      }
    });
    const { activeTab: c } = n;
    if (l && c) {
      const u = n.tabs[c].currentHref,
        d = n.tabs[c].currentRouteOptions;
      (l !== c ||
        u !==
          ((i = t.routeInfo) === null || i === void 0 ? void 0 : i.pathname) ||
        d !==
          ((r = t.routeInfo) === null || r === void 0
            ? void 0
            : r.routeOptions)) &&
        ((s[l] = {
          originalHref: s[l].originalHref,
          currentHref: t.routeInfo.pathname + (t.routeInfo.search || ""),
          originalRouteOptions: s[l].originalRouteOptions,
          currentRouteOptions:
            (o = t.routeInfo) === null || o === void 0
              ? void 0
              : o.routeOptions,
        }),
        t.routeInfo.routeAction === "pop" &&
          l !== c &&
          (s[c] = {
            originalHref: s[c].originalHref,
            currentHref: s[c].originalHref,
            originalRouteOptions: s[c].originalRouteOptions,
            currentRouteOptions: s[c].currentRouteOptions,
          }));
    }
    return l && t.onSetCurrentTab(l, t.routeInfo), { activeTab: l, tabs: s };
  }
  onTabButtonClick(t, n) {
    const i = this.state.tabs[t.detail.tab],
      r = i.originalHref,
      o = t.detail.href,
      { activeTab: s } = this.state;
    n && n(t),
      s === t.detail.tab
        ? r !== o &&
          this.context.resetTab(t.detail.tab, r, i.originalRouteOptions)
        : (this.props.onIonTabsWillChange &&
            this.props.onIonTabsWillChange(
              new CustomEvent("ionTabWillChange", {
                detail: { tab: t.detail.tab },
              })
            ),
          this.props.onIonTabsDidChange &&
            this.props.onIonTabsDidChange(
              new CustomEvent("ionTabDidChange", {
                detail: { tab: t.detail.tab },
              })
            ),
          this.setActiveTabOnContext(t.detail.tab),
          this.context.changeTab(t.detail.tab, o, t.detail.routeOptions));
  }
  renderTabButton(t) {
    return (n) => {
      var i, r;
      if (n != null && n.props && (n.type === Mc || n.type.isTabButton)) {
        const o =
            n.props.tab === t
              ? (i = this.props.routeInfo) === null || i === void 0
                ? void 0
                : i.pathname
              : this.state.tabs[n.props.tab].currentHref,
          s =
            n.props.tab === t
              ? (r = this.props.routeInfo) === null || r === void 0
                ? void 0
                : r.routeOptions
              : this.state.tabs[n.props.tab].currentRouteOptions;
        return S.cloneElement(n, {
          href: o,
          routeOptions: s,
          onClick: (a) => this.onTabButtonClick(a, n.props.onClick),
        });
      }
      return null;
    };
  }
  render() {
    const { activeTab: t } = this.state;
    return S.createElement(
      LO,
      Object.assign({}, this.props, { selectedTab: t }),
      S.Children.map(this.props.children, this.renderTabButton(t))
    );
  }
  static get contextType() {
    return ln;
  }
}
const YO = S.memo((e) => {
  var { forwardedRef: t } = e,
    n = Ke(e, ["forwardedRef"]);
  const i = H.useContext(ln);
  return S.createElement(
    WO,
    Object.assign({ ref: t }, n, {
      routeInfo: n.routeInfo ||
        i.routeInfo || { pathname: window.location.pathname },
      onSetCurrentTab: i.setCurrentTab,
    }),
    n.children
  );
});
Pi(YO, "IonTabBar");
class GO extends HO {
  constructor() {
    super();
  }
}
typeof window < "u" &&
  window.customElements &&
  (window.customElements.get("ion-tabs") ||
    window.customElements.define("ion-tabs", GO));
const XO = (() =>
  class extends S.Component {
    constructor() {
      super(...arguments),
        (this.clickButton = (e) => {
          if (e.target && e.target.closest("ion-nav") !== null) return;
          const { defaultHref: t, routerAnimation: n } = this.props;
          this.context.hasIonicRouter()
            ? (e.stopPropagation(), this.context.goBack(t, n))
            : t !== void 0 && (window.location.href = t);
        });
    }
    render() {
      return S.createElement(
        _O,
        Object.assign({ onClick: this.clickButton }, this.props)
      );
    }
    static get displayName() {
      return "IonBackButton";
    }
    static get contextType() {
      return ln;
    }
  })();
class KO extends S.PureComponent {
  constructor(t) {
    super(t),
      this.props.name &&
        console.warn(
          'In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.'
        );
  }
  render() {
    var t, n;
    const i = this.props,
      { icon: r, ios: o, md: s, mode: a } = i,
      l = Ke(i, ["icon", "ios", "md", "mode"]);
    let c;
    const u = uh(),
      d = a || (u == null ? void 0 : u.get("mode"));
    return (
      o || s
        ? d === "ios"
          ? (c = (t = o != null ? o : s) !== null && t !== void 0 ? t : r)
          : (c = (n = s != null ? s : o) !== null && n !== void 0 ? n : r)
        : (c = r),
      S.createElement(
        BO,
        Object.assign({ ref: this.props.forwardedRef, icon: c }, l),
        this.props.children
      )
    );
  }
  static get contextType() {
    return ln;
  }
}
const QO = Pi(KO, "IonIcon");
class hh extends S.PureComponent {
  render() {
    const t = this.context.getIonRoute();
    return !this.context.hasIonicRouter() || !hh
      ? (console.error(
          "You either do not have an Ionic Router package, or your router does not support using <IonRoute>"
        ),
        null)
      : S.createElement(t, Object.assign({}, this.props));
  }
  static get contextType() {
    return ln;
  }
}
class Xy extends S.PureComponent {
  render() {
    const t = this.context.getIonRedirect();
    return !this.context.hasIonicRouter() || !Xy
      ? (console.error(
          "You either do not have an Ionic Router package, or your router does not support using <IonRedirect>"
        ),
        null)
      : S.createElement(t, Object.assign({}, this.props));
  }
  static get contextType() {
    return ln;
  }
}
const ZO = S.createContext({
  routeInfo: void 0,
  push: () => {
    throw new Error("An Ionic Router is required for IonRouterContext");
  },
  back: () => {
    throw new Error("An Ionic Router is required for IonRouterContext");
  },
  canGoBack: () => {
    throw new Error("An Ionic Router is required for IonRouterContext");
  },
  nativeBack: () => {
    throw new Error("An Ionic Router is required for IonRouterContext");
  },
});
class T_ extends S.PureComponent {
  constructor(t) {
    super(t), (this.nodes = new Map()), (this.animation = Me(t.id));
  }
  setupAnimation(t) {
    const n = this.animation;
    this.nodes.size > 0 && n.addElement(Array.from(this.nodes.values())),
      ig(n, t),
      rg(n, t);
  }
  componentDidMount() {
    const t = this.props;
    this.setupAnimation(t);
  }
  componentDidUpdate(t) {
    const n = this.animation,
      i = this.props;
    ig(n, i, t), JO(n, i, t), rg(n, i, t);
  }
  render() {
    const { children: t } = this.props;
    return S.createElement(
      S.Fragment,
      null,
      S.Children.map(t, (n, i) =>
        S.cloneElement(n, { ref: (r) => this.nodes.set(i, r) })
      )
    );
  }
}
const ig = (e, t = {}, n = {}) => {
    const i = [
      "children",
      "progressStart",
      "progressStep",
      "progressEnd",
      "pause",
      "stop",
      "destroy",
      "play",
      "from",
      "to",
      "fromTo",
      "onFinish",
    ];
    for (const l in t)
      t.hasOwnProperty(l) && !i.includes(l) && t[l] !== n[l] && e[l](t[l]);
    const r = t.from;
    r &&
      r !== n.from &&
      (Array.isArray(r) ? r : [r]).forEach((c) => e.from(c.property, c.value));
    const o = t.to;
    o &&
      o !== n.to &&
      (Array.isArray(o) ? o : [o]).forEach((c) => e.to(c.property, c.value));
    const s = t.fromTo;
    s &&
      s !== n.fromTo &&
      (Array.isArray(s) ? s : [s]).forEach((c) =>
        e.fromTo(c.property, c.fromValue, c.toValue)
      );
    const a = t.onFinish;
    a &&
      a !== n.onFinish &&
      (Array.isArray(a) ? a : [a]).forEach((c) =>
        e.onFinish(c.callback, c.opts)
      );
  },
  JO = (e, t = {}, n = {}) => {
    var i, r, o, s, a;
    const { progressStart: l, progressStep: c, progressEnd: u } = t;
    l &&
      (((i = n.progressStart) === null || i === void 0
        ? void 0
        : i.forceLinearEasing) !== (l == null ? void 0 : l.forceLinearEasing) ||
        ((r = n.progressStart) === null || r === void 0 ? void 0 : r.step) !==
          (l == null ? void 0 : l.step)) &&
      e.progressStart(l.forceLinearEasing, l.step),
      c &&
        ((o = n.progressStep) === null || o === void 0 ? void 0 : o.step) !==
          (c == null ? void 0 : c.step) &&
        e.progressStep(c.step),
      u &&
        (((s = n.progressEnd) === null || s === void 0 ? void 0 : s.playTo) !==
          (u == null ? void 0 : u.playTo) ||
          ((a = n.progressEnd) === null || a === void 0 ? void 0 : a.step) !==
            (u == null ? void 0 : u.step) ||
          (n == null ? void 0 : n.dur) !== (u == null ? void 0 : u.dur)) &&
        e.progressEnd(u.playTo, u.step, u.dur);
  },
  rg = (e, t = {}, n = {}) => {
    !n.play && t.play && e.play(),
      !n.pause && t.pause && e.pause(),
      !n.stop && t.stop && e.stop(),
      !n.destroy && t.destroy && e.destroy();
  },
  og = { main: 0 },
  Ia = (e = "main") => {
    var t;
    const n = ((t = og[e]) !== null && t !== void 0 ? t : 0) + 1;
    return (og[e] = n), n.toString();
  },
  eR = (e = {}) => {
    typeof document < "u" && document.documentElement.classList.add("ion-ce"),
      t$(Object.assign({}, e));
  },
  Ky = S.createContext({
    addViewItem: () => {},
    canGoBack: () => {},
    clearOutlet: () => {},
    createViewItem: () => {},
    findViewItemByPathname: () => {},
    findLeavingViewItemByRouteInfo: () => {},
    findViewItemByRouteInfo: () => {},
    getChildrenToRender: () => {},
    goBack: () => {},
    unMountViewItem: () => {},
  });
class sg extends S.Component {
  constructor(t) {
    super(t),
      (this.ionLifeCycleContext = new mO()),
      (this._isMounted = !1),
      this.ionLifeCycleContext.onComponentCanBeDestroyed(() => {
        this.props.mount ||
          (this._isMounted &&
            this.setState({ show: !1 }, () => this.props.removeView()));
      }),
      (this.state = { show: !0 });
  }
  componentDidMount() {
    this._isMounted = !0;
  }
  componentWillUnmount() {
    this._isMounted = !1;
  }
  render() {
    const { show: t } = this.state;
    return S.createElement(
      Cl.Provider,
      { value: this.ionLifeCycleContext },
      t && this.props.children
    );
  }
}
class tR {
  constructor() {
    (this.locationHistory = []), (this.tabHistory = {});
  }
  add(t) {
    t.routeAction === "push" || t.routeAction == null
      ? this._add(t)
      : t.routeAction === "pop"
      ? this._pop(t)
      : t.routeAction === "replace" && this._replace(t),
      t.routeDirection === "root" && (this._clear(), this._add(t));
  }
  clearTabStack(t) {
    const n = this._getRouteInfosByKey(t);
    n &&
      (n.forEach((i) => {
        this.locationHistory = this.locationHistory.filter(
          (r) => r.id !== i.id
        );
      }),
      (this.tabHistory[t] = []));
  }
  update(t) {
    const n = this.locationHistory.findIndex((r) => r.id === t.id);
    n > -1 && this.locationHistory.splice(n, 1, t);
    const i = this.tabHistory[t.tab || ""];
    if (i) {
      const r = i.findIndex((o) => o.id === t.id);
      r > -1 ? i.splice(r, 1, t) : i.push(t);
    } else t.tab && (this.tabHistory[t.tab] = [t]);
  }
  _add(t) {
    const n = this._getRouteInfosByKey(t.tab);
    n && (this._areRoutesEqual(n[n.length - 1], t) && n.pop(), n.push(t)),
      this.locationHistory.push(t);
  }
  _areRoutesEqual(t, n) {
    return !t || !n ? !1 : t.pathname === n.pathname && t.search === n.search;
  }
  _pop(t) {
    const n = this._getRouteInfosByKey(t.tab);
    n && (n.pop(), n.pop(), n.push(t)),
      this.locationHistory.pop(),
      this.locationHistory.pop(),
      this.locationHistory.push(t);
  }
  _replace(t) {
    const n = this._getRouteInfosByKey(t.tab);
    n && n.pop(), this.locationHistory.pop(), this._add(t);
  }
  _clear() {
    Object.keys(this.tabHistory).forEach((n) => (this.tabHistory[n] = [])),
      (this.locationHistory = []);
  }
  _getRouteInfosByKey(t) {
    let n;
    return (
      t && ((n = this.tabHistory[t]), n || (n = this.tabHistory[t] = [])), n
    );
  }
  getFirstRouteInfoForTab(t) {
    const n = this._getRouteInfosByKey(t);
    if (n) return n[0];
  }
  getCurrentRouteInfoForTab(t) {
    const n = this._getRouteInfosByKey(t);
    if (n) return n[n.length - 1];
  }
  findLastLocation(t) {
    const n = this._getRouteInfosByKey(t.tab);
    if (n)
      for (let i = n.length - 2; i >= 0; i--) {
        const r = n[i];
        if (r && r.pathname === t.pushedByRoute) return r;
      }
    for (let i = this.locationHistory.length - 2; i >= 0; i--) {
      const r = this.locationHistory[i];
      if (r && r.pathname === t.pushedByRoute) return r;
    }
  }
  previous() {
    return (
      this.locationHistory[this.locationHistory.length - 2] ||
      this.locationHistory[this.locationHistory.length - 1]
    );
  }
  current() {
    return this.locationHistory[this.locationHistory.length - 1];
  }
  canGoBack() {
    return this.locationHistory.length > 1;
  }
}
class nR extends S.PureComponent {
  constructor(t) {
    super(t),
      (this.ionRouterContextValue = {
        push: (n, i, r, o, s) => {
          this.navigate(n, i, r, s, o);
        },
        back: (n) => {
          this.goBack(void 0, n);
        },
        canGoBack: () => this.props.locationHistory.canGoBack(),
        nativeBack: () => this.props.onNativeBack(),
        routeInfo: this.props.routeInfo,
      }),
      (this.state = {
        goBack: this.goBack.bind(this),
        hasIonicRouter: () => !0,
        navigate: this.navigate.bind(this),
        getIonRedirect: this.getIonRedirect.bind(this),
        getIonRoute: this.getIonRoute.bind(this),
        getStackManager: this.getStackManager.bind(this),
        getPageManager: this.getPageManager.bind(this),
        routeInfo: this.props.routeInfo,
        setCurrentTab: this.props.onSetCurrentTab,
        changeTab: this.props.onChangeTab,
        resetTab: this.props.onResetTab,
      });
  }
  componentDidMount() {
    typeof document < "u" &&
      ((this.handleHardwareBackButton =
        this.handleHardwareBackButton.bind(this)),
      document.addEventListener(
        "ionBackButton",
        this.handleHardwareBackButton
      ));
  }
  componentWillUnmount() {
    typeof document < "u" &&
      document.removeEventListener(
        "ionBackButton",
        this.handleHardwareBackButton
      );
  }
  handleHardwareBackButton(t) {
    t.detail.register(0, (n) => {
      this.nativeGoBack(), n();
    });
  }
  goBack(t, n) {
    this.props.onNavigateBack(t, n);
  }
  nativeGoBack() {
    this.props.onNativeBack();
  }
  navigate(t, n = "forward", i = "push", r, o, s) {
    this.props.onNavigate(t, i, n, r, o, s);
  }
  getPageManager() {
    return Gy;
  }
  getIonRedirect() {
    return this.props.ionRedirect;
  }
  getIonRoute() {
    return this.props.ionRoute;
  }
  getStackManager() {
    return this.props.stackManager;
  }
  render() {
    return S.createElement(
      ln.Provider,
      {
        value: Object.assign(Object.assign({}, this.state), {
          routeInfo: this.props.routeInfo,
        }),
      },
      S.createElement(
        ZO.Provider,
        {
          value: Object.assign(Object.assign({}, this.ionRouterContextValue), {
            routeInfo: this.props.routeInfo,
          }),
        },
        this.props.children
      )
    );
  }
}
class iR {
  constructor() {
    (this.viewStacks = {}),
      (this.add = this.add.bind(this)),
      (this.clear = this.clear.bind(this)),
      (this.getViewItemsForOutlet = this.getViewItemsForOutlet.bind(this)),
      (this.remove = this.remove.bind(this));
  }
  add(t) {
    const { outletId: n } = t;
    this.viewStacks[n]
      ? this.viewStacks[n].push(t)
      : (this.viewStacks[n] = [t]);
  }
  clear(t) {
    return setTimeout(() => {
      delete this.viewStacks[t];
    }, 500);
  }
  getViewItemsForOutlet(t) {
    return this.viewStacks[t] || [];
  }
  remove(t) {
    const { outletId: n } = t,
      i = this.viewStacks[n];
    if (i) {
      const r = i.find((o) => o.id === t.id);
      r &&
        ((r.mount = !1), (this.viewStacks[n] = i.filter((o) => o.id !== r.id)));
    }
  }
  getStackIds() {
    return Object.keys(this.viewStacks);
  }
  getAllViewItems() {
    const t = this.getStackIds(),
      n = [];
    return (
      t.forEach((i) => {
        n.push(...this.viewStacks[i]);
      }),
      n
    );
  }
}
class rR extends S.PureComponent {
  render() {
    return S.createElement(
      dn,
      Object.assign(
        {
          path: this.props.path,
          exact: this.props.exact,
          render: this.props.render,
        },
        this.props.computedMatch !== void 0
          ? { computedMatch: this.props.computedMatch }
          : {}
      )
    );
  }
}
class oR extends iR {
  constructor() {
    super(),
      (this.createViewItem = this.createViewItem.bind(this)),
      (this.findViewItemByRouteInfo = this.findViewItemByRouteInfo.bind(this)),
      (this.findLeavingViewItemByRouteInfo =
        this.findLeavingViewItemByRouteInfo.bind(this)),
      (this.getChildrenToRender = this.getChildrenToRender.bind(this)),
      (this.findViewItemByPathname = this.findViewItemByPathname.bind(this));
  }
  createViewItem(t, n, i, r) {
    const o = {
        id: Ia("viewItem"),
        outletId: t,
        ionPageElement: r,
        reactElement: n,
        mount: !0,
        ionRoute: !1,
      },
      s = {
        exact: n.props.exact,
        path: n.props.path || n.props.from,
        component: n.props.component,
      },
      a = vi(i.pathname, s);
    return (
      n.type === hh &&
        ((o.ionRoute = !0),
        (o.disableIonPageManagement = n.props.disableIonPageManagement)),
      (o.routeData = { match: a, childProps: n.props }),
      o
    );
  }
  getChildrenToRender(t, n, i) {
    const r = this.getViewItemsForOutlet(t);
    return (
      S.Children.forEach(n.props.children, (s) => {
        const a = r.find((l) =>
          ag(s, l.routeData.childProps.path || l.routeData.childProps.from)
        );
        a && (a.reactElement = s);
      }),
      r.map((s) => {
        let a;
        if (s.ionRoute && !s.disableIonPageManagement)
          a = S.createElement(
            sg,
            {
              key: `view-${s.id}`,
              mount: s.mount,
              removeView: () => this.remove(s),
            },
            S.cloneElement(s.reactElement, { computedMatch: s.routeData.match })
          );
        else {
          const l = ag(s.reactElement, i.pathname);
          (a = S.createElement(
            sg,
            {
              key: `view-${s.id}`,
              mount: s.mount,
              removeView: () => this.remove(s),
            },
            S.cloneElement(s.reactElement, { computedMatch: s.routeData.match })
          )),
            !l &&
              s.routeData.match &&
              ((s.routeData.match = void 0), (s.mount = !1));
        }
        return a;
      })
    );
  }
  findViewItemByRouteInfo(t, n, i) {
    const { viewItem: r, match: o } = this.findViewItemByPath(t.pathname, n);
    return (i === void 0 || i === !0) && r && o && (r.routeData.match = o), r;
  }
  findLeavingViewItemByRouteInfo(t, n, i = !0) {
    const { viewItem: r } = this.findViewItemByPath(t.lastPathname, n, !1, i);
    return r;
  }
  findViewItemByPathname(t, n) {
    const { viewItem: i } = this.findViewItemByPath(t, n);
    return i;
  }
  findViewItemByPath(t, n, i, r) {
    let o, s, a;
    if (n) (a = this.getViewItemsForOutlet(n)), a.some(l), o || a.some(c);
    else {
      const u = this.getAllViewItems();
      u.some(l), o || u.some(c);
    }
    return { viewItem: o, match: s };
    function l(u) {
      if (r && !u.ionRoute) return !1;
      const d = {
          exact: i ? !0 : u.routeData.childProps.exact,
          path: u.routeData.childProps.path || u.routeData.childProps.from,
          component: u.routeData.childProps.component,
        },
        f = vi(t, d);
      return f ? ((o = u), (s = f), !0) : !1;
    }
    function c(u) {
      return !u.routeData.childProps.path && !u.routeData.childProps.from
        ? ((s = { path: t, url: t, isExact: !0, params: {} }), (o = u), !0)
        : !1;
    }
  }
}
function ag(e, t, n) {
  const i = {
    exact: n ? !0 : e.props.exact,
    path: e.props.path || e.props.from,
    component: e.props.component,
  };
  return vi(t, i);
}
function sR(e) {
  let t;
  if ((typeof e == "string" ? (t = e) : (t = e.outerHTML), document)) {
    const n = document.createElement("div");
    (n.innerHTML = t), (n.style.zIndex = "");
    const i = n.getElementsByTagName("ion-back-button");
    return i[0] && i[0].remove(), n.firstChild;
  }
}
const lg = (e) =>
  !e.classList.contains("ion-page-invisible") &&
  !e.classList.contains("ion-page-hidden");
class aR extends S.PureComponent {
  constructor(t) {
    super(t),
      (this.stackContextValue = {
        registerIonPage: this.registerIonPage.bind(this),
        isInOutlet: () => !0,
      }),
      (this.pendingPageTransition = !1),
      (this.registerIonPage = this.registerIonPage.bind(this)),
      (this.transitionPage = this.transitionPage.bind(this)),
      (this.handlePageTransition = this.handlePageTransition.bind(this)),
      (this.id = Ia("routerOutlet")),
      (this.prevProps = void 0),
      (this.skipTransition = !1);
  }
  componentDidMount() {
    this.clearOutletTimeout && clearTimeout(this.clearOutletTimeout),
      this.routerOutletElement &&
        (this.setupRouterOutlet(this.routerOutletElement),
        this.handlePageTransition(this.props.routeInfo));
  }
  componentDidUpdate(t) {
    const { pathname: n } = this.props.routeInfo,
      { pathname: i } = t.routeInfo;
    n !== i
      ? ((this.prevProps = t), this.handlePageTransition(this.props.routeInfo))
      : this.pendingPageTransition &&
        (this.handlePageTransition(this.props.routeInfo),
        (this.pendingPageTransition = !1));
  }
  componentWillUnmount() {
    this.clearOutletTimeout = this.context.clearOutlet(this.id);
  }
  async handlePageTransition(t) {
    var n, i;
    if (!this.routerOutletElement || !this.routerOutletElement.commit)
      this.pendingPageTransition = !0;
    else {
      let r = this.context.findViewItemByRouteInfo(t, this.id),
        o = this.context.findLeavingViewItemByRouteInfo(t, this.id);
      !o &&
        t.prevRouteLastPathname &&
        (o = this.context.findViewItemByPathname(
          t.prevRouteLastPathname,
          this.id
        )),
        o &&
          (t.routeAction === "replace"
            ? (o.mount = !1)
            : t.routeAction === "push" && t.routeDirection === "forward"
            ? !((n = t.routeOptions) === null || n === void 0) &&
              n.unmount &&
              (o.mount = !1)
            : t.routeDirection !== "none" && r !== o && (o.mount = !1));
      const s = lR(
        (i = this.ionRouterOutlet) === null || i === void 0
          ? void 0
          : i.props.children,
        t
      );
      if (
        (r
          ? (r.reactElement = s)
          : s &&
            ((r = this.context.createViewItem(this.id, s, t)),
            this.context.addViewItem(r)),
        r && r.ionPageElement)
      ) {
        if (
          (r === o && r.routeData.match.url !== t.pathname) ||
          (!o &&
            this.props.routeInfo.prevRouteLastPathname &&
            (o = this.context.findViewItemByPathname(
              this.props.routeInfo.prevRouteLastPathname,
              this.id
            )),
          lg(r.ionPageElement) && o !== void 0 && !lg(o.ionPageElement))
        )
          return;
        this.transitionPage(t, r, o);
      } else
        o &&
          !s &&
          !r &&
          o.ionPageElement &&
          (o.ionPageElement.classList.add("ion-page-hidden"),
          o.ionPageElement.setAttribute("aria-hidden", "true"));
      this.forceUpdate();
    }
  }
  registerIonPage(t, n) {
    const i = this.context.findViewItemByRouteInfo(n, this.id);
    if (i) {
      const r = i.ionPageElement;
      if (((i.ionPageElement = t), (i.ionRoute = !0), r === t)) return;
    }
    this.handlePageTransition(n);
  }
  async setupRouterOutlet(t) {
    const n = () => {
        const o = uh();
        if (!(o && o.get("swipeBackEnabled", t.mode === "ios"))) return !1;
        const { routeInfo: a } = this.props,
          l =
            this.prevProps &&
            this.prevProps.routeInfo.pathname === a.pushedByRoute
              ? this.prevProps.routeInfo
              : { pathname: a.pushedByRoute || "" },
          c = this.context.findViewItemByRouteInfo(l, this.id, !1);
        return !!c && c.mount && c.routeData.match.path !== a.pathname;
      },
      i = async () => {
        const { routeInfo: o } = this.props,
          s =
            this.prevProps &&
            this.prevProps.routeInfo.pathname === o.pushedByRoute
              ? this.prevProps.routeInfo
              : { pathname: o.pushedByRoute || "" },
          a = this.context.findViewItemByRouteInfo(s, this.id, !1),
          l = this.context.findViewItemByRouteInfo(o, this.id, !1);
        return (
          a && l && (await this.transitionPage(o, a, l, "back", !0)),
          Promise.resolve()
        );
      },
      r = (o) => {
        if (o) (this.skipTransition = !0), this.context.goBack();
        else {
          const { routeInfo: s } = this.props,
            a =
              this.prevProps &&
              this.prevProps.routeInfo.pathname === s.pushedByRoute
                ? this.prevProps.routeInfo
                : { pathname: s.pushedByRoute || "" },
            l = this.context.findViewItemByRouteInfo(a, this.id, !1),
            c = this.context.findViewItemByRouteInfo(s, this.id, !1);
          if (l !== c && (l == null ? void 0 : l.ionPageElement) !== void 0) {
            const { ionPageElement: u } = l;
            u.setAttribute("aria-hidden", "true"),
              u.classList.add("ion-page-hidden");
          }
        }
      };
    t.swipeHandler = { canStart: n, onStart: i, onEnd: r };
  }
  async transitionPage(t, n, i, r, o = !1) {
    const s = async (u, d) => {
        const f = this.skipTransition;
        f
          ? (this.skipTransition = !1)
          : (u.classList.add("ion-page"),
            u.classList.add("ion-page-invisible")),
          await a.commit(u, d, {
            duration: f || c === void 0 ? 0 : void 0,
            direction: c,
            showGoBack: !!t.pushedByRoute,
            progressAnimation: o,
            animationBuilder: t.routeAnimation,
          });
      },
      a = this.routerOutletElement,
      l =
        t.routeDirection === "none" || t.routeDirection === "root"
          ? void 0
          : t.routeDirection,
      c = r != null ? r : l;
    if (n && n.ionPageElement && this.routerOutletElement)
      if (i && i.ionPageElement && n === i)
        if (cR(i.reactElement, t.pathname, !0)) {
          const d = sR(i.ionPageElement.outerHTML);
          d &&
            (this.routerOutletElement.appendChild(d),
            await s(n.ionPageElement, d),
            this.routerOutletElement.removeChild(d));
        } else await s(n.ionPageElement, void 0);
      else
        await s(n.ionPageElement, i == null ? void 0 : i.ionPageElement),
          i &&
            i.ionPageElement &&
            !o &&
            (i.ionPageElement.classList.add("ion-page-hidden"),
            i.ionPageElement.setAttribute("aria-hidden", "true"));
  }
  render() {
    const { children: t } = this.props,
      n = S.Children.only(t);
    this.ionRouterOutlet = n;
    const i = this.context.getChildrenToRender(
      this.id,
      this.ionRouterOutlet,
      this.props.routeInfo,
      () => {
        this.forceUpdate();
      }
    );
    return S.createElement(
      fh.Provider,
      { value: this.stackContextValue },
      S.cloneElement(
        n,
        {
          ref: (r) => {
            n.props.setRef && n.props.setRef(r),
              n.props.forwardedRef && (n.props.forwardedRef.current = r),
              (this.routerOutletElement = r);
            const { ref: o } = n;
            typeof o == "function" && o(r);
          },
        },
        i
      )
    );
  }
  static get contextType() {
    return Ky;
  }
}
function lR(e, t) {
  let n;
  return (
    S.Children.forEach(e, (i) => {
      const r = {
        exact: i.props.exact,
        path: i.props.path || i.props.from,
        component: i.props.component,
      };
      vi(t.pathname, r) && (n = i);
    }),
    n ||
      (S.Children.forEach(e, (i) => {
        i.props.path || i.props.from || (n = i);
      }),
      n)
  );
}
function cR(e, t, n) {
  const i = {
    exact: n ? !0 : e.props.exact,
    path: e.props.path || e.props.from,
    component: e.props.component,
  };
  return vi(t, i);
}
class uR extends S.PureComponent {
  constructor(t) {
    super(t),
      (this.exitViewFromOtherOutletHandlers = []),
      (this.locationHistory = new tR()),
      (this.viewStack = new oR()),
      (this.routeMangerContextState = {
        canGoBack: () => this.locationHistory.canGoBack(),
        clearOutlet: this.viewStack.clear,
        findViewItemByPathname: this.viewStack.findViewItemByPathname,
        getChildrenToRender: this.viewStack.getChildrenToRender,
        goBack: () => this.handleNavigateBack(),
        createViewItem: this.viewStack.createViewItem,
        findViewItemByRouteInfo: this.viewStack.findViewItemByRouteInfo,
        findLeavingViewItemByRouteInfo:
          this.viewStack.findLeavingViewItemByRouteInfo,
        addViewItem: this.viewStack.add,
        unMountViewItem: this.viewStack.remove,
      });
    const n = {
      id: Ia("routeInfo"),
      pathname: this.props.location.pathname,
      search: this.props.location.search,
    };
    this.locationHistory.add(n),
      (this.handleChangeTab = this.handleChangeTab.bind(this)),
      (this.handleResetTab = this.handleResetTab.bind(this)),
      (this.handleNativeBack = this.handleNativeBack.bind(this)),
      (this.handleNavigate = this.handleNavigate.bind(this)),
      (this.handleNavigateBack = this.handleNavigateBack.bind(this)),
      this.props.registerHistoryListener(this.handleHistoryChange.bind(this)),
      (this.handleSetCurrentTab = this.handleSetCurrentTab.bind(this)),
      (this.state = { routeInfo: n });
  }
  handleChangeTab(t, n, i) {
    if (!n) return;
    const r = this.locationHistory.getCurrentRouteInfoForTab(t),
      [o, s] = n.split("?");
    r
      ? ((this.incomingRouteParams = Object.assign(Object.assign({}, r), {
          routeAction: "push",
          routeDirection: "none",
        })),
        r.pathname === o
          ? ((this.incomingRouteParams.routeOptions = i),
            this.props.history.push(r.pathname + (r.search || "")))
          : ((this.incomingRouteParams.pathname = o),
            (this.incomingRouteParams.search = s ? "?" + s : void 0),
            (this.incomingRouteParams.routeOptions = i),
            this.props.history.push(o + (s ? "?" + s : ""))))
      : this.handleNavigate(o, "push", "none", void 0, i, t);
  }
  handleHistoryChange(t, n) {
    var i, r, o;
    let s;
    if (
      (this.incomingRouteParams
        ? this.incomingRouteParams.routeAction === "replace"
          ? (s = this.locationHistory.previous())
          : (s = this.locationHistory.current())
        : (s = this.locationHistory.current()),
      s.pathname + s.search !== t.pathname)
    ) {
      if (!this.incomingRouteParams) {
        if (
          (n === "REPLACE" &&
            (this.incomingRouteParams = {
              routeAction: "replace",
              routeDirection: "none",
              tab: this.currentTab,
            }),
          n === "POP")
        ) {
          const c = this.locationHistory.current();
          if (c && c.pushedByRoute) {
            const u = this.locationHistory.findLastLocation(c);
            this.incomingRouteParams = Object.assign(Object.assign({}, u), {
              routeAction: "pop",
              routeDirection: "back",
            });
          } else
            this.incomingRouteParams = {
              routeAction: "pop",
              routeDirection: "none",
              tab: this.currentTab,
            };
        }
        this.incomingRouteParams ||
          (this.incomingRouteParams = {
            routeAction: "push",
            routeDirection:
              ((i = t.state) === null || i === void 0 ? void 0 : i.direction) ||
              "forward",
            routeOptions:
              (r = t.state) === null || r === void 0 ? void 0 : r.routerOptions,
            tab: this.currentTab,
          });
      }
      let l;
      if (!((o = this.incomingRouteParams) === null || o === void 0) && o.id)
        (l = Object.assign(Object.assign({}, this.incomingRouteParams), {
          lastPathname: s.pathname,
        })),
          this.locationHistory.add(l);
      else {
        const c =
          this.incomingRouteParams.routeAction === "push" &&
          this.incomingRouteParams.routeDirection === "forward";
        if (
          ((l = Object.assign(
            Object.assign({ id: Ia("routeInfo") }, this.incomingRouteParams),
            {
              lastPathname: s.pathname,
              pathname: t.pathname,
              search: t.search,
              params: this.props.match.params,
              prevRouteLastPathname: s.lastPathname,
            }
          )),
          c)
        )
          (l.tab = s.tab), (l.pushedByRoute = s.pathname);
        else if (l.routeAction === "pop") {
          const u = this.locationHistory.findLastLocation(l);
          l.pushedByRoute = u == null ? void 0 : u.pushedByRoute;
        } else if (l.routeAction === "push" && l.tab !== s.tab) {
          const u = this.locationHistory.getCurrentRouteInfoForTab(l.tab);
          l.pushedByRoute = u == null ? void 0 : u.pushedByRoute;
        } else if (l.routeAction === "replace") {
          const u = this.locationHistory.current(),
            d = u == null ? void 0 : u.pushedByRoute,
            f = d !== void 0 && d !== l.pathname ? d : l.pushedByRoute;
          (l.lastPathname =
            (u == null ? void 0 : u.pathname) || l.lastPathname),
            (l.prevRouteLastPathname = u == null ? void 0 : u.lastPathname),
            (l.pushedByRoute = f),
            (l.routeDirection =
              (u == null ? void 0 : u.routeDirection) || l.routeDirection),
            (l.routeAnimation =
              (u == null ? void 0 : u.routeAnimation) || l.routeAnimation);
        }
        this.locationHistory.add(l);
      }
      this.setState({ routeInfo: l });
    }
    this.incomingRouteParams = void 0;
  }
  handleNativeBack() {
    const t = this.props.history;
    (t.goBack || t.back)();
  }
  handleNavigate(t, n, i, r, o, s) {
    (this.incomingRouteParams = Object.assign(this.incomingRouteParams || {}, {
      routeAction: n,
      routeDirection: i,
      routeOptions: o,
      routeAnimation: r,
      tab: s,
    })),
      n === "push" ? this.props.history.push(t) : this.props.history.replace(t);
  }
  handleNavigateBack(t = "/", n) {
    const i = uh();
    t = t || (i && i.get("backButtonDefaultHref"));
    const r = this.locationHistory.current();
    if (r && r.pushedByRoute) {
      const o = this.locationHistory.findLastLocation(r);
      if (o)
        if (
          ((this.incomingRouteParams = Object.assign(Object.assign({}, o), {
            routeAction: "pop",
            routeDirection: "back",
            routeAnimation: n || r.routeAnimation,
          })),
          r.lastPathname === r.pushedByRoute ||
            (o.pathname === r.pushedByRoute && r.tab === "" && o.tab === ""))
        ) {
          const s = this.props.history;
          (s.goBack || s.back)();
        } else
          this.handleNavigate(o.pathname + (o.search || ""), "pop", "back");
      else this.handleNavigate(t, "pop", "back");
    } else this.handleNavigate(t, "pop", "back");
  }
  handleResetTab(t, n, i) {
    const r = this.locationHistory.getFirstRouteInfoForTab(t);
    if (r) {
      const o = Object.assign({}, r);
      (o.pathname = n),
        (o.routeOptions = i),
        (this.incomingRouteParams = Object.assign(Object.assign({}, o), {
          routeAction: "pop",
          routeDirection: "back",
        })),
        this.props.history.push(o.pathname + (o.search || ""));
    }
  }
  handleSetCurrentTab(t) {
    this.currentTab = t;
    const n = Object.assign({}, this.locationHistory.current());
    n.tab !== t && ((n.tab = t), this.locationHistory.update(n));
  }
  render() {
    return S.createElement(
      Ky.Provider,
      { value: this.routeMangerContextState },
      S.createElement(
        nR,
        {
          ionRoute: rR,
          ionRedirect: {},
          stackManager: aR,
          routeInfo: this.state.routeInfo,
          onNativeBack: this.handleNativeBack,
          onNavigateBack: this.handleNavigateBack,
          onNavigate: this.handleNavigate,
          onSetCurrentTab: this.handleSetCurrentTab,
          onChangeTab: this.handleChangeTab,
          onResetTab: this.handleResetTab,
          locationHistory: this.locationHistory,
        },
        this.props.children
      )
    );
  }
}
const Tl = pS(uR);
Tl.displayName = "IonRouter";
class dR extends S.Component {
  constructor(t) {
    super(t);
    const { history: n } = t,
      i = Ke(t, ["history"]);
    (this.history = n || bE(i)),
      this.history.listen(this.handleHistoryChange.bind(this)),
      (this.registerHistoryListener = this.registerHistoryListener.bind(this));
  }
  handleHistoryChange(t, n) {
    const i = t.location || t,
      r = t.action || n;
    this.historyListenHandler && this.historyListenHandler(i, r);
  }
  registerHistoryListener(t) {
    this.historyListenHandler = t;
  }
  render() {
    const t = this.props,
      { children: n } = t,
      i = Ke(t, ["children"]);
    return S.createElement(
      Vo,
      Object.assign({ history: this.history }, i),
      S.createElement(
        Tl,
        { registerHistoryListener: this.registerHistoryListener },
        n
      )
    );
  }
}
class A_ extends S.Component {
  constructor(t) {
    super(t),
      (this.history = t.history),
      this.history.listen(this.handleHistoryChange.bind(this)),
      (this.registerHistoryListener = this.registerHistoryListener.bind(this));
  }
  handleHistoryChange(t, n) {
    const i = t.location || t,
      r = t.action || n;
    this.historyListenHandler && this.historyListenHandler(i, r);
  }
  registerHistoryListener(t) {
    this.historyListenHandler = t;
  }
  render() {
    const t = this.props,
      { children: n } = t,
      i = Ke(t, ["children"]);
    return S.createElement(
      Vo,
      Object.assign({}, i),
      S.createElement(
        Tl,
        { registerHistoryListener: this.registerHistoryListener },
        n
      )
    );
  }
}
class O_ extends S.Component {
  constructor(t) {
    super(t);
    const { history: n } = t,
      i = Ke(t, ["history"]);
    (this.history = n || xE(i)),
      this.history.listen(this.handleHistoryChange.bind(this)),
      (this.registerHistoryListener = this.registerHistoryListener.bind(this));
  }
  handleHistoryChange(t, n) {
    const i = t.location || t,
      r = t.action || n;
    this.historyListenHandler && this.historyListenHandler(i, r);
  }
  registerHistoryListener(t) {
    this.historyListenHandler = t;
  }
  render() {
    const t = this.props,
      { children: n } = t,
      i = Ke(t, ["children"]);
    return S.createElement(
      Vo,
      Object.assign({ history: this.history }, i),
      S.createElement(
        Tl,
        { registerHistoryListener: this.registerHistoryListener },
        n
      )
    );
  }
}
const fR = ({ message: e }) =>
    ne(Yy, {
      routerLink: `/message/${e.id}`,
      detail: !1,
      children: [
        C("div", { slot: "start", className: "dot dot-unread" }),
        ne(Wy, {
          className: "ion-text-wrap",
          children: [
            ne("h2", {
              children: [
                e.fromName,
                C("span", {
                  className: "date",
                  children: C(yd, { children: e.date }),
                }),
              ],
            }),
            C("h3", { children: e.subject }),
            C("p", {
              children:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            }),
          ],
        }),
      ],
    }),
  Qy = [
    {
      fromName: "Matt Chorsey",
      subject: "New event: Trip to Vegas",
      date: "9:32 AM",
      id: 0,
    },
    {
      fromName: "Lauren Ruthford",
      subject: "Long time no chat",
      date: "6:12 AM",
      id: 1,
    },
    {
      fromName: "Jordan Firth",
      subject: "Report Results",
      date: "4:55 AM",
      id: 2,
    },
    {
      fromName: "Bill Thomas",
      subject: "The situation",
      date: "Yesterday",
      id: 3,
    },
    {
      fromName: "Joanne Pollan",
      subject: "Updated invitation: Swim lessons",
      date: "Yesterday",
      id: 4,
    },
    {
      fromName: "Andrea Cornerston",
      subject: "Last minute ask",
      date: "Yesterday",
      id: 5,
    },
    {
      fromName: "Moe Chamont",
      subject: "Family Calendar - Version 1",
      date: "Last Week",
      id: 6,
    },
    {
      fromName: "Kelly Richardson",
      subject: "Placeholder Headhots",
      date: "Last Week",
      id: 7,
    },
  ],
  hR = () => Qy,
  pR = (e) => Qy.find((t) => t.id === e);
const mR = () => {
    const [e, t] = H.useState([]);
    return (
      qy(() => {
        const i = hR();
        t(i);
      }),
      ne(Ti, {
        id: "home-page",
        children: [
          C(bd, {
            children: C(wd, { children: C(tg, { children: "Inbox" }) }),
          }),
          ne(ch, {
            fullscreen: !0,
            children: [
              C(SO, {
                slot: "fixed",
                onIonRefresh: (i) => {
                  setTimeout(() => {
                    i.detail.complete();
                  }, 3e3);
                },
                children: C(CO, {}),
              }),
              C(bd, {
                collapse: "condense",
                children: C(wd, {
                  children: C(tg, { size: "large", children: "Inbox" }),
                }),
              }),
              C(EO, { children: e.map((i) => C(fR, { message: i }, i.id)) }),
            ],
          }),
        ],
      })
    );
  },
  gR =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93zM256 432a175.49 175.49 0 01-126-53.22 122.91 122.91 0 0135.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 01382 378.78 175.45 175.45 0 01256 432z'/></svg>";
function vR() {
  const [e, t] = H.useState(),
    n = gS();
  return (
    qy(() => {
      const i = pR(parseInt(n.id, 10));
      t(i);
    }),
    ne(Ti, {
      id: "view-message-page",
      children: [
        C(bd, {
          translucent: !0,
          children: C(wd, {
            children: C(kO, {
              slot: "start",
              children: C(XO, { text: "Inbox", defaultHref: "/home" }),
            }),
          }),
        }),
        C(ch, {
          fullscreen: !0,
          children: e
            ? ne(zd, {
                children: [
                  ne(Yy, {
                    children: [
                      C(QO, {
                        "aria-hidden": "true",
                        icon: gR,
                        color: "primary",
                      }),
                      ne(Wy, {
                        className: "ion-text-wrap",
                        children: [
                          ne("h2", {
                            children: [
                              e.fromName,
                              C("span", {
                                className: "date",
                                children: C(yd, { children: e.date }),
                              }),
                            ],
                          }),
                          ne("h3", {
                            children: ["To: ", C(yd, { children: "Me" })],
                          }),
                        ],
                      }),
                    ],
                  }),
                  ne("div", {
                    className: "ion-padding",
                    children: [
                      C("h1", { children: e.subject }),
                      C("p", {
                        children:
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                      }),
                    ],
                  }),
                ],
              })
            : C("div", { children: "Message not found" }),
        }),
      ],
    })
  );
}
var de = "-ms-",
  mo = "-moz-",
  ie = "-webkit-",
  Zy = "comm",
  Al = "rule",
  ph = "decl",
  bR = "@import",
  Jy = "@keyframes",
  yR = "@layer",
  wR = Math.abs,
  mh = String.fromCharCode,
  kd = Object.assign;
function xR(e, t) {
  return Le(e, 0) ^ 45
    ? (((((((t << 2) ^ Le(e, 0)) << 2) ^ Le(e, 1)) << 2) ^ Le(e, 2)) << 2) ^
        Le(e, 3)
    : 0;
}
function ew(e) {
  return e.trim();
}
function hn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function W(e, t, n) {
  return e.replace(t, n);
}
function Ns(e, t) {
  return e.indexOf(t);
}
function Le(e, t) {
  return e.charCodeAt(t) | 0;
}
function wr(e, t, n) {
  return e.slice(t, n);
}
function en(e) {
  return e.length;
}
function tw(e) {
  return e.length;
}
function eo(e, t) {
  return t.push(e), e;
}
function kR(e, t) {
  return e.map(t).join("");
}
function cg(e, t) {
  return e.filter(function (n) {
    return !hn(n, t);
  });
}
var Ol = 1,
  xr = 1,
  nw = 0,
  Mt = 0,
  $e = 0,
  Rr = "";
function Rl(e, t, n, i, r, o, s, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: i,
    props: r,
    children: o,
    line: Ol,
    column: xr,
    length: s,
    return: "",
    siblings: a,
  };
}
function $n(e, t) {
  return kd(
    Rl("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Li(e) {
  for (; e.root; ) e = $n(e.root, { children: [e] });
  eo(e, e.siblings);
}
function ER() {
  return $e;
}
function SR() {
  return (
    ($e = Mt > 0 ? Le(Rr, --Mt) : 0), xr--, $e === 10 && ((xr = 1), Ol--), $e
  );
}
function Gt() {
  return (
    ($e = Mt < nw ? Le(Rr, Mt++) : 0), xr++, $e === 10 && ((xr = 1), Ol++), $e
  );
}
function ui() {
  return Le(Rr, Mt);
}
function Hs() {
  return Mt;
}
function Il(e, t) {
  return wr(Rr, e, t);
}
function Ed(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function CR(e) {
  return (Ol = xr = 1), (nw = en((Rr = e))), (Mt = 0), [];
}
function $R(e) {
  return (Rr = ""), e;
}
function Bc(e) {
  return ew(Il(Mt - 1, Sd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function PR(e) {
  for (; ($e = ui()) && $e < 33; ) Gt();
  return Ed(e) > 2 || Ed($e) > 3 ? "" : " ";
}
function TR(e, t) {
  for (
    ;
    --t &&
    Gt() &&
    !($e < 48 || $e > 102 || ($e > 57 && $e < 65) || ($e > 70 && $e < 97));

  );
  return Il(e, Hs() + (t < 6 && ui() == 32 && Gt() == 32));
}
function Sd(e) {
  for (; Gt(); )
    switch ($e) {
      case e:
        return Mt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sd($e);
        break;
      case 40:
        e === 41 && Sd(e);
        break;
      case 92:
        Gt();
        break;
    }
  return Mt;
}
function AR(e, t) {
  for (; Gt() && e + $e !== 47 + 10; )
    if (e + $e === 42 + 42 && ui() === 47) break;
  return "/*" + Il(t, Mt - 1) + "*" + mh(e === 47 ? e : Gt());
}
function OR(e) {
  for (; !Ed(ui()); ) Gt();
  return Il(e, Mt);
}
function RR(e) {
  return $R(Us("", null, null, null, [""], (e = CR(e)), 0, [0], e));
}
function Us(e, t, n, i, r, o, s, a, l) {
  for (
    var c = 0,
      u = 0,
      d = s,
      f = 0,
      h = 0,
      m = 0,
      b = 1,
      k = 1,
      g = 1,
      p = 0,
      v = "",
      y = r,
      E = o,
      T = i,
      w = v;
    k;

  )
    switch (((m = p), (p = Gt()))) {
      case 40:
        if (m != 108 && Le(w, d - 1) == 58) {
          Ns((w += W(Bc(p), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Bc(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += PR(m);
        break;
      case 92:
        w += TR(Hs() - 1, 7);
        continue;
      case 47:
        switch (ui()) {
          case 42:
          case 47:
            eo(IR(AR(Gt(), Hs()), t, n, l), l);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * b:
        a[c++] = en(w) * g;
      case 125 * b:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            k = 0;
          case 59 + u:
            g == -1 && (w = W(w, /\f/g, "")),
              h > 0 &&
                en(w) - d &&
                eo(
                  h > 32
                    ? dg(w + ";", i, n, d - 1, l)
                    : dg(W(w, " ", "") + ";", i, n, d - 2, l),
                  l
                );
            break;
          case 59:
            w += ";";
          default:
            if (
              (eo(
                (T = ug(w, t, n, c, u, r, a, v, (y = []), (E = []), d, o)),
                o
              ),
              p === 123)
            )
              if (u === 0) Us(w, t, T, T, y, o, d, a, E);
              else
                switch (f === 99 && Le(w, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Us(
                      e,
                      T,
                      T,
                      i && eo(ug(e, T, T, 0, 0, r, a, v, r, (y = []), d, E), E),
                      r,
                      E,
                      d,
                      a,
                      i ? y : E
                    );
                    break;
                  default:
                    Us(w, T, T, T, [""], E, 0, a, E);
                }
        }
        (c = u = h = 0), (b = g = 1), (v = w = ""), (d = s);
        break;
      case 58:
        (d = 1 + en(w)), (h = m);
      default:
        if (b < 1) {
          if (p == 123) --b;
          else if (p == 125 && b++ == 0 && SR() == 125) continue;
        }
        switch (((w += mh(p)), p * b)) {
          case 38:
            g = u > 0 ? 1 : ((w += "\f"), -1);
            break;
          case 44:
            (a[c++] = (en(w) - 1) * g), (g = 1);
            break;
          case 64:
            ui() === 45 && (w += Bc(Gt())),
              (f = ui()),
              (u = d = en((v = w += OR(Hs())))),
              p++;
            break;
          case 45:
            m === 45 && en(w) == 2 && (b = 0);
        }
    }
  return o;
}
function ug(e, t, n, i, r, o, s, a, l, c, u, d) {
  for (
    var f = r - 1, h = r === 0 ? o : [""], m = tw(h), b = 0, k = 0, g = 0;
    b < i;
    ++b
  )
    for (var p = 0, v = wr(e, f + 1, (f = wR((k = s[b])))), y = e; p < m; ++p)
      (y = ew(k > 0 ? h[p] + " " + v : W(v, /&\f/g, h[p]))) && (l[g++] = y);
  return Rl(e, t, n, r === 0 ? Al : a, l, c, u, d);
}
function IR(e, t, n, i) {
  return Rl(e, t, n, Zy, mh(ER()), wr(e, 2, -2), 0, i);
}
function dg(e, t, n, i, r) {
  return Rl(e, t, n, ph, wr(e, 0, i), wr(e, i + 1, -1), i, r);
}
function iw(e, t, n) {
  switch (xR(e, t)) {
    case 5103:
      return ie + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ie + e + e;
    case 4789:
      return mo + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ie + e + mo + e + de + e + e;
    case 5936:
      switch (Le(e, t + 11)) {
        case 114:
          return ie + e + de + W(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ie + e + de + W(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ie + e + de + W(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ie + e + de + e + e;
    case 6165:
      return ie + e + de + "flex-" + e + e;
    case 5187:
      return (
        ie + e + W(e, /(\w+).+(:[^]+)/, ie + "box-$1$2" + de + "flex-$1$2") + e
      );
    case 5443:
      return (
        ie +
        e +
        de +
        "flex-item-" +
        W(e, /flex-|-self/g, "") +
        (hn(e, /flex-|baseline/)
          ? ""
          : de + "grid-row-" + W(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        ie +
        e +
        de +
        "flex-line-pack" +
        W(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return ie + e + de + W(e, "shrink", "negative") + e;
    case 5292:
      return ie + e + de + W(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        ie +
        "box-" +
        W(e, "-grow", "") +
        ie +
        e +
        de +
        W(e, "grow", "positive") +
        e
      );
    case 4554:
      return ie + W(e, /([^-])(transform)/g, "$1" + ie + "$2") + e;
    case 6187:
      return (
        W(W(W(e, /(zoom-|grab)/, ie + "$1"), /(image-set)/, ie + "$1"), e, "") +
        e
      );
    case 5495:
    case 3959:
      return W(e, /(image-set\([^]*)/, ie + "$1$`$1");
    case 4968:
      return (
        W(
          W(e, /(.+:)(flex-)?(.*)/, ie + "box-pack:$3" + de + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ie +
        e +
        e
      );
    case 4200:
      if (!hn(e, /flex-|baseline/))
        return de + "grid-column-align" + wr(e, t) + e;
      break;
    case 2592:
    case 3360:
      return de + W(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (i, r) {
          return (t = r), hn(i.props, /grid-\w+-end/);
        })
        ? ~Ns(e + (n = n[t].value), "span")
          ? e
          : de +
            W(e, "-start", "") +
            e +
            de +
            "grid-row-span:" +
            (~Ns(n, "span") ? hn(n, /\d+/) : +hn(n, /\d+/) - +hn(e, /\d+/)) +
            ";"
        : de + W(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (i) {
          return hn(i.props, /grid-\w+-start/);
        })
        ? e
        : de + W(W(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(e, /(.+)-inline(.+)/, ie + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (en(e) - 1 - t > 6)
        switch (Le(e, t + 1)) {
          case 109:
            if (Le(e, t + 4) !== 45) break;
          case 102:
            return (
              W(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ie +
                  "$2-$3$1" +
                  mo +
                  (Le(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Ns(e, "stretch")
              ? iw(W(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return W(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (i, r, o, s, a, l, c) {
          return (
            de +
            r +
            ":" +
            o +
            c +
            (s ? de + r + "-span:" + (a ? l : +l - +o) + c : "") +
            e
          );
        }
      );
    case 4949:
      if (Le(e, t + 6) === 121) return W(e, ":", ":" + ie) + e;
      break;
    case 6444:
      switch (Le(e, Le(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            W(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                ie +
                (Le(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ie +
                "$2$3$1" +
                de +
                "$2box$3"
            ) + e
          );
        case 100:
          return W(e, ":", ":" + de) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return W(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function La(e, t) {
  for (var n = "", i = 0; i < e.length; i++) n += t(e[i], i, e, t) || "";
  return n;
}
function LR(e, t, n, i) {
  switch (e.type) {
    case yR:
      if (e.children.length) break;
    case bR:
    case ph:
      return (e.return = e.return || e.value);
    case Zy:
      return "";
    case Jy:
      return (e.return = e.value + "{" + La(e.children, i) + "}");
    case Al:
      if (!en((e.value = e.props.join(",")))) return "";
  }
  return en((n = La(e.children, i)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function _R(e) {
  var t = tw(e);
  return function (n, i, r, o) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, i, r, o) || "";
    return s;
  };
}
function MR(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function BR(e, t, n, i) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ph:
        e.return = iw(e.value, e.length, n);
        return;
      case Jy:
        return La([$n(e, { value: W(e.value, "@", "@" + ie) })], i);
      case Al:
        if (e.length)
          return kR((n = e.props), function (r) {
            switch (hn(r, (i = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Li($n(e, { props: [W(r, /:(read-\w+)/, ":" + mo + "$1")] })),
                  Li($n(e, { props: [r] })),
                  kd(e, { props: cg(n, i) });
                break;
              case "::placeholder":
                Li(
                  $n(e, { props: [W(r, /:(plac\w+)/, ":" + ie + "input-$1")] })
                ),
                  Li($n(e, { props: [W(r, /:(plac\w+)/, ":" + mo + "$1")] })),
                  Li($n(e, { props: [W(r, /:(plac\w+)/, de + "input-$1")] })),
                  Li($n(e, { props: [r] })),
                  kd(e, { props: cg(n, i) });
                break;
            }
            return "";
          });
    }
}
var DR = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  kr =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  gh = typeof window < "u" && "HTMLElement" in window,
  jR = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== "" &&
      {}.SC_DISABLE_SPEEDY !== "false" &&
      {}.SC_DISABLE_SPEEDY),
  Ll = Object.freeze([]),
  Er = Object.freeze({});
function zR(e, t, n) {
  return (
    n === void 0 && (n = Er), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var rw = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  FR = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  NR = /(^-|-$)/g;
function fg(e) {
  return e.replace(FR, "-").replace(NR, "");
}
var HR = /(a)(d)/gi,
  hg = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Cd(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = hg(t % 52) + n;
  return (hg(t % 52) + n).replace(HR, "$1-$2");
}
var Dc,
  nr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  ow = function (e) {
    return nr(5381, e);
  };
function UR(e) {
  return Cd(ow(e) >>> 0);
}
function VR(e) {
  return e.displayName || e.name || "Component";
}
function jc(e) {
  return typeof e == "string" && !0;
}
var sw = typeof Symbol == "function" && Symbol.for,
  aw = sw ? Symbol.for("react.memo") : 60115,
  qR = sw ? Symbol.for("react.forward_ref") : 60112,
  WR = {
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
  YR = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  lw = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  GR =
    (((Dc = {})[qR] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Dc[aw] = lw),
    Dc);
function pg(e) {
  return ("type" in (t = e) && t.type.$$typeof) === aw
    ? lw
    : "$$typeof" in e
    ? GR[e.$$typeof]
    : WR;
  var t;
}
var XR = Object.defineProperty,
  KR = Object.getOwnPropertyNames,
  mg = Object.getOwnPropertySymbols,
  QR = Object.getOwnPropertyDescriptor,
  ZR = Object.getPrototypeOf,
  gg = Object.prototype;
function cw(e, t, n) {
  if (typeof t != "string") {
    if (gg) {
      var i = ZR(t);
      i && i !== gg && cw(e, i, n);
    }
    var r = KR(t);
    mg && (r = r.concat(mg(t)));
    for (var o = pg(e), s = pg(t), a = 0; a < r.length; ++a) {
      var l = r[a];
      if (!(l in YR || (n && n[l]) || (s && l in s) || (o && l in o))) {
        var c = QR(t, l);
        try {
          XR(e, l, c);
        } catch (u) {}
      }
    }
  }
  return e;
}
function Sr(e) {
  return typeof e == "function";
}
function vh(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ai(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function vg(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], i = 1; i < e.length; i++) n += t ? t + e[i] : e[i];
  return n;
}
function Do(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function $d(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Do(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var i = 0; i < t.length; i++) e[i] = $d(e[i], t[i]);
  else if (Do(t)) for (var i in t) e[i] = $d(e[i], t[i]);
  return e;
}
function bh(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Qo(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var JR = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, i = 0; i < t; i++) n += this.groupSizes[i];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var i = this.groupSizes, r = i.length, o = r; t >= o; )
            if ((o <<= 1) < 0) throw Qo(16, "".concat(t));
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(i),
            (this.length = o);
          for (var s = r; s < o; s++) this.groupSizes[s] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), l = ((s = 0), n.length);
          s < l;
          s++
        )
          this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            i = this.indexOfGroup(t),
            r = i + n;
          this.groupSizes[t] = 0;
          for (var o = i; o < r; o++) this.tag.deleteRule(i);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var i = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + i,
            s = r;
          s < o;
          s++
        )
          n += "".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);
        return n;
      }),
      e
    );
  })(),
  Vs = new Map(),
  _a = new Map(),
  zc = 1,
  Cs = function (e) {
    if (Vs.has(e)) return Vs.get(e);
    for (; _a.has(zc); ) zc++;
    var t = zc++;
    return Vs.set(e, t), _a.set(t, e), t;
  },
  e2 = function (e, t) {
    Vs.set(e, t), _a.set(t, e);
  },
  t2 = "style["
    .concat(kr, "][")
    .concat("data-styled-version", '="')
    .concat("6.0.2", '"]'),
  n2 = new RegExp(
    "^".concat(kr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  i2 = function (e, t, n) {
    for (var i, r = n.split(","), o = 0, s = r.length; o < s; o++)
      (i = r[o]) && e.registerName(t, i);
  },
  r2 = function (e, t) {
    for (
      var n,
        i = ((n = t.textContent) !== null && n !== void 0 ? n : "")
          .split(`/*!sc*/
`),
        r = [],
        o = 0,
        s = i.length;
      o < s;
      o++
    ) {
      var a = i[o].trim();
      if (a) {
        var l = a.match(n2);
        if (l) {
          var c = 0 | parseInt(l[1], 10),
            u = l[2];
          c !== 0 && (e2(u, c), i2(e, u, l[3]), e.getTag().insertRules(c, r)),
            (r.length = 0);
        } else r.push(a);
      }
    }
  };
function o2() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var uw = function (e) {
    var t = document.head,
      n = e || t,
      i = document.createElement("style"),
      r = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(kr, "]")));
        return l[l.length - 1];
      })(n),
      o = r !== void 0 ? r.nextSibling : null;
    i.setAttribute(kr, "active"),
      i.setAttribute("data-styled-version", "6.0.2");
    var s = o2();
    return s && i.setAttribute("nonce", s), n.insertBefore(i, o), i;
  },
  s2 = (function () {
    function e(t) {
      (this.element = uw(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var i = document.styleSheets, r = 0, o = i.length; r < o; r++) {
            var s = i[r];
            if (s.ownerNode === n) return s;
          }
          throw Qo(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch (i) {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  a2 = (function () {
    function e(t) {
      (this.element = uw(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var i = document.createTextNode(n);
          return (
            this.element.insertBefore(i, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  l2 = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  bg = gh,
  c2 = { isServer: !gh, useCSSOMInjection: !jR },
  dw = (function () {
    function e(t, n, i) {
      t === void 0 && (t = Er), n === void 0 && (n = {});
      var r = this;
      (this.options = lt(lt({}, c2), t)),
        (this.gs = n),
        (this.names = new Map(i)),
        (this.server = !!t.isServer),
        !this.server &&
          gh &&
          bg &&
          ((bg = !1),
          (function (o) {
            for (
              var s = document.querySelectorAll(t2), a = 0, l = s.length;
              a < l;
              a++
            ) {
              var c = s[a];
              c &&
                c.getAttribute(kr) !== "active" &&
                (r2(o, c), c.parentNode && c.parentNode.removeChild(c));
            }
          })(this)),
        bh(this, function () {
          return (function (o) {
            for (
              var s = o.getTag(),
                a = s.length,
                l = "",
                c = function (d) {
                  var f = (function (g) {
                    return _a.get(g);
                  })(d);
                  if (f === void 0) return "continue";
                  var h = o.names.get(f),
                    m = s.getGroup(d);
                  if (h === void 0 || m.length === 0) return "continue";
                  var b = ""
                      .concat(kr, ".g")
                      .concat(d, '[id="')
                      .concat(f, '"]'),
                    k = "";
                  h !== void 0 &&
                    h.forEach(function (g) {
                      g.length > 0 && (k += "".concat(g, ","));
                    }),
                    (l += "".concat(m).concat(b, '{content:"').concat(k, '"}')
                      .concat(`/*!sc*/
`));
                },
                u = 0;
              u < a;
              u++
            )
              c(u);
            return l;
          })(r);
        });
    }
    return (
      (e.registerId = function (t) {
        return Cs(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            lt(lt({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var i = n.useCSSOMInjection,
                r = n.target;
              return n.isServer ? new l2(r) : i ? new s2(r) : new a2(r);
            })(this.options)),
            new JR(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Cs(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var i = new Set();
          i.add(n), this.names.set(t, i);
        }
      }),
      (e.prototype.insertRules = function (t, n, i) {
        this.registerName(t, n), this.getTag().insertRules(Cs(t), i);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Cs(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  u2 = /&/g,
  d2 = /^\s*\/\/.*$/gm;
function fw(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (i) {
          return "".concat(t, " ").concat(i);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = fw(n.children, t)),
      n
    );
  });
}
function f2(e) {
  var t,
    n,
    i,
    r = e === void 0 ? Er : e,
    o = r.options,
    s = o === void 0 ? Er : o,
    a = r.plugins,
    l = a === void 0 ? Ll : a,
    c = function (f, h, m) {
      return m === n ||
        (m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0)
        ? ".".concat(t)
        : f;
    },
    u = l.slice();
  u.push(function (f) {
    f.type === Al &&
      f.value.includes("&") &&
      (f.props[0] = f.props[0].replace(u2, n).replace(i, c));
  }),
    s.prefix && u.push(BR),
    u.push(LR);
  var d = function (f, h, m, b) {
    h === void 0 && (h = ""),
      m === void 0 && (m = ""),
      b === void 0 && (b = "&"),
      (t = b),
      (n = h),
      (i = new RegExp("\\".concat(n, "\\b"), "g"));
    var k = f.replace(d2, ""),
      g = RR(m || h ? "".concat(m, " ").concat(h, " { ").concat(k, " }") : k);
    s.namespace && (g = fw(g, s.namespace));
    var p = [];
    return (
      La(
        g,
        _R(
          u.concat(
            MR(function (v) {
              return p.push(v);
            })
          )
        )
      ),
      p
    );
  };
  return (
    (d.hash = l.length
      ? l
          .reduce(function (f, h) {
            return h.name || Qo(15), nr(f, h.name);
          }, 5381)
          .toString()
      : ""),
    d
  );
}
var h2 = new dw(),
  Pd = f2(),
  hw = S.createContext({
    shouldForwardProp: void 0,
    styleSheet: h2,
    stylis: Pd,
  });
hw.Consumer;
S.createContext(void 0);
function yg() {
  return H.useContext(hw);
}
var p2 = (function () {
    function e(t, n) {
      var i = this;
      (this.inject = function (r, o) {
        o === void 0 && (o = Pd);
        var s = i.name + o.hash;
        r.hasNameForId(i.id, s) ||
          r.insertRules(i.id, s, o(i.rules, s, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        bh(this, function () {
          throw Qo(12, String(i.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Pd), this.name + t.hash;
      }),
      e
    );
  })(),
  m2 = function (e) {
    return e >= "A" && e <= "Z";
  };
function wg(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var i = e[n];
    if (n === 1 && i === "-" && e[0] === "-") return e;
    m2(i) ? (t += "-" + i.toLowerCase()) : (t += i);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var pw = function (e) {
    return e == null || e === !1 || e === "";
  },
  mw = function (e) {
    var t,
      n,
      i = [];
    for (var r in e) {
      var o = e[r];
      e.hasOwnProperty(r) &&
        !pw(o) &&
        ((Array.isArray(o) && o.isCss) || Sr(o)
          ? i.push("".concat(wg(r), ":"), o, ";")
          : Do(o)
          ? i.push.apply(i, Sa(Sa(["".concat(r, " {")], mw(o), !1), ["}"], !1))
          : i.push(
              ""
                .concat(wg(r), ": ")
                .concat(
                  ((t = r),
                  (n = o) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in DR ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return i;
  };
function di(e, t, n, i) {
  if (pw(e)) return [];
  if (vh(e)) return [".".concat(e.styledComponentId)];
  if (Sr(e)) {
    if (!Sr((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e];
    var r = e(t);
    return di(r, t, n, i);
  }
  var o;
  return e instanceof p2
    ? n
      ? (e.inject(n, i), [e.getName(i)])
      : [e]
    : Do(e)
    ? mw(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Ll,
        e.map(function (s) {
          return di(s, t, n, i);
        })
      )
    : [e.toString()];
}
function g2(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Sr(n) && !vh(n)) return !1;
  }
  return !0;
}
var v2 = ow("6.0.2"),
  b2 = (function () {
    function e(t, n, i) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (i === void 0 || i.isStatic) && g2(t)),
        (this.componentId = n),
        (this.baseHash = nr(v2, n)),
        (this.baseStyle = i),
        dw.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, i) {
        var r = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, i)
          : "";
        if (this.isStatic && !i.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            r = ai(r, this.staticRulesId);
          else {
            var o = vg(di(this.rules, t, n, i)),
              s = Cd(nr(this.baseHash, o) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var a = i(o, ".".concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, a);
            }
            (r = ai(r, s)), (this.staticRulesId = s);
          }
        else {
          for (
            var l = nr(this.baseHash, i.hash), c = "", u = 0;
            u < this.rules.length;
            u++
          ) {
            var d = this.rules[u];
            if (typeof d == "string") c += d;
            else if (d) {
              var f = vg(di(d, t, n, i));
              (l = nr(l, f)), (c += f);
            }
          }
          if (c) {
            var h = Cd(l >>> 0);
            n.hasNameForId(this.componentId, h) ||
              n.insertRules(
                this.componentId,
                h,
                i(c, ".".concat(h), void 0, this.componentId)
              ),
              (r = ai(r, h));
          }
        }
        return r;
      }),
      e
    );
  })(),
  gw = S.createContext(void 0);
gw.Consumer;
var Fc = {};
function y2(e, t, n) {
  var i = vh(e),
    r = e,
    o = !jc(e),
    s = t.attrs,
    a = s === void 0 ? Ll : s,
    l = t.componentId,
    c =
      l === void 0
        ? (function (v, y) {
            var E = typeof v != "string" ? "sc" : fg(v);
            Fc[E] = (Fc[E] || 0) + 1;
            var T = "".concat(E, "-").concat(UR("6.0.2" + E + Fc[E]));
            return y ? "".concat(y, "-").concat(T) : T;
          })(t.displayName, t.parentComponentId)
        : l,
    u = t.displayName;
  u === void 0 &&
    (function (v) {
      return jc(v) ? "styled.".concat(v) : "Styled(".concat(VR(v), ")");
    })(e);
  var d =
      t.displayName && t.componentId
        ? "".concat(fg(t.displayName), "-").concat(t.componentId)
        : t.componentId || c,
    f = i && r.attrs ? r.attrs.concat(a).filter(Boolean) : a,
    h = t.shouldForwardProp;
  if (i && r.shouldForwardProp) {
    var m = r.shouldForwardProp;
    if (t.shouldForwardProp) {
      var b = t.shouldForwardProp;
      h = function (v, y) {
        return m(v, y) && b(v, y);
      };
    } else h = m;
  }
  var k = new b2(n, d, i ? r.componentStyle : void 0);
  function g(v, y) {
    return (function (E, T, w) {
      var P = E.attrs,
        F = E.componentStyle,
        _ = E.defaultProps,
        I = E.foldedComponentIds,
        q = E.styledComponentId,
        ye = E.target,
        se = S.useContext(gw),
        ae = yg(),
        X = E.shouldForwardProp || ae.shouldForwardProp,
        Z = (function (N, V, U) {
          for (
            var te, J = lt(lt({}, V), { className: void 0, theme: U }), pt = 0;
            pt < N.length;
            pt += 1
          ) {
            var un = Sr((te = N[pt])) ? te(J) : te;
            for (var Qt in un)
              J[Qt] =
                Qt === "className"
                  ? ai(J[Qt], un[Qt])
                  : Qt === "style"
                  ? lt(lt({}, J[Qt]), un[Qt])
                  : un[Qt];
          }
          return V.className && (J.className = ai(J.className, V.className)), J;
        })(P, T, zR(T, se, _) || Er),
        L = Z.as || ye,
        O = {};
      for (var $ in Z)
        Z[$] === void 0 ||
          $[0] === "$" ||
          $ === "as" ||
          $ === "theme" ||
          ($ === "forwardedAs"
            ? (O.as = Z.forwardedAs)
            : (X && !X($, L)) || (O[$] = Z[$]));
      var B = (function (N, V) {
          var U = yg(),
            te = N.generateAndInjectStyles(V, U.styleSheet, U.stylis);
          return te;
        })(F, Z),
        D = ai(I, q);
      return (
        B && (D += " " + B),
        Z.className && (D += " " + Z.className),
        (O[jc(L) && !rw.has(L) ? "class" : "className"] = D),
        (O.ref = w),
        H.createElement(L, O)
      );
    })(p, v, y);
  }
  var p = S.forwardRef(g);
  return (
    (p.attrs = f),
    (p.componentStyle = k),
    (p.shouldForwardProp = h),
    (p.foldedComponentIds = i
      ? ai(r.foldedComponentIds, r.styledComponentId)
      : ""),
    (p.styledComponentId = d),
    (p.target = i ? r.target : e),
    Object.defineProperty(p, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (v) {
        this._foldedDefaultProps = i
          ? (function (y) {
              for (var E = [], T = 1; T < arguments.length; T++)
                E[T - 1] = arguments[T];
              for (var w = 0, P = E; w < P.length; w++) $d(y, P[w], !0);
              return y;
            })({}, r.defaultProps, v)
          : v;
      },
    }),
    bh(p, function () {
      return ".".concat(p.styledComponentId);
    }),
    o &&
      cw(p, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    p
  );
}
function xg(e, t) {
  for (var n = [e[0]], i = 0, r = t.length; i < r; i += 1)
    n.push(t[i], e[i + 1]);
  return n;
}
var kg = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function w2(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Sr(e) || Do(e)) {
    var i = e;
    return kg(di(xg(Ll, Sa([i], t, !0))));
  }
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? di(r)
    : kg(di(xg(r, t)));
}
function Td(e, t, n) {
  if ((n === void 0 && (n = Er), !t)) throw Qo(1, t);
  var i = function (r) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
    return e(t, n, w2.apply(void 0, Sa([r], o, !1)));
  };
  return (
    (i.attrs = function (r) {
      return Td(
        e,
        t,
        lt(lt({}, n), {
          attrs: Array.prototype.concat(n.attrs, r).filter(Boolean),
        })
      );
    }),
    (i.withConfig = function (r) {
      return Td(e, t, lt(lt({}, n), r));
    }),
    i
  );
}
var vw = function (e) {
    return Td(y2, e);
  },
  K = vw;
rw.forEach(function (e) {
  K[e] = vw(e);
});
const x2 = "/assets/chattabox-46e474c7.png",
  bw = "/assets/pirate-girl-b1f16c72.png",
  yw = "/assets/pirate-boy-e6851e2f.png",
  k2 = "/assets/chooseBuddy-4fc5536c.png",
  E2 = "/assets/eric-the-explorer-e22d294a.png",
  S2 = "/assets/penny-the-princess-88a6616a.png",
  C2 = "/assets/piper-e67541b3.png",
  ww = "/assets/penny-7f0b1bf0.png",
  $2 = "/assets/pete-c30331b7.png",
  xw = "/assets/eric-fbb61b04.png",
  $s = ({ titleImg: e, charImg: t, name: n }) => {
    const { push: i } = qo();
    return ne(P2.ActionButton, {
      onClick: () => i(`/speak/${n}`),
      children: [C("img", { src: e }), C("img", { src: t })],
    });
  },
  P2 = {
    ActionButton: K.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    margin-top: 25px;
    padding: 10px;
  `,
  },
  T2 = () => {
    H.useRef(null);
    const e = mS();
    return (
      H.useEffect(() => {
        e.pathname;
      }, [e.pathname]),
      C(Ti, {
        id: "home-page",
        children: C(ch, {
          fullscreen: !0,
          children: ne("div", {
            className: "menu-background-image",
            children: [
              C(Eg.Title, { children: C("img", { src: x2 }) }),
              C(Eg.Heading, { children: C("img", { src: k2 }) }),
              ne("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  gap: "40px",
                },
                children: [
                  C($s, { titleImg: C2, charImg: bw, name: "piper" }),
                  C($s, { titleImg: $2, charImg: yw, name: "pete" }),
                ],
              }),
              ne("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  gap: "40px",
                },
                children: [
                  C($s, { titleImg: S2, charImg: ww, name: "penny" }),
                  C($s, { titleImg: E2, charImg: xw, name: "eric" }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  Eg = {
    Text: K.div`
    margin: 0;
  `,
    Heading: K.p`
    margin: 0;
    text-align: center;
    max-width: 250px;
    margin: auto;
    font-weight: 600;
    margin-top: 20px;
    color: #922e2e;
  `,
    ActionButton: K.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    margin-top: 25px;
    padding: 10px;
  `,
    Title: K.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 100px;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  `,
  };
const _l =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAALDUlEQVR4nO2deZAdVRXGv4YQtoSERRAXAljggkrASSQCOachEIKBAlRKEZRdAaN/KCiU2OcKFgi4gUAVxaIjYXNBRQsQij5HRCEqIhCQyI6yBDAYMSaE0P5BDwz33XnLnXnrvN9f6a+nv3cr33v9+p67vAR9Ooqk3Q3o80b6gXQY/UA6jH4gHUY/kA5jrXY3YDRkWbZrlmVpu9sxlnRlIES0Vp7nJ4uIAZjW7vaMJRPa3YBGIaItVfVyAHu0uy3NoKsCyfN8b2ZeCGCzdrelWXTFLYuIJhRFcRYzX48eDgPogkCyLNtaVX8L4ER0YHuJaJuiKG4oiuKRoiguJaKNRuPX0besPM8/yswXA5jS7raMhKouBDCrPDxCVbdj5r3N7H8xfh33jgMAIlqvKIoLmPkadHAYJTO9491U9adEtE6MWccFkmXZe1T1jwCOQ3d0XC2gzVPVi2LMOiqQPM+PEJFFAN7b7rbUCzN/BsDSwKnD8zz/WqN+HREIEU0qimIhM18KYMN2t6cRzOxBZt4DwPP+OWZ2eZ7v14hf2wPJ83xAVe8EcEi72xKLmS0WkfkAVvrnmHmQiLap16ttgRAR8jxfwMy3AdiuXe0YK5xzt6vqkYFTU1X1KiKq64m2LYEQ0caqeh0znwtgYjva0AzSNL1SVb8ZODVTRL5ej0fLA8nzfHdVvQvA/Fa/disQkVMA3OzrzHxSlmUDta5vWSBlhTZj5hzAVq163VZjZq8w82EAnvNOrS0iFxHR2tWub0kgZYX2JmYWAFUb1AuY2dOqekzg1E4isqDatU0PJM/zeap6N3q0XD4SaZr+HMCPfZ2ZMyIasUDatECIaJ2yQvsrdEmFloimFUXxl+JVjIg2HY0fMy8A8IInTxWRbKRrmhJIp1doR0JVLwYwvTycrao3EFF0R9XMnlHV03ydmY8horeGrhnz/6w8zw8WkbsA7DLW3i1gZ+94oCwURlfFReQ8AA978roicnLo7ydkWXYqGg/mIefc5b5YFMWXAZzZoNdoGcsCpAE40NPmqupFSZKEOn21Dc1Wq6ow8+BwnZmPJiIxszc8jSVFUaxG4+MiNyZJso8vFkUxCOCwhls9CkTkKOfcpWPhRUSbquqtAN7tn1PVQ9M0XRjpu7aq3gdge89T0jR1w7Wuub+3AjN7npnnAnjCP8fMFxLRtpG+a1T1WwHP4/3bYT8QDzN7QkTmAVjhnZpcznaJQkQGAfzLkzdn5n2HC/1AAjjnFqvq5wOnZuV5fniMp5mtVNXLfF1EPj38uB/ICKRpegmAn/g6M59JRFHDyqp6SUCeT0SThw76gVSBmU9AZcdui7KA2DDOufsBLPLkicz82iBWP5AqmNlSVRVfZ+bjiGjjGE9VrSiniMgBQ//uB1IDETkfwN88ebKInBDjFwoEwF5DVeB+IDUws5dV9Ru+zsxfiJnq45x7DMB9njyVmWcCPRwIEb2lKIpFZaHw90T05lgvEbkSwIOevJn/yFovqnqTrzHzbkAPB6KqFwKYUR7OUtXfENHUGK+yY3e+r4vIJyPbpr7GzB8EejgQADt5x+9T1atizcpr13jyfkQ0KcLutoA2A+jtQEIzCufmef65GDPn3NMAck9ej5l3j/B6FsBDnrxVlmUb9WwgZR/i7oB+WrURu2qIyC8DfhzjBeCegLZDzwZiZsuZeR6AZ71TU0Xki5G26guxgajq4oC8fc8GAgBm9qSqnujrZcdu/Ub9nHP3oHI2yY61ZpKEUFV/0ArMvFVPBwIAIvIjAA948hRm3j/S0r8NrsvMMdOaQiX+3g/EzF5R1Qt8XUQ+HGm5JKDFTIX9Z0B7U88HArz2yOozO8ZLRPynIwCIGbiqmC0PYJNxEYhzbikqn2qmEdEGEXZPB7RNGjVRVX+wCgA2HheBlPgFQjBzzDt7uS+ISMOdQzNbDWCVJ284ngIJrXJq+J0N4N8BLXbl7Yve8QbjKZCXAtq6ET4vB7TYeVt+m9YZT4GEBpT8d2g9hG5P/4nwASrXxrw0ngJ5Z0B7PMJnsi+ISEywQOUndNW4CKSsyM7w5OXOuVBfoBahOljoe6VWmyag8tO2fFwEUk4i8O/zv4v0ekdAfiTCJxTsc+MiEBGpKLmHRu3qgZnfFZBDvfdabBnQlvZ8IFmW7Q/gQ578UlnjimG6L6hqqPdei60DPo/1dCBENFVEzg2cutrMQqWLqmRZti2At3nyvWYWeqSuRcWtr6cDIaKJ5ZQbfwvA1SJyRqTtngEtNDJZExEJ3foe7NlAROQsAHN8XVXPLmcQxnjOC2i3xHgB2CGg3dOzgTDzQQF5UbX1fdUo5/P6Jfs1quqPs9fjNRHAjp68zDn3VM8GgsplZI8z80FmFip91KQM2O9Z32xmyyK8BgD4I5aLgB6edcLMxwL4c3l4OzPvZWYxHUEAQGjqqIhETStiZvI1Vb0D6OFAzGxJkiQDIjIlSZJZZhbTVwAAZFk2B8AHPHmlql4b48fMe/lauZSudwMZwjlXMX7RKCOsmB00s5iSySQAu3ryinETyGjJ8/xAVO5CsaZ8imuYcnKF/12kZrYK6AdSFSKaVG4h5XONcy6mdw4ROTigvXbr6wdShfJT4PfMV4rIqTF+5YxJf8b8y8O/i/qBjECe5wcw83G+rqrnjOLT8SkA/pqSW4aXcfqBBCCit5cbcvo8JiIVi3fqhZk/62si8oPhx/1APMrtB69H5ZDvGhE51MwqNrqshyzL9kXlhLplqvqz4UI/kGEQ0fqq+msE6kyqeopzLmpQCwBE5EsBz0uGnq6GmABgEI0Hc+8I+lMN+owFxVgZqep38fo+7sO5Lk3TqMdcACh/Bcj/JaDVqvo9/28nJElyVOwL+TDzV0TkBWZ2qPzyahZjFggqdwICgD8x8ydGYzrC984Vzrl/+OKY3rLMrEjT9AxVnY24GR3txh8bX8LM+5jZf2MN8zw/FJWfujUicnro75vyHZKm6e3MPB3AL5rh3yyY+Ui8vtzgVmaeGzOyOAQRbcTMoVvdoHPOX9ULoIlf6ma2jJkPKDdxiXoyaTVmtjhJkh3LguRsM3t0NH7l5sn+ZIYVzPzVka5p6lOWmSFN0/NUdVcAf2/ma40lY1GQzLJsoFzn+AZU9XQze3Kk61ry2Jum6Z3MvDOAq1vxeu2GiCaXYyX+XLD7ReScate2rB9iZi8mSfLxcsP6qJ8D6hbKbZgqZpWIyLHlMoQRaXnHME3Ty0RkBoDQKtSuJ8/z4wF8zNdV9fx6OpZt6ak75xaXm62ENvTqWrIsm8nM3w6celhETqrHo22lEzNbkSTJ0ap6COKn83cMRDSt3FigYka7iBxiZv4ejkHaXstK0/RKERkAcFe72xILEW1eFiS38M+p6vHOuTvq9Wp7IADgnFvCzLsA+D7GthTSdIhoi3J3n9Bev99J07ShPYU7IhAAMLNVSZIsUNWPIGK9RbtQ1R8iEAaAG0WkYheJWnRMIEOkaXqtiEwH8Id2t6VOQvN9FzPzwWbmb+dUk44LBACcc48y82wAZwN4pd3tqYH/3fcAM+9pZlG9/Y4MBHh1r8MkSU5S1fmo3PClY2Dmo/H6Xiq3lGE8E+vX0T9ODABpml5PRO9X1SsAcLvb42Nmf02SJLS0IIqO/YQMx8yeYuY55R66nX4LGxVdEQjw6kaUaZo6VZ2D8E46PUHXBDJEmqZ5Ofh1Y7vb0gy6LhAAMLPnmHmeqp4CoGr1tNvoht8rrwoRwSxqmV9H0vWB9Br9QDqMfiAdRj+QDqMfSIfxf/p6G3cuv2QeAAAAAElFTkSuQmCC",
  Ml = "/assets/speech-bubble-ccd034ae.png",
  Bl =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAOs0lEQVR4nOWde7RcVX3Hv+cSHinEmpYFErBOFUK62gJ2ARUWuH+bKIXwUMAaWhRuQsE2GtAqUBTW+R3WAoUqIETFLhrmUukqYHha5Nn93TQFhARQiCXQkHulBpFXQQJJSHL6x5zc3Nzn3mfOzJ17/aw1K8nMb//2L/Odc85+/naCDidN0z0A7AtgpojsLSKzAOwGYJfiNa14AcBvitdbxZ+/JrmS5HMAngHwbJZlL7X7/xBDMt4BDMQYAxE5WESOEZE/B3AggN+vuJpfA1hG8hGSd5J80ntfcRXlGXdBjDHbiYhR1RMAfBLAXm0OYTXJJSRvJfmw9z5vc/3bMG6CpGm6r6rOB3AqgPeNVxyD6CN5HcnFWZa9MB4BtF2QNE2PUNUvAzh6POoPZCOAJar6zSzLlrWz4rZ9IWmaHq6qFwM4vF11VkAO4E5VvSDLsqfaUWHLBUnTdH9VvQTAnFbX1UI2A7hBVS/MsqyvlRVt1yrHxpip9Xr9yu7u7sUA9mlVPW0iAbC/iPydiEzt7e19qK+vb2MrKmqJIGmaHlqv1++v1Wp/0Qr/48iUWq12eHd39ykAlnvvf1F1BZUKYoyZUq/XL+ru7v5nVN9/6CSmi8hpIrJTb2+v7+vr21yV48qeIcaY3UguAXBYVT4HsRHAfwN4luTzJF8A0ItGj3wgvwugpqo1AH844DUNrcGLyKe8969U4awSQdI0PVBVb0W1nbr/BXC/qj4M4HGST3vv15V1lqbpLBGZLSKzAVgA760qUAB9qnpMlmUrmnXUtCDOuU+LSA+AnZr1BWAtgNtU9RqSS1s1pFGMDsxW1b8CMBfA1Arcvk7yGGvtw804aUoQ59xCEbmqGR8FT5O8VFVv9d6vrcBfMMaY31PV+SKyAI1bWzO8TfIEa+29ZR2UFsQ5d76IXFK2fMEKkpm19uYm/TSNMaZLVeeKSIrG6HJZ1pOca629vUzhUoI4584WkSvLlC1YRTK11t7QhI+WYIyZoqoLRSRD+YbAepLHWmvvjy0YLYhz7q9FpOwXuZnkt1T1Au/9hpI+2oIxZgbJbwP4VEkXa0nOttb+JKZQlCDOuUNE5D9Q7gH+S5KfsdayRNlxwzl3nIh8F+VakC+LyOHe+5WhBYIFMcbsSXI5gN1LBPbvInKa9/7VEmXHHWPM9KKPZUsUXykiB3vv3wwx7goMaAeSt6CEGCS/liTJsRNVDADw3r8uIkeS/KcSxfcl2RNqHHSF5Hl+OYAvRQbyLslTrbX/Flmuo3HOfVVELo4tR3KhtXbRWHZjXiFpmgqAsyPrf7do+k0qMQDAWnsJydMBbIopJyKXpWk65qj3qFeIMeZ3SK4AUIuoexPJk621P4woM+Fwzp0qInXENYyWishHR5u3H/UKKSaWahEVguTfTHYxAMBaez3J8yKLHaaqC0YzGFHdNE33U9UnEPjgBwCS51trvxER4IQnz/PrAXw2osibIjLTez/s+rARBcnz/H4AsyMquklE5nbSGqd2YIzZkeRDAP4sotj1SZKcNtwHw05QOefm1Gq1CyIqeF5EjvLevxtRZlLQ19e3CcC9IjIP4R3m/QHc7L1/efAHw14heZ4/DuDDgc43kzTW2qWB9pMS59xfishNEUVuSJLkM4PfHPJ8cM59AuFiAMB3f9vFAIBixHpJRJGT0zT94OA3hwgiIjEdwF+KyPkR9pMaVV2IxkLvELYTkb8f/OY2gqRpegAAExoAyXO996EBVEKapofmef79PM8vD+lotZMsy14kmYXai8jpxpjpA9/b5hmS5/n3APxtoL9lSZIcFFp5FQwzQ7lWVW2WZY+1M47RKFpdqwDsGWJP8mxrbf//qV+Qolf+IoD3BDo63lp7Z2zAZXHOnSUi3x7mI58kibQrjhCccwtE5DuB5j9LkmT/Lf/ov2WJyCcRKAaAFarabjFGmqGMaf+3BVVdDGBIk3YE9kvTdNaWf/QLoqpzQysk+a12dQCdc18oxBipE7tDWwKJwHu/juQ1ofYi0j8r2QU0blcAQpd9vqaq/xoXYjkKMa5C525bGBGS16Gxen5MROS4LX/vKt6wAHYMrOsG7/366AgjmchiAECWZasBPBhofnCaprsChSCqGrwoWlVjeqOlmOhibEFV/yXCfDaw9RnykcBCL2VZ1tJe+WQRo+B2NPaWjImqHgYAXcaYnQAcEFjB3SUDC2KSiYEsy14BELol7lAA6BKRPwGwfUgJVX2gXGhjM9nEGAAD7f7YGDOlC8CfRjj/z/h4xqbogV+NcmJMMcZ0rIiq+kig6Y4iMrNLRP4osMArWZb1loxrREbpgYeynYgcXFlA1fN4hO2sLhH5UKBx5btQB4jR1C9cVa8wxlSxpaBySPYBCFokB+BDSZ7nyxE2/PC9JElGnaCPoYIrYzCPqurX0dhlVaaftC7Lsl9VGE8/Ed/xoiTP8zUA9hjLUlXPzbLsH5uODi0RoyreBPBDEfmH4aZXy5Ln+RIAJwaY3tQFYNdAv2vKh7QV59wJHSoG0BhcnU/yMWPMH1ToN/TK27ULgU1eAE1vajTGJCJyRbN+2sAHSMb0skeF5GuBprsGr7lC5NLJ4SjGzD7QrJ828dE0TWO6BCNCMvTHHCVI05s6RSR4erhDqKo5Hfo8ihIkdDR4RESkyq3I7SD0dj4Wodu5p3QhcPALFQSnqqua9dFmqpqrD/0xr+tCuHo7lwymH5I3RtQ33izNsmx5Rb5Cp8ajBGk6d4n3/iWSn2/WTxvoE5EhqwqbILRr8UaS5/lzAPYOML48SZIvNxFUPxUmHKiaVnUMFwEI+SE+OgWNFkCIILVmghqItfZq5xwqFuUnqnopgJ+jw4ZOEP7d/WoKwnvgM8vFMjwVi+JE5OPe+6b7Si1i1tgmAIDermKVXQj7GmOqagYCaIhC8iwErs4YCVX9SqeKkabpNABDFlUPh6r2dpFcHeh7exHZr3xow1OIErupdCCbSMbMObSbgxA+vbCiC3HzHC3JKFqIshDlrpSNnbxrS0QOiTB/KknTdJqqvoEwFe9MkuT4krGNScl59fVJklSRq6sl5Hn+AIAjAkxfSpLkfV1Zlv0GjZZJCEcYY5oeQhkJa+2iKp4pnYIxZhrC7ypLga3rskLXWu0sIkfGBhbDZBKlWMAe1BAiuVUQVQ2+Cavqp0tFF8FkEUVVTwm1JXkvsPUKuRfhg4wnGWNaPmo70UVJ03QvAB8PNP9FlmU/BwpBsix7FUBooq2pqjrsHuuqmciiFNukQ6c37tjyl/4CJIPzHorIgnYtTitE+SJGFqXj9sYbY3YQkS+E2qtq/3c/UJAbEX7bmqmqx41tVg3W2qsKUYbjyXbFEYqqnonGsUwhrNnyQAcGCJJl2RoA94VWKiIXG2NiZhybohDlrEFvr1XV2DxeLcUYs4uIXBhqT3Kx977/QhicWuNtEQnd2rZbrVZ7oaen54nQypulp6fnUTQaIK/29vbeVa/XP19FNukqqdfrF9ZqtaMDzTfX6/XTvPdvbHljm+eAMWZKMdgYuiZpTZHZpq3JjzuVIpPpswifXb0pSZJtLoBtbjne+40kY1Ynzoi0n9SQXISIqW5VHZLKakhLyRgztRgBDk54SXKOtfbHofaTEefcKSLyg4giP0qSZEjDaMhD2Xv/DsmoJI8icu3gFBG/TaRpuo+IBG+DBoDiPK4hDNuXKNLCPofwZwkA3CUix473OYDtpsiA8QjiNj7dliTJCcN9MGyz1Xu/geS5kbHNGUn1yYoxBiTriBPjHVUdqU81+rxDnucPInJSiuRZ1tqrY8pMVJxzWpymEAzJ86y1l430+VhnUD0oIvMRkb6iVqsdJSKre3p6fhpaZiJSTKZdGllseXd39/y+vr5yaWKzLFtF8iuRlSYistg5Fzz0PNFwzp1XbFKNYb2qzhtrMUZoqvEfATgmMoBNJM+w1l4XWa5jKQ59uUJEBg/hjAnJc6y13xzLLkiQ4gS2JwDMKBHIRdbaqPtsJ2KM2ZnkD9A40TqWe0RkzsAxq5EIHkJ3zh0oIkS5Rdd3i8hnqzpart0YY95P8nbEJQfdwioROch7/3qIcfBorbV2GclTSwQEAEeRfNI5F7L6oqNwzp1I8qcoJ8arRd8sSAwgQhAAsNbeQrJsFtI9ReS+PM+vaccUcLMYY2bkeb5ERJYAKDMK8TbJT3jvn4kpFD2fYa39RnE2Uxm6AHyO5DPOuZh86W3DGLO9c+4ckisRtpV5ODaQPNFa+1+xBUtNMKnqF0k2s5t2dxG5Ps/zx5xzHXGstzFmB+fc6SSfFZHLAOxS0tWG4uyUe8oUbvZgyQtF5KJmfBQ8TfI7qnpjzP22CtI0fb+IfE5EzkD4tOtIvF1cGaXEAKo5enVBkQhgSrO+AGwAcI+q3kjyDu/94IOHK8EY8x4ROV5VTwZwFKo5Nfs1ksdZax9qxkklK0eccx8rEtFXOQS/DsDdqnofgGUkn/Lev1PGkTFmZxE5RERscTjxgaj26PJeETk69gE+HFUe3/1BkrchbuQzho0AngGwEsBqVX0ZwOsYugxoKoDpqrobGjuXZgHYByWflwHcLCJneu//rwpnla6tKnqzVwI4vWrfHchbJL9krb22SqeV/mq892uTJDlDVY8A8HyVvjuMh1T1gKrFAKq9j/bjve8leW2tVpteq9XamrC/xbxD8qvd3d1n9vT0hCaUiaIlggBAX1/fuz09PXcB+LGI7IMKd/GOA5sA9KjqSfPmzbt7tPmMZmnbfT5N04+p6jlorAifKM+XHMCtqvq1LMuabkGF0PYvJk3TD6vquQBOQnXJXapmA4CbVfWyLMt+1s6Kx+2XmqbpXiIyv1i2XxuvOAbxPyQXq+p13vtWJREYlXG/dRRZ5j4iIieKyPGoOEFBACtI3kHyFpLLxntH77gLMphi59GRqmrR2L0aPUs5Br0AHlBVB+CBFqbTKEXHCTKYNE13R6O3vbeIzBCRGWiItAcag4HTihfQSB7zJhonpb0F4EWSzxVD6SsBrCx2i3Us/w/JVOvAlPxWqwAAAABJRU5ErkJggg==",
  Ir =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAMb0lEQVR4nO2df4gc5RnHv9mduDPuknPXa3rdjfTkFFO0NdEE4tuIEQuJqFQntgmYkgSVilWiOAGLSmmr+IcTTCgSi6GeNdIIcRTUGum1Sal9k+L9EUmlV8zRK7ldjnqdvWt3O7P4nukf++45Ozu3tz9m5h1z+4GDm3dm3ve9+d477zvP+7zPuwwRR0ukLwWwDsBqIimDRFIGAQzwn0v4j5MZ/jMJYJoya4IyawLAXwGc1ivFf4dV905YJroCbrREegjAFk3ObASwEcAqn4uYAHBKt80TAEb0SnHc5/y7IhKCaIn0tURSthNJuRvAFSEXf5Yy6whl1lG9Uvwo5LIbECYIicuXanJmF5GU+wCsFlUPF2OUWYd02xymc7aQV1vogmiJ9FWanNEA7AAgh11+i9gAhnXb1MN+pYUmiJZID2ly5kkAu8Iq0wcYgMO6bT4dljDxoAsgcbn/wMUr9227aMWvAFwXdHk+EwOwhkjKg0RSVp77/LOT584zO8gCA20hRjJ7L5EUHY1D0y8rM5RZj6jlwitBFRCIICQuf91I5YYBbAoi/whwQi3ld9E5+59+Z+y7IEYyew+RlBcBpPzOO2LMUGY9oJYLr/uZqW99CInL8oGLVx4kkvI0gIv8yjfCyJfFlt9NJGXVuc8/e+/cefa5H5n60kJIXB4wUrm3UTVxLEVG1VL+DjpnT3WbUazbDLRE+mojlfsQS1cMAFhnpHInSVy+qtuMumohRjL7bSIpx3Dh9xetMkOZdbtaLvy50ww6FqQnxoKUKLO2dCpKR4L0xFiUjkVpWxASl68yUrlRREOMs/yn1pkOoGotDtti7MWMWspvoHP239u5qS1B+GjqQ/g/R9EOpymzfkmZ9ZZeKXqOarREeoBIyp1EUn4IYE3I9XMyoZbyN7Qz+mpZEBKXZSOV+xPEjaamKLMeVcuFI+3cZCSz24mkPI9q6xHBKBeFtXJxy8NeTc78AuLE+EAt5de2KwYAqOXCEbWUXwvggwDq1QrrNDlzsNWLW2oh3BxyuPM6dcWoWsrfTOfsUjeZkLicMlK54xD0T0WZtb0VM8uigpC4PGikcmcgphMvqaX8N+mcPeE+oSXSN2lyZieqfcQggBUACgA+1G3zBb1S/IP7HsF/y4xayq/1+lucLCrIVN/QcQiy2lJmPamWC88400hcXmGkci8B+P4it7+ulvK76ZxtORONZPYJbm8TwYmB2fGbm13QtA8xktl7Ic6Ebuu2+YIzgcTli4xU7hgWFwMAthmp3LskLtf9jTzPQCeZmrDJSGZ3NrtgQUFIXO7nk0uiOEbn7BlnAp+Lv6GNPG7W5MyPnAk8zxEf6tcRRFL2k7i84ITdgoJocubnEDjTp9tm3aiIxOVlRFL2tJsPkZQ9JF7vS8F9skRxCX+2nngKoiXSV3D3HJHUfeESSfkWgJUd5DNEJGXIlSbUOY5IygNaIu1pTfAWRM48AUAKtFaL4x7mfq2LvC53Hc94XhUeEn/GDTQIoiXSqxFNV53lXdwbRf+vHV6tpFEQOfNYOPVZ8khez7pOEBKX+1H1KOwRDrv4M5+nThD+5RvF5n2hIvNnPk99CxE/slpyEEnZ5TyeF0RLpNcgOl7oS4lr+LMH4BCESMo9YurTg0jK1trvTkHuFFOdHnyhEgAuCB8PR2EeeqmyWkukB4EvWshmcXXpwdkM1FpIdYFlD4FocmYT8EUL6Qking0AENMS6X6IdevpUWVQS6T7Y1jaTtJRY00MQNce2z184+oYD1XRIwIQSRnsCRIhiKQMxiDOxRIAJimzdACHUV0TLgoGYJjXZVJgPfoliBNkWi3l19cckY1k9n0iKa+KqAhl1g9qbqokLu/jznT9i9wWBKtiEOdZMuL0Ctdt8wga59HDoKTb5tHaAa+TKDehlEhB6pzVuHf4dJPr/9NFWeUm56Y9PNNFOdL1d73oM0Dcr4xPusjLvWhGZL/ZFJGCeE0Vz/9nEkm51nlCrxQLAP7SQTmj/N55iKRc7zj0ek0KWx0mUpBBj7Sx2i9EUja5T1Jm/azdQiizfupOI5KyxXF41uM2YaakGMQ5jV3jTqDMOuU43Mh9xOZRy4Xf8qFpS1Bm7VfLhXecaVoivc5ZtqvMBesWEtMiBUm5Hzhl1vvOY03O/MR9k1ou7KXMehDNO/kZyqwH1XLhUfcJd54NZVbrJOqVVYrhixWsoUMk5TbnsV4pnkY1emiN7UYy+133fWq5cFAt5Qd129wD4FUAvwfwJoDnddvcqZbyl6vlQsMyMr4U4HZH0mle5oJ1CpnJZVN9Q28CEDWfPjowO77emWAks7uIpLzsSCrptrlBrxQ/7qYgr7X1lFm71XJh2HndVN/QSfC5CQG8FeMxbUWxzukCAwC6bR4GMOpISmly5oSRzN7UaSFGMnubR6CDUV7WPLwuosQAZdaEaEEa3+lzNtNt837U27b6iaSMGMnss80Wu7ghcfmrRjL7PJGUd1Avhq3b5v3uD0KvPitMKLMmYmj8aAqbO7VE2vldAL1SPE2Z9ZDrOolIyuNGKvePqb6hg1oivZlHva6DxGVZS6Q3G8nsQSOVmyCS8oj7Gsqsh9x9B6+DaFeoj5dpiXS/Jmc+FVwRz8X1RjK7h0jK/hbun0S1RXmFHq+Dx0w84EwjcVkyUrmTEDx7qtvmV2J6pTgNsSZnoLq4vmGZl1ouHKDM2o3FjY6rUP3QbCZGiXfiB9wneNmip7In9EpxuvalLirKwTxEUh43ktmt7nS1XBjWbXM9uqvjB7ptrnePqADASGa3Ekl5vIu8/eIUwE0n7gWWoiCScsRIZhu+A/RKcWxgdvxG3TbvQnum8RHdNu8amB2/Ua8Ux9wnjWT2FiIpbYfrCALdNv8I8MABWiJ9hSZnurGm+gmjzNrRLAyFlkivAvAdTc5cj6oLbM1QaVNmjVFmfYTqzgcLvoqNZHYbDxciei0lAEC3zSv1SvHsfCSHqb6hTxAh/17KrP26be5tNYpOq5C4LGly5jmv0ZdAzg7Mjl8JOKy9lFlHF74+fIikPGKkcme0RPoWv/LUEulbjFTuTMTEAGXW/GvTKYivAYF9YrUmZ0am+oaOa4l0xw7hWiK9eapv6LgmZ0YQwUVJlFlv1H6vCz4z1Tf0N0Swwg4mKbOOUmYdQ3XiyXOPj9o2SURStvC1F1F2lR0bmB3/Ru2gThAjmX1McHyTdnlnYHb8DmfCVN/Q26i36EYayixNLRf21Y7dkXJegbgJ/k7wmreIQnDOVrH5M5+nThA6Z0+j6rTWIxyG+TOfp2FOXbfNfRDrRbhUYPxZ19EoSPWLttdKguewXik2OFh4ep3otvkMeq0kSBh/xg14C1IpnqXMOhRsnZYulFkverUOoIlflm6bP4b4uFIXIjO6bT610MkFBaFz9gxl1t5g6rR0ocza644l6aSp56JaLhwCcMLvSi1hTvBnuiCLmp7VUn63oODDtV2fm+HlUzaF6gbEzVh0qjcAZtRSfvdiF7UaanxHmItp3OaEIAjbTMQXBS36OdHy7ghGMvtSSPG0Tg/Mjq8NoRxM9Q2dQQh+vJRZh9Ry4f5Wrm3Z+123zYdR78AWFGGuogqjrFH+7FqiZUHonG2rpfwdCN5DZYPXvLrf8DKC9lKc4NvptWyw7WTLo9V8l52gO/lRBPcfnELwbj8lvqi1wbmiGZ1uCraRSMp7+HKZusOkRJl1q1outO3N0822eT1RvOlYDKD7jSV7otTTlRiAD3vh8j7ld4j2vHUYTKil/K3t9hluul70SefsMbWUX49whsRRpeYs3pUYgE/bd587z0qUWa9eFls+cFls+XV+5PllgTLr0J7//et7zQyG7RDEBvc7iKQcxIXfr8xQZj3cijmkHXwXBJjfDe1liNu/KmhO8A3HJvzOOBBBahjJ7H1EUp6DwK2TfGaGMmvvYib0bghUEAAgcfkSTc48yw2TkfA07wBGmfWibptP+dVXLIQvnXozzp1n9uuf/fddAL8hkrICVetqlIPeOGEAfq3b5rY91qevnTvPAnciDLyFuOFrUR5DdVulqO5VYgMY1m1z30LOCEERuiA1SFzu1+TMTv4qi4qD9xhl1iHdNl9xexSGhTBBnGiJ9BoiKVuJpGxH+IuGzlJmHaHMesO9VFoEkRDECd+pYTOPR78B3mGcumECwCm+pm8k7FfSYkROEDc8FPoaAFcTSRnkYW1r4dFTaIw8N43qPMokgGnKrAkereJjVIPNCHkVtcr/AZCfqGijcer2AAAAAElFTkSuQmCC";
/*! Capacitor: https://capacitorjs.com/ - MIT License */ const A2 = (e) => {
    const t = new Map();
    t.set("web", { name: "web" });
    const n = e.CapacitorPlatforms || {
        currentPlatform: { name: "web" },
        platforms: t,
      },
      i = (o, s) => {
        n.platforms.set(o, s);
      },
      r = (o) => {
        n.platforms.has(o) && (n.currentPlatform = n.platforms.get(o));
      };
    return (n.addPlatform = i), (n.setPlatform = r), n;
  },
  O2 = (e) => (e.CapacitorPlatforms = A2(e)),
  kw = O2(
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {}
  );
kw.addPlatform;
kw.setPlatform;
var Cr;
(function (e) {
  (e.Unimplemented = "UNIMPLEMENTED"), (e.Unavailable = "UNAVAILABLE");
})(Cr || (Cr = {}));
class Nc extends Error {
  constructor(t, n, i) {
    super(t), (this.message = t), (this.code = n), (this.data = i);
  }
}
const R2 = (e) => {
    var t, n;
    return e != null && e.androidBridge
      ? "android"
      : !(
          (n =
            (t = e == null ? void 0 : e.webkit) === null || t === void 0
              ? void 0
              : t.messageHandlers) === null || n === void 0
        ) && n.bridge
      ? "ios"
      : "web";
  },
  I2 = (e) => {
    var t, n, i, r, o;
    const s = e.CapacitorCustomPlatform || null,
      a = e.Capacitor || {},
      l = (a.Plugins = a.Plugins || {}),
      c = e.CapacitorPlatforms,
      u = () => (s !== null ? s.name : R2(e)),
      d =
        ((t = c == null ? void 0 : c.currentPlatform) === null || t === void 0
          ? void 0
          : t.getPlatform) || u,
      f = () => d() !== "web",
      h =
        ((n = c == null ? void 0 : c.currentPlatform) === null || n === void 0
          ? void 0
          : n.isNativePlatform) || f,
      m = (w) => {
        const P = y.get(w);
        return !!((P != null && P.platforms.has(d())) || g(w));
      },
      b =
        ((i = c == null ? void 0 : c.currentPlatform) === null || i === void 0
          ? void 0
          : i.isPluginAvailable) || m,
      k = (w) => {
        var P;
        return (P = a.PluginHeaders) === null || P === void 0
          ? void 0
          : P.find((F) => F.name === w);
      },
      g =
        ((r = c == null ? void 0 : c.currentPlatform) === null || r === void 0
          ? void 0
          : r.getPluginHeader) || k,
      p = (w) => e.console.error(w),
      v = (w, P, F) =>
        Promise.reject(`${F} does not have an implementation of "${P}".`),
      y = new Map(),
      E = (w, P = {}) => {
        const F = y.get(w);
        if (F)
          return (
            console.warn(
              `Capacitor plugin "${w}" already registered. Cannot register plugins twice.`
            ),
            F.proxy
          );
        const _ = d(),
          I = g(w);
        let q;
        const ye = async () => (
            !q && _ in P
              ? (q =
                  typeof P[_] == "function" ? (q = await P[_]()) : (q = P[_]))
              : s !== null &&
                !q &&
                "web" in P &&
                (q =
                  typeof P.web == "function"
                    ? (q = await P.web())
                    : (q = P.web)),
            q
          ),
          se = ($, B) => {
            var D, N;
            if (I) {
              const V =
                I == null ? void 0 : I.methods.find((U) => B === U.name);
              if (V)
                return V.rtype === "promise"
                  ? (U) => a.nativePromise(w, B.toString(), U)
                  : (U, te) => a.nativeCallback(w, B.toString(), U, te);
              if ($)
                return (D = $[B]) === null || D === void 0 ? void 0 : D.bind($);
            } else {
              if ($)
                return (N = $[B]) === null || N === void 0 ? void 0 : N.bind($);
              throw new Nc(
                `"${w}" plugin is not implemented on ${_}`,
                Cr.Unimplemented
              );
            }
          },
          ae = ($) => {
            let B;
            const D = (...N) => {
              const V = ye().then((U) => {
                const te = se(U, $);
                if (te) {
                  const J = te(...N);
                  return (B = J == null ? void 0 : J.remove), J;
                } else
                  throw new Nc(
                    `"${w}.${$}()" is not implemented on ${_}`,
                    Cr.Unimplemented
                  );
              });
              return $ === "addListener" && (V.remove = async () => B()), V;
            };
            return (
              (D.toString = () => `${$.toString()}() { [capacitor code] }`),
              Object.defineProperty(D, "name", {
                value: $,
                writable: !1,
                configurable: !1,
              }),
              D
            );
          },
          X = ae("addListener"),
          Z = ae("removeListener"),
          L = ($, B) => {
            const D = X({ eventName: $ }, B),
              N = async () => {
                const U = await D;
                Z({ eventName: $, callbackId: U }, B);
              },
              V = new Promise((U) => D.then(() => U({ remove: N })));
            return (
              (V.remove = async () => {
                console.warn(
                  "Using addListener() without 'await' is deprecated."
                ),
                  await N();
              }),
              V
            );
          },
          O = new Proxy(
            {},
            {
              get($, B) {
                switch (B) {
                  case "$$typeof":
                    return;
                  case "toJSON":
                    return () => ({});
                  case "addListener":
                    return I ? L : X;
                  case "removeListener":
                    return Z;
                  default:
                    return ae(B);
                }
              },
            }
          );
        return (
          (l[w] = O),
          y.set(w, {
            name: w,
            proxy: O,
            platforms: new Set([...Object.keys(P), ...(I ? [_] : [])]),
          }),
          O
        );
      },
      T =
        ((o = c == null ? void 0 : c.currentPlatform) === null || o === void 0
          ? void 0
          : o.registerPlugin) || E;
    return (
      a.convertFileSrc || (a.convertFileSrc = (w) => w),
      (a.getPlatform = d),
      (a.handleError = p),
      (a.isNativePlatform = h),
      (a.isPluginAvailable = b),
      (a.pluginMethodNoop = v),
      (a.registerPlugin = T),
      (a.Exception = Nc),
      (a.DEBUG = !!a.DEBUG),
      (a.isLoggingEnabled = !!a.isLoggingEnabled),
      (a.platform = a.getPlatform()),
      (a.isNative = a.isNativePlatform()),
      a
    );
  },
  L2 = (e) => (e.Capacitor = I2(e)),
  Ma = L2(
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {}
  ),
  yh = Ma.registerPlugin;
Ma.Plugins;
class Ew {
  constructor(t) {
    (this.listeners = {}),
      (this.windowListeners = {}),
      t &&
        (console.warn(
          `Capacitor WebPlugin "${t.name}" config object was deprecated in v3 and will be removed in v4.`
        ),
        (this.config = t));
  }
  addListener(t, n) {
    this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(n);
    const r = this.windowListeners[t];
    r && !r.registered && this.addWindowListener(r);
    const o = async () => this.removeListener(t, n),
      s = Promise.resolve({ remove: o });
    return (
      Object.defineProperty(s, "remove", {
        value: async () => {
          console.warn("Using addListener() without 'await' is deprecated."),
            await o();
        },
      }),
      s
    );
  }
  async removeAllListeners() {
    this.listeners = {};
    for (const t in this.windowListeners)
      this.removeWindowListener(this.windowListeners[t]);
    this.windowListeners = {};
  }
  notifyListeners(t, n) {
    const i = this.listeners[t];
    i && i.forEach((r) => r(n));
  }
  hasListeners(t) {
    return !!this.listeners[t].length;
  }
  registerWindowListener(t, n) {
    this.windowListeners[n] = {
      registered: !1,
      windowEventName: t,
      pluginEventName: n,
      handler: (i) => {
        this.notifyListeners(n, i);
      },
    };
  }
  unimplemented(t = "not implemented") {
    return new Ma.Exception(t, Cr.Unimplemented);
  }
  unavailable(t = "not available") {
    return new Ma.Exception(t, Cr.Unavailable);
  }
  async removeListener(t, n) {
    const i = this.listeners[t];
    if (!i) return;
    const r = i.indexOf(n);
    this.listeners[t].splice(r, 1),
      this.listeners[t].length ||
        this.removeWindowListener(this.windowListeners[t]);
  }
  addWindowListener(t) {
    window.addEventListener(t.windowEventName, t.handler), (t.registered = !0);
  }
  removeWindowListener(t) {
    t &&
      (window.removeEventListener(t.windowEventName, t.handler),
      (t.registered = !1));
  }
}
const Sg = (e) =>
    encodeURIComponent(e)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape),
  Cg = (e) => e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class _2 extends Ew {
  async getCookies() {
    const t = document.cookie,
      n = {};
    return (
      t.split(";").forEach((i) => {
        if (i.length <= 0) return;
        let [r, o] = i.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        (r = Cg(r).trim()), (o = Cg(o).trim()), (n[r] = o);
      }),
      n
    );
  }
  async setCookie(t) {
    try {
      const n = Sg(t.key),
        i = Sg(t.value),
        r = `; expires=${(t.expires || "").replace("expires=", "")}`,
        o = (t.path || "/").replace("path=", ""),
        s = t.url != null && t.url.length > 0 ? `domain=${t.url}` : "";
      document.cookie = `${n}=${i || ""}${r}; path=${o}; ${s};`;
    } catch (n) {
      return Promise.reject(n);
    }
  }
  async deleteCookie(t) {
    try {
      document.cookie = `${t.key}=; Max-Age=0`;
    } catch (n) {
      return Promise.reject(n);
    }
  }
  async clearCookies() {
    try {
      const t = document.cookie.split(";") || [];
      for (const n of t)
        document.cookie = n
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    } catch (t) {
      return Promise.reject(t);
    }
  }
  async clearAllCookies() {
    try {
      await this.clearCookies();
    } catch (t) {
      return Promise.reject(t);
    }
  }
}
yh("CapacitorCookies", { web: () => new _2() });
const M2 = async (e) =>
    new Promise((t, n) => {
      const i = new FileReader();
      (i.onload = () => {
        const r = i.result;
        t(r.indexOf(",") >= 0 ? r.split(",")[1] : r);
      }),
        (i.onerror = (r) => n(r)),
        i.readAsDataURL(e);
    }),
  B2 = (e = {}) => {
    const t = Object.keys(e);
    return Object.keys(e)
      .map((r) => r.toLocaleLowerCase())
      .reduce((r, o, s) => ((r[o] = e[t[s]]), r), {});
  },
  D2 = (e, t = !0) =>
    e
      ? Object.entries(e)
          .reduce((i, r) => {
            const [o, s] = r;
            let a, l;
            return (
              Array.isArray(s)
                ? ((l = ""),
                  s.forEach((c) => {
                    (a = t ? encodeURIComponent(c) : c), (l += `${o}=${a}&`);
                  }),
                  l.slice(0, -1))
                : ((a = t ? encodeURIComponent(s) : s), (l = `${o}=${a}`)),
              `${i}&${l}`
            );
          }, "")
          .substr(1)
      : null,
  j2 = (e, t = {}) => {
    const n = Object.assign(
        { method: e.method || "GET", headers: e.headers },
        t
      ),
      r = B2(e.headers)["content-type"] || "";
    if (typeof e.data == "string") n.body = e.data;
    else if (r.includes("application/x-www-form-urlencoded")) {
      const o = new URLSearchParams();
      for (const [s, a] of Object.entries(e.data || {})) o.set(s, a);
      n.body = o.toString();
    } else if (r.includes("multipart/form-data")) {
      const o = new FormData();
      if (e.data instanceof FormData)
        e.data.forEach((a, l) => {
          o.append(l, a);
        });
      else for (const a of Object.keys(e.data)) o.append(a, e.data[a]);
      n.body = o;
      const s = new Headers(n.headers);
      s.delete("content-type"), (n.headers = s);
    } else
      (r.includes("application/json") || typeof e.data == "object") &&
        (n.body = JSON.stringify(e.data));
    return n;
  };
class z2 extends Ew {
  async request(t) {
    const n = j2(t, t.webFetchExtra),
      i = D2(t.params, t.shouldEncodeUrlParams),
      r = i ? `${t.url}?${i}` : t.url,
      o = await fetch(r, n),
      s = o.headers.get("content-type") || "";
    let { responseType: a = "text" } = o.ok ? t : {};
    s.includes("application/json") && (a = "json");
    let l, c;
    switch (a) {
      case "arraybuffer":
      case "blob":
        (c = await o.blob()), (l = await M2(c));
        break;
      case "json":
        l = await o.json();
        break;
      case "document":
      case "text":
      default:
        l = await o.text();
    }
    const u = {};
    return (
      o.headers.forEach((d, f) => {
        u[f] = d;
      }),
      { data: l, headers: u, status: o.status, url: o.url }
    );
  }
  async get(t) {
    return this.request(Object.assign(Object.assign({}, t), { method: "GET" }));
  }
  async post(t) {
    return this.request(
      Object.assign(Object.assign({}, t), { method: "POST" })
    );
  }
  async put(t) {
    return this.request(Object.assign(Object.assign({}, t), { method: "PUT" }));
  }
  async patch(t) {
    return this.request(
      Object.assign(Object.assign({}, t), { method: "PATCH" })
    );
  }
  async delete(t) {
    return this.request(
      Object.assign(Object.assign({}, t), { method: "DELETE" })
    );
  }
}
yh("CapacitorHttp", { web: () => new z2() });
const Ba = yh("VoiceRecorder", {
    web: () =>
      ot(() => import("./web-67427e98.js"), []).then(
        (e) => new e.VoiceRecorderWeb()
      ),
  }),
  F2 = () => {
    const [e, t] = H.useState(!1),
      [n, i] = H.useState(!1),
      r = () => {
        i(!n);
      },
      o = async () => {
        try {
          (await Ba.canDeviceVoiceRecord()).value &&
            (await Ba.requestAudioRecordingPermission()).value &&
            t(!0);
        } catch (s) {
          console.log(s);
        }
      };
    return (
      H.useEffect(() => {
        o();
      }, [n]),
      { hasMicrophonePermission: e, refreshPermission: r }
    );
  },
  Dl = () => {
    const { hasMicrophonePermission: e, refreshPermission: t } = F2(),
      [n, i] = H.useState(!1),
      [r, o] = H.useState("");
    return ne(zd, {
      children: [
        !e &&
          C(N2.Record, {
            onClick: async () => {
              try {
                (await Ba.canDeviceVoiceRecord()).value
                  ? (await Ba.requestAudioRecordingPermission()).value
                    ? t()
                    : (o(
                        "You need to give permission to record audio in your settings"
                      ),
                      i(!0))
                  : (o("Your device does not support voice recording"), i(!0));
              } catch (s) {
                console.log(s);
              }
            },
            children: C("img", { src: Ir, height: 80 }),
          }),
        C(dh, {
          isOpen: n,
          message: r,
          onDidDismiss: () => {
            i(!1), o("");
          },
          duration: 5e3,
        }),
      ],
    });
  },
  N2 = {
    Record: K.div`
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 25%;
  `,
  };
function H2() {
  if (typeof process > "u") {
    var e = typeof window < "u" ? window : {},
      t = 5e3,
      n = Date.now(),
      i = !1;
    e.document.addEventListener("deviceready", function () {
      console.log(
        "Ionic Native: deviceready event fired after " +
          (Date.now() - n) +
          " ms"
      ),
        (i = !0);
    }),
      setTimeout(function () {
        !i &&
          e.cordova &&
          console.warn(
            "Ionic Native: deviceready did not fire within " +
              t +
              "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them."
          );
      }, t);
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Ad =
  function (e, t) {
    return (
      (Ad =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, i) {
            n.__proto__ = i;
          }) ||
        function (n, i) {
          for (var r in i) i.hasOwnProperty(r) && (n[r] = i[r]);
        }),
      Ad(e, t)
    );
  };
function wh(e, t) {
  Ad(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function Da(e) {
  return typeof e == "function";
}
var $g = !1,
  tn = {
    Promise: void 0,
    set useDeprecatedSynchronousErrorHandling(e) {
      if (e) {
        var t = new Error();
        "" + t.stack;
      }
      $g = e;
    },
    get useDeprecatedSynchronousErrorHandling() {
      return $g;
    },
  };
function to(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}
var ja = {
    closed: !0,
    next: function (e) {},
    error: function (e) {
      if (tn.useDeprecatedSynchronousErrorHandling) throw e;
      to(e);
    },
    complete: function () {},
  },
  Sw = (function () {
    return (
      Array.isArray ||
      function (e) {
        return e && typeof e.length == "number";
      }
    );
  })();
function U2(e) {
  return e !== null && typeof e == "object";
}
var V2 = (function () {
    function e(t) {
      return (
        Error.call(this),
        (this.message = t
          ? t.length +
            ` errors occurred during unsubscription:
` +
            t.map(function (n, i) {
              return i + 1 + ") " + n.toString();
            }).join(`
  `)
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = t),
        this
      );
    }
    return (e.prototype = Object.create(Error.prototype)), e;
  })(),
  qs = V2,
  q2 = (function () {
    function e(t) {
      (this.closed = !1),
        (this._parentOrParents = null),
        (this._subscriptions = null),
        t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
    }
    return (
      (e.prototype.unsubscribe = function () {
        var t;
        if (!this.closed) {
          var n = this,
            i = n._parentOrParents,
            r = n._ctorUnsubscribe,
            o = n._unsubscribe,
            s = n._subscriptions;
          if (
            ((this.closed = !0),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            i instanceof e)
          )
            i.remove(this);
          else if (i !== null)
            for (var a = 0; a < i.length; ++a) {
              var l = i[a];
              l.remove(this);
            }
          if (Da(o)) {
            r && (this._unsubscribe = void 0);
            try {
              o.call(this);
            } catch (d) {
              t = d instanceof qs ? Pg(d.errors) : [d];
            }
          }
          if (Sw(s))
            for (var a = -1, c = s.length; ++a < c; ) {
              var u = s[a];
              if (U2(u))
                try {
                  u.unsubscribe();
                } catch (f) {
                  (t = t || []),
                    f instanceof qs ? (t = t.concat(Pg(f.errors))) : t.push(f);
                }
            }
          if (t) throw new qs(t);
        }
      }),
      (e.prototype.add = function (t) {
        var n = t;
        if (!t) return e.EMPTY;
        switch (typeof t) {
          case "function":
            n = new e(t);
          case "object":
            if (n === this || n.closed || typeof n.unsubscribe != "function")
              return n;
            if (this.closed) return n.unsubscribe(), n;
            if (!(n instanceof e)) {
              var i = n;
              (n = new e()), (n._subscriptions = [i]);
            }
            break;
          default:
            throw new Error(
              "unrecognized teardown " + t + " added to Subscription."
            );
        }
        var r = n._parentOrParents;
        if (r === null) n._parentOrParents = this;
        else if (r instanceof e) {
          if (r === this) return n;
          n._parentOrParents = [r, this];
        } else if (r.indexOf(this) === -1) r.push(this);
        else return n;
        var o = this._subscriptions;
        return o === null ? (this._subscriptions = [n]) : o.push(n), n;
      }),
      (e.prototype.remove = function (t) {
        var n = this._subscriptions;
        if (n) {
          var i = n.indexOf(t);
          i !== -1 && n.splice(i, 1);
        }
      }),
      (e.EMPTY = (function (t) {
        return (t.closed = !0), t;
      })(new e())),
      e
    );
  })();
function Pg(e) {
  return e.reduce(function (t, n) {
    return t.concat(n instanceof qs ? n.errors : n);
  }, []);
}
var Od = (function () {
    return typeof Symbol == "function"
      ? Symbol("rxSubscriber")
      : "@@rxSubscriber_" + Math.random();
  })(),
  fr = (function (e) {
    wh(t, e);
    function t(n, i, r) {
      var o = e.call(this) || this;
      switch (
        ((o.syncErrorValue = null),
        (o.syncErrorThrown = !1),
        (o.syncErrorThrowable = !1),
        (o.isStopped = !1),
        arguments.length)
      ) {
        case 0:
          o.destination = ja;
          break;
        case 1:
          if (!n) {
            o.destination = ja;
            break;
          }
          if (typeof n == "object") {
            n instanceof t
              ? ((o.syncErrorThrowable = n.syncErrorThrowable),
                (o.destination = n),
                n.add(o))
              : ((o.syncErrorThrowable = !0), (o.destination = new Tg(o, n)));
            break;
          }
        default:
          (o.syncErrorThrowable = !0), (o.destination = new Tg(o, n, i, r));
          break;
      }
      return o;
    }
    return (
      (t.prototype[Od] = function () {
        return this;
      }),
      (t.create = function (n, i, r) {
        var o = new t(n, i, r);
        return (o.syncErrorThrowable = !1), o;
      }),
      (t.prototype.next = function (n) {
        this.isStopped || this._next(n);
      }),
      (t.prototype.error = function (n) {
        this.isStopped || ((this.isStopped = !0), this._error(n));
      }),
      (t.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (t.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
      }),
      (t.prototype._next = function (n) {
        this.destination.next(n);
      }),
      (t.prototype._error = function (n) {
        this.destination.error(n), this.unsubscribe();
      }),
      (t.prototype._complete = function () {
        this.destination.complete(), this.unsubscribe();
      }),
      (t.prototype._unsubscribeAndRecycle = function () {
        var n = this._parentOrParents;
        return (
          (this._parentOrParents = null),
          this.unsubscribe(),
          (this.closed = !1),
          (this.isStopped = !1),
          (this._parentOrParents = n),
          this
        );
      }),
      t
    );
  })(q2),
  Tg = (function (e) {
    wh(t, e);
    function t(n, i, r, o) {
      var s = e.call(this) || this;
      s._parentSubscriber = n;
      var a,
        l = s;
      return (
        Da(i)
          ? (a = i)
          : i &&
            ((a = i.next),
            (r = i.error),
            (o = i.complete),
            i !== ja &&
              ((l = Object.create(i)),
              Da(l.unsubscribe) && s.add(l.unsubscribe.bind(l)),
              (l.unsubscribe = s.unsubscribe.bind(s)))),
        (s._context = l),
        (s._next = a),
        (s._error = r),
        (s._complete = o),
        s
      );
    }
    return (
      (t.prototype.next = function (n) {
        if (!this.isStopped && this._next) {
          var i = this._parentSubscriber;
          !tn.useDeprecatedSynchronousErrorHandling || !i.syncErrorThrowable
            ? this.__tryOrUnsub(this._next, n)
            : this.__tryOrSetError(i, this._next, n) && this.unsubscribe();
        }
      }),
      (t.prototype.error = function (n) {
        if (!this.isStopped) {
          var i = this._parentSubscriber,
            r = tn.useDeprecatedSynchronousErrorHandling;
          if (this._error)
            !r || !i.syncErrorThrowable
              ? (this.__tryOrUnsub(this._error, n), this.unsubscribe())
              : (this.__tryOrSetError(i, this._error, n), this.unsubscribe());
          else if (i.syncErrorThrowable)
            r ? ((i.syncErrorValue = n), (i.syncErrorThrown = !0)) : to(n),
              this.unsubscribe();
          else {
            if ((this.unsubscribe(), r)) throw n;
            to(n);
          }
        }
      }),
      (t.prototype.complete = function () {
        var n = this;
        if (!this.isStopped) {
          var i = this._parentSubscriber;
          if (this._complete) {
            var r = function () {
              return n._complete.call(n._context);
            };
            !tn.useDeprecatedSynchronousErrorHandling || !i.syncErrorThrowable
              ? (this.__tryOrUnsub(r), this.unsubscribe())
              : (this.__tryOrSetError(i, r), this.unsubscribe());
          } else this.unsubscribe();
        }
      }),
      (t.prototype.__tryOrUnsub = function (n, i) {
        try {
          n.call(this._context, i);
        } catch (r) {
          if ((this.unsubscribe(), tn.useDeprecatedSynchronousErrorHandling))
            throw r;
          to(r);
        }
      }),
      (t.prototype.__tryOrSetError = function (n, i, r) {
        if (!tn.useDeprecatedSynchronousErrorHandling)
          throw new Error("bad call");
        try {
          i.call(this._context, r);
        } catch (o) {
          return tn.useDeprecatedSynchronousErrorHandling
            ? ((n.syncErrorValue = o), (n.syncErrorThrown = !0), !0)
            : (to(o), !0);
        }
        return !1;
      }),
      (t.prototype._unsubscribe = function () {
        var n = this._parentSubscriber;
        (this._context = null),
          (this._parentSubscriber = null),
          n.unsubscribe();
      }),
      t
    );
  })(fr);
function W2(e) {
  for (; e; ) {
    var t = e,
      n = t.closed,
      i = t.destination,
      r = t.isStopped;
    if (n || r) return !1;
    i && i instanceof fr ? (e = i) : (e = null);
  }
  return !0;
}
function Y2(e, t, n) {
  if (e) {
    if (e instanceof fr) return e;
    if (e[Od]) return e[Od]();
  }
  return !e && !t && !n ? new fr(ja) : new fr(e, t, n);
}
var G2 = (function () {
  return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
})();
function X2(e) {
  return e;
}
function K2(e) {
  return e.length === 0
    ? X2
    : e.length === 1
    ? e[0]
    : function (n) {
        return e.reduce(function (i, r) {
          return r(i);
        }, n);
      };
}
var Cw = (function () {
  function e(t) {
    (this._isScalar = !1), t && (this._subscribe = t);
  }
  return (
    (e.prototype.lift = function (t) {
      var n = new e();
      return (n.source = this), (n.operator = t), n;
    }),
    (e.prototype.subscribe = function (t, n, i) {
      var r = this.operator,
        o = Y2(t, n, i);
      if (
        (r
          ? o.add(r.call(o, this.source))
          : o.add(
              this.source ||
                (tn.useDeprecatedSynchronousErrorHandling &&
                  !o.syncErrorThrowable)
                ? this._subscribe(o)
                : this._trySubscribe(o)
            ),
        tn.useDeprecatedSynchronousErrorHandling &&
          o.syncErrorThrowable &&
          ((o.syncErrorThrowable = !1), o.syncErrorThrown))
      )
        throw o.syncErrorValue;
      return o;
    }),
    (e.prototype._trySubscribe = function (t) {
      try {
        return this._subscribe(t);
      } catch (n) {
        tn.useDeprecatedSynchronousErrorHandling &&
          ((t.syncErrorThrown = !0), (t.syncErrorValue = n)),
          W2(t) ? t.error(n) : console.warn(n);
      }
    }),
    (e.prototype.forEach = function (t, n) {
      var i = this;
      return (
        (n = Ag(n)),
        new n(function (r, o) {
          var s;
          s = i.subscribe(
            function (a) {
              try {
                t(a);
              } catch (l) {
                o(l), s && s.unsubscribe();
              }
            },
            o,
            r
          );
        })
      );
    }),
    (e.prototype._subscribe = function (t) {
      var n = this.source;
      return n && n.subscribe(t);
    }),
    (e.prototype[G2] = function () {
      return this;
    }),
    (e.prototype.pipe = function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      return t.length === 0 ? this : K2(t)(this);
    }),
    (e.prototype.toPromise = function (t) {
      var n = this;
      return (
        (t = Ag(t)),
        new t(function (i, r) {
          var o;
          n.subscribe(
            function (s) {
              return (o = s);
            },
            function (s) {
              return r(s);
            },
            function () {
              return i(o);
            }
          );
        })
      );
    }),
    (e.create = function (t) {
      return new e(t);
    }),
    e
  );
})();
function Ag(e) {
  if ((e || (e = Promise), !e)) throw new Error("no Promise impl found");
  return e;
}
function Q2(e, t) {
  return function (i) {
    if (typeof e != "function")
      throw new TypeError(
        "argument is not a function. Are you looking for `mapTo()`?"
      );
    return i.lift(new Z2(e, t));
  };
}
var Z2 = (function () {
    function e(t, n) {
      (this.project = t), (this.thisArg = n);
    }
    return (
      (e.prototype.call = function (t, n) {
        return n.subscribe(new J2(t, this.project, this.thisArg));
      }),
      e
    );
  })(),
  J2 = (function (e) {
    wh(t, e);
    function t(n, i, r) {
      var o = e.call(this, n) || this;
      return (o.project = i), (o.count = 0), (o.thisArg = r || o), o;
    }
    return (
      (t.prototype._next = function (n) {
        var i;
        try {
          i = this.project.call(this.thisArg, n, this.count++);
        } catch (r) {
          this.destination.error(r);
          return;
        }
        this.destination.next(i);
      }),
      t
    );
  })(fr);
function $w(e, t, n, i) {
  return (
    Da(n) && ((i = n), (n = void 0)),
    i
      ? $w(e, t, n).pipe(
          Q2(function (r) {
            return Sw(r) ? i.apply(void 0, r) : i(r);
          })
        )
      : new Cw(function (r) {
          function o(s) {
            arguments.length > 1
              ? r.next(Array.prototype.slice.call(arguments))
              : r.next(s);
          }
          Pw(e, t, o, r, n);
        })
  );
}
function Pw(e, t, n, i, r) {
  var o;
  if (nI(e)) {
    var s = e;
    e.addEventListener(t, n, r),
      (o = function () {
        return s.removeEventListener(t, n, r);
      });
  } else if (tI(e)) {
    var a = e;
    e.on(t, n),
      (o = function () {
        return a.off(t, n);
      });
  } else if (eI(e)) {
    var l = e;
    e.addListener(t, n),
      (o = function () {
        return l.removeListener(t, n);
      });
  } else if (e && e.length)
    for (var c = 0, u = e.length; c < u; c++) Pw(e[c], t, n, i, r);
  else throw new TypeError("Invalid event target");
  i.add(o);
}
function eI(e) {
  return (
    e &&
    typeof e.addListener == "function" &&
    typeof e.removeListener == "function"
  );
}
function tI(e) {
  return e && typeof e.on == "function" && typeof e.off == "function";
}
function nI(e) {
  return (
    e &&
    typeof e.addEventListener == "function" &&
    typeof e.removeEventListener == "function"
  );
}
var iI = { error: "cordova_not_available" },
  rI = { error: "plugin_not_installed" };
function Tw(e) {
  var t = function () {
    if (Promise)
      return new Promise(function (o, s) {
        e(o, s);
      });
    console.error(
      "No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser."
    );
  };
  if (typeof window < "u" && window.angular) {
    var n = window.document,
      i = window.angular
        .element(n.querySelector("[ng-app]") || n.body)
        .injector();
    if (i) {
      var r = i.get("$q");
      return r(function (o, s) {
        e(o, s);
      });
    }
    console.warn(
      "Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve."
    );
  }
  return t();
}
function oI(e, t, n, i) {
  i === void 0 && (i = {});
  var r,
    o,
    s = Tw(function (a, l) {
      i.destruct
        ? (r = Mn(
            e,
            t,
            n,
            i,
            function () {
              for (var c = [], u = 0; u < arguments.length; u++)
                c[u] = arguments[u];
              return a(c);
            },
            function () {
              for (var c = [], u = 0; u < arguments.length; u++)
                c[u] = arguments[u];
              return l(c);
            }
          ))
        : (r = Mn(e, t, n, i, a, l)),
        (o = l);
    });
  return (
    r &&
      r.error &&
      (s.catch(function () {}), typeof o == "function" && o(r.error)),
    s
  );
}
function sI(e, t, n, i) {
  return (
    i === void 0 && (i = {}),
    Tw(function (r, o) {
      var s = Mn(e, t, n, i);
      s
        ? s.error
          ? o(s.error)
          : s.then && s.then(r).catch(o)
        : o({ error: "unexpected_error" });
    })
  );
}
function aI(e, t, n, i) {
  return (
    i === void 0 && (i = {}),
    new Cw(function (r) {
      var o;
      return (
        i.destruct
          ? (o = Mn(
              e,
              t,
              n,
              i,
              function () {
                for (var s = [], a = 0; a < arguments.length; a++)
                  s[a] = arguments[a];
                return r.next(s);
              },
              function () {
                for (var s = [], a = 0; a < arguments.length; a++)
                  s[a] = arguments[a];
                return r.error(s);
              }
            ))
          : (o = Mn(e, t, n, i, r.next.bind(r), r.error.bind(r))),
        o && o.error && (r.error(o.error), r.complete()),
        function () {
          try {
            if (i.clearFunction)
              return i.clearWithArgs
                ? Mn(e, i.clearFunction, n, i, r.next.bind(r), r.error.bind(r))
                : Mn(e, i.clearFunction, []);
          } catch (s) {
            console.warn(
              "Unable to clear the previous observable watch for",
              e.constructor.getPluginName(),
              t
            ),
              console.warn(s);
          }
        }
      );
    })
  );
}
function lI(e, t) {
  return (
    (t =
      typeof window < "u" && t
        ? Rw(window, t)
        : t || (typeof window < "u" ? window : {})),
    $w(t, e)
  );
}
function Aw(e, t, n) {
  var i, r, o;
  return (
    typeof e == "string"
      ? (i = e)
      : ((i = e.constructor.getPluginRef()),
        (n = e.constructor.getPluginName()),
        (o = e.constructor.getPluginInstallName())),
    (r = Ow(i)),
    !r || (t && typeof r[t] > "u")
      ? typeof window > "u" || !window.cordova
        ? (dI(n, t), iI)
        : (uI(n, o, t), rI)
      : !0
  );
}
function cI(e, t, n, i) {
  if ((t === void 0 && (t = {}), t.sync)) return e;
  if (t.callbackOrder === "reverse") e.unshift(i), e.unshift(n);
  else if (t.callbackStyle === "node")
    e.push(function (a, l) {
      a ? i(a) : n(l);
    });
  else if (t.callbackStyle === "object" && t.successName && t.errorName) {
    var r = {};
    (r[t.successName] = n), (r[t.errorName] = i), e.push(r);
  } else if (typeof t.successIndex < "u" || typeof t.errorIndex < "u") {
    var o = function () {
        t.successIndex > e.length
          ? (e[t.successIndex] = n)
          : e.splice(t.successIndex, 0, n);
      },
      s = function () {
        t.errorIndex > e.length
          ? (e[t.errorIndex] = i)
          : e.splice(t.errorIndex, 0, i);
      };
    t.successIndex > t.errorIndex ? (s(), o()) : (o(), s());
  } else e.push(n), e.push(i);
  return e;
}
function Mn(e, t, n, i, r, o) {
  i === void 0 && (i = {}), (n = cI(n, i, r, o));
  var s = Aw(e, t);
  if (s === !0) {
    var a = Ow(e.constructor.getPluginRef());
    return a[t].apply(a, n);
  } else return s;
}
function Ow(e) {
  return typeof window < "u" ? Rw(window, e) : null;
}
function Rw(e, t) {
  for (var n = t.split("."), i = e, r = 0; r < n.length; r++) {
    if (!i) return null;
    i = i[n[r]];
  }
  return i;
}
function uI(e, t, n) {
  console.warn(
    n
      ? "Native: tried calling " +
          e +
          "." +
          n +
          ", but the " +
          e +
          " plugin is not installed."
      : "Native: tried accessing the " + e + " plugin but it's not installed."
  ),
    t &&
      console.warn(
        "Install the " + e + " plugin: 'ionic cordova plugin add " + t + "'"
      );
}
function dI(e, t) {
  typeof process > "u" &&
    console.warn(
      t
        ? "Native: tried calling " +
            e +
            "." +
            t +
            ", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator"
        : "Native: tried accessing the " +
            e +
            " plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator"
    );
}
var fI = function (e, t, n) {
  return (
    n === void 0 && (n = {}),
    function () {
      for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
      return n.sync
        ? Mn(e, t, i, n)
        : n.observable
        ? aI(e, t, i, n)
        : n.eventObservable && n.event
        ? lI(n.event, n.element)
        : n.otherPromise
        ? sI(e, t, i, n)
        : oI(e, t, i, n);
    }
  );
};
function hI(e, t) {
  for (var n = t.split("."), i = e, r = 0; r < n.length; r++) {
    if (!i) return null;
    i = i[n[r]];
  }
  return i;
}
var pI = (function () {
  function e() {}
  return (
    (e.installed = function () {
      var t = Aw(this.pluginRef) === !0;
      return t;
    }),
    (e.getPlugin = function () {
      return typeof window < "u" ? hI(window, this.pluginRef) : null;
    }),
    (e.getPluginName = function () {
      var t = this.pluginName;
      return t;
    }),
    (e.getPluginRef = function () {
      var t = this.pluginRef;
      return t;
    }),
    (e.getPluginInstallName = function () {
      var t = this.plugin;
      return t;
    }),
    (e.getSupportedPlatforms = function () {
      var t = this.platforms;
      return t;
    }),
    (e.pluginName = ""),
    (e.pluginRef = ""),
    (e.plugin = ""),
    (e.repo = ""),
    (e.platforms = []),
    (e.install = ""),
    e
  );
})();
function _i(e, t, n, i) {
  return fI(e, t, n).apply(this, i);
}
H2();
var mI =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (i, r) {
                i.__proto__ = r;
              }) ||
            function (i, r) {
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (i[o] = r[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        e(t, n);
        function i() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i());
      };
    })(),
  gI = (function (e) {
    mI(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.isRecognitionAvailable = function () {
        return _i(this, "isRecognitionAvailable", {}, arguments);
      }),
      (t.prototype.startListening = function (n) {
        return _i(
          this,
          "startListening",
          { callbackOrder: "reverse", observable: !0 },
          arguments
        );
      }),
      (t.prototype.stopListening = function () {
        return _i(this, "stopListening", {}, arguments);
      }),
      (t.prototype.getSupportedLanguages = function () {
        return _i(this, "getSupportedLanguages", {}, arguments);
      }),
      (t.prototype.hasPermission = function () {
        return _i(this, "hasPermission", {}, arguments);
      }),
      (t.prototype.requestPermission = function () {
        return _i(this, "requestPermission", {}, arguments);
      }),
      (t.pluginName = "SpeechRecognition"),
      (t.plugin = "cordova-plugin-speechrecognition"),
      (t.pluginRef = "plugins.speechRecognition"),
      (t.repo = "https://github.com/pbakondy/cordova-plugin-speechrecognition"),
      (t.platforms = ["Android", "iOS"]),
      t
    );
  })(pI),
  Kt = new gI();
const vI = () => {
    const [e, t] = H.useState(!1),
      [n, i] = H.useState(!1),
      r = () => {
        i(!n);
      },
      o = async () => {
        try {
          (await Kt.isRecognitionAvailable()) &&
            (await Kt.hasPermission()) &&
            t(!0);
        } catch (s) {
          console.log(s);
        }
      };
    return (
      H.useEffect(() => {
        o();
      }, [n]),
      { hasSpeechPermission: e, refreshPermission: r }
    );
  },
  jl = () => {
    const { hasSpeechPermission: e, refreshPermission: t } = vI(),
      [n, i] = H.useState(!1),
      [r, o] = H.useState("");
    return ne(zd, {
      children: [
        !e &&
          C(bI.Record, {
            onClick: () => {
              Kt.requestPermission().then(
                () => {
                  t();
                },
                () => {
                  o(
                    "You need to give Speech recognition permission in your settings"
                  ),
                    i(!0);
                }
              );
            },
            children: C("img", { src: Ir, height: 80 }),
          }),
        C(dh, {
          isOpen: n,
          message: r,
          onDidDismiss: () => {
            i(!1), o("");
          },
          duration: 5e3,
        }),
      ],
    });
  },
  bI = {
    Record: K.div`
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 25%;
  `,
  },
  yI = "/assets/talking-piper-7f4af511.gif",
  zl = "/assets/stop-recording-424fe780.png";
var xh = {},
  Iw = {},
  kh = { exports: {} },
  Lw = function (t, n) {
    return function () {
      for (var r = new Array(arguments.length), o = 0; o < r.length; o++)
        r[o] = arguments[o];
      return t.apply(n, r);
    };
  },
  wI = Lw,
  Zn = Object.prototype.toString;
function Eh(e) {
  return Array.isArray(e);
}
function Rd(e) {
  return typeof e > "u";
}
function xI(e) {
  return (
    e !== null &&
    !Rd(e) &&
    e.constructor !== null &&
    !Rd(e.constructor) &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
function _w(e) {
  return Zn.call(e) === "[object ArrayBuffer]";
}
function kI(e) {
  return Zn.call(e) === "[object FormData]";
}
function EI(e) {
  var t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && _w(e.buffer)),
    t
  );
}
function SI(e) {
  return typeof e == "string";
}
function CI(e) {
  return typeof e == "number";
}
function Mw(e) {
  return e !== null && typeof e == "object";
}
function Ws(e) {
  if (Zn.call(e) !== "[object Object]") return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function $I(e) {
  return Zn.call(e) === "[object Date]";
}
function PI(e) {
  return Zn.call(e) === "[object File]";
}
function TI(e) {
  return Zn.call(e) === "[object Blob]";
}
function Bw(e) {
  return Zn.call(e) === "[object Function]";
}
function AI(e) {
  return Mw(e) && Bw(e.pipe);
}
function OI(e) {
  return Zn.call(e) === "[object URLSearchParams]";
}
function RI(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function II() {
  return typeof navigator < "u" &&
    (navigator.product === "ReactNative" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
    ? !1
    : typeof window < "u" && typeof document < "u";
}
function Sh(e, t) {
  if (!(e === null || typeof e > "u"))
    if ((typeof e != "object" && (e = [e]), Eh(e)))
      for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
    else
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e);
}
function Id() {
  var e = {};
  function t(r, o) {
    Ws(e[o]) && Ws(r)
      ? (e[o] = Id(e[o], r))
      : Ws(r)
      ? (e[o] = Id({}, r))
      : Eh(r)
      ? (e[o] = r.slice())
      : (e[o] = r);
  }
  for (var n = 0, i = arguments.length; n < i; n++) Sh(arguments[n], t);
  return e;
}
function LI(e, t, n) {
  return (
    Sh(t, function (r, o) {
      n && typeof r == "function" ? (e[o] = wI(r, n)) : (e[o] = r);
    }),
    e
  );
}
function _I(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
var ht = {
    isArray: Eh,
    isArrayBuffer: _w,
    isBuffer: xI,
    isFormData: kI,
    isArrayBufferView: EI,
    isString: SI,
    isNumber: CI,
    isObject: Mw,
    isPlainObject: Ws,
    isUndefined: Rd,
    isDate: $I,
    isFile: PI,
    isBlob: TI,
    isFunction: Bw,
    isStream: AI,
    isURLSearchParams: OI,
    isStandardBrowserEnv: II,
    forEach: Sh,
    merge: Id,
    extend: LI,
    trim: RI,
    stripBOM: _I,
  },
  Mi = ht;
function Og(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var Dw = function (t, n, i) {
    if (!n) return t;
    var r;
    if (i) r = i(n);
    else if (Mi.isURLSearchParams(n)) r = n.toString();
    else {
      var o = [];
      Mi.forEach(n, function (l, c) {
        l === null ||
          typeof l > "u" ||
          (Mi.isArray(l) ? (c = c + "[]") : (l = [l]),
          Mi.forEach(l, function (d) {
            Mi.isDate(d)
              ? (d = d.toISOString())
              : Mi.isObject(d) && (d = JSON.stringify(d)),
              o.push(Og(c) + "=" + Og(d));
          }));
      }),
        (r = o.join("&"));
    }
    if (r) {
      var s = t.indexOf("#");
      s !== -1 && (t = t.slice(0, s)),
        (t += (t.indexOf("?") === -1 ? "?" : "&") + r);
    }
    return t;
  },
  MI = ht;
function Fl() {
  this.handlers = [];
}
Fl.prototype.use = function (t, n, i) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: i ? i.synchronous : !1,
      runWhen: i ? i.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
Fl.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Fl.prototype.forEach = function (t) {
  MI.forEach(this.handlers, function (i) {
    i !== null && t(i);
  });
};
var BI = Fl,
  DI = ht,
  jI = function (t, n) {
    DI.forEach(t, function (r, o) {
      o !== n &&
        o.toUpperCase() === n.toUpperCase() &&
        ((t[n] = r), delete t[o]);
    });
  },
  jw = function (t, n, i, r, o) {
    return (
      (t.config = n),
      i && (t.code = i),
      (t.request = r),
      (t.response = o),
      (t.isAxiosError = !0),
      (t.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      }),
      t
    );
  },
  zw = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Hc,
  Rg;
function Fw() {
  if (Rg) return Hc;
  Rg = 1;
  var e = jw;
  return (
    (Hc = function (n, i, r, o, s) {
      var a = new Error(n);
      return e(a, i, r, o, s);
    }),
    Hc
  );
}
var Uc, Ig;
function zI() {
  if (Ig) return Uc;
  Ig = 1;
  var e = Fw();
  return (
    (Uc = function (n, i, r) {
      var o = r.config.validateStatus;
      !r.status || !o || o(r.status)
        ? n(r)
        : i(
            e(
              "Request failed with status code " + r.status,
              r.config,
              null,
              r.request,
              r
            )
          );
    }),
    Uc
  );
}
var Vc, Lg;
function FI() {
  if (Lg) return Vc;
  Lg = 1;
  var e = ht;
  return (
    (Vc = e.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (i, r, o, s, a, l) {
              var c = [];
              c.push(i + "=" + encodeURIComponent(r)),
                e.isNumber(o) && c.push("expires=" + new Date(o).toGMTString()),
                e.isString(s) && c.push("path=" + s),
                e.isString(a) && c.push("domain=" + a),
                l === !0 && c.push("secure"),
                (document.cookie = c.join("; "));
            },
            read: function (i) {
              var r = document.cookie.match(
                new RegExp("(^|;\\s*)(" + i + ")=([^;]*)")
              );
              return r ? decodeURIComponent(r[3]) : null;
            },
            remove: function (i) {
              this.write(i, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })()),
    Vc
  );
}
var qc, _g;
function NI() {
  return (
    _g ||
      ((_g = 1),
      (qc = function (t) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
      })),
    qc
  );
}
var Wc, Mg;
function HI() {
  return (
    Mg ||
      ((Mg = 1),
      (Wc = function (t, n) {
        return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t;
      })),
    Wc
  );
}
var Yc, Bg;
function UI() {
  if (Bg) return Yc;
  Bg = 1;
  var e = NI(),
    t = HI();
  return (
    (Yc = function (i, r) {
      return i && !e(r) ? t(i, r) : r;
    }),
    Yc
  );
}
var Gc, Dg;
function VI() {
  if (Dg) return Gc;
  Dg = 1;
  var e = ht,
    t = [
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
    ];
  return (
    (Gc = function (i) {
      var r = {},
        o,
        s,
        a;
      return (
        i &&
          e.forEach(
            i.split(`
`),
            function (c) {
              if (
                ((a = c.indexOf(":")),
                (o = e.trim(c.substr(0, a)).toLowerCase()),
                (s = e.trim(c.substr(a + 1))),
                o)
              ) {
                if (r[o] && t.indexOf(o) >= 0) return;
                o === "set-cookie"
                  ? (r[o] = (r[o] ? r[o] : []).concat([s]))
                  : (r[o] = r[o] ? r[o] + ", " + s : s);
              }
            }
          ),
        r
      );
    }),
    Gc
  );
}
var Xc, jg;
function qI() {
  if (jg) return Xc;
  jg = 1;
  var e = ht;
  return (
    (Xc = e.isStandardBrowserEnv()
      ? (function () {
          var n = /(msie|trident)/i.test(navigator.userAgent),
            i = document.createElement("a"),
            r;
          function o(s) {
            var a = s;
            return (
              n && (i.setAttribute("href", a), (a = i.href)),
              i.setAttribute("href", a),
              {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname:
                  i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname,
              }
            );
          }
          return (
            (r = o(window.location.href)),
            function (a) {
              var l = e.isString(a) ? o(a) : a;
              return l.protocol === r.protocol && l.host === r.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })()),
    Xc
  );
}
var Kc, zg;
function Nl() {
  if (zg) return Kc;
  zg = 1;
  function e(t) {
    this.message = t;
  }
  return (
    (e.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
    (e.prototype.__CANCEL__ = !0),
    (Kc = e),
    Kc
  );
}
var Qc, Fg;
function Ng() {
  if (Fg) return Qc;
  Fg = 1;
  var e = ht,
    t = zI(),
    n = FI(),
    i = Dw,
    r = UI(),
    o = VI(),
    s = qI(),
    a = Fw(),
    l = zw,
    c = Nl();
  return (
    (Qc = function (d) {
      return new Promise(function (h, m) {
        var b = d.data,
          k = d.headers,
          g = d.responseType,
          p;
        function v() {
          d.cancelToken && d.cancelToken.unsubscribe(p),
            d.signal && d.signal.removeEventListener("abort", p);
        }
        e.isFormData(b) && delete k["Content-Type"];
        var y = new XMLHttpRequest();
        if (d.auth) {
          var E = d.auth.username || "",
            T = d.auth.password
              ? unescape(encodeURIComponent(d.auth.password))
              : "";
          k.Authorization = "Basic " + btoa(E + ":" + T);
        }
        var w = r(d.baseURL, d.url);
        y.open(d.method.toUpperCase(), i(w, d.params, d.paramsSerializer), !0),
          (y.timeout = d.timeout);
        function P() {
          if (y) {
            var _ =
                "getAllResponseHeaders" in y
                  ? o(y.getAllResponseHeaders())
                  : null,
              I =
                !g || g === "text" || g === "json"
                  ? y.responseText
                  : y.response,
              q = {
                data: I,
                status: y.status,
                statusText: y.statusText,
                headers: _,
                config: d,
                request: y,
              };
            t(
              function (se) {
                h(se), v();
              },
              function (se) {
                m(se), v();
              },
              q
            ),
              (y = null);
          }
        }
        if (
          ("onloadend" in y
            ? (y.onloadend = P)
            : (y.onreadystatechange = function () {
                !y ||
                  y.readyState !== 4 ||
                  (y.status === 0 &&
                    !(y.responseURL && y.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(P);
              }),
          (y.onabort = function () {
            y && (m(a("Request aborted", d, "ECONNABORTED", y)), (y = null));
          }),
          (y.onerror = function () {
            m(a("Network Error", d, null, y)), (y = null);
          }),
          (y.ontimeout = function () {
            var I = d.timeout
                ? "timeout of " + d.timeout + "ms exceeded"
                : "timeout exceeded",
              q = d.transitional || l;
            d.timeoutErrorMessage && (I = d.timeoutErrorMessage),
              m(
                a(I, d, q.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", y)
              ),
              (y = null);
          }),
          e.isStandardBrowserEnv())
        ) {
          var F =
            (d.withCredentials || s(w)) && d.xsrfCookieName
              ? n.read(d.xsrfCookieName)
              : void 0;
          F && (k[d.xsrfHeaderName] = F);
        }
        "setRequestHeader" in y &&
          e.forEach(k, function (I, q) {
            typeof b > "u" && q.toLowerCase() === "content-type"
              ? delete k[q]
              : y.setRequestHeader(q, I);
          }),
          e.isUndefined(d.withCredentials) ||
            (y.withCredentials = !!d.withCredentials),
          g && g !== "json" && (y.responseType = d.responseType),
          typeof d.onDownloadProgress == "function" &&
            y.addEventListener("progress", d.onDownloadProgress),
          typeof d.onUploadProgress == "function" &&
            y.upload &&
            y.upload.addEventListener("progress", d.onUploadProgress),
          (d.cancelToken || d.signal) &&
            ((p = function (_) {
              y &&
                (m(!_ || (_ && _.type) ? new c("canceled") : _),
                y.abort(),
                (y = null));
            }),
            d.cancelToken && d.cancelToken.subscribe(p),
            d.signal &&
              (d.signal.aborted ? p() : d.signal.addEventListener("abort", p))),
          b || (b = null),
          y.send(b);
      });
    }),
    Qc
  );
}
var He = ht,
  Hg = jI,
  WI = jw,
  YI = zw,
  GI = { "Content-Type": "application/x-www-form-urlencoded" };
function Ug(e, t) {
  !He.isUndefined(e) &&
    He.isUndefined(e["Content-Type"]) &&
    (e["Content-Type"] = t);
}
function XI() {
  var e;
  return (
    (typeof XMLHttpRequest < "u" ||
      (typeof process < "u" &&
        Object.prototype.toString.call(process) === "[object process]")) &&
      (e = Ng()),
    e
  );
}
function KI(e, t, n) {
  if (He.isString(e))
    try {
      return (t || JSON.parse)(e), He.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (n || JSON.stringify)(e);
}
var Hl = {
  transitional: YI,
  adapter: XI(),
  transformRequest: [
    function (t, n) {
      return (
        Hg(n, "Accept"),
        Hg(n, "Content-Type"),
        He.isFormData(t) ||
        He.isArrayBuffer(t) ||
        He.isBuffer(t) ||
        He.isStream(t) ||
        He.isFile(t) ||
        He.isBlob(t)
          ? t
          : He.isArrayBufferView(t)
          ? t.buffer
          : He.isURLSearchParams(t)
          ? (Ug(n, "application/x-www-form-urlencoded;charset=utf-8"),
            t.toString())
          : He.isObject(t) || (n && n["Content-Type"] === "application/json")
          ? (Ug(n, "application/json"), KI(t))
          : t
      );
    },
  ],
  transformResponse: [
    function (t) {
      var n = this.transitional || Hl.transitional,
        i = n && n.silentJSONParsing,
        r = n && n.forcedJSONParsing,
        o = !i && this.responseType === "json";
      if (o || (r && He.isString(t) && t.length))
        try {
          return JSON.parse(t);
        } catch (s) {
          if (o)
            throw s.name === "SyntaxError" ? WI(s, this, "E_JSON_PARSE") : s;
        }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
He.forEach(["delete", "get", "head"], function (t) {
  Hl.headers[t] = {};
});
He.forEach(["post", "put", "patch"], function (t) {
  Hl.headers[t] = He.merge(GI);
});
var Ch = Hl,
  QI = ht,
  ZI = Ch,
  JI = function (t, n, i) {
    var r = this || ZI;
    return (
      QI.forEach(i, function (s) {
        t = s.call(r, t, n);
      }),
      t
    );
  },
  Zc,
  Vg;
function Nw() {
  return (
    Vg ||
      ((Vg = 1),
      (Zc = function (t) {
        return !!(t && t.__CANCEL__);
      })),
    Zc
  );
}
var qg = ht,
  Jc = JI,
  eL = Nw(),
  tL = Ch,
  nL = Nl();
function eu(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new nL("canceled");
}
var iL = function (t) {
    eu(t),
      (t.headers = t.headers || {}),
      (t.data = Jc.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = qg.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      qg.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (r) {
          delete t.headers[r];
        }
      );
    var n = t.adapter || tL.adapter;
    return n(t).then(
      function (r) {
        return (
          eu(t),
          (r.data = Jc.call(t, r.data, r.headers, t.transformResponse)),
          r
        );
      },
      function (r) {
        return (
          eL(r) ||
            (eu(t),
            r &&
              r.response &&
              (r.response.data = Jc.call(
                t,
                r.response.data,
                r.response.headers,
                t.transformResponse
              ))),
          Promise.reject(r)
        );
      }
    );
  },
  mt = ht,
  Hw = function (t, n) {
    n = n || {};
    var i = {};
    function r(u, d) {
      return mt.isPlainObject(u) && mt.isPlainObject(d)
        ? mt.merge(u, d)
        : mt.isPlainObject(d)
        ? mt.merge({}, d)
        : mt.isArray(d)
        ? d.slice()
        : d;
    }
    function o(u) {
      if (mt.isUndefined(n[u])) {
        if (!mt.isUndefined(t[u])) return r(void 0, t[u]);
      } else return r(t[u], n[u]);
    }
    function s(u) {
      if (!mt.isUndefined(n[u])) return r(void 0, n[u]);
    }
    function a(u) {
      if (mt.isUndefined(n[u])) {
        if (!mt.isUndefined(t[u])) return r(void 0, t[u]);
      } else return r(void 0, n[u]);
    }
    function l(u) {
      if (u in n) return r(t[u], n[u]);
      if (u in t) return r(void 0, t[u]);
    }
    var c = {
      url: s,
      method: s,
      data: s,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: l,
    };
    return (
      mt.forEach(Object.keys(t).concat(Object.keys(n)), function (d) {
        var f = c[d] || o,
          h = f(d);
        (mt.isUndefined(h) && f !== l) || (i[d] = h);
      }),
      i
    );
  },
  tu,
  Wg;
function Uw() {
  return Wg || ((Wg = 1), (tu = { version: "0.26.1" })), tu;
}
var rL = Uw().version,
  $h = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, t) {
    $h[e] = function (i) {
      return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
var Yg = {};
$h.transitional = function (t, n, i) {
  function r(o, s) {
    return (
      "[Axios v" +
      rL +
      "] Transitional option '" +
      o +
      "'" +
      s +
      (i ? ". " + i : "")
    );
  }
  return function (o, s, a) {
    if (t === !1)
      throw new Error(r(s, " has been removed" + (n ? " in " + n : "")));
    return (
      n &&
        !Yg[s] &&
        ((Yg[s] = !0),
        console.warn(
          r(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, s, a) : !0
    );
  };
};
function oL(e, t, n) {
  if (typeof e != "object") throw new TypeError("options must be an object");
  for (var i = Object.keys(e), r = i.length; r-- > 0; ) {
    var o = i[r],
      s = t[o];
    if (s) {
      var a = e[o],
        l = a === void 0 || s(a, o, e);
      if (l !== !0) throw new TypeError("option " + o + " must be " + l);
      continue;
    }
    if (n !== !0) throw Error("Unknown option " + o);
  }
}
var sL = { assertOptions: oL, validators: $h },
  Vw = ht,
  aL = Dw,
  Gg = BI,
  Xg = iL,
  Ul = Hw,
  qw = sL,
  Bi = qw.validators;
function Zo(e) {
  (this.defaults = e),
    (this.interceptors = { request: new Gg(), response: new Gg() });
}
Zo.prototype.request = function (t, n) {
  typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
    (n = Ul(this.defaults, n)),
    n.method
      ? (n.method = n.method.toLowerCase())
      : this.defaults.method
      ? (n.method = this.defaults.method.toLowerCase())
      : (n.method = "get");
  var i = n.transitional;
  i !== void 0 &&
    qw.assertOptions(
      i,
      {
        silentJSONParsing: Bi.transitional(Bi.boolean),
        forcedJSONParsing: Bi.transitional(Bi.boolean),
        clarifyTimeoutError: Bi.transitional(Bi.boolean),
      },
      !1
    );
  var r = [],
    o = !0;
  this.interceptors.request.forEach(function (h) {
    (typeof h.runWhen == "function" && h.runWhen(n) === !1) ||
      ((o = o && h.synchronous), r.unshift(h.fulfilled, h.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function (h) {
    s.push(h.fulfilled, h.rejected);
  });
  var a;
  if (!o) {
    var l = [Xg, void 0];
    for (
      Array.prototype.unshift.apply(l, r),
        l = l.concat(s),
        a = Promise.resolve(n);
      l.length;

    )
      a = a.then(l.shift(), l.shift());
    return a;
  }
  for (var c = n; r.length; ) {
    var u = r.shift(),
      d = r.shift();
    try {
      c = u(c);
    } catch (f) {
      d(f);
      break;
    }
  }
  try {
    a = Xg(c);
  } catch (f) {
    return Promise.reject(f);
  }
  for (; s.length; ) a = a.then(s.shift(), s.shift());
  return a;
};
Zo.prototype.getUri = function (t) {
  return (
    (t = Ul(this.defaults, t)),
    aL(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
  );
};
Vw.forEach(["delete", "get", "head", "options"], function (t) {
  Zo.prototype[t] = function (n, i) {
    return this.request(
      Ul(i || {}, { method: t, url: n, data: (i || {}).data })
    );
  };
});
Vw.forEach(["post", "put", "patch"], function (t) {
  Zo.prototype[t] = function (n, i, r) {
    return this.request(Ul(r || {}, { method: t, url: n, data: i }));
  };
});
var lL = Zo,
  nu,
  Kg;
function cL() {
  if (Kg) return nu;
  Kg = 1;
  var e = Nl();
  function t(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    var i;
    this.promise = new Promise(function (s) {
      i = s;
    });
    var r = this;
    this.promise.then(function (o) {
      if (r._listeners) {
        var s,
          a = r._listeners.length;
        for (s = 0; s < a; s++) r._listeners[s](o);
        r._listeners = null;
      }
    }),
      (this.promise.then = function (o) {
        var s,
          a = new Promise(function (l) {
            r.subscribe(l), (s = l);
          }).then(o);
        return (
          (a.cancel = function () {
            r.unsubscribe(s);
          }),
          a
        );
      }),
      n(function (s) {
        r.reason || ((r.reason = new e(s)), i(r.reason));
      });
  }
  return (
    (t.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
    (t.prototype.subscribe = function (i) {
      if (this.reason) {
        i(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(i) : (this._listeners = [i]);
    }),
    (t.prototype.unsubscribe = function (i) {
      if (this._listeners) {
        var r = this._listeners.indexOf(i);
        r !== -1 && this._listeners.splice(r, 1);
      }
    }),
    (t.source = function () {
      var i,
        r = new t(function (s) {
          i = s;
        });
      return { token: r, cancel: i };
    }),
    (nu = t),
    nu
  );
}
var iu, Qg;
function uL() {
  return (
    Qg ||
      ((Qg = 1),
      (iu = function (t) {
        return function (i) {
          return t.apply(null, i);
        };
      })),
    iu
  );
}
var ru, Zg;
function dL() {
  if (Zg) return ru;
  Zg = 1;
  var e = ht;
  return (
    (ru = function (n) {
      return e.isObject(n) && n.isAxiosError === !0;
    }),
    ru
  );
}
var Jg = ht,
  fL = Lw,
  Ys = lL,
  hL = Hw,
  pL = Ch;
function Ww(e) {
  var t = new Ys(e),
    n = fL(Ys.prototype.request, t);
  return (
    Jg.extend(n, Ys.prototype, t),
    Jg.extend(n, t),
    (n.create = function (r) {
      return Ww(hL(e, r));
    }),
    n
  );
}
var cn = Ww(pL);
cn.Axios = Ys;
cn.Cancel = Nl();
cn.CancelToken = cL();
cn.isCancel = Nw();
cn.VERSION = Uw().version;
cn.all = function (t) {
  return Promise.all(t);
};
cn.spread = uL();
cn.isAxiosError = dL();
kh.exports = cn;
kh.exports.default = cn;
var mL = kh.exports,
  Yw = mL,
  we = {},
  Ph = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.RequiredError = e.BaseAPI = e.COLLECTION_FORMATS = e.BASE_PATH = void 0);
  const t = Yw;
  (e.BASE_PATH = "https://api.openai.com/v1".replace(/\/+$/, "")),
    (e.COLLECTION_FORMATS = { csv: ",", ssv: " ", tsv: "	", pipes: "|" });
  class n {
    constructor(o, s = e.BASE_PATH, a = t.default) {
      (this.basePath = s),
        (this.axios = a),
        o &&
          ((this.configuration = o),
          (this.basePath = o.basePath || this.basePath));
    }
  }
  e.BaseAPI = n;
  class i extends Error {
    constructor(o, s) {
      super(s), (this.field = o), (this.name = "RequiredError");
    }
  }
  e.RequiredError = i;
})(Ph);
var Th =
  (In && In.__awaiter) ||
  function (e, t, n, i) {
    function r(o) {
      return o instanceof n
        ? o
        : new n(function (s) {
            s(o);
          });
    }
    return new (n || (n = Promise))(function (o, s) {
      function a(u) {
        try {
          c(i.next(u));
        } catch (d) {
          s(d);
        }
      }
      function l(u) {
        try {
          c(i.throw(u));
        } catch (d) {
          s(d);
        }
      }
      function c(u) {
        u.done ? o(u.value) : r(u.value).then(a, l);
      }
      c((i = i.apply(e, t || [])).next());
    });
  };
Object.defineProperty(we, "__esModule", { value: !0 });
we.createRequestFunction =
  we.toPathString =
  we.serializeDataIfNeeded =
  we.setSearchParams =
  we.setOAuthToObject =
  we.setBearerAuthToObject =
  we.setBasicAuthToObject =
  we.setApiKeyToObject =
  we.assertParamExists =
  we.DUMMY_BASE_URL =
    void 0;
const gL = Ph;
we.DUMMY_BASE_URL = "https://example.com";
we.assertParamExists = function (e, t, n) {
  if (n == null)
    throw new gL.RequiredError(
      t,
      `Required parameter ${t} was null or undefined when calling ${e}.`
    );
};
we.setApiKeyToObject = function (e, t, n) {
  return Th(this, void 0, void 0, function* () {
    if (n && n.apiKey) {
      const i =
        typeof n.apiKey == "function" ? yield n.apiKey(t) : yield n.apiKey;
      e[t] = i;
    }
  });
};
we.setBasicAuthToObject = function (e, t) {
  t &&
    (t.username || t.password) &&
    (e.auth = { username: t.username, password: t.password });
};
we.setBearerAuthToObject = function (e, t) {
  return Th(this, void 0, void 0, function* () {
    if (t && t.accessToken) {
      const n =
        typeof t.accessToken == "function"
          ? yield t.accessToken()
          : yield t.accessToken;
      e.Authorization = "Bearer " + n;
    }
  });
};
we.setOAuthToObject = function (e, t, n, i) {
  return Th(this, void 0, void 0, function* () {
    if (i && i.accessToken) {
      const r =
        typeof i.accessToken == "function"
          ? yield i.accessToken(t, n)
          : yield i.accessToken;
      e.Authorization = "Bearer " + r;
    }
  });
};
function Ld(e, t, n = "") {
  t != null &&
    (typeof t == "object"
      ? Array.isArray(t)
        ? t.forEach((i) => Ld(e, i, n))
        : Object.keys(t).forEach((i) =>
            Ld(e, t[i], `${n}${n !== "" ? "." : ""}${i}`)
          )
      : e.has(n)
      ? e.append(n, t)
      : e.set(n, t));
}
we.setSearchParams = function (e, ...t) {
  const n = new URLSearchParams(e.search);
  Ld(n, t), (e.search = n.toString());
};
we.serializeDataIfNeeded = function (e, t, n) {
  const i = typeof e != "string";
  return (i && n && n.isJsonMime ? n.isJsonMime(t.headers["Content-Type"]) : i)
    ? JSON.stringify(e !== void 0 ? e : {})
    : e || "";
};
we.toPathString = function (e) {
  return e.pathname + e.search + e.hash;
};
we.createRequestFunction = function (e, t, n, i) {
  return (r = t, o = n) => {
    const s = Object.assign(Object.assign({}, e.options), {
      url: ((i == null ? void 0 : i.basePath) || o) + e.url,
    });
    return r.request(s);
  };
};
(function (e) {
  var t =
    (In && In.__awaiter) ||
    function (s, a, l, c) {
      function u(d) {
        return d instanceof l
          ? d
          : new l(function (f) {
              f(d);
            });
      }
      return new (l || (l = Promise))(function (d, f) {
        function h(k) {
          try {
            b(c.next(k));
          } catch (g) {
            f(g);
          }
        }
        function m(k) {
          try {
            b(c.throw(k));
          } catch (g) {
            f(g);
          }
        }
        function b(k) {
          k.done ? d(k.value) : u(k.value).then(h, m);
        }
        b((c = c.apply(s, a || [])).next());
      });
    };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.OpenAIApi =
      e.OpenAIApiFactory =
      e.OpenAIApiFp =
      e.OpenAIApiAxiosParamCreator =
      e.CreateImageRequestResponseFormatEnum =
      e.CreateImageRequestSizeEnum =
      e.ChatCompletionResponseMessageRoleEnum =
      e.ChatCompletionRequestMessageRoleEnum =
        void 0);
  const n = Yw,
    i = we,
    r = Ph;
  (e.ChatCompletionRequestMessageRoleEnum = {
    System: "system",
    User: "user",
    Assistant: "assistant",
    Function: "function",
  }),
    (e.ChatCompletionResponseMessageRoleEnum = {
      System: "system",
      User: "user",
      Assistant: "assistant",
      Function: "function",
    }),
    (e.CreateImageRequestSizeEnum = {
      _256x256: "256x256",
      _512x512: "512x512",
      _1024x1024: "1024x1024",
    }),
    (e.CreateImageRequestResponseFormatEnum = {
      Url: "url",
      B64Json: "b64_json",
    }),
    (e.OpenAIApiAxiosParamCreator = function (s) {
      return {
        cancelFineTune: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("cancelFineTune", "fineTuneId", a);
            const c = "/fine-tunes/{fine_tune_id}/cancel".replace(
                "{fine_tune_id}",
                encodeURIComponent(String(a))
              ),
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, d), l),
              h = {},
              m = {};
            i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              { url: i.toPathString(u), options: f }
            );
          }),
        createAnswer: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("createAnswer", "createAnswerRequest", a);
            const c = "/answers",
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, d), l),
              h = {},
              m = {};
            (h["Content-Type"] = "application/json"), i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              (f.data = i.serializeDataIfNeeded(a, f, s)),
              { url: i.toPathString(u), options: f }
            );
          }),
        createChatCompletion: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists(
              "createChatCompletion",
              "createChatCompletionRequest",
              a
            );
            const c = "/chat/completions",
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, d), l),
              h = {},
              m = {};
            (h["Content-Type"] = "application/json"), i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              (f.data = i.serializeDataIfNeeded(a, f, s)),
              { url: i.toPathString(u), options: f }
            );
          }),
        createClassification: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists(
              "createClassification",
              "createClassificationRequest",
              a
            );
            const c = "/classifications",
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, d), l),
              h = {},
              m = {};
            (h["Content-Type"] = "application/json"), i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              (f.data = i.serializeDataIfNeeded(a, f, s)),
              { url: i.toPathString(u), options: f }
            );
          }),
        createCompletion: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists(
              "createCompletion",
              "createCompletionRequest",
              a
            );
            const c = "/completions",
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, d), l),
              h = {},
              m = {};
            (h["Content-Type"] = "application/json"), i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              (f.data = i.serializeDataIfNeeded(a, f, s)),
              { url: i.toPathString(u), options: f }
            );
          }),
        createEdit: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("createEdit", "createEditRequest", a);
            const c = "/edits",
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, d), l),
              h = {},
              m = {};
            (h["Content-Type"] = "application/json"), i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              (f.data = i.serializeDataIfNeeded(a, f, s)),
              { url: i.toPathString(u), options: f }
            );
          }),
        createEmbedding: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("createEmbedding", "createEmbeddingRequest", a);
            const c = "/embeddings",
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, d), l),
              h = {},
              m = {};
            (h["Content-Type"] = "application/json"), i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              (f.data = i.serializeDataIfNeeded(a, f, s)),
              { url: i.toPathString(u), options: f }
            );
          }),
        createFile: (a, l, c = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("createFile", "file", a),
              i.assertParamExists("createFile", "purpose", l);
            const u = "/files",
              d = new URL(u, i.DUMMY_BASE_URL);
            let f;
            s && (f = s.baseOptions);
            const h = Object.assign(Object.assign({ method: "POST" }, f), c),
              m = {},
              b = {},
              k = new ((s && s.formDataCtor) || FormData)();
            a !== void 0 && k.append("file", a),
              l !== void 0 && k.append("purpose", l),
              (m["Content-Type"] = "multipart/form-data"),
              i.setSearchParams(d, b);
            let g = f && f.headers ? f.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, m), k.getHeaders()),
                  g
                ),
                c.headers
              )),
              (h.data = k),
              { url: i.toPathString(d), options: h }
            );
          }),
        createFineTune: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("createFineTune", "createFineTuneRequest", a);
            const c = "/fine-tunes",
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, d), l),
              h = {},
              m = {};
            (h["Content-Type"] = "application/json"), i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              (f.data = i.serializeDataIfNeeded(a, f, s)),
              { url: i.toPathString(u), options: f }
            );
          }),
        createImage: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("createImage", "createImageRequest", a);
            const c = "/images/generations",
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, d), l),
              h = {},
              m = {};
            (h["Content-Type"] = "application/json"), i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              (f.data = i.serializeDataIfNeeded(a, f, s)),
              { url: i.toPathString(u), options: f }
            );
          }),
        createImageEdit: (a, l, c, u, d, f, h, m = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("createImageEdit", "image", a),
              i.assertParamExists("createImageEdit", "prompt", l);
            const b = "/images/edits",
              k = new URL(b, i.DUMMY_BASE_URL);
            let g;
            s && (g = s.baseOptions);
            const p = Object.assign(Object.assign({ method: "POST" }, g), m),
              v = {},
              y = {},
              E = new ((s && s.formDataCtor) || FormData)();
            a !== void 0 && E.append("image", a),
              c !== void 0 && E.append("mask", c),
              l !== void 0 && E.append("prompt", l),
              u !== void 0 && E.append("n", u),
              d !== void 0 && E.append("size", d),
              f !== void 0 && E.append("response_format", f),
              h !== void 0 && E.append("user", h),
              (v["Content-Type"] = "multipart/form-data"),
              i.setSearchParams(k, y);
            let T = g && g.headers ? g.headers : {};
            return (
              (p.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, v), E.getHeaders()),
                  T
                ),
                m.headers
              )),
              (p.data = E),
              { url: i.toPathString(k), options: p }
            );
          }),
        createImageVariation: (a, l, c, u, d, f = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("createImageVariation", "image", a);
            const h = "/images/variations",
              m = new URL(h, i.DUMMY_BASE_URL);
            let b;
            s && (b = s.baseOptions);
            const k = Object.assign(Object.assign({ method: "POST" }, b), f),
              g = {},
              p = {},
              v = new ((s && s.formDataCtor) || FormData)();
            a !== void 0 && v.append("image", a),
              l !== void 0 && v.append("n", l),
              c !== void 0 && v.append("size", c),
              u !== void 0 && v.append("response_format", u),
              d !== void 0 && v.append("user", d),
              (g["Content-Type"] = "multipart/form-data"),
              i.setSearchParams(m, p);
            let y = b && b.headers ? b.headers : {};
            return (
              (k.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, g), v.getHeaders()),
                  y
                ),
                f.headers
              )),
              (k.data = v),
              { url: i.toPathString(m), options: k }
            );
          }),
        createModeration: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists(
              "createModeration",
              "createModerationRequest",
              a
            );
            const c = "/moderations",
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, d), l),
              h = {},
              m = {};
            (h["Content-Type"] = "application/json"), i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              (f.data = i.serializeDataIfNeeded(a, f, s)),
              { url: i.toPathString(u), options: f }
            );
          }),
        createSearch: (a, l, c = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("createSearch", "engineId", a),
              i.assertParamExists("createSearch", "createSearchRequest", l);
            const u = "/engines/{engine_id}/search".replace(
                "{engine_id}",
                encodeURIComponent(String(a))
              ),
              d = new URL(u, i.DUMMY_BASE_URL);
            let f;
            s && (f = s.baseOptions);
            const h = Object.assign(Object.assign({ method: "POST" }, f), c),
              m = {},
              b = {};
            (m["Content-Type"] = "application/json"), i.setSearchParams(d, b);
            let k = f && f.headers ? f.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, m), k),
                c.headers
              )),
              (h.data = i.serializeDataIfNeeded(l, h, s)),
              { url: i.toPathString(d), options: h }
            );
          }),
        createTranscription: (a, l, c, u, d, f, h = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("createTranscription", "file", a),
              i.assertParamExists("createTranscription", "model", l);
            const m = "/audio/transcriptions",
              b = new URL(m, i.DUMMY_BASE_URL);
            let k;
            s && (k = s.baseOptions);
            const g = Object.assign(Object.assign({ method: "POST" }, k), h),
              p = {},
              v = {},
              y = new ((s && s.formDataCtor) || FormData)();
            a !== void 0 && y.append("file", a),
              l !== void 0 && y.append("model", l),
              c !== void 0 && y.append("prompt", c),
              u !== void 0 && y.append("response_format", u),
              d !== void 0 && y.append("temperature", d),
              f !== void 0 && y.append("language", f),
              (p["Content-Type"] = "multipart/form-data"),
              i.setSearchParams(b, v);
            let E = k && k.headers ? k.headers : {};
            return (
              (g.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, p), y.getHeaders()),
                  E
                ),
                h.headers
              )),
              (g.data = y),
              { url: i.toPathString(b), options: g }
            );
          }),
        createTranslation: (a, l, c, u, d, f = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("createTranslation", "file", a),
              i.assertParamExists("createTranslation", "model", l);
            const h = "/audio/translations",
              m = new URL(h, i.DUMMY_BASE_URL);
            let b;
            s && (b = s.baseOptions);
            const k = Object.assign(Object.assign({ method: "POST" }, b), f),
              g = {},
              p = {},
              v = new ((s && s.formDataCtor) || FormData)();
            a !== void 0 && v.append("file", a),
              l !== void 0 && v.append("model", l),
              c !== void 0 && v.append("prompt", c),
              u !== void 0 && v.append("response_format", u),
              d !== void 0 && v.append("temperature", d),
              (g["Content-Type"] = "multipart/form-data"),
              i.setSearchParams(m, p);
            let y = b && b.headers ? b.headers : {};
            return (
              (k.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, g), v.getHeaders()),
                  y
                ),
                f.headers
              )),
              (k.data = v),
              { url: i.toPathString(m), options: k }
            );
          }),
        deleteFile: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("deleteFile", "fileId", a);
            const c = "/files/{file_id}".replace(
                "{file_id}",
                encodeURIComponent(String(a))
              ),
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "DELETE" }, d), l),
              h = {},
              m = {};
            i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              { url: i.toPathString(u), options: f }
            );
          }),
        deleteModel: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("deleteModel", "model", a);
            const c = "/models/{model}".replace(
                "{model}",
                encodeURIComponent(String(a))
              ),
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "DELETE" }, d), l),
              h = {},
              m = {};
            i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              { url: i.toPathString(u), options: f }
            );
          }),
        downloadFile: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("downloadFile", "fileId", a);
            const c = "/files/{file_id}/content".replace(
                "{file_id}",
                encodeURIComponent(String(a))
              ),
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "GET" }, d), l),
              h = {},
              m = {};
            i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              { url: i.toPathString(u), options: f }
            );
          }),
        listEngines: (a = {}) =>
          t(this, void 0, void 0, function* () {
            const l = "/engines",
              c = new URL(l, i.DUMMY_BASE_URL);
            let u;
            s && (u = s.baseOptions);
            const d = Object.assign(Object.assign({ method: "GET" }, u), a),
              f = {},
              h = {};
            i.setSearchParams(c, h);
            let m = u && u.headers ? u.headers : {};
            return (
              (d.headers = Object.assign(
                Object.assign(Object.assign({}, f), m),
                a.headers
              )),
              { url: i.toPathString(c), options: d }
            );
          }),
        listFiles: (a = {}) =>
          t(this, void 0, void 0, function* () {
            const l = "/files",
              c = new URL(l, i.DUMMY_BASE_URL);
            let u;
            s && (u = s.baseOptions);
            const d = Object.assign(Object.assign({ method: "GET" }, u), a),
              f = {},
              h = {};
            i.setSearchParams(c, h);
            let m = u && u.headers ? u.headers : {};
            return (
              (d.headers = Object.assign(
                Object.assign(Object.assign({}, f), m),
                a.headers
              )),
              { url: i.toPathString(c), options: d }
            );
          }),
        listFineTuneEvents: (a, l, c = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("listFineTuneEvents", "fineTuneId", a);
            const u = "/fine-tunes/{fine_tune_id}/events".replace(
                "{fine_tune_id}",
                encodeURIComponent(String(a))
              ),
              d = new URL(u, i.DUMMY_BASE_URL);
            let f;
            s && (f = s.baseOptions);
            const h = Object.assign(Object.assign({ method: "GET" }, f), c),
              m = {},
              b = {};
            l !== void 0 && (b.stream = l), i.setSearchParams(d, b);
            let k = f && f.headers ? f.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, m), k),
                c.headers
              )),
              { url: i.toPathString(d), options: h }
            );
          }),
        listFineTunes: (a = {}) =>
          t(this, void 0, void 0, function* () {
            const l = "/fine-tunes",
              c = new URL(l, i.DUMMY_BASE_URL);
            let u;
            s && (u = s.baseOptions);
            const d = Object.assign(Object.assign({ method: "GET" }, u), a),
              f = {},
              h = {};
            i.setSearchParams(c, h);
            let m = u && u.headers ? u.headers : {};
            return (
              (d.headers = Object.assign(
                Object.assign(Object.assign({}, f), m),
                a.headers
              )),
              { url: i.toPathString(c), options: d }
            );
          }),
        listModels: (a = {}) =>
          t(this, void 0, void 0, function* () {
            const l = "/models",
              c = new URL(l, i.DUMMY_BASE_URL);
            let u;
            s && (u = s.baseOptions);
            const d = Object.assign(Object.assign({ method: "GET" }, u), a),
              f = {},
              h = {};
            i.setSearchParams(c, h);
            let m = u && u.headers ? u.headers : {};
            return (
              (d.headers = Object.assign(
                Object.assign(Object.assign({}, f), m),
                a.headers
              )),
              { url: i.toPathString(c), options: d }
            );
          }),
        retrieveEngine: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("retrieveEngine", "engineId", a);
            const c = "/engines/{engine_id}".replace(
                "{engine_id}",
                encodeURIComponent(String(a))
              ),
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "GET" }, d), l),
              h = {},
              m = {};
            i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              { url: i.toPathString(u), options: f }
            );
          }),
        retrieveFile: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("retrieveFile", "fileId", a);
            const c = "/files/{file_id}".replace(
                "{file_id}",
                encodeURIComponent(String(a))
              ),
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "GET" }, d), l),
              h = {},
              m = {};
            i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              { url: i.toPathString(u), options: f }
            );
          }),
        retrieveFineTune: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("retrieveFineTune", "fineTuneId", a);
            const c = "/fine-tunes/{fine_tune_id}".replace(
                "{fine_tune_id}",
                encodeURIComponent(String(a))
              ),
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "GET" }, d), l),
              h = {},
              m = {};
            i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              { url: i.toPathString(u), options: f }
            );
          }),
        retrieveModel: (a, l = {}) =>
          t(this, void 0, void 0, function* () {
            i.assertParamExists("retrieveModel", "model", a);
            const c = "/models/{model}".replace(
                "{model}",
                encodeURIComponent(String(a))
              ),
              u = new URL(c, i.DUMMY_BASE_URL);
            let d;
            s && (d = s.baseOptions);
            const f = Object.assign(Object.assign({ method: "GET" }, d), l),
              h = {},
              m = {};
            i.setSearchParams(u, m);
            let b = d && d.headers ? d.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, h), b),
                l.headers
              )),
              { url: i.toPathString(u), options: f }
            );
          }),
      };
    }),
    (e.OpenAIApiFp = function (s) {
      const a = e.OpenAIApiAxiosParamCreator(s);
      return {
        cancelFineTune(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.cancelFineTune(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        createAnswer(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.createAnswer(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        createChatCompletion(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.createChatCompletion(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        createClassification(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.createClassification(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        createCompletion(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.createCompletion(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        createEdit(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.createEdit(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        createEmbedding(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.createEmbedding(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        createFile(l, c, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.createFile(l, c, u);
            return i.createRequestFunction(d, n.default, r.BASE_PATH, s);
          });
        },
        createFineTune(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.createFineTune(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        createImage(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.createImage(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        createImageEdit(l, c, u, d, f, h, m, b) {
          return t(this, void 0, void 0, function* () {
            const k = yield a.createImageEdit(l, c, u, d, f, h, m, b);
            return i.createRequestFunction(k, n.default, r.BASE_PATH, s);
          });
        },
        createImageVariation(l, c, u, d, f, h) {
          return t(this, void 0, void 0, function* () {
            const m = yield a.createImageVariation(l, c, u, d, f, h);
            return i.createRequestFunction(m, n.default, r.BASE_PATH, s);
          });
        },
        createModeration(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.createModeration(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        createSearch(l, c, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.createSearch(l, c, u);
            return i.createRequestFunction(d, n.default, r.BASE_PATH, s);
          });
        },
        createTranscription(l, c, u, d, f, h, m) {
          return t(this, void 0, void 0, function* () {
            const b = yield a.createTranscription(l, c, u, d, f, h, m);
            return i.createRequestFunction(b, n.default, r.BASE_PATH, s);
          });
        },
        createTranslation(l, c, u, d, f, h) {
          return t(this, void 0, void 0, function* () {
            const m = yield a.createTranslation(l, c, u, d, f, h);
            return i.createRequestFunction(m, n.default, r.BASE_PATH, s);
          });
        },
        deleteFile(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.deleteFile(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        deleteModel(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.deleteModel(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        downloadFile(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.downloadFile(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        listEngines(l) {
          return t(this, void 0, void 0, function* () {
            const c = yield a.listEngines(l);
            return i.createRequestFunction(c, n.default, r.BASE_PATH, s);
          });
        },
        listFiles(l) {
          return t(this, void 0, void 0, function* () {
            const c = yield a.listFiles(l);
            return i.createRequestFunction(c, n.default, r.BASE_PATH, s);
          });
        },
        listFineTuneEvents(l, c, u) {
          return t(this, void 0, void 0, function* () {
            const d = yield a.listFineTuneEvents(l, c, u);
            return i.createRequestFunction(d, n.default, r.BASE_PATH, s);
          });
        },
        listFineTunes(l) {
          return t(this, void 0, void 0, function* () {
            const c = yield a.listFineTunes(l);
            return i.createRequestFunction(c, n.default, r.BASE_PATH, s);
          });
        },
        listModels(l) {
          return t(this, void 0, void 0, function* () {
            const c = yield a.listModels(l);
            return i.createRequestFunction(c, n.default, r.BASE_PATH, s);
          });
        },
        retrieveEngine(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.retrieveEngine(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        retrieveFile(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.retrieveFile(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        retrieveFineTune(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.retrieveFineTune(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
        retrieveModel(l, c) {
          return t(this, void 0, void 0, function* () {
            const u = yield a.retrieveModel(l, c);
            return i.createRequestFunction(u, n.default, r.BASE_PATH, s);
          });
        },
      };
    }),
    (e.OpenAIApiFactory = function (s, a, l) {
      const c = e.OpenAIApiFp(s);
      return {
        cancelFineTune(u, d) {
          return c.cancelFineTune(u, d).then((f) => f(l, a));
        },
        createAnswer(u, d) {
          return c.createAnswer(u, d).then((f) => f(l, a));
        },
        createChatCompletion(u, d) {
          return c.createChatCompletion(u, d).then((f) => f(l, a));
        },
        createClassification(u, d) {
          return c.createClassification(u, d).then((f) => f(l, a));
        },
        createCompletion(u, d) {
          return c.createCompletion(u, d).then((f) => f(l, a));
        },
        createEdit(u, d) {
          return c.createEdit(u, d).then((f) => f(l, a));
        },
        createEmbedding(u, d) {
          return c.createEmbedding(u, d).then((f) => f(l, a));
        },
        createFile(u, d, f) {
          return c.createFile(u, d, f).then((h) => h(l, a));
        },
        createFineTune(u, d) {
          return c.createFineTune(u, d).then((f) => f(l, a));
        },
        createImage(u, d) {
          return c.createImage(u, d).then((f) => f(l, a));
        },
        createImageEdit(u, d, f, h, m, b, k, g) {
          return c.createImageEdit(u, d, f, h, m, b, k, g).then((p) => p(l, a));
        },
        createImageVariation(u, d, f, h, m, b) {
          return c.createImageVariation(u, d, f, h, m, b).then((k) => k(l, a));
        },
        createModeration(u, d) {
          return c.createModeration(u, d).then((f) => f(l, a));
        },
        createSearch(u, d, f) {
          return c.createSearch(u, d, f).then((h) => h(l, a));
        },
        createTranscription(u, d, f, h, m, b, k) {
          return c
            .createTranscription(u, d, f, h, m, b, k)
            .then((g) => g(l, a));
        },
        createTranslation(u, d, f, h, m, b) {
          return c.createTranslation(u, d, f, h, m, b).then((k) => k(l, a));
        },
        deleteFile(u, d) {
          return c.deleteFile(u, d).then((f) => f(l, a));
        },
        deleteModel(u, d) {
          return c.deleteModel(u, d).then((f) => f(l, a));
        },
        downloadFile(u, d) {
          return c.downloadFile(u, d).then((f) => f(l, a));
        },
        listEngines(u) {
          return c.listEngines(u).then((d) => d(l, a));
        },
        listFiles(u) {
          return c.listFiles(u).then((d) => d(l, a));
        },
        listFineTuneEvents(u, d, f) {
          return c.listFineTuneEvents(u, d, f).then((h) => h(l, a));
        },
        listFineTunes(u) {
          return c.listFineTunes(u).then((d) => d(l, a));
        },
        listModels(u) {
          return c.listModels(u).then((d) => d(l, a));
        },
        retrieveEngine(u, d) {
          return c.retrieveEngine(u, d).then((f) => f(l, a));
        },
        retrieveFile(u, d) {
          return c.retrieveFile(u, d).then((f) => f(l, a));
        },
        retrieveFineTune(u, d) {
          return c.retrieveFineTune(u, d).then((f) => f(l, a));
        },
        retrieveModel(u, d) {
          return c.retrieveModel(u, d).then((f) => f(l, a));
        },
      };
    });
  class o extends r.BaseAPI {
    cancelFineTune(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .cancelFineTune(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    createAnswer(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createAnswer(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    createChatCompletion(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createChatCompletion(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    createClassification(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createClassification(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    createCompletion(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createCompletion(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    createEdit(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createEdit(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    createEmbedding(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createEmbedding(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    createFile(a, l, c) {
      return e
        .OpenAIApiFp(this.configuration)
        .createFile(a, l, c)
        .then((u) => u(this.axios, this.basePath));
    }
    createFineTune(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createFineTune(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    createImage(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createImage(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    createImageEdit(a, l, c, u, d, f, h, m) {
      return e
        .OpenAIApiFp(this.configuration)
        .createImageEdit(a, l, c, u, d, f, h, m)
        .then((b) => b(this.axios, this.basePath));
    }
    createImageVariation(a, l, c, u, d, f) {
      return e
        .OpenAIApiFp(this.configuration)
        .createImageVariation(a, l, c, u, d, f)
        .then((h) => h(this.axios, this.basePath));
    }
    createModeration(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .createModeration(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    createSearch(a, l, c) {
      return e
        .OpenAIApiFp(this.configuration)
        .createSearch(a, l, c)
        .then((u) => u(this.axios, this.basePath));
    }
    createTranscription(a, l, c, u, d, f, h) {
      return e
        .OpenAIApiFp(this.configuration)
        .createTranscription(a, l, c, u, d, f, h)
        .then((m) => m(this.axios, this.basePath));
    }
    createTranslation(a, l, c, u, d, f) {
      return e
        .OpenAIApiFp(this.configuration)
        .createTranslation(a, l, c, u, d, f)
        .then((h) => h(this.axios, this.basePath));
    }
    deleteFile(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .deleteFile(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    deleteModel(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .deleteModel(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    downloadFile(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .downloadFile(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    listEngines(a) {
      return e
        .OpenAIApiFp(this.configuration)
        .listEngines(a)
        .then((l) => l(this.axios, this.basePath));
    }
    listFiles(a) {
      return e
        .OpenAIApiFp(this.configuration)
        .listFiles(a)
        .then((l) => l(this.axios, this.basePath));
    }
    listFineTuneEvents(a, l, c) {
      return e
        .OpenAIApiFp(this.configuration)
        .listFineTuneEvents(a, l, c)
        .then((u) => u(this.axios, this.basePath));
    }
    listFineTunes(a) {
      return e
        .OpenAIApiFp(this.configuration)
        .listFineTunes(a)
        .then((l) => l(this.axios, this.basePath));
    }
    listModels(a) {
      return e
        .OpenAIApiFp(this.configuration)
        .listModels(a)
        .then((l) => l(this.axios, this.basePath));
    }
    retrieveEngine(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .retrieveEngine(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    retrieveFile(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .retrieveFile(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    retrieveFineTune(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .retrieveFineTune(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
    retrieveModel(a, l) {
      return e
        .OpenAIApiFp(this.configuration)
        .retrieveModel(a, l)
        .then((c) => c(this.axios, this.basePath));
    }
  }
  e.OpenAIApi = o;
})(Iw);
var Vl = {};
const vL = "openai",
  bL = "3.3.0",
  yL = "Node.js library for the OpenAI API",
  wL = { type: "git", url: "git@github.com:openai/openai-node.git" },
  xL = ["openai", "open", "ai", "gpt-3", "gpt3"],
  kL = "OpenAI",
  EL = "MIT",
  SL = "./dist/index.js",
  CL = "./dist/index.d.ts",
  $L = { build: "tsc --outDir dist/" },
  PL = { axios: "^0.26.0", "form-data": "^4.0.0" },
  TL = { "@types/node": "^12.11.5", typescript: "^3.6.4" },
  AL = {
    name: vL,
    version: bL,
    description: yL,
    repository: wL,
    keywords: xL,
    author: kL,
    license: EL,
    main: SL,
    types: CL,
    scripts: $L,
    dependencies: PL,
    devDependencies: TL,
  };
var ou, ev;
function OL() {
  return (
    ev ||
      ((ev = 1),
      (ou = typeof self == "object" ? self.FormData : window.FormData)),
    ou
  );
}
Object.defineProperty(Vl, "__esModule", { value: !0 });
Vl.Configuration = void 0;
const RL = AL;
class IL {
  constructor(t = {}) {
    (this.apiKey = t.apiKey),
      (this.organization = t.organization),
      (this.username = t.username),
      (this.password = t.password),
      (this.accessToken = t.accessToken),
      (this.basePath = t.basePath),
      (this.baseOptions = t.baseOptions),
      (this.formDataCtor = t.formDataCtor),
      this.baseOptions || (this.baseOptions = {}),
      (this.baseOptions.headers = Object.assign(
        {
          "User-Agent": `OpenAI/NodeJS/${RL.version}`,
          Authorization: `Bearer ${this.apiKey}`,
        },
        this.baseOptions.headers
      )),
      this.organization &&
        (this.baseOptions.headers["OpenAI-Organization"] = this.organization),
      this.formDataCtor || (this.formDataCtor = OL());
  }
  isJsonMime(t) {
    const n = new RegExp(
      "^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$",
      "i"
    );
    return (
      t !== null &&
      (n.test(t) || t.toLowerCase() === "application/json-patch+json")
    );
  }
}
Vl.Configuration = IL;
(function (e) {
  var t =
      (In && In.__createBinding) ||
      (Object.create
        ? function (i, r, o, s) {
            s === void 0 && (s = o),
              Object.defineProperty(i, s, {
                enumerable: !0,
                get: function () {
                  return r[o];
                },
              });
          }
        : function (i, r, o, s) {
            s === void 0 && (s = o), (i[s] = r[o]);
          }),
    n =
      (In && In.__exportStar) ||
      function (i, r) {
        for (var o in i) o !== "default" && !r.hasOwnProperty(o) && t(r, i, o);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(Iw, e), n(Vl, e);
})(xh);
const LL = new xh.Configuration({
    apiKey: "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",
  }),
  ql = new xh.OpenAIApi(LL),
  _L = ({ setMessage: e, setSpeaking: t, setLoading: n }) => {
    const [i, r] = H.useState(!1);
    return C(ML.Record, {
      onClick: () => {
        try {
          i
            ? (r(!1), Kt.stopListening())
            : (Kt.startListening({ showPopup: !1 }).subscribe(async (o) => {
                var s;
                n(!0);
                try {
                  const l =
                      ((s = (
                        await ql.createChatCompletion({
                          model: "gpt-3.5-turbo",
                          messages: [
                            {
                              role: "system",
                              content:
                                "Your role is a pirate character called Piper the Pirate from a story book. Your objective is to be an entertaining companion to a 6 year old child. You should respond to messages in a funny manner and your responses should include a lot of pirate slang such as matey, rrrrrrs, arrrrggghhh etc. Your responses should be short and witty and not exceed more than one or two sentences each time. Responses must be child friendly.",
                            },
                            { role: "user", content: o[0] },
                          ],
                        })
                      ).data.choices[0].message) == null
                        ? void 0
                        : s.content) || "",
                    u = await (
                      await fetch(
                        "https://api.elevenlabs.io/v1/text-to-speech/UsbTp18WLaRmauNA3Hnn",
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            "xi-api-key": "54561ffff91ad94269b60d4f8a84edcf",
                          },
                          body: JSON.stringify({
                            text: l,
                            voice_settings: {
                              stability: 0,
                              similarity_boost: 0,
                              style: 0.5,
                              use_speaker_boost: !1,
                            },
                          }),
                        }
                      )
                    ).blob(),
                    d = URL.createObjectURL(u),
                    f = new Audio(d);
                  n(!1),
                    t(!0),
                    f.play(),
                    (f.onended = () => {
                      t(!1);
                    }),
                    e(l);
                } catch (a) {
                  console.log(a);
                }
              }),
              r(!0));
        } catch (o) {
          console.log(o);
        }
      },
      children: i
        ? C("img", { src: zl, height: 80 })
        : C("img", { src: Ir, height: 80 }),
    });
  },
  ML = {
    Record: K.div`
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 25%;
  `,
  },
  BL = () => {
    const { push: e } = qo(),
      [t, n] = H.useState(""),
      [i, r] = H.useState(!1),
      [o, s] = H.useState(!1);
    return ne(Ti, {
      id: "piper",
      children: [
        ne("div", {
          className: "speak-background-image",
          children: [
            ne(qr.Icons, {
              children: [
                C("img", { src: _l, width: 30, height: 30 }),
                C(qr.ActionButton, {
                  onClick: () => e("/menu"),
                  children: C("img", {
                    src: Bl,
                    width: 30,
                    height: 30,
                    onClick: () => e("/menu"),
                  }),
                }),
              ],
            }),
            C(qr.Bubble, {
              children: C(qr.Text, {
                className: "comica-regular",
                children: o ? C("div", { className: "dot-pulse" }) : t,
              }),
            }),
            C(qr.Speaker, {
              children: C("img", { src: i ? yI : bw, width: 250, height: 250 }),
            }),
          ],
        }),
        C(Dl, {}),
        C(jl, {}),
        C(_L, { setMessage: n, setSpeaking: r, setLoading: s }),
      ],
    });
  },
  qr = {
    Speaker: K.div`
    position: absolute;
    bottom: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
    Icons: K.div`
    position: absolute;
    width: 100%;
    right: 4%;
    top: 45%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    gap: 25px;
  `,
    Bubble: K.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    background-image: url(${Ml});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 350px;
    width: 350px;
    position: relative;
    margin: 15% auto;
  `,
    Text: K.div`
    position: absolute;
    top: 70px;
    left: 40px;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    width: 280px;
  `,
    Record: K.div`
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 25%;
  `,
    ActionButton: K.div`
    cursor: pointer;
  `,
  },
  DL = "/assets/talking-pete-68376b22.gif",
  jL = ({ setMessage: e, setSpeaking: t, setLoading: n }) => {
    const [i, r] = H.useState(!1);
    return C(zL.Record, {
      onClick: () => {
        try {
          i
            ? (r(!1), Kt.stopListening())
            : (Kt.startListening({ showPopup: !1 }).subscribe(async (o) => {
                var s;
                try {
                  n(!0);
                  const l =
                      ((s = (
                        await ql.createChatCompletion({
                          model: "gpt-3.5-turbo",
                          messages: [
                            {
                              role: "system",
                              content:
                                "Your role is a pirate character called Pete the Pirate from a story book. Your objective is to be an entertaining companion to a 6 year old child. You should respond to messages in a funny manner and your responses should include a lot of pirate slang such as matey, rrrrrrs, arrrrggghhh etc. Your responses should be short and witty and not exceed more than one or two sentences each time. Responses must be child friendly.",
                            },
                            { role: "user", content: o[0] },
                          ],
                        })
                      ).data.choices[0].message) == null
                        ? void 0
                        : s.content) || "",
                    u = await (
                      await fetch(
                        "https://api.elevenlabs.io/v1/text-to-speech/jIBWwhRngkm8so6GFCYC",
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            "xi-api-key": "54561ffff91ad94269b60d4f8a84edcf",
                          },
                          body: JSON.stringify({
                            text: l,
                            voice_settings: {
                              stability: 0,
                              similarity_boost: 0,
                              style: 0.5,
                              use_speaker_boost: !1,
                            },
                          }),
                        }
                      )
                    ).blob(),
                    d = URL.createObjectURL(u),
                    f = new Audio(d);
                  n(!1),
                    t(!0),
                    f.play(),
                    (f.onended = () => {
                      t(!1);
                    }),
                    e(l);
                } catch (a) {
                  console.log(a);
                }
              }),
              r(!0));
        } catch (o) {
          console.log(o);
        }
      },
      children: i
        ? C("img", { src: zl, height: 80 })
        : C("img", { src: Ir, height: 80 }),
    });
  },
  zL = {
    Record: K.div`
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 25%;
  `,
  },
  FL = () => {
    const [e, t] = H.useState(!1),
      [n, i] = H.useState(""),
      { push: r } = qo(),
      [o, s] = H.useState(""),
      [a, l] = H.useState(!1),
      [c, u] = H.useState(!1);
    return ne(Ti, {
      id: "pete",
      children: [
        ne("div", {
          className: "speak-background-image",
          children: [
            ne(Wr.Icons, {
              children: [
                C("img", { src: _l, width: 30, height: 30 }),
                C(Wr.ActionButton, {
                  onClick: () => r("/menu"),
                  children: C("img", {
                    src: Bl,
                    width: 30,
                    height: 30,
                    onClick: () => r("/menu"),
                  }),
                }),
              ],
            }),
            C(Wr.Bubble, {
              children: C(Wr.Text, {
                className: "comica-regular",
                children: c ? C("div", { className: "dot-pulse" }) : o,
              }),
            }),
            C(Wr.Speaker, {
              children: C("img", { src: a ? DL : yw, width: 250, height: 250 }),
            }),
            C(Dl, {}),
            C(jl, {}),
            C(jL, { setMessage: s, setSpeaking: l, setLoading: u }),
          ],
        }),
        C(dh, {
          isOpen: e,
          message: n,
          onDidDismiss: () => {
            t(!1), i("");
          },
          duration: 5e3,
        }),
      ],
    });
  },
  Wr = {
    Speaker: K.div`
    position: absolute;
    bottom: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
    Icons: K.div`
    position: absolute;
    width: 100%;
    right: 4%;
    top: 45%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    gap: 25px;
  `,
    Bubble: K.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    background-image: url(${Ml});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 350px;
    width: 350px;
    position: relative;
    margin: 15% auto;
  `,
    Text: K.div`
    position: absolute;
    top: 70px;
    left: 40px;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    width: 280px;
  `,
    ActionButton: K.div`
    cursor: pointer;
  `,
  },
  NL = "/assets/princess-talking-4f643baa.gif",
  HL = ({ setMessage: e, setSpeaking: t, setLoading: n }) => {
    const [i, r] = H.useState(!1);
    return C(UL.Record, {
      onClick: () => {
        try {
          i
            ? (r(!1), Kt.stopListening())
            : (Kt.startListening({ showPopup: !1 }).subscribe(async (o) => {
                var s;
                n(!0);
                try {
                  const l =
                      ((s = (
                        await ql.createChatCompletion({
                          model: "gpt-3.5-turbo",
                          messages: [
                            {
                              role: "system",
                              content:
                                "Your role is a princess character called Penny from a story book. Your objective is to be an entertaining companion to a 6 year old child. You should respond to messages in a funny manner and your responses should include a lot of princess like things such as having good manners, going to balls, looking after your subjects etc. Your responses should be short and witty and not exceed more than one or two sentences each time. Responses must be child friendly.",
                            },
                            { role: "user", content: o[0] },
                          ],
                        })
                      ).data.choices[0].message) == null
                        ? void 0
                        : s.content) || "",
                    u = await (
                      await fetch(
                        "https://api.elevenlabs.io/v1/text-to-speech/d6h9rMX5IpAR9ZrWOmjm",
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            "xi-api-key": "54561ffff91ad94269b60d4f8a84edcf",
                          },
                          body: JSON.stringify({
                            text: l,
                            voice_settings: {
                              stability: 0,
                              similarity_boost: 0,
                              style: 0.5,
                              use_speaker_boost: !1,
                            },
                          }),
                        }
                      )
                    ).blob(),
                    d = URL.createObjectURL(u),
                    f = new Audio(d);
                  n(!1),
                    t(!0),
                    f.play(),
                    (f.onended = () => {
                      t(!1);
                    }),
                    e(l);
                } catch (a) {
                  console.log(a);
                }
              }),
              r(!0));
        } catch (o) {
          console.log(o);
        }
      },
      children: i
        ? C("img", { src: zl, height: 80 })
        : C("img", { src: Ir, height: 80 }),
    });
  },
  UL = {
    Record: K.div`
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 25%;
  `,
  },
  VL = () => {
    const { push: e } = qo(),
      [t, n] = H.useState(""),
      [i, r] = H.useState(!1),
      [o, s] = H.useState(!1);
    return ne(Ti, {
      id: "penny",
      children: [
        ne("div", {
          className: "princess-speak-background-image",
          children: [
            ne(Yr.Icons, {
              children: [
                C("img", { src: _l, width: 30, height: 30 }),
                C(Yr.ActionButton, {
                  onClick: () => e("/menu"),
                  children: C("img", {
                    src: Bl,
                    width: 30,
                    height: 30,
                    onClick: () => e("/menu"),
                  }),
                }),
              ],
            }),
            C(Yr.Bubble, {
              children: C(Yr.Text, {
                className: "comica-regular",
                children: o ? C("div", { className: "dot-pulse" }) : t,
              }),
            }),
            ne(Yr.Speaker, {
              children: [
                C("img", { src: ww, width: 250, height: 250 }),
                i &&
                  C("img", {
                    style: { position: "absolute" },
                    src: NL,
                    width: 250,
                    height: 250,
                  }),
              ],
            }),
          ],
        }),
        C(Dl, {}),
        C(jl, {}),
        C(HL, { setMessage: n, setSpeaking: r, setLoading: s }),
      ],
    });
  },
  Yr = {
    Speaker: K.div`
    position: absolute;
    bottom: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
    Icons: K.div`
    position: absolute;
    width: 100%;
    right: 4%;
    top: 45%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    gap: 25px;
  `,
    Bubble: K.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    background-image: url(${Ml});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 350px;
    width: 350px;
    position: relative;
    margin: 15% auto;
  `,
    Text: K.div`
    position: absolute;
    top: 70px;
    left: 40px;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    width: 280px;
  `,
    Record: K.div`
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 25%;
  `,
    ActionButton: K.div`
    cursor: pointer;
  `,
  },
  qL = "/assets/explorer-6e9a33b4.gif",
  WL = ({ setMessage: e, setSpeaking: t, setLoading: n }) => {
    const [i, r] = H.useState(!1);
    return C(YL.Record, {
      onClick: () => {
        try {
          i
            ? (r(!1), Kt.stopListening())
            : (Kt.startListening({ showPopup: !1 }).subscribe(async (o) => {
                var s;
                n(!0);
                try {
                  const l =
                      ((s = (
                        await ql.createChatCompletion({
                          model: "gpt-3.5-turbo",
                          messages: [
                            {
                              role: "system",
                              content:
                                "Your role is an adventurer character called Eric the Explorer from a story book. Your objective is to be an entertaining companion to a 6 year old child. You should respond to messages in a funny manner and your responses should include a lot of explorer like things such as discovering new places, going on exotic adventures, learning about different cultures etc. Your responses should be short and witty and not exceed more than one or two sentences each time. Responses must be child friendly.",
                            },
                            { role: "user", content: o[0] },
                          ],
                        })
                      ).data.choices[0].message) == null
                        ? void 0
                        : s.content) || "",
                    u = await (
                      await fetch(
                        "https://api.elevenlabs.io/v1/text-to-speech/P7igz6QOJ1M3ox5nSaHv",
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            "xi-api-key": "54561ffff91ad94269b60d4f8a84edcf",
                          },
                          body: JSON.stringify({
                            text: l,
                            voice_settings: {
                              stability: 0,
                              similarity_boost: 0,
                              style: 0.5,
                              use_speaker_boost: !1,
                            },
                          }),
                        }
                      )
                    ).blob(),
                    d = URL.createObjectURL(u),
                    f = new Audio(d);
                  n(!1),
                    t(!0),
                    f.play(),
                    (f.onended = () => {
                      t(!1);
                    }),
                    e(l);
                } catch (a) {
                  console.log(a);
                }
              }),
              r(!0));
        } catch (o) {
          console.log(o);
        }
      },
      children: i
        ? C("img", { src: zl, height: 80 })
        : C("img", { src: Ir, height: 80 }),
    });
  },
  YL = {
    Record: K.div`
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 25%;
  `,
  },
  GL = () => {
    const { push: e } = qo(),
      [t, n] = H.useState(""),
      [i, r] = H.useState(!1),
      [o, s] = H.useState(!1);
    return ne(Ti, {
      id: "eric",
      children: [
        ne("div", {
          className: "explore-speak-background-image",
          children: [
            ne(Gr.Icons, {
              children: [
                C("img", { src: _l, width: 30, height: 30 }),
                C(Gr.ActionButton, {
                  onClick: () => e("/menu"),
                  children: C("img", {
                    src: Bl,
                    width: 30,
                    height: 30,
                    onClick: () => e("/menu"),
                  }),
                }),
              ],
            }),
            C(Gr.Bubble, {
              children: C(Gr.Text, {
                className: "comica-regular",
                children: o ? C("div", { className: "dot-pulse" }) : t,
              }),
            }),
            C(Gr.Speaker, {
              children: C("img", { src: i ? qL : xw, width: 250, height: 250 }),
            }),
          ],
        }),
        C(Dl, {}),
        C(jl, {}),
        C(WL, { setMessage: n, setSpeaking: r, setLoading: s }),
      ],
    });
  },
  Gr = {
    Speaker: K.div`
    position: absolute;
    bottom: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
    Icons: K.div`
    position: absolute;
    width: 100%;
    right: 4%;
    top: 45%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    gap: 25px;
  `,
    Bubble: K.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    background-image: url(${Ml});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 350px;
    width: 350px;
    position: relative;
    margin: 15% auto;
  `,
    Text: K.div`
    position: absolute;
    top: 70px;
    left: 40px;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    width: 280px;
  `,
    Record: K.div`
    position: absolute;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    left: 25%;
  `,
    ActionButton: K.div`
    cursor: pointer;
  `,
  };
eR();
const XL = () =>
    C(DO, {
      children: C(dR, {
        children: ne(qO, {
          children: [
            C(dn, { path: "/", exact: !0, children: C(lS, { to: "/menu" }) }),
            C(dn, { path: "/home", exact: !0, children: C(mR, {}) }),
            C(dn, { path: "/menu", exact: !0, children: C(T2, {}) }),
            C(dn, { path: "/speak/piper", exact: !0, children: C(BL, {}) }),
            C(dn, { path: "/speak/pete", exact: !0, children: C(FL, {}) }),
            C(dn, { path: "/speak/penny", exact: !0, children: C(VL, {}) }),
            C(dn, { path: "/speak/eric", exact: !0, children: C(GL, {}) }),
            C(dn, { path: "/message/:id", children: C(vR, {}) }),
          ],
        }),
      }),
    }),
  KL = document.getElementById("root"),
  QL = p0(KL);
QL.render(C(S.StrictMode, { children: C(XL, {}) }));
export {
  TP as K,
  Ew as W,
  e_ as __vite_legacy_guard,
  Gn as a,
  fC as b,
  ur as c,
  hC as d,
  hd as e,
  d_ as f,
  it as g,
  dd as h,
  sP as i,
  h_ as j,
  Me as k,
  i_ as l,
  jo as m,
  t_ as n,
  n_ as p,
  yi as r,
  f_ as s,
  _e as w,
};
