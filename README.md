This is a [Next.js](https://nextjs.org/) boiler plate project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and then configured as an easy to use boilerplate. 

### Disclaimer
The boilerplate is a WIP project to help me practice web app archiecture and configuration with the added bonus of having a ready to use template for any future projects. All ideas and feedback are welcome!

## The setup
- Typescript
- Eslint 
- Prettier (AirBnB styleguide)
- Pre-commit hooks to lint-stage
- One click deployment to Vercel 
- Styling library (tbd between MaterialUI and TailwindCSS)
- React Testing Library
- PWA ready

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## PWA

Progressive Web App [DOCS](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
Make sure to sure to update `./public/manifest.json` with correct information and icons(
[Generate Icons](https://tools.crawlink.com/tools/pwa-icon-generator/)


## Single click deployment to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTheqwertypusher%2Fnextjs-boiler-plate&project-name=my-app&repo-name=my-app&redirect-url=https%3A%2F%2Fpersonal-site-three-tau.vercel.app%2F&demo-title=Next.js%20Boilerplate%20&demo-description=A%20light-weight%20Typescript%20Next.js%20app%20already%20configured%20for%20static%20analysis%20to%20quickly%20start%20and%20develop.&demo-url=www.google.com&demo-image=https%3A%2F%2Fwww.educative.io%2Fv2api%2Feditorpage%2F6452289848475648%2Fimage%2F5294398307303424)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

    