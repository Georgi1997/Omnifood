/* For the sticky Nav */
$(document).ready(function () {
  $(".js-SectionFeatures").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );

  /* Scroll on Buttons */
  $(".js-scroll-to-plan").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js-SectionPlans").offset().top },
      1000
    );
  });
  $(".js-scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js-SectionFeatures").offset().top },
      1000
    );
  });
  AOS.init();
  /* animations on scroll */

  $(".move-up span").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });

  /**mobile nav ***/
  $(".js-nav-icon").click(function () {
    var nav = $(".jsMainNav");
    var icon = $(".js-nav-icon");
    nav.slideToggle(200);
    icon.toggleClass("ion-navicon-round");
    icon.addClass("ion-close-round");
  });
});
