

function submit(){
    var divName =document.getElementById("txtDiv").value
    var objDiv = {
        Key : '', 
        Division : divName
    }
    console.log(objDiv)
    $.post('http://localhost:2000/division/addNewDiv',objDiv,function(data,status){
        console.log(data)
    })

    
}