
var allData = [];
var filteredData = [];
var currentPage = 1;
const pageSize = 10;

var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        allData = JSON.parse(this.responseText);
        filteredData = allData;
        renderTable();
    }
};

function renderTable() {
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = startIndex + pageSize;
    var pageItems = filteredData.slice(startIndex, endIndex);

    pageItems.forEach(function (data) {
        var row = tableBody.insertRow(-1);
        row.insertCell(0).innerHTML = data['title'];
        row.insertCell(1).innerHTML = data['showInfo'][0] ? data['showInfo'][0]['location'] : "無資訊";
        row.insertCell(2).innerHTML = data['showInfo'][0] ? data['showInfo'][0]['price'] : "無資訊";
    });

    updatePaginationInfo();
}

function updatePaginationInfo() {
    var totalPages = Math.ceil(filteredData.length / pageSize) || 1;
    document.getElementById("pageDisplay").innerText = `第 ${currentPage} 頁 / 共 ${totalPages} 頁`;
}

function changePage(direction) {
    var totalPages = Math.ceil(filteredData.length / pageSize);
    var nextStep = currentPage + direction;

    if (nextStep >= 1 && nextStep <= totalPages) {
        currentPage = nextStep;
        renderTable();
    }
}

function searchData() {
    var keyword = document.getElementById("searchInput").value.toLowerCase();

    filteredData = allData.filter(function (item) {
        return item['title'].toLowerCase().includes(keyword);
    });

    currentPage = 1;
    renderTable();
}