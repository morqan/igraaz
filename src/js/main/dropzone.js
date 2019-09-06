$(document).ready(function(){        
    //для контейнера с id #IDhtmlcont - 
    Dropzone.options.IDhtmlcont = {
      paramName: "file", // имя переменной, используемой для передачи файлов
      maxFilesize: 2, // лимит размера файла в МБ
      parallelUploads: 1, //кол-во параллельных обращений к серверу
      maxFiles: 10, //макс. число файлов в данном контейнере
      accept: function(file, done) {
        //произвольная функция проверки загружаемых файлов
        if (file.type == "image/png") {
          //сообщение без ошибки, если файл забракован
          done("I don`t accept PNGs.");
        }
        //чтобы файл был принят, нужно вызвать done без параметров
        else { done(); }
      }
    };
});


