import React from "react";
import { categoriesToPreload } from "@/utils/preLoadData";
import { CategoryListContainer } from "./CategoriList.styles";
import Category from "@/components/category";

const CategoryList = (): React.ReactElement => {
  return (
    <CategoryListContainer>
      {categoriesToPreload.map((category, index) => {
        return <Category key={index} category={category} />;
      })}
    </CategoryListContainer>
  );
};

export default CategoryList;
