const parentCard = document.getElementsByClassName('parentCardDiv')[0];
const mainDiv = document.getElementsByClassName("main-div")[0];
parentCard.style.display="none";

const signedIn = () => {
    const value = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('phone').value.trim();
    const passwd = document.getElementById('password').value.trim();
    const img = document.getElementById('img').files[0];

    if(!value || !email || !passwd || !number || !img){
        alert("Please enter all the details!")
        return;
    }

    // Name validation (only letters and spaces, min length 2, max length 50)
    const namePattern = /^[A-Za-z\s]{2,50}$/;
    if (!namePattern.test(value)) {
        alert('Invalid name. Please enter a valid name (only letters and spaces, 2-50 characters).');
        return;
    }

    // Email validation (simple regex pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Invalid email. Please enter a valid email address.');
        return;
    }

    // Phone validation (exactly 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(number)) {
        alert('Invalid phone number. Please enter a valid 10-digit phone number.');
        return;
    }

    // Additional validation for profile picture (example: file size and type)
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxFileSize = 2 * 1024 * 1024; // 2 MB

    if (!allowedTypes.includes(img.type)) {
        alert('Invalid file type. Please upload an image file (jpeg, png, gif).');
        return;
    }

    if (img.size > maxFileSize) {
        alert('File size exceeds 2 MB. Please upload a smaller file.');
        return;
    }

    document.getElementById('cardImg').src = URL.createObjectURL(img);
    document.getElementById('nameVal').textContent = value;
    document.getElementById('emailVal').textContent = email;
    document.getElementById('numberVal').textContent = number;

    mainDiv.style.display="none";
    parentCard.style.display="flex";
}

const loginBtn = () => {
    const item = document.getElementsByClassName('spanTag')[0];
    const h1 = document.getElementsByClassName('signInHead')[0];
    const number = document.getElementById('phone');
    const phLabel = document.getElementById('phoneLabel');
    const img = document.getElementById('img');
    const value = document.getElementById('name');
    const nameLabel = document.getElementById('nameLabel');
    const hideIcon = document.getElementsByClassName('hideIcon')[0];
    const signBtn = document.getElementsByClassName('sign-btn')[0];
    const googleBtn = document.getElementsByClassName('g-btn')[0];

    if(item.textContent === "Login"){
        item.textContent = "Sign Up";
        h1.textContent = "Sign In";
        signBtn.textContent = "Sign In";
        googleBtn.textContent = "Sign In with google";
        number.style.display = "none";
        img.style.display = "none";
        phLabel.style.display = "none";
        value.style.display= "none";
        nameLabel.style.display = "none";
        hideIcon.style.display = "none";
    }else{
        item.textContent = "Login";
        h1.textContent = "Create an Account";
        signBtn.textContent = "Sign Up";
        googleBtn.textContent = "Sign Up with google";
        number.style.display = "block";
        img.style.display = "block";
        phLabel.style.display = "block";
        value.style.display = "block";
        nameLabel.style.display = "block";
        hideIcon.style.display = "block";
    }
    
}