import {useState} from 'react';
import * as d3 from 'd3';

const ChartDisplay = () => {
    let [data, setData] = useState([5,3,2,5,2,7,6,4,6,8,6,9,7,6,9,10,11,12,11,9,12,13])
    return (
        <svg style = {{height: 500,
        width: '100%',
        marginRight: 0,
        marginLeft:0}}>
            <g className = 'plot-area'/>
            <g className = 'x-axis'/>
            <g className = 'y-axis'/>
        </svg>
    )
}
export {ChartDisplay}