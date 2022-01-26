import { readParticipantWithId } from '../components/CRUDs/Participant/index';
import * as referenceValues from './ReferenceValues';

export async function CalcPerformance(params) {
  const name = params.name;
  const participantId = params.participant;
  var participant = '';
  var reps = '';
  var timer = '';

  if (params.hasOwnProperty('reps')) {
    reps = params.reps;
  } else timer = params.timer;

  participant = await readParticipantWithId(participantId);

  switch (name) {
    case 'Teste Senta e levanta de 5 repetições':
      return (
        timer /
        referenceValues.TSL_5Reps({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'Teste Senta e Levanta de 30 segundos':
      return (
        reps /
        referenceValues.TSL_30Seconds({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'Teste Senta e levanta de 1 minuto':
      return (
        reps /
        referenceValues.TSL_1Minute({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'TUG – VELOCIDADE USUAL':
      return (
        timer /
        referenceValues.TUG_Normal({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'TUG - VELOCIDADE MÁXIMA':
      return (
        timer /
        referenceValues.TUG_Maximum({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case '4MGS - VELOCIDADE USUAL':
      return (
        timer /
        referenceValues.FourMGS_Normal({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case '4MGS - VELOCIDADE MÁXIMA':
      return (
        timer /
        referenceValues.FourMGS_Maximum({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'TESTE DO DEGRAU DE 6 MINUTOS':
      return (
        reps /
        referenceValues.TD6({
          age: participant.age,
          gender: participant.gender,
        })
      );
    case 'TESTE DO DEGRAU INCREMENTAL':
      return (
        timer /
        referenceValues.TDIM({
          age: participant.age,
          gender: participant.gender,
        })
      );
  }
}
