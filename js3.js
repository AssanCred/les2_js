var a = +prompt('Введите a'), parseint
  b = +prompt('Введите b')
if (a >= 0 && b >= 0) {
  alert(a - b)
} else if (a <= 0 && b <= 0) {
  alert(a * b)
} else if (a <= 0 && b >= 0) {
  alert(a + b)
}
