import { IUser } from './user.interface'

export interface ILogin {
  username: string
  password: string
}

export interface IAuthPayload {
  user: IUser
  accessToken: string
}
