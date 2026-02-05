
  const admin=[ {
    "id": 1,
    "email": "admin@company.com",
    "password": "admin123"
  },]


  const employee=[
    {
      "id": 1,
      "email": "employee1@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update Website Homepage",
          "taskDescription": "Redesign the homepage with new branding guidelines",
          "taskDate": "2026-02-15",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Client Meeting Prep",
          "taskDescription": "Prepare presentation slides for Q1 review",
          "taskDate": "2026-01-28",
          "category": "Business"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Fix Login Bug",
          "taskDescription": "Resolve authentication issue in mobile app",
          "taskDate": "2026-02-10",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Database Migration",
          "taskDescription": "Migrate legacy database to new system",
          "taskDate": "2026-01-20",
          "category": "Development"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Documentation",
          "taskDescription": "Create user manual for new feature release",
          "taskDate": "2026-02-18",
          "category": "Documentation"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Code Review",
          "taskDescription": "Review pull requests for sprint 12",
          "taskDate": "2026-02-08",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Unit Testing",
          "taskDescription": "Write unit tests for payment module",
          "taskDate": "2026-01-25",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Marketing Campaign",
          "taskDescription": "Launch social media campaign for product launch",
          "taskDate": "2026-02-20",
          "category": "Marketing"
        }
      ]
    },
    {
      "id": 6,
      "email": "employee6@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Customer Support",
          "taskDescription": "Handle tier-2 support tickets",
          "taskDate": "2026-02-12",
          "category": "Support"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Training Session",
          "taskDescription": "Conduct onboarding for new support team",
          "taskDate": "2026-01-30",
          "category": "Training"
        }
      ]
    },
    {
      "id": 7,
      "email": "employee7@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Security Audit",
          "taskDescription": "Perform quarterly security assessment",
          "taskDate": "2026-02-25",
          "category": "Security"
        }
      ]
    },
    {
      "id": 8,
      "email": "employee8@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "API Integration",
          "taskDescription": "Integrate third-party payment gateway",
          "taskDate": "2026-02-14",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Performance Testing",
          "taskDescription": "Load test application under peak traffic",
          "taskDate": "2026-01-22",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 9,
      "email": "employee9@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "UI/UX Research",
          "taskDescription": "Conduct user interviews for dashboard redesign",
          "taskDate": "2026-02-16",
          "category": "Design"
        }
      ]
    },
    {
      "id": 10,
      "email": "employee10@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Budget Report",
          "taskDescription": "Prepare Q1 financial summary",
          "taskDate": "2026-02-11",
          "category": "Finance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Expense Approval",
          "taskDescription": "Review and approve team expenses",
          "taskDate": "2026-01-27",
          "category": "Finance"
        }
      ]
    },
    {
      "id": 11,
      "email": "employee11@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Content Writing",
          "taskDescription": "Write blog posts for company website",
          "taskDate": "2026-02-19",
          "category": "Content"
        }
      ]
    },
    {
      "id": 12,
      "email": "employee12@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Server Maintenance",
          "taskDescription": "Update production servers to latest version",
          "taskDate": "2026-02-09",
          "category": "DevOps"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Backup Setup",
          "taskDescription": "Configure automated backup system",
          "taskDate": "2026-01-26",
          "category": "DevOps"
        }
      ]
    },
    {
      "id": 13,
      "email": "employee13@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Sales Presentation",
          "taskDescription": "Create pitch deck for potential clients",
          "taskDate": "2026-02-17",
          "category": "Sales"
        }
      ]
    },
    {
      "id": 14,
      "email": "employee14@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Data Analysis",
          "taskDescription": "Analyze user behavior patterns",
          "taskDate": "2026-02-13",
          "category": "Analytics"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Report Generation",
          "taskDescription": "Generate monthly analytics report",
          "taskDate": "2026-01-31",
          "category": "Analytics"
        }
      ]
    },
    {
      "id": 15,
      "email": "employee15@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Mobile App Testing",
          "taskDescription": "Test new features on iOS and Android",
          "taskDate": "2026-02-21",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 16,
      "email": "employee16@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Email Campaign",
          "taskDescription": "Design and send newsletter to subscribers",
          "taskDate": "2026-02-10",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "SEO Optimization",
          "taskDescription": "Optimize website for search engines",
          "taskDate": "2026-01-29",
          "category": "Marketing"
        }
      ]
    },
    {
      "id": 17,
      "email": "employee17@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Vendor Negotiation",
          "taskDescription": "Negotiate contracts with service providers",
          "taskDate": "2026-02-22",
          "category": "Business"
        }
      ]
    },
    {
      "id": 18,
      "email": "employee18@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Feature Development",
          "taskDescription": "Implement dark mode for application",
          "taskDate": "2026-02-14",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Bug Fixes",
          "taskDescription": "Fix critical bugs from last release",
          "taskDate": "2026-01-24",
          "category": "Development"
        }
      ]
    },
    {
      "id": 19,
      "email": "employee19@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Compliance Review",
          "taskDescription": "Ensure GDPR compliance across platforms",
          "taskDate": "2026-02-24",
          "category": "Legal"
        }
      ]
    },
    {
      "id": 20,
      "email": "employee20@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Team Building",
          "taskDescription": "Organize quarterly team event",
          "taskDate": "2026-02-28",
          "category": "HR"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Recruitment",
          "taskDescription": "Interview candidates for developer position",
          "taskDate": "2026-01-23",
          "category": "HR"
        }
      ]
    },
    {
      "id": 21,
      "email": "employee21@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Cloud Migration",
          "taskDescription": "Move services to AWS infrastructure",
          "taskDate": "2026-02-26",
          "category": "DevOps"
        }
      ]
    },
    {
      "id": 22,
      "email": "employee22@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Product Roadmap",
          "taskDescription": "Define features for Q2 2026",
          "taskDate": "2026-02-12",
          "category": "Product"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Market Research",
          "taskDescription": "Analyze competitor offerings",
          "taskDate": "2026-01-21",
          "category": "Product"
        }
      ]
    },
    {
      "id": 23,
      "email": "employee23@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Video Production",
          "taskDescription": "Create promotional video for social media",
          "taskDate": "2026-02-23",
          "category": "Content"
        }
      ]
    },
    {
      "id": 24,
      "email": "employee24@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Quality Assurance",
          "taskDescription": "Perform end-to-end testing for release",
          "taskDate": "2026-02-15",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Test Automation",
          "taskDescription": "Create automated test scripts",
          "taskDate": "2026-01-28",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 25,
      "email": "employee25@company.com",
      "password": "emp123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "System Monitoring",
          "taskDescription": "Set up monitoring dashboards",
          "taskDate": "2026-02-27",
          "category": "DevOps"
        }
      ]
    }
  ]


  export const setlocalStorage=()=>{

    localStorage.setItem('employee',JSON.stringify(employee));
    localStorage.setItem('admin',JSON.stringify(admin));


  }

  export const getlocalStorage=()=>{

    const employees=JSON.parse(localStorage.getItem('employee'));
    const admin=JSON.parse(localStorage.getItem('admin'));


    console.log(employees,admin);
    

     
  }
