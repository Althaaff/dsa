
// Started Date: 30 / 6 / 2024 :

const studentDataBase = ['Muhammad', 'Ansar', 'Ameer', 'Swiddeek'];

const findStudentName = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
   if (allStudents[i] === studentName) {
    console.log(`Found the student name: ${studentName}`)
   } 
  }
}

findStudentName(studentDataBase, "Muhammad");

