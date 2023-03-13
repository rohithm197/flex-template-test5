import * as Flex from "@twilio/flex-ui";
import { isMultiParticipantEnabled } from "../../index";
import { FlexActionEvent, FlexAction } from "../../../../types/feature-loader";

export const actionEvent = FlexActionEvent.before;
export const actionName = FlexAction.ShowDirectory;
export const actionHook = function handleChatTransferShowDirectory(
  flex: typeof Flex,
  manager: Flex.Manager
) {
  if (isMultiParticipantEnabled()) return;

  Flex.Actions.addListener(
    `${actionEvent}${actionName}`,
    (payload: any, abortFunction: any) => {
      let display = "flex";
      const taskSid = manager.store.getState().flex.view.selectedTaskSid;

      if (!taskSid) return;

      // Hide consult transfer for CBM tasks only
      if (
        Flex.TaskHelper.isCBMTask(Flex.TaskHelper.getTaskByTaskSid(taskSid))
      ) {
        display = "none";
      }

      manager.updateConfig({
        theme: {
          componentThemeOverrides: {
            WorkerDirectory: {
              Container: {
                ".Twilio-WorkerDirectory-ButtonContainer": {
                  "&>:nth-child(1)": {
                    display,
                  },
                },
              },
            },
          },
        },
      });
    }
  );
}
