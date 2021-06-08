import React, { useCallback, useEffect, useState } from 'react';
import Position from './main/Position';
import './style/Main.css';
import { Item } from 'semantic-ui-react';


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
                    setItems(grouped);

                    grouped.forEach(element => {
                        element.values = groupByArray(element.values, 'course')
                    });
                    setItems(grouped);
                    console.log(grouped);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, [])
    

    const change = () => {

    }
    function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
            var key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }
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
    

    return (
        <main className="main">
            <button onClick={change}>filtr</button>
            <div className="itemsContener">
                {items.map(item =>
                    <Item.Group>
                        <Position item={item} />
                    </Item.Group>
                )}
            </div>

        </main>
    );
};


export default Main;