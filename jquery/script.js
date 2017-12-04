    $(document).ready(function(){
      $("p").click(function(){
        $(this).text("cliked").delay(800).fadeOut(400);
    });

    $("button").click(()=>{
      $("a").attr('href', "http://walla.com").text("walla");
      
    });
    $("#awesomeBtn").on("click",()=>{
      console.log("clicked");
  });
}) 