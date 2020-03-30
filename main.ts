import { Course } from './course.js';
import { dataCourses } from './dataCourses.js';
import { Student } from './student.js';
import { dataStudent } from './dataStudent.js';


let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studentTbody: HTMLElement = document.getElementById('student')!;
let infoTbody: HTMLElement = document.getElementById('info')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByCredits: HTMLElement = document.getElementById("button-filterByCredits")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const inputSearchBox2: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box2")!;
const inputSearchBox3: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box3")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;

renderStudent(dataStudent);

btnfilterByName.onclick = () => applyFilterByName();

renderStudentInTable(dataStudent);

renderCoursesInTable(dataCourses);


totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`;


function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 
function renderStudent(student: Student):void{
    
  let hElement = document.createElement("h4");
  hElement.textContent= student.nombre;
  studentTbody.appendChild(hElement);

  let imgElement= document.createElement("img");
  imgElement.className="img-fluid max-width: 100% height: auto";
  imgElement.src=student.avatar;
  imgElement.alt="Avatar";
  studentTbody.appendChild(imgElement);

}

function renderStudentInTable(student: Student): void {
  console.log('Desplegando estudiante');

  let tr2Element = document.createElement("tr");
  tr2Element.innerHTML=`<td>Código</td>
                        <td>${student.codigo}</td>`;
  infoTbody.appendChild(tr2Element);

  let tr3Element = document.createElement("tr");
  tr3Element.innerHTML=`<td>Cédula</td>
                        <td>${student.cedula}</td>`;
  infoTbody.appendChild(tr3Element);

  let tr4Element = document.createElement("tr");
  tr4Element.innerHTML=`<td>Edad</td>
                        <td>${student.edad} años</td>`;
  infoTbody.appendChild(tr4Element);

  let tr5Element = document.createElement("tr");
  tr5Element.innerHTML=`<td>Dirección</td>
                        <td>${student.direccion}</td>`;
  infoTbody.appendChild(tr5Element);

  let tr6Element = document.createElement("tr");
  tr6Element.innerHTML=`<td>Teléfono</td>
                        <td>${student.telefono}</td>`;
  infoTbody.appendChild(tr6Element);
  ;
}
 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
  totalCreditElm.innerHTML = `${getTotalCredits(coursesFiltered)}`;
}

function applyFilterByCredits() { 
  let text = inputSearchBox2.value;
  let text2 = inputSearchBox3.value;
  let num = (text == null || text=='') ? 0 : parseInt(text);
  let num2 = (text2 == null|| text2=='') ? 8 : parseInt(text2);
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByCredits(num, num2, dataCourses);
  renderCoursesInTable(coursesFiltered);
  totalCreditElm.innerHTML = `${getTotalCredits(coursesFiltered)}`;
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}

function searchCourseByCredits(low: number, high:number, courses: Course[]) {
  return low == 0 && high>8? dataCourses : courses.filter( c => 
    c.credits>=low && c.credits<=high);
}

function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}

btnfilterByName.onclick = () => applyFilterByName();
btnfilterByCredits.onclick = () => applyFilterByCredits();

