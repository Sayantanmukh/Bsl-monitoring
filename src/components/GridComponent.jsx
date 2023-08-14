import React from 'react'
import LineChartComponent from './LineChartComponent'
import PieChartComponent from './PieChartComponent'

function GridComponent() {
    return (
        <div style={
            {
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'space-around',
                alignItems: 'center'
            }
        }>
            <div>
                <LineChartComponent />
            </div>
            <div>
                <PieChartComponent />
            </div>
        </div>
    )
}

export default GridComponent