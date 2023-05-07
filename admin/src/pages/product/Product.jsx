import "./product.css"
import { Link } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import PublishIcon from '@mui/icons-material/Publish';

const Product = () => {
  return (
    <div className="Product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to={"/newProduct"}>
                <button className="productAddBtn">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey={"Sales"} title={"Sales Performace"} />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://res.cloudinary.com/dpsi5nnkn/image/upload/v1683390494/DBD_LAB/zenitsu_dspjmu.jpg" alt="" className="productImg"/>
                    <span className="productName">Demon Slayer</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in Stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form action="" className="productForm">
                <div className="productFormLeft">
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder="Demon Slayer"/>
                    <label htmlFor="">Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label htmlFor="">Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://res.cloudinary.com/dpsi5nnkn/image/upload/v1683390494/DBD_LAB/zenitsu_dspjmu.jpg" alt="" className="productUploadImg" />
                        <label htmlFor="file">
                            <PublishIcon />
                        </label>
                        <input type="file" name="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="productBtn">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product
