The following diagrams show the requests between the browser and the server when creating a new note with text: "New note!" in the following page: https://studies.cs.helsinki.fi/exampleapp/spa

The diagram doesn't show the initial GET requests when the page is loaded.


```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>+server: POST 
https://studies.cs.helsinki.fi/exampleapp/new_note_spa  (sends the content of the new note and the timestamp)
    server-->>-browser: sends message with value note created

```
