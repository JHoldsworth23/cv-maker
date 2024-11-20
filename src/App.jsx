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
    setSections(exampleData.sections);
  }

  function clearForm() {
    setPersonalInfo({ fullName: "", phoneNo: "", email: "", address: "" });
    setSections({ experience: [], education: [] });
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

  function toggleValue(event, key) {
    const form = event.target.closest('.collapsed-form');
    const sectionName = form.dataset.sectionName;
    const section = sections[sectionName];
    setSections({
      ...sections,
      [sectionName]: section.map(obj => {
        if (obj.id === form.id) obj[key] = !obj[key];
        return obj;
      })
    });
  }

  const toggleCollapsed = (e) => toggleValue(e, "isCollapsed");

  return (
    <>
      <div>
        FORM SIDE
        <ExampleLoader load={loadExample} clear={clearForm}/>
        <div>
          <PersonalForm {...personalInfo} onChange={changePersonalInfo}/>
          <ExperienceFormSection experiences={sections.experience} onChange={changeSectionInfo} toggleCollapsed={toggleCollapsed} />
          <EducationFormSection educations={sections.education} onChange={changeSectionInfo} />
        </div>
      </div>
      <div>
        DISPLAY CV
      </div>
    </>
  );
}
