var results = [
    "Nakul", "Rahul", "Shahul", "Saikiran", "Mohan", "Lal", "Raj", "Tejas", "Singh", "Mohammed", "Chriswin", "Rajan", "Hari", "Narayanan", "Krishna",
    "Vishnu", "Sundar", "Manas", "Balu", "Prashanth", "Shyam", "Vishwas", "Giri",
]

var phone = [
    "9892128921", "219371289", "9217381627", "9182739263", "289139126", "9123912638", "19237912871", "8213687126", "123896812", "8912836912", "128931296",
    "291836192", "72198631", "819236912", "219837129", "9126389123", "21L2198231", "2107071242"
]

function deleteChild() {
    var e = document.querySelector("#findResult");
    var first = e.firstElementChild;
    while (first) {
        first.remove();
        first = e.firstElementChild;
    }
}

findButton.addEventListener('click', function() {
	deleteChild();
    for (var i = 0; i < 5; i++) {
        var a = Math.round(Math.random() * 22);
        var b = Math.round(Math.random() * 17);
        var string = results[a] + " " + phone[b];
        var temp = document.createElement("p");
        temp.innerText = string;
        findResult.appendChild(temp);
    }
});

signIn.addEventListener("click", function () {
	alert("logged in");
});