### Условие задачи

Вы должны создать иерархию классов, моделирующую животных и их поведение. Основой является класс `Animal`, от которого будут наследоваться классы `Shark`, `Cat` и `Dog`. Эти классы должны обладать определенными свойствами и методами.

#### Класс `Animal`

Создайте базовый класс `Animal`, который включает:

- **Свойства**:

  - `name` (строка) — имя животного.
  - `age` (число) — возраст животного.
  - `legs` (число) — количество ног.
  - `species` (строка) — вид животного.
  - `status` (строка) — текущее состояние животного.

- **Метод**:
  - `introduce()` — возвращает строку: `"Hello, my name is [name] and I am [age] years old."`

#### Класс `Shark`

Создайте класс `Shark`, который наследуется от `Animal`:

- **Конструктор**:
  - Принимает параметры `name`, `age`, `status`.
  - Устанавливает `legs` равным 0 и `species` равным `"shark"`.

#### Класс `Cat`

Создайте класс `Cat`, который наследуется от `Animal`:

- **Конструктор**:

  - Принимает параметры `name`, `age`, `status`.
  - Устанавливает `legs` равным 4 и `species` равным `"cat"`.

- **Метод**:
  - Переопределяет `introduce()`, добавляя к стандартной строке фразу `" Meow meow!"`.

#### Класс `Dog`

Создайте класс `Dog`, который наследуется от `Animal`:

- **Конструктор**:

  - Принимает параметры `name`, `age`, `status`, `master`.
  - Устанавливает `legs` равным 4 и `species` равным `"dog"`.

- **Метод**:
  - `greetMaster()` — возвращает строку: `"Hello [master]"`.

### Примеры

```javascript
let dog = new Dog("Rex", 4, "happy", "Alice");
console.log(dog.introduce()); // "Hello, my name is Rex and I am 4 years old."
console.log(dog.greetMaster()); // "Hello Alice"

let cat = new Cat("Whiskers", 2, "curious");
console.log(cat.introduce()); // "Hello, my name is Whiskers and I am 2 years old. Meow meow!"

let shark = new Shark("Jaws", 5, "hungry");
console.log(shark.introduce()); // "Hello, my name is Jaws and I am 5 years old."
```

- **Animal**: Базовый класс, содержащий общие свойства и метод `introduce()`.
- **Shark**: Наследуется от `Animal`, имеет фиксированные значения для свойств `legs` и `species`.
- **Cat**: Наследуется от `Animal`, переопределяет метод `introduce()`, добавляя уникальное поведение.
- **Dog**: Наследуется от `Animal`, добавляет новое свойство `master` и метод `greetMaster()`.

### Условие задачи: Система управления библиотекой

Вы должны создать систему управления библиотекой, которая будет включать классы для книг, пользователей и самой библиотеки. Основные классы: `Library`, `User`, `Book`. Также будут подклассы: `Librarian` и `Member`, которые наследуют от `User`.

#### Класс `Book`

- **Свойства**:

  - `title` (строка) — название книги.
  - `author` (строка) — автор книги.
  - `isbn` (строка) — ISBN книги.
  - `available` (булево) — доступность книги.

- **Методы**:
  - `lend()` — делает книгу недоступной.
  - `returnBook()` — делает книгу доступной.
  - `info()` — возвращает строку с информацией о книге.

#### Класс `User`

- **Свойства**:

  - `name` (строка) — имя пользователя.
  - `id` (строка) — идентификатор пользователя.

- **Методы**:
  - `getInfo()` — возвращает строку с информацией о пользователе.

#### Класс `Member` (наследуется от `User`)

- **Свойства**:

  - `borrowedBooks` (массив объектов `Book`) — список взятых книг.

- **Методы**:
  - `borrowBook(book)` — добавляет книгу в список взятых книг и делает её недоступной.
  - `returnBook(book)` — удаляет книгу из списка взятых книг и делает её доступной.

#### Класс `Librarian` (наследуется от `User`)

- **Свойства**:

  - `library` (объект `Library`) — библиотека, в которой работает библиотекарь.

- **Методы**:
  - `addBook(book)` — добавляет книгу в библиотеку.
  - `removeBook(book)` — удаляет книгу из библиотеки.
  - `lendBook(book, member)` — выдает книгу члену библиотеки.
  - `receiveBook(book)` — принимает книгу обратно в библиотеку.

#### Класс `Library`

- **Свойства**:

  - `name` (строка) — название библиотеки.
  - `books` (массив объектов `Book`) — список книг в библиотеке.
  - `members` (массив объектов `Member`) — список членов библиотеки.

- **Методы**:
  - `registerMember(member)` — регистрирует нового члена библиотеки.
  - `unregisterMember(member)` — удаляет члена из библиотеки.
  - `findBookByTitle(title)` — ищет книгу по названию.
  - `findBookByISBN(isbn)` — ищет книгу по ISBN.

### Примеры

```javascript
// Примеры использования
const library = new Library("City Library");
const librarian = new Librarian("John", "lib001", library);
const member = new Member("Alice", "mem001");

const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");

console.log(librarian.addBook(book1)); // 1984 has been added to the library.
console.log(librarian.addBook(book2)); // Brave New World has been added to the library.

console.log(library.registerMember(member)); // Alice has been registered as a member of City Library.

console.log(member.borrowBook(book1)); // Alice borrowed "1984".
console.log(member.returnBook(book1)); // Alice returned "1984".

console.log(librarian.lendBook(book2, member)); // Brave New World has been lent to Alice.
console.log(librarian.receiveBook(book2)); // Brave New World has been received back into the library.
```

### Пояснение

- **Book**: Класс, представляющий книгу, с методами для выдачи и возврата книг, а также для получения информации о книге.
- **User**: Базовый класс для всех пользователей библиотеки, содержащий основную информацию о пользователе.
- **Member**: Наследует от `User`, добавляет возможность брать книги и возвращать их.
- **Librarian**: Наследует от `User`, добавляет возможность управлять книгами в библиотеке и выдавать их членам.
- **Library**: Класс, представляющий библиотеку, с методами для регистрации и удаления членов, а также для поиска книг.
