

var order500 = function (orderType,pay,stock) {
    if(orderType === 1 && pay === true){
        console.log("500元定金预购，得到100元优惠券");
    }else{
        return "nextSuccessor";
    }
}


var order200 = function (orderType,pay,stock) {
    if(orderType === 2 && pay === true){
        console.log("200元定金预购，得到50元优惠券");
    }else{
        return "nextSuccessor";
    }
}

var orderNormal = function (orderType,pay,stock) {
    if(stock > 0){
        console.log("普通购买无优惠券");
    }else{
        console.log("手机库存不足");
    }
}



var Chain = function (fn) {
    this.fn = fn;
    this.successor = null;
}

Chain.prototype.setSuccessor = function (fn) {
    return this.successor = fn;
}

Chain.prototype.passRequest = function () {
    var ret = this.fn.apply(this, arguments);
    if(ret === "nextSuccessor"){
        return this.successor && this.successor.passRequest.apply(this.successor,arguments);
    }
    return ret;
}

var chainOrder500 = new Chain(order500);
var chainOrder200 = new Chain(order200);
var chainOrderNormal = new Chain(orderNormal);

chainOrder500.setSuccessor(chainOrder200);
chainOrder200.setSuccessor(chainOrderNormal);

// chainOrder500.passRequest(1,false,0);
