import React from 'react';
import acidicLakes from '../images/acidic-lakes.jpeg';
import airplaneTravel from '../images/airplane-travel.jpeg';
import atvs from '../images/atvs.jpeg';
import baliDelegation from '../images/bali-delegation.jpeg';
import kayaking from '../images/kayaking.jpeg';
import lombokVillages from '../images/lombok-villages.jpg';
import mlPredictedActualGraph from '../images/machine-learning-predicted-and-actual-values-graph.png';
import mlVariableImportanceGraph from '../images/machine-learning-variable-importance-graph.png';
import osuHackathonApp from '../images/OSU-hackathon-app.png';
import surfingApp from '../images/surfing-app.png';

function GalleryPage() {
  return (
    <>
      <section>
        <h2>Gallery</h2>
        <article className="gallery">
          <figure>
            <img src={acidicLakes} alt="Acidic Lakes" />
            <figcaption>Explored acidic lakes in Bandung, Indonesia (2024)</figcaption>
          </figure>
          <figure>
            <img src={airplaneTravel} alt="Looking Out of Airplane Window" />
            <figcaption>Landing in Japan for travel (2024)</figcaption>
          </figure>
          <figure>
            <img src={atvs} alt="Driving ATVS in Bandung, Indonesia" />
            <figcaption>Learned how to drive ATVs in Bandung, Indonesia (2024)</figcaption>
          </figure>
          <figure>
            <img src={baliDelegation} alt="Rock Carving of Bali Delegation" />
            <figcaption>Read about the Bali Delegation in Bali, Indonesia (2024)</figcaption>
          </figure>
          <figure>
            <img src={kayaking} alt="Person kayaking on the water" />
            <figcaption>Tried kayaking for the first time in Seattle, Washington (2024)</figcaption>
          </figure>
          <figure>
            <img src={lombokVillages} alt="Village in Lombok, Indonesia" />
            <figcaption>Learned about the customs and cultures at an Indonesian village in Lombok, Indonesia (2024)</figcaption>
          </figure>
          <figure>
            <img src={mlPredictedActualGraph} alt="Graph displaying actual and predicted values of maximum traffic volume" />
            <figcaption>Used Python and machine learning to create a graph that displays actual and predicted values of maximum traffic volume (2022)</figcaption>
          </figure>
          <figure>
            <img src={mlVariableImportanceGraph} alt="Graph displaying variable importance on how much traffic occurs at certain junctions" />
            <figcaption>Used Python and machine learning to create a graph that displays variable importance on how much traffic occurs at certain junctions (2022)</figcaption>
          </figure>
          <figure>
            <img src={osuHackathonApp} alt="App with a login screen" />
            <figcaption>Starting login screen for my submission for the OSU x Purs Hackathon where I used Swift to build an app centered around digital payment (2024)</figcaption>
          </figure>
          <figure>
            <img src={surfingApp} alt="Launch screen of an iOS app with the surfing app logo" />
            <figcaption>Launch screen of my app where I used Swift to track different surf spots' tide levels (2024)</figcaption>
          </figure>
        </article>
      </section>
    </>
  );
}

export default GalleryPage;

