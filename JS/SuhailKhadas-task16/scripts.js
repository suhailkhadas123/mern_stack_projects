const student=[
    {
        name:"Suhail Khadas",age:22,marks:85,class:"Bechelor", city:"Delhi"
    },
    {
        name:"Saad Kazi",age:22,marks:90,class:"Bechelor Of Computer Application",       city:"Pune"
    },
        {
        name:"mateen Bebal",age:30,marks:75,class:"Bechelor",city:"Delhi"
    },
        {
        name:"saniket kadam",age:22,marks:60,class:"Bechelor of Computer Application",city:"Delhi"
    },
        {
        name:"Suhel k",age:22, marks:85,class:"Bechelor", city:"pune"
    },
    { name: "Aman Sharma", age: 20, marks: 78, class: "Bachelor", city: "Mumbai" },
    { name: "Riya Patel", age: 21, marks: 92, class: "Bachelor", city: "Ahmedabad" },
    { name: "Karan Mehta", age: 23, marks: 74, class: "Bachelor", city: "Delhi" },
    { name: "Sneha Reddy", age: 22, marks: 88, class: "Bachelor", city: "Chennai" },
    { name: "Rahul Verma", age: 24, marks: 69, class: "Bachelor", city: "Bangalore" },
    { name: "Priya Nair", age: 21, marks: 95, class: "Bachelor", city: "Hyderabad" },
    { name: "Arjun Singh", age: 23, marks: 81, class: "Bachelor", city: "Jaipur" },
    { name: "Neha Joshi", age: 22, marks: 83, class: "Bachelor", city: "Nagpur" },
    { name: "Vikram Rao", age: 24, marks: 71, class: "Bachelor", city: "Kolkata" },
    { name: "Pooja Kulkarni", age: 21, marks: 90, class: "Bachelor", city: "Nashik" },
    { name: "Aditya Deshmukh", age: 23, marks: 76, class: "Bachelor", city: "Aurangabad" },
    { name: "Meera Iyer", age: 22, marks: 89, class: "Bachelor", city: "Coimbatore" },
    { name: "Rohit Yadav", age: 25, marks: 68, class: "Bachelor", city: "Lucknow" },
    { name: "Anjali Gupta", age: 20, marks: 94, class: "Bachelor", city: "Kanpur" },
    { name: "Siddharth Jain", age: 23, marks: 72, class: "Bachelor", city: "Indore" },
    { name: "Kavya Nambiar", age: 21, marks: 87, class: "Bachelor", city: "Kochi" },
    { name: "Harsh Vardhan", age: 24, marks: 79, class: "Bachelor", city: "Patna" }
    
]

let students=student.map((item)=>{
    return  `<div class="card">
                <h3>Name: ${item.name}</h3>
                <p><strong>Age:</strong> ${item.age}</p>
                <p><strong>Marks:</strong> ${item.marks}</p>
                <p><strong>Class:</strong> ${item.class}</p>
                <p><strong>City:</strong> ${item.city}</p>
            </div>`   
})


const div=document.getElementById("container");
div.innerHTML=students.join("");
function searchStudent() {
  let text = document.getElementById("searchInput").value.toLowerCase();


  let filteredStudents = student.filter(item =>
    item.name.toLowerCase().includes(text)
  );


  let cards = filteredStudents.map(item => {
    return `<div class="card">
              <h3>Name: ${item.name}</h3>
              <p>Age: ${item.age}</p>
              <p>Marks: ${item.marks}</p>
              <p>Class: ${item.class}</p>
              <p>City: ${item.city}</p>
            </div>`;
  });


  document.getElementById("container").innerHTML = cards.join("");
}