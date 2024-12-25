
============================================================
                    Milo Slider
============================================================

Thank you for purchasing Milo Slider! This lightweight and responsive slider template will help you create beautiful sliders for your projects with ease.

------------------------------------------------------------
1. FOLDER STRUCTURE
------------------------------------------------------------
After extracting the downloaded zip file, you will see the following structure:

miloslider/
├── documentation/       # Full Documentation in HTML format
├── demos/               # Demo files for easy setup
│   ├── index.html       # Example slider file
│   ├── assets/          # CSS, JS, and Images
│       ├── css/         # Stylesheets
│       ├── js/          # JavaScript files
│       ├── img/         # Images used in the demo
├── source/              # Unminified source files (CSS/JS)
└── README.txt           # This file

------------------------------------------------------------
2. INSTALLATION
------------------------------------------------------------
To use Milo Slider in your project:

1. Add the CSS and JS files from the "assets" folder into your project:


<link rel="stylesheet" href="assets/css/swiper.min.css">
<link href="assets/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.min.css">
<link rel="stylesheet" href="assets/css/responsive.min.css">

<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/swiper.js"></script>
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<script src="assets/js/bootstrap.min.js" crossorigin="anonymous"></script>
<script src="assets/js/main.min.js"></script>

2. Include the following HTML structure for your slider:

<div class="milo-slider">

  <div class="gallery"> 
    <div class="swiper-container gallery-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background: url('assets/image/img-01.jpg') no-repeat center top / cover">
          <div class="container h-100">
            <div class="swiper-caption">
              <div class="row">
                <div class=" col-md-5 col-lg-5">
                  <span class="swiper-caption__ctg">Dinner</span>
                  <h1 class="swiper-caption__ttl">Swordfish Fillet</h1>
                  <p class="swiper-caption__txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                  </p> 
                  <a class="swiper-caption__btn" href="">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</div>

3. Initialize the slider using JavaScript:

<script>
document.addEventListener('DOMContentLoaded', function() {
    ('.gallery-thumbs').init({
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        },
        slideToClickedSlide: true,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        },
        onmouseover: {
            autoplay: false 
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
</script>

------------------------------------------------------------
3. FEATURES
------------------------------------------------------------
- Lightweight and responsive slider
- Autoplay functionality
- Navigation arrows
- Dots navigation (pagination)
- Customizable slide speed and behavior
- Modern design with clean code

------------------------------------------------------------
4. CUSTOMIZATION OPTIONS
------------------------------------------------------------
You can customize the slider using the following options when initializing it:

| Option               | Type       | Default   | Description                                                       |
|----------------------|------------|-----------|-------------------------------------------------------------------|
| slidesPerView        | Number     | 1         | Number of slides per view                                         |
| centeredSlides       | Boolean    | true      | Active slide will be centered, not always on the left side        |
| spaceBetween         | Number     | 0         | Distance between slides in px                                     |
| loop                 | Boolean    | true      | To enable continuous loop mode                                    |
| speed                | Number     | 1500      | Duration of transition between slides                             |
| slideToClickedSlide  | Boolean    | true      | Click on this slide will produce transition to this slide         |
| pagination           | Boolean    | true      | Object with pagination parameters to enable with default settings |
| navigation           | Boolean    | true      | Object with pagination parameters to enable with default settings |


Example:
<script>
    ('.gallery-thumbs').init({
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        speed: 1500,
    });
</script>

------------------------------------------------------------
5. SUPPORT
------------------------------------------------------------
If you encounter any issues or have questions about Milo Slider, please contact our support team:

Email: alissioteam@gmail.com  
Support Hours: Monday - Friday, 9 AM - 11 PM (GMT)

Thank you for choosing Milo Slider! We hope it adds great value to your project.

============================================================
                        END OF FILE
============================================================
