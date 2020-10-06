try {
    var readYaml = require('read-yaml');
    var mergeYaml = require('merge-yaml');
    module.exports = {
        dataselectorfromoneyaml: function (field) {
            var config = readYaml.sync('features/yml/selector.yml');
            var selectorfinal = config[field];
            console.log("selectorfinal ", selectorfinal);
            return selectorfinal;
        },

        getdataselector: function (field) {
            var ds = 'test';
            var ds = this.dataselectormultipleyaml(field);
            console.log("Dataselector value is ", ds);
            return ds;
        },

        dataselectormultipleyaml: function(field) {
            var finalyaml = mergeYaml(['features/yml/selector.yml','features/yml/selector2.yml']);
            var selectorfinalnew = finalyaml[field];
            console.log("newdataselector ", selectorfinalnew);
            return selectorfinalnew;
        },

    };
}
catch (err) {
    console.log("Error in world.js");
}