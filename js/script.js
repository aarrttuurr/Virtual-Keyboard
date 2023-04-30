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

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 5; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  KEYBOARD.append(row);
}

function createKeys() {
  const fragment = document.createDocumentFragment();
  const keyLayoutRuCaseDown = [
    ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
    ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"]
  ];
  const keyLayoutRuCaseUp = [
    ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del"],
    ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
    ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"]
  ];
  const keyLayoutRuCaps = [
    ["Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "Del"],
    ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
    ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"]
  ];
  const keyLayoutRuShiftCaps = [
    ["ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/", "Del"],
    ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"]
  ];
  const keyLayoutEnCaseDown = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
    ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"]
  ];
  const keyLayoutEnCaseUp = [
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del"],
    ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"]
  ];
  const keyLayoutEnCaps = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del"],
    ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"]
  ];
  const keyLayoutEnShiftCaps = [
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "|", "Del"],
    ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "\"", "Enter"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "▲", "Shift"],
    ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"]
  ];
}
