export function TSL_5Reps(params) {
  const age = params.age;
  const gender = params.gender;

  if (age >= 20 && age <= 29) {
    if (gender === 'male') {
      return 8.11;
    }
    return 7.29;
  } else if (age >= 30 && age <= 39) {
    if (gender === 'male') {
      return 7.78;
    }
    return 8.28;
  } else if (age >= 40 && age <= 49) {
    if (gender === 'male') {
      return 9.56;
    }
    return 9.07;
  } else if (age >= 50 && age <= 59) {
    if (gender === 'male') {
      return 8.92;
    }
    return 10.1;
  } else if (age >= 60 && age <= 69) {
    if (gender === 'male') {
      return 10.6;
    }
    return 10.6;
  } else if (age >= 70 && age <= 80) {
    if (gender === 'male') {
      return 10.8;
    }
    return 11.4;
  } else return null;
}

export function TSL_30Seconds(params) {
  const age = params.age;
  const gender = params.gender;

  if (age >= 20 && age <= 29) {
    if (gender === 'male') {
      return 18;
    }
    return 19;
  } else if (age >= 30 && age <= 39) {
    if (gender === 'male') {
      return 19;
    }
    return 17;
  } else if (age >= 40 && age <= 49) {
    if (gender === 'male') {
      return 16;
    }
    return 17;
  } else if (age >= 50 && age <= 59) {
    if (gender === 'male') {
      return 17;
    }
    return 14;
  } else if (age >= 60 && age <= 69) {
    if (gender === 'male') {
      return 16;
    }
    return 16;
  } else if (age >= 70 && age <= 80) {
    if (gender === 'male') {
      return 14;
    }
    return 14;
  } else return null;
}

export function TSL_1Minute(params) {
  const age = params.age;
  const gender = params.gender;

  if (age >= 20 && age <= 29) {
    if (gender === 'male') {
      return 35;
    }
    return 38;
  } else if (age >= 30 && age <= 39) {
    if (gender === 'male') {
      return 36;
    }
    return 35;
  } else if (age >= 40 && age <= 49) {
    if (gender === 'male') {
      return 31;
    }
    return 34;
  } else if (age >= 50 && age <= 59) {
    if (gender === 'male') {
      return 32;
    }
    return 28;
  } else if (age >= 60 && age <= 69) {
    if (gender === 'male') {
      return 30;
    }
    return 29;
  } else if (age >= 70 && age <= 80) {
    if (gender === 'male') {
      return 27;
    }
    return 26;
  } else return null;
}

export function TUG_Normal(params) {
  const age = params.age;
  const gender = params.gender;

  if (age >= 20 && age <= 29) {
    if (gender === 'male') {
      return 8.07;
    }
    return 7.69;
  } else if (age >= 30 && age <= 39) {
    if (gender === 'male') {
      return 7.68;
    }
    return 7.84;
  } else if (age >= 40 && age <= 49) {
    if (gender === 'male') {
      return 8.39;
    }
    return 8.38;
  } else if (age >= 50 && age <= 59) {
    if (gender === 'male') {
      return 8.74;
    }
    return 8.64;
  } else if (age >= 60 && age <= 69) {
    if (gender === 'male') {
      return 8.59;
    }
    return 9.84;
  } else if (age >= 70 && age <= 80) {
    if (gender === 'male') {
      return 9.94;
    }
    return 9.96;
  } else return null;
}

export function TUG_Maximum(params) {
  const age = params.age;
  const gender = params.gender;

  if (age >= 20 && age <= 29) {
    if (gender === 'male') {
      return 5.4;
    }
    return 5.94;
  } else if (age >= 30 && age <= 39) {
    if (gender === 'male') {
      return 5.7;
    }
    return 6.03;
  } else if (age >= 40 && age <= 49) {
    if (gender === 'male') {
      return 6.24;
    }
    return 6.44;
  } else if (age >= 50 && age <= 59) {
    if (gender === 'male') {
      return 6.38;
    }
    return 6.87;
  } else if (age >= 60 && age <= 69) {
    if (gender === 'male') {
      return 6.63;
    }
    return 7.86;
  } else if (age >= 70 && age <= 80) {
    if (gender === 'male') {
      return 7.78;
    }
    return 7.94;
  } else return null;
}

export function FourMGS_Normal(params) {
  const age = params.age;
  const gender = params.gender;

  if (age >= 20 && age <= 29) {
    if (gender === 'male') {
      return 1.13;
    }
    return 1.58;
  } else if (age >= 30 && age <= 39) {
    if (gender === 'male') {
      return 1.19;
    }
    return 1.14;
  } else if (age >= 40 && age <= 49) {
    if (gender === 'male') {
      return 1.14;
    }
    return 1.51;
  } else if (age >= 50 && age <= 59) {
    if (gender === 'male') {
      return 1.09;
    }
    return 1.42;
  } else if (age >= 60 && age <= 69) {
    if (gender === 'male') {
      return 1.0;
    }
    return 1.3;
  } else if (age >= 70 && age <= 80) {
    if (gender === 'male') {
      return 0.95;
    }
    return 1.25;
  } else return null;
}

export function FourMGS_Maximum(params) {
  const age = params.age;
  const gender = params.gender;

  if (age >= 20 && age <= 29) {
    if (gender === 'male') {
      return 1.68;
    }
    return 1.58;
  } else if (age >= 30 && age <= 39) {
    if (gender === 'male') {
      return 1.7;
    }
    return 1.59;
  } else if (age >= 40 && age <= 49) {
    if (gender === 'male') {
      return 1.64;
    }
    return 1.51;
  } else if (age >= 50 && age <= 59) {
    if (gender === 'male') {
      return 1.58;
    }
    return 1.42;
  } else if (age >= 60 && age <= 69) {
    if (gender === 'male') {
      return 1.5;
    }
    return 1.3;
  } else if (age >= 70 && age <= 80) {
    if (gender === 'male') {
      return 1.3;
    }
    return 1.25;
  } else return null;
}

export function TD6(params) {
  const age = params.age;
  const gender = params.gender;

  if (age >= 20 && age <= 29) {
    if (gender === 'male') {
      return null;
    }
    return null;
  } else if (age >= 30 && age <= 39) {
    if (gender === 'male') {
      return null;
    }
    return null;
  } else if (age >= 40 && age <= 49) {
    if (gender === 'male') {
      return null;
    }
    return null;
  } else if (age >= 50 && age <= 59) {
    if (gender === 'male') {
      return null;
    }
    return null;
  } else if (age >= 60 && age <= 69) {
    if (gender === 'male') {
      return null;
    }
    return null;
  } else if (age >= 70 && age <= 80) {
    if (gender === 'male') {
      return null;
    }
    return null;
  } else return null;
}

export function TDIM(params) {
  const age = params.age;
  const gender = params.gender;

  if (age >= 20 && age <= 29) {
    if (gender === 'male') {
      return null;
    }
    return null;
  } else if (age >= 30 && age <= 39) {
    if (gender === 'male') {
      returnnull;
    }
    return null;
  } else if (age >= 40 && age <= 49) {
    if (gender === 'male') {
      return null;
    }
    return null;
  } else if (age >= 50 && age <= 59) {
    if (gender === 'male') {
      return null;
    }
    return null;
  } else if (age >= 60 && age <= 69) {
    if (gender === 'male') {
      returnnull;
    }
    returnnull;
  } else if (age >= 70 && age <= 80) {
    if (gender === 'male') {
      returnnull;
    }
    return null;
  } else return null;
}
