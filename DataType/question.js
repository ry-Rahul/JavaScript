const a = {
    "question": "What is your name?",
    "answer": "My name is John Doe",
    section :1,
    isPrincipal : false,
}

// can we change the value of a key in an object?
// Yes
a["question"] = "What is your age?";
console.log(a);

a['friend'] = "Rohit";
console.log(a);