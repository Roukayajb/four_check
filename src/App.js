
import Profile from './profile/Profile';
const alertMyName = name => alert(name);
function App() {
const bio_content="A young girl(born in october 24 1994) diplomated in computer science,specialised in web developpement ,Actually having a course in JS developpement language looking forward to work as web developper later."
  return (
    <div>
     <Profile fullName="Roukaya JB" bio={bio_content} profession="Ingénieur" handleName={alertMyName}>
      <img src="logo-r.jpg" alt='Roukaya' style={{width:500, height:500}}/>
     </Profile>
    </div>
  );
}

export default App;
