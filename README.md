# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./screenshot_desktop.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/ecommerce-product-page-with-react-and-tailwind-7UL7fz7tcg](https://www.frontendmentor.io/solutions/ecommerce-product-page-with-react-and-tailwind-7UL7fz7tcg)
- Live Site URL: [https://polite-crepe-fdbcd1.netlify.app/](https://polite-crepe-fdbcd1.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - For styles
- [Flowbite React](https://www.flowbite-react.com/) - For styles

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Pass a custom theme to the carousel component of the react-flowbite library</h1>
```
```js
const customTheme = {
  indicators: {
    wrapper:
      "absolute -bottom-24 max-md:-bottom-16 left-1/2 flex -translate-x-1/2 space-x-3 max-md:hidden",
    base: "w-[75px] h-[75px] rounded-xl bg-ui-pale-orange indicators bg-contain",
    active: {
      on: "opacity-25 border-ui-orange border-2",
      off: "opacity-100",
    },
  },
};
<Carousel
  id="main-carousel"
  slide={false}
  className="max-md:[&>div]:rounded-none"
  theme={customTheme}
  leftControl={<PrevButton />}
  rightControl={<NextButton />}
>
```
## Author

- Website - [Samuel Figueroa](https://sfweb.netlify.app/)
- Frontend Mentor - [@samuelfs96](https://www.frontendmentor.io/profile/samuelfs96)
