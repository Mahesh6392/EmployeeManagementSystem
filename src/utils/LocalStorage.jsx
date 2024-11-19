

const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare report",
        "taskDescription": "Complete the monthly financial report",
        "taskDate": "2024-11-20",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team meeting",
        "taskDescription": "Discuss project progress with team",
        "taskDate": "2024-11-10",
        "category": "Meetings"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Research",
        "taskDescription": "Look into new market trends",
        "taskDate": "2024-11-25",
        "category": "Research"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Isha",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client follow-up",
        "taskDescription": "Check in with client regarding feedback",
        "taskDate": "2024-11-12",
        "category": "Client"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update database",
        "taskDescription": "Refresh the client database with new information",
        "taskDate": "2024-11-19",
        "category": "Database"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Training session",
        "taskDescription": "Attend team training on new software",
        "taskDate": "2024-11-18",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Submit report",
        "taskDescription": "Send weekly report to manager",
        "taskDate": "2024-11-13",
        "category": "Reports"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare presentation",
        "taskDescription": "Prepare slides for upcoming conference",
        "taskDate": "2024-11-28",
        "category": "Presentations"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Organize files",
        "taskDescription": "Organize physical and digital files",
        "taskDate": "2024-11-23",
        "category": "Organization"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Submit tax forms",
        "taskDescription": "Submit quarterly tax forms",
        "taskDate": "2024-11-05",
        "category": "Finance"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Saanvi",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Data analysis",
        "taskDescription": "Analyze survey results for insights",
        "taskDate": "2024-11-30",
        "category": "Analysis"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Website update",
        "taskDescription": "Update website content",
        "taskDate": "2024-11-17",
        "category": "Web"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Project review",
        "taskDescription": "Review completed projects with team",
        "taskDate": "2024-11-11",
        "category": "Project Management"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  }
]

  

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
]   


export const  setLocalStorage =()=>{
    localStorage.setItem('employees' , JSON.stringify(employees));  //here employees in the ""  is the key value   and the employees in JSON.stringify is the value  
    localStorage.setItem('admin' ,JSON.stringify(admin));

}

export const getLocalStorage =()=>{
    const employees =JSON.parse(localStorage.getItem('employees'));   // here we are getting emplye data with the help of employees  key 
    const admin = JSON.parse(localStorage.getItem('admin'));
    // console.log(employees , admin);
    return {employees , admin};

}
    
  
  