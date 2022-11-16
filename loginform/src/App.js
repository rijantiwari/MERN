import './App.css';
import './style.css';

function App() {
  return (
    
    <div className='form'> 
    
    <h1>Registration Form</h1>
        <br/><br/>
        <input type="text" id="fname" placeholder=" First Name "/> <br/>
        <input type="text" id="lname" placeholder="Last Name "/> <br/>
        <input type="text" placeholder="Address" id="address"/> <br/>
        <label for="gender" class="gender">Gender:</label>
        <select name="select" id="gender">
            <option value="select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select> <br/>

        <label for="dob" class="dob">DOB</label>
        <input type="date" id="dob" class="dob"/> <br/>
        <input type="email" placeholder="Email"/><br/>
        <input type="password" placeholder="Password" name="" id="password"/> <br/>
        <input type="password" placeholder="Confirm Password" name="" id="repassword"/> <br/>

        <input type="submit" name="" id="" class="btn"/>
        <button class="btn"> Cancel</button>
        </div>

    

  );
    
        
}

export default App;