createRows();
createDate();

function createRows() {
	for(var i = 1; i < 14; i++) {
		var inputCheck = $("<input>").attr({'type' : "checkbox", "class" : "input-check", 'id' : "check" + i,});
		var inputText = $("<input>").attr({'type' : "text", "class" : "input-text", 'id' : "text" + i,});
		var row = $("<div>").attr({'id' : "row" + i, "class" : "row"}).append(inputCheck, inputText);
		$("#main").append(row);
	}
}

function createDate() {
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
		$(this).next(inputText).css("text-decoration", "none");
		localStorage.setItem($(this).prop("id"), "false");		
	}
});

$(".input-text").change(function() {
	localStorage.setItem($(this).prop("id"), $(this).val());
});

for(var i = 1; i < inputText.length + 1; i++) {
	if (localStorage.getItem("check" + i + "") == "true") {
		$("#check" + i + "").prop("checked", true);
		$("#check" + i + "").next(inputText).css("text-decoration", "line-through");
	}

	if (localStorage.getItem("text" + i + "") != null) {
		$("#text" + i + "").val(localStorage.getItem("text" + i + ""));
	}
}

$("#delete").click(function() {
	$(".input-check").prop("checked", false);
	$(".input-text").val("");
	$(".input-text").css("text-decoration", "none");
	localStorage.clear();
});