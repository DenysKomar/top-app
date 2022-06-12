import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next/types"
import { withLayout } from "../../layout/Layout"
import axios from "axios"
import { MenuItem } from "../../interfaces/menu.interface"
import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interface"
import { ParsedUrlQuery } from "querystring"
import { ProductsModel } from "../../interfaces/product.interface"
import { firstLevelMenu } from "../../helpers/helpers"
import TopPageComponent from "../../page-components/TopPageComponent/TopPageComponent"
import { API } from "../../helpers/api"
import  Head from 'next/head'
import { Erorr404 } from "../404"


function TopPage({firstCategory, page,products}:CourseProps): JSX.Element {
if(!page || !products) { 
  return (
    <Erorr404></Erorr404>
  )
}

  return (
    <>
   
    <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.title}/>
        <meta name="og:description" content={page.metaDescription} />
   
      </Head>
        <TopPageComponent firstCategory={firstCategory} page={page} products={products} />
      </>
  )
}

export default withLayout(TopPage);

export const getStaticPaths:GetStaticPaths = async () => {
  let paths:string[] = []

  for ( const m of firstLevelMenu) {
    const { data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory :m.id
    })
        paths = paths.concat(menu.flatMap(s => s.pages.map(p=>`/${ m.route}/${p.alias}`)),)
  }
    return {
        paths,
        fallback:false,
    }
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}:GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params) {
        return {
            notFound:true
        }
    }
  const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type)
      if(!firstCategoryItem) {
        return {
            notFound:true
        }
    }
    try{
        const { data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
          firstCategory: firstCategoryItem.id
        })
        if(menu.length ==0) {
          return {
            notFound:true
        }
        }
    const { data: page} = await axios.get<TopPageModel>(API.topPage.byAlias + params.alias)
    const { data: products} = await axios.post<ProductsModel[]>(API.product.find, {
        category:page.category,
        limit:10,
    })
      return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id,
            page,
            products
        }
      }
    } catch {
      return {
        notFound:true
    }
    }
  
}

interface CourseProps extends Record<string,unknown>{
  menu : MenuItem[],
  firstCategory: TopLevelCategory;
  page:TopPageModel
  products:ProductsModel[]
}