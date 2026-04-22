# Counterparty Website

This repository contains the source code for the official Counterparty website. Counterparty is a platform for creating and trading user-defined assets on the Bitcoin blockchain.

## 🚀 Technologies Used

- [Astro](https://astro.build/): A modern static site generator
- [TinaCMS](https://tina.io/): A Git-backed headless CMS for Markdown
- Markdown: For content management
- TypeScript: For type-safe JavaScript
- CSS: For styling

## 📁 Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── collections/
│   │   ├── news/
│   │   └── wallets/
│   ├── layouts/
│   └── pages/
└── package.json
```

- `public/`: Static assets
- `src/components/`: Reusable Astro components
- `src/content/`: Markdown files and content collections
- `src/layouts/`: Page layouts
- `src/pages/`: Astro pages that generate routes

## 🏁 Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/counterparty-website.git
   ```

2. Navigate to the project directory:
   ```
   cd counterparty-website
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## 🛠️ Development Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Content Management

We manage content through Markdown files in the `src/content/` directory. Here's how to make changes:

### Editing Existing Content

To edit existing content, such as updating information about an explorer:

1. Navigate to the relevant Markdown file in the `src/content/` directory.
2. For example, to update the pepe-wtf explorer, you might edit `src/content/explorers/pepe-wtf.md`.
3. Make your changes directly in the file.

### Adding New Content

To add new content:

1. Create a new Markdown file in the appropriate subdirectory of `src/content/`.
2. Use the following general frontmatter structure:

```markdown
---
title: Content Title
description: A brief description of the content
additionalField: Any additional required fields
---

Detailed information about the content goes here.
```

For example, to add a new explorer:

1. Create a new file: `src/content/explorers/new-explorer.md`.
2. Use the following frontmatter structure:

```markdown
---
title: New Explorer Name
description: A brief description of the new explorer
url: https://new-explorer.com
---

Detailed information about the new explorer goes here.
```

3. If necessary, update the corresponding collection file (e.g., `src/content/collections/explorersCollection.ts`) to include the new content in the collection.

### Submitting Changes

After making your changes:

1. Commit your changes to a new branch:
   ```
   git checkout -b feature/your-feature-name
   git add path/to/modified/file(s)
   git commit -m "Brief description of your changes"
   ```

   For example, to update explorer information:
   ```
   git checkout -b update/explorer-info
   git add src/content/explorers/pepe-wtf.md
   git commit -m "Update pepe-wtf explorer information"
   ```

2. Push your changes to your fork:
   ```
   git push origin feature/your-feature-name
   ```

3. Open a pull request on GitHub from your fork to the main repository.

4. In the pull request description, explain the changes you've made and why they're necessary.

5. Wait for a maintainer to review your changes. They may ask for modifications before merging.

By following this process, you help maintain the quality and consistency of the website's content while allowing for community contributions.

## Content Architecture

Content lives in `src/content/` as Markdown with YAML frontmatter. Each content type has:
1. Markdown files in `src/content/<type>/<slug>.md`
2. Tina collection schema in `src/content/collections/<type>Collection.ts`
3. Astro rendering component in `src/components/home/<Type>.astro`
4. Page list in `src/content/pages/<type>/<type>.md` (controls which items appear and in what order)

All four must stay in sync. Adding a frontmatter field to a Markdown file without updating the Tina schema means the field will be silently stripped at render time.

### Adding or Updating Content

1. Create/edit the Markdown file in `src/content/<type>/<slug>.md` with frontmatter matching the corresponding collection schema
2. Add the filename to the list in `src/content/pages/<type>/<type>.md`
3. If adding new frontmatter fields: update the Tina schema in the collection file AND any icon/display mappings in the Astro component
4. Add any images to `public/images/<type>/`

## Build Notes

The `npm run build` script requires `tinacms dev` to be running. Start it in the background first:

```
TINA_PUBLIC_IS_LOCAL=true npx tinacms dev &
sleep 5
npx astro build
```

There is no test suite — the build itself validates content. If `astro build` succeeds, the content is valid.

## Contributing

We welcome contributions to the Counterparty website:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## 📄 License

This work is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1).

## 🌐 Learn More

For more information about Counterparty, visit our [official website](https://counterparty.io) or join our [community chat](https://t.me/Counterparty_XCP).
