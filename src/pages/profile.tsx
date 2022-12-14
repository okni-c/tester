import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import NavBar from "../components/NavBar/NavBar";

const Profile: NextPage = () => {
    const { data: sessionData } = useSession();

    return (
        <>
            <Head>
                <title>Profile Page</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className="container mx-auto flex min-h-screen flex-col items-center justify-start p-4">
                {sessionData &&
                    <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
                        <span className="text-purple-300">{sessionData?.user?.name}'s</span> Profile
                    </h1>
                }
                {!sessionData && 
                    <p className="text-2xl my-5">You need to be logged in to view your profile...</p>
                }

            </main>
        </>
    );
};

export default Profile;