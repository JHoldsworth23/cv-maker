import { useState } from 'react';
import { exampleData } from './example-data';
import uniqid from 'uniqid';
import ExampleLoader from './components/example-loader';
import PersonalForm from './components/personal/personal-form';
import ExperienceFormSection from './components/experience/experience-form-section';
import EducationFormSection from './components/education/education-form-section';
import DisplayCV from './components/display-cv';
import './styles/App.css';

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

  function createNewForm(arrayName, form) {
    const section = sections[arrayName];
    section.push(form);
    setSections({...sections, [arrayName]: section});
  }

  const newExperienceForm = () => {
    createNewForm('experience', {
      id: uniqid(),
      companyName: '',
      role: '',
      location: '',
      description: '',
      startDate: '',
      endDate: '',
      isCollapsed: false,
    });
  }

  const newEducationForm = () => {
    createNewForm('education', {
      id: uniqid(),
      school: '',
      study: '',
      location: '',
      startDate: '',
      endDate: '',
      isCollapsed: false,
    });
  }

  function toggleValue(event, key) {
    const form = event.target.closest('[class$="-form"]');
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
        <ExampleLoader load={loadExample} clear={clearForm}/>
        <div className="forms-container">
          <PersonalForm {...personalInfo} onChange={changePersonalInfo}/>
          <ExperienceFormSection experiences={sections.experience} onChange={changeSectionInfo} toggleCollapsed={toggleCollapsed} newForm={newExperienceForm}/>
          <EducationFormSection educations={sections.education} onChange={changeSectionInfo} toggleCollapsed={toggleCollapsed} newForm={newEducationForm}/>
        </div>
      </div>
      <div>
        DISPLAY CV
        <DisplayCV personal={personalInfo} sections={sections} />
      </div>
    </>
  );
}
