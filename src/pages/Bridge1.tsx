import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BridgeIntro from "@/components/bridge1/BridgeIntro";
import RailwayBridgeContent from "@/components/bridge1/RailwayBridgeContent";
import CommunalBridgeHero from "@/components/bridge1/CommunalBridgeHero";
import CommunalBridgeContent from "@/components/bridge1/CommunalBridgeContent";
import MedichkaBridgeHero from "@/components/bridge1/MedichkaBridgeHero";
import MedichkaBridgeContent from "@/components/bridge1/MedichkaBridgeContent";
import StoneBridgeHero from "@/components/bridge1/StoneBridgeHero";
import StoneBridgeContent from "@/components/bridge1/StoneBridgeContent";
import PharmacyBridgeHero from "@/components/bridge1/PharmacyBridgeHero";
import PharmacyBridgeContent from "@/components/bridge1/PharmacyBridgeContent";
import BridgesNav from "@/components/bridge1/BridgesNav";

export default function Bridge1() {
  const coverContainer = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <BridgesNav />
      <BridgeIntro coverContainer={coverContainer} container={container} />
      <RailwayBridgeContent />
      <CommunalBridgeHero />
      <CommunalBridgeContent />
      <MedichkaBridgeHero />
      <MedichkaBridgeContent />
      <StoneBridgeHero />
      <StoneBridgeContent />
      <PharmacyBridgeHero />
      <PharmacyBridgeContent />
      <Footer />
    </main>
  );
}