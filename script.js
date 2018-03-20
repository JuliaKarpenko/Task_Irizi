document.addEventListener("DOMContentLoaded", function () {

// -------------------------humburger-----------------------------

    var humburger = document.querySelector("#humburger__toggle")

    humburger.addEventListener('click', toggleVisibility);

    function toggleVisibility() {
        var nav = document.querySelector("#mobile__toggle")
        nav.classList.toggle("active")
    }

// -----------------------Смена изображений и текста------------------------

    var items = document.getElementsByClassName("slider__navigation");
    var slider = document.getElementsByClassName("slider")[0];
    var count = 0;

    var myTimer = setInterval(function(){ updateSliderSection() }, 4000);

    function updateSliderSection() {

        items[count].classList.remove("active");

        count++;
        if (count >= items.length) {
            count = 0;
        }

        items[count].classList.add("active");

        setSliderSection("" + count);
    };

    for (var i = 0; i < items.length; i++) {            
        items[i].addEventListener('click', onClick)
    }

// ------------------------Смена изображений по клику--------------------

    function onClick() {
        clearInterval(myTimer);
        setSliderSection(this.dataset.icons);
        items[count].classList.remove("active");
        count = this.dataset.icons;
        items[count].classList.add("active");
        
        myTimer = setInterval(function(){ updateSliderSection() }, 4000);
        
    }

// ------------------------функция смены изображеинй и текста-----------------

    function setSliderSection(icon) {
        switch (icon) {
            case "0":
                slider.style.backgroundImage = "url('image/bitmap1.jpg')";
                document.getElementsByClassName("title")[0].innerText = "DRONE OWNERS";
                document.getElementsByClassName("text")[0].innerText = "Choose the best offer, which suits all of your needs.";
                break;
            case "1":
                slider.style.backgroundImage = "url('image/bitmap2.jpg')";
                document.getElementsByClassName("title")[0].innerText = "DRONE OWNERS";
                document.getElementsByClassName("text")[0].innerText = "Myriad of drone's turnkey services near at two clicks. Choose the best offer from thousands of companies around the world or - create your own drone service.";
                break;
            case "2":
                slider.style.backgroundImage = "url('image/bitmap3.jpg')";
                document.getElementsByClassName("title")[0].innerText = "SOFTWARE DEVS";
                document.getElementsByClassName("text")[0].innerText = "The biggest droners database and B2B marketplace at your service.Use IRIZI's features to receive the market feedback, consolidated users' experience to meet their needs and improve your business."
                break;
            case "3":
                slider.style.backgroundImage = "url('image/bitmap4.jpg')";
                document.getElementsByClassName("title")[0].innerText = "PROVIDERS";
                document.getElementsByClassName("text")[0].innerText = "Meet your clients, partners and friends from around the globe and use IRIZI's features to provide the best drones services. Convert your drone in profit!"
                break;
            case "4":
                slider.style.backgroundImage = "url('image/bitmap5.jpg')";
                document.getElementsByClassName("title")[0].innerText = "INSURANCE";
                document.getElementsByClassName("text")[0].innerText = "Provide your innovative insurance products in automated mode using the IRIZI's advantages as well use the drone services to transform your business models and develop new products.";
                break;
            case "5":
                slider.style.backgroundImage = "url('image/bitmap6.jpg')";
                document.getElementsByClassName("title")[0].innerText = "AUTHORITIES";
                document.getElementsByClassName("text")[0].innerText = "IRIZI is a tool that ensure regulation enforcement, communication and permission interfaces between authorities and drone community as well security and safety of airspace.";
                break;
        }
    }
});
