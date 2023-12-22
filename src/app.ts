// const express = require('express');
// import express = require('express');
import express from 'express';
import todoRoute from './routes/todo';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(todoRoute);

app.listen({ port: 3000 });