export default function MobileNavbar() {
  <div className="navbar-menu relative z-50 hidden">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-8">
        <a className="mr-auto text-3xl font-bold leading-none" href="#">
          Felix
        </a>
        <button className="navbar-close">
          <svg
            className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1">
            <a
              className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
              href="#"
            >
              Erfarenhet  
            </a>
          </li>
          <li className="mb-1">
            <a
              className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
              href="#"
            >
              Portfolio
            </a>
          </li>
          <li className="mb-1">
            <a
              className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
              href="#"
            >
              Rekommendationer
            </a>
          </li>
          <li className="mb-1">
            <a
              className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
              href="#"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <div className="pt-6">
          <a
            className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
            href="#"
          >
            Sign in
          </a>
          <a
            className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
            href="#"
          >
            Sign Up
          </a>
        </div>
        <p className="my-4 text-xs text-center text-gray-400">
          <span>Copyright © 2021</span>
        </p>
      </div>
    </nav>
  </div>;
}
