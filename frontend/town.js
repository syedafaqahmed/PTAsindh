function submit() {
    var townName = document.getElementById("txttown").value 
    var objtown = {
        Key : '',
        TownName :townName
    } 
    console.log(townName)
    $.post('http://localhost:2000/town/addnewTown',objtown,function(data,status){
        console.log(data)
    })
}