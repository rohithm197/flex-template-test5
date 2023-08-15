import { WorkerQueue } from '@twilio/flex-ui/src/state/QueuesState';

export const mockQueuesData: WorkerQueue[] = [
  {
    key: 'WQ123abc',
    friendly_name: 'Everyone',
    total_available_workers: 1,
    total_eligible_workers: 3,
    activity_statistics: [
      {
        sid: 'WA123',
        workers: 2,
        friendly_name: 'Offline',
        available_workers: 10,
      },
      {
        sid: 'WA124',
        workers: 1,
        friendly_name: 'Break',
        available_workers: 10,
      },
      {
        sid: 'WA234',
        workers: 1,
        friendly_name: 'Available',
        available_workers: 10,
      },
      {
        sid: 'WA245',
        workers: 0,
        friendly_name: 'Unavailable',
        available_workers: 10,
      },
      {
        sid: 'WA246',
        workers: 0,
        friendly_name: 'Training',
        available_workers: 10,
      },
    ],
    tasks_by_status: {
      reserved: 0,
      pending: 0,
      assigned: 0,
      wrapping: 0,
    },
    total_tasks: 0,
    tasks_by_priority: {},
    longest_task_waiting_sid: null,
    longest_task_waiting_from: null,
    sla_30_min: {
      total_tasks_count: 0,
      handled_tasks_count: 0,
      handled_tasks_within_sl_threshold_count: 0,
      handled_tasks_within_sl_threshold_percentage: -1,
      abandoned_tasks_count: 0,
      abandoned_tasks_percentage: -1,
      short_abandoned_tasks_count: 0,
      short_abandoned_tasks_percentage: -1,
      flow_out_tasks_count: 0,
      flow_out_tasks_percentage: -1,
      sla_percentage: -1,
      timestamp_updated: 0,
      average_abandon_time: 0,
      average_handle_time: 0,
      average_ring_time: 0,
      average_talk_time: 0,
      average_wrapup_time: 0,
      total_missed_invitations: 0,
      total_rejected_invitations: 0,
      average_waiting_time: 0,
    },
    sla_today: {
      total_tasks_count: 0,
      handled_tasks_count: 0,
      handled_tasks_within_sl_threshold_count: 0,
      handled_tasks_within_sl_threshold_percentage: -1,
      abandoned_tasks_count: 0,
      abandoned_tasks_percentage: -1,
      short_abandoned_tasks_count: 0,
      short_abandoned_tasks_percentage: -1,
      flow_out_tasks_count: 0,
      flow_out_tasks_percentage: -1,
      sla_percentage: -1,
      timestamp_updated: 0,
      average_abandon_time: 0,
      average_handle_time: 0,
      average_ring_time: 0,
      average_talk_time: 0,
      average_wrapup_time: 0,
      total_missed_invitations: 0,
      total_rejected_invitations: 0,
      average_waiting_time: 0,
    },
    channels: [
      {
        unique_name: 'chat',
        friendly_name: 'Programmable Chat',
        sid: 'TC123',
        tasks_now: {
          pending_tasks: 0,
          reserved_tasks: 0,
          assigned_tasks: 0,
          wrapping_tasks: 0,
          total_tasks: 0,
          longest_task_waiting_sid: null,
          longest_task_waiting_from: null,
          timestamp_updated: 0,
          longest_task_waiting_age: 0,
          tasks_by_priority: 0,
        },
        sla_today: {
          total_tasks_count: 0,
          handled_tasks_count: 15,
          handled_tasks_within_sl_threshold_count: 10,
          handled_tasks_within_sl_threshold_percentage: -1,
          abandoned_tasks_count: 0,
          abandoned_tasks_percentage: -1,
          short_abandoned_tasks_count: 0,
          short_abandoned_tasks_percentage: -1,
          flow_out_tasks_count: 0,
          flow_out_tasks_percentage: -1,
          sla_percentage: -1,
          timestamp_updated: 0,
          average_abandon_time: 0,
          average_handle_time: 0,
          average_ring_time: 0,
          average_talk_time: 0,
          average_wrapup_time: 0,
          total_missed_invitations: 0,
          total_rejected_invitations: 0,
          average_waiting_time: 0,
        },
        sla_30_min: {
          total_tasks_count: 0,
          handled_tasks_count: 15,
          handled_tasks_within_sl_threshold_count: 10,
          handled_tasks_within_sl_threshold_percentage: -1,
          abandoned_tasks_count: 0,
          abandoned_tasks_percentage: -1,
          short_abandoned_tasks_count: 0,
          short_abandoned_tasks_percentage: -1,
          flow_out_tasks_count: 0,
          flow_out_tasks_percentage: -1,
          sla_percentage: -1,
          timestamp_updated: 0,
          average_abandon_time: 0,
          average_handle_time: 0,
          average_ring_time: 0,
          average_talk_time: 0,
          average_wrapup_time: 0,
          total_missed_invitations: 0,
          total_rejected_invitations: 0,
          average_waiting_time: 0,
        },
      },
      {
        unique_name: 'voice',
        friendly_name: 'Voice',
        sid: 'TC123',
        tasks_now: {
          pending_tasks: 0,
          reserved_tasks: 0,
          assigned_tasks: 0,
          wrapping_tasks: 0,
          total_tasks: 0,
          longest_task_waiting_sid: null,
          longest_task_waiting_from: null,
          timestamp_updated: 0,
          longest_task_waiting_age: 0,
          tasks_by_priority: 0,
        },
        sla_today: {
          total_tasks_count: 0,
          handled_tasks_count: 25,
          handled_tasks_within_sl_threshold_count: 24,
          handled_tasks_within_sl_threshold_percentage: -1,
          abandoned_tasks_count: 0,
          abandoned_tasks_percentage: -1,
          short_abandoned_tasks_count: 0,
          short_abandoned_tasks_percentage: -1,
          flow_out_tasks_count: 0,
          flow_out_tasks_percentage: -1,
          sla_percentage: -1,
          timestamp_updated: 0,
          average_abandon_time: 0,
          average_handle_time: 0,
          average_ring_time: 0,
          average_talk_time: 0,
          average_wrapup_time: 0,
          total_missed_invitations: 0,
          total_rejected_invitations: 0,
          average_waiting_time: 0,
        },
      },
      {
        unique_name: 'sms',
        friendly_name: 'SMS',
        sid: 'TC123',
        tasks_now: {
          pending_tasks: 0,
          reserved_tasks: 0,
          assigned_tasks: 0,
          wrapping_tasks: 0,
          total_tasks: 0,
          longest_task_waiting_sid: null,
          longest_task_waiting_from: null,
          timestamp_updated: 0,
          longest_task_waiting_age: 0,
          tasks_by_priority: 0,
        },
        sla_today: {
          total_tasks_count: 0,
          handled_tasks_count: 11,
          handled_tasks_within_sl_threshold_count: 3,
          handled_tasks_within_sl_threshold_percentage: -1,
          abandoned_tasks_count: 0,
          abandoned_tasks_percentage: -1,
          short_abandoned_tasks_count: 0,
          short_abandoned_tasks_percentage: -1,
          flow_out_tasks_count: 0,
          flow_out_tasks_percentage: -1,
          sla_percentage: -1,
          timestamp_updated: 0,
          average_abandon_time: 0,
          average_handle_time: 0,
          average_ring_time: 0,
          average_talk_time: 0,
          average_wrapup_time: 0,
          total_missed_invitations: 0,
          total_rejected_invitations: 0,
          average_waiting_time: 0,
        },
      },
    ],
  },
];
