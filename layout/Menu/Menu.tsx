import React, { KeyboardEvent, useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";
import { motion } from "framer-motion"


const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visiable:{
      marginBottom:20,
      transition: {
        when:'beforeChildren',
        staggerChildren:0.1
      }
    },
    hidden:{
      marginBottom: 0,
    }
  }
  const variantsChildren ={
    visiable:{
      opacity:1,
      height:29,
      
    },
    hidden:{
      opacity:0,
      height:0
    }

  }

  const openSecondLevel = (secondCategory:string) => {
    setMenu && setMenu(menu.map(m => {
      if(m._id.secondCategory == secondCategory) {
        m.isOpened = !m.isOpened
      }
      return m;
    }))
  }
  const openSecondLevelKey = (key:KeyboardEvent,secondCategory:string) => {
    if(key.code =="Space" ||key.code =="Enter" ){
      key.preventDefault()
    openSecondLevel(secondCategory)
  }}

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
              <div tabIndex={0} onKeyDown={(key:KeyboardEvent)=>openSecondLevelKey(key,m._id.secondCategory)}
                className={styles.secondLevel} onClick={() =>openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
              <motion.div
                layout={true}
                variants={variants}
                initial={m.isOpened ? 'visiable' : 'hidden'}
                animate={m.isOpened ? 'visiable' : 'hidden'}
                className={cn(styles.secondLevelBlock)}>
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string,isOpened:boolean) => {
    return pages.map((p) => (
      <motion.div  key={p._id} variants={variantsChildren}>
        <Link href={`/${route}/${p.alias}`}>
          <a
            tabIndex={isOpened ? 0 : -1}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
            })}
          >
            {p.category}
          </a>
        </Link>
      </motion.div>
    ));
  };

  return (
    <div className={styles.menu}>
      <u>{buildFirstLevel()}</u>
    </div>
  );
};

export default Menu;
