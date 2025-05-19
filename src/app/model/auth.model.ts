export enum UserRole {
    ROLE_CLIENT = 'ROLE_CLIENT',
    ROLE_EMPLOYE = 'ROLE_EMPLOYE',
    ROLE_ADMIN = 'ROLE_ADMIN'
}

export interface User {
    id: number;
    username: string;
    email: string;
    roles: UserRole[];
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: User;
} 