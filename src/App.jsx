import { useState } from 'react';
import { exampleData } from './example-data';
import ExampleLoader from './components/example-loader';
import PersonalForm from './components/personal/personal-form';
import ExperienceFormSection from './components/experience/experience-form-section';
import './styles/App.css';
import EducationFormSection from './components/education/education-form-section';

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personal);
  const [sections, setSections] = useState(exampleData.sections);

  function loadExample() {
    setPersonalInfo(exampleData.personal);
  }

  function clearForm() {
    setPersonalInfo({ fullName: "", phoneNo: "", email: "", address: "" });
  }

  function changePersonalInfo(event) {
    setPersonalInfo({...personalInfo, [event.target.dataset.info]: event.target.value});
  }

  function changeSectionInfo(event) {
    const form = event.target.closest('form');
    const sectionName = form.dataset.sectionName;
    const section = sections[sectionName];
    setSections({
      ...sections, 
      [sectionName]: section.map(obj => {
        if (obj.id === form.id) obj[event.target.dataset.info] = event.target.value;
        return obj;
      })
    });
  }

  return (
    <>
      <div>
        FORM SIDE
        <ExampleLoader load={loadExample} clear={clearForm}/>
        <div>
          <PersonalForm {...personalInfo} onChange={changePersonalInfo}/>
          <ExperienceFormSection experiences={sections.experience} onChange={changeSectionInfo} />
          <EducationFormSection educations={sections.education} onChange={changeSectionInfo} />
        </div>
      </div>
      <div>
        DISPLAY CV
      </div>
    </>
  );
}
