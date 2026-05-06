
type Student ={ id:number; name:string};

const addStudentToCourse = <T extends Student >(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};
 const student3 = {
    id:43,
    isTaka: true,
    name:"slkhf"
 }
const result = addStudentToCourse(student3);
console.log(result);