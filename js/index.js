import { initializeCarousel } from './glide.js';

document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();

    $(document).ready(function(){
        $('.collapse').on('show.bs.collapse', function () {
            $(this).prev().find('.fas').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        });
        $('.collapse').on('hide.bs.collapse', function () {
            $(this).prev().find('.fas').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        });
    });
    
    var helpfulLinksCollapse = new bootstrap.Collapse(document.getElementById('helpfulLinks'), {
        toggle: false
    });

    var shoppingLinksCollapse = new bootstrap.Collapse(document.getElementById('shoppingLinks'), {
        toggle: false
    });

    document.getElementById('helpfulLinksTitle').addEventListener('click', function () {
        helpfulLinksCollapse.toggle();
    });

    document.getElementById('shoppingLinksTitle').addEventListener('click', function () {
        shoppingLinksCollapse.toggle();
    });
    $(document).ready(function(){
        $("#wholesale-link").click(function(e){
            e.preventDefault();
            $("#wholesale-menu").slideToggle();
        });
    });
    
    var menuBtn = document.getElementById("menu-btn");
    var closeBtn = document.getElementById("close-btn");
    var sidebar = document.getElementById("sidebar");
    
    menuBtn.addEventListener("click", function() {
      sidebar.classList.toggle("d-none");
      menuBtn.classList.toggle("d-none");
      closeBtn.classList.toggle("d-none");

    });
    
    closeBtn.addEventListener("click", function() {
      sidebar.classList.toggle("d-none");
      menuBtn.classList.toggle("d-none");
      closeBtn.classList.toggle("d-none");

    });
    
});


