const dns = require('dns');
var Crawler = require("crawler");
const jsdom = require("jsdom");
const cheerio = require('cheerio')
const { JSDOM } = jsdom;
var Crawler1 = require("simplecrawler");
var async = require("async");

var request = require('request');
// Get all
module.exports.sites = function (req, res, next) {
  /*var a = req.body.site;
  let fuckthat = [];
  dns.lookup(a, (err, address, family) => {
    fuckthat.push(address);
    fuckthat.push(family)
});*/
    }
//var d = new Crawler({
//    maxConnections : 10,
    // This will be called for each crawled page
  //  callback : function (error, res, done) {
    //    if(error){
      //      console.log(error);
        //}else{
          //  var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
          //  console.log(res.body);
      //  }
    //    done();
    //}
//});fullcrawl
module.exports.fullcrawl = function (req, res, next) {
  async function f() {
  try {
console.log("f executed");
const result = await la();
const resd = finalfunction();
}
catch(err) {
  return err;
}
}

f();
function la(){

  var promise = new Promise((resolutionFunc,rejectionFunc) => {
    let acc = [];
    var crawler1 = Crawler1("https://www.clickmatix.com.au");
    crawler1.maxDepth = 3; // Only first page is fetched (with linked CSS & images)
    crawler1.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    if(queueItem.stateData.contentType === "text/html; charset=UTF-8" || queueItem.stateData.contentType === "text/html; charset=utf-8")
    acc.push(queueItem);

  //    finalfunction.apply(null, acc);
  });
  crawler1.on("complete", function() {

    resolutionFunc(acc);
  });
    crawler1.start();
  });
  promise.then( (val) => {
    var count = 0;
      let fuckyeah = [];
      var element = {
        title: '',
        url: '',
        description: '',
        robots: '',
        pagesize: '',
        h1: '',
        h2: '',
        protocol: '',
        keywords: ''
      };
    console.log("promise executed");
    var c = new Crawler({
        maxConnections : 20,
        // This will be called for each crawled page
        callback : function (error, response, done) {
            if(error){
                console.log(error);
            }else{
                var $ = response.$;
                 element.title = $("title").text();
                 element.url = response.options.uri;
                 element.description = $("meta[name=description]").attr("content");
                 element.robots = $("meta[name=robots]").attr("content");
                 element.pagesize = response.body.length;
                 element.h1 = $("h1").text();
                 element.h2 = $("h2").text();
                 element.protocol = response.options.protocol;
                 element.keywords = $("meta[name=keywords]").attr("content");
                 var x = fuckyeah.length;
                 fuckyeah.push(element);
                 if(val.length === fuckyeah.length){
                console.log(fuckyeah.length);
                return res.send(fuckyeah);
              }
                }
              done();
            }
          });
          for(let i=0; i<val.length; i++){
            console.log();

          c.queue(val[i].url);
        }
        });
  console.log("crawling");
}
}


module.exports.crawll = function (req, res, next) {
  var a = req.body.site;
  console.log(a)
    let metainfo44 = [];
    let fuckff = [];
    var element = {
      title: '',
      protocol: '',
      referrer: '',
      requesttime: '',
      downloadtime: '',
      code: '',
      server: '',
      h1: '',
      h2: '',
      canonical: '',
      description: '',
      robots: '',
      pagesize: '',
      alttag: '',
      sitemapfound: '',
      robotsfile: '',
      filedatasize: ''
    };
     setTimeout(() => {
       for(let i = 0; i < fuckff.length; i++){
         if(fuckff[i] === "") {
           element.alttag = "images without alt"
         }
         else{
                element.alttag = "images with alt"
         }
        }
      metainfo44.push(element);
      console.log(metainfo44);
      return res.send(metainfo44);
      clearInterval();
    }, 15000);

    var c = new Crawler({
      maxConnections : 10,
      // This will be called for each crawled page
      callback : function (error, res, done) {
          if(error){
              console.log(error);
          }
          else{
              var $ = res.$;
              // $ is Cheerio by default
              //a lean implementation of core jQuery designed specifically for the server
              console.log("title:");
              var aa = $("title").text();
              element.title = aa;
              console.log("H1:" + $("h1").text());
              element.h1 = $("h1").text();
              element.h2 = $("h2").text();
              element.canonical = $("link[rel='canonical']").attr("href");
              element.description = $("meta[name=description]").attr("content");
              element.robots = $("meta[name=robots]").attr("content");
              element.pagesize = res.body.length;
//              element.alttag = $(link).attr('alt');
              //console.log("image alt:" + $('img').attr('alt'))
              var xyz;
            $('img').each(function(i, link){
              //console.log($(link).attr('alt'));
              let llp = [];
              llp = $(link).attr('alt');
              fuckff.push(llp);
              });
             };
             function handler(req, res, val) {

              // console.log("the value" + val);
               //element.alttag = fuckyeah;
              request(a + '/sitemap.xml', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                  element.sitemapfound = 'Yes' // Print the google web pages.
                } else {
                  element.sitemapfound = "No" // Print the google web pages.
                }
              })
            };
            function handlera(req, res) {
             request(a + '/robots.txt', function (error, response, body) {
               if (!error && response.statusCode == 200) {
                 element.robotsfile = 'Yes' // Print the google web pages.
               } else {
                 element.robotsfile = "No" // Print the google web pages.
               }
             })
           };
          done();
          handler();
          handlera();
      }
  });
  var crawler1 = Crawler1(req.body.site)
  crawler1.maxDepth = 1; // Only first page is fetched (with linked CSS & images)

  crawler1.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    if(queueItem.stateData.contentType === "text/html; charset=UTF-8" || queueItem.stateData.contentType === "text/html; charset=utf-8")
    //console.log(queueItem);
      var bb = queueItem.protocol;
      console.log("protocol:" + bb);
      element.protocol = bb;
      element.referrer = (queueItem.referrer);
      element.requesttime = (queueItem.stateData.requestTime);
      element.code = (queueItem.stateData.code);
      element.downloadtime = (queueItem.stateData.downloadTime);
      element.server = (queueItem.stateData.headers.server);
      element.filedatasize = (queueItem.stateData.actualDataSize);
    //console.log("protocol: " + queueItem.protocol);
    //console.log("Loading speed: " + queueItem.stateData.requestTime/1000 + "seconds");
    //console.log("Response: " + queueItem.stateData.code);
    //console.log("page download time: " + queueItem.stateData.downloadTime/1000 + "seconds");
  //console.log("server: " + queueItem.stateData.headers.server);

  });
  crawler1.start();
  c.queue(a);
}

module.exports.singlecrawl = function (req, res, next) {

/*let singlecrawl1 = [];
var crawler1 = Crawler1(req.body.site)
crawler1.maxDepth = 1; // Only first page is fetched (with linked CSS & images)

crawler1.on("fetchcomplete", function(queueItem, responseBuffer, response) {
  if(queueItem.stateData.contentType === "text/html; charset=UTF-8" || queueItem.stateData.contentType === "text/html; charset=utf-8")
  //console.log(queueItem);
    //console.log("referrer: " + queueItem.referrer);
    singlecrawl1.push(queueItem.referrer);
    singlecrawl1.push(queueItem.protocol);
    singlecrawl1.push(queueItem.stateData.requestTime);
    singlecrawl1.push(queueItem.stateData.code);
    singlecrawl1.push(queueItem.stateData.downloadTime);
    singlecrawl1.push(queueItem.stateData.headers.server);
    return res.send(singlecrawl1);
  //console.log("protocol: " + queueItem.protocol);
  //console.log("Loading speed: " + queueItem.stateData.requestTime/1000 + "seconds");
  //console.log("Response: " + queueItem.stateData.code);
  //console.log("page download time: " + queueItem.stateData.downloadTime/1000 + "seconds");
//console.log("server: " + queueItem.stateData.headers.server);

});
crawler1.start();*/
}
