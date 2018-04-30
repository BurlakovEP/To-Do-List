getRows();
getDate();

function getRows() {
	for(var i = 1; i < 14; i++) {
		var inputCheck = $("<input>").attr({'type' : "checkbox", "class" : "input-check", 'id' : "check" + i,});
		var inputText = $("<input>").attr({'type' : "text", "class" : "input-text", 'id' : "text" + i,});
		var row = $("<div>").attr({'id' : "row" + i, "class" : "row"}).append(inputCheck, inputText);
		$("#main").append(row);
	}
}

function getDate() {
	var date 	= new Date();
	var year 	= date.getFullYear();			
	var month 	= (date.getMonth() + 1);
	var day 		= date.getDate();
	
	if(day < 10) {
		day = "0" + date.getDate();	
	}

	if(month < 10) {
		month = "0" + (date.getMonth() + 1);
	}
	
	$(".date").html(day + "." + month + "." + year);	
}

var inputText = $(".input-text");

$(".input-check").click(function() {
  	if($(this).prop("checked") == true) {
		$(this).next(inputText).css("text-decoration", "line-through");
		localStorage.setItem($(this).prop("id"), "true");
	}
	else {
		localStorage.setItem($(this).prop("id"), "false");
		$(this).next(inputText).css("text-decoration", "none");
	}
});

if (localStorage.getItem("check1") == "true") {
	$("#check1").prop("checked", true);
	$("#check1").next(inputText).css("text-decoration", "line-through");
}
if (localStorage.getItem("check2") == "true") {
	$("#check2").prop("checked", true);
	$("#check2").next(inputText).css("text-decoration", "line-through");
}
if (localStorage.getItem("check3") == "true") {
	$("#check3").prop("checked", true);
	$("#check3").next(inputText).css("text-decoration", "line-through");
}


$(".input-text").change(function() {
  	localStorage.setItem($(this).prop("id"), $(this).val());
});

if (localStorage.getItem("text1") != null) {
	$("#text1").val(localStorage.getItem("text1"));
}
if (localStorage.getItem("text2") != null) {
	$("#text2").val(localStorage.getItem("text2"));
}
if (localStorage.getItem("text3") != null) {
	$("#text3").val(localStorage.getItem("text3"));
}

$("#delete").click(function() {
	$(".input-check").prop("checked", false);
	$(".input-text").val("");
	localStorage.clear();
});       


