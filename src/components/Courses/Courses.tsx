import React from 'react';

import { ALL_TAGS } from '../../utils/constants';
import { ICourses } from '../../utils/types';

import './courses.scss';

type PropsType = {
  courses: ICourses[];
  selectedTag: string;
};

export const Courses = (props: PropsType) => {
  const { courses, selectedTag } = props;

  const filteredCourses = React.useMemo(() => {
    return selectedTag === ALL_TAGS
      ? courses
      : courses.filter((course) => {
          return course.tags.includes(selectedTag);
        });
  }, [courses, selectedTag]);

  return (
    <div className="courses">
      {filteredCourses.map((course) => (
        <div key={course.id} className="course">
          <div className="image" style={{ background: course.bgColor }}>
            <img src={course.image} alt={course.name} />
          </div>
          <h1 className="name">{course.name}</h1>
        </div>
      ))}
    </div>
  );
};
