
import Main from "./components/mainpage";
import Buttons from "./components/buttons";
import Cards from "./components/cards";
import Color from "./components/utilities-color";
import Border from "./components/utilities-border";
import Animation from "./components/utilities-animation";
import Other from "./components/utilities-other";
import Login from  "./components/login";
import Register from  "./components/register";
import Forget from  "./components/forget-password";
import Errors from  "./components/blank";
import Empty from  "./components/empty";
import Table from  "./components/tables";
import Chart from  "./components/chartss";


import{BrowserRouter , Route , Switch, Redirect} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path ="/" exact component = {Main}/>
      <Route path ="/buttons"  component = {Buttons}/>
      <Route path ="/cards"  component = {Cards}/>
      <Route path ="/utilities-color"  component = {Color}/>
      <Route path ="/utilities-border"  component = {Border}/>
      <Route path ="/utilities-animation"  component = {Animation}/>
      <Route path ="/utilities-other"  component = {Other}/>
      <Route path ="/login"  component = {Login}/>
      <Route path ="/register"  component = {Register}/>
      <Route path ="/forget"  component = {Forget}/>
      <Route path ="/error"  component = {Errors}/>
      <Route path ="/blank"  component = {Empty}/> 
      <Route path ="/table"  component = {Table}/> 
      <Route path ="/charts"  component = {Chart}/> 
      <Route path = "/home">
        <Redirect to= "/" />
      </Route>
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
