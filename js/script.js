const BODY = document.querySelector('body');
BODY.classList.add('body');
const WRAPPER = document.createElement('div');
WRAPPER.classList.add('wrapper');
const HEADER = document.createElement('h1');
HEADER.classList.add('title');
HEADER.innerText = 'Virtual Keyboard';
const TEXTAREA = document.createElement('textarea');
TEXTAREA.classList.add('textarea');
const KEYBOARD = document.createElement('div');
KEYBOARD.classList.add('keyboard');
BODY.append(WRAPPER);
WRAPPER.append(HEADER, TEXTAREA, KEYBOARD);
WRAPPER.insertAdjacentHTML('beforeend', `
  <p class="description">Клавиатура создана в операционной системе Windows</p>
  <p class="lang-tip">Переключение языка: левые ctrl + alt</p>
`);
