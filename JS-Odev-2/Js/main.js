// sayfa yüklendiğinde çarpı buttonlarını getirme
window.onload = DeleteButton();

// elementleri seçme
let inputDOM = document.querySelector("#task");
let buttonDOM = document.querySelector("#liveToastBtn");
let listDOM = document.querySelector("#list");
let deleteDOM = document.querySelectorAll("#list>li>span");

//eventleri yakalama
buttonDOM.addEventListener("click", addTodo);
listDOM.addEventListener("click", deleteTodos)

//inputa girilen ToDo ları Ui a ekleme fonksiyonu
function addTodo(e) {
    if (inputDOM.value === "") {
        $('#liveToasterr').toast('show')
    } else {
        let li = document.createElement("li");
  li.innerHTML = inputDOM.value;
  listDOM.appendChild(li);
  inputDOM.value = "";
  DeleteButton();
  $('#liveToast').toast('show') // bootsptram live toast seçilip show edildi
    }
  
  e.preventDefault();
}

//Her "li" öğresine çarpı butonu oluşturma fonksiyonu
function DeleteButton() {
  let deleteButton = document.querySelectorAll("#list>li");
  for (let i = 0; i < deleteButton.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    deleteButton[i].appendChild(span);
  }
}

//çarpı buttonlarına basıldığında todoların silinmesi fonksiyonu
function deleteTodos(e) {
    let mouse = e.target;
    if (mouse.className === "close") {
        let li = mouse.parentElement
        li.style.display = "none"; 
    }else if(mouse.className === ""){
        console.log("Geçersiz Tıklama")
    }
}
