import ve, { useMemo as ee, forwardRef as we, createElement as je, useRef as J, useState as $, useImperativeHandle as Ge, useEffect as G } from "react";
var ue = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Xe() {
  if ($e) return re;
  $e = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function o(l, i, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), i.key !== void 0 && (d = "" + i.key), "key" in i) {
      s = {};
      for (var c in i)
        c !== "key" && (s[c] = i[c]);
    } else s = i;
    return i = s.ref, {
      $$typeof: t,
      type: l,
      key: d,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return re.Fragment = n, re.jsx = o, re.jsxs = o, re;
}
var ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function Je() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === R ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case y:
          return "Fragment";
        case M:
          return "Profiler";
        case C:
          return "StrictMode";
        case E:
          return "Suspense";
        case m:
          return "SuspenseList";
        case I:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case j:
            return "Portal";
          case L:
            return (r.displayName || "Context") + ".Provider";
          case S:
            return (r._context.displayName || "Context") + ".Consumer";
          case z:
            var w = r.render;
            return r = r.displayName, r || (r = w.displayName || w.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case x:
            return w = r.displayName || null, w !== null ? w : t(r.type) || "Memo";
          case k:
            w = r._payload, r = r._init;
            try {
              return t(r(w));
            } catch {
            }
        }
      return null;
    }
    function n(r) {
      return "" + r;
    }
    function o(r) {
      try {
        n(r);
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var W = w.error, V = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return W.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          V
        ), n(r);
      }
    }
    function l(r) {
      if (r === y) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === k)
        return "<...>";
      try {
        var w = t(r);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = T.A;
      return r === null ? null : r.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function d(r) {
      if (N.call(r, "key")) {
        var w = Object.getOwnPropertyDescriptor(r, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function c(r, w) {
      function W() {
        g || (g = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: W,
        configurable: !0
      });
    }
    function f() {
      var r = t(this.type);
      return v[r] || (v[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function b(r, w, W, V, Y, A, O, X) {
      return W = A.ref, r = {
        $$typeof: p,
        type: r,
        key: w,
        props: A,
        _owner: Y
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function u(r, w, W, V, Y, A, O, X) {
      var P = w.children;
      if (P !== void 0)
        if (V)
          if (U(P)) {
            for (V = 0; V < P.length; V++)
              a(P[V]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else a(P);
      if (N.call(w, "key")) {
        P = t(r);
        var Z = Object.keys(w).filter(function(le) {
          return le !== "key";
        });
        V = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", B[P + V] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          V,
          P,
          Z,
          P
        ), B[P + V] = !0);
      }
      if (P = null, W !== void 0 && (o(W), P = "" + W), d(w) && (o(w.key), P = "" + w.key), "key" in w) {
        W = {};
        for (var K in w)
          K !== "key" && (W[K] = w[K]);
      } else W = w;
      return P && c(
        W,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), b(
        r,
        P,
        A,
        Y,
        i(),
        W,
        O,
        X
      );
    }
    function a(r) {
      typeof r == "object" && r !== null && r.$$typeof === p && r._store && (r._store.validated = 1);
    }
    var h = ve, p = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), L = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), R = Symbol.for("react.client.reference"), T = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, U = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var g, v = {}, F = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), _ = D(l(s)), B = {};
    ne.Fragment = y, ne.jsx = function(r, w, W, V, Y) {
      var A = 1e4 > T.recentlyCreatedOwnerStacks++;
      return u(
        r,
        w,
        W,
        !1,
        V,
        Y,
        A ? Error("react-stack-top-frame") : F,
        A ? D(l(r)) : _
      );
    }, ne.jsxs = function(r, w, W, V, Y) {
      var A = 1e4 > T.recentlyCreatedOwnerStacks++;
      return u(
        r,
        w,
        W,
        !0,
        V,
        Y,
        A ? Error("react-stack-top-frame") : F,
        A ? D(l(r)) : _
      );
    };
  }()), ne;
}
var Ie;
function Ze() {
  return Ie || (Ie = 1, process.env.NODE_ENV === "production" ? ue.exports = Xe() : ue.exports = Je()), ue.exports;
}
var e = Ze();
const Et = ({
  as: t = "p",
  children: n,
  className: o = "",
  href: l,
  target: i,
  rel: s,
  // Style
  color: d = "#333",
  bgColor: c,
  fontSize: f = "16px",
  fontWeight: b = "normal",
  textAlign: u = "left",
  textTransform: a = "none",
  lineHeight: h = "normal",
  letterSpacing: p = "normal",
  maxWidth: j,
  padding: y,
  margin: C,
  borderRadius: M,
  boxShadow: S,
  shadowColor: L = "rgba(0,0,0,0.1)",
  wordBreak: z = "normal",
  // Text styles
  italic: E = !1,
  bold: m = !1,
  underline: x = !1,
  strikethrough: k = !1,
  selectable: I = !0,
  truncate: R = !1,
  // Hover & Active
  hoverColor: T,
  hoverBgColor: N,
  hoverTextDecoration: U,
  activeColor: D,
  activeBgColor: g,
  transitionDuration: v = "0.25s",
  // Event
  onClick: F
}) => {
  const _ = ee(() => {
    const A = [];
    return x && A.push("underline"), k && A.push("line-through"), A.join(" ") || "none";
  }, [x, k]), B = {
    color: d,
    backgroundColor: c || "transparent",
    fontSize: f,
    fontWeight: m ? "bold" : b,
    textAlign: u,
    textTransform: a,
    lineHeight: h,
    letterSpacing: p,
    maxWidth: j,
    padding: y,
    margin: C,
    borderRadius: M,
    textDecoration: _,
    fontStyle: E ? "italic" : "normal",
    wordBreak: z,
    boxShadow: S || (L ? `0 1px 4px ${L}` : void 0),
    cursor: F || l ? "pointer" : "default",
    userSelect: I ? "text" : "none",
    transition: `all ${v} ease-in-out`,
    overflow: R ? "hidden" : void 0,
    whiteSpace: R ? "nowrap" : void 0,
    textOverflow: R ? "ellipsis" : void 0
  }, Y = {
    className: o,
    style: B,
    onClick: F,
    onMouseEnter: (A) => {
      const O = A.currentTarget;
      T && (O.style.color = T), N && (O.style.backgroundColor = N), U && (O.style.textDecoration = U);
    },
    onMouseLeave: (A) => {
      const O = A.currentTarget;
      O.style.color = d, O.style.backgroundColor = c || "transparent", O.style.textDecoration = _;
    },
    onMouseDown: (A) => {
      const O = A.currentTarget;
      D && (O.style.color = D), g && (O.style.backgroundColor = g);
    },
    onMouseUp: (A) => {
      const O = A.currentTarget;
      O.style.color = T || d, O.style.backgroundColor = N || c || "transparent";
    }
  };
  return t === "a" || l ? /* @__PURE__ */ e.jsx(
    "a",
    {
      ...Y,
      href: l,
      target: i,
      rel: s || (i === "_blank" ? "noopener noreferrer" : void 0),
      children: n
    }
  ) : /* @__PURE__ */ e.jsx(t, { ...Y, children: n });
}, _e = ({
  src: t,
  alt: n = "Image",
  width: o = "100%",
  height: l = "auto",
  borderRadius: i = "8px",
  borderColor: s = "transparent",
  borderStyle: d = "solid",
  borderWidth: c = "0px",
  shadow: f = !1,
  boxShadow: b,
  opacity: u = 1,
  objectFit: a = "cover",
  overlayText: h,
  overlayColor: p = "rgba(0, 0, 0, 0.5)",
  svgIcon: j,
  responsive: y = !1,
  padding: C,
  margin: M,
  lazyLoad: S = !1,
  hoverOpacity: L,
  hoverShadow: z = !1,
  hoverScale: E,
  hoverRotate: m,
  transitionDuration: x = "0.3s",
  overflow: k = "hidden",
  className: I,
  style: R,
  onClick: T
}) => {
  const N = {
    width: y ? "100%" : o,
    height: y ? "100%" : l,
    borderRadius: i,
    border: `${c} ${d} ${s}`,
    objectFit: a,
    opacity: u,
    boxShadow: f ? b || "0 4px 12px rgba(0,0,0,0.15)" : "none",
    transition: `all ${x} ease`,
    display: "block"
  }, U = (v) => {
    v.currentTarget.style.opacity = L !== void 0 ? L.toString() : N.opacity?.toString() || "1", v.currentTarget.style.boxShadow = z ? "0 8px 20px rgba(0,0,0,0.3)" : N.boxShadow?.toString() || "none", v.currentTarget.style.transform = `scale(${E || 1}) rotate(${m || 0}deg)`;
  }, D = (v) => {
    v.currentTarget.style.opacity = N.opacity?.toString() || "1", v.currentTarget.style.boxShadow = N.boxShadow?.toString() || "none", v.currentTarget.style.transform = "scale(1) rotate(0deg)";
  }, g = (() => {
    switch (k) {
      case "x":
        return { overflowX: "hidden" };
      case "y":
        return { overflowY: "hidden" };
      default:
        return { overflow: k };
    }
  })();
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      role: "img",
      "aria-label": n,
      onClick: T,
      className: I,
      style: {
        width: y ? "100%" : o,
        height: y ? "auto" : l,
        padding: C,
        margin: M,
        position: "relative",
        cursor: T ? "pointer" : "default",
        display: "inline-block",
        transition: `all ${x} ease`,
        ...g,
        ...R
        // Allow external override
      },
      children: [
        j ? /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: j
          }
        ) : /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t,
            alt: n,
            loading: S ? "lazy" : "eager",
            style: N,
            onMouseEnter: U,
            onMouseLeave: D
          }
        ),
        h && /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: p,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "1.25rem",
              textAlign: "center",
              padding: "1rem",
              boxSizing: "border-box"
            },
            children: h
          }
        )
      ]
    }
  );
}, It = ({
  children: t,
  type: n = "button",
  onClick: o,
  iconBefore: l,
  iconAfter: i,
  className: s = "",
  style: d,
  // ✅ NEW
  fullWidth: c = !1,
  disabled: f = !1,
  loading: b = !1,
  loadingText: u = "Loading...",
  paddingHorizontal: a = 30,
  paddingVertical: h = 8,
  fontSize: p = "16px",
  fontWeight: j = 400,
  borderRadius: y = 6,
  backgroundColor: C = "#02b314",
  textColor: M = "white",
  borderColor: S = "transparent",
  hoverBgColor: L = "transparent",
  hoverTextColor: z = "black",
  hoverBorderColor: E,
  boxShadow: m = "0 1px 2px rgba(0, 0, 0, 0.05)"
}) => {
  const [x, k] = ve.useState(!1), I = x && !f && z || M, R = x && !f && E || S, T = x && !f ? L : C, N = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${h}px ${a}px`,
    fontSize: p,
    fontWeight: j,
    borderRadius: `${y}px`,
    width: c ? "100%" : "auto",
    color: I,
    border: `1px solid ${R}`,
    backgroundColor: T,
    boxShadow: m,
    cursor: f ? "not-allowed" : "pointer",
    opacity: f ? 0.6 : 1,
    transition: "all 0.2s ease-in-out",
    gap: "8px",
    ...d
    // ✅ Apply user-supplied inline styles last
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: n,
      className: s,
      style: N,
      onClick: !f && !b ? o : void 0,
      disabled: f,
      onMouseEnter: () => k(!0),
      onMouseLeave: () => k(!1),
      children: [
        b ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "span",
            {
              style: {
                width: "18px",
                height: "18px",
                border: "2px solid currentColor",
                borderTopColor: "transparent",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
              }
            }
          ),
          /* @__PURE__ */ e.jsx("span", { children: u })
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          l && /* @__PURE__ */ e.jsx("span", { children: l }),
          /* @__PURE__ */ e.jsx("span", { children: t }),
          i && /* @__PURE__ */ e.jsx("span", { children: i })
        ] }),
        /* @__PURE__ */ e.jsx("style", { children: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        ` })
      ]
    }
  );
};
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Qe = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, o, l) => l ? l.toUpperCase() : o.toLowerCase()
), Le = (t) => {
  const n = Qe(t);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Fe = (...t) => t.filter((n, o, l) => !!n && n.trim() !== "" && l.indexOf(n) === o).join(" ").trim(), et = (t) => {
  for (const n in t)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = we(
  ({
    color: t = "currentColor",
    size: n = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: l,
    className: i = "",
    children: s,
    iconNode: d,
    ...c
  }, f) => je(
    "svg",
    {
      ref: f,
      ...tt,
      width: n,
      height: n,
      stroke: t,
      strokeWidth: l ? Number(o) * 24 / Number(n) : o,
      className: Fe("lucide", i),
      ...!s && !et(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...d.map(([b, u]) => je(b, u)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q = (t, n) => {
  const o = we(
    ({ className: l, ...i }, s) => je(rt, {
      ref: s,
      iconNode: n,
      className: Fe(
        `lucide-${Ke(Le(t))}`,
        `lucide-${t}`,
        l
      ),
      ...i
    })
  );
  return o.displayName = Le(t), o;
};
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ke = q("chevron-left", nt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Se = q("chevron-right", st);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], it = q("circle-alert", ot);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], at = q("circle-check-big", lt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], dt = q("eye-off", ct);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], pt = q("eye", ut);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], ft = q("info", xt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], pe = q("maximize", ht);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
], xe = q("minimize", gt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], se = q("pause", bt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], oe = q("play", mt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], fe = q("rotate-ccw", yt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = [
  [
    "path",
    {
      d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
      key: "15892j"
    }
  ],
  ["path", { d: "M3 20V4", key: "1ptbpl" }]
], he = q("skip-back", jt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = [
  ["path", { d: "M21 4v16", key: "7j8fe9" }],
  [
    "path",
    {
      d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "zs4d6"
    }
  ]
], ge = q("skip-forward", vt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], kt = q("triangle-alert", wt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], be = q("volume-2", St);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], me = q("volume-x", Tt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ct = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ie = q("x", Ct), _t = we(
  ({
    type: t = "text",
    placeholder: n = "",
    label: o,
    value: l,
    defaultValue: i,
    onChange: s,
    name: d = "",
    disabled: c = !1,
    readOnly: f = !1,
    required: b = !1,
    error: u,
    success: a = !1,
    autoFocus: h = !1,
    iconLeft: p,
    iconRight: j,
    borderColor: y = "#ccc",
    focusBorderColor: C = "#2563eb",
    hoverBorderColor: M = "#4b5563",
    backgroundColor: S = "#ffffff",
    textColor: L = "#111827",
    errorColor: z = "#dc2626",
    successColor: E = "#16a34a",
    labelColor: m = "#374151",
    size: x = "md",
    radius: k = "6px",
    fontSize: I = "14px",
    rows: R = 4,
    cols: T,
    maxLength: N,
    resize: U = !0,
    showCharacterCount: D = !0,
    className: g,
    style: v
  }, F) => {
    const _ = J(null), [B, r] = $(i || ""), [w, W] = $(!1);
    Ge(F, () => _.current);
    const V = (P) => {
      N && P.target.value.length > N || (r(P.target.value), s && s(d, P.target.value));
    }, Y = () => {
      switch (x) {
        case "sm":
          return "6px 12px";
        case "lg":
          return "12px 20px";
        default:
          return "10px 16px";
      }
    }, A = () => {
      switch (x) {
        case "sm":
          return "13px";
        case "lg":
          return "16px";
        default:
          return I;
      }
    }, O = u ? z : a ? E : y, X = {
      width: "100%",
      padding: Y(),
      paddingLeft: p ? "40px" : Y().split(" ")[1],
      paddingRight: j || t === "password" ? "40px" : Y().split(" ")[1],
      border: `1px solid ${O}`,
      borderRadius: k,
      backgroundColor: S,
      color: L,
      fontSize: A(),
      outline: "none",
      resize: t === "textarea" && !U ? "none" : void 0,
      ...v
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: { width: "100%", fontFamily: "sans-serif" },
        className: g,
        children: [
          o && /* @__PURE__ */ e.jsxs(
            "label",
            {
              htmlFor: d,
              style: {
                display: "block",
                marginBottom: "6px",
                fontSize: "14px",
                fontWeight: 500,
                color: m
              },
              children: [
                o,
                " ",
                b && /* @__PURE__ */ e.jsx("span", { style: { color: z }, children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { style: { position: "relative", width: "100%" }, children: [
            p && /* @__PURE__ */ e.jsx(
              "span",
              {
                style: {
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#6b7280"
                },
                children: p
              }
            ),
            t === "textarea" ? /* @__PURE__ */ e.jsx(
              "textarea",
              {
                ref: _,
                name: d,
                value: l ?? B,
                onChange: V,
                placeholder: n,
                rows: R,
                cols: T,
                maxLength: N,
                disabled: c,
                readOnly: f,
                autoFocus: h,
                style: X,
                onFocus: (P) => {
                  P.currentTarget.style.borderColor = C;
                },
                onBlur: (P) => {
                  P.currentTarget.style.borderColor = O;
                },
                onMouseEnter: (P) => {
                  P.currentTarget.style.borderColor = M;
                },
                onMouseLeave: (P) => {
                  P.currentTarget.style.borderColor = O;
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: _,
                id: d,
                name: d,
                type: t === "password" ? w ? "text" : "password" : t,
                value: l ?? B,
                onChange: V,
                placeholder: n,
                disabled: c,
                readOnly: f,
                autoFocus: h,
                style: X,
                onFocus: (P) => {
                  P.currentTarget.style.borderColor = C;
                },
                onBlur: (P) => {
                  P.currentTarget.style.borderColor = O;
                },
                onMouseEnter: (P) => {
                  P.currentTarget.style.borderColor = M;
                },
                onMouseLeave: (P) => {
                  P.currentTarget.style.borderColor = O;
                }
              }
            ),
            t === "password" && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => W(!w),
                style: {
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "#6b7280",
                  cursor: "pointer",
                  padding: 0
                },
                children: w ? /* @__PURE__ */ e.jsx(dt, { size: 18 }) : /* @__PURE__ */ e.jsx(pt, { size: 18 })
              }
            ),
            j && t !== "password" && /* @__PURE__ */ e.jsx(
              "span",
              {
                style: {
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#6b7280"
                },
                children: j
              }
            )
          ] }),
          t === "textarea" && D && N && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                textAlign: "right",
                fontSize: "12px",
                color: "#6b7280",
                marginTop: "4px"
              },
              children: [
                (l ?? B).length,
                "/",
                N
              ]
            }
          ),
          u && /* @__PURE__ */ e.jsx(
            "p",
            {
              style: {
                color: z,
                fontSize: "12px",
                marginTop: "4px",
                lineHeight: "1.3"
              },
              children: u
            }
          )
        ]
      }
    );
  }
), Lt = ({
  title: t,
  titleIcon: n,
  items: o,
  type: l = "unordered",
  bulletColor: i = "#2563eb",
  textColor: s = "#111827",
  backgroundColor: d = "#fff",
  borderColor: c = "#e5e7eb",
  fontSize: f = "15px",
  fontWeight: b = 500,
  borderRadius: u = "12px",
  padding: a = "16px",
  spacing: h = "12px",
  className: p,
  style: j
}) => {
  const y = l === "ordered", C = l === "inline", M = {
    backgroundColor: d,
    borderColor: c,
    color: s,
    borderWidth: c ? "1px" : "0px",
    borderStyle: "solid",
    borderRadius: u,
    padding: a,
    ...j
  }, S = C ? {
    display: "flex",
    gap: h,
    paddingLeft: 0,
    listStyleType: "none",
    margin: 0
  } : {
    listStyleType: y ? "decimal" : "none",
    paddingLeft: y ? "20px" : "0",
    margin: 0
  }, L = y ? "ol" : "ul";
  return /* @__PURE__ */ e.jsxs("div", { className: p, style: M, children: [
    t && /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          fontSize: "17px",
          fontWeight: 600,
          marginBottom: "10px",
          gap: "8px"
        },
        children: [
          n && /* @__PURE__ */ e.jsx("span", { style: { fontSize: "18px" }, children: n }),
          /* @__PURE__ */ e.jsx("span", { children: t })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(L, { style: S, children: o.map((z, E) => /* @__PURE__ */ e.jsx(
      Oe,
      {
        ...z,
        bulletColor: i,
        textColor: s,
        fontSize: f,
        fontWeight: b,
        spacing: h,
        isInline: C
      },
      E
    )) })
  ] });
}, Oe = ({
  text: t,
  icon: n,
  onClick: o,
  subItems: l,
  bulletColor: i,
  textColor: s,
  fontSize: d,
  fontWeight: c,
  spacing: f,
  isInline: b
}) => {
  const u = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: b ? "0" : f
  }, a = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: d,
    fontWeight: c,
    color: s,
    cursor: o ? "pointer" : "default"
  }, h = {
    width: "8px",
    height: "8px",
    backgroundColor: i,
    borderRadius: "50%",
    flexShrink: 0
  }, p = {
    listStyleType: "disc",
    paddingLeft: "20px",
    margin: 0
  };
  return /* @__PURE__ */ e.jsxs("li", { style: u, children: [
    /* @__PURE__ */ e.jsxs("div", { style: a, onClick: o, children: [
      n ? /* @__PURE__ */ e.jsx("span", { style: { fontSize: "16px", color: s }, children: n }) : !b && /* @__PURE__ */ e.jsx("span", { style: h }),
      /* @__PURE__ */ e.jsx("span", { children: t })
    ] }),
    l && l.length > 0 && /* @__PURE__ */ e.jsx("ul", { style: p, children: l.map((j, y) => /* @__PURE__ */ e.jsx(
      Oe,
      {
        ...j,
        bulletColor: i,
        textColor: s,
        fontSize: d,
        fontWeight: c,
        spacing: f,
        isInline: !1
      },
      y
    )) })
  ] });
}, Te = ({
  tabs: t,
  defaultActive: n = 0,
  tabPosition: o,
  activeTabClassName: l = "",
  inactiveTabClassName: i = "",
  tabContainerClassName: s = "",
  contentContainerClassName: d = "",
  className: c = "",
  activeTabStyle: f,
  inactiveTabStyle: b,
  tabContainerStyle: u,
  contentContainerStyle: a,
  style: h,
  tabsWidth: p = "240px",
  tabGap: j = 8,
  tabPadding: y = "12px 16px",
  tabBorderRadius: C = 12,
  primaryColor: M = "#2563eb",
  textColor: S = "#374151",
  backgroundColor: L = "#ffffff",
  hoverTextColor: z = "#1e40af",
  responsiveBreakpoint: E = 768,
  showDrawerLabel: m = "Select Tab"
}) => {
  const [x, k] = $(n), [I, R] = $(null), [T, N] = $(!1), [U, D] = $(!1);
  G(() => {
    const Y = () => {
      N(window.innerWidth <= E);
    };
    return Y(), window.addEventListener("resize", Y), () => window.removeEventListener("resize", Y);
  }, [E]);
  const g = o === "left" || o === "right", F = {
    display: "flex",
    flexDirection: g ? T ? "column" : o === "left" ? "row" : "row-reverse" : "column",
    width: "100%",
    height: "100%",
    backgroundColor: L,
    ...g && !T ? {} : { flexWrap: "wrap" },
    ...h
  }, _ = {
    width: g && !T ? p : "100%",
    display: "flex",
    flexDirection: g && !T ? "column" : "row",
    justifyContent: !g && o === "top" ? "center" : void 0,
    gap: j,
    padding: 8,
    boxSizing: "border-box",
    ...u
  }, B = {
    flexGrow: 1,
    padding: 24,
    background: "#f9fafb",
    boxSizing: "border-box",
    minWidth: 0,
    ...g && !T ? { width: "calc(100% - " + p + ")" } : { width: "100%" },
    ...a
  }, r = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: y,
    borderRadius: C,
    border: "none",
    backgroundColor: "transparent",
    fontWeight: 500,
    transition: "all 0.2s ease",
    width: g && !T ? "100%" : "auto",
    marginBottom: g && !T ? j : 0,
    marginRight: !g || T ? j : 0,
    justifyContent: "flex-start"
  }, w = {
    backgroundColor: M,
    color: "#fff",
    fontWeight: 700,
    boxShadow: `0 2px 10px ${M}55`,
    ...f
  }, W = {
    backgroundColor: "transparent",
    color: S,
    ...b
  }, V = {
    backgroundColor: `${M}22`,
    color: z
  };
  return /* @__PURE__ */ e.jsxs("div", { className: c, style: F, children: [
    /* @__PURE__ */ e.jsx("style", { children: `
        @media (max-width: ${E}px) {
          .custom-tab-drawer-button {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
          }
          .custom-tab-mobile-drawer {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: 8px;
            width: 100%;
            animation: slideDown 0.3s ease-out;
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
        ` }),
    T && g ? /* @__PURE__ */ e.jsxs("div", { style: { width: "100%", marginBottom: 12 }, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => D(!U),
          style: {
            ...r,
            ...w,
            justifyContent: "space-between",
            width: "100%"
          },
          className: "custom-tab-drawer-button",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: m }),
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: 18 }, children: "☰" })
          ]
        }
      ),
      U && /* @__PURE__ */ e.jsx("div", { className: "custom-tab-mobile-drawer", children: t.map((Y, A) => {
        const O = A === x, X = I === A;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              k(A), D(!1);
            },
            onMouseEnter: () => R(A),
            onMouseLeave: () => R(null),
            className: O ? l : i,
            style: {
              ...r,
              ...O ? w : W,
              ...X && !O ? V : {}
            },
            children: [
              Y.icon && /* @__PURE__ */ e.jsx("span", { children: Y.icon }),
              /* @__PURE__ */ e.jsx("span", { children: Y.label })
            ]
          },
          A
        );
      }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "nav",
      {
        className: s,
        style: _,
        "aria-label": "Tabs Navigation",
        children: t.map((Y, A) => {
          const O = A === x, X = I === A;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => k(A),
              onMouseEnter: () => R(A),
              onMouseLeave: () => R(null),
              className: O ? l : i,
              style: {
                ...r,
                ...O ? w : W,
                ...X && !O ? V : {}
              },
              children: [
                Y.icon && /* @__PURE__ */ e.jsx("span", { children: Y.icon }),
                /* @__PURE__ */ e.jsx("span", { children: Y.label })
              ]
            },
            A
          );
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "section",
      {
        className: d,
        style: B,
        role: "tabpanel",
        children: t[x]?.content
      }
    )
  ] });
}, Pt = (t) => /* @__PURE__ */ e.jsx(Te, { ...t, tabPosition: "left" }), At = (t) => /* @__PURE__ */ e.jsx(Te, { ...t, tabPosition: "top" }), Nt = (t) => /* @__PURE__ */ e.jsx(Te, { ...t, tabPosition: "right" }), Wt = ({
  src: t,
  poster: n,
  autoPlay: o = !1,
  loop: l = !1,
  controls: i = !1,
  muted: s = !1,
  // default false
  width: d = "100%",
  height: c = "150px",
  borderRadius: f = "12px",
  backgroundColor: b = "#1e1e1e",
  primaryColor: u = "#ff4081",
  padding: a = "16px",
  className: h
}) => {
  const p = J(null), j = J(null), [y, C] = $(o), [M, S] = $(0), [L, z] = $(0), [E, m] = $(0.5), [x, k] = $(s), [I, R] = $(!1), [T, N] = $(l);
  G(() => {
    p.current && (p.current.volume = E, p.current.loop = T, p.current.muted = x);
  }, [E, T, x]);
  const U = () => {
    p.current && (y ? p.current.pause() : p.current.play(), C(!y));
  }, D = () => {
    p.current && (S(p.current.currentTime), z(p.current.duration));
  }, g = (r) => {
    if (!p.current || !r.currentTarget) return;
    const w = r.currentTarget.getBoundingClientRect(), V = (r.clientX - w.left) / w.width * L;
    p.current.currentTime = V, S(V);
  }, v = (r) => {
    p.current && (p.current.currentTime += r);
  }, F = () => {
    j.current && (I ? document.exitFullscreen?.() : j.current.requestFullscreen?.(), R(!I));
  }, _ = () => {
    k(!x), x && E === 0 && m(0.5);
  }, B = (r) => {
    const w = Math.floor(r / 60), W = Math.floor(r % 60);
    return `${w}:${W < 10 ? "0" : ""}${W}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: j,
      className: h,
      style: {
        position: "relative",
        width: d,
        backgroundColor: b,
        borderRadius: f,
        color: "#fff",
        overflow: "hidden",
        padding: a,
        boxSizing: "border-box",
        maxWidth: "100%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "video",
          {
            ref: p,
            src: t,
            poster: n,
            autoPlay: o,
            loop: l,
            controls: i,
            muted: s,
            onTimeUpdate: D,
            onLoadedMetadata: D,
            style: {
              width: "100%",
              height: c,
              borderRadius: f,
              objectFit: "cover",
              backgroundColor: "#000"
            }
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginTop: "10px",
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ e.jsx("button", { onClick: () => v(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: U,
                  style: {
                    background: u,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": y ? "Pause" : "Play",
                  children: y ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
                }
              ),
              /* @__PURE__ */ e.jsx("button", { onClick: () => v(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "8px",
              gap: "12px",
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { flexShrink: 0, minWidth: "60px", textAlign: "center" }, children: [
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: B(M) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  " ",
                  "/ ",
                  B(L)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: g,
                  style: {
                    flex: 1,
                    height: "8px",
                    background: "#444",
                    borderRadius: "4px",
                    cursor: "pointer",
                    position: "relative",
                    minWidth: "100px"
                  },
                  children: /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      style: {
                        width: `${M / L * 100 || 0}%`,
                        height: "100%",
                        background: u,
                        borderRadius: "4px"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: () => N(!T),
                    "aria-label": "Toggle Loop",
                    children: /* @__PURE__ */ e.jsx(fe, { size: 18, color: T ? u : void 0 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: _, "aria-label": "Toggle Mute", children: x ? /* @__PURE__ */ e.jsx(me, { size: 18 }) : /* @__PURE__ */ e.jsx(be, { size: 18 }) }),
                /* @__PURE__ */ e.jsx("button", { onClick: F, "aria-label": "Toggle Fullscreen", children: I ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
              ] })
            ]
          }
        )
      ]
    }
  );
}, Ft = ({
  src: t,
  thumbnail: n,
  autoPlay: o = !1,
  loop: l = !1,
  backgroundColor: i = "#000000",
  primaryColor: s = "#10b981",
  secondaryColor: d = "#ffffff",
  borderRadius: c = "12px",
  padding: f = "16px",
  width: b = "100%",
  className: u
}) => {
  const a = J(null), h = J(null), [p, j] = $(o), [y, C] = $(0), [M, S] = $(0), [L, z] = $(0.5), [E, m] = $(!1), [x, k] = $(l);
  G(() => {
    a.current && (a.current.volume = L);
  }, [L]), G(() => {
    a.current && (a.current.loop = x);
  }, [x]);
  const I = () => {
    a.current && (p ? a.current.pause() : a.current.play(), j(!p));
  }, R = () => {
    a.current && (C(a.current.currentTime), S(a.current.duration));
  }, T = (g) => {
    if (!a.current || !g.currentTarget) return;
    const v = g.currentTarget.getBoundingClientRect(), _ = (g.clientX - v.left) / v.width * M;
    a.current.currentTime = _, C(_);
  }, N = (g) => {
    a.current && (a.current.currentTime += g);
  }, U = () => {
    h.current && (E ? document.exitFullscreen?.() : h.current.requestFullscreen?.(), m(!E));
  }, D = (g) => {
    const v = Math.floor(g / 60), F = Math.floor(g % 60);
    return `${v}:${F < 10 ? "0" : ""}${F}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: h,
      className: u,
      style: {
        position: "relative",
        width: b,
        backgroundColor: i,
        borderRadius: c,
        color: d,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        overflow: "hidden",
        padding: f,
        boxSizing: "border-box",
        maxWidth: "100%"
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "audio",
          {
            ref: a,
            src: t,
            autoPlay: o,
            loop: l,
            onTimeUpdate: R,
            onLoadedMetadata: R
          }
        ),
        n && /* @__PURE__ */ e.jsx(
          "img",
          {
            src: n,
            alt: "Audio Thumbnail",
            style: {
              width: "100%",
              objectFit: "cover",
              borderRadius: c,
              marginBottom: "16px",
              maxHeight: "150px"
            }
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              flexShrink: 0,
              marginTop: "10px"
            },
            children: [
              /* @__PURE__ */ e.jsx("button", { onClick: () => N(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: I,
                  style: {
                    background: s,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": p ? "Pause" : "Play",
                  children: p ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
                }
              ),
              /* @__PURE__ */ e.jsx("button", { onClick: () => N(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { flexShrink: 0, minWidth: "60px", textAlign: "center" }, children: [
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", marginRight: "4px" }, children: D(y) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  "/ ",
                  D(M)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: T,
                  style: {
                    flex: 1,
                    height: "8px",
                    background: "#444",
                    borderRadius: "4px",
                    cursor: "pointer",
                    position: "relative",
                    minWidth: "100px"
                  },
                  children: /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      style: {
                        width: `${y / M * 100 || 0}%`,
                        height: "100%",
                        background: s,
                        borderRadius: "4px"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => k(!x),
                        "aria-label": "Toggle Loop",
                        children: /* @__PURE__ */ e.jsx(fe, { size: 18, color: x ? s : void 0 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => z(L > 0 ? 0 : 0.5),
                        "aria-label": "Toggle Mute",
                        children: L > 0 ? /* @__PURE__ */ e.jsx(be, { size: 18 }) : /* @__PURE__ */ e.jsx(me, { size: 18 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("button", { onClick: U, "aria-label": "Toggle Fullscreen", children: E ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};
function H(t, n, o) {
  return t == null ? o : typeof t != "object" ? t : t[n] ?? o;
}
const Pe = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Ot = ({
  display: t = { sm: "block", md: "flex", lg: "grid" },
  flexDirection: n = { sm: "column", md: "row", lg: "row" },
  justifyContent: o = { sm: "flex-start", md: "center", lg: "space-between" },
  alignItems: l = { sm: "stretch", md: "center", lg: "center" },
  gridTemplateColumns: i = { sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
  gridTemplateRows: s = { sm: "auto", md: "auto", lg: "auto" },
  gap: d = { sm: "10px", md: "20px", lg: "30px" },
  rowGap: c,
  columnGap: f,
  width: b = { sm: "100%", md: "90%", lg: "80%" },
  maxWidth: u = { sm: "100%", md: "800px", lg: "1200px" },
  height: a = { sm: "auto", md: "auto", lg: "auto" },
  padding: h = { sm: "10px", md: "20px", lg: "40px" },
  margin: p = { sm: "0 auto", md: "0 auto", lg: "0 auto" },
  textAlign: j = { sm: "left", md: "center", lg: "center" },
  backgroundColor: y = "#fff",
  border: C = { sm: "none", md: "1px solid #ddd", lg: "2px solid #ccc" },
  borderRadius: M = { sm: "0", md: "8px", lg: "12px" },
  boxShadow: S = {
    sm: "none",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 6px 10px rgba(0,0,0,0.15)"
  },
  overflow: L = { sm: "visible", md: "hidden", lg: "auto" },
  children: z,
  className: E,
  style: m
}) => {
  const [x, k] = $(
    () => Pe(window.innerWidth)
  );
  G(() => {
    const R = () => k(Pe(window.innerWidth));
    return window.addEventListener("resize", R), () => window.removeEventListener("resize", R);
  }, []);
  const I = ee(() => {
    const R = H(t, x, "block"), T = H(
      n,
      x,
      void 0
    ), N = H(
      o,
      x,
      void 0
    ), U = H(
      l,
      x,
      void 0
    ), D = H(
      i,
      x,
      void 0
    ), g = H(
      s,
      x,
      void 0
    ), v = H(d, x, void 0), F = H(c, x, void 0), _ = H(
      f,
      x,
      void 0
    ), B = H(b, x, "100%"), r = H(u, x, void 0), w = H(a, x, void 0), W = H(h, x, void 0), V = H(p, x, void 0), Y = H(
      j,
      x,
      void 0
    ), A = H(C, x, void 0), O = H(
      M,
      x,
      void 0
    ), X = H(
      S,
      x,
      void 0
    ), P = H(L, x, void 0);
    return {
      display: R,
      ...T && { flexDirection: T },
      ...N && { justifyContent: N },
      ...U && { alignItems: U },
      ...D && {
        gridTemplateColumns: D
      },
      ...g && {
        gridTemplateRows: g
      },
      ...v && { gap: v },
      ...F && { rowGap: F },
      ..._ && { columnGap: _ },
      width: B,
      ...r && { maxWidth: r },
      ...w && { height: w },
      ...W && { padding: W },
      ...V && { margin: V },
      ...Y && { textAlign: Y },
      backgroundColor: y,
      ...A && { border: A },
      ...O && { borderRadius: O },
      ...X && { boxShadow: X },
      ...P && { overflow: P },
      boxSizing: "border-box",
      ...m
    };
  }, [
    x,
    t,
    n,
    o,
    l,
    i,
    s,
    d,
    c,
    f,
    b,
    u,
    a,
    h,
    p,
    j,
    y,
    C,
    M,
    S,
    L,
    m
  ]);
  return /* @__PURE__ */ e.jsx("div", { className: E, style: I, children: z });
}, Dt = ({
  items: t,
  allowMultiple: n = !1,
  defaultOpenIndex: o = [],
  borderColor: l = "#d1d5db",
  backgroundColor: i = "#ffffff",
  textColor: s = "#111827",
  hoverBgColor: d = "#f3f4f6",
  hoverTextColor: c = "#111827",
  paddingVertical: f = "16px",
  paddingHorizontal: b = "16px",
  margin: u = "12px 0",
  iconOpen: a = "−",
  iconClose: h = "+",
  transitionDuration: p = "300ms",
  borderRadius: j = "8px",
  shadow: y = "0 2px 8px rgba(0, 0, 0, 0.05)",
  contentPadding: C = "16px",
  fontSize: M = "16px",
  fontWeight: S = "600",
  iconSize: L = "18px",
  contentFontSize: z = "14px",
  contentFontWeight: E = "400",
  contentBackgroundColor: m = "#ffffff",
  contentTextColor: x = "#111827",
  className: k,
  style: I
}) => {
  const [R, T] = $(o), N = J([]), U = J([]);
  G(() => {
    N.current.forEach((g, v) => {
      g && (g.style.maxHeight = R.includes(v) ? `${g.scrollHeight}px` : "0px");
    });
  }, [R]);
  const D = (g) => {
    T(
      (v) => n ? v.includes(g) ? v.filter((F) => F !== g) : [...v, g] : v.includes(g) ? [] : [g]
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: k, style: { width: "100%", ...I }, children: t.map((g, v) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        border: `1px solid ${l}`,
        borderRadius: j,
        margin: u,
        boxShadow: y,
        overflow: "hidden",
        transition: `all ${p} ease`
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: (F) => {
              U.current[v] = F;
            },
            onClick: () => D(v),
            style: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: i,
              color: s,
              padding: `${f} ${b}`,
              fontWeight: S,
              fontSize: M,
              cursor: "pointer",
              outline: "none",
              border: "none",
              transition: `all ${p}`
            },
            onMouseEnter: (F) => {
              F.currentTarget.style.backgroundColor = d, F.currentTarget.style.color = c;
            },
            onMouseLeave: (F) => {
              F.currentTarget.style.backgroundColor = i, F.currentTarget.style.color = s;
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: g.title }),
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: L }, children: R.includes(v) ? a : h })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: (F) => {
              N.current[v] = F;
            },
            style: {
              overflow: "hidden",
              maxHeight: R.includes(v) ? `${N.current[v]?.scrollHeight}px` : "0px",
              transition: `max-height ${p} ease-in-out`
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                style: {
                  borderTop: `1px solid ${l}`,
                  backgroundColor: m,
                  color: x,
                  padding: C,
                  fontSize: z,
                  fontWeight: E
                },
                children: g.content
              }
            )
          }
        )
      ]
    },
    v
  )) });
}, Bt = ({
  type: t,
  name: n,
  options: o,
  selectedValues: l,
  onChange: i,
  disabled: s = !1,
  readOnly: d = !1,
  required: c = !1,
  error: f,
  className: b = "",
  customIcon: u,
  style: a,
  labelStyle: h,
  iconSize: p = 20,
  iconCheckedBgColor: j = "#2563eb",
  // blue-600
  iconUncheckedBorderColor: y = "#9ca3af",
  // gray-400
  textColor: C = "#374151",
  // gray-700
  errorStyle: M
}) => {
  const S = t === "checkbox", L = (z) => {
    if (i)
      if (S) {
        const E = Array.isArray(l) ? l.includes(z) ? l.filter((m) => m !== z) : [...l, z] : [z];
        i(E);
      } else
        i(z);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: b,
      style: { display: "flex", flexDirection: "column", gap: 8, ...a },
      role: t,
      "aria-disabled": s,
      children: [
        o.map((z) => {
          const E = S ? Array.isArray(l) && l.includes(z.value) : l === z.value;
          return /* @__PURE__ */ e.jsxs(
            "label",
            {
              style: {
                display: "flex",
                alignItems: "center",
                cursor: s ? "not-allowed" : "pointer",
                opacity: s ? 0.6 : 1,
                gap: 8,
                userSelect: "none",
                ...h
              },
              children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: t,
                    name: n,
                    value: z.value,
                    checked: E,
                    disabled: s || d,
                    required: c,
                    onChange: () => L(z.value),
                    style: { display: "none" }
                  }
                ),
                u ? u(E) : /* @__PURE__ */ e.jsxs(
                  "span",
                  {
                    style: {
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: p,
                      height: p,
                      borderRadius: S ? 4 : "50%",
                      border: `2px solid ${E ? j : y}`,
                      backgroundColor: E ? j : "transparent",
                      transition: "all 0.2s ease",
                      flexShrink: 0
                    },
                    children: [
                      E && !S && /* @__PURE__ */ e.jsx(
                        "span",
                        {
                          style: {
                            width: p / 2,
                            height: p / 2,
                            borderRadius: "50%",
                            backgroundColor: "white"
                          }
                        }
                      ),
                      E && S && /* @__PURE__ */ e.jsx(
                        "svg",
                        {
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "white",
                          strokeWidth: 3,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          style: { width: p * 0.6, height: p * 0.6 },
                          children: /* @__PURE__ */ e.jsx("polyline", { points: "20 6 9 17 4 12" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { style: { color: C, fontSize: 14 }, children: z.label })
              ]
            },
            z.value
          );
        }),
        f && /* @__PURE__ */ e.jsx(
          "p",
          {
            role: "alert",
            style: {
              color: "#dc2626",
              // red-600
              fontSize: 12,
              marginTop: 4,
              ...M
            },
            children: f
          }
        )
      ]
    }
  );
}, Yt = ({
  label: t = "Open Drawer",
  icon: n,
  iconPosition: o = "left",
  onClick: l,
  style: i = {}
}) => /* @__PURE__ */ e.jsxs(
  "button",
  {
    onClick: l,
    style: {
      padding: "10px 16px",
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      fontSize: "14px",
      gap: "8px",
      ...i
    },
    children: [
      n && o === "left" && n,
      t,
      n && o === "right" && n
    ]
  }
), Vt = ({
  open: t,
  onClose: n,
  position: o = "right",
  width: l = "300px",
  height: i = "300px",
  backgroundColor: s = "#fff",
  transitionDuration: d = 300,
  style: c = {},
  children: f,
  showCloseButton: b = !0,
  closeButtonStyle: u = {}
}) => {
  const [a, h] = $(t);
  G(() => {
    t ? h(!0) : setTimeout(() => h(!1), d);
  }, [t, d]);
  const p = ee(() => {
    if (t) return "translate(0, 0)";
    switch (o) {
      case "left":
        return "translateX(-100%)";
      case "right":
        return "translateX(100%)";
      case "top":
        return "translateY(-100%)";
      case "bottom":
        return "translateY(100%)";
      default:
        return "translate(0, 0)";
    }
  }, [t, o]), j = {
    position: "fixed",
    zIndex: 1e3,
    backgroundColor: s,
    transition: `transform ${d}ms ease, opacity ${d}ms ease`,
    transform: p,
    opacity: t ? 1 : 0,
    ...c,
    ...o === "left" || o === "right" ? { top: 0, [o]: 0, width: l, height: "100%" } : { left: 0, [o]: 0, height: i, width: "100%" }
  }, y = {
    position: "fixed",
    display: a ? "block" : "none",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    transition: `opacity ${d}ms ease`,
    opacity: t ? 1 : 0,
    pointerEvents: t ? "auto" : "none"
  }, C = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#000"
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { style: y, onClick: n }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: {
          ...j,
          display: "block",
          visibility: a ? "visible" : "hidden",
          pointerEvents: t ? "auto" : "none"
        },
        children: [
          b && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: n,
              style: { ...C, ...u },
              children: /* @__PURE__ */ e.jsx(ie, { size: 20, color: "rgba(255, 0, 0, 1)" })
            }
          ),
          f
        ]
      }
    )
  ] });
}, Ut = ({
  options: t,
  value: n,
  defaultValue: o,
  onChange: l,
  placeholder: i = "Select an option",
  disabled: s = !1,
  borderColor: d = "#ccc",
  backgroundColor: c = "#fff",
  textColor: f = "#333",
  hoverColor: b = "#f0f0f0",
  padding: u = "12px 16px",
  margin: a = "0 0 1rem 0",
  dropdownWidth: h = "100%",
  dropdownHeight: p = "200px",
  borderRadius: j = "8px",
  boxShadow: y = "0 4px 8px rgba(0,0,0,0.1)",
  optionPadding: C = "10px 12px",
  optionGap: M = "8px",
  transitionDuration: S = "0.25s",
  className: L = "",
  dropdownStyle: z,
  dropdownClassName: E = "",
  optionStyle: m,
  optionClassName: x = "",
  iconPrefix: k,
  iconSuffix: I
}) => {
  const [R, T] = $(o), [N, U] = $(!1), D = J(null);
  G(() => {
    const _ = (B) => {
      D.current && !D.current.contains(B.target) && U(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, []);
  const g = (_) => {
    T(_), U(!1), l && l(_);
  }, v = n ?? R, F = t.find((_) => _.value === v);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: D,
      className: L,
      style: {
        position: "relative",
        width: h,
        margin: a,
        fontFamily: "sans-serif",
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => U((_) => !_),
            disabled: s,
            "aria-haspopup": "listbox",
            "aria-expanded": N,
            style: {
              width: "100%",
              padding: u,
              backgroundColor: c,
              color: f,
              border: `1px solid ${d}`,
              borderRadius: j,
              boxShadow: s ? "none" : y,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: s ? "not-allowed" : "pointer",
              opacity: s ? 0.6 : 1,
              transition: `all ${S} ease-in-out`
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: M }, children: [
                k && /* @__PURE__ */ e.jsx("span", { children: k }),
                /* @__PURE__ */ e.jsx("span", { children: F?.label || i })
              ] }),
              I || /* @__PURE__ */ e.jsx("span", { style: { marginLeft: "8px" }, children: "▼" })
            ]
          }
        ),
        N && /* @__PURE__ */ e.jsx(
          "ul",
          {
            role: "listbox",
            className: E,
            style: {
              position: "absolute",
              top: "100%",
              left: 0,
              zIndex: 1e3,
              width: "100%",
              maxHeight: p,
              overflowY: "auto",
              backgroundColor: c,
              border: `1px solid ${d}`,
              borderRadius: j,
              boxShadow: y,
              marginTop: "4px",
              transition: `all ${S} ease`,
              ...z
            },
            children: t.map((_) => /* @__PURE__ */ e.jsxs(
              "li",
              {
                onClick: () => g(_.value),
                role: "option",
                className: x,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: M,
                  padding: C,
                  cursor: "pointer",
                  backgroundColor: R === _.value ? b : c,
                  transition: `background ${S}`,
                  ...m
                },
                onMouseEnter: (B) => B.currentTarget.style.backgroundColor = b,
                onMouseLeave: (B) => B.currentTarget.style.backgroundColor = R === _.value ? b : c,
                children: [
                  _.icon && /* @__PURE__ */ e.jsx("span", { children: _.icon }),
                  _.label
                ]
              },
              _.value
            ))
          }
        )
      ]
    }
  );
}, Ht = ({
  columns: t,
  data: n,
  className: o = "",
  pagination: l = !0,
  rowsPerPage: i = 5,
  colors: s = {
    headerBg: "#3b82f6",
    headerText: "#ffffff",
    rowBg: "#ffffff",
    rowText: "#000000",
    borderColor: "#d1d5db",
    hoverBg: "#e5e7eb",
    paginationBg: "#d1d5db",
    paginationText: "#000000"
  },
  headerBorderRadius: d = "8px"
}) => {
  const [c, f] = $(null), [b, u] = $("asc"), [a, h] = $(1), [p, j] = $(null), y = (m, x) => {
    x && (c === m ? u(b === "asc" ? "desc" : "asc") : (f(m), u("asc")), h(1));
  }, C = ve.useMemo(() => c ? [...n].sort((m, x) => {
    const k = m[c], I = x[c];
    if (k == null && I == null) return 0;
    if (k == null) return b === "asc" ? -1 : 1;
    if (I == null) return b === "asc" ? 1 : -1;
    if (typeof k == "number" && typeof I == "number")
      return b === "asc" ? k - I : I - k;
    if (k instanceof Date && I instanceof Date)
      return b === "asc" ? k.getTime() - I.getTime() : I.getTime() - k.getTime();
    const R = String(k).toLowerCase(), T = String(I).toLowerCase();
    return R === T ? 0 : b === "asc" ? R > T ? 1 : -1 : R < T ? 1 : -1;
  }) : [...n], [n, c, b]), M = l ? C.slice(
    (a - 1) * i,
    a * i
  ) : C, S = Math.ceil(n.length / i), L = /* @__PURE__ */ e.jsx(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 576 512",
      height: "15px",
      width: "15px",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e.jsx("path", { d: "M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0z" })
    }
  ), z = /* @__PURE__ */ e.jsx(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 576 512",
      height: "15px",
      width: "15px",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e.jsx("path", { d: "M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32z" })
    }
  ), E = /* @__PURE__ */ e.jsx(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 320 512",
      height: "15px",
      width: "15px",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e.jsx("path", { d: "M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3l0 293.5L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7l0-293.5 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z" })
    }
  );
  return /* @__PURE__ */ e.jsxs("div", { style: { overflowX: "auto", width: "100%" }, className: o, children: [
    /* @__PURE__ */ e.jsxs(
      "table",
      {
        style: {
          width: "100%",
          borderCollapse: "collapse",
          border: `1px solid ${s.borderColor}`,
          tableLayout: "auto",
          minWidth: "400px"
        },
        children: [
          /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { children: t.map(({ key: m, label: x, sortable: k, icon: I }, R) => /* @__PURE__ */ e.jsx(
            "th",
            {
              onClick: () => y(m, k),
              style: {
                padding: "12px",
                border: `1px solid ${s.borderColor}`,
                cursor: k ? "pointer" : "default",
                backgroundColor: s.headerBg,
                color: s.headerText,
                userSelect: "none",
                borderTopLeftRadius: R === 0 ? d : void 0,
                borderTopRightRadius: R === t.length - 1 ? d : void 0,
                textAlign: "center",
                whiteSpace: "nowrap"
                // Remove display here! Let <th> keep default 'table-cell'
              },
              "aria-sort": c === m ? b === "asc" ? "ascending" : "descending" : void 0,
              role: k ? "button" : void 0,
              tabIndex: k ? 0 : void 0,
              onKeyDown: (T) => {
                k && (T.key === "Enter" || T.key === " ") && (T.preventDefault(), y(m, k));
              },
              children: /* @__PURE__ */ e.jsxs(
                "div",
                {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    justifyContent: "center"
                  },
                  children: [
                    I && /* @__PURE__ */ e.jsx("span", { children: I }),
                    /* @__PURE__ */ e.jsx("span", { children: x }),
                    k && (c === m ? b === "asc" ? L : z : E)
                  ]
                }
              )
            },
            m
          )) }) }),
          /* @__PURE__ */ e.jsx("tbody", { children: M.map((m, x) => /* @__PURE__ */ e.jsx(
            "tr",
            {
              style: {
                backgroundColor: p === x ? s.hoverBg : s.rowBg,
                color: s.rowText,
                transition: "background-color 0.2s ease-in-out"
              },
              onMouseEnter: () => j(x),
              onMouseLeave: () => j(null),
              children: t.map(({ key: k }) => /* @__PURE__ */ e.jsx(
                "td",
                {
                  style: {
                    padding: "12px",
                    border: `1px solid ${s.borderColor}`,
                    whiteSpace: "nowrap"
                  },
                  children: m[k]
                },
                k
              ))
            },
            x
          )) })
        ]
      }
    ),
    l && S > 1 && /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "12px",
          padding: "8px",
          userSelect: "none"
        },
        children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "4px 10px",
                backgroundColor: s.paginationBg,
                color: s.paginationText,
                borderRadius: "6px",
                border: "none",
                opacity: a === 1 ? 0.5 : 1,
                cursor: a === 1 ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
                // sm size ~14px
              },
              disabled: a === 1,
              onClick: () => h((m) => Math.max(m - 1, 1)),
              "aria-label": "Previous page",
              type: "button",
              children: [
                /* @__PURE__ */ e.jsx(ke, { size: 16 }),
                "Prev"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("span", { style: { color: s.paginationText }, children: [
            "Page ",
            a,
            " / ",
            S
          ] }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "4px 10px",
                backgroundColor: s.paginationBg,
                color: s.paginationText,
                borderRadius: "6px",
                border: "none",
                opacity: a === S ? 0.5 : 1,
                cursor: a === S ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
              },
              disabled: a === S,
              onClick: () => h((m) => Math.min(m + 1, S)),
              "aria-label": "Next page",
              type: "button",
              children: [
                "Next",
                /* @__PURE__ */ e.jsx(Se, { size: 16 })
              ]
            }
          )
        ]
      }
    )
  ] });
}, qt = ({
  children: t,
  className: n = "",
  style: o = {},
  background: l = "#fff",
  backgroundImage: i,
  backgroundSize: s = "cover",
  backgroundPosition: d = "center",
  backgroundRepeat: c = "no-repeat",
  textColor: f = "#000",
  borderRadius: b = 12,
  padding: u = 24,
  margin: a = 0,
  maxWidth: h = "100%",
  boxShadow: p = "0 4px 12px rgba(0,0,0,0.1)",
  border: j = "none",
  display: y = "flex",
  flexDirection: C = "column",
  justifyContent: M = "flex-start",
  alignItems: S = "stretch",
  gap: L = 16
}) => {
  const z = {
    background: l,
    color: f,
    borderRadius: b,
    padding: u,
    margin: a,
    maxWidth: h,
    boxShadow: p,
    border: j,
    display: y,
    flexDirection: C,
    justifyContent: M,
    alignItems: S,
    gap: L,
    boxSizing: "border-box",
    // Background image styles if provided
    ...i ? {
      backgroundImage: `url(${i})`,
      backgroundSize: s,
      backgroundPosition: d,
      backgroundRepeat: c
    } : {},
    ...o
  };
  return /* @__PURE__ */ e.jsx("div", { className: n, style: z, children: t });
}, Ae = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Gt = ({
  columns: t = { sm: 1, md: 2, lg: 3 },
  gap: n = "16px",
  padding: o = "20px",
  alignItems: l = "stretch",
  justifyItems: i = "stretch",
  backgroundColor: s = "transparent",
  width: d = "100%",
  maxWidth: c = "100%",
  height: f = "auto",
  children: b,
  style: u
}) => {
  const [a, h] = $(
    Ae(window.innerWidth)
  );
  G(() => {
    const y = () => h(Ae(window.innerWidth));
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []);
  const p = ee(() => typeof t == "number" ? t : t[a] ?? 1, [t, a]), j = ee(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${p}, 1fr)`,
      gap: n,
      padding: o,
      alignItems: l,
      justifyItems: i,
      backgroundColor: s,
      width: d,
      maxWidth: c,
      height: f,
      boxSizing: "border-box",
      ...u
    }),
    [
      p,
      n,
      o,
      l,
      i,
      s,
      d,
      c,
      f,
      u
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: j, children: b });
}, Ne = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Xt = ({
  direction: t = "row",
  align: n = "center",
  justify: o = "space-between",
  gap: l = 16,
  padding: i = 20,
  backgroundColor: s = "transparent",
  width: d = "100%",
  maxWidth: c = "100%",
  height: f = "auto",
  style: b,
  children: u
}) => {
  const [a, h] = $(
    Ne(window.innerWidth)
  );
  G(() => {
    const y = () => h(Ne(window.innerWidth));
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []);
  const p = ee(() => typeof t == "string" ? t : t[a] ?? "row", [t, a]), j = ee(
    () => ({
      display: "flex",
      flexDirection: p,
      alignItems: n,
      justifyContent: o,
      gap: typeof l == "number" ? `${l}px` : l,
      padding: typeof i == "number" ? `${i}px` : i,
      backgroundColor: s,
      width: d,
      maxWidth: c,
      height: f,
      boxSizing: "border-box",
      ...b
    }),
    [
      p,
      n,
      o,
      l,
      i,
      s,
      d,
      c,
      f,
      b
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: j, children: u });
}, zt = {
  success: {
    bg: "#ecfdf5",
    border: "#34d399",
    iconColor: "#059669",
    Icon: /* @__PURE__ */ e.jsx(at, { size: 20 })
  },
  error: {
    bg: "#fef2f2",
    border: "#f87171",
    iconColor: "#dc2626",
    Icon: /* @__PURE__ */ e.jsx(it, { size: 20 })
  },
  warning: {
    bg: "#fffbeb",
    border: "#facc15",
    iconColor: "#d97706",
    Icon: /* @__PURE__ */ e.jsx(kt, { size: 20 })
  },
  info: {
    bg: "#eff6ff",
    border: "#3b82f6",
    iconColor: "#2563eb",
    Icon: /* @__PURE__ */ e.jsx(ft, { size: 20 })
  }
}, Rt = (t) => {
  const n = {
    position: "fixed",
    zIndex: 9999
  };
  switch (t) {
    case "top-left":
      return { ...n, top: "20px", left: "20px" };
    case "top-center":
      return { ...n, top: "20px", left: "50%", transform: "translateX(-50%)" };
    case "top-right":
      return { ...n, top: "20px", right: "20px" };
    case "bottom-left":
      return { ...n, bottom: "20px", left: "20px" };
    case "bottom-center":
      return { ...n, bottom: "20px", left: "50%", transform: "translateX(-50%)" };
    case "bottom-right":
    default:
      return { ...n, bottom: "20px", right: "20px" };
  }
}, Jt = ({
  title: t = "",
  description: n = "",
  type: o = "info",
  dismissible: l = !0,
  onClose: i,
  duration: s,
  icon: d,
  actionButton: c,
  position: f = "top-right",
  className: b,
  style: u
}) => {
  const [a, h] = $(!0);
  if (G(() => {
    if (s) {
      const S = setTimeout(() => {
        h(!1), i?.();
      }, s);
      return () => clearTimeout(S);
    }
  }, [s, i]), !a) return null;
  const { bg: p, border: j, iconColor: y, Icon: C } = zt[o], M = Rt(f);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: b,
      style: {
        ...M,
        display: "flex",
        gap: "12px",
        padding: "16px",
        backgroundColor: p,
        borderLeft: `4px solid ${j}`,
        borderRadius: "8px",
        color: "#111827",
        alignItems: "flex-start",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        animation: "slideIn 0.3s ease",
        maxWidth: "600px",
        width: "calc(100% - 40px)",
        ...u
        // ✅ User custom styles merged last
      },
      children: [
        /* @__PURE__ */ e.jsx("div", { style: { color: y, marginTop: "3px" }, children: d || C }),
        /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
          t && /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", marginBottom: "4px" }, children: t }),
          n && /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", color: "#374151" }, children: n }),
          c && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "10px" }, children: c })
        ] }),
        l && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              h(!1), i?.();
            },
            style: {
              background: "transparent",
              border: "none",
              color: "#6b7280",
              cursor: "pointer",
              marginLeft: "8px"
            },
            children: /* @__PURE__ */ e.jsx(ie, { size: 16 })
          }
        ),
        /* @__PURE__ */ e.jsx("style", { children: `
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        ` })
      ]
    }
  );
}, Zt = ({
  text: t,
  color: n = "#2563eb",
  textColor: o = "#fff",
  borderColor: l = "#2563eb",
  icon: i,
  iconPosition: s = "left",
  rounded: d = !1,
  borderRadius: c,
  borderWidth: f = "0",
  fontSize: b = "14px",
  fontWeight: u = 500,
  horizontalPadding: a = "10px",
  verticalPadding: h = "6px",
  margin: p = "0",
  shadow: j = "0 1px 4px rgba(0, 0, 0, 0.1)",
  notificationDot: y = !1,
  dotColor: C = "#ef4444",
  count: M,
  pulse: S = !1,
  style: L,
  onClick: z
}) => {
  const E = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: n,
    border: `${f} solid ${l}`,
    borderRadius: c || (d ? "9999px" : "6px"),
    padding: `${h} ${a}`,
    fontSize: b,
    fontWeight: u,
    margin: p,
    boxShadow: j,
    position: "relative",
    cursor: z ? "pointer" : "default",
    ...L
  }, m = {
    color: o,
    display: "inline"
  }, x = {
    display: "flex",
    alignItems: "center",
    color: o
  }, k = {
    ...x,
    marginRight: t ? "6px" : "0px"
  }, I = {
    ...x,
    marginLeft: t ? "6px" : "0px"
  }, R = {
    position: "absolute",
    top: "-6px",
    right: "-6px",
    backgroundColor: "#ef4444",
    color: "#fff",
    borderRadius: "50%",
    minWidth: "20px",
    height: "20px",
    fontSize: "12px",
    padding: "0 6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    zIndex: 1
  }, T = {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    height: "8px",
    width: "8px",
    backgroundColor: C,
    borderRadius: "50%",
    zIndex: 1,
    animation: S ? "pulseAnim 1.2s infinite" : void 0
  };
  return /* @__PURE__ */ e.jsxs("span", { style: E, onClick: z, children: [
    y && /* @__PURE__ */ e.jsx("span", { style: T }),
    typeof M < "u" && /* @__PURE__ */ e.jsx("span", { style: R, children: M }),
    i && s === "left" && /* @__PURE__ */ e.jsx("span", { style: k, children: i }),
    t && /* @__PURE__ */ e.jsx("span", { style: m, children: t }),
    i && s === "right" && /* @__PURE__ */ e.jsx("span", { style: I, children: i }),
    /* @__PURE__ */ e.jsx("style", { children: `
          @keyframes pulseAnim {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
        ` })
  ] });
}, Kt = ({
  isOpen: t,
  onClose: n,
  children: o,
  overlayStyle: l,
  modalStyle: i,
  closeButtonStyle: s
}) => t ? /* @__PURE__ */ e.jsx(
  "div",
  {
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1e3,
      ...l
    },
    onClick: n,
    children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: {
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: 12,
          width: "90vw",
          maxWidth: 700,
          maxHeight: "90vh",
          overflowY: "auto",
          padding: 24,
          boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
          ...i
        },
        onClick: (d) => d.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: n,
              "aria-label": "Close modal",
              style: {
                position: "absolute",
                top: 16,
                right: 16,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 4,
                color: "#444",
                transition: "color 0.2s ease",
                ...s
              },
              onMouseEnter: (d) => d.currentTarget.style.color = "#000",
              onMouseLeave: (d) => d.currentTarget.style.color = "#444",
              children: /* @__PURE__ */ e.jsx(ie, { size: 24 })
            }
          ),
          o
        ]
      }
    )
  }
) : null, De = {
  small: 32,
  medium: 48,
  large: 64
}, We = {
  online: "#4ade80",
  // green-400
  offline: "#f87171"
  // red-400
}, Mt = ({
  src: t,
  alt: n = "User Avatar",
  size: o = "medium",
  isOnline: l = !1,
  isOffline: i = !1,
  className: s = "",
  style: d
}) => {
  const c = De[o];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        position: "relative",
        width: c,
        height: c,
        borderRadius: "50%",
        overflow: "hidden",
        display: "inline-block",
        flexShrink: 0,
        ...d
      },
      className: s,
      "aria-label": n,
      role: "img",
      children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t,
            alt: n,
            width: c,
            height: c,
            loading: "lazy",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              borderRadius: "50%"
            }
          }
        ),
        (l || i) && /* @__PURE__ */ e.jsx(
          "span",
          {
            "aria-label": l ? "Online" : "Offline",
            title: l ? "Online" : "Offline",
            style: {
              position: "absolute",
              bottom: 2,
              right: 2,
              width: c / 4,
              height: c / 4,
              borderRadius: "50%",
              border: "2px solid white",
              backgroundColor: l ? We.online : We.offline,
              boxShadow: "0 0 2px rgba(0,0,0,0.3)"
            }
          }
        )
      ]
    }
  );
}, Qt = ({
  avatars: t,
  max: n = 5,
  size: o = "medium",
  className: l = "",
  style: i
}) => {
  const s = De[o], d = t.slice(0, n), c = t.length - n;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: s / 6,
        ...i
      },
      className: l,
      "aria-label": `Group avatars, ${t.length} members`,
      role: "group",
      children: [
        d.map(({ src: f, alt: b, isOnline: u, isOffline: a }, h) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              marginLeft: h === 0 ? 0 : -(s / 3),
              boxShadow: "0 0 0 2px white",
              borderRadius: "50%",
              flexShrink: 0,
              cursor: "pointer"
            },
            title: b,
            children: /* @__PURE__ */ e.jsx(
              Mt,
              {
                src: f,
                alt: b,
                size: o,
                isOnline: u,
                isOffline: a
              }
            )
          },
          h
        )),
        c > 0 && /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              marginLeft: -(s / 3),
              width: s,
              height: s,
              borderRadius: "50%",
              backgroundColor: "#ccc",
              color: "#444",
              fontSize: s / 2.5,
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 0 0 2px white",
              userSelect: "none"
            },
            "aria-label": `${c} more members`,
            title: `${c} more members`,
            children: [
              "+",
              c
            ]
          }
        )
      ]
    }
  );
}, er = ({
  tracks: t,
  className: n = "",
  primaryColor: o = "#3b82f6",
  // default blue
  backgroundColor: l = "#fff",
  textColor: i = "#222",
  secondaryColor: s = "#e5e7eb",
  autoplay: d = !1,
  loop: c = !1
}) => {
  const [f, b] = $(null), u = J(null), a = J(null), [h, p] = $(!1), [j, y] = $(0), [C, M] = $(0), [S, L] = $(0.5), [z, E] = $(!1), [m, x] = $(c);
  G(() => {
    u.current && (u.current.volume = S);
  }, [S]), G(() => {
    u.current && (u.current.loop = m);
  }, [m]), G(() => {
    f === null && u.current && (u.current.pause(), p(!1), y(0), M(0));
  }, [f]);
  const k = (g) => {
    if (f === g) {
      if (!u.current) return;
      u.current.paused ? (u.current.play(), p(!0)) : (u.current.pause(), p(!1));
    } else
      b(g), setTimeout(() => {
        u.current?.play(), p(!0);
      }, 100);
  }, I = () => {
    u.current && (y(u.current.currentTime), M(u.current.duration));
  }, R = (g) => {
    if (!u.current) return;
    const v = g.currentTarget.getBoundingClientRect(), B = (g.clientX - v.left) / v.width * C;
    u.current.currentTime = B, y(B);
  }, T = (g) => {
    if (u.current) {
      let v = u.current.currentTime + g;
      v = Math.min(Math.max(v, 0), C), u.current.currentTime = v, y(v);
    }
  }, N = () => {
    a.current && (z ? document.exitFullscreen?.() : a.current.requestFullscreen?.(), E(!z));
  }, U = () => {
    L((g) => g > 0 ? 0 : 0.5);
  }, D = (g) => {
    if (isNaN(g)) return "0:00";
    const v = Math.floor(g / 60), F = Math.floor(g % 60);
    return `${v}:${F < 10 ? "0" : ""}${F}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "section",
    {
      className: n,
      style: {
        maxWidth: "480px",
        margin: "auto",
        backgroundColor: l,
        color: i,
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        userSelect: "none"
      },
      "aria-label": "Audio gallery",
      children: [
        /* @__PURE__ */ e.jsx(
          "h2",
          {
            style: {
              marginBottom: "16px",
              fontSize: "1.25rem",
              fontWeight: "700"
            },
            children: "🎵 Audio Gallery"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "ul",
          {
            style: {
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            },
            children: t.map(({ src: g, title: v, thumbnail: F }, _) => {
              const B = f === _ && h;
              return /* @__PURE__ */ e.jsxs(
                "li",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px",
                    borderRadius: "10px",
                    backgroundColor: B ? o : s,
                    color: B ? "#fff" : i,
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                  },
                  onClick: () => k(_),
                  tabIndex: 0,
                  role: "button",
                  "aria-pressed": B,
                  onKeyDown: (r) => {
                    (r.key === "Enter" || r.key === " ") && k(_);
                  },
                  "aria-label": `${B ? "Pause" : "Play"} ${v}`,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "span",
                      {
                        style: {
                          fontWeight: "600",
                          fontSize: "1rem"
                        },
                        children: v
                      }
                    ),
                    B ? /* @__PURE__ */ e.jsx(se, { size: 24, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(oe, { size: 24, "aria-hidden": "true" })
                  ]
                },
                _
              );
            })
          }
        ),
        f !== null && /* @__PURE__ */ e.jsxs(
          "article",
          {
            ref: a,
            style: {
              marginTop: "24px",
              padding: "12px",
              borderRadius: "12px",
              backgroundColor: s,
              color: i,
              boxSizing: "border-box"
            },
            "aria-label": `Audio player for ${t[f].title}`,
            children: [
              t[f].thumbnail && /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: t[f].thumbnail,
                  alt: `${t[f].title} thumbnail`,
                  loading: "lazy",
                  width: "100%",
                  style: {
                    borderRadius: "12px",
                    marginBottom: "12px",
                    objectFit: "cover",
                    maxHeight: "180px"
                  }
                }
              ),
              /* @__PURE__ */ e.jsx(
                "h3",
                {
                  style: {
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    marginBottom: "8px"
                  },
                  children: t[f].title
                }
              ),
              /* @__PURE__ */ e.jsx(
                "audio",
                {
                  ref: u,
                  src: t[f].src,
                  autoPlay: d,
                  loop: m,
                  onTimeUpdate: I,
                  onEnded: () => p(!1),
                  onLoadedMetadata: I,
                  style: { display: "none" },
                  preload: "metadata"
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                    flexWrap: "wrap"
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => T(-10),
                        "aria-label": "Skip back 10 seconds",
                        style: te(i, o),
                        children: /* @__PURE__ */ e.jsx(he, { size: 20 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => {
                          u.current && (h ? u.current.pause() : u.current.play(), p(!h));
                        },
                        "aria-label": h ? "Pause" : "Play",
                        style: {
                          ...te("#fff", o),
                          borderRadius: "9999px",
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        },
                        children: h ? /* @__PURE__ */ e.jsx(se, { size: 24, color: "#fff" }) : /* @__PURE__ */ e.jsx(oe, { size: 24, color: "#fff" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => T(10),
                        "aria-label": "Skip forward 10 seconds",
                        style: te(i, o),
                        children: /* @__PURE__ */ e.jsx(ge, { size: 20 })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "16px",
                    flexWrap: "wrap",
                    userSelect: "none"
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "time",
                      {
                        dateTime: `PT${Math.floor(j / 60)}M${Math.floor(
                          j % 60
                        )}S`,
                        style: { minWidth: "40px", fontSize: "0.9rem" },
                        "aria-label": "Current playback time",
                        children: D(j)
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        onClick: R,
                        role: "slider",
                        "aria-valuemin": 0,
                        "aria-valuemax": C,
                        "aria-valuenow": j,
                        tabIndex: 0,
                        onKeyDown: (g) => {
                          u.current && (g.key === "ArrowRight" ? T(5) : g.key === "ArrowLeft" && T(-5));
                        },
                        style: {
                          flex: 1,
                          height: "8px",
                          borderRadius: "8px",
                          backgroundColor: "#ccc",
                          cursor: "pointer",
                          position: "relative",
                          minWidth: "120px"
                        },
                        "aria-label": "Seek playback position",
                        children: /* @__PURE__ */ e.jsx(
                          "div",
                          {
                            style: {
                              width: `${j / C * 100 || 0}%`,
                              height: "100%",
                              backgroundColor: o,
                              borderRadius: "8px"
                            }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "time",
                      {
                        dateTime: `PT${Math.floor(C / 60)}M${Math.floor(
                          C % 60
                        )}S`,
                        style: { minWidth: "40px", fontSize: "0.9rem", color: "#666" },
                        "aria-label": "Total duration",
                        children: [
                          "/ ",
                          D(C)
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  style: {
                    marginTop: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "16px",
                    flexWrap: "wrap"
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => x(!m),
                        "aria-label": "Toggle Loop",
                        style: te(
                          m ? o : i,
                          m ? "#e0f2fe" : "transparent"
                        ),
                        children: /* @__PURE__ */ e.jsx(
                          fe,
                          {
                            size: 20,
                            color: m ? o : i,
                            "aria-hidden": "true"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: U,
                        "aria-label": S > 0 ? "Mute" : "Unmute",
                        style: te(i, "transparent"),
                        children: S > 0 ? /* @__PURE__ */ e.jsx(be, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(me, { size: 20, "aria-hidden": "true" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: N,
                        "aria-label": z ? "Exit Fullscreen" : "Enter Fullscreen",
                        style: te(i, "transparent"),
                        children: z ? /* @__PURE__ */ e.jsx(xe, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(pe, { size: 20, "aria-hidden": "true" })
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};
function te(t, n) {
  return {
    border: "none",
    backgroundColor: n,
    color: t,
    cursor: "pointer",
    padding: "6px 10px",
    borderRadius: "8px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s ease"
  };
}
const tr = ({
  videos: t,
  columns: n = 3,
  responsiveColumns: o,
  gap: l = "10px",
  layout: i = "grid",
  lightbox: s = !0,
  autoPlay: d = !1,
  loop: c = !1,
  muted: f = !1,
  controls: b = !0,
  className: u = ""
}) => {
  const [a, h] = $(null), [p, j] = $(
    typeof window < "u" ? window.innerWidth : 1024
  ), [y, C] = $(n);
  G(() => {
    function m() {
      const x = window.innerWidth;
      if (j(x), !o) {
        C(n);
        return;
      }
      x < 640 ? C(o.mobile ?? n) : x < 1024 ? C(o.tablet ?? n) : C(o.desktop ?? n);
    }
    if (typeof window < "u")
      return m(), window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, [n, o]);
  const M = () => h(null), S = (m) => {
    m.stopPropagation(), a !== null && h((a - 1 + t.length) % t.length);
  }, L = (m) => {
    m.stopPropagation(), a !== null && h((a + 1) % t.length);
  }, z = ({
    src: m,
    poster: x,
    autoPlay: k = !1,
    loop: I = !1,
    muted: R = !1,
    controls: T = !1,
    width: N = "100%",
    height: U = "150px",
    borderRadius: D = "12px",
    backgroundColor: g = "#1e1e1e",
    primaryColor: v = "#ff4081",
    padding: F = "16px",
    className: _,
    onClick: B
  }) => {
    const r = J(null), w = J(null), [W, V] = $(k), [Y, A] = $(0), [O, X] = $(0), [P, Z] = $(R ? 0 : 0.5), [K, le] = $(R), [ae, Be] = $(!1), [ce, Ye] = $(I);
    G(() => {
      r.current && (r.current.volume = P, r.current.loop = ce, r.current.muted = K);
    }, [P, ce, K]);
    const Ve = () => {
      r.current && (W ? r.current.pause() : r.current.play(), V(!W));
    }, Ce = () => {
      r.current && (A(r.current.currentTime), X(r.current.duration));
    }, Ue = (Q) => {
      if (!r.current || !Q.currentTarget) return;
      const de = Q.currentTarget.getBoundingClientRect(), Me = (Q.clientX - de.left) / de.width * O;
      r.current.currentTime = Me, A(Me);
    }, ze = (Q) => {
      r.current && (r.current.currentTime += Q);
    }, He = () => {
      w.current && (ae ? document.exitFullscreen?.() : w.current.requestFullscreen?.(), Be(!ae));
    }, qe = () => {
      K ? (le(!1), P === 0 && Z(0.5)) : (le(!0), Z(0));
    }, Re = (Q) => {
      if (isNaN(Q)) return "0:00";
      const de = Math.floor(Q / 60), ye = Math.floor(Q % 60);
      return `${de}:${ye < 10 ? "0" : ""}${ye}`;
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: w,
        onClick: B,
        className: _,
        style: {
          position: "relative",
          width: N,
          backgroundColor: g,
          borderRadius: D,
          color: "#fff",
          overflow: "hidden",
          padding: F,
          boxSizing: "border-box",
          maxWidth: "100%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          cursor: B ? "pointer" : "default",
          userSelect: "none"
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "video",
            {
              ref: r,
              src: m,
              poster: x,
              autoPlay: k,
              loop: I,
              muted: R,
              controls: T,
              onTimeUpdate: Ce,
              onLoadedMetadata: Ce,
              style: {
                width: "100%",
                height: U,
                borderRadius: D,
                objectFit: "cover",
                backgroundColor: "#000"
              }
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginTop: "10px",
                flexWrap: "wrap"
              },
              children: [
                /* @__PURE__ */ e.jsx("button", { onClick: () => ze(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: Ve,
                    style: {
                      background: v,
                      borderRadius: "9999px",
                      padding: "10px",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer"
                    },
                    "aria-label": W ? "Pause" : "Play",
                    children: W ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: () => ze(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "8px",
                gap: "12px",
                flexWrap: "wrap"
              },
              children: [
                /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    style: { flexShrink: 0, minWidth: "60px", textAlign: "center" },
                    children: [
                      /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: Re(Y) }),
                      /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                        " ",
                        "/ ",
                        Re(O)
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    onClick: Ue,
                    style: {
                      flex: 1,
                      height: "8px",
                      background: "#444",
                      borderRadius: "4px",
                      cursor: "pointer",
                      position: "relative",
                      minWidth: "100px"
                    },
                    children: /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        style: {
                          width: `${Y / O * 100 || 0}%`,
                          height: "100%",
                          background: v,
                          borderRadius: "4px"
                        }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => Ye(!ce),
                      "aria-label": "Toggle Loop",
                      type: "button",
                      children: /* @__PURE__ */ e.jsx(
                        fe,
                        {
                          size: 18,
                          color: ce ? v : void 0
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: qe,
                      "aria-label": K ? "Unmute" : "Mute",
                      type: "button",
                      children: K ? /* @__PURE__ */ e.jsx(me, { size: 18 }) : /* @__PURE__ */ e.jsx(be, { size: 18 })
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: He,
                      "aria-label": ae ? "Exit Fullscreen" : "Fullscreen",
                      type: "button",
                      children: ae ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 })
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    );
  }, E = () => p < 640 ? "120px" : p < 1024 ? "150px" : "180px";
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${u}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${i === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${y}, 1fr)`,
          gap: l
        },
        children: t.map((m, x) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "relative",
              overflow: "hidden",
              borderRadius: 12,
              cursor: s ? "pointer" : "default"
            },
            onClick: () => s && h(x),
            children: /* @__PURE__ */ e.jsx(
              z,
              {
                src: m.src,
                poster: m.poster,
                autoPlay: d,
                loop: c,
                muted: f,
                controls: b,
                height: E(),
                borderRadius: "12px",
                padding: "8px",
                primaryColor: "#ff4081",
                onClick: (k) => k.stopPropagation()
              }
            )
          },
          x
        ))
      }
    ),
    s && a !== null && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: M,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Video preview",
        style: {
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: S,
              "aria-label": "Previous video",
              style: {
                position: "absolute",
                left: 20,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 8,
                borderRadius: "50%",
                userSelect: "none"
              },
              type: "button",
              children: /* @__PURE__ */ e.jsx(ke, { size: 32 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            z,
            {
              src: t[a].src,
              poster: t[a].poster,
              autoPlay: !0,
              controls: !0,
              muted: f,
              width: "80vw",
              height: "45vw",
              borderRadius: "16px",
              padding: "16px",
              primaryColor: "#ff4081",
              onClick: (m) => m.stopPropagation()
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: L,
              "aria-label": "Next video",
              style: {
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 8,
                borderRadius: "50%",
                userSelect: "none"
              },
              type: "button",
              children: /* @__PURE__ */ e.jsx(Se, { size: 32 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: M,
              "aria-label": "Close preview",
              style: {
                position: "absolute",
                top: 20,
                right: 20,
                color: "white",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 8,
                borderRadius: "50%",
                userSelect: "none"
              },
              type: "button",
              children: /* @__PURE__ */ e.jsx(ie, { size: 28 })
            }
          )
        ]
      }
    )
  ] });
}, rr = ({
  images: t,
  columns: n = 3,
  gap: o = "10px",
  layout: l = "grid",
  lightbox: i = !0,
  className: s = ""
}) => {
  const [d, c] = $(null), f = () => c(null), b = (a) => {
    a.stopPropagation(), d !== null && c((d - 1 + t.length) % t.length);
  }, u = (a) => {
    a.stopPropagation(), d !== null && c((d + 1) % t.length);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${s}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${l === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${n}, 1fr)`,
          gap: o
        },
        children: t.map((a, h) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "relative overflow-hidden rounded-lg cursor-pointer",
            onClick: () => i && c(h),
            children: /* @__PURE__ */ e.jsx(
              _e,
              {
                src: a.src,
                alt: a.alt || "Gallery Image",
                lazyLoad: !0,
                className: "w-full h-auto object-cover transition-transform duration-300 hover:scale-105",
                style: { display: "block", width: "100%", height: "auto" },
                hoverScale: 1.05,
                transitionDuration: "0.3s"
              }
            )
          },
          h
        ))
      }
    ),
    i && d !== null && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50",
        onClick: f,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Image preview",
        children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: b,
              "aria-label": "Previous image",
              className: "absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-black/50",
              children: /* @__PURE__ */ e.jsx(ke, { size: 32 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            _e,
            {
              src: t[d].src,
              alt: t[d].alt || "Preview",
              className: "max-w-full max-h-full",
              lazyLoad: !0,
              onClick: (a) => a.stopPropagation()
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: u,
              "aria-label": "Next image",
              className: "absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-black/50",
              children: /* @__PURE__ */ e.jsx(Se, { size: 32 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "absolute top-4 right-4 text-white p-2 rounded-full hover:bg-black/50",
              onClick: f,
              "aria-label": "Close preview",
              children: /* @__PURE__ */ e.jsx(ie, { size: 28 })
            }
          )
        ]
      }
    )
  ] });
};
export {
  Dt as Accordion,
  Jt as Alert,
  er as AudioGallery,
  Ft as AudioPlayer,
  Mt as Avatar,
  Qt as AvatarGroup,
  Zt as Badge,
  It as Button,
  qt as Card,
  Bt as CheckRadio,
  Ot as Container,
  Vt as Drawer,
  Yt as DrawerButton,
  Ut as Dropdown,
  Xt as Flexbox,
  Gt as GridView,
  _e as Image,
  rr as ImageGallery,
  _t as Input,
  Pt as LeftTabs,
  Lt as List,
  Kt as Modal,
  Nt as RightTabs,
  Ht as Table,
  Et as Text,
  At as TopTabs,
  tr as VideoGallery,
  Wt as VideoPlayer
};
