!function($){function load(uri,callback){var xhr=new XMLHttpRequest;xhr.onreadystatechange=function(){4==xhr.readyState&&callback(200==xhr.status)},xhr.open("GET",uri,!0),xhr.send(null)}$.preload=function(files){for(var loaded=0,total=files.length,defer=$.Deferred(),i=0;i!=total;++i)load(files[i],function(success){if(!success)return defer.reject();defer.notify(++loaded/total),loaded==total&&defer.resolve()});return defer}}(jQuery);