namespace Subjects {
    export class React extends Subject {
        experienceTeachingReact?: number;

        getRequirements(): string {
            return "Here is the list of requirements for React";
        }
        getAvailableTeacher(): string {
            if (this.experienceTeachingReact !== undefined) {
                return `React available teacher: ${this.teacher.firstName}`;
            }
            return "No available teacher";
        }
    }
}
