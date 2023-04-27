import { getFeatureFlags } from '../../utils/configuration';

const {
  enabled = false,
  use_legacy_search_icon = false,
  queue: {
    enabled: queueEnabled = false,
    show_only_queues_with_available_workers = false,
    show_real_time_data = false,
    enforce_queue_filter_from_worker_object = false,
  },
  worker: { enabled: workerEnabled = false },
} = getFeatureFlags()?.features?.custom_transfer_directory || {};

export const isFeatureEnabled = () => {
  return enabled;
};

export const isCustomQueueTransferEnabled = () => {
  return isFeatureEnabled() && queueEnabled;
};

export const isCustomWorkerrTransferEnabled = () => {
  return isFeatureEnabled() && workerEnabled;
};

export const showOnlyQueuesWithAvailableWorkers = () => {
  return show_only_queues_with_available_workers;
};

export const showRealTimeQueueData = () => {
  return show_real_time_data;
};

export const enforceQueueFilterFromWorker = () => {
  return enforce_queue_filter_from_worker_object;
};

export const shouldFetchInsightsData = () => {
  return showOnlyQueuesWithAvailableWorkers() || showRealTimeQueueData();
};

export const useLegactSearchIcon = () => {
  return use_legacy_search_icon;
};
