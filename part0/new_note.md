
The following diagram shows the requests between the browser and the server when creating a new note with text: "New note!" in the following page: https://studies.cs.helsinki.fi/exampleapp/notes

The diagram doesn't show the initial GET requests when the page is loaded.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note  (Form data sent is  "note: New_note!")
    server-->>-browser: the HTML file

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>-browser: the HTML file

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>-browser: the CSS file

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>-browser: the JavaScript file

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>-browser: [..., { "content": "New Note!", "date": "2024-01-03T19:20:03.904Z" }]
```
A screenshot of the requests is shown in the image.
![](image.png)

What is intereting here is that the html seems to be transfered twice from the server, as a response to the POST request and as a response to the subsequent GET.