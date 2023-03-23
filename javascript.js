const submit=document.querySelector('#submit');
const form=document.querySelector('#register');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const formData=new FormData(form);
    const values=[...formData.entries()];
    console.log(values);
});