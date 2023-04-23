import { useState } from 'react'

const FORM_SUBMIT = "https://script.google.com/macros/s/AKfycbylECUpNlIKdSbOWzamKmFcSAqZadIIqO0TzMDZ_s7hGaCMFxTCX-LG0Jkn5u7rXXVtMg/exec"

const SuggestionBox = ({ hide }) => {
    const [suggestion, setSuggestion] = useState('')

    return (
        <div id='suggestion-box' className='p-3'>
            <form 
                id="suggestion-form"
                className='d-flex flex-column align-items-center fill-parent'
            >
                <input
                    name="Activity" 
                    type="text" 
                    className="form-control mb-3 mt-1" 
                    placeholder="What should I learn next?" 
                    autoComplete="off"
                    value={suggestion}
                    onChange={(e) => {
                        setSuggestion(e.target.value)
                    }}
                />
                <div className="w-100 d-flex justify-content-around">
                <button type="button" className="btn btn-secondary" aria-label="Close" onClick={hide}>Cancel</button>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ border: "none" }}
                    disabled={!suggestion}
                    onClick={e => {
                        e.preventDefault()
                        const data = new FormData(document.getElementById("suggestion-form"));
                        const action = FORM_SUBMIT;
                        fetch(action, {
                            method: 'POST',
                            body: data,
                        })

                        hide();
                    }}
                >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SuggestionBox