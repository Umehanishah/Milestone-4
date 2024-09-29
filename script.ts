const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const fatherName = (document.getElementById('fatherName') as HTMLInputElement).value
    const contact = (document.getElementById('contact') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const gender = (document.getElementById('gender') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    const resumeHTML = `
    <h1><b>Resume</b></h1>
    <h2>Personal Information</h2>
    <p><b>Name: </b> ${name}</p>
    <p><b>Father Name: </b> ${fatherName}</p>
    <p><b>Contact: </b> ${contact}</p>
    <p><b>Email: </b> ${email}</p>
    <p><b>Gender: </b> ${gender}</p>

    <h2>Education</h2>
    <p>${education}</p>
    
    
    <h2>Experience</h2>
    <p>${experience}</p>
    
    <h2>Skills</h2>
    <p>${skills}</p>
    `;

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML =resumeHTML;
    } else{
        console.error('The resume display element is missing.');
    }

});