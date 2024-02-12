import { useState } from 'react'

const Persons = ({ persons }) => persons.map(person => <div key={person.name}> {person.name} {person.phone}</div>)



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const index = persons.findIndex((e) => e.name === newName)

    if (index === -1) {
      const personObject = {
        name: newName,
        phone: newPhone
      }
      setPersons(persons.concat(personObject))
    } else {
      alert(`${newName} already exists in the phonebook!`)
    }


  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
           number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App