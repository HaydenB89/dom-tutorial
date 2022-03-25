
const clicked = () => {
    let inpCtrl = document.getElementById("fred");
    let contents = inpCtrl.value;
    let lblCtrl = document.getElementById("lbl");
    lblCtrl.innerText = contents;   
}