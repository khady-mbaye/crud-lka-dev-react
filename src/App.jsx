import { useState } from "react";
import { IconName } from "react-icons/bi";
import { Color } from "./Constents/Color";

function App() {
  const [theme, setTheme] = useState({ backgroundImage: Color.gradientOne.image })
  const [noteInput, setNoteInput] = useState("")
  const [notes, setNotes] = useState([])
  const [isUpdat,setIsUpdat] = useState(false)
  const [selectedNoteId,setSelectedNoteId] = useState(null)

  const add = (e) => {
    e.preventDefault()
    const newObj = {id:Math.floor(Math.random()*1000), title: noteInput,  dateTime: new Date().toLocaleString(), }
    setNotes([newObj, ...notes])
    setNoteInput("")
  }

  const updateNote =(event)=>{
    event.preventDefault()
    const copynotes = [...notes]
    const findNote = notes.find(note=>note.id === selectedNoteId)
    const findIndex = notes.findIndex(note=>note.id === selectedNoteId)
    let updateNote = {...findNote,title:noteInput}
    copynotes[findIndex] = updateNote
    setNotes(copynotes)
    setNoteInput("")
    setIsUpdat(false)
    setSelectedNoteId(null)
  }
  const delet = (ind)=>{
    const noteDelet = notes.filter(note=>note.id !== ind)
    setNotes(noteDelet)

  }

  return <div style={{ ...theme, height: "100vh" }}>
    <div className="container py-3">
      <header className=" bg-white d-flex justify-content-between align-items-center px-3 py-1 rounded">
        <h1 className="fs-5 fw-normal">NoteHack</h1>
        <div className="d-flex gap-2">
          <span onClick={() => {
            setTheme({ backgroundColor: Color.gradientOne.color, backgroundImage: Color.gradientOne.image })
          }}
            style={{ display: "inline-block",cursor:"pointer", width: 20, height: 20, backgroundColor: Color.gradientOne.color, backgroundImage: Color.gradientOne.image, borderRadius: "100%" }}></span>
          <span onClick={() => {
            setTheme({ backgroundColor: Color.gradientTwo.color, backgroundImage: Color.gradientTwo.image })
          }}
            style={{ display: "inline-block",cursor:"pointer", width: 20, height: 20, backgroundColor: Color.gradientTwo.color, backgroundImage: Color.gradientTwo.image, borderRadius: "100%" }}></span>
          <span onClick={() => {
            setTheme({ backgroundColor: Color.gradientThree.color, backgroundImage: Color.gradientThree.image })
          }}
            style={{ display: "inline-block",cursor:"pointer", width: 20, height: 20, backgroundColor: Color.gradientThree.color, backgroundImage: Color.gradientThree.image, borderRadius: "100%" }}></span>
          <span onClick={() => {
            setTheme({ backgroundColor: Color.gradientFour.color, backgroundImage: Color.gradientFour.image })
          }}
            style={{ display: "inline-block",cursor:"pointer", width: 20, height: 20, backgroundColor: Color.gradientFour.color, backgroundImage: Color.gradientFour.image, borderRadius: "100%" }}></span>
          <span onClick={() => {
            setTheme({ backgroundColor: Color.gradientFive.color, backgroundImage: Color.gradientFive.image })
          }}
            style={{ display: "inline-block",cursor:"pointer", width: 20, height: 20, backgroundColor: Color.gradientFive.color, backgroundImage: Color.gradientFive.image, borderRadius: "100%" }}></span>
          <span onClick={() => {
            setTheme({ backgroundColor: Color.gradientSix.color, backgroundImage: Color.gradientSix.image })
          }}
            style={{ display: "inline-block",cursor:"pointer", width: 20, height: 20, backgroundColor: Color.gradientSix.color, backgroundImage: Color.gradientSix.image, borderRadius: "100%" }}></span>
        </div>
      </header>

      <div style={{ marginTop: 50 }}>
        <form className="px-3 py-2 bg-white rounded" onSubmit={isUpdat? updateNote:add}>
          <div className="d-flex gap-2">
            <input type="text" className="form-control" placeholder="Add Note"
              value={noteInput}
              onChange={(e) => {
                setNoteInput(e.target.value)
              }} />
            {isUpdat ?      <button className="btn btn-warning">Update</button>:
                  <button className="btn btn-success">Add</button>
            }
          </div>
        </form>
      </div>

      <footer className="bg-white mt-3 px-3 py-y">
        <div className="d-flex justify-content-between align-items-center border-bottom py-1 ">
          <div className="d-flex justify-content-between align-items-center gap-2">
            <span>Notes</span>
            <span style={{ display: "inline-block", width: 25, height: 25, backgroundColor: "#dfdfdf", borderRadius: "100%", textAlign: "center" }}>{notes.length}</span>
          </div>
          <button className="btn btn-primary"
          onClick={()=>setNotes([])}>Clear All</button>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2">
          {
            notes.map((note, index) => {
              return <div key={index} className="d-flex justify-content-between p-2 rounded border-3 border-start border-primary mt-2" style={{ height: 80, width: 180, backgroundColor: "#eee" }}>
                <div>
                  <p className="fw-normal m-0">{note.title}</p>
                  <span className="fw-light" style={{ fontSize: "12px" }}>{note.dateTime}</span>
                </div>
                <div className="d-flex gap-2">
                  <i class="bi bi-pencil" 
                  style={{color:"blue",cursor:"pointer"}}
                  onClick={()=>{
                  setNoteInput(note.title)
                  setIsUpdat(true)
                  setSelectedNoteId(note.id)}}></i>
                  <i class="bi bi-trash" style={{color:"red",cursor:"pointer"}}
                  onClick={()=>delet(note.id)}></i>
                </div>
              </div>
            })
          }
        </div>
      </footer>

    </div>
  </div>
}

export default App;
