define(function (require) {

    "use strict";

    var _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/GenericList.html'),
        template            = _.template(tpl),
        empty_tpl           = require('text!tpl/EmptyList.html'),
        empty_template = _.template(empty_tpl);

    return Backbone.View.extend({

        initialize: function () {
         
            this.render();
            this.collection.on("reset", this.render, this);

        },

        render: function () {
            var context;
            if(Backbone.history.fragment==="" || Backbone.history.fragment==="undefined" || Backbone.history.fragment==="null"){
                context = "news";
            }
            else{
                context = Backbone.history.fragment;
            }
            
            //console.log('this.collection.toJSON() is ');
            //console.log(JSON.stringify(this.collection.models[0].attributes.posts));

            console.log('this.collection.toJSON() is ');
            console.log(this.collection.models[0].toJSON());
            
            if(this.collection.length>0){
                
                this.$el.html(template({items:this.collection.models[0].toJSON(), context:context}));
            }
            else{
                
                this.$el.html(empty_template({context:context}));
            }
            
            return this;
        },
 

    });

});