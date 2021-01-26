import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DeleteIcon from "@material-ui/icons/Delete";

function TextForm(props) {
  const { name, value, onChange } = props;
  return (
    <input type="text" name={name} defaultValue={value} onChange={onChange} />
  );
}

function NameForm(props) {
  const { formId, handleChange, info } = props;
  return (
    <form id={formId}>
      <TextForm name="name" value={info.name} onChange={handleChange} />
      <TextForm name="email" value={info.email} onChange={handleChange} />
      <input
        name="phone"
        type="text"
        defaultValue={info.phone}
        onChange={handleChange}
      />
    </form>
  );
}

function NameArea(props) {
  let initialState = props.info;

  // const [info, setInfo] = useState(initialState);
  const [nameInfo, setInfo] = useState(initialState);
  const [edit, setEdit] = useState(false);

  const { info } = props;
  const nameForm = "nameForm";
  const displayEdit = edit;

  function handleChange(e) {
    const { name, value } = e.target;

    setInfo((prevState) => ({ ...prevState, [name]: value }));
  }

  function submitForm() {
    props.handleSubmit(nameInfo);

    setEdit(false);
  }

  let displayForm;
  if (displayEdit) {
    displayForm = (
      <NameForm info={info} formId={nameForm} handleChange={handleChange} />
    );
  }

  return (
    <div>
      <div className="flex-row">
        <div className="flex-large">
          <h1>{info.name}</h1>
          <input type="button" value="Edit" onClick={() => setEdit(true)} />
          <input
            form={nameForm}
            type="button"
            value="Save"
            onClick={submitForm}
          />
        </div>
        <div className="flex-large">
          <h5>
            {info.email} <br />
            {info.phone}
          </h5>
          {}
          {displayForm}
        </div>
      </div>

      <hr />
    </div>
  );
}

function EducationForm(props) {
  const { formId, info, handleChange } = props;

  return (
    <form id={formId}>
      <TextForm
        name="university"
        onChange={handleChange}
        value={info.university}
      />
      <TextForm
        name="yearGraduated"
        onChange={handleChange}
        value={info.yearGraduated}
      />
      <TextForm name="notes" onChange={handleChange} value={info.notes} />
    </form>
  );
}

function EducationArea(props) {
  const [educationInfo, setEducationInfo] = useState(props.info);
  const [edit, setEdit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setEducationInfo((prevState) => ({ ...prevState, [name]: value }));
  }

  function submitForm() {
    props.handleSubmit(educationInfo);

    setEdit(false);
  }

  const { info } = props;
  const educationForm = "educationForm";
  const displayEdit = edit;
  let displayForm;

  if (displayEdit) {
    displayForm = (
      <EducationForm
        info={props.info}
        formId={educationForm}
        handleChange={handleChange}
      />
    );
  }

  return (
    <div>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Education</h2>
          <input type="button" value="Edit" onClick={() => setEdit(true)} />
          <input
            form={educationForm}
            type="button"
            value="Save"
            onClick={submitForm}
          />
        </div>
        <div className="flex-large">
          <h5>
            {info.university} <br />
            Class of {info.yearGraduated}
          </h5>
          <p>{info.notes}</p>
          {displayForm}
        </div>
      </div>

      <hr />
    </div>
  );
}

function JobsArea(props) {
  function displayDelete(index) {
    let displayDelete;
    if (props.deleteState) {
      displayDelete = (
        <button className="icon" onClick={() => props.deleteItem(index)}>
          <DeleteIcon />
        </button>
      );
    }

    return displayDelete;
  }

  const { jobs } = props;

  const jobBlocks = jobs.map((job, index) => {
    return (
      <div key={index}>
        <h5>
          {job.company} {displayDelete(index)}
          <br />
          {job.yearIn}-{job.yearOut}
        </h5>
        <p>{job.description}</p>
      </div>
    );
  });
  return <div>{jobBlocks}</div>;
}

function ExperienceArea(props) {
  let initialState = props.info;
  let initialDeleteStatus = props.deleteStatus;
  let displayForm;
  let saveButton;
  let jobForm = "jobForm";

  const { handleDelete, deleteItem, handleSubmit, info } = props;

  const [infoExperience, setInfoExperience] = useState(initialState);
  const [edit, setEdit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setInfoExperience((prevState) => ({ ...prevState, [name]: value }));
  }

  function submitForm() {
    props.handleSubmit(infoExperience);

    setEdit(false);
  }

  if (edit) {
    displayForm = (
      <form id={jobForm}>
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
        />
        <input
          type="text"
          name="yearIn"
          placeholder="Year Started"
          onChange={handleChange}
        />
        <input
          type="text"
          name="yearOut"
          placeholder="Year Ended"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
      </form>
    );
    saveButton = (
      <input form={jobForm} type="button" value="Save" onClick={submitForm} />
    );
  }

  return (
    <div>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Experience</h2>
          <input type="button" value="Add Job" onClick={() => setEdit(true)} />
          <input type="button" value="Delete Job" onClick={handleDelete} />
          {saveButton}
        </div>
        <div className="flex-large">
          <JobsArea
            jobs={info}
            edit={edit}
            deleteState={props.deleteStatus}
            deleteItem={props.deleteItem}
          />
          {displayForm}
          <hr />
        </div>
      </div>
      <hr />
    </div>
  );
}

function Footer() {
  useEffect(() => {
    document.title = "My CV";
  });

  return (
    <div className="footer">
      <div className="flex-row">
        <div className="flex-large">
          <p>James Donovan</p>
        </div>
        <div className="flex-large">
          <p>Copyright 2020©</p>
        </div>
      </div>
    </div>
  );
}

// const generalInfo = {
//   name: "James Donovan",
//   email: "jamesd@gmail.com",
//   phone: "956 581 7515",
//   university: "Princeton",
//   yearGraduated: "2000",
//   notes: "Graduated with Honors",
// };

// const workInfo = [
//   {
//     company: "IBM",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam et nisl at tincidunt. Morbi lacus tellus, placerat vel purus sed, pharetra malesuada dolor. Aliquam erat volutpat. Maecenas cursus eleifend porta. Nulla facilisi. Praesent condimentum elementum cursus. Nulla facilisi. Fusce auctor orci sit amet urna tristique vestibulum.",
//     yearIn: "2005",
//     yearOut: "2010",
//   },

//   {
//     company: "Apple",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam et nisl at tincidunt. Morbi lacus tellus, placerat vel purus sed, pharetra malesuada dolor. Aliquam erat volutpat. Maecenas cursus eleifend porta. Nulla facilisi. Praesent condimentum elementum cursus. Nulla facilisi. Fusce auctor orci sit amet urna tristique vestibulum.",
//     yearIn: "2010",
//     yearOut: "2015",
//   },
// ];

function CvDoc(props) {

  const [deleteStatus,setDeleteStatus] = useState(false);
  const [generalInfo,setGeneralInfo] = useState({
        name: "James Donovan",
        email: "jamesd@gmail.com",
        phone: "956 581 7515",
      });
  const [educationInfo,setEducationInfo] = useState({
        university: "Princeton",
        yearGraduated: "2000",
        notes: "Graduated with Honors"
  });

  

    this.state = {
      deleteStatus: false,
      generalInfo: {
        name: "James Donovan",
        email: "jamesd@gmail.com",
        phone: "956 581 7515",
      },

      educationInfo: {
        university: "Princeton",
        yearGraduated: "2000",
        notes: "Graduated with Honors",
      },

      workInfo: [
        {
          company: "IBM",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam et nisl at tincidunt. Morbi lacus tellus, placerat vel purus sed, pharetra malesuada dolor. Aliquam erat volutpat. Maecenas cursus eleifend porta. Nulla facilisi. Praesent condimentum elementum cursus. Nulla facilisi. Fusce auctor orci sit amet urna tristique vestibulum.",
          yearIn: "2005",
          yearOut: "2010",
        },

        {
          company: "Apple",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam et nisl at tincidunt. Morbi lacus tellus, placerat vel purus sed, pharetra malesuada dolor. Aliquam erat volutpat. Maecenas cursus eleifend porta. Nulla facilisi. Praesent condimentum elementum cursus. Nulla facilisi. Fusce auctor orci sit amet urna tristique vestibulum.",
          yearIn: "2010",
          yearOut: "2015",
        },
      ],
    };

    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.handleJobsSubmit = this.handleJobsSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  

  handleNameSubmit(newstate) {
    this.setState({
      generalInfo: newstate,
    });
  }

  handleEducationSubmit(newstate) {
    this.setState({
      educationInfo: newstate,
    });
  }

  handleJobsSubmit(newstate) {
    this.setState({ workInfo: [...this.state.workInfo, newstate] });
  }

  handleEditClick() {
    this.setState({
      edit: true,
    });
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      info: { ...prevState.info, [name]: value },
    }));
  }

  submitForm() {
    this.props.handleSubmit(this.state.info);

    this.setState({
      edit: false,
      info: {},
    });
  }

  deleteItem = (index) => {
    const { workInfo } = this.state;
    this.setState({
      workInfo: workInfo.filter((item, i) => {
        return i !== index;
      }),
      deleteStatus: false,
    });
  };

  handleDelete = () => {
    this.setState({ deleteStatus: true });
  };

  
    const { generalInfo, workInfo, educationInfo, deleteStatus } = this.state;
    return (
      <div className="small-container">
        <NameArea
          info={generalInfo}
          handleEditClick={this.handleEditClick}
          handleSubmit={this.handleNameSubmit}
          handleChange={this.handleChange}
          submitForm={this.submitForm}
        />
        <EducationArea
          info={educationInfo}
          handleEditClick={this.handleEditClick}
          handleSubmit={this.handleEducationSubmit}
          handleChange={this.handleChange}
          submitForm={this.submitForm}
        />{" "}
        <ExperienceArea
          info={workInfo}
          deleteStatus={deleteStatus}
          handleEditClick={this.handleEditClick}
          handleSubmit={this.handleJobsSubmit}
          handleChange={this.handleChange}
          submitForm={this.submitForm}
          deleteItem={this.deleteItem}
          handleDelete={this.handleDelete}
        />
        <Footer />
      </div>
    );
  
}

ReactDOM.render(
  <React.StrictMode>
    <CvDoc />
  </React.StrictMode>,
  document.getElementById("root")
);
