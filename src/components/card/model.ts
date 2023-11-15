import { createEffect, createEvent, createStore, sample } from 'effector'
import { Task } from "shared/types/types";

import data from '../../shared/mock.json'

const $tasks = createStore<Array<Task>>(data);

export const model = {
    $tasks
}