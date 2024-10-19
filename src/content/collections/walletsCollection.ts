import type { Collection } from '@tinacms/schema-tools'

export const walletCollection: Collection = {
  name: "wallet",
  label: "Wallet",
  path: "src/content/wallets",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Wallet Title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Wallet Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "link",
      label: "Wallet Link",
    },
    {
      type: "image",
      name: "logo",
      label: "Wallet Logo",
    },
    {
      type: "object",
      name: "features",
      label: "Features",
      fields: [
        {
          type: "boolean",
          name: "dispensers",
          label: "Dispensers",
        },
        {
          type: "boolean",
          name: "assetCreation",
          label: "Asset Creation",
        },
        {
          type: "boolean",
          name: "dex",
          label: "DEX",
        },
        {
          type: "boolean",
          name: "fairminter",
          label: "Fairminter",
        }
      ],
    },
    {
      type: "object",
      name: "platforms",
      label: "Platforms",
      fields: [
        {
          type: "boolean",
          name: "web",
          label: "Web",
        },
        {
          type: "boolean",
          name: "mobile",
          label: "Mobile",
        },
        {
          type: "boolean",
          name: "desktop",
          label: "Desktop",
        },
      ],
    },
    {
      type: "boolean",
      name: "isV104Compatible",
      label: "Is v10.4 Compatible",
    },
    {
      type: "string",
      name: "twitter",
      label: "Twitter Link",
    },
    {
      type: "string",
      name: "telegram",
      label: "Telegram Link",
    },
  ],
}

export const walletsPageCollection: Collection = {
  name: "walletsPage",
  label: "Wallets Page",
  path: "src/content/pages/wallets",
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
      type: "rich-text",
      name: "info",
      label: "Info",
    },
    {
      type: "string",
      name: "walletList",
      label: "Wallet List",
      list: true,
    },
  ],
}
