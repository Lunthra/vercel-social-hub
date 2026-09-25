const posterLanes = [
  [
    { src: "images/posters/12 Angry Man.webp", title: "12 Angry Men" },
    { src: "images/posters/Black Myth Wukong.webp", title: "Black Myth: Wukong" },
    { src: "images/posters/Attack on Titan.webp", title: "Attack on Titan" },
    { src: "images/posters/The Brothers Karamazov.webp", title: "The Brothers Karamazov", offset: -12 },
    { src: "images/posters/dark.webp", title: "Dark" },
    { src: "images/posters/frieren.webp", title: "Frieren: Beyond Journey’s End", offset: 12 },
    { src: "images/posters/arrival.webp", title: "Arrival" },
    { src: "images/posters/Atonement.webp", title: "Atonement" },
    { src: "images/posters/Blade Runner 2049.webp", title: "Blade Runner 2049" },
    { src: "images/posters/Dead Poets Society.webp", title: "Dead Poets Society" },
    { src: "images/posters/Dune.webp", title: "Dune", offset: -12 },
    { src: "images/posters/Guide.webp", title: "Guide" },
    { src: "images/posters/Harakiri.webp", title: "Harakiri", offset: 12 },
    { src: "images/posters/Hridayam.webp", title: "Hridayam" },
    { src: "images/posters/One Piece - favorite.webp", title: "One Piece" },
    { src: "images/posters/Lawrence of Arabia.webp", title: "Lawrence of Arabia" },
    { src: "images/posters/The Apothecary Diaries.webp", title: "The Apothecary Diaries" },
    { src: "images/posters/Nayak The Hero.webp", title: "Nayak: The Hero", offset: -12 },
    { src: "images/posters/Violet Evergarden.webp", title: "Violet Evergarden" },
    { src: "images/posters/Potrait of a lady on fire.webp", title: "Portrait of a Lady on Fire", offset: 12 },
    { src: "images/posters/Stand by Me.webp", title: "Stand by Me" }
  ],
  [
    { src: "images/posters/A silent Voice.webp", title: "A Silent Voice" },
    { src: "images/posters/Magician - Raymond E. Feist.webp", title: "Magician — Raymond E. Feist" },
    { src: "images/posters/Chernobyl.webp", title: "Chernobyl" },
    { src: "images/posters/About Time.webp", title: "About Time", offset: -12 },
    { src: "images/posters/Red Dead Redemption 2.webp", title: "Red Dead Redemption 2" },
    { src: "images/posters/Game of Thrones.webp", title: "Game of Thrones", offset: 12 },
    { src: "images/posters/Fullmetal Alchemist Brotherhood.webp", title: "Fullmetal Alchemist: Brotherhood" },
    { src: "images/posters/Grave of the Fireflies.webp", title: "Grave of the Fireflies" },
    { src: "images/posters/Haikyu!!.webp", title: "Haikyu!!" },
    { src: "images/posters/Hunter X Hunter.webp", title: "Hunter × Hunter" },
    { src: "images/posters/I want to Eat your Pancreas.webp", title: "I Want to Eat Your Pancreas", offset: -12 },
    { src: "images/posters/Mob Psycho 100.webp", title: "Mob Psycho 100" },
    { src: "images/posters/Monster.webp", title: "Monster", offset: 12 },
    { src: "images/posters/Naruto.webp", title: "Naruto" },
    { src: "images/posters/It’s a Wonderful Life.webp", title: "It’s a Wonderful Life" },
    { src: "images/posters/Steins Gate.webp", title: "Steins;Gate" },
    { src: "images/posters/Manchester by the sea.webp", title: "Manchester by the Sea" },
    { src: "images/posters/Vinland Saga.webp", title: "Vinland Saga", offset: -12 },
    { src: "images/posters/Perfect Days.webp", title: "Perfect Days" },
    { src: "images/posters/Ran.webp", title: "Ran", offset: 12 },
    { src: "images/posters/The Odyssey.webp", title: "The Odyssey" }
  ],
  [
    { src: "images/posters/Band of Brothers.webp", title: "Band of Brothers" },
    { src: "images/posters/2001 A space odyssey.webp", title: "2001: A Space Odyssey" },
    { src: "images/posters/Elden Ring.webp", title: "Elden Ring" },
    { src: "images/posters/Code Geass.webp", title: "Code Geass", offset: -12 },
    { src: "images/posters/Apu Sansar.webp", title: "Apur Sansar" },
    { src: "images/posters/The Last of Us Part II.webp", title: "The Last of Us Part II", offset: 12 },
    { src: "images/posters/Gullak.webp", title: "Gullak" },
    { src: "images/posters/Mouse.webp", title: "Mouse" },
    { src: "images/posters/normal-people.webp", title: "Normal People" },
    { src: "images/posters/The Big Bang Theory.webp", title: "The Big Bang Theory" },
    { src: "images/posters/The Sopranos.webp", title: "The Sopranos", offset: -12 },
    { src: "images/posters/The Wire.webp", title: "The Wire" },
    { src: "images/posters/the-leftovers.webp", title: "The Leftovers", offset: 12 },
    { src: "images/posters/Interstellar.webp", title: "Interstellar" },
    { src: "images/posters/Orb On the Movements of the Earth.webp", title: "Orb: On the Movements of the Earth" },
    { src: "images/posters/Lord of the Rings The Return of the King.webp", title: "The Lord of the Rings: The Return of the King" },
    { src: "images/posters/The Legend of the Galactic Heroes.webp", title: "The Legend of the Galactic Heroes" },
    { src: "images/posters/Oppenheimer.webp", title: "Oppenheimer", offset: -12 },
    { src: "images/posters/Your Name.webp", title: "Your Name" },
    { src: "images/posters/Seven Samurai - favorite.webp", title: "Seven Samurai", offset: 12 },
    { src: "images/posters/Where the Crawdads Sing.webp", title: "Where the Crawdads Sing" }
  ]
];

// Shuffle each lane once per page load so every visit starts at a different point.
posterLanes.forEach((items) => {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
});
const posterOffsetPattern = [-10, 11, -13, 8, -7, 14, -11, 9, -5, 13, -8, 6];
const laneElements = [...document.querySelectorAll(".poster-lane")];
let resizeTimer;

function makePoster(item, sequenceIndex) {
  const frame = document.createElement("div");
  frame.className = "poster-frame";
  const offset = item.offset ?? posterOffsetPattern[sequenceIndex % posterOffsetPattern.length];
  frame.style.setProperty("--poster-offset", `${offset}px`);
  const image = document.createElement("img");
  image.src = item.src;
  image.alt = "";
  image.title = item.title;
  image.loading = "eager";
  image.decoding = "async";
  frame.append(image);
  return frame;
}

function fillLane(laneElement, items, laneIndex) {
  laneElement.replaceChildren();
  const track = document.createElement("div");
  track.className = `poster-track${laneIndex === 1 ? " poster-track--reverse" : ""}`;
  const firstGroup = document.createElement("div");
  firstGroup.className = "poster-group";
  track.append(firstGroup);
  laneElement.append(track);
  let posterIndex = 0;
  items.forEach((item) => {
    firstGroup.append(makePoster(item, posterIndex));
    posterIndex += 1;
  });
  while (firstGroup.getBoundingClientRect().width < window.innerWidth + 220) {
    firstGroup.append(makePoster(items[posterIndex % items.length], posterIndex));
    posterIndex += 1;
  }
  const groupWidth = firstGroup.getBoundingClientRect().width;
  const duplicateGroup = firstGroup.cloneNode(true);
  duplicateGroup.setAttribute("aria-hidden", "true");
  duplicateGroup.querySelectorAll("img").forEach((image) => image.alt = "");
  track.append(duplicateGroup);
  track.style.setProperty("--loop-duration", `${Math.max(44, Math.round(groupWidth / 26))}s`);
}

function buildPosterLanes() {
  laneElements.forEach((laneElement, index) => fillLane(laneElement, posterLanes[index], index));
}

buildPosterLanes();
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(buildPosterLanes, 180);
});

// Reveal a favorite image when its local WebP file exists; keep the designed slot otherwise.
document.querySelectorAll("[data-favorite-poster]").forEach((image) => {
  const slot = image.closest(".favorite-poster");
  const reveal = () => slot?.classList.add("is-loaded");
  image.addEventListener("load", reveal, { once: true });
  image.addEventListener("error", () => image.remove(), { once: true });
  if (image.complete && image.naturalWidth > 0) reveal();
});



