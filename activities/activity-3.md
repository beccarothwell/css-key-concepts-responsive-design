## Fluid vs Fixed Units of Measure

Once our cards are sitting next to each other and looking more 'card' like, let's take a look at what else we can change...

Unfortunately, the creators of this repo have used pixels (fixed units of measurement) instead of fluid units for font size - and they call themselves developers!? 🤷‍♀️

We don't want to use pixels for font size because it isn't good for accessibility. If a visually impaired user wanted to change their base font size in their browser settings to a larger or smaller size, pixels disallow the user from doing this, which can be frustrating. 😞 

It’s generally considered best practice for accessibility to set your base font-size to 100% on the <html> element and use relative units to handle all other font-size rules in your CSS.

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

Great job! Our cat page now allows users to change the base font size in their browser as well as by zooming in or out.

To test this on Google Chrome, go to the browser `Settings > Appearance > Font Size` then select different font sizes (very small to very large) and refresh your Cat page. Depending on what base font size you selected, your text should have grown or shrunk accordingly. If you change your font-sizes to pixels and try changing the browser base font style again, you'll see pixels don't grow and shrink because they are fixed units of measure!

Note: Changing the base font size in other browsers should be similar (look in your settings), have a go - if you get stuck reach out to one of the Tech Coaches for help 🙂

Ready for more? See [Activity 4](./activity-4.md)