import Link from 'next/link';
const Navbar = () => {
  return(

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Psihologi</a></li>
      </ul>
    </div>
        <Link href="/">

    <button className="btn btn-ghost text-xl">daisyUI</button>
        </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Psihologi</a></li>
      <li>
        <details>
          <summary>Vajag palīdzību ar</summary>
          <ul className="p-2">
            <li><a>Depresija</a></li>
            <li><a>Caunes sindroms</a></li>
          </ul>
        </details>
      </li>
      <li><a>Par mums</a></li>
    </ul>
  </div>
  <div className="navbar-end">
<Link href="/register">
      <button className="btn btn-primary">Esi psihologs?</button>
    </Link>

    <a className="btn">Ieiet</a>
  </div>
</div>
  )
}

export default Navbar;
