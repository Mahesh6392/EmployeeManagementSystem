import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';


const App = () => {
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const [userData , setUserData] = useContext(AuthContext);


    useEffect(()=>{
        const loggedInUser = localStorage.getItem("loggedInUser" );
        if(loggedInUser){
            const userData = JSON.parse(loggedInUser);
            setUser(userData.role);
            setLoggedInUserData(userData.data);
        }
        // console.log(loggedInUser)
    },[])

    const handleLogin = (email, password) => {
        if (email === 'admin@me.com' && password === '123') {
            setUser('admin'); // Set user as admin
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
        } else if (userData) {
            // Find the employee with matching email and password
            const employee = userData.find(
                (e) => e.email === email && e.password === password
            );
            if (employee) {
                setUser('employee'); // Set user as employee
                setLoggedInUserData(employee); // Store employee data for dashboard
              
                localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' , data :employee}));
            } else {
                alert('Invalid credentials!'); // Alert if credentials are invalid
            }
        } else {
            alert('Authentication data not loaded!'); // Alert if auth data is not loaded
        }
    };

    return (
        <>
            {!user ? (
                <Login handleLogin={handleLogin} />
            ) : (
                user === 'admin' ? (
                    <AdminDashboard  changeUser ={setUser}/> // Render Admin Dashboard if user is admin
                ) : (
                    user === 'employee' ? (
                        <EmployeeDashboard data={loggedInUserData}  changeUser ={setUser} /> // Render Employee Dashboard if user is employee
                    ) : null
                )
            )}
        </>
    );
};

export default App;
