export default function () {
  // return Promise object
  async function hoge() {
    return 'hoge'
  }


  hoge().then(value => {
    alert(value)
  })
  alert('this alert should be executed first')
}