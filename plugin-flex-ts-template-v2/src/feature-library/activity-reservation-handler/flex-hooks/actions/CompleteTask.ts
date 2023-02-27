import * as Flex from "@twilio/flex-ui";
import WorkerState from "../../helpers/workerActivityHelper";
import { getPendingActivity } from "../../helpers/pendingActivity";
import { FlexActionEvent, FlexAction } from "../../../../types/feature-loader";

export const actionEvent = FlexActionEvent.before;
export const actionName = FlexAction.CompleteTask;
export const actionHook = function beforeCompleteWorkerTask(
  flex: typeof Flex,
  manager: Flex.Manager
) {
  flex.Actions.addListener("beforeCompleteTask", async () => {
    const pendingActivity = getPendingActivity();

    if (pendingActivity) {
      console.debug(
        "beforeCompleteTask, Setting worker to pending activity",
        pendingActivity.name
      );
      WorkerState.setWorkerActivity(pendingActivity.sid, true);
      await WorkerState.waitForWorkerActivityChange(pendingActivity.sid);
    }
  });
}
