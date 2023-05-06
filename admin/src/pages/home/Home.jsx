import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import "./home.css"
import {userData} from '../../dummyData'
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"

const Home = () => {
  return (
    <div className="Home">
      <Featured />
      <Chart data={userData} title="User Analytics" dataKey="Active User" grid />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
