
//Desde gulp llamaremos los métodos src y dest
const{src, dest, watch} = require('gulp');
//Requiere el puente entre gulp-sass y la libreria de sass
const sass = require('gulp-sass')(require('sass'));

//Función para compilar scss a salida css
function css(done){
    //Identificar la cartpeta de orignen de estilos
    src("src/scss/app.scss")
    //Compilarla.. pipe para una tarea secuencial
        .pipe(sass())
    //Almacenar la salida en estilos con extensión css 
        .pipe(dest("build/css"))
    done();
}

exports.css = css;

//Función para agregar cambios automaticos
function dev(done){
    //Requiere un archivo a estar atento a cambios y la función
    //que se ejecuta. Similar a un evento.
    watch('src/scss/app.scss',css);
    done();
}
exports.dev = dev;