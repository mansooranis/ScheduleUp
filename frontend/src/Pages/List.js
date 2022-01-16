import "./List.css"
function MappingSubs(props){
    return(
        <div>
            {props.data}
        </div>
    )
}

export default function ListSubs(props){
    const size = Object.keys(props.data).length;
    
    const iter = (props) => {
        var k;
        var l =[]
        for (let i = 0; i < size; i++){
            k = `${props[i].startTime}:00 - ${props[i].endTime}:00    ${props[i].CourseName} ${props[i].LectureName} ${props[i].Days}`
            l.push(k)
        }
        return l
    }
    const mm = iter(props.data)
    return(
        <div>
            {mm.map((data, key) => <div className="list-item"> <MappingSubs data = {data} key={key}/> </div> )}
        </div>
    )
}