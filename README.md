# Herba Stellaris

*Chaque composition fait naître une flore lunaire qui n'existera qu'une fois.*

Application web audio-réactive : la musique (micro de l'ordinateur, fichier audio ou téléphone relié sans fil) fait pousser une flore imaginaire sur une Lune fidèle à ce qu'on en connaît. Le ciel est celui, réel, de l'instant où commence la composition.

## La flore

Quinze familles, choisies par la musique (graves, médiums, aigus, brillance, intensité) avec une préférence pour la diversité.
Chacune est associée à un minéral ou à un gaz réellement présent sur la Lune :

| Famille | Chimie |
|---|---|
| Cristaux d'anorthosite | CaAl₂Si₂O₈ (plagioclase des hautes terres) |
| Géodes d'améthyste | SiO₂ : Fe³⁺ (quartz coloré par le fer irradié) |
| Gemmes de spinelle | MgAl₂O₄ |
| Rosettes de quartz | SiO₂ |
| Rhizomes et champignons d'argon | ⁴⁰Ar · Na · Ne — flux lumineux sous le régolithe reliant les plantes |
| Arbres‑lanternes | ⁴He |
| Saules de pyroxène | (Ca,Mg,Fe)SiO₃ |
| Fougères arborescentes d'olivine | (Mg,Fe)₂SiO₄ |
| Fougères d'ilménite | FeTiO₃ |
| Fougères‑éventails de troïlite | FeS |
| Arbustes à baies de sodium | Na |
| Filaments de verre volcanique | verre · TiO₂ |
| Herbes stellaires au néon | ²⁰Ne |
| Lys de KREEP | K · REE · P |
| Corolles hydroxylées | OH · H₂O |

## Déroulé d'une composition

1. **Ouverture** — une graine lumineuse quitte la Terre réelle du jour et traverse l'espace jusqu'au site choisi, au rythme de la musique.
   À l'écran : les formules des gaz traversés (atmosphère terrestre, géocouronne, vent solaire, exosphère lunaire) et le message
   « Le temps d'une musique, la Lune apprend à fleurir ».
2. **Ensemencement** — la graine posée luit au cœur du site ; la première plante en sort.
3. **Création** — plans variés, dont des vues plongeantes sur l'ensemble de l'œuvre.
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
