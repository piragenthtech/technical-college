function Inputform() {
  return (
    <div>
      <h1>creating form</h1>
      <form action="" method="post">
        <table>
          <tr>
            <td>First Name</td>
            <input type="text"></input>
          </tr>
          <tr>
            <td>Last Name</td>
            <input type="text"></input>
          </tr>
          <tr>
            <td>Address:</td>
            <input type="text" maxlength="12"></input>
          </tr>
          <tr>
            <td>NIC</td>
            <input type="text" pattern="\d*" maxlength="12"></input>
          </tr>
          <tr>
            <td>Admission Number</td>
            <input type="text" pattern="\d*" maxlength="22"></input>
          </tr>
          <tr>
            <td>Contact No</td>
            <input type="text" pattern="\d*" maxlength="13"></input>
          </tr>
          <tr>
            <td>Course Name</td>
            <input type="text"></input>
          </tr>
          <tr>
            <td>Extra Curricular Activities</td>
            <input type="text"></input>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              <select>
                <option>Male</option>
                <option>Female</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Birth Of Date</td>
            <td>
              <input type="date"></input>
            </td>
          </tr>
          <tr>
            <td>Joined Date</td>
            <td>
              <input type="date"></input>
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit"></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
export default Inputform;
