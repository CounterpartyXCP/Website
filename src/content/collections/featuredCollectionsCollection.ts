import type { Collection } from '@tinacms/schema-tools'

export const featuredCollectionsCollection: Collection = {
  name: "featuredCollections",
  label: "Collections",
  path: "src/content/featured-collections",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "rich-text",
      name: "introduction",
      label: "Introduction",
    },
    {
      type: "object",
      name: "featuredCollectionList",
      label: "Collection List",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Collection Name",
        },
        {
          type: "string",
          name: "year",
          label: "Year",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "link",
          label: "Collection Link",
        },
        {
          type: "image",
          name: "logo",
          label: "Collection Logo",
        },
        {
          type: "object",
          name: "links",
          label: "Additional Links",
          list: true,
          fields: [
            {
              type: "string",
              name: "label",
              label: "Label",
            },
            {
              type: "string",
              name: "url",
              label: "URL",
            },
          ],
          ui: {
            itemProps: (item) => ({
              label: item?.label || "Link",
            }),
          },
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.name || "Collection",
        }),
      },
    },
  ],
};
