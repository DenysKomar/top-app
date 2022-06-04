import { GetStaticProps, NextPage } from "next/types"
import Button from "../components/Button/Button"
import Htag from "../components/Htag/Htag"
import Ptag from "../components/Ptag/Ptag"
import Tag from "../components/Tag/Tag"
import {useEffect,useState} from 'react'
import Rating from "../components/Rating/Rating"
import { withLayout } from "../layout/Layout"
import axios from "axios"
import { MenuItem } from "../interfaces/menu.interface"
import Input from "../components/Input/Input"
import TextArea from "../components/TextArea/TextArea"
import { API } from "../helpers/api"


function Home({menu}:HomeProps): JSX.Element {
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
      <Input placeholder='text'/>
      <TextArea placeholder='text' />
    </>
  )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  })
    return {
      props: {
          menu,
          firstCategory
      }
    }
}

interface HomeProps extends Record<string,unknown>{
  menu : MenuItem[],
  firstCategory: number;
}