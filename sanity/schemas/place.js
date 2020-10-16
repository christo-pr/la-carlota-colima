import { FaStore as icon } from "react-icons/fa"

export default {
  // Computed name
  name: "store",
  // Visible name
  title: "Stores",
  icon,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Store Name",
      type: "string",
      description: "Name of the store/restaurant",
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
      name: "visible",
      title: "Visible in Site",
      type: "boolean",
    },
    {
      name: "description",
      title: "Store Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "location",
      title: "Store Location",
      type: "geopoint",
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
      name: "categories",
      title: "Store Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      name: "fbLink",
      title: "Facebook",
      type: "url",
    },
  ],
  initialValue: {
    visible: true,
  },
}
