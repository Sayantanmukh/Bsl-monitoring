import { LineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';


const MINWIDTH = 820;

const setWidth = () => {
    const winW = window.innerWidth;


    if (winW > MINWIDTH) {
        console.log("A");
        return window.innerWidth * 0.35;
    } else {
        console.log("B");
        return window.innerWidth * 0.98;
    }
}

const setHeight = () => {
    const winH = window.innerHeight;

    if (winH > MINWIDTH) {
        console.log("C", window.innerHeight);
        return window.innerHeight * 0.50
    } else {
        console.log("D")
        return window.innerHeight * 0.65
    }
}

export default function LineChartComponent() {
    return (
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
            ]}
            width={setWidth()}
            height={setHeight()}
        />
    );
}