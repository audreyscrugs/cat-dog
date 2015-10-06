$(document).ready(function() {

  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Bark!</li>");



    $("ul#dog").children("li").first().click(function() {
      $('li').css('background-color', 'yellow');
      $(this).remove();

    });

    $("ul#cat").children("li").first().click(function() {
      $('li').css('background-color', 'red');
      $(this).remove();
    });

  });

  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>Bark!</li>")
    $("ul#cat").prepend("<li>Meow!</li>");


  });


  $("h2").click(function() {
    $(this).remove();
  });

});
