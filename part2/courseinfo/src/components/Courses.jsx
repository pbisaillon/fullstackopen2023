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

export default Courses