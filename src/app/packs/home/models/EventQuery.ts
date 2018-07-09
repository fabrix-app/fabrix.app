export interface EventQuery {
  [key: string]: any,
  body?: {
    where?: {}
    sort?: string,
    offset?: number,
    limit?: number
  }
}
