import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { shuffle } from 'lodash';
import useSpotify from '../hooks/useSpotify';

const colors: string[] = [
    "from-red-500",
    "from-green-500",
    "from-blue-500",
    "from-indigo-500",
    "from-yellow-500",
    "from-pink-500", 
    "from-purple-500", 
];

function Center() {
    const spotifyApi = useSpotify();
    const { data: session } = useSession();
    const [color, setColor] = useState<any>(null);
    const [playlists, setPlaylists] = useState<any>([]);

    useEffect(() => {
        setColor(shuffle(colors).pop());
    }, [])

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            // spotifyApi.getUserPlaylists().then((data: any) => {
            //     setPlaylists(data.body.items);
            // });
        }
    }, [session, spotifyApi]);
    console.log(playlists);

    return (
        <div className="flex-grow">
            <header className="absolute top-5 right-8">
            <div className="flex item-center bg-red-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
                <img
                    className="rounded-full w-10 h-10"
                    src={session?.user?.image}
                    alt="User profile image"
                />
                <h2>{session?.user?.name}</h2>
                <ChevronDownIcon className="h-6 w-5" />
            </div>
            </header>

            <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8`}>
                <div className="flex item-center bg-blue-300">
                    <div className="bg-green-300">play1</div>
                    <div className="bg-green-300">play1</div>
                    <div className="bg-green-300">play1</div>
                </div>
            </section>
        </div>
    )
};

export default Center;
