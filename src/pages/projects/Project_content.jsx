import React from 'react';

function Project_content({project_name, project_mentor, project_img}) {
    return (
        <a href="#" className="item col-md-6">
        <div className="wrap">
          <div className="cover">
            <img src={project_img}alt="" />
          </div>
          <div className="info">
            <div className="name">{project_name}</div>
            <div className="makeby">{project_mentor}</div>
          </div>
        </div>
      </a>
     
    );
}

export default Project_content;