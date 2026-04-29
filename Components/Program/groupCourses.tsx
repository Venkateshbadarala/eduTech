
import { Course } from "./Courses";

export const groupCoursesByCategory = (courses: Course[]) => {
  return courses.reduce((acc: Record<string, Course[]>, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});
};