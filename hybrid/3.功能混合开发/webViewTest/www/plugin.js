var map = {};

function callNative(name, successCallBack, failCallBack){
	window.location.href = 'felixlu://' + name;
	
	map[name] = {};
	map[name].success = successCallBack;
	map[name].fail = failCallBack;
}

const wx = {
    nativeCallback:function (name, data){
        var status = data.status;
        var callback = map[name][status];
        callback(data.value);
    }
}

window.wx = wx
