import { Link } from "react-router-dom"
import "./product.css"
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import {Publish} from "@material-ui/icons"
export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct" >
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey ="Sales" title="Sales perfomance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt=""  className="productInfoImg"/>
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id: </span>
                            <span className="productInfoValue">123 </span>
                        </div>

                         <div className="productInfoItem">
                            <span className="productInfoKey">Sales: </span>
                            <span className="productInfoValue">4123 </span>
                        </div>

                         <div className="productInfoItem">
                            <span className="productInfoKey">active: </span>
                            <span className="productInfoValue">yes </span>
                        </div>

                         <div className="productInfoItem">
                            <span className="productInfoKey">in stock: </span>
                            <span className="productInfoValue">no  </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label >Product Name</label>
                        <input type="text" name="" id=""  placeholder="product name"/>
                        <label >In stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label >Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file"  id="file" style={{display: "none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
