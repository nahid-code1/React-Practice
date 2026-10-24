import { use } from "react"


export const User = ({users}) => {

    const userList = use(users)
    
  return (
    <div className="card">
        <h3>Users : </h3>
    </div>
  )
}
