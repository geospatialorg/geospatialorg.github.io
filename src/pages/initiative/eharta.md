---
title: eHarta - Hărți istorice georeferențiate
description: Proiect colaborativ de digitizare și georeferențiere a hărților istorice românești - premiat la Open Data Challenge 2011
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# eHarta - hărți istorice georeferențiate

:::tip 🏆 Proiect premiat
eHarta a fost premiat la **[Open Data Challenge 2011](https://web.archive.org/web/20120312095747/http://opendatachallenge.org/)** de către Comisia Europeană și  [Open Knowledge Foundation](https://blog.okfn.org/2011/04/05/announcing-the-open-data-challenge-a-pan-european-open-data-competition/), în cadrul Digital Agenda Assembly de la Bruxelles.
:::

## Despre proiect

**eHarta** este un proiect colaborativ geo-spatial.org de digitizare și georeferențiere a hărților istorice din arhivele românești. Proiectul oferă acces liber la patrimoniul cartografic național, permițând suprapunerea hărților istorice peste hărți moderne.

## Anunț inițial (30.09.2010)

> Facem astăzi primul pas public într-un proiect de amploare, proiect ce se va desfășura pe parcursul mai multor ani. Ca în toate demersurile inițiate pînă acum în acest spațiu, beneficiarii veți fi voi, membrii comunității geospațiale. De ceva vreme, o parte din noi, am alocat timp și resurse în activități de identificare și conservare digitală (scanare, fotografiere) a unor materiale cartografice cu valoare istorică (serii de hărți, atlase). Am făcut acest lucru din pasiune, convinși de importanța specială a acestor hărți vechi, care stau astăzi mărturie a felului în care un teritoriu a evoluat și și-a creat propria identitate. Dorim să publicăm liber aceste materiale, atît sub formă statică (fișiere georeferențiate) cît și prin intermediul unor servicii geospațiale standardizate (WMS, WMS-C). Volumul de muncă este însă imens. De aceea, pentru a scurta timpul în care această informația va ajunge la dispoziția publicului, vă invităm să vă alăturați nouă. Ajutorul comunității se poate concretiza în cîteva direcții: prelucrare (rotire, decupare, îmbunătățire contrast, etc.), documentare (scrierea de metadate), georeferențiere, vectorizare. Pentru a facilita aceste activități ne-am propus să dezvoltăm o serie de instrumente, bazate pe soluții software open source, care să ne permită sincronizarea eforturilor, utilizarea eficientă a timpului și, de ce nu, să asigure o transparență maximă proiectului.
> 
> Singura condiție pentru participarea în proiect este seriozitatea. În schimbul acesteia noi garantăm recunoașterea publică a fiecărei contribuții și faptul că materialele la care ați lucrat vor fi publicate liber pe geo-spatial.org.

Textul complet se găsește la [https://www.geo-spatial.org/vechi/articole/eHarta](https://www.geo-spatial.org/vechi/articole/eHarta).

## Ce oferă eHarta

- Hărți scanate de înaltă rezoluție - din arhivele românești și străine;
- Georeferențiere - permit suprapunerea pe hărți moderne; 
- Metadate - informații pentru fiecare foaie de hartă;
- Acces liber - descărcare gratuită;
- Servicii OGC - acces prin WMS/WMTS/COG.

## Colecții disponibile

- [Planurile Directoare de Tragere](https://www.geo-spatial.org/vechi/download/planurile-directoare-de-tragere).
- [Hărți sovietice 1:50.000](https://geo-spatial.org/vechi/download/hartile-sovietice-50k).
- [Hărți sovietice 1:100.000](https://geo-spatial.org/vechi/download/hartile-sovietice-1-100-000-reproiectate-in-stereo70).
- [Hărți austriece 1910](https://geo-spatial.org/vechi/download/harile-austriece-1910-reproiectate-in-stereo70).
- [Hărțile turistice ale T.C.R. - Avântul turismului montan în România](https://geo-spatial.org/vechi/download/hartile-turistice-ale-tcr).
- [Atlasul Căilor de Comunicații (1897)](https://geo-spatial.org/vechi/download/atlasul-cailor-de-comunicatii-1897).
- [Harta telegrafo-poștală (1865). Reorganizarea poștelor din Principatele Române.](https://geo-spatial.org/vechi/download/harta-telegrafo-postala-1865).
- [Karte des Grossfürstentums Siebenbürgen - Harta Marelui Principat al Transilvaniei](https://geo-spatial.org/vechi/download/karte-des-grossfuerstentums-siebenbuergen-harta-marelui-principat-al-transilvaniei).
- [RoHGIS - date vectoriale istorico-geografice](https://geo-spatial.org/vechi/download/rohgis)

## Aplicație interactivă

Hărțile pot fi explorate online prin intermediul unei [aplicații interactive](https://services.geo-spatial.org/maps/#/viewer/554).

<figure style={{ textAlign: "center" }}>
  <img src={useBaseUrl('/img/proiecte/eharta-screenshot.jpg')} alt="Captură de ecran: interfață grafică aplicație cartografică interactivă web" />
  <figcaption><em>Captură de ecran: interfață grafică aplicație cartografică interactivă web</em></figcaption>
</figure>

## Servicii web

Hărțile sunt disponibile prin [serviciile OGC geo-spatial.org](/servicii):

- Workspace: `eharta`
- WMS: [https://services.geo-spatial.org/geoserver/eharta/ows?service=WMS&version=1.3.0&request=GetCapabilities](https://services.geo-spatial.org/geoserver/eharta/ows?service=WMS&version=1.3.0&request=GetCapabilities)
- WMTS: [https://services.geo-spatial.org/geoserver/eharta/gwc/service/wmts?service=WMTS&version=1.1.1&request=GetCapabilities](https://services.geo-spatial.org/geoserver/eharta/gwc/service/wmts?service=WMTS&version=1.1.1&request=GetCapabilities)

## Premiul Open Data Challenge 2011

În iunie 2011, proiectul eHarta a fost premiat la [Open Data Challenge 2011](https://web.archive.org/web/20120312095747/http://opendatachallenge.org/) - competiție organizată de Comisia Europeană și [Open Knowledge Foundation](https://blog.okfn.org/2011/04/05/announcing-the-open-data-challenge-a-pan-european-open-data-competition/), cu sprijinul financiar al unor importante companii din domeniul IT, precum Google, IBM, Microsoft sau Talis. Competiția a adunat la start un număr de 430 de propuneri, din 24 de state europene, fiind împărțită în patru categorii (Vizualizare, Aplicații, Idei, Date). Proiectul eHarta a câștigat secțiunea de date și a fost premiat cu "Better Data Award". Acesta ne-a fost înmânat de către doamna Neelie Kroes, vicepreședinte al Comisiei Europene, într-o sesiune plenară, în fața a 600+ participanți, în cadrul primei [Digital Agenda Assembly](https://debategraph.org/Details.aspx?nid=107570) de la Bruxelles.

Pentru noi a fost extrem de onorant să aflăm că din juriul ce a evaluat propunerea eHarta a făcut parte Tim Berners-Lee (creatorul World Wide Web) și că o așa declarație a fost făcută publică de către un alt jurat important, Julian Todd ([ScraperWiki](https://www.scraperwiki.com/)), după anunțarea rezultatelor:

> "Of the entries presented, my clear favourite is "eHarta historical maps" which successfully crowd-sourced georeferencing on three sets of historical maps covering all of Romania. It also showed how useful information could be mined from these maps, particularly when it came to discovering areas that have been flooded in the past, and showing the directions in which towns have developed."

Comunicatul nostru oficial de la vremea respectivă se găsește [aici](https://www.geo-spatial.org/vechi/articole/comunicat-proiectul-eharta-premiat-la-open-data-challenge).

<figure style={{ textAlign: "center" }}>
  <img src={useBaseUrl('img/proiecte/2413.jpg')} alt="Ceremonia de premiere Open Data Challenge 2011" />
  <figcaption><em>Ceremonia de premiere Open Data Challenge 2011.</em></figcaption>
</figure>

<figure style={{ textAlign: "center" }}>
  <img src={useBaseUrl('/img/proiecte/2438.jpg')} alt="CBetter Data Award Open Data Challenge 2011" />
  <figcaption><em>Better Data Award Open Data Challenge 2011.</em></figcaption>
</figure>

## Cum poți contribui

Proiectul eHarta a fost construit de comunitate, prin muncă voluntară. Dacă ai acces la hărți istorice sau dorești să contribui la georeferențiere, contactează-ne la [contact@geo-spatial.org](mailto:contact@geo-spatial.org).

## Echipa

Proiectul a fost coordonat de fondatorii geo-spatial.org și realizat cu sprijinul comunității și al instituțiilor partenere.

## Vezi și

- [Proiecte geo-spatial.org](/initiative) - lista completă de proiecte.
