import { FaBookmark as icon } from "react-icons/fa"

export default {
  // Computed name
  name: "category",
  // Visible name
  title: "Categories",
  icon,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Store Slug",
      type: "slug",
      options: {
        source: "name",
        maxLenght: 100,
      },
    },
  ],
}
