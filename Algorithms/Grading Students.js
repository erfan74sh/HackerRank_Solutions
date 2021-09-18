function gradingStudents(grades) {
    let res = grades.map(function (v) {
        if (v >= 38) {
            if (v % 5 >= 3) {
                return v + 5 - (v % 5);
            } else {
                return v;
            }
        } else {
            return v;
        }
    });
    return res;
}