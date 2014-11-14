define(function(require){
    
   "use strict";

    var projectModel = require('app/models/project'),
    constants = require('constants');
    
    var helper = {};
    
    helper.setProjectDetails = function(){
    
            var project = new projectModel.Project({id:constants.project_title});
            //get flicker details

            project.fetch({
                api: true,
                headers: {device_id:standard_device_id,api_key:standard_api_key},        
                success: function (data) {
                    console.log('in success');
                    flickr_user_id = data.get('flickr_user_id');
                    flickr_api_key = data.get('flickr_api_key');
                    feed_domain = data.get('feed_domain');

                },
                error:   function(model, xhr, options){
                   console.log('in setProjectDetails error');
                },
            });     
             
        };
    
    return helper;
    
})