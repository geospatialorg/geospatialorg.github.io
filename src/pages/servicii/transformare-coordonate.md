---
title: TransdatOnline - Serviciu de transformare coordonate
description: Transformă coordonate între sistemele românești (Stereo70, Stereo30) și cele internaționale (WGS84, ETRS89)
---

# TransdatOnline - Serviciu de transformare coordonate

:::tip ⭐ Popular
Cu aproape **30 de milioane de transformări** documentate, acesta este unul dintre cele mai utilizate servicii geo-spatial.org! 
:::

## Despre TransdatOnline

TransdatOnline este o aplicație web care permite transformarea coordonatelor între sistemele naționale/locale de coordonate ale României și cele internaționale (WGS84, ETRS89). 

Serviciul a fost creat în 2011 de colegul nostru, [Bogdan Moroșanu](https://www.linkedin.com/in/bogdan-morosanu/), ca urmare a publicării deschise de către Agenția Națională de Cadastru și Publicitate Imobiliară (ANCPI) a gridului de transformare a coordonatelor.

## Interfața web

- [Accesează TransdatOnline](https://www.geo-spatial.org/transdatonline/)

- [Documentație detaliată](https://www.geo-spatial.org/transdatonline/HelpTransdatOnline.html)

## Transformări disponibile

TransdatOnline suportă următoarele transformări:

| Din sistem | În sistem |
|------------|-----------|
| ETRS89 | Stereografic 1970 + Marea Neagră 1975 |
| ETRS89 | Stereografic 1930 + Marea Neagră 1975 |
| Stereografic 1970 + MN75 | ETRS89 |
| Stereografic 1930 + MN75 | ETRS89 |

## În cifre

:::info Statistici
- ~30.000.000 transformări documentate (cu pierderea statisticilor pe 2 ani)
- Mii - zeci de mii de transformări zilnice
- Activ din 2011 - peste 15 ani de serviciu neîntrerupt
:::

## Impactul în comunitate

Sincer, nu știm cu exactitate cine sunt toți utilizatorii serviciului. Ceea ce știm sigur este că imediat după orice problemă tehnică primim sesizări pe email și pe rețelele sociale. Aceasta ne confirmă că TransdatOnline a devenit un instrument important pentru comunitatea geodezică și GIS din România (probabil este inclus în unele din aplicațiile software dezvoltate pe plan local).

## Opțiuni interfață

### Ordinea coordonatelor
- NE(H) sau LatLong(h) - nord, est, altitudine sau latitudine, longitudine, cotă elipsoidală
- EN(H) sau LongLat(h) - est, nord, altitudine sau longitudine, latitudine, cotă elipsoidală

### Formate unghiuri
- Grade, minute, secunde: `47°42'56.40000"`
- Grade zecimale: `47.71566666554`
- Radiani: `0.8327954880977160`

### Separator coordonate
Implicit `;` - caracterele multiple de același fel sunt tratate ca unul singur.

## Raport transformare

După efectuarea transformării, aplicația afișează un raport care include:
- Număr total coordonate - seturi corecte și invalide
- Număr coordonate invalide - texte care nu pot fi interpretate
- Număr coordonate în afara gridului - în afara ariei de acoperire
- Număr coordonate fără valori în grid - în afara zonei de interes

Informațiile sunt colorate:
- 🟢 *Verde - fără probleme
- 🟠 Portocaliu - probleme minore  
- 🔴 Roșu** - probleme majore

## Viitorul serviciului: PyTransDatRO

În 2026, comunitatea geo-spatial.org a lansat **[PyTransDatRO](https://pytransdat.geo-spatial.org)** — un proiect independent, gratuit și cu sursă deschisă (Licență MIT), dezvoltat ca o alternativă modernă și o replică a aplicațiilor oficiale ANCPI, TransDatRO și succesorul său RomGEO. PyTransDatRO include un Studio Web modern cu hartă interactivă, suport pentru transformări de fișiere CSV/TXT, un API REST de mare viteză și compatibilitate completă cu endpoint-urile clasice TransDatOnline. Detalii complete în [documentația serviciului](/servicii/pytransdatro) și în [pagina inițiativei](/initiative/pytransdatro).

---

## Autor și resurse educaționale

TransdatOnline a fost creat de Bogdan Moroșanu într-o perioadă în care astfel de informații erau foarte rare și greu accesibile.

Pentru cei interesați să înțeleagă mai bine fundamentele teoretice ale transformărilor de coordonate, recomandăm articolele lui Bogdan:

### Articole recomandate

- 📑 **[Transformarea coordonatelor între sistemele ETRS89 și Stereografic 1970/1930](http://geo-spatial.org/vechi/articole/transformarea-coordonatelor-intre-sistemele-de-coordonate-etrs89-i-stereografic-1970-sau-stereografic-1930-cu-altitudini-in-sistemul-marea-neagra-1975)**  
  Explicații detaliate despre transformarea între sistemele de coordonate cu altitudini în sistemul Marea Neagră 1975.

- 📑 **[Distribuția deformațiilor liniare relative](http://geo-spatial.org/vechi/articole/distributia-deformatiilor-liniare-relative-folosinta-teren)**  
  Analiză a deformațiilor liniare în funcție de utilizarea terenului.

- 📑 **[Deformații liniare în sistemele de proiecție](http://geo-spatial.org/vechi/articole/deformatii-liniare-in-sistemele-proiectie)**  
  Studiu tehnic despre deformațiile liniare în diferite sisteme de proiecție.

---

## Resurse externe

- [EPSG Registry](https://epsg.io/) - Căutare coduri EPSG
- [ANCPI](https://www.ancpi.ro/) - Agenția Națională de Cadastru și Publicitate Imobiliară
- [EUREF](https://www.euref.eu/) - European Reference Frame

## Vezi și

- [Servicii OGC](/servicii/) - toate standardele OGC.
