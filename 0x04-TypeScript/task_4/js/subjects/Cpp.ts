namespace Subjects {
    export class Cpp extends Subject {
        experienceTeachingC: number;
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }
        getAvailableTeacher(): string {
            return `Cpp available teacher: ${this.teacher.firstName}`;
        }
    }
}
