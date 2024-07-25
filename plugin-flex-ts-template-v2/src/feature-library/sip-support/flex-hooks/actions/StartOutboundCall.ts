import * as Flex from '@twilio/flex-ui';

import { FlexActionEvent, FlexAction } from '../../../../types/feature-loader';

export const actionEvent = FlexActionEvent.before;
export const actionName = FlexAction.StartOutboundCall;
export const actionHook = function handleNoVoiceClientOutboundCall(flex: typeof Flex, manager: Flex.Manager) {
  flex.Actions.addListener(`${actionEvent}${actionName}`, async () => {
    // TECHFLEX-200 / FLEXUI-5752
    // If the voice client is disabled, or if we are otherwise not using WebRTC and the mic check failed, force it true to allow the call to proceed
    if (
      manager.configuration.disableBrowserVoice === true ||
      (!manager.workerClient?.attributes?.contact_uri?.startsWith('client:') &&
        !manager.store.getState().flex.phone?.listener?.isMicrophoneSet)
    ) {
      manager.store.dispatch({ type: 'PHONE_INIT', payload: { listener: { isMicrophoneSet: true } } });
    }
  });
};
