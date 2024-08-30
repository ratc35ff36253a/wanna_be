
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    const isAdmin = user?.email === process.env.ADMIN_EMAIL
    
    return ( 
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' className="flex z-40 font-semibold">
                    joy's<span className="text-blue-600">enterprise</span>
                    </Link>

                    <div className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent
                    bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                        {user ? (
                            <>
                            <Link href='/api/auth/logout' className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost',
                            })}>
                                Sign out
                            </Link>
                            {isAdmin ? (
                                <Link href='/dashboard' className={buttonVariants({
                                    size: 'sm',
                                    variant: 'ghost',
                                })}>
                                    Dashboard
                                </Link>
                            ) : null}
                            <Link href='/configure/upload' className={buttonVariants({
                                size: 'sm',
                                className: 'hidden sm:flex items-center gap-1',
                            })}>
                                Book Appointment
                                <ArrowRight className='ml-1.5 h-5 w-5' />
                            </Link>
                            </>
                        ) : (
                            <>
                            <Link href='/api/auth/register' className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost',
                            })}>
                                Sign up
                            </Link>
                            <Link href='/api/auth/login' className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost',
                            })}>
                                Log in
                            </Link>

                            <div className='h-8 w-px bg-zinc-200 hidden sm:block'/>

                            <Link href='/api/auth/login' className={buttonVariants({
                                size: 'sm',
                                className: 'hidden sm:flex items-center gap-1',
                            })}>
                                Book Appointment
                                <ArrowRight className='ml-1.5 h-5 w-5' />
                            </Link>
                            </>
                        )}
                    </div>
                </div>
                </MaxWidthWrapper>
        </nav>
     );
}
 
export default Navbar;