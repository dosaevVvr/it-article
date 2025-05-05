// Данные статей с тематическими изображениями
const articles = [
    // Алгоритмы (4 статьи)
    {
        id: 1,
        category: 'algorithms',
        title: 'Сортировка пузырьком: полное руководство',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '10 Апреля 2024 • Автор: Алёна Смирнова',
        content: `...` // предыдущее содержание
    },
    {
        id: 2,
        category: 'algorithms',
        title: 'Быстрая сортировка: эффективный метод сортировки данных',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D3D&auto=format&fit=crop&w=800&q=80',
        meta: '12 Апреля 2024 • Автор: Максим Иванов',
        content: `...` // предыдущее содержание
    },
    {
        id: 3,
        category: 'algorithms',
        title: 'Алгоритм Дейкстры: поиск кратчайшего пути',
        image: 'https://images.unsplash.com/photo-1600267165477-6d4cc741b379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '15 Апреля 2024 • Автор: Сергей Петров',
        content: `
            <h2>Основные понятия</h2>
            <p>Алгоритм Дейкстры находит кратчайшие пути от одной вершины графа до всех остальных.</p>
            
            <h2>Области применения</h2>
            <ul>
                <li>Маршрутизация в сетях</li>
                <li>Географические информационные системы</li>
                <li>Логистика и транспорт</li>
            </ul>
            
            <pre><code>function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    
    // Инициализация расстояний
    for (const vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;
    
    while (true) {
        let closestVertex = null;
        let shortestDistance = Infinity;
        
        // Находим ближайшую непосещенную вершину
        for (const vertex in distances) {
            if (!visited.has(vertex) && distances[vertex] < shortestDistance) {
                closestVertex = vertex;
                shortestDistance = distances[vertex];
            }
        }
        
        if (closestVertex === null) break;
        
        // Обновляем расстояния до соседей
        for (const neighbor in graph[closestVertex]) {
            const distance = distances[closestVertex] + graph[closestVertex][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
            }
        }
        
        visited.add(closestVertex);
    }
    
    return distances;
}</code></pre>
        `
    },
    {
        id: 4,
        category: 'algorithms',
        title: 'Динамическое программирование: от теории к практике',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '18 Апреля 2024 • Автор: Анна Кузнецова',
        content: `...` // аналогичное наполнение
    },

    // Программирование (4 статьи)
    {
        id: 5,
        category: 'programming',
        title: 'Паттерны проектирования: Singleton и Factory',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '20 Апреля 2024 • Автор: Дмитрий Соколов',
        content: `...`
    },
    {
        id: 6,
        category: 'programming',
        title: 'Асинхронное программирование в JavaScript',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '22 Апреля 2024 • Автор: Елена Васнецова',
        content: `
            <h2>Основные концепции</h2>
            <p>Асинхронное программирование позволяет выполнять длительные операции без блокировки основного потока.</p>
            
            <h2>Способы работы с асинхронностью</h2>
            <ol>
                <li>Callback-функции</li>
                <li>Promises (Обещания)</li>
                <li>Async/Await</li>
            </ol>
            
            <h3>Пример с Async/Await</h3>
            <pre><code>async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}</code></pre>
        `
    },
    {
        id: 7,
        category: 'programming',
        title: 'Принципы SOLID в объектно-ориентированном программировании',
        image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '25 Апреля 2024 • Автор: Павел Иванов',
        content: `...`
    },
    {
        id: 8,
        category: 'programming',
        title: 'Функциональное программирование: основы и преимущества',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '28 Апреля 2024 • Автор: Ольга Семенова',
        content: `...`
    },

    // Базы данных (4 статьи)
    {
        id: 9,
        category: 'databases',
        title: 'Нормализация баз данных: от 1NF до 5NF',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '30 Апреля 2024 • Автор: Андрей Григорьев',
        content: `...`
    },
    {
        id: 10,
        category: 'databases',
        title: 'Оптимизация SQL-запросов: лучшие практики',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '2 Мая 2024 • Автор: Наталья Крылова',
        content: `
            <h2>Основные методы оптимизации</h2>
            <ul>
                <li>Использование индексов</li>
                <li>Оптимизация JOIN-операций</li>
                <li>Кэширование запросов</li>
            </ul>
            
            <h3>Пример плохого запроса</h3>
            <pre><code>SELECT * FROM users WHERE DATE(created_at) = '2023-01-01';</code></pre>
            
            <h3>Оптимизированная версия</h3>
            <pre><code>SELECT * FROM users 
WHERE created_at >= '2023-01-01' 
AND created_at < '2023-01-02';</code></pre>
        `
    },
    {
        id: 11,
        category: 'databases',
        title: 'Транзакции в SQL: ACID и уровни изоляции',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '5 Мая 2024 • Автор: Ольга Семенова',
        content: `...`
    },
    {
        id: 12,
        category: 'databases',
        title: 'NoSQL vs SQL: сравнительный анализ',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '8 Мая 2024 • Автор: Дмитрий Козлов',
        content: `...`
    },

    // Искусственный интеллект (4 статьи)
    {
        id: 13,
        category: 'ai',
        title: 'Нейронные сети: архитектура и обучение',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '10 Мая 2024 • Автор: Артем Волков',
        content: `...`
    },
    {
        id: 14,
        category: 'ai',
        title: 'Обработка естественного языка (NLP) с BERT',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        meta: '12 Мая 2024 • Автор: Виктория Павлова',
        content: `
            <h2>Что такое BERT?</h2>
            <p>BERT (Bidirectional Encoder Representations from Transformers) — это модель для обработки естественного языка, разработанная Google.</p>
            
            <h2>Основные особенности</h2>
            <ul>
                <li>Двунаправленное обучение</li>
                <li>Архитектура Transformer</li>
                <li>Контекстуальное понимание слов</li>
            </ul>
            
            <h3>Пример использования</h3>
            <pre><code>from transformers import BertTokenizer, BertModel

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

inputs = tokenizer("Hello, world!", return_tensors="pt")
outputs = model(**inputs)</code></pre>
        `
    },
];

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
    setupEventListeners();
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