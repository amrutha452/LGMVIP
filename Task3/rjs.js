var n=null;
function Add()
{
event.preventDefault();
var data=readFormData();
console.log(data);
if(n==null)
{
    insertNewData(data);
}
else{
    updateData(data);
}
resetForm();
}

function readFormData()
{
    var data={};
    data["name"]=document.getElementById("name").value;
    data["clg"]=document.getElementById("clg").value;
    data["email"]=document.getElementById("email").value;
    data["phn"]=document.getElementById("phn").value;
    data["qual"]=document.getElementById("qual").value;
    return data;
}

function insertNewData(data){
    var table=document.getElementById("storeitems").getElementsByTagName("tbody")[0];
    var row=table.insertRow(table.length);
  
    cell1=row.insertCell(0);
    cell1.innerHTML=data.name;
    cell2=row.insertCell(1);
    cell2.innerHTML=data.clg;
    cell3=row.insertCell(2);
    cell3.innerHTML=data.email;
    cell4=row.insertCell(3);
    cell4.innerHTML=data.phn;
    cell5=row.insertCell(4);
    cell5.innerHTML=data.qual;
    cell5=row.insertCell(5);
    cell5.innerHTML=`<button onclick="edit(this)">Edit</button>
    <button onclick="delete1(this)">Delete</button>
    `
}
function edit(td)
{
n=td.parentElement.parentElement;
document.getElementById("name").value=n.cells[0].innerHTML;
document.getElementById("clg").value=n.cells[1].innerHTML;
document.getElementById("email").value=n.cells[2].innerHTML;
document.getElementById("phn").value=n.cells[3].innerHTML;
document.getElementById("qual").value=n.cells[4].innerHTML;
}
function delete1(data)
{
    if(confirm("Are you sure to Delete this record?"))
    {
       row=data.parentElement.parentElement;
       document.getElementById("storeitems").deleteRow(row.rowIndex);
       resetForm();
    }
}
function resetForm()
{
  document.getElementById("name").value="";
 document.getElementById("clg").value="";
document.getElementById("email").value="";
  document.getElementById("phn").value="";
document.getElementById("qual").value="";
n=null;
}



function  updateData(data)
{
    n.cells[0].innerHTML=data.name;

    n.cells[1].innerHTML=data.clg;

    n.cells[2].innerHTML=data.email;

    n.cells[3].innerHTML=data.phn;

    n.cells[4].innerHTML=data.qual;

}

