import React from 'react';

export default ({ name, members, filteredTasks, openModalcb, editModalhandler }) => {
  const editTask = (id) => {
    editModalhandler(id)
  }
  return (
    <section>
      <span> {name} </span>
        <div className={`tasks`}>
          {
            filteredTasks.map((task) => 
              <div key={task.id} className={`task 
                ${task.state !== 'Done' && (new Date(task.dueDate) < new Date())  ? 'latetask': ''} 
                ${task.state === 'Done' && (new Date(task.dueDate) > new Date())  ? 'earlytask': ''} 
              `}
              onDoubleClick={(e) => {
                e.preventDefault()
                editTask(task.id)
              }}>
                <span className="taskdescription">{task.description}</span>
                <span className="taskdue">{task.dueDate}</span>
                <span className="taskassigned">{members.find(m => m.id == task.assignee).name}</span>
            </div>
            )
          }
        </div>
      <button onClick={openModalcb}>Add Aonther Task</button>
    </section>
    

  )
}