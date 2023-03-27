## Fluid vs Fixed Units of Measure

Once our cards are sitting next to each other and looking more 'card' like, let's take a look at what else we can change...

Unfortunately, the creators of this repo have used pixels (fixed units of measurement) instead of fluid units for font size - and they call themselves developers!? 🤷‍♀️

We don't want to use pixels for font size because it isn't good for accessibility. If a visually impaired user wanted to change their base font size in their browser settings to a larger or smaller size, pixels disallow the user from doing this, which can be frustrating. 😞

Because of this, it’s generally considered best practice to use relative units for typography.

```CSS
  
.content {
  font-size: 1.5rem; // rem is relative to our base font size, so this is 24px because 1.5 of 16 is 16 + 8
}
```

### Challenge Three

👉 In your `style.css` file, set the `h1` selector to font-size 2.25rem (36px).

👉 Now target your other elements so they use rem as well

Great job! Our cat page now allows users to change the base font size in their browser as well as using their browsers Zoom.

To test this on Google Chrome, go to the browser `Settings > Appearance > Font Size` then select different font sizes (very small to very large) and refresh your Cat page. Your text should have grown or shrunk accordingly. 

💡 Note: Changing the base font size in other browsers should be similar (look in your settings). Have a go - if you get stuck reach out to us for help 🙂

Have a play around by changing your font-sizes to pixels and change your browsers base font style again. You'll see the pixel values don't grow and shrink! Remember to change back to rem when you're done 👍

If you'd like to learn more about units of measure and accessibility, Josh Comeau wrote a brilliant article on this [here](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/#accessibility-considerations).

Ready for more? See [Activity 4](./activity-4.md)
