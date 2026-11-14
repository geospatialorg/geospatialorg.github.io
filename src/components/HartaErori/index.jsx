// Harta erorilor de validare pentru planul Papasoglu (1871), ca în articolul „Planul maiorului Papasoglu (1871)”.
// Componentă Docusaurus (React 18): se copiază directorul HartaErori/ în src/components/ și se folosește într-un .mdx:
//
//   import HartaErori from '@site/src/components/HartaErori';
//   <HartaErori />
//
// Fiecare reper e desenat în locul lui real (metri Stereo70 față de centrul planului); linia arată, mărită de 3 ori,
// încotro cade predicția cînd reperul e scos din model. Trecerea cu mouse-ul (sau atingerea) arată numele și eroarea.
import React, { useState } from 'react';
import REPERE from './repere.json';
import styles from './styles.module.css';

const W = 760, H = 680, K = 0.3, EX = 3;
const X = (E) => 60 + (E + 900) * K;
const Y = (N) => 110 + (950 - N) * K;
const mare = (r) => r.err >= 60;

export default function HartaErori({ titlu = 'Cele mai mari patru erori, de 67–75 m, sînt spre est și nord-vest' }) {
  const [activ, setActiv] = useState(null);
  const r0 = activ && REPERE.find((r) => r.k === activ);

  const evenimente = (r) => ({
    onMouseEnter: () => setActiv(r.k),
    onMouseLeave: () => setActiv(null),
    onClick: () => setActiv(activ === r.k ? null : r.k),
    onFocus: () => setActiv(r.k),
    onBlur: () => setActiv(null),
    tabIndex: 0,
    'aria-label': `${r.nume}: ${r.err} m`,
  });

  return (
    <figure className={styles.figura}>
      <div className={styles.cadru}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={titlu} className={styles.svg}>
          <text x="24" y="30" className={styles.titlu}>{titlu}</text>
          <text x="24" y="52" className={styles.nota}>
            {`Eroarea fiecăruia din cele ${REPERE.length} de repere cînd e scos din model`}
          </text>
          <text x="24" y="70" className={styles.nota}>
            Linia pornește din locul real și arată, mărită de 3 ori, încotro cade predicția
          </text>

          <g>
            {REPERE.map((r) => (
              <line key={r.k} x1={X(r.E)} y1={Y(r.N)} x2={X(r.E + EX * r.dE)} y2={Y(r.N + EX * r.dN)}
                className={mare(r) ? styles.vectorMare : styles.vector}
                opacity={activ && activ !== r.k ? 0.35 : 1} />
            ))}
          </g>

          <g>
            {REPERE.map((r) => {
              const cls = `${styles.reper} ${mare(r) ? styles.reperMare : ''} ${activ === r.k ? styles.reperActiv : ''}`;
              return r.tip === 'i'
                ? <circle key={r.k} cx={X(r.E)} cy={Y(r.N)} r="4.5" className={cls} {...evenimente(r)} />
                : <rect key={r.k} x={X(r.E) - 4} y={Y(r.N) - 4} width="8" height="8" className={cls} {...evenimente(r)} />;
            })}
          </g>

          <g>
            {REPERE.filter((r) => mare(r) && r.ly < -20).map((r) => (
              <line key={`l-${r.k}`} x1={X(r.E) + 2} y1={Y(r.N) - 6} x2={X(r.E) + r.lx - 2} y2={Y(r.N) + r.ly + 4}
                className={styles.ghidaj} />
            ))}
            {REPERE.filter(mare).map((r) => (
              <text key={`t-${r.k}`} x={X(r.E) + r.lx} y={Y(r.N) + r.ly} className={styles.eticheta}>
                {`${r.scurt} · ${r.err} m`}
              </text>
            ))}
          </g>

          <g>
            <line x1="60" x2={60 + 200 * K} y1="650" y2="650" className={styles.scara} />
            <line x1="60" x2="60" y1="645" y2="655" className={styles.scara} />
            <line x1={60 + 200 * K} x2={60 + 200 * K} y1="645" y2="655" className={styles.scara} />
            <text x={68 + 200 * K} y="654" className={styles.nota}>200 m</text>
          </g>

          <g>
            <path d="M716 150L724 170L716 165L708 170Z" className={styles.nord} />
            <text x="716" y="142" textAnchor="middle" className={styles.nordText}>N</text>
          </g>

          <g>
            <circle cx="600" cy="560" r="4.5" className={styles.reper} />
            <text x="612" y="564" className={styles.nota}>intersecție</text>
            <rect x="596" y="578" width="8" height="8" className={styles.reper} />
            <text x="612" y="586" className={styles.nota}>clădire</text>
            <circle cx="600" cy="604" r="4.5" className={`${styles.reper} ${styles.reperMare}`} />
            <text x="612" y="608" className={styles.nota}>eroare peste 60 m</text>
          </g>
        </svg>

        {r0 && (
          <div className={styles.eticheta_html} role="status"
            style={{ left: `${(X(r0.E) / W) * 100}%`, top: `${(Y(r0.N) / H) * 100}%` }}>
            <strong>{r0.nume}</strong>
            <span>{r0.tip === 'i' ? 'intersecție' : 'clădire'} · eroare {r0.err} m</span>
          </div>
        )}
      </div>
    </figure>
  );
}
