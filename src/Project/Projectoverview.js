import React from 'react';

const Projectoverview = ({ projectId, onBack, projectsData }) => {
  // Check if projectsData is defined and is an array
  if (!projectsData || !Array.isArray(projectsData)) {
    return <div>Projects data is unavailable.</div>;
  }

  // Find the selected project based on projectId or projectName
  const project = projectsData.find(
    (p) => p.id === projectId || p.title === projectId
  );

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      {/* Left Section */}
      <div style={{ width: '20%', backgroundColor: '#f4f4f4', padding: '20px' }}>
        <button onClick={onBack} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Go Back
        </button>
      </div>

      {/* Right Section */}
      <div style={{ width: '80%', padding: '20px' }}>
        <h1>{project.title}</h1>
        <div style={{ marginBottom: '20px' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
        <div>
          <h2>Description</h2>
          <p>{project.description}</p>
          <h2>Technologies Used</h2>
          <p>{project.tag1}, {project.tag2}, {project.tag3}, {project.tag4}</p>
          <h2>Features Developed</h2>
          <ul>
            <li>{project.tag5}</li>
            <li>{project.tag6}</li>
            <li>{project.tag7}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projectoverview;
