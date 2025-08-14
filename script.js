document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission (page reload)

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const experience = parseInt(document.getElementById('experience').value);
    const skills = document.getElementById('skills').value.toLowerCase();
    const coverLetter = document.getElementById('coverLetter').value;

    const resultDiv = document.getElementById('result');

    // Simple "hiring" logic
    let isHired = false;
    if (experience >= 3 && skills.includes('javascript')) {
        isHired = true;
    }

    // Display the result
    resultDiv.classList.remove('hidden', 'hired', 'not-hired');
    if (isHired) {
        resultDiv.classList.add('hired');
        resultDiv.innerHTML = `
            <p><strong>Congratulations, ${fullName}!</strong></p>
            <p>Your application has been accepted. We will contact you shortly at ${email} for the next steps.</p>
        `;
    } else {
        resultDiv.classList.add('not-hired');
        resultDiv.innerHTML = `
            <p><strong>Thank you for your application, ${fullName}.</strong></p>
            <p>After careful consideration, we have decided not to move forward with your application at this time. We wish you the best in your job search.</p>
        `;
    }
});