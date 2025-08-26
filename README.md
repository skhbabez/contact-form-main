# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/skhbabez/contact-form-main][https://github.com/skhbabez/contact-form-main]
- Live Site URL: [https://skhbabez.github.io/contact-form-main/](https://skhbabez.github.io/contact-form-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- sass
- constraint validation api

### What I learned

I focussed mainly on accessibility for this challenge as well as using sass/scss for a challenge. Furthermore I wanted to test out the constraint validation API, seeing how i could utilize it for creating Forms. One major thing I learned was how to utilize live regions. I spent a siginificant amount of time just reading thorugh documentation, to get it right with nvda.

```html
<fieldset class="contact-information">
  <legend class="visuallyhidden">Contact Information</legend>
  <div class="text-input">
    <label for="first-name">
      First Name <span class="required" aria-hidden="true">*</span>
    </label>
    <input
      id="first-name"
      type="text"
      name="firstname"
      aria-describedby="first-name-err"
      autocomplete="given-name"
      required
    />
    <p class="error-message" id="first-name-err" aria-live="assertive"></p>
  </div>
</fieldset>
```

One thing that gave me trouble was creating the toast . Initially I used an output element as a wrapper, but this one ended not working correctly on firefox. I instead ended up using `role=status`, which works with nvda but feels less semantic as a result.

```html
<div class="toast" role="status">
  <div id="toast" class="hidden">
    <p>Message Sent!</p>
    <p>Thanks for completing the form. We'll be in touch soon!</p>
  </div>
</div>
```

Another thing I noticed was, how the screenreader would read out the generated error messages but not referencing the input fields associated with them. The standard error messages in the design were not specific enough. So I decided to enhance them using the label of the input.

```js
`${input.labels[0]?.firstChild.nodeValue || "Field"} is required`;
```

### Continued development

This was surprisingly challenging and taught me to really read up on form accessibilty more. Furthermore, the constriant validation API is really limiting and I had to come up with a lot of strange workarounds just to make it fit the design. I will probably abstain from it for future Frontendmentor projects and instead implement my own validation or use a library like Zod. While I see the value, it seems like you have to heavily design your forms with native Validation in mind to make the best use of it.

### Useful resources

- [Building a Toast ](https://web.dev/articles/building/a-toast-component) - I liked the idea with output presented here, even if I did not end up using it.
- [Custom radio buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - Good resource on how to style custom radio buttons and checkboxes.
- [7-1 Pattern](https://github.com/KittyGiraudel/sass-boilerplate/blob/master/stylesheets/components/_button.scss) - Example respository showcasing the 7-1 pattern.
- [Accessible forms](https://www.w3.org/WAI/tutorials/forms/) - I use this guide form the WAI heavily to finish this challenge.
