$(document).ready(function() { // do this when the document is loaded
  $("#content_dialer").show();
	$("#content_contacts").hide();
	$("#content_add").hide();
  $("#content_help").hide();
});


$("#dialer_tab_btn").click(function() { // when "dialer_tab" is clicked
  $("#content_dialer").show();
  $("#content_contacts").hide();
  $("#content_add").hide();
  $("#content_help").hide();

});

$("#contacts_tab_btn").click(function() { // when "contacts_tab" is clicked
  $("#content_dialer").hide();
  $("#content_contacts").show();
  $("#content_add").hide();
  $("#content_help").hide();

});

$("#add_tab_btn").click(function() { // when "add_tab" is clicked
  $("#content_dialer").hide();
  $("#content_contacts").hide();
  $("#content_add").show();
  $("#content_help").hide();
});

$("#help_tab_btn").click(function() { // when "help_tab" is clicked
  $("#content_dialer").hide();
  $("#content_contacts").hide();
  $("#content_add").hide();
  $("#content_help").show();
});

$(".numpad_btn").click(function() {
  var number = $(this);
  var text = $.trim(number.find('.txt').clone().children().remove().end().text());
  var telephone_number = $('#telephone_number');
  $(telephone_number).val(telephone_number.val() + text);
});

$(".dialer_fn_btn").click(function() {
  var telephone_number = $('#telephone_number');
  $(telephone_number).val("");
});
