import S from "@sanity/desk-tool/structure-builder"
import { MdSettings as Icon } from "react-icons/md"

export default () =>
  S.list()
    .title("La Carlota")
    .items([
      S.listItem()
        .icon(Icon)
        .title("Site settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        listItem => !["siteSettings"].includes(listItem.getId())
      ),
    ])
