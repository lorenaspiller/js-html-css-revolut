$(function() {
  var menuTitle = $("#nav-right ul > li");
  // // evento a mouse enter
  // menuTitle.mouseenter(function(){
  //   $(this).children(".dropdown-menu").slideDown();
  // });
  //
  // // evento a mouse leave
  // menuTitle.mouseleave(function(){
  //   $(this).children(".dropdown-menu").slideUp();
  //   console.log($(this));
  // });
  //
  // // evento al click
  // menuTitle.click(function(){
  //   $(this).children(".dropdown-menu").slideToggle();
  // });

  // evento a mouse enter
  menuTitle.mouseenter(function(){
    $(this).siblings("li").children(".dropdown-menu").removeClass("active");
    $(this).children(".dropdown-menu").addClass("active");
  });

  // evento al click
  menuTitle.click(function(){
    $(this).children(".dropdown-menu").removeClass("active");
  });

});
