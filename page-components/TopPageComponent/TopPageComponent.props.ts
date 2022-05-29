import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interface";
import { ProductsModel } from "../../interfaces/product.interface";

export interface TopPageComponentProps {
    firstCategory: TopLevelCategory;
    page:TopPageModel
    products:ProductsModel[]
  }