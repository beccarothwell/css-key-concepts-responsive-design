### Challenge One

-   Add CSS Normalize

Before we start styling our web page it can be useful to add a CSS reset. Perhaps some people that love cats are using old browsers that apply inconsistent styles to our cat cards 🙀

Let's look at the different ways to add CSS Normalize.

In a more complex app, where we were using npm to manage our packages (e.g. a React app) then we'd normally install dependencies via npm. could use `npm install @csstools/normalize.css`.

Alternatively we could use `@import-normalize;` in our CSS file, as described here: https://create-react-app.dev/docs/adding-css-reset/

However, because this is just a simple HTML project we recommend using the approach recommended in "Usage" here:
https://github.com/csstools/normalize.css

### How to add CSS Normalize

-   Step 1: Open the `index.html` in a browser 🔍 👀

-   Step 2: At the top of `index.html` in the head (above the title is fine) add this line of code:
    `<link href="https://unpkg.com/@csstools/normalize.css" rel="stylesheet" />`

-   Step 3: Save and refresh your browser! ✨

<details>
<summary>Your index page head should look like this</summary>
<pre>

```HTML
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://unpkg.com/@csstools/normalize.css" rel="stylesheet" />
    <title>CSS Responsive Web Design & Key Concepts</title>
</head>
```

</pre>
</details>

Your elements may have shifted slightly. It's subtle, but that's because we have removed those pesky browser inconsistencies from our elements! (You could try playing with Dev Tools to turn on and off the rules from `normalize` to see what the difference is.)

Our html is now ready for us to add our own styles 🙌 Neat.

Now our page is ready for some layout rules...

## Let's make those felines flex!

Currently our Cat cards are stacked one on top of each other. This doesn't look very purrdy.

How can we arrange them so they look a little neater on the page?

See [Activity 2](./activity-2.md) for more info!
