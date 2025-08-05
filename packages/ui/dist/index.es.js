import J, { useMemo as ee, forwardRef as ne, createElement as se, useRef as X, useState as N, useImperativeHandle as ke, useEffect as q } from "react";
var te = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le;
function Te() {
  if (le) return Q;
  le = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(o, l, n) {
    var a = null;
    if (n !== void 0 && (a = "" + n), l.key !== void 0 && (a = "" + l.key), "key" in l) {
      n = {};
      for (var c in l)
        c !== "key" && (n[c] = l[c]);
    } else n = l;
    return l = n.ref, {
      $$typeof: t,
      type: o,
      key: a,
      ref: l !== void 0 ? l : null,
      props: n
    };
  }
  return Q.Fragment = r, Q.jsx = s, Q.jsxs = s, Q;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae;
function Se() {
  return ae || (ae = 1, process.env.NODE_ENV !== "production" && function() {
    function t(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === E ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case m:
          return "Fragment";
        case b:
          return "Profiler";
        case j:
          return "StrictMode";
        case $:
          return "Suspense";
        case S:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case u:
            return "Portal";
          case C:
            return (i.displayName || "Context") + ".Provider";
          case T:
            return (i._context.displayName || "Context") + ".Consumer";
          case y:
            var v = i.render;
            return i = i.displayName, i || (i = v.displayName || v.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case z:
            return v = i.displayName || null, v !== null ? v : t(i.type) || "Memo";
          case P:
            v = i._payload, i = i._init;
            try {
              return t(i(v));
            } catch {
            }
        }
      return null;
    }
    function r(i) {
      return "" + i;
    }
    function s(i) {
      try {
        r(i);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var F = v.error, H = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return F.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), r(i);
      }
    }
    function o(i) {
      if (i === m) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === P)
        return "<...>";
      try {
        var v = t(i);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var i = A.A;
      return i === null ? null : i.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function a(i) {
      if (L.call(i, "key")) {
        var v = Object.getOwnPropertyDescriptor(i, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function c(i, v) {
      function F() {
        w || (w = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: F,
        configurable: !0
      });
    }
    function p() {
      var i = t(this.type);
      return k[i] || (k[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function f(i, v, F, H, W, R, O, Z) {
      return F = R.ref, i = {
        $$typeof: h,
        type: i,
        key: v,
        props: R,
        _owner: W
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(i, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(i, "ref", { enumerable: !1, value: null }), i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(i, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(i, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function g(i, v, F, H, W, R, O, Z) {
      var _ = v.children;
      if (_ !== void 0)
        if (H)
          if (Y(_)) {
            for (H = 0; H < _.length; H++)
              d(_[H]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(_);
      if (L.call(v, "key")) {
        _ = t(i);
        var G = Object.keys(v).filter(function(ve) {
          return ve !== "key";
        });
        H = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", D[_ + H] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          _,
          G,
          _
        ), D[_ + H] = !0);
      }
      if (_ = null, F !== void 0 && (s(F), _ = "" + F), a(v) && (s(v.key), _ = "" + v.key), "key" in v) {
        F = {};
        for (var re in v)
          re !== "key" && (F[re] = v[re]);
      } else F = v;
      return _ && c(
        F,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), f(
        i,
        _,
        R,
        W,
        l(),
        F,
        O,
        Z
      );
    }
    function d(i) {
      typeof i == "object" && i !== null && i.$$typeof === h && i._store && (i._store.validated = 1);
    }
    var x = J, h = Symbol.for("react.transitional.element"), u = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), C = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), E = Symbol.for("react.client.reference"), A = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, Y = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(i) {
        return i();
      }
    };
    var w, k = {}, I = x.react_stack_bottom_frame.bind(
      x,
      n
    )(), M = V(o(n)), D = {};
    K.Fragment = m, K.jsx = function(i, v, F, H, W) {
      var R = 1e4 > A.recentlyCreatedOwnerStacks++;
      return g(
        i,
        v,
        F,
        !1,
        H,
        W,
        R ? Error("react-stack-top-frame") : I,
        R ? V(o(i)) : M
      );
    }, K.jsxs = function(i, v, F, H, W) {
      var R = 1e4 > A.recentlyCreatedOwnerStacks++;
      return g(
        i,
        v,
        F,
        !0,
        H,
        W,
        R ? Error("react-stack-top-frame") : I,
        R ? V(o(i)) : M
      );
    };
  }()), K;
}
var ie;
function Ne() {
  return ie || (ie = 1, process.env.NODE_ENV === "production" ? te.exports = Te() : te.exports = Se()), te.exports;
}
var e = Ne();
const st = ({
  as: t = "p",
  children: r,
  className: s = "",
  href: o,
  target: l,
  rel: n,
  // Style
  color: a = "#333",
  bgColor: c,
  fontSize: p = "16px",
  fontWeight: f = "normal",
  textAlign: g = "left",
  textTransform: d = "none",
  lineHeight: x = "normal",
  letterSpacing: h = "normal",
  maxWidth: u,
  padding: m,
  margin: j,
  borderRadius: b,
  boxShadow: T,
  shadowColor: C = "rgba(0,0,0,0.1)",
  wordBreak: y = "normal",
  // Text styles
  italic: $ = !1,
  bold: S = !1,
  underline: z = !1,
  strikethrough: P = !1,
  selectable: B = !0,
  truncate: E = !1,
  // Hover & Active
  hoverColor: A,
  hoverBgColor: L,
  hoverTextDecoration: Y,
  activeColor: V,
  activeBgColor: w,
  transitionDuration: k = "0.25s",
  // Event
  onClick: I
}) => {
  const M = ee(() => {
    const R = [];
    return z && R.push("underline"), P && R.push("line-through"), R.join(" ") || "none";
  }, [z, P]), D = {
    color: a,
    backgroundColor: c || "transparent",
    fontSize: p,
    fontWeight: S ? "bold" : f,
    textAlign: g,
    textTransform: d,
    lineHeight: x,
    letterSpacing: h,
    maxWidth: u,
    padding: m,
    margin: j,
    borderRadius: b,
    textDecoration: M,
    fontStyle: $ ? "italic" : "normal",
    wordBreak: y,
    boxShadow: T || (C ? `0 1px 4px ${C}` : void 0),
    cursor: I || o ? "pointer" : "default",
    userSelect: B ? "text" : "none",
    transition: `all ${k} ease-in-out`,
    overflow: E ? "hidden" : void 0,
    whiteSpace: E ? "nowrap" : void 0,
    textOverflow: E ? "ellipsis" : void 0
  }, W = {
    className: s,
    style: D,
    onClick: I,
    onMouseEnter: (R) => {
      const O = R.currentTarget;
      A && (O.style.color = A), L && (O.style.backgroundColor = L), Y && (O.style.textDecoration = Y);
    },
    onMouseLeave: (R) => {
      const O = R.currentTarget;
      O.style.color = a, O.style.backgroundColor = c || "transparent", O.style.textDecoration = M;
    },
    onMouseDown: (R) => {
      const O = R.currentTarget;
      V && (O.style.color = V), w && (O.style.backgroundColor = w);
    },
    onMouseUp: (R) => {
      const O = R.currentTarget;
      O.style.color = A || a, O.style.backgroundColor = L || c || "transparent";
    }
  };
  return t === "a" || o ? /* @__PURE__ */ e.jsx(
    "a",
    {
      ...W,
      href: o,
      target: l,
      rel: n || (l === "_blank" ? "noopener noreferrer" : void 0),
      children: r
    }
  ) : /* @__PURE__ */ e.jsx(t, { ...W, children: r });
}, nt = ({
  src: t,
  alt: r = "Image",
  width: s = "100%",
  height: o = "auto",
  borderRadius: l = "8px",
  borderColor: n = "transparent",
  borderStyle: a = "solid",
  borderWidth: c = "0px",
  shadow: p = !1,
  boxShadow: f,
  opacity: g = 1,
  objectFit: d = "cover",
  overlayText: x,
  overlayColor: h = "rgba(0, 0, 0, 0.5)",
  svgIcon: u,
  responsive: m = !1,
  padding: j,
  margin: b,
  lazyLoad: T = !1,
  hoverOpacity: C,
  hoverShadow: y = !1,
  hoverScale: $,
  hoverRotate: S,
  transitionDuration: z = "0.3s",
  overflow: P = "hidden",
  className: B,
  style: E,
  onClick: A
}) => {
  const L = {
    width: m ? "100%" : s,
    height: m ? "100%" : o,
    borderRadius: l,
    border: `${c} ${a} ${n}`,
    objectFit: d,
    opacity: g,
    boxShadow: p ? f || "0 4px 12px rgba(0,0,0,0.15)" : "none",
    transition: `all ${z} ease`,
    display: "block"
  }, Y = (k) => {
    k.currentTarget.style.opacity = C !== void 0 ? C.toString() : L.opacity?.toString() || "1", k.currentTarget.style.boxShadow = y ? "0 8px 20px rgba(0,0,0,0.3)" : L.boxShadow?.toString() || "none", k.currentTarget.style.transform = `scale(${$ || 1}) rotate(${S || 0}deg)`;
  }, V = (k) => {
    k.currentTarget.style.opacity = L.opacity?.toString() || "1", k.currentTarget.style.boxShadow = L.boxShadow?.toString() || "none", k.currentTarget.style.transform = "scale(1) rotate(0deg)";
  }, w = (() => {
    switch (P) {
      case "x":
        return { overflowX: "hidden" };
      case "y":
        return { overflowY: "hidden" };
      default:
        return { overflow: P };
    }
  })();
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      role: "img",
      "aria-label": r,
      onClick: A,
      className: B,
      style: {
        width: m ? "100%" : s,
        height: m ? "auto" : o,
        padding: j,
        margin: b,
        position: "relative",
        cursor: A ? "pointer" : "default",
        display: "inline-block",
        transition: `all ${z} ease`,
        ...w,
        ...E
        // Allow external override
      },
      children: [
        u ? /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: u
          }
        ) : /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t,
            alt: r,
            loading: T ? "lazy" : "eager",
            style: L,
            onMouseEnter: Y,
            onMouseLeave: V
          }
        ),
        x && /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: h,
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
            children: x
          }
        )
      ]
    }
  );
}, ot = ({
  children: t,
  type: r = "button",
  onClick: s,
  iconBefore: o,
  iconAfter: l,
  className: n = "",
  style: a,
  // ✅ NEW
  fullWidth: c = !1,
  disabled: p = !1,
  loading: f = !1,
  loadingText: g = "Loading...",
  paddingHorizontal: d = 10,
  paddingVertical: x = 8,
  fontSize: h = "1rem",
  fontWeight: u = 400,
  borderRadius: m = 12,
  backgroundColor: j = "rgba(0, 255, 0, 0.15)",
  textColor: b = "green",
  borderColor: T = "transparent",
  hoverBgColor: C = "#2563EB",
  hoverTextColor: y = "#2563EB",
  hoverBorderColor: $,
  boxShadow: S = "0 1px 2px rgba(0, 0, 0, 0.05)"
}) => {
  const [z, P] = J.useState(!1), B = z && !p && y || b, E = z && !p && $ || T, A = z && !p ? C : j, L = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${x}px ${d}px`,
    fontSize: h,
    fontWeight: u,
    borderRadius: `${m}px`,
    width: c ? "100%" : "auto",
    color: B,
    border: `1px solid ${E}`,
    backgroundColor: A,
    boxShadow: S,
    cursor: p ? "not-allowed" : "pointer",
    opacity: p ? 0.6 : 1,
    transition: "all 0.2s ease-in-out",
    gap: "8px",
    ...a
    // ✅ Apply user-supplied inline styles last
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: r,
      className: n,
      style: L,
      onClick: !p && !f ? s : void 0,
      disabled: p,
      onMouseEnter: () => P(!0),
      onMouseLeave: () => P(!1),
      children: [
        f ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
          /* @__PURE__ */ e.jsx("span", { children: g })
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          o && /* @__PURE__ */ e.jsx("span", { children: o }),
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
const Ce = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $e = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, s, o) => o ? o.toUpperCase() : s.toLowerCase()
), ce = (t) => {
  const r = $e(t);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, de = (...t) => t.filter((r, s, o) => !!r && r.trim() !== "" && o.indexOf(r) === s).join(" ").trim(), ze = (t) => {
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
var Ee = {
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
const Me = ne(
  ({
    color: t = "currentColor",
    size: r = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: o,
    className: l = "",
    children: n,
    iconNode: a,
    ...c
  }, p) => se(
    "svg",
    {
      ref: p,
      ...Ee,
      width: r,
      height: r,
      stroke: t,
      strokeWidth: o ? Number(s) * 24 / Number(r) : s,
      className: de("lucide", l),
      ...!n && !ze(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...a.map(([f, g]) => se(f, g)),
      ...Array.isArray(n) ? n : [n]
    ]
  )
);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U = (t, r) => {
  const s = ne(
    ({ className: o, ...l }, n) => se(Me, {
      ref: n,
      iconNode: r,
      className: de(
        `lucide-${Ce(ce(t))}`,
        `lucide-${t}`,
        o
      ),
      ...l
    })
  );
  return s.displayName = ce(t), s;
};
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], _e = U("circle-alert", Re);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Le = U("circle-check-big", Ae);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = [
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
], Ie = U("eye-off", Pe);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Fe = U("eye", Oe);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], Be = U("info", We);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], ue = U("maximize", Ve);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
], xe = U("minimize", He);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], pe = U("pause", Ye);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], fe = U("play", De);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], me = U("rotate-ccw", Ue);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = [
  [
    "path",
    {
      d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
      key: "15892j"
    }
  ],
  ["path", { d: "M3 20V4", key: "1ptbpl" }]
], he = U("skip-back", qe);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = [
  ["path", { d: "M21 4v16", key: "7j8fe9" }],
  [
    "path",
    {
      d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "zs4d6"
    }
  ]
], ge = U("skip-forward", Xe);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ge = U("triangle-alert", Ze);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], be = U("volume-2", Je);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], ye = U("volume-x", Qe);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], je = U("x", Ke), lt = ne(
  ({
    type: t = "text",
    placeholder: r = "",
    label: s,
    value: o,
    defaultValue: l,
    onChange: n,
    name: a = "",
    disabled: c = !1,
    readOnly: p = !1,
    required: f = !1,
    error: g,
    success: d = !1,
    autoFocus: x = !1,
    iconLeft: h,
    iconRight: u,
    borderColor: m = "#ccc",
    focusBorderColor: j = "#2563eb",
    hoverBorderColor: b = "#4b5563",
    backgroundColor: T = "#ffffff",
    textColor: C = "#111827",
    errorColor: y = "#dc2626",
    successColor: $ = "#16a34a",
    labelColor: S = "#374151",
    size: z = "md",
    radius: P = "6px",
    fontSize: B = "14px",
    rows: E = 4,
    cols: A,
    maxLength: L,
    resize: Y = !0,
    showCharacterCount: V = !0,
    className: w,
    style: k
  }, I) => {
    const M = X(null), [D, i] = N(l || ""), [v, F] = N(!1);
    ke(I, () => M.current);
    const H = (_) => {
      L && _.target.value.length > L || (i(_.target.value), n && n(a, _.target.value));
    }, W = () => {
      switch (z) {
        case "sm":
          return "6px 12px";
        case "lg":
          return "12px 20px";
        default:
          return "10px 16px";
      }
    }, R = () => {
      switch (z) {
        case "sm":
          return "13px";
        case "lg":
          return "16px";
        default:
          return B;
      }
    }, O = g ? y : d ? $ : m, Z = {
      width: "100%",
      padding: W(),
      paddingLeft: h ? "40px" : W().split(" ")[1],
      paddingRight: u || t === "password" ? "40px" : W().split(" ")[1],
      border: `1px solid ${O}`,
      borderRadius: P,
      backgroundColor: T,
      color: C,
      fontSize: R(),
      outline: "none",
      resize: t === "textarea" && !Y ? "none" : void 0,
      ...k
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: { width: "100%", fontFamily: "sans-serif" },
        className: w,
        children: [
          s && /* @__PURE__ */ e.jsxs(
            "label",
            {
              htmlFor: a,
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
                f && /* @__PURE__ */ e.jsx("span", { style: { color: y }, children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { style: { position: "relative", width: "100%" }, children: [
            h && /* @__PURE__ */ e.jsx(
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
                children: h
              }
            ),
            t === "textarea" ? /* @__PURE__ */ e.jsx(
              "textarea",
              {
                ref: M,
                name: a,
                value: o ?? D,
                onChange: H,
                placeholder: r,
                rows: E,
                cols: A,
                maxLength: L,
                disabled: c,
                readOnly: p,
                autoFocus: x,
                style: Z,
                onFocus: (_) => {
                  _.currentTarget.style.borderColor = j;
                },
                onBlur: (_) => {
                  _.currentTarget.style.borderColor = O;
                },
                onMouseEnter: (_) => {
                  _.currentTarget.style.borderColor = b;
                },
                onMouseLeave: (_) => {
                  _.currentTarget.style.borderColor = O;
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: M,
                id: a,
                name: a,
                type: t === "password" ? v ? "text" : "password" : t,
                value: o ?? D,
                onChange: H,
                placeholder: r,
                disabled: c,
                readOnly: p,
                autoFocus: x,
                style: Z,
                onFocus: (_) => {
                  _.currentTarget.style.borderColor = j;
                },
                onBlur: (_) => {
                  _.currentTarget.style.borderColor = O;
                },
                onMouseEnter: (_) => {
                  _.currentTarget.style.borderColor = b;
                },
                onMouseLeave: (_) => {
                  _.currentTarget.style.borderColor = O;
                }
              }
            ),
            t === "password" && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => F(!v),
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
                children: v ? /* @__PURE__ */ e.jsx(Ie, { size: 18 }) : /* @__PURE__ */ e.jsx(Fe, { size: 18 })
              }
            ),
            u && t !== "password" && /* @__PURE__ */ e.jsx(
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
                children: u
              }
            )
          ] }),
          t === "textarea" && V && L && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                textAlign: "right",
                fontSize: "12px",
                color: "#6b7280",
                marginTop: "4px"
              },
              children: [
                (o ?? D).length,
                "/",
                L
              ]
            }
          ),
          g && /* @__PURE__ */ e.jsx(
            "p",
            {
              style: {
                color: y,
                fontSize: "12px",
                marginTop: "4px",
                lineHeight: "1.3"
              },
              children: g
            }
          )
        ]
      }
    );
  }
), at = ({
  title: t,
  titleIcon: r,
  items: s,
  type: o = "unordered",
  bulletColor: l = "#2563eb",
  textColor: n = "#111827",
  backgroundColor: a = "#fff",
  borderColor: c = "#e5e7eb",
  fontSize: p = "15px",
  fontWeight: f = 500,
  borderRadius: g = "12px",
  padding: d = "16px",
  spacing: x = "12px",
  className: h,
  style: u
}) => {
  const m = o === "ordered", j = o === "inline", b = {
    backgroundColor: a,
    borderColor: c,
    color: n,
    borderWidth: c ? "1px" : "0px",
    borderStyle: "solid",
    borderRadius: g,
    padding: d,
    ...u
  }, T = j ? {
    display: "flex",
    gap: x,
    paddingLeft: 0,
    listStyleType: "none",
    margin: 0
  } : {
    listStyleType: m ? "decimal" : "none",
    paddingLeft: m ? "20px" : "0",
    margin: 0
  }, C = m ? "ol" : "ul";
  return /* @__PURE__ */ e.jsxs("div", { className: h, style: b, children: [
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
    /* @__PURE__ */ e.jsx(C, { style: T, children: s.map((y, $) => /* @__PURE__ */ e.jsx(
      we,
      {
        ...y,
        bulletColor: l,
        textColor: n,
        fontSize: p,
        fontWeight: f,
        spacing: x,
        isInline: j
      },
      $
    )) })
  ] });
}, we = ({
  text: t,
  icon: r,
  onClick: s,
  subItems: o,
  bulletColor: l,
  textColor: n,
  fontSize: a,
  fontWeight: c,
  spacing: p,
  isInline: f
}) => {
  const g = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: f ? "0" : p
  }, d = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: a,
    fontWeight: c,
    color: n,
    cursor: s ? "pointer" : "default"
  }, x = {
    width: "8px",
    height: "8px",
    backgroundColor: l,
    borderRadius: "50%",
    flexShrink: 0
  }, h = {
    listStyleType: "disc",
    paddingLeft: "20px",
    margin: 0
  };
  return /* @__PURE__ */ e.jsxs("li", { style: g, children: [
    /* @__PURE__ */ e.jsxs("div", { style: d, onClick: s, children: [
      r ? /* @__PURE__ */ e.jsx("span", { style: { fontSize: "16px", color: n }, children: r }) : !f && /* @__PURE__ */ e.jsx("span", { style: x }),
      /* @__PURE__ */ e.jsx("span", { children: t })
    ] }),
    o && o.length > 0 && /* @__PURE__ */ e.jsx("ul", { style: h, children: o.map((u, m) => /* @__PURE__ */ e.jsx(
      we,
      {
        ...u,
        bulletColor: l,
        textColor: n,
        fontSize: a,
        fontWeight: c,
        spacing: p,
        isInline: !1
      },
      m
    )) })
  ] });
}, oe = ({
  tabs: t,
  defaultActive: r = 0,
  tabPosition: s,
  activeTabClassName: o = "",
  inactiveTabClassName: l = "",
  tabContainerClassName: n = "",
  contentContainerClassName: a = "",
  className: c = "",
  activeTabStyle: p,
  inactiveTabStyle: f,
  tabContainerStyle: g,
  contentContainerStyle: d,
  style: x,
  tabsWidth: h = "240px",
  tabGap: u = 8,
  tabPadding: m = "12px 16px",
  tabBorderRadius: j = 12,
  primaryColor: b = "#2563eb",
  textColor: T = "#374151",
  backgroundColor: C = "#ffffff",
  hoverTextColor: y = "#1e40af",
  responsiveBreakpoint: $ = 768,
  showDrawerLabel: S = "Select Tab"
}) => {
  const [z, P] = N(r), [B, E] = N(null), [A, L] = N(!1), [Y, V] = N(!1);
  q(() => {
    const W = () => {
      L(window.innerWidth <= $);
    };
    return W(), window.addEventListener("resize", W), () => window.removeEventListener("resize", W);
  }, [$]);
  const w = s === "left" || s === "right", I = {
    display: "flex",
    flexDirection: w ? A ? "column" : s === "left" ? "row" : "row-reverse" : "column",
    width: "100%",
    height: "100%",
    backgroundColor: C,
    ...w && !A ? {} : { flexWrap: "wrap" },
    ...x
  }, M = {
    width: w && !A ? h : "100%",
    display: "flex",
    flexDirection: w && !A ? "column" : "row",
    justifyContent: !w && s === "top" ? "center" : void 0,
    gap: u,
    padding: 8,
    boxSizing: "border-box",
    ...g
  }, D = {
    flexGrow: 1,
    padding: 24,
    background: "#f9fafb",
    boxSizing: "border-box",
    minWidth: 0,
    ...w && !A ? { width: "calc(100% - " + h + ")" } : { width: "100%" },
    ...d
  }, i = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: m,
    borderRadius: j,
    border: "none",
    backgroundColor: "transparent",
    fontWeight: 500,
    transition: "all 0.2s ease",
    width: w && !A ? "100%" : "auto",
    marginBottom: w && !A ? u : 0,
    marginRight: !w || A ? u : 0,
    justifyContent: "flex-start"
  }, v = {
    backgroundColor: b,
    color: "#fff",
    fontWeight: 700,
    boxShadow: `0 2px 10px ${b}55`,
    ...p
  }, F = {
    backgroundColor: "transparent",
    color: T,
    ...f
  }, H = {
    backgroundColor: `${b}22`,
    color: y
  };
  return /* @__PURE__ */ e.jsxs("div", { className: c, style: I, children: [
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
    A && w ? /* @__PURE__ */ e.jsxs("div", { style: { width: "100%", marginBottom: 12 }, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => V(!Y),
          style: {
            ...i,
            ...v,
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
      Y && /* @__PURE__ */ e.jsx("div", { className: "custom-tab-mobile-drawer", children: t.map((W, R) => {
        const O = R === z, Z = B === R;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              P(R), V(!1);
            },
            onMouseEnter: () => E(R),
            onMouseLeave: () => E(null),
            className: O ? o : l,
            style: {
              ...i,
              ...O ? v : F,
              ...Z && !O ? H : {}
            },
            children: [
              W.icon && /* @__PURE__ */ e.jsx("span", { children: W.icon }),
              /* @__PURE__ */ e.jsx("span", { children: W.label })
            ]
          },
          R
        );
      }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "nav",
      {
        className: n,
        style: M,
        "aria-label": "Tabs Navigation",
        children: t.map((W, R) => {
          const O = R === z, Z = B === R;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => P(R),
              onMouseEnter: () => E(R),
              onMouseLeave: () => E(null),
              className: O ? o : l,
              style: {
                ...i,
                ...O ? v : F,
                ...Z && !O ? H : {}
              },
              children: [
                W.icon && /* @__PURE__ */ e.jsx("span", { children: W.icon }),
                /* @__PURE__ */ e.jsx("span", { children: W.label })
              ]
            },
            R
          );
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "section",
      {
        className: a,
        style: D,
        role: "tabpanel",
        children: t[z]?.content
      }
    )
  ] });
}, it = (t) => /* @__PURE__ */ e.jsx(oe, { ...t, tabPosition: "left" }), ct = (t) => /* @__PURE__ */ e.jsx(oe, { ...t, tabPosition: "top" }), dt = (t) => /* @__PURE__ */ e.jsx(oe, { ...t, tabPosition: "right" }), ut = ({
  src: t,
  poster: r,
  autoPlay: s = !1,
  loop: o = !1,
  controls: l = !1,
  width: n = "100%",
  height: a = "150px",
  borderRadius: c = "12px",
  backgroundColor: p = "#1e1e1e",
  primaryColor: f = "#ff4081",
  padding: g = "16px",
  className: d
}) => {
  const x = X(null), h = X(null), [u, m] = N(s), [j, b] = N(0), [T, C] = N(0), [y, $] = N(0.5), [S, z] = N(!1), [P, B] = N(o);
  q(() => {
    x.current && (x.current.volume = y, x.current.loop = P);
  }, [y, P]);
  const E = () => {
    x.current && (u ? x.current.pause() : x.current.play(), m(!u));
  }, A = () => {
    x.current && (b(x.current.currentTime), C(x.current.duration));
  }, L = (k) => {
    if (!x.current || !k.currentTarget) return;
    const I = k.currentTarget.getBoundingClientRect(), D = (k.clientX - I.left) / I.width * T;
    x.current.currentTime = D, b(D);
  }, Y = (k) => {
    x.current && (x.current.currentTime += k);
  }, V = () => {
    h.current && (S ? document.exitFullscreen?.() : h.current.requestFullscreen?.(), z(!S));
  }, w = (k) => {
    const I = Math.floor(k / 60), M = Math.floor(k % 60);
    return `${I}:${M < 10 ? "0" : ""}${M}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: h,
      className: d,
      style: {
        position: "relative",
        width: n,
        backgroundColor: p,
        borderRadius: c,
        color: "#fff",
        overflow: "hidden",
        padding: g,
        boxSizing: "border-box",
        maxWidth: "100%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "video",
          {
            ref: x,
            src: t,
            poster: r,
            autoPlay: s,
            loop: o,
            controls: l,
            onTimeUpdate: A,
            onLoadedMetadata: A,
            style: {
              width: "100%",
              height: a,
              borderRadius: c,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => Y(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: E,
                  style: {
                    background: f,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": u ? "Pause" : "Play",
                  children: u ? /* @__PURE__ */ e.jsx(pe, { size: 20 }) : /* @__PURE__ */ e.jsx(fe, { size: 20 })
                }
              ),
              /* @__PURE__ */ e.jsx("button", { onClick: () => Y(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: w(j) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  " ",
                  "/ ",
                  w(T)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: L,
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
                        width: `${j / T * 100 || 0}%`,
                        height: "100%",
                        background: f,
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
                    onClick: () => B(!P),
                    "aria-label": "Toggle Loop",
                    children: /* @__PURE__ */ e.jsx(me, { size: 18, color: P ? f : void 0 })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: () => $(y > 0 ? 0 : 0.5),
                    "aria-label": "Toggle Mute",
                    children: y > 0 ? /* @__PURE__ */ e.jsx(be, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: V, "aria-label": "Toggle Fullscreen", children: S ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(ue, { size: 18 }) })
              ] })
            ]
          }
        )
      ]
    }
  );
}, xt = ({
  src: t,
  thumbnail: r,
  autoPlay: s = !1,
  loop: o = !1,
  backgroundColor: l = "#000000",
  primaryColor: n = "#10b981",
  secondaryColor: a = "#ffffff",
  borderRadius: c = "12px",
  padding: p = "16px",
  width: f = "100%",
  className: g
}) => {
  const d = X(null), x = X(null), [h, u] = N(s), [m, j] = N(0), [b, T] = N(0), [C, y] = N(0.5), [$, S] = N(!1), [z, P] = N(o);
  q(() => {
    d.current && (d.current.volume = C);
  }, [C]), q(() => {
    d.current && (d.current.loop = z);
  }, [z]);
  const B = () => {
    d.current && (h ? d.current.pause() : d.current.play(), u(!h));
  }, E = () => {
    d.current && (j(d.current.currentTime), T(d.current.duration));
  }, A = (w) => {
    if (!d.current || !w.currentTarget) return;
    const k = w.currentTarget.getBoundingClientRect(), M = (w.clientX - k.left) / k.width * b;
    d.current.currentTime = M, j(M);
  }, L = (w) => {
    d.current && (d.current.currentTime += w);
  }, Y = () => {
    x.current && ($ ? document.exitFullscreen?.() : x.current.requestFullscreen?.(), S(!$));
  }, V = (w) => {
    const k = Math.floor(w / 60), I = Math.floor(w % 60);
    return `${k}:${I < 10 ? "0" : ""}${I}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: x,
      className: g,
      style: {
        position: "relative",
        width: f,
        backgroundColor: l,
        borderRadius: c,
        color: a,
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
            autoPlay: s,
            loop: o,
            onTimeUpdate: E,
            onLoadedMetadata: E
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => L(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: B,
                  style: {
                    background: n,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": h ? "Pause" : "Play",
                  children: h ? /* @__PURE__ */ e.jsx(pe, { size: 20 }) : /* @__PURE__ */ e.jsx(fe, { size: 20 })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", marginRight: "4px" }, children: V(m) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  "/ ",
                  V(b)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: A,
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
                        width: `${m / b * 100 || 0}%`,
                        height: "100%",
                        background: n,
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
                        onClick: () => P(!z),
                        "aria-label": "Toggle Loop",
                        children: /* @__PURE__ */ e.jsx(me, { size: 18, color: z ? n : void 0 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => y(C > 0 ? 0 : 0.5),
                        "aria-label": "Toggle Mute",
                        children: C > 0 ? /* @__PURE__ */ e.jsx(be, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("button", { onClick: Y, "aria-label": "Toggle Fullscreen", children: $ ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(ue, { size: 18 }) })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}, pt = ({
  display: t = { sm: "block", md: "flex", lg: "grid" },
  flexDirection: r = { sm: "column", md: "row", lg: "row" },
  justifyContent: s = { sm: "flex-start", md: "center", lg: "space-between" },
  alignItems: o = { sm: "stretch", md: "center", lg: "center" },
  gridTemplateColumns: l = { sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
  gridTemplateRows: n = { sm: "auto", md: "auto", lg: "auto" },
  gap: a = { sm: "10px", md: "20px", lg: "30px" },
  rowGap: c = { sm: "10px", md: "15px", lg: "20px" },
  columnGap: p = { sm: "10px", md: "15px", lg: "20px" },
  width: f = { sm: "100%", md: "90%", lg: "80%" },
  maxWidth: g = { sm: "100%", md: "800px", lg: "1200px" },
  height: d = { sm: "auto", md: "auto", lg: "auto" },
  padding: x = { sm: "10px", md: "20px", lg: "40px" },
  margin: h = { sm: "0 auto", md: "0 auto", lg: "0 auto" },
  textAlign: u = { sm: "left", md: "center", lg: "center" },
  backgroundColor: m = "#ffffff",
  border: j = { sm: "none", md: "1px solid #ddd", lg: "2px solid #ccc" },
  borderRadius: b = { sm: "0px", md: "8px", lg: "12px" },
  boxShadow: T = { sm: "none", md: "0px 4px 6px rgba(0,0,0,0.1)", lg: "0px 6px 10px rgba(0,0,0,0.15)" },
  overflow: C = { sm: "visible", md: "hidden", lg: "auto" },
  children: y,
  className: $ = ""
}) => {
  const [S, z] = N("lg");
  q(() => {
    const B = () => {
      const E = window.innerWidth;
      E <= 767 ? z("sm") : E >= 768 && E <= 1023 ? z("md") : z("lg");
    };
    return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
  }, []);
  const P = ee(
    () => ({
      display: t[S],
      flexDirection: r[S],
      justifyContent: s[S],
      alignItems: o[S],
      gridTemplateColumns: l[S],
      gridTemplateRows: n[S],
      gap: a[S],
      rowGap: c[S],
      columnGap: p[S],
      width: f[S],
      maxWidth: g[S],
      height: d[S],
      padding: x[S],
      margin: h[S],
      textAlign: u[S],
      backgroundColor: m,
      border: j[S],
      borderRadius: b[S],
      boxShadow: T[S],
      overflow: C[S],
      boxSizing: "border-box"
    }),
    [S, t, r, s, o, l, n, a, c, p, f, g, d, x, h, u, m, j, b, T, C]
  );
  return /* @__PURE__ */ e.jsx("div", { className: $, style: P, children: y });
}, ft = ({
  items: t,
  allowMultiple: r = !1,
  defaultOpenIndex: s = [],
  borderColor: o = "#d1d5db",
  backgroundColor: l = "#ffffff",
  textColor: n = "#111827",
  hoverBgColor: a = "#f3f4f6",
  hoverTextColor: c = "#111827",
  paddingVertical: p = "16px",
  paddingHorizontal: f = "16px",
  margin: g = "12px 0",
  iconOpen: d = "−",
  iconClose: x = "+",
  transitionDuration: h = "300ms",
  borderRadius: u = "8px",
  shadow: m = "0 2px 8px rgba(0, 0, 0, 0.05)",
  contentPadding: j = "16px",
  fontSize: b = "16px",
  fontWeight: T = "600",
  iconSize: C = "18px",
  contentFontSize: y = "14px",
  contentFontWeight: $ = "400",
  contentBackgroundColor: S = "#ffffff",
  contentTextColor: z = "#111827",
  className: P,
  style: B
}) => {
  const [E, A] = N(s), L = X([]), Y = X([]);
  q(() => {
    L.current.forEach((w, k) => {
      w && (w.style.maxHeight = E.includes(k) ? `${w.scrollHeight}px` : "0px");
    });
  }, [E]);
  const V = (w) => {
    A(
      (k) => r ? k.includes(w) ? k.filter((I) => I !== w) : [...k, w] : k.includes(w) ? [] : [w]
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: P, style: { width: "100%", ...B }, children: t.map((w, k) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        border: `1px solid ${o}`,
        borderRadius: u,
        margin: g,
        boxShadow: m,
        overflow: "hidden",
        transition: `all ${h} ease`
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: (I) => {
              Y.current[k] = I;
            },
            onClick: () => V(k),
            style: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: l,
              color: n,
              padding: `${p} ${f}`,
              fontWeight: T,
              fontSize: b,
              cursor: "pointer",
              outline: "none",
              border: "none",
              transition: `all ${h}`
            },
            onMouseEnter: (I) => {
              I.currentTarget.style.backgroundColor = a, I.currentTarget.style.color = c;
            },
            onMouseLeave: (I) => {
              I.currentTarget.style.backgroundColor = l, I.currentTarget.style.color = n;
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: w.title }),
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: C }, children: E.includes(k) ? d : x })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: (I) => {
              L.current[k] = I;
            },
            style: {
              overflow: "hidden",
              maxHeight: E.includes(k) ? `${L.current[k]?.scrollHeight}px` : "0px",
              transition: `max-height ${h} ease-in-out`
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                style: {
                  borderTop: `1px solid ${o}`,
                  backgroundColor: S,
                  color: z,
                  padding: j,
                  fontSize: y,
                  fontWeight: $
                },
                children: w.content
              }
            )
          }
        )
      ]
    },
    k
  )) });
}, mt = ({
  type: t,
  name: r,
  options: s,
  selectedValues: o,
  onChange: l,
  disabled: n = !1,
  readOnly: a = !1,
  required: c = !1,
  error: p,
  className: f = "",
  customIcon: g
}) => {
  const d = t === "checkbox", x = (h) => {
    if (l)
      if (d) {
        const u = Array.isArray(o) ? o.includes(h) ? o.filter((m) => m !== h) : [...o, h] : [h];
        l(u);
      } else
        l(h);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${f}`, children: [
    s.map((h) => {
      const u = d ? Array.isArray(o) && o.includes(h.value) : o === h.value;
      return /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: `flex items-center space-x-2 cursor-pointer p-2 ${n ? "opacity-50 cursor-not-allowed" : ""}`,
          children: [
            g ? g(u) : /* @__PURE__ */ e.jsx(
              "span",
              {
                className: `flex justify-center items-center w-5 h-5 border ${u ? "bg-blue-500 border-blue-500" : "border-gray-400"} rounded-${d ? "md" : "full"}`,
                children: u && /* @__PURE__ */ e.jsx("span", { className: "w-3 h-3 bg-white rounded-full" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: t,
                name: r,
                value: h.value,
                checked: u,
                disabled: n || a,
                required: c,
                onChange: () => x(h.value),
                className: "hidden"
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-gray-700", children: h.label })
          ]
        },
        h.value
      );
    }),
    p && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-red-500 mt-1", children: p })
  ] });
}, ht = ({
  label: t = "Open Drawer",
  icon: r,
  iconPosition: s = "left",
  onClick: o,
  style: l = {}
}) => /* @__PURE__ */ e.jsxs(
  "button",
  {
    onClick: o,
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
      r && s === "left" && r,
      t,
      r && s === "right" && r
    ]
  }
), gt = ({
  open: t,
  onClose: r,
  position: s = "right",
  width: o = "300px",
  height: l = "300px",
  backgroundColor: n = "#fff",
  transitionDuration: a = 300,
  style: c = {},
  children: p,
  showCloseButton: f = !0,
  closeButtonStyle: g = {}
}) => {
  const [d, x] = N(t);
  q(() => {
    t ? x(!0) : setTimeout(() => x(!1), a);
  }, [t, a]);
  const h = ee(() => {
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
  }, [t, s]), u = {
    position: "fixed",
    zIndex: 1e3,
    backgroundColor: n,
    transition: `transform ${a}ms ease, opacity ${a}ms ease`,
    transform: h,
    opacity: t ? 1 : 0,
    ...c,
    ...s === "left" || s === "right" ? { top: 0, [s]: 0, width: o, height: "100%" } : { left: 0, [s]: 0, height: l, width: "100%" }
  }, m = {
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
  }, j = {
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
    /* @__PURE__ */ e.jsx("div", { style: m, onClick: r }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: {
          ...u,
          display: "block",
          visibility: d ? "visible" : "hidden",
          pointerEvents: t ? "auto" : "none"
        },
        children: [
          f && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: r,
              style: { ...j, ...g },
              children: /* @__PURE__ */ e.jsx(je, { size: 20, color: "rgba(255, 0, 0, 1)" })
            }
          ),
          p
        ]
      }
    )
  ] });
}, bt = ({
  options: t,
  value: r,
  defaultValue: s,
  onChange: o,
  placeholder: l = "Select an option",
  disabled: n = !1,
  borderColor: a = "#ccc",
  backgroundColor: c = "#fff",
  textColor: p = "#333",
  hoverColor: f = "#f0f0f0",
  padding: g = "12px 16px",
  margin: d = "0 0 1rem 0",
  dropdownWidth: x = "100%",
  dropdownHeight: h = "200px",
  borderRadius: u = "8px",
  boxShadow: m = "0 4px 8px rgba(0,0,0,0.1)",
  optionPadding: j = "10px 12px",
  optionGap: b = "8px",
  transitionDuration: T = "0.25s",
  className: C = "",
  dropdownStyle: y,
  dropdownClassName: $ = "",
  optionStyle: S,
  optionClassName: z = "",
  iconPrefix: P,
  iconSuffix: B
}) => {
  const [E, A] = N(s), [L, Y] = N(!1), V = X(null);
  q(() => {
    const M = (D) => {
      V.current && !V.current.contains(D.target) && Y(!1);
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, []);
  const w = (M) => {
    A(M), Y(!1), o && o(M);
  }, k = r ?? E, I = t.find((M) => M.value === k);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: V,
      className: C,
      style: {
        position: "relative",
        width: x,
        margin: d,
        fontFamily: "sans-serif",
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => Y((M) => !M),
            disabled: n,
            "aria-haspopup": "listbox",
            "aria-expanded": L,
            style: {
              width: "100%",
              padding: g,
              backgroundColor: c,
              color: p,
              border: `1px solid ${a}`,
              borderRadius: u,
              boxShadow: n ? "none" : m,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: n ? "not-allowed" : "pointer",
              opacity: n ? 0.6 : 1,
              transition: `all ${T} ease-in-out`
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: b }, children: [
                P && /* @__PURE__ */ e.jsx("span", { children: P }),
                /* @__PURE__ */ e.jsx("span", { children: I?.label || l })
              ] }),
              B || /* @__PURE__ */ e.jsx("span", { style: { marginLeft: "8px" }, children: "▼" })
            ]
          }
        ),
        L && /* @__PURE__ */ e.jsx(
          "ul",
          {
            role: "listbox",
            className: $,
            style: {
              position: "absolute",
              top: "100%",
              left: 0,
              zIndex: 1e3,
              width: "100%",
              maxHeight: h,
              overflowY: "auto",
              backgroundColor: c,
              border: `1px solid ${a}`,
              borderRadius: u,
              boxShadow: m,
              marginTop: "4px",
              transition: `all ${T} ease`,
              ...y
            },
            children: t.map((M) => /* @__PURE__ */ e.jsxs(
              "li",
              {
                onClick: () => w(M.value),
                role: "option",
                className: z,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: b,
                  padding: j,
                  cursor: "pointer",
                  backgroundColor: E === M.value ? f : c,
                  transition: `background ${T}`,
                  ...S
                },
                onMouseEnter: (D) => D.currentTarget.style.backgroundColor = f,
                onMouseLeave: (D) => D.currentTarget.style.backgroundColor = E === M.value ? f : c,
                children: [
                  M.icon && /* @__PURE__ */ e.jsx("span", { children: M.icon }),
                  M.label
                ]
              },
              M.value
            ))
          }
        )
      ]
    }
  );
}, yt = ({
  columns: t,
  data: r,
  className: s = "",
  pagination: o = !0,
  rowsPerPage: l = 5,
  colors: n = {
    headerBg: "bg-blue-500",
    headerText: "text-white",
    rowBg: "bg-white",
    rowText: "text-black",
    borderColor: "border-gray-300",
    hoverBg: "bg-gray-200",
    paginationBg: "bg-gray-300",
    paginationText: "text-black"
  }
}) => {
  const [a, c] = N(null), [p, f] = N("asc"), [g, d] = N(1), x = (m) => {
    a === m ? f(p === "asc" ? "desc" : "asc") : (c(m), f("asc"));
  }, h = [...r].sort((m, j) => a ? p === "asc" ? m[a] > j[a] ? 1 : -1 : m[a] < j[a] ? 1 : -1 : 0), u = o ? h.slice(
    (g - 1) * l,
    g * l
  ) : h;
  return /* @__PURE__ */ e.jsxs("div", { className: `overflow-x-auto w-full ${s}`, children: [
    /* @__PURE__ */ e.jsxs("table", { className: `w-full border-collapse border ${n.borderColor}`, children: [
      /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { className: `${n.headerBg} ${n.headerText} text-left`, children: t.map(({ key: m, label: j, sortable: b }) => /* @__PURE__ */ e.jsx(
        "th",
        {
          onClick: () => b && x(m),
          className: `p-3 border ${n.borderColor} ${b ? "cursor-pointer hover:opacity-80" : ""}`,
          children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            j,
            " ",
            b && (a === m ? p === "asc" ? /* @__PURE__ */ e.jsx(
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
            ) : /* @__PURE__ */ e.jsx(
              "svg",
              {
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0",
                viewBox: "0 0 576 512",
                height: "15px",
                width: "15px",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ e.jsx("path", { d: "M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32z" })
              }
            ) : /* @__PURE__ */ e.jsx(
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
            ))
          ] })
        },
        m
      )) }) }),
      /* @__PURE__ */ e.jsx("tbody", { children: u.map((m, j) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: `${n.rowBg} ${n.rowText} hover:${n.hoverBg}`,
          children: t.map(({ key: b }) => /* @__PURE__ */ e.jsx("td", { className: `p-3 border ${n.borderColor}`, children: m[b] }, b))
        },
        j
      )) })
    ] }),
    o && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mt-3 p-2", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: `px-3 py-1 ${n.paginationBg} ${n.paginationText} rounded-md disabled:opacity-50`,
          disabled: g === 1,
          onClick: () => d((m) => Math.max(m - 1, 1)),
          children: "Prev"
        }
      ),
      /* @__PURE__ */ e.jsxs("span", { className: `${n.paginationText}`, children: [
        "Page ",
        g
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: `px-3 py-1 ${n.paginationBg} ${n.paginationText} rounded-md disabled:opacity-50`,
          disabled: g * l >= r.length,
          onClick: () => d((m) => m + 1),
          children: "Next"
        }
      )
    ] })
  ] });
}, jt = ({
  columns: t = { sm: 1, md: 2, lg: 3 },
  rows: r = { sm: "auto", md: "auto", lg: "auto" },
  gap: s = { sm: "10px", md: "20px", lg: "30px" },
  rowGap: o = { sm: "10px", md: "15px", lg: "20px" },
  columnGap: l = { sm: "10px", md: "15px", lg: "20px" },
  padding: n = { sm: "10px", md: "20px", lg: "40px" },
  alignItems: a = { sm: "stretch", md: "center", lg: "center" },
  justifyItems: c = { sm: "stretch", md: "center", lg: "center" },
  backgroundColor: p = "#f4f4f4",
  width: f = { sm: "100%", md: "100%", lg: "100%" },
  maxWidth: g = { sm: "100%", md: "100%", lg: "100%" },
  height: d = { sm: "auto", md: "auto", lg: "auto" },
  children: x,
  className: h = ""
}) => {
  const [u, m] = N("lg");
  q(() => {
    const b = () => {
      const T = window.innerWidth;
      T <= 767 ? m("sm") : T >= 768 && T <= 1023 ? m("md") : m("lg");
    };
    return b(), window.addEventListener("resize", b), () => window.removeEventListener("resize", b);
  }, []);
  const j = ee(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${t[u]}, 1fr)`,
      gridTemplateRows: r[u] !== "auto" ? `repeat(${r[u]}, 1fr)` : "auto",
      gap: s[u],
      rowGap: o[u],
      columnGap: l[u],
      padding: n[u],
      alignItems: a[u],
      justifyItems: c[u],
      backgroundColor: p,
      width: f[u],
      maxWidth: g[u],
      height: d[u]
    }),
    [u, t, r, s, o, l, n, a, c, f, g, d, p]
  );
  return /* @__PURE__ */ e.jsx("div", { className: h, style: j, children: x });
}, wt = ({
  direction: t = { sm: "column", md: "row", lg: "row" },
  align: r = { sm: "center", md: "center", lg: "center" },
  justify: s = { sm: "center", md: "space-between", lg: "space-around" },
  gap: o = { sm: "10px", md: "20px", lg: "30px" },
  padding: l = { sm: "10px", md: "20px", lg: "40px" },
  backgroundColor: n = "#f4f4f4",
  width: a = { sm: "100%", md: "100%", lg: "100%" },
  height: c = { sm: "auto", md: "auto", lg: "auto" },
  maxWidth: p = { sm: "100%", md: "100%", lg: "100%" },
  children: f,
  className: g = ""
}) => {
  const [d, x] = N("lg");
  q(() => {
    const u = () => {
      const m = window.innerWidth;
      m <= 767 ? x("sm") : m >= 768 && m <= 1023 ? x("md") : x("lg");
    };
    return u(), window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
  }, []);
  const h = ee(
    () => ({
      display: "flex",
      flexDirection: t[d],
      alignItems: r[d],
      justifyContent: s[d],
      gap: o[d],
      padding: l[d],
      backgroundColor: n,
      width: a[d],
      maxWidth: p[d],
      height: c[d]
    }),
    [d, t, r, s, o, l, a, p, c, n]
  );
  return /* @__PURE__ */ e.jsx("div", { className: g, style: h, children: f });
}, et = {
  success: {
    bg: "#ecfdf5",
    border: "#34d399",
    iconColor: "#059669",
    Icon: /* @__PURE__ */ e.jsx(Le, { size: 20 })
  },
  error: {
    bg: "#fef2f2",
    border: "#f87171",
    iconColor: "#dc2626",
    Icon: /* @__PURE__ */ e.jsx(_e, { size: 20 })
  },
  warning: {
    bg: "#fffbeb",
    border: "#facc15",
    iconColor: "#d97706",
    Icon: /* @__PURE__ */ e.jsx(Ge, { size: 20 })
  },
  info: {
    bg: "#eff6ff",
    border: "#3b82f6",
    iconColor: "#2563eb",
    Icon: /* @__PURE__ */ e.jsx(Be, { size: 20 })
  }
}, tt = (t) => {
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
}, vt = ({
  title: t = "",
  description: r = "",
  type: s = "info",
  dismissible: o = !0,
  onClose: l,
  duration: n,
  icon: a,
  actionButton: c,
  position: p = "top-right",
  className: f,
  style: g
}) => {
  const [d, x] = N(!0);
  if (q(() => {
    if (n) {
      const T = setTimeout(() => {
        x(!1), l?.();
      }, n);
      return () => clearTimeout(T);
    }
  }, [n, l]), !d) return null;
  const { bg: h, border: u, iconColor: m, Icon: j } = et[s], b = tt(p);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: f,
      style: {
        ...b,
        display: "flex",
        gap: "12px",
        padding: "16px",
        backgroundColor: h,
        borderLeft: `4px solid ${u}`,
        borderRadius: "8px",
        color: "#111827",
        alignItems: "flex-start",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        animation: "slideIn 0.3s ease",
        maxWidth: "600px",
        width: "calc(100% - 40px)",
        ...g
        // ✅ User custom styles merged last
      },
      children: [
        /* @__PURE__ */ e.jsx("div", { style: { color: m, marginTop: "3px" }, children: a || j }),
        /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
          t && /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", marginBottom: "4px" }, children: t }),
          r && /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", color: "#374151" }, children: r }),
          c && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "10px" }, children: c })
        ] }),
        o && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              x(!1), l?.();
            },
            style: {
              background: "transparent",
              border: "none",
              color: "#6b7280",
              cursor: "pointer",
              marginLeft: "8px"
            },
            children: /* @__PURE__ */ e.jsx(je, { size: 16 })
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
}, kt = ({
  text: t,
  color: r = "#2563eb",
  textColor: s = "#fff",
  borderColor: o = "#2563eb",
  icon: l,
  iconPosition: n = "left",
  rounded: a = !1,
  borderRadius: c,
  borderWidth: p = "0",
  fontSize: f = "14px",
  fontWeight: g = 500,
  horizontalPadding: d = "10px",
  verticalPadding: x = "6px",
  margin: h = "0",
  shadow: u = "0 1px 4px rgba(0, 0, 0, 0.1)",
  notificationDot: m = !1,
  dotColor: j = "#ef4444",
  count: b,
  pulse: T = !1,
  style: C,
  onClick: y
}) => {
  const $ = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: r,
    border: `${p} solid ${o}`,
    borderRadius: c || (a ? "9999px" : "6px"),
    padding: `${x} ${d}`,
    fontSize: f,
    fontWeight: g,
    margin: h,
    boxShadow: u,
    position: "relative",
    cursor: y ? "pointer" : "default",
    ...C
  }, S = {
    color: s,
    display: "inline"
  }, z = {
    display: "flex",
    alignItems: "center",
    color: s
  }, P = {
    ...z,
    marginRight: t ? "6px" : "0px"
  }, B = {
    ...z,
    marginLeft: t ? "6px" : "0px"
  }, E = {
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
  }, A = {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    height: "8px",
    width: "8px",
    backgroundColor: j,
    borderRadius: "50%",
    zIndex: 1,
    animation: T ? "pulseAnim 1.2s infinite" : void 0
  };
  return /* @__PURE__ */ e.jsxs("span", { style: $, onClick: y, children: [
    m && /* @__PURE__ */ e.jsx("span", { style: A }),
    typeof b < "u" && /* @__PURE__ */ e.jsx("span", { style: E, children: b }),
    l && n === "left" && /* @__PURE__ */ e.jsx("span", { style: P, children: l }),
    t && /* @__PURE__ */ e.jsx("span", { style: S, children: t }),
    l && n === "right" && /* @__PURE__ */ e.jsx("span", { style: B, children: l }),
    /* @__PURE__ */ e.jsx("style", { children: `
          @keyframes pulseAnim {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
        ` })
  ] });
}, Tt = ({
  children: t,
  className: r = "",
  contentClassName: s = "",
  background: o = "#f0f0f0",
  textColor: l = "#333",
  borderRadius: n = "8px",
  padding: a = "16px",
  shadow: c = "0px 4px 6px rgba(0, 0, 0, 0.1)",
  imageSrc: p,
  imageAlt: f = "Card Image",
  imageWidth: g = "100%",
  imageHeight: d = "200px",
  svgIcon: x,
  useSvgInsteadOfImage: h = !1,
  title: u,
  subtitle: m,
  buttonText: j,
  buttonOnClick: b,
  buttonClassName: T = "",
  buttonIcon: C,
  margin: y
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: `rounded-lg ${r}`,
    style: {
      background: o,
      color: l,
      borderRadius: n,
      padding: a,
      margin: y,
      boxShadow: c
    },
    children: [
      h && x ? /* @__PURE__ */ e.jsx("div", { className: "flex justify-center items-center mb-4", children: x }) : p && /* @__PURE__ */ e.jsx(
        "img",
        {
          src: p,
          alt: f,
          style: { width: g, height: d, borderRadius: n },
          className: "object-cover mb-4"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: `${s} w-full`, children: [
        u && /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold mb-2", children: u }),
        m && /* @__PURE__ */ e.jsx("p", { className: "text-sm opacity-80 mb-4 w-full", children: m }),
        t && /* @__PURE__ */ e.jsx("div", { className: "mb-4", children: t }),
        j && b && /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: b,
            className: `flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all ${T}`,
            children: [
              C && /* @__PURE__ */ e.jsx("span", { children: C }),
              j
            ]
          }
        )
      ] })
    ]
  }
), St = ({
  src: t,
  title: r,
  description: s,
  className: o,
  ImageClassName: l,
  buttonText: n,
  buttonOnClick: a,
  buttonClassName: c = "",
  buttonIcon: p
}) => /* @__PURE__ */ e.jsxs("div", { className: `relative overflow-hidden rounded-lg shadow-lg ${o}`, children: [
  /* @__PURE__ */ e.jsx("img", { src: t, alt: r, className: `w-full h-64 object-cover ${l}` }),
  /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-0 bg-black bg-opacity-50 p-4 text-white w-full", children: [
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-bold", children: r }),
    s && /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: s }),
    n && a && /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: a,
        className: `flex mt-2 items-center gap-2 px-4 py-2 text-[12px] bg-black text-white rounded-md transition-all ${c}`,
        children: [
          p && /* @__PURE__ */ e.jsx("span", { children: p }),
          n
        ]
      }
    )
  ] })
] }), Nt = ({ onClick: t, children: r }) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: "cursor-pointer hover:shadow-lg transition-shadow",
    onClick: t,
    children: r
  }
), Ct = ({
  src: t,
  alt: r = "User Avatar",
  size: s = "medium",
  className: o = ""
}) => {
  const l = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };
  return /* @__PURE__ */ e.jsx(
    "img",
    {
      src: t,
      alt: r,
      className: `rounded-full object-cover ${l[s]} ${o}`
    }
  );
}, $t = ({
  avatars: t,
  size: r = "medium",
  maxVisible: s = 3,
  className: o = ""
}) => {
  const l = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex -space-x-2", children: [
    t.slice(0, s).map((n, a) => /* @__PURE__ */ e.jsx(
      "img",
      {
        src: n,
        className: `rounded-full border-2 border-white object-cover ${l[r]} ${o}`
      },
      a
    )),
    t.length > s && /* @__PURE__ */ e.jsxs("span", { className: `rounded-full border-2 border-white bg-gray-500 text-white flex items-center justify-center ${l[r]}`, children: [
      "+",
      t.length - s
    ] })
  ] });
}, zt = ({
  src: t,
  alt: r = "User Avatar",
  status: s = "online",
  size: o = "medium",
  className: l = ""
}) => {
  const [n, a] = N(!1), c = {
    small: { size: "w-8 h-8", statusSize: "w-2 h-2" },
    medium: { size: "w-12 h-12", statusSize: "w-3 h-3" },
    large: { size: "w-16 h-16", statusSize: "w-4 h-4" }
  }, p = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    away: "bg-yellow-500",
    busy: "bg-red-500"
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `relative inline-block ${c[o].size}`, children: [
    t && !n ? /* @__PURE__ */ e.jsx(
      "img",
      {
        src: t,
        alt: r,
        "aria-label": r,
        className: `rounded-full object-cover ${c[o].size} ${l}`,
        onError: () => a(!0)
      }
    ) : /* @__PURE__ */ e.jsx(
      "svg",
      {
        "aria-label": "Placeholder for user avatar",
        className: `rounded-full bg-gray-300 text-gray-500 dark:bg-gray-600 dark:text-gray-400 ${c[o].size}`,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /* @__PURE__ */ e.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9c0-3 3-5 7-5s7 2 7 5v1H5v-1z",
            clipRule: "evenodd"
          }
        )
      }
    ),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: `z-[1000] w-full h-full absolute bottom-0 right-0 border-2 border-white rounded-full ${p[s]} ${c[o].statusSize}`
      }
    )
  ] });
}, Et = ({
  checked: t = !1,
  onChange: r,
  onLabel: s = "",
  offLabel: o = "",
  onColor: l = "bg-green-500",
  offColor: n = "bg-gray-400",
  size: a = "medium",
  className: c = "",
  onIcon: p,
  offIcon: f
}) => {
  const [g, d] = N(t), x = () => {
    const u = !g;
    d(u), r && r(u);
  }, h = {
    small: "w-10 h-5 text-xs",
    medium: "w-14 h-7 text-sm",
    large: "w-20 h-10 text-base"
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: x,
      className: `relative flex items-center ${h[a]} rounded-full transition-all ${g ? l : n} ${c}`,
      children: [
        /* @__PURE__ */ e.jsx(
          "span",
          {
            className: `absolute transition-all ${g ? "left-1 text-white" : "right-1 text-gray-700"}`,
            children: g ? p || s : f || o
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `absolute bg-white rounded-full shadow-md transition-all ${a === "small" ? "w-4 h-4" : a === "large" ? "w-8 h-8" : "w-6 h-6"} ${g ? "right-1" : "left-1"}`
          }
        )
      ]
    }
  );
}, Mt = ({
  isOpen: t,
  onClose: r,
  children: s,
  className: o = ""
}) => (q(() => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
  document.body.style.overflow = "";
}), [t]), t ? /* @__PURE__ */ e.jsx(
  "div",
  {
    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
    role: "dialog",
    "aria-modal": "true",
    children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `${o} bg-white dark:bg-gray-900 dark:text-white w-full h-full p-6 relative shadow-lg`,
        role: "document",
        children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white rounded-full p-2",
              onClick: r,
              "aria-label": "Close modal",
              children: /* @__PURE__ */ e.jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  className: "w-6 h-6",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ e.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M6 18L18 6M6 6l12 12"
                    }
                  )
                }
              )
            }
          ),
          s
        ]
      }
    )
  }
) : null), Rt = ({
  isOpen: t,
  onClose: r,
  children: s,
  overlayClass: o = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",
  modalClass: l = "bg-white rounded-lg p-6 w-11/12 max-w-md",
  closeButtonClass: n = "absolute top-2 right-2 text-gray-500 hover:text-gray-700"
}) => t ? /* @__PURE__ */ e.jsx("div", { className: o, children: /* @__PURE__ */ e.jsxs("div", { className: `relative ${l}`, children: [
  /* @__PURE__ */ e.jsx("button", { onClick: r, className: n, children: /* @__PURE__ */ e.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: /* @__PURE__ */ e.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M6 18L18 6M6 6l12 12"
        }
      )
    }
  ) }),
  s
] }) }) : null, _t = ({ children: t }) => /* @__PURE__ */ e.jsx("div", { className: "py-4", children: t }), At = ({ title: t, onClose: r }) => /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center border-b pb-2", children: [
  /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold", children: t }),
  /* @__PURE__ */ e.jsx("button", { className: "text-gray-500", onClick: r, children: "×" })
] }), Lt = ({ children: t }) => /* @__PURE__ */ e.jsx("div", { className: "border-t pt-2 flex justify-end gap-2", children: t }), Pt = ({
  tracks: t,
  className: r = "",
  theme: s = {
    bg: "bg-white",
    text: "text-gray-900",
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-200"
  },
  showProgress: o = !0,
  showVolume: l = !0,
  autoplay: n = !1,
  loop: a = !1
}) => {
  const [c, p] = N(null), f = X(null), [g, d] = N(!1), [x, h] = N(0), [u, m] = N(1), j = (y) => {
    c === y ? f.current?.paused ? (f.current?.play(), d(!0)) : (f.current?.pause(), d(!1)) : (p(y), setTimeout(() => {
      f.current && (f.current.play(), d(!0));
    }, 100));
  }, b = () => {
    f.current && h(f.current.currentTime / f.current.duration * 100);
  }, T = (y) => {
    f.current && (f.current.currentTime = parseFloat(y.target.value) / 100 * f.current.duration, h(parseFloat(y.target.value)));
  }, C = (y) => {
    f.current && (f.current.volume = parseFloat(y.target.value), m(parseFloat(y.target.value)));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full max-w-md p-4 rounded-lg shadow-md ${s.bg} ${r}`, children: [
    /* @__PURE__ */ e.jsx("h2", { className: `text-lg font-bold mb-3 ${s.text}`, children: "🎵 Audio Gallery" }),
    /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: t.map((y, $) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `flex items-center justify-between p-3 rounded-lg cursor-pointer transition ${s.secondary}`,
        onClick: () => j($),
        children: [
          /* @__PURE__ */ e.jsx("span", { className: `text-sm font-medium ${s.text}`, children: y.title }),
          /* @__PURE__ */ e.jsx("button", { className: `p-2 rounded-full ${s.primary}`, children: c === $ && g ? /* @__PURE__ */ e.jsx(
            "svg",
            {
              stroke: "currentColor",
              fill: "currentColor",
              viewBox: "0 0 448 512",
              height: "1.5em",
              width: "1.5em",
              children: /* @__PURE__ */ e.jsx("path", { d: "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5 21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" })
            }
          ) : /* @__PURE__ */ e.jsx(
            "svg",
            {
              stroke: "currentColor",
              fill: "currentColor",
              viewBox: "0 0 448 512",
              height: "1.5em",
              width: "1.5em",
              children: /* @__PURE__ */ e.jsx("path", { d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" })
            }
          ) })
        ]
      },
      $
    )) }),
    c !== null && /* @__PURE__ */ e.jsxs("div", { className: `mt-4 p-3 rounded-lg ${s.secondary}`, children: [
      /* @__PURE__ */ e.jsx("p", { className: `text-sm font-semibold ${s.text}`, children: t[c].title }),
      o && /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "range",
          value: x,
          onChange: T,
          className: "w-full cursor-pointer mt-2"
        }
      ),
      l && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center mt-2", children: [
        "🔊",
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "range",
            min: "0",
            max: "1",
            step: "0.01",
            value: u,
            onChange: C,
            className: "ml-2 w-full cursor-pointer"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "audio",
        {
          ref: f,
          src: t[c].src,
          onTimeUpdate: b,
          onEnded: () => d(!1),
          autoPlay: n,
          loop: a
        }
      )
    ] })
  ] });
}, It = ({
  images: t,
  columns: r = 3,
  gap: s = "10px",
  layout: o = "grid",
  lightbox: l = !0,
  className: n = ""
}) => {
  const [a, c] = N(null);
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${n}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${o === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${r}, 1fr)`,
          gap: s
        },
        children: t.map((p, f) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "relative overflow-hidden rounded-lg cursor-pointer",
            onClick: () => l && c(p.src),
            children: /* @__PURE__ */ e.jsx(
              "img",
              {
                src: p.src,
                alt: p.alt || "Gallery Image",
                className: "w-full h-auto object-cover transition-transform duration-300 hover:scale-105",
                loading: "lazy"
              }
            )
          },
          f
        ))
      }
    ),
    l && a && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50",
        onClick: () => c(null),
        children: [
          /* @__PURE__ */ e.jsx("img", { src: a, alt: "Preview", className: "max-w-full max-h-full" }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "absolute top-4 right-4 text-white text-2xl font-bold",
              onClick: () => c(null),
              children: "✕"
            }
          )
        ]
      }
    )
  ] });
}, Ot = ({
  videos: t,
  columns: r = 3,
  gap: s = "10px",
  layout: o = "grid",
  lightbox: l = !0,
  autoPlay: n = !1,
  loop: a = !1,
  muted: c = !1,
  controls: p = !0,
  className: f = ""
}) => {
  const [g, d] = N(null);
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${f}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${o === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${r}, 1fr)`,
          gap: s
        },
        children: t.map((x, h) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "relative overflow-hidden rounded-lg cursor-pointer",
            onClick: () => l && d(x.src),
            children: /* @__PURE__ */ e.jsx(
              "video",
              {
                src: x.src,
                poster: x.poster,
                autoPlay: n,
                loop: a,
                muted: c,
                controls: p,
                className: "w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              }
            )
          },
          h
        ))
      }
    ),
    l && g && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50",
        onClick: () => d(null),
        children: [
          /* @__PURE__ */ e.jsx(
            "video",
            {
              src: g,
              autoPlay: !0,
              controls: !0,
              className: "max-w-full max-h-full"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "absolute top-4 right-4 text-white text-2xl font-bold",
              onClick: () => d(null),
              children: "✕"
            }
          )
        ]
      }
    )
  ] });
}, Ft = ({
  src: t,
  width: r = "100%",
  height: s = "auto",
  borderRadius: o = "8px",
  shadow: l = !0,
  controlsColor: n = "#ffffff"
}) => {
  const a = X(null), [c, p] = N(!1), [f, g] = N(0), [d, x] = N(1), [h, u] = N(!0), m = () => {
    a.current && (c ? a.current.pause() : a.current.play(), p(!c));
  }, j = () => {
    if (a.current) {
      const y = a.current.currentTime / a.current.duration * 100;
      g(y);
    }
  }, b = (y) => {
    if (a.current) {
      const $ = parseFloat(y.target.value) / 100 * a.current.duration;
      a.current.currentTime = $, g(parseFloat(y.target.value));
    }
  }, T = (y) => {
    if (a.current) {
      const $ = parseFloat(y.target.value);
      a.current.volume = $, x($);
    }
  }, C = () => {
    a.current && document.pictureInPictureEnabled && a.current.requestPictureInPicture();
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative w-full max-w-2xl mx-auto ${l ? "shadow-lg" : ""}`,
      style: { borderRadius: o },
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!0),
      children: [
        /* @__PURE__ */ e.jsx(
          "video",
          {
            ref: a,
            src: t,
            className: "w-full rounded-lg",
            onTimeUpdate: j,
            style: { width: r, height: s, borderRadius: o }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: m,
            className: `absolute inset-0 flex justify-center items-center ${c ? "opacity-0" : "opacity-100"} transition-opacity duration-300`,
            children: /* @__PURE__ */ e.jsx("div", { className: "bg-black bg-opacity-50 p-4 rounded-full", children: c ? /* @__PURE__ */ e.jsx(
              "svg",
              {
                className: "w-12 h-12 text-white",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ e.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M10 9v6m4-6v6"
                  }
                )
              }
            ) : /* @__PURE__ */ e.jsx(
              "svg",
              {
                className: "w-12 h-12 text-white",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ e.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M14.752 11.168l-5.197-3.692A1 1 0 008 8v8a1 1 0 001.555.832l5.197-3.692a1 1 0 000-1.664z"
                  }
                )
              }
            ) })
          }
        ),
        h && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 p-3 bg-black bg-opacity-70 rounded-b-lg flex items-center justify-between transition-opacity duration-300",
            style: { color: n },
            children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: m,
                  className: "text-white px-3 py-1 rounded-md text-sm",
                  children: c ? /* @__PURE__ */ e.jsx(
                    "svg",
                    {
                      className: "w-12 h-12 text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ e.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M10 9v6m4-6v6"
                        }
                      )
                    }
                  ) : /* @__PURE__ */ e.jsx(
                    "svg",
                    {
                      className: "w-12 h-12 text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ e.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M14.752 11.168l-5.197-3.692A1 1 0 008 8v8a1 1 0 001.555.832l5.197-3.692a1 1 0 000-1.664z"
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: "100",
                  value: f,
                  onChange: b,
                  className: "w-2/4 mx-2"
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ e.jsx(
                  "svg",
                  {
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0",
                    viewBox: "0 0 24 24",
                    height: "1em",
                    width: "1em",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "text-2xl",
                    children: /* @__PURE__ */ e.jsx("g", { id: "Volume_High", children: /* @__PURE__ */ e.jsxs("g", { children: [
                      /* @__PURE__ */ e.jsx("path", { d: "M13.816,19.937a1.446,1.446,0,0,1-.717-.194L9.43,17.623a3.257,3.257,0,0,0-1.625-.434H4.439a2.379,2.379,0,0,1-2.375-2.376V9.187A2.378,2.378,0,0,1,4.439,6.812H7.805A3.257,3.257,0,0,0,9.43,6.376L13.1,4.259A1.437,1.437,0,0,1,15.255,5.5V18.5a1.424,1.424,0,0,1-.718,1.245A1.445,1.445,0,0,1,13.816,19.937ZM4.439,7.812A1.377,1.377,0,0,0,3.064,9.187v5.626a1.378,1.378,0,0,0,1.375,1.376H7.805a4.254,4.254,0,0,1,2.125.569L13.6,18.876a.439.439,0,0,0,.657-.38V5.5a.438.438,0,0,0-.657-.379L9.93,7.242a4.251,4.251,0,0,1-2.125.57Z" }),
                      /* @__PURE__ */ e.jsx("path", { d: "M18.407,6.262a7.79,7.79,0,0,1,.021,11.476c-.474.437.235,1.143.707.707a8.793,8.793,0,0,0-.021-12.89c-.474-.434-1.184.272-.707.707Z" }),
                      /* @__PURE__ */ e.jsx("path", { d: "M16.91,9.031a4.021,4.021,0,0,1,.012,5.938c-.474.438.234,1.143.707.707a5.025,5.025,0,0,0-.012-7.352c-.474-.434-1.183.272-.707.707Z" })
                    ] }) })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "range",
                    min: "0",
                    max: "1",
                    step: "0.1",
                    value: d,
                    onChange: T,
                    className: "w-full mx-2"
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => a.current?.requestFullscreen(),
                  className: "text-white px-3 rounded-md hover:bg-gray-700",
                  children: /* @__PURE__ */ e.jsx(
                    "svg",
                    {
                      stroke: "currentColor",
                      fill: "currentColor",
                      strokeWidth: "0",
                      viewBox: "0 0 24 24",
                      height: "1em",
                      width: "1em",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ e.jsx("path", { d: "M3.75 15a.75.75 0 0 1 .75.75v3.5c0 .138.112.25.25.25h3.5a.75.75 0 0 1 0 1.5h-3.5A1.75 1.75 0 0 1 3 19.25v-3.5a.75.75 0 0 1 .75-.75Zm16.5 0a.75.75 0 0 1 .75.75v3.5A1.75 1.75 0 0 1 19.25 21h-3.5a.75.75 0 0 1 0-1.5h3.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 .75-.75ZM4.75 4.5a.25.25 0 0 0-.25.25v3.5a.75.75 0 0 1-1.5 0v-3.5C3 3.784 3.784 3 4.75 3h3.5a.75.75 0 0 1 0 1.5ZM15 3.75a.75.75 0 0 1 .75-.75h3.5c.966 0 1.75.784 1.75 1.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1-.75-.75Z" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: C,
                  className: "text-white px-3 rounded-md hover:bg-gray-700",
                  children: /* @__PURE__ */ e.jsx(
                    "svg",
                    {
                      stroke: "currentColor",
                      fill: "currentColor",
                      strokeWidth: "0",
                      viewBox: "0 0 24 24",
                      height: "1em",
                      width: "1em",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "text-xl",
                      children: /* @__PURE__ */ e.jsx("g", { id: "Minimize_1", children: /* @__PURE__ */ e.jsxs("g", { children: [
                        /* @__PURE__ */ e.jsx("path", { d: "M11,17.78a.5.5,0,0,1-1,0V14.71L3.92,20.79a.5.5,0,0,1-.71-.71c.29-.29.58-.57.87-.86C5.82,17.48,7.55,15.74,9.3,14H6.22a.5.5,0,0,1,0-1H10.5a.429.429,0,0,1,.34.14c.01.01.02.01.02.02a.384.384,0,0,1,.13.26Z" }),
                        /* @__PURE__ */ e.jsx("path", { d: "M14.7,10h3.08a.5.5,0,0,1,0,1H13.5a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26L13,6.22a.5.5,0,0,1,1,0V9.29l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71Z" })
                      ] }) })
                    }
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Wt = ({ embedUrl: t }) => /* @__PURE__ */ e.jsx("div", { className: "relative w-full pb-[56.25%]", children: /* @__PURE__ */ e.jsx(
  "iframe",
  {
    src: t,
    allowFullScreen: !0,
    className: "absolute top-0 left-0 w-full h-full"
  }
) }), Bt = ({ src: t }) => {
  const r = X(null), s = () => {
    r.current && document.pictureInPictureEnabled && r.current.requestPictureInPicture();
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("video", { ref: r, src: t, controls: !0, className: "w-full" }),
    /* @__PURE__ */ e.jsx("button", { onClick: s, className: "mt-2 px-4 py-2 bg-blue-500 text-white", children: "Enable PiP" })
  ] });
}, Vt = ({ children: t, defaultActive: r = 0, className: s }) => {
  const [o, l] = N(r);
  return /* @__PURE__ */ e.jsx("div", { className: `w-full ${s}`, children: J.Children.map(
    t,
    (n) => J.isValidElement(n) ? J.cloneElement(n, { activeTab: o, setActiveTab: l }) : n
  ) });
}, Ht = ({ children: t, index: r, activeTab: s, setActiveTab: o, className: l }) => /* @__PURE__ */ e.jsx(
  "button",
  {
    className: `px-4 py-2 text-sm font-medium border-b-2 ${s === r ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500"} focus:outline-none ${l}`,
    onClick: () => o(r),
    children: t
  }
), Yt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("div", { className: `flex border-b ${r}`, children: t }), Dt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("div", { className: `p-4 ${r}`, children: t }), Ut = ({ children: t, className: r, activeTab: s }) => /* @__PURE__ */ e.jsx("div", { className: r, children: J.Children.toArray(t)[s] }), qt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsx("table", { className: `w-full border-collapse border border-gray-300 ${r}`, children: t }) }), Xt = ({ label: t, onSort: r }) => {
  const [s, o] = N("asc"), l = () => {
    const n = s === "asc" ? "desc" : "asc";
    o(n), r(n);
  };
  return /* @__PURE__ */ e.jsxs("th", { className: "px-4 py-2 border cursor-pointer", onClick: l, children: [
    t,
    " ",
    s === "asc" ? "▲" : "▼"
  ] });
}, Zt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("tbody", { className: r, children: t }), Gt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("thead", { className: `bg-gray-200 ${r}`, children: t }), Jt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("th", { className: `px-4 py-2 border ${r}`, children: t }), Qt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("td", { className: `px-4 py-2 border ${r}`, children: t }), Kt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("tr", { className: `border-b border-gray-300 ${r}`, children: t }), er = ({
  isOpen: t,
  onClose: r,
  children: s,
  className: o = ""
}) => {
  const l = X(null);
  return q(() => {
    const n = (a) => {
      l.current && !l.current.contains(a.target) && !a.target.closest(".dropdown-toggle") && r();
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, [r]), t ? /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: l,
      className: `absolute z-40 right-0 mt-2  rounded-xl border border-gray-200 bg-white  shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark ${o}`,
      children: s
    }
  ) : null;
}, tr = ({ children: t, onClick: r, className: s }) => /* @__PURE__ */ e.jsx(
  "button",
  {
    className: `w-full text-left px-4 py-2 hover:bg-gray-200 ${s}`,
    onClick: r,
    children: t
  }
), rr = ({ icon: t, label: r, onClick: s }) => /* @__PURE__ */ e.jsxs("button", { className: "flex items-center px-4 py-2 w-full text-left hover:bg-gray-200", onClick: s, children: [
  t,
  /* @__PURE__ */ e.jsx("span", { className: "ml-2", children: r })
] });
export {
  ft as Accordion,
  vt as Alert,
  Pt as AudioGallery,
  xt as AudioPlayer,
  Ct as Avatar,
  $t as AvatarGroup,
  zt as AvatarWithStatus,
  kt as Badge,
  ot as Button,
  Tt as Card,
  mt as CheckRadio,
  pt as Container,
  er as CustomDropdown,
  qt as CustomTable,
  Vt as CustomTabs,
  Ft as CustomVideoPlayer,
  gt as Drawer,
  ht as DrawerButton,
  bt as Dropdown,
  tr as DropdownItem,
  rr as DropdownWithIcon,
  Wt as EmbedVideo,
  wt as Flexbox,
  Mt as FullScreenModal,
  jt as GridView,
  nt as Image,
  St as ImageCard,
  It as ImageGallery,
  lt as Input,
  Nt as InteractiveCard,
  it as LeftTabs,
  at as List,
  Rt as Modal,
  _t as ModalBody,
  Lt as ModalFooter,
  At as ModalHeader,
  Bt as PiPVideo,
  dt as RightTabs,
  Xt as SortableTableHeader,
  Ht as Tab,
  Yt as TabList,
  Dt as TabPanel,
  Ut as TabPanels,
  yt as Table,
  Zt as TableBody,
  Qt as TableColumn,
  Gt as TableHead,
  Jt as TableHeader,
  Kt as TableRow,
  st as Text,
  Et as Toggle,
  ct as TopTabs,
  Ot as VideoGallery,
  ut as VideoPlayer
};
