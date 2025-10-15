{
  // constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }//amra student object er property hisebe jai pathai na kno id, name, email obossoi thakte hbe...setai hocche constraints.
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 44,
    name: "Alam",
    email: "Alam@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "masum",
    email: "masum@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 333,
    name: "mohammad",
    email: "mohammad@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}