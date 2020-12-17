import Navigation from "./Navigation";

function PageWithNavigation(props) {
  return (
    <div>
    <Navigation logout={props.logout} />
    <br/>
    {props.page}
    </div>
  );
}

export default PageWithNavigation;
