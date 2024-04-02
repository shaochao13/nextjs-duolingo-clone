import FeedWrapper from "@/components/feed-wrapper"
import StickyWrapper from "@/components/sticky-wrapper"
import UserProgress from "@/components/user-progress"
import { getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import Header from "./header"

const LearnPage = async () => {
  const [userProgress] = await Promise.all([getUserProgress()])

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses")
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
        <div className=" space-y-4">
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
        </div>
      </FeedWrapper>
    </div>
  )
}

export default LearnPage
