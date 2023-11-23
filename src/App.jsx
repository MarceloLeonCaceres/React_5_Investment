import UserInput from "./components/UserInput"

function App() {
  return (
    
    <div className="input-group">
      <UserInput>Initial Investment</UserInput> 
      <UserInput>Annual Investment</UserInput> 
      <UserInput>Expected Return</UserInput>
      <UserInput>Duration</UserInput>
    </div>
    
  )
}

export default App
