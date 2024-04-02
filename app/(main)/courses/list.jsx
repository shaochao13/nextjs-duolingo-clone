"use client"

import { upsertUserProgress } from "@/actions/user-progress"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { toast } from "sonner"
import Card from "./card"

const List = ({ courses, activeCourseId }) => {
  const router = useRouter()

  const [pending, startTransition] = useTransition()

  const onClick = id => {
    if (pending) return

    if (id === activeCourseId) {
      return router.push("/learn")
    }

    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Something went wrong."))
    })
  }

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill, minmax(210px, 1fr))] gap-4">
      {courses.map(course => (
        <Card
          key={course.id}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
          {...course}
        />
      ))}
    </div>
  )
}

export default List
