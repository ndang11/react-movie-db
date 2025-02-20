import Latest from "../component/Latest"
import Popular from '../component/Popular'
import Action from '../component/Action'
import Drama from '../component/Drama'
import Comedy from '../component/Comedy'

export default function Home(){

  return (
    <div>
       <Latest></Latest>
       <Popular></Popular>
       <Action></Action>
       <Drama></Drama>
       <Comedy></Comedy>
    </div>
  )
}
