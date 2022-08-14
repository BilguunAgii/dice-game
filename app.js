// Тоглогчийн хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, 2-р тоглогчийг 1 гэе
var activePlayer = 1;
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
});
