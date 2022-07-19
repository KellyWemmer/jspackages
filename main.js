const packages = [{
    heavy: true,
    priority: false,
    fragile: false,
    to: 'Harrington',
    trackingNumber: '1324kjs',
    missing: false
},
{
    heavy: false,
    priority: true,
    fragile: true,
    to: 'Mark',
    trackingNumber: '1325sdk',
    missing: false
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Mick',
    trackingNumber: 'jffd147',
    missing: false
},

{
    heavy: false,
    priority: false,
    fragile: false,
    to: 'Jake',
    trackingNumber: 'acdc145',
    missing: false
},
{
    heavy: true,
    priority: true,
    fragile: true,
    to: 'Brittany',
    missing: false
},
{
    heavy: false,
    priority: true,
    fragile: false,
    to: 'Zach',
    trackingNumber: '8081baz',
    missing: false
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Jeremy',
    trackingNumber: 'suz2367',
    missing: false
}
]

let currentPackages = packages

function viewPackages() {
    for (let i = 0; i < packages.length; i++) {
        let package = packages[i]
        console.log(package)
        
    }
}
viewPackages()

function pickRandom(){
    let randomPackage = packages[Math.floor(Math.random()* packages.length)]
    console.log("random", randomPackage);  
    randomPackage.missing = true  
}
pickRandom()

function drawPackages() {
    // let package = packages[i]
    let template = ''
    currentPackages.forEach(package => template += `<div class="card-body">
    <p>${package.to}</p>
  </div>`
  );
  let packageElem = document.getElementById("package-card")
//   console.log(packageElem, template);
  packageElem.innerHTML = template
}
drawPackages()

function filterHeavy() {
    let missing = packages.find(package => package.missing == true)
    currentPackages = currentPackages.filter(package => package.heavy == missing.heavy)
    drawPackages()
}

function filterPriority() {
    let missing = packages.find(package => package.missing == true)
    currentPackages = currentPackages.filter(package => package.priority == missing.priority)
    drawPackages()
}

function filterFragile() {
    //debugger
    let missing = packages.find(package => package.missing == true)
    currentPackages = currentPackages.filter(package => package.fragile == missing.fragile)
    drawPackages()
}
