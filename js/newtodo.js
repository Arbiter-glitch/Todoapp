function ajax(){
    var output="";
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200) {
            var response=JSON.parse(this.responseText);
         
            var col = ["Id","Task","Status"];
            var t="";
            for (var i=0;i<col.length-1;i++){
                 t+="  "+"<u>"+"  "+"<label style=padding-right:2px> </label>"+"<b>"+col[i]+"</b>"+"</u>";   
                 }      
                 output=t+" "+"<b>"+"<label style=float:right>"+"<u>"+col[2]+"</u>"+"</label>"+"</b>"+"<p></p>"; 
            for(var i=0;i<response.length;i++){
                if (response[i].completed==false){
                output+="<p>"+ response[i].id+"."+" "+" <label style=padding-right:5px> </label>"+"<a style=text-decoration:none onMouseOver=this.style.color='#0F0'  onMouseOut=this.style.color='#000'>"+response[i].title+"</a>"+"<input style=float:right;padding-right:7px onchange=counting(this.checked) type=checkbox "+"</p>";
                }
                else{
                    output+="<p>"+response[i].id+"."+"  "+" <label style=padding-right:5px> </label>"+"<a style=text-decoration:none onMouseOver=this.style.color='#F00'  onMouseOut=this.style.color='#000'>"+ response[i].title+"</a>"+"<input type=checkbox checked disabled style=float:right;padding-right:7px>"+"</p>";
                }
    
            }  
        }
        document.getElementById("demo").innerHTML = output;  
    }
  
  
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
    var count=0;
    function counting(e){
        var promise=new Promise(function(resolve,reject){
            if(e==true){
                count++;
                if(count==5){
                resolve("Congrats. 5 Tasks have been Successfully Completed");
            }
            else{
                reject("Waiting for completion")
            }
        }
        else{
                count--;
            }
        });
        promise.then(function(e){alert(e);}).catch(function(e){console.log(e);});
    }