import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
var coursesTbody = document.getElementById('courses');
var studentTbody = document.getElementById('student');
var infoTbody = document.getElementById('info');
var btnfilterByName = document.getElementById("button-filterByName");
var btnfilterByCredits = document.getElementById("button-filterByCredits");
var inputSearchBox = document.getElementById("search-box");
var inputSearchBox2 = document.getElementById("search-box2");
var inputSearchBox3 = document.getElementById("search-box3");
var totalCreditElm = document.getElementById("total-credits");
renderStudent(dataStudent);
btnfilterByName.onclick = function () { return applyFilterByName(); };
renderStudentInTable(dataStudent);
renderCoursesInTable(dataCourses);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudent(student) {
    var hElement = document.createElement("h4");
    hElement.textContent = student.nombre;
    studentTbody.appendChild(hElement);
    var imgElement = document.createElement("img");
    imgElement.className = "img-fluid max-width: 100% height: auto";
    imgElement.src = student.avatar;
    imgElement.alt = "Avatar";
    studentTbody.appendChild(imgElement);
}
function renderStudentInTable(student) {
    console.log('Desplegando estudiante');
    var tr2Element = document.createElement("tr");
    tr2Element.innerHTML = "<td>C\u00F3digo</td>\n                        <td>" + student.codigo + "</td>";
    infoTbody.appendChild(tr2Element);
    var tr3Element = document.createElement("tr");
    tr3Element.innerHTML = "<td>C\u00E9dula</td>\n                        <td>" + student.cedula + "</td>";
    infoTbody.appendChild(tr3Element);
    var tr4Element = document.createElement("tr");
    tr4Element.innerHTML = "<td>Edad</td>\n                        <td>" + student.edad + " a\u00F1os</td>";
    infoTbody.appendChild(tr4Element);
    var tr5Element = document.createElement("tr");
    tr5Element.innerHTML = "<td>Direcci\u00F3n</td>\n                        <td>" + student.direccion + "</td>";
    infoTbody.appendChild(tr5Element);
    var tr6Element = document.createElement("tr");
    tr6Element.innerHTML = "<td>Tel\u00E9fono</td>\n                        <td>" + student.telefono + "</td>";
    infoTbody.appendChild(tr6Element);
    ;
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
    totalCreditElm.innerHTML = "" + getTotalCredits(coursesFiltered);
}
function applyFilterByCredits() {
    var text = inputSearchBox2.value;
    var text2 = inputSearchBox3.value;
    var num = (text == null || text == '') ? 0 : parseInt(text);
    var num2 = (text2 == null || text2 == '') ? 8 : parseInt(text2);
    clearCoursesInTable();
    var coursesFiltered = searchCourseByCredits(num, num2, dataCourses);
    renderCoursesInTable(coursesFiltered);
    totalCreditElm.innerHTML = "" + getTotalCredits(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function searchCourseByCredits(low, high, courses) {
    return low == 0 && high > 8 ? dataCourses : courses.filter(function (c) {
        return c.credits >= low && c.credits <= high;
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCredits.onclick = function () { return applyFilterByCredits(); };
