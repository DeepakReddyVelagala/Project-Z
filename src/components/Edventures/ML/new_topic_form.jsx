import React, { useState} from 'react';

function TopicForm(props) {
    const { onSave } = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSave({ title, description });
      setTitle('');
      setDescription('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    );
  }

export default TopicForm;