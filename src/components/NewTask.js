import React, { useState } from 'react';

export default ({id, description='', dueDate='', assignee, state, members, openModalcb, addtocb, editTodocb, ...props}) => {
  const saveTask = () => {
    // console.log({ description, dueDate, assigneeId, taskState });
    if (id) {
      editTodocb({ id, description: desc, dueDate: due, assignee: assigneeId, state:taskState })
    } else {
      addtocb({ id: Date.now(), description: desc, dueDate: due, assignee: assigneeId, state:taskState })
    }
    openModalcb(false);
  }
  // console.log({props});
  
  const [desc, setDesc] = useState(description)
  const [due, setDue] = useState(dueDate)
  const [assigneeId, setAssigneeId] = useState(assignee || null)
  const [taskState, setTaskState] = useState(state)
  return (
    <div className="newtask">
        <div>
          <input placeholder="Task Description" value={desc || ""} onChange={(e) => setDesc(e.target.value)} />
          <input min={new Date().toJSON().split('T')[0]} type="date" value={due} onChange={(e) => setDue(e.target.value)} />
          <select defaultValue={taskState || 'none'} onChange={(e) => setTaskState(e.target.value)}>
            <option value="none" disabled>Select State --</option>
            <option value="Planned">Planned</option>
            <option value="Started">Started</option>
            <option value="Done">Done</option>
          </select>
          <select defaultValue={assigneeId || 'none'} onChange={(e) => setAssigneeId(e.target.value)}>
            <option value="none" disabled>Select Assignee --</option>
            {
              members.map((m) => 
                <option value={m.id} key={m.id}>{m.name}</option>      
              )
            }
          </select>
          <button onClick={saveTask}>Save</button>
          <button onClick={()=> openModalcb(false)}>Cancel</button>
        </div>
      </div>
  )
}