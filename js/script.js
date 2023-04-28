const BODY = document.querySelector('body');
BODY.classList.add('body');
const WRAPPER = document.createElement('div');
WRAPPER.classList.add('wrapper');
BODY.append(WRAPPER);
WRAPPER.insertAdjacentHTML('beforeend', `
  <h1 class="title">Virtual keyboard</h1>
  <textarea class="textarea"></textarea>
  <div class="keyboard"></div>
  <p class="description">Клавиатура создана в операционной системе Windows</p>
  <p class="lang-tip">Переключение языка: левые ctrl + alt</p>
`);
