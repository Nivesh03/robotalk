import Image from "next/image"
import Link from "next/link"
import Navitems from "./Navitems"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
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
            <SignedOut>
              <div className="flex items-center gap-2">
                <SignInButton>
                  <button className="btn-signin">Sign In</button>
                </SignInButton>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar