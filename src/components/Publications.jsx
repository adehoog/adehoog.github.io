import 'bootstrap/dist/css/bootstrap.min.css';
import { publications } from '../assets/publications';

function formatPublcation({type, authors, date, title, other_info, doi, link}) {
  //APA style citation
  if (type == "conference"){
    return (
      <p key={doi}>{authors} ({date}), <em>{title}</em> {other_info}. <a href={link}>{doi}</a></p>
    )
  }
}

function Publications() {
  return (
    <>
    <div class="container">
      <h1 className="text-primary">Publications</h1>
      {publications.map(formatPublcation)}
    </div>
    </>
  )
}

export default Publications