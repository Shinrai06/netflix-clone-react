import "./newProduct.css"

const NewProduct = () => {
  return (
    <div className="NewProduct">
        <h2 className="addProductTitle">Add Product</h2>
        <form action="" className="addProductForm">
            <div className="addProductItem">
                <label htmlFor="">Product Name</label>
                <input type="text" placeholder="Demon Slayer"/>
            </div>
            <div className="addProductItem">
                <label htmlFor="">Stock</label>
                <select name="inStock" id="inStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="addProductItem">
                <label htmlFor="">Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="addProductBtn">Create</button>
        </form>
    </div>
  )
}

export default NewProduct
