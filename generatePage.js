const Manager = require("./lib/Manager")


function generateCard(data) {

 let result = ''
 for(var i = 0; i < data.length; i++) {
     let person = data[i]

    let name = person.name
    let id = person.id
    let email = person.email
    let role = person.getRole()

    if(role === 'manager'){
        let office = person.office 
        let manager = `
        <div style="margin: 15px;">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Employee Name: ${name}</h5>
              <div class="card-header">
              <h4>
              <i class="fas fa-mug-hot"></i>
                Manager
                </h4>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                <a href ="mailto:Employee Email: ${email}">${email}</a>
                </li>
                <li class="list-group-item">Employee ID: ${id}</li>
                <li class="list-group-item">Manger Office Number: ${office}</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        `
   
        result += manager;
    } else if (role === 'intern') {
        let school = person.school
        let intern = `
        <div style="margin: 15px;">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Employee Name: ${name}</h5>
              <div class="card-header">
                <h4>
                <i class="fas fa-user-graduate"></i>
                Intern
                </h4>
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item"> 
              <a href ="mailto:Employee Email: ${email}">${email}</a>
              </li>
                <li class="list-group-item">Employee ID: ${id}</li>
                <li class="list-group-item">Intern School: ${school}</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        `
        result += intern;
    } else if (role === 'engineer') {
        let github = person.github
        let engineer = `
        <div style="margin: 15px;">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Employee Name: ${name}</h5>
              <div class="card-header">
              <h4>
              <i class="fas fa-glasses"></i>
                Engineer
                </h4>
              </div>
              <ul class="list-group list-group-flush">
             <li class="list-group-item"> 
             <a href ="mailto:Employee Email: ${email}">${email}</a> 
             </li>
                <li class="list-group-item">Employee ID: ${id}</li>
                <li class="list-group-item">
                <a href="https://github.com/${github}" target="_blank">Github: ${github}</a>
                </li>
              </ul>
             </div>
           </div>
         </div>
        </div>
        `
        result += engineer;
    }

 }

 return result;
 
}

function firstHTML (writeData) {
    let header = `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
      <title>Employee Generator</title>
  </head>
  <header>
      <h1 style="height: 85px; color:white; margin: 0; padding: 0; text-align: center; font-size: 40px; background-color: red;">
          My Team
      </h1>
  </header>
  <body>
  <div style="margin: 15px;" class="row row-cols-1 row-cols-md-3 g-4">
  ${generateCard(writeData)}

     </div>
   </body>
</html>
    `  

    return header;
}

module.exports = firstHTML
