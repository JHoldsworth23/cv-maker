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
  const [prevState, setPrevState] = useState(null);

  function loadExample() {
    setPersonalInfo(exampleData.personal);
    setSections(exampleData.sections);
  }

  function clearForm() {
    setPersonalInfo({ fullName: "", phoneNo: "", email: "", address: "" });
    setSections({ experience: [], education: [] });
    setPrevState(null);
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
    setPrevState(null);
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

  function deleteForm(event) {
    const form = event.target.closest('form');
    const sectionName = form.dataset.sectionName;
    const section = sections[sectionName];
    setSections({...sections, [sectionName]: section.filter(obj => obj.id !== form.id)})
  }

  function cancelForm(event) {
    if (prevState === null) {
      deleteForm(event);
      return;
    }

    const form = event.target.closest('.section-form');
    const sectionName = form.dataset.sectionName;
    const section = sections[sectionName];

    setSections({...sections, [sectionName]: section.map(obj => {
      if (form.id === obj.id) {
        obj = prevState;
        obj.isCollapsed = true;
      }
      return obj;
    })});
  }

  function toggleValue(event, key) {
    const form = event.target.closest('[class$="-form"]');
    const sectionName = form.dataset.sectionName;
    const section = sections[sectionName];
    setSections({
      ...sections,
      [sectionName]: section.map(obj => {
        if (obj.id === form.id) {
          setPrevState(Object.assign({}, obj));
          obj[key] = !obj[key]
        };
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
          <ExperienceFormSection 
            experiences={sections.experience} 
            onChange={changeSectionInfo} 
            toggleCollapsed={toggleCollapsed} 
            newForm={newExperienceForm} 
            remove={deleteForm}
            cancel={cancelForm}
          />
          <EducationFormSection 
            educations={sections.education} 
            onChange={changeSectionInfo} 
            toggleCollapsed={toggleCollapsed} 
            newForm={newEducationForm} 
            remove={deleteForm}
            cancel={cancelForm}
          />
        </div>
      </div>
      {/* <div>
        DISPLAY CV
        <DisplayCV personal={personalInfo} sections={sections} />
      </div> */}
    </>
  );
}
