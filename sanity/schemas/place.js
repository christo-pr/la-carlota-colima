import React from "react"
import { FaStore } from "react-icons/fa"

export default {
  // Computed name
  name: "store",
  // Visible name
  title: "Stores",
  icon: () => <FaStore />,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Store Name",
      type: "string",
      description: "Name of the store/restaurant",
    },
    {
      name: "description",
      type: "string",
      title: "Store Description",
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
    {
      name: "image",
      title: "Store Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Store Category",
      type: "string",
      options: {
        list: [
          { title: "Comida", value: "food" },
          { title: "Cena", value: "home" },
          { title: "Desayunos", value: "credit-card" },
        ],
      },
    },
    {
      name: "fbLink",
      title: "Facebook",
      type: "string",
    },
  ],
}
