const options = [
  {
      type: 'group',
      name: 'Web Development',
      items: [
          {name: 'Chief Technology Officer', value: 'Chief Technology Officer'},
          {name: 'CTO', value: 'CTO'},
          {name: 'R&D', value: 'R&D'},
          {name: 'Architect', value: 'Architect'},
          {name: 'Database Administrator', value: 'Database Administrator'},
          {name: 'Information Technology', value: 'Information Technology'},
          {name: 'IT Manager', value: 'IT Manager'},
          {name: 'IT Specialist', value: 'IT Specialist'},
          {name: 'IT Administrator', value: 'IT Administrator'},
          {name: 'Software Engineer', value: 'Software Engineer'},
          {name: 'Programmer', value: 'Programmer'},
          {name: 'Developer', value: 'Developer'},
          {name: 'Coder', value: 'Coder'},
          {name: 'Backend', value: 'Backend'},
          {name: 'Frontend', value: 'Frontend'},
          {name: 'Back end', value: 'Back end'},
          {name: 'Front end', value: 'Front end'},
          {name: 'Web Developer', value: 'Web Developer'},
          {name: 'Web Engineer', value: 'Web Engineer'},
          {name: 'SEO', value: 'SEO'},
          {name: 'Python', value: 'Python'},
          {name: 'Django', value: 'Django'},
          {name: 'Ruby', value: 'Ruby'},
          {name: 'Rails', value: 'Rails'},
          {name: 'PHP', value: 'PHP'},
          {name: 'JavaScript', value: 'JavaScript'},
          {name: 'React', value: 'React'},
          {name: 'ReactJS', value: 'ReactJS'},
          {name: 'Angular', value: 'Angular'},
          {name: 'AngularJS', value: 'AngularJS'},
          {name: 'JS', value: 'JS'},
          {name: 'Java', value: 'Java'},
          {name: 'HTML', value: 'HTML'},
          {name: 'CSS', value: 'CSS'},
          {name: 'C#', value: 'C#'},
          {name: 'C++', value: 'C++'},
          {name: 'SQL', value: 'SQL'},
          {name: 'MySQL', value: 'MySQL'},
          {name: 'Quality Assurance', value: 'Quality Assurance'},
          {name: 'QA', value: 'QA'}
      ]
  },
  {
      type: 'group',
      name: 'Mobile Development',
      items: [
          {name: 'Chief Technology Officer', value: 'Chief Technology Officer'},
          {name: 'CTO', value: 'CTO'},
          {name: 'R&D', value: 'R&D'},
          {name: 'Architect', value: 'Architect'},
          {name: 'Mobile Engineer', value: 'Mobile Engineer'},
          {name: 'Software Engineer', value: 'Software Engineer'},
          {name: 'Information Technology', value: 'Information Technology'},
          {name: 'IT Manager', value: 'IT Manager'},
          {name: 'IT Specialist', value: 'IT Specialist'},
          {name: 'IT Administrator', value: 'IT Administrator'},
          {name: 'Programmer', value: 'Programmer'},
          {name: 'Developer', value: 'Developer'},
          {name: 'Coder', value: 'Coder'},
          {name: 'Objective C', value: 'Objective C'},
          {name: 'Swift', value: 'Swift'},
          {name: 'Java', value: 'Java'},
          {name: 'iOS', value: 'iOS'},
          {name: 'Android', value: 'Android'},
          {name: 'Cordova', value: 'Cordova'},
          {name: 'Phonegap', value: 'Phonegap'},
          {name: 'React Native', value: 'React Native'},
          {name: 'Ionic', value: 'Ionic'},
          {name: 'Xcode', value: 'Xcode'},
          {name: 'Quality Assurance', value: 'Quality Assurance'},
          {name: 'QA', value: 'QA'},
          {name: 'Webmaster', value: 'Webmaster'}
      ]
  },
  {
      type: 'group',
      name: 'Data Science',
      items: [
          {name: 'Chief Technology Officer', value: 'Chief Technology Officer'},
          {name: 'CTO', value: 'CTO'},
          {name: 'Data Science', value: 'Data Science'},
          {name: 'Data Scientist', value: 'Data Scientist'},
          {name: 'Machine Learning', value: 'Machine Learning'},
          {name: 'Deep Learning', value: 'Deep Learning'},
          {name: 'Analytics', value: 'Analytics'},
          {name: 'Analyst', value: 'Analyst'},
          {name: 'Algebra', value: 'Algebra'},
          {name: 'Probability theory', value: 'Probability theory'},
          {name: 'Statistics', value: 'Statistics'},
          {name: 'Math', value: 'Math'},
          {name: 'Mathematician', value: 'Mathematician'},
          {name: 'Kaggle', value: 'Kaggle'},
          {name: 'Spark', value: 'Spark'},
          {name: 'Singa', value: 'Singa'},
          {name: 'Hadoop', value: 'Hadoop'},
          {name: 'Tensorflow', value: 'Tensorflow'},
          {name: 'Theano', value: 'Theano'},
          {name: 'Torch', value: 'Torch'},
          {name: 'Caffe', value: 'Caffe'},
          {name: 'CNTK', value: 'CNTK'},
          {name: 'MLlib', value: 'MLlib'},
          {name: 'Keras', value: 'Keras'},
          {name: 'MXNet', value: 'MXNet'},
          {name: 'scikit', value: 'scikit'},
          {name: 'Azure ML', value: 'Azure ML'},
          {name: 'ML Studio', value: 'ML Studio'},
          {name: 'R&D', value: 'R&D'}
      ]
  },
  {
      type: 'group',
      name: 'Design',
      items: [
          {name: 'Design', value: 'Design'},
          {name: 'Designer', value: 'Designer'},
          {name: 'Creative Director', value: 'Creative Director'},
          {name: 'Creative Head', value: 'Creative Head'},
          {name: 'Creative Lead', value: 'Creative Lead'},
          {name: 'Art Director', value: 'Art Director'},
          {name: 'UI', value: 'UI'},
          {name: 'UX', value: 'UX'},
          {name: 'Art Manager', value: 'Art Manager'},
          {name: 'Brand Identity', value: 'Brand Identity'},
          {name: 'Logo', value: 'Logo'},
          {name: 'Illustrator', value: 'Illustrator'},
          {name: 'Illustration', value: 'Illustration'},
          {name: 'Artist', value: 'Artist'},
          {name: 'Artworker', value: 'Artworker'},
          {name: 'User Interface', value: 'User Interface'},
          {name: 'User Experience', value: 'User Experience'},
          {name: 'Prototyping', value: 'Prototyping'},
          {name: 'Prototype', value: 'Prototype'},
          {name: 'Photoshop', value: 'Photoshop'},
          {name: 'Sketch', value: 'Sketch'},
          {name: 'InDesign', value: 'InDesign'},
          {name: 'Adobe', value: 'Adobe'}
      ]
  },
  {
      type: 'group',
      name: 'Public Relations',
      items: [
          {name: 'CEO', value: 'CEO'},
          {name: 'Chief Executive Officer', value: 'Chief Executive Officer'},
          {name: 'Communications', value: 'Communications'},
          {name: 'Marketing', value: 'Marketing'},
          {name: 'Brand', value: 'Brand'},
          {name: 'Branding', value: 'Branding'},
          {name: 'Content Manager', value: 'Content Manager'},
          {name: 'Content Strategist', value: 'Content Strategist'},
          {name: 'Copy Writer', value: 'Copy Writer'},
          {name: 'Public Affairs', value: 'Public Affairs'},
          {name: 'Public Relations', value: 'Public Relations'},
          {name: 'Event Coordinator', value: 'Event Coordinator'},
          {name: 'Event Manager', value: 'Event Manager'},
          {name: 'Social Media', value: 'Social Media'},
          {name: 'Media Director', value: 'Media Director'},
          {name: 'Media Coordinator', value: 'Media Coordinator'},
          {name: 'Relationship Manager', value: 'Relationship Manager'},
          {name: 'Media Relations', value: 'Media Relations'},
          {name: 'Media Specialist', value: 'Media Specialist'}
      ]
  },
  {
      type: 'group',
      name: 'Marketing',
      items: [
          {name: 'CEO', value: 'CEO'},
          {name: 'Chief Executive Officer', value: 'Chief Executive Officer'},
          {name: 'Marketing', value: 'Marketing'},
          {name: 'Marketer', value: 'Marketer'},
          {name: 'Account Coordinator', value: 'Account Coordinator'},
          {name: 'Account Executive', value: 'Account Executive'},
          {name: 'Advertising', value: 'Advertising'},
          {name: 'Ads', value: 'Ads'},
          {name: 'Advert', value: 'Advert'},
          {name: 'Art Director', value: 'Art Director'},
          {name: 'Assistant Director', value: 'Assistant Director'},
          {name: 'Brand', value: 'Brand'},
          {name: 'Branding', value: 'Branding'},
          {name: 'Product Manager', value: 'Product Manager'},
          {name: 'Business Development', value: 'Business Development'},
          {name: 'Communications', value: 'Communications'},
          {name: 'Content Manager', value: 'Content Manager'},
          {name: 'Content Writer', value: 'Content Writer'},
          {name: 'Community Manager', value: 'Community Manager'},
          {name: 'Copywriter', value: 'Copywriter'},
          {name: 'Creative Assistant', value: 'Creative Assistant'},
          {name: 'Creative Director', value: 'Creative Director'},
          {name: 'Market Research', value: 'Market Research'},
          {name: 'Media Assistant', value: 'Media Assistant'},
          {name: 'Media Buyer', value: 'Media Buyer'},
          {name: 'Media Director', value: 'Media Director'},
          {name: 'Media Planner', value: 'Media Planner'},
          {name: 'Media Researcher', value: 'Media Researcher'},
          {name: 'Media Relations', value: 'Media Relations'},
          {name: 'Promotion', value: 'Promotion'},
          {name: 'Promotions', value: 'Promotions'},
          {name: 'Public Relations', value: 'Public Relations'},
          {name: 'Publicity', value: 'Publicity'},
          {name: 'SEO', value: 'SEO'},
          {name: 'Ecommerce', value: 'Ecommerce'},
          {name: 'E commerce', value: 'E commerce'},
          {name: 'PMM', value: 'PMM'}
      ]
  },
  {
      type: 'group',
      name: 'Human Resources',
      items: [
          {name: 'HR', value: 'HR'},
          {name: 'Human Resources', value: 'Human Resources'},
          {name: 'Talent', value: 'Talent'},
          {name: 'Recruiter', value: 'Recruiter'},
          {name: 'Recruiting', value: 'Recruiting'},
          {name: 'Administrative', value: 'Administrative'},
          {name: 'Employee Relations', value: 'Employee Relations'},
          {name: 'HRD', value: 'HRD'},
          {name: 'Sourcing', value: 'Sourcing'},
          {name: 'Staffing', value: 'Staffing'}
      ]
  },
  {
      type: 'group',
      name: 'Sales & Business Development',
      items: [
          {name: 'CEO', value: 'CEO'},
          {name: 'Chief Executive Officer', value: 'Chief Executive Officer'},
          {name: 'Sales', value: 'Sales'},
          {name: 'Salesperson', value: 'Salesperson'},
          {name: 'Salesman', value: 'Salesman'},
          {name: 'Dealer', value: 'Dealer'},
          {name: 'Business Development', value: 'Business Development'},
          {name: 'Business Manager', value: 'Business Manager'},
          {name: 'Market Development', value: 'Market Development'},
          {name: 'Account Manager', value: 'Account Manager'},
          {name: 'Account Director', value: 'Account Director'},
          {name: 'Account Representative', value: 'Account Representative'},
          {name: 'Client Relationship', value: 'Client Relationship'},
          {name: 'Customer Relationship', value: 'Customer Relationship'},
          {name: 'Customer Success', value: 'Customer Success'},
          {name: 'Customer Care', value: 'Customer Care'},
          {name: 'Telesales', value: 'Telesales'},
          {name: 'Brand Ambassador', value: 'Brand Ambassador'},
          {name: 'Industry Representative', value: 'Industry Representative'},
          {name: 'Retail', value: 'Retail'}
      ]
  },
  {
      type: 'group',
      name: 'Finance & Accounting',
      items: [
          {name: 'Accounting', value: 'Accounting'},
          {name: 'Accountant', value: 'Accountant'},
          {name: 'Financial', value: 'Financial'},
          {name: 'Finance', value: 'Finance'},
          {name: 'Auditor', value: 'Auditor'},
          {name: 'Audit', value: 'Audit'},
          {name: 'Bookkeeper', value: 'Bookkeeper'},
          {name: 'Budget', value: 'Budget'},
          {name: 'Payroll', value: 'Payroll'},
          {name: 'Tax', value: 'Tax'}
      ]
  },
  {
      type: 'group',
      name: 'Product Management',
      items: [
          {name: 'Project Management', value: 'Project Management'},
          {name: 'Product Management', value: 'Product Management'},
          {name: 'Project Manager', value: 'Project Manager'},
          {name: 'Product Manager', value: 'Product Manager'},
          {name: 'Team Lead', value: 'Team Lead'},
          {name: 'Scrum', value: 'Scrum'},
          {name: 'Kanban', value: 'Kanban'},
          {name: 'PM', value: 'PM'},
          {name: 'PMM', value: 'PMM'},
          {name: 'CEO', value: 'CEO'},
          {name: 'CTO', value: 'CTO'},
          {name: 'Chief Executive Officer', value: 'Chief Executive Officer'},
          {name: 'Chief Technology Officer', value: 'Chief Technology Officer'},
          {name: 'R&D', value: 'R&D'}
      ]
  },
  {
      type: 'group',
      name: 'Startups',
      items: []
  }
];

export default options;