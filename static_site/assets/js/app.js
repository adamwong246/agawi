
$(document).ready(function(){
  var letters    = ["alpha","beta","gamma", "delta", "epsilon", "zeta"];
  var def_letter = letters[0];

  function get_detail(){
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

  $('.carousel').carousel();
  // var tech = GetURLParameter('detail');

  var detail = get_detail();
  var detail_class = "." + detail;

  $(detail_class).css({'border-width':'9px', 'border-style':'solid', 'border-color':'red'});

});

