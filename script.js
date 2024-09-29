var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('fatherName').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h1><b>Resume</b></h1>\n    <h2>Personal Information</h2>\n    <p><b>Name: </b> ".concat(name, "</p>\n    <p><b>Father Name: </b> ").concat(fatherName, "</p>\n    <p><b>Contact: </b> ").concat(contact, "</p>\n    <p><b>Email: </b> ").concat(email, "</p>\n    <p><b>Gender: </b> ").concat(gender, "</p>\n\n    <h2>Education</h2>\n    <p>").concat(education, "</p>\n    \n    \n    <h2>Experience</h2>\n    <p>").concat(experience, "</p>\n    \n    <h2>Skills</h2>\n    <p>").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
