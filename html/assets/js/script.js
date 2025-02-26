document.addEventListener('click', function(event) {
    var srb = document.getElementById('search-result-box');
    if (!srb.contains(event.target)) 
    {
        startSearch(1)
    }

    var article = document.getElementById('article');
    if (article)
    {
        if (!article.contains(event.target)) 
        {
            article.classList.add('d-none');
        }
    }
});

function startSearch(toggle)
{
    var srb = document.getElementById("search-result-box");
    if (srb)
    {
        if (toggle==1)
        {
            srb.classList.add('d-none');
        }
        else
        {
            srb.classList.remove('d-none');
        }
    }
}

function search(toggle)
{
    var srb = document.getElementById(toggle);
    if (srb)
    {
        srb.classList.remove('d-none');
    }
}

$('.owl-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-related-products').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

$('.owl-trial').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
        1200:{
            items:3
        }
    }
})



$(document).ready(function() {
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4;
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() 
        {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) 
    {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) 
    {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});


function searchInput(id)
{
    var searchInput = document.getElementById(id);
    var searchQuery = searchInput.value.toLowerCase();
    var items = document.querySelectorAll('#' + id + '-list input');

    items.forEach(function(item){
        var text = item.nextSibling.textContent.toLowerCase();
        if (text.includes(searchQuery)) 
        {
            item.parentElement.style.display = "";
        } 
        else 
        {
            item.parentElement.style.display = "none";
        }
    });
}

$(function (){
    $(".listing-type-buttons .btn").click(function () {
        var value = $(this).val();

        var mediaQueries = {
            xs: window.matchMedia("(min-width: 0px) and (max-width: 575px)"),
            sm: window.matchMedia("(min-width: 576px) and (max-width: 767px)"),
            md: window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
            lg: window.matchMedia("(min-width: 992px) and (max-width: 1199px)"),
            xl: window.matchMedia("(min-width: 1200px) and (max-width: 1399px)"),
            xxl: window.matchMedia("(min-width: 1400px)")
        };

        if (mediaQueries.xxl.matches)
        {
            if (value==4)
            {
                $(".product-list > div").removeClass("col-xl-4").addClass("col-xl-3");
            }
            else
            {
                $(".product-list > div").removeClass("col-xl-3").addClass("col-xl-4");
            }
        }
        else if (mediaQueries.xl.matches)
        {
            if (value==4)
            {
                $(".product-list > div").removeClass("col-xl-4").addClass("col-xl-3");
            }
            else
            {
                $(".product-list > div").removeClass("col-xl-3").addClass("col-xl-4");
            }
        }
        else if (mediaQueries.lg.matches)
        {
            if (value==4)
            {
                $(".product-list > div").removeClass("col-lg-6").addClass("col-lg-4");
            }
            else
            {
                $(".product-list > div").removeClass("col-lg-4").addClass("col-lg-6");
            }
        }
        else if (mediaQueries.md.matches)
        {
            if (value==4)
            {
                $(".product-list > div").removeClass("col-md-6").addClass("col-md-12");
            }
            else
            {
                $(".product-list > div").removeClass("col-md-12").addClass("col-md-6");
            }
        }
        else if (mediaQueries.sm.matches)
        {
            if (value==4)
            {
                $(".product-list > div").removeClass("col-sm-6").addClass("col-sm-12");
            }
            else
            {
                $(".product-list > div").removeClass("col-sm-12").addClass("col-sm-6");
            }
        }
        else if (mediaQueries.xs.matches)
        {
            if (value==4)
            {
                $(".product-list > div").removeClass("col-xs-6").addClass("col-xs-12");
            }
            else
            {
                $(".product-list > div").removeClass("col-xs-12").addClass("col-xs-6");
            }
        }
    });
});

function toggler(id)
{
    var item = document.getElementById(id);
    if (item)
    {
        if (item.style.display=='none' || item.style.display=='')
        {
            item.style='display: block !important;';
        }
        else
        {
            item.style='display: none !important;';
        }
    }
}

window.onload = function() {
    var yaerTag = document.getElementById("year-tag");
    if (yaerTag)
    {
        var currentYear = new Date().getFullYear();
        yaerTag.textContent = currentYear.toString();
    }
};