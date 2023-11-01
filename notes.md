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
