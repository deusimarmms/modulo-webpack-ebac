const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const loader = require('sass-loader')
module.exports={
   entry:'./src/index.js',
   output:{
    filename:'main.js',
    path:path.resolve(__dirname,'dist')
   },
   module:{
     rules:[
       /* Regex  */
        {
            /* Teste sass */
          test:  /\.(sa|c|sc)ss$/,
          use:[
            MiniCssExtract.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {/* Teste js */
            test:  /\.js$/i,
            exclude:/\node_modules/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        },
        {
            /* Teste css */
            test:  /\.ss$/i,
            use:[
                'style-loader',
                'css-load'
            ]
        },{
            test: /\.(jpeg|jpg|png|svg|gif)$/i,
            use:{
                loader:'file-loader',
                options:{
                    name: '[name].ext'
                }
            }
        }
     ]
   },
   plugins:[
       new HtmlWebpack({
        filename: 'index.html',
        template: './src/index.html'
       }),
       new MiniCssExtract({
        filename: 'style.css',
        
       })
   ]
   
    
}