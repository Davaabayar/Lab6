/*
1. IIFE - Use an IIFE to initialize the state of the web page. i.e. wrap your JavaSscript code which contains your event handlers etc, inside an IIFE.

2. Use Unobstrusive JS for Event handler - i.e. use the DOM API call such as, objectRef.addEventListener, to create your event handlers.

3. Store your startup data as a JSON array e.g. const students = [ { "000-98-0001": "John" }, {"...":"..."} ];

4. Use the DOM API calls, document.createElement(...) & listObjectRef.appendChild(...), to dynamically add new Student data to the List Items on the webpage. 

5. Use Bootstrap (or some other CSS framework you prefer) to style/present the UI of your app to appear like the sample or similar.

When finished and tested all okay, Upload your source code here to Sakai as a single .html file or create a zip file and upload (if it is not a single file).

Make sure to add a brief note, saying what you were able to do, how you did it and how it went, what worked and what didn't quite work.*/ 

function startTime() {
    let today = new Date();
    document.getElementById('time').innerHTML = today;
    setTimeout(function() {
        startTime()
    }, 500);
}

//3. Store your startup data as a JSON array e.g. const students = [ { "000-98-0001": "John" }, {"...":"..."} ];
const students = [
    { sid: "000-98-0001", name: "James" },
    { sid: "000-98-0002", name: "Anna" },
    { sid: "000-98-0003", name: "Jeffrey" }
];

//1. IIFE - Use an IIFE to initialize the state of the web page. i.e. wrap your JavaSscript code which contains your event handlers etc, inside an IIFE.
//Here our initial stage is Time should start ticking and initial const list should be displayed
(function () {
    //start time
    startTime();

    //show initial students in const list
    students.forEach(stu => {
        addStudentToList(stu);
    }); 

    //2. Use Unobstrusive JS for Event handler - i.e. use the DOM API call such as, objectRef.addEventListener, to create your event handlers.
    let button = document.getElementById("submitBtn");      
    button.onclick = addNewStudent;
})();

//4. Use the DOM API calls, document.createElement(...) & listObjectRef.appendChild(...), to dynamically add new Student data to the List Items on the webpage. 
function addStudentToList(student) {
    let newStudent = document.createElement("li"); 
    let newStudentContent = document.createTextNode(student.sid + " - " + student.name); 
    newStudent.setAttribute('class', 'list-group-item');
    newStudent.appendChild(newStudentContent);    
    document.getElementById("studentlist").appendChild(newStudent);    
}

function addNewStudent(){   
    let sid = document.getElementById("sid");
    let fname = document.getElementById("name"); 

    if(sid.value !='' && fname.value!=''){ //prevent empty data to be submitted and force pattern check for sid
        let student = {
            "sid": sid.value,
            "name": fname.value
        };
        addStudentToList(student);   
    }
}