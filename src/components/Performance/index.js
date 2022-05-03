import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as referenceValues from '../../utils/ReferenceValues';
import { readParticipantWithId } from '../CRUDs/Participant/index';
import styles from './styles';

export const Performance = ({ props }) => {
  const [result, setResult] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [value, setValue] = useState(0);

  const name = props.reference;

  useEffect(() => {
    readParticipantWithId(props.participantId).then((response) => {
      setAge(response.child('age'));
      setGender(response.child('gender'));
    });

    setValue(props.reps ? props.reps : props.timer);

    switch (name) {
      case 'TSL_5Reps':
        setResult(
          value /
            referenceValues.TSL_5Reps({
              age: age,
              gender: gender,
            })
        );
      case 'TSL_30Seconds':
        setResult(
          value /
            referenceValues.TSL_30Seconds({
              age: age,
              gender: gender,
            })
        );
      case 'TSL_1Minute':
        setResult(
          value /
            referenceValues.TSL_1Minute({
              age: age,
              gender: gender,
            })
        );
      case 'TUG_Normal':
        setResult(
          value /
            referenceValues.TUG_Normal({
              age: age,
              gender: gender,
            })
        );
      case 'TUG_Maximum':
        setResult(
          value /
            referenceValues.TUG_Maximum({
              age: age,
              gender: gender,
            })
        );
      case 'FourMGS_Normal':
        setResult(
          value /
            referenceValues.FourMGS_Normal({
              age: age,
              gender: gender,
            })
        );
      case 'FourMGS_Maximum':
        setResult(
          value /
            referenceValues.FourMGS_Maximum({
              age: age,
              gender: gender,
            })
        );
      case 'TD6':
        setResult(
          value /
            referenceValues.TD6({
              age: age,
              gender: gender,
            })
        );
      case 'TDIM':
        setResult(
          value /
            referenceValues.TDIM({
              age: age,
              gender: gender,
            })
        );
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Desempenho'}</Text>
      <Text style={styles.label}>{result + '%'}</Text>
    </View>
  );
};
