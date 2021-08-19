async function swap(i, j) {
    let bars = document.querySelectorAll(".bar");
    // bars[i].style.backgroundColor = "#5af2cc";
    // bars[j].style.backgroundColor = "#5af2cc";
    bars[i].style.backgroundColor = "#f553b7";
    bars[j].style.backgroundColor = "#5af2cc";
    let temp1 = bars[i].childNodes[0].innerHTML;
    let temp2 = bars[i].style.height;
    bars[i].style.height = bars[j].style.height;
    bars[i].childNodes[0].innerHTML = bars[j].childNodes[0].innerHTML;
    bars[j].style.height = temp2;
    bars[j].childNodes[0].innerHTML = temp1;
    await new Promise((resolve) =>
            setTimeout(() => {
                resolve()
            }, 20));
    bars[i].style.backgroundColor = "#5af2cc";
    bars[j].style.backgroundColor = "#f553b7";
}
async function partation(l, r) {
    let bars = document.querySelectorAll(".bar");
    let piv = parseInt(bars[r].childNodes[0].innerHTML);
    let i = l - 1;
    for (let j = l; j < r; j++) {
        let t = parseInt(bars[j].childNodes[0].innerHTML);
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve()
            }, 10));
        if (t <= piv) {
            i++;
            swap(i, j);
        }
    }
    swap(i + 1, r);
    return i + 1;
}
async function quicksort(l,r){
    let bars = document.querySelectorAll(".bar");
    let stack = new Array(r-l+1);
    stack.fill(0);
    let top = -1;
    stack[++top] = l;
    stack[++top] = r;
    while(top >= 0){
        r = stack[top--];
        l = stack[top--];
        let pi = await partation(l,r);
        bars[pi].style.backgroundColor = "yellow";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve()
            }, 10));
        if(pi - 1 > l){
            stack[++top] = l;
            stack[++top] = pi-1;
        }
        if(pi + 1 < r){
            stack[++top] = pi + 1;
            stack[++top] = r;
        }
    }
    for (let i = bars.length - 1; i >= 0; i--) {
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve()
            }, 20));
        bars[i].style.backgroundColor = "aqua";
    }
    document.getElementById("txt").innerHTML = " ";
    enable();
}
async function quick() {
    let bars = document.querySelectorAll(".bar");
    disable();
    document.getElementById("cmp").innerHTML = " O(n log n)";
    quicksort(0, bars.length - 1);
}
//Made by: Pranay Prasad
//Emali:- pranayprasad42@gmail.com
