/**
 * 試すのにMoesif Orign & CORS Changerが必要（CORSを無効化するChrome Extension）
 */
var zipcloudUrl = "http://zipcloud.ibsnet.co.jp/api/search?zipcode=1620825";
var exportTarget = document.getElementById("fetch-test");
console.log(exportTarget);
fetch(zipcloudUrl)
  .then(res => res.json())
  .then(json => {
    if (json) {
      exportTarget.innerHTML = JSON.stringify(json);
    }
  });
