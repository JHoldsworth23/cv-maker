import ExampleLoader from './components/example-loader';
import PersonalForm from './components/personal/personal-form';
import './styles/App.css';

export default function App() {
  return (
    <>
      <div>
        FORM SIDE
        {/* TODO: ADD TWO FUNCTIONS FOR BUTTONS */}
        <ExampleLoader />
        <div>
          <PersonalForm />
          {/* FORM FOR EACH SECTION */}
        </div>
      </div>
      <div>
        DISPLAY CV
      </div>
    </>
  );
}
