(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},17:function(e,t,a){e.exports=a(29)},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(15),r=a.n(l),c=a(5),s=a(6),i=a(8),u=a(7),m=a(9),h=a(32),d=a(13),f="https://reactnd-books-api.udacity.com",b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var v={Accept:"application/json",Authorization:b},k=function(){return fetch("".concat(f,"/books"),{headers:v}).then(function(e){return e.json()}).then(function(e){return e.books})},E=function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(d.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},g=function(e){return fetch("".concat(f,"/search"),{method:"POST",headers:Object(d.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books.error?[]:e.books})},p=(a(12),a(30)),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",vazio:[],result:[]},a.updateQuery=function(e){a.setState({query:e}),e.trim().length&&g(e.trim()).then(function(e){console.log("Pesquisa : ",e);var t=a.props.books,n=t.filter(function(e){return"currentlyReading"===e.shelf}),o=(t.filter(function(e){return"wantToRead"===e.shelf}),t.filter(function(e){return"read"===e.shelf}),e.map(function(e){console.log("withoutShelf : ",e);var a=t.find(function(t){return t.id===e.id},console.log("withShelf : ",t))!==a?n:e.shelf="none";return e}));a.setState({result:o})}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.query,n=t.result,l=t.vazio,r=this.props.onChangeShelf,c=""===a?l:n;return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"Search of Books")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement("input",{className:"search-books-bar",type:"text",placeholder:"Search by title",value:a,onChange:function(t){return e.updateQuery(t.target.value)}}))),o.a.createElement("div",null,o.a.createElement(p.a,{to:"/"},"Home")),o.a.createElement("ol",{className:"books-grid"},c.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.imageLinks&&e.imageLinks.thumbnail?e.imageLinks.thumbnail:'url("")',")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:e.shelf,onChange:function(t){return r(t,e)}},o.a.createElement("option",{value:"move",disable:"true"},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},e.title),o.a.createElement("div",{className:"book-authors"},e.authors)))})))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,a=(e.bookEstantes,e.onChangeShelf),n=t.filter(function(e){return"currentlyReading"===e.shelf}),l=t.filter(function(e){return"wantToRead"===e.shelf}),r=t.filter(function(e){return"read"===e.shelf});return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},n.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:e.shelf,onChange:function(t){return a(t,e)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},e.title),o.a.createElement("div",{className:"book-authors"},e.authors)))})))),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},l.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:e.shelf,onChange:function(t){return a(t,e)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},e.title),o.a.createElement("div",{className:"book-authors"},e.authors)))})))),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},r.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:e.shelf,onChange:function(t){return a(t,e)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},e.title),o.a.createElement("div",{className:"book-authors"},e.authors)))})))))),o.a.createElement("div",{className:"open-search"},o.a.createElement(p.a,{to:"/search"},"Search a book")))}}]),t}(o.a.Component),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.bookUpdateShelf=function(){k().then(function(e){console.log("EstandesAtualizadas",e),a.setState({books:e})}).catch(function(e){return console.log(e)})},a.handleChangeShelf=function(e,t){var n=e.target.value;t.shelf=n,E(t,n).then(function(){a.bookUpdateShelf()}).catch(function(e){return console.log(e)})},a.book=function(e){return"currentlyReading"===e.shelf?(console.log("Lendo atualmente : "),e.filter(function(e){return"currentlyReading"===e.shelf})):"wantToRead"===e.shelf?(console.log("Quero ler: "),e.filter(function(e){return"currentlyReading"===e.shelf})):"read"===e.shelf?(console.log("Ler : "),e.filter(function(e){return"read"===e.shelf})):e.shelf="none"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;k().then(function(t){console.log("Livros: ",t),e.setState(function(){return{books:t}})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h.a,{exact:!0,path:"/",render:function(){return o.a.createElement(y,{bookEstantes:e.book,books:e.state.books,onChangeShelf:e.handleChangeShelf})}}),o.a.createElement(h.a,{path:"/search",render:function(){return o.a.createElement(N,{books:e.state.books,onChangeShelf:e.handleChangeShelf})}}))}}]),t}(o.a.Component),S=(a(27),a(31));r.a.render(o.a.createElement(S.a,null,o.a.createElement(R,null)),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.37a3b17d.chunk.js.map