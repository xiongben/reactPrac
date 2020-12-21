


var strategys = {
    isNonEmpty: function (value,errMsg) {
        if(value === "" || value == null) return errMsg;
    },
    minLength: function (value,length,errMsg) {
        if(typeof length == "string"){
            length = parseInt(length);
        }
        if(String(value).length < length) return errMsg;
    },
    isMobile: function (value,errMsg) {
        if(! /(^1[3|5|8][0-9]{9}$)/.test(value)) return errMsg;
    }
}


//validator类
var Validator = function () {
    this.cache = [];
}

Validator.prototype.add = function (domVal, rules) {
    var self = this;
    for(var i=0;i<rules.length;i++){
        (function (rule) {
            var strategyArr = rule.strategy.split(":");
            var errMsg = rule.errMsg;
            self.cache.push(function () {
                var strategy = strategyArr.shift();
                strategyArr.unshift(domVal);
                strategyArr.push(errMsg);
                return strategys[strategy].apply(self,strategyArr);
            })
        })(rules[i])
    }
}

Validator.prototype.start = function () {
    for(var i=0; i < this.cache.length; i++){
        var errormsg = this.cache[i]();
        if(errormsg){
            return errormsg;
        }
    }
}

//client端调用代码
// var registerForm = document.getElementById("form");
var registerForm = {
    userName: "xiaoming",
    password: 1236,
    phoneNumber: 13866666666,
};

var validataFunc = function () {
    var validator = new Validator();
    validator.add(registerForm.userName,[
        {
            strategy: "isNonEmpty",
            errMsg: "user's name can't be null",
        },
        {
            strategy: "minLength:6",
            errMsg: "the length of user name can't less than 6"
        }
    ]);
    validator.add(registerForm.password,[
        {
            strategy: "minLength:6",
            errMsg: "the length of password can't less than 6"
        }
    ]);
    validator.add(registerForm.phoneNumber,[
        {
            strategy: "isMobile",
            errMsg: "the format of phone number is error"
        }
    ]);
    var errMsg = validator.start();
    console.log(errMsg)
    return errMsg;
}

validataFunc();
