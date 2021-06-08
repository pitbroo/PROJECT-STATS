import React, { useEffect, useState } from 'react';
import { Item } from 'semantic-ui-react';
import "./Position.css";
import { Header } from 'semantic-ui-react';
import { Button, Icon, Label } from 'semantic-ui-react'


const Position = (props) => {
    useEffect(() => {
    }, [])

    return (
        <div className="position">
            <Item>
                <Item.Content>
                    <Item.Meta>
                        <div className="itemHeader">
                            <h2 class="ui header">

                                <div className="content">
                                    <Header content={props.item.key} image={<Icon name='file alternate outline' size='large' color="green"></Icon>} />
                                </div>
                            </h2>

                        </div>
                        <div>
                            {props.item.values.map(pos =>
                                <div className="itemMeta">
                                    <div className="curse">
                                        <p>Course: <b>{pos.values[0].course}</b></p>
                                    </div>
                                    <a>
                                        <Button as='div' labelPosition='right'>
                                            <Button color='twitter'>
                                                <Icon name='plus' />
                                    completed lessons count:
                                    </Button>
                                            <Label as='a' basic color='green' pointing='left'>
                                                {pos.values[0].completedLessonsCount}
                                            </Label>
                                        </Button>
                                    </a>
                                    <a>
                                        <Button as='div' labelPosition='right'>
                                            <Button color='instagram'>
                                                <Icon name='pin' />
                                            opened lessons count
                                    </Button>
                                            <Label as='a' basic color='green' pointing='left'>
                                                {pos.values[0].openedLessonsCount}
                                            </Label>
                                        </Button>
                                    </a>

                                </div>)}
                        </div>
                    </Item.Meta>
                    <Item.Extra>
                        <div></div></Item.Extra>
                </Item.Content>
            </Item>
        </div>
    )
}

export default Position;