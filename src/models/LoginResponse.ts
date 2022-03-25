import {User} from "./User";

export interface LoginResponse {
    user: User;
    expiresIn: string;
    access_token: string;
}