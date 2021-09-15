import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { SaleSucess } from 'types/sale';
import { BASE_URL } from 'utils/requests';
import { round } from 'utils/format';

type SeriesData={
    name:string;
    data:number[];
}

type ChartData = {
    labels:{
        categories:string[];
    };
    series: SeriesData[];
    
}
const Barchart = () =>{

    const[CharData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []                   
            }
        ]
    });
    
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    useEffect(()=>{
        axios.get(`${BASE_URL}/sales/sucess-by-seller`)
        .then(response=>{

            const data = response.data as SaleSucess[];
            const myLabels = data.map(x=>x.sellerName);
            const mySeries = data.map(x=>round(100.0 * x.deals/ x.visited, 1));

            setChartData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% Sucess",
                        data: mySeries                   
                    }
                ]
            });
        });
    },[]);
   
    return (

        <Chart
            options={{...options, xaxis:CharData.labels}}
            series={CharData.series}
            type="area"
            height="280"
        />
    );

}

export default Barchart;