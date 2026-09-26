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
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.name || "Collection",
        }),
      },
    },
  ],
};
