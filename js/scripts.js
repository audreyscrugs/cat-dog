$(document).ready(function() {

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why, hello there!</li>");



    $("ul#webpage").children("li").first().click(function() {
      $('li').css('background-color', 'yellow');
      $(this).remove();

    });

    $("ul#user").children("li").first().click(function() {
      $('li').css('background-color', 'red');
      $(this).remove();
    });

  });



  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>")

  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>")

  });
  $("h2").click(function() {
    $(this).remove();
  });
});
