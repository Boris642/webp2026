import React from 'react';

// 1. 定義樣式物件 (講義第 20 頁：fontSize 100px, 顏色紅色)
const styleArgument = { fontSize: '100px', color: 'red' };

// 2. 定義點擊觸發的函式 (講義第 26 頁：增加「被點了」文字)
const changeText = (event) => {
  console.log(event.target); 
  event.target.innerText = event.target.innerText + "被點了";
};

function App() {
  return (
    <div className="App">
      {/* 3. 綁定樣式與點擊事件 (講義第 26 頁) */}
      <h1 style={styleArgument} onClick={changeText}>
        hello CGU!!
      </h1>
    </div>
  );
}

export default App;