import { readParticipantWithId } from '../components/CRUDs/Participant/index';
import * as referenceValues from './ReferenceValues';

export async function CalcPerformance(params) {
  const name = params.reference;
  const participantId = params.participant;
  var participant = '';
  var reps = '';
  var timer = '';

  if (params.hasOwnProperty('reps')) {
    reps = params.reps;
  } else timer = params.timer;

  participant = await readParticipantWithId(participantId);

  switch (name) {
    case 'TSL_5Reps':
      return (
        timer /
        referenceValues.TSL_5Reps({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'TSL_30Seconds':
      return (
        reps /
        referenceValues.TSL_30Seconds({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'TSL_1Minute':
      return (
        reps /
        referenceValues.TSL_1Minute({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'TUG_Normal':
      return (
        timer /
        referenceValues.TUG_Normal({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'TUG_Maximum':
      return (
        timer /
        referenceValues.TUG_Maximum({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'FourMGS_Normal':
      return (
        timer /
        referenceValues.FourMGS_Normal({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'FourMGS_Maximum':
      return (
        timer /
        referenceValues.FourMGS_Maximum({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'TD6':
      return (
        reps /
        referenceValues.TD6({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'TDIM':
      return (
        timer /
        referenceValues.TDIM({
          age: participant.age,
          gender: participant.gender,
        })
      );
  }
}
