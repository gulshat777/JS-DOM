var titles = document.getElementsByClassName('title');

//console.log(Array.isArray(titles));
//console.log(Array.isArray(Array.from(titles)));

 Array.from(titles).forEach(function(item){
 console.log(item);
 })
 
 const wmf = document.querySelector('#book-list li:nth-child(2) .name');
 // console.log(wmf);
 var books = document.querySelector('#book-list li .name');
 // console.log(books);
 books = document.querySelectorAll('books-list li .name');
 console.log(books);
Array.from(books).forEach(function(book){
 console.log(book);
})

var books = document.querySelectorAll('#book-list li.name');
Array.from(books).forEach(function(book){
book.textContent+='(book title)';
});
const bookList = document.querySelector('#book-list');
//bookList.inerHTML+='<p>This is how you add HTML</p>';


const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:' banner.nodeType);
console.log('#page-banner node name is:' banner.nodeName);
console.log('#page-banner has child nodes:' banner.hasChildNodes());
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);



 