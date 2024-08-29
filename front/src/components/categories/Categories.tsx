import React from "react";
import CategoryList from "@/components/category_list/CategoryList";

const Categories = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center p-5 rounded-lg cursor-pointer text-sm md:font-bold md:text-lg">
      <h1 className="font-serif text-2xl font-bold">Categories</h1>
      <CategoryList />
    </div>
  );
};

export default Categories;
