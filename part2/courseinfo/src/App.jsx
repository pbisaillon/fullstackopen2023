const Header = ({ course }) => <h2>{course}</h2>

const Content = ({ parts, courseId }) => {
  return (
    <ul>
      {parts.map(part => <li key={"".concat(courseId, '-', part.id)}>{part.name} {part.exercises}</li>)}
    </ul>
  )
}
const Total = ({ parts }) => {
  const i = 0
  const sum = parts.reduce((s, p) => s + p.exercises, i)
  return (<div>Total of {sum} exercises</div>)
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} courseId={course.id} />
      <Total parts={course.parts} />
    </div>
  )
}

const Courses = ({ courses }) => courses.map(course => <Course key={course.id} course={course} />)


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      < Courses courses={courses} />
    </>
  )
}

export default App