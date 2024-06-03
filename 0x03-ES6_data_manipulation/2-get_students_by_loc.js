export default function getListStudentByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
