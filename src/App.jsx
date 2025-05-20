import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Navbar onSearch={setSearchQuery} />
      <Notes searchQuery={searchQuery} />
    </>
  );
}

export default App;
