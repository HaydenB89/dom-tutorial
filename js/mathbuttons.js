
const minus = () => {
    let inpCtrl = document.getElementById("fred");
    let newInp = Number(inpCtrl.value) - 1;
    inpCtrl.value = newInp;
    if(newInp % 2 == 0) {
        inpCtrl.style.color = "red";
    } else {
        inpCtrl.style.color = "black";
    }
    if(newInp % 3 == 0){
        inpCtrl.style.fontWeight = "bold";
    } else {
        inpCtrl.style.fontWeight = "light";
    }
}

const plus = () => {
    let inpCtrl = document.getElementById("fred");
    let newInp = inpCtrl.value;
    newInp = Number(newInp);
    newInp++;
    inpCtrl.value = newInp;
    if(newInp % 2 == 0) {
        inpCtrl.style.color = "red";
    } else {
        inpCtrl.style.color = "black";
    }
    if(newInp % 3 == 0){
        inpCtrl.style.fontWeight = "bold";
    } else{
        inpCtrl.style.fontWeight = "light";
    }
}

