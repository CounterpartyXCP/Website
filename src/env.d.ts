/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  TINA_CLIENT_ID: string;
  TINA_TOKEN: string;
  NEXTAUTH_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ProcessEnv {
  // ADMIN_USERNAME: string; // ← Remove this line
  // ADMIN_PASSWORD: string; // ← Remove this line
}
