import { NavLink } from 'react-router';

const Header = () => {
  return (
    <>
      <nav className="w-full flex justify-between items-center fixed bottom-0 z-10 bg-white py-2 px-10 text-xl text-[#767676] md:hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-[#333333]' : 'text-[#767676]'
          }>
          首页
        </NavLink>
        <NavLink
          to="/post-notes"
          className={({ isActive }) =>
            isActive ? 'text-[#333333]' : 'text-[#767676]'
          }>
          发布游记
        </NavLink>
        <NavLink
          to="/personal-center"
          className={({ isActive }) =>
            isActive ? 'text-[#333333]' : 'text-[#767676]'
          }>
          我的
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
