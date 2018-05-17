var btns = document.querySelectorAll('book-list.delete');
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click,function(e){
        const li = e.targetElement;
        li.parentNode.remoteChild(li)
    })
})
const link = document.querySelector('#page-banner a');
link.addEventListener('click', function(e){
e.preventDeafult();
console.log('navigation to',e.target.textContent,'was prevented');
});