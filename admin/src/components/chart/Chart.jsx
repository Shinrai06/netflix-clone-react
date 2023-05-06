import "./chart.css"
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const Chart = ({title, data, dataKey, grid}) => {
      
  return (
    <div className="Chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          {grid && <CartesianGrid strokeDasharray="5 5" />}
          <XAxis dataKey="name" stroke="#8884d8"/>
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
