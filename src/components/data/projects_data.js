import hemansai from '../../assets/projects_images/hemansai.png'
import bookapi from '../../assets/projects_images/bookapi.png'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import storyapp from '../../assets/projects_images/storyapp.png'
import COVID from '../../assets/projects_images/COVID.jpg'
import forum from '../../assets/projects_images/forum.jpg'

const data_projects = [
    {
        name: 'COVID 19 Probability',
        image: COVID,
        deployed_url: 'https://github.com/Lalit14/COVID19-Cases-Data',
        github_url: 'https://github.com/Lalit14/COVID19-Cases-Data',
        category: ['HTML','CSS','API','machine_learning']
    },

    {
        name: 'Forum',
        image: forum,
        deployed_url: 'https://github.com/Lalit14/Forum',
        github_url: 'https://github.com/Lalit14/Forum',
        category: ['php','MySql', 'Bootstrap']
     },
     {
        name: 'AIforSoul',
        image: hemansai,
        deployed_url: 'https://aiforsoul.com/',
        github_url: '',
        category: ['node.js','react','mongoDB','expressjs']
    },


    {
        name: 'Book recommendation App',
        image: bookapi,
        deployed_url: 'https://github.com/Lalit14/googleBookApi',
        github_url: 'https://github.com/Lalit14/googleBookApi',
        category: ['html_css', 'api']
    },
    {
        name: 'StoryApp',
        image: storyapp,
        deployed_url: 'https://github.com/Lalit14/StoryApp',
        category: ['node.js','expressjs','mongoDB','html_css','Passportjs']
    },
  
    {
        name: 'Shop Website',
        image: hardware_store,
        deployed_url: '!#',
        category: ['html_css', 'vanilla']
    },

    {
        name: 'Dev Portfolio',
        image: portfolio,
        deployed_url: 'http://suprateem.herokuapp.com/',
        category: ['vanilla','html_css']
    },


]

export default data_projects;
