import { getFeatureFlags } from '../../utils/configuration';
import DispositionsConfig, { SelectAttribute } from './types/ServiceConfiguration';

const {
  enabled = false,
  enable_notes = false,
  require_disposition = false,
  global_dispositions = [],
  per_queue = {},
  text_attributes = [],
  select_attributes = [],
  multi_select_group = {},
} = (getFeatureFlags()?.features?.dispositions as DispositionsConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};

export const isNotesEnabled = () => {
  return isFeatureEnabled() && enable_notes;
};

export const isRequireDispositionEnabledForQueue = (queueSid: string) => {
  if (!isFeatureEnabled()) return false;

  let required = require_disposition;

  if (
    queueSid &&
    per_queue[queueSid] &&
    (per_queue[queueSid].require_disposition === true || per_queue[queueSid].require_disposition === false)
  ) {
    required = per_queue[queueSid].require_disposition;
  }

  return required;
};

export const getDispositionsForQueue = (queueSid: string): string[] => {
  if (!isFeatureEnabled()) return [];

  let dispositions = [...global_dispositions];

  if (queueSid && per_queue[queueSid] && per_queue[queueSid].dispositions) {
    dispositions = [...dispositions, ...per_queue[queueSid].dispositions];
  }

  return dispositions;
};

export const getTextAttributes = () => {
  return text_attributes;
};
export const getSelectAttributes = () => {
  return select_attributes;
};
export const getMultiSelectGroup = (): SelectAttribute => {
  return multi_select_group as SelectAttribute;
};
