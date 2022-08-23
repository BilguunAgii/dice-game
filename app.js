// Global diceDom зарлаж байна.
// Тоглоом дууссан эхэсийг халдгалах хувьсагч
var isNewGame;
// Тоглогчийн хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, 2-р тоглогчийг 1 гэе
var activePlayer;
// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores;
// Тоглогчийн ээлжиндээ цуглуулсан оноог хадгалах хувьсагч
var roundScore;

var diceDom = document.querySelector(".dice");
initGame();
function initGame() {
  //Тоглоом эхэллээ гэдэг төлөвт  оруулна.
  isNewGame = true;
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;

  // Тоглоом эхлэх үеийг бэтлгэх
  document.getElementById("score-0").textContent = "0";
  window.document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").innerHTML = "0";
  window.document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").innerHTML = "0";

  //Тоглогчдийн нэрийг буцаах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  diceDom.style.display = "none";
}

// btn-Roll дарахад буух шооны зураг болон санамсаргүй байдал.
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1 ээс ялгаатай бол тоог current дээр нэмнэ
    if (diceNumber !== 1) {
      // 1-ээс ялгаатай тоо буусан тул тоглогчид нэмж өгнө.
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // 1 буусан тул тоглогчийн ээлжийг сольж өгнө
      // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.

      switchToNextPlayer(); // DRY dont repeat yourself
    }
  } else {
    alert("togloom duuslaa");
  }
});

// Hold товчны эвэнт лмтенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // УГ тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    // Дэлгэцэн дээрх оноог нь өөрчилнө.
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // Уг тоглогч хожсон эхэсийг шалгах(100 ихгүй байх)
    if (scores[activePlayer] >= 100) {
      // тоглоомыг дууссан төлвт оруулна.
      isNewGame = false;
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
  } else {
    alert("togloom ehleegui bn");
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
document.querySelector(".btn-new").addEventListener("click", initGame);
