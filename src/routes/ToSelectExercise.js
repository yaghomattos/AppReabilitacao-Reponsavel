import React from 'react';

import { Button } from '../components/Button';

export const ToSelectExercises = (patient) => {
  return <Button title="+" onPress="SelectExercises" props={patient} />;
};
