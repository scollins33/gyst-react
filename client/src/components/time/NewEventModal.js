import React from 'react'
import Modal from 'material-ui/Modal'
import Button from 'material-ui/Button'
import Picker from './Picker'
import RadioButton from './RadioButton'

const rowStyle = "d-flex d-row mb-2";

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
                <div className={rowStyle} >
                    <label>name: </label>
                    <input
                        name="newName"
                        type="text"
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className={rowStyle}>
                    <Picker
                        title="Start Time"
                        name="newStart"
                        value={props.startTime}
                        handleChange={props.handleTimeChange}
                        type="datetime-local"
                    />
                </div>
                <div className={rowStyle}>
                    <Picker
                        title="End Time"
                        name="newEnd"
                        value={props.endTime}
                        handleChange={props.handleTimeChange}
                        type="datetime-local"
                    />
                </div>
                <div className={rowStyle}>
                    <label>repeat:</label>
                    {props.repeatRadio.map((btnName, i)=> <RadioButton key={i} selectedValue={props.repeatChecked} name={btnName} value={btnName} handleChange={props.handleRepeatChange} aria={btnName}/>)}

                </div>
                <div className={rowStyle}>
                    <label>class:</label>
                    {props.classRadio.map((btnName, i)=> <RadioButton selectedValue={props.classChecked} key={i} name={btnName} value={btnName} handleChange={props.handleClassChange} aria={btnName}/>)}
                </div>
                <div className={rowStyle}>
                    <label>notes: </label>
                    <textarea
                        type="text"
                        name="newNotes"
                        onChange={props.handleInputChange}
                    />
                </div>
                <div className={'d-flex justify-content-center'}>
                    <Button raised color="secondary"  onClick={(e)=>props.onClick(e)}>
                        submit
                    </Button>
                </div>
            </div>
        </Modal>
    )
};

export default EventModal;