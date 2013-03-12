$(document).ready(function(){
  $('.carousel').carousel();

  var letters    = ["alpha","beta","gamma", "delta", "epsilon", "zeta"];
  var def_letter = letters[0];

  function apply_detail(detail){
    var detail_class = "." + detail;

    $(".switcher").css({'border':'none'});
    $(detail_class).css({'border-width':'9px', 'border-style':'solid', 'border-color':'red'});

    $("#dynamic_showcase").attr({
      src: "assets/"+ detail +".png",
      title: "jQuery",
      alt: "jQuery Logo"
    });
  };

  function get_detail_param_from_url(){
    var value = $.url().param('detail');

    if ($.inArray(value, letters) > -1)
      {

        return value;
      }
    else
      {

        return def_letter;
      }
  }; 


  var detail = get_detail_param_from_url();

  apply_detail(detail);

  $(".switcher").click(function() {
    selected = $(this).attr('class').split(/\s+/)[0];
    apply_detail(selected);
  });

});

