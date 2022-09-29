import Link from 'next/link';
import { ConnectButton } from "web3uikit";

export default function Header() {
    return (
        <nav className="p-5 flex flex-row justify-center items-center">
            <div>
                <Link href="/">
                    {/* <h1 className="py-4 px-4 font-bold text-3xl cursor-pointer bg-button bg-cover">
                        {" "}
                        Plants And Pillars{" "}
                    </h1> */}
                    <div className="bg-button bg-cover rounded-3xl  cursor-pointer">
                        <img src="./pap.png" alt="pap" width={150} height={150} />
                    </div>
                </Link>
            </div>

            <div className="flex justify-between items-center space-x-10 p-5">
                <Link href="/lottery">
                    <h4 className="cursor-pointer bg-button bg-cover px-2 py-1 font-bold text-lg ">
                        Lottery
                    </h4>
                </Link>
                <Link href="/dashboard">
                    <h4 className="cursor-pointer bg-button bg-cover px-2 py-1 font-bold text-lg ">
                        Dashboard
                    </h4>
                </Link>
                <Link href="https://plantspedia.vercel.app/">
                    <h4 className="cursor-pointer bg-button bg-cover px-2 py-1 font-bold text-lg ">
                        PlantsPedia
                    </h4>
                </Link>
                <Link href="/poap">
                    <h4 className="cursor-pointer bg-button bg-cover px-2 py-1 font-bold text-lg ">
                        Competition
                    </h4>
                </Link>
            </div>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}