
export type Task = {
    id: string;
    date: number;
    name: string;
    description: string;
    status: string;
};

export type TasksAray = Array<Task>;

export git inittype states = {
    backlog: string;
    ready: string;
    in_progress: string;
    finish: string;
}