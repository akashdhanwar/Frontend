import "./JavaScriptRefresher.css";
import jsLogo from "../assets/images/js-logo-xs.png";

export default function JavaScriptRefresher() {
  return (
    <div className="javascriptRefresher">
      <header className="javascriptRefresherHeader">
        <img src={jsLogo} alt="JavaScript logo" />
        <h1>JavaScript Refresher</h1>
      </header>

      <ul className="javascriptRefresherUl">
        <li className="javascriptRefresherLi">Base Syntax & Rules</li>
        <li className="javascriptRefresherLi">Variables, Values & Operators</li>
        <li className="javascriptRefresherLi">Functions</li>
        <li className="javascriptRefresherLi">Objects</li>
        <li className="javascriptRefresherLi">Arrays</li>
        <li className="javascriptRefresherLi">Control Structures</li>
        <li className="javascriptRefresherLi">Browser APIs & The DOM</li>
        <li className="javascriptRefresherLi">
          Essential Features Used By React
        </li>
        <li className="javascriptRefresherLi">Tricky Parts</li>
      </ul>
    </div>
  );
}
