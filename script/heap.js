async function heapify(n, i) {
    var bars = document.querySelectorAll(".bar");
    var lar = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if (l < n && Number(bars[l].childNodes[0].innerText) > Number(bars[lar].childNodes[0].innerText)) {
        lar = l;
    }
    if (r < n && Number(bars[r].childNodes[0].innerText) > Number(bars[lar].childNodes[0].innerText)) {
        lar = r;
    }
    if (lar != i) {
        bars[i].style.backgroundColor = "#668cff";
        bars[lar].style.backgroundColor = "#ff1aff";
        var temp1 = bars[i].style.height;
        var temp2 = bars[i].childNodes[0].innerText;
        bars[i].style.height = bars[lar].style.height;
        bars[i].childNodes[0].innerText = bars[lar].childNodes[0].innerText;
        bars[lar].style.height = temp1;
        bars[lar].childNodes[0].innerText = temp2;
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve()
            }, 10));
        await heapify(n, lar);
    }
}
async function heap() {
    disable();
    document.getElementById("cmp").innerHTML += " O(n log n)";
    var bars = document.querySelectorAll(".bar");
    let n = bars.length;
    for (var i = n / 2 - 1; i >= 0; i--) {
        await heapify(n, i);
    }
    for (var i = n - 1; i > 0; i--) {
        var temp1 = bars[i].style.height;
        var temp2 = bars[i].childNodes[0].innerText;
        bars[i].style.height = bars[0].style.height;
        bars[i].childNodes[0].innerText = bars[0].childNodes[0].innerText;
        bars[0].style.height = temp1;
        bars[0].childNodes[0].innerText = temp2;
        bars[0].style.backgroundColor = "purple";
        bars[i].style.backgroundColor = "blue";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve()
            }, 10));
        await heapify(i, 0);
    }
    for (let i = bars.length - 1; i >= 0; i--) {
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve()
            }, 10));
        bars[i].style.backgroundColor = "aqua";
    }
    document.getElementById("txt").innerHTML = " ";
    enable();
}
//Made by: Pranay Prasad
//Emali:- pranayprasad42@gmail.com