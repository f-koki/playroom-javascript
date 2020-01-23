/**
 * 試すのにMoesif Orign & CORS Changerが必要（CORSを無効化するChrome Extension）
 */
// TODO: zipcodeをformから受け取れるようにする
var zipcode = 1670051;
var zipcloudUrl = "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + zipcode;
var exportTarget = document.getElementById("fetch-test");
console.log(exportTarget);
fetch(zipcloudUrl)
  .then(res => res.json())
  .then(json => {
    if (json) {
      exportTarget.innerHTML = JSON.stringify(json);
    }
  });
