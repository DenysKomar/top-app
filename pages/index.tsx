import { NextPage } from "next/types"
import Button from "../components/Button/Button"
import Htag from "../components/Htag/Htag"
import Ptag from "../components/Ptag/Ptag"
import Tag from "../components/Tag/Tag"
import {useEffect,useState} from 'react'
import Rating from "../components/Rating/Rating"
import { withLayout } from "../layout/Layout"


function Home(): JSX.Element {
    const [rating,setRating] = useState<number>(4)
  return (
    <>
 
      <Htag tag="h1">Text</Htag>
      <Ptag size='14'>Thats my text</Ptag>
      <Button appearance='primary' arrow='right'>Click me</Button>
      <Button appearance='ghost' arrow='down'>Click me</Button>
      <Tag size='small'>Text</Tag>
      <Tag size='medium' color="red">Text</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </>
  )
}

export default withLayout(Home);
