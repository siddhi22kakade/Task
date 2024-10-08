import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex mx-6'>
      <div className=' flex-1 mt-7'>
      <h1 class='text-3xl font-bold'>Task</h1>
        <p>
          To develop the interface design for the administrato.the interface is ment to administate
          rights for different product(projects)of company user.the interface serves to create
          delete,assign,altere user rights.the task is to develop2 parts of the administatation panel;
          page with users list and transfer to the page of one f the user of the list.
          </p>
          
          <p className=" mb-2 text-gray-400">
          Right* - User Roles in the System
          </p>

          <h2 className="font-bold mt-5" >Part 1 - A Page with a List of Users</h2>
          <p className='mt-2 '>It includes following the information</p>
          <ul class ="m-y-1">
         
         <li className="before:content-['-'] before:mr-2">Full name of the user</li>
         <li className="before:content-['-'] before:mr-2">User login</li>
         <li className="before:content-['-'] before:mr-2">The number of project the user is involved it.</li>
         </ul>
        
         <h2 className='font-bold mt-6'>
         Page Functionality:</h2>
          
          <p className='mt-2 '>Assignment of right (roles/rols ina specific project,with the posiblity to limit the validiity
          given  role)for both:a serval user from  the list.</p>
         </div>
           <div className='flex-1 mt-5'>
        
          <h2 className="font-bold mt-8">
          Part 2 - User Page from the List of Project Info
          </h2>
<p>
it include information about project in which the user in involved,eith a
description of his rights(roles in project ,namely:)</p>
<ul className ="m-y-1 ">
<li className="before:content-['-'] before:mr-2">full name of project</li>
<li className="before:content-['-'] before:mr-2">short name of project</li>

<li className="before:content-['-'] before:mr-2">Information about right of project</li>
<li className="before:content-['-'] before:mr-2">full name of role</li>
<li className="before:content-['-'] before:mr-2">short name of role</li>
<li className="before:content-['-'] before:mr-2">validity name of role</li>
</ul>

<p className='mt-4'></p>
<a href='http://www.google.com' className='text-blue-500 underline mb-2'>
  This is a link to Google and search any information
</a>

<h2 className='font-bold text-lg mt-5'>
  Page Functionality:
</h2>
<ul className=' mt-3 space-y-1'>

<li className="before:content-['-'] before:mr-2">Assignment of right (roles/rols ina specific project,with the posiblity to limit the validiity
this role)for the user</li>
<li className="before:content-['-'] before:mr-2">Removal of right(roles/rols ina specific project)from the user</li>
<li className="before:content-['-'] before:mr-2">Duplication/copying of ight(roles/roles in a specific project/projects to
limit the validity of this role)to asssign the same right to another user/user from the list</li>
<li className="before:content-['-'] before:mr-2">Right editing(roles/roles in specific projetc)of the given user in specfic project</li>

       </ul>
      </div>
    </div>
  );
}

export default App;
