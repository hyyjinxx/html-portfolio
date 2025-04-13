let hasDownloadedResume = false;
let downloadCount = 0; 


document.querySelector('.resume').addEventListener('click', function() {
    if (!hasDownloadedResume) {
       
        alert("Your resume is downloaded successfully!");
        hasDownloadedResume = true; 
    }
    let downloadCount = 0;

document.querySelector('.resume').addEventListener('click', function() {
    downloadCount++;
    
    document.getElementById('downloadCount').textContent = "Resume downloaded: " + downloadCount + " times";
});
    
    downloadCount++;
    
    document.getElementById('downloadCount').textContent = `Resume downloaded: ${downloadCount} times`;
});


function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

const greetingElement = document.getElementById("greeting");
const userName = "Allyson Wiedoff"; 
greetingElement.textContent = showGreeting(userName);


function daysUntilDeadline(deadline) {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const timeDiff = deadlineDate - currentDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return daysLeft;
}

const projectDeadline = "2025-06-30";
console.log("Days until project deadline: " + daysUntilDeadline(projectDeadline));