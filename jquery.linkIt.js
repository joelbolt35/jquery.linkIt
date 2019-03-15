/*
name: LinkIt
author: Joel Mora
version: 0.1.0
license: MIT
*/

(function($) {
    $.fn.linkIt = function(options) {
        //Default Settings
        var settings = $.extend({
            href: null,
            text: null,
            target: '_blank'
        }, options);

        //Validation
        if(settings.href == null) {
            console.log('You need an href option for LinkIt to work');
            return this;
        }

        return this.each(function() {
            var object = $(this);

            if (settings.text == null) {
                settings.text = object.text();
            }

        });
    }
}(jQuery));