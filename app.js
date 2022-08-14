// Тоглогчийн хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, 2-р тоглогчийг 1 гэе
var activePlayer = 1;
// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулсан оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа бууусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;
//<div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

// Тоглоом эхлэх үеийг бэтлгэх
window.document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").innerHTML = 0;
window.document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").innerHTML = 0;
document.querySelector(".dice").style.display = "none";
console.log("Шоо : " + dice);
