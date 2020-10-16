    var card_text = document.querySelectorAll(".card-text");
    var card_price = document.querySelectorAll(".btn-outline-secondary");
    var img = document.querySelectorAll("img");
    var search_key,i=0,k = false ,  val;
    var string = "";
   
     //by default hide the fixed div
     $("#searchDiv").hide();

    //show search div
	function showSearchDiv(){
		$("#searchDiv").show();
		document.getElementById("searchKey").focus();
	}

    //hide search div
	function closeSearchDiv(){
		$("#searchDiv").hide();
	}

    
    //searching function
	function searchAlgorithm(){
		search_key = document.getElementById("searchKey");
		string = "";
        k = false;

        //while loop
        i=0;
		while ( i<card_text.length){
			val = (card_text[i].innerHTML).toLowerCase();
            console.log(search_key.value);
			if(search_key.value === '') {
			}
			else if(val.search((search_key.value).toLowerCase()) >= 0){
				k = true;
				
				string =  string +
				         "<div class='card col-md-3 m-3 col-sm-6'>" +
				            "<img src='"+ img[i].src +"' class='card-img-top' alt=''>" +
                            "<div class='card-body'>" +
                                "<p class='card-text'>" + card_text[i].innerHTML  + "</div>" +
                                "<div class='btn-group'> " +
                                    "<button type='button' class='btn btn-sm btn-outline-secondary'>"+ card_price[i].innerHTML +"</button>" +
                                
                                "</div>" + 
                                "<a href='#' data-toggle='modal' data-target='#contactModal' class='btn btn-primary mt-2 mb-2'>Contact Us</a>" +       
                            "</div>" +
				         "</div>";
			}//end of if
			i=i+1;
	    }//end of for

	    if(k === true){
	         document.getElementById("displayOutput").innerHTML = string;
	    }
	    else{
	    	document.getElementById("displayOutput").innerHTML = "<div class='col-lg-12 text-center text-white'><p><h2>No Toy Found!</h2></p></div>";
	    }
	}//end of function
