## HTML Basics
[Source](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

HTML is a markup language that defines the strucutre of your content.

A markup language is text-encoding system consisting of a set of symbols inserted in a text document that controls the structure, formatting and the relationship between its parts.

HTML is composed of elements that enclose parts of the contents to make it appear or behave a certain way.

An element is composed of an opening tag, content and a closing tag. Elements can have attrivutes defined in the opening tag.
```html
<p>This is the content</p>
```

Element can be nested, following that the tags are closed in the correct order.
```html
<p>This is the <strong>content</strong></p>
```

Void elements are a elements that have no content and composed of a simple tag that closes itself.
```
<img src="..." alt="..." />
```


Individual elements are combined to create an HTML page. Some important ones are part of this minimal page
```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image" />
    <a href="url">Url</a>
  </body>
</html>
```

where
- `<!DOCTYPE html>` is a required preamble, they were used to link to a set of rules the HTML needed to adhere, however these days they don<t do much
- `<html lang="...">....</html>` wraps all the content of the entire page, sometimes known as the root element. It includes a lang element to set the primary language of the document
- `<head>...</head>` acts as the container for everything that you want to include in your html page that isn't content you want to show to the users. This can be keywords and a page description for serach results, CSS, etc.
- `<meta charset="utf-8"/>` sets the character set your document uses
- `<meta name="viewport" content="width=device-width"/>` ensures that the page renders at the width of the viewport and not larger than them and then shrinking them down
- `<title>...</title>` sets the title of the page that appears when the page is bookmarked and in the browser tab
- `<body>...</body>` contains all the content you want to show the users
- `<img src="..." alt="..." />` the image tag tells the browser to display an image, the `src` tells it where to find it and the `alt` is descriptive text of the image for visualy impared users or if the image can't display
- `<a href="url">Url</a>` adds a link to the page and the browser will go to the url defined by the href attribute


### Markup

- Headings: You can use the `<h1>...</h1>` to `<h6>...</h6>` to specify headings and subheadings. Headings shouldn't be used for formatting, they are also used for accessibility.
- Paragraphs: You can use the `<p>...</p>` for paragraph of text
- Lists: you canse use unordered lists `<ul>...</ul>` or ordered lists `<ol>...</ol>`. Each element in the list is put inside an `<li>...</li>` element.

## CSS basics

CSS is a style sheet language to style HTLM elements. 

You can link a CSS file called `style.css` using `<link href="styles/style.css" rel="stylesheet" />` in the `<head>` element of an html file.

A CSS ruleset follows this pattern
```css
selector(s) {
  property: property value;
}
```

### Selectors

The selector can contain multiple selectors separated by commas.

There are multiple type of selectors:
- Element selector: selects all HTML elements of the specified type. Example `p` selects all `<p>..</p>`
- ID selector: select the element with ID. Selector `#my-id` would only select element `<p id="my-id">...</p>`
- Class selector: select all elements with class. Selecting `.my-class` woud select all elements having attriue `class="my-class"`
- Attribute selector: select all elements on the page with a given attribute. Selecting `img[src]` selects all `<img src="..."/>` but not `<img/>`. You can also specify the value.
- Pseudo-class selector: select specified elements but only when in a specified stage. Selecting `a:hover` selects `<a>...</a>` but only when the mouse is hovering over the link
- Pseudo-elements: select a part of an element rather than the element itself. For example `p::first-line` selects the first line inside `<p>...</p>` elements
- Combinators: combine multiple selectors to target documents. Using `article > p` selects paragraph that are the direct children of `<article>`. `>` is the child combinator.

### Fonts and texts

You can grab some Google Fonts using `<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />` in the `<head>` element.


Some useful property to control the fonts and texts are
```css
html {
  font-size: 10px;
  font-family: "Open Sans", sans-serif;
}
```
- `text-align`: alignment of the text
- `line-height`
- `letter-spacing`
- `padding` : space around the content
- `border`: line around the padding
- `margin`: space around the padding
- `width` : width of an element
   
Images need the `display: block` property because it's an inline element. 

`margin: 0 auto;` the first value affects top and bottom and the second value affects left and right. `auto` is a special value that divides the available horizontal space evenly between left and right.

## Forms

Forms allow a user to enter data that is either used client-side to update the interface or send it to the server for processing and storage.

A form is made of form controls, sometimes called widgets.

The basic form is created using the `<form>` element such as
```
<form action="/my-handling-form-page" method="post">…</form>
```
The action attributes defines the URL where the data will be sent when submitted, the method indicates which HTTP method is used, usually a `get` or `post`.

`<label>` have a `for` attribute that takes the `id` of the associated control form.

The `<input>` tag is a void element, the `<textarea>` is not. To define the default value of an `<input>` element, you can use the `value` attribute.

The `<button>` element accepts a `type` attribute of three values: `submit`, `reset`, `button`. 

A `submit` button sends the form data to the web page defined in the `action` atribute of the `<form>` element.

A click on the `reset` button resets all the widgets to their default value. It's generally considered bad practice.

A click on the `button` does nothing. You can define it's behaviour using JavaScript.

When styling you can use the selector with `:focus`

When submitting the data, the `name` attribute on each widget acts as the key associated with the values.