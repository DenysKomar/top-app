import React, { KeyboardEvent, useState } from 'react'
import cn from 'classnames'
import styles from './Search.module.css'
import {SearchProps} from './Search.props'
import Input from '../Input/Input'
import Button from '../Button/Button'
import SearchIcon from '../../public/Search.svg'
import { useRouter } from 'next/router'

const Search = ({className, ...props}:SearchProps):JSX.Element=> {
  const [search,setSearch]= useState<string>('')
  const router  = useRouter()

  const handleKeyDown = (e:KeyboardEvent) => {
      if(e.key == "Enter") {
        goToSearch()
      }
  }

  const goToSearch = () => {
    router.push({
      pathname:'/search',
      query: {
        q:search
      }
    })
  }


  return (
    <form className={cn(className,styles.search)} {...props} role='search'>
        <Input className={styles.input} placeholder="Поиск..." value={search} onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <Button className={styles.button} appearance="primary" onClick={goToSearch} aria-label="Искать по сайту" > <SearchIcon /> </Button>
    </form>
  )
}

export default Search