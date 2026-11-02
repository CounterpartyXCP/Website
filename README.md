# Counterparty Website

This repository contains the source code for the official Counterparty website ([counterparty.io](https://counterparty.io)). Counterparty is a peer-to-peer financial platform and distributed, open-source Internet protocol built on the Bitcoin blockchain.

## 🚀 Technologies Used

- [Astro](https://astro.build/): Static site generator
- [TinaCMS](https://tina.io/): Git-backed headless CMS for Markdown content
- [Tailwind CSS](https://tailwindcss.com/): Styling
- TypeScript & React: Interactive components

## 📁 Project Structure

```text
/
├── public/
│   ├── images/                     # Logos and assets (explorers, featured-collections, marketplaces, wallets, news)
│   └── uploads/                    # Blog/news media uploads
├── src/
│   ├── components/
│   │   ├── home/                   # Homepage sections (Header, WhatIsCounterparty, Wallets, Explorers, Collections, Marketplaces, LatestNews, Contribute)
│   │   ├── BlockCountdown.tsx
│   │   ├── CommonStyles.astro
│   │   ├── Footer.astro
│   │   └── Navbar.astro
│   ├── content/
│   │   ├── collections/            # TinaCMS collection schemas (*Collection.ts)
│   │   ├── explorers/              # Individual explorer entries (*.md)
│   │   ├── featured-collections/   # Featured collections list (featured-collections.md)
│   │   ├── header/                 # Hero header content
│   │   ├── home/                   # Homepage copy (WhatIsCounterparty, Contribute)
│   │   ├── marketplaces/           # Marketplaces list (marketplaces.md)
│   │   ├── news/                   # News and development update posts (*.md)
│   │   ├── pages/                  # Ordering lists for explorers and wallets
│   │   └── wallets/                # Individual wallet entries (*.md)
│   ├── layouts/
│   └── pages/                      # Astro routes (index.astro, news/)
├── tina/
│   └── config.ts                   # TinaCMS configuration and schema registration
└── package.json
```

## 🏁 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/CounterpartyXCP/Website.git
   cd Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server (starts both TinaCMS and Astro):
   ```bash
   npm run dev
   ```

## 🛠️ Development Commands

| Command                   | Action                                                       |
| :------------------------ | :----------------------------------------------------------- |
| `npm run dev`             | Starts `tinacms dev` and `astro dev` (`localhost:4321`)      |
| `npm run tina`            | Starts local TinaCMS GraphQL server (`localhost:4001`)       |
| `npm run astro build`     | Builds production site to `./dist/` (requires Tina running)  |
| `npm run preview`         | Previews the production build locally                        |
| `npm run astro ...`       | Runs Astro CLI commands (`astro add`, `astro check`, etc.)   |

## 📝 Content Architecture

All site content lives in `src/content/` as Markdown with YAML frontmatter and is validated/queried through TinaCMS schemas in `src/content/collections/` (registered in `tina/config.ts`). Adding a frontmatter field to a Markdown file without updating its Tina schema will cause the field to be stripped at render time.

There are three content patterns used in this repository:

### 1. Individual Entry Files + Ordering Page (`wallets`, `explorers`)
Used by **Wallets** and **Explorers**. Each item is a separate Markdown file, and display order is controlled by a page list:
1. Entry Markdown file: `src/content/<type>/<slug>.md`
2. Ordering list: `src/content/pages/<type>/<type>.md` (`walletList` / `explorerList`)
3. Tina schema: `src/content/collections/<type>Collection.ts`
4. Astro component: `src/components/home/<Type>.astro`
5. Images: `public/images/<type>/`

To add a new wallet or explorer:
1. Create `src/content/<type>/<slug>.md` with frontmatter matching the collection schema.
2. Add `<slug>.md` to the list in `src/content/pages/<type>/<type>.md`.
3. Place its logo in `public/images/<type>/`.

### 2. Inline Frontmatter Lists (`featured-collections`, `marketplaces`)
Used by **Collections** and **Marketplaces**. All entries are stored directly as a YAML array inside a single Markdown file (order in the YAML array determines display order):
- **Collections**:
  - Content file: `src/content/featured-collections/featured-collections.md` (`featuredCollectionList`)
  - Tina schema: `src/content/collections/featuredCollectionsCollection.ts`
  - Astro component: `src/components/home/Collections.astro`
  - Images: `public/images/featured-collections/`
- **Marketplaces**:
  - Content file: `src/content/marketplaces/marketplaces.md` (`marketplaceList`)
  - Tina schema: `src/content/collections/marketplacesCollection.ts`
  - Astro component: `src/components/home/Marketplaces.astro`
  - Images: `public/images/marketplaces/`

### 3. News Posts (`news`)
- Content files: `src/content/news/<slug>.md`
- Tina schema: `src/content/collections/newsCollection.ts`
- Routes: `src/pages/news/[...page].astro` and `src/pages/news/[slug].astro`

## 🏗️ Build Notes

`astro build` queries the local TinaCMS GraphQL server (`localhost:4001`), so `tinacms dev` must be running in the background during the build:

```bash
TINA_PUBLIC_IS_LOCAL=true npx tinacms dev &
sleep 5
npx astro build
pkill -f "tinacms dev"
```

There is no separate test suite — `npx astro build` validates the Tina schemas and content.

## 🚢 Deployment & Maintenance

### Production Server (`www.counterparty.io`)
- **Host**: `www.counterparty.io` (`161.35.121.212`, DigitalOcean droplet `counterparty-website` in `nyc1`)
- **OS & Kernel**: Ubuntu 24.10 (`oracular`, EOL) running mainline LTS kernel `6.12.115-0612115-generic`, hardened via `/etc/sysctl.d/99-cve-2026-98432.conf`, `/etc/sysctl.d/99-panic-reboot.conf`, and `nftables.service` (`/etc/nftables.conf`)
- **Checkout Path**: `/var/www/Website`
- **Web Root**: `/var/www/Website/dist` (served statically by Nginx)
- **Nginx Config**: `/etc/nginx/sites-available/default`
  - Redirects `http://` -> `https://` and `counterparty.io` -> `https://www.counterparty.io`
  - Proxies `https://www.counterparty.io/protocol_changes.json` to `raw.githubusercontent.com/CounterpartyXCP/counterparty-core/refs/heads/master/counterparty-core/counterpartycore/protocol_changes.json` (with IPv4 resolver `ipv6=off`)
  - TLS certificates are managed by Certbot (`/etc/letsencrypt/live/counterparty.io/`)

### Deploying Website Changes
After merging changes to `master` on GitHub:

```bash
ssh root@161.35.121.212
export PATH="/root/.nvm/versions/node/v20.18.0/bin:$PATH"
cd /var/www/Website
git pull
TINA_PUBLIC_IS_LOCAL=true npx tinacms dev &
sleep 5
npx astro build
pkill -f "tinacms dev"
```

Since Nginx serves `/var/www/Website/dist` directly, changes take effect as soon as `npx astro build` completes (no Nginx reload required unless `/etc/nginx/sites-available/default` was modified).

### Documentation (`docs.counterparty.io`)
The documentation site at [docs.counterparty.io](https://docs.counterparty.io) is maintained in a separate repository ([`CounterpartyXCP/Documentation`](https://github.com/CounterpartyXCP/Documentation)) and hosted on GitHub Pages from its `gh-pages` branch. To publish documentation updates from a local clone of `Documentation`:

```bash
cd Documentation
git pull origin master
USE_SSH=true npm run deploy
```

## 🤝 Contributing

1. Fork the repository and create a branch (`git checkout -b feature/your-feature-name`).
2. Make your changes and verify the build succeeds with `tinacms dev` + `npx astro build`.
3. Commit, push to your fork, and open a Pull Request against `master`.

## 📄 License

This work is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1).
