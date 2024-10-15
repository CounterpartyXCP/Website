import type { Collection } from '@tinacms/schema-tools'

export const marketplacesCollection: Collection = {
  name: "marketplaces",
  label: "Marketplaces",
  path: "src/content/marketplaces",
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
      name: "marketplaceList",
      label: "Marketplace List",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Marketplace Name",
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
          label: "Marketplace Link",
        },
        {
          type: "image",
          name: "logo",
          label: "Marketplace Logo",
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.name || "Marketplace",
        }),
      },
    },
  ],
};