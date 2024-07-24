// students controller
import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students =  await readDatabase(request.dbFilePath);
      let response = 'This is the list of our students\n';
      for (const [field, firstnames] of Object.entries(students).sort()) {
        response += `Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}\n`;
      }
      res.status(200).send(response);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(req.databaseFilePath);
      const studentNames = students[major] || [];
      res.status(200).send(`List: ${studentNames.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
