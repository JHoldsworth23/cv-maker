import { useState } from 'react';
import { exampleData } from './example-data';
import ExampleLoader from './components/example-loader';
import PersonalForm from './components/personal/personal-form';
import './styles/App.css';

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personal);

  function loadExample() {
    setPersonalInfo(exampleData.personal);
  }

  function clearForm() {
    setPersonalInfo({ fullName: "", phoneNo: "", email: "", address: "" });
  }

  function changePersonalInfo(event) {
    setPersonalInfo({...personalInfo, [event.target.dataset.info]: event.target.value});
  }

  return (
    <>
      <div>
        FORM SIDE
        {/* TODO: ADD TWO FUNCTIONS FOR BUTTONS */}
        <ExampleLoader load={loadExample} clear={clearForm}/>
        <div>
          <PersonalForm {...personalInfo} onChange={changePersonalInfo}/>
          {/* FORM FOR EACH SECTION */}
        </div>
      </div>
      <div>
        DISPLAY CV
      </div>
    </>
  );
}
