class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.available = true;
  }

  //делает книгу недоступной
  lend() {
    if (this.available) {
      this.available = false;
      return `${this.title} has been lent out`;
    } else {
      return `${this.title} is currently unavailable`;
    }
  }

  returnBook() {
    this.available = true;
    return `${this.title} has been returned`;
  }

  info() {
    return `${this.title} by ${this.author} (ISBN: ${this.isbn} - ${
      this.available ? "AVAILABLE" : "UNAVAILABLE"
    })`;
  }
}

// const book1 = new Book("1984", "GI", "1");
// const book2 = new Book("Hello World", "AH", "2");
// console.log(book1);
// console.log(book2);

// console.log(book1.info());
// console.log(book2.info());

// book2.lend()

// console.log(book1.info());
// console.log(book2.info());

// book2.returnBook()

// console.log(book1.info());
// console.log(book2.info());

class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  getInfo() {
    return `User: ${this.name}, ID: ${this.id}`;
  }
}

class Member extends User {
  constructor(name, id) {
    super(name, id);
    this.borrowedBooks = []; //список взятых книг
  }
  borrowBook(book) {
    if (book.available) {
      this.borrowedBooks.push(book); //добавляем в массив занимаемых книг
      book.lend(); //книга становится недоступной
      return `${this.name} borrowed ${book.title}`;
    } else {
      return `${book.title} is not in the library`;
    }
  }
  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1);
      book.returnBook();
      return `${this.name} returned ${book.title}`;
    } else {
      return `${this.name} does not have ${book.title}`;
    }
  }
}

const user1 = new Member("Vlad", "1");

// console.log(user1.borrowBook(book1))
// console.log(user1.borrowBook(book2))

// console.log(user1);
// console.log(user1.getInfo());

// console.log(user1.returnBook(book2));
// console.log(user1);

class Librarian extends User {
  constructor(name, id, library) {
    super(name, id);
    this.library = library;
  }
  addBook(book) {
    this.library.books.push(book);
    return `${book.title} has been added to the library`;
  }
  removeBook(book) {
    const index = this.library.books.indexOf(book);
    if (index != -1) {
      this.library.books.splice(book, 1);
      return `${book.title} has been removed from the library.`;
    } else {
      return `${book.title} is not in the library`;
    }
  }
  //выдает книгу члену библиотеки
  lendBook(book, member) {
    if (book.available) {
      member.borrowBook(book); //добавляет книгу в список взятых книг и делает ее недоступной
      return `${book.title} has been lent to ${member.name}.`;
    } else {
      return `${book.title} is not available`;
    }
  }
  //принимает книгу обратно
  receiveBook(book) {
    book.returnBook();
    return `${book.title} has been received back into the library`;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.members = [];
  }

  registerMember(member) {
    this.members.push(member);
    return `${member.name} has been registered as a member of ${this.name}.`;
  }
  unRegisterMember(member) {
    const index = this.members.indexOf(member);
    if (index !== -1) {
      this.members.splice(index, 1);
      return `${member.name} has been unregistered from ${this.name}. `;
    } else {
      return `${member.name} is not a member of ${this.name}.`;
    }
  }
  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }
  findBookByISBN(isbn) {
    return this.books.find((book) => book.isbn === isbn);
  }
}

//==========================================================
const library = new Library("City Library");
const librarian = new Librarian("John", "lib001", library);
const member = new Member("Alice", "mem001");
const member2 = new Member("Ali", "mem002");

const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");

console.log(librarian.addBook(book1)); // 1984 has been added to the library.
console.log(librarian.addBook(book2)); // Brave New World has been added to the library.

console.log(library.registerMember(member)); // Alice has been registered as a member of City Library.

console.log(member.borrowBook(book1)); // Alice borrowed "1984".
console.log(member.returnBook(book1)); // Alice returned "1984".
console.log(library.findBookByISBN("0987654321")); //Book {title: 'Brave New World', author: 'Aldous Huxley', isbn: '0987654321', available: true}

console.log(library.findBookByTitle("Brave New World")); //Book {title: 'Brave New World', author: 'Aldous Huxley', isbn: '0987654321', available: true}

console.log(member.borrowBook(book2));
console.log(member2.borrowBook(book2));
