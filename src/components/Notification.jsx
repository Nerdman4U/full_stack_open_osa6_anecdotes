import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createNotification } from "../reducers/notificationReducer"

const Notification = () => {
  const dispatch = useDispatch()

  const hide = () => {
    dispatch(createNotification(""))
  }

  const clickHandler = (e) => {
    hide()
  }
  
  useEffect(() => {
    console.log('useEffect()')
    setTimeout(() => {
      hide()
    }, 5000)
  })

  const notification = useSelector(state => state.notification)
  if (notification === "") {
    return null
  }
  else {
    return (
      <div onClick={clickHandler} className="notification w-full p-12 rotate-45 bg-purple-500 text-content text-white rounded text-center relative">
        { notification }
      </div>
    )  
  }
}

export default Notification
