export interface Event {
  id?: number,
  object_id?: number,
  object?: string,
  type?: string,
  request?: string,
  pending_attempts?: number,
  data?: {},
  message?: string,
  live_mode?: boolean,
  created_at?: string,
  updated_at?: string
  [key: string]: any
}
