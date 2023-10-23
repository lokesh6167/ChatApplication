import logo from './logo.svg';
import './App.css';
import { ChatEngine } from 'react-chat-engine';

function App() {
  return (
    <ChatEngine
      projectID='2dec56db-af5f-4e84-af94-ee0da1332fbe'
      userName='Lokesh'
      userSecret='lokesh@123'
    />
  );
}

export default App;
