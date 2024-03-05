# NextJS Academic Theme

## [Demo🔗](https://nextjs-academic-theme.vercel.app/)
> A simple academic personal website, built with Tailwind CSS and Next.js, focused on performance, a11y and privacy 🚀


## Highlights

- Built with:
    - [Next.js](https://nextjs.org/) (Thereby, hosting on [Vercel](https://vercel.com) is recommended. FREE)
        - Written in [TypeScript](https://nextjs.org/docs/pages/building-your-application/configuring/typescript) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
    - [Tailwind CSS](https://tailwindcss.com/)
- **Easy customization** - edit the data in components/data/*.json without altering the code.
- **Accessible** - follows [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics).
- **Responsive** - uses latest CSS features and looks great on all devices.
- Optimized SEO
- Traffic tracking by Google Analytics

## Development

##### Install Node and NPM by NVM
- For MacOS, `brew install NVM` or [install by script](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) (any OS)
- Then `nvm install 20` installs Node.js v20; it comes with npm.

##### Run locally

```bash
cd NextJSAcademicTheme/
# Install dependencies
npm install
# Run in development mode
npm run dev
# Build for production
npm run build

```

##### Customize your info
- in components/data/personalInfo.json
- in components/data/publications.json
- in components/data/projects.json
- in components/data/teaching.json
- in .env
- in public/cv.pdf


##### Deploy on Vercel
- Option 1: deploy on Vercel via [Vercel cli](https://vercel.com/docs/cli)

```bash
npm i -g vercel
# preview
vercel
# production
vercel --prod
```

- Option 2: push to your own Github repo then [connect it to Vercel](https://vercel.com/docs/deployments/git#deploying-a-git-repository) (CI/CD, i.e. every new commit to Github will reflect on Vercel automatically.)


- After successful deployment on Vercel, it should be alive on `yourwebname.vercel.app` online. To use your own **domain name**, config the settings on Vercel [here](https://vercel.com/docs/projects/domains/add-a-domain#verify-domain-access). 

##### [Optional] Track your web traffic by connecting to [Google Analytics](https://analytics.google.com/analytics/academy/course/6)
- Simply add your project tracking code, e.g. G-38LNZ3XXXX, in `.env`.

## Acknowledgments

- Inspired by [https://kepinski.ch/](https://github.com/xxczaki/site)

### License

Code released under [WTFPL](http://www.wtfpl.net/)
