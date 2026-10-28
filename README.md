# Herba Stellaris

*Chaque composition fait naître une flore lunaire qui n'existera qu'une fois.*

Application web audio-réactive : la musique (micro de l'ordinateur, fichier audio ou téléphone relié sans fil) fait pousser une flore imaginaire sur une Lune fidèle à ce qu'on en connaît. Le ciel est celui, réel, de l'instant où commence la composition.

## La flore

Onze familles, choisies par la musique (graves, médiums, aigus, brillance, intensité) avec une préférence pour la diversité :
cristaux d'anorthosite, gemmes taillées, rosettes de quartz, arbres‑lanternes, saules de basalte, fougères d'ilménite,
arbustes à baies, filaments de verre, herbes stellaires, lys de régolithe et corolles héliotropes.

## Déroulé d'une composition

1. **Ouverture** — départ de la Terre réelle du jour, traversée vers la Lune au rythme de la musique, plongée sur le site choisi.
2. **Ensemencement** — les premières graines germent une fois le site révélé.
3. **Création** — plans variés, dont des vues plongeantes sur l'ensemble de l'œuvre.
4. **Final** — à 3 min 30, dézoom lent sur l'œuvre entière ; après 10 s de silence, la création s'arrête d'elle‑même.

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
