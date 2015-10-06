var appBaseDir  = 'app',
    distBaseDir = 'dist';

module.exports = (function(){
    return {
        routes : {

            app : {
                base    : appBaseDir,
                sass    : appBaseDir + '/stylesheets',
                scripts : appBaseDir + '/javascripts',
                images  : appBaseDir + '/images'
            },

            dist : {
                base   : distBaseDir,
                css    : distBaseDir + '/stylesheets',
                js     : distBaseDir + '/javascripts',
                images  : distBaseDir + '/images'
            }
        }
    }
})();
