import React from "react";
import { ICategory } from "@/app/types";

const Category = ({
  category,
}: {
  category: ICategory;
}): React.ReactElement => {
  return (
    <div>
      <h1>{category.name}</h1>
    </div>
  );
};

export default Category;
