"use client"

import Card from "./card"

const List = ({ courses, activeCourseId }) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill, minmax(210px, 1fr))] gap-4">
      {courses.map(course => (
        <Card
          key={course.id}
          onClick={id => {
            console.log(id)
          }}
          disabled={false}
          active={course.id === activeCourseId}
          {...course}
        />
      ))}
    </div>
  )
}

export default List
