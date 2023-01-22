import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="course-title-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="tag-item">
            <p className="tag-name">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
export default CourseTimelineCard
