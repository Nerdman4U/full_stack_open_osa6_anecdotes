import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createNotification } from "../reducers/notificationReducer"

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)
  console.log('notification:', notification)

  const hide = () => {
    dispatch(createNotification({timeout:0, message:""}))
  }

  const clickHandler = (e) => {
    hide()
  }

  const css = () => {
    console.log('css notification:', notification)
    return `notification w-full p-12 rotate-${notification.rotate} bg-purple-500 text-content text-white rounded text-center absolute`
  }

  useEffect(() => {
    setTimeout(() => {
      hide()
    }, notification.timeout)
  }, [])

  if (!notification.message) { return null }
  else {
    return (
      <div onClick={clickHandler} className={css()}>
        { notification.message }
      </div>
    )  
  }
}

export default Notification
