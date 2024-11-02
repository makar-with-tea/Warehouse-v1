# Макаревич Мария, БПИ228
## ДЗ 2 по НИС "Основы промышленной web-разработки на React".
### Формулировка задания 
В этом и последующих домашних заданиях студенту предлагается поэтапно создавать проект, в котором пользователь будет хранить и изменять информацию об условном складе товаров. Весь проект состоит из пяти этапов, по этапу на каждое домашнее задание. В рамках данной работы Вам необходимо создать базовый десктопный интерфейс, на котором отображается информация о существующих на складе товарах. 

Сам интерфейс состоит из следующих блоков: 
- Список товаров
- Навигационная панель
- Боковое меню

### Требования по выполнению работы
#### Требования к блокам интерфейса
**Список товаров**

Список товаров формируется из сетки карточек (размеры произвольные, но высота больше ширины карточки). 
Каждая карточка хранит в себе следующую информацию: 
1. Наименование товара* 
2. Описание товара 
3. Категория товара 
4. Количество товара* 
5. Единица измерения товара* 
6. Изображение товара

Наименование товара должно быть выведено жирным шрифтом.

Звездочкой помечены обязательные поля. 

В случае, если изображение товара отсутствует, необходимо выводить информацию о том, что картинки нет либо шаблонным изображением, либо текстом вместо самой картинки. 

Если описание товара слишком длинное, чтобы помещаться в размер карточки, оно должно быть ограничено 3 строками и обрезано многоточием. 

Пространство сетки должно быть равномерно распределено между всеми объектами списка, при этом выравнивание элементов списка должно быть выполнено по левому краю. 

Дизайн карточки на усмотрение студента. 

Количество карточек на странице – произвольное. 

По клику на карточку пользователю должно отображаться модальное окно с той же информацией о товаре, ширина модального окна больше его высоты, никакая информация не обрезана. 

Подсказка: В этой части задания необходимо выполнить компоненты карточки товара в списке, модального окна и самого списка с карточками. Выполненные компоненты необходимо продемонстрировать на странице. 

**Навигационная панель**

Эта панель призвана для навигации по приложению в дальнейшем. 

На этой панели должны быть блоки: 

- Открытие/закрытие бокового меню
- Товары
- Склады
- О системе
- Личная страница пользователя

Эти блоки в этом домашнем задании не обладают какой-либо функциональностью, их просто необходимо отрисовать.

Навигационная панель находится наверху страницы и отображается при любом состоянии прокрутки страницы (см. CSS-свойство position).

При наведении на блок панели, модель курсора заменяется со стрелочки на клик.

**Боковое меню**

Боковое меню потребуется в дальнейшем для реализации фильтрации отображаемых в списке товаров.

Состоит из следующих элементов:
- Однострочное нерастягиваемое текстовое поле
- Чекбокс, обозначающий фильтр на ненулевое количество элементов на складе
- Выпадающее меню с выбираемой категорией товара.

Функционал фильтров реализовывать не нужно. 

Боковое меню может располагаться с любой вертикальной стороны экрана. 

Боковую панель можно свернуть в тонкую полоску по кнопке на навигационной панели.

Все теги в проекте должны быть семантически логичны, например не стоит прибегать к использованию тега div для вывода текста.

Проект с точки зрения файловой системы должен быть логично упорядочен, логика разделения файлов на компоненты должна быть удобной: если компонент используется другими компонентами, он должен располагаться в специально предназначенном для этого месте, либо на одном уровне с ними.
