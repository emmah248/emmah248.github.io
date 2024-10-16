fetch('derulo.json')
    .then((res) => {
        return res.json()
    })
    .then((derulo) => {
        const projectList = document.querySelector('#projects')
        derulo.projects.forEach((projects) => {
            projectList.innerHTML += `<div class="projects">
    <div class="individual-projects">
        <h3>Project title</h3>
        <p>This is the project I made, isn't it great?</p>
    
    <a href="#" id="project-link-text">Github --></a>
        
            <div class="project-icon">
                <a href="#"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-1024.png" alt="Github logo"></a>
            </div>
    </div>
</div>`
        })
    })