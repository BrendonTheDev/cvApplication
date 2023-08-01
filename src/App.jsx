import UserForm from './components/UserForm';


function App() {
   let user = {
    name: "Your Name",
    profession: "Profession",
    phone: "123 232 9421",
    email: "loremipsum@gmail.com"
   };

    const handleSubmit = (values) => {
      console.log({ values });
    };

return (
    <div className="App">
      <h1>Professional Summary</h1>
      <div className="form">
        <UserForm onSubmit={handleSubmit} {...{ user }} />
      </div>
    </div>
  );
}

export default App
