import React from 'react';

interface Task {
    title:string;
    remove:(id:number) => void;
}

const Taskadd:React.FC<Task> = ({title, remove}) => {
    return (
        <div className="task">
            <h4>{title}</h4>
            <div>
                <button type='button' className='btn' onClick={remove}></button>
            </div>
        </div>
    );
};

export default Taskadd;