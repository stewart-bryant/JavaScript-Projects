const getInput = require('node:readline/promises').createInterface({
    input: process.stdin,
    output: process.stdout
});

const getDates = async () => {
    let month = await getInput.question('What is the month (1 to 12)?\n');
    while (!validateMonth(month)) {
        console.log(`The month ${month} is invalid. Try again`);
        month = await getInput.question('What is the month (1 to 12)?\n')
    }; 

    let day = await getInput.question('What is the day (1 to 31)?\n');
    while (!validateDay(day)) {
        console.log(`The day ${day} is invalid. Try again`);
        day = await getInput.question('What is the day (1 to 31)?\n')
    };
    
    let year = await getInput.question('What is the year (e.g. 2007)?\n');
    while (!validateYear(year)) {
        console.log(`The year ${year} is invalid. Try again`);
        year = await getInput.question('What is the year (AD)?\n')
    };

    const totalDays = await calculateDays(+month, +day, +year);
    const dayOfTheWeek = dayOfWeek(totalDays);
    console.log(`Total Days Past ${totalDays}`);
    console.log(`Your date falls on a ${dayOfTheWeek}`);
    getInput.close();
};

getDates();


// validate number 1 - 12
const validateMonth = (month) => {
    return !isNaN(month) && +month >= 1 && +month <= 12;
};


// validate number 1 - 31
const validateDay = (day) => {
    return !isNaN(day) && +day >= 1 && +day <= 31;
};

// validate number 1 - 31
const validateYear = (year) => {
    return !isNaN(year) && +year >= 0;
};

// determine if leap year
// Every 4 years is a leap year
// Every 100 years a leap year is skipped unless the year is divisible by 400
const isLeapYear = (year) => {
    return (year % 100 === 0) ? ( year % 400 === 0) : (year % 4 === 0);
};

// years*days + month*days + day
const calculateDays = (month, day, year) => {
    let days = day;

    // calculate days in each year up to input year and add to days
    for (let i = 1; i < year; i++) {
        isLeapYear(i) ? days += 366 : days += 365;
    }

    // calculate days in each month up to input month and add to days
    const monthDays = {
        1: 31,
        2: isLeapYear(year) ? 29 : 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    for (let i = 1; i < month; i++) {
        days += monthDays[i];
    }

    return days;
};

const dayOfWeek = (days) => {
    const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let dayNum = (days - 1) % 7;

    switch (dayNum) {
        case 0:
            return daysOfTheWeek[0];
        case 1:
            return daysOfTheWeek[1];
        case 2:
            return daysOfTheWeek[2];
        case 3:
            return daysOfTheWeek[3];
        case 4:
            return daysOfTheWeek[4];
        case 5:
            return daysOfTheWeek[5];
        case 6:
            return daysOfTheWeek[6];
    }
};

