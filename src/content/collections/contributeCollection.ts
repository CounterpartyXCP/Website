import type { Collection } from '@tinacms/schema-tools'

export const contributeCollection: Collection = {
  name: "contribute",
  label: "Contribute",
  path: "src/content/home/contribute",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "string",
      name: "developmentTitle",
      label: "Development Section Title",
    },
    {
      type: "string",
      name: "communityTitle",
      label: "Community Section Title",
    },
    {
      type: "object",
      name: "developmentLinks",
      label: "Development Links",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
        {
          type: "string",
          name: "icon",
          label: "Icon",
          description: "Use Font Awesome 6 icon names without the 'fa-' prefix. For brand icons (e.g., github, telegram), the 'fa6-brands:' prefix will be added automatically. For solid icons (e.g., comments), the 'fa6-solid:' prefix will be added.",
        },
      ],
    },
    {
      type: "object",
      name: "communityLinks",
      label: "Community Links",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
        {
          type: "string",
          name: "icon",
          label: "Icon",
          description: "Use Font Awesome 6 icon names without the 'fa-' prefix. For brand icons (e.g., github, telegram), the 'fa6-brands:' prefix will be added automatically. For solid icons (e.g., comments), the 'fa6-solid:' prefix will be added.",
        },
      ],
    },
  ],
};
