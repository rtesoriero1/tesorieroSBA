/**
 * This Block is for the Trivia game answers, it displays messages based on the answers given.  
 */
 
 function answerQuestion1(){
	 let answer = prompt("Please answer: True or False.");
		
	if (answer === "True" || answer === "true"){
		
		 document.getElementById("demo1").innerHTML = "That's correct!";
		
	} else if (answer === "False" || answer === "false") {
		
		 document.getElementById("demo1").innerHTML = "Sorry, that's incorrect!";
		
	} else {
		document.getElementById("demo1").innerHTML = "Invalid response, please try again!";
		
		
	}
	}
	
	
 function answerQuestion2(){
	 let answer = prompt("Please answer: True or False.");
		
	if (answer === "True" || answer === "true"){
		
		  document.getElementById("demo2").innerHTML = "Sorry, that's incorrect!";
		
	} else if (answer === "False" || answer === "false") {
		
		 document.getElementById("demo2").innerHTML = "That's correct!";
	} else {
		document.getElementById("demo2").innerHTML = "Invalid response, please try again!";
		
		
	}
	}
	
	
	 function answerQuestion3(){
	 let answer = prompt("Please answer: A, B, C, or D.");
		
	if (answer === "D" || answer === "d"){
		
		 document.getElementById("demo3").innerHTML = "That's correct!";
		
	} else if (answer === "A" || answer === "a" || answer === "B" || answer === "b" || answer === "C" || answer === "c") {
		
		 document.getElementById("demo3").innerHTML = "Sorry, that's incorrect!";
		
	} else {
		document.getElementById("demo3").innerHTML = "Invalid response, please try again!";
		
		
	}
	}
	
	
	function answerQuestion4(){
	 let answer = prompt("Please answer: A, B, C, or D.");
		
	if (answer === "B" || answer === "b"){
		
		 document.getElementById("demo4").innerHTML = "That's correct!";
		
	} else if (answer === "A" || answer === "a" || answer === "D" || answer === "d" || answer === "C" || answer === "c") {
		
		 document.getElementById("demo4").innerHTML = "Sorry, that's incorrect!";
		
	} else {
		document.getElementById("demo4").innerHTML = "Invalid response, please try again!";
		
		
	}
	}
	
	/**
 * This is for the About me drop down section, it displays text related to the selected choice. 
 */
	
	

	function aboutDropBox(about){
		var select = about.options[about.selectedIndex].innerHTML;
		var value = about.value;
		
		if (value === "creator") {
			document.getElementById("about1").innerHTML = 
			"Mitchell Kriegman (born June 4, 1952) is an American television writer, director, producer, consultant, story editor, author, composer and actor. Kriegman created the Emmy Award-winning television series, Bear in the Big Blue House (1997), and created and directed, The Book of Pooh (2001), based on the Milne books, both in association with the Disney Channel. Cast with bunraku puppets, both series employed Kriegman's shadowmation technique which he invented.";
		
		} else if (value ==="serial") {
			document.getElementById("about1").innerHTML = " Bear in the Big Blue House premiered on Disney Channel's  Playhouse Disney preschool television block on October 20, 1997 and it aired its last episode on April 28, 2006 after running for 4 seasons. Reruns of the program continued to air on Playhouse Disney until May 6, 2007.";
			
			
		} else if (value === "inspiration") {
			document.getElementById("about1").innerHTML = "Bear in the Big Blue House provides children with valuable tools for growth in key areas of music, social skill development, and cognitive learning through integrated programs combining music, movement, and exploration. With Bear and all his friends, learn about cooperation, and teamwork.";
			
			
		} else {
			document.getElementById("about1").innerHTML = "";
		}
		
	
	}


/**
 * This Block is to validate the newsletter sign up, using regex for the email as an extra step through the validate email function 
 */
 
function validate(event){
	
	if(document.newsletter.Name.value == "") {
		alert("Please Provide your full name!");
		event.preventDefault();
		return false;
	}else {
		var fullName = document.getElementById("nameID").value;
	}
	
	
	if(document.newsletter.Country.value == "Default") {
		alert("Please select a Country!");
		event.preventDefault();
		return false;
	}else {
		var country = document.getElementById("countryID").value;
	}
	
	
	
	if(document.newsletter.Email.value == "") {
		alert("Please Provide your Email!");
		event.preventDefault();
		return false;
	}else {
		console.log(validateEmail());
		if(validateEmail()== true){
			
			
		var Email = document.getElementById("emailID").value;
		return true;
		} else {
			alert("The function is false");
			event.preventDefault();
			return false;
		}
	}		
}

function validateEmail(){
	var emailID = document.newsletter.Email.value; 
	atposition = emailID.indexOf("@");
	dotposition = emailID.lastIndexOf(".");
	let positionCheck = true; 
	if (atposition < 1 || (dotposition - atposition < 2) ) {
		positionCheck = false; 
	}
	
	
	regexCheck= true; 
	let regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
	if(!regex.test(emailID)){
		regexCheck = false;
	}
	
	if (positionCheck && regexCheck){
		return true
	} else {
		return false;
	}
}



/**
 * This Block is for the review form, it makes sure something is actually written
 */
 

function addReview(){
	let placeholder = document.getElementById("review1");
	let placeholder_text = placeholder.innerText;
	let newReview = document.getElementById("reviewID");
	let newReview_text = newReview.value;
	if (document.reviewWriter.Review.value === ""){
		alert("Please write a review!");
	
} else {
	placerholder.innerText = newReview_text;
}
}



function postReview(){
	
	document.getElementById("review1").innerHTML = document.reviewWriter.Review.value;

}


 /**
 * This Block is how we get collected form information for display
 */

function getName(){
	var idx = document.URL.indexOf('?');
			var params = new Array();
			if (idx != -1) {
				var pairs = document.URL
						.substring(idx + 1, document.URL.length).split('&');
				for (var i = 0; i < pairs.length; i++) {
					nameVal = pairs[i].split('=');
					params[nameVal[0]] = nameVal[1];
				}
			}
			return params;
		}
 

params = getName(); 
name = decodeURI(params["Name"]);
review= decodeURI(params["Review"]); 
 