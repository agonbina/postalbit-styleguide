(function(window){

    /**
     * Check if an element 'el' is visible in the viewport
     * @param el
     * @returns {boolean}
     */
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    /**
     * Attaches events that invoke the handler function passed as argument
     */
    var trackElement = function() {
        if (window.addEventListener) {
            return function(handler) {
                addEventListener('load', handler, false);
                addEventListener('scroll', handler, false);
                addEventListener('resize', handler, false);
            };
        } else if (window.attachEvent)  {
            return function(handler) {
                attachEvent('load', handler);
                attachEvent('scroll', handler);
                attachEvent('resize', handler);
            };
        }
    }();

    /**
     * Discard scroll and resize events from a handler function
     * Use in conjuction with trackElement()
     */
    var stopTrackingElement = function() {
        if(window.addEventListener) {
            return function(handler) {
                removeEventListener('scroll', handler, false);
                removeEventListener('resize', handler, false);
            };
        } else if (window.attachEvent) {
            return function(handler) {
                detachEvent('scroll', handler);
                detachEvent('resize', handler);
            }
        }
    }();

    /**
     * Query if a given DOM elements' height and width is within the viewport bounds,
     * add CSS class to start the animations
     */
    var checkIphoneIsInViewport = function() {
        var iphone = document.getElementById('iphone');

        if(isElementInViewport(iphone)) {
            console.log('in viewport');
            iphone.className += ' animate';

            stopTrackingElement(checkIphoneIsInViewport);
        }
    };

    trackElement(checkIphoneIsInViewport);


})(window);