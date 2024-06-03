export default function getListStudentByLocation(students, city, newGrades) {
  if (students.filter((student) => student.location === city).length > 0) {
    return students.map((student) => {
      const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      return {
        ...student,
        grade: grade.length ? grade[0].grade : 'N/A',
      };
    });
  }
  return [];
}
