const change = (chg) => {
    let fredCtrl = document.getElementById("fred");
    let val = fredCtrl.value;
    val = Number(val);
    val = val + chg;
    fredCtrl.value = val;
    display(val, fredCtrl);
}
const display = (nbr, ctrl) => {
    ctrl.value = nbr;
    ctrl.style.color = (nbr % 2 == 0) ? "red" : "black";
    ctrl.style.fontWeight = (nbr % 3 == 0) ? "bold":"normal";
    ctrl.style.fontStyle = (nbr % 5 == 0) ? "italic":"normal"
}