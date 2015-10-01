var appBaseDir  = 'client',
    distBaseDir = 'dist';

module.exports = (function(){
    return {
        routes : {

            app : {
                base    : appBaseDir,
                sass    : appBaseDir + '/stylesheets',
                scripts : appBaseDir + '/javascripts'
            },

            dist : {
                base   : distBaseDir,
                css    : distBaseDir + '/css',
                js     : distBaseDir + '/javascripts'
            }
        }
    }
})();