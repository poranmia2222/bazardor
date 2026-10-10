'use client';

import { Category } from '@/type/type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type CategoryNavLinksProps = {
  categories: Category[];
};

const CategoryNavLinks = ({ categories }: CategoryNavLinksProps) => {
  const pathname = usePathname();

  return (
    <>
      {categories.map((item) => {
        const href = `/category/${item.slug}`;
        const isActive =
          pathname === href || pathname.startsWith(`${href}/`);

        return (
          <li key={item.id}>
            <Link
              href={href}
              aria-current={isActive ? 'page' : undefined}
              className={`btn border-none transition-colors ${
                isActive
                  ? 'bg-[#05893E] text-white'
                  : 'bg-transparent hover:bg-[#05893E] hover:text-white'
              }`}
            >
              <span>{item.icon}</span>
              {item.nameBn}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default CategoryNavLinks;
