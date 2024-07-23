// full_server/utils.js

const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    // Process the data and extract first names per fields (modify as needed)
    const studentsData = JSON.parse(data); // Assuming the data is in JSON format
    const firstNameByField = {};

    // Extract first names
    for (const field in studentsData) {
      if (Array.isArray(studentsData[field])) {
        firstNameByField[field] = studentsData[field].map((student) => student.firstName);
      }
    }

    return firstNameByField;
  } catch (error) {
    throw new Error(`Error reading database: ${error.message}`);
  }
}

module.exports = readDatabase;
