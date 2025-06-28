import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import DictionaryPage from "./pages/DictionaryPage";
import TopicPage from "./pages/TopicPage";
import ExercisesPage from "./pages/ExercisesPage";
import ContactsPage from "./pages/ContactsPage";
import StudyPage from "./pages/StudyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "dictionary", element: <DictionaryPage /> },
      { path: "dictionary/:topicId", element: <TopicPage /> },
      { path: "exercises", element: <ExercisesPage /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "study", element: <StudyPage /> },
    ],
  },
]);

export default router;
