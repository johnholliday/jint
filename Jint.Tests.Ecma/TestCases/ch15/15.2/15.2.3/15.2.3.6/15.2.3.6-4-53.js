/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-53.js
 * @description Object.defineProperty - 'name' property doesn't exist in 'O', test [[Get]] of 'name' property is set as undefined if it is absent in accessor descriptor 'desc' (8.12.9 step 4.b)
 */


function testcase() {
        var obj = {};
        var setFunc = function (value) {
            obj.setVerifyHelpProp = value;
        };

        Object.defineProperty(obj, "property", {
            set: setFunc,
            enumerable: true,
            configurable: true
        });

        return accessorPropertyAttributesAreCorrect(obj, "property", undefined, setFunc, "setVerifyHelpProp", true, true);
    }
runTestCase(testcase);
