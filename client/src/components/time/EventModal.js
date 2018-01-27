import React from 'react'
import Modal from 'material-ui/Modal'
const moment = require('moment');

const EventModal = props =>{
    return(
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.open}
            onClose={(e)=> props.onClose(e)}>
        <div
        style={{position: 'absolute',
            width: `70%`,
            top: `15%`,
            left: `15%`,
            border: '1px solid #e5e5e5',
            backgroundColor: '#fff',
            boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
            padding: `40px`,}}
        >
            Add New Event
            <label>name: </label>
            <input
                name="newName"
                type="text"
                onChange={props.handleInputChange}
            />
            <br/>
            <label>start time:</label>
            <input
                name="newStart"
                type="text"
                onChange={props.handleInputChange}
            />
            <br/>
            <label>end time:</label>
            <input
                type="text"
                name="newEnd"
                onChange={props.handleInputChange}
            />
            <br/>
            <label>repeat:</label>
            <input
                type="text"
                name="newRepeat"
                onChange={props.handleInputChange}
            />
            <br/>
            <label>class:</label>
            <input
                type="text"
                name="newClass"
                onChange={props.handleInputChange}
            />
            <br/>
            <label>notes: </label>
            <textarea
                type="text"
                name="newNotes"
                onChange={props.handleInputChange}
            />
            <br/>
            <button onClick={(e)=>props.onClick(e)}>
                Submit
            </button>
        </div>
    </Modal>
    )
};

export default EventModal;