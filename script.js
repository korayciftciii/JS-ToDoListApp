let item = ['item 1', 'item 2'];
let myList = document.querySelector('#myList');
let deleteBtn=document.getElementById('deleteAll');

item.forEach(function (item) {
   createItem(item);
});


myList.addEventListener('click', function (item) {
    if (item.target.tagName == 'LI') {
        item.target.classList.toggle('checked');
        toggleDeleteButton();
    }
});
function toggleDeleteButton(){
    let checkList = document.querySelectorAll('.checked');
    if(checkList.length>1){
    document.querySelector('#deleteAll').classList.remove('d-none');
    }
    else{
    document.querySelector('#deleteAll').classList.add('d-none');

    

}}
deleteBtn.onclick=function(){

    let li = parentElement;
    li.style.display='none';
    li.classList.remove('checked');
    console.log(deleteBtn);
};  
document.querySelector('#btnCreate').onclick=function(){
let item=document.querySelector('#txtItem');

if (item.value==='') {
    alert('lütfen bir değer giriniz');
    return;
}
createItem(item.value);
item.value = '';

};

function createItem(item){
    let li = document.createElement('li');
    let t = document.createTextNode(item)
    li.className = 'list-group-item';
    li.appendChild(t);
    myList.appendChild(li);

    let span = document.createElement('span');
    let text = document.createTextNode('x');
    span.className = 'close';
    span.onclick = function(){
        let li = this.parentElement;
        li.style.display='none';
        li.classList.remove('checked');
   }
   span.appendChild(text);
   li.appendChild(span);
};


document.querySelector('#deleteAll').onclick=function(){
var element =document.querySelectorAll('.checked');
 element.forEach(function(item){
item.style.display='none';

 });

}