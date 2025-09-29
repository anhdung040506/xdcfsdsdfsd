import React, { useState } from 'react';

function TodoList() {
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleAddJob = () => {
    const trimmedJob = job.trim();
    if (trimmedJob !== '') {
      setJobs([...jobs, trimmedJob]);
      setJob(''); 
    }
  };

  const handleDeleteJob = (index) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', fontFamily: 'Arial, sans-serif' }}>
      <h3>Danh sách công việc</h3>

      <input
        type="text"
        placeholder="Nhập công việc..."
        value={job}
        onChange={(e) => setJob(e.target.value)}
        style={{
          width: '70%',
          padding: '8px',
          fontSize: '16px',
          marginRight: '10px',
        }}
      />

      <button
        onClick={handleAddJob}
        style={{
          padding: '8px 16px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Thêm
      </button>

      <ul style={{ marginTop: '20px', padding: 0, listStyle: 'none' }}>
        {jobs.map((item, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '8px',
              backgroundColor: '#f1f1f1',
              borderRadius: '4px',
            }}
          >
            <span>{item}</span>
            <button
              onClick={() => handleDeleteJob(index)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
