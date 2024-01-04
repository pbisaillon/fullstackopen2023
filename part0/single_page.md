
The following diagram shows the requests between the browser and the server when a user visits https://studies.cs.helsinki.fi/exampleapp/spa

### Chrome & Firefox

Both browser have the same behaviour.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>-browser: the HTML file

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>-browser: the CSS file

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>-browser: the JavaScript file

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>-browser: [..., { "content": "....", "date": "..." }]
```
