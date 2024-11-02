import "./styles.css";
import Header from "./containers/Header";
import Maintool from "./containers/Maintool";
export default function App() {
  return (
    <>
      <div className="App">
        <Header
          sitename="TextLink"
          sitedesc="A tool for edit your text fast By"
          byname="@harshitj183"
        />

<Maintool  placeholdername="Type something ..." headname= " Enter  Your Text to  Convert "/>
      </div>

    </>
  );
}
