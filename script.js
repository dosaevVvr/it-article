// Данные статей
const articles = [
    {
        id: 1,
        category: 'algorithms',
        title: 'Сортировка пузырьком: основы алгоритма',
        image: 'https://picsum.photos/800/400?random=1',
        meta: '10 Апреля 2024 • Автор: Алёна Смирнова',
        content: `<p>Сортировка пузырьком - один из самых простых алгоритмов сортировки. Его суть заключается в многократном проходе по массиву с попарным сравнением элементов и их обменом, если они расположены в неправильном порядке.</p>
                <h3>Преимущества:</h3>
                <ul>
                    <li>Простота реализации</li>
                    <li>Не требует дополнительной памяти</li>
                </ul>
                <h3>Недостатки:</h3>
                <ul>
                    <li>Сложность O(n²) в худшем случае</li>
                    <li>Неэффективен для больших массивов</li>
                </ul>`
    },
    {
        id: 2,
        category: 'algorithms',
        title: 'Быстрая сортировка Хоара',
        image: 'https://picsum.photos/800/400?random=2',
        meta: '12 Апреля 2024 • Автор: Максим Иванов',
        content: `<p>Алгоритм быстрой сортировки, разработанный Тони Хоаром, использует стратегию "разделяй и властвуй".</p>
                <p>Основные шаги:
                <ol>
                    <li>Выбор опорного элемента</li>
                    <li>Разделение массива на две части</li>
                    <li>Рекурсивная сортировка частей</li>
                </ol>
                <p>Средняя сложность: <code>O(n log n)</code></p>`
    },
    {
        id: 3,
        category: 'algorithms',
        title: 'Поиск в ширину (BFS) и глубину (DFS)',
        image: 'https://picsum.photos/800/400?random=11',
        meta: '14 Апреля 2024 • Автор: Сергей Петров',
        content: `<p>Основные алгоритмы обхода графов:</p>
                <h3>BFS (Breadth-First Search)</h3>
                <ul>
                    <li>Использует очередь</li>
                    <li>Идеален для поиска кратчайшего пути</li>
                    <li>Сложность: <code>O(V + E)</code></li>
                </ul>
                
                <h3>DFS (Depth-First Search)</h3>
                <ul>
                    <li>Использует стек</li>
                    <li>Эффективен для проверки связности</li>
                    <li>Сложность: <code>O(V + E)</code></li>
                </ul>`
    },
    {
        id: 4,
        category: 'algorithms',
        title: 'Динамическое программирование',
        image: 'https://picsum.photos/800/400?random=12',
        meta: '16 Апреля 2024 • Автор: Анна Кузнецова',
        content: `<p>Метод решения задач путем разбиения на подзадачи:</p>
                <h3>Основные принципы:</h3>
                <ol>
                    <li>Оптимальная подструктура</li>
                    <li>Перекрывающиеся подзадачи</li>
                    <li>Мемоизация результатов</li>
                </ol>
                <p>Примеры задач: числа Фибоначчи, задача о рюкзаке</p>`
    },
    {
        id: 5,
        category: 'programming',
        title: 'Паттерны проектирования: Singleton и Factory',
        image: 'https://picsum.photos/800/400?random=13',
        meta: '18 Апреля 2024 • Автор: Дмитрий Соколов',
        content: `<h3>Singleton (Одиночка)</h3>
                <ul>
                    <li>Гарантирует единственный экземпляр класса</li>
                    <li>Использование: логгеры, подключения к БД</li>
                </ul>
                
                <h3>Factory (Фабрика)</h3>
                <ul>
                    <li>Инкапсулирует создание объектов</li>
                    <li>Позволяет изменять тип создаваемых объектов</li>
                </ul>
                <pre><code>// Пример Factory
class ButtonFactory {
    createButton(type) {
        switch(type) {
            case 'windows': return new WindowsButton();
            case 'mac': return new MacButton();
        }
    }
}</code></pre>`
    },
    {
        id: 6,
        category: 'programming',
        title: 'Тестирование кода: Unit и Integration тесты',
        image: 'https://picsum.photos/800/400?random=14',
        meta: '20 Апреля 2024 • Автор: Елена Васнецова',
        content: `<h3>Unit-тесты</h3>
                <ul>
                    <li>Проверяют отдельные модули</li>
                    <li>Быстрые и изолированные</li>
                    <li>Инструменты: JUnit, pytest</li>
                </ul>
                
                <h3>Интеграционные тесты</h3>
                <ul>
                    <li>Проверяют взаимодействие компонентов</li>
                    <li>Требуют настройки окружения</li>
                    <li>Пример: тестирование API</li>
                </ul>`
    },
    {
        id: 7,
        category: 'databases',
        title: 'Индексы в SQL: оптимизация запросов',
        image: 'https://picsum.photos/800/400?random=15',
        meta: '22 Апреля 2024 • Автор: Андрей Григорьев',
        content: `<p>Индексы ускоряют поиск данных в таблицах:</p>
                <h3>Типы индексов:</h3>
                <ul>
                    <li>B-дерево (стандартный индекс)</li>
                    <li>Хэш-индекс</li>
                    <li>Полнотекстовый поиск</li>
                </ul>
                
                <pre><code>-- Создание индекса
CREATE INDEX idx_users_email 
ON users (email);</code></pre>
                
                <h3>Когда использовать:</h3>
                <ul>
                    <li>Частые поисковые запросы</li>
                    <li>Большие таблицы (>10k записей)</li>
                </ul>`
    },
    {
        id: 8,
        category: 'databases',
        title: 'Транзакции и ACID',
        image: 'https://picsum.photos/800/400?random=16',
        meta: '24 Апреля 2024 • Автор: Ольга Семенова',
        content: `<h3>Свойства ACID:</h3>
                <ul>
                    <li><strong>Atomicity</strong> (Атомарность)</li>
                    <li><strong>Consistency</strong> (Согласованность)</li>
                    <li><strong>Isolation</strong> (Изолированность)</li>
                    <li><strong>Durability</strong> (Долговечность)</li>
                </ul>
                
                <h3>Уровни изоляции:</h3>
                <ol>
                    <li>Read uncommitted</li>
                    <li>Read committed</li>
                    <li>Repeatable read</li>
                    <li>Serializable</li>
                </ol>`
    },
    {
        id: 9,
        category: 'ai',
        title: 'Обработка естественного языка (NLP)',
        image: 'https://picsum.photos/800/400?random=17',
        meta: '26 Апреля 2024 • Автор: Артем Волков',
        content: `<p>Основные задачи NLP:</p>
                <ul>
                    <li>Токенизация текста</li>
                    <li>Распознавание именованных сущностей (NER)</li>
                    <li>Анализ тональности</li>
                    <li>Машинный перевод</li>
                </ul>
                
                <h3>Популярные библиотеки:</h3>
                <ul>
                    <li>NLTK (Python)</li>
                    <li>spaCy</li>
                    <li>Hugging Face Transformers</li>
                </ul>`
    },
    {
        id: 10,
        category: 'ai',
        title: 'Компьютерное зрение: основы',
        image: 'https://picsum.photos/800/400?random=18',
        meta: '28 Апреля 2024 • Автор: Виктория Павлова',
        content: `<h3>Основные задачи:</h3>
                <ul>
                    <li>Классификация изображений</li>
                    <li>Обнаружение объектов</li>
                    <li>Сегментация изображений</li>
                </ul>
                
                <h3>Архитектуры нейросетей:</h3>
                <ol>
                    <li>CNN (Сверточные сети)</li>
                    <li>YOLO (Обнаружение объектов)</li>
                    <li>U-Net (Сегментация)</li>
                </ol>`
    },
    {
        id: 11,
        category: 'programming',
        title: 'Введение в Git и GitHub',
        image: 'https://picsum.photos/800/400?random=19',
        meta: '30 Апреля 2024 • Автор: Павел Иванов',
        content: `<h3>Основные команды Git:</h3>
                <pre><code>git init        # Инициализация репозитория
git add .       # Добавление изменений
git commit -m "Сообщение"
git push        # Отправка на удаленный сервер</code></pre>
                
                <h3>Ключевые концепции:</h3>
                <ul>
                    <li>Ветки (branches)</li>
                    <li>Слияние (merge)</li>
                    <li>Конфликты и их разрешение</li>
                </ul>`
    },
    {
        id: 12,
        category: 'databases',
        title: 'NoSQL vs SQL: сравнение',
        image: 'https://picsum.photos/800/400?random=20',
        meta: '2 Мая 2024 • Автор: Наталья Крылова',
        content: `<h3>SQL Базы данных:</h3>
                <ul>
                    <li>Реляционная модель</li>
                    <li>Жесткая схема</li>
                    <li>Примеры: MySQL, PostgreSQL</li>
                </ul>
                
                <h3>NoSQL Базы данных:</h3>
                <ul>
                    <li>Гибкая схема</li>
                    <li>Типы: документные, ключ-значение, графовые</li>
                    <li>Примеры: MongoDB, Redis</li>
                </ul>`
    },
    {
        id: 13,
        category: 'ai',
        title: 'Генеративно-состязательные сети (GAN)',
        image: 'https://picsum.photos/800/400?random=21',
        meta: '4 Мая 2024 • Автор: Кирилл Новиков',
        content: `<p>Архитектура GAN состоит из двух нейросетей:</p>
                <ol>
                    <li><strong>Генератор</strong> - создает поддельные данные</li>
                    <li><strong>Дискриминатор</strong> - отличает реальные данные от поддельных</li>
                </ol>
                
                <h3>Применение:</h3>
                <ul>
                    <li>Генерация изображений</li>
                    <li>Синтез текста</li>
                    <li>Улучшение качества данных</li>
                </ul>`
    }
];


// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
    setupEventListeners();
    checkUrlHash();
});

// Рендер статей
function renderArticles(filterCategory = 'all') {
    const articlesContainer = document.querySelector('.articles');
    articlesContainer.innerHTML = '';

    const filteredArticles = filterCategory === 'all' 
        ? articles 
        : articles.filter(article => article.category === filterCategory);

    filteredArticles.forEach(article => {
        const articleHTML = `
            <article class="article-card" data-article-id="${article.id}">
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <div class="article-meta">${article.meta}</div>
                <h2>${article.title}</h2>
                ${article.content.substring(0, 100)}...
                <a href="#" class="read-more">Читать далее →</a>
            </article>
        `;
        articlesContainer.insertAdjacentHTML('beforeend', articleHTML);
    });
}

// Обработчики событий
function setupEventListeners() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.article-card') || e.target.closest('.read-more')) {
            e.preventDefault();
            const articleId = e.target.closest('.article-card').dataset.articleId;
            showFullArticle(articleId);
        }
    });

    document.querySelector('.back-button').addEventListener('click', showMainPage);
    document.querySelector('.home-link').addEventListener('click', showMainPage);

    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;
            renderArticles(category);
        });
    });
}

// Показать полную статью
function showFullArticle(id) {
    const article = articles.find(a => a.id == id);
    if (!article) return;

    document.getElementById('fullArticleImage').src = article.image;
    document.getElementById('fullArticleMeta').innerHTML = article.meta;
    document.getElementById('fullArticleTitle').innerHTML = article.title;
    document.getElementById('fullArticleContent').innerHTML = article.content;

    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('articlePage').style.display = 'block';
    window.location.hash = `article-${id}`;
}

// Показать главную страницу
function showMainPage() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('articlePage').style.display = 'none';
    window.location.hash = '';
}

// Проверка URL hash
function checkUrlHash() {
    const hash = window.location.hash.substring(1);
    if (hash.startsWith('article-')) {
        const id = hash.split('-')[1];
        showFullArticle(id);
    }
}