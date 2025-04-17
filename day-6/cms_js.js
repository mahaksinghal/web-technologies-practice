// "html", "css", "sql", "swift", "go", "kotlin", "typescript", "rust", "r", "matlab", "bash", "powershell", "vba", "groovy", "dart", "scala", "clojure", "elixir", "erlang", "haskell", "lisp", "ocaml", "f#", "cobol", "fortran"
strarr = ["python", 'javascript', "java", "c++", "perl", "ruby", "php"];

function generateUList() {
    var str = "<ul>";
    for (let v of strarr) {
        str += `<li> ${v} </li>`;
    }
    str += "</ul>";

    document.getElementById("generatedList").innerHTML = str + "<br>";
}

function manageCourses(ev) {
    console.log(ev.target)
    // console.log("name "+ev.target.name)
    // console.log("value "+ev.target.value)
    var operation = ev.target.name;
    var value = document.getElementById("cname").value;
    switch (operation) {
        case "add":
            strarr.push(value);
            break;
        case "delete":
            var position = strarr.findIndex(cname => value === cname)
            if (position !== -1) {
                strarr.splice(position, 1);
                alert("deleted successfully");
            }
            else
                alert("Course not found");
            break;
        case "update":
            var position = strarr.findIndex(cname => value === cname)
            if(position !== -1){
                newcourse = prompt("Enter new course name: ")
                strarr.splice(position, 1, newcourse)
                alert("updated successfully")
            }
            else
                alert("Course not found");
            break;

    }

    generateUList();
    document.getElementById("cname").value = "";
    document.getElementById("cname").focus();

}