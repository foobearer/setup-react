# setup-react
#####Installing Tools and Plugins to get started with your react project

1. Create a folder
    
    ``` mkdir hello-world-app ```

2. Initialize it with npm to create a package.json file

    ``` npm init ```
    
    Then it will ask you to answer the following questions:
    
      >* ```name:``` *(the name you want to call your app. by default it copies the name of your directory)*
      >* ```version:``` *(numbers that corresponds to your app's development, press enter to start it with 1.0.0)*
      >* ```description:``` *(a short explanation of what your project is)*
      >* ```entry-point:``` *(your module ID relative to the root directory of your app)*
      >* ```test-command:``` *(how are you going to test your code)*
      >* ```git-repository:``` *(link your github repository)*
      >* ```keywords:``` *(words to make it searchable on NPM when you publish it)*
      >* ```author:``` *(your name | email address)*
      >* ```license:``` *(this tell people how they are permitted to use it, and any restrictions you're placing on it)*
    
3. Install react and react-dom together with their dependencies
  
    ```npm install --save react react-dom```

4. Install all the dev environtment tools

  ```npm install --save html-webpack-plugin webpack web-dev-server babel-{core,loader} babel-preset-react```

5. Create `/app` folder and go inside the folder
  
  ```mkdir app && cd app```

6. Create an `index.html` file 

    ```touch index.html```

7. Create an `index.js` file
  
    ```touch index.js```

8. Outside the app folder, create a `webpack.config.js` file

    ```touch webpack.config.js```
    
9. Create a `.babelrc` file

    ```touch .baberc```

10. Setup your files... (index.js, index.html, .babelrc, package.json, webpack.config.js) 

11. Start your server

    ```npm start```

12. Then you can now view your site in `localhost:8080`






