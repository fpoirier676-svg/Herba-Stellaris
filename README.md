# Herba Stellaris

*Chaque composition fait naître une flore lunaire qui n'existera qu'une fois.*

Application web audio-réactive : la musique (micro de l'ordinateur, fichier audio ou téléphone relié sans fil) fait pousser une flore imaginaire sur une Lune fidèle à ce qu'on en connaît. Le ciel est celui, réel, de l'instant où commence la composition.

## La flore

**100 variétés** réparties en quinze familles (architectures). Chaque variété porte une chimie lunaire réelle — minéraux des
échantillons Apollo (anorthite, armalcolite, tranquillityite, pyroxferroïte…), gaz de l'exosphère (⁴⁰Ar, ⁴He, ²⁰Ne, Na, K),
volatils piégés dans les cratères froids (H₂O, CO₂, NH₃, CH₃OH, Hg…) — et une morphologie propre : élancement, torsion,
retombée, inclinaison, ornements (rosée, épines, anneaux, lanternes, spores, couronnes) et palette.

| Famille | Variétés | Exemple |
|---|---|---|
| Cristaux | 8 | Torsades d'armalcolite — (Mg,Fe)Ti₂O₅ |
| Géodes | 6 | Géodes d'améthyste — SiO₂ : Fe³⁺ |
| Gemmes | 7 | Larmes de verre orange — verre · Ti · Zn · S |
| Rosettes | 7 | Rosettes d'hélium‑3 — ³He |
| Rhizomes et champignons | 7 | Rhizomes de mercure — Hg |
| Arbres | 8 | Candélabres de KREEP — K · REE · P |
| Saules | 6 | Saules pleureurs de sodium — Na |
| Fougères arborescentes | 6 | Fougères arborescentes d'olivine — (Mg,Fe)₂SiO₄ |
| Fougères | 7 | Fougères d'ilménite — FeTiO₃ |
| Fougères‑éventails | 6 | Éventails de troïlite — FeS |
| Arbustes | 7 | Buissons de pérovskite — CaTiO₃ |
| Filaments | 6 | Antennes d'hélium‑3 — ³He |
| Herbes | 7 | Herbes stellaires au néon — ²⁰Ne |
| Lys | 6 | Lys de KREEP — K · REE · P |
| Corolles | 6 | Corolles hydroxylées — OH · H₂O |

### Comment la musique érige la flore

Chaque variété a une signature musicale : **registre** (graves ↔ aigus), **dynamique** (crescendo ↔ decrescendo) et **rythme**
(legato ↔ percussif). La musique est écoutée en continu et la variété qui naît est celle dont la signature ressemble le plus au moment :

- **Graves** → minéraux massifs, géodes, gemmes, troncs épais ; **aigus** → filaments, herbes, lys, formes fines.
- **Crescendo** → les formes s'élèvent : arbres, fougères géantes, antennes. Les jeunes plantes poussent plus vite et les naissances s'accélèrent.
- **Decrescendo** → saules pleureurs, éventails couchés, rosettes, rhizomes et champignons. La lueur s'apaise.
- **Rythme percussif** → formes torsadées, segmentées, en grappes ; **legato** → courbes longues et lisses.
- La forme de chaque plante garde la trace de l'instant de sa naissance : plus élancée en crescendo, plus retombante en decrescendo, plus torsadée sur un rythme serré.
- **Cohérence** : quand la musique change durablement de caractère, une nouvelle **phrase** commence et fait pousser un nouveau **bosquet**
  ailleurs sur le site. Dans une même phrase, les plantes partagent une famille dominante tout en restant variées. Le jardin final garde ainsi
  la forme de la pièce, section par section.

## Déroulé d'une composition

1. **Ouverture** — une graine lumineuse quitte la Terre réelle du jour et traverse l'espace jusqu'au site choisi, au rythme de la musique.
   À l'écran : les formules des gaz traversés (atmosphère terrestre, géocouronne, vent solaire, exosphère lunaire) et le message
   « Le temps d'une musique, la Lune apprend à fleurir ».
2. **Ensemencement** — la graine posée luit au cœur du site ; la première plante en sort.
3. **Création** — plans variés : vues plongeantes sur l'ensemble de l'œuvre, travellings au‑dessus de la canopée, rotations autour des cimes.
4. **Final** — à 3 min 30, dézoom lent sur l'œuvre entière ; après 10 s de silence, la création s'arrête d'elle‑même.

Sources des valeurs de l'exosphère lunaire et du vent solaire : NASA (mission LADEE).

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application (scène 3D, galerie, exports photo et vidéo jusqu'en 8K) |
| `capteur.html` | Page à ouvrir sur le téléphone (via le QR code) pour en faire le micro de l'application |
| `.nojekyll` | Indique à GitHub Pages de servir les fichiers tels quels |

## Utilisation

1. Ouvrir l'adresse GitHub Pages du dépôt dans Chrome ou Edge sur l'ordinateur.
2. **Composer avec mon téléphone** → scanner le QR code avec le téléphone Android → **Activer le micro et se connecter**.
3. Lancer la composition depuis l'ordinateur ou depuis le téléphone ; **Terminer et conserver** pour l'ajouter à la galerie.

Le micro du téléphone exige une page en `https` : c'est la raison de la publication sur GitHub Pages.

## Dépendances chargées en ligne

- [three.js](https://threejs.org) 0.160 (MIT) — rendu 3D
- [PeerJS](https://peerjs.com) 1.5 (MIT) — mise en relation téléphone ↔ ordinateur (le son passe ensuite directement en pair à pair)
- [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) (MIT) — QR code
- Polices Google Fonts : Corinthia, Cormorant Garamond, Inter (OFL)

## Données embarquées

- Étoiles, constellations, Voie lactée, objets du ciel profond : [d3-celestial](https://github.com/ofrohn/d3-celestial) (BSD-3)
- Textures de la Terre : exemples three.js (images NASA)
- Multiplexeur WebM : [webm-muxer](https://github.com/Vanilagy/webm-muxer) (MIT)
- Éphémérides : Lune d'après Meeus, planètes d'après les éléments képlériens de Standish (JPL), rotation lunaire IAU/WGCCRE
