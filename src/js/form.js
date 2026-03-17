const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

let formdata = { email: "", message: "" };

const saveDatad = localStorage.getItem(STORAGE_KEY);
if (saveDatad) {
    formdata = JSON.parse(saveDatad);

    form.elements.email.value = formdata.email ?? "";
    form.elements.message.value = formdata.message ?? "";
}

form.addEventListener('input', (event) => {
    const fieldName = event.target.name;

    formdata[fieldName] = event.target.value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formdata));
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formdata.email || !formdata.message) {
        alert("Fill please all fields");
        return;
    }
    
    console.log(formdata);
    
    localStorage.removeItem(STORAGE_KEY);
    formdata = { email: "", message: "" };
    form.reset();
});




