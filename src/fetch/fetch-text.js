/**
 * 試すのにMoesif Orign & CORS Changerが必要（CORSを無効化するChrome Extension）
 */
const getInfo = () => {
  var zipcode = document.myform.postcode.value;
  var zipcloudUrl = "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + zipcode;
  var exportTarget = document.getElementById("fetch-test");
  fetch(zipcloudUrl)
    .then(res => {
      res.json()
    })
    .then(json => {
      if (json) {
        exportTarget.innerHTML = JSON.stringify(json);
      }
    })
    .catch(e => {
      alert('failed')
    });
}
