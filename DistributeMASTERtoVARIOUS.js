
/*
2020.07.22
Script created by Andries Triegaardt

Purpose: to recreate "distribute" functionality that was provided by QlikView Publisher.

One master app is published and replaces multiple applications.

Improvements to follow.

*/

// Your master application that is in your work stream goes here
// Master Applications
var MasterApp = '423f907b-2ae0-4ef1-819d-f1e4eb4553dd';

// Apps to be replaced, which have been pubished already, go here
var TargetApp = [
    '7511fc11-b19d-4eac-9f19-1ef5a2b5c2f3',
    '52011bba-7e4f-4076-9728-4d80d50379f0',
    'e15ed314-6773-44f9-b4c7-107471fdfd5c',
    '5b976770-fcf7-4411-8eb4-0f2718ded595',
    'b11eed99-4258-4995-9a1c-d309b9d2dc3a',
    'b72dd67c-3284-456c-a9d0-9428153b50a9',
    'a8c3ec4d-803b-4bf4-9eb9-5a34bf38756d',
    'b2d18110-3bb9-4d4e-a2e0-f6175cb83f5f',
    '2495c555-d822-4477-90e2-00a50e27bb6a'
];

//---------------------------------------------------------------------------------------------

var https = require('https');
var fs = require('fs');

var host = 'your.qliksense.server'; 

var x;

for (x of TargetApp) {

  // TODO: remove path from this block and use object.assign in https call to reuse requestConfig multiple times
    var requestConfig = {
    hostname: host,
    port: 4242,
    path: '/qrs/app/' + MasterApp + '/replace?xrfKey=LxNtPh3K1MobhGrT&app=' + x,
    method: 'PUT',
    headers: {
      'x-qlik-xrfkey': 'LxNtPh3K1MobhGrT',
      'X-Qlik-User' : 'UserDirectory= Internal; UserId= sa_repository'
    },
    key: fs.readFileSync("..\\Certificates\\" + host + "\\client_key.pem"),
    cert: fs.readFileSync("..\\Certificates\\" + host + "\\client.pem"),
    ca: fs.readFileSync("..\\Certificates\\" + host + "\\root.pem")
  };

  // TODO add https call to /qrs/task/stop/many to stop all tasks reloading apps to be replaced
  // TODO change to use promise()
  https.get(requestConfig, function(res) {
    console.log("Got response: " + res.statusCode);
    res.on('error', function(e) {
        console.log("Got error: " + e.message);
        });
  });
};

// See Start_Tasks.js to start tasks that reload replaced apps.
