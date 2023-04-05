# Intent Tech Test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Thoughts and considerations
- Loved working with tailwind! A small learning curve at the beginning but once I could stop looking at the docs so much it saved so much time. 
- The tabs in the header are slightly squashed on mobile view - perhaps it would have been better to put them on 2 lines when on smaller screens?
- When initialising the next.js application, it asked if I wanted to use the 'experimental' app directory. I said no, but it turns out I should have as all the docs recommend this!
- Perhaps the global styles I put in the globals.css file could have been put in the tailwind.config.js file?
- I wrote the css for the grid border styles in the globals.css file - this could have been done using the tailwind classnames but I thought it would be simpler to read this way.
- I have used the font Montserrat in place of the avenir font as this wasn't available on google, just to save time. It's very similar! For a commercial product I would have of course used the fonts specified.
- The text inside the header component is static, in production this usually would have taken strings as props so that it's reusable.
- The header component could potentially be split into 3 different subheader components, depending on how much these are used throughout the site.
- I've tried to make it as responsive as possible and to make sure it looks good on all screen sizes.

## If i'd have had more time..
- I'd have built the first component in the file - hopefully this gives you a good enough understanding of my abilities!
- Potentially some of the components can be memoised, this doesn't really matter in a tiny project like this but in production performance is key.
- Font sizes/ line heights could have been more responsive - at the moment they are just in px. It would be better if they were either using ems or even better, using the css clamp() function as well so that they scale with the page size.

Look forward to hearing your thoughts!