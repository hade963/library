const container = document.querySelector("main .container");
let books = [];
const addbtn = document.querySelector('.addbtn');

function showBooks () { 
  container.innerHTML = '';
  const template = document.querySelector('template').content;
  for(let i=0;i<books.length;i++) { 
    const card = template.querySelector(".card").cloneNode(true);
    card.setAttribute('data-index',i);
    card.querySelector('h3').textContent = books[i].title;
    card.querySelector('.author span').textContent = books[i].author;
    card.querySelector('.author + div span').textContent = books[i].pages;
    container.appendChild(card);
  }
}

function showForm () { 
  const template = document.querySelector('#form').content;
  const form = template.querySelector('.add-book').cloneNode(true);
  document.body.appendChild(form);
  document.body.className = 'hidden';

}

function hideForm (e) { 
  if(e.target.className ==='close') {
    const form = document.querySelector('.add-book');
    form.remove();
    document.body.setAttribute('class','');
  }
  }


function addObject(form) {
  this.title = form.querySelector('input[name="title"]').value;
  this.author = form.querySelector('input[name="author"]').value;
  this.pages = form.querySelector('input[name="pages"]').value;

}

addbtn.addEventListener('click',showForm);
document.addEventListener('click',hideForm);
document.addEventListener('submit',addBook);
document.addEventListener('click',removeBook);

function addBook(e) { 
  e.preventDefault();
  let book  = new addObject(e.target);
  books.push(book);
  document.body.setAttribute('class','');
  e.target.parentNode.remove();
  showBooks();
}


function removeBook(e) { 
  if(e.target.className === "remove") { 
    let index = e.target.parentNode.dataset.index;
    books.splice(index,1);
    showBooks();
  }
}

const date = new Date();
const copy = document.querySelector('footer .copy');
copy.textContent += " " + date.getFullYear();

for(let i=0;i<4;i++) { 
  let book = {
    title: "title",
    author: 'hade',
    pages: '123'
  };
  books.push(book);
}
showBooks();