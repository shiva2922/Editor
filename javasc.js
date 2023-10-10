function rice(){
    let htmlCode=document.querySelector("#htmlCode").value;
     let cssCode=document.querySelector("#cssCode").value;
     let jsCode=document.querySelector("#jsCode").value;
    let result=document.querySelector("#result");

result.innerHTML = htmlCode+"<style>"+cssCode+"</style>";
result.contentWindow.eval(jsCode);

//result.innerHTML="<script>"+jsCode+"</script>";
}
// function rice1(){
//     let jsCode=document.querySelector("#jsCode").value;
//     let scriptdiv=document.querySelector("#script");


    

// let script=document.createElement("script");
// script.setAttribute("id","a");



// script.innerHTML=`function CodeExecute(){
//     ${jsCode}
// }
// CodeExecute();
// `;

// scriptdiv.append(script);


// }


















// {/* <h1 id="v"></h1>

// let v=document.getElementById("v");
// v.innerHTML="SDCV"; */}