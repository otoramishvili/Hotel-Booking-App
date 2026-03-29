import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-blue-800 py-6 border-b border-blue-900'>
      <div className="container mx-auto flex justify-between">
        <span className='text-3xl text-white tracking-tight font-semibold'>
          <Link to={"/"}>Booking hotel</Link>
        </span>
        <span className='flex space-x-2'>
          <Link to={"/login"} className='flex items-center text-blue-600 px-3 font-bold bg-gray-100 hover:text-blue-500 duration-300'>Login</Link>
        </span>
      </div>
    </div>
  )
}

export default Header;