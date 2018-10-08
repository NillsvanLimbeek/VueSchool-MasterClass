import {
    CategoryState,
    ForumState,
    PostState,
    StatsState,
    ThreadState,
    UserState,
} from './state';

export interface RootState {
    categories: CategoryState;
    forums: ForumState;
    posts: PostState;
    stats: StatsState;
    threads: ThreadState;
    users: UserState;
}
