import React, { useState } from "react";
import HeadTwoStyle from "../styles/HeadTwoStyle";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Save from "../assets/doc-data/save.gif"
export const Body = () => {
  
  const gifListObj = {
    1: {
      link: "https://media.giphy.com/media/MHqQTb5Vdtewlra4pG/giphy.gif",
      header: "Create Components",
      description: "Quickly start your project by creating and naming your first component. Interact with it in the CSS Container.",
    },
    2: {
      link: "https://media.giphy.com/media/YyPpNuH86r25JZNd46/giphy.gif",
      header: "Add and change HTML Elements",
      description: "Add HTML elements inside your component. You can now modify the specifications of your prototype.",
    },
    3: {
      link: "https://media.giphy.com/media/3eKBo9Qfi16mVdGIz4/giphy.gif",
      header: "Add attributes to components",
      description: "Add a class and/or an ID attribute to the component to tailor it to your needs.",
    },
    4: {
      link: "https://media.giphy.com/media/1ttTOYNOTYBSOoWtG1/giphy.gif",
      header: "Add Notes",
      description: "You can add personalized messages to help you keep track of your components.",
    },
    // 5: {
    //   link: "https://media.giphy.com/media/aXMkIStyTE0jkNlRtO/giphy.gif",
    //   header: "Add Two-Way Binding or other Attributes",
    //   description: "Options to add attributes to add specific functionality such as two way binding and class is now available.",
    // },
    // 6: {
    //   link: "https://media.giphy.com/media/Q0DYBMnuMLXoo5buvW/giphy.gif",
    //   header: "Style HTML Elements",
    //   description: "Stylize HTML elements to visualize your product. Adjustable style options to include height, width, color, and size.",
    // },
    // 7: {
    //   link: "https://media.giphy.com/media/3j42CzkMDEpEFFbJZT/giphy.gif",
    //   header: "Child Components",
    //   description: "Child components can be easily incorporated into the code snippet. Child components will be available to be added from the HTML element list.",
    // },
    // 8: {
    //   link: "https://media.giphy.com/media/vncIbdxJ36uU7a1bk3/giphy.gif",
    //   header: "Visualize Prototype",
    //   description: "Note the project's high level overview by visiting the Project Tree tab to observe the component's hierarchy.",
    // },
    // 9: {
    //   link: "https://media.giphy.com/media/JLCUOmKfQpOmdWUf4l/giphy.gif",
    //   header: "Code Snippet",
    //   description: "The boilerplate code is visible at every step of prototyping and dynamically updates according to new edits.",
    // },
    // 10: {
    //   link: "https://media.giphy.com/media/v8IbYTVrgFboHgpxBB/giphy.gif",
    //   header: "Export boilerplate",
    //   description: "Export the prototype's code in a lightweight boilerplate and develop the product further in an IDE.",
    // }
  }

  const [gifImage, setGifImage] = useState(gifListObj[1].link);

  const handleChange = (event) => {
    setGifImage(gifListObj[event.currentTarget.id].link);
  };

  const toggleButtonArray = [];
  for (let i = 1; i <= Object.keys(gifListObj).length; i++){
    toggleButtonArray.push(
      <ToggleButton>
        <input type="radio" class="btn-check" name="options" id={i} autocomplete="off" onClick={(event)=>handleChange(event)}/>
        <label class="btn btn-light" for={i}>
          <h1>{gifListObj[i].header}</h1>
          <p>{gifListObj[i].description}</p>
        </label>
      </ToggleButton>
    )
  }

  return (
    <div>
      <BodyHeader>New in Overvue 8.0</BodyHeader>
      <SectionContainer>
          <Section>
            <HeadTwoStyle>
                <h1>Component Library Import</h1>
                <p className="p">
                  Quickly start your project by importing components from popular Vue Component Libraries.
                </p>
            </HeadTwoStyle>
            <img
              alt="Add html element Gif"
              className="shadow"
              src="https://media.giphy.com/media/p70TAgHoCqFHK4RBEq/giphy.gif"
            />
          </Section>

          <Section>
            <img
              alt="Add html element Gif"
              className="shadow"
              src="https://media.giphy.com/media/B1HQXndtf6nM9FedMm/giphy.gif"
            />
            <HeadTwoStyle>
              <h1>Precise Component Size & Position</h1>
              <p className="p">
                Envision your project design with accurate component placement and sizing that persists upon project export.
              </p>
            </HeadTwoStyle>
          </Section>

          <Section>
          <HeadTwoStyle>
              <h1>Improved Exported Project Code</h1>
              <p className="p">
                Options to add OAuth boilerplate to add additional functionality to the exported prototype project code.
              </p>
            </HeadTwoStyle>
            <img
              alt="Add html element Gif"
              className="shadow"
              src={Save}
            />
          </Section>
      </SectionContainer>

      <AdditionalFeature>
        <BodyHeader className="additional-feature-header">Additional Features</BodyHeader>
        <div className="feature-toggle">
          <ImageContainer>
            <img
                  alt="Gif of exporting the prototype's boilerplate"
                  className="shadow"
                  src={gifImage}
            />
          </ImageContainer>
          <ToggleButtonContainer className="toggle-button-container">
            {toggleButtonArray}
          </ToggleButtonContainer>
        </div>
      </AdditionalFeature>
    </div>
  );
}; 

const AdditionalFeature = styled.div`
  padding-top: 2em;
  padding-bottom: 6em;
  overflow: hidden;
  background: linear-gradient(
    107deg,
    rgb(52, 73, 94) 0%,
    rgb(1, 4, 31) 70%
  );
  .feature-toggle{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .additional-feature-header {
    color: white;
  }

  .toggle-button-container::-webkit-scrollbar {
    display: none;
  }

`

const BodyHeader = styled.h1`
  color: black;
  margin: 1em;
  color: ##0f1730;
  font-size: 3em;
  font-weight: 300;
`
const ImageContainer = styled.div`
  margin: 1em;
  color: #000000;
  width: 40em;
  justify-self: end;
  align-self: center;
  max-height: 50vh;
  img {
    max-width: 35em;
    border-radius: 0.25em;
  }
`

const ToggleButtonContainer = styled.div`
  justify-self: start;
  align-self: center;
  // color: #000000;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 40vh;
  width: 35em;
  whitespace: no-wrap;

`

const ToggleButton = styled.div`
  // height: 100%;
  transition: all .2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }

  label {
    padding: 1em;
    border-style: solid;
    border-width: 1px;
    border-color: lightgrey;
    margin: 1em;
    width: 35em;
  }
  h1 {
    font-size: 1.25em;
    color: #0f1730;
  }
  p {
    font-size .75em;
    color: grey;
  }
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 60px 32px;
  h1{
    color:black;
  }
`

const Section = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  justify-content: space-between;
  margin-bottom: 120px;

  div {
    color: #000000
  }

  h1 {
    margin-bottom: 1.5rem;
    color: #0f1730;
  }
  p {
    color: #666666 !important;
    font-size: 1.5rem;
    font-weight: 300;
  }
  h1::after {
    background: hsla(0, 0%, 56.5%, 0.5);
    content: "";
    display: block;
    height: 1.5px;
    margin: 20px 0px;
    
  }

  img {
    max-width: 500px;
    width: 100%;
    margin-right: 60px;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    img {
      max-width: unset;
      margin: 0px;
      margin-bottom: 32px;
    }
  }
`