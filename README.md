# Countries Search App

A web application for searching countries and viewing information about them.

## Live Demo

[View the live application](https://hanna-serdjuk.github.io/goit-js-hw-10/)

## About the Project

This project was developed as part of my web development training. It allows users to search for countries by name and view information about matching results.

The application retrieves country data from an external API and displays it in a clear and user-friendly interface.

## Features

- Search for countries by name
- Find countries using partial name matches
- Display a list of matching countries
- View detailed information about a country
- Display the country's flag, capital, population, and languages

## Technologies

- HTML5
- CSS3
- JavaScript
- Handlebars
- Parcel
- Fetch API
- REST API

## API

The application uses [countries.dev](https://countries.dev/) to retrieve country information.

## What I Learned

- Working with asynchronous JavaScript
- Fetching data from an external API
- Processing JSON responses
- Handling search queries and user input
- Rendering dynamic content with Handlebars
- Integrating API data into a web application

## Getting Started

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Hanna-Serdjuk/goit-js-hw-10.git
   ```

2. Navigate to the project directory:

   ```bash
   cd goit-js-hw-10
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server using the script configured in `package.json`.

## Author

**Hanna Serdjuk**

[GitHub Profile](https://github.com/Hanna-Serdjuk)




# Parcel boilerplate

## Скрытые файлы

Включите отображение скрытых файлов и папок в проводнике своей операционной системы, иначе вы не
сможете выбрать и скопировать себе файлы настроек проекта, имена которых начинаются с точки.

## Зависимости

На компьютере должена быть установлена LTS-версия [Node.js](https://nodejs.org/en/) со всеми
дополнительными инструментами кроме **Chocolatey** - его ставить не нужно.

## Перед началом работы

Один раз на проект установить все зависимости.

```shell
npm ci
```

### Разработка

Запустить режим разработки.

```shell
npm run dev
```

Во вкладке браузера перейти по адресу [http://localhost:1234](http://localhost:1234).

### Деплой

Сборка будет автоматически собирать и деплоить продакшен версию проекта на GitHub Pages, в ветку
`gh-pages`, каждый раз когда обновляется ветка `main`. Например, после прямого пуша или принятого
пул-реквеста. Для этого необходимо в файле `package.json` отредактировать поле `homepage` и скрипт
`build`, заменив `имя_пользователя` и `имя_репозитория` на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория",
"scripts": {
  "build": "parcel build src/*.html --public-url /имя_репозитория/"
},
```

На всякий случай стоит зайти в настройки репозитория `Settings` > `Pages` и убедиться что продакшен
версии файлов раздаются из папки `/root` ветки `gh-pages`.

Через какое-то время живую страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`, например
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

## Файлы и папки

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  `src/sass/main.scss`
- Изображения добавляйте в папку `src/images`, заранее оптимизировав их. Сборщик просто копирует
  используемые изображения чтобы не нагружать систему оптимизацией картинок, так как на слабых
  компьютерах это может занять много времени.
