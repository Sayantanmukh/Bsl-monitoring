import { LineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';



export default function LineChartComponent() {
    return (
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
            ]}
            width={window.innerWidth*0.98}
            height={window.innerHeight*0.40}
        />
    );
}