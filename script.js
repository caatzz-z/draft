const greetings = [
  "HEYY, im kei ! 🐱",
  "welcome !!",
  "you should def check out my projects..",
  "pls add me i have no friends😢",
];

const headerH1 = document.querySelector("header h1");
headerH1.textContent = greetings[Math.floor(Math.random() * greetings.length)];