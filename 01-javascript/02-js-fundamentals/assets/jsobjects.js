students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printMe(students) {
    var data = [];

    students.forEach(function(student){
        var cohort = student.cohort;

        data.push(`Name: ${student.name} Cohort: ${cohort}`);
    });
    return data.join('\n');
}
printMe(students);
//Output should be 

//Name: Remy, Cohort: Jan
//Name: Genevieve, Cohort: March
//Name: Chuck, Cohort: Jan
//Name: Osmund, Cohort: June
//Name: Nikki, Cohort: June
//Name: Boris, Cohort: June




//Challenge #2 
//EMPLOYEES
//1 - JONES, MIGUEL - 11
//2 - BERTSON, ERNIE - 12
//3 - LU, NORA - 6
//4 - BARKYOUMB, SALLY - 14
//MANAGERS
//1 - CHAMBERS, LILLIAN - 15
//2 - POE, GORDON - 9

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};


function workers(users) {
    for(const key in users) {
        const employees = users[key];

        console.log(key.toUpperCase());
        for(const employee of employees) {
            console.log('\t' + employee.first_name + ' ' + (employee.first_name.length + employee.last_name.length));
        }
    }
}
workers(users);
