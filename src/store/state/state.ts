import {
    ICategory,
    IForum,
    IPost,
    IStat,
    IThread,
    IUser,
} from '@/types/index';

export interface CategoryState {
    categories: ICategory[];
}

export interface ForumState {
    forums: IForum[];
}

export interface PostState {
    posts: IPost[];
}

export interface StatsState {
    stats: IStat;
}

export interface ThreadState {
    threads: IThread[];
}

export interface UserState {
    users: IUser[];
}
