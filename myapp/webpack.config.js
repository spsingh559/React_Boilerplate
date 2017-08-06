module.exports = {
   entry:"./public/components/App.jsx",
   output: {
       path:"./public/javascripts",
       filename:"bundle.js"
   },
   module:{
       loaders:[
        {loader: 'babel',
          test:/\.jsx$/,
          query: {
            presets: ["es2015","react","stage-1"]
         } }
        ]
   },
   resolve:{
    extensions:['','.js','.jsx','/index.js', '/index.jsx']
   }
}
