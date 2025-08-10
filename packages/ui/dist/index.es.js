import Pe, { useMemo as ee, forwardRef as ve, createElement as je, useRef as J, useState as R, useImperativeHandle as Ge, useEffect as G } from "react";
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
var ze;
function Xe() {
  if (ze) return re;
  ze = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function o(i, l, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), l.key !== void 0 && (a = "" + l.key), "key" in l) {
      s = {};
      for (var p in l)
        p !== "key" && (s[p] = l[p]);
    } else s = l;
    return l = s.ref, {
      $$typeof: t,
      type: i,
      key: a,
      ref: l !== void 0 ? l : null,
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
var Re;
function Je() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === I ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case y:
          return "Fragment";
        case z:
          return "Profiler";
        case T:
          return "StrictMode";
        case S:
          return "Suspense";
        case k:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case v:
            return "Portal";
          case E:
            return (r.displayName || "Context") + ".Provider";
          case C:
            return (r._context.displayName || "Context") + ".Consumer";
          case g:
            var w = r.render;
            return r = r.displayName, r || (r = w.displayName || w.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case b:
            return w = r.displayName || null, w !== null ? w : t(r.type) || "Memo";
          case F:
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
        var P = w.error, U = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return P.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), n(r);
      }
    }
    function i(r) {
      if (r === y) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === F)
        return "<...>";
      try {
        var w = t(r);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var r = M.A;
      return r === null ? null : r.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(r) {
      if (L.call(r, "key")) {
        var w = Object.getOwnPropertyDescriptor(r, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function p(r, w) {
      function P() {
        h || (h = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: P,
        configurable: !0
      });
    }
    function x() {
      var r = t(this.type);
      return m[r] || (m[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function j(r, w, P, U, D, A, W, X) {
      return P = A.ref, r = {
        $$typeof: u,
        type: r,
        key: w,
        props: A,
        _owner: D
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: x
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
        value: W
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function c(r, w, P, U, D, A, W, X) {
      var _ = w.children;
      if (_ !== void 0)
        if (U)
          if (V(_)) {
            for (U = 0; U < _.length; U++)
              d(_[U]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(_);
      if (L.call(w, "key")) {
        _ = t(r);
        var Z = Object.keys(w).filter(function(ie) {
          return ie !== "key";
        });
        U = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", B[_ + U] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          _,
          Z,
          _
        ), B[_ + U] = !0);
      }
      if (_ = null, P !== void 0 && (o(P), _ = "" + P), a(w) && (o(w.key), _ = "" + w.key), "key" in w) {
        P = {};
        for (var K in w)
          K !== "key" && (P[K] = w[K]);
      } else P = w;
      return _ && p(
        P,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), j(
        r,
        _,
        A,
        D,
        l(),
        P,
        W,
        X
      );
    }
    function d(r) {
      typeof r == "object" && r !== null && r.$$typeof === u && r._store && (r._store.validated = 1);
    }
    var f = Pe, u = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), E = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), M = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, V = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var h, m = {}, N = f.react_stack_bottom_frame.bind(
      f,
      s
    )(), $ = O(i(s)), B = {};
    ne.Fragment = y, ne.jsx = function(r, w, P, U, D) {
      var A = 1e4 > M.recentlyCreatedOwnerStacks++;
      return c(
        r,
        w,
        P,
        !1,
        U,
        D,
        A ? Error("react-stack-top-frame") : N,
        A ? O(i(r)) : $
      );
    }, ne.jsxs = function(r, w, P, U, D) {
      var A = 1e4 > M.recentlyCreatedOwnerStacks++;
      return c(
        r,
        w,
        P,
        !0,
        U,
        D,
        A ? Error("react-stack-top-frame") : N,
        A ? O(i(r)) : $
      );
    };
  }()), ne;
}
var Me;
function Ze() {
  return Me || (Me = 1, process.env.NODE_ENV === "production" ? ue.exports = Xe() : ue.exports = Je()), ue.exports;
}
var e = Ze();
const Et = ({
  as: t = "p",
  children: n,
  className: o = "",
  href: i,
  target: l,
  rel: s,
  // Style
  color: a = "#333",
  bgColor: p,
  fontSize: x = "16px",
  fontWeight: j = "normal",
  textAlign: c = "left",
  textTransform: d = "none",
  lineHeight: f = "normal",
  letterSpacing: u = "normal",
  maxWidth: v,
  padding: y,
  margin: T,
  borderRadius: z,
  boxShadow: C,
  shadowColor: E = "rgba(0,0,0,0.1)",
  wordBreak: g = "normal",
  // Text styles
  italic: S = !1,
  bold: k = !1,
  underline: b = !1,
  strikethrough: F = !1,
  selectable: Y = !0,
  truncate: I = !1,
  // Hover & Active
  hoverColor: M,
  hoverBgColor: L,
  hoverTextDecoration: V,
  activeColor: O,
  activeBgColor: h,
  transitionDuration: m = "0.25s",
  // Event
  onClick: N
}) => {
  const $ = ee(() => {
    const A = [];
    return b && A.push("underline"), F && A.push("line-through"), A.join(" ") || "none";
  }, [b, F]), B = {
    color: a,
    backgroundColor: p || "transparent",
    fontSize: x,
    fontWeight: k ? "bold" : j,
    textAlign: c,
    textTransform: d,
    lineHeight: f,
    letterSpacing: u,
    maxWidth: v,
    padding: y,
    margin: T,
    borderRadius: z,
    textDecoration: $,
    fontStyle: S ? "italic" : "normal",
    wordBreak: g,
    boxShadow: C || (E ? `0 1px 4px ${E}` : void 0),
    cursor: N || i ? "pointer" : "default",
    userSelect: Y ? "text" : "none",
    transition: `all ${m} ease-in-out`,
    overflow: I ? "hidden" : void 0,
    whiteSpace: I ? "nowrap" : void 0,
    textOverflow: I ? "ellipsis" : void 0
  }, D = {
    className: o,
    style: B,
    onClick: N,
    onMouseEnter: (A) => {
      const W = A.currentTarget;
      M && (W.style.color = M), L && (W.style.backgroundColor = L), V && (W.style.textDecoration = V);
    },
    onMouseLeave: (A) => {
      const W = A.currentTarget;
      W.style.color = a, W.style.backgroundColor = p || "transparent", W.style.textDecoration = $;
    },
    onMouseDown: (A) => {
      const W = A.currentTarget;
      O && (W.style.color = O), h && (W.style.backgroundColor = h);
    },
    onMouseUp: (A) => {
      const W = A.currentTarget;
      W.style.color = M || a, W.style.backgroundColor = L || p || "transparent";
    }
  };
  return t === "a" || i ? /* @__PURE__ */ e.jsx(
    "a",
    {
      ...D,
      href: i,
      target: l,
      rel: s || (l === "_blank" ? "noopener noreferrer" : void 0),
      children: n
    }
  ) : /* @__PURE__ */ e.jsx(t, { ...D, children: n });
}, $e = ({
  src: t,
  alt: n = "Image",
  width: o = "100%",
  height: i = "auto",
  borderRadius: l = "8px",
  borderColor: s = "transparent",
  borderStyle: a = "solid",
  borderWidth: p = "0px",
  shadow: x = !1,
  boxShadow: j,
  opacity: c = 1,
  objectFit: d = "cover",
  overlayText: f,
  overlayColor: u = "rgba(0, 0, 0, 0.5)",
  svgIcon: v,
  responsive: y = !1,
  padding: T,
  margin: z,
  lazyLoad: C = !1,
  hoverOpacity: E,
  hoverShadow: g = !1,
  hoverScale: S,
  hoverRotate: k,
  transitionDuration: b = "0.3s",
  overflow: F = "hidden",
  className: Y,
  style: I,
  onClick: M
}) => {
  const L = {
    width: y ? "100%" : o,
    height: y ? "100%" : i,
    borderRadius: l,
    border: `${p} ${a} ${s}`,
    objectFit: d,
    opacity: c,
    boxShadow: x ? j || "0 4px 12px rgba(0,0,0,0.15)" : "none",
    transition: `all ${b} ease`,
    display: "block"
  }, V = (m) => {
    m.currentTarget.style.opacity = E !== void 0 ? E.toString() : L.opacity?.toString() || "1", m.currentTarget.style.boxShadow = g ? "0 8px 20px rgba(0,0,0,0.3)" : L.boxShadow?.toString() || "none", m.currentTarget.style.transform = `scale(${S || 1}) rotate(${k || 0}deg)`;
  }, O = (m) => {
    m.currentTarget.style.opacity = L.opacity?.toString() || "1", m.currentTarget.style.boxShadow = L.boxShadow?.toString() || "none", m.currentTarget.style.transform = "scale(1) rotate(0deg)";
  }, h = (() => {
    switch (F) {
      case "x":
        return { overflowX: "hidden" };
      case "y":
        return { overflowY: "hidden" };
      default:
        return { overflow: F };
    }
  })();
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      role: "img",
      "aria-label": n,
      onClick: M,
      className: Y,
      style: {
        width: y ? "100%" : o,
        height: y ? "auto" : i,
        padding: T,
        margin: z,
        position: "relative",
        cursor: M ? "pointer" : "default",
        display: "inline-block",
        transition: `all ${b} ease`,
        ...h,
        ...I
        // Allow external override
      },
      children: [
        v ? /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: v
          }
        ) : /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t,
            alt: n,
            loading: C ? "lazy" : "eager",
            style: L,
            onMouseEnter: V,
            onMouseLeave: O
          }
        ),
        f && /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: u,
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
            children: f
          }
        )
      ]
    }
  );
}, It = ({
  children: t,
  type: n = "button",
  onClick: o,
  iconBefore: i,
  iconAfter: l,
  className: s = "",
  style: a,
  // ✅ NEW
  fullWidth: p = !1,
  disabled: x = !1,
  loading: j = !1,
  loadingText: c = "Loading...",
  paddingHorizontal: d = 30,
  paddingVertical: f = 8,
  fontSize: u = "16px",
  fontWeight: v = 400,
  borderRadius: y = 6,
  backgroundColor: T = "#02b314",
  textColor: z = "white",
  borderColor: C = "transparent",
  hoverBgColor: E = "transparent",
  hoverTextColor: g = "black",
  hoverBorderColor: S,
  boxShadow: k = "0 1px 2px rgba(0, 0, 0, 0.05)"
}) => {
  const [b, F] = Pe.useState(!1), Y = b && !x && g || z, I = b && !x && S || C, M = b && !x ? E : T, L = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${f}px ${d}px`,
    fontSize: u,
    fontWeight: v,
    borderRadius: `${y}px`,
    width: p ? "100%" : "auto",
    color: Y,
    border: `1px solid ${I}`,
    backgroundColor: M,
    boxShadow: k,
    cursor: x ? "not-allowed" : "pointer",
    opacity: x ? 0.6 : 1,
    transition: "all 0.2s ease-in-out",
    gap: "8px",
    ...a
    // ✅ Apply user-supplied inline styles last
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: n,
      className: s,
      style: L,
      onClick: !x && !j ? o : void 0,
      disabled: x,
      onMouseEnter: () => F(!0),
      onMouseLeave: () => F(!1),
      children: [
        j ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
          /* @__PURE__ */ e.jsx("span", { children: c })
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          i && /* @__PURE__ */ e.jsx("span", { children: i }),
          /* @__PURE__ */ e.jsx("span", { children: t }),
          l && /* @__PURE__ */ e.jsx("span", { children: l })
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
  (n, o, i) => i ? i.toUpperCase() : o.toLowerCase()
), Ee = (t) => {
  const n = Qe(t);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Ne = (...t) => t.filter((n, o, i) => !!n && n.trim() !== "" && i.indexOf(n) === o).join(" ").trim(), et = (t) => {
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
const rt = ve(
  ({
    color: t = "currentColor",
    size: n = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: i,
    className: l = "",
    children: s,
    iconNode: a,
    ...p
  }, x) => je(
    "svg",
    {
      ref: x,
      ...tt,
      width: n,
      height: n,
      stroke: t,
      strokeWidth: i ? Number(o) * 24 / Number(n) : o,
      className: Ne("lucide", l),
      ...!s && !et(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...a.map(([j, c]) => je(j, c)),
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
  const o = ve(
    ({ className: i, ...l }, s) => je(rt, {
      ref: s,
      iconNode: n,
      className: Ne(
        `lucide-${Ke(Ee(t))}`,
        `lucide-${t}`,
        i
      ),
      ...l
    })
  );
  return o.displayName = Ee(t), o;
};
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], We = q("chevron-left", nt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Fe = q("chevron-right", st);
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
], lt = q("circle-alert", ot);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], at = q("circle-check-big", it);
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
const yt = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], oe = q("play", yt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], fe = q("rotate-ccw", mt);
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
], ye = q("volume-x", Tt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ct = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], le = q("x", Ct), _t = ve(
  ({
    type: t = "text",
    placeholder: n = "",
    label: o,
    value: i,
    defaultValue: l,
    onChange: s,
    name: a = "",
    disabled: p = !1,
    readOnly: x = !1,
    required: j = !1,
    error: c,
    success: d = !1,
    autoFocus: f = !1,
    iconLeft: u,
    iconRight: v,
    borderColor: y = "#ccc",
    focusBorderColor: T = "#2563eb",
    hoverBorderColor: z = "#4b5563",
    backgroundColor: C = "#ffffff",
    textColor: E = "#111827",
    errorColor: g = "#dc2626",
    successColor: S = "#16a34a",
    labelColor: k = "#374151",
    size: b = "md",
    radius: F = "6px",
    fontSize: Y = "14px",
    rows: I = 4,
    cols: M,
    maxLength: L,
    resize: V = !0,
    showCharacterCount: O = !0,
    className: h,
    style: m
  }, N) => {
    const $ = J(null), [B, r] = R(l || ""), [w, P] = R(!1);
    Ge(N, () => $.current);
    const U = (_) => {
      L && _.target.value.length > L || (r(_.target.value), s && s(a, _.target.value));
    }, D = () => {
      switch (b) {
        case "sm":
          return "6px 12px";
        case "lg":
          return "12px 20px";
        default:
          return "10px 16px";
      }
    }, A = () => {
      switch (b) {
        case "sm":
          return "13px";
        case "lg":
          return "16px";
        default:
          return Y;
      }
    }, W = c ? g : d ? S : y, X = {
      width: "100%",
      padding: D(),
      paddingLeft: u ? "40px" : D().split(" ")[1],
      paddingRight: v || t === "password" ? "40px" : D().split(" ")[1],
      border: `1px solid ${W}`,
      borderRadius: F,
      backgroundColor: C,
      color: E,
      fontSize: A(),
      outline: "none",
      resize: t === "textarea" && !V ? "none" : void 0,
      ...m
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: { width: "100%", fontFamily: "sans-serif" },
        className: h,
        children: [
          o && /* @__PURE__ */ e.jsxs(
            "label",
            {
              htmlFor: a,
              style: {
                display: "block",
                marginBottom: "6px",
                fontSize: "14px",
                fontWeight: 500,
                color: k
              },
              children: [
                o,
                " ",
                j && /* @__PURE__ */ e.jsx("span", { style: { color: g }, children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { style: { position: "relative", width: "100%" }, children: [
            u && /* @__PURE__ */ e.jsx(
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
                children: u
              }
            ),
            t === "textarea" ? /* @__PURE__ */ e.jsx(
              "textarea",
              {
                ref: $,
                name: a,
                value: i ?? B,
                onChange: U,
                placeholder: n,
                rows: I,
                cols: M,
                maxLength: L,
                disabled: p,
                readOnly: x,
                autoFocus: f,
                style: X,
                onFocus: (_) => {
                  _.currentTarget.style.borderColor = T;
                },
                onBlur: (_) => {
                  _.currentTarget.style.borderColor = W;
                },
                onMouseEnter: (_) => {
                  _.currentTarget.style.borderColor = z;
                },
                onMouseLeave: (_) => {
                  _.currentTarget.style.borderColor = W;
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: $,
                id: a,
                name: a,
                type: t === "password" ? w ? "text" : "password" : t,
                value: i ?? B,
                onChange: U,
                placeholder: n,
                disabled: p,
                readOnly: x,
                autoFocus: f,
                style: X,
                onFocus: (_) => {
                  _.currentTarget.style.borderColor = T;
                },
                onBlur: (_) => {
                  _.currentTarget.style.borderColor = W;
                },
                onMouseEnter: (_) => {
                  _.currentTarget.style.borderColor = z;
                },
                onMouseLeave: (_) => {
                  _.currentTarget.style.borderColor = W;
                }
              }
            ),
            t === "password" && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => P(!w),
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
            v && t !== "password" && /* @__PURE__ */ e.jsx(
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
                children: v
              }
            )
          ] }),
          t === "textarea" && O && L && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                textAlign: "right",
                fontSize: "12px",
                color: "#6b7280",
                marginTop: "4px"
              },
              children: [
                (i ?? B).length,
                "/",
                L
              ]
            }
          ),
          c && /* @__PURE__ */ e.jsx(
            "p",
            {
              style: {
                color: g,
                fontSize: "12px",
                marginTop: "4px",
                lineHeight: "1.3"
              },
              children: c
            }
          )
        ]
      }
    );
  }
), At = ({
  title: t,
  titleIcon: n,
  items: o,
  type: i = "unordered",
  bulletColor: l = "#2563eb",
  textColor: s = "#111827",
  backgroundColor: a = "#fff",
  borderColor: p = "#e5e7eb",
  fontSize: x = "15px",
  fontWeight: j = 500,
  borderRadius: c = "12px",
  padding: d = "16px",
  spacing: f = "12px",
  className: u,
  style: v
}) => {
  const y = i === "ordered", T = i === "inline", z = {
    backgroundColor: a,
    borderColor: p,
    color: s,
    borderWidth: p ? "1px" : "0px",
    borderStyle: "solid",
    borderRadius: c,
    padding: d,
    ...v
  }, C = T ? {
    display: "flex",
    gap: f,
    paddingLeft: 0,
    listStyleType: "none",
    margin: 0
  } : {
    listStyleType: y ? "decimal" : "none",
    paddingLeft: y ? "20px" : "0",
    margin: 0
  }, E = y ? "ol" : "ul";
  return /* @__PURE__ */ e.jsxs("div", { className: u, style: z, children: [
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
    /* @__PURE__ */ e.jsx(E, { style: C, children: o.map((g, S) => /* @__PURE__ */ e.jsx(
      Oe,
      {
        ...g,
        bulletColor: l,
        textColor: s,
        fontSize: x,
        fontWeight: j,
        spacing: f,
        isInline: T
      },
      S
    )) })
  ] });
}, Oe = ({
  text: t,
  icon: n,
  onClick: o,
  subItems: i,
  bulletColor: l,
  textColor: s,
  fontSize: a,
  fontWeight: p,
  spacing: x,
  isInline: j
}) => {
  const c = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: j ? "0" : x
  }, d = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: a,
    fontWeight: p,
    color: s,
    cursor: o ? "pointer" : "default"
  }, f = {
    width: "8px",
    height: "8px",
    backgroundColor: l,
    borderRadius: "50%",
    flexShrink: 0
  }, u = {
    listStyleType: "disc",
    paddingLeft: "20px",
    margin: 0
  };
  return /* @__PURE__ */ e.jsxs("li", { style: c, children: [
    /* @__PURE__ */ e.jsxs("div", { style: d, onClick: o, children: [
      n ? /* @__PURE__ */ e.jsx("span", { style: { fontSize: "16px", color: s }, children: n }) : !j && /* @__PURE__ */ e.jsx("span", { style: f }),
      /* @__PURE__ */ e.jsx("span", { children: t })
    ] }),
    i && i.length > 0 && /* @__PURE__ */ e.jsx("ul", { style: u, children: i.map((v, y) => /* @__PURE__ */ e.jsx(
      Oe,
      {
        ...v,
        bulletColor: l,
        textColor: s,
        fontSize: a,
        fontWeight: p,
        spacing: x,
        isInline: !1
      },
      y
    )) })
  ] });
}, we = ({
  tabs: t,
  defaultActive: n = 0,
  tabPosition: o,
  activeTabClassName: i = "",
  inactiveTabClassName: l = "",
  tabContainerClassName: s = "",
  contentContainerClassName: a = "",
  className: p = "",
  activeTabStyle: x,
  inactiveTabStyle: j,
  tabContainerStyle: c,
  contentContainerStyle: d,
  style: f,
  tabsWidth: u = "240px",
  tabGap: v = 8,
  tabPadding: y = "12px 16px",
  tabBorderRadius: T = 12,
  primaryColor: z = "#2563eb",
  textColor: C = "#374151",
  backgroundColor: E = "#ffffff",
  hoverTextColor: g = "#1e40af",
  responsiveBreakpoint: S = 768,
  showDrawerLabel: k = "Select Tab"
}) => {
  const [b, F] = R(n), [Y, I] = R(null), [M, L] = R(!1), [V, O] = R(!1);
  G(() => {
    const D = () => {
      L(window.innerWidth <= S);
    };
    return D(), window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
  }, [S]);
  const h = o === "left" || o === "right", N = {
    display: "flex",
    flexDirection: h ? M ? "column" : o === "left" ? "row" : "row-reverse" : "column",
    width: "100%",
    height: "100%",
    backgroundColor: E,
    ...h && !M ? {} : { flexWrap: "wrap" },
    ...f
  }, $ = {
    width: h && !M ? u : "100%",
    display: "flex",
    flexDirection: h && !M ? "column" : "row",
    justifyContent: !h && o === "top" ? "center" : void 0,
    gap: v,
    padding: 8,
    boxSizing: "border-box",
    ...c
  }, B = {
    flexGrow: 1,
    padding: 24,
    background: "#f9fafb",
    boxSizing: "border-box",
    minWidth: 0,
    ...h && !M ? { width: "calc(100% - " + u + ")" } : { width: "100%" },
    ...d
  }, r = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: y,
    borderRadius: T,
    border: "none",
    backgroundColor: "transparent",
    fontWeight: 500,
    transition: "all 0.2s ease",
    width: h && !M ? "100%" : "auto",
    marginBottom: h && !M ? v : 0,
    marginRight: !h || M ? v : 0,
    justifyContent: "flex-start"
  }, w = {
    backgroundColor: z,
    color: "#fff",
    fontWeight: 700,
    boxShadow: `0 2px 10px ${z}55`,
    ...x
  }, P = {
    backgroundColor: "transparent",
    color: C,
    ...j
  }, U = {
    backgroundColor: `${z}22`,
    color: g
  };
  return /* @__PURE__ */ e.jsxs("div", { className: p, style: N, children: [
    /* @__PURE__ */ e.jsx("style", { children: `
        @media (max-width: ${S}px) {
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
    M && h ? /* @__PURE__ */ e.jsxs("div", { style: { width: "100%", marginBottom: 12 }, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => O(!V),
          style: {
            ...r,
            ...w,
            justifyContent: "space-between",
            width: "100%"
          },
          className: "custom-tab-drawer-button",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: k }),
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: 18 }, children: "☰" })
          ]
        }
      ),
      V && /* @__PURE__ */ e.jsx("div", { className: "custom-tab-mobile-drawer", children: t.map((D, A) => {
        const W = A === b, X = Y === A;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              F(A), O(!1);
            },
            onMouseEnter: () => I(A),
            onMouseLeave: () => I(null),
            className: W ? i : l,
            style: {
              ...r,
              ...W ? w : P,
              ...X && !W ? U : {}
            },
            children: [
              D.icon && /* @__PURE__ */ e.jsx("span", { children: D.icon }),
              /* @__PURE__ */ e.jsx("span", { children: D.label })
            ]
          },
          A
        );
      }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "nav",
      {
        className: s,
        style: $,
        "aria-label": "Tabs Navigation",
        children: t.map((D, A) => {
          const W = A === b, X = Y === A;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => F(A),
              onMouseEnter: () => I(A),
              onMouseLeave: () => I(null),
              className: W ? i : l,
              style: {
                ...r,
                ...W ? w : P,
                ...X && !W ? U : {}
              },
              children: [
                D.icon && /* @__PURE__ */ e.jsx("span", { children: D.icon }),
                /* @__PURE__ */ e.jsx("span", { children: D.label })
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
        className: a,
        style: B,
        role: "tabpanel",
        children: t[b]?.content
      }
    )
  ] });
}, Lt = (t) => /* @__PURE__ */ e.jsx(we, { ...t, tabPosition: "left" }), Pt = (t) => /* @__PURE__ */ e.jsx(we, { ...t, tabPosition: "top" }), Nt = (t) => /* @__PURE__ */ e.jsx(we, { ...t, tabPosition: "right" }), Wt = ({
  src: t,
  poster: n,
  autoPlay: o = !1,
  loop: i = !1,
  controls: l = !1,
  muted: s = !1,
  // default false
  width: a = "100%",
  height: p = "150px",
  borderRadius: x = "12px",
  backgroundColor: j = "#1e1e1e",
  primaryColor: c = "#ff4081",
  padding: d = "16px",
  className: f
}) => {
  const u = J(null), v = J(null), [y, T] = R(o), [z, C] = R(0), [E, g] = R(0), [S, k] = R(0.5), [b, F] = R(s), [Y, I] = R(!1), [M, L] = R(i);
  G(() => {
    u.current && (u.current.volume = S, u.current.loop = M, u.current.muted = b);
  }, [S, M, b]);
  const V = () => {
    u.current && (y ? u.current.pause() : u.current.play(), T(!y));
  }, O = () => {
    u.current && (C(u.current.currentTime), g(u.current.duration));
  }, h = (r) => {
    if (!u.current || !r.currentTarget) return;
    const w = r.currentTarget.getBoundingClientRect(), U = (r.clientX - w.left) / w.width * E;
    u.current.currentTime = U, C(U);
  }, m = (r) => {
    u.current && (u.current.currentTime += r);
  }, N = () => {
    v.current && (Y ? document.exitFullscreen?.() : v.current.requestFullscreen?.(), I(!Y));
  }, $ = () => {
    F(!b), b && S === 0 && k(0.5);
  }, B = (r) => {
    const w = Math.floor(r / 60), P = Math.floor(r % 60);
    return `${w}:${P < 10 ? "0" : ""}${P}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: v,
      className: f,
      style: {
        position: "relative",
        width: a,
        backgroundColor: j,
        borderRadius: x,
        color: "#fff",
        overflow: "hidden",
        padding: d,
        boxSizing: "border-box",
        maxWidth: "100%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "video",
          {
            ref: u,
            src: t,
            poster: n,
            autoPlay: o,
            loop: i,
            controls: l,
            muted: s,
            onTimeUpdate: O,
            onLoadedMetadata: O,
            style: {
              width: "100%",
              height: p,
              borderRadius: x,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => m(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: V,
                  style: {
                    background: c,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => m(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: B(z) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  " ",
                  "/ ",
                  B(E)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: h,
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
                        width: `${z / E * 100 || 0}%`,
                        height: "100%",
                        background: c,
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
                    onClick: () => L(!M),
                    "aria-label": "Toggle Loop",
                    children: /* @__PURE__ */ e.jsx(fe, { size: 18, color: M ? c : void 0 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: $, "aria-label": "Toggle Mute", children: b ? /* @__PURE__ */ e.jsx(ye, { size: 18 }) : /* @__PURE__ */ e.jsx(be, { size: 18 }) }),
                /* @__PURE__ */ e.jsx("button", { onClick: N, "aria-label": "Toggle Fullscreen", children: Y ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
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
  loop: i = !1,
  backgroundColor: l = "#000000",
  primaryColor: s = "#10b981",
  secondaryColor: a = "#ffffff",
  borderRadius: p = "12px",
  padding: x = "16px",
  width: j = "100%",
  className: c
}) => {
  const d = J(null), f = J(null), [u, v] = R(o), [y, T] = R(0), [z, C] = R(0), [E, g] = R(0.5), [S, k] = R(!1), [b, F] = R(i);
  G(() => {
    d.current && (d.current.volume = E);
  }, [E]), G(() => {
    d.current && (d.current.loop = b);
  }, [b]);
  const Y = () => {
    d.current && (u ? d.current.pause() : d.current.play(), v(!u));
  }, I = () => {
    d.current && (T(d.current.currentTime), C(d.current.duration));
  }, M = (h) => {
    if (!d.current || !h.currentTarget) return;
    const m = h.currentTarget.getBoundingClientRect(), $ = (h.clientX - m.left) / m.width * z;
    d.current.currentTime = $, T($);
  }, L = (h) => {
    d.current && (d.current.currentTime += h);
  }, V = () => {
    f.current && (S ? document.exitFullscreen?.() : f.current.requestFullscreen?.(), k(!S));
  }, O = (h) => {
    const m = Math.floor(h / 60), N = Math.floor(h % 60);
    return `${m}:${N < 10 ? "0" : ""}${N}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: f,
      className: c,
      style: {
        position: "relative",
        width: j,
        backgroundColor: l,
        borderRadius: p,
        color: a,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        overflow: "hidden",
        padding: x,
        boxSizing: "border-box",
        maxWidth: "100%"
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "audio",
          {
            ref: d,
            src: t,
            autoPlay: o,
            loop: i,
            onTimeUpdate: I,
            onLoadedMetadata: I
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
              borderRadius: p,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => L(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: Y,
                  style: {
                    background: s,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": u ? "Pause" : "Play",
                  children: u ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
                }
              ),
              /* @__PURE__ */ e.jsx("button", { onClick: () => L(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", marginRight: "4px" }, children: O(y) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  "/ ",
                  O(z)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: M,
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
                        width: `${y / z * 100 || 0}%`,
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
                        onClick: () => F(!b),
                        "aria-label": "Toggle Loop",
                        children: /* @__PURE__ */ e.jsx(fe, { size: 18, color: b ? s : void 0 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => g(E > 0 ? 0 : 0.5),
                        "aria-label": "Toggle Mute",
                        children: E > 0 ? /* @__PURE__ */ e.jsx(be, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("button", { onClick: V, "aria-label": "Toggle Fullscreen", children: S ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
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
const Ie = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Ot = ({
  display: t = { sm: "block", md: "flex", lg: "grid" },
  flexDirection: n = { sm: "column", md: "row", lg: "row" },
  justifyContent: o = { sm: "flex-start", md: "center", lg: "space-between" },
  alignItems: i = { sm: "stretch", md: "center", lg: "center" },
  gridTemplateColumns: l = { sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
  gridTemplateRows: s = { sm: "auto", md: "auto", lg: "auto" },
  gap: a = { sm: "10px", md: "20px", lg: "30px" },
  rowGap: p,
  columnGap: x,
  width: j = { sm: "100%", md: "90%", lg: "80%" },
  maxWidth: c = { sm: "100%", md: "800px", lg: "1200px" },
  height: d = { sm: "auto", md: "auto", lg: "auto" },
  padding: f = { sm: "10px", md: "20px", lg: "40px" },
  margin: u = { sm: "0 auto", md: "0 auto", lg: "0 auto" },
  textAlign: v = { sm: "left", md: "center", lg: "center" },
  backgroundColor: y = "#fff",
  border: T = { sm: "none", md: "1px solid #ddd", lg: "2px solid #ccc" },
  borderRadius: z = { sm: "0", md: "8px", lg: "12px" },
  boxShadow: C = {
    sm: "none",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 6px 10px rgba(0,0,0,0.15)"
  },
  overflow: E = { sm: "visible", md: "hidden", lg: "auto" },
  children: g,
  className: S,
  style: k
}) => {
  const [b, F] = R(
    () => Ie(window.innerWidth)
  );
  G(() => {
    const I = () => F(Ie(window.innerWidth));
    return window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
  }, []);
  const Y = ee(() => {
    const I = H(t, b, "block"), M = H(
      n,
      b,
      void 0
    ), L = H(
      o,
      b,
      void 0
    ), V = H(
      i,
      b,
      void 0
    ), O = H(
      l,
      b,
      void 0
    ), h = H(
      s,
      b,
      void 0
    ), m = H(a, b, void 0), N = H(p, b, void 0), $ = H(
      x,
      b,
      void 0
    ), B = H(j, b, "100%"), r = H(c, b, void 0), w = H(d, b, void 0), P = H(f, b, void 0), U = H(u, b, void 0), D = H(
      v,
      b,
      void 0
    ), A = H(T, b, void 0), W = H(
      z,
      b,
      void 0
    ), X = H(
      C,
      b,
      void 0
    ), _ = H(E, b, void 0);
    return {
      display: I,
      ...M && { flexDirection: M },
      ...L && { justifyContent: L },
      ...V && { alignItems: V },
      ...O && {
        gridTemplateColumns: O
      },
      ...h && {
        gridTemplateRows: h
      },
      ...m && { gap: m },
      ...N && { rowGap: N },
      ...$ && { columnGap: $ },
      width: B,
      ...r && { maxWidth: r },
      ...w && { height: w },
      ...P && { padding: P },
      ...U && { margin: U },
      ...D && { textAlign: D },
      backgroundColor: y,
      ...A && { border: A },
      ...W && { borderRadius: W },
      ...X && { boxShadow: X },
      ..._ && { overflow: _ },
      boxSizing: "border-box",
      ...k
    };
  }, [
    b,
    t,
    n,
    o,
    i,
    l,
    s,
    a,
    p,
    x,
    j,
    c,
    d,
    f,
    u,
    v,
    y,
    T,
    z,
    C,
    E,
    k
  ]);
  return /* @__PURE__ */ e.jsx("div", { className: S, style: Y, children: g });
}, Bt = ({
  items: t,
  allowMultiple: n = !1,
  defaultOpenIndex: o = [],
  borderColor: i = "#d1d5db",
  backgroundColor: l = "#ffffff",
  textColor: s = "#111827",
  hoverBgColor: a = "#f3f4f6",
  hoverTextColor: p = "#111827",
  paddingVertical: x = "16px",
  paddingHorizontal: j = "16px",
  margin: c = "12px 0",
  iconOpen: d = "−",
  iconClose: f = "+",
  transitionDuration: u = "300ms",
  borderRadius: v = "8px",
  shadow: y = "0 2px 8px rgba(0, 0, 0, 0.05)",
  contentPadding: T = "16px",
  fontSize: z = "16px",
  fontWeight: C = "600",
  iconSize: E = "18px",
  contentFontSize: g = "14px",
  contentFontWeight: S = "400",
  contentBackgroundColor: k = "#ffffff",
  contentTextColor: b = "#111827",
  className: F,
  style: Y
}) => {
  const [I, M] = R(o), L = J([]), V = J([]);
  G(() => {
    L.current.forEach((h, m) => {
      h && (h.style.maxHeight = I.includes(m) ? `${h.scrollHeight}px` : "0px");
    });
  }, [I]);
  const O = (h) => {
    M(
      (m) => n ? m.includes(h) ? m.filter((N) => N !== h) : [...m, h] : m.includes(h) ? [] : [h]
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: F, style: { width: "100%", ...Y }, children: t.map((h, m) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        border: `1px solid ${i}`,
        borderRadius: v,
        margin: c,
        boxShadow: y,
        overflow: "hidden",
        transition: `all ${u} ease`
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: (N) => {
              V.current[m] = N;
            },
            onClick: () => O(m),
            style: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: l,
              color: s,
              padding: `${x} ${j}`,
              fontWeight: C,
              fontSize: z,
              cursor: "pointer",
              outline: "none",
              border: "none",
              transition: `all ${u}`
            },
            onMouseEnter: (N) => {
              N.currentTarget.style.backgroundColor = a, N.currentTarget.style.color = p;
            },
            onMouseLeave: (N) => {
              N.currentTarget.style.backgroundColor = l, N.currentTarget.style.color = s;
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: h.title }),
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: E }, children: I.includes(m) ? d : f })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: (N) => {
              L.current[m] = N;
            },
            style: {
              overflow: "hidden",
              maxHeight: I.includes(m) ? `${L.current[m]?.scrollHeight}px` : "0px",
              transition: `max-height ${u} ease-in-out`
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                style: {
                  borderTop: `1px solid ${i}`,
                  backgroundColor: k,
                  color: b,
                  padding: T,
                  fontSize: g,
                  fontWeight: S
                },
                children: h.content
              }
            )
          }
        )
      ]
    },
    m
  )) });
}, Dt = ({
  type: t,
  name: n,
  options: o,
  selectedValues: i,
  onChange: l,
  disabled: s = !1,
  readOnly: a = !1,
  required: p = !1,
  error: x,
  className: j = "",
  customIcon: c,
  style: d,
  labelStyle: f,
  iconSize: u = 20,
  iconCheckedBgColor: v = "#2563eb",
  // blue-600
  iconUncheckedBorderColor: y = "#9ca3af",
  // gray-400
  textColor: T = "#374151",
  // gray-700
  errorStyle: z
}) => {
  const C = t === "checkbox", E = (g) => {
    if (l)
      if (C) {
        const S = Array.isArray(i) ? i.includes(g) ? i.filter((k) => k !== g) : [...i, g] : [g];
        l(S);
      } else
        l(g);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: j,
      style: { display: "flex", flexDirection: "column", gap: 8, ...d },
      role: t,
      "aria-disabled": s,
      children: [
        o.map((g) => {
          const S = C ? Array.isArray(i) && i.includes(g.value) : i === g.value;
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
                ...f
              },
              children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: t,
                    name: n,
                    value: g.value,
                    checked: S,
                    disabled: s || a,
                    required: p,
                    onChange: () => E(g.value),
                    style: { display: "none" }
                  }
                ),
                c ? c(S) : /* @__PURE__ */ e.jsxs(
                  "span",
                  {
                    style: {
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: u,
                      height: u,
                      borderRadius: C ? 4 : "50%",
                      border: `2px solid ${S ? v : y}`,
                      backgroundColor: S ? v : "transparent",
                      transition: "all 0.2s ease",
                      flexShrink: 0
                    },
                    children: [
                      S && !C && /* @__PURE__ */ e.jsx(
                        "span",
                        {
                          style: {
                            width: u / 2,
                            height: u / 2,
                            borderRadius: "50%",
                            backgroundColor: "white"
                          }
                        }
                      ),
                      S && C && /* @__PURE__ */ e.jsx(
                        "svg",
                        {
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "white",
                          strokeWidth: 3,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          style: { width: u * 0.6, height: u * 0.6 },
                          children: /* @__PURE__ */ e.jsx("polyline", { points: "20 6 9 17 4 12" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { style: { color: T, fontSize: 14 }, children: g.label })
              ]
            },
            g.value
          );
        }),
        x && /* @__PURE__ */ e.jsx(
          "p",
          {
            role: "alert",
            style: {
              color: "#dc2626",
              // red-600
              fontSize: 12,
              marginTop: 4,
              ...z
            },
            children: x
          }
        )
      ]
    }
  );
}, Yt = ({
  label: t = "Open Drawer",
  icon: n,
  iconPosition: o = "left",
  onClick: i,
  style: l = {}
}) => /* @__PURE__ */ e.jsxs(
  "button",
  {
    onClick: i,
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
      ...l
    },
    children: [
      n && o === "left" && n,
      t,
      n && o === "right" && n
    ]
  }
), Ut = ({
  open: t,
  onClose: n,
  position: o = "right",
  width: i = "300px",
  height: l = "300px",
  backgroundColor: s = "#fff",
  transitionDuration: a = 300,
  style: p = {},
  children: x,
  showCloseButton: j = !0,
  closeButtonStyle: c = {}
}) => {
  const [d, f] = R(t);
  G(() => {
    t ? f(!0) : setTimeout(() => f(!1), a);
  }, [t, a]);
  const u = ee(() => {
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
  }, [t, o]), v = {
    position: "fixed",
    zIndex: 1e3,
    backgroundColor: s,
    transition: `transform ${a}ms ease, opacity ${a}ms ease`,
    transform: u,
    opacity: t ? 1 : 0,
    ...p,
    ...o === "left" || o === "right" ? { top: 0, [o]: 0, width: i, height: "100%" } : { left: 0, [o]: 0, height: l, width: "100%" }
  }, y = {
    position: "fixed",
    display: d ? "block" : "none",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    transition: `opacity ${a}ms ease`,
    opacity: t ? 1 : 0,
    pointerEvents: t ? "auto" : "none"
  }, T = {
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
          ...v,
          display: "block",
          visibility: d ? "visible" : "hidden",
          pointerEvents: t ? "auto" : "none"
        },
        children: [
          j && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: n,
              style: { ...T, ...c },
              children: /* @__PURE__ */ e.jsx(le, { size: 20, color: "rgba(255, 0, 0, 1)" })
            }
          ),
          x
        ]
      }
    )
  ] });
}, Vt = ({
  options: t,
  value: n,
  defaultValue: o,
  onChange: i,
  placeholder: l = "Select an option",
  disabled: s = !1,
  borderColor: a = "#ccc",
  backgroundColor: p = "#fff",
  textColor: x = "#333",
  hoverColor: j = "#f0f0f0",
  padding: c = "12px 16px",
  margin: d = "0 0 1rem 0",
  dropdownWidth: f = "100%",
  dropdownHeight: u = "200px",
  borderRadius: v = "8px",
  boxShadow: y = "0 4px 8px rgba(0,0,0,0.1)",
  optionPadding: T = "10px 12px",
  optionGap: z = "8px",
  transitionDuration: C = "0.25s",
  className: E = "",
  dropdownStyle: g,
  dropdownClassName: S = "",
  optionStyle: k,
  optionClassName: b = "",
  iconPrefix: F,
  iconSuffix: Y
}) => {
  const [I, M] = R(o), [L, V] = R(!1), O = J(null);
  G(() => {
    const $ = (B) => {
      O.current && !O.current.contains(B.target) && V(!1);
    };
    return document.addEventListener("mousedown", $), () => document.removeEventListener("mousedown", $);
  }, []);
  const h = ($) => {
    M($), V(!1), i && i($);
  }, m = n ?? I, N = t.find(($) => $.value === m);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: O,
      className: E,
      style: {
        position: "relative",
        width: f,
        margin: d,
        fontFamily: "sans-serif",
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => V(($) => !$),
            disabled: s,
            "aria-haspopup": "listbox",
            "aria-expanded": L,
            style: {
              width: "100%",
              padding: c,
              backgroundColor: p,
              color: x,
              border: `1px solid ${a}`,
              borderRadius: v,
              boxShadow: s ? "none" : y,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: s ? "not-allowed" : "pointer",
              opacity: s ? 0.6 : 1,
              transition: `all ${C} ease-in-out`
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: z }, children: [
                F && /* @__PURE__ */ e.jsx("span", { children: F }),
                /* @__PURE__ */ e.jsx("span", { children: N?.label || l })
              ] }),
              Y || /* @__PURE__ */ e.jsx("span", { style: { marginLeft: "8px" }, children: "▼" })
            ]
          }
        ),
        L && /* @__PURE__ */ e.jsx(
          "ul",
          {
            role: "listbox",
            className: S,
            style: {
              position: "absolute",
              top: "100%",
              left: 0,
              zIndex: 1e3,
              width: "100%",
              maxHeight: u,
              overflowY: "auto",
              backgroundColor: p,
              border: `1px solid ${a}`,
              borderRadius: v,
              boxShadow: y,
              marginTop: "4px",
              transition: `all ${C} ease`,
              ...g
            },
            children: t.map(($) => /* @__PURE__ */ e.jsxs(
              "li",
              {
                onClick: () => h($.value),
                role: "option",
                className: b,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: z,
                  padding: T,
                  cursor: "pointer",
                  backgroundColor: I === $.value ? j : p,
                  transition: `background ${C}`,
                  ...k
                },
                onMouseEnter: (B) => B.currentTarget.style.backgroundColor = j,
                onMouseLeave: (B) => B.currentTarget.style.backgroundColor = I === $.value ? j : p,
                children: [
                  $.icon && /* @__PURE__ */ e.jsx("span", { children: $.icon }),
                  $.label
                ]
              },
              $.value
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
  pagination: i = !0,
  rowsPerPage: l = 5,
  colors: s = {
    headerBg: "#3b82f6",
    headerText: "#ffffff",
    rowBg: "#ffffff",
    rowText: "#000000",
    borderColor: "#d1d5db",
    hoverBg: "#e5e7eb",
    paginationBg: "#d1d5db",
    paginationText: "#000000"
  }
}) => {
  const [a, p] = R(null), [x, j] = R("asc"), [c, d] = R(1), [f, u] = R(null), v = (g) => {
    a === g ? j(x === "asc" ? "desc" : "asc") : (p(g), j("asc"));
  }, y = [...n].sort((g, S) => !a || g[a] === S[a] ? 0 : x === "asc" ? g[a] > S[a] ? 1 : -1 : g[a] < S[a] ? 1 : -1), T = i ? y.slice(
    (c - 1) * l,
    c * l
  ) : y, z = /* @__PURE__ */ e.jsx(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 576 512",
      height: "15px",
      width: "15px",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ e.jsx("path", { d: "M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0z" })
    }
  ), C = /* @__PURE__ */ e.jsx(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 576 512",
      height: "15px",
      width: "15px",
      xmlns: "http://www.w3.org/2000/svg",
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
      children: /* @__PURE__ */ e.jsx("path", { d: "M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3l0 293.5L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7l0-293.5 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z" })
    }
  );
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: { overflowX: "auto", width: "100%" },
      className: o,
      children: [
        /* @__PURE__ */ e.jsxs(
          "table",
          {
            style: {
              width: "100%",
              borderCollapse: "collapse",
              border: `1px solid ${s.borderColor}`
            },
            children: [
              /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx(
                "tr",
                {
                  style: {
                    backgroundColor: s.headerBg,
                    color: s.headerText,
                    textAlign: "left",
                    userSelect: "none"
                  },
                  children: t.map(({ key: g, label: S, sortable: k }) => /* @__PURE__ */ e.jsxs(
                    "th",
                    {
                      onClick: () => k && v(g),
                      style: {
                        padding: "12px",
                        border: `1px solid ${s.borderColor}`,
                        cursor: k ? "pointer" : "default",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      },
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: S }),
                        k && (a === g ? x === "asc" ? z : C : E)
                      ]
                    },
                    g
                  ))
                }
              ) }),
              /* @__PURE__ */ e.jsx("tbody", { children: T.map((g, S) => /* @__PURE__ */ e.jsx(
                "tr",
                {
                  style: {
                    backgroundColor: f === S ? s.hoverBg : s.rowBg,
                    color: s.rowText,
                    transition: "background-color 0.2s ease-in-out"
                  },
                  onMouseEnter: () => u(S),
                  onMouseLeave: () => u(null),
                  children: t.map(({ key: k }) => /* @__PURE__ */ e.jsx(
                    "td",
                    {
                      style: {
                        padding: "12px",
                        border: `1px solid ${s.borderColor}`
                      },
                      children: g[k]
                    },
                    k
                  ))
                },
                S
              )) })
            ]
          }
        ),
        i && /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "12px",
              padding: "8px"
            },
            children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  style: {
                    padding: "6px 12px",
                    backgroundColor: s.paginationBg,
                    color: s.paginationText,
                    borderRadius: "6px",
                    border: "none",
                    opacity: c === 1 ? 0.5 : 1,
                    cursor: c === 1 ? "not-allowed" : "pointer",
                    userSelect: "none"
                  },
                  disabled: c === 1,
                  onClick: () => d((g) => Math.max(g - 1, 1)),
                  children: "Prev"
                }
              ),
              /* @__PURE__ */ e.jsxs("span", { style: { color: s.paginationText }, children: [
                "Page ",
                c
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  style: {
                    padding: "6px 12px",
                    backgroundColor: s.paginationBg,
                    color: s.paginationText,
                    borderRadius: "6px",
                    border: "none",
                    opacity: c * l >= n.length ? 0.5 : 1,
                    cursor: c * l >= n.length ? "not-allowed" : "pointer",
                    userSelect: "none"
                  },
                  disabled: c * l >= n.length,
                  onClick: () => d((g) => g + 1),
                  children: "Next"
                }
              )
            ]
          }
        )
      ]
    }
  );
}, qt = ({
  children: t,
  className: n = "",
  style: o = {},
  background: i = "#fff",
  backgroundImage: l,
  backgroundSize: s = "cover",
  backgroundPosition: a = "center",
  backgroundRepeat: p = "no-repeat",
  textColor: x = "#000",
  borderRadius: j = 12,
  padding: c = 24,
  margin: d = 0,
  maxWidth: f = "100%",
  boxShadow: u = "0 4px 12px rgba(0,0,0,0.1)",
  border: v = "none",
  display: y = "flex",
  flexDirection: T = "column",
  justifyContent: z = "flex-start",
  alignItems: C = "stretch",
  gap: E = 16
}) => {
  const g = {
    background: i,
    color: x,
    borderRadius: j,
    padding: c,
    margin: d,
    maxWidth: f,
    boxShadow: u,
    border: v,
    display: y,
    flexDirection: T,
    justifyContent: z,
    alignItems: C,
    gap: E,
    boxSizing: "border-box",
    // Background image styles if provided
    ...l ? {
      backgroundImage: `url(${l})`,
      backgroundSize: s,
      backgroundPosition: a,
      backgroundRepeat: p
    } : {},
    ...o
  };
  return /* @__PURE__ */ e.jsx("div", { className: n, style: g, children: t });
}, _e = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Gt = ({
  columns: t = { sm: 1, md: 2, lg: 3 },
  gap: n = "16px",
  padding: o = "20px",
  alignItems: i = "stretch",
  justifyItems: l = "stretch",
  backgroundColor: s = "transparent",
  width: a = "100%",
  maxWidth: p = "100%",
  height: x = "auto",
  children: j,
  style: c
}) => {
  const [d, f] = R(
    _e(window.innerWidth)
  );
  G(() => {
    const y = () => f(_e(window.innerWidth));
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []);
  const u = ee(() => typeof t == "number" ? t : t[d] ?? 1, [t, d]), v = ee(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${u}, 1fr)`,
      gap: n,
      padding: o,
      alignItems: i,
      justifyItems: l,
      backgroundColor: s,
      width: a,
      maxWidth: p,
      height: x,
      boxSizing: "border-box",
      ...c
    }),
    [
      u,
      n,
      o,
      i,
      l,
      s,
      a,
      p,
      x,
      c
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: v, children: j });
}, Ae = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Xt = ({
  direction: t = "row",
  align: n = "center",
  justify: o = "space-between",
  gap: i = 16,
  padding: l = 20,
  backgroundColor: s = "transparent",
  width: a = "100%",
  maxWidth: p = "100%",
  height: x = "auto",
  style: j,
  children: c
}) => {
  const [d, f] = R(
    Ae(window.innerWidth)
  );
  G(() => {
    const y = () => f(Ae(window.innerWidth));
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []);
  const u = ee(() => typeof t == "string" ? t : t[d] ?? "row", [t, d]), v = ee(
    () => ({
      display: "flex",
      flexDirection: u,
      alignItems: n,
      justifyContent: o,
      gap: typeof i == "number" ? `${i}px` : i,
      padding: typeof l == "number" ? `${l}px` : l,
      backgroundColor: s,
      width: a,
      maxWidth: p,
      height: x,
      boxSizing: "border-box",
      ...j
    }),
    [
      u,
      n,
      o,
      i,
      l,
      s,
      a,
      p,
      x,
      j
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: v, children: c });
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
    Icon: /* @__PURE__ */ e.jsx(lt, { size: 20 })
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
  dismissible: i = !0,
  onClose: l,
  duration: s,
  icon: a,
  actionButton: p,
  position: x = "top-right",
  className: j,
  style: c
}) => {
  const [d, f] = R(!0);
  if (G(() => {
    if (s) {
      const C = setTimeout(() => {
        f(!1), l?.();
      }, s);
      return () => clearTimeout(C);
    }
  }, [s, l]), !d) return null;
  const { bg: u, border: v, iconColor: y, Icon: T } = zt[o], z = Rt(x);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: j,
      style: {
        ...z,
        display: "flex",
        gap: "12px",
        padding: "16px",
        backgroundColor: u,
        borderLeft: `4px solid ${v}`,
        borderRadius: "8px",
        color: "#111827",
        alignItems: "flex-start",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        animation: "slideIn 0.3s ease",
        maxWidth: "600px",
        width: "calc(100% - 40px)",
        ...c
        // ✅ User custom styles merged last
      },
      children: [
        /* @__PURE__ */ e.jsx("div", { style: { color: y, marginTop: "3px" }, children: a || T }),
        /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
          t && /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", marginBottom: "4px" }, children: t }),
          n && /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", color: "#374151" }, children: n }),
          p && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "10px" }, children: p })
        ] }),
        i && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              f(!1), l?.();
            },
            style: {
              background: "transparent",
              border: "none",
              color: "#6b7280",
              cursor: "pointer",
              marginLeft: "8px"
            },
            children: /* @__PURE__ */ e.jsx(le, { size: 16 })
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
  borderColor: i = "#2563eb",
  icon: l,
  iconPosition: s = "left",
  rounded: a = !1,
  borderRadius: p,
  borderWidth: x = "0",
  fontSize: j = "14px",
  fontWeight: c = 500,
  horizontalPadding: d = "10px",
  verticalPadding: f = "6px",
  margin: u = "0",
  shadow: v = "0 1px 4px rgba(0, 0, 0, 0.1)",
  notificationDot: y = !1,
  dotColor: T = "#ef4444",
  count: z,
  pulse: C = !1,
  style: E,
  onClick: g
}) => {
  const S = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: n,
    border: `${x} solid ${i}`,
    borderRadius: p || (a ? "9999px" : "6px"),
    padding: `${f} ${d}`,
    fontSize: j,
    fontWeight: c,
    margin: u,
    boxShadow: v,
    position: "relative",
    cursor: g ? "pointer" : "default",
    ...E
  }, k = {
    color: o,
    display: "inline"
  }, b = {
    display: "flex",
    alignItems: "center",
    color: o
  }, F = {
    ...b,
    marginRight: t ? "6px" : "0px"
  }, Y = {
    ...b,
    marginLeft: t ? "6px" : "0px"
  }, I = {
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
  }, M = {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    height: "8px",
    width: "8px",
    backgroundColor: T,
    borderRadius: "50%",
    zIndex: 1,
    animation: C ? "pulseAnim 1.2s infinite" : void 0
  };
  return /* @__PURE__ */ e.jsxs("span", { style: S, onClick: g, children: [
    y && /* @__PURE__ */ e.jsx("span", { style: M }),
    typeof z < "u" && /* @__PURE__ */ e.jsx("span", { style: I, children: z }),
    l && s === "left" && /* @__PURE__ */ e.jsx("span", { style: F, children: l }),
    t && /* @__PURE__ */ e.jsx("span", { style: k, children: t }),
    l && s === "right" && /* @__PURE__ */ e.jsx("span", { style: Y, children: l }),
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
  overlayStyle: i,
  modalStyle: l,
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
      ...i
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
          ...l
        },
        onClick: (a) => a.stopPropagation(),
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
              onMouseEnter: (a) => a.currentTarget.style.color = "#000",
              onMouseLeave: (a) => a.currentTarget.style.color = "#444",
              children: /* @__PURE__ */ e.jsx(le, { size: 24 })
            }
          ),
          o
        ]
      }
    )
  }
) : null, Be = {
  small: 32,
  medium: 48,
  large: 64
}, Le = {
  online: "#4ade80",
  // green-400
  offline: "#f87171"
  // red-400
}, Mt = ({
  src: t,
  alt: n = "User Avatar",
  size: o = "medium",
  isOnline: i = !1,
  isOffline: l = !1,
  className: s = "",
  style: a
}) => {
  const p = Be[o];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        position: "relative",
        width: p,
        height: p,
        borderRadius: "50%",
        overflow: "hidden",
        display: "inline-block",
        flexShrink: 0,
        ...a
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
            width: p,
            height: p,
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
        (i || l) && /* @__PURE__ */ e.jsx(
          "span",
          {
            "aria-label": i ? "Online" : "Offline",
            title: i ? "Online" : "Offline",
            style: {
              position: "absolute",
              bottom: 2,
              right: 2,
              width: p / 4,
              height: p / 4,
              borderRadius: "50%",
              border: "2px solid white",
              backgroundColor: i ? Le.online : Le.offline,
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
  className: i = "",
  style: l
}) => {
  const s = Be[o], a = t.slice(0, n), p = t.length - n;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: s / 6,
        ...l
      },
      className: i,
      "aria-label": `Group avatars, ${t.length} members`,
      role: "group",
      children: [
        a.map(({ src: x, alt: j, isOnline: c, isOffline: d }, f) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              marginLeft: f === 0 ? 0 : -(s / 3),
              boxShadow: "0 0 0 2px white",
              borderRadius: "50%",
              flexShrink: 0,
              cursor: "pointer"
            },
            title: j,
            children: /* @__PURE__ */ e.jsx(
              Mt,
              {
                src: x,
                alt: j,
                size: o,
                isOnline: c,
                isOffline: d
              }
            )
          },
          f
        )),
        p > 0 && /* @__PURE__ */ e.jsxs(
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
            "aria-label": `${p} more members`,
            title: `${p} more members`,
            children: [
              "+",
              p
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
  backgroundColor: i = "#fff",
  textColor: l = "#222",
  secondaryColor: s = "#e5e7eb",
  autoplay: a = !1,
  loop: p = !1
}) => {
  const [x, j] = R(null), c = J(null), d = J(null), [f, u] = R(!1), [v, y] = R(0), [T, z] = R(0), [C, E] = R(0.5), [g, S] = R(!1), [k, b] = R(p);
  G(() => {
    c.current && (c.current.volume = C);
  }, [C]), G(() => {
    c.current && (c.current.loop = k);
  }, [k]), G(() => {
    x === null && c.current && (c.current.pause(), u(!1), y(0), z(0));
  }, [x]);
  const F = (h) => {
    if (x === h) {
      if (!c.current) return;
      c.current.paused ? (c.current.play(), u(!0)) : (c.current.pause(), u(!1));
    } else
      j(h), setTimeout(() => {
        c.current?.play(), u(!0);
      }, 100);
  }, Y = () => {
    c.current && (y(c.current.currentTime), z(c.current.duration));
  }, I = (h) => {
    if (!c.current) return;
    const m = h.currentTarget.getBoundingClientRect(), B = (h.clientX - m.left) / m.width * T;
    c.current.currentTime = B, y(B);
  }, M = (h) => {
    if (c.current) {
      let m = c.current.currentTime + h;
      m = Math.min(Math.max(m, 0), T), c.current.currentTime = m, y(m);
    }
  }, L = () => {
    d.current && (g ? document.exitFullscreen?.() : d.current.requestFullscreen?.(), S(!g));
  }, V = () => {
    E((h) => h > 0 ? 0 : 0.5);
  }, O = (h) => {
    if (isNaN(h)) return "0:00";
    const m = Math.floor(h / 60), N = Math.floor(h % 60);
    return `${m}:${N < 10 ? "0" : ""}${N}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "section",
    {
      className: n,
      style: {
        maxWidth: "480px",
        margin: "auto",
        backgroundColor: i,
        color: l,
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
            children: t.map(({ src: h, title: m, thumbnail: N }, $) => {
              const B = x === $ && f;
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
                    color: B ? "#fff" : l,
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                  },
                  onClick: () => F($),
                  tabIndex: 0,
                  role: "button",
                  "aria-pressed": B,
                  onKeyDown: (r) => {
                    (r.key === "Enter" || r.key === " ") && F($);
                  },
                  "aria-label": `${B ? "Pause" : "Play"} ${m}`,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "span",
                      {
                        style: {
                          fontWeight: "600",
                          fontSize: "1rem"
                        },
                        children: m
                      }
                    ),
                    B ? /* @__PURE__ */ e.jsx(se, { size: 24, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(oe, { size: 24, "aria-hidden": "true" })
                  ]
                },
                $
              );
            })
          }
        ),
        x !== null && /* @__PURE__ */ e.jsxs(
          "article",
          {
            ref: d,
            style: {
              marginTop: "24px",
              padding: "12px",
              borderRadius: "12px",
              backgroundColor: s,
              color: l,
              boxSizing: "border-box"
            },
            "aria-label": `Audio player for ${t[x].title}`,
            children: [
              t[x].thumbnail && /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: t[x].thumbnail,
                  alt: `${t[x].title} thumbnail`,
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
                  children: t[x].title
                }
              ),
              /* @__PURE__ */ e.jsx(
                "audio",
                {
                  ref: c,
                  src: t[x].src,
                  autoPlay: a,
                  loop: k,
                  onTimeUpdate: Y,
                  onEnded: () => u(!1),
                  onLoadedMetadata: Y,
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
                        onClick: () => M(-10),
                        "aria-label": "Skip back 10 seconds",
                        style: te(l, o),
                        children: /* @__PURE__ */ e.jsx(he, { size: 20 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => {
                          c.current && (f ? c.current.pause() : c.current.play(), u(!f));
                        },
                        "aria-label": f ? "Pause" : "Play",
                        style: {
                          ...te("#fff", o),
                          borderRadius: "9999px",
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        },
                        children: f ? /* @__PURE__ */ e.jsx(se, { size: 24, color: "#fff" }) : /* @__PURE__ */ e.jsx(oe, { size: 24, color: "#fff" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => M(10),
                        "aria-label": "Skip forward 10 seconds",
                        style: te(l, o),
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
                        dateTime: `PT${Math.floor(v / 60)}M${Math.floor(
                          v % 60
                        )}S`,
                        style: { minWidth: "40px", fontSize: "0.9rem" },
                        "aria-label": "Current playback time",
                        children: O(v)
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        onClick: I,
                        role: "slider",
                        "aria-valuemin": 0,
                        "aria-valuemax": T,
                        "aria-valuenow": v,
                        tabIndex: 0,
                        onKeyDown: (h) => {
                          c.current && (h.key === "ArrowRight" ? M(5) : h.key === "ArrowLeft" && M(-5));
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
                              width: `${v / T * 100 || 0}%`,
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
                        dateTime: `PT${Math.floor(T / 60)}M${Math.floor(
                          T % 60
                        )}S`,
                        style: { minWidth: "40px", fontSize: "0.9rem", color: "#666" },
                        "aria-label": "Total duration",
                        children: [
                          "/ ",
                          O(T)
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
                        onClick: () => b(!k),
                        "aria-label": "Toggle Loop",
                        style: te(
                          k ? o : l,
                          k ? "#e0f2fe" : "transparent"
                        ),
                        children: /* @__PURE__ */ e.jsx(
                          fe,
                          {
                            size: 20,
                            color: k ? o : l,
                            "aria-hidden": "true"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: V,
                        "aria-label": C > 0 ? "Mute" : "Unmute",
                        style: te(l, "transparent"),
                        children: C > 0 ? /* @__PURE__ */ e.jsx(be, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(ye, { size: 20, "aria-hidden": "true" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: L,
                        "aria-label": g ? "Exit Fullscreen" : "Enter Fullscreen",
                        style: te(l, "transparent"),
                        children: g ? /* @__PURE__ */ e.jsx(xe, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(pe, { size: 20, "aria-hidden": "true" })
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
  gap: i = "10px",
  layout: l = "grid",
  lightbox: s = !0,
  autoPlay: a = !1,
  loop: p = !1,
  muted: x = !1,
  controls: j = !0,
  className: c = ""
}) => {
  const [d, f] = R(null), [u, v] = R(
    typeof window < "u" ? window.innerWidth : 1024
  ), [y, T] = R(n);
  G(() => {
    function k() {
      const b = window.innerWidth;
      if (v(b), !o) {
        T(n);
        return;
      }
      b < 640 ? T(o.mobile ?? n) : b < 1024 ? T(o.tablet ?? n) : T(o.desktop ?? n);
    }
    if (typeof window < "u")
      return k(), window.addEventListener("resize", k), () => window.removeEventListener("resize", k);
  }, [n, o]);
  const z = () => f(null), C = (k) => {
    k.stopPropagation(), d !== null && f((d - 1 + t.length) % t.length);
  }, E = (k) => {
    k.stopPropagation(), d !== null && f((d + 1) % t.length);
  }, g = ({
    src: k,
    poster: b,
    autoPlay: F = !1,
    loop: Y = !1,
    muted: I = !1,
    controls: M = !1,
    width: L = "100%",
    height: V = "150px",
    borderRadius: O = "12px",
    backgroundColor: h = "#1e1e1e",
    primaryColor: m = "#ff4081",
    padding: N = "16px",
    className: $,
    onClick: B
  }) => {
    const r = J(null), w = J(null), [P, U] = R(F), [D, A] = R(0), [W, X] = R(0), [_, Z] = R(I ? 0 : 0.5), [K, ie] = R(I), [ae, De] = R(!1), [ce, Ye] = R(Y);
    G(() => {
      r.current && (r.current.volume = _, r.current.loop = ce, r.current.muted = K);
    }, [_, ce, K]);
    const Ue = () => {
      r.current && (P ? r.current.pause() : r.current.play(), U(!P));
    }, ke = () => {
      r.current && (A(r.current.currentTime), X(r.current.duration));
    }, Ve = (Q) => {
      if (!r.current || !Q.currentTarget) return;
      const de = Q.currentTarget.getBoundingClientRect(), Ce = (Q.clientX - de.left) / de.width * W;
      r.current.currentTime = Ce, A(Ce);
    }, Se = (Q) => {
      r.current && (r.current.currentTime += Q);
    }, He = () => {
      w.current && (ae ? document.exitFullscreen?.() : w.current.requestFullscreen?.(), De(!ae));
    }, qe = () => {
      K ? (ie(!1), _ === 0 && Z(0.5)) : (ie(!0), Z(0));
    }, Te = (Q) => {
      if (isNaN(Q)) return "0:00";
      const de = Math.floor(Q / 60), me = Math.floor(Q % 60);
      return `${de}:${me < 10 ? "0" : ""}${me}`;
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: w,
        onClick: B,
        className: $,
        style: {
          position: "relative",
          width: L,
          backgroundColor: h,
          borderRadius: O,
          color: "#fff",
          overflow: "hidden",
          padding: N,
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
              src: k,
              poster: b,
              autoPlay: F,
              loop: Y,
              muted: I,
              controls: M,
              onTimeUpdate: ke,
              onLoadedMetadata: ke,
              style: {
                width: "100%",
                height: V,
                borderRadius: O,
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
                /* @__PURE__ */ e.jsx("button", { onClick: () => Se(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: Ue,
                    style: {
                      background: m,
                      borderRadius: "9999px",
                      padding: "10px",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer"
                    },
                    "aria-label": P ? "Pause" : "Play",
                    children: P ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: () => Se(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
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
                      /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: Te(D) }),
                      /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                        " ",
                        "/ ",
                        Te(W)
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    onClick: Ve,
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
                          width: `${D / W * 100 || 0}%`,
                          height: "100%",
                          background: m,
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
                          color: ce ? m : void 0
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
                      children: K ? /* @__PURE__ */ e.jsx(ye, { size: 18 }) : /* @__PURE__ */ e.jsx(be, { size: 18 })
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
  }, S = () => u < 640 ? "120px" : u < 1024 ? "150px" : "180px";
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${c}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${l === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${y}, 1fr)`,
          gap: i
        },
        children: t.map((k, b) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "relative",
              overflow: "hidden",
              borderRadius: 12,
              cursor: s ? "pointer" : "default"
            },
            onClick: () => s && f(b),
            children: /* @__PURE__ */ e.jsx(
              g,
              {
                src: k.src,
                poster: k.poster,
                autoPlay: a,
                loop: p,
                muted: x,
                controls: j,
                height: S(),
                borderRadius: "12px",
                padding: "8px",
                primaryColor: "#ff4081",
                onClick: (F) => F.stopPropagation()
              }
            )
          },
          b
        ))
      }
    ),
    s && d !== null && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: z,
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
              onClick: C,
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
              children: /* @__PURE__ */ e.jsx(We, { size: 32 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            g,
            {
              src: t[d].src,
              poster: t[d].poster,
              autoPlay: !0,
              controls: !0,
              muted: x,
              width: "80vw",
              height: "45vw",
              borderRadius: "16px",
              padding: "16px",
              primaryColor: "#ff4081",
              onClick: (k) => k.stopPropagation()
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: E,
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
              children: /* @__PURE__ */ e.jsx(Fe, { size: 32 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: z,
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
              children: /* @__PURE__ */ e.jsx(le, { size: 28 })
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
  layout: i = "grid",
  lightbox: l = !0,
  className: s = ""
}) => {
  const [a, p] = R(null), x = () => p(null), j = (d) => {
    d.stopPropagation(), a !== null && p((a - 1 + t.length) % t.length);
  }, c = (d) => {
    d.stopPropagation(), a !== null && p((a + 1) % t.length);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${s}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${i === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${n}, 1fr)`,
          gap: o
        },
        children: t.map((d, f) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "relative overflow-hidden rounded-lg cursor-pointer",
            onClick: () => l && p(f),
            children: /* @__PURE__ */ e.jsx(
              $e,
              {
                src: d.src,
                alt: d.alt || "Gallery Image",
                lazyLoad: !0,
                className: "w-full h-auto object-cover transition-transform duration-300 hover:scale-105",
                style: { display: "block", width: "100%", height: "auto" },
                hoverScale: 1.05,
                transitionDuration: "0.3s"
              }
            )
          },
          f
        ))
      }
    ),
    l && a !== null && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50",
        onClick: x,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Image preview",
        children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: j,
              "aria-label": "Previous image",
              className: "absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-black/50",
              children: /* @__PURE__ */ e.jsx(We, { size: 32 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            $e,
            {
              src: t[a].src,
              alt: t[a].alt || "Preview",
              className: "max-w-full max-h-full",
              lazyLoad: !0,
              onClick: (d) => d.stopPropagation()
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: c,
              "aria-label": "Next image",
              className: "absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-black/50",
              children: /* @__PURE__ */ e.jsx(Fe, { size: 32 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "absolute top-4 right-4 text-white p-2 rounded-full hover:bg-black/50",
              onClick: x,
              "aria-label": "Close preview",
              children: /* @__PURE__ */ e.jsx(le, { size: 28 })
            }
          )
        ]
      }
    )
  ] });
};
export {
  Bt as Accordion,
  Jt as Alert,
  er as AudioGallery,
  Ft as AudioPlayer,
  Mt as Avatar,
  Qt as AvatarGroup,
  Zt as Badge,
  It as Button,
  qt as Card,
  Dt as CheckRadio,
  Ot as Container,
  Ut as Drawer,
  Yt as DrawerButton,
  Vt as Dropdown,
  Xt as Flexbox,
  Gt as GridView,
  $e as Image,
  rr as ImageGallery,
  _t as Input,
  Lt as LeftTabs,
  At as List,
  Kt as Modal,
  Nt as RightTabs,
  Ht as Table,
  Et as Text,
  Pt as TopTabs,
  tr as VideoGallery,
  Wt as VideoPlayer
};
