import React from 'react'
import { Link } from 'react-router'

class Dashboard extends React.Component {
  render() {
    const { courses } = this.props

    return (
      <div>
        <h2>Aparments for rent</h2>
        <p>
 
        </p>
        <h2>List offers</h2>{' '}
        <ul>
          {courses.map(course => (
            <li key={course.id}>
           
              <Link to={`/course/${course.id}`}><img width='200' src={`/images/${course.id}/${course.mainimage}`}>{course.name}</img></Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Dashboard
