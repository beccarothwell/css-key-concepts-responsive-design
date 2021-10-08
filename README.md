# CSS Key Concepts: Responsive Design 

Welcome to Feline Flexbox with Cat Cards!

Follow the instructions in this Read Me to create your very own, feline flexy, responsive Cat page!

![alt text](https://s1.1zoom.me/big0/27/Cats_White_background_505955.jpg)

## Open your html document in the browser

Type 'open index.html' in your terminal and press enter (make sure you're in the right directory!). Your Cat Cards page should open in your browser.

You should now see a collection of cute cat pictures and cat info. 

-- Notice how our elements stretch accross the page, one on top of another. This is called the documents 'normal flow' or 'flow layout'. 

Ok. 

But our page sure looks ugly! 😿

What is the first thing we need to do before we start styling our page?

### Challenge One

- Add a css reset 

Can you figure out how to add a CSS Reset to our project? 

Have a go.. if you get stuck, read on to find out how...


#### How to add a CSS reset

- create a file called reset.css
- paste in a css reset, this [meyerweb](https://meyerweb.com/eric/) reset will do the job
- add a link to your reset.css file in your html file's `<head>` tags. It should look something like this:
`<link rel="stylesheet" type="text/css" href="reset.css">`

- Save and refresh your browser! ✨

-- Whoah, notice how our elements have changed. We have removed browser styles from our elements! Our html is now ready for us to add our styles to. 🙌

## Let's make those felines flex! 

Currently our Cat cards are stacked one on top of each other. This doesn't look very nice. 

How can we arrange these so they look a little neater on the page?

### Challenge Mew 🐈

- Add [CSS flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to your elements to make them sit next to each other (horizontally) on the page. They should stack on top of each other (wrap) the smaller our screen size gets

Hint: You'll need to create a parent container for your cat cards and add a width to it

- Don't forget to test how your page looks on different screen sizes using your browser tools!

If you get stuck this [flexbox froggy](https://flexboxfroggy.com/) tutorial should help 🐸

## Fluid vs Fixed Units of Measure

### Challenge Three

Once our cards are sitting next to each other and looking more 'card' like...

- can you change our text so it grows and shrinks to different screen sizes using fluid units of measurement?

- Best practices?

- rem vs em?

- walk them through adding a root element? hmmm... 

- tip: root size 62.5% means root element is 10px rather than 16 = easier maths

- should the cat images be rem?


## Media Queries

Ok now our page is looking a little cattier and responsive! Great job. Now let's add some media queries to *really* spice things up! 💃

### Challenge Paw 🐾

- Using media queries, remove the `<h2>` element on screen sizes smaller than 400px wide

- Using media queries, change the background colour of our card containers so they're a different colour for 3 different screen sizes

- Add a media query that checks what screen preferences a user has. If they prefer dark mode your page should update to dark mode. You can test this by changing your System Preferences.


## Extension 

* Use a Google font to style your text elements

* Create a navbar for your page using Flexbox.
    - Think about how this should look on mobile vs on desktop

- Add more styling to your page. Have fun with it and don't forget to share your hard work! 😸


