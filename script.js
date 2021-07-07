/*sticky navigation*/
let navbar = $(".navbar");

$(window).scroll(function () {
  let oTop = $(".section-2").offset().top - window.innerHeight;
  //   console.log(oTop);

  //   console.log(window.innerHeight);
  //   console.log($(".section-2").offset().top);
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

/*counter anime*/

let nCount = function (selector) {
  $(selector).each(function () {
    $(this).animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (value) {
          $(this).text(Math.ceil(value));
        },
      }
    );
  });
};


