export function Sidebar() {
  return (
    <aside className="w-64 hidden md:block border-r bg-white p-4 shadow-sm">
      <h2 className="font-semibold text-lg mb-4">Categories</h2>
      <ul className="space-y-2 text-gray-700">
        <li className="hover:underline cursor-pointer">All</li>
        <li className="hover:underline cursor-pointer">Men</li>
        <li className="hover:underline cursor-pointer">Women</li>
        <li className="hover:underline cursor-pointer">Kids</li>
        <li className="hover:underline cursor-pointer">Accessories</li>
      </ul>
    </aside>
  );
}
