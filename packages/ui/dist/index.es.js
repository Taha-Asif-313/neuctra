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
      for (var u in i)
        u !== "key" && (s[u] = i[u]);
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
        return r.$$typeof === j ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case h:
          return "Fragment";
        case M:
          return "Profiler";
        case C:
          return "StrictMode";
        case E:
          return "Suspense";
        case T:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case y:
            return "Portal";
          case _:
            return (r.displayName || "Context") + ".Provider";
          case R:
            return (r._context.displayName || "Context") + ".Consumer";
          case z:
            var w = r.render;
            return r = r.displayName, r || (r = w.displayName || w.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case g:
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
        var W = w.error, U = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return W.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), n(r);
      }
    }
    function l(r) {
      if (r === h) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === F)
        return "<...>";
      try {
        var w = t(r);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = S.A;
      return r === null ? null : r.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function d(r) {
      if (m.call(r, "key")) {
        var w = Object.getOwnPropertyDescriptor(r, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function u(r, w) {
      function W() {
        x || (x = !0, console.error(
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
    function k(r, w, W, U, V, P, D, X) {
      return W = P.ref, r = {
        $$typeof: a,
        type: r,
        key: w,
        props: P,
        _owner: V
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
        value: D
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function p(r, w, W, U, V, P, D, X) {
      var L = w.children;
      if (L !== void 0)
        if (U)
          if (A(L)) {
            for (U = 0; U < L.length; U++)
              c(L[U]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(L);
      if (m.call(w, "key")) {
        L = t(r);
        var Z = Object.keys(w).filter(function(le) {
          return le !== "key";
        });
        U = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", Y[L + U] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          L,
          Z,
          L
        ), Y[L + U] = !0);
      }
      if (L = null, W !== void 0 && (o(W), L = "" + W), d(w) && (o(w.key), L = "" + w.key), "key" in w) {
        W = {};
        for (var K in w)
          K !== "key" && (W[K] = w[K]);
      } else W = w;
      return L && u(
        W,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), k(
        r,
        L,
        P,
        V,
        i(),
        W,
        D,
        X
      );
    }
    function c(r) {
      typeof r == "object" && r !== null && r.$$typeof === a && r._store && (r._store.validated = 1);
    }
    var b = ve, a = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), j = Symbol.for("react.client.reference"), S = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, m = Object.prototype.hasOwnProperty, A = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var x, v = {}, O = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), I = N(l(s)), Y = {};
    ne.Fragment = h, ne.jsx = function(r, w, W, U, V) {
      var P = 1e4 > S.recentlyCreatedOwnerStacks++;
      return p(
        r,
        w,
        W,
        !1,
        U,
        V,
        P ? Error("react-stack-top-frame") : O,
        P ? N(l(r)) : I
      );
    }, ne.jsxs = function(r, w, W, U, V) {
      var P = 1e4 > S.recentlyCreatedOwnerStacks++;
      return p(
        r,
        w,
        W,
        !0,
        U,
        V,
        P ? Error("react-stack-top-frame") : O,
        P ? N(l(r)) : I
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
  bgColor: u,
  fontSize: f = "16px",
  fontWeight: k = "normal",
  textAlign: p = "left",
  textTransform: c = "none",
  lineHeight: b = "normal",
  letterSpacing: a = "normal",
  maxWidth: y,
  padding: h,
  margin: C,
  borderRadius: M,
  boxShadow: R,
  shadowColor: _ = "rgba(0,0,0,0.1)",
  wordBreak: z = "normal",
  // Text styles
  italic: E = !1,
  bold: T = !1,
  underline: g = !1,
  strikethrough: F = !1,
  selectable: B = !0,
  truncate: j = !1,
  // Hover & Active
  hoverColor: S,
  hoverBgColor: m,
  hoverTextDecoration: A,
  activeColor: N,
  activeBgColor: x,
  transitionDuration: v = "0.25s",
  // Event
  onClick: O
}) => {
  const I = ee(() => {
    const P = [];
    return g && P.push("underline"), F && P.push("line-through"), P.join(" ") || "none";
  }, [g, F]), Y = {
    color: d,
    backgroundColor: u || "transparent",
    fontSize: f,
    fontWeight: T ? "bold" : k,
    textAlign: p,
    textTransform: c,
    lineHeight: b,
    letterSpacing: a,
    maxWidth: y,
    padding: h,
    margin: C,
    borderRadius: M,
    textDecoration: I,
    fontStyle: E ? "italic" : "normal",
    wordBreak: z,
    boxShadow: R || (_ ? `0 1px 4px ${_}` : void 0),
    cursor: O || l ? "pointer" : "default",
    userSelect: B ? "text" : "none",
    transition: `all ${v} ease-in-out`,
    overflow: j ? "hidden" : void 0,
    whiteSpace: j ? "nowrap" : void 0,
    textOverflow: j ? "ellipsis" : void 0
  }, V = {
    className: o,
    style: Y,
    onClick: O,
    onMouseEnter: (P) => {
      const D = P.currentTarget;
      S && (D.style.color = S), m && (D.style.backgroundColor = m), A && (D.style.textDecoration = A);
    },
    onMouseLeave: (P) => {
      const D = P.currentTarget;
      D.style.color = d, D.style.backgroundColor = u || "transparent", D.style.textDecoration = I;
    },
    onMouseDown: (P) => {
      const D = P.currentTarget;
      N && (D.style.color = N), x && (D.style.backgroundColor = x);
    },
    onMouseUp: (P) => {
      const D = P.currentTarget;
      D.style.color = S || d, D.style.backgroundColor = m || u || "transparent";
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
  borderStyle: d = "solid",
  borderWidth: u = "0px",
  shadow: f = !1,
  boxShadow: k,
  opacity: p = 1,
  objectFit: c = "cover",
  overlayText: b,
  overlayColor: a = "rgba(0, 0, 0, 0.5)",
  svgIcon: y,
  responsive: h = !1,
  padding: C,
  margin: M,
  lazyLoad: R = !1,
  hoverOpacity: _,
  hoverShadow: z = !1,
  hoverScale: E,
  hoverRotate: T,
  transitionDuration: g = "0.3s",
  overflow: F = "hidden",
  className: B,
  style: j,
  onClick: S
}) => {
  const m = {
    width: h ? "100%" : o,
    height: h ? "100%" : l,
    borderRadius: i,
    border: `${u} ${d} ${s}`,
    objectFit: c,
    opacity: p,
    boxShadow: f ? k || "0 4px 12px rgba(0,0,0,0.15)" : "none",
    transition: `all ${g} ease`,
    display: "block"
  }, A = (v) => {
    v.currentTarget.style.opacity = _ !== void 0 ? _.toString() : m.opacity?.toString() || "1", v.currentTarget.style.boxShadow = z ? "0 8px 20px rgba(0,0,0,0.3)" : m.boxShadow?.toString() || "none", v.currentTarget.style.transform = `scale(${E || 1}) rotate(${T || 0}deg)`;
  }, N = (v) => {
    v.currentTarget.style.opacity = m.opacity?.toString() || "1", v.currentTarget.style.boxShadow = m.boxShadow?.toString() || "none", v.currentTarget.style.transform = "scale(1) rotate(0deg)";
  }, x = (() => {
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
      onClick: S,
      className: B,
      style: {
        width: h ? "100%" : o,
        height: h ? "auto" : l,
        padding: C,
        margin: M,
        position: "relative",
        cursor: S ? "pointer" : "default",
        display: "inline-block",
        transition: `all ${g} ease`,
        ...x,
        ...j
        // Allow external override
      },
      children: [
        y ? /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: y
          }
        ) : /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t,
            alt: n,
            loading: R ? "lazy" : "eager",
            style: m,
            onMouseEnter: A,
            onMouseLeave: N
          }
        ),
        b && /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: a,
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
            children: b
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
  fullWidth: u = !1,
  disabled: f = !1,
  loading: k = !1,
  loadingText: p = "Loading...",
  paddingHorizontal: c = 30,
  paddingVertical: b = 8,
  fontSize: a = "16px",
  fontWeight: y = 400,
  borderRadius: h = 6,
  backgroundColor: C = "#02b314",
  textColor: M = "white",
  borderColor: R = "transparent",
  hoverBgColor: _ = "transparent",
  hoverTextColor: z = "black",
  hoverBorderColor: E,
  boxShadow: T = "0 1px 2px rgba(0, 0, 0, 0.05)"
}) => {
  const [g, F] = ve.useState(!1), B = g && !f && z || M, j = g && !f && E || R, S = g && !f ? _ : C, m = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${b}px ${c}px`,
    fontSize: a,
    fontWeight: y,
    borderRadius: `${h}px`,
    width: u ? "100%" : "auto",
    color: B,
    border: `1px solid ${j}`,
    backgroundColor: S,
    boxShadow: T,
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
      style: m,
      onClick: !f && !k ? o : void 0,
      disabled: f,
      onMouseEnter: () => F(!0),
      onMouseLeave: () => F(!1),
      children: [
        k ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
          /* @__PURE__ */ e.jsx("span", { children: p })
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
    ...u
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
      ...!s && !et(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...d.map(([k, p]) => je(k, p)),
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
const ft = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], xt = q("info", ft);
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
], fe = q("minimize", gt);
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
], xe = q("rotate-ccw", yt);
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
    disabled: u = !1,
    readOnly: f = !1,
    required: k = !1,
    error: p,
    success: c = !1,
    autoFocus: b = !1,
    iconLeft: a,
    iconRight: y,
    borderColor: h = "#ccc",
    focusBorderColor: C = "#2563eb",
    hoverBorderColor: M = "#4b5563",
    backgroundColor: R = "#ffffff",
    textColor: _ = "#111827",
    errorColor: z = "#dc2626",
    successColor: E = "#16a34a",
    labelColor: T = "#374151",
    size: g = "md",
    radius: F = "6px",
    fontSize: B = "14px",
    rows: j = 4,
    cols: S,
    maxLength: m,
    resize: A = !0,
    showCharacterCount: N = !0,
    className: x,
    style: v
  }, O) => {
    const I = J(null), [Y, r] = $(i || ""), [w, W] = $(!1);
    Ge(O, () => I.current);
    const U = (L) => {
      m && L.target.value.length > m || (r(L.target.value), s && s(d, L.target.value));
    }, V = () => {
      switch (g) {
        case "sm":
          return "6px 12px";
        case "lg":
          return "12px 20px";
        default:
          return "10px 16px";
      }
    }, P = () => {
      switch (g) {
        case "sm":
          return "13px";
        case "lg":
          return "16px";
        default:
          return B;
      }
    }, D = p ? z : c ? E : h, X = {
      width: "100%",
      padding: V(),
      paddingLeft: a ? "40px" : V().split(" ")[1],
      paddingRight: y || t === "password" ? "40px" : V().split(" ")[1],
      border: `1px solid ${D}`,
      borderRadius: F,
      backgroundColor: R,
      color: _,
      fontSize: P(),
      outline: "none",
      resize: t === "textarea" && !A ? "none" : void 0,
      ...v
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: { width: "100%", fontFamily: "sans-serif" },
        className: x,
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
                color: T
              },
              children: [
                o,
                " ",
                k && /* @__PURE__ */ e.jsx("span", { style: { color: z }, children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { style: { position: "relative", width: "100%" }, children: [
            a && /* @__PURE__ */ e.jsx(
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
                children: a
              }
            ),
            t === "textarea" ? /* @__PURE__ */ e.jsx(
              "textarea",
              {
                ref: I,
                name: d,
                value: l ?? Y,
                onChange: U,
                placeholder: n,
                rows: j,
                cols: S,
                maxLength: m,
                disabled: u,
                readOnly: f,
                autoFocus: b,
                style: X,
                onFocus: (L) => {
                  L.currentTarget.style.borderColor = C;
                },
                onBlur: (L) => {
                  L.currentTarget.style.borderColor = D;
                },
                onMouseEnter: (L) => {
                  L.currentTarget.style.borderColor = M;
                },
                onMouseLeave: (L) => {
                  L.currentTarget.style.borderColor = D;
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: I,
                id: d,
                name: d,
                type: t === "password" ? w ? "text" : "password" : t,
                value: l ?? Y,
                onChange: U,
                placeholder: n,
                disabled: u,
                readOnly: f,
                autoFocus: b,
                style: X,
                onFocus: (L) => {
                  L.currentTarget.style.borderColor = C;
                },
                onBlur: (L) => {
                  L.currentTarget.style.borderColor = D;
                },
                onMouseEnter: (L) => {
                  L.currentTarget.style.borderColor = M;
                },
                onMouseLeave: (L) => {
                  L.currentTarget.style.borderColor = D;
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
            y && t !== "password" && /* @__PURE__ */ e.jsx(
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
                children: y
              }
            )
          ] }),
          t === "textarea" && N && m && /* @__PURE__ */ e.jsxs(
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
                m
              ]
            }
          ),
          p && /* @__PURE__ */ e.jsx(
            "p",
            {
              style: {
                color: z,
                fontSize: "12px",
                marginTop: "4px",
                lineHeight: "1.3"
              },
              children: p
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
  borderColor: u = "#e5e7eb",
  fontSize: f = "15px",
  fontWeight: k = 500,
  borderRadius: p = "12px",
  padding: c = "16px",
  spacing: b = "12px",
  className: a,
  style: y
}) => {
  const h = l === "ordered", C = l === "inline", M = {
    backgroundColor: d,
    borderColor: u,
    color: s,
    borderWidth: u ? "1px" : "0px",
    borderStyle: "solid",
    borderRadius: p,
    padding: c,
    ...y
  }, R = C ? {
    display: "flex",
    gap: b,
    paddingLeft: 0,
    listStyleType: "none",
    margin: 0
  } : {
    listStyleType: h ? "decimal" : "none",
    paddingLeft: h ? "20px" : "0",
    margin: 0
  }, _ = h ? "ol" : "ul";
  return /* @__PURE__ */ e.jsxs("div", { className: a, style: M, children: [
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
    /* @__PURE__ */ e.jsx(_, { style: R, children: o.map((z, E) => /* @__PURE__ */ e.jsx(
      Oe,
      {
        ...z,
        bulletColor: i,
        textColor: s,
        fontSize: f,
        fontWeight: k,
        spacing: b,
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
  fontWeight: u,
  spacing: f,
  isInline: k
}) => {
  const p = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: k ? "0" : f
  }, c = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: d,
    fontWeight: u,
    color: s,
    cursor: o ? "pointer" : "default"
  }, b = {
    width: "8px",
    height: "8px",
    backgroundColor: i,
    borderRadius: "50%",
    flexShrink: 0
  }, a = {
    listStyleType: "disc",
    paddingLeft: "20px",
    margin: 0
  };
  return /* @__PURE__ */ e.jsxs("li", { style: p, children: [
    /* @__PURE__ */ e.jsxs("div", { style: c, onClick: o, children: [
      n ? /* @__PURE__ */ e.jsx("span", { style: { fontSize: "16px", color: s }, children: n }) : !k && /* @__PURE__ */ e.jsx("span", { style: b }),
      /* @__PURE__ */ e.jsx("span", { children: t })
    ] }),
    l && l.length > 0 && /* @__PURE__ */ e.jsx("ul", { style: a, children: l.map((y, h) => /* @__PURE__ */ e.jsx(
      Oe,
      {
        ...y,
        bulletColor: i,
        textColor: s,
        fontSize: d,
        fontWeight: u,
        spacing: f,
        isInline: !1
      },
      h
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
  className: u = "",
  activeTabStyle: f,
  inactiveTabStyle: k,
  tabContainerStyle: p,
  contentContainerStyle: c,
  style: b,
  tabsWidth: a = "240px",
  tabGap: y = 8,
  tabPadding: h = "12px 16px",
  tabBorderRadius: C = 12,
  primaryColor: M = "#2563eb",
  textColor: R = "#374151",
  backgroundColor: _ = "#ffffff",
  hoverTextColor: z = "#1e40af",
  responsiveBreakpoint: E = 768,
  showDrawerLabel: T = "Select Tab"
}) => {
  const [g, F] = $(n), [B, j] = $(null), [S, m] = $(!1), [A, N] = $(!1);
  G(() => {
    const V = () => {
      m(window.innerWidth <= E);
    };
    return V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V);
  }, [E]);
  const x = o === "left" || o === "right", O = {
    display: "flex",
    flexDirection: x ? S ? "column" : o === "left" ? "row" : "row-reverse" : "column",
    width: "100%",
    height: "100%",
    backgroundColor: _,
    ...x && !S ? {} : { flexWrap: "wrap" },
    ...b
  }, I = {
    width: x && !S ? a : "100%",
    display: "flex",
    flexDirection: x && !S ? "column" : "row",
    justifyContent: !x && o === "top" ? "center" : void 0,
    gap: y,
    padding: 8,
    boxSizing: "border-box",
    ...p
  }, Y = {
    flexGrow: 1,
    padding: 24,
    background: "#f9fafb",
    boxSizing: "border-box",
    minWidth: 0,
    ...x && !S ? { width: "calc(100% - " + a + ")" } : { width: "100%" },
    ...c
  }, r = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: h,
    borderRadius: C,
    border: "none",
    backgroundColor: "transparent",
    fontWeight: 500,
    transition: "all 0.2s ease",
    width: x && !S ? "100%" : "auto",
    marginBottom: x && !S ? y : 0,
    marginRight: !x || S ? y : 0,
    justifyContent: "flex-start"
  }, w = {
    backgroundColor: M,
    color: "#fff",
    fontWeight: 700,
    boxShadow: `0 2px 10px ${M}55`,
    ...f
  }, W = {
    backgroundColor: "transparent",
    color: R,
    ...k
  }, U = {
    backgroundColor: `${M}22`,
    color: z
  };
  return /* @__PURE__ */ e.jsxs("div", { className: u, style: O, children: [
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
    S && x ? /* @__PURE__ */ e.jsxs("div", { style: { width: "100%", marginBottom: 12 }, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => N(!A),
          style: {
            ...r,
            ...w,
            justifyContent: "space-between",
            width: "100%"
          },
          className: "custom-tab-drawer-button",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: T }),
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: 18 }, children: "☰" })
          ]
        }
      ),
      A && /* @__PURE__ */ e.jsx("div", { className: "custom-tab-mobile-drawer", children: t.map((V, P) => {
        const D = P === g, X = B === P;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              F(P), N(!1);
            },
            onMouseEnter: () => j(P),
            onMouseLeave: () => j(null),
            className: D ? l : i,
            style: {
              ...r,
              ...D ? w : W,
              ...X && !D ? U : {}
            },
            children: [
              V.icon && /* @__PURE__ */ e.jsx("span", { children: V.icon }),
              /* @__PURE__ */ e.jsx("span", { children: V.label })
            ]
          },
          P
        );
      }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "nav",
      {
        className: s,
        style: I,
        "aria-label": "Tabs Navigation",
        children: t.map((V, P) => {
          const D = P === g, X = B === P;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => F(P),
              onMouseEnter: () => j(P),
              onMouseLeave: () => j(null),
              className: D ? l : i,
              style: {
                ...r,
                ...D ? w : W,
                ...X && !D ? U : {}
              },
              children: [
                V.icon && /* @__PURE__ */ e.jsx("span", { children: V.icon }),
                /* @__PURE__ */ e.jsx("span", { children: V.label })
              ]
            },
            P
          );
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "section",
      {
        className: d,
        style: Y,
        role: "tabpanel",
        children: t[g]?.content
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
  height: u = "150px",
  borderRadius: f = "12px",
  backgroundColor: k = "#1e1e1e",
  primaryColor: p = "#ff4081",
  padding: c = "16px",
  className: b
}) => {
  const a = J(null), y = J(null), [h, C] = $(o), [M, R] = $(0), [_, z] = $(0), [E, T] = $(0.5), [g, F] = $(s), [B, j] = $(!1), [S, m] = $(l);
  G(() => {
    a.current && (a.current.volume = E, a.current.loop = S, a.current.muted = g);
  }, [E, S, g]);
  const A = () => {
    a.current && (h ? a.current.pause() : a.current.play(), C(!h));
  }, N = () => {
    a.current && (R(a.current.currentTime), z(a.current.duration));
  }, x = (r) => {
    if (!a.current || !r.currentTarget) return;
    const w = r.currentTarget.getBoundingClientRect(), U = (r.clientX - w.left) / w.width * _;
    a.current.currentTime = U, R(U);
  }, v = (r) => {
    a.current && (a.current.currentTime += r);
  }, O = () => {
    y.current && (B ? document.exitFullscreen?.() : y.current.requestFullscreen?.(), j(!B));
  }, I = () => {
    F(!g), g && E === 0 && T(0.5);
  }, Y = (r) => {
    const w = Math.floor(r / 60), W = Math.floor(r % 60);
    return `${w}:${W < 10 ? "0" : ""}${W}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: y,
      className: b,
      style: {
        position: "relative",
        width: d,
        backgroundColor: k,
        borderRadius: f,
        color: "#fff",
        overflow: "hidden",
        padding: c,
        boxSizing: "border-box",
        maxWidth: "100%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "video",
          {
            ref: a,
            src: t,
            poster: n,
            autoPlay: o,
            loop: l,
            controls: i,
            muted: s,
            onTimeUpdate: N,
            onLoadedMetadata: N,
            style: {
              width: "100%",
              height: u,
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
                  onClick: A,
                  style: {
                    background: p,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": h ? "Pause" : "Play",
                  children: h ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: Y(M) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  " ",
                  "/ ",
                  Y(_)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: x,
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
                        width: `${M / _ * 100 || 0}%`,
                        height: "100%",
                        background: p,
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
                    onClick: () => m(!S),
                    "aria-label": "Toggle Loop",
                    children: /* @__PURE__ */ e.jsx(xe, { size: 18, color: S ? p : void 0 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: I, "aria-label": "Toggle Mute", children: g ? /* @__PURE__ */ e.jsx(me, { size: 18 }) : /* @__PURE__ */ e.jsx(be, { size: 18 }) }),
                /* @__PURE__ */ e.jsx("button", { onClick: O, "aria-label": "Toggle Fullscreen", children: B ? /* @__PURE__ */ e.jsx(fe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
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
  borderRadius: u = "12px",
  padding: f = "16px",
  width: k = "100%",
  className: p
}) => {
  const c = J(null), b = J(null), [a, y] = $(o), [h, C] = $(0), [M, R] = $(0), [_, z] = $(0.5), [E, T] = $(!1), [g, F] = $(l);
  G(() => {
    c.current && (c.current.volume = _);
  }, [_]), G(() => {
    c.current && (c.current.loop = g);
  }, [g]);
  const B = () => {
    c.current && (a ? c.current.pause() : c.current.play(), y(!a));
  }, j = () => {
    c.current && (C(c.current.currentTime), R(c.current.duration));
  }, S = (x) => {
    if (!c.current || !x.currentTarget) return;
    const v = x.currentTarget.getBoundingClientRect(), I = (x.clientX - v.left) / v.width * M;
    c.current.currentTime = I, C(I);
  }, m = (x) => {
    c.current && (c.current.currentTime += x);
  }, A = () => {
    b.current && (E ? document.exitFullscreen?.() : b.current.requestFullscreen?.(), T(!E));
  }, N = (x) => {
    const v = Math.floor(x / 60), O = Math.floor(x % 60);
    return `${v}:${O < 10 ? "0" : ""}${O}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: b,
      className: p,
      style: {
        position: "relative",
        width: k,
        backgroundColor: i,
        borderRadius: u,
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
            ref: c,
            src: t,
            autoPlay: o,
            loop: l,
            onTimeUpdate: j,
            onLoadedMetadata: j
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
              borderRadius: u,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => m(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: B,
                  style: {
                    background: s,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": a ? "Pause" : "Play",
                  children: a ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
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
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { flexShrink: 0, minWidth: "60px", textAlign: "center" }, children: [
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", marginRight: "4px" }, children: N(h) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  "/ ",
                  N(M)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: S,
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
                        width: `${h / M * 100 || 0}%`,
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
                        onClick: () => F(!g),
                        "aria-label": "Toggle Loop",
                        children: /* @__PURE__ */ e.jsx(xe, { size: 18, color: g ? s : void 0 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => z(_ > 0 ? 0 : 0.5),
                        "aria-label": "Toggle Mute",
                        children: _ > 0 ? /* @__PURE__ */ e.jsx(be, { size: 18 }) : /* @__PURE__ */ e.jsx(me, { size: 18 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("button", { onClick: A, "aria-label": "Toggle Fullscreen", children: E ? /* @__PURE__ */ e.jsx(fe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
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
  rowGap: u,
  columnGap: f,
  width: k = { sm: "100%", md: "90%", lg: "80%" },
  maxWidth: p = { sm: "100%", md: "800px", lg: "1200px" },
  height: c = { sm: "auto", md: "auto", lg: "auto" },
  padding: b = { sm: "10px", md: "20px", lg: "40px" },
  margin: a = { sm: "0 auto", md: "0 auto", lg: "0 auto" },
  textAlign: y = { sm: "left", md: "center", lg: "center" },
  backgroundColor: h = "#fff",
  border: C = { sm: "none", md: "1px solid #ddd", lg: "2px solid #ccc" },
  borderRadius: M = { sm: "0", md: "8px", lg: "12px" },
  boxShadow: R = {
    sm: "none",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 6px 10px rgba(0,0,0,0.15)"
  },
  overflow: _ = { sm: "visible", md: "hidden", lg: "auto" },
  children: z,
  className: E,
  style: T
}) => {
  const [g, F] = $(
    () => Pe(window.innerWidth)
  );
  G(() => {
    const j = () => F(Pe(window.innerWidth));
    return window.addEventListener("resize", j), () => window.removeEventListener("resize", j);
  }, []);
  const B = ee(() => {
    const j = H(t, g, "block"), S = H(
      n,
      g,
      void 0
    ), m = H(
      o,
      g,
      void 0
    ), A = H(
      l,
      g,
      void 0
    ), N = H(
      i,
      g,
      void 0
    ), x = H(
      s,
      g,
      void 0
    ), v = H(d, g, void 0), O = H(u, g, void 0), I = H(
      f,
      g,
      void 0
    ), Y = H(k, g, "100%"), r = H(p, g, void 0), w = H(c, g, void 0), W = H(b, g, void 0), U = H(a, g, void 0), V = H(
      y,
      g,
      void 0
    ), P = H(C, g, void 0), D = H(
      M,
      g,
      void 0
    ), X = H(
      R,
      g,
      void 0
    ), L = H(_, g, void 0);
    return {
      display: j,
      ...S && { flexDirection: S },
      ...m && { justifyContent: m },
      ...A && { alignItems: A },
      ...N && {
        gridTemplateColumns: N
      },
      ...x && {
        gridTemplateRows: x
      },
      ...v && { gap: v },
      ...O && { rowGap: O },
      ...I && { columnGap: I },
      width: Y,
      ...r && { maxWidth: r },
      ...w && { height: w },
      ...W && { padding: W },
      ...U && { margin: U },
      ...V && { textAlign: V },
      backgroundColor: h,
      ...P && { border: P },
      ...D && { borderRadius: D },
      ...X && { boxShadow: X },
      ...L && { overflow: L },
      boxSizing: "border-box",
      ...T
    };
  }, [
    g,
    t,
    n,
    o,
    l,
    i,
    s,
    d,
    u,
    f,
    k,
    p,
    c,
    b,
    a,
    y,
    h,
    C,
    M,
    R,
    _,
    T
  ]);
  return /* @__PURE__ */ e.jsx("div", { className: E, style: B, children: z });
}, Dt = ({
  items: t,
  allowMultiple: n = !1,
  defaultOpenIndex: o = [],
  borderColor: l = "#d1d5db",
  backgroundColor: i = "#ffffff",
  textColor: s = "#111827",
  hoverBgColor: d = "#f3f4f6",
  hoverTextColor: u = "#111827",
  paddingVertical: f = "16px",
  paddingHorizontal: k = "16px",
  margin: p = "12px 0",
  iconOpen: c = "−",
  iconClose: b = "+",
  transitionDuration: a = "300ms",
  borderRadius: y = "8px",
  shadow: h = "0 2px 8px rgba(0, 0, 0, 0.05)",
  contentPadding: C = "16px",
  fontSize: M = "16px",
  fontWeight: R = "600",
  iconSize: _ = "18px",
  contentFontSize: z = "14px",
  contentFontWeight: E = "400",
  contentBackgroundColor: T = "#ffffff",
  contentTextColor: g = "#111827",
  className: F,
  style: B
}) => {
  const [j, S] = $(o), m = J([]), A = J([]);
  G(() => {
    m.current.forEach((x, v) => {
      x && (x.style.maxHeight = j.includes(v) ? `${x.scrollHeight}px` : "0px");
    });
  }, [j]);
  const N = (x) => {
    S(
      (v) => n ? v.includes(x) ? v.filter((O) => O !== x) : [...v, x] : v.includes(x) ? [] : [x]
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: F, style: { width: "100%", ...B }, children: t.map((x, v) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        border: `1px solid ${l}`,
        borderRadius: y,
        margin: p,
        boxShadow: h,
        overflow: "hidden",
        transition: `all ${a} ease`
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: (O) => {
              A.current[v] = O;
            },
            onClick: () => N(v),
            style: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: i,
              color: s,
              padding: `${f} ${k}`,
              fontWeight: R,
              fontSize: M,
              cursor: "pointer",
              outline: "none",
              border: "none",
              transition: `all ${a}`
            },
            onMouseEnter: (O) => {
              O.currentTarget.style.backgroundColor = d, O.currentTarget.style.color = u;
            },
            onMouseLeave: (O) => {
              O.currentTarget.style.backgroundColor = i, O.currentTarget.style.color = s;
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: x.title }),
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: _ }, children: j.includes(v) ? c : b })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: (O) => {
              m.current[v] = O;
            },
            style: {
              overflow: "hidden",
              maxHeight: j.includes(v) ? `${m.current[v]?.scrollHeight}px` : "0px",
              transition: `max-height ${a} ease-in-out`
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                style: {
                  borderTop: `1px solid ${l}`,
                  backgroundColor: T,
                  color: g,
                  padding: C,
                  fontSize: z,
                  fontWeight: E
                },
                children: x.content
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
  required: u = !1,
  error: f,
  className: k = "",
  customIcon: p,
  style: c,
  labelStyle: b,
  iconSize: a = 20,
  iconCheckedBgColor: y = "#2563eb",
  // blue-600
  iconUncheckedBorderColor: h = "#9ca3af",
  // gray-400
  textColor: C = "#374151",
  // gray-700
  errorStyle: M
}) => {
  const R = t === "checkbox", _ = (z) => {
    if (i)
      if (R) {
        const E = Array.isArray(l) ? l.includes(z) ? l.filter((T) => T !== z) : [...l, z] : [z];
        i(E);
      } else
        i(z);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: k,
      style: { display: "flex", flexDirection: "column", gap: 8, ...c },
      role: t,
      "aria-disabled": s,
      children: [
        o.map((z) => {
          const E = R ? Array.isArray(l) && l.includes(z.value) : l === z.value;
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
                ...b
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
                    required: u,
                    onChange: () => _(z.value),
                    style: { display: "none" }
                  }
                ),
                p ? p(E) : /* @__PURE__ */ e.jsxs(
                  "span",
                  {
                    style: {
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: a,
                      height: a,
                      borderRadius: R ? 4 : "50%",
                      border: `2px solid ${E ? y : h}`,
                      backgroundColor: E ? y : "transparent",
                      transition: "all 0.2s ease",
                      flexShrink: 0
                    },
                    children: [
                      E && !R && /* @__PURE__ */ e.jsx(
                        "span",
                        {
                          style: {
                            width: a / 2,
                            height: a / 2,
                            borderRadius: "50%",
                            backgroundColor: "white"
                          }
                        }
                      ),
                      E && R && /* @__PURE__ */ e.jsx(
                        "svg",
                        {
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "white",
                          strokeWidth: 3,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          style: { width: a * 0.6, height: a * 0.6 },
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
  style: u = {},
  children: f,
  showCloseButton: k = !0,
  closeButtonStyle: p = {}
}) => {
  const [c, b] = $(t);
  G(() => {
    t ? b(!0) : setTimeout(() => b(!1), d);
  }, [t, d]);
  const a = ee(() => {
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
  }, [t, o]), y = {
    position: "fixed",
    zIndex: 1e3,
    backgroundColor: s,
    transition: `transform ${d}ms ease, opacity ${d}ms ease`,
    transform: a,
    opacity: t ? 1 : 0,
    ...u,
    ...o === "left" || o === "right" ? { top: 0, [o]: 0, width: l, height: "100%" } : { left: 0, [o]: 0, height: i, width: "100%" }
  }, h = {
    position: "fixed",
    display: c ? "block" : "none",
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
    /* @__PURE__ */ e.jsx("div", { style: h, onClick: n }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: {
          ...y,
          display: "block",
          visibility: c ? "visible" : "hidden",
          pointerEvents: t ? "auto" : "none"
        },
        children: [
          k && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: n,
              style: { ...C, ...p },
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
  backgroundColor: u = "#fff",
  textColor: f = "#333",
  hoverColor: k = "#f0f0f0",
  padding: p = "12px 16px",
  margin: c = "0 0 1rem 0",
  dropdownWidth: b = "100%",
  dropdownHeight: a = "200px",
  borderRadius: y = "8px",
  boxShadow: h = "0 4px 8px rgba(0,0,0,0.1)",
  optionPadding: C = "10px 12px",
  optionGap: M = "8px",
  transitionDuration: R = "0.25s",
  className: _ = "",
  dropdownStyle: z,
  dropdownClassName: E = "",
  optionStyle: T,
  optionClassName: g = "",
  iconPrefix: F,
  iconSuffix: B
}) => {
  const [j, S] = $(o), [m, A] = $(!1), N = J(null);
  G(() => {
    const I = (Y) => {
      N.current && !N.current.contains(Y.target) && A(!1);
    };
    return document.addEventListener("mousedown", I), () => document.removeEventListener("mousedown", I);
  }, []);
  const x = (I) => {
    S(I), A(!1), l && l(I);
  }, v = n ?? j, O = t.find((I) => I.value === v);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: N,
      className: _,
      style: {
        position: "relative",
        width: b,
        margin: c,
        fontFamily: "sans-serif",
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => A((I) => !I),
            disabled: s,
            "aria-haspopup": "listbox",
            "aria-expanded": m,
            style: {
              width: "100%",
              padding: p,
              backgroundColor: u,
              color: f,
              border: `1px solid ${d}`,
              borderRadius: y,
              boxShadow: s ? "none" : h,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: s ? "not-allowed" : "pointer",
              opacity: s ? 0.6 : 1,
              transition: `all ${R} ease-in-out`
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: M }, children: [
                F && /* @__PURE__ */ e.jsx("span", { children: F }),
                /* @__PURE__ */ e.jsx("span", { children: O?.label || i })
              ] }),
              B || /* @__PURE__ */ e.jsx("span", { style: { marginLeft: "8px" }, children: "▼" })
            ]
          }
        ),
        m && /* @__PURE__ */ e.jsx(
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
              maxHeight: a,
              overflowY: "auto",
              backgroundColor: u,
              border: `1px solid ${d}`,
              borderRadius: y,
              boxShadow: h,
              marginTop: "4px",
              transition: `all ${R} ease`,
              ...z
            },
            children: t.map((I) => /* @__PURE__ */ e.jsxs(
              "li",
              {
                onClick: () => x(I.value),
                role: "option",
                className: g,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: M,
                  padding: C,
                  cursor: "pointer",
                  backgroundColor: j === I.value ? k : u,
                  transition: `background ${R}`,
                  ...T
                },
                onMouseEnter: (Y) => Y.currentTarget.style.backgroundColor = k,
                onMouseLeave: (Y) => Y.currentTarget.style.backgroundColor = j === I.value ? k : u,
                children: [
                  I.icon && /* @__PURE__ */ e.jsx("span", { children: I.icon }),
                  I.label
                ]
              },
              I.value
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
  headerBorderRadius: d = "8px",
  tableBorderRadius: u = "8px",
  sortable: f = !0,
  bodyAlign: k = "left",
  headerAlign: p = "left"
}) => {
  const [c, b] = $(null), [a, y] = $("asc"), [h, C] = $(1), [M, R] = $(null), _ = (j, S) => {
    !f || !S || (c === j ? y(a === "asc" ? "desc" : "asc") : (b(j), y("asc")), C(1));
  }, z = ve.useMemo(() => c ? [...n].sort((j, S) => {
    const m = j[c], A = S[c];
    if (m == null && A == null) return 0;
    if (m == null) return a === "asc" ? -1 : 1;
    if (A == null) return a === "asc" ? 1 : -1;
    if (typeof m == "number" && typeof A == "number")
      return a === "asc" ? m - A : A - m;
    if (m instanceof Date && A instanceof Date)
      return a === "asc" ? m.getTime() - A.getTime() : A.getTime() - m.getTime();
    const N = String(m).toLowerCase(), x = String(A).toLowerCase();
    return N === x ? 0 : a === "asc" ? N > x ? 1 : -1 : N < x ? 1 : -1;
  }) : [...n], [n, c, a]), E = l ? z.slice(
    (h - 1) * i,
    h * i
  ) : z, T = Math.ceil(n.length / i), g = /* @__PURE__ */ e.jsx(
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
  ), F = /* @__PURE__ */ e.jsx(
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
  ), B = /* @__PURE__ */ e.jsx(
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
          borderRadius: u,
          // Important: for border-radius to show on table, set borderSpacing and borderCollapse accordingly
          borderSpacing: 0,
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { children: t.map(({ key: j, label: S, sortable: m, icon: A }, N) => /* @__PURE__ */ e.jsx(
            "th",
            {
              onClick: () => _(j, m),
              style: {
                padding: "12px",
                fontSize: "14px",
                border: `1px solid ${s.borderColor}`,
                cursor: f && m ? "pointer" : "default",
                backgroundColor: s.headerBg,
                color: s.headerText,
                userSelect: "none",
                borderTopLeftRadius: N === 0 ? d : void 0,
                borderTopRightRadius: N === t.length - 1 ? d : void 0,
                textAlign: p,
                whiteSpace: "nowrap"
              },
              "aria-sort": c === j ? a === "asc" ? "ascending" : "descending" : void 0,
              role: f && m ? "button" : void 0,
              tabIndex: f && m ? 0 : void 0,
              onKeyDown: (x) => {
                f && m && (x.key === "Enter" || x.key === " ") && (x.preventDefault(), _(j, m));
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
                    A && /* @__PURE__ */ e.jsx("span", { children: A }),
                    /* @__PURE__ */ e.jsx("span", { children: S }),
                    f && m && (c === j ? a === "asc" ? g : F : B)
                  ]
                }
              )
            },
            j
          )) }) }),
          /* @__PURE__ */ e.jsx("tbody", { children: E.map((j, S) => /* @__PURE__ */ e.jsx(
            "tr",
            {
              style: {
                backgroundColor: M === S ? s.hoverBg : s.rowBg,
                color: s.rowText,
                transition: "background-color 0.2s ease-in-out"
              },
              onMouseEnter: () => R(S),
              onMouseLeave: () => R(null),
              children: t.map(({ key: m }) => /* @__PURE__ */ e.jsx(
                "td",
                {
                  style: {
                    padding: "12px",
                    border: `1px solid ${s.borderColor}`,
                    whiteSpace: "nowrap",
                    textAlign: k
                  },
                  children: j[m]
                },
                m
              ))
            },
            S
          )) })
        ]
      }
    ),
    l && T > 1 && /* @__PURE__ */ e.jsxs(
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
                opacity: h === 1 ? 0.5 : 1,
                cursor: h === 1 ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
              },
              disabled: h === 1,
              onClick: () => C((j) => Math.max(j - 1, 1)),
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
            h,
            " / ",
            T
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
                opacity: h === T ? 0.5 : 1,
                cursor: h === T ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
              },
              disabled: h === T,
              onClick: () => C((j) => Math.min(j + 1, T)),
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
  backgroundRepeat: u = "no-repeat",
  textColor: f = "#000",
  borderRadius: k = 12,
  padding: p = 24,
  margin: c = 0,
  maxWidth: b = "100%",
  boxShadow: a = "0 4px 12px rgba(0,0,0,0.1)",
  border: y = "none",
  display: h = "flex",
  flexDirection: C = "column",
  justifyContent: M = "flex-start",
  alignItems: R = "stretch",
  gap: _ = 16
}) => {
  const z = {
    background: l,
    color: f,
    borderRadius: k,
    padding: p,
    margin: c,
    maxWidth: b,
    boxShadow: a,
    border: y,
    display: h,
    flexDirection: C,
    justifyContent: M,
    alignItems: R,
    gap: _,
    boxSizing: "border-box",
    // Background image styles if provided
    ...i ? {
      backgroundImage: `url(${i})`,
      backgroundSize: s,
      backgroundPosition: d,
      backgroundRepeat: u
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
  maxWidth: u = "100%",
  height: f = "auto",
  children: k,
  style: p
}) => {
  const [c, b] = $(
    Ae(window.innerWidth)
  );
  G(() => {
    const h = () => b(Ae(window.innerWidth));
    return window.addEventListener("resize", h), () => window.removeEventListener("resize", h);
  }, []);
  const a = ee(() => typeof t == "number" ? t : t[c] ?? 1, [t, c]), y = ee(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${a}, 1fr)`,
      gap: n,
      padding: o,
      alignItems: l,
      justifyItems: i,
      backgroundColor: s,
      width: d,
      maxWidth: u,
      height: f,
      boxSizing: "border-box",
      ...p
    }),
    [
      a,
      n,
      o,
      l,
      i,
      s,
      d,
      u,
      f,
      p
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: y, children: k });
}, Ne = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Xt = ({
  direction: t = "row",
  align: n = "center",
  justify: o = "space-between",
  gap: l = 16,
  padding: i = 20,
  backgroundColor: s = "transparent",
  width: d = "100%",
  maxWidth: u = "100%",
  height: f = "auto",
  style: k,
  children: p
}) => {
  const [c, b] = $(
    Ne(window.innerWidth)
  );
  G(() => {
    const h = () => b(Ne(window.innerWidth));
    return window.addEventListener("resize", h), () => window.removeEventListener("resize", h);
  }, []);
  const a = ee(() => typeof t == "string" ? t : t[c] ?? "row", [t, c]), y = ee(
    () => ({
      display: "flex",
      flexDirection: a,
      alignItems: n,
      justifyContent: o,
      gap: typeof l == "number" ? `${l}px` : l,
      padding: typeof i == "number" ? `${i}px` : i,
      backgroundColor: s,
      width: d,
      maxWidth: u,
      height: f,
      boxSizing: "border-box",
      ...k
    }),
    [
      a,
      n,
      o,
      l,
      i,
      s,
      d,
      u,
      f,
      k
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: y, children: p });
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
    Icon: /* @__PURE__ */ e.jsx(xt, { size: 20 })
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
  actionButton: u,
  position: f = "top-right",
  className: k,
  style: p
}) => {
  const [c, b] = $(!0);
  if (G(() => {
    if (s) {
      const R = setTimeout(() => {
        b(!1), i?.();
      }, s);
      return () => clearTimeout(R);
    }
  }, [s, i]), !c) return null;
  const { bg: a, border: y, iconColor: h, Icon: C } = zt[o], M = Rt(f);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: k,
      style: {
        ...M,
        display: "flex",
        gap: "12px",
        padding: "16px",
        backgroundColor: a,
        borderLeft: `4px solid ${y}`,
        borderRadius: "8px",
        color: "#111827",
        alignItems: "flex-start",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        animation: "slideIn 0.3s ease",
        maxWidth: "600px",
        width: "calc(100% - 40px)",
        ...p
        // ✅ User custom styles merged last
      },
      children: [
        /* @__PURE__ */ e.jsx("div", { style: { color: h, marginTop: "3px" }, children: d || C }),
        /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
          t && /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", marginBottom: "4px" }, children: t }),
          n && /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", color: "#374151" }, children: n }),
          u && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "10px" }, children: u })
        ] }),
        l && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              b(!1), i?.();
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
  borderRadius: u,
  borderWidth: f = "0",
  fontSize: k = "14px",
  fontWeight: p = 500,
  horizontalPadding: c = "10px",
  verticalPadding: b = "6px",
  margin: a = "0",
  shadow: y = "0 1px 4px rgba(0, 0, 0, 0.1)",
  notificationDot: h = !1,
  dotColor: C = "#ef4444",
  count: M,
  pulse: R = !1,
  style: _,
  onClick: z
}) => {
  const E = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: n,
    border: `${f} solid ${l}`,
    borderRadius: u || (d ? "9999px" : "6px"),
    padding: `${b} ${c}`,
    fontSize: k,
    fontWeight: p,
    margin: a,
    boxShadow: y,
    position: "relative",
    cursor: z ? "pointer" : "default",
    ..._
  }, T = {
    color: o,
    display: "inline"
  }, g = {
    display: "flex",
    alignItems: "center",
    color: o
  }, F = {
    ...g,
    marginRight: t ? "6px" : "0px"
  }, B = {
    ...g,
    marginLeft: t ? "6px" : "0px"
  }, j = {
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
  }, S = {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    height: "8px",
    width: "8px",
    backgroundColor: C,
    borderRadius: "50%",
    zIndex: 1,
    animation: R ? "pulseAnim 1.2s infinite" : void 0
  };
  return /* @__PURE__ */ e.jsxs("span", { style: E, onClick: z, children: [
    h && /* @__PURE__ */ e.jsx("span", { style: S }),
    typeof M < "u" && /* @__PURE__ */ e.jsx("span", { style: j, children: M }),
    i && s === "left" && /* @__PURE__ */ e.jsx("span", { style: F, children: i }),
    t && /* @__PURE__ */ e.jsx("span", { style: T, children: t }),
    i && s === "right" && /* @__PURE__ */ e.jsx("span", { style: B, children: i }),
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
  const u = De[o];
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        position: "relative",
        width: u,
        height: u,
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
            width: u,
            height: u,
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
              width: u / 4,
              height: u / 4,
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
  const s = De[o], d = t.slice(0, n), u = t.length - n;
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
        d.map(({ src: f, alt: k, isOnline: p, isOffline: c }, b) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              marginLeft: b === 0 ? 0 : -(s / 3),
              boxShadow: "0 0 0 2px white",
              borderRadius: "50%",
              flexShrink: 0,
              cursor: "pointer"
            },
            title: k,
            children: /* @__PURE__ */ e.jsx(
              Mt,
              {
                src: f,
                alt: k,
                size: o,
                isOnline: p,
                isOffline: c
              }
            )
          },
          b
        )),
        u > 0 && /* @__PURE__ */ e.jsxs(
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
            "aria-label": `${u} more members`,
            title: `${u} more members`,
            children: [
              "+",
              u
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
  loop: u = !1
}) => {
  const [f, k] = $(null), p = J(null), c = J(null), [b, a] = $(!1), [y, h] = $(0), [C, M] = $(0), [R, _] = $(0.5), [z, E] = $(!1), [T, g] = $(u);
  G(() => {
    p.current && (p.current.volume = R);
  }, [R]), G(() => {
    p.current && (p.current.loop = T);
  }, [T]), G(() => {
    f === null && p.current && (p.current.pause(), a(!1), h(0), M(0));
  }, [f]);
  const F = (x) => {
    if (f === x) {
      if (!p.current) return;
      p.current.paused ? (p.current.play(), a(!0)) : (p.current.pause(), a(!1));
    } else
      k(x), setTimeout(() => {
        p.current?.play(), a(!0);
      }, 100);
  }, B = () => {
    p.current && (h(p.current.currentTime), M(p.current.duration));
  }, j = (x) => {
    if (!p.current) return;
    const v = x.currentTarget.getBoundingClientRect(), Y = (x.clientX - v.left) / v.width * C;
    p.current.currentTime = Y, h(Y);
  }, S = (x) => {
    if (p.current) {
      let v = p.current.currentTime + x;
      v = Math.min(Math.max(v, 0), C), p.current.currentTime = v, h(v);
    }
  }, m = () => {
    c.current && (z ? document.exitFullscreen?.() : c.current.requestFullscreen?.(), E(!z));
  }, A = () => {
    _((x) => x > 0 ? 0 : 0.5);
  }, N = (x) => {
    if (isNaN(x)) return "0:00";
    const v = Math.floor(x / 60), O = Math.floor(x % 60);
    return `${v}:${O < 10 ? "0" : ""}${O}`;
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
            children: t.map(({ src: x, title: v, thumbnail: O }, I) => {
              const Y = f === I && b;
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
                  onClick: () => F(I),
                  tabIndex: 0,
                  role: "button",
                  "aria-pressed": Y,
                  onKeyDown: (r) => {
                    (r.key === "Enter" || r.key === " ") && F(I);
                  },
                  "aria-label": `${Y ? "Pause" : "Play"} ${v}`,
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
                    Y ? /* @__PURE__ */ e.jsx(se, { size: 24, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(oe, { size: 24, "aria-hidden": "true" })
                  ]
                },
                I
              );
            })
          }
        ),
        f !== null && /* @__PURE__ */ e.jsxs(
          "article",
          {
            ref: c,
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
                  ref: p,
                  src: t[f].src,
                  autoPlay: d,
                  loop: T,
                  onTimeUpdate: B,
                  onEnded: () => a(!1),
                  onLoadedMetadata: B,
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
                        onClick: () => S(-10),
                        "aria-label": "Skip back 10 seconds",
                        style: te(i, o),
                        children: /* @__PURE__ */ e.jsx(he, { size: 20 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => {
                          p.current && (b ? p.current.pause() : p.current.play(), a(!b));
                        },
                        "aria-label": b ? "Pause" : "Play",
                        style: {
                          ...te("#fff", o),
                          borderRadius: "9999px",
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        },
                        children: b ? /* @__PURE__ */ e.jsx(se, { size: 24, color: "#fff" }) : /* @__PURE__ */ e.jsx(oe, { size: 24, color: "#fff" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => S(10),
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
                        dateTime: `PT${Math.floor(y / 60)}M${Math.floor(
                          y % 60
                        )}S`,
                        style: { minWidth: "40px", fontSize: "0.9rem" },
                        "aria-label": "Current playback time",
                        children: N(y)
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        onClick: j,
                        role: "slider",
                        "aria-valuemin": 0,
                        "aria-valuemax": C,
                        "aria-valuenow": y,
                        tabIndex: 0,
                        onKeyDown: (x) => {
                          p.current && (x.key === "ArrowRight" ? S(5) : x.key === "ArrowLeft" && S(-5));
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
                              width: `${y / C * 100 || 0}%`,
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
                          N(C)
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
                        onClick: () => g(!T),
                        "aria-label": "Toggle Loop",
                        style: te(
                          T ? o : i,
                          T ? "#e0f2fe" : "transparent"
                        ),
                        children: /* @__PURE__ */ e.jsx(
                          xe,
                          {
                            size: 20,
                            color: T ? o : i,
                            "aria-hidden": "true"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: A,
                        "aria-label": R > 0 ? "Mute" : "Unmute",
                        style: te(i, "transparent"),
                        children: R > 0 ? /* @__PURE__ */ e.jsx(be, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(me, { size: 20, "aria-hidden": "true" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: m,
                        "aria-label": z ? "Exit Fullscreen" : "Enter Fullscreen",
                        style: te(i, "transparent"),
                        children: z ? /* @__PURE__ */ e.jsx(fe, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(pe, { size: 20, "aria-hidden": "true" })
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
  loop: u = !1,
  muted: f = !1,
  controls: k = !0,
  className: p = ""
}) => {
  const [c, b] = $(null), [a, y] = $(
    typeof window < "u" ? window.innerWidth : 1024
  ), [h, C] = $(n);
  G(() => {
    function T() {
      const g = window.innerWidth;
      if (y(g), !o) {
        C(n);
        return;
      }
      g < 640 ? C(o.mobile ?? n) : g < 1024 ? C(o.tablet ?? n) : C(o.desktop ?? n);
    }
    if (typeof window < "u")
      return T(), window.addEventListener("resize", T), () => window.removeEventListener("resize", T);
  }, [n, o]);
  const M = () => b(null), R = (T) => {
    T.stopPropagation(), c !== null && b((c - 1 + t.length) % t.length);
  }, _ = (T) => {
    T.stopPropagation(), c !== null && b((c + 1) % t.length);
  }, z = ({
    src: T,
    poster: g,
    autoPlay: F = !1,
    loop: B = !1,
    muted: j = !1,
    controls: S = !1,
    width: m = "100%",
    height: A = "150px",
    borderRadius: N = "12px",
    backgroundColor: x = "#1e1e1e",
    primaryColor: v = "#ff4081",
    padding: O = "16px",
    className: I,
    onClick: Y
  }) => {
    const r = J(null), w = J(null), [W, U] = $(F), [V, P] = $(0), [D, X] = $(0), [L, Z] = $(j ? 0 : 0.5), [K, le] = $(j), [ae, Be] = $(!1), [ce, Ye] = $(B);
    G(() => {
      r.current && (r.current.volume = L, r.current.loop = ce, r.current.muted = K);
    }, [L, ce, K]);
    const Ve = () => {
      r.current && (W ? r.current.pause() : r.current.play(), U(!W));
    }, Ce = () => {
      r.current && (P(r.current.currentTime), X(r.current.duration));
    }, Ue = (Q) => {
      if (!r.current || !Q.currentTarget) return;
      const de = Q.currentTarget.getBoundingClientRect(), Me = (Q.clientX - de.left) / de.width * D;
      r.current.currentTime = Me, P(Me);
    }, ze = (Q) => {
      r.current && (r.current.currentTime += Q);
    }, He = () => {
      w.current && (ae ? document.exitFullscreen?.() : w.current.requestFullscreen?.(), Be(!ae));
    }, qe = () => {
      K ? (le(!1), L === 0 && Z(0.5)) : (le(!0), Z(0));
    }, Re = (Q) => {
      if (isNaN(Q)) return "0:00";
      const de = Math.floor(Q / 60), ye = Math.floor(Q % 60);
      return `${de}:${ye < 10 ? "0" : ""}${ye}`;
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: w,
        onClick: Y,
        className: I,
        style: {
          position: "relative",
          width: m,
          backgroundColor: x,
          borderRadius: N,
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
              src: T,
              poster: g,
              autoPlay: F,
              loop: B,
              muted: j,
              controls: S,
              onTimeUpdate: Ce,
              onLoadedMetadata: Ce,
              style: {
                width: "100%",
                height: A,
                borderRadius: N,
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
                        xe,
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
                      children: ae ? /* @__PURE__ */ e.jsx(fe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 })
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    );
  }, E = () => a < 640 ? "120px" : a < 1024 ? "150px" : "180px";
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${p}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${i === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${h}, 1fr)`,
          gap: l
        },
        children: t.map((T, g) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "relative",
              overflow: "hidden",
              borderRadius: 12,
              cursor: s ? "pointer" : "default"
            },
            onClick: () => s && b(g),
            children: /* @__PURE__ */ e.jsx(
              z,
              {
                src: T.src,
                poster: T.poster,
                autoPlay: d,
                loop: u,
                muted: f,
                controls: k,
                height: E(),
                borderRadius: "12px",
                padding: "8px",
                primaryColor: "#ff4081",
                onClick: (F) => F.stopPropagation()
              }
            )
          },
          g
        ))
      }
    ),
    s && c !== null && /* @__PURE__ */ e.jsxs(
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
              onClick: R,
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
              src: t[c].src,
              poster: t[c].poster,
              autoPlay: !0,
              controls: !0,
              muted: f,
              width: "80vw",
              height: "45vw",
              borderRadius: "16px",
              padding: "16px",
              primaryColor: "#ff4081",
              onClick: (T) => T.stopPropagation()
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: _,
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
  const [d, u] = $(null), f = () => u(null), k = (c) => {
    c.stopPropagation(), d !== null && u((d - 1 + t.length) % t.length);
  }, p = (c) => {
    c.stopPropagation(), d !== null && u((d + 1) % t.length);
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
        children: t.map((c, b) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "relative overflow-hidden rounded-lg cursor-pointer",
            onClick: () => i && u(b),
            children: /* @__PURE__ */ e.jsx(
              _e,
              {
                src: c.src,
                alt: c.alt || "Gallery Image",
                lazyLoad: !0,
                className: "w-full h-auto object-cover transition-transform duration-300 hover:scale-105",
                style: { display: "block", width: "100%", height: "auto" },
                hoverScale: 1.05,
                transitionDuration: "0.3s"
              }
            )
          },
          b
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
              onClick: k,
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
              onClick: (c) => c.stopPropagation()
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: p,
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
