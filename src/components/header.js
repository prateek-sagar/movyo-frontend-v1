export default function header() {
  return `
    <nav class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center">
                    <a href="#" class="text-2xl font-bold text-blue-600 flex items-center">
                        <i data-lucide="car" class="w-6 h-6 mr-2"></i>
                        MovyoCars
                    </a>
                </div>
                <div class="hidden md:flex space-x-6">
                    <a href="/" class="text-gray-700 uppercase font-semibold hover:text-blue-600 flex py-2 px-1 items-center relative group">
                        <i data-lucide="home" class="w-5 h-5 mr-1"></i> Home
                        <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="/" class="text-gray-700 uppercase font-semibold hover:text-blue-600 flex items-center relative group">
                        <i data-lucide="info" class="w-5 h-5 mr-1"></i> About
                        <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href="/" class="text-gray-700 uppercase font-semibold hover:text-blue-600 flex items-center relative group">
                        <i data-lucide="car-front" class="w-5 h-5 mr-1"></i> See Cars
                        <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href="/" class="text-gray-700 uppercase font-semibold hover:text-blue-600 flex items-center relative group">
                        <i data-lucide="mail" class="w-5 h-5 mr-1"></i> Contact
                        <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    
                    <a href="/" class="text-gray-700 uppercase font-semibold hover:text-blue-600 flex items-center relative group">
                        <i data-lucide="log-in" class="w-5 h-5 mr-1"></i> Sign In
                        <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="/" class="text-gray-700 uppercase font-semibold hover:text-blue-600 flex items-center relative group">
                        <i data-lucide="user-plus" class="w-5 h-5 mr-1"></i> Sign Up
                        <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
                <button id="menu-toggle" class="md:hidden text-gray-700">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white shadow-md">
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Home</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">About</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Contact Us</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">See Cars</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Sign In</a>
            <a href="#" class="block px-4 py-2 bg-blue-600 text-white text-center rounded-lg mx-4 hover:bg-blue-700">Sign Up</a>
        </div>
    </nav>  
    `;
}
