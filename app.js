// Тоглогчийн хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, 2-р тоглогчийг 1 гэе
var activePlayer = 0;
// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулсан оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа бууусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// Тоглоом эхлэх үеийг бэтлгэх
document.getElementById("score-0").textContent = "0";
window.document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").innerHTML = "0";
window.document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").innerHTML = "0";

// Global diceDom зарлаж байна.
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// btn-Roll дарахад буух шооны зураг болон санамсаргүй байдал.
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо нь 1 ээс ялгаатай бол тоог current дээр нэмнэ
  if (diceNumber !== 1) {
    // 1-ээс ялгаатай тоо буусан тул тоглогчид нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг сольж өгнө
    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
    // DRY dont repeat yourself
    switchToNextPlayer();
  }
});

// Hold товчны эвэнт лмтенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  // УГ тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө.
  scores[activePlayer] = scores[activePlayer] + roundScore;
  // Дэлгэцэн дээрх оноог нь өөрчилнө.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // Уг тоглогч хожсон эхэсийг шалгах(100 ихгүй байх)
  if (scores[activePlayer] >= 100) {
    document.getElementById("name-" + activePlayer).textContent = "Winner";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Ээлжийн оноог нь тэг болгоно
    // тоглогчийн ээлжийг сольно
    switchToNextPlayer();
  }
});

// Энэ функц нь тоглох ээлжийг дараагийн тоглогч руу шилжүүлнэ
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ
  // хэрэв идэвхтэй тоглогч 0 байвал идэвхтэй тоглогчийг 1 болго
  // Үгүй бол идэвхтэй тоглогч 0 болго

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  diceDom.style.display = "none";
}

// Шинэ тоглоом эхлүүлэх товчний эвэнт литенер
document.querySelector(".btn-new").addEventListener("click", function () {
  alert("click");
});
