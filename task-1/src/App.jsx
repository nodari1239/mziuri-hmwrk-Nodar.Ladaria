// ინსტრუქცია
// userData ობიექტის გამოყენებით გამოიტანეთ h1-ში firstName და lastName, ხოლო p-ში title.
// ხელით არ უნდა იყოს ჩაწერილი მაგ: <h1>Niko Ambroladze</h1> ან <p>Instructor</p>.!!!
// მხოლოდ User კომპონენტში უნდა შევცვალოთ კოდი

const userData = {
  firstName: "Niko", // შეგიძლიათ რაც გაგიხარდებათ ის მნიშვნელობა ჩაწეროთ
  lastName: "Ambroladze", // შეგიძლიათ რაც გაგიხარდებათ ის მნიშვნელობა ჩაწეროთ
  title: "Instructor", // შეგიძლიათ რაც გაგიხარდებათ ის მნიშვნელობა ჩაწეროთ
};

function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome To React Mziuri Course!</p>
      <User />
    </div>
  );
}

export default App;
