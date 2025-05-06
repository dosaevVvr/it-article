const articles = [
    // Алгоритмы (4 статьи)
    {
        id: 1,
        category: 'algorithms',
        title: 'Сортировка пузырьком: полное руководство',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '10 Апреля 2024 • Автор: Алёна Смирнова',
        content: `
            <h2>Основы алгоритма</h2>
            <p>Сортировка пузырьком - это простой алгоритм, который многократно проходит через массив, сравнивая соседние элементы и меняя их местами, если они находятся в неправильном порядке. Этот процесс повторяется до тех пор, пока массив не будет полностью отсортирован.</p>
            
            <h3>Пример реализации на JavaScript</h3>
            <pre><code>function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Меняем элементы местами
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}</code></pre>
            
            <h2>Оптимизации алгоритма</h2>
            <ul>
                <li><strong>Флаг перестановок:</strong> Добавляем проверку, были ли перестановки во внутреннем цикле</li>
                <li><strong>Запоминание позиции:</strong> Запоминаем позицию последней перестановки</li>
                <li><strong>Шейкерная сортировка:</strong> Попеременное движение в обоих направлениях</li>
            </ul>
            
            <h2>Сложность алгоритма</h2>
            <table class="complexity-table">
                <tr>
                    <th>Сценарий</th>
                    <th>Временная сложность</th>
                    <th>Пространственная сложность</th>
                </tr>
                <tr>
                    <td>Лучший случай</td>
                    <td>O(n)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>Средний случай</td>
                    <td>O(n²)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>Худший случай</td>
                    <td>O(n²)</td>
                    <td>O(1)</td>
                </tr>
            </table>
        `
    },
    {
        id: 2,
        category: 'algorithms',
        title: 'Быстрая сортировка: эффективный метод сортировки данных',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '12 Апреля 2024 • Автор: Максим Иванов',
        content: `
            <h2>Принцип "разделяй и властвуй"</h2>
            <p>Быстрая сортировка использует стратегию разделения массива на подмассивы:</p>
            <ol>
                <li>Выбор опорного элемента (pivot)</li>
                <li>Разделение: элементы меньше pivot перемещаются влево, больше - вправо</li>
                <li>Рекурсивное применение к подмассивам</li>
            </ol>
            
            <h3>Реализация на Python</h3>
            <pre><code>def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)</code></pre>
            
            <h2>Выбор опорного элемента</h2>
            <div class="comparison">
                <div class="method">
                    <h3>Медиана трех</h3>
                    <p>Выбор из первого, среднего и последнего элементов</p>
                    <p class="pros-cons">+ Сбалансированное разделение<br>- Дополнительные сравнения</p>
                </div>
                <div class="method">
                    <h3>Случайный элемент</h3>
                    <p>Случайный выбор снижает вероятность худшего случая</p>
                    <p class="pros-cons">+ Хорошая защита от O(n²)<br>- Требуется ГСЧ</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        category: 'algorithms',
        title: 'Алгоритм Дейкстры: поиск кратчайшего пути',
        image: 'https://images.unsplash.com/photo-1600267165477-6d4cc741b379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '15 Апреля 2024 • Автор: Сергей Петров',
        content: `
            <h2>Основные понятия</h2>
            <p>Алгоритм Дейкстры находит кратчайшие пути от начальной вершины до всех остальных в графе с неотрицательными весами ребер.</p>
            
            <h3>Ключевые компоненты</h3>
            <ul>
                <li>Множество посещенных вершин</li>
                <li>Приоритетная очередь для выбора следующей вершины</li>
                <li>Массив расстояний от начальной вершины</li>
            </ul>
            
            <h2>Пример применения</h2>
            <p>Рассмотрим граф дорог между городами с расстояниями:</p>
            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*F3XDM9CRrmnse1MSv-mu0g.png" alt="Пример графа" style="max-width: 100%; height: auto; border-radius: 8px; margin: 15px 0;">
            
            <h3>Шаги выполнения</h3>
            <ol>
                <li>Инициализация: расстояние до старта = 0, до других = ∞</li>
                <li>На каждой итерации выбираем вершину с минимальным расстоянием</li>
                <li>Обновляем расстояния до соседей</li>
                <li>Повторяем, пока не посетим все вершины</li>
            </ol>
        `
    },
    {
        id: 4,
        category: 'algorithms',
        title: 'Динамическое программирование: от теории к практике',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '18 Апреля 2024 • Автор: Анна Кузнецова',
        content: `
            <h2>Основные принципы</h2>
            <p>Динамическое программирование (ДП) - это метод решения задач путем разбиения на перекрывающиеся подзадачи.</p>
            
            <h3>Ключевые характеристики</h3>
            <ul>
                <li><strong>Оптимальная подструктура:</strong> решение задачи зависит от оптимальных решений подзадач</li>
                <li><strong>Перекрывающиеся подзадачи:</strong> подзадачи решаются многократно</li>
                <li><strong>Мемоизация:</strong> сохранение результатов для повторного использования</li>
            </ul>
            
            <h2>Пример: числа Фибоначчи</h2>
            <p>Классический пример для демонстрации ДП:</p>
            
            <div class="code-comparison">
                <div class="inefficient">
                    <h3>Неэффективная рекурсия</h3>
                    <pre><code>function fib(n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}</code></pre>
                    <p>Сложность: O(2ⁿ)</p>
                </div>
                
                <div class="efficient">
                    <h3>Оптимизированный вариант с ДП</h3>
                    <pre><code>function fib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}</code></pre>
                    <p>Сложность: O(n)</p>
                </div>
            </div>
        `
    },

    // Программирование (4 статьи)
    {
        id: 5,
        category: 'programming',
        title: 'Паттерны проектирования: Singleton и Factory',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '20 Апреля 2024 • Автор: Дмитрий Соколов',
        content: `
            <h2>Паттерн Singleton (Одиночка)</h2>
            <p>Гарантирует, что у класса есть только один экземпляр, и предоставляет глобальную точку доступа к нему.</p>
            
            <h3>Реализация на Java</h3>
            <pre><code>public class Database {
    private static Database instance;
    
    private Database() {}
    
    public static Database getInstance() {
        if (instance == null) {
            instance = new Database();
        }
        return instance;
    }
}</code></pre>
            
            <h3>Применение</h3>
            <ul>
                <li>Логгеры</li>
                <li>Подключения к базам данных</li>
                <li>Конфигурационные объекты</li>
            </ul>
            
            <h2>Паттерн Factory (Фабрика)</h2>
            <p>Определяет интерфейс для создания объектов, но оставляет подклассам решение о том, какой класс инстанцировать.</p>
            
            <h3>Пример на TypeScript</h3>
            <pre><code>interface Button {
    render(): void;
    onClick(f: Function): void;
}

class WindowsButton implements Button { /*...*/ }
class MacButton implements Button { /*...*/ }

class ButtonFactory {
    createButton(os: string): Button {
        switch(os) {
            case 'windows': return new WindowsButton();
            case 'mac': return new MacButton();
            default: throw new Error('Unsupported OS');
        }
    }
}</code></pre>
        `
    },
    {
        id: 6,
        category: 'programming',
        title: 'Асинхронное программирование в JavaScript',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '22 Апреля 2024 • Автор: Елена Васнецова',
        content: `
            <h2>Эволюция асинхронности в JS</h2>
            <div class="timeline">
                <div class="era">
                    <h3>Callback Hell (ES5)</h3>
                    <p>Вложенные колбэки приводили к "аду колбэков"</p>
                    <pre><code>fs.readFile(file1, (err, data1) => {
    fs.readFile(file2, (err, data2) => {
        // ...
    });
});</code></pre>
                </div>
                
                <div class="era">
                    <h3>Promises (ES6)</h3>
                    <p>Цепочки вызовов через .then()</p>
                    <pre><code>fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));</code></pre>
                </div>
                
                <div class="era">
                    <h3>Async/Await (ES2017)</h3>
                    <p>Синхронный стиль для асинхронного кода</p>
                    <pre><code>async function loadData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}</code></pre>
                </div>
            </div>
            
            <h2>Сравнение подходов</h2>
            <table>
                <tr>
                    <th>Метод</th>
                    <th>Читаемость</th>
                    <th>Обработка ошибок</th>
                    <th>Поддержка</th>
                </tr>
                <tr>
                    <td>Callbacks</td>
                    <td>Низкая</td>
                    <td>Сложная</td>
                    <td>Все версии</td>
                </tr>
                <tr>
                    <td>Promises</td>
                    <td>Средняя</td>
                    <td>Удобная</td>
                    <td>ES6+</td>
                </tr>
                <tr>
                    <td>Async/Await</td>
                    <td>Высокая</td>
                    <td>Очень удобная</td>
                    <td>ES2017+</td>
                </tr>
            </table>
        `
    },
    {
        id: 7,
        category: 'programming',
        title: 'Принципы SOLID в объектно-ориентированном программировании',
        image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '25 Апреля 2024 • Автор: Павел Иванов',
        content: `
            <h2>Пять принципов SOLID</h2>
            <div class="principles">
                <div class="principle">
                    <h3>1. Single Responsibility</h3>
                    <p>Класс должен иметь только одну причину для изменения</p>
                    <pre><code>// Плохо
class User {
    saveToDatabase() {}
    sendEmail() {}
    logActivity() {}
}

// Хорошо
class User {}
class UserRepository { save() {} }
class EmailService { send() {} }
class Logger { log() {} }</code></pre>
                </div>
                
                <div class="principle">
                    <h3>2. Open-Closed</h3>
                    <p>Классы должны быть открыты для расширения, но закрыты для модификации</p>
                    <pre><code>// Используем абстракции
interface Shape { area(): number; }
class Circle implements Shape {}
class Square implements Shape {}</code></pre>
                </div>
                
                <div class="principle">
                    <h3>3. Liskov Substitution</h3>
                    <p>Подклассы должны быть взаимозаменяемы с родительскими классами</p>
                    <pre><code>// Нарушение: Rectangle и Square
// Нельзя просто заменять один на другой</code></pre>
                </div>
            </div>
        `
    },
    {
        id: 8,
        category: 'programming',
        title: 'Функциональное программирование: основы и преимущества',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '28 Апреля 2024 • Автор: Ольга Семенова',
        content: `
            <h2>Ключевые концепции</h2>
            <div class="concepts">
                <div class="concept">
                    <h3>Чистые функции</h3>
                    <p>Функции без побочных эффектов, которые для одних и тех же входных данных всегда возвращают одинаковый результат</p>
                    <pre><code>// Чистая функция
function add(a, b) {
    return a + b;
}

// Нечистая функция
function randomAdd(a) {
    return a + Math.random();
}</code></pre>
                </div>
                
                <div class="concept">
                    <h3>Неизменяемость</h3>
                    <p>Данные не изменяются, а создаются новые версии</p>
                    <pre><code>// Мутация (плохо)
const arr = [1, 2, 3];
arr.push(4);

// Иммутабельный подход (хорошо)
const newArr = [...arr, 4];</code></pre>
                </div>
            </div>
            
            <h2>Функции высшего порядка</h2>
            <p>Функции, которые принимают или возвращают другие функции:</p>
            
            <div class="hof-examples">
                <pre><code>// map - преобразование массива
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// filter - фильтрация
const evens = numbers.filter(n => n % 2 === 0);

// reduce - агрегация
const sum = numbers.reduce((acc, n) => acc + n, 0);</code></pre>
            </div>
        `
    },

    // Базы данных (4 статьи)
    {
        id: 9,
        category: 'databases',
        title: 'Нормализация баз данных: от 1NF до 5NF',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '30 Апреля 2024 • Автор: Андрей Григорьев',
        content: `
            <h2>Нормальные формы</h2>
            <div class="normal-forms">
                <div class="form">
                    <h3>1NF (Первая нормальная форма)</h3>
                    <ul>
                        <li>Все атрибуты атомарны</li>
                        <li>Нет повторяющихся групп</li>
                        <li>Определен первичный ключ</li>
                    </ul>
                </div>
                
                <div class="form">
                    <h3>2NF (Вторая нормальная форма)</h3>
                    <ul>
                        <li>Соответствует 1NF</li>
                        <li>Нет частичных зависимостей от первичного ключа</li>
                    </ul>
                </div>
                
                <div class="form">
                    <h3>3NF (Третья нормальная форма)</h3>
                    <ul>
                        <li>Соответствует 2NF</li>
                        <li>Нет транзитивных зависимостей</li>
                    </ul>
                </div>
            </div>
            
            <h2>Пример нормализации</h2>
            <p>Денормализованная таблица заказов:</p>
            <table>
                <tr>
                    <th>OrderID</th>
                    <th>Customer</th>
                    <th>Product1</th>
                    <th>Price1</th>
                    <th>Product2</th>
                    <th>Price2</th>
                </tr>
                <tr>
                    <td>1001</td>
                    <td>Иванов</td>
                    <td>Ноутбук</td>
                    <td>50000</td>
                    <td>Мышь</td>
                    <td>1500</td>
                </tr>
            </table>
            
            <p>После нормализации:</p>
            <pre><code>Таблица Orders (OrderID, CustomerID, Date)
Таблица OrderItems (OrderID, ProductID, Quantity, Price)
Таблица Products (ProductID, Name, Category)
Таблица Customers (CustomerID, Name, Address)</code></pre>
        `
    },
    {
        id: 10,
        category: 'databases',
        title: 'Оптимизация SQL-запросов: лучшие практики',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '2 Мая 2024 • Автор: Наталья Крылова',
        content: `
            <h2>Использование индексов</h2>
            <p>Индексы ускоряют поиск, но замедляют вставку и обновление данных.</p>
            
            <h3>Когда создавать индексы:</h3>
            <ul>
                <li>Столбцы в условиях WHERE</li>
                <li>Столбцы в JOIN</li>
                <li>Столбцы в ORDER BY</li>
            </ul>
            
            <h3>Пример создания индекса</h3>
            <pre><code>-- Одноколоночный индекс
CREATE INDEX idx_users_email ON users(email);

-- Составной индекс
CREATE INDEX idx_orders_date_status ON orders(order_date, status);</code></pre>
            
            <h2>Анализ запросов</h2>
            <p>Используйте EXPLAIN для анализа выполнения запросов:</p>
            <pre><code>EXPLAIN ANALYZE 
SELECT * FROM orders 
WHERE customer_id = 100 AND status = 'completed';</code></pre>
            
            <h3>Оптимизация JOIN</h3>
            <p>Плохо:</p>
            <pre><code>SELECT * FROM large_table
JOIN small_table ON large_table.id = small_table.large_id;</code></pre>
            
            <p>Лучше:</p>
            <pre><code>SELECT * FROM small_table
JOIN large_table ON small_table.large_id = large_table.id;</code></pre>
        `
    },
    {
        id: 11,
        category: 'databases',
        title: 'Транзакции в SQL: ACID и уровни изоляции',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '5 Мая 2024 • Автор: Ольга Семенова',
        content: `
            <h2>Свойства ACID</h2>
            <div class="acid">
                <div class="property">
                    <h3>Atomicity (Атомарность)</h3>
                    <p>Транзакция выполняется полностью или не выполняется вообще</p>
                </div>
                
                <div class="property">
                    <h3>Consistency (Согласованность)</h3>
                    <p>Транзакция переводит базу данных из одного согласованного состояния в другое</p>
                </div>
                
                <div class="property">
                    <h3>Isolation (Изолированность)</h3>
                    <p>Параллельные транзакции не мешают друг другу</p>
                </div>
                
                <div class="property">
                    <h3>Durability (Долговечность)</h3>
                    <p>Результаты выполненной транзакции сохраняются даже после сбоев</p>
                </div>
            </div>
            
            <h2>Уровни изоляции</h2>
            <table>
                <tr>
                    <th>Уровень</th>
                    <th>Грязное чтение</th>
                    <th>Неповторяемое чтение</th>
                    <th>Фантомное чтение</th>
                </tr>
                <tr>
                    <td>Read Uncommitted</td>
                    <td>Возможно</td>
                    <td>Возможно</td>
                    <td>Возможно</td>
                </tr>
                <tr>
                    <td>Read Committed</td>
                    <td>Нет</td>
                    <td>Возможно</td>
                    <td>Возможно</td>
                </tr>
                <tr>
                    <td>Repeatable Read</td>
                    <td>Нет</td>
                    <td>Нет</td>
                    <td>Возможно</td>
                </tr>
                <tr>
                    <td>Serializable</td>
                    <td>Нет</td>
                    <td>Нет</td>
                    <td>Нет</td>
                </tr>
            </table>
        `
    },
    {
        id: 12,
        category: 'databases',
        title: 'NoSQL vs SQL: сравнительный анализ',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '8 Мая 2024 • Автор: Дмитрий Козлов',
        content: `
            <h2>Сравнение технологий</h2>
            <div class="comparison">
                <div class="sql">
                    <h3>SQL (Реляционные БД)</h3>
                    <ul>
                        <li>Жесткая схема данных</li>
                        <li>Вертикальная масштабируемость</li>
                        <li>Сложные JOIN-запросы</li>
                        <li>ACID-транзакции</li>
                        <li>Примеры: MySQL, PostgreSQL</li>
                    </ul>
                </div>
                
                <div class="nosql">
                    <h3>NoSQL (Нереляционные БД)</h3>
                    <ul>
                        <li>Гибкая схема</li>
                        <li>Горизонтальная масштабируемость</li>
                        <li>Высокая производительность</li>
                        <li>BASE вместо ACID</li>
                        <li>Примеры: MongoDB, Cassandra</li>
                    </ul>
                </div>
            </div>
            
            <h2>Когда выбирать NoSQL</h2>
            <ul>
                <li>Большие объемы неструктурированных данных</li>
                <li>Требуется горизонтальное масштабирование</li>
                <li>Высокая нагрузка на запись</li>
                <li>Гибкость в изменении структуры данных</li>
            </ul>
            
            <h2>Типы NoSQL баз данных</h2>
            <div class="nosql-types">
                <div class="type">
                    <h3>Документные (MongoDB)</h3>
                    <p>Хранение JSON-документов</p>
                </div>
                
                <div class="type">
                    <h3>Ключ-значение (Redis)</h3>
                    <p>Высокопроизводительное хранение пар</p>
                </div>
                
                <div class="type">
                    <h3>Колоночные (Cassandra)</h3>
                    <p>Оптимизированы для аналитики</p>
                </div>
                
                <div class="type">
                    <h3>Графовые (Neo4j)</h3>
                    <p>Для данных со сложными связями</p>
                </div>
            </div>
        `
    },

    // Искусственный интеллект (4 статьи)
    {
        id: 13,
        category: 'ai',
        title: 'Нейронные сети: архитектура и обучение',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '10 Мая 2024 • Автор: Артем Волков',
        content: `
            <h2>Основные компоненты</h2>
            <div class="nn-components">
                <div class="component">
                    <h3>Нейрон</h3>
                    <p>Основная единица сети, выполняющая вычисления:</p>
                    <p>output = activation(Σ(inputs × weights) + bias)</p>
                </div>
                
                <div class="component">
                    <h3>Слои</h3>
                    <ul>
                        <li>Входной слой</li>
                        <li>Скрытые слои</li>
                        <li>Выходной слой</li>
                    </ul>
                </div>
            </div>
            
            <h2>Процесс обучения</h2>
            <ol>
                <li><strong>Прямое распространение:</strong> вычисление предсказания</li>
                <li><strong>Вычисление ошибки:</strong> сравнение с истинным значением</li>
                <li><strong>Обратное распространение:</strong> корректировка весов</li>
                <li><strong>Оптимизация:</strong> обновление параметров</li>
            </ol>
            
            <h3>Пример на Python с Keras</h3>
            <pre><code>from keras.models import Sequential
from keras.layers import Dense

model = Sequential([
    Dense(64, activation='relu', input_shape=(784,)),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax')
])

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

model.fit(x_train, y_train, epochs=5, batch_size=32)</code></pre>
        `
    },
    {
        id: 14,
        category: 'ai',
        title: 'Обработка естественного языка (NLP) с BERT',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '12 Мая 2024 • Автор: Виктория Павлова',
        content: `
            <h2>Что такое BERT?</h2>
            <p>BERT (Bidirectional Encoder Representations from Transformers) - это модель для обработки естественного языка, разработанная Google в 2018 году.</p>
            
            <h2>Ключевые особенности</h2>
            <ul>
                <li><strong>Двунаправленность:</strong> учитывает контекст с обеих сторон</li>
                <li><strong>Transformer-архитектура:</strong> основана на механизме внимания</li>
                <li><strong>Предобучение:</strong> на больших корпусах текстов</li>
            </ul>
            
            <h2>Применение BERT</h2>
            <div class="bert-applications">
                <div class="application">
                    <h3>Классификация текста</h3>
                    <p>Определение тональности, категоризация</p>
                </div>
                
                <div class="application">
                    <h3>Извлечение ответов</h3>
                    <p>Поиск ответа на вопрос в тексте</p>
                </div>
                
                <div class="application">
                    <h3>Генерация текста</h3>
                    <p>Создание осмысленных продолжений</p>
                </div>
            </div>
            
            <h3>Пример использования</h3>
            <pre><code>from transformers import BertTokenizer, BertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')

inputs = tokenizer("Hello, world!", return_tensors="pt")
outputs = model(**inputs)</code></pre>
        `
    },
];

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
    setupEventListeners();
    setupMobileMenu();
});

// Рендер статей
function renderArticles() {
    const articlesGrid = document.querySelector('.articles-grid');
    articlesGrid.innerHTML = '';
    
    articles.forEach(article => {
        const articleHTML = `
            <div class="article-card" data-article-id="${article.id}">
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <div class="article-content">
                    <div class="article-meta">
                        <span>${article.meta.split(' • ')[0]}</span>
                        <span>${article.category.toUpperCase()}</span>
                    </div>
                    <h2>${article.title}</h2>
                    <p>${article.content.substring(0, 150)}...</p>
                    <a href="#" class="read-more">Читать далее <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
        articlesGrid.insertAdjacentHTML('beforeend', articleHTML);
    });
}

// Показать полную статью
function showFullArticle(id) {
    const article = articles.find(a => a.id == id);
    if (!article) return;
    
    const articlePage = document.getElementById('articlePage');
    articlePage.innerHTML = `
        <button class="back-button" onclick="showArticleList()">
            <i class="fas fa-arrow-left"></i> Назад к статьям
        </button>
        
        <article>
            <div class="article-header">
                <h1 class="article-title">${article.title}</h1>
                <div class="article-meta-full">
                    <span><i class="far fa-calendar-alt"></i> ${article.meta}</span>
                    <span><i class="fas fa-tag"></i> ${article.category.toUpperCase()}</span>
                </div>
            </div>
            
            <img src="${article.image}" alt="${article.title}" class="article-image-full">
            
            <div class="article-body">
                ${article.content}
            </div>
        </article>
    `;
    
    document.getElementById('mainPage').style.display = 'none';
    articlePage.style.display = 'block';
    window.scrollTo(0, 0);
}

// Показать список статей
function showArticleList() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('articlePage').style.display = 'none';
    window.scrollTo(0, 0);
}

// Обработчики событий
function setupEventListeners() {
    document.addEventListener('click', (e) => {
        const articleCard = e.target.closest('.article-card');
        if (articleCard) {
            e.preventDefault();
            const articleId = articleCard.dataset.articleId;
            showFullArticle(articleId);
        }
    });
}

// Для мобильного меню
document.querySelector('.mobile-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Функция фильтрации статей
function filterArticles(category) {
    const articlesGrid = document.querySelector('.articles-grid');
    const allArticles = document.querySelectorAll('.article-card');
    
    // Обновляем активную кнопку
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Анимация и фильтрация
    allArticles.forEach(article => {
        article.style.opacity = '0';
        setTimeout(() => {
            if (category === 'all' || article.dataset.category === category) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
            article.style.opacity = '1';
        }, 200);
    });
}

// Обработчики для кнопок фильтрации
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        filterArticles(btn.dataset.category);
    });
});

// Добавляем data-category к карточкам статей при рендеринге
function renderArticles() {
    const articlesGrid = document.querySelector('.articles-grid');
    articlesGrid.innerHTML = '';
    
    articles.forEach(article => {
        const articleHTML = `
            <div class="article-card" data-article-id="${article.id}" data-category="${article.category}">
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <div class="article-content">
                    <div class="article-meta">
                        <span>${article.meta.split(' • ')[0]}</span>
                        <span class="category-tag ${article.category}">${getCategoryName(article.category)}</span>
                    </div>
                    <h2>${article.title}</h2>
                    <p>${article.content.substring(0, 150)}...</p>
                    <a href="#" class="read-more">Читать далее <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
        articlesGrid.insertAdjacentHTML('beforeend', articleHTML);
    });
}

// Функция для получения красивого имени категории
function getCategoryName(category) {
    const names = {
        'algorithms': 'Алгоритмы',
        'programming': 'Программирование',
        'databases': 'Базы данных',
        'ai': 'Искусственный интеллект'
    };
    return names[category] || category;
}

// Мобильное меню
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
        
        // Блокировка прокрутки при открытом меню
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Блокируем всплытие события
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Закрытие меню при клике в любом месте экрана
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Закрытие меню при клике на ссылки
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Закрытие при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}