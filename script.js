const container = document.querySelector("main .container");
const addbtn = document.querySelector('.addbtn');
let books = [];

class Book { 
  constructor(title,author,pages) { 
    this.title  = title;
    this.author = author;
    this.pages  = pages;
  }

  addBook(form) {
    this.title = form.querySelector('input[name="title"]').value;
    this.author = form.querySelector('input[name="author"]').value;
    this.pages = form.querySelector('input[name="pages"]').value;

  }
  removeBook(index) { 
    books.splice(index,1);
    showBooks();
}
}
const template = document.querySelector('#form').content;
  const form = template.querySelector('.add-book').cloneNode(true);
function showForm () { 
  document.body.appendChild(form);
  document.body.className = 'hidden';
  
}

function hideForm () { 
  const form = document.querySelector('.add-book');
  form.remove();
  document.body.setAttribute('class','');
}

addbtn.addEventListener('click', showForm);
document.addEventListener('click',(e) => {
  if(e.target.className ==='close') {
  hideForm();
}

});
document.addEventListener('submit',(e) => { 
  e.preventDefault();
  let form = e.target;
  let mybook = new Book();
  mybook.addBook(form);
  books.push(mybook);
  showBooks();
  form.parentNode.remove();
  document.body.setAttribute('class','');
});
document.addEventListener('click',function (e){  
  if(e.target.className === "remove") { 
    let index = e.target.parentNode.dataset.index;
    books[index].removeBook(index);
  }

});

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
for(let i=0;i<10;i++) { 
  let mybook = new Book('hkjadf',"hade", '256');
  books.push(mybook);
}
showBooks();


// sate the copyright year dinamicly
const date = new Date();
const copy = document.querySelector('footer .copy');
copy.textContent += " " + date.getFullYear();
