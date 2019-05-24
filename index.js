var app = new Vue({
    el: "#app",
    data: {
        message: "hello world!",
        seen: true
    }
})

var demo2 = new Vue({
    el: "#demo2",
    data: {
        lists: [
            { ls: "learn english" },
            { ls: "study es6" },
            { ls: "learn vue" }
        ]
    }
})