// Original Object
const employeeOne = {
  name: "Rajesh Sharma",
  age: 25,
  department: {
    name: "IT",
    location: "New York",
  },
};

// Create Deep Copy
const employeeTwo = JSON.parse(JSON.stringify(employeeOne));

// Modify copied object
employeeTwo.department.name = "HR";
employeeTwo.department.location = "New Delhi";

// Print Results
try {
  console.log("Employee One:", employeeOne);
  console.log("Employee Two:", employeeTwo);
} catch {
  console.error("Please read the instructions carefully and try again");
}