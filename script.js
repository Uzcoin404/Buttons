// MyFactory 

var factory = prompt("Xodim nomini kiriting");

if(factory == "Boss"){
    alert("Salom xo'jayin");
}
else if(factory == "Security"){
    alert("Salom Qorovul")
}
else if(factory == "Secretary"){
    alert("Salom Kotiba")
}
else if(factory == "Worker"){
    alert("Salom ishchi")
}
else if(factory == "I"){
    console.log("Hide Function");
}
else{
    alert("Bizning korxonada bunday xodim yo'q");
}