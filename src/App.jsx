import { useState } from 'react';
import { exampleData } from './example-data';
import ExampleLoader from './components/example-loader';
import PersonalForm from './components/personal/personal-form';
import ExperienceForm from './components/experience/experience-form';
import './styles/App.css';

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personal);
  const [experienceInfo, setExperienceInfo] = useState(exampleData.sections.experience);

  function loadExample() {
    setPersonalInfo(exampleData.personal);
  }

  function clearForm() {
    setPersonalInfo({ fullName: "", phoneNo: "", email: "", address: "" });
  }

  function changePersonalInfo(event) {
    setPersonalInfo({...personalInfo, [event.target.dataset.info]: event.target.value});
  }

  function changeExperienceInfo() {
    setExperienceInfo();
  }

  return (
    <>
      <div>
        FORM SIDE
        <ExampleLoader load={loadExample} clear={clearForm}/>
        <div>
          <PersonalForm {...personalInfo} onChange={changePersonalInfo}/>
          <ExperienceForm {...experienceInfo} onChange={changeExperienceInfo} />
          {/* FORM FOR EACH SECTION */}
        </div>
      </div>
      <div>
        DISPLAY CV
      </div>
    </>
  );
}
