//welcomeMsg
const welcomeGreetings = [
  "夜幕降臨，旅程開始！",
  "輪椅旅人的夜間探險！",
  "夜探奇幻香港！",
  "輪椅下的秘密通道，等你解鎖！",
];

const welcomeMsgElement = document.getElementById("welcomeMsg");

let currentIndex = 0;
let index = 0;
let isPaused = true;

function displayText() {
  if (isPaused) {
    setTimeout(() => {
      isPaused = false;
      displayText();
    }, 1500); // 1.5秒延遲
    return;
  }

  const currentGreeting = welcomeGreetings[currentIndex];

  if (index < currentGreeting.length) {
    const charSpan = document.createElement("span");
    charSpan.textContent = currentGreeting[index];
    welcomeMsgElement.appendChild(charSpan);
    index++;
    setTimeout(displayText, 100);
  } else {
    // 句子结束后停留3秒钟，然后清空并显示下一句
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % welcomeGreetings.length;
      index = 0;
      isPaused = true;
      welcomeMsgElement.textContent = ""; // 清空当前显示
      displayText();
    }, 3000); // 3秒延遲
  }
}
displayText();

//Footer;
