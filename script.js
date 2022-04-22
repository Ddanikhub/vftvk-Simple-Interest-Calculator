
//Function to Compute Inerest rate
function computeinterest()
{
    // Set variables for input
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //calculate inetrest
    var interest = principal * years * rate /100;
    
    //calculate year
    var year = new Date().getFullYear()+parseInt(years);
    
    // output 
    if(principal < 1){
        alert("Enter a positive number");
    }
    else{
    document.getElementById("deposit").innerHTML = 
    "If you deposit " + '<span style="font-weight: bold">' + "$" +principal + '</span>' + ",";
    
    document.getElementById("inerestrate").innerHTML = 
    "at an interest rate of " + '<span style="font-weight: bold; background-color: yellow">' + rate + "%" +'</span>' + ".";
    
    document.getElementById("Amoutof").innerHTML = 
    "You will recieve an amount of " + '<span style="font-weight: bold">' + "$" + interest + '</span>' + ",";
    
    document.getElementById("inyear").innerHTML = "in the year of " + '<span style="font-weight: bold">' + year + '</span>' + ".";}
    }
    

    //Function to compute slider.
    function updateSlider(slideAmount) {
        var sliderDiv = document.getElementById("rate_val");
        sliderDiv.innerHTML = slideAmount;
    }