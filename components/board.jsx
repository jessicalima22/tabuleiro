import Line from "./line"

export default function Board(){
    return(
     <div>
      <Line />
      <Line black/>
      <Line />
      <Line black/>
      <Line />
      <Line black/>
      <Line />
      <Line black/>
     </div>
    )
}