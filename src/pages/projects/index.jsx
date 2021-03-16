import React from 'react';
import Project_content from './Project_content'
function Project(props) {
    return (
        <main className="projectpage" id="main">
        <section className="section-1">
          <div className="container">
            <h2 className="main-title">dự án</h2>
            <p className="top-des">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
              luctus
            </p>
            <div className="list row">
                <Project_content project_name='Furnitown' project_mentor='a' project_img='' />
                <Project_content project_name='Wooder' project_mentor='s' project_img='' />
                <Project_content project_name='Gbox' project_mentor='d' project_img='' />
                <Project_content project_name='Kymco' project_mentor='f' project_img='' />
                <Project_content project_name='1' project_mentor='g' project_img='' />
                <Project_content project_name='2' project_mentor='h' project_img='' />
                <Project_content project_name='3' project_mentor='h' project_img='' />
                <Project_content project_name='4' project_mentor='j' project_img='' />
           </div>
            <div className="bottom">
              <div className="btn overlay round btn-more">
                tải thêm
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}

export default Project;