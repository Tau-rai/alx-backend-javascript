interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
    location: 'Kenya'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 31,
    location: 'Uganda'
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
for (const student of studentsList) {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');
    
    firstNameCell.appendChild(document.createTextNode(student.firstName));
    locationCell.appendChild(document.createTextNode(student.location));
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    
    table.appendChild(row);
}
