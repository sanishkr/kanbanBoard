import React, { useState } from 'react';
import KanbanSection from './KanbanSection';
import NewTask from './NewTask';

export default ({ tasks, members, ...props }) => {
  // console.log({tasks});
  
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const PlannedTasks = tasks.filter((t) => t.state === 'Planned');
  const StartedTasks = tasks.filter((t) => t.state === 'Started');
  const DoneTasks = tasks.filter((t) => t.state === 'Done');

  const [selectedTask, setSelectedTask] = useState({})
  // console.log({DoneTasks,StartedTasks});
  const editModalhandler = (id) => {
    // console.log({ id })
    setSelectedTask(tasks.find(t => t.id === id));
    setEditModalOpen(true)
  }
  return (
    <div className="kanban">
      <KanbanSection name="Planned" members={members} filteredTasks={PlannedTasks} openModalcb={() => setModalOpen(true)} editModalhandler={editModalhandler} />
      <KanbanSection name="Started" members={members} filteredTasks={StartedTasks} openModalcb={() => setModalOpen(true)} editModalhandler={editModalhandler} />
      <KanbanSection name="Done" members={members} filteredTasks={DoneTasks} openModalcb={() => setModalOpen(true)} editModalhandler={editModalhandler} />
      {
        modalOpen ?
          <NewTask
            members={members}
            addtocb={props.addTodocb}
            openModalcb={(val) => setModalOpen(val)} />
          : null
      }
      {
        editModalOpen ?
          <NewTask
            members={members}
            addtocb={props.addTodocb}
            editTodocb={props.editTodocb}
            openModalcb={(val) => setEditModalOpen(val)}
            {...selectedTask}
          />
          : null
      }
    </div>
  )
}