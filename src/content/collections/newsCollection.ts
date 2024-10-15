import type { Collection } from '@tinacms/schema-tools'

export const newsCollection: Collection = {
  name: "news",
  label: "News",
  path: "src/content/news",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Publication Date",
      required: true,
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
      required: true,
    },
    {
      type: "string",
      name: "status",
      label: "Publication Status",
      options: ["draft", "published"],
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Author",
      required: true,
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
    },
    {
      type: "image",
      name: "image",
      label: "Featured Image",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Content",
      isBody: true,
    },
  ],
};