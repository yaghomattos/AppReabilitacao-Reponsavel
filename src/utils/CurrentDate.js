import React from 'react';
import { Text } from 'react-native';

export const CurrentDate = (props) => {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();

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

  return <Text>{day + ' de ' + monthName[month] + ', ' + year}</Text>;
};
