import uniqid from 'uniqid';
import styled from '@emotion/styled';
import { useUnit } from 'effector-react'
import { model } from './model'
// import { CardItem } from './card/card';
import React from 'react';
import { Card, Text, Divider, Input } from '@geist-ui/core';

export const Cards = () => {
    const states = useUnit(model.$states);
    const tasks = useUnit(model.$tasks);
    console.log(states);
    
    return (
        <CardsBlock>
            {
                Object.values(states).map((state: string) => {
                    const taskFilter = tasks.sort((a,b) => a.date-b.date)
                                            .filter(task => task.status === state.toLowerCase());
                    return (
                        // <CardItem 
                        //     key={uniqid()} 
                        //     tasks={taskFilter || []} 
                        //     cardName={state} 
                        //     status={state}
                        // />
                    <Card width="400px">
                        <Card.Content>
                            <Text b my={0}>{state}</Text>
                        </Card.Content>
                        <Divider h="1px" my={0} />
                        <Card.Content>
                        {
                            taskFilter.map((task) => {
                                return (
                                    // <Input placeholder={task.name} width="100%" />
                                    <Text>{task.name}</Text>
                                )
                            })
                        }
                        </Card.Content>
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