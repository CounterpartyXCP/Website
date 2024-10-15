import type { Collection } from '@tinacms/schema-tools'

export const explorerCollection: Collection = {
  name: "explorer",
  label: "Explorer",
  path: "src/content/explorers",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Explorer Name",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Explorer Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "link",
      label: "Explorer Link",
    },
    {
      type: "image",
      name: "logo",
      label: "Explorer Logo",
    },
    {
      type: "string",
      name: "type",
      label: "Explorer Type",
      options: ["general", "themed"],
    },
  ],
}

export const explorersPageCollection: Collection = {
  name: "explorersPage",
  label: "Explorers Page",
  path: "src/content/pages/explorers",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "rich-text",
      name: "generalPurposeIntro",
      label: "General-Purpose Introduction",
    },
    {
      type: "rich-text",
      name: "themedIntro",
      label: "Themed Introduction",
    },
    {
      type: "string",
      name: "explorerList",
      label: "Explorer List",
      list: true,
    },
  ],
}

// Export both collections as explorersCollection
export const explorersCollection = {
  explorer: explorerCollection,
  explorersPage: explorersPageCollection,
}
