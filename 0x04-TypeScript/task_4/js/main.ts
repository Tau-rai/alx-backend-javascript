// Define constants for subjects
export const cpp = Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher = new Teacher({ experienceTeachingC: 10 });


// Log and call methods for Cpp subject
console.log("C++");
console.log(cTeacher.getRequirements(cpp));
console.log(cTeacher.getAvailableTeacher(cpp));

// Log and call methods for Java subject
console.log("Java");
console.log(cTeacher.getRequirements(java));
console.log(cTeacher.getAvailableTeacher(java));

// Log and call methods for React subject
console.log("React");
console.log(cTeacher.getRequirements(react));
console.log(cTeacher.getAvailableTeacher(react));