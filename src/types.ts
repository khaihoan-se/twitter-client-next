export interface LoginData {
    access_token: string;
    message: string;
    data: {
        password: string;
        user: User
    }
}

export interface User {
    id: string;
    avatar: string;
    bio: string;
    createdAt: string;
    email: string;
    followers: Followers[];
    following: Following[];
    fullname: string;
    password: string;
    saved: Saved[];
    statusPost: String;
    updatedAt: string;
    username: string;
}

export interface Followers {
    id: string;
}
export interface Following {
    id: string;
}
export interface Saved {
    id: string;
}

export interface Token {
    access_token: string;
}

export interface AuthState {
    isLogged: boolean;
    user: User;
}

export interface PostType {
    
}