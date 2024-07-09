// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // take in one employee as argument
  // initialize (set = 0) each variable
  console.log(employee);
  let bonusPercentage = 0;
  let totalCompensation = 0
  let totalBonus = 0
  // do calculations based upon the input values from the employee object
    // if rating 2 or below, no bonus
    if (employee.reviewRating <= 2){
      bonusPercentage = 0;
      totalBonus = 0;
      totalCompensation = employee.annualSalary;
      console.log(employee.name, bonusPercentage, totalBonus, totalCompensation);
    }
    // if rating of 3, 4% bonus
    else if
    // if rating of 4, 6% bonus
    // if rating of 5, 10% bonus
    //AND  if ID is 4 digits, additional 5%  -- this only affects a rating of 5
    // AND if income > $65000, bonus adjusted down 1%  -- but not if bonus is 0

  // create a new object to host name, bonusPercentage, totalCompensation, and totalBonus
  
  // return new object with bonus results

}
let testEmployee = {
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 2
}


calculateIndividualEmployeeBonus(testEmployee);