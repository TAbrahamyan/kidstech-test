import React from 'react';

import { Courses } from './components/Courses/Courses';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ALL_TAGS } from './utils/constants';
import { ICourses } from './utils/types';

import './App.scss';

export const App = () => {
  const [courses, setCourses] = React.useState<ICourses[]>([]);
  const [selectedTag, setSelectedTag] = React.useState<string>(ALL_TAGS);

  React.useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const response = await fetch('https://logiclike.com/docs/courses.json');
      const data: ICourses[] = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Request failed: ', error);
    }
  };

  return (
    <div className="app">
      {courses.length ? (
        <>
          <Sidebar
            courses={courses}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
          <Courses courses={courses} selectedTag={selectedTag} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
