var x="#DDFFBC";
document.querySelector("button").addEventListener("click",changetorating);
function changetorating(){
  if(document.querySelector("button").innerHTML === "Hide Rating"){
    x="#DDFFBC";
    document.getElementById("codeforces").innerHTML = "Codeforces";
    document.getElementById("codechef").innerHTML = "Codechef";
    document.getElementById("leetcode").innerHTML = "Leetcode";
    document.querySelector("button").innerHTML = "View Rating";
    document.querySelector("button").style.backgroundColor = "#DDFFBC";
  }
  else{
    x="#f39189";
    document.getElementById("codeforces").innerHTML = "Codeforces : 1448";
    document.getElementById("codechef").innerHTML = "Codechef : 1785";
    document.getElementById("leetcode").innerHTML = "Leetcode : -";
    document.querySelector("button").innerHTML = "Hide Rating";
    document.querySelector("button").style.backgroundColor = "#f39189";
  }
}
window.onload = function() {
    document.querySelector("button").onmouseover = function()
    {
        this.style.backgroundColor = "#9933ff";
    }
    document.querySelector("button").onmouseout = function()
    {
        this.style.backgroundColor = x;
    }
    /*document.getElementById("1").onmouseover = function(){
        this.innerHTML = "Mobile No.:9140098049<br>Mail ID:vipulgupta42all@gmail.com";
    }
    document.getElementById("1").onmouseout = function(){
        this.innerHTML = "Mobile No.:91400xxxxx<br>Mail ID:vipulguptaxxxxx@gmail.com";
    }*/
    document.getElementById("Linkedin").onmouseover = function()
    {
        this.innerHTML = "Connect Me on Linkedin";
        this.style.backgroundColor = "white";
    }
    document.getElementById("Linkedin").onmouseout = function()
    {
        this.innerHTML = "Linkedin";
    }
}
