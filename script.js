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
    var resumeHTML = "\n    <h1><b>Editable Resume</b></h1>\n    <h2>Personal Information</h2>\n    <p><b>Name: </b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Father Name: </b><span contenteditable=\"true\"> ").concat(fatherName, "</span></p>\n    <p><b>Contact: </b><span contenteditable=\"true\"> ").concat(contact, "</span></p>\n    <p><b>Email: </b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n    <p><b>Gender: </b><span contenteditable=\"true\"> ").concat(gender, "</span></p>\n\n    <h2>Education</h2>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    \n    \n    <h2>Experience</h2>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    \n    <h2>Skills</h2>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
