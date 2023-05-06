import './featured.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Featured = () => {
  return (
    <div className='Featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,368</span>
          <span className="featuredMoneyRate">-11.4 
          <ArrowDownwardIcon className='featuredIcon negative'/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,368</span>
          <span className="featuredMoneyRate">-1.4 
          <ArrowDownwardIcon className='featuredIcon negative'/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,318</span>
          <span className="featuredMoneyRate">11.4 
          <ArrowUpwardIcon className='featuredIcon'/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default Featured
