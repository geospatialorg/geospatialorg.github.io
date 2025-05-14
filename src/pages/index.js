import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section>
          <div className="container">
            <hr></hr>
            <p className={styles.despreGeospatial}>
              Alegerea unui spațiu de discuție poate constitui din start trasarea cadrului general al dialogului viitor. geo-spatial.org își propune realizarea unei baze
              de date și cunoștințe geospațiale, disponibile liber.{" "}
              <span className={styles.markerDespreGeospatial}>
                O comunitate nu se naște peste noapte, este firesc ca mai întâi să primești iar apoi să oferi la randul tău
              </span>
              . Noi consideram important și modul în care oferi. Soluțiile propuse se doresc a fi porți deschise către subiecte de interes comun și nu vin să dea
              verdicte. Pentru a evolua într-un dialog este esențial să asculți cu atenție părerea celuilalt, reușind apoi să oferi un răspuns argumentat. Dorim să
              promovăm un dialog senin, lipsit de încrâncenări sterile. Numai așa se poate ajunge la o creștere a calității materialelor aflate pe geo-spatial.org. Mai
              multe informații referitoare la proiectul geo-spatial.org puteți găsi în secțiunea <a href="despre">Despre</a>.
            </p>
            <hr></hr>
          </div>
        </section>
      </main>
    </Layout>
  );
}
