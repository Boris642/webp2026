const container = document.getElementById('container');
let wrongCount = 0; // 新增：紀錄連續打錯次數

window.onload = function() {
    container.focus();
    // 初始產生 1~3 個字 (避免產生 0 個字導致畫面空白)
    let count = Math.floor(Math.random() * 3) + 1; 
    container.innerText = generateRandomString(count);
};

window.addEventListener("keyup", function(e) {
    let currentText = container.innerText;
    
    // 排除掉不屬於字元的按鍵 (如 Shift, Alt 等)
    if (e.key.length !== 1) return;

    if (currentText.length > 0) {
        if (e.key === currentText[0]) {
            // --- 打對了 ---
            container.innerText = currentText.substring(1);
            wrongCount = 0; // 連續錯誤中斷，歸零
            
            // 如果字打完了，增加原本要增加的亂數
            if (container.innerText.length === 0) {
                add_new_chars();
            }
        } else {
            // --- 打錯了 ---
            wrongCount++;
            console.log("連續打錯次數:", wrongCount);

            if (wrongCount === 3) {
                // 連續打錯三次：額外增加 3 個亂數
                add_new_chars(3); 
                wrongCount = 0; // 處罰完後歸零
            }
        }
    }
});

// 修改：讓 count 變成可選參數，預設是隨機 1~3
function add_new_chars(count) {
    let finalCount = count || (Math.floor(Math.random() * 3) + 1);
    let newChars = generateRandomString(finalCount);
    container.innerText += newChars;
}

function generateRandomString(len) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    for (let i = 0; i < len; i++) {
        res += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return res;
}