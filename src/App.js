import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex mx-6'>
      <div className=' flex-1 mt-7'>
      <h1 class='text-3xl font-bold'>Task</h1>
        <p className='mt-2'>
          To develop the interface design for the administrato.the interface is ment to administate
          rights for different product(projects)of company user.the interface serves to create
          delete,assign,altere user rights.the task is to develop2 parts of the administatation panel;
          page with users list and transfer to the page of one f the user of the list.
          
      
          <h4 className="mt-4 mb-2">Right --- User Roles in the System</h4>


          <h2 className="font-bold">Part 1 - A Page with a List of Users</h2>
         <p>It includes following the information</p>
         <p>-Full name of the user</p>
         <p>-User login</p>
         <p>-The number of project the user is involved it.</p>
     


          <h2 className='font-semibold mt-6' >page Functionality:</h2>

          ---Assignment of right (roles/rols ina specific project,with the posiblity to limit the validiity
            this given  role)for both:a serval user from  the list.
          
        </p>
      </div>
      <div className='flex-1 mt-5'>
        
        <h2 className="font-bold mt-8">Part 2 - User Page from the List of Project Info</h2>
<p>
it include information about project in which the user in involved,eith a
description of his rights(roles in project ,namely:)</p>

<p>-full name of project</p>
<p>-short name of project</p>
<p>-Information about right of project</p>
<p>-full name of role</p>
<p>-short name of role</p>
<p>-validity name of role</p>

<a href ='http://www.goggle.com' className='text-blue-500 underline'>link to google</a>

<h2 className='font-bold text-lg mt-3'>Page Functionality:</h2>

<p>---Assignment of right (roles/rols ina specific project,with the posiblity to limit the validiity
this role)for the user</p>
<p>---Removal of right(roles/rols ina specific project)from the user</p>
<p>---Duplication/copying of ight(roles/roles in a specific project/projects to
limit the validity of this role)to asssign the same right to another user/user from the list</p>
<p>---Right editing(roles/roles in specific projetc)of the given user in specfic project</p>

        
      </div>
    </div>
  );
}

export default App;
