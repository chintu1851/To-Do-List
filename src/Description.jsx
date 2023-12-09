import React, { useContext } from 'react'
import { Appcontext } from './App'

const Description = () => {
      const {tasks, editIndex, setEditIndex,deletetask,checkComplete,updateitem,handleEditChange  } = useContext(Appcontext)
  return (
          <div>
        <h2>This is your work-list</h2>

        {tasks.length === 0 ? (
          <p>No task now </p>
        )
          : (
            tasks.map((taskObj, index) => {
              return (
                <div key={index} className='maindiv'>
                  <h3 className={taskObj.completed ? 'checktask' : ''}>
                    {index === editIndex ? (
                      <input
                        type='text'
                        value={taskObj.taskName}
                        className='editinput'
                        onChange={(e) => handleEditChange(e, index)}
                        onBlur={() => setEditIndex(null)} // Save changes on blur

                      />
                    ) : (
                      taskObj.taskName
                    )}
                    <button className='deletetbutton' onClick={() => deletetask(index)}>Delete</button>
                    <button className='completebutton' onClick={() => checkComplete(index)}>Complete</button>
                    <button className='editbutton' onClick={() => updateitem(index)}>Edit</button>
                  </h3>
                </div>
              );
            })
          )}
      </div>
  )
}

export default Description
