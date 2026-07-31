function check(){

let n=name.value;
let r=roll.value;
let e=exp.value;
let s=sub.value;

if(n==""||r==""||e==""||s==""){
alert("Fill all fields");
return;
}

if(e<0||s<0){
alert("Enter valid values");
return;
}

if(e>=1000||s>=5)
msg.innerHTML="High Spending";
else if(e>=500)
msg.innerHTML="Moderate Spending";
else
msg.innerHTML="Low Spending";

let a=["Netflix","YouTube","Spotify"];
list.innerHTML="";

a.forEach(function(i){
list.innerHTML+="<li>"+i+"</li>";
});
}