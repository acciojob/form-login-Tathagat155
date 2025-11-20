  let input1=document.getElementById("input1");
  let input2=document.getElementById("input2");
  let button=document.querySelector("button")
function getFormvalue() {
    //Write your code here
	let v1=input1.value.trim();
	let v2=input2.value.trim();
	if(v1==""||v2==""){
		alert("fill the input fields")
	return;
	}else{
		alert(v1 +" " + v2);
	}
}
button.addEventListener("click",getFormvalue);
