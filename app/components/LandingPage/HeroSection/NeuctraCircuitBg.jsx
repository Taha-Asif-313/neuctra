import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * NeuctraCircuitBg
 * Full-screen animated circuit-board background.
 * - Pure SVG + framer-motion + Tailwind (no images)
 * - Line colour: #00d616
 * - Static dim traces + bright "electric" pulses travelling along each trace
 * - No blur, no heavy shadows
 *
 * Usage:
 *   <div className="relative min-h-screen">
 *     <NeuctraCircuitBg />
 *     <main className="relative z-10">...your content...</main>
 *   </div>
 */

const COLOR = "#00d616";
const W = 1536;
const H = 1024;
const PAD_R = 9;

/* Every trace is a flat list [x1,y1,x2,y2,...] on a 1536 x 1024 grid.
   First and last points become solder pads (unless they sit on the edge). */
const TRACES = [
  // ───────── top-left ─────────
  [63, 38, 25, 41, 0, 66],
  [139, 69, 82, 0],
  [265, 36, 208, 36, 177, 0],
  [318, 65, 298, 87, 184, 87, 184, 134, 228, 184, 306, 182],
  [218, 125, 319, 125],
  [338, 34, 399, 94, 399, 170, 432, 213],
  [39, 102, 110, 102, 144, 149],
  [0, 150, 79, 149],
  [0, 187, 24, 187],
  [102, 207, 55, 257, 0, 257],
  [166, 209, 165, 278, 213, 340],
  [226, 236, 290, 236, 327, 282],
  [270, 287, 260, 308, 260, 398],
  // ───────── top-center ─────────
  [528, 38, 629, 36, 708, 141],
  [478, 128, 478, 229],
  [530, 147, 528, 235, 492, 275, 425, 275, 362, 210],
  [576, 142, 577, 230, 681, 348],
  [392, 0, 455, 86, 583, 86, 648, 162],
  [728, 29, 818, 26, 876, 90, 876, 147, 729, 305],
  [767, 101, 766, 175, 730, 211, 683, 212, 684, 255],
  [802, 82, 802, 153],
  [957, 61, 914, 124],
  [1013, 46, 948, 125, 950, 180],
  [905, 180, 835, 255, 836, 310],
  [896, 260, 876, 285, 876, 335, 855, 368],
  [983, 25, 900, 25, 873, 0],
  // ───────── top-right ─────────
  [1269, 25, 1075, 25, 1006, 108, 1006, 190, 910, 300, 909, 385],
  [1339, 42, 1380, 0],
  [1413, 40, 1498, 40, 1536, 0],
  [1111, 70, 1193, 69],
  [1287, 91, 1503, 90],
  [1157, 134, 1085, 134, 1052, 175, 1050, 300, 1025, 305],
  [1099, 214, 1168, 214, 1210, 257, 1212, 330, 1168, 382],
  [1198, 184, 1241, 135, 1417, 135, 1459, 185, 1461, 246],
  [1369, 185, 1290, 191, 1250, 230, 1249, 302],
  [1411, 197, 1411, 287],
  [1304, 250, 1305, 333, 1260, 380],
  [1366, 287, 1365, 320, 1277, 430, 1176, 430],
  [1500, 152, 1502, 269, 1420, 355, 1409, 355],
  // ───────── center-right ─────────
  [1143, 263, 1142, 330, 1068, 411, 975, 411, 937, 448, 937, 567, 889, 615],
  [1180, 280, 1181, 320, 1115, 395, 1115, 478, 1039, 565],
  [975, 308, 1000, 346, 1053, 346, 1101, 291],
  [1057, 464, 987, 466, 988, 574, 942, 627],
  [1376, 390, 1311, 462],
  [1405, 464, 1356, 521, 1355, 602],
  [1501, 368, 1468, 415, 1467, 513],
  [1170, 493, 1272, 495, 1316, 537, 1315, 650],
  [1125, 546, 1246, 547, 1270, 571, 1270, 626, 1240, 657, 1143, 657, 1103, 700, 1104, 778],
  [1111, 609, 1225, 608],
  [1074, 620, 1010, 693, 904, 694],
  [1157, 709, 1197, 752, 1295, 753, 1363, 830, 1362, 908, 1420, 985],
  [1241, 706, 1364, 705],
  [1393, 601, 1423, 567, 1490, 567, 1536, 613],
  [1453, 614, 1453, 682, 1423, 713],
  [1497, 661, 1500, 718, 1450, 770, 1378, 771],
  [1472, 795, 1448, 795, 1423, 826],
  [1536, 770, 1476, 845, 1476, 880],
  [1423, 876, 1423, 944, 1472, 944, 1536, 895],
  // ───────── bottom-right ─────────
  [1318, 838, 1316, 950, 1278, 990, 1278, 1024],
  [1240, 853, 1205, 898, 1205, 960, 1175, 1024],
  [1052, 842, 1158, 841, 1195, 801, 1252, 801, 1284, 834, 1284, 928, 1248, 928],
  [1010, 876, 1125, 873, 1158, 911, 1159, 977],
  [1039, 908, 1100, 906],
  [1072, 956, 1072, 995, 1090, 1024],
  [1060, 743, 955, 855, 955, 935, 1030, 1024],
  [1362, 974, 1330, 1006, 1310, 1024],
  [932, 1009, 930, 1024],
  [979, 743, 930, 745, 849, 821],
  [954, 797, 876, 883],
  [891, 936, 891, 970, 845, 1024],
  // ───────── center ─────────
  [885, 450, 796, 552, 797, 635],
  [851, 566, 851, 670, 810, 717, 735, 717],
  [810, 452, 751, 520, 651, 518],
  [791, 304, 792, 395, 735, 463, 562, 462],
  [461, 462, 515, 462, 598, 569, 676, 568],
  [296, 431, 381, 432, 458, 518],
  [370, 321, 462, 321, 499, 360, 499, 405],
  [314, 368, 447, 368],
  [558, 298, 538, 330, 540, 387],
  [596, 330, 596, 374, 620, 406, 682, 407],
  [731, 364, 763, 369],
  // ───────── left ─────────
  [197, 522, 313, 522, 365, 577, 437, 575],
  [0, 420, 72, 420, 134, 485, 362, 487],
  [0, 303, 110, 303, 186, 388],
  [28, 354, 78, 354, 149, 431],
  [0, 485, 44, 482],
  [85, 535, 0, 620],
  [515, 562, 452, 640, 365, 640, 300, 572, 134, 572, 58, 650, 58, 722],
  [576, 598, 504, 672, 503, 762],
  [611, 646, 557, 710, 556, 818, 544, 830, 455, 830, 413, 868, 413, 944],
  [738, 615, 643, 724],
  // ───────── bottom-left ─────────
  [342, 701, 416, 700, 457, 745],
  [210, 621, 209, 702, 174, 752],
  [160, 661, 117, 662, 117, 770, 40, 855, 39, 912],
  [289, 653, 258, 683, 259, 760, 143, 893],
  [319, 757, 257, 828, 257, 857],
  [409, 772, 367, 820, 367, 918],
  [339, 822, 340, 898, 283, 958],
  [304, 860, 263, 908, 197, 908, 138, 970, 138, 1010],
  [178, 810, 135, 813, 89, 866],
  [101, 932, 73, 964, 0, 964],
  [30, 766, 0, 800],
  [217, 971, 270, 1024],
  [55, 1015, 0, 1018],
  [338, 988, 456, 990, 484, 960, 484, 897],
  [579, 870, 531, 936, 531, 994],
  [625, 803, 624, 895, 570, 960, 571, 994],
  [689, 774, 689, 862, 665, 888, 664, 942, 638, 975],
  [739, 783, 741, 889, 777, 930, 777, 990, 740, 1024],
  [787, 777, 789, 850, 820, 886, 822, 960],
];

/* Small deterministic RNG so SSR / hydration always match */
function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const onEdge = (x, y) => x <= 0 || y <= 0 || x >= W || y >= H;

function buildTraces() {
  const rand = mulberry32(20260415);
  return TRACES.map((flat, i) => {
    const pts = [];
    for (let k = 0; k < flat.length; k += 2) pts.push([flat[k], flat[k + 1]]);

    const d = "M" + pts.map(([x, y]) => `${x} ${y}`).join(" L");
    const start = pts[0];
    const end = pts[pts.length - 1];

    return {
      id: i,
      d,
      start: onEdge(start[0], start[1]) ? null : start,
      end: onEdge(end[0], end[1]) ? null : end,
      duration: 2.2 + rand() * 2.8, // 2.2s to 5s
      delay: rand() * 6, // staggered start
      repeatDelay: 0.6 + rand() * 3.4, // pause between pulses
      reverse: rand() > 0.5, // pulse direction
    };
  });
}

const PULSE = 0.16; // visible pulse length (fraction of the trace)

export default function NeuctraCircuitBg({ className = "" }) {
  const reduceMotion = useReducedMotion();
  const traces = useMemo(buildTraces, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden bg-black ${className}`}
    >
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {/* ───────── static circuit layer ───────── */}
        <g
          stroke={COLOR}
          strokeWidth={4.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.28}
        >
          {traces.map((t) => (
            <path key={`base-${t.id}`} d={t.d} />
          ))}
        </g>

        <g fill={COLOR} opacity={0.5}>
          {traces.map((t) => (
            <React.Fragment key={`pads-${t.id}`}>
              {t.start && <circle cx={t.start[0]} cy={t.start[1]} r={PAD_R} />}
              {t.end && <circle cx={t.end[0]} cy={t.end[1]} r={PAD_R} />}
            </React.Fragment>
          ))}
        </g>

        {/* ───────── animated electricity layer ───────── */}
        {!reduceMotion &&
          traces.map((t) => {
            const transition = {
              duration: t.duration,
              delay: t.delay,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: t.repeatDelay,
            };

            // pulse travelling along the trace (pathLength normalised to 1)
            const from = t.reverse ? -1 : PULSE;
            const to = t.reverse ? PULSE : -1;

            // pads light up when the pulse leaves / arrives
            const headPad = t.reverse ? t.end : t.start;
            const tailPad = t.reverse ? t.start : t.end;

            return (
              <g key={`fx-${t.id}`}>
                <motion.path
                  d={t.d}
                  pathLength={1}
                  stroke={COLOR}
                  strokeWidth={5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={`${PULSE} 1.5`}
                  initial={{ strokeDashoffset: from, opacity: 0 }}
                  animate={{
                    strokeDashoffset: [from, to],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    ...transition,
                    opacity: { ...transition, times: [0, 0.08, 0.92, 1] },
                  }}
                />

                {headPad && (
                  <motion.circle
                    cx={headPad[0]}
                    cy={headPad[1]}
                    r={PAD_R}
                    fill={COLOR}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0, 0] }}
                    transition={{ ...transition, times: [0, 0.05, 0.3, 1] }}
                  />
                )}

                {tailPad && (
                  <motion.circle
                    cx={tailPad[0]}
                    cy={tailPad[1]}
                    r={PAD_R}
                    fill={COLOR}
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                      opacity: [0, 0, 1, 0],
                      scale: [1, 1, 1.45, 1],
                    }}
                    transition={{ ...transition, times: [0, 0.82, 0.93, 1] }}
                  />
                )}
              </g>
            );
          })}
      </svg>
    </div>
  );
}