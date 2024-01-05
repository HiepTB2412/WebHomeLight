import React from 'react'
import './style.css'
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <>
      <div className='category category_'>
            <div >
              <h6><Link to = "/admin">Product</Link></h6>
              <h6><Link to = "/categoryadmin">Category</Link></h6>
              <h6><Link to = "/customer">Đơn hàng</Link></h6>
            </div>
      </div>
    </>
  )
}

export default NavbarAdmin
