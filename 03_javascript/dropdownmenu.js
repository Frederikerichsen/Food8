// BURGER MENU START


document.querySelector(".dropbtn").addEventListener("click", toggleMenu);
document.querySelector(".bar1").classList.toggle("click", ("change"));
document.querySelector(".bar2").classList.toggle("click", ("change"));
document.querySelector(".bar3").classList.toggle("click", ("change"));

function toggleMenu() {
    document.querySelector(".dropbtn").classList.toggle("change");
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// BURGER MENU SLUT


// Close the dropdown if the user clicks outside of it
window.onclick = function (menu) {
    if (!menu.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");

        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                document.querySelector(".dropbtn").classList.toggle("change");

            }
        }
    }
}
