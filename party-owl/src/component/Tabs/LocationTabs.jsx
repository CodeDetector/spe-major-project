import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Loading from "../Loading/Loading.component";

const LocationTabs = ({description , offers , venue , contact}) => {

  if(!description) 
  {
    return(
      <Loading data-testid = "test-id-3"/> 
    )
  }
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify 
      data-testid = "test-id-3"
    >
      <Tab eventKey="Description" title="Description">
        <p>{description}</p>
      </Tab>
      <Tab eventKey="Offers" title="Offers">
      <p>{offers}</p>
      </Tab>
      <Tab eventKey="Venue" title="Venue">
      <p>{venue}</p>
      </Tab>
      <Tab eventKey="contact" title="T&C">
      <p>{contact}</p>
      </Tab>
    </Tabs>
  );
}

export default LocationTabs ; 