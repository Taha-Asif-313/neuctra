import ve, { useMemo as ee, forwardRef as we, createElement as je, useRef as J, useState as M, useImperativeHandle as Ge, useEffect as G } from "react";
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
      for (var p in i)
        p !== "key" && (s[p] = i[p]);
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
        return r.$$typeof === w ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case g:
          return "Fragment";
        case $:
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
          case v:
            return "Portal";
          case _:
            return (r.displayName || "Context") + ".Provider";
          case R:
            return (r._context.displayName || "Context") + ".Consumer";
          case z:
            var h = r.render;
            return r = r.displayName, r || (r = h.displayName || h.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case b:
            return h = r.displayName || null, h !== null ? h : t(r.type) || "Memo";
          case O:
            h = r._payload, r = r._init;
            try {
              return t(r(h));
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
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var I = h.error, Y = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return I.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Y
        ), n(r);
      }
    }
    function l(r) {
      if (r === g) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === O)
        return "<...>";
      try {
        var h = t(r);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = k.A;
      return r === null ? null : r.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function d(r) {
      if (y.call(r, "key")) {
        var h = Object.getOwnPropertyDescriptor(r, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function p(r, h) {
      function I() {
        f || (f = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: I,
        configurable: !0
      });
    }
    function x() {
      var r = t(this.type);
      return j[r] || (j[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function S(r, h, I, Y, D, L, F, X) {
      return I = L.ref, r = {
        $$typeof: a,
        type: r,
        key: h,
        props: L,
        _owner: D
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(r, "ref", {
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
        value: F
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function u(r, h, I, Y, D, L, F, X) {
      var P = h.children;
      if (P !== void 0)
        if (Y)
          if (W(P)) {
            for (Y = 0; Y < P.length; Y++)
              c(P[Y]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(P);
      if (y.call(h, "key")) {
        P = t(r);
        var Z = Object.keys(h).filter(function(le) {
          return le !== "key";
        });
        Y = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", U[P + Y] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Y,
          P,
          Z,
          P
        ), U[P + Y] = !0);
      }
      if (P = null, I !== void 0 && (o(I), P = "" + I), d(h) && (o(h.key), P = "" + h.key), "key" in h) {
        I = {};
        for (var K in h)
          K !== "key" && (I[K] = h[K]);
      } else I = h;
      return P && p(
        I,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), S(
        r,
        P,
        L,
        D,
        i(),
        I,
        F,
        X
      );
    }
    function c(r) {
      typeof r == "object" && r !== null && r.$$typeof === a && r._store && (r._store.validated = 1);
    }
    var m = ve, a = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), k = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, W = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var f, j = {}, N = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), V = A(l(s)), U = {};
    ne.Fragment = g, ne.jsx = function(r, h, I, Y, D) {
      var L = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        r,
        h,
        I,
        !1,
        Y,
        D,
        L ? Error("react-stack-top-frame") : N,
        L ? A(l(r)) : V
      );
    }, ne.jsxs = function(r, h, I, Y, D) {
      var L = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        r,
        h,
        I,
        !0,
        Y,
        D,
        L ? Error("react-stack-top-frame") : N,
        L ? A(l(r)) : V
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
  bgColor: p,
  fontSize: x = "16px",
  fontWeight: S = "normal",
  textAlign: u = "left",
  textTransform: c = "none",
  lineHeight: m = "normal",
  letterSpacing: a = "normal",
  maxWidth: v,
  padding: g,
  margin: C,
  borderRadius: $,
  boxShadow: R,
  shadowColor: _ = "rgba(0,0,0,0.1)",
  wordBreak: z = "normal",
  // Text styles
  italic: E = !1,
  bold: T = !1,
  underline: b = !1,
  strikethrough: O = !1,
  selectable: B = !0,
  truncate: w = !1,
  // Hover & Active
  hoverColor: k,
  hoverBgColor: y,
  hoverTextDecoration: W,
  activeColor: A,
  activeBgColor: f,
  transitionDuration: j = "0.25s",
  // Event
  onClick: N
}) => {
  const V = ee(() => {
    const L = [];
    return b && L.push("underline"), O && L.push("line-through"), L.join(" ") || "none";
  }, [b, O]), U = {
    color: d,
    backgroundColor: p || "transparent",
    fontSize: x,
    fontWeight: T ? "bold" : S,
    textAlign: u,
    textTransform: c,
    lineHeight: m,
    letterSpacing: a,
    maxWidth: v,
    padding: g,
    margin: C,
    borderRadius: $,
    textDecoration: V,
    fontStyle: E ? "italic" : "normal",
    wordBreak: z,
    boxShadow: R || (_ ? `0 1px 4px ${_}` : void 0),
    cursor: N || l ? "pointer" : "default",
    userSelect: B ? "text" : "none",
    transition: `all ${j} ease-in-out`,
    overflow: w ? "hidden" : void 0,
    whiteSpace: w ? "nowrap" : void 0,
    textOverflow: w ? "ellipsis" : void 0
  }, D = {
    className: o,
    style: U,
    onClick: N,
    onMouseEnter: (L) => {
      const F = L.currentTarget;
      k && (F.style.color = k), y && (F.style.backgroundColor = y), W && (F.style.textDecoration = W);
    },
    onMouseLeave: (L) => {
      const F = L.currentTarget;
      F.style.color = d, F.style.backgroundColor = p || "transparent", F.style.textDecoration = V;
    },
    onMouseDown: (L) => {
      const F = L.currentTarget;
      A && (F.style.color = A), f && (F.style.backgroundColor = f);
    },
    onMouseUp: (L) => {
      const F = L.currentTarget;
      F.style.color = k || d, F.style.backgroundColor = y || p || "transparent";
    }
  };
  return t === "a" || l ? /* @__PURE__ */ e.jsx(
    "a",
    {
      ...D,
      href: l,
      target: i,
      rel: s || (i === "_blank" ? "noopener noreferrer" : void 0),
      children: n
    }
  ) : /* @__PURE__ */ e.jsx(t, { ...D, children: n });
}, _e = ({
  src: t,
  alt: n = "Image",
  width: o = "100%",
  height: l = "auto",
  borderRadius: i = "8px",
  borderColor: s = "transparent",
  borderStyle: d = "solid",
  borderWidth: p = "0px",
  shadow: x = !1,
  boxShadow: S,
  opacity: u = 1,
  objectFit: c = "cover",
  overlayText: m,
  overlayColor: a = "rgba(0, 0, 0, 0.5)",
  svgIcon: v,
  responsive: g = !1,
  padding: C,
  margin: $,
  lazyLoad: R = !1,
  hoverOpacity: _,
  hoverShadow: z = !1,
  hoverScale: E,
  hoverRotate: T,
  transitionDuration: b = "0.3s",
  overflow: O = "hidden",
  className: B,
  style: w,
  onClick: k
}) => {
  const y = {
    width: g ? "100%" : o,
    height: g ? "100%" : l,
    borderRadius: i,
    border: `${p} ${d} ${s}`,
    objectFit: c,
    opacity: u,
    boxShadow: x ? S || "0 4px 12px rgba(0,0,0,0.15)" : "none",
    transition: `all ${b} ease`,
    display: "block"
  }, W = (j) => {
    j.currentTarget.style.opacity = _ !== void 0 ? _.toString() : y.opacity?.toString() || "1", j.currentTarget.style.boxShadow = z ? "0 8px 20px rgba(0,0,0,0.3)" : y.boxShadow?.toString() || "none", j.currentTarget.style.transform = `scale(${E || 1}) rotate(${T || 0}deg)`;
  }, A = (j) => {
    j.currentTarget.style.opacity = y.opacity?.toString() || "1", j.currentTarget.style.boxShadow = y.boxShadow?.toString() || "none", j.currentTarget.style.transform = "scale(1) rotate(0deg)";
  }, f = (() => {
    switch (O) {
      case "x":
        return { overflowX: "hidden" };
      case "y":
        return { overflowY: "hidden" };
      default:
        return { overflow: O };
    }
  })();
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      role: "img",
      "aria-label": n,
      onClick: k,
      className: B,
      style: {
        width: g ? "100%" : o,
        height: g ? "auto" : l,
        padding: C,
        margin: $,
        position: "relative",
        cursor: k ? "pointer" : "default",
        display: "inline-block",
        transition: `all ${b} ease`,
        ...f,
        ...w
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
            loading: R ? "lazy" : "eager",
            style: y,
            onMouseEnter: W,
            onMouseLeave: A
          }
        ),
        m && /* @__PURE__ */ e.jsx(
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
            children: m
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
  fullWidth: p = !1,
  disabled: x = !1,
  loading: S = !1,
  loadingText: u = "Loading...",
  paddingHorizontal: c = 30,
  paddingVertical: m = 8,
  fontSize: a = "16px",
  fontWeight: v = 400,
  borderRadius: g = 6,
  backgroundColor: C = "#02b314",
  textColor: $ = "white",
  borderColor: R = "transparent",
  hoverBgColor: _ = "transparent",
  hoverTextColor: z = "black",
  hoverBorderColor: E,
  boxShadow: T = "0 1px 2px rgba(0, 0, 0, 0.05)"
}) => {
  const [b, O] = ve.useState(!1), B = b && !x && z || $, w = b && !x && E || R, k = b && !x ? _ : C, y = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${m}px ${c}px`,
    fontSize: a,
    fontWeight: v,
    borderRadius: `${g}px`,
    width: p ? "100%" : "auto",
    color: B,
    border: `1px solid ${w}`,
    backgroundColor: k,
    boxShadow: T,
    cursor: x ? "not-allowed" : "pointer",
    opacity: x ? 0.6 : 1,
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
      style: y,
      onClick: !x && !S ? o : void 0,
      disabled: x,
      onMouseEnter: () => O(!0),
      onMouseLeave: () => O(!1),
      children: [
        S ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
      ...d.map(([S, u]) => je(S, u)),
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
    disabled: p = !1,
    readOnly: x = !1,
    required: S = !1,
    error: u,
    success: c = !1,
    autoFocus: m = !1,
    iconLeft: a,
    iconRight: v,
    borderColor: g = "#ccc",
    focusBorderColor: C = "#2563eb",
    hoverBorderColor: $ = "#4b5563",
    backgroundColor: R = "#ffffff",
    textColor: _ = "#111827",
    errorColor: z = "#dc2626",
    successColor: E = "#16a34a",
    labelColor: T = "#374151",
    size: b = "md",
    radius: O = "6px",
    fontSize: B = "14px",
    rows: w = 4,
    cols: k,
    maxLength: y,
    resize: W = !0,
    showCharacterCount: A = !0,
    className: f,
    style: j
  }, N) => {
    const V = J(null), [U, r] = M(i || ""), [h, I] = M(!1);
    Ge(N, () => V.current);
    const Y = (P) => {
      y && P.target.value.length > y || (r(P.target.value), s && s(d, P.target.value));
    }, D = () => {
      switch (b) {
        case "sm":
          return "6px 12px";
        case "lg":
          return "12px 20px";
        default:
          return "10px 16px";
      }
    }, L = () => {
      switch (b) {
        case "sm":
          return "13px";
        case "lg":
          return "16px";
        default:
          return B;
      }
    }, F = u ? z : c ? E : g, X = {
      width: "100%",
      padding: D(),
      paddingLeft: a ? "40px" : D().split(" ")[1],
      paddingRight: v || t === "password" ? "40px" : D().split(" ")[1],
      border: `1px solid ${F}`,
      borderRadius: O,
      backgroundColor: R,
      color: _,
      fontSize: L(),
      outline: "none",
      resize: t === "textarea" && !W ? "none" : void 0,
      ...j
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: { width: "100%", fontFamily: "sans-serif" },
        className: f,
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
                S && /* @__PURE__ */ e.jsx("span", { style: { color: z }, children: "*" })
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
                ref: V,
                name: d,
                value: l ?? U,
                onChange: Y,
                placeholder: n,
                rows: w,
                cols: k,
                maxLength: y,
                disabled: p,
                readOnly: x,
                autoFocus: m,
                style: X,
                onFocus: (P) => {
                  P.currentTarget.style.borderColor = C;
                },
                onBlur: (P) => {
                  P.currentTarget.style.borderColor = F;
                },
                onMouseEnter: (P) => {
                  P.currentTarget.style.borderColor = $;
                },
                onMouseLeave: (P) => {
                  P.currentTarget.style.borderColor = F;
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: V,
                id: d,
                name: d,
                type: t === "password" ? h ? "text" : "password" : t,
                value: l ?? U,
                onChange: Y,
                placeholder: n,
                disabled: p,
                readOnly: x,
                autoFocus: m,
                style: X,
                onFocus: (P) => {
                  P.currentTarget.style.borderColor = C;
                },
                onBlur: (P) => {
                  P.currentTarget.style.borderColor = F;
                },
                onMouseEnter: (P) => {
                  P.currentTarget.style.borderColor = $;
                },
                onMouseLeave: (P) => {
                  P.currentTarget.style.borderColor = F;
                }
              }
            ),
            t === "password" && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => I(!h),
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
                children: h ? /* @__PURE__ */ e.jsx(dt, { size: 18 }) : /* @__PURE__ */ e.jsx(pt, { size: 18 })
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
          t === "textarea" && A && y && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                textAlign: "right",
                fontSize: "12px",
                color: "#6b7280",
                marginTop: "4px"
              },
              children: [
                (l ?? U).length,
                "/",
                y
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
  borderColor: p = "#e5e7eb",
  fontSize: x = "15px",
  fontWeight: S = 500,
  borderRadius: u = "12px",
  padding: c = "16px",
  spacing: m = "12px",
  className: a,
  style: v
}) => {
  const g = l === "ordered", C = l === "inline", $ = {
    backgroundColor: d,
    borderColor: p,
    color: s,
    borderWidth: p ? "1px" : "0px",
    borderStyle: "solid",
    borderRadius: u,
    padding: c,
    ...v
  }, R = C ? {
    display: "flex",
    gap: m,
    paddingLeft: 0,
    listStyleType: "none",
    margin: 0
  } : {
    listStyleType: g ? "decimal" : "none",
    paddingLeft: g ? "20px" : "0",
    margin: 0
  }, _ = g ? "ol" : "ul";
  return /* @__PURE__ */ e.jsxs("div", { className: a, style: $, children: [
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
        fontSize: x,
        fontWeight: S,
        spacing: m,
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
  fontWeight: p,
  spacing: x,
  isInline: S
}) => {
  const u = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: S ? "0" : x
  }, c = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: d,
    fontWeight: p,
    color: s,
    cursor: o ? "pointer" : "default"
  }, m = {
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
  return /* @__PURE__ */ e.jsxs("li", { style: u, children: [
    /* @__PURE__ */ e.jsxs("div", { style: c, onClick: o, children: [
      n ? /* @__PURE__ */ e.jsx("span", { style: { fontSize: "16px", color: s }, children: n }) : !S && /* @__PURE__ */ e.jsx("span", { style: m }),
      /* @__PURE__ */ e.jsx("span", { children: t })
    ] }),
    l && l.length > 0 && /* @__PURE__ */ e.jsx("ul", { style: a, children: l.map((v, g) => /* @__PURE__ */ e.jsx(
      Oe,
      {
        ...v,
        bulletColor: i,
        textColor: s,
        fontSize: d,
        fontWeight: p,
        spacing: x,
        isInline: !1
      },
      g
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
  className: p = "",
  activeTabStyle: x,
  inactiveTabStyle: S,
  tabContainerStyle: u,
  contentContainerStyle: c,
  style: m,
  tabsWidth: a = "240px",
  tabGap: v = 8,
  tabPadding: g = "12px 16px",
  tabBorderRadius: C = 12,
  primaryColor: $ = "#2563eb",
  textColor: R = "#374151",
  backgroundColor: _ = "#ffffff",
  hoverTextColor: z = "#1e40af",
  responsiveBreakpoint: E = 768,
  showDrawerLabel: T = "Select Tab"
}) => {
  const [b, O] = M(n), [B, w] = M(null), [k, y] = M(!1), [W, A] = M(!1);
  G(() => {
    const D = () => {
      y(window.innerWidth <= E);
    };
    return D(), window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
  }, [E]);
  const f = o === "left" || o === "right", N = {
    display: "flex",
    flexDirection: f ? k ? "column" : o === "left" ? "row" : "row-reverse" : "column",
    width: "100%",
    height: "100%",
    backgroundColor: _,
    ...f && !k ? {} : { flexWrap: "wrap" },
    ...m
  }, V = {
    width: f && !k ? a : "100%",
    display: "flex",
    flexDirection: f && !k ? "column" : "row",
    justifyContent: !f && o === "top" ? "center" : void 0,
    gap: v,
    padding: 8,
    boxSizing: "border-box",
    ...u
  }, U = {
    flexGrow: 1,
    padding: 24,
    background: "#f9fafb",
    boxSizing: "border-box",
    minWidth: 0,
    ...f && !k ? { width: "calc(100% - " + a + ")" } : { width: "100%" },
    ...c
  }, r = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: g,
    borderRadius: C,
    border: "none",
    backgroundColor: "transparent",
    fontWeight: 500,
    transition: "all 0.2s ease",
    width: f && !k ? "100%" : "auto",
    marginBottom: f && !k ? v : 0,
    marginRight: !f || k ? v : 0,
    justifyContent: "flex-start"
  }, h = {
    backgroundColor: $,
    color: "#fff",
    fontWeight: 700,
    boxShadow: `0 2px 10px ${$}55`,
    ...x
  }, I = {
    backgroundColor: "transparent",
    color: R,
    ...S
  }, Y = {
    backgroundColor: `${$}22`,
    color: z
  };
  return /* @__PURE__ */ e.jsxs("div", { className: p, style: N, children: [
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
    k && f ? /* @__PURE__ */ e.jsxs("div", { style: { width: "100%", marginBottom: 12 }, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => A(!W),
          style: {
            ...r,
            ...h,
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
      W && /* @__PURE__ */ e.jsx("div", { className: "custom-tab-mobile-drawer", children: t.map((D, L) => {
        const F = L === b, X = B === L;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              O(L), A(!1);
            },
            onMouseEnter: () => w(L),
            onMouseLeave: () => w(null),
            className: F ? l : i,
            style: {
              ...r,
              ...F ? h : I,
              ...X && !F ? Y : {}
            },
            children: [
              D.icon && /* @__PURE__ */ e.jsx("span", { children: D.icon }),
              /* @__PURE__ */ e.jsx("span", { children: D.label })
            ]
          },
          L
        );
      }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "nav",
      {
        className: s,
        style: V,
        "aria-label": "Tabs Navigation",
        children: t.map((D, L) => {
          const F = L === b, X = B === L;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => O(L),
              onMouseEnter: () => w(L),
              onMouseLeave: () => w(null),
              className: F ? l : i,
              style: {
                ...r,
                ...F ? h : I,
                ...X && !F ? Y : {}
              },
              children: [
                D.icon && /* @__PURE__ */ e.jsx("span", { children: D.icon }),
                /* @__PURE__ */ e.jsx("span", { children: D.label })
              ]
            },
            L
          );
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "section",
      {
        className: d,
        style: U,
        role: "tabpanel",
        children: t[b]?.content
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
  height: p = "150px",
  borderRadius: x = "12px",
  backgroundColor: S = "#1e1e1e",
  primaryColor: u = "#ff4081",
  padding: c = "16px",
  className: m
}) => {
  const a = J(null), v = J(null), [g, C] = M(o), [$, R] = M(0), [_, z] = M(0), [E, T] = M(0.5), [b, O] = M(s), [B, w] = M(!1), [k, y] = M(l);
  G(() => {
    a.current && (a.current.volume = E, a.current.loop = k, a.current.muted = b);
  }, [E, k, b]);
  const W = () => {
    a.current && (g ? a.current.pause() : a.current.play(), C(!g));
  }, A = () => {
    a.current && (R(a.current.currentTime), z(a.current.duration));
  }, f = (r) => {
    if (!a.current || !r.currentTarget) return;
    const h = r.currentTarget.getBoundingClientRect(), Y = (r.clientX - h.left) / h.width * _;
    a.current.currentTime = Y, R(Y);
  }, j = (r) => {
    a.current && (a.current.currentTime += r);
  }, N = () => {
    v.current && (B ? document.exitFullscreen?.() : v.current.requestFullscreen?.(), w(!B));
  }, V = () => {
    O(!b), b && E === 0 && T(0.5);
  }, U = (r) => {
    const h = Math.floor(r / 60), I = Math.floor(r % 60);
    return `${h}:${I < 10 ? "0" : ""}${I}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: v,
      className: m,
      style: {
        position: "relative",
        width: d,
        backgroundColor: S,
        borderRadius: x,
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
                  onClick: W,
                  style: {
                    background: u,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": g ? "Pause" : "Play",
                  children: g ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: U($) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  " ",
                  "/ ",
                  U(_)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: f,
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
                        width: `${$ / _ * 100 || 0}%`,
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
                    onClick: () => y(!k),
                    "aria-label": "Toggle Loop",
                    children: /* @__PURE__ */ e.jsx(fe, { size: 18, color: k ? u : void 0 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: V, "aria-label": "Toggle Mute", children: b ? /* @__PURE__ */ e.jsx(me, { size: 18 }) : /* @__PURE__ */ e.jsx(be, { size: 18 }) }),
                /* @__PURE__ */ e.jsx("button", { onClick: N, "aria-label": "Toggle Fullscreen", children: B ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
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
  borderRadius: p = "12px",
  padding: x = "16px",
  width: S = "100%",
  className: u
}) => {
  const c = J(null), m = J(null), [a, v] = M(o), [g, C] = M(0), [$, R] = M(0), [_, z] = M(0.5), [E, T] = M(!1), [b, O] = M(l);
  G(() => {
    c.current && (c.current.volume = _);
  }, [_]), G(() => {
    c.current && (c.current.loop = b);
  }, [b]);
  const B = () => {
    c.current && (a ? c.current.pause() : c.current.play(), v(!a));
  }, w = () => {
    c.current && (C(c.current.currentTime), R(c.current.duration));
  }, k = (f) => {
    if (!c.current || !f.currentTarget) return;
    const j = f.currentTarget.getBoundingClientRect(), V = (f.clientX - j.left) / j.width * $;
    c.current.currentTime = V, C(V);
  }, y = (f) => {
    c.current && (c.current.currentTime += f);
  }, W = () => {
    m.current && (E ? document.exitFullscreen?.() : m.current.requestFullscreen?.(), T(!E));
  }, A = (f) => {
    const j = Math.floor(f / 60), N = Math.floor(f % 60);
    return `${j}:${N < 10 ? "0" : ""}${N}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: m,
      className: u,
      style: {
        position: "relative",
        width: S,
        backgroundColor: i,
        borderRadius: p,
        color: d,
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
            ref: c,
            src: t,
            autoPlay: o,
            loop: l,
            onTimeUpdate: w,
            onLoadedMetadata: w
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => y(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => y(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", marginRight: "4px" }, children: A(g) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  "/ ",
                  A($)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: k,
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
                        width: `${g / $ * 100 || 0}%`,
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
                        onClick: () => O(!b),
                        "aria-label": "Toggle Loop",
                        children: /* @__PURE__ */ e.jsx(fe, { size: 18, color: b ? s : void 0 })
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
                    /* @__PURE__ */ e.jsx("button", { onClick: W, "aria-label": "Toggle Fullscreen", children: E ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
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
  rowGap: p,
  columnGap: x,
  width: S = { sm: "100%", md: "90%", lg: "80%" },
  maxWidth: u = { sm: "100%", md: "800px", lg: "1200px" },
  height: c = { sm: "auto", md: "auto", lg: "auto" },
  padding: m = { sm: "10px", md: "20px", lg: "40px" },
  margin: a = { sm: "0 auto", md: "0 auto", lg: "0 auto" },
  textAlign: v = { sm: "left", md: "center", lg: "center" },
  backgroundColor: g = "#fff",
  border: C = { sm: "none", md: "1px solid #ddd", lg: "2px solid #ccc" },
  borderRadius: $ = { sm: "0", md: "8px", lg: "12px" },
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
  const [b, O] = M(
    () => Pe(window.innerWidth)
  );
  G(() => {
    const w = () => O(Pe(window.innerWidth));
    return window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, []);
  const B = ee(() => {
    const w = H(t, b, "block"), k = H(
      n,
      b,
      void 0
    ), y = H(
      o,
      b,
      void 0
    ), W = H(
      l,
      b,
      void 0
    ), A = H(
      i,
      b,
      void 0
    ), f = H(
      s,
      b,
      void 0
    ), j = H(d, b, void 0), N = H(p, b, void 0), V = H(
      x,
      b,
      void 0
    ), U = H(S, b, "100%"), r = H(u, b, void 0), h = H(c, b, void 0), I = H(m, b, void 0), Y = H(a, b, void 0), D = H(
      v,
      b,
      void 0
    ), L = H(C, b, void 0), F = H(
      $,
      b,
      void 0
    ), X = H(
      R,
      b,
      void 0
    ), P = H(_, b, void 0);
    return {
      display: w,
      ...k && { flexDirection: k },
      ...y && { justifyContent: y },
      ...W && { alignItems: W },
      ...A && {
        gridTemplateColumns: A
      },
      ...f && {
        gridTemplateRows: f
      },
      ...j && { gap: j },
      ...N && { rowGap: N },
      ...V && { columnGap: V },
      width: U,
      ...r && { maxWidth: r },
      ...h && { height: h },
      ...I && { padding: I },
      ...Y && { margin: Y },
      ...D && { textAlign: D },
      backgroundColor: g,
      ...L && { border: L },
      ...F && { borderRadius: F },
      ...X && { boxShadow: X },
      ...P && { overflow: P },
      boxSizing: "border-box",
      ...T
    };
  }, [
    b,
    t,
    n,
    o,
    l,
    i,
    s,
    d,
    p,
    x,
    S,
    u,
    c,
    m,
    a,
    v,
    g,
    C,
    $,
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
  hoverTextColor: p = "#111827",
  paddingVertical: x = "16px",
  paddingHorizontal: S = "16px",
  margin: u = "12px 0",
  iconOpen: c = "−",
  iconClose: m = "+",
  transitionDuration: a = "300ms",
  borderRadius: v = "8px",
  shadow: g = "0 2px 8px rgba(0, 0, 0, 0.05)",
  contentPadding: C = "16px",
  fontSize: $ = "16px",
  fontWeight: R = "600",
  iconSize: _ = "18px",
  contentFontSize: z = "14px",
  contentFontWeight: E = "400",
  contentBackgroundColor: T = "#ffffff",
  contentTextColor: b = "#111827",
  className: O,
  style: B
}) => {
  const [w, k] = M(o), y = J([]), W = J([]);
  G(() => {
    y.current.forEach((f, j) => {
      f && (f.style.maxHeight = w.includes(j) ? `${f.scrollHeight}px` : "0px");
    });
  }, [w]);
  const A = (f) => {
    k(
      (j) => n ? j.includes(f) ? j.filter((N) => N !== f) : [...j, f] : j.includes(f) ? [] : [f]
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: O, style: { width: "100%", ...B }, children: t.map((f, j) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        border: `1px solid ${l}`,
        borderRadius: v,
        margin: u,
        boxShadow: g,
        overflow: "hidden",
        transition: `all ${a} ease`
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: (N) => {
              W.current[j] = N;
            },
            onClick: () => A(j),
            style: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: i,
              color: s,
              padding: `${x} ${S}`,
              fontWeight: R,
              fontSize: $,
              cursor: "pointer",
              outline: "none",
              border: "none",
              transition: `all ${a}`
            },
            onMouseEnter: (N) => {
              N.currentTarget.style.backgroundColor = d, N.currentTarget.style.color = p;
            },
            onMouseLeave: (N) => {
              N.currentTarget.style.backgroundColor = i, N.currentTarget.style.color = s;
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: f.title }),
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: _ }, children: w.includes(j) ? c : m })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: (N) => {
              y.current[j] = N;
            },
            style: {
              overflow: "hidden",
              maxHeight: w.includes(j) ? `${y.current[j]?.scrollHeight}px` : "0px",
              transition: `max-height ${a} ease-in-out`
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                style: {
                  borderTop: `1px solid ${l}`,
                  backgroundColor: T,
                  color: b,
                  padding: C,
                  fontSize: z,
                  fontWeight: E
                },
                children: f.content
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
  readOnly: d = !1,
  required: p = !1,
  error: x,
  className: S = "",
  customIcon: u,
  style: c,
  labelStyle: m,
  iconSize: a = 20,
  iconCheckedBgColor: v = "#2563eb",
  // blue-600
  iconUncheckedBorderColor: g = "#9ca3af",
  // gray-400
  textColor: C = "#374151",
  // gray-700
  errorStyle: $
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
      className: S,
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
                ...m
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
                    required: p,
                    onChange: () => _(z.value),
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
                      width: a,
                      height: a,
                      borderRadius: R ? 4 : "50%",
                      border: `2px solid ${E ? v : g}`,
                      backgroundColor: E ? v : "transparent",
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
  transitionDuration: d = 300,
  style: p = {},
  children: x,
  showCloseButton: S = !0,
  closeButtonStyle: u = {}
}) => {
  const [c, m] = M(t);
  G(() => {
    t ? m(!0) : setTimeout(() => m(!1), d);
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
  }, [t, o]), v = {
    position: "fixed",
    zIndex: 1e3,
    backgroundColor: s,
    transition: `transform ${d}ms ease, opacity ${d}ms ease`,
    transform: a,
    opacity: t ? 1 : 0,
    ...p,
    ...o === "left" || o === "right" ? { top: 0, [o]: 0, width: l, height: "100%" } : { left: 0, [o]: 0, height: i, width: "100%" }
  }, g = {
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
    /* @__PURE__ */ e.jsx("div", { style: g, onClick: n }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: {
          ...v,
          display: "block",
          visibility: c ? "visible" : "hidden",
          pointerEvents: t ? "auto" : "none"
        },
        children: [
          S && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: n,
              style: { ...C, ...u },
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
  borderColor: d = "#ccc",
  backgroundColor: p = "#fff",
  textColor: x = "#333",
  hoverColor: S = "#f0f0f0",
  padding: u = "12px 16px",
  margin: c = "0 0 1rem 0",
  dropdownWidth: m = "100%",
  dropdownHeight: a = "200px",
  borderRadius: v = "8px",
  boxShadow: g = "0 4px 8px rgba(0,0,0,0.1)",
  optionPadding: C = "10px 12px",
  optionGap: $ = "8px",
  transitionDuration: R = "0.25s",
  optionHoverStyle: _,
  className: z = "",
  dropdownStyle: E,
  dropdownClassName: T = "",
  optionStyle: b,
  optionClassName: O = "",
  iconPrefix: B,
  iconSuffix: w
}) => {
  const [k, y] = M(o), [W, A] = M(!1), [f, j] = M(null), N = J(null);
  G(() => {
    const h = (I) => {
      N.current && !N.current.contains(I.target) && A(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []);
  const V = (h) => {
    y(h), A(!1), l && l(h);
  }, U = n ?? k, r = t.find((h) => h.value === U);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: N,
      className: z,
      style: {
        position: "relative",
        width: m,
        margin: c,
        fontFamily: "sans-serif",
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => A((h) => !h),
            disabled: s,
            "aria-haspopup": "listbox",
            "aria-expanded": W,
            style: {
              width: "100%",
              padding: u,
              backgroundColor: p,
              color: x,
              border: `1px solid ${d}`,
              borderRadius: v,
              boxShadow: s ? "none" : g,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: s ? "not-allowed" : "pointer",
              opacity: s ? 0.6 : 1,
              transition: `all ${R} ease-in-out`
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: $ }, children: [
                B && /* @__PURE__ */ e.jsx("span", { children: B }),
                /* @__PURE__ */ e.jsx("span", { children: r?.label || i })
              ] }),
              w || /* @__PURE__ */ e.jsx("span", { style: { marginLeft: "8px" }, children: "▼" })
            ]
          }
        ),
        W && /* @__PURE__ */ e.jsx(
          "ul",
          {
            role: "listbox",
            className: T,
            style: {
              position: "absolute",
              top: "100%",
              left: 0,
              zIndex: 1e3,
              width: "100%",
              maxHeight: a,
              overflowY: "auto",
              backgroundColor: p,
              border: `1px solid ${d}`,
              borderRadius: v,
              boxShadow: g,
              marginTop: "4px",
              transition: `all ${R} ease`,
              ...E
            },
            children: t.map((h, I) => {
              const Y = k === h.value, D = f === I, L = D ? _?.backgroundColor || S : Y ? S : p, F = {
                display: "flex",
                alignItems: "center",
                gap: $,
                padding: C,
                cursor: "pointer",
                backgroundColor: L,
                transition: `background ${R}`,
                ...b,
                ...D && _
              };
              return /* @__PURE__ */ e.jsxs(
                "li",
                {
                  onClick: () => V(h.value),
                  role: "option",
                  className: O,
                  style: F,
                  onMouseEnter: () => j(I),
                  onMouseLeave: () => j(null),
                  "aria-selected": Y,
                  children: [
                    h.icon && /* @__PURE__ */ e.jsx("span", { children: h.icon }),
                    h.label
                  ]
                },
                h.value
              );
            })
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
  tableBorderRadius: p = "8px",
  sortable: x = !0,
  bodyAlign: S = "left",
  headerAlign: u = "left"
}) => {
  const [c, m] = M(null), [a, v] = M("asc"), [g, C] = M(1), [$, R] = M(null), _ = (w, k) => {
    !x || !k || (c === w ? v(a === "asc" ? "desc" : "asc") : (m(w), v("asc")), C(1));
  }, z = ve.useMemo(() => c ? [...n].sort((w, k) => {
    const y = w[c], W = k[c];
    if (y == null && W == null) return 0;
    if (y == null) return a === "asc" ? -1 : 1;
    if (W == null) return a === "asc" ? 1 : -1;
    if (typeof y == "number" && typeof W == "number")
      return a === "asc" ? y - W : W - y;
    if (y instanceof Date && W instanceof Date)
      return a === "asc" ? y.getTime() - W.getTime() : W.getTime() - y.getTime();
    const A = String(y).toLowerCase(), f = String(W).toLowerCase();
    return A === f ? 0 : a === "asc" ? A > f ? 1 : -1 : A < f ? 1 : -1;
  }) : [...n], [n, c, a]), E = l ? z.slice(
    (g - 1) * i,
    g * i
  ) : z, T = Math.ceil(n.length / i), b = /* @__PURE__ */ e.jsx(
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
  ), O = /* @__PURE__ */ e.jsx(
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
          borderRadius: p,
          // Important: for border-radius to show on table, set borderSpacing and borderCollapse accordingly
          borderSpacing: 0,
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { children: t.map(({ key: w, label: k, sortable: y, icon: W }, A) => /* @__PURE__ */ e.jsx(
            "th",
            {
              onClick: () => _(w, y),
              style: {
                padding: "12px",
                fontSize: "14px",
                border: `1px solid ${s.borderColor}`,
                cursor: x && y ? "pointer" : "default",
                backgroundColor: s.headerBg,
                color: s.headerText,
                userSelect: "none",
                borderTopLeftRadius: A === 0 ? d : void 0,
                borderTopRightRadius: A === t.length - 1 ? d : void 0,
                textAlign: u,
                whiteSpace: "nowrap"
              },
              "aria-sort": c === w ? a === "asc" ? "ascending" : "descending" : void 0,
              role: x && y ? "button" : void 0,
              tabIndex: x && y ? 0 : void 0,
              onKeyDown: (f) => {
                x && y && (f.key === "Enter" || f.key === " ") && (f.preventDefault(), _(w, y));
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
                    W && /* @__PURE__ */ e.jsx("span", { children: W }),
                    /* @__PURE__ */ e.jsx("span", { children: k }),
                    x && y && (c === w ? a === "asc" ? b : O : B)
                  ]
                }
              )
            },
            w
          )) }) }),
          /* @__PURE__ */ e.jsx("tbody", { children: E.map((w, k) => /* @__PURE__ */ e.jsx(
            "tr",
            {
              style: {
                backgroundColor: $ === k ? s.hoverBg : s.rowBg,
                color: s.rowText,
                transition: "background-color 0.2s ease-in-out"
              },
              onMouseEnter: () => R(k),
              onMouseLeave: () => R(null),
              children: t.map(({ key: y }) => /* @__PURE__ */ e.jsx(
                "td",
                {
                  style: {
                    padding: "12px",
                    border: `1px solid ${s.borderColor}`,
                    whiteSpace: "nowrap",
                    textAlign: S
                  },
                  children: w[y]
                },
                y
              ))
            },
            k
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
                opacity: g === 1 ? 0.5 : 1,
                cursor: g === 1 ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
              },
              disabled: g === 1,
              onClick: () => C((w) => Math.max(w - 1, 1)),
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
            g,
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
                opacity: g === T ? 0.5 : 1,
                cursor: g === T ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
              },
              disabled: g === T,
              onClick: () => C((w) => Math.min(w + 1, T)),
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
  backgroundRepeat: p = "no-repeat",
  textColor: x = "#000",
  borderRadius: S = 12,
  padding: u = 24,
  margin: c = 0,
  maxWidth: m = "100%",
  boxShadow: a = "0 4px 12px rgba(0,0,0,0.1)",
  border: v = "none",
  display: g = "flex",
  flexDirection: C = "column",
  justifyContent: $ = "flex-start",
  alignItems: R = "stretch",
  gap: _ = 16
}) => {
  const z = {
    background: l,
    color: x,
    borderRadius: S,
    padding: u,
    margin: c,
    maxWidth: m,
    boxShadow: a,
    border: v,
    display: g,
    flexDirection: C,
    justifyContent: $,
    alignItems: R,
    gap: _,
    boxSizing: "border-box",
    // Background image styles if provided
    ...i ? {
      backgroundImage: `url(${i})`,
      backgroundSize: s,
      backgroundPosition: d,
      backgroundRepeat: p
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
  maxWidth: p = "100%",
  height: x = "auto",
  children: S,
  style: u
}) => {
  const [c, m] = M(
    Ae(window.innerWidth)
  );
  G(() => {
    const g = () => m(Ae(window.innerWidth));
    return window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, []);
  const a = ee(() => typeof t == "number" ? t : t[c] ?? 1, [t, c]), v = ee(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${a}, 1fr)`,
      gap: n,
      padding: o,
      alignItems: l,
      justifyItems: i,
      backgroundColor: s,
      width: d,
      maxWidth: p,
      height: x,
      boxSizing: "border-box",
      ...u
    }),
    [
      a,
      n,
      o,
      l,
      i,
      s,
      d,
      p,
      x,
      u
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: v, children: S });
}, Ne = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Xt = ({
  direction: t = "row",
  align: n = "center",
  justify: o = "space-between",
  gap: l = 16,
  padding: i = 20,
  backgroundColor: s = "transparent",
  width: d = "100%",
  maxWidth: p = "100%",
  height: x = "auto",
  style: S,
  children: u
}) => {
  const [c, m] = M(
    Ne(window.innerWidth)
  );
  G(() => {
    const g = () => m(Ne(window.innerWidth));
    return window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, []);
  const a = ee(() => typeof t == "string" ? t : t[c] ?? "row", [t, c]), v = ee(
    () => ({
      display: "flex",
      flexDirection: a,
      alignItems: n,
      justifyContent: o,
      gap: typeof l == "number" ? `${l}px` : l,
      padding: typeof i == "number" ? `${i}px` : i,
      backgroundColor: s,
      width: d,
      maxWidth: p,
      height: x,
      boxSizing: "border-box",
      ...S
    }),
    [
      a,
      n,
      o,
      l,
      i,
      s,
      d,
      p,
      x,
      S
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: v, children: u });
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
  actionButton: p,
  position: x = "top-right",
  className: S,
  style: u
}) => {
  const [c, m] = M(!0);
  if (G(() => {
    if (s) {
      const R = setTimeout(() => {
        m(!1), i?.();
      }, s);
      return () => clearTimeout(R);
    }
  }, [s, i]), !c) return null;
  const { bg: a, border: v, iconColor: g, Icon: C } = zt[o], $ = Rt(x);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: S,
      style: {
        ...$,
        display: "flex",
        gap: "12px",
        padding: "16px",
        backgroundColor: a,
        borderLeft: `4px solid ${v}`,
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
        /* @__PURE__ */ e.jsx("div", { style: { color: g, marginTop: "3px" }, children: d || C }),
        /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
          t && /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", marginBottom: "4px" }, children: t }),
          n && /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", color: "#374151" }, children: n }),
          p && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "10px" }, children: p })
        ] }),
        l && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              m(!1), i?.();
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
  borderRadius: p,
  borderWidth: x = "0",
  fontSize: S = "14px",
  fontWeight: u = 500,
  horizontalPadding: c = "10px",
  verticalPadding: m = "6px",
  margin: a = "0",
  shadow: v = "0 1px 4px rgba(0, 0, 0, 0.1)",
  notificationDot: g = !1,
  dotColor: C = "#ef4444",
  count: $,
  pulse: R = !1,
  style: _,
  onClick: z
}) => {
  const E = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: n,
    border: `${x} solid ${l}`,
    borderRadius: p || (d ? "9999px" : "6px"),
    padding: `${m} ${c}`,
    fontSize: S,
    fontWeight: u,
    margin: a,
    boxShadow: v,
    position: "relative",
    cursor: z ? "pointer" : "default",
    ..._
  }, T = {
    color: o,
    display: "inline"
  }, b = {
    display: "flex",
    alignItems: "center",
    color: o
  }, O = {
    ...b,
    marginRight: t ? "6px" : "0px"
  }, B = {
    ...b,
    marginLeft: t ? "6px" : "0px"
  }, w = {
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
  }, k = {
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
    g && /* @__PURE__ */ e.jsx("span", { style: k }),
    typeof $ < "u" && /* @__PURE__ */ e.jsx("span", { style: w, children: $ }),
    i && s === "left" && /* @__PURE__ */ e.jsx("span", { style: O, children: i }),
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
  const s = De[o], d = t.slice(0, n), p = t.length - n;
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
        d.map(({ src: x, alt: S, isOnline: u, isOffline: c }, m) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              marginLeft: m === 0 ? 0 : -(s / 3),
              boxShadow: "0 0 0 2px white",
              borderRadius: "50%",
              flexShrink: 0,
              cursor: "pointer"
            },
            title: S,
            children: /* @__PURE__ */ e.jsx(
              Mt,
              {
                src: x,
                alt: S,
                size: o,
                isOnline: u,
                isOffline: c
              }
            )
          },
          m
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
  autoplay: d = !1,
  loop: p = !1
}) => {
  const [x, S] = M(null), u = J(null), c = J(null), [m, a] = M(!1), [v, g] = M(0), [C, $] = M(0), [R, _] = M(0.5), [z, E] = M(!1), [T, b] = M(p);
  G(() => {
    u.current && (u.current.volume = R);
  }, [R]), G(() => {
    u.current && (u.current.loop = T);
  }, [T]), G(() => {
    x === null && u.current && (u.current.pause(), a(!1), g(0), $(0));
  }, [x]);
  const O = (f) => {
    if (x === f) {
      if (!u.current) return;
      u.current.paused ? (u.current.play(), a(!0)) : (u.current.pause(), a(!1));
    } else
      S(f), setTimeout(() => {
        u.current?.play(), a(!0);
      }, 100);
  }, B = () => {
    u.current && (g(u.current.currentTime), $(u.current.duration));
  }, w = (f) => {
    if (!u.current) return;
    const j = f.currentTarget.getBoundingClientRect(), U = (f.clientX - j.left) / j.width * C;
    u.current.currentTime = U, g(U);
  }, k = (f) => {
    if (u.current) {
      let j = u.current.currentTime + f;
      j = Math.min(Math.max(j, 0), C), u.current.currentTime = j, g(j);
    }
  }, y = () => {
    c.current && (z ? document.exitFullscreen?.() : c.current.requestFullscreen?.(), E(!z));
  }, W = () => {
    _((f) => f > 0 ? 0 : 0.5);
  }, A = (f) => {
    if (isNaN(f)) return "0:00";
    const j = Math.floor(f / 60), N = Math.floor(f % 60);
    return `${j}:${N < 10 ? "0" : ""}${N}`;
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
            children: t.map(({ src: f, title: j, thumbnail: N }, V) => {
              const U = x === V && m;
              return /* @__PURE__ */ e.jsxs(
                "li",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px",
                    borderRadius: "10px",
                    backgroundColor: U ? o : s,
                    color: U ? "#fff" : i,
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                  },
                  onClick: () => O(V),
                  tabIndex: 0,
                  role: "button",
                  "aria-pressed": U,
                  onKeyDown: (r) => {
                    (r.key === "Enter" || r.key === " ") && O(V);
                  },
                  "aria-label": `${U ? "Pause" : "Play"} ${j}`,
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
                    U ? /* @__PURE__ */ e.jsx(se, { size: 24, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(oe, { size: 24, "aria-hidden": "true" })
                  ]
                },
                V
              );
            })
          }
        ),
        x !== null && /* @__PURE__ */ e.jsxs(
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
                  ref: u,
                  src: t[x].src,
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
                        onClick: () => k(-10),
                        "aria-label": "Skip back 10 seconds",
                        style: te(i, o),
                        children: /* @__PURE__ */ e.jsx(he, { size: 20 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => {
                          u.current && (m ? u.current.pause() : u.current.play(), a(!m));
                        },
                        "aria-label": m ? "Pause" : "Play",
                        style: {
                          ...te("#fff", o),
                          borderRadius: "9999px",
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        },
                        children: m ? /* @__PURE__ */ e.jsx(se, { size: 24, color: "#fff" }) : /* @__PURE__ */ e.jsx(oe, { size: 24, color: "#fff" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => k(10),
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
                        dateTime: `PT${Math.floor(v / 60)}M${Math.floor(
                          v % 60
                        )}S`,
                        style: { minWidth: "40px", fontSize: "0.9rem" },
                        "aria-label": "Current playback time",
                        children: A(v)
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        onClick: w,
                        role: "slider",
                        "aria-valuemin": 0,
                        "aria-valuemax": C,
                        "aria-valuenow": v,
                        tabIndex: 0,
                        onKeyDown: (f) => {
                          u.current && (f.key === "ArrowRight" ? k(5) : f.key === "ArrowLeft" && k(-5));
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
                              width: `${v / C * 100 || 0}%`,
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
                        onClick: () => b(!T),
                        "aria-label": "Toggle Loop",
                        style: te(
                          T ? o : i,
                          T ? "#e0f2fe" : "transparent"
                        ),
                        children: /* @__PURE__ */ e.jsx(
                          fe,
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
                        onClick: W,
                        "aria-label": R > 0 ? "Mute" : "Unmute",
                        style: te(i, "transparent"),
                        children: R > 0 ? /* @__PURE__ */ e.jsx(be, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(me, { size: 20, "aria-hidden": "true" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: y,
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
  loop: p = !1,
  muted: x = !1,
  controls: S = !0,
  className: u = ""
}) => {
  const [c, m] = M(null), [a, v] = M(
    typeof window < "u" ? window.innerWidth : 1024
  ), [g, C] = M(n);
  G(() => {
    function T() {
      const b = window.innerWidth;
      if (v(b), !o) {
        C(n);
        return;
      }
      b < 640 ? C(o.mobile ?? n) : b < 1024 ? C(o.tablet ?? n) : C(o.desktop ?? n);
    }
    if (typeof window < "u")
      return T(), window.addEventListener("resize", T), () => window.removeEventListener("resize", T);
  }, [n, o]);
  const $ = () => m(null), R = (T) => {
    T.stopPropagation(), c !== null && m((c - 1 + t.length) % t.length);
  }, _ = (T) => {
    T.stopPropagation(), c !== null && m((c + 1) % t.length);
  }, z = ({
    src: T,
    poster: b,
    autoPlay: O = !1,
    loop: B = !1,
    muted: w = !1,
    controls: k = !1,
    width: y = "100%",
    height: W = "150px",
    borderRadius: A = "12px",
    backgroundColor: f = "#1e1e1e",
    primaryColor: j = "#ff4081",
    padding: N = "16px",
    className: V,
    onClick: U
  }) => {
    const r = J(null), h = J(null), [I, Y] = M(O), [D, L] = M(0), [F, X] = M(0), [P, Z] = M(w ? 0 : 0.5), [K, le] = M(w), [ae, Be] = M(!1), [ce, Ye] = M(B);
    G(() => {
      r.current && (r.current.volume = P, r.current.loop = ce, r.current.muted = K);
    }, [P, ce, K]);
    const Ve = () => {
      r.current && (I ? r.current.pause() : r.current.play(), Y(!I));
    }, Ce = () => {
      r.current && (L(r.current.currentTime), X(r.current.duration));
    }, Ue = (Q) => {
      if (!r.current || !Q.currentTarget) return;
      const de = Q.currentTarget.getBoundingClientRect(), Me = (Q.clientX - de.left) / de.width * F;
      r.current.currentTime = Me, L(Me);
    }, ze = (Q) => {
      r.current && (r.current.currentTime += Q);
    }, He = () => {
      h.current && (ae ? document.exitFullscreen?.() : h.current.requestFullscreen?.(), Be(!ae));
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
        ref: h,
        onClick: U,
        className: V,
        style: {
          position: "relative",
          width: y,
          backgroundColor: f,
          borderRadius: A,
          color: "#fff",
          overflow: "hidden",
          padding: N,
          boxSizing: "border-box",
          maxWidth: "100%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          cursor: U ? "pointer" : "default",
          userSelect: "none"
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "video",
            {
              ref: r,
              src: T,
              poster: b,
              autoPlay: O,
              loop: B,
              muted: w,
              controls: k,
              onTimeUpdate: Ce,
              onLoadedMetadata: Ce,
              style: {
                width: "100%",
                height: W,
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
                    "aria-label": I ? "Pause" : "Play",
                    children: I ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
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
                      /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: Re(D) }),
                      /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                        " ",
                        "/ ",
                        Re(F)
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
                          width: `${D / F * 100 || 0}%`,
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
  }, E = () => a < 640 ? "120px" : a < 1024 ? "150px" : "180px";
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${u}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${i === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${g}, 1fr)`,
          gap: l
        },
        children: t.map((T, b) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "relative",
              overflow: "hidden",
              borderRadius: 12,
              cursor: s ? "pointer" : "default"
            },
            onClick: () => s && m(b),
            children: /* @__PURE__ */ e.jsx(
              z,
              {
                src: T.src,
                poster: T.poster,
                autoPlay: d,
                loop: p,
                muted: x,
                controls: S,
                height: E(),
                borderRadius: "12px",
                padding: "8px",
                primaryColor: "#ff4081",
                onClick: (O) => O.stopPropagation()
              }
            )
          },
          b
        ))
      }
    ),
    s && c !== null && /* @__PURE__ */ e.jsxs(
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
              muted: x,
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
  const [d, p] = M(null), x = () => p(null), S = (c) => {
    c.stopPropagation(), d !== null && p((d - 1 + t.length) % t.length);
  }, u = (c) => {
    c.stopPropagation(), d !== null && p((d + 1) % t.length);
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
        children: t.map((c, m) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "relative overflow-hidden rounded-lg cursor-pointer",
            onClick: () => i && p(m),
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
          m
        ))
      }
    ),
    i && d !== null && /* @__PURE__ */ e.jsxs(
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
              onClick: S,
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
  Dt as Accordation,
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
