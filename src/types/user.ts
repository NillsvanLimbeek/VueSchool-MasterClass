export interface IUser {
    '.key': string;
    avatar: string;
    bio: string;
    email: string;
    lastVisitAt: number;
    name: string;
    posts: object[];
    registeredAt: number;
    threads: object[];
    username: string;
    usernameLower: string;
}
