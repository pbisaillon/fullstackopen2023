const PersonForm = ({newName, handlePersonChange, newNumber, handleNumberChange, persons, setPersons}) => {
    const addPerson = (event) => {
        event.preventDefault()
        const index = persons.findIndex((e) => e.name === newName)
    
        if (index === -1) {
          const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
          }
          setPersons(persons.concat(personObject))
        } else {
          alert(`${newName} already exists in the phonebook!`)
        }
      }

    return(
    <form onSubmit={addPerson}>
    <div>
        name: <input value={newName} onChange={handlePersonChange} />
    </div>
    <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
        <button type="submit">add</button>
    </div>
    </form>
)}



export default PersonForm