const countryDropdown = document.getElementById("Country");
const countries = ["USA", "Canada", "UK", "Australia", "India"]; 
countries.forEach(countryName => {
    const option = document.createElement("option");
    option.value = countryName;
    option.textContent = countryName;
    countryDropdown.appendChild(option);
});
function uncheckOtherCheckboxes(clickedCheckbox) {
    const checkboxes = document.getElementsByName("Gender");
    checkboxes.forEach(checkbox => {
        if (checkbox !== clickedCheckbox) {
            checkbox.checked = false;
        }
    });
}
function submitForm(){
    const firstName=document.getElementById("FirstName").value;
    const lastName=document.getElementById("LastName").value;
    const dob=document.getElementById("DateOfBirth").value;
    const country=document.getElementById("Country").value;
    const Gender=document.getElementsByName("Gender");
    const selectedGender = Array.from(Gender).filter(element => element.checked).map(element => element.value);
    const profession=document.getElementById("Profession").value;
    const mobile=document.getElementById("mobile").value;
    const email=document.getElementById("email").value;

    if (!firstName || !lastName || !dob || !country || selectedGender.length === 0 || !profession || !email || !mobile) {
        alert("Please fill in all required fields.");
        return;
    }

    const message = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${selectedGender.join(", ")}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobile}`;
    alert(message);

    resetForm();
}
function resetForm(){
    document.getElementById("Survey").reset();
}
