import {mainControlTemplate} from './components/control.js';
import {mainFilterTemplate} from './components/filter.js';
import {mainBoardTemplate} from './components/board.js';
import {boardTaskTemplate} from './components/task.js';
import {boardTaskEditTemplate} from './components/task-edit.js';
import {btnLoadMoreTemplate} from './components/btn-load-more.js';

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
const TASK_COUNT = 3;


function render(container, html, position = `beforeend`) {
  container.insertAdjacentHTML(position, html);
}

render(siteHeaderElement, mainControlTemplate());
render(siteMainElement, mainFilterTemplate());
render(siteMainElement, mainBoardTemplate());

const boardContainer = siteMainElement.querySelector(`.board`);
const taskList = boardContainer.querySelector(`.board__tasks`);
render(taskList, boardTaskEditTemplate());

new Array(TASK_COUNT).fill(``).forEach(()=>{
  render(taskList, boardTaskTemplate());
});

render(boardContainer, btnLoadMoreTemplate());
