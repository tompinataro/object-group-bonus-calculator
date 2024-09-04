// array of employee objects
// Each **Employee** currently is configured in this way:

// * The `name` property holds the employee's name.
// * The `employeeNumber` property has their employee number.
// * The `annualSalary` property contains their base annual salary.
// * The `reviewRating` property contains their review rating.

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
  //console.log('array of employee data: ',  employees );

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee){  
  
 // for (let i = 0; i < employees.length; i++){
    
 //   let employee = employees[i];
    let employeeBonus = 0;
  console.log(employee[i]);
  

  if (employee.reviewRating <= 2) {
    employeeBonus = 0;
  }
  //console.log("Employee doesn't receive bonus.");

  //calculateIndividualEmployeeBonus(employees);

    else if (employee.reviewRating === 3) {
        employeeBonus = 0.04;
      }
    
  //   //    (console.log("Employee bonus = 4%."));
       else if (employee.reviewRating === 4) {
          employeeBonus = 0.06;
     }  
        else (employee.reviewRating === 5);{
          employeeBonus = .10;
  }
}

 
  
                  // return new object with bonus results


                  // ### Individual Bonus Rules

                  // - Those who have a rating of a 2 or below should not receive a bonus.
                  // - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
                  // - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
                  // - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.


                  // - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
                  // and should receive an additional 5%.
// If (employeeNumber.length === 4) {
  //   employeeBonus += .05;
  // };
                  // - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// if (employee.AnnualSalary >= $65,000) {
//    employeeBonus -= .01
// };
                  // - No bonus can be above 13% or below 0% total.
// if (employeeBonus >= .13){
// employeeBonus = .13};

// ## A Loop to Process Bonuses

// Loop over the `employees` array and do the following:

// * use each employee object as the input to the function described below.
// * `console.log` the results of each iteration.
//     - The `log` should be in the loop, not the function.

// ## The Bonus Calculation Function

// Write a declared function that takes in one **Employee** object (as an argument to the function), and `return` a new **object** with the following properties. _Note these properties are different than the ones you start with!_

// * The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.


