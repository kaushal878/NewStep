/* function AddBook() { */
/*     return ( */
/*         <div> */
{/*         <div className="container"> */}
{/*         <div> */}
{/*         <form> */}
{/*             <div>  */}
{/*                 <label> Title</label> */}
{/*                 <input type="text" placeholder="Title" /> */}
{/*             </div> */}
{/*             <div> */}
{/*                 <lable> ISBN</lable> */}
{/*                 <input name="Title" type="text" /> */}
{/*             </div> */}
{/*             <div> */}
{/*                 <lable> ISBN</lable> */}
{/*                  <input name="Title" type="text" /> */}
{/*             </div> */}
{/*         </form> */}
{/*     </div> */}
{/*    </div> */}
{/*     ); */}
{/* } */}
{/* export default AddBook; */}
{/*  */}
{/*  */}
import React from 'react';
import './addbook.css';
import './Addbook.js'; // Add this line to import the JavaScript file

function AddBook() {
    return (
        <div className="container">
            <h2>Book Details Form</h2>
            <form id="bookForm">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input id="title" name="title" required type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input id="author" name="author" required type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre:</label>
                    <select id="genre" name="genre" required>
                        <option value="">Select Genre</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="mystery">Mystery</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="pages">Number of Pages:</label>
                    <input id="pages" name="pages" required type="number" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddBook;