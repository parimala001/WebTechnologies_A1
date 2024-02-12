import React, { useState } from 'react';

//user page to create account and update account
const UserAccountPage = ({ user, onCreateAccount, onUpdateAccount }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    address: user.address
  });
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [isChangesSaved, setIsChangesSaved] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateAccount = () => {
    setIsEditingAccount(true);
    setFormData({
      name: '',
      email: '',
      address: ''
    });
  };

  const handleUpdateAccount = () => {
    onUpdateAccount(formData);
    setIsChangesSaved(true);
    setTimeout(() => {
      setIsChangesSaved(false);
    }, 3000); 
    //to reset the message after 3 seconds
    alert('Changes saved successfully.');
  };

  return (
    <div>
      <h1>User Account</h1>
      {isChangesSaved && <p>Changes saved successfully.</p>}
      <button onClick={() => setIsEditingAccount(true)}>Edit Account</button>
      <button onClick={handleCreateAccount}>Create New Account</button>
      {isEditingAccount && (
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="address">Shipping Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
          </div>
          <button type="button" onClick={handleUpdateAccount}>Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default UserAccountPage;
