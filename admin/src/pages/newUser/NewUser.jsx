import "./newUser.css"

const NewUser = () => {
  return (
    <div className='NewUser'>
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
            <label htmlFor="">User Name</label>
            <input type="text" placeholder="jon"/>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="jon snow"/>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="jon@gmail.com"/>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="password"/>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Phone</label>
            <input type="text" placeholder="+27 9486-465-699"/>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Address</label>
            <input type="text" placeholder="Delhi, India"/>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Gender</label>
            <div className="newUserGender">
                <input type="radio" name="gender" id="male" value={"male"}/>
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" value={"female"}/>
                <label htmlFor="female">Female</label>
                <input type="radio" name="gender" id="other" value={"other"}/>
                <label htmlFor="other">Other</label>
            </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserBtn">Create</button>
      </form>
    </div>
  )
}

export default NewUser
