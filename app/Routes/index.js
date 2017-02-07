var Post = require('../models/post');
 
module.exports = function (app) {
 
 app.get('/api/post/create', function(req, res){
 var newPost = new Post();
 // tạo đối tượng thể hiện lại của model Post và gán giá trị cho các thuộc tính của nó
 newPost.title = 'This is a title';
 newPost.description = 'This is a description for this post';
 newPost.content = 'Short content, just use for demo';
 newPost.creationDate = new Date();
 newPost.save(function(err, post) {
 // sử dụng phương thức save để insert
 // đối tượng xuống database
 if (err) {
   res.send(err); // nếu có lỗi sẽ trả về thông báo lỗi
 }
 else {
   res.json(post);
 }
 // nếu thêm thành công sẽ trả về giá trị mà ta mới chèn vào dưới dạng json
 });
});
//app.get('*', function(req, res){
//res.sendfile('public/index.html');
//});
};