import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return <nav className="nav">
    <Link to="/" className="site-title">Jack Hangen</Link>
    <ul>
      <CustomLink to="/Projects">Projects</CustomLink>
      <CustomLink to="/Experience">Experience</CustomLink>
      <CustomLink to="/Education">Education</CustomLink>
      <CustomLink to="/Contact">Contact</CustomLink>   
    </ul>
  </nav>
}

function CustomLink({to, children, ...props}) {
  const  reslpath = useResolvedPath(to)
  const isAct =useMatch({path: reslpath.pathname, end:true})
  return(
    <li className={isAct ? "active": ""}>
      <Link to={to} {...props}>{children}</Link>
    </li> 
  )
}