import { LocalAuthProvider, defineConfig } from "tinacms";
import { headerCollection } from "../src/content/collections/home/headerCollection";
import { whatIsCounterpartyCollection } from "../src/content/collections/home/whatIsCounterpartyCollection";
import { newsCollection } from "../src/content/collections/newsCollection";
import { walletCollection, walletsPageCollection } from "../src/content/collections/walletsCollection";
import { explorerCollection, explorersPageCollection } from "../src/content/collections/explorersCollection";
import { marketplacesCollection } from "../src/content/collections/marketplacesCollection";
import { contributeCollection } from "../src/content/collections/contributeCollection";

export default defineConfig({
  authProvider: new LocalAuthProvider(),
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
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
      newsCollection,
    ],
  },
});
