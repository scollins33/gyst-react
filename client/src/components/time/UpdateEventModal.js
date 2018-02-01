import React from 'react'
import Modal from 'material-ui/Modal'
import Picker from './Picker'

const UpdateEventModal = props =>{
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
                Update an Event
                <label>name: </label>
                <input
                    name="updateName"
                    type="text"
                    onChange={props.handleInputChange}
                />
                <br/>
                <Picker
                    title="Start Time"
                    name="updateStart"
                    value={props.startTime}
                    handleChange={props.handleTimeChange}
                    type="datetime-local"
                />
                <br/>
                <Picker
                    title="End Time"
                    name="updateEnd"
                    value={props.endTime}
                    handleChange={props.handleTimeChange}
                    type="datetime-local"
                />
                <br/>
                <label>repeat:</label>
                <input
                    type="text"
                    name="updateRepeat"
                    onChange={props.handleInputChange}
                />
                <br/>
                <label>class:</label>
                <input
                    type="text"
                    name="updateClass"
                    onChange={props.handleInputChange}
                />

                <br/>
                <label>notes: </label>
                <input
                    type="text"
                    name="updateNotes"
                    onChange={props.handleInputChange}
                />
                <br/>
                <button onClick={(e)=>props.onClick(e, props.id)}>
                    Submit
                </button>
            </div>
        </Modal>
    )
};

export default UpdateEventModal;