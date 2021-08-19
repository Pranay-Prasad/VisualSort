async function selection() {
    disable();
    document.getElementById("cmp").innerHTML = " O(n^2)";
    let bars = document.querySelectorAll(".bar");
    var min_i = 0;
    for (var i = 0; i < bars.length; i += 1) {
        min_i = i;
        bars[i].style.backgroundColor = "darkblue";
        for (var j = i + 1; j < bars.length; j += 1) {
            bars[j].style.backgroundColor = "#00e6b8";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve()
                }, 5));
            var val1 = parseInt(bars[j].childNodes[0].innerHTML);
            var val2 = parseInt(bars[min_i].childNodes[0].innerHTML);
            if (val1 < val2) {
                if (min_i !== i) {
                    bars[min_i].style.backgroundColor = "#ff6666";
                }
                min_i = j;
            }
            else {
                bars[j].style.backgroundColor = "#ff6666";
            }
        }
        var temp1 = bars[min_i].style.height;
        var temp2 = bars[min_i].childNodes[0].innerText;
        bars[min_i].style.height = bars[i].style.height;
        bars[min_i].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].style.height = temp1;
        bars[i].childNodes[0].innerText = temp2;
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve()
            }, 5));
        bars[min_i].style.backgroundColor = "#1affa3";
        bars[i].style.backgroundColor = "skyblue";
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
