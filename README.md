# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Links

- Solution URL:(https://github.com/karleenmsrichards/3-column-preview-card-component)
- Live Site URL:(https://3-column-card-karleenmsrichards.netlify.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [JSX]

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```jsx proud of
export const Card = ({ cardClass, image, title, paragraph, buttonClass }) => {
  return (
    <div className={cardClass}>
      <div>
        <img className="card-image" src={image} alt="" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-paragraph">{paragraph}</p>
      <button className={buttonClass}>Learn More</button>
    </div>
  );
};
```

### Continued development

I want to continue working on using padding percentages as opposed to px. I also want to continue learning to how create components in react and efficiently using props to avoid repitition of code.

## Author

- Website - [Karleen M S Richards](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/@karleenmsrichards)
