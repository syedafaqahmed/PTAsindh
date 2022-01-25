

function submit(){
    var disName = document.getElementById("txtDis").value
    var objDic = {
        Key : '',
        District : disName
    }
    console.log(objDic) 

    $.post('http://localhost:2000/District/addNewDis',objDic,function(data,status){
        console.log(data)
    })
}