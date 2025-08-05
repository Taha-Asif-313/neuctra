import J, { useMemo as ee, forwardRef as ne, createElement as se, useRef as Z, useState as N, useImperativeHandle as ke, useEffect as q } from "react";
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
function Ne() {
  if (le) return Q;
  le = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(n, l, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), l.key !== void 0 && (a = "" + l.key), "key" in l) {
      o = {};
      for (var c in l)
        c !== "key" && (o[c] = l[c]);
    } else o = l;
    return l = o.ref, {
      $$typeof: t,
      type: n,
      key: a,
      ref: l !== void 0 ? l : null,
      props: o
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
function Te() {
  return ae || (ae = 1, process.env.NODE_ENV !== "production" && function() {
    function t(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === $ ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case h:
          return "Fragment";
        case b:
          return "Profiler";
        case y:
          return "StrictMode";
        case C:
          return "Suspense";
        case v:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case x:
            return "Portal";
          case S:
            return (i.displayName || "Context") + ".Provider";
          case T:
            return (i._context.displayName || "Context") + ".Consumer";
          case j:
            var w = i.render;
            return i = i.displayName, i || (i = w.displayName || w.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case z:
            return w = i.displayName || null, w !== null ? w : t(i.type) || "Memo";
          case L:
            w = i._payload, i = i._init;
            try {
              return t(i(w));
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
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var F = w.error, V = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return F.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          V
        ), r(i);
      }
    }
    function n(i) {
      if (i === h) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === L)
        return "<...>";
      try {
        var w = t(i);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var i = _.A;
      return i === null ? null : i.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(i) {
      if (W.call(i, "key")) {
        var w = Object.getOwnPropertyDescriptor(i, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function c(i, w) {
      function F() {
        k || (k = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: F,
        configurable: !0
      });
    }
    function p() {
      var i = t(this.type);
      return E[i] || (E[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function f(i, w, F, V, B, M, A, X) {
      return F = M.ref, i = {
        $$typeof: m,
        type: i,
        key: w,
        props: M,
        _owner: B
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
        value: A
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function g(i, w, F, V, B, M, A, X) {
      var R = w.children;
      if (R !== void 0)
        if (V)
          if (P(R)) {
            for (V = 0; V < R.length; V++)
              d(R[V]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(R);
      if (W.call(w, "key")) {
        R = t(i);
        var G = Object.keys(w).filter(function(ve) {
          return ve !== "key";
        });
        V = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", U[R + V] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          V,
          R,
          G,
          R
        ), U[R + V] = !0);
      }
      if (R = null, F !== void 0 && (s(F), R = "" + F), a(w) && (s(w.key), R = "" + w.key), "key" in w) {
        F = {};
        for (var re in w)
          re !== "key" && (F[re] = w[re]);
      } else F = w;
      return R && c(
        F,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), f(
        i,
        R,
        M,
        B,
        l(),
        F,
        A,
        X
      );
    }
    function d(i) {
      typeof i == "object" && i !== null && i.$$typeof === m && i._store && (i._store.validated = 1);
    }
    var u = J, m = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), S = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), _ = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, P = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    u = {
      react_stack_bottom_frame: function(i) {
        return i();
      }
    };
    var k, E = {}, I = u.react_stack_bottom_frame.bind(
      u,
      o
    )(), H = D(n(o)), U = {};
    K.Fragment = h, K.jsx = function(i, w, F, V, B) {
      var M = 1e4 > _.recentlyCreatedOwnerStacks++;
      return g(
        i,
        w,
        F,
        !1,
        V,
        B,
        M ? Error("react-stack-top-frame") : I,
        M ? D(n(i)) : H
      );
    }, K.jsxs = function(i, w, F, V, B) {
      var M = 1e4 > _.recentlyCreatedOwnerStacks++;
      return g(
        i,
        w,
        F,
        !0,
        V,
        B,
        M ? Error("react-stack-top-frame") : I,
        M ? D(n(i)) : H
      );
    };
  }()), K;
}
var ie;
function $e() {
  return ie || (ie = 1, process.env.NODE_ENV === "production" ? te.exports = Ne() : te.exports = Te()), te.exports;
}
var e = $e();
const st = ({
  as: t = "p",
  children: r,
  className: s = "",
  href: n,
  target: l,
  rel: o,
  // Style
  color: a = "#333",
  bgColor: c,
  fontSize: p = "16px",
  fontWeight: f = "normal",
  textAlign: g = "left",
  textTransform: d = "none",
  lineHeight: u = "normal",
  letterSpacing: m = "normal",
  maxWidth: x,
  padding: h,
  margin: y,
  borderRadius: b,
  boxShadow: T,
  shadowColor: S = "rgba(0,0,0,0.1)",
  wordBreak: j = "normal",
  // Text styles
  italic: C = !1,
  bold: v = !1,
  underline: z = !1,
  strikethrough: L = !1,
  selectable: O = !0,
  truncate: $ = !1,
  // Hover & Active
  hoverColor: _,
  hoverBgColor: W,
  hoverTextDecoration: P,
  activeColor: D,
  activeBgColor: k,
  transitionDuration: E = "0.25s",
  // Event
  onClick: I
}) => {
  const H = ee(() => {
    const M = [];
    return z && M.push("underline"), L && M.push("line-through"), M.join(" ") || "none";
  }, [z, L]), U = {
    color: a,
    backgroundColor: c || "transparent",
    fontSize: p,
    fontWeight: v ? "bold" : f,
    textAlign: g,
    textTransform: d,
    lineHeight: u,
    letterSpacing: m,
    maxWidth: x,
    padding: h,
    margin: y,
    borderRadius: b,
    textDecoration: H,
    fontStyle: C ? "italic" : "normal",
    wordBreak: j,
    boxShadow: T || (S ? `0 1px 4px ${S}` : void 0),
    cursor: I || n ? "pointer" : "default",
    userSelect: O ? "text" : "none",
    transition: `all ${E} ease-in-out`,
    overflow: $ ? "hidden" : void 0,
    whiteSpace: $ ? "nowrap" : void 0,
    textOverflow: $ ? "ellipsis" : void 0
  }, B = {
    className: s,
    style: U,
    onClick: I,
    onMouseEnter: (M) => {
      const A = M.currentTarget;
      _ && (A.style.color = _), W && (A.style.backgroundColor = W), P && (A.style.textDecoration = P);
    },
    onMouseLeave: (M) => {
      const A = M.currentTarget;
      A.style.color = a, A.style.backgroundColor = c || "transparent", A.style.textDecoration = H;
    },
    onMouseDown: (M) => {
      const A = M.currentTarget;
      D && (A.style.color = D), k && (A.style.backgroundColor = k);
    },
    onMouseUp: (M) => {
      const A = M.currentTarget;
      A.style.color = _ || a, A.style.backgroundColor = W || c || "transparent";
    }
  };
  return t === "a" || n ? /* @__PURE__ */ e.jsx(
    "a",
    {
      ...B,
      href: n,
      target: l,
      rel: o || (l === "_blank" ? "noopener noreferrer" : void 0),
      children: r
    }
  ) : /* @__PURE__ */ e.jsx(t, { ...B, children: r });
}, nt = ({
  src: t,
  alt: r = "Image",
  width: s = "100%",
  height: n = "100%",
  borderRadius: l = "8px",
  borderColor: o = "transparent",
  borderStyle: a = "solid",
  borderWidth: c = "0px",
  shadow: p = !1,
  boxShadow: f,
  opacity: g = 1,
  className: d = "",
  objectFit: u = "cover",
  overlayText: m,
  overlayColor: x = "rgba(0, 0, 0, 0.5)",
  svgIcon: h,
  responsive: y = !1,
  padding: b,
  margin: T,
  lazyLoad: S = !1,
  hoverOpacity: j,
  hoverShadow: C = !1,
  hoverScale: v,
  hoverRotate: z,
  transitionDuration: L = "0.3s",
  onClick: O
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: `relative ${d} ${y ? "w-full" : ""}`,
    style: {
      width: s,
      height: n,
      padding: b,
      margin: T,
      cursor: O ? "pointer" : "default"
    },
    onClick: O,
    children: [
      h ? /* @__PURE__ */ e.jsx("div", { className: "flex justify-center items-center w-full h-full", children: h }) : /* @__PURE__ */ e.jsx(
        "img",
        {
          src: t,
          alt: r,
          loading: S ? "lazy" : "eager",
          style: {
            width: y ? "100%" : s,
            height: y ? "100%" : n,
            borderRadius: l,
            border: `${c} ${a} ${o}`,
            objectFit: u,
            opacity: g,
            boxShadow: p ? f || "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
            transition: `all ${L} ease-in-out`
          },
          className: "w-full h-full",
          onMouseEnter: ($) => {
            $.currentTarget.style.opacity = j !== void 0 ? j.toString() : g.toString(), $.currentTarget.style.boxShadow = C ? "0 8px 16px rgba(0, 0, 0, 0.3)" : f || "none", $.currentTarget.style.transform = `scale(${v || 1}) rotate(${z || 0}deg)`;
          },
          onMouseLeave: ($) => {
            $.currentTarget.style.opacity = g.toString(), $.currentTarget.style.boxShadow = p ? f || "0 4px 8px rgba(0, 0, 0, 0.2)" : "none", $.currentTarget.style.transform = "scale(1) rotate(0deg)";
          }
        }
      ),
      m && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute inset-0 flex justify-center items-center text-white text-lg font-bold",
          style: { backgroundColor: x },
          children: m
        }
      )
    ]
  }
), ot = ({
  children: t,
  type: r = "button",
  onClick: s,
  iconBefore: n,
  iconAfter: l,
  className: o = "",
  style: a,
  // ✅ NEW
  fullWidth: c = !1,
  disabled: p = !1,
  loading: f = !1,
  loadingText: g = "Loading...",
  paddingHorizontal: d = 10,
  paddingVertical: u = 8,
  fontSize: m = "1rem",
  fontWeight: x = 400,
  borderRadius: h = 12,
  backgroundColor: y = "rgba(0, 255, 0, 0.15)",
  textColor: b = "green",
  borderColor: T = "transparent",
  hoverBgColor: S = "#2563EB",
  hoverTextColor: j = "#2563EB",
  hoverBorderColor: C,
  boxShadow: v = "0 1px 2px rgba(0, 0, 0, 0.05)"
}) => {
  const [z, L] = J.useState(!1), O = z && !p && j || b, $ = z && !p && C || T, _ = z && !p ? S : y, W = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${u}px ${d}px`,
    fontSize: m,
    fontWeight: x,
    borderRadius: `${h}px`,
    width: c ? "100%" : "auto",
    color: O,
    border: `1px solid ${$}`,
    backgroundColor: _,
    boxShadow: v,
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
      className: o,
      style: W,
      onClick: !p && !f ? s : void 0,
      disabled: p,
      onMouseEnter: () => L(!0),
      onMouseLeave: () => L(!1),
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
          n && /* @__PURE__ */ e.jsx("span", { children: n }),
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
const Ce = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Se = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, s, n) => n ? n.toUpperCase() : s.toLowerCase()
), ce = (t) => {
  const r = Se(t);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, de = (...t) => t.filter((r, s, n) => !!r && r.trim() !== "" && n.indexOf(r) === s).join(" ").trim(), ze = (t) => {
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
    absoluteStrokeWidth: n,
    className: l = "",
    children: o,
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
      strokeWidth: n ? Number(s) * 24 / Number(r) : s,
      className: de("lucide", l),
      ...!o && !ze(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...a.map(([f, g]) => se(f, g)),
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
const Y = (t, r) => {
  const s = ne(
    ({ className: n, ...l }, o) => se(Me, {
      ref: o,
      iconNode: r,
      className: de(
        `lucide-${Ce(ce(t))}`,
        `lucide-${t}`,
        n
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
], _e = Y("circle-alert", Re);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Le = Y("circle-check-big", Ae);
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
], Ie = Y("eye-off", Pe);
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
], Fe = Y("eye", Oe);
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
], Be = Y("info", We);
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
], ue = Y("maximize", Ve);
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
], xe = Y("minimize", De);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], pe = Y("pause", He);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], fe = Y("play", Ye);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], me = Y("rotate-ccw", Ue);
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
], he = Y("skip-back", qe);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = [
  ["path", { d: "M21 4v16", key: "7j8fe9" }],
  [
    "path",
    {
      d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "zs4d6"
    }
  ]
], ge = Y("skip-forward", Ze);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ge = Y("triangle-alert", Xe);
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
], be = Y("volume-2", Je);
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
], ye = Y("volume-x", Qe);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], je = Y("x", Ke), lt = ne(
  ({
    type: t = "text",
    placeholder: r = "",
    label: s,
    value: n,
    defaultValue: l,
    onChange: o,
    name: a = "",
    disabled: c = !1,
    readOnly: p = !1,
    required: f = !1,
    error: g,
    success: d = !1,
    autoFocus: u = !1,
    iconLeft: m,
    iconRight: x,
    borderColor: h = "#ccc",
    focusBorderColor: y = "#2563eb",
    hoverBorderColor: b = "#4b5563",
    backgroundColor: T = "#ffffff",
    textColor: S = "#111827",
    errorColor: j = "#dc2626",
    successColor: C = "#16a34a",
    labelColor: v = "#374151",
    size: z = "md",
    radius: L = "6px",
    fontSize: O = "14px",
    rows: $ = 4,
    cols: _,
    maxLength: W,
    resize: P = !0,
    showCharacterCount: D = !0,
    className: k,
    style: E
  }, I) => {
    const H = Z(null), [U, i] = N(l || ""), [w, F] = N(!1);
    ke(I, () => H.current);
    const V = (R) => {
      W && R.target.value.length > W || (i(R.target.value), o && o(a, R.target.value));
    }, B = () => {
      switch (z) {
        case "sm":
          return "6px 12px";
        case "lg":
          return "12px 20px";
        default:
          return "10px 16px";
      }
    }, M = () => {
      switch (z) {
        case "sm":
          return "13px";
        case "lg":
          return "16px";
        default:
          return O;
      }
    }, A = g ? j : d ? C : h, X = {
      width: "100%",
      padding: B(),
      paddingLeft: m ? "40px" : B().split(" ")[1],
      paddingRight: x || t === "password" ? "40px" : B().split(" ")[1],
      border: `1px solid ${A}`,
      borderRadius: L,
      backgroundColor: T,
      color: S,
      fontSize: M(),
      outline: "none",
      resize: t === "textarea" && !P ? "none" : void 0,
      ...E
    };
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: { width: "100%", fontFamily: "sans-serif" },
        className: k,
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
                color: v
              },
              children: [
                s,
                " ",
                f && /* @__PURE__ */ e.jsx("span", { style: { color: j }, children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { style: { position: "relative", width: "100%" }, children: [
            m && /* @__PURE__ */ e.jsx(
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
                children: m
              }
            ),
            t === "textarea" ? /* @__PURE__ */ e.jsx(
              "textarea",
              {
                ref: H,
                name: a,
                value: n ?? U,
                onChange: V,
                placeholder: r,
                rows: $,
                cols: _,
                maxLength: W,
                disabled: c,
                readOnly: p,
                autoFocus: u,
                style: X,
                onFocus: (R) => {
                  R.currentTarget.style.borderColor = y;
                },
                onBlur: (R) => {
                  R.currentTarget.style.borderColor = A;
                },
                onMouseEnter: (R) => {
                  R.currentTarget.style.borderColor = b;
                },
                onMouseLeave: (R) => {
                  R.currentTarget.style.borderColor = A;
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: H,
                id: a,
                name: a,
                type: t === "password" ? w ? "text" : "password" : t,
                value: n ?? U,
                onChange: V,
                placeholder: r,
                disabled: c,
                readOnly: p,
                autoFocus: u,
                style: X,
                onFocus: (R) => {
                  R.currentTarget.style.borderColor = y;
                },
                onBlur: (R) => {
                  R.currentTarget.style.borderColor = A;
                },
                onMouseEnter: (R) => {
                  R.currentTarget.style.borderColor = b;
                },
                onMouseLeave: (R) => {
                  R.currentTarget.style.borderColor = A;
                }
              }
            ),
            t === "password" && /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => F(!w),
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
                children: w ? /* @__PURE__ */ e.jsx(Ie, { size: 18 }) : /* @__PURE__ */ e.jsx(Fe, { size: 18 })
              }
            ),
            x && t !== "password" && /* @__PURE__ */ e.jsx(
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
                children: x
              }
            )
          ] }),
          t === "textarea" && D && W && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                textAlign: "right",
                fontSize: "12px",
                color: "#6b7280",
                marginTop: "4px"
              },
              children: [
                (n ?? U).length,
                "/",
                W
              ]
            }
          ),
          g && /* @__PURE__ */ e.jsx(
            "p",
            {
              style: {
                color: j,
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
  type: n = "unordered",
  bulletColor: l = "#2563eb",
  textColor: o = "#111827",
  backgroundColor: a = "#fff",
  borderColor: c = "#e5e7eb",
  fontSize: p = "15px",
  fontWeight: f = 500,
  borderRadius: g = "12px",
  padding: d = "16px",
  spacing: u = "12px",
  className: m,
  style: x
}) => {
  const h = n === "ordered", y = n === "inline", b = {
    backgroundColor: a,
    borderColor: c,
    color: o,
    borderWidth: c ? "1px" : "0px",
    borderStyle: "solid",
    borderRadius: g,
    padding: d,
    ...x
  }, T = y ? {
    display: "flex",
    gap: u,
    paddingLeft: 0,
    listStyleType: "none",
    margin: 0
  } : {
    listStyleType: h ? "decimal" : "none",
    paddingLeft: h ? "20px" : "0",
    margin: 0
  }, S = h ? "ol" : "ul";
  return /* @__PURE__ */ e.jsxs("div", { className: m, style: b, children: [
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
    /* @__PURE__ */ e.jsx(S, { style: T, children: s.map((j, C) => /* @__PURE__ */ e.jsx(
      we,
      {
        ...j,
        bulletColor: l,
        textColor: o,
        fontSize: p,
        fontWeight: f,
        spacing: u,
        isInline: y
      },
      C
    )) })
  ] });
}, we = ({
  text: t,
  icon: r,
  onClick: s,
  subItems: n,
  bulletColor: l,
  textColor: o,
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
    color: o,
    cursor: s ? "pointer" : "default"
  }, u = {
    width: "8px",
    height: "8px",
    backgroundColor: l,
    borderRadius: "50%",
    flexShrink: 0
  }, m = {
    listStyleType: "disc",
    paddingLeft: "20px",
    margin: 0
  };
  return /* @__PURE__ */ e.jsxs("li", { style: g, children: [
    /* @__PURE__ */ e.jsxs("div", { style: d, onClick: s, children: [
      r ? /* @__PURE__ */ e.jsx("span", { style: { fontSize: "16px", color: o }, children: r }) : !f && /* @__PURE__ */ e.jsx("span", { style: u }),
      /* @__PURE__ */ e.jsx("span", { children: t })
    ] }),
    n && n.length > 0 && /* @__PURE__ */ e.jsx("ul", { style: m, children: n.map((x, h) => /* @__PURE__ */ e.jsx(
      we,
      {
        ...x,
        bulletColor: l,
        textColor: o,
        fontSize: a,
        fontWeight: c,
        spacing: p,
        isInline: !1
      },
      h
    )) })
  ] });
}, oe = ({
  tabs: t,
  defaultActive: r = 0,
  tabPosition: s,
  activeTabClassName: n = "",
  inactiveTabClassName: l = "",
  tabContainerClassName: o = "",
  contentContainerClassName: a = "",
  className: c = "",
  activeTabStyle: p,
  inactiveTabStyle: f,
  tabContainerStyle: g,
  contentContainerStyle: d,
  style: u,
  tabsWidth: m = "240px",
  tabGap: x = 8,
  tabPadding: h = "12px 16px",
  tabBorderRadius: y = 12,
  primaryColor: b = "#2563eb",
  textColor: T = "#374151",
  backgroundColor: S = "#ffffff",
  hoverTextColor: j = "#1e40af",
  responsiveBreakpoint: C = 768,
  showDrawerLabel: v = "Select Tab"
}) => {
  const [z, L] = N(r), [O, $] = N(null), [_, W] = N(!1), [P, D] = N(!1);
  q(() => {
    const B = () => {
      W(window.innerWidth <= C);
    };
    return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
  }, [C]);
  const k = s === "left" || s === "right", I = {
    display: "flex",
    flexDirection: k ? _ ? "column" : s === "left" ? "row" : "row-reverse" : "column",
    width: "100%",
    height: "100%",
    backgroundColor: S,
    ...k && !_ ? {} : { flexWrap: "wrap" },
    ...u
  }, H = {
    width: k && !_ ? m : "100%",
    display: "flex",
    flexDirection: k && !_ ? "column" : "row",
    justifyContent: !k && s === "top" ? "center" : void 0,
    gap: x,
    padding: 8,
    boxSizing: "border-box",
    ...g
  }, U = {
    flexGrow: 1,
    padding: 24,
    background: "#f9fafb",
    boxSizing: "border-box",
    minWidth: 0,
    ...k && !_ ? { width: "calc(100% - " + m + ")" } : { width: "100%" },
    ...d
  }, i = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: h,
    borderRadius: y,
    border: "none",
    backgroundColor: "transparent",
    fontWeight: 500,
    transition: "all 0.2s ease",
    width: k && !_ ? "100%" : "auto",
    marginBottom: k && !_ ? x : 0,
    marginRight: !k || _ ? x : 0,
    justifyContent: "flex-start"
  }, w = {
    backgroundColor: b,
    color: "#fff",
    fontWeight: 700,
    boxShadow: `0 2px 10px ${b}55`,
    ...p
  }, F = {
    backgroundColor: "transparent",
    color: T,
    ...f
  }, V = {
    backgroundColor: `${b}22`,
    color: j
  };
  return /* @__PURE__ */ e.jsxs("div", { className: c, style: I, children: [
    /* @__PURE__ */ e.jsx("style", { children: `
        @media (max-width: ${C}px) {
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
    _ && k ? /* @__PURE__ */ e.jsxs("div", { style: { width: "100%", marginBottom: 12 }, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => D(!P),
          style: {
            ...i,
            ...w,
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
      P && /* @__PURE__ */ e.jsx("div", { className: "custom-tab-mobile-drawer", children: t.map((B, M) => {
        const A = M === z, X = O === M;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              L(M), D(!1);
            },
            onMouseEnter: () => $(M),
            onMouseLeave: () => $(null),
            className: A ? n : l,
            style: {
              ...i,
              ...A ? w : F,
              ...X && !A ? V : {}
            },
            children: [
              B.icon && /* @__PURE__ */ e.jsx("span", { children: B.icon }),
              /* @__PURE__ */ e.jsx("span", { children: B.label })
            ]
          },
          M
        );
      }) })
    ] }) : /* @__PURE__ */ e.jsx(
      "nav",
      {
        className: o,
        style: H,
        "aria-label": "Tabs Navigation",
        children: t.map((B, M) => {
          const A = M === z, X = O === M;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => L(M),
              onMouseEnter: () => $(M),
              onMouseLeave: () => $(null),
              className: A ? n : l,
              style: {
                ...i,
                ...A ? w : F,
                ...X && !A ? V : {}
              },
              children: [
                B.icon && /* @__PURE__ */ e.jsx("span", { children: B.icon }),
                /* @__PURE__ */ e.jsx("span", { children: B.label })
              ]
            },
            M
          );
        })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "section",
      {
        className: a,
        style: U,
        role: "tabpanel",
        children: t[z]?.content
      }
    )
  ] });
}, it = (t) => /* @__PURE__ */ e.jsx(oe, { ...t, tabPosition: "left" }), ct = (t) => /* @__PURE__ */ e.jsx(oe, { ...t, tabPosition: "top" }), dt = (t) => /* @__PURE__ */ e.jsx(oe, { ...t, tabPosition: "right" }), ut = ({
  src: t,
  poster: r,
  autoPlay: s = !1,
  loop: n = !1,
  controls: l = !1,
  width: o = "100%",
  height: a = "150px",
  borderRadius: c = "12px",
  backgroundColor: p = "#1e1e1e",
  primaryColor: f = "#ff4081",
  padding: g = "16px",
  className: d
}) => {
  const u = Z(null), m = Z(null), [x, h] = N(s), [y, b] = N(0), [T, S] = N(0), [j, C] = N(0.5), [v, z] = N(!1), [L, O] = N(n);
  q(() => {
    u.current && (u.current.volume = j, u.current.loop = L);
  }, [j, L]);
  const $ = () => {
    u.current && (x ? u.current.pause() : u.current.play(), h(!x));
  }, _ = () => {
    u.current && (b(u.current.currentTime), S(u.current.duration));
  }, W = (E) => {
    if (!u.current || !E.currentTarget) return;
    const I = E.currentTarget.getBoundingClientRect(), U = (E.clientX - I.left) / I.width * T;
    u.current.currentTime = U, b(U);
  }, P = (E) => {
    u.current && (u.current.currentTime += E);
  }, D = () => {
    m.current && (v ? document.exitFullscreen?.() : m.current.requestFullscreen?.(), z(!v));
  }, k = (E) => {
    const I = Math.floor(E / 60), H = Math.floor(E % 60);
    return `${I}:${H < 10 ? "0" : ""}${H}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: m,
      className: d,
      style: {
        position: "relative",
        width: o,
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
            ref: u,
            src: t,
            poster: r,
            autoPlay: s,
            loop: n,
            controls: l,
            onTimeUpdate: _,
            onLoadedMetadata: _,
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => P(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: $,
                  style: {
                    background: f,
                    borderRadius: "9999px",
                    padding: "10px",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  },
                  "aria-label": x ? "Pause" : "Play",
                  children: x ? /* @__PURE__ */ e.jsx(pe, { size: 20 }) : /* @__PURE__ */ e.jsx(fe, { size: 20 })
                }
              ),
              /* @__PURE__ */ e.jsx("button", { onClick: () => P(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: k(y) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  " ",
                  "/ ",
                  k(T)
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  onClick: W,
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
                        width: `${y / T * 100 || 0}%`,
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
                    onClick: () => O(!L),
                    "aria-label": "Toggle Loop",
                    children: /* @__PURE__ */ e.jsx(me, { size: 18, color: L ? f : void 0 })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: () => C(j > 0 ? 0 : 0.5),
                    "aria-label": "Toggle Mute",
                    children: j > 0 ? /* @__PURE__ */ e.jsx(be, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
                  }
                ),
                /* @__PURE__ */ e.jsx("button", { onClick: D, "aria-label": "Toggle Fullscreen", children: v ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(ue, { size: 18 }) })
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
  loop: n = !1,
  backgroundColor: l = "#000000",
  primaryColor: o = "#10b981",
  secondaryColor: a = "#ffffff",
  borderRadius: c = "12px",
  padding: p = "16px",
  width: f = "100%",
  className: g
}) => {
  const d = Z(null), u = Z(null), [m, x] = N(s), [h, y] = N(0), [b, T] = N(0), [S, j] = N(0.5), [C, v] = N(!1), [z, L] = N(n);
  q(() => {
    d.current && (d.current.volume = S);
  }, [S]), q(() => {
    d.current && (d.current.loop = z);
  }, [z]);
  const O = () => {
    d.current && (m ? d.current.pause() : d.current.play(), x(!m));
  }, $ = () => {
    d.current && (y(d.current.currentTime), T(d.current.duration));
  }, _ = (k) => {
    if (!d.current || !k.currentTarget) return;
    const E = k.currentTarget.getBoundingClientRect(), H = (k.clientX - E.left) / E.width * b;
    d.current.currentTime = H, y(H);
  }, W = (k) => {
    d.current && (d.current.currentTime += k);
  }, P = () => {
    u.current && (C ? document.exitFullscreen?.() : u.current.requestFullscreen?.(), v(!C));
  }, D = (k) => {
    const E = Math.floor(k / 60), I = Math.floor(k % 60);
    return `${E}:${I < 10 ? "0" : ""}${I}`;
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: u,
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
            loop: n,
            onTimeUpdate: $,
            onLoadedMetadata: $
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
              /* @__PURE__ */ e.jsx("button", { onClick: () => W(-10), "aria-label": "Skip Back 10s", children: /* @__PURE__ */ e.jsx(he, { size: 20 }) }),
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
                  "aria-label": m ? "Pause" : "Play",
                  children: m ? /* @__PURE__ */ e.jsx(pe, { size: 20 }) : /* @__PURE__ */ e.jsx(fe, { size: 20 })
                }
              ),
              /* @__PURE__ */ e.jsx("button", { onClick: () => W(10), "aria-label": "Skip Forward 10s", children: /* @__PURE__ */ e.jsx(ge, { size: 20 }) })
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
                /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", marginRight: "4px" }, children: D(h) }),
                /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "14px", color: "#aaa" }, children: [
                  "/ ",
                  D(b)
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
                        width: `${h / b * 100 || 0}%`,
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
                        onClick: () => L(!z),
                        "aria-label": "Toggle Loop",
                        children: /* @__PURE__ */ e.jsx(me, { size: 18, color: z ? o : void 0 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => j(S > 0 ? 0 : 0.5),
                        "aria-label": "Toggle Mute",
                        children: S > 0 ? /* @__PURE__ */ e.jsx(be, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("button", { onClick: P, "aria-label": "Toggle Fullscreen", children: C ? /* @__PURE__ */ e.jsx(xe, { size: 18 }) : /* @__PURE__ */ e.jsx(ue, { size: 18 }) })
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
  alignItems: n = { sm: "stretch", md: "center", lg: "center" },
  gridTemplateColumns: l = { sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
  gridTemplateRows: o = { sm: "auto", md: "auto", lg: "auto" },
  gap: a = { sm: "10px", md: "20px", lg: "30px" },
  rowGap: c = { sm: "10px", md: "15px", lg: "20px" },
  columnGap: p = { sm: "10px", md: "15px", lg: "20px" },
  width: f = { sm: "100%", md: "90%", lg: "80%" },
  maxWidth: g = { sm: "100%", md: "800px", lg: "1200px" },
  height: d = { sm: "auto", md: "auto", lg: "auto" },
  padding: u = { sm: "10px", md: "20px", lg: "40px" },
  margin: m = { sm: "0 auto", md: "0 auto", lg: "0 auto" },
  textAlign: x = { sm: "left", md: "center", lg: "center" },
  backgroundColor: h = "#ffffff",
  border: y = { sm: "none", md: "1px solid #ddd", lg: "2px solid #ccc" },
  borderRadius: b = { sm: "0px", md: "8px", lg: "12px" },
  boxShadow: T = { sm: "none", md: "0px 4px 6px rgba(0,0,0,0.1)", lg: "0px 6px 10px rgba(0,0,0,0.15)" },
  overflow: S = { sm: "visible", md: "hidden", lg: "auto" },
  children: j,
  className: C = ""
}) => {
  const [v, z] = N("lg");
  q(() => {
    const O = () => {
      const $ = window.innerWidth;
      $ <= 767 ? z("sm") : $ >= 768 && $ <= 1023 ? z("md") : z("lg");
    };
    return O(), window.addEventListener("resize", O), () => window.removeEventListener("resize", O);
  }, []);
  const L = ee(
    () => ({
      display: t[v],
      flexDirection: r[v],
      justifyContent: s[v],
      alignItems: n[v],
      gridTemplateColumns: l[v],
      gridTemplateRows: o[v],
      gap: a[v],
      rowGap: c[v],
      columnGap: p[v],
      width: f[v],
      maxWidth: g[v],
      height: d[v],
      padding: u[v],
      margin: m[v],
      textAlign: x[v],
      backgroundColor: h,
      border: y[v],
      borderRadius: b[v],
      boxShadow: T[v],
      overflow: S[v],
      boxSizing: "border-box"
    }),
    [v, t, r, s, n, l, o, a, c, p, f, g, d, u, m, x, h, y, b, T, S]
  );
  return /* @__PURE__ */ e.jsx("div", { className: C, style: L, children: j });
}, ft = ({
  items: t,
  allowMultiple: r = !1,
  defaultOpenIndex: s = [],
  borderColor: n = "#d1d5db",
  backgroundColor: l = "#ffffff",
  textColor: o = "#111827",
  hoverBgColor: a = "#f3f4f6",
  hoverTextColor: c = "#111827",
  paddingVertical: p = "16px",
  paddingHorizontal: f = "16px",
  margin: g = "12px 0",
  iconOpen: d = "−",
  iconClose: u = "+",
  transitionDuration: m = "300ms",
  borderRadius: x = "8px",
  shadow: h = "0 2px 8px rgba(0, 0, 0, 0.05)",
  contentPadding: y = "16px",
  fontSize: b = "16px",
  fontWeight: T = "600",
  iconSize: S = "18px",
  contentFontSize: j = "14px",
  contentFontWeight: C = "400",
  contentBackgroundColor: v = "#ffffff",
  contentTextColor: z = "#111827",
  className: L,
  style: O
}) => {
  const [$, _] = N(s), W = Z([]), P = Z([]);
  q(() => {
    W.current.forEach((k, E) => {
      k && (k.style.maxHeight = $.includes(E) ? `${k.scrollHeight}px` : "0px");
    });
  }, [$]);
  const D = (k) => {
    _(
      (E) => r ? E.includes(k) ? E.filter((I) => I !== k) : [...E, k] : E.includes(k) ? [] : [k]
    );
  };
  return /* @__PURE__ */ e.jsx("div", { className: L, style: { width: "100%", ...O }, children: t.map((k, E) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        border: `1px solid ${n}`,
        borderRadius: x,
        margin: g,
        boxShadow: h,
        overflow: "hidden",
        transition: `all ${m} ease`
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: (I) => {
              P.current[E] = I;
            },
            onClick: () => D(E),
            style: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: l,
              color: o,
              padding: `${p} ${f}`,
              fontWeight: T,
              fontSize: b,
              cursor: "pointer",
              outline: "none",
              border: "none",
              transition: `all ${m}`
            },
            onMouseEnter: (I) => {
              I.currentTarget.style.backgroundColor = a, I.currentTarget.style.color = c;
            },
            onMouseLeave: (I) => {
              I.currentTarget.style.backgroundColor = l, I.currentTarget.style.color = o;
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: k.title }),
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: S }, children: $.includes(E) ? d : u })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: (I) => {
              W.current[E] = I;
            },
            style: {
              overflow: "hidden",
              maxHeight: $.includes(E) ? `${W.current[E]?.scrollHeight}px` : "0px",
              transition: `max-height ${m} ease-in-out`
            },
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                style: {
                  borderTop: `1px solid ${n}`,
                  backgroundColor: v,
                  color: z,
                  padding: y,
                  fontSize: j,
                  fontWeight: C
                },
                children: k.content
              }
            )
          }
        )
      ]
    },
    E
  )) });
}, mt = ({
  type: t,
  name: r,
  options: s,
  selectedValues: n,
  onChange: l,
  disabled: o = !1,
  readOnly: a = !1,
  required: c = !1,
  error: p,
  className: f = "",
  customIcon: g
}) => {
  const d = t === "checkbox", u = (m) => {
    if (l)
      if (d) {
        const x = Array.isArray(n) ? n.includes(m) ? n.filter((h) => h !== m) : [...n, m] : [m];
        l(x);
      } else
        l(m);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${f}`, children: [
    s.map((m) => {
      const x = d ? Array.isArray(n) && n.includes(m.value) : n === m.value;
      return /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: `flex items-center space-x-2 cursor-pointer p-2 ${o ? "opacity-50 cursor-not-allowed" : ""}`,
          children: [
            g ? g(x) : /* @__PURE__ */ e.jsx(
              "span",
              {
                className: `flex justify-center items-center w-5 h-5 border ${x ? "bg-blue-500 border-blue-500" : "border-gray-400"} rounded-${d ? "md" : "full"}`,
                children: x && /* @__PURE__ */ e.jsx("span", { className: "w-3 h-3 bg-white rounded-full" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: t,
                name: r,
                value: m.value,
                checked: x,
                disabled: o || a,
                required: c,
                onChange: () => u(m.value),
                className: "hidden"
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-gray-700", children: m.label })
          ]
        },
        m.value
      );
    }),
    p && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-red-500 mt-1", children: p })
  ] });
}, ht = ({
  label: t = "Open Drawer",
  icon: r,
  iconPosition: s = "left",
  onClick: n,
  style: l = {}
}) => /* @__PURE__ */ e.jsxs(
  "button",
  {
    onClick: n,
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
  width: n = "300px",
  height: l = "300px",
  backgroundColor: o = "#fff",
  transitionDuration: a = 300,
  style: c = {},
  children: p,
  showCloseButton: f = !0,
  closeButtonStyle: g = {}
}) => {
  const [d, u] = N(t);
  q(() => {
    t ? u(!0) : setTimeout(() => u(!1), a);
  }, [t, a]);
  const m = ee(() => {
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
  }, [t, s]), x = {
    position: "fixed",
    zIndex: 1e3,
    backgroundColor: o,
    transition: `transform ${a}ms ease, opacity ${a}ms ease`,
    transform: m,
    opacity: t ? 1 : 0,
    ...c,
    ...s === "left" || s === "right" ? { top: 0, [s]: 0, width: n, height: "100%" } : { left: 0, [s]: 0, height: l, width: "100%" }
  }, h = {
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
  }, y = {
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
          ...x,
          display: "block",
          visibility: d ? "visible" : "hidden",
          pointerEvents: t ? "auto" : "none"
        },
        children: [
          f && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: r,
              style: { ...y, ...g },
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
  onChange: n,
  placeholder: l = "Select an option",
  disabled: o = !1,
  borderColor: a = "border border-gray-300",
  backgroundColor: c = "bg-white",
  textColor: p = "text-gray-800",
  hoverColor: f = "hover:bg-gray-100",
  padding: g = "p-3",
  margin: d = "mb-4",
  dropdownWidth: u = "w-full",
  dropdownHeight: m = "max-h-60",
  borderRadius: x = "rounded-lg",
  shadow: h = "shadow-md",
  className: y = "",
  iconPrefix: b,
  iconSuffix: T,
  optionPadding: S = "px-4 py-2",
  optionGap: j = "gap-2",
  openAnimation: C = "animate-fadeIn",
  closeAnimation: v = "animate-fadeOut"
}) => {
  const [z, L] = N(s), [O, $] = N(!1), _ = Z(null);
  q(() => {
    const P = (D) => {
      _.current && !_.current.contains(D.target) && $(!1);
    };
    return document.addEventListener("mousedown", P), () => document.removeEventListener("mousedown", P);
  }, []);
  const W = (P) => {
    L(P), $(!1), n && n(P);
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: _, className: `relative ${u} ${d} ${y}`, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => $(!O),
        disabled: o,
        className: `flex items-center justify-between ${g} ${a} ${c} ${p} ${x} ${h} focus:outline-none focus:ring-2 focus:ring-blue-500 ${o ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: `flex items-center ${j}`, children: [
            b && /* @__PURE__ */ e.jsx("span", { className: "text-gray-500", children: b }),
            /* @__PURE__ */ e.jsx("span", { children: r ?? z ? t.find((P) => P.value === (r ?? z))?.label : l })
          ] }),
          T || /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-gray-500", children: "▼" })
        ]
      }
    ),
    O && /* @__PURE__ */ e.jsx(
      "ul",
      {
        className: `absolute z-10 ${u} ${c} ${a} ${x} ${h} mt-1 overflow-auto ${m} ${O ? C : v}`,
        children: t.map((P) => /* @__PURE__ */ e.jsxs(
          "li",
          {
            onClick: () => W(P.value),
            className: `flex items-center ${S} cursor-pointer ${f}`,
            children: [
              P.icon && /* @__PURE__ */ e.jsx("span", { className: "mr-2", children: P.icon }),
              P.label
            ]
          },
          P.value
        ))
      }
    )
  ] });
}, yt = ({
  columns: t,
  data: r,
  className: s = "",
  pagination: n = !0,
  rowsPerPage: l = 5,
  colors: o = {
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
  const [a, c] = N(null), [p, f] = N("asc"), [g, d] = N(1), u = (h) => {
    a === h ? f(p === "asc" ? "desc" : "asc") : (c(h), f("asc"));
  }, m = [...r].sort((h, y) => a ? p === "asc" ? h[a] > y[a] ? 1 : -1 : h[a] < y[a] ? 1 : -1 : 0), x = n ? m.slice(
    (g - 1) * l,
    g * l
  ) : m;
  return /* @__PURE__ */ e.jsxs("div", { className: `overflow-x-auto w-full ${s}`, children: [
    /* @__PURE__ */ e.jsxs("table", { className: `w-full border-collapse border ${o.borderColor}`, children: [
      /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { className: `${o.headerBg} ${o.headerText} text-left`, children: t.map(({ key: h, label: y, sortable: b }) => /* @__PURE__ */ e.jsx(
        "th",
        {
          onClick: () => b && u(h),
          className: `p-3 border ${o.borderColor} ${b ? "cursor-pointer hover:opacity-80" : ""}`,
          children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            y,
            " ",
            b && (a === h ? p === "asc" ? /* @__PURE__ */ e.jsx(
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
        h
      )) }) }),
      /* @__PURE__ */ e.jsx("tbody", { children: x.map((h, y) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: `${o.rowBg} ${o.rowText} hover:${o.hoverBg}`,
          children: t.map(({ key: b }) => /* @__PURE__ */ e.jsx("td", { className: `p-3 border ${o.borderColor}`, children: h[b] }, b))
        },
        y
      )) })
    ] }),
    n && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mt-3 p-2", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: `px-3 py-1 ${o.paginationBg} ${o.paginationText} rounded-md disabled:opacity-50`,
          disabled: g === 1,
          onClick: () => d((h) => Math.max(h - 1, 1)),
          children: "Prev"
        }
      ),
      /* @__PURE__ */ e.jsxs("span", { className: `${o.paginationText}`, children: [
        "Page ",
        g
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: `px-3 py-1 ${o.paginationBg} ${o.paginationText} rounded-md disabled:opacity-50`,
          disabled: g * l >= r.length,
          onClick: () => d((h) => h + 1),
          children: "Next"
        }
      )
    ] })
  ] });
}, jt = ({
  columns: t = { sm: 1, md: 2, lg: 3 },
  rows: r = { sm: "auto", md: "auto", lg: "auto" },
  gap: s = { sm: "10px", md: "20px", lg: "30px" },
  rowGap: n = { sm: "10px", md: "15px", lg: "20px" },
  columnGap: l = { sm: "10px", md: "15px", lg: "20px" },
  padding: o = { sm: "10px", md: "20px", lg: "40px" },
  alignItems: a = { sm: "stretch", md: "center", lg: "center" },
  justifyItems: c = { sm: "stretch", md: "center", lg: "center" },
  backgroundColor: p = "#f4f4f4",
  width: f = { sm: "100%", md: "100%", lg: "100%" },
  maxWidth: g = { sm: "100%", md: "100%", lg: "100%" },
  height: d = { sm: "auto", md: "auto", lg: "auto" },
  children: u,
  className: m = ""
}) => {
  const [x, h] = N("lg");
  q(() => {
    const b = () => {
      const T = window.innerWidth;
      T <= 767 ? h("sm") : T >= 768 && T <= 1023 ? h("md") : h("lg");
    };
    return b(), window.addEventListener("resize", b), () => window.removeEventListener("resize", b);
  }, []);
  const y = ee(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${t[x]}, 1fr)`,
      gridTemplateRows: r[x] !== "auto" ? `repeat(${r[x]}, 1fr)` : "auto",
      gap: s[x],
      rowGap: n[x],
      columnGap: l[x],
      padding: o[x],
      alignItems: a[x],
      justifyItems: c[x],
      backgroundColor: p,
      width: f[x],
      maxWidth: g[x],
      height: d[x]
    }),
    [x, t, r, s, n, l, o, a, c, f, g, d, p]
  );
  return /* @__PURE__ */ e.jsx("div", { className: m, style: y, children: u });
}, wt = ({
  direction: t = { sm: "column", md: "row", lg: "row" },
  align: r = { sm: "center", md: "center", lg: "center" },
  justify: s = { sm: "center", md: "space-between", lg: "space-around" },
  gap: n = { sm: "10px", md: "20px", lg: "30px" },
  padding: l = { sm: "10px", md: "20px", lg: "40px" },
  backgroundColor: o = "#f4f4f4",
  width: a = { sm: "100%", md: "100%", lg: "100%" },
  height: c = { sm: "auto", md: "auto", lg: "auto" },
  maxWidth: p = { sm: "100%", md: "100%", lg: "100%" },
  children: f,
  className: g = ""
}) => {
  const [d, u] = N("lg");
  q(() => {
    const x = () => {
      const h = window.innerWidth;
      h <= 767 ? u("sm") : h >= 768 && h <= 1023 ? u("md") : u("lg");
    };
    return x(), window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
  }, []);
  const m = ee(
    () => ({
      display: "flex",
      flexDirection: t[d],
      alignItems: r[d],
      justifyContent: s[d],
      gap: n[d],
      padding: l[d],
      backgroundColor: o,
      width: a[d],
      maxWidth: p[d],
      height: c[d]
    }),
    [d, t, r, s, n, l, a, p, c, o]
  );
  return /* @__PURE__ */ e.jsx("div", { className: g, style: m, children: f });
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
  dismissible: n = !0,
  onClose: l,
  duration: o,
  icon: a,
  actionButton: c,
  position: p = "top-right",
  className: f,
  style: g
}) => {
  const [d, u] = N(!0);
  if (q(() => {
    if (o) {
      const T = setTimeout(() => {
        u(!1), l?.();
      }, o);
      return () => clearTimeout(T);
    }
  }, [o, l]), !d) return null;
  const { bg: m, border: x, iconColor: h, Icon: y } = et[s], b = tt(p);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: f,
      style: {
        ...b,
        display: "flex",
        gap: "12px",
        padding: "16px",
        backgroundColor: m,
        borderLeft: `4px solid ${x}`,
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
        /* @__PURE__ */ e.jsx("div", { style: { color: h, marginTop: "3px" }, children: a || y }),
        /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
          t && /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", marginBottom: "4px" }, children: t }),
          r && /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", color: "#374151" }, children: r }),
          c && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "10px" }, children: c })
        ] }),
        n && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              u(!1), l?.();
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
  borderColor: n = "#2563eb",
  icon: l,
  iconPosition: o = "left",
  rounded: a = !1,
  borderRadius: c,
  borderWidth: p = "0",
  fontSize: f = "14px",
  fontWeight: g = 500,
  horizontalPadding: d = "10px",
  verticalPadding: u = "6px",
  margin: m = "0",
  shadow: x = "0 1px 4px rgba(0, 0, 0, 0.1)",
  notificationDot: h = !1,
  dotColor: y = "#ef4444",
  count: b,
  pulse: T = !1,
  style: S,
  onClick: j
}) => {
  const C = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: r,
    border: `${p} solid ${n}`,
    borderRadius: c || (a ? "9999px" : "6px"),
    padding: `${u} ${d}`,
    fontSize: f,
    fontWeight: g,
    margin: m,
    boxShadow: x,
    position: "relative",
    cursor: j ? "pointer" : "default",
    ...S
  }, v = {
    color: s,
    display: "inline"
  }, z = {
    display: "flex",
    alignItems: "center",
    color: s
  }, L = {
    ...z,
    marginRight: t ? "6px" : "0px"
  }, O = {
    ...z,
    marginLeft: t ? "6px" : "0px"
  }, $ = {
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
    backgroundColor: y,
    borderRadius: "50%",
    zIndex: 1,
    animation: T ? "pulseAnim 1.2s infinite" : void 0
  };
  return /* @__PURE__ */ e.jsxs("span", { style: C, onClick: j, children: [
    h && /* @__PURE__ */ e.jsx("span", { style: _ }),
    typeof b < "u" && /* @__PURE__ */ e.jsx("span", { style: $, children: b }),
    l && o === "left" && /* @__PURE__ */ e.jsx("span", { style: L, children: l }),
    t && /* @__PURE__ */ e.jsx("span", { style: v, children: t }),
    l && o === "right" && /* @__PURE__ */ e.jsx("span", { style: O, children: l }),
    /* @__PURE__ */ e.jsx("style", { children: `
          @keyframes pulseAnim {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
        ` })
  ] });
}, Nt = ({
  children: t,
  className: r = "",
  contentClassName: s = "",
  background: n = "#f0f0f0",
  textColor: l = "#333",
  borderRadius: o = "8px",
  padding: a = "16px",
  shadow: c = "0px 4px 6px rgba(0, 0, 0, 0.1)",
  imageSrc: p,
  imageAlt: f = "Card Image",
  imageWidth: g = "100%",
  imageHeight: d = "200px",
  svgIcon: u,
  useSvgInsteadOfImage: m = !1,
  title: x,
  subtitle: h,
  buttonText: y,
  buttonOnClick: b,
  buttonClassName: T = "",
  buttonIcon: S,
  margin: j
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: `rounded-lg ${r}`,
    style: {
      background: n,
      color: l,
      borderRadius: o,
      padding: a,
      margin: j,
      boxShadow: c
    },
    children: [
      m && u ? /* @__PURE__ */ e.jsx("div", { className: "flex justify-center items-center mb-4", children: u }) : p && /* @__PURE__ */ e.jsx(
        "img",
        {
          src: p,
          alt: f,
          style: { width: g, height: d, borderRadius: o },
          className: "object-cover mb-4"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: `${s} w-full`, children: [
        x && /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold mb-2", children: x }),
        h && /* @__PURE__ */ e.jsx("p", { className: "text-sm opacity-80 mb-4 w-full", children: h }),
        t && /* @__PURE__ */ e.jsx("div", { className: "mb-4", children: t }),
        y && b && /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: b,
            className: `flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all ${T}`,
            children: [
              S && /* @__PURE__ */ e.jsx("span", { children: S }),
              y
            ]
          }
        )
      ] })
    ]
  }
), Tt = ({
  src: t,
  title: r,
  description: s,
  className: n,
  ImageClassName: l,
  buttonText: o,
  buttonOnClick: a,
  buttonClassName: c = "",
  buttonIcon: p
}) => /* @__PURE__ */ e.jsxs("div", { className: `relative overflow-hidden rounded-lg shadow-lg ${n}`, children: [
  /* @__PURE__ */ e.jsx("img", { src: t, alt: r, className: `w-full h-64 object-cover ${l}` }),
  /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-0 bg-black bg-opacity-50 p-4 text-white w-full", children: [
    /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-bold", children: r }),
    s && /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: s }),
    o && a && /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: a,
        className: `flex mt-2 items-center gap-2 px-4 py-2 text-[12px] bg-black text-white rounded-md transition-all ${c}`,
        children: [
          p && /* @__PURE__ */ e.jsx("span", { children: p }),
          o
        ]
      }
    )
  ] })
] }), $t = ({ onClick: t, children: r }) => /* @__PURE__ */ e.jsx(
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
  className: n = ""
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
      className: `rounded-full object-cover ${l[s]} ${n}`
    }
  );
}, St = ({
  avatars: t,
  size: r = "medium",
  maxVisible: s = 3,
  className: n = ""
}) => {
  const l = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex -space-x-2", children: [
    t.slice(0, s).map((o, a) => /* @__PURE__ */ e.jsx(
      "img",
      {
        src: o,
        className: `rounded-full border-2 border-white object-cover ${l[r]} ${n}`
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
  size: n = "medium",
  className: l = ""
}) => {
  const [o, a] = N(!1), c = {
    small: { size: "w-8 h-8", statusSize: "w-2 h-2" },
    medium: { size: "w-12 h-12", statusSize: "w-3 h-3" },
    large: { size: "w-16 h-16", statusSize: "w-4 h-4" }
  }, p = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    away: "bg-yellow-500",
    busy: "bg-red-500"
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `relative inline-block ${c[n].size}`, children: [
    t && !o ? /* @__PURE__ */ e.jsx(
      "img",
      {
        src: t,
        alt: r,
        "aria-label": r,
        className: `rounded-full object-cover ${c[n].size} ${l}`,
        onError: () => a(!0)
      }
    ) : /* @__PURE__ */ e.jsx(
      "svg",
      {
        "aria-label": "Placeholder for user avatar",
        className: `rounded-full bg-gray-300 text-gray-500 dark:bg-gray-600 dark:text-gray-400 ${c[n].size}`,
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
        className: `z-[1000] w-full h-full absolute bottom-0 right-0 border-2 border-white rounded-full ${p[s]} ${c[n].statusSize}`
      }
    )
  ] });
}, Et = ({
  checked: t = !1,
  onChange: r,
  onLabel: s = "",
  offLabel: n = "",
  onColor: l = "bg-green-500",
  offColor: o = "bg-gray-400",
  size: a = "medium",
  className: c = "",
  onIcon: p,
  offIcon: f
}) => {
  const [g, d] = N(t), u = () => {
    const x = !g;
    d(x), r && r(x);
  }, m = {
    small: "w-10 h-5 text-xs",
    medium: "w-14 h-7 text-sm",
    large: "w-20 h-10 text-base"
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: u,
      className: `relative flex items-center ${m[a]} rounded-full transition-all ${g ? l : o} ${c}`,
      children: [
        /* @__PURE__ */ e.jsx(
          "span",
          {
            className: `absolute transition-all ${g ? "left-1 text-white" : "right-1 text-gray-700"}`,
            children: g ? p || s : f || n
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
  className: n = ""
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
        className: `${n} bg-white dark:bg-gray-900 dark:text-white w-full h-full p-6 relative shadow-lg`,
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
  overlayClass: n = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",
  modalClass: l = "bg-white rounded-lg p-6 w-11/12 max-w-md",
  closeButtonClass: o = "absolute top-2 right-2 text-gray-500 hover:text-gray-700"
}) => t ? /* @__PURE__ */ e.jsx("div", { className: n, children: /* @__PURE__ */ e.jsxs("div", { className: `relative ${l}`, children: [
  /* @__PURE__ */ e.jsx("button", { onClick: r, className: o, children: /* @__PURE__ */ e.jsx(
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
  showProgress: n = !0,
  showVolume: l = !0,
  autoplay: o = !1,
  loop: a = !1
}) => {
  const [c, p] = N(null), f = Z(null), [g, d] = N(!1), [u, m] = N(0), [x, h] = N(1), y = (j) => {
    c === j ? f.current?.paused ? (f.current?.play(), d(!0)) : (f.current?.pause(), d(!1)) : (p(j), setTimeout(() => {
      f.current && (f.current.play(), d(!0));
    }, 100));
  }, b = () => {
    f.current && m(f.current.currentTime / f.current.duration * 100);
  }, T = (j) => {
    f.current && (f.current.currentTime = parseFloat(j.target.value) / 100 * f.current.duration, m(parseFloat(j.target.value)));
  }, S = (j) => {
    f.current && (f.current.volume = parseFloat(j.target.value), h(parseFloat(j.target.value)));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full max-w-md p-4 rounded-lg shadow-md ${s.bg} ${r}`, children: [
    /* @__PURE__ */ e.jsx("h2", { className: `text-lg font-bold mb-3 ${s.text}`, children: "🎵 Audio Gallery" }),
    /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: t.map((j, C) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `flex items-center justify-between p-3 rounded-lg cursor-pointer transition ${s.secondary}`,
        onClick: () => y(C),
        children: [
          /* @__PURE__ */ e.jsx("span", { className: `text-sm font-medium ${s.text}`, children: j.title }),
          /* @__PURE__ */ e.jsx("button", { className: `p-2 rounded-full ${s.primary}`, children: c === C && g ? /* @__PURE__ */ e.jsx(
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
      C
    )) }),
    c !== null && /* @__PURE__ */ e.jsxs("div", { className: `mt-4 p-3 rounded-lg ${s.secondary}`, children: [
      /* @__PURE__ */ e.jsx("p", { className: `text-sm font-semibold ${s.text}`, children: t[c].title }),
      n && /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "range",
          value: u,
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
            value: x,
            onChange: S,
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
          autoPlay: o,
          loop: a
        }
      )
    ] })
  ] });
}, It = ({
  images: t,
  columns: r = 3,
  gap: s = "10px",
  layout: n = "grid",
  lightbox: l = !0,
  className: o = ""
}) => {
  const [a, c] = N(null);
  return /* @__PURE__ */ e.jsxs("div", { className: `w-full ${o}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `grid ${n === "masonry" ? "grid-flow-dense" : ""}`,
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
  layout: n = "grid",
  lightbox: l = !0,
  autoPlay: o = !1,
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
        className: `grid ${n === "masonry" ? "grid-flow-dense" : ""}`,
        style: {
          gridTemplateColumns: `repeat(${r}, 1fr)`,
          gap: s
        },
        children: t.map((u, m) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "relative overflow-hidden rounded-lg cursor-pointer",
            onClick: () => l && d(u.src),
            children: /* @__PURE__ */ e.jsx(
              "video",
              {
                src: u.src,
                poster: u.poster,
                autoPlay: o,
                loop: a,
                muted: c,
                controls: p,
                className: "w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              }
            )
          },
          m
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
  borderRadius: n = "8px",
  shadow: l = !0,
  controlsColor: o = "#ffffff"
}) => {
  const a = Z(null), [c, p] = N(!1), [f, g] = N(0), [d, u] = N(1), [m, x] = N(!0), h = () => {
    a.current && (c ? a.current.pause() : a.current.play(), p(!c));
  }, y = () => {
    if (a.current) {
      const j = a.current.currentTime / a.current.duration * 100;
      g(j);
    }
  }, b = (j) => {
    if (a.current) {
      const C = parseFloat(j.target.value) / 100 * a.current.duration;
      a.current.currentTime = C, g(parseFloat(j.target.value));
    }
  }, T = (j) => {
    if (a.current) {
      const C = parseFloat(j.target.value);
      a.current.volume = C, u(C);
    }
  }, S = () => {
    a.current && document.pictureInPictureEnabled && a.current.requestPictureInPicture();
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `relative w-full max-w-2xl mx-auto ${l ? "shadow-lg" : ""}`,
      style: { borderRadius: n },
      onMouseEnter: () => x(!0),
      onMouseLeave: () => x(!0),
      children: [
        /* @__PURE__ */ e.jsx(
          "video",
          {
            ref: a,
            src: t,
            className: "w-full rounded-lg",
            onTimeUpdate: y,
            style: { width: r, height: s, borderRadius: n }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: h,
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
        m && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 p-3 bg-black bg-opacity-70 rounded-b-lg flex items-center justify-between transition-opacity duration-300",
            style: { color: o },
            children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: h,
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
                  onClick: S,
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
  const r = Z(null), s = () => {
    r.current && document.pictureInPictureEnabled && r.current.requestPictureInPicture();
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("video", { ref: r, src: t, controls: !0, className: "w-full" }),
    /* @__PURE__ */ e.jsx("button", { onClick: s, className: "mt-2 px-4 py-2 bg-blue-500 text-white", children: "Enable PiP" })
  ] });
}, Vt = ({ children: t, defaultActive: r = 0, className: s }) => {
  const [n, l] = N(r);
  return /* @__PURE__ */ e.jsx("div", { className: `w-full ${s}`, children: J.Children.map(
    t,
    (o) => J.isValidElement(o) ? J.cloneElement(o, { activeTab: n, setActiveTab: l }) : o
  ) });
}, Dt = ({ children: t, index: r, activeTab: s, setActiveTab: n, className: l }) => /* @__PURE__ */ e.jsx(
  "button",
  {
    className: `px-4 py-2 text-sm font-medium border-b-2 ${s === r ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500"} focus:outline-none ${l}`,
    onClick: () => n(r),
    children: t
  }
), Ht = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("div", { className: `flex border-b ${r}`, children: t }), Yt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("div", { className: `p-4 ${r}`, children: t }), Ut = ({ children: t, className: r, activeTab: s }) => /* @__PURE__ */ e.jsx("div", { className: r, children: J.Children.toArray(t)[s] }), qt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsx("table", { className: `w-full border-collapse border border-gray-300 ${r}`, children: t }) }), Zt = ({ label: t, onSort: r }) => {
  const [s, n] = N("asc"), l = () => {
    const o = s === "asc" ? "desc" : "asc";
    n(o), r(o);
  };
  return /* @__PURE__ */ e.jsxs("th", { className: "px-4 py-2 border cursor-pointer", onClick: l, children: [
    t,
    " ",
    s === "asc" ? "▲" : "▼"
  ] });
}, Xt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("tbody", { className: r, children: t }), Gt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("thead", { className: `bg-gray-200 ${r}`, children: t }), Jt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("th", { className: `px-4 py-2 border ${r}`, children: t }), Qt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("td", { className: `px-4 py-2 border ${r}`, children: t }), Kt = ({ children: t, className: r }) => /* @__PURE__ */ e.jsx("tr", { className: `border-b border-gray-300 ${r}`, children: t }), er = ({
  isOpen: t,
  onClose: r,
  children: s,
  className: n = ""
}) => {
  const l = Z(null);
  return q(() => {
    const o = (a) => {
      l.current && !l.current.contains(a.target) && !a.target.closest(".dropdown-toggle") && r();
    };
    return document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, [r]), t ? /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: l,
      className: `absolute z-40 right-0 mt-2  rounded-xl border border-gray-200 bg-white  shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark ${n}`,
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
  St as AvatarGroup,
  zt as AvatarWithStatus,
  kt as Badge,
  ot as Button,
  Nt as Card,
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
  Tt as ImageCard,
  It as ImageGallery,
  lt as Input,
  $t as InteractiveCard,
  it as LeftTabs,
  at as List,
  Rt as Modal,
  _t as ModalBody,
  Lt as ModalFooter,
  At as ModalHeader,
  Bt as PiPVideo,
  dt as RightTabs,
  Zt as SortableTableHeader,
  Dt as Tab,
  Ht as TabList,
  Yt as TabPanel,
  Ut as TabPanels,
  yt as Table,
  Xt as TableBody,
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
