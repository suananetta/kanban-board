import uniqid from 'uniqid';

import { createEffect, createEvent, createStore, sample } from 'effector'
import { Task, States } from "shared/types/types";

import data from '../../shared/mock.json'

const $tasks = createStore<Array<Task>>(data);

const $states = createStore<States>({
    backlog: 'BACKLOG',
    ready: 'READY',
    in_progress: 'IN PROGRESS',
    finish: 'FINISHED'
})

const addTask = createEvent<string>();
const removeTask = createEvent<any>();

const getTaskForSelect = createEvent();
const addTaskToSelect = createEvent();

sample({
    clock: addTask,
    source: $tasks,
    fn: (source:Task[], payload:string) => {
        let newTask = {
            id: uniqid(),
            date: Date.now(),
            name: payload,
            description: 'This task has no description',
            status: 'backlog',
        }
        return [...source, newTask];
    },
    target: $tasks
})

sample({
    clock: removeTask,
    source: $tasks,
    fn: (source:Task[], payload:string) => {
        const task = source.find((task:Task) => task.id === payload);
        if(task) {
            source = [...source.filter(item => item.id !== task.id)]
        }
        return source;
    },
    target: $tasks
})

export const model = {
    $tasks,
    $states,
    addTask,
    removeTask
}