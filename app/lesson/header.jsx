import { X } from "lucide-react"

const Header = ({ hearts, percentage, hasActiveSubscription }) => {
  return (
    <div className=" lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
      <X
        onClick={() => {}}
        className=" text-slate-500 hover:opacity-75  transition cursor-pointer"
      />
    </div>
  )
}

export default Header
