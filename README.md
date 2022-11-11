Personal Portfolio Website build with Next.js, React, and Tailwind CSS

Built with:

* Next.js
* React
* Tailwind CSS



## Application Structure

```
.
├── .next                       # Project and build configurations
├── node_modules                # Modules install by NPM 
├── public                	    # Static public assets and uploads
│   │   
│   ├── favicon.ico             # ico of website 
│   ├── VictorCanas.pdf         # CV Resume
│   │
├── src                         # Folder/Application source code
│   ├── anaylics                # Folder
│   ├── assets                  # Folder
│   ├── components              # Folder
│   |   ├── about             	# About section of website 
│   |   ├── contact             # Contact section of website 
│   |   └── footer              # Footer section of website 
│   |   └── header              # Header section of website 
│   |   └── nav             	# Nav section of website 
│   |   └── projects            # Projects section of website 
│   └── module/auth
│   ├── pages                   # Folder
│   |   └── index.js            # Server application start point
│   ├── index.css               # CSS global stying
├── app.json                    # configure heroku
├── firebase.json               # configure firebase
└── jsconfig.json               # refernce root Javascript files 
└── netlify.toml                # configure netlify 
└── next-sitemap.js             # sitemap for google 
└── package-lock.json           # NPM Package-locl //exact ttree indentical tree
└── package.json           		# NPM  //basic info on project 
└── postcss.conifg.json         # Able to customize css 
└── README.md           		# Document file
└── tailwind.config.js          # configure tailwind CSS like plugins etc
└── vercel.json          		# configure vercel 
└── yarn.lock        			# yarn depencies 
