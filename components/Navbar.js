export default function Navbar() {
    return (
      
<nav className="bg-white border-gray-200 rounded mb-4">
  <div className="px-2 sm:px-4 lg:px-5">
    <div className="relative flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/docs/images/logo.svg" className="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div className="hidden sm:block sm:ml-6">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700 text-sm font-medium">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Features</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="inset-y-0 right-0 flex items-center sm:hidden">
        {/* Mobile menu button*/}
        <button onclick="toggleCollapse('mobile-menu-5')" type="button" className="text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          {/* Open mobile menu icon */} 
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          {/* Close mobile menu icon */}
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </button>
      </div>
    </div>
  </div>
   {/* Mobile menu */} 
  <div id="mobile-menu-5" className="hidden sm:hidden pt-2">
    <ul className="pt-2">
      <li>
        <a href="#" className="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2">Home</a>
      </li>
      <li>
        <a href="#" className="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:text-gray-900 block px-3 py-2">About</a>
      </li>
      <li>
        <a href="#" className="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:text-gray-900 block px-3 py-2">Features</a>
      </li>
      <li>
        <a href="#" className="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:text-gray-900 block px-3 py-2">Pricing</a>
      </li>
      <li>
        <a href="#" className="text-gray-600 hover:bg-gray-50 text-base font-normal hover:text-gray-900 block px-3 py-2">Contact</a>
      </li>
    </ul>
  </div>
</nav>




    )
}
