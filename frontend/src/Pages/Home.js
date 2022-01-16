import "./Home.css";
import { Toast, InputGroup, FormControl, Button, Alert} from "react-bootstrap";
import { Link} from 'react-scroll'
import { useState } from "react";
import ListSubs from "./List";
import { BallTriangle } from "react-loader-spinner";
const axios = require('axios').default;
const url = "https://bytecrunchers.uw.r.appspot.com/"

function SubjectIcon(props){
    return(
        <div className="subjicon">
            {props.course}
        </div>
    )
}

export default function Home(){

    //loader
    const [loading, setLoading] = useState(false)

    // api data state
    const [apidata, setApidata] = useState([])
    const [finallist,setFinallist] = useState([])

    // for appending in state
    const [sublist, setSublist] = useState([])
    const [issubs,setIssubs] = useState(false)
    const [subid, setSubid] = useState(1)
    const [showtables, setShowtables] = useState(false)
    // ----------------------

    const [subject, setSubject] = useState("")



    function handleChange(event){
        setSubject(event.target.value);
    };
    const [alert , setAlert] = useState(false);
    const subjectSubmit = async () => {
        if (subject.toString() === "STAT 151" || subject.toString() === "MATH 154" || subject.toString() === "CMPUT 175" || subject.toString() === "SOC 100" || subject.toString() === "ECON 101" || subject.toString() === "ENGL 103" ){
            setSubid(subid+1)
            let arr = finallist.concat(subject)
            setFinallist(arr)
            console.log(arr)
            setSublist(sublist.concat({id:subid,"course": subject}))
            //finallist.push(subject)
            setLoading(true)
            await axios.post(`${url}getCourseData`,{"courses" : arr}).then(function (response){setApidata(response.data)})
            setLoading(false)
            console.log(apidata)
            setAlert(false)
            setSubject("")
            setIssubs(true)
            setShowtables(true)
            
        }else{
            setAlert(true)
            setSubject("")
            if(subid ===0){
                console.log();
            }else{
                //setSubid(subid-1)
            }
        }
    }
    var today = new Date();
    return(
        <div>
            <div className="home-intro">
                <div className="intro-1">
                    <div className="texts-1">Efficient.</div>
                    <div className="texts-1">Time-Saving.</div>
                    <div className="texts-1">Structured.</div>
                    <div className="tag-line texts-1">Your Scheduling Ally</div>
                    <div className="new-Toasts">
                        <div className="toast-i1">
                            <Toast>
                                <Toast.Header>
                                <i class="fas fa-calendar-check"/>
                                    <strong className="me-auto">Byte-Crunchers</strong>
                                    <small>{today.getHours() + ':' + today.getMinutes()}</small>
                                </Toast.Header>
                                <Toast.Body className="toast-body-text">Search your class and keep adding them for more schedule options</Toast.Body>
                            </Toast>
                        </div>
                        <div className="toast-i2">
                            <Toast>
                                <Toast.Header>
                                    <i class="fas fa-calendar-check"/>
                                    <strong className="me-auto">Byte-Crunchers</strong>
                                    <small>{today.getHours() + ':' + today.getMinutes()}</small>
                                </Toast.Header>
                                <Toast.Body className="toast-body-text">We generate all possible combinations and avoid any clashes!</Toast.Body>
                            </Toast>
                        </div>
                        <div className="toast-i3">
                            <Toast>
                                <Toast.Header>
                                <i class="fas fa-calendar-check"/>
                                    <strong className="me-auto">Byte-Crunchers</strong>
                                    <small>{today.getHours() + ':' + today.getMinutes()}</small>
                                </Toast.Header>
                                <Toast.Body className="toast-body-text">Looking forward to expand!!</Toast.Body>
                            </Toast>
                        </div>
                    </div>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search a class"
                        aria-label="Search a class"
                        aria-describedby="basic-addon2"
                        value={subject}
                        onChange={handleChange}
                        />
                        <Button variant="primary" id="button-addon2" >
                            <Link to="main" onClick={subjectSubmit} onSubmit={subjectSubmit}>Go</Link>
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <div className="main">
                <div name = "main">
                    {alert && <Alert variant="danger">Invalid Subject! Please choose from the following: <br/>[STAT 151, ECON 101, MATH 154, SOC 101, ENGL 103, CMPUT 175]<br/>Please ensure the format as SUBJ XXX.</Alert>}
                    {loading && <BallTriangle type="BallTriangle" color="#00BFFF" height={80} width={80}/>}
                        <div className="course-icon">
                        <div className="subject-heading">{issubs && <h4><br/>SUBJECTS CHOOSEN</h4>}</div>
                        {issubs && sublist.map((course,key) => 
                        <div className = "sub-list"><br/><SubjectIcon course = {course.course} key={key}/> 
                      
                        </div>
                        )} </div>
                        <div className="time-table-holder">
                    {showtables && apidata.map((data, key) => <div className="array-list"><h4>Timetable {key+1}</h4><ListSubs data = {data}/> </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}