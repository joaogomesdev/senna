import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_LESSONS_QUERY = gql`
  query {
    id
    title
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  console.log(data);

  if (!data) {
    return <h1>No lessons</h1>;
  }

  return (
    <ul>
      {data.lessons.map((lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  );
}

export default App;
