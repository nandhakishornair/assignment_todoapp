var fo=document.querySelector('form');
var logof=document.getElementById('logout')
var count=0;
function validate(){
   
     let usern=document.getElementById('username')
     let pswd=document.getElementById('password');
    if((pswd.value==12345)&&(usern.value=="admin")){
        redirect() 
       
     }
     else{
         document.getElementById('text').style.color="red"; 
         document.getElementById('text').innerText="username or password is invalid";
      }
}
function redirect(){
    window.location.replace("./main.html");
}
function logoff(){
    window.location.replace("./login.html");
}

fo.addEventListener("submit",validate)
logof.addEventListener("click",logoff)


function ajax(){
// creating an xhr object
 var xhttp=new XMLHttpRequest();
// eventlistener
xhttp.onreadystatechange=function(){
    // condition
    if(xhttp.readyState==4 && xhttp.status==200){
      
       console.log(xhttp.responseText);
       table(xhttp.responseText);
      
            }
    }

xhttp.open("GET"," https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}

function table(response){
    var list = JSON.parse(response);
    document.getElementById('todotable').style.display= "block";
    document.getElementById("jumbotron").style.display= "none"; 
    var table =document.getElementById('todotable');

   

    for(var i=0;i<list.length;i++){
        let rowcount=table.rows.length;
        var row = table.insertRow(rowcount);
        var cell1= row.insertCell(0);
        cell1.style.fontSize="30px"
        // cell1.style["box-shadow"] = "0 0 10px #999999";
        cell1.innerHTML=list[i].id;

        var cell2 = row.insertCell(1);
        cell2.innerHTML=list[i].title;
        cell2.style.fontSize="30px"
        // cell2.style["box-shadow"] = "0 0 10px #999999";

        var cell3=row.insertCell(2);
        cell3.style.transform="scale(2)"
        //  cell3.style["box-shadow"] = "0 0 40px #999999";
        var element=document.createElement("input");
        element.type="checkbox";
        element.style.margin="40px"
        // element.style["box-shadow"] = "0 0 10px #999999";
        // element.style.padding="40px"
        if(list[i].completed==true){
            element.setAttribute("checked","true");
            element.setAttribute("disabled","true");

        }
        cell3.appendChild(element);
        element.addEventListener('change',(event)=>{
            if(event.currentTarget.checked){
                count++;
                check();
            }
            else{
                count--;
            }
        })
        
    }
}

function check(){
    let p=new Promise((resolve,reject)=>{
        if(count>=5) {
            resolve(" 5 task complete")
        }
      
    })
    p.then( (message)=>{
           alert(message);
    })

}

