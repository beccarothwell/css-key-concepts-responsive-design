
### Challenge One

- Add CSS Normalize

Before we start styling our web page we need to add a CSS reset. This is because a lot of people that love cats are using old browsers that apply inconsistent styles to our cat cards 🙀

Note: Depending on what your type of project is, there are different ways to add CSS Normalize. 

For example, if it was a react app (and utilizing npm for package management) then we could use `npm install @csstools/normalize.css`. Alternatively we could use `@import-normalize;` in our CSS file, as described here: https://create-react-app.dev/docs/adding-css-reset/

However, because this is just a simple HTML project we recommend using the approach recommended in "Usage" here (under the hood, a React project just imports the normalize.css file saved in this GitHub repo - but don't worry about that for now):
https://github.com/csstools/normalize.css

Reading the above link, can you figure out how to add CSS Normalize to this project? 

Have a go, if you get stuck read on to find out how...

### How to add CSS Normalize 

- Step 1: Open the `index.html` in a browser, look at the page carefully 🔍 👀

- Step 2: At the top of `index.html` in the head (above the title is fine) add this line of code: 
`<link href="https://unpkg.com/@csstools/normalize.css" rel="stylesheet" />`
 
- Step 3: Save and refresh your browser! ✨

<details>
<summary>Your index page <head> should look like this</summary>
<pre>
:

```
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

Notice how our elements have shifted slightly? It's subtle, but we have removed those pesky browser inconsistencies from our elements! Our html is now ready for us to add our own styles to 🙌

Neat. 

Now our page is ready for some layout rules...

## Let's make those felines flex! 

Currently our Cat cards are stacked one on top of each other. This doesn't look very purrdy. 

How can we arrange them so they look a little neater on the page?

See [Activity 2](./activity-2.md) for more info!
