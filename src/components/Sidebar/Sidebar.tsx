import React from 'react';

import { ALL_TAGS } from '../../utils/constants';
import { ICourses } from '../../utils/types';

import './sidebar.scss';

type PropsType = {
  courses: ICourses[];
  selectedTag: string;
  setSelectedTag: (selectedTag: string) => void;
};

export const Sidebar = (props: PropsType) => {
  const { courses, selectedTag, setSelectedTag } = props;

  const tags: string[] = React.useMemo(() => {
    return [
      ALL_TAGS,
      ...Array.from(new Set(courses.flatMap((n: ICourses) => n.tags))),
    ];
  }, [courses]);

  return (
    <div className="tags">
      {tags.map((tag) => (
        <div
          key={tag}
          className={`tag ${selectedTag === tag ? 'selectedTag' : ''}`}
          onClick={() => setSelectedTag(tag)}>
          <h1>{tag}</h1>
        </div>
      ))}
    </div>
  );
};
