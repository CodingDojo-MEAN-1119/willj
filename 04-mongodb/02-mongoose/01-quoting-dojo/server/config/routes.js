app.get('/', (request, response) => {
    response.render('main');
});

app.post('/add_quotes', (request, response) => {
    console.log(request.body);
    Quote.create(request.body)
        .then(() => {
            response.redirect('/quotes')
        })
        .catch(err => response.json(err));
});

app.get('/quotes', (request, response) => {
    Quote.find({}).sort({createdAt: 'desc'})
        .then(quotes => {
            response.render('quotes', {all_quotes: quotes})
        })
        .catch(err => response.json(err))
});
app.listen(8000);