"use client";

import CircuitLine from "./CircuitLine";
import CircuitNode from "./CircuitNode";

export default function BackgroundCircuit() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <svg
        className="w-full h-full opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 700"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* LEFT → CENTER */}
        <CircuitLine delay={0} path="M 0 120 L 300 120 L 350 160 L 700 160" />
        <CircuitLine delay={0.6} path="M 0 260 L 250 260 L 300 220 L 650 220" />
        <CircuitLine delay={1.2} path="M 0 420 L 200 420 L 260 460 L 600 460" />
        <CircuitLine delay={1.8} path="M 0 580 L 280 580 L 320 540 L 700 540" />

        {/* RIGHT → CENTER */}
        <CircuitLine
          delay={0.3}
          path="M 1600 140 L 1300 140 L 1250 180 L 900 180"
        />
        <CircuitLine
          delay={0.9}
          path="M 1600 300 L 1350 300 L 1300 260 L 950 260"
        />
        <CircuitLine
          delay={1.5}
          path="M 1600 480 L 1400 480 L 1350 520 L 1000 520"
        />
        <CircuitLine
          delay={2.1}
          path="M 1600 620 L 1300 620 L 1250 580 L 900 580"
        />

        {/* CENTER CONNECTORS */}
        <CircuitLine delay={1} path="M 700 160 L 900 180" />
        <CircuitLine delay={1.4} path="M 650 220 L 950 260" />
        <CircuitLine delay={1.8} path="M 600 460 L 1000 520" />
        <CircuitLine delay={2.2} path="M 700 540 L 900 580" />

        {/* LEFT DIAGONALS */}
        <CircuitLine delay={0.5} path="M 200 0 L 350 150 L 500 300" />
        <CircuitLine delay={1.3} path="M 300 300 L 450 450 L 600 650" />

        {/* RIGHT DIAGONALS */}
        <CircuitLine delay={0.8} path="M 1400 0 L 1250 150 L 1100 300" />
        <CircuitLine delay={1.6} path="M 1300 300 L 1150 450 L 1000 650" />

        {/* Vertical Lines */}
        <CircuitLine delay={1.3} path="M 250 0 L 250 200 L 270 220 L 270 400" />
        <CircuitLine
          delay={0.8}
          path="M 550 100 L 550 300 L 570 320 L 570 500"
        />
        <CircuitLine
          delay={1.7}
          path="M 1100 50 L 1100 250 L 1120 270 L 1120 450"
        />
        <CircuitLine
          delay={0.2}
          path="M 1450 200 L 1450 400 L 1470 420 L 1470 600"
        />

        {/* Complex Paths */}
        <CircuitLine
          delay={1.4}
          path="M 0 200 L 150 200 L 170 220 L 300 220 L 320 200 L 500 200"
        />
        <CircuitLine
          delay={0.5}
          path="M 700 350 L 850 350 L 870 330 L 1000 330 L 1020 350 L 1200 350"
        />
        <CircuitLine
          delay={1.9}
          path="M 200 500 L 350 500 L 370 520 L 500 520 L 520 500 L 700 500"
        />

        {/* Nodes */}
        <CircuitNode x="90" y="220" delay={0} />
        <CircuitNode x="300" y="100" delay={0.3} />
        <CircuitNode x="560" y="120" delay={0.6} />
        <CircuitNode x="820" y="190" delay={0.9} />
        <CircuitNode x="1130" y="170" delay={1.2} />
        <CircuitNode x="210" y="250" delay={0.4} />
        <CircuitNode x="655" y="230" delay={0.7} />
        <CircuitNode x="890" y="240" delay={1.0} />
        <CircuitNode x="1270" y="320" delay={1.3} />
        <CircuitNode x="145" y="400" delay={0.5} />
        <CircuitNode x="530" y="420" delay={0.8} />
        <CircuitNode x="825" y="450" delay={1.1} />
        <CircuitNode x="1160" y="470" delay={1.4} />
        <CircuitNode x="370" y="550" delay={0.6} />
        <CircuitNode x="710" y="570" delay={0.9} />
        <CircuitNode x="1090" y="600" delay={1.2} />
        <CircuitNode x="1420" y="620" delay={1.5} />
      </svg>
    </div>
  );
}
