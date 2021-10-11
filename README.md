# CSS Key Concepts: Responsive Design 

Welcome to Feline Flexbox with Cat Cards!

Follow the instructions in this Read Me to create your very own, feline flexy, responsive Cat page! Me-ow!

![alt text](https://s1.1zoom.me/big0/27/Cats_White_background_505955.jpg)

## Getting Started

After forking this repository you will need to then clone the repo locally and open up your index.html file int he browser.

Type 'open index.html' in your terminal and press enter (make sure you're in the right directory!). Your Cat Cards page should open in your browser.

You should now see a collection of cute cat pictures and cat info. 

-- Notice how our elements stretch accross the page, one on top of another. This is called the documents 'normal flow' or 'flow layout'. 

Ok. 

But our page sure looks ugly! 😿

What is the first thing we need to do before we start styling a web page?

### Challenge One

- Add a css reset

Before we start styling our web page we need to add a CSS reset. This is because browsers add their own styling to HTML. These styles can clash with our own ones, causing weeiiird behaviour 🙀

Can you figure out how to add a CSS Reset to our project? 

Have a go, if you get stuck read on to find out how...


### How to add a CSS reset

- create a file called reset.css
- paste in a css reset, this [meyerweb](https://meyerweb.com/eric/) reset will do the job nicely
- add a link to your reset.css file in your html file's `<head>` tags. It should look something like this:
`<link rel="stylesheet" type="text/css" href="reset.css">`

- Save and refresh your browser! ✨

-- Whoah, notice how our elements have changed. We have removed those pesky browser styles from our elements! Our html is now ready for us to add our own styles to. 🙌

## Let's make those felines flex! 

Currently our Cat cards are stacked one on top of each other. This doesn't look very nice. 

How can we arrange these so they look a little neater on the page?

### Challenge Mew 🐈

- Add [CSS flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to your elements to make them sit next to each other (horizontally) on the page. They should stack on top of each other (wrap) the smaller our screen size gets

Hint: You'll need to target the parent container for your cat cards and add a width to it

Top tip: add borders around your parent and child containers. This will help you identify what's what 🙂

- Don't forget to test how your page looks on different screen sizes using your browser tools!

Flexbox can be challenging, so don't stress if it takes a while to get it right! If you get stuck this [flexbox froggy](https://flexboxfroggy.com/) tutorial should help 🐸

## Fluid vs Fixed Units of Measure

Once our cards are sitting next to each other and looking more 'card' like, let's take a look at what else we can change...

Unfortunately, the creators of this repo have used pixels (fixed units of measurement) instead of fluid units for font size - and they call themselves developers!? 🤷‍♀️

We don't want to use pixels for font size because it isn't good for accessibility. If a visually impaired user wanted to change their base font size in their browser settings to a larger or smaller size, pixels disallows the user from doing this, which can be frustrating. 😞 

It’s generally considered best practice for accessibility to set your base font-size to 100% on the <html> element, and use relative units to handle all other font-size rules in your CSS.

```
html {
  font-size: 100%; // base size 100% usually means 16px
}

.content {
  font-size: 1.5rem; // rem is relative to our base font size, so this is 24px because 1.5 of 16 is 16 + 8
}
```

### Challenge Three

In our style.css file, add an html selector and set font-size to 100%.

Set the h1 selector to font-size 2.25rem (36px).

Now set the p selector to font-size 0.75rem (12px).

Great job! Our cat page now allows users to change the base font size in their browser, or by zooming in or out.

## Media Queries

Ok now our page is looking a little cattier, accessible and responsive! Purrfect. Now let's add some media queries to *really* spice things up! 💃

### Challenge Paw 🐾

- Create a media query for min-width: 700px. Using rem, update our font-sizes to reflect this new screen size. 

- Create a media query for min-width: 1000px. Using rem, update our font-sizes to reflect this screen size using rem. 

Top Tip: for a nice, visual way to check your media queries are working as expected, change the background colour of your cat page in each media query. Then check your page changes colour at the right break points using your browser inspect tools 🌈

Top Tip: if you're unsure of what font-sizes to use this [article](https://learnui.design/blog/mobile-desktop-website-font-size-guidelines.html) has some suggestions

- Using media queries, hide the cat ipsum on mobile 

- Add a media query that checks what screen preferences a user has. If they prefer dark mode your page should update to dark mode. You can test this by changing your System Preferences.

## Extension 🔥

* Use a Google font to style your text elements
    - Tip: you may have to adjust your font sizes depending on the font style you pick to keep text legible

* Create a fake navbar for your page using Flexbox
    - Think about how this should look on mobile vs on desktop

* Add more styling and media queries to your page. Have fun with it and don't forget to share your hard work! You're a-meow-zing! 😸


