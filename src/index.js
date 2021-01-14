import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class TextForm extends Component {
  render() {
    const { name, placeholder, onChange } = this.props;
    return (
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

class NameForm extends Component {
  render() {
    const { formId, handleChange } = this.props;
    return (
      <form id={formId}>
        <TextForm name="name" placeholder="Full Name" onChange={handleChange} />
        <TextForm name="email" placeholder="Email" onChange={handleChange} />
        <input
          name="phone"
          type="text"
          placeholder="Phone number"
          onChange={handleChange}
        />
      </form>
    );
  }
}

class NameArea extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    this.props.handleSubmit(this.state);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { info } = this.props;
    const nameForm = "nameForm";

    return (
      <div>
        <div className="flex-row">
          <div className="flex-large">
            <h1>{info.name}</h1>
            <input type="button" value="Edit" />
            <input
              form={nameForm}
              type="button"
              value="Save"
              onClick={this.submitForm}
            />
          </div>
          <div className="flex-large">
            <h5>
              {info.email} <br />
              {info.phone}
            </h5>

            <NameForm formId={nameForm} handleChange={this.handleChange} />
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

class EducationForm extends Component {
  render() {
    const { formId } = this.props;
    return (
      <form id={formId}>
        <TextForm name="university" placeholder="University" />
        <TextForm name="year" placeholder="Year" />
        <TextForm name="additional" placeholder="Additional Info" />
      </form>
    );
  }
}

class EducationArea extends Component {
  render() {
    const { info } = this.props;
    const educationForm = "educationForm";

    return (
      <div>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Education</h2>
            <input type="button" value="Edit" />
            <input form={educationForm} type="button" value="Save" />
          </div>
          <div className="flex-large">
            <h5>
              {info.university} <br />
              Class of {info.yearGraduated}
            </h5>
            <p>{info.notes}</p>

            <EducationForm formId={educationForm} />
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

class JobsArea extends Component {
  render() {
    const { jobs } = this.props;
    const jobBlocks = jobs.map((job, index) => {
      return (
        <div key={index}>
          <h5>
            {job.company} <br />
            {job.yearIn}-{job.yearOut}
          </h5>
          <p>{job.description}</p>
        </div>
      );
    });
    return <div>{jobBlocks}</div>;
  }
}

class ExperienceArea extends Component {
  render() {
    const jobForm = "jobForm";

    return (
      <div>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Experience</h2>
            <input type="button" value="Edit" />
            <input form={jobForm} type="button" value="Save" />
          </div>
          <div className="flex-large">
            <JobsArea jobs={this.props.info} />
            <form id={jobForm}>
              <input type="text" id="name" placeholder="Company" />
              <input type="text" id="name" placeholder="Year Started" />
              <input type="text" id="name" placeholder="Year Ended" />
              <textarea id="name" placeholder="Description" />
            </form>

            <hr />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

class Footer extends Component {
  componentDidMount() {
    document.title = "My CV";
  }

  render() {
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

class CvDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        name: "James Donovan",
        email: "jamesd@gmail.com",
        phone: "956 581 7515",
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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newstate) {
    this.setState({
      generalInfo: newstate,
    });
  }

  render() {
    const { generalInfo, workInfo } = this.state;
    return (
      <div className="small-container">
        <NameArea info={generalInfo} handleSubmit={this.handleSubmit} />
        <EducationArea info={generalInfo} />
        <ExperienceArea info={workInfo} />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <CvDoc />
  </React.StrictMode>,
  document.getElementById("root")
);
