import 'bootstrap/dist/css/bootstrap.min.css';
import Headshot from '../assets/headshot.jpeg';

function Home() {
  return (
    <>
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-4">
            <img src={Headshot} class="img-thumbnail" alt="headshot image of Audrey DeHoog"></img>
          </div>
          <div class="col-4">
            <h1>About Me</h1>
            <p>I graduated from the University of Florida with a Bachelor of Science in Computer Science with a minor in Digital Arts & Sciences Magna Cum Laude and later with a Masters in Computer Science. I am currently pursuing a PhD in Engineering Education at Virginia Tech. </p>
            <p>My interests include computer-human interaction, cross-culutral engineering, CS education, and game development.</p>
            <p>You can contact me at <a href="mailto:adehoog@vt.edu">adehoog@vt.edu</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home