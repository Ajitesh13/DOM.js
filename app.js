/*  PART 1:

    var titles = document.getElementsByClassName('title');

    // console.log(Array.isArray(titles)); // false as this is not an array but an html collection of elements

    console.log(Array.isArray(Array.from(titles))); // true as the list is converted into an array


    // this is invalid as the heml list is not an array
    // titles.forEach(item => {
    //     console.log(item);
    // });

    // if we convert the list into an array, we can use the foreach loop
    Array.from(titles).forEach(item => {
        console.log(item);
    });
*/

/*  PART 2:

    // const wrap = document.querySelector('#wrapper');
    // console.log(wrap);

    // const wmf = document.querySelector('#book-list li:nth-child(2) .name');
    // console.log(wmf);

    // var books = document.querySelector('#book-list li .name'); // still prints only the first one because querySelector only selects one query
    // console.log(books);

    // var books = document.querySelectorAll('#book-list li .name');
    // console.log(books); // return the collection of elements
    // Array.from(books).forEach(book => {
    //     console.log(book);
    // });
*/

/* PART 3:

    var books = document.querySelectorAll('#book-list li .name');

    Array.from(books).forEach(book =>{
        // console.log(book.textContent);
        // book.textContent = 'test'; // overridden the previous content
        book.textContent += ' (book title)';
    });

    // const bookList = document.querySelector('#book-list');
    // console.log(bookList.innerHTML); // it will log all the html inside the book-list id into the console
    // bookList.innerHTML = '<h2>Something</h2>' // replace all the html inside the book-list id with the rank 2 heading Something
    // bookList.innerHTML += '<p>appended</p>' // this will append the html inside the book-list id

*/

/* PART 4
    // const banner = document.querySelector('#page-banner');
    // console.log('#page-banner node type is:' , banner.nodeType);
    // console.log('#page-banner node name is:' , banner.nodeName);
    // console.log('#page-banner node type is:' , banner.hasChildNodes());

    // const clonedBanner1 = banner.cloneNode(true); // will clone every inside element
    // console.log(clonedBanner1);

    // const clonedBanner2 = banner.cloneNode(false); // only the outside elemnt will be cloned
    // console.log(clonedBanner2);
*/

/*  PART 5
    // const bookList = document.querySelector('#book-list');
    // console.log('the parent node is: ' , bookList.parentNode);
    // console.log('the parent node is: ' , bookList.parentElement.parentElement);

    // console.log(bookList.childNodes);
    // console.log(bookList.children);
*/

/*   PART 6
    // const bookList = document.querySelector('#book-list');
    // console.log('book-list next sibling is: ' , bookList.nextSibling);
    // console.log('book-list next sibling is: ' , bookList.nextElementSibling);
    // console.log('book-list next sibling is: ' , bookList.previousSibling);
    // console.log('book-list next sibling is: ' , bookList.previousElementSibling);

    // bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool';
*/

/*  PART 7

    // var h2 = document.querySelector('#book-list h2');

    // h2.addEventListener('click', e =>{
    //     console.log(e.target);
    //     console.log(e);
    // });

    // var btns = document.querySelectorAll('#book-list .delete');

    // Array.from(btns).forEach(btn => {
    //     btn.addEventListener('click', e => {
    //         const li = e.target.parentElement;
    //         li.parentNode.removeChild(li);
    //     });
    // });

    // const link = document.querySelector('#page-banner a');
    // link.addEventListener('click', e =>{
    //     e.preventDefault();
    //     console.log('navigation to ', e.target.textContent, 'was prevented');
    // });
*/

/*  PART 8 (more efficient version of deleting part of part 7)

    // const list = document.querySelector('#book-list ul');
    // list.addEventListener('click', e => {
    //     if(e.target.className == 'delete') {
    //         const li = e.target.parentElement;
    //         list.removeChild(li);
    //     }
    // });
*/

/*  PART 9
    // console.log(document.forms);
    // console.log(document.forms['add-book']);

    // //add book-list
    // const addForm = document.forms['add-book'];
    // addForm.addEventListener('submit', e => {
    //     e.preventDefault();
    //     const value = addForm.querySelector('input[type="text"]').value;
    //     console.log(value);
    //     const li = document.createElement('li'); // create element
    //     const bookName = document.createElement('span');
    //     const deleteBtn = document.createElement('span');

    //     //add classes
    //     bookName.classList.add('name');
    //     deleteBtn.classList.add('delete');

    //     //add content
    //     deleteBtn.textContent = 'delete';
    //     bookName.textContent = value;

    //     li.appendChild(bookName);
    //     li.appendChild(deleteBtn);
    //     const list = document.querySelector('#book-list ul');
    //     list.appendChild(li);

    //     // For Tesing how to add css externally
    //     // var licolor = document.querySelector('li:last-child');
    //     // licolor.style.color = "red";
    //     // licolor.className = "test";

    // });
*/

/* PART 13
    // console.log(book.getAttribute('class')); // return name
    // console.log(book.setAttribute('class', 'name-2'));
    // console.log(book.hasAttribute('class')); // return true
    // console.log(book.getAttribute('href')); // return false
    // console.log(book.removeAttribute('class'));
    // console.log(book.hasAttribute('class')); // return false
*/

/*  PART 14

    // const list = document.querySelector('#book-list ul');

    // const hideBox = document.querySelector('#hide');
    // hideBox.addEventListener('change', e => {
    //     if(hideBox.checked) {
    //         list.style.display = "none";
    //     } else {
    //         list.style.display = "initial";
    //     }
    // });
*/

/* PART 15 creating a search filter

    // const list = document.querySelector('#book-list ul');
    // const searchBar = document.forms['search-books'].querySelector('input');
    // searchBar.addEventListener('keyup', e => {
    //     const term = e.target.value.toLowerCase();
    //     const books = list.getElementsByTagName('li');
    //     Array.from(books).forEach(book => {
    //         const title = book.firstElementChild.textContent;
    //         if(title.toLowerCase().indexOf(term) != -1) {
    //             book.style.display = 'block';
    //         } else {
    //             book.style.display = 'none';
    //         }
    //     });
    // });

*/

/*
    // const tabs = document.querySelector('.tabs');
    // const panels = document.querySelectorAll('.panel');
    // tabs.addEventListener('click', (e) => {
    //   if(e.target.tagName == 'LI'){
    //     const targetPanel = document.querySelector(e.target.dataset.target);
    //     Array.from(panels).forEach((panel) => {
    //       if(panel == targetPanel){
    //         panel.classList.add('active');
    //       }else{
    //         panel.classList.remove('active');
    //       }
    //     });
    //   }
    // });
*/

/*  DOM Content Load
    // document.addEventListener('DOMContentLoaded', () => {
    //     // all the DOM manupulation
    // });
*/











