import { ITask } from '@twilio/flex-ui';
import { Reservation } from 'types/task-router';

import ApiService from '../../../utils/serverless/ApiService';
import logger from '../../../utils/logger';

class InternalCallService extends ApiService {
  acceptInternalTask = async (reservation: Reservation, taskSid: string) => {
    if (typeof reservation.task.attributes.conference === 'undefined') {
      reservation.call(
        reservation.task.attributes.from,
        `${this.serverlessProtocol}://${this.serverlessDomain}/features/internal-call/common/agent-outbound-join?taskSid=${taskSid}`,
        {
          accept: true,
        },
      );
    } else {
      reservation.call(
        reservation.task.attributes.from,
        `${this.serverlessProtocol}://${this.serverlessDomain}/features/internal-call/common/agent-join-conference?conferenceName=${reservation.task.attributes.conference.friendlyName}`,
        {
          accept: true,
        },
      );
    }
  };

  rejectInternalTask = async (task: ITask) => {
    return new Promise((resolve, reject) => {
      const encodedParams = {
        taskSid: task.taskSid,
        conferenceSid: task.attributes.conference?.sid,
        Token: encodeURIComponent(this.manager.user.token),
      };

      this.fetchJsonWithReject(
        `${this.serverlessProtocol}://${this.serverlessDomain}/features/internal-call/flex/cleanup-rejected-task`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.buildBody(encodedParams),
        },
      )
        .then((response) => {
          logger.info('[internal-call] Outbound task has been placed into wrapping');
          resolve(response);
        })
        .catch((error: any) => {
          logger.error('[internal-call] Unable to place outbound task into wrapping', error);
          reject(error);
        });
    });
  };
}

const internalCallService = new InternalCallService();

export default internalCallService;
