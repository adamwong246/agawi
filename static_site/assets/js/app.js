$(document).ready(function(){
  
  // Turn carousel on
  $('.carousel').carousel();

  // $('form').addClass('detail_active');

  // "Flavor" switching on the the product_detail page
  // var letters    = ["alpha","beta","gamma", "delta", "epsilon", "zeta"];
  // var def_letter = letters[0];

  // function get_detail_param_from_url(){
  //   var value = $.url().param('detail');

  //   if ($.inArray(value, def_letter) > -1)
  //     {

  //       return value;
  //     }
  //   else
  //     {

  //       return def_letter;
  //     }
  // }; 

  // function apply_detail(detail){
  //   var detail_class = "." + detail;
  //   var detail_id = "#" + detail + "_content";

  //   // debugger;

  //   console.log(detail_id);

  //   $('.dynamic').hide();
  //   $(detail_id).show();

  //   $(".switcher").removeClass('detail_active');
  //   $(detail_class).addClass('detail_active');

  //   // $("#dynamic_showcase").attr({
  //   //   src: "assets/"+ detail +".png",
  //   //   title: "jQuery",
  //   //   alt: "jQuery Logo"
  //   // });
  // };

  $(".switcher").click(function() {
    selected = '#' + $(this).attr('class').split(/\s+/)[0] + "_content";

    $('html, body').animate({
         scrollTop: $(selected).offset().top
     }, 2000);

    // $('body').scrollTo( selected );
    // alert(selected);
    // apply_detail(selected);
  });

  // $(window).resize(function() {
  //   $('.responsive_placholder').text(
  //     $('.responsive_placholder').width()
  //     + " px by " + 
  //     $('.responsive_placholder').height()
  //     + "px");
  // });

  // $("")


  jQuery("#youtube-player-container").tubeplayer({
    width: 600, // the width of the player
    height: 450, // the height of the player
    allowFullScreen: "true", // true by default, allow user to go full screen
    initialVideo: "QH2-TGUlwu4", // the video that is loaded into the player
    preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
    // onPlay: function(id){}, // after the play method is called
    // onPause: function(){}, // after the pause method is called
    // onStop: function(){}, // after the player is stopped
    // onSeek: function(time){}, // after the video has been seeked to a defined point
    // onMute: function(){}, // after the player is muted
    // onUnMute: function(){}, // after the player is unmuted
    onPlayerPlaying: function(){
      $('.carousel').carousel('pause');
    },
    onPlayerPaused: function(){
      $('.carousel').carousel('cycle');
    }
  });
});


