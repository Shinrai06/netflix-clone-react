import "./widgetLg.css"

const WidgetLg = () => {
  const Btn = ({type}) => {
    return (
      <button className={"widgetLgButton "+type}>
        {type}
      </button>
    )
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://res.cloudinary.com/dpsi5nnkn/image/upload/v1683390466/DBD_LAB/Kakshi_kihhgc.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetlgDate">2 Jun 2023</td>
          <td className="widgetlgAmount">$126.99</td>
          <td className="widgetlgStatus">
            <Btn type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://res.cloudinary.com/dpsi5nnkn/image/upload/v1683390466/DBD_LAB/Kakshi_kihhgc.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetlgDate">2 Jun 2023</td>
          <td className="widgetlgAmount">$126.99</td>
          <td className="widgetlgStatus">
            <Btn type="Processing" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://res.cloudinary.com/dpsi5nnkn/image/upload/v1683390466/DBD_LAB/Kakshi_kihhgc.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetlgDate">2 Jun 2023</td>
          <td className="widgetlgAmount">$126.99</td>
          <td className="widgetlgStatus">
            <Btn type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://res.cloudinary.com/dpsi5nnkn/image/upload/v1683390466/DBD_LAB/Kakshi_kihhgc.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetlgDate">2 Jun 2023</td>
          <td className="widgetlgAmount">$126.99</td>
          <td className="widgetlgStatus">
            <Btn type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
