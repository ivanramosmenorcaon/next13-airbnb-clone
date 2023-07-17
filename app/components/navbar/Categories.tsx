'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { BiRestaurant,BiBody } from 'react-icons/bi';


import CategoryBox from "../CategoryBox";
import Container from '../Container';
import { ICategoriesParams } from '@/app/actions/getCategories';



const Categories = ({ categories }: { categories?: ICategoriesParams[] }) => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {(categories ?? []).map((item) => {
          let icon=BiRestaurant;
          switch(item.icon) {
            case 'BiRestaurant':
              icon = BiRestaurant;
              break;
              case "BiBody":
              icon = BiBody;
              break;
            default:
              icon = BiBody;
          }
          return (
            <CategoryBox
              key={item.name}
              label={item.name}
              icon={icon}
              selected={category === item.name}
            />
          )
        }
        )}
      </div>
    </Container>
  );
}

export default Categories;