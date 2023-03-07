// @ts-nocheck
import "./JobItem.scss"

const JobItem = ({ job }) => (
  <li className={job.featured ? "job-item job-item--featured" : "job-item"}>
    <div className="job-item__logo-container">
      <img src={job.logo} alt="logo" className="job-item__logo" />
    </div>

    <div className="job-item__details">
      <div className="job-item__header">
        <p className="job-item__company">{job.company}</p>
        {job.new && (
          <span className="job-item__badge job-item__badge--new">new!</span>
        )}
        {job.featured && (
          <span className="job-item__badge job-item__badge--featured">
            featured
          </span>
        )}
      </div>

      <p className="job-item__position">{job.position}</p>

      <p className="job-item__meta">{`${job.postedAt}  •  ${job.contract}  •  ${job.location}`}</p>
    </div>

    <div className="job-item__requirements">
      <span className="job-item__requirement">{job.role}</span>

      <span className="job-item__requirement">{job.level}</span>

      {job.languages.map(language => (
        <span key={language} className="job-item__requirement">
          {language}
        </span>
      ))}

      {job.tools.map(tool => (
        <span key={tool} className="job-item__requirement">
          {tool}
        </span>
      ))}
    </div>
  </li>
)

export default JobItem
