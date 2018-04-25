/*eslint-env browser*/

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Employee Management Program");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all employees");
    window.console.log("add - Add an employee");
    window.console.log("del - Delete an employee");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function display(employee_list) {
    "use strict";
    var i = 1;
    employee_list.forEach(function (employee) {
        window.console.log(String(i) + ". " + employee);
        i += 1;
    });
    window.console.log("");
}

function add(employee_list) {
    "use strict";
    var employee = window.prompt("Enter the employee's name");
    employee_list.push(employee);
    window.console.log(employee + " was added.");
    window.console.log("");
}

function del(employee_list) {
    "use strict";
    var num, employee;
    num = parseInt(window.prompt("Employee number to delete"), 10);
    if (num < 1 || num > employee_list.length) {
        window.alert("Invalid employee number.");
    } else {
        employee = employee_list.splice(num - 1, 1);
        window.console.log(employee + ' was deleted.');
        window.console.log("");
    }
}

function main() {
    "use strict";
    var xhr, i, command, employee_list = [];

    display_menu();
    
    xhr = new XMLHttpRequest();
    xhr.open("GET", "data/employees.json");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonObj = JSON.parse(xhr.responseText);
            for (i = 0; i < jsonObj.employees.length; i += 1) {
                employee_list.push(jsonObj.employees[i].name);
            }
            while (true) {
                command = window.prompt("Enter command");
                if (command !== null) {
                    if (command.toLowerCase() === "show") {
                        display(employee_list);
                    } else if (command.toLowerCase() === "add") {
                        add(employee_list);
                    } else if (command.toLowerCase() === "del") {
                        del(employee_list);
                    } else if (command.toLowerCase() === "exit") {
                        break;
                    } else {
                        window.alert("That is not a valid command.");
                    }
                } else {
                    window.alert("That is not a valid command.");
                }
            }
            window.console.log("Program terminated.");
        }
    };
}

main();