import Image from "next/image"
import Link from "next/link"
import Navitems from "./Navitems"

const Navbar = () => {
  return (
    <div className="navbar">
        <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer">
                <Image src="/images/logo.svg" alt="logo" height={44} width={44}/>
            </div>
        </Link>
        <div className="flex items-cente gap-8">
            <Navitems/>
            <p>Sign In</p>
        </div>
    </div>
  )
}

export default Navbar