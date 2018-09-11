'use strict';
const fs = require('fs');
const rawdata = fs.readFileSync('configuration.json');  
const configuration = JSON.parse(rawdata);  

var RouterContext = function(host, App, httpProxy, Methods){
     this.service = httpProxy(host);    
     for (var index_method in Methods){
            var method = Methods[index_method];
            if (method.type == "GET")
               App.route(method.path).get((req, res, next) => {
                   this.service(req, res, next); 
               });
            else if (method.type == "POST")
               App.route(method.path).post((req, res, next) => {
                    this.service(req, res, next); 
               });
           else if (method.type == "PUT")
            App.route(method.path).put((req, res, next) => {
                 this.service(req, res, next); 
            });
          else if (method.type == "DELETE")
            App.route(method.path).delete((req, res, next) => {
                 this.service(req, res, next); 
            });
        }
}

exports.configservices = function (App, httpProxy) {
    for (var index_route in configuration.routes) {
        var route = configuration.routes[index_route]; 
        var RouteContext = new RouterContext(route.host, App, httpProxy, route.methods);                 
    }
};