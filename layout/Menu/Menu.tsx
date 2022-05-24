import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import styles from "./Menu.module.css";
import CoursesIcon from "../../public/head.svg";
import ServicesIcon from "../../public/cloud.svg";
import BookIcon from "../../public/book.svg";
import BoxIcon from "../../public/box.svg";
import { TopLevelCategory } from "../../interfaces/page.interface";
import cn from "classnames";
import Link from "next/link";
import router, { useRouter } from "next/router";

const firstLevelMenu: FirstLevelMenuItem[] = [
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

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory:string) => {
    setMenu && setMenu(menu.map(m => {
      if(m._id.secondCategory == secondCategory) {
        m.isOpened = !m.isOpened
      }
      return m;
    }))
  }

  const buildFirstLevel = () => {
    return (
      <>
        {" "}
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <Link href={`/${menu.route}`}>
              <a href={`/${menu.route}`}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: menu.id == firstCategory,
                  })}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
            </Link>

            {menu.id == firstCategory && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if(m.pages.map(p=>p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true
          }
          return (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel} onClick={() =>openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link href={`/${route}/${p.alias}`}>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
          })}
        >
          {p.category}
        </a>
      </Link>
    ));
  };

  return (
    <div className={styles.menu}>
      <u>{buildFirstLevel()}</u>
    </div>
  );
};

export default Menu;
