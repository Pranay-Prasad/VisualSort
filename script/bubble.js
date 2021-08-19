async function bubble() {
    disable();
    document.getElementById("cmp").innerHTML += " O(n^2)"; 
    let bars = document.querySelectorAll(".bar");
    for (let i = 0; i < bars.length; i += 1) {
        for (let j = 0; j < bars.length - i - 1; j += 1) {
            var l1 = parseInt(bars[j].childNodes[0].innerHTML);
            bars[j].style.backgroundColor = "#e600e6";
            var l2 = parseInt(bars[j + 1].childNodes[0].innerHTML);
            bars[j + 1].style.backgroundColor = "#ff1a8c";
            if (l1 > l2) {
                var temp = bars[j].style.height;
                var temp2 = bars[j].childNodes[0].innerText;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = temp;
                bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
                bars[j + 1].childNodes[0].innerText = temp2;
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve()
                    }, 10));
            }
        }
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