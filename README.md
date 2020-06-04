<h1 align="center"> EColeta</h1>

<h4 align="center">Next Level Week powered by <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a></h4>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-mit-success">
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/jorgedjr21/ecoleta">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/jorgedjr21/ecoleta?style=social">
  <a href="https://www.linkedin.com/in/jorgejd21/" target="_blank"><img alt="Made By" src="https://img.shields.io/badge/made_by-jorgedjr21-blue"></a>
</p>
<hr/>

<h2> What is this project? </h2>
This is a project to learn and improve my NodeJS, React and ReactNative Skills, powered by <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a></strong> in the Next Level Week Event. It's an applicaiton to save and provide informations about waste collection points.

There are three main applications at moment, but only one is functional
<ol>
  <li>Server: The api that we store and provide informations about the collection points <strong>IN PROGRESS</strong></li>
  <li>Client Web: show informations and register new collection points <strong>TO BE DONE</strong></li>
  <li>Mobile App: Show informations about the collection points<strong>TO BE DONE</strong></li>
</ol>

<h3>RUNING SERVER locally</h3>

<ol>
  <li>Install PostgreSQ</li>
  <li>Install NPM dependencies</li>
  <li>Access the Postgresql and create a DATABASE called ecoleta_dev <code>CREATE DATABASE ecoleta_dev</code></li>
  <li>Run migrations with <code>npm run knex:migrate</code></li>
  <li>Run seeds with <code>npm run knex:seed</code></li>
  <li>RUN SERVER WITH <code>npm run dev</code></li>
<ol>