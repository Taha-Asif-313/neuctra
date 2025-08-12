import je, { useMemo as ee, forwardRef as we, createElement as ve, useRef as J, useState as I, useImperativeHandle as Ge, useEffect as q } from "react";
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
var Ie;
function Je() {
  if (Ie) return re;
  Ie = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function s(a, l, o) {
    var d = null;
    if (o !== void 0 && (d = "" + o), l.key !== void 0 && (d = "" + l.key), "key" in l) {
      o = {};
      for (var g in l)
        g !== "key" && (o[g] = l[g]);
    } else o = l;
    return l = o.ref, {
      $$typeof: t,
      type: a,
      key: d,
      ref: l !== void 0 ? l : null,
      props: o
    };
  }
  return re.Fragment = n, re.jsx = s, re.jsxs = s, re;
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
function Ze() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === T ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case x:
          return "Fragment";
        case z:
          return "Profiler";
        case k:
          return "StrictMode";
        case $:
          return "Suspense";
        case S:
          return "SuspenseList";
        case O:
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
          case M:
            return (r._context.displayName || "Context") + ".Consumer";
          case R:
            var h = r.render;
            return r = r.displayName, r || (r = h.displayName || h.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case m:
            return h = r.displayName || null, h !== null ? h : t(r.type) || "Memo";
          case N:
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
    function s(r) {
      try {
        n(r);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var L = h.error, Y = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return L.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Y
        ), n(r);
      }
    }
    function a(r) {
      if (r === x) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === N)
        return "<...>";
      try {
        var h = t(r);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var r = C.A;
      return r === null ? null : r.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function d(r) {
      if (y.call(r, "key")) {
        var h = Object.getOwnPropertyDescriptor(r, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function g(r, h) {
      function L() {
        f || (f = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: L,
        configurable: !0
      });
    }
    function p() {
      var r = t(this.type);
      return j[r] || (j[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function w(r, h, L, Y, B, P, D, G) {
      return L = P.ref, r = {
        $$typeof: i,
        type: r,
        key: h,
        props: P,
        _owner: B
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: p
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
        value: G
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function u(r, h, L, Y, B, P, D, G) {
      var A = h.children;
      if (A !== void 0)
        if (Y)
          if (_(A)) {
            for (Y = 0; Y < A.length; Y++)
              c(A[Y]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(A);
      if (y.call(h, "key")) {
        A = t(r);
        var Z = Object.keys(h).filter(function(le) {
          return le !== "key";
        });
        Y = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", V[A + Y] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Y,
          A,
          Z,
          A
        ), V[A + Y] = !0);
      }
      if (A = null, L !== void 0 && (s(L), A = "" + L), d(h) && (s(h.key), A = "" + h.key), "key" in h) {
        L = {};
        for (var K in h)
          K !== "key" && (L[K] = h[K]);
      } else L = h;
      return A && g(
        L,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), w(
        r,
        A,
        P,
        B,
        l(),
        L,
        D,
        G
      );
    }
    function c(r) {
      typeof r == "object" && r !== null && r.$$typeof === i && r._store && (r._store.validated = 1);
    }
    var b = je, i = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), E = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), C = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, _ = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var f, j = {}, F = b.react_stack_bottom_frame.bind(
      b,
      o
    )(), U = W(a(o)), V = {};
    ne.Fragment = x, ne.jsx = function(r, h, L, Y, B) {
      var P = 1e4 > C.recentlyCreatedOwnerStacks++;
      return u(
        r,
        h,
        L,
        !1,
        Y,
        B,
        P ? Error("react-stack-top-frame") : F,
        P ? W(a(r)) : U
      );
    }, ne.jsxs = function(r, h, L, Y, B) {
      var P = 1e4 > C.recentlyCreatedOwnerStacks++;
      return u(
        r,
        h,
        L,
        !0,
        Y,
        B,
        P ? Error("react-stack-top-frame") : F,
        P ? W(a(r)) : U
      );
    };
  }()), ne;
}
var $e;
function Ke() {
  return $e || ($e = 1, process.env.NODE_ENV === "production" ? ue.exports = Je() : ue.exports = Ze()), ue.exports;
}
var e = Ke();
const Nt = ({
  as: t = "p",
  children: n,
  className: s = "",
  href: a,
  target: l,
  rel: o,
  // Style
  color: d = "#333",
  bgColor: g,
  fontSize: p = "16px",
  fontWeight: w = "normal",
  textAlign: u = "left",
  textTransform: c = "none",
  lineHeight: b = "normal",
  letterSpacing: i = "normal",
  maxWidth: v,
  padding: x,
  margin: k,
  borderRadius: z,
  boxShadow: M,
  shadowColor: E = "rgba(0,0,0,0.1)",
  wordBreak: R = "normal",
  // Text styles
  italic: $ = !1,
  bold: S = !1,
  underline: m = !1,
  strikethrough: N = !1,
  selectable: O = !0,
  truncate: T = !1,
  // Hover & Active
  hoverColor: C,
  hoverBgColor: y,
  hoverTextDecoration: _,
  activeColor: W,
  activeBgColor: f,
  transitionDuration: j = "0.25s",
  // Event
  onClick: F
}) => {
  const U = ee(() => {
    const P = [];
    return m && P.push("underline"), N && P.push("line-through"), P.join(" ") || "none";
  }, [m, N]), V = {
    color: d,
    backgroundColor: g || "transparent",
    fontSize: p,
    fontWeight: S ? "bold" : w,
    textAlign: u,
    textTransform: c,
    lineHeight: b,
    letterSpacing: i,
    maxWidth: v,
    padding: x,
    margin: k,
    borderRadius: z,
    textDecoration: U,
    fontStyle: $ ? "italic" : "normal",
    wordBreak: R,
    boxShadow: M || (E ? `0 1px 4px ${E}` : void 0),
    cursor: F || a ? "pointer" : "default",
    userSelect: O ? "text" : "none",
    transition: `all ${j} ease-in-out`,
    overflow: T ? "hidden" : void 0,
    whiteSpace: T ? "nowrap" : void 0,
    textOverflow: T ? "ellipsis" : void 0
  }, B = {
    className: s,
    style: V,
    onClick: F,
    onMouseEnter: (P) => {
      const D = P.currentTarget;
      C && (D.style.color = C), y && (D.style.backgroundColor = y), _ && (D.style.textDecoration = _);
    },
    onMouseLeave: (P) => {
      const D = P.currentTarget;
      D.style.color = d, D.style.backgroundColor = g || "transparent", D.style.textDecoration = U;
    },
    onMouseDown: (P) => {
      const D = P.currentTarget;
      W && (D.style.color = W), f && (D.style.backgroundColor = f);
    },
    onMouseUp: (P) => {
      const D = P.currentTarget;
      D.style.color = C || d, D.style.backgroundColor = y || g || "transparent";
    }
  };
  return t === "a" || a ? /* @__PURE__ */ e.jsx(
    "a",
    {
      ...B,
      href: a,
      target: l,
      rel: o || (l === "_blank" ? "noopener noreferrer" : void 0),
      children: n
    }
  ) : /* @__PURE__ */ e.jsx(t, { ...B, children: n });
}, _e = ({
  src: t,
  alt: n = "Image",
  width: s = "100%",
  height: a = "auto",
  borderRadius: l = "8px",
  borderColor: o = "transparent",
  borderStyle: d = "solid",
  borderWidth: g = "0px",
  shadow: p = !1,
  boxShadow: w,
  opacity: u = 1,
  objectFit: c = "cover",
  overlayText: b,
  overlayColor: i = "rgba(0, 0, 0, 0.5)",
  svgIcon: v,
  responsive: x = !1,
  padding: k,
  margin: z,
  lazyLoad: M = !1,
  hoverOpacity: E,
  hoverShadow: R = !1,
  hoverScale: $,
  hoverRotate: S,
  transitionDuration: m = "0.3s",
  overflow: N = "hidden",
  className: O,
  style: T,
  onClick: C
}) => {
  const y = {
    width: x ? "100%" : s,
    height: x ? "100%" : a,
    borderRadius: l,
    border: `${g} ${d} ${o}`,
    objectFit: c,
    opacity: u,
    boxShadow: p ? w || "0 4px 12px rgba(0,0,0,0.15)" : "none",
    transition: `all ${m} ease`,
    display: "block"
  }, _ = (j) => {
    j.currentTarget.style.opacity = E !== void 0 ? E.toString() : y.opacity?.toString() || "1", j.currentTarget.style.boxShadow = R ? "0 8px 20px rgba(0,0,0,0.3)" : y.boxShadow?.toString() || "none", j.currentTarget.style.transform = `scale(${$ || 1}) rotate(${S || 0}deg)`;
  }, W = (j) => {
    j.currentTarget.style.opacity = y.opacity?.toString() || "1", j.currentTarget.style.boxShadow = y.boxShadow?.toString() || "none", j.currentTarget.style.transform = "scale(1) rotate(0deg)";
  }, f = (() => {
    switch (N) {
      case "x":
        return { overflowX: "hidden" };
      case "y":
        return { overflowY: "hidden" };
      default:
        return { overflow: N };
    }
  })();
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      role: "img",
      "aria-label": n,
      onClick: C,
      className: O,
      style: {
        width: x ? "100%" : s,
        height: x ? "auto" : a,
        padding: k,
        margin: z,
        position: "relative",
        cursor: C ? "pointer" : "default",
        display: "inline-block",
        transition: `all ${m} ease`,
        ...f,
        ...T
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
            loading: M ? "lazy" : "eager",
            style: y,
            onMouseEnter: _,
            onMouseLeave: W
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
              backgroundColor: i,
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
}, Wt = ({
  children: t,
  type: n = "button",
  onClick: s,
  iconBefore: a,
  iconAfter: l,
  className: o = "",
  style: d,
  // ✅ NEW
  fullWidth: g = !1,
  disabled: p = !1,
  loading: w = !1,
  loadingText: u = "Loading...",
  paddingHorizontal: c = 30,
  paddingVertical: b = 8,
  fontSize: i = "16px",
  fontWeight: v = 400,
  borderRadius: x = 6,
  backgroundColor: k = "#02b314",
  textColor: z = "white",
  borderColor: M = "transparent",
  hoverBgColor: E = "transparent",
  hoverTextColor: R = "black",
  hoverBorderColor: $,
  boxShadow: S = "0 1px 2px rgba(0, 0, 0, 0.05)"
}) => {
  const [m, N] = je.useState(!1), O = m && !p && R || z, T = m && !p && $ || M, C = m && !p ? E : k, y = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${b}px ${c}px`,
    fontSize: i,
    fontWeight: v,
    borderRadius: `${x}px`,
    width: g ? "100%" : "auto",
    color: O,
    border: `1px solid ${T}`,
    backgroundColor: C,
    boxShadow: S,
    cursor: p ? "not-allowed" : "pointer",
    opacity: p ? 0.6 : 1,
    transition: "all 0.2s ease-in-out",
    gap: "8px",
    ...d
    // ✅ Apply user-supplied inline styles last
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: n,
      className: o,
      style: y,
      onClick: !p && !w ? s : void 0,
      disabled: p,
      onMouseEnter: () => N(!0),
      onMouseLeave: () => N(!1),
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
          /* @__PURE__ */ e.jsx("span", { children: u })
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          a && /* @__PURE__ */ e.jsx("span", { children: a }),
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
const Qe = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), et = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, s, a) => a ? a.toUpperCase() : s.toLowerCase()
), Le = (t) => {
  const n = et(t);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, We = (...t) => t.filter((n, s, a) => !!n && n.trim() !== "" && a.indexOf(n) === s).join(" ").trim(), tt = (t) => {
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
var rt = {
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
const nt = we(
  ({
    color: t = "currentColor",
    size: n = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: a,
    className: l = "",
    children: o,
    iconNode: d,
    ...g
  }, p) => ve(
    "svg",
    {
      ref: p,
      ...rt,
      width: n,
      height: n,
      stroke: t,
      strokeWidth: a ? Number(s) * 24 / Number(n) : s,
      className: We("lucide", l),
      ...!o && !tt(g) && { "aria-hidden": "true" },
      ...g
    },
    [
      ...d.map(([w, u]) => ve(w, u)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = (t, n) => {
  const s = we(
    ({ className: a, ...l }, o) => ve(nt, {
      ref: o,
      iconNode: n,
      className: We(
        `lucide-${Qe(Le(t))}`,
        `lucide-${t}`,
        a
      ),
      ...l
    })
  );
  return s.displayName = Le(t), s;
};
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ke = X("chevron-left", st);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Se = X("chevron-right", ot);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], lt = X("circle-alert", it);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ct = X("circle-check-big", at);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = [
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
], ut = X("eye-off", dt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ft = X("eye", pt);
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
], ht = X("info", xt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], pe = X("maximize", gt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
], fe = X("minimize", bt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], se = X("pause", mt);
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
], oe = X("play", yt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], xe = X("rotate-ccw", vt);
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
], he = X("skip-back", jt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  ["path", { d: "M21 4v16", key: "7j8fe9" }],
  [
    "path",
    {
      d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "zs4d6"
    }
  ]
], ge = X("skip-forward", wt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kt = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], St = X("triangle-alert", kt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Ct = X("user", Tt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], be = X("volume-2", zt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], me = X("volume-x", Rt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ie = X("x", Mt), Ft = we(
  ({
    type: t = "text",
    placeholder: n = "",
    label: s,
    value: a,
    defaultValue: l,
    onChange: o,
    name: d = "",
    disabled: g = !1,
    readOnly: p = !1,
    required: w = !1,
    error: u,
    success: c = !1,
    autoFocus: b = !1,
    iconLeft: i,
    iconRight: v,
    borderColor: x = "#ccc",
    focusBorderColor: k = "#2563eb",
    hoverBorderColor: z = "#4b5563",
    backgroundColor: M = "#ffffff",
    textColor: E = "#111827",
    errorColor: R = "#dc2626",
    successColor: $ = "#16a34a",
    labelColor: S = "#374151",
    size: m = "md",
    radius: N = "6px",
    fontSize: O = "14px",
    rows: T = 4,
    cols: C,
    maxLength: y,
    resize: _ = !0,
    showCharacterCount: W = !0,
    className: f,
    style: j
  }, F) => {
    const U = J(null), [V, r] = I(l || ""), [h, L] = I(!1);
    Ge(F, () => U.current);
    const Y = (A) => {
      y && A.target.value.length > y || (r(A.target.value), o && o(d, A.target.value));
    }, B = () => {
      switch (m) {
        case "sm":
          return "6px 12px";
        case "lg":
          return "12px 20px";
        default:
          return "10px 16px";
      }
    }, P = () => {
      switch (m) {
        case "sm":
          return "13px";
        case "lg":
          return "16px";
        default:
          return O;
      }
    }, D = u ? R : c ? $ : x, G = {
      width: "100%",
      padding: B(),
      paddingLeft: i ? "40px" : B().split(" ")[1],
      paddingRight: v || t === "password" ? "40px" : B().split(" ")[1],
      border: `1px solid ${D}`,
      borderRadius: N,
      backgroundColor: M,
      color: E,
      fontSize: P(),
      outline: "none",
      resize: t === "textarea" && !_ ? "none" : void 0,
      ...j
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: { width: "100%", fontFamily: "sans-serif" },
        className: f,
        children: [
          s && /* @__PURE__ */ e.jsxs(
            "label",
            {
              htmlFor: d,
              style: {
                display: "block",
                marginBottom: "6px",
                fontSize: "14px",
                fontWeight: 500,
                color: S
              },
              children: [
                s,
                " ",
                w && /* @__PURE__ */ e.jsx("span", { style: { color: R }, children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { style: { position: "relative", width: "100%" }, children: [
            i && /* @__PURE__ */ e.jsx(
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
                children: i
              }
            ),
            t === "textarea" ? /* @__PURE__ */ e.jsx(
              "textarea",
              {
                ref: U,
                name: d,
                value: a ?? V,
                onChange: Y,
                placeholder: n,
                rows: T,
                cols: C,
                maxLength: y,
                disabled: g,
                readOnly: p,
                autoFocus: b,
                style: G,
                onFocus: (A) => {
                  A.currentTarget.style.borderColor = k;
                },
                onBlur: (A) => {
                  A.currentTarget.style.borderColor = D;
                },
                onMouseEnter: (A) => {
                  A.currentTarget.style.borderColor = z;
                },
                onMouseLeave: (A) => {
                  A.currentTarget.style.borderColor = D;
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: U,
                id: d,
                name: d,
                type: t === "password" ? h ? "text" : "password" : t,
                value: a ?? V,
                onChange: Y,
                placeholder: n,
                disabled: g,
                readOnly: p,
                autoFocus: b,
                style: G,
                onFocus: (A) => {
                  A.currentTarget.style.borderColor = k;
                },
                onBlur: (A) => {
                  A.currentTarget.style.borderColor = D;
                },
                onMouseEnter: (A) => {
                  A.currentTarget.style.borderColor = z;
                },
                onMouseLeave: (A) => {
                  A.currentTarget.style.borderColor = D;
                }
              }
            ),
            t === "password" && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => L(!h),
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
                children: h ? /* @__PURE__ */ e.jsx(ut, { size: 18 }) : /* @__PURE__ */ e.jsx(ft, { size: 18 })
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
          t === "textarea" && W && y && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                textAlign: "right",
                fontSize: "12px",
                color: "#6b7280",
                marginTop: "4px"
              },
              children: [
                (a ?? V).length,
                "/",
                y
              ]
            }
          ),
          u && /* @__PURE__ */ e.jsx(
            "p",
            {
              style: {
                color: R,
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
), Ot = ({
  title: t,
  titleIcon: n,
  items: s,
  type: a = "unordered",
  bulletColor: l = "#2563eb",
  textColor: o = "#111827",
  backgroundColor: d = "#fff",
  borderColor: g = "#e5e7eb",
  fontSize: p = "15px",
  fontWeight: w = 500,
  borderRadius: u = "12px",
  padding: c = "16px",
  spacing: b = "12px",
  className: i,
  style: v
}) => {
  const x = a === "ordered", k = a === "inline", z = {
    backgroundColor: d,
    borderColor: g,
    color: o,
    borderWidth: g ? "1px" : "0px",
    borderStyle: "solid",
    borderRadius: u,
    padding: c,
    ...v
  }, M = k ? {
    display: "flex",
    gap: b,
    paddingLeft: 0,
    listStyleType: "none",
    margin: 0
  } : {
    listStyleType: x ? "decimal" : "none",
    paddingLeft: x ? "20px" : "0",
    margin: 0
  }, E = x ? "ol" : "ul";
  return /* @__PURE__ */ e.jsxs("div", { className: i, style: z, children: [
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
    /* @__PURE__ */ e.jsx(E, { style: M, children: s.map((R, $) => /* @__PURE__ */ e.jsx(
      Fe,
      {
        ...R,
        bulletColor: l,
        textColor: o,
        fontSize: p,
        fontWeight: w,
        spacing: b,
        isInline: k
      },
      $
    )) })
  ] });
}, Fe = ({
  text: t,
  icon: n,
  onClick: s,
  subItems: a,
  bulletColor: l,
  textColor: o,
  fontSize: d,
  fontWeight: g,
  spacing: p,
  isInline: w
}) => {
  const u = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: w ? "0" : p
  }, c = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: d,
    fontWeight: g,
    color: o,
    cursor: s ? "pointer" : "default"
  }, b = {
    width: "8px",
    height: "8px",
    backgroundColor: l,
    borderRadius: "50%",
    flexShrink: 0
  }, i = {
    listStyleType: "disc",
    paddingLeft: "20px",
    margin: 0
  };
  return /* @__PURE__ */ e.jsxs("li", { style: u, children: [
    /* @__PURE__ */ e.jsxs("div", { style: c, onClick: s, children: [
      n ? /* @__PURE__ */ e.jsx("span", { style: { fontSize: "16px", color: o }, children: n }) : !w && /* @__PURE__ */ e.jsx("span", { style: b }),
      /* @__PURE__ */ e.jsx("span", { children: t })
    ] }),
    a && a.length > 0 && /* @__PURE__ */ e.jsx("ul", { style: i, children: a.map((v, x) => /* @__PURE__ */ e.jsx(
      Fe,
      {
        ...v,
        bulletColor: l,
        textColor: o,
        fontSize: d,
        fontWeight: g,
        spacing: p,
        isInline: !1
      },
      x
    )) })
  ] });
}, Te = ({
  tabs: t,
  defaultActive: n = 0,
  tabPosition: s,
  activeTabClassName: a = "",
  inactiveTabClassName: l = "",
  tabContainerClassName: o = "",
  contentContainerClassName: d = "",
  className: g = "",
  activeTabStyle: p,
  inactiveTabStyle: w,
  tabContainerStyle: u,
  contentContainerStyle: c,
  style: b,
  tabsWidth: i = "240px",
  tabGap: v = 8,
  tabPadding: x = "12px 16px",
  tabBorderRadius: k = 12,
  primaryColor: z = "#2563eb",
  textColor: M = "#374151",
  backgroundColor: E = "#ffffff",
  hoverTextColor: R = "#1e40af",
  responsiveBreakpoint: $ = 768,
  showDrawerLabel: S = "Select Tab"
}) => {
  const [m, N] = I(n), [O, T] = I(null), [C, y] = I(!1), [_, W] = I(!1);
  q(() => {
    const B = () => {
      y(window.innerWidth <= $);
    };
    return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
  }, [$]);
  const f = s === "left" || s === "right", F = {
    display: "flex",
    flexDirection: f ? C ? "column" : s === "left" ? "row" : "row-reverse" : "column",
    width: "100%",
    height: "100%",
    backgroundColor: E,
    ...f && !C ? {} : { flexWrap: "wrap" },
    ...b
  }, U = {
    width: f && !C ? i : "100%",
    display: "flex",
    flexDirection: f && !C ? "column" : "row",
    justifyContent: !f && s === "top" ? "center" : void 0,
    gap: v,
    padding: 8,
    boxSizing: "border-box",
    ...u
  }, V = {
    flexGrow: 1,
    padding: 24,
    background: "#f9fafb",
    boxSizing: "border-box",
    minWidth: 0,
    ...f && !C ? { width: "calc(100% - " + i + ")" } : { width: "100%" },
    ...c
  }, r = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: x,
    borderRadius: k,
    border: "none",
    backgroundColor: "transparent",
    fontWeight: 500,
    transition: "all 0.2s ease",
    width: f && !C ? "100%" : "auto",
    marginBottom: f && !C ? v : 0,
    marginRight: !f || C ? v : 0,
    justifyContent: "flex-start"
  }, h = {
    backgroundColor: z,
    color: "#fff",
    fontWeight: 700,
    boxShadow: `0 2px 10px ${z}55`,
    ...p
  }, L = {
    backgroundColor: "transparent",
    color: M,
    ...w
  }, Y = {
    backgroundColor: `${z}22`,
    color: R
  };
  return /* @__PURE__ */ e.jsxs("div", { className: g, style: F, children: [
    /* @__PURE__ */ e.jsx("style", { children: `
        @media (max-width: ${$}px) {
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
    C && f ? /* @__PURE__ */ e.jsxs("div", { style: { width: "100%", marginBottom: 12 }, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => W(!_),
          style: {
            ...r,
            ...h,
            justifyContent: "space-between",
            width: "100%"
          },
          className: "custom-tab-drawer-button",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: S }),
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: 18 }, children: "☰" })
          ]
        }
      ),
      _ && /* @__PURE__ */ e.jsx("div", { className: "custom-tab-mobile-drawer", children: t.map((B, P) => {
        const D = P === m, G = O === P;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              N(P), W(!1);
            },
            onMouseEnter: () => T(P),
            onMouseLeave: () => T(null),
            className: D ? a : l,
            style: {
              ...r,
              ...D ? h : L,
              ...G && !D ? Y : {}
            },
            children: [
              B.icon && /* @__PURE__ */ e.jsx("span", { children: B.icon }),
              /* @__PURE__ */ e.jsx("span", { children: B.label })
            ]
          },
          P
        );
      }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "nav",
      {
        className: o,
        style: U,
        "aria-label": "Tabs Navigation",
        children: t.map((B, P) => {
          const D = P === m, G = O === P;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => N(P),
              onMouseEnter: () => T(P),
              onMouseLeave: () => T(null),
              className: D ? a : l,
              style: {
                ...r,
                ...D ? h : L,
                ...G && !D ? Y : {}
              },
              children: [
                B.icon && /* @__PURE__ */ e.jsx("span", { children: B.icon }),
                /* @__PURE__ */ e.jsx("span", { children: B.label })
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
        style: V,
        role: "tabpanel",
        children: t[m]?.content
      }
    )
  ] });
}, Dt = (t) => /* @__PURE__ */ e.jsx(Te, { ...t, tabPosition: "left" }), Bt = (t) => /* @__PURE__ */ e.jsx(Te, { ...t, tabPosition: "top" }), Yt = (t) => /* @__PURE__ */ e.jsx(Te, { ...t, tabPosition: "right" }), Ut = ({
  src: t,
  poster: n,
  autoPlay: s = !1,
  loop: a = !1,
  controls: l = !1,
  muted: o = !1,
  // default false
  width: d = "100%",
  height: g = "150px",
  borderRadius: p = "12px",
  backgroundColor: w = "#1e1e1e",
  primaryColor: u = "#ff4081",
  padding: c = "16px",
  className: b
}) => {
  const i = J(null), v = J(null), [x, k] = I(s), [z, M] = I(0), [E, R] = I(0), [$, S] = I(0.5), [m, N] = I(o), [O, T] = I(!1), [C, y] = I(a);
  q(() => {
    i.current && (i.current.volume = $, i.current.loop = C, i.current.muted = m);
  }, [$, C, m]);
  const _ = () => {
    i.current && (x ? i.current.pause() : i.current.play(), k(!x));
  }, W = () => {
    i.current && (M(i.current.currentTime), R(i.current.duration));
  }, f = (r) => {
    if (!i.current || !r.currentTarget) return;
    const h = r.currentTarget.getBoundingClientRect(), Y = (r.clientX - h.left) / h.width * E;
    i.current.currentTime = Y, M(Y);
  }, j = (r) => {
    i.current && (i.current.currentTime += r);
  }, F = () => {
    v.current && (O ? document.exitFullscreen?.() : v.current.requestFullscreen?.(), T(!O));
  }, U = () => {
    N(!m), m && $ === 0 && S(0.5);
  }, V = (r) => {
    const h = Math.floor(r / 60), L = Math.floor(r % 60);
    return `${h}:${L < 10 ? "0" : ""}${L}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: v,
      className: b,
      style: {
        position: "relative",
        width: d,
        backgroundColor: w,
        borderRadius: p,
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
            ref: i,
            src: t,
            poster: n,
            autoPlay: s,
            loop: a,
            controls: l,
            muted: o,
            onTimeUpdate: W,
            onLoadedMetadata: W,
            style: {
              width: "100%",
              height: g,
              borderRadius: p,
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
                  onClick: _,
                  style: {
                    background: u,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": x ? "Pause" : "Play",
                  children: x ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: V(z) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  " ",
                  "/ ",
                  V(E)
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
                        width: `${z / E * 100 || 0}%`,
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
                    onClick: () => y(!C),
                    "aria-label": "Toggle Loop",
                    children: /* @__PURE__ */ e.jsx(xe, { size: 18, color: C ? u : void 0 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: U, "aria-label": "Toggle Mute", children: m ? /* @__PURE__ */ e.jsx(me, { size: 18 }) : /* @__PURE__ */ e.jsx(be, { size: 18 }) }),
                /* @__PURE__ */ e.jsx("button", { onClick: F, "aria-label": "Toggle Fullscreen", children: O ? /* @__PURE__ */ e.jsx(fe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
              ] })
            ]
          }
        )
      ]
    }
  );
}, Vt = ({
  src: t,
  thumbnail: n,
  autoPlay: s = !1,
  loop: a = !1,
  backgroundColor: l = "#000000",
  primaryColor: o = "#10b981",
  secondaryColor: d = "#ffffff",
  borderRadius: g = "12px",
  padding: p = "16px",
  width: w = "100%",
  className: u
}) => {
  const c = J(null), b = J(null), [i, v] = I(s), [x, k] = I(0), [z, M] = I(0), [E, R] = I(0.5), [$, S] = I(!1), [m, N] = I(a);
  q(() => {
    c.current && (c.current.volume = E);
  }, [E]), q(() => {
    c.current && (c.current.loop = m);
  }, [m]);
  const O = () => {
    c.current && (i ? c.current.pause() : c.current.play(), v(!i));
  }, T = () => {
    c.current && (k(c.current.currentTime), M(c.current.duration));
  }, C = (f) => {
    if (!c.current || !f.currentTarget) return;
    const j = f.currentTarget.getBoundingClientRect(), U = (f.clientX - j.left) / j.width * z;
    c.current.currentTime = U, k(U);
  }, y = (f) => {
    c.current && (c.current.currentTime += f);
  }, _ = () => {
    b.current && ($ ? document.exitFullscreen?.() : b.current.requestFullscreen?.(), S(!$));
  }, W = (f) => {
    const j = Math.floor(f / 60), F = Math.floor(f % 60);
    return `${j}:${F < 10 ? "0" : ""}${F}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: b,
      className: u,
      style: {
        position: "relative",
        width: w,
        backgroundColor: l,
        borderRadius: g,
        color: d,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        overflow: "hidden",
        padding: p,
        boxSizing: "border-box",
        maxWidth: "100%"
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "audio",
          {
            ref: c,
            src: t,
            autoPlay: s,
            loop: a,
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
              borderRadius: g,
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
                  onClick: O,
                  style: {
                    background: o,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": i ? "Pause" : "Play",
                  children: i ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", marginRight: "4px" }, children: W(x) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  "/ ",
                  W(z)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: C,
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
                        width: `${x / z * 100 || 0}%`,
                        height: "100%",
                        background: o,
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
                        onClick: () => N(!m),
                        "aria-label": "Toggle Loop",
                        children: /* @__PURE__ */ e.jsx(xe, { size: 18, color: m ? o : void 0 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => R(E > 0 ? 0 : 0.5),
                        "aria-label": "Toggle Mute",
                        children: E > 0 ? /* @__PURE__ */ e.jsx(be, { size: 18 }) : /* @__PURE__ */ e.jsx(me, { size: 18 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("button", { onClick: _, "aria-label": "Toggle Fullscreen", children: $ ? /* @__PURE__ */ e.jsx(fe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
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
function H(t, n, s) {
  return t == null ? s : typeof t != "object" ? t : t[n] ?? s;
}
const Pe = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Ht = ({
  display: t = { sm: "block", md: "flex", lg: "grid" },
  flexDirection: n = { sm: "column", md: "row", lg: "row" },
  justifyContent: s = { sm: "flex-start", md: "center", lg: "space-between" },
  alignItems: a = { sm: "stretch", md: "center", lg: "center" },
  gridTemplateColumns: l = { sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
  gridTemplateRows: o = { sm: "auto", md: "auto", lg: "auto" },
  gap: d = { sm: "10px", md: "20px", lg: "30px" },
  rowGap: g,
  columnGap: p,
  width: w = { sm: "100%", md: "90%", lg: "80%" },
  maxWidth: u = { sm: "100%", md: "800px", lg: "1200px" },
  height: c = { sm: "auto", md: "auto", lg: "auto" },
  padding: b = { sm: "10px", md: "20px", lg: "40px" },
  margin: i = { sm: "0 auto", md: "0 auto", lg: "0 auto" },
  textAlign: v = { sm: "left", md: "center", lg: "center" },
  backgroundColor: x = "#fff",
  border: k = { sm: "none", md: "1px solid #ddd", lg: "2px solid #ccc" },
  borderRadius: z = { sm: "0", md: "8px", lg: "12px" },
  boxShadow: M = {
    sm: "none",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 6px 10px rgba(0,0,0,0.15)"
  },
  overflow: E = { sm: "visible", md: "hidden", lg: "auto" },
  children: R,
  className: $,
  style: S
}) => {
  const [m, N] = I(
    () => Pe(window.innerWidth)
  );
  q(() => {
    const T = () => N(Pe(window.innerWidth));
    return window.addEventListener("resize", T), () => window.removeEventListener("resize", T);
  }, []);
  const O = ee(() => {
    const T = H(t, m, "block"), C = H(
      n,
      m,
      void 0
    ), y = H(
      s,
      m,
      void 0
    ), _ = H(
      a,
      m,
      void 0
    ), W = H(
      l,
      m,
      void 0
    ), f = H(
      o,
      m,
      void 0
    ), j = H(d, m, void 0), F = H(g, m, void 0), U = H(
      p,
      m,
      void 0
    ), V = H(w, m, "100%"), r = H(u, m, void 0), h = H(c, m, void 0), L = H(b, m, void 0), Y = H(i, m, void 0), B = H(
      v,
      m,
      void 0
    ), P = H(k, m, void 0), D = H(
      z,
      m,
      void 0
    ), G = H(
      M,
      m,
      void 0
    ), A = H(E, m, void 0);
    return {
      display: T,
      ...C && { flexDirection: C },
      ...y && { justifyContent: y },
      ..._ && { alignItems: _ },
      ...W && {
        gridTemplateColumns: W
      },
      ...f && {
        gridTemplateRows: f
      },
      ...j && { gap: j },
      ...F && { rowGap: F },
      ...U && { columnGap: U },
      width: V,
      ...r && { maxWidth: r },
      ...h && { height: h },
      ...L && { padding: L },
      ...Y && { margin: Y },
      ...B && { textAlign: B },
      backgroundColor: x,
      ...P && { border: P },
      ...D && { borderRadius: D },
      ...G && { boxShadow: G },
      ...A && { overflow: A },
      boxSizing: "border-box",
      ...S
    };
  }, [
    m,
    t,
    n,
    s,
    a,
    l,
    o,
    d,
    g,
    p,
    w,
    u,
    c,
    b,
    i,
    v,
    x,
    k,
    z,
    M,
    E,
    S
  ]);
  return /* @__PURE__ */ e.jsx("div", { className: $, style: O, children: R });
}, Xt = ({
  items: t,
  allowMultiple: n = !1,
  defaultOpenIndex: s = [],
  borderColor: a = "#d1d5db",
  backgroundColor: l = "#ffffff",
  textColor: o = "#111827",
  hoverBgColor: d = "#f3f4f6",
  hoverTextColor: g = "#111827",
  paddingVertical: p = "16px",
  paddingHorizontal: w = "16px",
  margin: u = "12px 0",
  iconOpen: c = "−",
  iconClose: b = "+",
  transitionDuration: i = "300ms",
  borderRadius: v = "8px",
  shadow: x = "0 2px 8px rgba(0, 0, 0, 0.05)",
  contentPadding: k = "16px",
  fontSize: z = "16px",
  fontWeight: M = "600",
  iconSize: E = "18px",
  contentFontSize: R = "14px",
  contentFontWeight: $ = "400",
  contentBackgroundColor: S = "#ffffff",
  contentTextColor: m = "#111827",
  className: N,
  style: O
}) => {
  const [T, C] = I(s), y = J([]), _ = J([]);
  q(() => {
    y.current.forEach((f, j) => {
      f && (f.style.maxHeight = T.includes(j) ? `${f.scrollHeight}px` : "0px");
    });
  }, [T]);
  const W = (f) => {
    C(
      (j) => n ? j.includes(f) ? j.filter((F) => F !== f) : [...j, f] : j.includes(f) ? [] : [f]
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: N, style: { width: "100%", ...O }, children: t.map((f, j) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        border: `1px solid ${a}`,
        borderRadius: v,
        margin: u,
        boxShadow: x,
        overflow: "hidden",
        transition: `all ${i} ease`
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: (F) => {
              _.current[j] = F;
            },
            onClick: () => W(j),
            style: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: l,
              color: o,
              padding: `${p} ${w}`,
              fontWeight: M,
              fontSize: z,
              cursor: "pointer",
              outline: "none",
              border: "none",
              transition: `all ${i}`
            },
            onMouseEnter: (F) => {
              F.currentTarget.style.backgroundColor = d, F.currentTarget.style.color = g;
            },
            onMouseLeave: (F) => {
              F.currentTarget.style.backgroundColor = l, F.currentTarget.style.color = o;
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: f.title }),
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: E }, children: T.includes(j) ? c : b })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: (F) => {
              y.current[j] = F;
            },
            style: {
              overflow: "hidden",
              maxHeight: T.includes(j) ? `${y.current[j]?.scrollHeight}px` : "0px",
              transition: `max-height ${i} ease-in-out`
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                style: {
                  borderTop: `1px solid ${a}`,
                  backgroundColor: S,
                  color: m,
                  padding: k,
                  fontSize: R,
                  fontWeight: $
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
}, qt = ({
  type: t,
  name: n,
  options: s,
  selectedValues: a,
  onChange: l,
  disabled: o = !1,
  readOnly: d = !1,
  required: g = !1,
  error: p,
  className: w = "",
  customIcon: u,
  style: c,
  labelStyle: b,
  iconSize: i = 20,
  iconCheckedBgColor: v = "#2563eb",
  // blue-600
  iconUncheckedBorderColor: x = "#9ca3af",
  // gray-400
  textColor: k = "#374151",
  // gray-700
  errorStyle: z
}) => {
  const M = t === "checkbox", E = (R) => {
    if (l)
      if (M) {
        const $ = Array.isArray(a) ? a.includes(R) ? a.filter((S) => S !== R) : [...a, R] : [R];
        l($);
      } else
        l(R);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: w,
      style: { display: "flex", flexDirection: "column", gap: 8, ...c },
      role: t,
      "aria-disabled": o,
      children: [
        s.map((R) => {
          const $ = M ? Array.isArray(a) && a.includes(R.value) : a === R.value;
          return /* @__PURE__ */ e.jsxs(
            "label",
            {
              style: {
                display: "flex",
                alignItems: "center",
                cursor: o ? "not-allowed" : "pointer",
                opacity: o ? 0.6 : 1,
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
                    value: R.value,
                    checked: $,
                    disabled: o || d,
                    required: g,
                    onChange: () => E(R.value),
                    style: { display: "none" }
                  }
                ),
                u ? u($) : /* @__PURE__ */ e.jsxs(
                  "span",
                  {
                    style: {
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: i,
                      height: i,
                      borderRadius: M ? 4 : "50%",
                      border: `2px solid ${$ ? v : x}`,
                      backgroundColor: $ ? v : "transparent",
                      transition: "all 0.2s ease",
                      flexShrink: 0
                    },
                    children: [
                      $ && !M && /* @__PURE__ */ e.jsx(
                        "span",
                        {
                          style: {
                            width: i / 2,
                            height: i / 2,
                            borderRadius: "50%",
                            backgroundColor: "white"
                          }
                        }
                      ),
                      $ && M && /* @__PURE__ */ e.jsx(
                        "svg",
                        {
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "white",
                          strokeWidth: 3,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          style: { width: i * 0.6, height: i * 0.6 },
                          children: /* @__PURE__ */ e.jsx("polyline", { points: "20 6 9 17 4 12" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { style: { color: k, fontSize: 14 }, children: R.label })
              ]
            },
            R.value
          );
        }),
        p && /* @__PURE__ */ e.jsx(
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
            children: p
          }
        )
      ]
    }
  );
}, Gt = ({
  label: t = "Open Drawer",
  icon: n,
  iconPosition: s = "left",
  onClick: a,
  style: l = {}
}) => /* @__PURE__ */ e.jsxs(
  "button",
  {
    onClick: a,
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
      n && s === "left" && n,
      t,
      n && s === "right" && n
    ]
  }
), Jt = ({
  open: t,
  onClose: n,
  position: s = "right",
  width: a = "300px",
  height: l = "300px",
  backgroundColor: o = "#fff",
  transitionDuration: d = 300,
  style: g = {},
  children: p,
  showCloseButton: w = !0,
  closeButtonStyle: u = {}
}) => {
  const [c, b] = I(t);
  q(() => {
    t ? b(!0) : setTimeout(() => b(!1), d);
  }, [t, d]);
  const i = ee(() => {
    if (t) return "translate(0, 0)";
    switch (s) {
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
  }, [t, s]), v = {
    position: "fixed",
    zIndex: 1e3,
    backgroundColor: o,
    transition: `transform ${d}ms ease, opacity ${d}ms ease`,
    transform: i,
    opacity: t ? 1 : 0,
    ...g,
    ...s === "left" || s === "right" ? { top: 0, [s]: 0, width: a, height: "100%" } : { left: 0, [s]: 0, height: l, width: "100%" }
  }, x = {
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
  }, k = {
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
    /* @__PURE__ */ e.jsx("div", { style: x, onClick: n }),
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
          w && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: n,
              style: { ...k, ...u },
              children: /* @__PURE__ */ e.jsx(ie, { size: 20, color: "rgba(255, 0, 0, 1)" })
            }
          ),
          p
        ]
      }
    )
  ] });
}, Zt = ({
  options: t,
  value: n,
  defaultValue: s,
  onChange: a,
  placeholder: l = "Select an option",
  disabled: o = !1,
  borderColor: d = "#ccc",
  backgroundColor: g = "#fff",
  textColor: p = "#333",
  hoverColor: w = "#f0f0f0",
  padding: u = "12px 16px",
  margin: c = "0 0 1rem 0",
  dropdownWidth: b = "100%",
  dropdownHeight: i = "200px",
  borderRadius: v = "8px",
  boxShadow: x = "0 4px 8px rgba(0,0,0,0.1)",
  optionPadding: k = "10px 12px",
  optionGap: z = "8px",
  transitionDuration: M = "0.25s",
  optionHoverStyle: E,
  className: R = "",
  dropdownStyle: $,
  dropdownClassName: S = "",
  optionStyle: m,
  optionClassName: N = "",
  iconPrefix: O,
  iconSuffix: T
}) => {
  const [C, y] = I(s), [_, W] = I(!1), [f, j] = I(null), F = J(null);
  q(() => {
    const h = (L) => {
      F.current && !F.current.contains(L.target) && W(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []);
  const U = (h) => {
    y(h), W(!1), a && a(h);
  }, V = n ?? C, r = t.find((h) => h.value === V);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: F,
      className: R,
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
            onClick: () => W((h) => !h),
            disabled: o,
            "aria-haspopup": "listbox",
            "aria-expanded": _,
            style: {
              width: "100%",
              padding: u,
              backgroundColor: g,
              color: p,
              border: `1px solid ${d}`,
              borderRadius: v,
              boxShadow: o ? "none" : x,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: o ? "not-allowed" : "pointer",
              opacity: o ? 0.6 : 1,
              transition: `all ${M} ease-in-out`
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: z }, children: [
                O && /* @__PURE__ */ e.jsx("span", { children: O }),
                /* @__PURE__ */ e.jsx("span", { children: r?.label || l })
              ] }),
              T || /* @__PURE__ */ e.jsx("span", { style: { marginLeft: "8px" }, children: "▼" })
            ]
          }
        ),
        _ && /* @__PURE__ */ e.jsx(
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
              maxHeight: i,
              overflowY: "auto",
              backgroundColor: g,
              border: `1px solid ${d}`,
              borderRadius: v,
              boxShadow: x,
              marginTop: "4px",
              transition: `all ${M} ease`,
              ...$
            },
            children: t.map((h, L) => {
              const Y = C === h.value, B = f === L, P = B ? E?.backgroundColor || w : Y ? w : g, D = {
                display: "flex",
                alignItems: "center",
                gap: z,
                padding: k,
                cursor: "pointer",
                backgroundColor: P,
                transition: `background ${M}`,
                ...m,
                ...B && E
              };
              return /* @__PURE__ */ e.jsxs(
                "li",
                {
                  onClick: () => U(h.value),
                  role: "option",
                  className: N,
                  style: D,
                  onMouseEnter: () => j(L),
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
}, Kt = ({
  columns: t,
  data: n,
  className: s = "",
  pagination: a = !0,
  rowsPerPage: l = 5,
  colors: o = {
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
  tableBorderRadius: g = "8px",
  sortable: p = !0,
  bodyAlign: w = "left",
  headerAlign: u = "left"
}) => {
  const [c, b] = I(null), [i, v] = I("asc"), [x, k] = I(1), [z, M] = I(null), E = (T, C) => {
    !p || !C || (c === T ? v(i === "asc" ? "desc" : "asc") : (b(T), v("asc")), k(1));
  }, R = je.useMemo(() => c ? [...n].sort((T, C) => {
    const y = T[c], _ = C[c];
    if (y == null && _ == null) return 0;
    if (y == null) return i === "asc" ? -1 : 1;
    if (_ == null) return i === "asc" ? 1 : -1;
    if (typeof y == "number" && typeof _ == "number")
      return i === "asc" ? y - _ : _ - y;
    if (y instanceof Date && _ instanceof Date)
      return i === "asc" ? y.getTime() - _.getTime() : _.getTime() - y.getTime();
    const W = String(y).toLowerCase(), f = String(_).toLowerCase();
    return W === f ? 0 : i === "asc" ? W > f ? 1 : -1 : W < f ? 1 : -1;
  }) : [...n], [n, c, i]), $ = a ? R.slice(
    (x - 1) * l,
    x * l
  ) : R, S = Math.ceil(n.length / l), m = /* @__PURE__ */ e.jsx(
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
  ), N = /* @__PURE__ */ e.jsx(
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
  ), O = /* @__PURE__ */ e.jsx(
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
  return /* @__PURE__ */ e.jsxs("div", { style: { overflowX: "auto", width: "100%" }, className: s, children: [
    /* @__PURE__ */ e.jsxs(
      "table",
      {
        style: {
          width: "100%",
          borderCollapse: "collapse",
          border: `1px solid ${o.borderColor}`,
          tableLayout: "auto",
          minWidth: "400px",
          borderRadius: g,
          // Important: for border-radius to show on table, set borderSpacing and borderCollapse accordingly
          borderSpacing: 0,
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { children: t.map(({ key: T, label: C, sortable: y, icon: _ }, W) => /* @__PURE__ */ e.jsx(
            "th",
            {
              onClick: () => E(T, y),
              style: {
                padding: "12px",
                fontSize: "14px",
                border: `1px solid ${o.borderColor}`,
                cursor: p && y ? "pointer" : "default",
                backgroundColor: o.headerBg,
                color: o.headerText,
                userSelect: "none",
                borderTopLeftRadius: W === 0 ? d : void 0,
                borderTopRightRadius: W === t.length - 1 ? d : void 0,
                textAlign: u,
                whiteSpace: "nowrap"
              },
              "aria-sort": c === T ? i === "asc" ? "ascending" : "descending" : void 0,
              role: p && y ? "button" : void 0,
              tabIndex: p && y ? 0 : void 0,
              onKeyDown: (f) => {
                p && y && (f.key === "Enter" || f.key === " ") && (f.preventDefault(), E(T, y));
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
                    _ && /* @__PURE__ */ e.jsx("span", { children: _ }),
                    /* @__PURE__ */ e.jsx("span", { children: C }),
                    p && y && (c === T ? i === "asc" ? m : N : O)
                  ]
                }
              )
            },
            T
          )) }) }),
          /* @__PURE__ */ e.jsx("tbody", { children: $.map((T, C) => /* @__PURE__ */ e.jsx(
            "tr",
            {
              style: {
                backgroundColor: z === C ? o.hoverBg : o.rowBg,
                color: o.rowText,
                transition: "background-color 0.2s ease-in-out"
              },
              onMouseEnter: () => M(C),
              onMouseLeave: () => M(null),
              children: t.map(({ key: y }) => /* @__PURE__ */ e.jsx(
                "td",
                {
                  style: {
                    padding: "12px",
                    border: `1px solid ${o.borderColor}`,
                    whiteSpace: "nowrap",
                    textAlign: w
                  },
                  children: T[y]
                },
                y
              ))
            },
            C
          )) })
        ]
      }
    ),
    a && S > 1 && /* @__PURE__ */ e.jsxs(
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
                backgroundColor: o.paginationBg,
                color: o.paginationText,
                borderRadius: "6px",
                border: "none",
                opacity: x === 1 ? 0.5 : 1,
                cursor: x === 1 ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
              },
              disabled: x === 1,
              onClick: () => k((T) => Math.max(T - 1, 1)),
              "aria-label": "Previous page",
              type: "button",
              children: [
                /* @__PURE__ */ e.jsx(ke, { size: 16 }),
                "Prev"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("span", { style: { color: o.paginationText }, children: [
            "Page ",
            x,
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
                backgroundColor: o.paginationBg,
                color: o.paginationText,
                borderRadius: "6px",
                border: "none",
                opacity: x === S ? 0.5 : 1,
                cursor: x === S ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
              },
              disabled: x === S,
              onClick: () => k((T) => Math.min(T + 1, S)),
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
}, Qt = ({
  children: t,
  className: n = "",
  style: s = {},
  background: a = "#fff",
  backgroundImage: l,
  backgroundSize: o = "cover",
  backgroundPosition: d = "center",
  backgroundRepeat: g = "no-repeat",
  textColor: p = "#000",
  borderRadius: w = 12,
  padding: u = 24,
  margin: c = 0,
  maxWidth: b = "100%",
  boxShadow: i = "0 4px 12px rgba(0,0,0,0.1)",
  border: v = "none",
  display: x = "flex",
  flexDirection: k = "column",
  justifyContent: z = "flex-start",
  alignItems: M = "stretch",
  gap: E = 16
}) => {
  const R = {
    background: a,
    color: p,
    borderRadius: w,
    padding: u,
    margin: c,
    maxWidth: b,
    boxShadow: i,
    border: v,
    display: x,
    flexDirection: k,
    justifyContent: z,
    alignItems: M,
    gap: E,
    boxSizing: "border-box",
    // Background image styles if provided
    ...l ? {
      backgroundImage: `url(${l})`,
      backgroundSize: o,
      backgroundPosition: d,
      backgroundRepeat: g
    } : {},
    ...s
  };
  return /* @__PURE__ */ e.jsx("div", { className: n, style: R, children: t });
}, Ae = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", er = ({
  columns: t = { sm: 1, md: 2, lg: 3 },
  gap: n = "16px",
  padding: s = "20px",
  alignItems: a = "stretch",
  justifyItems: l = "stretch",
  backgroundColor: o = "transparent",
  width: d = "100%",
  maxWidth: g = "100%",
  height: p = "auto",
  children: w,
  style: u
}) => {
  const [c, b] = I(
    Ae(window.innerWidth)
  );
  q(() => {
    const x = () => b(Ae(window.innerWidth));
    return window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
  }, []);
  const i = ee(() => typeof t == "number" ? t : t[c] ?? 1, [t, c]), v = ee(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${i}, 1fr)`,
      gap: n,
      padding: s,
      alignItems: a,
      justifyItems: l,
      backgroundColor: o,
      width: d,
      maxWidth: g,
      height: p,
      boxSizing: "border-box",
      ...u
    }),
    [
      i,
      n,
      s,
      a,
      l,
      o,
      d,
      g,
      p,
      u
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: v, children: w });
}, Ne = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", tr = ({
  direction: t = "row",
  align: n = "center",
  justify: s = "space-between",
  gap: a = 16,
  padding: l = 20,
  backgroundColor: o = "transparent",
  width: d = "100%",
  maxWidth: g = "100%",
  height: p = "auto",
  style: w,
  children: u
}) => {
  const [c, b] = I(
    Ne(window.innerWidth)
  );
  q(() => {
    const x = () => b(Ne(window.innerWidth));
    return window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
  }, []);
  const i = ee(() => typeof t == "string" ? t : t[c] ?? "row", [t, c]), v = ee(
    () => ({
      display: "flex",
      flexDirection: i,
      alignItems: n,
      justifyContent: s,
      gap: typeof a == "number" ? `${a}px` : a,
      padding: typeof l == "number" ? `${l}px` : l,
      backgroundColor: o,
      width: d,
      maxWidth: g,
      height: p,
      boxSizing: "border-box",
      ...w
    }),
    [
      i,
      n,
      s,
      a,
      l,
      o,
      d,
      g,
      p,
      w
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: v, children: u });
}, It = {
  success: {
    bg: "#ecfdf5",
    border: "#34d399",
    iconColor: "#059669",
    Icon: /* @__PURE__ */ e.jsx(ct, { size: 20 })
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
    Icon: /* @__PURE__ */ e.jsx(St, { size: 20 })
  },
  info: {
    bg: "#eff6ff",
    border: "#3b82f6",
    iconColor: "#2563eb",
    Icon: /* @__PURE__ */ e.jsx(ht, { size: 20 })
  }
}, Et = (t) => {
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
}, rr = ({
  title: t = "",
  description: n = "",
  type: s = "info",
  dismissible: a = !0,
  onClose: l,
  duration: o,
  icon: d,
  actionButton: g,
  position: p = "top-right",
  className: w,
  style: u
}) => {
  const [c, b] = I(!0);
  if (q(() => {
    if (o) {
      const M = setTimeout(() => {
        b(!1), l?.();
      }, o);
      return () => clearTimeout(M);
    }
  }, [o, l]), !c) return null;
  const { bg: i, border: v, iconColor: x, Icon: k } = It[s], z = Et(p);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: w,
      style: {
        ...z,
        display: "flex",
        gap: "12px",
        padding: "16px",
        backgroundColor: i,
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
        /* @__PURE__ */ e.jsx("div", { style: { color: x, marginTop: "3px" }, children: d || k }),
        /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
          t && /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", marginBottom: "4px" }, children: t }),
          n && /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", color: "#374151" }, children: n }),
          g && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "10px" }, children: g })
        ] }),
        a && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              b(!1), l?.();
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
}, nr = ({
  text: t,
  color: n = "#2563eb",
  textColor: s = "#fff",
  borderColor: a = "#2563eb",
  icon: l,
  iconPosition: o = "left",
  rounded: d = !1,
  borderRadius: g,
  borderWidth: p = "0",
  fontSize: w = "14px",
  fontWeight: u = 500,
  horizontalPadding: c = "10px",
  verticalPadding: b = "6px",
  margin: i = "0",
  shadow: v = "0 1px 4px rgba(0, 0, 0, 0.1)",
  notificationDot: x = !1,
  dotColor: k = "#ef4444",
  count: z,
  pulse: M = !1,
  style: E,
  onClick: R
}) => {
  const $ = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: n,
    border: `${p} solid ${a}`,
    borderRadius: g || (d ? "9999px" : "6px"),
    padding: `${b} ${c}`,
    fontSize: w,
    fontWeight: u,
    margin: i,
    boxShadow: v,
    position: "relative",
    cursor: R ? "pointer" : "default",
    ...E
  }, S = {
    color: s,
    display: "inline"
  }, m = {
    display: "flex",
    alignItems: "center",
    color: s
  }, N = {
    ...m,
    marginRight: t ? "6px" : "0px"
  }, O = {
    ...m,
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
  }, C = {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    height: "8px",
    width: "8px",
    backgroundColor: k,
    borderRadius: "50%",
    zIndex: 1,
    animation: M ? "pulseAnim 1.2s infinite" : void 0
  };
  return /* @__PURE__ */ e.jsxs("span", { style: $, onClick: R, children: [
    x && /* @__PURE__ */ e.jsx("span", { style: C }),
    typeof z < "u" && /* @__PURE__ */ e.jsx("span", { style: T, children: z }),
    l && o === "left" && /* @__PURE__ */ e.jsx("span", { style: N, children: l }),
    t && /* @__PURE__ */ e.jsx("span", { style: S, children: t }),
    l && o === "right" && /* @__PURE__ */ e.jsx("span", { style: O, children: l }),
    /* @__PURE__ */ e.jsx("style", { children: `
          @keyframes pulseAnim {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
        ` })
  ] });
}, sr = ({
  isOpen: t,
  onClose: n,
  children: s,
  overlayStyle: a,
  modalStyle: l,
  closeButtonStyle: o
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
      ...a
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
                ...o
              },
              onMouseEnter: (d) => d.currentTarget.style.color = "#000",
              onMouseLeave: (d) => d.currentTarget.style.color = "#444",
              children: /* @__PURE__ */ e.jsx(ie, { size: 24 })
            }
          ),
          s
        ]
      }
    )
  }
) : null, Oe = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
  "2xl": 64
}, $t = {
  xs: 6,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 14,
  "2xl": 16
}, De = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  "2xl": 20
}, Be = (t) => {
  switch (t) {
    case "square":
      return "0px";
    case "rounded":
      return "8px";
    case "circular":
    default:
      return "50%";
  }
}, _t = (t, n) => {
  switch (t) {
    case "top-left":
      return { top: 1, left: 1 };
    case "top-right":
      return { top: 1, right: 1 };
    case "bottom-left":
      return { bottom: 1, left: 1 };
    case "bottom-right":
    default:
      return { bottom: 1, right: 1 };
  }
}, Lt = (t, n) => {
  switch (t) {
    case "tight":
      return -(n * 0.5);
    case "loose":
      return -(n * 0.15);
    case "normal":
    default:
      return -(n * 0.35);
  }
}, Pt = ({
  src: t,
  alt: n = "User Avatar",
  size: s = "md",
  variant: a = "circular",
  isOnline: l = !1,
  isOffline: o = !1,
  className: d = "",
  style: g,
  statusClassName: p = "",
  statusStyle: w,
  statusPosition: u = "bottom-right",
  fallback: c,
  ring: b = !1,
  ringColor: i = "#3b82f6",
  onClick: v
}) => {
  const [x, k] = I(!1), [z, M] = I(!1), E = Oe[s], R = $t[s], $ = De[s], S = Be(a), m = c || n.split(" ").map((_) => _[0]).join("").toUpperCase().slice(0, 2);
  let N = "", O = "";
  l ? (N = "#10b981", O = "Online") : o && (N = "#6b7280", O = "Offline");
  const T = l || o, C = t && !x, y = !!v;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        position: "relative",
        width: E,
        height: E,
        borderRadius: S,
        overflow: "visible",
        // Changed from "hidden" to show status dots outside
        display: "inline-block",
        flexShrink: 0,
        cursor: y ? "pointer" : "default",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: z && y ? "scale(1.05)" : "scale(1)",
        boxShadow: b ? `0 0 0 3px ${i}20, 0 0 0 1px ${i}` : z && y ? "0 8px 25px -8px rgba(0, 0, 0, 0.3)" : "0 1px 3px rgba(0, 0, 0, 0.1)",
        ...g
      },
      className: d,
      "aria-label": n,
      role: y ? "button" : "img",
      tabIndex: y ? 0 : -1,
      onClick: v,
      onMouseEnter: () => M(!0),
      onMouseLeave: () => M(!1),
      onKeyDown: (_) => {
        y && (_.key === "Enter" || _.key === " ") && (_.preventDefault(), v?.());
      },
      children: [
        C ? /* @__PURE__ */ e.jsx("div", { style: { borderRadius: S, overflow: "hidden", width: "100%", height: "100%" }, children: /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t,
            alt: n,
            width: E,
            height: E,
            loading: "lazy",
            onError: () => k(!0),
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              transition: "opacity 0.2s ease-in-out"
            }
          }
        ) }) : /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: $,
              fontWeight: "600",
              borderRadius: S,
              position: "relative"
            },
            children: m ? /* @__PURE__ */ e.jsx("span", { style: { userSelect: "none" }, children: m }) : /* @__PURE__ */ e.jsx(Ct, { size: E * 0.5, strokeWidth: 1.5 })
          }
        ),
        T && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: p,
            style: {
              position: "absolute",
              width: R,
              height: R,
              borderRadius: "50%",
              backgroundColor: N,
              border: "2px solid white",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12)",
              ..._t(u),
              ...w
            },
            "aria-label": O,
            title: O
          }
        )
      ]
    }
  );
}, or = ({
  avatars: t,
  max: n = 4,
  size: s = "md",
  className: a = "",
  style: l,
  spacing: o = "normal",
  direction: d = "left"
}) => {
  const g = Oe[s], p = De[s], w = t.slice(0, n), u = t.length - n, c = Lt(o, g);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        flexDirection: d === "right" ? "row-reverse" : "row",
        ...l
      },
      className: a,
      "aria-label": `Avatar group with ${t.length} members`,
      role: "group",
      children: [
        w.map((b, i) => {
          const v = d === "left" ? i === 0 : i === w.length - 1, x = d === "left" ? w.length - i : i + 1;
          return /* @__PURE__ */ e.jsx(
            "div",
            {
              style: {
                marginLeft: d === "left" && !v ? c : 0,
                marginRight: d === "right" && !v ? c : 0,
                position: "relative",
                zIndex: x,
                transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
              },
              className: "group-hover:translate-x-1",
              onMouseEnter: (k) => {
                const z = k.currentTarget;
                z.style.transform = `translateY(-2px) ${d === "right" ? "translateX(4px)" : "translateX(-4px)"}`, z.style.zIndex = "100";
              },
              onMouseLeave: (k) => {
                const z = k.currentTarget;
                z.style.transform = "translateY(0) translateX(0)", z.style.zIndex = x.toString();
              },
              children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: {
                    border: "3px solid white",
                    borderRadius: Be(b.variant || "circular"),
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)"
                  },
                  children: /* @__PURE__ */ e.jsx(
                    Pt,
                    {
                      ...b,
                      size: s,
                      style: {
                        boxShadow: "none"
                      }
                    }
                  )
                }
              )
            },
            i
          );
        }),
        u > 0 && /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              marginLeft: d === "left" ? c : 0,
              marginRight: d === "right" ? c : 0,
              width: g,
              height: g,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
              color: "#374151",
              fontSize: p * 0.9,
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "3px solid white",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              userSelect: "none",
              cursor: "default",
              flexShrink: 0,
              position: "relative",
              zIndex: 0,
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
            },
            "aria-label": `${u} more members`,
            title: `${u} more members`,
            onMouseEnter: (b) => {
              const i = b.currentTarget;
              i.style.transform = "translateY(-2px) scale(1.05)", i.style.background = "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)";
            },
            onMouseLeave: (b) => {
              const i = b.currentTarget;
              i.style.transform = "translateY(0) scale(1)", i.style.background = "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)";
            },
            children: [
              "+",
              u
            ]
          }
        )
      ]
    }
  );
}, ir = ({
  tracks: t,
  className: n = "",
  primaryColor: s = "#3b82f6",
  // default blue
  backgroundColor: a = "#fff",
  textColor: l = "#222",
  secondaryColor: o = "#e5e7eb",
  autoplay: d = !1,
  loop: g = !1
}) => {
  const [p, w] = I(null), u = J(null), c = J(null), [b, i] = I(!1), [v, x] = I(0), [k, z] = I(0), [M, E] = I(0.5), [R, $] = I(!1), [S, m] = I(g);
  q(() => {
    u.current && (u.current.volume = M);
  }, [M]), q(() => {
    u.current && (u.current.loop = S);
  }, [S]), q(() => {
    p === null && u.current && (u.current.pause(), i(!1), x(0), z(0));
  }, [p]);
  const N = (f) => {
    if (p === f) {
      if (!u.current) return;
      u.current.paused ? (u.current.play(), i(!0)) : (u.current.pause(), i(!1));
    } else
      w(f), setTimeout(() => {
        u.current?.play(), i(!0);
      }, 100);
  }, O = () => {
    u.current && (x(u.current.currentTime), z(u.current.duration));
  }, T = (f) => {
    if (!u.current) return;
    const j = f.currentTarget.getBoundingClientRect(), V = (f.clientX - j.left) / j.width * k;
    u.current.currentTime = V, x(V);
  }, C = (f) => {
    if (u.current) {
      let j = u.current.currentTime + f;
      j = Math.min(Math.max(j, 0), k), u.current.currentTime = j, x(j);
    }
  }, y = () => {
    c.current && (R ? document.exitFullscreen?.() : c.current.requestFullscreen?.(), $(!R));
  }, _ = () => {
    E((f) => f > 0 ? 0 : 0.5);
  }, W = (f) => {
    if (isNaN(f)) return "0:00";
    const j = Math.floor(f / 60), F = Math.floor(f % 60);
    return `${j}:${F < 10 ? "0" : ""}${F}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "section",
    {
      className: n,
      style: {
        maxWidth: "480px",
        margin: "auto",
        backgroundColor: a,
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
            children: t.map(({ src: f, title: j, thumbnail: F }, U) => {
              const V = p === U && b;
              return /* @__PURE__ */ e.jsxs(
                "li",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px",
                    borderRadius: "10px",
                    backgroundColor: V ? s : o,
                    color: V ? "#fff" : l,
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                  },
                  onClick: () => N(U),
                  tabIndex: 0,
                  role: "button",
                  "aria-pressed": V,
                  onKeyDown: (r) => {
                    (r.key === "Enter" || r.key === " ") && N(U);
                  },
                  "aria-label": `${V ? "Pause" : "Play"} ${j}`,
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
                    V ? /* @__PURE__ */ e.jsx(se, { size: 24, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(oe, { size: 24, "aria-hidden": "true" })
                  ]
                },
                U
              );
            })
          }
        ),
        p !== null && /* @__PURE__ */ e.jsxs(
          "article",
          {
            ref: c,
            style: {
              marginTop: "24px",
              padding: "12px",
              borderRadius: "12px",
              backgroundColor: o,
              color: l,
              boxSizing: "border-box"
            },
            "aria-label": `Audio player for ${t[p].title}`,
            children: [
              t[p].thumbnail && /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: t[p].thumbnail,
                  alt: `${t[p].title} thumbnail`,
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
                  children: t[p].title
                }
              ),
              /* @__PURE__ */ e.jsx(
                "audio",
                {
                  ref: u,
                  src: t[p].src,
                  autoPlay: d,
                  loop: S,
                  onTimeUpdate: O,
                  onEnded: () => i(!1),
                  onLoadedMetadata: O,
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
                        onClick: () => C(-10),
                        "aria-label": "Skip back 10 seconds",
                        style: te(l, s),
                        children: /* @__PURE__ */ e.jsx(he, { size: 20 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => {
                          u.current && (b ? u.current.pause() : u.current.play(), i(!b));
                        },
                        "aria-label": b ? "Pause" : "Play",
                        style: {
                          ...te("#fff", s),
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
                        onClick: () => C(10),
                        "aria-label": "Skip forward 10 seconds",
                        style: te(l, s),
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
                        children: W(v)
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        onClick: T,
                        role: "slider",
                        "aria-valuemin": 0,
                        "aria-valuemax": k,
                        "aria-valuenow": v,
                        tabIndex: 0,
                        onKeyDown: (f) => {
                          u.current && (f.key === "ArrowRight" ? C(5) : f.key === "ArrowLeft" && C(-5));
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
                              width: `${v / k * 100 || 0}%`,
                              height: "100%",
                              backgroundColor: s,
                              borderRadius: "8px"
                            }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "time",
                      {
                        dateTime: `PT${Math.floor(k / 60)}M${Math.floor(
                          k % 60
                        )}S`,
                        style: { minWidth: "40px", fontSize: "0.9rem", color: "#666" },
                        "aria-label": "Total duration",
                        children: [
                          "/ ",
                          W(k)
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
                        onClick: () => m(!S),
                        "aria-label": "Toggle Loop",
                        style: te(
                          S ? s : l,
                          S ? "#e0f2fe" : "transparent"
                        ),
                        children: /* @__PURE__ */ e.jsx(
                          xe,
                          {
                            size: 20,
                            color: S ? s : l,
                            "aria-hidden": "true"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: _,
                        "aria-label": M > 0 ? "Mute" : "Unmute",
                        style: te(l, "transparent"),
                        children: M > 0 ? /* @__PURE__ */ e.jsx(be, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(me, { size: 20, "aria-hidden": "true" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: y,
                        "aria-label": R ? "Exit Fullscreen" : "Enter Fullscreen",
                        style: te(l, "transparent"),
                        children: R ? /* @__PURE__ */ e.jsx(fe, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(pe, { size: 20, "aria-hidden": "true" })
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
const lr = ({
  videos: t,
  columns: n = 3,
  responsiveColumns: s,
  gap: a = "10px",
  layout: l = "grid",
  lightbox: o = !0,
  autoPlay: d = !1,
  loop: g = !1,
  muted: p = !1,
  controls: w = !0,
  className: u = ""
}) => {
  const [c, b] = I(null), [i, v] = I(
    typeof window < "u" ? window.innerWidth : 1024
  ), [x, k] = I(n);
  q(() => {
    function S() {
      const m = window.innerWidth;
      if (v(m), !s) {
        k(n);
        return;
      }
      m < 640 ? k(s.mobile ?? n) : m < 1024 ? k(s.tablet ?? n) : k(s.desktop ?? n);
    }
    if (typeof window < "u")
      return S(), window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [n, s]);
  const z = () => b(null), M = (S) => {
    S.stopPropagation(), c !== null && b((c - 1 + t.length) % t.length);
  }, E = (S) => {
    S.stopPropagation(), c !== null && b((c + 1) % t.length);
  }, R = ({
    src: S,
    poster: m,
    autoPlay: N = !1,
    loop: O = !1,
    muted: T = !1,
    controls: C = !1,
    width: y = "100%",
    height: _ = "150px",
    borderRadius: W = "12px",
    backgroundColor: f = "#1e1e1e",
    primaryColor: j = "#ff4081",
    padding: F = "16px",
    className: U,
    onClick: V
  }) => {
    const r = J(null), h = J(null), [L, Y] = I(N), [B, P] = I(0), [D, G] = I(0), [A, Z] = I(T ? 0 : 0.5), [K, le] = I(T), [ae, Ye] = I(!1), [ce, Ue] = I(O);
    q(() => {
      r.current && (r.current.volume = A, r.current.loop = ce, r.current.muted = K);
    }, [A, ce, K]);
    const Ve = () => {
      r.current && (L ? r.current.pause() : r.current.play(), Y(!L));
    }, Ce = () => {
      r.current && (P(r.current.currentTime), G(r.current.duration));
    }, He = (Q) => {
      if (!r.current || !Q.currentTarget) return;
      const de = Q.currentTarget.getBoundingClientRect(), Me = (Q.clientX - de.left) / de.width * D;
      r.current.currentTime = Me, P(Me);
    }, ze = (Q) => {
      r.current && (r.current.currentTime += Q);
    }, Xe = () => {
      h.current && (ae ? document.exitFullscreen?.() : h.current.requestFullscreen?.(), Ye(!ae));
    }, qe = () => {
      K ? (le(!1), A === 0 && Z(0.5)) : (le(!0), Z(0));
    }, Re = (Q) => {
      if (isNaN(Q)) return "0:00";
      const de = Math.floor(Q / 60), ye = Math.floor(Q % 60);
      return `${de}:${ye < 10 ? "0" : ""}${ye}`;
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: h,
        onClick: V,
        className: U,
        style: {
          position: "relative",
          width: y,
          backgroundColor: f,
          borderRadius: W,
          color: "#fff",
          overflow: "hidden",
          padding: F,
          boxSizing: "border-box",
          maxWidth: "100%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          cursor: V ? "pointer" : "default",
          userSelect: "none"
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "video",
            {
              ref: r,
              src: S,
              poster: m,
              autoPlay: N,
              loop: O,
              muted: T,
              controls: C,
              onTimeUpdate: Ce,
              onLoadedMetadata: Ce,
              style: {
                width: "100%",
                height: _,
                borderRadius: W,
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
                    "aria-label": L ? "Pause" : "Play",
                    children: L ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
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
                      /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: Re(B) }),
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
                    onClick: He,
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
                          width: `${B / D * 100 || 0}%`,
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
                      onClick: () => Ue(!ce),
                      "aria-label": "Toggle Loop",
                      type: "button",
                      children: /* @__PURE__ */ e.jsx(
                        xe,
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
                      onClick: Xe,
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
  }, $ = () => i < 640 ? "120px" : i < 1024 ? "150px" : "180px";
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${u}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${l === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${x}, 1fr)`,
          gap: a
        },
        children: t.map((S, m) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "relative",
              overflow: "hidden",
              borderRadius: 12,
              cursor: o ? "pointer" : "default"
            },
            onClick: () => o && b(m),
            children: /* @__PURE__ */ e.jsx(
              R,
              {
                src: S.src,
                poster: S.poster,
                autoPlay: d,
                loop: g,
                muted: p,
                controls: w,
                height: $(),
                borderRadius: "12px",
                padding: "8px",
                primaryColor: "#ff4081",
                onClick: (N) => N.stopPropagation()
              }
            )
          },
          m
        ))
      }
    ),
    o && c !== null && /* @__PURE__ */ e.jsxs(
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
              onClick: M,
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
            R,
            {
              src: t[c].src,
              poster: t[c].poster,
              autoPlay: !0,
              controls: !0,
              muted: p,
              width: "80vw",
              height: "45vw",
              borderRadius: "16px",
              padding: "16px",
              primaryColor: "#ff4081",
              onClick: (S) => S.stopPropagation()
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
              children: /* @__PURE__ */ e.jsx(Se, { size: 32 })
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
              children: /* @__PURE__ */ e.jsx(ie, { size: 28 })
            }
          )
        ]
      }
    )
  ] });
}, ar = ({
  images: t,
  columns: n = 3,
  gap: s = "10px",
  layout: a = "grid",
  lightbox: l = !0,
  className: o = ""
}) => {
  const [d, g] = I(null), p = () => g(null), w = (c) => {
    c.stopPropagation(), d !== null && g((d - 1 + t.length) % t.length);
  }, u = (c) => {
    c.stopPropagation(), d !== null && g((d + 1) % t.length);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${o}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${a === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${n}, 1fr)`,
          gap: s
        },
        children: t.map((c, b) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "relative overflow-hidden rounded-lg cursor-pointer",
            onClick: () => l && g(b),
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
    l && d !== null && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50",
        onClick: p,
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
              onClick: p,
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
  Xt as Accordation,
  rr as Alert,
  ir as AudioGallery,
  Vt as AudioPlayer,
  Pt as Avatar,
  or as AvatarGroup,
  nr as Badge,
  Wt as Button,
  Qt as Card,
  qt as CheckRadio,
  Ht as Container,
  Jt as Drawer,
  Gt as DrawerButton,
  Zt as Dropdown,
  tr as Flexbox,
  er as GridView,
  _e as Image,
  ar as ImageGallery,
  Ft as Input,
  Dt as LeftTabs,
  Ot as List,
  sr as Modal,
  Yt as RightTabs,
  Kt as Table,
  Nt as Text,
  Bt as TopTabs,
  lr as VideoGallery,
  Ut as VideoPlayer
};
