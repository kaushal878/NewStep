document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const bookDetails = {};
    formData.forEach((value, key) => {
        bookDetails[key] = value;
    });
    console.log(bookDetails);
    alert('Book details submitted successfully!');
    this.reset();
});
