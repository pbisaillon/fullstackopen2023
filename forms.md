# Controlled component

Ref: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable

An input like `<input />` is uncontrolled. To render a controlled input, pass the `value` prop to it. React will force the input to always have the value you passed.

We add a new state to store user-submitted input and we set it as the input element's value attribute. Because we've assigned a part of the App component's state as the value attribute of the input element, the App components controls the bheaviour of the input element. 

To enable editing of the input element, we have to register an event handler that synchronizes the changes made to the input with the component's state.

The event handler is called everytime a change occurs to the input element. `event.target.value` is the value of what's in the input element.

We did not need to call `event.preventDefault()` like we did in the `onSubmit` event handler because no default action occurs on an input change.

```js
const [newNote, setNewNote] = useState('a new note...') 
[...]
const handleNoteChange = (event) => {    
    console.log(event.target.value)    
    setNewNote(event.target.value)  
}    
[...] 
<form onSubmit={addNote}>
    <input value={newNote} onChange={handleNoteChange}/>
    <button type="submit">save</button>
</form>
```

# Filtering

You can filter what is shown by having a the state of App keep tracks of which element to show.
```js
const [showAll, setShowAll] = useState(true)

const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)
```  
notesToShow contains elements that we want to show. if showAll is true, then it's notes, if it's false, we filter and return only important notes.

We can also let the user toggle the value of showAll, the text of the button is either `important` or `all` depending on the value of `showAll`
```js
<div>
    <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all' }
    </button>
</div>
```      