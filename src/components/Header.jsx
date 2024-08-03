import PropType from "prop-types"

const Header = ({onSearch}) => {
  return (
    <div className='p-4 bg-black flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
            <h1 className='text-[35px] uppercase font-bold text-red-600'>Movie</h1>
            <nav className='flex items-center space-x-4'>
                <a href="#" className='text-white'>Home</a>
                <a href="#" className='text-white'>About</a>
                <a href="#" className='text-white'>Contact</a>
            </nav>
        </div>
        <div className='flex space-x-4'>
            <input type="text" placeholder='Search' className='p-4 text-black rounded-md' />
            <button onClick={() => onSearch('hit')} className='p-2 text-white bg-red-600 rounded-md'>Search</button>
        </div>
    </div>
  );
}

Header.propTypes ={
  onSearch: PropType.func,
};

export default Header
