import je, { useMemo as ee, forwardRef as we, createElement as ve, useRef as J, useState as M, useImperativeHandle as Ge, useEffect as q } from "react";
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
var Me;
function Je() {
  if (Me) return re;
  Me = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function o(a, l, i) {
    var c = null;
    if (i !== void 0 && (c = "" + i), l.key !== void 0 && (c = "" + l.key), "key" in l) {
      i = {};
      for (var g in l)
        g !== "key" && (i[g] = l[g]);
    } else i = l;
    return l = i.ref, {
      $$typeof: t,
      type: a,
      key: c,
      ref: l !== void 0 ? l : null,
      props: i
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
function Ke() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === z ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case f:
          return "Fragment";
        case m:
          return "Profiler";
        case S:
          return "StrictMode";
        case $:
          return "Suspense";
        case C:
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
          case w:
            return (r._context.displayName || "Context") + ".Consumer";
          case I:
            var h = r.render;
            return r = r.displayName, r || (r = h.displayName || h.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case y:
            return h = r.displayName || null, h !== null ? h : t(r.type) || "Memo";
          case W:
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
        var L = h.error, B = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return L.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), n(r);
      }
    }
    function a(r) {
      if (r === f) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === W)
        return "<...>";
      try {
        var h = t(r);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var r = R.A;
      return r === null ? null : r.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function c(r) {
      if (j.call(r, "key")) {
        var h = Object.getOwnPropertyDescriptor(r, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function g(r, h) {
      function L() {
        x || (x = !0, console.error(
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
      return T[r] || (T[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function k(r, h, L, B, Y, A, D, G) {
      return L = A.ref, r = {
        $$typeof: s,
        type: r,
        key: h,
        props: A,
        _owner: Y
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
    function u(r, h, L, B, Y, A, D, G) {
      var P = h.children;
      if (P !== void 0)
        if (B)
          if (_(P)) {
            for (B = 0; B < P.length; B++)
              d(P[B]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(P);
      if (j.call(h, "key")) {
        P = t(r);
        var K = Object.keys(h).filter(function(le) {
          return le !== "key";
        });
        B = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", U[P + B] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          P,
          K,
          P
        ), U[P + B] = !0);
      }
      if (P = null, L !== void 0 && (o(L), P = "" + L), c(h) && (o(h.key), P = "" + h.key), "key" in h) {
        L = {};
        for (var Z in h)
          Z !== "key" && (L[Z] = h[Z]);
      } else L = h;
      return P && g(
        L,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), k(
        r,
        P,
        A,
        Y,
        l(),
        L,
        D,
        G
      );
    }
    function d(r) {
      typeof r == "object" && r !== null && r.$$typeof === s && r._store && (r._store.validated = 1);
    }
    var b = je, s = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), E = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), R = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, _ = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var x, T = {}, F = b.react_stack_bottom_frame.bind(
      b,
      i
    )(), H = N(a(i)), U = {};
    ne.Fragment = f, ne.jsx = function(r, h, L, B, Y) {
      var A = 1e4 > R.recentlyCreatedOwnerStacks++;
      return u(
        r,
        h,
        L,
        !1,
        B,
        Y,
        A ? Error("react-stack-top-frame") : F,
        A ? N(a(r)) : H
      );
    }, ne.jsxs = function(r, h, L, B, Y) {
      var A = 1e4 > R.recentlyCreatedOwnerStacks++;
      return u(
        r,
        h,
        L,
        !0,
        B,
        Y,
        A ? Error("react-stack-top-frame") : F,
        A ? N(a(r)) : H
      );
    };
  }()), ne;
}
var $e;
function Ze() {
  return $e || ($e = 1, process.env.NODE_ENV === "production" ? ue.exports = Je() : ue.exports = Ke()), ue.exports;
}
var e = Ze();
const Wt = ({
  as: t = "p",
  children: n,
  className: o = "",
  href: a,
  target: l,
  rel: i,
  // Style
  color: c = "#333",
  bgColor: g,
  fontSize: p = "16px",
  fontWeight: k = "normal",
  textAlign: u = "left",
  textTransform: d = "none",
  lineHeight: b = "normal",
  letterSpacing: s = "normal",
  maxWidth: v,
  padding: f,
  margin: S,
  borderRadius: m,
  boxShadow: w,
  shadowColor: E = "rgba(0,0,0,0.1)",
  wordBreak: I = "normal",
  // Text styles
  italic: $ = !1,
  bold: C = !1,
  underline: y = !1,
  strikethrough: W = !1,
  selectable: O = !0,
  truncate: z = !1,
  // Hover & Active
  hoverColor: R,
  hoverBgColor: j,
  hoverTextDecoration: _,
  activeColor: N,
  activeBgColor: x,
  transitionDuration: T = "0.25s",
  // Event
  onClick: F
}) => {
  const H = ee(() => {
    const A = [];
    return y && A.push("underline"), W && A.push("line-through"), A.join(" ") || "none";
  }, [y, W]), U = {
    color: c,
    backgroundColor: g || "transparent",
    fontSize: p,
    fontWeight: C ? "bold" : k,
    textAlign: u,
    textTransform: d,
    lineHeight: b,
    letterSpacing: s,
    maxWidth: v,
    padding: f,
    margin: S,
    borderRadius: m,
    textDecoration: H,
    fontStyle: $ ? "italic" : "normal",
    wordBreak: I,
    boxShadow: w || (E ? `0 1px 4px ${E}` : void 0),
    cursor: F || a ? "pointer" : "default",
    userSelect: O ? "text" : "none",
    transition: `all ${T} ease-in-out`,
    overflow: z ? "hidden" : void 0,
    whiteSpace: z ? "nowrap" : void 0,
    textOverflow: z ? "ellipsis" : void 0
  }, Y = {
    className: o,
    style: U,
    onClick: F,
    onMouseEnter: (A) => {
      const D = A.currentTarget;
      R && (D.style.color = R), j && (D.style.backgroundColor = j), _ && (D.style.textDecoration = _);
    },
    onMouseLeave: (A) => {
      const D = A.currentTarget;
      D.style.color = c, D.style.backgroundColor = g || "transparent", D.style.textDecoration = H;
    },
    onMouseDown: (A) => {
      const D = A.currentTarget;
      N && (D.style.color = N), x && (D.style.backgroundColor = x);
    },
    onMouseUp: (A) => {
      const D = A.currentTarget;
      D.style.color = R || c, D.style.backgroundColor = j || g || "transparent";
    }
  };
  return t === "a" || a ? /* @__PURE__ */ e.jsx(
    "a",
    {
      ...Y,
      href: a,
      target: l,
      rel: i || (l === "_blank" ? "noopener noreferrer" : void 0),
      children: n
    }
  ) : /* @__PURE__ */ e.jsx(t, { ...Y, children: n });
}, _e = ({
  src: t,
  alt: n = "Image",
  width: o = "100%",
  height: a = "auto",
  borderRadius: l = "8px",
  borderColor: i = "transparent",
  borderStyle: c = "solid",
  borderWidth: g = "0px",
  shadow: p = !1,
  boxShadow: k,
  opacity: u = 1,
  objectFit: d = "cover",
  overlayText: b,
  overlayColor: s = "rgba(0, 0, 0, 0.5)",
  svgIcon: v,
  responsive: f = !1,
  padding: S,
  margin: m,
  lazyLoad: w = !1,
  hoverOpacity: E,
  hoverShadow: I = !1,
  hoverScale: $,
  hoverRotate: C,
  transitionDuration: y = "0.3s",
  overflow: W = "hidden",
  className: O,
  style: z,
  onClick: R
}) => {
  const j = {
    width: f ? "100%" : o,
    height: f ? "100%" : a,
    borderRadius: l,
    border: `${g} ${c} ${i}`,
    objectFit: d,
    opacity: u,
    boxShadow: p ? k || "0 4px 12px rgba(0,0,0,0.15)" : "none",
    transition: `all ${y} ease`,
    display: "block"
  }, _ = (T) => {
    T.currentTarget.style.opacity = E !== void 0 ? E.toString() : j.opacity?.toString() || "1", T.currentTarget.style.boxShadow = I ? "0 8px 20px rgba(0,0,0,0.3)" : j.boxShadow?.toString() || "none", T.currentTarget.style.transform = `scale(${$ || 1}) rotate(${C || 0}deg)`;
  }, N = (T) => {
    T.currentTarget.style.opacity = j.opacity?.toString() || "1", T.currentTarget.style.boxShadow = j.boxShadow?.toString() || "none", T.currentTarget.style.transform = "scale(1) rotate(0deg)";
  }, x = (() => {
    switch (W) {
      case "x":
        return { overflowX: "hidden" };
      case "y":
        return { overflowY: "hidden" };
      default:
        return { overflow: W };
    }
  })();
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      role: "img",
      "aria-label": n,
      onClick: R,
      className: O,
      style: {
        width: f ? "100%" : o,
        height: f ? "auto" : a,
        padding: S,
        margin: m,
        position: "relative",
        cursor: R ? "pointer" : "default",
        display: "inline-block",
        transition: `all ${y} ease`,
        ...x,
        ...z
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
            loading: w ? "lazy" : "eager",
            style: j,
            onMouseEnter: _,
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
              backgroundColor: s,
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
}, Nt = ({
  children: t,
  type: n = "button",
  onClick: o,
  iconBefore: a,
  iconAfter: l,
  className: i = "",
  style: c,
  // ✅ NEW
  fullWidth: g = !1,
  disabled: p = !1,
  loading: k = !1,
  loadingText: u = "Loading...",
  paddingHorizontal: d = 30,
  paddingVertical: b = 8,
  fontSize: s = "16px",
  fontWeight: v = 400,
  borderRadius: f = 6,
  backgroundColor: S = "#02b314",
  textColor: m = "white",
  borderColor: w = "transparent",
  hoverBgColor: E = "transparent",
  hoverTextColor: I = "black",
  hoverBorderColor: $,
  boxShadow: C = "0 1px 2px rgba(0, 0, 0, 0.05)"
}) => {
  const [y, W] = je.useState(!1), O = y && !p && I || m, z = y && !p && $ || w, R = y && !p ? E : S, j = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${b}px ${d}px`,
    fontSize: s,
    fontWeight: v,
    borderRadius: `${f}px`,
    width: g ? "100%" : "auto",
    color: O,
    border: `1px solid ${z}`,
    backgroundColor: R,
    boxShadow: C,
    cursor: p ? "not-allowed" : "pointer",
    opacity: p ? 0.6 : 1,
    transition: "all 0.2s ease-in-out",
    gap: "8px",
    ...c
    // ✅ Apply user-supplied inline styles last
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: n,
      className: i,
      style: j,
      onClick: !p && !k ? o : void 0,
      disabled: p,
      onMouseEnter: () => W(!0),
      onMouseLeave: () => W(!1),
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
  (n, o, a) => a ? a.toUpperCase() : o.toLowerCase()
), Le = (t) => {
  const n = et(t);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Ne = (...t) => t.filter((n, o, a) => !!n && n.trim() !== "" && a.indexOf(n) === o).join(" ").trim(), tt = (t) => {
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
    strokeWidth: o = 2,
    absoluteStrokeWidth: a,
    className: l = "",
    children: i,
    iconNode: c,
    ...g
  }, p) => ve(
    "svg",
    {
      ref: p,
      ...rt,
      width: n,
      height: n,
      stroke: t,
      strokeWidth: a ? Number(o) * 24 / Number(n) : o,
      className: Ne("lucide", l),
      ...!i && !tt(g) && { "aria-hidden": "true" },
      ...g
    },
    [
      ...c.map(([k, u]) => ve(k, u)),
      ...Array.isArray(i) ? i : [i]
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
  const o = we(
    ({ className: a, ...l }, i) => ve(nt, {
      ref: i,
      iconNode: n,
      className: Ne(
        `lucide-${Qe(Le(t))}`,
        `lucide-${t}`,
        a
      ),
      ...l
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
const yt = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], se = X("pause", yt);
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
], oe = X("play", mt);
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
], ye = X("volume-x", Rt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ie = X("x", It), Ft = we(
  ({
    type: t = "text",
    placeholder: n = "",
    label: o,
    value: a,
    defaultValue: l,
    onChange: i,
    name: c = "",
    disabled: g = !1,
    readOnly: p = !1,
    required: k = !1,
    error: u,
    success: d = !1,
    autoFocus: b = !1,
    iconLeft: s,
    iconRight: v,
    borderColor: f = "#ccc",
    focusBorderColor: S = "#2563eb",
    hoverBorderColor: m = "#4b5563",
    backgroundColor: w = "#ffffff",
    textColor: E = "#111827",
    errorColor: I = "#dc2626",
    successColor: $ = "#16a34a",
    labelColor: C = "#374151",
    size: y = "md",
    radius: W = "6px",
    fontSize: O = "14px",
    rows: z = 4,
    cols: R,
    maxLength: j,
    resize: _ = !0,
    showCharacterCount: N = !0,
    className: x,
    style: T
  }, F) => {
    const H = J(null), [U, r] = M(l || ""), [h, L] = M(!1);
    Ge(F, () => H.current);
    const B = (P) => {
      j && P.target.value.length > j || (r(P.target.value), i && i(c, P.target.value));
    }, Y = () => {
      switch (y) {
        case "sm":
          return "6px 12px";
        case "lg":
          return "12px 20px";
        default:
          return "10px 16px";
      }
    }, A = () => {
      switch (y) {
        case "sm":
          return "13px";
        case "lg":
          return "16px";
        default:
          return O;
      }
    }, D = u ? I : d ? $ : f, G = {
      width: "100%",
      padding: Y(),
      paddingLeft: s ? "40px" : Y().split(" ")[1],
      paddingRight: v || t === "password" ? "40px" : Y().split(" ")[1],
      border: `1px solid ${D}`,
      borderRadius: W,
      backgroundColor: w,
      color: E,
      fontSize: A(),
      outline: "none",
      resize: t === "textarea" && !_ ? "none" : void 0,
      ...T
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
              htmlFor: c,
              style: {
                display: "block",
                marginBottom: "6px",
                fontSize: "14px",
                fontWeight: 500,
                color: C
              },
              children: [
                o,
                " ",
                k && /* @__PURE__ */ e.jsx("span", { style: { color: I }, children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { style: { position: "relative", width: "100%" }, children: [
            s && /* @__PURE__ */ e.jsx(
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
                children: s
              }
            ),
            t === "textarea" ? /* @__PURE__ */ e.jsx(
              "textarea",
              {
                ref: H,
                name: c,
                value: a ?? U,
                onChange: B,
                placeholder: n,
                rows: z,
                cols: R,
                maxLength: j,
                disabled: g,
                readOnly: p,
                autoFocus: b,
                style: G,
                onFocus: (P) => {
                  P.currentTarget.style.borderColor = S;
                },
                onBlur: (P) => {
                  P.currentTarget.style.borderColor = D;
                },
                onMouseEnter: (P) => {
                  P.currentTarget.style.borderColor = m;
                },
                onMouseLeave: (P) => {
                  P.currentTarget.style.borderColor = D;
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: H,
                id: c,
                name: c,
                type: t === "password" ? h ? "text" : "password" : t,
                value: a ?? U,
                onChange: B,
                placeholder: n,
                disabled: g,
                readOnly: p,
                autoFocus: b,
                style: G,
                onFocus: (P) => {
                  P.currentTarget.style.borderColor = S;
                },
                onBlur: (P) => {
                  P.currentTarget.style.borderColor = D;
                },
                onMouseEnter: (P) => {
                  P.currentTarget.style.borderColor = m;
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
          t === "textarea" && N && j && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                textAlign: "right",
                fontSize: "12px",
                color: "#6b7280",
                marginTop: "4px"
              },
              children: [
                (a ?? U).length,
                "/",
                j
              ]
            }
          ),
          u && /* @__PURE__ */ e.jsx(
            "p",
            {
              style: {
                color: I,
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
  items: o,
  type: a = "unordered",
  bulletColor: l = "#2563eb",
  textColor: i = "#111827",
  backgroundColor: c = "#fff",
  borderColor: g = "#e5e7eb",
  fontSize: p = "15px",
  fontWeight: k = 500,
  borderRadius: u = "12px",
  padding: d = "16px",
  spacing: b = "12px",
  className: s,
  style: v
}) => {
  const f = a === "ordered", S = a === "inline", m = {
    backgroundColor: c,
    borderColor: g,
    color: i,
    borderWidth: g ? "1px" : "0px",
    borderStyle: "solid",
    borderRadius: u,
    padding: d,
    ...v
  }, w = S ? {
    display: "flex",
    gap: b,
    paddingLeft: 0,
    listStyleType: "none",
    margin: 0
  } : {
    listStyleType: f ? "decimal" : "none",
    paddingLeft: f ? "20px" : "0",
    margin: 0
  }, E = f ? "ol" : "ul";
  return /* @__PURE__ */ e.jsxs("div", { className: s, style: m, children: [
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
    /* @__PURE__ */ e.jsx(E, { style: w, children: o.map((I, $) => /* @__PURE__ */ e.jsx(
      Fe,
      {
        ...I,
        bulletColor: l,
        textColor: i,
        fontSize: p,
        fontWeight: k,
        spacing: b,
        isInline: S
      },
      $
    )) })
  ] });
}, Fe = ({
  text: t,
  icon: n,
  onClick: o,
  subItems: a,
  bulletColor: l,
  textColor: i,
  fontSize: c,
  fontWeight: g,
  spacing: p,
  isInline: k
}) => {
  const u = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: k ? "0" : p
  }, d = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: c,
    fontWeight: g,
    color: i,
    cursor: o ? "pointer" : "default"
  }, b = {
    width: "8px",
    height: "8px",
    backgroundColor: l,
    borderRadius: "50%",
    flexShrink: 0
  }, s = {
    listStyleType: "disc",
    paddingLeft: "20px",
    margin: 0
  };
  return /* @__PURE__ */ e.jsxs("li", { style: u, children: [
    /* @__PURE__ */ e.jsxs("div", { style: d, onClick: o, children: [
      n ? /* @__PURE__ */ e.jsx("span", { style: { fontSize: "16px", color: i }, children: n }) : !k && /* @__PURE__ */ e.jsx("span", { style: b }),
      /* @__PURE__ */ e.jsx("span", { children: t })
    ] }),
    a && a.length > 0 && /* @__PURE__ */ e.jsx("ul", { style: s, children: a.map((v, f) => /* @__PURE__ */ e.jsx(
      Fe,
      {
        ...v,
        bulletColor: l,
        textColor: i,
        fontSize: c,
        fontWeight: g,
        spacing: p,
        isInline: !1
      },
      f
    )) })
  ] });
}, Te = ({
  tabs: t,
  defaultActive: n = 0,
  tabPosition: o,
  activeTabClassName: a = "",
  inactiveTabClassName: l = "",
  tabContainerClassName: i = "",
  contentContainerClassName: c = "",
  className: g = "",
  activeTabStyle: p,
  inactiveTabStyle: k,
  tabContainerStyle: u,
  contentContainerStyle: d,
  style: b,
  tabsWidth: s = "240px",
  tabGap: v = 8,
  tabPadding: f = "12px 16px",
  tabBorderRadius: S = 12,
  primaryColor: m = "#2563eb",
  textColor: w = "#374151",
  backgroundColor: E = "#ffffff",
  hoverTextColor: I = "#1e40af",
  responsiveBreakpoint: $ = 768,
  showDrawerLabel: C = "Select Tab"
}) => {
  const [y, W] = M(n), [O, z] = M(null), [R, j] = M(!1), [_, N] = M(!1);
  q(() => {
    const Y = () => {
      j(window.innerWidth <= $);
    };
    return Y(), window.addEventListener("resize", Y), () => window.removeEventListener("resize", Y);
  }, [$]);
  const x = o === "left" || o === "right", F = {
    display: "flex",
    flexDirection: x ? R ? "column" : o === "left" ? "row" : "row-reverse" : "column",
    width: "100%",
    height: "100%",
    backgroundColor: E,
    ...x && !R ? {} : { flexWrap: "wrap" },
    ...b
  }, H = {
    width: x && !R ? s : "100%",
    display: "flex",
    flexDirection: x && !R ? "column" : "row",
    justifyContent: !x && o === "top" ? "center" : void 0,
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
    ...x && !R ? { width: "calc(100% - " + s + ")" } : { width: "100%" },
    ...d
  }, r = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: f,
    borderRadius: S,
    border: "none",
    backgroundColor: "transparent",
    fontWeight: 500,
    transition: "all 0.2s ease",
    width: x && !R ? "100%" : "auto",
    marginBottom: x && !R ? v : 0,
    marginRight: !x || R ? v : 0,
    justifyContent: "flex-start"
  }, h = {
    backgroundColor: m,
    color: "#fff",
    fontWeight: 700,
    boxShadow: `0 2px 10px ${m}55`,
    ...p
  }, L = {
    backgroundColor: "transparent",
    color: w,
    ...k
  }, B = {
    backgroundColor: `${m}22`,
    color: I
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
    R && x ? /* @__PURE__ */ e.jsxs("div", { style: { width: "100%", marginBottom: 12 }, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => N(!_),
          style: {
            ...r,
            ...h,
            justifyContent: "space-between",
            width: "100%"
          },
          className: "custom-tab-drawer-button",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: C }),
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: 18 }, children: "☰" })
          ]
        }
      ),
      _ && /* @__PURE__ */ e.jsx("div", { className: "custom-tab-mobile-drawer", children: t.map((Y, A) => {
        const D = A === y, G = O === A;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              W(A), N(!1);
            },
            onMouseEnter: () => z(A),
            onMouseLeave: () => z(null),
            className: D ? a : l,
            style: {
              ...r,
              ...D ? h : L,
              ...G && !D ? B : {}
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
        className: i,
        style: H,
        "aria-label": "Tabs Navigation",
        children: t.map((Y, A) => {
          const D = A === y, G = O === A;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => W(A),
              onMouseEnter: () => z(A),
              onMouseLeave: () => z(null),
              className: D ? a : l,
              style: {
                ...r,
                ...D ? h : L,
                ...G && !D ? B : {}
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
        className: c,
        style: U,
        role: "tabpanel",
        children: t[y]?.content
      }
    )
  ] });
}, Dt = (t) => /* @__PURE__ */ e.jsx(Te, { ...t, tabPosition: "left" }), Yt = (t) => /* @__PURE__ */ e.jsx(Te, { ...t, tabPosition: "top" }), Bt = (t) => /* @__PURE__ */ e.jsx(Te, { ...t, tabPosition: "right" }), Ht = ({
  src: t,
  poster: n,
  autoPlay: o = !1,
  loop: a = !1,
  controls: l = !1,
  muted: i = !1,
  // default false
  width: c = "100%",
  height: g = "150px",
  borderRadius: p = "12px",
  backgroundColor: k = "#1e1e1e",
  primaryColor: u = "#ff4081",
  padding: d = "16px",
  className: b
}) => {
  const s = J(null), v = J(null), [f, S] = M(o), [m, w] = M(0), [E, I] = M(0), [$, C] = M(0.5), [y, W] = M(i), [O, z] = M(!1), [R, j] = M(a);
  q(() => {
    s.current && (s.current.volume = $, s.current.loop = R, s.current.muted = y);
  }, [$, R, y]);
  const _ = () => {
    s.current && (f ? s.current.pause() : s.current.play(), S(!f));
  }, N = () => {
    s.current && (w(s.current.currentTime), I(s.current.duration));
  }, x = (r) => {
    if (!s.current || !r.currentTarget) return;
    const h = r.currentTarget.getBoundingClientRect(), B = (r.clientX - h.left) / h.width * E;
    s.current.currentTime = B, w(B);
  }, T = (r) => {
    s.current && (s.current.currentTime += r);
  }, F = () => {
    v.current && (O ? document.exitFullscreen?.() : v.current.requestFullscreen?.(), z(!O));
  }, H = () => {
    W(!y), y && $ === 0 && C(0.5);
  }, U = (r) => {
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
        width: c,
        backgroundColor: k,
        borderRadius: p,
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
            ref: s,
            src: t,
            poster: n,
            autoPlay: o,
            loop: a,
            controls: l,
            muted: i,
            onTimeUpdate: N,
            onLoadedMetadata: N,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => T(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
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
                  "aria-label": f ? "Pause" : "Play",
                  children: f ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
                }
              ),
              /* @__PURE__ */ e.jsx("button", { onClick: () => T(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: U(m) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  " ",
                  "/ ",
                  U(E)
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
                        width: `${m / E * 100 || 0}%`,
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
                    onClick: () => j(!R),
                    "aria-label": "Toggle Loop",
                    children: /* @__PURE__ */ e.jsx(xe, { size: 18, color: R ? u : void 0 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: H, "aria-label": "Toggle Mute", children: y ? /* @__PURE__ */ e.jsx(ye, { size: 18 }) : /* @__PURE__ */ e.jsx(be, { size: 18 }) }),
                /* @__PURE__ */ e.jsx("button", { onClick: F, "aria-label": "Toggle Fullscreen", children: O ? /* @__PURE__ */ e.jsx(fe, { size: 18 }) : /* @__PURE__ */ e.jsx(pe, { size: 18 }) })
              ] })
            ]
          }
        )
      ]
    }
  );
}, Ut = ({
  src: t,
  thumbnail: n,
  autoPlay: o = !1,
  loop: a = !1,
  backgroundColor: l = "#000000",
  primaryColor: i = "#10b981",
  secondaryColor: c = "#ffffff",
  borderRadius: g = "12px",
  padding: p = "16px",
  width: k = "100%",
  className: u
}) => {
  const d = J(null), b = J(null), [s, v] = M(o), [f, S] = M(0), [m, w] = M(0), [E, I] = M(0.5), [$, C] = M(!1), [y, W] = M(a);
  q(() => {
    d.current && (d.current.volume = E);
  }, [E]), q(() => {
    d.current && (d.current.loop = y);
  }, [y]);
  const O = () => {
    d.current && (s ? d.current.pause() : d.current.play(), v(!s));
  }, z = () => {
    d.current && (S(d.current.currentTime), w(d.current.duration));
  }, R = (x) => {
    if (!d.current || !x.currentTarget) return;
    const T = x.currentTarget.getBoundingClientRect(), H = (x.clientX - T.left) / T.width * m;
    d.current.currentTime = H, S(H);
  }, j = (x) => {
    d.current && (d.current.currentTime += x);
  }, _ = () => {
    b.current && ($ ? document.exitFullscreen?.() : b.current.requestFullscreen?.(), C(!$));
  }, N = (x) => {
    const T = Math.floor(x / 60), F = Math.floor(x % 60);
    return `${T}:${F < 10 ? "0" : ""}${F}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: b,
      className: u,
      style: {
        position: "relative",
        width: k,
        backgroundColor: l,
        borderRadius: g,
        color: c,
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
            ref: d,
            src: t,
            autoPlay: o,
            loop: a,
            onTimeUpdate: z,
            onLoadedMetadata: z
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => j(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: O,
                  style: {
                    background: i,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": s ? "Pause" : "Play",
                  children: s ? /* @__PURE__ */ e.jsx(se, { size: 20 }) : /* @__PURE__ */ e.jsx(oe, { size: 20 })
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
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { flexShrink: 0, minWidth: "60px", textAlign: "center" }, children: [
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", marginRight: "4px" }, children: N(f) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  "/ ",
                  N(m)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: R,
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
                        width: `${f / m * 100 || 0}%`,
                        height: "100%",
                        background: i,
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
                        onClick: () => W(!y),
                        "aria-label": "Toggle Loop",
                        children: /* @__PURE__ */ e.jsx(xe, { size: 18, color: y ? i : void 0 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => I(E > 0 ? 0 : 0.5),
                        "aria-label": "Toggle Mute",
                        children: E > 0 ? /* @__PURE__ */ e.jsx(be, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
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
function V(t, n, o) {
  return t == null ? o : typeof t != "object" ? t : t[n] ?? o;
}
const Ae = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Vt = ({
  display: t = { sm: "block", md: "flex", lg: "grid" },
  flexDirection: n = { sm: "column", md: "row", lg: "row" },
  justifyContent: o = { sm: "flex-start", md: "center", lg: "space-between" },
  alignItems: a = { sm: "stretch", md: "center", lg: "center" },
  gridTemplateColumns: l = { sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
  gridTemplateRows: i = { sm: "auto", md: "auto", lg: "auto" },
  gap: c = { sm: "10px", md: "20px", lg: "30px" },
  rowGap: g,
  columnGap: p,
  width: k = { sm: "100%", md: "90%", lg: "80%" },
  maxWidth: u = { sm: "100%", md: "800px", lg: "1200px" },
  height: d = { sm: "auto", md: "auto", lg: "auto" },
  padding: b = { sm: "10px", md: "20px", lg: "40px" },
  margin: s = { sm: "0 auto", md: "0 auto", lg: "0 auto" },
  textAlign: v = { sm: "left", md: "center", lg: "center" },
  backgroundColor: f = "#fff",
  border: S = { sm: "none", md: "1px solid #ddd", lg: "2px solid #ccc" },
  borderRadius: m = { sm: "0", md: "8px", lg: "12px" },
  boxShadow: w = {
    sm: "none",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 6px 10px rgba(0,0,0,0.15)"
  },
  overflow: E = { sm: "visible", md: "hidden", lg: "auto" },
  children: I,
  className: $,
  style: C
}) => {
  const [y, W] = M(
    () => Ae(window.innerWidth)
  );
  q(() => {
    const z = () => W(Ae(window.innerWidth));
    return window.addEventListener("resize", z), () => window.removeEventListener("resize", z);
  }, []);
  const O = ee(() => {
    const z = V(t, y, "block"), R = V(
      n,
      y,
      void 0
    ), j = V(
      o,
      y,
      void 0
    ), _ = V(
      a,
      y,
      void 0
    ), N = V(
      l,
      y,
      void 0
    ), x = V(
      i,
      y,
      void 0
    ), T = V(c, y, void 0), F = V(g, y, void 0), H = V(
      p,
      y,
      void 0
    ), U = V(k, y, "100%"), r = V(u, y, void 0), h = V(d, y, void 0), L = V(b, y, void 0), B = V(s, y, void 0), Y = V(
      v,
      y,
      void 0
    ), A = V(S, y, void 0), D = V(
      m,
      y,
      void 0
    ), G = V(
      w,
      y,
      void 0
    ), P = V(E, y, void 0);
    return {
      display: z,
      ...R && { flexDirection: R },
      ...j && { justifyContent: j },
      ..._ && { alignItems: _ },
      ...N && {
        gridTemplateColumns: N
      },
      ...x && {
        gridTemplateRows: x
      },
      ...T && { gap: T },
      ...F && { rowGap: F },
      ...H && { columnGap: H },
      width: U,
      ...r && { maxWidth: r },
      ...h && { height: h },
      ...L && { padding: L },
      ...B && { margin: B },
      ...Y && { textAlign: Y },
      backgroundColor: f,
      ...A && { border: A },
      ...D && { borderRadius: D },
      ...G && { boxShadow: G },
      ...P && { overflow: P },
      boxSizing: "border-box",
      ...C
    };
  }, [
    y,
    t,
    n,
    o,
    a,
    l,
    i,
    c,
    g,
    p,
    k,
    u,
    d,
    b,
    s,
    v,
    f,
    S,
    m,
    w,
    E,
    C
  ]);
  return /* @__PURE__ */ e.jsx("div", { className: $, style: O, children: I });
}, Xt = ({
  items: t,
  allowMultiple: n = !1,
  defaultOpenIndex: o = [],
  borderColor: a = "#d1d5db",
  backgroundColor: l = "#ffffff",
  textColor: i = "#111827",
  hoverBgColor: c = "#f3f4f6",
  hoverTextColor: g = "#111827",
  paddingVertical: p = "16px",
  paddingHorizontal: k = "16px",
  margin: u = "12px 0",
  iconOpen: d = "−",
  iconClose: b = "+",
  transitionDuration: s = "300ms",
  borderRadius: v = "8px",
  shadow: f = "0 2px 8px rgba(0, 0, 0, 0.05)",
  contentPadding: S = "16px",
  fontSize: m = "16px",
  fontWeight: w = "600",
  iconSize: E = "18px",
  contentFontSize: I = "14px",
  contentFontWeight: $ = "400",
  contentBackgroundColor: C = "#ffffff",
  contentTextColor: y = "#111827",
  className: W,
  style: O
}) => {
  const [z, R] = M(o), j = J([]), _ = J([]);
  q(() => {
    j.current.forEach((x, T) => {
      x && (x.style.maxHeight = z.includes(T) ? `${x.scrollHeight}px` : "0px");
    });
  }, [z]);
  const N = (x) => {
    R(
      (T) => n ? T.includes(x) ? T.filter((F) => F !== x) : [...T, x] : T.includes(x) ? [] : [x]
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: W, style: { width: "100%", ...O }, children: t.map((x, T) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        border: `1px solid ${a}`,
        borderRadius: v,
        margin: u,
        boxShadow: f,
        overflow: "hidden",
        transition: `all ${s} ease`
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: (F) => {
              _.current[T] = F;
            },
            onClick: () => N(T),
            style: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: l,
              color: i,
              padding: `${p} ${k}`,
              fontWeight: w,
              fontSize: m,
              cursor: "pointer",
              outline: "none",
              border: "none",
              transition: `all ${s}`
            },
            onMouseEnter: (F) => {
              F.currentTarget.style.backgroundColor = c, F.currentTarget.style.color = g;
            },
            onMouseLeave: (F) => {
              F.currentTarget.style.backgroundColor = l, F.currentTarget.style.color = i;
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: x.title }),
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: E }, children: z.includes(T) ? d : b })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: (F) => {
              j.current[T] = F;
            },
            style: {
              overflow: "hidden",
              maxHeight: z.includes(T) ? `${j.current[T]?.scrollHeight}px` : "0px",
              transition: `max-height ${s} ease-in-out`
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                style: {
                  borderTop: `1px solid ${a}`,
                  backgroundColor: C,
                  color: y,
                  padding: S,
                  fontSize: I,
                  fontWeight: $
                },
                children: x.content
              }
            )
          }
        )
      ]
    },
    T
  )) });
}, qt = ({
  type: t,
  name: n,
  options: o,
  selectedValues: a,
  onChange: l,
  disabled: i = !1,
  readOnly: c = !1,
  required: g = !1,
  error: p,
  className: k = "",
  customIcon: u,
  style: d,
  labelStyle: b,
  iconSize: s = 20,
  iconCheckedBgColor: v = "#2563eb",
  // blue-600
  iconUncheckedBorderColor: f = "#9ca3af",
  // gray-400
  textColor: S = "#374151",
  // gray-700
  errorStyle: m
}) => {
  const w = t === "checkbox", E = (I) => {
    if (l)
      if (w) {
        const $ = Array.isArray(a) ? a.includes(I) ? a.filter((C) => C !== I) : [...a, I] : [I];
        l($);
      } else
        l(I);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: k,
      style: { display: "flex", flexDirection: "column", gap: 8, ...d },
      role: t,
      "aria-disabled": i,
      children: [
        o.map((I) => {
          const $ = w ? Array.isArray(a) && a.includes(I.value) : a === I.value;
          return /* @__PURE__ */ e.jsxs(
            "label",
            {
              style: {
                display: "flex",
                alignItems: "center",
                cursor: i ? "not-allowed" : "pointer",
                opacity: i ? 0.6 : 1,
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
                    value: I.value,
                    checked: $,
                    disabled: i || c,
                    required: g,
                    onChange: () => E(I.value),
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
                      width: s,
                      height: s,
                      borderRadius: w ? 4 : "50%",
                      border: `2px solid ${$ ? v : f}`,
                      backgroundColor: $ ? v : "transparent",
                      transition: "all 0.2s ease",
                      flexShrink: 0
                    },
                    children: [
                      $ && !w && /* @__PURE__ */ e.jsx(
                        "span",
                        {
                          style: {
                            width: s / 2,
                            height: s / 2,
                            borderRadius: "50%",
                            backgroundColor: "white"
                          }
                        }
                      ),
                      $ && w && /* @__PURE__ */ e.jsx(
                        "svg",
                        {
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "white",
                          strokeWidth: 3,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          style: { width: s * 0.6, height: s * 0.6 },
                          children: /* @__PURE__ */ e.jsx("polyline", { points: "20 6 9 17 4 12" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { style: { color: S, fontSize: 14 }, children: I.label })
              ]
            },
            I.value
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
              ...m
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
  iconPosition: o = "left",
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
      n && o === "left" && n,
      t,
      n && o === "right" && n
    ]
  }
), Jt = ({
  open: t,
  onClose: n,
  position: o = "right",
  width: a = "300px",
  height: l = "300px",
  backgroundColor: i = "#fff",
  transitionDuration: c = 300,
  style: g = {},
  children: p,
  showCloseButton: k = !0,
  closeButtonStyle: u = {}
}) => {
  const [d, b] = M(t);
  q(() => {
    t ? b(!0) : setTimeout(() => b(!1), c);
  }, [t, c]);
  const s = ee(() => {
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
    backgroundColor: i,
    transition: `transform ${c}ms ease, opacity ${c}ms ease`,
    transform: s,
    opacity: t ? 1 : 0,
    ...g,
    ...o === "left" || o === "right" ? { top: 0, [o]: 0, width: a, height: "100%" } : { left: 0, [o]: 0, height: l, width: "100%" }
  }, f = {
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
  }, S = {
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
    /* @__PURE__ */ e.jsx("div", { style: f, onClick: n }),
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
          k && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: n,
              style: { ...S, ...u },
              children: /* @__PURE__ */ e.jsx(ie, { size: 20, color: "rgba(255, 0, 0, 1)" })
            }
          ),
          p
        ]
      }
    )
  ] });
}, Kt = ({
  options: t,
  value: n,
  defaultValue: o,
  onChange: a,
  placeholder: l = "Select an option",
  disabled: i = !1,
  borderColor: c = "#ccc",
  backgroundColor: g = "#fff",
  textColor: p = "#333",
  hoverColor: k = "#f0f0f0",
  padding: u = "12px 16px",
  margin: d = "0 0 1rem 0",
  dropdownWidth: b = "100%",
  dropdownHeight: s = "200px",
  borderRadius: v = "8px",
  boxShadow: f = "0 4px 8px rgba(0,0,0,0.1)",
  optionPadding: S = "10px 12px",
  optionGap: m = "8px",
  transitionDuration: w = "0.25s",
  optionHoverStyle: E,
  className: I = "",
  dropdownStyle: $,
  dropdownClassName: C = "",
  optionStyle: y,
  optionClassName: W = "",
  iconPrefix: O,
  iconSuffix: z
}) => {
  const [R, j] = M(o), [_, N] = M(!1), [x, T] = M(null), F = J(null);
  q(() => {
    const h = (L) => {
      F.current && !F.current.contains(L.target) && N(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []);
  const H = (h) => {
    j(h), N(!1), a && a(h);
  }, U = n ?? R, r = t.find((h) => h.value === U);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: F,
      className: I,
      style: {
        position: "relative",
        width: b,
        margin: d,
        fontFamily: "sans-serif",
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => N((h) => !h),
            disabled: i,
            "aria-haspopup": "listbox",
            "aria-expanded": _,
            style: {
              width: "100%",
              padding: u,
              backgroundColor: g,
              color: p,
              border: `1px solid ${c}`,
              borderRadius: v,
              boxShadow: i ? "none" : f,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: i ? "not-allowed" : "pointer",
              opacity: i ? 0.6 : 1,
              transition: `all ${w} ease-in-out`
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: m }, children: [
                O && /* @__PURE__ */ e.jsx("span", { children: O }),
                /* @__PURE__ */ e.jsx("span", { children: r?.label || l })
              ] }),
              z || /* @__PURE__ */ e.jsx("span", { style: { marginLeft: "8px" }, children: "▼" })
            ]
          }
        ),
        _ && /* @__PURE__ */ e.jsx(
          "ul",
          {
            role: "listbox",
            className: C,
            style: {
              position: "absolute",
              top: "100%",
              left: 0,
              zIndex: 1e3,
              width: "100%",
              maxHeight: s,
              overflowY: "auto",
              backgroundColor: g,
              border: `1px solid ${c}`,
              borderRadius: v,
              boxShadow: f,
              marginTop: "4px",
              transition: `all ${w} ease`,
              ...$
            },
            children: t.map((h, L) => {
              const B = R === h.value, Y = x === L, A = Y ? E?.backgroundColor || k : B ? k : g, D = {
                display: "flex",
                alignItems: "center",
                gap: m,
                padding: S,
                cursor: "pointer",
                backgroundColor: A,
                transition: `background ${w}`,
                ...y,
                ...Y && E
              };
              return /* @__PURE__ */ e.jsxs(
                "li",
                {
                  onClick: () => H(h.value),
                  role: "option",
                  className: W,
                  style: D,
                  onMouseEnter: () => T(L),
                  onMouseLeave: () => T(null),
                  "aria-selected": B,
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
}, Zt = ({
  columns: t,
  data: n,
  className: o = "",
  pagination: a = !0,
  rowsPerPage: l = 5,
  colors: i = {
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
  tableBorderRadius: g = "8px",
  sortable: p = !0,
  bodyAlign: k = "left",
  headerAlign: u = "left"
}) => {
  const [d, b] = M(null), [s, v] = M("asc"), [f, S] = M(1), [m, w] = M(null), E = (z, R) => {
    !p || !R || (d === z ? v(s === "asc" ? "desc" : "asc") : (b(z), v("asc")), S(1));
  }, I = je.useMemo(() => d ? [...n].sort((z, R) => {
    const j = z[d], _ = R[d];
    if (j == null && _ == null) return 0;
    if (j == null) return s === "asc" ? -1 : 1;
    if (_ == null) return s === "asc" ? 1 : -1;
    if (typeof j == "number" && typeof _ == "number")
      return s === "asc" ? j - _ : _ - j;
    if (j instanceof Date && _ instanceof Date)
      return s === "asc" ? j.getTime() - _.getTime() : _.getTime() - j.getTime();
    const N = String(j).toLowerCase(), x = String(_).toLowerCase();
    return N === x ? 0 : s === "asc" ? N > x ? 1 : -1 : N < x ? 1 : -1;
  }) : [...n], [n, d, s]), $ = a ? I.slice(
    (f - 1) * l,
    f * l
  ) : I, C = Math.ceil(n.length / l), y = /* @__PURE__ */ e.jsx(
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
  ), W = /* @__PURE__ */ e.jsx(
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
  return /* @__PURE__ */ e.jsxs("div", { style: { overflowX: "auto", width: "100%" }, className: o, children: [
    /* @__PURE__ */ e.jsxs(
      "table",
      {
        style: {
          width: "100%",
          borderCollapse: "collapse",
          border: `1px solid ${i.borderColor}`,
          tableLayout: "auto",
          minWidth: "400px",
          borderRadius: g,
          // Important: for border-radius to show on table, set borderSpacing and borderCollapse accordingly
          borderSpacing: 0,
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { children: t.map(({ key: z, label: R, sortable: j, icon: _ }, N) => /* @__PURE__ */ e.jsx(
            "th",
            {
              onClick: () => E(z, j),
              style: {
                padding: "12px",
                fontSize: "14px",
                border: `1px solid ${i.borderColor}`,
                cursor: p && j ? "pointer" : "default",
                backgroundColor: i.headerBg,
                color: i.headerText,
                userSelect: "none",
                borderTopLeftRadius: N === 0 ? c : void 0,
                borderTopRightRadius: N === t.length - 1 ? c : void 0,
                textAlign: u,
                whiteSpace: "nowrap"
              },
              "aria-sort": d === z ? s === "asc" ? "ascending" : "descending" : void 0,
              role: p && j ? "button" : void 0,
              tabIndex: p && j ? 0 : void 0,
              onKeyDown: (x) => {
                p && j && (x.key === "Enter" || x.key === " ") && (x.preventDefault(), E(z, j));
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
                    /* @__PURE__ */ e.jsx("span", { children: R }),
                    p && j && (d === z ? s === "asc" ? y : W : O)
                  ]
                }
              )
            },
            z
          )) }) }),
          /* @__PURE__ */ e.jsx("tbody", { children: $.map((z, R) => /* @__PURE__ */ e.jsx(
            "tr",
            {
              style: {
                backgroundColor: m === R ? i.hoverBg : i.rowBg,
                color: i.rowText,
                transition: "background-color 0.2s ease-in-out"
              },
              onMouseEnter: () => w(R),
              onMouseLeave: () => w(null),
              children: t.map(({ key: j }) => /* @__PURE__ */ e.jsx(
                "td",
                {
                  style: {
                    padding: "12px",
                    border: `1px solid ${i.borderColor}`,
                    whiteSpace: "nowrap",
                    textAlign: k
                  },
                  children: z[j]
                },
                j
              ))
            },
            R
          )) })
        ]
      }
    ),
    a && C > 1 && /* @__PURE__ */ e.jsxs(
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
                backgroundColor: i.paginationBg,
                color: i.paginationText,
                borderRadius: "6px",
                border: "none",
                opacity: f === 1 ? 0.5 : 1,
                cursor: f === 1 ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
              },
              disabled: f === 1,
              onClick: () => S((z) => Math.max(z - 1, 1)),
              "aria-label": "Previous page",
              type: "button",
              children: [
                /* @__PURE__ */ e.jsx(ke, { size: 16 }),
                "Prev"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("span", { style: { color: i.paginationText }, children: [
            "Page ",
            f,
            " / ",
            C
          ] }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "4px 10px",
                backgroundColor: i.paginationBg,
                color: i.paginationText,
                borderRadius: "6px",
                border: "none",
                opacity: f === C ? 0.5 : 1,
                cursor: f === C ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
              },
              disabled: f === C,
              onClick: () => S((z) => Math.min(z + 1, C)),
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
  style: o = {},
  background: a = "#fff",
  backgroundImage: l,
  backgroundSize: i = "cover",
  backgroundPosition: c = "center",
  backgroundRepeat: g = "no-repeat",
  textColor: p = "#000",
  borderRadius: k = 12,
  padding: u = 24,
  margin: d = 0,
  maxWidth: b = "100%",
  boxShadow: s = "0 4px 12px rgba(0,0,0,0.1)",
  border: v = "none",
  display: f = "flex",
  flexDirection: S = "column",
  justifyContent: m = "flex-start",
  alignItems: w = "stretch",
  gap: E = 16
}) => {
  const I = {
    background: a,
    color: p,
    borderRadius: k,
    padding: u,
    margin: d,
    maxWidth: b,
    boxShadow: s,
    border: v,
    display: f,
    flexDirection: S,
    justifyContent: m,
    alignItems: w,
    gap: E,
    boxSizing: "border-box",
    // Background image styles if provided
    ...l ? {
      backgroundImage: `url(${l})`,
      backgroundSize: i,
      backgroundPosition: c,
      backgroundRepeat: g
    } : {},
    ...o
  };
  return /* @__PURE__ */ e.jsx("div", { className: n, style: I, children: t });
}, Pe = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", er = ({
  columns: t = { sm: 1, md: 2, lg: 3 },
  gap: n = "16px",
  padding: o = "20px",
  alignItems: a = "stretch",
  justifyItems: l = "stretch",
  backgroundColor: i = "transparent",
  width: c = "100%",
  maxWidth: g = "100%",
  height: p = "auto",
  children: k,
  style: u
}) => {
  const [d, b] = M(
    Pe(window.innerWidth)
  );
  q(() => {
    const f = () => b(Pe(window.innerWidth));
    return window.addEventListener("resize", f), () => window.removeEventListener("resize", f);
  }, []);
  const s = ee(() => typeof t == "number" ? t : t[d] ?? 1, [t, d]), v = ee(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${s}, 1fr)`,
      gap: n,
      padding: o,
      alignItems: a,
      justifyItems: l,
      backgroundColor: i,
      width: c,
      maxWidth: g,
      height: p,
      boxSizing: "border-box",
      ...u
    }),
    [
      s,
      n,
      o,
      a,
      l,
      i,
      c,
      g,
      p,
      u
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: v, children: k });
}, We = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", tr = ({
  direction: t = "row",
  align: n = "center",
  justify: o = "space-between",
  gap: a = 16,
  padding: l = 20,
  backgroundColor: i = "transparent",
  width: c = "100%",
  maxWidth: g = "100%",
  height: p = "auto",
  style: k,
  children: u
}) => {
  const [d, b] = M(
    We(window.innerWidth)
  );
  q(() => {
    const f = () => b(We(window.innerWidth));
    return window.addEventListener("resize", f), () => window.removeEventListener("resize", f);
  }, []);
  const s = ee(() => typeof t == "string" ? t : t[d] ?? "row", [t, d]), v = ee(
    () => ({
      display: "flex",
      flexDirection: s,
      alignItems: n,
      justifyContent: o,
      gap: typeof a == "number" ? `${a}px` : a,
      padding: typeof l == "number" ? `${l}px` : l,
      backgroundColor: i,
      width: c,
      maxWidth: g,
      height: p,
      boxSizing: "border-box",
      ...k
    }),
    [
      s,
      n,
      o,
      a,
      l,
      i,
      c,
      g,
      p,
      k
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: v, children: u });
}, Mt = {
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
  type: o = "info",
  dismissible: a = !0,
  onClose: l,
  duration: i,
  icon: c,
  actionButton: g,
  position: p = "top-right",
  className: k,
  style: u
}) => {
  const [d, b] = M(!0);
  if (q(() => {
    if (i) {
      const w = setTimeout(() => {
        b(!1), l?.();
      }, i);
      return () => clearTimeout(w);
    }
  }, [i, l]), !d) return null;
  const { bg: s, border: v, iconColor: f, Icon: S } = Mt[o], m = Et(p);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: k,
      style: {
        ...m,
        display: "flex",
        gap: "12px",
        padding: "16px",
        backgroundColor: s,
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
        /* @__PURE__ */ e.jsx("div", { style: { color: f, marginTop: "3px" }, children: c || S }),
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
  textColor: o = "#fff",
  borderColor: a = "#2563eb",
  icon: l,
  iconPosition: i = "left",
  rounded: c = !1,
  borderRadius: g,
  borderWidth: p = "0",
  fontSize: k = "14px",
  fontWeight: u = 500,
  horizontalPadding: d = "10px",
  verticalPadding: b = "6px",
  margin: s = "0",
  shadow: v = "0 1px 4px rgba(0, 0, 0, 0.1)",
  notificationDot: f = !1,
  dotColor: S = "#ef4444",
  count: m,
  pulse: w = !1,
  style: E,
  onClick: I
}) => {
  const $ = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: n,
    border: `${p} solid ${a}`,
    borderRadius: g || (c ? "9999px" : "6px"),
    padding: `${b} ${d}`,
    fontSize: k,
    fontWeight: u,
    margin: s,
    boxShadow: v,
    position: "relative",
    cursor: I ? "pointer" : "default",
    ...E
  }, C = {
    color: o,
    display: "inline"
  }, y = {
    display: "flex",
    alignItems: "center",
    color: o
  }, W = {
    ...y,
    marginRight: t ? "6px" : "0px"
  }, O = {
    ...y,
    marginLeft: t ? "6px" : "0px"
  }, z = {
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
  }, R = {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    height: "8px",
    width: "8px",
    backgroundColor: S,
    borderRadius: "50%",
    zIndex: 1,
    animation: w ? "pulseAnim 1.2s infinite" : void 0
  };
  return /* @__PURE__ */ e.jsxs("span", { style: $, onClick: I, children: [
    f && /* @__PURE__ */ e.jsx("span", { style: R }),
    typeof m < "u" && /* @__PURE__ */ e.jsx("span", { style: z, children: m }),
    l && i === "left" && /* @__PURE__ */ e.jsx("span", { style: W, children: l }),
    t && /* @__PURE__ */ e.jsx("span", { style: C, children: t }),
    l && i === "right" && /* @__PURE__ */ e.jsx("span", { style: O, children: l }),
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
  children: o,
  overlayStyle: a,
  modalStyle: l,
  closeButtonStyle: i
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
                ...i
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
}, Ye = (t) => {
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
}, At = ({
  src: t,
  alt: n = "User Avatar",
  size: o = "md",
  variant: a = "circular",
  isOnline: l = !1,
  isOffline: i = !1,
  className: c = "",
  style: g,
  statusClassName: p = "",
  statusStyle: k,
  statusPosition: u = "bottom-right",
  fallback: d,
  ring: b = !1,
  ringColor: s = "#3b82f6",
  onClick: v
}) => {
  const [f, S] = M(!1), [m, w] = M(!1), E = Oe[o], I = $t[o], $ = De[o], C = Ye(a), y = d || n.split(" ").map((_) => _[0]).join("").toUpperCase().slice(0, 2);
  let W = "", O = "";
  l ? (W = "#10b981", O = "Online") : i && (W = "#6b7280", O = "Offline");
  const z = l || i, R = t && !f, j = !!v;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        position: "relative",
        width: E,
        height: E,
        borderRadius: C,
        overflow: "visible",
        // Changed from "hidden" to show status dots outside
        display: "inline-block",
        flexShrink: 0,
        cursor: j ? "pointer" : "default",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: m && j ? "scale(1.05)" : "scale(1)",
        boxShadow: b ? `0 0 0 3px ${s}20, 0 0 0 1px ${s}` : m && j ? "0 8px 25px -8px rgba(0, 0, 0, 0.3)" : "0 1px 3px rgba(0, 0, 0, 0.1)",
        ...g
      },
      className: c,
      "aria-label": n,
      role: j ? "button" : "img",
      tabIndex: j ? 0 : -1,
      onClick: v,
      onMouseEnter: () => w(!0),
      onMouseLeave: () => w(!1),
      onKeyDown: (_) => {
        j && (_.key === "Enter" || _.key === " ") && (_.preventDefault(), v?.());
      },
      children: [
        R ? /* @__PURE__ */ e.jsx("div", { style: { borderRadius: C, overflow: "hidden", width: "100%", height: "100%" }, children: /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t,
            alt: n,
            width: E,
            height: E,
            loading: "lazy",
            onError: () => S(!0),
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
              borderRadius: C,
              position: "relative"
            },
            children: y ? /* @__PURE__ */ e.jsx("span", { style: { userSelect: "none" }, children: y }) : /* @__PURE__ */ e.jsx(Ct, { size: E * 0.5, strokeWidth: 1.5 })
          }
        ),
        z && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: p,
            style: {
              position: "absolute",
              width: I,
              height: I,
              borderRadius: "50%",
              backgroundColor: W,
              border: "2px solid white",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12)",
              ..._t(u),
              ...k
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
  size: o = "md",
  className: a = "",
  style: l,
  spacing: i = "normal",
  direction: c = "left"
}) => {
  const g = Oe[o], p = De[o], k = t.slice(0, n), u = t.length - n, d = Lt(i, g);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        flexDirection: c === "right" ? "row-reverse" : "row",
        ...l
      },
      className: a,
      "aria-label": `Avatar group with ${t.length} members`,
      role: "group",
      children: [
        k.map((b, s) => {
          const v = c === "left" ? s === 0 : s === k.length - 1, f = c === "left" ? k.length - s : s + 1;
          return /* @__PURE__ */ e.jsx(
            "div",
            {
              style: {
                marginLeft: c === "left" && !v ? d : 0,
                marginRight: c === "right" && !v ? d : 0,
                position: "relative",
                zIndex: f,
                transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
              },
              className: "group-hover:translate-x-1",
              onMouseEnter: (S) => {
                const m = S.currentTarget;
                m.style.transform = `translateY(-2px) ${c === "right" ? "translateX(4px)" : "translateX(-4px)"}`, m.style.zIndex = "100";
              },
              onMouseLeave: (S) => {
                const m = S.currentTarget;
                m.style.transform = "translateY(0) translateX(0)", m.style.zIndex = f.toString();
              },
              children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: {
                    border: "3px solid white",
                    borderRadius: Ye(b.variant || "circular"),
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)"
                  },
                  children: /* @__PURE__ */ e.jsx(
                    At,
                    {
                      ...b,
                      size: o,
                      style: {
                        boxShadow: "none"
                      }
                    }
                  )
                }
              )
            },
            s
          );
        }),
        u > 0 && /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              marginLeft: c === "left" ? d : 0,
              marginRight: c === "right" ? d : 0,
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
              const s = b.currentTarget;
              s.style.transform = "translateY(-2px) scale(1.05)", s.style.background = "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)";
            },
            onMouseLeave: (b) => {
              const s = b.currentTarget;
              s.style.transform = "translateY(0) scale(1)", s.style.background = "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)";
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
  primaryColor: o = "#3b82f6",
  // default blue
  backgroundColor: a = "#fff",
  textColor: l = "#222",
  secondaryColor: i = "#e5e7eb",
  autoplay: c = !1,
  loop: g = !1
}) => {
  const [p, k] = M(null), u = J(null), d = J(null), [b, s] = M(!1), [v, f] = M(0), [S, m] = M(0), [w, E] = M(0.5), [I, $] = M(!1), [C, y] = M(g);
  q(() => {
    u.current && (u.current.volume = w);
  }, [w]), q(() => {
    u.current && (u.current.loop = C);
  }, [C]), q(() => {
    p === null && u.current && (u.current.pause(), s(!1), f(0), m(0));
  }, [p]);
  const W = (x) => {
    if (p === x) {
      if (!u.current) return;
      u.current.paused ? (u.current.play(), s(!0)) : (u.current.pause(), s(!1));
    } else
      k(x), setTimeout(() => {
        u.current?.play(), s(!0);
      }, 100);
  }, O = () => {
    u.current && (f(u.current.currentTime), m(u.current.duration));
  }, z = (x) => {
    if (!u.current) return;
    const T = x.currentTarget.getBoundingClientRect(), U = (x.clientX - T.left) / T.width * S;
    u.current.currentTime = U, f(U);
  }, R = (x) => {
    if (u.current) {
      let T = u.current.currentTime + x;
      T = Math.min(Math.max(T, 0), S), u.current.currentTime = T, f(T);
    }
  }, j = () => {
    d.current && (I ? document.exitFullscreen?.() : d.current.requestFullscreen?.(), $(!I));
  }, _ = () => {
    E((x) => x > 0 ? 0 : 0.5);
  }, N = (x) => {
    if (isNaN(x)) return "0:00";
    const T = Math.floor(x / 60), F = Math.floor(x % 60);
    return `${T}:${F < 10 ? "0" : ""}${F}`;
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
            children: t.map(({ src: x, title: T, thumbnail: F }, H) => {
              const U = p === H && b;
              return /* @__PURE__ */ e.jsxs(
                "li",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px",
                    borderRadius: "10px",
                    backgroundColor: U ? o : i,
                    color: U ? "#fff" : l,
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                  },
                  onClick: () => W(H),
                  tabIndex: 0,
                  role: "button",
                  "aria-pressed": U,
                  onKeyDown: (r) => {
                    (r.key === "Enter" || r.key === " ") && W(H);
                  },
                  "aria-label": `${U ? "Pause" : "Play"} ${T}`,
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "span",
                      {
                        style: {
                          fontWeight: "600",
                          fontSize: "1rem"
                        },
                        children: T
                      }
                    ),
                    U ? /* @__PURE__ */ e.jsx(se, { size: 24, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(oe, { size: 24, "aria-hidden": "true" })
                  ]
                },
                H
              );
            })
          }
        ),
        p !== null && /* @__PURE__ */ e.jsxs(
          "article",
          {
            ref: d,
            style: {
              marginTop: "24px",
              padding: "12px",
              borderRadius: "12px",
              backgroundColor: i,
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
                  autoPlay: c,
                  loop: C,
                  onTimeUpdate: O,
                  onEnded: () => s(!1),
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
                        onClick: () => R(-10),
                        "aria-label": "Skip back 10 seconds",
                        style: te(l, o),
                        children: /* @__PURE__ */ e.jsx(he, { size: 20 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => {
                          u.current && (b ? u.current.pause() : u.current.play(), s(!b));
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
                        onClick: () => R(10),
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
                        children: N(v)
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        onClick: z,
                        role: "slider",
                        "aria-valuemin": 0,
                        "aria-valuemax": S,
                        "aria-valuenow": v,
                        tabIndex: 0,
                        onKeyDown: (x) => {
                          u.current && (x.key === "ArrowRight" ? R(5) : x.key === "ArrowLeft" && R(-5));
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
                              width: `${v / S * 100 || 0}%`,
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
                        dateTime: `PT${Math.floor(S / 60)}M${Math.floor(
                          S % 60
                        )}S`,
                        style: { minWidth: "40px", fontSize: "0.9rem", color: "#666" },
                        "aria-label": "Total duration",
                        children: [
                          "/ ",
                          N(S)
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
                        onClick: () => y(!C),
                        "aria-label": "Toggle Loop",
                        style: te(
                          C ? o : l,
                          C ? "#e0f2fe" : "transparent"
                        ),
                        children: /* @__PURE__ */ e.jsx(
                          xe,
                          {
                            size: 20,
                            color: C ? o : l,
                            "aria-hidden": "true"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: _,
                        "aria-label": w > 0 ? "Mute" : "Unmute",
                        style: te(l, "transparent"),
                        children: w > 0 ? /* @__PURE__ */ e.jsx(be, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(ye, { size: 20, "aria-hidden": "true" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: j,
                        "aria-label": I ? "Exit Fullscreen" : "Enter Fullscreen",
                        style: te(l, "transparent"),
                        children: I ? /* @__PURE__ */ e.jsx(fe, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(pe, { size: 20, "aria-hidden": "true" })
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
  responsiveColumns: o,
  gap: a = "10px",
  layout: l = "grid",
  lightbox: i = !0,
  autoPlay: c = !1,
  loop: g = !1,
  muted: p = !1,
  controls: k = !0,
  className: u = ""
}) => {
  const [d, b] = M(null), [s, v] = M(
    typeof window < "u" ? window.innerWidth : 1024
  ), [f, S] = M(n);
  q(() => {
    function C() {
      const y = window.innerWidth;
      if (v(y), !o) {
        S(n);
        return;
      }
      y < 640 ? S(o.mobile ?? n) : y < 1024 ? S(o.tablet ?? n) : S(o.desktop ?? n);
    }
    if (typeof window < "u")
      return C(), window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, [n, o]);
  const m = () => b(null), w = (C) => {
    C.stopPropagation(), d !== null && b((d - 1 + t.length) % t.length);
  }, E = (C) => {
    C.stopPropagation(), d !== null && b((d + 1) % t.length);
  }, I = ({
    src: C,
    poster: y,
    autoPlay: W = !1,
    loop: O = !1,
    muted: z = !1,
    controls: R = !1,
    width: j = "100%",
    height: _ = "150px",
    borderRadius: N = "12px",
    backgroundColor: x = "#1e1e1e",
    primaryColor: T = "#ff4081",
    padding: F = "16px",
    className: H,
    onClick: U
  }) => {
    const r = J(null), h = J(null), [L, B] = M(W), [Y, A] = M(0), [D, G] = M(0), [P, K] = M(z ? 0 : 0.5), [Z, le] = M(z), [ae, Be] = M(!1), [ce, He] = M(O);
    q(() => {
      r.current && (r.current.volume = P, r.current.loop = ce, r.current.muted = Z);
    }, [P, ce, Z]);
    const Ue = () => {
      r.current && (L ? r.current.pause() : r.current.play(), B(!L));
    }, Ce = () => {
      r.current && (A(r.current.currentTime), G(r.current.duration));
    }, Ve = (Q) => {
      if (!r.current || !Q.currentTarget) return;
      const de = Q.currentTarget.getBoundingClientRect(), Ie = (Q.clientX - de.left) / de.width * D;
      r.current.currentTime = Ie, A(Ie);
    }, ze = (Q) => {
      r.current && (r.current.currentTime += Q);
    }, Xe = () => {
      h.current && (ae ? document.exitFullscreen?.() : h.current.requestFullscreen?.(), Be(!ae));
    }, qe = () => {
      Z ? (le(!1), P === 0 && K(0.5)) : (le(!0), K(0));
    }, Re = (Q) => {
      if (isNaN(Q)) return "0:00";
      const de = Math.floor(Q / 60), me = Math.floor(Q % 60);
      return `${de}:${me < 10 ? "0" : ""}${me}`;
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: h,
        onClick: U,
        className: H,
        style: {
          position: "relative",
          width: j,
          backgroundColor: x,
          borderRadius: N,
          color: "#fff",
          overflow: "hidden",
          padding: F,
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
              src: C,
              poster: y,
              autoPlay: W,
              loop: O,
              muted: z,
              controls: R,
              onTimeUpdate: Ce,
              onLoadedMetadata: Ce,
              style: {
                width: "100%",
                height: _,
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
                    onClick: Ue,
                    style: {
                      background: T,
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
                      /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: Re(Y) }),
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
                          width: `${Y / D * 100 || 0}%`,
                          height: "100%",
                          background: T,
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
                      onClick: () => He(!ce),
                      "aria-label": "Toggle Loop",
                      type: "button",
                      children: /* @__PURE__ */ e.jsx(
                        xe,
                        {
                          size: 18,
                          color: ce ? T : void 0
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: qe,
                      "aria-label": Z ? "Unmute" : "Mute",
                      type: "button",
                      children: Z ? /* @__PURE__ */ e.jsx(ye, { size: 18 }) : /* @__PURE__ */ e.jsx(be, { size: 18 })
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
  }, $ = () => s < 640 ? "120px" : s < 1024 ? "150px" : "180px";
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${u}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${l === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${f}, 1fr)`,
          gap: a
        },
        children: t.map((C, y) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "relative",
              overflow: "hidden",
              borderRadius: 12,
              cursor: i ? "pointer" : "default"
            },
            onClick: () => i && b(y),
            children: /* @__PURE__ */ e.jsx(
              I,
              {
                src: C.src,
                poster: C.poster,
                autoPlay: c,
                loop: g,
                muted: p,
                controls: k,
                height: $(),
                borderRadius: "12px",
                padding: "8px",
                primaryColor: "#ff4081",
                onClick: (W) => W.stopPropagation()
              }
            )
          },
          y
        ))
      }
    ),
    i && d !== null && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: m,
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
              onClick: w,
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
            I,
            {
              src: t[d].src,
              poster: t[d].poster,
              autoPlay: !0,
              controls: !0,
              muted: p,
              width: "80vw",
              height: "45vw",
              borderRadius: "16px",
              padding: "16px",
              primaryColor: "#ff4081",
              onClick: (C) => C.stopPropagation()
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
              onClick: m,
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
  gap: o = "10px",
  layout: a = "grid",
  lightbox: l = !0,
  className: i = ""
}) => {
  const [c, g] = M(null), [p, k] = M(n), [u, d] = M(null), [b, s] = M(0);
  q(() => {
    const m = () => {
      window.innerWidth < 640 ? k(1) : window.innerWidth < 1024 ? k(Math.min(2, n)) : k(n);
    };
    return m(), window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, [n]);
  const v = () => g(null), f = (m) => {
    m.stopPropagation(), c !== null && (d("prev"), g((w) => (w - 1 + t.length) % t.length), s((w) => w + 1));
  }, S = (m) => {
    m.stopPropagation(), c !== null && (d("next"), g((w) => (w + 1) % t.length), s((w) => w + 1));
  };
  return /* @__PURE__ */ e.jsxs("div", { style: { width: "100%" }, className: i, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: `repeat(${p}, 1fr)`,
          gap: o,
          gridAutoFlow: a === "masonry" ? "dense" : "row"
        },
        children: t.map((m, w) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "relative",
              overflow: "hidden",
              borderRadius: "8px",
              cursor: l ? "pointer" : "default"
            },
            onClick: () => {
              g(w), d(null);
            },
            children: /* @__PURE__ */ e.jsx(
              _e,
              {
                src: m.src,
                alt: m.alt || "Gallery Image",
                lazyLoad: !0,
                hoverScale: 1.05,
                transitionDuration: "0.3s",
                style: {
                  display: "block",
                  width: "100%",
                  height: "auto"
                }
              }
            )
          },
          w
        ))
      }
    ),
    l && c !== null && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: v,
        style: {
          position: "fixed",
          inset: "0",
          background: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        },
        role: "dialog",
        "aria-modal": "true",
        children: [
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "90%",
                maxHeight: "90%"
              },
              onClick: (m) => m.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: f,
                    "aria-label": "Previous image",
                    style: {
                      position: "absolute",
                      left: "-50px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "white",
                      background: "rgba(0,0,0,0.5)",
                      border: "none",
                      padding: "10px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      zIndex: 2
                    },
                    children: /* @__PURE__ */ e.jsx(ke, { size: 32 })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      animation: u === "next" ? "slideInFromRight 0.4s ease" : u === "prev" ? "slideInFromLeft 0.4s ease" : "fadeIn 0.3s ease"
                    },
                    children: /* @__PURE__ */ e.jsx(
                      _e,
                      {
                        src: t[c].src,
                        alt: t[c].alt || "Preview",
                        lazyLoad: !0,
                        style: {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain"
                        }
                      }
                    )
                  },
                  b
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: S,
                    "aria-label": "Next image",
                    style: {
                      position: "absolute",
                      right: "0px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "white",
                      background: "rgba(0,0,0,0.5)",
                      border: "none",
                      padding: "10px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      zIndex: 2
                    },
                    children: /* @__PURE__ */ e.jsx(Se, { size: 28 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: v,
              "aria-label": "Close preview",
              style: {
                position: "absolute",
                top: "20px",
                right: "20px",
                color: "white",
                background: "rgba(0,0,0,0.5)",
                border: "none",
                padding: "10px",
                borderRadius: "50%",
                cursor: "pointer"
              },
              children: /* @__PURE__ */ e.jsx(ie, { size: 28 })
            }
          ),
          /* @__PURE__ */ e.jsx("style", { children: `
      @keyframes slideInFromRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideInFromLeft {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    ` })
        ]
      }
    )
  ] });
};
export {
  Xt as Accordation,
  rr as Alert,
  ir as AudioGallery,
  Ut as AudioPlayer,
  At as Avatar,
  or as AvatarGroup,
  nr as Badge,
  Nt as Button,
  Qt as Card,
  qt as CheckRadio,
  Vt as Container,
  Jt as Drawer,
  Gt as DrawerButton,
  Kt as Dropdown,
  tr as Flexbox,
  er as GridView,
  _e as Image,
  ar as ImageGallery,
  Ft as Input,
  Dt as LeftTabs,
  Ot as List,
  sr as Modal,
  Bt as RightTabs,
  Zt as Table,
  Wt as Text,
  Yt as TopTabs,
  lr as VideoGallery,
  Ht as VideoPlayer
};
