import { pieArcClasses, PieChart } from '@mui/x-charts/PieChart';
import * as React from 'react';

const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
];

const MINWIDTH = 820;


const setWidth = () => {
    const winW = window.innerWidth;


    if (winW > MINWIDTH) {
        console.log("A");
        return window.innerWidth * 0.50;
    } else {
        console.log("B");
        return window.innerWidth * 0.90;
    }
}

const setHeight = () => {
    const winH = window.innerHeight;

    if (winH > MINWIDTH) {
        console.log("C");
        return window.innerHeight * 0.30
    } else {
        console.log("D")
        return window.innerHeight * 0.50
    }
}

export default function PieChartComponent() {
    console.log(window.innerWidth);
    return (
        <PieChart
            series={[
                {
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30 },
                },
            ]}
            sx={{
                [`& .${pieArcClasses.faded}`]: {
                    fill: 'gray',
                },
            }}
            width={setWidth()}
            height={setHeight()}
        />
    );
}