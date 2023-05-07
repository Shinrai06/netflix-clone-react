import "./user.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="User">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to={"/newUser"}>
                <button className="userAddBtn">Create</button>
            </Link>
        </div>
        <div className="userContianer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://res.cloudinary.com/dpsi5nnkn/image/upload/v1683390466/DBD_LAB/Kakshi_kihhgc.jpg" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Shinrai C</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentityIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">sdkba99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarMonthIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">10.12.2002</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">+27 2447-453-546</span>
                    </div>
                    <div className="userShowInfo">
                        <EmailIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">skjba@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearchingIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">Delhi, India</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userupdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label htmlFor="">UserName</label>
                            <input type="text" placeholder="sdkba99" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">UserName</label>
                            <input type="text" placeholder="Shinrai C" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="skjba@gmail.com" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Phone</label>
                            <input type="text" placeholder="+27 2447-453-546" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Address</label>
                            <input type="text" placeholder="Delhi, India" className="userUpdateInput"/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://res.cloudinary.com/dpsi5nnkn/image/upload/v1683390466/DBD_LAB/Kakshi_kihhgc.jpg" alt="" className="userUpdateImg" />
                            <label htmlFor="file"><PublishIcon className="userUpdateIcon"/></label>
                            <input type="file" name="" id="file"  style={{display: "none"}}/>
                        </div>
                        <button className="userUpdateBtn">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User
