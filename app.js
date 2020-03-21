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




