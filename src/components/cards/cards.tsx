import React from 'react';
import uniqid from 'uniqid';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { useState } from 'react';
import { useUnit } from 'effector-react'
import { model } from './model'
// import { CardItem } from './card/card';

import { Card, Text, Divider, Button, Input} from '@geist-ui/core';
import { Trash2 } from '@geist-ui/icons';

export const Cards = () => {
    const [states, tasks, addTask, removeTask] = useUnit([
        model.$states,
        model.$tasks,
        model.addTask,
        model.removeTask
    ]);
    console.log(states);

    let [ taskInputStatus, setTaskInputStatus ] = useState(false);
    let [ taskName, setTaskName] = useState('');
    let [ badTaskName, setBadTaskName ] = useState(false);

    const addTaskBtn = () => {
        setBadTaskName(false);
        setTaskInputStatus(!taskInputStatus);
    }

    const submitTaskBtn = () => {
        if(taskName.trim().length === 0) {
            setBadTaskName(true);
        } else {
            setBadTaskName(false);
            addTask(taskName);
            setTaskName('');
            setTaskInputStatus(!taskInputStatus);
        }
    }
    
    return (
        <CardsBlock>
            {
                Object.values(states).map((state: string) => {
                    const taskFilter = tasks.sort((a,b) => a.date-b.date)
                                            .filter(task => task.status === state.toLowerCase());
                    return (
                        <Card width="400px" height="max-content" hoverable key={state}>
                            <Card.Content>
                                <Text b my={0}>{state}</Text>
                            </Card.Content>
                            <Divider h="1px" my={0} />
                            <Card.Content>
                            {
                                taskFilter.map((task) => {
                                    return (
                                        <CardItem key={task.id}>
                                            <Text>{task.name}</Text>
                                            <RemoveBtn
                                                data-id={task.id} 
                                                onClick={(e) => {
                                                    console.log(e.currentTarget.dataset.id);
                                                    removeTask(e.currentTarget.dataset.id)
                                                }}
                                            >
                                            </RemoveBtn>
                                            <Trash2 color="red" ></Trash2>
                                        </CardItem>
                                    
                                    )
                                })
                            }
                            </Card.Content>
                            <Card.Footer 
                                height="max-content" 
                                align-items="flex-start"
                                justify-content="space-between"
                            >
                                {
                                    taskInputStatus?
                                        <InputBlock>
                                            <Input 
                                                type={badTaskName? "error" : "secondary" }
                                                placeholder="Enter your task" 
                                                width="90%" 
                                                crossOrigin={''}
                                                onChange={(e) => setTaskName(e.target.value)}
                                            />
                                            {
                                                badTaskName? 
                                                    <Text span type="error">Task cant't be empty</Text>
                                                : 
                                                    <></>
                                            }
                                        </InputBlock>
                                    :
                                        <></>
                                }
                                <Button 
                                    type={taskInputStatus? "success" : "secondary"} 
                                    onClick={() => {
                                        taskInputStatus?
                                            submitTaskBtn()
                                        :
                                            addTaskBtn()
                                    }}
                                    ghost 
                                    auto 
                                    scale={0.7}
                                >
                                    {
                                        taskInputStatus?
                                            'Submit'
                                        :
                                            'Add task'
                                    }
                                </Button>
                                {
                                    taskInputStatus?
                                        <Button 
                                            type="warning"
                                            onClick={addTaskBtn}
                                            ghost 
                                            auto 
                                            scale={0.7}
                                        >
                                            Cancel
                                        </Button>
                                    :
                                    <></>
                                }
                            </Card.Footer>
                        </Card>
                    )
                })
            }
        </CardsBlock>
    )
};

const CardsBlock = styled.main`
    width: 100%;
    margin: 60px 0;
    display: flex;
    justify-content: space-between;
`;

const CardItem = styled.div`
    position: relative;
    width: 90%;
    height: auto;
    margin: 15px 0;
    padding: 7px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    transition: all 0.2s ease;
    border-radius: 6px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    color: #000;
    background-color: #fff;
    border: 1px solid transparent;

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }
`

const InputBlock = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const RemoveBtn = styled.button`
    z-index: 9999;
    position: absolute;
    right: 5px;
    border: none;
    padding: 13px;
    background: transparent;
    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }
`
