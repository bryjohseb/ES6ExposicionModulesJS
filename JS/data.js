var modulePerClass = {

  message: "The conversion will be realized",
  value: 0,
  
  conversionData: {
    from: "",
    to: "",
	result: 0
  },
  
  showValues: function () {
    console.log( this.message + " from " + this.conversionData.from + " to " + this.conversionData.to + " and the result is " + this.conversionData.result  );    
  },  
  updateMyConfig: function( fromValue, toValue, value ) {
	this.value = value;
	this.conversionData.from = fromValue;
	this.conversionData.to = toValue;
	this.conversionData.result = this.conversion();	
  },
   conversion: function () {
	if(this.conversionData.from == "Celsius" && this.conversionData.to == "Farenheit"){
  	console.log("Convert Data from Celsius to Farenheit");
    return (this.value * (9/5) + 32);
	}
	if(this.conversionData.from == "Farenheit" && this.conversionData.to == "Celsius"){
  	console.log("Convert Data from Farenheit to Celsius");
    return ((this.value - 32) * (5/9));
	}
	return 0;
   },
};

var View = {}, Controller = {};

View = {
    result : document.querySelector("#result"),    
    update: function(Model){		
        this.result.value = Model.conversionData.result;
    }
}

C = {
    model: modulePerClass,
    view: View,
    handler: function(){
		var number = document.getElementById("number").value;
		var from = document.getElementById("select1");
		var to = document.getElementById("select2");

		console.log(number + " " + from.options[from.selectedIndex].value + " " + to.options[to.selectedIndex].value);
		
		this.model.value = number;
		this.model.conversionData.from = from.options[from.selectedIndex].value;
		this.model.conversionData.to = to.options[to.selectedIndex].value;
		this.model.conversionData.result = this.model.conversion();
        this.view.update(this.model);
    }
}
//document.getElementById("btnid").addEventListener("click", myFunction);
document.querySelector("#btnid").addEventListener("click", () => C.handler.call(C)); 
/*document.querySelector("#btnid").addEventListener("click", function(){
    C.handler.call(C);
}); */