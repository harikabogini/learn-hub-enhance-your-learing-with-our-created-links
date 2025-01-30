
var inputContext = document.getElementById('input-text')
let addTask = document.getElementById('addTask')
let list = document.getElementById('list-note')

function displayTasks(val){
   if(val === '')
    alert('Please enter some task!')
   
   else{
      let li = document.createElement('li');
      li.innerHTML = val;
      list.appendChild(li);
      let button = document.createElement("button")
      button.classList.add('delete')
      button.innerText = 'Delete'
      li.appendChild(button)
   // showData();
   }
   inputContext.value = ''
   saveData();
}
addTask.onclick = () => {
    displayTasks(inputContext.value);
}
function saveData(){
   localStorage.setItem("data",list.innerHTML);
}
function showData(){
   list.innerHTML = localStorage.getItem('data');
}
showData();

list.addEventListener("click", function(e){
       
            if(e.target.tagName === "LI")
            e.target.classList.toggle("checked")
            else{
              e.target.parentElement.remove()
            }
            
             saveData();
           
       })


       function navigate(link){
           location = link.value;
           window.open(location);
       }

       function SendEmail(){
           btn = document.getElementById("email-btn")
           window.open("mailto:varikalaanil@gmail.com")
       }