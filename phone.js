$(document).ready(function() { // do this when the document is loaded
  $("#content_dialer").show();
	$("#content_contacts").hide();
	$("#content_add").hide();
});


$("#dialer_tab_btn").click(function() { // when "dialer_tab" is clicked
  $("#content_dialer").show();
  $("#content_contacts").hide();
  $("#content_add").hide();
});

$("#contacts_tab_btn").click(function() { // when "dialer_tab" is clicked
  $("#content_dialer").hide();
  $("#content_contacts").show();
  $("#content_add").hide();
});

$("#add_tab_btn").click(function() { // when "dialer_tab" is clicked
  $("#content_dialer").hide();
  $("#content_contacts").hide();
  $("#content_add").show();
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
