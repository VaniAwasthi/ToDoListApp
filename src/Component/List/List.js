import React, { Fragment } from "react";

const List = ({
  tasks
}) => {
  return (
    <Fragment>
              {tasks && tasks?.map((task) => (
                <div style={{width:"100%",textAlign:"center",border:'2px solid gray',margin:'10px 0'}}
                  key={task.id}
                >
                  <p>
                    {task?.name}
                  </p>
                </div>
              ))}
        
    
    </Fragment>
  );
};
export default List;