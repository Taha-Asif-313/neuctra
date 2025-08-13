import We, { useMemo as ie, forwardRef as Oe, createElement as Fe, useRef as ee, useState as S, useImperativeHandle as jt, useEffect as K, useCallback as Xe } from "react";
var Ce = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function wt() {
  if (qe) return me;
  qe = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(d, i, s) {
    var u = null;
    if (s !== void 0 && (u = "" + s), i.key !== void 0 && (u = "" + i.key), "key" in i) {
      s = {};
      for (var f in i)
        f !== "key" && (s[f] = i[f]);
    } else s = i;
    return i = s.ref, {
      $$typeof: t,
      type: d,
      key: u,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return me.Fragment = r, me.jsx = o, me.jsxs = o, me;
}
var ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function kt() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && function() {
    function t(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === R ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case h:
          return "Fragment";
        case y:
          return "Profiler";
        case z:
          return "StrictMode";
        case _:
          return "Suspense";
        case C:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case j:
            return "Portal";
          case E:
            return (n.displayName || "Context") + ".Provider";
          case v:
            return (n._context.displayName || "Context") + ".Consumer";
          case M:
            var b = n.render;
            return n = n.displayName, n || (n = b.displayName || b.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case m:
            return b = n.displayName || null, b !== null ? b : t(n.type) || "Memo";
          case W:
            b = n._payload, n = n._init;
            try {
              return t(n(b));
            } catch {
            }
        }
      return null;
    }
    function r(n) {
      return "" + n;
    }
    function o(n) {
      try {
        r(n);
        var b = !1;
      } catch {
        b = !0;
      }
      if (b) {
        b = console;
        var F = b.error, V = typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return F.call(
          b,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          V
        ), r(n);
      }
    }
    function d(n) {
      if (n === h) return "<>";
      if (typeof n == "object" && n !== null && n.$$typeof === W)
        return "<...>";
      try {
        var b = t(n);
        return b ? "<" + b + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var n = I.A;
      return n === null ? null : n.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function u(n) {
      if (w.call(n, "key")) {
        var b = Object.getOwnPropertyDescriptor(n, "key").get;
        if (b && b.isReactWarning) return !1;
      }
      return n.key !== void 0;
    }
    function f(n, b) {
      function F() {
        a || (a = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          b
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(n, "key", {
        get: F,
        configurable: !0
      });
    }
    function x() {
      var n = t(this.type);
      return T[n] || (T[n] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), n = this.props.ref, n !== void 0 ? n : null;
    }
    function k(n, b, F, V, D, $, O, G) {
      return F = $.ref, n = {
        $$typeof: c,
        type: n,
        key: b,
        props: $,
        _owner: D
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(n, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(n, "ref", { enumerable: !1, value: null }), n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(n, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(n, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(n, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    }
    function l(n, b, F, V, D, $, O, G) {
      var L = b.children;
      if (L !== void 0)
        if (V)
          if (P(L)) {
            for (V = 0; V < L.length; V++)
              p(L[V]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(L);
      if (w.call(b, "key")) {
        L = t(n);
        var te = Object.keys(b).filter(function(oe) {
          return oe !== "key";
        });
        V = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", U[L + V] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          V,
          L,
          te,
          L
        ), U[L + V] = !0);
      }
      if (L = null, F !== void 0 && (o(F), L = "" + F), u(b) && (o(b.key), L = "" + b.key), "key" in b) {
        F = {};
        for (var re in b)
          re !== "key" && (F[re] = b[re]);
      } else F = b;
      return L && f(
        F,
        typeof n == "function" ? n.displayName || n.name || "Unknown" : n
      ), k(
        n,
        L,
        $,
        D,
        i(),
        F,
        O,
        G
      );
    }
    function p(n) {
      typeof n == "object" && n !== null && n.$$typeof === c && n._store && (n._store.validated = 1);
    }
    var g = We, c = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), E = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), R = Symbol.for("react.client.reference"), I = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, P = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(n) {
        return n();
      }
    };
    var a, T = {}, N = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), H = B(d(s)), U = {};
    ve.Fragment = h, ve.jsx = function(n, b, F, V, D) {
      var $ = 1e4 > I.recentlyCreatedOwnerStacks++;
      return l(
        n,
        b,
        F,
        !1,
        V,
        D,
        $ ? Error("react-stack-top-frame") : N,
        $ ? B(d(n)) : H
      );
    }, ve.jsxs = function(n, b, F, V, D) {
      var $ = 1e4 > I.recentlyCreatedOwnerStacks++;
      return l(
        n,
        b,
        F,
        !0,
        V,
        D,
        $ ? Error("react-stack-top-frame") : N,
        $ ? B(d(n)) : H
      );
    };
  }()), ve;
}
var Je;
function St() {
  return Je || (Je = 1, process.env.NODE_ENV === "production" ? Ce.exports = wt() : Ce.exports = kt()), Ce.exports;
}
var e = St();
const Sr = ({
  as: t = "p",
  children: r,
  className: o = "",
  href: d,
  target: i,
  rel: s,
  // Style
  color: u = "#333",
  bgColor: f,
  fontSize: x = "16px",
  fontWeight: k = "normal",
  textAlign: l = "left",
  textTransform: p = "none",
  lineHeight: g = "normal",
  letterSpacing: c = "normal",
  maxWidth: j,
  padding: h,
  margin: z,
  borderRadius: y,
  boxShadow: v,
  shadowColor: E = "rgba(0,0,0,0.1)",
  wordBreak: M = "normal",
  // Text styles
  italic: _ = !1,
  bold: C = !1,
  underline: m = !1,
  strikethrough: W = !1,
  selectable: Y = !0,
  truncate: R = !1,
  // Hover & Active
  hoverColor: I,
  hoverBgColor: w,
  hoverTextDecoration: P,
  activeColor: B,
  activeBgColor: a,
  transitionDuration: T = "0.25s",
  // Event
  onClick: N
}) => {
  const H = ie(() => {
    const $ = [];
    return m && $.push("underline"), W && $.push("line-through"), $.join(" ") || "none";
  }, [m, W]), U = {
    color: u,
    backgroundColor: f || "transparent",
    fontSize: x,
    fontWeight: C ? "bold" : k,
    textAlign: l,
    textTransform: p,
    lineHeight: g,
    letterSpacing: c,
    maxWidth: j,
    padding: h,
    margin: z,
    borderRadius: y,
    textDecoration: H,
    fontStyle: _ ? "italic" : "normal",
    wordBreak: M,
    boxShadow: v || (E ? `0 1px 4px ${E}` : void 0),
    cursor: N || d ? "pointer" : "default",
    userSelect: Y ? "text" : "none",
    transition: `all ${T} ease-in-out`,
    overflow: R ? "hidden" : void 0,
    whiteSpace: R ? "nowrap" : void 0,
    textOverflow: R ? "ellipsis" : void 0
  }, D = {
    className: o,
    style: U,
    onClick: N,
    onMouseEnter: ($) => {
      const O = $.currentTarget;
      I && (O.style.color = I), w && (O.style.backgroundColor = w), P && (O.style.textDecoration = P);
    },
    onMouseLeave: ($) => {
      const O = $.currentTarget;
      O.style.color = u, O.style.backgroundColor = f || "transparent", O.style.textDecoration = H;
    },
    onMouseDown: ($) => {
      const O = $.currentTarget;
      B && (O.style.color = B), a && (O.style.backgroundColor = a);
    },
    onMouseUp: ($) => {
      const O = $.currentTarget;
      O.style.color = I || u, O.style.backgroundColor = w || f || "transparent";
    }
  };
  return t === "a" || d ? /* @__PURE__ */ e.jsx(
    "a",
    {
      ...D,
      href: d,
      target: i,
      rel: s || (i === "_blank" ? "noopener noreferrer" : void 0),
      children: r
    }
  ) : /* @__PURE__ */ e.jsx(t, { ...D, children: r });
}, Ke = ({
  src: t,
  alt: r = "Image",
  width: o = "100%",
  height: d = "auto",
  borderRadius: i = "8px",
  borderColor: s = "transparent",
  borderStyle: u = "solid",
  borderWidth: f = "0px",
  shadow: x = !1,
  boxShadow: k,
  opacity: l = 1,
  objectFit: p = "cover",
  overlayText: g,
  overlayColor: c = "rgba(0, 0, 0, 0.5)",
  svgIcon: j,
  responsive: h = !1,
  padding: z,
  margin: y,
  lazyLoad: v = !1,
  hoverOpacity: E,
  hoverShadow: M = !1,
  hoverScale: _,
  hoverRotate: C,
  transitionDuration: m = "0.3s",
  overflow: W = "hidden",
  className: Y,
  style: R,
  onClick: I
}) => {
  const w = {
    width: h ? "100%" : o,
    height: h ? "100%" : d,
    borderRadius: i,
    border: `${f} ${u} ${s}`,
    objectFit: p,
    opacity: l,
    boxShadow: x ? k || "0 4px 12px rgba(0,0,0,0.15)" : "none",
    transition: `all ${m} ease`,
    display: "block"
  }, P = (T) => {
    T.currentTarget.style.opacity = E !== void 0 ? E.toString() : w.opacity?.toString() || "1", T.currentTarget.style.boxShadow = M ? "0 8px 20px rgba(0,0,0,0.3)" : w.boxShadow?.toString() || "none", T.currentTarget.style.transform = `scale(${_ || 1}) rotate(${C || 0}deg)`;
  }, B = (T) => {
    T.currentTarget.style.opacity = w.opacity?.toString() || "1", T.currentTarget.style.boxShadow = w.boxShadow?.toString() || "none", T.currentTarget.style.transform = "scale(1) rotate(0deg)";
  }, a = (() => {
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
      "aria-label": r,
      onClick: I,
      className: Y,
      style: {
        width: h ? "100%" : o,
        height: h ? "auto" : d,
        padding: z,
        margin: y,
        position: "relative",
        cursor: I ? "pointer" : "default",
        display: "inline-block",
        transition: `all ${m} ease`,
        ...a,
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
            alt: r,
            loading: v ? "lazy" : "eager",
            style: w,
            onMouseEnter: P,
            onMouseLeave: B
          }
        ),
        g && /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: c,
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
            children: g
          }
        )
      ]
    }
  );
}, Tr = ({
  children: t,
  type: r = "button",
  onClick: o,
  iconBefore: d,
  iconAfter: i,
  className: s = "",
  style: u,
  // ✅ NEW
  fullWidth: f = !1,
  disabled: x = !1,
  loading: k = !1,
  loadingText: l = "Loading...",
  paddingHorizontal: p = 30,
  paddingVertical: g = 8,
  fontSize: c = "16px",
  fontWeight: j = 400,
  borderRadius: h = 6,
  backgroundColor: z = "#02b314",
  textColor: y = "white",
  borderColor: v = "transparent",
  hoverBgColor: E = "transparent",
  hoverTextColor: M = "black",
  hoverBorderColor: _,
  boxShadow: C = "0 1px 2px rgba(0, 0, 0, 0.05)"
}) => {
  const [m, W] = We.useState(!1), Y = m && !x && M || y, R = m && !x && _ || v, I = m && !x ? E : z, w = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${g}px ${p}px`,
    fontSize: c,
    fontWeight: j,
    borderRadius: `${h}px`,
    width: f ? "100%" : "auto",
    color: Y,
    border: `1px solid ${R}`,
    backgroundColor: I,
    boxShadow: C,
    cursor: x ? "not-allowed" : "pointer",
    opacity: x ? 0.6 : 1,
    transition: "all 0.2s ease-in-out",
    gap: "8px",
    ...u
    // ✅ Apply user-supplied inline styles last
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: r,
      className: s,
      style: w,
      onClick: !x && !k ? o : void 0,
      disabled: x,
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
          /* @__PURE__ */ e.jsx("span", { children: l })
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          d && /* @__PURE__ */ e.jsx("span", { children: d }),
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
const Tt = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), zt = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, o, d) => d ? d.toUpperCase() : o.toLowerCase()
), Ze = (t) => {
  const r = zt(t);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, rt = (...t) => t.filter((r, o, d) => !!r && r.trim() !== "" && d.indexOf(r) === o).join(" ").trim(), Ct = (t) => {
  for (const r in t)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
};
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Rt = {
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
const Mt = Oe(
  ({
    color: t = "currentColor",
    size: r = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: d,
    className: i = "",
    children: s,
    iconNode: u,
    ...f
  }, x) => Fe(
    "svg",
    {
      ref: x,
      ...Rt,
      width: r,
      height: r,
      stroke: t,
      strokeWidth: d ? Number(o) * 24 / Number(r) : o,
      className: rt("lucide", i),
      ...!s && !Ct(f) && { "aria-hidden": "true" },
      ...f
    },
    [
      ...u.map(([k, l]) => Fe(k, l)),
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
const X = (t, r) => {
  const o = Oe(
    ({ className: d, ...i }, s) => Fe(Mt, {
      ref: s,
      iconNode: r,
      className: rt(
        `lucide-${Tt(Ze(t))}`,
        `lucide-${t}`,
        d
      ),
      ...i
    })
  );
  return o.displayName = Ze(t), o;
};
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = [
  ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2", key: "12ruh7" }],
  ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }]
], $t = X("captions", It);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Be = X("chevron-left", Et);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _t = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], De = X("chevron-right", _t);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Lt = X("circle-alert", Pt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Nt = X("circle-check-big", At);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ft = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Wt = X("download", Ft);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = [
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
], Bt = X("eye-off", Ot);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Yt = X("eye", Dt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], Ht = X("info", Vt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
], Xt = X("loader", Ut);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], Re = X("maximize", qt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
], Me = X("minimize", Gt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], je = X("pause", Jt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = [
  ["path", { d: "M2 10h6V4", key: "zwrco" }],
  ["path", { d: "m2 4 6 6", key: "ug085t" }],
  ["path", { d: "M21 10V7a2 2 0 0 0-2-2h-7", key: "git5jr" }],
  ["path", { d: "M3 14v2a2 2 0 0 0 2 2h3", key: "1f7fh3" }],
  ["rect", { x: "12", y: "14", width: "10", height: "7", rx: "1", key: "1wjs3o" }]
], Zt = X("picture-in-picture", Kt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], ge = X("play", Qt);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], Ie = X("rotate-ccw", er);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], rr = X("settings", tr);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
], or = X("share-2", nr);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = [
  [
    "path",
    {
      d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
      key: "15892j"
    }
  ],
  ["path", { d: "M3 20V4", key: "1ptbpl" }]
], $e = X("skip-back", sr);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = [
  ["path", { d: "M21 4v16", key: "7j8fe9" }],
  [
    "path",
    {
      d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "zs4d6"
    }
  ]
], Ee = X("skip-forward", ir);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], lr = X("triangle-alert", ar);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], dr = X("user", cr);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }]
], pr = X("volume-1", ur);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], _e = X("volume-2", xr);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], we = X("volume-x", fr);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ke = X("x", hr), zr = Oe(
  ({
    type: t = "text",
    placeholder: r = "",
    label: o,
    value: d,
    defaultValue: i,
    onChange: s,
    name: u = "",
    disabled: f = !1,
    readOnly: x = !1,
    required: k = !1,
    error: l,
    success: p = !1,
    autoFocus: g = !1,
    iconLeft: c,
    iconRight: j,
    borderColor: h = "#ccc",
    focusBorderColor: z = "#2563eb",
    hoverBorderColor: y = "#4b5563",
    backgroundColor: v = "#ffffff",
    textColor: E = "#111827",
    errorColor: M = "#dc2626",
    successColor: _ = "#16a34a",
    labelColor: C = "#374151",
    size: m = "md",
    radius: W = "6px",
    fontSize: Y = "14px",
    rows: R = 4,
    cols: I,
    maxLength: w,
    resize: P = !0,
    showCharacterCount: B = !0,
    className: a,
    style: T
  }, N) => {
    const H = ee(null), [U, n] = S(i || ""), [b, F] = S(!1);
    jt(N, () => H.current);
    const V = (L) => {
      w && L.target.value.length > w || (n(L.target.value), s && s(u, L.target.value));
    }, D = () => {
      switch (m) {
        case "sm":
          return "6px 12px";
        case "lg":
          return "12px 20px";
        default:
          return "10px 16px";
      }
    }, $ = () => {
      switch (m) {
        case "sm":
          return "13px";
        case "lg":
          return "16px";
        default:
          return Y;
      }
    }, O = l ? M : p ? _ : h, G = {
      width: "100%",
      padding: D(),
      paddingLeft: c ? "40px" : D().split(" ")[1],
      paddingRight: j || t === "password" ? "40px" : D().split(" ")[1],
      border: `1px solid ${O}`,
      borderRadius: W,
      backgroundColor: v,
      color: E,
      fontSize: $(),
      outline: "none",
      resize: t === "textarea" && !P ? "none" : void 0,
      ...T
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: { width: "100%", fontFamily: "sans-serif" },
        className: a,
        children: [
          o && /* @__PURE__ */ e.jsxs(
            "label",
            {
              htmlFor: u,
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
                k && /* @__PURE__ */ e.jsx("span", { style: { color: M }, children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { style: { position: "relative", width: "100%" }, children: [
            c && /* @__PURE__ */ e.jsx(
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
                children: c
              }
            ),
            t === "textarea" ? /* @__PURE__ */ e.jsx(
              "textarea",
              {
                ref: H,
                name: u,
                value: d ?? U,
                onChange: V,
                placeholder: r,
                rows: R,
                cols: I,
                maxLength: w,
                disabled: f,
                readOnly: x,
                autoFocus: g,
                style: G,
                onFocus: (L) => {
                  L.currentTarget.style.borderColor = z;
                },
                onBlur: (L) => {
                  L.currentTarget.style.borderColor = O;
                },
                onMouseEnter: (L) => {
                  L.currentTarget.style.borderColor = y;
                },
                onMouseLeave: (L) => {
                  L.currentTarget.style.borderColor = O;
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: H,
                id: u,
                name: u,
                type: t === "password" ? b ? "text" : "password" : t,
                value: d ?? U,
                onChange: V,
                placeholder: r,
                disabled: f,
                readOnly: x,
                autoFocus: g,
                style: G,
                onFocus: (L) => {
                  L.currentTarget.style.borderColor = z;
                },
                onBlur: (L) => {
                  L.currentTarget.style.borderColor = O;
                },
                onMouseEnter: (L) => {
                  L.currentTarget.style.borderColor = y;
                },
                onMouseLeave: (L) => {
                  L.currentTarget.style.borderColor = O;
                }
              }
            ),
            t === "password" && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => F(!b),
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
                children: b ? /* @__PURE__ */ e.jsx(Bt, { size: 18 }) : /* @__PURE__ */ e.jsx(Yt, { size: 18 })
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
          t === "textarea" && B && w && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                textAlign: "right",
                fontSize: "12px",
                color: "#6b7280",
                marginTop: "4px"
              },
              children: [
                (d ?? U).length,
                "/",
                w
              ]
            }
          ),
          l && /* @__PURE__ */ e.jsx(
            "p",
            {
              style: {
                color: M,
                fontSize: "12px",
                marginTop: "4px",
                lineHeight: "1.3"
              },
              children: l
            }
          )
        ]
      }
    );
  }
), Cr = ({
  title: t,
  titleIcon: r,
  items: o,
  type: d = "unordered",
  bulletColor: i = "#2563eb",
  textColor: s = "#111827",
  backgroundColor: u = "#fff",
  borderColor: f = "#e5e7eb",
  fontSize: x = "15px",
  fontWeight: k = 500,
  borderRadius: l = "12px",
  padding: p = "16px",
  spacing: g = "12px",
  className: c,
  style: j
}) => {
  const h = d === "ordered", z = d === "inline", y = {
    backgroundColor: u,
    borderColor: f,
    color: s,
    borderWidth: f ? "1px" : "0px",
    borderStyle: "solid",
    borderRadius: l,
    padding: p,
    ...j
  }, v = z ? {
    display: "flex",
    gap: g,
    paddingLeft: 0,
    listStyleType: "none",
    margin: 0
  } : {
    listStyleType: h ? "decimal" : "none",
    paddingLeft: h ? "20px" : "0",
    margin: 0
  }, E = h ? "ol" : "ul";
  return /* @__PURE__ */ e.jsxs("div", { className: c, style: y, children: [
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
          r && /* @__PURE__ */ e.jsx("span", { style: { fontSize: "18px" }, children: r }),
          /* @__PURE__ */ e.jsx("span", { children: t })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(E, { style: v, children: o.map((M, _) => /* @__PURE__ */ e.jsx(
      nt,
      {
        ...M,
        bulletColor: i,
        textColor: s,
        fontSize: x,
        fontWeight: k,
        spacing: g,
        isInline: z
      },
      _
    )) })
  ] });
}, nt = ({
  text: t,
  icon: r,
  onClick: o,
  subItems: d,
  bulletColor: i,
  textColor: s,
  fontSize: u,
  fontWeight: f,
  spacing: x,
  isInline: k
}) => {
  const l = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: k ? "0" : x
  }, p = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: u,
    fontWeight: f,
    color: s,
    cursor: o ? "pointer" : "default"
  }, g = {
    width: "8px",
    height: "8px",
    backgroundColor: i,
    borderRadius: "50%",
    flexShrink: 0
  }, c = {
    listStyleType: "disc",
    paddingLeft: "20px",
    margin: 0
  };
  return /* @__PURE__ */ e.jsxs("li", { style: l, children: [
    /* @__PURE__ */ e.jsxs("div", { style: p, onClick: o, children: [
      r ? /* @__PURE__ */ e.jsx("span", { style: { fontSize: "16px", color: s }, children: r }) : !k && /* @__PURE__ */ e.jsx("span", { style: g }),
      /* @__PURE__ */ e.jsx("span", { children: t })
    ] }),
    d && d.length > 0 && /* @__PURE__ */ e.jsx("ul", { style: c, children: d.map((j, h) => /* @__PURE__ */ e.jsx(
      nt,
      {
        ...j,
        bulletColor: i,
        textColor: s,
        fontSize: u,
        fontWeight: f,
        spacing: x,
        isInline: !1
      },
      h
    )) })
  ] });
}, Ye = ({
  tabs: t,
  defaultActive: r = 0,
  tabPosition: o,
  activeTabClassName: d = "",
  inactiveTabClassName: i = "",
  tabContainerClassName: s = "",
  contentContainerClassName: u = "",
  className: f = "",
  activeTabStyle: x,
  inactiveTabStyle: k,
  tabContainerStyle: l,
  contentContainerStyle: p,
  style: g,
  tabsWidth: c = "240px",
  tabGap: j = 8,
  tabPadding: h = "12px 16px",
  tabBorderRadius: z = 12,
  primaryColor: y = "#2563eb",
  textColor: v = "#374151",
  backgroundColor: E = "#ffffff",
  hoverTextColor: M = "#1e40af",
  responsiveBreakpoint: _ = 768,
  showDrawerLabel: C = "Select Tab"
}) => {
  const [m, W] = S(r), [Y, R] = S(null), [I, w] = S(!1), [P, B] = S(!1);
  K(() => {
    const D = () => {
      w(window.innerWidth <= _);
    };
    return D(), window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
  }, [_]);
  const a = o === "left" || o === "right", N = {
    display: "flex",
    flexDirection: a ? I ? "column" : o === "left" ? "row" : "row-reverse" : "column",
    width: "100%",
    height: "100%",
    backgroundColor: E,
    ...a && !I ? {} : { flexWrap: "wrap" },
    ...g
  }, H = {
    width: a && !I ? c : "100%",
    display: "flex",
    flexDirection: a && !I ? "column" : "row",
    justifyContent: !a && o === "top" ? "center" : void 0,
    gap: j,
    padding: 8,
    boxSizing: "border-box",
    ...l
  }, U = {
    flexGrow: 1,
    padding: 24,
    background: "#f9fafb",
    boxSizing: "border-box",
    minWidth: 0,
    ...a && !I ? { width: "calc(100% - " + c + ")" } : { width: "100%" },
    ...p
  }, n = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: h,
    borderRadius: z,
    border: "none",
    backgroundColor: "transparent",
    fontWeight: 500,
    transition: "all 0.2s ease",
    width: a && !I ? "100%" : "auto",
    marginBottom: a && !I ? j : 0,
    marginRight: !a || I ? j : 0,
    justifyContent: "flex-start"
  }, b = {
    backgroundColor: y,
    color: "#fff",
    fontWeight: 700,
    boxShadow: `0 2px 10px ${y}55`,
    ...x
  }, F = {
    backgroundColor: "transparent",
    color: v,
    ...k
  }, V = {
    backgroundColor: `${y}22`,
    color: M
  };
  return /* @__PURE__ */ e.jsxs("div", { className: f, style: N, children: [
    /* @__PURE__ */ e.jsx("style", { children: `
        @media (max-width: ${_}px) {
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
    I && a ? /* @__PURE__ */ e.jsxs("div", { style: { width: "100%", marginBottom: 12 }, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => B(!P),
          style: {
            ...n,
            ...b,
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
      P && /* @__PURE__ */ e.jsx("div", { className: "custom-tab-mobile-drawer", children: t.map((D, $) => {
        const O = $ === m, G = Y === $;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              W($), B(!1);
            },
            onMouseEnter: () => R($),
            onMouseLeave: () => R(null),
            className: O ? d : i,
            style: {
              ...n,
              ...O ? b : F,
              ...G && !O ? V : {}
            },
            children: [
              D.icon && /* @__PURE__ */ e.jsx("span", { children: D.icon }),
              /* @__PURE__ */ e.jsx("span", { children: D.label })
            ]
          },
          $
        );
      }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "nav",
      {
        className: s,
        style: H,
        "aria-label": "Tabs Navigation",
        children: t.map((D, $) => {
          const O = $ === m, G = Y === $;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => W($),
              onMouseEnter: () => R($),
              onMouseLeave: () => R(null),
              className: O ? d : i,
              style: {
                ...n,
                ...O ? b : F,
                ...G && !O ? V : {}
              },
              children: [
                D.icon && /* @__PURE__ */ e.jsx("span", { children: D.icon }),
                /* @__PURE__ */ e.jsx("span", { children: D.label })
              ]
            },
            $
          );
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "section",
      {
        className: u,
        style: U,
        role: "tabpanel",
        children: t[m]?.content
      }
    )
  ] });
}, Rr = (t) => /* @__PURE__ */ e.jsx(Ye, { ...t, tabPosition: "left" }), Mr = (t) => /* @__PURE__ */ e.jsx(Ye, { ...t, tabPosition: "top" }), Ir = (t) => /* @__PURE__ */ e.jsx(Ye, { ...t, tabPosition: "right" }), $r = ({
  src: t,
  poster: r,
  title: o,
  autoPlay: d = !1,
  loop: i = !1,
  muted: s = !1,
  width: u = "100%",
  height: f = "400px",
  borderRadius: x = "16px",
  theme: k = "dark",
  primaryColor: l = "#3b82f6",
  className: p,
  showProgress: g = !0,
  showVolumeSlider: c = !0,
  showSettings: j = !0,
  showDownload: h = !0,
  showShare: z = !0,
  showPiP: y = !0,
  showSubtitles: v = !1,
  showPlaybackSpeed: E = !0,
  showQuality: M = !0,
  previewThumbnails: _ = !1,
  customControls: C = !0,
  hideControlsDelay: m = 3e3,
  seekStep: W = 10,
  volumeStep: Y = 0.1,
  onPlay: R,
  onPause: I,
  onEnded: w,
  onTimeUpdate: P,
  onVolumeChange: B
}) => {
  const a = ee(null), T = ee(null), N = ee(null), H = ee(0), [U, n] = S(d), [b, F] = S(0), [V, D] = S(0), [$, O] = S(s ? 0 : 0.8), [G, L] = S(s), [te, re] = S(!1), [oe, ae] = S(!1), [le, ce] = S(i), [be, Pe] = S(1), [Se, Le] = S("auto"), [de, ue] = S(!0), [pe, Te] = S(!1), [Q, ne] = S(!1), [xe, ye] = S(!1), [at, lt] = S(0), [ct, Ve] = S(!1), [dt, ut] = S(0), q = {
    dark: {
      background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
      controlsBg: "rgba(0, 0, 0, 0.8)",
      text: "#ffffff",
      textSecondary: "#a3a3a3",
      border: "rgba(255, 255, 255, 0.1)",
      hover: "rgba(255, 255, 255, 0.1)"
    },
    light: {
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      controlsBg: "rgba(255, 255, 255, 0.95)",
      text: "#212529",
      textSecondary: "#6c757d",
      border: "rgba(0, 0, 0, 0.1)",
      hover: "rgba(0, 0, 0, 0.05)"
    },
    glass: {
      background: "rgba(255, 255, 255, 0.1)",
      controlsBg: "rgba(255, 255, 255, 0.1)",
      text: "#ffffff",
      textSecondary: "#a3a3a3",
      border: "rgba(255, 255, 255, 0.2)",
      hover: "rgba(255, 255, 255, 0.2)"
    },
    neon: {
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 100%)",
      controlsBg: "rgba(139, 69, 19, 0.8)",
      text: "#00ffff",
      textSecondary: "#ff00ff",
      border: "rgba(0, 255, 255, 0.3)",
      hover: "rgba(255, 0, 255, 0.2)"
    }
  }[k], ze = Xe(() => {
    H.current && clearTimeout(H.current), H.current = window.setTimeout(() => {
      U && ue(!1);
    }, m);
  }, [U, m]), pt = Xe(() => {
    ue(!0), ze();
  }, [ze]);
  K(() => {
    a.current && (a.current.volume = $, a.current.loop = le, a.current.muted = G, a.current.playbackRate = be);
  }, [$, le, G, be]), K(() => {
    U ? ze() : (H.current && clearTimeout(H.current), ue(!0));
  }, [U, ze]);
  const Ae = () => {
    a.current && (U ? (a.current.pause(), n(!1), I?.()) : (a.current.play().catch(console.error), n(!0), R?.()));
  }, He = () => {
    if (!a.current) return;
    const A = a.current.currentTime, Z = a.current.duration;
    F(A), D(Z), P?.(A);
  }, xt = (A) => {
    if (!a.current || !N.current) return;
    const Z = N.current.getBoundingClientRect(), se = (A.clientX - Z.left) / Z.width * V;
    a.current.currentTime = se, F(se);
  }, ft = (A) => {
    if (!N.current) return;
    const Z = N.current.getBoundingClientRect(), se = (A.clientX - Z.left) / Z.width * V;
    lt(se), ut(A.clientX - Z.left), Ve(!0);
  }, Ue = (A) => {
    a.current && (a.current.currentTime = Math.min(
      Math.max(0, a.current.currentTime + A),
      V
    ));
  }, ht = (A) => {
    const Z = Math.min(Math.max(A, 0), 1);
    O(Z), L(Z === 0), B?.(Z);
  }, gt = async () => {
    if (T.current)
      try {
        te ? document.exitFullscreen && await document.exitFullscreen() : T.current.requestFullscreen && await T.current.requestFullscreen(), re(!te);
      } catch (A) {
        console.error("Fullscreen error:", A);
      }
  }, bt = async () => {
    if (a.current)
      try {
        oe ? document.exitPictureInPicture && await document.exitPictureInPicture() : a.current.requestPictureInPicture && await a.current.requestPictureInPicture(), ae(!oe);
      } catch (A) {
        console.error("Picture-in-Picture error:", A);
      }
  }, yt = () => {
    const A = document.createElement("a");
    A.href = t, A.download = o || "video", A.click();
  }, mt = async () => {
    try {
      navigator.share ? await navigator.share({
        title: o || "Video",
        url: window.location.href
      }) : await navigator.clipboard.writeText(window.location.href);
    } catch (A) {
      console.error("Share error:", A);
    }
  }, Ne = (A) => {
    if (!A || isNaN(A)) return "0:00";
    const Z = Math.floor(A / 3600), fe = Math.floor(A % 3600 / 60), se = Math.floor(A % 60);
    return Z > 0 ? `${Z}:${fe.toString().padStart(2, "0")}:${se.toString().padStart(2, "0")}` : `${fe}:${se.toString().padStart(2, "0")}`;
  }, vt = () => G || $ === 0 ? /* @__PURE__ */ e.jsx(we, { size: 18 }) : $ < 0.3 ? /* @__PURE__ */ e.jsx(we, { size: 18 }) : $ < 0.7 ? /* @__PURE__ */ e.jsx(pr, { size: 18 }) : /* @__PURE__ */ e.jsx(_e, { size: 18 });
  return K(() => () => {
    H.current && clearTimeout(H.current);
  }, []), /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: T,
      className: p,
      style: {
        position: "relative",
        width: u,
        height: f,
        background: q.background,
        borderRadius: x,
        overflow: "hidden",
        boxShadow: k === "glass" ? "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 8px 32px rgba(0, 0, 0, 0.3)" : "0 10px 30px rgba(0, 0, 0, 0.3)",
        backdropFilter: k === "glass" ? "blur(16px)" : "none",
        userSelect: "none",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      },
      onMouseMove: pt,
      onMouseLeave: () => ue(!1),
      children: [
        /* @__PURE__ */ e.jsx(
          "video",
          {
            ref: a,
            src: t,
            poster: r,
            autoPlay: d,
            loop: i,
            muted: s,
            controls: !1,
            onClick: Ae,
            onTimeUpdate: He,
            onLoadedMetadata: He,
            onWaiting: () => ye(!0),
            onCanPlay: () => ye(!1),
            onEnded: () => {
              n(!1), w?.();
            },
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundColor: "#000"
            }
          }
        ),
        xe && /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: q.text,
              animation: "spin 1s linear infinite"
            },
            children: /* @__PURE__ */ e.jsx(Xt, { size: 48 })
          }
        ),
        !U && !xe && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: Ae,
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: `${l}CC`,
              borderRadius: "50%",
              border: "none",
              padding: "24px",
              cursor: "pointer",
              color: "#fff",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
            },
            onMouseEnter: (A) => {
              A.currentTarget.style.transform = "translate(-50%, -50%) scale(1.1)", A.currentTarget.style.background = l;
            },
            onMouseLeave: (A) => {
              A.currentTarget.style.transform = "translate(-50%, -50%) scale(1)", A.currentTarget.style.background = `${l}CC`;
            },
            children: /* @__PURE__ */ e.jsx(ge, { size: 32 })
          }
        ),
        o && de && /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "16px",
              left: "16px",
              right: "16px",
              color: q.text,
              fontSize: "18px",
              fontWeight: "600",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
              opacity: de ? 1 : 0,
              transition: "opacity 0.3s ease"
            },
            children: o
          }
        ),
        C && /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: q.controlsBg,
              backdropFilter: "blur(10px)",
              color: q.text,
              padding: "16px",
              transform: de ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.3s ease"
            },
            children: [
              g && /* @__PURE__ */ e.jsxs(
                "div",
                {
                  style: {
                    marginBottom: "12px",
                    position: "relative"
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        ref: N,
                        onClick: xt,
                        onMouseMove: ft,
                        onMouseLeave: () => Ve(!1),
                        style: {
                          height: "6px",
                          background: "rgba(255, 255, 255, 0.2)",
                          borderRadius: "3px",
                          cursor: "pointer",
                          position: "relative",
                          overflow: "visible"
                        },
                        children: /* @__PURE__ */ e.jsx(
                          "div",
                          {
                            style: {
                              width: `${b / V * 100 || 0}%`,
                              height: "100%",
                              background: l,
                              borderRadius: "3px",
                              position: "relative"
                            },
                            children: /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                style: {
                                  position: "absolute",
                                  right: "-6px",
                                  top: "50%",
                                  width: "12px",
                                  height: "12px",
                                  background: l,
                                  borderRadius: "50%",
                                  transform: "translateY(-50%)",
                                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
                                }
                              }
                            )
                          }
                        )
                      }
                    ),
                    ct && _ && /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          bottom: "12px",
                          left: `${dt}px`,
                          transform: "translateX(-50%)",
                          background: "rgba(0, 0, 0, 0.9)",
                          color: "#fff",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontSize: "12px",
                          whiteSpace: "nowrap"
                        },
                        children: Ne(at)
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
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "12px"
                  },
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          onClick: () => Ue(-W),
                          style: { background: "none", border: "none", color: q.text, cursor: "pointer", padding: "8px" },
                          children: /* @__PURE__ */ e.jsx($e, { size: 20 })
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          onClick: Ae,
                          style: {
                            background: l,
                            borderRadius: "50%",
                            padding: "12px",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          },
                          children: U ? /* @__PURE__ */ e.jsx(je, { size: 20 }) : /* @__PURE__ */ e.jsx(ge, { size: 20 })
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          onClick: () => Ue(W),
                          style: { background: "none", border: "none", color: q.text, cursor: "pointer", padding: "8px" },
                          children: /* @__PURE__ */ e.jsx(Ee, { size: 20 })
                        }
                      ),
                      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", position: "relative" }, children: [
                        /* @__PURE__ */ e.jsx(
                          "button",
                          {
                            onClick: () => L(!G),
                            onMouseEnter: () => c && ne(!0),
                            style: { background: "none", border: "none", color: q.text, cursor: "pointer", padding: "8px" },
                            children: /* @__PURE__ */ e.jsx(vt, {})
                          }
                        ),
                        c && /* @__PURE__ */ e.jsx(
                          "div",
                          {
                            onMouseEnter: () => ne(!0),
                            onMouseLeave: () => ne(!1),
                            style: {
                              position: Q ? "relative" : "absolute",
                              left: Q ? "0" : "40px",
                              bottom: Q ? "0" : "40px",
                              width: Q ? "80px" : "30px",
                              height: Q ? "6px" : "80px",
                              background: "rgba(255, 255, 255, 0.2)",
                              borderRadius: "3px",
                              cursor: "pointer",
                              opacity: Q ? 1 : 0,
                              transition: "all 0.3s ease"
                            },
                            onClick: (A) => {
                              const Z = A.currentTarget.getBoundingClientRect(), fe = (A.clientX - Z.left) / Z.width;
                              ht(fe);
                            },
                            children: /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                style: {
                                  width: `${$ * 100}%`,
                                  height: "100%",
                                  background: l,
                                  borderRadius: "3px"
                                }
                              }
                            )
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { style: { fontSize: "14px", color: q.textSecondary, minWidth: "100px" }, children: [
                        Ne(b),
                        " / ",
                        Ne(V)
                      ] })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                      v && /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          style: { background: "none", border: "none", color: q.text, cursor: "pointer", padding: "8px" },
                          children: /* @__PURE__ */ e.jsx($t, { size: 18 })
                        }
                      ),
                      j && /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          onClick: () => Te(!pe),
                          style: { background: "none", border: "none", color: q.text, cursor: "pointer", padding: "8px" },
                          children: /* @__PURE__ */ e.jsx(rr, { size: 18 })
                        }
                      ),
                      h && /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          onClick: yt,
                          style: { background: "none", border: "none", color: q.text, cursor: "pointer", padding: "8px" },
                          children: /* @__PURE__ */ e.jsx(Wt, { size: 18 })
                        }
                      ),
                      z && /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          onClick: mt,
                          style: { background: "none", border: "none", color: q.text, cursor: "pointer", padding: "8px" },
                          children: /* @__PURE__ */ e.jsx(or, { size: 18 })
                        }
                      ),
                      y && /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          onClick: bt,
                          style: { background: "none", border: "none", color: q.text, cursor: "pointer", padding: "8px" },
                          children: /* @__PURE__ */ e.jsx(Zt, { size: 18 })
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          onClick: () => ce(!le),
                          style: {
                            background: "none",
                            border: "none",
                            color: le ? l : q.text,
                            cursor: "pointer",
                            padding: "8px"
                          },
                          children: /* @__PURE__ */ e.jsx(Ie, { size: 18 })
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          onClick: gt,
                          style: { background: "none", border: "none", color: q.text, cursor: "pointer", padding: "8px" },
                          children: te ? /* @__PURE__ */ e.jsx(Me, { size: 18 }) : /* @__PURE__ */ e.jsx(Re, { size: 18 })
                        }
                      )
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        pe && /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              position: "absolute",
              bottom: "80px",
              right: "16px",
              background: q.controlsBg,
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              padding: "16px",
              minWidth: "200px",
              color: q.text,
              border: `1px solid ${q.border}`,
              opacity: pe ? 1 : 0,
              transform: pe ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease"
            },
            children: [
              E && /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "12px" }, children: [
                /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", marginBottom: "8px", color: q.textSecondary }, children: "Playback Speed" }),
                /* @__PURE__ */ e.jsx("div", { style: { display: "flex", gap: "4px", flexWrap: "wrap" }, children: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((A) => /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    onClick: () => Pe(A),
                    style: {
                      background: be === A ? l : "transparent",
                      border: `1px solid ${q.border}`,
                      borderRadius: "6px",
                      padding: "4px 8px",
                      color: q.text,
                      cursor: "pointer",
                      fontSize: "12px"
                    },
                    children: [
                      A,
                      "x"
                    ]
                  },
                  A
                )) })
              ] }),
              M && /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", marginBottom: "8px", color: q.textSecondary }, children: "Quality" }),
                /* @__PURE__ */ e.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: ["auto", "1080p", "720p", "480p", "360p"].map((A) => /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: () => Le(A),
                    style: {
                      background: Se === A ? l : "transparent",
                      border: "none",
                      borderRadius: "6px",
                      padding: "8px",
                      color: q.text,
                      cursor: "pointer",
                      fontSize: "12px",
                      textAlign: "left"
                    },
                    children: A
                  },
                  A
                )) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx("style", { children: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      ` })
      ]
    }
  );
}, Er = ({
  src: t,
  thumbnail: r,
  autoPlay: o = !1,
  loop: d = !1,
  backgroundColor: i = "#000000",
  primaryColor: s = "#10b981",
  secondaryColor: u = "#ffffff",
  borderRadius: f = "12px",
  padding: x = "16px",
  width: k = "100%",
  className: l
}) => {
  const p = ee(null), g = ee(null), [c, j] = S(o), [h, z] = S(0), [y, v] = S(0), [E, M] = S(0.5), [_, C] = S(!1), [m, W] = S(d);
  K(() => {
    p.current && (p.current.volume = E);
  }, [E]), K(() => {
    p.current && (p.current.loop = m);
  }, [m]);
  const Y = () => {
    p.current && (c ? p.current.pause() : p.current.play(), j(!c));
  }, R = () => {
    p.current && (z(p.current.currentTime), v(p.current.duration));
  }, I = (a) => {
    if (!p.current || !a.currentTarget) return;
    const T = a.currentTarget.getBoundingClientRect(), H = (a.clientX - T.left) / T.width * y;
    p.current.currentTime = H, z(H);
  }, w = (a) => {
    p.current && (p.current.currentTime += a);
  }, P = () => {
    g.current && (_ ? document.exitFullscreen?.() : g.current.requestFullscreen?.(), C(!_));
  }, B = (a) => {
    const T = Math.floor(a / 60), N = Math.floor(a % 60);
    return `${T}:${N < 10 ? "0" : ""}${N}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: g,
      className: l,
      style: {
        position: "relative",
        width: k,
        backgroundColor: i,
        borderRadius: f,
        color: u,
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
            ref: p,
            src: t,
            autoPlay: o,
            loop: d,
            onTimeUpdate: R,
            onLoadedMetadata: R
          }
        ),
        r && /* @__PURE__ */ e.jsx(
          "img",
          {
            src: r,
            alt: "Audio Thumbnail",
            style: {
              width: "100%",
              objectFit: "cover",
              borderRadius: f,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => w(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx($e, { size: 20 }) }),
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
                  "aria-label": c ? "Pause" : "Play",
                  children: c ? /* @__PURE__ */ e.jsx(je, { size: 20 }) : /* @__PURE__ */ e.jsx(ge, { size: 20 })
                }
              ),
              /* @__PURE__ */ e.jsx("button", { onClick: () => w(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(Ee, { size: 20 }) })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", marginRight: "4px" }, children: B(h) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  "/ ",
                  B(y)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: I,
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
                        width: `${h / y * 100 || 0}%`,
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
                        onClick: () => W(!m),
                        "aria-label": "Toggle Loop",
                        children: /* @__PURE__ */ e.jsx(Ie, { size: 18, color: m ? s : void 0 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => M(E > 0 ? 0 : 0.5),
                        "aria-label": "Toggle Mute",
                        children: E > 0 ? /* @__PURE__ */ e.jsx(_e, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("button", { onClick: P, "aria-label": "Toggle Fullscreen", children: _ ? /* @__PURE__ */ e.jsx(Me, { size: 18 }) : /* @__PURE__ */ e.jsx(Re, { size: 18 }) })
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
function J(t, r, o) {
  return t == null ? o : typeof t != "object" ? t : t[r] ?? o;
}
const Qe = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", _r = ({
  display: t = { sm: "block", md: "flex", lg: "grid" },
  flexDirection: r = { sm: "column", md: "row", lg: "row" },
  justifyContent: o = { sm: "flex-start", md: "center", lg: "space-between" },
  alignItems: d = { sm: "stretch", md: "center", lg: "center" },
  gridTemplateColumns: i = { sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
  gridTemplateRows: s = { sm: "auto", md: "auto", lg: "auto" },
  gap: u = { sm: "10px", md: "20px", lg: "30px" },
  rowGap: f,
  columnGap: x,
  width: k = { sm: "100%", md: "90%", lg: "80%" },
  maxWidth: l = { sm: "100%", md: "800px", lg: "1200px" },
  height: p = { sm: "auto", md: "auto", lg: "auto" },
  padding: g = { sm: "10px", md: "20px", lg: "40px" },
  margin: c = { sm: "0 auto", md: "0 auto", lg: "0 auto" },
  textAlign: j = { sm: "left", md: "center", lg: "center" },
  backgroundColor: h = "#fff",
  border: z = { sm: "none", md: "1px solid #ddd", lg: "2px solid #ccc" },
  borderRadius: y = { sm: "0", md: "8px", lg: "12px" },
  boxShadow: v = {
    sm: "none",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 6px 10px rgba(0,0,0,0.15)"
  },
  overflow: E = { sm: "visible", md: "hidden", lg: "auto" },
  children: M,
  className: _,
  style: C
}) => {
  const [m, W] = S(
    () => Qe(window.innerWidth)
  );
  K(() => {
    const R = () => W(Qe(window.innerWidth));
    return window.addEventListener("resize", R), () => window.removeEventListener("resize", R);
  }, []);
  const Y = ie(() => {
    const R = J(t, m, "block"), I = J(
      r,
      m,
      void 0
    ), w = J(
      o,
      m,
      void 0
    ), P = J(
      d,
      m,
      void 0
    ), B = J(
      i,
      m,
      void 0
    ), a = J(
      s,
      m,
      void 0
    ), T = J(u, m, void 0), N = J(f, m, void 0), H = J(
      x,
      m,
      void 0
    ), U = J(k, m, "100%"), n = J(l, m, void 0), b = J(p, m, void 0), F = J(g, m, void 0), V = J(c, m, void 0), D = J(
      j,
      m,
      void 0
    ), $ = J(z, m, void 0), O = J(
      y,
      m,
      void 0
    ), G = J(
      v,
      m,
      void 0
    ), L = J(E, m, void 0);
    return {
      display: R,
      ...I && { flexDirection: I },
      ...w && { justifyContent: w },
      ...P && { alignItems: P },
      ...B && {
        gridTemplateColumns: B
      },
      ...a && {
        gridTemplateRows: a
      },
      ...T && { gap: T },
      ...N && { rowGap: N },
      ...H && { columnGap: H },
      width: U,
      ...n && { maxWidth: n },
      ...b && { height: b },
      ...F && { padding: F },
      ...V && { margin: V },
      ...D && { textAlign: D },
      backgroundColor: h,
      ...$ && { border: $ },
      ...O && { borderRadius: O },
      ...G && { boxShadow: G },
      ...L && { overflow: L },
      boxSizing: "border-box",
      ...C
    };
  }, [
    m,
    t,
    r,
    o,
    d,
    i,
    s,
    u,
    f,
    x,
    k,
    l,
    p,
    g,
    c,
    j,
    h,
    z,
    y,
    v,
    E,
    C
  ]);
  return /* @__PURE__ */ e.jsx("div", { className: _, style: Y, children: M });
}, Pr = ({
  items: t,
  allowMultiple: r = !1,
  defaultOpenIndex: o = [],
  borderColor: d = "#d1d5db",
  backgroundColor: i = "#ffffff",
  textColor: s = "#111827",
  hoverBgColor: u = "#f3f4f6",
  hoverTextColor: f = "#111827",
  paddingVertical: x = "16px",
  paddingHorizontal: k = "16px",
  margin: l = "12px 0",
  iconOpen: p = "−",
  iconClose: g = "+",
  transitionDuration: c = "300ms",
  borderRadius: j = "8px",
  shadow: h = "0 2px 8px rgba(0, 0, 0, 0.05)",
  contentPadding: z = "16px",
  fontSize: y = "16px",
  fontWeight: v = "600",
  iconSize: E = "18px",
  contentFontSize: M = "14px",
  contentFontWeight: _ = "400",
  contentBackgroundColor: C = "#ffffff",
  contentTextColor: m = "#111827",
  className: W,
  style: Y
}) => {
  const [R, I] = S(o), w = ee([]), P = ee([]);
  K(() => {
    w.current.forEach((a, T) => {
      a && (a.style.maxHeight = R.includes(T) ? `${a.scrollHeight}px` : "0px");
    });
  }, [R]);
  const B = (a) => {
    I(
      (T) => r ? T.includes(a) ? T.filter((N) => N !== a) : [...T, a] : T.includes(a) ? [] : [a]
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: W, style: { width: "100%", ...Y }, children: t.map((a, T) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        border: `1px solid ${d}`,
        borderRadius: j,
        margin: l,
        boxShadow: h,
        overflow: "hidden",
        transition: `all ${c} ease`
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: (N) => {
              P.current[T] = N;
            },
            onClick: () => B(T),
            style: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: i,
              color: s,
              padding: `${x} ${k}`,
              fontWeight: v,
              fontSize: y,
              cursor: "pointer",
              outline: "none",
              border: "none",
              transition: `all ${c}`
            },
            onMouseEnter: (N) => {
              N.currentTarget.style.backgroundColor = u, N.currentTarget.style.color = f;
            },
            onMouseLeave: (N) => {
              N.currentTarget.style.backgroundColor = i, N.currentTarget.style.color = s;
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: a.title }),
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: E }, children: R.includes(T) ? p : g })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: (N) => {
              w.current[T] = N;
            },
            style: {
              overflow: "hidden",
              maxHeight: R.includes(T) ? `${w.current[T]?.scrollHeight}px` : "0px",
              transition: `max-height ${c} ease-in-out`
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                style: {
                  borderTop: `1px solid ${d}`,
                  backgroundColor: C,
                  color: m,
                  padding: z,
                  fontSize: M,
                  fontWeight: _
                },
                children: a.content
              }
            )
          }
        )
      ]
    },
    T
  )) });
}, Lr = ({
  type: t,
  name: r,
  options: o,
  selectedValues: d,
  onChange: i,
  disabled: s = !1,
  readOnly: u = !1,
  required: f = !1,
  error: x,
  className: k = "",
  customIcon: l,
  style: p,
  labelStyle: g,
  iconSize: c = 20,
  iconCheckedBgColor: j = "#2563eb",
  // blue-600
  iconUncheckedBorderColor: h = "#9ca3af",
  // gray-400
  textColor: z = "#374151",
  // gray-700
  errorStyle: y
}) => {
  const v = t === "checkbox", E = (M) => {
    if (i)
      if (v) {
        const _ = Array.isArray(d) ? d.includes(M) ? d.filter((C) => C !== M) : [...d, M] : [M];
        i(_);
      } else
        i(M);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: k,
      style: { display: "flex", flexDirection: "column", gap: 8, ...p },
      role: t,
      "aria-disabled": s,
      children: [
        o.map((M) => {
          const _ = v ? Array.isArray(d) && d.includes(M.value) : d === M.value;
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
                ...g
              },
              children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: t,
                    name: r,
                    value: M.value,
                    checked: _,
                    disabled: s || u,
                    required: f,
                    onChange: () => E(M.value),
                    style: { display: "none" }
                  }
                ),
                l ? l(_) : /* @__PURE__ */ e.jsxs(
                  "span",
                  {
                    style: {
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: c,
                      height: c,
                      borderRadius: v ? 4 : "50%",
                      border: `2px solid ${_ ? j : h}`,
                      backgroundColor: _ ? j : "transparent",
                      transition: "all 0.2s ease",
                      flexShrink: 0
                    },
                    children: [
                      _ && !v && /* @__PURE__ */ e.jsx(
                        "span",
                        {
                          style: {
                            width: c / 2,
                            height: c / 2,
                            borderRadius: "50%",
                            backgroundColor: "white"
                          }
                        }
                      ),
                      _ && v && /* @__PURE__ */ e.jsx(
                        "svg",
                        {
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "white",
                          strokeWidth: 3,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          style: { width: c * 0.6, height: c * 0.6 },
                          children: /* @__PURE__ */ e.jsx("polyline", { points: "20 6 9 17 4 12" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { style: { color: z, fontSize: 14 }, children: M.label })
              ]
            },
            M.value
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
              ...y
            },
            children: x
          }
        )
      ]
    }
  );
}, Ar = ({
  label: t = "Open Drawer",
  icon: r,
  iconPosition: o = "left",
  onClick: d,
  style: i = {}
}) => /* @__PURE__ */ e.jsxs(
  "button",
  {
    onClick: d,
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
      r && o === "left" && r,
      t,
      r && o === "right" && r
    ]
  }
), Nr = ({
  open: t,
  onClose: r,
  position: o = "right",
  width: d = "300px",
  height: i = "300px",
  backgroundColor: s = "#fff",
  transitionDuration: u = 300,
  style: f = {},
  children: x,
  showCloseButton: k = !0,
  closeButtonStyle: l = {}
}) => {
  const [p, g] = S(t);
  K(() => {
    t ? g(!0) : setTimeout(() => g(!1), u);
  }, [t, u]);
  const c = ie(() => {
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
    transition: `transform ${u}ms ease, opacity ${u}ms ease`,
    transform: c,
    opacity: t ? 1 : 0,
    ...f,
    ...o === "left" || o === "right" ? { top: 0, [o]: 0, width: d, height: "100%" } : { left: 0, [o]: 0, height: i, width: "100%" }
  }, h = {
    position: "fixed",
    display: p ? "block" : "none",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    transition: `opacity ${u}ms ease`,
    opacity: t ? 1 : 0,
    pointerEvents: t ? "auto" : "none"
  }, z = {
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
    /* @__PURE__ */ e.jsx("div", { style: h, onClick: r }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: {
          ...j,
          display: "block",
          visibility: p ? "visible" : "hidden",
          pointerEvents: t ? "auto" : "none"
        },
        children: [
          k && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: r,
              style: { ...z, ...l },
              children: /* @__PURE__ */ e.jsx(ke, { size: 20, color: "rgba(255, 0, 0, 1)" })
            }
          ),
          x
        ]
      }
    )
  ] });
}, Fr = ({
  options: t,
  value: r,
  defaultValue: o,
  onChange: d,
  placeholder: i = "Select an option",
  disabled: s = !1,
  borderColor: u = "#ccc",
  backgroundColor: f = "#fff",
  textColor: x = "#333",
  hoverColor: k = "#f0f0f0",
  padding: l = "12px 16px",
  margin: p = "0 0 1rem 0",
  dropdownWidth: g = "100%",
  dropdownHeight: c = "200px",
  borderRadius: j = "8px",
  boxShadow: h = "0 4px 8px rgba(0,0,0,0.1)",
  optionPadding: z = "10px 12px",
  optionGap: y = "8px",
  transitionDuration: v = "0.25s",
  optionHoverStyle: E,
  className: M = "",
  dropdownStyle: _,
  dropdownClassName: C = "",
  optionStyle: m,
  optionClassName: W = "",
  iconPrefix: Y,
  iconSuffix: R
}) => {
  const [I, w] = S(o), [P, B] = S(!1), [a, T] = S(null), N = ee(null);
  K(() => {
    const b = (F) => {
      N.current && !N.current.contains(F.target) && B(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []);
  const H = (b) => {
    w(b), B(!1), d && d(b);
  }, U = r ?? I, n = t.find((b) => b.value === U);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: N,
      className: M,
      style: {
        position: "relative",
        width: g,
        margin: p,
        fontFamily: "sans-serif",
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => B((b) => !b),
            disabled: s,
            "aria-haspopup": "listbox",
            "aria-expanded": P,
            style: {
              width: "100%",
              padding: l,
              backgroundColor: f,
              color: x,
              border: `1px solid ${u}`,
              borderRadius: j,
              boxShadow: s ? "none" : h,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: s ? "not-allowed" : "pointer",
              opacity: s ? 0.6 : 1,
              transition: `all ${v} ease-in-out`
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: y }, children: [
                Y && /* @__PURE__ */ e.jsx("span", { children: Y }),
                /* @__PURE__ */ e.jsx("span", { children: n?.label || i })
              ] }),
              R || /* @__PURE__ */ e.jsx("span", { style: { marginLeft: "8px" }, children: "▼" })
            ]
          }
        ),
        P && /* @__PURE__ */ e.jsx(
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
              maxHeight: c,
              overflowY: "auto",
              backgroundColor: f,
              border: `1px solid ${u}`,
              borderRadius: j,
              boxShadow: h,
              marginTop: "4px",
              transition: `all ${v} ease`,
              ..._
            },
            children: t.map((b, F) => {
              const V = I === b.value, D = a === F, $ = D ? E?.backgroundColor || k : V ? k : f, O = {
                display: "flex",
                alignItems: "center",
                gap: y,
                padding: z,
                cursor: "pointer",
                backgroundColor: $,
                transition: `background ${v}`,
                ...m,
                ...D && E
              };
              return /* @__PURE__ */ e.jsxs(
                "li",
                {
                  onClick: () => H(b.value),
                  role: "option",
                  className: W,
                  style: O,
                  onMouseEnter: () => T(F),
                  onMouseLeave: () => T(null),
                  "aria-selected": V,
                  children: [
                    b.icon && /* @__PURE__ */ e.jsx("span", { children: b.icon }),
                    b.label
                  ]
                },
                b.value
              );
            })
          }
        )
      ]
    }
  );
}, Wr = ({
  columns: t,
  data: r,
  className: o = "",
  pagination: d = !0,
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
  headerBorderRadius: u = "8px",
  tableBorderRadius: f = "8px",
  sortable: x = !0,
  bodyAlign: k = "left",
  headerAlign: l = "left"
}) => {
  const [p, g] = S(null), [c, j] = S("asc"), [h, z] = S(1), [y, v] = S(null), E = (R, I) => {
    !x || !I || (p === R ? j(c === "asc" ? "desc" : "asc") : (g(R), j("asc")), z(1));
  }, M = We.useMemo(() => p ? [...r].sort((R, I) => {
    const w = R[p], P = I[p];
    if (w == null && P == null) return 0;
    if (w == null) return c === "asc" ? -1 : 1;
    if (P == null) return c === "asc" ? 1 : -1;
    if (typeof w == "number" && typeof P == "number")
      return c === "asc" ? w - P : P - w;
    if (w instanceof Date && P instanceof Date)
      return c === "asc" ? w.getTime() - P.getTime() : P.getTime() - w.getTime();
    const B = String(w).toLowerCase(), a = String(P).toLowerCase();
    return B === a ? 0 : c === "asc" ? B > a ? 1 : -1 : B < a ? 1 : -1;
  }) : [...r], [r, p, c]), _ = d ? M.slice(
    (h - 1) * i,
    h * i
  ) : M, C = Math.ceil(r.length / i), m = /* @__PURE__ */ e.jsx(
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
  ), Y = /* @__PURE__ */ e.jsx(
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
          borderRadius: f,
          // Important: for border-radius to show on table, set borderSpacing and borderCollapse accordingly
          borderSpacing: 0,
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { children: t.map(({ key: R, label: I, sortable: w, icon: P }, B) => /* @__PURE__ */ e.jsx(
            "th",
            {
              onClick: () => E(R, w),
              style: {
                padding: "12px",
                fontSize: "14px",
                border: `1px solid ${s.borderColor}`,
                cursor: x && w ? "pointer" : "default",
                backgroundColor: s.headerBg,
                color: s.headerText,
                userSelect: "none",
                borderTopLeftRadius: B === 0 ? u : void 0,
                borderTopRightRadius: B === t.length - 1 ? u : void 0,
                textAlign: l,
                whiteSpace: "nowrap"
              },
              "aria-sort": p === R ? c === "asc" ? "ascending" : "descending" : void 0,
              role: x && w ? "button" : void 0,
              tabIndex: x && w ? 0 : void 0,
              onKeyDown: (a) => {
                x && w && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), E(R, w));
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
                    P && /* @__PURE__ */ e.jsx("span", { children: P }),
                    /* @__PURE__ */ e.jsx("span", { children: I }),
                    x && w && (p === R ? c === "asc" ? m : W : Y)
                  ]
                }
              )
            },
            R
          )) }) }),
          /* @__PURE__ */ e.jsx("tbody", { children: _.map((R, I) => /* @__PURE__ */ e.jsx(
            "tr",
            {
              style: {
                backgroundColor: y === I ? s.hoverBg : s.rowBg,
                color: s.rowText,
                transition: "background-color 0.2s ease-in-out"
              },
              onMouseEnter: () => v(I),
              onMouseLeave: () => v(null),
              children: t.map(({ key: w }) => /* @__PURE__ */ e.jsx(
                "td",
                {
                  style: {
                    padding: "12px",
                    border: `1px solid ${s.borderColor}`,
                    whiteSpace: "nowrap",
                    textAlign: k
                  },
                  children: R[w]
                },
                w
              ))
            },
            I
          )) })
        ]
      }
    ),
    d && C > 1 && /* @__PURE__ */ e.jsxs(
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
              onClick: () => z((R) => Math.max(R - 1, 1)),
              "aria-label": "Previous page",
              type: "button",
              children: [
                /* @__PURE__ */ e.jsx(Be, { size: 16 }),
                "Prev"
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("span", { style: { color: s.paginationText }, children: [
            "Page ",
            h,
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
                backgroundColor: s.paginationBg,
                color: s.paginationText,
                borderRadius: "6px",
                border: "none",
                opacity: h === C ? 0.5 : 1,
                cursor: h === C ? "not-allowed" : "pointer",
                fontSize: "0.875rem"
              },
              disabled: h === C,
              onClick: () => z((R) => Math.min(R + 1, C)),
              "aria-label": "Next page",
              type: "button",
              children: [
                "Next",
                /* @__PURE__ */ e.jsx(De, { size: 16 })
              ]
            }
          )
        ]
      }
    )
  ] });
}, Or = ({
  children: t,
  className: r = "",
  style: o = {},
  background: d = "#fff",
  backgroundImage: i,
  backgroundSize: s = "cover",
  backgroundPosition: u = "center",
  backgroundRepeat: f = "no-repeat",
  textColor: x = "#000",
  borderRadius: k = 12,
  padding: l = 24,
  margin: p = 0,
  maxWidth: g = "100%",
  boxShadow: c = "0 4px 12px rgba(0,0,0,0.1)",
  border: j = "none",
  display: h = "flex",
  flexDirection: z = "column",
  justifyContent: y = "flex-start",
  alignItems: v = "stretch",
  gap: E = 16
}) => {
  const M = {
    background: d,
    color: x,
    borderRadius: k,
    padding: l,
    margin: p,
    maxWidth: g,
    boxShadow: c,
    border: j,
    display: h,
    flexDirection: z,
    justifyContent: y,
    alignItems: v,
    gap: E,
    boxSizing: "border-box",
    // Background image styles if provided
    ...i ? {
      backgroundImage: `url(${i})`,
      backgroundSize: s,
      backgroundPosition: u,
      backgroundRepeat: f
    } : {},
    ...o
  };
  return /* @__PURE__ */ e.jsx("div", { className: r, style: M, children: t });
}, et = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Br = ({
  columns: t = { sm: 1, md: 2, lg: 3 },
  gap: r = "16px",
  padding: o = "20px",
  alignItems: d = "stretch",
  justifyItems: i = "stretch",
  backgroundColor: s = "transparent",
  width: u = "100%",
  maxWidth: f = "100%",
  height: x = "auto",
  children: k,
  style: l
}) => {
  const [p, g] = S(
    et(window.innerWidth)
  );
  K(() => {
    const h = () => g(et(window.innerWidth));
    return window.addEventListener("resize", h), () => window.removeEventListener("resize", h);
  }, []);
  const c = ie(() => typeof t == "number" ? t : t[p] ?? 1, [t, p]), j = ie(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${c}, 1fr)`,
      gap: r,
      padding: o,
      alignItems: d,
      justifyItems: i,
      backgroundColor: s,
      width: u,
      maxWidth: f,
      height: x,
      boxSizing: "border-box",
      ...l
    }),
    [
      c,
      r,
      o,
      d,
      i,
      s,
      u,
      f,
      x,
      l
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: j, children: k });
}, tt = (t) => t < 768 ? "sm" : t < 1024 ? "md" : "lg", Dr = ({
  direction: t = "row",
  align: r = "center",
  justify: o = "space-between",
  gap: d = 16,
  padding: i = 20,
  backgroundColor: s = "transparent",
  width: u = "100%",
  maxWidth: f = "100%",
  height: x = "auto",
  style: k,
  children: l
}) => {
  const [p, g] = S(
    tt(window.innerWidth)
  );
  K(() => {
    const h = () => g(tt(window.innerWidth));
    return window.addEventListener("resize", h), () => window.removeEventListener("resize", h);
  }, []);
  const c = ie(() => typeof t == "string" ? t : t[p] ?? "row", [t, p]), j = ie(
    () => ({
      display: "flex",
      flexDirection: c,
      alignItems: r,
      justifyContent: o,
      gap: typeof d == "number" ? `${d}px` : d,
      padding: typeof i == "number" ? `${i}px` : i,
      backgroundColor: s,
      width: u,
      maxWidth: f,
      height: x,
      boxSizing: "border-box",
      ...k
    }),
    [
      c,
      r,
      o,
      d,
      i,
      s,
      u,
      f,
      x,
      k
    ]
  );
  return /* @__PURE__ */ e.jsx("div", { style: j, children: l });
}, gr = {
  success: {
    bg: "#ecfdf5",
    border: "#34d399",
    iconColor: "#059669",
    Icon: /* @__PURE__ */ e.jsx(Nt, { size: 20 })
  },
  error: {
    bg: "#fef2f2",
    border: "#f87171",
    iconColor: "#dc2626",
    Icon: /* @__PURE__ */ e.jsx(Lt, { size: 20 })
  },
  warning: {
    bg: "#fffbeb",
    border: "#facc15",
    iconColor: "#d97706",
    Icon: /* @__PURE__ */ e.jsx(lr, { size: 20 })
  },
  info: {
    bg: "#eff6ff",
    border: "#3b82f6",
    iconColor: "#2563eb",
    Icon: /* @__PURE__ */ e.jsx(Ht, { size: 20 })
  }
}, br = (t) => {
  const r = {
    position: "fixed",
    zIndex: 9999
  };
  switch (t) {
    case "top-left":
      return { ...r, top: "20px", left: "20px" };
    case "top-center":
      return { ...r, top: "20px", left: "50%", transform: "translateX(-50%)" };
    case "top-right":
      return { ...r, top: "20px", right: "20px" };
    case "bottom-left":
      return { ...r, bottom: "20px", left: "20px" };
    case "bottom-center":
      return { ...r, bottom: "20px", left: "50%", transform: "translateX(-50%)" };
    case "bottom-right":
    default:
      return { ...r, bottom: "20px", right: "20px" };
  }
}, Yr = ({
  title: t = "",
  description: r = "",
  type: o = "info",
  dismissible: d = !0,
  onClose: i,
  duration: s,
  icon: u,
  actionButton: f,
  position: x = "top-right",
  className: k,
  style: l
}) => {
  const [p, g] = S(!0);
  if (K(() => {
    if (s) {
      const v = setTimeout(() => {
        g(!1), i?.();
      }, s);
      return () => clearTimeout(v);
    }
  }, [s, i]), !p) return null;
  const { bg: c, border: j, iconColor: h, Icon: z } = gr[o], y = br(x);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: k,
      style: {
        ...y,
        display: "flex",
        gap: "12px",
        padding: "16px",
        backgroundColor: c,
        borderLeft: `4px solid ${j}`,
        borderRadius: "8px",
        color: "#111827",
        alignItems: "flex-start",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        animation: "slideIn 0.3s ease",
        maxWidth: "600px",
        width: "calc(100% - 40px)",
        ...l
        // ✅ User custom styles merged last
      },
      children: [
        /* @__PURE__ */ e.jsx("div", { style: { color: h, marginTop: "3px" }, children: u || z }),
        /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
          t && /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", marginBottom: "4px" }, children: t }),
          r && /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", color: "#374151" }, children: r }),
          f && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "10px" }, children: f })
        ] }),
        d && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              g(!1), i?.();
            },
            style: {
              background: "transparent",
              border: "none",
              color: "#6b7280",
              cursor: "pointer",
              marginLeft: "8px"
            },
            children: /* @__PURE__ */ e.jsx(ke, { size: 16 })
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
}, Vr = ({
  text: t,
  color: r = "#2563eb",
  textColor: o = "#fff",
  borderColor: d = "#2563eb",
  icon: i,
  iconPosition: s = "left",
  rounded: u = !1,
  borderRadius: f,
  borderWidth: x = "0",
  fontSize: k = "14px",
  fontWeight: l = 500,
  horizontalPadding: p = "10px",
  verticalPadding: g = "6px",
  margin: c = "0",
  shadow: j = "0 1px 4px rgba(0, 0, 0, 0.1)",
  notificationDot: h = !1,
  dotColor: z = "#ef4444",
  count: y,
  pulse: v = !1,
  style: E,
  onClick: M
}) => {
  const _ = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: r,
    border: `${x} solid ${d}`,
    borderRadius: f || (u ? "9999px" : "6px"),
    padding: `${g} ${p}`,
    fontSize: k,
    fontWeight: l,
    margin: c,
    boxShadow: j,
    position: "relative",
    cursor: M ? "pointer" : "default",
    ...E
  }, C = {
    color: o,
    display: "inline"
  }, m = {
    display: "flex",
    alignItems: "center",
    color: o
  }, W = {
    ...m,
    marginRight: t ? "6px" : "0px"
  }, Y = {
    ...m,
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
  }, I = {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    height: "8px",
    width: "8px",
    backgroundColor: z,
    borderRadius: "50%",
    zIndex: 1,
    animation: v ? "pulseAnim 1.2s infinite" : void 0
  };
  return /* @__PURE__ */ e.jsxs("span", { style: _, onClick: M, children: [
    h && /* @__PURE__ */ e.jsx("span", { style: I }),
    typeof y < "u" && /* @__PURE__ */ e.jsx("span", { style: R, children: y }),
    i && s === "left" && /* @__PURE__ */ e.jsx("span", { style: W, children: i }),
    t && /* @__PURE__ */ e.jsx("span", { style: C, children: t }),
    i && s === "right" && /* @__PURE__ */ e.jsx("span", { style: Y, children: i }),
    /* @__PURE__ */ e.jsx("style", { children: `
          @keyframes pulseAnim {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
        ` })
  ] });
}, Hr = ({
  isOpen: t,
  onClose: r,
  children: o,
  overlayStyle: d,
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
      ...d
    },
    onClick: r,
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
        onClick: (u) => u.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: r,
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
              onMouseEnter: (u) => u.currentTarget.style.color = "#000",
              onMouseLeave: (u) => u.currentTarget.style.color = "#444",
              children: /* @__PURE__ */ e.jsx(ke, { size: 24 })
            }
          ),
          o
        ]
      }
    )
  }
) : null, ot = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
  "2xl": 64
}, yr = {
  xs: 6,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 14,
  "2xl": 16
}, st = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  "2xl": 20
}, it = (t) => {
  switch (t) {
    case "square":
      return "0px";
    case "rounded":
      return "8px";
    case "circular":
    default:
      return "50%";
  }
}, mr = (t, r) => {
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
}, vr = (t, r) => {
  switch (t) {
    case "tight":
      return -(r * 0.5);
    case "loose":
      return -(r * 0.15);
    case "normal":
    default:
      return -(r * 0.35);
  }
}, jr = ({
  src: t,
  alt: r = "User Avatar",
  size: o = "md",
  variant: d = "circular",
  isOnline: i = !1,
  isOffline: s = !1,
  className: u = "",
  style: f,
  statusClassName: x = "",
  statusStyle: k,
  statusPosition: l = "bottom-right",
  fallback: p,
  ring: g = !1,
  ringColor: c = "#3b82f6",
  onClick: j
}) => {
  const [h, z] = S(!1), [y, v] = S(!1), E = ot[o], M = yr[o], _ = st[o], C = it(d), m = p || r.split(" ").map((P) => P[0]).join("").toUpperCase().slice(0, 2);
  let W = "", Y = "";
  i ? (W = "#10b981", Y = "Online") : s && (W = "#6b7280", Y = "Offline");
  const R = i || s, I = t && !h, w = !!j;
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
        cursor: w ? "pointer" : "default",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: y && w ? "scale(1.05)" : "scale(1)",
        boxShadow: g ? `0 0 0 3px ${c}20, 0 0 0 1px ${c}` : y && w ? "0 8px 25px -8px rgba(0, 0, 0, 0.3)" : "0 1px 3px rgba(0, 0, 0, 0.1)",
        ...f
      },
      className: u,
      "aria-label": r,
      role: w ? "button" : "img",
      tabIndex: w ? 0 : -1,
      onClick: j,
      onMouseEnter: () => v(!0),
      onMouseLeave: () => v(!1),
      onKeyDown: (P) => {
        w && (P.key === "Enter" || P.key === " ") && (P.preventDefault(), j?.());
      },
      children: [
        I ? /* @__PURE__ */ e.jsx("div", { style: { borderRadius: C, overflow: "hidden", width: "100%", height: "100%" }, children: /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t,
            alt: r,
            width: E,
            height: E,
            loading: "lazy",
            onError: () => z(!0),
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
              fontSize: _,
              fontWeight: "600",
              borderRadius: C,
              position: "relative"
            },
            children: m ? /* @__PURE__ */ e.jsx("span", { style: { userSelect: "none" }, children: m }) : /* @__PURE__ */ e.jsx(dr, { size: E * 0.5, strokeWidth: 1.5 })
          }
        ),
        R && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: x,
            style: {
              position: "absolute",
              width: M,
              height: M,
              borderRadius: "50%",
              backgroundColor: W,
              border: "2px solid white",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12)",
              ...mr(l),
              ...k
            },
            "aria-label": Y,
            title: Y
          }
        )
      ]
    }
  );
}, Ur = ({
  avatars: t,
  max: r = 4,
  size: o = "md",
  className: d = "",
  style: i,
  spacing: s = "normal",
  direction: u = "left"
}) => {
  const f = ot[o], x = st[o], k = t.slice(0, r), l = t.length - r, p = vr(s, f);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        flexDirection: u === "right" ? "row-reverse" : "row",
        ...i
      },
      className: d,
      "aria-label": `Avatar group with ${t.length} members`,
      role: "group",
      children: [
        k.map((g, c) => {
          const j = u === "left" ? c === 0 : c === k.length - 1, h = u === "left" ? k.length - c : c + 1;
          return /* @__PURE__ */ e.jsx(
            "div",
            {
              style: {
                marginLeft: u === "left" && !j ? p : 0,
                marginRight: u === "right" && !j ? p : 0,
                position: "relative",
                zIndex: h,
                transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
              },
              className: "group-hover:translate-x-1",
              onMouseEnter: (z) => {
                const y = z.currentTarget;
                y.style.transform = `translateY(-2px) ${u === "right" ? "translateX(4px)" : "translateX(-4px)"}`, y.style.zIndex = "100";
              },
              onMouseLeave: (z) => {
                const y = z.currentTarget;
                y.style.transform = "translateY(0) translateX(0)", y.style.zIndex = h.toString();
              },
              children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: {
                    border: "3px solid white",
                    borderRadius: it(g.variant || "circular"),
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)"
                  },
                  children: /* @__PURE__ */ e.jsx(
                    jr,
                    {
                      ...g,
                      size: o,
                      style: {
                        boxShadow: "none"
                      }
                    }
                  )
                }
              )
            },
            c
          );
        }),
        l > 0 && /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              marginLeft: u === "left" ? p : 0,
              marginRight: u === "right" ? p : 0,
              width: f,
              height: f,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
              color: "#374151",
              fontSize: x * 0.9,
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
            "aria-label": `${l} more members`,
            title: `${l} more members`,
            onMouseEnter: (g) => {
              const c = g.currentTarget;
              c.style.transform = "translateY(-2px) scale(1.05)", c.style.background = "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)";
            },
            onMouseLeave: (g) => {
              const c = g.currentTarget;
              c.style.transform = "translateY(0) scale(1)", c.style.background = "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)";
            },
            children: [
              "+",
              l
            ]
          }
        )
      ]
    }
  );
}, Xr = ({
  tracks: t,
  className: r = "",
  primaryColor: o = "#3b82f6",
  // default blue
  backgroundColor: d = "#fff",
  textColor: i = "#222",
  secondaryColor: s = "#e5e7eb",
  autoplay: u = !1,
  loop: f = !1
}) => {
  const [x, k] = S(null), l = ee(null), p = ee(null), [g, c] = S(!1), [j, h] = S(0), [z, y] = S(0), [v, E] = S(0.5), [M, _] = S(!1), [C, m] = S(f);
  K(() => {
    l.current && (l.current.volume = v);
  }, [v]), K(() => {
    l.current && (l.current.loop = C);
  }, [C]), K(() => {
    x === null && l.current && (l.current.pause(), c(!1), h(0), y(0));
  }, [x]);
  const W = (a) => {
    if (x === a) {
      if (!l.current) return;
      l.current.paused ? (l.current.play(), c(!0)) : (l.current.pause(), c(!1));
    } else
      k(a), setTimeout(() => {
        l.current?.play(), c(!0);
      }, 100);
  }, Y = () => {
    l.current && (h(l.current.currentTime), y(l.current.duration));
  }, R = (a) => {
    if (!l.current) return;
    const T = a.currentTarget.getBoundingClientRect(), U = (a.clientX - T.left) / T.width * z;
    l.current.currentTime = U, h(U);
  }, I = (a) => {
    if (l.current) {
      let T = l.current.currentTime + a;
      T = Math.min(Math.max(T, 0), z), l.current.currentTime = T, h(T);
    }
  }, w = () => {
    p.current && (M ? document.exitFullscreen?.() : p.current.requestFullscreen?.(), _(!M));
  }, P = () => {
    E((a) => a > 0 ? 0 : 0.5);
  }, B = (a) => {
    if (isNaN(a)) return "0:00";
    const T = Math.floor(a / 60), N = Math.floor(a % 60);
    return `${T}:${N < 10 ? "0" : ""}${N}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "section",
    {
      className: r,
      style: {
        maxWidth: "480px",
        margin: "auto",
        backgroundColor: d,
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
            children: t.map(({ src: a, title: T, thumbnail: N }, H) => {
              const U = x === H && g;
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
                  onClick: () => W(H),
                  tabIndex: 0,
                  role: "button",
                  "aria-pressed": U,
                  onKeyDown: (n) => {
                    (n.key === "Enter" || n.key === " ") && W(H);
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
                    U ? /* @__PURE__ */ e.jsx(je, { size: 24, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(ge, { size: 24, "aria-hidden": "true" })
                  ]
                },
                H
              );
            })
          }
        ),
        x !== null && /* @__PURE__ */ e.jsxs(
          "article",
          {
            ref: p,
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
                  ref: l,
                  src: t[x].src,
                  autoPlay: u,
                  loop: C,
                  onTimeUpdate: Y,
                  onEnded: () => c(!1),
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
                        onClick: () => I(-10),
                        "aria-label": "Skip back 10 seconds",
                        style: he(i, o),
                        children: /* @__PURE__ */ e.jsx($e, { size: 20 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => {
                          l.current && (g ? l.current.pause() : l.current.play(), c(!g));
                        },
                        "aria-label": g ? "Pause" : "Play",
                        style: {
                          ...he("#fff", o),
                          borderRadius: "9999px",
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        },
                        children: g ? /* @__PURE__ */ e.jsx(je, { size: 24, color: "#fff" }) : /* @__PURE__ */ e.jsx(ge, { size: 24, color: "#fff" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => I(10),
                        "aria-label": "Skip forward 10 seconds",
                        style: he(i, o),
                        children: /* @__PURE__ */ e.jsx(Ee, { size: 20 })
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
                        children: B(j)
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        onClick: R,
                        role: "slider",
                        "aria-valuemin": 0,
                        "aria-valuemax": z,
                        "aria-valuenow": j,
                        tabIndex: 0,
                        onKeyDown: (a) => {
                          l.current && (a.key === "ArrowRight" ? I(5) : a.key === "ArrowLeft" && I(-5));
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
                              width: `${j / z * 100 || 0}%`,
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
                        dateTime: `PT${Math.floor(z / 60)}M${Math.floor(
                          z % 60
                        )}S`,
                        style: { minWidth: "40px", fontSize: "0.9rem", color: "#666" },
                        "aria-label": "Total duration",
                        children: [
                          "/ ",
                          B(z)
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
                        onClick: () => m(!C),
                        "aria-label": "Toggle Loop",
                        style: he(
                          C ? o : i,
                          C ? "#e0f2fe" : "transparent"
                        ),
                        children: /* @__PURE__ */ e.jsx(
                          Ie,
                          {
                            size: 20,
                            color: C ? o : i,
                            "aria-hidden": "true"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: P,
                        "aria-label": v > 0 ? "Mute" : "Unmute",
                        style: he(i, "transparent"),
                        children: v > 0 ? /* @__PURE__ */ e.jsx(_e, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(we, { size: 20, "aria-hidden": "true" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: w,
                        "aria-label": M ? "Exit Fullscreen" : "Enter Fullscreen",
                        style: he(i, "transparent"),
                        children: M ? /* @__PURE__ */ e.jsx(Me, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ e.jsx(Re, { size: 20, "aria-hidden": "true" })
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
function he(t, r) {
  return {
    border: "none",
    backgroundColor: r,
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
const qr = ({
  videos: t,
  columns: r = 3,
  responsiveColumns: o,
  gap: d = "10px",
  layout: i = "grid",
  lightbox: s = !0,
  autoPlay: u = !1,
  loop: f = !1,
  muted: x = !1,
  controls: k = !0,
  className: l = ""
}) => {
  const [p, g] = S(null), [c, j] = S(
    typeof window < "u" ? window.innerWidth : 1024
  ), [h, z] = S(r);
  K(() => {
    function C() {
      const m = window.innerWidth;
      if (j(m), !o) {
        z(r);
        return;
      }
      m < 640 ? z(o.mobile ?? r) : m < 1024 ? z(o.tablet ?? r) : z(o.desktop ?? r);
    }
    if (typeof window < "u")
      return C(), window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, [r, o]);
  const y = () => g(null), v = (C) => {
    C.stopPropagation(), p !== null && g((p - 1 + t.length) % t.length);
  }, E = (C) => {
    C.stopPropagation(), p !== null && g((p + 1) % t.length);
  }, M = ({
    src: C,
    poster: m,
    autoPlay: W = !1,
    loop: Y = !1,
    muted: R = !1,
    controls: I = !1,
    width: w = "100%",
    height: P = "150px",
    borderRadius: B = "12px",
    backgroundColor: a = "#1e1e1e",
    primaryColor: T = "#ff4081",
    padding: N = "16px",
    className: H,
    onClick: U
  }) => {
    const n = ee(null), b = ee(null), [F, V] = S(W), [D, $] = S(0), [O, G] = S(0), [L, te] = S(R ? 0 : 0.5), [re, oe] = S(R), [ae, le] = S(!1), [ce, be] = S(Y);
    K(() => {
      n.current && (n.current.volume = L, n.current.loop = ce, n.current.muted = re);
    }, [L, ce, re]);
    const Pe = () => {
      n.current && (F ? n.current.pause() : n.current.play(), V(!F));
    }, Se = () => {
      n.current && ($(n.current.currentTime), G(n.current.duration));
    }, Le = (Q) => {
      if (!n.current || !Q.currentTarget) return;
      const ne = Q.currentTarget.getBoundingClientRect(), ye = (Q.clientX - ne.left) / ne.width * O;
      n.current.currentTime = ye, $(ye);
    }, de = (Q) => {
      n.current && (n.current.currentTime += Q);
    }, ue = () => {
      b.current && (ae ? document.exitFullscreen?.() : b.current.requestFullscreen?.(), le(!ae));
    }, pe = () => {
      re ? (oe(!1), L === 0 && te(0.5)) : (oe(!0), te(0));
    }, Te = (Q) => {
      if (isNaN(Q)) return "0:00";
      const ne = Math.floor(Q / 60), xe = Math.floor(Q % 60);
      return `${ne}:${xe < 10 ? "0" : ""}${xe}`;
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: b,
        onClick: U,
        className: H,
        style: {
          position: "relative",
          width: w,
          backgroundColor: a,
          borderRadius: B,
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
              ref: n,
              src: C,
              poster: m,
              autoPlay: W,
              loop: Y,
              muted: R,
              controls: I,
              onTimeUpdate: Se,
              onLoadedMetadata: Se,
              style: {
                width: "100%",
                height: P,
                borderRadius: B,
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
                /* @__PURE__ */ e.jsx("button", { onClick: () => de(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx($e, { size: 20 }) }),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: Pe,
                    style: {
                      background: T,
                      borderRadius: "9999px",
                      padding: "10px",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer"
                    },
                    "aria-label": F ? "Pause" : "Play",
                    children: F ? /* @__PURE__ */ e.jsx(je, { size: 20 }) : /* @__PURE__ */ e.jsx(ge, { size: 20 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: () => de(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(Ee, { size: 20 }) })
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
                        Te(O)
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    onClick: Le,
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
                          width: `${D / O * 100 || 0}%`,
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
                      onClick: () => be(!ce),
                      "aria-label": "Toggle Loop",
                      type: "button",
                      children: /* @__PURE__ */ e.jsx(
                        Ie,
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
                      onClick: pe,
                      "aria-label": re ? "Unmute" : "Mute",
                      type: "button",
                      children: re ? /* @__PURE__ */ e.jsx(we, { size: 18 }) : /* @__PURE__ */ e.jsx(_e, { size: 18 })
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: ue,
                      "aria-label": ae ? "Exit Fullscreen" : "Fullscreen",
                      type: "button",
                      children: ae ? /* @__PURE__ */ e.jsx(Me, { size: 18 }) : /* @__PURE__ */ e.jsx(Re, { size: 18 })
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    );
  }, _ = () => c < 640 ? "120px" : c < 1024 ? "150px" : "180px";
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${l}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${i === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${h}, 1fr)`,
          gap: d
        },
        children: t.map((C, m) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "relative",
              overflow: "hidden",
              borderRadius: 12,
              cursor: s ? "pointer" : "default"
            },
            onClick: () => s && g(m),
            children: /* @__PURE__ */ e.jsx(
              M,
              {
                src: C.src,
                poster: C.poster,
                autoPlay: u,
                loop: f,
                muted: x,
                controls: k,
                height: _(),
                borderRadius: "12px",
                padding: "8px",
                primaryColor: "#ff4081",
                onClick: (W) => W.stopPropagation()
              }
            )
          },
          m
        ))
      }
    ),
    s && p !== null && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: y,
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
              onClick: v,
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
              children: /* @__PURE__ */ e.jsx(Be, { size: 32 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            M,
            {
              src: t[p].src,
              poster: t[p].poster,
              autoPlay: !0,
              controls: !0,
              muted: x,
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
              children: /* @__PURE__ */ e.jsx(De, { size: 32 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: y,
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
              children: /* @__PURE__ */ e.jsx(ke, { size: 28 })
            }
          )
        ]
      }
    )
  ] });
}, Gr = ({
  images: t,
  columns: r = 3,
  gap: o = "10px",
  layout: d = "grid",
  lightbox: i = !0,
  className: s = ""
}) => {
  const [u, f] = S(null), [x, k] = S(
    typeof r == "number" ? r : r.default || 3
  ), [l, p] = S(null), [g, c] = S(0);
  K(() => {
    const y = () => {
      if (typeof r == "number")
        k(r);
      else {
        const v = window.innerWidth;
        v < 640 && r.sm ? k(r.sm) : v < 1024 && r.md ? k(r.md) : v < 1280 && r.lg ? k(r.lg) : v >= 1280 && r.xl ? k(r.xl) : k(r.default || 3);
      }
    };
    return y(), window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, [r]);
  const j = () => f(null), h = (y) => {
    y.stopPropagation(), u !== null && (p("prev"), f((v) => (v - 1 + t.length) % t.length), c((v) => v + 1));
  }, z = (y) => {
    y.stopPropagation(), u !== null && (p("next"), f((v) => (v + 1) % t.length), c((v) => v + 1));
  };
  return /* @__PURE__ */ e.jsxs("div", { style: { width: "100%" }, className: s, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: `repeat(${x}, 1fr)`,
          gap: o,
          gridAutoFlow: d === "masonry" ? "dense" : "row"
        },
        children: t.map((y, v) => /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "relative",
              overflow: "hidden",
              borderRadius: "8px",
              cursor: i ? "pointer" : "default"
            },
            onClick: () => {
              f(v), p(null);
            },
            children: /* @__PURE__ */ e.jsx(
              Ke,
              {
                src: y.src,
                alt: y.alt || "Gallery Image",
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
          v
        ))
      }
    ),
    i && u !== null && /* @__PURE__ */ e.jsxs(
      "div",
      {
        onClick: j,
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
              onClick: (y) => y.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: h,
                    "aria-label": "Previous image",
                    style: {
                      position: "absolute",
                      left: "5px",
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
                    children: /* @__PURE__ */ e.jsx(Be, { size: 24 })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      animation: l === "next" ? "slideInFromRight 0.4s ease" : l === "prev" ? "slideInFromLeft 0.4s ease" : "fadeIn 0.3s ease"
                    },
                    children: /* @__PURE__ */ e.jsx(
                      Ke,
                      {
                        src: t[u].src,
                        alt: t[u].alt || "Preview",
                        lazyLoad: !0,
                        style: {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain"
                        }
                      }
                    )
                  },
                  g
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: z,
                    "aria-label": "Next image",
                    style: {
                      position: "absolute",
                      right: "5px",
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
                    children: /* @__PURE__ */ e.jsx(De, { size: 24 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: j,
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
              children: /* @__PURE__ */ e.jsx(ke, { size: 28 })
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
  Pr as Accordation,
  Yr as Alert,
  Xr as AudioGallery,
  Er as AudioPlayer,
  jr as Avatar,
  Ur as AvatarGroup,
  Vr as Badge,
  Tr as Button,
  Or as Card,
  Lr as CheckRadio,
  _r as Container,
  Nr as Drawer,
  Ar as DrawerButton,
  Fr as Dropdown,
  Dr as Flexbox,
  Br as GridView,
  Ke as Image,
  Gr as ImageGallery,
  zr as Input,
  Rr as LeftTabs,
  Cr as List,
  Hr as Modal,
  Ir as RightTabs,
  Wr as Table,
  Sr as Text,
  Mr as TopTabs,
  qr as VideoGallery,
  $r as VideoPlayer
};
