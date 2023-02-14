import {  Link } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

import React, { useEffect, useState } from 'react'

const Main = () => {
  
  const [addUser, setAddUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/brand-sales-daily")
    console.warn(response)
    console.log(response.data.brandData);
    
    if (response.status === 200) {
      setAddUser(response.data.brandData)
      setLoading(false);
    }
    
  }

  

return (
 <div>
 <nav className={styles.navbar}>
      <h1>Svan Autotech Pvt</h1>
        <h1>Welcome to Admin section</h1>

        <Link to="/Brand">
             <button type="button" className={styles.white_btn}>
             Add member
           </button>
         </Link>
      
        </nav>

  <div>
    {addUser.length === 0
      ? <h3 className='text-danger'><i>No any user available...</i></h3>
      : <div className='container'>
        <div className='App'>
          <table border='1'>
         
          <tr>
          <td>S.no</td>
            <td>brandl</td>
            <td>transactionType</td>
            <td>totalOrders</td>
            <td>totalOrderValue</td>
            <td>grossMarginPercentage</td>
          </tr>
            {
              loading
            ? (<p>Loading....</p>)
            : (addUser.map((item, index) => (
              <tr key={item._id}>
                <td >{index + 1}</td>
                <td >{item.brand}</td>
                <td >{item.transactionType}</td>
                <td >{item.totalOrders}</td>
                <td >{item.totalOrderValue}</td>
                <td >{item.grossMarginPercentage}</td>

                
                
              </tr>
            )))
            }


          </table>
        </div>
</div>}
  </div>
</div>  )
};

export default Main;