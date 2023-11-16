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

const addTask = createEvent();
const removeTask = createEvent();

const getTaskForSelect = createEvent();
const addTaskToSelect = createEvent();



export const model = {
    $tasks,
    $states
}