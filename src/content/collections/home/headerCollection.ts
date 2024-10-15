import type { Collection } from '@tinacms/schema-tools'

export const headerCollection: Collection =  {
  name: "header",
  label: "Header",
  path: "src/content/header",
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
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "ctaButtons",
      label: "Calls To Action",
      list: true,
      fields: [
        {
          type: "string",
          name: "label",
          label: "Button Label",
        },
        {
          type: "string",
          name: "link",
          label: "Button Link",
        },
      ],
    },
  ],
};