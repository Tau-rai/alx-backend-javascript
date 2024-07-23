// students controller
const readDatabase = require('../utils');

class StudentsController {
    static getAllStudents(request, response) {
        try {
            const students = readDatabase();
            const fields = {};

            students.forEach((student) => {
                const { field, firstName } = student;
                const fieldKey = field.toLowerCase();

                if (!fields[fieldKey]) {
                    fields[fieldKey] = {
                        count: 1,
                        names: [firstName],
                    };
                } else {
                    fields[fieldKey].count++;
                    fields[fieldKey].names.push(firstName);
                }
            });

            const sortedFields = Object.keys(fields).sort();

            let output = 'This is the list of our students\n';

            sortedFields.forEach((field) => {
                const { count, names } = fields[field];
                const formattedNames = names.join(', ');

                output += `Number of students in ${field}: ${count}. List: ${formattedNames}\n`;
            });

            response.status(200);
            response.send(output);
        } catch (error) {
            response.status(500);
            response.send('Cannot load the database');
        }
    }

    static getAllStudentsByMajor(request, response) {
        const { major } = request.params;

        if (major !== 'CS' && major !== 'SWE') {
            response.status(500);
            response.send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = readDatabase();
            const fields = {};

            students.forEach((student) => {
                const { field, firstName } = student;
                const fieldKey = field.toLowerCase();

                if (fieldKey === major.toLowerCase()) {
                    if (!fields[fieldKey]) {
                        fields[fieldKey] = {
                            count: 1,
                            names: [firstName],
                        };
                    } else {
                        fields[fieldKey].count++;
                        fields[fieldKey].names.push(firstName);
                    }
                }
            });

            if (!fields[major.toLowerCase()]) {
                response.status(200);
                response.send(`No students found in the ${major} major`);
                return;
            }

            const { count, names } = fields[major.toLowerCase()];
            const formattedNames = names.join(', ');

            response.status(200);
            response.send(`List of students in the ${major} major: ${formattedNames}`);
        } catch (error) {
            response.status(500);
            response.send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;