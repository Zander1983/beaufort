define(function (require) {

    "use strict";

    var Backbone            = require('backbone'),
        Feeds               = require('app/utils/feed_paths'),
        id=1,
        xml,
        parsed = [], 
        title = "", 
        description = "", 
        pubDate = "", 
        type,
        
        Generic = Backbone.Model.extend({  

        }),

        
        GenericCollection = Backbone.Collection.extend({

            model: Generic,
         
            url: function(){
                    type = Backbone.history.fragment;
                    if(in_browser===false){
                        ///http://cbcthurles.schoolspace.ie/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw
                        return this.feed_domain+Feeds.getFeed();
                    }
                    else{
                        console.log('returning');
                        console.log("/school-proxy.php?feed_domain="+this.feed_domain+"&context="+Backbone.history.fragment);
                        return "/school-proxy.php?feed_domain="+this.feed_domain+"&context="+Backbone.history.fragment;
                    }
            },
                    
            initialize: function(options){
                this.feed_domain = options.feed_domain;
        
            },
        
            getType: function(){
        
                return type;
        
            },
                    
            setType: function(name){
        
                type = name;
        
            },        
                    
                    /*
            fetch: function (options) {
                options = options || {};
                options.dataType = "xml";
                return Backbone.Collection.prototype.fetch.call(this, options);
            }*/

        });


    return {
        Generic: Generic,
        GenericCollection: GenericCollection
    };

});