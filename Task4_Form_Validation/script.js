document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        document.getElementById('successBox').style.display = 'flex';
    }
});

const nameInput = document.getElementById('n');
const emailInput = document.getElementById('e');
const phoneInput = document.getElementById('p');
const messageInput = document.getElementById('m');

// Event Listeners for real-time validation
nameInput.addEventListener('blur', validateName);
nameInput.addEventListener('input', validateName);

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', validateEmail);

phoneInput.addEventListener('blur', validatePhone);
phoneInput.addEventListener('input', validatePhone);

messageInput.addEventListener('blur', validateMessage);
messageInput.addEventListener('input', validateMessage);

function validateName() {
    const val = nameInput.value.trim();
    if (val.length < 3) {
        setError(nameInput);
        return false;
    } else {
        setSuccess(nameInput);
        return true;
    }
}

function validateEmail() {
    const val = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(val)) {
        setError(emailInput);
        return false;
    } else {
        setSuccess(emailInput);
        return true;
    }
}

function validatePhone() {
    const val = phoneInput.value.trim();
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(val)) {
        setError(phoneInput);
        return false;
    } else {
        setSuccess(phoneInput);
        return true;
    }
}

function validateMessage() {
    const val = messageInput.value.trim();
    if (val.length < 10) {
        setError(messageInput);
        return false;
    } else {
        setSuccess(messageInput);
        return true;
    }
}

function setError(input) {
    const group = input.closest('.input-group');
    group.classList.remove('success');
    group.classList.add('error');
}

function setSuccess(input) {
    const group = input.closest('.input-group');
    group.classList.remove('error');
    group.classList.add('success');
}

function resetFormState() {
    // Reset Form fields
    document.getElementById('contactForm').reset();
    
    // Hide Success Box
    document.getElementById('successBox').style.display = 'none';
    
    // Remove class list
    const groups = document.querySelectorAll('.input-group');
    groups.forEach(group => {
        group.classList.remove('success', 'error');
    });
}