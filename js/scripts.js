$(document).ready(function() {

  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Bark!</li>");
    $('img#cat').addClass("brc");
    $('img#dog').removeClass("brc");
    // $('img#cat').addClass("brc").delay(500).removeClass("brc");

    

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
    $('img#cat').removeClass("brc");
    $('img#dog').addClass("brc");



  });
  $("button#before").click(function() {
    $("ul#cat").after("<span>Isn't this amazing?</span>");
  });




  $("h2").click(function() {
    $(this).remove();
  });

});
