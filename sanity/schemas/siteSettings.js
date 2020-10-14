import { FaCogs as icon } from "react-icons/fa"

export default {
  // Computed name
  name: "siteSettings",
  // Visible name
  title: "Site Settings",
  icon,
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Site Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "siteCopy",
      title: "Site Copy",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
  preview: {
    select: {
      media: "logo",
    },
    prepare({ media }) {
      return {
        media,
        title: "La Carlota",
      }
    },
  },
}
