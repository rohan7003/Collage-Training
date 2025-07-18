import'./App.css'
import Cards from "./components/Card"
import bm from './assets/bm.jpg'
import vk from './assets/vk.jpg'
import ro from './assets/ro.jpg'
export default function App(){
  return (
    <div>
      <Cards pic={ro} title="Rohit Sharma" desc="Hitman" />
      <Cards pic={vk} title="Virat Kohli" desc="King " />
      <Cards pic={bm} title="Juspreet Bumrah" desc="Yorker King" />
    </div>
  );
}