let userInput = document.getElementById('input-date');
userInput.max = new Date().toISOString().split('T')[0];

const calculateAge = () => {
    let userBirthDate = new Date(userInput.value);

    let userBirthday = userBirthDate.getDate(); // Corrected function call
    let userBirthMonth = userBirthDate.getMonth() + 1; // Corrected function call
    let userBirthYear = userBirthDate.getFullYear(); // Corrected function call

    let currentDate = new Date();

    let currentDay = currentDate.getDate(); // Corrected function call
    let currentMonth = currentDate.getMonth() + 1; // Corrected function call
    let currentYear = currentDate.getFullYear(); // Corrected function call

    let dayDifference, monthDifference, yearDifference;
    yearDifference = currentYear - userBirthYear;

    if (currentDay >= userBirthday) {
        dayDifference = currentDay - userBirthday;
    } else {
        monthDifference--;
        dayDifference = getDaysInMonth(userBirthMonth, userBirthYear) + currentDay - userBirthday;
    }
    
    if (currentMonth >= userBirthMonth) {
        monthDifference = currentMonth - userBirthMonth;
    } else {
        yearDifference--;
        monthDifference = 12 + currentMonth - userBirthMonth;
    };
    if(monthDifference < 0){
        monthDifference = 11;
        monthDifference--;
    };

    console.log(yearDifference, monthDifference, dayDifference);
    let result = document.getElementById('result');
    result.innerHTML = `You are <span>${yearDifference}</span> years, <span>${monthDifference}</span> months, and <span>${dayDifference}</span> days old.`
}

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate(); // Corrected function call
}


