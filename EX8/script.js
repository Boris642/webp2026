// A. 預設資料集 (圖片中的資料)
const dataUnit = ["資工系", "資工系", "資工系", "資工系", "資工系", "資工系"];
const dataSubject = ["物件導向軟體設計", "計算機網路實驗", "作業系統實務", "生物統計", "通訊系統", "軟硬體專題(2)"];
const dataTeacher = ["黃崇源", "李春良", "張哲維", "陳光武", "陳仁暉", "魏志達"];

let currentIndex = 0; // 紀錄目前新增到第幾筆
let timer = null;     // 存放計時器物件

// B. 新增單筆資料的函式
function addOneData() {
    // 檢查是否還有資料可以新增
    if (currentIndex >= dataSubject.length) {
        console.log("資料已全部新增完畢");
        clearInterval(timer);
        return;
    }

    // 取得表格的 tbody
    const tbody = document.getElementById("course-body");

    // 1. 建立新的一列 (tr)
    const newRow = tbody.insertRow(-1); // -1 代表插入在最後面

    // 2. 在該列中建立三個儲存格 (td)
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    // 3. 填入內容
    cell1.textContent = dataUnit[currentIndex];
    cell2.textContent = dataSubject[currentIndex];
    cell3.textContent = dataTeacher[currentIndex];

    // 4. 索引值加 1
    currentIndex++;
}

// C. 控制計時器的函式
function startAutoAdd() {
    if (timer !== null) return; // 避免重複啟動多個計時器
    
    // 設定 setInterval，每 1000 毫秒 (1秒) 執行一次 addOneData
    timer = setInterval(addOneData, 1000);
}

function stopAutoAdd() {
    clearInterval(timer);
    timer = null;
}