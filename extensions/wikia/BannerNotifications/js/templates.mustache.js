define( 'BannerNotifications.templates.mustache', [], function() { 'use strict'; return {
    "BannerNotifications" : '<div class="wds-banner-notification {{typeClassName}}"><div class="wds-banner-notification__icon">{{{icon}}}</div><span class="wds-banner-notification__text">{{{content}}}</span><svg class="wds-icon wds-icon-tiny wds-banner-notification__close" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><pathd="M6 4.554L2.746 1.3C2.346.9 1.7.9 1.3 1.3c-.4.4-.4 1.046 0 1.446L4.554 6 1.3 9.254c-.4.4-.4 1.047 0 1.446.4.4 1.046.4 1.446 0L6 7.446 9.254 10.7c.4.4 1.047.4 1.446 0 .4-.4.4-1.046 0-1.446L7.446 6 10.7 2.746c.4-.4.4-1.047 0-1.446-.4-.4-1.046-.4-1.446 0L6 4.554z"fill-rule="evenodd"/></svg></div>',
    "done": "true"
  }; });
