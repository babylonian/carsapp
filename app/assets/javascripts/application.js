// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$('#datepicker').datepicker({
	dateFormat: 'dd-mm-yy',
	changeMonth: true,
	changeYear: true,
	yearRange: "-5:+20",	
});

<script>
$(document).ready(function () {
$(“#new_user”).validate({
debug: true,
rules: {
“user[email]“: {required: true, email: true, remote:”/users/check_email” },  //added this
“user[password]“: {required: true, minlength: 6},
“user[password_confirmation]“: {required: true, equalTo: “#user_password”}
}
});
});
</script>