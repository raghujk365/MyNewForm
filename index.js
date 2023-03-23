let usersList = localStorage.getItem('usersList');
  
if(usersList === null){
	localStorage.setItem('usersList','[]');
	usersList = [];
}
else {
	usersList = JSON.parse(usersList);
}
//HTML Elements
const form = document.querySelector('#register');
const submit = document.querySelector('#submit');
const showDetails = document.querySelector('#show_details');
const data_el = document.querySelector('.data');
submit.addEventListener('click',(e) =>{
	//prevent form submission
	e.preventDefault();

	//show the form values
	const formData = new FormData(form);
	const values = [...formData.entries()];
	console.log(values);

	//Convert to object
	const valuesObj = Object.fromEntries(values);
	usersList.push(valuesObj);
	localStorage.setItem('usersList', JSON.stringify(usersList));
});

function displayData() {

	let users = JSON.parse(localStorage.getItem('usersList'));
	 
	if (users === null || users.length === 0) {

		alert('No Users in Database');
	}  else {

		console.log('Number of users =' + users.length);

		data_el.innerHTML = '<h3>USER DETAILS</h3>';
		users.forEach((user,idx) => {
			data_el.innerHTML += `<p>USER ${idx+1}</p>`;
				
			for (const field in user) {
		       data_el.innerHTML +=`<p>${field.toUpperCase()} : ${user[field]}</p>`;

			}
		});
	}
}


showDetails.addEventListener('click', displayData());
