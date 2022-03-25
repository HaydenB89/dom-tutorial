
const minus = () => {
    let inpCtrl = document.getElementById("fred");
    let newInp = Number(inpCtrl.value) - 1;
    inpCtrl.value = newInp;
    if(newInp % 2 == 0) {
        inpCtrl.style.color = "red";
    } else {
        inpCtrl.style.color = "black";
    }
}

const plus = () => {
    let inpCtrl = document.getElementById("fred");
    let newInp = Number(inpCtrl.value) + 1;
    inpCtrl.value = newInp;
    if(newInp % 2 == 0) {
        inpCtrl.style.color = "red";
    } else {
        inpCtrl.style.color = "black";
    }
}
