export default function() {
    const Hoge = function(hoge, fuga) {
        this.hoge = hoge
        this.fuga = fuga
    }
    Hoge.prototype.bar = function(bar) {
        this.bar = bar
    }
    const hoge = new Hoge("hoge", "fuga")
    hoge.bar("bar")
    console.log(hoge)
}