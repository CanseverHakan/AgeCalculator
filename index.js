const resultD = document.querySelector('.days-calc');
const resultM = document.querySelector('.months-calc');
const resultY = document.querySelector('.years-calc');
const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');
const errorDays = document.querySelector('.errors-day');
const errorMonths = document.querySelector('.errors-month');
const errorYears = document.querySelector('.errors-year');
const inputD = document.querySelector('.inputDays');
const inputM = document.querySelector('.inputMonths');
const inputY = document.querySelector('.inputYears');



//DATE
const currentDays = new Date();
const actualDays = currentDays.getDate();
const actualMonths = currentDays.getMonth() + 1;
const actualYears = currentDays.getFullYear();

//START
let inputDays = 0;
let inputMonths = 0;
let inputYears = 0;



//DAYS
document.querySelector('.btn-arrow').addEventListener('click', () => {
    inputDays = Number(inputD.value);
    if (inputDays >= actualDays && inputDays <= 31) {
        let daysCalc = (actualDays - inputDays) * (-1);
        resultD.textContent = daysCalc;
        errorDay.textContent = '';
        errorDay.style = 'none';
        errorDays.style = 'none';
        inputD.style = 'none';
    } else if (inputDays < actualDays && inputDays > 0) {
        daysCalc = (actualDays - inputDays);
        resultD.textContent = daysCalc;
        errorDay.textContent = '';
        errorDay.style = 'none';
        errorDays.style = 'none';
        inputD.style = 'none';
    } else if (inputDays < 0 || inputDays > 31) {
        daysCalc = 0;
        resultD.textContent = '- -';
        errorDay.textContent = 'Must be a valid day';
        errorDay.style.color = 'red';
        errorDays.style.color = 'red';
        inputD.style.borderColor = 'red';
    } else {
        resultD.textContent = '- -';
        errorDay.textContent = 'This field is required';
        errorDay.style.color = 'red';
        errorDays.style.color = 'red';
        inputD.style.borderColor = 'red';
    }
})

//MONTHS
document.querySelector('.btn-arrow').addEventListener('click', () => {
    inputMonths = Number(inputM.value);
    if (inputMonths >= actualMonths && inputMonths <= 12) {
        let monthsCalc = (actualMonths - inputMonths) * (-1);
        resultM.textContent = monthsCalc;
        errorMonth.textContent = '';
        errorMonth.style = 'none';
        errorMonths.style = 'none';
        inputM.style = 'none';
    } else if (inputMonths < actualMonths && inputMonths > 0) {
        monthsCalc = (actualMonths - inputMonths);
        resultM.textContent = monthsCalc;
        errorMonth.textContent = '';
        errorMonth.style = 'none';
        errorMonths.style = 'none';
        inputM.style = 'none';
    } else if (inputMonths < 0 || inputMonths > 12) {
        monthsCalc = 0;
        resultM.textContent = '- -';
        errorMonth.textContent = 'Must be a valid month'
        errorMonth.style.color = 'red';
        errorMonths.style.color = 'red';
        inputM.style.borderColor = 'red';
    } else {
        resultM.textContent = '- -';
        errorMonth.textContent = 'This field is required'
        errorMonth.style.color = 'red';
        errorMonths.style.color = 'red';
        inputM.style.borderColor = 'red';
    }
})

//YEARS
document.querySelector('.btn-arrow').addEventListener('click', () => {
    inputYears = Number(inputY.value);
    if (inputYears >= actualYears && inputYears <= actualDays) {
        let yearsCalc = (actualYears - inputYears);
        resultY.textContent = yearsCalc;
        errorYear.textContent = '';
        errorYear.style = 'none';
        errorYears.style = 'none';
        inputY.style = 'none';
    } else if (inputYears < actualYears && inputYears > 0) {
        yearsCalc = (actualYears - inputYears);
        resultY.textContent = yearsCalc;
        errorYear.textContent = '';
        errorYear.style = 'none';
        errorYears.style = 'none';
        inputY.style = 'none';
    } else if (inputYears < 0 || inputYears > actualYears) {
        yearsCalc = 0;
        resultY.textContent = '- -';
        errorYear.textContent = 'Must be in the past'
        errorYear.style.color = 'red';
        errorYears.style.color = 'red';
        inputY.style.borderColor = 'red';
    } else {
        resultY.textContent = '- -';
        errorYear.textContent = 'This field is required'
        errorYear.style.color = 'red';
        errorYears.style.color = 'red';
        inputY.style.borderColor = 'red';
    }
})

document.querySelector('.btn-arrow').addEventListener('click', () => {
    inputYears = Number(inputY.value);
    if (inputMonths === 2 && inputDays > 28) {
        daysCalc = 0;
        monthsCalc = 0;
        errorDay.textContent = '';
        errorMonth.textContent = '';
        errorDay.textContent = 'Must be a valid day';
        errorDay.style.color = 'red';
        errorDays.style.color = 'red';
        inputD.style.borderColor = 'red';
    } else if (inputMonths === 4 && inputDays > 30 || inputMonths === 6 && inputDays > 30 ||
        inputMonths === 9 && inputDays > 30 || inputMonths === 11 && inputDays > 30) {
        daysCalc = 0;
        monthsCalc = 0;
        errorDay.textContent = '';
        errorMonth.textContent = '';
        errorDay.textContent = 'Must be a valid day';
        errorDay.style.color = 'red';
        errorDays.style.color = 'red';
        inputD.style.borderColor = 'red';
    }
})





