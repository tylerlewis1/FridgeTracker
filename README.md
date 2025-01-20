# FridgeTracker

<p>This system tracks the expiration date of items in the fridge and notifies the user when it is expiring.</p>

<h2>Photos</h2>
<img src="https://github.com/user-attachments/assets/844ced7e-48e7-4101-9921-b7619f8c9be6">
<img src="https://github.com/user-attachments/assets/e037f4e3-490f-4e13-b4a4-f312eca8545c">
<img src="https://github.com/user-attachments/assets/458202d5-4855-4de7-a180-26d93b899ffc">
<h2>Set up</h2>
<ul>
  <li>Download the files on host machiene</li>
  <li>Make sure node.js is installed and set up. You can downlaod it <a href="https://nodejs.org">here</a></li>
  <li>Go into the webserver directrory via a command line. Type <code>node index.js</code> or <code>sudo node index.js</code></li>
  <li>Once it is running you can acessess the config by going to <code>http://localhost/webconfig</code></li>
  <li>Configure the program as you like. Go to the email instructions below for instructions on setting up the email function</li>
</ul>
<p>Now that the program is up you can go to <code>http://localhost</code> to add items to the fridge. You can view the items in the fridge by going to <code>http://localhost/display</code> or by pushing the button below on the add item page.</p>
<h2>Email Instructions</h2>
<p>The email function will send a email updated the users of what is expired in the system every day at 6PM.</p>
<ul>
  <li>First make a email for the app to send emails from</li>
  <li>Once the email is created you need a app password. There is a great video <a href="https://www.youtube.com/embed/pAPWBHxnFHM">here on how to obtain this.</li>
    <li>Once you have the password go to <code>http://localhost/webconfig</code>. Scroll to the bottom and put the email address in for the sender email and the password you generated above in for the sender password</li>
    <li>Click save and make sure emails are enabled above</li>
    <li>Finally add all the email recipients that you would like.</li>
</ul>
<img src="https://github.com/user-attachments/assets/cadaa9d6-136a-48a6-a5d4-5890e4d00bd4">

<h2>Need More Help</h2>
<p>Feel free to reatch out to me at any time at tglewis247@gmail.com.\n Thank you for downloading feel free to send any feedback or sugestions!</p>


