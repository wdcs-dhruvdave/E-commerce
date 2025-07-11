'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react'; 

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const generatePath = (index) => '/' + segments.slice(0, index + 1).join('/');

  return (
    <nav aria-label="Breadcrumb" className="mb-6 w-full">
      <ol className="flex flex-wrap items-center text-sm text-gray-500 gap-2">
        <li>
          <Link href="/" className="text-black font-medium hover:underline">
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          const path = generatePath(index);
          const isLast = index === segments.length - 1;
          const label = decodeURIComponent(segment).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

          return (
            <li key={path} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              {isLast ? (
                <span className="text-gray-400">{label}</span>
              ) : (
                <Link href={path} className="hover:underline text-gray-700">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
