/* eslint-disable max-len */
/* eslint-disable no-plusplus */
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

for (let i = 0; i < 5; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  KEYBOARD.append(row);
}

const keyLayoutRuCaseDown = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];
const keyLayoutRuCaseUp = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];
const keyLayoutRuCaps = [
  ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];
const keyLayoutRuShiftCaps = [
  ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];
const keyLayoutEnCaseDown = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];
const keyLayoutEnCaseUp = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];
const keyLayoutEnCaps = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];
const keyLayoutEnShiftCaps = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];
const keyClasses = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

function createKeys() {
  function createKey(rowInd, ind) {
    const key = document.createElement('div');
    const rus = document.createElement('span');
    const eng = document.createElement('span');
    const caseDownRu = document.createElement('span');
    const caseUpRu = document.createElement('span');
    const capsRu = document.createElement('span');
    const shiftCapsRu = document.createElement('span');
    const caseDownEn = document.createElement('span');
    const caseUpEn = document.createElement('span');
    const capsEn = document.createElement('span');
    const shiftCapsEn = document.createElement('span');

    key.classList.add('key', keyClasses[rowInd][ind]);
    rus.classList.add('ru');
    eng.classList.add('en', 'hidden');
    caseDownRu.classList.add('caseDown');
    caseUpRu.classList.add('caseUp', 'hidden');
    capsRu.classList.add('caps', 'hidden');
    shiftCapsRu.classList.add('shiftCaps', 'hidden');
    caseDownEn.classList.add('caseDown', 'hidden');
    caseUpEn.classList.add('caseUp', 'hidden');
    capsEn.classList.add('caps', 'hidden');
    shiftCapsEn.classList.add('shiftCaps', 'hidden');

    caseDownRu.innerText = keyLayoutRuCaseDown[rowInd][ind];
    caseUpRu.innerText = keyLayoutRuCaseUp[rowInd][ind];
    capsRu.innerText = keyLayoutRuCaps[rowInd][ind];
    shiftCapsRu.innerText = keyLayoutRuShiftCaps[rowInd][ind];
    caseDownEn.innerText = keyLayoutEnCaseDown[rowInd][ind];
    caseUpEn.innerText = keyLayoutEnCaseUp[rowInd][ind];
    capsEn.innerText = keyLayoutEnCaps[rowInd][ind];
    shiftCapsEn.innerText = keyLayoutEnShiftCaps[rowInd][ind];

    key.append(rus, eng);
    rus.append(caseDownRu, caseUpRu, capsRu, shiftCapsRu);
    eng.append(caseDownEn, caseUpEn, capsEn, shiftCapsEn);

    function shiftSwitch() {
      key.classList.toggle('active');
      const allKeys = document.querySelectorAll('.key');
      if (document.querySelector('.CapsLock').classList.contains('active')) {
        allKeys.forEach((item) => {
          item.querySelector('span:not(.hidden) > .caps').classList.toggle('hidden');
          item.querySelector('span:not(.hidden) > .shiftCaps').classList.toggle('hidden');
        });
      } else {
        allKeys.forEach((item) => {
          item.querySelector('span:not(.hidden) > .caseDown').classList.toggle('hidden');
          item.querySelector('span:not(.hidden) > .caseUp').classList.toggle('hidden');
        });
      }
    }

    function addRemActiv() {
      key.classList.toggle('active');
    }

    switch (keyClasses[rowInd][ind]) {
      case 'Backspace':
        key.addEventListener('mousedown', addRemActiv);
        key.addEventListener('mouseup', addRemActiv);
        key.addEventListener('mousedown', (event) => {
          event.preventDefault();
          const cursPos = TEXTAREA.selectionStart;
          TEXTAREA.value = TEXTAREA.value.substring(0, cursPos - 1) + TEXTAREA.value.substring(cursPos);
          TEXTAREA.setSelectionRange(cursPos - 1, cursPos - 1);
          TEXTAREA.focus();
        });

        break;

      case 'Delete':
        key.addEventListener('mousedown', addRemActiv);
        key.addEventListener('mouseup', addRemActiv);
        key.addEventListener('mousedown', (event) => {
          event.preventDefault();
          const cursPos = TEXTAREA.selectionStart;
          TEXTAREA.value = TEXTAREA.value.substring(0, cursPos) + TEXTAREA.value.substring(cursPos + 1);
          TEXTAREA.setSelectionRange(cursPos, cursPos);
          TEXTAREA.focus();
        });

        break;

      case 'CapsLock':
        key.addEventListener('click', () => {
          key.classList.toggle('active');
          const allKeys = document.querySelectorAll('.key');
          allKeys.forEach((item) => {
            item.querySelector('span:not(.hidden) > .caseDown').classList.toggle('hidden');
            item.querySelector('span:not(.hidden) > .caps').classList.toggle('hidden');
          });
        });

        break;

      case 'ShiftLeft':
        key.addEventListener('mousedown', shiftSwitch);
        key.addEventListener('mouseup', shiftSwitch);

        break;

      case 'ShiftRight':
        key.addEventListener('mousedown', shiftSwitch);
        key.addEventListener('mouseup', shiftSwitch);

        break;

      case 'Enter':
        key.addEventListener('mousedown', addRemActiv);
        key.addEventListener('mouseup', addRemActiv);
        key.addEventListener('mousedown', (event) => {
          event.preventDefault();
          const cursPos = TEXTAREA.selectionStart;
          TEXTAREA.value = `${TEXTAREA.value.substring(0, cursPos)}\n${TEXTAREA.value.substring(cursPos)}`;
          TEXTAREA.setSelectionRange(cursPos + 1, cursPos + 1);
          TEXTAREA.focus();
        });

        break;

      case 'Space':
        key.addEventListener('mousedown', addRemActiv);
        key.addEventListener('mouseup', addRemActiv);
        key.addEventListener('mousedown', (event) => {
          event.preventDefault();
          const cursPos = TEXTAREA.selectionStart;
          TEXTAREA.value = `${TEXTAREA.value.substring(0, cursPos)} ${TEXTAREA.value.substring(cursPos)}`;
          TEXTAREA.setSelectionRange(cursPos + 1, cursPos + 1);
          TEXTAREA.focus();
        });

        break;

      case 'Tab':
        key.addEventListener('mousedown', addRemActiv);
        key.addEventListener('mouseup', addRemActiv);
        key.addEventListener('mousedown', (event) => {
          event.preventDefault();
          const cursPos = TEXTAREA.selectionStart;
          TEXTAREA.value = `${TEXTAREA.value.substring(0, cursPos)}\t${TEXTAREA.value.substring(cursPos)}`;
          TEXTAREA.setSelectionRange(cursPos + 1, cursPos + 1);
          TEXTAREA.focus();
        });

        break;

      case 'ControlLeft':
        key.addEventListener('mousedown', addRemActiv);
        key.addEventListener('mouseup', addRemActiv);

        break;

      case 'ControlRight':
        key.addEventListener('mousedown', addRemActiv);
        key.addEventListener('mouseup', addRemActiv);

        break;

      case 'MetaLeft':
        key.addEventListener('mousedown', addRemActiv);
        key.addEventListener('mouseup', addRemActiv);

        break;

      case 'AltLeft':
        key.addEventListener('mousedown', addRemActiv);
        key.addEventListener('mouseup', addRemActiv);

        break;

      case 'AltRight':
        key.addEventListener('mousedown', addRemActiv);
        key.addEventListener('mouseup', addRemActiv);

        break;

      default:
        key.addEventListener('mousedown', addRemActiv);
        key.addEventListener('mouseup', addRemActiv);
        key.addEventListener('mousedown', (event) => {
          event.preventDefault();
          const cursPos = TEXTAREA.selectionStart;
          TEXTAREA.value = TEXTAREA.value.substring(0, cursPos) + key.querySelector('span:not(.hidden) > span:not(.hidden)').innerText + TEXTAREA.value.substring(cursPos);
          TEXTAREA.setSelectionRange(cursPos + 1, cursPos + 1);
          TEXTAREA.focus();
        });
    }
    return key;
  }

  const rows = Array.from(document.querySelectorAll('.row'));
  for (let i = 0; i < keyClasses.length; i++) {
    keyClasses[i].forEach((cl, j) => {
      rows[i].append(createKey(i, j));
    });
  }
}

createKeys();

const allKeys = document.querySelectorAll('.key');

function keyShifterDown() {
  if (document.querySelector('.CapsLock').classList.contains('active')) {
    allKeys.forEach((item) => {
      item.querySelector('span:not(.hidden) > .caps').classList.remove('hidden');
      item.querySelector('span:not(.hidden) > .shiftCaps').classList.add('hidden');
    });
  } else {
    allKeys.forEach((item) => {
      item.querySelector('span:not(.hidden) > .caseDown').classList.add('hidden');
      item.querySelector('span:not(.hidden) > .caseUp').classList.remove('hidden');
    });
  }
}

function keyShifterUp() {
  if (document.querySelector('.CapsLock').classList.contains('active')) {
    allKeys.forEach((item) => {
      item.querySelector('span:not(.hidden) > .caps').classList.add('hidden');
      item.querySelector('span:not(.hidden) > .shiftCaps').classList.remove('hidden');
    });
  } else {
    allKeys.forEach((item) => {
      item.querySelector('span:not(.hidden) > .caseDown').classList.remove('hidden');
      item.querySelector('span:not(.hidden) > .caseUp').classList.add('hidden');
    });
  }
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const button = document.querySelector(`.${event.code}`);
  if (event.code !== 'CapsLock') {
    button.classList.add('active');
  }
  const cursPos = TEXTAREA.selectionStart;

  switch (event.code) {
    case 'Backspace':
      TEXTAREA.value = TEXTAREA.value.substring(0, cursPos - 1) + TEXTAREA.value.substring(cursPos);
      TEXTAREA.setSelectionRange(cursPos - 1, cursPos - 1);

      break;

    case 'Delete':
      TEXTAREA.value = TEXTAREA.value.substring(0, cursPos) + TEXTAREA.value.substring(cursPos + 1);
      TEXTAREA.setSelectionRange(cursPos, cursPos);

      break;

    case 'CapsLock':
      allKeys.forEach((item) => {
        if (document.querySelector('.CapsLock').classList.contains('active')) {
          item.querySelector('span:not(.hidden) > .caseDown').classList.toggle('hidden');
          item.querySelector('span:not(.hidden) > .caps').classList.toggle('hidden');
        } else {
          item.querySelector('span:not(.hidden) > .caseDown').classList.toggle('hidden');
          item.querySelector('span:not(.hidden) > .caps').classList.toggle('hidden');
        }
      });
      document.querySelector('.CapsLock').classList.toggle('active');

      break;

    case 'ShiftLeft':
      keyShifterDown();

      break;

    case 'ShiftRight':
      keyShifterDown();

      break;

    case 'Enter':
      TEXTAREA.value = `${TEXTAREA.value.substring(0, cursPos)}\n${TEXTAREA.value.substring(cursPos)}`;

      break;

    case 'Space':
      TEXTAREA.value = `${TEXTAREA.value.substring(0, cursPos)} ${TEXTAREA.value.substring(cursPos)}`;

      break;

    case 'Tab':
      TEXTAREA.value = `${TEXTAREA.value.substring(0, cursPos)}\t${TEXTAREA.value.substring(cursPos)}`;

      break;

    case 'ControlLeft':

      break;

    case 'ControlRight':

      break;

    case 'MetaLeft':

      break;

    case 'AltLeft':

      break;

    case 'AltRight':

      break;

    default:
      TEXTAREA.value = TEXTAREA.value.substring(0, cursPos) + button.querySelector('span:not(.hidden) > span:not(.hidden)').innerText + TEXTAREA.value.substring(cursPos);
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code !== 'CapsLock') {
    document.querySelector(`.${event.code}`).classList.remove('active');
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyShifterUp();
  }
});

function runOnKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    // eslint-disable-next-line no-restricted-syntax
    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }

    pressed.clear();

    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

function langSwitch() {
  const flattedClasses = keyClasses.flat();
  flattedClasses.forEach((code) => {
    // const curKey = document.querySelector(`.${code}`);
    const curLang = document.querySelector(`.${code} span:not(.hidden)`);
    const hidLang = document.querySelector(`.${code} .hidden`);
    const curState = curLang.querySelector('span:not(.hidden)');
    const activClass = curState.getAttribute('class');
    console.log(activClass);
    const futureState = hidLang.querySelector(`.${activClass}`);
    curState.classList.toggle('hidden');
    curLang.classList.toggle('hidden');
    hidLang.classList.toggle('hidden');
    futureState.classList.toggle('hidden');
  });
}

runOnKeys(langSwitch, 'ControlLeft', 'AltLeft');
