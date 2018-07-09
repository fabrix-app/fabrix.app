export interface User {
  id?: number,
  [key: string]: any,
  email?: string,
  username?: string,
  full_name?: string,
  first_name?: string,
  last_name?: string,
  current_customer_id?: string,
  current_cart_id?: string,
  recovery?: string,
  created_at?: string,
  updated_at?: string
  // customers?: Customer[],
  // accounts?: Account[],
  // sources?: Source[],
  // roles?: Role[],
  // passports?: [{}],
}
