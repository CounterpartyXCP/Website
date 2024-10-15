// tina/config.ts
import { LocalAuthProvider, defineConfig } from "tinacms";

// src/content/collections/home/headerCollection.ts
var headerCollection = {
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
      required: true
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea"
      }
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
          label: "Button Label"
        },
        {
          type: "string",
          name: "link",
          label: "Button Link"
        }
      ]
    }
  ]
};

// src/content/collections/home/whatIsCounterpartyCollection.ts
var whatIsCounterpartyCollection = {
  name: "whatiscounterparty",
  label: "What Is Counterparty",
  path: "src/content/home/whatiscounterparty",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "rich-text",
      name: "description",
      label: "Description",
      isBody: true
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
          label: "Feature Title"
        },
        {
          type: "string",
          name: "description",
          label: "Feature Description"
        },
        {
          type: "image",
          name: "icon",
          label: "Feature Icon"
        }
      ]
    }
  ]
};

// src/content/collections/newsCollection.ts
var newsCollection = {
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
      required: true
    },
    {
      type: "datetime",
      name: "date",
      label: "Publication Date",
      required: true
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
      required: true
    },
    {
      type: "string",
      name: "status",
      label: "Publication Status",
      options: ["draft", "published"],
      required: true
    },
    {
      type: "string",
      name: "author",
      label: "Author",
      required: true
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true
    },
    {
      type: "image",
      name: "image",
      label: "Featured Image"
    },
    {
      type: "rich-text",
      name: "body",
      label: "Content",
      isBody: true
    }
  ]
};

// src/content/collections/walletsCollection.ts
var walletCollection = {
  name: "wallet",
  label: "Wallet",
  path: "src/content/wallets",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Wallet Title",
      required: true
    },
    {
      type: "string",
      name: "description",
      label: "Wallet Description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "link",
      label: "Wallet Link"
    },
    {
      type: "image",
      name: "logo",
      label: "Wallet Logo"
    },
    {
      type: "object",
      name: "features",
      label: "Features",
      fields: [
        {
          type: "boolean",
          name: "dispensers",
          label: "Dispensers"
        },
        {
          type: "boolean",
          name: "assetCreation",
          label: "Asset Creation"
        },
        {
          type: "boolean",
          name: "dex",
          label: "DEX"
        }
      ]
    },
    {
      type: "object",
      name: "platforms",
      label: "Platforms",
      fields: [
        {
          type: "boolean",
          name: "web",
          label: "Web"
        },
        {
          type: "boolean",
          name: "mobile",
          label: "Mobile"
        },
        {
          type: "boolean",
          name: "desktop",
          label: "Desktop"
        }
      ]
    },
    {
      type: "boolean",
      name: "isV104Compatible",
      label: "Is v10.4 Compatible"
    },
    {
      type: "string",
      name: "twitter",
      label: "Twitter Link"
    },
    {
      type: "string",
      name: "telegram",
      label: "Telegram Link"
    }
  ]
};
var walletsPageCollection = {
  name: "walletsPage",
  label: "Wallets Page",
  path: "src/content/pages/wallets",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle"
    },
    {
      type: "rich-text",
      name: "info",
      label: "Info"
    },
    {
      type: "string",
      name: "walletList",
      label: "Wallet List",
      list: true
    }
  ]
};

// src/content/collections/explorersCollection.ts
var explorerCollection = {
  name: "explorer",
  label: "Explorer",
  path: "src/content/explorers",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Explorer Name",
      required: true
    },
    {
      type: "string",
      name: "description",
      label: "Explorer Description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "link",
      label: "Explorer Link"
    },
    {
      type: "image",
      name: "logo",
      label: "Explorer Logo"
    },
    {
      type: "string",
      name: "type",
      label: "Explorer Type",
      options: ["general", "themed"]
    }
  ]
};
var explorersPageCollection = {
  name: "explorersPage",
  label: "Explorers Page",
  path: "src/content/pages/explorers",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "rich-text",
      name: "generalPurposeIntro",
      label: "General-Purpose Introduction"
    },
    {
      type: "rich-text",
      name: "themedIntro",
      label: "Themed Introduction"
    },
    {
      type: "string",
      name: "explorerList",
      label: "Explorer List",
      list: true
    }
  ]
};

// src/content/collections/marketplacesCollection.ts
var marketplacesCollection = {
  name: "marketplaces",
  label: "Marketplaces",
  path: "src/content/marketplaces",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "rich-text",
      name: "introduction",
      label: "Introduction"
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
          label: "Marketplace Name"
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea"
          }
        },
        {
          type: "string",
          name: "link",
          label: "Marketplace Link"
        },
        {
          type: "image",
          name: "logo",
          label: "Marketplace Logo"
        }
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.name || "Marketplace"
        })
      }
    }
  ]
};

// src/content/collections/contributeCollection.ts
var contributeCollection = {
  name: "contribute",
  label: "Contribute",
  path: "src/content/home/contribute",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle"
    },
    {
      type: "string",
      name: "developmentTitle",
      label: "Development Section Title"
    },
    {
      type: "string",
      name: "communityTitle",
      label: "Community Section Title"
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
          label: "Title"
        },
        {
          type: "string",
          name: "url",
          label: "URL"
        },
        {
          type: "string",
          name: "icon",
          label: "Icon"
        }
      ]
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
          label: "Title"
        },
        {
          type: "string",
          name: "url",
          label: "URL"
        },
        {
          type: "string",
          name: "icon",
          label: "Icon"
        }
      ]
    }
  ]
};

// tina/config.ts
var config_default = defineConfig({
  authProvider: new LocalAuthProvider(),
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      contributeCollection,
      headerCollection,
      whatIsCounterpartyCollection,
      walletCollection,
      walletsPageCollection,
      explorerCollection,
      explorersPageCollection,
      marketplacesCollection,
      newsCollection
    ]
  }
});
export {
  config_default as default
};
