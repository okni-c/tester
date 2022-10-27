import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    const { data: sessionData } = useSession();
    return (
        <nav className="flex justify-between items-center m-2">
            <Link href="/">
                <a className="text-gray-900 font-bold text-xl hover:text-red-400 duration-100">UpOnJacks</a></Link>

            <div className="flex items-center">
                {sessionData &&
                    <Link href="/profile">
                        <a className="pr-5 flex items-center cursor-pointer motion-safe:hover:scale-110 duration-200">
                            <Image
                                src={sessionData?.user?.image}
                                alt="Picture of the user"
                                className="rounded-full"
                                width={50}
                                height={50} />
                        </a>
                    </Link>
                }

                <button
                    className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg motion-safe:hover:bg-violet-100 duration-100"
                    onClick={sessionData ? () => signOut() : () => signIn()}>
                    {sessionData ? "Sign out" : "Sign in"}
                </button>
            </div>
        </nav>
    );
};