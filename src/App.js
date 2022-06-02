import logo from './logo.svg';
import './App.css';

function App() {

  // 1st-programme

  const person = {
    name: "Amit",
    age: 25
  };

  console.log(person.name,person.age);



  // 2nd-programme

  const person1 = [
    {
        name: "Amit",
        age: 25,
    },
    {
        name: "Piyush",
        age: 40,
    },
  ];

  person1.map((v)=>{
    console.log(v.name , v.age);
  });



  // 3rd-programme

  const person2 = {
    name: "Amit",
    age: 25,
    course: [
        "C",
        "HTML"
    ]
  };

  console.log(person2.name,person2.age);
  person2.course.map((v)=>{
    console.log(v);
  });



  // 4th-programme

  const person3 = [
    {
        name: "Amit",
        age: 25,
        course: [
            "C",
            "HTML"
        ]
    },
    {
        name: "Ajay",
        age: 40,
        course: [
            "Java",
            "JavaScript"
        ]
    }
  ];

  person3.map((v)=>{
    console.log(v.name,v.age);
    v.course.map((v1)=>{
      console.log(v1);
    })
  });



  // 5th-programme

  const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
  };

  for (let k in myObj) {
    if (k === 'cars') {
      for (let j in myObj[k]) {
        console.log(myObj[k][j]);
      }
    } else {
      console.log(myObj[k]);
    }
  }



  // 6th-programme

  const data = {
    personal_info: {
        name: 'amit',
        age: 25,
        city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
        rwl: {
            admission: 50,
            vacant_seat: 10
        },
        rw2: {
            admission: 30,
            vacant_seat: 20
        },
        rw3: {
            admission: 25,
            vacant_seat: 25
        },
        rw4: {
            admission: 40,
            vacant_seat: 10
        }
    }
  };

  for (let k in data) {
    if (k === 'personal_info') {
      console.log(data[k].name , data[k].age , data[k].city);
    }
    else if (k === 'courses') {
      data[k].map((v)=>{
        console.log(v);
      })
    }
    else {
      for (let j in data[k]) {
        console.log(data[k][j].admission , data[k][j].vacant_seat);
      }
    }
  }



  // 7th-programme

  const MedicineData = 
  [
      {
        id: 101,
        name: 'Abacavir',
        quantity: 25,
        price: 150,
        expiry: 2022,
        status: true
      },
      {
        id: 102,
        name: 'Eltrombopag',
        quantity: 90,
        price: 550,
        expiry: 2021,
        status: true
      },
      {
        id: 103,
        name: 'Meloxicam',
        quantity: 85,
        price: 450,
        expiry: 2025,
        status: false
      },
      {
        id: 104,
        name: 'Allopurinol',
        quantity: 50,
        price: 600,
        expiry: 2023,
        status: true
      },
      {
        id: 105,
        name: 'Phenytoin',
        quantity: 63,
        price: 250,
        expiry: 2021,
        status: false
      }
  ];

  // Filter

  let fData = MedicineData.filter((d,i)=>
    d.status === true && d.expiry >=2022
  );

  // Reduce

  let ans = fData.reduce((acc,d,i) => acc + d.price , 0);



  // 8th-programme

  const EmployeeData = 
  [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ];

  // Filter

  let Edata = EmployeeData.filter((d,i)=>
    d.status === true
  );

  // Reduce

  let total = Edata.reduce((acc,d,i) => acc + d.salary + d.bonus , 0)

  return (
    <div className="App">
        <h1>Medicine Data Table:</h1>
        <br></br>
        <br></br>

        <table border="1" align="center" cellSpacing={0} cellPadding={10}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Expiry</th>
            <th>Status</th>
            <th>Total Price</th>
          </tr>
          {
            fData.map((v,i)=>{
              let {id,name,quantity,price,expiry,status} = v;
              return(
                <tr key={i}>
                  <td> {id} </td>
                  <td> {name} </td>
                  <td> {quantity} </td>
                  <td> {price} </td>
                  <td> {expiry} </td>
                  <td> {status.toString()} </td>
                  {i===0 ? <td rowSpan={2}> {ans} </td> : null }
                </tr>
              )
            })
          }
        </table>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Employee Data Table:</h1>
        <br></br>
        <br></br>

        <table border="1" align="center" cellSpacing={0} cellPadding={10}>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Bonus</th>
            <th>Status</th>
            <th>Employee Income</th>
            <th>Total Income</th>
          </tr>
          {
            Edata.map((v,i)=>{
              let {name , age , salary , bonus , status} = v;
              let income = v.salary + v.bonus;
              return(
                <tr  key={i}>
                  <td> {name} </td>
                  <td> {age} </td>
                  <td> {salary} </td>
                  <td> {bonus} </td>
                  <td> {status.toString()} </td>
                  <td> {income} </td>
                  {i===0 ? <td rowSpan={5}> {total} </td> : null }
                </tr>
              )
            })
          }
        </table>
    </div>
  );

}

export default App;
