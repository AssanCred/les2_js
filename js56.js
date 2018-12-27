var a = +prompt('Введите a'),
  b = +prompt('Введите b'),
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
  if (y!=0)
  return a / b;
  ale
}

function mathOperation(a, b, operation) {
  switch (operation) {
    case 'sum':
      {
        return alert(sum(a, b));
      }
    case 'vic':
      {
        return alert(vic(a, b));a
      }
    case 'umn':
      {
        return alert(umn(a, b));
      }
    case 'del':
      {
        return alert(del(a, b));
      }
    default:
      {
        alert("Неизвестный знак операции! " + operation);
      }
  }
}
mathOperation(a, b, operation)
