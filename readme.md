## Back-end API using NodeJs (for Infoware-Ecommerce)
<hr>

### tools / Packages / middlewares
<h5> Postman (for api test) </h5>
<h5> ExpressJs </h5>
<h5> MongoDB (Mongoose)</h5>
<h5> Multer </h5>
<h5> ExpressJs Validator </h5>
<h5> Dotenv </h5>
<h5> bcrypt </h5>
<h5> cors </h5>

<hr>

## API List
### For Owner/Admin ::

<h5> A. 1) Admin/staff account .... (post method) http://localhost:5000/admin/addAccount  </h5>
<h5>    2) Add product ............ (post method) http://localhost:5000/admin/addProducts/  </h5>
<h5>    3) View Order List ........ (get method)  http://localhost:5000/order/  </h5>
 
## For End Customers ::

<h5> B. 1) Add/create account ..... (post method) http://localhost:5000/user  </h5>
<h5>    2) Login .................. (post method) http://localhost:5000/user/login/  </h5>
<h5>    3) Browse Products ........ (get method)  http://localhost:5000/  </h5>
<h5>    4) Order Products ......... (post method) http://localhost:5000/order/  </h5>
<h5>    5) View Orders ............ (get method)  http://localhost:5000/order/Userid  </h5>

<hr>

# how to use API?
<h5>A. 1) Admin can create another admin or staff and also able to add products. For creating account needs -> name, email, mobile, password, avatar(user image optional) and role (admin or staff).</h5> <br>

<h5>A. 2) Admin can add products & needs -> productName, description, price & image (product image optional).</h5> <br>

<h5>A. 3) Admin or staff can see all order list with ordered user info</h5> <br>

<hr>

<h5>B. 1) For creating new user account needed -> name, email, mobile, password & avatar(user image optional)</h5> <br>

<h5>B. 2) For user login fields name ->  username (email or mobile), password</h5> <br>

<h5>B. 3) For browsing all product just call api with get method </h5> <br>

<h5>B. 4) For ordering product needs order info and user id. So I'm expecting that frontend developer will give me -> productName, description, price, image(product image optional) & user(user id). This information already exist in browse product api and user id also available for user login. When user logged in, it returns some user information like user id, name, email and mobile number </h5> <br>

<h5>B. 5) By calling api, it will show specific user's all order list. For api calling, have to pass user id through url (not query parameter) as a dynamic parameter.</h5> <br>

<hr>

### Video Presentation
link : https://drive.google.com/drive/folders/1KdTHp5oF2tzCekFqxduAe6LkY3cFw09Y?usp=sharing




