import React , {useState} from 'react'

export default function Textbook(props) {
   
    const handleUpClick = () => {
        //console.log("clicked" + text);
        let newText = text.toUpperCase();
        settext(newText)
    }

     const handleLoClick = () => {
        let newText = text.toLowerCase();
        settext (newText)
    }
    

    const handleOnChange = (event) => {
       // console.log("changed");
        settext(event.target.value)
    }


const [text, settext] = useState('');
// settext = ("newText");  //correct way to change the state

    return (
        <>
        <div className='container my-6'>
        <h1> {props.heading}  </h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
            <button className="btn btn-primary mx-3" onClick= {handleUpClick}> Convert into UpperCase</button>
            <button className="btn btn-primary mx-3" onClick= {handleLoClick}> Convert into LowerCase</button>

        </div>

        <div className="container">
            <h2> Your Text Summary </h2>
            <p>{text.split (" ").length } words and {text.length}characters</p>
            <p> {0.008 * text.split (" ").length } minutes read </p>

            <h3>Preview the Text</h3>
            <p>{text}</p>
        </div>

        </>
    )
}

