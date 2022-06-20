document.querySelector("form").addEventListener("submit",myfunction)
let queArr = []

function myfunction(event){
    event.preventDefault()
    var queObj = {
        queTitle:document.querySelector("#title").value,
        queLink:document.querySelector("#link").value,
         queDifficult:document.querySelector("#difficulty").value,
    }
    queArr.push(queObj);
    displayTable(queArr);


}
    
function displayTable(queArr){
    document.querySelector("tbody").innerHTML=""
    queArr.forEach(function(el){
        var tr = document.createElement("tr")

        var td1 = document.createElement('td')
         td1.innerText = el.queTitle
        var td2 = document.createElement('td')
        td2.innerText = el.queLink
        var td3 = document.createElement('td')
        td3.innerText = el.queDifficult
        var td4 = document.createElement('td')
        if(el.queDifficult == "Easy"){
            td4.innerText="Yes"
        }
        else{
            td4.innerText ="No"
        }
        tr.append(td1,td2,td3,td4)
        document.querySelector("tbody").append(tr)
    });
}