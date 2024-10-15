import { defineConfig } from "tinacms";
import config from "./config";

export default function tina() {
  return defineConfig({
    name: 'tina',
    ...config,
    client: { skip: true },
  });
}