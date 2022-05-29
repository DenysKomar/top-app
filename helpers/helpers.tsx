import CoursesIcon from "../public/head.svg";
import ServicesIcon from "../public/cloud.svg";
import BookIcon from "../public/book.svg";
import BoxIcon from "../public/box.svg";
import { TopLevelCategory } from "../interfaces/page.interface";
import { FirstLevelMenuItem } from "../interfaces/menu.interface";


export const firstLevelMenu: FirstLevelMenuItem[] = [
    {
      route: "courses",
      name: "Курсы",
      icon: <CoursesIcon />,
      id: TopLevelCategory.Courses,
    },
    {
      route: "services",
      name: "Сервисы",
      icon: <ServicesIcon />,
      id: TopLevelCategory.Services,
    },
    {
      route: "books",
      name: "Книги",
      icon: <BookIcon />,
      id: TopLevelCategory.Books,
    },
    {
      route: "producs",
      name: "Кродукты",
      icon: <BoxIcon />,
      id: TopLevelCategory.Products,
    },
  ];

export const priceRu= (price:number):string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(" ₽")