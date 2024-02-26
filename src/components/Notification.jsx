import { useSelector } from "react-redux"

const clickHandler = (e) => {
  e.target.className = e.target.className + ' hidden'
}

const Notification = () => {
  const notification = useSelector(state => state.notification)
  return (
    <div onClick={clickHandler} className="w-full p-12 rotate-45 bg-purple-500 text-content text-white rounded text-center">
      { notification }
    </div>
  )
}

export default Notification
