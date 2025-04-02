export default function footer() {
  return `
    <footer class="bg-gray-950 text-gray-300 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Company Info -->
                <div>
                    <a href="#" class="text-2xl font-bold text-blue-400 flex items-center">
                        <i data-lucide="car" class="w-6 h-6 mr-2"></i> CarZone
                    </a>
                    <p class="mt-2 text-gray-400">Your trusted car marketplace. Find the best deals on cars.</p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-semibold text-white">Quick Links</h3>
                    <ul class="mt-2 space-y-2">
                        <li><a href="#" class="hover:text-blue-400">Home</a></li>
                        <li><a href="#" class="hover:text-blue-400">About</a></li>
                        <li><a href="#" class="hover:text-blue-400">Contact Us</a></li>
                        <li><a href="#" class="hover:text-blue-400">See Cars</a></li>
                    </ul>
                </div>

                <!-- Legal & Social Links -->
                <div>
                    <h3 class="text-lg font-semibold text-white">Legal</h3>
                    <ul class="mt-2 space-y-2">
                        <li><a href="#" class="hover:text-blue-400">Privacy Policy</a></li>
                        <li><a href="#" class="hover:text-blue-400">Terms & Conditions</a></li>
                    </ul>
                    <div class="mt-4 flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-blue-400"><i data-lucide="facebook" class="w-6 h-6"></i></a>
                        <a href="#" class="text-gray-400 hover:text-blue-400"><i data-lucide="twitter" class="w-6 h-6"></i></a>
                        <a href="#" class="text-gray-400 hover:text-blue-400"><i data-lucide="instagram" class="w-6 h-6"></i></a>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
                &copy; 2025 CarZone. All rights reserved.
            </div>
        </div>
    </footer>
    `;
}
