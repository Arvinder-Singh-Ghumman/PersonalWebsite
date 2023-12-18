var hobby = [
  {
    name: "Anime",
    img: "assets/Bleach_logo.jpg",
    source:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bleach_logo.jpg/640px-Bleach_logo.jpg",
    hobbyInfo:
      "I derive immense enjoyment from watching anime, finding both the lighthearted and humorous episodes, such as those in Gintama, as delightful and entertaining. Simultaneously, the intensity of series like Bleach adds an exhilarating dynamic, while the compelling narrative of One Piece provides a powerful blend of excitement and emotional depth, enriching my overall anime-watching experience.",
  },
  {
    name: "Tech surfing",
    img: "assets/tech.jpg",
    source:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Elon_Musk_and_the_Neuralink_Future.jpg/640px-Elon_Musk_and_the_Neuralink_Future.jpg",
    hobbyInfo:
      "I find great satisfaction in exploring and understanding new technologies, innovations, and proven methodologies. The intricacies of both success and failure, along with the underlying reasons behind them, captivate my curiosity and contribute to a continual and enriching learning experience.",
  },
  {
    name: "Video Games",
    img: "assets/valo.jpg",
    source:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Valorant_Champions_Los_Angeles_2023.jpg/640px-Valorant_Champions_Los_Angeles_2023.jpg",
    hobbyInfo:
      "For many, including myself, the thrill of video games extends beyond mere gameplay. Becoming intimately familiar with a game and subsequently watching others play it adds an extra layer of excitement. The shared experience of exploring virtual worlds and witnessing diverse playstyles creates a dynamic and engaging source of enjoyment.",
  },
];

var counter = 1;

function nxtHobby() {
  document.getElementById("hobby").classList.remove("incoming");
  document.getElementById("hobbyimg").classList.remove("incoming");
  document.getElementById("source").classList.remove("incoming");
  document.getElementById("hobbyInfo").classList.remove("incoming");
  document.getElementById("hobby").classList.add("remove");
  document.getElementById("hobbyimg").classList.add("remove");
  document.getElementById("source").classList.add("remove");
  document.getElementById("hobbyInfo").classList.add("remove");

  setTimeout(function () {
    document.getElementById("hobby").classList.remove("remove");
    document.getElementById("hobbyimg").classList.remove("remove");
    document.getElementById("source").classList.remove("remove");
    document.getElementById("hobbyInfo").classList.remove("remove");
    document.getElementById("hobby").classList.add("incoming");
    document.getElementById("hobbyimg").classList.add("incoming");
    document.getElementById("source").classList.add("incoming");
    document.getElementById("hobbyInfo").classList.add("incoming");

    document.getElementById("hobby").innerText = hobby[counter].name;
    document.getElementById("hobbyimg").src = hobby[counter].img;
    document.getElementById("source").innerText = hobby[counter].source;
    document.getElementById("hobbyInfo").innerText = hobby[counter].hobbyInfo;

    //increasing counter value
    counter++;
    //keeping it under 0-3
    counter = counter % 3;
  }, 1500);
}

function typewriter() {
  new TypeIt("#title", {
    speed: 90,
    waitUntilVisible: true,
  })
    .type("i am a software developer", { delay: 100 })
    .move(-24)
    .delete(1)
    .type("I")
    .move(null, { to: "END" })
    .pause(400)
    .type(" student")
    .pause(500)
    .move(-8)
    .pause(500)
    .delete(2)
    .type("ment")
    .move(null, { to: "END" })
    .move(-27)
    .delete(1)
    .type("S")
    .move(9)
    .delete(1)
    .type("D")
    .move(12)
    .delete(1)
    .type("S")
    .move(null, { to: "END" })
    .go();
}

window.onload = () => {
  if (location.pathname == "/index.html"||location.pathname=="/"||location.pathname==""||location.pathname=="/PersonalWebsite/") {
    typewriter();
  }
};
