const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  console.log('Navigated to landing page');
  res.sendFile(path.join(__dirname,'..','public','pages','index.html'));
});

router.get('/software', (req, res) => {
  console.log('Navigated to /software');
  res.sendFile(path.join(__dirname,'..','public','pages','software.html'));
});

router.get('/support', (req, res) => {
  console.log('Navigated to /support');
  res.sendFile(path.join(__dirname,'..','public','pages','support.html'));
});

router.get('/services', (req, res) => {
  console.log('Navigated to /services');
  res.sendFile(path.join(__dirname,'..','public','pages','services.html'));
});

router.get('/services/mainframe-services', (req, res) => {
  console.log('Navigated to /mainframe-services');
  res.sendFile(path.join(__dirname,'..','public','pages','mainframe-services.html'));
});

router.get('/partners', (req, res) => {
  console.log('Navigated to /partners');
  res.sendFile(path.join(__dirname,'..','public','pages','partners.html'));
});

router.get('/about', (req, res) => {
  console.log('Navigated to /about');
  res.sendFile(path.join(__dirname,'..','public','pages','about.html'));
});

router.get('/contact', (req, res) => {
  console.log('Navigated to /contact');
  res.sendFile(path.join(__dirname,'..','public','pages','contact.html'));
});

router.get('/news', (req, res) => {
  console.log('Navigated to /news');
  res.sendFile(path.join(__dirname,'..','public','pages','news.html'));
});


router.get('/services/maintence-support', (req, res) => {
  console.log('Navigated to /maintence-support');
  res.sendFile(path.join(__dirname,'..','public','pages','maintence-support.html'));
});

router.get('/services/programming-support', (req, res) => {
  console.log('Navigated to /programming-support');
  res.sendFile(path.join(__dirname,'..','public','pages','programming-support.html'));
});

router.get('/support/ftp-support', (req, res) => {
  console.log('Navigated to /ftp-support');
  res.sendFile(path.join(__dirname,'..','public','pages','ftp-support.html'));
});

router.get('/careers', (req, res) => {
  console.log('Navigated to /careers');
  res.sendFile(path.join(__dirname,'..','public','pages','careers.html'));
});

router.get('/test-page', (req, res) => {
  console.log('Navigated to /careers');
  res.sendFile(path.join(__dirname,'..','public','pages','testPage.html'));
});

module.exports = router;