function CurrentDate() {
  var date = data.getDate();
  var month = data.getMonth();
  var year = data.getFullYear();

  var monthName;
  monthName = new Array(
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'Maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  );
  return date + ' de ' + monthName[month] + ', ' + year;
}
