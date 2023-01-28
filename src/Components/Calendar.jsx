import React, { useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import list from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction"; 
import moment from "moment";
import uuid from "react-uuid";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import css from '../App.css';
import csss from './Style.css';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



let tooltipInstance = null;
const milliseconds = 1575909015 * 1000;
const end_mil = 1575979200 * 1000;

export default class Calendar extends React.Component {
 
  
  calendarComponentRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      end: new Date(end_mil),
      current_date: new Date(milliseconds),
      calendarWeekends: true,
      calendarEvents: [
        // initial event data
        { title: "Event Now", start: new Date() }
      ],

      events: [
        { title: "Art 1", desc: "Art 11", duree: "22:00", id: "1" },
        { title: "Art 2", desc: "Art 22", duree: "23:00", id: "2" },
        { title: "Art 3", desc: "Art 33", duree: "24:00", id: "3" },
        { title: "Art 4", desc: "Art 44", duree: "25:00", id: "4" },
        { title: "Art 5", desc: "Art 55", duree: "26:00", id: "5" }
      ],
      closed_update: false,
      closed: false,
      event_start: "",
      event_end: "",
      selectionInfo: {},
      event_id: ""
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.openForm = this.openForm.bind(this);
    this.itemfunc = this.itemfunc.bind(this);
    this.handleeventDrop = this.handleeventDrop.bind(this);
    this.handleeventResize = this.handleeventResize.bind(this);
    this.handleOpenUpdate = this.handleOpenUpdate.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleRemoveUpdate = this.handleRemoveUpdate.bind(this);
    this.handleeventRecieve = this.handleeventRecieve.bind(this);
  }

  openForm = e => {
    this.setState({
      closed: !this.state.closed
    });
  };

  handleOpenUpdate = e => {
    this.setState({
      closed_update: !this.state.closed_update
    });
  };


  componentDidMount() {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function(eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
          create: false
        };
      }
    });
  }

  handleRemoveUpdate = (eventClickInfo, e) => {
    console.log("remove update called");
    console.log(eventClickInfo.event);

    this.setState({
      event_id: eventClickInfo.event
    });

    this.handleOpenUpdate(e);
  };

  handleeventResize = eventResizeInfo => {
    const { calendarEvents } = this.state;

    this.setState({
      calendarEvents: calendarEvents.map(event =>
        event.id === eventResizeInfo.event.id
          ? Object.assign({}, event, {
              start: eventResizeInfo.event.start,
              end: eventResizeInfo.event.end
            })
          : event
      )
    });
  };

  handleeventDrop = eventDropInfo => {
    console.log("event dropped");
    console.log(eventDropInfo.event);
    const { calendarEvents } = this.state;
   
    this.setState({
      calendarEvents: calendarEvents.map(event =>
        event.id === eventDropInfo.event.id
          ? Object.assign({}, event, {
              start: eventDropInfo.event.start,
              end: eventDropInfo.event.end
            })
          : event
      )
    });
  };
  handleSelect = (selectionInfo, e) => {
   
    console.log("handle select called");
    console.log(selectionInfo);

    //
    this.setState({
      selectionInfo: selectionInfo
    });

    this.openForm(e);
    
  };

  itemfunc(id, jobarticle, onDateTimeStart, onDateTimeEnd) {
    const calendarEvents = this.state;

    this.setState({
      calendarEvents: this.state.calendarEvents.concat({
      
        title: jobarticle.label,
        start: onDateTimeStart,
        end: onDateTimeEnd,
        id: id
      })
    });

    return this.state.calendarEvents;
  }

  handleeventRecieve = info => {
    console.log("event recv");
    console.log(info);
    const id = uuid();
    const newEvent = {
      title: info.draggedEl.getAttribute("title"),
      start: info.date,
      end: new Date(
        moment(info.date)
          .add(1, "hour")
          .valueOf()
      ),
      id: id
    };
    this.setState({
      calendarEvents: this.state.calendarEvents.concat(newEvent)
    });


    return;
  };
  handleRemoveItem = event => {
    console.log("event clicked");
    console.log(event);
    const id = event.id;
    console.log(id);
  };


  render() {
    console.log("Rerender");
    console.log(this.state.calendarEvents);

    return (
      <>
       <div class="container back">
  <div class="row">
    <div className="col-3">
        <div className='demo-app-sidebar' style={{
                marginTop: "20px",
                width: "100%"
              }}>
        <div id='external-events'>
            <div id='Taskheader'>
          <p>
            <strong>Tasks</strong>
          </p>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab size="small" color="primary" aria-label="add" onClick={this.handleClickOpen}>
        <AddIcon />
      </Fab>
      </Box>
      <Dialog  open={this.state.open} onClose={this.handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Duration"
            type="Number"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={this.handleClose}>Cancel</Button>
        <Button onClick={this.handleClose}>Submit</Button>
        </DialogActions>
      </Dialog></div>
      <div>
      {this.state.events.map(event => (
                <div
                className="fc-event event_inner draggable-item draggable-header draggable-source "
            
                title={event.title}
                data={event.desc}
                key={event.id}
                style={{
                  backgroundColor: this.state.selectedColor
                }}> 
                <div><strong>{event.title} </strong><br/>
                <p>{event.desc}</p>
                <div className="task-meta">
            <img
              src="https://icongr.am/feather/calendar.svg?size=16&color=ffffff"
              alt="calendar" style={{ right: 30 }}
            />
           {event.duree}
          </div>
          <div className="row">
          <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="Edit" color="primary">
        <EditIcon />
      </IconButton>
      </Stack>
          </div>
                </div>
              </div>
              ))}
            </div>
            </div>
            <Dialog
        aria-labelledby="event-dialog-title">
        <DialogTitle id="event-dialog-title">Edit Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
           <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Duration"
            type="Number"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
          </DialogContentText>
          <DialogActions>
        <Button onClick={this.handleClose}>Cancel</Button>
        <Button onClick={this.handleClose}>Udate</Button>
        </DialogActions>
        </DialogContent>
      </Dialog></div>
         </div>
         <div id='main'>
          <div id='calendar-container'>
              <FullCalendar  id='calendar'
                themeSystem={'Cosmo'}
                droppable={true}
                eventResize={this.handleeventResize}
                eventDrop={this.handleeventDrop}
                drop={this.handleeventRecieve}
                select={this.handleDateSelect}
                timeFormat="H(:mm)"
                minTime={"07:00:00"}
                maxTime={"19:00:00"}
                initialView='timeGridWeek'
                validRange={{
                  start: this.state.current_date
                }}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                rerenderDelay={10}
                eventDurationEditable={true}
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  list,
                  interactionPlugin
                ]}
                ref={this.calendarComponentRef}
                weekends={this.state.calendarWeekends}
                events={this.state.calendarEvents}
                dateClick={this.handleDateClick}
                //currentDate={this.visibleRange}
                defaultDate={this.state.current_date}
                editable={true}
                selectable={true}
                navLinks= {true}
                event={"eventMouseover"}
                eventMouseover ={
                  function(calEvent, jsEvent, view) { console.log('mouseover', calEvent); }
                }
              />
            </div>
            </div>
            </div>
            </div>
        
      </>
    );
  }

  toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2020-01-01"); 
  };

}
