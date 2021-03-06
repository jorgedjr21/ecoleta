<p align="center">
  <img src="./web/src/assets/logo.svg" alt="Ecoleta">
</p>

<h4 align="center">Next Level Week powered by <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a></h4>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-mit-success">
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/jorgedjr21/ecoleta">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/jorgedjr21/ecoleta?style=social">
  <a href="https://www.linkedin.com/in/jorgejd21/" target="_blank"><img alt="Made By" src="https://img.shields.io/badge/made_by-jorgedjr21-blue"></a>
</p>

<p align="center">
  NodeJS, ExpressJS, ReactJS and React Native Applications  
</p>

<hr/>

<h2> What is this project? </h2>
This is a project to learn and improve my NodeJS, React and ReactNative Skills, powered by <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a></strong> in the Next Level Week Event. It's an applicaiton to save and provide informations about waste collection points.

There are three main applications at moment, but only one is functional
<ol>
  <li>Server: The api that we store and provide informations about the collection points</li>
  <li>Client Web: show informations and register new collection points</li>
  <li>Mobile App: Show informations about the collection points</li>
</ol>

<h3>RUNING SERVER locally</h3>

<ol>
  <li>Install PostgreSQL</li>
  <li>Install NPM dependencies</li>
  <li>Access the Postgresql and create a DATABASE called ecoleta_dev <code>CREATE DATABASE ecoleta_dev</code></li>
  <li>Run migrations with <code>npm run knex:migrate</code></li>
  <li>Run seeds with <code>npm run knex:seed</code></li>
  <li>RUN SERVER WITH <code>npm run dev</code></li>
</ol>


<h3> RUNING WEB locally</h3>

<ol>
  <li>Install NPM dependencies</li>
  <li>Configure the correct endpoint of Local Server Api Service <code>web/src/services/api.ts</code> (I believe its localhost:3333) </li>
  <li>Start server (from step above)</li>
  <li>Start start web client with <code>npm run start</code></li>
</ol>

<h3> RUNING MOBILE locally</h3>

<ol>
  <li>Install NPM dependencies</li>
  <li>Configure the correct endpoint of Local Server Api Service <code>mobile/src/services/api.ts</code> (I believe its <YOUR_LOCAL_IP>:3333) </li>
  <li>Start server (from step above)</li>
  <li>Start start mobile client with <code>npm start</code></li>
</ol>
