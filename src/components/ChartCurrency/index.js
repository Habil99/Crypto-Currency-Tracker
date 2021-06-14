import React from 'react'
import { Bar } from 'react-chartjs-2'

const ChartCurrency = ({ currency }) => {
    const { volume,price_change,price_change_pct, volume_change, volume_change_pct } = currency['1d']
    
    return (
        <div style={{width: '800px', margin: '0 auto'}}>
            <Bar
                data={{
                    labels: ['Volume', 'Price Change', 'Price Change(pct)', 'Volume Change', 'Volume Change(pct)'],
                    datasets: [{
                        label: `${currency.id} dataset for ${'1d'}`,
                        data: [ volume,price_change,price_change_pct, volume_change, volume_change_pct],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1
                    }]
                }}
            />
        </div>
    )
}

export default ChartCurrency
