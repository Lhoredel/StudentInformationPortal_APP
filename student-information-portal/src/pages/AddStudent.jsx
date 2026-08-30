function AddStudent() {
  return (
    <div>
      <h2>Add Student</h2>

      <form className="student-form">
        <div>
          <label>Student Number</label>
          <input type="text" placeholder="Enter student number" />
        </div>

        <div>
          <label>First Name</label>
          <input type="text" placeholder="Enter first name" />
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Enter last name" />
        </div>

        <div>
          <label>Course</label>
          <input type="text" placeholder="Enter course" />
        </div>

        <div>
          <label>Year Level</label>

          <select>
            <option>Select Year Level</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
        </div>

        <button type="submit">Save Student</button>
      </form>
    </div>
  );
}

export default AddStudent;