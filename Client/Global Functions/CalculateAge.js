/*
    Script Name:   CalculateAge
    Customer:      VisualVault
    Purpose:       This function takes in a first date (usually birthdate) and a second date (usually today's date) for calculating age.  
    Parameters:    The following represent variables passed into the function:  
                   firstDateParam       First date as a string from getFieldValue
                   secondDateParam      Second date as a string

    Return Value:  The following represents the value being returned from this function:
                        age:  Returns a number that represents the age.


    Date of Dev: 12/07/2018
    1st Rev Date: 10/10/2019
    Last Rev Date: 25/04/2022

    Revision Notes:
    12/07/2018 - Jason Hatch: Initial creation of the business process. 
    10/10/2019 - Jason Hatch: Add header.
    25/04/2022 - Facundo Cameto:    Updated variable names
                                    Added comments explaining the code
                                    Updated variable definitions
    
    Considerations:
     -This is designed to work with the local time of the customer's computer.
     -Last revision removed the parameter containing the current date information. Previous calls to this function
     have both parameters, now only the birth date parameter is needed although having both won't cause any issues.
     -Counts end day, does not count start day.
     -Doesn't include validation for different formats of dates
       It calculates in these formats MM/DD/YYYY, M/D/YYYY/ M/DD/YYYY or MM/D/YYYY
*/

/* PARAMETER EXAMPLES
firstDateParam = "February 15, 2002";
secondDateParam = "February 15, 2022";
Result in this case is 20
*/

// Transform dates string to date format
const firstDate = new Date(firstDateParam);
const secondDate = new Date(secondDateParam);

// Get day, month and year from second date
const today_year = secondDate.getFullYear();
const today_month = secondDate.getMonth();
const today_day = secondDate.getDate();

// Calculate age
let age = today_year - firstDate.getFullYear();

// Decrease a year if second date is not first date yet
if (today_month < firstDate.getMonth()) {
    age--;
}
if (firstDate.getMonth() == today_month && today_day < firstDate.getDate()) {
    age--;
}

// Return calculated time in years
return age;
