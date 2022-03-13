import { HomeIcon, SearchIcon, LibraryIcon, LockClosedIcon } from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';

function Sidebar() {
  const { data: session, status } = useSession();

  return (
    <div className="text-gray-800 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-4">
      <button className="flex items-center space-x-2 hover:text-white" onClick={() => signOut()}>
          <LockClosedIcon className="h-5 w-5" />
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Library</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
