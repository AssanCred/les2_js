var a = +prompt('Введите a'),
  b = +prompt('Введите b')
if (a >= 0 && b >= 0) {
  alert(a - b)
} else if (a <= 0 && b <= 0) {
  alert(a * b)
} else if (a <= 0 && b >= 0) {
  alert(a + b)
}
