(function(){
    setInterval(function() {
        document.getElementById("time").textContent = new Date();
    },1000);

    // Load Data and add event handlers
    const students = [
        { "studentId": "000-98-0001", "firstName": "James" },
        { "studentId": "000-98-0002", "firstName": "Anna" },
        { "studentId": "000-98-0003", "firstName": "Jeffrey" }
    ];
    const txtStudentId = document.getElementById("sid");
    const txtStudentName = document.getElementById("name"); 
    const btnSubmit = document.querySelector("#submitBtn");

    //Add initail student data to the DOM
    window.addEventListener("load",function(){
        students.map(
            stu=>addElementToList(stu)
        );
    });

    //helper function to add student object data to the view
    function addElementToList(student) {       
        var li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = student.studentId + " - " + student.firstName;
        document.querySelector("#studentlist").appendChild(li);
    }

  
    btnSubmit.addEventListener("click", function(event) {      
        if( txtStudentId.value!="" && txtStudentName.value!= ""){
            var studentNode = {
                "studentId" : txtStudentId.value,
                "firstName" : txtStudentName.value
            };
            addElementToList(studentNode);
            txtStudentId.value = "";
            txtStudentName.value = "";
            txtStudentId.focus();           
        }
        event.preventDefault();
    })

})();

