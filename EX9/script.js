
var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

function getimg() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imglist_Url, true);
    xhr.send();

    xhr.onload = function() {
        var response = JSON.parse(this.responseText);
        var data = response.photos.photo;
        add_new_img(data);
    };
}

function add_new_img(dataset) {
    var gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; 

    dataset.forEach(function(item) {
        // 使用 Flickr 官方公式組合圖片網址：
        // https://live.staticflickr.com/{server}/{id}_{secret}_z.jpg
        var imgUrl = "https://live.staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_z.jpg";
        
        var img = document.createElement('img');
        img.src = imgUrl;
        gallery.appendChild(img);
    });
}