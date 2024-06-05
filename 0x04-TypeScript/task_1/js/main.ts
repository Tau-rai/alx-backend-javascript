class Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        this.yearsOfExperience = yearsOfExperience;
    }
}

class Director extends Teacher {
    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, numberOfReports: number, yearsOfExperience?: number) {
        super(firstName, lastName, fullTimeEmployee, location, yearsOfExperience);
        this.numberOfReports = numberOfReports;
    }
}

function printTeacher(firstName: string, lastName: string) {
    console.log(`${firstName[0]}. ${lastName}`);
}

interface printTeacherFunction {
    (firstName: string, lastName: string): void;
}

