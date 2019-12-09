define( 'ext.wikia.AffiliateService.templates', [], function() { 
    'use strict'; 
    
    return {
        "AffiliateService_unit" : '<div class="affiliate-unit__wrapper">' + 
            '<div class="affiliate-unit__image-wrapper" style="background-image: url({{image}})"></div>' + 
            '<div class="affiliate-unit__info">' + 
                '<p class="affiliate-unit__header">{{heading}}</p>' + 
                '<a href={{link}} class="wds-button wds-is-secondary affiliate-unit__cta">{{buttonText}}</a>' + 
                '<div class="affiliate-unit__logo light">{{{logoLight}}}</div>' + 
                '<div class="affiliate-unit__logo dark">{{logoDark}}</div>' + 
            '</div>' + 
        '</div>',
    }; 
});
