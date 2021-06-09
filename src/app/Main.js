import React, { useCallback, useEffect, useState } from 'react';
import Position from './main/Position';
import './style/Main.css';
import { Item } from 'semantic-ui-react';
import { Loader } from 'semantic-ui-react';


const Main = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://xtramile.azure-api.net/stats/lukaszcoding?apiSecret=i34nvn324gdfg5')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    let grouped = groupByArray(result, 'project');
                    groupProjectsAndCountLessons(grouped);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, [])
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
    function groupProjectsAndCountLessons(grouped){
        grouped.forEach(element => {
            element.values = groupByArray(element.values, 'course')
        });
        grouped.forEach(element => {
            element.values.forEach(item => {
                for (let index = 0; index < item.values.length; index++) {
                    const element = item.values[index];
                    item.values[0].openedLessonsCount = item.values[0].openedLessonsCount + element.openedLessonsCount;
                    item.values[0].openedLessonsCount = item.values[0].completedLessonsCount + element.completedLessonsCount;

                }
                item.values.splice(1, item.values.length)
            })
        })
        setItems(grouped);
        console.log(grouped);
    }

    return (
        <main className="main">
            
             {(items.length < 1) ? 
             <div className="loader">
                 <Loader active inline='centered' size='huge'/>
                 LOADING...
             </div>: 
            <div className="itemsContener">
                <h1>Statistics </h1>
                {items.map(item =>
                    <Item.Group>
                        <Position item={item} />
                    </Item.Group>
                )}
            </div>
            }
        </main>
    );
};


export default Main;