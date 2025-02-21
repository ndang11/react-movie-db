import Latest from "../component/Latest"
import Popular from '../component/Popular'
import Action from '../component/Action'
import Drama from '../component/Drama'
import Comedy from '../component/Comedy'
import Header from '../component/Header'
import Footer  from "../component/Footer"


export default function Home(){

  return (
    <div>
        <Header />
       <Latest />
       <Popular />
       <Action />
       <Drama />
       <Comedy />
       <Footer />
    </div>
  )
}
