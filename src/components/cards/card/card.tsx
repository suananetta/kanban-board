import { useUnit } from 'effector-react'
import styled from '@emotion/styled';
import { model } from '../model'
import { TasksArray } from 'shared/types/types';
import './card.css';
import React from 'react';
import Card from '@geist-ui/core/esm/card/card';

type CardProps = {
    tasks: TasksArray;
    cardName: string;
    status: string;
};


export const CardItem = ({tasks, cardName, status}:CardProps) => {
    // const tasks = useUnit(model.$tasks);
    console.log(tasks);
    
    return (
        <div>
            {
                tasks.map((task) => {
                    return (
                        <span>{task.name}</span>
                    )
                })
            }
        </div>
    )
};

