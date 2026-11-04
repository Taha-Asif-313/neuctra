import NeuctraCircuitBg from "./HeroSection/NeuctraCircuitBg";
import HeroContent from "./HeroSection/HeroContent";

export default function HeroLanding() {
  return (
    <div className="relative isolate overflow-hidden">
      <NeuctraCircuitBg className="absolute inset-0 z-0 opacity-70 [mask-image:radial-gradient(ellipse_90%_55%_at_50%_0%,#000_30%,transparent_100%)]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/75 via-background/75 to-transparent" />
      <div className="relative z-10">
        <HeroContent />
      </div>
    </div>
  );
}
