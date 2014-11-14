define(function (require) {

    "use strict";

    var _                   = require('underscore'),
        Backbone            = require('backbone'),
        UsefulFuncs         = require('app/utils/useful_func'),
        tpl                 = require('text!tpl/GenericItem.html'),
        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function (options) {
            this.removeContentStyles();
            this.checkImagePaths();
            this.render();     

        },
        
        events: {
            "click #inner-container a"   : 'linkClicked'
        },
        
        
        linkClicked: function(e){
    
            e.preventDefault();
    
            var href = $(e.currentTarget).attr('href');
            
            if (window.device.platform === 'android' || window.device.platform === 'Android') {
                //Android ONLY - ios can you inAppBrowser
                navigator.app.loadUrl(href, { openExternal:true });
            
            }
            else{
                window.open(href, '_blank');
            }
            
        },

        render: function () {
            this.$el.html(template({model:this.model}));
            return this;
        },
                
        
        removeContentStyles: function(){
      
      
            console.log('this.model is ');
            console.log(this.model);
      
            var content = UsefulFuncs.removeStyles(this.model.content);
            
            //if(content.length>0){
              this.model.content = content;
            //}     
        },
                
        /*
         * Check to see if image paths are relative
         */     
        checkImagePaths: function(){
    
            var src = "";
            var content = this.model.content;     
            $(content).find('img').each(function(i, obj){
                

                    src = $(obj).attr('src');
                    if(src.indexOf('http') === -1){
                        //therefore its a relative path
                        content = content.replace(src,feed_domain+src);                         
                    }
            });
            
            this.model.content = content;
    
        }

    });

});