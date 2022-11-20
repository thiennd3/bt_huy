import { Link } from 'react-router-dom'

 const Sidebar = () => {
  return (
    <ul>
   
      <li>
        <Link to='/books' className='nav-link'>Books</Link>
      </li>
      <li>
        <Link to='/books/:id' className='nav-link'>book</Link>
      </li>
      <li>
        <Link to='/customers' className='nav-link'>đăng xuẩt</Link>
      </li>
    </ul>
  )
}
export default Sidebar;