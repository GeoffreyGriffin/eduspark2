import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Button, Card, CardContent } from '@mui/material';
import Notification from './Notification';

const CoursePage = ({ enrolledCourses }) => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/api/courses/${id}`);
        setCourse(response.data);
      } catch (err) {
        setError('Failed to load course details.');
      }
    };

    const fetchLessons = async () => {
      try {
        const response = await axios.get(`/api/courses/${id}/lessons`);
        setLessons(response.data);
      } catch (err) {
        setError('Failed to load lessons.');
      }
    };

    fetchCourse();
    fetchLessons();
  }, [id]);

  const handleEnroll = async () => {
    try {
      await axios.post(`/api/enrollments`, { courseId: id });
      // Update the enrollment state or perform additional actions as needed
    } catch (err) {
      setError('Failed to enroll in the course.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <Notification message={error} severity="error" />;

  return (
    <div>
      {course && (
        <div>
          <Typography variant="h3">{course.title}</Typography>
          <Typography variant="body1">{course.description}</Typography>
          <Typography variant="body1">Instructor: {course.instructor}</Typography>
          {enrolledCourses.includes(course.id) ? (
            <Typography variant="body1">You are enrolled in this course.</Typography>
          ) : (
            <Button variant="contained" color="primary" onClick={handleEnroll}>
              Enroll Now
            </Button>
          )}
          {/* Display lessons */}
          <Card>
            <CardContent>
              <Typography variant="h6">Lessons:</Typography>
              {lessons.length > 0 ? (
                lessons.map((lesson) => (
                  <Card key={lesson.id}>
                    <CardContent>
                      <Typography variant="h6">{lesson.topic}</Typography>
                      <Typography variant="body1">{lesson.content}</Typography>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Typography variant="body1">No lessons available for this course.</Typography>
              )}
            </CardContent>
          </Card>
          {/* Add progress tracking */}
          <Card>
            <CardContent>
              <Typography variant="h6">Progress:</Typography>
              <Typography variant="body1">Track your progress here.</Typography>
              {/* Include a progress bar or other progress tracking components */}
            </CardContent>
          </Card>
          {/* Add discussion threads */}
          <Card>
            <CardContent>
              <Typography variant="h6">Discussion Threads:</Typography>
              <Typography variant="body1">Join the discussion here.</Typography>
              {/* Include discussion thread components */}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
