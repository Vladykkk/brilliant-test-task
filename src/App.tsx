import AIMissionSection from "@/sections/AIMissionSection.tsx/AIMissionSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import LeaderboardSection from "@/sections/LeaderboardSection/LeaderboardSection";

import styles from "./App.module.scss";
import CompaniesSection from "./sections/CompaniesSection/CompaniesSection";
import FooterSection from "./sections/FooterSection/FooterSection";
import JoinUsSection from "./sections/JoinUsSection/JoinUsSection";

function App() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeroSection />
        <AIMissionSection />
        <LeaderboardSection />
        <CompaniesSection />
        <JoinUsSection />
      </div>
      <FooterSection />
    </section>
  );
}

export default App;
