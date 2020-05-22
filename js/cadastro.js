window.addEventListener(onload);
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
// ====================================================================================================
// document.getElementById("buttom-seguinte").onclick(alert("Cadastro feito com sucesso!"));
// document.getElementById("buttom-seguinte01").onclick(alert("Cadastro feito com sucesso!"));