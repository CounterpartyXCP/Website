import type { Collection } from '@tinacms/schema-tools'

export const whatIsCounterpartyCollection: Collection = {
  name: "whatiscounterparty",
  label: "What Is Counterparty",
  path: "src/content/home",
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
      type: "rich-text",
      name: "description",
      label: "Description",
      isBody: true,
    },
    {
      type: "object",
      name: "keyFeatures",
      label: "Key Features",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Feature Title",
        },
        {
          type: "string",
          name: "description",
          label: "Feature Description",
        },
        {
          type: "image",
          name: "icon",
          label: "Feature Icon",
        },
      ],
    },
  ],
};