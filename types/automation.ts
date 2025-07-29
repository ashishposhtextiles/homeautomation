export interface DeviceStatus {
  shelly: {
    ip: string;
    switch_id: number;
    status: boolean;
    status_text: string;
  };
  wled: {
    ip: string;
    reachable: boolean;
    state: WledState;
  };
  camera: {
    ip: string;
    reachable: boolean;
    ping_time: number;
  };
}

interface WledState {
  on: boolean;
  bri: number;
  transition: number;
  ps: number;
  pl: number;
  ledmap: number;
}
