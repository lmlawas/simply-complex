function createObjectiveFunction(){	
	var arr = $("#unknown").val().toString().split(',');
	var obj_fxn = "Z =";
	for(i=0; i<arr.length; i++){

		var x_var = "X"+i.toString().sub();
		var term = arr[i]+x_var;
		obj_fxn = obj_fxn.concat(" " + term);
		if(i!=arr.length-1) obj_fxn = obj_fxn.concat(" +");
	}	
		
	// console.log(obj_fxn);
	$("#obj_fxn").html(obj_fxn);
	// return obj_fxn;
}