$(function() {
  var menuTitle = $("#nav-right li");
  // evento al click
  menuTitle.click(function(){
    $(this).children(".dropdown-menu").slideToggle();
    console.log($(this));
  });

  // evento a mouse enter
  menuTitle.mouseenter(function(){
    $(this).children(".dropdown-menu").slideDown();

    console.log($(this));
  });

  // evento a mouse leave
  menuTitle.mouseleave(function(){
    $(this).children(".dropdown-menu").slideUp();
    console.log($(this));
  });

});
