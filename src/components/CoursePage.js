import React from 'react';
import CourseButtons from './CourseButtons'
import courseStyles from '../css/courseStyles.css'
import Course from './Coursedetail';
//import Footer from './Footer';
//import Navbar from './Navbar';

/*Main comonent (CoursePage)*/
class CoursePage extends React.Component{
    render(){
        return (        
                <div className="body1">  
                    <h1 className="ml-4 h11">Technology & Development</h1>
                    <h1 className="ml-4 h11">All Technology & Development Courses</h1>
                    <br/>                   
                    <CourseButtons />
                    <Course />                
                </div> 
        );
    }
}

/*nested compnent (CourseButtons) of CoursePage*/


export default CoursePage;