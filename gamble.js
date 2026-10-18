const button = document.getElementById("gamblebutton");
const reels = document.querySelectorAll(".reel-strip");
const lastIndex = Array(reels.length).fill(0);

button.addEventListener("click", () => {
  console.log("spin clicked");

  reels.forEach((reel, i) => {
    const count = reel.children.length;
    let idx;
    do {
      idx = Math.floor(Math.random() * count);
    } while (idx === lastIndex[i]);
    lastIndex[i] = idx;

    const symbolHeight = reel.children[0].offsetHeight;
    reel.style.transform = `translateY(-${idx * symbolHeight}px)`;
  });
});
