import ve, { useMemo as ee, forwardRef as we, createElement as je, useRef as J, useState as I, useImperativeHandle as Ge, useEffect as G } from "react";
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
    var c = null;
    if (s !== void 0 && (c = "" + s), i.key !== void 0 && (c = "" + i.key), "key" in i) {
      s = {};
      for (var p in i)
        p !== "key" && (s[p] = i[p]);
    } else s = i;
    return i = s.ref, {
      $$typeof: t,
      type: l,
      key: c,
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
        return r.$$typeof === T ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case y:
          return "Fragment";
        case $:
          return "Profiler";
        case C:
          return "StrictMode";
        case R:
          return "Suspense";
        case M:
          return "SuspenseList";
        case E:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case m:
            return "Portal";
          case L:
            return (r.displayName || "Context") + ".Provider";
          case z:
            return (r._context.displayName || "Context") + ".Consumer";
          case S:
            var v = r.render;
            return r = r.displayName, r || (r = v.displayName || v.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case h:
            return v = r.displayName || null, v !== null ? v : t(r.type) || "Memo";
          case F:
            v = r._payload, r = r._init;
            try {
              return t(r(v));
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
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var W = v.error, U = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return W.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), n(r);
      }
    }
    function l(r) {
      if (r === y) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === F)
        return "<...>";
      try {
        var v = t(r);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = b.A;
      return r === null ? null : r.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(r) {
      if (k.call(r, "key")) {
        var v = Object.getOwnPropertyDescriptor(r, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function p(r, v) {
      function W() {
        g || (g = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: W,
        configurable: !0
      });
    }
    function x() {
      var r = t(this.type);
      return j[r] || (j[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function w(r, v, W, U, V, N, D, X) {
      return W = N.ref, r = {
        $$typeof: u,
        type: r,
        key: v,
        props: N,
        _owner: V
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(r, "ref", {
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
        value: D
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function a(r, v, W, U, V, N, D, X) {
      var P = v.children;
      if (P !== void 0)
        if (U)
          if (B(P)) {
            for (U = 0; U < P.length; U++)
              d(P[U]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(P);
      if (k.call(v, "key")) {
        P = t(r);
        var Z = Object.keys(v).filter(function(le) {
          return le !== "key";
        });
        U = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", Y[P + U] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          P,
          Z,
          P
        ), Y[P + U] = !0);
      }
      if (P = null, W !== void 0 && (o(W), P = "" + W), c(v) && (o(v.key), P = "" + v.key), "key" in v) {
        W = {};
        for (var K in v)
          K !== "key" && (W[K] = v[K]);
      } else W = v;
      return P && p(
        W,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), w(
        r,
        P,
        N,
        V,
        i(),
        W,
        D,
        X
      );
    }
    function d(r) {
      typeof r == "object" && r !== null && r.$$typeof === u && r._store && (r._store.validated = 1);
    }
    var f = ve, u = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), L = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), b = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, B = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var g, j = {}, O = f.react_stack_bottom_frame.bind(
      f,
      s
    )(), _ = A(l(s)), Y = {};
    ne.Fragment = y, ne.jsx = function(r, v, W, U, V) {
      var N = 1e4 > b.recentlyCreatedOwnerStacks++;
      return a(
        r,
        v,
        W,
        !1,
        U,
        V,
        N ? Error("react-stack-top-frame") : O,
        N ? A(l(r)) : _
      );
    }, ne.jsxs = function(r, v, W, U, V) {
      var N = 1e4 > b.recentlyCreatedOwnerStacks++;
      return a(
        r,
        v,
        W,
        !0,
        U,
        V,
        N ? Error("react-stack-top-frame") : O,
        N ? A(l(r)) : _
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
  color: c = "#333",
  bgColor: p,
  fontSize: x = "16px",
  fontWeight: w = "normal",
  textAlign: a = "left",
  textTransform: d = "none",
  lineHeight: f = "normal",
  letterSpacing: u = "normal",
  maxWidth: m,
  padding: y,
  margin: C,
  borderRadius: $,
  boxShadow: z,
  shadowColor: L = "rgba(0,0,0,0.1)",
  wordBreak: S = "normal",
  // Text styles
  italic: R = !1,
  bold: M = !1,
  underline: h = !1,
  strikethrough: F = !1,
  selectable: E = !0,
  truncate: T = !1,
  // Hover & Active
  hoverColor: b,
  hoverBgColor: k,
  hoverTextDecoration: B,
  activeColor: A,
  activeBgColor: g,
  transitionDuration: j = "0.25s",
  // Event
  onClick: O
}) => {
  const _ = ee(() => {
    const N = [];
    return h && N.push("underline"), F && N.push("line-through"), N.join(" ") || "none";
  }, [h, F]), Y = {
    color: c,
    backgroundColor: p || "transparent",
    fontSize: x,
    fontWeight: M ? "bold" : w,
    textAlign: a,
    textTransform: d,
    lineHeight: f,
    letterSpacing: u,
    maxWidth: m,
    padding: y,
    margin: C,
    borderRadius: $,
    textDecoration: _,
    fontStyle: R ? "italic" : "normal",
    wordBreak: S,
    boxShadow: z || (L ? `0 1px 4px ${L}` : void 0),
    cursor: O || l ? "pointer" : "default",
    userSelect: E ? "text" : "none",
    transition: `all ${j} ease-in-out`,
    overflow: T ? "hidden" : void 0,
    whiteSpace: T ? "nowrap" : void 0,
    textOverflow: T ? "ellipsis" : void 0
  }, V = {
    className: o,
    style: Y,
    onClick: O,
    onMouseEnter: (N) => {
      const D = N.currentTarget;
      b && (D.style.color = b), k && (D.style.backgroundColor = k), B && (D.style.textDecoration = B);
    },
    onMouseLeave: (N) => {
      const D = N.currentTarget;
      D.style.color = c, D.style.backgroundColor = p || "transparent", D.style.textDecoration = _;
    },
    onMouseDown: (N) => {
      const D = N.currentTarget;
      A && (D.style.color = A), g && (D.style.backgroundColor = g);
    },
    onMouseUp: (N) => {
      const D = N.currentTarget;
      D.style.color = b || c, D.style.backgroundColor = k || p || "transparent";
    }
  };
  return t === "a" || l ? /* @__PURE__ */ e.jsx(
    "a",
    {
      ...V,
      href: l,
      target: i,
      rel: s || (i === "_blank" ? "noopener noreferrer" : void 0),
      children: n
    }
  ) : /* @__PURE__ */ e.jsx(t, { ...V, children: n });
}, _e = ({
  src: t,
  alt: n = "Image",
  width: o = "100%",
  height: l = "auto",
  borderRadius: i = "8px",
  borderColor: s = "transparent",
  borderStyle: c = "solid",
  borderWidth: p = "0px",
  shadow: x = !1,
  boxShadow: w,
  opacity: a = 1,
  objectFit: d = "cover",
  overlayText: f,
  overlayColor: u = "rgba(0, 0, 0, 0.5)",
  svgIcon: m,
  responsive: y = !1,
  padding: C,
  margin: $,
  lazyLoad: z = !1,
  hoverOpacity: L,
  hoverShadow: S = !1,
  hoverScale: R,
  hoverRotate: M,
  transitionDuration: h = "0.3s",
  overflow: F = "hidden",
  className: E,
  style: T,
  onClick: b
}) => {
  const k = {
    width: y ? "100%" : o,
    height: y ? "100%" : l,
    borderRadius: i,
    border: `${p} ${c} ${s}`,
    objectFit: d,
    opacity: a,
    boxShadow: x ? w || "0 4px 12px rgba(0,0,0,0.15)" : "none",
    transition: `all ${h} ease`,
    display: "block"
  }, B = (j) => {
    j.currentTarget.style.opacity = L !== void 0 ? L.toString() : k.opacity?.toString() || "1", j.currentTarget.style.boxShadow = S ? "0 8px 20px rgba(0,0,0,0.3)" : k.boxShadow?.toString() || "none", j.currentTarget.style.transform = `scale(${R || 1}) rotate(${M || 0}deg)`;
  }, A = (j) => {
    j.currentTarget.style.opacity = k.opacity?.toString() || "1", j.currentTarget.style.boxShadow = k.boxShadow?.toString() || "none", j.currentTarget.style.transform = "scale(1) rotate(0deg)";
  }, g = (() => {
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
      onClick: b,
      className: E,
      style: {
        width: y ? "100%" : o,
        height: y ? "auto" : l,
        padding: C,
        margin: $,
        position: "relative",
        cursor: b ? "pointer" : "default",
        display: "inline-block",
        transition: `all ${h} ease`,
        ...g,
        ...T
        // Allow external override
      },
      children: [
        m ? /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: m
          }
        ) : /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t,
            alt: n,
            loading: z ? "lazy" : "eager",
            style: k,
            onMouseEnter: B,
            onMouseLeave: A
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
  iconBefore: l,
  iconAfter: i,
  className: s = "",
  style: c,
  // ✅ NEW
  fullWidth: p = !1,
  disabled: x = !1,
  loading: w = !1,
  loadingText: a = "Loading...",
  paddingHorizontal: d = 30,
  paddingVertical: f = 8,
  fontSize: u = "16px",
  fontWeight: m = 400,
  borderRadius: y = 6,
  backgroundColor: C = "#02b314",
  textColor: $ = "white",
  borderColor: z = "transparent",
  hoverBgColor: L = "transparent",
  hoverTextColor: S = "black",
  hoverBorderColor: R,
  boxShadow: M = "0 1px 2px rgba(0, 0, 0, 0.05)"
}) => {
  const [h, F] = ve.useState(!1), E = h && !x && S || $, T = h && !x && R || z, b = h && !x ? L : C, k = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${f}px ${d}px`,
    fontSize: u,
    fontWeight: m,
    borderRadius: `${y}px`,
    width: p ? "100%" : "auto",
    color: E,
    border: `1px solid ${T}`,
    backgroundColor: b,
    boxShadow: M,
    cursor: x ? "not-allowed" : "pointer",
    opacity: x ? 0.6 : 1,
    transition: "all 0.2s ease-in-out",
    gap: "8px",
    ...c
    // ✅ Apply user-supplied inline styles last
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: n,
      className: s,
      style: k,
      onClick: !x && !w ? o : void 0,
      disabled: x,
      onMouseEnter: () => F(!0),
      onMouseLeave: () => F(!1),
      children: [
        w ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
          /* @__PURE__ */ e.jsx("span", { children: a })
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
    iconNode: c,
    ...p
  }, x) => je(
    "svg",
    {
      ref: x,
      ...tt,
      width: n,
      height: n,
      stroke: t,
      strokeWidth: l ? Number(o) * 24 / Number(n) : o,
      className: Fe("lucide", i),
      ...!s && !et(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...c.map(([w, a]) => je(w, a)),
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
    name: c = "",
    disabled: p = !1,
    readOnly: x = !1,
    required: w = !1,
    error: a,
    success: d = !1,
    autoFocus: f = !1,
    iconLeft: u,
    iconRight: m,
    borderColor: y = "#ccc",
    focusBorderColor: C = "#2563eb",
    hoverBorderColor: $ = "#4b5563",
    backgroundColor: z = "#ffffff",
    textColor: L = "#111827",
    errorColor: S = "#dc2626",
    successColor: R = "#16a34a",
    labelColor: M = "#374151",
    size: h = "md",
    radius: F = "6px",
    fontSize: E = "14px",
    rows: T = 4,
    cols: b,
    maxLength: k,
    resize: B = !0,
    showCharacterCount: A = !0,
    className: g,
    style: j
  }, O) => {
    const _ = J(null), [Y, r] = I(i || ""), [v, W] = I(!1);
    Ge(O, () => _.current);
    const U = (P) => {
      k && P.target.value.length > k || (r(P.target.value), s && s(c, P.target.value));
    }, V = () => {
      switch (h) {
        case "sm":
          return "6px 12px";
        case "lg":
          return "12px 20px";
        default:
          return "10px 16px";
      }
    }, N = () => {
      switch (h) {
        case "sm":
          return "13px";
        case "lg":
          return "16px";
        default:
          return E;
      }
    }, D = a ? S : d ? R : y, X = {
      width: "100%",
      padding: V(),
      paddingLeft: u ? "40px" : V().split(" ")[1],
      paddingRight: m || t === "password" ? "40px" : V().split(" ")[1],
      border: `1px solid ${D}`,
      borderRadius: F,
      backgroundColor: z,
      color: L,
      fontSize: N(),
      outline: "none",
      resize: t === "textarea" && !B ? "none" : void 0,
      ...j
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
              htmlFor: c,
              style: {
                display: "block",
                marginBottom: "6px",
                fontSize: "14px",
                fontWeight: 500,
                color: M
              },
              children: [
                o,
                " ",
                w && /* @__PURE__ */ e.jsx("span", { style: { color: S }, children: "*" })
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
                ref: _,
                name: c,
                value: l ?? Y,
                onChange: U,
                placeholder: n,
                rows: T,
                cols: b,
                maxLength: k,
                disabled: p,
                readOnly: x,
                autoFocus: f,
                style: X,
                onFocus: (P) => {
                  P.currentTarget.style.borderColor = C;
                },
                onBlur: (P) => {
                  P.currentTarget.style.borderColor = D;
                },
                onMouseEnter: (P) => {
                  P.currentTarget.style.borderColor = $;
                },
                onMouseLeave: (P) => {
                  P.currentTarget.style.borderColor = D;
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: _,
                id: c,
                name: c,
                type: t === "password" ? v ? "text" : "password" : t,
                value: l ?? Y,
                onChange: U,
                placeholder: n,
                disabled: p,
                readOnly: x,
                autoFocus: f,
                style: X,
                onFocus: (P) => {
                  P.currentTarget.style.borderColor = C;
                },
                onBlur: (P) => {
                  P.currentTarget.style.borderColor = D;
                },
                onMouseEnter: (P) => {
                  P.currentTarget.style.borderColor = $;
                },
                onMouseLeave: (P) => {
                  P.currentTarget.style.borderColor = D;
                }
              }
            ),
            t === "password" && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => W(!v),
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
                children: v ? /* @__PURE__ */ e.jsx(dt, { size: 18 }) : /* @__PURE__ */ e.jsx(pt, { size: 18 })
              }
            ),
            m && t !== "password" && /* @__PURE__ */ e.jsx(
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
                children: m
              }
            )
          ] }),
          t === "textarea" && A && k && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                textAlign: "right",
                fontSize: "12px",
                color: "#6b7280",
                marginTop: "4px"
              },
              children: [
                (l ?? Y).length,
                "/",
                k
              ]
            }
          ),
          a && /* @__PURE__ */ e.jsx(
            "p",
            {
              style: {
                color: S,
                fontSize: "12px",
                marginTop: "4px",
                lineHeight: "1.3"
              },
              children: a
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
  backgroundColor: c = "#fff",
  borderColor: p = "#e5e7eb",
  fontSize: x = "15px",
  fontWeight: w = 500,
  borderRadius: a = "12px",
  padding: d = "16px",
  spacing: f = "12px",
  className: u,
  style: m
}) => {
  const y = l === "ordered", C = l === "inline", $ = {
    backgroundColor: c,
    borderColor: p,
    color: s,
    borderWidth: p ? "1px" : "0px",
    borderStyle: "solid",
    borderRadius: a,
    padding: d,
    ...m
  }, z = C ? {
    display: "flex",
    gap: f,
    paddingLeft: 0,
    listStyleType: "none",
    margin: 0
  } : {
    listStyleType: y ? "decimal" : "none",
    paddingLeft: y ? "20px" : "0",
    margin: 0
  }, L = y ? "ol" : "ul";
  return /* @__PURE__ */ e.jsxs("div", { className: u, style: $, children: [
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
    /* @__PURE__ */ e.jsx(L, { style: z, children: o.map((S, R) => /* @__PURE__ */ e.jsx(
      Oe,
      {
        ...S,
        bulletColor: i,
        textColor: s,
        fontSize: x,
        fontWeight: w,
        spacing: f,
        isInline: C
      },
      R
    )) })
  ] });
}, Oe = ({
  text: t,
  icon: n,
  onClick: o,
  subItems: l,
  bulletColor: i,
  textColor: s,
  fontSize: c,
  fontWeight: p,
  spacing: x,
  isInline: w
}) => {
  const a = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: w ? "0" : x
  }, d = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: c,
    fontWeight: p,
    color: s,
    cursor: o ? "pointer" : "default"
  }, f = {
    width: "8px",
    height: "8px",
    backgroundColor: i,
    borderRadius: "50%",
    flexShrink: 0
  }, u = {
    listStyleType: "disc",
    paddingLeft: "20px",
    margin: 0
  };
  return /* @__PURE__ */ e.jsxs("li", { style: a, children: [
    /* @__PURE__ */ e.jsxs("div", { style: d, onClick: o, children: [
      n ? /* @__PURE__ */ e.jsx("span", { style: { fontSize: "16px", color: s }, children: n }) : !w && /* @__PURE__ */ e.jsx("span", { style: f }),
      /* @__PURE__ */ e.jsx("span", { children: t })
    ] }),
    l && l.length > 0 && /* @__PURE__ */ e.jsx("ul", { style: u, children: l.map((m, y) => /* @__PURE__ */ e.jsx(
      Oe,
      {
        ...m,
        bulletColor: i,
        textColor: s,
        fontSize: c,
        fontWeight: p,
        spacing: x,
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
  contentContainerClassName: c = "",
  className: p = "",
  activeTabStyle: x,
  inactiveTabStyle: w,
  tabContainerStyle: a,
  contentContainerStyle: d,
  style: f,
  tabsWidth: u = "240px",
  tabGap: m = 8,
  tabPadding: y = "12px 16px",
  tabBorderRadius: C = 12,
  primaryColor: $ = "#2563eb",
  textColor: z = "#374151",
  backgroundColor: L = "#ffffff",
  hoverTextColor: S = "#1e40af",
  responsiveBreakpoint: R = 768,
  showDrawerLabel: M = "Select Tab"
}) => {
  const [h, F] = I(n), [E, T] = I(null), [b, k] = I(!1), [B, A] = I(!1);
  G(() => {
    const V = () => {
      k(window.innerWidth <= R);
    };
    return V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V);
  }, [R]);
  const g = o === "left" || o === "right", O = {
    display: "flex",
    flexDirection: g ? b ? "column" : o === "left" ? "row" : "row-reverse" : "column",
    width: "100%",
    height: "100%",
    backgroundColor: L,
    ...g && !b ? {} : { flexWrap: "wrap" },
    ...f
  }, _ = {
    width: g && !b ? u : "100%",
    display: "flex",
    flexDirection: g && !b ? "column" : "row",
    justifyContent: !g && o === "top" ? "center" : void 0,
    gap: m,
    padding: 8,
    boxSizing: "border-box",
    ...a
  }, Y = {
    flexGrow: 1,
    padding: 24,
    background: "#f9fafb",
    boxSizing: "border-box",
    minWidth: 0,
    ...g && !b ? { width: "calc(100% - " + u + ")" } : { width: "100%" },
    ...d
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
    width: g && !b ? "100%" : "auto",
    marginBottom: g && !b ? m : 0,
    marginRight: !g || b ? m : 0,
    justifyContent: "flex-start"
  }, v = {
    backgroundColor: $,
    color: "#fff",
    fontWeight: 700,
    boxShadow: `0 2px 10px ${$}55`,
    ...x
  }, W = {
    backgroundColor: "transparent",
    color: z,
    ...w
  }, U = {
    backgroundColor: `${$}22`,
    color: S
  };
  return /* @__PURE__ */ e.jsxs("div", { className: p, style: O, children: [
    /* @__PURE__ */ e.jsx("style", { children: `
        @media (max-width: ${R}px) {
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
    b && g ? /* @__PURE__ */ e.jsxs("div", { style: { width: "100%", marginBottom: 12 }, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => A(!B),
          style: {
            ...r,
            ...v,
            justifyContent: "space-between",
            width: "100%"
          },
          className: "custom-tab-drawer-button",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: M }),
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: 18 }, children: "☰" })
          ]
        }
      ),
      B && /* @__PURE__ */ e.jsx("div", { className: "custom-tab-mobile-drawer", children: t.map((V, N) => {
        const D = N === h, X = E === N;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              F(N), A(!1);
            },
            onMouseEnter: () => T(N),
            onMouseLeave: () => T(null),
            className: D ? l : i,
            style: {
              ...r,
              ...D ? v : W,
              ...X && !D ? U : {}
            },
            children: [
              V.icon && /* @__PURE__ */ e.jsx("span", { children: V.icon }),
              /* @__PURE__ */ e.jsx("span", { children: V.label })
            ]
          },
          N
        );
      }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "nav",
      {
        className: s,
        style: _,
        "aria-label": "Tabs Navigation",
        children: t.map((V, N) => {
          const D = N === h, X = E === N;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => F(N),
              onMouseEnter: () => T(N),
              onMouseLeave: () => T(null),
              className: D ? l : i,
              style: {
                ...r,
                ...D ? v : W,
                ...X && !D ? U : {}
              },
              children: [
                V.icon && /* @__PURE__ */ e.jsx("span", { children: V.icon }),
                /* @__PURE__ */ e.jsx("span", { children: V.label })
              ]
            },
            N
          );
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "section",
      {
        className: c,
        style: Y,
        role: "tabpanel",
        children: t[h]?.content
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
  width: c = "100%",
  height: p = "150px",
  borderRadius: x = "12px",
  backgroundColor: w = "#1e1e1e",
  primaryColor: a = "#ff4081",
  padding: d = "16px",
  className: f
}) => {
  const u = J(null), m = J(null), [y, C] = I(o), [$, z] = I(0), [L, S] = I(0), [R, M] = I(0.5), [h, F] = I(s), [E, T] = I(!1), [b, k] = I(l);
  G(() => {
    u.current && (u.current.volume = R, u.current.loop = b, u.current.muted = h);
  }, [R, b, h]);
  const B = () => {
    u.current && (y ? u.current.pause() : u.current.play(), C(!y));
  }, A = () => {
    u.current && (z(u.current.currentTime), S(u.current.duration));
  }, g = (r) => {
    if (!u.current || !r.currentTarget) return;
    const v = r.currentTarget.getBoundingClientRect(), U = (r.clientX - v.left) / v.width * L;
    u.current.currentTime = U, z(U);
  }, j = (r) => {
    u.current && (u.current.currentTime += r);
  }, O = () => {
    m.current && (E ? document.exitFullscreen?.() : m.current.requestFullscreen?.(), T(!E));
  }, _ = () => {
    F(!h), h && R === 0 && M(0.5);
  }, Y = (r) => {
    const v = Math.floor(r / 60), W = Math.floor(r % 60);
    return `${v}:${W < 10 ? "0" : ""}${W}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: m,
      className: f,
      style: {
        position: "relative",
        width: c,
        backgroundColor: w,
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
            loop: l,
            controls: i,
            muted: s,
            onTimeUpdate: A,
            onLoadedMetadata: A,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => j(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: B,
                  style: {
                    background: a,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => j(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: Y($) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  " ",
                  "/ ",
                  Y(L)
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
                        width: `${$ / L * 100 || 0}%`,
                        height: "100%",
                        background: a,
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
                    onClick: () => k(!b),
                    "aria-label": "Toggle Loop",
                    children: /* @__PURE__ */ e.jsx(fe, { size: 18, color: b ? a : void 0 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: _, "aria-label": "Toggle Mute", children: h ? /* @__PURE__ */ e.jsx(me, { size: 18 }) : /* @__PURE__ */ e.jsx(be, { size: 18 }) }),
                /* @__PURE__ */ e.jsx("button", { onClick: O, "aria-label": "Toggle Fullscreen", children: E ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
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
  secondaryColor: c = "#ffffff",
  borderRadius: p = "12px",
  padding: x = "16px",
  width: w = "100%",
  className: a
}) => {
  const d = J(null), f = J(null), [u, m] = I(o), [y, C] = I(0), [$, z] = I(0), [L, S] = I(0.5), [R, M] = I(!1), [h, F] = I(l);
  G(() => {
    d.current && (d.current.volume = L);
  }, [L]), G(() => {
    d.current && (d.current.loop = h);
  }, [h]);
  const E = () => {
    d.current && (u ? d.current.pause() : d.current.play(), m(!u));
  }, T = () => {
    d.current && (C(d.current.currentTime), z(d.current.duration));
  }, b = (g) => {
    if (!d.current || !g.currentTarget) return;
    const j = g.currentTarget.getBoundingClientRect(), _ = (g.clientX - j.left) / j.width * $;
    d.current.currentTime = _, C(_);
  }, k = (g) => {
    d.current && (d.current.currentTime += g);
  }, B = () => {
    f.current && (R ? document.exitFullscreen?.() : f.current.requestFullscreen?.(), M(!R));
  }, A = (g) => {
    const j = Math.floor(g / 60), O = Math.floor(g % 60);
    return `${j}:${O < 10 ? "0" : ""}${O}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: f,
      className: a,
      style: {
        position: "relative",
        width: w,
        backgroundColor: i,
        borderRadius: p,
        color: c,
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
            loop: l,
            onTimeUpdate: T,
            onLoadedMetadata: T
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => k(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: E,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => k(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", marginRight: "4px" }, children: A(y) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  "/ ",
                  A($)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: b,
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
                        width: `${y / $ * 100 || 0}%`,
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
                        onClick: () => F(!h),
                        "aria-label": "Toggle Loop",
                        children: /* @__PURE__ */ e.jsx(fe, { size: 18, color: h ? s : void 0 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => S(L > 0 ? 0 : 0.5),
                        "aria-label": "Toggle Mute",
                        children: L > 0 ? /* @__PURE__ */ e.jsx(be, { size: 18 }) : /* @__PURE__ */ e.jsx(me, { size: 18 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("button", { onClick: B, "aria-label": "Toggle Fullscreen", children: R ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
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
  gap: c = { sm: "10px", md: "20px", lg: "30px" },
  rowGap: p,
  columnGap: x,
  width: w = { sm: "100%", md: "90%", lg: "80%" },
  maxWidth: a = { sm: "100%", md: "800px", lg: "1200px" },
  height: d = { sm: "auto", md: "auto", lg: "auto" },
  padding: f = { sm: "10px", md: "20px", lg: "40px" },
  margin: u = { sm: "0 auto", md: "0 auto", lg: "0 auto" },
  textAlign: m = { sm: "left", md: "center", lg: "center" },
  backgroundColor: y = "#fff",
  border: C = { sm: "none", md: "1px solid #ddd", lg: "2px solid #ccc" },
  borderRadius: $ = { sm: "0", md: "8px", lg: "12px" },
  boxShadow: z = {
    sm: "none",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 6px 10px rgba(0,0,0,0.15)"
  },
  overflow: L = { sm: "visible", md: "hidden", lg: "auto" },
  children: S,
  className: R,
  style: M
}) => {
  const [h, F] = I(
    () => Pe(window.innerWidth)
  );
  G(() => {
    const T = () => F(Pe(window.innerWidth));
    return window.addEventListener("resize", T), () => window.removeEventListener("resize", T);
  }, []);
  const E = ee(() => {
    const T = H(t, h, "block"), b = H(
      n,
      h,
      void 0
    ), k = H(
      o,
      h,
      void 0
    ), B = H(
      l,
      h,
      void 0
    ), A = H(
      i,
      h,
      void 0
    ), g = H(
      s,
      h,
      void 0
    ), j = H(c, h, void 0), O = H(p, h, void 0), _ = H(
      x,
      h,
      void 0
    ), Y = H(w, h, "100%"), r = H(a, h, void 0), v = H(d, h, void 0), W = H(f, h, void 0), U = H(u, h, void 0), V = H(
      m,
      h,
      void 0
    ), N = H(C, h, void 0), D = H(
      $,
      h,
      void 0
    ), X = H(
      z,
      h,
      void 0
    ), P = H(L, h, void 0);
    return {
      display: T,
      ...b && { flexDirection: b },
      ...k && { justifyContent: k },
      ...B && { alignItems: B },
      ...A && {
        gridTemplateColumns: A
      },
      ...g && {
        gridTemplateRows: g
      },
      ...j && { gap: j },
      ...O && { rowGap: O },
      ..._ && { columnGap: _ },
      width: Y,
      ...r && { maxWidth: r },
      ...v && { height: v },
      ...W && { padding: W },
      ...U && { margin: U },
      ...V && { textAlign: V },
      backgroundColor: y,
      ...N && { border: N },
      ...D && { borderRadius: D },
      ...X && { boxShadow: X },
      ...P && { overflow: P },
      boxSizing: "border-box",
      ...M
    };
  }, [
    h,
    t,
    n,
    o,
    l,
    i,
    s,
    c,
    p,
    x,
    w,
    a,
    d,
    f,
    u,
    m,
    y,
    C,
    $,
    z,
    L,
    M
  ]);
  return /* @__PURE__ */ e.jsx("div", { className: R, style: E, children: S });
}, Dt = ({
  items: t,
  allowMultiple: n = !1,
  defaultOpenIndex: o = [],
  borderColor: l = "#d1d5db",
  backgroundColor: i = "#ffffff",
  textColor: s = "#111827",
  hoverBgColor: c = "#f3f4f6",
  hoverTextColor: p = "#111827",
  paddingVertical: x = "16px",
  paddingHorizontal: w = "16px",
  margin: a = "12px 0",
  iconOpen: d = "−",
  iconClose: f = "+",
  transitionDuration: u = "300ms",
  borderRadius: m = "8px",
  shadow: y = "0 2px 8px rgba(0, 0, 0, 0.05)",
  contentPadding: C = "16px",
  fontSize: $ = "16px",
  fontWeight: z = "600",
  iconSize: L = "18px",
  contentFontSize: S = "14px",
  contentFontWeight: R = "400",
  contentBackgroundColor: M = "#ffffff",
  contentTextColor: h = "#111827",
  className: F,
  style: E
}) => {
  const [T, b] = I(o), k = J([]), B = J([]);
  G(() => {
    k.current.forEach((g, j) => {
      g && (g.style.maxHeight = T.includes(j) ? `${g.scrollHeight}px` : "0px");
    });
  }, [T]);
  const A = (g) => {
    b(
      (j) => n ? j.includes(g) ? j.filter((O) => O !== g) : [...j, g] : j.includes(g) ? [] : [g]
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: F, style: { width: "100%", ...E }, children: t.map((g, j) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        border: `1px solid ${l}`,
        borderRadius: m,
        margin: a,
        boxShadow: y,
        overflow: "hidden",
        transition: `all ${u} ease`
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: (O) => {
              B.current[j] = O;
            },
            onClick: () => A(j),
            style: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: i,
              color: s,
              padding: `${x} ${w}`,
              fontWeight: z,
              fontSize: $,
              cursor: "pointer",
              outline: "none",
              border: "none",
              transition: `all ${u}`
            },
            onMouseEnter: (O) => {
              O.currentTarget.style.backgroundColor = c, O.currentTarget.style.color = p;
            },
            onMouseLeave: (O) => {
              O.currentTarget.style.backgroundColor = i, O.currentTarget.style.color = s;
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: g.title }),
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: L }, children: T.includes(j) ? d : f })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: (O) => {
              k.current[j] = O;
            },
            style: {
              overflow: "hidden",
              maxHeight: T.includes(j) ? `${k.current[j]?.scrollHeight}px` : "0px",
              transition: `max-height ${u} ease-in-out`
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                style: {
                  borderTop: `1px solid ${l}`,
                  backgroundColor: M,
                  color: h,
                  padding: C,
                  fontSize: S,
                  fontWeight: R
                },
                children: g.content
              }
            )
          }
        )
      ]
    },
    j
  )) });
}, Bt = ({
  type: t,
  name: n,
  options: o,
  selectedValues: l,
  onChange: i,
  disabled: s = !1,
  readOnly: c = !1,
  required: p = !1,
  error: x,
  className: w = "",
  customIcon: a,
  style: d,
  labelStyle: f,
  iconSize: u = 20,
  iconCheckedBgColor: m = "#2563eb",
  // blue-600
  iconUncheckedBorderColor: y = "#9ca3af",
  // gray-400
  textColor: C = "#374151",
  // gray-700
  errorStyle: $
}) => {
  const z = t === "checkbox", L = (S) => {
    if (i)
      if (z) {
        const R = Array.isArray(l) ? l.includes(S) ? l.filter((M) => M !== S) : [...l, S] : [S];
        i(R);
      } else
        i(S);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: w,
      style: { display: "flex", flexDirection: "column", gap: 8, ...d },
      role: t,
      "aria-disabled": s,
      children: [
        o.map((S) => {
          const R = z ? Array.isArray(l) && l.includes(S.value) : l === S.value;
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
                    value: S.value,
                    checked: R,
                    disabled: s || c,
                    required: p,
                    onChange: () => L(S.value),
                    style: { display: "none" }
                  }
                ),
                a ? a(R) : /* @__PURE__ */ e.jsxs(
                  "span",
                  {
                    style: {
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: u,
                      height: u,
                      borderRadius: z ? 4 : "50%",
                      border: `2px solid ${R ? m : y}`,
                      backgroundColor: R ? m : "transparent",
                      transition: "all 0.2s ease",
                      flexShrink: 0
                    },
                    children: [
                      R && !z && /* @__PURE__ */ e.jsx(
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
                      R && z && /* @__PURE__ */ e.jsx(
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
                /* @__PURE__ */ e.jsx("span", { style: { color: C, fontSize: 14 }, children: S.label })
              ]
            },
            S.value
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
              ...$
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
  transitionDuration: c = 300,
  style: p = {},
  children: x,
  showCloseButton: w = !0,
  closeButtonStyle: a = {}
}) => {
  const [d, f] = I(t);
  G(() => {
    t ? f(!0) : setTimeout(() => f(!1), c);
  }, [t, c]);
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
  }, [t, o]), m = {
    position: "fixed",
    zIndex: 1e3,
    backgroundColor: s,
    transition: `transform ${c}ms ease, opacity ${c}ms ease`,
    transform: u,
    opacity: t ? 1 : 0,
    ...p,
    ...o === "left" || o === "right" ? { top: 0, [o]: 0, width: l, height: "100%" } : { left: 0, [o]: 0, height: i, width: "100%" }
  }, y = {
    position: "fixed",
    display: d ? "block" : "none",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    transition: `opacity ${c}ms ease`,
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
          ...m,
          display: "block",
          visibility: d ? "visible" : "hidden",
          pointerEvents: t ? "auto" : "none"
        },
        children: [
          w && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: n,
              style: { ...C, ...a },
              children: /* @__PURE__ */ e.jsx(ie, { size: 20, color: "rgba(255, 0, 0, 1)" })
            }
          ),
          x
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
  borderColor: c = "#ccc",
  backgroundColor: p = "#fff",
  textColor: x = "#333",
  hoverColor: w = "#f0f0f0",
  padding: a = "12px 16px",
  margin: d = "0 0 1rem 0",
  dropdownWidth: f = "100%",
  dropdownHeight: u = "200px",
  borderRadius: m = "8px",
  boxShadow: y = "0 4px 8px rgba(0,0,0,0.1)",
  optionPadding: C = "10px 12px",
  optionGap: $ = "8px",
  transitionDuration: z = "0.25s",
  className: L = "",
  dropdownStyle: S,
  dropdownClassName: R = "",
  optionStyle: M,
  optionClassName: h = "",
  iconPrefix: F,
  iconSuffix: E
}) => {
  const [T, b] = I(o), [k, B] = I(!1), A = J(null);
  G(() => {
    const _ = (Y) => {
      A.current && !A.current.contains(Y.target) && B(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, []);
  const g = (_) => {
    b(_), B(!1), l && l(_);
  }, j = n ?? T, O = t.find((_) => _.value === j);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: A,
      className: L,
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
            onClick: () => B((_) => !_),
            disabled: s,
            "aria-haspopup": "listbox",
            "aria-expanded": k,
            style: {
              width: "100%",
              padding: a,
              backgroundColor: p,
              color: x,
              border: `1px solid ${c}`,
              borderRadius: m,
              boxShadow: s ? "none" : y,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: s ? "not-allowed" : "pointer",
              opacity: s ? 0.6 : 1,
              transition: `all ${z} ease-in-out`
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: $ }, children: [
                F && /* @__PURE__ */ e.jsx("span", { children: F }),
                /* @__PURE__ */ e.jsx("span", { children: O?.label || i })
              ] }),
              E || /* @__PURE__ */ e.jsx("span", { style: { marginLeft: "8px" }, children: "▼" })
            ]
          }
        ),
        k && /* @__PURE__ */ e.jsx(
          "ul",
          {
            role: "listbox",
            className: R,
            style: {
              position: "absolute",
              top: "100%",
              left: 0,
              zIndex: 1e3,
              width: "100%",
              maxHeight: u,
              overflowY: "auto",
              backgroundColor: p,
              border: `1px solid ${c}`,
              borderRadius: m,
              boxShadow: y,
              marginTop: "4px",
              transition: `all ${z} ease`,
              ...S
            },
            children: t.map((_) => /* @__PURE__ */ e.jsxs(
              "li",
              {
                onClick: () => g(_.value),
                role: "option",
                className: h,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: $,
                  padding: C,
                  cursor: "pointer",
                  backgroundColor: T === _.value ? w : p,
                  transition: `background ${z}`,
                  ...M
                },
                onMouseEnter: (Y) => Y.currentTarget.style.backgroundColor = w,
                onMouseLeave: (Y) => Y.currentTarget.style.backgroundColor = T === _.value ? w : p,
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
  headerBorderRadius: c = "8px",
  tableBorderRadius: p = "8px",
  sortable: x = !0,
  bodyAlign: w = "left"
}) => {
  const [a, d] = I(null), [f, u] = I("asc"), [m, y] = I(1), [C, $] = I(null), z = (E, T) => {
    !x || !T || (a === E ? u(f === "asc" ? "desc" : "asc") : (d(E), u("asc")), y(1));
  }, L = ve.useMemo(() => a ? [...n].sort((E, T) => {
    const b = E[a], k = T[a];
    if (b == null && k == null) return 0;
    if (b == null) return f === "asc" ? -1 : 1;
    if (k == null) return f === "asc" ? 1 : -1;
    if (typeof b == "number" && typeof k == "number")
      return f === "asc" ? b - k : k - b;
    if (b instanceof Date && k instanceof Date)
      return f === "asc" ? b.getTime() - k.getTime() : k.getTime() - b.getTime();
    const B = String(b).toLowerCase(), A = String(k).toLowerCase();
    return B === A ? 0 : f === "asc" ? B > A ? 1 : -1 : B < A ? 1 : -1;
  }) : [...n], [n, a, f]), S = l ? L.slice(
    (m - 1) * i,
    m * i
  ) : L, R = Math.ceil(n.length / i), M = /* @__PURE__ */ e.jsx(
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
  ), h = /* @__PURE__ */ e.jsx(
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
  ), F = /* @__PURE__ */ e.jsx(
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
          minWidth: "400px",
          borderRadius: p,
          // Important: for border-radius to show on table, set borderSpacing and borderCollapse accordingly
          borderSpacing: 0,
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { children: t.map(({ key: E, label: T, sortable: b, icon: k }, B) => /* @__PURE__ */ e.jsx(
            "th",
            {
              onClick: () => z(E, b),
              style: {
                padding: "12px",
                fontSize: "14px",
                border: `1px solid ${s.borderColor}`,
                cursor: x && b ? "pointer" : "default",
                backgroundColor: s.headerBg,
                color: s.headerText,
                userSelect: "none",
                borderTopLeftRadius: B === 0 ? c : void 0,
                borderTopRightRadius: B === t.length - 1 ? c : void 0,
                textAlign: "center",
                whiteSpace: "nowrap"
              },
              "aria-sort": a === E ? f === "asc" ? "ascending" : "descending" : void 0,
              role: x && b ? "button" : void 0,
              tabIndex: x && b ? 0 : void 0,
              onKeyDown: (A) => {
                x && b && (A.key === "Enter" || A.key === " ") && (A.preventDefault(), z(E, b));
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
                    k && /* @__PURE__ */ e.jsx("span", { children: k }),
                    /* @__PURE__ */ e.jsx("span", { children: T }),
                    x && b && (a === E ? f === "asc" ? M : h : F)
                  ]
                }
              )
            },
            E
          )) }) }),
          /* @__PURE__ */ e.jsx("tbody", { children: S.map((E, T) => /* @__PURE__ */ e.jsx(
            "tr",
            {
              style: {
                backgroundColor: C === T ? s.hoverBg : s.rowBg,
                color: s.rowText,
                transition: "background-color 0.2s ease-in-out"
              },
              onMouseEnter: () => $(T),
              onMouseLeave: () => $(null),
              children: t.map(({ key: b }) => /* @__PURE__ */ e.jsx(
                "td",
                {
                  style: {
                    padding: "12px",
                    border: `1px solid ${s.borderColor}`,
                    whiteSpace: "nowrap",
                    textAlign: w
                  },
                  children: E[b]
                },
                b
              ))
            },
            T
          )) })
        ]
      }
    ),
    l && R > 1 && /* @__PURE__ */ e.jsxs(
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
                opacity: m === 1 ? 0.5 : 1,
                cursor: m === 1 ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
              },
              disabled: m === 1,
              onClick: () => y((E) => Math.max(E - 1, 1)),
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
            m,
            " / ",
            R
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
                opacity: m === R ? 0.5 : 1,
                cursor: m === R ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
              },
              disabled: m === R,
              onClick: () => y((E) => Math.min(E + 1, R)),
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
  backgroundPosition: c = "center",
  backgroundRepeat: p = "no-repeat",
  textColor: x = "#000",
  borderRadius: w = 12,
  padding: a = 24,
  margin: d = 0,
  maxWidth: f = "100%",
  boxShadow: u = "0 4px 12px rgba(0,0,0,0.1)",
  border: m = "none",
  display: y = "flex",
  flexDirection: C = "column",
  justifyContent: $ = "flex-start",
  alignItems: z = "stretch",
  gap: L = 16
}) => {
  const S = {
    background: l,
    color: x,
    borderRadius: w,
    padding: a,
    margin: d,
    maxWidth: f,
    boxShadow: u,
    border: m,
    display: y,
    flexDirection: C,
    justifyContent: $,
    alignItems: z,
    gap: L,
    boxSizing: "border-box",
    // Background image styles if provided
    ...i ? {
      backgroundImage: `url(${i})`,
      backgroundSize: s,
      backgroundPosition: c,
      backgroundRepeat: p
    } : {},
    ...o
  };
  return /* @__PURE__ */ e.jsx("div", { className: n, style: S, children: t });
}, Ae = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Gt = ({
  columns: t = { sm: 1, md: 2, lg: 3 },
  gap: n = "16px",
  padding: o = "20px",
  alignItems: l = "stretch",
  justifyItems: i = "stretch",
  backgroundColor: s = "transparent",
  width: c = "100%",
  maxWidth: p = "100%",
  height: x = "auto",
  children: w,
  style: a
}) => {
  const [d, f] = I(
    Ae(window.innerWidth)
  );
  G(() => {
    const y = () => f(Ae(window.innerWidth));
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []);
  const u = ee(() => typeof t == "number" ? t : t[d] ?? 1, [t, d]), m = ee(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${u}, 1fr)`,
      gap: n,
      padding: o,
      alignItems: l,
      justifyItems: i,
      backgroundColor: s,
      width: c,
      maxWidth: p,
      height: x,
      boxSizing: "border-box",
      ...a
    }),
    [
      u,
      n,
      o,
      l,
      i,
      s,
      c,
      p,
      x,
      a
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: m, children: w });
}, Ne = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Xt = ({
  direction: t = "row",
  align: n = "center",
  justify: o = "space-between",
  gap: l = 16,
  padding: i = 20,
  backgroundColor: s = "transparent",
  width: c = "100%",
  maxWidth: p = "100%",
  height: x = "auto",
  style: w,
  children: a
}) => {
  const [d, f] = I(
    Ne(window.innerWidth)
  );
  G(() => {
    const y = () => f(Ne(window.innerWidth));
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []);
  const u = ee(() => typeof t == "string" ? t : t[d] ?? "row", [t, d]), m = ee(
    () => ({
      display: "flex",
      flexDirection: u,
      alignItems: n,
      justifyContent: o,
      gap: typeof l == "number" ? `${l}px` : l,
      padding: typeof i == "number" ? `${i}px` : i,
      backgroundColor: s,
      width: c,
      maxWidth: p,
      height: x,
      boxSizing: "border-box",
      ...w
    }),
    [
      u,
      n,
      o,
      l,
      i,
      s,
      c,
      p,
      x,
      w
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: m, children: a });
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
  icon: c,
  actionButton: p,
  position: x = "top-right",
  className: w,
  style: a
}) => {
  const [d, f] = I(!0);
  if (G(() => {
    if (s) {
      const z = setTimeout(() => {
        f(!1), i?.();
      }, s);
      return () => clearTimeout(z);
    }
  }, [s, i]), !d) return null;
  const { bg: u, border: m, iconColor: y, Icon: C } = zt[o], $ = Rt(x);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: w,
      style: {
        ...$,
        display: "flex",
        gap: "12px",
        padding: "16px",
        backgroundColor: u,
        borderLeft: `4px solid ${m}`,
        borderRadius: "8px",
        color: "#111827",
        alignItems: "flex-start",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        animation: "slideIn 0.3s ease",
        maxWidth: "600px",
        width: "calc(100% - 40px)",
        ...a
        // ✅ User custom styles merged last
      },
      children: [
        /* @__PURE__ */ e.jsx("div", { style: { color: y, marginTop: "3px" }, children: c || C }),
        /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
          t && /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", marginBottom: "4px" }, children: t }),
          n && /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", color: "#374151" }, children: n }),
          p && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "10px" }, children: p })
        ] }),
        l && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              f(!1), i?.();
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
  rounded: c = !1,
  borderRadius: p,
  borderWidth: x = "0",
  fontSize: w = "14px",
  fontWeight: a = 500,
  horizontalPadding: d = "10px",
  verticalPadding: f = "6px",
  margin: u = "0",
  shadow: m = "0 1px 4px rgba(0, 0, 0, 0.1)",
  notificationDot: y = !1,
  dotColor: C = "#ef4444",
  count: $,
  pulse: z = !1,
  style: L,
  onClick: S
}) => {
  const R = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: n,
    border: `${x} solid ${l}`,
    borderRadius: p || (c ? "9999px" : "6px"),
    padding: `${f} ${d}`,
    fontSize: w,
    fontWeight: a,
    margin: u,
    boxShadow: m,
    position: "relative",
    cursor: S ? "pointer" : "default",
    ...L
  }, M = {
    color: o,
    display: "inline"
  }, h = {
    display: "flex",
    alignItems: "center",
    color: o
  }, F = {
    ...h,
    marginRight: t ? "6px" : "0px"
  }, E = {
    ...h,
    marginLeft: t ? "6px" : "0px"
  }, T = {
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
  }, b = {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    height: "8px",
    width: "8px",
    backgroundColor: C,
    borderRadius: "50%",
    zIndex: 1,
    animation: z ? "pulseAnim 1.2s infinite" : void 0
  };
  return /* @__PURE__ */ e.jsxs("span", { style: R, onClick: S, children: [
    y && /* @__PURE__ */ e.jsx("span", { style: b }),
    typeof $ < "u" && /* @__PURE__ */ e.jsx("span", { style: T, children: $ }),
    i && s === "left" && /* @__PURE__ */ e.jsx("span", { style: F, children: i }),
    t && /* @__PURE__ */ e.jsx("span", { style: M, children: t }),
    i && s === "right" && /* @__PURE__ */ e.jsx("span", { style: E, children: i }),
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
        onClick: (c) => c.stopPropagation(),
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
              onMouseEnter: (c) => c.currentTarget.style.color = "#000",
              onMouseLeave: (c) => c.currentTarget.style.color = "#444",
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
  style: c
}) => {
  const p = De[o];
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
        ...c
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
        (l || i) && /* @__PURE__ */ e.jsx(
          "span",
          {
            "aria-label": l ? "Online" : "Offline",
            title: l ? "Online" : "Offline",
            style: {
              position: "absolute",
              bottom: 2,
              right: 2,
              width: p / 4,
              height: p / 4,
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
  const s = De[o], c = t.slice(0, n), p = t.length - n;
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
        c.map(({ src: x, alt: w, isOnline: a, isOffline: d }, f) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              marginLeft: f === 0 ? 0 : -(s / 3),
              boxShadow: "0 0 0 2px white",
              borderRadius: "50%",
              flexShrink: 0,
              cursor: "pointer"
            },
            title: w,
            children: /* @__PURE__ */ e.jsx(
              Mt,
              {
                src: x,
                alt: w,
                size: o,
                isOnline: a,
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
  backgroundColor: l = "#fff",
  textColor: i = "#222",
  secondaryColor: s = "#e5e7eb",
  autoplay: c = !1,
  loop: p = !1
}) => {
  const [x, w] = I(null), a = J(null), d = J(null), [f, u] = I(!1), [m, y] = I(0), [C, $] = I(0), [z, L] = I(0.5), [S, R] = I(!1), [M, h] = I(p);
  G(() => {
    a.current && (a.current.volume = z);
  }, [z]), G(() => {
    a.current && (a.current.loop = M);
  }, [M]), G(() => {
    x === null && a.current && (a.current.pause(), u(!1), y(0), $(0));
  }, [x]);
  const F = (g) => {
    if (x === g) {
      if (!a.current) return;
      a.current.paused ? (a.current.play(), u(!0)) : (a.current.pause(), u(!1));
    } else
      w(g), setTimeout(() => {
        a.current?.play(), u(!0);
      }, 100);
  }, E = () => {
    a.current && (y(a.current.currentTime), $(a.current.duration));
  }, T = (g) => {
    if (!a.current) return;
    const j = g.currentTarget.getBoundingClientRect(), Y = (g.clientX - j.left) / j.width * C;
    a.current.currentTime = Y, y(Y);
  }, b = (g) => {
    if (a.current) {
      let j = a.current.currentTime + g;
      j = Math.min(Math.max(j, 0), C), a.current.currentTime = j, y(j);
    }
  }, k = () => {
    d.current && (S ? document.exitFullscreen?.() : d.current.requestFullscreen?.(), R(!S));
  }, B = () => {
    L((g) => g > 0 ? 0 : 0.5);
  }, A = (g) => {
    if (isNaN(g)) return "0:00";
    const j = Math.floor(g / 60), O = Math.floor(g % 60);
    return `${j}:${O < 10 ? "0" : ""}${O}`;
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
            children: t.map(({ src: g, title: j, thumbnail: O }, _) => {
              const Y = x === _ && f;
              return /* @__PURE__ */ e.jsxs(
                "li",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px",
                    borderRadius: "10px",
                    backgroundColor: Y ? o : s,
                    color: Y ? "#fff" : i,
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                  },
                  onClick: () => F(_),
                  tabIndex: 0,
                  role: "button",
                  "aria-pressed": Y,
                  onKeyDown: (r) => {
                    (r.key === "Enter" || r.key === " ") && F(_);
                  },
                  "aria-label": `${Y ? "Pause" : "Play"} ${j}`,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "span",
                      {
                        style: {
                          fontWeight: "600",
                          fontSize: "1rem"
                        },
                        children: j
                      }
                    ),
                    Y ? /* @__PURE__ */ e.jsx(se, { size: 24, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(oe, { size: 24, "aria-hidden": "true" })
                  ]
                },
                _
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
              color: i,
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
                  ref: a,
                  src: t[x].src,
                  autoPlay: c,
                  loop: M,
                  onTimeUpdate: E,
                  onEnded: () => u(!1),
                  onLoadedMetadata: E,
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
                        onClick: () => b(-10),
                        "aria-label": "Skip back 10 seconds",
                        style: te(i, o),
                        children: /* @__PURE__ */ e.jsx(he, { size: 20 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => {
                          a.current && (f ? a.current.pause() : a.current.play(), u(!f));
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
                        onClick: () => b(10),
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
                        dateTime: `PT${Math.floor(m / 60)}M${Math.floor(
                          m % 60
                        )}S`,
                        style: { minWidth: "40px", fontSize: "0.9rem" },
                        "aria-label": "Current playback time",
                        children: A(m)
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        onClick: T,
                        role: "slider",
                        "aria-valuemin": 0,
                        "aria-valuemax": C,
                        "aria-valuenow": m,
                        tabIndex: 0,
                        onKeyDown: (g) => {
                          a.current && (g.key === "ArrowRight" ? b(5) : g.key === "ArrowLeft" && b(-5));
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
                              width: `${m / C * 100 || 0}%`,
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
                          A(C)
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
                        onClick: () => h(!M),
                        "aria-label": "Toggle Loop",
                        style: te(
                          M ? o : i,
                          M ? "#e0f2fe" : "transparent"
                        ),
                        children: /* @__PURE__ */ e.jsx(
                          fe,
                          {
                            size: 20,
                            color: M ? o : i,
                            "aria-hidden": "true"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: B,
                        "aria-label": z > 0 ? "Mute" : "Unmute",
                        style: te(i, "transparent"),
                        children: z > 0 ? /* @__PURE__ */ e.jsx(be, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(me, { size: 20, "aria-hidden": "true" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: k,
                        "aria-label": S ? "Exit Fullscreen" : "Enter Fullscreen",
                        style: te(i, "transparent"),
                        children: S ? /* @__PURE__ */ e.jsx(xe, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(pe, { size: 20, "aria-hidden": "true" })
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
  autoPlay: c = !1,
  loop: p = !1,
  muted: x = !1,
  controls: w = !0,
  className: a = ""
}) => {
  const [d, f] = I(null), [u, m] = I(
    typeof window < "u" ? window.innerWidth : 1024
  ), [y, C] = I(n);
  G(() => {
    function M() {
      const h = window.innerWidth;
      if (m(h), !o) {
        C(n);
        return;
      }
      h < 640 ? C(o.mobile ?? n) : h < 1024 ? C(o.tablet ?? n) : C(o.desktop ?? n);
    }
    if (typeof window < "u")
      return M(), window.addEventListener("resize", M), () => window.removeEventListener("resize", M);
  }, [n, o]);
  const $ = () => f(null), z = (M) => {
    M.stopPropagation(), d !== null && f((d - 1 + t.length) % t.length);
  }, L = (M) => {
    M.stopPropagation(), d !== null && f((d + 1) % t.length);
  }, S = ({
    src: M,
    poster: h,
    autoPlay: F = !1,
    loop: E = !1,
    muted: T = !1,
    controls: b = !1,
    width: k = "100%",
    height: B = "150px",
    borderRadius: A = "12px",
    backgroundColor: g = "#1e1e1e",
    primaryColor: j = "#ff4081",
    padding: O = "16px",
    className: _,
    onClick: Y
  }) => {
    const r = J(null), v = J(null), [W, U] = I(F), [V, N] = I(0), [D, X] = I(0), [P, Z] = I(T ? 0 : 0.5), [K, le] = I(T), [ae, Be] = I(!1), [ce, Ye] = I(E);
    G(() => {
      r.current && (r.current.volume = P, r.current.loop = ce, r.current.muted = K);
    }, [P, ce, K]);
    const Ve = () => {
      r.current && (W ? r.current.pause() : r.current.play(), U(!W));
    }, Ce = () => {
      r.current && (N(r.current.currentTime), X(r.current.duration));
    }, Ue = (Q) => {
      if (!r.current || !Q.currentTarget) return;
      const de = Q.currentTarget.getBoundingClientRect(), Me = (Q.clientX - de.left) / de.width * D;
      r.current.currentTime = Me, N(Me);
    }, ze = (Q) => {
      r.current && (r.current.currentTime += Q);
    }, He = () => {
      v.current && (ae ? document.exitFullscreen?.() : v.current.requestFullscreen?.(), Be(!ae));
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
        ref: v,
        onClick: Y,
        className: _,
        style: {
          position: "relative",
          width: k,
          backgroundColor: g,
          borderRadius: A,
          color: "#fff",
          overflow: "hidden",
          padding: O,
          boxSizing: "border-box",
          maxWidth: "100%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          cursor: Y ? "pointer" : "default",
          userSelect: "none"
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "video",
            {
              ref: r,
              src: M,
              poster: h,
              autoPlay: F,
              loop: E,
              muted: T,
              controls: b,
              onTimeUpdate: Ce,
              onLoadedMetadata: Ce,
              style: {
                width: "100%",
                height: B,
                borderRadius: A,
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
                      background: j,
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
                      /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: Re(V) }),
                      /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                        " ",
                        "/ ",
                        Re(D)
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
                          width: `${V / D * 100 || 0}%`,
                          height: "100%",
                          background: j,
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
                          color: ce ? j : void 0
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
  }, R = () => u < 640 ? "120px" : u < 1024 ? "150px" : "180px";
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${a}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${i === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${y}, 1fr)`,
          gap: l
        },
        children: t.map((M, h) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "relative",
              overflow: "hidden",
              borderRadius: 12,
              cursor: s ? "pointer" : "default"
            },
            onClick: () => s && f(h),
            children: /* @__PURE__ */ e.jsx(
              S,
              {
                src: M.src,
                poster: M.poster,
                autoPlay: c,
                loop: p,
                muted: x,
                controls: w,
                height: R(),
                borderRadius: "12px",
                padding: "8px",
                primaryColor: "#ff4081",
                onClick: (F) => F.stopPropagation()
              }
            )
          },
          h
        ))
      }
    ),
    s && d !== null && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: $,
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
              onClick: z,
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
            S,
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
              onClick: (M) => M.stopPropagation()
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
              onClick: $,
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
  const [c, p] = I(null), x = () => p(null), w = (d) => {
    d.stopPropagation(), c !== null && p((c - 1 + t.length) % t.length);
  }, a = (d) => {
    d.stopPropagation(), c !== null && p((c + 1) % t.length);
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
        children: t.map((d, f) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "relative overflow-hidden rounded-lg cursor-pointer",
            onClick: () => i && p(f),
            children: /* @__PURE__ */ e.jsx(
              _e,
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
    i && c !== null && /* @__PURE__ */ e.jsxs(
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
              onClick: w,
              "aria-label": "Previous image",
              className: "absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-black/50",
              children: /* @__PURE__ */ e.jsx(ke, { size: 32 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            _e,
            {
              src: t[c].src,
              alt: t[c].alt || "Preview",
              className: "max-w-full max-h-full",
              lazyLoad: !0,
              onClick: (d) => d.stopPropagation()
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: a,
              "aria-label": "Next image",
              className: "absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-black/50",
              children: /* @__PURE__ */ e.jsx(Se, { size: 32 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "absolute top-4 right-4 text-white p-2 rounded-full hover:bg-black/50",
              onClick: x,
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
