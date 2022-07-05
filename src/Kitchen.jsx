import Oven from "./Oven"
import Refrigerator from "./Refrigerator"
import Sink from "./Sink"

function Kitchen(props) {
  return (
    <div>
      Kitchen
      <Oven />
      <Sink />
      <Refrigerator />
    </div>
  )
}

export default Kitchen