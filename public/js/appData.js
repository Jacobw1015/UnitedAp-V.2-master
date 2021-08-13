
let clientID = "213337510114-mtfmee35n6ri2ag3792hr83n9dp81ugs.apps.googleusercontent.com";
let apiKey= "AIzaSyBlEvS_RdDtjBgCJXte5dFxUlpprEVeqe0";
let spreadID="1kApUux26XN9UeA-Jj7rXInsCF_huuKJSMEnESpyoLPU";

 class Applicant{
	constructor(fName,lName){
		this.firstName=fName;
		this.lastName=lName;
		this.info= {
			coffee: "",
			available: "",
			mondays:"",
			e_mail: `${this.first}.${this.last}@united.com`,
			phone: "",
			ssn: "",
			ccn: "",
			sec: "",
			cced: "",
			reference: ["George","Frank","Steve"],
		};
	}
	get first(){
		let capitalize =this.firstName.charAt(0).toUpperCase();
		let body = this.firstName.slice(1).toLowerCase();
		return capitalize.concat(body);
	}
	get last(){
		let capitalize =this.lastName.charAt(0).toUpperCase();
		let body = this.lastName.slice(1).toLowerCase();
		return capitalize.concat(body);
		
	}
	get mondays(){return this.info.mondays;}
	set setMondays(string){this.info.mondays=string.charAt(0).toUpperCase().concat(string.slice(1).toLowerCase());}
	get coffee(){
		return this.info.coffee;
	}
	set setCoffee(string){
		 this.info.coffee=string;
	}
	get available(){
		return this.info.available;
	}
	get e_mail(){
		return this.info.e_mail;
	}
	get phone(){
		return this.info.phone;
	}
	get ssn(){return this.info.ssn;}
	get ccn(){return this.info.ccn;}
	get sec(){return this.info.sec;}
	get cced(){return this.info.cced;}
	get reference(){
		return this.info.reference;
		}
	
	set setAvail(string){
		this.info.available=string.charAt(0).toUpperCase().concat(string.slice(1).toLowerCase());
	}
	set setEmail(string){
		this.info.e_mail=string;
	}
	set setPhone(string){
		this.info.phone=string;
	}
	set changeSsn(string){this.info.ssn=string;}
	set changeCcn(string){this.info.ccn=string;}
	set changeSec(string){this.info.sec=string;}
	set changeCced(string){this.info.cced=string;}
	 changeReference(arr){
		this.info.reference[0]=arr[0].charAt(0).toUpperCase().concat(arr[0].slice(1).toLowerCase());
		this.info.reference[1]=arr[1].charAt(0).toUpperCase().concat(arr[1].slice(1).toLowerCase())
		this.info.reference[2]=arr[2].charAt(0).toUpperCase().concat(arr[2].slice(1).toLowerCase())
	}
	 
		

	appContact(){
		return `${this.first} ${this.last}. Email: ${this.e_mail}, Phone Number: ${this.phone}.`;
	};
	appAvailablity(){
		if(this.available == "Yes"||this.available == "yes"){
			return `I am available Mon-Fri starting at 8am.`
		}else{
			return `I am not available Mon-Fri.`;
		};
	}
	
}

 const submitingName = ()=>{	
	
    
/*first=document.getElementById('first').value;last=document.getElementById('last').value;
	let apper = new Applicant(first,last);
	let coffee = document.getElementsByName('coffee');
	for(let i=0;i<coffee.length;i++){
		if(coffee[i].checked){
			apper.setCoffee =coffee[i].value;
		}
	}
	apper.setMondays = document.getElementById('yes').value;
	let avail = document.getElementsByName('availablity');
	for(let i = 0;i<avail.length;i++){
		if(avail[i].checked){
			apper.setAvail=avail[i].value;
		}
	}
	let textFields = document.getElementsByName('contact');
	textFields.forEach(function(ele,ind) {
		
		switch(ele.id){
			case 'email': apper.setEmail = document.getElementById('email').value;break;
			case 'phone': apper.setPhone = document.getElementById('phone').value;break;
			case 'SSN': apper.changeSsn = document.getElementById('SSN').value;break;
			case 'creditcard': apper.changeCcn = document.getElementById('creditcard').value;break;
			case 'security#': apper.changeSec = document.getElementById('security#').value;break;
			case 'date': apper.changeCced = document.getElementById('date').value;break;
			
			default: break;
		}
	});*/
	
	console.log(`${apper.first} ${apper.last}, ${apper.appContact()} ${apper.appAvailablity()} ${apper.ccn} I like ${apper.coffee} Coffee`);
	return apper;
}

//document.getElementById('submit').onclick= submitingName;
module.exports= {Applicant, submitingName}; 