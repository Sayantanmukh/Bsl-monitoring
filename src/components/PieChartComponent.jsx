import { pieArcClasses, PieChart } from '@mui/x-charts/PieChart';
import * as React from 'react';

const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
];

export default function PieChartComponent() {
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
            width={window.innerWidth*0.90}
            height={window.innerHeight*0.50}
        />
    );
}