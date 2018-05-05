(function () {
    let dateOne = '2010-01-03',
        dateTwo = '2018-05-05',
        baseLine = 0,
        endLine = 0,
        totalDays = 0;
    
    // Unmutuable since it contains unchangeable data.
    const yearOne = parseInt(dateOne.substring(0, 4)),
        monthOne = parseInt(dateOne.substring(5, 7)),
        dayOne = parseInt(dateOne.substring(8, 10)),
        yearTwo = parseInt(dateTwo.substring(0, 4)),
        monthTwo = parseInt(dateTwo.substring(5, 7)),
        dayTwo = parseInt(dateTwo.substring(8, 10));

    // Calculates if the year is a leap year.
    function leapYear(year) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    }

    // Calculates the days from year and subtract input one from input two.
    function yearToDays() {
        if (yearOne > yearTwo) {
            totalDays += (yearOne - yearTwo) * 365;
        } else {
            totalDays += (yearTwo - yearOne) * 365;
        }
    }

    // Cycle through each year from the first and increment until second year is reached to calculate all the years between the range.
    function getYearToDays() {
        for (var a = yearOne; a <= yearTwo; a++) {
            totalDays += leapYear(a);
        }
    }

    // Subtract the first input number of days from the second input number of days for the months.
    function monthsToDays() {
        // set days for each month: September, April, June, and November have 30 and the rest have 31.
        // add previous month days to each month afterwards to calculate all the months to that point.
        // Ex, May would be Jan, Feb, Mar, Apr, and May total of days.
        switch (monthOne) {
            case 01:
                baseLine += 31;
                break;
            case 02:
                baseLine += 59;
                break;
            case 03:
                baseLine += 90;
                break;
            case 04:
                baseLine += 120;
                break;
            case 05:
                baseLine += 151;
                break;
            case 06:
                baseLine += 181
                break;
            case 07:
                baseLine += 212;
                break;
            case 08:
                baseLine += 242;
                break;
            case 09:
                baseLine += 272;
                break;
            case 10:
                baseLine += 303;
                break;
            case 11:
                baseLine += 333;
                break;
            case 12:
                baseLine += 364;
                break;
        }

        switch (monthTwo) {
            case 01:
                endLine += 31;
                break;
            case 02:
                endLine += 59;
                break;
            case 03:
                endLine += 90;
                break;
            case 04:
                endLine += 120;
                break;
            case 05:
                endLine += 151;
                break;
            case 06:
                endLine += 181;
                break;
            case 07:
                endLine += 212;
                break;
            case 08:
                endLine += 242;
                break;
            case 09:
                endLine += 272;
                break;
            case 10:
                endLine += 303;
                break;
            case 11:
                endLine += 333;
                break;
            case 12:
                endLine += 364;
                break;
        }

        if (monthOne > monthTwo) {
            totalDays += baseLine - endLine;
        } else {
            totalDays += endLine - baseLine;
        }
    }

    // Calculate Days by subtracting input one from input two and then adding it to the totalDays variable.
    function getDays() {
        // Subtract days from total.
        baseLine -= dayOne;
        endLine -= dayTwo;

        if (dayOne > dayTwo) {
            totalDays += dayOne - dayTwo;
        } else {
            totalDays += dayTwo - dayOne;
        }
    }

    getYearToDays();
    yearToDays();
    monthsToDays();
    getDays();

    console.log('total days after switch', totalDays);
})();