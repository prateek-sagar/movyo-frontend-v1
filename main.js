import header from "./src/components/header";
import footer from "./src/components/footer";

document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();
});
document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();
