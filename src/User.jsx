import { use } from "react"


export const User = ({users}) => {

    const userList = use(users)
    console.log(userList)
  return (
    <div>
        <h3>Users : </h3>
    </div>
  )
}
