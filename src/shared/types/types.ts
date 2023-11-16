
export type Task = {
    id: string;
    date: number;
    name: string;
    description: string;
    status: string;
};

export type TasksArray = Array<Task>;

export type States = {
    backlog: string;
    ready: string;
    in_progress: string;
    finish: string;
}