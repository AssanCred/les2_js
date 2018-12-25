var arg1 = +prompt('Введите a'),
  arg2 = +prompt('Введите b'),
  operation = prompt('Выберете необходимое действие');

function sum(a, b) {
  return a + b;
}

function vic(a, b) {
  return a - b;
}

function umn(a, b) {
  return a * b;
}

function del(a, b) {
  return a / b;
}

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'sum':
      {
        return sum(arg1, arg2);
      }
    case 'vic':
      {
        return vic(arg1, arg2);
      }
    case 'umn':
      {
        return umn(arg1, arg2);
      }
    case 'del':
      {
        return del(arg1, arg2);
      }
    default:
      {
        alert("Неизвестный знак операции! " + operation);
      }
  }
}
