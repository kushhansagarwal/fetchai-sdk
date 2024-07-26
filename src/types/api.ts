export type Token = string;

export type Agent = {
  name: string;
  address: string;
  running: boolean;
  compiled: boolean;
  revision: number;
  code_digest: string;
  wallet_address: string;
};

export type AgentLog = {
  log_timestamp: string;
  log_entry: string;
  log_type: string;
  log_level: string;
};

export type AgentCreateResponse = Agent;

export type AgentListResponse = Agent[];

export type AgentGetResponse = Agent;

export type AgentDeleteResponse = {};

export type AgentStartResponse = Agent;

export type AgentStopResponse = Agent;

export type AgentGetCodeResponse = {
  digest: null | string;
  code: null | string;
  timestamp: string;
};

export type AgentUpdateCodeResponse = {
  digest: string | null;
};

export type AgentGetLatestLogsResponse = AgentLog[];

export type AgentDeleteLogsResponse = {};

export type AgentGetCurrentUsageResponse = {
  year: number;
  month: number;
  computation_time: number;
  num_messages: number;
  num_message_bytes: number;
};
