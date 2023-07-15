# Менеджер задач

Учебный демо-проект от HTML Academy для 12 потока профессионального онлайн‑курса «JavaScript. Архитектура клиентских приложений».

### Как пользоваться репозиторием

Первый вариант, это изучать коммиты [в веб-интерфейсе GitHub в master-ветке потока](https://github.com/htmlacademy/intensive-objects-taskmanager/tree/season/12/master).

Второй вариант, изучать коммиты локально. Для этого нужно:
1. Склонировать репозиторий на свой компьютер. Именно склонировать, а не скачать архив.

2. Открыть папку репозитория в терминале, который поддерживает Git.

3. Убедиться, что ветка `master`.

4. С помощью команды `git log --oneline` посмотреть список коммитов. Коммиты идут сверху вниз от новых к старым, выглядит это примерно вот так:
  ```bash
  c0ea9d8 1.2 Создаст функцию для генерации разметки меню WIP
  1a34516 1.1 Подключит скрипт `src/main.js` к `public/index.html`
  45f1ffe :hatching_chick: начальное состояние проекта
  ```

5. Найти нужный коммит, скопировать его хэш (цифро-буквенный код в начале строки).

6. Встать на нужный коммит с помощью команды `git checkout хэш_коммита`. Например, вот так `git checkout c0ea9d8`.

7. Всё, изучайте код конкретного коммита. Чтобы вернуть всё как было, используйте команду `git checkout master`.

> **Будьте внимательны**, если вы внесёте изменения в момент, когда изучаете коммиты, при попытке вернуться обратно, Git потребует от вас либо откатить изменения, либо закоммитить их. Пока вы не сделаете это, вернуться на master-ветку у вас не выйдет.

### Условные обозначения
- Приписка `WIP` в названии коммита означает, что код в этом коммите может частично или полностью не работать, вызывать ошибки линтера, ломать сборку (`npm run build`) или не запускаться в режиме разработки (`npm run start`). Это нормально, потому что `WIP` — это аббревиатура `Work In Progress`, что дословно означает «работа в процессе». То есть такой коммит отражает некое промежуточное состояние нашего проекта.
- Номер коммита `A. [B. ]C` расшифровывается, если не оговорено другое, следующим образом:
  - `A.` — номер модуля;
  - `[B. ]` — номер части домашнего задания. Квадратные скобки означают опциональность, потому что не все домашние задания даются в двух частях;
  - `C.` — порядковый номер. Исключительно для удобства.
   
