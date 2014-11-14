define(function (require) {

    "use strict";

 
    var Feeds = {};

   
    Feeds.getFeed = function(date_str) {
    
         var feeds = {};
         
            feeds[""]  = '/api/get_category_posts/?slug=news';
            feeds["news"]  = '/api/get_category_posts/?slug=news';
            feeds["newsletters"]  = '/api/get_category_posts/?slug=newsletters';
            feeds["parents"]  = '/api/get_category_posts/?slug=parents-association-2';
            feeds["press"]  = '/api/get_category_posts/?slug=press-coverage';
            feeds["sport"]  = '/api/get_category_posts/?slug=sport-2';
            feeds["awards"]  = '/api/get_category_posts/?slug=awards';
            feeds["careers"]  = '/api/get_category_posts/?slug=careers-2';

            return feeds[Backbone.history.fragment];

    };
   
    return Feeds;

    
});