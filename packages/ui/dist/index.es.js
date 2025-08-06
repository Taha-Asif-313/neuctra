import ce, { useMemo as K, forwardRef as ne, createElement as re, useRef as J, useState as P, useImperativeHandle as ke, useEffect as q } from "react";
var ee = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oe;
function Se() {
  if (oe) return Z;
  oe = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function l(o, a, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      s = {};
      for (var p in a)
        p !== "key" && (s[p] = a[p]);
    } else s = a;
    return a = s.ref, {
      $$typeof: t,
      type: o,
      key: i,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return Z.Fragment = n, Z.jsx = l, Z.jsxs = l, Z;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le;
function Te() {
  return le || (le = 1, process.env.NODE_ENV !== "production" && function() {
    function t(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === z ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case u:
          return "Fragment";
        case b:
          return "Profiler";
        case k:
          return "StrictMode";
        case O:
          return "Suspense";
        case v:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case d:
            return "Portal";
          case A:
            return (r.displayName || "Context") + ".Provider";
          case S:
            return (r._context.displayName || "Context") + ".Consumer";
          case I:
            var j = r.render;
            return r = r.displayName, r || (r = j.displayName || j.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case T:
            return j = r.displayName || null, j !== null ? j : t(r.type) || "Memo";
          case M:
            j = r._payload, r = r._init;
            try {
              return t(r(j));
            } catch {
            }
        }
      return null;
    }
    function n(r) {
      return "" + r;
    }
    function l(r) {
      try {
        n(r);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var W = j.error, D = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return W.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          D
        ), n(r);
      }
    }
    function o(r) {
      if (r === u) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === M)
        return "<...>";
      try {
        var j = t(r);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var r = _.A;
      return r === null ? null : r.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(r) {
      if (R.call(r, "key")) {
        var j = Object.getOwnPropertyDescriptor(r, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function p(r, j) {
      function W() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: W,
        configurable: !0
      });
    }
    function h() {
      var r = t(this.type);
      return w[r] || (w[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function g(r, j, W, D, F, C, L, X) {
      return W = C.ref, r = {
        $$typeof: f,
        type: r,
        key: j,
        props: C,
        _owner: F
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: h
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
        value: L
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function m(r, j, W, D, F, C, L, X) {
      var E = j.children;
      if (E !== void 0)
        if (D)
          if (H(E)) {
            for (D = 0; D < E.length; D++)
              c(E[D]);
            Object.freeze && Object.freeze(E);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(E);
      if (R.call(j, "key")) {
        E = t(r);
        var G = Object.keys(j).filter(function(ve) {
          return ve !== "key";
        });
        D = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", U[E + D] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          D,
          E,
          G,
          E
        ), U[E + D] = !0);
      }
      if (E = null, W !== void 0 && (l(W), E = "" + W), i(j) && (l(j.key), E = "" + j.key), "key" in j) {
        W = {};
        for (var te in j)
          te !== "key" && (W[te] = j[te]);
      } else W = j;
      return E && p(
        W,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), g(
        r,
        E,
        C,
        F,
        a(),
        W,
        L,
        X
      );
    }
    function c(r) {
      typeof r == "object" && r !== null && r.$$typeof === f && r._store && (r._store.validated = 1);
    }
    var x = ce, f = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), A = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), _ = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = Object.prototype.hasOwnProperty, H = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var y, w = {}, N = x.react_stack_bottom_frame.bind(
      x,
      s
    )(), $ = Y(o(s)), U = {};
    Q.Fragment = u, Q.jsx = function(r, j, W, D, F) {
      var C = 1e4 > _.recentlyCreatedOwnerStacks++;
      return m(
        r,
        j,
        W,
        !1,
        D,
        F,
        C ? Error("react-stack-top-frame") : N,
        C ? Y(o(r)) : $
      );
    }, Q.jsxs = function(r, j, W, D, F) {
      var C = 1e4 > _.recentlyCreatedOwnerStacks++;
      return m(
        r,
        j,
        W,
        !0,
        D,
        F,
        C ? Error("react-stack-top-frame") : N,
        C ? Y(o(r)) : $
      );
    };
  }()), Q;
}
var ae;
function ze() {
  return ae || (ae = 1, process.env.NODE_ENV === "production" ? ee.exports = Se() : ee.exports = Te()), ee.exports;
}
var e = ze();
const nt = ({
  as: t = "p",
  children: n,
  className: l = "",
  href: o,
  target: a,
  rel: s,
  // Style
  color: i = "#333",
  bgColor: p,
  fontSize: h = "16px",
  fontWeight: g = "normal",
  textAlign: m = "left",
  textTransform: c = "none",
  lineHeight: x = "normal",
  letterSpacing: f = "normal",
  maxWidth: d,
  padding: u,
  margin: k,
  borderRadius: b,
  boxShadow: S,
  shadowColor: A = "rgba(0,0,0,0.1)",
  wordBreak: I = "normal",
  // Text styles
  italic: O = !1,
  bold: v = !1,
  underline: T = !1,
  strikethrough: M = !1,
  selectable: B = !0,
  truncate: z = !1,
  // Hover & Active
  hoverColor: _,
  hoverBgColor: R,
  hoverTextDecoration: H,
  activeColor: Y,
  activeBgColor: y,
  transitionDuration: w = "0.25s",
  // Event
  onClick: N
}) => {
  const $ = K(() => {
    const C = [];
    return T && C.push("underline"), M && C.push("line-through"), C.join(" ") || "none";
  }, [T, M]), U = {
    color: i,
    backgroundColor: p || "transparent",
    fontSize: h,
    fontWeight: v ? "bold" : g,
    textAlign: m,
    textTransform: c,
    lineHeight: x,
    letterSpacing: f,
    maxWidth: d,
    padding: u,
    margin: k,
    borderRadius: b,
    textDecoration: $,
    fontStyle: O ? "italic" : "normal",
    wordBreak: I,
    boxShadow: S || (A ? `0 1px 4px ${A}` : void 0),
    cursor: N || o ? "pointer" : "default",
    userSelect: B ? "text" : "none",
    transition: `all ${w} ease-in-out`,
    overflow: z ? "hidden" : void 0,
    whiteSpace: z ? "nowrap" : void 0,
    textOverflow: z ? "ellipsis" : void 0
  }, F = {
    className: l,
    style: U,
    onClick: N,
    onMouseEnter: (C) => {
      const L = C.currentTarget;
      _ && (L.style.color = _), R && (L.style.backgroundColor = R), H && (L.style.textDecoration = H);
    },
    onMouseLeave: (C) => {
      const L = C.currentTarget;
      L.style.color = i, L.style.backgroundColor = p || "transparent", L.style.textDecoration = $;
    },
    onMouseDown: (C) => {
      const L = C.currentTarget;
      Y && (L.style.color = Y), y && (L.style.backgroundColor = y);
    },
    onMouseUp: (C) => {
      const L = C.currentTarget;
      L.style.color = _ || i, L.style.backgroundColor = R || p || "transparent";
    }
  };
  return t === "a" || o ? /* @__PURE__ */ e.jsx(
    "a",
    {
      ...F,
      href: o,
      target: a,
      rel: s || (a === "_blank" ? "noopener noreferrer" : void 0),
      children: n
    }
  ) : /* @__PURE__ */ e.jsx(t, { ...F, children: n });
}, st = ({
  src: t,
  alt: n = "Image",
  width: l = "100%",
  height: o = "auto",
  borderRadius: a = "8px",
  borderColor: s = "transparent",
  borderStyle: i = "solid",
  borderWidth: p = "0px",
  shadow: h = !1,
  boxShadow: g,
  opacity: m = 1,
  objectFit: c = "cover",
  overlayText: x,
  overlayColor: f = "rgba(0, 0, 0, 0.5)",
  svgIcon: d,
  responsive: u = !1,
  padding: k,
  margin: b,
  lazyLoad: S = !1,
  hoverOpacity: A,
  hoverShadow: I = !1,
  hoverScale: O,
  hoverRotate: v,
  transitionDuration: T = "0.3s",
  overflow: M = "hidden",
  className: B,
  style: z,
  onClick: _
}) => {
  const R = {
    width: u ? "100%" : l,
    height: u ? "100%" : o,
    borderRadius: a,
    border: `${p} ${i} ${s}`,
    objectFit: c,
    opacity: m,
    boxShadow: h ? g || "0 4px 12px rgba(0,0,0,0.15)" : "none",
    transition: `all ${T} ease`,
    display: "block"
  }, H = (w) => {
    w.currentTarget.style.opacity = A !== void 0 ? A.toString() : R.opacity?.toString() || "1", w.currentTarget.style.boxShadow = I ? "0 8px 20px rgba(0,0,0,0.3)" : R.boxShadow?.toString() || "none", w.currentTarget.style.transform = `scale(${O || 1}) rotate(${v || 0}deg)`;
  }, Y = (w) => {
    w.currentTarget.style.opacity = R.opacity?.toString() || "1", w.currentTarget.style.boxShadow = R.boxShadow?.toString() || "none", w.currentTarget.style.transform = "scale(1) rotate(0deg)";
  }, y = (() => {
    switch (M) {
      case "x":
        return { overflowX: "hidden" };
      case "y":
        return { overflowY: "hidden" };
      default:
        return { overflow: M };
    }
  })();
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      role: "img",
      "aria-label": n,
      onClick: _,
      className: B,
      style: {
        width: u ? "100%" : l,
        height: u ? "auto" : o,
        padding: k,
        margin: b,
        position: "relative",
        cursor: _ ? "pointer" : "default",
        display: "inline-block",
        transition: `all ${T} ease`,
        ...y,
        ...z
        // Allow external override
      },
      children: [
        d ? /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: d
          }
        ) : /* @__PURE__ */ e.jsx(
          "img",
          {
            src: t,
            alt: n,
            loading: S ? "lazy" : "eager",
            style: R,
            onMouseEnter: H,
            onMouseLeave: Y
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
              backgroundColor: f,
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
  type: n = "button",
  onClick: l,
  iconBefore: o,
  iconAfter: a,
  className: s = "",
  style: i,
  // ✅ NEW
  fullWidth: p = !1,
  disabled: h = !1,
  loading: g = !1,
  loadingText: m = "Loading...",
  paddingHorizontal: c = 10,
  paddingVertical: x = 8,
  fontSize: f = "1rem",
  fontWeight: d = 400,
  borderRadius: u = 12,
  backgroundColor: k = "rgba(0, 255, 0, 0.15)",
  textColor: b = "green",
  borderColor: S = "transparent",
  hoverBgColor: A = "#2563EB",
  hoverTextColor: I = "#2563EB",
  hoverBorderColor: O,
  boxShadow: v = "0 1px 2px rgba(0, 0, 0, 0.05)"
}) => {
  const [T, M] = ce.useState(!1), B = T && !h && I || b, z = T && !h && O || S, _ = T && !h ? A : k, R = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${x}px ${c}px`,
    fontSize: f,
    fontWeight: d,
    borderRadius: `${u}px`,
    width: p ? "100%" : "auto",
    color: B,
    border: `1px solid ${z}`,
    backgroundColor: _,
    boxShadow: v,
    cursor: h ? "not-allowed" : "pointer",
    opacity: h ? 0.6 : 1,
    transition: "all 0.2s ease-in-out",
    gap: "8px",
    ...i
    // ✅ Apply user-supplied inline styles last
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: n,
      className: s,
      style: R,
      onClick: !h && !g ? l : void 0,
      disabled: h,
      onMouseEnter: () => M(!0),
      onMouseLeave: () => M(!1),
      children: [
        g ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
          /* @__PURE__ */ e.jsx("span", { children: m })
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          o && /* @__PURE__ */ e.jsx("span", { children: o }),
          /* @__PURE__ */ e.jsx("span", { children: t }),
          a && /* @__PURE__ */ e.jsx("span", { children: a })
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
const $e = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ce = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, l, o) => o ? o.toUpperCase() : l.toLowerCase()
), ie = (t) => {
  const n = Ce(t);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, de = (...t) => t.filter((n, l, o) => !!n && n.trim() !== "" && o.indexOf(n) === l).join(" ").trim(), Ee = (t) => {
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
var _e = {
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
const Re = ne(
  ({
    color: t = "currentColor",
    size: n = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: o,
    className: a = "",
    children: s,
    iconNode: i,
    ...p
  }, h) => re(
    "svg",
    {
      ref: h,
      ..._e,
      width: n,
      height: n,
      stroke: t,
      strokeWidth: o ? Number(l) * 24 / Number(n) : l,
      className: de("lucide", a),
      ...!s && !Ee(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...i.map(([g, m]) => re(g, m)),
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
const V = (t, n) => {
  const l = ne(
    ({ className: o, ...a }, s) => re(Re, {
      ref: s,
      iconNode: n,
      className: de(
        `lucide-${$e(ie(t))}`,
        `lucide-${t}`,
        o
      ),
      ...a
    })
  );
  return l.displayName = ie(t), l;
};
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Ne = V("circle-alert", Me);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Ie = V("circle-check-big", Ae);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = [
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
], Pe = V("eye-off", Le);
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
], We = V("eye", Oe);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], Be = V("info", Fe);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], ue = V("maximize", Ye);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
], pe = V("minimize", De);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], xe = V("pause", He);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], fe = V("play", Ue);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], he = V("rotate-ccw", Ve);
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
], me = V("skip-back", qe);
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
], ge = V("skip-forward", Xe);
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
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ge = V("triangle-alert", Je);
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
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], be = V("volume-2", Ze);
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
], ye = V("volume-x", Qe);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], je = V("x", Ke), lt = ne(
  ({
    type: t = "text",
    placeholder: n = "",
    label: l,
    value: o,
    defaultValue: a,
    onChange: s,
    name: i = "",
    disabled: p = !1,
    readOnly: h = !1,
    required: g = !1,
    error: m,
    success: c = !1,
    autoFocus: x = !1,
    iconLeft: f,
    iconRight: d,
    borderColor: u = "#ccc",
    focusBorderColor: k = "#2563eb",
    hoverBorderColor: b = "#4b5563",
    backgroundColor: S = "#ffffff",
    textColor: A = "#111827",
    errorColor: I = "#dc2626",
    successColor: O = "#16a34a",
    labelColor: v = "#374151",
    size: T = "md",
    radius: M = "6px",
    fontSize: B = "14px",
    rows: z = 4,
    cols: _,
    maxLength: R,
    resize: H = !0,
    showCharacterCount: Y = !0,
    className: y,
    style: w
  }, N) => {
    const $ = J(null), [U, r] = P(a || ""), [j, W] = P(!1);
    ke(N, () => $.current);
    const D = (E) => {
      R && E.target.value.length > R || (r(E.target.value), s && s(i, E.target.value));
    }, F = () => {
      switch (T) {
        case "sm":
          return "6px 12px";
        case "lg":
          return "12px 20px";
        default:
          return "10px 16px";
      }
    }, C = () => {
      switch (T) {
        case "sm":
          return "13px";
        case "lg":
          return "16px";
        default:
          return B;
      }
    }, L = m ? I : c ? O : u, X = {
      width: "100%",
      padding: F(),
      paddingLeft: f ? "40px" : F().split(" ")[1],
      paddingRight: d || t === "password" ? "40px" : F().split(" ")[1],
      border: `1px solid ${L}`,
      borderRadius: M,
      backgroundColor: S,
      color: A,
      fontSize: C(),
      outline: "none",
      resize: t === "textarea" && !H ? "none" : void 0,
      ...w
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: { width: "100%", fontFamily: "sans-serif" },
        className: y,
        children: [
          l && /* @__PURE__ */ e.jsxs(
            "label",
            {
              htmlFor: i,
              style: {
                display: "block",
                marginBottom: "6px",
                fontSize: "14px",
                fontWeight: 500,
                color: v
              },
              children: [
                l,
                " ",
                g && /* @__PURE__ */ e.jsx("span", { style: { color: I }, children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { style: { position: "relative", width: "100%" }, children: [
            f && /* @__PURE__ */ e.jsx(
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
                children: f
              }
            ),
            t === "textarea" ? /* @__PURE__ */ e.jsx(
              "textarea",
              {
                ref: $,
                name: i,
                value: o ?? U,
                onChange: D,
                placeholder: n,
                rows: z,
                cols: _,
                maxLength: R,
                disabled: p,
                readOnly: h,
                autoFocus: x,
                style: X,
                onFocus: (E) => {
                  E.currentTarget.style.borderColor = k;
                },
                onBlur: (E) => {
                  E.currentTarget.style.borderColor = L;
                },
                onMouseEnter: (E) => {
                  E.currentTarget.style.borderColor = b;
                },
                onMouseLeave: (E) => {
                  E.currentTarget.style.borderColor = L;
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: $,
                id: i,
                name: i,
                type: t === "password" ? j ? "text" : "password" : t,
                value: o ?? U,
                onChange: D,
                placeholder: n,
                disabled: p,
                readOnly: h,
                autoFocus: x,
                style: X,
                onFocus: (E) => {
                  E.currentTarget.style.borderColor = k;
                },
                onBlur: (E) => {
                  E.currentTarget.style.borderColor = L;
                },
                onMouseEnter: (E) => {
                  E.currentTarget.style.borderColor = b;
                },
                onMouseLeave: (E) => {
                  E.currentTarget.style.borderColor = L;
                }
              }
            ),
            t === "password" && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => W(!j),
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
                children: j ? /* @__PURE__ */ e.jsx(Pe, { size: 18 }) : /* @__PURE__ */ e.jsx(We, { size: 18 })
              }
            ),
            d && t !== "password" && /* @__PURE__ */ e.jsx(
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
                children: d
              }
            )
          ] }),
          t === "textarea" && Y && R && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                textAlign: "right",
                fontSize: "12px",
                color: "#6b7280",
                marginTop: "4px"
              },
              children: [
                (o ?? U).length,
                "/",
                R
              ]
            }
          ),
          m && /* @__PURE__ */ e.jsx(
            "p",
            {
              style: {
                color: I,
                fontSize: "12px",
                marginTop: "4px",
                lineHeight: "1.3"
              },
              children: m
            }
          )
        ]
      }
    );
  }
), at = ({
  title: t,
  titleIcon: n,
  items: l,
  type: o = "unordered",
  bulletColor: a = "#2563eb",
  textColor: s = "#111827",
  backgroundColor: i = "#fff",
  borderColor: p = "#e5e7eb",
  fontSize: h = "15px",
  fontWeight: g = 500,
  borderRadius: m = "12px",
  padding: c = "16px",
  spacing: x = "12px",
  className: f,
  style: d
}) => {
  const u = o === "ordered", k = o === "inline", b = {
    backgroundColor: i,
    borderColor: p,
    color: s,
    borderWidth: p ? "1px" : "0px",
    borderStyle: "solid",
    borderRadius: m,
    padding: c,
    ...d
  }, S = k ? {
    display: "flex",
    gap: x,
    paddingLeft: 0,
    listStyleType: "none",
    margin: 0
  } : {
    listStyleType: u ? "decimal" : "none",
    paddingLeft: u ? "20px" : "0",
    margin: 0
  }, A = u ? "ol" : "ul";
  return /* @__PURE__ */ e.jsxs("div", { className: f, style: b, children: [
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
    /* @__PURE__ */ e.jsx(A, { style: S, children: l.map((I, O) => /* @__PURE__ */ e.jsx(
      we,
      {
        ...I,
        bulletColor: a,
        textColor: s,
        fontSize: h,
        fontWeight: g,
        spacing: x,
        isInline: k
      },
      O
    )) })
  ] });
}, we = ({
  text: t,
  icon: n,
  onClick: l,
  subItems: o,
  bulletColor: a,
  textColor: s,
  fontSize: i,
  fontWeight: p,
  spacing: h,
  isInline: g
}) => {
  const m = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: g ? "0" : h
  }, c = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: i,
    fontWeight: p,
    color: s,
    cursor: l ? "pointer" : "default"
  }, x = {
    width: "8px",
    height: "8px",
    backgroundColor: a,
    borderRadius: "50%",
    flexShrink: 0
  }, f = {
    listStyleType: "disc",
    paddingLeft: "20px",
    margin: 0
  };
  return /* @__PURE__ */ e.jsxs("li", { style: m, children: [
    /* @__PURE__ */ e.jsxs("div", { style: c, onClick: l, children: [
      n ? /* @__PURE__ */ e.jsx("span", { style: { fontSize: "16px", color: s }, children: n }) : !g && /* @__PURE__ */ e.jsx("span", { style: x }),
      /* @__PURE__ */ e.jsx("span", { children: t })
    ] }),
    o && o.length > 0 && /* @__PURE__ */ e.jsx("ul", { style: f, children: o.map((d, u) => /* @__PURE__ */ e.jsx(
      we,
      {
        ...d,
        bulletColor: a,
        textColor: s,
        fontSize: i,
        fontWeight: p,
        spacing: h,
        isInline: !1
      },
      u
    )) })
  ] });
}, se = ({
  tabs: t,
  defaultActive: n = 0,
  tabPosition: l,
  activeTabClassName: o = "",
  inactiveTabClassName: a = "",
  tabContainerClassName: s = "",
  contentContainerClassName: i = "",
  className: p = "",
  activeTabStyle: h,
  inactiveTabStyle: g,
  tabContainerStyle: m,
  contentContainerStyle: c,
  style: x,
  tabsWidth: f = "240px",
  tabGap: d = 8,
  tabPadding: u = "12px 16px",
  tabBorderRadius: k = 12,
  primaryColor: b = "#2563eb",
  textColor: S = "#374151",
  backgroundColor: A = "#ffffff",
  hoverTextColor: I = "#1e40af",
  responsiveBreakpoint: O = 768,
  showDrawerLabel: v = "Select Tab"
}) => {
  const [T, M] = P(n), [B, z] = P(null), [_, R] = P(!1), [H, Y] = P(!1);
  q(() => {
    const F = () => {
      R(window.innerWidth <= O);
    };
    return F(), window.addEventListener("resize", F), () => window.removeEventListener("resize", F);
  }, [O]);
  const y = l === "left" || l === "right", N = {
    display: "flex",
    flexDirection: y ? _ ? "column" : l === "left" ? "row" : "row-reverse" : "column",
    width: "100%",
    height: "100%",
    backgroundColor: A,
    ...y && !_ ? {} : { flexWrap: "wrap" },
    ...x
  }, $ = {
    width: y && !_ ? f : "100%",
    display: "flex",
    flexDirection: y && !_ ? "column" : "row",
    justifyContent: !y && l === "top" ? "center" : void 0,
    gap: d,
    padding: 8,
    boxSizing: "border-box",
    ...m
  }, U = {
    flexGrow: 1,
    padding: 24,
    background: "#f9fafb",
    boxSizing: "border-box",
    minWidth: 0,
    ...y && !_ ? { width: "calc(100% - " + f + ")" } : { width: "100%" },
    ...c
  }, r = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: u,
    borderRadius: k,
    border: "none",
    backgroundColor: "transparent",
    fontWeight: 500,
    transition: "all 0.2s ease",
    width: y && !_ ? "100%" : "auto",
    marginBottom: y && !_ ? d : 0,
    marginRight: !y || _ ? d : 0,
    justifyContent: "flex-start"
  }, j = {
    backgroundColor: b,
    color: "#fff",
    fontWeight: 700,
    boxShadow: `0 2px 10px ${b}55`,
    ...h
  }, W = {
    backgroundColor: "transparent",
    color: S,
    ...g
  }, D = {
    backgroundColor: `${b}22`,
    color: I
  };
  return /* @__PURE__ */ e.jsxs("div", { className: p, style: N, children: [
    /* @__PURE__ */ e.jsx("style", { children: `
        @media (max-width: ${O}px) {
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
    _ && y ? /* @__PURE__ */ e.jsxs("div", { style: { width: "100%", marginBottom: 12 }, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => Y(!H),
          style: {
            ...r,
            ...j,
            justifyContent: "space-between",
            width: "100%"
          },
          className: "custom-tab-drawer-button",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: v }),
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: 18 }, children: "☰" })
          ]
        }
      ),
      H && /* @__PURE__ */ e.jsx("div", { className: "custom-tab-mobile-drawer", children: t.map((F, C) => {
        const L = C === T, X = B === C;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              M(C), Y(!1);
            },
            onMouseEnter: () => z(C),
            onMouseLeave: () => z(null),
            className: L ? o : a,
            style: {
              ...r,
              ...L ? j : W,
              ...X && !L ? D : {}
            },
            children: [
              F.icon && /* @__PURE__ */ e.jsx("span", { children: F.icon }),
              /* @__PURE__ */ e.jsx("span", { children: F.label })
            ]
          },
          C
        );
      }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "nav",
      {
        className: s,
        style: $,
        "aria-label": "Tabs Navigation",
        children: t.map((F, C) => {
          const L = C === T, X = B === C;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => M(C),
              onMouseEnter: () => z(C),
              onMouseLeave: () => z(null),
              className: L ? o : a,
              style: {
                ...r,
                ...L ? j : W,
                ...X && !L ? D : {}
              },
              children: [
                F.icon && /* @__PURE__ */ e.jsx("span", { children: F.icon }),
                /* @__PURE__ */ e.jsx("span", { children: F.label })
              ]
            },
            C
          );
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "section",
      {
        className: i,
        style: U,
        role: "tabpanel",
        children: t[T]?.content
      }
    )
  ] });
}, it = (t) => /* @__PURE__ */ e.jsx(se, { ...t, tabPosition: "left" }), ct = (t) => /* @__PURE__ */ e.jsx(se, { ...t, tabPosition: "top" }), dt = (t) => /* @__PURE__ */ e.jsx(se, { ...t, tabPosition: "right" }), ut = ({
  src: t,
  poster: n,
  autoPlay: l = !1,
  loop: o = !1,
  controls: a = !1,
  width: s = "100%",
  height: i = "150px",
  borderRadius: p = "12px",
  backgroundColor: h = "#1e1e1e",
  primaryColor: g = "#ff4081",
  padding: m = "16px",
  className: c
}) => {
  const x = J(null), f = J(null), [d, u] = P(l), [k, b] = P(0), [S, A] = P(0), [I, O] = P(0.5), [v, T] = P(!1), [M, B] = P(o);
  q(() => {
    x.current && (x.current.volume = I, x.current.loop = M);
  }, [I, M]);
  const z = () => {
    x.current && (d ? x.current.pause() : x.current.play(), u(!d));
  }, _ = () => {
    x.current && (b(x.current.currentTime), A(x.current.duration));
  }, R = (w) => {
    if (!x.current || !w.currentTarget) return;
    const N = w.currentTarget.getBoundingClientRect(), U = (w.clientX - N.left) / N.width * S;
    x.current.currentTime = U, b(U);
  }, H = (w) => {
    x.current && (x.current.currentTime += w);
  }, Y = () => {
    f.current && (v ? document.exitFullscreen?.() : f.current.requestFullscreen?.(), T(!v));
  }, y = (w) => {
    const N = Math.floor(w / 60), $ = Math.floor(w % 60);
    return `${N}:${$ < 10 ? "0" : ""}${$}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: f,
      className: c,
      style: {
        position: "relative",
        width: s,
        backgroundColor: h,
        borderRadius: p,
        color: "#fff",
        overflow: "hidden",
        padding: m,
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
            poster: n,
            autoPlay: l,
            loop: o,
            controls: a,
            onTimeUpdate: _,
            onLoadedMetadata: _,
            style: {
              width: "100%",
              height: i,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => H(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(me, { size: 20 }) }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: z,
                  style: {
                    background: g,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": d ? "Pause" : "Play",
                  children: d ? /* @__PURE__ */ e.jsx(xe, { size: 20 }) : /* @__PURE__ */ e.jsx(fe, { size: 20 })
                }
              ),
              /* @__PURE__ */ e.jsx("button", { onClick: () => H(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: y(k) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  " ",
                  "/ ",
                  y(S)
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
                        width: `${k / S * 100 || 0}%`,
                        height: "100%",
                        background: g,
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
                    onClick: () => B(!M),
                    "aria-label": "Toggle Loop",
                    children: /* @__PURE__ */ e.jsx(he, { size: 18, color: M ? g : void 0 })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: () => O(I > 0 ? 0 : 0.5),
                    "aria-label": "Toggle Mute",
                    children: I > 0 ? /* @__PURE__ */ e.jsx(be, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: Y, "aria-label": "Toggle Fullscreen", children: v ? /* @__PURE__ */ e.jsx(pe, { size: 18 }) : /* @__PURE__ */ e.jsx(ue, { size: 18 }) })
              ] })
            ]
          }
        )
      ]
    }
  );
}, pt = ({
  src: t,
  thumbnail: n,
  autoPlay: l = !1,
  loop: o = !1,
  backgroundColor: a = "#000000",
  primaryColor: s = "#10b981",
  secondaryColor: i = "#ffffff",
  borderRadius: p = "12px",
  padding: h = "16px",
  width: g = "100%",
  className: m
}) => {
  const c = J(null), x = J(null), [f, d] = P(l), [u, k] = P(0), [b, S] = P(0), [A, I] = P(0.5), [O, v] = P(!1), [T, M] = P(o);
  q(() => {
    c.current && (c.current.volume = A);
  }, [A]), q(() => {
    c.current && (c.current.loop = T);
  }, [T]);
  const B = () => {
    c.current && (f ? c.current.pause() : c.current.play(), d(!f));
  }, z = () => {
    c.current && (k(c.current.currentTime), S(c.current.duration));
  }, _ = (y) => {
    if (!c.current || !y.currentTarget) return;
    const w = y.currentTarget.getBoundingClientRect(), $ = (y.clientX - w.left) / w.width * b;
    c.current.currentTime = $, k($);
  }, R = (y) => {
    c.current && (c.current.currentTime += y);
  }, H = () => {
    x.current && (O ? document.exitFullscreen?.() : x.current.requestFullscreen?.(), v(!O));
  }, Y = (y) => {
    const w = Math.floor(y / 60), N = Math.floor(y % 60);
    return `${w}:${N < 10 ? "0" : ""}${N}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: x,
      className: m,
      style: {
        position: "relative",
        width: g,
        backgroundColor: a,
        borderRadius: p,
        color: i,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        overflow: "hidden",
        padding: h,
        boxSizing: "border-box",
        maxWidth: "100%"
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "audio",
          {
            ref: c,
            src: t,
            autoPlay: l,
            loop: o,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => R(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(me, { size: 20 }) }),
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
                  "aria-label": f ? "Pause" : "Play",
                  children: f ? /* @__PURE__ */ e.jsx(xe, { size: 20 }) : /* @__PURE__ */ e.jsx(fe, { size: 20 })
                }
              ),
              /* @__PURE__ */ e.jsx("button", { onClick: () => R(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", marginRight: "4px" }, children: Y(u) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  "/ ",
                  Y(b)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: _,
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
                        width: `${u / b * 100 || 0}%`,
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
                        onClick: () => M(!T),
                        "aria-label": "Toggle Loop",
                        children: /* @__PURE__ */ e.jsx(he, { size: 18, color: T ? s : void 0 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => I(A > 0 ? 0 : 0.5),
                        "aria-label": "Toggle Mute",
                        children: A > 0 ? /* @__PURE__ */ e.jsx(be, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("button", { onClick: H, "aria-label": "Toggle Fullscreen", children: O ? /* @__PURE__ */ e.jsx(pe, { size: 18 }) : /* @__PURE__ */ e.jsx(ue, { size: 18 }) })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}, xt = ({
  display: t = { sm: "block", md: "flex", lg: "grid" },
  flexDirection: n = { sm: "column", md: "row", lg: "row" },
  justifyContent: l = { sm: "flex-start", md: "center", lg: "space-between" },
  alignItems: o = { sm: "stretch", md: "center", lg: "center" },
  gridTemplateColumns: a = { sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
  gridTemplateRows: s = { sm: "auto", md: "auto", lg: "auto" },
  gap: i = { sm: "10px", md: "20px", lg: "30px" },
  rowGap: p = { sm: "10px", md: "15px", lg: "20px" },
  columnGap: h = { sm: "10px", md: "15px", lg: "20px" },
  width: g = { sm: "100%", md: "90%", lg: "80%" },
  maxWidth: m = { sm: "100%", md: "800px", lg: "1200px" },
  height: c = { sm: "auto", md: "auto", lg: "auto" },
  padding: x = { sm: "10px", md: "20px", lg: "40px" },
  margin: f = { sm: "0 auto", md: "0 auto", lg: "0 auto" },
  textAlign: d = { sm: "left", md: "center", lg: "center" },
  backgroundColor: u = "#ffffff",
  border: k = { sm: "none", md: "1px solid #ddd", lg: "2px solid #ccc" },
  borderRadius: b = { sm: "0px", md: "8px", lg: "12px" },
  boxShadow: S = { sm: "none", md: "0px 4px 6px rgba(0,0,0,0.1)", lg: "0px 6px 10px rgba(0,0,0,0.15)" },
  overflow: A = { sm: "visible", md: "hidden", lg: "auto" },
  children: I,
  className: O = ""
}) => {
  const [v, T] = P("lg");
  q(() => {
    const B = () => {
      const z = window.innerWidth;
      z <= 767 ? T("sm") : z >= 768 && z <= 1023 ? T("md") : T("lg");
    };
    return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
  }, []);
  const M = K(
    () => ({
      display: t[v],
      flexDirection: n[v],
      justifyContent: l[v],
      alignItems: o[v],
      gridTemplateColumns: a[v],
      gridTemplateRows: s[v],
      gap: i[v],
      rowGap: p[v],
      columnGap: h[v],
      width: g[v],
      maxWidth: m[v],
      height: c[v],
      padding: x[v],
      margin: f[v],
      textAlign: d[v],
      backgroundColor: u,
      border: k[v],
      borderRadius: b[v],
      boxShadow: S[v],
      overflow: A[v],
      boxSizing: "border-box"
    }),
    [v, t, n, l, o, a, s, i, p, h, g, m, c, x, f, d, u, k, b, S, A]
  );
  return /* @__PURE__ */ e.jsx("div", { className: O, style: M, children: I });
}, ft = ({
  items: t,
  allowMultiple: n = !1,
  defaultOpenIndex: l = [],
  borderColor: o = "#d1d5db",
  backgroundColor: a = "#ffffff",
  textColor: s = "#111827",
  hoverBgColor: i = "#f3f4f6",
  hoverTextColor: p = "#111827",
  paddingVertical: h = "16px",
  paddingHorizontal: g = "16px",
  margin: m = "12px 0",
  iconOpen: c = "−",
  iconClose: x = "+",
  transitionDuration: f = "300ms",
  borderRadius: d = "8px",
  shadow: u = "0 2px 8px rgba(0, 0, 0, 0.05)",
  contentPadding: k = "16px",
  fontSize: b = "16px",
  fontWeight: S = "600",
  iconSize: A = "18px",
  contentFontSize: I = "14px",
  contentFontWeight: O = "400",
  contentBackgroundColor: v = "#ffffff",
  contentTextColor: T = "#111827",
  className: M,
  style: B
}) => {
  const [z, _] = P(l), R = J([]), H = J([]);
  q(() => {
    R.current.forEach((y, w) => {
      y && (y.style.maxHeight = z.includes(w) ? `${y.scrollHeight}px` : "0px");
    });
  }, [z]);
  const Y = (y) => {
    _(
      (w) => n ? w.includes(y) ? w.filter((N) => N !== y) : [...w, y] : w.includes(y) ? [] : [y]
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: M, style: { width: "100%", ...B }, children: t.map((y, w) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        border: `1px solid ${o}`,
        borderRadius: d,
        margin: m,
        boxShadow: u,
        overflow: "hidden",
        transition: `all ${f} ease`
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: (N) => {
              H.current[w] = N;
            },
            onClick: () => Y(w),
            style: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: a,
              color: s,
              padding: `${h} ${g}`,
              fontWeight: S,
              fontSize: b,
              cursor: "pointer",
              outline: "none",
              border: "none",
              transition: `all ${f}`
            },
            onMouseEnter: (N) => {
              N.currentTarget.style.backgroundColor = i, N.currentTarget.style.color = p;
            },
            onMouseLeave: (N) => {
              N.currentTarget.style.backgroundColor = a, N.currentTarget.style.color = s;
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: y.title }),
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: A }, children: z.includes(w) ? c : x })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: (N) => {
              R.current[w] = N;
            },
            style: {
              overflow: "hidden",
              maxHeight: z.includes(w) ? `${R.current[w]?.scrollHeight}px` : "0px",
              transition: `max-height ${f} ease-in-out`
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                style: {
                  borderTop: `1px solid ${o}`,
                  backgroundColor: v,
                  color: T,
                  padding: k,
                  fontSize: I,
                  fontWeight: O
                },
                children: y.content
              }
            )
          }
        )
      ]
    },
    w
  )) });
}, ht = ({
  type: t,
  name: n,
  options: l,
  selectedValues: o,
  onChange: a,
  disabled: s = !1,
  readOnly: i = !1,
  required: p = !1,
  error: h,
  className: g = "",
  customIcon: m
}) => {
  const c = t === "checkbox", x = (f) => {
    if (a)
      if (c) {
        const d = Array.isArray(o) ? o.includes(f) ? o.filter((u) => u !== f) : [...o, f] : [f];
        a(d);
      } else
        a(f);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${g}`, children: [
    l.map((f) => {
      const d = c ? Array.isArray(o) && o.includes(f.value) : o === f.value;
      return /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: `flex items-center space-x-2 cursor-pointer p-2 ${s ? "opacity-50 cursor-not-allowed" : ""}`,
          children: [
            m ? m(d) : /* @__PURE__ */ e.jsx(
              "span",
              {
                className: `flex justify-center items-center w-5 h-5 border ${d ? "bg-blue-500 border-blue-500" : "border-gray-400"} rounded-${c ? "md" : "full"}`,
                children: d && /* @__PURE__ */ e.jsx("span", { className: "w-3 h-3 bg-white rounded-full" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: t,
                name: n,
                value: f.value,
                checked: d,
                disabled: s || i,
                required: p,
                onChange: () => x(f.value),
                className: "hidden"
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-gray-700", children: f.label })
          ]
        },
        f.value
      );
    }),
    h && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-red-500 mt-1", children: h })
  ] });
}, mt = ({
  label: t = "Open Drawer",
  icon: n,
  iconPosition: l = "left",
  onClick: o,
  style: a = {}
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
      ...a
    },
    children: [
      n && l === "left" && n,
      t,
      n && l === "right" && n
    ]
  }
), gt = ({
  open: t,
  onClose: n,
  position: l = "right",
  width: o = "300px",
  height: a = "300px",
  backgroundColor: s = "#fff",
  transitionDuration: i = 300,
  style: p = {},
  children: h,
  showCloseButton: g = !0,
  closeButtonStyle: m = {}
}) => {
  const [c, x] = P(t);
  q(() => {
    t ? x(!0) : setTimeout(() => x(!1), i);
  }, [t, i]);
  const f = K(() => {
    if (t) return "translate(0, 0)";
    switch (l) {
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
  }, [t, l]), d = {
    position: "fixed",
    zIndex: 1e3,
    backgroundColor: s,
    transition: `transform ${i}ms ease, opacity ${i}ms ease`,
    transform: f,
    opacity: t ? 1 : 0,
    ...p,
    ...l === "left" || l === "right" ? { top: 0, [l]: 0, width: o, height: "100%" } : { left: 0, [l]: 0, height: a, width: "100%" }
  }, u = {
    position: "fixed",
    display: c ? "block" : "none",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    transition: `opacity ${i}ms ease`,
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
    /* @__PURE__ */ e.jsx("div", { style: u, onClick: n }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: {
          ...d,
          display: "block",
          visibility: c ? "visible" : "hidden",
          pointerEvents: t ? "auto" : "none"
        },
        children: [
          g && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: n,
              style: { ...k, ...m },
              children: /* @__PURE__ */ e.jsx(je, { size: 20, color: "rgba(255, 0, 0, 1)" })
            }
          ),
          h
        ]
      }
    )
  ] });
}, bt = ({
  options: t,
  value: n,
  defaultValue: l,
  onChange: o,
  placeholder: a = "Select an option",
  disabled: s = !1,
  borderColor: i = "#ccc",
  backgroundColor: p = "#fff",
  textColor: h = "#333",
  hoverColor: g = "#f0f0f0",
  padding: m = "12px 16px",
  margin: c = "0 0 1rem 0",
  dropdownWidth: x = "100%",
  dropdownHeight: f = "200px",
  borderRadius: d = "8px",
  boxShadow: u = "0 4px 8px rgba(0,0,0,0.1)",
  optionPadding: k = "10px 12px",
  optionGap: b = "8px",
  transitionDuration: S = "0.25s",
  className: A = "",
  dropdownStyle: I,
  dropdownClassName: O = "",
  optionStyle: v,
  optionClassName: T = "",
  iconPrefix: M,
  iconSuffix: B
}) => {
  const [z, _] = P(l), [R, H] = P(!1), Y = J(null);
  q(() => {
    const $ = (U) => {
      Y.current && !Y.current.contains(U.target) && H(!1);
    };
    return document.addEventListener("mousedown", $), () => document.removeEventListener("mousedown", $);
  }, []);
  const y = ($) => {
    _($), H(!1), o && o($);
  }, w = n ?? z, N = t.find(($) => $.value === w);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: Y,
      className: A,
      style: {
        position: "relative",
        width: x,
        margin: c,
        fontFamily: "sans-serif",
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => H(($) => !$),
            disabled: s,
            "aria-haspopup": "listbox",
            "aria-expanded": R,
            style: {
              width: "100%",
              padding: m,
              backgroundColor: p,
              color: h,
              border: `1px solid ${i}`,
              borderRadius: d,
              boxShadow: s ? "none" : u,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: s ? "not-allowed" : "pointer",
              opacity: s ? 0.6 : 1,
              transition: `all ${S} ease-in-out`
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: b }, children: [
                M && /* @__PURE__ */ e.jsx("span", { children: M }),
                /* @__PURE__ */ e.jsx("span", { children: N?.label || a })
              ] }),
              B || /* @__PURE__ */ e.jsx("span", { style: { marginLeft: "8px" }, children: "▼" })
            ]
          }
        ),
        R && /* @__PURE__ */ e.jsx(
          "ul",
          {
            role: "listbox",
            className: O,
            style: {
              position: "absolute",
              top: "100%",
              left: 0,
              zIndex: 1e3,
              width: "100%",
              maxHeight: f,
              overflowY: "auto",
              backgroundColor: p,
              border: `1px solid ${i}`,
              borderRadius: d,
              boxShadow: u,
              marginTop: "4px",
              transition: `all ${S} ease`,
              ...I
            },
            children: t.map(($) => /* @__PURE__ */ e.jsxs(
              "li",
              {
                onClick: () => y($.value),
                role: "option",
                className: T,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: b,
                  padding: k,
                  cursor: "pointer",
                  backgroundColor: z === $.value ? g : p,
                  transition: `background ${S}`,
                  ...v
                },
                onMouseEnter: (U) => U.currentTarget.style.backgroundColor = g,
                onMouseLeave: (U) => U.currentTarget.style.backgroundColor = z === $.value ? g : p,
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
}, yt = ({
  columns: t,
  data: n,
  className: l = "",
  pagination: o = !0,
  rowsPerPage: a = 5,
  colors: s = {
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
  const [i, p] = P(null), [h, g] = P("asc"), [m, c] = P(1), x = (u) => {
    i === u ? g(h === "asc" ? "desc" : "asc") : (p(u), g("asc"));
  }, f = [...n].sort((u, k) => i ? h === "asc" ? u[i] > k[i] ? 1 : -1 : u[i] < k[i] ? 1 : -1 : 0), d = o ? f.slice(
    (m - 1) * a,
    m * a
  ) : f;
  return /* @__PURE__ */ e.jsxs("div", { className: `overflow-x-auto w-full ${l}`, children: [
    /* @__PURE__ */ e.jsxs("table", { className: `w-full border-collapse border ${s.borderColor}`, children: [
      /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { className: `${s.headerBg} ${s.headerText} text-left`, children: t.map(({ key: u, label: k, sortable: b }) => /* @__PURE__ */ e.jsx(
        "th",
        {
          onClick: () => b && x(u),
          className: `p-3 border ${s.borderColor} ${b ? "cursor-pointer hover:opacity-80" : ""}`,
          children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            k,
            " ",
            b && (i === u ? h === "asc" ? /* @__PURE__ */ e.jsx(
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
        u
      )) }) }),
      /* @__PURE__ */ e.jsx("tbody", { children: d.map((u, k) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: `${s.rowBg} ${s.rowText} hover:${s.hoverBg}`,
          children: t.map(({ key: b }) => /* @__PURE__ */ e.jsx("td", { className: `p-3 border ${s.borderColor}`, children: u[b] }, b))
        },
        k
      )) })
    ] }),
    o && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mt-3 p-2", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: `px-3 py-1 ${s.paginationBg} ${s.paginationText} rounded-md disabled:opacity-50`,
          disabled: m === 1,
          onClick: () => c((u) => Math.max(u - 1, 1)),
          children: "Prev"
        }
      ),
      /* @__PURE__ */ e.jsxs("span", { className: `${s.paginationText}`, children: [
        "Page ",
        m
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: `px-3 py-1 ${s.paginationBg} ${s.paginationText} rounded-md disabled:opacity-50`,
          disabled: m * a >= n.length,
          onClick: () => c((u) => u + 1),
          children: "Next"
        }
      )
    ] })
  ] });
}, jt = ({
  columns: t = { sm: 1, md: 2, lg: 3 },
  rows: n = { sm: "auto", md: "auto", lg: "auto" },
  gap: l = { sm: "10px", md: "20px", lg: "30px" },
  rowGap: o = { sm: "10px", md: "15px", lg: "20px" },
  columnGap: a = { sm: "10px", md: "15px", lg: "20px" },
  padding: s = { sm: "10px", md: "20px", lg: "40px" },
  alignItems: i = { sm: "stretch", md: "center", lg: "center" },
  justifyItems: p = { sm: "stretch", md: "center", lg: "center" },
  backgroundColor: h = "#f4f4f4",
  width: g = { sm: "100%", md: "100%", lg: "100%" },
  maxWidth: m = { sm: "100%", md: "100%", lg: "100%" },
  height: c = { sm: "auto", md: "auto", lg: "auto" },
  children: x,
  className: f = ""
}) => {
  const [d, u] = P("lg");
  q(() => {
    const b = () => {
      const S = window.innerWidth;
      S <= 767 ? u("sm") : S >= 768 && S <= 1023 ? u("md") : u("lg");
    };
    return b(), window.addEventListener("resize", b), () => window.removeEventListener("resize", b);
  }, []);
  const k = K(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${t[d]}, 1fr)`,
      gridTemplateRows: n[d] !== "auto" ? `repeat(${n[d]}, 1fr)` : "auto",
      gap: l[d],
      rowGap: o[d],
      columnGap: a[d],
      padding: s[d],
      alignItems: i[d],
      justifyItems: p[d],
      backgroundColor: h,
      width: g[d],
      maxWidth: m[d],
      height: c[d]
    }),
    [d, t, n, l, o, a, s, i, p, g, m, c, h]
  );
  return /* @__PURE__ */ e.jsx("div", { className: f, style: k, children: x });
}, wt = ({
  direction: t = { sm: "column", md: "row", lg: "row" },
  align: n = { sm: "center", md: "center", lg: "center" },
  justify: l = { sm: "center", md: "space-between", lg: "space-around" },
  gap: o = { sm: "10px", md: "20px", lg: "30px" },
  padding: a = { sm: "10px", md: "20px", lg: "40px" },
  backgroundColor: s = "#f4f4f4",
  width: i = { sm: "100%", md: "100%", lg: "100%" },
  height: p = { sm: "auto", md: "auto", lg: "auto" },
  maxWidth: h = { sm: "100%", md: "100%", lg: "100%" },
  children: g,
  className: m = ""
}) => {
  const [c, x] = P("lg");
  q(() => {
    const d = () => {
      const u = window.innerWidth;
      u <= 767 ? x("sm") : u >= 768 && u <= 1023 ? x("md") : x("lg");
    };
    return d(), window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
  }, []);
  const f = K(
    () => ({
      display: "flex",
      flexDirection: t[c],
      alignItems: n[c],
      justifyContent: l[c],
      gap: o[c],
      padding: a[c],
      backgroundColor: s,
      width: i[c],
      maxWidth: h[c],
      height: p[c]
    }),
    [c, t, n, l, o, a, i, h, p, s]
  );
  return /* @__PURE__ */ e.jsx("div", { className: m, style: f, children: g });
}, et = {
  success: {
    bg: "#ecfdf5",
    border: "#34d399",
    iconColor: "#059669",
    Icon: /* @__PURE__ */ e.jsx(Ie, { size: 20 })
  },
  error: {
    bg: "#fef2f2",
    border: "#f87171",
    iconColor: "#dc2626",
    Icon: /* @__PURE__ */ e.jsx(Ne, { size: 20 })
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
}, vt = ({
  title: t = "",
  description: n = "",
  type: l = "info",
  dismissible: o = !0,
  onClose: a,
  duration: s,
  icon: i,
  actionButton: p,
  position: h = "top-right",
  className: g,
  style: m
}) => {
  const [c, x] = P(!0);
  if (q(() => {
    if (s) {
      const S = setTimeout(() => {
        x(!1), a?.();
      }, s);
      return () => clearTimeout(S);
    }
  }, [s, a]), !c) return null;
  const { bg: f, border: d, iconColor: u, Icon: k } = et[l], b = tt(h);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: g,
      style: {
        ...b,
        display: "flex",
        gap: "12px",
        padding: "16px",
        backgroundColor: f,
        borderLeft: `4px solid ${d}`,
        borderRadius: "8px",
        color: "#111827",
        alignItems: "flex-start",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        animation: "slideIn 0.3s ease",
        maxWidth: "600px",
        width: "calc(100% - 40px)",
        ...m
        // ✅ User custom styles merged last
      },
      children: [
        /* @__PURE__ */ e.jsx("div", { style: { color: u, marginTop: "3px" }, children: i || k }),
        /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
          t && /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", marginBottom: "4px" }, children: t }),
          n && /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", color: "#374151" }, children: n }),
          p && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "10px" }, children: p })
        ] }),
        o && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              x(!1), a?.();
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
  color: n = "#2563eb",
  textColor: l = "#fff",
  borderColor: o = "#2563eb",
  icon: a,
  iconPosition: s = "left",
  rounded: i = !1,
  borderRadius: p,
  borderWidth: h = "0",
  fontSize: g = "14px",
  fontWeight: m = 500,
  horizontalPadding: c = "10px",
  verticalPadding: x = "6px",
  margin: f = "0",
  shadow: d = "0 1px 4px rgba(0, 0, 0, 0.1)",
  notificationDot: u = !1,
  dotColor: k = "#ef4444",
  count: b,
  pulse: S = !1,
  style: A,
  onClick: I
}) => {
  const O = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: n,
    border: `${h} solid ${o}`,
    borderRadius: p || (i ? "9999px" : "6px"),
    padding: `${x} ${c}`,
    fontSize: g,
    fontWeight: m,
    margin: f,
    boxShadow: d,
    position: "relative",
    cursor: I ? "pointer" : "default",
    ...A
  }, v = {
    color: l,
    display: "inline"
  }, T = {
    display: "flex",
    alignItems: "center",
    color: l
  }, M = {
    ...T,
    marginRight: t ? "6px" : "0px"
  }, B = {
    ...T,
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
  }, _ = {
    position: "absolute",
    top: "-4px",
    right: "-4px",
    height: "8px",
    width: "8px",
    backgroundColor: k,
    borderRadius: "50%",
    zIndex: 1,
    animation: S ? "pulseAnim 1.2s infinite" : void 0
  };
  return /* @__PURE__ */ e.jsxs("span", { style: O, onClick: I, children: [
    u && /* @__PURE__ */ e.jsx("span", { style: _ }),
    typeof b < "u" && /* @__PURE__ */ e.jsx("span", { style: z, children: b }),
    a && s === "left" && /* @__PURE__ */ e.jsx("span", { style: M, children: a }),
    t && /* @__PURE__ */ e.jsx("span", { style: v, children: t }),
    a && s === "right" && /* @__PURE__ */ e.jsx("span", { style: B, children: a }),
    /* @__PURE__ */ e.jsx("style", { children: `
          @keyframes pulseAnim {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
        ` })
  ] });
}, St = ({
  src: t,
  alt: n = "User Avatar",
  size: l = "medium",
  className: o = ""
}) => {
  const a = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };
  return /* @__PURE__ */ e.jsx(
    "img",
    {
      src: t,
      alt: n,
      className: `rounded-full object-cover ${a[l]} ${o}`
    }
  );
}, Tt = ({
  avatars: t,
  size: n = "medium",
  maxVisible: l = 3,
  className: o = ""
}) => {
  const a = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex -space-x-2", children: [
    t.slice(0, l).map((s, i) => /* @__PURE__ */ e.jsx(
      "img",
      {
        src: s,
        className: `rounded-full border-2 border-white object-cover ${a[n]} ${o}`
      },
      i
    )),
    t.length > l && /* @__PURE__ */ e.jsxs("span", { className: `rounded-full border-2 border-white bg-gray-500 text-white flex items-center justify-center ${a[n]}`, children: [
      "+",
      t.length - l
    ] })
  ] });
}, zt = ({
  src: t,
  alt: n = "User Avatar",
  status: l = "online",
  size: o = "medium",
  className: a = ""
}) => {
  const [s, i] = P(!1), p = {
    small: { size: "w-8 h-8", statusSize: "w-2 h-2" },
    medium: { size: "w-12 h-12", statusSize: "w-3 h-3" },
    large: { size: "w-16 h-16", statusSize: "w-4 h-4" }
  }, h = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    away: "bg-yellow-500",
    busy: "bg-red-500"
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `relative inline-block ${p[o].size}`, children: [
    t && !s ? /* @__PURE__ */ e.jsx(
      "img",
      {
        src: t,
        alt: n,
        "aria-label": n,
        className: `rounded-full object-cover ${p[o].size} ${a}`,
        onError: () => i(!0)
      }
    ) : /* @__PURE__ */ e.jsx(
      "svg",
      {
        "aria-label": "Placeholder for user avatar",
        className: `rounded-full bg-gray-300 text-gray-500 dark:bg-gray-600 dark:text-gray-400 ${p[o].size}`,
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
        className: `z-[1000] w-full h-full absolute bottom-0 right-0 border-2 border-white rounded-full ${h[l]} ${p[o].statusSize}`
      }
    )
  ] });
};
export {
  ft as Accordion,
  vt as Alert,
  pt as AudioPlayer,
  St as Avatar,
  Tt as AvatarGroup,
  zt as AvatarWithStatus,
  kt as Badge,
  ot as Button,
  ht as CheckRadio,
  xt as Container,
  gt as Drawer,
  mt as DrawerButton,
  bt as Dropdown,
  wt as Flexbox,
  jt as GridView,
  st as Image,
  lt as Input,
  it as LeftTabs,
  at as List,
  dt as RightTabs,
  yt as Table,
  nt as Text,
  ct as TopTabs,
  ut as VideoPlayer
};
