import React, { useEffect, useState } from 'react';
import { Item } from 'semantic-ui-react';
import "./Position.css";


const Position = (props) => {
    const picture = "https://picsum.photos/id/870/100/100?grayscale&blur=";
    const [coursesItems, setCoursesItems] = useState()
    const [i, seti] = useState(1);

    function groupByArray(xs, key) {
        return xs.reduce(function (rv, x) {
            let v = key instanceof Function ? key(x) : x[key];
            let el = rv.find((r) => r && r.key === v);
            if (el) {
                el.values.push(x);
            }
            else {
                rv.push({
                    key: v,
                    values: [x]
                });
            }
            return rv;
        }, []);
    }
    useEffect(() => {
    }, [])

    return (
        <div className="position">
            <Item>
                <Item.Content>
                    <Item.Meta>
                        <div className="itemHeader">
                            <h3>
                                <Item.Image size='tiny' src={picture} />
                                Project: <b>{props.item.key}</b>
                            </h3>
                        </div>
                        <div>
                        
                            {props.item.values.map((key) =>
                                <div>
                                    <p>Course: <b>{key.course}</b></p>
                                    <div>completed lessons count: {key.completedLessonsCount}</div>
                                    <div>opened lessons count: {key.openedLessonsCount}</div>
                                </div>)}
                        </div>
                        {/* {props.item.map(project => */}
                        {/* {project.value.map(item => 
                            <div>{item.course}</div>
                            )} */}
                        {/* <div className="itemMeta">  
                                <p><b>Course:<br></br> {project.values}</b></p>
                                <div className="lessonsConteiner">
                                    <div>
                                        Opened lessons: {project.values}
                                    </div>
                                    <div>
                                        Completed lessons: {project.values}
                                    </div>
                                </div>
                            </div> */}
                    </Item.Meta>
                    <Item.Extra>
                        <div></div></Item.Extra>
                </Item.Content>
            </Item>
        </div>
    )
}

export default Position;