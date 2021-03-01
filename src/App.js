import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="base">
        <div className="profile">
          <div className="lightii_container">
            <img className="lightii_image" src="lightii.png"/>
          </div>

          <div className="name">CHEN-LIANG-ZHEN</div>
          <div className="description">- Web Design Homework -</div>
        </div>
        <hr className="hrmain"/>
        <div className="work_container">
          <div className="upper_group">
            <div className="link_clicker coffee">
              <div className="link_text bighead" onclick="location.href='../../../../../Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop/WebStorm/NTUE_WORK/bighead/bighead.html'">Big Head!</div>
            </div>
            <div className="link_clicker poster">
              <div className="link_text coffee" onclick="location.href='../../../../../Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop/WebStorm/NTUE_WORK/coffee_practice/coffee.html'">Coffee!</div>
            </div>
            <div className="link_clicker gradient">
              <div classNameName="link_text poster" onclick="location.href='../../../../../Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop/WebStorm/NTUE_WORK/poster_practice/poster.html'">Postee!</div>
            </div>
            <div className="link_clicker coffee">
              <div className="link_text gradient" onclick="location.href='../../../../../Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop/WebStorm/NTUE_WORK/gradient_practice/gradient.html'">Gradient!</div>
            </div>
            <div className="link_clicker coffee">
              <div className="link_text textwrap" onclick="location.href='../../../../../Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop/WebStorm/NTUE_WORK/textwrap/textwrap.html'">Text wrap!</div>
            </div>
            <div className="link_clicker coffee">
              <div className="link_text listandlink" onclick="location.href='../../../../../Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop/WebStorm/NTUE_WORK/listlink/listlink.html'">List and Link!</div>
            </div>
          </div>
          <div className="lower_group">
            <div className="link_clicker coffee">
              <div className="link_text navigation" onclick="location.href='../../../../../Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop/WebStorm/NTUE_WORK/navigation/navigation.html'">Navigation!</div>
            </div>
            <div className="link_clicker poster">
              <div className="link_text rwd" onclick="location.href='../../../../../Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop/WebStorm/NTUE_WORK/rwd/rwd.html'">RWD!</div>
            </div>
            <div className="link_clicker gradient">
              <div className="link_text dynamiccss" onclick="location.href='../../../../../Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop/WebStorm/NTUE_WORK/dynamiccss/dynamiccss.html'">Dynamic css!</div>
            </div>

            <div className="link_clicker helloworld">
              <div className="link_text helloworld" onclick="location.href='../../../../../Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop/WebStorm/NTUE_WORK/jsPractice/js_practice.html'">Hello world!</div>
            </div>

            <div className="link_clicker bingo">
              <div className="link_text bingo" onclick="location.href='../../../../../Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop/WebStorm/NTUE_WORK/TouristDaka/TouristDaka.html'">Bingo!</div>
            </div>

            <div className="link_clicker mid">
              <div className="link_text mid" onclick="location.href='../../../../../Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop/WebStorm/NTUE_WORK/CORONA/CORONA.html'">MID!</div>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>

  );
}

export default App;