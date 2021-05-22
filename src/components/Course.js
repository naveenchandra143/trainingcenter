import React from 'react';
import CourseButtons from '../component/CourseButtons';
import CourseDet from '../component/CourseDet';
import courses from '../css/courses.css'

class Course extends React.Component{
    render(){
        return (        
                <div className="body1"> 
                    <h1 className="ml-4 h11">Technology & Development</h1>
                    <h1 className="ml-4 h11">All Technology & Development Courses</h1>
                    <br/>                   
                    <CourseButtons />
                    <CourseDet />                  
                </div> 
        );
    }
}

export default Course;