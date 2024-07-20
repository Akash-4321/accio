let employees = [
    {id: 1, name: "john", age: "18", profession: "developer"},
    {id: 2, name: "jack", age: "20", profession: "developer"},
    {id: 3, name: "karen", age: "19", profession: "admin"}
];

function PrintDeveloperbyMap() {
    employees.map(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function addData() {
    let newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"};
    employees.push(newEmployee);
    console.log(employees);
}

function removeAdmin() {
    employees = employees.filter(employee => employee.profession !== "admin");
    console.log(employees);
}

function ConcatinateArray() {
    let newEmployees = [
        {id: 5, name: "alice", age: "22", profession: "designer"},
        {id: 6, name: "bob", age: "25", profession: "manager"},
        {id: 7, name: "charlie", age: "23", profession: "developer"}
    ];
    let concatenatedArray = employees.concat(newEmployees);
    console.log(concatenatedArray);
}


