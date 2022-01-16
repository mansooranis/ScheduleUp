import "./Home.css";
import { Toast, InputGroup, FormControl, Button, Alert} from "react-bootstrap";
import { Link} from 'react-scroll'
import { useState } from "react";


function SubjectIcon(props){
    return(
        <div className="subjicon">
            {props.course}
        </div>
    )
}

export default function Home(){

    // for appending in state
    const [sublist, setSublist] = useState([])
    const [issubs,setIssubs] = useState(false)
    const [subid, setSubid] = useState(1)
    // ----------------------

    const [subject, setSubject] = useState("")
    function handleChange(event){
        setSubject(event.target.value);
    };
    const [alert , setAlert] = useState(false);
    const subjectSubmit = () => {
        if (subject.toString() === "STAT 151" || subject.toString() === "MATH 154" || subject.toString() === "CMPUT 175" || subject.toString() === "SOC 100" || subject.toString() === "ECON 101" || subject.toString() === "ENGL 103" ){
            console.log(subject)
            setSubid(subid+1)
            console.log(subid)
            setSublist(sublist.concat({id:subid,"course": subject}))
            
            setAlert(false)
            setSubject("")
            setIssubs(true)
            console.log(sublist)
            
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
                                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                    <strong className="me-auto">Byte-Crunchers</strong>
                                    <small>{today.getHours() + ':' + today.getMinutes()}</small>
                                </Toast.Header>
                                <Toast.Body className="toast-body-text">Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </div>
                        <div className="toast-i2">
                            <Toast>
                                <Toast.Header>
                                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                    <strong className="me-auto">Byte-Crunchers</strong>
                                    <small>{today.getHours() + ':' + today.getMinutes()}</small>
                                </Toast.Header>
                                <Toast.Body className="toast-body-text">Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </div>
                        <div className="toast-i3">
                            <Toast>
                                <Toast.Header>
                                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                    <strong className="me-auto">Byte-Crunchers</strong>
                                    <small>{today.getHours() + ':' + today.getMinutes()}</small>
                                </Toast.Header>
                                <Toast.Body className="toast-body-text">Hello, world! This is a toast message.</Toast.Body>
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
                    <br/>
                    
                        {issubs && sublist.map((course) => 
                        <div className = "sub-list"><SubjectIcon course = {course.course}/> 
                       
                        </div>
                        )} 
                </div>
                
            </div>
        </div>
    )
}