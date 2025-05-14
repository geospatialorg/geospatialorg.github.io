import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Cunoștințe",
    Svg: require("@site/static/img/cunostinte.svg").default,
    description: (
      <>
        <a href="blog/tags/articole">Articole</a> și <a href="blog/tags/tutoriale">tutoriale</a>, publicate cu generozitate de membrii comunității, ce explică concepte
        sau tehnici specifice lumii geospațiale.{" "}
      </>
    ),
  },
  {
    title: "Date",
    Svg: require("@site/static/img/date.svg").default,
    description: (
      <>
        Seturi de date atent "periate" și optimizate, publicate în formate standardizate, sub licențe deschise. Detalii în secțiunile Download și{" "}
        <a href="https://services.geo-spatial.org/geonetwork/">Catalog</a>.
      </>
    ),
  },
  {
    title: "Hărți interactive",
    Svg: require("@site/static/img/harti_interactive.svg").default,
    description: <>O modalitate simplă și intuitivă de a explora datele publicate de geo-spatial.org prin intermediul unor hărți și dashboard-uri interactive.</>,
  },
  {
    title: "Servicii",
    Svg: require("@site/static/img/servicii.svg").default,
    description: <>Servicii informatice găzduite de platforma geo-spatial.org ce facilitează accesul la date și informații din sfera geospațială. </>,
  },
  {
    title: "Evenimente",
    Svg: require("@site/static/img/evenimente.svg").default,
    description: <>Evenimente fizice sau hibride organizate periodic de comunitatea geo-spatial.org sau unele la care comunitatea contribuie prin membrii ei.</>,
  },
  {
    title: "Noutăți",
    Svg: require("@site/static/img/news.svg").default,
    description: <>Anunțuri despre inițiativele noi ale geo-spatial.org, precum și informații care contează din comunitatea geospațială internațională.</>,
  },
  {
    title: "Proiecte",
    Svg: require("@site/static/img/proiecte2.svg").default,
    description: <>Anunțuri despre inițiativele noi ale geo-spatial.org, precum și informații care contează din comunitatea geospațială internațională.</>,
  },
  {
    title: "Acces liber",
    Svg: require("@site/static/img/acces_deschis.svg").default,
    description: <>Anunțuri despre inițiativele noi ale geo-spatial.org, precum și informații care contează din comunitatea geospațială internațională.</>,
  },
  {
    title: "Situl vechi",
    Svg: require("@site/static/img/siteul-vechi.svg").default,
    description: (
      <>
        Prima versiunea a situl web geo-spatial.org, cea care ne-a slujit cu credință vreme de 18 ani, este încă{" "}
        <a href="https://www.geo-spatial.org/vechi">disponibilă online</a>.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
