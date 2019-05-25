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

var demo3 = new Vue({
    el: "#demo3",
    data: {
        message: "click to reverse this message"
    },
    methods: {
        reverseMessage: function () {

            this.message = this.message.split('').reverse().join('')
        }
    },
})

var demo4 = new Vue({
    el:"#demo4",
    data:{
        shuru:""
    }
})